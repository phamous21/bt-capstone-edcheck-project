/**
 * EdCheck API client.
 *
 * Base URL comes from VITE_API_BASE_URL when set, otherwise falls back to the
 * hosted backend. Create a `.env.local` with:
 *   VITE_API_BASE_URL=https://edtech-8m3h.onrender.com
 *
 * NOTE ON FIELD NAMES: the exact request/response shapes weren't available to
 * verify against (the API root returns 404 and there's no published schema), so
 * the helpers below send the most conventional payload shape and read responses
 * defensively via `pick()` — e.g. a token is read from `token`, `accessToken`,
 * or `access_token`. If the backend uses different names, adjust the `pick()`
 * candidate lists and the sign-up payload in `signUp()` — those are the only
 * places field names are hardcoded.
 */

export const API_BASE_URL =
  import.meta.env?.VITE_API_BASE_URL || "https://edtech-8m3h.onrender.com";

const TOKEN_KEY = "edcheck.token";

/* ------------------------------------------------------------------ */
/* Token storage                                                       */
/* ------------------------------------------------------------------ */

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* storage unavailable (private mode, etc.) — requests just won't persist */
  }
}

export function clearToken() {
  setToken(null);
}

/* ------------------------------------------------------------------ */
/* Core request helper                                                 */
/* ------------------------------------------------------------------ */

export class ApiError extends Error {
  constructor(message, { status, data } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

/** Reads the first present key from an object. */
export function pick(obj, keys, fallback = undefined) {
  if (!obj || typeof obj !== "object") return fallback;
  for (const key of keys) {
    if (obj[key] !== undefined && obj[key] !== null) return obj[key];
  }
  return fallback;
}

/**
 * Many APIs wrap payloads as { data: ... } or { data: { items: [] } }.
 * This unwraps one or two levels so callers get the useful part.
 */
function unwrap(body) {
  if (!body || typeof body !== "object") return body;
  if (Array.isArray(body)) return body;
  const inner = pick(body, ["data", "result", "results"]);
  return inner !== undefined ? inner : body;
}

/** Pulls an array out of a response that might be an array or a wrapper. */
export function asList(body) {
  const data = unwrap(body);
  if (Array.isArray(data)) return data;
  const list = pick(data, [
    "items",
    "courses",
    "results",
    "docs",
    "rows",
    "data",
  ]);
  return Array.isArray(list) ? list : [];
}

async function request(
  path,
  { method = "GET", body, auth = true, signal } = {},
) {
  const headers = { Accept: "application/json" };
  if (body !== undefined) headers["Content-Type"] = "application/json";

  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
      signal,
    });
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    // Network failure, CORS rejection, or the Render instance is cold-starting.
    throw new ApiError(
      "Couldn't reach the server. Check your connection and try again.",
      { status: 0 },
    );
  }

  const text = await response.text();
  let payload = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = text;
    }
  }

  if (!response.ok) {
    const message =
      pick(payload, ["message", "error", "detail"]) ||
      (typeof payload === "string" && payload) ||
      `Request failed (${response.status})`;
    throw new ApiError(
      Array.isArray(message) ? message.join(", ") : String(message),
      { status: response.status, data: payload },
    );
  }

  return unwrap(payload);
}

/* ------------------------------------------------------------------ */
/* Auth                                                                */
/* ------------------------------------------------------------------ */

/**
 * POST /auth/sign-up
 * Sends both camelCase and snake_case name keys so it works whichever the
 * backend expects; unknown extras are normally ignored server-side.
 */
export async function signUp({ firstName, surname, email, password }) {
  const data = await request("/auth/sign-up", {
    auth: false,
    method: "POST",
    body: {
      firstName: firstName,
      surname: surname,
      email,
      password,
    },
  });
  const token = pick(data, ["token", "accessToken", "access_token"]);
  if (token) setToken(token);
  return data;
}

/** POST /auth/login */
export async function login({ email, password }) {
  const data = await request("/auth/login", {
    auth: false,
    method: "POST",
    body: { email, password },
  });
  const token = pick(data, ["token", "accessToken", "access_token"]);
  if (token) setToken(token);
  return data;
}

export function logout() {
  clearToken();
}

/* ------------------------------------------------------------------ */
/* Users                                                               */
/* ------------------------------------------------------------------ */

export const getMe = (opts) => request("/users/me", opts);
export const updateMe = (patch) =>
  request("/users/me", { method: "PATCH", body: patch });
export const updateOnboarding = (patch) =>
  request("/users/me/onboarding", { method: "PATCH", body: patch });

/* ------------------------------------------------------------------ */
/* Courses / modules / materials                                       */
/* ------------------------------------------------------------------ */

export const getCourses = (opts) => request("/courses", opts);
export const searchCourses = (query, opts) =>
  request(`/courses/search?q=${encodeURIComponent(query)}`, opts);
export const getCourse = (courseId, opts) =>
  request(`/courses/${courseId}`, opts);

export const getModulesForCourse = (courseId, opts) =>
  request(`/modules/course/${courseId}`, opts);
export const getModule = (moduleId, opts) =>
  request(`/modules/${moduleId}`, opts);

export const getMaterialsForModule = (moduleId, opts) =>
  request(`/materials/module/${moduleId}`, opts);
export const getMaterial = (materialId, opts) =>
  request(`/materials/${materialId}`, opts);

/* ------------------------------------------------------------------ */
/* Enrollments                                                         */
/* ------------------------------------------------------------------ */

export const enroll = (courseId) =>
  request("/enrollments", { method: "POST", body: { courseId } });
export const getMyEnrollments = (opts) => request("/enrollments/me", opts);
export const resumeEnrollment = (id, opts) =>
  request(`/enrollments/${id}/resume`, opts);

/* ------------------------------------------------------------------ */
/* Progress                                                            */
/* ------------------------------------------------------------------ */

export const recordMaterialProgress = (payload) =>
  request("/material-progress", { method: "POST", body: payload });
export const getCourseProgress = (courseId, opts) =>
  request(`/material-progress/course/${courseId}`, opts);
export const getMaterialProgress = (materialId, opts) =>
  request(`/material-progress/material/${materialId}`, opts);

/* ------------------------------------------------------------------ */
/* Assignments / quiz                                                  */
/* ------------------------------------------------------------------ */

export const getAssignmentForMaterial = (materialId, opts) =>
  request(`/assignments/material/${materialId}`, opts);
export const getQuestionsForAssignment = (assignmentId, opts) =>
  request(`/questions/assignment/${assignmentId}`, opts);
export const submitAssignment = (payload) =>
  request("/submissions", { method: "POST", body: payload });
export const getMySubmissions = (opts) => request("/submissions/me", opts);

/* ------------------------------------------------------------------ */
/* Gamification                                                        */
/* ------------------------------------------------------------------ */

export const getMilestones = (opts) => request("/milestones", opts);
export const getBadges = (opts) => request("/badges", opts);
export const getMyBadges = (opts) => request("/badges/me", opts);

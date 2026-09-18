import { pick } from "./api";

/** Stable id for list keys / route params, whatever the backend calls it. */
export const idOf = (item, fallback) => pick(item, ["id", "_id", "uuid", "slug"], fallback);

/** Human-readable title for a course / module / material. */
export const titleOf = (item, fallback = "Untitled") =>
  pick(item, ["title", "name", "courseTitle", "moduleTitle"], fallback);

/** Short description, if the record has one. */
export const descriptionOf = (item, fallback = "") =>
  pick(item, ["description", "summary", "subtitle", "about"], fallback);

/** Count of lessons/materials attached to a module or course. */
export const lessonCountOf = (item) =>
  pick(item, ["lessonCount", "lessonsCount", "materialCount", "materialsCount", "totalLessons"]);

/** Percentage 0-100 from a progress-ish record. */
export function percentOf(item, fallback = 0) {
  const raw = pick(item, ["percentage", "percent", "progress", "completion", "completedPercentage"]);
  if (raw === undefined) return fallback;
  const num = Number(raw);
  if (!Number.isFinite(num)) return fallback;
  // Some APIs return 0-1 instead of 0-100.
  return num > 0 && num <= 1 ? Math.round(num * 100) : Math.round(num);
}

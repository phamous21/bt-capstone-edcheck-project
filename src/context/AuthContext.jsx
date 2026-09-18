import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import * as api from "../lib/api";

const AuthContext = createContext(null);

/**
 * Holds the signed-in user and exposes sign-up / login / logout.
 * On mount, if a token is already in storage we try GET /users/me to restore
 * the session; a failure just means the token is stale, so we clear it.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [restoring, setRestoring] = useState(Boolean(api.getToken()));

  useEffect(() => {
    if (!api.getToken()) return;
    let cancelled = false;

    (async () => {
      try {
        const me = await api.getMe();
        if (!cancelled) setUser(api.pick(me, ["user"], me));
      } catch {
        api.clearToken();
      } finally {
        if (!cancelled) setRestoring(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const signUp = useCallback(async (payload) => {
    const data = await api.signUp(payload);
    // Some APIs return the user with the token; if not, fetch it.
    let nextUser = api.pick(data, ["user", "data"]);
    if (!nextUser && api.getToken()) {
      try {
        const me = await api.getMe();
        nextUser = api.pick(me, ["user"], me);
      } catch {
        /* non-fatal — sign-up succeeded even if the profile fetch didn't */
      }
    }
    setUser(nextUser ?? null);
    return data;
  }, []);

  const login = useCallback(async (payload) => {
    const data = await api.login(payload);
    let nextUser = api.pick(data, ["user", "data"]);
    if (!nextUser && api.getToken()) {
      try {
        const me = await api.getMe();
        nextUser = api.pick(me, ["user"], me);
      } catch {
        /* non-fatal */
      }
    }
    setUser(nextUser ?? null);
    return data;
  }, []);

  const logout = useCallback(() => {
    api.logout();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, setUser, restoring, signUp, login, logout, isAuthed: Boolean(api.getToken()) }),
    [user, restoring, signUp, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}

/** Best-effort display name from whatever shape the user object has. */
export function displayName(user) {
  if (!user) return "there";
  const first = api.pick(user, ["firstName", "first_name", "firstname"]);
  if (first) return first;
  const full = api.pick(user, ["name", "fullName", "full_name"]);
  if (full) return String(full).split(" ")[0];
  const email = api.pick(user, ["email"]);
  return email ? String(email).split("@")[0] : "there";
}

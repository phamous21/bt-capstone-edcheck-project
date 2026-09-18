import { useCallback, useEffect, useState } from "react";

/**
 * Runs an async API call and tracks { data, loading, error }.
 *
 * `fetcher` receives an AbortSignal. `deps` works like useEffect's dep array.
 * Pass `enabled: false` to hold off (e.g. until a search query is non-empty).
 */
export function useApi(fetcher, deps = [], { enabled = true } = {}) {
  const [state, setState] = useState({ data: null, loading: enabled, error: null });
  const [reloadKey, setReloadKey] = useState(0);

  const reload = useCallback(() => setReloadKey((k) => k + 1), []);

  useEffect(() => {
    if (!enabled) {
      setState({ data: null, loading: false, error: null });
      return;
    }

    const controller = new AbortController();
    let cancelled = false;
    setState((s) => ({ ...s, loading: true, error: null }));

    (async () => {
      try {
        const data = await fetcher(controller.signal);
        if (!cancelled) setState({ data, loading: false, error: null });
      } catch (err) {
        if (cancelled || err?.name === "AbortError") return;
        setState({ data: null, loading: false, error: err });
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, enabled, reloadKey]);

  return { ...state, reload };
}

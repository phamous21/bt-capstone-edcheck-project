import { ArrowLeft, ChevronRight } from "react-bootstrap-icons";
import * as api from "../lib/api";
import { useApi } from "../lib/useApi";
import { idOf, titleOf, lessonCountOf } from "../lib/normalize";

export default function Curriculum({ courseId, onBack, onStartCourse, onOpenModule }) {
  // Without a courseId (e.g. opened straight from Learn) there's nothing to
  // fetch, so the screen renders its empty state rather than erroring.
  const { data, loading, error } = useApi(
    (signal) => api.getModulesForCourse(courseId, { signal }),
    [courseId],
    { enabled: Boolean(courseId) }
  );

  const modules = api.asList(data);
  const totalLessons = modules.reduce((sum, m) => {
    const n = Number(lessonCountOf(m) ?? 0);
    return sum + (Number.isFinite(n) ? n : 0);
  }, 0);

  const handleStart = async () => {
    if (courseId) {
      try {
        await api.enroll(courseId);
      } catch {
        // Already enrolled (or the call failed) — still let them into the course.
      }
    }
    onStartCourse?.();
  };

  return (
    <div className="edcheck-card p-4 p-md-5">
      <div className="d-flex align-items-center gap-3 mb-1">
        <button className="border rounded-2 bg-white d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }} onClick={onBack} aria-label="Back">
          <ArrowLeft size={18} />
        </button>
        <p className="fw-bold m-0" style={{ fontSize: 24 }}>Curriculum</p>
      </div>
      <p className="fw-bold mb-4" style={{ fontSize: 15 }}>
        {modules.length} module{modules.length === 1 ? "" : "s"}
        {totalLessons > 0 ? ` - ${totalLessons} Lessons` : ""}
      </p>

      <div className="d-flex flex-column gap-3 mb-4" style={{ minHeight: 60 }}>
        {loading && <p className="m-0" style={{ fontSize: 14, color: "#666" }}>Loading modules…</p>}

        {error && !loading && (
          <p className="m-0" style={{ fontSize: 14, color: "#c0392b" }}>{error.message}</p>
        )}

        {!loading && !error && modules.length === 0 && (
          <p className="m-0" style={{ fontSize: 14, color: "#666" }}>
            {courseId ? "This course has no modules yet." : "Pick a course to see its curriculum."}
          </p>
        )}

        {modules.map((m, i) => (
          <button
            key={idOf(m, i)}
            type="button"
            onClick={() => onOpenModule?.(m)}
            className="d-flex align-items-center justify-content-between px-4 py-3 w-100 bg-white"
            style={{ borderRadius: 10, border: "1px solid var(--edcheck-blue)" }}
          >
            <span className="fw-bold text-center flex-fill" style={{ fontSize: 17 }}>
              {i + 1}. {titleOf(m)}
              {lessonCountOf(m) !== undefined && (
                <>
                  <br />
                  <span style={{ fontSize: 14 }}>{lessonCountOf(m)} Lessons</span>
                </>
              )}
            </span>
            <ChevronRight size={18} />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleStart}
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: 52, borderRadius: 10, background: "var(--edcheck-blue)", border: "none" }}
      >
        <span className="fw-bold text-white" style={{ fontSize: 18 }}>Start Course</span>
      </button>
    </div>
  );
}

import { ArrowLeft, ChevronRight } from "react-bootstrap-icons";

const MODULES = [
  { n: 1, title: "Introduction", lessons: 5 },
  { n: 2, title: "What is data", lessons: 5 },
  { n: 3, title: "Short codes", lessons: 5 },
  { n: 4, title: "Language model", lessons: 5 },
  { n: 5, title: "Coding with AI", lessons: 5 },
];

export default function Curriculum({ onBack, onStartCourse }) {
  return (
    <div className="edcheck-card p-4 p-md-5">
      <div className="d-flex align-items-center gap-3 mb-1">
        <button className="border rounded-2 bg-white d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }} onClick={onBack} aria-label="Back">
          <ArrowLeft size={18} />
        </button>
        <p className="fw-bold m-0" style={{ fontSize: 24 }}>Curriculum</p>
      </div>
      <p className="fw-bold mb-4" style={{ fontSize: 15 }}>5 modules - 20 Lessons</p>

      <div className="d-flex flex-column gap-3 mb-4">
        {MODULES.map((m) => (
          <button key={m.n} type="button" className="d-flex align-items-center justify-content-between px-4 py-3 w-100 bg-white" style={{ borderRadius: 10, border: "1px solid var(--edcheck-blue)" }}>
            <span className="fw-bold text-center flex-fill" style={{ fontSize: 17 }}>
              {m.n}. {m.title}
              <br />
              <span style={{ fontSize: 14 }}>{m.lessons} Lessons</span>
            </span>
            <ChevronRight size={18} />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onStartCourse}
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: 52, borderRadius: 10, background: "var(--edcheck-blue)", border: "none" }}
      >
        <span className="fw-bold text-white" style={{ fontSize: 18 }}>Start Course</span>
      </button>
    </div>
  );
}

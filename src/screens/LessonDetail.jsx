import { CheckCircleFill, ArrowRight, LightbulbFill, LockFill, ArrowLeft } from "react-bootstrap-icons";

/**
 * Note: the original Figma frame ("course complete") had a real third-party
 * ad unit (a Google-syndicated Amazon ad) pasted into the canvas. That's not
 * something to ship in real code, so this port keeps the same layout/slot
 * but replaces it with placeholder lesson content — swap in your own
 * lesson-content component and ad provider here.
 */
export default function LessonDetail({ onBack, onFinishLesson }) {
  return (
    <div className="position-relative w-100 h-100" style={{ background: "#999999" }}>
      <button
        className="position-absolute rounded-circle p-2 bg-white"
        style={{ left: 40, top: 30 }}
        onClick={onBack}
        aria-label="Back"
      >
        <ArrowLeft size={22} />
      </button>

      <div className="position-absolute rounded-pill" style={{ left: 102, top: 85, width: 1226, height: 15, background: "rgba(0,0,0,0.1)" }} />
      <div className="position-absolute rounded-pill" style={{ left: 102, top: 85, width: 401, height: 15, background: "#8A38F5" }} />

      <p className="position-absolute fw-bold m-0" style={{ left: 103, top: 117, fontSize: 25 }}>
        Lesson 1 of 6. 10 min
      </p>

      <div
        className="position-absolute d-flex flex-column justify-content-center gap-3 px-5"
        style={{ left: 102, top: 155, width: 1244, height: 400, borderRadius: 15, background: "var(--edcheck-blue-dark)" }}
      >
        <span className="d-inline-flex align-items-center gap-2 align-self-start rounded-pill px-4 py-2" style={{ background: "#3e3a3a", border: "2px solid black" }}>
          <span style={{ fontSize: 17 }}>🐍</span>
          <span className="fw-bold text-white" style={{ fontSize: 17 }}>Python</span>
        </span>
        <p className="fw-bold text-white m-0" style={{ fontSize: 21, lineHeight: 1.3 }}>
          A variable is a named container that stores a value your program
          can reference and change later.
        </p>
        <p className="fw-medium m-0" style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}>
          In Python you create one simply by writing a name, an equals sign,
          and a value — no extra keywords needed, e.g.{" "}
          <code style={{ background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: 4 }}>age = 24</code>.
        </p>
      </div>

      <div className="position-absolute d-flex gap-4" style={{ left: 103, top: 570, width: 1244, height: 126 }}>
        <button
          type="button"
          onClick={onFinishLesson}
          className="flex-fill d-flex align-items-center justify-content-center gap-3"
          style={{ borderRadius: 15, border: "2px solid rgba(0,0,0,0.5)", background: "rgba(24,13,110,0.9)" }}
        >
          <CheckCircleFill size={22} color="white" />
          <span className="fw-bold text-white" style={{ fontSize: 17 }}>Mark as Completed</span>
        </button>
        <button
          type="button"
          onClick={onFinishLesson}
          className="flex-fill d-flex align-items-center justify-content-center gap-3 bg-white"
          style={{ borderRadius: 15, border: "2px solid rgba(0,0,0,0.5)" }}
        >
          <span className="fw-bold" style={{ fontSize: 17 }}>Next Lesson</span>
          <ArrowRight size={20} />
        </button>
      </div>

      <div
        className="position-absolute d-flex align-items-center gap-4 px-4"
        style={{ left: 105, top: 716, width: 1237, height: 152, borderRadius: 20, border: "2px solid rgba(0,0,0,0.5)", background: "#FBDEFF" }}
      >
        <LightbulbFill size={36} color="#FFC107" />
        <div className="flex-fill">
          <p className="fw-bold m-0" style={{ fontSize: 19 }}>Tip</p>
          <p className="fw-bold m-0" style={{ fontSize: 10 }}>
            Practice daily — a little learning challenge every day compounds fast.
          </p>
          <p className="fw-medium m-0" style={{ fontSize: 10 }}>
            Pick up right where you left off, keep building your skills.
          </p>
        </div>
        <LockFill size={20} color="#fd7e14" />
      </div>
    </div>
  );
}

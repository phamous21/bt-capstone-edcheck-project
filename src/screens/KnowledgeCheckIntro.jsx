import { JournalBookmarkFill, CircleFill } from "react-bootstrap-icons";

export default function KnowledgeCheckIntro({ onStartQuiz }) {
  return (
    <div className="position-relative w-100 h-100 bg-white">
      <p className="position-absolute fw-bold m-0" style={{ left: 100, top: 60, fontSize: 32 }}>
        Knowledge check
      </p>
      <p className="position-absolute fw-normal m-0" style={{ left: 100, top: 110, fontSize: 16, color: "#666" }}>
        100 points
      </p>

      <div className="position-absolute d-flex align-items-center justify-content-center" style={{ left: 0, top: 150, width: "100%", height: 300 }}>
        <JournalBookmarkFill size={90} color="#8AB4F8" style={{ marginRight: -20, transform: "rotate(-8deg)" }} />
        <JournalBookmarkFill size={110} color="#B8D8B0" style={{ zIndex: 1, marginRight: -20 }} />
        <div className="d-flex align-items-center justify-content-center rounded-4" style={{ width: 130, height: 160, background: "#2c3e50", zIndex: 2 }}>
          <div className="bg-white rounded-2 p-2" style={{ width: 90, height: 120 }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-secondary rounded-1 mb-2" style={{ height: 8, opacity: 0.4, width: i === 3 ? "60%" : "100%" }} />
            ))}
          </div>
        </div>
        <JournalBookmarkFill size={110} color="#F5B7C6" style={{ marginLeft: -20, zIndex: 1 }} />
        <JournalBookmarkFill size={90} color="#8AB4F8" style={{ marginLeft: -20, transform: "rotate(8deg)" }} />
      </div>

      <p className="position-absolute fw-bold text-center m-0" style={{ left: 0, top: 470, width: "100%", fontSize: 24 }}>
        Let&rsquo;s see what you have learned
        <br />
        from this lesson.
      </p>

      <div className="position-absolute d-flex flex-column gap-3" style={{ left: 100, top: 570, fontSize: 18 }}>
        <div className="d-flex align-items-center gap-2 fw-bold">
          <CircleFill size={16} color="#FFD93D" /> 5 Questions
        </div>
        <div className="d-flex align-items-center gap-2 fw-bold">
          <CircleFill size={16} color="var(--edcheck-blue-dark)" /> 10 minutes
        </div>
        <div className="d-flex align-items-center gap-2 fw-bold">
          <CircleFill size={16} color="#34C759" /> 70% to pass
        </div>
      </div>

      <button
        type="button"
        onClick={onStartQuiz}
        className="position-absolute fw-bold text-white"
        style={{ left: 100, bottom: 40, width: 1240, height: 60, borderRadius: 12, background: "var(--edcheck-blue)", border: "none", fontSize: 20 }}
      >
        Start Quiz
      </button>
    </div>
  );
}

import BottomNav from "../components/BottomNav";
import ModuleHeroCard from "../components/ModuleHeroCard";
import { BookFill, ArrowRight, ListUl, StarFill, BarChartFill, Database } from "react-bootstrap-icons";

/**
 * This frame ("Desktop - 6") is a near-duplicate of the Learn screen in the
 * Figma file, with a few extra decorative/loose icons scattered around the
 * canvas. Reproduced faithfully as lightweight floating accents; there's no
 * entry point wired to it in the nav (kept in the codebase in case you want
 * to use it somewhere).
 */
export default function ContinueLearning({ onNavigate, onOpenLesson, onOpenCurriculum }) {
  return (
    <div className="position-relative w-100 h-100" style={{ background: "#999999" }}>
      <BookFill size={26} color="#0709B7" className="position-absolute" style={{ left: 5, top: 40 }} />
      <BookFill size={22} color="#34C759" className="position-absolute" style={{ left: 536, top: 40 }} />
      <BookFill size={30} color="#0709B7" className="position-absolute" style={{ left: 762, top: 36 }} />
      <BarChartFill size={26} className="position-absolute" style={{ right: 40, top: 40 }} />
      <Database size={26} className="position-absolute" style={{ right: 100, top: 40 }} />
      <span className="position-absolute" style={{ right: 42, top: 78, fontSize: 26 }}>🐍</span>

      <p className="position-absolute fw-bold m-0 text-nowrap" style={{ left: 103, top: 60, fontSize: 25 }}>
        Continue Where you left off
      </p>
      <div className="position-absolute fw-medium" style={{ left: 103, top: 106, fontSize: 15 }}>
        <p className="m-0">Pick up right where you left off</p>
        <p className="m-0">keep building your skills</p>
      </div>

      <ModuleHeroCard percent={0} />

      <div className="position-absolute d-flex align-items-center px-4" style={{ left: 98, top: 484, width: 1242, height: 113, borderRadius: 15, background: "#d9d9d9" }}>
        <BookFill size={22} className="me-3" />
        <div className="flex-fill">
          <div className="d-flex align-items-baseline gap-2">
            <span className="fw-bold" style={{ fontSize: 20 }}>Lesson 1:</span>
            <span className="fw-bold" style={{ fontSize: 15 }}>Introduction in Growth Mindset</span>
            <span className="fw-bold ms-auto" style={{ fontSize: 15, color: "#666" }}>10 mins remaining</span>
          </div>
          <div className="position-relative mt-2 mb-1" style={{ height: 3, borderRadius: 3, background: "rgba(0,0,0,0.2)", overflow: "hidden" }}>
            <div style={{ height: "100%", width: "5%", background: "var(--edcheck-blue)" }} />
          </div>
          <span className="fw-bold" style={{ fontSize: 15 }}>05% completed</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenLesson}
        className="position-absolute d-flex align-items-center justify-content-center gap-3"
        style={{ left: 100, top: 617, width: 1240, height: 58, borderRadius: 15, background: "var(--edcheck-blue)" }}
      >
        <span className="fw-bold text-white" style={{ fontSize: 20 }}>Resume</span>
        <ArrowRight size={20} color="white" />
      </button>

      <button
        type="button"
        onClick={onOpenCurriculum}
        className="position-absolute d-flex align-items-center justify-content-center gap-3 bg-white bg-opacity-50"
        style={{ left: 100, top: 695, width: 1240, height: 58, borderRadius: 15, border: "2px solid rgba(0,0,0,0.5)" }}
      >
        <span className="fw-bold" style={{ fontSize: 20 }}>View full curriculum</span>
        <ListUl size={22} />
      </button>

      <div className="position-absolute d-flex align-items-center gap-4 px-4 bg-white bg-opacity-50" style={{ left: 103, top: 773, width: 1240, height: 93, borderRadius: 15, border: "2px solid rgba(0,0,0,0.5)" }}>
        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 60, background: "#CB30E0" }}>
          <StarFill size={26} color="white" />
        </div>
        <div className="fw-bold" style={{ fontSize: 20 }}>
          <p className="m-0">You&rsquo;re only 5 Lessons away from</p>
          <p className="m-0">finishing module 1</p>
        </div>
      </div>

      <BottomNav active="learn" onNavigate={onNavigate} activeColor="white" />
    </div>
  );
}

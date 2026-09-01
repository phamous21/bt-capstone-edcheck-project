import BottomNav from "../components/BottomNav";
import ModuleHeroCard from "../components/ModuleHeroCard";
import { BookFill, ArrowRight, ListUl, StarFill, Search } from "react-bootstrap-icons";

export default function Learn({ onNavigate, onOpenLesson, onOpenSearch, onOpenCurriculum }) {
  return (
    <div className="position-relative w-100 h-100 bg-white">
      <p className="position-absolute fw-bold m-0 text-nowrap" style={{ left: 103, top: 60, fontSize: 25 }}>
        Continue Where you left off
      </p>
      <div className="position-absolute fw-medium" style={{ left: 103, top: 106, fontSize: 15 }}>
        <p className="m-0">Pick up right where you left off</p>
        <p className="m-0">keep building your skills</p>
      </div>

      {/* Search field — opens the Search & Filter screen, per the design's search-to-browse flow */}
      <button
        type="button"
        onClick={onOpenSearch}
        className="position-absolute d-flex align-items-center gap-2 px-3 bg-white text-start"
        style={{ left: 700, top: 55, width: 640, height: 48, borderRadius: 10, border: "1px solid #d9d9d9" }}
      >
        <Search size={16} color="#999" />
        <span className="opacity-50" style={{ fontSize: 15 }}>Search course topic ...</span>
      </button>

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
        className="position-absolute d-flex align-items-center justify-content-center gap-3"
        style={{ left: 100, top: 695, width: 1240, height: 58, borderRadius: 15, border: "2px solid rgba(0,0,0,0.5)" }}
      >
        <span className="fw-bold" style={{ fontSize: 20 }}>View full curriculum</span>
        <ListUl size={22} />
      </button>

      <div className="position-absolute d-flex align-items-center gap-4 px-4" style={{ left: 103, top: 773, width: 1240, height: 93, borderRadius: 15, border: "2px solid rgba(0,0,0,0.5)" }}>
        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 60, background: "#CB30E0" }}>
          <StarFill size={26} color="white" />
        </div>
        <div className="fw-bold" style={{ fontSize: 20 }}>
          <p className="m-0">You&rsquo;re only 5 Lessons away from</p>
          <p className="m-0">finishing module 1</p>
        </div>
      </div>

      <BottomNav active="learn" onNavigate={onNavigate} activeColor="#34C759" />
    </div>
  );
}

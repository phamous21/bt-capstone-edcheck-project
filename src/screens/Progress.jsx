import BottomNav from "../components/BottomNav";
import { Trophy, CheckCircleFill, StarFill, LockFill, ArrowUp, Fire, Award } from "react-bootstrap-icons";

const lessons = [
  { title: "Introduction in Growth Mindset", time: "15 min", done: true },
  { title: "Setting SMART Goals", time: "20 min", done: true },
  { title: "Overcoming Challenges", time: "18 min", done: true },
  { title: "Effective Communication", time: "20 min", done: true },
  { title: "Building Resilience", time: "20 min", done: true },
  { title: "Next Steps & Reflection", time: "15 min", done: false },
];

const milestones = [
  { pct: 25, state: "done" },
  { pct: 50, state: "done" },
  { pct: 75, state: "current" },
  { pct: 100, state: "locked" },
];

function ProgressRing({ percent = 99 }) {
  const r = 62;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <div className="position-relative" style={{ width: 146, height: 146 }}>
      <svg width="146" height="146" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="73" cy="73" r={r} fill="none" stroke="#E5E5E5" strokeWidth="12" />
        <circle cx="73" cy="73" r={r} fill="none" stroke="#34C759" strokeWidth="12" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset} />
      </svg>
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
        <span className="fw-bold" style={{ fontSize: 15 }}>{percent}%</span>
        <span className="fw-bold" style={{ fontSize: 10 }}>complete</span>
      </div>
    </div>
  );
}

export default function ProgressScreen({ onNavigate }) {
  return (
    <div className="position-relative w-100 h-100 bg-white">
      <div className="position-absolute d-flex align-items-center gap-3" style={{ left: 552, top: 47 }}>
        <span style={{ fontSize: 33 }}>🌱</span>
        <div>
          <p className="fw-bold m-0" style={{ fontSize: 25 }}>Progress &amp; Milestone</p>
          <p className="fw-semibold opacity-80 m-0" style={{ fontSize: 10 }}>
            You&rsquo;re doing great! Keep going and achieve more
          </p>
        </div>
      </div>
      <Trophy className="position-absolute" size={22} color="#F5A623" style={{ right: 100, top: 58 }} />

      <div className="position-absolute d-flex flex-column align-items-center gap-1" style={{ left: 647, top: 122 }}>
        <ProgressRing percent={99} />
        <span className="fw-bold" style={{ fontSize: 15, color: "#34C759" }}>Great progress</span>
        <span className="fw-bold" style={{ fontSize: 10 }}>You&rsquo;re building momentum.</span>
      </div>

      <div className="position-absolute" style={{ left: 100, top: 315, width: 1240, height: 106, borderRadius: 10, background: "rgba(204,204,204,0.2)" }}>
        <p className="fw-bold m-0 pt-3 ps-4" style={{ fontSize: 10 }}>Milestone Tracker</p>
        <p className="fw-bold opacity-80 ps-4" style={{ fontSize: 10 }}>
          Complete milestone to unlock rewards and recognition.
        </p>
        <div className="position-absolute d-flex justify-content-between" style={{ left: 36, right: 36, top: 62 }}>
          {milestones.map((m, i) => (
            <div key={m.pct} className="position-relative d-flex flex-column align-items-center gap-1" style={{ width: 90 }}>
              {m.state === "done" && <CheckCircleFill size={26} color="#22c55e" />}
              {m.state === "current" && <StarFill size={26} color="#CB30E0" />}
              {m.state === "locked" && <LockFill size={20} color="#6c757d" />}
              <span className="fw-bold" style={{ fontSize: 10, color: m.state === "current" ? "#CB30E0" : "black" }}>{m.pct}%</span>
              <span className="fw-bold" style={{ fontSize: 8 }}>Completed</span>
              {i < milestones.length - 1 && (
                <div className="position-absolute" style={{ left: 60, top: 15, width: 210, height: 3, background: "#34C759" }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="position-absolute fw-semibold text-black text-nowrap m-0" style={{ left: 127, top: 440, fontSize: 10 }}>
        Recent Achievements
      </p>
      <button className="position-absolute fw-semibold text-black" style={{ right: 100, top: 440, fontSize: 10 }}>
        View All
      </button>

      <div className="position-absolute d-flex align-items-center gap-3 px-4" style={{ left: 100, top: 465, width: 613, height: 89, borderRadius: 20, background: "rgba(214,244,222,0.5)" }}>
        <Award size={34} color="#198754" />
        <div>
          <p className="fw-bold m-0" style={{ fontSize: 15 }}>Module 1 Completed</p>
          <p className="fw-semibold opacity-70 m-0" style={{ fontSize: 10 }}>You finished all lessons in module 1</p>
          <span className="d-inline-block rounded-pill fw-semibold px-3 mt-1" style={{ fontSize: 10, color: "#27C840", background: "#D6F4DE" }}>
            +150 XP
          </span>
        </div>
      </div>

      <div className="position-absolute d-flex align-items-center gap-3 px-4" style={{ left: 727, top: 465, width: 613, height: 89, borderRadius: 20, background: "rgba(239,227,255,0.5)" }}>
        <Fire size={34} color="#a855f7" />
        <div>
          <p className="fw-bold m-0" style={{ fontSize: 15 }}>7-Day Streak</p>
          <p className="fw-semibold opacity-70 m-0" style={{ fontSize: 10 }}>You&rsquo;ve learned 7 days in a row!</p>
          <span className="d-inline-block rounded-pill fw-bold text-white px-3 mt-1" style={{ fontSize: 10, background: "rgba(203,48,224,0.5)" }}>
            +200 XP
          </span>
        </div>
      </div>

      <p className="position-absolute fw-bold text-nowrap m-0" style={{ left: 190, top: 569, fontSize: 15, color: "#4CAF50" }}>
        Completed Lessons (6)
      </p>
      <ArrowUp className="position-absolute" size={22} style={{ right: 100, top: 574 }} />
      <div className="position-absolute bg-white" style={{ left: 102, top: 600, width: 1239, height: 286, borderRadius: 10, border: "2px solid #e0e9e2" }}>
        {lessons.map((lesson, i) => (
          <div key={lesson.title}>
            <div className="d-flex align-items-center px-4 py-2 gap-3">
              {lesson.done ? <CheckCircleFill size={20} color="#22c55e" /> : <div className="rounded-circle" style={{ width: 20, height: 20, background: "#CB30E0" }} />}
              <span className="fw-bold" style={{ fontSize: 15 }}>{lesson.title}</span>
              <span className="fw-bold ms-auto opacity-60" style={{ fontSize: 15 }}>{lesson.time}</span>
              {lesson.done ? <CheckCircleFill size={16} color="#22c55e" /> : <LockFill size={14} color="#6c757d" />}
            </div>
            {i < lessons.length - 1 && <div style={{ height: 1, background: "rgba(0,0,0,0.1)", margin: "0 32px" }} />}
          </div>
        ))}
      </div>

      <BottomNav active="progress" onNavigate={onNavigate} activeColor="#4CAF50" />
    </div>
  );
}

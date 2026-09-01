import BottomNav from "../components/BottomNav";
import { TrophyFill } from "react-bootstrap-icons";

const confetti = [
  { left: 605, top: 100 }, { left: 585, top: 175 }, { left: 600, top: 250 },
  { left: 905, top: 130 }, { left: 1015, top: 180 }, { left: 1050, top: 220 },
  { left: 915, top: 235 }, { left: 1055, top: 290 }, { left: 605, top: 330 },
];

export default function CourseComplete({ onNavigate, onViewCertificate }) {
  return (
    <div className="position-relative w-100 h-100" style={{ background: "var(--edcheck-blue)" }}>
      <div className="position-absolute w-100" style={{ top: 0, height: 480, background: "var(--edcheck-blue)" }}>
        {confetti.map((c, i) => (
          <span key={i} className="position-absolute" style={{ left: c.left, top: c.top, fontSize: 18, color: "#ff4d4d" }}>▲</span>
        ))}
        <div className="d-flex flex-column align-items-center" style={{ paddingTop: 90 }}>
          <TrophyFill size={110} color="#FFD93D" />
          <p className="fw-bold text-white m-0 mt-3" style={{ fontSize: 40 }}>Congratulations!</p>
          <p className="fw-normal text-white m-0" style={{ fontSize: 18, opacity: 0.9 }}>
            You&rsquo;ve completed python beginners course
          </p>
        </div>
      </div>

      <div className="position-absolute w-100 d-flex justify-content-around text-center" style={{ top: 520, color: "white" }}>
        <div>
          <p className="fw-normal m-0" style={{ fontSize: 34 }}>12</p>
          <p className="fw-normal m-0" style={{ fontSize: 18 }}>modules</p>
        </div>
        <div>
          <p className="fw-normal m-0" style={{ fontSize: 34 }}>20</p>
          <p className="fw-normal m-0" style={{ fontSize: 18 }}>Lessons</p>
        </div>
        <div>
          <p className="fw-normal m-0" style={{ fontSize: 34 }}>100%</p>
          <p className="fw-normal m-0" style={{ fontSize: 18 }}>Completed</p>
        </div>
      </div>

      <div className="position-absolute d-flex align-items-center gap-3" style={{ left: 100, top: 650 }}>
        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 60, border: "8px solid #34C759", background: "var(--edcheck-blue)" }} />
        <div>
          <p className="text-white m-0" style={{ fontSize: 16 }}>you earned</p>
          <p className="text-white fw-bold m-0" style={{ fontSize: 16 }}>+250 points</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onViewCertificate}
        className="position-absolute d-flex align-items-center justify-content-center"
        style={{ left: 0, top: 750, width: "100%", height: 78, background: "rgba(120,120,240,0.6)" }}
      >
        <span className="fw-normal text-white" style={{ fontSize: 20 }}>View Certificate</span>
      </button>

      <BottomNav active="achievement" onNavigate={onNavigate} activeColor="#FFD93D" />
    </div>
  );
}

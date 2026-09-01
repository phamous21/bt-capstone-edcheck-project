import BottomNav from "../components/BottomNav";
import {
  PersonCircle,
  ChevronRight,
  CheckCircle,
  QuestionCircle,
  BellFill,
  GearFill,
  Eyeglasses,
  RecordCircleFill,
  BoxArrowRight,
} from "react-bootstrap-icons";

const MENU = [
  { key: "goals", label: "Learning Goals", Icon: CheckCircle },
  { key: "interests", label: "Interests", Icon: QuestionCircle },
  { key: "notifications", label: "Notification settings", Icon: BellFill },
  { key: "schedules", label: "Learning Schedules", Icon: GearFill },
  { key: "account", label: "Account Settings", Icon: Eyeglasses },
  { key: "help", label: "Help & Support", Icon: RecordCircleFill },
];

export default function Profile({ onNavigate, onLogOut }) {
  return (
    <div className="position-relative w-100 h-100 bg-white">
      <div className="position-absolute d-flex align-items-center gap-4" style={{ left: 100, top: 50 }}>
        <PersonCircle size={110} color="#c9c9d9" />
        <div>
          <p className="fw-bold m-0" style={{ fontSize: 20 }}>ALEX JOHN</p>
          <p className="fw-normal m-0" style={{ fontSize: 15, color: "#333" }}>alexjohn@gmail.com</p>
          <button type="button" className="fw-normal p-0 border-0 bg-transparent mt-1" style={{ fontSize: 14, color: "var(--edcheck-blue)" }}>
            Edit Profile
          </button>
        </div>
      </div>

      <div className="position-absolute d-flex gap-4" style={{ left: 100, top: 195, width: 1240 }}>
        {[
          { value: 1, label: "Courses" },
          { value: 10, label: "Lessons" },
          { value: 1, label: "Certificates" },
        ].map((s) => (
          <div key={s.label} className="flex-fill d-flex flex-column align-items-center justify-content-center py-3" style={{ borderRadius: 10, background: "#c3c2f4" }}>
            <span className="fw-bold" style={{ fontSize: 22 }}>{s.value}</span>
            <span className="fw-normal" style={{ fontSize: 15 }}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="position-absolute" style={{ left: 100, top: 300, width: 1240, borderRadius: 8, background: "#e9e9e9" }}>
        {MENU.map(({ key, label, Icon }, i) => (
          <div key={key} className="d-flex align-items-center gap-3 px-4 py-3" style={{ borderBottom: i < MENU.length - 1 ? "1px solid #ccc" : "none" }}>
            <Icon size={20} />
            <span className="flex-fill" style={{ fontSize: 18 }}>{label}</span>
            <ChevronRight size={20} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onLogOut}
        className="position-absolute d-flex align-items-center justify-content-center gap-2 border-0 bg-transparent"
        style={{ left: 0, top: 640, width: "100%", color: "#dc3545" }}
      >
        <BoxArrowRight size={18} />
        <span className="fw-bold" style={{ fontSize: 16 }}>Log Out</span>
      </button>

      <BottomNav active="profile" onNavigate={onNavigate} activeColor="#6f42c1" />
    </div>
  );
}

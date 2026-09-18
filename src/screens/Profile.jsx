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
import * as api from "../lib/api";
import { useApi } from "../lib/useApi";
import { useAuth } from "../context/AuthContext";

const MENU = [
  { key: "goals", label: "Learning Goals", Icon: CheckCircle },
  { key: "interests", label: "Interests", Icon: QuestionCircle },
  { key: "notifications", label: "Notification settings", Icon: BellFill },
  { key: "schedules", label: "Learning Schedules", Icon: GearFill },
  { key: "account", label: "Account Settings", Icon: Eyeglasses },
  { key: "help", label: "Help & Support", Icon: RecordCircleFill },
];

export default function Profile({ onNavigate, onLogOut }) {
  const { user } = useAuth();

  // Stat tiles come from the user's own enrollments / badges.
  const { data: enrollments } = useApi((signal) => api.getMyEnrollments({ signal }), []);
  const { data: badges } = useApi((signal) => api.getMyBadges({ signal }), []);

  const enrollmentList = api.asList(enrollments);
  const badgeList = api.asList(badges);

  const first = api.pick(user, ["firstName", "first_name"], "");
  const last = api.pick(user, ["lastName", "surname", "last_name"], "");
  const fullName =
    [first, last].filter(Boolean).join(" ") ||
    api.pick(user, ["name", "fullName", "full_name"], "Your profile");
  const email = api.pick(user, ["email"], "");

  const lessonsDone = enrollmentList.reduce((total, e) => {
    const n = Number(api.pick(e, ["completedLessons", "lessonsCompleted", "completedMaterials"], 0));
    return total + (Number.isFinite(n) ? n : 0);
  }, 0);

  const stats = [
    { value: enrollmentList.length, label: "Courses" },
    { value: lessonsDone, label: "Lessons" },
    { value: badgeList.length, label: "Certificates" },
  ];

  return (
    <div className="position-relative w-100 h-100 bg-white">
      <div className="position-absolute d-flex align-items-center gap-4" style={{ left: 100, top: 50 }}>
        <PersonCircle size={110} color="#c9c9d9" />
        <div>
          <p className="fw-bold m-0 text-uppercase" style={{ fontSize: 20 }}>{fullName}</p>
          {email && <p className="fw-normal m-0" style={{ fontSize: 15, color: "#333" }}>{email}</p>}
          <button type="button" className="fw-normal p-0 border-0 bg-transparent mt-1" style={{ fontSize: 14, color: "var(--edcheck-blue)" }}>
            Edit Profile
          </button>
        </div>
      </div>

      <div className="position-absolute d-flex gap-4" style={{ left: 100, top: 195, width: 1240 }}>
        {stats.map((s) => (
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

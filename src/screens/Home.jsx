import BottomNav from "../components/BottomNav";
import { PlayFill, Clock, Trophy, ChevronRight, ArrowUp } from "react-bootstrap-icons";

const imgEmojioneClosedBook = "https://www.figma.com/api/mcp/asset/ad13621f-8c49-49ed-83d8-6bbc7e527417.svg";
const imgEmojioneBlueBook = "https://www.figma.com/api/mcp/asset/cff320ca-6ebd-462c-9778-bfa15ee56114.svg";
const imgFxemojiSeedling = "https://www.figma.com/api/mcp/asset/9a4680f4-f72f-484f-a99f-6db4d2ca4751.svg";
const imgGroup66 = "https://www.figma.com/api/mcp/asset/51792236-14a1-48de-a961-e9c98af20273.svg";
const imgEllipse16 = "https://www.figma.com/api/mcp/asset/da34a8d1-df30-44d1-af6b-95311ebb2f9e.svg";
const imgEllipse17 = "https://www.figma.com/api/mcp/asset/99ecf273-7f88-444e-aefe-c12ad27a53c4.svg";

const recommended = ["Today's Learning", "Today's Learning", "Today's Learning", "Today's Learning"];

export default function Home({ onNavigate, onStartLearning, onExplore }) {
  return (
    <div className="position-relative w-100 h-100 bg-white">
      <p className="position-absolute fw-bold text-black text-nowrap m-0" style={{ left: 100, top: 52, fontSize: 20 }}>
        Good Morning, Alex,
      </p>
      <p className="position-absolute fw-semibold text-black opacity-80 text-nowrap m-0" style={{ left: 100, top: 81, fontSize: 10 }}>
        Ready to continue your learning journey
      </p>

      <div className="position-absolute" style={{ left: 103, top: 101, width: 1237, height: 203, borderRadius: 15, background: "#d9d9d9" }} />
      <div
        className="position-absolute d-flex align-items-center justify-content-center"
        style={{ left: 116, top: 110, width: 224, height: 184, borderRadius: 15, background: "var(--edcheck-blue-navy)" }}
      >
        <img src={imgEmojioneBlueBook} alt="" className="position-absolute" style={{ width: 103, height: 103, left: 6, top: 72 }} />
        <img src={imgEmojioneClosedBook} alt="" className="position-absolute" style={{ width: 97, height: 97, left: 12, top: 92 }} />
        <img src={imgFxemojiSeedling} alt="" className="position-absolute" style={{ width: 48, height: 48, left: -10, top: 46 }} />
      </div>

      <p className="position-absolute fw-bold text-black text-nowrap m-0" style={{ left: 413, top: 135, fontSize: 20 }}>
        Python for beginners
      </p>
      <div className="position-absolute fw-bold opacity-50 text-black" style={{ left: 413, top: 172, fontSize: 15 }}>
        <p className="m-0">Build your foundation with core</p>
        <p className="m-0">python concepts step by step</p>
      </div>

      <button
        type="button"
        onClick={onStartLearning}
        className="position-absolute d-flex align-items-center gap-3 px-4"
        style={{ left: 413, top: 224, width: 461, height: 63, borderRadius: 20, background: "#1020cc" }}
      >
        <PlayFill size={18} color="white" />
        <span className="fw-bold text-white" style={{ fontSize: 15 }}>Start Learning</span>
        <span className="fw-bold text-white ms-auto" style={{ fontSize: 20 }}>12 Function</span>
      </button>

      <div className="position-absolute d-flex align-items-center gap-1 opacity-50" style={{ right: 100, top: 250 }}>
        <Clock size={20} />
        <span className="fw-bold text-black" style={{ fontSize: 20 }}>75 mins</span>
      </div>

      <p className="position-absolute fw-bold text-black text-nowrap m-0" style={{ left: 104, top: 309, fontSize: 15 }}>
        Today&rsquo;s Learning
      </p>

      <StatCard left={100} icon={imgGroup66} title="Daily Goal" value="00 / 60" sub="00 mins Completed" />
      <StatCard left={526} eyebrow={imgEllipse16} title="Lesson Done" value="00 / 12" sub="Today" />
      <StatCard left={951} eyebrow={imgEllipse17} title="Streak" sub="0 Day gone" flame />

      <div className="position-absolute" style={{ left: 100, top: 435, width: 1235, height: 137, borderRadius: 15, background: "#d9d9d9" }} />
      <p className="position-absolute fw-bold text-black text-nowrap m-0" style={{ left: 117, top: 441, fontSize: 20 }}>
        Overall Progress
      </p>
      <ArrowUp className="position-absolute" size={22} style={{ left: 1163, top: 453 }} />
      {[477, 509, 541].map((top) => (
        <div key={top} className="position-absolute" style={{ left: 108, top, width: 1226, height: 1, background: "rgba(0,0,0,0.2)" }} />
      ))}

      <p className="position-absolute fw-bold text-black text-nowrap d-flex align-items-center gap-2 m-0" style={{ left: 100, top: 585, fontSize: 20 }}>
        <Trophy size={18} /> Milestones
      </p>
      <button className="position-absolute fw-bold text-black" style={{ right: 100, top: 590, fontSize: 10 }}>
        View All
      </button>
      <div className="position-absolute d-flex align-items-center px-4" style={{ left: 103, top: 619, width: 1239, height: 76, borderRadius: 15, background: "#F4E3FF" }}>
        <span style={{ fontSize: 24 }}>🏅</span>
        <ChevronRight className="ms-auto" size={20} />
      </div>

      <p className="position-absolute fw-bold text-black text-nowrap m-0" style={{ left: 99, top: 710, fontSize: 20 }}>
        Recommended for you
      </p>
      <button onClick={onExplore} className="position-absolute fw-bold text-black opacity-50" style={{ right: 100, top: 704, fontSize: 20 }}>
        View all
      </button>
      <div className="position-absolute d-flex gap-3" style={{ left: 101, top: 745 }}>
        {recommended.map((label, i) => (
          <div key={i} className="d-flex flex-column justify-content-center px-4" style={{ width: 251, height: 104, borderRadius: 15, background: "#d9d9d9" }}>
            <span className="fw-bold" style={{ fontSize: 15, color: "#0709b6" }}>{label}</span>
            <span className="fw-bold" style={{ fontSize: 15, color: "#0709b6" }}>{label}</span>
          </div>
        ))}
      </div>

      <BottomNav active="home" onNavigate={onNavigate} activeColor="#34C759" />
    </div>
  );
}

function StatCard({ left, icon, eyebrow, title, value, sub, flame }) {
  return (
    <div className="position-absolute d-flex align-items-center gap-3 px-3" style={{ left, top: 338, width: 201, height: 79, borderRadius: 15, background: "#d9d9d9" }}>
      {eyebrow ? (
        <img src={eyebrow} alt="" style={{ width: 62, height: 62 }} />
      ) : flame ? (
        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 62, height: 62, background: "#FFE7D6", fontSize: 22 }}>
          🔥
        </div>
      ) : (
        <img src={icon} alt="" style={{ width: 62, height: 62 }} />
      )}
      <div className="d-flex flex-column">
        <span className="fw-bold opacity-90" style={{ fontSize: 10 }}>{title}</span>
        {value && <span className="fw-bold opacity-50" style={{ fontSize: 10 }}>{value}</span>}
        <span className="fw-medium opacity-50" style={{ fontSize: 8 }}>{sub}</span>
      </div>
    </div>
  );
}

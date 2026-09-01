import { useState } from "react";
import { PersonFill, GraphUpArrow, PersonBadgeFill, HandThumbsUp } from "react-bootstrap-icons";

const GOALS = [
  { key: "career", label: "Advance my career", Icon: PersonFill },
  { key: "growth", label: "Personal growth", Icon: GraphUpArrow },
  { key: "skill", label: "Learn a new skill", Icon: PersonBadgeFill },
  { key: "business", label: "Start a business", Icon: HandThumbsUp },
];

const MAX_SELECT = 3;

export default function LearningGoals({ onNext, onSkip }) {
  const [selected, setSelected] = useState([]);

  const toggle = (key) => {
    setSelected((prev) => {
      if (prev.includes(key)) return prev.filter((k) => k !== key);
      if (prev.length >= MAX_SELECT) return prev;
      return [...prev, key];
    });
  };

  return (
    <div className="edcheck-card p-4 p-md-5">
      <p className="fw-bold m-0" style={{ fontSize: 24 }}>What are your learning goals?</p>
      <p className="fw-normal mb-4" style={{ fontSize: 13, color: "#666" }}>Choose up to {MAX_SELECT}</p>

      <div className="d-flex flex-column gap-3 mb-4">
        {GOALS.map(({ key, label, Icon }) => {
          const isActive = selected.includes(key);
          return (
            <button
              key={key}
              type="button"
              onClick={() => toggle(key)}
              className="d-flex align-items-center justify-content-center gap-2 w-100"
              style={{
                height: 56,
                borderRadius: 10,
                border: isActive ? "2px solid var(--edcheck-blue)" : "2px solid #d9d9d9",
                background: isActive ? "rgba(7,9,183,0.08)" : "white",
              }}
            >
              <Icon size={18} />
              <span className="fw-bold" style={{ fontSize: 16 }}>{label}</span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onNext}
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: 48, borderRadius: 10, background: "#0709b7", border: "none" }}
      >
        <span className="fw-bold text-white" style={{ fontSize: 16 }}>Next</span>
      </button>
      <button type="button" onClick={onSkip} className="d-block mx-auto mt-3 fw-bold border-0 bg-transparent" style={{ fontSize: 14 }}>
        Skip for now
      </button>
    </div>
  );
}

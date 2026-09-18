import { useState } from "react";

const TOPICS = ["Design", "Development", "Business", "Marketing", "Data Science", "Photography", "Others"];

export default function Interests({ onNext, onBack }) {
  const [selected, setSelected] = useState([]);

  const toggle = (topic) => {
    setSelected((prev) => (prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]));
  };

  return (
    <div className="edcheck-card p-4 p-md-5">
      <p className="fw-bold m-0" style={{ fontSize: 24 }}>What topic interests you?</p>
      <p className="fw-normal mb-4" style={{ fontSize: 13, color: "#666" }}>Select topics you enjoy</p>

      <div className="d-flex flex-column gap-3 mb-4">
        {TOPICS.map((topic) => {
          const isActive = selected.includes(topic);
          return (
            <button
              key={topic}
              type="button"
              onClick={() => toggle(topic)}
              className="d-flex align-items-center justify-content-center w-100"
              style={{
                height: 56,
                borderRadius: 10,
                border: "none",
                background: isActive ? "var(--edcheck-blue)" : "#e5e5e5",
              }}
            >
              <span className="fw-bold" style={{ fontSize: 16, color: isActive ? "white" : "black" }}>{topic}</span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => onNext?.(selected)}
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: 48, borderRadius: 10, background: "#0709b7", border: "none" }}
      >
        <span className="fw-bold text-white" style={{ fontSize: 16 }}>Next</span>
      </button>
      <button type="button" onClick={onBack} className="d-block mx-auto mt-3 fw-bold border-0 bg-transparent" style={{ fontSize: 14 }}>
        Back
      </button>
    </div>
  );
}

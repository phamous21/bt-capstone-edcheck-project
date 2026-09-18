import { useState } from "react";

const OPTIONS = ["15-30min / day", "30-60 min / day", "1-2 hours / day", "2+ hours / day"];

export default function StudyTime({ onNext, onBack }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="edcheck-card p-4 p-md-5">
      <p className="fw-bold m-0" style={{ fontSize: 24 }}>How much time can you learn?</p>
      <p className="fw-normal mb-4" style={{ fontSize: 13, color: "#666" }}>Select your available time</p>

      <div className="d-flex flex-column gap-3 mb-4">
        {OPTIONS.map((option) => {
          const isActive = selected === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(option)}
              className="d-flex align-items-center gap-3 w-100 px-3"
              style={{ height: 56, borderRadius: 10, border: "1px solid #d9d9d9", background: "white" }}
            >
              <span
                className="rounded-circle flex-shrink-0"
                style={{
                  width: 22,
                  height: 22,
                  border: "2px solid #ccc",
                  background: isActive ? "var(--edcheck-blue)" : "#e5e5e5",
                }}
              />
              <span className="fw-bold" style={{ fontSize: 16 }}>{option}</span>
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

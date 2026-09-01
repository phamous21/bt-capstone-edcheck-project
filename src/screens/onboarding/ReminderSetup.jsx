import { useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function ReminderSetup({ onFinish, onBack }) {
  const [days, setDays] = useState([]);
  const [smart, setSmart] = useState(true);

  const toggleDay = (day) => {
    setDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));
  };

  return (
    <div className="edcheck-card p-4 p-md-5">
      <p className="fw-bold m-0" style={{ fontSize: 24 }}>When should we remind you to learn</p>
      <p className="fw-normal mb-4" style={{ fontSize: 13, color: "#666" }}>Set your reminder</p>

      <div className="d-flex align-items-center justify-content-between px-3 mb-4" style={{ height: 48, borderRadius: 10, border: "1px solid #d9d9d9" }}>
        <span className="fw-bold" style={{ fontSize: 15 }}>Time</span>
        <span className="fw-bold" style={{ fontSize: 15 }}>06:00AM</span>
      </div>

      <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
        {DAYS.map((day) => {
          const isActive = days.includes(day);
          return (
            <button
              key={day}
              type="button"
              onClick={() => toggleDay(day)}
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: 56,
                height: 56,
                border: "none",
                background: isActive ? "var(--edcheck-blue)" : "#e5e5e5",
              }}
            >
              <span className="fw-bold" style={{ fontSize: 14, color: isActive ? "white" : "black" }}>{day}</span>
            </button>
          );
        })}
      </div>

      <div className="d-flex align-items-center justify-content-between p-3 mb-4" style={{ borderRadius: 10, background: "#e5e5e5" }}>
        <div>
          <p className="fw-bold m-0" style={{ fontSize: 15 }}>Smart reminder</p>
          <p className="fw-normal m-0" style={{ fontSize: 12, color: "#666" }}>We&rsquo;ll remind you based on your activity</p>
        </div>
        <button
          type="button"
          onClick={() => setSmart((s) => !s)}
          className="rounded-pill flex-shrink-0"
          style={{ width: 44, height: 26, border: "none", background: "#999", position: "relative" }}
          aria-pressed={smart}
        >
          <span
            className="rounded-circle position-absolute"
            style={{
              width: 20,
              height: 20,
              top: 3,
              left: smart ? 21 : 3,
              background: "var(--edcheck-blue)",
              transition: "left 0.15s ease",
            }}
          />
        </button>
      </div>

      <button
        type="button"
        onClick={onFinish}
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: 48, borderRadius: 10, background: "#0709b7", border: "none" }}
      >
        <span className="fw-bold text-white" style={{ fontSize: 16 }}>Finish</span>
      </button>
      <button type="button" onClick={onBack} className="d-block mx-auto mt-3 fw-bold border-0 bg-transparent" style={{ fontSize: 14 }}>
        Back
      </button>
    </div>
  );
}

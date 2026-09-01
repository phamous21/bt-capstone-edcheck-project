import { useState } from "react";
import { PlayFill, X, FileEarmarkTextFill } from "react-bootstrap-icons";

const imgModuleIcon = "https://www.figma.com/api/mcp/asset/72cd7b01-24ad-4a80-b369-839957fc43f5.svg";

const OVERVIEW_ITEMS = ["What is python", "Element of coding", "Setup for coding", "Why coding matters", "Tools for coding"];
const TABS = ["Overview", "Notes", "Resources"];

export default function Module({ onBack, onNext }) {
  const [tab, setTab] = useState("Overview");
  const [notes, setNotes] = useState("");

  return (
    <div className="position-relative w-100 h-100 bg-white">
      <div
        className="position-absolute"
        style={{
          left: 0,
          top: 0,
          width: "100%",
          height: 420,
          background: "linear-gradient(120deg, #FF6B9D, #FFD93D, #6BCB77, #4D96FF)",
        }}
      >
        <p className="fw-bold m-0" style={{ position: "absolute", left: 24, top: 24, fontSize: 22, color: "var(--edcheck-blue)" }}>
          Module 1<br />of 5
        </p>
        <button
          type="button"
          onClick={onBack}
          className="position-absolute d-flex align-items-center justify-content-center rounded-circle"
          style={{ right: 24, top: 24, width: 44, height: 44, background: "rgba(0,0,0,0.15)", border: "none" }}
          aria-label="Close"
        >
          <X size={26} color="white" />
        </button>

        <div className="position-absolute d-flex align-items-center gap-4" style={{ left: 40, top: 150 }}>
          <div className="rounded-4 d-flex align-items-center justify-content-center" style={{ width: 90, height: 90, background: "var(--edcheck-blue-navy)" }}>
            <img src={imgModuleIcon} alt="" style={{ width: 48, height: 48 }} />
          </div>
          <div>
            <p className="fw-bold m-0" style={{ fontSize: 22 }}>Python for beginners</p>
            <p className="fw-semibold opacity-70 m-0" style={{ fontSize: 14 }}>Build your foundation with core</p>
            <p className="fw-semibold opacity-70 m-0" style={{ fontSize: 14 }}>python concepts step by step</p>
          </div>
        </div>

        <button
          type="button"
          className="position-absolute rounded-circle d-flex align-items-center justify-content-center bg-white"
          style={{ right: 260, top: 150, width: 90, height: 90, border: "none" }}
        >
          <PlayFill size={38} color="var(--edcheck-blue)" />
        </button>

        <div className="position-absolute" style={{ left: 40, right: 100, bottom: 30, height: 6, borderRadius: 6, background: "rgba(255,255,255,0.4)" }}>
          <div style={{ width: "40%", height: "100%", borderRadius: 6, background: "rgba(255,255,255,0.9)" }} />
        </div>
        <span className="position-absolute fw-bold" style={{ left: 40, bottom: 44, fontSize: 14 }}>40:45 / 100:11</span>
      </div>

      <div className="position-absolute d-flex gap-3" style={{ left: 40, top: 445 }}>
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className="fw-bold px-4 py-2"
            style={{
              borderRadius: 8,
              border: "2px solid var(--edcheck-blue)",
              background: tab === t ? "#b9b6f7" : "white",
              fontSize: 16,
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="position-absolute" style={{ left: 40, top: 510, width: 900, height: 400, overflowY: "auto" }}>
        {tab === "Overview" && (
          <ol className="fw-bold" style={{ fontSize: 20, paddingLeft: 24 }}>
            {OVERVIEW_ITEMS.map((item) => (
              <li key={item} className="mb-2">{item}</li>
            ))}
          </ol>
        )}

        {tab === "Notes" && (
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Jot notes down as you follow along..."
            className="w-100"
            style={{
              height: 340,
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 16,
              fontSize: 16,
              backgroundImage: "repeating-linear-gradient(#fff 0 39px, #ddd 39px 40px)",
              lineHeight: "40px",
            }}
          />
        )}

        {tab === "Resources" && (
          <div className="d-flex flex-wrap gap-4" style={{ border: "1px solid var(--edcheck-blue)", borderRadius: 8, padding: 24 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="d-flex align-items-center gap-2" style={{ width: 220 }}>
                <FileEarmarkTextFill size={22} />
                <span className="fw-bold" style={{ fontSize: 16 }}>PDF Doc</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onNext}
        className="position-absolute fw-bold text-white px-5 py-3"
        style={{ right: 40, bottom: 30, borderRadius: 10, background: "var(--edcheck-blue)", border: "none", fontSize: 18 }}
      >
        Next
      </button>
    </div>
  );
}

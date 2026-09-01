import { useState } from "react";
import { Search as SearchIcon, ArrowLeft, ChevronDown } from "react-bootstrap-icons";

const LEVELS = ["All", "Beginner", "Intermediate", "Advance"];
const COURSES = Array.from({ length: 18 }, (_, i) => `Course ${i + 1}`);

export default function Search({ onBack, onShowResults }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("Beginner");

  return (
    <div className="edcheck-card p-4 p-md-5">
      <div className="d-flex align-items-center gap-3 mb-3">
        <button className="border rounded-2 bg-white d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }} onClick={onBack} aria-label="Back">
          <ArrowLeft size={18} />
        </button>
        <p className="fw-bold m-0" style={{ fontSize: 22 }}>Search and Filter</p>
      </div>

      <div className="d-flex align-items-center gap-2 px-3 mb-4" style={{ height: 48, borderRadius: 10, border: "1px solid #d9d9d9" }}>
        <SearchIcon size={16} color="#999" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search course topic ..."
          className="flex-fill border-0"
          style={{ outline: "none", fontSize: 15 }}
        />
      </div>

      <div className="d-flex align-items-center justify-content-between mb-2">
        <p className="fw-bold m-0" style={{ fontSize: 18 }}>Filters</p>
        <button type="button" className="fw-bold border rounded-2 bg-white px-2 py-1" style={{ fontSize: 12 }} onClick={() => setLevel("All")}>
          Clear all
        </button>
      </div>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {LEVELS.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLevel(l)}
            className="fw-bold px-3 py-2"
            style={{
              borderRadius: 8,
              border: "1px solid var(--edcheck-blue)",
              background: level === l ? "var(--edcheck-blue)" : "white",
              color: level === l ? "white" : "black",
              fontSize: 14,
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <button type="button" className="d-flex align-items-center justify-content-between w-100 px-3 mb-4" style={{ height: 44, borderRadius: 8, border: "1px solid #ccc", background: "white" }}>
        <span className="fw-bold" style={{ fontSize: 15 }}>Categories</span>
        <ChevronDown size={16} />
      </button>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {COURSES.map((c) => (
          <button key={c} type="button" className="fw-bold px-3 py-2 bg-white" style={{ borderRadius: 8, border: "1px solid var(--edcheck-blue)", fontSize: 13 }}>
            {c}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onShowResults}
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: 48, borderRadius: 10, background: "var(--edcheck-blue)", border: "none" }}
      >
        <span className="fw-bold text-white" style={{ fontSize: 16 }}>Show {COURSES.length} Results</span>
      </button>
    </div>
  );
}

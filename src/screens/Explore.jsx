import {
  Search,
  PenFill,
  EmojiSunglasses,
  CameraFill,
  BarChartFill,
  Robot,
} from "react-bootstrap-icons";

const CATEGORIES = [
  { key: "design", label: "Design", Icon: PenFill, bg: "#F3A6A6" },
  { key: "development", label: "Development", Icon: PenFill, bg: "#A6E3A6" },
  { key: "python", label: "Python", Icon: EmojiSunglasses, bg: "#C9C9F5" },
  { key: "photography", label: "Photography", Icon: CameraFill, bg: "#C9C9F5" },
  { key: "marketing", label: "Marketing", Icon: BarChartFill, bg: "#C9C9F5" },
  { key: "data-science", label: "Data science", Icon: PenFill, bg: "#C9C9F5" },
];

export default function Explore({ onSearch, onNext, onBack }) {
  return (
    <div className="edcheck-card p-4 p-md-5">
      <p className="fw-bold m-0 mb-3" style={{ fontSize: 24 }}>
        Explore
      </p>

      <button
        type="button"
        onClick={onSearch}
        className="d-flex align-items-center gap-2 px-3 w-100 bg-white text-start mb-4"
        style={{ height: 48, borderRadius: 10, border: "1px solid #d9d9d9" }}
      >
        <Search size={16} color="#999" />
        <span className="opacity-50" style={{ fontSize: 15 }}>
          Search course topic ...
        </span>
      </button>

      <p className="fw-bold m-0 mb-2" style={{ fontSize: 18 }}>
        Categories
      </p>
      <div className="d-flex flex-wrap gap-3 mb-4">
        {CATEGORIES.map(({ key, label, Icon, bg }) => (
          <div
            key={key}
            className="d-flex flex-column align-items-start justify-content-between p-3"
            style={{
              width: 130,
              height: 100,
              borderRadius: 12,
              background: bg,
            }}
          >
            <Icon size={22} />
            <span className="fw-bold" style={{ fontSize: 15 }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="d-flex align-items-center justify-content-between mb-2">
        <p className="fw-bold m-0" style={{ fontSize: 18 }}>
          Popular Courses
        </p>
      </div>
      <div
        className="d-flex align-items-center gap-3 p-3 mb-4"
        style={{ border: "1px solid #ccc", borderRadius: 10 }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            background: "#7B2FF7",
          }}
        >
          <Robot size={26} color="#FFD93D" />
        </div>
        <p className="fw-bold m-0" style={{ fontSize: 18 }}>
          AI automation Engineer
        </p>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="d-flex align-items-center justify-content-center w-100"
        style={{
          height: 48,
          borderRadius: 10,
          background: "#0709b7",
          border: "none",
        }}
      >
        <span className="fw-bold text-white" style={{ fontSize: 16 }}>
          Next
        </span>
      </button>
      <button
        type="button"
        onClick={onBack}
        className="d-block mx-auto mt-3 fw-bold border-0 bg-transparent"
        style={{ fontSize: 14 }}
      >
        Back
      </button>
    </div>
  );
}

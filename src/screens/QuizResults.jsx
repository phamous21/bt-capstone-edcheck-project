import { ArrowLeft } from "react-bootstrap-icons";

export default function QuizResults({ result, onBack, onReview, onBackToLesson }) {
  const { correct = 4, total = 5 } = result || {};
  const incorrect = total - correct;
  const percent = Math.round((correct / total) * 100);

  return (
    <div className="position-relative w-100 h-100 bg-white">
      <button className="position-absolute border-0 bg-transparent" style={{ left: 40, top: 40 }} onClick={onBack} aria-label="Back">
        <ArrowLeft size={28} />
      </button>

      <div className="position-absolute d-flex flex-column align-items-center" style={{ left: 0, top: 90, width: "100%" }}>
        <p className="fw-bold m-0" style={{ fontSize: 28 }}>Great job</p>
        <p className="fw-normal m-0" style={{ fontSize: 18, color: "#666" }}>you scored</p>
        <p className="fw-bold m-0" style={{ fontSize: 60 }}>{percent}%</p>
        <p className="fw-normal m-0" style={{ fontSize: 20, color: "#666" }}>{correct} out of {total} correct</p>
      </div>

      <div className="position-absolute" style={{ left: 100, top: 330, width: 1240, borderRadius: 10, border: "1px solid #333" }}>
        {[
          ["Correct", correct],
          ["Incorrect", incorrect],
          ["Unanswered", 0],
        ].map(([label, value], i) => (
          <div key={label} className="d-flex align-items-center justify-content-between px-4 py-3" style={{ borderBottom: i < 2 ? "1px solid #ccc" : "none" }}>
            <span style={{ fontSize: 20 }}>{label}</span>
            <span style={{ fontSize: 20 }}>{value}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onReview}
        className="position-absolute fw-bold text-white"
        style={{ left: 100, top: 500, width: 1240, height: 60, borderRadius: 10, background: "var(--edcheck-blue)", border: "none", fontSize: 20 }}
      >
        Review Answers
      </button>

      <button
        type="button"
        onClick={onBackToLesson}
        className="position-absolute fw-bold border-0 bg-transparent"
        style={{ left: 0, top: 590, width: "100%", fontSize: 18 }}
      >
        Back to Lesson
      </button>
    </div>
  );
}

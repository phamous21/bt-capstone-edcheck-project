import { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const QUESTIONS = [
  {
    prompt: "What is Python?",
    options: ["A: A high-level programming language", "B: A snake species", "C: A markup language", "D: A spreadsheet tool"],
    correct: 0,
  },
  {
    prompt: "Which symbol starts a comment in Python?",
    options: ["A: //", "B: #", "C: --", "D: /* */"],
    correct: 1,
  },
  {
    prompt: "What is the correct file extension for a Python file?",
    options: ["A: .pt", "B: .pyt", "C: .py", "D: .python"],
    correct: 2,
  },
  {
    prompt: "Which keyword defines a function in Python?",
    options: ["A: func", "B: function", "C: lambda", "D: def"],
    correct: 3,
  },
  {
    prompt: "What data type is the value True?",
    options: ["A: int", "B: bool", "C: string", "D: float"],
    correct: 1,
  },
];

export default function Quiz({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));

  const question = QUESTIONS[index];
  const isLast = index === QUESTIONS.length - 1;

  const selectOption = (optIndex) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = optIndex;
      return next;
    });
  };

  const goNext = () => {
    if (isLast) {
      const correctCount = answers.reduce((sum, a, i) => sum + (a === QUESTIONS[i].correct ? 1 : 0), 0);
      onFinish({ correct: correctCount, total: QUESTIONS.length });
    } else {
      setIndex((i) => i + 1);
    }
  };

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));

  return (
    <div className="position-relative w-100 h-100 bg-white">
      <p className="position-absolute fw-bold m-0" style={{ left: 100, top: 60, fontSize: 24, color: "#666" }}>
        Question {index + 1} of {QUESTIONS.length}
      </p>

      <p className="position-absolute fw-bold m-0" style={{ left: 0, top: 220, width: "100%", textAlign: "center", fontSize: 30 }}>
        {question.prompt}
      </p>

      <div className="position-absolute d-flex flex-column gap-3" style={{ left: 100, top: 320, width: 640 }}>
        {question.options.map((opt, i) => {
          const isActive = answers[index] === i;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => selectOption(i)}
              className="fw-bold text-start px-4 py-3"
              style={{
                borderRadius: 10,
                border: isActive ? "3px solid var(--edcheck-blue)" : "2px solid #333",
                background: isActive ? "rgba(7,9,183,0.08)" : "white",
                fontSize: 18,
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={goPrev}
        disabled={index === 0}
        className="position-absolute d-flex align-items-center justify-content-center gap-2 fw-bold"
        style={{
          left: 100,
          bottom: 40,
          width: 400,
          height: 68,
          borderRadius: 12,
          border: "none",
          background: "#c3c2f4",
          fontSize: 20,
          opacity: index === 0 ? 0.5 : 1,
        }}
      >
        <ArrowLeft size={20} /> Previous
      </button>

      <button
        type="button"
        onClick={goNext}
        disabled={answers[index] === null}
        className="position-absolute fw-bold text-white"
        style={{
          right: 100,
          bottom: 40,
          width: 400,
          height: 68,
          borderRadius: 12,
          border: "none",
          background: "var(--edcheck-blue)",
          fontSize: 20,
          opacity: answers[index] === null ? 0.5 : 1,
        }}
      >
        {isLast ? "Submit" : "Next"}
      </button>
    </div>
  );
}

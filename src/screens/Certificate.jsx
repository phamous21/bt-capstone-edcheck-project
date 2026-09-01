import { ArrowLeft, Award, PersonBadgeFill, StarFill } from "react-bootstrap-icons";

export default function Certificate({ onBack }) {
  return (
    <div className="position-relative w-100 h-100 bg-white">
      <button
        className="position-absolute rounded-circle p-2"
        style={{ left: 40, top: 30, border: "1px solid #ccc" }}
        onClick={onBack}
        aria-label="Back"
      >
        <ArrowLeft size={22} />
      </button>

      <p className="position-absolute fw-bold text-center m-0" style={{ left: 0, top: 50, width: "100%", fontSize: 20 }}>
        Certificate
      </p>

      <div
        className="position-absolute d-flex flex-column"
        style={{
          left: "50%",
          top: 110,
          transform: "translateX(-50%)",
          width: 520,
          height: 660,
          border: "10px solid black",
          background: "#B4B0F0",
          padding: "40px 32px",
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <Award size={54} color="#333" />
          <p className="fw-bold m-0 mt-2" style={{ fontSize: 22 }}>Certificate of Completion</p>
        </div>

        <div className="flex-fill d-flex align-items-center justify-content-center">
          <p className="fw-bold m-0" style={{ fontSize: 30 }}>Alex John</p>
        </div>

        <div className="d-flex justify-content-between align-items-end">
          <PersonBadgeFill size={44} color="#333" />
          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 60, background: "#FFF4C2", border: "2px solid #333" }}>
            <StarFill size={26} color="#333" />
          </div>
        </div>
      </div>

      <div className="position-absolute d-flex justify-content-between" style={{ left: 100, right: 100, top: 820 }}>
        <button type="button" className="fw-bold text-white px-4 py-2" style={{ background: "var(--edcheck-blue)", borderRadius: 8, border: "none" }}>
          Download
        </button>
        <button type="button" className="fw-bold text-white px-4 py-2" style={{ background: "var(--edcheck-blue)", borderRadius: 8, border: "none" }}>
          Share
        </button>
      </div>
    </div>
  );
}

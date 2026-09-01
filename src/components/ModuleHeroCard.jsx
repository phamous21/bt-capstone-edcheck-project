const imgEmojioneClosedBook = "https://www.figma.com/api/mcp/asset/2c074e7b-bd71-475e-b663-ae2032ff175d.svg";
const imgEmojioneBlueBook = "https://www.figma.com/api/mcp/asset/72cd7b01-24ad-4a80-b369-839957fc43f5.svg";
const imgFxemojiSeedling = "https://www.figma.com/api/mcp/asset/7660de1b-5cfd-42d1-8dd8-149786c85fa1.svg";

export default function ModuleHeroCard({ percent = 0 }) {
  return (
    <div
      className="position-absolute rounded-4 overflow-hidden"
      style={{
        left: 96,
        top: 251,
        width: 1244,
        height: 213,
        borderRadius: 15,
        background: "linear-gradient(90deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF)",
      }}
    >
      <div
        className="position-absolute d-flex align-items-center justify-content-center"
        style={{ left: 24, top: 12, width: 224, height: 184, borderRadius: 15, background: "var(--edcheck-blue-navy)" }}
      >
        <img src={imgEmojioneBlueBook} alt="" className="position-absolute" style={{ width: 103, height: 103, left: 6, top: 72 }} />
        <img src={imgEmojioneClosedBook} alt="" className="position-absolute" style={{ width: 97, height: 97, left: 12, top: 92 }} />
        <img src={imgFxemojiSeedling} alt="" className="position-absolute" style={{ width: 48, height: 48, left: -8, top: 46 }} />
      </div>

      <p className="position-absolute fw-bold m-0" style={{ left: 356, top: 22, fontSize: 25, color: "#0709b6" }}>
        Module 1
      </p>
      <p className="position-absolute fw-bold m-0 text-black" style={{ left: 340, top: 58, fontSize: 20 }}>
        Python for beginners
      </p>
      <div className="position-absolute fw-bold opacity-50 text-black" style={{ left: 328, top: 92, fontSize: 15 }}>
        <p className="m-0">Build your foundation with core</p>
        <p className="m-0">python concepts step by step</p>
      </div>

      <div className="position-absolute d-flex flex-column align-items-center gap-1" style={{ right: 40, top: 23 }}>
        <div
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: 146, height: 146, background: "rgba(255,255,255,0.7)" }}
        >
          <span className="fw-bold" style={{ fontSize: 15 }}>{String(percent).padStart(2, "0")}%</span>
        </div>
        <span className="fw-bold" style={{ fontSize: 10 }}>complete</span>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export const DESIGN_WIDTH = 1440;
export const DESIGN_HEIGHT = 1024;

/**
 * Wraps a fixed 1440x1024 "app screen" (Home, Progress, Learn, etc. — all
 * still laid out with absolute pixel coordinates matching the Figma frames)
 * and scales it down to fit the viewport on smaller screens, instead of
 * horizontally scrolling or clipping. The internal layout stays pixel
 * perfect; only the overall canvas shrinks.
 */
export default function ResponsiveCanvas({ children, minScale = 0.32 }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      const horizontalMargin = 32;
      const verticalMargin = 32;
      const availableWidth = window.innerWidth - horizontalMargin;
      const availableHeight = window.innerHeight - verticalMargin;
      const nextScale = Math.min(1, availableWidth / DESIGN_WIDTH, availableHeight / DESIGN_HEIGHT);
      setScale(Math.max(minScale, nextScale));
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [minScale]);

  return (
    <div style={{ width: DESIGN_WIDTH * scale, height: DESIGN_HEIGHT * scale }}>
      <div
        className="edcheck-canvas"
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

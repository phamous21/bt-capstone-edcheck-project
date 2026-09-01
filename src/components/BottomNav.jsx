import { HouseFill, BarChartFill, BookFill, TrophyFill, PersonFill } from "react-bootstrap-icons";

const NAV_ITEMS = [
  { key: "home", label: "Home", Icon: HouseFill },
  { key: "progress", label: "Progress", Icon: BarChartFill },
  { key: "learn", label: "Learn", Icon: BookFill },
  { key: "achievement", label: "Achievement", Icon: TrophyFill },
  { key: "profile", label: "Profile", Icon: PersonFill },
];

export const BOTTOM_NAV_HEIGHT = 120;

/**
 * Bottom tab bar shared by every main-app screen.
 * `active` — currently selected tab key.
 * `onNavigate(key)` — called when a tab is pressed.
 * `activeColor` — each screen's accent color for the selected pill.
 */
export default function BottomNav({ active, onNavigate, activeColor = "#34C759" }) {
  return (
    <div
      className="position-absolute bottom-0 start-0 w-100 d-flex"
      style={{ height: BOTTOM_NAV_HEIGHT }}
    >
      {NAV_ITEMS.map(({ key, label, Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onNavigate?.(key)}
            className="flex-fill d-flex align-items-center justify-content-center"
            aria-current={isActive ? "page" : undefined}
          >
            <div
              className="d-flex flex-column align-items-center justify-content-center gap-1 rounded-pill"
              style={{
                width: "88%",
                height: "82%",
                borderRadius: 40,
                backgroundColor: isActive ? activeColor : "white",
                transition: "background-color 0.15s ease",
              }}
            >
              <Icon size={24} color={isActive ? "white" : "black"} />
              <span
                className="fw-bold"
                style={{ fontSize: 17, color: isActive ? "white" : "black", lineHeight: 1 }}
              >
                {label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

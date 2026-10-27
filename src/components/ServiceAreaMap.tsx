"use client";
import { locations } from "@/data/locations";
import { baseTown, mapPoints } from "@/data/location-map";

// Equirectangular projection, longitude scaled by cos(47.6°) so distances read true.
const K_LAT = 380; // px per degree of latitude
const K_LNG = K_LAT * Math.cos((47.6 * Math.PI) / 180);
const LAT_TOP = 48.35;
const LNG_LEFT = -117.42;
const X0 = 124;
const Y0 = 32;
const W = 720;
const H = 330;
// Moscow sits ~85 mi south of Spirit Lake, so it is shown as an off-map pointer.
const OFF_MAP = "moscow-id";

const project = (lat: number, lng: number) => ({
  x: X0 + (lng - LNG_LEFT) * K_LNG,
  y: Y0 + (LAT_TOP - lat) * K_LAT,
});

// Idaho–Washington line (≈117°02′W) runs north–south through this area.
const stateLineX = project(0, -117.0416).x;
// 20 miles ≈ 0.2895° of latitude.
const scale20 = 0.2895 * K_LAT;

export function ServiceAreaMap({
  active,
  onActive,
}: {
  active: string | null;
  onActive: (slug: string | null) => void;
}) {
  const activeLocation = locations.find((location) => location.slug === active);

  return (
    <figure className="hub-map">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="group"
        aria-label="Map of towns Preferred Plumbing serves, centered on Spirit Lake, Idaho"
      >
        <rect
          className="hub-map-wa"
          x="0"
          y="0"
          width={stateLineX}
          height={H}
        />
        <rect
          className="hub-map-id"
          x={stateLineX}
          y="0"
          width={W - stateLineX}
          height={H}
        />
        <line
          className="hub-map-border"
          x1={stateLineX}
          y1="0"
          x2={stateLineX}
          y2={H}
        />
        <text
          className="hub-map-state"
          x={stateLineX - 14}
          y="28"
          textAnchor="end"
        >
          Washington
        </text>
        <text className="hub-map-state" x={stateLineX + 14} y="28">
          Idaho
        </text>

        {mapPoints.map((point) => {
          const location = locations.find((l) => l.slug === point.slug);
          if (!location) return null;
          if (point.slug === OFF_MAP) {
            const mx = project(point.lat, point.lng).x;
            return (
              <g
                key={point.slug}
                className="hub-pin hub-offmap"
                data-active={active === point.slug || undefined}
                aria-label={`${location.city}, ${location.state}, about 85 miles south of the map`}
                tabIndex={0}
                onMouseEnter={() => onActive(point.slug)}
                onMouseLeave={() => onActive(null)}
                onFocus={() => onActive(point.slug)}
                onBlur={() => onActive(null)}
              >
                <rect
                  className="hub-pin-hit"
                  x={mx - 20}
                  y={H - 64}
                  width="150"
                  height="52"
                />
                <path
                  className="hub-offmap-arrow"
                  d={`M${mx} ${H - 56} v26 m-6 -7 l6 8 l6 -8`}
                />
                <text className="hub-pin-label" x={mx + 14} y={H - 42}>
                  Moscow
                </text>
                <text className="hub-offmap-note" x={mx + 14} y={H - 26}>
                  about 85 mi south
                </text>
              </g>
            );
          }
          const { x, y } = project(point.lat, point.lng);
          const isBase = point.slug === baseTown;
          const isActive = active === point.slug;
          const anchorEnd = point.side === "left";
          const tx = x + (anchorEnd ? -14 : 14);
          const ty = y + 5 + (point.dy ?? 0);
          return (
            <g
              key={point.slug}
              className="hub-pin"
              data-active={isActive || undefined}
              data-base={isBase || undefined}
              aria-label={`${location.city}, ${location.state}${isBase ? " (our shop)" : ""}`}
              tabIndex={0}
              onMouseEnter={() => onActive(point.slug)}
              onMouseLeave={() => onActive(null)}
              onFocus={() => onActive(point.slug)}
              onBlur={() => onActive(null)}
            >
              <circle className="hub-pin-hit" cx={x} cy={y} r="22" />
              <circle
                className="hub-pin-halo"
                cx={x}
                cy={y}
                r={isBase ? 15 : 12}
              />
              <circle
                className="hub-pin-dot"
                cx={x}
                cy={y}
                r={isBase ? 8 : 6}
              />
              <text
                className="hub-pin-label"
                x={tx}
                y={ty}
                textAnchor={anchorEnd ? "end" : "start"}
              >
                {location.city}
              </text>
            </g>
          );
        })}

        <g
          className="hub-map-scale"
          transform={`translate(${W - 24 - scale20}, ${H - 24})`}
        >
          <line x1="0" y1="0" x2={scale20} y2="0" />
          <line x1="0" y1="-4" x2="0" y2="4" />
          <line x1={scale20} y1="-4" x2={scale20} y2="4" />
          <text x={scale20 / 2} y="-9" textAnchor="middle">
            20 mi
          </text>
        </g>
      </svg>
      <figcaption>
        <span className="hub-map-caption">
          <b>Explore the service area</b>
          Hover or focus a town to match it with the directory below.
        </span>
        <span className="hub-map-active" aria-live="polite">
          {activeLocation
            ? `${activeLocation.city}, ${activeLocation.state}`
            : "Spirit Lake shop · Regional service"}
        </span>
      </figcaption>
    </figure>
  );
}

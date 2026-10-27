// Approximate town centres, used only to plot the schematic service-area map.
// County groupings drive the directory sections on /locations/.
export type MapPoint = {
  slug: string;
  lat: number;
  lng: number;
  county: string;
  // Label placement on the map: side of the dot, and a nudge in map units.
  side: "left" | "right";
  dx?: number;
  dy?: number;
};

export const mapPoints: MapPoint[] = [
  { slug: "spirit-lake-id", lat: 47.9577, lng: -116.873, county: "Kootenai County", side: "left" },
  { slug: "athol-id", lat: 47.9499, lng: -116.7107, county: "Kootenai County", side: "right" },
  { slug: "rathdrum-id", lat: 47.8127, lng: -116.8969, county: "Kootenai County", side: "left" },
  { slug: "hayden-id", lat: 47.766, lng: -116.786, county: "Kootenai County", side: "right" },
  { slug: "coeur-dalene-id", lat: 47.6777, lng: -116.7805, county: "Kootenai County", side: "right" },
  { slug: "post-falls-id", lat: 47.7179, lng: -116.9516, county: "Kootenai County", side: "left" },
  { slug: "blanchard-id", lat: 48.0, lng: -116.98, county: "Bonner County", side: "left" },
  { slug: "priest-river-id", lat: 48.1807, lng: -116.9122, county: "Bonner County", side: "right", dy: 12 },
  { slug: "oldtown-id", lat: 48.1888, lng: -116.9985, county: "Bonner County", side: "right", dy: -12 },
  { slug: "sandpoint-id", lat: 48.2766, lng: -116.5533, county: "Bonner County", side: "right" },
  { slug: "clark-fork-id", lat: 48.1405, lng: -116.1799, county: "Bonner County", side: "left" },
  { slug: "newport-wa", lat: 48.1782, lng: -117.043, county: "Pend Oreille & Spokane Counties", side: "left" },
  { slug: "chattaroy-wa", lat: 47.8896, lng: -117.351, county: "Pend Oreille & Spokane Counties", side: "right" },
  { slug: "mead-wa", lat: 47.769, lng: -117.355, county: "Pend Oreille & Spokane Counties", side: "right" },
  { slug: "moscow-id", lat: 46.7324, lng: -117.0002, county: "Latah County", side: "right" },
];

export const baseTown = "spirit-lake-id";

export const countyOrder = [
  "Kootenai County",
  "Bonner County",
  "Pend Oreille & Spokane Counties",
  "Latah County",
];

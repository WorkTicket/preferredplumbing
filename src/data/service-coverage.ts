/** City coverage blocks on service hubs — links to /locations/{slug}/ only. */
export type CoverageCity = {
  slug: string;
  blurb: string;
};

export type ServiceCoverage = {
  heading: string;
  intro: string;
  cities: CoverageCity[];
};

const CORE_KOOTENAI: CoverageCity[] = [
  {
    slug: "spirit-lake-id",
    blurb: "Home base — often the fastest response window during business hours.",
  },
  {
    slug: "rathdrum-id",
    blurb: "Short run from the shop; same-day emergency slots are often realistic.",
  },
  {
    slug: "hayden-id",
    blurb: "Regular Kootenai County dispatch for lake and inland neighborhoods.",
  },
  {
    slug: "post-falls-id",
    blurb: "Common for new construction, water heaters, and commercial TI work.",
  },
  {
    slug: "coeur-dalene-id",
    blurb: "Lake-corridor homes, downtown commercial, and hillside properties.",
  },
];

/** Full Preferred service map — used for high-ticket heating and builder pages. */
const ALL_SERVICE_AREAS: CoverageCity[] = [
  {
    slug: "spirit-lake-id",
    blurb: "Home base for radiant, snow-melt, and custom-home coordination.",
  },
  {
    slug: "athol-id",
    blurb: "Next-door runs for new slabs, well homes, and heated approaches.",
  },
  {
    slug: "blanchard-id",
    blurb: "Rural acreage, shops, and seasonal homes that need hydronic plans.",
  },
  {
    slug: "rathdrum-id",
    blurb: "Prairie new builds where whole-home radiant belongs in the slab window.",
  },
  {
    slug: "hayden-id",
    blurb: "Lake and inland custom homes plus driveway snow-melt reviews.",
  },
  {
    slug: "post-falls-id",
    blurb: "Growing corridors for custom plumbing, radiant, and new pours.",
  },
  {
    slug: "coeur-dalene-id",
    blurb: "Lake-corridor custom homes, retrofits, and hillside approaches.",
  },
  {
    slug: "sandpoint-id",
    blurb: "Lake Pend Oreille winters — strong demand for radiant and snow-melt.",
  },
  {
    slug: "priest-river-id",
    blurb: "Northern Idaho installs planned as project days from Spirit Lake.",
  },
  {
    slug: "oldtown-id",
    blurb: "Border-area custom work and heated driveway feasibility reviews.",
  },
  {
    slug: "clark-fork-id",
    blurb: "Remote builds where early radiant planning protects the schedule.",
  },
  {
    slug: "newport-wa",
    blurb: "Washington-licensed crews for Pend Oreille County heating projects.",
  },
  {
    slug: "chattaroy-wa",
    blurb: "Rural Spokane County wells, long driveways, and shop slabs.",
  },
  {
    slug: "mead-wa",
    blurb: "North Spokane corridor custom homes and snow-melt approaches.",
  },
  {
    slug: "moscow-id",
    blurb: "Palouse installs by appointment — radiant and builder scopes welcome.",
  },
];

export const serviceCoverage: Partial<Record<string, ServiceCoverage>> = {
  emergency: {
    heading: "Emergency plumbing coverage",
    intro:
      "Emergency plumbing runs Sunday through Friday, 7am to 5pm (closed Saturday). We dispatch from Spirit Lake across the towns below — call 208-290-3889 and we will tell you the soonest truck we can send.",
    cities: [
      ...CORE_KOOTENAI,
      {
        slug: "sandpoint-id",
        blurb: "Scheduled northern trips; call early so we can plan the run.",
      },
      {
        slug: "athol-id",
        blurb: "Next door to Spirit Lake — often 10–20 minutes in light traffic.",
      },
    ],
  },
  "radiant-heat": {
    heading: "Where we install and quote radiant heat",
    intro:
      "Hydronic radiant projects are quoted across every Preferred service town. Farther runs are planned as project days so the crew can finish meaningful work on site.",
    cities: ALL_SERVICE_AREAS,
  },
  "heated-driveways": {
    heading: "Where we install heated driveways",
    intro:
      "Hydronic heated driveway and snow-melt projects are reviewed across the full Preferred service area — the same towns on our locations list.",
    cities: ALL_SERVICE_AREAS,
  },
  commercial: {
    heading: "Commercial plumbing coverage",
    intro:
      "We handle restaurants, retail, offices, tenant improvements, backflow, and grease traps for businesses in the towns we already serve.",
    cities: [
      {
        slug: "post-falls-id",
        blurb: "Retail corridors and light-commercial TI along the I-90 corridor.",
      },
      {
        slug: "hayden-id",
        blurb: "Storefronts and office strips between CDA and Rathdrum.",
      },
      {
        slug: "coeur-dalene-id",
        blurb: "Downtown and lake-corridor commercial plumbing and remodel work.",
      },
      {
        slug: "spirit-lake-id",
        blurb: "Local commercial repairs and small-business installs near the shop.",
      },
      {
        slug: "rathdrum-id",
        blurb: "Growing commercial strips with short dispatch from Spirit Lake.",
      },
    ],
  },
  "new-construction": {
    heading: "New construction coverage",
    intro:
      "Rough-in, top-out, final, inspection timing, and early radiant planning for builders and homeowners across every Preferred service town.",
    cities: ALL_SERVICE_AREAS,
  },
  "sewer-line": {
    heading: "Sewer line service area",
    intro:
      "Camera diagnostics, repair, and replacement for homes and businesses in these towns:",
    cities: [
      {
        slug: "rathdrum-id",
        blurb: "Prairie soils and frost depth factor into every dig plan.",
      },
      {
        slug: "coeur-dalene-id",
        blurb: "Older lake-corridor lines and newer subdivision laterals.",
      },
      {
        slug: "post-falls-id",
        blurb: "Growth areas where older laterals meet denser development.",
      },
      {
        slug: "spirit-lake-id",
        blurb: "Home-base runs for sewer camera and replacement work.",
      },
    ],
  },
  "water-heaters": {
    heading: "Water heater service area",
    intro:
      "Tank repair, replacement, and installs across our service towns, including Sandpoint and Spirit Lake:",
    cities: [
      {
        slug: "spirit-lake-id",
        blurb: "Same-day swaps during business hours are often realistic.",
      },
      {
        slug: "sandpoint-id",
        blurb: "Northern trips staged with parts on the truck.",
      },
      {
        slug: "rathdrum-id",
        blurb: "Common same-week install corridor from the shop.",
      },
      {
        slug: "hayden-id",
        blurb: "Hard-water scale shortens tank life — flushing matters here.",
      },
      {
        slug: "post-falls-id",
        blurb: "New construction and replacement tanks for growing neighborhoods.",
      },
      {
        slug: "coeur-dalene-id",
        blurb: "Residential and light-commercial water heater work.",
      },
    ],
  },
  "drain-cleaning": {
    heading: "Drain cleaning coverage",
    intro:
      "Sinks, showers, toilets, and main lines across the towns we serve:",
    cities: CORE_KOOTENAI.concat([
      {
        slug: "sandpoint-id",
        blurb: "Main-line and rental-property drain work on northern runs.",
      },
    ]),
  },
  "leak-detection": {
    heading: "Leak detection coverage",
    intro:
      "Electronic leak finding and repair planning for homes in our service area:",
    cities: CORE_KOOTENAI.concat([
      {
        slug: "sandpoint-id",
        blurb: "Crawlspace and shoreline leak calls on scheduled trips.",
      },
    ]),
  },
};

export const emergencyChecklist = [
  "Burst or frozen pipe dumping water",
  "Sewer backup into a floor drain, tub, or basement",
  "No water to the house",
  "Gas smell — leave the building and call the gas utility or 911 first, then us",
  "Water heater leaking onto the floor or into a garage",
];

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
  "heated-driveways": {
    heading: "Where we install heated driveways",
    intro:
      "We install hydronic heated driveways and snow-melt systems across our North Idaho and Eastern Washington service area — the same towns on our locations list. We do not advertise installs in distant cities we do not serve.",
    cities: [
      ...CORE_KOOTENAI,
      {
        slug: "sandpoint-id",
        blurb: "Lake Pend Oreille winters make snow-melt a practical upgrade.",
      },
      {
        slug: "moscow-id",
        blurb: "Palouse installs by appointment from Spirit Lake.",
      },
      {
        slug: "newport-wa",
        blurb: "Washington-licensed crews for Pend Oreille County properties.",
      },
    ],
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
      "Rough-in, top-out, final, and inspection coordination for builders and homeowners in our core North Idaho towns.",
    cities: [
      {
        slug: "rathdrum-id",
        blurb: "High volume of new builds on the prairie and Twin Lakes.",
      },
      {
        slug: "coeur-dalene-id",
        blurb: "Custom homes and multi-unit work with city inspection timing.",
      },
      {
        slug: "hayden-id",
        blurb: "New construction and addition plumbing around Hayden Lake.",
      },
      {
        slug: "post-falls-id",
        blurb: "Production homes and builder punch-list plumbing.",
      },
      {
        slug: "spirit-lake-id",
        blurb: "Local custom homes with the shortest coordination loop.",
      },
    ],
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

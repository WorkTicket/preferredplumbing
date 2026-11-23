import type { IconName } from "./icons";
export type Service = {
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: IconName;
};
export const services: Service[] = [
  {
    slug: "emergency",
    title: "Emergency Plumbing",
    category: "Repairs",
    description:
      "Fast emergency plumbing to stop damage and get your system back online. Available during business hours (Sunday through Friday, 7am to 5pm) across North Idaho.",
    icon: "emergency",
  },
  {
    slug: "radiant-heat",
    title: "Hydronic Radiant Floor Heating",
    category: "Heating",
    description:
      "Hydronic radiant floor heating for North Idaho new builds and existing homes. Custom layouts, boiler integration, and project-specific estimates.",
    icon: "heat",
  },
  {
    slug: "heated-driveways",
    title: "Heated Driveways & Snow-Melt",
    category: "Heating",
    description:
      "Hydronic heated driveway and snow-melt installs for North Idaho properties. Feasibility review for new pours and replacements, coordinated with the surface crew.",
    icon: "snow",
  },
  {
    slug: "new-construction",
    title: "New Construction Plumbing",
    category: "Building",
    description:
      "Builder plumbing for custom homes and new construction in North Idaho — underground, rough-in, top-out, final, and inspection timing. Bring us in during planning.",
    icon: "home",
  },
  {
    slug: "commercial",
    title: "Commercial Plumbing",
    category: "Building",
    description:
      "We handle plumbing for retail, industrial, and office properties. High-demand systems built to code and built to last. We manage every stage, from new builds to renovations.",
    icon: "building",
  },
  {
    slug: "tankless-water-heaters",
    title: "Tankless Water Heaters",
    category: "Water",
    description:
      "Tankless (on-demand) water heater installation, repair, and replacement in North Idaho. Endless hot water, a smaller footprint, and lower energy use over time.",
    icon: "tankless",
  },
  {
    slug: "water-heaters",
    title: "Water Heater Installation & Replacement",
    category: "Water",
    description:
      "We install and repair tank water heaters for homes and businesses across North Idaho. We help you pick the right model for your family size, usage, and budget.",
    icon: "tank",
  },
  {
    slug: "water-softeners",
    title: "Water Softeners",
    category: "Water",
    description:
      "We install and service water softeners for cleaner water and longer-lasting fixtures. Hard water causes scale, stains, and buildup. Our systems improve taste and cut soap usage.",
    icon: "drop",
  },
  {
    slug: "remodels",
    title: "Plumbing Remodels & Upgrades",
    category: "Remodeling",
    description:
      "Update your plumbing with energy-efficient fixtures and modern piping. We work with your vision and budget to deliver upgrades that last.",
    icon: "spark",
  },
  {
    slug: "kitchen-remodels",
    title: "Kitchen Remodels",
    category: "Remodeling",
    description:
      "New plumbing layouts, appliance hookups, and water-efficient fixtures for your kitchen. We work with your remodel plans for a setup that functions well and lasts.",
    icon: "kitchen",
  },
  {
    slug: "bathroom-remodels",
    title: "Bathroom Remodels",
    category: "Remodeling",
    description:
      "New fixtures or total re-piping. We handle showers, tubs, vanities, toilets, and custom plumbing features. We build bathrooms that work and look good.",
    icon: "bath",
  },
  {
    slug: "toilets-faucets",
    title: "Toilets & Faucets",
    category: "Remodeling",
    description:
      "We install and repair toilets and faucets. Low-flow upgrades, leak repairs, and commercial-grade fixtures. We aim to cut water waste and stop problems before they start.",
    icon: "toilet",
  },
  {
    slug: "bathtubs-showers",
    title: "Bathtubs & Showers",
    category: "Remodeling",
    description:
      "We install bathtubs and showers that work well and look good. Walk-in tubs, tiled showers, and custom designs. We focus on water pressure, comfort, and durability.",
    icon: "shower",
  },
  {
    slug: "dishwashers",
    title: "Dishwashers & Disposals",
    category: "Remodeling",
    description:
      "We install dishwashers and garbage disposals the right way. Leak-free connections, proper venting, and compatibility with all major brands.",
    icon: "dishwasher",
  },
  {
    slug: "sewer-line",
    title: "Sewer Line Replacement",
    category: "Repairs",
    description:
      "We replace damaged or outdated sewer lines using camera inspections and trenchless methods when possible. Minimal digging, maximum reliability.",
    icon: "sewer",
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    category: "Repairs",
    description:
      "We clear clogged sinks, showers, toilets, and main drains. Camera inspection and hydro jetting when a cable will not hold. Fast, clean work across North Idaho.",
    icon: "drain",
  },
  {
    slug: "water-line",
    title: "Water Line Replacement",
    category: "Water",
    description:
      "Underground water main repair and water service replacement across North Idaho. We locate, repair, and replace failing water lines with minimal disruption.",
    icon: "waterline",
  },
  {
    slug: "leak-detection",
    title: "Leak Detection & Repair",
    category: "Repairs",
    description:
      "We find hidden plumbing leaks before they wreck floors, crawlspaces, and foundations. Electronic detection, pressure testing, and a clear repair plan \u2014 not exploratory demolition.",
    icon: "leak",
  },
  {
    slug: "gas-line",
    title: "Gas Line Services",
    category: "Building",
    description:
      "Licensed gas line installation, repair, and appliance hookups for homes and businesses in North Idaho. Safe, code-compliant natural gas work.",
    icon: "flame",
  },
  {
    slug: "septic-systems",
    title: "Septic Systems",
    category: "Building",
    description:
      "We design, install, and maintain septic systems for Idaho soil and water conditions. Soil testing, tank installation, drain fields, and routine pumping.",
    icon: "septic",
  },
];

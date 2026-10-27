import type { IconName } from "./icons";
export type ServiceDepthData = {
  family: string;
  title: string;
  lead: string;
  icon: IconName;
  asset: string;
  prep: string[];
  signals: string[];
  steps: string[];
};
export const serviceDepth: Record<string, ServiceDepthData> = {
  emergency: {
    family: "repairs",
    title: "Small leak. Big interruption.",
    lead: "Get a clear plan for the plumbing problem in front of you.",
    icon: "wrench",
    asset: "/assets/repairs-realistic.webp",
    prep: [
      "Where is the water showing up?",
      "Is one fixture affected or several?",
      "Can you share a photo of the problem?",
    ],
    signals: [
      "A leak that keeps returning",
      "A fixture you cannot use",
      "A problem that needs an owner\u2019s attention",
    ],
    steps: [
      "Describe what changed",
      "Identify the source",
      "Discuss the repair",
    ],
  },
  "radiant-heat": {
    family: "heating",
    title: "Comfort starts below the surface.",
    lead: "A good radiant system begins with the room, the floor, and the way you live.",
    icon: "heat",
    asset: "/assets/floor.webp",
    prep: [
      "Your floor plan and flooring material",
      "New construction or an existing home",
      "Which rooms need separate control",
    ],
    signals: [
      "Cold tile in the morning",
      "A new build ready for a heating plan",
      "A system that needs service",
    ],
    steps: [
      "Understand the space",
      "Plan the heat and controls",
      "Coordinate the installation",
    ],
  },
  "heated-driveways": {
    family: "heating",
    title: "Make winter part of the plan.",
    lead: "Snow-melt is a property-specific system, not a one-size-fits-all product.",
    icon: "snow",
    asset: "/assets/snowmelt.webp",
    prep: [
      "Driveway or walkway dimensions",
      "Existing surface or a planned pour",
      "Drainage, access, and the area you want to heat",
    ],
    signals: [
      "A sloped approach to the garage",
      "Walkways that are hard to keep clear",
      "A new driveway project",
    ],
    steps: [
      "Define the heated area",
      "Coordinate the system design",
      "Plan around the surface work",
    ],
  },
  "new-construction": {
    family: "building",
    title: "Get the hidden work right.",
    lead: "The best time to think about plumbing is while the plans are still on the table.",
    icon: "home",
    asset: "/assets/construction-model.webp",
    prep: [
      "Architectural plans and fixture schedule",
      "Build stage and contractor contact",
      "Water, sewer, well, or septic information",
    ],
    signals: [
      "A custom home taking shape",
      "A contractor ready to coordinate trades",
      "Rough-in work that needs a plan",
    ],
    steps: ["Review the plans", "Coordinate rough-in", "Finish the fixtures"],
  },
  commercial: {
    family: "building",
    title: "Built around the way you work.",
    lead: "Business plumbing needs a plan for access, use, and the people who depend on it.",
    icon: "building",
    asset: "/assets/construction-model.webp",
    prep: [
      "Property type and how it is used",
      "Site access and working-hour constraints",
      "Plans, existing equipment, and the job scope",
    ],
    signals: [
      "A tenant improvement project",
      "Fixtures serving customers and staff",
      "A renovation with several trades",
    ],
    steps: [
      "Understand the operation",
      "Define the plumbing scope",
      "Coordinate the work",
    ],
  },
  "tankless-water-heaters": {
    family: "water",
    title: "Hot water. Thoughtfully planned.",
    lead: "A tankless upgrade should fit the building, the fuel supply, and the household.",
    icon: "tank",
    asset: "/assets/tankless.webp",
    prep: [
      "Your current heater and fuel type",
      "How many fixtures run at the same time",
      "A photo of the heater, venting, and connections",
    ],
    signals: [
      "Hot water that does not meet demand",
      "A smaller equipment footprint",
      "A tankless unit due for service",
    ],
    steps: [
      "Understand demand",
      "Evaluate the installation",
      "Talk through the options",
    ],
  },
  "water-heaters": {
    family: "water",
    title: "A better plan for hot water.",
    lead: "Start with the problem and the household. Then decide what makes sense.",
    icon: "tank",
    asset: "/assets/tankless.webp",
    prep: [
      "A photo of the current water heater label",
      "Fuel type and where the unit is located",
      "What you notice: leaks, temperature, or capacity",
    ],
    signals: [
      "Water that will not stay hot",
      "A tank with visible leaks",
      "A replacement you want to plan ahead",
    ],
    steps: [
      "Look at the existing heater",
      "Compare repair and replacement",
      "Plan the right installation",
    ],
  },
  "water-softeners": {
    family: "water",
    title: "Water treatment starts with your water.",
    lead: "Match the system to the supply, the household, and the space available.",
    icon: "drop",
    asset: "/assets/filtration.webp",
    prep: [
      "City water or a private well",
      "What you notice on fixtures or appliances",
      "Any recent water test results",
    ],
    signals: [
      "Scale collecting around faucets",
      "Recurring buildup on fixtures",
      "A home ready for a water-treatment plan",
    ],
    steps: [
      "Understand the water supply",
      "Discuss treatment needs",
      "Plan access and maintenance",
    ],
  },
  remodels: {
    family: "remodeling",
    title: "New space. Better connections.",
    lead: "A remodel works best when the plumbing is part of the design from the beginning.",
    icon: "spark",
    asset: "/assets/kitchen.webp",
    prep: [
      "Current layout and your proposed changes",
      "Fixture selections or inspiration photos",
      "The remodel schedule and other trades involved",
    ],
    signals: [
      "Fixtures moving to a new location",
      "Old piping behind a new finish",
      "An upgrade that needs more than a swap",
    ],
    steps: [
      "Review the layout",
      "Plan behind the finishes",
      "Complete the trim-out",
    ],
  },
  "kitchen-remodels": {
    family: "remodeling",
    title: "A kitchen built for everyday life.",
    lead: "Think beyond the faucet. Plan the sink, appliances, and connections as one space.",
    icon: "home",
    asset: "/assets/kitchen.webp",
    prep: [
      "Sink and faucet specifications",
      "Dishwasher and disposal choices",
      "Cabinet layout and appliance locations",
    ],
    signals: [
      "A sink moving to an island",
      "New cabinets and countertops",
      "Appliance hookups that need to change",
    ],
    steps: [
      "Match the layout",
      "Coordinate the connections",
      "Finish with the fixtures",
    ],
  },
  "bathroom-remodels": {
    family: "remodeling",
    title: "Make the everyday feel better.",
    lead: "Good bathroom plumbing respects both the design you see and the systems you do not.",
    icon: "drop",
    asset: "/assets/kitchen.webp",
    prep: [
      "Your proposed bathroom layout",
      "Tub, shower, vanity, and toilet specifications",
      "Whether walls or floors are already open",
    ],
    signals: [
      "A bathroom ready for a fresh start",
      "A new shower or vanity layout",
      "Old fixtures being replaced together",
    ],
    steps: [
      "Talk through the room",
      "Plan supply and drainage",
      "Complete the fixture installation",
    ],
  },
  "toilets-faucets": {
    family: "remodeling",
    title: "Small fixtures. Daily difference.",
    lead: "A careful repair or the right replacement can make an everyday frustration disappear.",
    icon: "drop",
    asset: "/assets/repairs-realistic.webp",
    prep: [
      "Which fixture needs attention",
      "A photo of the model or existing connections",
      "Whether you already have a replacement picked out",
    ],
    signals: [
      "A toilet that keeps running",
      "A faucet that drips or feels loose",
      "Fixtures that are ready for an upgrade",
    ],
    steps: [
      "Check the fixture",
      "Discuss repair or replacement",
      "Complete the connection",
    ],
  },
  "bathtubs-showers": {
    family: "remodeling",
    title: "A clean finish starts behind the wall.",
    lead: "Plan valves, fixtures, and access before the tile and trim are finished.",
    icon: "drop",
    asset: "/assets/kitchen.webp",
    prep: [
      "Your tub or shower specifications",
      "The finish and fixture style you want",
      "New installation or a replacement in the same location",
    ],
    signals: [
      "A tub or shower replacement",
      "A new valve or trim package",
      "A remodel ready for plumbing work",
    ],
    steps: [
      "Review the fixture plan",
      "Coordinate the hidden work",
      "Install the final trim",
    ],
  },
  dishwashers: {
    family: "remodeling",
    title: "The last connection matters.",
    lead: "Appliance plumbing needs a good fit with the sink, cabinets, and existing connections.",
    icon: "wrench",
    asset: "/assets/kitchen.webp",
    prep: [
      "The appliance make and model",
      "A photo of the current under-sink setup",
      "Whether cabinets or countertops are changing",
    ],
    signals: [
      "A dishwasher replacement",
      "A disposal that needs attention",
      "A kitchen layout with new appliances",
    ],
    steps: [
      "Confirm the appliance",
      "Review the connections",
      "Install and check the setup",
    ],
  },
  "sewer-line": {
    family: "repairs",
    title: "Find the problem before the digging.",
    lead: "The right repair depends on the location, condition, and access to the line.",
    icon: "pipe",
    asset: "/assets/camera.webp",
    prep: [
      "Which fixtures are affected",
      "Any inspection video or previous repair details",
      "Where you know the cleanouts are located",
    ],
    signals: [
      "Several fixtures backing up",
      "A sewer issue that keeps returning",
      "A line replacement you need to plan",
    ],
    steps: [
      "Understand the symptoms",
      "Assess the line",
      "Discuss a repair plan",
    ],
  },
  "drain-cleaning": {
    family: "repairs",
    title: "Clear the cause. Keep things moving.",
    lead: "A single slow sink and a whole-house backup need different conversations.",
    icon: "pipe",
    asset: "/assets/camera.webp",
    prep: [
      "Which drains are slow or backing up",
      "When the problem started",
      "Whether the same drain has been cleared before",
    ],
    signals: [
      "A sink that drains slowly",
      "A recurring shower clog",
      "Several fixtures affected together",
    ],
    steps: [
      "Locate the blockage",
      "Choose the right clearing method",
      "Discuss what the condition tells us",
    ],
  },
  "water-line": {
    family: "water",
    title: "Reliable water starts with the line.",
    lead: "A supply-line problem needs attention to access, pipe condition, and the route to the property.",
    icon: "pipe",
    asset: "/assets/repairs-realistic.webp",
    prep: [
      "City service or private water supply",
      "Where the pressure change or water shows up",
      "Any known route, meter, or prior repair details",
    ],
    signals: [
      "A change in water pressure",
      "A service line that needs replacement",
      "Unexplained water around the supply route",
    ],
    steps: [
      "Review the symptoms",
      "Evaluate the service line",
      "Plan the repair or replacement",
    ],
  },
  "leak-detection": {
    family: "repairs",
    title: "Less guessing. A clearer repair plan.",
    lead: "Start with what you can see, then work toward the source of the leak.",
    icon: "drop",
    asset: "/assets/repairs-realistic.webp",
    prep: [
      "Where you see moisture or staining",
      "When it happens and which fixtures are in use",
      "Photos and details of any previous repair",
    ],
    signals: [
      "Moisture without an obvious source",
      "A leak that appears only sometimes",
      "A problem behind a wall or below a floor",
    ],
    steps: [
      "Listen to what changed",
      "Locate the likely source",
      "Explain the repair options",
    ],
  },
  "gas-line": {
    family: "building",
    title: "Plan the connection with care.",
    lead: "Gas piping needs professional planning around the appliance, building, and fuel supply.",
    icon: "flame",
    asset: "/assets/gas.webp",
    prep: [
      "The appliance make and specifications",
      "The proposed location",
      "Existing fuel supply and project plans",
    ],
    signals: [
      "A new gas appliance",
      "A remodel that moves a connection",
      "New construction with gas piping",
    ],
    steps: [
      "Review the appliance requirements",
      "Plan the piping scope",
      "Coordinate professional installation",
    ],
  },
  "septic-systems": {
    family: "building",
    title: "A whole-property plumbing plan.",
    lead: "Rural systems work together. Consider the home, the site, and the existing wastewater system.",
    icon: "pipe",
    asset: "/assets/construction-model.webp",
    prep: [
      "Existing system records, if available",
      "New construction or an existing system",
      "Site access and the problem or project you have in mind",
    ],
    signals: [
      "A new rural home build",
      "A system that needs evaluation",
      "Plumbing work tied to a septic property",
    ],
    steps: [
      "Understand the property",
      "Review the system needs",
      "Discuss the project scope",
    ],
  },
};

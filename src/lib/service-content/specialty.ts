import type { RichServiceContent } from '@/types'

export const specialtyServiceContent: Record<string, RichServiceContent> = {
  emergency: {
    introHeading: 'Emergency Plumbing Across North Idaho',
    introParagraphs: [
      'Burst pipe, sewage backup, or a water heater that just died: we respond fast during business hours to stop the damage and get things back online.',
      'Our trucks are stocked and our guys know what to do. We handle urgent plumbing across North Idaho and show up ready to work.',
      'Emergency service is available Sunday through Friday, 7am to 5pm. We are closed on Saturday.',
    ],
    subServices: [
      {
        title: 'Burst Pipe Repair',
        description: 'Burst pipes cause damage in minutes. We stop the leak, assess the damage, and restore the system. Locating tools help us find and fix the bad section fast.',
      },
      {
        title: 'Water Damage Mitigation',
        description: 'When water is flooding the property, every second counts. We shut off water, extract standing water, and start drying. We coordinate with restoration pros when needed.',
      },
      {
        title: 'Sewer Backup Cleanup',
        description: 'Sewer backups are hazardous. We clear blockages, sanitize affected areas, and restore proper function with strict safety steps.',
      },
      {
        title: 'Gas Leak Detection',
        description: 'Gas leaks are serious. If you smell gas, we respond to locate and repair. Licensed technicians handle emergency shutdown and repair.',
      },
      {
        title: 'No-Hot-Water Emergencies',
        description: 'Losing hot water disrupts the whole household or business. We diagnose and repair fast to get hot water back.',
      },
      {
        title: 'Toilet & Drain Emergencies',
        description: 'Overflowing toilets and fully blocked drains need quick attention. We clear obstructions and restore drainage.',
      },
    ],
    summaryHeading: 'Help When Plumbing Goes Sideways',
    summaryParagraphs: [
      'Plumbing emergencies are stressful and always hit at a bad time. We get there and get it fixed.',
      'Burst pipes, gas leaks, sewer backups, no hot water. We take urgent calls Sunday through Friday, 7am to 5pm across North Idaho. Trucks are stocked and ready.',
    ],
    benefits: [
      {
        title: 'Fast Response',
        description: 'When something breaks, minutes matter. We prioritize emergency calls and arrive ready to assess and limit damage.',
      },
      {
        title: 'Experienced Technicians',
        description: 'Our crew shows up with the knowledge and tools to resolve urgent plumbing problems efficiently.',
      },
      {
        title: 'Damage Prevention',
        description: 'Quick action stops a small mess from becoming a big rebuild. Rapid response protects belongings and structure.',
      },
      {
        title: 'Clear Business Hours',
        description: 'Emergency plumbing is available Sunday through Friday, 7am to 5pm. Closed Saturday, so you always know when we can help.',
      },
      {
        title: 'Full-Service Repairs',
        description: 'From burst pipes to sewer backups, we handle the urgent calls. Tools and experience cover most plumbing emergencies.',
      },
      {
        title: 'Transparent Pricing',
        description: 'No hidden fees on emergency calls. Clear, upfront pricing before work begins.',
      },
    ],
    benefitsHeading: 'What You Can Expect When You Call',
    closingHeading: 'Emergency Help During Business Hours',
    closingParagraphs: [
      'Emergencies happen. When they do, you need someone who answers and shows up. That is what we do.',
      'Call us Sunday through Friday, 7am to 5pm, and we will get it handled.',
    ],
  },
  'radiant-heat': {
    introHeading: 'Warm Floors for North Idaho Winters',
    introParagraphs: [
      'Winter around here is no joke. Radiant heat warms the floor itself so the whole room feels even, without noisy vents pushing dust around.',
      'We install and service radiant systems in Spirit Lake, Coeur d\'Alene, Post Falls, Sandpoint, and Spokane. We know the insulation needs, home styles, and energy codes in this area.',
      'We design hydronic and electric radiant systems that sit quietly in the structure. Slab foundations or multi-level homes, radiant heat makes winter living a lot more comfortable.',
    ],
    subServices: [
      {
        title: 'Hydronic Radiant Heat Installation',
        description: 'Water-based systems circulate heated water through tubing under the floor. Strong efficiency for larger homes with multiple zones.',
      },
      {
        title: 'Electric Radiant Floor Heating',
        description: 'Electric mats work well for spot heating in single rooms, especially under tile or stone. Compact and responsive for bathrooms, kitchens, and remodels.',
      },
      {
        title: 'Radiant Heat in New Construction',
        description: 'Putting radiant in during the design phase gets the best efficiency. We work with contractors and architects so the layout matches the structure.',
      },
      {
        title: 'Retrofit Radiant Heat Installation',
        description: 'We add radiant systems to existing homes without tearing the place apart. We look at your flooring and find the cleanest path forward.',
      },
      {
        title: 'Boiler System Integration',
        description: 'For hydronic systems, we size and install gas or electric boilers that match your heating load. Proper integration keeps every zone reliable.',
      },
      {
        title: 'Thermostat & Zone Control Setup',
        description: 'Zoned radiant systems give you control and savings. We set up thermostats that let you manage temperature room by room.',
      },
    ],
    summaryHeading: 'Quiet, Even Heat From the Floor Up',
    photos: [
      '/images/service-radiant-heat-boiler.webp',
      '/images/service-water-softener-utility-room.webp',
    ],
    summaryParagraphs: [
      'Radiant heating is one of the smartest upgrades for a North Idaho home. Warm floors, no drafts, no blower noise. We have been doing this long enough to get it right.',
      'We install and service hydronic and electric systems that work with your flooring and layout. New build or retrofit, we build the setup around your house.',
    ],
    benefits: [
      {
        title: 'Even Heat Across the Room',
        description: 'Radiant heat warms the surfaces in the space. Floors, walls, and furniture hold and give back warmth. Fewer cold spots between rooms.',
      },
      {
        title: 'Lower Heating Bills',
        description: 'These systems often run at lower temps while still feeling comfortable. Heat goes where you need it, which cuts waste.',
      },
      {
        title: 'Cleaner Indoor Air',
        description: 'No fans or ducts means less dust and pollen blowing around. You also skip the dry blast of forced air.',
      },
      {
        title: 'Silent Operation',
        description: 'No clicking baseboards, blowing vents, or cycling blowers. Just steady warmth.',
      },
      {
        title: 'Little Maintenance',
        description: 'Hydronic and electric radiant systems have no belts, motors, or filters to swap. Installed right, they often run for decades.',
      },
      {
        title: 'Adds Value to the Home',
        description: 'Buyers notice warm floors. Comfort, lower utility costs, and resale appeal all go up.',
      },
    ],
    benefitsHeading: 'What You Get With Radiant Heat',
    closingHeading: 'Radiant Heat Done Right for This Climate',
    closingParagraphs: [
      'Radiant heating is an investment in how your home feels through Idaho winters. Our goal is simple: keep you warm and help you spend less on heat.',
      'We design systems that stand up to snow and subzero temps. Want the same hydronic tech outdoors? Ask about our heated driveway and snow-melt systems.',
    ],
  },
  'heated-driveways': {
    introHeading: 'Never Shovel Snow Again',
    introParagraphs: [
      'The same hydronic radiant systems we put under floors, we put under driveways. Stay ice-free all winter without the salt, the shoveling, or the slip risk.',
      'If you already know us for in-floor heat, heated driveways use the same idea outdoors. Hydronic tubing under the driveway, walkway, or entry pad connects to a boiler or dedicated heat source so snow and ice melt on contact.',
      'North Idaho winters are long. A heated driveway means no more 6am shoveling before work, no ice by the garage, and no rock salt chewing up concrete or landscaping.',
    ],
    subServices: [
      {
        title: 'Residential Heated Driveways',
        description: 'Hydronic tubing under driveways and walkways keeps the entrance clear all winter. Layouts for full slabs or high-traffic paths.',
      },
      {
        title: 'Commercial Snow-Melt Systems',
        description: 'Snow-melt for parking lots, entryways, and loading docks. Built for heavy use and commercial code requirements.',
      },
      {
        title: 'Ice-Prevention Systems',
        description: 'Steep or shaded driveways that ice first get targeted heating where it matters most, often at a lower cost than heating the full slab.',
      },
      {
        title: 'Boiler-Connected Heated Slabs',
        description: 'Tie into an existing hydronic boiler when capacity allows, or install a dedicated heat source sized for outdoor snow melt.',
      },
      {
        title: 'New Construction Integration',
        description: 'Cleanest when tubing goes in with the slab. We coordinate with builders so the system is ready before pour.',
      },
      {
        title: 'Retrofit Installations',
        description: 'Existing driveways can be upgraded in phases. We plan the work to limit disruption while putting in a reliable melt system.',
      },
    ],
    summaryHeading: 'Why Hydronic Heated Driveways',
    photos: [
      '/images/service-radiant-heat-boiler.webp',
      '/images/service-new-construction-plumbing.webp',
    ],
    summaryParagraphs: [
      'Hydronic snow melt runs on hot water, not electricity. For larger areas, operating cost is usually lower than electric mats. No salt or chemical de-icers means better protection for concrete and nearby plants.',
      'Systems can run automated with snow and ice sensors. We build them to the same code standard as our in-floor radiant heat work.',
    ],
    benefits: [
      {
        title: 'Same Crew That Does Radiant Heat',
        description: 'We design and install hydronic systems for North Idaho winters. Heated driveways use the same boiler, zone-control, and tubing know-how.',
      },
      {
        title: 'Lower Operating Cost at Scale',
        description: 'For larger driveways and commercial pads, hydronic systems typically cost less to run than electric mat systems.',
      },
      {
        title: 'Protects Concrete and Landscaping',
        description: 'Skip rock salt and chemical de-icers that damage concrete, metal, and plants around the entry.',
      },
      {
        title: 'Automated Winter Protection',
        description: 'Snow and ice sensors can turn the system on so you are not watching the forecast all night.',
      },
      {
        title: 'Residential and Commercial',
        description: 'From home driveways to parking lots and loading docks, we size systems for real North Idaho winters.',
      },
      {
        title: 'Straight Pricing Up Front',
        description: 'Every property is different: soil, slab size, boiler capacity. We walk the site and give a straight price before work starts.',
      },
    ],
    benefitsHeading: 'Why Preferred Plumbing for Heated Driveways',
    closingHeading: 'Get a Free Heated Driveway Estimate',
    closingParagraphs: [
      'Want the same radiant heat specialists who warm your floors to keep your driveway clear? We will evaluate your site, boiler capacity, and layout options.',
      'Call for a free estimate. We serve Spirit Lake, Coeur d\'Alene, Post Falls, Sandpoint, and communities across North Idaho.',
    ],
  },
  'new-construction': {
    introHeading: 'New Construction Plumbing Done Right From the Start',
    introParagraphs: [
      'Getting plumbing right on a new build saves everyone headaches later. Homes, multi-unit projects, and commercial buildings all need solid rough-in and finish work. We handle new construction plumbing across Spirit Lake, Coeur d\'Alene, Post Falls, Sandpoint, and Spokane.',
      'Our licensed crew works with general contractors, developers, architects, and homeowners. We match the plumbing plan to the layout, the utilities, and how the building will be used. From underground to trim-out, we deliver complete packages. We know Kootenai County soils, winter weather, and permitting.',
    ],
    subServices: [
      {
        title: 'Underground & Rough-In Plumbing',
        description: 'We install under-slab and in-wall piping early in the build. We coordinate with builders to match blueprints and avoid rework. Connections are made to last.',
      },
      {
        title: 'Fixture Planning & Final Installation',
        description: 'We install toilets, sinks, showers, and water heaters per the plans. Fixtures are code-compliant, water-efficient, and tested before closeout.',
      },
      {
        title: 'Water Line Installation & Pressure Testing',
        description: 'We run main water lines and set pressure regulation for residential or commercial demand. Quality pipe and fittings go in the ground and in the walls.',
      },
      {
        title: 'Drain, Waste & Vent (DWV) Systems',
        description: 'Good venting and drainage keep sewer gas out and blockages down. We install complete DWV systems with the right slope and sizing.',
      },
      {
        title: 'Gas Line Installation for Appliances',
        description: 'We run gas lines with certified shut-offs and regulators for furnaces, stoves, water heaters, and more. Everything gets leak tested to code.',
      },
      {
        title: 'Utility Coordination & Final System Testing',
        description: 'We coordinate utility hookups and inspections, then run full-system tests for flow, pressure, and leaks before we call it done.',
      },
    ],
    summaryHeading: 'Plumbing That Passes Inspection and Holds Up',
    photos: [
      '/images/service-new-construction-plumbing.webp',
      '/images/service-new-construction-project.webp',
      '/images/service-residential-commercial-plumbing.webp',
    ],
    summaryParagraphs: [
      'New construction plumbing is one of our main lines of work. We design and install complete systems that match the plans and local code for projects across Spirit Lake and North Idaho.',
      'From single-family homes to multi-unit and commercial jobs, every pipe, valve, and fixture gets installed right. We work with GCs and project managers to hit deadlines and stay on budget.',
    ],
    benefits: [
      {
        title: 'Systems Designed for How You Build',
        description: 'We work with architects and builders so the plumbing fits the blueprint and real use. That cuts pressure drops, drainage problems, and awkward layouts.',
      },
      {
        title: 'Ready for Inspection the First Time',
        description: 'We stay current on plumbing codes. Our installs are built to pass, which keeps your schedule from sliding.',
      },
      {
        title: 'Good Materials, Careful Install',
        description: 'We pick the right pipe for the job, copper where it makes sense, PEX where it fits. Clean installs mean fewer weak spots later.',
      },
      {
        title: 'Efficiency Built Into the Plan',
        description: 'Tankless heaters, pressure-balancing valves, and low-flow fixtures can go in from day one. You get lower water and energy use without giving up performance.',
      },
      {
        title: 'Room to Expand Later',
        description: 'Shut-offs, capped lines, and access points make future appliances or additions easier and cheaper.',
      },
      {
        title: 'Warranty Backing You Can Use',
        description: 'We stand behind products and workmanship. If something comes up, we take care of it.',
      },
    ],
    benefitsHeading: 'Why Builders Keep Calling Us Back',
    closingHeading: 'Plumbing Planned Around Your Build Schedule',
    closingParagraphs: [
      'Solid plumbing is what keeps a new building safe and usable. We get it right the first time across Spirit Lake and North Idaho.',
      'New construction takes more than good pipe work. It takes showing up on time, talking straight, and staying coordinated. That is how we work from planning through final trim.',
    ],
  },
  commercial: {
    introHeading: 'Commercial Plumbing That Keeps Your Building Running',
    introParagraphs: [
      'Commercial plumbing has to keep up with daily use, inspections, and tight schedules. Preferred Plumbing Solutions builds and services systems for businesses in Spirit Lake, Coeur d\'Alene, Post Falls, Sandpoint, and Spokane.',
      'We work on retail centers, warehouses, office buildings, restaurants, and more. Every job gets planned around how your place actually operates. We know North Idaho winters, freeze-ups, and the water quality quirks that hit rural properties.',
      'We stay code-compliant, keep energy waste down, and coordinate with general contractors, property managers, and owners so the job stays on track. From design through final inspection, we handle the plumbing side.',
    ],
    subServices: [
      {
        title: 'Plumbing System Design & Planning',
        description: 'We work with architects and project leads to design systems that pass code, run efficiently, and match how the building will be used. Fixture counts, pipe sizing, demand, and room to grow later all get worked out up front.',
      },
      {
        title: 'Commercial Water Heater Installation',
        description: 'We install high-capacity tanks and tankless units for hotels, medical offices, and other high-demand sites. We look at your real usage and recommend equipment that balances cost with performance.',
      },
      {
        title: 'Backflow Prevention & Testing',
        description: 'Many commercial sites need certified backflow protection. We install and test assemblies to keep potable water safe, and we handle annual testing, certifications, and repairs.',
      },
      {
        title: 'Sewer & Drain Infrastructure',
        description: 'We build and repair drain systems, stormwater lines, and sewer runs. Camera work and solid routing help cut down on clogs and backups later.',
      },
      {
        title: 'Grease Trap Installation & Maintenance',
        description: 'A must for restaurants and food service. We install new traps and keep them on a schedule so you avoid clogs, fines, and messy shutdowns.',
      },
      {
        title: 'Commercial Fixture & Appliance Installations',
        description: 'We install commercial toilets, faucets, urinals, kitchen sinks, dishwashers, and disposals built for heavy use. Every install gets pressure testing, leak checks, and proper sealing.',
      },
    ],
    summaryHeading: 'Plumbing Built for Busy Commercial Spaces',
    photos: [
      '/images/service-commercial-plumbing-project.webp',
      '/images/gallery/commercial-plumbing-project-1.webp',
      '/images/service-residential-commercial-plumbing.webp',
    ],
    summaryParagraphs: [
      'We build and service commercial plumbing across North Idaho. Offices, retail, restaurants, and industrial buildings are all in our wheelhouse.',
      'We work with contractors, property managers, and developers to hit local codes and keep jobs moving. New construction or tenant improvements, every job gets our full attention.',
    ],
    benefits: [
      {
        title: 'Experience With Larger Systems',
        description: 'Commercial work is a different animal than residential. Multi-floor piping, high-capacity lines, and industrial fixtures are part of what we do every week, and we keep it all up to code.',
      },
      {
        title: 'Less Downtime for Your Business',
        description: 'A plumbing failure can shut you down fast. We offer quick repairs and emergency help during business hours so you can get back to work.',
      },
      {
        title: 'Preventive Maintenance Plans',
        description: 'Routine checks catch wear, leaks, and clogs early. Scheduled visits help your system last longer and spare you big repair bills later.',
      },
      {
        title: 'Health and Safety Code Compliance',
        description: 'We keep your plumbing in line with local and federal codes. That lowers the risk of fines, shutdowns, or liability problems.',
      },
      {
        title: 'Solid Diagnostics Before We Dig In',
        description: 'Hydro-jetting, video pipe inspections, and leak detection help us find the real problem first so the fix lasts.',
      },
      {
        title: 'Industry-Specific Setups',
        description: 'Restaurants need grease traps. Medical sites need clean water systems. We build the job around your industry, not a generic checklist.',
      },
    ],
    benefitsHeading: 'Why Businesses Call Us',
    closingHeading: 'Commercial Plumbing Without the Runaround',
    closingParagraphs: [
      'Commercial properties in Spirit Lake need plumbing that handles constant use and strict codes. That is what we deliver. No shortcuts, no surprises.',
      'We built our name in Spirit Lake and nearby towns by showing up, charging fair prices, and staying local. No corporate phone tree, just good work.',
      'We take time to understand how your building runs before we build or fix the system. Call us about your next commercial job.',
    ],
  },
  'tankless-water-heaters': {
    introHeading: 'Endless Hot Water, Smaller Footprint',
    introParagraphs: [
      'Tankless water heaters heat water on demand instead of storing it. You stop running out mid-shower, and you free up the space a bulky tank used to take.',
      'A tankless (on-demand) unit only fires when you open a hot tap, rather than keeping 40 to 50 gallons hot all day. That means lower energy bills, a longer lifespan than most tanks, and hot water that keeps coming.',
      'We install, repair, and replace tankless systems across North Idaho, and we help size the right unit for your household or business.',
    ],
    subServices: [
      {
        title: 'New Tankless Installation',
        description: 'We size and install gas or electric tankless units with proper venting, gas line or electrical capacity, and code-compliant connections.',
      },
      {
        title: 'Tankless Repair & Troubleshooting',
        description: 'Error codes, weak flow, cold water sandwiches, and ignition issues: we diagnose and repair on-demand systems from major brands.',
      },
      {
        title: 'Tank-to-Tankless Conversion',
        description: 'Replacing an old tank with tankless often means venting and gas line upgrades. We handle the full conversion so it is one call, not three contractors.',
      },
      {
        title: 'Gas Tankless Systems',
        description: 'High-flow gas units for whole-home hot water. We confirm gas supply, combustion air, and venting before install.',
      },
      {
        title: 'Electric Tankless Units',
        description: 'Point-of-use or smaller-home electric tankless when gas is not available. We verify panel capacity and circuit requirements.',
      },
      {
        title: 'Descaling & Maintenance',
        description: 'Hard water in North Idaho means tankless units need periodic flushing. We offer descaling to keep efficiency and lifespan high.',
      },
    ],
    summaryHeading: 'Tankless vs Tank: Quick Comparison',
    photos: [
      '/images/service-water-heater-installation.webp',
      '/images/service-water-softener-utility-room.webp',
    ],
    summaryParagraphs: [
      'Tank systems cost less upfront but can run out of hot water and typically last about 10 to 15 years. Tankless costs more upfront, delivers ongoing hot water, often lasts around 20 years, and uses less energy over time.',
      'We size tank and tankless systems based on your actual usage, not a sales quota.',
    ],
    benefits: [
      {
        title: 'Endless Hot Water',
        description: 'Heat on demand means no waiting for a tank to recover. Sized correctly, multiple fixtures can run without the cold shower surprise.',
      },
      {
        title: 'Lower Energy Use Over Time',
        description: 'You are not paying to keep 40 to 50 gallons hot 24 hours a day. That adds up on North Idaho utility bills.',
      },
      {
        title: 'Longer Lifespan',
        description: 'Well-maintained tankless units often outlast traditional tanks by several years.',
      },
      {
        title: 'Space Savings',
        description: 'Wall-mounted units free up closet or garage space a bulky tank used to occupy.',
      },
      {
        title: 'One-Call Install',
        description: 'We handle the plumbing plus the gas line or electrical work tankless units often need.',
      },
      {
        title: 'Honest Sizing Advice',
        description: 'We look at household size, water usage, and existing setup, then give a straight answer on whether tankless fits.',
      },
    ],
    benefitsHeading: 'Why Choose Preferred Plumbing for Tankless',
    closingHeading: 'Not Sure If Tankless Is Right for You?',
    closingParagraphs: [
      'We will look at household size, water usage, and existing setup, then give you a straight answer and a fair price.',
      'Prefer a traditional tank? See our water heater services. Need a gas supply upgrade for tankless? We handle gas line installation as part of the same project.',
    ],
  }
}

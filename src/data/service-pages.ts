// Per-service page content (hero copy, intro, feature cards, FAQs, related
// services) and the curated project photos for each service page.
// Photos are listed by filename stem and resolved against src/data/gallery.ts.
export type ServicePageContent = {
  title: string;
  lead: string;
  introHeading: string;
  intro: string[];
  featuresHeading: string;
  features: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
  /** Real project photos relevant to this service. Each appears once. */
  photos: string[];
};

export const servicePages: Record<string, ServicePageContent> = {
  "bathroom-remodels": {
    "title": "Bathroom Remodels",
    "lead": "New fixtures or total re-piping. We handle showers, tubs, vanities, toilets, and custom plumbing features. We build bathrooms that work and look good.",
    "introHeading": "Bathroom Remodels Built Around How You Live",
    "intro": [
      "A bathroom remodel can make the morning routine a lot easier. We handle complete bathroom remodel plumbing throughout Spirit Lake, Rathdrum, Hayden, Post Falls, and across North Idaho.",
      "We understand what works in North Idaho homes: the climate, aging infrastructure in older houses, and what people want in a modern bath. Powder room update or full master suite, we handle it.",
      "We work with homeowners, designers, and contractors so the new bathroom looks good and functions well. Permits and inspections included."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Complete Bathroom Renovation",
        "text": "We gut outdated baths and rebuild from the ground up. Structural updates, waterproofing, plumbing, and a layout that fits how you use the space."
      },
      {
        "title": "Shower and Bathtub Conversions",
        "text": "Old tub to walk-in shower, or a freestanding soaking tub. Functional upgrades that improve style and accessibility."
      },
      {
        "title": "Custom Vanity and Cabinet Installation",
        "text": "From rustic wood vanities to clean modern cabinets, we install storage with proper plumbing behind it."
      },
      {
        "title": "Fixture Upgrades",
        "text": "Efficient faucets, showerheads, toilets, and lighting. We help pick fixtures that match style and performance."
      },
      {
        "title": "Plumbing and Drain Reconfiguration",
        "text": "Older homes often have inefficient plumbing. We rework water lines and drains to match modern use and improve reliability."
      },
      {
        "title": "Tile and Flooring Installation",
        "text": "Slip-resistant tile, natural stone, heated floors. Proper waterproofing and substrate prep for results that last."
      }
    ],
    "faqs": [
      {
        "q": "How long does a full bathroom plumbing remodel take?",
        "a": "Most take 3 to 7 days. Simple updates may be 1 to 2 days. Complete re-piping can take up to a week."
      },
      {
        "q": "Can you convert a tub to a walk-in shower?",
        "a": "Yes. We cap existing supply lines, install a new shower valve and drain, and prep for tiling."
      },
      {
        "q": "Do you install heated bathroom floors?",
        "a": "Yes. Electric and hydronic radiant floor heating. Adds warmth and efficiency, especially in Idaho winters."
      },
      {
        "q": "Can you relocate a toilet or vanity in a bathroom remodel?",
        "a": "Yes. We move them by reconfiguring waste, vent, and supply lines. Everything meets code."
      },
      {
        "q": "What plumbing upgrades add the most value to a bathroom?",
        "a": "Walk-in showers, dual-flush toilets, touchless faucets, heated floors, and soaking tubs."
      },
      {
        "q": "Do I need permits for a bathroom remodel?",
        "a": "Yes. We handle all permits and inspections to keep your remodel code-compliant."
      }
    ],
    "related": [
      "remodels",
      "kitchen-remodels",
      "toilets-faucets"
    ],
    "photos": [
      "modern-bathroom-fixtures",
      "shower-tub-installation",
      "toilets-faucets-trim"
    ],
  },
  "bathtubs-showers": {
    "title": "Bathtubs & Showers",
    "lead": "We install bathtubs and showers that work well and look good. Walk-in tubs, tiled showers, and custom designs. We focus on water pressure, comfort, and durability.",
    "introHeading": "Bathtubs and Showers Built for Daily Use",
    "intro": [
      "A new tub or shower can change how you use the bathroom. We install them in Spirit Lake, Coeur d'Alene, Post Falls, and Sandpoint. Replacement or full renovation, we do work that fits North Idaho homes.",
      "We know older homes around here, and we know new builds. Every tub and shower gets matched to your layout, water pressure, and existing plumbing.",
      "Cold winters and hard water demand materials that hold up. Our installs are built to last and keep performing."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Full Bathtub Installations",
        "text": "New tub or replacement, we handle the full install. We assess plumbing and layout, then level, seal, and finish the job correctly."
      },
      {
        "title": "Custom Shower Builds",
        "text": "We design and build custom showers with glass enclosures, tile walls, bench seating, and more. Details work with your existing plumbing."
      },
      {
        "title": "Tub-to-Shower Conversions",
        "text": "We convert bathtubs to walk-in showers with proper drainage and water containment. From demo to tile, we manage each stage."
      },
      {
        "title": "Shower Fixture Upgrades",
        "text": "Rainfall heads, handheld sprayers, and water-efficient models. We upgrade fixtures for better daily use while matching local water pressure."
      },
      {
        "title": "Leak Repair & Waterproofing",
        "text": "We find and fix leaks at the source, reinforce waterproof barriers, and make sure the install stands up to humidity."
      },
      {
        "title": "Clawfoot & Freestanding Tub Installations",
        "text": "We install freestanding and vintage-style tubs with accurate leveling and solid plumbing connections. Looks and function both matter."
      }
    ],
    "faqs": [
      {
        "q": "How long does it take to install a new bathtub or shower?",
        "a": "Most take 1 to 3 days. We plan each step ahead to minimize disruption."
      },
      {
        "q": "Can I convert my tub into a shower without redoing the entire bathroom?",
        "a": "Yes. We modify the plumbing and use materials that match your existing finishes. No full remodel needed."
      },
      {
        "q": "Do I need permits for bathtub or shower installations in Spirit Lake?",
        "a": "In most cases, yes. We handle the permits and make sure everything passes inspection."
      },
      {
        "q": "What materials do you recommend for shower walls?",
        "a": "Ceramic tile, acrylic panels, or natural stone. They're durable, resist mold, and are easy to clean."
      },
      {
        "q": "How can I prevent mold and mildew in my shower?",
        "a": "Good ventilation and routine cleaning. We also use waterproof sealants during installation to keep moisture out."
      },
      {
        "q": "Are walk-in tubs a good choice for seniors?",
        "a": "Yes. They have built-in seating, grab bars, and non-slip surfaces. Great for aging in place safely."
      }
    ],
    "related": [
      "remodels",
      "kitchen-remodels",
      "bathroom-remodels"
    ],
    "photos": [
      "shower-tub-installation",
      "modern-bathroom-fixtures",
      "toilets-faucets-trim"
    ],
  },
  "commercial": {
    "title": "Commercial Plumbing",
    "lead": "We handle plumbing for retail, industrial, and office properties. High-demand systems built to code and built to last. We manage every stage, from new builds to renovations.",
    "introHeading": "Commercial Plumbing That Keeps Your Building Running",
    "intro": [
      "Commercial plumbing has to keep up with daily use, inspections, and tight schedules. Preferred Plumbing Solutions builds and services systems for businesses in Spirit Lake, Coeur d'Alene, Post Falls, Sandpoint, and Spokane.",
      "We work on retail centers, warehouses, office buildings, restaurants, and more. Every job gets planned around how your place actually operates. We know North Idaho winters, freeze-ups, and the water quality quirks that hit rural properties.",
      "We stay code-compliant, keep energy waste down, and coordinate with general contractors, property managers, and owners so the job stays on track. From design through final inspection, we handle the plumbing side."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Plumbing System Design & Planning",
        "text": "We work with architects and project leads to design systems that pass code, run efficiently, and match how the building will be used. Fixture counts, pipe sizing, demand, and room to grow later all get worked out up front."
      },
      {
        "title": "Commercial Water Heater Installation",
        "text": "We install high-capacity tanks and tankless units for hotels, medical offices, and other high-demand sites. We look at your real usage and recommend equipment that balances cost with performance."
      },
      {
        "title": "Backflow Prevention & Testing",
        "text": "Many commercial sites need certified backflow protection. We install and test assemblies to keep potable water safe, and we handle annual testing, certifications, and repairs."
      },
      {
        "title": "Sewer & Drain Infrastructure",
        "text": "We build and repair drain systems, stormwater lines, and sewer runs. Camera work and solid routing help cut down on clogs and backups later."
      },
      {
        "title": "Grease Trap Installation & Maintenance",
        "text": "A must for restaurants and food service. We install new traps and keep them on a schedule so you avoid clogs, fines, and messy shutdowns."
      },
      {
        "title": "Commercial Fixture & Appliance Installations",
        "text": "We install commercial toilets, faucets, urinals, kitchen sinks, dishwashers, and disposals built for heavy use. Every install gets pressure testing, leak checks, and proper sealing."
      }
    ],
    "faqs": [
      {
        "q": "What types of commercial buildings do you service?",
        "a": "Office buildings, restaurants, warehouses, medical centers, retail stores, schools, and mixed-use developments. Each gets a system built for its specific needs."
      },
      {
        "q": "Do you handle plumbing for new commercial builds?",
        "a": "Yes. We do full commercial systems for new construction. We coordinate with builders to hit code and keep the project on schedule."
      },
      {
        "q": "Are your commercial plumbing systems energy efficient?",
        "a": "Yes. We use high-efficiency water heaters, low-flow fixtures, and smart layouts to cut water use and operating costs."
      },
      {
        "q": "Can you install ADA-compliant plumbing fixtures?",
        "a": "Yes. We install ADA-compliant sinks and toilets that meet all clearance and height requirements. Your property will be fully accessible."
      },
      {
        "q": "How soon can you start on a commercial project?",
        "a": "It depends on the scope. We give you a clear timeline and start as soon as permits and plans are finalized."
      },
      {
        "q": "What areas around Spirit Lake do you cover?",
        "a": "We serve commercial clients in Spirit Lake, Athol, Rathdrum, Blanchard, and Sandpoint. Also rural areas in Kootenai and Bonner Counties."
      }
    ],
    "related": [
      "new-construction",
      "gas-line",
      "septic-systems"
    ],
    "photos": [
      "commercial-plumbing-project",
      "new-construction-rough-in",
      "under-slab-plumbing"
    ],
  },
  "dishwashers": {
    "title": "Dishwashers & Disposals",
    "lead": "We install dishwashers and garbage disposals the right way. Leak-free connections, proper venting, and compatibility with all major brands.",
    "introHeading": "Dishwasher and Disposal Installs Without the Leaks",
    "intro": [
      "A dishwasher or disposal installed wrong leads to leaks, drainage problems, and wasted weekends. We handle these jobs every week in Spirit Lake, Coeur d'Alene, Post Falls, and Sandpoint.",
      "Hard water and seasonal temperature swings take a toll on kitchen plumbing around here. We know the local codes and water conditions, and we install for the long haul.",
      "From drainage fixes to new high-efficiency units, we handle it. Solid connections, no guesswork."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Dishwasher Installation",
        "text": "New or replacement, we handle plumbing, drainage, and electrical coordination. Watertight connections get tested after install."
      },
      {
        "title": "Garbage Disposal Installation",
        "text": "Adding a disposal or replacing an old one, we handle electrical hookups, drain alignment, and leak-proof sealing. Safety switches installed when needed."
      },
      {
        "title": "Appliance Replacements",
        "text": "If a unit is leaking or failing, we remove it, update plumbing as needed, and install the new one. Connections get pressure-tested, and the old unit gets disposed of properly."
      },
      {
        "title": "Leak Detection & Repair",
        "text": "Small leaks cause big problems. We find and fix issues in water lines, drainpipes, and appliance fittings to keep the kitchen dry."
      },
      {
        "title": "Clog & Jam Removal",
        "text": "Disposals jam from food debris and foreign objects. We clear obstructions safely and check for deeper drainage problems."
      },
      {
        "title": "Dishwasher Drainage Solutions",
        "text": "Dishwasher will not drain? We troubleshoot from air gaps to sink traps, clear blockages, and replace faulty check valves."
      }
    ],
    "faqs": [
      {
        "q": "How long does it take to install a dishwasher or garbage disposal?",
        "a": "1 to 2 hours if existing connections are in place. Complex setups take a bit longer."
      },
      {
        "q": "Can I replace a dishwasher myself, or should I hire a plumber?",
        "a": "You can do it yourself, but incorrect hookups cause leaks and void warranties. We do it right the first time."
      },
      {
        "q": "What causes a garbage disposal to jam or stop working?",
        "a": "Fibrous foods, bones, grease, or foreign objects. We clear the jam and check for damage."
      },
      {
        "q": "Why does my dishwasher smell bad or not drain properly?",
        "a": "Clogged filters or blocked drain lines. We clear the obstruction and make sure the drainage is set up correctly."
      },
      {
        "q": "Will hard water affect my dishwasher or disposal performance?",
        "a": "Yes. Scale builds up in spray arms, valves, and motors. A water softener helps protect your appliances."
      },
      {
        "q": "Do I need a new air gap with a dishwasher installation?",
        "a": "Usually yes. It keeps dirty water from backing into the dishwasher. We install or connect one as needed."
      }
    ],
    "related": [
      "remodels",
      "kitchen-remodels",
      "bathroom-remodels"
    ],
    "photos": [],
  },
  "drain-cleaning": {
    "title": "Drain Cleaning",
    "lead": "We clear clogged sinks, showers, toilets, and main drains. Camera inspection and hydro jetting when a cable will not hold. Fast, clean work across North Idaho.",
    "introHeading": "Drain Cleaning That Clears the Cause, Not Just the Symptom",
    "intro": [
      "A slow shower or a kitchen sink that backs up is a plumbing problem, not a plunger contest. We clear clogged drains in Spirit Lake, Coeur d'Alene, Post Falls, Hayden, Rathdrum, and Sandpoint — and we check whether the blockage is in the fixture, the branch, or the main.",
      "North Idaho water is hard. Grease, hair, soap scum, and mineral scale stack up faster here than a lot of homeowners expect. Wipes and roots make it worse. A cable can poke a hole through a clog. Hydro jetting and a camera tell you if the pipe is actually clear, or if the main is failing.",
      "We do this work during business hours, Sunday through Friday. If sewage is coming up a floor drain or several fixtures are backing up at once, treat it as an emergency and call."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Kitchen and Bath Drain Cleaning",
        "text": "Sinks, showers, tubs, and laundry stands. We clear the trap and the line so water leaves the fixture instead of sitting in it."
      },
      {
        "title": "Toilet and Floor Drain Clearing",
        "text": "A toilet that will not go down, or a basement floor drain that gurgles, often means a blockage farther down the line. We find it instead of guessing."
      },
      {
        "title": "Main Line Drain Cleaning",
        "text": "When more than one fixture is slow, the clog is often in the building drain or the sewer. We clean the main and camera it when the backup keeps returning."
      },
      {
        "title": "Hydro Jetting",
        "text": "High-pressure water strips grease, scale, and debris off the pipe wall. Use it when a cable only buys you a week."
      },
      {
        "title": "Camera Drain Inspection",
        "text": "A camera shows roots, bellies, broken pipe, and grease layers. That is how we decide between cleaning and sewer repair."
      },
      {
        "title": "Preventive Drain Maintenance",
        "text": "Restaurants, rentals, and older homes with a backup history benefit from scheduled cleaning before the next overflow."
      }
    ],
    "faqs": [
      {
        "q": "Do you unclog drains in Spirit Lake and nearby towns?",
        "a": "Yes. We clear kitchen, bath, laundry, and main drains in Spirit Lake, Coeur d'Alene, Post Falls, Hayden, Rathdrum, Sandpoint, and surrounding North Idaho communities."
      },
      {
        "q": "When is a clogged drain an emergency?",
        "a": "Call the same day if multiple fixtures back up, sewage is coming up a floor drain, or water is overflowing. A single slow sink can usually wait for a scheduled visit during business hours."
      },
      {
        "q": "What is the difference between drain cleaning and sewer replacement?",
        "a": "Drain cleaning clears a blockage in a fixture or branch line. Sewer replacement is for a damaged or collapsed main. We camera the line so you are not paying for replacement when a cleaning would fix it — or the other way around."
      },
      {
        "q": "Do you hydro jet drains?",
        "a": "Yes. Hydro jetting uses high-pressure water to cut grease, scale, and debris off the pipe wall. It is the better choice when a cable only pokes a hole through a clog that keeps coming back."
      },
      {
        "q": "Why does my drain keep backing up?",
        "a": "Recurring backups usually mean grease, hair, wipes, roots, or a belly in the line. We find the cause instead of sending you home with a temporary clear."
      },
      {
        "q": "How much does drain cleaning cost in North Idaho?",
        "a": "Most residential cleanings fall in a few hundred dollars depending on access, how far the clog sits, and whether we need a camera or jetter. We explain the price before work starts."
      }
    ],
    "related": [
      "emergency",
      "sewer-line",
      "leak-detection"
    ],
    "photos": [
      "under-slab-plumbing",
      "new-construction-gas-rough-in"
    ],
  },
  "emergency": {
    "title": "Emergency Plumbing",
    "lead": "Fast emergency plumbing to stop damage and get your system back online. Available during business hours (Sunday through Friday, 7am to 5pm) across North Idaho.",
    "introHeading": "Emergency Plumbing Across North Idaho",
    "intro": [
      "Burst pipe, sewage backup, or a water heater that just died: we respond fast during business hours to stop the damage and get things back online.",
      "Our trucks are stocked and our guys know what to do. We handle urgent plumbing in Spirit Lake, Rathdrum, Hayden, Post Falls, and Coeur d'Alene, and show up ready to work.",
      "Emergency service is available Sunday through Friday, 7am to 5pm. We are closed on Saturday."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Burst Pipe Repair",
        "text": "Burst pipes cause damage in minutes. We stop the leak, assess the damage, and restore the system. Locating tools help us find and fix the bad section fast."
      },
      {
        "title": "Water Damage Mitigation",
        "text": "When water is flooding the property, every second counts. We shut off water, extract standing water, and start drying. We coordinate with restoration pros when needed."
      },
      {
        "title": "Sewer Backup Cleanup",
        "text": "Sewer backups are hazardous. We clear blockages, sanitize affected areas, and restore proper function with strict safety steps."
      },
      {
        "title": "Gas Leak Detection",
        "text": "Gas leaks are serious. If you smell gas, we respond to locate and repair. Licensed technicians handle emergency shutdown and repair."
      },
      {
        "title": "No-Hot-Water Emergencies",
        "text": "Losing hot water disrupts the whole household or business. We diagnose and repair fast to get hot water back."
      },
      {
        "title": "Toilet & Drain Emergencies",
        "text": "Overflowing toilets and fully blocked drains need quick attention. We clear obstructions and restore drainage."
      }
    ],
    "faqs": [
      {
        "q": "How quickly can you respond to a plumbing emergency?",
        "a": "We aim to arrive within the hour for urgent calls in the Spirit Lake area during business hours. Our trucks are stocked for most emergencies."
      },
      {
        "q": "What constitutes a plumbing emergency?",
        "a": "Burst pipes, gas leaks, sewage backups, no hot water, overflowing toilets, and major leaks. Call us right away."
      },
      {
        "q": "Do you charge extra for emergency calls?",
        "a": "Emergency rates are higher than standard appointments. We give you the price upfront before any work starts."
      },
      {
        "q": "Can you handle emergency gas line repairs?",
        "a": "Yes. Our licensed techs are trained in gas line shutdown and repair. If you smell gas, leave the area and call us."
      },
      {
        "q": "What should I do while waiting for the emergency plumber?",
        "a": "Shut off the main water valve if you can. Move valuables away from the area. Our dispatch team can walk you through it."
      },
      {
        "q": "What are your emergency service hours?",
        "a": "We handle emergency plumbing Sunday through Friday, 7am to 5pm. We are closed on Saturday."
      }
    ],
    "related": [
      "sewer-line",
      "drain-cleaning",
      "leak-detection"
    ],
    "photos": [
      "water-heater-replacement",
      "well-pump-system"
    ],
  },
  "gas-line": {
    "title": "Gas Line Services",
    "lead": "Licensed gas line installation, repair, and appliance hookups for homes and businesses in North Idaho. Safe, code-compliant natural gas work.",
    "introHeading": "Gas Line Work Done Safe and to Code",
    "intro": [
      "Natural gas work is not a DIY job. New appliance hookups, upgrades for a tankless heater, or leak repairs all need licensed install and proper testing.",
      "We install, repair, and upgrade gas lines for homes and commercial properties across North Idaho. Rough-in on new construction, retrofit runs for ranges, dryers, fireplaces, boilers, and outdoor gear: we handle the full job.",
      "If you smell gas, leave the area and call us from somewhere safe. We respond during business hours to shut down, locate, and repair leaks the right way."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Gas Appliance Hookups",
        "text": "Ranges, dryers, fireplaces, water heaters, and outdoor appliances: we size the line, make the connection, and pressure-test before service is restored."
      },
      {
        "title": "New Gas Line Installation",
        "text": "New runs for remodels, additions, and equipment upgrades. We plan routing for safety, access, and code clearance."
      },
      {
        "title": "Gas Leak Detection & Repair",
        "text": "Suspected leaks get priority. We locate the issue, isolate the section, complete the repair, and verify with proper testing."
      },
      {
        "title": "Gas System Upgrades",
        "text": "Older or undersized lines often cannot support tankless heaters or high-BTU appliances. We upgrade capacity so your equipment can run as designed."
      },
      {
        "title": "New Construction Gas Rough-In",
        "text": "Full gas rough-in for new homes and commercial builds, coordinated with your builder and ready for inspection."
      },
      {
        "title": "Boiler & Radiant Support",
        "text": "Hydronic boilers and radiant systems need a solid gas supply. We size and install lines that match your heating load."
      }
    ],
    "faqs": [
      {
        "q": "What should I do if I smell gas?",
        "a": "Leave the area immediately, avoid using lights or electronics, and call us (and the gas utility if needed) from a safe location. Do not try to find the leak yourself."
      },
      {
        "q": "Can you run a new gas line for a range, dryer, or fireplace?",
        "a": "Yes. We size and install new gas lines for appliances, fireplaces, and outdoor equipment, then pressure-test everything before it goes into service."
      },
      {
        "q": "Do tankless water heaters need a gas line upgrade?",
        "a": "Often yes. Many tankless units need a larger gas supply than an old tank heater. We evaluate capacity and upgrade the line when required."
      },
      {
        "q": "Are your gas installations code compliant?",
        "a": "Yes. We install to current Idaho plumbing and fuel-gas codes and handle required inspections."
      },
      {
        "q": "Can you repair an existing gas leak?",
        "a": "Yes. Our licensed technicians locate the leak, shut down the affected section safely, and complete the repair with proper testing before restoring service."
      },
      {
        "q": "Do you install gas lines for new construction?",
        "a": "Yes. We rough in gas systems for new homes and commercial builds and coordinate with your builder on layout and inspection timing."
      }
    ],
    "related": [
      "new-construction",
      "commercial",
      "septic-systems"
    ],
    "photos": [
      "gas-line-installation-1",
      "gas-line-installation-2",
      "gas-line-installation-4"
    ],
  },
  "heated-driveways": {
    "title": "Heated Driveways & Snow-Melt",
    "lead": "Hydronic heated driveways and snow-melt systems that keep North Idaho driveways ice-free. The same radiant expertise we use under floors, installed under your driveway.",
    "introHeading": "Never Shovel Snow Again",
    "intro": [
      "The same hydronic radiant systems we put under floors, we put under driveways. Stay ice-free all winter without the salt, the shoveling, or the slip risk.",
      "If you already know us for in-floor heat, heated driveways use the same idea outdoors. Hydronic tubing under the driveway, walkway, or entry pad connects to a boiler or dedicated heat source so snow and ice melt on contact.",
      "We install heated driveways in Spirit Lake, Coeur d'Alene, Post Falls, Moscow, Hayden, and Rathdrum. North Idaho winters are long. A heated driveway means no more 6am shoveling before work, no ice by the garage, and no rock salt chewing up concrete or landscaping."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Residential Heated Driveways",
        "text": "Hydronic tubing under driveways and walkways keeps the entrance clear all winter. Layouts for full slabs or high-traffic paths."
      },
      {
        "title": "Commercial Snow-Melt Systems",
        "text": "Snow-melt for parking lots, entryways, and loading docks. Built for heavy use and commercial code requirements."
      },
      {
        "title": "Ice-Prevention Systems",
        "text": "Steep or shaded driveways that ice first get targeted heating where it matters most, often at a lower cost than heating the full slab."
      },
      {
        "title": "Boiler-Connected Heated Slabs",
        "text": "Tie into an existing hydronic boiler when capacity allows, or install a dedicated heat source sized for outdoor snow melt."
      },
      {
        "title": "New Construction Integration",
        "text": "Cleanest when tubing goes in with the slab. We coordinate with builders so the system is ready before pour."
      },
      {
        "title": "Retrofit Installations",
        "text": "Existing driveways can be upgraded in phases. We plan the work to limit disruption while putting in a reliable melt system."
      }
    ],
    "faqs": [
      {
        "q": "Does a heated driveway work with my existing boiler?",
        "a": "In many cases, yes. We evaluate your existing system's capacity during the estimate and recommend the right setup."
      },
      {
        "q": "How much of my driveway needs heating?",
        "a": "Most homeowners heat the main path and entry point rather than the full driveway, which keeps cost down while solving the ice problem."
      },
      {
        "q": "Does this work for commercial properties?",
        "a": "Yes. We install snow-melt systems for parking lots, entryways, and loading docks."
      },
      {
        "q": "What's the installation timeline?",
        "a": "New construction is easiest to integrate during the build. Retrofits are done in phases to minimize disruption."
      },
      {
        "q": "Is hydronic better than electric mats for driveways?",
        "a": "For larger areas, hydronic usually costs less to operate. Electric mats can work for small walkways. We help you choose based on size and use."
      },
      {
        "q": "Will a heated driveway damage my concrete?",
        "a": "Properly designed systems protect concrete by reducing freeze-thaw cycles and eliminating rock salt that eats into slabs and landscaping."
      }
    ],
    "related": [
      "radiant-heat"
    ],
    "photos": [
      "boiler-radiant-heat",
      "boiler-mechanical-room",
      "site-excavation"
    ],
  },
  "kitchen-remodels": {
    "title": "Kitchen Remodels",
    "lead": "New plumbing layouts, appliance hookups, and water-efficient fixtures for your kitchen. We work with your remodel plans for a setup that functions well and lasts.",
    "introHeading": "A Kitchen That Works as Hard as You Do",
    "intro": [
      "A kitchen remodel is one of the best investments you can make in a home. We handle the plumbing side in Spirit Lake, Rathdrum, Hayden, Post Falls, and across the region.",
      "New cabinets and counters only work if the plumbing is right. Layout, appliance hookups, and drain lines all have to fit. That is the part we own."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Full Kitchen Renovation",
        "text": "We rebuild the plumbing for a full kitchen redo. Demolition through final connections, coordinated with the rest of the remodel crew."
      },
      {
        "title": "Custom Cabinet Installation",
        "text": "We work around handcrafted or stock cabinetry so sinks, disposals, and supply lines land where they should. Storage layout and plumbing have to agree."
      },
      {
        "title": "Countertop Replacement",
        "text": "Quartz, granite, butcher block: we help time sink cutouts and faucet installs so the plumbing lines up with the new tops."
      },
      {
        "title": "Plumbing Fixture Upgrades",
        "text": "We replace outdated sinks, faucets, and disposals with efficient, code-compliant fixtures. Water line moves for islands and appliance hookups included."
      },
      {
        "title": "Backsplash and Tile Work",
        "text": "We coordinate waterproofing and fixture placement behind sinks and counters so tile work and plumbing finish clean."
      },
      {
        "title": "Appliance Integration",
        "text": "We connect dishwashers, refrigerators, and gas ranges with proper plumbing, gas, and drain lines for a clean layout."
      }
    ],
    "faqs": [
      {
        "q": "How long does a kitchen plumbing remodel take?",
        "a": "Most take 2 to 5 days. A simple swap may be one day. Full remodels with gas line work can take up to a week."
      },
      {
        "q": "Can you move my sink to a new location?",
        "a": "Yes. We reconfigure supply and drain lines for your new layout. Proper slope, venting, and code are part of the job."
      },
      {
        "q": "Do you install pot fillers and instant hot water dispensers?",
        "a": "Yes. We install pot fillers over the stove and instant hot dispensers at the sink with proper shutoff valves."
      },
      {
        "q": "What plumbing should I plan for a kitchen island?",
        "a": "Islands with sinks or dishwashers need supply and drain lines under the floor. We coordinate with your contractor to run them before the subfloor is finished."
      },
      {
        "q": "Can you install a farmhouse or apron sink?",
        "a": "Yes. We install farmhouse, undermount, and apron sinks with watertight drain connections."
      },
      {
        "q": "Do I need a permit for kitchen plumbing work?",
        "a": "Most kitchen plumbing modifications require permits. We handle all permitting and coordinate with inspectors."
      }
    ],
    "related": [
      "remodels",
      "bathroom-remodels",
      "toilets-faucets"
    ],
    "photos": [],
  },
  "leak-detection": {
    "title": "Leak Detection & Repair",
    "lead": "We find hidden plumbing leaks before they wreck floors, crawlspaces, and foundations. Electronic detection, pressure testing, and a clear repair plan — not exploratory demolition.",
    "introHeading": "Find the Leak Before It Finds the Floor",
    "intro": [
      "Hidden plumbing leaks rarely announce themselves with a geyser. They show up as a water bill that jumped, a meter that spins when everything is off, warm spots in a slab, or damp insulation in a crawlspace. We locate those leaks in Spirit Lake and across North Idaho before the repair turns into a remodel.",
      "Hard water, freeze-thaw, and mixed pipe materials (copper, galvanized, PEX, poly) are common here. A pinhole in a supply line or a failed fitting under a tub can run for weeks. Guessing which wall to open is expensive. Detection first is cheaper.",
      "If water is actively spraying or a ceiling is failing, shut the main off and call. Slow, unexplained usage can wait for a scheduled visit Sunday through Friday, 7am to 5pm."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Hidden Supply Leak Locating",
        "text": "We isolate sections, pressure-test, and listen so we can mark the leak instead of opening three rooms to find one fitting."
      },
      {
        "title": "Slab and Crawlspace Detection",
        "text": "North Idaho homes sit on slabs, crawlspaces, and mixed foundations. Each needs a different approach to find water that never reaches a visible fixture."
      },
      {
        "title": "High Water Bill Diagnosis",
        "text": "A sudden spike is often a leak, a running toilet, or an underground service line. We check fixtures first, then the meter, then the buried line."
      },
      {
        "title": "Fixture and Valve Leak Repair",
        "text": "Stops, supply lines, and valves fail quietly. Once we find the source, we repair it the same visit when parts and access allow."
      },
      {
        "title": "Water Heater and Tank Leaks",
        "text": "Puddles at the heater can be a tank failure, a loose fitting, or the T&P valve. We tell you if it is a repair or a replacement."
      },
      {
        "title": "Service Line Leak Confirmation",
        "text": "If detection points past the foundation to the yard, we confirm it is the water service and hand you a water line repair plan — not another guess."
      }
    ],
    "faqs": [
      {
        "q": "How do I know if I have a hidden plumbing leak?",
        "a": "A sudden jump in the water bill, the meter running when everything is off, warm spots in a floor, damp crawlspace insulation, or the sound of water when no fixture is running. We confirm with testing instead of guessing."
      },
      {
        "q": "Do you locate leaks without tearing up the house?",
        "a": "That is the point. We use listening equipment, pressure tests, and visual inspection to narrow the leak before we open a wall or slab. We still have to access the repair, but we are not fishing blindly."
      },
      {
        "q": "Is a plumbing leak an emergency?",
        "a": "Active spraying, a ceiling about to fail, or a gas smell is an emergency — shut the water off and call. A slowly rising bill can wait for a scheduled detection visit during business hours, Sunday through Friday 7am to 5pm."
      },
      {
        "q": "Can a leak be in the underground water line?",
        "a": "Yes. Wet yard spots, low pressure, and a meter that never stops often point to the service line from the meter to the house. If that is the issue, we move from detection into water line repair or replacement."
      },
      {
        "q": "How much does leak detection cost?",
        "a": "Most residential detection visits are a few hundred dollars depending on access and how long it takes to isolate the line. Repair is separate and quoted once we know what failed."
      },
      {
        "q": "Do you repair the leak after you find it?",
        "a": "Yes. Detection without a repair plan is not useful. We show you what failed, what it costs to fix, and whether a spot repair or a section replacement is the smarter long-term call."
      }
    ],
    "related": [
      "emergency",
      "sewer-line",
      "drain-cleaning"
    ],
    "photos": [
      "under-slab-plumbing",
      "new-construction-gas-rough-in"
    ],
  },
  "new-construction": {
    "title": "New Construction Plumbing",
    "lead": "We handle all phases of plumbing for new builds. Systems are code-compliant and built to last. We work with contractors and architects on custom homes and commercial developments.",
    "introHeading": "New Construction Plumbing Done Right From the Start",
    "intro": [
      "Getting plumbing right on a new build saves everyone headaches later. Homes, multi-unit projects, and commercial buildings all need solid rough-in and finish work. We handle new construction plumbing across Spirit Lake, Coeur d'Alene, Post Falls, Sandpoint, and Spokane.",
      "Our licensed crew works with general contractors, developers, architects, and homeowners. We match the plumbing plan to the layout, the utilities, and how the building will be used. From underground to trim-out, we deliver complete packages. We know Kootenai County soils, winter weather, and permitting."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Underground & Rough-In Plumbing",
        "text": "We install under-slab and in-wall piping early in the build. We coordinate with builders to match blueprints and avoid rework. Connections are made to last."
      },
      {
        "title": "Fixture Planning & Final Installation",
        "text": "We install toilets, sinks, showers, and water heaters per the plans. Fixtures are code-compliant, water-efficient, and tested before closeout."
      },
      {
        "title": "Water Line Installation & Pressure Testing",
        "text": "We run main water lines and set pressure regulation for residential or commercial demand. Quality pipe and fittings go in the ground and in the walls."
      },
      {
        "title": "Drain, Waste & Vent (DWV) Systems",
        "text": "Good venting and drainage keep sewer gas out and blockages down. We install complete DWV systems with the right slope and sizing."
      },
      {
        "title": "Gas Line Installation for Appliances",
        "text": "We run gas lines with certified shut-offs and regulators for furnaces, stoves, water heaters, and more. Everything gets leak tested to code."
      },
      {
        "title": "Utility Coordination & Final System Testing",
        "text": "We coordinate utility hookups and inspections, then run full-system tests for flow, pressure, and leaks before we call it done."
      }
    ],
    "faqs": [
      {
        "q": "Do you provide plumbing design for custom home builds?",
        "a": "Yes. We design layouts around your home's architecture and how you use each room. We focus on water efficiency, good pressure, and easy access."
      },
      {
        "q": "Can you handle plumbing for multi-unit residential buildings?",
        "a": "Yes. We install systems for duplexes, townhomes, and apartments with shared water and sewer. We handle complex layouts and meter setups."
      },
      {
        "q": "Will my new plumbing system meet state codes?",
        "a": "Yes. Everything we install meets current Idaho plumbing codes. Your property will be ready for city or county inspection."
      },
      {
        "q": "Do you offer water-saving plumbing options for new homes?",
        "a": "Yes. We install low-flow toilets, efficient showerheads, and smart water heaters. These save water and lower your utility bills."
      },
      {
        "q": "How early should plumbing start during new construction?",
        "a": "Plumbing starts during the rough-in phase, right after framing and before insulation. We coordinate with your builder to time it right."
      },
      {
        "q": "Do you install tankless water heaters during construction?",
        "a": "Yes. We install tankless systems during the build with proper venting and hookups. They save space and give you hot water on demand."
      }
    ],
    "related": [
      "commercial",
      "gas-line",
      "septic-systems"
    ],
    "photos": [
      "new-construction-rough-in",
      "under-slab-plumbing",
      "new-construction-gas-rough-in"
    ],
  },
  "radiant-heat": {
    "title": "Radiant Heat & In-Floor Systems",
    "lead": "Stay warm through Idaho's winters with radiant heating. We install and maintain in-floor systems that heat evenly and save energy. We design custom layouts for your home.",
    "introHeading": "Warm Floors for North Idaho Winters",
    "intro": [
      "Winter around here is no joke. Radiant heat warms the floor itself so the whole room feels even, without noisy vents pushing dust around.",
      "We install and service radiant systems in Spirit Lake, Coeur d'Alene, Post Falls, Sandpoint, and Spokane. We know the insulation needs, home styles, and energy codes in this area.",
      "We design hydronic and electric radiant systems that sit quietly in the structure. Slab foundations or multi-level homes, radiant heat makes winter living a lot more comfortable."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Hydronic Radiant Heat Installation",
        "text": "Water-based systems circulate heated water through tubing under the floor. Strong efficiency for larger homes with multiple zones."
      },
      {
        "title": "Electric Radiant Floor Heating",
        "text": "Electric mats work well for spot heating in single rooms, especially under tile or stone. Compact and responsive for bathrooms, kitchens, and remodels."
      },
      {
        "title": "Radiant Heat in New Construction",
        "text": "Putting radiant in during the design phase gets the best efficiency. We work with contractors and architects so the layout matches the structure."
      },
      {
        "title": "Retrofit Radiant Heat Installation",
        "text": "We add radiant systems to existing homes without tearing the place apart. We look at your flooring and find the cleanest path forward."
      },
      {
        "title": "Boiler System Integration",
        "text": "For hydronic systems, we size and install gas or electric boilers that match your heating load. Proper integration keeps every zone reliable."
      },
      {
        "title": "Thermostat & Zone Control Setup",
        "text": "Zoned radiant systems give you control and savings. We set up thermostats that let you manage temperature room by room."
      }
    ],
    "faqs": [
      {
        "q": "Is radiant heat suitable for older homes in Spirit Lake?",
        "a": "Yes. Modern retrofitting lets us add radiant heat to older homes without tearing up the whole floor. We work with what you have."
      },
      {
        "q": "Can radiant floor heating be used with carpet?",
        "a": "Yes, but tile and hardwood transfer heat better. We can make it work under carpet with the right insulation and padding."
      },
      {
        "q": "How long does radiant heating last?",
        "a": "Usually 25 to 35 years. Hydronic systems use durable tubing that holds up well. With basic maintenance, they run for decades."
      },
      {
        "q": "Will radiant heat increase my energy bills?",
        "a": "No. Radiant heating often lowers costs. It heats surfaces directly at lower temperatures and doesn't waste energy cycling on and off."
      },
      {
        "q": "Is radiant heat safe for families with children or pets?",
        "a": "Yes. The system is hidden with no hot surfaces or exposed parts. No vents, no dust, no sharp edges."
      },
      {
        "q": "Can I control different areas of the house separately?",
        "a": "Yes. We divide the system into zones with their own thermostats. You heat only the rooms you use."
      }
    ],
    "related": [
      "heated-driveways"
    ],
    "photos": [
      "boiler-radiant-heat",
      "boiler-mechanical-room"
    ],
  },
  "remodels": {
    "title": "Plumbing Remodels & Upgrades",
    "lead": "Update your plumbing with energy-efficient fixtures and modern piping. We work with your vision and budget to deliver upgrades that last.",
    "introHeading": "Plumbing Remodels That Make the House Work Better",
    "intro": [
      "A plumbing remodel changes how you use the kitchen or bathroom every day. We handle kitchen and bathroom remodel plumbing in Spirit Lake and across North Idaho.",
      "From updating old piping to installing modern fixtures, we work with homeowners, builders, and designers to create systems that fit your plan and budget. Older homes and new builds each have their own quirks, and we have handled both."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Kitchen Plumbing Remodels",
        "text": "Sink relocation, dishwasher hookup, disposal install, and water line upgrades. We work around cabinetry and countertop schedules."
      },
      {
        "title": "Bathroom Plumbing Remodels",
        "text": "Full gut jobs or simple fixture swaps, we manage the plumbing details: shower and tub installs, toilet placement, vanity connections, and heated floor systems."
      },
      {
        "title": "Fixture Upgrades",
        "text": "Touchless faucets, efficient toilets, rainfall showerheads. We install water-smart fixtures that look good and cut consumption."
      },
      {
        "title": "Piping Relocation & Rerouting",
        "text": "When walls move and layouts change, we relocate supply lines, drains, and vents to match the new floor plan. All work meets current code."
      },
      {
        "title": "Code Compliance Updates",
        "text": "Older homes often have plumbing that no longer meets code. We fix bad venting, outdated materials, and weak pressure during the remodel."
      },
      {
        "title": "Energy-Efficient Upgrades",
        "text": "We recommend and install tankless water heaters, low-flow fixtures, and insulated hot water lines. Lower bills and better comfort."
      }
    ],
    "faqs": [
      {
        "q": "How long does a kitchen or bathroom plumbing remodel take?",
        "a": "Most take 2 to 5 days. A simple swap may be one day. Full renovations can take up to a week."
      },
      {
        "q": "Do I need permits for a plumbing remodel?",
        "a": "Yes. We handle all permits and inspections so your remodel passes code without hassle."
      },
      {
        "q": "Can you relocate plumbing during a remodel?",
        "a": "Yes. We move supply lines, drain pipes, and vents for new layouts. Everything meets code in its new position."
      },
      {
        "q": "What plumbing upgrades add the most value?",
        "a": "Tankless water heaters, low-flow fixtures, touchless faucets, and radiant floor heating. They improve efficiency and appeal."
      },
      {
        "q": "Do you work with my contractor or designer?",
        "a": "Yes. We work alongside contractors, designers, and architects to keep the project on track."
      },
      {
        "q": "Can you match existing fixtures during a partial remodel?",
        "a": "Yes. We find fixtures that match your brand and style. If exact matches aren't available, we suggest close alternatives."
      }
    ],
    "related": [
      "kitchen-remodels",
      "bathroom-remodels",
      "toilets-faucets"
    ],
    "photos": [
      "modern-bathroom-fixtures",
      "shower-tub-installation",
      "toilets-faucets-trim"
    ],
  },
  "septic-systems": {
    "title": "Septic Systems",
    "lead": "We design, install, and maintain septic systems for Idaho soil and water conditions. Soil testing, tank installation, drain fields, and routine pumping.",
    "introHeading": "Septic Work for Rural North Idaho Properties",
    "intro": [
      "If you live outside city limits in North Idaho, a good septic system is essential. Climate, soil types, and rural development put real demands on these systems. It pays to work with someone who knows the territory.",
      "We have decades of hands-on experience with septic systems of all sizes. Rural property near Spirit Lake or a lakeside cabin, we help you meet county code, avoid costly repairs, and protect groundwater.",
      "A neglected system can contaminate drinking water, leave soggy spots in the yard, or put you on the wrong side of environmental rules. Our installs are built to hold up through the seasons."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Septic System Installation",
        "text": "We design and install systems for new homes or failed system replacements. We evaluate slope, soil type, and layout for good placement. Permitting, excavation, and full install included."
      },
      {
        "title": "Septic Tank Pumping",
        "text": "Routine pumping removes sludge that clogs drain fields and causes backups. Scheduled and on-demand service available."
      },
      {
        "title": "System Inspections and Evaluations",
        "text": "Certified inspections with clear reports for real estate deals, county permits, or general checks. We look at tank levels, leaks, components, and drain field performance."
      },
      {
        "title": "Septic System Repairs",
        "text": "We fix pipe blockages, broken baffles, drain field issues, and more. Repairs restore flow and extend system life with as little disruption as possible."
      },
      {
        "title": "Drain Field Replacement",
        "text": "If your drain field is saturated or not percolating, we rebuild it to code with the right aggregate, layout, and slope for your property."
      },
      {
        "title": "Grease Trap & Effluent Filter Services",
        "text": "We install and maintain grease traps and effluent filters to protect your tank and drain field. Important for restaurants and other commercial sites."
      }
    ],
    "faqs": [
      {
        "q": "How often should I pump my septic tank?",
        "a": "Every 3 to 5 years, depending on household size and usage. Skipping it can damage your drain field."
      },
      {
        "q": "What are the signs my septic system needs service?",
        "a": "Slow drains, gurgling pipes, wet spots in the yard, or sewage odors. Don't wait once you notice these."
      },
      {
        "q": "Can I install a septic system myself?",
        "a": "Idaho requires licensed pros for septic design and installation. DIY installs often fail inspection."
      },
      {
        "q": "Is it safe to use additives in my septic tank?",
        "a": "Most systems don't need them. Some additives can harm the bacteria your tank relies on."
      },
      {
        "q": "How long does a septic system last?",
        "a": "20 to 40 years with proper maintenance. Regular pumping and inspections make a big difference."
      },
      {
        "q": "What permits are required for a new septic system?",
        "a": "A site evaluation and permit from Panhandle Health District are needed before installation."
      }
    ],
    "related": [
      "new-construction",
      "commercial",
      "gas-line"
    ],
    "photos": [
      "septic-system-installation-4",
      "septic-drain-field",
      "site-excavation"
    ],
  },
  "sewer-line": {
    "title": "Sewer Line Replacement",
    "lead": "We replace damaged or outdated sewer lines using camera inspections and trenchless methods when possible. Minimal digging, maximum reliability.",
    "introHeading": "Sewer Line Replacement When the Old Line Gives Out",
    "intro": [
      "A failed sewer line is not something you can put off. Older pipes and seasonal soil movement in North Idaho make these jobs urgent. We replace sewer lines in Spirit Lake, Coeur d'Alene, Post Falls, and Sandpoint, and we do the job carefully.",
      "Every job starts with a camera inspection so we can see what is going on. Then we recommend the best approach, including trenchless methods when they fit. Residential or commercial, we work to limit disruption to your property.",
      "Estimates are honest, work is guaranteed, and we leave the site clean and safe when we are done."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Full Sewer Line Replacement",
        "text": "We replace entire sewer lines with trench or trenchless methods. We assess the site, pick the right approach, and install durable materials built to last."
      },
      {
        "title": "Sewer Line Camera Inspections",
        "text": "Video inspections show the inside of the pipe. We find breaks, corrosion, and blockages without guessing."
      },
      {
        "title": "Trenchless Sewer Replacement",
        "text": "Pipe bursting and lining cut down on landscape damage. We can often replace a bad line with far less digging."
      },
      {
        "title": "Emergency Sewer Replacement",
        "text": "When a line fails suddenly, we respond fast. Severe backups, collapses, and hazardous leaks get stabilized and repaired."
      },
      {
        "title": "Sewer Line Permitting and Code Compliance",
        "text": "We handle local permits and schedule inspections. State and municipal plumbing codes are part of how we plan every job."
      },
      {
        "title": "Post-Replacement Testing & Clean-Up",
        "text": "After install, we run pressure and flow tests. Then we clean up and restore affected surfaces as much as the site allows."
      }
    ],
    "faqs": [
      {
        "q": "How do I know if I need a sewer line replacement?",
        "a": "Persistent clogs, bad smells, wet yard spots, or backups in multiple drains. A camera inspection tells us for sure."
      },
      {
        "q": "What's the difference between repair and replacement?",
        "a": "Repair fixes a specific damaged spot. Replacement takes out the whole line. Severe or widespread damage calls for replacement."
      },
      {
        "q": "How long does sewer line replacement take?",
        "a": "Most residential jobs are done in 1 to 3 days. It depends on soil, pipe length, and the method we use."
      },
      {
        "q": "Will my yard be destroyed during replacement?",
        "a": "Not with trenchless options. Even with traditional methods, we work to preserve your landscaping."
      },
      {
        "q": "Is trenchless sewer replacement available?",
        "a": "Yes, for many properties. We assess depth, pipe condition, and soil to see if it's a good fit."
      },
      {
        "q": "Does Preferred Plumbing Solutions handle permits?",
        "a": "Yes. We take care of all permits and inspections so you don't have to deal with the paperwork."
      }
    ],
    "related": [
      "emergency",
      "drain-cleaning",
      "leak-detection"
    ],
    "photos": [
      "site-excavation",
      "under-slab-plumbing",
      "septic-drain-field"
    ],
  },
  "tankless-water-heaters": {
    "title": "Tankless Water Heaters",
    "lead": "Tankless (on-demand) water heater installation, repair, and replacement in North Idaho. Endless hot water, a smaller footprint, and lower energy use over time.",
    "introHeading": "Endless Hot Water, Smaller Footprint",
    "intro": [
      "Tankless water heaters heat water on demand instead of storing it. You stop running out mid-shower, and you free up the space a bulky tank used to take.",
      "A tankless (on-demand) unit only fires when you open a hot tap, rather than keeping 40 to 50 gallons hot all day. That means lower energy bills, a longer lifespan than most tanks, and hot water that keeps coming.",
      "We install, repair, and replace tankless systems across North Idaho, and we help size the right unit for your household or business."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "New Tankless Installation",
        "text": "We size and install gas or electric tankless units with proper venting, gas line or electrical capacity, and code-compliant connections."
      },
      {
        "title": "Tankless Repair & Troubleshooting",
        "text": "Error codes, weak flow, cold water sandwiches, and ignition issues: we diagnose and repair on-demand systems from major brands."
      },
      {
        "title": "Tank-to-Tankless Conversion",
        "text": "Replacing an old tank with tankless often means venting and gas line upgrades. We handle the full conversion so it is one call, not three contractors."
      },
      {
        "title": "Gas Tankless Systems",
        "text": "High-flow gas units for whole-home hot water. We confirm gas supply, combustion air, and venting before install."
      },
      {
        "title": "Electric Tankless Units",
        "text": "Point-of-use or smaller-home electric tankless when gas is not available. We verify panel capacity and circuit requirements."
      },
      {
        "title": "Descaling & Maintenance",
        "text": "Hard water in North Idaho means tankless units need periodic flushing. We offer descaling to keep efficiency and lifespan high."
      }
    ],
    "faqs": [
      {
        "q": "Is a tankless water heater worth the extra cost?",
        "a": "For most households, yes over time. Lower energy bills and a longer lifespan often offset the higher upfront price within several years."
      },
      {
        "q": "Can I replace my tank heater with tankless in the same spot?",
        "a": "Usually, though venting and gas line requirements can differ. We confirm during the estimate."
      },
      {
        "q": "Do tankless units need maintenance?",
        "a": "Yes, periodic descaling and flushing, especially with hard water. We offer this as part of our service."
      },
      {
        "q": "How fast can you install one?",
        "a": "Most residential installs are completed in a single day."
      },
      {
        "q": "Are tankless water heaters suitable for colder climates like Spirit Lake?",
        "a": "Yes. Properly sized and installed with freeze protection, they handle Idaho winters well."
      },
      {
        "q": "Gas or electric tankless: which is better?",
        "a": "Gas units usually deliver higher flow for whole-home use. Electric can work for smaller homes or point-of-use. We size based on your demand."
      }
    ],
    "related": [
      "water-heaters",
      "water-softeners",
      "water-line"
    ],
    "photos": [
      "water-heater-replacement",
      "boiler-mechanical-room"
    ],
  },
  "toilets-faucets": {
    "title": "Toilets & Faucets",
    "lead": "We install and repair toilets and faucets. Low-flow upgrades, leak repairs, and commercial-grade fixtures. We aim to cut water waste and stop problems before they start.",
    "introHeading": "Toilet and Faucet Fixes That Stop the Waste",
    "intro": [
      "A dripping faucet or running toilet is more than annoying. It wastes water and drives up the bill. We fix and install toilets and faucets in Spirit Lake, Coeur d'Alene, Post Falls, and Sandpoint.",
      "From older cabins around Twin Lakes to newer homes in Kootenai County, we know the plumbing around here. Local water quality, older pipe, and seasonal issues are familiar ground for our crew.",
      "We look at each job and do it right. Upgrading bathroom fixtures or repairing a kitchen faucet, we focus on work that holds up."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Toilet Installation & Replacement",
        "text": "Dual-flush upgrades or straight replacements, we install to code. We check drainage, secure the flange, and test for a leak-free flush."
      },
      {
        "title": "Faucet Repair & Installation",
        "text": "We repair and install faucets for kitchens, bathrooms, and utility sinks. Durable parts and modern upgrades that improve water efficiency and day-to-day use."
      },
      {
        "title": "Toilet Leak Detection & Repair",
        "text": "Running toilets can waste hundreds of gallons a month. We find internal or hidden leaks fast and restore a solid flush."
      },
      {
        "title": "Faucet Cartridge & Valve Replacement",
        "text": "Worn cartridges and corroded valves cause drips and temperature swings. We service major brands and get smooth control back."
      },
      {
        "title": "Water-Saving Fixture Upgrades",
        "text": "We install toilets and faucets that cut daily water use. These upgrades can qualify for rebates and show up as savings on the bill."
      },
      {
        "title": "Emergency Toilet & Faucet Repairs",
        "text": "Overflowing toilet or a faucet that will not shut off: we handle urgent issues during business hours so water damage does not spread."
      }
    ],
    "faqs": [
      {
        "q": "How do I know if my faucet needs replacing instead of repairing?",
        "a": "If it keeps leaking after repairs or shows rust, replacement is usually more cost-effective. Newer models also use less water."
      },
      {
        "q": "What's causing my toilet to run constantly?",
        "a": "Usually a worn flapper, a bad fill valve, or sediment. These parts are easy to replace and stop the water waste."
      },
      {
        "q": "Can I upgrade to water-saving fixtures in an older home?",
        "a": "Yes. Low-flow toilets and aerated faucets work with older plumbing when installed correctly. We handle the fit and code compliance."
      },
      {
        "q": "Why is my faucet making a hammering or squealing noise?",
        "a": "Water hammer, worn washers, or pressure issues. We find the source and fix it before it causes pipe damage."
      },
      {
        "q": "How long does a toilet installation take?",
        "a": "1 to 2 hours for a standard install. Corroded flanges or pipe adjustments can add time, but most are done same day."
      },
      {
        "q": "Is it normal for faucet handles to become stiff or hard to turn?",
        "a": "No. That usually means mineral buildup or worn parts. We can clean or replace the components to get it moving smoothly."
      }
    ],
    "related": [
      "remodels",
      "kitchen-remodels",
      "bathroom-remodels"
    ],
    "photos": [
      "toilets-faucets-trim",
      "modern-bathroom-fixtures",
      "shower-tub-installation"
    ],
  },
  "water-heaters": {
    "title": "Water Heater Installation & Replacement",
    "lead": "We install and repair tank water heaters for homes and businesses across North Idaho. We help you pick the right model for your family size, usage, and budget.",
    "introHeading": "Hot Water You Can Count On",
    "intro": [
      "You do not think about hot water until it is gone. Cold showers and a dishwasher that will not clean right are no fun. We install, repair, and replace tank water heaters in Spirit Lake, Coeur d'Alene, Post Falls, Hayden, Rathdrum, Athol, and Oldtown.",
      "North Idaho winters are hard on heaters. We focus on performance, safety, and value. Traditional tanks and tankless units both have a place, and we help you pick what fits your space, usage, and budget.",
      "Efficiency and longevity matter here. Every unit we install or service gets checked against state and local code. We know what this climate asks of a water heater."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Water Heater Installation",
        "text": "We install standard tanks and tankless systems sized to your property and hot water needs. Installs meet Idaho building codes and energy standards. We handle permits and final inspections."
      },
      {
        "title": "Water Heater Repair",
        "text": "We diagnose and fix thermostat failures, pilot light problems, sediment buildup, and more. Repairs are done with long-term performance and safety in mind."
      },
      {
        "title": "Tankless Water Heater Options",
        "text": "Looking at on-demand hot water? We install and service tankless systems. See our tankless water heater page for sizing, install, and conversion details."
      },
      {
        "title": "Annual Maintenance Plans",
        "text": "Flushing, inspections, and component checks catch problems early. Scheduled maintenance protects your investment and helps avoid breakdowns."
      },
      {
        "title": "Water Heater Replacement",
        "text": "When a unit is past saving, we handle the full swap. We help you pick the right model for family size and use, then remove and dispose of the old one safely."
      },
      {
        "title": "Emergency Water Heater Services",
        "text": "Leaks, no hot water, or pressure problems cannot wait. We offer fast emergency service during business hours to get safe hot water back online."
      }
    ],
    "faqs": [
      {
        "q": "Do you repair water heaters near Spirit Lake?",
        "a": "Yes. We repair, replace, and install tank water heaters in Spirit Lake, Coeur d'Alene, Post Falls, Hayden, Rathdrum, Athol, Oldtown, and nearby North Idaho towns."
      },
      {
        "q": "How long does a water heater typically last in Idaho?",
        "a": "Tank models last 8 to 12 years. Hard water in North Idaho means regular flushing helps them last longer."
      },
      {
        "q": "What size water heater do I need for my home?",
        "a": "It depends on household size and water use. A family of four usually needs a 50-gallon tank. We help you pick without overspending."
      },
      {
        "q": "Why is my water heater making rumbling noises?",
        "a": "Sediment buildup at the bottom of the tank. Annual flushing prevents damage and keeps it running efficiently."
      },
      {
        "q": "What are the signs that my water heater needs repair or replacement?",
        "a": "Rusty water, inconsistent heat, odd noises, leaks, or higher energy bills. If it's over 10 years old, replacement is often the better call."
      },
      {
        "q": "Can I install a water heater myself?",
        "a": "You can, but we don't recommend it. Professional installation means code compliance, safety, and a valid warranty."
      }
    ],
    "related": [
      "tankless-water-heaters",
      "water-softeners",
      "water-line"
    ],
    "photos": [
      "water-heater-replacement",
      "boiler-mechanical-room",
      "well-pump-system"
    ],
  },
  "water-line": {
    "title": "Water Line Replacement",
    "lead": "Underground water main repair and water service replacement across North Idaho. We locate, repair, and replace failing water lines with minimal disruption.",
    "introHeading": "Water Line Repair and Replacement You Can Trust",
    "intro": [
      "Your water service line runs from the meter to the house. When it leaks, corrodes, or fails, you lose pressure, waste water, and risk damage to the yard and foundation.",
      "We repair and replace underground water lines across Spirit Lake, Coeur d'Alene, Post Falls, Sandpoint, and nearby North Idaho communities. From leak detection to full service replacement, we get clean water flowing again.",
      "Soil movement, freeze-thaw cycles, and aging galvanized or poly lines are common failure points here. We size the replacement correctly, meet code, and restore the site when we are done."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Water Main & Service Repair",
        "text": "We locate leaks and damaged sections, make targeted repairs when they make sense, and verify pressure and flow before we leave."
      },
      {
        "title": "Full Water Line Replacement",
        "text": "When spot repairs will not hold, we replace the service from the meter or curb stop to the home with durable, code-approved materials."
      },
      {
        "title": "Leak Detection",
        "text": "High bills or wet spots in the yard? We locate underground leaks so you are not digging blind. Indoor and hidden leaks have a dedicated leak detection page."
      },
      {
        "title": "Meter-to-Home Installs",
        "text": "New water service for homes and outbuildings, including shutoffs, proper burial depth, and connections ready for inspection."
      },
      {
        "title": "New Construction Water Service",
        "text": "We install underground water lines for new builds and coordinate timing, depth, and inspections with the builder."
      },
      {
        "title": "Pressure Testing & Cleanup",
        "text": "After repair or replacement, we pressure-test the line, confirm performance, and restore trenches as cleanly as the site allows."
      }
    ],
    "faqs": [
      {
        "q": "How do I know if my water line is failing?",
        "a": "Low pressure, wet spots in the yard, unexplained high water bills, or discolored water can all point to a leaking or corroded water service line. We confirm with inspection and pressure testing."
      },
      {
        "q": "Do you replace the line from the meter to the house?",
        "a": "Yes. Most residential water service replacements run from the meter or curb stop to the home's main shutoff. We handle the full path and restore the site when we are done."
      },
      {
        "q": "Can you repair a leak without replacing the whole line?",
        "a": "Sometimes. Spot repairs work when damage is localized. Widespread corrosion, multiple leaks, or outdated galvanized pipe usually means full replacement is the better long-term fix."
      },
      {
        "q": "How long does water line replacement take?",
        "a": "Most residential jobs are completed in one to two days, depending on depth, length, and site access."
      },
      {
        "q": "Will you tear up my whole yard?",
        "a": "We dig only what is needed and restore trenches when the work is done. When site conditions allow, we use methods that limit landscape disruption."
      },
      {
        "q": "Do you handle permits for water service work?",
        "a": "Yes. We take care of required permits and inspections so the new line meets local code."
      }
    ],
    "related": [
      "tankless-water-heaters",
      "water-heaters",
      "water-softeners"
    ],
    "photos": [
      "under-slab-plumbing",
      "well-pump-system",
      "site-excavation"
    ],
  },
  "water-softeners": {
    "title": "Water Softeners",
    "lead": "We install and service water softeners for cleaner water and longer-lasting fixtures. Hard water causes scale, stains, and buildup. Our systems improve taste and cut soap usage.",
    "introHeading": "Stop Hard Water From Eating Your Plumbing",
    "intro": [
      "Hard water is a real problem around here. It roughs up pipes, wears out appliances, and leaves mineral scale everywhere. We install and maintain water softeners for homes and businesses across Spirit Lake, Coeur d'Alene, Post Falls, and Sandpoint.",
      "Water in Bonner County and Kootenai County often runs high in calcium and magnesium. Those minerals shorten fixture life, scale up water heaters, and leave dishes and laundry looking dull. We see it every day.",
      "We match the system to household size, water use, and hardness level. New build or existing home, we set it up to keep working for the long haul."
    ],
    "featuresHeading": "How we can help.",
    "features": [
      {
        "title": "Water Softener Installation",
        "text": "We install salt-based and salt-free softeners based on your water test. Correct sizing, proper connections, and code compliance are part of every job."
      },
      {
        "title": "System Upgrades and Replacements",
        "text": "Older softeners lose efficiency. We evaluate your setup and recommend a modern unit that matches current usage and water quality."
      },
      {
        "title": "Water Hardness Testing",
        "text": "We test on-site for exact hardness levels. Accurate numbers let us calibrate the system for good performance with less salt and water waste."
      },
      {
        "title": "Salt Delivery and Maintenance",
        "text": "We offer ongoing salt delivery and routine checks for traditional softeners. Regular care extends equipment life and keeps water quality steady."
      },
      {
        "title": "System Troubleshooting and Repairs",
        "text": "Softener not working right? We diagnose and fix it. Motor failures, salt bridging, resin tank problems: we handle those regularly."
      },
      {
        "title": "Consultation for New Builds",
        "text": "We help plan softener placement into the plumbing layout early so you avoid retrofit costs and protect the home from day one."
      }
    ],
    "faqs": [
      {
        "q": "How do I know if I need a water softener?",
        "a": "Scale on fixtures, soap that won't lather, or stiff laundry after washing. A water test confirms calcium and magnesium levels."
      },
      {
        "q": "Is hard water harmful to my plumbing system?",
        "a": "Yes. Scale builds up inside pipes and water heaters, restricting flow and shortening their life. Addressing it early saves money."
      },
      {
        "q": "What's the difference between salt-based and salt-free softeners?",
        "a": "Salt-based systems remove hardness minerals through ion exchange. Salt-free systems change the mineral structure so scale doesn't form. Salt-free is lower maintenance but works best with moderate hardness."
      },
      {
        "q": "How often does a softener need maintenance?",
        "a": "Keep the salt reservoir filled and clean the brine tank. A professional check once a year catches issues early."
      },
      {
        "q": "Will a water softener make my water safe to drink?",
        "a": "No. It only removes calcium and magnesium. For drinking water, pair it with a reverse osmosis system."
      },
      {
        "q": "How long does a typical water softener last?",
        "a": "10 to 15 years with proper maintenance. Water quality and usage affect how long it holds up."
      }
    ],
    "related": [
      "tankless-water-heaters",
      "water-heaters",
      "water-line"
    ],
    "photos": [
      "well-pump-system",
      "water-heater-replacement"
    ],
  }
};

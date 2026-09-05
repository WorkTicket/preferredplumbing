import type { RichServiceContent } from '@/types'
import { getYearsOfExperience } from '@/lib/company-stats'

export const residentialServiceContent: Record<string, RichServiceContent> = {
  'water-heaters': {
    introHeading: 'Hot Water You Can Count On',
    introParagraphs: [
      'You do not think about hot water until it is gone. Cold showers and a dishwasher that will not clean right are no fun. We install, repair, and replace tank water heaters in Spirit Lake, Coeur d\'Alene, Post Falls, Hayden, Rathdrum, Athol, and Oldtown.',
      'North Idaho winters are hard on heaters. We focus on performance, safety, and value. Traditional tanks and tankless units both have a place, and we help you pick what fits your space, usage, and budget.',
      'Efficiency and longevity matter here. Every unit we install or service gets checked against state and local code. We know what this climate asks of a water heater.',
    ],
    subServices: [
      {
        title: 'Water Heater Installation',
        description: 'We install standard tanks and tankless systems sized to your property and hot water needs. Installs meet Idaho building codes and energy standards. We handle permits and final inspections.',
      },
      {
        title: 'Water Heater Repair',
        description: 'We diagnose and fix thermostat failures, pilot light problems, sediment buildup, and more. Repairs are done with long-term performance and safety in mind.',
      },
      {
        title: 'Tankless Water Heater Options',
        description: 'Looking at on-demand hot water? We install and service tankless systems. See our tankless water heater page for sizing, install, and conversion details.',
      },
      {
        title: 'Annual Maintenance Plans',
        description: 'Flushing, inspections, and component checks catch problems early. Scheduled maintenance protects your investment and helps avoid breakdowns.',
      },
      {
        title: 'Water Heater Replacement',
        description: 'When a unit is past saving, we handle the full swap. We help you pick the right model for family size and use, then remove and dispose of the old one safely.',
      },
      {
        title: 'Emergency Water Heater Services',
        description: 'Leaks, no hot water, or pressure problems cannot wait. We offer fast emergency service during business hours to get safe hot water back online.',
      },
    ],
    summaryHeading: 'Water Heater Work That Holds Up',
    photos: [
      '/images/service-water-heater-installation.webp',
      '/images/service-water-softener-utility-room.webp',
    ],
    summaryParagraphs: [
      'We match the heater to your household, not a one-size sales pitch. Family size and budget both matter when we help you choose.',
      'Our installs hold up. Our repairs are thorough. We get your hot water back and help keep it that way.',
    ],
    benefits: [
      {
        title: 'Installs and Repairs Done Correctly',
        description: 'Proper install and repair mean safer operation. We check connections, venting, and controls so you are less likely to deal with leaks later.',
      },
      {
        title: 'Better Energy Use',
        description: 'Flushing sediment, setting temperatures right, and talking through upgrades can all cut energy waste. You notice it on the bill.',
      },
      {
        title: 'Longer Equipment Life',
        description: 'Regular maintenance catches corrosion, mineral buildup, and bad parts early. That reduces wear and helps the unit last years longer.',
      },
      {
        title: 'Clear Diagnosis',
        description: 'Faulty thermostats, burned-out elements, internal rust: we find the real issue and fix it instead of guessing.',
      },
      {
        title: 'Safety Code Compliance',
        description: 'Water heaters involve gas or high-voltage power. Our licensed team handles the work safely and to code.',
      },
      {
        title: 'Straight Answers',
        description: 'We explain what we find, what maintenance looks like, and when a tankless upgrade makes sense (or does not).',
      },
    ],
    benefitsHeading: 'Why Homeowners Call Us for Hot Water',
    closingHeading: 'Installs That Meet Code and Cut Energy Waste',
    closingParagraphs: [
      'Northern Idaho means freezing temps, hard water, and a daily need for hot water. In this climate, your heater is essential. Local know-how makes a real difference.',
      'We know the systems, codes, and seasonal demands around Spirit Lake. Thinking tankless? Ask us about our tankless water heater options.',
    ],
  },
  'water-softeners': {
    introHeading: 'Stop Hard Water From Eating Your Plumbing',
    introParagraphs: [
      'Hard water is a real problem around here. It roughs up pipes, wears out appliances, and leaves mineral scale everywhere. We install and maintain water softeners for homes and businesses across Spirit Lake, Coeur d\'Alene, Post Falls, and Sandpoint.',
      'Water in Bonner County and Kootenai County often runs high in calcium and magnesium. Those minerals shorten fixture life, scale up water heaters, and leave dishes and laundry looking dull. We see it every day.',
      'We match the system to household size, water use, and hardness level. New build or existing home, we set it up to keep working for the long haul.',
    ],
    subServices: [
      {
        title: 'Water Softener Installation',
        description: 'We install salt-based and salt-free softeners based on your water test. Correct sizing, proper connections, and code compliance are part of every job.',
      },
      {
        title: 'System Upgrades and Replacements',
        description: 'Older softeners lose efficiency. We evaluate your setup and recommend a modern unit that matches current usage and water quality.',
      },
      {
        title: 'Water Hardness Testing',
        description: 'We test on-site for exact hardness levels. Accurate numbers let us calibrate the system for good performance with less salt and water waste.',
      },
      {
        title: 'Salt Delivery and Maintenance',
        description: 'We offer ongoing salt delivery and routine checks for traditional softeners. Regular care extends equipment life and keeps water quality steady.',
      },
      {
        title: 'System Troubleshooting and Repairs',
        description: 'Softener not working right? We diagnose and fix it. Motor failures, salt bridging, resin tank problems: we handle those regularly.',
      },
      {
        title: 'Consultation for New Builds',
        description: 'We help plan softener placement into the plumbing layout early so you avoid retrofit costs and protect the home from day one.',
      },
    ],
    summaryHeading: 'Softer Water, Longer-Lasting Plumbing',
    photos: [
      '/images/service-water-softener-installation.webp',
      '/images/service-water-softener-utility-room.webp',
    ],
    summaryParagraphs: [
      'Hard water causes problems you may not notice until they get expensive: scale, shorter appliance life, and plumbing that works harder than it should. We help Spirit Lake families get softer, cleaner water with solid softener installs and service.',
      'Our softeners remove excess calcium and magnesium. You get cleaner dishes, softer laundry, and water heaters and pipes that last longer.',
    ],
    benefits: [
      {
        title: 'Longer Plumbing Life',
        description: 'Softeners cut scale in pipes and fixtures. Fewer deposits mean fewer clogs, lower repair costs, and better flow.',
      },
      {
        title: 'Appliances Work Better',
        description: 'Hard water wears out water heaters, dishwashers, and washers. Soft water helps them run cleaner, use less energy, and last longer.',
      },
      {
        title: 'Cleaner, Softer Laundry',
        description: 'Soft water helps detergent dissolve fully. Clothes come out softer and brighter, without that chalky feel.',
      },
      {
        title: 'Spot-Free Dishes and Sinks',
        description: 'Dishes rinse cleaner and glassware stays clearer. Soap scum and mineral stains on fixtures drop off a lot.',
      },
      {
        title: 'Gentler on Skin and Hair',
        description: 'Soft water is easier on skin and scalp. Less dryness and irritation, especially if you already deal with sensitive skin.',
      },
      {
        title: 'Saves Money Over Time',
        description: 'You protect plumbing, lower energy use, and use less soap and detergent. The softener usually pays for itself.',
      },
    ],
    benefitsHeading: 'Why Soft Water Matters Around Here',
    closingHeading: 'Water Quality Built for North Idaho Wells and City Lines',
    closingParagraphs: [
      'Hard water is more than spots on glasses. It hits your utility bills and how long your plumbing lasts. We have spent decades helping homeowners around Spirit Lake deal with mineral-rich water.',
      'Softeners extend appliance life and change how your water feels day to day. We make sure you know how to check salt and keep the system performing.',
    ],
  },
  remodels: {
    introHeading: 'Plumbing Remodels That Make the House Work Better',
    introParagraphs: [
      'A plumbing remodel changes how you use the kitchen or bathroom every day. We handle kitchen and bathroom remodel plumbing in Spirit Lake and across North Idaho.',
      'From updating old piping to installing modern fixtures, we work with homeowners, builders, and designers to create systems that fit your plan and budget. Older homes and new builds each have their own quirks, and we have handled both.',
    ],
    subServices: [
      {
        title: 'Kitchen Plumbing Remodels',
        description: 'Sink relocation, dishwasher hookup, disposal install, and water line upgrades. We work around cabinetry and countertop schedules.',
      },
      {
        title: 'Bathroom Plumbing Remodels',
        description: 'Full gut jobs or simple fixture swaps, we manage the plumbing details: shower and tub installs, toilet placement, vanity connections, and heated floor systems.',
      },
      {
        title: 'Fixture Upgrades',
        description: 'Touchless faucets, efficient toilets, rainfall showerheads. We install water-smart fixtures that look good and cut consumption.',
      },
      {
        title: 'Piping Relocation & Rerouting',
        description: 'When walls move and layouts change, we relocate supply lines, drains, and vents to match the new floor plan. All work meets current code.',
      },
      {
        title: 'Code Compliance Updates',
        description: 'Older homes often have plumbing that no longer meets code. We fix bad venting, outdated materials, and weak pressure during the remodel.',
      },
      {
        title: 'Energy-Efficient Upgrades',
        description: 'We recommend and install tankless water heaters, low-flow fixtures, and insulated hot water lines. Lower bills and better comfort.',
      },
    ],
    summaryHeading: 'Remodel Plumbing That Lasts Past the Punch List',
    summaryParagraphs: [
      'We bring careful work and code knowledge to every kitchen and bathroom remodel. One room or whole home, the goal is lasting value.',
      'From moving supply lines to reworking drains, we handle the plumbing side of your remodel so the new layout works the way you planned.',
    ],
    benefits: [
      {
        title: 'Adds Home Value',
        description: 'A well-done kitchen or bathroom remodel helps resale. Updated plumbing and modern fixtures matter to buyers.',
      },
      {
        title: 'Better Daily Function',
        description: 'A smart plumbing layout makes cooking and bathing easier. That is the point of remodeling in the first place.',
      },
      {
        title: 'Water and Energy Savings',
        description: 'Low-flow toilets, aerated faucets, and tankless heaters can cut water use 30 to 50 percent compared with older models.',
      },
      {
        title: 'Up to Current Code',
        description: 'Older systems may not meet today\'s rules. Remodel work brings the plumbing up to standard and lowers leak and contamination risk.',
      },
      {
        title: 'Fixtures That Match Your Plan',
        description: 'We help pick fixtures, layouts, and materials that fit your style, from farmhouse sinks to modern shower systems.',
      },
      {
        title: 'Fewer Moving Parts for You',
        description: 'We coordinate with contractors, electricians, and designers. Permits, inspections, and scheduling stay on our plate.',
      },
    ],
    benefitsHeading: 'Why Homeowners Remodel With Us',
    closingHeading: 'Remodeling That Makes Everyday Life Easier',
    closingParagraphs: [
      'A remodel is an investment in your home. We bring decades of experience and careful work to every project.',
      'From the first walkthrough to final inspection, we aim for results that improve daily life and protect what you put into the house. Call us about your kitchen or bathroom plan.',
    ],
  },
  'kitchen-remodels': {
    introHeading: 'A Kitchen That Works as Hard as You Do',
    introParagraphs: [
      'A kitchen remodel is one of the best investments you can make in a home. We handle the plumbing side in Spirit Lake, Rathdrum, Hayden, Post Falls, and across the region.',
      'New cabinets and counters only work if the plumbing is right. Layout, appliance hookups, and drain lines all have to fit. That is the part we own.',
    ],
    subServices: [
      {
        title: 'Full Kitchen Renovation',
        description: 'We rebuild the plumbing for a full kitchen redo. Demolition through final connections, coordinated with the rest of the remodel crew.',
      },
      {
        title: 'Custom Cabinet Installation',
        description: 'We work around handcrafted or stock cabinetry so sinks, disposals, and supply lines land where they should. Storage layout and plumbing have to agree.',
      },
      {
        title: 'Countertop Replacement',
        description: 'Quartz, granite, butcher block: we help time sink cutouts and faucet installs so the plumbing lines up with the new tops.',
      },
      {
        title: 'Plumbing Fixture Upgrades',
        description: 'We replace outdated sinks, faucets, and disposals with efficient, code-compliant fixtures. Water line moves for islands and appliance hookups included.',
      },
      {
        title: 'Backsplash and Tile Work',
        description: 'We coordinate waterproofing and fixture placement behind sinks and counters so tile work and plumbing finish clean.',
      },
      {
        title: 'Appliance Integration',
        description: 'We connect dishwashers, refrigerators, and gas ranges with proper plumbing, gas, and drain lines for a clean layout.',
      },
    ],
    summaryHeading: 'Kitchen Remodel Plumbing That Fits the Plan',
    photos: [
      '/images/service-kitchen-remodel-plumbing.webp',
      '/images/service-plumbing-remodels-upgrades.webp',
      '/images/service-dishwasher-disposal-install.webp',
    ],
    summaryParagraphs: [
      'We specialize in the plumbing side of kitchen remodels. Moving sink drains, installing pot fillers and instant hot water dispensers, connecting everything so it works.',
      'We coordinate with your contractor or designer so the plumbing fits the plan. Gas for ranges, water for fridges, and drains for islands are all in scope.',
    ],
    benefits: [
      {
        title: 'Adds Home Value',
        description: 'A well-remodeled kitchen helps resale. Updated plumbing and modern fixtures are part of what buyers notice.',
      },
      {
        title: 'Lower Water and Energy Use',
        description: 'Efficient fixtures and appliances can cut water usage by 30 to 50 percent compared with older models.',
      },
      {
        title: 'Layout That Actually Works',
        description: 'We help relocate sinks, appliances, and lines so the kitchen flows better for cooking and cleanup.',
      },
      {
        title: 'Solid Materials and Workmanship',
        description: 'Secure connections and installs to manufacturer specs. Shortcuts under the sink show up later as leaks.',
      },
      {
        title: 'Permits and Code Coverage',
        description: 'We know building and plumbing rules. Permits and inspections stay on track so the project stays compliant.',
      },
      {
        title: 'Details That Fit How You Cook',
        description: 'Pot fillers, instant hot at the sink, island sinks: we set those up based on how you actually use the kitchen.',
      },
    ],
    benefitsHeading: 'Why Contractors Work With Us',
    closingHeading: `Kitchen Remodel Plumbing Backed by ${getYearsOfExperience()} Years`,
    closingParagraphs: [
      'A kitchen remodel changes how you use the house every day. We build each plumbing plan around how you cook and live, not a catalog page.',
      'From the first consult to final walkthrough, we aim for a kitchen you enjoy using. Let\'s talk about your project.',
    ],
  },
  'bathroom-remodels': {
    introHeading: 'Bathroom Remodels Built Around How You Live',
    introParagraphs: [
      'A bathroom remodel can make the morning routine a lot easier. We handle complete bathroom remodel plumbing throughout Spirit Lake, Rathdrum, Hayden, Post Falls, and across North Idaho.',
      'We understand what works in North Idaho homes: the climate, aging infrastructure in older houses, and what people want in a modern bath. Powder room update or full master suite, we handle it.',
      'We work with homeowners, designers, and contractors so the new bathroom looks good and functions well. Permits and inspections included.',
    ],
    subServices: [
      {
        title: 'Complete Bathroom Renovation',
        description: 'We gut outdated baths and rebuild from the ground up. Structural updates, waterproofing, plumbing, and a layout that fits how you use the space.',
      },
      {
        title: 'Shower and Bathtub Conversions',
        description: 'Old tub to walk-in shower, or a freestanding soaking tub. Functional upgrades that improve style and accessibility.',
      },
      {
        title: 'Custom Vanity and Cabinet Installation',
        description: 'From rustic wood vanities to clean modern cabinets, we install storage with proper plumbing behind it.',
      },
      {
        title: 'Fixture Upgrades',
        description: 'Efficient faucets, showerheads, toilets, and lighting. We help pick fixtures that match style and performance.',
      },
      {
        title: 'Plumbing and Drain Reconfiguration',
        description: 'Older homes often have inefficient plumbing. We rework water lines and drains to match modern use and improve reliability.',
      },
      {
        title: 'Tile and Flooring Installation',
        description: 'Slip-resistant tile, natural stone, heated floors. Proper waterproofing and substrate prep for results that last.',
      },
    ],
    summaryHeading: 'Bathroom Remodels That Add Comfort and Value',
    photos: [
      '/images/service-bathroom-remodel-plumbing.webp',
      '/images/service-bathtubs-showers-plumbing.webp',
      '/images/service-bathroom-remodel-accessible.webp',
    ],
    summaryParagraphs: [
      'We upgrade fixtures, relocate plumbing, and install water-saving systems that improve comfort and cut costs. Spa-style retreat or accessible bath, careful work adds lasting value.',
      'Walk-in showers, soaking tubs, dual-flush toilets, radiant heated floors: we handle bathroom plumbing with care for your home and family.',
    ],
    benefits: [
      {
        title: 'Full Bathroom Rebuild Support',
        description: 'Demolition through finish plumbing, coordinated so the space functions as one complete room.',
      },
      {
        title: 'Shower and Tub Conversions Done Right',
        description: 'Custom shower and tub solutions for comfort and access. Conversions stay code-compliant and practical.',
      },
      {
        title: 'Vanities With Clean Plumbing Behind Them',
        description: 'Custom or stock storage built to fit, with supply and drain lines finished cleanly.',
      },
      {
        title: 'Smarter Fixtures',
        description: 'Efficient faucets, showerheads, and toilets that cut water use. We help pick what fits your style and needs.',
      },
      {
        title: 'Plumbing Relocated for New Layouts',
        description: 'Supply lines, drains, and vents moved for the new plan. Changes meet current code and work the way they should.',
      },
      {
        title: 'Floors That Stay Dry (and Warm)',
        description: 'Durable flooring with proper waterproofing. Radiant heated floors add comfort during Idaho winters.',
      },
    ],
    benefitsHeading: 'Why Homeowners Remodel Bathrooms With Us',
    closingHeading: 'Bathroom Renovations Done Right, Detail by Detail',
    closingParagraphs: [
      'A bathroom remodel is an investment in the house and the daily routine. We deliver results you can trust, backed by decades of experience.',
      'Small upgrade or complete overhaul, we keep the process clear and the results lasting. Give us a call to talk about your bathroom project.',
    ],
  },
  'toilets-faucets': {
    introHeading: 'Toilet and Faucet Fixes That Stop the Waste',
    introParagraphs: [
      'A dripping faucet or running toilet is more than annoying. It wastes water and drives up the bill. We fix and install toilets and faucets in Spirit Lake, Coeur d\'Alene, Post Falls, and Sandpoint.',
      'From older cabins around Twin Lakes to newer homes in Kootenai County, we know the plumbing around here. Local water quality, older pipe, and seasonal issues are familiar ground for our crew.',
      'We look at each job and do it right. Upgrading bathroom fixtures or repairing a kitchen faucet, we focus on work that holds up.',
    ],
    subServices: [
      {
        title: 'Toilet Installation & Replacement',
        description: 'Dual-flush upgrades or straight replacements, we install to code. We check drainage, secure the flange, and test for a leak-free flush.',
      },
      {
        title: 'Faucet Repair & Installation',
        description: 'We repair and install faucets for kitchens, bathrooms, and utility sinks. Durable parts and modern upgrades that improve water efficiency and day-to-day use.',
      },
      {
        title: 'Toilet Leak Detection & Repair',
        description: 'Running toilets can waste hundreds of gallons a month. We find internal or hidden leaks fast and restore a solid flush.',
      },
      {
        title: 'Faucet Cartridge & Valve Replacement',
        description: 'Worn cartridges and corroded valves cause drips and temperature swings. We service major brands and get smooth control back.',
      },
      {
        title: 'Water-Saving Fixture Upgrades',
        description: 'We install toilets and faucets that cut daily water use. These upgrades can qualify for rebates and show up as savings on the bill.',
      },
      {
        title: 'Emergency Toilet & Faucet Repairs',
        description: 'Overflowing toilet or a faucet that will not shut off: we handle urgent issues during business hours so water damage does not spread.',
      },
    ],
    summaryHeading: 'Fixture Work That Lasts',
    photos: [
      '/images/service-toilets-faucets-plumbing.webp',
      '/images/gallery/modern-bathroom-fixtures-1.webp',
    ],
    summaryParagraphs: [
      'New installs or leak repairs, we do careful, code-compliant work. Leaky toilets and dripping faucets waste a lot of water. We stop that fast.',
      'We bring decades of experience to every fixture swap or repair. Worn-out fixtures get replaced with water-efficient models that look good and work better.',
    ],
    benefits: [
      {
        title: 'Installs Built to Last',
        description: 'Connections get secured and aligned correctly. That prevents leaks, wobbling fixtures, and early wear.',
      },
      {
        title: 'Leak Prevention That Saves Water',
        description: 'Even a slow drip wastes gallons daily. We find leaks that DIY attempts miss, protecting the home and the water bill.',
      },
      {
        title: 'Better Day-to-Day Function',
        description: 'Low-flow fixtures, hands-free options, and ADA-friendly setups are available when you want them. Convenience without the drama.',
      },
      {
        title: 'Code Compliance and Safety',
        description: 'We stay current on plumbing codes. Your installs meet standards and avoid insurance headaches later.',
      },
      {
        title: 'Quick Diagnosis, Solid Repairs',
        description: 'We find issues at the source and fix them so you are not dealing with the same drip next month.',
      },
      {
        title: 'Less Stress Than DIY',
        description: 'Home plumbing projects eat weekends and often end in a second mess. Hiring a pro cuts the guesswork.',
      },
    ],
    benefitsHeading: 'Why It Matters',
    closingHeading: 'Toilet and Faucet Repairs You Can Rely On',
    closingParagraphs: [
      'Toilets and faucets get used every day. A plumber who knows local systems and codes keeps small problems from turning into big ones.',
      'From older homes to newer builds, we keep fixtures working year-round. Give us a call when something needs attention.',
    ],
  },
  'bathtubs-showers': {
    introHeading: 'Bathtubs and Showers Built for Daily Use',
    introParagraphs: [
      'A new tub or shower can change how you use the bathroom. We install them in Spirit Lake, Coeur d\'Alene, Post Falls, and Sandpoint. Replacement or full renovation, we do work that fits North Idaho homes.',
      'We know older homes around here, and we know new builds. Every tub and shower gets matched to your layout, water pressure, and existing plumbing.',
      'Cold winters and hard water demand materials that hold up. Our installs are built to last and keep performing.',
    ],
    subServices: [
      {
        title: 'Full Bathtub Installations',
        description: 'New tub or replacement, we handle the full install. We assess plumbing and layout, then level, seal, and finish the job correctly.',
      },
      {
        title: 'Custom Shower Builds',
        description: 'We design and build custom showers with glass enclosures, tile walls, bench seating, and more. Details work with your existing plumbing.',
      },
      {
        title: 'Tub-to-Shower Conversions',
        description: 'We convert bathtubs to walk-in showers with proper drainage and water containment. From demo to tile, we manage each stage.',
      },
      {
        title: 'Shower Fixture Upgrades',
        description: 'Rainfall heads, handheld sprayers, and water-efficient models. We upgrade fixtures for better daily use while matching local water pressure.',
      },
      {
        title: 'Leak Repair & Waterproofing',
        description: 'We find and fix leaks at the source, reinforce waterproof barriers, and make sure the install stands up to humidity.',
      },
      {
        title: 'Clawfoot & Freestanding Tub Installations',
        description: 'We install freestanding and vintage-style tubs with accurate leveling and solid plumbing connections. Looks and function both matter.',
      },
    ],
    summaryHeading: 'Watertight Tub and Shower Installs',
    photos: [
      '/images/service-bathtubs-showers-plumbing.webp',
      '/images/gallery/shower-tub-installation-1.webp',
    ],
    summaryParagraphs: [
      'Remodel or new build, we deliver watertight fittings, proper drainage, and finishes that look good. Details matter, and we take time with them.',
      'From clawfoot tubs to walk-in showers, we install fixtures that match your style and hold up to daily use. Connections get pressure-tested before we leave.',
    ],
    benefits: [
      {
        title: 'A Bathroom That Looks Fresh Again',
        description: 'New fixtures bring an outdated bathroom back to life. The whole room feels cleaner and more comfortable.',
      },
      {
        title: 'Built to Last',
        description: 'Quality materials and careful install prevent cracks, loose tile, and early wear.',
      },
      {
        title: 'Better Water Efficiency',
        description: 'Efficient fixtures cut water use without killing pressure. Utility savings add up over time.',
      },
      {
        title: 'Comfort Set Up for Your Household',
        description: 'Walk-in showers, soaking tubs, grab bars, handheld sprayers: we build around how your family actually uses the space.',
      },
      {
        title: 'Waterproofing That Prevents Hidden Damage',
        description: 'Proper waterproofing behind walls and under tile keeps moisture and mold out. A dry bathroom lasts longer.',
      },
      {
        title: 'Installed to Code',
        description: 'Anti-scald valves, proper drainage, and current plumbing codes are part of every job.',
      },
    ],
    benefitsHeading: 'What a Pro Install Gets You',
    closingHeading: 'Tub and Shower Work Done Carefully',
    closingParagraphs: [
      'A well-planned bathroom changes how you start and end the day. We have seen plenty of poorly sealed installs, and we take care not to leave you with one.',
      'Walk-in shower or soaking tub, we bring care to every detail. From planning to final finishes, we make the bathroom one of the most reliable rooms in the house.',
    ],
  },
  dishwashers: {
    introHeading: 'Dishwasher and Disposal Installs Without the Leaks',
    introParagraphs: [
      'A dishwasher or disposal installed wrong leads to leaks, drainage problems, and wasted weekends. We handle these jobs every week in Spirit Lake, Coeur d\'Alene, Post Falls, and Sandpoint.',
      'Hard water and seasonal temperature swings take a toll on kitchen plumbing around here. We know the local codes and water conditions, and we install for the long haul.',
      'From drainage fixes to new high-efficiency units, we handle it. Solid connections, no guesswork.',
    ],
    subServices: [
      {
        title: 'Dishwasher Installation',
        description: 'New or replacement, we handle plumbing, drainage, and electrical coordination. Watertight connections get tested after install.',
      },
      {
        title: 'Garbage Disposal Installation',
        description: 'Adding a disposal or replacing an old one, we handle electrical hookups, drain alignment, and leak-proof sealing. Safety switches installed when needed.',
      },
      {
        title: 'Appliance Replacements',
        description: 'If a unit is leaking or failing, we remove it, update plumbing as needed, and install the new one. Connections get pressure-tested, and the old unit gets disposed of properly.',
      },
      {
        title: 'Leak Detection & Repair',
        description: 'Small leaks cause big problems. We find and fix issues in water lines, drainpipes, and appliance fittings to keep the kitchen dry.',
      },
      {
        title: 'Clog & Jam Removal',
        description: 'Disposals jam from food debris and foreign objects. We clear obstructions safely and check for deeper drainage problems.',
      },
      {
        title: 'Dishwasher Drainage Solutions',
        description: 'Dishwasher will not drain? We troubleshoot from air gaps to sink traps, clear blockages, and replace faulty check valves.',
      },
    ],
    summaryHeading: 'Kitchen Appliance Hookups Done Right',
    photos: [
      '/images/service-dishwasher-disposal-install.webp',
      '/images/service-kitchen-remodel-plumbing.webp',
    ],
    summaryParagraphs: [
      'Upgrade or replace, we make sure every connection is secure and leak-free. Proper drainage, correct venting, no shortcuts.',
      'We handle dishwasher hookups, disposal replacements, and appliance connections for major brands. Leak testing and code compliance come with every install.',
    ],
    benefits: [
      {
        title: 'Appliances Last Longer',
        description: 'Service catches small issues early, before wear turns into a full replacement.',
      },
      {
        title: 'Accurate Problem Finding',
        description: 'We pinpoint the real issue quickly. No unnecessary part swaps or wasted time.',
      },
      {
        title: 'Better Performance',
        description: 'Clean components and solid connections restore good water flow and drainage. Cleaner dishes, quieter running, less energy waste.',
      },
      {
        title: 'Stops Water Damage Early',
        description: 'We inspect hoses, seals, and connections. Catching a drip early prevents mold, rot, and cabinet damage.',
      },
      {
        title: 'Safe, Code-Compliant Work',
        description: 'Dishwashers and disposals involve water and electricity. We follow current codes so the repair stays safe.',
      },
      {
        title: 'Saves Your Weekend',
        description: 'DIY repairs often mean frustration and store runs. We handle it right the first time.',
      },
    ],
    benefitsHeading: 'Why Call Us for Kitchen Plumbing',
    closingHeading: 'Kitchen Hookups Built to Last and Pass Code',
    closingParagraphs: [
      'A kitchen only works as well as the appliances under the sink. Our recommendations are based on your plumbing, what fits your appliances, and what will last.',
      'Upgrade or troubleshoot, we get it done. Call us when your dishwasher or disposal needs attention.',
    ],
  }
}

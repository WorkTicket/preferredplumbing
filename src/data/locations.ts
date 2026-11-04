export type Location = {
  slug: string;
  city: string;
  state: string;
  intro: string[];
  faqs: { q: string; a: string }[];
};
export const locations: Location[] = [
  {
    slug: "athol-id",
    city: "Athol",
    state: "Idaho",
    intro: [
      "Athol is practically next door to Spirit Lake, so Preferred Plumbing Solutions can often get a truck there the same day during business hours. Homes near Silverwood, Farragut, and the highway corridor rely on us for fast repairs and solid installs.",
      "We see a lot of well systems, septic ties, water heater failures, and new construction as Athol continues to grow between the lakes.",
      "Athol is next door \u2014 typically 10\u201320 minutes from the Spirit Lake shop. Same-day service during business hours is often available because we are already on this side of Farragut, not dispatching up from the valley.",
    ],
    faqs: [
      {
        q: "How fast can you get to Athol from Spirit Lake?",
        a: "Athol is next door, typically 10\u201320 minutes. Same-day water heater, drain, and emergency calls during business hours are often realistic. Rural lots toward Farragut and Silverwood still need well and freeze-depth planning even when the drive is short.",
      },
      {
        q: "Do you serve Athol, Idaho?",
        a: "Yes. We regularly serve Athol, Idaho from our Spirit Lake shop. Plumbing services in Athol and Kootenai County. Right down the road from Spirit Lake, we get there fast.",
      },
      {
        q: "How soon can a plumber get to Athol?",
        a: "We dispatch from Spirit Lake. Athol is a short run from our Spirit Lake shop across Kootenai County. Fast response, licensed work, and pricing that stays clear from the first call. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Athol?",
        a: "In Athol, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Being close means less wait when a pipe bursts or a heater dumps water into the garage. Call early in the day for the best chance at a same-day Athol slot \u2014 we are 10\u201320 minutes away, not coming up from the valley.",
      },
      {
        q: "How do I get a free plumbing estimate in Athol?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Athol, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "blanchard-id",
    city: "Blanchard",
    state: "Idaho",
    intro: [
      "Blanchard is rural North Idaho: acreage, wells, septic, and homes that need plumbing built for distance from city water. Preferred Plumbing Solutions works Blanchard properties for new construction, well-pressure issues, and remodel plumbing.",
      "Lakes like Blanchard and Cocolalla mean seasonal homes as well as full-time residences. We plan installs that can sit through cold snaps without surprise failures.",
      "Typically 15\u201325 minutes from Spirit Lake. Rural lots and seasonal cabins west of town are a regular run \u2014 we leave from the shop next door, so winter access and well-house freeze calls do not wait on a long-haul dispatch.",
    ],
    faqs: [
      {
        q: "Do you plumb wells and new construction in Blanchard?",
        a: "Yes. Blanchard is rural North Idaho: acreage, wells, septic, and seasonal cabins. We size pressure systems for how the property is used and install water lines deep enough for this climate, not a catalog default.",
      },
      {
        q: "Do you serve Blanchard, Idaho?",
        a: "Yes. We regularly serve Blanchard, Idaho from our Spirit Lake shop. Plumbing for Blanchard and North Idaho. New construction, well systems, and everything in between.",
      },
      {
        q: "How soon can a plumber get to Blanchard?",
        a: "We dispatch from Spirit Lake. Blanchard and western Bonner/Kootenai fringe areas are part of our regular coverage from Spirit Lake. Expect practical designs for wells, septic, and North Idaho winters. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Blanchard?",
        a: "In Blanchard, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Out here, a wrong water-line depth or undersized pressure system shows up fast. We size pumps, tanks, and distribution for how the property is actually used.",
      },
      {
        q: "How do I get a free plumbing estimate in Blanchard?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Blanchard, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "chattaroy-wa",
    city: "Chattaroy",
    state: "Washington",
    intro: [
      "Chattaroy is rural Spokane County: wells, longer driveways, and homes that need plumbing built for independent systems. Preferred Plumbing Solutions serves Chattaroy with Washington-licensed crews for repairs, well-pressure plumbing, and remodel work.",
      "We treat these visits like project days. Parts are staged, scope is confirmed, and we stay until the system is tested.",
      "Typically 50\u201370 minutes from Spirit Lake. Rural Spokane County wells and long driveways are treated as project days, not quick pop-ins.",
    ],
    faqs: [
      {
        q: "Can you work on well systems in Chattaroy?",
        a: "Yes. Long driveways, pressure tanks, filtration, and freeze protection are the usual Chattaroy conversation \u2014 not city-water defaults. Tell us about gated or seasonal access when you book so we arrive with enough daylight to finish.",
      },
      {
        q: "Do you serve Chattaroy, Washington?",
        a: "Yes. We regularly serve Chattaroy, Washington from our Spirit Lake shop. Plumbing in Chattaroy and Spokane County. We serve rural and residential properties with the same standards.",
      },
      {
        q: "How soon can a plumber get to Chattaroy?",
        a: "We dispatch from Spirit Lake. Chattaroy and northern Spokane County are on our Washington service list. Expect transparent travel-inclusive pricing and installs built for rural water systems. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Chattaroy?",
        a: "In Chattaroy, Washington we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Acreage properties around Chattaroy often need pressure tanks, filtration, and freeze protection that city homes never think about. We size for real demand, not a catalog default.",
      },
      {
        q: "How do I get a free plumbing estimate in Chattaroy?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Chattaroy, Washington are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "clark-fork-id",
    city: "Clark Fork",
    state: "Idaho",
    intro: [
      "Clark Fork sits where the river meets Lake Pend Oreille, with mountain weather that punishes weak plumbing. Preferred Plumbing Solutions serves Clark Fork for repairs, radiant heat, water heaters, and carefully planned new construction plumbing.",
      "Distance from suppliers means we stage parts before the trip. You get a crew that arrives ready to work, not a windshield estimate that keeps changing.",
      "Typically 60\u201380 minutes from Spirit Lake on a northern run. We stage parts at the shop so the truck arrives ready to work, not to write a second estimate.",
    ],
    faqs: [
      {
        q: "Do you take plumbing calls in Clark Fork?",
        a: "Yes, on scheduled northern runs. Cabinet Mountains cold and river-valley moisture show up as frozen hose bibs, crawlspace issues, and heaters that struggle. We stage parts in Spirit Lake so the visit is a work day.",
      },
      {
        q: "Do you serve Clark Fork, Idaho?",
        a: "Yes. We regularly serve Clark Fork, Idaho from our Spirit Lake shop. Plumbing serving Clark Fork and Bonner County. We handle repairs, new builds, and emergencies.",
      },
      {
        q: "How soon can a plumber get to Clark Fork?",
        a: "We dispatch from Spirit Lake. We cover Clark Fork and eastern Bonner County on scheduled northern runs from Spirit Lake. Local frost, soil, and access roads all factor into the plan. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Clark Fork?",
        a: "In Clark Fork, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Cabinet Mountains cold and river-valley moisture show up as frozen hose bibs, crawlspace issues, and heaters that struggle. We build and repair with that in mind.",
      },
      {
        q: "How do I get a free plumbing estimate in Clark Fork?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Clark Fork, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "coeur-dalene-id",
    city: "Coeur d'Alene",
    state: "Idaho",
    intro: [
      "Looking for a plumbing company in Coeur d'Alene? Preferred Plumbing Solutions brings Spirit Lake-based crews into CDA for waterfront remodels, downtown commercial tenant improvements, and new homes climbing the hillsides \u2014 installs that pass inspection the first time.",
      "We regularly work near Tubbs Hill, the lake corridor, and growing neighborhoods toward Silverwood. Tankless conversions, sewer camera diagnostics, and radiant floor heat are among the jobs we get called for most.",
      "Typically 35\u201350 minutes from our Spirit Lake shop depending on US-95 traffic and lake-corridor weather. We plan material runs so the visit is a work day, not a windshield estimate.",
    ],
    faqs: [
      {
        q: "Is Preferred Plumbing Solutions a licensed plumbing company in Coeur d'Alene?",
        a: "Yes. We are a licensed, insured plumbing company serving Coeur d'Alene and Kootenai County from our Spirit Lake shop. We handle residential, commercial, and emergency plumbing.",
      },
      {
        q: "Do you serve Coeur d'Alene, Idaho?",
        a: "Yes. We regularly serve Coeur d'Alene, Idaho from our Spirit Lake shop. Plumbing for Coeur d'Alene homes and businesses. From new construction to emergency repairs, we cover the whole area.",
      },
      {
        q: "How soon can a plumber get to Coeur d'Alene?",
        a: "We dispatch from Spirit Lake. We serve Coeur d'Alene and nearby Kootenai County with the same owner-operated crew that works Spirit Lake. Expect upfront estimates and work planned around lake-country soil and hard water. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Coeur d'Alene?",
        a: "In Coeur d'Alene, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. City of Coeur d'Alene permits and inspections move on a set schedule. We pull what is required, coordinate with your GC, and keep the plumbing scope clear so tile and cabinetry are not waiting on us.",
      },
      {
        q: "How do I get a free plumbing estimate in Coeur d'Alene?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Coeur d'Alene, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "hayden-id",
    city: "Hayden",
    state: "Idaho",
    intro: [
      "Looking for a plumber in Hayden? We cover lake homes, golf-course neighborhoods, and commercial strips between Coeur d'Alene and Rathdrum \u2014 residential repairs, remodels, and new construction plumbing.",
      "Common jobs include water softener installs for hard well and city water, bathroom remodels near Hayden Lake, and emergency leak repairs during business hours.",
      "Typically 25\u201340 minutes from Spirit Lake. Hayden Lake and inland neighborhoods are a standard Kootenai County dispatch.",
    ],
    faqs: [
      {
        q: "Do you provide plumbing services in Hayden?",
        a: "Yes. We serve Hayden Lake, Avondale, and inland Hayden neighborhoods for water heaters, remodels, softeners, and emergency repairs during business hours.",
      },
      {
        q: "Do Hayden plumbing estimates include a dispatch fee?",
        a: "No. We give free estimates with no dispatch fee. Call 208-290-3889 and we will tell you what the visit covers before anyone rolls.",
      },
      {
        q: "Do you serve Hayden, Idaho?",
        a: "Yes. We regularly serve Hayden, Idaho from our Spirit Lake shop. Hayden homeowners and businesses count on us for quality plumbing work. Repairs, remodels, new construction.",
      },
      {
        q: "How soon can a plumber get to Hayden?",
        a: "We dispatch from Spirit Lake. Hayden and nearby Kootenai County get the same licensed, insured crew we send everywhere else. Winter weather and mineral-heavy water are part of every plan we write for this area. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Hayden?",
        a: "In Hayden, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Hayden Lake properties often need careful outdoor shutoffs and freeze protection. Inland neighborhoods lean toward remodel plumbing and water heater replacements as homes age.",
      },
      {
        q: "How do I get a free plumbing estimate in Hayden?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Hayden, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "mead-wa",
    city: "Mead",
    state: "Washington",
    intro: [
      "Mead and the north Spokane corridor mix suburban neighborhoods with acreage properties that still feel rural. Preferred Plumbing Solutions is licensed in Washington and takes Mead jobs for remodels, water heaters, sewer diagnostics, and new construction support.",
      "We plan Spokane County visits with a firm scope so travel time turns into productive hours on site, not multiple partial trips.",
      "Typically 50\u201370 minutes into north Spokane County from Spirit Lake. Quoted as a planned visit with Washington licensing and a firm scope.",
    ],
    faqs: [
      {
        q: "Do you serve Mead and north Spokane County?",
        a: "Yes, with Washington licensing. Mead mixes suburban streets with acreage that still needs well-aware plumbing. We quote travel from Spirit Lake in the estimate so the number stays honest.",
      },
      {
        q: "Do you serve Mead, Washington?",
        a: "Yes. We regularly serve Mead, Washington from our Spirit Lake shop. Plumbing services in Mead and Spokane County. Residential, commercial, and emergency service available.",
      },
      {
        q: "How soon can a plumber get to Mead?",
        a: "We dispatch from Spirit Lake. Mead and Spokane County jobs are quoted with travel and Washington code requirements included. Same owner-operated standards as our North Idaho work. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Mead?",
        a: "In Mead, Washington we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Little Spokane River and Mount Spokane foothill homes see different frost and soil conditions than the Idaho lake towns we work most. We adjust burial depth, insulation, and material choices accordingly.",
      },
      {
        q: "How do I get a free plumbing estimate in Mead?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Mead, Washington are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "moscow-id",
    city: "Moscow",
    state: "Idaho",
    intro: [
      "Moscow and the Palouse are a farther run for us, so we treat those jobs with careful scoping and clear scheduling. Preferred Plumbing Solutions travels for larger residential projects, radiant systems, and commercial plumbing that needs an experienced crew.",
      "University-area rentals, older downtown buildings, and newer east-side homes each bring different pipe materials and code eras. We plan the visit so parts and labor are ready when we arrive.",
      "Moscow is a longer Palouse run (about two hours from Spirit Lake). We quote travel in the estimate and treat it as a planned project day, not a pop-in service call.",
    ],
    faqs: [
      {
        q: "Is it worth having a Spirit Lake plumber travel to Moscow?",
        a: "For larger jobs \u2014 radiant heat, commercial TI, or a full remodel rough-in \u2014 yes. We quote travel up front and concentrate the work into planned days so you are not paying for repeated windshield time. Small emergency clogs are usually better handled by a Palouse shop that is already in town.",
      },
      {
        q: "Do you serve Moscow, Idaho?",
        a: "Yes. We regularly serve Moscow, Idaho from our Spirit Lake shop. Plumbing services in Moscow. We travel to serve the Palouse region with the same quality work we do at home.",
      },
      {
        q: "How soon can a plumber get to Moscow?",
        a: "We dispatch from Spirit Lake. We serve Moscow and the Palouse by appointment from Spirit Lake. Jobs are quoted with travel in mind so pricing stays transparent and the work still meets the same standards as our North Idaho installs. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Moscow?",
        a: "In Moscow, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Latah County work often means coordinating around campus calendars and seasonal access. We confirm scope by phone or walkthrough before committing travel days.",
      },
      {
        q: "How do I get a free plumbing estimate in Moscow?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Moscow, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "newport-wa",
    city: "Newport",
    state: "Washington",
    intro: [
      "Newport, Washington sits just across the Idaho line from Oldtown. Preferred Plumbing Solutions is licensed for Washington work and regularly crosses for residential and light commercial plumbing in Pend Oreille County.",
      "Border-town properties often juggle Idaho and Washington expectations on materials and inspection. We keep the scope clear so permits and installs stay clean.",
      "Typically 30\u201345 minutes from Spirit Lake across the Idaho line. We are licensed for Washington work in Pend Oreille County.",
    ],
    faqs: [
      {
        q: "Are you licensed for plumbing in Newport, Washington?",
        a: "Yes. We are licensed for Washington work and regularly cross from Oldtown for residential and light commercial plumbing in Pend Oreille County. Permits and inspections stay on the Washington side of the job.",
      },
      {
        q: "Do you serve Newport, Washington?",
        a: "Yes. We regularly serve Newport, Washington from our Spirit Lake shop. Plumbing contractor for Newport and Pend Oreille County. We cross the border for the same quality work.",
      },
      {
        q: "How soon can a plumber get to Newport?",
        a: "We dispatch from Spirit Lake. Newport and Pend Oreille County are served from our Spirit Lake base with Washington licensing. Local codes and river-country winters guide every install. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Newport?",
        a: "In Newport, Washington we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Pend Oreille River homes need solid outdoor shutoffs and attention to freeze risk. Downtown and highway-corridor buildings lean toward remodel and service work.",
      },
      {
        q: "How do I get a free plumbing estimate in Newport?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Newport, Washington are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "oldtown-id",
    city: "Oldtown",
    state: "Idaho",
    intro: [
      "Oldtown sits on the Idaho side of the Pend Oreille River across from Newport. Preferred Plumbing Solutions covers Oldtown with short response times from Spirit Lake for residential repairs, water heaters, and remodel plumbing.",
      "Border living means some neighbors are in Washington and some are in Idaho. We are set up for Idaho work here and can discuss Washington-licensed jobs next door when needed.",
      "Typically 30\u201340 minutes from Spirit Lake on the Idaho side of the Newport bridge. Same-day service during business hours is often realistic.",
    ],
    faqs: [
      {
        q: "How close are you to Oldtown from Spirit Lake?",
        a: "Typically 30\u201340 minutes. River moisture and freeze risk hit crawlspaces and outdoor sillcocks here. Because Oldtown is a short run, emergency and same-day service during business hours is often realistic when the schedule allows.",
      },
      {
        q: "Do you serve Oldtown, Idaho?",
        a: "Yes. We regularly serve Oldtown, Idaho from our Spirit Lake shop. Plumbing for Oldtown and the surrounding area. Right on the border, close to Spirit Lake.",
      },
      {
        q: "How soon can a plumber get to Oldtown?",
        a: "We dispatch from Spirit Lake. Oldtown and the Idaho side of the Newport bridge area are a quick run from Spirit Lake. Local river weather and mixed-age housing stock shape how we quote and build. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Oldtown?",
        a: "In Oldtown, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. River proximity brings moisture and freeze concerns for crawlspaces and outdoor sillcocks. We also see a mix of older Main Street buildings and newer homes on the outskirts.",
      },
      {
        q: "How do I get a free plumbing estimate in Oldtown?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Oldtown, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "post-falls-id",
    city: "Post Falls",
    state: "Idaho",
    intro: [
      "Need a plumber in Post Falls? It is one of the fastest-growing cities we serve. Preferred Plumbing Solutions supports new construction rough-ins, production-home punch lists, and established neighborhoods near the Spokane River and Q'emiln Park.",
      "Builders call us for code-compliant underground and top-out. Homeowners call us when a water heater dies, a sewer backs up, or a bathroom remodel needs the plumbing moved before framing closes.",
      "Typically 35\u201345 minutes from Spirit Lake via Rathdrum. Post Falls is a regular run for new-construction rough-ins and water heater calls.",
    ],
    faqs: [
      {
        q: "Do you serve Post Falls for water heater repair?",
        a: "Yes. Water heater repair, replacement, and new installs are among our most common Post Falls calls. We also handle new construction rough-ins and sewer work.",
      },
      {
        q: "Is there a dispatch fee for a Post Falls plumbing estimate?",
        a: "No. Estimates are free and we do not charge a dispatch fee to quote the work. You hear the scope before we start \u2014 then you decide.",
      },
      {
        q: "Do you serve Post Falls, Idaho?",
        a: "Yes. We regularly serve Post Falls, Idaho from our Spirit Lake shop. Full plumbing services for Post Falls. New builds, remodels, water heaters, and emergency calls.",
      },
      {
        q: "How soon can a plumber get to Post Falls?",
        a: "We dispatch from Spirit Lake. Serving Post Falls and western Kootenai County, we plan jobs around local inspection windows and the river valley climate. Clear pricing, licensed work, and follow-through after the install. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Post Falls?",
        a: "In Post Falls, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Post Falls growth means a mix of brand-new PVC systems and older lines that were never meant for denser development. Camera inspections help us show you the real condition before you approve dig work.",
      },
      {
        q: "How do I get a free plumbing estimate in Post Falls?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Post Falls, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "priest-river-id",
    city: "Priest River",
    state: "Idaho",
    intro: [
      "Priest River sits along the Pend Oreille with a mix of year-round homes, river cabins, and forest-adjacent properties. Preferred Plumbing Solutions serves Priest River for septic-related plumbing, freeze repairs, water heaters, and remodel work.",
      "Rural systems here often include wells, pressure tanks, and septic that have to work together. We look at the whole picture instead of chasing one symptom.",
      "Typically 35\u201350 minutes north from Spirit Lake. We often pair Priest River stops with Oldtown or Newport when the schedule allows.",
    ],
    faqs: [
      {
        q: "Can you work on wells and septic in Priest River?",
        a: "Yes. River cabins and forest-adjacent homes here commonly run private water and septic. We handle house plumbing, pressure issues, freeze damage, and the piping that has to work with the tank \u2014 and we plan the trip from Spirit Lake so parts are on the truck. Septic plumbing \u2192",
      },
      {
        q: "Do you serve Priest River, Idaho?",
        a: "Yes. We regularly serve Priest River, Idaho from our Spirit Lake shop. Plumbing contractor for Priest River and Bonner County. We keep homes and businesses running year-round.",
      },
      {
        q: "How soon can a plumber get to Priest River?",
        a: "We dispatch from Spirit Lake. Priest River and nearby Bonner County are on our regular northern route. Local soil, wells, and cold-season demand shape how we install and repair plumbing here. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Priest River?",
        a: "In Priest River, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Kaniksu forest weather and river humidity are hard on outdoor plumbing and crawlspaces. We focus on insulation, shutoffs, and materials that survive Bonner County winters.",
      },
      {
        q: "How do I get a free plumbing estimate in Priest River?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Priest River, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "rathdrum-id",
    city: "Rathdrum",
    state: "Idaho",
    intro: [
      "Looking for a plumber in Rathdrum? Preferred Plumbing Solutions handles new construction rough-ins and repairs on older systems that need an honest diagnosis. Rathdrum has grown from a quiet prairie town into a full-service community, and we cover both \u2014 from the highway corridor to Twin Lakes.",
      "The shop is in Spirit Lake, 20\u201330 minutes away. That is a home-radius run, not a valley dispatch. Rathdrum customers often get same-day water heater, sewer, gas, and emergency plumbing Sunday through Friday because the truck is already north of I-90.",
      "Typically 20\u201330 minutes from our Spirit Lake shop \u2014 Twin Lakes, the prairie, and Rathdrum proper are a home-radius run, not a stretch trip from Spokane. Same-day water heater and emergency slots during business hours are often realistic because we are already north of I-90.",
    ],
    faqs: [
      {
        q: "Do you offer emergency plumbing in Rathdrum?",
        a: "Yes. We dispatch from Spirit Lake \u2014 typically 20\u201330 minutes to Rathdrum and Twin Lakes \u2014 during business hours, Sunday through Friday 7am to 5pm. Same-day service is often available because we are already north of I-90, not rolling up from Spokane Valley.",
      },
      {
        q: "Do you charge a dispatch fee for a Rathdrum estimate?",
        a: "No. Estimates are free, and there is no dispatch fee to come look at the job. We explain the scope before work starts so you are not paying a trip charge just to hear the number.",
      },
      {
        q: "Do you serve Rathdrum, Idaho?",
        a: "Yes. We regularly serve Rathdrum, Idaho from our Spirit Lake shop. Plumbing contractor for Rathdrum and the surrounding area. Residential and commercial, big or small.",
      },
      {
        q: "How soon can a plumber get to Rathdrum?",
        a: "We dispatch from Spirit Lake. Rathdrum and Twin Lakes jobs leave from our Spirit Lake shop. Short drive, same-day windows during business hours, and pricing that does not start with a trip charge. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Rathdrum?",
        a: "In Rathdrum, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Prairie soils and frost lines around Rathdrum Mountain affect how we trench and bed pipe. Twin Lakes and well-and-septic lots on the prairie are regular jobs because we live next door. Hard water scale still shortens heater life if nobody flushes or softens.",
      },
      {
        q: "How do I get a free plumbing estimate in Rathdrum?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Rathdrum, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "sandpoint-id",
    city: "Sandpoint",
    state: "Idaho",
    intro: [
      "Sandpoint and the Lake Pend Oreille shoreline ask a lot of plumbing systems: cold winters, vacation rentals with heavy use, and cabins that sit empty between seasons. Preferred Plumbing Solutions makes the trip north for work that needs to hold up.",
      "Radiant heat, boiler rooms, sewer replacements, and freeze-damage repairs are frequent Sandpoint calls. We also support Schweitzer-area properties when access and season allow.",
      "Typically 50\u201370 minutes north from Spirit Lake, longer in winter on US-95. We schedule Sandpoint as a dedicated trip so parts are on the truck before we leave the shop.",
    ],
    faqs: [
      {
        q: "Do Sandpoint and Bonner County homes need well and septic plumbing?",
        a: "Often yes, especially outside city sewer. Shoreline cabins and hillside properties mix wells, pressure tanks, and septic with freeze risk from lake-effect cold. We treat those as one system, and radiant heat is a frequent add on Sandpoint remodels and new builds. Radiant heat in Sandpoint country \u2192",
      },
      {
        q: "Do you serve Sandpoint, Idaho?",
        a: "Yes. We regularly serve Sandpoint, Idaho from our Spirit Lake shop. Serving Sandpoint and Bonner County with reliable plumbing. We handle everything from radiant heat to sewer lines.",
      },
      {
        q: "How soon can a plumber get to Sandpoint?",
        a: "We dispatch from Spirit Lake. We serve Sandpoint and Bonner County with scheduled trips from Spirit Lake. Local codes, lake-effect weather, and seasonal occupancy all factor into how we build and repair systems here. Emergency plumbing is available Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
      {
        q: "What plumbing work do you do in Sandpoint?",
        a: "In Sandpoint, Idaho we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. Bonner County soil and frost depth change how we bury and insulate lines. We design for the climate instead of copying a mild-weather install that will fail by February.",
      },
      {
        q: "How do I get a free plumbing estimate in Sandpoint?",
        a: "Call 208-290-3889 or send the contact form. Estimates for Sandpoint, Idaho are free, and we explain the scope before any work starts.",
      },
    ],
  },
  {
    slug: "spirit-lake-id",
    city: "Spirit Lake",
    state: "Idaho",
    intro: [
      "Preferred Plumbing Solutions is the Spirit Lake plumber \u2014 father and son, Ron and Hunter Norris, running the shop in the same town they serve. When you call, you are not routed through a call center in another state. You talk to a local crew that already knows Twin Lakes freeze patterns, Farragut-area well houses, and which suppliers actually stock the fittings we use on Maine Street remodels.",
      "A lot of Spirit Lake plumbing is not city-connected the way Coeur d'Alene is. Private wells, pressure tanks, and septic systems are common on acreage off Blanchard Road, around Twin Lakes, and toward Cape Horn. We treat those as one system: if a toilet backs up, it might be a clog, a lateral, or a tank that is due. That diagnosis is the difference between a real repair and a second service call.",
      "From lake cabins to new subdivisions, we handle water heaters, radiant heat, sewer and water lines, remodels, and emergency repairs Sunday through Friday, 7am to 5pm. Same-day slots are often available because we are already in town.",
    ],
    faqs: [
      {
        q: "Who is the local plumber in Spirit Lake?",
        a: "Preferred Plumbing Solutions is based in Spirit Lake. Ron and Hunter Norris run a family-owned shop with decades of combined experience serving Twin Lakes, Farragut, and all of Kootenai County.",
      },
      {
        q: "Do Spirit Lake homes usually have wells and septic systems?",
        a: "Many do. In-town parcels may be on municipal water, but Twin Lakes, Cape Horn, Blanchard Road, and acreage toward Farragut commonly run private wells and septic instead of city sewer. That is different from most Coeur d'Alene neighborhoods. We diagnose house plumbing, pressure tanks, and septic together instead of treating a backup as a simple clog. Spirit Lake septic plumbing \u2192",
      },
      {
        q: "How often should I pump a septic tank in Spirit Lake?",
        a: "For a typical year-round household, a pump-out every three to five years is a common starting point. Heavy use, a garbage disposal, extra bedrooms, or a tank that was never sized for the house can mean sooner. Seasonal cabins that sit empty still need pumping on a calendar, not \u201cwhen it smells.\u201d If toilets gurgle, drains slow in more than one bathroom, or the yard gets soggy over the drain field, do not keep flushing \u2014 call before the system backs into the house.",
      },
      {
        q: "How do I winterize a well in Spirit Lake?",
        a: "Insulate the well house or pitless adapter area, keep the pressure tank and switch dry and above freezing, and drain outdoor hose bibs and any unheated lines. Vacant cabins need a real winterization \u2014 not just turning down the heat. We handle freeze repairs when it is already too late, but a fall visit is cheaper than a burst line in January.",
      },
      {
        q: "Do you serve Spirit Lake, Idaho?",
        a: "Yes. Preferred Plumbing Solutions is based in Spirit Lake. Preferred Plumbing Solutions is the Spirit Lake plumber \u2014 father and son, Ron and Hunter Norris, running the shop in the same town they serve. When you call, you are not routed through a call center in another state. You talk to a local crew that already knows Twin Lakes freeze patterns, Farragut-area well houses, and which suppliers actually stock the fittings we use on Maine Street remodels.",
      },
      {
        q: "How soon can a plumber get to Spirit Lake?",
        a: "Same-day service is often available during business hours because we are already in town. We take emergency calls Sunday through Friday, 7am to 5pm (closed Saturday).",
      },
    ],
  },
];

// All service-area pages with written content ship publicly. Old /areas/*
// URLs redirect here so Search Console equity is not stranded on 404s.
export const publishedLocations = locations;

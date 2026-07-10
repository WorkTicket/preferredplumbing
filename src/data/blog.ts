export interface BlogPostSummary {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
}

export interface BlogPost extends BlogPostSummary {
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-plumber-spirit-lake-idaho',
    title: 'How to Choose a Plumber in Spirit Lake, Idaho',
    excerpt: "Looking for a reliable plumber in Spirit Lake? Here's what to look for and why local experience matters.",
    date: '2026-06-15',
    category: 'Tips',
    content: [
      "Finding the right plumber in Spirit Lake doesn't have to be hard. Whether you're building a new home or dealing with an emergency repair, a qualified local plumber makes all the difference.",
      'Start by looking for a licensed and insured plumbing contractor. Idaho requires proper licensing, and insurance protects both you and the plumber in case of accidents. Preferred Plumbing Solutions is fully licensed in both Idaho and Washington.',
      'Experience matters. A plumber with decades of local experience knows the specific challenges of North Idaho homes. Freezing winters that burst pipes. Hard water that wears down fixtures.',
      'Ask about their service area. Some plumbers only work in certain cities. We serve 16 cities across Idaho and Washington, from Spirit Lake to Spokane Valley.',
      'Read reviews. Check Google reviews and ask for references. A 5-star rating from local customers speaks volumes about reliability and work quality.',
      'Finally, get a detailed quote before work begins. Transparent pricing is a hallmark of a trustworthy plumbing contractor.',
    ],
  },
  {
    slug: 'signs-sewer-line-replacement-north-idaho',
    title: 'Signs You Need a Sewer Line Replacement in North Idaho',
    excerpt: 'Frequent backups, slow drains, and foul odors could mean sewer line trouble. Learn the warning signs.',
    date: '2026-06-10',
    category: 'Guides',
    content: [
      "Your sewer line is one of the most critical parts of your home's plumbing system. When it fails, the problems can be messy and expensive. Here are the key signs that you may need a sewer line replacement in North Idaho.",
      "Frequent backups. If you're dealing with repeated toilet or drain backups, your sewer line may be compromised. Tree roots, shifting soil, and aging pipes are common causes in our region.",
      "Slow drains throughout the house. When multiple drains are slow simultaneously, it's a strong indicator of a main sewer line issue, not just a single clogged pipe.",
      'Foul odors. Sewer gas smells in your yard or basement suggest a crack or leak in your sewer line. This is a health hazard and needs immediate attention.',
      'Soggy patches in your yard. Unexplained wet or sunken areas in your lawn, especially near the sewer line path, indicate a leak.',
      'If you notice any of these signs, call a professional plumber immediately. We offer sewer line inspection and replacement throughout North Idaho.',
    ],
  },
  {
    slug: 'radiant-heat-vs-forced-air-idaho',
    title: 'Radiant Heat vs. Forced Air: What North Idaho Homeowners Should Know',
    excerpt: 'Compare the comfort, efficiency, and cost of radiant heat versus forced air in cold Idaho winters.',
    date: '2026-06-05',
    category: 'Guides',
    content: [
      "Radiant in-floor heating and forced air systems each have their strengths. Here's what you need to know to pick the right one for your North Idaho home.",
      'Radiant heat works by circulating warm water through tubing installed in your floors. It provides even, draft-free warmth that feels natural and comfortable. Idaho homeowners love it for bathrooms, basements, and entire homes.',
      "Forced air systems use ductwork to blow heated air throughout your home. They're generally less expensive to install initially and can also handle air conditioning through the same ducts.",
      "Efficiency: Radiant heat is typically 20-30% more efficient than forced air because it doesn't lose heat through ductwork. Water is an excellent conductor of heat, making hydronic systems highly efficient.",
      'Comfort: Radiant heat eliminates cold spots and drafts. The warmth rises from the floor, creating an even temperature from floor to ceiling. Forced air can create temperature stratification and blow dust around.',
      'Cost: While radiant heat has a higher upfront installation cost, the long-term energy savings often offset the difference within a few years, especially in cold climates like North Idaho.',
      "At Preferred Plumbing Solutions, we specialize in radiant heat installation throughout Spirit Lake and North Idaho. We can help you determine if it's the right choice for your home.",
    ],
  },
  {
    slug: 'water-heater-installation-cost-idaho',
    title: 'How Much Does a Water Heater Cost to Install in Idaho?',
    excerpt: 'Tank vs. tankless, labor costs, and what North Idaho homeowners should budget for a new water heater.',
    date: '2026-06-01',
    category: 'Guides',
    content: [
      'Replacing a water heater is one of the most common plumbing projects in North Idaho. Costs vary based on the type of unit, your home setup, and whether permits are required.',
      'A standard 40–50 gallon tank water heater typically runs $900 to $1,800 installed in the Spirit Lake area, including the unit, labor, and basic hookups. Gas models cost slightly more than electric due to venting requirements.',
      'Tankless water heaters range from $2,500 to $4,500 installed. They cost more upfront but last longer and use less energy. In cold climates like Idaho, proper sizing and freeze protection are critical.',
      'Additional costs may include permit fees ($50–150), upgraded venting, gas line extensions, or electrical panel work for electric units. We provide a detailed quote before any work begins.',
      'Hard water in the Idaho Panhandle can shorten water heater life. Annual flushing and a water softener can extend your investment. We help you pick the right model for your household size and budget.',
      'Call Preferred Plumbing Solutions for a free estimate on water heater installation in Spirit Lake, Coeur d\'Alene, Post Falls, and surrounding areas.',
    ],
  },
  {
    slug: 'water-softeners-idaho-panhandle',
    title: 'Best Water Softeners for Hard Water in the Idaho Panhandle',
    excerpt: 'Hard water is common in North Idaho. Learn how water softeners protect your pipes, fixtures, and appliances.',
    date: '2026-05-28',
    category: 'Guides',
    content: [
      'North Idaho sits on mineral-rich groundwater. Hard water causes scale buildup in pipes, stains on fixtures, and shortens the life of water heaters and dishwashers.',
      'A whole-home water softener removes calcium and magnesium through ion exchange, replacing them with sodium or potassium ions. Most Idaho Panhandle homes benefit from a system sized to their water hardness and daily usage.',
      'Salt-based softeners are the most common and effective option for Idaho homes. They require periodic salt refills but deliver consistent results. Potassium-based systems are an alternative for households watching sodium intake.',
      'Installation typically takes half a day. We connect the softener to your main water line, set up a drain for the regeneration cycle, and program the unit based on your household size.',
      'Signs you need a softener include white crust on faucets, soap that does not lather well, stiff laundry, and water heater rumbling from sediment buildup. A simple water test confirms hardness levels.',
      'Preferred Plumbing Solutions installs and services water softeners throughout Spirit Lake, Sandpoint, Hayden, and the greater Kootenai and Bonner County area.',
    ],
  },
  {
    slug: 'burst-pipe-winter-idaho-what-to-do',
    title: 'What to Do When a Pipe Bursts in Winter in Idaho',
    excerpt: 'Frozen pipes are a North Idaho emergency. Here\'s what to do immediately and how to prevent burst pipes.',
    date: '2026-05-22',
    category: 'Tips',
    content: [
      'Idaho winters regularly drop below zero. When pipes freeze, the expanding ice can crack copper, PEX, or PVC lines and cause major water damage within minutes.',
      'If a pipe bursts, shut off your main water valve immediately. It is usually near the water meter, in the basement, or where the main line enters your home. If you cannot find it, call us and we will talk you through it.',
      'Turn off electricity to affected areas if water is near outlets or appliances. Move valuables and furniture away from the leak. Open faucets to relieve pressure on the system.',
      'Call an emergency plumber right away. Preferred Plumbing Solutions offers 24/7 emergency service across Spirit Lake and North Idaho. We aim to arrive within the hour for urgent calls.',
      'Do not use open flames or heat guns on frozen pipes. Gradual warming with a hair dryer or space heater is safer. Prevention beats repair: insulate exposed pipes, seal crawl space vents, and keep cabinet doors open during cold snaps.',
      'After repairs, we inspect the full system for additional weak points. One burst often signals other sections at risk in Idaho\'s freeze-thaw cycles.',
    ],
  },
  {
    slug: 'new-construction-plumbing-guide-idaho',
    title: 'New Construction Plumbing: A Complete Guide for Idaho Homebuilders',
    excerpt: 'Rough-in timing, code requirements, and what builders need from a plumbing contractor in North Idaho.',
    date: '2026-05-15',
    category: 'Guides',
    content: [
      'New construction plumbing is a multi-phase process that must align with your build schedule. Getting the timing and contractor right prevents costly delays and rework.',
      'Rough-in plumbing happens after framing and before insulation. This includes underground water and sewer lines, drain and vent systems, and supply line routing. We coordinate directly with your builder on timing.',
      'Idaho plumbing code requires proper pipe sizing, venting, backflow prevention, and inspection at each phase. We schedule all required inspections and stay on-site to answer inspector questions.',
      'Material selection matters for Idaho\'s climate. We recommend PEX or copper for supply lines, PVC for DWV, and proper insulation for any lines in exterior walls or unheated spaces.',
      'Fixture installation comes during trim-out after drywall and flooring. We install water heaters, sinks, toilets, showers, and connect all appliances per the design plans.',
      'Preferred Plumbing Solutions works with custom home builders, developers, and architects across Spirit Lake, Coeur d\'Alene, Post Falls, and the Idaho Panhandle. We handle everything from single-family homes to multi-unit projects.',
    ],
  },
  {
    slug: 'septic-system-bonner-county-idaho',
    title: 'Septic System Installation Requirements in Bonner County, Idaho',
    excerpt: 'Permits, soil testing, and what Bonner County homeowners need to know about septic installation.',
    date: '2026-05-08',
    category: 'Guides',
    content: [
      'Many homes in Bonner County and rural North Idaho rely on septic systems instead of municipal sewer. Proper design and installation protect your property and groundwater.',
      'Bonner County requires a site evaluation and permit before any septic installation. Soil percolation testing determines system type and drain field size. We work with local health districts to navigate the permit process.',
      'Common system types include conventional gravity systems, pressure distribution systems, and mound systems for properties with poor soil or high water tables. The right choice depends on your lot conditions.',
      'Installation involves excavation, tank placement, drain field construction, and connection to your home\'s DWV system. Typical timelines run 3 to 5 days depending on soil and weather.',
      'Regular maintenance extends system life. Pump the tank every 3 to 5 years, avoid flushing non-biodegradable items, and keep vehicles off the drain field.',
      'Preferred Plumbing Solutions installs septic systems throughout Bonner County, Spirit Lake, Sandpoint, and surrounding rural areas. Call us for a site consultation and quote.',
    ],
  },
  {
    slug: 'water-heater-winter-checklist-north-idaho',
    title: 'Is Your Water Heater Ready for Winter? North Idaho Homeowner Checklist',
    excerpt: 'A pre-winter checklist to keep hot water flowing and avoid cold-weather water heater failures.',
    date: '2026-05-01',
    category: 'Tips',
    content: [
      'North Idaho winters stress every part of your home\'s plumbing, and your water heater works hardest when temperatures drop. A quick pre-winter check prevents cold-morning surprises.',
      'Inspect for leaks around the tank, connections, and pressure relief valve. Even small drips signal corrosion or seal failure that worsens in freezing conditions.',
      'Flush the tank to remove sediment buildup. Hard water in our region accumulates quickly, reducing efficiency and causing rumbling noises. Annual flushing extends tank life.',
      'Check the anode rod if your unit is over 3 years old. This sacrificial rod prevents tank corrosion. Replacing a worn rod can add years to your water heater\'s life.',
      'Insulate exposed hot water pipes in unheated areas like crawl spaces and garages. Pipe insulation reduces heat loss and helps hot water reach fixtures faster.',
      'If your water heater is over 10 years old, consider replacement before winter hits. Preferred Plumbing Solutions offers same-day water heater installation across Spirit Lake and North Idaho.',
    ],
  },
  {
    slug: 'how-radiant-heat-works-idaho',
    title: 'How Radiant In-Floor Heat Works and Why Idaho Homes Love It',
    excerpt: 'The science behind hydronic radiant heat and why it\'s ideal for cold North Idaho winters.',
    date: '2026-04-25',
    category: 'Guides',
    content: [
      'Radiant in-floor heating circulates warm water through tubing embedded in your floors. Instead of blowing hot air, it heats surfaces directly, creating even, draft-free warmth.',
      'A boiler heats water to 85–125 degrees Fahrenheit and pumps it through PEX tubing laid in a serpentine pattern under your flooring. Each zone can have its own thermostat for room-by-room control.',
      'Heat radiates upward from the floor, warming objects and people in the room. This feels more natural than forced air and eliminates the cold spots common near windows and exterior walls in Idaho homes.',
      'Radiant systems run quieter and cleaner than forced air. No ducts means no dust circulation, which helps allergy sufferers. The hidden tubing also frees up wall space.',
      'Installation works in new construction and retrofits. New builds integrate tubing during the slab or subfloor phase. Existing homes can add radiant heat to bathrooms, basements, or individual rooms.',
      'Preferred Plumbing Solutions designs and installs radiant heat systems throughout Spirit Lake, Coeur d\'Alene, and the Idaho Panhandle. Contact us for a consultation on your home.',
    ],
  },
  {
    slug: 'plumbing-permits-spirit-lake-idaho',
    title: 'Plumbing Permits in Spirit Lake, Idaho: What You Need to Know',
    excerpt: 'When permits are required, how to get them, and why professional installation matters in Kootenai County.',
    date: '2026-04-18',
    category: 'Tips',
    content: [
      'Most plumbing work in Spirit Lake and Kootenai County requires a permit. This includes water heater replacements, sewer line work, new construction rough-in, and major remodels.',
      'Permits ensure work meets Idaho state plumbing code and local amendments. Inspections verify proper installation of pipes, vents, fixtures, and gas connections before walls are closed up.',
      'Homeowners can pull permits for work they do themselves, but licensed contractors typically handle permitting as part of the job. We manage the entire process so you do not have to visit the county office.',
      'Common projects requiring permits include water heater installation, sewer line replacement, gas line work, bathroom and kitchen remodels involving plumbing changes, and any new construction.',
      'Unpermitted work can cause problems when selling your home, filing insurance claims, or passing future inspections. It also creates safety risks from improper venting or connections.',
      'Preferred Plumbing Solutions is fully licensed in Idaho and Washington. We pull all required permits and schedule inspections for every job in Spirit Lake and surrounding communities.',
    ],
  },
  {
    slug: 'kitchen-remodel-plumbing-north-idaho',
    title: 'Kitchen Remodel Plumbing: What to Expect in North Idaho',
    excerpt: 'Sink relocation, appliance hookups, and plumbing timelines for your kitchen remodel project.',
    date: '2026-04-10',
    category: 'Guides',
    content: [
      'Kitchen remodels often involve more plumbing work than homeowners expect. Moving a sink, adding an island, or upgrading appliances all require careful planning and code-compliant installation.',
      'The first step is mapping your new layout. Relocating a sink means new supply lines and drain routing through floors or walls. We coordinate with your contractor to minimize structural changes.',
      'Appliance hookups include dishwasher, disposal, refrigerator water line, and gas connections for ranges. Each requires proper shut-off valves, air gaps, and code-compliant connections.',
      'Fixture selection affects plumbing rough-in. Farmhouse sinks need different cabinet cutouts. Pot fillers require a dedicated water line. We review your selections before rough-in to avoid surprises.',
      'Timeline depends on scope. Simple fixture swaps take a day. Full kitchen replumbs with layout changes take 2 to 4 days spread across rough-in and trim-out phases of your remodel.',
      'Preferred Plumbing Solutions handles kitchen remodel plumbing throughout North Idaho, from Spirit Lake to Post Falls. We work with your timeline and budget for a smooth renovation.',
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getLatestPosts(count = 3): BlogPostSummary[] {
  return [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count)
    .map(({ slug, title, excerpt, date, category }) => ({
      slug,
      title,
      excerpt,
      date,
      category,
    }))
}

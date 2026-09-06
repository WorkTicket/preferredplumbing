import type { FAQ } from '@/types'
import { areas } from './areas'
import { TITLE_MAX } from '@/lib/seo'

/** High-demand services that earn a city landing page. Parent hubs already own Spirit Lake. */
export const SERVICE_CITY_SERVICES = [
  'emergency',
  'water-heaters',
  'sewer-line',
  'drain-cleaning',
] as const

/** Core Kootenai / Bonner cities with enough local detail to avoid doorway pages. */
export const SERVICE_CITY_CITIES = [
  'coeur-dalene-id',
  'post-falls-id',
  'hayden-id',
  'rathdrum-id',
  'sandpoint-id',
] as const

export type ServiceCityServiceSlug = (typeof SERVICE_CITY_SERVICES)[number]
export type ServiceCityCitySlug = (typeof SERVICE_CITY_CITIES)[number]

export interface ServiceCityCopy {
  description: string
  intro: string[]
  localFocus: string[]
  faqs: FAQ[]
}

export interface ServiceCityPage {
  serviceSlug: ServiceCityServiceSlug
  citySlug: ServiceCityCitySlug
  title: string
  h1: string
  description: string
  intro: string[]
  localFocus: string[]
  faqs: FAQ[]
  path: string
}

const SERVICE_PHRASES: Record<
  ServiceCityServiceSlug,
  { title: string; h1: string }
> = {
  emergency: { title: 'Emergency Plumber', h1: 'Emergency Plumber' },
  'water-heaters': {
    title: 'Water Heater Repair',
    h1: 'Water Heater Repair',
  },
  'sewer-line': { title: 'Sewer Line Repair', h1: 'Sewer Line Repair' },
  'drain-cleaning': { title: 'Drain Cleaning', h1: 'Drain Cleaning' },
}

const BRAND_LEN = ' | Preferred Plumbing'.length

function comboKey(serviceSlug: string, citySlug: string) {
  return `${serviceSlug}__${citySlug}`
}

const COPY: Record<string, ServiceCityCopy> = {
  'emergency__coeur-dalene-id': {
    description:
      "Emergency plumber in Coeur d'Alene for burst pipes, sewer backups, and no hot water. Sun–Fri 7am–5pm. Call 208-290-3889.",
    intro: [
      "When a pipe bursts or sewage comes up a floor drain in Coeur d'Alene, you need a crew that can get into town during business hours — not a call center. Preferred Plumbing Solutions dispatches from Spirit Lake for lake-country homes, downtown commercial, and hillside properties toward Silverwood.",
      "We stabilize the leak, shut down what has to be shut down, and tell you whether this is a same-day repair or a follow-up for sewer, water line, or water heater work. Emergency rates are quoted before we start.",
    ],
    localFocus: [
      "Older lakeside houses mix galvanized, poly, and copper. A burst in a crawlspace off the lake corridor is a different job than a failed fitting in a newer subdivision. We diagnose what failed instead of opening walls at random.",
      "City of Coeur d'Alene inspections and water shutoffs follow local rules. We work around that so the emergency repair can pass when a permit is required.",
    ],
    faqs: [
      {
        question: "Do you offer emergency plumbing in Coeur d'Alene?",
        answer:
          "Yes. We take emergency calls Sunday through Friday, 7am to 5pm, and drive in from Spirit Lake. We are closed Saturday. Burst pipes, sewer backups, gas smells, and no hot water are the usual CDA dispatches.",
      },
      {
        question: "How fast can you get to Coeur d'Alene?",
        answer:
          "Drive time from our Spirit Lake shop is typically under an hour depending on traffic around the lake. Call 208-290-3889 and we will give you a realistic window, not a fake 20-minute promise.",
      },
      {
        question: "Is a slow leak in Coeur d'Alene an emergency?",
        answer:
          "Active spraying, sewage in the home, or a gas odor is an emergency. A dripping supply line can often wait for a scheduled leak detection visit. We will tell you which one you have.",
      },
    ],
  },
  'emergency__post-falls-id': {
    description:
      'Emergency plumber in Post Falls for burst pipes, backups, and no hot water. Sun–Fri 7am–5pm. Call 208-290-3889.',
    intro: [
      'Post Falls is growing fast, which means we see both brand-new PVC failures and older lines that were never meant for denser neighborhoods. Preferred Plumbing Solutions handles emergency plumbing here during business hours — burst pipes, sewer backups, and dead water heaters.',
      'Builders call us when a rough-in or punch-list leak cannot wait. Homeowners call when a basement floor drain comes up or a pipe freezes along the Spokane River corridor. We quote emergency work before we pick up a wrench.',
    ],
    localFocus: [
      'Production homes and custom builds sit side by side in Post Falls. Access, shutoff locations, and crawlspace layouts vary. We ask those questions on the phone so the truck is stocked when we arrive.',
      'Q\'emiln and river-adjacent properties see more freeze and groundwater issues than inland lots. That changes how we isolate a leak and what we recommend after the emergency is stopped.',
    ],
    faqs: [
      {
        question: 'Do you do emergency plumbing in Post Falls?',
        answer:
          'Yes. Sunday through Friday, 7am to 5pm. We dispatch from Spirit Lake for Post Falls burst pipes, sewer backups, overflowing toilets, and no-hot-water calls.',
      },
      {
        question: 'Can you come the same day to Post Falls?',
        answer:
          'Often yes during business hours. Post Falls is a regular run for us. Call 208-290-3889 and we will tell you the next open window.',
      },
      {
        question: 'Do new Post Falls homes still need emergency plumbers?',
        answer:
          'Yes. New construction still gets failed fittings, poorly supported lines, and water heaters that die in the first few years. We fix the failure and document it if a warranty or builder call is involved.',
      },
    ],
  },
  'emergency__hayden-id': {
    description:
      'Emergency plumber in Hayden for leaks, backups, and no hot water. Lake homes and inland neighborhoods. Call 208-290-3889.',
    intro: [
      'Hayden Lake homes and inland Hayden neighborhoods both call us for emergency plumbing: frozen hose bibs, leaking water heaters, and sewage backups. Preferred Plumbing Solutions covers Hayden during business hours from our Spirit Lake shop.',
      'Lake properties often need outdoor shutoffs handled carefully so you are not flooding a dock-side crawlspace. Inland houses more often fail at heaters, supply lines, and older drain stacks. We stabilize first, then give you the repair path.',
    ],
    localFocus: [
      'Hayden Lake freeze protection is a recurring emergency trigger. We see burst sillcocks and poorly insulated lines after cold snaps. If the rest of the house is still pressurized, we isolate the failed section instead of shutting you down longer than needed.',
      'Avondale and golf-course neighborhoods have a mix of well and city water. That matters for how we diagnose no-water vs. no-hot-water emergencies.',
    ],
    faqs: [
      {
        question: 'Are you an emergency plumber in Hayden?',
        answer:
          'Yes. We serve Hayden Lake, Avondale, and inland Hayden Sunday through Friday, 7am to 5pm. Closed Saturday.',
      },
      {
        question: 'What Hayden plumbing problems count as an emergency?',
        answer:
          'Burst pipes, sewage backing into the home, a gas smell, and a water heater dumping on the floor. A slow drain or a running toilet is usually a same-week appointment, not a lights-and-siren call.',
      },
      {
        question: 'Do you handle Hayden Lake freeze breaks?',
        answer:
          'Yes. Frozen and burst lines on lake properties are a common Hayden call. We thaw or isolate safely, repair the break, and talk through shutoffs so it is less likely next winter.',
      },
    ],
  },
  'emergency__rathdrum-id': {
    description:
      'Emergency plumber in Rathdrum. Short drive from Spirit Lake for burst pipes and backups. Sun–Fri 7am–5pm. Call 208-290-3889.',
    intro: [
      'Rathdrum is a short drive from our Spirit Lake shop, so emergency plumbing here often gets a faster window than farther towns. Burst pipes, sewer backups, and no hot water are the calls we take Sunday through Friday, 7am to 5pm.',
      'Prairie homes, highway-corridor builds, and older cabins each fail differently. We would rather tell you to shut the main off and wait 40 minutes than have you standing in water while a distant franchise quotes a four-hour ETA.',
    ],
    localFocus: [
      'Frost depth around Rathdrum Mountain and hard water scale both show up in emergency work: frozen lines, clogged heaters, and fittings that let go. We stock common tank heater and drain parts on the truck for this run.',
      'Same-day Rathdrum slots are realistic during business hours because we are already in Kootenai County. Saturday we are closed — if it can be isolated, we will tell you how to hold until Sunday.',
    ],
    faqs: [
      {
        question: 'Do you offer emergency plumbing in Rathdrum?',
        answer:
          'Yes. We dispatch from Spirit Lake for Rathdrum emergencies Sunday through Friday, 7am to 5pm. Same-day service is often available because the drive is short.',
      },
      {
        question: 'What should I do before the plumber arrives in Rathdrum?',
        answer:
          'Shut the main water valve if you can find it. Keep people off wet floors. If you smell gas, leave the house and call from outside. Our dispatch can walk you through the shutoff on the phone.',
      },
      {
        question: 'Do you charge extra for Rathdrum emergency calls?',
        answer:
          'Emergency rates are higher than a scheduled visit. We give you the price before work starts. No surprise after-hours multipliers on a Saturday — we are closed that day.',
      },
    ],
  },
  'emergency__sandpoint-id': {
    description:
      'Emergency plumber in Sandpoint and Bonner County. Freeze breaks, backups, and no hot water. Call 208-290-3889.',
    intro: [
      'Sandpoint and the Lake Pend Oreille shoreline ask more of plumbing in winter: cabins that sit empty, vacation rentals with heavy use, and frost that finds every uninsulated line. Preferred Plumbing Solutions makes the trip north for emergency plumbing during business hours.',
      'We treat Sandpoint emergencies as scheduled runs with a clear window. If the water can be shut off, we would rather arrive stocked than rush empty-handed. Burst pipes, sewer backups, and failed heaters are the usual calls.',
    ],
    localFocus: [
      'Bonner County frost depth and lake-effect weather change how we thaw and repair. A City Beach cottage and a hillside home toward Schweitzer are not the same job. Tell us about access and heat in the building when you call.',
      'Seasonal properties often have the main shutoff in an unfamiliar spot. We can talk you through isolating the break so damage stops before we arrive from Spirit Lake.',
    ],
    faqs: [
      {
        question: 'Do you do emergency plumbing in Sandpoint?',
        answer:
          'Yes. We serve Sandpoint and Bonner County Sunday through Friday, 7am to 5pm. Because it is a longer run from Spirit Lake, we confirm the emergency and parts on the phone first.',
      },
      {
        question: 'Can you get to Sandpoint the same day?',
        answer:
          'Often during business hours if we can isolate the problem and have the parts. Call 208-290-3889. We will not promise a 30-minute arrival from Spirit Lake.',
      },
      {
        question: 'What if my Sandpoint cabin is frozen and I am not there?',
        answer:
          'Have someone shut the water off if possible. We can repair freeze breaks once we have access. Empty seasonal homes are why we ask about heat, shutoffs, and who can let us in.',
      },
    ],
  },

  'water-heaters__coeur-dalene-id': {
    description:
      "Water heater repair in Coeur d'Alene. Same-day tank repair and replacement for lake-country homes. Call 208-290-3889.",
    intro: [
      "A cold shower in Coeur d'Alene is usually sediment, a failed element or gas valve, or a tank that is done. Preferred Plumbing Solutions repairs and replaces tank water heaters for lake homes, hillside builds, and in-town properties — and we will tell you when repair is throwing money away.",
      "Hard water around the lake shortens tank life. We flush when it will help, replace anodes when it is worth it, and swap the heater when the tank is leaking or the unit is past about a decade with repeat failures.",
    ],
    localFocus: [
      "Many Coeur d'Alene homes put the heater in a garage or crawl that sees real winter. Freeze protection, venting, and expansion tanks have to match that location, not a mild-climate spec sheet.",
      "City permits are required for most replacements. We pull them. If you are looking at tankless, that is a separate service we also install — we will not force it if a tank is the smarter buy.",
    ],
    faqs: [
      {
        question: "Do you repair water heaters in Coeur d'Alene?",
        answer:
          "Yes. Thermostats, elements, gas valves, T&P valves, and leaking fittings. If the tank itself is leaking or the unit is worn out, we quote replacement instead of stacking repairs.",
      },
      {
        question: "Can I get same-day water heater service in Coeur d'Alene?",
        answer:
          "Often during business hours. No-hot-water and leaking-tank calls are treated as urgent. Call 208-290-3889.",
      },
      {
        question: "Should I repair or replace my Coeur d'Alene water heater?",
        answer:
          "Repair if the tank is sound and the part is cheap relative to a new unit. Replace if it is leaking, heavily rusted, or over about 10–12 years with another major failure. Hard water here makes that call sooner than in soft-water cities.",
      },
    ],
  },
  'water-heaters__post-falls-id': {
    description:
      'Water heater repair in Post Falls. Tank repair, replacement, and new installs for growing neighborhoods. Call 208-290-3889.',
    intro: [
      'Post Falls water heater calls split two ways: new-construction units that fail early, and older tanks in established neighborhoods that are leaking or out of hot water. Preferred Plumbing Solutions handles both — repair when it is honest, replacement when it is not.',
      'We size tanks to household use, set them up to code, and deal with the sediment that North Idaho water leaves in the bottom of the tank. A rumbling heater is usually scale, not a mystery.',
    ],
    localFocus: [
      'Production homes in Post Falls often have the same heater closet layout. That can make a swap faster. Custom river-corridor houses may need venting or gas upgrades we check before we promise a one-day install.',
      'Builders also call us for construction punch-list heater issues. We document what failed so you are not stuck between the builder and the manufacturer.',
    ],
    faqs: [
      {
        question: 'Do you replace water heaters in Post Falls?',
        answer:
          'Yes. Standard tank replacement is one of our most common Post Falls jobs. We haul the old unit, set the new one to code, and handle the permit.',
      },
      {
        question: 'Why did my new Post Falls water heater already fail?',
        answer:
          'Install defects, skipped flushing, or a unit that was never sized for the house. We diagnose the actual failure instead of assuming you need a more expensive model.',
      },
      {
        question: 'Do you install tankless in Post Falls too?',
        answer:
          'Yes, on a dedicated tankless page. For many Post Falls homes a properly sized tank is still the better value. We will say so.',
      },
    ],
  },
  'water-heaters__hayden-id': {
    description:
      'Water heater repair in Hayden. Lake homes and inland neighborhoods. Same-day service when we can. Call 208-290-3889.',
    intro: [
      'Hayden homeowners call us when the shower goes cold or there is a puddle at the tank. Preferred Plumbing Solutions repairs and replaces water heaters for Hayden Lake properties and inland neighborhoods, including well-water homes that scale up heaters faster.',
      'We flush tanks that can still be saved, and we replace tanks that are leaking, rusting, or past a sensible repair. You get that recommendation before we start.',
    ],
    localFocus: [
      'Lake homes often keep heaters in garages or mechanical rooms that swing colder than the living space. We check freeze risk and venting, not just the thermostat.',
      'Well and city water both exist in Hayden. Well water with hardness or iron shortens tank life if nobody maintains it. Softener questions come up on a lot of these jobs for a reason.',
    ],
    faqs: [
      {
        question: 'Do you repair water heaters in Hayden?',
        answer:
          'Yes. Hayden Lake, Avondale, and inland Hayden. Repair for parts that still make sense; replacement when the tank is leaking or worn out.',
      },
      {
        question: 'My Hayden water heater is leaking. What now?',
        answer:
          'Shut the water off to the heater if you can, and call. A leaking tank is not a gasket you can ignore. We will confirm whether it is the tank, a fitting, or the T&P valve.',
      },
      {
        question: 'Does hard water in Hayden ruin water heaters?',
        answer:
          'It shortens them. Sediment insulates the burner or elements and overheats the tank. Flushing and, in many homes, a softener are how you get closer to a 10–12 year life.',
      },
    ],
  },
  'water-heaters__rathdrum-id': {
    description:
      'Water heater repair in Rathdrum. Fast response from Spirit Lake for no hot water and leaking tanks. Call 208-290-3889.',
    intro: [
      'Rathdrum is close enough to Spirit Lake that water heater repair often happens the same day during business hours. Preferred Plumbing Solutions handles no-hot-water calls, leaking tanks, and straight replacements for prairie homes and newer corridor builds.',
      'Hard water scale is a regular Rathdrum finding. We would rather flush a tank that still has life than sell you a replacement because it is easier.',
    ],
    localFocus: [
      'Frost and mineral-heavy water are why Rathdrum heaters fail from the bottom up. If we hear rumbling or see rusty water, we talk through maintenance vs. replacement with the age of the unit on the table.',
      'Gas and electric tanks are both common here. Gas swaps may need venting and combustion-air checks. We do not skip those to finish faster.',
    ],
    faqs: [
      {
        question: 'Can you fix my Rathdrum water heater today?',
        answer:
          'Often yes, Sunday through Friday 7am to 5pm. Call 208-290-3889. If the tank is leaking, replacement is usually the same-day conversation, not a patch.',
      },
      {
        question: 'How long do water heaters last in Rathdrum?',
        answer:
          'Tank units typically last 8 to 12 years here. Skip flushing and hard water can cut that short. Age plus a leak usually means replace.',
      },
      {
        question: 'Do you haul the old heater away?',
        answer:
          'Yes. Replacement includes removal and disposal of the old tank, plus a code-compliant install of the new one.',
      },
    ],
  },
  'water-heaters__sandpoint-id': {
    description:
      'Water heater repair in Sandpoint. Vacation rentals, cabins, and year-round homes. Call 208-290-3889.',
    intro: [
      'Sandpoint water heaters work harder than in milder towns: cold inlet water in winter, freeze risk in garages, and rental turnover that never lets the tank rest. Preferred Plumbing Solutions repairs and replaces tanks for year-round homes and seasonal properties on Lake Pend Oreille.',
      'We plan Sandpoint heater jobs as a real trip from Spirit Lake — parts, venting, and access confirmed before we roll — so you are not waiting on a second visit for a fitting we could have brought.',
    ],
    localFocus: [
      'Cabins that sit empty need freeze protection more than they need a bigger tank. We see split valves and tanks that failed after a cold week with the heat set too low.',
      'Bonner County permits and access roads matter. Tell us about snow, steep drives, and whether the unit is in a crawl, garage, or interior closet.',
    ],
    faqs: [
      {
        question: 'Do you replace water heaters in Sandpoint?',
        answer:
          'Yes. We schedule Sandpoint replacements with travel in mind so the tank, expansion tank, and fittings are on the truck.',
      },
      {
        question: 'The rental has no hot water. Can you help?',
        answer:
          'Yes, during business hours. Vacation rentals with stacked showers are a common Sandpoint call. We repair if it is honest; we replace if guests will be back in the same situation next weekend.',
      },
      {
        question: 'Is tankless better for a Sandpoint cabin?',
        answer:
          'Sometimes, especially for space and freeze-aware installs. It is not automatic. Sizing for cold inlet water is mandatory here. Ask us — we install both.',
      },
    ],
  },

  'sewer-line__coeur-dalene-id': {
    description:
      "Sewer line repair in Coeur d'Alene. Camera inspection, trenchless options, and replacement when the pipe is done. Call 208-290-3889.",
    intro: [
      "Recurring backups in a Coeur d'Alene home are often roots, a belly, or a failing main — not a plunger problem. Preferred Plumbing Solutions cameras the line first, then repairs a localized defect or replaces the sewer when the pipe is too far gone.",
      "Downtown, waterfront, and hillside properties have different access and soil. We would rather show you the video than sell a full replacement because the first cleanout we opened looked ugly.",
    ],
    localFocus: [
      "Older lakeside laterals mix clay, orangeburg-era materials, and later PVC patches. City of Coeur d'Alene permitting applies to most replacements. We handle that paperwork.",
      "Trenchless is possible on many CDA lots when depth, pipe condition, and landscaping favor it. Tight lake lots are exactly where less digging matters. Traditional trench is still the right call when the pipe has collapsed or the alignment is wrong.",
    ],
    faqs: [
      {
        question: "Do you repair sewer lines in Coeur d'Alene?",
        answer:
          "Yes. Spot repair when the damage is local. Full replacement when the camera shows widespread failure. Drain cleaning is a different service if the pipe is intact and just clogged.",
      },
      {
        question: "Can you do trenchless sewer work in Coeur d'Alene?",
        answer:
          "Often. We assess depth, condition, and soil. Pipe bursting or lining is not a fit for every waterfront lot, and we will say so.",
      },
      {
        question: "How do I know I need sewer repair and not just a cleaning?",
        answer:
          "Multiple fixtures backing up, sewage smells, wet spots in the yard, or a clog that returns after cleaning. The camera is what settles it.",
      },
    ],
  },
  'sewer-line__post-falls-id': {
    description:
      'Sewer line repair in Post Falls. Camera diagnostics for new builds and older neighborhoods. Call 208-290-3889.',
    intro: [
      'Post Falls sewers are a mix of new PVC and older laterals under denser development than they were designed for. Preferred Plumbing Solutions inspects with a camera, then repairs or replaces based on what the pipe is actually doing — not a one-size backup story.',
      'New subdivisions still get bellies, poor slope, and debris left from construction. Established streets get roots and offset joints. Those are different repairs.',
    ],
    localFocus: [
      'Growth along the river and toward the highway means more shared easements and tighter yards. We plan excavation or trenchless around that so you are not surprised by access limits on install day.',
      'If a Post Falls backup is only one fixture, start with drain cleaning. If the whole house is involved, the main is the suspect and this is the page for that work.',
    ],
    faqs: [
      {
        question: 'Do you replace sewer lines in Post Falls?',
        answer:
          'Yes. Replacement when the line is failed. Repair when a section can be isolated. We camera first so you are not paying for the wrong one.',
      },
      {
        question: 'Will sewer work tear up my Post Falls yard?',
        answer:
          'Traditional replacement needs a trench. Trenchless cuts that down when the pipe and soil allow it. We restore what we disturb as cleanly as the site allows.',
      },
      {
        question: 'Do new Post Falls homes need sewer cameras?',
        answer:
          'If you have repeat backups, yes. New pipe can still be installed with a belly or a blockage. The camera is cheaper than arguing about it.',
      },
    ],
  },
  'sewer-line__hayden-id': {
    description:
      'Sewer line repair in Hayden. Camera inspection for lake homes and inland neighborhoods. Call 208-290-3889.',
    intro: [
      'Hayden sewer problems show up as slow floor drains, backups in more than one bath, or wet ground over the lateral. Preferred Plumbing Solutions cameras Hayden Lake and inland lines, then repairs a bad section or replaces the run when the pipe is finished.',
      'Lake lots can make traditional trenching painful. That is when we look hardest at trenchless — if the pipe is a candidate, not because it sounds nicer in an ad.',
    ],
    localFocus: [
      'Hayden Lake properties often combine older laterals with newer additions. We map what is actually in the ground before we quote. Inland neighborhoods more often have root intrusion and scale.',
      'If only the shower is slow, that may be a drain cleaning job. If toilets and tubs are involved, we are looking at the building drain or the sewer.',
    ],
    faqs: [
      {
        question: 'Do you repair sewers in Hayden?',
        answer:
          'Yes. Hayden Lake, Avondale, and inland Hayden. Camera, then repair or replace. We do not open the yard on a hunch.',
      },
      {
        question: 'Why does my Hayden sewer keep backing up?',
        answer:
          'Roots, grease, a belly, or a broken pipe. Repeat backups after cleaning almost always mean the pipe needs more than a cable. The camera shows which.',
      },
      {
        question: 'Do you handle permits for Hayden sewer replacement?',
        answer:
          'Yes. We take care of required permits and inspections so the new line meets local code.',
      },
    ],
  },
  'sewer-line__rathdrum-id': {
    description:
      'Sewer line repair in Rathdrum. Camera inspections and replacement with a short drive from Spirit Lake. Call 208-290-3889.',
    intro: [
      'Rathdrum sewer work is a regular run for us. Preferred Plumbing Solutions cameras the line, clears it when cleaning is the honest fix, and repairs or replaces when the pipe is cracked, offset, or full of roots.',
      'Prairie soils and frost movement around Rathdrum Mountain are hard on older laterals. A line that “always backs up in spring” is trying to tell you something.',
    ],
    localFocus: [
      'Because we are based in Spirit Lake, Rathdrum sewer diagnostics often happen without a long wait. That matters when sewage is involved and you do not want a three-day estimate cycle.',
      'Hard water and grease still clog intact pipes. We will send you to drain cleaning when the camera shows a clear, round pipe with a blockage — not a collapsed main.',
    ],
    faqs: [
      {
        question: 'Do you replace sewer lines in Rathdrum?',
        answer:
          'Yes. Full replacement and localized repair. Camera inspection first. Trenchless when the pipe and site allow it.',
      },
      {
        question: 'How long does Rathdrum sewer replacement take?',
        answer:
          'Most residential replacements are one to three days depending on length, depth, and method. We set that expectation in the estimate.',
      },
      {
        question: 'Is a gurgling toilet a sewer problem in Rathdrum?',
        answer:
          'It can be. Gurgling plus backups in more than one fixture points at the main. One toilet may just need a closet-auger and a closer look at the fixture.',
      },
    ],
  },
  'sewer-line__sandpoint-id': {
    description:
      'Sewer line repair in Sandpoint. Bonner County soil, frost depth, and camera-first diagnostics. Call 208-290-3889.',
    intro: [
      'Sandpoint sewer lines deal with frost, seasonal occupancy, and a mix of septic-adjacent properties and city laterals. Preferred Plumbing Solutions travels from Spirit Lake for camera inspections, repairs, and replacements that have to hold up in Bonner County winters.',
      'Vacation rentals with wipes and grease in the line are a common backup source. That might be a cleaning. Repeated whole-house backups are usually the pipe.',
    ],
    localFocus: [
      'Frost depth changes burial and insulation decisions on any new run. We do not copy a Coeur d\'Alene install onto a Sandpoint hillside and hope.',
      'Access, snow, and steep lots affect method. Tell us about the lateral path, trees, and whether the property is on sewer or still tied into a tank — those are different jobs.',
    ],
    faqs: [
      {
        question: 'Do you repair sewer lines in Sandpoint?',
        answer:
          'Yes. We schedule Sandpoint sewer work with travel and parts planned. Camera first, then repair or replace.',
      },
      {
        question: 'My Sandpoint cabin backs up when guests arrive. Why?',
        answer:
          'Heavy use hits a line that was barely keeping up, or wipes and grease that sat while the place was empty. We camera it. Cleaning vs. replacement depends on what we see.',
      },
      {
        question: 'Do you work on septic instead of sewer in Sandpoint?',
        answer:
          'Many Bonner County properties are on septic. If that is you, see our septic page. This page is for sewer laterals and mains. We will sort that out on the call.',
      },
    ],
  },

  'drain-cleaning__coeur-dalene-id': {
    description:
      "Drain cleaning in Coeur d'Alene. Clogged sinks, showers, and mains. Hydro jetting when a cable will not last. Call 208-290-3889.",
    intro: [
      "A Coeur d'Alene kitchen sink that will not drain, or a shower that pools around your feet, is usually grease, hair, and hard-water scale — not a doomed sewer. Preferred Plumbing Solutions clears fixture drains and building lines, and we camera when the clog comes back.",
      "Restaurants and older lake homes are where we use hydro jetting more often. A cable that pokes a hole through grease is why the same sink overflows next Friday.",
    ],
    localFocus: [
      "Waterfront rentals and downtown commercial kitchens load drains differently than a quiet residential street. We ask what is going down the sink before we pick the tool.",
      "If every fixture in the house is backing up, that is no longer a sink clog — that is the main, and we shift to sewer diagnosis. One slow shower stays on this page.",
    ],
    faqs: [
      {
        question: "Do you unclog drains in Coeur d'Alene?",
        answer:
          "Yes. Sinks, showers, tubs, toilets, and main lines. Same-day windows are often available during business hours.",
      },
      {
        question: "Do you hydro jet in Coeur d'Alene?",
        answer:
          "Yes, when grease or scale will just reform after a cable. We do not jet every drain by default.",
      },
      {
        question: "When is a clogged Coeur d'Alene drain an emergency?",
        answer:
          "Sewage coming up a floor drain, or water overflowing where it can hit flooring and cabinets. A slow bathroom sink can usually wait for a scheduled visit.",
      },
    ],
  },
  'drain-cleaning__post-falls-id': {
    description:
      'Drain cleaning in Post Falls. New-home punch lists and older clogged lines. Hydro jetting available. Call 208-290-3889.',
    intro: [
      'Post Falls drain calls include construction debris in new lines and grease in established kitchens. Preferred Plumbing Solutions clears both. We would rather pull a rag or a hunk of drywall mud out of a new drain than pretend you need a sewer replacement.',
      'When the clog is grease or scale, jetting lasts longer than a cable. When the camera shows a broken pipe, we stop cleaning and talk sewer repair.',
    ],
    localFocus: [
      'New Post Falls homes still clog. Leftover tape, mud, and undersized venting show up on punch lists. We see it often enough that we look for it.',
      'River-adjacent older homes collect more hair and mineral scale in long shower runs. That is a cleaning job until the camera says otherwise.',
    ],
    faqs: [
      {
        question: 'Do you clean drains in Post Falls?',
        answer:
          'Yes. Residential and light commercial. Kitchen, bath, laundry, and mains.',
      },
      {
        question: 'My brand-new Post Falls house already clogs. Why?',
        answer:
          'Debris left in the line, a poor slope, or a blockage at a fitting. We clear it and camera if it repeats so you know if the builder has a real pipe problem.',
      },
      {
        question: 'How much is drain cleaning in Post Falls?',
        answer:
          'Most residential jobs are a few hundred dollars depending on access and whether we need a camera or jetter. We quote before we start.',
      },
    ],
  },
  'drain-cleaning__hayden-id': {
    description:
      'Drain cleaning in Hayden. Slow showers, kitchen backups, and main line clogs. Call 208-290-3889.',
    intro: [
      'Hayden Lake weekend traffic and everyday inland homes both clog drains: hair in showers, grease in kitchens, wipes in toilets. Preferred Plumbing Solutions clears them and checks whether the rest of the house is involved.',
      'Well-water homes can scale drains faster. If every cleaning lasts a month, we talk about the water and the pipe, not another cable next month.',
    ],
    localFocus: [
      'Lake rentals that sit, then fill with guests, often hit a drain that was already narrowing. That is preventable with a real cleaning before peak season.',
      'A single slow lavatory is not a sewer emergency. Several fixtures plus a floor drain is. We sort that on the phone so the right truck shows up.',
    ],
    faqs: [
      {
        question: 'Do you unclog showers in Hayden?',
        answer:
          'Yes. Slow shower drains are one of the most common Hayden calls. Hair and soap scum in hard water. We clear the line, not just the strainer.',
      },
      {
        question: 'Can you come to Hayden Lake the same day?',
        answer:
          'Often during business hours. Call 208-290-3889. Overflowing fixtures get priority over a slightly slow sink.',
      },
      {
        question: 'Is hydro jetting safe for older Hayden pipes?',
        answer:
          'On sound pipe, yes. On failing clay or collapsed line, jetting is the wrong tool. That is why we camera when the clog history is ugly.',
      },
    ],
  },
  'drain-cleaning__rathdrum-id': {
    description:
      'Drain cleaning in Rathdrum. Fast response from Spirit Lake for clogged sinks, showers, and mains. Call 208-290-3889.',
    intro: [
      'Rathdrum drain cleaning is a short dispatch from Spirit Lake. Preferred Plumbing Solutions clears kitchen, bath, and main drains during business hours, and we are honest when the clog is really a sewer defect.',
      'Hard water and grease are the usual pair. A disposal that has been fed potato peels and fat will keep calling until the line is actually cleaned, not poked.',
    ],
    localFocus: [
      'Same-day Rathdrum drain windows are realistic Sunday through Friday because of the drive time. That is one reason homeowners here call us instead of waiting on a regional chain.',
      'If the backup is sewage in a floor drain, treat it as emergency plumbing. If it is one sink, this is the service you want.',
    ],
    faqs: [
      {
        question: 'Do you do drain cleaning in Rathdrum?',
        answer:
          'Yes. Sinks, showers, toilets, laundry, and main lines. Hydro jetting when a cable will not hold.',
      },
      {
        question: 'Why does my Rathdrum kitchen sink keep backing up?',
        answer:
          'Grease on the pipe wall. A cable opens a hole; the grease is still there. Jetting or a thorough clean is what stops the weekly repeat.',
      },
      {
        question: 'Do I need a camera for a clogged Rathdrum drain?',
        answer:
          'Not always. First-time simple clogs often do not. Repeat backups, multiple fixtures, or sewage smells — then yes.',
      },
    ],
  },
  'drain-cleaning__sandpoint-id': {
    description:
      'Drain cleaning in Sandpoint. Cabins, rentals, and year-round homes. Grease, hair, and main line clogs. Call 208-290-3889.',
    intro: [
      'Sandpoint drains take abuse from vacation rentals, seasonal shut-downs, and grease that sits in a cold line. Preferred Plumbing Solutions clears those clogs and cameras the pipe when Sandpoint backups keep returning.',
      'We plan the trip from Spirit Lake so the machine matches the job: cable for a simple hair clog, jetter and camera when the history says this is not a one-off.',
    ],
    localFocus: [
      'Lake Pend Oreille cabins often have long runs and older traps. Access through snow or a steep lot is worth mentioning when you book.',
      'Wipes in a rental toilet are not “flushable” in a Sandpoint lateral. We pull them. If the camera then shows roots or a break, that becomes sewer repair.',
    ],
    faqs: [
      {
        question: 'Do you unclog drains in Sandpoint?',
        answer:
          'Yes. We schedule Sandpoint drain cleaning with travel in mind. Emergency overflowing sewage is a same-day conversation during business hours.',
      },
      {
        question: 'The rental backs up every time we have guests. Why?',
        answer:
          'The line was already dirty and guest load pushed it over. Cleaning before occupancy, plus a camera if it repeats, is cheaper than another weekend of standing water.',
      },
      {
        question: 'Do you hydro jet in Sandpoint?',
        answer:
          'Yes when grease or scale is the problem and the pipe is sound. We will not jet a line that is ready to split.',
      },
    ],
  },
}

function buildTitle(serviceSlug: ServiceCityServiceSlug, city: string): string {
  const phrase = SERVICE_PHRASES[serviceSlug].title
  const candidates = [
    `${phrase} in ${city}`,
    `${phrase} ${city}`,
    phrase,
  ]
  for (const candidate of candidates) {
    if (candidate.length + BRAND_LEN <= TITLE_MAX) return candidate
  }
  return phrase
}

export function isServiceCityCombo(serviceSlug: string, citySlug: string): boolean {
  return (
    (SERVICE_CITY_SERVICES as readonly string[]).includes(serviceSlug) &&
    (SERVICE_CITY_CITIES as readonly string[]).includes(citySlug)
  )
}

export function serviceCityPath(serviceSlug: string, citySlug: string): string {
  return `/services/${serviceSlug}/${citySlug}`
}

/** Link to the city-specific service page when it exists; otherwise the service hub. */
export function serviceHrefForCity(serviceSlug: string, citySlug: string): string {
  if (isServiceCityCombo(serviceSlug, citySlug)) {
    return serviceCityPath(serviceSlug, citySlug)
  }
  return `/services/${serviceSlug}`
}

export function getServiceCityPage(
  serviceSlug: string,
  citySlug: string,
): ServiceCityPage | undefined {
  if (!isServiceCityCombo(serviceSlug, citySlug)) return undefined
  const area = areas.find((item) => item.slug === citySlug)
  const copy = COPY[comboKey(serviceSlug, citySlug)]
  if (!area || !copy) return undefined

  const phrases = SERVICE_PHRASES[serviceSlug as ServiceCityServiceSlug]
  return {
    serviceSlug: serviceSlug as ServiceCityServiceSlug,
    citySlug: citySlug as ServiceCityCitySlug,
    title: buildTitle(serviceSlug as ServiceCityServiceSlug, area.city),
    h1: `${phrases.h1} in ${area.fullName}`,
    description: copy.description,
    intro: copy.intro,
    localFocus: copy.localFocus,
    faqs: copy.faqs,
    path: serviceCityPath(serviceSlug, citySlug),
  }
}

export function getAllServiceCityPages(): ServiceCityPage[] {
  const pages: ServiceCityPage[] = []
  for (const serviceSlug of SERVICE_CITY_SERVICES) {
    for (const citySlug of SERVICE_CITY_CITIES) {
      const page = getServiceCityPage(serviceSlug, citySlug)
      if (page) pages.push(page)
    }
  }
  return pages
}

export function getServiceCityParams() {
  return getAllServiceCityPages().map((page) => ({
    slug: page.serviceSlug,
    city: page.citySlug,
  }))
}

export function siblingServiceCityLinks(serviceSlug: string, citySlug: string) {
  return SERVICE_CITY_CITIES.filter((slug) => slug !== citySlug)
    .map((slug) => {
      const page = getServiceCityPage(serviceSlug, slug)
      const area = areas.find((item) => item.slug === slug)
      if (!page || !area) return null
      return { href: page.path, label: area.city }
    })
    .filter((item): item is { href: string; label: string } => Boolean(item))
}

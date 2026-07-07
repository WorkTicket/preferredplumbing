import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight, Star, Clock, Shield, Navigation, CheckCircle } from 'lucide-react'
import { areas, services } from '@/lib/data'
import { generateMetadata as genMeta, siteUrl, siteName } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import ContactForm from '@/components/ui/ContactForm'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/ui/ServiceCard'

interface Props {
  params: { city: string }
}

const cityLandmarks: Record<string, string[]> = {
  'spirit-lake-id': ['Spirit Lake', 'Twin Lakes', 'Farragut State Park'],
  'coeur-dalene-id': ["Coeur d'Alene Lake", 'Silverwood Theme Park', 'Tubbs Hill'],
  'post-falls-id': ['Q\'emiln Park', 'Falls Park', 'Spokane River'],
  'sandpoint-id': ['Schweitzer Mountain Resort', 'Lake Pend Oreille', 'City Beach'],
  'hayden-id': ['Hayden Lake', 'Honeysuckle Beach', 'Avondale Golf Course'],
  'rathdrum-id': ['Rathdrum Mountain', 'Mountain View Park', 'Spokane River'],
  'moscow-id': ['University of Idaho', 'Moscow Mountain', 'Paradise Path'],
  'bellevue-id': ['Wood River Valley', 'Silver Creek Preserve', 'Big Wood River'],
  'priest-river-id': ['Priest Lake', 'Kaniksu National Forest', 'Pend Oreille River'],
  'athol-id': ['Silverwood Theme Park', 'Farragut State Park', 'Athol Bay'],
  'blanchard-id': ['Blanchard Lake', 'Cocolalla Lake', 'Pend Oreille River'],
  'clark-fork-id': ['Lake Pend Oreille', 'Clark Fork River', 'Cabinet Mountains'],
  'newport-wa': ['Pend Oreille River', 'Newport-Oldtown Bridge', 'Box Canyon Dam'],
  'mead-wa': ['Little Spokane River', 'Mount Spokane', 'Riverside State Park'],
  'chattaroy-wa': ['Little Spokane River', 'Mount Spokane', 'Riverside State Park'],
  'oldtown-id': ['Pend Oreille River', 'Newport-Oldtown Bridge', 'Box Canyon Dam'],
}

const areaServices = [
  { slug: 'emergency', label: 'Emergency Plumbing' },
  { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
  { slug: 'sewer-line', label: 'Sewer Line Replacement' },
  { slug: 'septic-systems', label: 'Septic Systems' },
  { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
  { slug: 'new-construction', label: 'New Construction Plumbing' },
]

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const area = areas.find((a) => a.slug === params.city)
  if (!area) return {}
  return genMeta({
    title: `Plumber in ${area.fullName}`,
    description: `Top-rated plumber serving ${area.fullName} and surrounding areas. 38+ years experience, licensed & insured, 24/7 emergency service. Call Preferred Plumbing Solutions at 208-290-3889 for a free quote.`,
    slug: `areas/${params.city}`,
    canonical: `${siteUrl}/areas/${params.city}`,
  })
}

export default function CityPage({ params }: Props) {
  const area = areas.find((a) => a.slug === params.city)
  if (!area) notFound()

  const landmarks = cityLandmarks[area.slug] || [area.city]
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${area.latitude},${area.longitude}&destination_place_id=${encodeURIComponent(area.city)}`

  const areaBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: `Preferred Plumbing Solutions - ${area.fullName}`,
    url: `${siteUrl}/areas/${area.slug}`,
    description: `Trusted plumber serving ${area.fullName}. 38+ years experience, licensed, 24/7 emergency service.`,
    telephone: '+12082903889',
    areaServed: {
      '@type': 'City',
      name: area.city,
      sameAs: `https://en.wikipedia.org/wiki/${encodeURIComponent(area.city)}`,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: area.city,
      addressRegion: area.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: area.latitude,
      longitude: area.longitude,
    },
    priceRange: '$$',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '07:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '07:00', closes: '17:00', description: 'Emergency services only' },
    ],
    parentOrganization: {
      '@type': 'Plumber',
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
    },
    award: '38+ Years Serving North Idaho',
  }

  return (
    <div className="pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: siteUrl },
              { name: 'Service Areas', url: `${siteUrl}/areas-we-serve` },
              { name: area.fullName, url: `${siteUrl}/areas/${area.slug}` },
            ])
          ),
        }}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text={area.city} />
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
            {area.city === 'Spirit Lake' ? 'Trusted' : 'Top-Rated'} Plumber in {area.fullName}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 text-green-600 font-semibold">
              <Star className="h-4 w-4 fill-current" /> Free Estimates
            </span>
            <span className="inline-flex items-center gap-1.5 text-gray-500">
              <Shield className="h-4 w-4" /> Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1.5 text-blue font-semibold">
              <Clock className="h-4 w-4" /> 24/7 Emergency Service
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed text-base sm:text-lg">
            Preferred Plumbing Solutions is your trusted local plumber serving {area.fullName} and all surrounding areas throughout {area.state === 'ID' ? 'Kootenai and Bonner Counties' : 'Spokane and Pend Oreille Counties'}.
            With over 38 years of experience, we provide expert plumbing services including new construction plumbing,
            water heater installation and repair, radiant floor heating, sewer line replacement, septic systems,
            and 24/7 emergency plumbing repairs.
          </p>
          <p className="mt-3 max-w-3xl text-gray-500 text-sm sm:text-base">
            Located in Spirit Lake, we serve {area.city} and nearby communities with fast response times,
            upfront pricing, and workmanship backed by decades of North Idaho plumbing expertise.
            Whether you need a simple faucet repair or a full bathroom remodel, our licensed plumbers deliver results that last.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <a href="tel:12082903889" className="btn-primary">
              <Phone className="h-5 w-5" /> Call (208) 290-3889
            </a>
            <Link href="/contact" className="btn-secondary">
              Get Free Quote <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ── POPULAR SERVICES IN AREA ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <SectionLabel text={`Services in ${area.city}`} />
          <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Plumbing Services<br />
            <span className="text-blue">Available in {area.city}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            We offer a full range of plumbing services to homeowners and businesses in {area.fullName}. 
            Here are the most requested services in your area:
          </p>
          <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {areaServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-premium transition-all hover:border-blue/30 hover:bg-blue/5 hover:-translate-y-0.5"
              >
                <CheckCircle className="h-5 w-5 text-blue shrink-0" />
                <span className="font-medium text-gray-700 text-sm">{s.label}</span>
                <ChevronRight className="h-4 w-4 text-blue ml-auto shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <SectionLabel text="Our Services" />
          <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            All Services Available<br />
            <span className="text-blue">in {area.city}</span>
          </h2>
          <div className="mt-8 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                href={`/services/${service.slug}`}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL LANDMARKS & COMMUNITY ── */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text={`About ${area.city}`} />
          <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Proudly Serving<br />
            <span className="text-blue">the {area.city} Community</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
            {area.city} is a wonderful community, and we&apos;re proud to be the go-to plumbing contractor for 
            homes and businesses in the area. Our team knows the local plumbing codes, water conditions, and 
            building requirements specific to {area.fullName} and the surrounding region.
          </p>
          <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed">
            We serve {area.city} and nearby areas including {landmarks.join(', ')}. Wherever you are in 
            the {area.state === 'ID' ? 'Idaho Panhandle' : 'Eastern Washington'} region, 
            we&apos;re just a phone call away.
          </p>
          {landmarks.length > 0 && (
            <div className="mt-6">
              <h3 className="font-display text-base font-bold uppercase text-gray-900 mb-3">Local Landmarks We Serve Near {area.city}</h3>
              <div className="flex flex-wrap gap-2">
                {landmarks.map((landmark) => (
                  <span key={landmark} className="rounded-full bg-blue/10 px-3 py-1.5 text-sm font-medium text-blue">
                    {landmark}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── MAP & QUOTE ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <SectionLabel text="Service Area" />
          <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Serving <span className="text-blue">{area.city}</span><br />
            and All Surrounding Areas
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            We proudly serve {area.fullName} and all nearby communities throughout {area.state === 'ID' ? 'Kootenai County, Bonner County, and the Idaho Panhandle' : 'Spokane County and Pend Oreille County'}.
            Our team knows the local plumbing codes, soil conditions, climate challenges, and building requirements specific to this region.
          </p>
          <p className="mt-3 max-w-2xl text-gray-500 text-sm">
            From {area.city} to the surrounding communities, we provide fast, reliable plumbing services
            with transparent pricing and a 100% satisfaction guarantee.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="aspect-[16/9] overflow-hidden rounded-xl border border-gray-200 shadow-premium-md">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d${area.longitude}!3d${area.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(area.city)}!5e0!3m2!1sen!2sus!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`Map of ${area.fullName}`}
                className="h-full w-full"
              />
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-premium-md">
                <h3 className="font-display text-lg font-bold uppercase text-gray-900">Get a Free Quote</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Tell us about your {area.city} plumbing project and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="mt-4">
                  <ContactForm />
                </div>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue/30 bg-blue/5 px-5 py-3 text-sm font-semibold text-blue transition-all hover:bg-blue/10"
              >
                <Navigation className="h-4 w-4" /> Get Directions to {area.city}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-blue-dark py-10 sm:py-12">
        <div className="container-page flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xl sm:text-2xl font-bold text-white">
              Need a Plumber in {area.city}? We&apos;re Here to Help.
            </p>
            <p className="mt-1 text-sm text-blue-200">
              Same-day service available. Call now for a free estimate.
            </p>
          </div>
          <a
            href="tel:12082903889"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-blue-dark transition-all duration-300 hover:bg-blue-50 active:scale-[0.97] shadow-premium-lg"
          >
            <Phone className="h-5 w-5" /> (208) 290-3889
          </a>
        </div>
      </section>
    </div>
  )
}

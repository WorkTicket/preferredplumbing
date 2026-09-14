import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Phone, ChevronRight, Star, Clock, Shield, Navigation, CheckCircle, ArrowRight } from 'lucide-react'
import { areas, services } from '@/lib/data'
import { extrasForArea } from '@/lib/data/area-extras'
import { generateMetadata as genMeta, siteUrl } from '@/lib/seo'
import { citySeoDescription, citySeoTitle, areaFaqs, areaServicesForCity } from '@/lib/area-seo'
import { serviceHrefForCity } from '@/lib/data/service-city'
import { areaPlumberSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/ui/ServiceCard'
import FaqAccordionList from '@/components/ui/FaqAccordionList'
import CtaBand from '@/components/ui/CtaBand'
import ResponsiveImage from '@/components/ui/ResponsiveImage'
import { PHONE_DISPLAY, PHONE_HREF, DIRECTIONS_URL } from '@/lib/utils'
import { getPostsForArea } from '@/data/blog'

function regionLabel(slug: string, state: string): string {
  if (state === 'WA') {
    if (slug === 'newport-wa') return 'Pend Oreille County'
    return 'Spokane and Pend Oreille Counties'
  }
  if (slug === 'moscow-id') return 'Latah County and the Palouse'
  if (['sandpoint-id', 'priest-river-id', 'clark-fork-id', 'oldtown-id'].includes(slug)) {
    return 'Bonner County'
  }
  return 'Kootenai and Bonner Counties'
}

const ContactForm = dynamic(() => import('@/components/ui/ContactForm'))

interface Props {
  params: Promise<{ city: string }>
}

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const area = areas.find((a) => a.slug === city)
  if (!area) return {}
  return genMeta({
    title: citySeoTitle(area),
    description: citySeoDescription(area),
    slug: `areas/${city}`,
    canonical: `${siteUrl}/areas/${city}`,
    keywords: [
      `plumber ${area.city} ${area.state}`,
      `plumber in ${area.fullName}`,
      `emergency plumber ${area.city}`,
      `${area.city} plumbing contractor`,
      'Preferred Plumbing Solutions',
    ],
  })
}

export default async function CityPage({ params }: Props) {
  const { city } = await params
  const area = areas.find((a) => a.slug === city)
  if (!area) notFound()

  const extras = extrasForArea(area)
  const landmarks = extras.neighborhoods
  const faqs = areaFaqs(area)
  const cityServices = areaServicesForCity(area.slug)
  const basedHere = area.slug === 'spirit-lake-id'
  const relatedPosts = getPostsForArea(`/areas/${area.slug}`, 3)
  const shopDirectionsUrl = DIRECTIONS_URL
  const cityMapUrl = `https://www.google.com/maps/dir/?api=1&destination=${area.latitude},${area.longitude}&destination_place_id=${encodeURIComponent(area.city)}`

  return (
    <div className="pt-site-header">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaPlumberSchema(area)) }}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text={area.city} />
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
            Plumber in {area.fullName}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 text-green-600 font-semibold">
              <Star className="h-4 w-4 fill-current" /> Free Estimates
            </span>
            {extras.ctaNote && (
              <span className="inline-flex items-center gap-1.5 text-green-600 font-semibold">
                <CheckCircle className="h-4 w-4" /> No Dispatch Fee
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-gray-500">
              <Shield className="h-4 w-4" /> Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1.5 text-blue font-semibold">
              <Clock className="h-4 w-4" /> Emergency Service
            </span>
          </div>
          {area.pageIntro.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 48)}
              className={
                index === 0
                  ? 'mt-4 max-w-3xl text-gray-600 leading-relaxed text-base sm:text-lg'
                  : 'mt-3 max-w-3xl text-gray-500 leading-relaxed text-sm sm:text-base'
              }
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-3 max-w-3xl text-sm text-gray-500 leading-relaxed">{extras.driveTime}</p>
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <a href={PHONE_HREF} className="btn-primary">
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn-secondary">
              Get Free Quote <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href={basedHere ? shopDirectionsUrl : cityMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Navigation className="h-4 w-4" />
              {basedHere ? 'Directions to our shop' : `Map of ${area.city}`}
            </a>
          </div>
          {extras.ctaNote && (
            <p className="mt-3 max-w-3xl text-sm font-medium text-gray-700">{extras.ctaNote}</p>
          )}
        </div>
      </section>

      {extras.localPhoto && (
        <section className="bg-gray-50">
          <div className="container-page py-8 sm:py-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-gray-200 shadow-premium-md sm:aspect-[21/9]">
              <ResponsiveImage
                src={extras.localPhoto.src}
                alt={extras.localPhoto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text={`Services in ${area.city}`} />
          <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Plumbing Services<br />
            <span className="text-blue">Available in {area.city}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            These are the jobs homeowners and businesses in {area.fullName} ask for most:
          </p>
          <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cityServices.map((s) => (
              <Link
                key={s.slug}
                href={serviceHrefForCity(s.slug, area.slug)}
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

      {extras.comboSections && extras.comboSections.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-page">
            <SectionLabel text={`${area.city} jobs`} />
            <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
              Common plumbing work<br />
              <span className="text-blue">in {area.city}</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Specific jobs we handle around {area.fullName} — not a swapped city name on a generic template.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {extras.comboSections.map((section) => (
                <article
                  key={section.slug}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-premium sm:p-6"
                >
                  <h3 className="font-display text-lg font-bold uppercase text-gray-900">
                    {section.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{section.body}</p>
                  <Link
                    href={serviceHrefForCity(section.slug, area.slug)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline"
                  >
                    {section.heading.replace(/ in .+$/, '')} service page
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text={`${area.city} FAQs`} />
          <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Plumbing Questions<br />
            <span className="text-blue">in {area.city}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Common questions from homeowners and builders in {area.fullName}.
          </p>
          <div className="mt-8 max-w-4xl">
            <FaqAccordionList items={faqs} idPrefix={`area-${area.slug}`} />
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
                slug={service.slug}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text={`About ${area.city}`} />
          <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Serving<br />
            <span className="text-blue">the {area.city} Community</span>
          </h2>
          {area.localFocus.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 48)}
              className={`${index === 0 ? 'mt-4' : 'mt-3'} max-w-2xl text-gray-600 leading-relaxed`}
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed">
            Neighborhoods and landmarks we work around include {landmarks.join(', ')}. If you are in the{' '}
            {area.state === 'ID' ? 'Idaho Panhandle' : 'Eastern Washington'} region, call us and we will get you on
            the schedule.
          </p>
          {landmarks.length > 0 && (
            <div className="mt-6">
              <h3 className="font-display text-base font-bold uppercase text-gray-900 mb-3">
                Local Landmarks We Serve Near {area.city}
              </h3>
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

      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-page">
            <SectionLabel text="Guides" />
            <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
              Local reading<br />
              <span className="text-blue">for {area.city}</span>
            </h2>
            <div className="mt-8 flex flex-col gap-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group inline-flex items-center gap-2 border-b border-transparent pb-0.5 font-display text-sm font-bold uppercase tracking-wide text-gray-700 transition-colors hover:border-blue hover:text-blue"
                >
                  {post.title}
                  <ArrowRight className="h-4 w-4 text-blue transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text="Service Area" />
          <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Serving <span className="text-blue">{area.city}</span><br />
            and All Surrounding Areas
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600">{area.mapBlurb}</p>
          <p className="mt-3 max-w-2xl text-gray-500 text-sm">
            Serving {regionLabel(area.slug, area.state)} from our Spirit Lake shop. Licensed in Idaho
            {area.state === 'WA' ? ' and Washington' : ''} with clear pricing before work starts.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="aspect-[16/9] overflow-hidden rounded-xl border border-gray-200 shadow-premium-md">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d${area.longitude}!3d${area.latitude}!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(area.city)}!5e0!3m2!1sen!2sus!4v1`}
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
                  {extras.ctaNote
                    ? extras.ctaNote
                    : `Tell us about your ${area.city} plumbing project and we'll get back to you within 24 hours.`}
                </p>
                <div className="mt-4">
                  <ContactForm formLocation={`area_${area.slug}`} />
                </div>
              </div>
              <a
                href={shopDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue/30 bg-blue/5 px-5 py-3 text-sm font-semibold text-blue transition-all hover:bg-blue/10"
              >
                <Navigation className="h-4 w-4" /> Directions to our Spirit Lake shop
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        message={`Need a plumber in ${area.city}? Call us.`}
        subtitle={
          extras.ctaBandSubtitle ||
          'Same-day service available. Call now for a free estimate.'
        }
      />
    </div>
  )
}

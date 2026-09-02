import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Phone, MapPin, Clock, Navigation } from 'lucide-react'
import TrackPageEvent from '@/components/analytics/TrackPageEvent'
import { generateMetadata, siteUrl } from '@/lib/seo'
import { contactPointSchema, postalAddressSchema, servedCityPlaces } from '@/lib/schema'
import LazyMapEmbed from '@/components/ui/LazyMapEmbed'
import { PHONE, PHONE_HREF, MAP_EMBED_URL, DIRECTIONS_URL, PHONE_E164 } from '@/lib/utils'
import ContactEmailList from '@/components/ui/ContactEmailList'
import PageHero from '@/components/sections/PageHero'

const ContactForm = dynamic(() => import('@/components/ui/ContactForm'))

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description: `Get a free plumbing quote from Preferred Plumbing Solutions. Call ${PHONE} or fill out our online form. Serving Spirit Lake and North Idaho.`,
  slug: 'contact',
  canonical: `${siteUrl}/contact`,
})

export default function ContactPage() {
  const directionsUrl = DIRECTIONS_URL

  return (
    <div className="pt-site-header">
      <TrackPageEvent event="contact_page_view" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Preferred Plumbing Solutions',
            description: `Get a free plumbing quote from Preferred Plumbing Solutions. Call ${PHONE}.`,
            url: `${siteUrl}/contact`,
            mainEntity: {
              '@type': 'Plumber',
              name: 'Preferred Plumbing Solutions',
              telephone: PHONE_E164,
              url: siteUrl,
              areaServed: servedCityPlaces().map((city) => city.name),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPointSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(postalAddressSchema()),
        }}
      />
      <PageHero
        label="Contact Us"
        title={<>Get Your Free<br /><span className="text-blue-300">Plumbing Quote</span></>}
        description="Call us or fill out the form. We'll get back to you within 24 hours. Emergency service available Sun–Fri 7am–5pm (closed Saturday)."
        image="/images/hero-contact.webp"
        imageAlt="Contact Preferred Plumbing Solutions for a free plumbing quote"
        priority
      >
        <a href={PHONE_HREF} className="btn-primary-lg">
          <Phone className="h-5 w-5" /> Call {PHONE}
        </a>
      </PageHero>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-premium-md">
                <h2 className="font-display text-base sm:text-lg font-bold uppercase text-gray-900">Request a Free Quote</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Tell us what you need and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="mt-4">
                  <ContactForm formLocation="contact_page" />
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1 space-y-6 lg:col-span-2">
              <div className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-premium-md">
                <h2 className="font-display text-base sm:text-lg font-bold uppercase text-gray-900">Contact Information</h2>
                <div className="mt-4 space-y-3 sm:space-y-4">
                  <a href={PHONE_HREF} className="flex items-center gap-3 text-gray-700 transition hover:text-blue group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 group-hover:bg-blue transition-colors">
                      <Phone className="h-5 w-5 text-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <span className="font-semibold">{PHONE}</span>
                    </div>
                  </a>
                  <ContactEmailList />
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10">
                      <MapPin className="h-5 w-5 text-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <span>Spirit Lake, ID 83869</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-500">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 shrink-0">
                      <Clock className="h-5 w-5 text-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Hours</p>
                      <span>Sun–Fri 7am–5pm<br />Sat Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-premium-md">
                <h3 className="font-display text-base font-bold uppercase text-gray-900">Service Areas</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Serving communities across North Idaho and Eastern Washington.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['Spirit Lake', "Coeur d'Alene", 'Post Falls', 'Sandpoint', 'Hayden', 'Rathdrum', 'Athol', 'Priest River', 'Blanchard', 'Moscow', 'Clark Fork', 'Oldtown', 'Newport', 'Chattaroy', 'Mead'].map((city) => (
                    <span key={city} className="rounded-full bg-blue/10 px-2.5 py-1 text-xs font-medium text-blue">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 shadow-premium-md">
                <LazyMapEmbed
                  src={MAP_EMBED_URL}
                  title="Preferred Plumbing Solutions - Spirit Lake, Idaho Service Area Map"
                />
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue/30 bg-blue/5 px-5 py-3 text-sm font-semibold text-blue transition-all hover:bg-blue/10"
              >
                <Navigation className="h-4 w-4" /> Get Directions to Spirit Lake
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Star, Navigation } from 'lucide-react'
import { generateMetadata, siteUrl } from '@/lib/seo'
import { contactPointSchema, postalAddressSchema } from '@/lib/schema'
import ContactForm from '@/components/ui/ContactForm'
import SectionLabel from '@/components/ui/SectionLabel'
import { PHONE, PHONE_HREF } from '@/lib/utils'
import ContactEmailList from '@/components/ui/ContactEmailList'

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get a free plumbing quote from Preferred Plumbing Solutions. Call 208-290-3889 or fill out our online form. 38+ years of trusted service in Spirit Lake and North Idaho.',
  slug: 'contact',
  canonical: `${siteUrl}/contact`,
})

export default function ContactPage() {
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=47.9668,-116.8693&destination_place_id=Spirit%20Lake%2C%20ID'

  return (
    <div className="pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Preferred Plumbing Solutions',
            description: 'Get a free plumbing quote from Preferred Plumbing Solutions. Call 208-290-3889.',
            url: `${siteUrl}/contact`,
            mainEntity: {
              '@type': 'Plumber',
              name: 'Preferred Plumbing Solutions',
              telephone: '+12082903889',
              url: siteUrl,
              areaServed: ['Spirit Lake', "Coeur d'Alene", 'Post Falls', 'Sandpoint', 'Hayden', 'Rathdrum'],
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
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text="Contact Us" />
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
            Get Your Free<br />
            <span className="text-blue">Plumbing Quote</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Call us or fill out the form. We&apos;ll get back to you within 24 hours. Emergency service available 24/7.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="btn-primary"
            >
              <Phone className="h-5 w-5" /> Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
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
                      <span>Mon–Fri 7am–5pm<br />24/7 Emergency Line</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-premium-md">
                <h3 className="font-display text-base font-bold uppercase text-gray-900">Service Areas</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Serving 16 cities across North Idaho and Eastern Washington.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['Spirit Lake', "Coeur d'Alene", 'Post Falls', 'Sandpoint', 'Hayden', 'Rathdrum', 'Athol', 'Priest River', 'Blanchard', 'Newport', 'Chattaroy', 'Mead'].map((city) => (
                    <span key={city} className="rounded-full bg-blue/10 px-2.5 py-1 text-xs font-medium text-blue">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 shadow-premium-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171073.44739193922!2d-116.98501708359373!3d47.966799999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5361195b0b0b0b0b%3A0x0!2sSpirit%20Lake%2C%20ID%2083869!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Preferred Plumbing Solutions - Spirit Lake, Idaho Service Area Map"
                  className="h-full w-full"
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

            <div className="lg:col-span-3">
              <div className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-premium-md">
                <h2 className="font-display text-base sm:text-lg font-bold uppercase text-gray-900">Request a Free Quote</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Tell us what you need and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="mt-4">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

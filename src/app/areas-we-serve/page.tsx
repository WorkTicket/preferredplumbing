import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, ChevronRight, MapPin, Star, Shield, Clock, HardHat } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { areas } from '@/lib/data'
import { generateMetadata, siteUrl } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Plumbing Service Areas | North Idaho & Eastern Washington',
  description: 'Preferred Plumbing Solutions serves 16 cities across North Idaho and Eastern Washington including Spirit Lake, Coeur d\'Alene, Post Falls, Sandpoint, Hayden, and more. Call 208-290-3889.',
  slug: 'areas-we-serve',
  canonical: `${siteUrl}/areas-we-serve`,
})

export default function AreasPage() {
  const idAreas = areas.filter(a => a.state === 'ID')
  const waAreas = areas.filter(a => a.state === 'WA')

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${siteUrl}/areas-we-serve` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: areas.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'City',
          name: a.fullName,
          url: `${siteUrl}/areas/${a.slug}`,
        },
      })),
    },
  ]

  return (
    <div className="pt-14 sm:pt-16">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text="Service Areas" />
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
            Plumbing Services Across<br />
            <span className="text-blue">North Idaho &amp; Eastern Washington</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            From Spirit Lake to Spokane Valley, we provide expert plumbing services to {areas.length} cities across North Idaho and Eastern Washington.
            No matter where you are in the region, we&apos;re just a phone call away.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:12082903889" className="btn-primary">
              <Phone className="h-5 w-5" /> (208) 290-3889
            </a>
            <Link href="/contact" className="btn-secondary">
              Get a Free Quote <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <SectionLabel text="Cities We Serve" />
          {idAreas.length > 0 && (
            <>
              <h2 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-black uppercase text-gray-900 leading-[0.95] mt-3">
                <span className="text-blue">Idaho</span> Service Areas
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                We serve {idAreas.length} communities across Kootenai County, Bonner County, and the Idaho Panhandle.
              </p>
              <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {idAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group rounded-xl bg-white border border-gray-200 p-5 shadow-premium transition-all hover:bg-blue hover:text-white hover:border-blue hover:-translate-y-0.5 hover:shadow-premium-md"
                  >
                    <h2 className="font-display text-lg font-bold uppercase tracking-wide text-gray-900 group-hover:text-white">
                      {area.fullName}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 group-hover:text-white/80 line-clamp-2">
                      {area.city === 'Spirit Lake' ? 'Our hometown. Where it all started and where we are based.' :
                       area.city === "Coeur d'Alene" ? 'Serving Coeur d\'Alene homes and businesses with full plumbing services.' :
                       area.city === 'Post Falls' ? 'Plumbing services for Post Falls, from new construction to emergency repairs.' :
                       area.city === 'Sandpoint' ? 'Reliable plumbing in Sandpoint, including radiant heat and new construction.' :
                       area.city === 'Hayden' ? 'Plumbing for Hayden homeowners, remodels, and local businesses.' :
                       area.city === 'Rathdrum' ? 'Full-service plumbing in Rathdrum and the surrounding area.' :
                       area.city === 'Moscow' ? 'Plumbing services in Moscow and the Palouse region.' :
                       area.city === 'Bellevue' ? 'Plumbing work in Bellevue and the Wood River Valley.' :
                       area.city === 'Priest River' ? 'Plumbing contractor for Priest River and Bonner County.' :
                       area.city === 'Athol' ? 'Plumbing services in Athol, right down the road from Spirit Lake.' :
                       area.city === 'Blanchard' ? 'Plumbing for Blanchard and North Idaho properties.' :
                       area.city === 'Clark Fork' ? 'Plumbing serving Clark Fork and Bonner County.' :
                       area.city === 'Newport' ? 'Plumbing contractor for Newport and Pend Oreille County.' :
                       area.city === 'Mead' ? 'Plumbing services in Mead and Spokane County.' :
                       area.city === 'Chattaroy' ? 'Plumbing in Chattaroy and Spokane County.' :
                       'Plumbing solutions for Oldtown and the surrounding area.'}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}
          {waAreas.length > 0 && (
            <>
              <h2 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-black uppercase text-gray-900 leading-[0.95] mt-8">
                <span className="text-blue">Washington</span> Service Areas
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                We serve {waAreas.length} communities across Spokane County and Pend Oreille County.
              </p>
              <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {waAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group rounded-xl bg-white border border-gray-200 p-5 shadow-premium transition-all hover:bg-blue hover:text-white hover:border-blue hover:-translate-y-0.5 hover:shadow-premium-md"
                  >
                    <h2 className="font-display text-lg font-bold uppercase tracking-wide text-gray-900 group-hover:text-white">
                      {area.fullName}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 group-hover:text-white/80 line-clamp-2">
                      {area.city === 'Newport' ? 'Plumbing contractor for Newport and Pend Oreille County.' :
                       area.city === 'Mead' ? 'Plumbing services in Mead and Spokane County.' :
                       'Plumbing in Chattaroy and Spokane County.'}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <SectionLabel text="Coverage Area" />
            <h2 className="font-display text-[clamp(1.8rem,5vw,2.5rem)] font-black uppercase text-gray-900 leading-[0.95]">
              Serving<br />
              <span className="text-blue">North Idaho &amp; Eastern Washington</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              You shouldn&apos;t have to hunt for a good plumber just because you live outside city limits.
              We cover 16 cities across the Idaho Panhandle and Eastern Washington, from Spirit Lake to
              Spokane Valley and everywhere in between.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              We know the local water and soil conditions around here, so we get the job done right the
              first time. And since we&apos;re close by, we can get to you fast.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue/10 px-3 py-1.5 text-xs font-semibold text-blue">
                <Shield className="h-3.5 w-3.5" /> Licensed &amp; Insured (ID &amp; WA)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue/10 px-3 py-1.5 text-xs font-semibold text-blue">
                <Clock className="h-3.5 w-3.5" /> 24/7 Emergency Service
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue/10 px-3 py-1.5 text-xs font-semibold text-blue">
                <Star className="h-3.5 w-3.5" /> Free Estimates
              </span>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get a Free Quote <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Need a plumber in your area? Call us.
          </p>
          <a
            href="tel:12082903889"
            className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex"
          >
            <Phone className="h-5 w-5" /> (208) 290-3889
          </a>
        </div>
      </section>
    </div>
  )
}

'use client'

import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/ui/ServiceCard'
import { StaggerChildren } from '@/components/animations'
import { services } from '@/lib/data'
import { SERVICE_NAV_ICONS } from '@/lib/nav-services'
import { Phone, ArrowRight, Clock, ArrowUpRight, Wrench } from 'lucide-react'
import { PHONE_HREF } from '@/lib/utils'

const featuredSlugs = [
  'emergency', 'new-construction', 'radiant-heat',
  'water-heaters', 'remodels', 'sewer-line',
]

const specialtySlugs = ['commercial', 'septic-systems', 'water-softeners']

const featuredServices = services.filter((s) => featuredSlugs.includes(s.slug))
const specialtyServices = services.filter((s) => specialtySlugs.includes(s.slug))

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="Our Services" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Plumbing for Homes,<br />
            <span className="text-blue">Businesses &amp; New Builds</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Emergency repairs, new construction, remodels. One call covers it.
          </p>
        </div>
        <StaggerChildren
          className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
          variant="fadeUp"
        >
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              slug={service.slug}
              title={service.title}
              description={service.description}
            />
          ))}
        </StaggerChildren>

        <div className="mt-14 sm:mt-16">
          <div className="text-center">
            <SectionLabel text="Specialty Services" />
            <h3 className="mt-2 font-display text-[clamp(1.5rem,5vw,2.25rem)] font-black uppercase text-gray-900 leading-[0.95]">
              What We Do <span className="text-blue">Best</span>
            </h3>
            <p className="mt-3 text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
              Commercial work, rural septic, and hard-water fixes. Three areas where 38 years on the job really shows.
            </p>
          </div>

          <StaggerChildren
            className="mt-6 sm:mt-8 grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-3"
            staggerDelay={0.07}
            variant="fadeUp"
          >
            {specialtyServices.map((service) => {
              const Icon = SERVICE_NAV_ICONS[service.slug] ?? Wrench
              const href = `/services/${service.slug}`

              return (
                <article
                  key={service.slug}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50/80 p-5 sm:p-6 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:border-blue/30 hover:shadow-premium-xl hover:ring-1 hover:ring-blue/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue transition-all duration-300 group-hover:bg-blue group-hover:text-white group-hover:shadow-premium-md">
                      <Icon className="h-7 w-7" strokeWidth={2.25} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link href={href}>
                        <h4 className="font-bold text-base sm:text-lg uppercase tracking-wide text-gray-900 transition-colors group-hover:text-blue">
                          {service.title}
                        </h4>
                      </Link>
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-all group-hover:gap-2.5"
                    >
                      Learn More
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <span className="text-gray-300">|</span>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 transition-colors hover:text-blue"
                    >
                      <Phone className="h-3.5 w-3.5" /> Call
                    </a>
                  </div>
                </article>
              )
            })}
          </StaggerChildren>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/services" className="btn-secondary">
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={PHONE_HREF} className="btn-primary">
            <Phone className="h-4 w-4" /> Call (208) 290-3889
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-blue" /> Same-day service available
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Currently accepting new projects
          </span>
        </div>
      </div>
    </section>
  )
}

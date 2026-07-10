'use client'

import Link from 'next/link'
import ResponsiveImage from '@/components/ui/ResponsiveImage'
import SectionLabel from '@/components/ui/SectionLabel'
import { StaggerChildren } from '@/components/animations'
import { IMAGE_SIZES } from '@/lib/image-sizes'
import { ArrowUpRight, Phone } from 'lucide-react'
import { PHONE_HREF } from '@/lib/utils'

const spotlightItems = [
  {
    slug: 'emergency',
    href: '/services/emergency',
    title: '24/7 Emergency Plumber',
    headline: 'Spirit Lake & North Idaho',
    description:
      'Burst pipes, sewer backups, gas leaks — we respond fast across Spirit Lake, Coeur d\'Alene, Post Falls, and the Idaho Panhandle. Available 24/7, 365 days a year.',
    image: '/images/service-emergency-plumbing-repair.webp',
    accent: 'red' as const,
  },
  {
    slug: 'radiant-heat',
    href: '/services/radiant-heat',
    title: 'Radiant Floor Heating',
    headline: 'In-Floor Heat Specialists',
    description:
      'Stay warm through Idaho winters with hydronic in-floor heating. We design and install radiant systems for new builds and retrofits across Kootenai and Bonner Counties.',
    image: '/images/service-radiant-heat-boiler.webp',
    accent: 'blue' as const,
  },
  {
    slug: 'new-construction',
    href: '/services/new-construction',
    title: 'New Construction Plumbing',
    headline: 'Custom Homes & Commercial Builds',
    description:
      'Full rough-in, underground lines, and fixture installation for new homes and commercial projects. We work with builders and architects throughout North Idaho.',
    image: '/images/service-new-construction-plumbing.webp',
    accent: 'blue' as const,
  },
]

export default function SeoSpotlight() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-transparent to-transparent pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="Specialty Services" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Expert Plumbing<br />
            <span className="text-blue">Across North Idaho</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Three core specialties that set us apart — backed by 38+ years of local experience.
          </p>
        </div>

        <StaggerChildren
          className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 grid-cols-1 lg:grid-cols-3"
          staggerDelay={0.08}
          variant="fadeUp"
        >
          {spotlightItems.map((item) => (
            <article
              key={item.slug}
              className={`group relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-premium transition-all duration-500 hover:-translate-y-1.5 hover:shadow-premium-xl hover:ring-1 ${
                item.accent === 'red'
                  ? 'border-red-200/80 hover:border-red-300 hover:ring-red-200/60'
                  : 'border-gray-200 hover:border-blue/40 hover:ring-blue/20'
              }`}
            >
              <Link href={item.href} className="relative block aspect-[16/10] w-full overflow-hidden bg-gray-200">
                <ResponsiveImage
                  src={item.image}
                  alt={`${item.title} — Preferred Plumbing Solutions, Spirit Lake ID`}
                  fill
                  className="transition-all duration-700 group-hover:scale-105"
                  sizes={IMAGE_SIZES.thirdCol}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200">
                    {item.headline}
                  </p>
                  <h3
                    className={`font-display text-xl font-black uppercase text-white leading-tight ${
                      item.accent === 'red' ? 'group-hover:text-red-200' : 'group-hover:text-blue-200'
                    } transition-colors`}
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="flex-1 text-sm text-gray-500 leading-relaxed">{item.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5 ${
                      item.accent === 'red' ? 'text-red-600' : 'text-blue'
                    }`}
                  >
                    Learn More
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-blue"
                  >
                    <Phone className="h-3.5 w-3.5" /> Call
                  </a>
                </div>
              </div>
            </article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

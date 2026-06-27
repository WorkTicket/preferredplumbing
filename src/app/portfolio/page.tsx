import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = generateMetadata({
  title: 'Project Portfolio',
  description: 'Browse completed plumbing projects by Preferred Plumbing Solutions. New construction, remodels, commercial work throughout North Idaho.',
  slug: 'portfolio',
})

const portfolioItems = [
  {
    slug: 'new-construction-spirit-lake',
    title: 'New Construction - Spirit Lake',
    location: 'Spirit Lake, ID',
    type: 'New Construction',
    description: 'Complete rough-in plumbing for a custom home.',
    image: '/images/service-new-construction-plumbing.webp',
    featured: true,
  },
  {
    slug: 'commercial-remodel-coeur-dalene',
    title: 'Commercial Remodel - Coeur d\'Alene',
    location: 'Coeur d\'Alene, ID',
    type: 'Commercial',
    description: 'Full plumbing renovation for a downtown office.',
    image: '/images/gallery-grease-trap-commercial.webp',
    featured: true,
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-14 sm:pt-16">
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text="Portfolio" />
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
            Our Project<br />
            <span className="text-blue">Portfolio</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            See examples of our plumbing and remodeling work across North Idaho.
          </p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <SectionLabel text="Featured Projects" />
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {portfolioItems.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group overflow-hidden rounded-xl bg-white border border-gray-200 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-lg hover:border-blue/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} — Preferred Plumbing Solutions, ${item.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {item.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-blue px-3 py-1 text-xs font-semibold text-white shadow-premium">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-bold uppercase text-gray-900 group-hover:text-blue">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">{item.location} · {item.type}</p>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Want to see your project here? Let&apos;s talk.
          </p>
          <a
            href="tel:12082903889"
            data-track="portfolio_cta"
            className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex"
          >
            <Phone className="h-5 w-5" /> (208) 290-3889
          </a>
        </div>
      </section>
    </div>
  )
}

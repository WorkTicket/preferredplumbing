import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowLeft } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

interface Props {
  params: { slug: string }
}

const items: Record<
  string,
  { title: string; location: string; type: string; description: string; image: string; gallery?: string[] }
> = {
  'new-construction-spirit-lake': {
    title: 'New Construction - Spirit Lake',
    location: 'Spirit Lake, ID',
    type: 'New Construction',
    description:
      'Complete rough-in plumbing for a custom home in Spirit Lake. Included underground water lines, drain and vent systems, gas line rough-in, and fixture installation.',
    image: '/images/service-new-construction-plumbing.webp',
    gallery: [
      '/images/Rough+In+Plumbing+-975e1bfd-1920w.webp',
      '/images/Ground+Rough+Plumbing+-1920w.webp',
      '/images/Meter+manifold+-1920w.webp',
    ],
  },
  'commercial-remodel-coeur-dalene': {
    title: 'Commercial Remodel - Coeur d\'Alene',
    location: 'Coeur d\'Alene, ID',
    type: 'Commercial',
    description:
      'Full plumbing renovation for a downtown Coeur d\'Alene office space. Included new restroom plumbing, kitchenette installation, and ADA-compliant fixtures.',
    image: '/images/gallery-grease-trap-commercial.webp',
    gallery: [
      '/images/Grease+Trap+Tank.webp',
      '/images/Commercial+Faucet+.webp',
      '/images/Backflow+Preventer+-1920w.webp',
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(items).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const item = items[params.slug]
  if (!item) return {}
  return {
    title: `${item.title} | Portfolio | Preferred Plumbing Solutions`,
    description: item.description.slice(0, 160),
  }
}

export default function PortfolioItemPage({ params }: Props) {
  const item = items[params.slug]
  if (!item) notFound()

  return (
    <div className="pt-14 sm:pt-16">
      <section className="relative min-h-[35vh] flex items-end">
        <Image
          src={item.image}
          alt={`${item.title} — Preferred Plumbing Solutions`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30" />
        <div className="relative z-10 container-page pb-10 pt-8">
          <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm text-blue-200 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          <SectionLabel text={item.type} />
          <p className="mt-4 text-sm text-blue-200">{item.location} · {item.type}</p>
          <h1 className="mt-2 font-display text-[clamp(2rem,6vw,3.5rem)] font-black uppercase leading-[0.95] text-white">
            {item.title}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      </section>

      {item.gallery && item.gallery.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-page">
            <SectionLabel text="Project Photos" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {item.gallery.map((photo) => (
                <div key={photo} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-premium-md">
                  <Image
                    src={photo}
                    alt={`${item.title} project photo — Preferred Plumbing Solutions`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Need similar work done? Call us for a free estimate.
          </p>
          <a
            href="tel:12082903889"
            data-track="portfolio_detail_cta"
            className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex"
          >
            <Phone className="h-5 w-5" /> (208) 290-3889
          </a>
        </div>
      </section>
    </div>
  )
}

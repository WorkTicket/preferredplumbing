import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft, ChevronRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

interface Props {
  params: { slug: string }
}

const items: Record<string, { title: string; location: string; type: string; description: string }> = {
  'new-construction-spirit-lake': {
    title: 'New Construction - Spirit Lake',
    location: 'Spirit Lake, ID',
    type: 'New Construction',
    description: 'Complete rough-in plumbing for a custom home in Spirit Lake. Included underground water lines, drain and vent systems, gas line rough-in, and fixture installation.',
  },
  'commercial-remodel-coeur-dalene': {
    title: 'Commercial Remodel - Coeur d\'Alene',
    location: 'Coeur d\'Alene, ID',
    type: 'Commercial',
    description: 'Full plumbing renovation for a downtown Coeur d\'Alene office space. Included new restroom plumbing, kitchenette installation, and ADA-compliant fixtures.',
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
      <section className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm text-gray-500 transition hover:text-blue">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          <div className="mt-4">
            <SectionLabel text={item.type} />
          </div>
          <p className="mt-4 text-sm text-gray-400">{item.location} - {item.type}</p>
          <h1 className="mt-2 font-display text-[clamp(2rem,6vw,3.5rem)] font-black uppercase leading-[0.95] text-gray-900">
            {item.title}
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Need similar work done? Call us.
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

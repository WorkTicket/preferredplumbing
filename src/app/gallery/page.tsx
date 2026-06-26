import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight, Camera } from 'lucide-react'
import { generateMetadata, siteUrl } from '@/lib/seo'
import SectionLabel from '@/components/ui/SectionLabel'
import { StatisticsBanner, GalleryGrid } from '@/components/gallery'
import { galleryProjects } from '@/data/gallery'

export const metadata: Metadata = generateMetadata({
  title: 'Plumbing Project Gallery | Spirit Lake, ID',
  description: 'Browse our completed plumbing project gallery in Spirit Lake and North Idaho. See quality craftsmanship in new construction, remodels, commercial plumbing, and more. 35+ projects.',
  slug: 'gallery',
  canonical: `${siteUrl}/gallery`,
})

export default function GalleryPage() {
  const imageObjectSchemas = galleryProjects.slice(0, 10).map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${siteUrl}${project.coverImage}`,
    name: `${project.title} - ${project.location}`,
    caption: project.description,
    description: project.description,
    representativeOfPage: false,
  }))

  return (
    <div className="pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: galleryProjects.map((project, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'CreativeWork',
                name: project.title,
                description: project.description,
                contentLocation: project.location,
                dateCreated: project.completionDate,
                image: `${siteUrl}${project.coverImage}`,
              },
            })),
          }),
        }}
      />
      {imageObjectSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/30 via-white to-white">
        <div className="section-padding">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center">
                <SectionLabel text="Gallery" />
              </div>
              <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
                Our Project<br />
                <span className="text-blue">Gallery</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Every project tells a story. From rough-in to finish trim, we photograph our work because
                we&apos;re proud of it. Browse through our gallery to see the quality and craftsmanship
                we bring to every job across North Idaho.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue" />
                  Residential
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue" />
                  Commercial
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue" />
                  New Construction
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue" />
                  Remodels
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatisticsBanner />

      {/* Gallery with filters */}
      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center py-14 sm:py-20 lg:py-24">
            <div className="flex justify-center">
              <SectionLabel text="Let&apos;s Work Together" />
            </div>
            <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
              Ready to Start Your<br />
              <span className="text-blue">Next Project?</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Whether you&apos;re building new, remodeling, or need commercial plumbing,
              we&apos;d love to hear from you. Give us a call.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:12082903889"
                className="btn-primary inline-flex"
              >
                <Phone className="h-5 w-5" /> (208) 290-3889
              </a>
              <Link
                href="/services"
                className="btn-secondary inline-flex"
              >
                Our Services <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

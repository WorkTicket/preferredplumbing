import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { generateMetadata, siteUrl } from '@/lib/seo'
import PageHero from '@/components/sections/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import { StatisticsBanner } from '@/components/gallery'
import GalleryGridSkeleton from '@/components/gallery/GalleryGridSkeleton'
import { galleryProjects, galleryProjectSummaries } from '@/data/gallery'
import { normalizeImageSrc } from '@/lib/responsive-image'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

const GalleryGrid = dynamic(() => import('@/components/gallery/GalleryGrid'), {
  loading: () => <GalleryGridSkeleton />,
})

export const metadata: Metadata = generateMetadata({
  title: 'Plumbing Project Gallery',
  description:
    'Browse completed plumbing jobs in Spirit Lake and North Idaho: new construction, remodels, commercial work, and more. Call 208-290-3889.',
  slug: 'gallery',
  canonical: `${siteUrl}/gallery`,
})

export default function GalleryPage() {
  const imageObjectSchemas = galleryProjects.slice(0, 10).map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${siteUrl}${normalizeImageSrc(project.coverImage)}`,
    url: `${siteUrl}${normalizeImageSrc(project.coverImage)}`,
    name: `${project.title} - ${project.location}`,
    caption: project.description,
    description: project.description,
  }))

  return (
    <div className="pt-site-header">
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
                image: `${siteUrl}${normalizeImageSrc(project.coverImage)}`,
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

      <PageHero
        label="Gallery"
        title={<>Our Project<br /><span className="text-blue-300">Gallery</span></>}
        description="We photograph our work from rough-in to finish trim. Real jobs across North Idaho."
        image="/images/hero-gallery.webp"
        imageAlt="Completed plumbing projects by Preferred Plumbing Solutions in North Idaho"
        priority
      >
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-300">
          {['Residential', 'Commercial', 'New Construction', 'Remodels'].map((tag) => (
            <span key={tag} className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-300" />
              {tag}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Statistics */}
      <StatisticsBanner />

      {/* Gallery with filters */}
      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <GalleryGrid projects={galleryProjectSummaries} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center py-14 sm:py-20 lg:py-24">
            <div className="flex justify-center">
              <SectionLabel text="Get in Touch" />
            </div>
            <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
              Got a Project<br />
              <span className="text-blue">in Mind?</span>
            </h2>
            <p className="mt-4 text-gray-600">
              New build, remodel, or commercial job?
              Give us a call. We&apos;d like to hear about it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="btn-primary inline-flex"
              >
                <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
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

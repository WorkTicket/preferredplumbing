'use client'

import Link from 'next/link'
import { Camera } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import ResponsiveImage from '@/components/ui/ResponsiveImage'
import { StaggerChildren } from '@/components/animations'
import { galleryProjects } from '@/data/gallery'
import { IMAGE_SIZES } from '@/lib/image-sizes'

const previewProjects = galleryProjects.slice(0, 6)

export default function WorkGallery() {
  if (previewProjects.length === 0) return null

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden mesh-bg-light">
      <div className="container-page relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel text="Our Work" centered />
          <h2 className="section-heading">
            Project Gallery<br />
            <span className="text-blue">Real Job Photos</span>
          </h2>
          <p className="section-subtitle-center">
            A look at recent work from across North Idaho.
          </p>
        </div>

        <StaggerChildren
          className="mt-12 sm:mt-14 grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
          variant="fadeUp"
        >
          {previewProjects.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-200 shadow-premium card-lift"
            >
              <ResponsiveImage
                src={item.coverImage}
                alt={`${item.title}, ${item.location ?? 'North Idaho'}`}
                fill
                sizes={IMAGE_SIZES.thirdCol}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent transition-opacity duration-300 group-hover:from-navy/90" />
              <div className="absolute top-3 left-3">
                <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="font-display text-sm sm:text-base font-black uppercase text-white leading-tight">
                  {item.title}
                </p>
                {item.location && (
                  <p className="mt-1 text-[11px] font-medium text-blue-light">{item.location}</p>
                )}
              </div>
            </Link>
          ))}
        </StaggerChildren>

        <div className="mt-10 sm:mt-12 flex justify-center">
          <Link href="/gallery" className="btn-primary">
            View Full Gallery <Camera className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

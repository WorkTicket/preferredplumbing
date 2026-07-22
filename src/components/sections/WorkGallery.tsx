'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Camera, Phone } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import CompareSlider from '@/components/ui/CompareSlider'
import ResponsiveImage from '@/components/ui/ResponsiveImage'
import { StaggerChildren } from '@/components/animations'
import { galleryProjects } from '@/data/gallery'
import { IMAGE_SIZES } from '@/lib/image-sizes'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

const featuredSlugs = [
  'boiler-radiant-heat',
  'gas-line-installation',
  'water-heater-replacement',
  'septic-system-installation',
]

const gridSlugs = [
  'modern-bathroom-fixtures',
  'new-construction-rough-in',
  'waste-vent-rough-in',
  'under-slab-plumbing',
  'well-pump-system',
  'water-tank-installation',
  'septic-drain-field',
  'new-construction-gas-rough-in',
  'commercial-plumbing-project',
  'shower-tub-installation',
  'boiler-mechanical-room',
]

const featuredProjects = galleryProjects.filter((p) => featuredSlugs.includes(p.slug))
const gridProjects = galleryProjects.filter((p) => gridSlugs.includes(p.slug))

export default function WorkGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const project = featuredProjects[activeIndex]

  if (!project || project.images.length < 2) return null

  const [beforeSrc, afterSrc] = project.images

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
            Recent work from across North Idaho. Drag to explore the shots.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:items-start">
          <div className="premium-card p-3 sm:p-4 shadow-premium-xl">
            <CompareSlider
              key={project.id}
              beforeSrc={beforeSrc}
              afterSrc={afterSrc}
              beforeAlt={`${project.title}, ${project.location ?? 'North Idaho'}`}
              afterAlt={`${project.title}, ${project.location ?? 'North Idaho'}`}
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-col premium-card p-6 sm:p-8">
            <span className="badge-accent w-fit">
              {project.category}
            </span>
            <h3 className="mt-4 font-display text-xl sm:text-2xl font-black uppercase text-gray-900 leading-tight">
              {project.title}
            </h3>
            {project.location && (
              <p className="mt-2 text-sm text-gray-500 font-medium">
                {project.location}
              </p>
            )}
            <p className="mt-4 flex-1 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6 -mx-6 px-6 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-none">
              <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
                {featuredProjects.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 touch-target ${
                      i === activeIndex
                        ? 'bg-blue text-white shadow-premium-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <StaggerChildren
          className="mt-10 sm:mt-12 grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
          variant="fadeUp"
        >
          {gridProjects.map((item) => (
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

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/gallery" className="btn-secondary">
            View Full Gallery <Camera className="h-4 w-4" />
          </Link>
          <a href={PHONE_HREF} className="btn-primary">
            <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}

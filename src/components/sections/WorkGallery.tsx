'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Camera, Phone, MapPin } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import CompareSlider from '@/components/ui/CompareSlider'
import ResponsiveImage from '@/components/ui/ResponsiveImage'
import { StaggerChildren } from '@/components/animations'
import { galleryProjects } from '@/data/gallery'
import { IMAGE_SIZES } from '@/lib/image-sizes'
import { PHONE_HREF } from '@/lib/utils'

const featuredSlugs = [
  'bathroom-remodel',
  'kitchen-remodel-plumbing',
  'water-heater-replacement',
  'boiler-radiant-heat',
]

const gridSlugs = [
  'modern-bathroom-fixtures',
  'shower-tub-installation',
  'commercial-grease-trap',
  'new-construction-rough-in',
  'sewer-line-replacement',
  'septic-system-installation',
]

const featuredProjects = galleryProjects.filter((p) => featuredSlugs.includes(p.slug))
const gridProjects = galleryProjects.filter((p) => gridSlugs.includes(p.slug))

export default function WorkGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const project = featuredProjects[activeIndex]

  if (!project || project.images.length < 2) return null

  const [beforeSrc, afterSrc] = project.images

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-transparent to-white pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="Our Work" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Project Gallery<br />
            <span className="text-blue">&amp; Before / After</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Real jobs from across North Idaho. Drag the slider to see the difference.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:items-start">
          <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-premium-lg">
            <CompareSlider
              beforeSrc={beforeSrc}
              afterSrc={afterSrc}
              beforeAlt={`Before: ${project.title}, ${project.location ?? 'North Idaho'}`}
              afterAlt={`After: ${project.title}, ${project.location ?? 'North Idaho'}`}
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-premium">
            <span className="inline-flex w-fit rounded-full bg-blue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue">
              {project.category}
            </span>
            <h3 className="mt-3 font-display text-xl sm:text-2xl font-black uppercase text-gray-900 leading-tight">
              {project.title}
            </h3>
            {project.location && (
              <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-gray-500">
                <MapPin className="h-3.5 w-3.5 text-blue" />
                {project.location}
              </p>
            )}
            <p className="mt-4 flex-1 text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {featuredProjects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    i === activeIndex
                      ? 'bg-blue text-white shadow-premium'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <StaggerChildren
          className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
          variant="fadeUp"
        >
          {gridProjects.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-gray-200 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:border-blue/40 hover:shadow-premium-xl hover:ring-1 hover:ring-blue/20"
            >
              <ResponsiveImage
                src={item.coverImage}
                alt={`${item.title}, ${item.location ?? 'North Idaho'}`}
                fill
                className="transition-all duration-700 group-hover:scale-105"
                sizes={IMAGE_SIZES.thirdCol}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/10 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="inline-flex rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm border border-white/20">
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display text-sm sm:text-base font-bold text-white leading-tight">
                  {item.title}
                </p>
                {item.location && (
                  <p className="mt-1 text-[11px] text-blue-200">{item.location}</p>
                )}
              </div>
            </Link>
          ))}
        </StaggerChildren>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/gallery" className="btn-secondary">
            View Full Gallery <Camera className="h-4 w-4" />
          </Link>
          <a href={PHONE_HREF} className="btn-primary">
            <Phone className="h-4 w-4" /> Call (208) 290-3889
          </a>
        </div>
      </div>
    </section>
  )
}

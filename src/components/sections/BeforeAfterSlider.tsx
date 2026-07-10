'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Camera } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import CompareSlider from '@/components/ui/CompareSlider'
import { galleryProjects } from '@/data/gallery'

const featuredSlugs = [
  'bathroom-remodel',
  'kitchen-remodel-plumbing',
  'water-heater-replacement',
  'boiler-radiant-heat',
]

const featuredProjects = galleryProjects.filter((p) => featuredSlugs.includes(p.slug))

export default function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const project = featuredProjects[activeIndex]

  if (!project || project.images.length < 2) return null

  const [beforeSrc, afterSrc] = project.images

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="See the Difference" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Before &amp; After<br />
            <span className="text-blue">Our Work Speaks</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Drag the slider to compare real plumbing projects across North Idaho.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 max-w-3xl mx-auto">
          <CompareSlider
            beforeSrc={beforeSrc}
            afterSrc={afterSrc}
            beforeAlt={`Before — ${project.title}, ${project.location ?? 'North Idaho'}`}
            afterAlt={`After — ${project.title}, ${project.location ?? 'North Idaho'}`}
            priority={activeIndex === 0}
          />

          <div className="mt-4 text-center">
            <p className="font-display text-lg font-bold uppercase text-gray-900">
              {project.title}
            </p>
            {project.location && (
              <p className="mt-1 text-sm text-gray-500">{project.location}</p>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {featuredProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
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

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/gallery" className="btn-secondary">
            View Full Gallery <Camera className="h-4 w-4" />
          </Link>
          <Link href="/gallery" className="btn-primary">
            See All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Camera, Phone } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { StaggerChildren } from '@/components/animations'
import { PHONE_HREF } from '@/lib/utils'

const projects = [
  {
    src: '/images/IMG_9155-1920w.webp',
    alt: 'Plumbing trim and faucet installation - Preferred Plumbing Solutions',
    title: 'Bathroom Fixtures',
    tag: 'Residential',
  },
  {
    src: '/images/Plumbing+Trim_Faucets_Showers-Tub-Toilets+%2813%29-1920w.webp',
    alt: 'Shower and tub plumbing installation - Preferred Plumbing Solutions',
    title: 'Shower & Tub Install',
    tag: 'Residential',
  },
  {
    src: '/images/Grease+Trap+Tank.webp',
    alt: 'Commercial grease trap installation - Preferred Plumbing Solutions',
    title: 'Commercial Grease Trap',
    tag: 'Commercial',
  },
]

export default function RecentProjects() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="Our Work" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Recent<br />
            <span className="text-blue">Projects</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            A look at some recent plumbing and remodeling jobs across North Idaho.
          </p>
        </div>
        <StaggerChildren
          className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3"
          staggerDelay={0.1}
          variant="fadeUp"
        >
          {projects.map((project) => (
            <Link
              key={project.src}
              href="/gallery"
              className="group relative block w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 border border-gray-200 shadow-premium card-lift hover:border-blue/40 hover:ring-1 hover:ring-blue/20"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent transition-all duration-500 group-hover:from-blue-dark/70" />
              <div className="absolute inset-0 bg-blue/0 transition-all duration-500 group-hover:bg-blue/10" />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-white border border-white/20 transition-all duration-300 group-hover:bg-white/30">
                  {project.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="font-display text-lg sm:text-xl font-bold text-white transition-all duration-300 group-hover:translate-y-[-2px]">
                  {project.title}
                </p>
                <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-blue-200 opacity-100 translate-y-0 transition-all duration-300 sm:opacity-0 sm:translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
                  View Project <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </StaggerChildren>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/gallery"
            className="btn-secondary"
          >
            View Full Gallery <Camera className="h-4 w-4" />
          </Link>
          <a
            href={PHONE_HREF}
            className="btn-primary"
          >
            <Phone className="h-4 w-4" /> Call (208) 290-3889
          </a>
        </div>
      </div>
    </section>
  )
}

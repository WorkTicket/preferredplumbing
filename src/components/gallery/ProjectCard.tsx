'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SCROLL_TRIGGER_VIEWPORT } from '@/lib/animation-viewport'
import type { GalleryProject } from '@/data/gallery'

interface ProjectCardProps {
  project: GalleryProject
  index: number
  onSelect: (project: GalleryProject) => void
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.button
      onClick={() => onSelect(project)}
      initial={{ y: 12 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={SCROLL_TRIGGER_VIEWPORT}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3), ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative w-full text-left overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-premium transition-all duration-500 hover:-translate-y-1.5 hover:shadow-premium-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={index < 6 ? undefined : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-blue shadow-sm">
          {project.category}
        </span>

        <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm opacity-100 translate-y-0 transition-all duration-300 shadow-premium sm:opacity-0 sm:-translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
          <ArrowUpRight className="h-4 w-4 text-blue" />
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <p className="font-display text-lg font-bold text-gray-900 group-hover:text-blue transition-colors duration-300">
          {project.title}
        </p>
        {project.location && (
          <p className="mt-0.5 text-xs font-medium text-gray-400 uppercase tracking-wider">
            {project.location}
          </p>
        )}
        <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.button>
  )
}

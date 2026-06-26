'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { galleryProjects } from '@/data/gallery'
import CategoryFilter from './CategoryFilter'
import SortDropdown from './SortDropdown'
import type { SortValue } from './SortDropdown'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import type { GalleryProject } from '@/data/gallery'

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [sort, setSort] = useState<SortValue>('newest')
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null)

  const filtered = useMemo(() => {
    let result =
      activeCategory === 'All Projects'
        ? [...galleryProjects]
        : galleryProjects.filter((p) => p.category === activeCategory)

    result.sort((a, b) => {
      const da = new Date(a.completionDate).getTime()
      const db = new Date(b.completionDate).getTime()
      return sort === 'newest' ? db - da : da - db
    })

    return result
  }, [activeCategory, sort])

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg font-medium">No projects match this category.</p>
          <button
            onClick={() => setActiveCategory('All Projects')}
            className="mt-3 text-blue font-semibold text-sm hover:underline"
          >
            View all projects
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.div>
      )}

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

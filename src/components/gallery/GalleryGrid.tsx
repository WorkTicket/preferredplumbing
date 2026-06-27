'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import type { GalleryProjectSummary } from '@/data/gallery'
import CategoryFilter from './CategoryFilter'
import SortDropdown from './SortDropdown'
import type { SortValue } from './SortDropdown'
import ProjectCard from './ProjectCard'

const ProjectModal = dynamic(() => import('./ProjectModal'), { ssr: false })

const INITIAL_VISIBLE = 12
const LOAD_MORE_COUNT = 12

interface GalleryGridProps {
  projects: GalleryProjectSummary[]
}

export default function GalleryGrid({ projects }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [sort, setSort] = useState<SortValue>('newest')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  const filtered = useMemo(() => {
    let result =
      activeCategory === 'All Projects'
        ? projects
        : projects.filter((p) => p.category === activeCategory)

    result = [...result].sort((a, b) => {
      const da = new Date(a.completionDate).getTime()
      const db = new Date(b.completionDate).getTime()
      return sort === 'newest' ? db - da : da - db
    })

    return result
  }, [activeCategory, sort, projects])

  const visibleProjects = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE)
  }, [activeCategory, sort])

  const handleSelect = useCallback((id: string) => {
    setSelectedProjectId(id)
  }, [])

  const handleClose = useCallback(() => {
    setSelectedProjectId(null)
  }, [])

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg font-medium">No projects match this category.</p>
          <button
            type="button"
            onClick={() => setActiveCategory('All Projects')}
            className="mt-3 text-blue font-semibold text-sm hover:underline"
          >
            View all projects
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onSelect={handleSelect}
              />
            ))}
          </div>

          {hasMore && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
                className="btn-secondary inline-flex"
              >
                Load more projects ({filtered.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {selectedProjectId && (
        <ProjectModal projectId={selectedProjectId} onClose={handleClose} />
      )}
    </>
  )
}

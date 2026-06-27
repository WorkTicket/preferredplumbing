'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Phone, MapPin, Calendar } from 'lucide-react'
import { getGalleryProjectById } from '@/data/gallery'

interface ProjectModalProps {
  projectId: string
  onClose: () => void
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = getGalleryProjectById(projectId)
  const [currentImage, setCurrentImage] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    setCurrentImage(0)
  }, [projectId])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const goToPrev = useCallback(() => {
    if (!project) return
    setCurrentImage((p) => (p === 0 ? project.images.length - 1 : p - 1))
  }, [project])

  const goToNext = useCallback(() => {
    if (!project) return
    setCurrentImage((p) => (p === project.images.length - 1 ? 0 : p + 1))
  }, [project])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, goToPrev, goToNext])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext()
      else goToPrev()
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!project) return null

  const hasMultipleImages = project.images.length > 1

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4 overflow-y-auto"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-none sm:rounded-2xl overflow-hidden shadow-premium-2xl max-h-[100dvh] sm:max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-all duration-200 touch-target"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-gray-900 flex-shrink-0">
            <div
              className="relative w-full h-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[currentImage]}
                    alt={`${project.title} - Image ${currentImage + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 900px"
                    priority
                    quality={80}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={goToPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all duration-200 touch-target"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all duration-200 touch-target"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentImage(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentImage
                          ? 'w-6 bg-white'
                          : 'w-2 bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {hasMultipleImages && (
              <span className="absolute top-4 left-4 z-10 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                {currentImage + 1} / {project.images.length}
              </span>
            )}
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-5 sm:p-8 pb-0">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-full bg-blue-50 text-blue px-3 py-1 text-xs font-semibold">
                  {project.category}
                </span>
                {project.location && (
                  <span className="flex items-center gap-1 text-xs font-medium text-gray-400">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </span>
                )}
                <span className="flex items-center gap-1 text-xs font-medium text-gray-400">
                  <Calendar className="h-3 w-3" />
                  {new Date(project.completionDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-black text-gray-900 uppercase leading-tight">
                {project.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {project.scopeOfWork && (
                <div className="mt-6">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-blue mb-2">
                    Scope of Work
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.scopeOfWork}
                  </p>
                </div>
              )}

              {project.materials && project.materials.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-blue mb-2">
                    Materials Used
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.materials.map((mat) => (
                      <li
                        key={mat}
                        className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                      >
                        {mat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {hasMultipleImages && (
                <div className="mt-8">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-blue mb-3">
                    All Photos
                  </h3>
                  <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 sm:-mx-8 px-5 sm:px-8">
                    {project.images.map((img, i) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setCurrentImage(i)}
                        className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          i === currentImage
                            ? 'border-blue ring-2 ring-blue/20'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} thumbnail ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                          loading="lazy"
                          quality={60}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="h-4" />
          </div>

          <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4 sm:p-5 shadow-premium-lg z-10">
            <a
              href="tel:12082903889"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-blue px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-blue-dark hover:shadow-premium-lg active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" />
              Request Service: (208) 290-3889
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

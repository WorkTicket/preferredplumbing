'use client'

import { useCallback, useRef, useState } from 'react'
import ResponsiveImage from '@/components/ui/ResponsiveImage'
import { IMAGE_SIZES } from '@/lib/image-sizes'
import { cn } from '@/lib/utils'

interface CompareSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  className?: string
  priority?: boolean
}

export default function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
  priority = false,
}: CompareSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    dragging.current = false
    e.currentTarget.releasePointerCapture(e.pointerId)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200 select-none touch-none',
        className,
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="img"
      aria-label={`Before and after comparison: ${beforeAlt}`}
    >
      <ResponsiveImage
        src={afterSrc}
        alt={afterAlt}
        fill
        priority={priority}
        sizes={IMAGE_SIZES.galleryGrid}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <ResponsiveImage
          src={beforeSrc}
          alt={beforeAlt}
          fill
          priority={priority}
          sizes={IMAGE_SIZES.galleryGrid}
        />
      </div>

      <span className="absolute top-3 left-3 rounded-full bg-gray-900/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
        Before
      </span>
      <span className="absolute top-3 right-3 rounded-full bg-blue/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
        After
      </span>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-blue shadow-premium-lg">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="h-4 w-4 text-white"
            aria-hidden
          >
            <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

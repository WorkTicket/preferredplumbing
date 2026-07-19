'use client'

import { useCallback, useEffect, useRef } from 'react'
import { getOriginalImageUrl, getVariantUrl } from '@/lib/responsive-image'
import { cn } from '@/lib/utils'

interface CompareSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  className?: string
}

export default function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: CompareSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const pendingX = useRef<number | null>(null)
  const dragging = useRef(false)

  const applyPosition = useCallback((pct: number) => {
    containerRef.current?.style.setProperty('--compare-pos', `${pct}%`)
  }, [])

  const scheduleUpdate = useCallback(
    (clientX: number) => {
      pendingX.current = clientX
      if (rafRef.current !== null) return

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const x = pendingX.current
        if (x === null) return

        const container = containerRef.current
        if (!container) return

        const rect = container.getBoundingClientRect()
        if (rect.width <= 0) return

        const pct = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100))
        applyPosition(pct)
      })
    },
    [applyPosition],
  )

  useEffect(() => {
    applyPosition(50)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [applyPosition, beforeSrc, afterSrc])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    e.currentTarget.classList.add('compare-slider-dragging')
    scheduleUpdate(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    scheduleUpdate(e.clientX)
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    dragging.current = false
    e.currentTarget.classList.remove('compare-slider-dragging')
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }

  const afterUrl = getVariantUrl(afterSrc, 'webp', 1024)
  const beforeUrl = getVariantUrl(beforeSrc, 'webp', 1024)
  const afterFallback = getOriginalImageUrl(afterSrc)
  const beforeFallback = getOriginalImageUrl(beforeSrc)

  const handleImgError = (fallback: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    if (img.dataset.fallbackApplied === '1') return
    img.dataset.fallbackApplied = '1'
    img.src = fallback
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'compare-slider relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200 select-none touch-none',
        className,
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      role="img"
      aria-label={`Job photo comparison: ${beforeAlt}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={afterUrl}
        alt={afterAlt}
        width={1024}
        height={768}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        onError={handleImgError(afterFallback)}
      />

      <div className="compare-slider-before absolute inset-0 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeUrl}
          alt={beforeAlt}
          width={1024}
          height={768}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          onError={handleImgError(beforeFallback)}
        />
      </div>

      <div className="compare-slider-handle pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(0,102,255,0.4)]">
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-blue-light/50 bg-blue shadow-premium-xl ring-4 ring-white/20">
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

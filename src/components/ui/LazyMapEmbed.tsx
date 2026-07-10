'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

type LazyMapEmbedProps = {
  src: string
  title: string
  className?: string
  placeholderClassName?: string
}

/** Facade map — iframe loads only after click so Google Maps does not hurt Lighthouse. */
export default function LazyMapEmbed({
  src,
  title,
  className,
  placeholderClassName,
}: LazyMapEmbedProps) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className={cn('h-full w-full min-h-[280px]', className)}
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className={cn(
        'group relative flex h-full w-full min-h-[280px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-50 to-gray-100 p-6 text-center transition-colors hover:from-blue-100 hover:to-gray-50',
        placeholderClassName,
      )}
      aria-label={`Load interactive map: ${title}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue/10 transition-transform group-hover:scale-105">
        <MapPin className="h-7 w-7 text-blue" />
      </div>
      <div>
        <p className="font-semibold text-gray-900">View Interactive Map</p>
        <p className="mt-1 text-sm text-gray-500">Tap to load Google Maps</p>
      </div>
    </button>
  )
}

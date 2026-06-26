'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  wrapperClassName?: string
  sizes?: string
  priority?: boolean
  quality?: number
  hasSkeleton?: boolean
  hoverZoom?: boolean
}

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  wrapperClassName,
  sizes,
  priority = false,
  quality = 85,
  hasSkeleton = true,
  hoverZoom = false,
}: AnimatedImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const onLoad = useCallback(() => setLoaded(true), [])
  const onError = useCallback(() => setError(true), [])

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        fill ? 'h-full w-full' : 'inline-block',
        wrapperClassName
      )}
    >
      {hasSkeleton && !loaded && !error && (
        <div className="absolute inset-0 skeleton-pulse" />
      )}
      {error ? (
        <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400 text-sm">
          Failed to load image
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          sizes={sizes}
          priority={priority}
          quality={quality}
          onLoad={onLoad}
          onError={onError}
          className={cn(
            'transition-all duration-700',
            loaded ? 'opacity-100' : 'opacity-0',
            hoverZoom && 'group-hover:scale-110',
            className
          )}
        />
      )}
    </div>
  )
}

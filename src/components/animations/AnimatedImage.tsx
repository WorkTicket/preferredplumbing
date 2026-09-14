'use client'

import ResponsiveImage from '@/components/ui/ResponsiveImage'
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
  hoverZoom?: boolean
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
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
  hoverZoom = false,
  objectFit = 'cover',
}: AnimatedImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden',
        fill ? 'h-full w-full' : 'inline-block',
        wrapperClassName
      )}
    >
      <ResponsiveImage
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        sizes={sizes}
        priority={priority}
        objectFit={objectFit}
        className={cn(
          hoverZoom && 'group-hover:scale-110',
          className
        )}
      />
    </div>
  )
}

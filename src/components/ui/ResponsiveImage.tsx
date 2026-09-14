import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { IMAGE_SIZES } from '@/lib/image-sizes'
import {
  FORMATS,
  buildSrcset,
  getImageDimensions,
  getOriginalImageUrl,
  getVariantUrl,
} from '@/lib/responsive-image'

type ResponsiveImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
  className?: string
  fill?: boolean
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  objectPosition?: string
  style?: CSSProperties
  /** Cap srcset / fallback width so thumbnails never request 1920–2560 files. */
  srcsetMaxWidth?: number
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = IMAGE_SIZES.halfCol,
  className = '',
  fill = false,
  objectFit = 'cover',
  objectPosition,
  style,
  srcsetMaxWidth,
}: ResponsiveImageProps) {
  const dimensions = getImageDimensions(src)
  const originalUrl = getOriginalImageUrl(src)
  const imgStyle: CSSProperties = {
    objectFit,
    ...(objectPosition ? { objectPosition } : {}),
    ...style,
  }

  const imgClass = cn(
    fill && 'absolute inset-0 h-full w-full',
    objectFit === 'cover' && 'object-cover',
    objectFit === 'contain' && 'object-contain',
    className,
  )

  return (
    <picture className={fill ? 'absolute inset-0 block h-full w-full' : undefined}>
      {FORMATS.map((format) => {
        const srcset = buildSrcset(src, format, srcsetMaxWidth)
        if (!srcset) return null
        const type = format === 'jpeg' ? 'image/jpeg' : `image/${format}`
        return <source key={format} srcSet={srcset} sizes={sizes} type={type} />
      })}
      <img
        src={getVariantUrl(src, 'webp', priority ? 1280 : 768, srcsetMaxWidth) || originalUrl}
        alt={alt}
        width={fill ? dimensions?.width : width}
        height={fill ? dimensions?.height : height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={imgClass}
        style={imgStyle}
      />
    </picture>
  )
}

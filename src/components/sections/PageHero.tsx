import Image from 'next/image'
import type { ReactNode } from 'react'

interface PageHeroProps {
  label: string
  title: ReactNode
  description?: string
  image: string
  imageAlt: string
  priority?: boolean
  children?: ReactNode
}

export default function PageHero({
  label,
  title,
  description,
  image,
  imageAlt,
  priority = false,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority={priority}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
      <div className="relative z-10 container-page section-padding !py-16 sm:!py-20">
        <span className="section-label text-blue-300 before:bg-blue-300">{label}</span>
        <h1 className="mt-3 font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-sm sm:text-lg text-gray-300">{description}</p>
        )}
        {children && <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">{children}</div>}
      </div>
    </section>
  )
}

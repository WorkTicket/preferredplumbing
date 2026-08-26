import HeroImagePreload from '@/components/ui/HeroImagePreload'
import LcpHeroImage from '@/components/ui/LcpHeroImage'
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
  priority = true,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center overflow-hidden">
      {priority && <HeroImagePreload src={image} />}
      <LcpHeroImage src={image} alt={imageAlt} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
      <div className="absolute inset-0 hero-split-tone opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-navy/40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-light/35 to-transparent" />
      <div className="relative z-10 container-page section-padding !py-12 sm:!py-20">
        <div className="mb-3 sm:mb-4 flex items-center gap-3">
          <span className="accent-rule" />
          <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-blue-light">
            {label}
          </span>
        </div>
        <h1 className="font-display text-[clamp(2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-white tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-lg text-gray-300 leading-relaxed">{description}</p>
        )}
        {children && <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">{children}</div>}
      </div>
    </section>
  )
}

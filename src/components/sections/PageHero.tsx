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
    <section className="relative flex min-h-[44vh] items-center overflow-hidden sm:min-h-[54vh]">
      {priority && <HeroImagePreload src={image} />}
      <LcpHeroImage src={image} alt={imageAlt} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/96 via-navy/82 to-navy/58" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/20" />
      <div className="absolute inset-0 hero-split-tone opacity-70" />
      <div className="absolute inset-0 hero-texture" />
      <div className="absolute inset-0 hero-pattern opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-light/40 to-transparent" />
      <div className="pointer-events-none absolute left-6 top-8 hidden h-16 w-16 border-l border-t border-white/15 sm:block lg:left-10" />
      <div className="pointer-events-none absolute bottom-8 right-6 hidden h-16 w-16 border-b border-r border-white/10 sm:block lg:right-10" />
      <div className="container-page section-padding relative z-10 !py-16 sm:!py-24">
        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <span className="accent-rule" />
          <span className="font-display text-xs font-bold uppercase tracking-[0.24em] text-blue-light sm:text-sm">
            {label}
          </span>
        </div>
        <h1 className="max-w-5xl font-display text-[clamp(2.15rem,8vw,4.65rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">{children}</div>}
      </div>
    </section>
  )
}

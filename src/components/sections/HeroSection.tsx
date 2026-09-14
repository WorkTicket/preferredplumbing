import LcpHeroImage from '@/components/ui/LcpHeroImage'
import HeroVideo from '@/components/sections/HeroVideo'
import Link from 'next/link'
import { Phone, ChevronRight, Star } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'
import { SHOW_GOOGLE_REVIEWS } from '@/lib/feature-flags'
import { jobsCompletedLabel, yearsExperienceLabel } from '@/lib/company-stats'

function getHeroStats() {
  return [
    { number: yearsExperienceLabel(), suffix: '', label: 'Years Experience' },
    ...(SHOW_GOOGLE_REVIEWS
      ? [{ number: '5★', suffix: '', label: 'Google Rating' }]
      : [{ number: 'Licensed', suffix: '', label: '& Insured' }]),
    { number: '7–5', suffix: '', label: 'Sun–Fri Hours' },
    { number: jobsCompletedLabel(), suffix: '', label: 'Jobs Completed' },
  ]
}

const trustBadges = [
  'Family-Owned',
  'Free Estimates',
  'Sun–Fri Same-Day',
]

const waveGradient = (
  <defs>
    <linearGradient id="topWaveFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#004ECC" />
      <stop offset="100%" stopColor="#4D8FFF" />
    </linearGradient>
    <linearGradient id="botWaveFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4D8FFF" />
      <stop offset="100%" stopColor="#004ECC" />
    </linearGradient>
  </defs>
)

const TopWave = () => (
  <div className="hero-top-wave pointer-events-none absolute left-0 z-[7] h-24 w-full sm:h-32">
    {/* Tucks under the nav so the seam stays blue if header height and wave top are a frame apart. */}
    <div className="absolute inset-x-0 bottom-full h-10 bg-blue-dark" aria-hidden />
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-full w-full" aria-hidden>
      {waveGradient}
      <rect x="0" y="0" width="1440" height="5" fill="#004ECC" />
      <path d="M0,55 C240,95 480,25 720,60 C960,95 1200,35 1440,60 L1440,5 L0,5 Z" fill="url(#topWaveFill)" />
      <path d="M0,55 C240,95 480,25 720,60 C960,95 1200,35 1440,60" fill="none" stroke="#004ECC" strokeWidth="2.5" />
    </svg>
  </div>
)

const BottomWave = () => (
  <div className="pointer-events-none absolute -bottom-px left-0 z-[7] h-12 w-full overflow-hidden sm:h-20 lg:h-28">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-[calc(100%+2px)] w-full" aria-hidden>
      {waveGradient}
      <rect x="0" y="112" width="1440" height="10" fill="#004ECC" />
      <path d="M0,65 C240,25 480,95 720,60 C960,25 1200,85 1440,60 L1440,120 L0,120 Z" fill="url(#botWaveFill)" />
      <path d="M0,65 C240,25 480,95 720,60 C960,25 1200,85 1440,60" fill="none" stroke="#004ECC" strokeWidth="2.5" />
    </svg>
  </div>
)

export default function HeroSection() {
  const stats = getHeroStats()

  return (
    <section className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="absolute inset-0 brightness-[0.85] saturate-[1.08]">
        <LcpHeroImage
          src="/images/preferred-plumbing-hero-poster.webp"
          alt="Aerial view of Spirit Lake in North Idaho from the Preferred Plumbing Solutions hero video"
        />
      </div>
      <HeroVideo />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/82 to-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/92 via-transparent to-transparent" />
      <div className="absolute inset-0 hero-split-tone" />
      <div className="absolute inset-0 hero-vignette" />
      <div className="absolute inset-0 bg-blue/[0.08] mix-blend-soft-light pointer-events-none" />
      <div className="absolute inset-0 hero-texture" />
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute inset-0 hero-light-sweep hidden md:block" />
      <TopWave />
      <BottomWave />
      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 items-center px-4 sm:px-6 lg:px-8 pt-site-header pb-8 sm:pb-12 lg:pb-14">
        <div className="max-w-3xl w-full">
          <div className="mb-2.5 sm:mb-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md sm:px-3.5 sm:text-sm">
              <span className="live-dot" aria-hidden />
              Family-Owned Plumber in Spirit Lake, Idaho
            </p>
            {SHOW_GOOGLE_REVIEWS && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md sm:px-3.5 sm:text-sm">
                <Star className="h-3 w-3 fill-gold text-gold sm:h-3.5 sm:w-3.5" /> 5.0 Google
              </span>
            )}
          </div>
          <h1 className="font-display text-[clamp(1.85rem,8.5vw,4.85rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] text-white">
            Spirit Lake&apos;s<br />
            <span className="text-blue-light">Local Plumber</span>
          </h1>
          <p className="mt-2.5 max-w-xl text-[13px] leading-snug text-white/75 sm:mt-5 sm:text-base sm:leading-relaxed lg:text-lg">
            Plumbing services near Spirit Lake and North Idaho. Same-day water heaters, radiant heat, heated driveways, and emergency plumber.{' '}
            <span className="font-serif italic text-blue-light">Call for a free estimate.</span>
          </p>
          <div className="mt-4 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-4">
            <a href={PHONE_HREF} className="btn-primary-lg !py-3.5 text-sm shadow-glow-lg sm:!py-4 sm:text-base lg:!py-5 lg:text-lg" data-track="hero_call">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call {PHONE_DISPLAY}
            </a>
            <Link href="#contact" className="btn-secondary border-white/25 bg-white/10 text-white backdrop-blur-sm !py-3.5 text-sm hover:border-white/40 hover:bg-white/15 sm:!py-4 sm:text-base">
              Get Free Estimate <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 sm:mt-6">
            {trustBadges.map((badge) => (
              <span key={badge} className="badge-premium text-[11px] sm:text-xs">
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-3 lg:gap-4">
            {stats.map((stat) => (
              <div key={stat.label || stat.number} className="rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:rounded-2xl sm:p-4">
                <p className="font-display text-base font-black tabular-nums text-white sm:text-xl lg:text-2xl">
                  {stat.number}<span className="text-blue-light">{stat.suffix}</span>
                </p>
                {stat.label && (
                  <p className="mt-0.5 text-[11px] font-medium leading-tight text-white/65 sm:text-[10px] lg:text-xs">{stat.label}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

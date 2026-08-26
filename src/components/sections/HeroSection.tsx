'use client'

import { useState, useEffect } from 'react'
import HeroImagePreload from '@/components/ui/HeroImagePreload'
import LcpHeroImage from '@/components/ui/LcpHeroImage'
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

const TopWave = ({ className }: { className: string }) => (
  <div className={className}>
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

function shouldLoadHeroVideo(): boolean {
  if (typeof window === 'undefined') return false
  if (!window.matchMedia('(min-width: 768px)').matches) return false

  const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
  if (connection?.saveData) return false
  if (connection?.effectiveType && ['slow-2g', '2g', '3g'].includes(connection.effectiveType)) return false

  return true
}

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const stats = getHeroStats()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!shouldLoadHeroVideo()) return

    let cancelled = false
    let idleId = 0
    let timer = 0

    const enableVideo = () => {
      if (!cancelled) setShowVideo(true)
    }

    const teardown = () => {
      window.removeEventListener('scroll', onIntent)
      window.removeEventListener('touchstart', onIntent)
      window.removeEventListener('pointerdown', onIntent)
      if (idleId && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId)
      }
      if (timer) window.clearTimeout(timer)
    }

    // Best practice for LCP: wait for user intent first so the poster stays LCP,
    // then fall back to idle so desktop still gets motion without competing for bandwidth.
    function onIntent() {
      enableVideo()
      teardown()
    }

    window.addEventListener('scroll', onIntent, { once: true, passive: true })
    window.addEventListener('touchstart', onIntent, { once: true, passive: true })
    window.addEventListener('pointerdown', onIntent, { once: true })

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(enableVideo, { timeout: 8000 })
    } else {
      timer = window.setTimeout(enableVideo, 6000)
    }

    return () => {
      cancelled = true
      teardown()
    }
  }, [])

  const waveTopPos = scrolled
    ? 'absolute top-14 sm:top-14 left-0 w-full h-24 sm:h-32 z-[7] pointer-events-none overflow-hidden'
    : 'absolute top-14 sm:top-16 left-0 w-full h-24 sm:h-32 z-[7] pointer-events-none overflow-hidden'

  return (
    <>
      <HeroImagePreload src="/images/preferred-plumbing-hero-poster.webp" />
      <section className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="absolute inset-0 brightness-[0.85] saturate-[1.08]">
          <LcpHeroImage
            src="/images/preferred-plumbing-hero-poster.webp"
            alt="Aerial view of Spirit Lake in North Idaho from the Preferred Plumbing Solutions hero video"
          />
        </div>
        {showVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/generated/preferred-plumbing-hero-poster-1280.webp"
            preload="metadata"
            onLoadedData={() => setVideoReady(true)}
            onError={() => setVideoReady(false)}
            className={`absolute inset-0 h-full w-full object-cover brightness-[0.85] saturate-[1.08] transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src="/videos/preferred-plumbing-hero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/82 to-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/92 via-transparent to-transparent" />
        <div className="absolute inset-0 hero-split-tone" />
        <div className="absolute inset-0 hero-vignette" />
        <div className="absolute inset-0 bg-blue/[0.08] mix-blend-soft-light pointer-events-none" />
        <div className="absolute inset-0 hero-texture" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 hero-light-sweep hidden md:block" />
        <TopWave className={waveTopPos} />
        <BottomWave />
        <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 items-center px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10 sm:pb-12 lg:pb-14">
          <div className="max-w-3xl w-full">
            <div className="mb-2.5 sm:mb-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
              <p className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 sm:px-3.5 text-[11px] sm:text-sm font-semibold text-white backdrop-blur-sm">
                Family-Owned Plumber in Spirit Lake, Idaho
              </p>
              {SHOW_GOOGLE_REVIEWS && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 sm:px-3.5 text-[11px] sm:text-sm font-semibold text-white backdrop-blur-sm">
                  <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-gold text-gold" /> 5.0 Google
                </span>
              )}
            </div>
            <h1 className="font-display text-[clamp(1.85rem,8.5vw,4.75rem)] font-black uppercase leading-[0.9] text-white tracking-tight">
              North Idaho&apos;s<br />
              <span className="text-blue-light">Local Plumber</span>
            </h1>
            <p className="mt-2.5 sm:mt-4 max-w-xl text-[13px] sm:text-base lg:text-lg text-gray-300 leading-snug sm:leading-relaxed">
              Family-owned in Spirit Lake, Idaho. Radiant heat, new construction, and emergency service.{' '}
              <span className="font-serif italic text-blue-light">Call for a free estimate.</span>
            </p>
            <div className="mt-3.5 sm:mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              <a href={PHONE_HREF} className="btn-primary-lg !py-3.5 sm:!py-4 lg:!py-5 text-sm sm:text-base lg:text-lg shadow-glow-lg" data-track="hero_call">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call {PHONE_DISPLAY}
              </a>
              <Link href="#contact" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15 hover:border-white/40 !py-3.5 sm:!py-4 text-sm sm:text-base backdrop-blur-sm">
                Get Free Estimate <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
            <div className="mt-3 sm:mt-6 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span key={badge} className="badge-premium text-[11px] sm:text-xs">
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-4 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              {stats.map((stat) => (
                <div key={stat.label || stat.number} className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/8 px-3 py-2.5 sm:p-4 backdrop-blur-md text-left shadow-inner">
                  <p className="font-display font-black text-base sm:text-xl lg:text-2xl text-white tabular-nums">
                    {stat.number}<span className="text-blue-light">{stat.suffix}</span>
                  </p>
                  {stat.label && (
                    <p className="text-[11px] sm:text-[10px] lg:text-xs font-medium text-white/70 leading-tight mt-0.5">{stat.label}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

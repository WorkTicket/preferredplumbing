'use client'

import { useState, useEffect } from 'react'
import HeroImagePreload from '@/components/ui/HeroImagePreload'
import LcpHeroImage from '@/components/ui/LcpHeroImage'
import Link from 'next/link'
import { Phone, ChevronRight, Star } from 'lucide-react'

const stats = [
  { number: '38+', suffix: '', label: 'Years Experience' },
  { number: '5★', suffix: '', label: 'Google Rating' },
  { number: '24/7', suffix: '', label: 'Emergency Service' },
  { number: '500+', suffix: '', label: 'Jobs Completed' },
]

const trustBadges = [
  'Family-Owned',
  'Free Estimates',
  'Same-Day Service',
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
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full">
      {waveGradient}
      <rect x="0" y="0" width="1440" height="5" fill="#004ECC" />
      <path d="M0,55 C240,95 480,25 720,60 C960,95 1200,35 1440,60 L1440,5 L0,5 Z" fill="url(#topWaveFill)" />
      <path d="M0,55 C240,95 480,25 720,60 C960,95 1200,35 1440,60" fill="none" stroke="#004ECC" strokeWidth="2.5" />
    </svg>
  </div>
)

const BottomWave = () => (
  <div className="absolute bottom-0 left-0 w-full h-12 sm:h-20 lg:h-28 z-[7] pointer-events-none overflow-hidden">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full">
      {waveGradient}
      <rect x="0" y="115" width="1440" height="5" fill="#004ECC" />
      <path d="M0,65 C240,25 480,95 720,60 C960,25 1200,85 1440,60 L1440,115 L0,115 Z" fill="url(#botWaveFill)" />
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!shouldLoadHeroVideo()) return

    const enableVideo = () => setShowVideo(true)
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(enableVideo, { timeout: 4000 })
      return () => window.cancelIdleCallback(id)
    }

    const timer = setTimeout(enableVideo, 3000)
    return () => clearTimeout(timer)
  }, [])

  const waveTopPos = scrolled
    ? 'absolute top-14 sm:top-14 left-0 w-full h-24 sm:h-32 z-[7] pointer-events-none overflow-hidden'
    : 'absolute top-14 sm:top-16 left-0 w-full h-24 sm:h-32 z-[7] pointer-events-none overflow-hidden'

  return (
    <>
      <HeroImagePreload src="/images/preferred-plumbing-truck-interior.webp" />
      <section className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="absolute inset-0 brightness-[0.85] saturate-[1.08]">
          <LcpHeroImage
            src="/images/preferred-plumbing-truck-interior.webp"
            alt="Preferred Plumbing service truck interior in Spirit Lake, Idaho"
          />
        </div>
        {showVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/generated/preferred-plumbing-truck-interior-1280.webp"
            preload="none"
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
            <div className="mb-3 sm:mb-5 flex flex-wrap items-center gap-2.5">
              <p className="inline-flex flex-wrap items-center rounded-full border border-blue-light/25 bg-blue-light/10 px-3.5 py-1.5 text-[11px] sm:text-sm font-semibold text-blue-light backdrop-blur-sm">
                Family-Owned Plumber in Spirit Lake Since 1987
              </p>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" /> 5.0 Google Rating
              </span>
            </div>
            <h1 className="font-display text-[clamp(1.85rem,8.5vw,4.75rem)] font-black uppercase leading-[0.9] text-white tracking-tight">
              North Idaho&apos;s<br />
              <span className="text-blue-light">Local Plumber</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-xl text-[13px] sm:text-base lg:text-lg text-gray-300 leading-snug sm:leading-relaxed">
              38+ years. Family-owned. Spirit Lake, Idaho. Burst pipe, new build, or remodel —{' '}
              <span className="font-serif italic text-blue-light">call for a free estimate.</span>
            </p>
            <div className="mt-4 sm:mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
              <a href="tel:12082903889" className="btn-primary-lg !py-3.5 sm:!py-4 lg:!py-5 text-sm sm:text-base lg:text-lg shadow-glow-lg" data-track="hero_call">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call (208) 290-3889
              </a>
              <Link href="#contact" className="btn-secondary border-white/25 bg-white/8 text-white hover:bg-white/15 hover:border-white/40 !py-3.5 sm:!py-4 text-sm sm:text-base backdrop-blur-sm">
                Get Free Estimate <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
            <div className="mt-3.5 sm:mt-6 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span key={badge} className="badge-premium text-[11px] sm:text-xs">
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-5 sm:mt-10 grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              {stats.map((stat) => (
                <div key={stat.label || stat.number} className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/8 p-2.5 sm:p-4 backdrop-blur-md text-center sm:text-left shadow-inner">
                  <p className="font-display font-black text-sm sm:text-xl lg:text-2xl text-white tabular-nums">
                    {stat.number}<span className="text-blue-light">{stat.suffix}</span>
                  </p>
                  {stat.label && (
                    <p className="text-[9px] sm:text-[10px] lg:text-xs font-medium text-white/70 leading-tight mt-0.5">{stat.label}</p>
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

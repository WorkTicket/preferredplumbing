'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ChevronRight, Shield, Clock, HardHat, CheckCircle } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const stats = [
  { icon: Shield, number: 'Licensed', suffix: ' & Insured', label: '' },
  { icon: HardHat, number: '38+', suffix: '', label: 'Years Experience' },
  { icon: Clock, number: '24/7', suffix: '', label: 'Emergency Service' },
  { icon: CheckCircle, number: '500+', suffix: '', label: 'Jobs Completed' },
]

const trustBadges = [
  'Family-Owned',
  'Free Estimates',
  'Same-Day Service',
]

const waveGradient = (
  <defs>
    <linearGradient id="topWaveFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#0066CC" />
      <stop offset="100%" stopColor="#0088EE" />
    </linearGradient>
    <linearGradient id="botWaveFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#0088EE" />
      <stop offset="100%" stopColor="#0066CC" />
    </linearGradient>
  </defs>
)

const TopWave = ({ className }: { className: string }) => (
  <div className={className}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full">
      {waveGradient}
      <rect x="0" y="0" width="1440" height="5" fill="#0050A0" />
      <path d="M0,55 C240,95 480,25 720,60 C960,95 1200,35 1440,60 L1440,5 L0,5 Z" fill="url(#topWaveFill)" />
      <path d="M0,55 C240,95 480,25 720,60 C960,95 1200,35 1440,60" fill="none" stroke="#0050A0" strokeWidth="2.5" />
    </svg>
  </div>
)

const BottomWave = () => (
  <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 z-[7] pointer-events-none overflow-hidden">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full">
      {waveGradient}
      <rect x="0" y="115" width="1440" height="5" fill="#0050A0" />
      <path d="M0,65 C240,25 480,95 720,60 C960,25 1200,85 1440,60 L1440,115 L0,115 Z" fill="url(#botWaveFill)" />
      <path d="M0,65 C240,25 480,95 720,60 C960,25 1200,85 1440,60" fill="none" stroke="#0050A0" strokeWidth="2.5" />
    </svg>
  </div>
)

export default function HeroSection() {
  const reduced = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waveTopPos = scrolled
    ? 'absolute top-12 sm:top-14 left-0 w-full h-24 sm:h-32 z-[7] pointer-events-none overflow-hidden'
    : 'absolute top-14 sm:top-16 left-0 w-full h-24 sm:h-32 z-[7] pointer-events-none overflow-hidden'

  const content = (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-24 sm:pb-16">
      <div className="max-w-3xl">
        {reduced ? (
          <>
            <div className="mb-4 sm:mb-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-blue/20 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-200 backdrop-blur-sm border border-blue/20">
              <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Spirit Lake&apos;s Trusted Plumber Since 1987</span>
            </div>
            <h1 className="font-bold text-[clamp(2.2rem,10vw,4.5rem)] uppercase leading-[0.9] text-white">
              Burst Pipe?<br />
              <span className="text-blue-300">We&apos;re There Fast.</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-lg text-gray-300 leading-relaxed">
              Family-owned plumbing serving North Idaho since 1987. New construction, emergency repairs, remodels. Call for a free estimate.
            </p>
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="tel:12082903889" className="btn-primary-lg">
                <Phone className="h-5 w-5" /> Call (208) 290-3889
              </a>
              <Link href="/contact" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                Get Free Estimate <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm border border-white/10">
                  <CheckCircle className="h-3 w-3 text-blue-300" /> {badge}
                </span>
              ))}
            </div>
            <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label || stat.number} className="rounded-xl bg-white/10 p-3 sm:p-4 backdrop-blur-sm border border-white/10">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />
                  <p className="mt-1 font-bold text-xl sm:text-2xl text-white">
                    {stat.number}<span className="text-blue-300">{stat.suffix}</span>
                  </p>
                  {stat.label && (
                    <p className="text-[10px] sm:text-xs font-medium text-white/75">{stat.label}</p>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <motion.div
              className="mb-4 sm:mb-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-blue/20 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-200 backdrop-blur-sm border border-blue/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Spirit Lake&apos;s Trusted Plumber Since 1987</span>
            </motion.div>
            <motion.h1
              className="font-bold text-[clamp(2.2rem,10vw,4.5rem)] uppercase leading-[0.9] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Burst Pipe?<br />
              <span className="text-blue-300">We&apos;re There Fast.</span>
            </motion.h1>
            <motion.p
              className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Family-owned plumbing serving North Idaho since 1987. New construction, emergency repairs, remodels. Call for a free estimate.
            </motion.p>
            <motion.div
              className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <a href="tel:12082903889" className="btn-primary-lg">
                <Phone className="h-5 w-5" /> Call (208) 290-3889
              </a>
              <Link href="/contact" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                Get Free Estimate <ChevronRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              className="mt-5 sm:mt-6 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {trustBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm border border-white/10">
                  <CheckCircle className="h-3 w-3 text-blue-300" /> {badge}
                </span>
              ))}
            </motion.div>
            <motion.div
              className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {stats.map((stat) => (
                <div key={stat.label || stat.number} className="rounded-xl bg-white/10 p-3 sm:p-4 backdrop-blur-sm border border-white/10">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />
                  <p className="mt-1 font-bold text-xl sm:text-2xl text-white">
                    {stat.number}<span className="text-blue-300">{stat.suffix}</span>
                  </p>
                  {stat.label && (
                    <p className="text-[10px] sm:text-xs font-medium text-white/75">{stat.label}</p>
                  )}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  )

  return (
    <>
      <link rel="preload" as="image" href="/images/preferred-plumbing-truck-interior.webp" fetchPriority="high" />
      <section className="relative flex min-h-[90svh] sm:min-h-[85vh] items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/preferred-plumbing-truck-interior.webp"
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.85] saturate-[1.05]"
        >
          <source src="/videos/preferred-plumbing-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
        <div className="absolute inset-0 hero-split-tone" />
        <div className="absolute inset-0 hero-vignette" />
        <div className="absolute inset-0 bg-blue/[0.12] mix-blend-soft-light pointer-events-none" />
        <div className="absolute inset-0 hero-texture" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 hero-light-sweep" />
        <TopWave className={waveTopPos} />
        <BottomWave />
        {content}
      </section>
    </>
  )
}

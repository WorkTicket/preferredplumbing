'use client'

import { useEffect, useState } from 'react'

function isCrawler(): boolean {
  return /bot|crawler|spider|ahrefs|semrush|bingpreview|googlebot|facebookexternalhit|lighthouse|pagespeed/i.test(
    navigator.userAgent,
  )
}

function shouldLoadHeroVideo(): boolean {
  if (typeof window === 'undefined') return false
  if (isCrawler()) return false
  if (!window.matchMedia('(min-width: 768px)').matches) return false

  const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
  if (connection?.saveData) return false
  if (connection?.effectiveType && ['slow-2g', '2g', '3g'].includes(connection.effectiveType)) return false

  return true
}

/** Desktop-only background video. Poster/LCP image stays in the server hero. */
export default function HeroVideo() {
  const [videoReady, setVideoReady] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (!shouldLoadHeroVideo()) return

    let cancelled = false

    const enableVideo = () => {
      if (!cancelled) setShowVideo(true)
    }

    const teardown = () => {
      window.removeEventListener('scroll', onIntent)
      window.removeEventListener('touchstart', onIntent)
      window.removeEventListener('pointerdown', onIntent)
    }

    function onIntent() {
      enableVideo()
      teardown()
    }

    window.addEventListener('scroll', onIntent, { once: true, passive: true })
    window.addEventListener('touchstart', onIntent, { once: true, passive: true })
    window.addEventListener('pointerdown', onIntent, { once: true })

    return () => {
      cancelled = true
      teardown()
    }
  }, [])

  if (!showVideo) return null

  return (
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
  )
}

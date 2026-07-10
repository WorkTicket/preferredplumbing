'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type AnimationVariant = 'fadeUp' | 'fadeIn' | 'slideUp' | 'scaleIn' | 'slideLeft' | 'slideRight'

const variantClass: Record<AnimationVariant, string> = {
  fadeUp: 'section-reveal-fade-up',
  fadeIn: 'section-reveal-fade-in',
  slideUp: 'section-reveal-slide-up',
  scaleIn: 'section-reveal-scale-in',
  slideLeft: 'section-reveal-slide-left',
  slideRight: 'section-reveal-slide-right',
}

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  as?: 'div' | 'section' | 'article' | 'header'
  once?: boolean
  id?: string
}

export default function AnimatedSection({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  duration = 0.5,
  as = 'section',
  once = true,
  id,
}: AnimatedSectionProps) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced, once])

  const Tag = as
  const style = {
    '--reveal-delay': `${delay}s`,
    '--reveal-duration': `${duration}s`,
  } as React.CSSProperties

  if (reduced) {
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    )
  }

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      className={`section-reveal ${variantClass[variant]} ${visible ? 'section-reveal-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  )
}

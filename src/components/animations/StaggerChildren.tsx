'use client'

import { useEffect, useRef, useState, Children, isValidElement } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  duration?: number
  variant?: 'fadeUp' | 'fadeIn' | 'slideUp'
}

const variantClass = {
  fadeUp: 'section-reveal-fade-up',
  fadeIn: 'section-reveal-fade-in',
  slideUp: 'section-reveal-slide-up',
} as const

export default function StaggerChildren({
  children,
  className = '',
  staggerDelay = 0.05,
  duration = 0.4,
  variant = 'fadeUp',
}: StaggerChildrenProps) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced])

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  const items = Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {items.map((child, index) => {
        if (!isValidElement(child)) return child

        const style = {
          '--reveal-delay': `${index * staggerDelay}s`,
          '--reveal-duration': `${duration}s`,
        } as React.CSSProperties

        return (
          <div
            key={child.key ?? index}
            className={`section-reveal ${variantClass[variant]} h-full min-h-0 min-w-0 ${visible ? 'section-reveal-visible' : ''}`}
            style={style}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

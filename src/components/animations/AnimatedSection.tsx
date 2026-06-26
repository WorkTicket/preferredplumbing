'use client'

import { useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SCROLL_TRIGGER_VIEWPORT } from '@/lib/animation-viewport'

type AnimationVariant = 'fadeUp' | 'fadeIn' | 'slideUp' | 'scaleIn' | 'slideLeft' | 'slideRight'

const variants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
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
  className,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.5,
  as = 'section',
  once = true,
  id,
}: AnimatedSectionProps) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  if (reduced) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = as === 'section' ? motion.section : as === 'article' ? motion.article : motion.div

  return (
    <MotionTag
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...SCROLL_TRIGGER_VIEWPORT, once }}
      variants={{
        hidden: variants[variant].hidden,
        visible: {
          ...variants[variant].visible,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}

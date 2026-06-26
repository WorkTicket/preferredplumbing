'use client'

import { motion, type Variants } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SCROLL_TRIGGER_VIEWPORT } from '@/lib/animation-viewport'

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  duration?: number
  variant?: 'fadeUp' | 'fadeIn' | 'slideUp'
}

const itemVariants: Record<string, Variants> = {
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
}

export default function StaggerChildren({
  children,
  className,
  staggerDelay = 0.05,
  duration = 0.4,
  variant = 'fadeUp',
}: StaggerChildrenProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0,
      },
    },
  }

  const childVariants: Variants = {
    hidden: itemVariants[variant].hidden,
    visible: {
      ...itemVariants[variant].visible,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_TRIGGER_VIEWPORT}
      variants={containerVariants}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={childVariants} className="w-full min-h-0">
              {child}
            </motion.div>
          ))
        : <motion.div variants={childVariants}>{children}</motion.div>}
    </motion.div>
  )
}

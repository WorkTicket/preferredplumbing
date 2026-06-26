'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Clock, CheckCircle } from 'lucide-react'

const stats = [
  {
    value: 38,
    suffix: '+',
    label: 'Years of Experience',
    icon: Award,
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Emergency Service',
    icon: Clock,
  },
  {
    value: 500,
    suffix: '+',
    label: 'Jobs Completed',
    icon: CheckCircle,
  },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const start = performance.now()

          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function StatisticsBanner() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container-page py-14 sm:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-0">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="relative flex flex-col items-center text-center px-6 sm:px-8"
              >
                {i > 0 && (
                  <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200" />
                )}
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="font-display text-[clamp(2.5rem,6vw,3.75rem)] font-black leading-none text-gray-900 tracking-tight">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Award, Clock, CheckCircle } from 'lucide-react'

const stats = [
  {
    display: '38+',
    label: 'Years of Experience',
    icon: Award,
  },
  {
    display: '24/7',
    label: 'Emergency Service',
    icon: Clock,
  },
  {
    display: '500+',
    label: 'Jobs Completed',
    icon: CheckCircle,
  },
]

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
                <div className="font-display text-[clamp(2.5rem,6vw,3.75rem)] font-black leading-none text-gray-900 tracking-tight tabular-nums">
                  {stat.display}
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

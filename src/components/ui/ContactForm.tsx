'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, ChevronRight } from 'lucide-react'
import { services } from '@/lib/data'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email optional').optional().or(z.literal('')),
  city: z.string().min(2, 'City is required'),
  service: z.string().min(1, 'Select a service'),
  message: z.string().min(10, 'Please describe your project briefly'),
  referral: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()
  const reduced = useReducedMotion()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
        setTimeout(() => router.push('/thank-you'), 1500)
      }
    } catch {
      // silent fail
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={reduced ? undefined : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col items-center justify-center rounded-xl bg-green-50 p-8 sm:p-12 text-center"
      >
        <motion.div
          initial={reduced ? undefined : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500" />
        </motion.div>
        <motion.p
          initial={reduced ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl font-bold text-gray-900"
        >
          Request Sent!
        </motion.p>
        <motion.p
          initial={reduced ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-2 text-sm sm:text-base text-gray-500"
        >
          We&apos;ll get back to you within 24 hours.
        </motion.p>
      </motion.div>
    )
  }

  const inputClass = 'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20 transition-all duration-300 text-sm'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Full Name *</label>
          <input {...register('name')} className={inputClass} placeholder="John Doe" />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="mt-1 text-xs text-red-500"
              >
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Phone *</label>
          <input {...register('phone')} type="tel" className={inputClass} placeholder="208-555-0123" />
          <AnimatePresence>
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="mt-1 text-xs text-red-500"
              >
                {errors.phone.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input {...register('email')} type="email" className={inputClass} placeholder="john@example.com" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">City / Zip *</label>
          <input {...register('city')} className={inputClass} placeholder="Spirit Lake, ID" />
          <AnimatePresence>
            {errors.city && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="mt-1 text-xs text-red-500"
              >
                {errors.city.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Service Needed *</label>
        <select {...register('service')} className={inputClass}>
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
        <AnimatePresence>
          {errors.service && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="mt-1 text-xs text-red-500"
            >
              {errors.service.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Describe the Job *</label>
        <textarea {...register('message')} rows={3} className={inputClass} placeholder="What's going on with your plumbing?" />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="mt-1 text-xs text-red-500"
            >
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">How did you hear about us?</label>
        <select {...register('referral')} className={inputClass}>
          <option value="">Select...</option>
          <option value="Google">Google</option>
          <option value="Facebook">Facebook</option>
          <option value="TikTok">TikTok</option>
          <option value="Friend">Friend / Referral</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue px-8 py-3.5 sm:py-4 font-bold text-white transition-all duration-300 hover:bg-blue-dark disabled:cursor-not-allowed disabled:opacity-60 shadow-premium-md active:scale-[0.97]"
      >
        {isSubmitting ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </motion.span>
        ) : (
          <span className="flex items-center gap-2">
            <ChevronRight className="h-5 w-5" /> Get My Free Estimate
          </span>
        )}
      </button>
    </form>
  )
}

'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, CheckCircle, ChevronRight } from 'lucide-react'
import { services } from '@/lib/data'
import { trackFormSubmission } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  city: z.string().min(2, 'City is required'),
  service: z.string().min(1, 'Select a service'),
  message: z.string().min(10, 'Please describe your project briefly'),
  referral: z.string().optional(),
})

type FormData = z.infer<typeof schema>

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="mt-1 text-xs text-red-500">{message}</p>
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const [submitError, setSubmitError] = useState(false)

  const onSubmit = async (data: FormData) => {
    setSubmitError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        trackFormSubmission(data.service)
        setSubmitted(true)
        setTimeout(() => router.push('/thank-you'), 1500)
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl bg-green-50 p-8 sm:p-12 text-center scale-in">
        <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500" />
        <p className="mt-4 text-xl sm:text-2xl font-bold text-gray-900">Request Sent!</p>
        <p className="mt-2 text-sm sm:text-base text-gray-500">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full min-h-[48px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20 transition-all duration-300'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Full Name *</label>
          <input {...register('name')} className={inputClass} placeholder="John Doe" />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Phone *</label>
          <input {...register('phone')} type="tel" className={inputClass} placeholder="208-555-0123" />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input {...register('email')} type="email" className={inputClass} placeholder="john@example.com" />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">City / Zip *</label>
          <input {...register('city')} className={inputClass} placeholder="Spirit Lake, ID" />
          <FieldError message={errors.city?.message} />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Service Needed *</label>
        <select {...register('service')} className={inputClass}>
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
        <FieldError message={errors.service?.message} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Describe the Job *</label>
        <textarea
          {...register('message')}
          rows={3}
          className={inputClass}
          placeholder="What's going on with your plumbing?"
        />
        <FieldError message={errors.message?.message} />
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

      {submitError && (
        <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3 text-center">
          Something went wrong. Please try again or call us at (208) 290-3889.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue px-8 py-3.5 sm:py-4 font-bold text-white transition-all duration-300 hover:bg-blue-dark disabled:cursor-not-allowed disabled:opacity-60 shadow-premium-md active:scale-[0.97]"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <ChevronRight className="h-5 w-5" /> Get My Free Estimate
          </span>
        )}
      </button>
    </form>
  )
}

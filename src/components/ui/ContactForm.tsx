'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, CheckCircle, ChevronRight } from 'lucide-react'
import { services } from '@/lib/data'
import { PHONE_DISPLAY, PHONE_HREF, trackFormSubmission } from '@/lib/utils'

const schema = z.object({
  name: z.string().trim().min(2, 'Name is required'),
  phone: z.string().trim().min(10, 'Valid phone number required'),
  email: z.string().trim().email('Enter a valid email').optional().or(z.literal('')),
  city: z.string().trim().min(2, 'City is required'),
  service: z.string().min(1, 'Select a service'),
  message: z.string().trim().min(10, 'Please describe your project briefly'),
  referral: z.string().optional(),
  _honey: z.string().max(0),
})

type FormData = z.infer<typeof schema>

function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1 text-xs text-red-500" role="alert">
      {message}
    </p>
  )
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      city: '',
      service: '',
      message: '',
      referral: '',
      _honey: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = (await res.json().catch(() => null)) as
        | { success?: boolean; error?: string; message?: string }
        | null

      if (!res.ok || !result?.success) {
        throw new Error(
          typeof result?.error === 'string'
            ? result.error
            : typeof result?.message === 'string'
              ? result.message
              : 'Unable to send your request right now.',
        )
      }

      trackFormSubmission(data.service)
      setSubmitted(true)
      setTimeout(() => router.push('/thank-you'), 1500)
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : 'Unable to send your request right now. Please call us directly.',
      )
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
    'w-full min-h-[48px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20 transition-all duration-300 disabled:opacity-60'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5" noValidate>
      <input
        type="text"
        {...register('_honey')}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            id="contact-name"
            {...register('name')}
            className={inputClass}
            placeholder="John Doe"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          <FieldError id="contact-name-error" message={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-gray-700">
            Phone *
          </label>
          <input
            id="contact-phone"
            {...register('phone')}
            type="tel"
            className={inputClass}
            placeholder="208-555-0123"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
          />
          <FieldError id="contact-phone-error" message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="contact-email"
            {...register('email')}
            type="email"
            className={inputClass}
            placeholder="john@example.com"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          <FieldError id="contact-email-error" message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="contact-city" className="mb-1 block text-sm font-medium text-gray-700">
            City / Zip *
          </label>
          <input
            id="contact-city"
            {...register('city')}
            className={inputClass}
            placeholder="Spirit Lake, ID"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? 'contact-city-error' : undefined}
          />
          <FieldError id="contact-city-error" message={errors.city?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className="mb-1 block text-sm font-medium text-gray-700">
          Service Needed *
        </label>
        <select
          id="contact-service"
          {...register('service')}
          className={inputClass}
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? 'contact-service-error' : undefined}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
        <FieldError id="contact-service-error" message={errors.service?.message} />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-gray-700">
          Describe the Job *
        </label>
        <textarea
          id="contact-message"
          {...register('message')}
          rows={4}
          className={`${inputClass} min-h-[120px]`}
          placeholder="What's going on with your plumbing?"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        <FieldError id="contact-message-error" message={errors.message?.message} />
      </div>

      <div>
        <label htmlFor="contact-referral" className="mb-1 block text-sm font-medium text-gray-700">
          How did you hear about us?
        </label>
        <select
          id="contact-referral"
          {...register('referral')}
          className={inputClass}
          disabled={isSubmitting}
        >
          <option value="">Select...</option>
          <option value="Google">Google</option>
          <option value="Facebook">Facebook</option>
          <option value="TikTok">TikTok</option>
          <option value="Friend">Friend / Referral</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {serverError && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
          {serverError}{' '}
          <a href={PHONE_HREF} className="font-semibold underline">
            Call {PHONE_DISPLAY}
          </a>{' '}
          instead.
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

      <p className="text-center text-xs text-gray-500">
        No spam. We&apos;ll respond within 1 business day.
      </p>
    </form>
  )
}

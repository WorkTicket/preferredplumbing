type GtagEventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const LEAD_FLAG_KEY = 'pp_quote_lead'
const GA_FALLBACK_ID = 'G-13HBCP9RZB'

function getGaId(): string {
  return process.env.NEXT_PUBLIC_GA_ID?.trim() || GA_FALLBACK_ID
}

/** Push through the global gtag installed in app/layout.tsx (queued until gtag.js loads). */
function gtag(...args: unknown[]) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag(...args)
    return
  }
  window.dataLayer = window.dataLayer || []
  // Mirror the standard gtag bootstrap: dataLayer.push(arguments)
  window.dataLayer.push(args)
}

export function trackEvent(
  action: string,
  params: GtagEventParams = {},
  options?: { event_callback?: () => void; event_timeout?: number },
) {
  const gaId = getGaId()
  const payload: GtagEventParams = { ...params, send_to: gaId }

  if (options?.event_callback) {
    let called = false
    const done = () => {
      if (called) return
      called = true
      options.event_callback?.()
    }
    gtag('event', action, {
      ...payload,
      event_callback: done,
      event_timeout: options.event_timeout ?? 2000,
    })
    window.setTimeout(done, options.event_timeout ?? 2000)
    return
  }

  gtag('event', action, payload)
}

export function trackPageView(url: string) {
  gtag('config', getGaId(), { page_path: url })
}

export function trackPhoneCall(location = 'Header') {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: location,
    link_text: location,
    outbound: false,
  })
}

/** Mark that a lead was just submitted so /thank-you can fire generate_lead once. */
export function markLeadSubmitted(formLocation: string) {
  try {
    sessionStorage.setItem(LEAD_FLAG_KEY, formLocation)
  } catch {
    /* ignore private-mode / blocked storage */
  }
}

export function consumeLeadFlag(): string | null {
  try {
    const value = sessionStorage.getItem(LEAD_FLAG_KEY)
    if (value) sessionStorage.removeItem(LEAD_FLAG_KEY)
    return value
  } catch {
    return null
  }
}

/**
 * Primary conversion event (mark as a Key Event in GA4 Admin → Events).
 * Prefer firing from /thank-you after a successful submit to avoid lost beacons on redirect.
 */
export function trackGenerateLead(params: {
  form_name?: string
  form_location?: string
  method?: string
  service?: string
}) {
  trackEvent('generate_lead', {
    form_name: params.form_name ?? 'Quote Request',
    form_location: params.form_location ?? 'unknown',
    method: params.method ?? 'form',
    service: params.service,
    currency: 'USD',
    value: 1,
  })
}

export function trackFormSubmit(
  formName = 'Quote Form',
  formLocation = 'unknown',
  options?: { event_callback?: () => void },
) {
  trackEvent(
    'form_submit',
    {
      form_name: formName,
      form_location: formLocation,
      event_category: 'conversion',
      event_label: formName,
    },
    options,
  )
}

/** Funnel step: user opened /contact (mark as Key Event in GA4 if desired). */
export function trackContactPageView() {
  trackEvent('contact_page_view', {
    page_location: typeof window !== 'undefined' ? window.location.href : '/contact',
    page_path: '/contact',
    event_category: 'conversion',
    event_label: 'Contact Page',
  })
}

export function trackClick(label: string) {
  trackEvent('click', {
    event_category: 'engagement',
    event_label: label,
  })
}

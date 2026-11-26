/** Canonical contact URL helpers. Prefer hash prefill over query strings so
 * crawlers don't invent thin duplicate URLs for every service/location CTA. */
export function contactHref(options?: { service?: string }): string {
  const service = options?.service?.trim();
  if (!service) return "/contact/";
  return `/contact/#service=${encodeURIComponent(service)}`;
}

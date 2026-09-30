/**
 * Marketing stats that auto-increment each January 1.
 * Baseline matches the site copy as of 2026: 38+ years / 500+ jobs.
 *
 * Default `now` is a calendar literal (not `new Date()`) so App Router pages
 * stay statically prerenderable. Bump STATS_BASELINE_YEAR after New Year.
 */
export const STATS_BASELINE_YEAR = 2026
const BASE_YEARS_EXPERIENCE = 38
const BASE_JOBS_COMPLETED = 500
const JOBS_ADDED_PER_YEAR = 150

/** Mid-year snapshot of the baseline year — no Date.now() / request time. */
function defaultNow(): Date {
  return new Date(Date.UTC(STATS_BASELINE_YEAR, 6, 1))
}

function yearsSinceBaseline(now: Date): number {
  return Math.max(0, now.getFullYear() - STATS_BASELINE_YEAR)
}

/** Combined years of experience (Ron & Hunter). +1 each Jan 1. */
export function getYearsOfExperience(now: Date = defaultNow()): number {
  return BASE_YEARS_EXPERIENCE + yearsSinceBaseline(now)
}

/** Approximate jobs completed. +150 each Jan 1. */
export function getJobsCompleted(now: Date = defaultNow()): number {
  return BASE_JOBS_COMPLETED + yearsSinceBaseline(now) * JOBS_ADDED_PER_YEAR
}

export function yearsExperienceLabel(now: Date = defaultNow()): string {
  return `${getYearsOfExperience(now)}+`
}

export function jobsCompletedLabel(now: Date = defaultNow()): string {
  return `${getJobsCompleted(now)}+`
}

/** e.g. "38+ Years Experience" */
export function yearsExperienceBadge(now: Date = defaultNow()): string {
  return `${yearsExperienceLabel(now)} Years Experience`
}

/** e.g. "38+ Years in the Trade" */
export function yearsInTradeTitle(now: Date = defaultNow()): string {
  return `${yearsExperienceLabel(now)} Years in the Trade`
}

/** Short phrase for SEO / schema: "38+ years of combined experience" */
export function combinedExperiencePhrase(now: Date = defaultNow()): string {
  return `${yearsExperienceLabel(now)} years of combined experience`
}

/** Footer copyright — same freeze as stats so the root layout stays static. */
export function copyrightYear(now: Date = defaultNow()): number {
  return now.getFullYear()
}

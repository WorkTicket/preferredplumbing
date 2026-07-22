/**
 * Marketing stats that auto-increment each January 1.
 * Baseline matches the site copy as of 2026: 38+ years / 500+ jobs.
 */
const STATS_BASELINE_YEAR = 2026
const BASE_YEARS_EXPERIENCE = 38
const BASE_JOBS_COMPLETED = 500
const JOBS_ADDED_PER_YEAR = 150

function yearsSinceBaseline(now: Date): number {
  return Math.max(0, now.getFullYear() - STATS_BASELINE_YEAR)
}

/** Combined years of experience (Ron & Hunter). +1 each Jan 1. */
export function getYearsOfExperience(now: Date = new Date()): number {
  return BASE_YEARS_EXPERIENCE + yearsSinceBaseline(now)
}

/** Approximate jobs completed. +150 each Jan 1. */
export function getJobsCompleted(now: Date = new Date()): number {
  return BASE_JOBS_COMPLETED + yearsSinceBaseline(now) * JOBS_ADDED_PER_YEAR
}

export function yearsExperienceLabel(now: Date = new Date()): string {
  return `${getYearsOfExperience(now)}+`
}

export function jobsCompletedLabel(now: Date = new Date()): string {
  return `${getJobsCompleted(now)}+`
}

/** e.g. "38+ Years Experience" */
export function yearsExperienceBadge(now: Date = new Date()): string {
  return `${yearsExperienceLabel(now)} Years Experience`
}

/** e.g. "38+ Years in the Trade" */
export function yearsInTradeTitle(now: Date = new Date()): string {
  return `${yearsExperienceLabel(now)} Years in the Trade`
}

/** Short phrase for SEO / schema: "38+ years of combined experience" */
export function combinedExperiencePhrase(now: Date = new Date()): string {
  return `${yearsExperienceLabel(now)} years of combined experience`
}

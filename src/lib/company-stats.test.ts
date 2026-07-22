import { describe, expect, it } from 'vitest'
import {
  getJobsCompleted,
  getYearsOfExperience,
  jobsCompletedLabel,
  yearsExperienceLabel,
} from './company-stats'

describe('company-stats', () => {
  it('returns baseline values during the baseline year', () => {
    const mid2026 = new Date(2026, 6, 21)
    expect(getYearsOfExperience(mid2026)).toBe(38)
    expect(getJobsCompleted(mid2026)).toBe(500)
    expect(yearsExperienceLabel(mid2026)).toBe('38+')
    expect(jobsCompletedLabel(mid2026)).toBe('500+')
  })

  it('adds one year and 150 jobs on January 1 of the next year', () => {
    const jan2027 = new Date(2027, 0, 1)
    expect(getYearsOfExperience(jan2027)).toBe(39)
    expect(getJobsCompleted(jan2027)).toBe(650)
  })

  it('keeps compounding in later years', () => {
    const jan2030 = new Date(2030, 0, 1)
    expect(getYearsOfExperience(jan2030)).toBe(42)
    expect(getJobsCompleted(jan2030)).toBe(1100)
  })

  it('does not go below baseline for dates before the baseline year', () => {
    const late2025 = new Date(2025, 11, 31)
    expect(getYearsOfExperience(late2025)).toBe(38)
    expect(getJobsCompleted(late2025)).toBe(500)
  })
})

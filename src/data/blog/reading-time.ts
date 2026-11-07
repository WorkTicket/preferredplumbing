/** Adult reading speed for instructional non-fiction. 200 wpm is the common honest estimate. */
export const WORDS_PER_MINUTE = 200

export function countWords(text: string): number {
  return text
    .replace(/##\s+/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

export function getContentWordCount(content: readonly string[]): number {
  return content.reduce((sum, block) => sum + countWords(block), 0)
}

/** Whole minutes, minimum 1. Rounded so a 250-word post is 1 min, not inflated to 2. */
export function getReadTimeMinutes(content: readonly string[]): number {
  const words = getContentWordCount(content)
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

export function formatReadTime(minutes: number): string {
  return minutes === 1 ? '1 min read' : `${minutes} min read`
}

export function isoDurationMinutes(minutes: number): string {
  return `PT${minutes}M`
}

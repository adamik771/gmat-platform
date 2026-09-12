export function formatQuestionTime(minutes: number): string {
  if (!Number.isFinite(minutes) || minutes < 0) return "Not recorded"
  const seconds = Math.round(minutes * 60)
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`
}

export function difficultyLabel(difficulty: string): string {
  return ({ Beginner: "Easy", Intermediate: "Medium", Advanced: "Hard" } as Record<string, string>)[difficulty] ?? difficulty
}

export function withMissingWeeks(data: ScoreTrendPoint[]): ScoreTrendPoint[] {
  const result: ScoreTrendPoint[] = []
  const weekMs = 7 * 86400000
  for (const point of data) {
    const previous = result.at(-1)
    if (previous) {
      for (let date = Date.parse(previous.weekKey) + weekMs; date < Date.parse(point.weekKey); date += weekMs) {
        const weekKey = new Date(date).toISOString().slice(0, 10)
        result.push({ weekKey, weekLabel: weekKey, index: result.length, overallAccuracy: null, quant: null, verbal: null, di: null, attempts: 0, sectionAttempts: { Quant: 0, Verbal: 0, DI: 0 } })
      }
    }
    result.push(point)
  }
  return result
}
import type { ScoreTrendPoint } from "./AnalyticsClient"

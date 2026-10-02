/** Sentinel: seen, but the historical question-level encounter time is unknown. */
export const UNKNOWN_EXPOSURE_AT = 1

function object(value: unknown): Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {}
}

/** No writes or guessed pin mappings: retain known IDs, never infer them from counts. */
export function mergeChapterExposure(
  attempts: ReadonlyMap<string, number>,
  chapterProgress: unknown,
  now = Date.now(),
): Map<string, number> {
  const seen = new Map(attempts)
  function mark(id: string, time: unknown) {
    if (!id) return
    const at = typeof time === "number" && Number.isFinite(time) && time > 0 && time <= now ? time : UNKNOWN_EXPOSURE_AT
    seen.set(id, Math.max(seen.get(id) ?? 0, at))
  }
  for (const value of Object.values(object(chapterProgress))) {
    const chapter = object(value)
    for (const [id, value] of Object.entries(object(chapter.questions))) {
      const q = object(value)
      const selected = typeof q.selected === "number" && Number.isInteger(q.selected) && q.selected >= 0
      const twoPartSelected = Array.isArray(q.twoPartSelections) && q.twoPartSelections.some((v) => typeof v === "number" && Number.isInteger(v) && v >= 0)
      if (q.submitted === true || q.skipped === true || selected || twoPartSelected) mark(id, UNKNOWN_EXPOSURE_AT)
    }
    for (const [id, at] of Object.entries(object(chapter.questionExposures))) {
      if (typeof at === "number" && Number.isFinite(at) && at > 0) mark(id, at)
    }
    for (const value of Object.values(object(chapter.problemSetRuns))) {
      const run = object(value)
      if (!Array.isArray(run.questionIds) || !Array.isArray(run.answers) || !run.answers.every((answer) => typeof answer === "boolean") || !Number.isInteger(run.idx) || run.idx !== run.answers.length || Number(run.idx) < 0 || Number(run.idx) > run.questionIds.length) continue
      for (const id of run.questionIds.slice(0, Number(run.idx))) if (typeof id === "string") mark(id, run.at)
    }
    for (const value of Object.values(object(chapter.problemSetResults))) {
      const result = object(value)
      const history = Array.isArray(result.history) ? result.history : []
      for (const value of [result, ...history]) {
        const completed = object(value)
        if (!Array.isArray(completed.questionIds) || completed.total !== completed.questionIds.length || Number(completed.total) <= 0) continue
        for (const id of completed.questionIds) if (typeof id === "string") mark(id, completed.at)
      }
    }
  }
  return seen
}

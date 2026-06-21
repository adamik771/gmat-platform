/**
 * Union-merge two chapter-progress snapshots without losing anything from
 * either side.
 *
 * Why this exists: the chapter reader hydrates from two sources — localStorage
 * (this device) and the server copy (user_state, possibly written by another
 * device). The old heuristic picked whichever had the bigger
 * `sectionsRead + questions` count and DISCARDED the other. It never counted
 * `problemSetResults`, so a graded set finished locally but not yet synced to
 * the server (e.g. completed right before navigating away) tied on the count,
 * lost the tie, and vanished on reload. Merging field-by-field fixes that: read
 * sections OR together, keep the more-complete question per id, keep the
 * problem-set result with more attempts, and take the longer note.
 *
 * Pure + dependency-free so it can be unit-tested and shared. Structurally
 * typed (generic) so the reader's richer ChapterProgress flows through intact.
 */

export interface MergeableQuestion {
  selected?: number | null
  submitted?: boolean
  selfExplanation?: string
}

interface SetResult {
  correct: number
  total: number
}

export interface MergeableProgress {
  sectionsRead: Record<string, boolean>
  questions: Record<string, MergeableQuestion>
  problemSetResults: Record<"easy" | "medium" | "hard", SetResult | undefined>
  notes?: Record<string, string>
  lastSeenAt?: number
  firstSeenAt?: number
}

/** Higher = keep this question when two ids collide. */
function questionScore(q: MergeableQuestion | undefined): number {
  if (!q) return -1
  return (
    (q.submitted ? 4 : 0) +
    (q.selected !== null && q.selected !== undefined ? 2 : 0) +
    (q.selfExplanation ? 1 : 0)
  )
}

/** Keep the graded-set result with more attempts (a finished set beats a partial). */
function pickSetResult(
  a: SetResult | undefined,
  b: SetResult | undefined
): SetResult | undefined {
  if (!a) return b
  if (!b) return a
  return b.total > a.total ? b : a
}

export function mergeProgress<T extends MergeableProgress>(a: T, b: T): T {
  const sectionsRead: Record<string, boolean> = { ...a.sectionsRead }
  for (const [k, v] of Object.entries(b.sectionsRead)) {
    if (v) sectionsRead[k] = true
  }

  const questions: Record<string, MergeableQuestion> = { ...a.questions }
  for (const [k, v] of Object.entries(b.questions)) {
    if (questionScore(v) > questionScore(questions[k])) questions[k] = v
  }

  const problemSetResults = {
    easy: pickSetResult(a.problemSetResults?.easy, b.problemSetResults?.easy),
    medium: pickSetResult(a.problemSetResults?.medium, b.problemSetResults?.medium),
    hard: pickSetResult(a.problemSetResults?.hard, b.problemSetResults?.hard),
  }

  const notes: Record<string, string> = { ...(a.notes ?? {}) }
  for (const [k, v] of Object.entries(b.notes ?? {})) {
    if (v && v.length > (notes[k]?.length ?? 0)) notes[k] = v
  }

  const lastSeenAt = Math.max(a.lastSeenAt ?? 0, b.lastSeenAt ?? 0) || undefined
  const firsts = [a.firstSeenAt, b.firstSeenAt].filter(
    (t): t is number => typeof t === "number"
  )
  const firstSeenAt = firsts.length ? Math.min(...firsts) : undefined

  return {
    ...a,
    sectionsRead,
    questions,
    problemSetResults,
    notes,
    lastSeenAt,
    firstSeenAt,
  } as T
}

/** Content fingerprint excluding timestamps — used to decide whether a merge
 *  produced anything new vs the server copy (so we only push when it heals drift). */
export function progressContentSig(p: MergeableProgress): string {
  return JSON.stringify({
    s: p.sectionsRead,
    q: p.questions,
    r: p.problemSetResults,
    n: p.notes ?? {},
  })
}

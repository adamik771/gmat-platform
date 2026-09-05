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
  /** Two-Part Analysis: one selection per column. Single-select questions omit it. */
  twoPartSelections?: (number | null)[]
}

interface SetResult {
  /** Most recent run. */
  correct: number
  total: number
  /** Epoch ms of the finish. Optional — legacy results predate it. */
  at?: number
  /** Cumulative counters added in Sep 2026. Legacy rows fall back to one run. */
  attempts?: number
  lifetimeCorrect?: number
  lifetimeTotal?: number
  /** Recent run identities let two devices union concurrent retakes safely. */
  history?: Array<{ id: string; correct: number; total: number; at: number }>
}

interface SetRun {
  idx: number
  answers: boolean[]
  /** Epoch ms of the last checkpoint. Optional — legacy runs predate it. */
  at?: number
}

export interface MergeableProgress {
  sectionsRead: Record<string, boolean>
  questions: Record<string, MergeableQuestion>
  problemSetResults: Record<"easy" | "medium" | "hard", SetResult | undefined>
  /** Mid-set graded-run resume state; cleared when the set finishes. */
  problemSetRuns?: Partial<Record<"easy" | "medium" | "hard", SetRun | undefined>>
  notes?: Record<string, string>
  lastSeenAt?: number
  firstSeenAt?: number
}

/**
 * THE chapter-completion rule, shared by every surface that counts
 * "chapters done" (/chapters cards, dashboard Course progress, study-plan
 * chapter counts / reading queue). A chapter is read when every READING
 * section is marked read — pretest and summary cards are check-ins, not
 * gates. Before this helper, the dashboard and study-plan required EVERY
 * section (pretest + summary included), so a student who read everything
 * but never clicked those two cards sat at a permanent 0% "Course
 * progress" while /chapters called the same chapter complete.
 */
export function isChapterRead(
  sections: ReadonlyArray<{ id: string; type: string }>,
  sectionsRead: Record<string, boolean> | null | undefined
): boolean {
  const readings = sections.filter((s) => s.type === "reading")
  if (readings.length === 0) return false
  return readings.every((s) => !!sectionsRead?.[s.id])
}

/** Higher = keep this question when two ids collide. */
function questionScore(q: MergeableQuestion | undefined): number {
  if (!q) return -1
  const hasSelection =
    (q.selected !== null && q.selected !== undefined) ||
    (q.twoPartSelections?.some((s) => s !== null && s !== undefined) ?? false)
  return (
    (q.submitted ? 4 : 0) +
    (hasSelection ? 2 : 0) +
    (q.selfExplanation ? 1 : 0)
  )
}

/**
 * Pick the graded-set result to keep across a two-device merge. When
 * either side carries a finish timestamp, the newer finish wins — a
 * retake's score must replace the old one regardless of which device
 * merges it (equal-total ties used to keep the LOCAL side, so a stale
 * device flip-flopped the recorded score forever). Legacy results
 * without `at` fall back to the more-attempts rule.
 */
function pickSetResult(
  a: SetResult | undefined,
  b: SetResult | undefined
): SetResult | undefined {
  if (!a) return b
  if (!b) return a
  const latest =
    (a.at ?? 0) !== (b.at ?? 0)
      ? (b.at ?? 0) > (a.at ?? 0)
        ? b
        : a
      : b.total > a.total
        ? b
        : a

  const hasCumulative =
    a.attempts !== undefined ||
    b.attempts !== undefined ||
    a.lifetimeCorrect !== undefined ||
    b.lifetimeCorrect !== undefined ||
    a.lifetimeTotal !== undefined ||
    b.lifetimeTotal !== undefined ||
    a.history !== undefined ||
    b.history !== undefined
  if (!hasCumulative) return latest

  const historyById = new Map<
    string,
    { id: string; correct: number; total: number; at: number }
  >()
  for (const entry of [...(a.history ?? []), ...(b.history ?? [])]) {
    historyById.set(entry.id, entry)
  }
  const history = [...historyById.values()]
    .sort((left, right) => left.at - right.at)
    .slice(-100)
  const historyCorrect = history.reduce((sum, entry) => sum + entry.correct, 0)
  const historyTotal = history.reduce((sum, entry) => sum + entry.total, 0)

  // Cumulative fields are monotonic. Taking the maximum heals a stale-device
  // merge without double-counting the same run from local and server copies.
  return {
    ...latest,
    attempts: Math.max(
      a.attempts ?? (a.total > 0 ? 1 : 0),
      b.attempts ?? (b.total > 0 ? 1 : 0),
      history.length,
    ),
    lifetimeCorrect: Math.max(
      a.lifetimeCorrect ?? a.correct,
      b.lifetimeCorrect ?? b.correct,
      historyCorrect,
    ),
    lifetimeTotal: Math.max(
      a.lifetimeTotal ?? a.total,
      b.lifetimeTotal ?? b.total,
      historyTotal,
    ),
    ...(history.length > 0 ? { history } : {}),
  }
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

  // Keep the in-flight run that has graded more questions (a longer run
  // is strictly more progress) — then kill the zombie: a checkpoint from
  // BEFORE the set's recorded finish is not an in-flight run, it's the
  // stale leftovers of the run that produced the result. Without this, a
  // finished set regressed to a "Resume · Qn" chip whenever another
  // device merged in its old checkpoint, and re-running it overwrote the
  // genuine score. Timestamps are required on BOTH sides of that
  // comparison so legacy (unstamped) runs are never deleted.
  const problemSetRuns: MergeableProgress["problemSetRuns"] = {}
  for (const d of ["easy", "medium", "hard"] as const) {
    const ra = a.problemSetRuns?.[d]
    const rb = b.problemSetRuns?.[d]
    const winner =
      (rb?.answers.length ?? -1) > (ra?.answers.length ?? -1) ? rb : ra
    if (!winner) continue
    const result = problemSetResults[d]
    if (result?.at && winner.at && result.at > winner.at) continue
    problemSetRuns[d] = winner
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
    problemSetRuns,
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
    u: p.problemSetRuns ?? {},
    n: p.notes ?? {},
  })
}

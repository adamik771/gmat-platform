/**
 * Durable active-practice snapshots.
 *
 * One bounded snapshot is kept per user. The browser writes it immediately
 * and the API mirrors it into user_state so a chapter test or custom set can
 * resume after navigation, refresh, browser restart, or a device switch.
 * Finished sessions are never restored.
 */

export const PRACTICE_RESUME_VERSION = 1 as const
export const PRACTICE_RESUME_TTL_MS = 7 * 24 * 60 * 60_000
const MAX_QUESTION_MS = 30 * 60_000
const MAX_QUESTIONS = 100

export type ResumeConfidence = "low" | "medium" | "high"

export interface PracticeResumeQuestionState {
  selected: number | null
  twoPartSelections?: (number | null)[]
  submitted: boolean
  elapsedMs: number
  hintsRevealed: number
  confidence: ResumeConfidence | null
  firstInteractionMs: number | null
}

export interface PracticeResumeSnapshot {
  version: typeof PRACTICE_RESUME_VERSION
  userId: string
  slug: string
  questionIds: string[]
  states: PracticeResumeQuestionState[]
  currentIdx: number
  currentElapsedMs: number
  mode: "exam" | "study"
  isReplay: boolean
  updatedAt: number
}

export interface ResumeQuestionShape {
  id: string
  options: unknown[]
  twoPartColumns?: unknown[]
  hints?: unknown[]
}

function finiteInt(value: unknown, min: number, max: number): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= min &&
    value <= max
  )
}

function parseRaw(raw: unknown): unknown {
  if (typeof raw !== "string") return raw
  try {
    return JSON.parse(raw) as unknown
  } catch {
    return null
  }
}

/** Structural validation used by the API before a snapshot enters user_state. */
export function parsePracticeResumeSnapshot(
  raw: unknown
): PracticeResumeSnapshot | null {
  const value = parseRaw(raw)
  if (!value || typeof value !== "object" || Array.isArray(value)) return null
  const v = value as Partial<PracticeResumeSnapshot>
  if (
    v.version !== PRACTICE_RESUME_VERSION ||
    typeof v.userId !== "string" ||
    v.userId.length < 1 ||
    v.userId.length > 100 ||
    typeof v.slug !== "string" ||
    v.slug.length < 1 ||
    v.slug.length > 160 ||
    !Array.isArray(v.questionIds) ||
    v.questionIds.length < 1 ||
    v.questionIds.length > MAX_QUESTIONS ||
    !v.questionIds.every(
      (id) => typeof id === "string" && id.length > 0 && id.length <= 160
    ) ||
    new Set(v.questionIds).size !== v.questionIds.length ||
    !Array.isArray(v.states) ||
    v.states.length !== v.questionIds.length ||
    !finiteInt(v.currentIdx, 0, v.questionIds.length - 1) ||
    !finiteInt(v.currentElapsedMs, 0, MAX_QUESTION_MS) ||
    (v.mode !== "exam" && v.mode !== "study") ||
    typeof v.isReplay !== "boolean" ||
    !finiteInt(v.updatedAt, 1, Number.MAX_SAFE_INTEGER)
  ) {
    return null
  }

  for (const state of v.states) {
    if (!state || typeof state !== "object" || Array.isArray(state)) return null
    const s = state as Partial<PracticeResumeQuestionState>
    if (
      !(
        s.selected === null ||
        finiteInt(s.selected, 0, 99)
      ) ||
      typeof s.submitted !== "boolean" ||
      !finiteInt(s.elapsedMs, 0, MAX_QUESTION_MS) ||
      !finiteInt(s.hintsRevealed, 0, 10) ||
      !(
        s.confidence === null ||
        s.confidence === "low" ||
        s.confidence === "medium" ||
        s.confidence === "high"
      ) ||
      !(
        s.firstInteractionMs === null ||
        finiteInt(s.firstInteractionMs, 0, MAX_QUESTION_MS)
      ) ||
      !(
        s.twoPartSelections === undefined ||
        (Array.isArray(s.twoPartSelections) &&
          s.twoPartSelections.length <= 10 &&
          s.twoPartSelections.every(
            (selection) =>
              selection === null || finiteInt(selection, 0, 99)
          ))
      )
    ) {
      return null
    }
  }

  return v as PracticeResumeSnapshot
}

/**
 * Validate a snapshot against the live deck and return the deck in the saved
 * order. Any content change or malformed answer invalidates the snapshot
 * instead of attaching old answers to new questions.
 */
export function restorePracticeResume<T extends ResumeQuestionShape>(
  raw: unknown,
  incomingQuestions: T[],
  expected: { userId: string; slug: string; now?: number }
): { snapshot: PracticeResumeSnapshot; questions: T[] } | null {
  const snapshot = parsePracticeResumeSnapshot(raw)
  const now = expected.now ?? Date.now()
  if (
    !snapshot ||
    snapshot.userId !== expected.userId ||
    snapshot.slug !== expected.slug ||
    now - snapshot.updatedAt > PRACTICE_RESUME_TTL_MS ||
    snapshot.updatedAt > now + 60_000 ||
    snapshot.questionIds.length !== incomingQuestions.length
  ) {
    return null
  }

  const byId = new Map(incomingQuestions.map((question) => [question.id, question]))
  const ordered: T[] = []
  for (const id of snapshot.questionIds) {
    const question = byId.get(id)
    if (!question) return null
    ordered.push(question)
  }

  for (let i = 0; i < ordered.length; i++) {
    const question = ordered[i]
    const state = snapshot.states[i]
    if (state.selected !== null && state.selected >= question.options.length) {
      return null
    }
    const columnCount = question.twoPartColumns?.length ?? 0
    if (columnCount > 0) {
      if (
        !state.twoPartSelections ||
        state.twoPartSelections.length !== columnCount ||
        state.twoPartSelections.some(
          (selection) => selection !== null && selection >= question.options.length
        )
      ) {
        return null
      }
    } else if (state.twoPartSelections !== undefined) {
      return null
    }
    if (state.hintsRevealed > (question.hints?.length ?? 0)) return null
  }

  return { snapshot, questions: ordered }
}

export function practiceResumeStorageKey(userId: string): string {
  return `practice-resume:${userId}`
}

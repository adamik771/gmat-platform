/**
 * Pure core of the practice/review session save (SessionClient.saveSession).
 *
 * Only SUBMITTED questions are persisted: ending a session early used to write
 * the untouched remainder as attempts too (selected_answer null, 0ms,
 * is_correct false), which recorded blanks as wrong answers and poisoned
 * per-topic accuracy and the skill model. It also made the stored numbers
 * inconsistent — total_questions/correct_count covered ALL questions while
 * accuracy was computed over answered ones. Everything here derives from the
 * answered set, so the three fields always agree.
 *
 * Mock timeouts are different ON PURPOSE: MockRunner scores unanswered as
 * wrong for exam realism and builds its own payload — it does not go through
 * this helper.
 *
 * Extracted pure (no React/DOM) so the semantics are unit-testable.
 */

export interface AnsweredSummary<A> {
  attempts: A[]
  totalQuestions: number
  correctCount: number
  /** Whole-number percent over the ANSWERED set. */
  accuracy: number
}

/**
 * Reduce per-question state to the persistable summary. Returns null when
 * nothing was submitted — an all-blank session is not worth a row.
 */
export function summarizeAnsweredAttempts<A>(
  items: Array<{ submitted: boolean; correct: boolean; attempt: A }>
): AnsweredSummary<A> | null {
  const answered = items.filter((i) => i.submitted)
  if (answered.length === 0) return null
  const correctCount = answered.filter((i) => i.correct).length
  return {
    attempts: answered.map((i) => i.attempt),
    totalQuestions: answered.length,
    correctCount,
    accuracy: Math.round((correctCount / answered.length) * 100),
  }
}

interface BlankFilterable {
  selectedAnswer: number | null
  isCorrect: boolean
  timeSpentMs: number
}

/**
 * Server-side counterpart of summarizeAnsweredAttempts, for payloads the
 * client fix can't reach (a practice tab opened before the deploy still runs
 * the old JS and POSTs the untouched remainder of an abandoned session).
 *
 * A blank = no answer AND no time on the question — the signature of a
 * never-submitted item. Submitted two-part answers store selectedAnswer null
 * but always carry time, so they never match. Returns null when nothing
 * answered remains.
 *
 * Mock payloads must NOT go through this: a timed-out mock records unanswered
 * as wrong on purpose (exam realism), and its stored totals deliberately
 * cover the full section.
 */
export function dropBlankAttempts<A extends BlankFilterable>(
  attempts: A[]
): AnsweredSummary<A> | null {
  const answered = attempts.filter(
    (a) => a.selectedAnswer !== null || a.timeSpentMs > 0
  )
  if (answered.length === 0) return null
  const correctCount = answered.filter((a) => a.isCorrect).length
  return {
    attempts: answered,
    totalQuestions: answered.length,
    correctCount,
    accuracy: Math.round((correctCount / answered.length) * 100),
  }
}

/**
 * Whether the beforeunload guard should be armed. On the results screen the
 * guard stays on until the save actually lands: the POST can fail after
 * finish (dead wifi, expired session), and closing the tab then would lose
 * the whole session while the banner still offers Retry. `idle` with
 * submitted answers is also guarded — it only occurs in the pre-save
 * window right after finishing; nothing-answered sessions have
 * anySubmitted false and stay unguarded either way.
 */
export function shouldGuardUnload(
  anySubmitted: boolean,
  finished: boolean,
  saveStatus: string
): boolean {
  return anySubmitted && (!finished || saveStatus !== "saved")
}

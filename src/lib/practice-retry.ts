/**
 * Pure pieces of the results-screen retry flow, extracted so the
 * "redo missed questions starts a clean attempt" invariant is unit-testable.
 *
 * Background (friend-reported bug): "Practice again" was a <Link> to the URL
 * the results screen was already mounted on. Same-URL App Router navigation
 * never remounts the client component, so no fresh attempt started — and
 * before the questions-freeze fix, the server's Date.now()-seeded reshuffle
 * flowed into the mounted component and was scored against the stale
 * per-index states, rendering a fake ~0% result. Retry is now a client-side
 * state reset built from these helpers.
 */
export interface RetryQuestionLike {
  correctAnswer: number
  twoPartCorrectAnswers?: number[]
}

export interface RetryStateLike {
  submitted: boolean
  selected: number | null
  twoPartSelections?: (number | null)[]
}

/** Correctness for a submitted answer (single-select or Two-Part). */
export function isAnswerCorrect(
  q: RetryQuestionLike,
  state: RetryStateLike
): boolean {
  if (!state.submitted) return false
  if (q.twoPartCorrectAnswers && state.twoPartSelections) {
    return q.twoPartCorrectAnswers.every(
      (ans, i) => state.twoPartSelections![i] === ans
    )
  }
  return state.selected === q.correctAnswer
}

/**
 * The retry set: questions that were SUBMITTED and answered wrong.
 * Skipped (never-submitted) questions are not "missed" — they were never
 * attempted, and pulling them in would grade blanks as retries.
 */
export function pickMissed<T extends RetryQuestionLike>(
  questions: readonly T[],
  states: readonly RetryStateLike[]
): T[] {
  return questions.filter(
    (q, i) => states[i]?.submitted && !isAnswerCorrect(q, states[i])
  )
}

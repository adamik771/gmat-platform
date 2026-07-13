/**
 * Active answering time for a practice session.
 *
 * The session clock must measure time spent ANSWERING, not wall-clock time:
 * it pauses the moment a question is submitted (while the student reads the
 * solution) and resumes when they move to a not-yet-answered question. The
 * same number feeds the header clock, the results screen, and the persisted
 * total_time_ms, so they can never disagree.
 */
export interface TimedQuestionState {
  submitted: boolean
  /** Time banked on this question at submit. */
  elapsedMs: number
}

export function activeSessionMs(
  states: readonly TimedQuestionState[],
  /** The currently displayed question, or null on the results screen. */
  inFlight: { submitted: boolean; startedAt: number; now: number } | null
): number {
  let total = 0
  for (const s of states) if (s.submitted) total += s.elapsedMs
  if (inFlight && !inFlight.submitted) {
    total += Math.max(0, inFlight.now - inFlight.startedAt)
  }
  return total
}

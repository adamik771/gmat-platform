/**
 * Automated outreach sequence definitions (pure, no I/O — unit-tested).
 *
 * Sequences A-C are time-offset drips from a single trigger (signup, founding
 * reservation, error-log lead): each step is scheduled `offsetDays` after the
 * trigger. Sequences D (inactive) and E (milestone) are condition/event driven
 * — each of their steps is enqueued individually when the cron detects the
 * condition (inactivity) or an event fires (a milestone), so their `offsetDays`
 * is informational only and `plannedSteps()` is not used for them.
 *
 * Every step here is marketing email and therefore gated on consent +
 * unsubscribe by the queue worker. Template copy lives in ./templates.
 */

export type SequenceId =
  | "signup"
  | "founding"
  | "error-log"
  | "inactive"
  | "milestone"

export interface SequenceStep {
  /** Stable per-sequence step id (also used in the queue dedupe key). */
  step: string
  /** Days after the trigger (A-C). For D/E this documents the intended cadence. */
  offsetDays: number
  /** Key into the template registry (./templates). */
  templateKey: string
}

/** Drip sequences keyed off a single trigger time. */
export const DRIP_SEQUENCES = ["signup", "founding", "error-log"] as const
export type DripSequenceId = (typeof DRIP_SEQUENCES)[number]

export const SEQUENCES: Record<SequenceId, SequenceStep[]> = {
  // A. New signup
  signup: [
    { step: "welcome", offsetDays: 0, templateKey: "signup-welcome" },
    { step: "start", offsetDays: 1, templateKey: "signup-start" },
    { step: "consult", offsetDays: 2, templateKey: "signup-consult" },
    { step: "invite", offsetDays: 3, templateKey: "signup-invite" },
    { step: "founding", offsetDays: 5, templateKey: "signup-founding" },
    { step: "feedback", offsetDays: 10, templateKey: "signup-feedback" },
  ],
  // B. Founding reservation
  founding: [
    { step: "confirm", offsetDays: 0, templateKey: "founding-confirm" },
    { step: "includes", offsetDays: 2, templateKey: "founding-includes" },
    { step: "referral", offsetDays: 5, templateKey: "founding-referral" },
    { step: "next", offsetDays: 10, templateKey: "founding-next" },
  ],
  // C. Error-log / template lead
  "error-log": [
    { step: "deliver", offsetDays: 0, templateKey: "errorlog-deliver" },
    { step: "howto", offsetDays: 2, templateKey: "errorlog-howto" },
    { step: "beta", offsetDays: 5, templateKey: "errorlog-beta" },
    { step: "founding", offsetDays: 8, templateKey: "errorlog-founding" },
  ],
  // D. Inactive user (cron-detected; each step enqueued when its threshold trips)
  inactive: [
    { step: "restart", offsetDays: 3, templateKey: "inactive-restart" },
    { step: "plan", offsetDays: 7, templateKey: "inactive-plan" },
    { step: "blocked", offsetDays: 14, templateKey: "inactive-blocked" },
  ],
  // E. Milestone referral (event-driven; one email per milestone reached)
  milestone: [
    { step: "first-practice", offsetDays: 0, templateKey: "milestone-first-practice" },
    { step: "mock-review", offsetDays: 0, templateKey: "milestone-mock-review" },
    { step: "progress", offsetDays: 0, templateKey: "milestone-progress" },
  ],
}

/** Inactivity day-thresholds that trigger sequence D, in order. */
export const INACTIVE_THRESHOLDS = SEQUENCES.inactive.map((s) => ({
  days: s.offsetDays,
  step: s.step,
  templateKey: s.templateKey,
}))

export interface PlannedStep {
  step: string
  templateKey: string
  /** ISO timestamp this step should send at. */
  scheduledFor: string
}

const DAY_MS = 24 * 60 * 60 * 1000

/**
 * Expand a drip sequence (A-C) into concrete scheduled steps from a trigger
 * time. Pure: given the same start it always returns the same plan. Throws for
 * non-drip sequences (inactive/milestone are enqueued per-step on detection).
 */
export function plannedSteps(
  sequence: DripSequenceId,
  startIso: string
): PlannedStep[] {
  const start = new Date(startIso).getTime()
  if (Number.isNaN(start)) {
    throw new Error(`plannedSteps: invalid startIso "${startIso}"`)
  }
  return SEQUENCES[sequence].map((s) => ({
    step: s.step,
    templateKey: s.templateKey,
    scheduledFor: new Date(start + s.offsetDays * DAY_MS).toISOString(),
  }))
}

/** Look up a single step (used by D/E single-step enqueues). */
export function findStep(
  sequence: SequenceId,
  step: string
): SequenceStep | undefined {
  return SEQUENCES[sequence].find((s) => s.step === step)
}

/** Stable idempotency key for a queued step. */
export function dedupeKey(
  recipientId: string,
  sequence: SequenceId,
  step: string
): string {
  return `${recipientId}:${sequence}:${step}`
}

import type { Section } from "@/types"

/**
 * Per-question target time in seconds by section. Derived from the
 * GMAT Focus section allotments (45 min / questions-per-section) and
 * rounded to match the same targets the analytics page already uses,
 * so live pacing feedback and historical pacing agree.
 *
 *   Quant  — 21 q / 45 min ≈ 2.14 min/q → floored to 2.0 min for urgency
 *   Verbal — 23 q / 45 min ≈ 1.96 min/q → tuned to 1.75 min to account for CR ≈ 2.0, RC ≈ 1.0 after the reading pass
 *   DI     — 20 q / 45 min ≈ 2.25 min/q → set to 2.5 min because DI rewards careful reading, with a longer acceptable tail
 */
export const SECTION_TARGET_SECONDS: Record<Section, number> = {
  Quant: 120,
  Verbal: 105,
  DI: 150,
}

export type PacingState = "fast" | "on-pace" | "slow" | "long"

export interface PacingStatus {
  state: PacingState
  label: string
  color: string
  bg: string
  ratio: number
}

/**
 * Classify live per-question elapsed time against the section target.
 *
 * Thresholds as fractions of target:
 *   < 0.5   — "fast"    (green, muted — either flying or careless)
 *   < 1.0   — "on pace" (gold — where you want to be most of the time)
 *   < 1.3   — "slow"    (amber — acceptable on hard questions but flag it)
 *   ≥ 1.3   — "long"    (red — time to commit or move on)
 *
 * The thresholds are intentionally asymmetric — fast and on-pace both sit
 * inside the target, while over-target splits into "still OK, be aware" and
 * "make a decision now." That's the actual test-day behaviour model for a
 * 700+ scorer: you protect pace more aggressively on the over side.
 */
export function pacingStatus(elapsedMs: number, section: Section): PacingStatus {
  const target = SECTION_TARGET_SECONDS[section]
  const elapsedSec = elapsedMs / 1000
  const ratio = target > 0 ? elapsedSec / target : 0
  if (ratio < 0.5) {
    return {
      state: "fast",
      label: "fast",
      color: "#3ECF8E",
      bg: "rgba(62,207,142,0.12)",
      ratio,
    }
  }
  if (ratio < 1.0) {
    return {
      state: "on-pace",
      label: "on pace",
      color: "#C9A84C",
      bg: "rgba(201,168,76,0.12)",
      ratio,
    }
  }
  if (ratio < 1.3) {
    return {
      state: "slow",
      label: "slow",
      color: "#E8C97A",
      bg: "rgba(232,201,122,0.16)",
      ratio,
    }
  }
  return {
    state: "long",
    label: "long",
    color: "#FF4444",
    bg: "rgba(255,68,68,0.14)",
    ratio,
  }
}

/** Format an elapsed ms value as m:ss (no leading-zero minute). */
export function formatPacingElapsed(ms: number): string {
  const totalSec = Math.max(0, Math.floor(ms / 1000))
  const mm = Math.floor(totalSec / 60)
  const ss = (totalSec % 60).toString().padStart(2, "0")
  return `${mm}:${ss}`
}

export type PaceSummaryState = "ahead" | "on-pace" | "behind" | "far-behind"

export interface PaceSummary {
  state: PaceSummaryState
  /** Signed minutes: positive = behind the expected budget, negative = ahead. */
  deltaMin: number
  label: string
  color: string
  bg: string
}

/**
 * Cumulative pace status for a timed section. Compares the student's
 * elapsed section time against the linear budget they'd need to finish
 * on time (minutes * 60 / total_questions per question). On real test
 * day the most actionable signal is "are you ahead or behind the
 * constant-pace line," so this returns that as a single chip.
 *
 * questionsComplete is the count of questions fully advanced past —
 * on Q5 (idx 4) the student has completed 4 so far and is partway
 * through the 5th.
 *
 * Buckets:
 *   deltaMin ≥ 3   — "behind 3m" (red, speed up)
 *   deltaMin ≥ 1   — "behind 1m" (amber)
 *   deltaMin ≤ -1  — "ahead 1m"  (green — but verify, don't race)
 *   otherwise      — "on pace"   (gold)
 */
export function sectionPaceStatus(
  elapsedSectionMs: number,
  questionsComplete: number,
  totalQuestions: number,
  sectionMinutes: number
): PaceSummary {
  const budgetPerQ = (sectionMinutes * 60_000) / Math.max(1, totalQuestions)
  const expectedMs = questionsComplete * budgetPerQ
  const deltaMs = elapsedSectionMs - expectedMs
  const deltaMin = deltaMs / 60_000
  const absMin = Math.round(Math.abs(deltaMin))
  if (deltaMin >= 3) {
    return {
      state: "far-behind",
      deltaMin,
      label: `${absMin}m behind`,
      color: "#FF4444",
      bg: "rgba(255,68,68,0.14)",
    }
  }
  if (deltaMin >= 1) {
    return {
      state: "behind",
      deltaMin,
      label: `${absMin}m behind`,
      color: "#E8C97A",
      bg: "rgba(232,201,122,0.16)",
    }
  }
  if (deltaMin <= -1) {
    return {
      state: "ahead",
      deltaMin,
      label: `${absMin}m ahead`,
      color: "#3ECF8E",
      bg: "rgba(62,207,142,0.14)",
    }
  }
  return {
    state: "on-pace",
    deltaMin,
    label: "on pace",
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.12)",
  }
}

/**
 * Checkpoints per section (1-based question numbers). Rule of thumb is
 * "check in at roughly 1/3 and 2/3 through" — the numbers below come
 * directly from `06-mock-strategy.md`, the pacing guide, and the PDF v2
 * spec (`Designing an Exceptionally Successful GMAT Course Product (1)`
 * page 8). They split each 45-minute section into three equal-ish
 * budgets so the student has a clear "accelerate / hold" decision point
 * twice before the end.
 *
 *   Quant   (21 q)  — Q7, Q14
 *   Verbal  (23 q)  — Q8, Q16  (PDF v2 refinement: "~13–14 min left after Q16")
 *   DI      (20 q)  — Q7, Q14
 */
export const CHECKPOINTS_BY_SECTION: Record<Section, number[]> = {
  Quant: [7, 14],
  Verbal: [8, 16],
  DI: [7, 14],
}

export type CheckpointState = "ahead" | "on-pace" | "behind" | "far-behind"

export interface CheckpointStatus {
  /** 1-based question number the checkpoint fires after (e.g. 7 = "after
   *  Q7, while the student is reading Q8"). */
  checkpoint: number
  expectedMs: number
  elapsedMs: number
  deltaMs: number
  state: CheckpointState
  /** "+1:30 behind target" / "on target" / "0:45 ahead" */
  label: string
  /** Short prescriptive line the student should read and act on. */
  prescription: string
  color: string
  bg: string
}

function formatMinSec(ms: number): string {
  const totalSec = Math.max(0, Math.round(ms / 1000))
  const mm = Math.floor(totalSec / 60)
  const ss = (totalSec % 60).toString().padStart(2, "0")
  return `${mm}:${ss}`
}

/**
 * If the student is on the question immediately after a checkpoint,
 * return the snapshot for that checkpoint. `elapsedAtCheckpointMs`
 * should be the section's elapsed time at the moment they advanced to
 * the current question — i.e. `questionStartMs - sectionStartMs` — so
 * the reading reflects "where they were when Q<checkpoint> was done,"
 * not "where they are now after spending time on the next question."
 *
 * Returns null when the student isn't on a post-checkpoint question.
 * Running-phase only — callers should skip calling this in review.
 */
export function checkpointStatusForQuestion(
  questionIdx: number, // 0-based index of the CURRENT question
  totalQuestions: number,
  sectionMinutes: number,
  section: Section,
  elapsedAtCheckpointMs: number,
): CheckpointStatus | null {
  const checkpoints = CHECKPOINTS_BY_SECTION[section]
  // "Just completed N" means questionIdx (0-based) equals N — student
  // has finished questions 1..N and is now reading Q(N+1).
  if (!checkpoints.includes(questionIdx)) return null

  const checkpoint = questionIdx
  const budgetPerQ = (sectionMinutes * 60_000) / Math.max(1, totalQuestions)
  const expectedMs = checkpoint * budgetPerQ
  const deltaMs = elapsedAtCheckpointMs - expectedMs
  const deltaMin = deltaMs / 60_000

  let state: CheckpointState
  let color: string
  let bg: string
  if (deltaMin >= 3) {
    state = "far-behind"
    color = "#FF4444"
    bg = "rgba(255,68,68,0.14)"
  } else if (deltaMin >= 1) {
    state = "behind"
    color = "#E8C97A"
    bg = "rgba(232,201,122,0.16)"
  } else if (deltaMin <= -1) {
    state = "ahead"
    color = "#3ECF8E"
    bg = "rgba(62,207,142,0.14)"
  } else {
    state = "on-pace"
    color = "#C9A84C"
    bg = "rgba(201,168,76,0.12)"
  }

  const absLabel = formatMinSec(Math.abs(deltaMs))
  const label =
    state === "on-pace"
      ? "on target"
      : deltaMs >= 0
        ? `${absLabel} behind target`
        : `${absLabel} ahead`

  const prescription = buildCheckpointPrescription(state, checkpoint, section)

  return {
    checkpoint,
    expectedMs,
    elapsedMs: elapsedAtCheckpointMs,
    deltaMs,
    state,
    label,
    prescription,
    color,
    bg,
  }
}

function buildCheckpointPrescription(
  state: CheckpointState,
  checkpoint: number,
  section: Section,
): string {
  const total =
    section === "Quant" ? 21 : section === "Verbal" ? 23 : 20
  const remaining = total - checkpoint
  switch (state) {
    case "far-behind":
      return `Pacing crisis. Pick one question you're stuck on and commit a best guess in 20 seconds. You'll guess on 1–2 more before the end — that's fine. Just keep moving.`
    case "behind":
      return `Accelerate now, not at Q${total}. On the next ${remaining}, skip the "let me try one more approach" on anything that isn't clicking — commit and move.`
    case "ahead":
      return `You have margin. Don't race — use it to read more carefully on the remaining ${remaining}. Speed now buys nothing; accuracy does.`
    case "on-pace":
    default:
      return `Right on target. Hold this pace through Q${total} — don't speed up, don't slow down.`
  }
}

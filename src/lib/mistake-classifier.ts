import type { SupabaseClient } from "@supabase/supabase-js"
import type { ParsedQuestion } from "./content"
import type { Difficulty, QuestionType, Section } from "@/types"
import {
  ERROR_TAG_BY_ID,
  ROOT_CAUSE_BY_ID,
  type ErrorTagDef,
  type RootCauseDef,
} from "@/app/(app)/error-log/constants"

/**
 * Mistake classifier — automatic categorization of missed questions.
 *
 * Reads a missed attempt + the parsed question and returns a structured
 * classification across six axes:
 *
 *   1. section          — already on the attempt, surfaced for completeness
 *   2. subskill         — the question's subtopic (more granular than topic)
 *   3. mistakeType      — heuristic-inferred error tag (e.g. CR_SCOPE)
 *   4. trapType         — directly from the question's commonTrap/trapType
 *   5. difficulty       — already on the attempt
 *   6. timeBucket       — rushed / normal / labored / unknown
 *
 * Confidence is reported per inferred field so the UI can render manual
 * tags as authoritative and inferred tags as suggestions ("looks like…").
 *
 * The classifier is pure — same input → same output. Safe to run on the
 * server for batch analytics or on the client for inline suggestions.
 */

export type Confidence = "high" | "medium" | "low"

export type TimeBucket = "rushed" | "normal" | "labored" | "unknown"

export interface MistakeAttemptInput {
  questionId: string
  section: Section
  topic: string
  subtopic: string | null
  difficulty: Difficulty | null
  questionType: QuestionType | null
  selectedAnswer: number | null
  timeSpentMs: number | null
}

export interface InferredField<T> {
  /** The inferred value (null if no inference possible). */
  value: T | null
  confidence: Confidence
  /** Brief explanation surfaced in the UI tooltip. */
  signal: string
}

export interface MistakeClassification {
  questionId: string
  section: Section
  /** The granular sub-skill — defaults to subtopic, falls back to topic. */
  subskill: string
  difficulty: Difficulty
  /** Question's curriculum-cataloged trap, if present. */
  trapType: InferredField<{ label: string; slug?: string }>
  /** Inferred error-tag id (e.g. "CR_SCOPE"). Null if no signal. */
  mistakeType: InferredField<ErrorTagDef>
  /** Inferred root cause (K1…F1). Null if no signal. */
  rootCause: InferredField<RootCauseDef>
  /** Time-spent bucket relative to the section's elite-scorer budget. */
  timeBucket: TimeBucket
  /** Time spent in milliseconds (or null when not captured). */
  timeSpentMs: number | null
}

// Pacing thresholds aligned with the diagnostic + mock libraries.
const TIMING_THRESHOLDS: Record<Section, { rushedMs: number; laboredMs: number }> = {
  Quant: { rushedMs: 30_000, laboredMs: 180_000 },
  Verbal: { rushedMs: 30_000, laboredMs: 180_000 },
  DI: { rushedMs: 30_000, laboredMs: 210_000 },
}

function classifyTime(section: Section, timeSpentMs: number | null): TimeBucket {
  if (timeSpentMs == null) return "unknown"
  const t = TIMING_THRESHOLDS[section]
  if (timeSpentMs < t.rushedMs) return "rushed"
  if (timeSpentMs > t.laboredMs) return "labored"
  return "normal"
}

/**
 * Map a question's `commonTrap` / `trapType` to an error-tag id.
 *
 * The mapping is intentionally narrow — we only fire on traps where
 * the right error-tag is unambiguous. Ambiguous cases return null so
 * the heuristic falls through to the difficulty/time signal below.
 */
function trapToErrorTagId(
  trap: string | undefined,
  trapType: string | undefined,
  questionType: QuestionType | null,
  section: Section
): { id: string; signal: string } | null {
  const t = (trap ?? trapType ?? "").toLowerCase()
  const slug = (trapType ?? "").toLowerCase()

  // DI-specific traps.
  if (section === "DI") {
    if (slug === "wrong-unit" || /unit|axis|axes|scale/.test(t)) {
      return { id: "GI_UNITS", signal: "trap involves units / axes / scale" }
    }
    if (
      slug === "sorting-mistake" ||
      slug === "wrong-denominator" ||
      /sort|filter|denominator/.test(t)
    ) {
      return { id: "TA_FILTER", signal: "trap involves sort/filter or denominator selection" }
    }
    if (
      slug === "tpa-cells-treated-independently" ||
      /two-part|linkage|dependency/.test(t)
    ) {
      return { id: "TPA_LINK", signal: "trap involves the dependency between TPA prompts" }
    }
    if (slug === "source-mixing" || /msr|source/.test(t)) {
      return { id: "MSR_MAP", signal: "trap involves cross-source / tab tracking" }
    }
    if (questionType === "Data Sufficiency" && /suffic/.test(t)) {
      return { id: "DS_SUFF", signal: "DS trap exploits sufficiency confusion" }
    }
  }

  // Verbal-specific traps.
  if (section === "Verbal") {
    if (
      questionType === "Critical Reasoning" &&
      (/scope|out-of-scope|too-broad|too-narrow|extreme-language|reversed-direction/.test(t) ||
        slug === "extreme-language" ||
        slug === "reversed-direction" ||
        slug === "too-broad" ||
        slug === "too-narrow")
    ) {
      return { id: "CR_SCOPE", signal: "CR trap is a scope-family pattern" }
    }
    if (
      questionType === "Reading Comprehension" &&
      /main idea|paragraph|attribution|structure|role/.test(t)
    ) {
      return { id: "RC_STRUCTURE", signal: "RC trap targets passage structure or attribution" }
    }
  }

  // Quant traps.
  if (section === "Quant" || section === "DI") {
    if (
      slug === "decimal-place-loss" ||
      slug === "sign-loss-distribution" ||
      slug === "squaring-without-sign-check" ||
      /arithmetic|decimal|sign|computation/.test(t)
    ) {
      return { id: "CALC_SLIP", signal: "trap exploits arithmetic / sign / decimal slip" }
    }
    if (
      slug === "algebra-by-default" ||
      slug === "computation-when-estimation-suffices" ||
      /algebra-by-default|estimation/.test(t)
    ) {
      return { id: "Q_SETUP", signal: "trap involves wrong method / setup choice" }
    }
  }

  return null
}

/**
 * Map question + time + difficulty to a likely root-cause id.
 *
 * Priority:
 *   1. labored time → P1 (slow but correct? — they got it wrong, so
 *      "slow but correct" doesn't quite apply; we down-prioritize and
 *      pick from below).
 *   2. rushed time → P2 (panic guess / timeout)
 *   3. wrong easy with normal time → K1 (concept absent) or E1 (slip)
 *   4. wrong medium/hard with trap match → S1 (wrong strategy choice)
 *   5. fallback: K2 (concept misapplied)
 */
function inferRootCause(
  bucket: TimeBucket,
  difficulty: Difficulty,
  hasTrap: boolean
): { id: string; confidence: Confidence; signal: string } {
  if (bucket === "rushed") {
    return {
      id: "P2",
      confidence: "high",
      signal: "answered in under 30 seconds — likely panic guess or timeout",
    }
  }
  if (bucket === "labored" && (difficulty === "Beginner" || difficulty === "Intermediate")) {
    return {
      id: "P1",
      confidence: "medium",
      signal: "spent 3+ minutes on a sub-Hard question — slow process",
    }
  }
  if (difficulty === "Beginner" && bucket === "normal") {
    return {
      id: "K1",
      confidence: "medium",
      signal: "missed an Easy question with normal pacing — likely concept gap",
    }
  }
  if (hasTrap && difficulty === "Advanced") {
    return {
      id: "S1",
      confidence: "medium",
      signal: "Hard question with a curriculum-named trap — likely wrong-strategy choice",
    }
  }
  if (hasTrap) {
    return {
      id: "K2",
      confidence: "low",
      signal: "trap-pattern miss — concept may be misapplied to this variant",
    }
  }
  return {
    id: "K2",
    confidence: "low",
    signal: "no decisive signal — defaulting to concept-misapplied",
  }
}

/**
 * Classify a missed attempt. The question is optional so the function
 * still returns useful output when the underlying question can't be
 * resolved (renamed/removed since the attempt was logged).
 */
export function classifyMistake(
  attempt: MistakeAttemptInput,
  question: ParsedQuestion | undefined
): MistakeClassification {
  const subskill =
    attempt.subtopic && attempt.subtopic.length > 0 && attempt.subtopic !== attempt.topic
      ? attempt.subtopic
      : attempt.topic
  const difficulty: Difficulty = attempt.difficulty ?? "Intermediate"
  const timeBucket = classifyTime(attempt.section, attempt.timeSpentMs)

  // Trap inference — directly from the question metadata.
  const trapValue =
    question?.commonTrap || question?.trapType
      ? {
          label: question?.commonTrap || question?.trapType || "",
          slug: question?.trapType,
        }
      : null
  const trapType: InferredField<{ label: string; slug?: string }> = trapValue
    ? {
        value: trapValue,
        confidence: "high",
        signal: "trap is authored on the question itself",
      }
    : { value: null, confidence: "low", signal: "no trap metadata on this question" }

  // Mistake-type inference — try the trap-driven mapping first.
  const trapMapped = trapToErrorTagId(
    question?.commonTrap,
    question?.trapType,
    attempt.questionType ?? question?.type ?? null,
    attempt.section
  )
  let mistakeType: InferredField<ErrorTagDef>
  if (trapMapped && ERROR_TAG_BY_ID[trapMapped.id]) {
    mistakeType = {
      value: ERROR_TAG_BY_ID[trapMapped.id],
      confidence: "high",
      signal: trapMapped.signal,
    }
  } else if (timeBucket === "labored") {
    mistakeType = {
      value: ERROR_TAG_BY_ID["TIME_SINK"],
      confidence: "medium",
      signal: "spent far too long for the expected payoff",
    }
  } else if (timeBucket === "rushed" && difficulty !== "Advanced") {
    mistakeType = {
      value: ERROR_TAG_BY_ID["OVERCONF"],
      confidence: "medium",
      signal: "fast wrong on a sub-Hard question — overconfidence pattern",
    }
  } else if (
    attempt.section === "Quant" ||
    (attempt.section === "DI" && attempt.questionType !== "Data Sufficiency")
  ) {
    // Quant or DI non-DS misses with no trap signal default to concept gap.
    mistakeType = {
      value: ERROR_TAG_BY_ID["Q_CONCEPT"],
      confidence: "low",
      signal: "no decisive trap or pacing signal — defaulting to concept gap",
    }
  } else {
    mistakeType = {
      value: null,
      confidence: "low",
      signal: "insufficient signal to infer a mistake type",
    }
  }

  // Root cause inference — a complementary view that says WHERE the
  // solve broke (concept / strategy / execution / pacing).
  const rc = inferRootCause(timeBucket, difficulty, !!trapValue)
  const rootCauseDef = ROOT_CAUSE_BY_ID[rc.id] ?? null
  const rootCause: InferredField<RootCauseDef> = rootCauseDef
    ? { value: rootCauseDef, confidence: rc.confidence, signal: rc.signal }
    : { value: null, confidence: "low", signal: "no decisive root-cause signal" }

  return {
    questionId: attempt.questionId,
    section: attempt.section,
    subskill,
    difficulty,
    trapType,
    mistakeType,
    rootCause,
    timeBucket,
    timeSpentMs: attempt.timeSpentMs,
  }
}

/** Batch helper — classify many attempts with a shared question lookup. */
export function classifyMistakes(
  attempts: MistakeAttemptInput[],
  questionsById: Map<string, ParsedQuestion>
): MistakeClassification[] {
  return attempts.map((a) => classifyMistake(a, questionsById.get(a.questionId)))
}

/**
 * Schema migration for the auto-classification persistence flag (G9).
 *
 * Adds a `confidence` column to `error_tags` so we can distinguish
 * classifier-suggested rows from rows the student has explicitly
 * confirmed. Auto rows are written by `persistAutoClassifications`
 * with `ignoreDuplicates: true`, so they only fill empty slots —
 * manual rows are never overwritten.
 *
 * Paste into Supabase's SQL editor when ready. Idempotent.
 */
export const __schema_migration_g9 = `
alter table public.error_tags
  add column if not exists confidence text not null default 'manual'
    check (confidence in ('auto', 'manual'));

create index if not exists error_tags_confidence_idx
  on public.error_tags(confidence);
`

export interface PersistAutoInput {
  attemptId: string
  classification: MistakeClassification
}

/**
 * Write classifier-suggested error tags into `error_tags` as `confidence:
 * 'auto'` rows. Existing rows for the same `attempt_id` are preserved —
 * any manual classification the student has made wins. Returns the count
 * of rows actually inserted, or `null` when the upsert fails (most
 * commonly because the migration above hasn't been applied yet — caller
 * should treat this as a soft failure and continue rendering).
 *
 * Only attempts whose classifier produced *some* signal (mistakeType OR
 * rootCause non-null) are persisted. Empty classifications are skipped
 * to avoid creating rows that say nothing.
 */
export async function persistAutoClassifications(
  supabase: SupabaseClient,
  userId: string,
  inputs: PersistAutoInput[]
): Promise<{ inserted: number } | null> {
  const rows = inputs
    .filter((i) => i.classification.mistakeType.value || i.classification.rootCause.value)
    .map((i) => ({
      attempt_id: i.attemptId,
      user_id: userId,
      tag: i.classification.mistakeType.value?.id ?? null,
      root_cause: i.classification.rootCause.value?.id ?? null,
      confidence: "auto",
    }))

  if (rows.length === 0) return { inserted: 0 }

  const { error, count } = await supabase
    .from("error_tags")
    .upsert(rows, { onConflict: "attempt_id", ignoreDuplicates: true, count: "exact" })

  if (error) return null
  return { inserted: count ?? 0 }
}

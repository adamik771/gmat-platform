import type { Section } from "@/types"
import { TOPIC_TO_CHAPTER } from "./topic-chapter-map"
import { SECTION_TARGET_SECONDS } from "./pacing"
import type { ParsedQuestion } from "./content"
import type { PersonaThresholdOverrides } from "./personas"

/**
 * Topic-level mastery gates, lifted from the research report's prescription:
 * "The platform should not advance students merely because they 'completed'
 * a lesson." Each topic walks through gates in order — concept (untimed
 * accuracy), timed (accuracy + median pace), mixed (performance across
 * mixed sets on different days). The report also specifies Section-ready,
 * Official-ready, and Maintenance gates; those are aggregate / higher-level
 * and handled elsewhere (or in later waves) to keep per-topic output
 * actionable and compact.
 */

export type MasteryTier =
  | "not-started"
  | "concept-ready"
  | "timed-ready"
  | "mixed-ready"
  | "section-ready"

export interface MasteryGate {
  id: "concept" | "timed" | "mixed" | "section"
  label: string
  satisfied: boolean
  /** Short human string that explains the current state or what's missing
   *  (e.g. "4/5 untimed correct", "Need 8 more timed attempts"). */
  evidence: string
}

export interface TopicMastery {
  topic: string
  section: Section
  tier: MasteryTier
  /** Always 4, in gate order (concept, timed, mixed, section). */
  gates: MasteryGate[]
  chapterSlug: string | null
  /** Total timed attempts on the topic — used as a tiebreaker and for the
   *  "engaged topics only" filter on the UI. */
  timedAttempts: number
}

export interface MasteryAttempt {
  topic: string | null
  section: string | null
  is_correct: boolean | null
  time_spent_ms: number | null
  session_id: string | null
}

export interface MasterySession {
  id: string
  slug: string | null
  topic: string | null
  created_at: string
}

export interface ChapterProgressShape {
  [slug: string]: {
    questions?: Record<string, { selected?: number | null; submitted?: boolean }>
  }
}

const MIN_UNTIMED = 5
const CONCEPT_ACCURACY = 0.8
const MIN_TIMED = 10
const TIMED_ACCURACY = 0.7
/** Median time-per-question ≤130% of section target — matches the
 *  research-report rule "median time within 130% of target." */
const TIMED_MEDIAN_CAP = 1.3
const MIXED_ACCURACY = 0.75
const MIXED_SESSIONS = 2
/** Official-ready: the student's aggregate mixed/section performance has
 *  been stable for two consecutive weeks. Defaults pulled from the
 *  research report's framing — ≥70% per week, minimum 10 attempts per
 *  week so we're not reading noise. Persona-adaptive via
 *  `overrides.timedAccuracy` (same lever the Timed gate uses). */
const OFFICIAL_READY_ACCURACY = 0.7
const OFFICIAL_READY_MIN_PER_WEEK = 10
/** Section-ready: ≥2 attempts on this topic inside mock sessions AND
 *  accuracy under mock conditions is no more than 10 points below the
 *  student's overall timed accuracy on the topic. This matches the
 *  research-report rule "no catastrophic pacing collapse" — the topic
 *  isn't a standout weakness under mock stress. */
const SECTION_MIN_MOCK_ATTEMPTS = 2
const SECTION_MOCK_DROP_FLOOR = 0.1
/** Attempt with time below this is treated as a zero-effort submit and
 *  excluded from accuracy + median calculations. */
const MIN_ATTEMPT_MS = 1000

export function computeTopicMastery(
  topic: string,
  section: Section,
  attempts: MasteryAttempt[],
  sessionsById: Map<string, MasterySession>,
  chapterProgress: ChapterProgressShape | undefined | null,
  questionIndex: Map<string, ParsedQuestion>,
  overrides: PersonaThresholdOverrides = {},
): TopicMastery {
  const chapterSlug = TOPIC_TO_CHAPTER[topic] ?? null
  const conceptAccuracyFloor = overrides.conceptAccuracy ?? CONCEPT_ACCURACY
  const timedAccuracyFloor = overrides.timedAccuracy ?? TIMED_ACCURACY
  const medianCap = overrides.timedMedianCap ?? TIMED_MEDIAN_CAP

  // ---------- Gate 1: Concept-ready ----------
  // Untimed chapter check-questions. Source: user_metadata.chapter_progress.
  let conceptTotal = 0
  let conceptCorrect = 0
  if (chapterSlug && chapterProgress?.[chapterSlug]?.questions) {
    for (const [qid, prog] of Object.entries(
      chapterProgress[chapterSlug].questions!,
    )) {
      if (!prog?.submitted || typeof prog.selected !== "number") continue
      const q = questionIndex.get(qid)
      if (!q) continue
      conceptTotal += 1
      if (prog.selected === q.correctAnswer) conceptCorrect += 1
    }
  }
  const conceptAccuracy = conceptTotal > 0 ? conceptCorrect / conceptTotal : 0
  const conceptSatisfied =
    conceptTotal >= MIN_UNTIMED && conceptAccuracy >= conceptAccuracyFloor
  const conceptGate: MasteryGate = {
    id: "concept",
    label: "Concept-ready",
    satisfied: conceptSatisfied,
    evidence:
      conceptTotal === 0
        ? "Open the chapter and work its check questions"
        : conceptTotal < MIN_UNTIMED
          ? `${conceptCorrect}/${conceptTotal} correct — need ${
              MIN_UNTIMED - conceptTotal
            } more chapter attempt${MIN_UNTIMED - conceptTotal === 1 ? "" : "s"}`
          : conceptAccuracy < conceptAccuracyFloor
            ? `${Math.round(conceptAccuracy * 100)}% untimed — need ${Math.round(conceptAccuracyFloor * 100)}%+`
            : `${Math.round(conceptAccuracy * 100)}% untimed (${conceptCorrect}/${conceptTotal})`,
  }

  // ---------- Gate 2: Timed-ready ----------
  // All topic attempts from practice_attempts (chapter work never writes
  // here, so everything is genuinely timed). Require accuracy + median
  // time under cap.
  const topicAttempts = attempts.filter(
    (a) => a.topic === topic && (a.time_spent_ms ?? 0) > MIN_ATTEMPT_MS,
  )
  const timedTotal = topicAttempts.length
  const timedCorrect = topicAttempts.filter((a) => a.is_correct).length
  const timedAccuracy = timedTotal > 0 ? timedCorrect / timedTotal : 0
  const sortedTimes = topicAttempts
    .map((a) => a.time_spent_ms ?? 0)
    .sort((a, b) => a - b)
  const medianMs =
    sortedTimes.length > 0
      ? sortedTimes[Math.floor(sortedTimes.length / 2)]
      : 0
  const targetMs = SECTION_TARGET_SECONDS[section] * 1000
  const medianRatio = targetMs > 0 ? medianMs / targetMs : 0
  const timedSatisfied =
    timedTotal >= MIN_TIMED &&
    timedAccuracy >= timedAccuracyFloor &&
    medianRatio <= medianCap
  const timedGate: MasteryGate = {
    id: "timed",
    label: "Timed-ready",
    satisfied: timedSatisfied,
    evidence:
      timedTotal === 0
        ? "Run a timed practice set for this topic"
        : timedTotal < MIN_TIMED
          ? `${timedTotal} timed attempts — need ${MIN_TIMED - timedTotal} more`
          : timedAccuracy < timedAccuracyFloor
            ? `${Math.round(timedAccuracy * 100)}% timed — need ${Math.round(timedAccuracyFloor * 100)}%+`
            : medianRatio > medianCap
              ? `Accurate but slow — median is ${Math.round(medianRatio * 100)}% of target (cap ${Math.round(medianCap * 100)}%)`
              : `${Math.round(timedAccuracy * 100)}% @ ${Math.round(medianRatio * 100)}% target pace`,
  }

  // ---------- Gate 3: Mixed-ready ----------
  // ≥75% on ≥2 mixed sets on DIFFERENT calendar days.
  // "Mixed" session = slug === "custom" OR session topic starts with
  // "Mixed Review". Per-topic mastery means we look at THIS topic's
  // attempts within those mixed sessions, grouped by day.
  const mixedSessionIds = new Set<string>()
  for (const s of sessionsById.values()) {
    const topicLower = s.topic?.toLowerCase() ?? ""
    if (s.slug === "custom" || topicLower.startsWith("mixed review")) {
      mixedSessionIds.add(s.id)
    }
  }
  const mixedByDay = new Map<string, { total: number; correct: number }>()
  for (const a of attempts) {
    if (a.topic !== topic) continue
    const sid = a.session_id
    if (!sid || !mixedSessionIds.has(sid)) continue
    const s = sessionsById.get(sid)
    if (!s) continue
    const day = s.created_at.slice(0, 10)
    const bucket = mixedByDay.get(day) ?? { total: 0, correct: 0 }
    bucket.total += 1
    if (a.is_correct) bucket.correct += 1
    mixedByDay.set(day, bucket)
  }
  const validMixedDays = [...mixedByDay.values()].filter(
    (b) => b.total >= 3 && b.correct / b.total >= MIXED_ACCURACY,
  ).length
  const mixedSatisfied = validMixedDays >= MIXED_SESSIONS
  const mixedGate: MasteryGate = {
    id: "mixed",
    label: "Mixed-ready",
    satisfied: mixedSatisfied,
    evidence:
      mixedByDay.size === 0
        ? "Topic hasn't appeared in a mixed review yet"
        : validMixedDays < MIXED_SESSIONS
          ? `${validMixedDays}/${MIXED_SESSIONS} mixed days at 75%+ — need one more`
          : `Stable across ${validMixedDays} mixed days`,
  }

  // ---------- Gate 4: Section-ready ----------
  // Topic survives mock conditions — enough mock attempts on it, and
  // accuracy doesn't collapse vs timed-practice baseline.
  const mockSessionIds = new Set<string>()
  for (const s of sessionsById.values()) {
    if (s.slug?.startsWith("mock-")) mockSessionIds.add(s.id)
  }
  const mockTopicAttempts = attempts.filter(
    (a) =>
      a.topic === topic &&
      a.session_id !== null &&
      mockSessionIds.has(a.session_id),
  )
  const mockTotal = mockTopicAttempts.length
  const mockCorrect = mockTopicAttempts.filter((a) => a.is_correct).length
  const mockAccuracy = mockTotal > 0 ? mockCorrect / mockTotal : 0
  // "Catastrophic pacing collapse" proxy: mock accuracy drops more than
  // SECTION_MOCK_DROP_FLOOR below timed-practice accuracy. Uses the
  // topic's timed accuracy as the reference so a student who's genuinely
  // weak on a topic isn't double-penalised.
  const mockHoldsUp =
    timedTotal > 0
      ? mockAccuracy >= Math.max(0, timedAccuracy - SECTION_MOCK_DROP_FLOOR)
      : false
  const sectionSatisfied =
    mixedSatisfied && mockTotal >= SECTION_MIN_MOCK_ATTEMPTS && mockHoldsUp
  const sectionGate: MasteryGate = {
    id: "section",
    label: "Section-ready",
    satisfied: sectionSatisfied,
    evidence: !mixedSatisfied
      ? "Clear Mixed-ready first"
      : mockTotal === 0
        ? "Take a mock that surfaces this topic"
        : mockTotal < SECTION_MIN_MOCK_ATTEMPTS
          ? `${mockTotal} mock attempt${mockTotal === 1 ? "" : "s"} — need ${SECTION_MIN_MOCK_ATTEMPTS - mockTotal} more`
          : !mockHoldsUp
            ? `Drops to ${Math.round(mockAccuracy * 100)}% under mock stress — rehearse this topic timed`
            : `Holds at ${Math.round(mockAccuracy * 100)}% across ${mockTotal} mock attempts`,
  }

  let tier: MasteryTier = "not-started"
  if (conceptSatisfied) tier = "concept-ready"
  if (timedSatisfied) tier = "timed-ready"
  if (mixedSatisfied) tier = "mixed-ready"
  if (sectionSatisfied) tier = "section-ready"

  return {
    topic,
    section,
    tier,
    gates: [conceptGate, timedGate, mixedGate, sectionGate],
    chapterSlug,
    timedAttempts: timedTotal,
  }
}

export type OfficialReadyStatus =
  | "ready"
  | "stable-partial"
  | "unstable"
  | "insufficient"

export interface OfficialReadySummary {
  status: OfficialReadyStatus
  /** Week index 0 = last 7 days (inclusive of today), 1 = 7 days before that. */
  thisWeekAccuracy: number | null
  thisWeekAttempts: number
  lastWeekAccuracy: number | null
  lastWeekAttempts: number
  /** Minimum per-week accuracy required to qualify (0..1). */
  threshold: number
  /** One-line copy the UI can render directly. */
  headline: string
}

/**
 * Aggregate "Official-ready" gate from the research report: "Stable
 * mixed/section performance for two consecutive weeks." Operates
 * across the student's WHOLE study, not per-topic — it's a
 * cross-topic endurance signal, not a per-topic mastery check.
 *
 * Counts attempts whose parent session is either a mixed review
 * (slug `custom` or topic starting "Mixed Review") or a mock (slug
 * `mock-*`). Groups them into this-week (0–6 days ago) and last-week
 * (7–13 days ago) buckets. Status:
 *   - `insufficient` — not enough attempts in at least one bucket
 *   - `unstable` — both buckets have data, at least one is below threshold
 *   - `stable-partial` — one bucket is at threshold, the other is short
 *                       of sample size (common "early in week 2" state)
 *   - `ready` — both buckets have sample + both at or above threshold
 */
export function computeOfficialReady(
  attempts: MasteryAttempt[],
  sessionsById: Map<string, MasterySession>,
  overrides: PersonaThresholdOverrides = {},
  now: Date = new Date(),
): OfficialReadySummary {
  const threshold = overrides.timedAccuracy ?? OFFICIAL_READY_ACCURACY
  const nowMs = now.getTime()
  const dayMs = 86_400_000
  const thisWeekFloor = nowMs - 7 * dayMs
  const lastWeekFloor = nowMs - 14 * dayMs

  const qualifyingSessionIds = new Set<string>()
  for (const s of sessionsById.values()) {
    const topicLower = s.topic?.toLowerCase() ?? ""
    const isMixed = s.slug === "custom" || topicLower.startsWith("mixed review")
    const isMock = s.slug?.startsWith("mock-") ?? false
    if (isMixed || isMock) qualifyingSessionIds.add(s.id)
  }

  let thisWeekCorrect = 0
  let thisWeekTotal = 0
  let lastWeekCorrect = 0
  let lastWeekTotal = 0
  for (const a of attempts) {
    const sid = a.session_id
    if (!sid || !qualifyingSessionIds.has(sid)) continue
    const s = sessionsById.get(sid)
    if (!s) continue
    const ts = Date.parse(s.created_at)
    if (Number.isNaN(ts)) continue
    if (ts >= thisWeekFloor && ts <= nowMs) {
      thisWeekTotal += 1
      if (a.is_correct) thisWeekCorrect += 1
    } else if (ts >= lastWeekFloor && ts < thisWeekFloor) {
      lastWeekTotal += 1
      if (a.is_correct) lastWeekCorrect += 1
    }
  }

  const thisWeekAccuracy =
    thisWeekTotal > 0 ? thisWeekCorrect / thisWeekTotal : null
  const lastWeekAccuracy =
    lastWeekTotal > 0 ? lastWeekCorrect / lastWeekTotal : null

  const thisWeekSample = thisWeekTotal >= OFFICIAL_READY_MIN_PER_WEEK
  const lastWeekSample = lastWeekTotal >= OFFICIAL_READY_MIN_PER_WEEK
  const thisWeekPass =
    thisWeekAccuracy !== null && thisWeekAccuracy >= threshold
  const lastWeekPass =
    lastWeekAccuracy !== null && lastWeekAccuracy >= threshold

  let status: OfficialReadyStatus
  if (thisWeekSample && lastWeekSample && thisWeekPass && lastWeekPass) {
    status = "ready"
  } else if (
    (thisWeekSample && thisWeekPass && !lastWeekSample) ||
    (lastWeekSample && lastWeekPass && !thisWeekSample)
  ) {
    status = "stable-partial"
  } else if (thisWeekSample || lastWeekSample) {
    status = "unstable"
  } else {
    status = "insufficient"
  }

  const thresholdPct = Math.round(threshold * 100)
  const headline = buildOfficialReadyHeadline(
    status,
    thisWeekAccuracy,
    lastWeekAccuracy,
    thresholdPct,
  )

  return {
    status,
    thisWeekAccuracy,
    thisWeekAttempts: thisWeekTotal,
    lastWeekAccuracy,
    lastWeekAttempts: lastWeekTotal,
    threshold,
    headline,
  }
}

function buildOfficialReadyHeadline(
  status: OfficialReadyStatus,
  thisWeek: number | null,
  lastWeek: number | null,
  thresholdPct: number,
): string {
  switch (status) {
    case "ready":
      return `Stable ${Math.round((lastWeek ?? 0) * 100)}% / ${Math.round((thisWeek ?? 0) * 100)}% across two weeks of mixed + mock work — you're tracking for a real sitting.`
    case "stable-partial":
      return `One week is holding above ${thresholdPct}%; the other doesn't have enough attempts yet. Another 1–2 mixed sets this week should settle it.`
    case "unstable":
      return `Mixed + mock performance isn't holding at ${thresholdPct}%+ both weeks. Don't schedule the real exam until it does.`
    case "insufficient":
    default:
      return `Need at least ${OFFICIAL_READY_MIN_PER_WEEK} mixed or mock attempts in each of the last two weeks to read a two-week stability signal.`
  }
}

/**
 * Ordered list of topics the student has engaged with (≥1 timed attempt
 * OR ≥1 submitted chapter question). Sorted by tier ascending so
 * "what to work on next" comes first; ties broken by attempt volume.
 */
export function computeEngagedTopicMasteries(
  attempts: MasteryAttempt[],
  sessionsById: Map<string, MasterySession>,
  chapterProgress: ChapterProgressShape | undefined | null,
  questionIndex: Map<string, ParsedQuestion>,
  overrides: PersonaThresholdOverrides = {},
): TopicMastery[] {
  // Collect candidate topics from both attempts and chapter_progress.
  const candidates = new Map<string, Section>()
  for (const a of attempts) {
    const t = a.topic
    const sec = a.section as Section
    if (!t) continue
    if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
    candidates.set(t, sec)
  }
  if (chapterProgress) {
    for (const chapterSlug of Object.keys(chapterProgress)) {
      // Reverse-look-up: find the topic label for this chapter slug.
      const topicLabel = Object.entries(TOPIC_TO_CHAPTER).find(
        ([, slug]) => slug === chapterSlug,
      )?.[0]
      if (!topicLabel || candidates.has(topicLabel)) continue
      // Pull section from any attempt on this topic; if none, infer from
      // the first question in the chapter.
      const firstQId = Object.keys(
        chapterProgress[chapterSlug]?.questions ?? {},
      )[0]
      const firstQ = firstQId ? questionIndex.get(firstQId) : undefined
      if (!firstQ) continue
      candidates.set(topicLabel, firstQ.section)
    }
  }

  const tierOrder: Record<MasteryTier, number> = {
    "not-started": 0,
    "concept-ready": 1,
    "timed-ready": 2,
    "mixed-ready": 3,
    "section-ready": 4,
  }

  return [...candidates.entries()]
    .map(([topic, section]) =>
      computeTopicMastery(
        topic,
        section,
        attempts,
        sessionsById,
        chapterProgress,
        questionIndex,
        overrides,
      ),
    )
    .sort((a, b) => {
      const tierDelta = tierOrder[a.tier] - tierOrder[b.tier]
      if (tierDelta !== 0) return tierDelta
      return b.timedAttempts - a.timedAttempts
    })
}

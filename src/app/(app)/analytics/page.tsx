import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Compass,
  Lock,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  computeCalibration,
  type CalibrationReport,
  type ChapterProgressMap,
  type PracticeAttemptCalibrationRow,
} from "@/lib/calibration"
import { getAllQuestions } from "@/lib/content"
import type { Section } from "@/types"
import {
  PAYWALL_ENABLED,
  canAccess,
  getPlanTierForUser,
} from "@/lib/entitlements"
import UpgradeGate from "@/components/shared/UpgradeGate"
import AnalyticsClient, {
  type DifficultyTimingRow,
  type ErrorPatternSummary,
  type PacingRow,
  type PredictionMAE,
  type ScoreTrendPoint,
  type TopicRow,
} from "./AnalyticsClient"
import { accuracyToScore } from "@/lib/diagnostic"

// Minimum attempts required to trust a per-topic accuracy — anything below
// and a couple of lucky / unlucky answers dominate the number.
const TOPIC_MIN_ATTEMPTS = 5
const PACING_MIN_ATTEMPTS = 5
const DIFFICULTY_TIMING_MIN_ATTEMPTS = 3

/** A time-spent value below this almost always means the user submitted
 * without reading the question (e.g. accidental click). Dropped from all
 * time aggregations so one instant-submit doesn't skew averages. */
const MIN_ATTEMPT_MS = 1000

/** Deviation thresholds for classifying attempts as "fast" or "slow"
 * relative to the user's own section baseline. 0.7× and 1.3× keep the
 * labels meaningful without tagging the middle 60% of attempts. */
const FAST_RATIO = 0.7
const SLOW_RATIO = 1.3

// Per-section target pace in minutes (reference for the "over / under"
// color coding). Quant allots ~2 min/q, Verbal ~1.75 (CR/RC mix), DI ~2.5.
const SECTION_TARGET_MIN: Record<Section, number> = {
  Quant: 2.0,
  Verbal: 1.75,
  DI: 2.5,
}

/**
 * Scale an accuracy percentage (0-100) to an estimated GMAT Focus total
 * (205..805 in 10-point increments). Matches the derivation on the
 * dashboard's Score Goal card so the two surfaces don't drift.
 */
function accuracyToFocusTotal(accuracy: number): number {
  const clamped = Math.max(0, Math.min(100, accuracy))
  // 0% → 60 per section → 205 total. 100% → 90 per section → 805 total.
  const raw = 205 + clamped * 6.0
  return 205 + Math.round((raw - 205) / 10) * 10
}

export default async function AnalyticsPage() {
  let scoreTrend: ScoreTrendPoint[] = []
  let topicRows: TopicRow[] = []
  let pacingRows: PacingRow[] = []
  let difficultyTimingRows: DifficultyTimingRow[] = []
  let errorPatterns: ErrorPatternSummary | null = null
  let calibration: CalibrationReport | null = null
  let predictionMAE: PredictionMAE | null = null
  let hasData = false

  // Baseline-mode signals — counted regardless of `hasData` so the
  // unlock checklist always reflects current state. Cheap derivations
  // computed alongside the existing analytics aggregations.
  let officialExamCount = 0
  const sectionAttemptCount: Record<Section, number> = {
    Quant: 0,
    Verbal: 0,
    DI: 0,
  }
  let confidenceRatedCount = 0
  let weeksOfPractice = 0

  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      // Paywall gate (reference implementation). Fully skipped while
      // PAYWALL_ENABLED is off — no extra query, no behavior change, the page
      // renders exactly as before. Flip PAYWALL_ENABLED=true to make the full
      // analytics dashboard a paid feature. Copy this guard to gate any other
      // surface (mock simulator, review queue, test builder).
      if (PAYWALL_ENABLED) {
        const tier = await getPlanTierForUser(supabase, user.id)
        if (!canAccess(tier, "analytics")) {
          return (
            <UpgradeGate
              feature="Analytics"
              blurb="Per-topic accuracy, pacing breakdowns, behaviour patterns, calibration, and your score trajectory — the full diagnostic picture of where your points are going."
              perks={[
                "Per-topic accuracy and timing across Quant, Verbal, and Data Insights",
                "Behaviour patterns: efficient, labored, rushed, or stuck",
                "Confidence calibration and score-prediction accuracy",
                "Full mock and practice score trajectory",
              ]}
            />
          )
        }
      }

      // Official baseline — entering the first mba.com practice-exam score
      // unlocks several modules. Read straight from user_metadata.
      const metaOfficialScores = user.user_metadata?.official_exam_scores
      officialExamCount = Array.isArray(metaOfficialScores)
        ? metaOfficialScores.length
        : 0
      // ---------- Calibration (chapter_progress + practice_attempts) ----------
      // chapter_progress is written cross-device via /api/chapter-progress;
      // practice_attempts.confidence is written by SessionClient on session
      // submit. The two sources are merged below once attempts are fetched.
      const chapterProgress = user.user_metadata?.chapter_progress as
        | ChapterProgressMap
        | undefined

      // ---------- Score trajectory ----------
      const eightWeeksAgo = new Date(Date.now() - 56 * 86400000).toISOString()

      // Per-session accuracy is the right unit here; if a user does 3 sessions
      // in a week, the weekly average means "average accuracy across sessions
      // that week", which we then scale to a Focus total.
      // The score-trajectory sessions read and the per-topic attempts read
      // (below) are independent — both key only on user.id — so fetch them
      // concurrently instead of in series. Each block's processing still runs
      // after its own data resolves, in the same order as before.
      const [{ data: sessions }, { data: attempts }] = await Promise.all([
        supabase
          .from("practice_sessions")
          .select("accuracy, section, created_at")
          .eq("user_id", user.id)
          .gte("created_at", eightWeeksAgo)
          .order("created_at", { ascending: true }),
        supabase
          .from("practice_attempts")
          .select(
            "question_id, topic, subtopic, section, difficulty, is_correct, time_spent_ms, confidence, practice_sessions(created_at)"
          )
          .eq("user_id", user.id),
      ])

      if (sessions && sessions.length > 0) {
        type Bucket = { overall: number[]; Quant: number[]; Verbal: number[]; DI: number[] }
        const weeks = new Map<string, Bucket>()
        for (const s of sessions) {
          const d = new Date(s.created_at as string)
          const weekStart = new Date(d)
          weekStart.setDate(d.getDate() - d.getDay())
          const key = weekStart.toISOString().slice(0, 10)
          const bucket =
            weeks.get(key) ?? {
              overall: [],
              Quant: [],
              Verbal: [],
              DI: [],
            }
          const acc = Number(s.accuracy)
          bucket.overall.push(acc)
          const sec = s.section as Section | string
          if (sec === "Quant" || sec === "Verbal" || sec === "DI") {
            bucket[sec].push(acc)
          }
          weeks.set(key, bucket)
        }

        scoreTrend = [...weeks.entries()]
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([weekKey, b], i) => {
            const weekDate = new Date(weekKey)
            const mean = (arr: number[]) =>
              arr.length > 0 ? arr.reduce((x, y) => x + y, 0) / arr.length : null
            const overallAcc = mean(b.overall)
            return {
              weekKey,
              weekLabel:
                weekDate.toLocaleDateString("en-US", {
                  month: "short",
                }) + ` W${Math.ceil(weekDate.getDate() / 7)}`,
              index: i,
              total:
                overallAcc !== null ? accuracyToFocusTotal(overallAcc) : null,
              overallAccuracy: overallAcc !== null ? Math.round(overallAcc) : null,
              quant: mean(b.Quant) !== null ? Math.round(mean(b.Quant)!) : null,
              verbal: mean(b.Verbal) !== null ? Math.round(mean(b.Verbal)!) : null,
              di: mean(b.DI) !== null ? Math.round(mean(b.DI)!) : null,
            }
          })
      }

      // ---------- Per-topic accuracy ----------
      // Also pulls question_id + session timestamp to feed the repeat-miss
      // aggregation below (chronological order per question_id).
      // `attempts` was fetched in the Promise.all above (alongside `sessions`).

      // Compute calibration from both sources. Confidence on
      // practice_attempts is null unless the student rated; rows without
      // a rating are skipped inside computeCalibration.
      const practiceCalibrationRows: PracticeAttemptCalibrationRow[] = (
        attempts ?? []
      ).map((a) => ({
        confidence: (a.confidence as string | null) ?? null,
        is_correct: (a.is_correct as boolean | null) ?? null,
      }))
      if (chapterProgress || practiceCalibrationRows.length > 0) {
        calibration = computeCalibration(
          chapterProgress,
          getAllQuestions(),
          practiceCalibrationRows,
        )
      }

      if (attempts && attempts.length > 0) {
        hasData = true

        // Baseline-checklist signals derived from the same `attempts`
        // pull. Cheap; lets us show progress against unlock thresholds
        // even when the user is partway to active mode.
        const weekKeys = new Set<string>()
        for (const a of attempts) {
          const sec = a.section as Section
          if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
          sectionAttemptCount[sec] += 1
          if ((a.confidence as string | null) ?? null) confidenceRatedCount += 1
          const createdAt =
            (a as { practice_sessions?: { created_at?: string } | null })
              .practice_sessions?.created_at
          if (createdAt) {
            const d = new Date(createdAt)
            const ws = new Date(d)
            ws.setDate(d.getDate() - d.getDay())
            weekKeys.add(ws.toISOString().slice(0, 10))
          }
        }
        weeksOfPractice = weekKeys.size

        // Group by (section + topic) so "Algebra" in Quant and (hypothetical)
        // "Algebra" elsewhere don't collide. Topic label includes subtopic
        // where it adds useful detail (e.g. "CR — Assumption").
        type TopicAgg = {
          total: number
          correct: number
          section: Section
          subtopic: string | null
        }
        const topicMap = new Map<string, TopicAgg>()
        for (const a of attempts) {
          const sec = a.section as Section
          if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
          const topic = (a.topic as string) || "Other"
          const key = `${sec}|${topic}`
          const agg =
            topicMap.get(key) ?? {
              total: 0,
              correct: 0,
              section: sec,
              subtopic: (a.subtopic as string | null) || null,
            }
          agg.total++
          if (a.is_correct) agg.correct++
          topicMap.set(key, agg)
        }

        const rows: TopicRow[] = [...topicMap.entries()]
          .filter(([, v]) => v.total >= TOPIC_MIN_ATTEMPTS)
          .map(([key, v]) => {
            const topic = key.split("|").slice(1).join("|")
            return {
              topic,
              section: v.section,
              attempts: v.total,
              accuracy: Math.round((v.correct / v.total) * 100),
            }
          })
          .sort((a, b) => b.attempts - a.attempts)

        topicRows = rows

        // ---------- Pacing per section ----------
        type SecAgg = { total: number; count: number }
        const secAgg: Record<Section, SecAgg> = {
          Quant: { total: 0, count: 0 },
          Verbal: { total: 0, count: 0 },
          DI: { total: 0, count: 0 },
        }
        for (const a of attempts) {
          const sec = a.section as Section
          if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
          const ms = (a.time_spent_ms as number) ?? 0
          // Defensive against time_spent_ms of 0 or negative (clock skew /
          // submit-without-interaction) — skip those from the avg so one
          // instant-submit doesn't drag the mean to near-zero.
          if (ms <= 1000) continue
          secAgg[sec].total += ms
          secAgg[sec].count++
        }

        pacingRows = (["Quant", "Verbal", "DI"] as const)
          .filter((sec) => secAgg[sec].count >= PACING_MIN_ATTEMPTS)
          .map((sec) => {
            const avgMin = secAgg[sec].total / secAgg[sec].count / 60000
            const target = SECTION_TARGET_MIN[sec]
            return {
              section: sec,
              avgMin: Math.round(avgMin * 10) / 10,
              targetMin: target,
              // "over" in time = slower than target = red.
              over: avgMin > target,
            }
          })

        // ---------- Per-section baseline average time (ms) ----------
        // Needed by several downstream aggregations — topic timing
        // deviation + fast/slow classification — so compute once.
        const sectionAvgMs: Partial<Record<Section, number>> = {}
        for (const sec of ["Quant", "Verbal", "DI"] as const) {
          if (secAgg[sec].count > 0) {
            sectionAvgMs[sec] = secAgg[sec].total / secAgg[sec].count
          }
        }

        // ---------- Per-difficulty timing ----------
        // Shows how long the student spends on Beginner / Intermediate /
        // Advanced within each section. Surfaces "I spend 3 min on easy
        // questions" scenarios that indicate careless slow-down.
        type DifficultyTimeAgg = {
          totalMs: number
          count: number
          correct: number
        }
        const diffTime = new Map<
          string,
          DifficultyTimeAgg & { section: Section; difficulty: string }
        >()
        for (const a of attempts) {
          const sec = a.section as Section
          if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
          const ms = (a.time_spent_ms as number) ?? 0
          if (ms <= MIN_ATTEMPT_MS) continue
          const difficulty =
            (a.difficulty as string | null) ?? "Intermediate"
          const key = `${sec}|${difficulty}`
          const agg = diffTime.get(key) ?? {
            section: sec,
            difficulty,
            totalMs: 0,
            count: 0,
            correct: 0,
          }
          agg.totalMs += ms
          agg.count += 1
          if (a.is_correct) agg.correct += 1
          diffTime.set(key, agg)
        }

        difficultyTimingRows = [...diffTime.values()]
          .filter((v) => v.count >= DIFFICULTY_TIMING_MIN_ATTEMPTS)
          .map((v) => {
            const avgMin = v.totalMs / v.count / 60000
            return {
              section: v.section,
              difficulty: v.difficulty,
              attempts: v.count,
              avgMin: Math.round(avgMin * 10) / 10,
              accuracy: Math.round((v.correct / v.count) * 100),
            }
          })
          .sort((a, b) => {
            // Sort Quant → Verbal → DI, then Beginner → Intermediate → Advanced
            const secOrder: Record<Section, number> = { Quant: 0, Verbal: 1, DI: 2 }
            if (a.section !== b.section) return secOrder[a.section] - secOrder[b.section]
            const diffOrder: Record<string, number> = {
              Beginner: 0,
              Intermediate: 1,
              Advanced: 2,
            }
            return (diffOrder[a.difficulty] ?? 99) - (diffOrder[b.difficulty] ?? 99)
          })

        // ---------- Error-pattern breakdown ----------
        // Classifies every attempt (with valid time) against its
        // section's baseline:
        //   correct + fast   → efficient  (good)
        //   correct + slow   → labored   (right but inefficient)
        //   wrong   + fast   → rushed    (panic / misread)
        //   wrong   + slow   → stuck     (conceptual gap)
        //   middle-tempo attempts get no label — the student's behaviour
        //   was neither too fast nor too slow to flag.
        let efficient = 0
        let labored = 0
        let rushed = 0
        let stuck = 0
        let labelledWrong = 0
        let labelledRight = 0
        for (const a of attempts) {
          const sec = a.section as Section
          if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
          const ms = (a.time_spent_ms as number) ?? 0
          if (ms <= MIN_ATTEMPT_MS) continue
          const base = sectionAvgMs[sec]
          if (!base) continue
          const ratio = ms / base
          const isCorrect = !!a.is_correct
          if (ratio <= FAST_RATIO) {
            if (isCorrect) {
              efficient += 1
              labelledRight += 1
            } else {
              rushed += 1
              labelledWrong += 1
            }
          } else if (ratio >= SLOW_RATIO) {
            if (isCorrect) {
              labored += 1
              labelledRight += 1
            } else {
              stuck += 1
              labelledWrong += 1
            }
          }
        }
        if (labelledRight + labelledWrong > 0) {
          errorPatterns = {
            efficient,
            labored,
            rushed,
            stuck,
            totalLabelled: labelledRight + labelledWrong,
          }
        }

        // ---------- Prediction MAE (PDF v2 KPI) ----------
        // PDF v2 p.7: "A good internal target is a mean absolute
        // prediction error at or below 35 points against a recent
        // official mock." Our mocks aren't official, but the analogue
        // holds: compare our readiness band to the most recent
        // complete mock's total score.
        //
        // Requires: (a) all 3 sections with ≥10 attempts so the
        // readiness derivation is stable, matching the dashboard/study-
        // plan gating; (b) a mock where all 3 section sessions exist.
        type SecStatRow = { total: number; correct: number }
        const readinessSecStats: Record<Section, SecStatRow> = {
          Quant: { total: 0, correct: 0 },
          Verbal: { total: 0, correct: 0 },
          DI: { total: 0, correct: 0 },
        }
        for (const a of attempts) {
          const sec = a.section as Section
          if (!readinessSecStats[sec]) continue
          readinessSecStats[sec].total += 1
          if (a.is_correct) readinessSecStats[sec].correct += 1
        }
        const READINESS_MIN_SAMPLE = 10
        const readinessReady = (["Quant", "Verbal", "DI"] as const).every(
          (s) => readinessSecStats[s].total >= READINESS_MIN_SAMPLE
        )

        // Fetch mock section sessions (most recent first) — bounded to
        // the last 30 complete sessions to keep the query small. Used by
        // both the MAE snapshot (most-recent complete mock) and the MAE
        // trend chart (every complete mock).
        const { data: mockRows } = await supabase
          .from("practice_sessions")
          .select("slug, accuracy, created_at")
          .eq("user_id", user.id)
          .like("slug", "mock-%")
          .order("created_at", { ascending: false })
          .limit(30)

        // Group by YYYY-MM-DD date embedded in the slug
        // (mock-YYYY-MM-DD-section). Section sessions from the same
        // mock have the same date slug prefix.
        type MockRow = { slug: string; accuracy: number; created_at: string }
        const byDate = new Map<
          string,
          { sections: Partial<Record<Section, MockRow>>; created_at: string }
        >()
        for (const r of (mockRows as MockRow[] | null) ?? []) {
          const match = r.slug.match(
            /^mock-(\d{4}-\d{2}-\d{2})-(quant|verbal|di)$/i
          )
          if (!match) continue
          const date = match[1]
          const sec = (match[2].charAt(0).toUpperCase() +
            match[2].slice(1).toLowerCase()) as Section
          const normalisedSec: Section =
            sec === ("Di" as Section) ? "DI" : sec
          const group = byDate.get(date) ?? {
            sections: {} as Partial<Record<Section, MockRow>>,
            created_at: r.created_at,
          }
          // Keep the latest created_at across section sessions for
          // "date completed" ordering.
          if (r.created_at > group.created_at) group.created_at = r.created_at
          group.sections[normalisedSec] = r
          byDate.set(date, group)
        }

        // Complete mocks, newest first.
        const completeMocks = [...byDate.entries()]
          .filter(
            ([, g]) =>
              g.sections.Quant && g.sections.Verbal && g.sections.DI
          )
          .sort(([, a], [, b]) =>
            b.created_at.localeCompare(a.created_at)
          )

        // Helper: mock total from the 3-section aggregate.
        const mockTotalFor = (
          group: { sections: Partial<Record<Section, MockRow>> }
        ) =>
          Math.round(
            ((["Quant", "Verbal", "DI"] as const)
              .map((s) =>
                accuracyToScore((group.sections[s]!.accuracy ?? 0) / 100)
              )
              .reduce((x, y) => x + y, 0) /
              3 /
              10) *
              10
          )

        if (readinessReady && completeMocks.length > 0) {
          const avgAccuracy =
            (["Quant", "Verbal", "DI"] as const)
              .map(
                (s) =>
                  readinessSecStats[s].correct / readinessSecStats[s].total
              )
              .reduce((x, y) => x + y, 0) / 3
          const readinessTotal = accuracyToFocusTotal(avgAccuracy * 100)
          const [date, group] = completeMocks[0]
          const mockTotal = mockTotalFor(group)
          const signedDelta = readinessTotal - mockTotal
          const error = Math.abs(signedDelta)
          predictionMAE = {
            readinessTotal,
            mockTotal,
            mockDate: date,
            errorPoints: error,
            signedDelta,
            // PDF v2 target is ≤35 points; we stratify into calibrated
            // / drifting / miscalibrated so the student sees a clear
            // signal on whether to trust the readiness band.
            verdict:
              error <= 35
                ? "calibrated"
                : error <= 70
                  ? "drifting"
                  : "miscalibrated",
          }
        }
      }
    }
  } catch {
    // Supabase unavailable — render empty state.
  }

  // === Stage gate ===
  // Pre-data: render an analytics-specific baseline view (focused
  // unlock checklist + locked module previews). Avoids stacking six
  // empty cards that read as "the app isn't built yet." NBA is no
  // longer surfaced on /analytics — it's the dashboard's job, and on
  // this page it produced "baseline required / continue plan"
  // contradictions.
  if (!hasData) {
    return (
      <BaselineView
        officialExamCount={officialExamCount}
        sectionAttemptCount={sectionAttemptCount}
        confidenceRatedCount={confidenceRatedCount}
        weeksOfPractice={weeksOfPractice}
      />
    )
  }

  return (
    <>
      <AnalyticsClient
        scoreTrend={scoreTrend}
        topicRows={topicRows}
        pacingRows={pacingRows}
        difficultyTimingRows={difficultyTimingRows}
        errorPatterns={errorPatterns}
        calibration={calibration}
        predictionMAE={predictionMAE}
        hasData={hasData}
      />
    </>
  )
}

const EYEBROW_BASE =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]"

/**
 * Pre-data analytics view. Replaces the wall of "not enough data yet"
 * panels that the previous design rendered into. Three blocks: an
 * action-driven unlock hero, an unlock checklist with progress per
 * threshold, and a 2x3 grid of locked module previews so the
 * categories of analysis that *will* unlock are still visible.
 */
function BaselineView({
  officialExamCount,
  sectionAttemptCount,
  confidenceRatedCount,
  weeksOfPractice,
}: {
  officialExamCount: number
  sectionAttemptCount: Record<Section, number>
  confidenceRatedCount: number
  weeksOfPractice: number
}) {
  const baselineDone = officialExamCount > 0
  const totalAttempts =
    sectionAttemptCount.Quant +
    sectionAttemptCount.Verbal +
    sectionAttemptCount.DI

  // Unlock checklist — each row carries a "have / need" pair so the
  // student can see how close they are to each module rather than just
  // "not enough data yet". Modules unlock when the threshold is met.
  const checklist: Array<{
    label: string
    have: number
    need: number
    sublabel: string
  }> = [
    {
      label: "Official baseline exam",
      have: Math.min(officialExamCount, 1),
      need: 1,
      sublabel: "Score entered",
    },
    {
      label: "Quant attempts",
      have: sectionAttemptCount.Quant,
      need: 5,
      sublabel: "Per-topic accuracy",
    },
    {
      label: "Verbal attempts",
      have: sectionAttemptCount.Verbal,
      need: 5,
      sublabel: "Per-topic accuracy",
    },
    {
      label: "DI attempts",
      have: sectionAttemptCount.DI,
      need: 5,
      sublabel: "Per-topic accuracy",
    },
    {
      label: "Confidence ratings",
      have: confidenceRatedCount,
      need: 10,
      sublabel: "Calibration signal",
    },
    {
      label: "Weeks of practice",
      have: weeksOfPractice,
      need: 2,
      sublabel: "Readiness trajectory",
    },
  ]

  const lockedModules: Array<{
    Icon: typeof BarChart3
    title: string
    answers: string
    unlock: string
  }> = [
    {
      Icon: TrendingUp,
      title: "Readiness trajectory",
      answers: "Are you moving toward your target score?",
      unlock: "Unlocks after 2+ weeks of practice.",
    },
    {
      Icon: Compass,
      title: "Topic accuracy",
      answers: "Which topics are limiting your score?",
      unlock: "Unlocks after 5+ attempts in a topic.",
    },
    {
      Icon: Clock,
      title: "Section pacing",
      answers: "Is your timing stable per section?",
      unlock: "Unlocks after 5+ timed attempts per section.",
    },
    {
      Icon: Sparkles,
      title: "Strengths & weaknesses",
      answers: "Where do you finish strongest, where do you leak?",
      unlock: "Unlocks after 5+ attempts in 2+ topics.",
    },
    {
      Icon: Target,
      title: "Calibration",
      answers: "Are you over- or under-confident on what you know?",
      unlock: "Unlocks after 10+ confidence-rated answers.",
    },
    {
      Icon: BarChart3,
      title: "Score-report mirror",
      answers: "How will the GMAC ESR break down your performance?",
      unlock: "Unlocks after enough section + question-type coverage.",
    },
  ]

  // Hero CTA dynamically targets the most impactful next action.
  // Baseline exam first; then add practice volume; once attempts exist
  // the analytics page itself flips to active mode (not this branch).
  const primaryHref = baselineDone ? "/practice" : "/mock"
  const primaryLabel = baselineDone
    ? totalAttempts === 0
      ? "Run your first practice set"
      : "Continue practice"
    : "Enter your baseline official exam"

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* === Unlock hero === */}
      <section
        className="relative overflow-hidden rounded-2xl border"
        style={{
          borderColor: "rgba(201,168,76,0.22)",
          backgroundColor: "#0A0A0A",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(201,168,76,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 100% 100%, rgba(201,168,76,0.05) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative p-7 sm:p-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
            <p className={EYEBROW_BASE}>Performance map · locked</p>
          </div>
          <h1 className="font-display text-4xl sm:text-[44px] font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.04]">
            Your performance map activates after the{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              baseline.
            </span>
          </h1>
          <p className="mt-4 text-[15px] text-[#C0C0C0] leading-[1.7]">
            Six analytics modules unlock as your data grows: readiness
            trajectory, topic accuracy, section pacing, strengths &amp;
            weaknesses, confidence calibration, and the score-report
            mirror. Baseline exam first; the rest follow.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={primaryHref}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/test-builder"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              Build a custom set
            </Link>
          </div>
        </div>
      </section>

      {/* === Unlock checklist === */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <p className={EYEBROW_BASE}>Unlock checklist</p>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
            }}
            aria-hidden
          />
          <span className="text-[11px] text-[#555555] tabular-nums">
            {checklist.filter((r) => r.have >= r.need).length} /{" "}
            {checklist.length} unlocked
          </span>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-[#0D0D0D] p-2">
          {checklist.map((row) => {
            const done = row.have >= row.need
            const pct = Math.min(100, Math.round((row.have / row.need) * 100))
            return (
              <div
                key={row.label}
                className="flex items-center gap-4 px-4 py-3 rounded-lg transition-colors"
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: done
                      ? "rgba(62,207,142,0.15)"
                      : "rgba(255,255,255,0.04)",
                    border: `1px solid ${
                      done
                        ? "rgba(62,207,142,0.35)"
                        : "rgba(255,255,255,0.08)"
                    }`,
                  }}
                  aria-hidden
                >
                  {done && (
                    <CheckCircle2
                      className="w-3.5 h-3.5"
                      style={{ color: "#3ECF8E" }}
                    />
                  )}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <p
                      className="text-[13px] font-semibold tracking-tight"
                      style={{
                        color: done ? "rgba(240,240,240,0.7)" : "#F0F0F0",
                      }}
                    >
                      {row.label}
                    </p>
                    <p
                      className="text-[11px] tabular-nums flex-shrink-0"
                      style={{
                        color: done
                          ? "#3ECF8E"
                          : "rgba(255,255,255,0.45)",
                      }}
                    >
                      {row.have} / {row.need}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1 flex-1 rounded-full bg-white/[0.05] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: done ? "#3ECF8E" : "#C9A84C",
                        }}
                      />
                    </div>
                    <span
                      className="text-[10px] uppercase tracking-[0.18em] font-semibold flex-shrink-0"
                      style={{
                        color: done ? "#3ECF8E" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {row.sublabel}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* === Locked module previews ===
          Replaces the previous wall of "Not enough data yet" cards.
          Each tile names what it will answer, not just that it's empty. */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#888888]">
            Modules that unlock
          </p>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.10), transparent)",
            }}
            aria-hidden
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {lockedModules.map(({ Icon, title, answers, unlock }) => (
            <div
              key={title}
              className="p-4 rounded-xl border flex flex-col gap-2.5"
              style={{
                borderColor: "rgba(255,255,255,0.05)",
                backgroundColor: "rgba(255,255,255,0.012)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <Icon
                    className="w-3.5 h-3.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  />
                </span>
                <Lock
                  className="w-3 h-3"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                  aria-hidden
                />
              </div>
              <p
                className="text-[14px] font-semibold tracking-tight"
                style={{ color: "rgba(240,240,240,0.7)" }}
              >
                {title}
              </p>
              <p
                className="text-[12px] leading-snug italic"
                style={{ color: "rgba(192,192,192,0.5)" }}
              >
                Answers: {answers}
              </p>
              <p
                className="text-[11px] mt-1"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {unlock}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

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
import { getUserState } from "@/lib/user-state"
import {
  computeCalibration,
  type CalibrationReport,
  type ChapterProgressMap,
} from "@/lib/calibration"
import { getAllQuestions } from "@/lib/content"
import type { Section } from "@/types"
import {
  PAYWALL_ENABLED,
  canAccess,
  effectiveTierForUser,
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

/** Shape returned by the get_analytics_aggregates() RPC — compact per-group
 *  aggregates the database computes from practice_attempts (RLS-scoped to the
 *  caller), replacing the legacy ~20k-row fetch + JS fan-out. */
type AnalyticsAggregates = {
  attempt_count: number
  topic_stats: { section: Section; topic: string; total: number; correct: number }[]
  section_time: { section: Section; total_ms: number; cnt: number }[]
  difficulty_time: {
    section: Section
    difficulty: string
    total_ms: number
    cnt: number
    correct: number
  }[]
  section_totals: { section: Section; total: number; correct: number }[]
  confidence_buckets: { confidence: string; total: number; correct: number }[]
  confidence_rated_count: number
  error_patterns: { efficient: number; labored: number; rushed: number; stuck: number }
  week_count: number
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

  // Baseline gate — the only pre-data signal the locked view needs.
  let officialExamCount = 0

  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const state = await getUserState(supabase, user)

      // Paywall gate (reference implementation). Fully skipped while
      // PAYWALL_ENABLED is off — no extra query, no behavior change, the page
      // renders exactly as before. Flip PAYWALL_ENABLED=true to make the full
      // analytics dashboard a paid feature. Copy this guard to gate any other
      // surface (mock simulator, review queue, test builder).
      if (PAYWALL_ENABLED) {
        const tier = await effectiveTierForUser(supabase, user, new Date())
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
      // unlocks several modules. Read from relocated user state.
      const metaOfficialScores = state.official_exam_scores
      officialExamCount = Array.isArray(metaOfficialScores)
        ? metaOfficialScores.length
        : 0
      // ---------- Calibration (chapter_progress + practice_attempts) ----------
      // chapter_progress is written cross-device via /api/chapter-progress;
      // practice_attempts.confidence is written by SessionClient on session
      // submit. The two sources are merged below once attempts are fetched.
      const chapterProgress = state.chapter_progress as
        | ChapterProgressMap
        | undefined

      // ---------- Score trajectory ----------
      const eightWeeksAgo = new Date(Date.now() - 56 * 86400000).toISOString()

      // Per-session accuracy is the right unit here; if a user does 3 sessions
      // in a week, the weekly average means "average accuracy across sessions
      // that week", which we then scale to a Focus total.
      // The score-trajectory sessions read and the attempt aggregates are
      // independent (both scoped to this user) so fetch them concurrently. The
      // per-topic / pacing / per-difficulty / behaviour / readiness /
      // confidence fan-out now runs in Postgres via get_analytics_aggregates()
      // (RLS-scoped) and returns compact per-group rows instead of ~20k raw
      // attempts; the same thresholds + rounding are applied below.
      const [{ data: sessions }, { data: aggRaw }] = await Promise.all([
        supabase
          .from("practice_sessions")
          .select("accuracy, section, created_at")
          .eq("user_id", user.id)
          .gte("created_at", eightWeeksAgo)
          .order("created_at", { ascending: true }),
        supabase.rpc("get_analytics_aggregates"),
      ])
      const agg = (aggRaw ?? null) as AnalyticsAggregates | null

      if (sessions && sessions.length > 0) {
        type Bucket = { overall: number[]; Quant: number[]; Verbal: number[]; DI: number[] }
        const weeks = new Map<string, Bucket>()
        for (const s of sessions) {
          const d = new Date(s.created_at as string)
          const weekStart = new Date(d)
          weekStart.setDate(d.getDate() - d.getDay())
          // Local-date key (NOT toISOString, which is UTC) so a session near
          // midnight isn't bucketed into the wrong week in non-UTC timezones.
          const key = `${weekStart.getFullYear()}-${String(
            weekStart.getMonth() + 1
          ).padStart(2, "0")}-${String(weekStart.getDate()).padStart(2, "0")}`
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
            const [wy, wm, wd] = weekKey.split("-").map(Number)
            const weekDate = new Date(wy, (wm ?? 1) - 1, wd ?? 1)
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

      // ---------- Calibration (chapter progress + practice buckets) ----------
      // Chapter-progress confidence comes from user_state; the practice side is
      // the confidence buckets the RPC returned. Normalize medium→med to match
      // computeCalibration's tier keys.
      const practiceTierTotals: Partial<
        Record<"low" | "med" | "high", { total: number; correct: number }>
      > = {}
      for (const b of agg?.confidence_buckets ?? []) {
        const level =
          b.confidence === "low"
            ? "low"
            : b.confidence === "high"
              ? "high"
              : b.confidence === "medium"
                ? "med"
                : null
        if (!level) continue
        const cur = practiceTierTotals[level] ?? { total: 0, correct: 0 }
        cur.total += b.total
        cur.correct += b.correct
        practiceTierTotals[level] = cur
      }
      if (chapterProgress || Object.keys(practiceTierTotals).length > 0) {
        calibration = computeCalibration(
          chapterProgress,
          getAllQuestions(),
          undefined,
          practiceTierTotals,
        )
      }

      if (agg && agg.attempt_count > 0) {
        hasData = true

        // ---------- Per-topic accuracy ----------
        // Filter to topics with enough attempts to trust, sort by volume.
        topicRows = (agg.topic_stats ?? [])
          .filter((r) => r.total >= TOPIC_MIN_ATTEMPTS)
          .map((r) => ({
            topic: r.topic,
            section: r.section,
            attempts: r.total,
            accuracy: Math.round((r.correct / r.total) * 100),
          }))
          .sort((a, b) => b.attempts - a.attempts)

        // ---------- Pacing per section ----------
        // section_time holds valid-time (>1s) total ms + count per section.
        const secTime = new Map<Section, { total: number; count: number }>()
        for (const r of agg.section_time ?? []) {
          if (
            r.section === "Quant" ||
            r.section === "Verbal" ||
            r.section === "DI"
          ) {
            secTime.set(r.section, { total: r.total_ms, count: r.cnt })
          }
        }
        pacingRows = (["Quant", "Verbal", "DI"] as const)
          .filter((sec) => (secTime.get(sec)?.count ?? 0) >= PACING_MIN_ATTEMPTS)
          .map((sec) => {
            const st = secTime.get(sec)!
            const avgMin = st.total / st.count / 60000
            const target = SECTION_TARGET_MIN[sec]
            return {
              section: sec,
              avgMin: Math.round(avgMin * 10) / 10,
              targetMin: target,
              // "over" in time = slower than target = red.
              over: avgMin > target,
            }
          })

        // ---------- Per-difficulty timing ----------
        // Per (section, difficulty) average time + accuracy over valid-time
        // attempts. Sorted Quant→Verbal→DI, then Beginner→Intermediate→Advanced.
        difficultyTimingRows = (agg.difficulty_time ?? [])
          .filter((r) => r.cnt >= DIFFICULTY_TIMING_MIN_ATTEMPTS)
          .map((r) => ({
            section: r.section,
            difficulty: r.difficulty,
            attempts: r.cnt,
            avgMin: Math.round((r.total_ms / r.cnt / 60000) * 10) / 10,
            accuracy: Math.round((r.correct / r.cnt) * 100),
          }))
          .sort((a, b) => {
            const secOrder: Record<Section, number> = { Quant: 0, Verbal: 1, DI: 2 }
            if (a.section !== b.section) return secOrder[a.section] - secOrder[b.section]
            const diffOrder: Record<string, number> = {
              Beginner: 0,
              Intermediate: 1,
              Advanced: 2,
            }
            return (diffOrder[a.difficulty] ?? 99) - (diffOrder[b.difficulty] ?? 99)
          })

        // ---------- Behaviour-pattern breakdown ----------
        // efficient (fast+right) / labored (slow+right) / rushed (fast+wrong)
        // / stuck (slow+wrong), classified in SQL against each section's
        // valid-time baseline. Middle-tempo attempts are unlabelled.
        const ep = agg.error_patterns
        if (ep) {
          const totalLabelled = ep.efficient + ep.labored + ep.rushed + ep.stuck
          if (totalLabelled > 0) {
            errorPatterns = {
              efficient: ep.efficient,
              labored: ep.labored,
              rushed: ep.rushed,
              stuck: ep.stuck,
              totalLabelled,
            }
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
        for (const r of agg.section_totals ?? []) {
          if (
            r.section === "Quant" ||
            r.section === "Verbal" ||
            r.section === "DI"
          ) {
            readinessSecStats[r.section] = { total: r.total, correct: r.correct }
          }
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
      <BaselineView officialExamCount={officialExamCount} />
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
}: {
  officialExamCount: number
}) {
  // This view only renders while attempt_count === 0, so every
  // attempt-derived "progress" number here would be 0 by construction —
  // the old six-row have/need checklist with progress bars could never
  // display anything but 0/N (one attempt anywhere and the whole page
  // flips to active mode). Only the baseline exam is a real, trackable
  // step at this stage; per-module thresholds live on the locked cards.
  const baselineDone = officialExamCount > 0

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
    ? "Run your first practice set"
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

      {/* === First step — the one real, trackable item at this stage === */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <p className={EYEBROW_BASE}>First step</p>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
            }}
            aria-hidden
          />
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-[#0D0D0D] p-2">
          <div className="flex items-center gap-4 px-4 py-3 rounded-lg">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: baselineDone
                  ? "rgba(62,207,142,0.15)"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${
                  baselineDone
                    ? "rgba(62,207,142,0.35)"
                    : "rgba(255,255,255,0.08)"
                }`,
              }}
              aria-hidden
            >
              {baselineDone && (
                <CheckCircle2
                  className="w-3.5 h-3.5"
                  style={{ color: "#3ECF8E" }}
                />
              )}
            </span>
            <div className="flex-1 min-w-0">
              <p
                className="text-[13px] font-semibold tracking-tight"
                style={{
                  color: baselineDone ? "rgba(240,240,240,0.7)" : "#F0F0F0",
                }}
              >
                Official baseline exam
              </p>
              <p className="text-[11px] mt-0.5" style={{ color: "#888888" }}>
                {baselineDone
                  ? "Score entered — practice attempts unlock the modules below."
                  : "Take an official mba.com practice exam and enter the score on the Mock page."}
              </p>
            </div>
          </div>
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

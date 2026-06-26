"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowRight,
  BarChart3,
  Brain,
  Clock,
  Gauge,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react"
import EmptyState from "@/components/shared/EmptyState"
import type { CalibrationReport } from "@/lib/calibration"
import type { Section } from "@/types"

export interface ScoreTrendPoint {
  weekKey: string
  weekLabel: string
  index: number
  total: number | null
  overallAccuracy: number | null
  quant: number | null
  verbal: number | null
  di: number | null
}

export interface TopicRow {
  topic: string
  section: Section
  attempts: number
  accuracy: number
}

export interface PacingRow {
  section: Section
  avgMin: number
  targetMin: number
  over: boolean
}

export interface DifficultyTimingRow {
  section: Section
  difficulty: string
  attempts: number
  avgMin: number
  accuracy: number
}

export interface ErrorPatternSummary {
  /** Correct + fast: efficient, the outcome you want. */
  efficient: number
  /** Correct + slow: labored — got it right but burned time. */
  labored: number
  /** Wrong + fast: rushed — panic, misread, skipped steps. */
  rushed: number
  /** Wrong + slow: stuck — conceptual gap even with extra time. */
  stuck: number
  totalLabelled: number
}

/** PDF v2 KPI: prediction MAE (≤35 points vs a recent mock). Checks
 *  whether our internal readiness band is tracking actual mock scores.
 *  A miscalibrated reading doesn't mean the student is doing badly — it
 *  means the readiness number is misleading and they should weigh their
 *  latest mock over the rolling estimate. */
export interface PredictionMAE {
  readinessTotal: number
  mockTotal: number
  mockDate: string // YYYY-MM-DD
  /** Absolute error in points: |readiness - mock|. */
  errorPoints: number
  /** Signed delta: readiness - mock. Positive = readiness runs HIGH vs
   *  mock (student is inflating expectations); negative = readiness
   *  runs LOW (student is underestimating their real performance).
   *  Actionable direction matters more than magnitude alone. */
  signedDelta: number
  verdict: "calibrated" | "drifting" | "miscalibrated"
}

// Shared class snippets for the editorial card shell. Non-chart cards
// lift and gain a gold-tinted shadow on hover; charts stay still because
// the crosshair + tooltip interaction is its own response.
const CARD_BASE =
  "relative rounded-2xl border border-white/[0.06] bg-[#0D0D0D] p-6 transition-all duration-300"
const CARD_HOVER =
  "hover:border-[#C9A84C]/20 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(201,168,76,0.12)]"
const EYEBROW =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]"

// Lazy-load the recharts chart so the ~97KB charting library stays out of the
// /analytics initial bundle and loads after the page hydrates. The placeholder
// reserves the chart's 240px height so there is no layout shift.
const ScoreTrajectoryChart = dynamic(() => import("./ScoreTrajectoryChart"), {
  ssr: false,
  loading: () => <div style={{ height: 240 }} aria-hidden="true" />,
})

export default function AnalyticsClient({
  scoreTrend,
  topicRows,
  pacingRows,
  difficultyTimingRows,
  errorPatterns,
  calibration,
  predictionMAE,
  hasData,
}: {
  scoreTrend: ScoreTrendPoint[]
  topicRows: TopicRow[]
  pacingRows: PacingRow[]
  difficultyTimingRows: DifficultyTimingRow[]
  errorPatterns: ErrorPatternSummary | null
  calibration: CalibrationReport | null
  predictionMAE: PredictionMAE | null
  hasData: boolean
}) {
  const trendWithData = scoreTrend.filter((p) => p.total !== null)
  const hasTrend = trendWithData.length >= 2
  const firstTotal = hasTrend ? trendWithData[0].total : null
  const lastTotal = hasTrend ? trendWithData[trendWithData.length - 1].total : null
  const trendRangeLabel =
    hasTrend && firstTotal !== null && lastTotal !== null
      ? `${firstTotal} → ${lastTotal} over ${trendWithData.length} week${
          trendWithData.length === 1 ? "" : "s"
        }`
      : null
  const trendMin =
    hasTrend && firstTotal !== null
      ? Math.max(205, Math.floor((firstTotal - 30) / 10) * 10)
      : 205
  const trendMax =
    hasTrend && lastTotal !== null
      ? Math.min(805, Math.ceil((lastTotal + 30) / 10) * 10)
      : 805

  // Display up to 10 topics (by attempt count) — matches what the old mock
  // showed, keeps the page scannable without a dedicated topic drill-down.
  const displayedTopics = topicRows.slice(0, 10)

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero — atmospheric editorial header with eyebrow + Fraunces H1 */}
      <section className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0A0A0A] px-6 py-10 sm:px-10 sm:py-14">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.14) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative">
          <p className={EYEBROW + " mb-4"}>Analytics</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.02]">
            Your performance,{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              rendered.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] text-[#C0C0C0] leading-[1.75]">
            Every attempt, every minute, every miss — compiled into the
            breakdowns your Enhanced Score Report will mirror. Signal over
            vanity.
          </p>
        </div>
      </section>

      {/* Score trajectory */}
      <div className={CARD_BASE}>
        <p className={EYEBROW + " mb-2"}>Readiness Trajectory</p>
        <h2 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-[1.1]">
          Your weekly{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            arc.
          </span>
        </h2>
        <p className="mt-2 text-[13px] text-[#888888] leading-relaxed">
          {hasTrend
            ? trendRangeLabel
            : trendWithData.length === 1
              ? "One week of data so far — keep practicing to see a trend."
              : "Complete practice sets over a few weeks to see your score trajectory."}
        </p>
        <div className="mt-6">
          {hasTrend ? (
            <ScoreTrajectoryChart
              data={trendWithData}
              domainMin={trendMin}
              domainMax={trendMax}
            />
          ) : (
            <EmptyState
              icon={BarChart3}
              title="Not enough data yet"
              description="Your weekly readiness band will plot here once you've run practice sets across two or more weeks. Readiness reflects current practice accuracy, not a test-day score prediction."
              ctaHref="/test-builder"
              ctaLabel="Build a test"
              size="sm"
            />
          )}
        </div>
      </div>

      {/* Topic accuracy */}
      <div className={CARD_BASE + " " + CARD_HOVER}>
        <p className={EYEBROW + " mb-2"}>Accuracy by Topic</p>
        <h2 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-[1.1]">
          Where you{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            land.
          </span>
        </h2>
        <p className="mt-2 text-[13px] text-[#888888] leading-relaxed">
          {displayedTopics.length > 0
            ? `Top ${displayedTopics.length} topics by volume (5+ attempts each).`
            : "Topics with at least 5 attempts will appear here."}
        </p>
        <div className="mt-6">
          {displayedTopics.length > 0 ? (
            <div className="space-y-3">
              {displayedTopics.map((t) => {
                const color =
                  t.accuracy >= 75
                    ? "#3ECF8E"
                    : t.accuracy >= 65
                      ? "#C9A84C"
                      : "#FF4444"
                return (
                  <div key={`${t.section}|${t.topic}`} className="flex items-center gap-4">
                    <p className="text-[13px] text-[#C0C0C0] w-40 flex-shrink-0 truncate">
                      <span className="text-[#555555] mr-1.5 text-[11px] uppercase tracking-wider">
                        {t.section}
                      </span>
                      {t.topic}
                    </p>
                    <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${t.accuracy}%`,
                          backgroundColor: color,
                        }}
                      />
                    </div>
                    <div className="flex items-baseline gap-2 w-24 flex-shrink-0 justify-end">
                      <span
                        className="font-display text-lg font-semibold tabular-nums"
                        style={{ color }}
                      >
                        {t.accuracy}
                      </span>
                      <span className="text-[11px] text-[#555555] tabular-nums">
                        · {t.attempts}q
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <EmptyState
              icon={BarChart3}
              title="No topic data yet"
              description="Accuracy per topic appears once you've attempted at least 5 questions in a topic."
              ctaHref="/practice"
              ctaLabel="Practice"
              size="sm"
            />
          )}
        </div>
      </div>

      {/* Pacing */}
      <div className={CARD_BASE + " " + CARD_HOVER}>
          <p className={EYEBROW + " mb-2"}>Section Pacing</p>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-[1.15]">
            Time per question
          </h2>
          <p className="mt-2 text-[13px] text-[#888888] leading-relaxed">
            Average vs. section target.
          </p>
          <div className="mt-6">
            {pacingRows.length > 0 ? (
              <div className="space-y-4">
                {pacingRows.map((p) => {
                  // Widest visible bar at 2× target (so over-target shows >50%
                  // of the track). Keeps the graphic meaningful even for a
                  // large blowup.
                  const widthPct = Math.min(
                    100,
                    (p.avgMin / (p.targetMin * 2)) * 100
                  )
                  const color = p.over ? "#FF4444" : "#3ECF8E"
                  return (
                    <div key={p.section} className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#C0C0C0] font-semibold w-12 flex-shrink-0">
                        {p.section}
                      </span>
                      <div className="flex-1 mx-4 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${widthPct}%`,
                            backgroundColor: color,
                          }}
                        />
                      </div>
                      <div className="flex items-baseline gap-2 w-28 flex-shrink-0 justify-end">
                        <span
                          className="font-display text-base font-semibold tabular-nums"
                          style={{ color }}
                        >
                          {p.avgMin.toFixed(1)}m
                        </span>
                        <span className="text-[10px] text-[#555555] tabular-nums">
                          / {p.targetMin}m
                        </span>
                        {p.over ? (
                          <TrendingUp
                            className="w-3 h-3"
                            style={{ color }}
                            aria-label="over target"
                          />
                        ) : (
                          <TrendingDown
                            className="w-3 h-3"
                            style={{ color }}
                            aria-label="under target"
                          />
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <EmptyState
                icon={BarChart3}
                title="Pacing needs more attempts"
                description="Average time per question appears once a section has at least 5 timed attempts."
                ctaHref="/practice"
                ctaLabel="Practice"
                size="sm"
              />
            )}
          </div>
      </div>

      {/* Calibration — confidence rating vs actual accuracy, pulled from
          ChapterReader's per-question confidence capture. */}
      {calibration && calibration.totalRated > 0 && (
        <div className={CARD_BASE + " " + CARD_HOVER}>
          <p className={EYEBROW + " mb-2"}>Calibration</p>
          <div className="flex items-start gap-3">
            <Brain
              className="w-5 h-5 mt-1 flex-shrink-0"
              style={{ color: "#C9A84C" }}
            />
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-[1.15]">
                Do you know what you{" "}
                <span className="font-display-italic" style={{ color: "#C9A84C" }}>
                  know?
                </span>
              </h2>
              <p className="mt-2 text-[13px] text-[#888888] leading-relaxed">
                Self-rated confidence on chapter check-questions vs. actual
                accuracy. Metacognition is one of the strongest predictors of
                test performance.
              </p>
            </div>
          </div>

          <div
            className="mt-6 p-4 rounded-xl text-[13px] leading-relaxed"
            style={{
              backgroundColor:
                calibration.verdict === "well-calibrated"
                  ? "rgba(62,207,142,0.06)"
                  : calibration.verdict === "overconfident"
                    ? "rgba(255,68,68,0.06)"
                    : calibration.verdict === "underconfident"
                      ? "rgba(201,168,76,0.06)"
                      : "rgba(255,255,255,0.03)",
              color:
                calibration.verdict === "well-calibrated"
                  ? "#3ECF8E"
                  : calibration.verdict === "overconfident"
                    ? "#FF4444"
                    : calibration.verdict === "underconfident"
                      ? "#C9A84C"
                      : "#C0C0C0",
              border: `1px solid ${
                calibration.verdict === "well-calibrated"
                  ? "rgba(62,207,142,0.18)"
                  : calibration.verdict === "overconfident"
                    ? "rgba(255,68,68,0.18)"
                    : calibration.verdict === "underconfident"
                      ? "rgba(201,168,76,0.22)"
                      : "rgba(255,255,255,0.08)"
              }`,
            }}
          >
            {calibration.headline}
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {calibration.tiers.map((tier) => {
              // Per-tier minimum sample. A 100% reading from "1/1
              // correct" was the page's most embarrassing analytics
              // bug — below MIN_TIER_SAMPLE we render a "collecting"
              // state instead of a percentage + delta.
              const MIN_TIER_SAMPLE = 5
              const enough = tier.total >= MIN_TIER_SAMPLE
              const pct =
                tier.total === 0 ? null : Math.round(tier.accuracy * 100)
              const ideal =
                tier.level === "high" ? 85 : tier.level === "med" ? 65 : 45
              const delta = enough && pct !== null ? pct - ideal : null
              return (
                <div
                  key={tier.level}
                  className="p-5 rounded-xl border border-white/[0.06] bg-[#0A0A0A]"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#888888] font-semibold mb-2">
                    {tier.label} confidence
                  </p>
                  {tier.total === 0 ? (
                    <p className="font-display text-3xl font-semibold text-[#555555]">
                      —
                    </p>
                  ) : !enough ? (
                    <>
                      <p className="font-display text-2xl font-semibold text-[#888888] leading-none">
                        Collecting
                      </p>
                      <p className="text-[11px] text-[#888888] mt-2 tabular-nums">
                        {tier.total} / {MIN_TIER_SAMPLE} rated
                      </p>
                      <div className="mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round(
                                (tier.total / MIN_TIER_SAMPLE) * 100
                              )
                            )}%`,
                            backgroundColor: "#C9A84C",
                          }}
                        />
                      </div>
                      <p className="text-[10px] text-[#666666] mt-2 italic leading-snug">
                        Need {MIN_TIER_SAMPLE - tier.total} more rated answer
                        {MIN_TIER_SAMPLE - tier.total === 1 ? "" : "s"} before
                        this tier reads cleanly.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-display text-4xl font-semibold text-[#F0F0F0] tabular-nums leading-none">
                        {pct}
                        <span className="text-lg font-normal text-[#555555]">
                          %
                        </span>
                      </p>
                      <p className="text-[11px] text-[#888888] mt-2">
                        {tier.correct} / {tier.total} correct
                        {delta !== null && (
                          <span
                            className="ml-2 font-semibold tabular-nums"
                            style={{
                              color:
                                Math.abs(delta) < 8
                                  ? "#3ECF8E"
                                  : delta > 0
                                    ? "#3ECF8E"
                                    : "#FF4444",
                            }}
                          >
                            {delta > 0 ? "+" : ""}
                            {delta} vs ideal
                          </span>
                        )}
                      </p>
                    </>
                  )}
                </div>
              )
            })}
          </div>
          <p className="text-[11px] text-[#555555] mt-4 leading-relaxed italic">
            Well-calibrated benchmarks: High ≈ 85%, Medium ≈ 65%, Low ≈ 45%.
            Close to those numbers = you know what you know. Far below on High
            = overconfident; far above on Low = second-guessing yourself.
          </p>
        </div>
      )}

      {/* Prediction MAE — how well the readiness band tracks actual
          mock scores. PDF v2 target ≤35 points. Only renders when both
          sides (readiness + a complete mock) are available. */}
      {predictionMAE && <PredictionMAECard mae={predictionMAE} />}

      {/* Error pattern breakdown — efficient / labored / rushed / stuck */}
      {errorPatterns && errorPatterns.totalLabelled > 0 && (
        <div className={CARD_BASE + " " + CARD_HOVER}>
          <p className={EYEBROW + " mb-2"}>Behaviour Patterns</p>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-[1.15]">
            How you{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              answered.
            </span>
          </h2>
          <p className="mt-2 text-[13px] text-[#888888] leading-relaxed">
            Attempts tagged against your own section baseline — fast or slow
            relative to how long you typically take. Middle-tempo attempts
            (neither too fast nor too slow) aren&apos;t counted.
          </p>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <PatternCard
              label="Efficient"
              description="Correct, fast — exactly what you want."
              count={errorPatterns.efficient}
              total={errorPatterns.totalLabelled}
              tone="good"
            />
            <PatternCard
              label="Labored"
              description="Correct but slow — right answer, wasted time."
              count={errorPatterns.labored}
              total={errorPatterns.totalLabelled}
              tone="warn"
            />
            <PatternCard
              label="Rushed"
              description="Wrong + fast — panic, misread, skipped steps."
              count={errorPatterns.rushed}
              total={errorPatterns.totalLabelled}
              tone="bad"
            />
            <PatternCard
              label="Stuck"
              description="Wrong + slow — conceptual gap even with extra time."
              count={errorPatterns.stuck}
              total={errorPatterns.totalLabelled}
              tone="bad"
            />
          </div>
        </div>
      )}

      {/* Per-difficulty timing — how long on easy vs hard in each section */}
      {difficultyTimingRows.length > 0 && (
        <div className={CARD_BASE + " " + CARD_HOVER}>
          <p className={EYEBROW + " mb-2"}>Time by Difficulty</p>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-[1.15]">
            Easy, medium, hard.
          </h2>
          <p className="mt-2 text-[13px] text-[#888888] leading-relaxed">
            Average time and accuracy by difficulty within each section. If
            your easy-question times are high, you&apos;re leaving bankable
            minutes on the table; if your hard-question accuracy drops off a
            cliff, consider spending less time there and guessing.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-white/[0.05]">
            <table className="w-full text-[13px]">
              <thead>
                <tr
                  className="text-left border-b border-white/[0.05]"
                  style={{ backgroundColor: "#0A0A0A" }}
                >
                  <th className="py-3 px-4 text-[10px] uppercase tracking-[0.18em] font-semibold text-[#555555]">
                    Section
                  </th>
                  <th className="py-3 px-4 text-[10px] uppercase tracking-[0.18em] font-semibold text-[#555555]">
                    Difficulty
                  </th>
                  <th className="py-3 px-4 text-[10px] uppercase tracking-[0.18em] font-semibold text-[#555555] text-right">
                    Attempts
                  </th>
                  <th className="py-3 px-4 text-[10px] uppercase tracking-[0.18em] font-semibold text-[#555555] text-right">
                    Avg Time
                  </th>
                  <th className="py-3 px-4 text-[10px] uppercase tracking-[0.18em] font-semibold text-[#555555] text-right">
                    Accuracy
                  </th>
                </tr>
              </thead>
              <tbody>
                {difficultyTimingRows.map((r) => (
                  <tr
                    key={`${r.section}|${r.difficulty}`}
                    className="border-b border-white/[0.04] last:border-0 transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="py-3 px-4 text-[#F0F0F0]">{r.section}</td>
                    <td className="py-3 px-4 text-[#C0C0C0]">{r.difficulty}</td>
                    <td className="py-3 px-4 text-right text-[#C0C0C0] tabular-nums">
                      {r.attempts}
                    </td>
                    <td className="py-3 px-4 text-right text-[#F0F0F0] tabular-nums">
                      {r.avgMin.toFixed(1)}m
                    </td>
                    <td
                      className="py-3 px-4 text-right font-display font-semibold tabular-nums"
                      style={{
                        color:
                          r.accuracy >= 75
                            ? "#3ECF8E"
                            : r.accuracy >= 50
                              ? "#C9A84C"
                              : "#FF4444",
                      }}
                    >
                      {r.accuracy}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!hasData && <FirstRunState />}
    </div>
  )
}

function PredictionMAECard({ mae }: { mae: PredictionMAE }) {
  const { verdict, errorPoints, signedDelta, readinessTotal, mockTotal, mockDate } = mae
  const colour =
    verdict === "calibrated"
      ? "#3ECF8E"
      : verdict === "drifting"
        ? "#C9A84C"
        : "#FF4444"
  const bg =
    verdict === "calibrated"
      ? "rgba(62,207,142,0.06)"
      : verdict === "drifting"
        ? "rgba(201,168,76,0.06)"
        : "rgba(255,68,68,0.06)"
  const verdictLabel =
    verdict === "calibrated"
      ? "Calibrated"
      : verdict === "drifting"
        ? "Drifting"
        : "Miscalibrated"
  // Direction matters as much as magnitude: "running high" means the
  // readiness band is inflating your expectations (overconfidence risk
  // on test day); "running low" means your real test performance is
  // likely better than the rolling estimate suggests.
  const directionLabel =
    signedDelta > 0 ? "running high" : signedDelta < 0 ? "running low" : "aligned"
  const errorPill =
    signedDelta === 0
      ? "on target"
      : `${Math.abs(signedDelta)} pts ${directionLabel}`
  const readoutCopy =
    verdict === "calibrated"
      ? `Readiness is tracking your mock within ±35 points — trust the band.`
      : verdict === "drifting"
        ? signedDelta > 0
          ? `Readiness is ${errorPoints} points HIGH vs your ${mockDate} mock. Practice accuracy is inflating expectations — weigh the mock over the rolling estimate.`
          : `Readiness is ${errorPoints} points LOW vs your ${mockDate} mock. You're underestimating real-test performance — the mock is the better signal right now.`
        : signedDelta > 0
          ? `Readiness is ${errorPoints} points HIGH vs your ${mockDate} mock. The band isn't tracking; until more mocks land, treat the mock as the real floor.`
          : `Readiness is ${errorPoints} points LOW vs your ${mockDate} mock. The band isn't tracking; the mock is the stronger predictor right now.`
  return (
    <div
      className="relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: colour + "33",
        backgroundColor: bg,
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-2"
        style={{ color: colour }}
      >
        Prediction Accuracy
      </p>
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-[1.15]">
          {verdictLabel}
        </h2>
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-[0.18em] tabular-nums"
          style={{ backgroundColor: colour + "22", color: colour }}
        >
          {errorPill}
        </span>
      </div>
      <p className="text-[13px] text-[#C0C0C0] leading-relaxed mb-5">
        {readoutCopy}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.06]">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#888888] font-semibold mb-2">
            Readiness band
          </p>
          <p className="font-display text-3xl font-semibold text-[#F0F0F0] tabular-nums leading-none">
            {readinessTotal}
          </p>
          <p className="text-[10px] text-[#555555] mt-2">
            from all practice accuracy
          </p>
        </div>
        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.06]">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#888888] font-semibold mb-2">
            Latest mock
          </p>
          <p className="font-display text-3xl font-semibold text-[#F0F0F0] tabular-nums leading-none">
            {mockTotal}
          </p>
          <p className="text-[10px] text-[#555555] mt-2 tabular-nums">{mockDate}</p>
        </div>
      </div>
    </div>
  )
}

function FirstRunState() {
  return (
    <div
      className="p-8 sm:p-10 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] text-center"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{
          backgroundColor: "rgba(201,168,76,0.12)",
          border: "1px solid rgba(201,168,76,0.28)",
        }}
      >
        <Sparkles className="w-6 h-6" style={{ color: "#C9A84C" }} />
      </div>
      <p className={EYEBROW + " mb-4"}>First run</p>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-3">
        Analytics appear after your first{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          practice session.
        </span>
      </h2>
      <p className="text-[14px] text-[#C0C0C0] leading-[1.75] max-w-md mx-auto mb-6">
        Every panel on this page updates automatically as you work through
        practice sets — topic accuracy, pacing, behaviour patterns, and
        calibration.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/practice"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          Start practicing
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/mock"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-colors hover:border-white/[0.22]"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            color: "#F0F0F0",
          }}
        >
          Open the exam plan
        </Link>
      </div>
    </div>
  )
}

function PatternCard({
  label,
  description,
  count,
  total,
  tone,
}: {
  label: string
  description: string
  count: number
  total: number
  tone: "good" | "warn" | "bad"
}) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0
  const colour =
    tone === "good" ? "#3ECF8E" : tone === "warn" ? "#C9A84C" : "#FF4444"
  const Icon = tone === "good" ? Zap : tone === "warn" ? Clock : Gauge
  return (
    <div
      className="p-5 rounded-xl border bg-[#0A0A0A] transition-colors duration-300"
      style={{ borderColor: colour + "22" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4" style={{ color: colour }} />
        <span
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: colour }}
        >
          {label}
        </span>
      </div>
      <p className="font-display text-3xl font-semibold text-[#F0F0F0] tabular-nums leading-none">
        {count}
        <span className="text-sm font-normal text-[#555555]">
          {" · "}
          {pct}%
        </span>
      </p>
      <p className="text-[12px] text-[#888888] leading-snug mt-3">
        {description}
      </p>
    </div>
  )
}

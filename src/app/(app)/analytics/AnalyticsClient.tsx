"use client"

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  BarChart3,
  Clock,
  Gauge,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react"
import EmptyState from "@/components/shared/EmptyState"
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

export interface TopicTimingRow {
  topic: string
  section: Section
  attempts: number
  avgMin: number
  /** Average time / section baseline. 1.3+ = slow, 0.7- = fast. */
  ratio: number
  flag: "fast" | "even" | "slow"
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

// Top + bottom 3 by accuracy, with a small-sample tiebreaker favoring
// topics with more attempts (more trustworthy).
function splitStrengthsWeaknesses(topics: TopicRow[]) {
  const sorted = [...topics].sort((a, b) => {
    if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy
    return b.attempts - a.attempts
  })
  const strengths = sorted.slice(0, 3)
  const weaknesses = sorted.slice(-3).reverse()
  return { strengths, weaknesses }
}

export default function AnalyticsClient({
  scoreTrend,
  topicRows,
  pacingRows,
  topicTimingRows,
  difficultyTimingRows,
  errorPatterns,
  hasData,
}: {
  scoreTrend: ScoreTrendPoint[]
  topicRows: TopicRow[]
  pacingRows: PacingRow[]
  topicTimingRows: TopicTimingRow[]
  difficultyTimingRows: DifficultyTimingRow[]
  errorPatterns: ErrorPatternSummary | null
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

  const { strengths, weaknesses } = splitStrengthsWeaknesses(topicRows)
  const showStrengthsWeaknesses = topicRows.length >= 2

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Analytics</h1>
        <p className="text-sm text-[#555555] mt-1">
          Your complete performance data
        </p>
      </div>

      {/* Score trajectory */}
      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h2 className="text-sm font-semibold text-[#888888] mb-1">
          Score Trajectory
        </h2>
        <p className="text-xs text-[#555555] mb-5">
          {hasTrend
            ? trendRangeLabel
            : trendWithData.length === 1
            ? "One week of data so far — keep practicing to see a trend."
            : "Complete practice sets over a few weeks to see your score trajectory."}
        </p>
        {hasTrend ? (
          <ResponsiveContainer width="100%" height={220}>
            <LineChart
              data={trendWithData}
              margin={{ top: 5, right: 5, bottom: 0, left: -10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis
                dataKey="weekLabel"
                tick={{ fill: "#555555", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[trendMin, trendMax]}
                tick={{ fill: "#555555", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                labelStyle={{ color: "#888888" }}
                formatter={(value, name) => {
                  const label = String(name)
                  if (value === null || value === undefined) return ["—", label]
                  if (label === "Total Score") return [String(value), label]
                  return [`${value}%`, label]
                }}
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#C9A84C"
                strokeWidth={2.5}
                dot={{ fill: "#C9A84C", r: 3 }}
                name="Total Score"
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="quant"
                stroke="#888888"
                strokeWidth={1.5}
                dot={false}
                name="Quant"
                strokeDasharray="4 4"
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="verbal"
                stroke="#555555"
                strokeWidth={1.5}
                dot={false}
                name="Verbal"
                strokeDasharray="4 4"
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <EmptyState
            icon={BarChart3}
            title="Not enough data yet"
            description="Your estimated GMAT total will plot here once you've run practice sets across two or more weeks."
            ctaHref="/test-builder"
            ctaLabel="Build a test"
            size="sm"
          />
        )}
      </div>

      {/* Topic accuracy */}
      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h2 className="text-sm font-semibold text-[#888888] mb-1">
          Accuracy by Topic
        </h2>
        <p className="text-xs text-[#555555] mb-5">
          {displayedTopics.length > 0
            ? `Top ${displayedTopics.length} topics by volume (5+ attempts each)`
            : "Topics with at least 5 attempts will appear here."}
        </p>
        {displayedTopics.length > 0 ? (
          <div className="space-y-2">
            {displayedTopics.map((t) => {
              const color =
                t.accuracy >= 75
                  ? "#3ECF8E"
                  : t.accuracy >= 65
                  ? "#C9A84C"
                  : "#FF4444"
              return (
                <div key={`${t.section}|${t.topic}`} className="flex items-center gap-4">
                  <p className="text-xs text-[#888888] w-40 flex-shrink-0 truncate">
                    <span className="text-[#555555] mr-1.5">{t.section}</span>
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
                  <div className="flex items-center gap-2 w-20 flex-shrink-0 justify-end">
                    <span
                      className="text-sm font-semibold"
                      style={{ color }}
                    >
                      {t.accuracy}%
                    </span>
                    <span className="text-xs text-[#444444]">({t.attempts})</span>
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

      {/* Pacing + Strengths/Weaknesses */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pacing */}
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-1">
            Time per Question (min)
          </h2>
          <p className="text-xs text-[#555555] mb-5">Avg vs. target</p>
          {pacingRows.length > 0 ? (
            <div className="space-y-3">
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
                    <span className="text-xs text-[#888888] w-12 flex-shrink-0">
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
                    <div className="flex items-center gap-2 w-28 flex-shrink-0 justify-end">
                      <span
                        className="text-xs font-medium"
                        style={{ color }}
                      >
                        {p.avgMin.toFixed(1)}m
                      </span>
                      <span className="text-[10px] text-[#555555]">
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

        {/* Strengths / Weaknesses */}
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-5">
            Strengths &amp; Weaknesses
          </h2>
          {showStrengthsWeaknesses ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#3ECF8E" }}
                >
                  Strengths
                </p>
                {strengths.map((s) => (
                  <div
                    key={`${s.section}|${s.topic}`}
                    className="flex items-center justify-between mb-2 gap-2"
                  >
                    <span className="text-xs text-[#888888] truncate">
                      {s.topic}
                    </span>
                    <span
                      className="text-xs font-semibold flex-shrink-0"
                      style={{ color: "#3ECF8E" }}
                    >
                      {s.accuracy}%
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#FF4444" }}
                >
                  Weaknesses
                </p>
                {weaknesses.map((w) => (
                  <div
                    key={`${w.section}|${w.topic}`}
                    className="flex items-center justify-between mb-2 gap-2"
                  >
                    <span className="text-xs text-[#888888] truncate">
                      {w.topic}
                    </span>
                    <span
                      className="text-xs font-semibold flex-shrink-0"
                      style={{ color: "#FF4444" }}
                    >
                      {w.accuracy}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <EmptyState
              icon={BarChart3}
              title="Needs more topic data"
              description="Once you've attempted at least 5 questions in 2 or more topics, your strongest and weakest will surface here."
              ctaHref="/practice"
              ctaLabel="Practice"
              size="sm"
            />
          )}
        </div>
      </div>

      {/* Error pattern breakdown — efficient / labored / rushed / stuck */}
      {errorPatterns && errorPatterns.totalLabelled > 0 && (
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-1">
            Behaviour Patterns
          </h2>
          <p className="text-xs text-[#555555] mb-5">
            Attempts tagged against your own section baseline — fast or
            slow relative to how long you typically take. Middle-tempo
            attempts (neither too fast nor too slow) aren&apos;t counted.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
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

      {/* Per-topic timing — slowest topics relative to your section baseline */}
      {topicTimingRows.length > 0 && (
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-1">
            Time per Topic
          </h2>
          <p className="text-xs text-[#555555] mb-5">
            Your slowest topics, ranked against your own section average.
            A 1.3× or higher ratio means you&apos;re burning 30%+ more time
            on that topic than your baseline — a place where drilling
            fluency pays real timing dividends.
          </p>
          <div className="space-y-2">
            {topicTimingRows.map((t) => (
              <div
                key={`${t.section}|${t.topic}`}
                className="flex items-center justify-between gap-4 py-1"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide flex-shrink-0"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.08)",
                      color: "#C9A84C",
                    }}
                  >
                    {t.section}
                  </span>
                  <span className="text-xs text-[#F0F0F0] truncate">
                    {t.topic}
                  </span>
                  <span className="text-[10px] text-[#555555] flex-shrink-0">
                    {t.attempts}q
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-[#888888]">
                    {t.avgMin.toFixed(1)}m
                  </span>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor:
                        t.flag === "slow"
                          ? "rgba(255,68,68,0.12)"
                          : t.flag === "fast"
                          ? "rgba(62,207,142,0.12)"
                          : "rgba(255,255,255,0.04)",
                      color:
                        t.flag === "slow"
                          ? "#FF4444"
                          : t.flag === "fast"
                          ? "#3ECF8E"
                          : "#888888",
                    }}
                  >
                    {t.ratio.toFixed(2)}×
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Per-difficulty timing — how long on easy vs hard in each section */}
      {difficultyTimingRows.length > 0 && (
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-sm font-semibold text-[#888888] mb-1">
            Time by Difficulty
          </h2>
          <p className="text-xs text-[#555555] mb-5">
            Average time and accuracy by difficulty within each section.
            If your easy-question times are high, you&apos;re leaving
            bankable minutes on the table; if your hard-question accuracy
            drops off a cliff, consider spending less time there and
            guessing.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-left text-[#555555] border-b border-white/[0.04]">
                  <th className="py-2 pr-4 font-medium">Section</th>
                  <th className="py-2 pr-4 font-medium">Difficulty</th>
                  <th className="py-2 pr-4 font-medium text-right">Attempts</th>
                  <th className="py-2 pr-4 font-medium text-right">Avg Time</th>
                  <th className="py-2 pr-4 font-medium text-right">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {difficultyTimingRows.map((r) => (
                  <tr
                    key={`${r.section}|${r.difficulty}`}
                    className="border-b border-white/[0.04] last:border-0"
                  >
                    <td className="py-2 pr-4 text-[#F0F0F0]">{r.section}</td>
                    <td className="py-2 pr-4 text-[#888888]">{r.difficulty}</td>
                    <td className="py-2 pr-4 text-right text-[#888888]">
                      {r.attempts}
                    </td>
                    <td className="py-2 pr-4 text-right text-[#F0F0F0]">
                      {r.avgMin.toFixed(1)}m
                    </td>
                    <td
                      className="py-2 pr-4 text-right font-semibold"
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

      {!hasData && (
        <p className="text-xs text-[#555555] text-center italic">
          No practice attempts yet — every panel above updates automatically
          as you work through practice sets.
        </p>
      )}
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
    <div className="p-4 rounded-lg border border-white/[0.08] bg-[#0D0D0D]">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-4 h-4" style={{ color: colour }} />
        <span
          className="text-[10px] uppercase tracking-widest font-semibold"
          style={{ color: colour }}
        >
          {label}
        </span>
      </div>
      <p className="text-xl font-bold text-[#F0F0F0]">
        {count}
        <span className="text-sm font-normal text-[#555555]"> · {pct}%</span>
      </p>
      <p className="text-[11px] text-[#888888] leading-snug mt-1">
        {description}
      </p>
    </div>
  )
}

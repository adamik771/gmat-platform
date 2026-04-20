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
import { BarChart3, TrendingDown, TrendingUp } from "lucide-react"
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
  hasData,
}: {
  scoreTrend: ScoreTrendPoint[]
  topicRows: TopicRow[]
  pacingRows: PacingRow[]
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

      {!hasData && (
        <p className="text-xs text-[#555555] text-center italic">
          No practice attempts yet — every panel above updates automatically
          as you work through practice sets.
        </p>
      )}
    </div>
  )
}

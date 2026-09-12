"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight } from "lucide-react"
import type { CalibrationReport } from "@/lib/calibration"
import type { Section } from "@/types"
import { difficultyLabel, formatQuestionTime } from "./presentation"

export interface ScoreTrendPoint {
  weekKey: string
  weekLabel: string
  index: number
  overallAccuracy: number | null
  quant: number | null
  verbal: number | null
  di: number | null
  attempts: number
  sectionAttempts: Record<Section, number>
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
  attempts: number
}

export interface DifficultyTimingRow {
  section: Section
  difficulty: string
  attempts: number
  avgMin: number
  accuracy: number
}

export interface ErrorPatternSummary {
  efficient: number
  labored: number
  rushed: number
  stuck: number
  totalLabelled: number
}

export interface AnalyticsScope {
  attempts: number
  trendStart: string
  trendEnd: string
}

const SECTION = "min-w-0 border-t border-white/10 pt-6"
const HEADING = "text-xl font-semibold text-[#F0F0F0]"
const MUTED = "text-sm leading-relaxed text-[#B9B7AE]"

const ScoreTrajectoryChart = dynamic(() => import("./ScoreTrajectoryChart"), {
  ssr: false,
  loading: () => <div className="h-60" role="status">Loading accuracy chart...</div>,
})

export default function AnalyticsClient({
  scoreTrend, topicRows, pacingRows, difficultyTimingRows, errorPatterns, calibration, scope,
}: {
  scoreTrend: ScoreTrendPoint[]
  topicRows: TopicRow[]
  pacingRows: PacingRow[]
  difficultyTimingRows: DifficultyTimingRow[]
  errorPatterns: ErrorPatternSummary | null
  calibration: CalibrationReport | null
  scope: AnalyticsScope
}) {
  const populatedWeeks = scoreTrend.filter((p) => p.overallAccuracy !== null)
  const hasTrend = populatedWeeks.length >= 2
  const displayedTopics = topicRows.slice(0, 10)
  const trendAttempts = populatedWeeks.reduce((total, week) => total + week.attempts, 0)
  const missing: { title: string; detail: string }[] = []
  if (!topicRows.length) missing.push({ title: "Accuracy by topic", detail: "Appears after 5 attempts in a topic." })
  if (!pacingRows.length) missing.push({ title: "Time per question", detail: "Appears after 5 attempts longer than one second in a section." })
  if (!difficultyTimingRows.length) missing.push({ title: "Time by difficulty", detail: "Appears after 3 attempts longer than one second at a difficulty in a section." })
  if (!calibration?.totalRated) missing.push({ title: "Confidence and accuracy", detail: "Appears after a confidence-rated answer in practice or a chapter." })
  if (!errorPatterns) missing.push({ title: "Timing patterns", detail: "Appears after 30 attempts classified as fast or slow relative to your section average." })

  return (
    <div className="mx-auto max-w-5xl space-y-7">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-3xl font-semibold text-[#F0F0F0]">Analytics</h1>
          <p className={MUTED + " mt-2"}><span className="tabular-nums">{scope.attempts}</span> recorded question attempts across Quant, Verbal, and Data Insights.</p>
          <p className={MUTED}>All recorded dates. Topic and timing data include retakes and review attempts.</p>
        </div>
        <Link href="/practice" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#C9A84C] px-4 py-2 text-sm font-semibold text-[#0A0A0A]">
          Practice <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </header>

      {displayedTopics.length > 0 && (
        <section className={SECTION}>
          <h2 className={HEADING}>Accuracy by topic</h2>
          <p className={MUTED + " mt-2"}>Showing {displayedTopics.length} of {topicRows.length} topics with 5+ attempts, ordered by attempt count. Small samples are provisional.</p>
          <ul className="mt-4 divide-y divide-white/10">
            {displayedTopics.map((topic) => (
              <li key={topic.section + "|" + topic.topic} className="grid gap-2 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-center sm:gap-6">
                <div className="min-w-0"><p className="break-words text-sm font-medium text-[#F0F0F0]">{topic.topic}</p><p className={MUTED}>{topic.section} · {topic.attempts} attempts</p></div>
                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10" aria-hidden><div className="h-full bg-[#3ECF8E]" style={{ width: topic.accuracy + "%" }} /></div>
                  <span className="w-12 text-right text-base font-semibold tabular-nums text-[#F0F0F0]">{topic.accuracy}%</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {pacingRows.length > 0 && (
        <section className={SECTION}>
          <h2 className={HEADING}>Time per question</h2>
          <p className={MUTED + " mt-2"}>All recorded dates; only attempts longer than one second. Reference paces are product practice benchmarks, not official section limits. Times are minutes:seconds.</p>
          <div className="mt-4 divide-y divide-white/10">
            {pacingRows.map((row) => (
              <div key={row.section} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div><p className="text-sm font-medium text-[#F0F0F0]">{row.section}</p><p className={MUTED}>{row.attempts} timed attempts</p></div>
                <div className="text-right"><p className="text-lg font-semibold tabular-nums text-[#F0F0F0]">{formatQuestionTime(row.avgMin)}</p><p className={MUTED}>{row.over ? "Slower" : "At or faster"} than {formatQuestionTime(row.targetMin)} reference</p></div>
              </div>
            ))}
          </div>
        </section>
      )}

      {difficultyTimingRows.length > 0 && (
        <section className={SECTION}>
          <h2 className={HEADING}>Time by difficulty</h2>
          <p className={MUTED + " mt-2"}>All recorded dates; 3+ attempts longer than one second per row. Accuracy uses that same timed-attempt sample.</p>
          <div className="mt-4 overflow-x-auto" tabIndex={0} role="region" aria-label="Time and accuracy by difficulty">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 text-[#B9B7AE]"><tr>{["Section", "Difficulty", "Attempts", "Avg time", "Accuracy"].map((label) => <th key={label} scope="col" className="px-3 py-3 font-medium first:pl-0">{label}</th>)}</tr></thead>
              <tbody className="divide-y divide-white/10 text-[#F0F0F0]">
                {difficultyTimingRows.map((row) => <tr key={row.section + "|" + row.difficulty}>
                  <td className="py-3 pr-3">{row.section}</td><td className="px-3 py-3">{difficultyLabel(row.difficulty)}</td><td className="px-3 py-3 tabular-nums">{row.attempts}</td><td className="px-3 py-3 tabular-nums">{formatQuestionTime(row.avgMin)}</td><td className="px-3 py-3 tabular-nums">{row.accuracy}%</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {calibration && calibration.totalRated > 0 && (
        <section className={SECTION}>
          <h2 className={HEADING}>Confidence and accuracy</h2>
          <p className={MUTED + " mt-2"}>{calibration.totalRated} rated answers: stored chapter answers plus all recorded confidence-rated practice attempts, including retakes and reviews. Chapter answers are not a complete attempt history and may overlap practice records.</p>
          <div className="mt-4 divide-y divide-white/10">
            {calibration.tiers.map((tier) => {
              const benchmark = tier.level === "high" ? 85 : tier.level === "med" ? 65 : 45
              return <div key={tier.level} className="flex flex-wrap items-center justify-between gap-2 py-3">
                <p className="text-sm font-medium text-[#F0F0F0]">{tier.label} confidence</p>
                {tier.total === 0 ? <p className={MUTED}>No rated answers</p> : <div className="text-right">
                  <p className="text-sm tabular-nums text-[#F0F0F0]">{Math.round(tier.accuracy * 100)}% correct · {tier.correct} / {tier.total} answers</p>
                  <p className={MUTED}>{tier.total < 5 ? "Small sample; " : ""}{benchmark}% product benchmark</p>
                </div>}
              </div>
            })}
          </div>
          <p className={MUTED + " mt-3"}>Benchmarks are comparison guides, not validated GMAT predictions or a diagnosis of your confidence.</p>
        </section>
      )}

      {errorPatterns && errorPatterns.totalLabelled > 0 && (
        <section className={SECTION}>
          <h2 className={HEADING}>Timing patterns</h2>
          <p className={MUTED + " mt-2"}>All recorded dates. {errorPatterns.totalLabelled} timed attempts classified as fast or slow relative to your section average. Middle-tempo attempts are excluded from these percentages; these labels do not explain why an answer was wrong.</p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              ["Efficient", "Correct and fast", errorPatterns.efficient],
              ["Labored", "Correct and slow", errorPatterns.labored],
              ["Rushed", "Incorrect and fast", errorPatterns.rushed],
              ["Stuck", "Incorrect and slow", errorPatterns.stuck],
            ] as const).map(([label, description, count]) => <div key={label}>
              <h3 className="text-sm font-medium text-[#F0F0F0]">{label}</h3>
              <p className="mt-1 text-lg font-semibold tabular-nums text-[#F0F0F0]">{count} / {errorPatterns.totalLabelled} · {Math.round(count / errorPatterns.totalLabelled * 100)}%</p>
              <p className={MUTED}>{description}</p>
            </div>)}
          </div>
        </section>
      )}

      <section className={SECTION}>
        <h2 className={HEADING}>Accuracy over time</h2>
        <p className={MUTED + " mt-2"}>{scope.trendStart} to {scope.trendEnd} (UTC dates). {trendAttempts} question attempts in {populatedWeeks.length} weeks with data, weighted by question count. Retakes included; review and mixed-review sessions excluded.</p>
        {hasTrend ? <>
          <div className="mt-4"><ScoreTrajectoryChart data={scoreTrend} /></div>
          <details className="mt-4">
            <summary className="min-h-11 cursor-pointer py-3 text-sm text-[#B9B7AE]">Weekly values and sample sizes</summary>
            <ul className="divide-y divide-white/10 text-sm text-[#B9B7AE]">
              {populatedWeeks.map((week) => <li key={week.weekKey} className="py-3">
                <p className="font-medium text-[#F0F0F0]">Week of {week.weekKey}: {week.overallAccuracy}% · {week.attempts} attempts</p>
                <p>Quant {week.quant === null ? "no data" : week.quant + "% (" + week.sectionAttempts.Quant + ")"}; Verbal {week.verbal === null ? "no data" : week.verbal + "% (" + week.sectionAttempts.Verbal + ")"}; DI {week.di === null ? "no data" : week.di + "% (" + week.sectionAttempts.DI + ")"}</p>
              </li>)}
            </ul>
          </details>
        </> : <>
          <p className={MUTED + " mt-2"}>A trend needs at least two weeks with practice data.</p>
          <Link href="/practice" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#C9A84C]">Continue practice <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </>}
      </section>

      {missing.length > 0 && <details className={SECTION}>
        <summary className="min-h-11 cursor-pointer text-sm font-medium text-[#B9B7AE]">Waiting for more data ({missing.length})</summary>
        <dl className="space-y-3 pb-3 text-sm text-[#B9B7AE]">{missing.map((item) => <div key={item.title}><dt className="font-medium text-[#F0F0F0]">{item.title}</dt><dd>{item.detail}</dd></div>)}</dl>
      </details>}
    </div>
  )
}

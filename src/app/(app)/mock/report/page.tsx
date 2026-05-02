import React from 'react'
import Link from "next/link"
import { ArrowLeft, ArrowRight, TrendingDown } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { MOCK_SECTIONS, accuracyToScore } from "@/lib/mock"
import type { Section } from "@/types"

export const metadata = {
  title: "Mock Report — Zakarian GMAT",
}

interface SectionReport {
  section: Section
  total: number
  correct: number
  accuracy: number
  score: number
  totalTimeMs: number
  avgTimePerQuestionMs: number
  weakTopics: Array<{ topic: string; accuracy: number; attempts: number }>
}

/**
 * /mock/report — reads the most recent mock's three section sessions
 * and renders per-section scores, total, timing, and weak topics.
 * Uses `slug LIKE 'mock-%'` then groups by the date embedded in the slug.
 */
export default async function MockReportPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <EmptyFrame
        title="Sign in to view your mock report"
        body="Mocks are personalised — sign in to see your results."
      />
    )
  }

  // Find the most recent mock date by looking at all mock session slugs.
  const { data: sessionRows } = await supabase
    .from("practice_sessions")
    .select("id, slug, section, accuracy, total_questions, correct_count, total_time_ms, created_at")
    .eq("user_id", user.id)
    .like("slug", "mock-%")
    .order("created_at", { ascending: false })
    .limit(20)

  if (!sessionRows || sessionRows.length === 0) {
    return (
      <EmptyFrame
        title="No mock yet"
        body={
          <>
            Head back to{" "}
            <Link
              href="/mock"
              className="underline underline-offset-2"
              style={{ color: "#C9A84C" }}
            >
              Mock
            </Link>{" "}
            and take your first full-length simulation. The report builds once at least one section is complete.
          </>
        }
      />
    )
  }

  const firstSlug = sessionRows[0].slug as string
  const dateMatch = firstSlug.match(/^mock-(\d{4}-\d{2}-\d{2})-/)
  const targetDate = dateMatch?.[1] ?? null

  const mostRecent = targetDate
    ? sessionRows.filter((r) => (r.slug as string).startsWith(`mock-${targetDate}-`))
    : sessionRows.slice(0, 3)

  // Find the most recent FULLY-COMPLETED previous mock so we can show
  // a comparison delta. "Fully completed" = has a row for each of the
  // three sections on the same date. We iterate backward through the
  // remaining sessionRows grouping by date.
  const byDate = new Map<string, typeof sessionRows>()
  for (const row of sessionRows) {
    const m = (row.slug as string).match(/^mock-(\d{4}-\d{2}-\d{2})-/)
    if (!m) continue
    const d = m[1]
    if (d === targetDate) continue
    const arr = byDate.get(d) ?? []
    arr.push(row)
    byDate.set(d, arr)
  }
  let previousTotal: number | null = null
  let previousDate: string | null = null
  for (const [date, rows] of byDate) {
    if (rows.length < MOCK_SECTIONS.length) continue
    const accBySection: Partial<Record<Section, number>> = {}
    for (const r of rows) {
      const sec = r.section as Section
      if (accBySection[sec] === undefined) {
        accBySection[sec] = (r.accuracy as number) / 100
      }
    }
    const scores = MOCK_SECTIONS.map((s) => accBySection[s])
      .filter((v): v is number => typeof v === "number")
      .map((a) => accuracyToScore(a))
    if (scores.length === MOCK_SECTIONS.length) {
      previousTotal = Math.round(scores.reduce((a, b) => a + b, 0) / 3 / 10) * 10
      previousDate = date
      break
    }
  }

  // Build per-section report from the mostRecent sessions. For each
  // section, pull attempts and group misses by topic for weak-area analysis.
  const reports: SectionReport[] = []
  for (const sessionRow of mostRecent) {
    const section = sessionRow.section as Section
    const { data: attempts } = await supabase
      .from("practice_attempts")
      .select("topic, is_correct, time_spent_ms")
      .eq("session_id", sessionRow.id as string)

    const total = (sessionRow.total_questions as number) ?? 0
    const correct = (sessionRow.correct_count as number) ?? 0
    const accuracy = total === 0 ? 0 : correct / total
    const totalTimeMs = (sessionRow.total_time_ms as number) ?? 0

    const byTopic = new Map<string, { correct: number; total: number }>()
    for (const a of attempts ?? []) {
      const topic = (a.topic as string | null) ?? "General"
      const t = byTopic.get(topic) ?? { correct: 0, total: 0 }
      t.total += 1
      if (a.is_correct) t.correct += 1
      byTopic.set(topic, t)
    }
    const weakTopics = [...byTopic.entries()]
      .filter(([, v]) => v.total >= 2)
      .map(([topic, v]) => ({
        topic,
        accuracy: v.correct / v.total,
        attempts: v.total,
      }))
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 3)

    reports.push({
      section,
      total,
      correct,
      accuracy,
      score: accuracyToScore(accuracy),
      totalTimeMs,
      avgTimePerQuestionMs: total > 0 ? totalTimeMs / total : 0,
      weakTopics,
    })
  }

  const totalScore = reports.length
    ? Math.round(reports.reduce((acc, r) => acc + r.score, 0) / reports.length / 10) * 10
    : 205
  const complete = reports.length === MOCK_SECTIONS.length

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link
        href="/mock"
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to Mock
      </Link>

      <div>
        <p className="text-xs uppercase tracking-widest text-[#555555] mb-2">
          Mock report · {targetDate ?? "most recent"}
        </p>
        <div className="flex items-baseline flex-wrap gap-3 mb-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#F0F0F0]">
            {complete ? `Estimated ${totalScore}` : `Partial: ${totalScore}`}
          </h1>
          {complete && previousTotal !== null && (() => {
            const delta = totalScore - previousTotal
            const deltaLabel =
              delta > 0 ? `+${delta}` : delta < 0 ? `${delta}` : "±0"
            const colour =
              delta > 0 ? "#3ECF8E" : delta < 0 ? "#FF4444" : "#888888"
            return (
              <span
                className="text-sm font-semibold px-2 py-1 rounded-lg"
                style={{
                  backgroundColor:
                    delta > 0
                      ? "rgba(62,207,142,0.12)"
                      : delta < 0
                      ? "rgba(255,68,68,0.12)"
                      : "rgba(255,255,255,0.04)",
                  color: colour,
                }}
                title={`Previous: ${previousTotal} on ${previousDate}`}
              >
                {deltaLabel} vs {previousTotal}
              </span>
            )
          })()}
        </div>
        <p className="text-sm text-[#888888] leading-relaxed">
          {complete
            ? previousTotal !== null
              ? `Compared to your previous completed mock on ${previousDate}. Treat the absolute score as a rough calibration — official reports use a slightly different scale — but trust the direction of the delta.`
              : "Average of your three section scores on this mock. Take another mock in 1-2 weeks to see how this number moves."
            : `You completed ${reports.length} of ${MOCK_SECTIONS.length} sections. Finish the rest for a full estimate.`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {MOCK_SECTIONS.map((section) => {
          const r = reports.find((x) => x.section === section)
          return (
            <div
              key={section}
              className="p-4 rounded-xl border border-white/[0.08] bg-[#111111]"
            >
              <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-1">
                {section}
              </p>
              {r ? (
                <>
                  <p className="text-2xl font-bold text-[#F0F0F0] mb-1">
                    {r.score}
                  </p>
                  <p className="text-xs text-[#888888]">
                    {r.correct} / {r.total} · {Math.round(r.avgTimePerQuestionMs / 1000)}s avg/q
                  </p>
                </>
              ) : (
                <>
                  <p className="text-2xl font-bold text-[#555555] mb-1">—</p>
                  <p className="text-xs text-[#555555]">Not yet taken</p>
                </>
              )}
            </div>
          )
        })}
      </div>

      <div>
        <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
          Weak topics on this mock
        </h2>
        {reports.every((r) => r.weakTopics.length === 0) ? (
          <p className="text-sm text-[#888888]">
            No clearly weaker topics — you came in evenly across the board.
          </p>
        ) : (
          <div className="space-y-3">
            {reports
              .flatMap((r) =>
                r.weakTopics.map((t) => ({
                  section: r.section,
                  ...t,
                }))
              )
              .sort((a, b) => a.accuracy - b.accuracy)
              .slice(0, 5)
              .map((row) => (
                <div
                  key={`${row.section}-${row.topic}`}
                  className="p-4 rounded-xl border border-white/[0.08] bg-[#111111] flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <TrendingDown className="w-4 h-4 mt-0.5 text-[#FF4444] flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
                          style={{
                            backgroundColor: "rgba(201,168,76,0.08)",
                            color: "#C9A84C",
                          }}
                        >
                          {row.section}
                        </span>
                        <span className="text-xs text-[#555555]">
                          {Math.round(row.accuracy * 100)}% on {row.attempts} question
                          {row.attempts === 1 ? "" : "s"}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#F0F0F0]">
                        {row.topic}
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/chapters"
                    className="flex-shrink-0 text-xs px-3 py-1.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "rgba(201,168,76,0.12)", color: "#C9A84C" }}
                  >
                    Study
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h2 className="text-sm font-semibold text-[#F0F0F0] mb-3">Next moves</h2>
        <ul className="space-y-2 text-sm text-[#888888]">
          <li className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
            <span>
              Every question you missed has been added to{" "}
              <Link href="/review" className="underline underline-offset-2" style={{ color: "#C9A84C" }}>
                Daily Review
              </Link>
              . Retrieval practice on today&apos;s misses is the highest-leverage follow-up.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
            <span>
              Re-take the mock in 1-2 weeks to measure improvement. Different
              calendar date = different question selection, so comparisons stay
              meaningful.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

function EmptyFrame({
  title,
  body,
}: {
  title: string
  body: React.ReactNode
}) {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <Link
        href="/mock"
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to Mock
      </Link>
      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h1 className="text-lg font-semibold text-[#F0F0F0] mb-2">{title}</h1>
        <div className="text-sm text-[#888888] leading-relaxed">{body}</div>
      </div>
    </div>
  )
}

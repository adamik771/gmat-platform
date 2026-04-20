import Link from "next/link"
import { ArrowRight, Clock, FlaskConical, Target } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import ScoreChart from "@/components/dashboard/ScoreChart"
import {
  MOCK_QUESTION_COUNT,
  MOCK_SECTIONS,
  MOCK_SECTION_MINUTES,
  accuracyToScore,
} from "@/lib/mock"
import type { Section } from "@/types"

export const metadata = {
  title: "Full-Length Mock — Zakarian GMAT",
}

interface PastMock {
  dateIso: string
  totalScore: number
  sectionScores: Record<Section, number | null>
}

/**
 * /mock — landing page for the full-length mock. Shows a primary
 * "Start new mock" CTA and a list of past mock results with scores.
 */
export default async function MockLandingPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  let pastMocks: PastMock[] = []
  let inProgressDate: string | null = null

  if (user) {
    // Group past mock sections into dated runs. `slug` format is
    // `mock-YYYY-MM-DD-section`, so grouping by date is a string slice.
    const { data: rows } = await supabase
      .from("practice_sessions")
      .select("slug, section, accuracy, created_at, total_questions, correct_count")
      .eq("user_id", user.id)
      .like("slug", "mock-%")
      .order("created_at", { ascending: false })
      .limit(60)

    const byDate = new Map<string, { accuracies: Partial<Record<Section, number>> }>()
    for (const row of rows ?? []) {
      const match = (row.slug as string).match(/^mock-(\d{4}-\d{2}-\d{2})-(.+)$/)
      if (!match) continue
      const date = match[1]
      const section = row.section as Section
      const group = byDate.get(date) ?? { accuracies: {} }
      if (!(section in group.accuracies)) {
        group.accuracies[section] = (row.accuracy as number) / 100
      }
      byDate.set(date, group)
    }
    for (const [date, group] of byDate) {
      const sectionScores: Record<Section, number | null> = {
        Quant: group.accuracies.Quant !== undefined ? accuracyToScore(group.accuracies.Quant) : null,
        Verbal: group.accuracies.Verbal !== undefined ? accuracyToScore(group.accuracies.Verbal) : null,
        DI: group.accuracies.DI !== undefined ? accuracyToScore(group.accuracies.DI) : null,
      }
      const nonNull = (Object.values(sectionScores).filter((n) => n !== null) as number[])
      const total = nonNull.length === 3
        ? Math.round(nonNull.reduce((a, b) => a + b, 0) / 3 / 10) * 10
        : 0
      pastMocks.push({ dateIso: date, totalScore: total, sectionScores })
    }
    // Past mocks come in newest-first from the query; keep that ordering
    // for the list but flip to oldest-first for the trend chart so the
    // line reads left-to-right as progress over time.

    // In-progress detection: if the user has at least one but not all
    // three sections recorded for today.
    const today = new Date().toISOString().slice(0, 10)
    const todaysGroup = byDate.get(today)
    if (todaysGroup) {
      const count = Object.keys(todaysGroup.accuracies).length
      if (count > 0 && count < 3) inProgressDate = today
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <FlaskConical className="w-4 h-4" style={{ color: "#C9A84C" }} />
          <h1 className="text-2xl sm:text-3xl font-bold text-[#F0F0F0]">
            Full-Length Mock
          </h1>
        </div>
        <p className="text-sm text-[#888888] leading-relaxed">
          A realistic, timed simulation of the GMAT Focus format. Three
          sections, 45 minutes each, back-to-back. You pick the section
          order. Answers are revealed only after the mock is complete.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {MOCK_SECTIONS.map((section) => (
          <div
            key={section}
            className="p-4 rounded-xl border border-white/[0.08] bg-[#111111]"
          >
            <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-1">
              {section}
            </p>
            <p className="text-xl font-bold text-[#F0F0F0]">
              {MOCK_QUESTION_COUNT[section]}
              <span className="text-sm font-normal text-[#555555]"> questions</span>
            </p>
            <p className="text-xs text-[#888888] mt-0.5">
              {MOCK_SECTION_MINUTES[section]} minutes
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/mock/run"
        className="block p-5 rounded-xl border transition-opacity hover:opacity-95"
        style={{
          borderColor: "rgba(201,168,76,0.2)",
          backgroundColor: "rgba(201,168,76,0.04)",
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
          >
            <Target className="w-5 h-5" style={{ color: "#C9A84C" }} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#F0F0F0] mb-1">
              {inProgressDate
                ? "Resume today's mock"
                : pastMocks.length > 0
                ? "Start a new mock"
                : "Start your first mock"}
            </p>
            <p className="text-xs text-[#888888]">
              Plan for about 2 hours 15 minutes start-to-finish. Breaks between sections count toward the total.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-1" />
        </div>
      </Link>

      {(() => {
        // Trend chart only makes sense with ≥2 fully-scored mocks —
        // otherwise a single dot tells you nothing about direction.
        const scored = pastMocks.filter((m) => m.totalScore > 0)
        const oldestFirst = [...scored].reverse()
        if (oldestFirst.length < 2) return null
        const first = oldestFirst[0].totalScore
        const last = oldestFirst[oldestFirst.length - 1].totalScore
        const delta = last - first
        const deltaLabel =
          delta > 0 ? `+${delta}` : delta < 0 ? `${delta}` : "no change"
        const deltaColor = delta > 0 ? "#3ECF8E" : delta < 0 ? "#FF4444" : "#888888"
        return (
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest">
                Mock trend
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#555555]">
                  {first} → {last}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: deltaColor }}
                >
                  {deltaLabel}
                </span>
              </div>
            </div>
            <ScoreChart
              height={140}
              data={oldestFirst.map((m, i) => ({
                week: `Mock ${i + 1}`,
                score: m.totalScore,
              }))}
            />
          </div>
        )
      })()}

      {pastMocks.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888] mb-4">
            Past mocks
          </h2>
          <div className="space-y-2">
            {pastMocks.map((m) => (
              <Link
                key={m.dateIso}
                href="/mock/report"
                className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#111111] hover:bg-[#131313] transition-colors"
              >
                <div>
                  <p className="text-xs text-[#555555] mb-0.5">{m.dateIso}</p>
                  <p className="text-lg font-bold text-[#F0F0F0]">
                    {m.totalScore > 0 ? m.totalScore : "Partial"}
                  </p>
                  <p className="text-xs text-[#888888]">
                    {MOCK_SECTIONS.map((s) => {
                      const score = m.sectionScores[s]
                      return `${s} ${score ?? "—"}`
                    }).join(" · ")}
                  </p>
                </div>
                <Clock className="w-4 h-4 text-[#555555]" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

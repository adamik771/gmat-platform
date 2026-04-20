import Link from "next/link"
import { ArrowLeft, ArrowRight, TrendingDown } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  buildReport,
  DIAGNOSTIC_SECTIONS,
  type DiagnosticAttempt,
  type SectionResult,
} from "@/lib/diagnostic"
import type { Section } from "@/types"

export const metadata = {
  title: "Diagnostic Report — Zakarian GMAT",
}

/**
 * /diagnostic/report — reads the most-recent diagnostic attempts from
 * `practice_attempts` (keyed by the three diagnostic slugs), aggregates
 * per-section, and renders the score estimate + weak-topic breakdown
 * + chapter recommendations.
 *
 * Uses the most-recent session per section so re-taking a section
 * overrides the previous run rather than averaging in stale data.
 */
export default async function DiagnosticReportPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <EmptyFrame
        title="Sign in to view your diagnostic report"
        body="Your diagnostic is personalised — sign in to see the section scores and weak-topic breakdown."
      />
    )
  }

  // For each section, fetch the most recent diagnostic session and then
  // its attempts. Three lightweight round-trips beat one heavy join.
  const attempts: DiagnosticAttempt[] = []
  for (const section of DIAGNOSTIC_SECTIONS) {
    const slug = `diagnostic-${section.toLowerCase()}`
    const { data: session } = await supabase
      .from("practice_sessions")
      .select("id, created_at")
      .eq("user_id", user.id)
      .eq("slug", slug)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle()
    if (!session) continue
    const { data: rows } = await supabase
      .from("practice_attempts")
      .select("question_id, section, topic, subtopic, difficulty, is_correct, time_spent_ms")
      .eq("session_id", session.id)
    for (const row of rows ?? []) {
      attempts.push({
        questionId: row.question_id as string,
        section: row.section as Section,
        topic: (row.topic as string | null) ?? "General",
        subtopic: (row.subtopic as string | null) ?? "General",
        difficulty: (row.difficulty as "Beginner" | "Intermediate" | "Advanced") ?? "Intermediate",
        isCorrect: !!row.is_correct,
        timeSpentMs: (row.time_spent_ms as number | null) ?? undefined,
      })
    }
  }

  if (attempts.length === 0) {
    return (
      <EmptyFrame
        title="Take the diagnostic first"
        body={
          <>
            Head back to{" "}
            <Link
              href="/diagnostic"
              className="underline underline-offset-2"
              style={{ color: "#C9A84C" }}
            >
              the diagnostic
            </Link>{" "}
            and complete at least one section. Your report builds as sections finish.
          </>
        }
      />
    )
  }

  const report = buildReport(attempts)
  const completedSections = new Set(report.sections.map((s) => s.section))
  const allComplete = completedSections.size === DIAGNOSTIC_SECTIONS.length

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link
        href="/diagnostic"
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to diagnostic
      </Link>

      <div>
        <p className="text-xs uppercase tracking-widest text-[#555555] mb-2">
          Diagnostic report
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#F0F0F0] mb-2">
          {allComplete ? `Estimated ${report.totalScore}` : `Partial: ${report.totalScore}`}
        </h1>
        <p className="text-sm text-[#888888] leading-relaxed">
          {allComplete
            ? "Average of your three section scores. GMAT Focus reports total in 10-point increments from 205 to 805."
            : `You've completed ${completedSections.size} of ${DIAGNOSTIC_SECTIONS.length} sections. Finish the remaining to get your full estimate.`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {DIAGNOSTIC_SECTIONS.map((section) => {
          const s = report.sections.find((x) => x.section === section)
          if (!s) return <PendingCard key={section} section={section} />
          return <SectionCard key={section} result={s} />
        })}
      </div>

      <div>
        <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-4">
          Where to focus next
        </h2>
        <div className="space-y-3">
          {report.sections.flatMap((s) =>
            s.weakTopics.map((t) => ({
              section: s.section,
              topic: t.topic,
              accuracy: t.accuracy,
              attempts: t.attempts,
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
                        {Math.round(row.accuracy * 100)}% on {row.attempts} question{row.attempts === 1 ? "" : "s"}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#F0F0F0]">
                      {row.topic}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/chapters`}
                  className="flex-shrink-0 text-xs px-3 py-1.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "rgba(201,168,76,0.12)", color: "#C9A84C" }}
                >
                  Study
                </Link>
              </div>
            ))}
          {report.sections.every((s) => s.weakTopics.length === 0) && (
            <p className="text-sm text-[#888888]">
              No clearly weaker topics — your diagnostic came in evenly across the board.
            </p>
          )}
        </div>
      </div>

      <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h2 className="text-sm font-semibold text-[#F0F0F0] mb-2">Next steps</h2>
        <ul className="space-y-2 text-sm text-[#888888]">
          <li className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
            <span>
              Open <Link href="/chapters" className="underline underline-offset-2" style={{ color: "#C9A84C" }}>Chapters</Link> for any topic above — each chapter ends with graded problem sets calibrated to your target score.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
            <span>
              Check <Link href="/review" className="underline underline-offset-2" style={{ color: "#C9A84C" }}>Daily Review</Link> — your diagnostic attempts have already been added to the spaced-retrieval queue.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
            <span>
              Re-take a section any time to track progress — your score will update each attempt.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

function SectionCard({ result }: { result: SectionResult }) {
  return (
    <div className="p-4 rounded-xl border border-white/[0.08] bg-[#111111]">
      <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-1">
        {result.section}
      </p>
      <p className="text-2xl font-bold text-[#F0F0F0] mb-1">{result.score}</p>
      <p className="text-xs text-[#888888]">
        {result.correct} / {result.total} correct ({Math.round(result.accuracy * 100)}%)
      </p>
    </div>
  )
}

function PendingCard({ section }: { section: Section }) {
  return (
    <div className="p-4 rounded-xl border border-dashed border-white/[0.08] bg-[#0D0D0D]">
      <p className="text-[10px] uppercase tracking-widest text-[#555555] mb-1">
        {section}
      </p>
      <p className="text-2xl font-bold text-[#555555] mb-1">—</p>
      <p className="text-xs text-[#555555]">Not yet taken</p>
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
        href="/diagnostic"
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to diagnostic
      </Link>
      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h1 className="text-lg font-semibold text-[#F0F0F0] mb-2">{title}</h1>
        <div className="text-sm text-[#888888] leading-relaxed">{body}</div>
      </div>
    </div>
  )
}

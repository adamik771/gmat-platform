import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getAllQuestions, type ParsedQuestion } from "@/lib/content"
import EmptyState from "@/components/shared/EmptyState"
import type { Section } from "@/types"
import ErrorLogClient, { type MistakeEntry, type SectionBreakdown } from "./ErrorLogClient"

export default async function ErrorLogPage() {
  let mistakes: MistakeEntry[] = []
  let hasUser = false

  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      hasUser = true

      // Grab every wrong attempt + join the parent session's created_at so we
      // can timestamp and link rows. Supabase nested select syntax returns
      // the related row under the relationship name.
      const { data: attempts } = await supabase
        .from("practice_attempts")
        .select(
          "id, question_id, section, topic, subtopic, difficulty, question_type, selected_answer, session_id, practice_sessions(slug, created_at)"
        )
        .eq("user_id", user.id)
        .eq("is_correct", false)
        .order("session_id", { ascending: false })
        .limit(200)

      // Build a question-id → ParsedQuestion map once so each row lookup is O(1).
      const byId = new Map<string, ParsedQuestion>()
      for (const q of getAllQuestions()) byId.set(q.id, q)

      type AttemptRow = {
        id: string
        question_id: string
        section: string
        topic: string
        subtopic: string | null
        difficulty: string | null
        question_type: string | null
        selected_answer: number | null
        session_id: string
        practice_sessions: { slug: string; created_at: string } | null
      }

      mistakes = ((attempts as AttemptRow[] | null) ?? []).map((a) => {
        const q = byId.get(a.question_id)
        return {
          id: a.id,
          questionId: a.question_id,
          section: a.section as Section,
          topic: a.topic,
          subtopic: a.subtopic ?? "",
          difficulty: a.difficulty ?? "",
          questionType: a.question_type ?? "",
          selectedAnswer: a.selected_answer,
          sessionSlug: a.practice_sessions?.slug ?? null,
          createdAt: a.practice_sessions?.created_at ?? null,
          // Enriched from markdown content — may be null if a question was
          // renamed/removed between the attempt being saved and this render.
          prompt: q?.prompt ?? null,
          options: q?.options ?? null,
          correctAnswer: q?.correctAnswer ?? null,
          correctAnswerLetter: q?.correctAnswerLetter ?? null,
          explanation: q?.explanation ?? null,
          context: q?.context ?? null,
          twoPartColumns: q?.twoPartColumns ?? null,
        }
      })
    }
  } catch {
    // Supabase unavailable — render empty state below.
  }

  // Per-section breakdown across all mistakes (not filtered) — top-of-page.
  const breakdown: SectionBreakdown[] = (["Quant", "Verbal", "DI"] as const).map(
    (section) => {
      const count = mistakes.filter((m) => m.section === section).length
      return {
        section,
        count,
        pct:
          mistakes.length > 0
            ? Math.round((count / mistakes.length) * 100)
            : 0,
      }
    }
  )

  const totalMistakes = mistakes.length

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Error Log</h1>
        <p className="text-sm text-[#555555] mt-1">
          {totalMistakes > 0
            ? `${totalMistakes} mistake${totalMistakes === 1 ? "" : "s"} logged`
            : hasUser
            ? "No mistakes logged yet"
            : "Sign in to track your errors"}
        </p>
      </div>

      {totalMistakes === 0 ? (
        <EmptyState
          icon={AlertCircle}
          title="Nothing here yet"
          description={
            hasUser
              ? "Every question you get wrong will show up here with its full explanation. Start a practice set to build up your error log."
              : "Sign in to see questions you've missed in practice sets, with explanations and quick links back to the sets."
          }
          ctaHref="/practice"
          ctaLabel="Go to practice"
          size="md"
        />
      ) : (
        <>
          {/* Section breakdown */}
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#111111]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888888] mb-4">
              Mistakes by Section
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {breakdown.map((row) => {
                const palette = sectionPalette[row.section]
                return (
                  <div
                    key={row.section}
                    className="p-4 rounded-xl border border-white/[0.06]"
                    style={{ backgroundColor: "#0F0F0F" }}
                  >
                    <div
                      className="px-2 py-0.5 rounded text-xs font-medium w-fit mb-3"
                      style={{ backgroundColor: palette.bg, color: palette.color }}
                    >
                      {row.section}
                    </div>
                    <p className="text-xl font-bold text-[#F0F0F0]">{row.count}</p>
                    <div className="mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${row.pct}%`, backgroundColor: palette.color }}
                      />
                    </div>
                    <p className="text-xs text-[#555555] mt-1">
                      {row.pct}% of mistakes
                    </p>
                  </div>
                )
              })}
            </div>
            <p className="text-xs text-[#555555] mt-4 italic">
              Tag mistakes as conceptual / careless / misread{" "}
              <Link href="/error-log" className="underline opacity-60 hover:opacity-100">
                — coming soon
              </Link>
              .
            </p>
          </div>

          <ErrorLogClient mistakes={mistakes} />
        </>
      )}
    </div>
  )
}

const sectionPalette: Record<Section, { color: string; bg: string }> = {
  Quant: { color: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
  Verbal: { color: "#3ECF8E", bg: "rgba(62,207,142,0.12)" },
  DI: { color: "#FF4444", bg: "rgba(255,68,68,0.12)" },
}

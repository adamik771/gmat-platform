import { AlertCircle } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getAllQuestions, type ParsedQuestion } from "@/lib/content"
import EmptyState from "@/components/shared/EmptyState"
import type { Section } from "@/types"
import { ERROR_TAGS, type ErrorTag } from "./constants"
import ErrorLogClient, {
  type MistakeEntry,
  type SectionBreakdown,
} from "./ErrorLogClient"
import BreakdownCard, { type TagBreakdown } from "./BreakdownCard"

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

      // Pull tags for the same user in a second query and merge by id. Doing
      // this separately (vs an FK join) avoids Supabase relationship-cache
      // edge cases and keeps both queries simple.
      const { data: tags } = await supabase
        .from("error_tags")
        .select("attempt_id, tag, notes, reviewed")
        .eq("user_id", user.id)
      type TagRow = {
        attempt_id: string
        tag: string | null
        notes: string | null
        reviewed: boolean | null
      }
      const tagMap = new Map<string, TagRow>()
      for (const t of (tags as TagRow[] | null) ?? []) {
        tagMap.set(t.attempt_id, t)
      }

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
        const t = tagMap.get(a.id)
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
          tag: (t?.tag ?? null) as MistakeEntry["tag"],
          notes: t?.notes ?? null,
          reviewed: t?.reviewed ?? false,
        }
      })
    }
  } catch {
    // Supabase unavailable — render empty state below.
  }

  // Per-section breakdown across all mistakes (not filtered) — top-of-page.
  const sectionBreakdown: SectionBreakdown[] = (
    ["Quant", "Verbal", "DI"] as const
  ).map((section) => {
    const count = mistakes.filter((m) => m.section === section).length
    return {
      section,
      count,
      pct:
        mistakes.length > 0
          ? Math.round((count / mistakes.length) * 100)
          : 0,
    }
  })

  // Per-tag breakdown. Includes the 6 defined tags plus an "Untagged" bucket
  // so users can see at a glance how much of their error log is still
  // un-reviewed.
  const tagBreakdown: TagBreakdown[] = (
    [...ERROR_TAGS, "Untagged"] as (ErrorTag | "Untagged")[]
  ).map((tag) => {
    const count = mistakes.filter((m) =>
      tag === "Untagged" ? !m.tag : m.tag === tag
    ).length
    return {
      tag,
      count,
      pct:
        mistakes.length > 0
          ? Math.round((count / mistakes.length) * 100)
          : 0,
    }
  })

  const totalMistakes = mistakes.length
  const reviewedCount = mistakes.filter((m) => m.reviewed).length

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Error Log</h1>
        <p className="text-sm text-[#555555] mt-1">
          {totalMistakes > 0
            ? `${totalMistakes} mistake${totalMistakes === 1 ? "" : "s"} logged · ${reviewedCount} reviewed`
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
          <BreakdownCard
            sectionBreakdown={sectionBreakdown}
            tagBreakdown={tagBreakdown}
          />

          <ErrorLogClient mistakes={mistakes} />
        </>
      )}
    </div>
  )
}

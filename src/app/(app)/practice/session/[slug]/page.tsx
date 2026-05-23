import Link from "next/link"
import { notFound } from "next/navigation"
import { getQuestionsBySetSlug } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  DEFAULT_LEVEL,
  getLevelForSlug,
  getTopicSkillLevels,
  pickAdaptiveOrder,
  type TopicSkillLevel,
} from "@/lib/topic-skill"
import SessionClient, { type SessionQuestion, type PriorSession } from "./SessionClient"

export default async function PracticeSessionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const questions = getQuestionsBySetSlug(slug)
  if (questions.length === 0) notFound()

  // Filter out questions that still have 0 parseable options after parsing
  // (shouldn't happen now that TPA tables produce row-label options, but
  // kept as a safety net for any future format).
  const playable: SessionQuestion[] = questions
    .filter((q) => q.options.length > 0)
    .map((q) => ({
      id: q.id,
      number: q.number,
      section: q.section,
      topic: q.topic,
      subtopic: q.subtopic,
      difficulty: q.difficulty,
      type: q.type,
      prompt: q.prompt,
      context: q.context,
      options: q.options,
      correctAnswer: q.correctAnswer,
      correctAnswerLetter: q.correctAnswerLetter,
      explanation: q.explanation,
      hints: q.hints,
      twoPartColumns: q.twoPartColumns,
      twoPartCorrectAnswers: q.twoPartCorrectAnswers,
    }))

  if (playable.length === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h1 className="text-xl font-bold text-[#F0F0F0] mb-2">{questions[0].topic}</h1>
          <p className="text-sm text-[#888888] mb-4">
            This question format requires a custom answer UI that isn&apos;t supported in
            the practice session yet.
          </p>
          <Link
            href="/practice"
            className="inline-block text-xs px-3 py-1.5 rounded-lg font-medium hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Back to Practice
          </Link>
        </div>
      </div>
    )
  }

  // Adaptive ordering + topic history. Reads per-topic skill level and
  // the last 5 sessions on this slug for the results-screen trend.
  let skill: TopicSkillLevel = {
    level: DEFAULT_LEVEL,
    attempts: 0,
    updatedAt: 0,
  }
  let priorSessions: PriorSession[] = []
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const levels = getTopicSkillLevels(user.user_metadata)
      skill = getLevelForSlug(levels, slug)

      // Fetch last 5 sessions on this topic for the history trend.
      const { data: sessionRows } = await supabase
        .from("practice_sessions")
        .select("accuracy, created_at")
        .eq("user_id", user.id)
        .eq("slug", slug)
        .order("created_at", { ascending: false })
        .limit(5)
      if (sessionRows) {
        // Reverse so they're chronological (oldest → most recent).
        priorSessions = sessionRows
          .reverse()
          .map((r) => ({ accuracy: r.accuracy as number, createdAt: r.created_at as string }))
      }
    }
  } catch {
    // Anonymous or supabase down — keep default level / file order.
  }
  const adaptive = pickAdaptiveOrder(playable, skill)

  return (
    <SessionClient
      slug={slug}
      topic={questions[0].topic}
      section={questions[0].section}
      questions={adaptive}
      skillLevel={skill.level}
      skillAttempts={skill.attempts}
      priorSessions={priorSessions}
    />
  )
}

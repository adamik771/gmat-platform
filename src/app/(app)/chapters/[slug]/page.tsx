import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import {
  getAllQuestions,
  getChapterBySlug,
  type ChapterProblemSet,
  type ChapterSection,
  type ParsedQuestion,
} from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import ChapterReader, {
  type ReaderQuestion,
  type ReaderSection,
  type ReaderProblemSet,
} from "./ChapterReader"

/**
 * Shape a ParsedQuestion down to the minimum the reader needs. Strips
 * server-only markdown noise and normalizes into the shape ChapterReader
 * expects.
 */
function toReaderQuestion(q: ParsedQuestion): ReaderQuestion {
  return {
    id: q.id,
    section: q.section,
    topic: q.topic,
    subtopic: q.subtopic,
    difficulty: q.difficulty,
    prompt: q.prompt,
    options: q.options,
    correctAnswer: q.correctAnswer,
    correctAnswerLetter: q.correctAnswerLetter,
    explanation: q.explanation,
  }
}

export default async function ChapterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const chapter = getChapterBySlug(slug)
  if (!chapter) notFound()

  // Build a single id → ParsedQuestion map once so section lookups are O(1).
  const byId = new Map<string, ParsedQuestion>()
  for (const q of getAllQuestions()) byId.set(q.id, q)

  function resolveIds(ids: string[]): ReaderQuestion[] {
    return ids
      .map((id) => byId.get(id))
      .filter((q): q is ParsedQuestion => !!q)
      .map(toReaderQuestion)
  }

  const sections: ReaderSection[] = chapter.sections.map(
    (s: ChapterSection) => ({
      id: s.id,
      type: s.type,
      title: s.title,
      intro: s.intro,
      body: s.body,
      pretestQuestions: resolveIds(s.pretestQuestionIds),
      checkQuestions: resolveIds(s.checkQuestionIds),
    })
  )

  const problemSets: ReaderProblemSet[] = chapter.problemSets.map(
    (ps: ChapterProblemSet) => ({
      difficulty: ps.difficulty,
      targetAccuracyByScore: ps.targetAccuracyByScore,
      questions: resolveIds(ps.questionIds),
    })
  )

  // Pull the user's target score so the reader can surface the accuracy
  // target for the difficulty they're about to attempt, plus any existing
  // chapter progress persisted to user_metadata so a student who switches
  // devices picks up where they left off.
  let targetScore: number | null = null
  let initialProgress: unknown = null
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    const raw = user?.user_metadata?.target_score
    if (typeof raw === "number" && Number.isInteger(raw)) {
      targetScore = raw
    }
    const chapterProgress = user?.user_metadata?.chapter_progress as
      | Record<string, unknown>
      | undefined
    const entry = chapterProgress?.[slug]
    if (entry && typeof entry === "object") {
      initialProgress = entry
    }
  } catch {
    // Supabase unavailable — reader falls back to the lenient tier + empty progress.
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link
        href="/chapters"
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        All chapters
      </Link>

      <ChapterReader
        slug={chapter.slug}
        title={chapter.title}
        section={chapter.section}
        estimatedMinutes={chapter.estimatedMinutes}
        summary={chapter.summary ?? null}
        sections={sections}
        problemSets={problemSets}
        targetScore={targetScore}
        initialProgress={initialProgress}
      />
    </div>
  )
}

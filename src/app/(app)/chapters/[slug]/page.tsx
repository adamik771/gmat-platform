import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import {
  getAllChapters,
  getAllQuestions,
  getChapterBySlug,
  getPracticeChapterGroups,
  type ChapterProblemSet,
  type ChapterSection,
  type ParsedQuestion,
} from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getUserState } from "@/lib/user-state"
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
    context: q.context,
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

  // Adjacent chapters in guided-path order, for the end-of-chapter
  // "Previous / Next chapter" navigation (beta feedback: the linear path
  // wasn't obvious after finishing a chapter).
  const allChapters = getAllChapters()
  const pathIdx = allChapters.findIndex((c) => c.slug === chapter.slug)
  const prevChapter =
    pathIdx > 0
      ? { slug: allChapters[pathIdx - 1].slug, title: allChapters[pathIdx - 1].title }
      : null
  const nextChapter =
    pathIdx >= 0 && pathIdx < allChapters.length - 1
      ? { slug: allChapters[pathIdx + 1].slug, title: allChapters[pathIdx + 1].title }
      : null

  // The chapter's first practice test (`ch-<slug>-t1`), for the "Practice this
  // chapter" CTA. Null for chapters with no bank yet (method/foundations/timing,
  // or coming-soon) — the reader falls back to the /practice hub so it never 404s.
  const firstPracticeTestSlug =
    getPracticeChapterGroups().find((g) => g.chapterSlug === chapter.slug)
      ?.tests[0]?.id ?? null

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
  // chapter progress persisted to user_state so a student who switches
  // devices picks up where they left off. Also aggregate per-section
  // accuracy from practice_attempts so the reader can surface a "your
  // weakest section is X" hint for returning students who don't know
  // where to re-enter.
  let targetScore: number | null = null
  let initialProgress: unknown = null
  let weakestSection: {
    id: string
    title: string
    accuracyPct: number
    attempts: number
  } | null = null
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    const raw = user?.user_metadata?.target_score
    if (typeof raw === "number" && Number.isInteger(raw)) {
      targetScore = raw
    }

    if (user) {
      const state = await getUserState(supabase, user)
      const chapterProgress = state.chapter_progress as
        | Record<string, unknown>
        | undefined
      const entry = chapterProgress?.[slug]
      if (entry && typeof entry === "object") {
        initialProgress = entry
      }

      // Build a map: question_id → sectionId (the FIRST section that
      // lists it as a check question). Drives the section-attribution
      // for practice attempts on this chapter's questions. Sections
      // without check_question_ids contribute nothing here — they're
      // silent in the weakness signal.
      const questionToSection = new Map<string, string>()
      for (const s of chapter.sections) {
        for (const id of s.checkQuestionIds) {
          if (!questionToSection.has(id)) questionToSection.set(id, s.id)
        }
      }
      const chapterQuestionIds = Array.from(questionToSection.keys())
      if (chapterQuestionIds.length > 0) {
        const { data: attempts } = await supabase
          .from("practice_attempts")
          .select("question_id, is_correct")
          .eq("user_id", user.id)
          .in("question_id", chapterQuestionIds)
        const sectionStats = new Map<string, { correct: number; total: number }>()
        for (const a of (attempts as { question_id: string; is_correct: boolean }[] | null) ?? []) {
          const sectionId = questionToSection.get(a.question_id)
          if (!sectionId) continue
          const cur = sectionStats.get(sectionId) ?? { correct: 0, total: 0 }
          cur.total += 1
          if (a.is_correct) cur.correct += 1
          sectionStats.set(sectionId, cur)
        }

        // Thresholds — only surface a hint when the signal is meaningful.
        // ≥10 total attempts on the chapter (need enough data to trust),
        // ≥2 sections with attempts (comparison requires distinct buckets),
        // weakest section ≥5% below the chapter's section-average accuracy
        // (otherwise the chapter is balanced — let the student start from top).
        const allStats = Array.from(sectionStats.values())
        const totalAttempts = allStats.reduce((s, x) => s + x.total, 0)
        const sectionsWithData = allStats.filter((s) => s.total >= 2).length
        if (totalAttempts >= 10 && sectionsWithData >= 2) {
          const sectionAccs = Array.from(sectionStats.entries())
            .filter(([, s]) => s.total >= 2)
            .map(([id, s]) => ({ id, acc: s.correct / s.total, attempts: s.total }))
          const avgAcc =
            sectionAccs.reduce((sum, x) => sum + x.acc, 0) / sectionAccs.length
          const lowest = sectionAccs.reduce((min, x) => (x.acc < min.acc ? x : min))
          if (avgAcc - lowest.acc >= 0.05) {
            const section = chapter.sections.find((s) => s.id === lowest.id)
            if (section) {
              // Section titles are often "Topic — qualifier"; trim to
              // the headline part for the chip readability.
              const shortTitle = section.title.split(" — ")[0]
              weakestSection = {
                id: lowest.id,
                title: shortTitle,
                accuracyPct: Math.round(lowest.acc * 100),
                attempts: lowest.attempts,
              }
            }
          }
        }
      }
    }
  } catch {
    // Supabase unavailable — reader falls back to the lenient tier + empty progress.
  }

  return (
    <div className="max-w-[92rem] mx-auto space-y-6">
      <Link
        href="/chapters"
        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#888888] hover:text-[#C9A84C] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        All chapters
      </Link>

      <ChapterReader
        slug={chapter.slug}
        title={chapter.title}
        section={chapter.section}
        estimatedPages={chapter.estimatedPages}
        summary={chapter.summary ?? null}
        sections={sections}
        problemSets={problemSets}
        targetScore={targetScore}
        initialProgress={initialProgress}
        weakestSection={weakestSection}
        firstPracticeTestSlug={firstPracticeTestSlug}
        prevChapter={prevChapter}
        nextChapter={nextChapter}
      />
    </div>
  )
}

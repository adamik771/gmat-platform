import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getAllQuestions, type ParsedQuestion } from "@/lib/content"
import { getReviewQueue, type ReviewCandidate } from "@/lib/review-queue"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import SessionClient, {
  type SessionQuestion,
} from "../../practice/session/[slug]/SessionClient"

/** How many questions to serve in one review session. */
const SESSION_SIZE = 10

type SectionParam = "quant" | "verbal" | "di"

const SECTION_MAP: Record<SectionParam, ReviewCandidate["section"]> = {
  quant: "Quant",
  verbal: "Verbal",
  di: "DI",
}

/**
 * /review/[section] — runs the top-priority N review questions for the
 * chosen section through the existing practice-session runner, so the
 * attempts get logged to `practice_attempts` and feed back into the
 * priority formula on the next day's review.
 */
export default async function ReviewSectionPage({
  params,
}: {
  params: Promise<{ section: string }>
}) {
  const { section: rawSection } = await params
  const sectionKey = rawSection.toLowerCase() as SectionParam
  const section = SECTION_MAP[sectionKey]
  if (!section) notFound()

  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <EmptyFrame
        title={`Sign in to review ${section}`}
        body="Your review queue is personalised — it needs an authenticated account."
      />
    )
  }

  const queue = await getReviewQueue(supabase, user.id, {
    section,
    limit: SESSION_SIZE,
    flaggedQuestionIds: gatherFlaggedQuestionIds(user.user_metadata),
  })

  if (queue.length === 0) {
    return (
      <EmptyFrame
        title={`Nothing to review in ${section} yet`}
        body={
          <>
            Answer some {section} questions in{" "}
            <Link
              href="/practice"
              className="underline underline-offset-2"
              style={{ color: "#C9A84C" }}
            >
              Practice
            </Link>{" "}
            first — once you&apos;ve attempted them, they become eligible for review here.
          </>
        }
      />
    )
  }

  // Resolve queue IDs to the full ParsedQuestion objects, in priority order.
  const byId = new Map<string, ParsedQuestion>()
  for (const q of getAllQuestions()) byId.set(q.id, q)

  const playable: SessionQuestion[] = queue
    .map((c) => byId.get(c.questionId))
    .filter((q): q is ParsedQuestion => !!q && q.options.length > 0)
    .map((q, i) => ({
      id: q.id,
      number: i + 1,
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
      fastestPath: q.fastestPath,
      commonTrap: q.commonTrap,
      mistakeAnalysis: q.mistakeAnalysis,
      takeaway: q.takeaway,
      twoPartColumns: q.twoPartColumns,
      twoPartCorrectAnswers: q.twoPartCorrectAnswers,
    }))

  if (playable.length === 0) {
    return (
      <EmptyFrame
        title={`Nothing to review in ${section} yet`}
        body="The questions in your queue don't have a playable format yet. Try another section or come back after more practice."
      />
    )
  }

  const slug = `review-${sectionKey}-${new Date().toISOString().slice(0, 10)}`

  // Each question's current spacing-ladder rung, so the completion screen
  // can show how this session moved every question on the ladder.
  const reviewRungs: Record<string, number> = {}
  for (const c of queue) reviewRungs[c.questionId] = c.rung

  return (
    <div className="space-y-5">
      <Link
        href="/review"
        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#888888] hover:text-[#C9A84C] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to review
      </Link>
      <SessionClient
        slug={slug}
        topic="Daily Review"
        section={section}
        questions={playable}
        reviewRungs={reviewRungs}
      />
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
    <div className="max-w-3xl mx-auto space-y-5">
      <Link
        href="/review"
        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#888888] hover:text-[#C9A84C] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to review
      </Link>
      <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.06] bg-[#0F0F0F]">
        <h1 className="font-display text-2xl md:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.1] mb-3">
          {title}
        </h1>
        <div className="text-[14px] text-[#C0C0C0] leading-[1.75]">{body}</div>
      </div>
    </div>
  )
}

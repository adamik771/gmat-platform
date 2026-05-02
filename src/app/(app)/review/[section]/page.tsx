import React from 'react'
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getAllQuestions, type ParsedQuestion } from "@/lib/content"
import { getReviewQueue, type ReviewCandidate } from "@/lib/review-queue"
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

  return (
    <div className="space-y-4">
      <Link
        href="/review"
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to review
      </Link>
      <SessionClient
        slug={slug}
        topic="Daily Review"
        section={section}
        questions={playable}
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
    <div className="max-w-2xl mx-auto space-y-4">
      <Link
        href="/review"
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to review
      </Link>
      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h1 className="text-lg font-semibold text-[#F0F0F0] mb-2">{title}</h1>
        <div className="text-sm text-[#888888] leading-relaxed">{body}</div>
      </div>
    </div>
  )
}

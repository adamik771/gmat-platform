import React from 'react'
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { pickDiagnosticQuestions } from "@/lib/diagnostic"
import SessionClient, {
  type SessionQuestion,
} from "../../practice/session/[slug]/SessionClient"
import type { Section } from "@/types"

type SectionParam = "quant" | "verbal" | "di"

const SECTION_MAP: Record<SectionParam, Section> = {
  quant: "Quant",
  verbal: "Verbal",
  di: "DI",
}

/**
 * /diagnostic/[section] — runs this section's 10-question diagnostic set
 * through the existing practice-session runner. Using a fixed diagnostic
 * slug (`diagnostic-quant`, etc.) means we can later query
 * `practice_sessions.slug = 'diagnostic-…'` to rebuild the report without
 * a separate diagnostic-results table.
 */
export default async function DiagnosticSectionPage({
  params,
}: {
  params: Promise<{ section: string }>
}) {
  const { section: rawSection } = await params
  const key = rawSection.toLowerCase() as SectionParam
  const section = SECTION_MAP[key]
  if (!section) notFound()

  const questions = pickDiagnosticQuestions(section)
  if (questions.length === 0) {
    return (
      <EmptyFrame
        title={`No ${section} questions available`}
        body="The diagnostic needs a populated question bank for this section. Please try another section."
      />
    )
  }

  const playable: SessionQuestion[] = questions.map((q, i) => ({
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

  return (
    <div className="space-y-4">
      <Link
        href="/diagnostic"
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to diagnostic
      </Link>
      <SessionClient
        slug={`diagnostic-${key}`}
        topic="Diagnostic Placement"
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

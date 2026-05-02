import React from 'react'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  MOCK_SECTIONS,
  MOCK_SECTION_MINUTES,
  pickMockQuestions,
} from "@/lib/mock"
import MockRunner, { type MockSectionQuestions } from "./MockRunner"

/**
 * /mock/run — server-side picks today's mock question set and hands it
 * to the MockRunner client component, which drives the full-length
 * state machine.
 */
export default async function MockRunPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <EmptyFrame
        title="Sign in to take the mock"
        body="The mock is timed and your results are saved — you need an authenticated account to take it."
      />
    )
  }

  const sections: MockSectionQuestions[] = MOCK_SECTIONS.map((section) => ({
    section,
    minutes: MOCK_SECTION_MINUTES[section],
    questions: pickMockQuestions(section).map((q) => ({
      id: q.id,
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
    })),
  }))

  if (sections.some((s) => s.questions.length === 0)) {
    return (
      <EmptyFrame
        title="Mock unavailable"
        body="One or more sections don't have enough playable questions right now. Try again later."
      />
    )
  }

  const dateIso = new Date().toISOString()

  return (
    <div className="space-y-4">
      <Link
        href="/mock"
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to Mock
      </Link>
      <MockRunner dateIso={dateIso} sections={sections} />
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
        href="/mock"
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to Mock
      </Link>
      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h1 className="text-lg font-semibold text-[#F0F0F0] mb-2">{title}</h1>
        <div className="text-sm text-[#888888] leading-relaxed">{body}</div>
      </div>
    </div>
  )
}

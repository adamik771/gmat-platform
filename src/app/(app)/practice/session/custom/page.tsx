import Link from "next/link"
import { getQuestionsByIds } from "@/lib/content"
import SessionClient, { type SessionQuestion } from "../[slug]/SessionClient"
import type { Section } from "@/types"

const ALLOWED_SECTIONS = new Set<Section>(["Quant", "Verbal", "DI"])

/**
 * Custom practice-session route. Unlike the file-slug route at
 * `/practice/session/[slug]`, this one reads its question list directly
 * from the URL (`?ids=a,b,c&topic=...&section=...`). The test builder
 * POSTs here after sampling; error-log retake links and dashboard CTAs
 * fall back to an empty state when ids are missing.
 *
 * Keeping state in the URL avoids needing a new `custom_sessions` table
 * and makes the link shareable / bookmarkable.
 */
export default async function CustomSessionPage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string; topic?: string; section?: string }>
}) {
  const params = await searchParams
  const rawIds = (params.ids ?? "").trim()
  const rawTopic = (params.topic ?? "").trim().slice(0, 80)
  const rawSection = (params.section ?? "").trim()
  // Cap ids length defensively so a malicious URL can't balloon query size.
  const ids = rawIds ? rawIds.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 100) : []

  const questions = getQuestionsByIds(ids)
  const playable: SessionQuestion[] = questions
    .filter((q) => q.options.length > 0)
    .map((q, idx) => ({
      id: q.id,
      // Number is the position in THIS custom set, not the source file number.
      number: idx + 1,
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
      <div className="max-w-2xl mx-auto">
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h1 className="text-xl font-bold text-[#F0F0F0] mb-2">
            Custom test — no questions
          </h1>
          <p className="text-sm text-[#888888] mb-4">
            This link doesn&apos;t include any question ids, or the questions
            couldn&apos;t be resolved. Custom tests are generated from the Test
            Builder and aren&apos;t replayable from just a slug.
          </p>
          <Link
            href="/test-builder"
            className="inline-block text-xs px-3 py-1.5 rounded-lg font-medium hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Build a new test
          </Link>
        </div>
      </div>
    )
  }

  // Label the set. Prefer the passed-in topic/section, fall back to a
  // sensible derived label from the actual question mix.
  const topicLabel = rawTopic || "Custom Test"
  const sectionLabel: Section = ALLOWED_SECTIONS.has(rawSection as Section)
    ? (rawSection as Section)
    : deriveSection(playable)

  return (
    <SessionClient
      slug="custom"
      topic={topicLabel}
      section={sectionLabel}
      questions={playable}
    />
  )
}

function deriveSection(questions: SessionQuestion[]): Section {
  const counts: Record<Section, number> = { Quant: 0, Verbal: 0, DI: 0 }
  for (const q of questions) counts[q.section]++
  const secs = Object.keys(counts) as Section[]
  const top = secs.reduce((a, b) => (counts[a] >= counts[b] ? a : b))
  // If the test mixes sections roughly evenly, "Quant" as a fallback is fine
  // — SessionClient just displays the label in the header chrome.
  return top
}

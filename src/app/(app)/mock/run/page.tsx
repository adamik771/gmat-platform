import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { pickMockQuestions, getDifficultyMixForTarget } from "@/lib/mock"
import {
  getMockSectionsForMode,
  isValidMockMode,
  MOCK_MODE_DEFS,
  type MockMode,
} from "@/lib/mock-modes"
import MockRunner, { type MockSectionQuestions } from "./MockRunner"

/**
 * /mock/run — server-side picks today's mock question set and hands it
 * to the MockRunner client component, which drives the full-length
 * state machine.
 *
 * `?mode=` query param selects the variant. Falls back to "full" when
 * the param is missing or invalid. The mode shape and per-mode question
 * source live in `src/lib/mock-modes.ts`.
 */
export default async function MockRunPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>
}) {
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

  const params = await searchParams
  const mode: MockMode = isValidMockMode(params.mode) ? params.mode : "full"
  const def = MOCK_MODE_DEFS[mode]

  const rawTarget = user.user_metadata?.target_score
  const targetScore = typeof rawTarget === "number" ? rawTarget : null

  // Mock rotation offset — successive mocks should draw from a
  // different slice of the question bank. Use the count of the
  // student's prior mock sessions (any mock-* slug, all modes/sections)
  // as the offset. Each section's pool rotates by the same index, so
  // the picker visits fresh starting points each mock. Cheap head-only
  // count query; failure is non-fatal (defaults to 0 = no rotation).
  let mockIndex = 0
  try {
    const { count } = await supabase
      .from("practice_sessions")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .like("slug", "mock-%")
    mockIndex = count ?? 0
  } catch {
    // Non-fatal — fall through with mockIndex = 0.
  }

  // Dispatch through the mode module — handles static + dynamic modes.
  // Pre-pass the existing static picker so mock-modes.ts doesn't need
  // to re-import the mock module (avoids the circular import).
  //
  // Mode-supplied mix wins (e.g., hard mode's all-Advanced override).
  // Otherwise scale to the student's target tier — high-target students
  // see a tougher baseline mix, foundation-target students see an easier
  // one. Same per-section question counts in either case.
  const picks = await getMockSectionsForMode(mode, {
    supabase,
    userId: user.id,
    userMetadata: user.user_metadata,
    pickStatic: (section, mix, count) =>
      pickMockQuestions(
        section,
        mix ?? getDifficultyMixForTarget(section, targetScore),
        count,
        mockIndex
      ),
  })

  const sections: MockSectionQuestions[] = picks.map((p) => ({
    section: p.section,
    minutes: p.minutes,
    questions: p.questions.map((q) => ({
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

  if (sections.length === 0 || sections.some((s) => s.questions.length === 0)) {
    return (
      <EmptyFrame
        title="Mock unavailable"
        body={
          mode === "weak" || mode === "mixed-review"
            ? "Not enough signal yet for this mock variant — log a few practice sets first, then try again."
            : "Not enough playable questions to fill this mock right now. Try a different mode."
        }
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
      <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold">
        {def.label}
      </p>
      <MockRunner dateIso={dateIso} sections={sections} modeLabel={def.label} />
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

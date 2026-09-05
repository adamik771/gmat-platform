import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  PAYWALL_ENABLED,
  canAccess,
  effectiveTierForUser,
} from "@/lib/entitlements"
import UpgradeGate from "@/components/shared/UpgradeGate"
import { pickMockQuestions, getDifficultyMixForTarget } from "@/lib/mock"
import {
  buildLastSeenMap,
  QUESTION_HISTORY_LIMIT,
} from "@/lib/question-selection"
import { getUserState } from "@/lib/user-state"
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

  // Paywall gate (no-op while PAYWALL_ENABLED is off). The Official Exam Plan
  // on /mock stays free; the site's internal mock simulator is paid "extra reps".
  if (PAYWALL_ENABLED) {
    const tier = await effectiveTierForUser(supabase, user, new Date())
    if (!canAccess(tier, "mock-simulator")) {
      return (
        <UpgradeGate
          feature="The mock simulator"
          blurb="Unlimited full-length, three-section timed simulations with mock-to-mock score trends — extra reps beyond your six official practice exams."
          perks={[
            "Unlimited full-length and section-only timed mocks",
            "Hard mode, weak-area, and mixed-review mock variants",
            "Mock-to-mock score trend and per-section forecast",
          ]}
        />
      )
    }
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
  let lastSeenAt: ReadonlyMap<string, number> = new Map()
  try {
    const [{ count }, { data: attemptRows }] = await Promise.all([
      supabase
        .from("practice_sessions")
        .select("id", { count: "exact", head: true })
        .eq("user_id", user.id)
        .like("slug", "mock-%"),
      supabase
        .from("practice_attempts")
        .select("question_id, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(QUESTION_HISTORY_LIMIT),
    ])
    mockIndex = count ?? 0
    lastSeenAt = buildLastSeenMap(attemptRows)
  } catch {
    // Non-fatal — fall through with the deterministic base picker.
  }

  // Dispatch through the mode module — handles static + dynamic modes.
  // Pre-pass the existing static picker so mock-modes.ts doesn't need
  // to re-import the mock module (avoids the circular import).
  //
  // Mode-supplied mix wins (e.g., hard mode's all-Advanced override).
  // Otherwise scale to the student's target tier — high-target students
  // see a tougher baseline mix, foundation-target students see an easier
  // one. Same per-section question counts in either case.
  const state = await getUserState(supabase, user)
  const picks = await getMockSectionsForMode(mode, {
    supabase,
    userId: user.id,
    userMetadata: state,
    pickStatic: (section, mix, count) =>
      pickMockQuestions(
        section,
        mix ?? getDifficultyMixForTarget(section, targetScore),
        count,
        mockIndex,
        lastSeenAt
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
      chartSpec: q.chartSpec,
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
      {/* No always-visible Back link here: one misclick above a 45-minute
          in-memory section used to destroy the whole attempt. In-run exits
          are guarded inside MockRunner (confirm + beforeunload); the intro
          screen still allows leaving freely. */}
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

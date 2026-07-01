import { getAllQuestions } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  PAYWALL_ENABLED,
  canAccess,
  effectiveTierForUser,
} from "@/lib/entitlements"
import UpgradeGate from "@/components/shared/UpgradeGate"
import TestBuilderClient, {
  type QuestionPoolEntry,
  type RecentCustomTest,
} from "./TestBuilderClient"

export default async function TestBuilderPage() {
  // Paywall gate (fully skipped while PAYWALL_ENABLED is off — no extra query).
  if (PAYWALL_ENABLED) {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const tier = await effectiveTierForUser(supabase, user, new Date())
      if (!canAccess(tier, "test-builder")) {
        return (
          <UpgradeGate
            feature="The custom test builder"
            blurb="Build your own timed tests filtered by topic, difficulty, and count — targeted reps on exactly the sub-skills you choose, drawn from the full question bank."
            perks={[
              "Filter by section, topic, and difficulty",
              "Choose your own question count and timing",
              "Draws from the full question bank, not a sample",
            ]}
          />
        )
      }
    }
  }
  // The client samples from this pool on Generate. Shipping the full ~1,900-row
  // question list is a few KB — cheaper than POSTing to the server on every
  // click, and keeps the action instant.
  const pool: QuestionPoolEntry[] = getAllQuestions()
    // Playability filter matches the session route — skip anything with no
    // options (shouldn't happen now that TPA parses into row-label options,
    // but the guard stays as a safety net).
    .filter((q) => q.options.length > 0)
    .map((q) => ({
      id: q.id,
      section: q.section,
      topic: q.topic,
      difficulty: q.difficulty,
    }))

  // Pull the user's 5 most-recent `custom` sessions (saved by SessionClient
  // through /api/practice-sessions) for the "Recent Custom Tests" block.
  let recent: RecentCustomTest[] = []
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const { data } = await supabase
        .from("practice_sessions")
        .select(
          "id, topic, section, total_questions, correct_count, accuracy, created_at"
        )
        .eq("user_id", user.id)
        .eq("slug", "custom")
        .order("created_at", { ascending: false })
        .limit(5)

      recent = (data ?? []).map((s) => ({
        id: s.id as string,
        topic: (s.topic as string) || "Custom Test",
        section: (s.section as string) || "Mixed",
        totalQuestions: (s.total_questions as number) ?? 0,
        correctCount: (s.correct_count as number) ?? 0,
        accuracy: Math.round(Number(s.accuracy ?? 0)),
        createdAt: s.created_at as string,
      }))
    }
  } catch {
    // Supabase unavailable — fall through with empty list.
  }

  return <TestBuilderClient pool={pool} recent={recent} />
}

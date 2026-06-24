import { getPracticeChapterGroups, getQuestionSets } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import { collectAdaptiveSignals } from "@/lib/adaptive-plan-engine"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { getUserState } from "@/lib/user-state"
import {
  PAYWALL_ENABLED,
  getPlanTierForUser,
  practiceTestsAllowed,
} from "@/lib/entitlements"
import PracticeClient, { type PracticeRecommendation } from "./PracticeClient"

export default async function PracticePage() {
  // Per-chapter practice tests — derived from the question banks by subtopic
  // routing (see lib/practice-tests-map.ts). Each chapter carries a couple of
  // short, count-up-timed tests.
  const chapterGroups = getPracticeChapterGroups()

  // Recommended starting points — top 3 weak sub-skills the adaptive engine
  // surfaces, mapped to the topic-set the topicSlug points at. These still link
  // to the topic-based session route (resolved alongside chapter-test slugs).
  // Failure here is non-fatal: the page renders without recommendations.
  const knownSlugs = new Set(getQuestionSets().map((s) => s.slug))
  let recommendations: PracticeRecommendation[] = []
  let targetScore: number | null = null
  // How many tests per chapter are unlocked. null = no locking (paywall off):
  // the list renders every test as before. A number means lock tests beyond
  // that index (free accounts when the paywall is on).
  let lockTestsBeyond: number | null = null
  // test.id (`ch-<chapterSlug>-t<n>`) -> latest attempt summary, so the test
  // row shows "Review" + last score instead of "Start" (beta feedback).
  const attemptsBySlug: Record<
    string,
    { lastCorrect: number; lastTotal: number; attempts: number }
  > = {}
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const rawTarget = user.user_metadata?.target_score as number | null | undefined
      targetScore =
        typeof rawTarget === "number" &&
        Number.isInteger(rawTarget) &&
        rawTarget >= 205 &&
        rawTarget <= 805
          ? rawTarget
          : null
      if (PAYWALL_ENABLED) {
        const tier = await getPlanTierForUser(supabase, user.id)
        const allowed = practiceTestsAllowed(tier)
        lockTestsBeyond = Number.isFinite(allowed) ? allowed : null
      }
      const state = await getUserState(supabase, user)
      const flaggedQuestionIds = gatherFlaggedQuestionIds(state)
      const signals = await collectAdaptiveSignals(
        supabase,
        user.id,
        state,
        { flaggedQuestionIds }
      )
      recommendations = signals.topWeakSubskills
        .filter((w) => !!w.setSlug && knownSlugs.has(w.setSlug))
        .slice(0, 3)
        .map((w) => ({
          slug: w.setSlug!,
          topic: w.topic,
          subskill: w.subskill,
          section: w.section,
          misses: w.misses,
        }))

      // Attempted chapter tests + latest score. Latest-first so the first row
      // per slug is the most recent attempt; bounded read.
      const { data: testSessions } = await supabase
        .from("practice_sessions")
        .select("slug, correct_count, total_questions, created_at")
        .eq("user_id", user.id)
        .like("slug", "ch-%")
        .order("created_at", { ascending: false })
        .limit(2000)
      for (const s of testSessions ?? []) {
        const slug = s.slug as string
        if (attemptsBySlug[slug]) {
          attemptsBySlug[slug].attempts += 1
        } else {
          attemptsBySlug[slug] = {
            lastCorrect: (s.correct_count as number | null) ?? 0,
            lastTotal: (s.total_questions as number | null) ?? 0,
            attempts: 1,
          }
        }
      }
    }
  } catch {
    // Signals unavailable — render without recommendations.
  }

  return (
    <PracticeClient
      chapterGroups={chapterGroups}
      recommendations={recommendations}
      targetScore={targetScore}
      lockTestsBeyond={lockTestsBeyond}
      attemptsBySlug={attemptsBySlug}
    />
  )
}

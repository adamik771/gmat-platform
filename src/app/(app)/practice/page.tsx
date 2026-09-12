import { Suspense } from "react"
import { getPracticeChapterGroups, getQuestionSets, getQuestionsByIds } from "@/lib/content"
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
import type { PracticeAttemptSummary } from "./catalogue"
import { parsePracticeResumeSnapshot, restorePracticeResume } from "@/lib/practice-resume"

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
  let activeSlug: string | null = null
  // How many tests per chapter are unlocked. null = no locking (paywall off):
  // the list renders every test as before. A number means lock tests beyond
  // that index (free accounts when the paywall is on).
  let lockTestsBeyond: number | null = null
  // Keep the saved session ID: results must never mount a fresh runner.
  const attemptsBySlug: Record<string, PracticeAttemptSummary> = {}
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
      const tierPromise = PAYWALL_ENABLED
        ? getPlanTierForUser(supabase, user.id)
        : Promise.resolve(null)
      const statePromise = getUserState(supabase, user)
      const testSessionsPromise = supabase
        .from("practice_sessions")
        .select("id, slug, correct_count, total_questions, created_at")
        .eq("user_id", user.id)
        .like("slug", "ch-%")
        .order("created_at", { ascending: false })
        .limit(2000)

      const state = await statePromise
      const snapshot = parsePracticeResumeSnapshot(state.active_practice)
      const activeTest = snapshot && chapterGroups.flatMap((group) => group.tests).find((test) => test.id === snapshot.slug)
      // Submitted answers are not a finished session: the runner still
      // requires Finish before saving results and clearing the snapshot.
      if (snapshot && activeTest) {
        const restored = restorePracticeResume(snapshot, getQuestionsByIds(activeTest.questionIds), { userId: user.id, slug: snapshot.slug })
        if (restored) activeSlug = snapshot.slug
      }
      const flaggedQuestionIds = gatherFlaggedQuestionIds(state)
      const signalsPromise = collectAdaptiveSignals(
        supabase,
        user.id,
        state,
        { flaggedQuestionIds },
      )
      const [tier, signals, { data: testSessions }] = await Promise.all([
        tierPromise,
        signalsPromise,
        testSessionsPromise,
      ])
      if (PAYWALL_ENABLED && tier) {
        const allowed = practiceTestsAllowed(tier)
        lockTestsBeyond = Number.isFinite(allowed) ? allowed : null
      }
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
      for (const s of testSessions ?? []) {
        const slug = s.slug as string
        if (attemptsBySlug[slug]) {
          attemptsBySlug[slug].attempts += 1
        } else {
          attemptsBySlug[slug] = {
            sessionId: s.id as string,
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
    <Suspense fallback={<p className="text-sm text-[#B9B7AE]">Loading practice filters...</p>}>
      <PracticeClient
        chapterGroups={chapterGroups}
        recommendations={recommendations}
        targetScore={targetScore}
        lockTestsBeyond={lockTestsBeyond}
        attemptsBySlug={attemptsBySlug}
        activeSlug={activeSlug}
      />
    </Suspense>
  )
}

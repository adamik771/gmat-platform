import { getPracticeChapterGroups, getQuestionSets } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import { collectAdaptiveSignals } from "@/lib/adaptive-plan-engine"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
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
      const flaggedQuestionIds = gatherFlaggedQuestionIds(user.user_metadata)
      const signals = await collectAdaptiveSignals(
        supabase,
        user.id,
        user.user_metadata,
        { flaggedQuestionIds }
      )
      recommendations = signals.topWeakSubskills
        .filter((w) => !!w.topicSlug && knownSlugs.has(w.topicSlug))
        .slice(0, 3)
        .map((w) => ({
          slug: w.topicSlug!,
          topic: w.topic,
          subskill: w.subskill,
          section: w.section,
          misses: w.misses,
        }))
    }
  } catch {
    // Signals unavailable — render without recommendations.
  }

  return (
    <PracticeClient
      chapterGroups={chapterGroups}
      recommendations={recommendations}
      targetScore={targetScore}
    />
  )
}

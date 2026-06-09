import {
  getAllQuestions,
  getQuestionSets,
  type ParsedQuestion,
} from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import { collectAdaptiveSignals } from "@/lib/adaptive-plan-engine"
import { gatherFlaggedQuestionIds } from "@/lib/mock"
import { getTopicSkillLevels } from "@/lib/topic-skill"
import PracticeClient, {
  type PracticeRecommendation,
  type PracticeSetData,
  type TopicSkillSummary,
} from "./PracticeClient"

/**
 * Estimate set runtime from per-question target seconds. Falls back to
 * section-typical 90s when an `estTimeSeconds` is unauthored — matches
 * the rough pacing of the GMAT Focus per-question target.
 */
function estimateSetMinutes(questions: ParsedQuestion[]): number {
  let totalSeconds = 0
  for (const q of questions) {
    totalSeconds += q.estTimeSeconds && q.estTimeSeconds > 0 ? q.estTimeSeconds : 90
  }
  return Math.max(2, Math.round(totalSeconds / 60))
}

export default async function PracticePage() {
  // Group all questions by set slug so we can compute a difficulty mix
  // per topic card. The shared `getQuestionSets()` helper only counts;
  // we re-bucket here to expose the easy/medium/hard breakdown without
  // touching the content loader.
  const allQuestions = getAllQuestions()
  const bySlug = new Map<string, ParsedQuestion[]>()
  for (const q of allQuestions) {
    const slug = q.id.replace(/-q\d+$/, "")
    const arr = bySlug.get(slug) ?? []
    arr.push(q)
    bySlug.set(slug, arr)
  }

  const sets: PracticeSetData[] = getQuestionSets().map((set) => {
    const questions = bySlug.get(set.slug) ?? []
    let easy = 0
    let medium = 0
    let hard = 0
    for (const q of questions) {
      if (q.difficulty === "Beginner") easy++
      else if (q.difficulty === "Intermediate") medium++
      else if (q.difficulty === "Advanced") hard++
    }
    return {
      slug: set.slug,
      topic: set.topic,
      section: set.section,
      questions: set.count,
      easy,
      medium,
      hard,
      estimatedMinutes: estimateSetMinutes(questions),
    }
  })

  // Recommended starting points — top 3 weak sub-skills the adaptive
  // engine surfaces, mapped to the practice set the topicSlug points at.
  // Failure here is non-fatal: the page renders without recommendations.
  const knownSlugs = new Set(sets.map((s) => s.slug))
  let recommendations: PracticeRecommendation[] = []
  // Per-topic mastery, keyed by set slug. Read from the same
  // `user_metadata.topic_skill_levels` map that the adaptive question
  // ordering already maintains — so the bank reflects the student's
  // real trajectory with zero extra storage. Empty for signed-out users.
  const skillBySlug: Record<string, TopicSkillSummary> = {}
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
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

      const skillMap = getTopicSkillLevels(user.user_metadata)
      for (const [slug, value] of Object.entries(skillMap)) {
        if (!knownSlugs.has(slug)) continue
        skillBySlug[slug] = { level: value.level, attempts: value.attempts }
      }
    }
  } catch {
    // Signals unavailable — render without recommendations / mastery.
  }

  return (
    <PracticeClient
      sets={sets}
      recommendations={recommendations}
      skillBySlug={skillBySlug}
    />
  )
}

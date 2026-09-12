import type { PracticeChapterGroup, PracticeTest } from "@/lib/content"
import { resolveChapterAssignment } from "@/lib/practice-tests-map"

export interface PracticeAttemptSummary {
  sessionId: string
  lastCorrect: number
  lastTotal: number
  attempts: number
}

export interface PracticeRecommendation {
  slug: string
  topic: string
  subskill: string
  section: "Quant" | "Verbal" | "DI"
  misses: number
}

export interface PracticeFilters {
  q: string
  section: string
  topic: string
  difficulty: string
  status: string
  unavailable: boolean
}

export function readPracticeFilters(params: Pick<URLSearchParams, "get">): PracticeFilters {
  const section = params.get("section") ?? ""
  const difficulty = params.get("difficulty") ?? ""
  const status = params.get("status") ?? ""
  return {
    q: params.get("q") ?? "",
    section: ["Quant", "Verbal", "DI"].includes(section) ? section : "",
    topic: params.get("topic") ?? "",
    difficulty: ["easy", "medium", "hard"].includes(difficulty) ? difficulty : "",
    status: ["new", "completed", "in-progress"].includes(status) ? status : "",
    unavailable: params.get("unavailable") === "1",
  }
}

export function isPracticeTestLocked(group: PracticeChapterGroup, test: PracticeTest, limit: number | null): boolean {
  return limit !== null && group.tests.findIndex((item) => item.id === test.id) + 1 > limit
}

export function practiceTestLinks(testId: string, attempt?: PracticeAttemptSummary) {
  return {
    start: `/practice/session/${encodeURIComponent(testId)}`,
    results: attempt ? `/practice/history/${encodeURIComponent(attempt.sessionId)}` : null,
    answers: attempt ? `/practice/history/${encodeURIComponent(attempt.sessionId)}#answers` : null,
  }
}

export function filterPracticeGroups(
  groups: PracticeChapterGroup[],
  filters: PracticeFilters,
  attempts: Record<string, PracticeAttemptSummary>,
  activeSlug: string | null,
  limit: number | null,
): PracticeChapterGroup[] {
  const query = filters.q.trim().toLocaleLowerCase()
  return groups.flatMap((group) => {
    if (filters.section && group.section !== filters.section) return []
    if (filters.topic && group.chapterSlug !== filters.topic) return []
    const matchesTitle = `${group.chapterTitle} ${group.section}`.toLocaleLowerCase().includes(query)
    if (group.comingSoon) {
      return filters.unavailable && matchesTitle && !filters.difficulty && !filters.status ? [group] : []
    }
    const tests = group.tests.filter((test) => {
      if (!filters.unavailable && isPracticeTestLocked(group, test, limit)) return false
      if (query && !matchesTitle && !test.label.toLocaleLowerCase().includes(query)) return false
      if (filters.difficulty && test.difficultyMix[filters.difficulty as keyof PracticeTest["difficultyMix"]] === 0) return false
      if (filters.status === "in-progress") return test.id === activeSlug
      if (filters.status === "completed") return !!attempts[test.id]
      if (filters.status === "new") return !attempts[test.id] && test.id !== activeSlug
      return true
    })
    return tests.length ? [{ ...group, tests }] : []
  })
}

export function recommendPracticeTest(
  groups: PracticeChapterGroup[],
  recommendations: PracticeRecommendation[],
  attempts: Record<string, PracticeAttemptSummary>,
  limit: number | null,
) {
  const available = groups.flatMap((group) => group.comingSoon ? [] : group.tests
    .filter((test) => test.count > 0 && !isPracticeTestLocked(group, test, limit))
    .map((test) => ({ group, test })))
  for (const recommendation of recommendations) {
    const assignment = resolveChapterAssignment(recommendation.slug, recommendation.subskill)
    // A bank can span sections and several chapters. Only a recognized
    // subskill mapping establishes a related chapter; the default does not.
    if (!recommendation.subskill.trim() || !assignment.chapter || assignment.viaDefault) continue
    const matching = available.filter(({ group, test }) =>
      group.section === recommendation.section
      && group.chapterSlug === assignment.chapter
      && test.questionIds.some((id) => id.startsWith(`${recommendation.slug}-q`)))
    const pick = matching.find(({ test }) => !attempts[test.id]) ?? matching[0]
    if (pick) return { ...pick, reason: `${recommendation.misses} recorded misses in ${recommendation.subskill}. Practice the related ${pick.group.chapterTitle} chapter.` }
  }
  for (const recommendation of recommendations) {
    const sectionMatches = available.filter(({ group }) => group.section === recommendation.section)
    const bankMatches = sectionMatches.filter(({ test }) => test.questionIds.some((id) => id.startsWith(`${recommendation.slug}-q`)))
    const fallback = bankMatches.length ? bankMatches : sectionMatches
    const pick = fallback.find(({ test }) => !attempts[test.id]) ?? fallback[0]
    if (pick) return { ...pick, reason: `An available ${recommendation.section === "DI" ? "Data Insights" : recommendation.section} set. An exact subskill match is not confirmed for this set.` }
  }
  const pick = available.find(({ test }) => !attempts[test.id]) ?? available[0]
  return pick ? { ...pick, reason: attempts[pick.test.id] ? "Revisit an available set from your chapter path." : "Your next unattempted, available set in chapter order." } : null
}

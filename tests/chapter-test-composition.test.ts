import { describe, it, expect } from "vitest"
import { getAllChapters, getPracticeChapterGroups } from "@/lib/content"

/**
 * A question the student just worked through inside a chapter's reader
 * (pretest, recall check, problem set) must not reappear in that — or any —
 * chapter's practice tests. Reader questions skew easy and Test 1 is the
 * easiest slice, so before this rule a chapter's Test 1 could open with the
 * exact question the student answered at the end of the reading.
 *
 * Runs over the real content bank, so it also guards future chapter edits.
 */
describe("chapter test composition", () => {
  const embedded = new Set<string>()
  for (const ch of getAllChapters()) {
    for (const ps of ch.problemSets)
      for (const id of ps.questionIds) embedded.add(id)
    for (const s of ch.sections) {
      for (const id of s.pretestQuestionIds) embedded.add(id)
      for (const id of s.checkQuestionIds) embedded.add(id)
    }
  }

  it("never deals reader-embedded questions into practice tests", () => {
    const offenders: string[] = []
    for (const g of getPracticeChapterGroups())
      for (const t of g.tests)
        for (const id of t.questionIds)
          if (embedded.has(id)) offenders.push(`${t.id}: ${id}`)
    // The MIN_TEST_POOL fallback permits overlap only for chapters whose bank
    // is too small to lose the embedded questions; the current bank has none.
    // If this ever fires after adding a tiny chapter, grow its bank instead of
    // deleting this test.
    expect(offenders).toEqual([])
  })

  it("keeps at least one test on every non-coming-soon chapter", () => {
    for (const g of getPracticeChapterGroups()) {
      if (!g.comingSoon) {
        expect(g.tests.length, g.chapterSlug).toBeGreaterThan(0)
      }
    }
  })
})

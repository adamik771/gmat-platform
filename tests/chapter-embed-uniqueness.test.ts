import { describe, it, expect } from "vitest"
import { getAllChapters } from "@/lib/content"

/**
 * Every reader slot (pretest, recall check, problem set) must pin a DISTINCT
 * question — within a chapter and across chapters. Before this rule, 250 pins
 * were re-used (a pretest question reappearing as that chapter's recall
 * check, a check question reappearing in its problem set, and later chapters
 * re-pinning earlier chapters' questions), so a student following the path
 * kept hitting identical questions. Coming-soon chapters count too: they are
 * hidden from practice-test routing but their readers are fully visible.
 *
 * Runs over the real content bank, so it also guards future chapter edits.
 * The validator enforces the same rule at ERROR severity (reader-duplicate-pin).
 */
describe("chapter reader pin uniqueness", () => {
  it("never pins the same question into two reader slots", () => {
    const seen = new Map<string, string>()
    const dups: string[] = []
    for (const ch of getAllChapters()) {
      const visit = (ids: readonly string[], where: string) => {
        for (const id of ids) {
          const prev = seen.get(id)
          if (prev) dups.push(`${id} pinned at ${prev} AND ${ch.slug}:${where}`)
          else seen.set(id, `${ch.slug}:${where}`)
        }
      }
      for (const s of ch.sections) {
        visit(s.pretestQuestionIds, `pretest(${s.id})`)
        visit(s.checkQuestionIds, `check(${s.id})`)
      }
      for (const ps of ch.problemSets) {
        visit(ps.questionIds, `problem_set(${ps.difficulty})`)
      }
    }
    expect(dups).toEqual([])
  })
})

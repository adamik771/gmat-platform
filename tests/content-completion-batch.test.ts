import { describe, expect, it } from "vitest"
import {
  getAllChapters,
  getAllQuestions,
  getPracticeChapterGroups,
} from "@/lib/content"
import { TEST_CAPS } from "@/lib/practice-tests-map"

const NEW_KEYS: Record<string, string> = {
  "arithmetic-q127": "D",
  "arithmetic-q128": "B",
  "arithmetic-q129": "E",
  "arithmetic-q130": "C",
  "arithmetic-q131": "C",
  "number-properties-q101": "C",
  "combinatorics-q121": "B",
  "combinatorics-q122": "D",
  "critical-reasoning-q250": "B",
  "critical-reasoning-q251": "D",
  "critical-reasoning-q252": "A",
  "critical-reasoning-q253": "C",
  "critical-reasoning-q254": "E",
  "reading-comprehension-q183": "D",
  "reading-comprehension-q184": "A",
  "reading-comprehension-q185": "C",
}

const COMPLETED_POOLS = [
  "quant-07-gcf-lcm-units-digits",
  "quant-08-even-odd-integer-properties",
  "quant-25-permutations-combinations",
  "verbal-02-cr-argument-structure",
  "verbal-10-cr-boldface",
  "verbal-11-cr-complete",
  "verbal-19-rc-attitude",
]

describe("content completion batch", () => {
  it("loads every new question with the reviewed key and distinct options", () => {
    const byId = new Map(getAllQuestions().map((question) => [question.id, question]))

    for (const [id, answer] of Object.entries(NEW_KEYS)) {
      const question = byId.get(id)
      expect(question, id).toBeDefined()
      expect(question?.correctAnswerLetter, id).toBe(answer)
      expect(question?.options, id).toHaveLength(5)
      expect(new Set(question?.options).size, id).toBe(5)
    }
  })

  it("brings every previously thin test pool to its section cap", () => {
    const groups = new Map(
      getPracticeChapterGroups().map((group) => [group.chapterSlug, group])
    )

    for (const slug of COMPLETED_POOLS) {
      const group = groups.get(slug)
      expect(group, slug).toBeDefined()
      const total = group?.tests.reduce((sum, test) => sum + test.count, 0) ?? 0
      expect(total, slug).toBeGreaterThanOrEqual(TEST_CAPS[group!.section])
    }
  })

  it("gives both method chapters a two-question try-before-you-learn pretest", () => {
    const chapters = new Map(
      getAllChapters().map((chapter) => [chapter.slug, chapter])
    )
    const expected: Record<string, string[]> = {
      "quant-04-answer-choice-tactics": ["arithmetic-q128", "arithmetic-q129"],
      "quant-30-timing": ["arithmetic-q130", "arithmetic-q131"],
    }

    for (const [slug, ids] of Object.entries(expected)) {
      const pretest = chapters
        .get(slug)
        ?.sections.find((section) => section.type === "pretest")
      expect(pretest?.pretestQuestionIds, slug).toEqual(ids)
    }
  })

  it("allows adjacent scaffolding but never a two-tier problem-set jump", () => {
    const byId = new Map(getAllQuestions().map((question) => [question.id, question]))
    const expectedRank = { easy: 0, medium: 1, hard: 2 } as const
    const questionRank = { Beginner: 0, Intermediate: 1, Advanced: 2 } as const

    for (const chapter of getAllChapters()) {
      for (const problemSet of chapter.problemSets) {
        for (const id of problemSet.questionIds) {
          const question = byId.get(id)
          expect(question, id).toBeDefined()
          const gap = Math.abs(
            questionRank[question!.difficulty] - expectedRank[problemSet.difficulty]
          )
          expect(gap, `${chapter.slug}/${problemSet.difficulty}/${id}`).toBeLessThanOrEqual(1)
        }
      }
    }
  })
})

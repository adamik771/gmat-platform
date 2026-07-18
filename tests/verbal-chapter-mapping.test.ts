import { describe, it, expect } from "vitest"
import { getAllChapters, getAllQuestions, getPracticeChapterGroups } from "@/lib/content"

/**
 * Every Verbal chapter surface — reader pins (pretest, recall check, problem
 * sets) and the composed practice-test pool — must serve only questions whose
 * skill matches the chapter. This is the invariant behind the 2026-07 student
 * complaint ("chapters serve questions from other Verbal skills"): the
 * original pins were dealt on a mechanical 8-question stride, so e.g. the
 * Strengthen chapter's problem sets held Evaluate and Inference items.
 *
 * Skill is judged by the question's topic label; the content validator
 * (verbal-topic-noncanonical) separately guarantees labels stay within the
 * canonical vocabulary, so label-matching here is trustworthy.
 *
 * Chapters with BROADER membership by design get an explicit allowlist:
 *   - verbal-01 (foundations): foundations bank + starter CR/RC items
 *   - verbal-02 (argument structure): structure labels; reader also drills
 *     basic Strengthen/Weaken items as structure-mapping practice
 *   - verbal-12 / verbal-20 (answer-trap training): cross-type by design
 *   - verbal-13 (reading process): structure pool; reader uses Main Idea /
 *     Detail / Inference items to exercise the reading process
 *   - verbal-21 (mixed timing): cross-skill by design
 */

/** topic-label pattern allowed on the chapter's READER pins */
const READER_ALLOWED: Record<string, RegExp> = {
  "verbal-01-foundations": /conclusion|premise|active reading|argument structure|assumption|strengthen|main idea|specific detail/i,
  "verbal-02-cr-argument-structure": /main conclusion|method of reasoning|role in argument|strengthen|weaken/i,
  "verbal-03-cr-assumption": /assumption/i,
  "verbal-04-cr-strengthen": /strengthen/i,
  "verbal-05-cr-weaken": /weaken/i,
  "verbal-06-cr-inference": /inference/i,
  "verbal-07-cr-evaluate": /evaluate/i,
  "verbal-08-cr-flaw": /flaw/i,
  "verbal-09-cr-paradox": /paradox|discrepancy|resolve/i,
  "verbal-10-cr-boldface": /boldface/i,
  "verbal-11-cr-complete": /complete/i,
  "verbal-12-cr-answer-traps": /./, // trap training spans all CR types by design
  "verbal-13-rc-reading-process": /structure|organization|reading process|main idea|specific detail|inference/i,
  "verbal-14-rc-main-idea": /main idea/i,
  "verbal-15-rc-detail": /detail/i,
  "verbal-16-rc-inference": /inference/i,
  "verbal-17-rc-application": /application/i,
  "verbal-18-rc-function": /function/i,
  "verbal-19-rc-attitude": /attitude/i,
  "verbal-20-rc-answer-traps": /./, // trap training spans all RC types by design
  "verbal-21-mixed-timing": /./, // cross-skill mixed review by design
}

/** topic-label pattern allowed in the chapter's composed TEST pool */
const POOL_ALLOWED: Record<string, RegExp> = {
  ...READER_ALLOWED,
  "verbal-02-cr-argument-structure": /main conclusion|method of reasoning|role in argument/i,
  "verbal-12-cr-answer-traps": /trap/i,
  "verbal-13-rc-reading-process": /structure|organization|reading process/i,
  "verbal-20-rc-answer-traps": /trap/i,
}

const topicById = new Map(getAllQuestions().map((q) => [q.id, q.subtopic]))
const verbalChapters = getAllChapters().filter(
  (c) => c.slug.startsWith("verbal") && c.slug !== "verbal-section-intro"
)

describe("verbal chapter question mapping", () => {
  it("covers every verbal chapter in the allowlist tables", () => {
    for (const c of verbalChapters) {
      expect(READER_ALLOWED[c.slug], c.slug).toBeDefined()
    }
  })

  it("reader pins (pretest, check, problem sets) match the chapter skill", () => {
    const offenders: string[] = []
    for (const c of verbalChapters) {
      const allowed = READER_ALLOWED[c.slug]
      const visit = (ids: readonly string[], where: string) => {
        for (const id of ids) {
          const topic = topicById.get(id)
          if (topic === undefined || !allowed.test(topic)) {
            offenders.push(`${c.slug} ${where}: ${id} [${topic}]`)
          }
        }
      }
      for (const s of c.sections) {
        visit(s.pretestQuestionIds, `pretest(${s.id})`)
        visit(s.checkQuestionIds, `check(${s.id})`)
      }
      for (const ps of c.problemSets) visit(ps.questionIds, `pset(${ps.difficulty})`)
    }
    expect(offenders).toEqual([])
  })

  it("composed practice-test pools match the chapter skill", () => {
    const offenders: string[] = []
    for (const g of getPracticeChapterGroups()) {
      if (!g.chapterSlug.startsWith("verbal") || g.comingSoon) continue
      const allowed = POOL_ALLOWED[g.chapterSlug]
      expect(allowed, g.chapterSlug).toBeDefined()
      for (const t of g.tests) {
        for (const id of t.questionIds) {
          const topic = topicById.get(id)
          if (topic === undefined || !allowed.test(topic)) {
            offenders.push(`${t.id}: ${id} [${topic}]`)
          }
        }
      }
    }
    expect(offenders).toEqual([])
  })
})

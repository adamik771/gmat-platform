import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { getChapterTest, getQuestionsByIds } from "@/lib/content"
import { PREVIOUS_PRACTICE_TEST_IDS } from "@/lib/previous-practice-tests"
import { PRACTICE_RESUME_TTL_MS, restorePracticeResumeVersions, type PracticeResumeSnapshot } from "@/lib/practice-resume"

const now = Date.parse("2026-09-15T12:00:00Z")
const userId = "synthetic-student"

function fixture(slug: string): PracticeResumeSnapshot {
  const questions = getQuestionsByIds([...PREVIOUS_PRACTICE_TEST_IDS[slug]])
  return {
    version: 1, userId, slug, questionIds: questions.map(q => q.id),
    states: questions.map((q, index) => ({
      selected: index === 0 ? 0 : null,
      ...(q.twoPartColumns?.length ? { twoPartSelections: q.twoPartColumns.map(() => null) } : {}),
      submitted: index === 0, elapsedMs: index === 0 ? 52_000 : 0,
      hintsRevealed: 0, confidence: index === 0 ? "medium" : null,
      firstInteractionMs: index === 0 ? 15_000 : null,
    })),
    currentIdx: 1, currentElapsedMs: 4000, mode: "exam", isReplay: false, updatedAt: now,
  }
}

describe("September 15 standalone test compatibility", () => {
  it("resumes every affected pre-batch membership without crediting its answers to new questions", () => {
    expect(Object.keys(PREVIOUS_PRACTICE_TEST_IDS)).toHaveLength(21)
    for (const [slug, ids] of Object.entries(PREVIOUS_PRACTICE_TEST_IDS)) {
      const current = getQuestionsByIds(getChapterTest(slug)!.questionIds)
      const previous = getQuestionsByIds([...ids])
      expect(previous.map(q => q.id)).toEqual(ids)
      if (slug.startsWith("ch-quant-")) expect(previous.every(q => q.section === "Quant" && q.type !== "Data Sufficiency")).toBe(true)
      const snapshot = fixture(slug)
      for (const raw of [snapshot, JSON.stringify(snapshot)]) {
        const restored = restorePracticeResumeVersions(raw, current, previous, { userId, slug, now })
        expect(restored?.previousVersion).toBe(true)
        expect(restored?.questions.map(q => q.id)).toEqual(ids)
        expect(restored?.snapshot).toEqual(snapshot)
      }
    }
  })

  it("starts new attempts with the current membership, not the compatibility list", () => {
    const slug = "ch-quant-27-probability-t1"
    const current = getQuestionsByIds(getChapterTest(slug)!.questionIds)
    const old = getQuestionsByIds([...PREVIOUS_PRACTICE_TEST_IDS[slug]])
    expect(restorePracticeResumeVersions(null, current, old, { userId, slug, now })).toBeNull()
    const snapshot = fixture(slug)
    snapshot.questionIds = current.map(q => q.id)
    snapshot.states = current.map(() => ({ selected: null, submitted: false, elapsedMs: 0, hintsRevealed: 0, confidence: null, firstInteractionMs: null }))
    const restored = restorePracticeResumeVersions(snapshot, current, old, { userId, slug, now })
    expect(restored?.previousVersion).toBe(false)
    expect(restored?.questions).toEqual(current)
  })

  it("retains user, route, expiration, membership and answer validation on old decks", () => {
    const slug = "ch-quant-27-probability-t1"
    const current = getQuestionsByIds(getChapterTest(slug)!.questionIds)
    const old = getQuestionsByIds([...PREVIOUS_PRACTICE_TEST_IDS[slug]])
    const expected = { userId, slug, now }
    for (const raw of [
      { ...fixture(slug), userId: "another-student" },
      { ...fixture(slug), slug: "ch-quant-27-probability-t2" },
      { ...fixture(slug), updatedAt: now - PRACTICE_RESUME_TTL_MS - 1 },
      { ...fixture(slug), questionIds: ["unknown", ...fixture(slug).questionIds.slice(1)] },
      { ...fixture(slug), states: [{ ...fixture(slug).states[0], selected: 90 }, ...fixture(slug).states.slice(1)] },
    ]) expect(restorePracticeResumeVersions(raw, current, old, expected)).toBeNull()
  })

  it("keeps previous questions behind the existing entitlement gate and off fresh selection", () => {
    const page = readFileSync("src/app/(app)/practice/session/[slug]/page.tsx", "utf8")
    expect(page.indexOf("if (parsedForGate.testIndex > practiceTestsAllowed(tier))")).toBeLessThan(page.indexOf("const previousQuestions ="))
    expect(page).toContain("questions={delivered}")
    expect(page).toContain("previousQuestions={previousQuestions}")
    const client = readFileSync("src/app/(app)/practice/session/[slug]/SessionClient.tsx", "utf8")
    expect(client).toContain("useState(questionsProp)")
    expect(client).toContain("This is the previous version of the test you started.")
  })
})

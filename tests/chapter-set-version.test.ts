import { describe, expect, it } from "vitest"
import { resolveGradedSetRun, resultMatchesCurrentSet } from "@/lib/chapter-set-version"

const current = [{ id: "new" }, { id: "shared" }]
const previous = [{ id: "old" }, { id: "shared" }]

describe("corrected chapter decks", () => {
  it("resumes an unversioned legacy run on its exact old deck, not a same-sized replacement", () => {
    const run = { idx: 1, answers: [true], at: 100 }
    const restored = resolveGradedSetRun(current, previous, run)!
    expect(restored.questions).toEqual(previous)
    expect(restored.run).toEqual({ ...run, questionIds: ["old", "shared"] })
    expect(restored.previousVersion).toBe(true)
    expect(run).not.toHaveProperty("questionIds")
    expect(current[0].id).toBe("new")
  })

  it("resumes newly saved current decks and unchanged legacy decks", () => {
    const run = { idx: 1, answers: [false], questionIds: ["new", "shared"] }
    expect(resolveGradedSetRun(current, previous, run)?.previousVersion).toBe(false)
    expect(resolveGradedSetRun(current, undefined, { idx: 1, answers: [true] })?.questions).toEqual(current)
  })

  it("rejects malformed, finished, unknown, reordered or duplicate checkpoints", () => {
    for (const run of [
      { idx: 0, answers: [] }, { idx: 2, answers: [true, true] },
      { idx: 1, answers: [] }, { idx: 0.5, answers: [true] },
      { idx: 1, answers: [true], questionIds: ["shared", "new"] },
      { idx: 1, answers: [true], questionIds: ["new", "new"] },
      { idx: 1, answers: [true], questionIds: ["unknown", "shared"] },
    ]) expect(resolveGradedSetRun(current, previous, run)).toBeNull()
  })

  it("keeps previous results historical without marking the current set passed", () => {
    expect(resultMatchesCurrentSet(current, previous, {})).toBe(false)
    expect(resultMatchesCurrentSet(current, previous, { questionIds: ["old", "shared"] })).toBe(false)
    expect(resultMatchesCurrentSet(current, previous, { questionIds: ["new", "shared"] })).toBe(true)
    expect(resultMatchesCurrentSet(current, undefined, {})).toBe(true)
    expect(resultMatchesCurrentSet(current, undefined, undefined)).toBe(false)
  })
})

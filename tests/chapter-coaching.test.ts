import { describe, it, expect } from "vitest"
import { selectChapterCoachingState } from "@/lib/chapter-coaching"

describe("selectChapterCoachingState", () => {
  it("returns 'generic' when the chapter has NO problem sets (the welcome/intro crash case)", () => {
    // Regression: this case previously fell through to belowTargetRows.reduce()
    // on an empty array and crashed the completion card on the welcome + section
    // intro chapters. It must resolve to a state that does NOT read belowTargetRows.
    expect(
      selectChapterCoachingState({
        hasProblemSets: false,
        noneAttempted: false,
        attemptedCount: 0,
        belowTargetCount: 0,
      })
    ).toBe("generic")
  })

  it("returns 'none_attempted' when there are sets but none attempted", () => {
    expect(
      selectChapterCoachingState({
        hasProblemSets: true,
        noneAttempted: true,
        attemptedCount: 0,
        belowTargetCount: 0,
      })
    ).toBe("none_attempted")
  })

  it("returns 'all_above_target' when every attempted set met its target", () => {
    expect(
      selectChapterCoachingState({
        hasProblemSets: true,
        noneAttempted: false,
        attemptedCount: 2,
        belowTargetCount: 0,
      })
    ).toBe("all_above_target")
  })

  it("returns 'has_weakest' (safe to reduce) only when at least one row is below target", () => {
    expect(
      selectChapterCoachingState({
        hasProblemSets: true,
        noneAttempted: false,
        attemptedCount: 3,
        belowTargetCount: 1,
      })
    ).toBe("has_weakest")
  })

  it("returns 'generic' on the count/row mismatch (reported attempts but no rows match the chapter's sets)", () => {
    expect(
      selectChapterCoachingState({
        hasProblemSets: true,
        noneAttempted: false,
        attemptedCount: 0,
        belowTargetCount: 0,
      })
    ).toBe("generic")
  })

  it("NEVER returns 'has_weakest' when belowTargetCount is 0 (guards the empty reduce)", () => {
    for (const hasProblemSets of [true, false]) {
      for (const noneAttempted of [true, false]) {
        for (const attemptedCount of [0, 1, 5]) {
          const state = selectChapterCoachingState({
            hasProblemSets,
            noneAttempted,
            attemptedCount,
            belowTargetCount: 0,
          })
          expect(state).not.toBe("has_weakest")
        }
      }
    }
  })
})

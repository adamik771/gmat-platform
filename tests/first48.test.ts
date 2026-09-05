import { describe, it, expect } from "vitest"
import {
  deriveFirst48Steps,
  first48Complete,
  type First48Signals,
} from "@/app/(app)/dashboard/first48"

const FRESH: First48Signals = {
  profileSet: false,
  explainerOpened: false,
  officialExamCount: 0,
  chapterStarted: false,
  practiceSessionCount: 0,
  studyDayCount: 0,
  chaptersRead: 0,
  reviewUsed: false,
}

describe("deriveFirst48Steps — fresh user", () => {
  const steps = deriveFirst48Steps(FRESH)

  it("returns the 8 steps across two days, all incomplete", () => {
    expect(steps).toHaveLength(8)
    expect(steps.every((s) => !s.done)).toBe(true)
    expect(steps.filter((s) => s.day === 1)).toHaveLength(5)
    expect(steps.filter((s) => s.day === 2)).toHaveLength(3)
  })

  it("puts profile setup first — the single next action", () => {
    expect(steps[0].key).toBe("profile")
    expect(steps.findIndex((s) => !s.done)).toBe(0)
  })

  it("is not complete", () => {
    expect(first48Complete(steps)).toBe(false)
  })
})

describe("deriveFirst48Steps — partial progress", () => {
  it("profile completes via the wizard OR via target+date; next action advances", () => {
    const steps = deriveFirst48Steps({ ...FRESH, profileSet: true })
    expect(steps[0].done).toBe(true)
    expect(steps.findIndex((s) => !s.done)).toBe(1) // exam-types explainer
  })

  it("logging the baseline flips baseline, plan, AND the exam-types step", () => {
    const steps = deriveFirst48Steps({ ...FRESH, officialExamCount: 1 })
    const byKey = Object.fromEntries(steps.map((s) => [s.key, s.done]))
    expect(byKey["baseline"]).toBe(true)
    // The plan derives from the baseline — it exists the moment the score is in.
    expect(byKey["plan"]).toBe(true)
    // Taking an official exam demonstrates the officials-vs-mocks understanding.
    expect(byKey["exam-types"]).toBe(true)
    expect(byKey["profile"]).toBe(false)
  })

  it("first activity completes from a chapter start OR a practice session", () => {
    expect(
      deriveFirst48Steps({ ...FRESH, chapterStarted: true }).find(
        (s) => s.key === "first-activity"
      )?.done
    ).toBe(true)
    expect(
      deriveFirst48Steps({ ...FRESH, practiceSessionCount: 1 }).find(
        (s) => s.key === "first-activity"
      )?.done
    ).toBe(true)
  })

  it("day-2 focus step needs a second distinct study day", () => {
    expect(
      deriveFirst48Steps({ ...FRESH, studyDayCount: 1 }).find(
        (s) => s.key === "todays-focus"
      )?.done
    ).toBe(false)
    expect(
      deriveFirst48Steps({ ...FRESH, studyDayCount: 2 }).find(
        (s) => s.key === "todays-focus"
      )?.done
    ).toBe(true)
  })

  it("chapter cycle needs a fully-read chapter AND practice", () => {
    expect(
      deriveFirst48Steps({ ...FRESH, chaptersRead: 1 }).find(
        (s) => s.key === "chapter-cycle"
      )?.done
    ).toBe(false)
    expect(
      deriveFirst48Steps({
        ...FRESH,
        chaptersRead: 1,
        practiceSessionCount: 1,
      }).find((s) => s.key === "chapter-cycle")?.done
    ).toBe(true)
  })

  it("review loop completes from real review/error-log usage", () => {
    expect(
      deriveFirst48Steps({ ...FRESH, reviewUsed: true }).find(
        (s) => s.key === "review-loop"
      )?.done
    ).toBe(true)
  })
})

describe("deriveFirst48Steps — complete account", () => {
  it("all steps done -> guide reports complete (collapses in the UI)", () => {
    const steps = deriveFirst48Steps({
      profileSet: true,
      explainerOpened: true,
      officialExamCount: 1,
      chapterStarted: true,
      practiceSessionCount: 3,
      studyDayCount: 2,
      chaptersRead: 1,
      reviewUsed: true,
    })
    expect(steps.every((s) => s.done)).toBe(true)
    expect(first48Complete(steps)).toBe(true)
  })
})

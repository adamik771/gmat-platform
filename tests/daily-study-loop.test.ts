import { describe, expect, it } from "vitest"
import { deriveDailyStudyStatus } from "@/lib/daily-study-loop"

describe("daily study loop", () => {
  it("keeps one concrete remaining target before completion", () => {
    expect(deriveDailyStudyStatus(17, 25)).toEqual({
      complete: false,
      answered: 17,
      goal: 25,
      remaining: 8,
    })
  })

  it("closes the loop at the target and never reports negative remaining work", () => {
    expect(deriveDailyStudyStatus(31, 25)).toEqual({
      complete: true,
      answered: 31,
      goal: 25,
      remaining: 0,
    })
  })

  it("sanitizes malformed counters instead of producing a broken UI", () => {
    expect(deriveDailyStudyStatus(Number.NaN, 0)).toEqual({
      complete: false,
      answered: 0,
      goal: 1,
      remaining: 1,
    })
  })
})

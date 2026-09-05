import { describe, expect, it } from "vitest"
import {
  MIN_ATTEMPTS_FOR_STATS,
  assessDifficultyFit,
  computeItemStats,
} from "@/lib/psychometrics"

describe("authored difficulty calibration", () => {
  it("flags Advanced items that students answer like easy items", () => {
    expect(assessDifficultyFit("Advanced", 0.72, 40)).toBe("too-easy")
    expect(assessDifficultyFit("Advanced", 0.48, 40)).toBe("on-target")
  })

  it("uses tier-relative bands instead of one universal p-value window", () => {
    expect(assessDifficultyFit("Beginner", 0.42, 30)).toBe("too-hard")
    expect(assessDifficultyFit("Intermediate", 0.42, 30)).toBe("on-target")
    expect(assessDifficultyFit("Advanced", 0.42, 30)).toBe("on-target")
  })

  it("does not judge a difficulty label before the sample floor", () => {
    expect(
      assessDifficultyFit("Advanced", 0.9, MIN_ATTEMPTS_FOR_STATS - 1)
    ).toBe("insufficient")
  })
})

describe("item statistics", () => {
  it("excludes the item itself from each student's ability estimate", () => {
    const rows = Array.from({ length: 6 }, (_, index) => ({
      user_id: "u1",
      question_id: `q${index}`,
      section: "Quant" as const,
      topic: "Arithmetic",
      is_correct: index < 4,
    }))
    const stats = computeItemStats(rows)
    expect(stats).toHaveLength(6)
    expect(stats.every((item) => item.attempts === 1)).toBe(true)
  })
})

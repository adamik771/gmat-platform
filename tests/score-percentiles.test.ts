import { describe, it, expect } from "vitest"
import {
  totalPercentile,
  sectionPercentile,
  percentileBand,
} from "@/lib/score-percentiles"

// Locks current-GMAT total percentiles to GMAC's July 2025 concordance table.
// Section values remain rounded interpretations of GMAC's section tables.

describe("totalPercentile", () => {
  it.each([
    [805, 100],
    [785, 100],
    [745, 99.7],
    [735, 99.5],
    [725, 99.1],
    [715, 98.8],
    [705, 98],
    [695, 97.4],
    [685, 95.8],
    [675, 94.8],
    [665, 92.1],
    [655, 90.5],
    [645, 86.7],
    [635, 81.9],
    [605, 70.3],
    [565, 50.9],
    [545, 41.9],
    [505, 27.1],
    [425, 9.6],
    [305, 1.3],
    [255, 0.4],
    [205, 0.1],
  ])("total %i → %ith percentile", (score, expected) => {
    expect(totalPercentile(score)).toBe(expected)
  })
})

describe("sectionPercentile", () => {
  it.each([
    ["Quant", 90, 100],
    ["Quant", 84, 85],
    ["Quant", 78, 50],
    ["Quant", 75, 32],
    ["Quant", 60, 1],
    ["Verbal", 90, 100],
    ["Verbal", 84, 89],
    ["Verbal", 82, 74],
    ["Verbal", 75, 18],
    ["Verbal", 60, 1],
    ["DI", 90, 100],
    ["DI", 89, 100],
    ["DI", 84, 97],
    ["DI", 76, 53],
    ["DI", 75, 47],
    ["DI", 60, 4],
  ] as const)("%s %i → %ith percentile", (section, score, expected) => {
    expect(sectionPercentile(section, score)).toBe(expected)
  })
})

describe("percentileBand", () => {
  it("reserves the 100th band for scores GMAC reports at 100.0%", () => {
    expect(percentileBand(totalPercentile(785))).toBe("100th percentile (top 1%)")
    expect(percentileBand(100)).toBe("100th percentile (top 1%)")
  })
  it("keeps decimal top-one-percent values distinct from 100", () => {
    expect(percentileBand(totalPercentile(735))).toBe(
      "99.5th percentile (top 1%)"
    )
    expect(percentileBand(99)).toBe("99th percentile (top 1%)")
  })
})

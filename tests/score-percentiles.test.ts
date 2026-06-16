import { describe, it, expect } from "vitest"
import { totalPercentile, sectionPercentile } from "@/lib/score-percentiles"

// Locks the GMAT Focus percentile tables (population data 2020-2025) so the
// values can't silently regress again. Spot-values transcribed from the
// official-style tables; key fix: 715 is the 99th band (was wrongly 92).

describe("totalPercentile", () => {
  it.each([
    [805, 100],
    [745, 100],
    [735, 100],
    [725, 99],
    [715, 99], // regression: previously returned 92
    [705, 98],
    [695, 97],
    [685, 96],
    [675, 95],
    [665, 92],
    [655, 91],
    [645, 87],
    [635, 82],
    [605, 70],
    [565, 51],
    [545, 42],
    [505, 27],
    [425, 10],
    [305, 1],
    [255, 0],
    [205, 0],
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

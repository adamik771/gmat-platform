import { describe, expect, it } from "vitest"
import {
  convertFocusToOld,
  convertOldToFocus,
  focusPercentile,
  formatPercentileRange,
  formatScoreRange,
  getConcordanceRows,
} from "@/lib/score-conversion"

describe("official GMAC score concordance", () => {
  it("contains every valid current-GMAT total exactly once", () => {
    const rows = getConcordanceRows()
    expect(rows).toHaveLength(61)
    expect(rows.reduce((count, row) => count + row.old.length, 0)).toBe(121)
    expect(rows.map((row) => row.focus)).toEqual(
      Array.from({ length: 61 }, (_, index) => 205 + index * 10)
    )
  })

  it("returns the official range instead of interpolating a single value", () => {
    const focusResult = convertFocusToOld(695)
    expect(focusResult.equivalents).toEqual([740, 750])
    expect(focusResult.minPercentile).toBe(97.4)
    expect(focusResult.maxPercentile).toBe(97.4)

    const oldResult = convertOldToFocus(740)
    expect(oldResult.equivalents).toEqual([685, 695])
    expect(oldResult.minPercentile).toBe(95.8)
    expect(oldResult.maxPercentile).toBe(97.4)
  })

  it("locks the multi-row examples exposed by the official table", () => {
    expect(convertOldToFocus(760).equivalents).toEqual([715, 725, 735])
    expect(convertFocusToOld(615).equivalents).toEqual([650, 660, 670, 680])
    expect(convertOldToFocus(790).equivalents).toEqual([785, 795, 805])
  })

  it("clamps and snaps typed values to real score ticks", () => {
    expect(convertFocusToOld(699).sourceScore).toBe(695)
    expect(convertOldToFocus(744).sourceScore).toBe(740)
    expect(convertFocusToOld(Number.NaN).sourceScore).toBe(205)
    expect(convertOldToFocus(999).sourceScore).toBe(800)
  })

  it("uses the same official percentiles across the product", () => {
    expect(focusPercentile(735)).toBe(99.5)
    expect(focusPercentile(745)).toBe(99.7)
    expect(focusPercentile(785)).toBe(100)
  })

  it("formats exact values and ranges without false precision", () => {
    expect(formatScoreRange(705, 705)).toBe("705")
    expect(formatScoreRange(685, 695)).toBe("685-695")
    expect(formatPercentileRange(97.4, 97.4)).toBe("97.4%")
    expect(formatPercentileRange(95.8, 97.4)).toBe("95.8-97.4%")
  })
})

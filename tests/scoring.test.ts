import { describe, it, expect } from "vitest"
import { accuracyToScore } from "@/lib/scoring"
import { accuracyToScore as fromDiagnostic } from "@/lib/diagnostic"
import { accuracyToScore as fromMock } from "@/lib/mock"

describe("accuracyToScore", () => {
  it("anchors the endpoints at 205 and 805", () => {
    expect(accuracyToScore(0)).toBe(205)
    expect(accuracyToScore(1)).toBe(805)
  })

  it("maps mid accuracies onto the formula 205 + round(acc*600/10)*10", () => {
    expect(accuracyToScore(0.5)).toBe(505)
    expect(accuracyToScore(0.75)).toBe(655)
    expect(accuracyToScore(0.25)).toBe(355)
  })

  it("clamps out-of-range accuracy into [205, 805]", () => {
    expect(accuracyToScore(-0.5)).toBe(205)
    expect(accuracyToScore(2)).toBe(805)
  })

  it("only ever produces valid GMAT Focus totals (in [205,805], ending in 5)", () => {
    for (let i = 0; i <= 100; i++) {
      const s = accuracyToScore(i / 100)
      expect(s).toBeGreaterThanOrEqual(205)
      expect(s).toBeLessThanOrEqual(805)
      expect(s % 10).toBe(5)
    }
  })

  it("is monotonic non-decreasing in accuracy", () => {
    let prev = -1
    for (let i = 0; i <= 100; i++) {
      const s = accuracyToScore(i / 100)
      expect(s).toBeGreaterThanOrEqual(prev)
      prev = s
    }
  })

  it("is a single shared source — diagnostic + mock re-export the same fn", () => {
    // Guards the 'keep them in sync' rule: both surfaces must be identical.
    expect(fromDiagnostic).toBe(accuracyToScore)
    expect(fromMock).toBe(accuracyToScore)
  })
})

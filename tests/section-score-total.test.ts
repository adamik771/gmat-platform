import { describe, it, expect } from "vitest"
import { sectionScoresToTotal } from "@/lib/scoring"

describe("sectionScoresToTotal (GMAT Focus section→total estimate)", () => {
  it("maps the endpoints exactly (3×60 → 205, 3×90 → 805)", () => {
    expect(sectionScoresToTotal(60, 60, 60)).toBe(205)
    expect(sectionScoresToTotal(90, 90, 90)).toBe(805)
  })

  it("matches the published linear formula at the midpoint", () => {
    // 75/75/75 → (225-180) × 20/3 + 205 = 505
    expect(sectionScoresToTotal(75, 75, 75)).toBe(505)
  })

  it("is equal-weight: section order doesn't change the total", () => {
    expect(sectionScoresToTotal(80, 70, 75)).toBe(sectionScoresToTotal(75, 80, 70))
    expect(sectionScoresToTotal(82, 68, 90)).toBe(sectionScoresToTotal(90, 82, 68))
  })

  it("always returns a valid GMAT Focus score (205-805, ending in 5)", () => {
    for (let q = 60; q <= 90; q++) {
      for (const [v, di] of [
        [60, 60],
        [75, 75],
        [90, 90],
        [82, 68],
      ] as const) {
        const t = sectionScoresToTotal(q, v, di)
        expect(t).toBeGreaterThanOrEqual(205)
        expect(t).toBeLessThanOrEqual(805)
        expect(t % 10).toBe(5)
      }
    }
  })

  it("clamps out-of-range section inputs to 60-90", () => {
    expect(sectionScoresToTotal(40, 60, 60)).toBe(205) // 40 clamps up to 60
    expect(sectionScoresToTotal(99, 90, 90)).toBe(805) // 99 clamps down to 90
  })

  it("guards non-finite inputs (NaN/Infinity) — never returns NaN", () => {
    expect(Number.isFinite(sectionScoresToTotal(NaN, 75, 75))).toBe(true)
    expect(Number.isFinite(sectionScoresToTotal(75, Infinity, 75))).toBe(true)
    expect(sectionScoresToTotal(NaN, NaN, NaN)).toBe(205) // non-finite → floor (60) → 205
  })
})

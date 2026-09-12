import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"
import AnalyticsClient, { type ScoreTrendPoint } from "@/app/(app)/analytics/AnalyticsClient"
import { difficultyLabel, formatQuestionTime, withMissingWeeks } from "@/app/(app)/analytics/presentation"

vi.mock("next/dynamic", () => ({ default: () => () => createElement("div", { "data-chart": true }) }))

function week(weekKey: string): ScoreTrendPoint {
  return { weekKey, weekLabel: weekKey, index: 0, overallAccuracy: 75, quant: 75, verbal: null, di: null, attempts: 12, sectionAttempts: { Quant: 12, Verbal: 0, DI: 0 } }
}

describe("available-data-first analytics", () => {
  it.each([[0, "0:00"], [0.4, "0:24"], [1.75, "1:45"], [59.8 / 60, "1:00"], [2.13333333, "2:08"]])("formats %s minutes without decimal-minute labels", (minutes, expected) => {
    expect(formatQuestionTime(Number(minutes))).toBe(expected)
  })
  it("does not present invalid timing as zero", () => {
    expect(formatQuestionTime(NaN)).toBe("Not recorded")
    expect(formatQuestionTime(-1)).toBe("Not recorded")
  })
  it("uses practice's difficulty vocabulary", () => {
    expect(["Beginner", "Intermediate", "Advanced", "Unknown"].map(difficultyLabel)).toEqual(["Easy", "Medium", "Hard", "Unknown"])
  })
  it("leaves absent weeks as gaps, never zero-accuracy weeks", () => {
    const original = [week("2026-08-30"), week("2026-09-13")]
    const chart = withMissingWeeks(original)
    expect(chart.map((point) => point.weekKey)).toEqual(["2026-08-30", "2026-09-06", "2026-09-13"])
    expect(chart[1].overallAccuracy).toBeNull()
    expect(chart[1].quant).toBeNull()
    expect(chart.reduce((total, point) => total + point.attempts, 0)).toBe(24)
    expect(original).toHaveLength(2)
  })
  it("puts populated topic, timing and confidence data before a compact absent trend", () => {
    const html = renderToStaticMarkup(createElement(AnalyticsClient, {
      scope: { attempts: 12, trendStart: "2026-07-18", trendEnd: "2026-09-12" },
      topicRows: [{ topic: "Fixture topic", section: "Quant", attempts: 12, accuracy: 75 }],
      pacingRows: [{ section: "Quant", avgMin: 0.4, targetMin: 2, over: false, attempts: 8 }],
      difficultyTimingRows: [{ section: "Quant", difficulty: "Beginner", attempts: 3, avgMin: 0.4, accuracy: 67 }],
      scoreTrend: [week("2026-09-06")], errorPatterns: null,
      calibration: { totalRated: 1, verdict: "well-calibrated", headline: "Definitive claim that should not be rendered", tiers: [
        { level: "high", label: "High", total: 1, correct: 1, accuracy: 1 },
        { level: "med", label: "Medium", total: 0, correct: 0, accuracy: 0 },
      ] },
    }))
    expect(html.indexOf("Accuracy by topic")).toBeLessThan(html.indexOf("Accuracy over time"))
    expect(html.indexOf("Confidence and accuracy")).toBeLessThan(html.indexOf("Accuracy over time"))
    expect(html).toContain("0:24")
    expect(html).toContain("8 timed attempts")
    expect(html).toContain("1 / 1 answers")
    expect(html).toContain("Small sample;")
    expect(html).toContain("85% product benchmark")
    expect(html).toContain("retakes and review attempts")
    expect(html).toContain("Easy")
    expect(html).not.toContain("Definitive claim")
    expect(html).not.toContain("data-chart")
    expect(html).not.toContain("0.4m")
  })
})

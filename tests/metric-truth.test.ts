import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"
import AnalyticsClient from "@/app/(app)/analytics/AnalyticsClient"

vi.mock("next/dynamic", () => ({ default: () => () => null }))

function read(relativePath: string) {
  return readFileSync(resolve(relativePath), "utf8")
}

describe("metric truthfulness", () => {
  const analyticsPage = read("src/app/(app)/analytics/page.tsx")
  const analyticsClient = read("src/app/(app)/analytics/AnalyticsClient.tsx")
  const trajectoryChart = read(
    "src/app/(app)/analytics/ScoreTrajectoryChart.tsx"
  )
  const dashboard = read("src/app/(app)/dashboard/page.tsx")
  const mockReport = read("src/app/(app)/mock/report/page.tsx")

  it("does not convert ordinary practice accuracy into a GMAT score", () => {
    const combined = `${analyticsPage}\n${analyticsClient}\n${dashboard}\n${mockReport}`

    expect(combined).not.toContain("accuracyToScore")
    expect(combined).not.toContain("accuracyToSectionScore")
    expect(combined).not.toContain("estimatedTotal")
    expect(combined).not.toContain("Prediction Accuracy")
    expect(dashboard).not.toContain("205–805 estimate")
    expect(analyticsClient).not.toContain("readiness band")
  })

  it("labels analytics as accuracy and includes all three sections", () => {
    const html = renderToStaticMarkup(createElement(AnalyticsClient, {
      scope: { attempts: 40, trendStart: "2026-07-18", trendEnd: "2026-09-12" },
      topicRows: [], pacingRows: [], difficultyTimingRows: [], errorPatterns: null, calibration: null,
      scoreTrend: [
        {
          weekKey: "2026-08-30", weekLabel: "Aug 30", index: 0,
          overallAccuracy: 83, quant: 50, verbal: 75, di: 100,
          attempts: 12, sectionAttempts: { Quant: 2, Verbal: 4, DI: 6 },
        },
        {
          weekKey: "2026-09-06", weekLabel: "Sep 6", index: 1,
          overallAccuracy: 50, quant: 67, verbal: 40, di: 50,
          attempts: 10, sectionAttempts: { Quant: 3, Verbal: 5, DI: 2 },
        },
      ],
    }))

    expect(html).toMatch(/<h2\b[^>]*>Accuracy over time<\/h2>/)
    expect(html).toContain("Weekly values and sample sizes")
    expect(html).toContain("Week of 2026-08-30: 83% · 12 attempts")
    expect(html).toContain("Quant 50% (2); Verbal 75% (4); DI 100% (6)")
    expect(html).toContain("Quant 67% (3); Verbal 40% (5); DI 50% (2)")
    expect(html).toContain("22 question attempts in 2 weeks with data, weighted by question count")
    expect(html).toContain("Retakes included; review and mixed-review sessions excluded")
    expect(html).not.toMatch(/predicted score|estimated GMAT|readiness band/i)

    // The lazy chart keeps the same percentage metric as its rendered text alternative.
    expect(trajectoryChart).toContain('dataKey="overallAccuracy"')
    expect(trajectoryChart).toContain('dataKey="quant"')
    expect(trajectoryChart).toContain('dataKey="verbal"')
    expect(trajectoryChart).toContain('dataKey="di"')
    expect(trajectoryChart).toContain("domain={[0, 100]}")
  })

  it("reports mock accuracy without estimated totals or percentiles", () => {
    expect(mockReport).toContain("Question-weighted accuracy")
    expect(mockReport).toContain("percentage points")
    expect(mockReport).toContain("Section accuracy")
    expect(mockReport).not.toContain("totalPercentile")
    expect(mockReport).not.toContain("sectionPercentile")
    expect(mockReport).not.toContain("Final Total")
  })
})

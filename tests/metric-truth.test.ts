import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

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
    expect(analyticsClient).toContain("accuracy trajectory")
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

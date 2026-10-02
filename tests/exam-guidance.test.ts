import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const checklist = readFileSync(
  resolve("src/app/(marketing)/exam-day-checklist/page.tsx"),
  "utf8"
)

describe("current exam-day guidance", () => {
  it("matches current GMAC timing, review, and score-report policies", () => {
    expect(checklist).toContain("at least 30 minutes before your appointment")
    expect(checklist).toContain("bookmark and review as many questions")
    expect(checklist).toContain("change only three answers per section")
    expect(checklist).toContain("Candidates no longer accept or cancel a score")
    expect(checklist).toContain("typically available within 3–5 days")
  })

  it("links the official sources and excludes superseded advice", () => {
    expect(checklist).toContain(
      "https://www.mba.com/exams/gmat-exam/plan-for-exam-day/taking-the-exam-at-a-test-center"
    )
    expect(checklist).toContain(
      "https://www.mba.com/exams/gmat-exam/scores/official-score-reports"
    )
    expect(checklist).not.toContain("arrived 15 minutes early")
    expect(checklist).not.toContain("three section bookmarks")
    expect(checklist).not.toContain("asks whether you accept or cancel")
    expect(checklist).not.toContain("within 7-20 days")
  })
})

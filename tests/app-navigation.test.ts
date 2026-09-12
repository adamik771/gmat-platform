import { describe, expect, it } from "vitest"
import { getAppSection, getActiveAppView, routeMatches } from "../src/lib/app-navigation"

describe("workspace navigation", () => {
  it.each([
    ["/study-plan/adaptive", "Today", "Long-term plan"],
    ["/chapters/quant-01", "Learn", "Interactive chapters"],
    ["/learn/algebra", "Learn", "Supporting readings"],
    ["/guides/formula-sheet", "Learn", "Reference library"],
    ["/practice/history/123", "Practice", "History"],
    ["/test-builder", "Practice", "Custom set"],
    ["/practice/session/algebra", "Practice", "Chapter sets"],
    ["/review/all", "Review", "Full queue"],
    ["/review/saved", "Review", "Saved"],
    ["/error-log", "Review", "Error log"],
    ["/score-calculator", "Analytics", "Score calculator"],
  ])("keeps %s in one parent and the most specific view", (path, parent, view) => {
    expect(getAppSection(path)?.label).toBe(parent)
    expect(getActiveAppView(path)?.label).toBe(view)
  })

  it("does not select unrelated route prefixes", () => {
    expect(routeMatches("/reviewer", "/review")).toBe(false)
    expect(getAppSection("/settings")).toBeUndefined()
    expect(getAppSection("/admin")).toBeUndefined()
    expect(getAppSection("/mock/report")?.label).toBe("Exams")
    expect(getActiveAppView("/mock/report")).toBeUndefined()
  })
})

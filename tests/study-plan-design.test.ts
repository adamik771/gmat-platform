import { describe, expect, it } from "vitest"
import { nextSevenPlanDays, recentActivityDays } from "@/app/(app)/study-plan/presentation"
import type { DailySuggestion } from "@/lib/study-plan-engine"
import { buildWeeklyCadence } from "@/lib/study-plan-engine"

const cadence: DailySuggestion[] = Array.from({ length: 7 }, (_, index) => ({ type: "practice", href: "/practice", label: "Weekday " + index }))

describe("compact study-plan presentation", () => {
  it("does not introduce a full mock through weekly cadence", () => {
    const suggestions = buildWeeklyCadence({ todaysFocus: [], weakAreas: [], reviewDueCount: 4 }, [{ slug: "fixture", title: "Fixture" }], 15)
    expect(suggestions).toHaveLength(7)
    expect(suggestions.some((item) => item.type === "mock" || item.href.startsWith("/mock"))).toBe(false)
  })
  it("shows seven future-facing calendar dates across a week boundary", () => {
    const days = nextSevenPlanDays("2026-09-12", cadence, new Set(["2026-09-12"]))
    expect(days.map((day) => day.key)).toEqual(["2026-09-12", "2026-09-13", "2026-09-14", "2026-09-15", "2026-09-16", "2026-09-17", "2026-09-18"])
    expect(days[0].suggestion).toBeNull()
    expect(days[0].hasActivity).toBe(true)
    expect(days[1].suggestion?.label).toBe("Weekday 0")
    expect(days[6].suggestion?.label).toBe("Weekday 5")
  })
  it("keeps Saturday's existing cadence position and calendar math across DST", () => {
    const days = nextSevenPlanDays("2026-10-24", cadence, new Set())
    expect(days[0].weekdayLabel).toBe("Sat")
    expect(days[1].weekdayLabel).toBe("Sun")
    expect(days[1].date.getUTCDate()).toBe(25)
    const friday = nextSevenPlanDays("2026-09-11", cadence, new Set())
    expect(friday[1].suggestion?.label).toBe("Weekday 6")
  })
  it("scopes recorded activity to seven calendar days, not the entire loaded history", () => {
    expect(recentActivityDays("2026-09-12", new Set(["2026-08-25", "2026-09-05", "2026-09-06", "2026-09-12", "2026-09-13"]))).toBe(2)
  })
})

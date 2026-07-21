import { describe, it, expect } from "vitest"
import { daysUntil, isReplaySession, localDayIso } from "@/lib/utils"

describe("localDayIso — the shared local day boundary", () => {
  it("formats the LOCAL calendar day, not the UTC one", () => {
    // 23:30 local on Jan 5 — toISOString().slice(0,10) would report Jan 5
    // only in UTC+0; in a positive-offset zone it reports Jan 6's UTC day.
    const lateEvening = new Date(2026, 0, 5, 23, 30)
    expect(localDayIso(lateEvening)).toBe("2026-01-05")
    expect(localDayIso(new Date(2026, 11, 31, 0, 0))).toBe("2026-12-31")
  })
})

describe("daysUntil — local-midnight exam countdown", () => {
  const iso = (d: Date) => localDayIso(d)

  it("today is 0, tomorrow is 1 (regardless of timezone offset)", () => {
    const now = new Date()
    expect(daysUntil(iso(now))).toBe(0)
    const tomorrow = new Date(now)
    tomorrow.setDate(now.getDate() + 1)
    expect(daysUntil(iso(tomorrow))).toBe(1)
  })

  it("past dates go negative; malformed/missing dates are null", () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    expect(daysUntil(iso(yesterday))).toBe(-1)
    expect(daysUntil(null)).toBeNull()
    expect(daysUntil("not-a-date")).toBeNull()
    expect(daysUntil("2026-1-5")).toBeNull()
  })
})

describe("isReplaySession", () => {
  it("marks review, redo, and mixed-review sessions as replays", () => {
    expect(isReplaySession("review-quant-2026-07-21")).toBe(true)
    expect(isReplaySession("redo-algebra")).toBe(true)
    expect(isReplaySession("redo-review-quant-2026-07-21")).toBe(true)
    expect(isReplaySession("custom", "Mixed Review — Quant")).toBe(true)
    expect(isReplaySession("custom", "Mixed Review: Algebra Foundations")).toBe(true)
  })

  it("keeps fresh work in scope", () => {
    expect(isReplaySession("algebra")).toBe(false)
    expect(isReplaySession("custom", "Custom set")).toBe(false)
    expect(isReplaySession("ch-quant-05-t1")).toBe(false)
    expect(isReplaySession(null)).toBe(false)
  })
})

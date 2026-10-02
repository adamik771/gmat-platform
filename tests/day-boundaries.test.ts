import { describe, it, expect, vi } from "vitest"
import { daysUntil, isReplaySession, localDayIso } from "@/lib/utils"
import { computeStreaks } from "@/lib/gamification"

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

describe("timezone-aware day boundaries (the tz cookie path)", () => {
  it("localDayIso formats in the USER's zone, not the process zone", () => {
    // 02:00 UTC on Jul 21 is still Jul 20 in Los Angeles and already
    // Jul 21 in Oslo — the exact split that broke streaks in production
    // (server runs UTC; the client-rendered chart used browser days).
    const t = new Date("2026-07-21T02:00:00Z")
    expect(localDayIso(t, "America/Los_Angeles")).toBe("2026-07-20")
    expect(localDayIso(t, "Europe/Oslo")).toBe("2026-07-21")
    expect(localDayIso(t, "UTC")).toBe("2026-07-21")
  })

  it("localDayIso falls back to process-local on a malformed tz", () => {
    const t = new Date(2026, 0, 5, 23, 30)
    expect(localDayIso(t, "Not/AZone")).toBe(localDayIso(t))
    expect(localDayIso(t, "")).toBe(localDayIso(t))
    expect(localDayIso(t, null)).toBe(localDayIso(t))
  })

  it("daysUntil counts whole calendar days in the user's zone", () => {
    // Fixed clock so the assertion can't drift across a real midnight.
    vi.useFakeTimers()
    try {
      vi.setSystemTime(new Date("2026-07-21T02:00:00Z"))
      // Oslo is already on the 21st: the 22nd is 1 day out.
      expect(daysUntil("2026-07-22", "Europe/Oslo")).toBe(1)
      // Los Angeles is still on the 20th: the 22nd is 2 days out.
      expect(daysUntil("2026-07-22", "America/Los_Angeles")).toBe(2)
      // Same-day is 0; past dates go negative (drives "Exam passed").
      expect(daysUntil("2026-07-21", "Europe/Oslo")).toBe(0)
      expect(daysUntil("2026-07-20", "Europe/Oslo")).toBe(-1)
    } finally {
      vi.useRealTimers()
    }
  })

  it("computeStreaks anchors 'today' in the user's zone", () => {
    vi.useFakeTimers()
    try {
      vi.setSystemTime(new Date("2026-07-21T02:00:00Z"))
      // A student who practiced on their local Jul 20 (LA) still has a
      // live streak; under UTC-only math that day looked like yesterday.
      const days = new Set(["2026-07-19", "2026-07-20"])
      const la = computeStreaks(days, "America/Los_Angeles")
      expect(la.activeToday).toBe(true)
      expect(la.current).toBe(2)
      // In Oslo it IS already the 21st, so the same set is a
      // yesterday-anchored streak (grace) but not active today.
      const oslo = computeStreaks(days, "Europe/Oslo")
      expect(oslo.activeToday).toBe(false)
      expect(oslo.current).toBe(2)
    } finally {
      vi.useRealTimers()
    }
  })
})

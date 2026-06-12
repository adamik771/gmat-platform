import { describe, it, expect } from "vitest"
import {
  evaluateTutorUsage,
  TUTOR_HOURLY_LIMIT,
  TUTOR_DAILY_LIMIT,
} from "@/lib/tutor-rate-limit"

const HOUR = 60 * 60 * 1000
const DAY = 24 * HOUR
// Fixed "now" — 2026-06-12T12:00:00Z — so every window is deterministic.
const NOW = Date.UTC(2026, 5, 12, 12, 0, 0)
const LIMITS = { hourly: 3, daily: 5 }

/** n timestamps spread inside the last hour (newest first). */
function recent(n: number): number[] {
  return Array.from({ length: n }, (_, i) => NOW - (i + 1) * 60_000)
}

describe("evaluateTutorUsage", () => {
  it("allows with no prior usage", () => {
    expect(evaluateTutorUsage([], NOW, LIMITS)).toEqual({ allowed: true })
  })

  it("allows below both limits", () => {
    expect(evaluateTutorUsage(recent(2), NOW, LIMITS).allowed).toBe(true)
  })

  it("blocks at the hourly limit with reason=hourly", () => {
    const d = evaluateTutorUsage(recent(3), NOW, LIMITS)
    expect(d.allowed).toBe(false)
    expect(d.reason).toBe("hourly")
    expect(d.retryAfterSeconds).toBeGreaterThanOrEqual(1)
    // Oldest in-hour request is 3 min old -> ages out in ~57 min.
    expect(d.retryAfterSeconds).toBeLessThanOrEqual(60 * 60)
  })

  it("hourly window slides: old requests age out and free up allowance", () => {
    // 3 requests just over an hour ago -> outside the hourly window.
    const stale = [NOW - HOUR - 1, NOW - HOUR - 2, NOW - HOUR - 3]
    expect(evaluateTutorUsage(stale, NOW, LIMITS).allowed).toBe(true)
  })

  it("blocks at the daily limit with reason=daily even when the last hour is quiet", () => {
    // 5 requests spread 2-12 hours ago: zero in the last hour, daily cap hit.
    const spread = [2, 4, 6, 8, 12].map((h) => NOW - h * HOUR)
    const d = evaluateTutorUsage(spread, NOW, LIMITS)
    expect(d.allowed).toBe(false)
    expect(d.reason).toBe("daily")
    // Oldest is 12h old -> frees up in 12h.
    expect(d.retryAfterSeconds).toBe(12 * 60 * 60)
  })

  it("daily window slides: requests older than 24h don't count", () => {
    const ancient = [25, 30, 40, 48, 72].map((h) => NOW - h * HOUR)
    expect(evaluateTutorUsage(ancient, NOW, LIMITS).allowed).toBe(true)
  })

  it("daily trumps hourly in the reported reason when both are exceeded", () => {
    const burst = recent(5) // 5 in the last hour: >= both limits
    const d = evaluateTutorUsage(burst, NOW, LIMITS)
    expect(d.allowed).toBe(false)
    expect(d.reason).toBe("daily")
  })

  it("retryAfterSeconds is at least 1 even at the window edge", () => {
    // Oldest request ages out a few ms after NOW -> ceil + floor of 1s.
    const edge = [NOW - HOUR + 5, NOW - 1, NOW - 2]
    const d = evaluateTutorUsage(edge, NOW, LIMITS)
    expect(d.allowed).toBe(false)
    expect(d.retryAfterSeconds).toBeGreaterThanOrEqual(1)
  })

  it("default production limits are sane (hourly < daily, both positive)", () => {
    expect(TUTOR_HOURLY_LIMIT).toBeGreaterThan(0)
    expect(TUTOR_DAILY_LIMIT).toBeGreaterThan(TUTOR_HOURLY_LIMIT)
  })
})

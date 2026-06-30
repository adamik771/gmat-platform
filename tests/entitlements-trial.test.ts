import { describe, it, expect } from "vitest"
import {
  TRIAL_DAYS,
  trialDaysLeft,
  isWithinTrial,
  resolveAccess,
  accessGrants,
  readTrialStartedAt,
} from "@/lib/entitlements"

// Fixed reference instant so every case is deterministic.
const NOW = new Date("2026-07-01T12:00:00.000Z")
const DAY = 24 * 60 * 60 * 1000
const ago = (days: number) => new Date(NOW.getTime() - days * DAY).toISOString()

describe("trialDaysLeft", () => {
  it("returns 0 for missing / unparseable timestamps", () => {
    expect(trialDaysLeft(null, NOW)).toBe(0)
    expect(trialDaysLeft(undefined, NOW)).toBe(0)
    expect(trialDaysLeft("", NOW)).toBe(0)
    expect(trialDaysLeft("not-a-date", NOW)).toBe(0)
  })

  it("shows the full window on the first day and counts down", () => {
    expect(trialDaysLeft(ago(0), NOW)).toBe(TRIAL_DAYS) // 7
    expect(trialDaysLeft(ago(1), NOW)).toBe(6)
    expect(trialDaysLeft(ago(6), NOW)).toBe(1)
  })

  it("rounds a partial final day up to 1 (never shows a stale 0 mid-trial)", () => {
    expect(trialDaysLeft(ago(6.5), NOW)).toBe(1)
  })

  it("is 0 exactly at and past expiry", () => {
    expect(trialDaysLeft(ago(7), NOW)).toBe(0)
    expect(trialDaysLeft(ago(7.0001), NOW)).toBe(0)
    expect(trialDaysLeft(ago(30), NOW)).toBe(0)
  })
})

describe("isWithinTrial", () => {
  it("is true inside the window and false at/after expiry or with no trial", () => {
    expect(isWithinTrial(ago(0), NOW)).toBe(true)
    expect(isWithinTrial(ago(6.99), NOW)).toBe(true)
    expect(isWithinTrial(ago(7), NOW)).toBe(false)
    expect(isWithinTrial(ago(8), NOW)).toBe(false)
    expect(isWithinTrial(null, NOW)).toBe(false)
  })
})

describe("resolveAccess", () => {
  it("a paid purchase always wins, even with an expired trial", () => {
    expect(
      resolveAccess({ tier: "paid", trialStartedAt: ago(30), now: NOW })
    ).toBe("paid")
    expect(
      resolveAccess({ tier: "paid", trialStartedAt: null, now: NOW })
    ).toBe("paid")
  })

  it("a free account inside the window is trialing", () => {
    expect(
      resolveAccess({ tier: "free", trialStartedAt: ago(2), now: NOW })
    ).toBe("trialing")
  })

  it("a free account whose trial elapsed is trial_expired", () => {
    expect(
      resolveAccess({ tier: "free", trialStartedAt: ago(8), now: NOW })
    ).toBe("trial_expired")
  })

  it("a free account that never started a trial is none", () => {
    expect(
      resolveAccess({ tier: "free", trialStartedAt: null, now: NOW })
    ).toBe("none")
  })
})

describe("accessGrants", () => {
  it("grants for paid and trialing, denies otherwise", () => {
    expect(accessGrants("paid")).toBe(true)
    expect(accessGrants("trialing")).toBe(true)
    expect(accessGrants("trial_expired")).toBe(false)
    expect(accessGrants("none")).toBe(false)
  })
})

describe("readTrialStartedAt", () => {
  it("returns the ISO string when present, null otherwise", () => {
    expect(readTrialStartedAt({ trial_started_at: ago(1) })).toBe(ago(1))
    expect(readTrialStartedAt({})).toBeNull()
    expect(readTrialStartedAt(null)).toBeNull()
    expect(readTrialStartedAt(undefined)).toBeNull()
    expect(readTrialStartedAt({ trial_started_at: "" })).toBeNull()
    expect(readTrialStartedAt({ trial_started_at: 12345 })).toBeNull()
  })
})

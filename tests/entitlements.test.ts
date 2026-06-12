import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import type { PaidFeature, PlanTier } from "@/lib/entitlements"

/**
 * PAYWALL_ENABLED is captured at module-import time from
 * process.env.PAYWALL_ENABLED. To exercise both the paywall-off default and
 * the paywall-on path deterministically, we reset the module registry and
 * re-import with the env var set for each scenario.
 */
type EntitlementsModule = typeof import("@/lib/entitlements")

async function loadWithPaywall(
  value: "true" | "false" | undefined
): Promise<EntitlementsModule> {
  vi.resetModules()
  if (value === undefined) {
    delete process.env.PAYWALL_ENABLED
  } else {
    process.env.PAYWALL_ENABLED = value
  }
  return import("@/lib/entitlements")
}

// Every gateable surface. Kept in lockstep with the PaidFeature union so the
// per-feature loops below cover the whole type.
const ALL_FEATURES: PaidFeature[] = [
  "analytics",
  "mock-simulator",
  "review-queue",
  "test-builder",
  "unlimited-practice",
]

const ORIGINAL_PAYWALL = process.env.PAYWALL_ENABLED

afterEach(() => {
  // Restore the ambient env so we don't leak state into other files/runs.
  if (ORIGINAL_PAYWALL === undefined) {
    delete process.env.PAYWALL_ENABLED
  } else {
    process.env.PAYWALL_ENABLED = ORIGINAL_PAYWALL
  }
})

describe("getPlanTier", () => {
  let getPlanTier: EntitlementsModule["getPlanTier"]

  beforeEach(async () => {
    ;({ getPlanTier } = await loadWithPaywall(undefined))
  })

  it("maps each known paid plan_id to 'paid'", () => {
    expect(getPlanTier("self_study")).toBe("paid")
    expect(getPlanTier("self_study_guaranteed")).toBe("paid")
    expect(getPlanTier("coaching")).toBe("paid")
    expect(getPlanTier("intensive")).toBe("paid")
  })

  it("treats an unknown plan_id as 'free'", () => {
    expect(getPlanTier("free")).toBe("free")
    expect(getPlanTier("trial")).toBe("free")
    expect(getPlanTier("self_study_guaranteed ")).toBe("free") // trailing space -> not in set
    expect(getPlanTier("SELF_STUDY")).toBe("free") // case-sensitive
  })

  it("treats null / undefined / empty-string plan_id as 'free'", () => {
    expect(getPlanTier(null)).toBe("free")
    expect(getPlanTier(undefined)).toBe("free")
    expect(getPlanTier("")).toBe("free")
  })
})

describe("canAccess — paywall OFF (default, env unset)", () => {
  let canAccess: EntitlementsModule["canAccess"]
  let PAYWALL_ENABLED: boolean

  beforeEach(async () => {
    ;({ canAccess, PAYWALL_ENABLED } = await loadWithPaywall(undefined))
  })

  it("PAYWALL_ENABLED is false when the env var is unset", () => {
    expect(PAYWALL_ENABLED).toBe(false)
  })

  it("allows every feature for a free account", () => {
    for (const feature of ALL_FEATURES) {
      expect(canAccess("free", feature)).toBe(true)
    }
  })

  it("allows every feature for a paid account", () => {
    for (const feature of ALL_FEATURES) {
      expect(canAccess("paid", feature)).toBe(true)
    }
  })
})

describe("canAccess — paywall OFF (env explicitly not 'true')", () => {
  it("any value other than the exact string 'true' leaves the paywall off", async () => {
    // "True"/"1"/"" must NOT enable it: the gate is === "true".
    for (const raw of ["false", "True", "TRUE", "1", "", "yes"] as const) {
      const { canAccess, PAYWALL_ENABLED } = await loadWithPaywall(
        raw as "true" | "false"
      )
      expect(PAYWALL_ENABLED).toBe(false)
      expect(canAccess("free", "analytics")).toBe(true)
    }
  })
})

describe("canAccess — paywall ON", () => {
  let canAccess: EntitlementsModule["canAccess"]
  let PAYWALL_ENABLED: boolean

  beforeEach(async () => {
    ;({ canAccess, PAYWALL_ENABLED } = await loadWithPaywall("true"))
  })

  it("PAYWALL_ENABLED is true for the exact string 'true'", () => {
    expect(PAYWALL_ENABLED).toBe(true)
  })

  it("a paid account can reach every feature", () => {
    for (const feature of ALL_FEATURES) {
      expect(canAccess("paid", feature)).toBe(true)
    }
  })

  it("a free account is blocked from every PaidFeature (none are free today)", () => {
    for (const feature of ALL_FEATURES) {
      expect(canAccess("free", feature)).toBe(false)
    }
  })
})

describe("practiceTestsAllowed", () => {
  it("paywall OFF: unlimited (Infinity) for both tiers", async () => {
    const { practiceTestsAllowed } = await loadWithPaywall(undefined)
    expect(practiceTestsAllowed("free")).toBe(Infinity)
    expect(practiceTestsAllowed("paid")).toBe(Infinity)
  })

  it("paywall ON: paid is unlimited, free is capped at FREE_PRACTICE_TESTS_PER_CHAPTER", async () => {
    const { practiceTestsAllowed, FREE_PRACTICE_TESTS_PER_CHAPTER } =
      await loadWithPaywall("true")
    expect(practiceTestsAllowed("paid")).toBe(Infinity)
    expect(practiceTestsAllowed("free")).toBe(FREE_PRACTICE_TESTS_PER_CHAPTER)
  })

  it("the free per-chapter limit is exactly 1 (the current intended boundary)", async () => {
    const { practiceTestsAllowed, FREE_PRACTICE_TESTS_PER_CHAPTER } =
      await loadWithPaywall("true")
    expect(FREE_PRACTICE_TESTS_PER_CHAPTER).toBe(1)
    // free gets a finite, positive allowance — the first test is free, the rest paid.
    const freeAllowance = practiceTestsAllowed("free")
    expect(freeAllowance).toBe(1)
    expect(Number.isFinite(freeAllowance)).toBe(true)
    expect(freeAllowance).toBeLessThan(practiceTestsAllowed("paid"))
  })
})

describe("FREE_PRACTICE_TESTS_PER_CHAPTER constant", () => {
  it("is the per-chapter free-test boundary and matches what free tier may run", async () => {
    const { FREE_PRACTICE_TESTS_PER_CHAPTER, practiceTestsAllowed } =
      await loadWithPaywall("true")
    expect(FREE_PRACTICE_TESTS_PER_CHAPTER).toBe(1)
    // Invariant: the constant IS the free tier's allowance when the paywall is on.
    expect(practiceTestsAllowed("free")).toBe(FREE_PRACTICE_TESTS_PER_CHAPTER)
  })
})

describe("PlanTier values flow end-to-end", () => {
  it("a known paid plan resolves to a tier that unlocks gated features", async () => {
    const { getPlanTier, canAccess } = await loadWithPaywall("true")
    const tier: PlanTier = getPlanTier("intensive")
    expect(tier).toBe("paid")
    expect(canAccess(tier, "mock-simulator")).toBe(true)
  })

  it("no purchase resolves to free, which is gated when the paywall is on", async () => {
    const { getPlanTier, canAccess } = await loadWithPaywall("true")
    const tier: PlanTier = getPlanTier(null)
    expect(tier).toBe("free")
    expect(canAccess(tier, "mock-simulator")).toBe(false)
  })
})

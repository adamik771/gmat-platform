import { describe, expect, it, vi } from "vitest"

vi.mock("server-only", () => ({}))

import {
  canRetryTrialExpiryDelivery,
  shouldSendTrialExpiryEmail,
} from "@/lib/trial-expiry-notifications"

const now = new Date("2026-09-16T12:00:00.000Z")
const expiredStart = "2026-09-01T12:00:00.000Z"

describe("trial expiry notification eligibility", () => {
  it("sends only for a confirmed, unpaid, expired trial in active manual mode", () => {
    expect(
      shouldSendTrialExpiryEmail({
        paywallEnabled: true,
        manualPaymentEnabled: true,
        emailConfirmed: true,
        tier: "free",
        trialStartedAt: expiredStart,
        now,
      }),
    ).toBe(true)
  })

  it.each([
    { paywallEnabled: false, manualPaymentEnabled: true, emailConfirmed: true, tier: "free" as const, trialStartedAt: expiredStart },
    { paywallEnabled: true, manualPaymentEnabled: false, emailConfirmed: true, tier: "free" as const, trialStartedAt: expiredStart },
    { paywallEnabled: true, manualPaymentEnabled: true, emailConfirmed: false, tier: "free" as const, trialStartedAt: expiredStart },
    { paywallEnabled: true, manualPaymentEnabled: true, emailConfirmed: true, tier: "paid" as const, trialStartedAt: expiredStart },
    { paywallEnabled: true, manualPaymentEnabled: true, emailConfirmed: true, tier: "free" as const, trialStartedAt: "2026-09-14T12:00:00.000Z" },
    { paywallEnabled: true, manualPaymentEnabled: true, emailConfirmed: true, tier: "free" as const, trialStartedAt: null },
  ])("does not send outside the exact eligible state", (input) => {
    expect(shouldSendTrialExpiryEmail({ ...input, now })).toBe(false)
  })
})

describe("trial expiry delivery recovery", () => {
  it("retries pending work and stale sending leases, but not live or terminal work", () => {
    expect(
      canRetryTrialExpiryDelivery(
        { status: "pending", attempts: 1, updated_at: now.toISOString() },
        now,
      ),
    ).toBe(true)
    expect(
      canRetryTrialExpiryDelivery(
        {
          status: "sending",
          attempts: 1,
          updated_at: "2026-09-16T10:00:00.000Z",
        },
        now,
      ),
    ).toBe(true)
    expect(
      canRetryTrialExpiryDelivery(
        {
          status: "sending",
          attempts: 1,
          updated_at: "2026-09-16T11:30:00.000Z",
        },
        now,
      ),
    ).toBe(false)
    expect(
      canRetryTrialExpiryDelivery(
        { status: "sent", attempts: 1, updated_at: now.toISOString() },
        now,
      ),
    ).toBe(false)
    expect(
      canRetryTrialExpiryDelivery(
        { status: "pending", attempts: 3, updated_at: now.toISOString() },
        now,
      ),
    ).toBe(false)
  })
})

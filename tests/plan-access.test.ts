import { describe, expect, it } from "vitest"
import {
  findActivePurchase,
  isPurchaseActive,
  planAccessMonths,
  purchaseExpiresAt,
} from "@/lib/plan-access"

describe("paid-plan access duration", () => {
  const now = new Date("2026-09-05T12:00:00.000Z")

  it("keeps the advertised plan durations in one canonical map", () => {
    expect(planAccessMonths("self_study")).toBe(4)
    expect(planAccessMonths("self_study_guaranteed")).toBe(6)
    expect(planAccessMonths("coaching")).toBe(6)
    expect(planAccessMonths("intensive")).toBe(12)
    expect(planAccessMonths("unknown")).toBeNull()
  })

  it("expires access at the calendar-month boundary", () => {
    const purchase = {
      plan_id: "self_study",
      paid_at: "2026-05-05T12:00:00.000Z",
      revoked_at: null,
    }
    expect(purchaseExpiresAt(purchase.plan_id, purchase.paid_at)).toBe(
      "2026-09-05T12:00:00.000Z",
    )
    expect(isPurchaseActive(purchase, new Date("2026-09-05T11:59:59.999Z"))).toBe(true)
    expect(isPurchaseActive(purchase, now)).toBe(false)
  })

  it("handles month-end purchases without rolling into the following month", () => {
    expect(purchaseExpiresAt("self_study", "2026-01-31T10:00:00.000Z")).toBe(
      "2026-05-31T10:00:00.000Z",
    )
  })

  it("rejects revoked, unknown, and malformed purchases", () => {
    expect(
      isPurchaseActive(
        { plan_id: "self_study", paid_at: "2026-08-01T00:00:00.000Z", revoked_at: now.toISOString() },
        now,
      ),
    ).toBe(false)
    expect(isPurchaseActive({ plan_id: "unknown", paid_at: now.toISOString() }, now)).toBe(false)
    expect(isPurchaseActive({ plan_id: "self_study", paid_at: "broken" }, now)).toBe(false)
  })

  it("finds an older still-active purchase when the newest row is expired", () => {
    const active = findActivePurchase(
      [
        { plan_id: "self_study", paid_at: "2026-01-01T00:00:00.000Z", revoked_at: null },
        { plan_id: "intensive", paid_at: "2026-02-01T00:00:00.000Z", revoked_at: null },
      ],
      now,
    )
    expect(active?.plan_id).toBe("intensive")
  })
})

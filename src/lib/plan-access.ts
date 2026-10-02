export const PLAN_ACCESS_MONTHS = {
  self_study: 4,
  self_study_guaranteed: 6,
  coaching: 6,
  intensive: 12,
} as const

export type PaidPlanId = keyof typeof PLAN_ACCESS_MONTHS

export interface DatedPurchase {
  plan_id: string
  paid_at: string
  revoked_at?: string | null
}

export function planAccessMonths(planId: string | null | undefined): number | null {
  if (!planId || !(planId in PLAN_ACCESS_MONTHS)) return null
  return PLAN_ACCESS_MONTHS[planId as PaidPlanId]
}

/** Calendar-month expiry, matching the durations advertised on /pricing. */
export function purchaseExpiresAt(
  planId: string | null | undefined,
  paidAt: string | null | undefined,
): string | null {
  const months = planAccessMonths(planId)
  if (months === null || !paidAt) return null
  const paid = new Date(paidAt)
  if (!Number.isFinite(paid.getTime())) return null

  const expiry = new Date(paid)
  const originalDay = expiry.getUTCDate()
  expiry.setUTCDate(1)
  expiry.setUTCMonth(expiry.getUTCMonth() + months)
  const lastDay = new Date(
    Date.UTC(expiry.getUTCFullYear(), expiry.getUTCMonth() + 1, 0),
  ).getUTCDate()
  expiry.setUTCDate(Math.min(originalDay, lastDay))
  return expiry.toISOString()
}

export function isPurchaseActive(
  purchase: DatedPurchase,
  now: Date = new Date(),
): boolean {
  if (purchase.revoked_at) return false
  const expiresAt = purchaseExpiresAt(purchase.plan_id, purchase.paid_at)
  return expiresAt !== null && Date.parse(expiresAt) > now.getTime()
}

export function findActivePurchase<T extends DatedPurchase>(
  purchases: readonly T[],
  now: Date = new Date(),
): T | null {
  return (
    [...purchases]
      .filter((purchase) => isPurchaseActive(purchase, now))
      .sort((a, b) => b.paid_at.localeCompare(a.paid_at))[0] ?? null
  )
}

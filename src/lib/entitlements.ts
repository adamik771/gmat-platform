import type { SupabaseClient } from "@supabase/supabase-js"

/**
 * Feature entitlements / paywall.
 *
 * Single source of truth for what a free vs. paid account can reach. The
 * whole thing is OFF by default: with PAYWALL_ENABLED false, `canAccess`
 * returns true for everything, so the app behaves exactly as it does today.
 * Flip the env var to true (once Stripe checkout is live) to turn the
 * paywall on without touching any call site.
 *
 * To gate a surface: read the user's tier with `getPlanTierForUser`, then
 * `if (PAYWALL_ENABLED && !canAccess(tier, "<feature>")) render <UpgradeGate/>`.
 * Enforce server-side (page/route), not just by hiding UI.
 */

/** Master switch. Set PAYWALL_ENABLED=true in the environment to turn the
 *  paywall on. Default OFF — every account gets everything (current behavior). */
export const PAYWALL_ENABLED = process.env.PAYWALL_ENABLED === "true"

export type PlanTier = "free" | "paid"

/** Gateable surfaces. Add a key here, then guard the surface with canAccess. */
export type PaidFeature =
  | "analytics"
  | "mock-simulator"
  | "review-queue"
  | "test-builder"
  | "unlimited-practice"

/**
 * The free/paid line. THIS is the dial to turn when deciding what a free
 * account includes. A feature listed here is free; everything else in
 * PaidFeature requires a paid plan once the paywall is on.
 *
 * Current intent (the free tier is a genuine taste of the product, not a
 * teaser): chapters, the first practice test per chapter, the study plan,
 * the official-exam plan, and the error log stay free; the deeper
 * measurement + unlimited-reps surfaces are paid.
 */
const FREE_FEATURES: ReadonlySet<PaidFeature> = new Set<PaidFeature>([
  // (none of the PaidFeature surfaces are free today; listed here for the
  // reader — e.g. add "review-queue" to make the review queue free.)
])

/** Free accounts get this many practice tests per chapter; the rest are paid
 *  (only enforced where "unlimited-practice" is checked, and only when the
 *  paywall is on). */
export const FREE_PRACTICE_TESTS_PER_CHAPTER = 1

/** Stripe plan_ids that count as a paid software entitlement. Coaching /
 *  intensive add human coaching on top of the same paid software. */
const PAID_PLAN_IDS: ReadonlySet<string> = new Set([
  "self_study",
  "coaching",
  "intensive",
])

/** Map a stored purchases.plan_id to a tier. */
export function getPlanTier(planId: string | null | undefined): PlanTier {
  return planId && PAID_PLAN_IDS.has(planId) ? "paid" : "free"
}

/**
 * Can this tier reach this feature? Returns true for everything while the
 * paywall is OFF, so guarding a surface is a safe no-op until you flip the
 * env var.
 */
export function canAccess(tier: PlanTier, feature: PaidFeature): boolean {
  if (!PAYWALL_ENABLED) return true
  if (tier === "paid") return true
  return FREE_FEATURES.has(feature)
}

/** How many practice tests this tier may run per chapter (Infinity when the
 *  paywall is off or the account is paid). */
export function practiceTestsAllowed(tier: PlanTier): number {
  if (!PAYWALL_ENABLED || tier === "paid") return Infinity
  return FREE_PRACTICE_TESTS_PER_CHAPTER
}

/**
 * Read the caller's plan tier from their most recent purchase. Mirrors the
 * dashboard's purchases read. Returns "free" on any error or no purchase.
 */
export async function getPlanTierForUser(
  supabase: SupabaseClient,
  userId: string
): Promise<PlanTier> {
  try {
    const { data } = await supabase
      .from("purchases")
      .select("plan_id")
      .eq("user_id", userId)
      .order("paid_at", { ascending: false })
      .limit(1)
      .maybeSingle()
    return getPlanTier((data?.plan_id as string | null) ?? null)
  } catch {
    return "free"
  }
}

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
  | "ai-tutor"
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
  "self_study_guaranteed",
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

/* ------------------------------------------------------------------------- *
 * Free trial (card-on-file, single charge after the window — model "B").
 *
 * A new account starts a TRIAL_DAYS trial when it puts a card on file at
 * signup; the day-after-trial charge is collected by a separate billing step
 * (Stripe SetupIntent at signup + a scheduled off-session charge — built in a
 * later phase). THIS module is pure and processor-agnostic: it only decides,
 * from {has a paid purchase?, when did the trial start?, now}, whether an
 * account may enter the paid surfaces. Nothing here reaches Stripe.
 *
 * The trial start timestamp is a small per-user scalar — it lives in
 * `user_metadata.trial_started_at` (ISO string), never in a growing table-or
 * cookie payload (see the user_state split). Everything below is dormant while
 * PAYWALL_ENABLED is off: resolveAccess is only consulted by gated surfaces,
 * which themselves no-op until the paywall is armed.
 * ------------------------------------------------------------------------- */

/** Length of the free trial, in days. */
export const TRIAL_DAYS = 7

const DAY_MS = 24 * 60 * 60 * 1000

/**
 * Access an account currently has to the paid surfaces:
 * - `paid`         — an active (non-revoked) purchase; the trial is irrelevant.
 * - `trialing`     — no purchase, but still inside the trial window.
 * - `trial_expired`— the trial started and has elapsed, with no purchase.
 * - `none`         — no purchase and no trial ever started (must start one).
 */
export type AccessState = "paid" | "trialing" | "trial_expired" | "none"

/**
 * Whole-number days left in a trial that began at `startedAtIso`. TRIAL_DAYS on
 * the first day, counting down, 0 once the window has fully elapsed. Returns 0
 * for a missing or unparseable timestamp (treated as "no active trial"), so a
 * caller can show "N days left" without separately null-checking.
 */
export function trialDaysLeft(
  startedAtIso: string | null | undefined,
  now: Date
): number {
  if (!startedAtIso) return 0
  const start = new Date(startedAtIso).getTime()
  if (Number.isNaN(start)) return 0
  const leftMs = TRIAL_DAYS * DAY_MS - (now.getTime() - start)
  if (leftMs <= 0) return 0
  return Math.ceil(leftMs / DAY_MS)
}

/** Is the account still inside its trial window? */
export function isWithinTrial(
  startedAtIso: string | null | undefined,
  now: Date
): boolean {
  return trialDaysLeft(startedAtIso, now) > 0
}

/**
 * Resolve an account's access state from its purchase tier + trial start. Pure;
 * the DB/metadata read lives in getAccessForUser. A paid purchase always wins,
 * so an account that buys during its trial is immediately `paid`.
 */
export function resolveAccess(input: {
  tier: PlanTier
  trialStartedAt: string | null | undefined
  now: Date
}): AccessState {
  if (input.tier === "paid") return "paid"
  if (isWithinTrial(input.trialStartedAt, input.now)) return "trialing"
  if (input.trialStartedAt) return "trial_expired"
  return "none"
}

/** Does this access state grant entry to the paid surfaces? */
export function accessGrants(state: AccessState): boolean {
  return state === "paid" || state === "trialing"
}

/** Read `trial_started_at` from a user's metadata (ISO string or null). */
export function readTrialStartedAt(
  meta: Record<string, unknown> | null | undefined
): string | null {
  const raw = meta?.trial_started_at
  return typeof raw === "string" && raw.length > 0 ? raw : null
}

/**
 * Resolve the caller's live access state: their purchase tier (from `purchases`)
 * combined with their trial start (from `user_metadata`). Thin wrapper over the
 * pure resolveAccess — getPlanTierForUser already logs + fails closed to "free"
 * on a read error, so a transient failure degrades to the trial/none decision
 * rather than silently granting paid access.
 */
export async function getAccessForUser(
  supabase: SupabaseClient,
  user: { id: string; user_metadata?: Record<string, unknown> | null },
  now: Date
): Promise<AccessState> {
  const tier = await getPlanTierForUser(supabase, user.id)
  return resolveAccess({
    tier,
    trialStartedAt: readTrialStartedAt(user.user_metadata),
    now,
  })
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
    const { data, error } = await supabase
      .from("purchases")
      .select("plan_id")
      .eq("user_id", userId)
      // Refunded / charged-back purchases are revoked — they must not grant
      // access. The webhook stamps revoked_at on refund/dispute.
      .is("revoked_at", null)
      .order("paid_at", { ascending: false })
      .limit(1)
      .maybeSingle()
    if (error) {
      // Fail closed (free), but don't swallow silently: the most likely cause
      // is the purchases / revoked_at migration not being applied, which would
      // otherwise downgrade every paid user with no diagnostic trail.
      console.error("[entitlements] purchases read failed — defaulting to free", error)
      return "free"
    }
    return getPlanTier((data?.plan_id as string | null) ?? null)
  } catch (err) {
    console.error("[entitlements] getPlanTierForUser threw — defaulting to free", err)
    return "free"
  }
}

import "server-only"
import type { SupabaseClient } from "@supabase/supabase-js"
import { resolveAccess, type PlanTier } from "@/lib/entitlements"

const MAX_ATTEMPTS = 3
const SENDING_LEASE_MS = 60 * 60 * 1000

export function shouldSendTrialExpiryEmail(input: {
  paywallEnabled: boolean
  manualPaymentEnabled: boolean
  emailConfirmed: boolean
  tier: PlanTier
  trialStartedAt: string | null
  now: Date
}): boolean {
  if (!input.paywallEnabled || !input.manualPaymentEnabled) return false
  if (!input.emailConfirmed || !input.trialStartedAt) return false
  return (
    resolveAccess({
      tier: input.tier,
      trialStartedAt: input.trialStartedAt,
      now: input.now,
    }) === "trial_expired"
  )
}

interface DeliveryRow {
  id: string
  status: "pending" | "sending" | "sent" | "failed"
  attempts: number
  updated_at: string
}

export function canRetryTrialExpiryDelivery(
  delivery: Pick<DeliveryRow, "status" | "attempts" | "updated_at">,
  now: Date = new Date(),
): boolean {
  if (delivery.attempts >= MAX_ATTEMPTS) return false
  if (delivery.status === "pending") return true
  if (delivery.status !== "sending") return false

  const updatedAt = Date.parse(delivery.updated_at)
  return (
    Number.isFinite(updatedAt) &&
    now.getTime() - updatedAt >= SENDING_LEASE_MS
  )
}

/**
 * Claim one trial-expiry delivery. The unique (user, trial-start) constraint
 * makes repeated cron scans harmless; the conditional state/attempt update
 * prevents two concurrent workers from both sending it. A stale sending lease
 * can be reclaimed after an interrupted worker.
 */
export async function claimTrialExpiryDelivery(
  service: SupabaseClient,
  input: { userId: string; trialStartedAt: string },
): Promise<DeliveryRow | null> {
  const now = new Date().toISOString()
  const { data: inserted, error: insertError } = await service
    .from("trial_expiry_email_deliveries")
    .upsert(
      {
        user_id: input.userId,
        trial_started_at: input.trialStartedAt,
        status: "sending",
        attempts: 1,
        updated_at: now,
      },
      {
        onConflict: "user_id,trial_started_at",
        ignoreDuplicates: true,
      },
    )
    .select("id, status, attempts, updated_at")
    .maybeSingle()
  if (insertError) throw insertError
  if (inserted) return inserted as DeliveryRow

  const { data: existing, error: readError } = await service
    .from("trial_expiry_email_deliveries")
    .select("id, status, attempts, updated_at")
    .eq("user_id", input.userId)
    .eq("trial_started_at", input.trialStartedAt)
    .maybeSingle()
  if (readError) throw readError
  if (!existing) return null
  const row = existing as DeliveryRow
  if (!canRetryTrialExpiryDelivery(row)) return null

  const { data: claimed, error: claimError } = await service
    .from("trial_expiry_email_deliveries")
    .update({
      status: "sending",
      attempts: row.attempts + 1,
      updated_at: now,
    })
    .eq("id", row.id)
    .eq("status", row.status)
    .eq("attempts", row.attempts)
    .select("id, status, attempts, updated_at")
    .maybeSingle()
  if (claimError) throw claimError
  if (!claimed) return null
  return claimed as DeliveryRow
}

export async function markTrialExpiryDeliverySent(
  service: SupabaseClient,
  id: string,
): Promise<void> {
  const now = new Date().toISOString()
  const { error } = await service
    .from("trial_expiry_email_deliveries")
    .update({ status: "sent", sent_at: now, last_error: null, updated_at: now })
    .eq("id", id)
    .eq("status", "sending")
  if (error) throw error
}

export async function markTrialExpiryDeliveryFailed(
  service: SupabaseClient,
  delivery: DeliveryRow,
  reason: string,
): Promise<void> {
  const { error } = await service
    .from("trial_expiry_email_deliveries")
    .update({
      status: delivery.attempts >= MAX_ATTEMPTS ? "failed" : "pending",
      last_error: reason.slice(0, 500),
      updated_at: new Date().toISOString(),
    })
    .eq("id", delivery.id)
    .eq("status", "sending")
  if (error) throw error
}

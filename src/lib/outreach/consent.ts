import "server-only"
import { randomUUID } from "node:crypto"
import type { SupabaseClient } from "@supabase/supabase-js"

/**
 * Consent / subscription helpers (service-role only).
 *
 * A row in email_subscriptions IS the opt-in record: it stores the consent
 * source + timestamp and the current subscribed flag. recordConsent never
 * resurrects a prior unsubscribe, and unsubscribe is one-click via the token.
 */

export interface ConsentRow {
  email: string
  user_id: string | null
  subscribed: boolean
  consent_source: string
  unsubscribe_token: string
}

const COLS = "email, user_id, subscribed, consent_source, unsubscribe_token"

/**
 * Opt an address in. Inserts a subscription the first time we see it (with the
 * consent source/time + a fresh unsubscribe token). If the row already exists
 * it is returned untouched — an earlier unsubscribe is NEVER reversed, and the
 * original consent record is preserved (we only backfill user_id if newly
 * known). Idempotent; returns null on error.
 */
export async function recordConsent(
  service: SupabaseClient,
  input: {
    email: string
    userId?: string | null
    source: string
    /** Actual time the user gave consent (e.g. ticked the box). Defaults to now. */
    consentAt?: string
  }
): Promise<ConsentRow | null> {
  const email = input.email.trim().toLowerCase()
  if (!email) return null
  try {
    const { data: existing } = await service
      .from("email_subscriptions")
      .select(COLS)
      .eq("email", email)
      .maybeSingle()

    if (existing) {
      if (input.userId && !existing.user_id) {
        await service
          .from("email_subscriptions")
          .update({ user_id: input.userId })
          .eq("email", email)
      }
      return existing as ConsentRow
    }

    const { data, error } = await service
      .from("email_subscriptions")
      .insert({
        email,
        user_id: input.userId ?? null,
        subscribed: true,
        consent_source: input.source,
        consent_at: input.consentAt ?? new Date().toISOString(),
        unsubscribe_token: randomUUID(),
      })
      .select(COLS)
      .single()

    if (error) {
      // Lost an insert race (unique email) — re-read the winning row.
      const { data: raced } = await service
        .from("email_subscriptions")
        .select(COLS)
        .eq("email", email)
        .maybeSingle()
      return (raced as ConsentRow | null) ?? null
    }
    return data as ConsentRow
  } catch {
    return null
  }
}

/** Is this address currently opted in? Fail-closed (false) on any error. */
export async function isSubscribed(
  service: SupabaseClient,
  email: string
): Promise<boolean> {
  try {
    const { data } = await service
      .from("email_subscriptions")
      .select("subscribed")
      .eq("email", email.trim().toLowerCase())
      .maybeSingle()
    return data?.subscribed === true
  } catch {
    return false
  }
}

/** Resolve a subscription by its unsubscribe token (for the confirm page). */
export async function getByToken(
  service: SupabaseClient,
  token: string
): Promise<ConsentRow | null> {
  if (!token) return null
  try {
    const { data } = await service
      .from("email_subscriptions")
      .select(COLS)
      .eq("unsubscribe_token", token)
      .maybeSingle()
    return (data as ConsentRow | null) ?? null
  } catch {
    return null
  }
}

/**
 * Flip an address to unsubscribed by token (one-click). Idempotent — a second
 * call is a no-op. Returns ok + the email so the caller can log the event.
 */
export async function unsubscribeByToken(
  service: SupabaseClient,
  token: string
): Promise<{ ok: boolean; email?: string }> {
  if (!token) return { ok: false }
  try {
    const { data, error } = await service
      .from("email_subscriptions")
      .update({ subscribed: false, unsubscribed_at: new Date().toISOString() })
      .eq("unsubscribe_token", token)
      .select("email")
    if (error || !data || data.length === 0) return { ok: false }
    return { ok: true, email: data[0].email as string }
  } catch {
    return { ok: false }
  }
}

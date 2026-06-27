import "server-only"
import type { SupabaseClient } from "@supabase/supabase-js"
import {
  plannedSteps,
  dedupeKey,
  findStep,
  type DripSequenceId,
  type SequenceId,
} from "./sequences"

/**
 * Email queue persistence (service-role only). The enqueue helpers write due
 * rows; the cron worker (api/cron/outreach) claims and sends them; the mark
 * helpers and logEmailEvent record the outcome to the admin-safe log.
 */

export interface QueueRow {
  id: string
  email: string
  user_id: string | null
  sequence: string
  step: string
  template_key: string
  payload: Record<string, unknown>
  scheduled_for: string
  status: string
  attempts: number
}

const QUEUE_COLS =
  "id, email, user_id, sequence, step, template_key, payload, scheduled_for, status, attempts"

export type EmailEventType =
  | "queued"
  | "sent"
  | "failed"
  | "skipped"
  | "held"
  | "open"
  | "click"
  | "unsubscribe"

/** Append one row to email_events. Best-effort — never throws. */
export async function logEmailEvent(
  service: SupabaseClient,
  ev: {
    queueId?: string | null
    email?: string | null
    type: EmailEventType
    meta?: Record<string, unknown>
  }
): Promise<void> {
  try {
    await service.from("email_events").insert({
      queue_id: ev.queueId ?? null,
      email: ev.email ?? null,
      type: ev.type,
      meta: ev.meta ?? {},
    })
  } catch {
    /* logging must never break the worker */
  }
}

/**
 * Enqueue a full drip sequence (A-C) from a single trigger time. Deduped per
 * (recipient, sequence, step) via the unique dedupe_key, so re-triggering is a
 * no-op. recipientId is the user id when known, else the email. Returns the
 * number of rows planned (existing duplicates are silently ignored by the DB).
 */
export async function enqueueDrip(
  service: SupabaseClient,
  input: {
    sequence: DripSequenceId
    email: string
    userId?: string | null
    payload?: Record<string, unknown>
    startIso?: string
  }
): Promise<number> {
  const email = input.email.trim().toLowerCase()
  if (!email) return 0
  const recipientId = input.userId ?? email
  const start = input.startIso ?? new Date().toISOString()
  let steps
  try {
    steps = plannedSteps(input.sequence, start)
  } catch {
    return 0
  }
  const rows = steps.map((s) => ({
    email,
    user_id: input.userId ?? null,
    sequence: input.sequence,
    step: s.step,
    template_key: s.templateKey,
    payload: input.payload ?? {},
    scheduled_for: s.scheduledFor,
    dedupe_key: dedupeKey(recipientId, input.sequence, s.step),
  }))
  try {
    const { error } = await service
      .from("email_queue")
      .upsert(rows, { onConflict: "dedupe_key", ignoreDuplicates: true })
    return error ? 0 : rows.length
  } catch {
    return 0
  }
}

/**
 * Enqueue a single step (sequences D/E — condition/event driven). `dedupeSuffix`
 * scopes the idempotency key to one episode/milestone (e.g. an inactivity-window
 * marker) so the same step can legitimately recur across episodes.
 */
export async function enqueueStep(
  service: SupabaseClient,
  input: {
    sequence: SequenceId
    step: string
    email: string
    userId?: string | null
    payload?: Record<string, unknown>
    scheduledForIso?: string
    dedupeSuffix?: string
  }
): Promise<boolean> {
  const tpl = findStep(input.sequence, input.step)
  if (!tpl) return false
  const email = input.email.trim().toLowerCase()
  if (!email) return false
  const recipientId = input.userId ?? email
  const key =
    dedupeKey(recipientId, input.sequence, input.step) +
    (input.dedupeSuffix ? `:${input.dedupeSuffix}` : "")
  try {
    const { error } = await service.from("email_queue").upsert(
      {
        email,
        user_id: input.userId ?? null,
        sequence: input.sequence,
        step: input.step,
        template_key: tpl.templateKey,
        payload: input.payload ?? {},
        scheduled_for: input.scheduledForIso ?? new Date().toISOString(),
        dedupe_key: key,
      },
      { onConflict: "dedupe_key", ignoreDuplicates: true }
    )
    return !error
  } catch {
    return false
  }
}

/** Claim due pending rows (scheduled_for <= now), oldest first, bounded. */
export async function claimDue(
  service: SupabaseClient,
  limit: number,
  nowIso: string = new Date().toISOString()
): Promise<QueueRow[]> {
  try {
    const { data, error } = await service
      .from("email_queue")
      .select(QUEUE_COLS)
      .eq("status", "pending")
      .lte("scheduled_for", nowIso)
      .order("scheduled_for", { ascending: true })
      .limit(limit)
    if (error || !data) return []
    return data as QueueRow[]
  } catch {
    return []
  }
}

export async function markSent(
  service: SupabaseClient,
  id: string
): Promise<void> {
  await service
    .from("email_queue")
    .update({ status: "sent", sent_at: new Date().toISOString() })
    .eq("id", id)
}

/**
 * Record a non-success outcome. `terminal` states (failed/skipped/canceled/held)
 * stop further attempts; a non-terminal call just bumps attempts + last_error so
 * the row stays 'pending' and retries on the next tick.
 */
export async function markOutcome(
  service: SupabaseClient,
  row: QueueRow,
  outcome: {
    status: "pending" | "failed" | "skipped" | "canceled" | "held"
    lastError?: string
  }
): Promise<void> {
  await service
    .from("email_queue")
    .update({
      status: outcome.status,
      attempts: row.attempts + 1,
      last_error: outcome.lastError ?? null,
    })
    .eq("id", row.id)
}

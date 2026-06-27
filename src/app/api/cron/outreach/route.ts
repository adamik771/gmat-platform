import { getSupabaseService } from "@/lib/supabase/service"
import { emailConfigured, sendEmail } from "@/lib/email"
import { recordConsent } from "@/lib/outreach/consent"
import {
  enqueueDrip,
  enqueueStep,
  claimDue,
  markSent,
  markOutcome,
  logEmailEvent,
} from "@/lib/outreach/queue"
import { renderTemplate, isKnownTemplate } from "@/lib/outreach/templates"
import { INACTIVE_THRESHOLDS } from "@/lib/outreach/sequences"
import { consentReasonFor } from "@/lib/outreach/labels"

// Node runtime: service-role client + fetch to Resend. Never cache.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * Automated outreach worker. Wire in vercel.json (crons) → Vercel sends
 * `Authorization: Bearer ${CRON_SECRET}`.
 *
 * Phase 1 (enqueue) always runs — it enrolls new signups (sequence A) and
 * detects inactivity (sequence D), writing due rows to email_queue. It never
 * sends, so it's safe to run before an email provider is configured.
 *
 * Phase 2 (send) only runs when RESEND is configured. It claims due rows,
 * re-checks consent, renders the template, and sends with a List-Unsubscribe
 * header. If email is NOT configured, it returns without sending OR faking a
 * send — the queue simply accumulates until a provider is set.
 *
 * Sequences B (founding) and C (error-log) are enqueued at the lead-capture
 * route; E (milestone) at the practice-sessions route — both event-driven, not
 * here.
 */

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.zakariangmat.com"
).replace(/\/$/, "")
const SEND_BATCH = 50
const MAX_ATTEMPTS = 3
const DAY_MS = 24 * 60 * 60 * 1000
// Only auto-enroll signups created within this window (new accounts), so the
// daily scan stays bounded and we don't blast pre-existing users.
const ENROLL_WINDOW_DAYS = 3
const USER_PAGES = 20

interface UserInfo {
  email: string
  firstName: string | null
  confirmed: boolean
  createdMs: number
}

function firstNameOf(meta: Record<string, unknown>): string | null {
  const n = meta.full_name
  return typeof n === "string" && n.trim() ? n.trim().split(/\s+/)[0] : null
}

function unsubUrl(token: string): string {
  return `${SITE_URL}/unsubscribe?token=${encodeURIComponent(token)}`
}
function listUnsubUrl(token: string): string {
  return `${SITE_URL}/api/email/unsubscribe?token=${encodeURIComponent(token)}`
}

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  if (!secret) {
    return Response.json(
      { ok: false, error: "CRON_SECRET unset — refusing to run." },
      { status: 503 }
    )
  }
  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 })
  }

  const service = getSupabaseService()
  const nowMs = Date.now()
  const nowIso = new Date(nowMs).toISOString()
  const usersById = new Map<string, UserInfo>()
  const enq = { signup: 0, inactive: 0 }

  // --- Build a user map (email, name, confirmed, created) for both phases ---
  try {
    for (let page = 1; page <= USER_PAGES; page++) {
      const { data, error } = await service.auth.admin.listUsers({
        page,
        perPage: 100,
      })
      if (error || !data || data.users.length === 0) break
      for (const u of data.users) {
        if (!u.email) continue
        const meta = (u.user_metadata ?? {}) as Record<string, unknown>
        usersById.set(u.id, {
          email: u.email,
          firstName: firstNameOf(meta),
          confirmed: !!u.email_confirmed_at,
          createdMs: u.created_at ? new Date(u.created_at).getTime() : 0,
        })
      }
      if (data.users.length < 100) break
    }
  } catch {
    /* fall through with whatever we have */
  }

  // --- Phase 1a: enroll new signups into sequence A ---
  try {
    for (const [userId, u] of usersById) {
      if (!u.confirmed) continue
      if (nowMs - u.createdMs > ENROLL_WINDOW_DAYS * DAY_MS) continue
      const consent = await recordConsent(service, {
        email: u.email,
        userId,
        source: "signup",
      })
      if (!consent || !consent.subscribed) continue
      const n = await enqueueDrip(service, {
        sequence: "signup",
        email: u.email,
        userId,
        startIso: new Date(u.createdMs).toISOString(),
        payload: { firstName: u.firstName },
      })
      enq.signup += n
    }
  } catch {
    /* keep going to phase 1b / 2 */
  }

  // --- Phase 1b: inactivity (sequence D), only for consented users ---
  try {
    const { data: subs } = await service
      .from("email_subscriptions")
      .select("email, user_id")
      .eq("subscribed", true)
      .not("user_id", "is", null)
      .limit(5000)
    const emailByUser = new Map<string, string>()
    for (const s of subs ?? [])
      emailByUser.set(s.user_id as string, s.email as string)

    if (emailByUser.size > 0) {
      const since = new Date(nowMs - 15 * DAY_MS).toISOString()
      const { data: sessions } = await service
        .from("practice_sessions")
        .select("user_id, created_at")
        .gte("created_at", since)
        .in("user_id", [...emailByUser.keys()])
        .order("created_at", { ascending: false })
        .limit(5000)
      const lastByUser = new Map<string, number>()
      for (const s of sessions ?? []) {
        const uid = s.user_id as string
        if (!lastByUser.has(uid))
          lastByUser.set(uid, new Date(s.created_at as string).getTime())
      }
      for (const [uid, lastMs] of lastByUser) {
        const daysInactive = Math.floor((nowMs - lastMs) / DAY_MS)
        // Largest threshold the user has crossed (3 -> 7 -> 14).
        const band = INACTIVE_THRESHOLDS.filter(
          (t) => daysInactive >= t.days
        ).pop()
        if (!band) continue
        const email = emailByUser.get(uid)
        if (!email) continue
        const ok = await enqueueStep(service, {
          sequence: "inactive",
          step: band.step,
          email,
          userId: uid,
          payload: { firstName: usersById.get(uid)?.firstName ?? null },
          // One send per inactivity episode (keyed by the last-activity date).
          dedupeSuffix: new Date(lastMs).toISOString().slice(0, 10),
        })
        if (ok) enq.inactive++
      }
    }
  } catch {
    /* keep going to phase 2 */
  }

  // --- Phase 2: send (only when a provider is configured; never fake) ---
  if (!emailConfigured()) {
    return Response.json({
      ok: true,
      emailConfigured: false,
      note: "queue built; not sending (no email provider)",
      enqueued: enq,
      sent: 0,
    })
  }

  const due = await claimDue(service, SEND_BATCH, nowIso)
  let sent = 0
  let skipped = 0
  let failed = 0

  // Batch-load consent for the claimed recipients.
  const emails = [...new Set(due.map((r) => r.email))]
  const subMap = new Map<
    string,
    { token: string; subscribed: boolean; source: string }
  >()
  if (emails.length > 0) {
    const { data } = await service
      .from("email_subscriptions")
      .select("email, subscribed, consent_source, unsubscribe_token")
      .in("email", emails)
    for (const s of data ?? []) {
      subMap.set(s.email as string, {
        token: s.unsubscribe_token as string,
        subscribed: s.subscribed as boolean,
        source: s.consent_source as string,
      })
    }
  }

  for (const row of due) {
    const sub = subMap.get(row.email)
    // No consent row, or unsubscribed → cancel (never send).
    if (!sub || !sub.subscribed) {
      await markOutcome(service, row, {
        status: "canceled",
        lastError: sub ? "unsubscribed" : "no-consent",
      })
      await logEmailEvent(service, {
        queueId: row.id,
        email: row.email,
        type: "skipped",
        meta: { reason: sub ? "unsubscribed" : "no-consent" },
      })
      skipped++
      continue
    }
    if (!isKnownTemplate(row.template_key)) {
      await markOutcome(service, row, {
        status: "failed",
        lastError: "unknown-template",
      })
      await logEmailEvent(service, {
        queueId: row.id,
        email: row.email,
        type: "failed",
        meta: { reason: "unknown-template", template: row.template_key },
      })
      failed++
      continue
    }

    const payload = (row.payload ?? {}) as Record<string, unknown>
    let rendered
    try {
      rendered = renderTemplate(row.template_key, {
        firstName:
          typeof payload.firstName === "string" ? payload.firstName : null,
        siteUrl: SITE_URL,
        unsubscribeUrl: unsubUrl(sub.token),
        consentReason: consentReasonFor(sub.source),
        downloadUrl:
          typeof payload.downloadUrl === "string" ? payload.downloadUrl : null,
        referralUrl:
          typeof payload.referralUrl === "string" ? payload.referralUrl : null,
        clickBase: `${SITE_URL}/api/email/click?id=${row.id}`,
        openPixelUrl: `${SITE_URL}/api/email/open?id=${row.id}`,
      })
    } catch {
      await markOutcome(service, row, {
        status: "failed",
        lastError: "render-failed",
      })
      await logEmailEvent(service, {
        queueId: row.id,
        email: row.email,
        type: "failed",
        meta: { reason: "render-failed" },
      })
      failed++
      continue
    }

    const result = await sendEmail({
      to: row.email,
      subject: rendered.subject,
      html: rendered.html,
      text: rendered.text,
      headers: {
        "List-Unsubscribe": `<${listUnsubUrl(sub.token)}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    })

    if (result.ok) {
      await markSent(service, row.id)
      await logEmailEvent(service, {
        queueId: row.id,
        email: row.email,
        type: "sent",
        meta: { sequence: row.sequence, step: row.step },
      })
      sent++
    } else if (result.skipped) {
      await markOutcome(service, row, {
        status: "skipped",
        lastError: result.reason,
      })
      await logEmailEvent(service, {
        queueId: row.id,
        email: row.email,
        type: "skipped",
        meta: { reason: result.reason },
      })
      skipped++
    } else {
      const terminal = row.attempts + 1 >= MAX_ATTEMPTS
      await markOutcome(service, row, {
        status: terminal ? "failed" : "pending",
        lastError: result.reason,
      })
      await logEmailEvent(service, {
        queueId: row.id,
        email: row.email,
        type: "failed",
        meta: { reason: result.reason, terminal },
      })
      failed++
    }
  }

  return Response.json({ ok: true, emailConfigured: true, enqueued: enq, sent, skipped, failed })
}

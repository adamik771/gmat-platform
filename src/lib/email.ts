/**
 * Transactional email sending via Resend's REST API (no SDK dependency).
 *
 * Safe before go-live: when RESEND_API_KEY is unset, sendEmail is a no-op
 * that reports `skipped` instead of throwing — mirrors the AI tutor's
 * graceful-degradation pattern. Set RESEND_API_KEY and EMAIL_FROM in the
 * environment to actually send.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails"

export interface SendEmailInput {
  to: string
  subject: string
  html: string
  text?: string
  /** Reply-To address; falls back to EMAIL_REPLY_TO. Lets replies reach a
   *  monitored inbox even while the sending domain has no MX record. */
  replyTo?: string
  /** Extra SMTP headers (e.g. List-Unsubscribe) passed through to Resend. */
  headers?: Record<string, string>
}

export type SendEmailResult =
  | { ok: true; id: string }
  | { ok: false; skipped: true; reason: string }
  | { ok: false; skipped: false; reason: string }

/** From address. A verified sender on your Resend domain. */
function fromAddress(): string {
  return process.env.EMAIL_FROM || "Zakarian GMAT <noreply@zakariangmat.com>"
}

export function emailConfigured(): boolean {
  return !!process.env.RESEND_API_KEY
}

export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    return { ok: false, skipped: true, reason: "RESEND_API_KEY unset" }
  }
  if (!input.to || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.to)) {
    return { ok: false, skipped: true, reason: "invalid recipient" }
  }
  const replyTo = input.replyTo || process.env.EMAIL_REPLY_TO || ""
  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress(),
        to: input.to,
        subject: input.subject,
        html: input.html,
        ...(input.text ? { text: input.text } : {}),
        ...(replyTo ? { reply_to: replyTo } : {}),
        ...(input.headers ? { headers: input.headers } : {}),
      }),
    })
    if (!res.ok) {
      const detail = await res.text().catch(() => "")
      return { ok: false, skipped: false, reason: `resend ${res.status}: ${detail.slice(0, 200)}` }
    }
    const json = (await res.json().catch(() => ({}))) as { id?: string }
    return { ok: true, id: json.id ?? "" }
  } catch (e) {
    return {
      ok: false,
      skipped: false,
      reason: e instanceof Error ? e.message : "send failed",
    }
  }
}

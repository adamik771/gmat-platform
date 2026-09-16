import { SITE_CONTACT_EMAIL } from "@/lib/site"
import {
  manualPaymentMailto,
  manualPaymentWhatsAppUrl,
} from "@/lib/manual-payment"

const GOLD = "#C9A84C"
const BG = "#0A0A0A"
const CARD = "#111111"
const TEXT = "#E8E8E8"
const MUTED = "#9A9A9A"

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export function trialExpiryPaymentEmail(input: {
  firstName: string | null
  accountEmail: string
}): { subject: string; html: string; text: string } {
  const firstName = input.firstName?.trim()
  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Hi,"
  const textGreeting = firstName ? `Hi ${firstName},` : "Hi,"
  const contactHref = escapeHtml(
    manualPaymentMailto({ accountEmail: input.accountEmail }),
  )
  const whatsappHref = escapeHtml(manualPaymentWhatsAppUrl())
  const subject = "Your Zakarian GMAT trial has ended"

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:${BG};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};">
      <tr><td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:${CARD};border:1px solid rgba(255,255,255,0.07);border-radius:16px;overflow:hidden;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
          <tr><td style="padding:28px 32px 0 32px;">
            <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${GOLD};font-weight:600;">Zakarian GMAT</p>
          </td></tr>
          <tr><td style="padding:18px 32px 8px 32px;">
            <h1 style="margin:0;font-size:23px;line-height:1.25;color:#F5F5F5;font-weight:600;">Your trial has ended</h1>
          </td></tr>
          <tr><td style="padding:6px 32px 0 32px;">
            <div style="font-size:15px;line-height:1.65;color:${TEXT};">
              <p style="margin:0 0 14px 0;">${greeting}</p>
              <p style="margin:0 0 14px 0;">I hope you have enjoyed using Zakarian GMAT and found the platform useful for your preparation.</p>
              <p style="margin:0 0 14px 0;">Online checkout is temporarily unavailable, and I am sorry for the inconvenience. Your study history and progress are safe.</p>
              <p style="margin:0;">If you would like to continue, reply to this email or use the button below. I will send the available payment instructions and activate access on the same account once payment is confirmed.</p>
            </div>
          </td></tr>
          <tr><td style="padding:24px 32px 4px 32px;">
            <a href="${whatsappHref}" style="display:inline-block;background:${GOLD};color:#0A0A0A;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:9px;">Message Adam on WhatsApp</a>
          </td></tr>
          <tr><td style="padding:28px 32px 28px 32px;">
            <p style="margin:0;font-size:12px;line-height:1.6;color:${MUTED};border-top:1px solid rgba(255,255,255,0.07);padding-top:16px;">
              Prefer email? <a href="${contactHref}" style="color:${GOLD};text-decoration:underline;">Write to ${SITE_CONTACT_EMAIL}</a>. This is a one-time service email about your trial, not a marketing subscription.
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`

  const text = `${textGreeting}

I hope you have enjoyed using Zakarian GMAT and found the platform useful for your preparation.

Your free trial has ended. Online checkout is temporarily unavailable, and I am sorry for the inconvenience. Your study history and progress are safe.

If you would like to continue, message me on WhatsApp here:
${manualPaymentWhatsAppUrl()}

The message is prepared for you. You can also reply to this email or write to ${SITE_CONTACT_EMAIL}. I will send the available payment instructions and activate access on the same account once payment is confirmed.

This is a one-time service email about your trial, not a marketing subscription.`

  return { subject, html, text }
}

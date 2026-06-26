/**
 * Branded transactional auth emails, delivered through Resend (src/lib/email.ts)
 * instead of Supabase's default mailer — so password-reset / recovery mail looks
 * like the product rather than a generic Supabase template. Pure functions:
 * return { subject, html, text }; the caller does the sending. Inline styles
 * only (email clients ignore <style> blocks and external CSS). Mirrors the
 * visual language of reminder-emails.ts.
 */

const GOLD = "#C9A84C"
const BG = "#0A0A0A"
const CARD = "#111111"
const TEXT = "#E8E8E8"
const MUTED = "#9A9A9A"

export function passwordResetEmail(opts: { resetUrl: string }): {
  subject: string
  html: string
  text: string
} {
  const { resetUrl } = opts
  const subject = "Reset your Zakarian GMAT password"

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
            <h1 style="margin:0;font-size:23px;line-height:1.25;color:#F5F5F5;font-weight:600;">Reset your password</h1>
          </td></tr>
          <tr><td style="padding:6px 32px 0 32px;">
            <div style="font-size:15px;line-height:1.6;color:${TEXT};">
              We received a request to reset the password on your Zakarian GMAT account. Click the button below to choose a new one. This link expires in one hour.
            </div>
          </td></tr>
          <tr><td style="padding:24px 32px 4px 32px;">
            <a href="${resetUrl}" style="display:inline-block;background:${GOLD};color:#0A0A0A;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:9px;">Set a new password</a>
          </td></tr>
          <tr><td style="padding:28px 32px 28px 32px;">
            <p style="margin:0;font-size:12px;line-height:1.6;color:${MUTED};border-top:1px solid rgba(255,255,255,0.07);padding-top:16px;">
              If you didn't request this, you can safely ignore this email — your password won't change. For your security, don't forward this email: the link sets a new password for whoever opens it.
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`

  const text = `Reset your Zakarian GMAT password

We received a request to reset the password on your account. Open this link to choose a new one (it expires in one hour):

${resetUrl}

If you didn't request this, you can safely ignore this email — your password won't change.`

  return { subject, html, text }
}

/**
 * Content builders for reminder emails. Pure functions — return
 * {subject, html, text}; the cron route does the sending. Inline styles
 * only (email clients ignore <style> blocks and external CSS).
 */

export type ReminderStage = "week" | "day" | "overdue"

const GOLD = "#C9A84C"
const BG = "#0A0A0A"
const CARD = "#111111"
const TEXT = "#E8E8E8"
const MUTED = "#9A9A9A"

function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://www.zakariangmat.com"
}

function shell(opts: {
  heading: string
  accent: string
  body: string
  ctaLabel: string
  ctaHref: string
}): string {
  const settingsHref = `${siteUrl()}/settings`
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:${BG};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};">
      <tr><td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:${CARD};border:1px solid rgba(255,255,255,0.07);border-radius:16px;overflow:hidden;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
          <tr><td style="padding:28px 32px 0 32px;">
            <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${GOLD};font-weight:600;">Zakarian GMAT</p>
          </td></tr>
          <tr><td style="padding:18px 32px 8px 32px;">
            <h1 style="margin:0;font-size:23px;line-height:1.25;color:#F5F5F5;font-weight:600;">${opts.heading}</h1>
          </td></tr>
          <tr><td style="padding:6px 32px 0 32px;">
            <div style="font-size:15px;line-height:1.6;color:${TEXT};">${opts.body}</div>
          </td></tr>
          <tr><td style="padding:24px 32px 4px 32px;">
            <a href="${opts.ctaHref}" style="display:inline-block;background:${opts.accent};color:#0A0A0A;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:9px;">${opts.ctaLabel}</a>
          </td></tr>
          <tr><td style="padding:28px 32px 28px 32px;">
            <p style="margin:0;font-size:12px;line-height:1.6;color:${MUTED};border-top:1px solid rgba(255,255,255,0.07);padding-top:16px;">
              You're getting this because exam reminders are on. <a href="${settingsHref}" style="color:${GOLD};text-decoration:underline;">Manage email preferences</a>.
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`
}

export function officialExamReminderEmail(opts: {
  firstName: string | null
  stage: ReminderStage
  dueLabel: string
  daysUntil: number
  enteredCount: number
  totalSlots: number
}): { subject: string; html: string; text: string } {
  const hi = opts.firstName ? `${opts.firstName}, ` : ""
  const planHref = `${siteUrl()}/mock`
  const progress = `${opts.enteredCount} of ${opts.totalSlots} official exams entered so far.`
  const conditions =
    "Take it on mba.com under full exam conditions — same start time as your real slot, one sitting, official breaks, phone away, the laminated booklet for scratch work — then enter the score to keep your trend honest."

  if (opts.stage === "overdue") {
    return {
      subject: "Your official practice exam is overdue",
      html: shell({
        heading: "Your official practice exam is overdue",
        accent: "#FF8A65",
        ctaLabel: "Open the exam plan",
        ctaHref: planHref,
        body: `<p style="margin:0 0 12px 0;">${hi}your next scheduled official practice exam was due <strong style="color:#F5F5F5;">${opts.dueLabel}</strong> and isn't logged yet. Don't let the schedule slip — the weekly cadence is what makes the trend mean anything.</p>
          <p style="margin:0 0 12px 0;">${conditions}</p>
          <p style="margin:0;color:${MUTED};font-size:13px;">${progress}</p>`,
      }),
      text: `${hi}your next official practice exam was due ${opts.dueLabel} and isn't logged yet. Take it on mba.com under full exam conditions, then enter your score: ${planHref}. ${progress}`,
    }
  }

  if (opts.stage === "day") {
    return {
      subject: "Official practice exam — due today",
      html: shell({
        heading: "Your official practice exam is due today",
        accent: GOLD,
        ctaLabel: "Open the exam plan",
        ctaHref: planHref,
        body: `<p style="margin:0 0 12px 0;">${hi}today is your scheduled official practice exam (<strong style="color:#F5F5F5;">${opts.dueLabel}</strong>).</p>
          <p style="margin:0 0 12px 0;">${conditions}</p>
          <p style="margin:0;color:${MUTED};font-size:13px;">${progress}</p>`,
      }),
      text: `${hi}today (${opts.dueLabel}) is your scheduled official practice exam. Take it under full exam conditions on mba.com, then enter your score: ${planHref}. ${progress}`,
    }
  }

  // stage === "week"
  const days = `${opts.daysUntil} day${opts.daysUntil === 1 ? "" : "s"}`
  return {
    subject: `Official practice exam due ${opts.dueLabel}`,
    html: shell({
      heading: `Your next official practice exam is ${days} away`,
      accent: GOLD,
      ctaLabel: "See your exam plan",
      ctaHref: planHref,
      body: `<p style="margin:0 0 12px 0;">${hi}your next scheduled official practice exam is <strong style="color:#F5F5F5;">${opts.dueLabel}</strong> (${days} from now). Block the time now so it happens.</p>
        <p style="margin:0 0 12px 0;">${conditions}</p>
        <p style="margin:0;color:${MUTED};font-size:13px;">${progress}</p>`,
    }),
    text: `${hi}your next official practice exam is ${opts.dueLabel} (${days} away). Take it under full exam conditions on mba.com, then enter your score: ${planHref}. ${progress}`,
  }
}

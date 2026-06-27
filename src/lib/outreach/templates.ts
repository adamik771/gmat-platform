/**
 * Outreach email templates: a shared brand shell + one builder per sequence
 * step. Every rendered email carries an unsubscribe link and the
 * not-affiliated / no-guarantee footer. No diagnostic claims, no score
 * promises, no GMAC/mba.com affiliation — see COMPLIANCE_RULES.md.
 *
 * Pure rendering (no I/O); copy is the editorial source of truth that
 * EMAIL_SEQUENCES.md mirrors.
 */

const GOLD = "#C9A84C"

export interface TemplateContext {
  firstName?: string | null
  /** Absolute site origin, e.g. https://www.zakariangmat.com (no trailing slash). */
  siteUrl: string
  /** Full unsubscribe URL incl. token. */
  unsubscribeUrl: string
  /** Plain-English reason this person is on the list (consent source). */
  consentReason?: string | null
  downloadUrl?: string | null
  referralUrl?: string | null
  /** When set, CTA links route through the click-tracking redirect. */
  clickBase?: string | null
  /** When set, an open-tracking pixel is embedded. */
  openPixelUrl?: string | null
}

interface BuiltEmail {
  subject: string
  preheader: string
  heading: string
  paragraphs: string[]
  cta?: { label: string; href: string }
}

export interface RenderedEmail {
  subject: string
  html: string
  text: string
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function greeting(ctx: TemplateContext): string {
  const name = ctx.firstName?.trim()
  return name ? `Hi ${name},` : "Hi there,"
}

const path = (ctx: TemplateContext, p: string) => `${ctx.siteUrl}${p}`

/** Builders, keyed by template_key. */
const TEMPLATES: Record<string, (ctx: TemplateContext) => BuiltEmail> = {
  // A. New signup ------------------------------------------------------------
  "signup-welcome": (c) => ({
    subject: "Welcome to Zakarian GMAT",
    preheader: "You're in. Here's what the platform actually does.",
    heading: "You're in.",
    paragraphs: [
      greeting(c),
      "Thanks for signing up. Zakarian GMAT is a structured GMAT Focus prep system: 62 chapters, a big practice bank, a six-tag error log, spaced review, full-length mocks, and a study plan built from your own baseline.",
      "It's free to use while we're in private beta. Start whenever you're ready.",
    ],
    cta: { label: "Open your dashboard", href: path(c, "/dashboard") },
  }),
  "signup-start": (c) => ({
    subject: "How to start (do this first)",
    preheader: "Baseline with an official practice exam, then let the plan target your weak areas.",
    heading: "First move: set your baseline",
    paragraphs: [
      greeting(c),
      "The fastest way to make your study time count is to baseline with an official mba.com practice exam and enter your section scores on the platform. That baseline calibrates your study plan so you work on your weak areas first.",
      "No promises on timeline or score — that depends on you. The point is to stop guessing about what to study.",
    ],
    cta: { label: "Set your baseline", href: path(c, "/mock") },
  }),
  "signup-invite": (c) => ({
    subject: "Know someone else prepping?",
    preheader: "Bring a friend in — you both get founding pricing.",
    heading: "Prep is easier with someone",
    paragraphs: [
      greeting(c),
      "If a friend or classmate is also studying for the GMAT, you can bring them in. They get founding pricing, and you get a small thank-you for the referral.",
      "Your personal invite link is on the refer page.",
    ],
    cta: { label: "Invite a friend", href: path(c, "/refer") },
  }),
  "signup-founding": (c) => ({
    subject: "Lock in founding pricing while the beta's free",
    preheader: "Free now; founding users hold an early price for when it goes paid.",
    heading: "Founding access",
    paragraphs: [
      greeting(c),
      "The platform is free during the private beta, so there's nothing to pay today. Founding users lock in early pricing for when it goes paid later — premium early access, not a discount bin.",
      "If you'd like your founding spot held, reserve it and I'll note it.",
    ],
    cta: { label: "Reserve founding access", href: path(c, "/pricing") },
  }),
  "signup-feedback": (c) => ({
    subject: "What's working? What's annoying?",
    preheader: "I read every reply — tell me the annoying part.",
    heading: "Two questions",
    paragraphs: [
      greeting(c),
      "You've had a little time with the platform. What's working, and what's the most annoying thing right now? I'd rather hear the annoying part — I actually ship fixes.",
      "Just reply to this email, or use the contact page.",
    ],
    cta: { label: "Send feedback", href: path(c, "/contact") },
  }),

  // B. Founding reservation --------------------------------------------------
  "founding-confirm": (c) => ({
    subject: "Your founding access is reserved",
    preheader: "Free beta access now; your founding price is held.",
    heading: "Reserved.",
    paragraphs: [
      greeting(c),
      "Thanks for reserving founding access. You have free access to the full platform during the beta right now, and your founding price is held for when payment turns on later.",
      "I handle founding access by hand for now, so I'll be in touch personally if anything's needed.",
    ],
    cta: { label: "Open the platform", href: path(c, "/dashboard") },
  }),
  "founding-includes": (c) => ({
    subject: "What your beta access includes",
    preheader: "62 chapters, the question bank, mocks, review, and a baseline-driven plan.",
    heading: "What you've got",
    paragraphs: [
      greeting(c),
      "Your beta access is the whole platform: 62 chapters, the full practice bank, full-length mocks, the spaced review queue, the error log, and a study plan built from your official practice-exam baseline. No card required.",
      "If you only do one thing this week, set your baseline so the plan can calibrate.",
    ],
    cta: { label: "Set your baseline", href: path(c, "/mock") },
  }),
  "founding-referral": (c) => ({
    subject: "Bring a founding friend, get $50",
    preheader: "They get founding pricing; you get a $50 reward.",
    heading: "Refer a friend",
    paragraphs: [
      greeting(c),
      "If you know someone prepping, refer them: they get the founding rate, and you get a $50 reward (credit toward your plan or cash) once they join. Tracked by hand for now, so nothing slips.",
    ],
    cta: { label: "Share your link", href: path(c, "/refer") },
  }),
  "founding-next": (c) => ({
    subject: "Your next step",
    preheader: "A quick check-in on where you are.",
    heading: "Where are you at?",
    paragraphs: [
      greeting(c),
      "Quick check-in. If you've started, the highest-leverage move is reviewing your misses in the error log and running your daily review queue. If you haven't started yet, reply and tell me what's in the way — I'll help.",
    ],
    cta: { label: "Open your study plan", href: path(c, "/study-plan") },
  }),

  // C. Error-log / template lead ---------------------------------------------
  "errorlog-deliver": (c) => ({
    subject: "Your GMAT error-log template",
    preheader: "The six-tag taxonomy, in a spreadsheet you can run yourself.",
    heading: "Here's your template",
    paragraphs: [
      greeting(c),
      "Here's the error-log template you asked for — the same six-tag taxonomy I used: Conceptual, Careless, Time Pressure, Misread, Strategy, Other. Log every miss with a tag and a one-line reason.",
      "Two months of honest logging surfaces the patterns that are actually costing you points.",
    ],
    cta: { label: "Download the template", href: path(c, "/resources") },
  }),
  "errorlog-howto": (c) => ({
    subject: "How to actually use the error log",
    preheader: "The pattern is the point — review weekly, not just log.",
    heading: "Make the log work",
    paragraphs: [
      greeting(c),
      "Logging is half of it. The other half is review: once a week, sort by tag and look at the biggest cluster. That's your highest-leverage fix for the next week — same trap, different surface forms.",
      "Most people log and never review. Don't be most people.",
    ],
    cta: { label: "Read the method", href: path(c, "/resources") },
  }),
  "errorlog-beta": (c) => ({
    subject: "The error log on autopilot",
    preheader: "The platform automates the log, the review, and the plan.",
    heading: "Want this automated?",
    paragraphs: [
      greeting(c),
      "If the spreadsheet's been useful, the platform is the spreadsheet on autopilot: it tags your misses, builds a spaced review queue, and re-prioritizes your study plan from your last sessions. It's free during the private beta.",
    ],
    cta: { label: "Try the beta free", href: path(c, "/signup") },
  }),
  "errorlog-founding": (c) => ({
    subject: "Founding access (while it's free)",
    preheader: "Lock in founding pricing before it goes paid.",
    heading: "Founding access",
    paragraphs: [
      greeting(c),
      "One more option: founding users lock in early pricing now, while the platform is free in beta, for when it goes paid later. No charge today.",
    ],
    cta: { label: "Reserve founding access", href: path(c, "/pricing") },
  }),

  // D. Inactive user ---------------------------------------------------------
  "inactive-restart": (c) => ({
    subject: "A 20-minute restart",
    preheader: "One short session beats a perfect plan you don't run.",
    heading: "Pick it back up",
    paragraphs: [
      greeting(c),
      "It's been a few days. The trick isn't a perfect plan — it's one short session today. Open your review queue and do twenty minutes on a single weak area.",
    ],
    cta: { label: "Open your review queue", href: path(c, "/review") },
  }),
  "inactive-plan": (c) => ({
    subject: "Your study plan is waiting",
    preheader: "It re-prioritizes from your last misses — just open today's focus.",
    heading: "Today's focus is ready",
    paragraphs: [
      greeting(c),
      "Your study plan re-prioritizes itself from your most recent misses, so you don't have to decide what to do — just open today's focus and start there.",
    ],
    cta: { label: "See today's focus", href: path(c, "/study-plan") },
  }),
  "inactive-blocked": (c) => ({
    subject: "What got in the way?",
    preheader: "Honest question — what blocked you?",
    heading: "What's blocking you?",
    paragraphs: [
      greeting(c),
      "Honest question: what got in the way — time, a confusing topic, or just life? Reply and tell me. I read every message and I'll help you get unstuck.",
    ],
    cta: { label: "Tell me what's blocking you", href: path(c, "/contact") },
  }),

  // E. Milestone referral ----------------------------------------------------
  "milestone-first-practice": (c) => ({
    subject: "Nice — first set done",
    preheader: "The habit that moves scores is reviewing misses.",
    heading: "First set, done",
    paragraphs: [
      greeting(c),
      "You ran your first practice set — good. The habit that actually moves scores is reviewing what you missed, not just doing more questions. Tag those misses in the error log.",
      "And if a friend's prepping too, you can bring them in — you both get founding pricing.",
    ],
    cta: { label: "Invite a friend", href: path(c, "/refer") },
  }),
  "milestone-mock-review": (c) => ({
    subject: "You reviewed a full mock — that's the work",
    preheader: "Most people skip mock review. You didn't.",
    heading: "That's the real work",
    paragraphs: [
      greeting(c),
      "You reviewed a full-length mock — most people stack mocks and never review them, which is where the points hide. Nicely done.",
      "Know someone grinding mocks without reviewing? Send them your invite link.",
    ],
    cta: { label: "Share your link", href: path(c, "/refer") },
  }),
  "milestone-progress": (c) => ({
    subject: "Your trend is moving",
    preheader: "If the system's working, a referral is the best compliment.",
    heading: "Your trend is up",
    paragraphs: [
      greeting(c),
      "Your mock-to-mock trend is moving in the right direction. That's the system working — and the consistency is yours.",
      "If it's helping, the highest compliment is sending a friend who's prepping.",
    ],
    cta: { label: "Refer a friend", href: path(c, "/refer") },
  }),
}

export function isKnownTemplate(key: string): boolean {
  return key in TEMPLATES
}

function shell(b: BuiltEmail, ctx: TemplateContext): string {
  const reason = ctx.consentReason?.trim() || "you signed up at zakariangmat.com"
  const paras = b.paragraphs
    .map(
      (p) =>
        `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#C0C0C0;">${esc(
          p
        )}</p>`
    )
    .join("")
  const ctaHref = b.cta
    ? ctx.clickBase
      ? `${ctx.clickBase}&u=${encodeURIComponent(b.cta.href)}`
      : b.cta.href
    : ""
  const button = b.cta
    ? `<a href="${ctaHref}" style="display:inline-block;background:${GOLD};color:#0A0A0A;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:9px;margin:4px 0 8px;">${esc(
        b.cta.label
      )}</a>`
    : ""
  const pixel = ctx.openPixelUrl
    ? `<img src="${ctx.openPixelUrl}" width="1" height="1" alt="" style="display:none;border:0;" />`
    : ""
  return `<!doctype html><html><body style="margin:0;background:#0A0A0A;padding:24px 0;">
  <span style="display:none;visibility:hidden;opacity:0;height:0;width:0;overflow:hidden;">${esc(
    b.preheader
  )}</span>
  <div style="max-width:560px;margin:0 auto;background:#111111;border-radius:14px;border:1px solid rgba(255,255,255,0.08);padding:32px;">
    <p style="margin:0 0 18px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${GOLD};font-weight:600;">Zakarian GMAT</p>
    <h1 style="margin:0 0 16px;font-size:23px;line-height:1.25;color:#F5F5F5;font-weight:600;">${esc(
      b.heading
    )}</h1>
    ${paras}
    ${button}
    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:24px 0 16px;" />
    <p style="margin:0 0 8px;font-size:12px;line-height:1.5;color:#777777;">You're receiving this because ${esc(
      reason
    )}. <a href="${ctx.unsubscribeUrl}" style="color:#999999;text-decoration:underline;">Unsubscribe</a> anytime.</p>
    <p style="margin:0;font-size:11px;line-height:1.5;color:#555555;">Zakarian GMAT is independent GMAT prep. It is not affiliated with, endorsed by, or sponsored by GMAC, the GMAT, or mba.com. No score is guaranteed.</p>
    ${pixel}
  </div>
</body></html>`
}

function textVersion(b: BuiltEmail, ctx: TemplateContext): string {
  const reason = ctx.consentReason?.trim() || "you signed up at zakariangmat.com"
  const lines = [
    b.heading,
    "",
    ...b.paragraphs,
    "",
    b.cta ? `${b.cta.label}: ${b.cta.href}` : "",
    "",
    "—",
    `You're receiving this because ${reason}. Unsubscribe: ${ctx.unsubscribeUrl}`,
    "Zakarian GMAT is independent GMAT prep — not affiliated with GMAC, the GMAT, or mba.com. No score is guaranteed.",
  ]
  return lines.filter((l) => l !== undefined).join("\n")
}

/** Render a queued template into a sendable email. Throws on unknown key. */
export function renderTemplate(
  templateKey: string,
  ctx: TemplateContext
): RenderedEmail {
  const builder = TEMPLATES[templateKey]
  if (!builder) throw new Error(`renderTemplate: unknown template "${templateKey}"`)
  const built = builder(ctx)
  return {
    subject: built.subject,
    html: shell(built, ctx),
    text: textVersion(built, ctx),
  }
}

/** All template keys (for tests / coverage checks). */
export const TEMPLATE_KEYS = Object.keys(TEMPLATES)

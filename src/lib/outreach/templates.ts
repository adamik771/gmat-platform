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
  // Founder-nurture rewrite (2026-07-04): TTP-style narrative structure
  // (cost-of-delay, evaluation criteria, anchored offer) delivered in Adam's
  // own 565->735 voice. Honesty rails: real prices, real urgency only
  // (founding rate exists until checkout opens), approximate counts, no
  // invented programs or ratings.
  "signup-welcome": (c) => ({
    subject: "You're in. Here's where I'd start.",
    preheader:
      "I went 565 to 735 on the GMAT Focus. This platform is that system — and it's free during private beta.",
    heading: "Welcome to Zakarian GMAT",
    paragraphs: [
      greeting(c),
      "Quick story first. My first GMAT Focus score was a 565. I rebuilt my prep from scratch — pretest, reading, recall checks, graded problem sets, every miss logged and reviewed until it stopped repeating. I finished at 735, the 100th percentile. This platform is that system, chapter by chapter.",
      "You have all of it free while we're in private beta: 50+ interactive chapters, 1,900+ practice questions, full-length mocks, the six-tag error log, and daily spaced review.",
      "One thing before you dive in: your study plan calibrates from a real baseline — an official mba.com practice exam. If you have a recent official score, start your plan from it. If not, take one this week. Honest baseline first, everything else second.",
      "Last thing: I'm a solo founder. There's no support team behind this address — replies come to me, and I answer them personally.",
    ],
    cta: { label: "Open your dashboard", href: path(c, "/dashboard") },
  }),
  "signup-start": (c) => ({
    subject: "The biggest obstacle isn't intelligence",
    preheader:
      "I lost months to drift before the 735. Here's the smallest way to avoid repeating my mistake.",
    heading: "The most expensive thing in GMAT prep",
    paragraphs: [
      greeting(c),
      "When I was stuck at 565, my problem wasn't ability. It was drift. I studied in bursts, took weeks off, and re-learned the same rate problems three separate times. The distance between 565 and 735 wasn't talent — it was consistency I hadn't built yet.",
      "Delay has a real bill, and it compounds quietly: a pushed-back test date, retake fees, a rushed application in a later round, and hours spent re-learning things you knew a month ago.",
      "So my ask is deliberately small: one chapter today. Pretest, read, recall check, problem set. About an hour. Not a heroic five-hour Saturday you'll never repeat — just today's hour.",
      "String a few of those together and the system takes over: daily spaced review keeps yesterday's work from leaking away, and the plan tells you what tomorrow's hour is. Your only job is to show up for it.",
    ],
    cta: { label: "Start your first chapter", href: path(c, "/chapters") },
  }),
  "signup-consult": (c) => ({
    subject: "A free 30-minute call, if you want one",
    preheader:
      "Your plan, a plateau, timing, retakes — bring anything. No pitch waiting at minute 25.",
    heading: "Thirty minutes, one on one",
    paragraphs: [
      greeting(c),
      "Now that you're in, I want to offer you something I hold time for every week: a free 30-minute call with me about your prep. Bring anything — your study plan, a score plateau, section timing, whether to retake, how the exam really works, or how to get the most out of the platform for your target score.",
      "To be clear: it's completely free, there's no obligation, and it is not a sales call in disguise. There's no pitch waiting for you at minute 25. My goal isn't to sell you anything — it's to help you reach your full potential on this test. After we talk, you can prep with my materials, a competitor's, or none at all. Genuinely fine by me.",
      "If the call helps you score even 10 points higher, I'll be proud of that. You should be too.",
      "One limit: it's just me, so I can take a handful of calls each week, first come first served. Reply with two or three times that work for you this week, plus your timezone, and I'll confirm.",
    ],
    cta: { label: "Send me your times", href: path(c, "/contact") },
  }),
  // One-time manual consult blast to opted-in LEADS (newsletter / error-log
  // downloaders who may have no account) — story-led variant. Not part of any
  // sequence; sent only by scripts/send-consult-batch.ts. Signup-source
  // subscribers get "signup-consult" instead.
  "consult-lead": (c) => ({
    subject: "i was stuck at 565 too",
    preheader:
      "The 30-minute call I wish someone had offered me back then — your plan, a plateau, retakes, anything.",
    heading: "Thirty minutes, one on one",
    paragraphs: [
      greeting(c),
      "My first real GMAT score was 565, after months of studying. I was busy, not improving, and too stubborn to admit it. What got me to 735 wasn't a trick — it was looking honestly at where my study time actually went and which mistakes kept repeating.",
      "I'd like to help you do the same, so I'm offering a free 30-minute call about your prep. Bring anything: your study plan, a score plateau, section timing, whether to retake, how the exam really works.",
      "To be clear: it's completely free, there's no obligation, and it is not a sales call in disguise. There's no pitch waiting for you at minute 25. My goal isn't to sell you anything — it's to help you reach your full potential on this test. After we talk, you can prep with my materials, a competitor's, or none at all. Genuinely fine by me.",
      "If the call helps you score even 10 points higher, I'll be proud of that. You should be too.",
      "One limit: it's just me, so I can take a handful of calls each week, first come first served. Reply with two or three times that work for you this week, plus your timezone, and I'll confirm.",
    ],
    cta: { label: "Send me your times", href: path(c, "/contact") },
  }),
  "signup-invite": (c) => ({
    subject: "Know someone else fighting this test?",
    preheader:
      "Your friend locks founding pricing, you get $50. Tracked by hand, by me.",
    heading: "Prep is easier when someone knows your test date",
    paragraphs: [
      greeting(c),
      "My own prep only got serious once someone else knew my test date. Accountability beats motivation, and it isn't close. If a classmate or friend is grinding toward the same score, you'll both study more together.",
      "The deal: send them your referral link. They lock founding-member pricing before checkout opens, and you get $50 when the referral goes through.",
      "Full transparency — there's no slick referral software behind this yet. I track every referral by hand. It's a real program with two real beneficiaries: your friend and you.",
      "And right now it costs them nothing to try — the whole platform is free during private beta. Worst case, they studied free alongside you for a while.",
    ],
    cta: { label: "Get your referral link", href: path(c, "/refer") },
  }),
  "signup-founding": (c) => ({
    subject: "Founding pricing, before checkout opens",
    preheader:
      "Self-Study will be $429. Founding members lock about $299. Reserving is free — nothing to pay today.",
    heading: "How to judge any GMAT course — then our numbers",
    paragraphs: [
      greeting(c),
      "Before the prices, here's how I'd evaluate any GMAT course, mine included: original questions at realistic difficulty, a system that forces you to confront your errors instead of just logging hours, and mocks plus a study plan calibrated against official material. If a course can't show you those three things, keep your money — whether it's mine or anyone else's.",
      "That's the standard I built to: 50+ interactive chapters, 1,900+ practice questions, a six-tag error log, daily spaced review, full-length mocks, and a plan calibrated from your official mba.com practice exam baseline.",
      "Now the numbers. When checkout opens, Self-Study will be $429 for 4 months. Self-Study + Mentorship — direct WhatsApp Q&A with me — will be $599 for 6 months.",
      "Founding members lock roughly $299 and $399 instead. Reserving is free and there's nothing to pay today — you pay only when checkout opens, and every paid plan carries a 14-day money-back guarantee.",
      "No countdown timer, because there isn't one. The founding rate exists until checkout opens, then it's gone. That's the whole pitch.",
    ],
    cta: { label: "Reserve your founding rate", href: path(c, "/pricing") },
  }),
  "signup-feedback": (c) => ({
    subject: "One question (I read every reply)",
    preheader:
      "No survey, no ticket system. Just tell me the most annoying thing about the platform so far.",
    heading: "Tell me what's broken",
    paragraphs: [
      greeting(c),
      "You've had access for about ten days now, so I want one thing from you — and it isn't money.",
      "What's the single most annoying, confusing, or missing thing so far? A chapter that dragged. An explanation that felt off. A feature you expected and couldn't find. One sentence is plenty.",
      "And if you haven't started yet, that's an answer too — tell me what stopped you. That's some of the most useful feedback a beta user can give me.",
      "There's no support team and no ticket queue here. Your reply lands in my inbox, I read every one, and it shapes what I build next. Reply directly, or use the contact page if you prefer a form.",
    ],
    cta: { label: "Send me a note", href: path(c, "/contact") },
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

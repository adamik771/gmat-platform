/**
 * One-time manual batch: send the free-consultation email to opted-in
 * subscribers. Renders through the outreach template shell, so every mail
 * carries the real unsubscribe link, the GMAC non-affiliation disclaimer, and
 * the List-Unsubscribe headers — identical compliance to the cron worker.
 *
 * Audience = email_subscriptions where subscribed=true. Variant per source:
 *   signup*        -> "signup-consult" ("now that you're in")
 *   everything else -> "consult-lead"  (story-led, for list-only leads)
 *
 * Modes (default is a no-op preview — you must pass --live to actually send):
 *   # preview who gets which variant, no send:
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/send-consult-batch.ts --dry-run
 *   # send ONE test to yourself and stop:
 *   node ... scripts/send-consult-batch.ts --test adamzakaryan17@gmail.com
 *   # send to the whole opted-in list:
 *   node ... scripts/send-consult-batch.ts --live
 *
 * Needs: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY,
 * EMAIL_FROM (a monitored, replyable address — replies are the whole point).
 */
import { renderTemplate } from "../src/lib/outreach/templates.ts"
import { sendEmail } from "../src/lib/email.ts"
import { consentReasonFor } from "../src/lib/outreach/labels.ts"

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.zakariangmat.com"
).replace(/\/$/, "")
const SUPA = process.env.NEXT_PUBLIC_SUPABASE_URL
const SVC = process.env.SUPABASE_SERVICE_ROLE_KEY

const unsubUrl = (t: string) =>
  `${SITE_URL}/unsubscribe?token=${encodeURIComponent(t)}`
const listUnsubUrl = (t: string) =>
  `${SITE_URL}/api/email/unsubscribe?token=${encodeURIComponent(t)}`

const templateFor = (source: string | null) =>
  source && source.startsWith("signup") ? "signup-consult" : "consult-lead"

interface Sub {
  email: string
  consent_source: string | null
  unsubscribe_token: string
}

async function fetchSubscribers(): Promise<Sub[]> {
  if (!SUPA || !SVC) throw new Error("Supabase env not set")
  const url =
    `${SUPA}/rest/v1/email_subscriptions` +
    `?select=email,consent_source,unsubscribe_token&subscribed=eq.true`
  const res = await fetch(url, {
    headers: { apikey: SVC, authorization: `Bearer ${SVC}` },
  })
  if (!res.ok) throw new Error(`supabase ${res.status}: ${await res.text()}`)
  return (await res.json()) as Sub[]
}

async function sendOne(sub: Sub, firstName: string | null) {
  const key = templateFor(sub.consent_source)
  const rendered = renderTemplate(key, {
    firstName,
    siteUrl: SITE_URL,
    unsubscribeUrl: unsubUrl(sub.unsubscribe_token),
    consentReason: consentReasonFor(sub.consent_source ?? ""),
  })
  return sendEmail({
    to: sub.email,
    subject: rendered.subject,
    html: rendered.html,
    text: rendered.text,
    headers: {
      "List-Unsubscribe": `<${listUnsubUrl(sub.unsubscribe_token)}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  })
}

const args = process.argv.slice(2)
const live = args.includes("--live")
const dryRun = args.includes("--dry-run")
const testIdx = args.indexOf("--test")
const testTo = testIdx >= 0 ? args[testIdx + 1] : null

if (testTo) {
  // Single test send, signup-consult variant, so you can eyeball it.
  const res = await sendOne(
    { email: testTo, consent_source: "signup", unsubscribe_token: "test-token" },
    "Adam"
  )
  console.log("test ->", testTo, JSON.stringify(res))
  process.exit(res.ok ? 0 : 1)
}

const subs = await fetchSubscribers()
console.log(`${subs.length} opted-in subscriber(s):`)
for (const s of subs) {
  console.log(`  ${s.email}  [${s.consent_source}] -> ${templateFor(s.consent_source)}`)
}

if (!live) {
  console.log(
    dryRun
      ? "\n--dry-run: nothing sent."
      : "\nNo --live flag: nothing sent. Re-run with --live to send, or --dry-run to silence this."
  )
  process.exit(0)
}

let ok = 0
let bad = 0
for (const s of subs) {
  const res = await sendOne(s, null)
  console.log(`  ${s.email}: ${JSON.stringify(res)}`)
  res.ok ? ok++ : bad++
}
console.log(`\nsent ${ok}, failed/skipped ${bad}`)
process.exit(bad ? 1 : 0)

> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# Retargeting Audiences — Zakarian GMAT

Internal launch doc for Adam. Defines the retargeting audiences to build from the
site's real funnel events and live pages. Paste-ready definitions for Meta
(Custom Audiences) and Google (Ads remarketing / GA4 audiences).

---

## HARD GATE — DO NOT START RETARGETING YET

Retargeting only works once there is a pool of people to re-target. Right now this
is a brand-new private beta with little to no traffic.

**Do not turn on a single retargeting ad until ALL of these are true:**

- The pixel/tag is live and verified firing (see PIXEL_SETUP_CHECKLIST.md).
- At least **~300-500 unique visitors** have landed since the pixel went live.
- The specific audience you want to run has cleared the platform minimum:
  - **Google:** an audience needs **>= 100 active users/visitors** in the membership
    window before it can serve. Display Remarketing needs **>= 100**; RLSA on
    Search needs **>= 1,000** for Search lists.
  - **Meta:** a Custom Audience technically serves at 100 matched users but the
    pixel should be **warmed** (a few hundred events logged) so delivery is not erratic.

Until the gate is met, every retargeting dollar is wasted showing ads to an
audience too small to optimize. Spend the build period collecting visitors via the
free/organic and tiny Search budget instead. The MINIMUM_BUDGET_PLAN.md spells out
the kill rule.

**Status today: GATE NOT MET. Build the audiences (they accrue members the moment
the pixel is live) but keep every retargeting campaign PAUSED.**

---

## Source data these audiences are built from

Real funnel events (snake_case; fire to Vercel Web Analytics, auto-forwarded to
Meta `fbq` and Google `gtag` once pixels are set). First-touch attribution is
merged into every event automatically.

- `landing_view {page}` — fires on each acquisition/landing page view
- `lead_captured {source, lead_magnet}` — successful email capture
- `signup_initiated {gated}` / `signup {gated}` — form submitted / account created
- `founding_reserve {source, lead_magnet}` — founding access reserved
- `referral_click {channel, named}` — referral share action
- `pricing_view` — pricing page view
- `feedback_click` — feedback button
- `checkout_initiated` / `purchase_completed` — wired, DORMANT until paywall on

Real live pages used for URL-based audiences:
`/gmat-study-plan`, `/gmat-mock-review`, `/gmat-data-insights-practice`,
`/gmat-quant-practice`, `/gmat-private-beta`, `/error-log-template`, `/refer`,
plus `/pricing`, `/score-converter`, `/resources`, `/signup`, `/about`,
`/students`, `/how-we-compare`, `/blog`, `/sample-chapter`.

> Note: `purchase_completed` / `checkout_initiated` are dormant during the free
> beta, so no purchase-based audience can populate yet. The activation/conversion
> we optimize toward right now is `signup`, `lead_captured`, and `founding_reserve`
> (micro-conversions).

---

## Audience design principles

1. **Always suppress converters.** Every audience excludes people who already took
   the next step, so you never pay to re-sell someone who's already in.
2. **Short recency windows.** Intent decays fast. Use 7-30 day windows, not 180.
3. **Build from events where possible** (precise), fall back to page-URL audiences
   (GA4 / Google) where an event-based audience isn't available.
4. **One clear next action per audience** — the message angle maps to exactly one CTA.

---

## A1 — Landing visitors, no signup (top of funnel)

- **Definition:** Fired `landing_view` on ANY acquisition page
  (`/gmat-study-plan`, `/gmat-mock-review`, `/gmat-data-insights-practice`,
  `/gmat-quant-practice`, `/gmat-private-beta`) **AND NOT** fired `signup`
  **AND NOT** `lead_captured`.
- **Meta build:** Custom Audience > Website > event `landing_view`; Exclude
  `signup` and `lead_captured`.
- **Google build:** GA4 audience — included `landing_view` (or page_view on those
  paths); excluded users who triggered `signup`/`lead_captured`.
- **Recency window:** 14 days (7 for the tightest test).
- **Est. size needed before serving:** Google >= 100 members; Meta a few hundred
  pixel events warmed. This is usually the FIRST audience to clear the gate.
- **Message angle:** "It's a free private beta, no card." Low-friction reminder
  + the single honest founder hook (565 -> 735, top 1%, his own result).
  Push the easiest yes: grab the free error-log template or start free.
- **Suppression:** exclude `signup`, `lead_captured`, `founding_reserve`.

---

## A2 — Error-log template downloaders, no account (highest intent, no signup)

- **Definition:** Fired `lead_captured` with `lead_magnet = error-log` (the free CSV
  download on `/error-log-template`) **AND NOT** fired `signup`.
- **Meta build:** Custom Audience > Website > `lead_captured` filtered to the
  error-log magnet (or URL contains `/error-log-template`); Exclude `signup`.
- **Google build:** GA4 audience — `lead_captured` (error-log) include; exclude `signup`.
- **Recency window:** 21 days (these people raised their hand; give them a bit longer).
- **Est. size needed:** Google >= 100; will populate slower than A1 since it's
  download-gated. May take longer to clear the gate — that's fine, keep paused.
- **Message angle:** "You grabbed the error log — the app logs it for you, free
  during beta." Connect the tool they already wanted to the in-app six-tag error
  log + daily spaced-review queue. CTA: create a free account to use it live.
- **Suppression:** exclude `signup`, `founding_reserve`.

---

## A3 — Other lead-magnet leads, no signup (newsletter capture)

- **Definition:** Fired `lead_captured` where `lead_magnet` is the newsletter
  worksheet/newsletter (sources: study-plan, mock-review, data-insights, quant)
  **AND NOT** `signup`.
- **Meta build:** Custom Audience > `lead_captured` (exclude error-log magnet to
  avoid overlap with A2); Exclude `signup`.
- **Google build:** GA4 audience — `lead_captured` (non-error-log) include; exclude `signup`.
- **Recency window:** 21 days.
- **Est. size needed:** Google >= 100; Meta warmed pixel.
- **Message angle:** Match the page they converted on (study plan / mock review /
  data insights / quant). "You're on the list — the full beta is free right now."
  Show the matching capability (adaptive plan from their official mba.com baseline,
  mock-to-mock trend, DI practice, quant bank). CTA: start free.
- **Suppression:** exclude `signup`, `founding_reserve`, and (to avoid double-serving)
  members of A2.

---

## A4 — Pricing viewers, no founding reservation (consideration)

- **Definition:** Fired `pricing_view` **AND NOT** `founding_reserve`.
- **Meta build:** Custom Audience > `pricing_view` (or URL contains `/pricing`);
  Exclude `founding_reserve`.
- **Google build:** GA4 audience — `pricing_view` include; exclude `founding_reserve`.
- **Recency window:** 14 days.
- **Est. size needed:** Google >= 100; Meta warmed. Likely lower volume than A1 —
  may be the slowest to clear; keep paused until it does.
- **Message angle:** Honest price-lock framing. It's free now during the private
  beta; founding members lock the founding price before paid plans turn on.
  No fake urgency, no countdown. CTA: reserve founding access on `/gmat-private-beta`.
- **Suppression:** exclude `founding_reserve`, `signup` (if a signed-up user is the
  goal here, keep them — but at minimum exclude founding reservers).

---

## A5 — Founding reservers, not activated (re-engage warm-but-cold)

- **Definition:** Fired `founding_reserve` **AND NOT** `signup`
  (reserved access but never created an account).
- **Meta build:** Custom Audience > `founding_reserve`; Exclude `signup`.
- **Google build:** GA4 audience — `founding_reserve` include; exclude `signup`.
- **Recency window:** 30 days (warmest non-customers; worth a longer window).
- **Est. size needed:** Google >= 100 — during early beta this audience is tiny,
  so it will likely NOT clear the gate for a while. Email (Sequence B founding) is
  the primary channel for these people; retargeting is secondary. Keep paused.
- **Message angle:** "You reserved your spot — finish setting up, it's free." Warm,
  low-pressure, single CTA to create the account and start.
- **Suppression:** exclude `signup`.

---

## A6 — Signed up but inactive (activation/retention)

- **Definition:** Fired `signup` **AND NOT** the first activation milestone
  (the `first-practice` milestone is wired in the email system; use the same
  signal — e.g. no `feedback_click`/no practice activity within N days). Practically:
  signed-up users who have been idle 3+ days.
- **Meta build:** Custom Audience > `signup`; Exclude the activation signal
  (first-practice event). If the activation event isn't exposed to the pixel, this
  audience stays EMAIL-ONLY (Sequence D inactive at 3/7/14 days) and is NOT run on
  Meta — do not guess.
- **Google build:** GA4 audience — `signup` include; exclude activation event.
- **Recency window:** 30 days.
- **Est. size needed:** Google >= 100 — will be tiny during beta. Treat email
  (Sequence D) as the main re-engagement channel. Retargeting here is the LAST
  audience to fund, only after the others are clearly working.
- **Message angle:** "Pick one weak area and do 10 questions — the error log and
  spaced-review queue do the rest." Concrete first action, no guarantees.
- **Suppression:** exclude anyone who has activated; exclude `purchase_completed`
  once the paywall is on.

---

## Priority order to fund (when the gate is met)

1. **A1** — biggest pool, cheapest re-engagement, clears the gate first.
2. **A2** — highest intent (already downloaded the error-log CSV).
3. **A4** — consideration; clear next step (reserve founding).
4. **A3** — page-matched newsletter leads.
5. **A5 / A6** — usually too small for ads during beta; rely on email sequences
   B and D first.

## Global suppression list (apply to ALL prospecting + retargeting)

- Exclude `signup` from any "get them to sign up" audience.
- Exclude `founding_reserve` from any "reserve founding" audience.
- Exclude `purchase_completed` from everything (dormant now; wire it in the day the
  paywall turns on so you never retarget a paying founding member).
- Build a single "All Converters" exclusion audience (signup OR founding_reserve OR
  purchase_completed) and attach it to every campaign as a blanket exclusion.

## Compliance reminders for audience naming/notes

- No audience name or note may imply a score outcome, a percentile prediction, or
  GMAC/mba.com affiliation. Keep names factual (e.g. "A2_errorlog_no_signup_21d").
- The only performance claim allowed in any creative tied to these audiences is the
  founder's own 565 -> 735 (top 1%), framed as HIS result.

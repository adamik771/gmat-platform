> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# Measurement Dashboard

The one map that ties every tracked event to the funnel metric it feeds, where to read it today, and what a realistic early-beta number looks like. This is decision-support: it tells you what to look at and how to compute it, not what to spend.

Hard context that shapes every benchmark below:
- This is a brand-new private beta with little to no traffic. Numbers are tiny and noisy. Treat single-day swings as noise; trust 7-day rollups.
- The beta is **free, no card** (`PAYWALL_ENABLED` off, Stripe test-mode). So `signup` is the conversion that matters; `checkout_initiated` / `purchase_completed` are wired but dormant — expect zero, and that is correct, not a bug.
- The **only** performance claim anywhere is the founder's own 565 -> 735 (top 1%), framed as his result. No score guarantees, no fake diagnostic, no GMAC affiliation. Nothing in this file changes that.
- Pixels are **dormant**: `NEXT_PUBLIC_META_PIXEL_ID` and `NEXT_PUBLIC_GOOGLE_TAG_ID` are unset, so Meta `CompleteRegistration` and Google conversion columns read **zero even when signups are real**. **Vercel Web Analytics fires regardless** and is the reliable daily source until those IDs are set.

Where the plumbing lives (don't re-derive it): `trackEvent()` and `META_EVENT_MAP` in `src/lib/analytics.ts`; first-touch attribution in `src/components/analytics/AttributionCapture.tsx` (`captureAttribution` -> localStorage `zg_attribution`, merged into every event); pixels in `src/components/analytics/AdPixels.tsx`. Email plumbing: Resend + Supabase tables `email_subscriptions`, `email_queue`, `email_events`; daily cron `0 14 * * *`.

---

## 1. Master event table

Every event `trackEvent()` fires, plus the email-log events. "What good looks like" is a deliberately wide early-beta range at near-zero traffic — read it as order-of-magnitude, not a target to hit.

| Event name | Where it fires (page / component) | What it means | Target metric it feeds | How to debug | What good looks like (early beta) |
|---|---|---|---|---|---|
| `landing_view` `{page}` | `TrackView` on home (`(marketing)/page.tsx`); `AcquisitionLanding` fires `{page: slug}` on each acquisition lander (`/gmat-study-plan`, `/gmat-mock-review`, `/gmat-data-insights-practice`, `/gmat-quant-practice`, `/gmat-private-beta`, `/error-log-template`) | A real human reached a marketing/landing page. Top of the passive funnel and YOUR denominator for every rate below. | Landing visitors; denominator for lead-capture rate and signup rate | Load the exact lander URL with its UTMs; confirm one `landing_view` with the right `{page}` appears in Vercel Analytics Events within ~1 min. Each live lander must log at least one. | A handful to low-tens/day/page early; grows only with spend or SEO. Any page at literal 0 while it has inbound links = tracking or routing problem. |
| `lead_captured` `{source, lead_magnet}` | `LeadCapture` on lead-magnet surfaces (error-log template, study-plan worksheet, mock-review / DI / quant newsletter, sample chapter, converters) | Someone gave their email via an explicit opt-in for a lead magnet. **Secondary conversion.** | Lead capture rate; email opt-in funnel; CPL | Submit a test email on the magnet; confirm `lead_captured` fires with correct `source`/`lead_magnet`, AND a row lands in `email_subscriptions` if opt-in was ticked. | 5-15% of `landing_view` on a strong magnet page (`/error-log-template` is highest-intent, no account needed); lower on soft newsletter magnets. |
| `signup_initiated` `{gated}` | `(auth)/signup/page.tsx` on form submit (the attempt, before account creation) | A signup attempt was made. Diagnostic, **not** a conversion — pairs with `signup` to expose form friction/errors. | Signup form completion rate (`signup` / `signup_initiated`) | Submit signup; confirm `signup_initiated` fires on submit and `signup` fires on success. A big gap between the two = validation/error friction. | `signup` / `signup_initiated` should be high (most attempts succeed); a low ratio means the form is failing people. |
| `signup` `{gated}` | `(auth)/signup/page.tsx` on successful account creation | Account created. **PRIMARY conversion** — the success metric for every acquisition channel. Meta standard `CompleteRegistration`. | Signup rate; cost per signup; activation denominator; referral-signup numerator | Create a test account; confirm `signup` fires once. Cross-check a new `auth.users` row exists. If pixels are set, confirm `CompleteRegistration` in Meta. | At near-zero traffic, even a few/week is real signal. Target 2-6% of `landing_view` blended once pages + offer match are tuned. |
| `founding_reserve` `{source, lead_magnet}` | `FoundingOffer` via `LeadCapture`'s `trackEventName` (notably `/gmat-private-beta`, `/pricing`) | Someone reserved founding access / locked the founding price. Monetization-intent signal during the free beta. | Founding reservation rate; warm-audience intent | Submit the founding form; confirm `founding_reserve` fires and (if opt-in) an `email_subscriptions` row appears. | Thin by design. A trickle from warm pages is healthy; do not optimize cold prospecting toward it. |
| `referral_click` `{channel, named}` | `ReferralShare` on `/refer` (`channel = copy\|email\|whatsapp\|x\|native`); `InviteFriend` in-app (`{channel: in_app, surface}`) | A user took a share action on a referral link. Loop-health signal (intent to refer), not yet a referred signup. | Referral clicks; referral loop health | Click each share control on `/refer`; confirm `referral_click` fires with the right `channel`. `named` flags whether the share was personalized. | Any consistent volume = the loop is alive. Judge it only against downstream referred signups, not on clicks alone. |
| `pricing_view` | `TrackView` on `(marketing)/pricing/page.tsx` | Pricing page viewed. Top of the (currently dormant) monetization funnel; a down-funnel intent signal now. | Pricing-view rate; down-funnel intent | Load `/pricing`; confirm one `pricing_view`. | A minority of landing visitors reach pricing in a free beta — that's fine. Watch the trend, not the level. |
| `feedback_click` | Feedback button (in-app/marketing) | A user opened/clicked feedback. Engagement/diagnostic signal, not a funnel conversion. | Engagement quality (qualitative) | Click the feedback control; confirm `feedback_click` fires. | Low absolute counts; spikes can flag a confusing surface worth reading the feedback on. |
| `checkout_initiated` `{plan}` | `CheckoutButton`, on click before Stripe redirect | Checkout started. Meta standard `InitiateCheckout`. **Dormant** — paywall off, Stripe test-mode. | Checkout-start rate (when paywall on) | Only meaningful once `PAYWALL_ENABLED` is on. Until then expect zero. | **Expected 0** during the free beta. Non-zero now = a stray test, investigate. |
| `purchase_completed` `{plan}` | `ConversionTracker` in `(app)/layout.tsx`, on Stripe success redirect | Purchase completed. Meta standard `Purchase`. **Dormant.** | Revenue / paid-conversion (when paywall on) | Only meaningful once paid plans are live. | **Expected 0** during the free beta. |
| email `sent` | `email_events` (Resend worker logs a row on send) | A sequence/transactional email was actually sent to a consenting address. | Email volume; denominator for open/click/unsub rate | Query `email_events` for `type = 'sent'`; cross-check `email_queue` dedupe. Worker re-checks consent on every send. | Should match enrolled, still-subscribed users per sequence step. Sudden drop = cron didn't run or consent gating tightened. |
| email `open` | `email_events` (Resend open tracking) | A recipient opened an email (pixel-based; under-counts on privacy clients). | Email open rate | Query `email_events` `type = 'open'` over `sent` for the window. | 25-45% open on a small, opted-in, warm list is healthy; treat as directional (Apple MPP inflates/obscures). |
| email `click` | `email_events` (Resend click tracking) | A recipient clicked a link in an email. | Email click rate (the real engagement signal) | Query `email_events` `type = 'click'` over `sent`. Confirm links carry the referral/UTM scheme. | 2-8% click on a small warm list is healthy; this matters more than opens. |
| email `unsubscribe` | `email_events` + `email_subscriptions.subscribed` flips false | Someone opted out (one-click RFC 8058 or footer link). | Unsubscribe rate (list-health guardrail) | Query `email_events` `type = 'unsubscribe'`; confirm the `email_subscriptions` row flipped `subscribed = false`. | Keep < ~1-2% per send. A spike means wrong audience, too-frequent sends, or off-message content — slow down. |
| email `skipped` | `email_events` (worker logged a non-send) | The worker declined to send (consent withdrawn, dedupe hit, unsubscribed). Health/consent-audit signal, not a failure. | Consent-gating integrity | Query `email_events` `type = 'skipped'`; the reason confirms consent re-checks are working. | Non-zero is normal and good — it's the consent guard doing its job. |

Notes that keep this honest:
- Only `signup`, `checkout_initiated`, `purchase_completed` are Meta **standard** events; everything else reaches Meta as a `trackCustom` of the same name, and all events reach Google via `gtag('event', name, …)` under the same name. Names are identical across Vercel, Meta, and Google by design — never rename a live event.
- First-touch UTM (`utm_source/medium/campaign/content/term`, `ref`, `landing_path`) is merged into **every** event automatically. So `signup` carries the campaign that earned the very first visit, even if that was visits ago. Trust first-touch for channel scoring; don't re-derive by hand.
- `trackEvent` is a safe no-op when a sink is absent (Vercel off in dev; Meta/Google dormant until IDs set). It never throws and never blocks a user flow.

---

## 2. Funnel metrics to track weekly, and how to compute each

All event counts come from **Vercel Web Analytics > Events**, filtered to the period (default: last 7 days), segmentable by `utm_source` / `utm_campaign` / `utm_content` / `utm_term` thanks to merged attribution. Email metrics come from the Supabase `email_events` / `email_subscriptions` tables. Spend comes only from the ad platform.

| Metric | Formula | Reads from | Notes |
|---|---|---|---|
| Landing-page visitors | count of `landing_view` (split by `{page}`) | Vercel Events | Your real reach. Always lower than ad-platform clicks (bounce-before-load, bots, blocked JS). |
| Lead capture rate | `lead_captured` / `landing_view` | Vercel Events | Compute per page; `/error-log-template` should lead. The secondary-conversion rate. |
| Signup rate | `signup` / `landing_view` | Vercel Events | The **primary** funnel rate. Per page and per `utm_campaign`. |
| Signup form completion | `signup` / `signup_initiated` | Vercel Events | Low ratio = form friction, not a traffic problem. |
| Founding reservation rate | `founding_reserve` / `landing_view` (or / `pricing_view` for warm intent) | Vercel Events | Monetization intent during the free beta; expect thin. |
| Referral clicks | count of `referral_click` (split by `channel`) | Vercel Events | Loop activity. Pair with referral signups below before judging. |
| Referral signups | count of `signup` whose merged first-touch `ref` is set | Vercel Events (segment by `ref`) | The loop's real payoff. The `ref` slug rides first-touch attribution into `signup`. **The $50 reward triggers only when a referred friend becomes a PAYING founding member — i.e. once paid plans turn on. During the free beta this metric counts referred *signups*, not payouts.** |
| Email opt-in rate | new opted-in `email_subscriptions` rows / `lead_captured` (or / `signup` for the signup form's marketing_consent box) | Supabase `email_subscriptions` (`subscribed = true`) vs Vercel `lead_captured` | Opt-in is an **unticked** checkbox by design — expect well under 100%. That's the honest cost of explicit consent. |
| Email open rate | `email_events` `open` / `email_events` `sent` (per window/sequence) | Supabase `email_events` | Directional only (privacy clients). |
| Email click rate | `email_events` `click` / `email_events` `sent` | Supabase `email_events` | The trustworthy email-engagement signal. |
| Email unsubscribe rate | `email_events` `unsubscribe` / `email_events` `sent` | Supabase `email_events` + `email_subscriptions` | List-health guardrail; keep low. |
| Ad spend | platform-reported spend (per campaign, per period) | Google Ads / Meta Ads Manager (and Reddit/LinkedIn if live) | The ONLY place real spend exists. SKIPPED_USER_ACTION until an ad account is funded and running. |
| Cost per lead (CPL) | channel spend / that channel's `lead_captured` | Spend (platform) ÷ Vercel `lead_captured` | Segment by `utm_campaign`, then `utm_content`. |
| Cost per signup (CPS) | channel spend / that channel's `signup` | Spend (platform) ÷ Vercel `signup` | **The one number that matters.** Set a `TARGET_CPS` before spending; kill > ~2x, scale only well under it. |
| Beta activation rate | users who have a baseline OR a first practice session / `signup`, over a cohort window | Supabase `practice_sessions` (+ baseline on `/mock`) vs Vercel `signup` | Signup is hollow if nobody activates. See section 2.1 for the exact query. |

### 2.1 Beta activation rate — the exact definition

"Activated" = a new account did at least one of:
1. **entered an official mba.com practice-exam baseline** (the gate that unlocks the dashboard/study-plan), or
2. **completed a first `practice_session`** (any row in `practice_sessions` for that `user_id`).

Compute: for a signup cohort (e.g. accounts created in the last 7 or 14 days), `activated_users / cohort_signups`. There is **no in-app diagnostic** — the baseline is always the user's real official exam entered on `/mock`. Do not invent a "diagnostic completed" milestone. The first-practice milestone email ("first-practice") is wired and is a natural activation marker; the "mock-review" and "progress" milestone templates exist but are **not yet enqueued** — don't treat them as live signals.

Early-beta expectation: activation is where free betas leak most. Anything above ~30-40% of signups doing something real in their first week is a healthy start; below that, fix onboarding before buying more traffic.

---

## 3. Where to read each metric TODAY

| Surface | What you read there | Status |
|---|---|---|
| **Vercel Web Analytics > Events** | Every `trackEvent` event: `landing_view`, `lead_captured`, `signup_initiated`, `signup`, `founding_reserve`, `referral_click`, `pricing_view`, `feedback_click` (and the dormant `checkout_initiated`/`purchase_completed`). Segment by merged UTM/`ref`. | **Live now** — always-on baseline sink, works without any pixel. This is your daily source of truth. |
| **Supabase table `email_subscriptions`** | The consent ledger: who is opted in (`subscribed`), `consent_source`, `consent_at`, `unsubscribe_token`. Numerator for opt-in rate. | Live (service-role / RLS-locked). |
| **Supabase table `email_events`** | `sent` / `open` / `click` / `unsubscribe` / `skipped` rows. All email rates compute from here. | Live. |
| **Supabase table `email_queue`** | Outbox + `dedupe_key`; confirms what's scheduled and that dedupe is working. | Live (operational, not a KPI). |
| **Supabase table `practice_sessions`** | First-practice activation; cross-reference with baseline-on-`/mock` for activation rate. | Live. |
| **Google Ads dashboard** | Real spend, impressions, CTR, CPC; conversions once the Google tag ID is set. | **SKIPPED_USER_ACTION** — needs a funded Google Ads account + `NEXT_PUBLIC_GOOGLE_TAG_ID` set in Vercel for in-platform conversions. |
| **Meta Ads Manager** | Real spend + `CompleteRegistration`/`InitiateCheckout`/`Purchase` once the pixel ID is set. | **SKIPPED_USER_ACTION** — needs `NEXT_PUBLIC_META_PIXEL_ID` set; until then Meta conversion columns read zero even on real signups. |
| Reddit Ads / LinkedIn Campaign Manager | Spend, CTR, CPC if/when those channels run. | SKIPPED_USER_ACTION — only if those channels launch. |

SKIPPED_USER_ACTION summary (Adam must connect these; they are outside what can be read in the repo or Vercel today):
- Set `NEXT_PUBLIC_META_PIXEL_ID` in Vercel to light up Meta `CompleteRegistration`/`InitiateCheckout`/`Purchase`. Until then, Meta conversion reporting is blind.
- Set `NEXT_PUBLIC_GOOGLE_TAG_ID` (a `G-` GA4 id or `AW-` Google Ads id) in Vercel for Google conversion import.
- Fund/launch the ad accounts. **All spend, CPC, CPL, CPS, and ROI numbers are SKIPPED until a real ad account is spending.** Per account rules: do not spend before tracking is verified; Google Search only, exact/phrase match, $5-10/day, optimize toward `signup`/`lead_captured`/`founding_reserve`.

---

## 4. Weekly review ritual (about 30 minutes, same day each week)

Roll up the daily Vercel snapshots and the email tables. One change per item; log every change so cause and effect stay legible.

1. **Blended 7-day funnel** (all sources): `landing_view` -> (`lead_captured` | `signup`) -> `founding_reserve`/`pricing_view`. Record counts and the two key rates (lead capture, signup) vs. last week.
2. **Per-page funnel:** signup rate and lead-capture rate for each live lander (`/error-log-template`, `/gmat-study-plan`, `/gmat-private-beta`, `/gmat-mock-review`, `/gmat-data-insights-practice`, `/gmat-quant-practice`). Send more traffic to the best converter.
3. **Per-channel table** (only channels actually spending): spend, CTR, CPC, `landing_view`, `lead_captured`, `signup`, **CPS**. Rank by CPS. Apply the kill/hold/scale rule (kill > ~2x TARGET_CPS after ~3x TARGET_CPS spent; scale only comfortably under it).
4. **Referral loop:** `referral_click` (by channel) -> referred `signup` (segment by `ref`). Self-feeding or stalled? Reward stays manual until paid plans turn on.
5. **Email health:** open rate, click rate, unsubscribe rate, opt-in rate from `email_events` / `email_subscriptions`. Click rate is the signal; unsub rate is the guardrail.
6. **Activation:** beta activation rate for last week's signup cohort (section 2.1). If signups rise but activation falls, fix onboarding, not the ads.
7. **Organic check:** signups with no paid first-touch UTM. Which theme pages pull organic? Note momentum to feed with content.
8. **Pixel/tag status:** confirm whether `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_GOOGLE_TAG_ID` are set and whether platform conversions match Vercel within a sane margin.
9. **Compliance pass:** re-read every live ad and headline. No guaranteed scores, no diagnostic/readiness/score-band claims, no generalized improvement claims, no fake urgency/scarcity/counts, GMAC marks nominative only, founder 565 -> 735 / top-1% claim only and never generalized.
10. **One decision for next week:** the single biggest lever. Write it down; review it next week.

Daily (about 10 min) is lighter: open Vercel Events, record yesterday's `landing_view` / `lead_captured` / `signup`; confirm at least one `landing_view` per live page and at least one `signup` in the last 24-48h across all sources. Zero signups platform-wide for 2 days with live spend = treat as broken tracking until proven otherwise.

---

## 5. Leading indicators vs. vanity metrics

Spend attention here, in this order:

**Leading indicators (act on these):**
- **Signup rate** (`signup` / `landing_view`) per page and per campaign — the primary truth.
- **Cost per signup** — the one number that decides kill/scale, once spend is live.
- **Lead capture rate** on the high-intent magnet (`/error-log-template`) — early proof the offer-to-page match works.
- **Beta activation rate** — proof a signup is real engagement, not a hollow number.
- **Email click rate** and **unsubscribe rate** — list is being nurtured, not burned.
- **Referred signups** (`ref` set) — the compounding, near-zero-cost channel.

**Vanity metrics (watch, but never optimize toward):**
- Raw impressions and raw clicks — you pay for these; they prove nothing alone.
- Total `landing_view` with no rate attached — traffic without conversion is cost.
- `referral_click` counts with no downstream signup — sharing isn't referring.
- Email **open** rate — privacy clients make it unreliable; clicks are the real signal.
- `pricing_view` / `founding_reserve` in isolation during a **free** beta — intent theater until the paywall is on. `checkout_initiated` / `purchase_completed` are **expected zero** now; a non-zero value is a stray test to investigate, not a win.

Guiding principle, same discipline as the trading rules: prefer no spend over bad spend, rule out broken tracking before blaming the ad, change one variable at a time, and never scale something you can't explain.

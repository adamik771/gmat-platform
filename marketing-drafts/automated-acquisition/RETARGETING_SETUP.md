# Retargeting Setup

Operational checklist for turning on paid retargeting for Zakarian GMAT. The tracking infrastructure already exists in the repo and is dormant. This doc covers the install (env vars + platform pixels), the audiences to build, the ad copy per audience, frequency caps, UTM naming for retargeting traffic, and the conversion goals to optimize toward.

Scope: retargeting (re-engaging people who already touched the site). Cold prospecting copy lives elsewhere. Everything here must stay TRUE and compliant — see the Compliance guardrails section before writing or approving any creative.

---

## 1. How the existing tracking works (read this first)

Do not build new tracking infrastructure. It is already shipped and idempotent.

- **`src/components/analytics/AdPixels.tsx`** — mounted once in the root layout. It renders the Meta Pixel and the Google tag (gtag.js) **only** when their env vars are set. With the vars unset it renders nothing, so the site is safe to run with no pixels until you flip them on.
  - `NEXT_PUBLIC_META_PIXEL_ID` — Meta (Facebook/Instagram) Pixel id.
  - `NEXT_PUBLIC_GOOGLE_TAG_ID` — a GA4 id (`G-…`) or a Google Ads id (`AW-…`).
- **`src/lib/analytics.ts` → `trackEvent(name, props)`** — the single funnel-event entry point. It fans every event out to Vercel Analytics, Meta (`fbq`), and Google (`gtag`), and never throws. Once the pixel/tag env vars are live, **no call-site changes are needed** — existing events forward automatically.
  - Meta mapping (in `META_EVENT_MAP`): `signup → CompleteRegistration`, `checkout_initiated → InitiateCheckout`, `purchase_completed → Purchase`. Any event not in the map is sent to Meta as a **custom** event (`trackCustom`) under its snake_case name and to Google as a plain `event`.
- **`src/components/analytics/AttributionCapture.tsx` + `captureAttribution()`** — stores **first-touch** UTM/`ref` params in `localStorage` (`zg_attribution`) on the first landing that carries them. First touch wins and is never overwritten. `trackEvent` merges this attribution into **every** event, so a signup three visits later still carries the original `utm_source` / `utm_campaign` / `utm_content` / `utm_term` / `ref`.

Conversion events currently firing (use these as the basis for audiences and goals — do not invent new ones without adding the `trackEvent` call):

| Event | Props | Meta name | Meaning |
|---|---|---|---|
| `landing_view` | `{ page }` | custom | a landing page rendered |
| `lead_captured` | — | custom | opt-in email submitted (lead magnet) |
| `signup` | — | `CompleteRegistration` | account created — **PRIMARY** conversion |
| `pricing_view` | — | custom | viewed `/pricing` |
| `founding_reserve` | — | custom | reserved founding price |
| `referral_click` | — | custom | clicked a referral link |
| `checkout_initiated` | — | `InitiateCheckout` | started checkout |
| `purchase_completed` | — | `Purchase` | paid |

LinkedIn has **no** in-repo tag (the only env-gated pixels are Meta and Google). LinkedIn's Insight Tag is added as a platform script — see section 4.

---

## 2. Install checklist — turning the pixels on

### Meta Pixel
1. In Meta Events Manager, create (or open) the Pixel for zakariangmat.com and copy its numeric id.
2. Set the Vercel env var **`NEXT_PUBLIC_META_PIXEL_ID`** = that id, for Production (and Preview if you want to validate there). It is a build-time `NEXT_PUBLIC_` var, so **redeploy** after setting it.
3. Verify with the Meta Pixel Helper browser extension: load the site, confirm `PageView` fires, then trigger a `lead_captured` (submit a lead magnet) and a `signup` and confirm `CompleteRegistration` shows up.
4. Turn on Advanced Matching only if you have a lawful basis and a consent banner; default is off. Do not pass raw PII into event props.

### Google tag (GA4 and/or Google Ads)
1. Create the GA4 property (`G-…`) and/or the Google Ads account (`AW-…`).
2. Set **`NEXT_PUBLIC_GOOGLE_TAG_ID`** in Vercel to that id and **redeploy**. The base `gtag('config', …)` loads automatically from `AdPixels.tsx`.
3. For a **Google Ads conversion** (not just a GA4 event): in Google Ads create a conversion action against the forwarded event name (`signup`, `purchase_completed`), or wire the specific `send_to` label later. The base tag here is the prerequisite for either path.
4. If running both GA4 and Google Ads, prefer a single account-linked tag or set both ids via Google Tag Manager-style config; only one `NEXT_PUBLIC_GOOGLE_TAG_ID` slot exists, so the simplest path is GA4 as the base and import GA4 conversions into Google Ads.
5. Verify with the GA4 DebugView / Google Tag Assistant that `signup` and `purchase_completed` arrive with their `utm_*` props.

### LinkedIn Insight Tag
1. In LinkedIn Campaign Manager, create the Insight Tag and copy the **Partner ID**.
2. LinkedIn is **not** wired through `AdPixels.tsx`. Add the Insight Tag as a script in the root layout, gated on a new build-time var **`NEXT_PUBLIC_LINKEDIN_PARTNER_ID`** (mirror the existing env-gating pattern so it renders nothing when unset). Keep it dormant until the var is set.
3. Because LinkedIn's base tag only captures page views, define conversions in Campaign Manager as **URL-based** rules (e.g. URL contains `/signup` for the registration step, `/pricing` for pricing intent). Server-side CAPI is out of scope for this pass.
4. Verify with the LinkedIn Insight Tag browser extension.

### Consent / privacy
- Add or confirm a consent mechanism before running EU/UK traffic. Gate `fbq`/`gtag`/LinkedIn loading on consent if required in the target geos.
- Never put emails, names, or any PII into `trackEvent` props. Attribution is UTM/`ref` only.

---

## 3. Audiences to create

Build these once in each platform. Where an event is a Meta **custom** event, the audience rule is "people who triggered custom event `X`"; for `signup`/`checkout`/`purchase`, use the mapped standard event. On LinkedIn, approximate with URL/page rules since only page-level events exist.

Suggested membership windows in parentheses. Tune after the first two weeks of data.

| # | Audience | Definition | Window |
|---|---|---|---|
| A1 | **All visitors** | anyone who fired `PageView` / any `landing_view` | 90 days |
| A2 | **Landing-page viewers** | fired `landing_view` (optionally split by `{page}` prop for per-topic creative) | 30 days |
| A3 | **Lead, no signup** | fired `lead_captured` AND **not** `signup` | 60 days |
| A4 | **Pricing viewed, no purchase** | fired `pricing_view` AND **not** `purchase_completed` | 30 days |
| A5 | **Founding reservers (no purchase)** | fired `founding_reserve` AND **not** `purchase_completed` | 45 days |

Exclusions (set these so you never pay to retarget someone past the goal):
- Exclude `signup` from A1, A2, A3 (already converted on the primary goal).
- Exclude `purchase_completed` from A4 and A5.
- Exclude `purchase_completed` everywhere except where the goal is explicitly a paid upsell.

Per-page split for A2 (optional but recommended): the `landing_view` `{page}` prop carries the path, so you can build narrow audiences like "viewed `/gmat-study-plan`" or "viewed `/gmat-data-insights-practice`" and serve creative that matches the exact tool they looked at.

---

## 4. Retargeting ad copy per audience

All copy below is TRUE and compliant. The only performance claim permitted anywhere is the founder's own 565 → 735 climb (100th percentile on his official report) — never generalized to other students. No guaranteed scores, no diagnostic/score-band language, no fake urgency. Headlines are tuned to where the person already is in the funnel.

### A1 — All visitors (broad reminder)
- **Headline:** The GMAT platform built by a 565 → 735 self-studier.
- **Primary:** 62 chapters across Quant, Verbal, and Data Insights, a practice bank, a 6-tag error log, and a study plan built from your own official-practice-exam scores. Free during private beta — no card.
- **CTA:** Start the private beta
- **Destination:** `/gmat-private-beta`

### A2 — Landing-page viewers (tool-specific, match the page they saw)
Serve the variant that matches the `{page}` they viewed.
- **Study plan** (`/gmat-study-plan`): "You looked at the study plan. It's built from the section + total of your official mba.com practice exam — Today's Focus, weak areas, a 7-day cadence. Free in beta." → Build my plan → `/gmat-study-plan`
- **Error log** (`/error-log-template`): "Tagging every miss as Conceptual, Careless, Time Pressure, Misread, Strategy, or Other is how you stop repeating them. Grab the template, or use the live error log in the beta." → Get the template → `/error-log-template`
- **Mock review** (`/gmat-mock-review`): "A mock score you don't review is a wasted mock. Per-topic and per-difficulty timing, behaviour patterns, mock-to-mock trend." → See mock review → `/gmat-mock-review`
- **Data Insights** (`/gmat-data-insights-practice`): "DI is where most of the points are hiding. Targeted Data Insights practice with per-type analytics." → Practice DI → `/gmat-data-insights-practice`
- **Quant** (`/gmat-quant-practice`): "Quant practice with per-topic accuracy and timing, so you drill the right weakness — not the ones you already own." → Practice Quant → `/gmat-quant-practice`

### A3 — Lead, no signup (you have their email; nudge to account)
- **Headline:** You grabbed the template. The live version does the tagging for you.
- **Primary:** Inside the beta the error log, daily spaced-review queue, and study plan run on your own data. Free during private beta, no card. Create your account to start.
- **CTA:** Create my account
- **Destination:** `/gmat-private-beta`
- Note: pair with the opt-in email follow-up to the same people; the ad reinforces the email, it doesn't replace it.

### A4 — Pricing viewed, no purchase (lower friction, restate the offer honestly)
- **Headline:** Still deciding? The beta is free, no card.
- **Primary:** You can use the full platform during the private beta for free. Founding users can reserve early pricing — founding $399, anchored to the $599 mentorship tier — and lock it before public pricing. No guarantees, no pressure: try it first.
- **CTA:** Reserve founding price
- **Destination:** `/pricing`

### A5 — Founding reservers, no purchase (warmest paid audience)
- **Headline:** Your founding price is reserved. Here's what it unlocks.
- **Primary:** Founding $399 (anchored to the $599 mentorship tier), the full 62-chapter platform, mocks with mock-to-mock trend, and per-topic + per-difficulty analytics. Refer a friend: they get the founding price, you get $50.
- **CTA:** Complete checkout
- **Destination:** `/pricing` (or `/refer` for the referral angle)

Creative notes:
- Avoid any banned phrase: "free diagnostic", "30-question", "readiness band", "score band", "typically lands", "most students see/improve". The platform has no in-app diagnostic — the baseline is the user's own official mba.com practice exam.
- GMAT, GMAT Focus, GMAC, and mba.com are referenced nominatively only. Include a small disclaimer in the ad account / landing footer: "Not affiliated with, endorsed by, or sponsored by GMAC or mba.com." Do not put GMAC marks in display URLs or as the dominant visual.

---

## 5. Frequency caps

Retargeting fatigues fast on a $500-scale budget. Cap conservatively.

- **Meta:** set the objective to reach/frequency where available, or use the standard auction with a frequency cap of **~2–3 impressions per user per week** per audience. Refresh creative every **10–14 days** to avoid ad fatigue.
- **Google Display / Demand Gen:** set a per-user frequency cap of **2 per day / 5 per week**.
- **LinkedIn:** LinkedIn paces frequency automatically; keep audiences ≥ 300 members (its floor) and rotate **2–3 creatives** per campaign so the same person doesn't see one ad repeatedly.
- **Burn-in window:** exclude anyone who converted on the audience's goal within the last 24h from re-serving (handled by the exclusions in section 3).
- **Overall:** one prospect should not be in more than one active retargeting audience's rotation at a time. Order of priority if they qualify for several: A5 > A4 > A3 > A2 > A1 (warmest first). Use audience exclusions to enforce.

---

## 6. UTM naming for retargeting

Retargeting clicks must carry UTMs so attribution and on-site events stay traceable. The capture only stores **first touch**, so a returning prospect who already has stored attribution keeps their original source — that is intended (it credits the channel that started the journey). Still tag every retargeting URL: it powers in-platform Vercel event filtering for sessions where the prospect arrives fresh, and keeps the ad platforms' own reporting clean.

Follow the canonical scheme:

- `utm_source` = `meta` | `google` | `linkedin`
- `utm_medium` = `retargeting` (this is the retargeting marker; cold social uses `paid-social`, search uses `cpc`)
- `utm_campaign` = `<topic>-<channel>` — topic is the audience/theme, e.g. `pricing-meta`, `studyplan-google`, `founding-linkedin`
- `utm_content` = `<ad-variant>` — the creative, e.g. `a4-no-card`, `a2-studyplan`, `a5-checkout`
- `utm_term` — **search only**; leave unset for retargeting (display/social).

Examples:

```
# A4 pricing retargeting on Meta, "no card" variant
https://zakariangmat.com/pricing?utm_source=meta&utm_medium=retargeting&utm_campaign=pricing-meta&utm_content=a4-no-card

# A2 study-plan retargeting on Google Display
https://zakariangmat.com/gmat-study-plan?utm_source=google&utm_medium=retargeting&utm_campaign=studyplan-google&utm_content=a2-studyplan

# A5 founding-reserver retargeting on LinkedIn
https://zakariangmat.com/pricing?utm_source=linkedin&utm_medium=retargeting&utm_campaign=founding-linkedin&utm_content=a5-checkout
```

Rules:
- Lowercase, hyphen-separated, no spaces. Keep `utm_content` mapped 1:1 to a creative so you can read per-ad performance in Vercel's Events view (attribution is merged into every event).
- Keep `utm_medium=retargeting` reserved for retargeting so you can cleanly separate it from `paid-social` prospecting in reporting.
- Build URLs in a single spreadsheet (one row per audience × creative) and paste into the ad platforms — don't hand-edit per ad.

---

## 7. Conversion goals to optimize toward

Optimize each campaign for the next step in the funnel, not the final sale — a $500 audience is too small to optimize a Meta campaign on `Purchase` alone.

| Audience | Optimize for (event) | Why |
|---|---|---|
| A1 all visitors | `signup` (`CompleteRegistration`) | PRIMARY goal; pull broad visitors into the free beta |
| A2 landing viewers | `signup`; secondary `lead_captured` | they saw a specific tool — convert to account, fall back to email |
| A3 lead, no signup | `signup` (`CompleteRegistration`) | they already gave email; the only step left is the account |
| A4 pricing, no purchase | `signup`, then `founding_reserve` | get them into the product first; reserve is the upsell |
| A5 founding reservers | `purchase_completed` (`Purchase`) | warmest paid audience; checkout is the real goal |

- **PRIMARY conversion = `signup`** (Meta `CompleteRegistration`). **SECONDARY = `lead_captured`** (opt-in email) for audiences where account creation is a stretch.
- In Meta, set the campaign's conversion event to the mapped standard event (`CompleteRegistration` / `Purchase` / `InitiateCheckout`). Custom events (`founding_reserve`, `pricing_view`) can be used as **custom conversions** for reporting and as optimization events once they have enough volume.
- In Google Ads, mark `signup` and `purchase_completed` as conversion actions (Primary), and `lead_captured` / `founding_reserve` as Secondary (observe-only) so they don't dilute bidding.
- In LinkedIn, set the URL-based `/signup` conversion as the campaign objective; `/pricing` is a secondary signal.
- Reporting backstop: Vercel Analytics Events + first-touch attribution is the source of truth that survives ad-blockers. Reconcile platform-reported conversions against `signup` / `purchase_completed` counts there weekly.

---

## Compliance guardrails (applies to every asset above)

- Not affiliated with, endorsed by, or sponsored by GMAC, the GMAT, GMAT Focus, or mba.com. Trademarks used nominatively only; include the disclaimer in ad accounts and landing footers.
- No guaranteed-score claims. No diagnostic/readiness/score-band language. The platform has **no** in-app diagnostic — the baseline is the user's own official mba.com practice exam.
- The only performance claim allowed is the founder's own 565 → 735 (100th percentile on his official report). Never generalize it to other students.
- No fabricated testimonials, student counts, or urgency. The free private beta and the founding-price reservation are real and need no manufactured scarcity.
- No PII in `trackEvent` props or UTMs. Respect consent in regulated geos before loading any pixel/tag.

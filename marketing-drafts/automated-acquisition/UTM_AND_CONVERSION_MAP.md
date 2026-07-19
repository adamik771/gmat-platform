> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# UTM and Conversion Map

The single source of truth for how paid and organic traffic is tagged, how that tag survives until the user converts, and how each conversion event maps to the ad platforms. Every ad, every shareable link, and every email link MUST follow the scheme below. If a link is not tagged to this spec, its conversions land in the wrong bucket (or no bucket) and the channel looks dead when it is not.

Nothing here invents new infrastructure. The tagging is read by `AttributionCapture` (`src/components/analytics/AttributionCapture.tsx`), stored by `captureAttribution()` and merged into every event by `trackEvent()` (`src/lib/analytics.ts`). The ad pixels are loaded by `AdPixels` (`src/components/analytics/AdPixels.tsx`) and stay dormant until `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_GOOGLE_TAG_ID` are set.

A compliance note that applies to every ad and link built from this scheme: Zakarian GMAT is not affiliated with, endorsed by, or sponsored by GMAC, the GMAT, GMAT Focus, or mba.com. GMAT and GMAT Focus are GMAC trademarks used nominatively. No copy attached to any campaign below may claim a guaranteed score, an in-app diagnostic, or a score/readiness band. The only performance claim permitted anywhere downstream of these links is the founder's own 565 to 735 climb.

---

## 1. Canonical UTM scheme

Five parameters. The first three are required on every paid link; `utm_content` is required whenever more than one creative is live; `utm_term` is search-only.

| Parameter | Required | Allowed values | Purpose |
|---|---|---|---|
| `utm_source` | Yes | `google` \| `reddit` \| `linkedin` \| `meta` | The platform the click came from. One token per platform, lowercase, no variants (`meta` not `facebook`/`instagram`/`fb`). |
| `utm_medium` | Yes | `cpc` \| `paid-social` \| `retargeting` | The buying type. `cpc` for search auctions, `paid-social` for prospecting feed ads, `retargeting` for warm audiences. |
| `utm_campaign` | Yes | `<topic>-<channel>` | The campaign. `<topic>` is a high-intent theme slug (see 1.1); `<channel>` repeats the source. Example: `study-plan-google`. |
| `utm_content` | When >1 creative | `<ad-variant>` | The specific ad/creative, so two variants in one campaign are separable. Lowercase, hyphenated. Example: `headline-a`, `carousel-mistakes`. |
| `utm_term` | Search only | `<keyword>` | The matched keyword for Search Ads. Omit entirely on social/retargeting. Use the keyword as a slug, hyphenated. Example: `gmat-error-log-template`. |

Plus one non-UTM parameter the same capture path understands:

| Parameter | Used on | Purpose |
|---|---|---|
| `ref` | Referral links only | The referrer's slug, so a referred signup is credited and the $50 referral reward can be attributed. Carried by `ReferralShare` links and stored alongside the UTM set. |

`AttributionCapture` reads exactly these six keys (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `ref`) and nothing else. Any other query parameter is ignored for attribution, so do not rely on custom keys.

### 1.1 Approved topic slugs (the `<topic>` in `utm_campaign`)

Driven by the high-intent search themes and their landing pages. Use these slugs verbatim so campaign rollups stay clean.

| Topic slug | Theme | Primary landing page |
|---|---|---|
| `study-plan` | GMAT study plan | `/gmat-study-plan` |
| `error-log` | GMAT error log template | `/error-log-template` |
| `mock-review` | GMAT mock review | `/gmat-mock-review` |
| `practice-platform` | GMAT practice platform | `/gmat-private-beta` |
| `data-insights` | GMAT Data Insights practice | `/gmat-data-insights-practice` |
| `quant` | GMAT Quant practice | `/gmat-quant-practice` |
| `private-beta` | GMAT private beta | `/gmat-private-beta` |
| `pricing` | Founding-price / pricing intent | `/pricing` |
| `refer` | Referral loop | `/refer` |

---

## 2. Filled example URL per channel

Each link points at the topic's landing page, carries the full required parameter set for that channel, and is shaped exactly as `AttributionCapture` expects.

**Google Search Ads** (`utm_term` required; medium `cpc`):

```
https://zakariangmat.com/error-log-template?utm_source=google&utm_medium=cpc&utm_campaign=error-log-google&utm_content=headline-a&utm_term=gmat-error-log-template
```

**Reddit Ads** (prospecting feed; medium `paid-social`; no `utm_term`):

```
https://zakariangmat.com/gmat-study-plan?utm_source=reddit&utm_medium=paid-social&utm_campaign=study-plan-reddit&utm_content=image-7day-cadence
```

**LinkedIn Ads** (prospecting; medium `paid-social`; no `utm_term`):

```
https://zakariangmat.com/gmat-private-beta?utm_source=linkedin&utm_medium=paid-social&utm_campaign=practice-platform-linkedin&utm_content=founder-565-735
```

**Meta / Instagram retargeting** (warm audiences; medium `retargeting`; no `utm_term`):

```
https://zakariangmat.com/pricing?utm_source=meta&utm_medium=retargeting&utm_campaign=pricing-meta&utm_content=founding-anchor-399
```

**Referral link** (organic loop; `ref` slug instead of paid UTM; emitted by `ReferralShare`):

```
https://zakariangmat.com/?utm_source=referral&ref=adam-z
```

The referral link intentionally uses `utm_source=referral` (outside the paid `google|reddit|linkedin|meta` set) plus a `ref` slug. Both are stored by `captureAttribution`, so a friend who arrives via the link and later signs up is credited to the referrer — the friend gets the founding price, the referrer gets $50.

---

## 3. Conversion-event table

These are the events `trackEvent()` already fires. The table lists, for each event, the moment it fires, the surface/component that fires it, the props it carries, and how it maps onto Meta. "Meta mapping" is set by `META_EVENT_MAP` in `src/lib/analytics.ts`: three events map to Meta standard events; everything else is forwarded to Meta as a `trackCustom` event under its own snake_case name, and to Google via `gtag('event', name, …)` under the same name.

| Event | When it fires | Where it fires (component / route) | Props | Meta mapping |
|---|---|---|---|---|
| `landing_view` | On mount of a marketing landing page — top of the passive funnel | `TrackView` on the home page (`(marketing)/page.tsx`); `AcquisitionLanding` fires it with `{ page: slug }` for the acquisition landers | `{ page }` (acquisition landers) | `trackCustom` `landing_view` |
| `lead_captured` | On a successful email opt-in submit (explicit opt-in only) | `LeadCapture` (lead magnets: error-log template, sample chapters, converters) | `{ source, lead_magnet }` | `trackCustom` `lead_captured` — **SECONDARY conversion** |
| `signup` | On successful account creation | `(auth)/signup/page.tsx` (fires `signup` for both gated and ungated paths; `signup_initiated` fires on attempt) | `{ gated }` | **`CompleteRegistration`** (standard) — **PRIMARY conversion** |
| `founding_reserve` | On submit of the founding-price reservation | `FoundingOffer` via `LeadCapture`'s `trackEventName` | `{ source, lead_magnet }` | `trackCustom` `founding_reserve` |
| `referral_click` | When a referral link is copied/shared (or sent by email) | `ReferralShare` (`{ channel: copy\|email, named }`); `InviteFriend` in-app (`{ channel: in_app, surface }`) | `{ channel, named }` or `{ channel, surface }` | `trackCustom` `referral_click` |
| `pricing_view` | On mount of the pricing page — top of the conversion funnel | `TrackView` on `(marketing)/pricing/page.tsx` | none | `trackCustom` `pricing_view` |
| `checkout_initiated` | On click of the checkout button, before redirect to Stripe | `CheckoutButton` | `{ plan }` | **`InitiateCheckout`** (standard) |
| `purchase_completed` | On landing on the Stripe success redirect | `ConversionTracker` (in `(app)/layout.tsx`) | `{ plan }` | **`Purchase`** (standard) |

Notes that keep this accurate:
- Only `signup`, `checkout_initiated`, and `purchase_completed` are Meta **standard** events. Every other event reaches Meta as a custom event of the same name. This is by design — it keeps reporting names identical across Vercel, Meta, and Google.
- Google receives all eight events verbatim through `gtag('event', name, …)`. No separate Google event map exists or is needed.
- `feedback_click` and `signup_initiated` also fire through `trackEvent`, but they are funnel/diagnostic signals, not conversions, and are excluded from this conversion table on purpose.
- Every sink is a safe no-op when its script is absent: Vercel Analytics off in dev, Meta/Google dormant until the env ids are set. `trackEvent` never throws.

---

## 4. Primary vs secondary conversion

- **PRIMARY conversion = `signup`.** This is the success metric for every acquisition channel. Bid optimization, campaign ROI, and the "is this channel working" judgment all key off `signup` (Meta `CompleteRegistration`). The beta is free with no card, so account creation — not payment — is the top-of-funnel win we are buying.
- **SECONDARY conversion = `lead_captured`.** The opt-in email capture on a lead magnet (error-log template, sample chapters, the converters). It is a softer win: it gets a prospect into opt-in email follow-up, which then nurtures toward `signup`. Optimize toward `lead_captured` only when a campaign's intent is the lead magnet itself (e.g. the `error-log-template` page) rather than direct beta signup.
- **Downstream monetization** (`founding_reserve`, `pricing_view`, `checkout_initiated`, `purchase_completed`) is tracked but is **not** the acquisition conversion. During the private beta these measure intent to reserve founding pricing, not the channel's job. Do not let an ad platform optimize a prospecting campaign toward `purchase_completed` — the volume is too thin and the beta is free, so the optimizer will starve.

Recommended per-channel optimization target:

| Channel | Optimize toward | Why |
|---|---|---|
| Google Search Ads | `signup`, or `lead_captured` on lead-magnet keywords | High intent; capture the account or at least the email. |
| Reddit Ads | `lead_captured` first, `signup` once volume allows | Colder audience; lead magnet lowers the ask. |
| LinkedIn Ads | `signup` | High-value audience, founder-led message, direct beta ask. |
| Meta/Instagram retargeting | `signup`; `founding_reserve` for warm pricing audiences | Already-warm visitors; push to the account or the reservation. |

---

## 5. How AttributionCapture ties first-touch UTM to the eventual signup

The mechanism that makes the whole map work — a click today can be credited to the campaign that earned it even if the person signs up three visits later.

1. **Capture, once, on first touch.** `AttributionCapture` mounts on every page (it is in the root layout) and calls `captureAttribution(window.location.search)`. On the first page load that carries any of the six known params, it reads them, trims each to 200 chars, records the landing `pathname` as `landing_path`, and writes the object to `localStorage` under the key `zg_attribution`.
2. **First touch wins, permanently.** If `zg_attribution` already exists, `captureAttribution` returns immediately and never overwrites it. A prospect who arrives from a LinkedIn prospecting ad, leaves, and returns a week later via a Google search still carries the original LinkedIn attribution. This is a deliberate first-touch model, not last-touch.
3. **Merge into every event.** `trackEvent(name, props)` calls `getAttribution()` and spreads the stored UTM/ref set into the props of every event it fires: `{ ...getAttribution(), ...props }`. So when `signup` finally fires, it carries `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `ref`, and `landing_path` from that very first click.
4. **Fan out, attributed.** That merged payload goes to Vercel Analytics (`track`), to Meta (`fbq` — `CompleteRegistration` for `signup`), and to Google (`gtag`). Each platform therefore sees the conversion already stamped with the campaign that originated it.
5. **Graceful failure.** Storage can be blocked (private mode, SSR, disabled localStorage). In every such case `getAttribution()` returns `{}` and `captureAttribution` is a silent no-op — the page and the conversion still work; the event simply carries no campaign stamp. Attribution is best-effort and must never break a user flow.

Practical consequence for campaign setup: the credited campaign is whatever drove the user's **first** tagged visit. Retargeting (`utm_medium=retargeting`) will rarely be the first touch, so its `signup` conversions will frequently carry an earlier prospecting campaign's UTM. Read retargeting performance through the platform's own pixel/view-through reporting and the `pricing_view` to `signup` movement, not through first-touch `utm_campaign` alone.

---

## 6. Naming convention table

Consistent tokens are what make the rollups readable. Lowercase, hyphen-separated, no spaces, no underscores in UTM values (underscores only in the parameter names themselves and in event names).

| Field | Format | Good | Bad |
|---|---|---|---|
| `utm_source` | Fixed token from the allowed set | `google`, `reddit`, `linkedin`, `meta` | `Google`, `facebook`, `ig`, `LI` |
| `utm_medium` | Fixed token from the allowed set | `cpc`, `paid-social`, `retargeting` | `ppc`, `social`, `remarketing` |
| `utm_campaign` | `<topic>-<channel>` | `study-plan-google`, `mock-review-reddit` | `StudyPlan_Google`, `campaign1` |
| `utm_content` | `<ad-variant>`, descriptive | `headline-a`, `carousel-mistakes`, `founder-565-735` | `v1`, `ad_2`, `Final FINAL` |
| `utm_term` | `<keyword>` slug, search only | `gmat-study-plan`, `gmat-error-log-template` | `GMAT Study Plan`, set on social ads |
| `ref` | Referrer slug, referral links only | `adam-z`, `cohort-bi-oslo` | `Adam Zakarian`, `ref123!` |
| Topic slug | From the approved list in 1.1 | `data-insights`, `practice-platform` | `di`, `platform`, `practiceplatform` |
| Event name | snake_case, stable, matches `trackEvent` call | `lead_captured`, `founding_reserve` | `leadCaptured`, `lead-captured`, `FoundingReserve` |
| Ad-variant token | Describe the creative idea, not just a number | `mistakes-hook`, `7day-cadence` | `a`, `b`, `test` |

Rules of thumb:
- One concept, one token, forever. `meta` is always `meta`; never reintroduce `facebook` or `instagram` as a source — split those by `utm_content` or campaign instead.
- The `<channel>` half of `utm_campaign` must equal `utm_source`. `study-plan-google` pairs with `utm_source=google`. A mismatch means the link was hand-edited wrong.
- Never change an event name once it is live. The names appear verbatim in Vercel Analytics, are mapped in `META_EVENT_MAP`, and are matched in campaign reporting; renaming one silently breaks historical comparison.
- Keep `utm_term` off everything that is not a Search Ad. A stray `utm_term` on a social ad just pollutes the keyword report.

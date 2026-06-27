# Google Ads Launch — Campaign Structure

Zakarian GMAT — independent GMAT Focus Edition prep. Private beta, free to use, no credit card. Stripe is test-mode only; the paywall is OFF. Goal of this campaign is micro-conversions (signups, leads, founding reservations), not purchases.

This file is the master plan. KEYWORDS.csv, NEGATIVE_KEYWORDS.csv, ADS.csv, LANDING_PAGE_MAP.md, and UTM_TEMPLATE.md are all built to match the ad-group names and landing URLs defined here. Keep them in sync.

---

## 1. One campaign, Search Network only

- **Campaign name:** `ZG-Search-Launch`
- **Campaign type:** Search
- **Networks:**
  - Search Network: **ON**
  - **Search Partners: OFF** (do not let it default on)
  - **Display Network: OFF** (do not let "easy way to get more conversions" toggle add Display)
  - **Performance Max: not used at all** during launch
- **No Dynamic Search Ads** during launch.

## 2. Match types

- **EXACT and PHRASE only.** No broad match anywhere in this campaign during launch.
- Broad match needs conversion volume + smart bidding to behave; we have neither yet. Revisit only after the account has 30+ conversions and is on Maximize Conversions.

## 3. Locations

Target English-speaking, high-MBA-demand markets plus founder ties:

- United States
- Canada
- United Kingdom
- India
- Norway (founder is based in Oslo; BI Oslo)
- Switzerland (founder ties — HSG)

**Location option (critical):** set to **"Presence: People in or regularly in your targeted locations"** — NOT "Presence or interest." This stops paying for people merely *searching about* these countries from elsewhere.

## 4. Language

- **English.**

## 5. Ad groups (one per high-intent theme / one per live landing page)

Each ad group maps 1:1 to a single live, content-rich page so the message match is tight. Ad group names are referenced verbatim in the CSVs.

| # | Ad Group | Theme / primary keyword | Landing page | On-page conversion event |
|---|----------|-------------------------|--------------|--------------------------|
| 1 | `AG-Study-Plan` | gmat study plan | https://www.zakariangmat.com/gmat-study-plan | lead_captured (newsletter worksheet) |
| 2 | `AG-Error-Log-Template` | gmat error log template | https://www.zakariangmat.com/error-log-template | lead_captured (free CSV, no account) — **highest intent** |
| 3 | `AG-Mock-Review` | gmat mock review | https://www.zakariangmat.com/gmat-mock-review | lead_captured (newsletter) |
| 4 | `AG-Data-Insights` | gmat data insights practice | https://www.zakariangmat.com/gmat-data-insights-practice | lead_captured (newsletter) |
| 5 | `AG-Quant-Practice` | gmat quant practice | https://www.zakariangmat.com/gmat-quant-practice | lead_captured (newsletter) |
| 6 | `AG-Prep-Platform` | gmat prep platform / private beta | https://www.zakariangmat.com/gmat-private-beta | founding_reserve (founding reservation) |

Six ad groups is the launch set. KEYWORDS.csv may split a couple of these into tightly-themed sub-buckets for SKAG-like control, but every keyword still points at one of these six pages.

## 6. Bidding strategy progression

Conversion volume is the gate. Do not skip ahead.

**Phase 0 — launch (Day 1 to ~first 15 conversions):**
- Bid strategy: **Maximize Clicks WITH a max CPC bid limit**, OR **Manual CPC**. Either is fine; both keep cost controlled while there is no conversion history.
- Set a **max CPC cap of $1.50** at the campaign/portfolio level (individual keyword caps in KEYWORDS.csv range $0.40–$2.50; the cap protects against any single auction running away).
- Why not Maximize Conversions yet: smart bidding has nothing to learn from with zero conversions and will overspend.

**Phase 1 — ~15–30 conversions accumulated:**
- Switch to **Maximize Conversions** (no tCPA yet — let it find the floor).
- Keep monitoring CPA daily.

**Phase 2 — 30+ conversions, stable CPA:**
- Add a **Target CPA** at roughly the observed CPA (or slightly below). Only then.

Track all phase changes in the optimization log (see 7_DAY_OPTIMIZATION_PLAN.md).

## 7. Conversion actions to optimize for

The paywall is OFF, so purchase volume is zero. Optimize toward **micro-conversions** that fire as funnel events (auto-forwarded to gtag once `NEXT_PUBLIC_GOOGLE_TAG_ID` is set):

Primary (count as "Conversions", used by bidding):
- `signup` — account created (Meta: CompleteRegistration)
- `lead_captured` — email captured on a landing-page lead magnet
- `founding_reserve` — founding access reserved

Secondary (track but **mark "Don't include in Conversions"** so they don't skew bidding):
- `signup_initiated`
- `landing_view`
- `pricing_view`

Dormant (do NOT set up yet — no purchases during free beta):
- `checkout_initiated`, `purchase_completed`

See GOOGLE_ADS_SETUP_STEPS.md for whether to **import these from GA4** (preferred if `NEXT_PUBLIC_GOOGLE_TAG_ID` is a `G-` GA4 id) or **create Google Ads conversions** (if it is an `AW-` Google Ads id).

## 8. Hard prerequisites before any spend

- `NEXT_PUBLIC_GOOGLE_TAG_ID` must be set in Vercel prod and deployed. Until then, no gtag fires and conversions cannot be measured. **= SKIPPED_USER_ACTION** (owner must set the env var and redeploy).
- Verify in GA4 / Tag Assistant that `signup`, `lead_captured`, and `founding_reserve` actually fire before turning the campaign live with budget.
- Do not spend before tracking is verified. This is a no-traffic beta; minimum money is the priority.

## 9. Compliance guardrails (apply to every asset)

- No score/percentile/timeline guarantees anywhere.
- No implied affiliation with GMAC / GMAT / GMAT Focus Edition / mba.com.
- Only permitted performance claim: founder's own 565 -> 735 (100th percentile), framed as his personal result. (Generally kept OUT of tight character-limited ad copy to avoid any "typical result" reading; used only where there's room to frame it as his own.)
- Honest framing: it is a private beta and it is free right now.
- No emojis anywhere.

> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# Daily Monitoring

Operating guide for one founder running paid acquisition + organic for Zakarian GMAT. Goal: catch waste fast, protect spend, and feed the things that convert. Read time: 10 minutes a day, 30 minutes once a week.

The only conversion that pays rent is **signup** (primary). **lead_captured** (opt-in email) is the secondary, slower-burn conversion. Everything else is a leading indicator.

---

## The one number that matters

**Cost per signup (CPS) = channel spend / signups attributed to that channel.**

There is no income yet (free private beta), so you cannot judge channels on revenue. Judge them on CPS and on how far a click makes it down the funnel. A cheap click that never signs up is worse than an expensive click that does.

Funnel order, all real events already firing via `trackEvent()`:

`landing_view` (props {page}) -> `lead_captured` OR `signup` -> `founding_reserve` / `pricing_view` -> `checkout_initiated` -> `purchase_completed`

`signup` also fires Meta `CompleteRegistration`. `AttributionCapture` stamps first-touch UTM onto every event, so every conversion carries its `utm_source` / `utm_campaign` / `utm_content` / `utm_term`. Trust the first-touch attribution for channel scoring; do not re-derive it by hand.

---

## Where to read each metric

| Metric | Source of truth | Notes |
|---|---|---|
| Spend | Channel dashboard (Google Ads / Meta Ads Manager / Reddit Ads / LinkedIn Campaign Manager) | The ad platform is the only place that knows real spend. |
| Impressions, CTR, CPC | Channel dashboard | Platform-reported clicks; expect a gap vs. `landing_view`. |
| `landing_view` (by {page}) | Vercel Analytics events | This is YOUR count of people who actually reached a page. |
| `lead_captured` | Vercel Analytics events | Secondary conversion. |
| `signup` | Vercel Analytics events (+ Meta `CompleteRegistration` in Ads Manager) | PRIMARY conversion. |
| `founding_reserve`, `pricing_view`, `referral_click`, `checkout_initiated`, `purchase_completed` | Vercel Analytics events | Down-funnel + referral health. |
| Cost per signup | Computed: channel spend ÷ that channel's `signup` count | Segment by `utm_campaign`, then `utm_content`. |

Two-source rule for spend vs. conversions: **clicks come from the ad platform, conversions come from Vercel Analytics.** They will never match exactly (bots, blocked pixels, bounce-before-load). The gap itself is a signal — see red flags.

Note on dormant pixels: `trackEvent()` only fires to Meta Pixel / Google tag once `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_GOOGLE_TAG_ID` are set. **Vercel Analytics fires regardless** and is your reliable daily source. If those env vars are unset, platform-side conversion columns (Meta `CompleteRegistration`, Google conversions) will read zero even when signups are real — confirm the IDs are set before trusting in-platform conversion optimization.

---

## Daily routine (about 10 minutes)

Do this once, same time each day (pick a time and keep it; ad data settles ~midday for the prior day).

1. **Open every active channel dashboard.** Record per active campaign: spend (yesterday + campaign-to-date), CTR, CPC.
2. **Open Vercel Analytics.** Record yesterday's `landing_view` (split by {page}), `lead_captured`, `signup`.
3. **Compute cost per signup per channel** (spend ÷ signups). Note campaigns with spend but zero signups.
4. **Spot-check the gap:** platform clicks vs. `landing_view` for the same campaign. A healthy ratio is most clicks turning into views.
5. **Scan for red flags** (table below). If any trip, act today — do not wait for the weekly review.
6. **Confirm nothing is broken:** at least one `landing_view` is logging for each live landing page, and at least one `signup` has fired in the last 24-48h across all channels combined. Zero signups platform-wide for 2 days with live spend = a tracking or page problem until proven otherwise.

Keep a one-line log per day (date, total spend, total signups, blended CPS, anything you changed). A single running text file or sheet is enough. Always change one variable at a time so the log stays interpretable.

---

## Red flags and what to do

Act on these the day you see them.

| Red flag | Likely cause | What to do |
|---|---|---|
| Spend climbing, `signup` flat or zero (2+ days) | Wrong audience, wrong keyword intent, or broken tracking | First confirm tracking fires (load the page, check the event in Vercel). If tracking is fine, pause the worst `utm_content` / `utm_term` and revisit the offer-to-page match. |
| Platform clicks >> `landing_view` | Slow page, bounce-before-load, bot clicks, or redirect/UTM breakage | Load the ad's exact destination URL with its UTMs; confirm the page renders fast and `landing_view` fires. Check for broken UTM strings. |
| High CTR, low `signup` | Ad over-promises vs. landing page; weak page CTA | Tighten ad-to-page message match. The page must deliver exactly what the ad claimed (e.g. error-log ad -> `/error-log-template`). |
| `landing_view` healthy, `lead_captured` and `signup` both low | Landing page friction or unclear value | Check the form / CTA above the fold; simplify the ask. |
| One `utm_term` (search) eating budget with no signups | Broad/mismatched keyword | Pause that term or add negatives; reallocate to terms that convert. |
| CPC spiking on one channel | Auction competition or quality-score drop | Lower bids or pause; do not chase the auction. |
| `referral_click` high, no downstream `signup`/`founding_reserve` | Referral landing or reward copy unclear | Re-check `/refer` flow end to end. |
| Any signup spike with no matching spend | Organic/SEO win OR bot/spam | Verify in Vercel; if real and organic, note the source and lean in. |
| Compliance drift in any live ad | — | Pull the ad immediately. No guaranteed scores, no "diagnostic"/"readiness band"/"score band" language, no generalized score-improvement claims, no fake urgency or counts. Only the founder's own 565 -> 735 / top-1% claim is allowed, never generalized. GMAC/GMAT/mba.com nominative reference only — never imply affiliation or endorsement. |

When in doubt between "tracking is broken" and "the ad is bad," **always rule out broken tracking first.** It is the cheaper mistake to check and the more expensive one to miss.

---

## Kill / scale rule

Keep it mechanical so you don't argue with yourself at 7am. Set your own CPS ceiling before launch (the most you'll pay for one beta signup given a $399 founding / $599 anchor and referral economics); use that number as `TARGET_CPS` below. Until a campaign has spent at least ~3x your TARGET_CPS, you don't have enough data to judge it — let it run.

**KILL (pause)** a campaign / ad set / keyword when, after it has spent ≥ ~3x TARGET_CPS:
- zero `signup` and zero `lead_captured`, OR
- cost per signup ≥ ~2x TARGET_CPS with no improving trend.

**HOLD (leave alone, keep watching)** when CPS is within ~1x-2x TARGET_CPS — iterate the creative or page before touching budget.

**SCALE (raise budget ~20-50%, not 2x)** only when, over at least 3-4 days:
- CPS is comfortably below TARGET_CPS, AND
- signups are steady (not one lucky day), AND
- the down-funnel still moves (`pricing_view` / `founding_reserve` present, not just top-of-funnel).

Scaling rules of the road: raise budget in steps and re-check CPS for 2-3 days after each step — costs usually rise as you scale. Never scale a campaign you can't explain. Kill fast, scale slow.

---

## Weekly review checklist (about 30 minutes)

Same day each week. Roll up the daily logs.

- [ ] **Blended numbers, 7-day:** total spend, total `signup`, total `lead_captured`, blended cost per signup. Compare to last week.
- [ ] **Per-channel table** (Google / Reddit / LinkedIn / Meta retargeting): spend, CTR, CPC, `landing_view`, `lead_captured`, `signup`, CPS. Rank by CPS.
- [ ] **Best and worst `utm_content`** (ad variant) across channels. Plan to kill the worst and produce a new variant against the best.
- [ ] **Search only:** best and worst `utm_term` (keyword). Cut losers, add negatives, note winners to expand.
- [ ] **Landing page funnel** per page (`/error-log-template`, `/gmat-study-plan`, `/gmat-private-beta`, `/gmat-mock-review`, `/gmat-data-insights-practice`, `/gmat-quant-practice`): `landing_view` -> `signup` rate. Which page converts best? Send more traffic there.
- [ ] **Down-funnel + monetization intent:** `pricing_view`, `founding_reserve`, `checkout_initiated`, `purchase_completed` counts and week-over-week trend.
- [ ] **Referral loop health:** `referral_click` -> `signup` -> `founding_reserve`. Is the loop self-feeding or stalled?
- [ ] **Organic/SEO check:** signups with no paid first-touch UTM. Which high-intent theme pages (study plan, error log, mock review, practice platform, DI/Quant practice, private beta) are pulling organic traffic? Note momentum to feed with content.
- [ ] **Apply kill/scale rules** from the week's data: list what you paused, held, scaled — one change per item.
- [ ] **Pixel/tag status:** confirm `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_GOOGLE_TAG_ID` state and whether platform-side conversions match Vercel within a sane margin.
- [ ] **Compliance pass:** re-read every live ad and landing headline against the hard rules. No guaranteed scores, no diagnostic/readiness/score-band claims, no generalized improvement claims, no fake urgency or student counts, GMAC marks nominative only, founder 565 -> 735 / top-1% claim only and never generalized.
- [ ] **One decision for next week:** the single biggest lever (new variant, new page test, kill a channel, double down on the best). Write it down; review it next week.

---

## Principles

- Vercel Analytics events are the source of truth for what users actually did; ad dashboards are the source of truth for what you paid.
- Rule out broken tracking before blaming the ad.
- One change at a time, logged, so cause and effect stay legible.
- Kill fast, scale slow, and never scale something you can't explain.
- Prefer no spend over bad spend — the same discipline as "prefer no trade over a weak trade."
- Every live asset must stay true and compliant. A non-compliant ad is an emergency, not a weekly-review item.

> **ARCHIVED (2026-07-19)** - historical snapshot; wording predates the current claim rules (offer: free 7-day full-access trial, no card; founder result: 565 to 735, top 1%, framed only as Adam's personal result; no "verified"/proof framing until the redacted score report actually ships). Reference only - do not build campaigns from this file.

# Google Ads Audit — Zakarian GMAT (Campaign #1)

Date: 2026-06-30. Skill: `/ads-google`. Account currency: NOK.

## Data status (read first)

This is a **configuration / structure audit**, not a 30-day performance audit.
The campaign is days old (~340 impressions, ~27 clicks), so it does not meet the
skill's data gate (≥30 days + Search Terms Report), and no Google Ads MCP is
connected. Metric-dependent checks (Quality Score, CVR, Ad Strength, search-term
waste) are marked **NEED DATA** rather than guessed — no fabricated numbers.

The full 80-check scored audit waits until there is ~30 days of data. At 27
clicks the leverage is in configuration and tracking, not performance tuning.

## Health score — PROVISIONAL (config-only)

```
Google Ads Health Score: ~62/100 (Grade: C)   [prior full audit: 64/100]

Conversion Tracking: 30/100  ███░░░░░░░  (25%)  <- dominant score-dragger
Wasted Spend:        70/100  ███████░░░  (20%)  structural only; search terms pending
Account Structure:   80/100  ████████░░  (15%)
Keywords:            ~65/100 ██████░░░░  (15%)  QS NEEDS DATA
Ads:                 ~65/100 ██████░░░░  (15%)  Ad Strength NEEDS DATA
Settings:            85/100  █████████░  (10%)  strongest area
```

The score barely moved from the prior 64 because the single biggest dragger is
unchanged: conversion tracking is not wired into Google Ads yet (25% of weight,
mostly failing).

## Campaign snapshot (verified)

- Search only; Display + Search Partners OFF; locations US/CA/UK/AU (Presence);
  English; EXACT/PHRASE match only; Maximize Clicks with a NOK 3 CPC cap; ~NOK
  7-20/day.
- Ad group 1 (error-log) -> `/error-log-template`, 3 RSAs.
- Ad group 2 (free-practice) -> `/gmat-practice-questions-free`, 2 RSAs.
- 4 sitelinks, 8 callouts, ~43 negatives (shared list "ZG core negatives").
- Performance so far: ~27 clicks, ~340 impressions, CTR ~5-6%, ~NOK300 spent.
- **Only ad group 2 is serving impressions.**

## Findings by category

### Conversion Tracking — 30/100 (the priority)
- PASS: GA4 tag live, events firing; `lead_captured` is a GA4 key event; GA4<->Ads linked.
- FAIL: **Conversion-action import into Google Ads not done** -> Ads shows 0
  conversions and Maximize Clicks optimizes blind. This is the gate to Smart Bidding.
- FAIL: Enhanced Conversions not active.
- FAIL: Consent Mode v2 not implemented — and the campaign targets UK (EEA),
  where it is effectively required for measurement to populate. Not cosmetic given the geo.
- WARNING: server-side tagging not configured (optional/recommended).

### Wasted Spend — 70/100 (structural only)
- PASS: Display + Search Partners OFF; exact/phrase only; Presence targeting —
  all structurally cap waste.
- PASS (hygiene): ~43 negatives in a shared list is good practice.
- NEED DATA: the core check — reviewing the **Search Terms Report** — cannot be
  done without the export. Cannot confirm negative coverage or over-blocking yet.

### Account Structure — 80/100
- PASS: one logical search campaign; two tightly-themed ad groups; no SKAGs.
- WARNING: **Ad group 2 has only 2 RSAs** (skill wants >=3) — and it is the only
  serving ad group, so it is the first place to add a 3rd RSA.

### Keywords — ~65/100 (QS NEEDS DATA)
- PASS: exact/phrase discipline, no broad — correct for a new small-budget campaign.
- ISSUE: **Ad group 1 gets zero impressions** — almost certainly "Low search
  volume" on the niche error-log keywords (confirm in Keywords -> Status). The
  error-log term has a fraction of the volume of "free practice questions".
- NEED DATA: Quality Score (needs impressions to populate); cannibalization low risk (2 themed groups).

### Ads — ~65/100 (Ad Strength NEEDS DATA)
- PASS: 4 sitelinks (>=4), 8 callouts (>=4).
- WARNING: no structured snippets or image extensions in place — add both.
- NEED DATA: per-RSA headline/description counts and Ad Strength.

### Settings — 85/100 (strongest)
- PASS: networks off; Presence (not Presence-or-Interest); Maximize Clicks is
  correct for a campaign with zero conversion history (migrate to Maximize
  Conversions only after ~15 conv/30d, per the research plan).
- WARNING: **auto-apply recommendations unconfirmed** — should be OFF.

## Cross-funnel finding (verified in code, not Ads)

The serving ad group points traffic at a page whose opt-ins went nowhere:

| Ad group | Lands on | Email sequence behind it (before this fix) |
|---|---|---|
| 1 (error-log) — starved | `/error-log-template` | Yes — the 4-email error-log drip |
| 2 (free-practice) — all impressions | `/gmat-practice-questions-free` | No — `newsletter` magnet, no drip |

Worse: that page's lead copy already promised "we'll email you the six-tag
error-log template" while the `newsletter` magnet delivered **nothing** (no
download, no drip) — a broken promise on the only page receiving paid traffic.

**FIXED (this session):** `/gmat-practice-questions-free` now uses the
`error-log-template` magnet — it delivers the CSV immediately and enrols opt-ins
into the existing 4-email drip. Shipped on branch `growth/practice-page-drip-fix`.

### Still open — systemic broken promise on the other landing pages
The other four `newsletter`-magnet acquisition pages each promise a different
**asset that does not exist and is never delivered** (newsletter magnet = no
download, no drip):
- `/gmat-study-plan-2-months` — "free 8-week study-plan worksheet"
- `/gmat-data-sufficiency-practice` — "Data Sufficiency decision-grid cheat sheet"
- `/gmat-verbal-practice` — "GMAT Verbal review worksheet"
- `/gmat-focus-edition-changes` — "Focus structure-and-scoring one-pager"

These are not ad-targeted today, so lower urgency, but every one captures an
email against a promise it cannot keep. Options per page: (a) build the promised
asset, (b) re-offer the real error-log template, or (c) drive to signup (which
has its own drip). This is a marketing-copy/content decision — flagged for Adam.

## Quick wins (ranked by impact)

1. **Finish the conversion-action import** (~Jul 1, once GA4->Ads sync lands):
   Goals -> Conversions -> Import -> GA4 -> `lead_captured` -> set Primary.
   Biggest score + optimization unlock; required before Maximize Conversions.
2. **Drip-mismatch fix** — DONE for the ad-targeted page (above); pending merge.
3. Add a 3rd RSA to ad group 2; add structured snippets + image extensions.
4. Turn on Enhanced Conversions + Consent Mode v2 (UK/EEA traffic).
5. Confirm auto-apply recommendations are OFF.
6. Decide ad group 1: keep error-log as an organic/SEO play (very low paid
   volume) or broaden its keywords; either way it should not block budget.

## To run the full 80-check scored audit later

Once there is ~30 days of data (or connect the Google Ads MCP), export and paste:
- Keyword performance (30d): impressions, clicks, CTR, avg CPC, cost, conversions, Quality Score.
- **Search Terms Report** (30d) — the wasted-spend backbone.
- Change History.
- Per-RSA headline/description counts + Ad Strength.

With those, every NEED-DATA check above can be scored against real numbers.

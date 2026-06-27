# Budget Plan — Google Ads Launch

Brand-new beta, little to no traffic, paywall OFF (zero purchase volume). Priority is minimum spend to validate that ads -> micro-conversions (signup / lead_captured / founding_reserve) works at all. Do NOT scale before tracking is verified and conversions are flowing.

All figures are planning estimates, not guarantees. Real CPCs will vary by market and competition.

## 1. Starting budget

- **$7/day** at the campaign level (inside the $5–10 range). This is the single lever Google enforces; ad-group caps below are managed manually via keyword bids and pausing.
- Google may spend up to ~2x daily budget on a high-traffic day but averages to the daily figure over the month. With a $7/day cap, expect roughly **$210/month maximum** if left running every day.
- **Conservative monthly cap: $200/month.** If month-to-date spend approaches $200, pause until the next month or reassess. Hard ceiling: $300/month — do not exceed without a clear CPA win.

## 2. Weekly spend table & expected clicks

Assumed blended CPC during launch: **~$1.20** (mix of $0.40–$2.50 keyword caps; phrase terms and lower-funnel keywords pull the average down).

| Week | Daily budget | Weekly spend | Est. clicks/week @ ~$1.20 CPC | Notes |
|------|-------------|--------------|-------------------------------|-------|
| Week 1 | $7 | ~$49 | ~35–45 | Launch. Watch search terms daily, add negatives. Manual CPC / Max Clicks with $1.50 cap. |
| Week 2 | $7 | ~$49 | ~35–45 | Prune zero-converting keywords. Keep budget flat while learning. |
| Week 3 | $7–10 | ~$49–70 | ~40–60 | If ANY ad group shows conversions at a sane CPA, nudge to $10/day. Else hold $7. |
| Week 4 | $10 (only if validated) | ~$70 | ~55–60 | Scale only the converting ad group(s). Consider Maximize Conversions if ~15+ conversions banked. |

A full month at $7/day ≈ **$210**; staying at $7 for weeks 1–2 then $10 for weeks 3–4 lands around **$165–195/month**, under the $200 cap.

## 3. Per-ad-group budget management

There is ONE campaign budget; you control per-ad-group spend by bids and by pausing, not by separate budgets. Soft monthly allocation guidance (where to let spend concentrate):

| Ad Group | Priority | Soft monthly share | Why |
|----------|----------|--------------------|-----|
| AG-Error-Log-Template | Highest | ~25% | Highest intent, zero-friction free CSV, best expected CPA |
| AG-Prep-Platform | High | ~25% | Highest commercial intent; founding_reserve is the money event later |
| AG-Study-Plan | High | ~20% | Strong, well-matched lead magnet |
| AG-Quant-Practice | Medium | ~15% | High volume but broader intent; watch CPA |
| AG-Mock-Review | Medium | ~10% | Narrower audience |
| AG-Data-Insights | Medium | ~5% | Lowest search volume; keep small |

If an ad group is eating budget without converting, lower its keyword bids (toward the low end of the KEYWORDS.csv range) or pause its weakest keywords rather than starving the whole campaign.

## 4. When to scale

Scale a keyword or ad group ONLY when ALL of these hold:
- Conversion tracking is verified firing (signup / lead_captured / founding_reserve seen in Google Ads + GA4).
- Cost per micro-conversion is **at or below ~$8** (a lead/signup during a free beta; revisit once the paywall is on and you know LTV).
- The ad group has produced **at least 3–5 conversions** so the CPA isn't a fluke of one click.

Scale move: raise daily budget in **$3 increments** (7 -> 10 -> 13), never doubling. Re-check CPA for 3–4 days before the next bump. Move to Maximize Conversions only after ~15–30 total conversions (see CAMPAIGN_STRUCTURE.md bidding progression).

## 5. Kill rule (pause discipline)

- **Pause any single keyword after it has spent $10 with 0 conversions.** No exceptions during launch.
- **Pause any single keyword after $6 spend if its CTR is under 1%** (bad message match or wrong intent — it is burning money before it can convert).
- **Pause an entire ad group if it spends $25 with 0 conversions** AND its search-terms report shows mostly irrelevant queries that negatives can't easily fix.
- Add the offending query as a negative (see NEGATIVE_KEYWORDS.csv) whenever you pause for irrelevance, so it doesn't recur via another keyword.
- Re-allocate freed budget to the best-performing ad group, not to a new untested one.

## 6. Guardrails

- Do not turn on Search Partners, Display, or PMax to "spend the budget." Underspend is fine.
- Do not raise any keyword bid above its KEYWORDS.csv max CPC without a CPA reason.
- Underspending the daily budget is a GOOD sign at this stage (means you're only paying for tight matches). Do not artificially inflate bids to hit the budget.
- If a week ends with zero conversions across the whole campaign at full spend, STOP, re-check tracking, and review search terms before spending another dollar.

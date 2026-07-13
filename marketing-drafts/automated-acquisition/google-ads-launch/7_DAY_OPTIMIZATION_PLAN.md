# 7-Day Optimization Plan

For `ZG-Search-Launch`. Budget ~$7/day, Maximize Clicks with a $1.50 max-CPC cap. Goal: validate that paid search produces micro-conversions (signup / lead_captured / founding_reserve) at a sane cost, while spending the least money possible. This is a low-traffic pre-launch site — expect low absolute numbers; read directionally.

Metrics to watch every day: **impressions, CTR, avg CPC, clicks, conversions, conversion rate, cost/conversion, and the Search Terms report.** Log each day in a simple running note.

Reference thresholds (from BUDGET_PLAN.md):
- Kill keyword: **$10 spent, 0 conversions** -> pause.
- Kill keyword early: **$6 spent, CTR < 1%** -> pause.
- Kill ad group: **$25 spent, 0 conversions, irrelevant search terms** -> pause.
- Good cost/micro-conversion target pre-launch: **<= ~$8.**

---

## Day 1 — Launch & sanity checks
- Confirm the campaign is actually serving: impressions > 0 within a few hours. If still zero after ~6 hours, check for disapproved ads, zero impression share due to low bids, or an over-broad negative (`[gmat]`/`[free]` set as phrase by mistake).
- Confirm conversion tracking is live: in Google Ads, the three conversion actions should read "Recording." Fire a real `lead_captured` yourself from the live site and confirm it lands (allow a few hours for attribution).
- Check every ad shows "Eligible" (not "Under review"/"Disapproved"). If disapproved, read the policy reason — most likely fix is wording, never adding a guarantee.
- Do NOT touch bids or budget today. Let it gather data.

## Day 2 — Search terms hygiene
- Open **Search Terms report** (Keywords -> Search terms). This is the highest-value daily action early on.
- Add any irrelevant/junk query as a negative to the `ZG-Master-Negatives` list (jobs, salary, definitions, competitor names, "is gmat hard," PDFs, etc.). Tighten before you waste clicks.
- Note any GOOD search terms you aren't explicitly targeting — candidates to add as new exact keywords in the right ad group later in the week.
- Still no bid changes. Volume is too thin to judge.

## Day 3 — First CTR read
- Review CTR per keyword and per ad group. Benchmark: search CTR of **2%+ is healthy**; under **1%** signals weak message match.
- For any keyword with **>= ~30 impressions and CTR < 1%**: check the search terms feeding it. If intent is wrong, pause or add negatives. If intent is right but copy is weak, note a headline to improve.
- Check **avg CPC** vs your caps. If a keyword's avg CPC is pinned at its max and getting few impressions, it may be under-bid for the auction — but do NOT raise above the KEYWORDS.csv ceiling. Underspend is acceptable.

## Day 4 — Ad strength & RSA assets
- Look at impressions by ad group. Any ad group with near-zero impressions after 3 days: likely low search volume (expected for Data Insights) or bids too low. Decide whether to leave it (cheap to keep) or pause to focus budget.
- If any RSA shows "Ad strength: Poor," add 2–3 fresh, distinct headlines pulled from real page language. Never repeat the same phrase, never add a guarantee/affiliation claim.
- Check the **assets/combinations** report to see which headlines are serving "Low" — consider replacing chronic Low performers.

## Day 5 — Cost discipline pass
- Apply the kill rule: pause any keyword at **$10 spend with 0 conversions**, or **$6 spend with CTR < 1%**.
- Re-allocate: if one ad group (likely AG-Error-Log-Template or AG-Prep-Platform) is doing the work, let the campaign budget flow there by pausing the weak keywords elsewhere — do NOT raise the daily budget yet.
- Recheck the negative list against the latest search terms.

## Day 6 — Conversion read (if any)
- Look at **conversions and cost/conversion** by ad group and keyword.
- If you have conversions: compute cost per micro-conversion. Under ~$8 = healthy for a pre-launch free-trial product. Flag the winning ad group/keyword for scaling next week.
- If you have ZERO conversions across the whole campaign after ~$40–45 spent: STOP and diagnose before spending more —
  1. Is tracking actually firing? Re-test `lead_captured`/`signup`/`founding_reserve` on the live site.
  2. Are landing pages loading fast and showing the lead magnet above the fold?
  3. Are search terms actually relevant (right intent)?
  Fix the bottleneck; do not just keep spending.

## Day 7 — First optimization pass & decisions
Make explicit keep/cut/scale calls and log them:

**Pause:**
- Keywords hitting the kill rule (over spend, 0 conv, or chronic <1% CTR).
- Any ad group at $25 spend, 0 conversions, with irrelevant search terms negatives can't save.

**Scale (only if validated):**
- Any ad group with **3–5+ conversions at <= ~$8 CPA**: bump campaign daily budget by **$3** (7 -> 10), concentrated by keeping that ad group's bids healthy. Re-evaluate after 3–4 more days.
- Do NOT switch to Maximize Conversions yet unless total conversions across the account are **~15+** (then follow CAMPAIGN_STRUCTURE.md Phase 1).

**Add:**
- Promote 1–3 strong, relevant queries from the Search Terms report into exact keywords in their matching ad group (mind the message match / landing page).
- Add any new junk patterns to negatives.

**Decision summary to record on Day 7:**
- Spend to date, total conversions, blended cost/conversion.
- Best ad group, worst ad group.
- Bid strategy phase (still Max Clicks vs. ready for Max Conversions).
- Next week's daily budget (hold $7 or step to $10) — keep total under the ~$200/month cap.

---

## Standing rules for the whole week
- Never turn on Search Partners, Display, or PMax to "use up" budget. Underspend is fine and expected.
- Never exceed a keyword's KEYWORDS.csv max CPC without a CPA justification.
- Never edit copy in a way that adds a score/percentile/timeline guarantee or implies GMAC affiliation. The only allowed performance claim is the founder's own 565 -> 735 (100th percentile), framed as his result.
- Make ONE category of change per day where possible (negatives, then CTR, then cost) so you can attribute what moved the numbers.

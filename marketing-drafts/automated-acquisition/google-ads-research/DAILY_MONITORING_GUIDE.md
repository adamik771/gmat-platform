# Daily Monitoring Guide — First 7 Days (ZG-Search-Launch)

A day-by-day playbook for watching the expanded Google Ads Search campaign during its first week. Built for the real state of this account: brand-new, ~0 conversion history, Maximize Clicks with a max-CPC cap (~$3.00), EXACT + PHRASE only, Search Partners and Display OFF, $7/day budget, locations US/CA/UK/AU, primary conversion `lead_captured` (frictionless error-log CSV download, no account needed), secondary `signup` and `founding_reserve`.

## The single most important mindset for week 1

At $7/day with a ~$3 cap you will buy roughly **2–4 clicks/day** — well below the ~10–20 clicks/day that practitioners call the practical learning floor [NewFrame Digital, https://newframedigital.com/google-ads-budget-how-much-to-spend/, 2026-06-29]. That means:

- **Week 1 is a plumbing-and-volume check, not a verdict.** The job this week is to confirm the campaign serves, the tracking fires, and which 3–5 keywords actually get impressions and cheap clicks — NOT to declare winners or losers.
- **Do not chase statistical significance.** To prove a conversion-rate difference at 95% confidence you need ~100 conversions/variant for a 50% lift, ~400 for a 20% lift, ~1,600 for a 10% lift [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29]. You will have single digits. Every week-1 read is **directional only**.
- **Daily budget can flex up to 2x.** A single day spending up to ~$14 is documented overdelivery, not a billing error; the monthly cap is ~$213 (7 x 30.4) [Google Ads Help, https://support.google.com/google-ads/answer/2375454, 2026-06-29].
- **Imported GA4 conversions lag up to 24h.** `lead_captured`/`signup`/`founding_reserve` are imported from GA4 and can take up to 24 hours to show in Google Ads [Google Ads Help, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29]. Use GA4 Realtime/DebugView for same-day confirmation; never conclude "zero conversions" off a same-day Google Ads number.
- **Editing keywords/budget/bids can reset learning.** Batch changes; do not fiddle daily [Google Ads Help, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29].

USER_ACTION_REQUIRED for everything below — all checks and changes happen inside the Google Ads UI and GA4, which need the owner's login.

---

## What to check every single day (5-minute scan)

Pull these in the Google Ads UI (segment by day where useful). Log them in a simple sheet so you can see the trend, because any one day is noise.

1. **Did it serve? Impressions today + impressions cumulative.** This is the #1 metric in week 1. The old single ad group had ~0 impressions after 2 days [account state]. The whole point of the expansion (AG-Free-Practice, AG-Study-Plan, AG-Prep-Platform) was to fix that. Zero impressions = a serving problem, not a performance problem.
2. **Clicks + CTR** (per ad group, and per keyword once clicks exist).
3. **Average CPC + spend today.** Confirm you're not burning the whole $7 in 2–3 clicks at the cap.
4. **Search terms report** (the actual queries that triggered ads — different from your keyword list). This is where week-1 money is saved.
5. **Conversions** — read in **GA4 Realtime/DebugView same-day**, and in Google Ads with the 24h lag in mind. Watch `lead_captured` first (primary, cheapest, highest volume); `signup`/`founding_reserve` are secondary/observational.
6. **Status flags:** any ad/keyword "Disapproved" or "Eligible (limited)", and the campaign status row (e.g., "Limited by budget" vs "Eligible"). A disapproval is the one thing worth acting on the same day (usually a trademark/claims edit — see compliance note at the end).

### Reference benchmarks (aspirational ceiling, NOT a week-1 expectation)
Education & Instruction medians, 2026: **CTR 7.56%, CPC $4.81, CVR 13.14%, CPL $77.48** — but these are medians of mature, conversion-rich accounts blending Google + Microsoft Ads, so a brand-new Google-Search-only account will start worse [WordStream, https://www.wordstream.com/blog/2026-google-ads-benchmarks, 2026-05-19]. Practical week-1 read: a new-account **CTR above ~3–4%** and **CPC under the $3 cap** is acceptable. Compare to the benchmark medians only after ~30 days of real volume, and judge the account against **its own trend first**.

---

## What NOT to overreact to in week 1

- **A single zero-conversion day, or even a zero-conversion week.** Expected at 2–4 clicks/day. Not a kill signal on its own.
- **One bad-CTR day or one high-CPC day.** Daily numbers swing wildly on tiny samples. Read 7-day rolling, never one day.
- **CTR/CPC far from the WordStream medians on day 1–3.** New keywords have thin Quality Score history; quality (and CPC) improves as the account accumulates relevant impressions [Google Ads Help, https://support.google.com/google-ads/answer/1722122?hl=en, 2026-06-29].
- **A day that spent ~$14.** Documented 2x overdelivery [Google Ads Help, https://support.google.com/google-ads/answer/2375454, 2026-06-29].
- **"Limited by budget" label.** With ~0 history the immediate problem is volume, not budget. Do NOT scale yet (see scale rule).
- **In-platform "switch to broad match / Maximize Conversions" recommendations.** Those assume a Smart-Bidding, conversion-rich account — the opposite of this one. Ignore for now [Google Ads Help, https://support.google.com/google-ads/answer/13389795?hl=en, 2026-06-29].

---

## Day-by-day

### Day 0 (launch day) — verify the plumbing BEFORE spend matters
Do this the moment the expanded ad groups are live, ideally before clicks arrive.
- Confirm all four ad groups (AG-Error-Log-Template, AG-Free-Practice, AG-Study-Plan, AG-Prep-Platform) and their RSAs are **Approved/Eligible**, not under review or disapproved.
- Confirm campaign settings are still correct: Search only, **Search Partners OFF, Display OFF**, EXACT + PHRASE only, Maximize Clicks + max-CPC cap, $7/day.
- **Verify conversion tracking end to end.** In GA4, confirm `lead_captured` (and `signup`, `founding_reserve`) are marked as **key events** and imported into Google Ads [Google Ads Help, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29]. Trigger a real `lead_captured` on `/error-log-template` and watch it land in **GA4 DebugView** with its parameters (`source`, `lead_magnet`, first-touch UTM) [Google Analytics Help, https://support.google.com/analytics/answer/7201382?hl=en, 2026-06-29]. Run **Google Ads Tag Assistant** on the live domain + `/error-log-template`; an action with no clicks yet should read "No recent conversions" / healthy, not "Unverified" indefinitely [Google Ads Help, https://support.google.com/google-ads/answer/10989978?hl=en, 2026-06-29]. Confirm Vercel redirects don't strip the `gclid`.
- If tracking is not firing cleanly, **fix it before spending** — leads you can't measure are wasted budget.

### Day 1 — did it serve at all?
- Check **impressions**. Some impressions in at least one ad group = healthy; the expansion worked.
- **If still 0 impressions across all groups:** do NOT pause anything. Diagnose serving: (a) are keywords Eligible and not "below first-page bid"? (b) is the $3 cap high enough to enter the auction for these terms? (c) any disapprovals? Education CPCs can run mid-single-digits, so a $3 cap may sit below the auction for some terms — note it, don't change it yet (one data point).
- Do not touch keywords, bids, or budget today.

### Day 2 — first directional look, first negatives
- Open the **search terms report**. Even a handful of queries tells you whether your phrase-match terms are pulling relevant searches or junk.
- **Add negatives** for clearly irrelevant/off-intent queries (see "When to add negatives" below). This is the one proactive optimization that is safe and valuable in week 1 — it protects the tiny budget without resetting learning the way bid/keyword edits do.
- Note which ad groups got impressions and which got 0. Still no pausing.

### Day 3 — early CTR/CPC sanity check
- Look at **CTR and CPC per ad group** on the 3-day rolling numbers.
- If an ad group is getting impressions but CTR is very low (e.g., **well under ~2%** over a meaningful impression count, say 100+ impressions), that's an early ad-relevance signal — flag it, but do NOT rewrite ads yet (sample still too thin; RSAs need impressions to optimize their asset combinations).
- Keep adding negatives from new search-terms data.
- This is roughly the earliest point a **keyword** could hit the kill threshold if CPCs are high — but only if it has truly spent ~2–3x your target cost-per-lead with zero leads (see kill rule). Most keywords won't have spent enough yet.

### Day 4 — mid-week checkpoint
- Re-pull search terms; refine negatives.
- Check **which keywords are actually getting impressions/clicks** vs which are dormant. Dormant ≠ bad yet (could be low search volume); a keyword that spends with zero leads is the one to watch.
- If one ad group is eating most of the budget and starving the others, note it. Consider (do not yet execute) concentrating budget on the 1–2 highest-intent groups (AG-Error-Log-Template / AG-Free-Practice) if the goal is to accumulate `lead_captured` faster [Stackmatix, https://www.stackmatix.com/blog/google-ads-budget-planning-startups, 2026-06-29].

### Day 5 — first look at the funnel shape
- Build the simple funnel: **impressions -> clicks -> lead_captured** (use GA4 for the lead count to avoid the 24h Ads lag). Read it directionally.
- If you're getting clicks but **zero `lead_captured` across the whole account** despite traffic landing on `/error-log-template`, suspect a **landing-page or tracking problem**, not a keyword problem — that page is the lowest-friction, no-account download and should convert clicks at a high rate. Re-run DebugDview / Tag Assistant before blaming keywords.
- Continue negatives. Still resist bid/keyword structural edits.

### Day 6 — pre-week-1 review prep
- Compile 7-day rolling: impressions, clicks, CTR, avg CPC, spend, `lead_captured` (GA4), by ad group and by keyword.
- Identify: (a) keywords that got real spend with **zero leads** (kill candidates), (b) ad groups with impressions but **persistently low CTR** (ad-rewrite candidates), (c) any ad group still at **0 impressions** (serving/bid candidates).
- Do not act yet — make the changes in one batch on Day 7 to avoid scattering learning resets.

### Day 7 — first batch-decision day
Make week-1 decisions **in one sitting**, then let the campaign sit ~7 days before the next structural edit [Google Ads Help, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29]. Apply the rules below. Important: **do NOT switch bidding strategy** and **do NOT scale budget** on Day 7 unless the specific thresholds are met (they almost certainly are not this early).

---

## Decision rules with concrete thresholds

### When to add negatives (do this continuously from Day 2)
Trigger: any search-terms query that is **off-intent, irrelevant, or wrong-product**. Examples to expect and exclude: "free GMAT official questions", competitor brand names, "GMAT exam registration/booking", jobs/salary queries, unrelated test names (GRE/SAT only-intent), "answers/cheat", and anything implying the official exam rather than prep.
- Add as exact/phrase negatives at the campaign level (or ad-group level if the term is fine for one group, wrong for another).
- This is the **safest, highest-ROI week-1 action** at $7/day — it stops the budget leaking to junk clicks without resetting learning.

### When to pause a KEYWORD (cost-based kill rule, NOT click-based)
Use a **cost-vs-target multiple**, not a fixed click count. Pick a tolerable target cost-per-lead first (a sensible starting target for the free `lead_captured` download is **~$5–10/lead**).
- **Pause a keyword once it has spent ~2–3x your target cost-per-lead with zero `lead_captured`.** At a $10 target that's **~$20–30 spent, 0 leads -> pause** [Optmyzr, https://www.optmyzr.com/blog/google-ads-keywords-not-converting/, 2026-06-29].
- **Stretch to ~4–5x ($40–50) for upper-funnel/visibility terms** (broader "prep platform" / "study plan" phrases that may assist).
- **Before pausing, diagnose:** is it a match-type/intent mismatch or a landing-page mismatch? If the keyword is assisting or the page is the real problem, fix that first rather than killing the keyword [Optmyzr, https://www.optmyzr.com/blog/google-ads-keywords-not-converting/, 2026-06-29].
- **Reject the folk "100 clicks then pause" rule** — at this budget you may never reach 100 clicks on a keyword, and a fixed click count ignores cost [Optmyzr, https://www.optmyzr.com/blog/google-ads-keywords-not-converting/, 2026-06-29].
- Realistically, at 2–4 clicks/day spread across groups, **most keywords won't hit the kill threshold within 7 days.** That's fine — patience beats premature pruning here.

### When to rewrite ADS (low CTR)
- Trigger only with **enough impressions to read** — at least **~100+ impressions** on the ad group/RSA. Below that, CTR is noise.
- If, over 100+ impressions, CTR is **persistently below ~2%** (and well under the ~3–4% acceptable-new-account floor), treat it as an **ad-relevance / expected-CTR** problem [Google Ads Help, https://support.google.com/google-ads/answer/6167118?hl=en, 2026-06-29].
- Fix by tightening **keyword -> RSA headline -> landing-page H1 message match** and adding action language ("Get the free error log", "Try the practice questions") [Google Ads Help, https://support.google.com/google-ads/answer/6167130?hl=en, 2026-06-29]. For RSAs, add/swap weak headlines rather than deleting the whole ad, so you keep some asset history.
- **Compliance gate on every rewrite:** descriptive "GMAT Focus prep / practice" use only; never "official", "authorized", "partner", GMAC, or mba.com; never imply affiliation or a guaranteed score/percentile/timeline; the only performance claim allowed is the founder's own 565->735 framed as HIS result [Google Ads Help — Unacceptable business practices, https://support.google.com/adspolicy/answer/15938071?hl=en, 2026-06-29; Google Ads Help — False/misleading/unrealistic claims, https://support.google.com/adspolicy/answer/6086777?hl=en, 2026-06-29].

### When to STOP the whole test
Week 1 is too early to stop on performance. Stop/escalate only for **structural failures**, not weak numbers:
- **Tracking is broken** and can't be fixed (leads can't be measured) — pause spend until fixed; spending without measurement is the real waste.
- **Account-level disapproval / suspension** (e.g., a Misrepresentation or trademark flag) — fix the offending copy and appeal; don't keep paying into a crippled account [Google Ads Help, https://support.google.com/adspolicy/answer/15938071?hl=en, 2026-06-29].
- **Still ~0 impressions across all ad groups after Day 3–4** despite Approved keywords — this is a serving/bid/volume problem to solve (raise cap on a couple of cheap high-intent terms, or check "below first-page bid"), not a reason to abandon the test.
- Otherwise: **do not stop the test in week 1 for low conversions.** A valid read at $7/day takes ~4 weeks minimum, ideally 6–8, to cover full weekly cycles; ending early "gives false results" [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29].

### When to SCALE (almost certainly NOT in week 1)
Two conditions must BOTH hold before adding budget:
1. An ad group is **hitting its cost-per-lead target** (cheap `lead_captured`), AND
2. It is **losing impression share to budget** — "Search lost IS (budget) >= 10%" over the last 7–30 days [Bigflare, https://www.bigflare.com/blog/what-to-do-when-your-google-ads-campaign-is-limited-by-budget, 2026-06-29].
- Then raise budget in **10–20% steps**, waiting a week / a full conversion cycle between increases; big jumps throw the campaign back into learning.
- **Right now the account is volume-limited, not budget-limited** (~0 impressions), so the lever is keywords/bids/relevance, not more money. Do not scale on a "Limited by budget" label alone before leads are cheap and IS-budget loss is real.

### When to switch BIDDING strategy (not in week 1, and not for weeks)
- **Stay on Maximize Clicks + max-CPC cap.** Google itself says brand-new campaigns should use Maximize Clicks to build traffic/conversion data first, and to have **~15 conversions in the last 30 days** before applying Maximize Conversions [Google Ads Help, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29].
- Only consider **Maximize Conversions (optimizing `lead_captured`)** once ~15+ `lead_captured`/30 days is realistic; consider **Target CPA** only after ~30/30 days [Google Ads Help, https://support.google.com/google-ads/answer/6268632?hl=en, 2026-06-29]. **Target ROAS is structurally N/A** — no revenue in the free beta [Google Ads Help, https://support.google.com/google-ads/answer/6268637?hl=en, 2026-06-29].
- Keep **broad match OFF** until conversion bidding is viable; Google says it's "critical to use Smart Bidding with broad match," which this account can't feed yet [Google Ads Help, https://support.google.com/google-ads/answer/12159290, 2026-06-29].
- If Maximize Clicks pushes CPCs to the $3 cap on a couple of low-quality clicks/day, **test Manual CPC** for tighter per-keyword control (no learning period) — a valid alternative, especially since Search Partners is already OFF [Google Ads Help, https://support.google.com/google-ads/answer/6268626?hl=en, 2026-06-29].

---

## One-page daily checklist

Every day (5 min), in the Google Ads UI + GA4 (USER_ACTION_REQUIRED):
- [ ] Impressions today + cumulative (did it serve? this is the week-1 metric)
- [ ] Clicks + CTR (rolling, not single-day)
- [ ] Avg CPC + spend (not burning $7 in 2–3 clicks?)
- [ ] Search terms report -> add negatives for any junk/off-intent query
- [ ] `lead_captured` in GA4 Realtime/DebugView (ignore same-day Ads number; 24h lag)
- [ ] Any disapproval / "Eligible (limited)" / "below first-page bid" flag

Do NOT, in week 1:
- [ ] Pause keywords on a bad day (only on ~2–3x-target-CPL spent with 0 leads)
- [ ] Rewrite ads under ~100 impressions
- [ ] Switch bidding strategy or enable broad match
- [ ] Scale budget (volume-limited, not budget-limited)
- [ ] Make daily bid/keyword/budget edits that reset learning — batch on Day 7

---

### Notes
- All figures are directional learning signals at $7/day, not statistically valid A/B reads [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29].
- All checks/changes require the owner's Google Ads + GA4 login — USER_ACTION_REQUIRED throughout.
- Independent (non-Google) sources here are agency/vendor data labeled medium/low confidence; Google Help pages are primary. Where they conflict, the cautious low-budget interpretation is used because this is a near-zero-conversion, $7/day account.

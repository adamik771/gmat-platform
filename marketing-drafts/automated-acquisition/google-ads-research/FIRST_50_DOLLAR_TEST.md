# First $50 Google Ads Test — ZG-Search-Launch

A tiny, disciplined first paid-search test for zakariangmat.com. The goal is **learning, not statistical proof**: at this budget you cannot run a significance-grade A/B test, so this plan reads the raw funnel (impressions -> clicks -> lead_captured) directionally and decides which 2-4 keywords actually pull cheap leads. Everything here is consistent with `KEYWORDS_AND_NEGATIVES.csv` and `ADS.csv` in this folder.

This is decision-support, not account automation. Anything that requires logging into Google Ads, GA4, or Vercel is marked **USER_ACTION_REQUIRED**.

---

## 1. Budget, duration, and what "$50" buys

| Item | Value |
|---|---|
| Total test budget | ~$50 (first probe), naturally extends to ~$100 over the full window |
| Daily budget | $7/day (campaign level, shared across the 4 first-test ad groups) |
| Monthly equivalent | ~$213 ($7 x 30.4) |
| Minimum duration | 4 weeks |
| Target duration | 6-8 weeks |
| Strategy | Maximize clicks |
| Max-CPC cap | $3.00 |

**Why ~$50 is a probe, not a verdict.** $7/day at a $3.00 cap buys only ~2-4 clicks/day — well below the ~10-20 clicks/day that practitioners cite as the data floor to optimize, so any single-day read is noise [NewFrame Digital, https://newframedigital.com/google-ads-budget-how-much-to-spend/, 2026-06-29]. $50 spends in roughly 7 days at $7/day; the honest first read needs the **full 4-8 weeks** to cover weekly cycles, so plan for ~$50-100 of actual spend before drawing keyword conclusions [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29].

**Why not just "run it 7 days and judge."** Reaching 95% confidence on a conversion-RATE difference needs ~100 conversions/variant for a 50% lift, ~400 for a 20% lift, ~1,600 for a 10% lift — impossible at this volume [Growth Spree, same url, 2026-06-29]. So do **not** frame this as an A/B test. Read it as: which keywords get impressions, which produce cheap `lead_captured` events, which burn clicks with zero leads.

**Daily overdelivery is normal.** Google can spend up to 2x the daily budget on a given day (up to ~$14), balanced out across the month — that is documented, not a billing error [Google Ads Help — About average daily budgets, https://support.google.com/google-ads/answer/2375454, 2026-06-29]. Check the account daily, as Google advises for small budgets.

---

## 2. Campaign settings (already configured — confirm, do not rebuild)

| Setting | Value |
|---|---|
| Campaign | **ZG-Search-Launch** |
| Type | Search **only** (Search Partners OFF, Display Network OFF) |
| Bidding | **Maximize clicks** with a **$3.00 max-CPC cap** |
| Match types | **Exact + Phrase only** (no broad) |
| Locations | US, Canada, UK, Australia — **Presence** ("people in") not "interest" |
| Language | English |
| Devices | All |
| Ad schedule | All hours |
| Budget | $7/day |

**Why these are right for a zero-history account:**
- **Maximize clicks now, not Smart Bidding.** Google explicitly recommends a brand-new campaign use Maximize Clicks to build traffic/conversion data first, and wants ~15 conversions in the prior 30 days before Maximize Conversions is appropriate [Google Ads Help — About Maximize conversions bidding, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29]. Search Partners is already OFF, which neutralizes the main "Maximize Clicks buys junk traffic" critique [Jyll.ca, https://learn.jyll.ca/blog/should-you-use-maximize-conversions-or-manual-cpc-bidding-in-google-ads, 2026-06-29].
- **Exact + Phrase, no broad.** Independent data (Optmyzr, ~1M keywords / 15,491 accounts) found exact > phrase > broad on efficiency; broad's gains are explicitly conditional on Smart Bidding fed by conversion data — which this account does not have yet [Optmyzr, https://www.optmyzr.com/blog/optmyzr-state-of-ppc-study/, 2026-06-29; Google Ads Help — broad match, https://support.google.com/google-ads/answer/12159290, 2026-06-29]. Broad match is a graduate-level tool to defer until 30-50+ conversions exist.
- **$3.00 cap is a deliberate trade.** The cap was raised from $1.50 to $3.00 to win more auctions after ~0 impressions on one tight ad group. Watch that it doesn't simply burn $7 in 2-3 clicks/day; if cheap keywords clear auctions well below $3.00, the cap is harmless headroom, not a target.

**USER_ACTION_REQUIRED:** In Google Ads, confirm the four boxes most often wrong by default: (a) Search Partners OFF, (b) Display Network OFF, (c) location targeting set to **Presence**, (d) any newly added keyword is **not** silently left on broad (broad is the default for new keywords) [Google Ads Help — keyword matching, https://support.google.com/google-ads/answer/7478529?hl=en, 2026-06-29].

---

## 3. The 4 test ad groups, landing pages, and bids

These are the four **High-priority** ad groups in `KEYWORDS_AND_NEGATIVES.csv` (the 7 Medium/Low groups are Phase-2 expansion — do NOT add them in the $50 test). Concentrating the tiny budget on 4 high-intent groups beats spreading it across 11 [Stackmatix, https://www.stackmatix.com/blog/google-ads-budget-planning-startups, 2026-06-29].

| Ad group | Landing page | Intent | Why it's in the first test |
|---|---|---|---|
| **AG-Error-Log-Template** | https://www.zakariangmat.com/error-log-template | Free tool / lead magnet | Lowest friction (no account), highest-intent, primary `lead_captured` driver |
| **AG-Free-Practice** | https://www.zakariangmat.com/gmat-practice-questions-free | Free practice | Highest search volume of the four; strong intent |
| **AG-Study-Plan** | https://www.zakariangmat.com/gmat-study-plan | Commercial | Lead-magnet worksheet; reliable volume |
| **AG-Prep-Platform** | https://www.zakariangmat.com/gmat-private-beta | Product / founding | Closest to the product pitch; `signup` / `founding_reserve` driver |

### Keywords + bids (verbatim from `KEYWORDS_AND_NEGATIVES.csv`)

All bids sit under the **$3.00 campaign cap**. Match types are **Exact** or **Phrase** only.

**AG-Error-Log-Template** -> /error-log-template
- `gmat error log template` — Exact $1.60 / Phrase $1.40
- `gmat error log` — Exact $1.40 / Phrase $1.20
- `gmat error log spreadsheet` — Phrase $1.30
- `error log for gmat` — Phrase $1.20
- `gmat mistake log` — Phrase $1.10
- `gmat error tracker` — Phrase $1.10

**AG-Free-Practice** -> /gmat-practice-questions-free
- `gmat practice questions` — Exact $2.50
- `free gmat practice questions` — Exact $2.40
- `gmat practice questions free` — Phrase $2.20
- `gmat focus practice questions` — Phrase $2.10
- `free gmat practice` — Phrase $2.00
- `free gmat questions` — Phrase $1.90
- `gmat focus practice questions free` — Phrase $1.70
- `free gmat question bank` — Phrase $1.60

**AG-Study-Plan** -> /gmat-study-plan
- `gmat study plan` — Exact $1.80 / Phrase $1.50
- `gmat focus study plan` — Exact $1.60 / Phrase $1.40
- `gmat study schedule` — Phrase $1.40
- `gmat study plan 3 months` — Phrase $1.30
- `gmat preparation plan` — Phrase $1.30
- `how to study for gmat` — Phrase $1.10

**AG-Prep-Platform** -> /gmat-private-beta
- `gmat prep platform` — Exact $2.00 / Phrase $1.70
- `best gmat prep platform` — Phrase $2.00
- `gmat prep app` — Phrase $1.70
- `online gmat prep` — Phrase $1.60
- `gmat prep online` — Phrase $1.60
- `gmat focus prep` — Phrase $1.50
- `adaptive gmat prep` — Phrase $1.40

---

## 4. Ads to use (reference: `ADS.csv`)

Use the validated, char-checked RSA from `ADS.csv` for each ad group — **one RSA per ad group**, pointed at that ad group's landing page so the keyword -> headline -> page message match holds (the main lever you can pull manually since Smart Bidding is off) [Google Ads Help — Optimize your ads and landing pages, https://support.google.com/google-ads/answer/6238826?hl=en, 2026-06-29].

| Ad group | RSA final URL (from ADS.csv) | Headline 1 anchor |
|---|---|---|
| AG-Error-Log-Template | /error-log-template | "GMAT Error Log Template" |
| AG-Free-Practice | /gmat-practice-questions-free | "Free GMAT Practice" |
| AG-Study-Plan | /gmat-study-plan | "GMAT Study Plan" |
| AG-Prep-Platform | /gmat-private-beta | "GMAT Prep Platform" |

Each RSA in `ADS.csv` already supplies 3 pinned-style headlines + 12 extra headlines + 2 descriptions (2 more on reserve), plus Path 1 / Path 2 display-URL paths. **Do not rewrite copy here** — paste the RSA fields directly from `ADS.csv`.

**Compliance gate (every headline/description must pass — already baked into `ADS.csv`):**
- No score/percentile/timeline guarantee. The only performance claim is the founder's own "565 -> 735 / built by a 735 scorer," framed as HIS result [Google Ads Help — False, misleading, or unrealistic claims, https://support.google.com/adspolicy/answer/6086777?hl=en, 2026-06-29].
- No "official," "authorized," "partner," GMAC, or mba.com language — false-affiliation copy can suspend the whole account **without warning** [Google Ads Help — Unacceptable business practices, https://support.google.com/adspolicy/answer/15938071?hl=en, 2026-06-29].
- Bidding on "gmat" as a keyword is policy-safe; the constrained surface is the **ad text** (RSAs are in scope). Keep "GMAT" descriptive/nominative ("GMAT Focus practice"), never the logo [Google Ads Help — Trademarks, https://support.google.com/adspolicy/answer/6118?hl=en, 2026-06-29].
- The question bank is ORIGINAL, not official questions. No emojis. The GMAC non-affiliation disclaimer stays on every landing page [GMAC, https://www.gmac.com/about-us/trademarks-and-copyrights, 2026-06-29].

---

## 5. Negative keywords to add

Apply the **campaign-level negative list** from `KEYWORDS_AND_NEGATIVES.csv` (rows 84-143) to ZG-Search-Launch before spend. These protect the tiny budget from wrong-intent, competitor, navigational, and policy-risk queries. Grouped for review:

- **Affiliation / GMAC-owned (also compliance-protective):** `official gmat` (neg phrase), `official guide` (neg phrase), `free official` (neg phrase), `mba.com` (neg phrase), `mba.com login` (neg phrase), `gmac` (neg phrase), `gmac login` (neg phrase), `gmac careers` (neg phrase)
- **Cheating / piracy (policy + wrong audience):** `cheat`, `cheat sheet`, `hack`, `leaked`, `torrent`, `crack`, `download crack`, `answers`, `answer key` (all neg phrase)
- **Wrong format / freebie-only:** `pdf`, `free pdf`, `free download` (neg phrase); `free` (neg **Exact**)
- **Job / salary / career:** `jobs`, `job`, `salary`, `career`, `careers` (neg phrase)
- **Discount-only (nothing to charge in free beta):** `coupon`, `coupon code`, `promo code`, `discount code` (neg phrase)
- **Pure research / definitional:** `is gmat hard`, `is the gmat hard`, `what is gmat`, `what is a good gmat score` (neg phrase); `gmat` (neg **Exact**, blocks the ultra-broad single word)
- **Wrong exam:** `gmat vs gre`, `gre`, `executive assessment`, `ea exam`, `old gmat`, `gmat 800` (neg phrase)
- **Exam logistics, not prep:** `gmat syllabus`, `gmat exam dates`, `gmat registration`, `gmat test center`, `gmat fee`, `gmat cost` (neg phrase)
- **Competitors / forums (navigational):** `gmat club`, `manhattan`, `kaplan`, `princeton review`, `magoosh`, `ttp`, `target test prep`, `e-gmat`, `egmat` (neg phrase)
- **In-person / tutoring intent (this is a self-serve platform):** `gmat coaching`, `gmat tutor`, `gmat classes`, `gmat coaching near me` (neg phrase)

**USER_ACTION_REQUIRED:** add these as a **campaign negative keyword list** in Google Ads so all four ad groups inherit them. During the test, scan the Search Terms report weekly and add any new junk queries as negatives (the `free` Exact and `gmat` Exact negatives exist precisely because phrase keywords can match too loosely).

---

## 6. UTM structure and GA4 first-touch attribution

Every final URL in this test carries UTMs so GA4 can attribute the funnel by ad group and keyword. Use this exact structure:

```
utm_source=google
utm_medium=cpc
utm_campaign=zg-search-launch
utm_content={ad group, lowercased}   e.g. ag-error-log-template
utm_term={keyword}                    Google auto-fills the matched keyword via the ValueTrack {keyword} parameter
```

**Per-ad-group `utm_content` values:**
- AG-Error-Log-Template -> `utm_content=ag-error-log-template`
- AG-Free-Practice -> `utm_content=ag-free-practice`
- AG-Study-Plan -> `utm_content=ag-study-plan`
- AG-Prep-Platform -> `utm_content=ag-prep-platform`

**Example tagged final URL (AG-Error-Log-Template):**
```
https://www.zakariangmat.com/error-log-template?utm_source=google&utm_medium=cpc&utm_campaign=zg-search-launch&utm_content=ag-error-log-template&utm_term={keyword}
```

**How to set it without hand-tagging every URL:** put the `utm_*` block once in the campaign's **Tracking template / final URL suffix** so it appends to every ad automatically; `{keyword}` resolves per auction via ValueTrack. Keep **auto-tagging (GCLID) ON** in parallel — GCLID is what links clicks back to Google Ads conversions; UTMs are for GA4 reporting. The two coexist.

**How it flows into GA4 first-touch attribution:** the platform already merges first-touch UTMs into every GA4 event (confirmed this session). So a visitor who arrives via `utm_content=ag-error-log-template` carries that first-touch tag onto their `landing_view`, `lead_captured {source, lead_magnet}`, `signup`, and (if applicable) `founding_reserve` events — letting you read **cost-per-lead by ad group and by keyword** even though Maximize Clicks isn't optimizing to conversions yet [Google Analytics Help — DebugView, https://support.google.com/analytics/answer/7201382?hl=en, 2026-06-29].

**USER_ACTION_REQUIRED (do BEFORE meaningful spend):**
1. In GA4, mark `lead_captured` (and `signup`, `founding_reserve`) as **key events**, then **import** them into Google Ads. GA4 is already linked; auto-tagging must be on; imported data can lag up to 24h [Google Ads Help — Import GA4 conversions, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29].
2. Set `lead_captured` as the **primary** conversion (highest volume, cheapest signal); keep `signup` and `founding_reserve` **secondary** (observation only) [Google Ads Help — primary/secondary conversions, https://support.google.com/google-ads/answer/11461796?hl=en, 2026-06-29]. Note: at this budget these are for **observation**, not bidding — the campaign stays on Maximize Clicks.
3. Verify with **GA4 DebugView** (trigger `lead_captured` on /error-log-template and confirm the `source`, `lead_magnet`, and first-touch UTM params attach) and **Google Ads Tag Assistant** (confirm gtag fires sitewide; "No recent conversions / Recording" is the healthy pre-traffic state) [Google Ads Help — Tag Assistant, https://support.google.com/google-ads/answer/10989978?hl=en, 2026-06-29]. Confirm Vercel routing does not strip the `gclid`.

---

## 7. Success criteria (read directionally, not as significance)

At $7/day, success = **learning which keywords pull cheap leads**, plus a clean, low-friction funnel. Concrete reads, in priority order:

1. **The campaign actually serves.** After expanding to 4 ad groups, impressions should climb off ~0. If a keyword still shows ~0 impressions after ~1 week of serving, it's a volume/Quality-Score problem (check the expected-CTR / ad-relevance / landing-page-experience columns), not a budget problem [Google Ads Help — About Quality Score, https://support.google.com/google-ads/answer/6167118?hl=en, 2026-06-29].
2. **CTR sanity.** The Education vertical benchmark is ~7.56% CTR / ~$4.81 CPC, but those are **medians of mature accounts** — treat them as an aspirational ceiling, not a starting expectation. A new-account CTR above ~3-4% and an average CPC under the $3.00 cap are acceptable early reads [WordStream, https://www.wordstream.com/blog/2026-google-ads-benchmarks, 2026-06-29].
3. **`lead_captured` is the headline metric.** The free, no-account /error-log-template download should convert clicks to `lead_captured` at a **high** rate (it's lower-friction than the benchmark "lead"). If a high-intent ad group converts clicks to a free download at well under ~10%, the landing page or keyword-intent match is the problem, not the budget [LocaliQ, https://localiq.com/blog/search-advertising-benchmarks/, 2026-06-29].
4. **Cost-per-lead_captured by ad group.** Pick a tolerable internal target (e.g. **$5-10 per `lead_captured`** for the free download; a real `signup` or `founding_reserve` may cost more and that's fine). This is your own auction data — ignore the broad-category $77 education CPL as a target [WordStream, same url, 2026-06-29].

A clean outcome from $50-100: 1-3 ad groups producing `lead_captured` at/under target, the other 1-3 clearly identified as expensive or zero-lead. That is a **win** at this budget even if nothing reaches statistical significance.

---

## 8. Kill rules (cost-based, per keyword — not click-count based)

The defensible rule is cost-vs-target, not "100 clicks then pause" [Optmyzr, https://www.optmyzr.com/blog/google-ads-keywords-not-converting/, 2026-06-29]:

- **Pause a keyword** once it has spent **~2-3x your target cost-per-lead** with **zero** `lead_captured` (e.g. at a $7 target, flag at ~$14-21 spent, no lead). The plan's own working rule: **pause after ~$10-15 spent with 0 conversions** or clearly bad CTR/relevance.
- **Give upper-funnel / informational terms more room** — stretch to **4-5x** target before cutting, since they aid visibility (mostly relevant to Phase-2 groups; the four first-test groups are high-intent, so the 2-3x rule applies).
- **Diagnose before pausing.** If a keyword gets clicks but no leads, check match-type drift (Search Terms report), keyword -> headline -> landing-page message match, and mobile load speed (target sub-3s) BEFORE killing — the keyword may be assisting [Google Ads Help — Tag Assistant / QS docs, 2026-06-29].
- **Do NOT pause on day 2-3 of zero impressions.** First confirm the keyword is actually serving. Eligibility/Quality-Score, not spend, is usually the cause this early.
- **Batch edits; don't churn.** Frequent keyword/budget/bid edits reset learning and add noise — let the campaign sit ~7-14 days between structural changes [Google Ads Help — learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29].

---

## 9. Scale rules (only after the test reads clean)

The account is currently **volume-limited (near-zero impressions), not budget-limited**, so the immediate job is to fix volume (the 4-group expansion), not to raise budget. Scale only when BOTH conditions hold for an ad group [Bigflare, https://www.bigflare.com/blog/what-to-do-when-your-google-ads-campaign-is-limited-by-budget, 2026-06-29]:

1. It produces `lead_captured` at or under the cost-per-lead target, AND
2. **"Search lost IS (budget)" >= ~10%** over a trailing 7-30 days (i.e. it's genuinely capped by budget, not by Quality Score).

Then:
- Raise the $7/day budget in **10-20% steps**, waiting ~1 week / a full conversion cycle between increases — large jumps can throw the campaign back into learning.
- Shift budget toward the winning ad group(s); pause or down-prioritize zero-lead keywords (per the kill rules).
- **Only consider switching off Maximize Clicks** to **Maximize Conversions (optimizing `lead_captured`)** once a single conversion action reliably produces **~15+ `lead_captured` events in a trailing 30 days** [Google Ads Help — Maximize conversions, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29]. Target CPA waits for ~30/30-days [Google Ads Help — About Target CPA, https://support.google.com/google-ads/answer/6268632?hl=en, 2026-06-29]. **Target ROAS is structurally N/A** — there's no revenue in the free beta [Google Ads Help — About Target ROAS, https://support.google.com/google-ads/answer/6268637?hl=en, 2026-06-29].
- **Phase 2 only after the test reads:** add the Medium/Low ad groups from `KEYWORDS_AND_NEGATIVES.csv` (AG-Mock-Review, AG-Data-Insights, AG-Quant-Practice, AG-Verbal-Practice, AG-Data-Sufficiency, AG-Study-Plan-2mo, AG-Focus-Changes) — not during the $50 probe.
- **Broad match stays OFF** until 30-50+ conversions exist and Smart Bidding is running — only then test it as an experiment that must beat exact/phrase on cost-per-lead [Optmyzr, https://www.optmyzr.com/blog/optmyzr-study-broad-match-bidding/, 2026-06-29].

---

## One-page recap

- **Spend:** ~$50 probe (extends to ~$100), $7/day, 4-8 weeks, Maximize Clicks + $3.00 cap, Search only, Exact+Phrase, US/CA/UK/AU Presence.
- **4 ad groups:** AG-Error-Log-Template (/error-log-template), AG-Free-Practice (/gmat-practice-questions-free), AG-Study-Plan (/gmat-study-plan), AG-Prep-Platform (/gmat-private-beta) — keywords/bids/ads exactly as in `KEYWORDS_AND_NEGATIVES.csv` + `ADS.csv`.
- **Negatives:** apply the full campaign negative list (rows 84-143).
- **UTMs:** `utm_source=google&utm_medium=cpc&utm_campaign=zg-search-launch&utm_content={ad-group}&utm_term={keyword}`, via campaign tracking template; keep auto-tagging on; first-touch UTMs already merge into GA4 events.
- **Primary signal:** `lead_captured` (observation, not bidding). Import GA4 key events first.
- **Kill:** pause a keyword at ~2-3x target CPL ($10-15) with 0 leads; diagnose before pausing; don't churn edits.
- **Scale:** only when an ad group hits its CPL target AND loses >=10% IS to budget; raise budget 10-20% at a time; switch to Maximize Conversions only at ~15+ leads/30 days.

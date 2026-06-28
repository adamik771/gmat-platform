# Google Ads Research Summary — Zakarian GMAT (zakariangmat.com)

Synthesis of all research clusters (campaign-type, bidding-match, budget-test-metrics, benchmarks, policy-trademark, lp-qs-tracking) against the real state of this account: a brand-new Expert-Mode Google Ads account, one Search-only campaign (ZG-Search-Launch), EXACT+PHRASE match, Maximize Clicks with a max-CPC cap being raised $1.50 -> $3.00, $7/day budget, ~0 impressions and $0 spend after ~2 days, optimizing a free GMAT private beta where the cheapest/highest-volume conversion is `lead_captured` (error-log CSV download, no account needed).

All inline citations carry the access date 2026-06-29.

---

## 1. Executive summary

The plan that is already in place is correct, and the research confirms it rather than overturning it. The single most load-bearing finding is Google's own statement that a brand-new, zero-history campaign should start on **Maximize Clicks** to build traffic and conversion data first, and reach a baseline of roughly **15 conversions in the last 30 days before switching to Maximize Conversions** [Google Ads Help — About Maximize conversions bidding, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29]. Everything else flows from that account stage.

What this means concretely:

1. **Do not switch bidding strategy yet.** Keep Maximize Clicks with the max-CPC cap. Smart Bidding (Maximize Conversions / Target CPA / Target ROAS) needs conversion volume this $7/day account cannot produce soon — the learning period alone "can take up to around 50 conversion events or 3 conversion cycles" [Google Ads Help — Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29]. Target ROAS is structurally inapplicable — there is no revenue during the free beta.
2. **Keep EXACT + PHRASE; keep broad match OFF.** Google says it is "critical to use Smart Bidding with broad match" [Google Ads Help — Your guide to broad match, https://support.google.com/google-ads/answer/12159290, 2026-06-29], a condition this account cannot meet. Independent Optmyzr data found exact match beat broad on CPA in ~71% of accounts [Optmyzr, https://www.optmyzr.com/blog/optmyzr-study-broad-match-bidding/, 2026-06-29].
3. **The current problem is volume, not budget.** With ~0 impressions the account is volume-limited (tight keywords / low search volume), not budget-limited, so the fix is the in-progress ad-group expansion (AG-Free-Practice, AG-Study-Plan, AG-Prep-Platform), not more money [Bigflare, https://www.bigflare.com/blog/what-to-do-when-your-google-ads-campaign-is-limited-by-budget, 2026-06-29].
4. **Judge the test by cost and funnel, not statistical significance.** At ~2-4 clicks/day a conversion-rate A/B test is hopeless (you would need ~100-1,600 conversions per variant) [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29]. Read the raw funnel (impressions -> clicks -> `lead_captured`) directionally over 4-8 weeks; kill a keyword after it spends ~2-3x your target cost-per-lead with zero leads [Optmyzr, https://www.optmyzr.com/blog/google-ads-keywords-not-converting/, 2026-06-29].
5. **Bidding on "GMAT" as a keyword is policy-safe and legally low-risk.** The compliance risk lives in ad text, landing pages, and claims — false affiliation can suspend the account without warning [Google Ads Help — Unacceptable business practices, https://support.google.com/adspolicy/answer/15938071?hl=en, 2026-06-29].
6. **Finish the conversion wiring before meaningful spend.** Mark `lead_captured` as a key event in GA4, import it into Google Ads as the PRIMARY conversion, and verify with DebugView + Tag Assistant [Google Ads Help — Import GA conversions, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29].

Bottom line: the established plan should be **confirmed and executed**, with the immediate priority being volume (ad-group expansion + conversion import), not a bidding or match-type change.

---

## 2. Strongest evidence (the load-bearing findings)

These are the high-quality, official, directly-applicable findings the rest of the recommendation rests on.

- **Start new campaigns on Maximize Clicks; switch to Maximize Conversions only after ~15 conversions/30 days.** "For a brand-new campaign with no conversion history, Google explicitly recommends starting with Maximize Clicks to build traffic and conversion data first" [Google Ads Help — About Maximize conversions bidding, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29]. This single statement validates the entire current bidding setup.
- **Smart Bidding learning needs up to ~50 conversion events / 3 cycles, and edits reset it.** At $7/day this account would essentially never exit learning on a conversion strategy [Google Ads Help — Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29]. Practical corollary: batch changes and let the campaign sit ~7-14 days between structural edits.
- **Target CPA evaluation wants ~30 conversions/30 days.** Premature at ~0 conversions today [Google Ads Help — About Target CPA bidding, https://support.google.com/google-ads/answer/6268632?hl=en, 2026-06-29].
- **Exact > phrase > broad on efficiency, twice, at large scale.** ~70.8% of accounts saw exact beat broad on CPA [Optmyzr 2023, https://www.optmyzr.com/blog/optmyzr-study-broad-match-bidding/, 2026-06-29]; a ~1M-keyword 2024 study found exact had the highest ROAS (~415%) and CTR (~21.6%), broad the lowest [Optmyzr State of PPC, https://www.optmyzr.com/blog/optmyzr-state-of-ppc-study/, 2026-06-29].
- **Cost-based kill rule, not click-count.** Pause a keyword after it spends ~2-3x target cost-per-action with no conversion (4-5x for upper-funnel terms); the "100 clicks then pause" folk rule is explicitly rejected [Optmyzr, https://www.optmyzr.com/blog/google-ads-keywords-not-converting/, 2026-06-29].
- **Bidding on a trademark as a keyword is permitted; the restriction is on ad text.** "Google Ads does NOT restrict the use of trademarks as keywords" [Google Ads Advertising Policies Help — Trademarks, https://support.google.com/adspolicy/answer/6118?hl=en, 2026-06-29]. US courts agree keyword purchase alone is not infringement [Buchanan Ingersoll & Rooney, https://www.bipc.com/trademarks-and-keyword-advertising-courts-rule-no-infringement-in-buying-competitor-marks, 2026-06-29].
- **Quality Score = three engineerable components; higher quality buys lower CPC.** Expected CTR, ad relevance, landing page experience [Google Ads Help — About Quality Score, https://support.google.com/google-ads/answer/6167118?hl=en, 2026-06-29]; "you pay less per click when your ads are higher quality" [Google Ads Help — About Ad Rank, https://support.google.com/google-ads/answer/1722122?hl=en, 2026-06-29] — directly relevant to stretching $7/day after the cap rises to $3.00.

---

## 3. Official Google guidance (what Google itself says)

| Topic | Google's position | Source |
|---|---|---|
| Campaign type | PMax is a complement to working Search campaigns, not a replacement — build Search conversions first | [Multiply conversions with PMax, https://support.google.com/google-ads/answer/11189316?hl=en, 2026-06-29] |
| First bid strategy | Brand-new, no-history campaigns should consider Maximize Clicks to build data first | [About Maximize conversions, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29] |
| Goal->strategy mapping | Want traffic -> CPC bidding (Maximize Clicks/Manual); want direct actions WITH conversion tracking -> conversion strategies | [Determine a bid strategy, https://support.google.com/google-ads/answer/2472725?hl=en, 2026-06-29] |
| Bid cap option | Maximize Clicks lets you set a max-CPC cap; Manual CPC has no learning period and gives the most direct cost control | [About Maximize clicks, https://support.google.com/google-ads/answer/6268626?hl=en, 2026-06-29] |
| Match types | Exact = most control/least reach; phrase = balanced; broad = most reach and the default for new keywords | [About keyword matching options, https://support.google.com/google-ads/answer/7478529?hl=en, 2026-06-29] |
| Broad match | "Critical to use Smart Bidding with broad match" | [Your guide to broad match, https://support.google.com/google-ads/answer/12159290, 2026-06-29] |
| Budget | NO minimum budget; "start small," check daily after changes; daily spend can flex up to 2x average (monthly cap = daily x 30.4) | [About average daily budgets, https://support.google.com/google-ads/answer/2375454, 2026-06-29] |
| Learning period | Up to ~50 conversion events / 3 cycles; editing strategy/budget/keywords can reset it | [Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29] |
| Experiments | Significance measured at 95% via Jackknife; NO minimum sample/duration — thin tests read as inconclusive | [Statistical methodology behind experiments, https://support.google.com/google-ads/answer/9232676?hl=en, 2026-06-29] |
| Trademark keywords | Not restricted as keywords or in the second-level domain; restriction applies to ad text/RSAs | [Trademarks, https://support.google.com/adspolicy/answer/6118?hl=en, 2026-06-29] |
| Affiliation | Implying false affiliation/endorsement can suspend the account WITHOUT warning | [Unacceptable business practices, https://support.google.com/adspolicy/answer/15938071?hl=en, 2026-06-29] |
| Unrealistic claims | Prohibits results that are "improbable or cannot be guaranteed — even if technically possible but not typical" | [False, misleading, or unrealistic claims, https://support.google.com/adspolicy/answer/6086777?hl=en, 2026-06-29] |
| Guarantee/refund | Guaranteeing results requires an accessible money-back policy; 7-day warning before suspension | [Unreliable claims, https://support.google.com/adspolicy/answer/15936857?hl=en, 2026-06-29] |
| Quality Score | Three components; QS itself is a DIAGNOSTIC, not an auction input — the auction uses real-time quality | [About Quality Score, https://support.google.com/google-ads/answer/6167118?hl=en, 2026-06-29] |
| QS improvement | Action language for CTR; mirror search terms + split themed ad groups for relevance; consistent messaging + mobile speed for LP — exact phrase NOT required on the page | [5 ways to use Quality Score, https://support.google.com/google-ads/answer/6167130?hl=en, 2026-06-29] |
| Conversion import | Link Ads+GA4, auto-tagging on, mark event as key event, Marketer access, GCLID intact; up to 24h delay | [Import GA conversions, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29] |
| Primary vs secondary | Primary feed Smart Bidding + the Conversions column; secondary are observation-only (All conversions) | [Primary and secondary conversion actions, https://support.google.com/google-ads/answer/11461796?hl=en, 2026-06-29] |
| GMAC trademarks | GMAT/GMAC logos require permission/license + "used with permission" attribution; the plain word is not addressed | [GMAC — Copyrights, Trademarks and Logos, https://www.gmac.com/about-us/trademarks-and-copyrights, 2026-06-29] |

---

## 4. Expert / independent consensus (non-Google sources)

Where independent practitioners converge with — and usefully sharpen — Google's docs:

- **Tiered zero-to-scale progression** that matches this account's stage exactly: launch (0-30 days, 0-10 conv/mo) on Maximize Clicks + bid cap, exact+phrase; learning (30-90 days, 10-30 conv/mo) on Maximize Conversions (no target); optimization (90+ days, 30-50+ conv/mo) on Target CPA/ROAS; broad match only after 30-50 conversions per campaign [Modern Marketing Institute, https://www.modernmarketinginstitute.com/blog/how-to-build-a-profitable-google-ads-campaign-from-zero-a-2026-blueprint, 2026-06-29]. Adapt by substituting `lead_captured` as the optimization conversion.
- **Small budgets cannot afford broad match's learning phase** (can consume 30-50% of budget before stabilizing); keep tight control on low-volume accounts [PPC practitioner roundup, https://twominutereports.com/blog/google-ads-best-practices, 2026-06-29].
- **Optimize toward micro-conversions when macro volume is too low**, but keep them mostly observational so they don't distort CPA toward cheap-but-meaningless actions [Jellyfish, https://www.jellyfish.com/en-gb/training/blog/tactics-to-improve-smart-bidding-for-low-conversion-businesses, 2026-06-29]. `lead_captured` (no-account error-log download) is exactly this signal.
- **Scale signal is concrete:** raise budget only when an ad group hits its CPA goal AND "Search lost IS (budget)" is >=10%, then increase in 10-20% steps and wait a week/cycle [Bigflare, https://www.bigflare.com/blog/what-to-do-when-your-google-ads-campaign-is-limited-by-budget, 2026-06-29].
- **Test duration:** 2-4 weeks minimum to cover weekly cycles, 6-8 weeks more realistic before keyword-level conclusions; ending early "gives false results"; low budgets stretch the window [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29].
- **Click-volume floor:** ~10-20 clicks/day is the practical learning floor; at a $3.00 cap, $7/day buys only ~2-4 clicks/day, so keep effective CPCs low and concentrate budget on a few cheap, high-intent terms [NewFrame Digital, https://newframedigital.com/google-ads-budget-how-much-to-spend/, 2026-06-29].
- **Education vertical benchmarks (aspirational ceiling, not a starting point):** CTR 7.56%, CPC $4.81, CVR 13.14%, CPL $77.48 — medians from established accounts blending Google + Microsoft Ads [WordStream — 2026 Google Ads Benchmarks, https://www.wordstream.com/blog/2026-google-ads-benchmarks, 2026-06-29].
- **Nominative fair use** lets you name "GMAT" to describe prep-for-the-exam, provided you do not over-saturate or imply endorsement [Trademarkia, https://www.trademarkia.com/news/trademarks/google-ads-trademark-infringement, 2026-06-29].

---

## 5. Disagreements between sources (and how they resolve for this account)

1. **Minimum budget — "$7/day is invalid" vs "start small."** Agency sources cite $1,500-3,000/mo or $20-50+/day as a valid first test [Stackmatix, https://www.stackmatix.com/blog/google-ads-budget-planning-startups, 2026-06-29]; Google sets no minimum [About average daily budgets, https://support.google.com/google-ads/answer/2375454, 2026-06-29]. **Resolution:** both are right at different goals — Google means "you can technically run," agencies mean "you won't get statistically reliable conversion-rate data." For a free product optimizing a free micro-conversion, the agency thresholds (built for pay-per-acquisition businesses) only partially apply. Treat $7/day as a directional learning probe, not a verdict.

2. **Can you start Target CPA with no history?** Google's Target CPA page now says you can start with no conversion history; its own Maximize Conversions page recommends ~15 conversions/30 days first. **Resolution:** the "no history needed" framing is a recent marketing-leaning shift; community + independent consensus still says conversion bidding behaves erratically below ~15-30 conversions/30 days, especially on tiny budgets. Weight the cautious guidance here.

3. **Pro-broad-match push vs exact/phrase efficiency.** Google increasingly defaults to broad + Smart Bidding; Optmyzr and small-budget practitioners find exact/phrase more efficient. **Resolution:** less contradictory than it looks — Google's pro-broad case is explicitly conditioned on Smart Bidding fed by real conversion data, a condition this account does not meet. Defer broad match.

4. **Maximize Clicks "buys junk traffic" vs it's fine.** Some practitioners prefer Manual CPC because Maximize Clicks can chase cheap, low-quality inventory [Jyll.ca, https://learn.jyll.ca/blog/should-you-use-maximize-conversions-or-manual-cpc-bidding-in-google-ads, 2026-06-29]. **Resolution:** the main risk (Search Partners) is already neutralized — Search Partners and Display are OFF on this account. Maximize Clicks + cap is defensible; Manual CPC is the fallback if the $3.00 cap burns the budget in 2-3 clicks/day.

5. **Keyword kill rule — "100 clicks" vs cost multiple.** The folk "100 clicks, no conversion, pause" rule is rejected in favor of a 2-5x cost-vs-CPA multiple plus root-cause diagnosis [Optmyzr, https://www.optmyzr.com/blog/google-ads-keywords-not-converting/, 2026-06-29]. **Resolution:** use the cost-based rule.

6. **Benchmark corroboration is weaker than it looks.** WordStream and LocaliQ publish the SAME dataset under sister brands, so citing both is not true independent corroboration; education CPC has also swung ~$4.39 -> $6.23 -> $4.81 across three annual reports. **Resolution:** treat education CPC as a range (~$4-7), not a constant, and trace every figure to the primary WordStream/LocaliQ post with its date range — secondary republishers (PPC Chief, etc.) mislabel report years.

7. **Guarantee/refund policy applicability.** Google's Unreliable-claims money-back requirement is calibrated for paid products. **Resolution:** for a free beta the clean path is to make NO results guarantee at all rather than build a refund policy.

8. **Does the exact search phrase need to appear on the landing page?** Google says no (match intent, keep messaging consistent) [5 ways to use Quality Score, https://support.google.com/google-ads/answer/6167130?hl=en, 2026-06-29]; many agency "message match" posts imply the literal term must appear in the H1. **Resolution:** follow Google — echo the ad's promise and match intent per tightly-themed ad group, but do not keyword-stuff.

---

## 6. What APPLIES to this GMAT platform

- **Keep the current setup as-is:** Search-only, Search Partners + Display OFF, EXACT + PHRASE, Maximize Clicks + max-CPC cap. The research validates every one of these for a brand-new, ~0-conversion, $7/day account.
- **Fix volume first, not budget.** ~0 impressions = volume-limited. Execute the in-progress expansion into the higher-volume high-intent groups (AG-Free-Practice, AG-Study-Plan, AG-Prep-Platform) rather than raising the $7/day. **Do NOT scale budget** until an ad group both produces cheap leads AND shows Search lost IS (budget) >=10%, then go 10-20% at a time.
- **Watch the cap raise to $3.00.** It trades cost control for impression eligibility — reasonable at ~0 impressions, but at $3.00 the budget buys only ~2-4 clicks/day, so keep effective CPCs low and concentrate spend on a few cheap, high-intent terms to approach the ~10-20 clicks/day learning floor. If Maximize Clicks pushes CPCs to the cap with poor lead quality, test Manual CPC. **USER_ACTION_REQUIRED:** monitor average CPC and cost-per-`lead_captured` in the dashboard after the raise.
- **`lead_captured` is the right PRIMARY conversion** — highest volume, lowest friction (the no-account /error-log-template download). Keep `signup` and `founding_reserve` SECONDARY (observation/funnel diagnosis). **USER_ACTION_REQUIRED:** in GA4, mark `lead_captured` (and `signup`, `founding_reserve`) as key events, then import into Google Ads; confirm Vercel routing does not strip the GCLID.
- **Verify the pipe before spending.** Run GA4 DebugView on /error-log-template to confirm `lead_captured` fires with its `{source, lead_magnet}` + first-touch UTM parameters [Monitor events in DebugView, https://support.google.com/analytics/answer/7201382?hl=en, 2026-06-29], then run Google Ads Tag Assistant to confirm the imported action moves from Unverified toward "Recording"; "No recent conversions" is the expected healthy state at zero spend [Use Tag Assistant, https://support.google.com/google-ads/answer/10989978?hl=en, 2026-06-29]. **USER_ACTION_REQUIRED** (login).
- **Test design = directional funnel read over 4-8 weeks**, not a significance-driven A/B test. Pick a tolerable target cost-per-lead (e.g., $5-10); pause any keyword that spends ~2-3x that with zero `lead_captured` (4-5x for upper-funnel terms), diagnosing match-type/landing-page mismatch before cutting. Resist mid-test structural edits that reset learning.
- **Engineer Quality Score per ad group.** Keep one intent per group; echo the searcher's language in RSA headlines; ensure each landing page's H1 + above-the-fold copy restate the ad's promise (error-log keywords -> /error-log-template H1) with the lead-capture CTA near the top; confirm sub-3s mobile load via PageSpeed Insights [Optimize your ads and landing pages, https://support.google.com/google-ads/answer/6238826?hl=en, 2026-06-29; Think with Google/SOASTA, https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/find-out-how-you-stack-new-industry-benchmarks-mobile-page-speed/, 2026-06-29]. The site's 62 original chapters / original question bank satisfy "useful, original content."
- **Bid on "GMAT" / "GMAT Focus" without trademark concern** — keyword-level use is policy-safe and US-law low-risk. Concentrate compliance on ad text and landing pages.
- **Compliance hard lines for RSAs (in scope for trademark restriction):** use "GMAT" descriptively ("GMAT Focus prep," "free GMAT error log"); never use "official," "authorized," "partner," GMAC, mba.com, or the GMAT/GMAC logo; keep the non-affiliation disclaimer on every paid landing page (already present); frame 565->735 / 100th percentile strictly as the FOUNDER'S own result, never as a typical/expected outcome, and make no score/percentile/timeline guarantee.
- **Education benchmarks as a ceiling, read against your own trend first.** A new Google-Search-only account will likely see worse CPC/CTR than the medians initially; the free-download `lead_captured` should convert HIGHER and cheaper than the $77 CPL — if a high-intent group converts to the free download at under ~10-13%, suspect the page or keyword-intent match, not the benchmark.

---

## 7. What does NOT apply (and why)

- **Performance Max / Display / YouTube / Demand Gen first.** PMax is a complement to working Search, and these formats give low control and need conversion data this account lacks — they would waste a small budget [Multiply conversions with PMax, https://support.google.com/google-ads/answer/11189316?hl=en, 2026-06-29].
- **Target ROAS / value-based bidding.** No purchases and no conversion value during the free beta — structurally inapplicable regardless of volume [About Target ROAS bidding, https://support.google.com/google-ads/answer/6268637?hl=en, 2026-06-29].
- **Broad match (for now).** Its effectiveness is conditioned on Smart Bidding fed by conversion data; pairing it with Maximize Clicks would spray the tiny budget across loosely related queries [Your guide to broad match, https://support.google.com/google-ads/answer/12159290, 2026-06-29].
- **In-platform "switch to broad match" / "switch bidding" prompts.** They assume a Smart-Bidding, conversion-rich account — the opposite of this account's state. The Google-reported "broad match improved ~10%" figure has no public methodology and is directional marketing aimed at data-rich advertisers [About the broad match keywords campaign setting, https://support.google.com/google-ads/answer/13389795?hl=en, 2026-06-29]. Discount them.
- **Conversion-rate statistical-significance testing.** At ~2-4 clicks/day you would need ~100-1,600 conversions per variant; results will read "not statistically significant." Use experiments later, only for big swings [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29].
- **Smart Bidding's "account-level learning" promise as a shortcut.** It can help new campaigns, but this single-campaign brand-new account has no historical conversion pool to borrow from, so it must generate its own first ~15 `lead_captured` events on Maximize Clicks [About Smart Bidding, https://support.google.com/google-ads/answer/7065882?hl=en, 2026-06-29].
- **The $77 CPL as a target.** It is a sales-qualified lead for paying education businesses (tutoring, trade schools, universities) measured by mature accounts blending Google + Microsoft Ads; the free download should be far cheaper, and test-prep is a small, competitive sliver of the broad category [WordStream — 2026 Google Ads Benchmarks, https://www.wordstream.com/blog/2026-google-ads-benchmarks, 2026-06-29]. Measure your OWN cost-per-event by ad group.
- **Test-prep-specific CPC/CPL blog figures** ("test prep $40-100 CPL," "SAT/ACT $10+ CPC") — undated, no methodology, no sample size; rough hypotheses only, not benchmarks [blog aggregation, https://www.blogbuster.so/cpc-by-industry/Tutoring-Services-seo-blog-tool, 2026-06-29].
- **A money-back / refund policy.** Required only if you guarantee results on a paid product; with a free beta the correct move is to make no guarantee at all [Unreliable claims, https://support.google.com/adspolicy/answer/15936857?hl=en, 2026-06-29].
- **GMAC's "used with permission" attribution and any logo use.** Those require a license this account does not hold; use only the plain-text word "GMAT" plus the existing non-affiliation disclaimer [GMAC — Copyrights, Trademarks and Logos, https://www.gmac.com/about-us/trademarks-and-copyrights, 2026-06-29].
- **A special education-category certification.** There is no test-prep category gate in Google Ads policy; the constraints are the general honesty/affiliation policies already covered [Google Ads policies index, https://support.google.com/adspolicy/answer/6008942?hl=en, 2026-06-29].
- **Treating WordStream and LocaliQ as two independent sources.** Same dataset, sister brands — cite one [LocaliQ, https://localiq.com/blog/search-advertising-benchmarks/, 2026-06-29].

---

*This summary synthesizes the project's web research only; it introduces no new citations. All figures and policy statements are traceable to the sources cited inline, accessed 2026-06-29.*

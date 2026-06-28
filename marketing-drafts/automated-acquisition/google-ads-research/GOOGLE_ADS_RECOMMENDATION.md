# Google Ads Recommendation — Zakarian GMAT

Decision-support for the ZG-Search-Launch campaign (free private beta, https://www.zakariangmat.com). Research and configuration guidance only; the owner executes all dashboard changes. Items needing the Google Ads / GA4 / Vercel login are marked USER_ACTION_REQUIRED.

This document confirms the established plan and corrects it only where the research demands. It does. The single material correction is on budget concentration: do not spread $7/day across four ad groups — concentrate it on the two highest-intent groups (see Budget and What To Change Now).

---

## The recommendation in one screen

| Setting | Start with | One-line WHY (cited) |
|---|---|---|
| Campaign type | Search only (Search Network only; Search Partners OFF, Display OFF) | Google positions PMax as a complement on top of working Search, not a first move [Google Ads Help — Multiply conversions with Performance Max, https://support.google.com/google-ads/answer/11189316?hl=en, 2026-06-29]. |
| Budget | $7/day (~$213/mo), concentrated on 2 ad groups | Google sets no minimum and endorses "start small," but at a $3 cap $7/day buys only ~2-4 clicks/day, so spreading it starves every group [Google Ads Help — About average daily budgets, https://support.google.com/google-ads/answer/2375454, 2026-06-29; NewFrame Digital, https://newframedigital.com/google-ads-budget-how-much-to-spend/, 2026-06-29]. |
| Bidding | Maximize Clicks with a max-CPC cap (~$3.00) | Google explicitly tells brand-new, zero-conversion campaigns to use Maximize Clicks to build data first [Google Ads Help — About Maximize conversions bidding, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29]. |
| Match types | EXACT + PHRASE only | Independent data found exact beat broad on CPA in ~71% of accounts; control beats reach on a tiny budget [Optmyzr, https://www.optmyzr.com/blog/optmyzr-study-broad-match-bidding/, 2026-06-29]. |
| Locations | US, Canada, UK, Australia — Presence | Matches the established plan; English-language graduate-prep demand concentrates in these four markets (plan baseline, no contradicting evidence). |
| Language | English | Matches the established plan; the product and all landing pages are English-only. |
| Devices | All devices | Google says quality is judged on intent + device in real time, not by pre-excluding devices; keep all on at the learning stage [Google Ads Help — What matters for ads quality, https://support.google.com/google-ads/answer/6167132?hl=en, 2026-06-29]. |
| Ad schedule | All hours, all days | Pausing dayparts pre-emptively removes auctions before any data exists; learning needs the full week [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29]. |
| Primary conversion | lead_captured | It is the cheapest, highest-volume, lowest-friction signal (error-log download, no account) and the right primary action [Jellyfish, https://www.jellyfish.com/en-gb/training/blog/tactics-to-improve-smart-bidding-for-low-conversion-businesses, 2026-06-29]. |
| Secondary conversions | signup, founding_reserve (observation only) | Secondary actions report in "All conversions" and don't drive bidding — correct for funnel diagnosis [Google Ads Help — About primary and secondary conversion actions, https://support.google.com/google-ads/answer/11461796?hl=en, 2026-06-29]. |

---

## 1. Campaign type — START: Search only

Run the one Search campaign you already have (ZG-Search-Launch). Keep Search Partners OFF and Display Network OFF.

- WHY: Google itself frames Performance Max as something you "multiply conversions" with on top of working Search campaigns, i.e. an add-on once Search is producing conversions — not the first campaign for a zero-data advertiser [Google Ads Help — Multiply conversions with Performance Max, https://support.google.com/google-ads/answer/11189316?hl=en, 2026-06-29].
- WHY (partners off): Maximize Clicks can push spend toward cheap, low-quality Search Partners inventory; you already have it off, which neutralizes the main critique of Maximize Clicks [Jyll.ca, https://learn.jyll.ca/blog/should-you-use-maximize-conversions-or-manual-cpc-bidding-in-google-ads, 2026-06-29].

## 2. Budget — START: $7/day, concentrated on AG-Error-Log-Template + AG-Free-Practice

Keep the $7/day budget. Do NOT divide it evenly across four ad groups. Concentrate impressions on the two highest-intent, lowest-friction groups first; add AG-Study-Plan and AG-Prep-Platform only once the first two are reliably serving.

- WHY (keep $7/day): Google's own budget page sets no minimum, explicitly endorses "start small," and notes daily spend can flex up to 2x average on a given day, so a single ~$14 day is documented overdelivery, not an error; plan monthly spend at ~$213 (7 x 30.4) [Google Ads Help — About average daily budgets, https://support.google.com/google-ads/answer/2375454, 2026-06-29].
- WHY (concentrate, not spread): At a $3.00 cap, $7/day buys only ~2-4 clicks/day — below the ~10-20 clicks/day practitioners cite as the data-collection floor — so splitting it four ways guarantees every group stays starved and unreadable [NewFrame Digital, https://newframedigital.com/google-ads-budget-how-much-to-spend/, 2026-06-29]. Concentrating budget into 1-2 highest-intent groups is the documented fix for low-volume conversion accounts [Google Ads Help — About Smart Bidding, https://support.google.com/google-ads/answer/7065882?hl=en, 2026-06-29].
- WHY (realistic expectation): A ~$200/mo budget is below the $1,500-3,000/mo most practitioners call a "valid" first test, so treat this as a slow directional learning probe over 6-8 weeks, not a fast or statistically significant verdict [Stackmatix, https://www.stackmatix.com/blog/google-ads-budget-planning-startups, 2026-06-29].

## 3. Bidding strategy — START: Maximize Clicks with a max-CPC cap (~$3.00)

- WHY: For a brand-new campaign with no conversion history, Google explicitly recommends starting on Maximize Clicks to build traffic and conversion data first, and wants a baseline of ~15 conversions in the prior 30 days before switching to Maximize Conversions [Google Ads Help — About Maximize conversions bidding, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29].
- WHY (cap watch): Raising the cap from $1.50 to $3.00 trades cost control for impression eligibility — reasonable given ~0 impressions, but at $3.00 a few clicks can exhaust $7 in a day, so monitor average CPC after the change [Google Ads Help — About Maximize clicks bidding, https://support.google.com/google-ads/answer/6268626?hl=en, 2026-06-29].
- FALLBACK: If Maximize Clicks pushes CPCs to the cap with poor lead quality, test Manual CPC for tighter per-keyword control — it has no learning period [Google Ads Help — Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29].
- GRADUATION GATE: Switch to Maximize Conversions (optimizing lead_captured) ONLY after ~15 lead_captured events accumulate in a trailing 30 days; consider Target CPA only after ~30/30 days. Expect ~2 weeks of volatility on switch and avoid further edits during that window [Google Ads Help — About Target CPA bidding, https://support.google.com/google-ads/answer/6268632?hl=en, 2026-06-29; Google Ads Help — Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29].

## 4. Match types — START: EXACT + PHRASE only (already configured)

- WHY: Exact match gives the most control and fewest wasted searches; on a budget with no conversion data to steer bidding, control beats reach [Google Ads Help — About keyword matching options, https://support.google.com/google-ads/answer/7478529?hl=en, 2026-06-29].
- WHY (evidence): A 2,637-account Optmyzr study found exact match beat broad on CPA in ~70.8% and on ROAS in ~72.5% of accounts; broad won outright in only ~27% [Optmyzr, https://www.optmyzr.com/blog/optmyzr-study-broad-match-bidding/, 2026-06-29]. A later ~1M-keyword Optmyzr cut still shows exact > phrase > broad on efficiency [Optmyzr State of PPC, https://www.optmyzr.com/blog/optmyzr-state-of-ppc-study/, 2026-06-29].
- CAUTION: Broad is the default when adding new keywords — explicitly set every new keyword to exact or phrase so Google's UI doesn't silently leave it on broad [Google Ads Help — About keyword matching options, https://support.google.com/google-ads/answer/7478529?hl=en, 2026-06-29].

## 5. Locations — START: US, Canada, UK, Australia (Presence, not Presence-or-interest)

- WHY: These four English-speaking markets are the established plan's target; "Presence" (people physically in the location) avoids paying for "interested in" searches from outside your serviceable markets. No research finding contradicts this; it is the plan baseline.

## 6. Language — START: English

- WHY: The product, every landing page, and the question bank are English-only; matching the language setting to the audience prevents wasted impressions. Plan baseline; no contradicting evidence.

## 7. Devices — START: All devices

- WHY: Google judges ad quality on real-time intent and device signals rather than rewarding pre-emptive device exclusions; with zero data there is no basis to exclude a device yet [Google Ads Help — What matters for ads quality, https://support.google.com/google-ads/answer/6167132?hl=en, 2026-06-29]. Mobile load speed matters for the landing-page experience component, so keep ad pages sub-3s on mobile rather than excluding mobile [Think with Google / SOASTA, https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/find-out-how-you-stack-new-industry-benchmarks-mobile-page-speed/, 2026-06-29].

## 8. Ad schedule — START: All hours, all days

- WHY: Practitioner consensus is to run at least 2-4 weeks covering full weekly cycles before drawing conclusions; cutting dayparts before data exists removes auctions and lengthens the already-slow learning at $7/day [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29].

## 9. Landing pages — START: /error-log-template first, then the volume drivers

- Primary (AG-Error-Log-Template): /error-log-template — free error-log CSV, no account needed. WHY: highest intent at the lowest friction; a free download should convert well above the ~13% education benchmark, so under ~10-13% signals a page/intent-match problem, not a benchmark ceiling [LocaliQ, https://localiq.com/blog/search-advertising-benchmarks/, 2026-06-29].
- AG-Free-Practice: /gmat-practice-questions-free. AG-Study-Plan: /gmat-study-plan. AG-Prep-Platform: /gmat-private-beta.
- WHY (message match): Keep keyword -> RSA headline -> landing-page H1 consistent and one offer/one CTA per page; Google's official guidance is that the landing page must "closely match your ad and keywords" (the exact search phrase need NOT appear on the page — match intent, don't keyword-stuff) [Google Ads Help — 5 ways to use Quality Score, https://support.google.com/google-ads/answer/6167130?hl=en, 2026-06-29; Google Ads Help — Optimize your ads and landing pages, https://support.google.com/google-ads/answer/6238826?hl=en, 2026-06-29].
- WHY (Ad Rank / CPC): Higher real-time landing-page experience and ad relevance clear Ad Rank thresholds AND lower actual CPC, which both fixes the ~0-impression problem and stretches $7/day — more valuable than the cap raise alone [Google Ads Help — About Ad Rank, https://support.google.com/google-ads/answer/1722122?hl=en, 2026-06-29].
- COMPLIANCE: Every paid landing page must keep the GMAC non-affiliation disclaimer and the canonical tag, use "GMAT" only descriptively, and never imply "official"/affiliation; false-affiliation copy can suspend the account without warning [Google Ads Help — Unacceptable business practices, https://support.google.com/google-ads/answer/15938071?hl=en, 2026-06-29].

## 10. Conversion goals — Primary + Secondary

- PRIMARY: lead_captured. WHY: it is the highest-volume, cheapest, lowest-friction event (error-log download needs no account) — the right primary action to observe now and to optimize toward later; keep it primary but be aware optimizing purely to a free download can buy low-quality leads [Jellyfish, https://www.jellyfish.com/en-gb/training/blog/tactics-to-improve-smart-bidding-for-low-conversion-businesses, 2026-06-29].
- SECONDARY (observation only): signup, founding_reserve. WHY: secondary actions report in "All conversions" and don't drive bidding, which is exactly right for funnel diagnosis while on Maximize Clicks [Google Ads Help — About primary and secondary conversion actions, https://support.google.com/google-ads/answer/11461796?hl=en, 2026-06-29].
- USER_ACTION_REQUIRED: In GA4 mark lead_captured (and signup, founding_reserve) as key events, then import them into Google Ads (GA4 is already linked; auto-tagging on; Marketer access needed). Imported conversions can take up to 24h to appear, so they cannot drive fast learning at this budget [Google Ads Help — Import Google Analytics conversions, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29].
- USER_ACTION_REQUIRED: Before meaningful spend, verify lead_captured fires with its {source, lead_magnet} and first-touch UTM params via GA4 DebugView, and confirm the imported conversion action via Tag Assistter ("No recent conversions" is the healthy pre-click state) [Google Analytics Help — Monitor events in DebugView, https://support.google.com/analytics/answer/7201382?hl=en, 2026-06-29; Google Ads Help — Use Tag Assistant, https://support.google.com/google-ads/answer/10989978?hl=en, 2026-06-29].

---

## What NOT to run yet

| Do NOT run | One-line WHY (cited) |
|---|---|
| Performance Max | Google frames PMax as a complement layered on top of working Search, and it needs conversion data + control you don't have yet [Google Ads Help — Multiply conversions with Performance Max, https://support.google.com/google-ads/answer/11189316?hl=en, 2026-06-29]. |
| Display Network | Display is upper-funnel, low-intent, and would spray a $7/day budget across cheap impressions instead of high-intent searchers; keep it OFF on the Search campaign [Google Ads Help — About keyword matching options (control vs reach), https://support.google.com/google-ads/answer/7478529?hl=en, 2026-06-29]. |
| YouTube / video | Video is awareness-stage with no search intent; there is no conversion data to optimize it and it would consume the entire learning budget — defer until Search produces conversions [Google Ads Help — About Smart Bidding (volume floor), https://support.google.com/google-ads/answer/7065882?hl=en, 2026-06-29]. |
| Demand Gen | Demand Gen is a Smart-Bidding, conversion-data-hungry social/discovery format; a zero-history account can't feed it, so it would learn from scratch and waste budget [Google Ads Help — Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29]. |
| Broad match | Google says it's "critical to use Smart Bidding with broad match" — a condition this no-conversion account can't meet — and broad would spray the tiny budget across loosely related queries [Google Ads Help — Your guide to broad match, https://support.google.com/google-ads/answer/12159290, 2026-06-29]. Defer until ~30-50 conversions accumulate, then test it only to prove it beats exact on cost-per-lead. |
| Smart Bidding now (Max Conversions / tCPA / tROAS) | Calibration can take up to ~50 conversion events; $7/day won't produce the ~15-50/month these need, so the budget would be spent perpetually "learning." tROAS is structurally inapplicable — no purchase value during the free beta [Google Ads Help — Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29; Google Ads Help — About Target ROAS bidding, https://support.google.com/google-ads/answer/6268637?hl=en, 2026-06-29]. |

---

## Operating rules (kill / keep / scale / duration)

- KILL (cost-based, not click-based): Set a tolerable target cost-per-lead (e.g. ~$5-10 / lead_captured). Pause a keyword once it spends ~2-3x that target with zero lead_captured (stretch to 4-5x for broad upper-funnel terms); diagnose match-type / landing-page mismatch BEFORE pausing, since the keyword may be assisting. Reject the folk "100 clicks then pause" rule [Optmyzr — Keywords Not Converting, https://www.optmyzr.com/blog/google-ads-keywords-not-converting/, 2026-06-29].
- KEEP: Keep any keyword producing leads at/under target.
- DO NOT SCALE YET: The account is volume-limited (too-tight keywords / low search volume), NOT budget-limited. Only raise the $7/day once an ad group both produces cheap leads AND shows "Search lost IS (budget)" >=10%, then increase in 10-20% steps and wait a week before re-evaluating [Bigflare, https://www.bigflare.com/blog/what-to-do-when-your-google-ads-campaign-is-limited-by-budget, 2026-06-29].
- DURATION: Commit to at least 4 weeks (target 6-8) before declaring keyword winners/losers; cover at least one full week-over-week cycle. Don't pause on day 2-3 of zero impressions — first confirm the keyword is actually serving [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29].
- DON'T CHASE SIGNIFICANCE: Detecting a conversion-rate difference needs ~100-1,600 conversions per variant; at $7/day that's impossible, so read the raw funnel (impressions -> clicks -> lead_captured) directionally, not as a significance verdict [Growth Spree, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29].
- DON'T EDIT CONSTANTLY: Keyword/budget/bid changes can reset learning — batch changes and let the campaign sit ~7-14 days between structural edits [Google Ads Help — Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29].

## Benchmarks (context, not targets)

- Education & Instruction medians (WordStream/LocaliQ 2026, 13,474 US campaigns, Apr 2025-Mar 2026): CTR 7.56%, CPC $4.81, CVR 13.14%, CPL $77.48 — these are MEDIANS of mature accounts blending Google + Microsoft Ads, so a brand-new Google-Search-only $7/day account will start WORSE [WordStream, https://www.wordstream.com/blog/2026-google-ads-benchmarks, 2026-05-19].
- Do NOT internalize a ~$77 CPL target: that figure is a sales-qualified lead for a paying business. A free CSV download (lead_captured) should cost far less; a signup/founding_reserve could sit at or above it. Measure your OWN cost-per-event by ad group [WordStream, https://www.wordstream.com/blog/2026-google-ads-benchmarks, 2026-05-19].
- Treat education CPC as a RANGE (~$4-7), not a constant — it has swung $4.39 -> $6.23 -> $4.81 across three annual reports [WordStream 2025 vs 2026 reports, https://www.wordstream.com/blog/2025-google-ads-benchmarks, 2025-05-18].
- Note: WordStream and LocaliQ are the SAME dataset under sister brands — citing both is not independent corroboration [LocaliQ, https://localiq.com/blog/search-advertising-benchmarks/, 2026-06-29].

## What to change now (this session)

1. Expand into AG-Free-Practice (and keep AG-Error-Log-Template), pointing each at its matched landing page — but CONCENTRATE the $7/day on these two highest-intent groups first; stage AG-Study-Plan and AG-Prep-Platform in second once the first two serve. (Corrects the "spread across four groups" approach.)
2. Confirm the $3.00 max-CPC cap is applied, then monitor average CPC daily for the first week so a couple of clicks don't burn the whole day's budget. USER_ACTION_REQUIRED (dashboard).
3. Verify every new keyword is set to EXACT or PHRASE (not the broad default). USER_ACTION_REQUIRED (dashboard).
4. Finish conversion wiring before spend ramps: mark lead_captured / signup / founding_reserve as GA4 key events, import to Google Ads, set lead_captured PRIMARY and the other two SECONDARY, and verify in DebugView + Tag Assistant. USER_ACTION_REQUIRED (GA4 + Ads).
5. Re-read keyword/ad inputs against the existing ADS.csv and KEYWORDS_AND_NEGATIVES.csv in this folder before launch; keep all RSA copy descriptive and claim-clean (no "official"/affiliation, no score/percentile promise; the only allowed claim is the founder's own 565 -> 735 result).

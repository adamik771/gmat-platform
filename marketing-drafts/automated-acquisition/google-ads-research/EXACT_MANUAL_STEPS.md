# EXACT_MANUAL_STEPS — Google Ads, Zakarian GMAT (verify + expand the existing Search campaign)

Click-by-click steps Adam does himself in the Google Ads UI. This is **not** a from-zero build: campaign `ZG-Search-Launch` and ad group `AG-Error-Log-Template` already exist (approved, ~0 impressions, $0 spend after ~2 days). The job is to **verify** the existing settings are correct, **expand** with the higher-volume high-intent ad groups, wire conversions, and **launch only after a final review checklist**.

Everything that needs Adam's logged-in account, billing, or a dashboard action is marked **USER_ACTION_REQUIRED**. I cannot do any of these for you — they all require your Google login.

Source basis for the choices below:
- Maximize Clicks (with CPC cap) is the correct strategy for a brand-new, ~0-conversion campaign; switch to conversion bidding only after ~15 conversions/30 days [Google Ads Help — About Maximize conversions bidding, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29].
- Start EXACT + PHRASE, keep broad match OFF until there is conversion data [Google Ads Help — About keyword matching options, https://support.google.com/google-ads/answer/7478529?hl=en, 2026-06-29].
- Bidding on the word "GMAT" as a keyword is policy-safe; the risk lives in ad text, not the keyword list [Google Ads Advertising Policies — Trademarks, https://support.google.com/adspolicy/answer/6118?hl=en, 2026-06-29].
- Average daily budget can overdeliver up to 2× on a given day; monthly = daily × 30.4 [Google Ads Help — About average daily budgets, https://support.google.com/google-ads/answer/2375454, 2026-06-29].
- To import GA4 events as conversions: accounts linked + auto-tagging on + event marked a key event in GA4 [Google Ads Help — Import Google Analytics conversions, https://support.google.com/google-ads/answer/2375435?hl=en, 2026-06-29].

Companion files in this folder — keep them open while you work:
- `KEYWORDS_AND_NEGATIVES.csv` — every keyword (with match type), every campaign negative.
- `ADS.csv` — the responsive search ad (RSA) headlines/descriptions/paths per ad group, already character-validated and compliance-noted.

---

## 0. Before you touch anything — guardrails

1. **Keep the campaign PAUSED (or keep new ad groups paused) the entire time you build.** Do not let anything serve until you finish the Section 9 launch checklist. New ad groups you create are paused by default in many flows — leave them paused regardless.
2. **Never accept Google's auto-apply "recommendations."** They will try to: switch you to broad match, switch you to Maximize Conversions / Target CPA, add Search Partners / Display, or raise your budget. All four are wrong for a $7/day, ~0-conversion account. Decline them.
3. **Do not write "official", "authorized", "partner", "GMAC", or "mba.com" into any headline, description, or display path.** False-affiliation copy can suspend the whole account with no warning [Google Ads Advertising Policies — Unacceptable business practices, https://support.google.com/adspolicy/answer/15938071?hl=en, 2026-06-29]. The pre-validated copy in `ADS.csv` already avoids this — type it exactly, don't improvise.
4. **Make no score/percentile/outcome promise.** The only allowed performance line is the founder's own "565→735 / built by a 735 scorer," framed as HIS result. `ADS.csv` already does this.

---

## 1. Log in and confirm you're in the right account — USER_ACTION_REQUIRED

1. Go to **https://ads.google.com** and sign in with the account that owns the "Zakarian GMAT" Google Ads account. **USER_ACTION_REQUIRED** (your login).
2. Top right, confirm the **account name / 10-digit Customer ID** is the Zakarian GMAT Expert Mode account (not a different account if you manage several).
3. Confirm you are in **Expert Mode**, not "Smart" mode. If the left nav shows the full menu (Campaigns, Keywords, Audiences, Tools), you're in Expert Mode. If you see a simplified "Smart campaign" view, switch via the gear/Tools menu to Expert Mode. **USER_ACTION_REQUIRED.**
4. Confirm **Billing** is set up (Tools → Billing → Summary). Nothing serves without a valid payment method. The free beta is the *product*; the *ad clicks* still cost real money you are billed for. **USER_ACTION_REQUIRED** (payment).

---

## 2. Verify the existing campaign settings (ZG-Search-Launch)

Left nav → **Campaigns**. Click **ZG-Search-Launch**, then left nav → **Settings**. Verify each line; fix any that drifted:

| Setting | Must be | Where |
|---|---|---|
| Campaign type | Search | (shown at top; can't be edited after creation — if it's not Search, see Section 2a) |
| Networks → Search Network | ON | Settings → Networks |
| Networks → **Search partners** | **OFF** (unchecked) | Settings → Networks |
| Networks → **Display Network** | **OFF** (unchecked) | Settings → Networks |
| Locations | United States, Canada, United Kingdom, Australia | Settings → Locations |
| Location options → Target | **"Presence: People in your targeted locations"** (NOT "Presence or interest") | Settings → Locations → Location options |
| Languages | English | Settings → Languages |
| Budget | $7.00 / day | Settings → Budget (see Section 5) |
| Bidding | Maximize clicks, with a Maximum CPC bid limit = $3.00 | Settings → Bidding (see Section 4) |
| Ad rotation | "Optimize: Prefer best performing ads" (default is fine) | Settings → additional settings → Ad rotation |
| Start/End date | Start today; no end date | Settings → additional settings |
| Campaign URL options / tracking | Leave default; auto-tagging is set at account level (Section 7) | — |

Click **Save** after any change.

**2a. If the existing campaign is somehow NOT Search-only / not fixable** (e.g. it's a Smart or Performance Max campaign): campaign *type* cannot be changed after creation. In that case create a fresh **Search** campaign and reuse the same name with a suffix (e.g. `ZG-Search-Launch-2`), then pause/abandon the wrong one. Use Section 3's settings. This is the only "create from zero" branch — only do it if Section 2 verification shows the type is wrong.

---

## 3. (Only if you had to create a new campaign in 2a) — create the Search campaign correctly

Skip this whole section if Section 2 verified fine.

1. **Campaigns → blue "+" → New campaign.**
2. **Objective:** choose **"Create a campaign without a goal's guidance"** (so Google doesn't push PMax/Display defaults). **USER_ACTION_REQUIRED.**
3. **Campaign type: Search.** Click Continue.
4. **Uncheck** "Website visits"/"Phone calls"/"App downloads" goal prompts if shown; you don't need a conversion goal selected to run on Maximize clicks. (You'll attach conversions in Section 7.)
5. Name: `ZG-Search-Launch-2`.
6. **Networks:** UNcheck "Include Google search partners" and UNcheck "Include the Google Display Network."
7. **Locations:** Enter and add **United States, Canada, United Kingdom, Australia**. Open **Location options** → choose **"Presence: People in your targeted locations."**
8. **Languages:** English.
9. **Audience segments:** skip (don't add any).
10. **Budget:** $7.00 (Section 5).
11. **Bidding:** Section 4.
12. **Save and continue** — but **do not publish/enable yet**; you'll build ad groups, then keep paused until Section 9.

---

## 4. Verify / set the bid strategy — Maximize Clicks + $3.00 max-CPC cap

In **Settings → Bidding**:

1. "What do you want to focus on?" → **Clicks**.
2. Select **Maximize clicks**.
3. Check **"Set a maximum cost-per-click bid limit."**
4. Enter **$3.00** in the Max CPC bid limit field.
5. Save.

Notes:
- You are raising the cap from $1.50 → $3.00 to fix the ~0-impressions problem (too tight to clear auctions). This trades cost control for eligibility — watch average CPC after launch; if $7 disappears in 2-3 clicks/day on the cheapest terms, lower the cap toward $2.00. [Google Ads Help — About Maximize clicks bidding, https://support.google.com/google-ads/answer/6268626?hl=en, 2026-06-29]
- **Do NOT switch to Maximize Conversions / Target CPA / Target ROAS now.** Those need ~15-50 conversions/30 days, which $7/day will not produce for weeks [Google Ads Help — About Target CPA bidding, https://support.google.com/google-ads/answer/6268632?hl=en, 2026-06-29]. The switch trigger is in Section 10.

---

## 5. Verify / set the budget — $7.00/day

In **Settings → Budget**:

1. Enter **$7.00** as the average daily budget.
2. Save.

What to expect: some days spend up to ~**$14** (documented 2× overdelivery) and some days less; the **monthly** cap is ~$7 × 30.4 = **~$213** — Google will not bill more than that in a month [Google Ads Help — About average daily budgets, https://support.google.com/google-ads/answer/2375454, 2026-06-29]. A single ~$14 day is not a billing error.

**One shared $7/day budget covers the whole campaign.** With several ad groups live, $7 is thin — that's intentional for a learning probe. If you'd rather get a cleaner read faster, you can launch only the 4 "first $50 test" ad groups (Section 6) and add the rest later.

---

## 6. Build the ad groups (verify the one that exists; add the expansion ones)

The full 11-ad-group package is in `KEYWORDS_AND_NEGATIVES.csv` and `ADS.csv`. Build order below puts the **High-priority "first $50 test"** groups first.

**6.0 — Verify the existing ad group.** Open **Ad groups → AG-Error-Log-Template.** Confirm its keywords match rows 10-17 of `KEYWORDS_AND_NEGATIVES.csv` and its RSA matches row 3 of `ADS.csv`. If it's missing keywords or the RSA, fix it using the per-ad-group steps below.

**Build / verify these FOUR first (priority High — "first $50 test"):**
- `AG-Error-Log-Template` → `/error-log-template` (already exists; verify)
- `AG-Free-Practice` → `/gmat-practice-questions-free`
- `AG-Study-Plan` → `/gmat-study-plan`
- `AG-Prep-Platform` → `/gmat-private-beta`

**Then add the rest (priority Medium/Low) once the first four are serving:**
- `AG-Quant-Practice`, `AG-Data-Insights`, `AG-Verbal-Practice`, `AG-Data-Sufficiency`, `AG-Mock-Review`, `AG-Study-Plan-2mo`, then last `AG-Focus-Changes` (informational, lowest bids).

### Per-ad-group procedure (repeat for each)

1. **Campaigns → ZG-Search-Launch → Ad groups → blue "+" → New ad group.**
2. **Ad group type:** Standard.
3. **Name:** type the exact ad-group name from the CSV (e.g. `AG-Free-Practice`).
4. **Default bid:** if asked for an ad-group default bid, you can leave it at the `starting_bid_or_bid_cap` value shown in the CSV for that group's exact-match row (e.g. AG-Free-Practice ≈ $2.40). On Maximize Clicks the campaign cap ($3.00) governs, so this is just a hint — don't overthink it.
5. **Add keywords with the correct syntax** (this is the part Google gets wrong by default — it defaults new keywords to BROAD):
   - **Exact match:** wrap in **square brackets** → `[free gmat practice questions]`
   - **Phrase match:** wrap in **double quotes** → `"gmat practice questions free"`
   - **Plain text with no brackets/quotes = BROAD. Never paste plain text.**
   - Paste only the keywords for THIS ad group. Example for `AG-Free-Practice` (from `KEYWORDS_AND_NEGATIVES.csv` rows 68-75):
     ```
     [free gmat practice questions]
     "gmat practice questions free"
     "free gmat questions"
     "gmat focus practice questions free"
     "free gmat practice"
     [gmat practice questions]
     "free gmat question bank"
     "gmat focus practice questions"
     ```
   - For each remaining ad group, copy that group's rows from the CSV, applying `[...]` for rows marked `Exact` and `"..."` for rows marked `Phrase`.
6. **Verify the match type stuck:** after adding, each keyword row shows a "Match type" column — confirm it reads **Exact** or **Phrase**, never "Broad." If any show Broad, delete and re-add with the bracket/quote syntax.
7. Save the ad group, then add its RSA (Section 8). Then move to the next ad group.

(You can also add keywords later via **Keywords → "+" → select the ad group → paste**. Same bracket/quote rules.)

---

## 7. Conversions — verify GA4 link and import the events (do this BEFORE meaningful spend)

GA4 is already live and linked, and `lead_captured` is confirmed firing. This section makes Google Ads actually *record* those events as conversions.

**7a. In GA4 — mark events as key events. USER_ACTION_REQUIRED.**
1. Open **Google Analytics → Admin (gear) → (Property column) Events** (or "Key events"). **USER_ACTION_REQUIRED** (GA login).
2. Find **`lead_captured`** → toggle **"Mark as key event"** ON.
3. Do the same for **`signup`** and **`founding_reserve`**.
   [Google Analytics Help — DebugView / key events, https://support.google.com/analytics/answer/7201382?hl=en, 2026-06-29]

**7b. In Google Ads — confirm the GA4 link + auto-tagging. USER_ACTION_REQUIRED.**
1. **Tools → Data manager** (or **Tools → Linked accounts → Google Analytics (GA4)**). Confirm the "Zakarian GMAT" GA4 property is **Linked**. (Per the session notes it already is.)
2. **Tools → … account settings → Auto-tagging** must be **ON** (required so the GCLID attaches to clicks).

**7c. In Google Ads — import the GA4 conversions. USER_ACTION_REQUIRED.**
1. **Tools → Conversions → "+ New conversion action" → Import → Google Analytics 4 properties → (Web).**
2. Tick **`lead_captured`**, **`signup`**, **`founding_reserve`** → **Import and continue.**
3. After import, open **`lead_captured`** → set it as **Primary** (Goal: "Sign-up" or a custom Leads goal). Set **`signup`** and **`founding_reserve`** to **Secondary** (observation only).
   - Primary = used by Smart Bidding later and shown in the "Conversions" column; Secondary = observation only [Google Ads Help — About primary and secondary conversion actions, https://support.google.com/google-ads/answer/11461796?hl=en, 2026-06-29].
   - On Maximize Clicks none of these drives bidding yet — but setting them now means the history accrues for the future switch (Section 10).
4. Imported actions will show **"Unverified" / "No recent conversions"** until clicks arrive — that is the **expected healthy** state at $0 spend, not an error.

**7d. Verify the wiring before you spend. USER_ACTION_REQUIRED.**
1. **GA4 DebugView:** open the live site, go to **/error-log-template**, trigger the download. In GA4 → Admin → DebugView, confirm `lead_captured` fires **with its parameters** (`source`, `lead_magnet`, and the first-touch UTM) [Google Analytics Help, https://support.google.com/analytics/answer/7201382?hl=en, 2026-06-29].
2. **Tag Assistant:** Google Ads → Conversions → open `lead_captured` → **Troubleshoot / Tag Assistant**, connect a landing-page URL, confirm the Google tag fires sitewide [Google Ads Help — Use Tag Assistant, https://support.google.com/google-ads/answer/10989978?hl=en, 2026-06-29].
3. **GCLID survives redirects:** click your own live ad-style URL with `?gclid=test123` appended (e.g. `https://www.zakariangmat.com/error-log-template?gclid=test123`) and confirm the page loads and the param isn't stripped by a Vercel redirect. (Note: imported GA4 conversions can take **up to 24h** to appear in Google Ads — don't panic if the column is empty same-day.)

---

## 8. Add one Responsive Search Ad (RSA) per ad group — exact copy from ADS.csv

For each ad group: **Ads & assets → Ads → blue "+" → Responsive search ad.** Select the matching ad group.

1. **Final URL:** the `final_url` from that ad group's row in `ADS.csv` (e.g. `https://www.zakariangmat.com/gmat-practice-questions-free`).
2. **Display path (Path 1 / Path 2):** the `path_1` / `path_2` values from the CSV (e.g. `free-practice` / `questions`). These appear after `zakariangmat.com/` in the shown URL — descriptive only, no spaces.
3. **Headlines:** paste `headline_1`, `headline_2`, `headline_3`, then split `extra_headlines` (pipe-separated `|`) into individual headline slots. Aim for **as many as fit (up to 15)** — more headlines = more combinations Google can test. Each ≤ **30 characters** (already validated in the CSV).
4. **Descriptions:** paste `description_1` and `description_2`, plus the two extra descriptions noted in the `compliance_notes` cell ("Two more descriptions available: … | …"). Up to 4 descriptions, each ≤ **90 characters** (already validated).
5. **Do not pin** headlines unless you must keep one in position 1 — leave unpinned so Google can optimize.
6. **Ad strength:** aim for "Good" or "Excellent," but **never** add a non-compliant headline just to raise strength. If it wants more, reuse the spare headlines in the CSV.
7. **Save.**

Compliance check on every RSA before saving (mirror the `compliance_notes` column):
- No "official / authorized / partner / GMAC / mba.com."
- No score/percentile/timeline promise; the only performance claim is the founder's own ("built by a 735 scorer" / "565→735" as HIS result).
- "Free during private beta" is honest and allowed. No fake urgency/scarcity/testimonials/counts. No emojis.

---

## 9. Add campaign-level negative keywords

The negatives are campaign-wide (apply once, cover all ad groups). They're rows 84-143 of `KEYWORDS_AND_NEGATIVES.csv`.

1. **Keywords → Negative keywords** (sub-tab) → blue **"+"**.
2. Choose **"Add to campaign"** → select **ZG-Search-Launch** (NOT a single ad group).
3. Paste the negative list using the right syntax:
   - **Negative phrase:** `"official guide"` (most of the list — quotes).
   - **Negative exact:** `[free]` and `[gmat]` (brackets — rows 142-143; these block the bare ultra-broad single words).
   - Paste block (apply quotes/brackets per the `match_type` column):
     ```
     "free official"
     "official guide"
     "official gmat"
     "mba.com"
     "gmac"
     "answers"
     "answer key"
     "cheat"
     "cheat sheet"
     "hack"
     "leaked"
     "pdf"
     "free pdf"
     "torrent"
     "crack"
     "free download"
     "jobs"
     "salary"
     "career"
     "coupon"
     "promo code"
     "discount code"
     "is gmat hard"
     "what is gmat"
     "gmat vs gre"
     "gre"
     "gmat syllabus"
     "gmat exam dates"
     "gmat registration"
     "gmat test center"
     "gmat fee"
     "gmat cost"
     "executive assessment"
     "gmat club"
     "manhattan"
     "kaplan"
     "princeton review"
     "magoosh"
     "target test prep"
     "e-gmat"
     "gmat coaching"
     "gmat tutor"
     "gmat classes"
     "old gmat"
     "gmat 800"
     [free]
     [gmat]
     ```
     (The CSV has a few extra variants — `mba.com login`, `gmac login/careers`, `coupon code`, `download crack`, `is the gmat hard`, `what is a good gmat score`, `ea exam`, `ttp`, `egmat`, `gmat coaching near me`, `gmat focus data insights`, `job` — add them too; the block above is the core set.)
4. Save.
5. **Sanity check the two negative-exact terms:** `[free]` and `[gmat]` are *exact* negatives — they only block the bare one-word searches "free" and "gmat", and will NOT block your real keywords like `[free gmat practice questions]`. Confirm they show **Exact** match type in the negatives list.

---

## 10. FINAL REVIEW CHECKLIST — do not enable until every box is checked

Walk this top to bottom. Only after all pass do you flip the campaign to Enabled.

**Account / billing**
- [ ] Logged into the correct Zakarian GMAT account, Expert Mode. (USER_ACTION_REQUIRED)
- [ ] Valid billing/payment method active. (USER_ACTION_REQUIRED)

**Campaign settings**
- [ ] Type = Search. Search partners OFF. Display OFF.
- [ ] Locations = US, Canada, UK, Australia, with **Presence** targeting.
- [ ] Language = English.
- [ ] Budget = $7.00/day.
- [ ] Bidding = Maximize clicks with $3.00 max-CPC cap. (NOT Maximize Conversions / tCPA / tROAS.)

**Keywords**
- [ ] Every keyword is **Exact `[ ]`** or **Phrase `" "`** — zero Broad.
- [ ] At least the 4 High-priority ad groups built (Error-Log, Free-Practice, Study-Plan, Prep-Platform), each with its CSV keywords.
- [ ] Each keyword points (via its ad group's RSA Final URL) to the correct landing page from the CSV.

**Negatives**
- [ ] Campaign negatives added at **campaign** level. `[free]` and `[gmat]` are Exact negatives.

**Ads (every ad group has 1 RSA)**
- [ ] Final URL correct; display paths set.
- [ ] Headlines/descriptions copied verbatim from `ADS.csv`.
- [ ] No "official/authorized/partner/GMAC/mba.com." No score/percentile/timeline promise. Founder claim framed as HIS result. No emojis.
- [ ] Ad status not Disapproved (check the "Status" column; "Eligible" or "Under review" is fine).

**Conversions / tracking**
- [ ] `lead_captured`, `signup`, `founding_reserve` marked as key events in GA4. (USER_ACTION_REQUIRED)
- [ ] Those three imported into Google Ads; `lead_captured` = **Primary**, others = **Secondary**.
- [ ] Auto-tagging ON; GCLID not stripped by redirects; `lead_captured` verified in DebugView with its parameters. (USER_ACTION_REQUIRED)

**Landing-page sanity**
- [ ] Each landing page loads, is mobile-fast (sub-3s — spot-check in PageSpeed Insights), and its above-the-fold H1/offer matches the ad's promise (e.g. error-log keywords → the error-log download page).

**LAUNCH — USER_ACTION_REQUIRED**
- [ ] Only now: select **ZG-Search-Launch** → status → **Enable**. Enable the 4 High-priority ad groups; leave the Medium/Low ones paused for the phase-2 expansion.
- [ ] **Next morning:** check the account (Google advises daily checks after a budget/bid change). Confirm it served impressions and that a single ~$14 day, if any, is just overdelivery.

---

## 11. After launch — kill / keep / scale / switch rules (do NOT act before these thresholds)

Read these directionally; at $7/day you are running a **learning probe**, not a statistically significant A/B test. Do not chase significance on conversion rate — it is mathematically out of reach at this volume [Growth Spree — Google Ads Experiments significance, https://www.growthspreeofficial.com/blogs/google-ads-experiments-b2b-saas-statistical-significance-methodology, 2026-06-29].

- **Run length before judging keywords:** at least **4 weeks**, ideally **6-8**, covering full weekly cycles. Don't pause a keyword on day 2-3 of zero impressions — first confirm it's actually serving (Status / "Eligible"; check Search lost IS). [Growth Spree, same url, 2026-06-29]
- **Kill a keyword (cost-based, not click-based):** pick a tolerable cost-per-lead (e.g. ~$5-10 per `lead_captured`). Pause any keyword that spends **~2-3× that target with zero leads** (stretch to 4-5× for upper-funnel/informational terms). Diagnose match-type or landing-page mismatch *before* pausing [Optmyzr — Keywords not converting, https://www.optmyzr.com/blog/google-ads-keywords-not-converting/, 2026-06-29].
- **Keep:** any keyword producing leads at/under your target cost-per-lead.
- **Don't reset learning:** batch your edits; let the campaign sit ~7-14 days between structural changes (keyword/budget/bid edits can reset learning) [Google Ads Help — Duration of the learning period, https://support.google.com/google-ads/answer/13020501?hl=en, 2026-06-29].
- **Scale budget only when:** an ad group is at/under its cost-per-lead target **AND** "Search lost IS (budget)" ≥ ~10% over the last 7-30 days. Raise in **10-20% steps**, then wait a week [Bigflare — Limited by budget, https://www.bigflare.com/blog/what-to-do-when-your-google-ads-campaign-is-limited-by-budget, 2026-06-29]. (Right now the problem is the opposite — too few impressions — so fix volume first, don't scale.)
- **Switch to Maximize Conversions (optimizing `lead_captured`):** only after **~15 `lead_captured` events in a trailing 30 days** at the campaign level [Google Ads Help — About Maximize conversions bidding, https://support.google.com/google-ads/answer/7381968?hl=en, 2026-06-29]. Consider **Target CPA** only after **~30/30 days** [Google Ads Help — About Target CPA bidding, https://support.google.com/google-ads/answer/6268632?hl=en, 2026-06-29]. **Never** Target ROAS during the free beta (no revenue/conversion value) [Google Ads Help — About Target ROAS bidding, https://support.google.com/google-ads/answer/6268637?hl=en, 2026-06-29].
- **Broad match:** keep OFF until you've graduated to conversion bidding with ~30-50 conversions — Google itself says broad match needs Smart Bidding to work [Google Ads Help — Your guide to broad match, https://support.google.com/google-ads/answer/12159290, 2026-06-29].
- **Benchmarks for context (aspirational ceiling, not a day-1 target):** Education search medians are CTR 7.56% / CPC $4.81 / CVR 13.14% / CPL $77.48 — but these are mature accounts blending Google+Microsoft, so a brand-new account will start worse; your free-download `lead_captured` should cost far less than the $77 "lead." Judge yourself against your own trend first [WordStream — 2026 Google Ads Benchmarks, https://www.wordstream.com/blog/2026-google-ads-benchmarks, 2026-05-19].

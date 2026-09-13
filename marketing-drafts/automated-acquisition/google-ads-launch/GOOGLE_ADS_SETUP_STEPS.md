# Google Ads Setup Steps (click-by-click)

Follow in order. Steps that need Adam's login, payment, or a Vercel change are marked **SKIPPED_USER_ACTION** — do them yourself, then continue. The keywords, ads, negatives, landing pages and UTMs referenced here come from the other files in this folder; keep names identical so everything lines up.

---

## PHASE A — Prerequisite: turn on the Google tag (do this FIRST)

**Step A1 — SKIPPED_USER_ACTION.** Decide your Google tag id type:
- A **GA4** id looks like `G-XXXXXXXXXX` (preferred — gives you GA4 reporting + conversion import).
- A **Google Ads** id looks like `AW-XXXXXXXXXX` (direct Ads conversions, no GA4).
- Recommendation: create a **GA4 property** (analytics.google.com -> Admin -> Create property), copy its `G-` Measurement ID. You can still link it to Google Ads later.

**Step A2 — SKIPPED_USER_ACTION.** In Vercel (project: gmat-platform -> Settings -> Environment Variables, Production scope), set:
```
NEXT_PUBLIC_GOOGLE_TAG_ID = G-XXXXXXXXXX   (your real id)
```
Then **redeploy production**. Until this is deployed, `AdPixels` renders nothing and gtag never fires — conversions cannot be measured. Do not run ads before this is live.

**Step A3.** Verify the tag fires: open https://www.zakariangmat.com in Chrome with the Google **Tag Assistant** (tagassistant.google.com) or GA4 DebugView. Trigger `landing_view` (load `/gmat-study-plan`) and `lead_captured` (submit a lead form with the opt-in box). Confirm both events appear. If they don't, fix before spending.

---

## PHASE B — Create the Google Ads account

**Step B1 — SKIPPED_USER_ACTION.** Go to https://ads.google.com and sign in with Adam's Google account. Click **Start now**.

**Step B2.** If Google pushes you into "Smart"/guided mode, look for **"Switch to Expert Mode"** (small link, usually bottom) and click it. Expert Mode is required to control networks, match types, and bidding. Do NOT build in Smart mode.

**Step B3.** If asked to create a campaign immediately, choose **"Create an account without a campaign"** (link near the bottom). Finish account creation first.

**Step B4 — SKIPPED_USER_ACTION.** Set billing: account currency and time zone (pick Adam's working time zone; it is permanent), then enter the payment method. No spend happens until a campaign is enabled.

---

## PHASE C — Conversion tracking

Decide based on your tag id from A1.

### Path C-GA4 (if you used a `G-` GA4 id) — PREFERRED
**Step C1.** In GA4 (analytics.google.com), go to **Admin -> Events**. Confirm `signup`, `lead_captured`, and `founding_reserve` appear (trigger them once on the live site if needed so GA4 registers them).
**Step C2.** Mark them as key events: **Admin -> Key events -> Mark `signup`, `lead_captured`, `founding_reserve` as key events.**
**Step C3 — SKIPPED_USER_ACTION.** Link GA4 to Google Ads: in GA4 **Admin -> Product links -> Google Ads links -> Link** to Adam's Ads account.
**Step C4.** In Google Ads, go to **Goals -> Conversions -> + New conversion action -> Import -> Google Analytics 4 properties -> Web.** Import `signup`, `lead_captured`, `founding_reserve`.

### Path C-AW (if you used an `AW-` Google Ads id)
**Step C1.** In Google Ads, **Goals -> Conversions -> + New conversion action -> Website.**
**Step C2.** Because events fire through the existing `gtag`/`trackEvent` layer, create each conversion using the **"Use Google tag" / event snippet** method and map it to the event name. Create three actions: `signup`, `lead_captured`, `founding_reserve`. (No code change needed — `trackEvent` already forwards to gtag once the id is set.)

### For BOTH paths — conversion settings
**Step C5.** For each of the three conversion actions:
- Category: `signup` -> "Sign-up"; `lead_captured` -> "Submit lead form"; `founding_reserve` -> "Sign-up" (or "Submit lead form").
- **Include in "Conversions": YES** (these drive bidding).
- Count: **One** (per click) for signup/founding_reserve; "One" for lead_captured too (one lead per person).
- Attribution model: **Data-driven** if offered, else last click.
**Step C6.** Add secondary actions but set **"Include in Conversions: NO"** for: `landing_view`, `signup_initiated`, `pricing_view`. Track for insight, keep out of bidding.
**Step C7.** Do NOT create `checkout_initiated` or `purchase_completed` conversions yet — dormant until the paywall is on.

---

## PHASE D — Build the campaign

**Step D1.** Google Ads -> **Campaigns -> + -> New campaign.**
**Step D2.** Objective: choose **"Create a campaign without a goal's guidance"** (so Google doesn't force settings). Campaign type: **Search.**
**Step D3.** Uncheck any "include Search Partners" and "include Display Network" options on the next screen. **Search Partners OFF, Display OFF.** Do not select Performance Max anywhere.
**Step D4.** Name the campaign exactly: **`ZG-Search-Launch`.**
**Step D5 — Bidding.** Choose **"Maximize clicks"**, then click **"Set a maximum cost-per-click bid limit"** and enter **$1.50**. (Manual CPC is an equivalent alternative if the option is shown.) Do NOT pick Maximize Conversions yet — no conversion history.
**Step D6 — Budget.** Daily budget **$7** (see BUDGET_PLAN.md).
**Step D7 — Locations.** Click **Enter another location** and add: United States, Canada, United Kingdom, India, Norway, Switzerland. Then open **Location options** and select **"Presence: People in or regularly in your targeted locations."** (Not "Presence or interest.")
**Step D8 — Language.** English.
**Step D9 — Audience/other.** Skip audience segments. Leave ad rotation default ("Optimize"). Disable any "automatically created assets" toggle to keep copy controlled.
**Step D10 — Final URL suffix (campaign level).** Under campaign settings -> **Additional settings -> Campaign URL options -> Final URL suffix**, paste (see UTM_TEMPLATE.md):
```
utm_source=google&utm_medium=cpc&utm_campaign=zg-search-launch&utm_term={keyword}
```
You'll add `utm_content` per ad group in Phase E. Leave **auto-tagging ON**.

---

## PHASE E — Create ad groups, keywords, and ads (from the CSVs)

Do this once per ad group. The six ad groups, their keywords, and their ads are in KEYWORDS.csv and ADS.csv. Recommended fast path: use **Google Ads Editor** (desktop app) to import the CSVs in bulk; the manual UI steps below are the fallback.

### Bulk path (recommended)
**Step E0.** Download **Google Ads Editor** (free desktop app), sign in, download the account. Use **Account -> Import -> From file** with reshaped CSVs (Editor expects its own column names). Map: Campaign, Ad Group, Keyword, Match Type, Max CPC, Final URL for keywords; and the RSA columns for ads. Post changes. Then jump to Phase F.

### Manual path (per ad group)
For each of: AG-Study-Plan, AG-Error-Log-Template, AG-Mock-Review, AG-Data-Insights, AG-Quant-Practice, AG-Prep-Platform:

**Step E1.** In the campaign, **+ New ad group.** Name it exactly the ad group name.
**Step E2.** Add its keywords from KEYWORDS.csv. Enter EXACT match as `[keyword]` and PHRASE match as `"keyword"`. Add ONLY the rows for that ad group. No broad match.
**Step E3.** Set the ad-group default max CPC near that ad group's keyword caps (use the highest Suggested Max CPC in the group as the ceiling).
**Step E4 — per-ad-group utm_content.** Open the ad group -> **Settings -> Final URL suffix** and append the ad group's content tag. Example for AG-Study-Plan:
```
utm_source=google&utm_medium=cpc&utm_campaign=zg-search-launch&utm_content=ag-study-plan&utm_term={keyword}
```
Use the `utm_content` value from UTM_TEMPLATE.md for each ad group (`ag-study-plan`, `ag-error-log-template`, `ag-mock-review`, `ag-data-insights`, `ag-quant-practice`, `ag-prep-platform`). The ad-group suffix overrides the campaign one.
**Step E5 — Create the Responsive Search Ad.** + New ad -> Responsive search ad. From ADS.csv, paste:
- All headlines for that ad group (up to 15).
- All descriptions (up to 4).
- **Final URL** = that ad group's landing page (the live URL).
- **Display path** Path 1 and Path 2 (e.g. `gmat` / `study-plan`).
**Step E6.** Pin sparingly. Optionally pin the most on-brand headline (e.g. "GMAT Study Plan") to Headline position 1 so the primary keyword always shows; leave the rest unpinned so Google can optimize. Aim for "Ad strength: Good" or better.
**Step E7.** Repeat E1–E6 for all six ad groups.

---

## PHASE F — Negative keywords

**Step F1.** Build a **negative keyword list**: Google Ads -> **Tools -> Shared library -> Negative keyword lists -> + New list.** Name it `ZG-Master-Negatives`.
**Step F2.** Paste every row from NEGATIVE_KEYWORDS.csv into the list. Match types: enter phrase negatives as `"term"` and exact negatives as `[term]`.
**Step F3.** Apply the list to the `ZG-Search-Launch` campaign (**Apply to campaigns -> select ZG-Search-Launch**). Using a shared list means future campaigns can reuse it.
**Step F4.** Sanity-check the two exact negatives `[free]` and `[gmat]` are exact, not phrase — they only block the bare single-word query, not your real keywords.

---

## PHASE G — Pre-launch checklist & go live

**Step G1.** Confirm: Search only (Partners + Display OFF), no PMax, only EXACT/PHRASE keywords present, negatives applied, six ad groups each with an RSA, Final URL suffixes set, $7/day budget, Max Clicks with $1.50 cap, locations set to "Presence."
**Step G2.** Confirm all three conversion actions show "Recording: Eligible/Recording" status (it may say "No recent conversions" until traffic arrives — that's fine).
**Step G3.** Use the **Ad preview tool** (Tools -> Ad preview and diagnosis) to load a couple of keywords and confirm ads are eligible and pointing at the right pages.
**Step G4 — SKIPPED_USER_ACTION.** Enable the campaign. Watch the first few hours, then follow 7_DAY_OPTIMIZATION_PLAN.md.

---

## Notes / gotchas
- If Google warns "your campaign is limited by negative keywords" or impressions are zero on day 1, double-check you didn't accidentally make `[gmat]` a phrase/broad negative.
- If "Ad strength: Poor," add a few more distinct headlines (don't repeat the same phrase) — but never add a score guarantee or affiliation claim to boost strength.
- Keep the founder 565 -> 735 (top 1%) claim only where there's room to frame it as HIS result (it's used in the Error-Log and Prep-Platform headlines as "Built By A 735 Scorer"). Never phrase it as a typical or expected outcome.

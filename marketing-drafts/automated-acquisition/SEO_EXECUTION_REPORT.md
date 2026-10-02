> **ARCHIVED (2026-07-19)** - historical snapshot; wording predates the current claim rules (offer: free 7-day full-access trial, no card; founder result: 565 to 735, top 1%, framed only as Adam's personal result; no "verified"/proof framing until the redacted score report actually ships). Reference only - do not build campaigns from this file.

# SEO Acquisition Execution Report — Zakarian GMAT

Independent GMAT Focus Edition prep, currently in free private beta (no credit card; PAYWALL_ENABLED off). Canonical host: https://www.zakariangmat.com (apex 308-redirects to www). The only performance claim permitted anywhere is founder Adam Zakarian's own 565 (56th pct) to 735 (100th percentile) result, framed as his personal result — never a prediction or typical outcome. Not affiliated with GMAC / GMAT / GMAT Focus Edition / mba.com; all marks referenced descriptively.

This report covers the 7 live, indexable acquisition pages. Each has a canonical tag, the GMAC non-affiliation disclaimer, a signup CTA, and analytics tracking. Funnel events are snake_case, fire to Vercel Web Analytics, and auto-forward to Meta `fbq` / Google `gtag` once pixel env vars are set. First-touch attribution (`zg_attribution` in localStorage) merges into every event automatically.

---

## Summary table

| Page | Primary keyword | Intent | Primary conversion event |
|---|---|---|---|
| /gmat-study-plan | gmat study plan | Informational / commercial | `lead_captured {source, lead_magnet}` |
| /gmat-mock-review | gmat mock review | Informational / commercial | `lead_captured {source, lead_magnet}` |
| /gmat-data-insights-practice | gmat data insights practice | Commercial | `lead_captured {source, lead_magnet}` |
| /gmat-quant-practice | gmat quant practice | Commercial | `lead_captured {source, lead_magnet}` |
| /gmat-private-beta | gmat prep platform / private beta | Commercial / transactional | `founding_reserve {source, lead_magnet}` |
| /error-log-template | gmat error log template | Transactional (free download) | `lead_captured {source, lead_magnet}` (CSV, no account) |
| /refer | gmat referral / refer a friend | Transactional (share) | `referral_click {channel, named}` |

All pages also fire `landing_view {page}` on view. Lead-magnet pages additionally feed `signup_initiated {gated}` / `signup {gated}` (Meta `CompleteRegistration`) when a visitor goes on to create an account.

---

## 1. /gmat-study-plan

- **Page URL:** https://www.zakariangmat.com/gmat-study-plan
- **Head keyword:** gmat study plan
- **Long-tail variants:**
  - gmat study plan template
  - how to make a gmat study plan
  - gmat focus edition study plan (2-3 month)
- **Search intent:** Informational shading into commercial — searchers want a structured plan and are evaluating tools that build one.
- **On-page CTA:** "Get the free study-plan worksheet" (newsletter lead magnet) as primary; secondary "Start free in the private beta" to /signup. The honest framing: the in-app adaptive plan is built from the user's real official mba.com practice-exam baseline (no in-app diagnostic).
- **Conversion events:** `landing_view {page:"gmat-study-plan"}` on view; `lead_captured {source:"gmat-study-plan", lead_magnet:"study-plan-worksheet"}` on email capture; downstream `signup_initiated` / `signup` if they create an account.
- **Internal links INTO this page:** from /gmat-mock-review (a plan informs what to review), /gmat-quant-practice, /gmat-data-insights-practice (plan sequences the practice), /gmat-private-beta (how the adaptive plan is built), and blog post "How to build a GMAT Focus study plan from your official practice-exam baseline."
- **Internal links OUT of this page:** to /gmat-mock-review (anchor: "review your mocks the right way"), /error-log-template (anchor: "track misses with a free error log"), /gmat-private-beta (anchor: "see how the adaptive plan works"), /signup, and /refer in the footer.
- **Improvement ideas:**
  1. Add `FAQPage` schema (questions: "How long should a GMAT study plan be?", "Do I need a diagnostic first?" — answer honestly: use your official mba.com practice exam, no in-app diagnostic).
  2. Add a sample 6-week schedule table (chapter -> practice -> review cadence using the same-day/2/7/21/42-day ladder) to win the "template" long-tail.
  3. Spin off a dedicated long-tail page: /gmat-study-plan-2-months (intent: "2 month gmat study plan").

---

## 2. /gmat-mock-review

- **Page URL:** https://www.zakariangmat.com/gmat-mock-review
- **Head keyword:** gmat mock review
- **Long-tail variants:**
  - how to review a gmat mock
  - gmat practice test review process
  - gmat mock test analysis
- **Search intent:** Informational / commercial — people who just took a mock and want a review method, then a tool that operationalizes it.
- **On-page CTA:** "Get the free mock-review checklist" (newsletter); secondary "Run your mocks free in the beta" to /signup. Honest hook: full-length mocks are 3 sections x 45 min, auto-submit, with mock-to-mock trend tracking.
- **Conversion events:** `landing_view {page:"gmat-mock-review"}`; `lead_captured {source:"gmat-mock-review", lead_magnet:"mock-review-checklist"}`; downstream `signup`.
- **Internal links INTO this page:** from /gmat-study-plan (review feeds the plan), /gmat-quant-practice and /gmat-data-insights-practice (review your section mocks), /gmat-private-beta, and blog post "A repeatable GMAT mock-review process (what to do the day after a practice test)."
- **Internal links OUT of this page:** to /error-log-template (anchor: "log every miss with the free CSV template"), /gmat-study-plan (anchor: "turn review findings into your study plan"), /gmat-private-beta (anchor: "track mock-to-mock trends"), /signup, /refer.
- **Improvement ideas:**
  1. Add `FAQPage` schema ("How long should mock review take?", "How many mocks before the real GMAT?").
  2. Add a behaviour-pattern explainer (efficient / labored / rushed / stuck) tied to per-topic and per-difficulty analytics — a differentiator competitors lack.
  3. Add `HowTo` schema for the step-by-step review checklist to capture rich-result real estate.

---

## 3. /gmat-data-insights-practice

- **Page URL:** https://www.zakariangmat.com/gmat-data-insights-practice
- **Head keyword:** gmat data insights practice
- **Long-tail variants:**
  - gmat data insights practice questions
  - data sufficiency practice gmat focus
  - gmat focus data insights prep
- **Search intent:** Commercial — searchers want practice material now and are evaluating where to get it.
- **On-page CTA:** "Practice Data Insights free in the beta" to /signup as primary; "Get the free question pack / newsletter" as lead-magnet secondary. Honest hook: Data Insights chapters plus a large practice question bank with the six-tag error log.
- **Conversion events:** `landing_view {page:"gmat-data-insights-practice"}`; `lead_captured {source:"gmat-data-insights-practice", lead_magnet:"newsletter"}`; downstream `signup`.
- **Internal links INTO this page:** from /gmat-quant-practice (cross-section: DI overlaps with quant reasoning), /gmat-study-plan (where DI fits in the plan), /gmat-mock-review (reviewing the DI section), /gmat-private-beta, and blog post "GMAT Data Insights question types, explained (and how to drill each)."
- **Internal links OUT of this page:** to /gmat-quant-practice (anchor: "drill the Quant section too"), /error-log-template (anchor: "tag DI mistakes by type"), /gmat-study-plan (anchor: "slot DI into your study plan"), /gmat-private-beta, /signup, /refer.
- **Improvement ideas:**
  1. Add a question-type breakdown table (Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation, Two-Part Analysis) — strong for long-tail capture.
  2. Add `FAQPage` schema ("Is Data Insights hard?", "How many DI questions on the GMAT Focus?").
  3. New long-tail page worth creating: /gmat-data-sufficiency-practice (highest-volume DI sub-keyword).

---

## 4. /gmat-quant-practice

- **Page URL:** https://www.zakariangmat.com/gmat-quant-practice
- **Head keyword:** gmat quant practice
- **Long-tail variants:**
  - gmat quant practice questions
  - gmat focus quant prep
  - gmat problem solving practice
- **Search intent:** Commercial — high-volume "give me practice" intent.
- **On-page CTA:** "Practice Quant free in the beta" to /signup as primary; newsletter lead-magnet secondary. Honest hook: Quant chapters, large question bank, per-topic and per-difficulty analytics, spaced-review queue.
- **Conversion events:** `landing_view {page:"gmat-quant-practice"}`; `lead_captured {source:"gmat-quant-practice", lead_magnet:"newsletter"}`; downstream `signup`.
- **Internal links INTO this page:** from /gmat-data-insights-practice (cross-section), /gmat-study-plan, /gmat-mock-review, /gmat-private-beta, and blog post "How to drill GMAT Quant without burning out: spaced review for problem-solving."
- **Internal links OUT of this page:** to /gmat-data-insights-practice (anchor: "Data Insights practice"), /error-log-template (anchor: "log careless vs. conceptual quant misses"), /gmat-study-plan (anchor: "build your quant study plan"), /gmat-private-beta, /signup, /refer.
- **Improvement ideas:**
  1. Add `FAQPage` schema ("How many quant questions on the GMAT Focus?", "Is the GMAT Focus quant easier than the old GMAT?" — answer descriptively, no GMAC affiliation).
  2. Add a topic-coverage table (algebra, arithmetic, word problems, rates, etc.) mapped to chapters to win topic long-tails.
  3. New long-tail page: /gmat-quant-formulas (high-volume informational keyword that feeds quant practice).

---

## 5. /gmat-private-beta

- **Page URL:** https://www.zakariangmat.com/gmat-private-beta
- **Head keyword:** gmat prep platform / gmat private beta
- **Long-tail variants:**
  - new gmat prep platform 2026
  - free gmat prep beta
  - gmat focus edition prep app
- **Search intent:** Commercial / transactional — bottom-funnel; evaluating or ready to join.
- **On-page CTA:** "Reserve founding access" (founding reservation) as primary; "Start free now" to /signup as secondary. Honest framing: free during private beta, no credit card; founding price locks for early reservers (Stripe is test-mode, not charging yet).
- **Conversion events:** `landing_view {page:"gmat-private-beta"}`; `founding_reserve {source:"gmat-private-beta", lead_magnet:"founding-reservation"}` on reservation; `signup_initiated` / `signup` (Meta `CompleteRegistration`) on account creation.
- **Internal links INTO this page:** from ALL four other SEO pages (it is the conversion hub), /error-log-template (post-download CTA), /refer, /pricing, and blog post "Why I'm building Zakarian GMAT in the open (565 -> 735, 100th percentile)."
- **Internal links OUT of this page:** to /gmat-study-plan and /gmat-mock-review (anchors: "see the adaptive plan", "see mock tracking"), /error-log-template (anchor: "grab the free error log"), /pricing, /about, /signup, /refer.
- **Improvement ideas:**
  1. Add a feature comparison table (chapters / question bank / error log / spaced review / mocks / analytics) — no competitor names needed, or link to /how-we-compare.
  2. Add `FAQPage` schema ("Is it really free?", "What happens when the beta ends?", "Do I need a credit card?") — answer honestly per the beta facts.
  3. Add the founder score-report proof point (565 -> 735, 100th percentile) with the disclaimer that it is his own result, backed by public/score-report.png.

---

## 6. /error-log-template

- **Page URL:** https://www.zakariangmat.com/error-log-template
- **Head keyword:** gmat error log template
- **Long-tail variants:**
  - gmat error log spreadsheet
  - gmat mistake tracker / error log excel
  - how to keep a gmat error log
- **Search intent:** Transactional — searcher wants a downloadable template right now. HIGHEST-INTENT magnet on the site (free CSV, no account required).
- **On-page CTA:** "Download the free error-log CSV" (instant, no account); secondary "Get the auto-tracking version in the beta" to /signup. Honest hook: the in-app six-tag error log (Conceptual, Careless, Time Pressure, Misread, Strategy, Other) automates what the CSV does by hand.
- **Conversion events:** `landing_view {page:"error-log-template"}`; `lead_captured {source:"error-log-template", lead_magnet:"error-log-csv"}` on download; downstream `signup` for the in-app version.
- **Internal links INTO this page:** from EVERY SEO and practice page (the error log is the connective tissue of the funnel), /gmat-mock-review (log mock misses), /gmat-quant-practice and /gmat-data-insights-practice (tag practice misses), and blog post "The six error tags that actually move your GMAT score (Conceptual, Careless, Time Pressure, Misread, Strategy, Other)."
- **Internal links OUT of this page:** to /gmat-private-beta (anchor: "get the auto-tracking error log in the beta"), /gmat-mock-review (anchor: "use it during mock review"), /gmat-study-plan (anchor: "feed misses back into your plan"), /signup, /refer.
- **Improvement ideas:**
  1. Add a screenshot/preview of the CSV columns plus an example filled row to lift download conversion.
  2. Add `FAQPage` + `HowTo` schema ("How do I use a GMAT error log?", step-by-step), strong rich-result candidate for this transactional term.
  3. Offer a Google Sheets / Notion variant of the same template as additional long-tail capture (/error-log-template stays canonical; new formats can be on-page download options).

---

## 7. /refer

- **Page URL:** https://www.zakariangmat.com/refer
- **Head keyword:** gmat referral / refer a friend (low search volume; primarily an internal viral-loop page, not a search-acquisition target)
- **Long-tail variants:**
  - refer a friend gmat prep
  - gmat prep referral reward
  - (largely non-search; this page is shared, not found)
- **Search intent:** Transactional / navigational — reached by logged-in or invited users to share, not via organic search.
- **On-page CTA:** "Copy your referral message" plus WhatsApp / X / email / native share buttons. Honest reward framing: $50 when a referred friend becomes a PAYING founding member (manual tracking during launch; reward triggers once paid plans turn on — be explicit it is not active yet).
- **Conversion events:** `landing_view {page:"refer"}`; `referral_click {channel, named}` on each share action (channel = copy / email / whatsapp / x / native).
- **Internal links INTO this page:** footer link from all 7 pages, /pricing, /about, and the post-signup / post-download success states.
- **Internal links OUT of this page:** to /signup (anchor: "your friend signs up free"), /gmat-private-beta (anchor: "reserve founding access"), /pricing.
- **Improvement ideas:**
  1. Keep this page `noindex` or low-priority in the sitemap — it has little organic value and thin/duplicative share copy could dilute crawl budget; prioritize the 6 content pages for indexing.
  2. Add a clear "reward activates when paid plans turn on" note so the offer is honest and compliant during the free beta.
  3. Pre-fill the share message with the user's referral code and a UTM-tagged link (utm_source=referral) so referral traffic is attributable in `zg_attribution`.

---

## (a) Prioritized NEW high-intent SEO pages to create next

Ranked by intent strength x realistic difficulty for a brand-new domain. All must carry the canonical tag, GMAC non-affiliation disclaimer, a signup/lead CTA, and tracking — and must obey the no-score-guarantee rule.

1. **/gmat-data-sufficiency-practice** — keyword: "gmat data sufficiency practice." Angle: dedicated drill page for the single highest-volume Data Insights sub-type; CTA to practice free in the beta. (Splits demand off /gmat-data-insights-practice.)
2. **/gmat-study-plan-2-months** — keyword: "2 month gmat study plan." Angle: concrete week-by-week schedule built around the spaced-review ladder; lead magnet = study-plan worksheet. High commercial intent, very searched timeframe.
3. **/gmat-score-chart** (or extend /score-converter) — keyword: "gmat focus score chart / percentiles." Angle: descriptive score-to-percentile reference, honest (no prediction), strong informational magnet that funnels to the study plan. Reuses public score-report context for the founder proof point.
4. **/gmat-verbal-practice** — keyword: "gmat verbal practice." Angle: completes the section set (Quant + DI already live); Verbal chapters + question bank exist, so this is a content-supported gap. Cross-links to the other two practice pages.
5. **/gmat-focus-edition-changes** — keyword: "gmat focus edition vs gmat / what changed." Angle: informational top-of-funnel explainer (sections, timing, no AWA/SC, Data Insights) — high volume, feeds every practice page. Strictly descriptive, no affiliation.
6. **/best-gmat-prep-for-self-study** — keyword: "self study gmat prep." Angle: commercial-investigation page leaning on the founder's self-study 565 -> 735 story (his own result) and the error-log/spaced-review system; routes to /gmat-private-beta.
7. **/gmat-practice-questions-free** — keyword: "free gmat practice questions." Angle: honest "free during private beta" hook + sample questions from the bank; transactional, routes straight to /signup.
8. **/gmat-1-month-study-plan** — keyword: "1 month gmat study plan." Angle: companion to the 2-month page for the compressed-timeline searcher; same worksheet magnet.

---

## (b) Google Search Console + Bing Webmaster submission steps

Sitemap to submit (both engines): `https://www.zakariangmat.com/sitemap.xml`
Property/canonical host: `https://www.zakariangmat.com` (apex 308-redirects to www — register the www property as primary).

### Google Search Console
1. **[SKIPPED_USER_ACTION]** Sign in at https://search.google.com/search-console with Adam's Google account.
2. **[SKIPPED_USER_ACTION]** Add property. Recommended: add the **Domain** property `zakariangmat.com` (covers www, apex, http/https) via DNS TXT verification at the domain registrar; if DNS access is awkward, add a **URL-prefix** property `https://www.zakariangmat.com` and verify with the HTML-tag or DNS method. (Requires registrar/DNS login — owner only.)
3. Once verified: **Sitemaps** (left nav) -> enter `sitemap.xml` -> Submit. Confirm status reads "Success" and the discovered-URL count matches the live page count.
4. **Request indexing** for each of the 7 pages: paste the full URL into the top **URL Inspection** bar, then click **Request Indexing**. Do this for:
   - https://www.zakariangmat.com/gmat-study-plan
   - https://www.zakariangmat.com/gmat-mock-review
   - https://www.zakariangmat.com/gmat-data-insights-practice
   - https://www.zakariangmat.com/gmat-quant-practice
   - https://www.zakariangmat.com/gmat-private-beta
   - https://www.zakariangmat.com/error-log-template
   - https://www.zakariangmat.com/refer  (optional — skip if /refer is set to noindex per page 7, improvement 1)
5. Set **Settings -> Ownership** and add a backup verification method so the property is not lost if one method breaks.

### Bing Webmaster Tools
1. **[SKIPPED_USER_ACTION]** Sign in at https://www.bing.com/webmasters with Adam's Microsoft (or Google) account.
2. **Import from Google Search Console** (fastest): on first run Bing offers a one-click import that carries over the verified property and sitemap. If used, verification and sitemap submission are done in one step — confirm the sitemap shows `https://www.zakariangmat.com/sitemap.xml`.
3. If importing is not used: **[SKIPPED_USER_ACTION]** Add site `https://www.zakariangmat.com` and verify via XML file upload, meta tag, or DNS CNAME (owner login required).
4. **Sitemaps** -> Submit sitemap -> `https://www.zakariangmat.com/sitemap.xml`.
5. **URL submission** (Bing -> Configure My Site / "Submit URLs"): paste the same 7 page URLs to request crawling. Bing's quota is generous for a new site; submit all six content pages immediately (/refer optional).
6. Enable **IndexNow** (Bing -> IndexNow) so future page changes ping Bing instantly; the host key step is **[SKIPPED_USER_ACTION]** if it requires uploading a key file to the domain root.

### Post-submission verification (no external login required where possible)
- Confirm `https://www.zakariangmat.com/sitemap.xml` returns 200 and lists all 7 pages with `<lastmod>` dates.
- Confirm `https://www.zakariangmat.com/robots.txt` references the sitemap and does not block any of the 7 pages.
- Re-check GSC **Coverage / Pages** report ~3-7 days after submission to confirm the pages move to "Indexed"; re-request indexing for any stuck URLs.

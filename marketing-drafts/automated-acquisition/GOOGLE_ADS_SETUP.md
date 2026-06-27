# Google Search Ads Setup

Acquisition playbook for **Zakarian GMAT** (zakariangmat.com) on Google Search Ads. Search only — this doc does not cover Display, PMax, or YouTube.

This is decision-support for the founder. Everything below is built to match the platform as it actually exists. Nothing here implies affiliation with GMAC, the GMAT, GMAT Focus Edition, or mba.com. "GMAT" and "GMAT Focus Edition" are referenced nominatively only (describing what the platform helps you prepare for); they are not used as if Zakarian GMAT is endorsed by or partnered with the trademark holder.

---

## Compliance guardrails (read before writing any ad)

These are hard constraints. An ad that violates one does not run.

- **No affiliation/endorsement language.** Never write "official GMAT," "GMAC-approved," "partner," or anything implying a relationship with GMAC/mba.com. Brand the product as "Zakarian GMAT," not "GMAT prep by GMAT."
- **No guaranteed scores.** No "guaranteed 700+," "score X or your money back," "hit your target score."
- **No diagnostic / score-band claims.** The platform has **no in-app diagnostic.** Never write "free diagnostic," "30-question diagnostic," "find your readiness band," "see your score band," "most students improve," "typically lands," "students see." The baseline comes from the user's **own official mba.com practice exam** — describe it that way ("build your plan from your official practice-exam score"), never as something we measure.
- **Only one performance claim is allowed, and only about the founder:** Adam Zakarian's own 565 -> 735 climb (100th percentile on his official report). Never generalize it to other students. Acceptable: "Built by a 735-scorer." Not acceptable: "Our students go from 565 to 735."
- **No fake urgency, no fabricated testimonials, no invented student counts.** Founding-price scarcity is real (early pricing is genuinely limited/anchored) and may be stated factually, but no countdown-timer fiction or "only 3 spots left" unless literally true.
- **Trademark use in keywords is fine** (bidding on "GMAT study plan" etc. is nominative and allowed), but trademarked terms must not appear in ad copy in a way that implies endorsement. Use "GMAT" descriptively.

If a headline can't pass all of the above, cut it.

---

## Account structure

One account, **seven single-theme Search campaigns**, each mapped to one high-intent landing page. Single-theme campaigns keep Quality Score high, keep keyword-to-ad-to-landing-page relevance tight, and make budget control trivial for a solo operator.

```
Zakarian GMAT (account)
├── Campaign 1: Search - Study Plan          -> /gmat-study-plan
├── Campaign 2: Search - Error Log           -> /error-log-template
├── Campaign 3: Search - Mock Review         -> /gmat-mock-review
├── Campaign 4: Search - Practice Platform   -> /gmat-private-beta
├── Campaign 5: Search - Data Insights       -> /gmat-data-insights-practice
├── Campaign 6: Search - Quant Practice      -> /gmat-quant-practice
└── Campaign 7: Search - Private Beta         -> /gmat-private-beta
```

Settings applied to **every** campaign:

- **Networks:** Search only. Turn OFF "Search Partners" and "Display Network" at launch (cleaner data while budgets are small).
- **Locations:** Start with US, Canada, UK, Australia, plus India and UAE if you can service those time zones for support. Target "people in or regularly in" your locations, **not** "people interested in" (avoids irrelevant geo intent).
- **Languages:** English.
- **Bidding:** Launch on **Maximize Clicks with a max CPC cap** (~$3.00 cap) for the first ~2-3 weeks to gather click and conversion data cheaply. Once each campaign has logged a handful of `signup`/`lead_captured` conversions, migrate the converting campaigns to **Maximize Conversions** (and later tROAS-style targets are not relevant for a free beta — stay on Maximize Conversions / target CPA).
- **Ad rotation:** Optimize (let Google serve best-performing RSA).
- **Keyword match types:** Phrase and exact only at launch. **No broad match** until conversion tracking is mature — broad match burns a $500-conscious budget fast.
- **Ad schedule:** All hours to start; tighten later from the hour-of-day report.

---

## Conversion tracking (import these, don't build new infra)

The site already fires `trackEvent()` to Vercel Analytics + Meta Pixel + Google tag. The Google tag is dormant until `NEXT_PUBLIC_GOOGLE_TAG_ID` is set — **set that env var first or none of this records.** `AttributionCapture` already stores first-touch UTM and merges it into every event, so UTM attribution is handled; you only need to wire the conversions.

Import these existing events as Google Ads conversions:

| Conversion event | Role | Count | Notes |
|---|---|---|---|
| `signup` | **PRIMARY** | One | Also fires Meta `CompleteRegistration`. This is the bid target. |
| `lead_captured` | **SECONDARY** | One | Opt-in email (lead magnets / error-log template). Use as a secondary "Observe" conversion, not the bid target. |
| `founding_reserve` | Tertiary (observe) | One | Reserve early pricing. Track to see search -> reservation flow; do not optimize toward it yet at this budget. |
| `pricing_view` | Micro (observe only) | — | Useful for funnel diagnosis; do not import as an optimization goal. |

Setup steps:
1. Set `NEXT_PUBLIC_GOOGLE_TAG_ID` in the environment so the Google tag activates.
2. In Google Ads, define `signup` as a **Primary** conversion action and set it as the campaign optimization goal.
3. Define `lead_captured` as a **Secondary** conversion (still recorded, not optimized against). This is correct for landing pages whose first ask is the email-gated lead magnet (error-log template).
4. Mark `founding_reserve` as Secondary/observe.
5. Confirm in Google Tag Assistant / the Ads diagnostics that events arrive **with** the merged UTM parameters before scaling spend.

**Primary = `signup`. Secondary = `lead_captured`.** Bid toward signups; watch leads.

---

## UTM template (apply per campaign)

Use Google Ads **final-URL tracking template** with ValueTrack so UTMs are consistent and machine-parseable, matching the canonical schema (`utm_source = google`, `utm_medium = cpc`, `utm_campaign = <topic>-<channel>`, `utm_content = <ad-variant>`, `utm_term = <keyword>`).

Account-level or campaign-level tracking template:

```
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid_topic}-google&utm_content={creative}&utm_term={keyword}
```

Because `{campaignid_topic}` isn't a real ValueTrack token, set the campaign portion explicitly per campaign. Concrete per-campaign final-URL suffixes (preferred — cleaner than templates and survives redirects):

| Campaign | Final URL suffix |
|---|---|
| Study Plan | `utm_source=google&utm_medium=cpc&utm_campaign=study-plan-google&utm_content={creative}&utm_term={keyword}` |
| Error Log | `utm_source=google&utm_medium=cpc&utm_campaign=error-log-google&utm_content={creative}&utm_term={keyword}` |
| Mock Review | `utm_source=google&utm_medium=cpc&utm_campaign=mock-review-google&utm_content={creative}&utm_term={keyword}` |
| Practice Platform | `utm_source=google&utm_medium=cpc&utm_campaign=practice-platform-google&utm_content={creative}&utm_term={keyword}` |
| Data Insights | `utm_source=google&utm_medium=cpc&utm_campaign=data-insights-google&utm_content={creative}&utm_term={keyword}` |
| Quant Practice | `utm_source=google&utm_medium=cpc&utm_campaign=quant-practice-google&utm_content={creative}&utm_term={keyword}` |
| Private Beta | `utm_source=google&utm_medium=cpc&utm_campaign=private-beta-google&utm_content={creative}&utm_term={keyword}` |

`{creative}` and `{keyword}` are Google ValueTrack tokens that auto-fill the served ad variant and the matched keyword, so `utm_content` and `utm_term` populate automatically. This satisfies the canonical UTM contract without manual tagging per ad.

---

## Landing-page mapping (theme -> URL)

| Theme / campaign | Landing page | Primary CTA on page | Why this page |
|---|---|---|---|
| GMAT study plan | `/gmat-study-plan` | Sign up (build plan from your official practice-exam score) | Highest-intent planning searcher; plan is built from the user's own baseline |
| GMAT error log template | `/error-log-template` | `lead_captured` (download template) then signup | Lead magnet; email-first is the right first ask here |
| GMAT mock review | `/gmat-mock-review` | Sign up | Searcher already takes mocks; mock-to-mock trend + per-topic analytics is the hook |
| GMAT practice platform | `/gmat-private-beta` | Sign up (free beta, no card) | Broad "platform" intent -> the beta offer page |
| GMAT Data Insights practice | `/gmat-data-insights-practice` | Sign up | Section-specific; DI is underserved by competitors |
| GMAT Quant practice | `/gmat-quant-practice` | Sign up | Section-specific; per-difficulty analytics is the differentiator |
| GMAT private beta | `/gmat-private-beta` | Sign up (free during beta) | Brand/offer-aware and "early access" searchers |

Each landing page already fires `landing_view` with `{page}` on load — confirm the prop matches the path so per-page conversion rates are separable.

---

## Campaigns, ad groups, and keywords

Keywords are **phrase** ("...") and **exact** ([...]). Add the campaign-level and global negatives (next section) before enabling.

### Campaign 1 — Study Plan -> `/gmat-study-plan`

**Ad group 1a: Study Plan**
- "gmat study plan"
- [gmat study plan]
- "gmat focus study plan"
- "gmat study schedule"
- "gmat focus edition study plan"
- "how to study for the gmat"
- "gmat prep plan"

**Ad group 1b: Study Plan by Timeline**
- "gmat study plan 3 months"
- "2 month gmat study plan"
- "gmat 1 month study plan"
- "gmat study plan template"

### Campaign 2 — Error Log -> `/error-log-template`

**Ad group 2a: Error Log Template**
- "gmat error log"
- [gmat error log]
- "gmat error log template"
- "gmat error log spreadsheet"
- "gmat mistake tracker"
- "gmat error tracker"

**Ad group 2b: Review / Mistake Process**
- "how to use a gmat error log"
- "gmat mistake notebook"
- "tracking gmat mistakes"

### Campaign 3 — Mock Review -> `/gmat-mock-review`

**Ad group 3a: Mock Review**
- "gmat mock review"
- [gmat mock review]
- "how to review gmat mocks"
- "gmat practice test review"
- "reviewing gmat practice tests"

**Ad group 3b: Mock Analysis / Trends**
- "gmat mock score analysis"
- "gmat practice test analytics"
- "gmat mock to mock improvement"
- "why is my gmat mock score not improving"

### Campaign 4 — Practice Platform -> `/gmat-private-beta`

**Ad group 4a: Practice Platform**
- "gmat practice platform"
- "gmat prep platform"
- "gmat practice questions online"
- "gmat question bank"
- "online gmat practice"

**Ad group 4b: Practice / Prep Tool**
- "gmat prep tool"
- "best gmat practice questions"
- "gmat focus practice questions"
- "adaptive gmat practice"

### Campaign 5 — Data Insights -> `/gmat-data-insights-practice`

**Ad group 5a: Data Insights Practice**
- "gmat data insights practice"
- [gmat data insights practice]
- "data insights gmat questions"
- "gmat focus data insights practice"
- "gmat di practice"

**Ad group 5b: DI Question Types**
- "gmat data sufficiency practice"
- "multi source reasoning gmat practice"
- "gmat table analysis practice"
- "two part analysis gmat practice"

### Campaign 6 — Quant Practice -> `/gmat-quant-practice`

**Ad group 6a: Quant Practice**
- "gmat quant practice"
- [gmat quant practice]
- "gmat focus quant practice"
- "gmat quant questions"
- "gmat problem solving practice"

**Ad group 6b: Quant by Difficulty/Topic**
- "hard gmat quant questions"
- "gmat 700 level quant"
- "gmat quant by topic"
- "improve gmat quant score"

### Campaign 7 — Private Beta -> `/gmat-private-beta`

**Ad group 7a: Private Beta / Early Access**
- "gmat prep beta"
- "new gmat prep platform"
- "gmat study app free beta"
- "gmat focus prep app"

**Ad group 7b: Free-to-use Prep (qualified)**
- "free gmat practice platform"
- "gmat practice no card"
- "gmat prep free trial"

> Note on the "free" terms in 7b: these are intentionally allowed **only** here because the beta is genuinely free (no card). They are globally negated everywhere else (see below). Monitor 7b closely — if it pulls low-intent freebie traffic that never signs up, pause it.

---

## Negative keywords

Add as a **shared negative keyword list** applied to all campaigns, plus a couple of campaign-specific ones.

**Global shared list — "ZG Master Negatives":**

```
# Free / freebie intent (except where explicitly targeted in Campaign 7b)
free
freebie
cracked
crack
torrent
pdf download free
free pdf
leaked

# Jobs / careers / salary (wrong intent entirely)
jobs
job
career
careers
salary
salaries
hiring
recruiter
internship
vacancy

# Wrong test / wrong exam
gre
gre vs gmat
lsat
sat
act
mcat
toefl
ielts
cat exam
ssat
nmat
executive assessment

# Already-have-a-provider / competitor brand terms (avoid bidding wars at $500 budget)
manhattan prep
kaplan
princeton review
magoosh
ttp
target test prep
e-gmat
gmat club
veritas
experts global

# Login / account / existing-customer
login
log in
sign in
mba.com login
official guide answers
answer key

# Low-value informational
what is gmat
gmat full form
gmat meaning
gmat exam fee
gmat exam date
gmat registration
gmat eligibility
gmat syllabus pdf
is gmat hard

# Affiliation/endorsement traps (don't want to appear for "official" intent)
official gmat
gmac
mba.com practice
```

**Campaign-specific negatives:**
- Add `template free` and `excel free` as negatives on **all** campaigns **except** Campaign 2 (error log) — there, a "template" searcher is on-page-intent and the email-gated download is the conversion.
- On Campaigns 1, 3, 4, 5, 6: also negate `free` (it lives in the global list, but double-check the global list is attached; only Campaign 7 should reach freebie intent, and even there only via its specific qualified keywords).

> Implementation note: because `free` is globally negated, Campaign 7b's "free" keywords will be **blocked** if the global list is attached as-is. Two clean options: (a) keep `free` in the global list and **detach** the global list from Campaign 7 only, relying on Campaign 7's own tighter negatives; or (b) remove standalone `free` from the global list and instead negate the specific freebie phrases (`free pdf`, `cracked`, `torrent`, etc.) globally while allowing the qualified "free ... beta / no card" terms in 7b. Option (a) is simpler — use it.

Review the **Search Terms report** weekly and push new junk terms into the global list.

---

## Responsive Search Ads — copy sets

Each campaign gets its own RSA. Provide ~10-12 headlines (30 char max each) and ~4 descriptions (90 char max each) per RSA; Google assembles them. Below are **four** complete, compliant copy sets. Pin nothing at launch except where noted, so Google can learn; pin the brand headline to position 1 only if you want guaranteed branding.

All sets obey: no affiliation, no guarantees, no diagnostic/score-band language, founder-claim only about the founder. Character counts are within Google limits.

---

### Copy Set A — Study Plan (Campaign 1)
Landing page: `/gmat-study-plan`

**Headlines (<=30 chars):**
1. GMAT Study Plan, Built to Fit
2. Plan Around Your Real Score
3. From Your Practice-Exam Score
4. Zakarian GMAT
5. Adaptive GMAT Study Plan
6. 62 Chapters, One Clear Path
7. Quant, Verbal & Data Insights
8. Daily Spaced-Review Queue
9. Free During Private Beta
10. Built by a 735 Scorer
11. No Card to Start
12. Stop Guessing What to Study

**Descriptions (<=90 chars):**
1. Build a GMAT study plan from your own official practice-exam score. Free in beta.
2. 62 chapters across Quant, Verbal and Data Insights, with a daily review queue.
3. Made by Adam Zakarian, who self-studied from 565 to 735. Start free, no card.
4. Per-topic and per-difficulty analytics so you study the weak spots, not the easy ones.

---

### Copy Set B — Error Log Template (Campaign 2)
Landing page: `/error-log-template`

**Headlines (<=30 chars):**
1. Free GMAT Error Log Template
2. Track Every GMAT Mistake
3. 6 Tags for Why You Missed It
4. Download the Error Log
5. Conceptual? Careless? Misread?
6. Turn Mistakes Into Points
7. Zakarian GMAT
8. Built by a 735 Scorer
9. The Error Log That Scales
10. Stop Repeating GMAT Errors
11. Free Template, No Card
12. Review Smarter, Not Longer

**Descriptions (<=90 chars):**
1. A clean GMAT error-log template with 6 tags: Conceptual, Careless, Time, Misread, more.
2. Download free, then log mistakes inside the full platform during the private beta.
3. The same error-tracking system Adam Zakarian used self-studying from 565 to 735.
4. Tag why you missed each question, then drill the pattern. Free to download.

> Note: "Free template, no card" is accurate here (the template is a free download). The `lead_captured` event fires on the email-gated download; this is the only set where lead is the first ask.

---

### Copy Set C — Mock Review (Campaign 3)
Landing page: `/gmat-mock-review`

**Headlines (<=30 chars):**
1. Review GMAT Mocks Properly
2. See Your Mock-to-Mock Trend
3. Why Your Mock Score Stalls
4. Per-Topic Mock Analytics
5. Zakarian GMAT
6. Full-Length Mocks + Analysis
7. Turn Mocks Into a Study Plan
8. Built by a 735 Scorer
9. Per-Difficulty Breakdown
10. Free During Private Beta
11. Find the Pattern in Misses
12. Mocks You Actually Learn From

**Descriptions (<=90 chars):**
1. Full-length GMAT mocks with mock-to-mock trend and per-topic, per-difficulty analytics.
2. See exactly where points leak across sections, then feed it into your study plan.
3. A reviewing system from Adam Zakarian, who self-studied from 565 to 735. Free in beta.
4. Stop scoring mocks and moving on. Review the misses that move your score. No card.

---

### Copy Set D — Practice Platform / Quant / Data Insights / Private Beta (Campaigns 4-7)
Landing pages: `/gmat-private-beta`, `/gmat-quant-practice`, `/gmat-data-insights-practice`
(Use as a base; swap headlines 1-3 for the section-specific lines noted under each campaign.)

**Headlines (<=30 chars):**
1. GMAT Practice That Adapts
2. Quant, Verbal, Data Insights
3. A Large GMAT Practice Bank
4. Zakarian GMAT
5. Per-Difficulty Analytics
6. Free During Private Beta
7. Built by a 735 Scorer
8. No Card to Start
9. Daily Spaced-Review Queue
10. 6-Tag Error Log Built In
11. Drill Your Weak Topics
12. 62 Structured Chapters

**Descriptions (<=90 chars):**
1. A large GMAT practice bank with a 6-tag error log and daily spaced review. Free in beta.
2. Quant, Verbal and Data Insights, 62 chapters, with per-topic and per-difficulty analytics.
3. Built solo by Adam Zakarian, who self-studied from 565 to 735. Start free, no card.
4. Practice, tag your misses, and let the review queue resurface them. Free during beta.

**Section swaps:**
- **Campaign 5 (Data Insights):** swap H1-H3 for `GMAT Data Insights Practice`, `Data Sufficiency & MSR Drills`, `Master the DI Section`.
- **Campaign 6 (Quant):** swap H1-H3 for `GMAT Quant Practice Bank`, `700-Level Quant Drills`, `Quant by Topic & Difficulty`.
- **Campaign 7 (Private Beta):** swap H1-H3 for `Join the GMAT Prep Beta`, `Free to Use, No Card`, `Early Access Study Platform`.

---

## Budget recommendation (solo founder, lean)

This is a beta with a free primary offer; the goal is **signups and email leads at a sane cost**, not revenue yet. Spend small, read data, then concentrate.

**Phase 1 — Learn (weeks 1-3): ~$20/day total**
- Don't split $20 across seven campaigns (each starves and never exits learning). Run **only the two or three highest-intent campaigns** first:
  - Error Log (`/error-log-template`) — cheap clicks, clean lead-magnet conversion via `lead_captured`.
  - Study Plan (`/gmat-study-plan`) — high-intent, strong signup fit.
  - Private Beta (`/gmat-private-beta`) — direct offer.
- Roughly $7/day each. Maximize Clicks with a ~$3 CPC cap.

**Phase 2 — Sort (weeks 4-6): ~$30-40/day**
- Add Mock Review, Data Insights, Quant once Phase 1 shows which themes convert.
- Move any campaign with logged conversions to **Maximize Conversions**.
- Kill or pause keywords with high spend and zero `signup`/`lead_captured`.

**Phase 3 — Concentrate (week 7+): hold ~$30-50/day, reallocate**
- Pour budget into the 2-3 campaigns with the lowest cost per `signup`. Pause the rest.
- A realistic solo-founder ceiling here is **$300-500/month** until signups prove the funnel; scale only against a real cost-per-signup you're comfortable with.

Guardrails: set a campaign daily cap, check spend daily for the first week (search can overspend on bad terms fast), and never let a single campaign's daily budget exceed what one bad day can afford to waste.

---

## Launch checklist

**Pre-launch (tracking + pages):**
- [ ] Set `NEXT_PUBLIC_GOOGLE_TAG_ID` so the Google tag activates (events are dormant without it).
- [ ] Confirm `signup`, `lead_captured`, `founding_reserve`, `pricing_view` fire correctly (test each path).
- [ ] Import `signup` as **Primary** conversion; set as optimization goal.
- [ ] Import `lead_captured` as **Secondary**; `founding_reserve` as observe.
- [ ] Verify `AttributionCapture` merges UTMs into events end-to-end (check a real test event for utm_source=google).
- [ ] Confirm each landing page fires `landing_view` with the correct `{page}` prop.
- [ ] Load every landing page on mobile; confirm fast load and a single clear CTA.

**Build (campaigns):**
- [ ] Create 7 single-theme Search campaigns, Search-only network, partners + display OFF.
- [ ] Set locations, language (English), and ~$3 CPC-capped Maximize Clicks bidding.
- [ ] Add ad groups + phrase/exact keywords per the structure above (no broad match).
- [ ] Apply the per-campaign final-URL suffix (UTM template) to each campaign.
- [ ] Attach the "ZG Master Negatives" shared list to all campaigns; detach from Campaign 7 (the `free` exception).
- [ ] Add campaign-specific negatives (`template free` everywhere except Campaign 2).
- [ ] Build one RSA per campaign from Copy Sets A-D; confirm Ad Strength is "Good" or better.
- [ ] Add sitelink, callout, and structured-snippet extensions (e.g., callouts: "Free during beta," "No card," "62 chapters," "6-tag error log").

**Compliance pass (before enabling):**
- [ ] Re-read every headline/description against the compliance guardrails. No affiliation, no guarantees, no diagnostic/score-band language, founder-claim only about the founder.
- [ ] Confirm no ad implies GMAC/mba.com endorsement.

**Post-launch (first 2 weeks):**
- [ ] Check spend daily; watch for runaway terms.
- [ ] Review the Search Terms report every 2-3 days; push junk into the global negative list.
- [ ] Once a campaign logs conversions, switch it to Maximize Conversions.
- [ ] Weekly: compare cost per `signup` and per `lead_captured` across campaigns; reallocate budget to winners; pause losers.

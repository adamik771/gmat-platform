> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# Reddit Ads Setup

Paid acquisition plan for Zakarian GMAT (zakariangmat.com) on Reddit's self-serve ads platform. This is the run-book for standing up, launching, and reading the campaign. Everything here is built to be honest, useful to the reader, and compliant.

This document covers: targeting, campaign structure, ad copy, landing mapping, UTM tagging, conversion goals, budget, and a launch checklist. It assumes the tracking infrastructure that already exists in the app (`trackEvent()`, `AttributionCapture`, the conversion events) and does not invent new infra.

---

## 0. Guardrails (read first, do not violate)

These bind every ad, every targeting choice, and every landing page in this plan.

- **No GMAC/GMAT affiliation.** "GMAT" and "GMAT Focus Edition" are GMAC trademarks, used here only nominatively to say what the product helps with. Never imply we are affiliated with, endorsed by, or sponsored by GMAC, the GMAT, GMAT Focus, or mba.com. Reddit's ad review will look for this; so will the subreddit audiences, who are sophisticated.
- **No score guarantees.** Never promise a score, a point gain, or a percentile to the prospect.
- **No diagnostic / score-band claims.** The platform has no in-app diagnostic. The study-plan baseline is the user's own official mba.com practice exam. Do not write "free diagnostic," "30-question test," "readiness band," "score band," "find out your level," "typically lands," or "most students see/improve." None of it.
- **Only one performance claim is allowed:** the founder's own 565 -> 735 climb (top 1%), always attributed to him personally and never generalized to other students or used as an implied promise.
- **No fake urgency, no fabricated testimonials, no invented student counts.** The beta is genuinely free with no card; say exactly that and nothing more.
- **Reddit-native tone.** Reddit punishes ads that read like ads. Copy is helpful-first, specific, and written like a 735-scorer actually talking. No hype words, no buzzwords, no exclamation-point energy.

If any ad variant cannot be written within these rules, it does not run.

---

## 1. Why Reddit (and where it fits)

Reddit is the one paid channel where high-intent GMAT prospects already gather in a single, searchable, opt-in community (r/GMAT). Unlike search, the user is not actively querying — so the job of the ad is to be useful enough that a prepping student stops scrolling, not to intercept a transaction. That makes Reddit a strong fit for the **secondary conversion (`lead_captured`, opt-in email via a lead magnet)** and a viable but harder fit for the **primary conversion (`signup`)**.

Reddit is best treated as a **top-and-mid-funnel channel**: lead magnets and genuinely useful tools first, beta signup second, founding reservation last (and mostly via retargeting/email, not the cold ad).

---

## 2. Reddit self-serve specifics (platform facts that shape the plan)

Set expectations to the platform, not to how Google or Meta behave.

- **Account:** built at ads.reddit.com (self-serve). Separate from the organic Reddit account. Use a brand identity, not a personal one, for the advertiser account.
- **Objectives:** the self-serve objective picker matters. Use **Traffic** (optimize for link clicks) for cold prospecting in the early phase, because the Reddit Pixel needs conversion volume before **Conversions** optimization is reliable. Move an ad group to the **Conversions** objective only after it has accumulated enough pixel-tracked actions to optimize on.
- **Reddit Pixel vs. our stack:** Reddit has its own Conversions/Pixel system (Reddit Pixel + optional Conversions API) that is *separate* from our `trackEvent()` -> Vercel Analytics / Meta Pixel / Google tag stack. To optimize Reddit campaigns toward signups, the Reddit Pixel must be installed and a Signup/Lead event mapped. **This is the one piece of new tracking Reddit requires** — note it for the owner as an action item; it does not replace or touch the existing `trackEvent()` infra, it sits alongside it. Our own UTM capture (`AttributionCapture`) and `trackEvent()` conversions remain the source of truth for attribution; the Reddit Pixel exists only so Reddit's optimizer has a signal.
- **Ad formats:** single-image, single-video, and carousel feed ads, plus text/conversation-style "Free-form" posts that look like a Reddit post with a promoted label. **Free-form / conversation ads are the highest-performing format for this audience** because they match the long-form, helpful Reddit voice. Lead with those.
- **Comments are on by default.** A promoted post can be commented on. This is an asset, not a risk, *if* the founder is willing to reply honestly in-thread — but it means the ad must be defensible to a skeptical r/GMAT reader. Plan to monitor and reply. If comment monitoring is not possible during a flight, comments can be disabled per ad, but leaving them on (and engaging) outperforms.
- **Targeting levers:** community targeting (specific subreddits), interest targeting (Reddit's interest categories), keyword targeting (contextual, against post/community text), plus geo, device, and time. Community targeting is the sharpest lever for this niche.
- **Review:** every ad goes through Reddit ad-policy review. Education claims and anything that looks like a guarantee draw scrutiny. Our compliance guardrails (Section 0) are also what keeps us inside Reddit policy.
- **Minimums:** self-serve has a low daily minimum per ad group (single dollars), so the small budget here is viable. Bidding can be auto or manual CPC/CPM; start auto.

---

## 3. Targeting

Three layers, in priority order. Start narrow (communities), expand only if delivery is starved.

### 3a. Community targeting (primary — start here)

Target the communities where serious test-takers already are. Honest, on-topic, and within Reddit policy (these are public communities; we are not posting organically as ads, we are buying placement against relevant context).

| Subreddit | Why | Notes |
|---|---|---|
| **r/GMAT** | The core audience: serious, mostly long-form, tolerant of substance | Primary spend. Sophisticated readers — copy must be real |
| **r/MBA** | Applicants for whom GMAT is a step, broader funnel | Mid-funnel; lead with the goal (admit), not the test mechanics |
| **r/businessschool** | Applicant-adjacent, slightly earlier in the journey | Lower intent; small allocation |
| **r/GradSchool** | Spillover of test-prep mindset, broad | Test only; expect lower relevance |
| **r/consulting** / **r/FinancialCareers** | Career-driven audiences who often need the GMAT for an MBA/MiM | Only if r/GMAT delivery is exhausted; expect weaker fit |

Deliberately **avoid** buying against tiny or heavily self-promotion-policed prep subs (e.g. the smaller GMATPrep-style communities) where a promoted post reads as intrusive — the organic-post playbook already notes those are policed harder. Ads belong in the larger, ad-supported communities.

### 3b. Interest targeting (secondary — for scale)

Reddit interest categories to layer when community-only delivery is too thin:

- Education / Test Prep
- Business & Finance
- Careers / Job Search (proxy for MBA-track professionals)
- Higher Education / Graduate School

Interest targeting is broader and lower-intent than community targeting. Keep it in its own ad group so its weaker performance does not contaminate the community ad group's data.

### 3c. Keyword targeting (contextual — search-intent overlap)

Reddit keyword targeting is contextual (matches post/community language), not query-based like Search. Use it to bias delivery toward the high-intent themes the site already ranks landing pages for:

`gmat study plan`, `gmat error log`, `gmat mock review`, `gmat practice questions`, `gmat data insights`, `gmat quant`, `gmat focus edition`, `gmat plateau`, `gmat 700`, `gmat self study`

Map keyword themes to the matching landing page (Section 5) so the contextual promise and the destination line up.

### 3d. Geo / device / schedule

- **Geo:** English-language priority markets first (US, Canada, UK, India, Western Europe). India is a very large GMAT market and cost-efficient on Reddit, but watch lead quality and intent separately from US in reporting — keep US and India in separate ad groups if budget allows, so CPL is not averaged across very different costs.
- **Device:** all devices. Reddit skews mobile; ensure the landing pages are mobile-clean (they are responsive in the app, but verify the lead-magnet forms specifically).
- **Schedule:** no dayparting at this budget; let it run continuously and read results weekly.

---

## 4. Campaign structure

Keep it flat and legible at a small budget. One campaign per primary objective, ad groups split by the lever you most want to read.

```
Campaign A — Prospecting / Lead Magnets (objective: Traffic)
  Ad Group A1 — r/GMAT (community)            -> /error-log-template
  Ad Group A2 — r/GMAT (community)            -> /gmat-study-plan
  Ad Group A3 — r/MBA + r/businessschool      -> /gmat-private-beta
  Ad Group A4 — Interest: Test Prep/Education -> /error-log-template
  (each ad group runs 2-3 free-form ad variants for creative testing)

Campaign B — Practice-Intent (objective: Traffic, later Conversions)
  Ad Group B1 — keyword: data insights        -> /gmat-data-insights-practice
  Ad Group B2 — keyword: quant                 -> /gmat-quant-practice
  Ad Group B3 — keyword: mock review           -> /gmat-mock-review

Campaign C — Retargeting (handled in Meta, not Reddit)
  Reddit's strength is the cold reach; warm retargeting + founding-reserve
  pushes run through the existing Meta Pixel retargeting (utm_medium=retargeting),
  not duplicated here. Reddit's pixel-based retargeting can be added later once
  Reddit Pixel audiences have size.
```

Why this shape:
- **Lead magnets lead** (Campaign A). The error-log template and the free tools are the most honest, lowest-friction, most Reddit-appropriate offers, and they map to our SECONDARY conversion (`lead_captured`) which is realistic for cold social traffic.
- **Practice-intent is its own campaign** (B) so its tighter, higher-intent keyword traffic is read separately from broad community prospecting.
- **Founding/pricing is not a cold Reddit pitch.** `founding_reserve` and `pricing_view` are warm-audience events; we earn them after the free value, via beta usage and email, not by pricing-blasting strangers.

Start **all** ad groups on the **Traffic** objective. Promote an ad group to **Conversions** only after the Reddit Pixel has logged enough signups/leads from it to optimize.

---

## 5. Landing mapping

Match each ad's promise to the page that delivers exactly that. No bait-and-switch — the ad and the page make the same promise.

| Ad theme | Landing page | Primary CTA on page | Conversion target |
|---|---|---|---|
| Error log / review rigor | `/error-log-template` | Download template (opt-in email) | `lead_captured` |
| Study plan from your own practice exam | `/gmat-study-plan` | Build free study plan / start beta | `lead_captured` -> `signup` |
| Free private beta, full access, no card | `/gmat-private-beta` | Start free beta | `signup` |
| Mock review / mock-to-mock trend | `/gmat-mock-review` | See how mock review works / start beta | `signup` |
| Data Insights practice | `/gmat-data-insights-practice` | Practice DI free in beta | `signup` |
| Quant practice | `/gmat-quant-practice` | Practice Quant free in beta | `signup` |
| Pricing (warm only, not cold ads) | `/pricing` | Reserve founding price | `founding_reserve` |
| Referral (existing users only) | `/refer` | Share referral link | `referral_click` |

Notes:
- Every landing page already fires `landing_view` with `{page}` on load via `trackEvent()`; `AttributionCapture` stamps the first-touch UTM onto it and every downstream event. Nothing new to build for our own attribution — the UTMs below are what make Reddit traffic legible in that data.
- `/pricing` and `/refer` are **not** destinations for cold Reddit ads. Pricing is reached after value; referral is an existing-user loop.

---

## 6. UTM tagging

Use the canonical UTM scheme. Every Reddit ad link is tagged so `AttributionCapture` -> `trackEvent()` can attribute the whole funnel back to the exact ad variant.

Fixed for all Reddit ads:
- `utm_source=reddit`
- `utm_medium=paid-social`

Per-campaign:
- `utm_campaign=<topic>-reddit` — e.g. `error-log-reddit`, `study-plan-reddit`, `private-beta-reddit`, `data-insights-reddit`, `quant-reddit`, `mock-review-reddit`

Per-creative:
- `utm_content=<ad-variant>` — short, stable slugs, e.g. `freeform-plateau-a`, `freeform-errorlog-b`, `image-di-a`

`utm_term` is for search keywords only; **omit it on Reddit** (Reddit keyword targeting is contextual, not a user query, so there is no honest "term" to record). Leaving it empty keeps the data clean and the convention intact.

Example tagged URLs:

```
https://zakariangmat.com/error-log-template?utm_source=reddit&utm_medium=paid-social&utm_campaign=error-log-reddit&utm_content=freeform-errorlog-a

https://zakariangmat.com/gmat-study-plan?utm_source=reddit&utm_medium=paid-social&utm_campaign=study-plan-reddit&utm_content=freeform-plan-a

https://zakariangmat.com/gmat-private-beta?utm_source=reddit&utm_medium=paid-social&utm_campaign=private-beta-reddit&utm_content=freeform-beta-a

https://zakariangmat.com/gmat-data-insights-practice?utm_source=reddit&utm_medium=paid-social&utm_campaign=data-insights-reddit&utm_content=image-di-a
```

Keep a slug registry (one row per ad) so `utm_content` values stay unique and don't collide across flights.

---

## 7. Ad copy

Reddit copy is long-form-friendly and allergic to marketing voice. These are written to read like a person who scored 735 talking to someone who is stuck — useful even if they never click. Free-form (conversation) ads first; image ads as scroll-stoppers.

Every ad below is compliant: no affiliation, no guarantee, no diagnostic language, founder result attributed to the founder only.

### Ad 1 — Free-form, error log (-> /error-log-template) [primary]

**Headline:** The GMAT error log that actually moved my score (free template)

**Body:**
I plateaued at 565 for two months doing more questions every week. What finally moved me was reviewing the ones I got wrong instead of grinding new ones. I started tagging every miss by *why* I missed it — Conceptual, Careless, Time Pressure, Misread, Strategy, Other — and after a few weeks the same three traps were behind most of my errors.

I turned the spreadsheet I used into a clean template. It's free, no card. If you've been flat for a while, the fastest thing you can do is start logging and sort by mistake type.

(For full disclosure: I built a prep platform around this method, but the template stands on its own — grab it and ignore the rest if you want.)

**CTA:** Get the free template

---

### Ad 2 — Free-form, plateau / study plan (-> /gmat-study-plan)

**Headline:** If your GMAT score has been flat for 6+ weeks, it's usually one of three things

**Body:**
After climbing from 565 to 735, the pattern I see most on this sub: people aren't short on content, they're short on review. Three diagnoses, in order: (1) no error log, (2) a log they never sort, (3) sorting but never drilling the dominant pattern.

I built a free study plan tool that takes the score from your own official mba.com practice exam and turns it into a weekly plan around exactly this loop — drill, log, aggregate, drill the pattern, spaced review. Free during the private beta, no card.

**CTA:** Build your free plan

---

### Ad 3 — Free-form, private beta (-> /gmat-private-beta)

**Headline:** A GMAT Focus prep platform built solo by a 565 -> 735 self-studier (free private beta)

**Body:**
I'm a non-native English speaker who self-studied from 565 to 735 (top 1%). I couldn't find a tool that did review the way I'd taught myself to, so I built one: 62 chapters across Quant, Verbal, and Data Insights, a large practice bank, a 6-tag error log, a daily spaced-review queue, full-length mocks with mock-to-mock trend, and per-topic and per-difficulty analytics.

It's free to use during a private beta right now — no card. I'm looking for serious test-takers to use it and tell me where it's wrong.

**CTA:** Start the free beta

---

### Ad 4 — Free-form, Data Insights (-> /gmat-data-insights-practice)

**Headline:** Data Insights is where a lot of Focus scores quietly leak points

**Body:**
DI rewards a specific habit: deciding what the question actually requires before you compute. Half my early DI misses were me calculating exact values when the question only needed a comparison — two minutes burned for nothing. The fix was practicing DI by question type and tagging the misreads.

There's free DI practice in the beta, organized by type and difficulty with the same error-tagging built in. No card.

**CTA:** Practice DI free

---

### Ad 5 — Free-form, mock review (-> /gmat-mock-review)

**Headline:** Most people take mocks to get a number. The number isn't the point.

**Body:**
A mock is worth what you extract from reviewing it. I treated every mock as a data-collection run: log every miss by type, compare against the last mock, and look at what's trending — am I fixing the patterns or just rotating through new ones? The mock-to-mock trend is where you see whether your review is actually working.

The platform does this review layer for you (per-section, per-difficulty, mock-to-mock). Free in the beta, no card.

**CTA:** See how mock review works

---

### Ad 6 — Single image (-> /error-log-template) [scroll-stopper variant]

**On-image text:** 6 tags. Every wrong answer. That's the whole method.
Conceptual / Careless / Time Pressure / Misread / Strategy / Other

**Headline:** The free GMAT error-log template I used to get unstuck

**Body:** Built from the spreadsheet that took me from a 565 plateau to 735. Free, no card.

**CTA:** Get the template

---

**Copy rules for any new variant:**
- Lead with a real, specific GMAT insight the reader can use without clicking.
- Disclose the founder relationship plainly; do not hide that it's an ad.
- "565 to 735" is always the founder's own result. Never "you'll" / "students."
- Never say "diagnostic," "find your level," "score band," or imply a guarantee.
- Say "GMAT Focus Edition" descriptively; never imply GMAC endorsement.

---

## 8. Conversion goals

Tie every campaign to one of the existing `trackEvent()` conversions. (Primary = `signup`; Secondary = `lead_captured`.)

| Campaign | Reddit objective | Optimize toward | Our success event | Secondary read |
|---|---|---|---|---|
| A — Lead magnets | Traffic -> Conversions* | Lead / opt-in | `lead_captured` | `signup` |
| B — Practice-intent | Traffic -> Conversions* | Signup | `signup` | `lead_captured` |
| (warm, via Meta) | n/a | Founding reserve | `founding_reserve` | `pricing_view` |

\* Promote to the Conversions objective only after the Reddit Pixel has enough events to optimize.

**Funnel we expect from cold Reddit traffic:** `landing_view` -> `lead_captured` (email opt-in on a lead magnet) -> `signup` (beta account, Meta CompleteRegistration) -> later, via email nurture and beta usage, `pricing_view` -> `founding_reserve`. Reddit's realistic job is the first two steps; the back half is earned by the product and the email follow-up, not the cold ad.

**Reporting cadence:** read weekly. Two numbers per ad group decide its fate:
1. **Cost per `lead_captured`** (from our attribution, segmented `utm_source=reddit`).
2. **Lead -> `signup` rate** by `utm_content`.
An ad group with cheap clicks but no leads/signups gets paused regardless of CTR. A pretty CTR with no downstream event is not a win.

---

## 9. Budget

Sized to a small, deliberate test, not a scale push. The goal of the first flight is a clean read on cost-per-lead and lead-to-signup by ad group, not volume.

**Phase 1 — Validation (first ~2 weeks):**
- Total: **~$20/day** (~$280 over 14 days).
- Split: ~60% Campaign A (lead magnets), ~40% Campaign B (practice-intent).
- All ad groups on Traffic objective, auto-bid.
- Concentrate spend in r/GMAT community targeting; keep interest/keyword groups small until they prove out.

**Phase 2 — Read & reallocate (~week 3):**
- Kill any ad group above an unacceptable cost per `lead_captured` (set the threshold from Phase 1 medians).
- Shift budget to the 1-2 ad groups producing leads at the best cost.
- Promote those to the Conversions objective once Reddit Pixel volume allows.

**Phase 3 — Scale the winner (only if the unit economics work):**
- Raise daily budget on proven ad groups in steps (no more than ~30-50% increases so the optimizer isn't reset).
- Layer geo splits (US vs. India) into separate ad groups so CPL is not averaged across very different cost markets.

Hard rules:
- Do not scale an ad group that has no downstream `lead_captured`/`signup`, no matter how cheap the clicks.
- Keep a single source of truth for spend vs. our own attributed conversions (Reddit's reported clicks will not equal our `landing_view` count — trust our `trackEvent()` numbers for conversion attribution, Reddit's for delivery/cost).

---

## 10. Launch checklist

Pre-flight:
- [ ] Self-serve advertiser account created at ads.reddit.com under the brand identity; billing set.
- [ ] Reddit Pixel installed site-wide; a Lead event and a Signup event mapped (note: this is the one new tracking dependency — flag to owner; it sits alongside, and does not replace, the existing `trackEvent()` stack).
- [ ] Reddit Pixel verified firing on `/gmat-private-beta`, `/error-log-template`, and `/gmat-study-plan`.
- [ ] Confirm our own `trackEvent()` still fires `landing_view`, `lead_captured`, `signup` on each target page (independent of Reddit's pixel).
- [ ] All landing pages QA'd on **mobile** (Reddit skews mobile): lead-magnet form, beta signup, CTA above the fold.
- [ ] Every ad URL UTM-tagged per Section 6; slugs logged in the registry; no duplicate `utm_content`.
- [ ] Click-test one tagged URL end to end; confirm `AttributionCapture` stamps `utm_source=reddit` onto `landing_view`.

Compliance review (every ad):
- [ ] No GMAC/GMAT/Focus/mba.com affiliation implied; trademark use is nominative only.
- [ ] No score guarantee, no point/percentile promise.
- [ ] No "diagnostic," "free diagnostic," "30-question," "readiness/score band," "find your level," "typically lands," "most students" language.
- [ ] Founder 565 -> 735 result attributed to the founder personally; not generalized.
- [ ] "Free during private beta, no card" stated accurately; no fake urgency, no invented testimonials or student counts.
- [ ] Lead-magnet offers (error-log template, converter, calculator, sample chapters) match what the landing page actually delivers.

Build:
- [ ] Campaign A (Traffic) and Campaign B (Traffic) built with the ad-group split in Section 4.
- [ ] 2-3 free-form ad variants per ad group; at least one image variant in the lead-magnet groups.
- [ ] Community targeting set to r/GMAT (primary) + the approved list; interest and keyword groups isolated.
- [ ] Geo set to English-priority markets; US and India separable in reporting.
- [ ] Comments enabled on free-form ads **only if** the founder can monitor and reply honestly in the first hours; otherwise disable per ad.
- [ ] Daily budget set to Phase 1 (~$20/day), auto-bid.

Launch + first 72 hours:
- [ ] Submit for Reddit ad-policy review; allow time for approval.
- [ ] On approval, monitor comment threads on free-form ads; reply specifically and honestly (the same engagement discipline as the organic playbook — answer real questions, don't repeat the plug).
- [ ] Confirm conversions are landing in our `trackEvent()` data tagged `utm_source=reddit` within the first day.
- [ ] Pause any ad disapproved for a claims/affiliation reason and fix copy before resubmitting; do not argue policy.

Week 1 review:
- [ ] Pull cost per `lead_captured` and lead -> `signup` by `utm_content` from our attribution.
- [ ] Pause losers, document why, reallocate to winners (Phase 2).
- [ ] Decide whether unit economics justify Phase 3 scaling or whether Reddit stays a small always-on lead-magnet channel.

---

## 11. What this plan deliberately does not do

- **No organic astroturfing.** This is paid placement, clearly labeled as promoted. The organic r/GMAT post is a separate, founder-written asset (see `reddit-r-gmat-stuck-score.md`) and is not duplicated or disguised here. No fake accounts, no automated DMs, no upvote manipulation.
- **No cold pricing pitch.** Founding-price and referral pushes are warm-audience plays via Meta retargeting and email, not cold Reddit ads.
- **No new attribution infra invented.** We reuse `trackEvent()`, `AttributionCapture`, and the existing conversion events. The Reddit Pixel is the only added dependency, and only because Reddit's optimizer needs its own signal.

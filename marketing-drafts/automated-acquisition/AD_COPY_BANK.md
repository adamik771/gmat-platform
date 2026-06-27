# Ad Copy Bank

Reusable, compliance-checked ad copy for Zakarian GMAT (zakariangmat.com). Organized by channel and by theme. Built for the existing landing pages and `trackEvent()` conversion funnel. Edit headlines/descriptions here, not inline in ad platforms.

---

## BANNED PHRASES — read before writing or shipping any variant

Never use, paraphrase, or imply any of the following:

**Affiliation / trademark**
- No "official", "GMAC", "by mba.com", "GMAT-approved/endorsed/partner/sponsored", or anything implying a relationship with GMAC, mba.com, or the GMAT/GMAT Focus program. GMAT and GMAT Focus are GMAC trademarks; we use them nominatively only (e.g. "GMAT Focus prep"), never as a brand association.
- Always allow the reader to infer we are an independent third party.

**Score guarantees / outcome promises**
- No "guaranteed", "guarantee your score", "score increase guaranteed", "+100 points", "hit 700+", "we'll raise your score", "money-back if you don't improve".
- No generalized student-outcome claims: NOT "most students improve", "students typically see", "average +X points", "students land in the X band".

**Diagnostic / score-band language (the platform has NO in-app diagnostic)**
- No "free diagnostic", "diagnostic test", "30-question diagnostic", "placement test", "readiness band", "score band", "typically lands", "find your starting score", "we'll tell you your level".
- The baseline is always the user's OWN official mba.com practice exam, entered by them. Phrase as "your official practice-exam score" or "your baseline" — never as something we measure or assign.

**The only allowed performance claim**
- The founder's own climb: 565 → 735, 100th percentile on his official score report. Always attributed to Adam personally. Never generalized ("you can too", "replicate his score") as a promise.

**Other**
- No fabricated urgency ("only 3 spots left", fake countdowns), no invented student counts, no fake testimonials, no fake reviews.
- No emojis anywhere.
- Founding-price facts must stay exact: founding $399 anchored to the $599 mentorship tier; referral = friend gets founding price, referrer gets $50. Free during private beta, no card.

**Quick self-check for every variant:** Does it (1) avoid implying GMAC affiliation, (2) avoid any guarantee or generalized outcome, (3) avoid claiming we measure/diagnose the user's level, (4) keep the 565→735 claim about Adam only? If all four pass, it's clear.

---

## GLOBAL UTM + TRACKING CONVENTIONS

Append to every destination URL. Conversion goal noted per theme.

- `utm_source` = `google` | `reddit` | `linkedin` | `meta`
- `utm_medium` = `cpc` (search) | `paid-social` (Reddit/LinkedIn) | `retargeting` (Meta)
- `utm_campaign` = `<topic>-<channel>` (e.g. `error-log-google`, `study-plan-reddit`)
- `utm_content` = `<ad-variant>` (e.g. `hl-tag-mistakes`, `card-founder-story`)
- `utm_term` = `<keyword>` (search only)

First-touch UTM is stored by `AttributionCapture` and merged into every `trackEvent()` call. Primary conversion = `signup` (Meta CompleteRegistration); secondary = `lead_captured` (opt-in email). Landing pages fire `landing_view {page}` on load. Do not invent new events or params.

**Landing page per theme:**
- Error log → `/error-log-template` (lead magnet, optimize for `lead_captured`)
- Study plan → `/gmat-study-plan`
- Mock review → `/gmat-mock-review`
- Data Insights → `/gmat-data-insights-practice`
- Quant → `/gmat-quant-practice`
- Private beta → `/gmat-private-beta`
- Pricing → `/pricing` ; Referral → `/refer`

---

## GOOGLE SEARCH — RESPONSIVE SEARCH ADS (RSA)

Rules: headlines ≤ 30 chars, descriptions ≤ 90 chars. Pin nothing that could read as affiliation. Each theme below gives 12–15 headlines and 4 descriptions — enough for one RSA. Keep "GMAT Focus" as a topic descriptor, never as a partner claim.

### Theme: Error log template
Final URL: `/error-log-template` · campaign `error-log-google` · primary event `lead_captured`

**Headlines**
- GMAT Error Log Template
- Free GMAT Error Log
- Track GMAT Mistakes
- 6-Tag GMAT Error Log
- Why You Miss Questions
- Tag Every Wrong Answer
- GMAT Mistake Tracker
- Stop Repeating Mistakes
- Download The Template
- Built By A 735 Scorer
- Conceptual Or Careless?
- Free, No Card Needed
- Review Smarter, Not More
- GMAT Focus Error Log
- A Founder-Built Tool

**Descriptions**
- Free downloadable GMAT error log. Tag mistakes 6 ways and find the real pattern.
- Conceptual, Careless, Time Pressure, Misread, Strategy, Other. Sort your mistakes.
- Built by Adam Zakarian, who self-studied from 565 to 735. No card to download.
- Stop re-missing the same questions. A simple log that shows what to fix first.

### Theme: Study plan
Final URL: `/gmat-study-plan` · campaign `study-plan-google` · primary event `signup`

**Headlines**
- GMAT Focus Study Plan
- Plan Built From Your Score
- A Plan, Not A Checklist
- Study Your Weak Areas
- GMAT Plan In Minutes
- From Your Practice Exam
- 62 Chapters, One Path
- Today's Focus, Each Day
- Quant, Verbal, DI Plan
- Built By A 735 Scorer
- Free During Beta
- Adaptive GMAT Plan
- Know What To Study Next
- Stop Guessing Your Prep
- A Founder-Built Plan

**Descriptions**
- Enter your official practice-exam score. Get a plan focused on your weak areas.
- Today's Focus plus a 7-day cadence across Quant, Verbal, and Data Insights.
- Built by Adam Zakarian, who went from 565 to 735 self-studying. Free in beta.
- A plan that adapts to your baseline, not a generic 8-week PDF. No card needed.

### Theme: Mock review
Final URL: `/gmat-mock-review` · campaign `mock-review-google` · primary event `signup`

**Headlines**
- Review Your GMAT Mock
- GMAT Mock Analysis
- Mock-To-Mock Trend
- Learn From Every Mock
- Per-Topic Mock Review
- GMAT Focus Mock Review
- See Why You Missed
- Timing By Difficulty
- Full-Length GMAT Mocks
- Built By A 735 Scorer
- Free During Beta
- Your Mock, Decoded
- Beyond Just A Score
- Track Mock Progress
- A Founder-Built Tool

**Descriptions**
- Full-length mocks with per-topic and per-difficulty breakdowns. See what to fix.
- Mock-to-mock trend shows whether your prep is actually moving the needle.
- Built by Adam Zakarian, 565 to 735 self-studied. Free during private beta.
- A mock is only useful if you review it. Tools that turn a score into a plan.

### Theme: Data Insights practice
Final URL: `/gmat-data-insights-practice` · campaign `di-google` · primary event `signup`

**Headlines**
- GMAT Data Insights Prep
- Practice DI Questions
- GMAT Focus DI Practice
- Master Data Insights
- MSR, TPA, DS Practice
- The DI Section, Solved
- Data Insights Drills
- Two-Part Analysis Prep
- Table & Graphics Prep
- Built By A 735 Scorer
- Free During Beta
- DI Per-Topic Analytics
- The Newest GMAT Section
- Practice The DI Format
- Founder-Built DI Prep

**Descriptions**
- Targeted Data Insights practice: MSR, Table Analysis, Two-Part, and more.
- Per-topic and per-difficulty analytics so you see exactly where DI breaks down.
- Built by Adam Zakarian, who self-studied from 565 to 735. Free in private beta.
- The DI section trips up strong quant scorers. Drill the formats that cost points.

### Theme: Quant practice
Final URL: `/gmat-quant-practice` · campaign `quant-google` · primary event `signup`

**Headlines**
- GMAT Quant Practice
- GMAT Focus Quant Prep
- Drill GMAT Quant
- Quant By Topic
- Algebra To Number Props
- Per-Difficulty Quant
- Find Your Quant Gaps
- Practice That Adapts
- Quant Problem Sets
- Built By A 735 Scorer
- Free During Beta
- Quant Without Filler
- Stop Re-Missing Quant
- Timed Quant Drills
- Founder-Built Quant Prep

**Descriptions**
- Topic-filtered GMAT Quant drills with per-topic and per-difficulty analytics.
- Practice that surfaces your weak areas instead of random mixed sets. Free in beta.
- Built by Adam Zakarian, 565 to 735 self-studied. No card during private beta.
- From algebra to number properties, drill the exact topics costing you points.

### Theme: Practice platform / private beta
Final URL: `/gmat-private-beta` · campaign `private-beta-google` · primary event `signup`

**Headlines**
- GMAT Prep Platform
- Try The Private Beta
- GMAT Focus Prep, Free
- Full GMAT Prep System
- 62 Chapters + Practice
- 1,900+ Practice Questions
- Chapters, Mocks, Review
- Free, No Card In Beta
- Built By A 735 Scorer
- One Platform, Whole Prep
- Error Log + Study Plan
- GMAT Focus, End To End
- Join The Private Beta
- Self-Study, Structured
- A Founder-Built Platform

**Descriptions**
- 62 chapters, 1,900+ questions, mocks, error log, and an adaptive plan in one place.
- Built by Adam Zakarian, who self-studied from 565 to 735. Free during the beta.
- No card to join the private beta. Full access while we build in the open.
- Everything for GMAT Focus self-study: learn, drill, mock, review, repeat.

---

## REDDIT ADS (paid-social)

Voice: plain, useful, non-salesy. Reddit punishes hype. Lead with a real GMAT insight, then a soft CTA. Title ≤ ~300 chars but keep tight. Good subreddits: r/GMAT, r/MBA, r/businessschool. campaign suffix `-reddit`, medium `paid-social`.

### Error log → `/error-log-template`
**Title:** A 6-way error log changed how I reviewed GMAT mistakes more than any new question set
**Body:** "Wrong" isn't a category. A miss because you didn't know the concept is a different fix than a miss because you misread the prompt or ran out of time. I tag every mistake six ways — Conceptual, Careless, Time Pressure, Misread, Strategy, Other — and the pattern usually points at one or two things, not twenty. Free template, no card. Built it while self-studying from 565 to 735.
**CTA:** Download the free template

### Study plan → `/gmat-study-plan`
**Title:** Most GMAT study plans are generic 8-week PDFs. Yours should start from your own practice-exam score
**Body:** Take an official mba.com practice exam, enter the section and total scores, and build the plan around your actual weak areas — not a one-size schedule. You get a Today's Focus each day plus a 7-day cadence across Quant, Verbal, and DI. Free during a private beta. I built it solo after going 565 to 735.
**CTA:** Build your plan free

### Mock review → `/gmat-mock-review`
**Title:** Taking more mocks doesn't help if you don't review them properly
**Body:** A mock score by itself is almost useless. What moved my prep was the breakdown: per-topic accuracy, per-difficulty timing, and a mock-to-mock trend so I could see whether anything was actually improving. Full-length mocks plus the review tools, free in beta. Built by one person who self-studied 565 to 735.
**CTA:** Review your next mock

### Data Insights → `/gmat-data-insights-practice`
**Title:** Data Insights is where a lot of strong quant scorers quietly lose points
**Body:** MSR, Two-Part Analysis, Table Analysis, Graphics, and Data Sufficiency each break differently, and mixed practice hides which one is the problem. Targeted DI drills with per-topic and per-difficulty analytics show you the specific format costing you. Free during the private beta.
**CTA:** Practice DI free

### Quant → `/gmat-quant-practice`
**Title:** Random GMAT quant sets waste time. Drill the topics you actually miss
**Body:** Topic-filtered quant practice with per-topic and per-difficulty analytics, so you stop grinding problems you already get and spend time where the points are. No filler questions. Free while the platform is in private beta. Built solo while I climbed from 565 to 735.
**CTA:** Drill quant free

### Private beta → `/gmat-private-beta`
**Title:** I self-studied from 565 to 735 and built the GMAT Focus platform I wish I'd had
**Body:** 62 chapters across Quant, Verbal, and Data Insights, 1,900+ practice questions, full-length mocks, a 6-tag error log, a daily spaced-review queue, and a study plan built from your own official practice-exam baseline. It's free during a private beta — no card. I built the whole thing solo and I'm looking for early users to break it.
**CTA:** Join the private beta

---

## LINKEDIN ADS (paid-social)

Voice: professional, outcome-aware but compliant, for MBA applicants and career-switchers. Single Image / Sponsored Content. Intro text ~150 chars before "see more"; keep the hook there. Headline ≤ ~70 chars. campaign suffix `-linkedin`, medium `paid-social`.

### Private beta / platform → `/gmat-private-beta`
**Intro:** A business-school applicant self-studied from 565 to 735, then built the GMAT Focus prep platform he wished existed.
**Body:** Zakarian GMAT brings the full self-study loop into one place: 62 chapters across Quant, Verbal, and Data Insights, 1,900+ practice questions, full-length mocks with a mock-to-mock trend, a 6-tag error log, and an adaptive study plan built from your own official practice-exam baseline. Free during a private beta, no card.
**Headline:** GMAT Focus prep, end to end — free during private beta
**CTA:** Learn more

### Study plan → `/gmat-study-plan`
**Intro:** Generic GMAT schedules ignore where you actually stand. Start from your own practice-exam score instead.
**Body:** Enter your official mba.com practice-exam section and total scores, and get a plan that targets your weak areas — Today's Focus daily plus a structured 7-day cadence across all three sections. Built by Adam Zakarian, who self-studied from 565 to 735. Free during the private beta.
**Headline:** A GMAT study plan built from your baseline, not a template
**CTA:** Sign up

### Mock review → `/gmat-mock-review`
**Intro:** The score is the easy part. Reviewing the mock is where the points come from.
**Body:** Full-length GMAT Focus mocks with per-topic accuracy, per-difficulty timing, and a mock-to-mock trend so you can see whether your prep is moving. Built by a self-taught 735 scorer. Free during the private beta — no card.
**Headline:** Turn each GMAT mock into a clear list of what to fix
**CTA:** Learn more

### Error log (lead magnet) → `/error-log-template`
**Intro:** "I got it wrong" isn't a diagnosis. Sort your GMAT mistakes into the six reasons they actually happen.
**Body:** A free, downloadable error-log template with a 6-tag taxonomy — Conceptual, Careless, Time Pressure, Misread, Strategy, Other. See the pattern behind your misses instead of just collecting them. Built by Adam Zakarian on his way from 565 to 735. No card.
**Headline:** The 6-tag GMAT error log — free download
**CTA:** Download

---

## META / INSTAGRAM — RETARGETING (medium `retargeting`)

Audience: visitors who fired `landing_view` or `lead_captured` but not `signup`. Warm — reference the value, lower friction. Primary text ~125 chars before truncation; headline ≤ 40 chars; description ≤ 30 chars. campaign suffix `-meta`, medium `retargeting`, content names like `rt-card-founder`.

### Retarget all landing visitors → `/gmat-private-beta`
**Primary text:** You looked at Zakarian GMAT. It's still free in private beta — 62 chapters, 1,900+ questions, mocks, error log, and a plan built from your own practice exam. No card.
**Headline:** Finish joining the beta
**Description:** Free GMAT Focus prep
**CTA:** Sign Up

### Retarget error-log downloaders → `/gmat-private-beta`
**Primary text:** Glad you grabbed the error-log template. The platform tags your mistakes automatically and feeds them into a daily review queue. Free during the private beta.
**Headline:** Put your error log on autopilot
**Description:** 6-tag log, built in
**CTA:** Learn More

### Retarget study-plan visitors → `/gmat-study-plan`
**Primary text:** Your GMAT plan should start from your real score. Enter your official practice-exam baseline and get a plan built around your weak areas. Free in beta.
**Headline:** Build your plan in minutes
**Description:** From your baseline
**CTA:** Sign Up

### Retarget mock-review visitors → `/gmat-mock-review`
**Primary text:** A mock score alone won't move your prep. Per-topic accuracy, per-difficulty timing, and a mock-to-mock trend will. Free during private beta.
**Headline:** Review your next mock right
**Description:** See what to fix
**CTA:** Learn More

### Retarget DI / Quant visitors → `/gmat-data-insights-practice` or `/gmat-quant-practice`
**Primary text:** Targeted practice beats random sets. Per-topic and per-difficulty analytics show you the exact spots costing points. Free in the private beta.
**Headline:** Drill where it counts
**Description:** Topic-level analytics
**CTA:** Sign Up

### Retarget pricing visitors (founding offer) → `/pricing`
**Primary text:** Still free to use in beta. When pricing goes live, founding users lock the $399 founding rate, anchored to the $599 mentorship tier. Reserve yours.
**Headline:** Lock the founding price
**Description:** $399 founding rate
**CTA:** Learn More

### Retarget engaged users (referral loop) → `/refer`
**Primary text:** Prepping with someone? Share your link: your friend gets the founding price and you get $50. Built by a self-taught 735 scorer.
**Headline:** Refer a study partner
**Description:** Friend saves, you get $50
**CTA:** Learn More

---

## FOUNDER-STORY HOOK BANK (reusable across channels)

The 565 → 735, 100th-percentile claim is the only performance claim allowed and is always about Adam. Drop-in lines:

- "Self-studied from 565 to 735. Built the platform solo."
- "Built by Adam Zakarian — 565 to 735, 100th percentile on his official report."
- "Made by one person who took the GMAT Focus seriously, not a content mill."
- "The GMAT Focus platform I wish I'd had when I started at 565."

Do not pair these with "you can too" framed as a promise, a guarantee, or any generalized student outcome.

---

## CHANNEL CHEAT SHEET

| Channel | Medium | Best themes | Optimize for |
|---|---|---|---|
| Google Search | `cpc` | All high-intent themes (study plan, error log, mock review, DI, Quant, beta) | `signup`; `lead_captured` for error-log |
| Reddit | `paid-social` | Error log, DI, mock review (insight-led) | `signup`, `lead_captured` |
| LinkedIn | `paid-social` | Private beta, study plan, mock review | `signup` |
| Meta/IG | `retargeting` | Warm re-engagement, founding offer, referral | `signup`, `founding_reserve` |

All destination URLs carry canonical UTM params; `AttributionCapture` preserves first-touch attribution through to `signup` / `purchase_completed`.

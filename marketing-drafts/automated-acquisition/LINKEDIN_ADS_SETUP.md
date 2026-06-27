# LinkedIn Ads Setup

Acquisition playbook for Zakarian GMAT (zakariangmat.com) on LinkedIn Ads. LinkedIn is the highest-cost channel in the mix and the most professionally targeted. Treat it as a precision channel for warm, high-intent MBA aspirants — not a volume channel. The goal is qualified signups into the private beta, with opt-in email leads as the secondary, lower-friction conversion that feeds founding-price follow-up.

## Compliance guardrails (read before writing any ad)

These are non-negotiable and apply to every line of copy, every creative, and every landing page referenced here.

- Zakarian GMAT is **not affiliated with, endorsed by, or sponsored by GMAC, the GMAT, GMAT Focus, or mba.com.** GMAT and GMAT Focus are GMAC trademarks; use them only nominatively (to name the exam the platform prepares you for). Never imply partnership or endorsement.
- **No guaranteed-score claims.** No "raise your score by X," no "guaranteed 700+," no implied outcomes.
- **No diagnostic claims.** The platform has no in-app diagnostic. The study plan is built from *the user's own official mba.com practice-exam baseline*. Banned phrasing: "free diagnostic," "30-question diagnostic," "readiness band," "score band," "typically lands," "most students see/improve."
- **The only performance claim allowed** is the founder's own climb: 565 to 735, 100th percentile on his official report. Never generalize it to other students ("our students hit 700+" is forbidden).
- **No fake urgency, no fabricated testimonials, no invented student counts.** Founding-price scarcity is real (early pricing is genuinely reserved), so it can be stated plainly without manufactured countdowns.
- **No bots, no scraping, no automated DMs, no cold lists.** LinkedIn paid targeting only, against LinkedIn's native audience tools.

## 1. Audience targeting

LinkedIn targeting is profile-attribute based and entirely first-party within LinkedIn's ad platform. We build audiences from LinkedIn's native facets only. No third-party scraping, no Sales Navigator list exports into ads, no bot connection requests, no automated DMs.

### Core audience facets to combine

Build audiences by layering these LinkedIn-native facets. Keep each saved audience to one clear segment so reporting stays legible.

- **Member interests / groups:** GMAT, MBA admissions, graduate business school, management consulting, investment banking.
- **Fields of study (current/recent students):** Finance, Economics, Business Administration, Accounting, Engineering (large MBA feeder), Mathematics.
- **Degrees:** Bachelor's (target pool), plus current undergraduates in final years via member age/graduation-year proxies where available.
- **Job functions:** Finance, Consulting, Business Development, Accounting, Operations, Analyst-track roles.
- **Job titles (seniority):** Analyst, Associate, Consultant, Financial Analyst, Business Analyst — the 2–5-years-experience cohort that applies to full-time MBAs.
- **Member schools:** Target undergrad student bodies and alumni networks of strong MBA-feeder universities. Include the founder's own network context (BI Norwegian Business School, University of St. Gallen / HSG) and comparable European + global business schools, plus large feeder universities in your priority geographies.
- **Geography:** Start with high-English-fluency, high-MBA-application markets (US, UK, India, Canada, Western Europe, Nordics, UAE/Singapore as English-language hubs). Run geo as its own split so you can read CPM differences — India and SE Asia have far lower LinkedIn CPMs than US/UK.

### Recommended saved audiences (launch set)

1. **Finance/consulting MBA aspirants** — Job functions Finance + Consulting, titles Analyst/Associate/Consultant, interest "MBA" or "GMAT," 1–6 years experience.
2. **Business undergrad finalists** — Fields of study Finance/Economics/Business, member schools = feeder universities, interest "GMAT"/"graduate school."
3. **MBA-interest by group/interest** — Members of MBA-admissions and GMAT interest clusters, broad function, used as a discovery/top-of-funnel audience.
4. **Engineering-to-MBA** — Field of study Engineering + interest MBA/GMAT (large, motivated, quant-comfortable cohort that maps to the Quant/Data Insights landing pages).

### Audience hygiene

- **Exclusions:** Exclude current beta signups and existing leads by uploading a hashed first-party email list as a LinkedIn matched audience *suppression* list (your own opt-in data only — no purchased lists). Exclude obvious non-fits (senior executives, retirees, unrelated industries) by seniority caps.
- **Audience expansion: OFF** at launch. It dilutes the precise targeting that justifies LinkedIn's CPMs. Revisit only after you have a clear winning audience.
- **The LinkedIn Audience Network: OFF** at launch (keep spend on-platform where targeting is trustworthy; test it later as a cheap-reach experiment).
- **Retargeting stays on Meta.** Per the existing stack, Meta/Instagram handles retargeting (utm_medium=retargeting). LinkedIn here is prospecting/top-and-mid funnel. Do not duplicate retargeting spend on LinkedIn unless Meta retargeting is saturated.

## 2. Campaign structure and ad formats

### Objective and bidding

- **Campaign objective:** Website visits for early traffic-quality reads, then **Lead generation** (LinkedIn Lead Gen Forms) for the secondary email-capture goal, and **Website conversions** once the LinkedIn Insight Tag is firing on signup. Run conversions as the primary objective once tracking is confirmed.
- **Bidding:** Start with **maximum delivery (automated)** to gather data, then move winning campaigns to **manual/target cost** bidding to control CPM. Set conservative bid caps given high LinkedIn CPMs.

### Campaign groups (mirror the funnel)

- **Group A — Lead magnets (secondary conversion, lower friction):** drives lead_captured via the error-log template and study-plan pages. Best ROI per dollar on LinkedIn because the offer is concrete and free.
- **Group B — Beta signups (primary conversion):** drives signup via the private-beta page.
- **Group C — Practice/skill intent:** Quant, Data Insights, and mock-review pages for the more advanced, exam-deep segment.

### Ad formats to run

LinkedIn's two strongest formats for this offer are **Single Image** and **Document ads**. Lead Gen Forms attach to either.

1. **Single Image ad (Sponsored Content):** The workhorse. 1200x627 (landscape) and 1080x1080 (square) variants. Use for both lead-magnet and beta-signup campaigns. Clean, text-forward creative beats stock photography here — a screenshot of the error log or analytics view outperforms generic imagery.
2. **Document ad:** LinkedIn-native gated PDF that previews in-feed and captures a lead on download. Ideal for the **error-log template** and a short founder-written study-plan guide. This format earns strong dwell time on LinkedIn and pairs naturally with the lead_captured goal. Gate it with a Lead Gen Form.
3. **Single Image + Lead Gen Form** for the email-capture path so users never leave LinkedIn (lower friction, higher lead volume, but lower intent — route these to a strong opt-in email sequence).

Skip video at launch (production cost vs. unproven channel). Skip carousel until you have a clear multi-feature story worth paneling. Revisit both after the first optimization cycle.

### Creative direction (true, specific, founder-led)

- Lead with concrete GMAT strategy a 735-scorer would actually give, not hype. Example creative concepts: the 6-tag error-log method; how to review a mock instead of just retaking it; what per-difficulty analytics reveal that a raw score hides.
- Show real product surfaces: the error log with its six tags, the mock-to-mock trend chart, per-topic analytics. Screenshots must reflect the actual app.
- Founder framing is the differentiator: "Built by a self-studier who went 565 to 735." State it as the founder's own result, never as a promise to the reader.

## 3. Ad copy (compliant, ready to adapt)

All copy below is pre-cleared against the guardrails. Keep intro text tight — LinkedIn truncates around 150 characters in-feed.

### Group A — Error-log template (Document ad / Single Image, lead_captured)

- **Headline:** The GMAT error log I used to go from 565 to 735
- **Intro:** Most people re-do wrong questions and call it review. The fix is tagging *why* you missed each one. Free template, six tags, no card.
- **CTA button:** Download
- **Variant B headline:** Stop repeating the same GMAT mistakes
- **Variant B intro:** A free error-log template with six failure tags — Conceptual, Careless, Time Pressure, Misread, Strategy, Other — so your weak spots stop hiding.

### Group A — Study plan (Single Image, lead_captured / signup)

- **Headline:** Build a GMAT study plan around your real baseline
- **Intro:** Start from your own official mba.com practice-exam score, not a guess. The plan adapts as your mocks move. Free during private beta.
- **CTA button:** Learn more
- Note: never call this a diagnostic. The baseline is the user's official practice exam.

### Group B — Private beta (Single Image + Lead Gen Form or site signup, signup)

- **Headline:** A GMAT Focus prep platform, free during private beta
- **Intro:** 62 chapters across Quant, Verbal, and Data Insights. A large practice bank, spaced review, mock trends, per-topic analytics. No card to join.
- **CTA button:** Sign up
- **Variant B headline:** Built solo by a 735 scorer. Free to try right now.
- **Variant B intro:** Adam Zakarian self-studied 565 to 735 (100th percentile on his official report) and built the platform he wished he'd had. Join the private beta.

### Group C — Quant / Data Insights / mock review (Single Image, signup)

- **Quant headline:** GMAT Quant practice that tells you *why* you're slow
- **Quant intro:** Per-topic and per-difficulty analytics separate the concepts you don't know from the ones you rush. Free during private beta.
- **Data Insights headline:** Real GMAT Data Insights practice, not an afterthought
- **Data Insights intro:** Dedicated Data Insights chapters and a practice bank for the section most prep tools treat as filler.
- **Mock-review headline:** Your GMAT mock score is the least useful number on the report
- **Mock-review intro:** Mock-to-mock trend, per-section breakdowns, and an error log that turns one full-length into a week of targeted work.

### Founder-led long-copy block (for Document ad intro or expanded Single Image)

> I scored 565 on my first GMAT and 735 on my last — 100th percentile on my official report — studying solo. The single biggest unlock was reviewing wrong answers by *category*, not just redoing them. I built Zakarian GMAT around that: 62 chapters, a large practice bank, a six-tag error log, a daily spaced-review queue, full-length mocks with trend tracking, and analytics by topic and difficulty. It's free during a private beta — no card. — Adam Zakarian

## 4. Landing page mapping

Match each ad's promise to the page that delivers it. Mismatched mapping wastes LinkedIn's expensive clicks.

| Campaign / ad theme | Landing page | Primary on-page conversion |
|---|---|---|
| Error-log template | /error-log-template | lead_captured |
| Study plan | /gmat-study-plan | lead_captured -> signup |
| Private beta | /gmat-private-beta | signup |
| Mock review | /gmat-mock-review | signup |
| Data Insights practice | /gmat-data-insights-practice | signup |
| Quant practice | /gmat-quant-practice | signup |
| Founding-price / pricing intent | /pricing | founding_reserve |
| Referral push (warm/existing) | /refer | referral_click |

Lead Gen Form leads (in-platform, never hit a landing page) count as **lead_captured** and must be synced into the opt-in email sequence; that sequence then drives them to /gmat-private-beta for the **signup** primary conversion.

## 5. UTM tagging (canonical scheme)

Every destination URL carries first-touch UTMs. The site's AttributionCapture stores first-touch UTM and merges it into every trackEvent() call, so accurate tagging at the ad level is what makes attribution work end to end.

Canonical values for LinkedIn:

- `utm_source = linkedin`
- `utm_medium = paid-social`
- `utm_campaign = <topic>-linkedin` (e.g. `error-log-linkedin`, `study-plan-linkedin`, `private-beta-linkedin`, `quant-linkedin`, `data-insights-linkedin`, `mock-review-linkedin`)
- `utm_content = <ad-variant>` (e.g. `single-image-a`, `single-image-b`, `document-errorlog`, `leadform-beta`)
- `utm_term` — **not used on LinkedIn** (reserved for search keywords only)

Example tagged URLs:

- `https://zakariangmat.com/error-log-template?utm_source=linkedin&utm_medium=paid-social&utm_campaign=error-log-linkedin&utm_content=document-errorlog`
- `https://zakariangmat.com/gmat-private-beta?utm_source=linkedin&utm_medium=paid-social&utm_campaign=private-beta-linkedin&utm_content=single-image-b`
- `https://zakariangmat.com/gmat-quant-practice?utm_source=linkedin&utm_medium=paid-social&utm_campaign=quant-linkedin&utm_content=single-image-a`

Tagging rules:

- Set UTMs at the **ad (creative) level** so each variant is distinguishable in `utm_content`. Do not rely on LinkedIn's auto-tagging; set explicit URL parameters.
- Lead Gen Form ads have no destination URL — record the source/campaign/content in the LinkedIn campaign naming convention and map LinkedIn's lead export back to the same `utm_campaign`/`utm_content` values manually so reporting reconciles with site events.
- Keep campaign naming in LinkedIn identical to `utm_campaign` so the ad platform and your analytics line up without a lookup table.

## 6. Conversion goals and tracking

Use the tracking that already exists. Do not build new infrastructure.

- **Existing site events** (via `trackEvent()` -> Vercel Analytics + Meta Pixel + Google tag; the Pixel and Google tag stay dormant until `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_GOOGLE_TAG_ID` are set): `landing_view {page}`, `lead_captured`, `signup` (Meta CompleteRegistration), `founding_reserve`, `referral_click`, `pricing_view`, `checkout_initiated`, `purchase_completed`.
- **Primary conversion:** `signup`. **Secondary conversion:** `lead_captured` (opt-in email).
- **LinkedIn Insight Tag:** Install the LinkedIn Insight Tag site-wide and define LinkedIn conversions that map to the same actions the site already tracks — a **Sign-up** conversion (fires on the signup action / thank-you state) and a **Download/Lead** conversion (fires on lead_captured). This lets LinkedIn optimize delivery toward signups. The Insight Tag is LinkedIn's own measurement layer and sits alongside the existing trackEvent stack; it does not replace it.
- **Lead Gen Form leads:** counted natively by LinkedIn as form completions; reconcile them to `lead_captured` and pipe into the opt-in email sequence.
- **Optimization signal:** optimize Group B/C campaigns toward the **Sign-up** conversion once it has enough volume; until then, optimize toward **Lead/Download** (cheaper, faster signal) and use it as a proxy.
- **Source of truth for ROI:** site-side events with first-touch UTM (`utm_source=linkedin`) are the reconciliation layer across all channels. LinkedIn's in-platform numbers will overcount relative to first-touch UTM; trust the UTM-attributed site events for cross-channel comparison.

## 7. Budget guidance

LinkedIn CPMs are structurally high — often several multiples of Meta/Reddit for the same impression, and clicks frequently land in the high-single to low-double-digit dollars in US/UK finance/consulting audiences. Plan around that reality.

- **Floor:** LinkedIn enforces minimums near ~$10/day per campaign and similar daily minimums per campaign group. Budget so each campaign clears the minimum without spreading too thin to learn.
- **Recommended launch budget:** start small and concentrated — roughly **$20–35/day per active campaign**, with **no more than 2–3 campaigns live at once** (one lead-magnet, one beta-signup, optionally one practice/skill). A ~$300–700/month test budget is enough to read whether LinkedIn can clear a viable cost-per-lead and cost-per-signup against this audience.
- **Cost expectations to validate, not assume:** treat cost-per-lead (Document/Lead Gen Form) as your cheapest, fastest LinkedIn metric and cost-per-signup as the expensive truth. If cost-per-signup on LinkedIn runs far above Google Search and Reddit, **shift LinkedIn budget toward the lead-magnet path** (Document ads + Lead Gen Forms) and let the opt-in email sequence carry the signup conversion, where the channel's strength (precise professional targeting on a concrete free offer) pays off.
- **Geo arbitrage:** run a parallel low-CPM-geo campaign (e.g. India, SE Asia) at the same daily cap. If lead quality holds, this is where LinkedIn spend stretches furthest for this audience.
- **Pacing:** keep audience expansion and the Audience Network off so budget isn't bled into cheap, low-intent impressions that flatter CPM but hurt conversion.
- **Kill/scale rule:** give each campaign ~2 weeks and enough spend to exit LinkedIn's learning phase before judging. Pause any creative whose cost-per-lead is more than ~2x the campaign group's best performer. Scale winners in ~20% steps, not jumps, to avoid resetting learning.

## 8. Launch checklist

- [ ] Confirm LinkedIn Insight Tag is installed site-wide and registering page views.
- [ ] Define LinkedIn conversions: **Sign-up** (maps to signup) and **Lead/Download** (maps to lead_captured), wired to the right pages/actions.
- [ ] Confirm site-side `trackEvent()` fires `landing_view`, `lead_captured`, and `signup` on the mapped landing pages.
- [ ] Build the 4 launch saved audiences; set Audience Expansion OFF and Audience Network OFF.
- [ ] Upload hashed first-party suppression list (existing leads/signups) — own data only, no purchased lists.
- [ ] Create campaign groups A (lead magnets), B (beta signups), C (practice/skill).
- [ ] Produce creatives: Single Image (1200x627 + 1080x1080) per theme, plus the error-log Document ad; use real product screenshots.
- [ ] Run every line of copy and creative against the compliance guardrails (no GMAC affiliation, no guaranteed scores, no diagnostic language, founder-result claim only, no fake urgency).
- [ ] Build Lead Gen Forms for the lead-magnet campaigns; confirm thank-you state and lead export.
- [ ] Apply canonical UTMs at the ad level; mirror `utm_campaign` in LinkedIn campaign names.
- [ ] Verify the opt-in email sequence receives Lead Gen Form leads and routes them to /gmat-private-beta.
- [ ] Set bidding to maximum delivery for learning; set conservative daily budgets ($20–35/campaign, 2–3 live).
- [ ] Launch a parallel low-CPM-geo split for cost comparison.
- [ ] Schedule a 2-week review: compare LinkedIn cost-per-signup and cost-per-lead against Google/Reddit via first-touch UTM site events; shift budget toward the lead-magnet path if signup CPA is uncompetitive.

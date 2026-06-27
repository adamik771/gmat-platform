# Landing Page Map

Each ad group sends traffic to exactly one live, content-rich page that mirrors the keyword. Tight message match = higher Quality Score (lower CPC) and higher conversion rate. Every page below has a canonical tag, a GMAC non-affiliation disclaimer, a signup CTA, and tracking already wired.

| Ad Group | Keyword theme | Landing URL | On-page conversion event | Message-match rationale |
|----------|---------------|-------------|--------------------------|-------------------------|
| `AG-Study-Plan` | gmat study plan / gmat focus study plan / gmat study schedule | https://www.zakariangmat.com/gmat-study-plan | `lead_captured` {source, lead_magnet} via newsletter worksheet | Searcher wants a structured plan. Page leads with the adaptive study plan built from the user's official mba.com practice-exam baseline, and offers a free planning worksheet as the lead magnet — the email capture matches the "I want a plan" intent. |
| `AG-Error-Log-Template` | gmat error log template / gmat error log / mistake log | https://www.zakariangmat.com/error-log-template | `lead_captured` {source, lead_magnet} via free CSV download (no account) | HIGHEST intent. Searcher wants a concrete artifact right now. Page delivers the free six-tag error-log CSV with no account needed — zero friction. The in-app error log is the upsell, not the gate. Best CPA expected here. |
| `AG-Mock-Review` | gmat mock review / mock test analysis / practice test review | https://www.zakariangmat.com/gmat-mock-review | `lead_captured` {source, lead_magnet} via newsletter | Searcher just took a mock and wants to extract lessons. Page describes per-topic / per-difficulty mock analytics, behaviour patterns (efficient/labored/rushed/stuck), and mock-to-mock trend — exactly the "what do I do with this mock" need. |
| `AG-Data-Insights` | gmat data insights practice / di practice / data insights questions | https://www.zakariangmat.com/gmat-data-insights-practice | `lead_captured` {source, lead_magnet} via newsletter | Section-specific intent. Page offers interactive Data Insights chapters plus a large DI question bank and per-topic analytics — directly answers "I need DI practice." |
| `AG-Quant-Practice` | gmat quant practice / quant questions / math practice | https://www.zakariangmat.com/gmat-quant-practice | `lead_captured` {source, lead_magnet} via newsletter | Highest-volume practice intent. Page offers the Quant question bank, interactive Quant chapters, and per-topic/per-difficulty analytics — matches "I want to drill quant." |
| `AG-Prep-Platform` | gmat prep platform / online gmat prep / gmat prep app / private beta | https://www.zakariangmat.com/gmat-private-beta | `founding_reserve` {source, lead_magnet} via founding reservation | Highest commercial intent ("a platform/app/tool"). Page is the all-in-one pitch: 62 chapters, question bank, error log, mocks, adaptive plan, analytics — free during private beta — with a founding-access reservation as the primary CTA. |
| `AG-Verbal-Practice` | gmat verbal practice / critical reasoning / reading comprehension | https://www.zakariangmat.com/gmat-verbal-practice | `lead_captured` (Verbal worksheet) | Ad copy mirrors the page hook; honest free-beta framing, no guarantees. |
| `AG-Data-Sufficiency` | gmat data sufficiency practice / ds practice | https://www.zakariangmat.com/gmat-data-sufficiency-practice | `lead_captured` (DS cheat sheet) | Ad copy mirrors the page hook; honest free-beta framing, no guarantees. |
| `AG-Study-Plan-2mo` | 2 month / 8 week gmat study plan | https://www.zakariangmat.com/gmat-study-plan-2-months | `lead_captured` (8-week worksheet) | Ad copy mirrors the page hook; honest free-beta framing, no guarantees. |
| `AG-Free-Practice` | free gmat practice questions | https://www.zakariangmat.com/gmat-practice-questions-free | `lead_captured` (starter pack) / `signup` | Ad copy mirrors the page hook; honest free-beta framing, no guarantees. |
| `AG-Focus-Changes` | gmat focus edition changes / focus vs old gmat | https://www.zakariangmat.com/gmat-focus-edition-changes | `landing_view` -> `signup` (informational, top-funnel) | Ad copy mirrors the page hook; honest free-beta framing, no guarantees. |

## Conversion event reference

Events fire to Vercel Web Analytics and auto-forward to gtag once `NEXT_PUBLIC_GOOGLE_TAG_ID` is set:

- `landing_view {page}` — fires on each landing-page view (track only; do NOT count as a conversion, it would inflate bidding).
- `lead_captured {source, lead_magnet}` — primary conversion for ad groups 1–5.
- `founding_reserve {source, lead_magnet}` — primary conversion for ad group 6.
- `signup {gated}` — counts as a conversion anywhere it occurs (Meta CompleteRegistration). A landing-page visitor who creates an account also counts.
- `signup_initiated {gated}` — track only; not a conversion.

## Notes

- Do NOT route ads to the homepage or to `/signup` directly. Always use the keyword-matched page above so message match and Quality Score stay high.
- `/pricing`, `/score-converter`, `/resources`, `/about`, `/students`, `/how-we-compare`, `/blog`, `/sample-chapter` are live but are NOT ad destinations during this launch (no keyword theme assigned, weaker match). Keep them as internal links only.
- The referral page `/refer` is not an ad destination — referral is an owned/organic channel, and the $50 reward only triggers on a paying founding member (paywall is off).

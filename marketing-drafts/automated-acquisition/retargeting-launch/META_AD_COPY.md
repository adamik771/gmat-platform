# Meta Retargeting Ad Copy — Zakarian GMAT

Honest retargeting variants for the audiences in RETARGETING_AUDIENCES.md.
Paste-ready for Meta Ads Manager (Facebook + Instagram).

---

## DO NOT LAUNCH YET

These ads only run AFTER the pixel is verified firing AND the target audience has
cleared the platform minimum (warmed pixel, ~300-500 site visitors, audience >= 100).
See RETARGETING_AUDIENCES.md gate and MINIMUM_BUDGET_PLAN.md kill rule. Keep every
ad set PAUSED until then.

---

## Character limits (respect these exactly)

- **Primary text:** keep to **<= 125 chars** so it never truncates above the fold.
- **Headline:** **<= 40 chars.**
- **Description (link description):** **<= 30 chars.** (Shown on some placements only.)
- Single-image or single-video, 1:1 (1080x1080) or 4:5 feed; static is fine.

## Compliance (every line below already complies — do not edit these out)

- No score guarantee, no percentile prediction, no timeline, no "raise your score."
- No implied affiliation/endorsement with GMAC / GMAT / GMAT Focus / mba.com.
- Only performance claim = the founder's own 565 -> 735 (100th percentile), as HIS result.
- Honest: it IS a free private beta right now. No fake scarcity or testimonials.
- No emojis (hard repo rule).
- Every ad needs the standard footer disclaimer in the on-image text or first comment:
  "Independent GMAT prep. Not affiliated with or endorsed by GMAC / mba.com.
  No score guaranteed."

---

## Audience A1 — Landing visitors, no signup
Angle: free private beta / low-friction return.

**Variant A1-1**
- Primary text (108): You looked once. It's still free. Zakarian GMAT is in private beta, no card needed to start.
- Headline (29): Free GMAT prep, private beta
- Description (24): Start free, no card
- CTA button: Sign Up

**Variant A1-2 (founder hook)**
- Primary text (123): Built by a self-studier who went from 565 to a 735 (100th pctile) on his own GMAT Focus score report. Free in beta.
- Headline (31): From 565 to 735, his own story
- Description (22): See how he studied
- CTA button: Learn More

**Variant A1-3 (error-log hook)**
- Primary text (101): Still on the fence? Grab the free error-log template. No account needed to download it.
- Headline (28): Free GMAT error-log sheet
- Description (20): Free CSV download
- CTA button: Download

---

## Audience A2 — Error-log downloaders, no account (highest intent)
Angle: connect the CSV they took to the live in-app tool.

**Variant A2-1**
- Primary text (118): You grabbed the error-log sheet. The app logs every miss for you and queues it for review. Free in beta.
- Headline (27): Your error log, automated
- Description (23): Free during the beta
- CTA button: Sign Up

**Variant A2-2**
- Primary text (121): Six tags for every wrong answer: conceptual, careless, time, misread, strategy, other. Then it schedules the redo.
- Headline (30): Tag, log, review, repeat
- Description (21): Free private beta
- CTA button: Sign Up

**Variant A2-3 (spaced review)**
- Primary text (116): A CSV is step one. The app re-surfaces your misses on a same-day to 42-day ladder so they stick. Free now.
- Headline (29): Spaced review, done for you
- Description (24): Start free, no card
- CTA button: Get Started

---

## Audience A3 — Newsletter leads, no signup (page-matched)
Match the page they converted on. Pick the matching block.

**Study plan (A3-SP)**
- Primary text (120): Your study plan should follow your real official mba.com practice baseline, not a generic template. Free in beta.
- Headline (27): An adaptive GMAT plan
- Description (22): Built from your data
- CTA button: Sign Up

**Mock review (A3-MR)**
- Primary text (117): Full-length mocks, three 45-min sections, auto-submit, plus a mock-to-mock trend so you see what's moving. Free.
- Headline (26): Mocks with a trend line
- Description (21): Free private beta
- CTA button: Sign Up

**Data Insights (A3-DI)**
- Primary text (110): Data Insights is where scores leak. Targeted DI practice with per-topic analytics. Free during the beta.
- Headline (24): GMAT Data Insights reps
- Description (23): Free during the beta
- CTA button: Sign Up

**Quant (A3-Q)**
- Primary text (112): A large quant bank with per-topic and per-difficulty analytics so you drill the right gaps, not random sets.
- Headline (22): Targeted quant practice
- Description (24): Start free, no card
- CTA button: Sign Up

---

## Audience A4 — Pricing viewers, no founding reservation
Angle: honest price-lock, free now, no fake urgency.

**Variant A4-1**
- Primary text (114): Everything is free during the private beta. Founding members lock the founding price before paid plans start.
- Headline (29): Lock the founding price
- Description (21): Free private beta
- CTA button: Sign Up

**Variant A4-2**
- Primary text (97): No charge today. Reserve a founding spot and keep founding pricing when plans go live.
- Headline (27): Reserve founding access
- Description (20): No card needed
- CTA button: Learn More

---

## Audience A5 — Founding reservers, not activated
Angle: warm finish-the-setup nudge. (Email Sequence B is primary; this is backup.)

**Variant A5-1**
- Primary text (95): You reserved your spot. Finish setting up your free account and start your first set.
- Headline (24): Finish your free setup
- Description (19): It's free in beta
- CTA button: Sign Up

**Variant A5-2**
- Primary text (101): Your founding reservation is saved. Create your account to start chapters, mocks, and reviews.
- Headline (26): Pick up where you left off
- Description (22): Free during the beta
- CTA button: Get Started

---

## Audience A6 — Signed up but inactive
Angle: one concrete first action. (Email Sequence D is primary; run on Meta only if
the activation signal is exposed to the pixel — otherwise keep this email-only.)

**Variant A6-1**
- Primary text (104): Pick one weak topic and do 10 questions. The error log and review queue handle the rest.
- Headline (23): One small first session
- Description (20): Free private beta
- CTA button: Get Started

**Variant A6-2**
- Primary text (108): Your account is ready. Run one short set today and the app starts shaping your spaced-review queue.
- Headline (25): Start your review queue
- Description (21): Takes a few minutes
- CTA button: Get Started

---

## Production notes

- Lead each ad set with 2-3 variants max; let Meta's optimization pick. Don't stack
  10 variants on a tiny retargeting audience — there isn't enough volume to learn.
- Optimize the campaign toward a **micro-conversion** (signup / lead / founding_reserve),
  NOT purchase — purchase volume is zero during the free beta.
- Frequency cap matters on small retargeting pools: cap at ~2-3 impressions/person/week
  so you don't burn out the same handful of people.
- Reuse the founder's official score-report image (public/score-report.png) ONLY with
  honest "his own result" framing. Never crop it to imply a typical or predicted score.

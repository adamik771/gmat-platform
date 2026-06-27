# Email Sequences

This document describes the five automated email sequences (A through E) used by Zakarian GMAT's opt-in outreach system. It mirrors the editorial copy in the codebase; it does not introduce new claims.

**Canonical copy lives in `src/lib/outreach/templates.ts`.** Subject lines and body intent below are a faithful summary of that file. If anything here ever diverges from `templates.ts`, the template file is the source of truth. Sequence structure (steps, day offsets, template keys) is defined in `src/lib/outreach/sequences.ts`.

## How sequences are scheduled

- **Sequences A, B, C are drips:** every step is scheduled at a fixed day-offset from a single trigger event.
- **Sequence D is threshold-detected:** the cron worker enqueues each step when the corresponding inactivity threshold (3 / 7 / 14 days) is reached, for already-consented users only.
- **Sequence E is event-driven:** one email is enqueued per milestone reached. Day offsets for D and E are informational only.

## Compliance (applies to every step)

- Opt-in only. A subscription row is created only from an explicit, unticked-by-default opt-in checkbox (ticked at signup or on the lead form). No cold outreach, no scraped or purchased contacts, no LinkedIn bots or DMs.
- Every email carries a visible unsubscribe link plus `List-Unsubscribe` and one-click `List-Unsubscribe-Post` headers.
- Every email carries the not-affiliated / no-guarantee footer (independent prep; not affiliated with, endorsed by, or sponsored by GMAC, the GMAT, or mba.com; no score guaranteed).
- Consent is re-checked (`subscribed = true`) immediately before each send; an unsubscribe is never resurrected.
- No diagnostic claims, no score promises (enforced by a build-failing unit test in `tests/outreach-templates.test.ts`).

---

## Sequence A — New signup

**Trigger:** A new account signs up AND ticks the marketing opt-in checkbox (stored in `user_metadata.marketing_consent`). The cron worker's enqueue phase (phase 1a) enrols only opted-in accounts created within the last 3 days. Consent source: `signup`.

| Step | Day | Purpose | Primary CTA |
|------|-----|---------|-------------|
| welcome | 0 | Confirm signup and explain what the platform does | Open your dashboard (`/dashboard`) |
| start | 1 | Get the user to set a baseline first | Set your baseline (`/mock`) |
| invite | 3 | Soft referral prompt | Invite a friend (`/refer`) |
| founding | 5 | Introduce founding pricing | Reserve founding access (`/pricing`) |
| feedback | 10 | Ask for honest feedback | Send feedback (`/contact`) |

- **welcome** — Subject: *Welcome to Zakarian GMAT.* Confirms the signup and describes the platform (62 chapters, practice bank, six-tag error log, spaced review, full-length mocks, baseline-driven study plan) and that it is free during the private beta.
- **start** — Subject: *How to start (do this first).* Tells the user to baseline with an official mba.com practice exam and enter their section scores so the study plan can calibrate to their weak areas; explicitly makes no promise on timeline or score.
- **invite** — Subject: *Know someone else prepping?* Invites the user to bring in a friend or classmate; the friend gets founding pricing and the user gets a small thank-you, via their link on the refer page.
- **founding** — Subject: *Lock in founding pricing while the beta's free.* Explains there is nothing to pay during the beta and that founding users hold early pricing for when the platform goes paid later.
- **feedback** — Subject: *What's working? What's annoying?* Asks two questions about what is working and what is most annoying, inviting a direct reply or use of the contact page.

---

## Sequence B — Founding reservation

**Trigger:** A founding reservation is made. The lead-capture API route enqueues this drip when `source = 'founding-member'`. Consent source: `founding-reservation`.

| Step | Day | Purpose | Primary CTA |
|------|-----|---------|-------------|
| confirm | 0 | Confirm the founding reservation | Open the platform (`/dashboard`) |
| includes | 2 | Lay out what beta access includes | Set your baseline (`/mock`) |
| referral | 5 | Founding referral offer ($50) | Share your link (`/refer`) |
| next | 10 | Check in on progress | Open your study plan (`/study-plan`) |

- **confirm** — Subject: *Your founding access is reserved.* Confirms the reservation, notes free full access during the beta with the founding price held for when payment turns on later, and that founding access is handled personally for now.
- **includes** — Subject: *What your beta access includes.* Lists what beta access covers (62 chapters, full practice bank, full-length mocks, spaced review queue, error log, baseline-driven study plan, no card required) and nudges the user to set their baseline.
- **referral** — Subject: *Bring a founding friend, get $50.* Offers a $50 reward (credit or cash) when a referred friend joins at the founding rate; tracked by hand for now.
- **next** — Subject: *Your next step.* A check-in: if started, review misses in the error log and run the daily review queue; if not started, reply about what's in the way.

---

## Sequence C — Error-log / template lead

**Trigger:** Someone requests the error-log template. The lead-capture API route enqueues this drip when `leadMagnet = 'error-log-template'`. Consent source: `lead-capture:error-log-template`.

| Step | Day | Purpose | Primary CTA |
|------|-----|---------|-------------|
| deliver | 0 | Deliver the requested template | Download the template (`/resources`) |
| howto | 2 | Teach how to actually use the log | Read the method (`/resources`) |
| beta | 5 | Position the platform as the log automated | Try the beta free (`/signup`) |
| founding | 8 | Introduce founding pricing | Reserve founding access (`/pricing`) |

- **deliver** — Subject: *Your GMAT error-log template.* Delivers the requested template using the six-tag taxonomy (Conceptual, Careless, Time Pressure, Misread, Strategy, Other) and explains logging every miss with a tag and a one-line reason.
- **howto** — Subject: *How to actually use the error log.* Explains that the review half is what matters: once a week, sort by tag and fix the biggest cluster.
- **beta** — Subject: *The error log on autopilot.* Positions the platform as the spreadsheet automated (tags misses, builds a spaced review queue, re-prioritizes the study plan), free during the private beta.
- **founding** — Subject: *Founding access (while it's free).* Offers founding users early pricing locked in now, while the platform is free in beta, for when it goes paid later.

---

## Sequence D — Inactive user

**Trigger:** The cron worker's detect phase (phase 1b) finds an already-consented user who has been inactive. Each step is enqueued when its inactivity threshold (3 / 7 / 14 days) is reached. This sequence only targets users who already consented; it never re-engages anyone who unsubscribed.

| Step | Day | Purpose | Primary CTA |
|------|-----|---------|-------------|
| restart | 3 | Nudge a short restart session | Open your review queue (`/review`) |
| plan | 7 | Point back to the adaptive plan | See today's focus (`/study-plan`) |
| blocked | 14 | Ask what blocked them | Tell me what's blocking you (`/contact`) |

- **restart** — Subject: *A 20-minute restart.* Encourages one short session today (twenty minutes on a single weak area) rather than a perfect plan, via the review queue.
- **plan** — Subject: *Your study plan is waiting.* Reminds the user the plan re-prioritizes from their most recent misses, so they can just open today's focus and start.
- **blocked** — Subject: *What got in the way?* Asks an honest question about what blocked them (time, a confusing topic, or life) and invites a reply to get unstuck.

---

## Sequence E — Milestone referral

**Trigger:** Event-driven; one email per milestone reached.

- **first-practice** is wired: the practice-sessions API route enqueues this step on the user's first completed practice set (deduped so it fires once).
- **mock-review** and **progress** templates exist but their event hooks are **not yet wired** (documented follow-up: call `enqueueStep('milestone', 'mock-review' | 'progress', ...)` from the mock-report and analytics surfaces).

| Step | Day | Purpose | Primary CTA | Status |
|------|-----|---------|-------------|--------|
| first-practice | 0 | Celebrate first set, soft referral | Invite a friend (`/refer`) | Wired |
| mock-review | 0 | Celebrate a reviewed mock, soft referral | Share your link (`/refer`) | Defined, not event-wired |
| progress | 0 | Acknowledge upward trend, soft referral | Refer a friend (`/refer`) | Defined, not event-wired |

- **first-practice** — Subject: *Nice — first set done.* Celebrates the first practice set, reinforces that reviewing misses (tagging them in the error log) is the habit that moves scores, and adds a soft referral note that both parties get founding pricing.
- **mock-review** — Subject: *You reviewed a full mock — that's the work.* Acknowledges that the user reviewed a full-length mock (where most people skip the review) and invites them to send their invite link to someone grinding mocks without reviewing.
- **progress** — Subject: *Your trend is moving.* Notes the mock-to-mock trend is moving in the right direction, credits the user's consistency, and frames a referral as the best compliment.

---

## Notes

- Transactional email (such as password reset) is separate and not gated by marketing consent; it is not part of these sequences.
- If the Resend provider is unset, the queue still builds (enqueue phase always runs) but nothing sends and no send is faked.

# Email nurture sequence — took the free diagnostic, didn't sign up

**Status:** draft, awaiting Adam's review.

**Audience:** prospects who completed the public free-diagnostic (10-question sampler) but did NOT proceed to sign up for the platform. They've taken the test, seen their per-section signal, and bounced. This is the "next step" sequence aimed at converting them.

**Why this audience matters:** these are the most engaged prospects on the marketing site. They self-selected by taking the diagnostic, gave it 8-12 minutes, and saw their result. They're the highest-intent traffic the platform has, and they bounced anyway — usually because the next step (signup) felt heavier than the proof of value warranted. This sequence reduces that asymmetry.

**Trigger:** prospect completed `/free-diagnostic` (any number of correct answers) AND submitted email via the result-screen LeadCapture (source: `free-diagnostic`, magnet: `error-log-template` OR `diagnostic-deeper-view`) BUT did not sign up within 7 days.

**Cadence:** 5 emails over 14 days. Shorter than the error-log nurture because this audience is closer to the buying decision — too many emails will feel like pressure.

**Tone:** acknowledges that they took the diagnostic. References the actual experience. Avoids generic GMAT advice (they already saw it on the result screen). Each email has a single clear next action.

---

## Email 1 — Day 0 (instant on signup, ~24-48 hours after the diagnostic depending on email-capture timing)

**Subject:** your sampler result + what it actually means

Hi,

You took the 10-question sampler. Whatever your per-section signals showed, here's the honest framing: 10 questions is a real-but-noisy estimate. The full 30-question diagnostic produces a clean readiness band on the 205-805 scale, plus a per-topic weakness map that can drive your study plan.

What the full diagnostic adds:

1. Per-topic accuracy within each section (not just per-section)
2. Per-difficulty pattern (Beginner / Intermediate / Advanced)
3. Behavioural signal (fast wrong, slow wrong, slow right) — tells you whether your problem is content or pacing
4. A specific recommendation for which section to start studying first

It takes about 35 minutes. Sign up is free, no card. The diagnostic generates the report immediately and you can take it whenever:

zakariangmat.com/signup

If you'd rather sit with the sampler result for a few days, no problem. I'll send you a note in a couple of days about the single most expensive GMAT mistake — and why it isn't what you think.

Adam

---

## Email 2 — Day 3

**Subject:** the most expensive GMAT mistake (and it's not what you think)

Hi,

Quick one. Most students think the most expensive GMAT mistake is a content gap — a topic they haven't studied enough.

It isn't. The most expensive mistake is the *review failure*: you miss a question, read the explanation, nod, and move on without engaging with why you missed it. Three weeks later, you miss the same question type. Same trap. Different surface form. You read the explanation again. Same nod. Same move on.

The 10-question sampler you took shows the same trap in miniature. If you got 6/10, the value of those 10 questions isn't the score — it's whatever pattern is hidden in the four you missed. Without a structured way to surface that pattern across hundreds of questions, you'll be re-discovering the same trap for the next four months.

The platform's error log + the spaced review queue are exactly that structure. The 30-question diagnostic gives you the first dataset to feed into it.

If you want to try the platform without signing up yet, the free diagnostic-style sample chapter on Critical Reasoning lives here:

zakariangmat.com/sample-chapter

Two full readings from the actual chapter. No signup.

Adam

---

## Email 3 — Day 6

**Subject:** what your sampler section signal actually told you

Hi,

A note on what to do with the per-section signal from the sampler.

If your weakest section was **Quant**, your highest-leverage next move is the 30-question diagnostic to identify which Quant topics specifically. Quant has 10 distinct topic areas; missing on Algebra is a different fix than missing on Number Properties.

If your weakest section was **Verbal**, the question is whether you're slow or imprecise. The 30-question diagnostic distinguishes these by tracking timing alongside accuracy.

If your weakest section was **Data Insights**, your problem is almost certainly format-specific (DS vs MSR vs Table vs Graphics vs Two-Part). DI rewards format mastery as much as content mastery — once the format is automatic, the score moves fast.

In every case, the next step is the full diagnostic. Free, no card, ~35 minutes.

zakariangmat.com/signup

Adam

---

## Email 4 — Day 10

**Subject:** what the trial actually includes

Hi,

If you're holding off because you're not sure what the trial gives you, here's the precise list:

- The 30-question diagnostic, with the full per-topic + per-difficulty report
- All 17 chapters of the curriculum (you can read every section)
- The full question bank, tagged by topic and difficulty (~460 questions)
- The error log, with the six-tag taxonomy
- The adaptive study plan that re-prioritises your week from your error log
- The spaced review queue
- Mock exams scored on the new 205-805 Focus scale
- The AI tutor on every question
- The PWA that works offline once you've cached your review queue

Seven days of full access. No card required. If you're not active by day 7, the trial just ends — nothing to cancel.

zakariangmat.com/signup

If you'd rather poke around without signing up, the resources page has every free deliverable in one place:

zakariangmat.com/resources

Adam

---

## Email 5 — Day 14 (final email)

**Subject:** last note from me

Hi,

This is the last note from this sequence — I won't email again unless you ask me to.

You took the sampler. You saw your per-section signal. The next move is yours.

If the platform is the right fit, the trial is at zakariangmat.com/signup. Free, no card.

If it isn't a fit (right now or ever), the resources page has everything I've written that's free — the error-log template, sample chapters, score converter, exam-day checklist, and seven long-form posts. zakariangmat.com/resources

If you want to ask me anything — about the platform, about your specific situation, about prep strategy in general — just reply to this email. I read every reply. No assistant, no auto-response.

Good luck with the test.

Adam

---

## Implementation notes

- This sequence assumes the email-capture surface on the diagnostic result screen is firing and writing to `lead_captures` with `source = 'free-diagnostic'`.
- The "did not sign up within 7 days" trigger requires the sender to join `lead_captures` against the `auth.users` table (via service-role read in the cron). Until that's wired, this sequence can fire to anyone with `source = 'free-diagnostic'` — the worst case is sending it to someone who signed up in days 0-7, which is mildly redundant but not harmful.
- If a recipient signs up for a paid plan during the sequence, stop sending. They get the post-purchase sequence (TBD).
- Stop-on-unsubscribe is mandatory. Hard-delete from active list within 24 hours.
- Don't run this sequence concurrently with the error-log nurture (`email-nurture-error-log.md`) for the same recipient. Pick one based on which lead-capture surface they came in through.

## What to defer

- A diagnostic-completed-but-no-email-captured branch — these are the highest-intent prospects of all. Hard to nurture without an email; the only conversion path is the result-screen CTA. Worth a UX study later to figure out why they didn't capture the email.
- A "took the diagnostic + signed up but never came back" sequence — different audience entirely (now they're a customer, not a prospect). Different sequence.

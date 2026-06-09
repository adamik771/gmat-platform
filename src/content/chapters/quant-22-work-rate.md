---
slug: quant-22-work-rate
title: "Work-Rate Problems"
section: Quant
estimated_minutes: 10
prerequisites:
  - quant-21-rate-time-distance
summary: |
  Add the rates, never the times — combined work and the staggered-start setups.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - rates-work-q7
      - rates-work-q8
  - id: combined-work
    type: reading
    title: "Combined work — add the rates, never the times"
    check_question_ids:
      - rates-work-q12
  - id: partial-work-staggered-starts
    type: reading
    title: "Partial work and staggered starts"
    check_question_ids:
      - rates-work-q14
      - rates-work-q16
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - rates-work-q9
      - rates-work-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - rates-work-q11
      - rates-work-q12
---

## @combined-work

Two workers or two pipes working on the same job. **Never add the times. Always add the rates.**

**Intuition first.** Picture two faucets filling a bucket. Faucet A fills 1/6 of the bucket per minute. Faucet B fills 1/4 of the bucket per minute. Per minute together, they fill 1/6 + 1/4 of the bucket — the rates add because each faucet is contributing *simultaneously* to the same pool. The time to fill the bucket then follows directly: if the combined rate is 5/12 per minute, the bucket fills in 12/5 minutes. Times would only add if the faucets worked *sequentially* — A fills halfway, then B finishes. That's a different problem entirely.

**The single formula:** if Worker A takes `a` hours alone and Worker B takes `b` hours alone, together they take `T` hours where:

    1/a + 1/b = 1/T

**Worked example.** Pipe A fills a tank in 6 hours, Pipe B fills it in 4 hours. Together?

- Rate of A: 1/6 tank per hour
- Rate of B: 1/4 tank per hour
- Combined rate: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 tank per hour
- Combined time: T = 12/5 = **2.4 hours**

Students who add *times* (6 + 4 = 10, or average to 5) get answer E every time. The test-writers put that trap in every combined-work question. Memorize: **add rates, not times**.

**Two instant sanity checks.** (1) Combined time must always be *less* than the smaller individual time. If A alone takes 4 hours and B alone takes 6, together they must finish in under 4 hours — a second worker can only help. If your answer is ≥ 4, you made an error. (2) Combined time must be *more* than half the smaller individual time. Two workers both taking 4 hours finish in 2 hours — so combined time below 2 is impossible when either alone takes 4.

**Equal-rate shortcut.** If n workers all work at the same rate and one alone takes t hours, together they take t/n hours. Two painters each 5 hours alone → together 5/2 = 2.5 hours. Three pumps each 4 hours → together 4/3. Fast pattern-match for the easiest combined-work questions.

**Reverse direction: solving for one unknown rate.** Often the GMAT gives you the combined time and one individual time, and asks for the other.

A finishes in 12 hours alone. A + B finish in 8 hours together. How long does B take alone?

    1/12 + 1/b = 1/8
    1/b = 1/8 − 1/12 = 3/24 − 2/24 = 1/24
    b = 24 hours

Trap answer: students who manipulate times compute 12 − 8 = 4 (wrong) or 12 + 8 = 20 (also wrong). The right setup is always rate-based.

**Unit of work is arbitrary.** Some problems use "pump-hours" — total work expressed as (workers × time). Three pumps × 4 hours = 12 pump-hours. If the same job is done by 5 pumps: 12/5 = 2.4 hours. This is the combined-work formula reorganized: **(workers) × (time) = total work**, constant for a given job.

**Trap to watch.** "How long does the job take if three pumps work for 2 hours, then two more pumps join?" That is *not* pure combined work — it is a staggered-start problem. Combined work assumes everyone starts at time zero. The staggered case is handled in the next section.

> **Self-explanation prompt.** Before the check question, explain in one sentence: if A takes 4 hours alone and B takes 6 hours alone, why does the combined time land near 2.4 hours rather than near 5 hours? If you can say "because both contribute their full rate every hour, so the job disappears faster than either alone — not at some average speed between them," you've understood why adding times is wrong.

> **Self-explanation prompt.** Before moving on, say this out loud: *why* do you add rates and not times when two workers combine? If you can explain "because each worker independently contributes a fraction of the job per hour — those fractions add; the time to finish is 1 divided by the combined fraction," you've understood the concept, not just memorized the formula. A student who truly understands this will never again add the times, even under pressure.

> **Recall check.** Cover this section. Pipe A fills a tank in 8 hours; Pipe B fills the same tank in 12 hours. Can you write the combined rate and the combined time from memory, before looking? If A's rate is 1/8 and B's is 1/12, the combined rate is 1/8 + 1/12 = 5/24, and the combined time is 24/5 = 4.8 hours. If you got a number larger than 8 or computed 8 + 12 = 20, review the section. Spaced retrieval (Roediger & Karpicke, 2006) converts a rule you've read into a rule you own.

## @partial-work-staggered-starts

When work starts with one worker and a second joins later — or when a speed changes mid-trip — break the problem into phases and compute each phase separately.

**The two-phase template.**

| Phase | Who works | Duration | Work done |
|---|---|---|---|
| Phase 1 | First worker alone | t₁ (given) | rate₁ × t₁ |
| Phase 2 | Both together | t₂ (solve for this) | combined rate × t₂ |

Remaining work going into phase 2 = total − phase 1 work. Then t₂ = remaining work ÷ combined rate. **Total time = t₁ + t₂.**

Write this table in your margin whenever you see "A worked alone for X hours, then B joined."

**Worked example.** Pipe X fills a tank in 6 hours. After 2 hours of X alone, Pipe Y (which alone takes 9 hours) joins. How long total?

- Phase 1 (X alone, 2 hours): fraction filled = 2 × (1/6) = **1/3**. Remaining = 2/3.
- Phase 2 combined rate: 1/6 + 1/9 = 3/18 + 2/18 = **5/18 per hour**.
- Phase 2 time: (2/3) ÷ (5/18) = (2/3) × (18/5) = **12/5 = 2.4 hours**.
- **Total: 2 + 2.4 = 4.4 hours.**

Sanity check: X + Y together alone would take 18/5 = 3.6 hours. Having X work solo for 2 hours first should push the total above 3.6 — and 4.4 > 3.6, so the answer passes the smell test.

**Worked example — solving for the unknown rate.** Alex paints alone, finishing in 10 hours. After 4 hours he's done 4/10 = 2/5 of the job, leaving 3/5. Beth joins, and together they finish the remaining 3/5 in 3 hours. How long does Beth take alone?

- Combined rate in phase 2 = (3/5) ÷ 3 = **1/5 per hour**.
- Alex's rate = 1/10 per hour.
- Beth's rate = 1/5 − 1/10 = **1/10 per hour**.
- **Beth alone: 10 hours.**

**The scaling shortcut for identical workers.** (workers) × (hours) = total work, constant for a given job. Three pumps × 4 hours = 12 pump-hours. Five pumps: 12/5 = **2.4 hours**. Works because all pumps are interchangeable — total work doesn't change.

**When a pipe drains instead of fills.** Subtract drain rates from fill rates. Three pipes: A fills at 1/a, B fills at 1/b, C drains at 1/c. Combined: 1/a + 1/b − 1/c. Missing that minus sign — treating C as a filler — produces a badly wrong answer.

**When to use algebra instead of phases.** "If her speed were 10 mph higher, she'd arrive 15 minutes earlier" is a speed-comparison problem, not a staggered-phase problem. Write two equations (original, altered), solve the system. This usually produces a quadratic with one valid positive root.

**Worked example (speed-comparison setup).** Usual speed r, time 60/r. Faster speed r + 10, time 60/(r+10). Difference = 1/4 hour.

    60/r − 60/(r+10) = 1/4

Multiply both sides by 4r(r+10):

    240(r+10) − 240r = r(r+10)
    2400 = r² + 10r
    r² + 10r − 2400 = 0 → (r−40)(r+60) = 0 → r = 40 mph

The negative root (−60) is discarded because speed must be positive.

**Micro-drill.** Apply the two-phase template to each — 90 seconds each:

1. Machine A fills a vat in 8 hours. After 2 hours alone, Machine B (which alone takes 12 hours) joins. How long in total until the vat is full?
2. Pipe A fills a tank in 6 hours. After 3 hours of filling alone, Pipe C opens and begins draining the tank at 1/9 tank per hour. Both run until the tank is full. Total time?
3. Painter A finishes a room in 10 hours. After 4 hours alone, Painter B joins. Together they complete the remaining work in 3 more hours. How long would Painter B take alone?

Answers: (1) **5.6 hours** — Phase 1: 2 × (1/8) = 1/4 done; remaining = 3/4. Combined rate: 1/8 + 1/12 = 5/24 per hour. Phase 2: (3/4) ÷ (5/24) = 18/5 = 3.6 hr. Total: 2 + 3.6 = 5.6. Sanity check: A+B together alone take 24/5 = 4.8 hr; adding 2 hours of A solo must push total above 4.8, and 5.6 > 4.8. (2) **12 hours** — Phase 1: 3 × (1/6) = 1/2 done; remaining = 1/2. Net fill rate once C opens: 1/6 − 1/9 = 1/18 per hour. Phase 2: (1/2) ÷ (1/18) = 9 hr. Total: 3 + 9 = 12. If you forgot to subtract C's drain rate, you got 6 hours — re-read "When a pipe drains instead of fills" above. (3) **B alone takes 10 hours** — Phase 2 combined rate: (3/5) ÷ 3 = 1/5 per hour. A's rate = 1/10 per hour. B's rate = 1/5 − 1/10 = 1/10 per hour. B alone = 10 hours. If you got 6 hours for B, you may have computed A's remaining contribution incorrectly — only track rates, not times across phases.

> **Self-explanation prompt.** Before the check questions: why can't you solve a staggered-start problem with a single combined-work equation from the beginning? If you can say "because the combined rate only applies during the phase when both are working — during the solo phase, only one worker's rate applies — so a single equation would overcount the second worker's contribution," the two-phase template will feel like the natural approach, not a memorized trick.

> **Self-explanation prompt.** Why does the two-phase template require you to compute the *fraction of the job remaining* after phase 1, rather than working directly with times? If you can say "because phase 2 operates at a different rate, so time alone doesn't tell you how much was done — you need the fraction of work left, then divide that by the new rate to get phase 2 time," you've understood the structure. The moment you try to add or average the times across phases without tracking the fraction of work, you're guaranteed a wrong answer.

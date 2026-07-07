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
      - rates-work-q49
      - rates-work-q33
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
      - rates-work-q70
---

## @combined-work

Two workers or two pipes working on the same job. **Never add the times. Always add the rates.** That single sentence is the spine of every combined-work question on the GMAT, and once it is wired into your reflexes the entire topic collapses into one formula and a handful of sanity checks. The test-writers know this is where students slip, so they bait nearly every problem with an answer choice equal to the sum of the times — and you will recognize and reject that trap on sight by the end of this section.

**Intuition first.** Picture two faucets filling a bucket. Faucet A fills 1/6 of the bucket per minute. Faucet B fills 1/4 of the bucket per minute. Per minute together, they fill 1/6 + 1/4 of the bucket — the rates add because each faucet is contributing *simultaneously* to the same pool. The time to fill the bucket then follows directly: if the combined rate is 5/12 per minute, the bucket fills in 12/5 minutes. Times would only add if the faucets worked *sequentially* — A fills halfway, then B finishes. That is a different problem entirely. The reason times cannot add is that time is not a thing the workers *produce*; work is. Rates measure work-per-hour, and work-per-hour is what stacks when two sources push on the same job at once. If you ever feel the urge to add 6 and 4, picture both faucets running at the same moment — clearly the bucket fills faster than either alone, never slower, so a number bigger than 6 cannot be the answer.

**Why "rate" is just a fraction of the job.** A worker who finishes a job in `a` hours completes 1/a of the job each hour — that is the entire meaning of a rate here. The whole job is 1 (one job). So 1/a is "fraction of the job per hour." When two workers run together, each hour the job loses 1/a + 1/b of itself, and the job is gone when those hourly fractions have accumulated to a full 1. That is why you divide 1 by the combined rate to get the time. Everything else in this section is bookkeeping on top of that one idea.

**The single formula.** If Worker A takes `a` hours alone and Worker B takes `b` hours alone, together they take `T` hours where:

    1/a + 1/b = 1/T

There is a clean closed form worth memorizing for two workers only: T = (a × b) / (a + b). This is the "product over sum" shortcut. It is exactly the formula above solved for T, and it is fast — but it works for *two* workers only. With three or more, go back to adding the reciprocals.

**Worked example (easy).** Pipe A fills a tank in 6 hours, Pipe B fills it in 4 hours. Together?

- Rate of A: 1/6 tank per hour
- Rate of B: 1/4 tank per hour
- Combined rate: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 tank per hour
- Combined time: T = 12/5 = **2.4 hours**

Check with product-over-sum: (6 × 4)/(6 + 4) = 24/10 = 2.4 hours. Same answer, one step. Students who add *times* (6 + 4 = 10, or average to 5) get answer E every time. The test-writers put that trap in every combined-work question. Memorize: **add rates, not times**.

> **Recall check.** Cover everything above. Two workers finish a job in `a` and `b` hours alone. What is the two-worker closed-form for the combined time `T`, and why does it fail for three workers? (T = ab/(a+b); it fails for three because that algebra only collapses the sum of *two* reciprocals — with three reciprocals there is no clean two-term product-over-sum, so you must add 1/a + 1/b + 1/c and invert.)

**Two instant sanity checks.** (1) Combined time must always be *less* than the smaller individual time. If A alone takes 4 hours and B alone takes 6, together they must finish in under 4 hours — a second worker can only help. If your answer is ≥ 4, you made an error. (2) Combined time must be *more* than half the smaller individual time. Two workers both taking 4 hours finish in 2 hours — so combined time below 2 is impossible when either alone takes 4. Together these two checks pin the combined time into a narrow band: strictly between (smaller time)/2 and (smaller time). On a multiple-choice screen, that band alone often kills three of the five answer choices before you compute anything. Burn this band into memory; it is the single most powerful answer-elimination tool in the topic.

**Equal-rate shortcut.** If n workers all work at the same rate and one alone takes t hours, together they take t/n hours. Two painters each 5 hours alone → together 5/2 = 2.5 hours. Three pumps each 4 hours → together 4/3. Fast pattern-match for the easiest combined-work questions. It is the same formula in disguise: n copies of 1/t add to n/t, and inverting n/t gives t/n.

**Worked example (three workers — no product-over-sum).** Three drains empty a basin: drain X in 6 hours, drain Y in 8 hours, drain Z in 12 hours, all open at once. How long to empty the basin?

- Rates: 1/6, 1/8, 1/12 of the basin per hour
- Common denominator 24: 4/24 + 3/24 + 2/24 = 9/24 = 3/8 basin per hour
- Combined time: T = 1 ÷ (3/8) = 8/3 ≈ **2.67 hours**

If you reach for product-over-sum here you are stuck — there is no two-worker shortcut for three sources. Add all three reciprocals and invert. Sanity check: the fastest drain alone takes 6 hours, so the answer must sit between 6/2 = 3 and 6 ... wait — that band is for *two* workers. With three helpers the floor drops further (the band's lower bound was built on "a second worker can at most halve the time"); 8/3 ≈ 2.67 is below 3, which is fine and expected because a *third* helper pushes the time below the two-worker floor. The hard upper bound still holds: the answer must be under the fastest solo time of 6, and 2.67 clearly is.

**Worked example (medium — answer-choice elimination).** Hose A fills a pool in 3 hours; Hose B fills it in 5 hours. Running together, how long to fill the pool?
(A) 8 hours (B) 4 hours (C) 2 hours (D) 15/8 hours (E) 4/15 hour

Strategy named: **answer-choice elimination via sanity bounds.** Before any arithmetic, the smaller individual time is 3 hours, so the answer must be strictly between 3/2 = 1.5 and 3. That instantly kills (A) 8 and (B) 4 — both too big — and (E) 4/15 ≈ 0.27, far too small. Only (C) 2 and (D) 15/8 = 1.875 survive the band. Now compute: combined rate 1/3 + 1/5 = 5/15 + 3/15 = 8/15, so T = 15/8 = **1.875 hours, answer (D)**. Notice (C) 2 was the "round-ish" decoy and (E) 4/15 was the trap for someone who computed the rate (8/15) and forgot to invert it. The bounds did most of the work.

**Reverse direction: solving for one unknown rate.** Often the GMAT gives you the combined time and one individual time, and asks for the other.

A finishes in 12 hours alone. A + B finish in 8 hours together. How long does B take alone?

    1/12 + 1/b = 1/8
    1/b = 1/8 − 1/12 = 3/24 − 2/24 = 1/24
    b = 24 hours

Trap answer: students who manipulate times compute 12 − 8 = 4 (wrong) or 12 + 8 = 20 (also wrong). The right setup is always rate-based. The structural tell that you are in "reverse" mode: the combined time is *given* and one of the individual times is the unknown. Set up the same equation — 1/a + 1/b = 1/T — but now you are solving for a reciprocal, then inverting at the very end. Never invert until the reciprocal is fully isolated.

**Trap to watch.** When you solve for an unknown rate, the answer you compute is a *rate* (a fraction like 1/24 of the job per hour). You must invert it to report a *time* (24 hours). The single most common careless miss in this whole topic is stopping at 1/b = 1/24 and bubbling "1/24" or stopping at the combined rate 8/15 and bubbling "8/15." Always ask: "Is the answer choice a rate or a time?" and make sure your final number matches.

> **Recall check.** Without looking back: A alone takes 9 hours, and A and B together take 6 hours. Set up the equation and solve for B's time alone. (1/9 + 1/b = 1/6 → 1/b = 1/6 − 1/9 = 3/18 − 2/18 = 1/18 → b = 18 hours. Sanity check: B is slower than A, which makes sense — if A alone already takes 9 and the pair only gets to 6, B cannot be doing much.)

**Worked example (hard — backsolving instead of algebra).** Working together, two robots assemble a batch in 6 hours. The faster robot alone would take 5 hours *less* than the slower robot alone. How long does the faster robot take alone?
(A) 9 hours (B) 10 hours (C) 12 hours (D) 15 hours (E) 18 hours

The clean setup is algebraic: let the faster robot take f hours, the slower f + 5. Then 1/f + 1/(f+5) = 1/6, which clears to a quadratic. But on test day **backsolving** is faster and bullet-proof. Strategy named: **backsolve from the answer choices.** Test (B) f = 10, slower = 15: 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. That equals the target 1/6 exactly, so the combined time is 6 hours. **Answer (B), 10 hours.** No quadratic, no factoring — just one reciprocal sum that either hits 1/6 or does not. Start backsolving from (B) or (D) (the "nice" middle-ish values) and you usually land in one or two tries. For the record, the algebra route gives 6(2f + 5) = f(f+5) → f² − 7f − 30 = 0 → (f − 10)(f + 3) = 0 → f = 10, discarding the negative root. Same answer, more sweat.

**Unit of work is arbitrary.** Some problems use "pump-hours" — total work expressed as (workers × time). Three pumps × 4 hours = 12 pump-hours. If the same job is done by 5 pumps: 12/5 = 2.4 hours. This is the combined-work formula reorganized: **(workers) × (time) = total work**, constant for a given job. Choosing a concrete number for "the job" — say 12 units instead of 1 — is itself a strategic move. **Plugging in a smart number for the whole job** turns ugly fractions into clean integers.

**Worked example (plug in a smart job size).** Machine A makes a full batch in 4 hours; Machine B makes the same batch in 6 hours. Working together, how many hours for one batch — and how many full batches in a 24-hour shift? Strategy named: **plug in a smart number for the total work.** Instead of "1 batch," let the batch be **12 widgets** (the LCM of 4 and 6, so both rates come out as integers). Then A makes 12/4 = 3 widgets/hour and B makes 12/6 = 2 widgets/hour. Together: 5 widgets/hour. One batch (12 widgets) takes 12/5 = **2.4 hours**. In 24 hours they make 24 × 5 = 120 widgets = 120/12 = **10 batches**. Picking 12 instead of 1 erased every fraction until the final divide.

**Quick comparison of the three routes.** The same easy problem (4 hours and 6 hours together) solved three ways, so you can see they agree:

| Route | Setup | Result |
|---|---|---|
| Add reciprocals | 1/4 + 1/6 = 5/12, invert | 12/5 = 2.4 h |
| Product over sum | (4 × 6)/(4 + 6) = 24/10 | 2.4 h |
| Smart job size (12 units) | 3 + 2 = 5 units/h, 12/5 | 2.4 h |

Three roads, one destination. Pick whichever is fastest for the numbers in front of you: product-over-sum for two clean integers, reciprocal-adding for three or more, smart-job-size when the question asks for a count of widgets or batches.

**The full procedure to memorize.** Run this every time:

1. **Identify the mode.** Pure combined work (everyone starts at time zero) or staggered/phased (someone joins or leaves later)? If staggered, jump to the next section's two-phase template — this procedure is for the pure case only.
2. **Convert each given time to a rate.** Worker taking `a` hours → rate 1/a (job per hour). Optionally pick a smart job size (the LCM of the times) to make rates whole numbers.
3. **Add the rates** — sum reciprocals for fillers, *subtract* the rate of anything that drains or undoes work.
4. **Invert the combined rate** to get the combined time: T = 1 ÷ (combined rate). Do not skip this inversion.
5. **Decide what the question wants** — a time, a rate, an unknown individual time, or a count of jobs — and convert your result to *that* quantity.
6. **Sanity-check against the bounds:** combined time is strictly between (smallest individual time)/2 and (smallest individual time) for two workers, and below the fastest solo time for any number of workers. If it lands outside, you erred.

> **Self-explanation prompt.** Before moving on, say this out loud: *why* do you add rates and not times when two workers combine? If you can explain "because each worker independently contributes a fraction of the job per hour — those fractions add, and the time to finish is 1 divided by the combined fraction," you have understood the concept, not just memorized the formula. The deeper version: the average of the *times* (5 hours for a 4-and-6 pair) answers a question nobody asked; what governs finishing is the sum of the *rates*, and summing rates always produces a time below the faster worker's solo time. A student who truly understands this will never again add the times, even under pressure.

**Common mistakes.**

- **Adding or averaging times.** 6 + 4 = 10 or (6 + 4)/2 = 5. This is the signature error and the reason E exists. Add rates.
- **Forgetting to invert.** Computing the combined rate (e.g. 5/12) and reporting it as the time. The rate is per-hour; the time is its reciprocal (12/5).
- **Stopping at a reciprocal in reverse problems.** Isolating 1/b = 1/24 and bubbling 1/24 instead of 24.
- **Using product-over-sum with three workers.** ab/(a+b) is a two-worker-only shortcut. With three, add all three reciprocals.
- **Treating a drain as a filler.** A pipe that empties the tank *subtracts* from the combined rate; a missing minus sign produces a wildly wrong time.
- **Mismatching the question's units.** It asked for batches per shift, you gave hours per batch (or vice versa). Re-read the final sentence.

**Trap to watch.** "How long does the job take if three pumps work for 2 hours, then two more pumps join?" That is *not* pure combined work — it is a staggered-start problem. Combined work assumes everyone starts at time zero. The moment a worker joins late, leaves early, or a rate changes mid-job, the single equation 1/a + 1/b = 1/T no longer applies on its own; you must break the job into phases. The staggered case is handled in the next section.

> **Recall check.** Cover this section. Pipe A fills a tank in 8 hours; Pipe B fills the same tank in 12 hours. Can you write the combined rate and the combined time from memory, before looking? (If A's rate is 1/8 and B's is 1/12, the combined rate is 1/8 + 1/12 = 5/24, and the combined time is 24/5 = 4.8 hours. Cross-check with product-over-sum: (8 × 12)/(8 + 12) = 96/20 = 4.8 — match. If you got a number larger than 8 or computed 8 + 12 = 20, review the section.) Spaced retrieval converts a rule you have read into a rule you own.

**Recap.** Convert every time to a rate (1/time = fraction of job per hour). Add the rates of helpers, subtract the rates of drains, then invert the total to get the combined time. For exactly two workers, T = ab/(a+b) is the one-step shortcut; for three or more, add all the reciprocals and invert. The answer is always strictly below the fastest solo time (and, for two workers, above half of it) — let that band pre-eliminate wrong choices. When the algebra looks heavy, backsolve from the answers or plug in a smart job size (the LCM of the given times) to clear the fractions. And whatever else you do under time pressure: **add the rates, never the times** — then make sure your final number is the quantity the question actually asked for.

## @partial-work-staggered-starts

When work starts with one worker and a second joins later — or when a speed changes mid-trip — break the problem into phases and compute each phase separately. The single-rate `1/a + 1/b = 1/T` formula from the last section only works when everyone starts at time zero. The moment someone joins late, leaves early, or a rate changes, you are no longer in pure combined-work territory: you are stacking two or more combined-work calculations end to end. The skill is not new math — it is bookkeeping. Track the **fraction of the job done** at the end of each phase, never the raw times, and the problem unfolds cleanly.

**Why fractions, not times.** Here is the trap the whole section defends against. During the solo phase only one rate applies; during the joint phase a faster combined rate applies. Because the two phases run at *different speeds*, the time spent in phase 1 tells you nothing directly about phase 2 — you cannot add or average the durations and expect the work to balance. What carries cleanly across the phase boundary is **work**: the job is one whole, phase 1 eats some fraction of it, and phase 2 must finish exactly what is left. So you convert phase 1's time into a *fraction of the job*, subtract from 1 to get the remaining fraction, then divide that remainder by the new rate to get phase 2's time. Work is the conserved quantity; time is not. This single insight — *work is conserved, time is not* — is the spine of every problem in this section. If you remember nothing else, remember to carry the fraction across the boundary.

**The two-phase template.**

| Phase | Who works | Duration | Work done |
|---|---|---|---|
| Phase 1 | First worker alone | t1 (given) | rate1 × t1 |
| Phase 2 | Both together | t2 (solve for this) | combined rate × t2 |

Remaining work going into phase 2 = total − phase 1 work. Then t2 = remaining work ÷ combined rate. **Total time = t1 + t2.**

Write this table in your margin whenever you see "A worked alone for X hours, then B joined." Drawing the two rows physically separates the two rates and stops you from sliding into a single-equation error under time pressure. The table is not decoration — it is the difference between a clean 90-second solve and a confident wrong answer. The act of writing "rate1 × t1" in the last cell forces you to commit to a *fraction*, which is exactly the quantity that survives the phase change.

**The procedure to memorize.** Five steps, in this exact order:

1. **Write each worker's rate** as 1/(time alone). Keep them as fractions, not decimals — fractions add cleanly and the GMAT answers are usually clean fractions.
2. **Phase 1 work = (solo rate) × (solo time).** This is a fraction of the whole job. Compute it and write it down.
3. **Remaining work = 1 − (phase 1 work).** This is the fraction that still has to be done.
4. **Phase 2 rate = sum of all rates working in phase 2** (add fillers, subtract drainers).
5. **Phase 2 time = (remaining work) ÷ (phase 2 rate).** Then **total = phase 1 time + phase 2 time.**

If a problem instead gives you phase 2's time and asks for a missing worker's rate, run steps 2–3 the same way, then back out the unknown rate from step 4: unknown rate = (phase 2 rate) − (known rates). The procedure runs forward or backward; only the unknown moves.

> **Recall check.** Cover the template. A pipe fills a tank in 6 hours and runs alone for 2 hours before a second pipe joins. What is the *first* number you write down, and what does it represent? (The phase 1 work: 2 × 1/6 = 1/3 of the tank filled — a fraction of the job, not a time. From there, remaining = 2/3.)

**Worked example (easy).** Machine A fills a vat in 8 hours. After 2 hours alone, Machine B (which alone takes 12 hours) joins. How long in total until the vat is full?

- Phase 1 (A alone, 2 hours): work = 2 × (1/8) = **1/4**. Remaining = 3/4.
- Phase 2 combined rate: 1/8 + 1/12 = 3/24 + 2/24 = **5/24 per hour**.
- Phase 2 time: (3/4) ÷ (5/24) = (3/4) × (24/5) = 72/20 = **18/5 = 3.6 hours**.
- **Total: 2 + 3.6 = 5.6 hours.**

Sanity check, exactly as in combined work: A and B starting together would finish in 24/5 = 4.8 hours. Letting A work solo for 2 hours first must push the total *above* 4.8, and 5.6 > 4.8. The smell test passes. Notice that to divide by a fraction you *flip and multiply* — (3/4) ÷ (5/24) becomes (3/4) × (24/5). Reaching for a decimal here invites rounding error; the fraction path lands on a clean 18/5 every time.

**Worked example (medium).** Pipe X fills a tank in 6 hours. After 2 hours of X alone, Pipe Y (which alone takes 9 hours) joins. How long total?

- Phase 1 (X alone, 2 hours): fraction filled = 2 × (1/6) = **1/3**. Remaining = 2/3.
- Phase 2 combined rate: 1/6 + 1/9 = 3/18 + 2/18 = **5/18 per hour**.
- Phase 2 time: (2/3) ÷ (5/18) = (2/3) × (18/5) = **12/5 = 2.4 hours**.
- **Total: 2 + 2.4 = 4.4 hours.**

Sanity check: X + Y together from the start would take 18/5 = 3.6 hours. Having X work solo for 2 hours first should push the total above 3.6 — and 4.4 > 3.6, so the answer passes. The common denominator 18 did double duty here: it built the combined rate *and* canceled cleanly when you flipped it into the division. That is why step 1 insists on fractions — the arithmetic keeps reusing the same denominator instead of spawning ugly decimals.

> **Recall check.** Without rereading: in the two-phase template, why do you divide the *remaining* work by the combined rate rather than dividing the *whole* job by it? (Because the combined rate only applies in phase 2, and by then part of the job is already finished — only the leftover fraction is done at the combined rate. Dividing the whole job by the combined rate would silently pretend both workers were present from time zero.)

**Worked example (drain phase).** Pipe A fills a tank in 6 hours. After 3 hours of filling alone, Pipe C opens and begins draining the tank at 1/9 tank per hour. Both run until the tank is full. Total time?

- Phase 1 (A alone, 3 hours): work = 3 × (1/6) = **1/2**. Remaining = 1/2.
- Phase 2 *net* rate: A fills at 1/6, C drains at 1/9, so net = 1/6 − 1/9 = 3/18 − 2/18 = **1/18 per hour**. The drain is **subtracted**.
- Phase 2 time: (1/2) ÷ (1/18) = (1/2) × 18 = **9 hours**.
- **Total: 3 + 9 = 12 hours.**

If you forgot the minus sign and treated C as a second filler, you got a net rate of 1/6 + 1/9 = 5/18 and a total near 4.8 hours — a badly wrong answer. **When a pipe drains instead of fills, subtract its rate.** Three pipes with A and B filling and C draining give a combined rate of 1/a + 1/b − 1/c. Missing that single minus sign is the most common error in drain problems. A useful gut-check: if a drain is present, phase 2 must run *slower* than A alone would, so the total time must be *long*. A "fast" answer in a drain problem is almost always a dropped minus sign.

**Worked example (solving for the unknown rate).** Alex paints alone, finishing in 10 hours. After 4 hours he's done 4/10 = 2/5 of the job, leaving 3/5. Beth joins, and together they finish the remaining 3/5 in 3 hours. How long does Beth take alone?

- Combined rate in phase 2 = (3/5) ÷ 3 = **1/5 per hour**.
- Alex's rate = 1/10 per hour.
- Beth's rate = (combined) − (Alex) = 1/5 − 1/10 = 2/10 − 1/10 = **1/10 per hour**.
- **Beth alone: 10 hours.**

Notice the back-out move: you found the combined phase-2 rate from the work and time given, then *subtracted the known rate* to isolate the unknown. This is step 4 of the procedure run in reverse, and it is exactly the same "subtract to isolate" logic from the combined-work section's reverse-direction example. A student who tries to do this with times — say, computing 10 − 3 or 4 + 3 — gets nonsense, because times do not subtract across phases that run at different rates.

> **Self-explanation prompt.** Why can't you solve a staggered-start problem with a single combined-work equation from the beginning? Say it in one sentence. If you can say "because the combined rate only applies during the phase when both are working — during the solo phase only one worker's rate applies — so a single equation would overcount the late worker's contribution," the two-phase template will feel like the natural approach, not a memorized trick. Then push one level deeper: explain why the template tracks the *fraction of the job remaining* rather than the times. "Because phase 2 runs at a different rate, so the solo time alone doesn't tell you how much is left — I need the leftover fraction, then divide it by the new rate to get phase 2's time." The instant you try to add or average durations across phases without tracking work, you are guaranteed a wrong answer.

**The scaling shortcut for identical workers.** When every worker is the same speed, you do not need the phase machinery at all. Use **(workers) × (hours) = total work**, a constant for a given job. Three pumps × 4 hours = 12 pump-hours. Five identical pumps doing the same job: 12 / 5 = **2.4 hours**. It works precisely because identical pumps are interchangeable — the total pump-hours required by the job never changes, so you can solve for whichever quantity is unknown. Watch for the giveaway phrase "each pump" or "identical machines"; it is your cue to reach for pump-hours instead of summing fractions. This shortcut also handles staggered starts among identical workers gracefully: just count the pump-hours each worker contributes and add them. If two identical pumps each run 3 hours and a third joins for the last 2 hours, total pump-hours = 3 + 3 + 2 = 8, and you compare that to the job's required pump-hours.

> **Recall check.** A job needs 12 pump-hours and the pumps are identical. Two pumps run for 3 hours, then a third joins. How much work is left when the third joins, and how long until done with all three running? (Two pumps × 3 hours = 6 pump-hours done, so 6 remain. Three pumps clear 6 pump-hours in 6/3 = 2 more hours.)

**Worked example (estimation + answer-choice tactics).** Sometimes you do not need the exact number — you need to eliminate fast. Suppose: "Pump A fills a pool in 5 hours. After running alone for 1 hour, pump B (alone time 10 hours) joins. Roughly how long in total?" with choices (A) 2.7 hr (B) 3.0 hr (C) 3.7 hr (D) 4.3 hr (E) 5.5 hr.

- **Estimation move.** Both pumps together from the start would take 1/(1/5 + 1/10) = 1/(3/10) = 10/3 ≈ 3.33 hours. Running A solo for 1 hour first must push the total *above* 3.33, so anything ≤ 3.33 is dead. Cross off (A) 2.7 and (B) 3.0 instantly.
- **Upper bound.** A alone would take 5 hours; the real answer is faster than that because B helps for most of the run, so (E) 5.5 is impossible — it exceeds even A's solo time. Cross it off.
- That leaves (C) 3.7 and (D) 4.3. One quick exact pass: phase 1 work = 1 × 1/5 = 1/5, remaining = 4/5; combined rate = 3/10; phase 2 = (4/5) ÷ (3/10) = (4/5)(10/3) = 40/15 = 8/3 ≈ 2.67; total = 1 + 2.67 = **3.67 hours → (C)**.

Named tactics: the **"both-from-start" lower bound** and the **"slowest-solo" upper bound** bracket the answer and routinely kill two or three choices before you commit to arithmetic. On a hard question where time is short, bracketing alone may leave one survivor and you can move on. Internalize the logic of each bound: starting both workers together is the *fastest* possible scenario, so it is a floor; having only the fastest single worker run the whole job is *slower* than any cooperative scenario, so the slowest-solo time is a ceiling. Any real staggered-start answer lives strictly between them.

**When to use algebra instead of phases.** Not every "something changed mid-way" problem is a staggered start. "If her speed were 10 mph higher, she'd arrive 18 minutes earlier" is a *speed-comparison* problem, not a phased one — nobody joins partway; two whole scenarios are being compared. Write two equations (original, altered) and solve the system. This usually produces a quadratic with one valid positive root.

**Worked example (speed-comparison setup).** Usual speed r, time 60/r. Faster speed r + 10, time 60/(r+10). The faster trip is 18 minutes (3/10 hour) shorter:

    60/r − 60/(r+10) = 3/10

Multiply both sides by 10r(r+10):

    600(r+10) − 600r = 3r(r+10)
    6000 = 3r^2 + 30r
    r^2 + 10r − 2000 = 0 → (r−40)(r+50) = 0 → r = 40 mph

The negative root (−50) is discarded because speed must be positive. **Strategic alternative — backsolving.** If this appeared with answer choices like (A) 30 (B) 40 (C) 50 (D) 60 (E) 80, you could plug a choice straight in: test (B) r = 40. Then 60/40 = 1.5 hours and 60/50 = 1.2 hours; difference 0.3 hour = 18 minutes — exactly the target, so (B) is the answer on the first real test. Had the gap come out larger than 18 minutes, the usual speed would have to be higher (a faster baseline shrinks the gap); had it come out smaller, lower. The real lesson: **backsolve when the choices are clean integers and the target lands exactly on one; reach for the quadratic when the given difference is an odd fraction that no listed integer hits cleanly.** Knowing which tool to grab — and when to abandon backsolving after one or two misses — is itself the skill.

**Trap to watch.** The headline trap is **adding or averaging times across phases.** "A works 2 hours, then both finish in some more time — total is 2 plus that," yes — but you can *only* get "that" by going through the remaining-fraction step. Students who see "2 hours solo, job finished in 5 hours combined-rate terms" and try to blend the two durations directly are doomed. A second, sneakier trap: **forgetting that the solo worker keeps working in phase 2.** When B joins A, A does not stop — phase 2's rate is A + B, not B alone. And the drain trap from above: **a draining pipe subtracts.** All three come from the same root cause: not writing the two-row table and not labeling each rate.

**Common mistakes.**

- **Adding times instead of tracking work.** Times only add *after* you've converted phase 1 to a fraction and solved phase 2 separately. You never average durations.
- **Dropping the first worker in phase 2.** When B joins A, the phase-2 rate is the *sum* A + B. The original worker doesn't leave unless the problem says so.
- **Forgetting the drain subtraction.** A draining pipe's rate is subtracted: net = fills − drains. Missing the minus sign inflates the rate and shrinks the time.
- **Dividing the whole job by the combined rate.** You divide only the *remaining* fraction by the phase-2 rate, never the full job — the full job was never done at that rate.
- **Treating a speed-comparison problem as a phased one (or vice versa).** No one joins partway in a comparison problem; set up two equations instead.
- **Skipping the sanity check.** The "both-from-start" time is a hard lower bound for a solo-then-join problem; if your total is below it, you erred.

**Recap.** A staggered start is just combined work split into phases, glued together by the one quantity that survives a rate change: **work, expressed as a fraction of the job.** Write the two-row table; compute phase 1 work as rate × time; subtract from 1 for the remaining fraction; add the rates active in phase 2 (subtracting any drains); divide the remaining fraction by that rate for phase 2's time; sum the times. Bracket your answer between the "both-from-start" lower bound and the "slowest-solo" upper bound to kill wrong choices and to catch arithmetic slips. Reach for pump-hours when the workers are identical, and for two-equation algebra (or backsolving) when two whole scenarios are being compared rather than phased. Track the fraction of the job, never the raw times, and the hardest staggered-start question on the test collapses into clean bookkeeping.

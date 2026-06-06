---
slug: rates-work
title: Rates and Work
section: Quant
estimated_minutes: 50
prerequisites: []
summary: |
  Every rate-and-work problem on the GMAT is one of six patterns: single-object D=RT, combined work (add the rates), catch-up (subtract the rates), average speed over equal distances (harmonic mean, never arithmetic mean), average speed over unequal distances (total distance ÷ total time), and pipes-or-workers with staggered start times. Learn to recognize which pattern you're in, set up the rate equation in the right units, and every question in this chapter takes under 90 seconds.

  By the end of this chapter you will: (1) set up D = RT instantly with correct units; (2) add rates — never times — for combined work; (3) avoid the arithmetic-mean trap on average speed; and (4) break any staggered-start problem into phases without confusion.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - rates-work-q1
      - rates-work-q2

  - id: drt-foundation
    type: reading
    title: "D = RT — the one equation you need"
    intro: |
      Every rate problem on the GMAT — cars, trains, painters, pipes, pumps — collapses to the same three-variable equation. Master the equation and the unit discipline that goes with it, and you have the skeleton for every question in this chapter.
    check_question_ids:
      - rates-work-q3

  - id: combined-work
    type: reading
    title: "Combined work — add the rates, never the times"
    intro: |
      The most-tested mistake in rates: two workers, so add their times to get the combined time. That is always wrong. This section explains why, gives you the correct formula, and builds the intuition so the mistake feels obviously wrong before you finish reading.
    check_question_ids:
      - rates-work-q12

  - id: two-objects-moving
    type: reading
    title: "Two objects moving — opposite, same, catch-up"
    intro: |
      Two objects moving generates exactly three setups. There is a single rule that handles all three and takes five seconds to apply. Learn it here first, then see how it plays out in each setup.
    check_question_ids:
      - rates-work-q5
      - rates-work-q8

  - id: average-speed
    type: reading
    title: "Average speed — harmonic mean and the 50-mph trap"
    intro: |
      Your intuition says average speed is the mean of the two speeds. The GMAT exploits that intuition on every round-trip question. The slow leg consumes more time than the fast leg, so it pulls the true average further toward itself. This section gives you the formula that always works, the shortcut for equal distances, and the two-question test that tells you which to reach for in under five seconds.
    check_question_ids:
      - rates-work-q7
      - rates-work-q13

  - id: partial-work-staggered-starts
    type: reading
    title: "Partial work and staggered starts"
    intro: |
      One worker finishes what another starts. Or the rate changes mid-problem. This section gives you a two-phase template that converts every staggered-start question into a pair of simpler problems.
    check_question_ids:
      - rates-work-q14
      - rates-work-q16

  - id: rate-traps-and-shortcuts
    type: reading
    title: "The five GMAT rate traps — and how to defuse each one"
    intro: |
      Every wrong answer on a GMAT rates question is wrong in one of five specific ways. The test writers know which mistakes feel natural under time pressure, and they place exactly those wrong answers in the answer choices. Name the trap before you see the question and you won't fall for it.
    check_question_ids:
      - rates-work-q17
      - rates-work-q18

  - id: summary
    type: summary
    title: "The six-pattern decision tree"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - rates-work-q1
      - rates-work-q2
      - rates-work-q3
      - rates-work-q4
      - rates-work-q5
      - rates-work-q6
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - rates-work-q7
      - rates-work-q8
      - rates-work-q9
      - rates-work-q10
      - rates-work-q11
      - rates-work-q12
      - rates-work-q13
      - rates-work-q14
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - rates-work-q15
      - rates-work-q16
      - rates-work-q17
      - rates-work-q18
---

## @drt-foundation

Every rate problem on the GMAT — car, train, cyclist, pipe, painter, pump, typist — collapses to one equation:

**D = R × T**

Distance equals rate times time. Rearranged: R = D/T, T = D/R. These three forms are the whole topic.

**Mental model.** Rate is "how much per unit of time." Whether it's miles per hour, tanks per hour, or walls painted per day, the structure is identical: (how much done) = (rate) × (time). Every rate problem asks you to solve for the missing one of those three quantities. Identify what you're given, write the equation, substitute, solve. That is the entire algorithm — the only variation is which variable is missing.

**The unit discipline that separates 705 scorers from 605 scorers.** The single most common mistake on rates questions is a unit mismatch. If the rate is in km/**hour** and the time is given in **minutes**, you must convert one of them before multiplying.

**Worked example.** A cyclist rides at 18 km/h. How far in 40 minutes?

- Wrong: 18 × 40 = 720 km (you've implicitly treated 40 minutes as 40 hours)
- Right: 40 min = 40/60 = 2/3 hour. Distance = 18 × 2/3 = **12 km**.

Before you multiply, check the units. If rate is "per hour" and time is in minutes, the answer comes out 60 times too big. Make this a reflex — two seconds of checking saves you from eliminating the right answer.

**The three setups you'll write in the margin.**

When the question gives you D and T and asks for R: `R = D/T`. A train covers 210 miles in 3.5 hours: rate = 210/3.5 = **60 mph**.

When the question gives you R and T and asks for D: `D = R × T`. Standard multiplication.

When the question gives you R and D and asks for T: `T = D/R`. A 60-mile commute at 40 mph takes 60/40 = **1.5 hours**.

**Work problems are rate problems in disguise.** A printer printing 240 pages in 8 minutes has a rate of 30 pages per minute. Same equation: pages = rate × time. The "distance" is the job; the "rate" is pages per minute (or tanks per hour, or walls painted per day). Once you see them as the same equation, work problems stop feeling special.

**Micro-drill.** Without using a calculator or scratch paper: a car going 90 km/h — how many km does it cover in 10 minutes? In 45 minutes? In 80 minutes? Compute all three before reading on. (Answers: 15 km, 67.5 km, 120 km. Each is 90 × the fraction of one hour. If you got any wrong, the unit-conversion step is the gap to close.)

> **Self-explanation prompt.** Before the check question, explain in one sentence *why* the units have to match. If you can say "because R × T has units of (distance per time) × time, and those two time-units only cancel if they're the same unit," you've internalized why a 40-minute trip at 18 km/h isn't 720 km.

## @combined-work

Two workers or two pipes working on the same job. **Never add the times. Always add the rates.**

**Intuition first.** Picture two faucets filling a bucket. Faucet A fills 1/6 of the bucket per minute. Faucet B fills 1/4 of the bucket per minute. Per minute together, they fill 1/6 + 1/4 of the bucket — the rates add because each faucet is contributing *simultaneously* to the same pool. The time to fill the bucket then follows directly: if the combined rate is 5/12 per minute, the bucket fills in 12/5 minutes. Times would only add if the faucets worked *sequentially* — A fills halfway, then B finishes. That's a different problem entirely.

**The formula, and where it comes from.** If Worker A takes `a` hours alone and Worker B takes `b` hours alone, together they take `T` hours where:

    1/a + 1/b = 1/T

Multiply both sides by abT to clear fractions: `bT + aT = ab`, so `T(a + b) = ab`, giving the direct shortcut:

    T = ab / (a + b)

You can reach for either form — the rate form `1/a + 1/b = 1/T` when you need intermediate values, and the direct formula `T = ab/(a+b)` when you just need the combined time.

**Worked example.** Pipe A fills a tank in 6 hours, Pipe B fills it in 4 hours. Together?

Direct formula: T = (6 × 4) / (6 + 4) = 24 / 10 = **2.4 hours**.

Verify with rates: A contributes 1/6 per hour, B contributes 1/4 per hour. Combined: 1/6 + 1/4 = 5/12 per hour. T = 12/5 = **2.4 hours** ✓

Students who add *times* (6 + 4 = 10, or average to 5) get answer E every time. The test writes that trap into every combined-work question. Commit this: **add rates, never times**.

**Two instant sanity checks.** (1) Combined time must always be *less* than the smaller individual time. A alone takes 4 hours, B alone takes 6 — together they must finish in under 4 hours. If your answer is ≥ 4, you made an error. (2) Combined time is always greater than half the smaller individual time. Two identical workers finishing in 4 hours together take 2 hours — the floor. Answer below 2 when either takes 4 alone is impossible.

**Three-worker extension.** Three pipes filling the same tank: `1/a + 1/b + 1/c = 1/T`. The pattern extends to any number of identical or distinct workers. Add every worker's rate; take the reciprocal for the combined time.

**Equal-rate shortcut.** If n workers all work at the same rate and one alone takes t hours, together they take t/n hours. Two painters each taking 5 hours → together 5/2 = 2.5 hours. Three pumps each taking 4 hours → together 4/3 hours. Pattern-match this instantly for the common "n identical workers" setup.

**Reverse direction: solving for one unknown rate.** Often the GMAT gives you the combined time and one individual time, and asks for the other.

A finishes in 12 hours alone. A + B finish in 8 hours together. How long does B take alone?

    1/12 + 1/b = 1/8
    1/b = 1/8 − 1/12 = 3/24 − 2/24 = 1/24
    b = 24 hours

Trap answers: students who manipulate times compute 12 − 8 = 4 (wrong) or 12 + 8 = 20 (also wrong). The right setup is always rate-based — rearrange the rate equation, never subtract or add times.

**Unit of work is arbitrary.** Some problems use "pump-hours" — total work expressed as (workers × time). Three pumps × 4 hours = 12 pump-hours. If the same job is done by 5 pumps: 12/5 = 2.4 hours. This is the combined-work formula reorganized: **(workers) × (time) = total work**, constant for a given job.

**Trap to watch.** "How long does the job take if three pumps work for 2 hours, then two more pumps join?" That is *not* pure combined work — it is a staggered-start problem. Combined work assumes everyone starts at time zero. The staggered case is handled in the next section.

> **Self-explanation prompt.** Before the check question, explain in one sentence: if A takes 4 hours alone and B takes 6 hours alone, why does the combined time land near 2.4 hours rather than near 5 hours? If you can say "because both contribute their full rate every hour, so the job disappears faster than either alone — not at some average speed between them," you've understood why adding times is wrong.

> **Self-explanation prompt.** Before moving on, say this out loud: *why* do you add rates and not times when two workers combine? If you can explain "because each worker independently contributes a fraction of the job per hour — those fractions add; the time to finish is 1 divided by the combined fraction," you've understood the concept, not just memorized the formula. A student who truly understands this will never again add the times, even under pressure.

> **Recall check.** Cover this section. Pipe A fills a tank in 8 hours; Pipe B fills the same tank in 12 hours. Can you write the combined rate and the combined time from memory, before looking? If A's rate is 1/8 and B's is 1/12, the combined rate is 1/8 + 1/12 = 5/24, and the combined time is 24/5 = 4.8 hours. If you got a number larger than 8 or computed 8 + 12 = 20, review the section. Spaced retrieval (Roediger & Karpicke, 2006) converts a rule you've read into a rule you own.

## @two-objects-moving

Two cars, two trains, two people on bikes. Three setups cover every question in this family.

**Mental model.** Ask yourself: is the gap between the two objects growing or shrinking, and are they moving in the same direction or opposite? The answer determines the closing/opening rate in one step.

- **Opposite directions** (toward each other or away): gap changes at the **sum** of speeds.
- **Same direction** (one chasing the other): gap changes at the **difference** of speeds.

One rule. Every setup.

| Scenario | Rate of gap change | Time formula |
|---|---|---|
| Moving apart (opposite directions) | v₁ + v₂ | gap = (v₁ + v₂) × t |
| Moving toward each other | v₁ + v₂ | time = initial gap ÷ (v₁ + v₂) |
| Same direction, catch-up | v₁ − v₂ | time = head start ÷ (v₁ − v₂) |

**Setup 1: Moving in opposite directions — separation rate = sum of speeds.**

Two cars leave the same point in opposite directions at 50 km/h and 70 km/h. After t hours:

    distance apart = (50 + 70) × t = 120t

If you need them 360 km apart: t = 360/120 = **3 hours**.

**Setup 2: Moving toward each other — closing rate = sum of speeds.**

Two friends 48 km apart bike toward each other at 14 km/h and 10 km/h. How long until they meet?

    closing rate = 14 + 10 = 24 km/h
    meeting time = 48/24 = 2 hours

Same arithmetic as opposite-directions. "Moving apart" and "moving toward" are symmetrical — both use the sum.

**Setup 3: Same direction, one chasing — closing rate = difference of speeds.**

A freight train leaves at 8 AM at 45 mph. A passenger train leaves the same station at 10 AM going the same direction at 65 mph. When does the passenger catch up?

By 10 AM, the freight is 2 × 45 = 90 miles ahead. The passenger gains at 65 − 45 = **20 mph** — not 65, because the freight is also moving forward. Catch-up time = 90/20 = 4.5 hours. 10 AM + 4.5 hours = **2:30 PM**.

The key: if you used 65 mph as the closing speed, you're pretending the freight train is standing still. It isn't.

**Staggered start times.** When one object leaves before the other, compute each object's actual travel time separately, then add (opposite directions) or compare (same direction).

Tom walks at 6 km/h. Thirty minutes later his sister walks the opposite direction at 4 km/h. How far apart when Tom has walked 1 hour?

Tom: 6 km. Sister (0.5 hr): 2 km. Opposite directions → 6 + 2 = **8 km apart**.

**Boat-with-current and plane-with-wind.** The current adds downstream, subtracts upstream.

    downstream speed = boat speed + current speed
    upstream speed   = boat speed − current speed

A boat does 24 km downstream in 2 hours and 24 km upstream in 3 hours:

- Downstream: boat + current = 12
- Upstream: boat − current = 8
- Add equations: 2(boat) = 20, so boat = **10 km/h**, current = **2 km/h**

**Trap to watch.** "How fast is the gap growing?" is always the *sum* or *difference* of speeds — never one speed alone. Confusing the gap rate with one vehicle's speed is the classic wrong answer on this question type.

> **Self-explanation prompt.** Before the check questions: a fast train is chasing a slow train — 80 mph vs. 50 mph. The slow train had a 60-mile head start. Which determines the catch-up time — the sum (130 mph), the difference (30 mph), or neither? If you said "the difference," explain in one sentence why. (The fast train only gains on the slow one at 30 mph, because the slow train is also moving forward and eating up track — only the *net* gain per hour matters.)

> **Recall check.** Cover this section and state from memory: what do you do with the speeds when two objects move toward each other? What do you do when one chases the other in the same direction? (Toward each other or moving apart → add the speeds. Same direction → subtract the slower from the faster.) Now, a freight train leaves at 6 AM at 40 mph; an express leaves the same station at 8 AM at 60 mph, same direction. How far ahead is the freight when the express departs, and what is the express's closing rate? Compute before checking: 2 hrs × 40 mph = 80 miles ahead; closing rate = 60 − 40 = 20 mph; catch-up time = 80/20 = 4 hours. If you added the speeds or used the wrong base, re-read the same-direction example above.

## @average-speed

The single highest-leverage mistake to avoid on GMAT rates:

**Average speed is NOT the average of the speeds.**

**Worked example that traps everyone.** You drive to work at 40 mph and home at 60 mph. Average speed?

- Wrong: (40 + 60)/2 = 50 mph
- Right: the **harmonic mean**, 2ab/(a+b) = 2(40)(60)/(40+60) = 4800/100 = **48 mph**

Why not 50? Because you spend *more time* at the slower speed. At 40 mph the trip takes longer, so 40 is weighted more heavily than 60 in the true average. The faster leg flies by; the slower leg drags. The overall average drops below the arithmetic mean — always.

**The formula that always works.** Average speed = **total distance ÷ total time**. If you feel unsure which formula applies, fall back here — it never fails.

Redo the 40/60 problem using total/total:

- Assume 120 miles each way (any distance works — it cancels)
- Time going: 120/40 = 3 hours
- Time back: 120/60 = 2 hours
- Total distance: 240. Total time: 5. Average: 240/5 = **48 mph** ✓

**The harmonic mean applies only when the two distances are equal.** Different distances → total/total only.

**Worked example (unequal distances).** First 100 miles at 50 mph, last 150 miles at 75 mph. Average speed?

- Leg 1 time: 100/50 = 2 hr
- Leg 2 time: 150/75 = 2 hr
- Total distance: 250. Total time: 4. Average: 250/4 = **62.5 mph**

The harmonic mean 2(50)(75)/(50+75) = 60 would be wrong here. Distances are unequal, so only total/total gives the right answer.

**Three-question test before you pick a formula.**

1. Are the two legs the same distance (round trip on the same route)? → Use harmonic mean: **2ab/(a+b)**
2. Are the distances different? → Use total/total: **Σ distance ÷ Σ time**
3. Are the two legs the same *duration* (equal times at each speed, not equal distances)? → Use the **arithmetic mean**: **(a + b)/2**

The third case is the one students never hear about. When you travel two legs that take the same amount of time, each speed contributes equally to the total time — so the average speed is literally the average of the speeds. Total/total always works here too and gives the same result; the arithmetic mean is just faster to compute.

If you are not certain which case you're in, default to total/total. It handles all three cases correctly.

**Micro-drill.** Pick the right formula and compute each — 30 seconds each:

1. Drive to a destination (40 miles) at 40 mph. Drive home (40 miles) at 60 mph. Average speed for the round trip?
2. Drive 60 miles at 30 mph, then drive another 60 miles at 60 mph. Average speed?
3. Drive 60 miles at 30 mph, then drive 90 miles at 45 mph. Average speed?
4. Drive for 2 hours at 30 mph, then for 2 hours at 60 mph. Average speed?

Answers: (1) **48 mph** — equal distances; harmonic mean: 2(40)(60)/(40+60) = 4800/100 = 48. Verify with total/total: time = 1 + 2/3 = 5/3 hr; 80/(5/3) = 48. (2) **40 mph** — equal distances; harmonic: 2(30)(60)/(30+60) = 3600/90 = 40. Verify: time = 2 + 1 = 3 hr; 120/3 = 40. (3) **37.5 mph** — unequal distances; total/total only: 150 mi ÷ (2 + 2) hr = 37.5. Using harmonic here gives 36 — wrong, because harmonic only applies when the two *distances* are equal. (4) **45 mph** — equal *times*; arithmetic mean: (30 + 60)/2 = 45. Verify with total/total: (60 + 120) mi ÷ 4 hr = 45. The arithmetic mean is the only shortcut that applies here — not harmonic, because distances are unequal. If (1) or (2) gave you 50, you averaged the speeds when you shouldn't have. If (4) gave you 40 or 48, you applied harmonic mean to an equal-time problem — the trap runs in both directions.

**Why total/total always works.** Average speed is literally "how far divided by how long" for the whole trip. Any shortcut formula is just a special case of this identity — and total/total is the case that never breaks.

> **Self-explanation prompt.** Why is the harmonic mean always *less* than the arithmetic mean for two positive speeds? If you can explain "because the slow leg occupies more of the total time and drags the weighted average down," you will never pick the arithmetic-mean trap answer again.

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

## @rate-traps-and-shortcuts

Every wrong answer on a GMAT rates question is wrong in one of five specific ways. The test writers know which mistakes feel natural under time pressure, and they build exactly those wrong answers into the answer choices. Name the trap before you see the question and you won't fall for it.

**Trap 1: Adding times in combined work.**

Two workers, so you add their times — or take the average. A alone takes 6 hours, B alone takes 4 hours. The arithmetic-average choice is 5 hours. The sum choice is 10 hours. Both appear in the answer list. The correct answer is 2.4 hours.

The test exploits the intuition that "more workers = somewhere between the two times." That intuition is wrong because both workers contribute simultaneously, so rates — not times — accumulate.

*Recognition cue:* "How long do A and B together?" → write `1/a + 1/b = 1/T`. The correct combined time is always **less than the smaller individual time**. If your answer is larger than either individual time, you have the wrong operation.

**Trap 2: Arithmetic mean for average speed on equal-distance legs.**

Round trip: 40 mph going, 60 mph returning. The arithmetic mean (50 mph) appears as an answer choice. The correct answer is 48 mph.

The slow leg (at 40 mph) takes longer than the fast leg (at 60 mph) — a 120-mile one-way trip takes 3 hours outbound and 2 hours returning. Total: 240 miles in 5 hours = 48 mph. The extra hour on the slow leg drags the average below 50.

*Recognition cue:* "round trip" or "same route at two speeds" → harmonic mean `2ab/(a+b)`. The correct answer is always **below the arithmetic mean** for equal distances. If you computed the arithmetic mean, subtract a few mph — you're still wrong, but the direction tells you where the error is.

**Trap 3: Using the full speed as the catch-up rate.**

Freight train at 45 mph, 90-mile head start. Express train at 65 mph, same direction. "How long until the express catches up?" The trap answer: 90 ÷ 65 ≈ 1.38 hours. The correct answer: 90 ÷ (65 − 45) = 90 ÷ 20 = 4.5 hours.

The freight is still moving forward at 45 mph. The express only gains on it at the *difference* of the speeds. Dividing by 65 pretends the freight is stopped.

*Recognition cue:* "same direction," "overtake," "catch up" → close rate = **difference** of speeds. If one of the answer choices is about 6× smaller than yours, you may have divided by the full speed instead of the difference.

**Trap 4: Skipping the unit conversion.**

Rate is in km/h; time is given in minutes. Wrong: multiply directly. Correct: convert minutes to hours (or convert rate to km/min) before multiplying.

A car at 90 km/h for 20 minutes: wrong answer is 90 × 20 = 1,800 km (implausible). Right answer: 20 min = 1/3 hr; 90 × 1/3 = 30 km.

*Recognition cue:* any time units appear in the problem — "minutes," "seconds," "days" — check whether the rate is in the same unit. Convert before computing, not after. Write the unit on every number in your scratch work. Unit errors produce answers that are 60× or 1/60× the right value, which is usually obvious — but only if you sanity-check the magnitude of your answer.

**Trap 5: Treating a drain pipe as a fill pipe (wrong sign).**

Pipe A fills at rate 1/a, Pipe B fills at rate 1/b, Pipe C drains at rate 1/c. Combined fill rate: `1/a + 1/b − 1/c`. Students who miss the sign add 1/c instead of subtracting, producing a rate that is too large — so the computed fill time is too short.

*Recognition cue:* any word meaning "drain" — "empties," "leaks," "opens a drain" → that rate gets a minus sign. Circle the word "drain" in the problem before you set up the equation. A tank filling slower than it should is a tell that you added a draining rate instead of subtracting it.

---

**Three speed shortcuts worth memorizing.**

**Shortcut 1: Direct two-worker formula.** From `1/a + 1/b = 1/T`, solve: T = ab/(a+b). Skip the fraction algebra when you only need the combined time.

**Shortcut 2: Linear scaling for identical workers.** n identical workers, each taking t hours alone → together they take t/n hours. This is the only scenario where dividing solo time by worker count directly gives the combined time.

**Shortcut 3: Staggered-start fraction.** After phase 1 (Worker A alone for t₁ hours), fraction remaining = 1 − t₁/a. Divide that fraction by the combined rate to get phase 2 time. Total = t₁ + phase 2 time. Always compute the fraction first; never try to work backward from total time.

> **Recall check.** Close the book. Name the five traps — just a two-word label for each. (1) Adding-times. (2) Arithmetic-mean-speed. (3) Full-speed-catch-up. (4) Unit-mismatch. (5) Wrong-sign-drain. For each, state in one sentence what the correct move is. Time yourself — if any label required more than five seconds, that trap is the one you're most likely to miss on test day. Re-read its section before starting the problem sets.

## @summary

Every GMAT rates/work question reduces to one of six patterns. Identify the pattern first; the arithmetic follows.

**1. Single-object rate.** D = RT, with matching units. Convert minutes ↔ hours before multiplying.

**2. Combined work.** Add the rates: 1/a + 1/b = 1/T. Never add the times.

**3. Two objects moving.**
- Opposite directions: rates **add**.
- Same direction (catch-up): rates **subtract**.
- Boat + current: add downstream, subtract upstream.

**4. Average speed over equal distances.** Harmonic mean 2ab/(a+b). **Never** (a+b)/2.

**5. Average speed over unequal distances.** Total distance ÷ total time. Period.

**6. Partial work / staggered start.** Break into phases: compute fraction done in phase 1, compute time to finish the rest at the new combined rate.

**Sanity checks you can run on any rate answer.**

- Combined time less than the smaller individual time? If not, you added times instead of rates.
- Average speed between the two individual speeds? If not, recheck.
- Units matched when you multiplied R × T? If rate was per hour and time was in minutes, convert first.
- Catch-up closing speed is the *difference* of the two speeds? If you used a sum, you've set up the wrong scenario.

**Pattern-match table.**

| Problem says | You're doing | Formula |
|---|---|---|
| "Rate × time" | D = RT | D = R × T |
| "Working together, how long" | Combined work | 1/a + 1/b = 1/T |
| "Catch up" or "overtake" | Same direction | head start ÷ (faster − slower) |
| "Toward each other" or "meet" | Opposite/toward | distance ÷ (v₁ + v₂) |
| "Round trip, equal legs" | Harmonic mean | 2ab/(a+b) |
| "Round trip, different distances" | Total/total | Σ distance ÷ Σ time |
| "Downstream/upstream" | Current/wind | boat + current, boat − current |
| "Joins X hours later" | Staggered | Phase 1 + Phase 2 |

**Error taxonomy — which mistake maps to which re-read.**

| Error you made | What it reveals | Section to re-read |
|---|---|---|
| Combined time ≥ smaller individual time | You added or averaged times | @combined-work — "add rates, never times" |
| Average speed = arithmetic mean of the two speeds | You skipped the harmonic mean | @average-speed — "why 48, not 50" |
| Catch-up time too short | You divided by the full speed, not the difference | @two-objects-moving — same-direction example |
| Answer is 60× too large | Unit mismatch: minutes used as hours | @drt-foundation — unit discipline |
| Fill time too short with a drain pipe in the problem | You added the drain rate instead of subtracting | @partial-work-staggered-starts — drain pipe |
| Phase 2 time computed incorrectly | You used total time instead of fraction remaining | @partial-work-staggered-starts — two-phase template |
| You recognized the trap but still couldn't recall the formula | The trap names aren't automatic yet | @rate-traps-and-shortcuts — recall check |

**What to do next — by target score.**

*Targeting 605–645:* Start with the Easy set untimed. Goal is 100% accuracy — every wrong answer means a conceptual gap, not a speed gap. After each miss, name the pattern you used and compare it to the correct pattern. Then re-read the section. Move to the Medium set only after 100% on Easy.

*Targeting 645–685:* Work the Medium set with a 90-second target per question. If you're over 90 seconds, you're either misidentifying the pattern (re-read the summary's decision tree) or fumbling the algebra under time pressure (drill the formulas until they're reflexive). Log every miss with the pattern name — 3 misses on average-speed means more harmonic-mean drill; 3 misses on combined-work means the rate-vs-time confusion is not resolved.

*Targeting 685–725:* Tackle the Hard set. Hard questions on rates typically combine two patterns: a staggered start with a rate change, or a speed comparison that sets up a quadratic, or a three-worker problem where one worker is a drain. On your first pass through Hard, identify which two patterns each question is combining before you compute. On the second pass, time yourself. The gap between your first and second pass times is speed that practice alone will close.

**Time-management benchmark.** Pattern recognition takes under 10 seconds. Setup (writing the formula and variables) takes under 20 seconds. Computation takes under 60 seconds. If you're at the 90-second mark and still in setup, you have misidentified the pattern — step back, re-read the first sentence of the problem, and pick the pattern before writing anything. Algebra that follows the wrong framework is time spent going nowhere.

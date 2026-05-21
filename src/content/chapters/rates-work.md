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

**Two-question test before you pick a formula.**

1. Are the two legs the same distance (round trip on the same route)? → Use harmonic mean: **2ab/(a+b)**
2. Are the distances different? → Use total/total: **Σ distance ÷ Σ time**

If you're not certain the distances match, default to total/total. It is always correct; harmonic mean is only a shortcut for the equal-distance case.

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

> **Self-explanation prompt.** Before the check questions: why can't you solve a staggered-start problem with a single combined-work equation from the beginning? If you can say "because the combined rate only applies during the phase when both are working — during the solo phase, only one worker's rate applies — so a single equation would overcount the second worker's contribution," the two-phase template will feel like the natural approach, not a memorized trick.

> **Self-explanation prompt.** Why does the two-phase template require you to compute the *fraction of the job remaining* after phase 1, rather than working directly with times? If you can say "because phase 2 operates at a different rate, so time alone doesn't tell you how much was done — you need the fraction of work left, then divide that by the new rate to get phase 2 time," you've understood the structure. The moment you try to add or average the times across phases without tracking the fraction of work, you're guaranteed a wrong answer.

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

**What to do next.** Open the practice set for this chapter — Easy first, then Medium. After each incorrect answer, write one sentence naming the pattern you misidentified and one sentence naming the formula you should have used. That annotation habit builds pattern-recognition faster than re-reading this chapter. Once you're hitting 85%+ on Medium, tackle the Hard set. If average-speed or staggered-start questions are where you stumble, re-read those two sections before starting Hard.

**Time-management note.** None of these questions should take more than 90 seconds once the pattern is recognized. If you're at 60 seconds and still setting up, you've misidentified the pattern — step back, re-read the first sentence of the problem, and pick the pattern before writing anything.

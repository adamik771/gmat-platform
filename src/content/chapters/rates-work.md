---
slug: rates-work
title: Rates and Work
section: Quant
estimated_minutes: 50
prerequisites: []
summary: |
  Every rate-and-work problem on the GMAT is one of six patterns: single-object D=RT, combined work (add the rates), catch-up (subtract the rates), average speed over equal distances (harmonic mean, never arithmetic mean), average speed over unequal distances (total distance ÷ total time), and pipes-or-workers with staggered start times. Learn to recognize which pattern you're in, set up the rate equation in the right units, and every question in this chapter takes under 90 seconds.
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
    check_question_ids:
      - rates-work-q3

  - id: combined-work
    type: reading
    title: "Combined work — add the rates, never the times"
    check_question_ids:
      - rates-work-q12

  - id: two-objects-moving
    type: reading
    title: "Two objects moving — opposite, same, catch-up"
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

**The unit discipline that separates 705 scorers from 605 scorers.** The single most common mistake on rates questions is a unit mismatch. If the rate is in km/**hour** and the time is given in **minutes**, you must convert one of them before multiplying.

**Example.** A cyclist rides at 18 km/h. How far in 40 minutes?

- Wrong: 18 × 40 = 720 km (you've implicitly said 40 hours)
- Right: 40 min = 40/60 = 2/3 hour. Distance = 18 × 2/3 = **12 km**.

Before you multiply, check the units. If rate is "per hour" and time is in minutes, the answer comes out 60 times too big.

**The three setups you'll write in the margin.**

When the question gives you D and T and asks for R: `R = D/T`. A train covers 210 miles in 3.5 hours: rate = 210/3.5 = **60 mph**. Straight division.

When the question gives you R and T and asks for D: `D = R × T`. Standard multiplication.

When the question gives you R and D and asks for T: `T = D/R`. A 60-mile commute at 40 mph takes 60/40 = 1.5 hours.

**Work problems are rate problems in disguise.** A printer printing 240 pages in 8 minutes has a rate of 30 pages per minute. Same equation: pages = rate × time, time = pages/rate. The "distance" is the job; the "rate" is pages per minute (or tanks per hour, or walls painted per day).

> **Self-explanation prompt.** Before you look at the check question, explain in one sentence *why* the units have to match. If you can say "because R × T has units of (D per T) × T, and those two Ts only cancel if they're the same unit," you've internalized why a 40-minute trip at 18 km/h isn't 720 km.

## @combined-work

Two workers or two pipes working on the same job. **Never add the times. Always add the rates.**

**The single formula:** if Worker A takes `a` hours alone and Worker B takes `b` hours alone, together they take `T` hours where:

    1/a + 1/b = 1/T

**Example.** Pipe A fills a tank in 6 hours, Pipe B fills it in 4 hours. Together?

- Rate of A: 1/6 tank per hour
- Rate of B: 1/4 tank per hour
- Combined rate: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 tank per hour
- Combined time: T = 12/5 = **2.4 hours**

Students who add *times* (6 + 4 = 10, or average to 5) get answer E every time. The test-writers put that trap in every combined-work question. Memorize: **add rates, not times**.

**Why adding rates works and adding times doesn't.** Rates measure work per unit time, and rates of independent workers on the same job are genuinely additive — if A contributes 1/6 of the job each hour and B contributes 1/4 each hour, together they contribute 1/6 + 1/4 each hour. Times don't add because two workers don't take twice as long, they take *less* time.

**Equal-rate shortcut.** If n workers all work at the same rate and one alone takes t hours, together they take t/n hours. Two painters each 5 hours alone → together 5/2 = 2.5 hours. Three pumps each 4 hours → together 4/3. Useful pattern-match on the easiest combined-work questions.

**Reverse direction: solving for one unknown rate.** Often the GMAT gives you the combined time and one individual time, and asks for the other.

A finishes in 12 hours alone. A + B finish in 8 hours together. How long does B take alone?

    1/12 + 1/b = 1/8
    1/b = 1/8 − 1/12 = 3/24 − 2/24 = 1/24
    b = 24 hours

Trap answer: students who add times wrongly compute 12 − 8 = 4 and pick that, or add 12 + 8 = 20. The right setup is always rate-based.

**Unit of work is arbitrary.** Some problems talk about "pump-hours" or "worker-hours" — the total work, regardless of how many workers or what rate. Three pumps × 4 hours = 12 pump-hours. If the same job is done by 5 pumps, they need 12/5 = 2.4 hours. This is just the combined-work formula reorganized: **(workers) × (time) = total work**, constant for a given job.

> **Trap to watch.** "How long does the job take if three pumps work for 2 hours, then two more pumps join?" This isn't pure combined work — it's a *staggered-start* problem, covered in a later section. Combined work assumes everyone starts at time zero.

## @two-objects-moving

Two cars, two trains, two people on bikes. Three setups cover every question in this family.

**Setup 1: Moving in opposite directions — separation rate = sum of speeds.**

Two cars leave the same point in opposite directions at 50 km/h and 70 km/h. After t hours, they're separated by:

    distance apart = (50 + 70) × t = 120t

If you need them 360 km apart, t = 360/120 = **3 hours**.

The intuition: both cars are contributing to the gap, so the gap grows at the combined speed. No formula to memorize — just add.

**Setup 2: Moving toward each other — closing rate = sum of speeds.**

Two friends 48 km apart bike toward each other at 14 km/h and 10 km/h. How long until they meet?

    closing rate = 14 + 10 = 24 km/h
    meeting time = 48/24 = 2 hours

Same arithmetic as the opposite-directions case, because "approaching each other" and "moving apart" are the same phenomenon viewed from opposite sides.

**Setup 3: Same direction, one chasing the other — closing rate = difference of speeds.**

A freight train leaves at 8 AM at 45 mph. A passenger train leaves the same station at 10 AM going the same direction at 65 mph. When does the passenger catch up?

By 10 AM, the freight is 2 × 45 = 90 miles ahead. Now the passenger gains at 65 − 45 = **20 mph** (not 65 — because the freight is also moving forward). Catch-up time = 90/20 = 4.5 hours. 10 AM + 4.5 hours = **2:30 PM**.

The intuition: if both are going the same direction, only the *difference* in speeds closes the gap.

**Memory shortcut: "opposite adds, same subtracts."** Opposite directions (toward or away) add speeds. Same direction subtracts. This single rule handles every two-object problem.

**Staggered start times.** When one object leaves before the other (Tom leaves at 6 km/h, 30 minutes later his sister walks the opposite way at 4 km/h), compute each person's actual travel time separately, find the distance each has covered, and then add (opposite) or subtract (same direction) to get the gap.

Tom after 1 hour: 6 km. Sister after 0.5 hour: 2 km. Opposite directions: 6 + 2 = **8 km apart**.

**Boat-with-current and plane-with-wind problems.** These are two-object problems in disguise. A current adds to the boat's speed downstream and subtracts upstream.

    downstream speed = boat + current
    upstream speed = boat − current

A boat does 24 km downstream in 2 hours and 24 km upstream in 3 hours:

- Downstream: boat + current = 12
- Upstream: boat − current = 8
- Add both equations: 2(boat) = 20, so boat = **10 km/h** and current = 2 km/h

Same idea applies for planes with tailwind/headwind — the wind simply adds or subtracts depending on direction.

> **Trap to watch.** Don't confuse "separation rate" with "speed of one object." When the question says "how fast is the gap growing," that's the *sum* of the two speeds, not either individual speed.

## @average-speed

The single highest-leverage mistake to avoid on GMAT rates. If you remember one thing from this chapter, remember this:

**Average speed is NOT the average of the speeds.**

**Example that traps everyone.** You drive to work at 40 mph and home at 60 mph. Average speed?

- Wrong: (40 + 60)/2 = 50 mph
- Right: the **harmonic mean**, 2ab/(a+b) = 2(40)(60)/(40+60) = 4800/100 = **48 mph**

Why isn't it 50? Because you spend *more time* at the slower speed. At 40 mph the trip takes longer, so 40 is weighted more heavily than 60. The faster leg flies by; the slower leg drags. Your overall average drops below the arithmetic mean.

**The formula that always works.** Average speed = **total distance ÷ total time**. Period. If you ever feel unsure which formula to use, fall back on this — it never fails.

Let's redo the 40/60 problem with total/total:

- Assume 120 miles each way (any distance works)
- Time going: 120/40 = 3 hours
- Time back: 120/60 = 2 hours
- Total distance: 240. Total time: 5. Average: 240/5 = **48 mph** ✓

**The harmonic mean applies only when the two distances are equal.** If the legs of the trip are different distances, harmonic mean gives the wrong answer — you must use total/total.

**Example (unequal distances).** First 100 miles at 50 mph, last 150 miles at 75 mph. Average speed?

- Leg 1 time: 100/50 = 2 hr
- Leg 2 time: 150/75 = 2 hr
- Total distance: 250. Total time: 4. Average: 250/4 = **62.5 mph**

Notice the harmonic mean 2(50)(75)/(50+75) = 7500/125 = 60 would give 60, which is wrong here because distances are unequal.

**Why total/total always works.** Speed is just distance-per-time at the level of the whole trip. If you walked 10 miles in 2 hours, your average speed was 5 mph regardless of whether you changed pace mid-trip. The *average* speed is literally (how far) ÷ (how long). Every shortcut formula (arithmetic, harmonic) is just a special case of this, and total/total is the one that never breaks.

**What to do under time pressure.** If the problem gives equal legs, use the harmonic mean: **2ab/(a+b)**. If the legs differ in distance, pick a convenient total distance (often the LCM of the two rates) and grind through total/total. Either way, the answer won't be the simple average — which is always a trap answer on this question type.

> **Self-explanation prompt.** Why is the harmonic mean always **less** than the arithmetic mean? If you can explain "because the slow leg takes more time and drags the average down," you'll never pick the arithmetic-mean trap answer.

## @partial-work-staggered-starts

When work starts with one worker and a second joins later, or when one of two speeds changes mid-trip, break the problem into two phases and compute each phase separately.

**The template.** Phase 1: X works alone for time t₁. Fraction of job done = (rate of X) × t₁. Phase 2: remaining fraction of job = 1 − (phase 1 fraction). Compute time to finish the remaining fraction at the new combined rate.

**Example.** Pipe X fills a tank in 6 hours. After 2 hours of X alone, Pipe Y (9 hours alone) joins. How long total?

- Phase 1 (X alone, 2 hours): fraction filled = 2 × 1/6 = 1/3. Remaining = 2/3.
- Phase 2 (X + Y together): combined rate = 1/6 + 1/9 = 3/18 + 2/18 = 5/18 per hour.
- Phase 2 time = (2/3) / (5/18) = (2/3) × (18/5) = 12/5 = 2.4 hours.
- Total: 2 + 2.4 = **4.4 hours**

**Example with a twist — solve for the unknown rate.** Alex paints alone at a rate that finishes in 10 hours. After 4 hours he's done 4/10 = 2/5, leaving 3/5. Beth joins, and together they finish the remaining 3/5 in 3 hours. Beth alone?

- Combined rate (Phase 2) = work / time = (3/5) / 3 = 1/5 per hour
- Combined rate = Alex + Beth: 1/10 + 1/b = 1/5
- Solve: 1/b = 1/5 − 1/10 = 1/10
- Beth alone: **10 hours**

**The scaling trick for identical workers.** When several identical pumps do a job, the *product* (number of pumps × hours) is constant for a given job. Three pumps × 4 hours = 12 pump-hours. Five pumps: 12/5 = 2.4 hours = **2 hours 24 minutes**. Same idea — work is a pool, and (count)(time) is the pool.

**When to use pure algebra instead.** If a problem says "if her speed were 10 mph higher, she'd arrive 15 minutes earlier" — that's a speed-comparison problem, not a staggered-phase problem. Set up one equation (original) and one equation (altered) and solve. Usually produces a quadratic with one valid (positive) root. Don't force the phase model on a non-phase problem.

**The 60-mile commute problem.** Usual speed r, time 60/r. Faster speed r + 10, time 60/(r+10). Difference = 1/4 hour. Solve 60/r − 60/(r+10) = 1/4, multiply by 4r(r+10), simplify to r² + 10r − 2400 = 0, factor to (r−40)(r+60) = 0. Usual speed = **40 mph**.

> **Trap to watch.** When one of the pipes is *draining* (negative rate), subtract it from the combined fill rate. Three pipes: A and B fill, C drains. Combined rate = 1/a + 1/b − 1/c. Missing the minus sign turns a drain into a fill and gives a badly wrong answer.

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

- Does the combined time come out *less than* the smaller individual time? If not, you've added times instead of rates.
- Does the average speed fall *between* the two individual speeds? If not, recheck.
- Did the units match when you multiplied R × T? If rate was per hour and time was in minutes, you need to convert.

**Common patterns to pattern-match on sight:**

| Problem says | You're doing | Formula |
|---|---|---|
| "Rate × time" | D = RT | D = R × T |
| "Working together, how long" | Combined work | 1/a + 1/b = 1/T |
| "Catch up" or "overtake" | Same direction | gap / (difference in rates) |
| "Toward each other" or "meet" | Opposite/toward | distance / (sum of rates) |
| "Round trip, equal legs" | Harmonic mean | 2ab/(a+b) |
| "Round trip, different distances" | Total/total | Σ distance / Σ time |
| "Downstream/upstream" | Current/wind | b + c, b − c |
| "Joins X hours later" | Staggered | Phase 1 + Phase 2 |

**Time-management note.** None of these questions should take more than 90 seconds once the pattern is recognized. If you're at 60 seconds and still setting up, you've misidentified the pattern — step back and re-read.

---
slug: rates-work
title: Rates and Work
section: Quant
estimated_minutes: 55
prerequisites: []
summary: |
  Six patterns cover every GMAT rate and work question: (1) D = RT with matching units, (2) combined work — add the rates, never the times, (3) two objects moving — add speeds when directions oppose, subtract when they match, (4) average speed over equal legs — harmonic mean, (5) average speed over unequal legs — total distance divided by total time, (6) partial work and staggered starts — break into phases. Recognize the pattern first; the arithmetic follows.
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

**D = R × T** (Distance = Rate × Time)

Rearranged: R = D/T and T = D/R. The "distance" is whatever the output is: miles, pages, tanks, walls. When the job isn't physical movement, relabel: job = rate × time. Same equation.

**Unit conversion: the step that separates scores.**

The most common GMAT rate mistake isn't algebra — it's unit mismatch. Before you multiply R × T, run this two-step check:

1. What time unit is the rate in? (per hour? per minute?)
2. What unit is the given time in?

If they differ, convert one before you multiply.

**Example.** Cyclist at 18 km/h rides for 40 minutes.

- Rate unit: *hours*. Time given: *minutes*. Mismatch.
- Convert: 40 min = 40/60 = 2/3 hour.
- D = 18 × 2/3 = **12 km**.

Wrong approach: 18 × 40 = 720 km. That treats 40 minutes as 40 hours — off by a factor of 60.

**The three versions of the equation.**

The GMAT gives you two of the three quantities and asks for the third.

*Find R:* A train covers 210 miles in 3.5 hours. R = 210/3.5 = 420/7 = **60 mph**. (Multiply top and bottom by 2 to clear the decimal.)

*Find D:* Running at 8 mph for 45 minutes. Convert: 45 min = 3/4 hr. D = 8 × 3/4 = **6 miles**.

*Find T:* A 60-mile drive at 40 mph. T = 60/40 = **1.5 hours** (1 hour 30 minutes).

**Work problems are rate problems in disguise.** A printer producing 240 pages in 8 minutes has a rate of 30 pages per minute. A pipe filling a 500-liter tank in 5 hours runs at 100 liters per hour. The "distance" is the job; the "rate" is output per unit time. Nothing about the mechanics changes.

> **Self-explanation check.** Before you try the checkpoint: what are the units of R × T? They must equal the units of D. If rate is "km per hour" and time is "minutes," the product has units of km·min/hour — not km. That's why conversion is required, not optional.

## @combined-work

**The intuition first.** When two workers tackle the same job simultaneously, each contributes a fixed fraction of the job per hour. Those contributions are independent, so they add. That's why you add *rates*, not *times*: two workers make the job finish sooner, not later.

**The formula.** Worker A takes `a` hours alone; Worker B takes `b` hours alone. Together:

    Combined rate = 1/a + 1/b
    Combined time T = ab / (a + b)

**Worked example.** Pipe A fills a tank in 6 hours, Pipe B fills it in 4 hours. Together:

- Rate A = 1/6 tank/hour. Rate B = 1/4 tank/hour.
- Combined rate = 1/6 + 1/4 = 2/12 + 3/12 = **5/12** tank/hour.
- Combined time T = 12/5 = **2.4 hours**.

The trap answers are 5 (the time average: (6+4)/2) and 10 (the time sum: 6+4). Both appear as answer choices on every combined-work question.

**Equal-rate shortcut.** When all workers have the same solo time `t`, n workers together finish in `t/n`. Two painters each taking 6 hours → together 3 hours. Three identical pumps each taking 12 hours → together 4 hours.

**Solving for one unknown rate.** Often the GMAT gives the combined time and one solo time, then asks for the other.

A and B together finish in 8 hours. A alone takes 12 hours. How long does B take alone?

    1/12 + 1/b = 1/8
    1/b = 1/8 − 1/12 = 3/24 − 2/24 = 1/24
    b = 24 hours.

The trap: students subtract times (12 − 8 = 4) or add them (12 + 8 = 20). Only rates subtract or add — never times.

**The worker-days concept.** For identical workers, total work = (number of workers) × (hours worked). Three pumps working 4 hours = 12 pump-hours. That's a constant for a fixed job. Five pumps to do the same job: 12/5 = 2.4 hours. Inversely proportional: double the workforce, halve the time.

**Trap: draining pipes.** If one pipe fills and another drains, the drain has a *negative* rate:

    Combined rate = 1/fill_time − 1/drain_time

Missing the minus sign turns a drain into a fill. A fill pipe taking 4 hours and a drain pipe taking 6 hours, both open: combined rate = 1/4 − 1/6 = 1/12 per hour → tank fills in 12 hours, not 2.4 hours.

**Staggered starts.** The formula above assumes both workers start at time zero. When one joins later, break the problem into phases — covered in the next section.

## @two-objects-moving

**The organizing rule — memorize this first.**

- Directions **oppose** (toward each other, or pulling apart from the same point): **add** the speeds.
- Directions **match** (one chasing the other): **subtract** the speeds.

This one rule handles every two-object problem. The three setups below are just applications of it.

**Setup 1: Moving apart from the same point.**

Two cars leave together — one east at 50 km/h, one west at 70 km/h. The gap grows at the *sum* of their speeds because both cars contribute to increasing the separation.

    Gap after t hours = (50 + 70) × t = 120t

For a 360 km separation: t = 360/120 = **3 hours**.

**Setup 2: Moving toward each other from opposite points.**

Two cyclists 48 km apart head toward each other at 14 km/h and 10 km/h. The gap closes at the sum of their speeds — same arithmetic as Setup 1, viewed from the other direction.

    Closing rate = 14 + 10 = 24 km/h
    Meeting time = 48/24 = **2 hours**

**Setup 3: Same direction — catch-up.**

Freight train leaves at 8 AM at 45 mph. Passenger train leaves the same station at 10 AM at 65 mph. When does the passenger overtake the freight?

*Step 1 — head start at the moment the faster one departs:*
By 10 AM, the freight has traveled 2 × 45 = **90 miles ahead**.

*Step 2 — closing rate = difference of speeds:*
65 − 45 = **20 mph**. The freight is still moving forward, so the gap closes only at the speed *difference*.

*Step 3 — time to close the gap:*
90 ÷ 20 = **4.5 hours** after 10 AM = **2:30 PM**.

Common mistake: using 65 mph as the closing rate, as if the freight were stationary. That gives 90/65 ≈ 1.4 hours — wrong.

**Boat-with-current (and plane-with-wind).**

A current boosts the boat downstream and slows it upstream:

    Downstream speed = boat speed + current speed
    Upstream speed   = boat speed − current speed

When you know both downstream and upstream speeds, two equations give you both unknowns:

    boat speed = (downstream + upstream) / 2
    current speed = (downstream − upstream) / 2

**Worked example.** A boat travels 24 km downstream in 2 hours and returns upstream in 3 hours.

- Downstream speed = 24/2 = 12 km/h.
- Upstream speed = 24/3 = 8 km/h.
- Still-water boat speed = (12 + 8)/2 = **10 km/h**. Current = (12 − 8)/2 = **2 km/h**.

The trap: selecting 12 (downstream speed) or 8 (upstream speed) as the still-water speed. The still-water speed is always the *midpoint* of the two.

**Staggered start times.** Track each object's actual travel time separately, then apply the add/subtract rule.

Tom leaves at 6 km/h. Thirty minutes later, his sister leaves in the opposite direction at 4 km/h. How far apart after 1 hour from Tom's start?

- Tom: 1 hour × 6 = 6 km.
- Sister: 0.5 hours × 4 = 2 km.
- Opposite directions → add: 6 + 2 = **8 km**.

The trap: giving the sister a full hour → 4 km, yielding 10 km total.

## @average-speed

**The rule everyone knows but half the test-takers still get wrong.**

Average speed is **not** the average of the speeds.

You drive to work at 40 mph and home at 60 mph. Average speed for the round trip?

- Trap answer: (40 + 60)/2 = 50 mph.
- Correct answer: **48 mph**.

Why 48? Because the slower leg takes more time. You spend 3 hours at 40 mph and only 2 hours at 60 mph — the slow leg gets more weight. The result always falls below the arithmetic mean.

**The formula that never fails.**

    Average speed = Total distance ÷ Total time

This is not a shortcut — it's the definition. Every other formula is just a special case of this.

Using 120-mile legs for the 40/60 example:
- Leg 1 time: 120/40 = 3 hours.
- Leg 2 time: 120/60 = 2 hours.
- Average = 240/5 = **48 mph** ✓.

Pick any distance you like — the answer is always 48 mph for this speed pair. The 120-mile choice is convenient because it's divisible by both 40 and 60.

**The harmonic mean shortcut — equal-distance legs only.**

When both legs cover the same distance, the algebra simplifies to:

    Average speed = 2ab / (a + b)

For a = 40, b = 60: 2 × 40 × 60 / 100 = 4800/100 = **48 mph** ✓.

This shortcut is only valid when distances are equal. If the legs are different lengths, use total ÷ total.

**Example: unequal legs.**

First 100 miles at 50 mph, then 150 miles at 75 mph.

- Leg 1 time: 100/50 = 2 hours.
- Leg 2 time: 150/75 = 2 hours.
- Average = (100 + 150) / (2 + 2) = 250/4 = **62.5 mph**.

(The harmonic mean of 50 and 75 is 60 mph — wrong here because the legs are unequal lengths.)

**Decision tree under time pressure.**

- Equal legs? Use 2ab/(a+b). Ten seconds.
- Unequal legs? Pick a convenient total distance (often the LCM of the speeds), compute each leg's time, divide total distance by total time.
- Not sure which applies? Total/total always works.

One check: the answer must fall *between* the two individual speeds. If it doesn't, recheck.

> **Self-explanation check.** Why is the harmonic mean always less than the arithmetic mean for two unequal positive speeds? The slow leg takes more time and gets more weight in the time-weighted average. The arithmetic mean would only be correct if both legs took the *same amount of time*, not the same distance.

## @partial-work-staggered-starts

**When the team changes mid-task.**

One worker starts. Another joins (or leaves) partway through. Break the problem into phases: compute what each phase accomplishes, then sum the times.

**The phase template.**

Phase 1: who is working, at what rate, for how long? Fraction done = rate × time.
Phase 2: remaining fraction = 1 − (phase 1 fraction). Time to finish = remaining ÷ new rate.
Total = phase 1 time + phase 2 time.

**Worked example 1: a second worker joins.**

Pipe X fills a tank in 6 hours. After 2 hours of X alone, Pipe Y (which takes 9 hours alone) joins. Total time to fill?

- Phase 1: X alone for 2 hours. Fraction done = 2 × 1/6 = **1/3**. Remaining = 2/3.
- Phase 2: X + Y together. Combined rate = 1/6 + 1/9 = 3/18 + 2/18 = **5/18** per hour.
- Phase 2 time = (2/3) ÷ (5/18) = (2/3) × (18/5) = **2.4 hours**.
- Total = 2 + 2.4 = **4.4 hours**.

**Worked example 2: solve for an unknown solo rate.**

Alex paints a fence at a rate that would finish in 10 hours. After 4 hours alone, Beth joins and they finish the remaining work together in 3 hours. How long would Beth take alone?

- Phase 1: Alex for 4 hours. Done = 4/10 = **2/5**. Remaining = 3/5.
- Phase 2 joint rate = (3/5) ÷ 3 = **1/5 per hour**.
- Alex's rate = 1/10. Beth's rate = 1/5 − 1/10 = **1/10 per hour**.
- Beth alone: **10 hours**.

**Worked example 3: workforce shrinks.**

8 workers complete a project in 12 days. After 3 days, 2 workers leave. How many additional days do the remaining 6 workers need?

- Total work = 8 × 12 = **96 worker-days**.
- Phase 1 work = 8 × 3 = 24 worker-days. Remaining = **72 worker-days**.
- Phase 2 team = 6 workers. Time = 72/6 = **12 more days**.

Trap: using the original 8 workers to compute remaining time (72/8 = 9). Always use the *current* workforce.

**Drain-pipe variant.** Filling and draining simultaneously: the drain pipe subtracts from the combined rate.

Fill pipe: 4 hours alone (rate = 1/4). Drain pipe: 6 hours alone (rate = 1/6). Both open:

    Combined rate = 1/4 − 1/6 = 3/12 − 2/12 = 1/12 per hour → fills in **12 hours**.

Missing the minus sign is the most common error on this variant.

**Speed-comparison problems (a related but distinct type).**

Some GMAT questions give you two scenarios — same distance, different speeds — and ask you to find the original speed. These use D = RT twice (once per scenario), not a phase model.

Example: a 60-mile commute. Increasing speed by 10 mph saves 18 minutes. Set up:

    60/r − 60/(r + 10) = 18/60

Multiply through by 60r(r + 10), simplify → r² + 10r − 2000 = 0 → (r − 40)(r + 50) = 0 → **r = 40 mph**.

Backsolving from the answer choices is faster than the quadratic: test r = 40 → 60/40 − 60/50 = 1.5 − 1.2 = 0.3 hours = 18 minutes ✓.

## @summary

Every GMAT rates/work question reduces to one of six patterns. Identify the pattern first; the arithmetic follows.

| When the problem says… | Pattern | Key formula |
|---|---|---|
| Rate × time → output | D = RT | D = R × T (match units first) |
| "Working together, how long?" | Combined work | 1/a + 1/b = 1/T |
| "Catch up" / "overtake" | Same-direction chase | gap ÷ (v₁ − v₂) |
| "Toward each other" / "meet" | Opposing directions | distance ÷ (v₁ + v₂) |
| "Round trip, equal legs" | Average speed | 2ab/(a + b) |
| "Round trip, different distances" | Average speed | total distance ÷ total time |
| Downstream / upstream | Current or wind | v_boat ± v_current |
| "Joins X hours later" / phases | Staggered work | Phase 1 + Phase 2 |

**Three sanity checks before confirming your answer.**

1. Combined time less than the *shortest* solo time? If not, you added times instead of rates.
2. Average speed *between* the two individual speeds? If not, recheck the formula path.
3. Units consistent when you multiplied R × T? Rate per hour and time in minutes → convert first.

**Time budget.** Pattern recognition should take under 30 seconds. Setup under 30 seconds. Arithmetic under 60 seconds. Total target: 90 seconds per question. If you're still setting up at 90 seconds, you've misidentified the pattern — re-read the first sentence of the problem.

**What to do next.**

- Work the problem set until easy and medium accuracy is solid (aim for the target shown above the set).
- Every question you miss: tag it in the error log. Was it a pattern-ID error, a unit mismatch, a formula error, or arithmetic? The tag tells you where to focus.
- If combined-work questions keep tripping you up, reread that section — specifically the "solving for one unknown rate" example.
- If algebra is the bottleneck (the commute quadratic, the DS questions), the Word Problems chapter addresses equation setup in more depth.
- Return to the hard questions (boat/current DS, changing-team-size) after medium accuracy is solid.

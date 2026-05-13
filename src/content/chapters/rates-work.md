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

**W = R × T**

Work equals rate times time. "Work" is whatever is being produced or covered: distance, pages printed, tanks filled, walls painted. Rearranged: R = W/T, T = W/R. These three forms are the whole topic.

**Mental model.** Rate problems are unit-conversion problems in disguise. Rate carries units of *work per time* (miles per hour, pages per minute, tanks per hour). Multiplying rate × time cancels the time unit and leaves the work unit. Every mistake on a rate problem comes from either (a) misidentifying what the "work" is, or (b) mismatching units. Fix those two things and rate problems stop being hard.

**The rate table — your standard setup for every problem.**

Before writing any equation, draw a three-column table on your scratch paper:

| | Rate | Time | Work |
|---|---|---|---|
| Object A | | | |
| Object B | | | |

Fill in the two quantities the problem gives you, use `W = R × T` to find the third. This layout makes unit mismatches visible before they become errors.

**Example.** A train covers 210 miles in 3.5 hours. What is its speed?

| | Rate | Time | Work (Distance) |
|---|---|---|---|
| Train | ? | 3.5 hr | 210 mi |

Rate = 210 / 3.5 = **60 mph**. One table, one division.

**The unit discipline that separates 705 scorers from 605 scorers.** The single most common mistake on rates questions is a unit mismatch.

**Example.** A cyclist rides at 18 km/h. How far in 40 minutes?

| | Rate | Time | Work |
|---|---|---|---|
| Cyclist | 18 km/hr | 40 **min** | ? |

The units don't match — rate is per hour, time is in minutes. Convert: 40 min = 2/3 hr.

| | Rate | Time | Work |
|---|---|---|---|
| Cyclist | 18 km/hr | 2/3 hr | 18 × 2/3 = **12 km** |

Skipping the table leads to the classic wrong answer of 18 × 40 = 720 km.

**Work problems use the same table.** A printer produces 240 pages in 8 minutes. Rate = 240/8 = 30 pages per minute. The "work" is pages; the "rate" is pages per minute. Same three-column setup, different labels.

**Data Sufficiency applications.** Rate problems show up constantly in DS format because the test can withhold one of the three quantities and ask whether you have enough information.

*Is statement (1) sufficient?* A car travels from City A to City B. (1) The car's speed is 60 mph. (2) The trip takes 2 hours.

Draw the table: Rate = 60 (from S1), Time = unknown, Distance = unknown. With only rate, you can't determine distance. Insufficient alone. With both: 60 × 2 = 120 miles. Together sufficient. Answer: C.

The table immediately shows which cell is empty and whether the remaining two cells determine it.

> **Self-explanation prompt.** Before you look at the check question, explain in one sentence *why* the units have to match. If you can say "because R × T has units of (work per time) × time, and those time units only cancel if they're the same unit," you've internalized why a 40-minute trip at 18 km/h isn't 720 km.

## @combined-work

Two workers or two pipes working on the same job. **Never add the times. Always add the rates.**

**The single formula:** if Worker A takes `a` hours alone and Worker B takes `b` hours alone, together they take `T` hours where:

    1/a + 1/b = 1/T

**Watch a student get this wrong — then watch them get it right.**

*Wrong approach:* Pipe A fills a tank in 6 hours, Pipe B in 4 hours. Student thinks: "Average the times — (6+4)/2 = 5 hours." Or worse: "Add the times — 6+4 = 10 hours." Both are wrong.

*Right approach:* Build the rate table.

| | Rate (tanks/hr) | Time (hr) | Work (tanks) |
|---|---|---|---|
| Pipe A | 1/6 | T | T/6 |
| Pipe B | 1/4 | T | T/4 |
| Combined | 1/6 + 1/4 | T | 1 tank |

Setting total work = 1 tank: T/6 + T/4 = 1 → T(2/12 + 3/12) = 1 → T(5/12) = 1 → T = **12/5 = 2.4 hours**.

Notice that 2.4 < 4 (the faster pipe alone). That's the sanity check: two workers together always finish faster than either one alone.

**Why adding rates works and adding times doesn't.** Rates measure work per unit time, and rates of independent workers on the same job are genuinely additive — A contributes 1/6 of the job each hour, B contributes 1/4 each hour, together they contribute 5/12 each hour. Times don't add because two workers working simultaneously both produce work; they take *less* time, not more.

**Equal-rate shortcut.** If n workers all work at the same rate and one alone takes t hours, together they take t/n hours. Two painters each taking 5 hours → together 5/2 = 2.5 hours. Three pumps each taking 4 hours → together 4/3 hours. Useful pattern-match on the simplest combined-work questions.

**Reverse direction: solving for one unknown rate.** Often the GMAT gives you the combined time and one individual time.

*A finishes in 12 hours alone. A + B finish in 8 hours together. How long does B take alone?*

| | Rate | Time | Work |
|---|---|---|---|
| A | 1/12 | 8 | 8/12 = 2/3 |
| B | 1/b | 8 | 8/b |
| Together | 1/12 + 1/b | 8 | 1 |

Equation: 8/12 + 8/b = 1 → 8/b = 1/3 → b = **24 hours**.

Trap answer: students subtract times and guess 12 − 8 = 4. That's not how rates work — B doing 1/3 of the job in 8 hours means B's rate is 1/24, not 1/4.

**Worker-hours as a pool.** Some problems give you the total work as a quantity (machine-hours, worker-days). Three pumps × 4 hours = 12 pump-hours. If 5 pumps do the same job: 12/5 = 2.4 hours. **(Count) × (time) = total work pool**, constant for a given job. This is the combined-work formula reorganized.

**Draining pipes: subtract the drain rate.** If Pipe A fills and Pipe C drains, the combined net rate is 1/a − 1/c. Missing the minus sign is the #1 error on this variant.

**Trap to watch.** "How long does the job take if three pumps work for 2 hours, then two more pumps join?" That's a staggered-start problem, not pure combined work. Combined work assumes everyone starts at time zero — if start times differ, use the two-phase template in the next section.

## @two-objects-moving

Two cars, two trains, two people on bikes. The key insight: **treat both objects together as one system**. Define a "gap" between them and ask how fast the gap changes. That collapses a two-variable problem into a one-variable D=RT problem.

**The relative-motion frame.** Imagine you're sitting in Object A, watching Object B. Object B approaches you or recedes from you at a certain speed — that's the *relative speed*. The gap changes at the relative speed. You never have to track both objects simultaneously.

**Setup 1: Opposite directions — relative speed = sum of speeds.**

Two cars leave the same point in opposite directions at 50 km/h and 70 km/h. From A's frame, B is moving away at 50 + 70 = 120 km/h.

| | Rate | Time | Distance |
|---|---|---|---|
| Gap between A and B | 120 km/hr | t | 360 km |

t = 360/120 = **3 hours**. One row, one division.

**Setup 2: Moving toward each other — relative speed = sum of speeds.**

Two friends 48 km apart bike toward each other at 14 km/h and 10 km/h. From either person's frame, the other approaches at 14 + 10 = 24 km/h.

    Meeting time = 48 / 24 = 2 hours

"Moving toward" and "moving apart" are the same arithmetic — both add speeds — because the gap changes at the same rate either way.

**Setup 3: Same direction, one chasing — relative speed = difference of speeds.**

A freight train leaves at 8 AM at 45 mph. A passenger train leaves the same station at 10 AM going the same direction at 65 mph. When does the passenger catch up?

By 10 AM, the freight is 2 × 45 = 90 miles ahead. From the passenger's frame, the freight moves away at only 45 − 65 = −20 mph (i.e., the passenger gains at 20 mph).

| | Rate | Time | Distance |
|---|---|---|---|
| Gap (passenger closing) | 20 mph | t | 90 mi |

t = 90/20 = 4.5 hours. 10 AM + 4.5 hr = **2:30 PM**.

**Memory shortcut: "opposite adds, same subtracts."** Opposite directions (toward or away) → add speeds for the relative rate. Same direction → subtract speeds. One rule, all two-object problems.

**Staggered start times.** When one object leaves before the other, compute each object's travel time (they differ by the head-start time), find each one's distance, then add or subtract depending on direction.

Tom leaves walking at 6 km/h. 30 minutes later his sister walks the opposite way at 4 km/h. After 1 hour from Tom's start, how far apart are they?

- Tom has walked 1 hr × 6 = 6 km
- Sister has walked 0.5 hr × 4 = 2 km
- Opposite directions → add: 6 + 2 = **8 km apart**

**Boat-with-current and plane-with-wind.** These are relative-motion problems in disguise. The current shifts the boat's effective speed:

    downstream speed = boat speed + current speed
    upstream speed = boat speed − current speed

A boat does 24 km downstream in 2 hours and 24 km upstream in 3 hours:

- Downstream rate: 24/2 = 12 → boat + current = 12
- Upstream rate: 24/3 = 8 → boat − current = 8
- Add both equations: 2 × boat = 20 → boat = **10 km/h**, current = **2 km/h**

**Trap to watch.** On catch-up problems, students sometimes use 65 mph (the passenger's speed) as the closing rate. That's wrong — the freight train is also moving, so only the 20 mph *difference* closes the gap. Always work from the gap's perspective.

## @average-speed

The single highest-leverage mistake to avoid on GMAT rates. If you remember one thing from this chapter, remember this:

**Average speed is NOT the average of the speeds.**

**Example that traps everyone.** You drive to work at 40 mph and home at 60 mph, same route. Average speed for the round trip?

- Wrong: (40 + 60)/2 = 50 mph
- Right: **48 mph**

Here's why, derived step by step:

Assume each leg is 120 miles (the number doesn't matter — it will cancel).

| | Rate | Time | Distance |
|---|---|---|---|
| Going | 40 mph | 120/40 = 3 hr | 120 mi |
| Returning | 60 mph | 120/60 = 2 hr | 120 mi |
| **Total** | **?** | **5 hr** | **240 mi** |

Average speed = 240 / 5 = **48 mph**.

**Why not 50?** Because you spend *more time* at the slower speed. At 40 mph you spend 3 hours; at 60 mph only 2. The average is time-weighted, not distance-weighted. The slow leg pulls the average down.

This is the intuition: if someone asked "what's the average of 40 and 60, weighted so that 40 counts 3 times and 60 counts twice?" you'd get (3×40 + 2×60)/(3+2) = (120+120)/5 = 240/5 = 48. That's exactly what total/total computes.

**The formula that always works.** Average speed = **total distance ÷ total time**. It never fails because it's the definition of average speed.

**The harmonic mean shortcut.** When both legs have equal distance, the total/total computation always simplifies to:

    2ab / (a + b)

For 40 and 60: 2(40)(60)/(40+60) = 4800/100 = **48 mph** ✓

This shortcut only works when the two distances are equal. Use it on round trips; don't use it elsewhere.

**Example (unequal distances — shortcut fails).** First 100 miles at 50 mph, last 150 miles at 75 mph.

| | Rate | Time | Distance |
|---|---|---|---|
| Leg 1 | 50 mph | 100/50 = 2 hr | 100 mi |
| Leg 2 | 75 mph | 150/75 = 2 hr | 150 mi |
| **Total** | **?** | **4 hr** | **250 mi** |

Average = 250/4 = **62.5 mph**.

The harmonic mean of 50 and 75 is 2(50)(75)/125 = 60 — that's wrong here because distances are unequal. The two legs happened to take equal time, which is why the arithmetic mean (62.5) also doesn't work.

**Decision rule:**
- Equal distances → use harmonic mean: **2ab/(a+b)**
- Unequal distances (or unknown) → always use total/total

Under time pressure, if you're unsure, use total/total — it's slower but never wrong.

> **Self-explanation prompt.** Why is the harmonic mean always **less** than the arithmetic mean for two different positive numbers? If you can say "because the slow leg takes disproportionately more time and pulls the weighted average toward itself," you'll never pick the arithmetic-mean trap answer — and you'll be able to predict the direction of error if you do pick the wrong formula.

## @partial-work-staggered-starts

When workers start at different times, or when conditions change mid-problem, split the timeline into phases. Each phase is its own D=RT setup.

**The two-phase template.**

Phase 1: Worker X works alone for t₁ hours.
- Work done = rate(X) × t₁
- Remaining work = 1 − work done

Phase 2: Worker X + Worker Y work together until the job is finished.
- Combined rate = rate(X) + rate(Y)
- Phase 2 time = remaining work / combined rate

**Total time = t₁ + phase 2 time**

**Example.** Pipe X fills a tank in 6 hours. After 2 hours of X alone, Pipe Y (which would fill in 9 hours alone) joins. How long does the job take in total?

*Phase 1* (X alone, 2 hours):

| | Rate | Time | Work |
|---|---|---|---|
| X alone | 1/6 | 2 | 1/3 |

Remaining: 1 − 1/3 = 2/3 of the tank.

*Phase 2* (X + Y together):

| | Rate | Time | Work |
|---|---|---|---|
| X + Y | 1/6 + 1/9 = 5/18 | t₂ | 2/3 |

t₂ = (2/3) / (5/18) = (2/3) × (18/5) = 12/5 = 2.4 hours

Total: 2 + 2.4 = **4.4 hours**

**Solving for an unknown rate within the template.**

Alex paints a room in 10 hours alone. He works alone for 4 hours, then Beth joins. Together they finish the remaining work in 3 hours. How long would Beth take alone?

*Phase 1:* Alex alone for 4 hours. Work done = 4 × (1/10) = 2/5. Remaining = 3/5.

*Phase 2:* Alex + Beth finish 3/5 in 3 hours. Combined rate = (3/5)/3 = 1/5 per hour.

Solve: 1/10 + 1/b = 1/5 → 1/b = 1/10 → Beth alone: **10 hours**.

**The scaling shortcut for identical workers.** When all workers are identical, (number of workers) × (time) = constant for a given job. 3 pumps × 4 hours = 12 pump-hours. Same job with 5 pumps: 12/5 = 2.4 hours. This is the fastest path when the problem changes the number of workers and asks for the new time.

**Draining pipes in a staggered setup.** If a drain pipe activates partway through a fill, give it a negative rate and subtract it from the combined rate for that phase. A fill pipe at 1/6 and a drain at 1/12 produce a net fill rate of 1/6 − 1/12 = 1/12 per hour in phase 2.

> **Recall check.** Without looking back: state the two-phase template. What do you compute at the end of Phase 1? What do you use as the rate for Phase 2? If you can write the template from memory, you own this problem type — the arithmetic is routine once the structure is clear.

**Trap to watch.** Staggered-start problems and "speed-comparison" problems look similar but require different setups. "Pipe X works for 2 hours, then Y joins" — that's staggered, use two phases. "If the car drove 10 mph faster, it would arrive 15 minutes earlier" — that's a speed comparison: write two D=RT equations (original and altered) and solve the system. Don't force the two-phase template onto a problem that's really a simultaneous-equation setup.

## @summary

Every GMAT rates/work question reduces to one of six patterns. Identify the pattern first; the arithmetic follows.

**The six patterns — in the order you should rule them out:**

**1. Single-object rate.** One object, one rate, three unknowns with two given. W = R × T; units must match. Draw the rate table, fill in two cells, solve for the third.

**2. Combined work.** Multiple workers/pipes on the same job, all starting at once. Add the rates: 1/a + 1/b = 1/T. Never add the times. Sanity check: combined time < smallest individual time.

**3. Two objects moving.** Relative motion. Define the gap; compute how fast it changes.
- Opposite directions (toward or away): gap changes at **sum** of speeds.
- Same direction (catch-up): gap changes at **difference** of speeds.
- Current/wind: downstream = boat + current; upstream = boat − current.

**4. Average speed, equal distances.** Harmonic mean: **2ab/(a+b)**. Never the arithmetic mean.

**5. Average speed, unequal distances.** Always: **total distance ÷ total time**. Build the rate table for each leg, sum the columns.

**6. Staggered start.** Split into Phase 1 (first worker alone) and Phase 2 (combined). Compute work done in Phase 1; divide remaining work by Phase 2 rate.

**The one setup method for all six.** Draw the rate table before writing any equation:

| | Rate | Time | Work |
|---|---|---|---|
| Object / Worker A | | | |
| Object / Worker B | | | |
| Total / Combined | | | |

Fill in whatever the problem gives you. The empty cell in each row is your unknown. Unit mismatches become visible before they cause errors.

**Sanity checks for every answer:**

- Combined work time < smallest individual time. (If not, you added times, not rates.)
- Average speed lies strictly between the two leg speeds — and closer to the slower one.
- Units match across R × T. (Rate per hour × minutes = wrong unit; convert first.)
- Staggered total time > Phase 1 time. (If Phase 2 is negative, check the fractions.)

**Pattern-match table:**

| Problem says | Pattern | Key formula |
|---|---|---|
| "How far / how fast / how long" | Single-object | W = R × T |
| "Working together, how long" | Combined work | 1/a + 1/b = 1/T |
| "Catch up" or "overtake" | Same direction | gap / (r₁ − r₂) |
| "Toward each other" or "meet" | Opposite toward | distance / (r₁ + r₂) |
| "Round trip, same distance" | Avg speed | 2ab/(a+b) |
| "Round trip, different distances" | Avg speed | Σ D / Σ T |
| "Downstream/upstream" | Current | r ± c |
| "Joins X hours later" / "works alone, then together" | Staggered | Phase 1 + Phase 2 |

**Time-management note.** None of these questions should take more than 90 seconds once the pattern is recognized. If you're at 60 seconds and still setting up, step back: re-read the question and run through the six patterns above. You've misidentified the pattern — the arithmetic is never the bottleneck once the setup is right.

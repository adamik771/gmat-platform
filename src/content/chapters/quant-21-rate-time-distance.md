---
slug: quant-21-rate-time-distance
title: "Rates: Time, Distance & Speed"
section: Quant
estimated_minutes: 10
prerequisites:
  - quant-20-mixtures-weighted-averages
summary: |
  D = RT, two objects moving (toward, apart, catch-up), and average speed via the harmonic mean.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - rates-work-q1
      - rates-work-q2
  - id: drt-foundation
    type: reading
    title: "D = RT — the one equation you need"
    check_question_ids:
      - rates-work-q3
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
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - rates-work-q3
      - rates-work-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - rates-work-q5
      - rates-work-q6
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

**Micro-drill.** Pick the right formula and compute each — 30 seconds each:

1. Drive to a destination (40 miles) at 40 mph. Drive home (40 miles) at 60 mph. Average speed for the round trip?
2. Drive 60 miles at 30 mph, then drive another 60 miles at 60 mph. Average speed?
3. Drive 60 miles at 30 mph, then drive 90 miles at 45 mph. Average speed?
4. Drive for 2 hours at 30 mph, then for 2 hours at 60 mph. Average speed?

Answers: (1) **48 mph** — equal distances; harmonic mean: 2(40)(60)/(40+60) = 4800/100 = 48. Verify with total/total: time = 1 + 2/3 = 5/3 hr; 80/(5/3) = 48. (2) **40 mph** — equal distances; harmonic: 2(30)(60)/(30+60) = 3600/90 = 40. Verify: time = 2 + 1 = 3 hr; 120/3 = 40. (3) **37.5 mph** — unequal distances; total/total only: 150 mi ÷ (2 + 2) hr = 37.5. Using harmonic here gives 36 — wrong, because harmonic only applies when the two *distances* are equal. (4) **45 mph** — unequal distances but equal *times*; total/total: (60 + 120) mi ÷ 4 hr = 45. Here the arithmetic mean also works: (30 + 60)/2 = 45 — this is the one case where averaging the speeds is correct, because equal time weights them equally. Total/total always works regardless. If (1) or (2) gave you 50, you averaged the speeds — 50 is wrong because you spend more time at the slower speed, which pulls the true average below the midpoint.

**Why total/total always works.** Average speed is literally "how far divided by how long" for the whole trip. Any shortcut formula is just a special case of this identity — and total/total is the case that never breaks.

> **Self-explanation prompt.** Why is the harmonic mean always *less* than the arithmetic mean for two positive speeds? If you can explain "because the slow leg occupies more of the total time and drags the weighted average down," you will never pick the arithmetic-mean trap answer again.

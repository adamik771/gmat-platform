---
slug: quant-21-rate-time-distance
title: "Rates: Time, Distance & Speed"
section: Quant
estimated_minutes: 70
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
  - id: summary
    type: summary
    title: "What to remember"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - rates-work-q45
      - rates-work-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - rates-work-q39
      - rates-work-q6
---

## @summary

- Anchor every setup in distance = rate x time and keep all units consistent.
- Add speeds for motion toward each other, subtract them for pursuit, and build separate legs when a rate changes.
- Average speed is total distance divided by total time, never the simple average of speeds unless the times are equal.

## @drt-foundation

Every rate problem on the GMAT — car, train, cyclist, pipe, painter, pump, typist — collapses to one equation:

**D = R × T**

Distance equals rate times time. Rearranged: R = D/T, T = D/R. These three forms are the whole topic. There is no fourth formula hiding somewhere that you forgot to memorize. When a rates question feels hard, it is never because you are missing an equation — it is because the units are mismatched, two rates are interacting, or the "distance" is disguised as a job. We will close all three gaps in this section.

**Mental model.** Rate is "how much per unit of time." Whether it's miles per hour, tanks per hour, or walls painted per day, the structure is identical: (how much done) = (rate) × (time). Every rate problem asks you to solve for the missing one of those three quantities. Identify what you're given, write the equation, substitute, solve. That is the entire algorithm — the only variation is which variable is missing.

A useful image: picture the three quantities sitting in a triangle, D on top, R and T side by side underneath. Cover the one you want and the other two tell you whether to multiply (the two on the bottom, R × T) or divide (top over bottom, D/R or D/T). This is not a separate technique to memorize; it is just a way to never mis-rearrange the equation under time pressure. The triangle is a crutch, not a rule — if you ever distrust it, fall back to writing D = R × T and isolating the unknown algebraically, which is unflippable.

> **Recall check.** Without looking back, write all three forms of the rate equation and say in words what each one solves for. (D = R × T solves for distance/amount of work; R = D/T solves for rate; T = D/R solves for time. They are one equation rearranged, not three facts to memorize.)

**The unit discipline that separates 705 scorers from 605 scorers.** The single most common mistake on rates questions is a unit mismatch. If the rate is in km/**hour** and the time is given in **minutes**, you must convert one of them before multiplying. The GMAT writes the trap deliberately: it gives you the rate in hours and the time in minutes precisely because a rushed test-taker multiplies straight across and lands on a wrong answer that the question-writer placed in the choices on purpose. The wrong answer is never random — it is the number you get by skipping conversion, sitting right there in the answer choices to reward carelessness.

**Worked example.** A cyclist rides at 18 km/h. How far in 40 minutes?

- Wrong: 18 × 40 = 720 km (you've implicitly treated 40 minutes as 40 hours)
- Right: 40 min = 40/60 = 2/3 hour. Distance = 18 × 2/3 = **12 km**.

Before you multiply, check the units. If rate is "per hour" and time is in minutes, the answer comes out 60 times too big. Make this a reflex — two seconds of checking saves you from eliminating the right answer.

**The three setups you'll write in the margin.**

When the question gives you D and T and asks for R: `R = D/T`. A train covers 210 miles in 3.5 hours: rate = 210/3.5 = **60 mph**.

When the question gives you R and T and asks for D: `D = R × T`. Standard multiplication.

When the question gives you R and D and asks for T: `T = D/R`. A 60-mile commute at 40 mph takes 60/40 = **1.5 hours**.

Notice that every one of these is the same equation. If you ever blank on which to write, fall back to D = R × T, plug in the two numbers you have, and solve the resulting one-variable equation algebraically. You cannot get the rearrangement wrong if you let the algebra do it for you.

**Worked example (solving for the missing variable algebraically).** A delivery van must cover 270 miles. The driver wants to arrive in 4.5 hours. What constant speed is required, and how does the answer change if traffic forces the trip to take 6 hours instead?

- Write D = R × T: 270 = R × 4.5. Solve: R = 270/4.5 = **60 mph**.
- For the 6-hour case: 270 = R × 6, so R = 270/6 = **45 mph**.
- Notice the relationship: distance is fixed, so rate and time are *inversely proportional*. Time went up by a factor of 6/4.5 = 4/3, so the required rate fell by the same factor: 60 × 3/4 = 45. Recognizing this inverse relationship lets you scale the answer without redoing the division — a real time-saver when the GMAT asks "if the time increases by 25%, the speed must decrease by what percent?"

> **Self-explanation prompt.** Before reading on, explain in one sentence *why* the units have to match. If you can say "because R × T has units of (distance per time) × time, and those two time-units only cancel if they're the same unit," you've internalized why a 40-minute trip at 18 km/h isn't 720 km — the "minutes" in the time can't cancel the "hours" buried in the rate unless you convert one of them first.

> **Recall check.** Cover the page. If a fixed distance is covered in 25% less time, what happens to the required speed — does it go up or down, and is the percentage change also 25%? (Speed goes *up*; but not by 25%. Time falls to 3/4 of original, so speed rises to 4/3 of original — a 33.3% increase. Inverse proportions are not symmetric in percent terms. This asymmetry is a favorite GMAT trap.)

**Work problems are rate problems in disguise.** A printer printing 240 pages in 8 minutes has a rate of 30 pages per minute. Same equation: pages = rate × time. The "distance" is the job; the "rate" is pages per minute (or tanks per hour, or walls painted per day). Once you see them as the same equation, work problems stop feeling special. The only mental adjustment is that the "distance" is often **1 whole job** — one filled tank, one painted house, one completed report — and the rate is the fraction of that job done per unit time.

**Worked example (work as distance).** A pump can drain a full pool in 5 hours. What fraction of the pool does it drain in 3 hours, and how long to drain a pool that is only 60% full?

- Rate = 1 pool / 5 hours = 1/5 pool per hour.
- In 3 hours: amount = rate × time = (1/5)(3) = **3/5 of the pool**.
- A 60%-full pool is 3/5 of a full pool. Time = amount/rate = (3/5)/(1/5) = **3 hours**. (Consistent with the previous line, which is a nice self-check.)

The takeaway: treat "1 job" as the distance, "job per unit time" as the rate, and every work problem becomes the same D = R × T you already know.

**Strategic trick — plugging in a smart number (estimation/answer-choice tactic).** When a rates or work problem gives you no concrete distance — only speeds or rates — you are allowed to invent one, because the answer (an average speed, a ratio, a time) will not depend on the number you choose. Pick a distance that every rate divides evenly.

**Worked example (plug in a smart number).** A messenger travels the first half of a route at 30 mph and is asked, in a later part of the problem, how long the first half takes — but no distance is given. *Pick* the total route to be 60 miles (chosen because 30 divides it cleanly). The first half is 30 miles; time = 30/30 = **1 hour**. Had we picked 120 miles, the first half would be 60 miles at 30 mph = 2 hours — and every other leg would scale by the same factor, so any ratio or average asked for comes out identical. Naming the tactic: this is **plugging in numbers**, and the rule for choosing one is "pick the value that makes the arithmetic clean and that all the rates divide evenly" — for speeds, a common multiple of the speeds is ideal.

**Worked example (backsolving from the answer choices).** Backsolving is the answer-choice tactic's other half: when a question gives you concrete numbers and asks for a single quantity, test a choice instead of building an equation. Suppose: *A driver covers 300 miles. If she had driven 10 mph faster, the trip would have taken 1 hour less. What was her speed (mph)?* Answer choices: (A) 40 (B) 50 (C) 60 (D) 70 (E) 80. Start with the middle, **(C) 60**: at 60 mph, 300/60 = 5 hours; 10 mph faster is 70 mph, 300/70 ≈ 4.29 hours — that's only ~0.71 hour less, not a full hour, so the gap is too small. Smaller speeds make the gap *bigger* (division is steeper at low values), so go down to **(B) 50**: 300/50 = 6 hours; at 60 mph, 300/60 = 5 hours; difference is exactly **1 hour**. Answer: **(B) 50 mph**. Naming the tactic: this is **backsolving**, and the rule is "start with choice (B) or (C), and let whether the result is too big or too small tell you which direction to test next" — you rarely check more than two choices.

> **Recall check.** When should you reach for backsolving versus plugging in a smart number? (Backsolve when the answer choices are *concrete candidate values for the single unknown the question asks about* — test one and check the condition. Plug in a smart number when the problem withholds a value entirely and the answer is a *ratio, average, or percentage* that won't depend on the number you invent.)

**Procedure to memorize — the four-step rate algorithm.**

1. **Identify** which of the three quantities (D, R, T) the question asks for, and which two it gives you. Underline them in the prompt.
2. **Check and reconcile units** before doing any arithmetic. If the rate is "per hour" and the time is in minutes, convert one. If two rates use different units, make them match.
3. **Write the equation** in the form that isolates the unknown — D = R × T, R = D/T, or T = D/R — or just write D = R × T and solve algebraically.
4. **Substitute and solve**, then sanity-check the magnitude (does "12 km in 40 minutes at 18 km/h" feel right? yes; does "720 km" feel right? obviously not).

Run these four steps the same way every time. The discipline of step 2 — done *before* step 4, not after you get a weird answer — is the single habit that lifts rates accuracy the most.

**Micro-drill.** Without using a calculator or scratch paper: a car going 90 km/h — how many km does it cover in 10 minutes? In 45 minutes? In 80 minutes? Compute all three before reading on. (Answers: 15 km, 67.5 km, 120 km. Each is 90 × the fraction of one hour. If you got any wrong, the unit-conversion step is the gap to close.)

**Worked example (hard — combining unit conversion with a rate change).** A high-speed train averages 240 km/h for 50 minutes, then is held at a junction and crawls the next 12 km at 36 km/h. What is the total distance, and what is the total elapsed time in minutes?

- Leg 1 distance: convert 50 min = 50/60 = 5/6 hour. Distance = 240 × 5/6 = **200 km**. (Trap avoided: 240 × 50 = 12,000 km is absurd — the magnitude check catches it instantly.)
- Leg 2 time: T = D/R = 12/36 = 1/3 hour = **20 minutes**.
- Total distance = 200 + 12 = **212 km**.
- Total time = 50 + 20 = **70 minutes**.

Every step is D = R × T with a unit conversion bolted on. Nothing new — just two applications of the same procedure plus disciplined unit handling.

**Trap to watch.** The unit mismatch is the headline trap, but a close second is **mixing two different "per" units inside one problem** — for example, a rate given in pages per *minute* and a time given in *hours*, or a speed in meters per *second* alongside a distance in *kilometers*. The fix is the same: at step 2, force every quantity onto one consistent system of units (one unit of length, one unit of time) before you multiply or divide anything. Convert first, compute second — never the reverse.

| You are given | You want | Write |
| --- | --- | --- |
| D and T | R | R = D/T |
| R and T | D | D = R × T |
| R and D | T | T = D/R |
| no distance, asked a ratio/average | a value to work with | plug in a smart number |
| concrete numbers, asked the single unknown | the unknown | backsolve from choices |

**Common mistakes.**

- **Multiplying across mismatched units** (18 km/h × 40 "minutes"). The answer lands 60× too large; check units first.
- **Inverting the rearrangement** — writing T = R/D or R = T/D from memory. Use the triangle or solve D = R × T algebraically so you can't flip it.
- **Forgetting that fixed-distance problems are inverse-proportional** — assuming a 25% time increase means a 25% speed change. It does not.
- **Treating a work problem as something new** instead of D = R × T with "1 job" as the distance.
- **Skipping the magnitude sanity-check** — an answer of 720 km for a 40-minute bike ride should fail the smell test before you ever look at the choices.
- **Backsolving in the wrong direction** — when a choice is "too small," not noticing whether the relationship is increasing or decreasing before picking the next one to test, so you waste moves checking all five.

**Recap.** One equation, three rearrangements: D = R × T, R = D/T, T = D/R. Run the four-step procedure every time — identify the unknown, reconcile units, write the equation, substitute and sanity-check. Work problems are the same equation with "1 job" as the distance and "job per unit time" as the rate. When no distance is given, plug in a smart number that every rate divides cleanly; when the choices are candidate values for the unknown, backsolve from (B) or (C). The units-first habit and the magnitude check are what separate consistent scorers from the rest: convert before you compute, and never trust an answer you haven't sniff-tested for size.

## @two-objects-moving

Two cars, two trains, two people on bikes. This is one of the most common rates setups on the GMAT, and once you see its skeleton, every version of it collapses to a single question and one of two arithmetic moves. The reason this topic rewards a small amount of memorization so heavily is that the test writers recycle the *same* underlying mechanic dozens of ways — same direction or opposite, head start or simultaneous start, plain land travel or a boat fighting a current — and a student who has truly internalized the gap idea answers all of them with one reflex while everyone else re-derives from scratch and makes sign errors under time pressure.

**Mental model.** Ask yourself one thing: is the gap between the two objects growing or shrinking, and are they moving in the **same** direction or **opposite** directions? The answer determines the closing or opening rate in a single step. You never reason about the two objects separately once you know the gap rate — you reason about the *gap itself*, as if it were a single moving thing.

- **Opposite directions** (toward each other or away from each other): the gap changes at the **sum** of the speeds.
- **Same direction** (one chasing the other): the gap changes at the **difference** of the speeds.

One rule. Every setup. Memorize the table below and you have covered the entire family.

| Scenario | Rate of gap change | Time / distance formula |
|---|---|---|
| Moving apart (opposite directions) | v1 + v2 | gap = (v1 + v2) × t |
| Moving toward each other | v1 + v2 | time = initial gap ÷ (v1 + v2) |
| Same direction, catch-up | v1 − v2 | time = head start ÷ (v1 − v2) |

The reason "opposite directions" and "toward each other" use the *same* arithmetic is that direction of travel relative to each other is identical in both — the two objects' velocity vectors point against each other. Whether they start at the same spot and fly apart, or start apart and rush together, every hour the gap changes by (v1 + v2). The only difference is the sign of the change (growing vs. shrinking), and the formula handles that automatically.

A quick intuition pump for why same-direction subtracts: imagine you and a friend both walk a moving sidewalk-like road, you at 5 mph and your friend just ahead at 3 mph. From your friend's point of view, you are creeping closer at only 5 − 3 = 2 mph, because your friend is *also* fleeing forward and consuming part of your speed. The gap shrinks at the leftover. That leftover — the difference — is the only number that matters for a catch-up.

**Setup 1: Moving in opposite directions — separation rate = sum of speeds.**

Two cars leave the same point in opposite directions at 50 km/h and 70 km/h. After t hours:

    distance apart = (50 + 70) × t = 120t

If you need them 360 km apart: t = 360/120 = **3 hours**.

**Setup 2: Moving toward each other — closing rate = sum of speeds.**

Two friends 48 km apart bike toward each other at 14 km/h and 10 km/h. How long until they meet?

    closing rate = 14 + 10 = 24 km/h
    meeting time = 48/24 = 2 hours

Same arithmetic as opposite directions. "Moving apart" and "moving toward" are symmetrical — both use the sum.

**Setup 3: Same direction, one chasing — closing rate = difference of speeds.**

A freight train leaves at 8 AM at 45 mph. A passenger train leaves the same station at 10 AM going the same direction at 65 mph. When does the passenger catch up?

By 10 AM, the freight is 2 × 45 = 90 miles ahead. The passenger gains at 65 − 45 = **20 mph** — not 65, because the freight is also moving forward. Catch-up time = 90/20 = 4.5 hours. 10 AM + 4.5 hours = **2:30 PM**.

The key: if you used 65 mph as the closing speed, you're pretending the freight train is standing still. It isn't.

> **Recall check.** Cover the table and answer from memory: when two objects move toward each other, do you add or subtract their speeds? When one chases the other in the same direction? (Toward each other — or moving apart — **add**. Same direction — **subtract** the slower from the faster.)

**Worked example (toward each other, easy).** A drone flies from tower A toward tower B at 30 m/s. At the same instant, a second drone flies from B toward A at 20 m/s. The towers are 5,000 m apart. How long until the drones pass each other?

- Both are moving, in opposite directions, so the gap shrinks at the **sum**: 30 + 20 = 50 m/s.
- Time = initial gap ÷ closing rate = 5,000 / 50 = **100 seconds**.

Notice you never had to track where each drone is individually. The gap is a single quantity shrinking at 50 m/s; divide and you're done. That is the whole advantage of thinking in terms of the gap.

**Worked example (where each one is when they meet, easy-medium).** Same two drones, same 5,000 m, same speeds. At the moment they pass, how far is the faster drone from tower A? This is a natural follow-up the GMAT loves, because students who only memorized "100 seconds" freeze when asked *where*. Once you have the meeting time, each object travels at its own speed for that time: the 30 m/s drone covers 30 × 100 = **3,000 m** from A. Check: the slower drone covers 20 × 100 = 2,000 m from B, and 3,000 + 2,000 = 5,000 m. The gap rate gets you the time; each individual speed gets you each individual position.

**Worked example (catch-up with staggered start, medium).** Car A leaves a checkpoint at noon traveling north at 40 mph. Car B leaves the same checkpoint at 1:30 PM, also north, at 60 mph. At what clock time does B overtake A?

1. Find A's head start at the moment B departs. From noon to 1:30 PM is 1.5 hours, so A is 40 × 1.5 = **60 miles** ahead when B starts.
2. Same direction → closing rate is the **difference**: 60 − 40 = **20 mph**.
3. Catch-up time = head start ÷ closing rate = 60 / 20 = **3 hours** after B departs.
4. B departed at 1:30 PM, so it overtakes A at 1:30 PM + 3:00 = **4:30 PM**.

The trap here is step 1: many students forget A kept moving during the 1.5-hour gap and use the wrong head start, or they skip to using 60 as the closing speed. Pin down the head start at B's start time, then subtract speeds.

**Staggered start times — the general procedure.** When one object leaves before the other, compute each object's actual travel time separately, then add (opposite directions) or compare (same direction).

Tom walks at 6 km/h. Thirty minutes later his sister walks the opposite direction at 4 km/h. How far apart when Tom has walked 1 hour?

Tom: 6 km. Sister (0.5 hr): 2 km. Opposite directions → 6 + 2 = **8 km apart**.

> **Recall check.** A jogger leaves at 7:00 AM at 6 mph. A cyclist leaves the same point at 7:20 AM, same direction, at 12 mph. What is the cyclist's closing rate, and how big is the jogger's head start at 7:20? (Closing rate = 12 − 6 = 6 mph; head start = 6 mph × (1/3) hr = 2 miles. So catch-up takes 2/6 hr = 20 minutes, i.e., 7:40 AM.)

**Boat-with-current and plane-with-wind.** This is the two-objects idea wearing a costume: the medium (water or air) is the "second mover." The current adds going downstream and subtracts going upstream; a tailwind adds, a headwind subtracts.

    downstream speed = boat speed + current speed
    upstream speed   = boat speed − current speed

A boat does 24 km downstream in 2 hours and 24 km upstream in 3 hours:

- Downstream: boat + current = 24/2 = 12
- Upstream: boat − current = 24/3 = 8
- Add the two equations: 2(boat) = 20, so boat = **10 km/h**, current = **2 km/h**

The structural move — add the two equations to cancel the current, subtract them to isolate it — is worth memorizing. Adding gives twice the boat speed; subtracting gives twice the current speed. The same algebra runs the wind version verbatim: if a plane flies a route with a tailwind at 480 mph and the return into a headwind at 400 mph, then plane speed = (480 + 400)/2 = **440 mph** and wind = (480 − 400)/2 = **40 mph**. Add to find the "boat," subtract to find the "current" — one reflex covers both costumes.

**Worked example (current, hard — uses plugging in / backsolving).** A boat travels a certain distance downstream in 4 hours and the same distance upstream in 6 hours. If the current is 3 mph, what is the boat's speed in still water?

The clean algebra: let the boat's still-water speed be b and the one-way distance be D.

- Downstream: D = (b + 3) × 4
- Upstream: D = (b − 3) × 6

Set them equal (same D): (b + 3) × 4 = (b − 3) × 6 → 4b + 12 = 6b − 18 → 30 = 2b → b = **15 mph**.

Now name the strategic trick: if you blanked on the algebra under time pressure, **backsolve** from the answer choices. Suppose the choices were 12, 15, 18, 20, 24. Test the middle value, 18: downstream speed 21 → D = 84; upstream speed 15 → D = 90. Not equal (84 ≠ 90), and the downstream distance is too small relative to upstream, meaning the boat needs to be slower so the speeds are closer together — step down. Test 15: downstream 18 → D = 72; upstream 12 → D = 72. **Equal.** Backsolving lands you on 15 with two arithmetic checks and no equation-solving. On a tough day, that is faster and less error-prone than the algebra. The reason backsolving is so powerful on this family is that the answer choices are *speeds*, and plugging a speed straight into "rate × time = distance" is one multiplication per direction — far cheaper than rearranging a two-variable system.

**Worked example (toward each other, hard — picking smart numbers).** Two trains start at the same instant from stations 300 miles apart and head toward each other. Train X travels 50% faster than Train Y. They meet after 2 hours. What is Train Y's speed?

Use the trick of **plugging in numbers for the unknown ratio**. Let Train Y's speed be y; then X's speed is 1.5y (50% faster). Toward each other → closing rate = y + 1.5y = 2.5y.

- Distance closed = closing rate × time = 2.5y × 2 = 5y.
- They cover the whole 300 miles when they meet: 5y = 300 → y = **60 mph** (and X = 90 mph).

Sanity check: in 2 hours Y covers 120 miles, X covers 180 miles, total 300. The gap closes exactly. The lesson: when a problem hands you a ratio or percentage instead of a number, assign a variable (or a convenient number) to the smaller part and let the closing-rate formula do the rest.

**Worked example (round-trip / two phases, hard — estimation as a backstop).** A messenger rides from town P toward town Q at 12 mph while a courier simultaneously rides from Q toward P at 18 mph; the towns are 75 miles apart. After they meet, how much longer must the slower messenger ride to reach Q than the faster courier needed to reach P? First find the meeting: closing rate 12 + 18 = 30 mph, so meeting time = 75/30 = 2.5 hours. At that instant the messenger has covered 12 × 2.5 = 30 miles (so 45 miles of remaining road to Q), and the courier has covered 18 × 2.5 = 45 miles (so 30 miles remaining to P). After meeting, each finishes at its own speed: messenger needs 45/12 = 3.75 hours; courier needs 30/18 ≈ 1.667 hours. Difference ≈ 3.75 − 1.667 = **about 2.08 hours**. Before committing, **estimate** to catch a blunder: the messenger is both slower and has farther to go, so its remaining time *must* be the larger of the two — a difference near 2 hours is sensible, whereas a tiny or negative difference would signal a flipped subtraction. Estimation here is not the solution; it is the guardrail.

**Trap to watch.** "How fast is the gap growing (or closing)?" is always the **sum** or **difference** of the two speeds — never one speed alone. Confusing the gap rate with a single vehicle's speed is the classic wrong answer on this question type, and the test deliberately offers the single-speed value as a tempting distractor (e.g., putting "65 mph" in the catch-up problem above, or "300 miles" as a meeting distance you've already used up). Before you divide, ask: "Is this rate the rate of the *gap*, or the rate of one object?" If you're computing a meeting time or a catch-up time, it must be the gap rate.

**Trap to watch (units and start times).** A second trap hides in staggered starts and unit slips: a 30-minute delay is 0.5 hours, not 30 in any rate equation, and the head start must be measured at the moment the *second* object begins moving — not at the original start time. Convert minutes to hours first, then compute the head start.

> **Self-explanation prompt.** A fast train chases a slow train — 80 mph vs. 50 mph — and the slow train had a 60-mile head start. Which determines the catch-up time: the sum (130 mph), the difference (30 mph), or neither? If you said "the difference," explain in one sentence why. (The fast train only *gains* on the slow one at 30 mph, because the slow train is also moving forward and eating up track — only the net gain per hour shrinks the gap, so catch-up time = 60 ÷ 30 = 2 hours.)

**Procedure to memorize.** For any two-objects problem, run these five steps in order:

1. **Identify the direction relationship.** Opposite (toward or apart) or same (catch-up)?
2. **Compute the gap rate.** Opposite → add the speeds (v1 + v2). Same → subtract (faster − slower).
3. **Handle staggered starts.** If one object left earlier, find its head start = (earlier speed) × (time delay), converting the delay to consistent units first.
4. **Find the relevant gap distance.** For meeting: the full initial separation. For catch-up: the head start from step 3. For "how far apart after t": multiply gap rate by t.
5. **Divide or multiply.** Time = gap distance ÷ gap rate; or distance = gap rate × time. Then convert the answer back to clock time if the question asks for it.

> **Recall check.** From memory, what are the five steps? (1 — direction relationship; 2 — gap rate by sum or difference; 3 — head start for staggered starts; 4 — relevant gap distance; 5 — divide gap distance by gap rate, or multiply rate by time.)

**Common mistakes.**

- **Using one object's speed as the closing rate.** Especially in catch-up problems — the freight train is moving, so the gain is the difference, not the chaser's full speed.
- **Adding when you should subtract (or vice versa).** Same direction subtracts; opposite (both toward and apart) adds. Decide direction *first*, before touching arithmetic.
- **Mishandling the head start in staggered starts.** Forgetting that the early object keeps moving during the delay, or measuring the head start at the wrong instant.
- **Unit slips on delays.** Treating a 30-minute or 20-minute delay as 30 or 20 in an hourly equation. Convert to hours.
- **Stopping at the meeting time when the question asks for a position or a difference.** The gap rate gives the *when*; each object's own speed gives the *where*. Re-read the final question before bubbling.
- **Forgetting to convert elapsed time back to a clock time.** The question often asks "at what time," not "how many hours" — add the elapsed time to the start time.

**Closing recap.** Every two-objects problem is one question — is the gap opening or closing, and are they moving the same way or opposite? — and one arithmetic move: **add the speeds for opposite directions (toward or apart), subtract them for same-direction catch-up.** Account for any head start by letting the early object keep moving during the delay, keep your time units consistent, then divide the gap distance by the gap rate (or multiply rate by time). When the choices are speeds, **backsolve**; when the problem hands you a ratio, **plug in a variable for the smaller part**; and **estimate** the sign and size of your answer as a guardrail before you commit. Think in terms of the gap as a single moving thing, never two objects you track separately, and the whole family — cars, trains, bikes, boats in current, planes in wind — runs on the same five-step procedure.

## @average-speed

The single highest-leverage mistake to avoid on GMAT rates lives in this one section. Master it and you bank an entire class of questions that traps most test-takers automatically — and you do it with one idea, not a page of formulas:

**Average speed is NOT the average of the speeds.**

That sentence is worth more than any formula on this page. The GMAT loves average-speed problems precisely because the "obvious" answer — averaging the two numbers — is almost always sitting right there in the answer choices as bait. Internalize *why* it's wrong, not just *that* it's wrong, and you'll spot the trap from across the room. The whole topic reduces to a single defensible move you can make under time pressure: when in doubt, go back to the definition and divide total distance by total time. Everything else here is a shortcut that saves a few seconds in specific, recognizable situations.

**The formula that always works.** Average speed = **total distance ÷ total time**. If you ever feel unsure which formula applies, fall back here — it never fails. This is not a trick or a special case; it is the *definition* of average speed. Every shortcut on this page is just this one identity wearing a disguise. Burn this into memory before anything else, because it is the formula you will actually use when the clock is running and you can't remember whether the harmonic-mean shortcut is legal.

**Worked example that traps everyone.** You drive to work at 40 mph and home at 60 mph along the same route. What is your average speed for the round trip?

- Wrong: (40 + 60)/2 = 50 mph
- Right: the **harmonic mean**, 2ab/(a+b) = 2(40)(60)/(40+60) = 4800/100 = **48 mph**

Why not 50? Because you spend *more time* at the slower speed. At 40 mph the trip takes longer, so the 40 is weighted more heavily than the 60 in the true average. The faster leg flies by; the slower leg drags. The overall average therefore drops *below* the arithmetic mean — always. Think of it physically: you crawl at 40 for a long stretch and only enjoy the 60 mph zip for a short while. Time at the slow speed dominates, so the average leans toward the slow speed.

Redo that same problem using total ÷ total, so you see the shortcut and the definition agree:

- Assume 120 miles each way (any distance works — it cancels)
- Time going: 120/40 = 3 hours
- Time back: 120/60 = 2 hours
- Total distance: 240. Total time: 5. Average: 240/5 = **48 mph**

Notice the strategic move there — **plugging in a convenient number**. The distance was never given, but average speed doesn't depend on it (it cancels), so we *invented* a distance that divides cleanly by both 40 and 60. Pick 120 (the least common multiple of 40 and 60) and the times come out as whole numbers. Picking 1 mile would also work but leaves you with ugly fractions like 1/40 hour. When a problem gives speeds but no distance, plug in the LCM of the speeds and watch the arithmetic fall apart cleanly. This is the single most useful tactic on the entire topic.

> **Recall check.** Cover the page. A round trip: out at 30 mph, back at 70 mph, same route both ways. Which formula applies, and what is the average speed? (Equal distances → harmonic mean. 2(30)(70)/(30+70) = 4200/100 = **42 mph**. Note it's below the midpoint of 50, pulled down toward the slow leg — as it always must be.)

**The harmonic mean applies only when the two distances are equal.** Different distances → total/total only. The round-trip-on-the-same-route problem is the classic equal-distance case, which is exactly why the harmonic-mean shortcut shows up so often — but it is *only* a shortcut for that one situation. The moment the distances differ, or you have three legs, or you're handed times instead of distances, the harmonic formula is wrong and you must return to the definition.

**Worked example (unequal distances).** You drive the first 100 miles at 50 mph and the last 150 miles at 75 mph. Average speed for the whole trip?

- Leg 1 time: 100/50 = 2 hr
- Leg 2 time: 150/75 = 2 hr
- Total distance: 250. Total time: 4. Average: 250/4 = **62.5 mph**

The harmonic mean 2(50)(75)/(50+75) = 60 would be wrong here. The distances are unequal, so only total/total gives the right answer. The harmonic-mean number (60) is precisely the kind of plausible-looking value the test will offer as a wrong choice — close to the truth but built on the wrong assumption. The test-writer knows you might grab the harmonic formula reflexively, and 60 is the punishment for not reading whether the distances matched.

**Worked example (the time-weighted case).** A driver goes 30 mph for 2 hours, then 50 mph for 3 hours. Average speed?

Here you're given *times*, not distances — so don't reach for the harmonic mean at all. Build total/total directly:

- Distance leg 1: 30 × 2 = 60 miles
- Distance leg 2: 50 × 3 = 150 miles
- Total distance: 210. Total time: 5. Average: 210/5 = **42 mph**

When the legs are specified by time, average speed is the *time-weighted* mean of the speeds: (30·2 + 50·3)/(2+3) = (60+150)/5 = 42. Equal times would make it the plain arithmetic mean; unequal times tilt it toward whichever speed you held longer (here, the 50 mph leg, held three hours, pulls the average above the 40 midpoint to 42). Recognizing "given times, not distances" is half the battle on these — it's the read that decides everything.

> **Recall check.** Without computing: a trip is half *distance* at 20 mph and half *distance* at 60 mph versus half *time* at 20 mph and half *time* at 60 mph. Which produces the higher average speed? (The half-*time* trip. Half-time gives the arithmetic mean, 40 mph. Half-distance gives the harmonic mean, 2(20)(60)/80 = 30 mph, because you're stuck at 20 mph for more *time*. Equal distance always favors the slow leg more heavily than equal time does.)

**Worked example (backsolving the missing leg).** A 120-mile trip averaged 48 mph overall. The first 60 miles were driven at 40 mph. What was the speed for the last 60 miles? Answer choices: (A) 56 (B) 60 (C) 64 (D) 72 (E) 80.

This is a great place to **backsolve** — work from the answer choices instead of grinding algebra. First nail down what's fixed:

- Total distance: 120 miles. Overall average: 48 mph → total time = 120/48 = 2.5 hours.
- First leg time: 60/40 = 1.5 hours. So the second leg must take 2.5 − 1.5 = **1 hour**.
- Second leg is 60 miles in 1 hour → 60 mph.

That's choice **(B)**. If you'd rather verify by backsolving the choices directly: test (B) 60 mph → second-leg time 60/60 = 1 hr → total 1.5 + 1 = 2.5 hr → average 120/2.5 = 48. Matches. Notice you never needed the harmonic mean here at all — the cleanest path was the definition (total ÷ total) plus a subtraction. **When the overall average is given and a leg speed is missing, convert everything to time, because times add — speeds don't.** A useful pre-check before even computing: the overall average (48) is closer to 40 than to 60, which tells you the unknown leg's speed must be *higher* than 40 to drag the average up — so tiny answers would be suspect immediately.

**Worked example (hard — three legs, estimation as a check).** A cyclist rides 40 km at 20 km/h, then 40 km at 40 km/h, then 40 km at 60 km/h. Average speed for the whole 120 km?

Equal distances, but *three* legs — the two-number harmonic formula doesn't directly apply, so go to total/total:

- Leg times: 40/20 = 2 hr, 40/40 = 1 hr, 40/60 = 2/3 hr
- Total time: 2 + 1 + 2/3 = 3 + 2/3 = 11/3 hours
- Average: 120 ÷ (11/3) = 120 × 3/11 = 360/11 ≈ **32.7 km/h**

Now sanity-check with **estimation**: the plain average of 20, 40, 60 is 40, and we *know* the true average must sit below that because the slow leg eats the most time. 32.7 is comfortably below 40 — passes the smell test. If you'd computed something above 40, you'd know instantly you erred. (For equal distances across many legs, the generalized harmonic mean is n ÷ Σ(1/speed) = 3 ÷ (1/20 + 1/40 + 1/60) = 3 ÷ (11/120) = 360/11 — same answer, but total/total needs no formula recall, which is exactly why it's the safer default under pressure.)

> **Recall check.** A trip covers equal distances on three legs at 30, 30, and 60 mph. Will the average speed be closer to 30 or to 60? (Closer to 30. Two of the three equal-distance legs are slow, and the slow legs each soak up more *time* than the fast one, so the time-weighted average leans hard toward 30. Total/total: assume 60 mi each → times 2, 2, 1 = 5 hr; 180/5 = 36 mph — well below the 40 plain average.)

**Two-question test before you pick a formula.**

1. Are the two legs the same distance (round trip on the same route)? → You *may* use the harmonic mean: **2ab/(a+b)**.
2. Are the distances different, or are you given times instead of distances, or are there three-plus legs? → Use total/total: **Σ distance ÷ Σ time**.

If you're not certain the distances match, default to total/total. It is always correct; the harmonic mean is only a shortcut for the equal-distance, two-leg case.

**The procedure to memorize.** Run this exact sequence on every average-speed problem:

1. **Read for what defines each leg** — equal distances, equal times, or specific given distances/times? This single read determines everything that follows.
2. **If equal distances and exactly two legs**, you may use the harmonic mean 2ab/(a+b) as a shortcut.
3. **In every other case** (unequal distances, given times, three or more legs, or any doubt at all), compute **total distance ÷ total time**.
4. **If a distance is missing but speeds are given**, plug in a convenient distance — the LCM of the speeds — since the distance cancels.
5. **If the overall average is given and a leg is unknown**, convert the known pieces to *time*, because times add; then solve for the missing time and back out the speed.
6. **Sanity-check by estimation**: the true average must always be *below* the plain arithmetic mean of the speeds and pulled toward the slower legs. If your answer exceeds that midpoint, you've made an error.

**Micro-drill.** Pick the right formula and compute each — 30 seconds apiece:

1. Drive to a destination (40 miles) at 40 mph. Drive home (40 miles) at 60 mph. Average speed for the round trip?
2. Drive 60 miles at 30 mph, then drive another 60 miles at 60 mph. Average speed?
3. Drive 60 miles at 30 mph, then drive 90 miles at 45 mph. Average speed?
4. Drive for 2 hours at 30 mph, then for 2 hours at 60 mph. Average speed?

Answers: (1) **48 mph** — equal distances; harmonic mean: 2(40)(60)/(40+60) = 4800/100 = 48. Verify with total/total: time = 1 + 2/3 = 5/3 hr; 80/(5/3) = 48. (2) **40 mph** — equal distances; harmonic: 2(30)(60)/(30+60) = 3600/90 = 40. Verify: time = 2 + 1 = 3 hr; 120/3 = 40. (3) **37.5 mph** — unequal distances; total/total only: 150 mi ÷ (2 + 2) hr = 37.5. Using harmonic here gives 36 — wrong, because harmonic only applies when the two *distances* are equal. (4) **45 mph** — unequal distances but equal *times*; total/total: (60 + 120) mi ÷ 4 hr = 45. Here the arithmetic mean also works: (30 + 60)/2 = 45 — this is the one case where averaging the speeds is correct, because equal time weights them equally. Total/total always works regardless. If (1) or (2) gave you 50, you averaged the speeds — 50 is wrong because you spend more time at the slower speed, which pulls the true average below the midpoint.

**Trap to watch.** The arithmetic mean of the speeds is *always* offered as a wrong answer on equal-distance problems, and it's *correct* only on equal-*time* problems. The test is checking whether you can tell which world you're in. The instant you see "to work and back at different speeds" or "out and back on the same route," that's equal *distance* — the answer is below the midpoint, and the midpoint is the trap. Conversely, if it says "drove for 2 hours at one speed, then 2 hours at another," that's equal *time* — the midpoint is genuinely correct. Same two speed numbers, different answer, depending entirely on whether distances or times are equal. The two scenarios are designed to look identical at a glance; the only defense is to slow down for one beat and ask "equal distance or equal time?" before touching the arithmetic.

**Common mistakes.**

- **Averaging the speeds when distances are equal.** The most common error by far. Round-trip at 40 and 60 is 48, not 50.
- **Using the harmonic mean when distances are unequal.** It only works for two equal-distance legs. Different distances or three-plus legs → total/total.
- **Reaching for the harmonic mean when the problem gives times, not distances.** Given times means total/total (and the answer is the time-weighted mean, which leans toward the longer-held speed).
- **Adding speeds instead of times.** When a leg is unknown, you cannot average or add the speeds to recover it — convert to times and add those; only times are additive.
- **Forgetting the estimation check.** The true average must always sit below the plain average of the speeds. A quick mental check catches most arithmetic slips for free.

**Why total/total always works.** Average speed is literally "how far divided by how long" for the whole trip. Any shortcut formula is just a special case of this identity — and total/total is the case that never breaks. When in doubt, abandon every shortcut and go back to the definition; it costs ten extra seconds and it is never wrong.

> **Self-explanation prompt.** Why is the harmonic mean always *less* than the arithmetic mean for two positive speeds? If you can explain it as "because the slow leg occupies more of the total time and drags the weighted average down," you will never pick the arithmetic-mean trap answer again.

**Recap.** Average speed = total distance ÷ total time, always. The harmonic mean 2ab/(a+b) is a *shortcut* good only for two equal-distance legs; equal *times* give the plain arithmetic mean; everything else demands total/total. Read first for what each leg holds constant — distance or time. Plug in the LCM of the speeds when distance is missing; convert to times (which add) when a leg is unknown; and always sanity-check that your answer falls below the midpoint of the speeds. Do that and the 50-mph trap never catches you again.

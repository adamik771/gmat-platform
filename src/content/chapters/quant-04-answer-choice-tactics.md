---
slug: quant-04-answer-choice-tactics
title: "Answer-Choice Tactics: Read the Choices Before You Solve"
section: Quant
estimated_minutes: 14
prerequisites:
  - quant-03-estimation
summary: |
  The five choices are data, not a menu. This chapter builds the read-the-choices-first habit: four cheap filters (sign, size, divisibility, form), the spread test that picks your method, and the pattern behind every engineered trap answer.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read. As you work, notice whether you looked at the answer choices before you started computing.
    pretest_question_ids:
      - answer-choice-tactics-q1
      - answer-choice-tactics-q2
  - id: choices-are-data
    type: reading
    title: "The choices are data — four cheap filters"
    check_question_ids:
      - answer-choice-tactics-q3
  - id: read-the-spread
    type: reading
    title: "Read the spread — let the gaps pick your method"
    check_question_ids:
      - answer-choice-tactics-q4
  - id: the-engineered-trap
    type: reading
    title: "The engineered trap — how wrong answers get built"
    check_question_ids:
      - answer-choice-tactics-q5
  - id: summary
    type: summary
    title: "Recap and what to do next"
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - answer-choice-tactics-q6
      - answer-choice-tactics-q7
      - answer-choice-tactics-q8
      - answer-choice-tactics-q9
  medium:
    target_accuracy_by_score:
      "605": 55
      "645": 70
      "685": 85
      "725": 95
    question_ids:
      - answer-choice-tactics-q10
      - answer-choice-tactics-q11
      - answer-choice-tactics-q12
      - answer-choice-tactics-q13
  hard:
    target_accuracy_by_score:
      "605": 40
      "645": 55
      "685": 70
      "725": 90
    question_ids:
      - answer-choice-tactics-q14
      - answer-choice-tactics-q15
      - answer-choice-tactics-q16
---

## @choices-are-data

The five answer choices are not a menu you consult after solving. They are **part of the problem** — five free data points the test-writer hands you before you compute a single thing. Read them first, every time. On a hard problem they tell you what kind of answer is even possible; on an easy one they tell you when you've already done too much work.

**Mental model.** Treat the choices as a **constraint set**. Each one you can rule out on sign, magnitude, divisibility, or form is a choice you never have to test and a wrong turn your pencil never takes. The strongest test-takers narrow five to two before the real arithmetic starts, then spend their effort only where it changes the answer.

Run the cheapest filters first, in this order:

1. **Sign.** Is the answer forced positive or negative? A difference, a net change, a slope — these carry a sign you can often predict in two seconds.
2. **Ballpark magnitude.** Is it "around 10" or "around 1,000"? One rough multiplication usually settles it. (This is the estimation skill from the previous chapter, pointed at the choices.)
3. **Divisibility / parity.** Counting questions and ratio totals often must be even, divisible by 5, or a multiple of the group size.
4. **Form / units.** Does the choice have the right structure — a rate vs. a total, variables in the numerator that should make the answer grow?

**Worked example.** A car travels 240 miles out at 40 mph and returns the same 240 miles at 60 mph. What is the average speed for the whole trip? Choices: (A) 45 (B) 48 (C) 50 (D) 52 (E) 55. Before any formula work, **read the choices.** The naive average is (40 + 60)/2 = 50, sitting right there as choice (C) — suspicious. More time is spent at the slower speed, so the true average must be **pulled below 50** toward the slower leg. That one observation kills (C), (D), (E). Now you're choosing between (A) and (B), and the real computation is short: total distance 480, total time = 240/40 + 240/60 = 6 + 4 = 10 hours, so 480/10 = **48**. Answer (B). The choices flagged the trap and cut your work in half.

**Worked example.** If x² − 5x − 14 = 0 and x < 0, what is x? Choices: (A) −7 (B) −2 (C) 2 (D) 7 (E) 9. Do not factor blindly — **use the sign condition the problem handed you.** x < 0 eliminates (C), (D), (E) on inspection. Two choices remain, and instead of solving the quadratic you **plug a choice in as your test value**: (−2)² − 5(−2) − 14 = 4 + 10 − 14 = 0. Answer (B). One substitution confirmed what factoring would have taken three lines to reach.

**Micro-drill.** For each setup, name the filter that eliminates the most choices — five seconds each:

1. "What was the net loss?" Choices: −12, −8, 4, 8, 12 → ___
2. Boys to girls is 2:3; possible total? Choices: 12, 18, 24, 25, 35 → ___
3. "Approximately how many liters?" Choices: 5, 50, 500, 5,000, 50,000 → ___

Answers: (1) **Sign** — a loss is negative; three choices die instantly. (2) **Divisibility** — the total must be a multiple of 2 + 3 = 5, leaving only 25 and 35. (3) **Ballpark** — choices a factor of 10 apart mean one rough calculation lands in exactly one bucket.

> **Recall check.** Of the four cheap filters, which runs first and why? (Sign — it's the fastest possible read and often eliminates two or three choices for free.)

> **Self-explanation prompt.** In your own words: why is reading the choices *before* solving faster, when it feels like an extra step? (Because the choices constrain what the answer can be — every choice you eliminate up front is computation you never perform, and the survivors tell you how precise your work actually needs to be.)

## @read-the-spread

Once the filters have thinned the field, look at the **gaps between the surviving choices**. The spread is the test-writer telling you, openly, how much precision the question demands. Wide gaps say "estimate." Tight gaps say "compute." Ignoring that message costs you in both directions: grinding exact arithmetic on a wide spread wastes a minute, and rounding on a tight cluster hands you a coin flip between neighbors.

| When the choices look like… | Do this |
|---|---|
| Spread far apart (12, 45, 90, 200, 500) | **Estimate.** One rough calc lands in exactly one bucket. |
| Clustered tight (48, 49, 50, 51, 52) | **Compute exactly.** Rounding can't separate neighbors. |
| All share a factor or form (all even, all multiples of 5, all square roots) | Solve for the **distinguishing digit or sign**, not the whole value. |
| One is the "naive" number (a sum, a simple average, a bare product) | Suspect the **trap** — verify it survives the step a rushed solver skips. |
| Contains 0, 1, or "cannot be determined" | Test **edge cases** and hunt for a single counterexample first. |

**Worked example.** A factory produces 4,880 units a day and operates 310 days a year. Roughly how many units a year? Choices: (A) 15,000 (B) 150,000 (C) 1,500,000 (D) 15,000,000 (E) 150,000,000. The choices differ by factors of ten — this is an **order-of-magnitude question wearing a multiplication costume**. Round hard: 5,000 × 300 = 1,500,000. Answer (C). Exact arithmetic here isn't more accurate in any way that matters; it's just slower. The 2.5% rounding error cannot cross a 10× gap.

**Worked example.** What is 3/8 + 1/3? Choices: (A) 0.68 (B) 0.71 (C) 0.73 (D) 0.75 (E) 0.78. The gaps are 0.02-0.03 — **too tight to round**. If you approximate 3/8 as "about 0.4," you get 0.4 + 0.33 = 0.73 and confidently pick (C), which is wrong. Compute exactly with a common denominator: 9/24 + 8/24 = 17/24 = 0.7083… → closest is **0.71**, answer (B). The tight spread was the warning; the rounded path was the bait.

**Trap to watch.** The deadliest pacing error in this chapter is treating tightly-clustered choices as if they were spread out. If the options are 0.24, 0.25, 0.27, 0.30, you cannot round to "about a quarter" and pick — you've thrown away the precision the spread is demanding. Read the gaps before you choose your method, not after your estimate lands between two choices.

> **Recall check.** Choices are 18, 19, 21, 24, 25 — estimate or compute exactly, and why? (Compute exactly: gaps of 1-3 units are smaller than typical rounding error, so an estimate can't separate neighbors.)

## @the-engineered-trap

Wrong answers on the GMAT are not random numbers. Each one is **reverse-engineered from a specific mistake**: the test-writer solves the problem wrong on purpose — skips a step, misreads the question, applies the naive rule — and places that result among the choices. Once you know how traps are built, the trap stops being a danger and becomes a signpost: *the bait tells you which step the question is really testing.*

The three most common builds:

- **The naive-rule answer.** Apply the obvious-but-wrong rule: average the two speeds, add the successive percents, cancel the up-20%-down-20%. The trap is the answer to a simpler question than the one asked.
- **The half-finished answer.** Stop one step early: the value of x when the question asked for 2x + 3, the total change when it asked for the monthly average, the discount when it asked for the sale price.
- **The misread answer.** Solve for the other quantity: the boys when it asked for the girls, the time going when it asked for the round trip.

**Worked example.** A jar holds only red and blue marbles in the ratio 3:5, and the total is fewer than 36. Which could be the total number of marbles? Choices: (A) 22 (B) 26 (C) 32 (D) 40 (E) 50. This is pure **divisibility filtering**. A 3:5 ratio forces the total to be a multiple of 3 + 5 = 8. Scan: 22 (no), 26 (no), 32 = 8 × 4 (**yes**), 40 = 8 × 5 (yes), 50 (no). Two survive — so apply the second constraint the stem already gave you: "fewer than 36" knocks out (D) 40 and leaves **(C) 32**. Notice the build: choice (D) is there for the solver who runs the divisibility filter but **stops reading before the second constraint** — a half-finished answer, placed deliberately.

**Worked example.** If 3x + 5 = 26, what is the value of 3x − 5? Choices: (A) 7 (B) 9 (C) 16 (D) 21 (E) 31. Solve forward and you get x = 7 — which is sitting right there as choice (A), waiting for the solver who answers "what is x?" instead of the question asked. The asked-for value is 3x − 5 = 21 − 5 = **16**, answer (C). Faster still, skip x entirely: 3x − 5 is exactly 10 less than 3x + 5, so it's 26 − 10 = 16. **The last thing you do on every problem is reread what the question asked for** — the test-writer is betting you won't.

**Trap to watch.** A choice that matches your intermediate result feels like confirmation — "I got a number that's on the page, I must be right." It is the opposite: intermediate values are placed among the choices *because* solvers stop early. Treat a too-early match as a prompt to reread the question stem, not as permission to move on.

> **Recall check.** Name the three trap builds. (Naive rule, half-finished, misread — the wrong answer to a simpler rule, an earlier step, or a different question.)

> **Self-explanation prompt.** Why does the "obvious" choice matching a naive calculation so often turn out wrong? (Because the test-writer built it from the exact step a rushed solver skips — the trap is the correct answer to the wrong question, which is what makes it feel right.)

## @summary

The discipline of this chapter is one beat of overhead that compounds across the entire Quant section. Before you compute, ask: **what sign, what size, what form must the answer have — and which choice is the bait?**

- **Choices are data.** Run the four cheap filters in cost order — sign, ballpark, divisibility, form — before any real arithmetic. Most problems shrink to a two-way decision.
- **The spread picks your method.** Wide gaps → estimate once. Tight gaps → compute exactly. A choice spacing you didn't read is a method chosen blind.
- **Traps are engineered, not random.** Naive rule, half-finished, misread. A choice matching your intermediate work is a warning, not a confirmation — reread what was asked.

**What to do next.** Work the problem sets below; on every question, force yourself to read the five choices before touching the stem's numbers — the easy set should feel like filtering, not solving. This chapter closes the methods block: backsolving turned choices into test values, plugging-in turned variables into numbers, estimation bought you speed, and choice-reading now decides which tool each problem deserves. From here the track turns to content, starting with the arithmetic grammar in **Order of Operations & Signed Numbers** — bring the filters with you; they work on every chapter that follows.

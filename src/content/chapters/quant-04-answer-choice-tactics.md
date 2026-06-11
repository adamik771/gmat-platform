---
slug: quant-04-answer-choice-tactics
title: "Answer-Choice Tactics: Five Free Clues on Every Problem"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-03-estimation
summary: |
  The five choices are data, not a menu. This chapter turns them into a pre-computation checklist: sign, size, divisibility, and form filters that kill wrong answers on sight, plus the spread-reading skill that tells you whether to estimate or compute — and how to spot the engineered trap before it spots you.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely — attempting first sharpens what the reading lands on. As you work, notice whether you looked at the answer choices before you started computing, or only after.
    pretest_question_ids:
      - answer-choice-tactics-q1
      - answer-choice-tactics-q2
  - id: the-four-cheap-filters
    type: reading
    title: "The four cheap filters"
    check_question_ids:
      - answer-choice-tactics-q3
  - id: read-the-spread
    type: reading
    title: "Read the spread, choose the method"
    check_question_ids:
      - answer-choice-tactics-q4
  - id: traps-and-the-discipline
    type: reading
    title: "The engineered trap — and the discipline"
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
      - answer-choice-tactics-q10
  medium:
    target_accuracy_by_score:
      "605": 55
      "645": 70
      "685": 85
      "725": 95
    question_ids:
      - answer-choice-tactics-q11
      - answer-choice-tactics-q12
      - answer-choice-tactics-q13
      - answer-choice-tactics-q14
      - answer-choice-tactics-q15
      - answer-choice-tactics-q16
  hard:
    target_accuracy_by_score:
      "605": 40
      "645": 55
      "685": 70
      "725": 90
    question_ids:
      - answer-choice-tactics-q17
      - answer-choice-tactics-q18
      - answer-choice-tactics-q19
      - answer-choice-tactics-q20
---

## @the-four-cheap-filters

By the end of this chapter you will be able to:

- Run four elimination filters — sign, size, divisibility, form — on the choices before computing anything.
- Read the spacing of the choices to decide whether a problem wants an estimate or an exact computation.
- Recognize the engineered trap choice and name the skipped step it was built from.

The five answer choices are not a menu you consult after solving. They are **part of the problem** — five free data points the test-writer hands you before you compute a single thing. Read them first, every time. On a hard problem they tell you what kind of answer is even possible; on an easy one they tell you when you've already done too much work.

**Mental model.** Treat the choices as a **constraint set**. Each one you can rule out on sign, size, divisibility, or units is a choice you never have to test and a wrong turn your pencil never takes. The strongest test-takers narrow five to two before the real arithmetic starts, then spend effort only where it changes the answer.

Run the filters cheapest-first:

- **Sign.** Is the answer forced positive or negative? A rise, a drop, a net change, a difference of shrinking powers — these carry a sign you can predict in one second, and half the choices often carry the wrong one.
- **Ballpark size.** Is it "around 10" or "around 1,000"? Is it above or below the number you started with? One rough multiplication — the estimation skill from the previous chapter — usually settles it.
- **Divisibility and parity.** Ratio totals, counts of grouped items, sums of consecutive integers — these must be multiples of something, and most choices aren't.
- **Units and form.** Does the choice have the right dimensions — a rate vs. a total, miles per gallon vs. gallons per mile? A choice with impossible units is wrong no matter what the arithmetic says.

**Worked example.** If x² − 5x − 14 = 0 and x < 0, what is x? Choices: (A) −7 (B) −2 (C) 2 (D) 7 (E) 9. Do not factor blindly — **use the condition the stem handed you.** x < 0 eliminates (C), (D), (E) on inspection. Two candidates remain, so instead of solving the quadratic, **plug a choice in as a test value**: (−2)² − 5(−2) − 14 = 4 + 10 − 14 = 0. Answer (B). One substitution confirmed what factoring would have taken three lines to reach — and the constraint did three-fifths of the work for free.

**Worked example.** A jar holds red and blue marbles in the ratio 3:5, and the total is fewer than 36. Which could be the total? Choices: (A) 22 (B) 26 (C) 32 (D) 40 (E) 50. This is pure **divisibility filtering**: a 3:5 ratio forces the total to be a multiple of 3 + 5 = 8. Scan: 22 no, 26 no, 32 = 8 × 4 yes, 40 = 8 × 5 yes, 50 no. Two survive — so apply the second constraint the stem already gave you: "fewer than 36" kills 40 and leaves **(C) 32**. You never built the marble counts; you tested the choices for the two properties the answer must have. And note the pattern: when a filter leaves two survivors, the stem almost always contains the tiebreak.

> **Recall check.** Of the four filters, which do you run first, and why? (Sign — it costs one second and routinely eliminates two or three choices before any arithmetic.)

## @read-the-spread

The filters tell you which choices can survive. The **spacing between the choices** tells you something just as valuable: which method the problem wants. This is one glance, made before you touch the numbers, and it decides whether the next sixty seconds are spent estimating or computing.

| When the choices look like… | Do this |
|---|---|
| Spread far apart (12, 45, 90, 200, 500) | **Estimate.** One rough calculation lands in exactly one bucket. |
| Same digits, shifted decimals or signs (−2,530, −253, 253…) | Lock the **sign**, then **count zeros** — the digits are free. |
| Clustered tight (43, 46, 49, 51, 54) | **Don't trust rounding.** Find the distinguishing property — usually the units digit — or compute exactly. |
| One choice is the "naive" number (the simple average, an echo from the stem) | Suspect the **trap** — verify it requires the step a rushed solver skips. |
| Contains 0, or repeats a number from the stem | Treat it as **bait** — test it last, and only on its merits. |

**Worked example — spread.** (−0.62) × 4,080 is closest to: (A) −25,300 (B) −2,530 (C) −253 (D) 253 (E) 2,530. Same digits everywhere, so the digits are not the question. Sign: one negative factor, so the result is negative — (D) and (E) die. Zeros: about −0.6 × 4,000 = −2,400. Answer **(B)**, in under fifteen seconds, because the spread announced that only sign and decimal placement were being tested.

**Worked example — cluster.** 1,176 ÷ 24 = ? Choices: (A) 43 (B) 46 (C) 49 (D) 51 (E) 54. The choices sit shoulder to shoulder, so rounding cannot finish the job — but it can narrow: 24 × 50 = 1,200 overshoots 1,176, so the quotient is just under 50. That leaves (C) 49 against its neighbors. Now the distinguishing property: 24 × n must end in 6, and 4 × 9 = 36 does, while 4 × 1 = 4 and 4 × 6 = 24 do not. **(C) 49** — confirmed by 24 × 49 = 1,176. Estimate to narrow, exact property to finish.

**Micro-drill.** For each set of choices, name the method before solving anything — 20 seconds total: *(i)* 4, 40, 400, 4,000, 40,000. *(ii)* 81, 83, 84, 87, 89. *(iii)* −56, −14, 0, 14, 56. Answers: *(i)* count zeros — pure decimal placement. *(ii)* clustered — find the distinguishing digit or compute. *(iii)* the 0 and the sign-mirrored pairs say: lock the sign first, and treat 0 as bait that needs proof.

> **Recall check.** The choices are 0.24, 0.25, 0.27, 0.30 — can you round to "about a quarter" and pick? (No. The gaps are smaller than your rounding error; tight spacing is the test announcing that estimation will be punished. Find an exact distinguishing property instead.)

## @traps-and-the-discipline

Wrong choices on the GMAT are not random numbers. Each one is **reverse-engineered from a specific mistake** — and the most dangerous one, the engineered trap, is the exact answer to a simpler, wrong question. Knowing how it's built is what lets you see it.

**Worked example.** A car travels 240 miles out at 40 mph and returns the same 240 miles at 60 mph. What is the average speed for the whole trip? Choices: (A) 45 (B) 48 (C) 50 (D) 52 (E) 55. Before any work, **read the choices**: (C) 50 is the simple average of 40 and 60 — the trap, built from skipping the "more time is spent at the slower speed" step. The true answer must be pulled **below 50** toward the slower leg, which kills (C), (D), (E) at once. Now the real computation is a formality: total time = 240/40 + 240/60 = 6 + 4 = 10 hours, so 480/10 = **48**. Answer (B). The trap, once named, became an eliminator — it told you the answer's direction.

Three trap families cover most of what you'll see:

- **The wrong question's answer.** The discount instead of the sale price; the enrolled students instead of the unenrolled; one solution instead of the sum of both. Before computing, restate what the stem actually asks for — then predict whether that quantity is big or small relative to the numbers given.
- **The stem echo.** A number copied straight from the problem, sitting in the choices unprocessed. The test rarely hands back an input as the output; an echo earns suspicion, not trust.
- **The naive midpoint.** Two averages, two speeds, two prices — and their unweighted middle waiting in the choices. It is correct only when the two groups are perfectly balanced, and the stem almost always tells you they aren't. Better: the imbalance tells you which **side** of the midpoint the answer sits on, converting the trap into a direction filter.

**Trap to watch.** The filters themselves can be baited. In a "which could be the total" problem, one choice may pass your divisibility filter and still violate a plain-English bound from the stem ("more than 50"). Filters narrow; the stem's full set of constraints decides. When two choices survive a clever filter, reread the stem — the tiebreak is in there.

The discipline is one beat of overhead, applied before every computation: **what sign, what size, what form must the answer have — and which choice is the bait?** Most hard problems shrink to a two-way decision under those questions, and the two survivors are the only two worth your arithmetic. This is not a backup plan for when you're stuck; it is the first move of a trained solver, and it compounds across all 21 questions of the section.

> **Recall check.** You see two speeds, 30 and 50 mph over the same route, and the choice 40 on the page. What do you know before computing anything? (40 is the naive midpoint and almost certainly bait — and since more time is spent at the slower speed, the true average sits below 40, which usually eliminates three choices at once.)

> **Self-explanation prompt.** Why is the engineered trap so often the answer to a "simpler, wrong question"? (Because the test-writer starts from the solution path, deletes one necessary step — weighting, reversing a percent base, reading "not" — and computes what a solver who skips that step would get. The trap is a mirror of the mistake, which is why naming the skipped step both avoids and exploits it.)

## @summary

**Takeaway.** The choices are the cheapest information on the page, and they're available before you do any work. Filter them by sign, size, divisibility, and form; read their spacing to choose between estimating and computing; and treat the naive number among them as a signpost pointing away from itself.

The four-line recap:

- **Filter first.** Sign, then ballpark size, then divisibility, then units — cheapest first, and most problems lose two or three choices before the arithmetic starts.
- **Read the spread.** Wide gaps license estimation; same-digit choices isolate sign and zeros; tight clusters demand an exact distinguishing property, usually the units digit.
- **Name the trap.** The wrong question's answer, the stem echo, the naive midpoint — identify which mistake a choice was built from, and it flips from bait into a direction filter.
- **Use every constraint.** When a filter leaves two survivors, the stem's other condition is the tiebreak — the test-writer put it there on purpose.

**What to do next.** Run the graded problem sets above — every question in them is built so that a filter, not brute force, is the fastest path, and the explanations name the trap each wrong choice was made from. Then make the habit permanent: on every quant problem you do from now on, spend one beat on the choices before touching the stem's numbers. This closes the strategy sequence — backsolving, plugging in, estimation, and now the choices themselves. Next, **Order and Signed Numbers** starts the content chapters, where these tactics become the lens you carry into every topic.

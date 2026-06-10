---
slug: quant-04-answer-choice-tactics
title: "Answer-Choice Tactics: Make the Choices Do the Work"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-03-estimation
summary: |
  The five choices are data, not a menu. This chapter completes the method toolkit: run the four cheap filters (sign, size, divisibility, form) before computing, let the spread between choices pick your method, and learn to spot the engineered trap answer the test-writer built for the solver in a hurry.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely — attempting first sharpens what the reading lands on. As you work, notice whether you looked at the answer choices before you started computing, or only after.
    pretest_question_ids:
      - answer-choice-tactics-q1
      - answer-choice-tactics-q2
  - id: the-choices-are-data
    type: reading
    title: "The choices are data — run the cheap filters"
    check_question_ids:
      - answer-choice-tactics-q3
  - id: read-the-spread
    type: reading
    title: "Read the spread — let the gaps pick your method"
    check_question_ids:
      - answer-choice-tactics-q4
  - id: the-engineered-trap
    type: reading
    title: "Spot the engineered trap"
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
  medium:
    target_accuracy_by_score:
      "605": 55
      "645": 70
      "685": 85
      "725": 95
    question_ids:
      - answer-choice-tactics-q8
      - answer-choice-tactics-q9
  hard:
    target_accuracy_by_score:
      "605": 40
      "645": 55
      "685": 70
      "725": 90
    question_ids:
      - answer-choice-tactics-q10
      - answer-choice-tactics-q11
---

## @the-choices-are-data

The five answer choices are not a menu you consult after solving. They are **part of the problem** — five free data points the test-writer hands you before you compute a single thing. Read them first, every time. On a hard problem they tell you what kind of answer is even possible; on an easy one they tell you when you've already done too much work.

By the end of this chapter you'll have three reflexes: filtering choices on properties before computing, reading the gaps between choices to pick your method, and recognizing the trap answer before it recognizes you. Backsolving and plugging in told you *what to test*; this chapter tells you *what never needs testing at all*.

**Mental model.** Treat the choices as a **constraint set**. Each one you can rule out on sign, magnitude, divisibility, or form is a choice you never have to test and a wrong turn your pencil never takes. The strongest test-takers narrow five to two before the real arithmetic starts, then spend their effort only where it changes the answer.

Run the filters in order of cheapness:

1. **Sign.** Is the answer forced positive or negative? A difference, a net change, a slope, an odd power of a negative — these carry a sign you can predict in one glance.
2. **Ballpark magnitude.** Is it "around 10" or "around 1,000"? One rough multiplication usually settles it. This is the estimation skill from the previous chapter, aimed at the choices instead of the stem.
3. **Divisibility / parity.** Ratio totals, "how many integers" counts, and grouping questions often must be even, or a multiple of 5, or a multiple of the sum of the ratio parts.
4. **Units / form.** Does the choice have the right dimensions — a rate vs. a total, an area vs. a length, the new amount vs. the change?

**Worked example (sign filter plus one substitution).** If x² − 5x − 14 = 0 and x < 0, what is x? Choices: (A) −7 (B) −2 (C) 2 (D) 7 (E) 9. Do not factor blindly — **use the condition the problem handed you.** x < 0 eliminates (C), (D), (E) on inspection. Two choices remain, and instead of solving the quadratic you **plug in a choice as your test value**: (−2)² − 5(−2) − 14 = 4 + 10 − 14 = 0. Answer (B). One substitution confirmed what factoring would have taken three lines to reach — and dodged the classic sign-flip error on the roots.

**Worked example (divisibility filter).** A jar holds only red and blue marbles in the ratio 3 : 5, and the total is fewer than 36. Which could be the total? Choices: (A) 22 (B) 26 (C) 32 (D) 40 (E) 50. This is pure **divisibility filtering**. A 3 : 5 ratio forces the total to be a multiple of 3 + 5 = 8. Scan: 22 (no), 26 (no), 32 = 8 × 4 (yes), 40 = 8 × 5 (yes), 50 (no). Two survive, so apply the second constraint the stem already gave you: "fewer than 36" knocks out 40 and leaves **(C) 32**. You never computed the number of marbles of either color; you tested the choices for the two properties the answer must have.

**Micro-drill.** For each, name the filter and the choices it kills — 30 seconds total, no solving:

1. "The temperature fell from 8°C to −9°C; the change was…" Choices: −17, −1, 1, 8, 17 → ___
2. "Chairs to tables is 9 : 2; the total could be…" Choices: 18, 27, 33, 40, 49 → ___
3. "0.31 × 5,940 is closest to…" Choices: 18, 180, 1,800, 18,000, 180,000 → ___

Answers: (1) **Sign** — a fall is negative, killing 1, 8, 17; magnitude (8 + 9 = 17) finishes it: **−17**. (2) **Divisibility** — the total must be a multiple of 11; only **33** qualifies. (3) **Magnitude** — about a third of about 6,000 is about 2,000, so **1,800**; every other choice is off by a factor of 10 or more.

> **Recall check.** Of the four cheap filters, which do you run first and why? (Sign — it costs one glance and routinely deletes two or three choices before any arithmetic.)

## @read-the-spread

The filters tell you which choices are *impossible*. The **spread** — how far apart the surviving choices sit — tells you how much precision the problem actually demands. This is the single highest-leverage read on the page, because it picks your method before you commit to one.

| When the choices look like… | Do this |
|---|---|
| Spread far apart (e.g. 12, 45, 90, 200, 500) | **Estimate.** One rough calc lands you in exactly one bucket. |
| Clustered tight (e.g. 48, 49, 50, 51, 52) | **Compute exactly.** Rounding can't separate neighbors. |
| All share a factor or form (all even, all multiples of 5, all square roots) | Solve for the **distinguishing digit or sign**, not the whole value. |
| One is the "naive" number (a plain sum, an unweighted average, a simple product) | Suspect the **trap** — verify the answer requires the step the naive number skips. |
| Contains 0, 1, or "cannot be determined" | Test **edge cases** and hunt one counterexample first. |

**Worked example (the spread plus a direction read).** A car travels 240 miles out at 40 mph and returns the same 240 miles at 60 mph. What is the average speed for the whole trip? Choices: (A) 45 (B) 48 (C) 50 (D) 52 (E) 55. Before any formula, **read the choices.** The naive average is (40 + 60) / 2 = 50, sitting there as choice (C). But the trip spends *more time* at the slower speed, so the true average must be **pulled below 50** — which kills (C), (D), and (E) in one stroke of reasoning. Between (A) and (B), the arithmetic is now short: total distance 480, total time = 240/40 + 240/60 = 6 + 4 = 10 hours, so 480/10 = **48**. Answer (B). The direction read did most of the work; the computation only broke a two-way tie.

That "pulled toward the heavier side" instinct is the same one you'll use on every weighted average and mixture problem in the chapters ahead. Learn it here, where the numbers are small.

**Trap to watch.** The deadliest pacing error is treating tightly-clustered choices as if they were spread out. If the options are 0.24, 0.25, 0.27, 0.30, you **cannot** round to "about a quarter" and pick — the answer lives inside your rounding error. Read the gaps before you round: tight gaps are the test telling you it will punish estimation. The reverse error costs time instead of accuracy — grinding exact arithmetic when the choices sit an order of magnitude apart wastes a minute and invites a fresh sign slip.

> **Self-explanation prompt.** Why does a wide spread make estimation *safe* rather than merely convenient? (Because the gap between choices is larger than any reasonable rounding error — the neighborhood you compute can contain only one resident, so the estimate is as conclusive as exact arithmetic.)

## @the-engineered-trap

Wrong choices on the GMAT are not random numbers. Each one is **reverse-engineered from a specific mistake**: the right computation of the wrong quantity, the formula with one step skipped, the answer to a simpler question than the one asked. Once you know the traps are manufactured, you can read the choice list the way the test-writer wrote it — as a map of the mistakes they expect.

The three trap species worth naming:

- **The stopped-early trap.** You compute the discount, the increase, the part — and the question asked for the price paid, the new total, the whole. The intermediate value is always parked among the choices. Defense: re-read what the stem *names* before you select.
- **The naive-number trap.** The unweighted average, the "they cancel" answer on successive percent changes, the plain sum where a weighting was required. Defense: when a choice is the answer to an easier version of the question, ask what step makes the real question harder — that step is the problem.
- **The sign-or-flip trap.** The other root of the quadratic, the reciprocal of the ratio, the value of the wrong variable. Defense: the cheap filters from the first section, run one last time at the moment you select.

**Worked example (stopped-early trap).** Of 1,200 applicants to a program, 45% were rejected. How many were admitted? Choices: (A) 540 (B) 575 (C) 600 (D) 660 (E) 700. The honest computation is 0.45 × 1,200 = 540 — and there it sits as choice (A), the correct answer to the question that wasn't asked. The stem names the **admitted**, the 55%: 0.55 × 1,200 = **660**, choice (D). Notice the test-writer's craft: the trap is not a random number, it's your own correct intermediate result, which is exactly why it feels so safe to click.

**Worked example (naive-number trap).** A price is raised 20%, then the new price is cut 20%. The "back to the original" answer is always among the choices, and it is always wrong: 1.20 × 0.80 = 0.96, a 4% net decrease, because the cut applies to a **larger base** than the raise did. The choices were written assuming some solvers add and subtract percents as if the base never moved — be the solver they didn't plan for.

**The 5-second pre-select check.** Before you click, run the choice you've picked against the stem one final time: right sign, right size, the quantity actually asked for. This single habit converts a class of careless errors — the most preventable tag in your error log — into caught-in-time near-misses. It costs five seconds; a careless miss costs the point *and* the two minutes you spent earning it.

> **Recall check.** Why does the "obvious" choice matching a naive computation so often turn out wrong? (Because the test-writer builds the trap from the exact step a rushed solver skips — the trap is the correct answer to a simpler, wrong question.)

> **Self-explanation prompt.** A choice list contains the value 240 when the stem's numbers are 240 miles and 40 mph. What species of trap is a choice that merely echoes a number from the stem, and who is it built for? (A stopped-early relative — it's bait for the solver who, out of time, grabs a familiar-looking number; an echoed stem value is almost never the answer to a multi-step question.)

## @summary

**Takeaway.** The choices are the cheapest information on the screen. Filter first, read the spread to pick your method, and assume every wrong choice was built from a specific mistake — then refuse to make it.

The four-line recap:

- **Filter before you compute.** Sign, ballpark size, divisibility, form — in that order, cheapest first.
- **Read the gaps.** Wide spread licenses estimation; tight cluster demands exact work; a naive number demands suspicion.
- **Know the trap species.** Stopped-early, naive-number, sign-or-flip — each has a five-second defense.
- **Run the pre-select check.** Right sign, right size, right quantity — every time, before you click.

**What to do next.** Run the graded problem sets above — every question in them is built so the filters beat brute force, and the practice only counts once it's retrieval, not recognition. This chapter closes the method toolkit: backsolving tests the choices, plugging in replaces variables, estimation sizes the answer, and choice tactics decide where any of that effort is even needed. From here the track turns to content — **Order & Signed Numbers** is next — but bring the habit with you: on every Problem Solving question for the rest of your prep, your first move is a half-second read of the five numbers at the bottom of the screen.

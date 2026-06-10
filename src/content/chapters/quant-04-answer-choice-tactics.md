---
slug: quant-04-answer-choice-tactics
title: "Method: Answer-Choice Tactics"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-03-estimation
summary: |
  The five choices are data. This chapter teaches ballpark elimination, sign and unit checks, and spotting the engineered trap answer before you compute — the pre-computation checklist that turns five options into two.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two questions before the lesson. Don't worry about getting them right — attempting first makes the method land harder when you read it. Solve them however you like, then notice how much each one's answer choices were trying to tell you.
    pretest_question_ids:
      - answer-choice-tactics-q1
      - answer-choice-tactics-q2
  - id: the-four-filters
    type: reading
    title: "The four cheap filters"
    check_question_ids:
      - answer-choice-tactics-q3
  - id: read-the-spread
    type: reading
    title: "Read the spread — let the gaps pick your method"
    check_question_ids:
      - answer-choice-tactics-q4
  - id: spot-the-trap
    type: reading
    title: "Spot the engineered trap"
    check_question_ids:
      - answer-choice-tactics-q5
  - id: summary
    type: summary
    title: "Answer-choice tactics on one screen"
    check_question_ids: []
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
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - answer-choice-tactics-q8
      - answer-choice-tactics-q9
      - answer-choice-tactics-q10
---

## @the-four-filters

The five answer choices are not a menu you consult after solving. They are **part of the problem** — five free data points the test-writer hands you before you compute a single thing. Read them first, every time. On a hard problem they tell you what kind of answer is even possible; on an easy one they tell you you've already done too much work.

By the end of this chapter you'll be able to:

- **Run four cheap filters** — sign, size, divisibility, form — that kill choices before any real arithmetic.
- **Read the spread** between choices to decide whether to estimate, compute, or backsolve.
- **Name the trap** — the planted choice built from the step a rushed solver skips.

**Mental model.** Treat the choices as a **constraint set**. Each one you can rule out on sign, magnitude, parity, or units is a choice you never have to test and a wrong turn your pencil never takes. The strongest test-takers narrow five to two before the real arithmetic starts, then spend their effort only where it changes the answer.

Start with the cheapest filters, in this order:

- **Sign.** Is the answer forced positive or negative? A difference, a net change, a slope — these carry a sign you can often predict.
- **Ballpark magnitude.** Is it "around 10" or "around 1000"? One rough multiplication usually settles it.
- **Parity / divisibility.** Counting and "how many integers" questions often must be even, divisible by 5, or a multiple of the group size.
- **Units / form.** Does the choice have the right dimensions — a rate vs. a total, an area vs. a length?

**Worked example.** If x² − 5x − 14 = 0 and x < 0, what is x? Choices: (A) −7 (B) −2 (C) 2 (D) 7 (E) 9. Do not factor blindly — **use the sign condition the problem handed you.** x < 0 eliminates (C), (D), (E) on inspection. Two choices remain, and instead of solving the quadratic you **plug in a choice as your test value**: (−2)² − 5(−2) − 14 = 4 + 10 − 14 = 0. Answer (B). One substitution confirmed what factoring would have taken three lines to reach.

**Worked example.** A jar holds only red and blue marbles in the ratio 3:5, and the total is fewer than 36. Which could be the total number of marbles? Choices: (A) 22 (B) 26 (C) 32 (D) 40 (E) 50. This is pure **divisibility filtering**. A 3:5 ratio forces the total to be a multiple of 3+5 = 8. Scan: 22 (no), 26 (no), 32 = 8·4 (**yes**), 40 = 8·5 (yes), 50 (no). Two survive the divisibility cut — (C) and (D) — so apply the second constraint the stem already gave you: "fewer than 36" knocks out (D) 40 and leaves **(C) 32**. Answer (C). You never multiplied out the ratio; you tested the choices for the two properties the answer must have.

**Micro-drill.** Name the filter — don't solve. Under 20 seconds total:

1. "The change in temperature from 8 degrees to −5 degrees" — which choices die instantly? → ___
2. "A team of n people splits into pairs with nobody left over" — what must n be? → ___
3. "The perimeter of a square with side 9" — what form check kills choices like 81? → ___

Answers: (1) **Sign** — the change is a drop, so every positive choice dies. (2) **Parity** — n must be even. (3) **Form/units** — 81 is the area; a perimeter built from four 9s must be 36, and any choice that's an area-sized number is bait.

> **Recall check.** Of the four cheap filters, which comes first and why? (Sign — it's the single fastest cut and often eliminates two or three choices for free.)

## @read-the-spread

Now use the **spread of the choices** to decide your method. This is the move that separates an estimate from a full computation:

| When the choices look like… | Do this |
|---|---|
| Spread far apart (e.g. 12, 45, 90, 200, 500) | **Estimate.** One rough calc lands you in exactly one bucket. |
| Clustered tight (e.g. 48, 49, 50, 51, 52) | **Compute exactly.** Rounding can't separate neighbors. |
| All share a factor or form (all even, all /5, all sqrt-of) | Solve for the **distinguishing digit or sign**, not the whole value. |
| One is the "naive" number (a sum, an average, a simple product) | Suspect the **trap** — verify it requires the skipped step. |
| Contains 0, 1, or "cannot be determined" | Test **edge cases** and a single counterexample first. |

This is the same gap-reading you learned in the Estimation chapter, generalized into a method selector: the gaps don't just say whether estimation is legal, they tell you **which tool the question was built for.** Factor-of-ten gaps are an order-of-magnitude question wearing a computation costume. Tight clusters are a precision question — often one where only the last digit or two actually differ, so compute just those.

**Trap to watch.** The deadliest error is treating tightly-clustered choices as if they were spread out. If the options are 0.24, 0.25, 0.27, 0.30, you **cannot** round to "about a quarter" and pick — you've thrown away the precision the spread is demanding. Read the gaps: tight gaps are the test telling you it will punish estimation. Conversely, grinding out exact arithmetic when the choices sit an order of magnitude apart is wasted time and a fresh chance for a sign slip.

> **Recall check.** Choices of 0.4, 4, 40, 400, 4,000 versus choices of 48, 49, 50, 51, 52 — what method does each spread demand? (The first is order-of-magnitude estimation — one rough calc, one bucket; the second is exact computation, because rounding error spans the whole list.)

## @spot-the-trap

Every well-built quant problem has one wrong answer that isn't random: the **engineered trap**, computed from the exact step a rushed solver skips. Finding it before you solve is a weapon — it tells you where the question expects you to go wrong, which is usually the heart of what it's testing.

**Worked example.** A car travels 240 miles out at 40 mph and returns the same 240 miles at 60 mph. What is the average speed for the whole trip? Choices: (A) 45 (B) 48 (C) 50 (D) 52 (E) 55. Before any harmonic-mean work, **read the spread.** The naive average is (40+60)/2 = 50, which is choice (C) — the **engineered trap**, built from skipping the "more time is spent at the slower speed" step. The true answer must be **pulled below 50** toward the slower leg, which instantly kills (C), (D), (E). Now you're choosing between (A) and (B), and you barely need to compute: total distance 480, time = 240/40 + 240/60 = 6 + 4 = 10 hours, so 480/10 = **48**. Answer (B). The choices flagged the trap and cut your real work in half.

The trap catalogue is short and worth memorizing:

- **The naive number** — the simple average, the straight sum of percents, the result of treating "twice as much" as "200% more."
- **The intermediate value** — the width when the question asks the perimeter, the discount when it asks the price paid. Stopping one step early lands exactly on a planted choice.
- **The sign flip** — the right magnitude with the wrong sign, waiting for anyone who lost a negative.
- **The adjacent question** — the answer to "x" when the stem asked for "x + 3," or to "what is the final price" when it asked "what is the increase."

When you spot a probable trap, don't just avoid it — **use it.** The trap encodes the skipped step, and the true answer usually sits on a predictable side of it (below the naive average toward the slower speed; above the intermediate value once the remaining steps run). That direction is one more free elimination.

> **Self-explanation prompt.** Why does the "obvious" choice matching a naive average so often turn out wrong? (Because the test-writer builds the trap from the exact step a rushed solver skips — the trap is the answer to a simpler, wrong question.)

## @summary

The choices are data. Here is the discipline on one screen.

| Step | What you do |
|---|---|
| 1. Filter | Run sign, size, divisibility, and form against all five choices — before computing. |
| 2. Read the spread | Wide gaps: estimate. Tight cluster: compute exactly (often just the last digits). Sorted values: consider backsolving. |
| 3. Name the trap | Find the naive number or intermediate value among the choices; the true answer sits on a predictable side of it. |
| 4. Compute the residue | Whatever survives the filters is the only place your arithmetic budget goes — usually a two-way decision. |

**Takeaway.** The discipline is one beat of overhead and it compounds. Before you compute, ask: **what sign, what size, what form must the answer have — and which choice is the bait?** Most hard problems shrink to a two-way decision, and the two you keep are the only two worth your arithmetic.

**What to do next.** Run the two graded problem sets below. The easy set drills the sign and form filters; the medium set forces the spread decision in both directions — one problem where rounding is the whole method and one where it's fatal — and ends on a compound trap. On every question, spend your first ten seconds on the choices, not the stem's numbers. This chapter closes the method sequence: with backsolving, plugging in, estimation, and choice-reading in hand, the topic chapters that follow are about *what* to compute — these four decided *how*.

---
slug: quant-04-answer-choice-tactics
title: "Method: Answer-Choice Tactics — Read the Five Before You Solve"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-03-estimation
summary: |
  The five choices are data, not a menu you consult after solving. This chapter turns them into your first move: eliminate on sign, size, parity, and form; spot the engineered trap before you compute; and let the spread of the choices pick your method.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Before the lesson, pull up any "what is the value of…" Problem Solving question and do one thing differently: read all five answer choices *first*, before touching the stem's math. Notice whether any of them are obviously too big, the wrong sign, or suspiciously "clean." Hold that read in mind — this chapter turns that glance into a method.
  - id: choices-are-data
    type: reading
    title: "The choices are part of the problem"
    check_question_ids: []
  - id: cheap-filters
    type: reading
    title: "The four cheap filters — sign, size, parity, form"
    check_question_ids: []
  - id: spot-the-trap
    type: reading
    title: "Spot the engineered trap"
    check_question_ids: []
  - id: method-by-spread
    type: reading
    title: "Let the spread pick your method"
    check_question_ids: []
  - id: summary
    type: summary
    title: "Lock it in"
    check_question_ids: []
problem_sets:
---

## @choices-are-data

Most test-takers treat the five answer choices as a menu — something to consult only after the algebra is done. That instinct quietly leaks points. The choices are not a menu. They are **five free data points the test-writer hands you before you compute a single thing**, and the test has certified that exactly one of them is correct. Read them first, every time. On a hard problem they tell you what kind of answer is even possible; on an easy one they tell you you have already done too much work.

**Mental model.** Treat the five choices as a **constraint set**. Each one you can rule out — on sign, on size, on parity, on form — is a choice you never have to test and a wrong turn your pencil never takes. Strong test-takers narrow five to two *before* the real arithmetic starts, then spend their effort only on the decision that actually separates the survivors. You are not solving into a void; you are auditing five named suspects, and most of them have an alibi you can check in seconds.

By the end of this chapter you will be able to:

- Eliminate two or three choices with filters that cost almost no time.
- Recognize the "bait" answer the test-writer built from the step a rushed solver skips.
- Read the **spread** of the choices to decide whether to estimate or compute — before you commit to a method.

Three short moves, in order. The rest of the chapter is just those three moves, slowed down.

## @cheap-filters

Before any real computation, run the choices through four filters, cheapest first. The moment a choice fails one, cross it out and never look back.

- **Sign.** Is the answer forced positive or negative? Differences, net changes, and slopes carry a sign you can often predict from the setup alone.
- **Size.** Is it "around 10" or "around 1,000"? One rough multiplication usually settles the order of magnitude.
- **Parity / divisibility.** "How many" and counting answers often *must* be even, a multiple of 5, or a multiple of the group size.
- **Form / units.** Does the choice have the right shape — a rate where a rate belongs, an area where you expect square units, an integer where only integers are legal?

**Worked example.** *A company's profit fell from one quarter to the next. If the change in profit was C, which of the following could be C?* Choices: (A) 4,200 (B) 1,500 (C) 0 (D) −1,500 (E) −4,200. You do not need a single number from the problem. "Fell" forces the change to be **negative**, so sign alone kills (A), (B), and (C) instantly. Three choices gone, zero arithmetic spent. Whatever computation remains now decides only between (D) and (E).

**Worked example.** *A jar holds only red and blue marbles in a 3:5 ratio, and the total is fewer than 36. Which could be the total number of marbles?* Choices: (A) 22 (B) 26 (C) 32 (D) 40 (E) 50. This is pure **divisibility filtering**. A 3:5 ratio forces the total to be a multiple of 3 + 5 = 8. Scan the list: 22 (no), 26 (no), 32 = 8 × 4 (**yes**), 40 = 8 × 5 (yes), 50 (no). Two survive — (C) and (D) — so apply the second constraint the stem already gave you: "fewer than 36" knocks out (D). Answer **(C)**. You never multiplied the ratio out; you tested the choices for the two properties the answer was required to have.

**Worked example.** *If x² − 5x − 14 = 0 and x < 0, what is x?* Choices: (A) −7 (B) −2 (C) 2 (D) 7 (E) 9. Do not factor on autopilot — **use the condition the problem handed you.** "x < 0" eliminates (C), (D), and (E) on sight. Two choices remain, and rather than solving the quadratic you plug a survivor in as a test value: (−2)² − 5(−2) − 14 = 4 + 10 − 14 = 0. Answer **(B)**. One substitution confirmed what factoring would have taken three lines to reach.

**Micro-drill.** For each, name the single cheapest filter that cracks it — don't solve:

1. "By what percent did the population *decrease*?" Choices include 0, −12, 18, 25, 140.
2. "How many ways can 5 friends sit in a row?" Choices include 25, 60, 110, 120, 121.
3. "What is the area, in square cm, of …?" One choice is given in plain cm.

Answers: (1) **Sign + range** — a percent decrease is positive and at most 100, so 0, −12, and 140 are all impossible. (2) **Form** — a count of arrangements must be a whole number that is a product of the seats, so it is divisible by 5; only 25, 60, and 120 even qualify, and 5! = 120 is the lone "5×4×3×2×1" candidate. (3) **Units** — an area cannot be reported in plain cm; that choice is bait for students who forget to square. If any of these took real computation, you reached past the cheap filter for an expensive one.

**Trap to watch.** Filters eliminate; they rarely *select*. When two or three choices survive every cheap cut, that is the signal to start computing — not to guess between them. The filters exist to shrink the field so your arithmetic lands on the one decision that matters, and to keep your pencil off the three roads that go nowhere.

## @spot-the-trap

The test-writer does not scatter the wrong answers at random. The most tempting wrong choice is usually **engineered** — built to be exactly the number a rushed solver produces by skipping one step. Learn to recognize the bait, and a hard problem often collapses to a two-way decision.

**Worked example.** *A car travels 240 miles out at 40 mph and returns the same 240 miles at 60 mph. What is the average speed for the whole trip?* Choices: (A) 45 (B) 48 (C) 50 (D) 52 (E) 55. Before any harmonic-mean work, read the spread and find the bait. The naive average is (40 + 60) / 2 = 50 — choice (C), the **engineered trap**, built from skipping the fact that more time is spent at the slower speed. The true average must be pulled *below* 50 toward the slow leg, which instantly kills (C), (D), and (E). Now it is (A) versus (B), and you barely compute: total distance 480, time = 240/40 + 240/60 = 6 + 4 = 10 hours, so 480 / 10 = **48**. Answer **(B)**. The trap flagged itself and cut your real work in half.

**Worked example.** *A $200 jacket is marked up 20%, then that price is discounted 20%. What is the final price?* Choices: (A) 192 (B) 196 (C) 200 (D) 204 (E) 208. The bait is (C) $200 — "up 20% then down 20%, they cancel." They never cancel: the discount applies to a *larger* base than the markup did. So the final price must land *below* the original, killing (C), (D), and (E) before you compute. One line confirms: 200 × 1.2 × 0.8 = 200 × 0.96 = **192**. Answer **(A)**. Knowing the trap pointed you to the correct *side* of the list, and the survivors barely needed checking.

**Trap to watch.** The deadliest version of this is the "clean" number. When one choice is a suspiciously round value — a tidy sum, a simple average, an unchanged total — treat it as a suspect, not a default. Ask: *what step would I have to skip to land exactly there?* If the answer is "the step the problem is actually testing," that choice is the bait, and the real answer lives on the other side of it.

> **Recall check.** A markup of p% followed by a discount of p% leaves the price above, below, or equal to the original? (Below — the equal-amount discount is taken on a larger base, so the percentages do not cancel; the net is always a small loss.)

## @method-by-spread

The same glance that finds the trap also tells you *how* to solve. The **gaps between the choices** decide whether estimation is legal or whether you must compute exactly. This is the move that separates a quick, confident solve from a slow, error-prone one.

| When the choices look like… | Do this |
|---|---|
| Spread far apart (12, 45, 90, 200, 500) | **Estimate.** One rough calc drops you into exactly one bucket. |
| Clustered tight (48, 49, 50, 51, 52) | **Compute exactly.** Rounding cannot separate neighbors. |
| All share a factor or form (all even, all ÷5, all √) | Solve for the **distinguishing digit or sign**, not the whole value. |
| One is the "naive" number (a sum, an average, a clean total) | Suspect the **trap** — verify it needs the skipped step. |
| Includes 0, 1, or "cannot be determined" | Test **edge cases** and hunt one counterexample first. |

**Worked example.** *Approximately what is 38% of 712?* Choices: (A) 95 (B) 180 (C) 270 (D) 410 (E) 530. The choices are spread by hundreds, so estimate and stop. 38% is "a bit under 40%," and 40% of 712 is about 285, so the true value sits just under that. Only (C) 270 lives in that neighborhood. Answer **(C)** — no exact multiplication, because the spread guaranteed exactly one resident.

**Trap to watch.** The reverse error is just as costly: estimating when the choices are tight. If the options were 268, 270, 272, 274, your "about 270" is useless — the answer hides inside your rounding error. Read the gaps *before* you round. Tight gaps are the test telling you it will punish estimation; wide gaps are it telling you exact arithmetic is wasted time and a fresh chance to drop a sign. Match the method to the spread, and the choices will have done half the problem for you.

> **Self-explanation prompt.** In one sentence, explain why the spacing of the answer choices changes your method. If you can say "wide spacing means an estimate lands in one bucket, while tight spacing demands exact arithmetic because rounding error exceeds the gaps," you own the move.

## @summary

You came in treating the five choices as scenery you check at the end. You leave knowing they are five certified suspects — one guilty, four with alibis you can verify in seconds — and that auditing them first is faster and safer than computing blind.

**Takeaway.** Answer-choice tactics are one beat of overhead that compounds on every Problem Solving question. Run the cheap filters to shrink five to two, name the engineered trap so you solve toward the correct side, and read the spread to pick estimate-or-compute *before* you commit. Most hard problems shrink to a single real decision, and the two choices you keep are the only two worth your arithmetic.

The loop, every time:

1. **Read the five first.** Sign, size, parity, form — cross out everything that cannot be the answer.
2. **Find the bait.** Spot the "clean" number built from the skipped step; let it tell you which side the real answer is on.
3. **Match method to spread.** Wide gaps → estimate. Tight gaps → compute. Then spend arithmetic only on the survivors.

**What to do next.** This is the capstone of the four-method toolkit — backsolving, plugging in, estimation, and now reading the choices themselves. Together they change how you approach every Problem Solving question before you write a single equation. Use the buttons below to drill the habit under time pressure in a Quant practice set, then carry it into the content chapters that follow: every one of them is a chance to read the five before you solve.

> **Self-explanation prompt.** Tell a friend in one sentence why reading the answer choices first makes you faster, not slower. If you can say "because the choices are free constraints that eliminate wrong work before I start it," the method is yours.

---
slug: quant-04-answer-choice-tactics
title: "Method: Answer-Choice Tactics — Filter Before You Compute"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-03-estimation
summary: |
  The five choices are data. This chapter teaches the four cheap filters — sign, size, divisibility, form — plus how to spot the engineered trap answer and let the spread of the choices pick your method.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Before the lesson, open any Problem Solving question and spend ten seconds reading only the answer choices. Ask what they have in common — sign, size, form — and which one looks like the "obvious" answer. The chapter turns that ten-second read into a scoring system.
  - id: choices-are-data
    type: reading
    title: "The choices are data"
    check_question_ids: []
  - id: four-filters
    type: reading
    title: "The four cheap filters"
    check_question_ids: []
  - id: trap-radar
    type: reading
    title: "The trap radar"
    check_question_ids: []
  - id: read-the-spread
    type: reading
    title: "Read the spread, choose your method"
    check_question_ids: []
  - id: summary
    type: summary
    title: "Lock it in"
    check_question_ids: []
problem_sets:
---

## @choices-are-data

The five answer choices are not a menu you consult after solving. They are **part of the problem** — five free data points the test-writer hands you before you compute a single thing. Read them first, every time. On a hard problem they tell you what kind of answer is even possible; on an easy one they tell you you've already done too much work.

This chapter is the capstone of the method block. Backsolving treated the choices as candidate answers; estimation used their spread to license rounding. Here the choice set itself becomes the method: every property the five answers share — and every property exactly one of them lacks — is information you can spend.

**By the end of this chapter you will be able to:**

- Run the four cheap filters — sign, size, divisibility, form — before any computation.
- Spot the engineered trap choice and use it as a signpost instead of stepping on it.
- Let the spread of the choices decide between estimating and computing exactly.
- Shrink a five-way decision to a two-way decision on most hard problems.

**Mental model.** Treat the choices as a **constraint set**. Each one you can rule out on sign, magnitude, parity, or units is a choice you never have to test and a wrong turn your pencil never takes. The strongest test-takers narrow five to two before the real arithmetic starts, then spend their effort only where it changes the answer.

**Speed tip.** Scan the choices as a column, top to bottom, before working the stem's numbers. One vertical glance gives you sign, spread, and form — three filters armed in about three seconds.

## @four-filters

Run the filters in order from cheapest to priciest. Most problems fall to the first two.

- **Sign.** Is the answer forced positive or negative? A difference, a net change, a slope — these carry a sign you can often predict from the story alone.
- **Ballpark magnitude.** Is it "around 10" or "around 1000"? One rough multiplication usually settles it — this is last chapter's estimation working as a filter.
- **Parity / divisibility.** Counting questions and ratio totals often must be even, divisible by 5, or a multiple of the group size.
- **Units / form.** Does the choice have the right dimensions — a rate vs. a total, an area vs. a length, a percent vs. a count?

**Worked example.** *(Sign filter.)* If `x² − 5x − 14 = 0` and `x < 0`, what is x? Choices: (A) −7 (B) −2 (C) 2 (D) 7 (E) 9. Do not factor blindly — **use the sign condition the problem handed you.** `x < 0` eliminates (C), (D), (E) on inspection. Two choices remain, and instead of solving the quadratic you plug a survivor in as a test value: `(−2)² − 5(−2) − 14 = 4 + 10 − 14 = 0`. Answer **(B)**. One substitution confirmed what factoring would have taken three lines to reach.

**Worked example.** *(Divisibility filter.)* A jar holds only red and blue marbles in the ratio 3:5, and the total is fewer than 36. Which could be the total number of marbles? Choices: (A) 22 (B) 26 (C) 32 (D) 40 (E) 50. This is pure divisibility filtering: a 3:5 ratio forces the total to be a multiple of `3 + 5 = 8`. Scan: 22 no, 26 no, 32 = 8 × 4 **yes**, 40 = 8 × 5 yes, 50 no. Two survive the divisibility cut, so apply the second constraint the stem already gave you: "fewer than 36" knocks out 40 and leaves **(C) 32**. You never multiplied out the ratio; you tested the choices for the two properties the answer must have.

**Worked example.** *(Magnitude brackets.)* A tank filled to 3/8 of capacity holds 240 gallons. How many gallons is 5/8 of capacity? Choices: (A) 90 (B) 150 (C) 400 (D) 640 (E) 1,067. Bracket before computing: 5/8 is more than 3/8, so the answer must exceed 240 — (A) and (B) die on inspection. One short step gives the rest: `240 ÷ 3 = 80` gallons per eighth, so 5/8 is `5 × 80 = 400` — answer **(C)**. The remaining wrong choices are diagnoses, not noise: (D) 640 is the *full* capacity, the stop-too-early bait for students who solve for the whole tank and bubble it, and (E) overshoots the tank entirely — a fraction flipped somewhere. The brackets caught both without a second calculation.

**Micro-drill.** One filter each — under 60 seconds total:

1. The temperature falls from −3° to −11°. The change in temperature is +8 or −8? → ___
2. Six identical shirts cost a whole-dollar price each. Which total is impossible: 84, 90, 96, 100, 102? → ___
3. 19.8% of 2,512 is closest to: 50, 250, 500, 1,000, 1,250? → ___

Answers: (1) **−8** — change is final minus initial, and a fall is negative by definition; sign needs no arithmetic. (2) **100** — the total must be a multiple of 6, and 84, 90, 96, 102 all are (14, 15, 16, 17 shirts-worth) while 100 is not. (3) **500** — snap to 20% of 2,500; exact is 497.4, same resident of the neighborhood.

> **Recall check.** Of the four cheap filters, which runs first and why? (Sign — it's read straight off the story, costs zero arithmetic, and routinely deletes two or three choices before you've touched a number.)

## @trap-radar

On every well-written hard problem, at least one wrong choice was *engineered* — built from the exact step a rushed solver skips. Finding it is not a danger; it's a gift. The bait tells you precisely which step the test expects you to forget.

**Worked example.** *(The engineered trap.)* A car travels 240 miles out at 40 mph and returns the same 240 miles at 60 mph. What is the average speed for the whole trip? Choices: (A) 45 (B) 48 (C) 50 (D) 52 (E) 55. Before any harmonic-mean work, **read the spread.** The naive average is `(40 + 60)/2 = 50` — choice (C), the engineered trap, built from skipping the "more time is spent at the slower speed" step. The true answer must be **pulled below 50** toward the slower leg, which instantly kills (C), (D), and (E). Now you're choosing between (A) and (B), and you barely need to compute: total distance 480, time `= 240/40 + 240/60 = 6 + 4 = 10` hours, so `480/10 = 48`. Answer **(B)**. The choices flagged the trap and cut your real work in half.

**Worked example.** *(Direction before digits.)* A stock falls 25% in January and rises 25% in February. Its net change over the two months is closest to: (A) −12.5% (B) −6.25% (C) 0% (D) +6.25% (E) +12.5%. The bait is (C) — down 25, up 25, "they cancel." They don't, and direction alone kills three choices: the rise acts on a *smaller* base than the fall did, so the net must be negative — (C), (D), (E) gone before any arithmetic. Now compute on 100: down to 75, then up 25% of 75 is 18.75, landing at 93.75 — a **6.25% net loss**. Answer **(B)**.

The radar pattern: the trap is usually the **one-step answer** — a naive average, a raw sum, the number the stem mentions most loudly. When you spot a choice you could have produced in five seconds, don't relax — ask *which step would I have to skip to land there?* Then make sure your path includes that step.

> **Self-explanation prompt.** Why does the "obvious" choice matching a naive calculation so often turn out wrong? (Because the test-writer builds the trap from the exact step a rushed solver skips — the trap is the correct answer to a simpler, wrong question. Its presence is evidence the skipped step matters.)

## @read-the-spread

The last read is the spread — it picks your method for you.

| When the choices look like… | Do this |
|---|---|
| Spread far apart (e.g. 12, 45, 90, 200, 500) | **Estimate.** One rough calc lands you in exactly one bucket. |
| Clustered tight (e.g. 48, 49, 50, 51, 52) | **Compute exactly.** Rounding can't separate neighbors. |
| All share a factor or form (all even, all /5, all sqrt-of) | Solve for the **distinguishing digit or sign**, not the whole value. |
| One is the "naive" number (a sum, an average, a simple product) | Suspect the **trap** — verify it requires the skipped step. |
| Contains 0, 1, or "cannot be determined" | Test **edge cases** and a single counterexample first. |

**Trap to watch.** The deadliest error is treating tightly-clustered choices as if they were spread out. If the options are 0.24, 0.25, 0.27, 0.30, you **cannot** round to "about a quarter" and pick — you've thrown away the precision the cluster is demanding. Read the gaps: tight gaps are the test telling you it will punish estimation. Conversely, grinding out exact arithmetic when the choices sit an order of magnitude apart is wasted time and a fresh chance for a sign slip.

**Trap to watch.** Filters only fire on properties the stem *forces*. "The total is a multiple of 8" followed from the 3:5 ratio — it was derived, not assumed. If you catch yourself eliminating a choice because it "looks too ugly" or "feels too big," that is not a filter; that is a guess wearing a filter's clothes. Every elimination should be able to finish the sentence: "impossible, because the stem says…"

## @summary

You came in reading the choices last, as a place to bubble. You leave reading them first, as the problem's free data — and on most hard questions, that read alone retires half the field.

**Takeaway.** Before you compute, ask three questions of the choice set: what **sign**, what **size**, what **form** must the answer have — and which choice is the **bait**? Most hard problems shrink to a two-way decision, and the two you keep are the only two worth your arithmetic.

The loop, every time:

1. **Vertical scan.** Read the choices as a column: sign, spread, form, in one glance.
2. **Run the filters in order.** Sign → ballpark → divisibility → form. Cut everything the stem's constraints forbid.
3. **Name the bait.** Find the one-step answer and identify the step it skips.
4. **Let the spread pick the method.** Wide gaps → estimate; tight cluster → compute; shared form → solve for the distinguishing digit.

**What to do next.** This closes the method block — backsolving, plugging in, estimation, and choice tactics are the four lenses you'll carry through every remaining chapter. Run a Quant practice set and apply the vertical scan on every single problem, including ones you could solve directly; the habit must be automatic before the content chapters start stacking on top. Then begin **Arithmetic: Order of Operations & Signed Numbers**, where the track turns from how you attack problems to the raw mechanics underneath them.

> **Recall check.** Name the four cheap filters in firing order, and the question each one asks. (Sign — what direction must the answer carry? Ballpark — what size? Divisibility — what factor structure does the stem force? Form — what kind of quantity is being asked for?)

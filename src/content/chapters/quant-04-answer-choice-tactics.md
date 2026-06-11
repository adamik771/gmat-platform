---
slug: quant-04-answer-choice-tactics
title: "Answer-Choice Tactics: The Five Choices Are Data"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-03-estimation
summary: |
  The five choices are part of the problem — five free data points the writer hands you before you compute. This chapter builds the three reflexes: filter choices by sign, size, parity, and form; let the spread pick your method; and spot the engineered trap before it spots you.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely — attempting first sharpens what the reading lands on. As you work, notice how much the answer choices themselves told you before you computed anything.
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
    title: "The spread picks your method"
    check_question_ids:
      - answer-choice-tactics-q4
  - id: the-engineered-trap
    type: reading
    title: "Find the engineered trap"
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

## @the-four-filters

By the end of this chapter you will be able to:

- Run four property filters — sign, size, parity, form — across the choices before computing, and routinely cut five options to two.
- Read the gaps between choices to decide, in one glance, whether a problem wants an estimate, an exact computation, or a single distinguishing digit.
- Name the trap choice on sight: the answer to a simpler, wrong question, built from the exact step a rushed solver skips.

The five answer choices are not a menu you consult after solving. They are **part of the problem** — five free data points the test-writer hands you before you compute a single thing. Read them first, every time. On a hard problem they tell you what kind of answer is even possible; on an easy one they tell you when you've already done too much work.

**Mental model.** Treat the choices as a **constraint set**. The correct answer must have certain properties — a forced sign, a rough size, a parity, a form — and every choice that fails a property is a candidate you never have to test and a wrong turn your pencil never takes. The strongest test-takers narrow five to two before the real arithmetic starts, then spend their effort only where it changes the answer.

Run the filters in order of cost, cheapest first:

1. **Sign.** Is the answer forced positive or negative? A difference, a net change, a square, a distance — these carry a sign you can often predict from the stem alone. One second per choice.
2. **Ballpark size.** Is it "around 10" or "around 1,000"? One rough multiplication usually settles it. You built this reflex in the Estimation chapter — here it becomes a filter you aim at the choices.
3. **Parity / divisibility.** Counting questions, ratio totals, and "could be the value" stems often force the answer to be even, odd, a multiple of 3, or a multiple of the group size.
4. **Form.** Does the choice have the right shape — a rate vs. a total, a percent vs. an amount, an exact radical vs. a decimal? Choices in the wrong currency are free eliminations.

**Worked example (the sign filter plus one substitution).** If x² − 5x − 14 = 0 and x < 0, what is x? Choices: (A) −7 (B) −2 (C) 2 (D) 7 (E) 9. Do not factor blindly — **use the sign condition the problem handed you.** x < 0 eliminates (C), (D), (E) on inspection. Two choices remain, and instead of solving the quadratic you **plug a choice in as your test value**: (−2)² − 5(−2) − 14 = 4 + 10 − 14 = 0. Answer (B). One substitution confirmed what factoring would have taken three lines to reach — and the sign filter is what made a single substitution enough.

**Worked example (the divisibility filter, twice).** A jar holds only red and blue marbles in the ratio 3 : 5, and the total is fewer than 36. Which could be the total number of marbles? Choices: (A) 22 (B) 26 (C) 32 (D) 40 (E) 50. A 3 : 5 ratio forces the total to be a multiple of 3 + 5 = 8 — the parts scale together, so the whole comes in blocks of 8. Scan: 22 no, 26 no, 32 = 8 × 4 yes, 40 = 8 × 5 yes, 50 no. Two survive, so apply the second constraint the stem already gave you: "fewer than 36" knocks out 40 and leaves **(C) 32**. You never multiplied out the ratio; you tested the choices for the two properties the answer must have.

Notice what both examples share: the stem *states* a constraint — a sign condition, a ceiling — and that constraint is aimed at the choices, not at your scratch work. Conditions in the stem are elimination tools first and algebra inputs second.

**Micro-drill.** One filter call each, 30 seconds total: *(i)* x < 0 < y — what is the sign of x²y? *(ii)* A mix of two ingredients in ratio 4 : 5 totals T — what must divide T? *(iii)* n is an integer and 3n is even — must n be even? Answers: *(i)* positive — x² is positive regardless of x's sign. *(ii)* 9 — the sum of the parts. *(iii)* yes — 3 is odd, so the evenness has to come from n. If any of these took more than ten seconds, rerun the filter list until each property is a reflex, not a derivation.

> **Recall check.** Of the four filters, why does sign go first? (It's the cheapest test there is — one glance per choice — and a predictable sign often kills two or three choices for free before any arithmetic.)

> **Self-explanation prompt.** Why does a 3 : 5 ratio force the total to be a multiple of 8 rather than a multiple of 3 or of 5 separately? If you can say "because both parts scale by the same whole number k, so the total is always 8k," you've understood why the filter tests the sum of the parts — the single most-missed point on ratio-total questions.

## @read-the-spread

The filters tell you which choices are *possible*. The **spread** — how far apart the surviving choices sit — tells you which *method* finishes the job. This is the decision that separates a 30-second problem from a three-minute one, and it is made entirely by reading gaps, before touching the numbers.

| When the choices look like… | Do this |
|---|---|
| Spread far apart (12, 45, 90, 200, 500) | **Estimate.** One landmark calculation lands in exactly one bucket. |
| Clustered tight (614, 622, 630, 638, 646) | **Compute** — but check the endings first (next row). |
| Clustered, but every ending differs | Solve for the **distinguishing digit**, not the whole value. |
| One choice is the "naive" number (a plain average, a sum, percents added) | Suspect the **engineered trap** — verify it requires the skipped step. |
| Contains 0, 1, or "cannot be determined" | Test **edge cases** and hunt one counterexample first. |

**Worked example (wide spread — estimate and stop).** What is 11% of 8,140? Choices: (A) 90 (B) 450 (C) 900 (D) 4,500 (E) 9,000. The gaps are multiples of each other — estimation is not just legal, it's the intended method. 10% of 8,140 is 814, so 11% is a bit more — about 895. Only (C) lives in that neighborhood. Computing 0.11 × 8,140 exactly would have produced 895.4 and cost you five times the seconds for zero additional certainty.

**Worked example (tight cluster — one digit decides).** 34 × 26 + 17 × 13 = ? Choices: (A) 1,089 (B) 1,096 (C) 1,105 (D) 1,112 (E) 1,118. The cluster is tight, so estimation is dead — "about 900 plus about 200" brushes all five. But look at the endings: 9, 6, 5, 2, 8 — all different. So compute *only* the units digit: 4 × 6 ends in 4, 7 × 3 ends in 1, and 4 + 1 = 5. Only **(C) 1,105** ends in 5. You got exact-arithmetic certainty at estimation speed, because the choices told you which single digit mattered. (The full products, 884 and 221, do sum to 1,105 — but you never needed them.)

**Trap to watch.** Treating tightly-clustered choices as if they were spread out. If the options are 0.24, 0.25, 0.27, 0.30, you **cannot** round to "about a quarter" and pick — the answer lives inside your rounding error. Read the gaps before you round: tight gaps are the test announcing that it will punish estimation. The reverse error costs too — grinding exact arithmetic when the choices sit an order of magnitude apart is wasted time and a fresh chance for a slipped decimal.

> **Recall check.** The choices are clustered within 2% of each other, but each one ends in a different digit. What's the move? (Skip both estimation and full computation — track only the units digit through the arithmetic; it identifies the answer exactly.)

## @the-engineered-trap

Wrong answers on the GMAT are not random numbers. Each is **engineered** — built by running the problem with one specific mistake installed: a skipped step, a flipped sign, percents added instead of multiplied, the right number reported for the wrong question. The most dangerous one is the **naive choice**: the answer to a simpler problem than the one actually asked. Learning to recognize it converts the writer's weapon into your signpost.

**Worked example (the naive average).** A car travels 240 miles out at 40 mph and returns the same 240 miles at 60 mph. What is the average speed for the whole trip? Choices: (A) 45 (B) 48 (C) 50 (D) 52 (E) 55. Before any formula work, **read the spread**: the naive average is (40 + 60)/2 = 50, sitting right there as choice (C) — built from skipping the "more time passes at the slower speed" step. The true answer must be **pulled below 50** toward the slower leg, which instantly kills (C), (D), and (E). Now you're choosing between two, and you barely need to compute: total distance 480, total time 240/40 + 240/60 = 6 + 4 = 10 hours, so 480/10 = **48**. Answer (B). The trap flagged itself and cut your real work in half.

The trap families worth knowing by name:

- **The naive number.** A plain average, a simple sum, percents added — the output of the "obvious" shortcut that skips the hard step.
- **The half-finished answer.** A correct intermediate value reported as final: the discount instead of the sale price, the time instead of the distance, x when the question asked for 2x + 1.
- **The sign or direction flip.** The right magnitude pointing the wrong way: a decrease reported as an increase, the rejected root of an equation.
- **The right number, wrong question.** Perfectly correct arithmetic answering something the stem never asked — usually planted as choice (A) to catch solvers who stop reading early.

**Worked example (the half-finished answer).** A television priced at $1,250 is discounted 24%. What is the sale price? Choices: (A) $300 (B) $690 (C) $875 (D) $950 (E) $1,010. Compute 24% of 1,250 — that's 300 — and there it sits as choice (A), waiting for anyone who stops at the intermediate step. But the question asks what the TV *sells for*: 1,250 − 300 = **$950**, choice (D). The defense is one beat of discipline: after computing, reread the final sentence of the stem and confirm your number answers *that* sentence. The writer counts on you skipping the reread.

**Trap to watch.** Over-suspecting. Not every clean number is bait — easy questions exist, and sometimes the straightforward answer is simply correct. The diagnosis that earns an elimination is specific: you must be able to **name the skipped step** the trap was built from ("that's the average of the speeds, but time isn't split evenly"). If you can't name the mistake that would produce a choice, you haven't found a trap — you've found a hunch, and hunches don't eliminate.

> **Recall check.** What earns a choice the label "engineered trap" — looking suspiciously clean, or something stronger? (Something stronger: you can name the exact skipped step or wrong question that produces it. No named mistake, no elimination.)

> **Self-explanation prompt.** Why does the naive choice so often appear *verbatim* among the options? (Because the writer computes the most common wrong path to its exact conclusion and plants that number — the trap is the answer to a simpler, wrong question, so solvers who take the shortcut find their result waiting and feel confirmed.)

## @summary

**Takeaway.** The choices are data. Filter them by sign, size, parity, and form before computing; let the gaps between the survivors pick your method; and treat the naive number as a signpost pointing at the step the writer hopes you'll skip.

The four-line recap:

- **Filter first, cheapest first.** Sign, then ballpark size, then parity and divisibility, then form. Most problems shrink to a two-way decision before the arithmetic starts.
- **The spread picks the method.** Wide gaps license a landmark estimate; tight gaps demand exactness — and when clustered choices end in different digits, the units digit alone is the whole computation.
- **Name the trap or it isn't one.** A choice is eliminated as bait only when you can state the skipped step that produces it.
- **Answer the stem's last sentence.** After computing, confirm your number answers the question actually asked — the half-finished value is always planted among the choices.

**What to do next.** Run the graded problem sets above — the reading is the easy part; recognizing filters and traps under time pressure is what makes the habit automatic. Then carry one rule into every practice session: before computing anything, spend one beat on "what sign, what size, what form must the answer have — and which choice is the bait?" This closes the methods sequence: backsolving tests the choices, plugging in replaces the variables, estimation sizes the answer, and choice tactics decide which of those tools the problem wants. Next, the content chapters begin — **Arithmetic: Order of Operations & Signed Numbers** — where every one of these methods gets its raw material.

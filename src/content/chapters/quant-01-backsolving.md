---
slug: quant-01-backsolving
title: "Backsolving: Test the Answers, Skip the Algebra"
section: Quant
estimated_minutes: 12
prerequisites: []
summary: |
  The single highest-leverage move in Problem Solving: when the choices are numbers and there is one unknown, stop deriving and start testing. Start at the middle choice, let "too big / too small" cut the field in half, and finish in at most two checks — algebra-proof and fast.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely — attempting first sharpens what the reading lands on. As you work, notice whether you reached for algebra by reflex.
    pretest_question_ids:
      - backsolving-q1
      - backsolving-q2
  - id: why-backsolving-wins
    type: reading
    title: "Why backsolving wins"
    check_question_ids:
      - backsolving-q3
  - id: median-first-method
    type: reading
    title: "The median-first method"
    check_question_ids:
      - backsolving-q4
  - id: where-it-pays-where-it-breaks
    type: reading
    title: "Where it pays — and where it breaks"
    check_question_ids:
      - backsolving-q5
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
      - backsolving-q6
      - backsolving-q7
      - backsolving-q12
      - backsolving-q13
      - backsolving-q14
      - backsolving-q15
      - backsolving-q16
  medium:
    target_accuracy_by_score:
      "605": 55
      "645": 70
      "685": 85
      "725": 95
    question_ids:
      - backsolving-q8
      - backsolving-q9
      - backsolving-q17
      - backsolving-q18
      - backsolving-q19
      - backsolving-q20
      - backsolving-q21
      - backsolving-q22
      - backsolving-q23
  hard:
    target_accuracy_by_score:
      "605": 40
      "645": 55
      "685": 70
      "725": 90
    question_ids:
      - backsolving-q10
      - backsolving-q11
      - backsolving-q24
      - backsolving-q25
      - backsolving-q26
      - backsolving-q27
      - backsolving-q28
---

## @why-backsolving-wins

By the end of this chapter you will be able to:

- Recognize, in one glance at the stem and choices, when backsolving is the fastest route.
- Run the median-first procedure that finishes any backsolvable problem in at most two tests.
- Name the four situations where backsolving breaks, so you never apply it to a problem it can't solve.

**Mental model.** The five answer choices are not a menu you consult after solving — they are five free guesses, exactly one of which the test-writer has certified correct. On a "what is the value of x" problem, your job is no longer "derive the answer." It is "test which given number survives." That is almost always faster than algebra, and it is bulletproof against the sign slips and mis-distributions that cost careless points.

Most test-takers underuse this. They see an equation and reflexively start manipulating symbols, treating the choices as an afterthought. The disciplined move is the opposite: read the choices *first*, and ask whether the problem is begging you to test rather than solve.

Here is the trigger map. Reach for backsolving the instant a problem fits the left column.

| Reach for backsolving when… | Why it works |
|---|---|
| The stem asks for one value — "what is x / the price / the speed" | The choices are candidate values you can plug in directly |
| The choices are **numeric and sorted** (ascending or descending) | Testing the middle choice cuts the field in half |
| There is **one unknown** and a condition you can check | You verify any guess by substituting it back |
| The algebra is **ugly** — quadratics, fractions, nested terms | Arithmetic on a known number beats symbolic manipulation |
| A word problem buries a clean equation in messy phrasing | Skip the translation; test the number against the words |

**Pro tip.** Backsolving and algebra are not rivals — backsolving is your default for value questions, and you fall back to algebra only when the choices aren't testable. Knowing which tool the problem wants is itself a scored skill.

> **Recall check.** Before reading on: why is reading the answer choices *first* a strategic move, not just a habit? (Because the choices tell you whether the problem is testable at all — and if it is, you can verify a guess instead of deriving the answer from scratch.)

## @median-first-method

The procedure is mechanical once you see why it works.

1. **Start at the middle choice (C).** GMAT numeric answers are listed in order, so C sits at the median of a sorted lineup.
2. **Substitute it into the stem's condition.** Either it works — you're done — or it comes out **too big** or **too small**.
3. **Kill the dead half.** If C is too big, every larger choice dies with it; if too small, every smaller choice dies. One test collapses five options to two.
4. **Test one survivor.** A second substitution settles it. **Worst case: two plug-ins.**

This only works because the relationship is *monotonic* — bigger input pushes the result reliably in one direction. That is what lets a single test of the median partition the list into a ruled-out half and a short list of survivors.

**Worked example.** *If x² − 3x = 28 and x > 0, what is x?* Choices: (A) 4 (B) 5 (C) 7 (D) 8 (E) 9. Start at C, x = 7: 49 − 21 = 28. Exact on the first test — answer **(C)**. Notice everything you skipped: you never moved the 28 over, never factored x² − 3x − 28 into (x − 7)(x + 4), never discarded the negative root. Had C come out too big, you'd drop to A or B; too small, up to D or E.

**Micro-drill (do this in your head).** For each, name which choice you test first and what a "too small" result tells you: *(i)* choices 10, 20, 30, 40, 50; *(ii)* choices 9, 7, 5, 3, 1 (descending). Answers: *(i)* test 30; too small means the answer is 40 or 50. *(ii)* test 5; because the list descends, "too small" means you move toward the **front** (9 or 7), not the back. Direction follows the ordering, not the page position.

> **Recall check.** Why does starting at the median guarantee you finish in at most two tests for a monotonic relationship? (One test of the middle splits the ordered list into a ruled-out half and at most two survivors; the second test distinguishes those two.)

## @where-it-pays-where-it-breaks

Backsolving isn't only for equations. It shines anywhere the choices are concrete and the condition is checkable.

**Worked example.** *(Word problem.)* A store sells pens at one price and pencils at half that price. Marco buys 3 pens and 4 pencils for $20. What is the price of one pen? Choices: (A) $3 (B) $4 (C) $5 (D) $6 (E) $8. Test C, pen = $5, pencil = $2.50: 3(5) + 4(2.50) = $25 — **too big**, so kill C, D, E (a higher pen price only raises the total). Test B, pen = $4: 12 + 8 = $20. Answer **(B)**. You never wrote "3p + 4(p/2) = 20"; you read the sentence and checked a number against it.

**Worked example.** *(Number properties.)* The sum of three consecutive even integers is 84. What is the largest? Choices: (A) 26 (B) 28 (C) 30 (D) 32 (E) 34. Largest = C = 30 means 26, 28, 30; sum = 84. Exact on the first try — answer **(C)**. Stems with "consecutive," "divisible by," or "largest such" are prime territory, because each choice is instantly checkable against the stated property with no equation at all.

Now the discipline that separates fast from reckless — the four places backsolving **breaks**:

| Backsolving fails when… | Because… |
|---|---|
| Choices are **variable expressions** (3k, x + 2, n/4) | There's nothing fixed to plug back and verify |
| The stem says **"must be true" / "could be true"** | You'd need to reason over *all* cases, not confirm one value |
| Choices are **non-numeric or unsortable** (Roman numerals, "cannot be determined", bare ratios) | "Too big / too small" can't eliminate |
| The relationship is **not monotonic** | A larger choice doesn't reliably push the condition one way, so half-elimination is unsafe |

> **Trap to watch.** Even when backsolving, read the **exact ask**. If the stem defines x but asks for x + 1 or 2x, the choices describe the *transformed* quantity — back out what each choice implies before plugging, or solve for x and then transform. The method rewards precision, not just speed.

> **Recall check.** A problem reads "which of the following must be even?" with numeric-looking choices. Should you backsolve? (No — "must be true" demands reasoning over every case; one confirming example doesn't prove the choice. Hunt counterexamples instead.)

## @summary

**Takeaway.** When the stem asks for one value and the choices are sorted numbers, don't derive — test. Start at the median, let "too big / too small" delete half the field, and confirm with a second plug-in. Two tests, worst case, and zero exposure to algebra mistakes.

The four-line recap:

- **Read the choices first.** They tell you whether the problem is even testable.
- **Start at C.** The median splits a sorted list in half per test.
- **Follow the direction.** "Too big / too small" eliminates the dead half; ordering tells you which way to move.
- **Know the four breakpoints.** Variable choices, "must/could be true," unsortable choices, and non-monotonic relationships — solve those directly.

**What to do next.** Run the graded problem sets above to lock the pattern in under realistic conditions — the reading is the easy part; retrieval is what makes the skill automatic. Then carry backsolving into mixed practice: on every Problem Solving question, take one beat before you compute and ask, *can I just test the choices?* Next up, **Plugging In Numbers** extends the same instinct to problems with variables in the choices, where there's no single number to test — but there's still no reason to think in symbols.

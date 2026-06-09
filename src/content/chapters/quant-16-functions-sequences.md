---
slug: quant-16-functions-sequences
title: "Algebra: Functions & Sequences"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-15-inequalities-absolute-value
summary: |
  Function notation, custom-defined operators, and arithmetic and geometric sequences.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - algebra-q19
      - algebra-q20
  - id: functions-and-sequences
    type: reading
    title: "Functions, sequences, and custom characters"
    check_question_ids:
      - algebra-q6
      - algebra-q11
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - algebra-q21
      - algebra-q22
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - algebra-q23
      - algebra-q24
---

## @functions-and-sequences

**Function notation** is just a compact way to describe a rule. `f(x) = 2x² − 3x + 1` means "take the input, square it, double that, subtract three times the input, add one." Whenever you see `f(something)`, substitute that "something" wherever `x` appears.

**Example (basic).** If `f(x) = 2x² − 3x + 1`, find `f(3) − f(1)`.

- `f(3) = 2(9) − 3(3) + 1 = 18 − 9 + 1 = 10`
- `f(1) = 2(1) − 3(1) + 1 = 2 − 3 + 1 = 0`
- `f(3) − f(1) = 10 − 0 = 10`

No deep algebra required — just careful substitution.

**Nested functions — `f(f(x))`.** Apply the function once, then apply it again to the result.

**Example.** If `f(n) = n² − n`, find `f(f(3))`.

- Inner first: `f(3) = 9 − 3 = 6`
- Outer next: `f(6) = 36 − 6 = 30`

Work **inside out** every time. The trap: students compute `f(3 + 3) = f(6)` directly (skipping the inner step) — gets the right answer here by coincidence but fails on `f(f(2))` style questions.

**Custom characters — the "made-up operator" trick.** The GMAT defines its own operator symbols all the time: `x @ y = x² + y²`, `a ◇ b = 2a − b`, etc. These are **functions in disguise** — the definition is the rule, substitute mechanically.

**Example.** If `a ◇ b = 2a − b`, compute `(3 ◇ 4) ◇ 5`.

- Inner: `3 ◇ 4 = 2(3) − 4 = 2`
- Outer: `2 ◇ 5 = 2(2) − 5 = −1`

Inside out, same as nested functions.

**The one rule for custom-character problems:** substitute the definition *literally*. If the definition says `x @ y = x² − y²`, then `5 @ 3 = 25 − 9 = 16`, and `3 @ 5 = 9 − 25 = −16`. Order matters — custom operators are often non-commutative.

**Arithmetic sequences.** A sequence where each term differs from the previous by a fixed **common difference** `d`. Formula for the nth term:

    aₙ = a₁ + (n − 1)d

**Example.** First term 5, common difference 3. 10th term? `a₁₀ = 5 + 9(3) = 32`.

**Sum of an arithmetic sequence:**

    Sₙ = (n/2)(a₁ + aₙ)

The elegant interpretation: the sum of n terms equals n times the *average* term. And because arithmetic sequences are symmetric, the average is `(first + last)/2`.

**Example.** Sum of integers from 1 to 100: `(100/2)(1 + 100) = 50 × 101 = 5050`. Gauss's classic — a one-line calculation.

**Geometric sequences.** Each term is the previous times a fixed **common ratio** `r`. Formula for nth term:

    aₙ = a₁ × r^(n − 1)

**Example.** First term 3, common ratio 2. 5th term? `a₅ = 3 × 2⁴ = 48`.

**Sum of a geometric sequence:**

    Sₙ = a₁ × (1 − rⁿ) / (1 − r)   (for r ≠ 1)

Rare on GMAT but occasionally appears in 705+ DS questions about compounding.

**The "k_n = k_{n-1} + c" recurrence.** Some GMAT problems define a sequence recursively: "each term is the previous plus 5" or "each term is twice the previous minus 3." Write out the first 4-5 terms to spot the pattern, then apply the arithmetic or geometric formula if one fits.

**Example (recursive).** `a₁ = 2` and `aₙ = aₙ₋₁ + 4`. Find `a₁₀`.

This is arithmetic with `d = 4`, so `a₁₀ = 2 + 9(4) = 38`.

**Domain and range (lite).** GMAT occasionally asks where a function is undefined. `f(x) = 1/(x − 3)` is undefined at `x = 3` (division by zero). `g(x) = √(x − 5)` requires `x ≥ 5` (square root of negative is not real). Knowing these two cases handles nearly every domain question.

> **Recall check.** Without scrolling up, state the formula for the nth term of an arithmetic sequence and the formula for the nth term of a geometric sequence. Now state the sum formula for an arithmetic sequence. If you can write them from memory, you've encoded the template; if not, re-read the three boxes and try again in two minutes. Retrieval beats re-reading — that's the single most robust finding in the learning-science literature (Karpicke & Blunt, 2011).

**Trap to watch.** "f(a + b)" is **not** the same as "f(a) + f(b)" unless f is literally linear. For `f(x) = x²`, `f(2 + 3) = 25`, but `f(2) + f(3) = 4 + 9 = 13`. Students who distribute function notation like multiplication get trapped constantly. Always compute the input first, then apply the function.

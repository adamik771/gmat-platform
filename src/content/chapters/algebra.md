---
slug: algebra
title: Algebra
section: Quant
estimated_minutes: 55
prerequisites: []
summary: |
  Algebra is the mechanical substrate of Quant — the moment a problem has an unknown, you're doing algebra. This chapter covers the nine algebraic moves that together solve roughly 40% of GMAT Focus Quant questions: isolating variables, handling systems, flipping inequality signs on negatives, the wavy-line method for polynomial and rational inequalities, casework on absolute value, factoring quadratics, substituting into functions and sequences, manipulating symbolic identities, and translating English into equations without losing the word "more" or "less" in the process.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. Miss both and you're still going to learn more than if you'd skipped them — the act of attempting a problem pre-loads your attention for the solution. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - algebra-q1
      - algebra-q7

  - id: linear-equations-one-unknown
    type: reading
    title: "Linear equations in one unknown — isolate-the-variable discipline"
    check_question_ids:
      - algebra-q1

  - id: systems-of-equations
    type: reading
    title: "Systems of equations — substitution vs. elimination"
    check_question_ids:
      - algebra-q4
      - algebra-q15

  - id: inequalities
    type: reading
    title: "Inequalities — the sign flip you can't forget"
    check_question_ids:
      - algebra-q3

  - id: polynomial-inequalities-wavy-line
    type: reading
    title: "Polynomial and rational inequalities — the wavy-line method"
    check_question_ids: []

  - id: absolute-value
    type: reading
    title: "Absolute value — the two-case approach"
    check_question_ids:
      - algebra-q17
      - algebra-q18

  - id: quadratics-and-factoring
    type: reading
    title: "Quadratics and factoring — FOIL, reverse FOIL, and Vieta's"
    check_question_ids:
      - algebra-q5
      - algebra-q13

  - id: functions-and-sequences
    type: reading
    title: "Functions, sequences, and custom characters"
    check_question_ids:
      - algebra-q6
      - algebra-q11

  - id: algebraic-manipulation
    type: reading
    title: "Algebraic manipulation — identities and exponent rules"
    check_question_ids:
      - algebra-q2
      - algebra-q12

  - id: word-problem-translation
    type: reading
    title: "Word-problem translation — English into equations"
    check_question_ids:
      - algebra-q7
      - algebra-q20

  - id: summary
    type: summary
    title: "The nine algebraic moves"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - algebra-q1
      - algebra-q2
      - algebra-q3
      - algebra-q4
      - algebra-q13
      - algebra-q17
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - algebra-q5
      - algebra-q6
      - algebra-q7
      - algebra-q8
      - algebra-q14
      - algebra-q15
      - algebra-q18
      - algebra-q19
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - algebra-q9
      - algebra-q10
      - algebra-q11
      - algebra-q12
      - algebra-q16
      - algebra-q20
---

## @linear-equations-one-unknown

The single most important habit in algebra is "isolate the variable before you do anything else." Every one-unknown linear equation reduces to `x = something`. The work is mechanical; the errors come from doing it sloppily under time pressure.

**The four operations that preserve equality:**

1. Add the same thing to both sides.
2. Subtract the same thing from both sides.
3. Multiply both sides by the same non-zero thing.
4. Divide both sides by the same non-zero thing.

That's it. Every algebraic step reduces to one of these four. If you find yourself doing anything else ("I'll just move this over and forget the sign change"), you're introducing errors.

**Example.** If `3x + 7 = 22`, find `6x + 5`.

- Subtract 7: `3x = 15`.
- Divide by 3: `x = 5`.
- Compute: `6(5) + 5 = 35`.

**The faster path: don't always solve for x.** Notice `6x + 5 = 2(3x) + 5 = 2(15) + 5 = 35`. You only needed `3x`, not `x`. The GMAT rewards students who read what the problem actually asks for — sometimes the target expression is a rearrangement of the given one, and you can skip solving for the individual variable.

**The "keep what you need" heuristic.** Before solving, glance at what the question wants. If it wants `2x − 1` and your equation gives `2x = 7`, just write `2x − 1 = 6`. No need to find x.

**Clearing fractions and decimals.** If an equation has fractions, multiply both sides by the LCD to clear them. `x/3 + x/4 = 7` → multiply by 12 → `4x + 3x = 84` → `7x = 84` → `x = 12`. Decimal coefficients clear the same way: multiply both sides by a power of 10.

**Checking by substitution.** The cheapest insurance on any algebra problem: plug your answer back into the original equation. If it doesn't satisfy, you made an arithmetic mistake. Ten seconds of checking beats two minutes of confused rework.

> **Trap to watch.** When you multiply or divide both sides by an expression containing a variable, you may be multiplying by zero or flipping a sign. If `x − 2` could be negative, multiplying an inequality by `x − 2` flips the inequality sign. Keep track of what's in your multiplier.

> **Self-explanation prompt.** In one sentence, why is "isolate the variable" good discipline? If you can say "because once the variable is alone, every remaining step is arithmetic," you've internalized why this is the only reliable path through multi-step algebra.

## @systems-of-equations

A system of equations has two or more equations and two or more unknowns. On the GMAT, you'll almost always see two equations in two unknowns. Two techniques cover everything.

**Substitution — use when one variable is cheap to isolate.** If one equation gives you `y = 2x + 3`, substitute `2x + 3` for y in the other equation. Solve for x, back-substitute for y.

**Elimination — use when coefficients line up for addition or subtraction.** If one equation has `+2y` and the other has `−2y`, adding them kills y.

**Example (elimination).** `x + y = 12` and `x − y = 4`. Add: `2x = 16`, so `x = 8`. Subtract: `2y = 8`, so `y = 4`. Two lines, no substitution needed.

**Example (substitution).** At a bakery, `2m + 3s = 21` and `4m + s = 17`. From equation 2: `s = 17 − 4m`. Substitute into equation 1: `2m + 3(17 − 4m) = 21` → `2m + 51 − 12m = 21` → `−10m = −30` → `m = 3`. Then `s = 17 − 12 = 5`.

**Elimination with coefficient matching.** If coefficients don't line up, scale one or both equations first. `3x + 2y = 16` and `5x − 2y = 16` line up on y — add them to get `8x = 32`, so `x = 4`. Back-substitute: `3(4) + 2y = 16` → `y = 2`. Then `x + y = 6`.

**The linear-dependence trap.** Two equations in two unknowns don't always pin down the answer. If one equation is a multiple of the other, they describe the same line and the system has infinitely many solutions.

**Example (Data Sufficiency).** What is x? (1) `2x + 3y = 14`. (2) `4x + 6y = 28`.

Statement (2) is exactly twice statement (1) — same equation, no new information. The two statements together still form one equation in two unknowns. Answer: E (insufficient together).

**Quick test for independence:** two linear equations `ax + by = c` and `dx + ey = f` are independent if and only if `ae − bd ≠ 0`. Check this at a glance on Data Sufficiency.

> **Trap to watch.** Three unknowns generally need three independent equations. But the GMAT can give you three equations where two are redundant, or give you information in a form that's not obviously an equation (a constraint like `x > 0`). Count *independent* equations, not visible ones.

## @inequalities

Inequalities work like equalities with one brutal exception: multiplying or dividing by a negative flips the inequality sign. This is the single most common algebra mistake on the GMAT.

**Operations that preserve the inequality direction:**

- Add or subtract any real number on both sides.
- Multiply or divide by a *positive* number on both sides.

**Operations that flip the inequality:**

- Multiply or divide by a *negative* number on both sides.
- Take the reciprocal of both sides if both are positive (or both negative).

**Example.** If `−3x + 9 > 0`, find x.

- Subtract 9: `−3x > −9`.
- Divide by −3 AND flip: `x < 3`.

Students who forget to flip write `x > 3` — exactly the wrong answer.

**Combining inequalities.** Two inequalities on the same variable can be intersected or unioned.

- `x > 2` AND `x < 7` → `2 < x < 7`.
- `x < −3` OR `x > 5` → two disjoint intervals.

**Counting integer solutions.** GMAT loves "how many integer values of x satisfy…" questions. Draw the number line, write the exact interval, and count.

**Example.** For how many integer x is `|2x + 1| < 9`?

`|2x + 1| < 9` means `−9 < 2x + 1 < 9`. Subtract 1: `−10 < 2x < 8`. Divide by 2: `−5 < x < 4`. Strict inequalities, so endpoints excluded. Integers: −4, −3, −2, −1, 0, 1, 2, 3. Eight values.

**Compound inequalities like `2 < |x − 3| < 7`.** Split into the union of two intervals.

- `|x − 3| > 2` means `x − 3 > 2` OR `x − 3 < −2`, i.e., `x > 5` OR `x < 1`.
- `|x − 3| < 7` means `−7 < x − 3 < 7`, i.e., `−4 < x < 10`.
- Intersect: `−4 < x < 1` OR `5 < x < 10`.
- Integer values in `−4 < x < 1`: −3, −2, −1, 0 (4 values). In `5 < x < 10`: 6, 7, 8, 9 (4 values). Total: 8.

> **Trap to watch.** Reciprocals flip inequalities only when both sides have the same sign. `2 < 5` gives `1/2 > 1/5` (positive, flips). But `−2 < 5` does NOT give `−1/2 > 1/5`; when the signs differ, you can't take reciprocals cleanly. This trap is frequent on Data Sufficiency.

## @polynomial-inequalities-wavy-line

When an inequality has a polynomial (like `x² − 5x + 6 > 0`) or a rational expression (like `(x − 2)(x + 3) / (x − 1) < 0`), you can't just "isolate x" — the sign of the expression flips at each root. The **wavy-line method** (also called the sign-chart method) solves every polynomial or rational inequality in under 30 seconds once you know the technique. It's the single highest-leverage 705+ trick in algebra.

**The four-step recipe.**

1. **Factor** the expression completely. Every factor should look like `(x − r)` where `r` is a real root.
2. **Mark the roots on a number line** — these are the places where the expression equals zero.
3. **Draw a wavy line** starting from the top-right (positive sign) and crossing through each root, alternating sign each time. If a factor appears an even number of times (e.g., `(x − 3)²`), **bounce off** that root instead of crossing — the sign doesn't change there.
4. **Read the answer**: the expression is positive where the wavy line is above the axis, negative where below. Pick whichever matches the inequality.

**Example 1 — straightforward quadratic.** Solve `x² − 5x + 6 > 0`.

Factor: `(x − 2)(x − 3) > 0`. Roots at 2 and 3.

Number line with roots marked. Starting from the far right (where both factors are positive, so the product is positive), the sign goes:

    (+)   2   (−)   3   (+)
    ←————•————————•————→

Answer: positive regions are `x < 2` OR `x > 3`.

**Example 2 — rational with three factors.** Solve `(x − 1)(x + 2) / (x − 4) ≥ 0`.

Roots at 1, −2, 4. But 4 is a *denominator* root — the expression is undefined there, so the answer can't include `x = 4`. Numerator roots (1 and −2) give equality, so those ARE included (since the inequality is ≥, not strict >).

Sign chart from far right: all three factors positive → overall positive. Moving leftward, sign flips at each root:

    (−) −2 (+)  1  (−)  4  (+)
    ←————•——————•——————○————→

(Circle at 4 indicates "excluded"; dots at −2 and 1 indicate "included".)

Answer: `−2 ≤ x ≤ 1` OR `x > 4`.

**Example 3 — the even-power bounce.** Solve `(x − 1)²(x + 3) < 0`.

Roots at 1 (double root) and −3. Starting from far right:

    At x very large → (big)²(big) = positive (+)
    Cross −3 → flip to negative (−)
    Reach 1 (double root) → **bounce**, stay negative (−)
    Past 1 → still negative (−)

    (−)  −3  (+)  1  (+)
    ←————•————————•————→

Wait — that's wrong. Let me redo: starting right of all roots, plug in x = 10: `(10 − 1)²(10 + 3) = 81 × 13 = +1053`, positive. Moving left past 1 (a double root), sign **bounces** — stays positive. Moving further left past −3, sign **flips** — goes negative.

    (−)  −3  (+)  1  (+)
    ←————•————————•————→

Answer: `x < −3`.

The double root at 1 is the key subtlety — it's a bounce, not a flip. Students who miss this include the wrong interval.

**Why the method works.** The sign of a product of factors is determined by how many negative factors there are. Each factor `(x − r)` changes sign exactly at `r`. So as you walk left-to-right on the number line, each simple root flips the product's sign. An even-power factor (double, quadruple) passes through zero but doesn't change sign — both sides are the same sign.

**When to use the wavy line vs. factoring to `x > a`.** If the inequality has ≥2 roots or a rational expression, always wavy-line. If it's linear (one root), just solve directly. Quadratics of the form `x² + bx + c > 0` are always wavy-line.

**Compound inequalities on the GMAT.** The wavy-line method also handles compound conditions like `2 < |x − 3| < 7` (see the absolute-value section for that approach — it's faster than polynomial factoring for abs-value). But for polynomial/rational inequalities, wavy-line is the fastest, most reliable tool.

> **Recall check.** Close your eyes. State the four steps of the wavy-line method out loud without looking. Now explain when you *bounce* off a root versus *cross* it. If you can say "bounce when the factor has even power, cross when odd," you've internalized the only rule that matters for double roots. Open your eyes and verify against the recipe above.

> **Trap to watch.** When the expression includes `1/(x − a)`, the value `x = a` is **excluded** from the solution (division by zero is undefined). Don't fill in that dot. Numerator roots may be included or excluded depending on whether the inequality is strict.

## @absolute-value

Absolute value measures distance from zero. `|x| = 3` means x is 3 units from zero, so x = 3 or x = −3. Every absolute-value equation or inequality splits into two cases.

**The two-case recipe for `|expression| = k` (with `k ≥ 0`):**

- Case 1: `expression = k`.
- Case 2: `expression = −k`.

Solve both cases separately, then collect solutions.

**Example.** `|x − 4| = 7`.

- Case 1: `x − 4 = 7` → `x = 11`.
- Case 2: `x − 4 = −7` → `x = −3`.

Sum of solutions: `11 + (−3) = 8`. Shortcut: for `|x − a| = b`, the two solutions are symmetric about a, so sum = 2a = 8.

**Example.** `|2x − 7| = 11`.

- Case 1: `2x − 7 = 11` → `x = 9`.
- Case 2: `2x − 7 = −11` → `x = −2`.

Sum: `9 + (−2) = 7`. The sum shortcut still works: solutions are symmetric about the value that zeroes the expression, which is `x = 7/2`. Sum = `2 × 7/2 = 7`. ✓

**Absolute value inequalities.**

- `|expr| < k` (with `k > 0`) translates to `−k < expr < k`. "Less than" → a single bounded interval.
- `|expr| > k` (with `k > 0`) translates to `expr > k` OR `expr < −k`. "Greater than" → two disjoint intervals.

**Memory trick: "less thAND, greater thOR."** Less-than inequalities become AND (bounded); greater-than become OR (disjoint).

**Example.** `|2x + 1| < 9` → `−9 < 2x + 1 < 9` (see previous section for full count).

**When the right-hand side can be negative.** `|expr| = −5` has no solution (absolute value is never negative). `|expr| > −5` is always true (absolute value is always ≥ 0 > −5). `|expr| < −5` is never true. Watch these edge cases on Data Sufficiency.

> **Trap to watch.** `|x − y| = |y − x|` always. Don't double-count by treating them as separate. Also, `|x|² = x²` for any real x, so `|x|` equations can sometimes be turned into quadratics by squaring both sides — but squaring can introduce extraneous solutions, so always check.

> **Self-explanation prompt.** Why does `|expr| < k` produce a single interval but `|expr| > k` produce two? If you can say "because 'close to zero' is one region but 'far from zero' is two regions (positive far and negative far)," you've geometrized absolute value and won't mix up AND vs OR again.

## @quadratics-and-factoring

A quadratic is an equation of the form `ax² + bx + c = 0`. Three techniques handle every GMAT quadratic: factoring, Vieta's formulas, and the discriminant.

**Factoring a trinomial with leading coefficient 1.** For `x² + bx + c = 0`, find two numbers that *multiply to c* and *add to b*. Those are the roots' negatives.

**Example.** `x² − 5x − 14 = 0`. Find two numbers that multiply to −14 and add to −5. That's −7 and 2. So `(x − 7)(x + 2) = 0`, giving roots `x = 7` and `x = −2`. Product of roots: `7 × (−2) = −14`.

**Vieta's formulas — the fastest way to get sum and product.** For `ax² + bx + c = 0`:

- Sum of roots `= −b/a`.
- Product of roots `= c/a`.

**Example.** `x² + 4x − 21 = 0`. Sum of roots = `−4/1 = −4`. No factoring needed.

**Example.** `x² − 5x − 14 = 0`. Product of roots = `−14/1 = −14`. Same as before, no factoring.

**The discriminant (`b² − 4ac`) tells you how many real solutions:**

- `b² − 4ac > 0`: two distinct real roots.
- `b² − 4ac = 0`: exactly one real root (repeated).
- `b² − 4ac < 0`: no real roots.

**Example.** For what k does `x² − 10x + k = 0` have exactly one real solution? Discriminant = 0 → `100 − 4k = 0` → `k = 25`. The repeated root is `x = 5`.

**Factoring special forms:**

| Pattern | Factorization |
|---|---|
| Difference of squares | `a² − b² = (a − b)(a + b)` |
| Perfect square trinomial (+) | `a² + 2ab + b² = (a + b)²` |
| Perfect square trinomial (−) | `a² − 2ab + b² = (a − b)²` |
| Sum of cubes | `a³ + b³ = (a + b)(a² − ab + b²)` |
| Difference of cubes | `a³ − b³ = (a − b)(a² + ab + b²)` |

The difference-of-squares identity is the one you'll use most. `99 × 101 = (100 − 1)(100 + 1) = 10000 − 1 = 9999` — no long multiplication.

**Shifting roots.** If the roots of `x² + bx + c = 0` are each increased by 2, the new equation's roots are the old roots + 2. The new equation is what you'd get by substituting `(x − 2)` for x in the original.

**Example.** If shifting the roots of `x² + bx + c = 0` up by 2 gives `x² − 6x + 5 = 0`, find `b + c`.

New equation factors as `(x − 1)(x − 5) = 0`, roots 1 and 5. Original roots: 1 − 2 = −1 and 5 − 2 = 3. By Vieta's: sum = −b → `−1 + 3 = 2 = −b` → `b = −2`. Product = c → `−1 × 3 = −3 = c`. So `b + c = −5`.

> **Trap to watch.** Vieta's gives sum `= −b/a`, not `+b/a`. The negative sign is a common slip. Also, when a ≠ 1 (e.g., `2x² + 5x − 3 = 0`), use `−b/a` and `c/a`, not just `−b` and `c`.

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

> **Trap to watch.** "f(a + b)" is **not** the same as "f(a) + f(b)" unless f is literally linear. For `f(x) = x²`, `f(2 + 3) = 25`, but `f(2) + f(3) = 4 + 9 = 13`. Students who distribute function notation like multiplication get trapped constantly. Always compute the input first, then apply the function.

## @algebraic-manipulation

Much of high-score Quant is symbolic manipulation — rewriting one expression into another, more useful form. The identities below are worth memorizing.

**The critical identities:**

- `(x + y)² = x² + 2xy + y²`
- `(x − y)² = x² − 2xy + y²`
- `(x + y)(x − y) = x² − y²`
- `x² + y² = (x + y)² − 2xy = (x − y)² + 2xy`
- `(x + y)² − (x − y)² = 4xy`
- `(x + y)² + (x − y)² = 2(x² + y²)`

The most common GMAT question using these: you're given `xy` and `x² + y²`, and asked for `(x + y)²` or `(x − y)²`. Use `(x + y)² = x² + 2xy + y²`.

**Example.** `xy = 6` and `x² + y² = 20`. Find `(x + y)²`.

`(x + y)² = x² + 2xy + y² = (x² + y²) + 2xy = 20 + 12 = 32`. One line.

**Exponent rules. Memorize these six:**

1. `xᵃ × xᵇ = xᵃ⁺ᵇ`
2. `xᵃ / xᵇ = xᵃ⁻ᵇ`
3. `(xᵃ)ᵇ = xᵃᵇ`
4. `(xy)ᵃ = xᵃ × yᵃ`
5. `x⁰ = 1` (for x ≠ 0)
6. `x⁻ᵃ = 1/xᵃ`

**Example.** `(x³)⁴ / x⁵`. Use rule 3: `(x³)⁴ = x¹²`. Use rule 2: `x¹² / x⁵ = x⁷`.

**Changing bases to compare exponents.** If `4^(a+1) = 8^a`, rewrite both sides with base 2: `4 = 2²` and `8 = 2³`. So `2²⁽ᵃ⁺¹⁾ = 2³ᵃ` → `2(a+1) = 3a` → `2a + 2 = 3a` → `a = 2`. Whenever two expressions with different bases are set equal, try to rewrite them with a common base.

**Function evaluation.** `f(x) = ax + b` is linear; `f(x) = ax² + bx + c` is quadratic. To evaluate `f(3)`, substitute 3 for x throughout.

**Example.** `f(x) = 2x² − 3x + 1`. Find `f(3) − f(1)`.

- `f(3) = 2(9) − 9 + 1 = 10`.
- `f(1) = 2 − 3 + 1 = 0`.
- Difference: 10.

**Composition of functions.** `f(f(x))` means apply f, then apply f to the result.

**Example.** `f(n) = n² − n`. Find `f(f(3))`. First `f(3) = 9 − 3 = 6`. Then `f(6) = 36 − 6 = 30`.

> **Trap to watch.** `(x + y)² ≠ x² + y²`. Students drop the `2xy` cross term constantly. Whenever you square a sum, write all three terms: `x² + 2xy + y²`.

## @word-problem-translation

Most GMAT algebra questions arrive in English, not symbols. Translation is the bottleneck. The habit that wins: translate each English phrase into a single algebraic expression, left to right, without rearranging.

**The translation dictionary:**

| English | Algebra |
|---|---|
| is, was, equals, will be | = |
| sum of, total, more than, increased by | + |
| difference, less than, decreased by, fewer than | − |
| product, of (with a percent), times, twice | × |
| quotient, per, ratio of | / |
| half as much as | `x/2` |
| twice as many as | `2x` |
| three more than | `x + 3` (NOT `3 + x` if "than" is explicit — same value but track which is "the thing") |
| three less than x | `x − 3` (NOT `3 − x` — this is the #1 translation mistake) |
| x is 20% more than y | `x = 1.20y` |
| x is 20% less than y | `x = 0.80y` |

**The "less than" trap.** "5 less than x" is `x − 5`, not `5 − x`. Read right-to-left when you see "less than" or "fewer than." Similarly, "5 more than x" is `x + 5`.

**Example.** The sum of three consecutive even integers is 18 more than twice the smallest. Find the largest.

Let the three integers be `n`, `n + 2`, `n + 4`. Sum: `3n + 6`. "18 more than twice the smallest" = `2n + 18`.

Equation: `3n + 6 = 2n + 18` → `n = 12`. Largest: `n + 4 = 16`.

**The unit-matching habit.** In word problems with mixed units (dollars, hours, kilograms), write units next to every variable. "A muffin costs m dollars" → `m` has units of dollars per muffin. Check that equations have matching units; a mismatch almost always means a translation error.

**Example.** At a bakery, 2 muffins and 3 scones cost $21, while 4 muffins and 1 scone cost $17. Find the cost of one scone.

Let m = dollars per muffin, s = dollars per scone.

- `2m + 3s = 21`
- `4m + s = 17`

From equation 2: `s = 17 − 4m`. Substitute: `2m + 3(17 − 4m) = 21` → `2m + 51 − 12m = 21` → `−10m = −30` → `m = 3`. Then `s = 17 − 12 = 5`.

**Rates and percents in words.** A 20% raise: multiply by 1.20. A 20% cut: multiply by 0.80. "30% of x" is `0.30x`. "Twenty percent more than x" is `1.20x`, not `x + 20`. Always convert percents to decimals before multiplying.

> **Trap to watch.** "Three more than half of x" is `x/2 + 3`, not `(x + 3)/2`. Parse the English by the last operation first: "more than" is the outer verb, applied to "half of x" (inner). Always resolve inner phrases before outer ones.

> **Self-explanation prompt.** Translate in one breath: "the number of boys is 5 fewer than twice the number of girls." If you wrote `b = 2g − 5`, you've got it. If you wrote `b = 5 − 2g`, re-read — "fewer than" means subtract from the bigger thing.

## @summary

Algebra is mechanical. Every question reduces to one of nine moves. Students who can't finish Quant in 62 minutes are almost always slow on algebra not because they don't know it, but because they do each step slowly and recheck unnecessarily.

**The nine moves:**

1. **Isolate the variable.** Four operations (add, subtract, multiply, divide) preserve equality. Anything else is a mistake waiting to happen.
2. **Systems: substitute or eliminate.** Elimination when coefficients line up, substitution when one variable is cheap to isolate. Always check linear independence on Data Sufficiency.
3. **Flip the inequality sign** whenever you multiply or divide by a negative. This is the #1 inequality mistake on the test.
4. **Wavy-line** for polynomial and rational inequalities. Factor, mark roots, draw the sign chart (bounce on even powers, cross on odd). Read the answer off the chart.
5. **Split absolute value into two cases** for equations; translate to a bounded interval for `|expr| < k` and disjoint intervals for `|expr| > k`.
6. **Factor quadratics or use Vieta's.** For sum/product of roots, Vieta's is faster than factoring. Memorize the difference-of-squares, perfect-square, and sum/difference-of-cubes patterns.
7. **Substitute literally into functions and custom characters.** Inside-out for nested. For sequences, apply the `a₁ + (n−1)d` or `a₁ × r^(n−1)` formula.
8. **Manipulate symbolically with known identities.** `(x + y)² = x² + 2xy + y²` comes up constantly. Change bases to compare exponents.
9. **Translate English into equations.** "Less than" means subtract from the *other* thing. Multiply by 1 ± X/100 for percent changes. Check units.

**Pattern-match table:**

| Problem says | Move | Shortcut |
|---|---|---|
| "Find 2x + 3 given 2x = 7" | Don't solve for x | Just substitute |
| "Two equations, two unknowns" | Elimination or substitution | Check independence |
| "Inequality with −x" | Divide by −1, flip sign | Watch the flip |
| `\|expr\| = k` | Split into two cases | Sum of solutions = 2a (for `\|x − a\|`) |
| "Sum/product of roots" | Vieta's | `−b/a` and `c/a` |
| `(x − a)(x − b) > 0` or rational | Wavy-line | Factor, sign-chart, read off |
| `f(f(x))` or `a @ b = …` | Custom-character / nested | Inside out, substitute literally |
| "nth term of a sequence" | Arithmetic or geometric | `a₁ + (n−1)d` or `a₁ × r^(n−1)` |
| `xy` and `x² + y²` given | `(x + y)² = x² + 2xy + y²` | One line |
| "X% more than Y" | Multiply by `(1 + X/100)` | Convert percents first |
| "Fewer than" or "less than" | Subtract from the *other* term | `b = 2g − 5`, not `5 − 2g` |

Drill these seven moves until they're automatic. The algebra chapter's problem sets are designed to hit each move at easy, medium, and hard difficulty — by the time you finish them, you shouldn't be thinking "which technique applies?" You should be executing the technique and already reading the next question.

---
slug: quant-14-quadratics-factoring
title: "Algebra: Quadratics & Factoring"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-13-linear-equations-systems
summary: |
  FOIL, reverse-FOIL factoring, the special products, and the algebraic identities that collapse hard expressions.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - algebra-q7
      - algebra-q8
  - id: quadratics-and-factoring
    type: reading
    title: "Quadratics and factoring — FOIL, reverse FOIL, and Vieta's"
    check_question_ids:
      - algebra-q5
      - algebra-q13
  - id: algebraic-manipulation
    type: reading
    title: "Algebraic manipulation — identities and exponent rules"
    check_question_ids:
      - algebra-q2
      - algebra-q12
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - algebra-q9
      - algebra-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - algebra-q11
      - algebra-q12
---

## @quadratics-and-factoring

A quadratic is an equation of the form `ax² + bx + c = 0`. Three techniques handle every GMAT quadratic: factoring, Vieta's formulas, and the discriminant.

**Factoring a trinomial with leading coefficient 1.** For `x² + bx + c = 0`, find two numbers that *multiply to c* and *add to b*. Those are the roots' negatives.

**Worked example.** Solve `x² − 5x − 14 = 0`.

- Find two numbers that multiply to −14 and add to −5: that's −7 and 2.
- Factor: `(x − 7)(x + 2) = 0`.
- Roots: `x = 7` and `x = −2`.
- Verify: `7 × (−2) = −14` (matches `c`); `7 + (−2) = 5` (matches `−b`). Both Vieta checks pass.

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

**Trap to watch.** Vieta's gives sum `= −b/a`, not `+b/a`. The negative sign is a common slip. Also, when a ≠ 1 (e.g., `2x² + 5x − 3 = 0`), use `−b/a` and `c/a`, not just `−b` and `c`.

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

**Trap to watch.** `(x + y)² ≠ x² + y²`. Students drop the `2xy` cross term constantly. Whenever you square a sum, write all three terms: `x² + 2xy + y²`.

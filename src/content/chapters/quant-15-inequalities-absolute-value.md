---
slug: quant-15-inequalities-absolute-value
title: "Algebra: Inequalities & Absolute Value"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-14-quadratics-factoring
summary: |
  The sign-flip you can't forget, the wavy-line method for polynomial and rational inequalities, and the two-case approach to absolute value.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - algebra-q13
      - algebra-q14
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
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - algebra-q15
      - algebra-q16
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - algebra-q17
      - algebra-q18
---

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

**Trap to watch.** Reciprocals flip inequalities only when both sides have the same sign. `2 < 5` gives `1/2 > 1/5` (positive, flips). But `−2 < 5` does NOT give `−1/2 > 1/5`; when the signs differ, you can't take reciprocals cleanly. This trap is frequent on Data Sufficiency.

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

**Trap to watch.** When the expression includes `1/(x − a)`, the value `x = a` is **excluded** from the solution (division by zero is undefined). Don't fill in that dot. Numerator roots may be included or excluded depending on whether the inequality is strict.

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

**Trap to watch.** `|x − y| = |y − x|` always. Don't double-count by treating them as separate. Also, `|x|² = x²` for any real x, so `|x|` equations can sometimes be turned into quadratics by squaring both sides — but squaring can introduce extraneous solutions, so always check.

> **Self-explanation prompt.** Why does `|expr| < k` produce a single interval but `|expr| > k` produce two? If you can say "because 'close to zero' is one region but 'far from zero' is two regions (positive far and negative far)," you've geometrized absolute value and won't mix up AND vs OR again.

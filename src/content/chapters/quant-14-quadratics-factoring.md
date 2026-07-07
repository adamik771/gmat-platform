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
      - algebra-q60
      - algebra-q13
  - id: algebraic-manipulation
    type: reading
    title: "Algebraic manipulation — identities and exponent rules"
    check_question_ids:
      - algebra-q53
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
      - algebra-q136
---

## @quadratics-and-factoring

A quadratic is an equation of the form `ax² + bx + c = 0`, where `a ≠ 0`. The `x²` term is what makes it quadratic; drop it and you're back to a linear equation. Almost every GMAT quadratic yields to one of three techniques: factoring (reverse-FOIL), Vieta's formulas, and the discriminant. You rarely need the full quadratic formula on this test — the numbers are engineered to factor cleanly, and when they don't, Vieta's or the discriminant usually answers the actual question being asked without your ever finding the roots. Knowing *which* tool the question is steering you toward is half the battle, and on hard items the entire trap is that you reach for the slow tool when the question was begging for the fast one.

Before the mechanics, internalize one fact: a quadratic has **at most two real roots**. When you see "the equation has two solutions" or "for what value does it have exactly one solution," your antenna should go straight to factoring or the discriminant. The phrasing is a tell. Likewise, "the sum of the solutions" or "the product of the solutions" is a Vieta's flare — the test is daring you to factor when you don't have to.

**Factoring a trinomial with leading coefficient 1.** For `x² + bx + c = 0`, find two numbers that *multiply to c* and *add to b*. Call them `p` and `q`. Then `x² + bx + c = (x + p)(x + q)`, and the roots are `x = −p` and `x = −q`. The roots are the *negatives* of the numbers you found — a sign flip people forget under time pressure.

**Worked example.** Solve `x² − 5x − 14 = 0`.

- Find two numbers that multiply to −14 and add to −5: that's −7 and 2.
- Factor: `(x − 7)(x + 2) = 0`.
- Roots: `x = 7` and `x = −2`.
- Verify: `7 × (−2) = −14` (matches `c`); `7 + (−2) = 5` (matches `−b`). Both Vieta checks pass.

The sign logic for picking `p` and `q` is worth making automatic. If `c` is **positive**, the two numbers share a sign (both positive if `b > 0`, both negative if `b < 0`). If `c` is **negative**, the numbers have **opposite signs**, and the larger-magnitude one carries the sign of `b`. Run that test before you start guessing pairs and you'll cut your search in half.

**Worked example.** Solve `x² + 11x + 24 = 0`.

- `c = 24 > 0` and `b = 11 > 0`, so both numbers are positive.
- Need a positive pair multiplying to 24, summing to 11: that's 3 and 8.
- Factor: `(x + 3)(x + 8) = 0`. Roots: `x = −3` and `x = −8`.
- Verify: `(−3)(−8) = 24` and `−3 + (−8) = −11 = −b`. Correct.

> **Recall check.** In `x² + bx + c`, you find two numbers `p` and `q` that multiply to `c` and add to `b`. Are the roots `p` and `q`, or `−p` and `−q`? (The roots are `−p` and `−q` — the negatives of the numbers you found.)

**Factoring when `a ≠ 1`.** The GMAT will occasionally hand you a leading coefficient other than 1, and the clean trick is the "multiply-to-`ac`, add-to-`b`" version. For `ax² + bx + c = 0`, find two numbers that multiply to `a·c` and add to `b`, split the middle term, and factor by grouping.

**Worked example (leading coefficient not 1).** Solve `2x² + 5x − 3 = 0`.

- `a·c = 2 × (−3) = −6`, and you need two numbers multiplying to −6, adding to +5: that's `+6` and `−1`.
- Split the middle term: `2x² + 6x − x − 3 = 0`.
- Group: `2x(x + 3) − 1(x + 3) = 0` → `(2x − 1)(x + 3) = 0`.
- Roots: `x = 1/2` and `x = −3`.
- Verify with Vieta's: sum `= −b/a = −5/2`, and `1/2 + (−3) = −5/2` ✓; product `= c/a = −3/2`, and `(1/2)(−3) = −3/2` ✓.

**Vieta's formulas — the fastest way to get sum and product.** Often the question doesn't want the roots at all; it wants their sum, product, or something built from those. Vieta's gives both instantly, no factoring. For `ax² + bx + c = 0`:

- Sum of roots `= −b/a`.
- Product of roots `= c/a`.

**Example.** `x² + 4x − 21 = 0`. Sum of roots = `−4/1 = −4`. No factoring needed.

**Example.** `x² − 5x − 14 = 0`. Product of roots = `−14/1 = −14`. Same as the worked example above, no factoring.

The power move is recognizing when a question is *secretly* a Vieta's question. If a problem hands you the sum and product of two unknowns and asks for a related quantity, you can reverse the process: any two numbers with sum `S` and product `P` are exactly the roots of `x² − Sx + P = 0`. That single equation reconstructs the pair. Equally important are the **symmetric-expression identities** that let you answer without ever finding the roots:

- `x² + y² = (x + y)² − 2xy`
- `(x − y)² = (x + y)² − 4xy`
- `1/x + 1/y = (x + y)/(xy)`

Every one of these is built from sum and product alone — exactly what Vieta's hands you for free.

**Worked example (hard, recognizing Vieta's in disguise).** Two numbers have a sum of 10 and a product of 21. What is the sum of their squares, `x² + y²`?

- You could factor: the numbers are the roots of `t² − 10t + 21 = 0`, i.e. `(t − 3)(t − 7) = 0`, giving 3 and 7, and `9 + 49 = 58`.
- But the algebra-only route is faster and generalizes: `x² + y² = (x + y)² − 2xy = 10² − 2(21) = 100 − 42 = 58`.
- Either way, **58**. Notice you never *needed* the individual numbers — a hallmark of a well-built Vieta's problem.

**Worked example (Vieta's on the original equation, no roots).** If `r` and `s` are the roots of `2x² − 8x + 5 = 0`, what is the value of `1/r + 1/s`?

- Don't solve the quadratic — those roots are ugly. Use `1/r + 1/s = (r + s)/(rs)`.
- Sum `r + s = −b/a = −(−8)/2 = 4`. Product `rs = c/a = 5/2`.
- So `1/r + 1/s = 4 / (5/2) = 4 × 2/5 = 8/5`.
- The whole problem collapses to two fractions because the question only ever asked for a symmetric combination of the roots. This is the **don't-find-the-roots** tactic: when the target is symmetric in `r` and `s`, Vieta's is almost always faster than the quadratic formula.

> **Recall check.** You're told `r` and `s` are roots of a quadratic and asked for `r² + s²`. Which two Vieta's quantities do you compute, and how do you combine them? (Compute the sum `r + s = −b/a` and product `rs = c/a`, then use `r² + s² = (r + s)² − 2rs`.)

**The discriminant (`b² − 4ac`) tells you how many real solutions:**

- `b² − 4ac > 0`: two distinct real roots.
- `b² − 4ac = 0`: exactly one real root (a repeated root).
- `b² − 4ac < 0`: no real roots.

The discriminant is the tool for any question phrased around the *number* of solutions, or that asks for a parameter making a quadratic have one solution / two solutions / no solution. You compute one number and read off the answer — you almost never solve the equation itself. A 700+ refinement worth knowing: a perfect-square discriminant signals **rational** roots (the trinomial factors over the integers/rationals), while a positive-but-non-perfect-square discriminant means two distinct *irrational* roots. The GMAT loves the "for what `k` is `x² + kx + 36` factorable" flavor, which is secretly asking when `k² − 144` is a perfect square.

**Example.** For what `k` does `x² − 10x + k = 0` have exactly one real solution? Discriminant = 0 → `100 − 4k = 0` → `k = 25`. The repeated root is `x = 5`.

**Worked example (discriminant as an inequality).** For what values of `k` does `x² + kx + 9 = 0` have two distinct real roots?

- Here `a = 1`, `b = k`, `c = 9`. Two distinct roots means discriminant `> 0`.
- `k² − 4(1)(9) > 0` → `k² − 36 > 0` → `k² > 36`.
- So `k > 6` **or** `k < −6`. The trap is reporting only `k > 6`; `k² > 36` is satisfied by large-magnitude negatives too. Write `k² > 36 ⇒ |k| > 6` to catch both branches.

**Worked example (discriminant as the deciding quantity).** For how many of the values `c = 7, 8, 9, 10` does `x² + 6x + c = 0` have two distinct real solutions?

- The condition for two distinct real solutions is `b² − 4ac > 0`, i.e. `36 − 4c > 0`, i.e. `c < 9`.
- `c = 7` and `c = 8` satisfy `c < 9` → two distinct roots each.
- `c = 9` gives discriminant `36 − 36 = 0` → one repeated root, not two.
- `c = 10` gives discriminant `36 − 40 < 0` → no real roots.
- So **2** of the four values produce two distinct real solutions. The lesson: translate a *number-of-solutions* question into the discriminant inequality first, then test the candidates against that single inequality. Don't get baited into solving for `x`.

> **Recall check.** A quadratic `ax² + bx + c = 0` has exactly one real solution. What does that tell you about `b² − 4ac`, and what does it tell you about the two roots? (`b² − 4ac = 0`; the two roots coincide — it's a repeated/double root, so the trinomial is a perfect square.)

**Factoring special forms.** These let you collapse expressions that look ugly. Memorize the table cold — recognition speed is the whole point.

| Pattern | Factorization |
|---|---|
| Difference of squares | `a² − b² = (a − b)(a + b)` |
| Perfect square trinomial (+) | `a² + 2ab + b² = (a + b)²` |
| Perfect square trinomial (−) | `a² − 2ab + b² = (a − b)²` |
| Sum of cubes | `a³ + b³ = (a + b)(a² − ab + b²)` |
| Difference of cubes | `a³ − b³ = (a − b)(a² + ab + b²)` |

The difference-of-squares identity is the one you'll use most, in two directions. Left to right it factors; right to left it lets you multiply ugly numbers fast. `99 × 101 = (100 − 1)(100 + 1) = 10000 − 1 = 9999` — no long multiplication. It also rescues expressions where a sum or difference of two squares hides inside a fraction. One more thing the test exploits: there is **no real factorization of a sum of squares** `a² + b²`. If you "factor" it, you've made an error — that's a deliberate trap on harder items.

**Worked example (difference of squares as a strategic shortcut).** Compute `(753² − 247²) / (753 − 247)`.

- Recognizing the numerator as a difference of squares: `753² − 247² = (753 − 247)(753 + 247)`.
- The fraction becomes `(753 − 247)(753 + 247) / (753 − 247) = 753 + 247 = 1000`.
- This is the **estimation/pattern-spotting** tactic: never square 753. If you reach for the calculator here, the question has already beaten you on time.

**Worked example (factoring to simplify before substituting).** If `x = 17`, evaluate `(x² − 1) / (x − 1)`.

- Factor the top as a difference of squares: `x² − 1 = (x − 1)(x + 1)`.
- Cancel: `(x − 1)(x + 1) / (x − 1) = x + 1 = 18`.
- The lesson: **simplify symbolically first, substitute second.** Plugging 17 in raw gives `288/16`, which still equals 18 but invites arithmetic slips. Factor, cancel, then evaluate.

> **Self-explanation prompt.** Before reading on, explain in your own words *why* the discriminant `b² − 4ac` controls the number of real roots. (Hint: it's the part of the quadratic formula `x = (−b ± √(b² − 4ac)) / 2a` that sits under the square root — if it's negative there's no real square root, if it's zero the `±` adds nothing so the two roots merge, and if it's positive the `±` splits them into two distinct values.)

**Shifting roots.** If the roots of `x² + bx + c = 0` are each increased by 2, the new equation's roots are the old roots + 2. The new equation is what you'd get by substituting `(x − 2)` for `x` in the original — you replace `x` with `(x minus the shift)`, which feels backwards until you see why: if the new root is "old + 2," then "new − 2" is an old root, so `(x − 2)` should satisfy the old equation.

**Example.** If shifting the roots of `x² + bx + c = 0` up by 2 gives `x² − 6x + 5 = 0`, find `b + c`.

New equation factors as `(x − 1)(x − 5) = 0`, roots 1 and 5. Original roots: `1 − 2 = −1` and `5 − 2 = 3`. By Vieta's: sum `= −b` → `−1 + 3 = 2 = −b` → `b = −2`. Product `= c` → `−1 × 3 = −3 = c`. So `b + c = −5`.

**Worked example (backsolving on a roots problem).** The equation `x² + bx + 12 = 0` has roots that are both integers, and one root is 3. What is `b`?

- **Plug in the known root:** `3² + 3b + 12 = 0` → `9 + 3b + 12 = 0` → `3b = −21` → `b = −7`.
- Sanity-check with Vieta's: product of roots `= 12`, and one root is 3, so the other is `12/3 = 4`. Sum `= 3 + 4 = 7 = −b`, so `b = −7`. Consistent.
- This is the **plugging-in / use-what-they-gave-you** tactic: a known root is a free substitution that turns an unknown coefficient into a one-line solve.

**Worked example (answer-choice backsolving when factoring stalls).** If `x` is a positive integer and `x² − x − 56 = 0`, what is `x`? Choices: (A) 6 (B) 7 (C) 8 (D) 9 (E) 14.

- You can factor — two numbers multiplying to −56, adding to −1: that's `−8` and `7`, so `(x − 8)(x + 7) = 0`, and the positive root is **8**, choice (C).
- But if the factoring isn't jumping out, **backsolve from the answers.** The positive root is what's asked, so test the middle-ish choice (C) 8: `64 − 8 − 56 = 0`. It works — done. Backsolving turns a quadratic into a few seconds of arithmetic and is your safety net whenever the factor pair hides.

**Worked example (hard, hidden quadratic in disguise).** If `x + 1/x = 5`, what is `x² + 1/x²`?

- This *looks* non-quadratic, but squaring exposes one. Square both sides: `(x + 1/x)² = 25`, which expands to `x² + 2·x·(1/x) + 1/x² = 25`, i.e. `x² + 2 + 1/x² = 25`.
- So `x² + 1/x² = 25 − 2 = 23`.
- Note the `2·x·(1/x) = 2` middle term — forgetting it is the classic slip. The takeaway: when you see a quantity and its reciprocal (or a variable and its square root), **squaring the sum** is the move, and the cross term is where points are lost. You never had to solve for `x` at all.

**Procedure to memorize — attacking any GMAT quadratic:**

1. **Read what's actually asked.** Roots? Sum/product of roots? Number of solutions? A simplified expression? A symmetric combination like `r² + s²` or `1/r + 1/s`? The question chooses your tool.
2. **Set it equal to zero** if it isn't already: get everything onto one side as `ax² + bx + c = 0`.
3. If asked for **sum or product of roots** (or any symmetric combination of them), stop and use **Vieta's** (`−b/a`, `c/a`) plus the identities. Don't factor.
4. If asked for the **number of real solutions** or a parameter that controls it, compute the **discriminant** `b² − 4ac` and read off `> 0`, `= 0`, `< 0`.
5. If you need the **actual roots**, **factor** (two numbers multiplying to `c` — or to `a·c` when `a ≠ 1` — and adding to `b`), remembering roots are the negatives of those numbers. If factoring stalls, **backsolve from the answer choices**.
6. **Verify with Vieta's**: your roots should multiply to `c/a` and sum to `−b/a`. This 5-second check catches sign errors.

**Common mistakes.**

- **Forgetting to set the equation to zero.** `x² + 3x = 10` does not factor as written; move the 10 over first: `x² + 3x − 10 = 0`.
- **Dropping a root.** A quadratic usually has *two* solutions. If a question says "the product/sum of the solutions," you need both. Don't stop at the first factor.
- **Sign flips on the roots.** `(x + p)(x + q) = 0` gives roots `−p` and `−q`, not `p` and `q`.
- **Mishandling `a ≠ 1`.** For `2x² + 5x − 3 = 0`, Vieta's gives sum `= −5/2` and product `= −3/2`, not `−5` and `−3`.
- **Losing the negative branch of a square root.** `k² = 36` means `k = 6` *or* `k = −6`; an inequality like `k² > 36` likewise splits into `k > 6` or `k < −6`.
- **Dropping the cross term when squaring.** `(x + 1/x)² = x² + 2 + 1/x²`, not `x² + 1/x²`. The `2ab` middle term is mandatory.
- **"Factoring" a sum of squares.** `a² + b²` has no real factorization — treating it like a difference of squares is a planted error.

**Trap to watch.** Vieta's gives sum `= −b/a`, not `+b/a`. The negative sign is the single most common slip. And when `a ≠ 1` (e.g., `2x² + 5x − 3 = 0`), you must divide by `a`: sum is `−b/a` and product is `c/a`, never just `−b` and `c`. On harder items the deeper trap is structural: the question is symmetric in the roots (asking for `r² + s²`, `1/r + 1/s`, or `(r − s)²`), and the test bets you'll grind out the quadratic formula when Vieta's plus one identity answers it in two lines.

**Recap.** A quadratic is `ax² + bx + c = 0` with at most two real roots. Three tools cover everything: **factor** when you need the roots (negatives of the multiply-to-`c`, add-to-`b` pair — or multiply-to-`a·c` when `a ≠ 1`), **Vieta's** when you need their sum (`−b/a`), product (`c/a`), or any symmetric combination, and the **discriminant** `b² − 4ac` when the question is about *how many* roots exist (`> 0` two, `= 0` one, `< 0` none). Memorize the special-form table — especially difference of squares, which both factors expressions and multiplies ugly numbers fast — and remember a sum of squares does not factor. Always read the question first to pick the tool, simplify symbolically before substituting, square the sum (and keep the cross term) when a variable meets its reciprocal, lean on backsolving and plugging in when factoring stalls, and verify roots with a quick Vieta's check.

## @algebraic-manipulation

Much of high-score Quant is symbolic manipulation — rewriting one expression into a more useful form so the answer falls out in a line or two. The GMAT rarely asks you to find x and y separately; it gives you *combinations* (`xy`, `x + y`, `x² + y²`) and asks for another combination. The trick is that these combinations are linked by a handful of identities. If you've memorized them, you skip the algebra entirely. If you haven't, you'll waste two minutes solving a system that was never meant to be solved — and on a section where you average roughly two minutes per question, that single misallocation can cost you a question elsewhere. Treat this topic as a set of *reflexes*, not derivations: the moment you see two symmetric quantities given and a third requested, your hand should already be reaching for an identity.

**The critical identities:**

- `(x + y)² = x² + 2xy + y²`
- `(x − y)² = x² − 2xy + y²`
- `(x + y)(x − y) = x² − y²`
- `x² + y² = (x + y)² − 2xy = (x − y)² + 2xy`
- `(x + y)² − (x − y)² = 4xy`
- `(x + y)² + (x − y)² = 2(x² + y²)`

Read the last three as *bridges*. The first three expand a product into a sum; the last three convert between the "squared-sum" world and the "sum-of-squares" world. Almost every manipulation problem is secretly asking you to walk across one of these bridges. A useful mental model: there are really only three quantities the test cares about — `x + y`, `x − y`, and `xy` — and from any two of them you can reconstruct everything else, including `x² + y²`, `x³ + y³`, and even the individual values if you ever truly need them. The identities are the conversion table between these quantities.

The single most common GMAT pattern: you're given `xy` and `x² + y²`, and asked for `(x + y)²` or `(x − y)²`. Use `(x + y)² = (x² + y²) + 2xy`.

**Worked example.** `xy = 6` and `x² + y² = 20`. Find `(x + y)²`.

`(x + y)² = x² + 2xy + y² = (x² + y²) + 2xy = 20 + 12 = 32`. One line. Notice you never had to find x or y — and you couldn't easily, since they're irrational here (`x = 3√2, y = √2`) but the problem doesn't need that. As a bonus, once you have `(x + y)² = 32` and `(x − y)² = (x² + y²) − 2xy = 20 − 12 = 8`, you could read off `x + y = √32` and `x − y = √8` and recover the variables — but resist the urge unless the question forces it.

**Worked example (harder, the "and also" twist).** `x + y = 7` and `xy = 10`. Find `x² + y²` and then `x³ + y³`.

- For `x² + y²`, walk the bridge `x² + y² = (x + y)² − 2xy = 49 − 20 = 29`.
- For `x³ + y³`, use the sum-of-cubes factorization `x³ + y³ = (x + y)(x² − xy + y²)`. You already have every piece: `(x + y) = 7`, and `x² − xy + y² = (x² + y²) − xy = 29 − 10 = 19`. So `x³ + y³ = 7 × 19 = 133`.

The lesson: when a cube shows up, factor it into a product of things you can build from `x + y` and `xy`. You almost never need the individual values. Memorize the companion form too: `x³ − y³ = (x − y)(x² + xy + y²)` — same structure, with the *plus* `xy` in the trinomial.

> **Recall check.** You're told `x − y = 3` and `xy = 4`. What is `x² + y²`? (Use `x² + y² = (x − y)² + 2xy = 9 + 8 = 17`.)

**Worked example (the symmetric trap — reciprocals).** If `x + 1/x = 5`, find `x² + 1/x²`.

This *looks* unfamiliar but it's the same identity with `y = 1/x`. Square both sides: `(x + 1/x)² = x² + 2·x·(1/x) + 1/x² = x² + 2 + 1/x²`. So `25 = x² + 1/x² + 2`, giving `x² + 1/x² = 23`. The cross term `2·x·(1/x)` collapses to `2` — that constant `2` is the whole point of the problem. Follow-up the GMAT loves: `x³ + 1/x³ = (x + 1/x)(x² − 1 + 1/x²) = 5 × (23 − 1) = 5 × 22 = 110`. Note the subtle middle term: it's `x² − 1 + 1/x²`, not `x² − xy + 1/x²` with the cross term written as `xy`, because `x·(1/x) = 1`, so the `−xy` in `x³ + y³`'s factorization becomes `−1`. Watching that substitution is exactly the kind of care that separates a 705 from a 745.

> **Self-explanation prompt.** Why does squaring `x + 1/x` always produce a clean `+2` in the middle, regardless of the value of x? (Because the cross term is `2 · x · (1/x)`, and `x · (1/x) = 1` for any nonzero x, so the middle term is forced to be exactly `2`.)

**An edge case worth one minute of your study time: sign ambiguity.** Suppose `x + 1/x = 5` and the question asks for `x − 1/x`. You'd compute `(x − 1/x)² = (x + 1/x)² − 4·x·(1/x) = 25 − 4 = 21`, so `x − 1/x = ±√21`. The square gives you a *magnitude*; the *sign* is not determined unless you know whether `x > 1/x`. This ambiguity is frequently the entire trap: knowing `(x − y)²` does **not** tell you `x − y`. Always ask, "does squaring lose a sign I needed?"

**Difference of squares as a computation shortcut.** The identity `a² − b² = (a − b)(a + b)` is the most useful one on the test, and not only for factoring. Use it to dodge ugly arithmetic.

**Worked example (estimation/structure tactic).** Compute `87² − 13²` without a calculator.

Don't square anything. `87² − 13² = (87 − 13)(87 + 13) = 74 × 100 = 7400`. Naming the tactic: **recognize the difference-of-squares structure** before you reach for brute force. The same move makes `99 × 101 = (100 − 1)(100 + 1) = 10000 − 1 = 9999` and `(√7 − √3)(√7 + √3) = 7 − 3 = 4` instant. This last form — rationalizing with a *conjugate* — is how the GMAT cleans up nested radicals; whenever you see `√a ± √b`, its conjugate `√a ∓ √b` is the natural partner.

> **Recall check.** Without squaring, what is `53² − 47²`? (`(53 − 47)(53 + 47) = 6 × 100 = 600`.)

**Exponent rules. Memorize these six:**

1. `xᵃ × xᵇ = xᵃ⁺ᵇ`
2. `xᵃ / xᵇ = xᵃ⁻ᵇ`
3. `(xᵃ)ᵇ = xᵃᵇ`
4. `(xy)ᵃ = xᵃ × yᵃ`
5. `x⁰ = 1` (for x ≠ 0)
6. `x⁻ᵃ = 1/xᵃ`

A seventh worth internalizing: a fractional exponent is a root, `x^(1/n) = ⁿ√x`, so `x^(a/b) = (ᵇ√x)ᵃ`. And the rule that has *no* shortcut: `xᵃ + xᵇ` does **not** simplify by adding exponents. Addition of powers requires **factoring**, not exponent arithmetic. One more landmine specific to rule 3: `(xᵃ)ᵇ = xᵃᵇ` (you *multiply*), whereas `xᵃ · xᵇ = xᵃ⁺ᵇ` (you *add*). Mixing these up — multiplying when you should add — is one of the most common silent errors on the test.

**Worked example.** `(x³)⁴ / x⁵`. Use rule 3: `(x³)⁴ = x¹²`. Use rule 2: `x¹² / x⁵ = x⁷`.

**Worked example (factoring a sum of powers — the move most students miss).** Simplify `(2¹⁰ + 2⁸) / 2⁸`.

You cannot "cancel" term by term. Factor the numerator: `2¹⁰ + 2⁸ = 2⁸(2² + 1) = 2⁸ · 5`. Now divide: `2⁸ · 5 / 2⁸ = 5`. The general principle: **when powers are added, factor out the smallest power**, then the rest is clean. Try the harder cousin: `(3ⁿ⁺¹ + 3ⁿ) = 3ⁿ(3 + 1) = 4 · 3ⁿ`.

**Worked example (harder factoring — mixed signs and a hidden difference of squares).** Simplify `(2ⁿ⁺² − 2ⁿ) / (2ⁿ⁺¹ + 2ⁿ)`.

Factor out the smallest power in numerator and denominator separately. Numerator: `2ⁿ(2² − 1) = 2ⁿ · 3`. Denominator: `2ⁿ(2 + 1) = 2ⁿ · 3`. The ratio is `(2ⁿ · 3)/(2ⁿ · 3) = 1`. Every term shared the base `2ⁿ`, so it cancelled cleanly and the whole intimidating expression collapsed to **1**. The discipline that wins here: factor *before* you panic about the exponents.

> **Recall check.** What is `(5ⁿ⁺² − 5ⁿ) / 5ⁿ`? (Factor: `5ⁿ(5² − 1)/5ⁿ = 25 − 1 = 24`.)

**Changing bases to compare exponents.** Whenever two expressions with different bases are set equal, rewrite them over a common base, then match exponents. This only works when each base is a power of one common number (2, 3, etc.).

**Worked example.** If `4^(a+1) = 8^a`, find a. Rewrite with base 2: `4 = 2²`, `8 = 2³`. So `2²⁽ᵃ⁺¹⁾ = 2³ᵃ` → `2(a + 1) = 3a` → `2a + 2 = 3a` → `a = 2`.

**Worked example (harder common-base, with a fraction base).** Solve `9^(x) · 27 = (1/3)^(2)`. Convert everything to base 3: `9 = 3²`, `27 = 3³`, `1/3 = 3⁻¹`. Left side: `3^(2x) · 3³ = 3^(2x + 3)`. Right side: `(3⁻¹)² = 3⁻²`. Match exponents: `2x + 3 = −2` → `2x = −5` → `x = −5/2`. The edge case to absorb: a *fraction* base like `1/3` is just a *negative* exponent of the same base. Don't let it scare you into a separate method.

**The backsolving fallback for exponent equations.** If you can't see the common base, plug the answer choices in — exponent equations usually have small integer (or simple fraction) solutions, so backsolving is fast.

**Worked example (backsolving, named).** `2^x + 2^x + 2^x + 2^x = 2¹⁶`. Solve for x. The slick path: the left side is `4 · 2^x = 2² · 2^x = 2^(x+2)`, so `x + 2 = 16` and `x = 14`. But if that factoring didn't occur to you under pressure, **backsolve**: the answer choices would be small integers; testing `x = 14` gives `4 · 2¹⁴ = 2² · 2¹⁴ = 2¹⁶`. Match. The named tactic — **backsolving** — turns a structure problem into four quick substitutions, and one of them will be the right answer because the GMAT guarantees the answer is among the five choices. The single trap here is the temptation to write `2^x + 2^x = 2^(2x)`; adding identical powers *multiplies the count*, it does not double the exponent. Four copies of `2^x` is `4 · 2^x`, full stop.

**Plugging in numbers for "which expression equals" problems.** When a question asks which of five algebraic expressions is equivalent to a given one, don't expand symbolically — **pick a concrete value**, evaluate the original and each choice, and keep the one that matches.

**Worked example (plug-in, named).** Which of the following equals `(x² − 9)/(x + 3)`? (A) `x − 3` (B) `x + 3` (C) `x − 9` (D) `x² − 3` (E) `3 − x`. The clean path is factoring: `(x − 3)(x + 3)/(x + 3) = x − 3`, answer (A). The **plug-in** path: let `x = 1`. Original `= (1 − 9)/(1 + 3) = −8/4 = −2`. Test choices: (A) `1 − 3 = −2` ✓, (B) `4`, (C) `−8`, (D) `−2` ✗ wait — (D) gives `1 − 3 = −2` too. A collision. Resolve it by **picking a second value**: let `x = 2`. Original `= (4 − 9)/(2 + 3) = −5/5 = −1`. (A) `2 − 3 = −1` ✓; (D) `4 − 3 = 1` ✗. (A) survives. The discipline: **always test a second number when two choices tie** — a single value can produce false matches. Smart number selection matters too: avoid `0`, `1`, and any value that makes a denominator vanish (here `x = −3`), because those special numbers cause the most false ties.

**Function evaluation.** `f(x) = ax + b` is linear; `f(x) = ax² + bx + c` is quadratic. To evaluate `f(3)`, substitute 3 for x throughout, parentheses and all.

**Worked example.** `f(x) = 2x² − 3x + 1`. Find `f(3) − f(1)`.

- `f(3) = 2(9) − 9 + 1 = 10`.
- `f(1) = 2 − 3 + 1 = 0`.
- Difference: 10.

**Composition of functions.** `f(f(x))` means apply f, then apply f to the *result* — inside out, never left to right.

**Worked example (composition with the inside-out trap).** `f(n) = n² − n`. Find `f(f(3))`. First `f(3) = 9 − 3 = 6`. Then `f(6) = 36 − 6 = 30`. A trap variant: `g(f(2))` with two different functions — evaluate the **inner** one first, always. Watch the parentheses on negatives too: if `f(x) = x² − x` and you need `f(−2)`, that's `(−2)² − (−2) = 4 + 2 = 6`, not `−4 − 2`. Substituting "throughout, parentheses and all" is what protects the sign.

**Procedure to memorize (for any "given combinations, find a combination" problem):**

1. **Write down what you have** and what you want, in terms of `x + y`, `x − y`, `xy`, `x² + y²`.
2. **Pick the bridge identity** that connects them — usually `(x ± y)² = x² ± 2xy + y²` or `x² + y² = (x ± y)² ∓ 2xy`.
3. **Substitute the known combinations** as whole blocks; do not solve for x and y individually.
4. For cubes or higher, **factor first** (`x³ ± y³`, or `xⁿ(…)`) so every piece reduces to known blocks.
5. For exponent equations, **convert to a common base**, then **match exponents**; if no common base is visible, **backsolve** the answer choices.
6. **Sanity-check** with a plugged-in value when the expression is unfamiliar, and **check for lost signs** whenever you took a square root.

**Common mistakes.**

- Squaring a sum and dropping the cross term: `(x + y)² ≠ x² + y²`.
- "Cancelling" inside a sum of powers: `(2¹⁰ + 2⁸)/2⁸ ≠ 2² + 1` term-by-term done wrong — you must factor `2⁸` first (the correct result *is* `2² + 1 = 5`, but only via factoring, not term cancellation).
- Adding exponents when bases are added: `xᵃ + xᵇ ≠ xᵃ⁺ᵇ`. Exponents add only across **multiplication**.
- Multiplying exponents when you should add, or vice versa: `(xᵃ)ᵇ = xᵃᵇ` but `xᵃ · xᵇ = xᵃ⁺ᵇ`.
- Writing `2^x + 2^x = 2^(2x)`; identical powers add as a *count* (`= 2 · 2^x`), they don't double the exponent.
- Comparing exponents without a common base — `2³ = 8` and `4¹` are equal, but you can't see it until both are base 2.
- Taking a square root and forgetting the lost sign: `(x − y)²` known does not fix `x − y`.
- In plug-in problems, trusting a single test value and missing a tie between two choices, or picking `0`/`1` and manufacturing a false tie.
- Reading `f(f(x))` left-to-right instead of inside-out, or dropping parentheses on a negative input.

**Trap to watch.** `(x + y)² ≠ x² + y²`. Students drop the `2xy` cross term constantly. Whenever you square a sum, write all three terms: `x² + 2xy + y²`. The companion trap: `√(x² + y²) ≠ x + y` — square roots do **not** distribute over addition either. The unifying truth behind both is that *squaring and square-rooting do not pass through a plus sign*; only multiplication and division pass cleanly through powers and roots.

**Recap.** Manipulation problems hand you combinations and ask for combinations; the six identities (especially `(x ± y)² = x² ± 2xy + y²` and difference of squares) are the bridges between them — substitute blocks, never solve for the variables. There are really only three primitive quantities, `x + y`, `x − y`, and `xy`, and everything else (including `x² + y²` and `x³ ± y³`) is built from two of them. For exponents, the six rules plus "convert to a common base, then match exponents" handle almost everything; add powers by factoring out the smallest one, and never confuse adding exponents (multiplication) with multiplying them (a power of a power). When structure won't reveal itself, two strategic tactics rescue you: **backsolve** the answer choices on exponent equations, and **plug in numbers** (a second value to break ties, and avoid `0`/`1`) on equivalence questions. Guard relentlessly against the dropped cross term and the lost sign after a square root — together they are the most expensive habits on this topic.

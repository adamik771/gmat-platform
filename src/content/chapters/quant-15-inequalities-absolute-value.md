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
  - id: working-with-inequalities
    type: reading
    title: "Working with several inequalities"
    check_question_ids: []
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

Inequalities work like equalities with one brutal exception: multiplying or dividing by a negative flips the inequality sign. This is the single most common algebra mistake on the GMAT, and it costs more 605-to-705 jumpers a correct answer than any other reflex. The good news is that the topic is narrow and rule-bound. Master the flip, learn to count integer solutions cleanly, respect the edge cases around reciprocals and unknown-sign denominators, and a whole band of "medium" inequality questions collapses into routine work — while the genuinely hard 700+ items become a matter of applying the same three or four disciplines without slipping.

**Operations that preserve the inequality direction:**

- Add or subtract any real number on both sides.
- Multiply or divide by a *positive* number on both sides.

**Operations that flip the inequality:**

- Multiply or divide by a *negative* number on both sides.
- Take the reciprocal of both sides if both are positive (or both negative).

There is a deeper principle hiding under that list. An inequality is a claim about *order* on the number line. Adding a constant slides every point the same distance, so order is preserved. Scaling by a positive number stretches the line but keeps left-of and right-of intact. Scaling by a negative number *reflects* the line through zero — left becomes right — which is exactly why the sign must flip. If you ever forget the rule, recover it from the reflection picture: negative multiplication mirrors the line, so the direction reverses. This single mental image is more reliable than memorizing "flip when negative," because it also explains the reciprocal rule (taking reciprocals reverses order only on a region where everything has the same sign) and warns you away from the unknown-sign traps later in this section.

**Worked example.** If `−3x + 9 > 0`, find x.

- Subtract 9: `−3x > −9`.
- Divide by −3 AND flip: `x < 3`.

Students who forget to flip write `x > 3` — exactly the wrong answer. A safer habit that *never* requires the flip rule: move the variable term to the side where its coefficient is positive. Starting from `−3x + 9 > 0`, add `3x` to both sides to get `9 > 3x`, then divide by positive 3 to get `3 > x`, i.e. `x < 3`. Same answer, no sign-flip risk. Many 705+ scorers adopt this "keep the variable positive" routine precisely to disarm the trap. Build it into muscle memory now, because under time pressure the flip is the first discipline to evaporate.

> **Recall check.** Without looking back: which two operations on an inequality force you to reverse the sign? (Multiplying/dividing both sides by a negative number, and taking reciprocals of both sides when both sides share the same sign.)

**Combining inequalities.** Two inequalities on the same variable can be intersected (AND) or unioned (OR).

- `x > 2` AND `x < 7` → `2 < x < 7` (one bounded interval — the overlap).
- `x < −3` OR `x > 5` → two disjoint intervals (everything outside the gap).

Be careful when *adding* two inequalities together. You may add two inequalities that point the same way: from `a > b` and `c > d` you get `a + c > b + d`. You may **not** subtract one inequality from another, and you may not multiply two inequalities unless you know all quantities are positive. This restriction shows up constantly, where a tempting pair of inequalities looks combinable but isn't. The reason subtraction fails is the same reflection principle: subtracting one inequality from another secretly negates it, and you can't negate an inequality without flipping it — so the "subtract straight across" move silently violates the flip rule.

**Worked example — adding inequalities (and why subtracting fails).** Given `3 < x < 8` and `1 < y < 4`, find the full range of `x − y`.

The instinct to subtract the y-inequality from the x-inequality is wrong. Instead, flip the y range first: `1 < y < 4` means `−4 < −y < −1` (multiply by −1, flip both signs). Now *add* the same-direction inequalities `3 < x < 8` and `−4 < −y < −1`:

- Lower bound: `3 + (−4) = −1`.
- Upper bound: `8 + (−1) = 7`.

So `−1 < x − y < 7`. The procedure to memorize: to bound a difference, negate the subtracted range, then add. Naively subtracting the bounds would have given `3 − 1 = 2` and `8 − 4 = 4`, i.e. a bogus `2 < x − y < 4`, missing most of the true range. Sanity-check the logic with extremes: x − y is largest when x is as big as possible (near 8) and y as small as possible (near 1), giving near 7; it is smallest when x is near 3 and y near 4, giving near −1. The endpoint reasoning confirms the algebra — a habit worth keeping, because it catches sign slips instantly.

**Worked example — products of ranges (positivity matters).** Given `2 < x < 5` and `3 < y < 6`, find the range of `xy`; then redo it for `−5 < x < −2` and `3 < y < 6`.

When *every* quantity in both ranges is positive, you may multiply the bounds directly: `2·3 < xy < 5·6`, so `6 < xy < 30`. But the moment a range straddles or sits below zero, that shortcut breaks. For `−5 < x < −2` (all negative) and `3 < y < 6` (all positive), xy is negative throughout, and the extreme product comes from pairing the *largest-magnitude* values: the most negative product is `(−5)(6) = −30` and the least negative is `(−2)(3) = −6`, giving `−30 < xy < −6`. The lesson: for products, test the four corner combinations of endpoints and take the min and max — never assume "low·low to high·high" unless you have verified all terms are positive. This corner-testing routine is the safe general method.

**Counting integer solutions.** The GMAT loves "how many integer values of x satisfy…" questions. The reliable method: solve to an exact interval, decide whether each endpoint is included (≤/≥) or excluded (</>), then count. Draw the number line if the endpoints are at all tricky.

**Worked example.** For how many integers x is `|2x + 1| < 9`?

`|2x + 1| < 9` means `−9 < 2x + 1 < 9`. Subtract 1: `−10 < 2x < 8`. Divide by 2: `−5 < x < 4`. Strict inequalities, so both endpoints are excluded. Integers strictly between −5 and 4: −4, −3, −2, −1, 0, 1, 2, 3. Eight values.

There is a counting shortcut worth memorizing. For integers strictly between two integers `a` and `b` (both excluded), the count is `b − a − 1`. Here `4 − (−5) − 1 = 8`. If instead the endpoints were *included* (≤ on both sides), the count is `b − a + 1`. If the bounds are mixed — one inclusive, one exclusive — the count is exactly `b − a`. Mixing these up by one is the classic off-by-one error, so always re-anchor on whether each inequality is strict. When in doubt on a short interval, list the integers; the formulas are speed, but the list is truth.

> **Recall check.** Quick: how many integers satisfy `−5 ≤ x ≤ 4`? And how many satisfy `−5 < x < 4`? (Inclusive: `4 − (−5) + 1 = 10`. Exclusive: `4 − (−5) − 1 = 8`.)

**Compound inequalities like `2 < |x − 3| < 7`.** A double-bounded absolute value splits into the *intersection* of two simpler conditions — one giving "far enough from the center" and one giving "close enough."

- `|x − 3| > 2` means `x − 3 > 2` OR `x − 3 < −2`, i.e. `x > 5` OR `x < 1`.
- `|x − 3| < 7` means `−7 < x − 3 < 7`, i.e. `−4 < x < 10`.
- Intersect both conditions: `−4 < x < 1` OR `5 < x < 10`.
- Integer values in `−4 < x < 1`: −3, −2, −1, 0 (4 values). In `5 < x < 10`: 6, 7, 8, 9 (4 values). Total: 8.

Geometrically this is the set of points whose distance from 3 is between 2 and 7 — two symmetric "rings" on either side of 3. Picturing it as distance-from-3 is faster than algebra once you trust the image. The center is whatever value makes the inside zero (here x = 3); "greater than" gives the outside of a band, "less than" gives the inside.

**Worked example — backsolving an inequality trap.** A question asks: the integer x satisfies `2 < |x − 3| < 7`; which of the following could be the value of x? With answer choices (A) 1 (B) 4 (C) 5 (D) 7 (E) 11.

Here the strategic move is **plugging in the answer choices** (backsolving) rather than re-deriving the interval — five quick distance checks beat re-solving the compound inequality under time pressure. Compute `|choice − 3|` and demand it land strictly between 2 and 7:

- (A) `|1 − 3| = 2`. Not `> 2` (strict). Reject.
- (B) `|4 − 3| = 1`. Too small. Reject.
- (C) `|5 − 3| = 2`. Again exactly 2, not strictly greater. Reject.
- (D) `|7 − 3| = 4`. Strictly between 2 and 7. **Works.**
- (E) `|11 − 3| = 8`. Too big. Reject.

Answer: (D). Note how (A) and (C) are *traps* set precisely for students who use ≤ where the problem says <. Backsolving plus strict-endpoint vigilance kills both. As a rule, whenever a question hands you finite answer choices and asks "which could be," test the choices — it converts a derivation into five arithmetic checks and sidesteps every sign-flip and endpoint hazard at once.

**Worked example — the hard one: variables in denominators.** Solve `(2x + 1)/(x − 3) > 1` for real x.

The killer trap: do **not** cross-multiply by `(x − 3)`, because you don't know its sign — if `x − 3` is negative, cross-multiplying flips the inequality and you'll botch half the line. Instead, move everything to one side and combine over a common denominator:

`(2x + 1)/(x − 3) − 1 > 0`  →  `[(2x + 1) − (x − 3)] / (x − 3) > 0`  →  `(x + 4)/(x − 3) > 0`.

Now a quotient is positive exactly when numerator and denominator share the same sign. Critical points are `x = −4` (numerator zero) and `x = 3` (denominator zero, excluded). Test each region:

- `x < −4` (try −5): `(−1)/(−8) = +`. Works.
- `−4 < x < 3` (try 0): `(4)/(−3) = −`. Fails.
- `x > 3` (try 4): `(8)/(1) = +`. Works.

Answer: `x < −4` OR `x > 3`. Note that x = −4 is excluded (the expression equals 0 there, and we need strictly greater than 0) and x = 3 is excluded (denominator undefined). The full sign-chart machinery behind this lives in the next section, but the lesson here is unconditional: **never multiply an inequality by an expression of unknown sign.** Subtract, combine, and analyze the single fraction instead.

> **Self-explanation prompt.** Explain in one sentence why you cannot cross-multiply `(2x + 1)/(x − 3) > 1` directly. (Because the sign of `x − 3` is unknown; multiplying by a possibly-negative quantity would flip the inequality in some cases and not others, so a single cross-multiplied line cannot represent the truth across the whole number line.)

**Worked example — estimation under squaring.** Is `x² < x` true? Find all x.

A common reflex is "always true since squaring shrinks things," but that only holds on a narrow band. Rewrite: `x² − x < 0`  →  `x(x − 1) < 0`. A product of two factors is negative only when they have opposite signs, which happens strictly between the roots: `0 < x < 1`. So `x² < x` *only* for x in `(0, 1)` — proper fractions. For `x = 0`, `x = 1`, negatives, or x greater than 1, the claim fails (e.g. `x = 2` gives `4 < 2`, false; `x = −1` gives `1 < −1`, false). This "fractions behave backwards" fact — squaring a number between 0 and 1 makes it *smaller* — is a frequent test lever. Whenever a problem tells you `0 < x < 1`, immediately recall the full ladder `x² < x < sqrt(x)`. The general technique on display here is **plugging in numbers from each regime** — a negative, a value in (0,1), and a value above 1 — to map where a claim holds; it turns an abstract inequality into three quick arithmetic tests.

> **Recall check.** For `0 < x < 1`, order `x`, `x²`, and `sqrt(x)` from smallest to largest. (`x² < x < sqrt(x)` — squaring shrinks a proper fraction, taking the square root grows it.)

**Trap to watch.** Reciprocals flip inequalities only when both sides have the same sign. `2 < 5` gives `1/2 > 1/5` (both positive, flips). But `−2 < 5` does NOT give `−1/2 > 1/5`; when the signs differ, the reciprocal relationship is not clean (−1/2 is in fact *less* than 1/5). This trap is frequent on the GMAT, where you're told something like `a < b` and asked about `1/a` versus `1/b` — without knowing the signs of a and b, the relationship can't be pinned down. The instant you see a reciprocal comparison, your first question must be "do I know the signs?"; if not, the comparison isn't settled.

**Trap to watch — squaring an inequality.** You may square both sides only when both sides are known nonnegative. `−3 < 2` is true, but squaring gives the false `9 < 4`. The negative left side poisons the operation, exactly as with reciprocals. So treat squaring like reciprocal-taking: legal only on a same-sign (here, nonnegative) region, and never as a reflex to "clear" a square root or absolute value without first checking signs.

**Procedure to memorize — solving any linear or simple inequality:**

1. Clear fractions only by multiplying by positive quantities; if a denominator's sign is unknown, do not multiply by it — combine over a common denominator instead.
2. Collect the variable on the side where its coefficient is positive (this sidesteps the flip rule entirely).
3. If you must divide by a negative, divide and *flip the sign in the same stroke* so you never forget.
4. Write the result as an exact interval and label each endpoint included (≤/≥) or excluded (</>).
5. If counting integers, apply `b − a + 1` (both endpoints included), `b − a − 1` (both excluded), or `b − a` (mixed); recount by listing whenever the interval is short or the endpoints feel slippery.

**Common mistakes.**

- Forgetting to flip when dividing/multiplying by a negative — the headline error.
- Cross-multiplying by a variable expression of unknown sign.
- Off-by-one when counting integers because the strict/inclusive status of an endpoint was misread.
- Subtracting two inequalities, or multiplying inequalities whose terms aren't all positive (test the four corner products instead).
- Assuming reciprocals always flip, ignoring the same-sign condition — and the parallel error of squaring both sides when a side could be negative.
- Treating `x² < x` as universally true rather than only on `(0, 1)`.

**Recap.** Inequalities behave like equations except that a negative multiplier reflects the number line and flips the sign. Keep the variable's coefficient positive to dodge that flip, combine fractions rather than cross-multiplying when a denominator's sign is unknown, and translate every solved inequality into an exact interval before counting integers with the `+1`/`−1`/`exact` rules. To bound a difference, negate-then-add; to bound a product, test the corners unless every term is positive. Backsolving cracks "which value could x be" questions, plugging in `0 < x < 1` exposes the `x² < x < sqrt(x)` lever, and the same-sign condition guards both the reciprocal and the squaring traps. Get those reflexes automatic and the GMAT's favorite inequality traps stop being traps.

## @polynomial-inequalities-wavy-line

When an inequality has a polynomial (like `x^2 − 5x + 6 > 0`) or a rational expression (like `(x − 2)(x + 3) / (x − 1) < 0`), you can't just "isolate x" — the sign of the expression flips at each root. The **wavy-line method** (also called the sign-chart method) solves every polynomial or rational inequality in under 30 seconds once you know the technique. It's the single highest-leverage 705+ trick in algebra, and it is *bulletproof*: where slower test-takers reason their way region by region (and make a sign error somewhere in the middle), you draw one snaking curve and read the answer straight off.

The reason this matters so much on the GMAT Focus Quant section is that the alternatives are slow and error-prone. You *could* test a sample value in every region — but a cubic has four regions, and on a timed section you will eventually plug a number into the wrong factor. The wavy line replaces four arithmetic checks with one curve and one rule (alternate, except bounce on even powers). Master it and an entire family of "hard" questions becomes mechanical. It also shows up disguised: a question like "Is `x^2 > x`?" is secretly asking "where is `x(x − 1) > 0`?" — and the test writers count on you to *not* see the disguise.

**The four-step recipe.**

1. **Factor** the expression completely and force every factor into the form `(x − r)`, where `r` is a real root. This includes flipping signs so the leading coefficient inside each factor is positive — `(2 − x)` should become `−(x − 2)`, and you track that stray minus sign separately.
2. **Mark the roots on a number line** — these are the places where the expression equals zero (numerator roots) or is undefined (denominator roots). Use a filled dot for "included" and an open dot for "excluded."
3. **Draw a wavy line** starting from the top-right (positive sign) and crossing through each root, alternating sign each time. If a factor appears an even number of times (e.g., `(x − 3)^2`), **bounce off** that root instead of crossing — the sign doesn't change there.
4. **Read the answer**: the expression is positive where the wavy line is above the axis, negative where below. Pick whichever matches the inequality, then fix the endpoints (filled vs. open).

Before the worked examples, internalize the one prerequisite that breaks most attempts: **you can only read sign off a factored form, never off an un-factored one.** `x^2 − 5x + 6 > 0` tells you nothing region-by-region until it becomes `(x − 2)(x − 3) > 0`. Factoring first is not optional.

**Worked example.** *(easy, "always start here")* Solve `x^2 − 5x + 6 > 0`.

Factor: `(x − 2)(x − 3) > 0`. Roots at 2 and 3.

Mark the number line. Starting from the far right (where both factors are positive, so the product is positive), the sign goes:

    (+)   2   (−)   3   (+)
    ←————○————————○————→

We want where the expression is **positive** (strictly `> 0`, so the roots themselves are excluded — open dots). Answer: `x < 2` OR `x > 3`.

Note the shape: a "smiley" upward parabola is positive *outside* its roots and negative *between* them. That is the entire story of every `x^2 + bx + c > 0` problem, and the wavy line reproduces it automatically.

**Worked example.** *(medium, rational with three factors)* Solve `(x − 1)(x + 2) / (x − 4) ≥ 0`.

Roots at 1, −2, 4. But 4 is a *denominator* root — the expression is undefined there, so the answer can **not** include `x = 4` (open dot). The numerator roots (1 and −2) give equality, and since the inequality is `≥`, not strict `>`, those ARE included (filled dots).

Sign chart from the far right: all three factors positive → overall positive. Moving leftward, the sign flips at each root:

    (−) −2 (+)  1  (−)  4  (+)
    ←————•——————•——————○————→

(Open circle at 4 indicates "excluded"; filled dots at −2 and 1 indicate "included.")

We want positive-or-zero. Answer: `−2 ≤ x ≤ 1` OR `x > 4`.

The crucial habit here: **a denominator root is a root for the wavy line but never an endpoint of the solution.** It still flips the sign as you cross it — it just gets an open dot no matter which inequality symbol you have.

> **Recall check.** A denominator root and a numerator root both flip the sign of the wavy line as you cross them — true or false? And which kind can be *included* in the answer? (True, both flip the sign; only a numerator root can be included, and only when the inequality is non-strict.)

**Worked example.** *(medium-hard, the even-power bounce)* Solve `(x − 1)^2(x + 3) < 0`.

Roots at 1 (a double root, even power) and −3. Start from the far right and pick a concrete test value to anchor the sign — say `x = 10`: `(10 − 1)^2(10 + 3) = 81 × 13 = +1053`, positive.

Now walk leftward. Crossing 1, the factor `(x − 1)^2` has **even** power, so the sign **bounces** — it stays positive. Crossing −3, the factor `(x + 3)` has odd power (just 1), so the sign **flips** — it goes negative.

    (−)  −3  (+)  1  (+)
    ←————•————————•————→

We want where the expression is **negative**. That is only the leftmost region. Answer: `x < −3`.

The double root at 1 is the entire point of this problem. A student who forgets the bounce will alternate naively — `(−)(+)(−)` — and wrongly include the interval between −3 and 1. **Anchoring with a real test value (`x = 10`) before drawing protects you**: if your curve disagrees with the number you computed, your curve is wrong.

One edge case worth noticing: had the inequality been `(x − 1)^2(x + 3) ≤ 0` (non-strict), the isolated point `x = 1` would *also* be a solution, because there the expression equals zero. The bounce region doesn't change, but you'd append "or `x = 1`" — a single point answer that trap questions love to omit. Always ask: does my inequality allow equality, and if so, does the bounce point itself satisfy it?

**Why bounces happen, geometrically.** A factor like `(x − 1)^2` is a square — it is never negative. As `x` passes through 1, that factor dips to zero and climbs right back up, never going negative. So it cannot flip the product's sign. Odd powers (`(x − 1)^1`, `(x − 1)^3`) *do* go from negative to positive through their root, so they flip. Rule of thumb: **odd power crosses, even power bounces.**

> **Self-explanation prompt.** Why does an even-power factor bounce while an odd-power factor crosses? If you can say "an even power is a perfect square so it's always ≥ 0 and never changes sign, while an odd power passes from negative through zero to positive," you've understood the mechanism, not just memorized a rule — and you'll never mishandle a `(x − a)^2` or `(x − a)^3` again.

**Worked example.** *(hard, hidden factoring + backsolving check)* Solve `2x^2 − 3x − 2 ≤ 0` and find the number of **integer** solutions.

First factor. Look for two numbers multiplying to `2 × (−2) = −4` and summing to `−3`: those are `−4` and `+1`. Split the middle term: `2x^2 − 4x + x − 2 = 2x(x − 2) + 1(x − 2) = (2x + 1)(x − 2)`. So we need `(2x + 1)(x − 2) ≤ 0`.

Force each factor to `(x − r)` form: `(2x + 1) = 2(x + 1/2)`. The constant `2` is positive, so it doesn't affect signs. Roots at `−1/2` and `2`.

Sign chart from the far right (both factors positive → positive):

    (+)  −1/2  (−)  2  (+)
    ←————————•————————•————→

We want `≤ 0` (negative-or-zero), so take the **middle** region including endpoints: `−1/2 ≤ x ≤ 2`. The integers in `[−1/2, 2]` are `0, 1, 2` → **3 integer solutions**.

Here's the strategic backstop, named: **backsolving / plug-in verification.** If you weren't sure about the boundaries, test the candidate integers directly. `x = 0`: `2(0) − 0 − 2 = −2 ≤ 0` ✓. `x = 2`: `8 − 6 − 2 = 0 ≤ 0` ✓ (equality is allowed). `x = −1`: `2 + 3 − 2 = 3`, not `≤ 0`, correctly excluded. `x = 3`: `18 − 9 − 2 = 7`, excluded. Three integers confirmed without redrawing anything.

> **Recall check.** When the leading coefficient inside a factor is positive (like the `2` in `2(x + 1/2)`), does that constant affect the sign chart? (No — a positive constant multiplier never changes the sign of the product, so you ignore it. Only the factor's *root* matters. A negative constant, though, flips signs and must be pulled out front.)

**Worked example.** *(hard, cubic with a sign-flipped leading factor — the trap most people fail)* Solve `(3 − x)(x + 1)(x − 5) > 0`.

The trap: `(3 − x)` is written "backwards." Rewrite it as `−(x − 3)`. Pull the minus sign out front:

`(3 − x)(x + 1)(x − 5) = −(x − 3)(x + 1)(x − 5)`.

Dividing both sides by `−1` flips the inequality: `(x − 3)(x + 1)(x − 5) < 0`.

Now all factors are in standard form. Roots at `−1, 3, 5`. Sign chart from the far right (all three positive → positive):

    (−)  −1  (+)  3  (−)  5  (+)
    ←————○————————○————————○————→

We now want **negative** (because the inequality flipped to `<`). The negative regions are the leftmost and the one between 3 and 5. Answer: `x < −1` OR `3 < x < 5`.

If you had skipped the rewrite and naively alternated starting positive on the right, you'd get the exact opposite (and wrong) answer. **Whenever a factor has a negative leading coefficient, fix it before you draw — never sign-chart a `(c − x)` factor as if it were `(x − c)`.** Alternatively, if counting flips is uncomfortable, leave `(3 − x)` alone but remember that *it* is positive to the *left* of 3 and negative to the *right* — the mirror image of a standard factor. Most people find the "rewrite and flip the inequality" route far less error-prone, so default to it.

**Worked example.** *(very hard, rational inequality the GMAT actually disguises)* Solve `(x + 2)/(x − 3) ≤ 1`.

This is the trap-rich format. The instinct is to multiply both sides by `(x − 3)` — but its sign is unknown, so multiplying could flip the inequality the wrong way. Instead, **move everything to one side and combine into a single fraction:**

`(x + 2)/(x − 3) − 1 ≤ 0`
`[(x + 2) − (x − 3)] / (x − 3) ≤ 0`
`(x + 2 − x + 3)/(x − 3) ≤ 0`
`5/(x − 3) ≤ 0`.

Now sign-chart `5/(x − 3)`. The numerator is the constant `5` (always positive, no root), and the only root is the denominator root at `x = 3` (open dot — undefined there, and also `5/(x − 3)` is never exactly zero, so the `≤` can't be satisfied *at* any root anyway). The fraction `5/(x − 3)` is negative exactly when `x − 3 < 0`, i.e. `x < 3`.

    (−)  3  (+)
    ←——————○——————→

We want `≤ 0`, which is the negative region. Answer: `x < 3`. Note `x = 3` is excluded (undefined) and there is *no* included endpoint because the expression never equals zero. **Verify by plug-in:** `x = 0` gives `2/(−3) = −2/3 ≤ 1` ✓; `x = 4` gives `6/1 = 6 ≤ 1` ✗ (correctly excluded); `x = 3` is undefined (correctly excluded). The naive "multiply across" approach would have produced `x + 2 ≤ x − 3`, i.e. `2 ≤ −3`, which is false everywhere — a completely wrong empty answer. This single example is why the move-to-one-side discipline is non-negotiable for rational inequalities.

> **Recall check.** You face `(x + 2)/(x − 3) ≤ 1`. What is the first move, and what must you *never* do? (First, subtract 1 and combine into one fraction so the right side is 0; never multiply both sides by `(x − 3)`, because its unknown sign could flip the inequality the wrong way.)

**A procedure to memorize (write it on your scratch pad).**

1. Move everything to one side so the inequality reads `expression  ?  0`. For rationals, combine into a *single* fraction — never multiply across by a factor of unknown sign.
2. **Factor completely.** Force every factor to `(x − r)` with a positive `x`-coefficient; pull out any leading minus and flip the inequality once per minus.
3. **Plot roots**, smallest to largest. Filled dot if the value is allowed (non-strict inequality AND the root comes from the numerator); open dot if disallowed (strict inequality, OR the root comes from a denominator).
4. **Start at the far right with a `+` sign.** (You can verify by plugging a large number into the factored form.)
5. **Sweep leftward**, alternating sign at each odd-power root and **bouncing** (no change) at each even-power root.
6. **Select regions** matching your inequality (positive regions for `> 0`/`≥ 0`, negative for `< 0`/`≤ 0`), check for any isolated equality points at bounce roots, and assemble the answer, joining disjoint pieces with "OR."

**Why the method works.** The sign of a product of factors is determined by how many *negative* factors there are: an even count gives a positive product, an odd count gives a negative one. Each factor `(x − r)` changes sign exactly at `r`. So as you walk left-to-right on the number line, each simple (odd-power) root flips the count's parity and therefore the product's sign. An even-power factor (double, quadruple) passes through zero but doesn't change sign — both sides of its root are the same sign — so it bounces. That's the whole engine. A rational expression `N/D` behaves exactly like the product `N × D` for sign purposes (since `D` and `1/D` always share a sign), so denominator roots flip the curve just like numerator roots — they merely get open dots.

**When to use the wavy line vs. solving directly.** If the inequality has ≥2 roots or any rational expression, always wavy-line it. If it's linear (one root), just solve directly — `3x − 6 > 0` is faster as `x > 2`. Quadratics of the form `x^2 + bx + c ? 0` are always wavy-line candidates. And remember the upward-parabola shortcut for clean quadratics: positive *outside* the roots, negative *between* them — you can often skip drawing entirely.

**Compound inequalities on the GMAT.** The wavy-line method also pairs with compound conditions like `2 < |x − 3| < 7` (see the absolute-value section for that approach — it's faster than polynomial factoring for abs-value). But for polynomial and rational inequalities, the wavy line is the fastest, most reliable tool you own.

**Trap to watch.** When the expression includes `1/(x − a)`, the value `x = a` is **excluded** from the solution (division by zero is undefined). Don't fill in that dot — and don't forget it as a sign-flip point either; it still flips the curve, it just gets an open circle. Numerator roots may be included or excluded depending on whether the inequality is strict.

**Trap to watch (the squaring/clearing shortcut that backfires).** It is tempting to "clear the denominator" in `(x − 1)/(x − 4) ≥ 0` by multiplying both sides by `(x − 4)`. **Do not** — because `(x − 4)` can be negative, multiplying by it may flip the inequality, and you won't know which way without already knowing the sign of `x − 4`. The wavy line sidesteps this entirely: keep the rational form, mark both roots, sweep. This is precisely why the method is safer than algebraic clearing.

**Trap to watch (the hidden disguise).** "Is `x^2 > x`?" is *not* answered by "is `x > 1`?" — that's the mistake the question is built to catch. Rearrange to `x^2 − x > 0`, i.e. `x(x − 1) > 0`, roots at 0 and 1. The wavy line gives positive *outside* the roots: `x < 0` OR `x > 1`. So `x^2 > x` is true for negative `x` too (e.g. `x = −2`: `4 > −2` ✓), and false on the whole interval `0 ≤ x ≤ 1`. Never divide an inequality by a variable whose sign you don't know — factor and sign-chart instead.

**Common mistakes.**

- **Forgetting to factor first** and trying to read signs off `x^2 − 5x + 6` directly. You can't; factor to `(x − 2)(x − 3)` first.
- **Treating a double root as a crossing.** `(x − 1)^2(x + 3)` bounces at 1; alternating naively includes a wrong interval.
- **Filling a denominator root.** `x = 4` in `.../(x − 4)` is always an open dot, regardless of `≥` vs `>`.
- **Ignoring a flipped factor.** `(3 − x)` is `−(x − 3)`; failing to flip the inequality once gives the exact complementary (wrong) answer.
- **Mismatching strictness at the endpoints.** `≤`/`≥` include numerator roots (filled), `<`/`>` exclude them (open).
- **Clearing a denominator by multiplying across.** Multiplying by `(x − a)` of unknown sign can flip the inequality the wrong way — keep it rational, combine into one fraction, and sign-chart instead.
- **Dividing an inequality by a variable.** "`x^2 > x` so `x > 1`" drops the entire negative-`x` solution set. Factor to `x(x − 1) > 0` and sweep.
- **Missing an isolated equality point.** With `(x − 1)^2(x + 3) ≤ 0`, `x = 1` is a lone solution (the expression equals 0 there); strict `<` would exclude it.

**Recap.** Move to one side (combining rationals into a single fraction), factor completely, fix any backwards or negative-leading factors (flipping the inequality), plot roots with the right open/filled dots, start positive at the far right, sweep left alternating signs while **bouncing on even powers**, then read off the regions that match your inequality — checking for lone equality points at bounce roots. Anchor with a single test value when in doubt, and remember the non-negotiables: **factor before you read sign**, **even powers bounce while odd powers cross**, and **never multiply or divide an inequality by something of unknown sign.** Internalize those and every polynomial or rational inequality on the GMAT collapses into a 30-second mechanical exercise.

## @absolute-value

Absolute value measures **distance from zero** on the number line. `|x| = 3` means x sits 3 units from zero, so x = 3 or x = −3. That single geometric idea — distance, never sign — is the engine behind every absolute-value equation and inequality on the GMAT. Because distance can be reached from either direction, almost every absolute-value statement **splits into two cases**, and the entire topic is really about doing that split cleanly and then checking your work against the never-negative rule. The hardest problems in this section never test the splitting mechanically; they test whether you remember to *isolate first*, *screen for negatives*, and *verify after squaring*. Get those three reflexes automatic and absolute value becomes one of the most reliable point-sources on the Quant section.

Keep one fact bolted down before anything else: `|expression|` is **always ≥ 0**. It can equal zero (when the inside is zero) and it can be any positive number, but it can never be negative. Half the traps in this section are just that rule wearing a disguise — a condition that *looks* like it constrains x but actually tells you nothing, or one that looks solvable but has no solution at all. Both "no solution" and "always true" are decisive outcomes, so reading the never-negative rule correctly is often the whole problem.

**The two-case recipe for `|expression| = k` (with `k ≥ 0`):**

- Case 1: `expression = k`.
- Case 2: `expression = −k`.

Solve both cases separately, then collect the solutions. The reason there are exactly two cases: the quantity inside the bars could itself be positive or negative, and both possibilities land the same distance k from zero. Think of it as asking "what could have been inside?" — anything whose distance from zero is k, and there are exactly two such numbers, +k and −k.

**Worked example.** Solve `|x − 4| = 7`.

- Case 1: `x − 4 = 7` → `x = 11`.
- Case 2: `x − 4 = −7` → `x = −3`.

Sum of solutions: `11 + (−3) = 8`. **Shortcut to memorize:** for `|x − a| = b`, the two solutions are symmetric about a (the value that zeroes the inside), so they are `a + b` and `a − b`, and their **sum is always 2a**. Here a = 4, so sum = 8 with no arithmetic on the individual roots. The midpoint of the two solutions is a; the half-distance to each is b. This symmetry is not a curiosity — GMAT questions love to ask for the *sum* or *product* of solutions precisely because students who solve case-by-case waste time, while students who see the symmetry answer in one line.

**Worked example.** Solve `|2x − 7| = 11`.

- Case 1: `2x − 7 = 11` → `2x = 18` → `x = 9`.
- Case 2: `2x − 7 = −11` → `2x = −4` → `x = −2`.

Sum: `9 + (−2) = 7`. The sum shortcut still works once you find the value that zeroes the inside: `2x − 7 = 0` gives `x = 7/2`, and the solutions are symmetric about it, so sum = `2 × 7/2 = 7`. The product, if a question asks, is `9 × (−2) = −18`. Notice the symmetry center is no longer a tidy integer here; the midpoint of 9 and −2 is indeed 3.5, confirming the structure holds whenever there is a coefficient on x — you just divide the "zeroing value" out.

> **Recall check.** `|x − a| = b` (with b > 0) has solutions that sum to what, and that are centered on what point? (Sum = 2a; centered on a, each a distance b away.)

**Worked example — isolate before you split.** Solve `3|x + 2| − 5 = 10`.

The single most common error here is splitting into cases while the absolute value still has stuff stuck to it. **You must isolate the bars first.**

- Add 5: `3|x + 2| = 15`.
- Divide by 3: `|x + 2| = 5`. Now — and only now — split.
- Case 1: `x + 2 = 5` → `x = 3`.
- Case 2: `x + 2 = −5` → `x = −7`.

Sum = `3 + (−7) = −4`, which matches 2a with a = −2. If you had split before isolating, you'd have written `3(x + 2) − 5 = 10` and `3(x + 2) − 5 = −10`, which is wrong — the bars wrap only `x + 2`, not the whole left side. A useful mental flag: the bars are like parentheses you are not allowed to break open until the expression *outside* them is gone. Anything multiplied onto, added to, or subtracted from the absolute value must be peeled away first.

**Worked example — absolute value equal to a variable expression (hard).** Solve `|x + 6| = 2x`.

Here the right side is not a constant; it contains x, so before splitting you must respect that the left side is ≥ 0, which forces `2x ≥ 0`, i.e. `x ≥ 0`. Split anyway, then filter:

- Case 1: `x + 6 = 2x` → `6 = x` → `x = 6`. Check: `x ≥ 0` holds, and `|6 + 6| = 12 = 2(6)`. Valid.
- Case 2: `x + 6 = −2x` → `3x = −6` → `x = −2`. But `x = −2` violates `x ≥ 0`, and indeed `|−2 + 6| = 4` while `2(−2) = −4`; a distance cannot equal −4. Reject.

Only solution: `x = 6`. **The lesson:** whenever a variable sits on the side opposite the bars, the splitting still produces two candidates, but the never-negative rule silently disqualifies any candidate that makes the bar-equal side negative. This is the same mechanism that creates extraneous roots when squaring — you will see it again below.

**Absolute value inequalities.** Two patterns cover everything, both requiring `k > 0`:

- `|expr| < k` translates to `−k < expr < k`. "Less than" → a single **bounded** interval (a region close to zero).
- `|expr| > k` translates to `expr > k` **OR** `expr < −k`. "Greater than" → two **disjoint** intervals (regions far from zero).

**Memory trick: "less thAND, greater thOR."** Less-than inequalities become AND (one bounded chunk); greater-than inequalities become OR (two pieces shooting outward). The `≤` and `≥` versions work identically — just use closed endpoints.

**Worked example.** Solve `|2x + 1| ≤ 9`.

This is a "less thAND," so write it as one bounded compound inequality:

`−9 ≤ 2x + 1 ≤ 9`.

Subtract 1 across all three parts: `−10 ≤ 2x ≤ 8`. Divide by 2 (positive, so signs don't flip): `−5 ≤ x ≤ 4`. One interval, exactly as the less-than rule predicts. (If the question asks for the number of integer solutions, count `−5` through `4` inclusive: `4 − (−5) + 1 = 10`.)

> **Recall check.** Translate "less thAND, greater thOR" into the two templates. (`|expr| < k` → `−k < expr < k`, one interval; `|expr| > k` → `expr > k` OR `expr < −k`, two intervals.)

**Worked example — the greater-than split.** Solve `|x − 3| > 5`.

"Greater thOR," so it breaks into two outward pieces:

- `x − 3 > 5` → `x > 8`, OR
- `x − 3 < −5` → `x < −2`.

Solution: `x < −2` OR `x > 8`. Geometrically, this is every point **more than 5 units** from 3 — and 3 ± 5 gives the boundaries −2 and 8. Notice you do **not** write a single chained inequality here; `−2 > x > 8` would be nonsense (no number is both below −2 and above 8). Greater-than never chains.

**Worked example — compound "between" inequality (hard).** Solve `2 < |x − 3| < 7`.

This double inequality says the distance from x to 3 is **more than 2 but less than 7**. The clean way is to handle each half with its own rule and intersect.

- The outer `|x − 3| < 7` is less-thAND: `−7 < x − 3 < 7` → `−4 < x < 10`.
- The inner `|x − 3| > 2` is greater-thOR: `x − 3 > 2` OR `x − 3 < −2` → `x > 5` OR `x < 1`.
- **Intersect** the two: take `−4 < x < 10` and chop out the middle where the distance is too small.

Result: `−4 < x < 1` OR `5 < x < 10`. Two symmetric bands sitting on either side of 3, each starting 2 units out and ending 7 units out. The geometric read — "between 2 and 7 units from 3" — gives the same answer instantly: on the left, from `3 − 7 = −4` up to `3 − 2 = 1`; on the right, from `3 + 2 = 5` up to `3 + 7 = 10`. **Distance thinking beats algebra on these.** Sanity-check a boundary if unsure: at x = 1, `|1 − 3| = 2`, which is *not* strictly greater than 2, so x = 1 is correctly excluded (open endpoint).

**Strategic trick — plug in numbers when the algebra blurs.** GMAT answer choices for absolute-value problems are frequently *intervals* or *counts*, which makes test-the-boundaries plugging-in extremely powerful. Suppose a problem claims the solution to `|x − 3| > 5` is `x > 8` only (a classic wrong choice that drops the negative branch). **Test a point you suspect:** try `x = −10`. Then `|−10 − 3| = |−13| = 13 > 5` is true, yet `−10 > 8` is false — so the proposed answer **misses a valid solution** and must be wrong. One well-chosen test value, especially a negative one, exposes a dropped OR-branch faster than re-deriving the algebra. Always probe with at least one number from **each** side of zero.

**Strategic trick — backsolve a "how many solutions" question.** Consider: *How many integer values of x satisfy `|x − 5| + |x + 1| = 6`?* Rather than wrestling with two nested absolute values algebraically, recognize the geometry: `|x − 5| + |x + 1|` is the **total distance from x to 5 plus the distance from x to −1**. The two anchor points are −1 and 5, which are 6 apart. Any point *between* them (inclusive) has total distance exactly equal to that gap, 6; any point outside adds extra on both ends. So every x with `−1 ≤ x ≤ 5` works, giving integers −1, 0, 1, 2, 3, 4, 5 — **seven** values. Backsolving by testing x = 0 (`5 + 1 = 6` ✓) and x = 6 (`1 + 7 = 8` ✗) confirms the boundary instantly. **Sum-of-two-distances equal to the gap means "anywhere between the anchors"** — a pattern worth memorizing cold.

**When the right-hand side can be negative — the silent edge cases.** These appear constantly, and they quietly make a problem trivial (no solution) or wide open (always true):

- `|expr| = −5` → **no solution.** Absolute value can't equal a negative number.
- `|expr| > −5` → **always true.** Absolute value is always ≥ 0, which already exceeds −5, so every real x works. This is often a statement that looks restrictive but tells you *nothing*.
- `|expr| < −5` → **never true.** Nothing is closer to zero than a negative distance.
- `|expr| = 0` → exactly **one** solution: set the inside to 0. (`|2x − 6| = 0` forces `x = 3`. No second case — zero has only one "direction.")
- `|expr| > 0` → **everything except** where the inside is zero. (`|x − 4| > 0` means all x except `x = 4`.)

**Trap to watch.** `|x − y| = |y − x|` **always** — they are the same distance, so never treat them as two different quantities to be added or split apart. Relatedly, `|x|² = x²` for every real x, so an absolute-value equation can sometimes be squared into a quadratic — but **squaring can manufacture extraneous roots**, so you must plug every candidate back into the original. Watch this one:

**Worked example — squaring creates a phantom root (hard).** Solve `|x − 1| = 2x − 4`.

Square both sides: `(x − 1)² = (2x − 4)²` → `x² − 2x + 1 = 4x² − 16x + 16` → `0 = 3x² − 14x + 15` → `(3x − 5)(x − 3) = 0` → `x = 5/3` or `x = 3`. **Now check both** against the original, because the right side `2x − 4` must be ≥ 0 for the equation to be possible (a non-negative left side can't equal a negative right side):

- `x = 3`: left `|3 − 1| = 2`; right `2(3) − 4 = 2`. Valid.
- `x = 5/3`: left `|5/3 − 1| = 2/3`; right `2(5/3) − 4 = 10/3 − 12/3 = −2/3`. A positive distance can't equal a negative number. **Extraneous — reject it.**

The only solution is `x = 3`. Had you trusted the algebra and reported both, you'd have walked into the exact trap the squaring sets. The fast pre-check: whatever the bars equal **must be ≥ 0**, so any candidate making the other side negative is dead on arrival. A speed tip: you can often skip squaring entirely by first noting the constraint `2x − 4 ≥ 0`, i.e. `x ≥ 2`, which would have eliminated `x = 5/3` before you ever computed it.

> **Recall check.** After squaring an absolute-value equation, why must you re-test every solution in the original? (Squaring can introduce extraneous roots — values where the non-bar side is negative — that satisfy the squared equation but not the original, because `|expr|` can never be negative.)

> **Self-explanation prompt.** Why does `|expr| < k` produce a single interval but `|expr| > k` produce two? If you can say "because 'close to zero' is one connected region but 'far from zero' is two regions — far in the positive direction and far in the negative direction," you've geometrized absolute value and you'll never again confuse AND with OR.

**Procedure to memorize.**

1. **Isolate the absolute value** completely — get `|...|` alone on one side before doing anything else.
2. **Check the right-hand side's sign.** If `|expr| = `(negative), no solution. If `|expr| > `(negative), all reals. If `|expr| < `(negative), no solution. If `= 0`, one solution (set inside = 0). If a *variable* sits opposite the bars, note the constraint that side ≥ 0.
3. **For an equation `|expr| = k` (k > 0):** split into `expr = k` and `expr = −k`; solve each.
4. **For `|expr| < k` (k > 0):** write the single chain `−k < expr < k` and solve (less-thAND).
5. **For `|expr| > k` (k > 0):** write `expr > k` OR `expr < −k` and solve each branch separately (greater-thOR).
6. **For a "between" form `a < |expr| < b`:** apply the less-than rule to b and the greater-than rule to a, then **intersect**.
7. **Verify**, especially after squaring or if a variable sat on the right side — reject any root that makes a side that should be ≥ 0 come out negative.

**Common mistakes.**

- **Splitting before isolating.** `3|x + 2| − 5 = 10` must become `|x + 2| = 5` first; cases on the un-isolated form are wrong.
- **Dropping the negative branch** of a greater-than inequality (writing only `x > 8` for `|x − 3| > 5` and forgetting `x < −2`).
- **Chaining a greater-than** into one inequality like `−2 > x > 8` — impossible; greater-than is OR, never a single chain.
- **Forgetting the never-negative rule**, declaring `|expr| = −5` "no real info" when it actually means **no solution** (a powerful fact).
- **Trusting squared-equation roots** without re-checking, then including an extraneous solution.
- **Ignoring the constraint when a variable sits opposite the bars** — failing to require that side ≥ 0 and keeping a candidate that makes it negative.
- **Flipping the inequality direction** only when you multiply or divide by a negative — that lives in the inequalities rules, and it still applies inside absolute-value work after you split.

**Closing recap.** Absolute value is distance from zero, and distance is the key to everything here. Isolate the bars, screen for the never-negative edge cases, then split: equations give two symmetric solutions about a (summing to 2a); "less thAND" gives one bounded interval `−k < expr < k`; "greater thOR" gives two outward intervals; "between" forms intersect the two rules; and a sum of two distances equal to the gap between the anchors means "anywhere between them." Square only when convenient, and always verify, because a positive distance can never equal a negative number — that single sentence is both your fastest shortcut and your best trap-detector.

## @working-with-inequalities

The earlier sections taught the mechanics of a *single* inequality — flip on a negative, split an absolute value into two cases. This section is about the *moves you make when you have more than one inequality on the table at once*, which is exactly where the harder Data Sufficiency and "must be true" problems live. The mechanics don't change; what changes is your discipline about which combinations are legal. Three operations carry almost all the weight: **adding same-direction inequalities to eliminate a variable**, **chaining inequalities through a shared term to squeeze a bound**, and **refusing to divide by anything whose sign you don't know.** The flip rule and the two-case split are assumed from here on — this is the layer on top.

**Mental model.** Treat a set of inequalities the way you treat a system of equations, but with one permanent handicap: addition is the *only* combination that survives intact. When two inequalities point the same way you may stack them and add straight down the columns, just like elimination — `a > b` and `c > d` give `a + c > b + d`. (That much was introduced earlier under "Combining inequalities.") What you can *never* do is subtract one inequality from another or multiply two together blindly, because subtraction secretly negates a row and negating without flipping breaks the order. So your toolkit for several inequalities is short and rigid: line them up so they face the same direction, then *add* — never subtract, never multiply unless you have proven every term positive.

**Worked example.** A bakery sells two box sizes. You are told `3p + 2q > 41` and `2p + 5q > 50`, where `p` and `q` are positive prices in dollars, and asked for a lower bound on `p + q`. The clean route is to add two same-direction inequalities so the asymmetry collapses. Add the rows straight down: `(3p + 2q) + (2p + 5q) > 41 + 50`, giving `5p + 7q > 91`. That doesn't isolate `p + q` yet, so look for a scaled combination instead. Multiply the first inequality by 3 and the second by 2 (both positive multipliers, so no flip): `9p + 6q > 123` and `4p + 10q > 100`. Adding gives `13p + 16q > 223` — still not clean. The point of the exercise is the *method*, not a tidy number: you hunt for positive multipliers that make the unwanted coefficients line up, then add. Here, to truly eliminate `q` you would scale the first by 5 and the second by 2 (`15p + 10q > 205` and `4p + 10q > 100`) and then **subtract** — which you are not allowed to do. That dead end is the whole lesson: elimination-by-subtraction, the workhorse of equation systems, is illegal for inequalities, so you can only ever *add toward* a bound, never subtract to pin one exactly.

**Mental model — chaining.** Inequalities are transitive: if `a < b` and `b < c`, then `a < c`. That sounds trivial until you notice the GMAT hides a variable in the middle term `b` so that two separate facts, neither of which mentions both ends, secretly bound a quantity you care about. Whenever you see a shared term sitting on the small side of one inequality and the large side of another, **stack them through that shared term** to squeeze out a new, tighter bound — `2 < x` and `x < 9` collapse to `2 < x < 9` only because `x` is the common link. Always confirm the directions agree before you chain; mismatched arrows (`a < b` and `c < b`) share a term but say nothing about how `a` and `c` compare.

**Worked example — chaining.** Suppose `w < 4z`, `4z < y`, and `y < 11`. Reading these as a relay, the shared terms `4z` and `y` let you stack everything into one chain: `w < 4z < y < 11`. The outer links now give `w < 11` for free, and the middle gives `4z < 11`, i.e. `z < 11/4`, even though no single original inequality mentioned `w` and `11` together or bounded `z` alone. That is the power of chaining — three local facts compound into bounds on quantities they never directly named.

**Trap to watch.** The signature hard-question trap is dividing an inequality by a variable whose sign you don't know — which silently smuggles in the flip rule from the first section. If `ab > a`, you cannot "cancel the `a`" to conclude `b > 1`: dividing by `a` is legal only if `a > 0`, and if `a < 0` the inequality flips to `b < 1`, while `a = 0` makes the original `0 > 0` false. This is precisely what **"must be true"** questions are built around. They hand you a relationship, offer a clean-looking conclusion that *would* follow if everything were positive, and bank on you dividing without checking the sign. The defense is mechanical: never divide (or multiply) an inequality by a variable expression until you have *proven* its sign; if the sign is genuinely unknown, the tidy conclusion is "not necessarily true," and that is usually the answer. The same caution killed cross-multiplication in the rational-inequality examples earlier — it is the single discipline that unifies the whole chapter.

> **Self-explanation prompt.** You are told `xy > x` and asked whether `y > 1` must be true. Explain in one sentence why you cannot just divide both sides by `x`. (Because the sign of `x` is unknown: dividing by a positive `x` keeps `y > 1`, dividing by a negative `x` flips it to `y < 1`, and `x = 0` contradicts the premise — so `y > 1` is not guaranteed.)

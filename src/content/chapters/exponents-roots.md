---
slug: exponents-roots
title: Exponents and Roots
section: Quant
estimated_minutes: 45
prerequisites: []
summary: |
  Exponents and roots reward speed, not cleverness. Every "hard" exponent question on the GMAT reduces to rewriting both sides with the same base, applying three or four rules, and reading off the answer. Memorize a small table of powers, internalize five rules, and these questions become free points.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Two questions before I teach you anything. The first tests the single most common exponent rule; the second layers negatives and division on top. Miss one or both — that's expected. The act of trying is what makes the instruction that follows stick.
    pretest_question_ids:
      - exponents-roots-q1
      - exponents-roots-q6

  - id: integer-exponents-rules
    type: reading
    title: "Integer exponents — the three rules you multiply by"
    check_question_ids:
      - exponents-roots-q1
      - exponents-roots-q11

  - id: negative-and-zero-exponents
    type: reading
    title: "Negative and zero exponents — the sign-flip trap"
    check_question_ids:
      - exponents-roots-q5

  - id: fractional-exponents-and-radicals
    type: reading
    title: "Fractional exponents — roots in disguise"
    check_question_ids:
      - exponents-roots-q8

  - id: roots-and-simplification
    type: reading
    title: "Roots — factor, split, simplify"
    check_question_ids:
      - exponents-roots-q2
      - exponents-roots-q7

  - id: rationalizing-and-combining
    type: reading
    title: "Rationalizing denominators and combining radicals"
    check_question_ids:
      - exponents-roots-q12

  - id: sign-and-comparison
    type: reading
    title: "Sign, ordering, and radical equations"
    check_question_ids:
      - exponents-roots-q18
      - exponents-roots-q22

  - id: scientific-notation
    type: reading
    title: "Scientific notation — treat the pieces separately"
    check_question_ids:
      - exponents-roots-q3
      - exponents-roots-q9

  - id: summary
    type: summary
    title: "The same-base reflex and what to memorize cold"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - exponents-roots-q1
      - exponents-roots-q2
      - exponents-roots-q3
      - exponents-roots-q4
      - exponents-roots-q5
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - exponents-roots-q6
      - exponents-roots-q7
      - exponents-roots-q8
      - exponents-roots-q9
      - exponents-roots-q10
      - exponents-roots-q11
      - exponents-roots-q17
      - exponents-roots-q19
      - exponents-roots-q21
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - exponents-roots-q12
      - exponents-roots-q13
      - exponents-roots-q14
      - exponents-roots-q15
      - exponents-roots-q18
      - exponents-roots-q20
      - exponents-roots-q22
---

## @integer-exponents-rules

Three rules do 80% of the work on every exponent question you'll see. Learn them so well you apply them without thinking.

**Mental model.** Exponents are shorthand for repeated multiplication; roots are the inverse. Every "rule" — `aⁿ × aᵐ = aⁿ⁺ᵐ`, `(aⁿ)ᵐ = aⁿᵐ`, `√(ab) = √a × √b` — falls out of that single fact. Memorize the rules if you must, but if you understand the multiplication picture, you can re-derive any rule in 5 seconds when memory fails under pressure.

**1. Product of same base: xᵃ · xᵇ = xᵃ⁺ᵇ.** Multiply same-base powers by *adding* exponents. The base does not change.

**2. Quotient of same base: xᵃ / xᵇ = xᵃ⁻ᵇ.** Subtract.

**3. Power of a power: (xᵃ)ᵇ = xᵃᵇ.** Multiply the exponents.

**Worked example.** Simplify (2³ · 2⁵) / 2⁴.

- Numerator: 2³ · 2⁵ = 2⁸ (product rule).
- Now 2⁸ / 2⁴ = 2⁴ (quotient rule).
- 2⁴ = 16.

That's the entire workflow. The GMAT will never give you a problem where you should compute 2⁸ = 256 before dividing by 2⁴ = 16. Always collapse exponents first, evaluate last.

**Same-base reflex.** When you see exponent expressions that *look* ugly, the first thing to try is rewriting everything to a common base. If you see 4ˣ and 8ʸ in the same equation, rewrite both using base 2: 4ˣ = 2²ˣ and 8ʸ = 2³ʸ. Then equate exponents.

**Worked example.** If 9ˣ = 27, find x.

Rewrite both sides with base 3: 9 = 3² and 27 = 3³. So (3²)ˣ = 3³, which gives 3²ˣ = 3³. Exponents must match: 2x = 3, so x = 3/2.

**Trap to watch.** Students who half-learn these rules multiply the bases when they should keep them constant: 2³ · 2⁵ is NOT 4⁸ and it's NOT 2¹⁵. The base stays, the exponents combine. Repeat that sentence to yourself until it feels automatic.

**Same-exponent shortcut (less common but useful).** xᵃ · yᵃ = (xy)ᵃ and (x/y)ᵃ = xᵃ/yᵃ. Different bases, same exponent? The exponent distributes.

**The base-between-0-and-1 trap.** Everything above assumes the base is greater than 1. When 0 < b < 1, larger exponent means *smaller* value. (1/2)² = 1/4 is smaller than 1/2. (0.9)³ = 0.729 is smaller than (0.9)² = 0.81. Multiplying by a fraction smaller than 1 always shrinks the result, so every additional power makes it smaller. On comparison questions — "which is greater, x³ or x⁴, given 0 < x < 1?" — the lower exponent wins. Students who apply "higher power = bigger" without checking the base's location miss every question of this type.

> **Self-explanation prompt.** Before the check question, write down each of the three rules without peeking. If you can't reproduce them from memory, re-read this section before moving on. Forty seconds now saves you three minutes of fumbling on test day.

## @negative-and-zero-exponents

Two special cases trip up more students than any real "hard" exponent content.

**Zero exponent.** x⁰ = 1 for any nonzero x. Not 0. Not x. Just 1. This falls out of the quotient rule: xᵃ / xᵃ = xᵃ⁻ᵃ = x⁰, and anything divided by itself is 1.

**Negative exponent.** x⁻ⁿ = 1/xⁿ. A negative exponent takes the reciprocal. It does NOT make the value negative.

**Worked example.** 3⁻² = 1/3² = 1/9. Positive, not −9 and not −1/9.

**Why this works.** Follow the pattern: 2³ = 8, 2² = 4, 2¹ = 2, 2⁰ = 1, 2⁻¹ = 1/2, 2⁻² = 1/4. Each step down divides by 2. The pattern forces 2⁰ = 1 and 2⁻¹ = 1/2 — the definitions aren't arbitrary; they're the only values that keep the rules consistent.

**Division-with-negatives trick.** x⁻ⁿ in a fraction flips across the fraction bar. So 1/x⁻² = x², and x⁴/y⁻³ = x⁴y³. This is worth internalizing — the "flip" move saves you from having to rewrite everything as 1/something.

**Worked example.** Simplify (a² · b⁻³) / (a⁻¹ · b²).

Subtract exponents across the fraction bar: a-exponent is 2 − (−1) = 3, b-exponent is −3 − 2 = −5. Result: a³b⁻⁵, which equals a³/b⁵.

The most common mistake here is sign-handling. Slow down for two seconds on the subtraction step. 2 − (−1) is 3, not 1. When you're subtracting a negative, you're adding a positive.

**Trap to watch.** −3² and (−3)² are different. −3² = −(3²) = −9 because exponentiation binds tighter than the negative sign. (−3)² = 9 because the parentheses force the negative inside. GMAT answer choices often exploit this to separate students who actually read the expression from those who skim it.

## @fractional-exponents-and-radicals

A fractional exponent is a root in disguise. The definition:

**x^(m/n) = ⁿ√(xᵐ) = (ⁿ√x)ᵐ**

The denominator of the fraction is the root; the numerator is the power. Both orderings give the same result — but one is always much easier to compute.

**Worked example.** 27^(2/3).

Option A: cube first, then square. 27² = 729, and the cube root of 729 is 9.
Option B: cube-root first, then square. ³√27 = 3, and 3² = 9.

Option B took three seconds. Option A took thirty and required you to know ³√729. **Always take the root first.** The numbers stay small and manageable.

**Worked example.** 16^(3/4). Take the 4th root first: ⁴√16 = 2. Then cube: 2³ = 8.

**All exponent rules still apply to fractional exponents.** If x > 0, then x^(1/2) · x^(1/3) = x^(1/2 + 1/3) = x^(5/6). Add the exponents like any other fractions — find a common denominator and combine.

**Worked example.** Simplify (x^(3/4))^(8/3).

Power of a power: multiply. (3/4) · (8/3) = 24/12 = 2. Result: x².

**Trap to watch.** x^(1/2) is **only** defined as the non-negative square root on the GMAT. For x ≥ 0, √x is a single non-negative value, not ±. When the GMAT wants both roots, it writes x² = 9 (giving x = ±3), not x = √9 (giving just 3).

**Converting between forms.** √x = x^(1/2). ³√x = x^(1/3). √(x³) = x^(3/2). You'll move between radical and fractional-exponent notation constantly — treat them as two languages for the same object.

## @roots-and-simplification

Most GMAT root questions are simplification questions. They hand you something ugly and the answer choices are in simplified form; your job is to get there fast.

**The two radical rules:**

**1. √(ab) = √a · √b.** You can split a root into the root of its factors.

**2. √(a/b) = √a / √b.** Splits across division too.

**Simplification algorithm.** To simplify √n:

1. Find the largest perfect-square factor of n.
2. Split: √n = √(perfect square × other) = √(perfect square) · √(other).
3. Evaluate the perfect-square root.

**Worked example.** Simplify √72.

72 = 36 × 2 (and 36 is a perfect square). So √72 = √36 · √2 = 6√2.

You could also go 72 = 4 × 18 = √4 · √18 = 2√18 = 2 · √(9·2) = 2 · 3√2 = 6√2. Same answer, more steps. Always scan for the *largest* perfect-square factor first.

**Memorize these perfect squares:** 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225. And recognize 4 (=2²) and 9 (=3²) as factors instantly.

**Adding and subtracting radicals.** You can only add radicals that share the same radicand. Treat them like variables.

**Worked example.** √12 + √27.

Simplify each first: √12 = √(4·3) = 2√3, and √27 = √(9·3) = 3√3. Now both have √3 as the "variable": 2√3 + 3√3 = 5√3.

**Multiplying radicals.** √a · √b = √(ab). And (a√b)(c√d) = ac · √(bd). Treat the integer coefficients and the radicals separately, then combine.

**Trap to watch.** √a + √b is NOT √(a+b). Concretely: √9 + √16 = 3 + 4 = 7, but √25 = 5. Radicals split across multiplication and division, never across addition or subtraction.

**Memorize these cube roots:** ³√8 = 2, ³√27 = 3, ³√64 = 4, ³√125 = 5, ³√216 = 6, ³√1000 = 10. Cube roots come up less often than square roots, but when they do, recognition speed matters.

## @rationalizing-and-combining

A denominator with a radical is considered "unfinished" on the GMAT. Answer choices are almost always rationalized — radicals appear only in numerators. To rationalize, multiply by a form of 1 that clears the radical below.

**Case 1: single radical in denominator.** Multiply top and bottom by that same radical.

**Worked example.** 6/√3. Multiply top and bottom by √3: (6·√3)/(√3·√3) = 6√3 / 3 = 2√3.

**Case 2: sum or difference with a radical.** Multiply by the **conjugate** — same expression with the middle sign flipped. Uses the difference-of-squares identity: (a + b)(a − b) = a² − b².

**Worked example.** Rationalize 6 / (√3 + 1).

Multiply top and bottom by the conjugate (√3 − 1):

- Denominator: (√3 + 1)(√3 − 1) = (√3)² − 1² = 3 − 1 = 2.
- Numerator: 6(√3 − 1) = 6√3 − 6.
- Result: (6√3 − 6)/2 = 3√3 − 3.

**Why the conjugate works.** When you expand (a + b)(a − b), the cross-terms cancel and you're left with a² − b² — which kills the radical if a or b is a square root. This is the single most useful algebraic identity on the GMAT. Learn it with your eyes closed.

**Trap to watch.** When you rationalize, you must multiply BOTH numerator and denominator by the conjugate. Forgetting to scale the numerator changes the value. You're multiplying by (conjugate/conjugate) = 1 — so the expression stays equal — but only if both top and bottom get hit.

**Combining radical fractions.** Follow the normal fraction workflow: common denominator, then simplify.

**Quick recognition.** If an answer choice has the form a√b + c, the setup usually involved rationalizing a denominator of the form √b + something. Scan answer choices before diving into calculation — they often hint at the cleanest path.

## @sign-and-comparison

Four behaviors determine sign and relative size whenever an exponent is involved. Master these and you'll answer sign-and-comparison questions in under 60 seconds.

**1. Odd exponents preserve sign.**

For any odd integer n: xⁿ > 0 if and only if x > 0. An odd power magnifies magnitude without ever changing sign.

Consequence: x⁵ > 0 means x > 0. x⁷ < 0 means x < 0. No ambiguity, no case analysis needed.

**Example (Data Sufficiency).** Is x > 0?

- Statement (1): x⁵ > 0. Odd power preserves sign, so x > 0. Sufficient.
- Statement (2): x² < x. Rearrange: x² − x < 0 → x(x − 1) < 0. This holds when x and (x − 1) have opposite signs. Since x < 0 and x − 1 < 0 can't simultaneously produce opposite signs, the only valid case is 0 < x < 1. So x > 0. Sufficient.

Both statements alone are sufficient → D.

**2. Even exponents erase sign.**

For any even integer n: xⁿ ≥ 0 for all real x — positive, negative, or zero. An even power obliterates sign information.

*DS trap.* "Is x > 0? Given: x⁴ = 81." x could be 3 or −3. Insufficient. Any statement that gives you only an even power cannot determine sign on its own. The moment you see x², x⁴, or x⁶ in a DS statement asking about sign, your reflex should be: "could be positive or negative — need more."

**3. Base between 0 and 1 reverses the ordering.**

For 0 < b < 1, a larger exponent produces a smaller value. You covered this in the first section, but it reappears in comparison questions in a way that requires its own habit.

*Pattern.* "If 0 < x < 1, which is greater: x² or x³?" Each multiplication by x (a number less than 1) shrinks the product. So x³ = x² · x < x². The lower exponent wins.

*DS angle.* "Is xᵃ > xᵇ, given a > b?" Without knowing whether x > 1 or 0 < x < 1, you cannot answer — the direction of the comparison flips depending on the base. The base's position relative to 1 is required information on any ordering question involving the same base raised to two different powers.

**4. Comparing radical expressions — square both sides.**

To compare a√b and c√d (both positive), square them: (a√b)² = a²b and (c√d)² = c²d. Since both original expressions are positive, the larger squared value corresponds to the larger original.

**Example.** Which is greater: 3√5 or 2√7?

- (3√5)² = 9 × 5 = 45
- (2√7)² = 4 × 7 = 28

45 > 28, so 3√5 > 2√7. No calculator, no decimal estimates, no rounding error.

The squaring technique also works for three-way comparisons. Compute all squared values and rank them; the ranking of the originals is identical.

**Radical equations and extraneous roots.**

Squaring both sides to isolate a radical is the standard technique for radical equations. The problem: squaring can create solutions that satisfy the squared version of the equation but violate the original. These are called extraneous roots. Every radical equation requires a final verification step against the original.

**Example.** Solve √(3x + 1) = x − 1.

Square both sides: 3x + 1 = (x − 1)² = x² − 2x + 1 → x² − 5x = 0 → x(x − 5) = 0. Candidates: x = 0 or x = 5.

Verify against the original:

- x = 0: Left side = √(0 + 1) = 1 (positive). Right side = 0 − 1 = −1 (negative). A square root cannot equal a negative number. Reject x = 0.
- x = 5: Left side = √(15 + 1) = √16 = 4. Right side = 5 − 1 = 4. Accept x = 5.

Only x = 5 is valid. Sum of valid solutions = 5.

**The verification shortcut.** Before substituting, note that √(expression) = (right side) forces right side ≥ 0 (a principal square root is never negative). Check each candidate: if the right side is negative, reject immediately without computing the left. This saves the substitution step on obvious rejects.

> **Self-explanation prompt.** Without looking, explain in one sentence why a base between 0 and 1 reverses the exponent ordering. Then explain in one sentence why squaring both sides of a radical equation can produce a spurious solution. If you can articulate both in plain language without formulas, both habits will hold up under time pressure.

## @scientific-notation

Scientific notation writes any number as **a × 10ᵏ**, where 1 ≤ a < 10 and k is an integer. It's the GMAT's way of testing exponents in disguise: arithmetic with scientific notation is just two sub-problems glued together.

**Converting to scientific notation.** Slide the decimal so exactly one nonzero digit sits to its left. Count the slides; that's |k|. Slide left (number shrinks) → k positive. Slide right (number grows) → k negative.

**Worked example.** Express 0.00045 in scientific notation.

Slide right 4 places: 0.00045 → 4.5. The number got bigger, so k is negative. Result: 4.5 × 10⁻⁴.

**Arithmetic rule.** Handle coefficients and powers of 10 separately.

**Multiplication:** multiply coefficients, add exponents. (3 × 10⁴) · (2 × 10⁻⁷) = 6 × 10⁻³.

**Division:** divide coefficients, subtract exponents. (8 × 10⁵) / (2 × 10²) = 4 × 10³.

**Addition/subtraction:** requires matching exponents first. Convert one term so both have the same power of 10, then add coefficients.

**Worked example.** 3 × 10⁵ + 2 × 10⁴.

Rewrite the smaller: 2 × 10⁴ = 0.2 × 10⁵. Now add: (3 + 0.2) × 10⁵ = 3.2 × 10⁵.

**Normalizing after arithmetic.** If your coefficient falls outside [1, 10), shift the decimal and adjust. 24 × 10⁵ → 2.4 × 10⁶. The exponent goes up as the coefficient shrinks.

**Trap to watch.** Be precise about whether exponents move up or down. A concrete check: 4.5 × 10⁻⁴ should be a very small number (0.00045). If you wrote 4.5 × 10⁴, that's 45,000 — opposite direction. Whenever an exponent sign feels ambiguous, plug in a sanity-check number.

**The load-bearing benchmark: 2¹⁰ ≈ 10³.** Exactly: 2¹⁰ = 1,024. This approximation lets you estimate powers of 2 against powers of 10 without a calculator. 2²⁰ ≈ 10⁶. 2³⁰ ≈ 10⁹. The approximation is slightly low (2¹⁰ is actually 2.4% higher than 10³), but that's close enough for GMAT comparison questions — and one of the hardest exponent DS questions on the test hinges on recognizing it.

## @summary

Every exponent question on the GMAT yields to one question: **can I rewrite this with a common base?** If yes, apply the three rules, equate exponents, solve. If no, you're probably in a scientific-notation or radical-simplification problem — separate the coefficient from the power-of-10, or factor out the largest perfect square, and the rest is arithmetic.

**The five rules that solve everything:**

| Rule | Example |
|---|---|
| xᵃ · xᵇ = xᵃ⁺ᵇ | 2³ · 2⁵ = 2⁸ |
| xᵃ / xᵇ = xᵃ⁻ᵇ | 2⁸ / 2⁵ = 2³ |
| (xᵃ)ᵇ = xᵃᵇ | (2³)⁴ = 2¹² |
| x⁻ⁿ = 1/xⁿ | 3⁻² = 1/9 |
| x^(m/n) = ⁿ√(xᵐ) | 27^(2/3) = 9 |

**Memorize cold — these numbers show up constantly:**

| Powers of 2 | Powers of 3 | Squares | Cubes |
|---|---|---|---|
| 2¹ = 2 | 3¹ = 3 | 11² = 121 | 2³ = 8 |
| 2² = 4 | 3² = 9 | 12² = 144 | 3³ = 27 |
| 2³ = 8 | 3³ = 27 | 13² = 169 | 4³ = 64 |
| 2⁴ = 16 | 3⁴ = 81 | 14² = 196 | 5³ = 125 |
| 2⁵ = 32 | 3⁵ = 243 | 15² = 225 | 6³ = 216 |
| 2⁶ = 64 | | 16² = 256 | 10³ = 1000 |
| 2⁷ = 128 | | 17² = 289 | |
| 2⁸ = 256 | | 18² = 324 | |
| 2⁹ = 512 | | 19² = 361 | |
| 2¹⁰ = 1024 | | 20² = 400 | |

**Decision tree on test day:**

1. **Same-base rewrite possible?** Do it. Then equate exponents.
2. **Radicals?** Split via √(ab) = √a · √b, factor out the largest perfect square, or convert to fractional exponents.
3. **Radical in a denominator?** Rationalize with the conjugate.
4. **Scientific notation?** Treat coefficients and powers of 10 as two independent arithmetic problems.
5. **Estimation question?** Fall back on 2¹⁰ ≈ 10³.
6. **Sign or comparison question?** Ask: odd exponent? (sign preserved). Even exponent? (sign erased — can't determine). Base between 0 and 1? (larger exponent = smaller value). Comparing radicals? (square both sides).
7. **Radical equation?** Square to solve, then verify every candidate against the original — reject any that make the right side negative.

**Pattern-match table — extended:**

| Problem says | Tool | Key move |
|---|---|---|
| "Same base on both sides" | Same-base reflex | Set exponents equal |
| "Simplify radical" | Factor out largest perfect square | √72 = 6√2 |
| "Radical in denominator" | Conjugate rationalization | (a + √b)(a − √b) = a² − b |
| "0 < x < 1, compare powers" | Base-between-0-and-1 rule | Lower exponent is larger |
| "x⁵ > 0, is x > 0?" | Odd-power sign preservation | Yes, sufficient |
| "x² > 0, is x > 0?" | Even-power sign erasure | Insufficient (±) |
| "Compare 3√5 vs 2√7" | Square both sides | 45 vs 28 → 3√5 wins |
| "√(expr) = x − k" | Square, solve, verify | Reject negative right sides |

**What to do next.** Work the problem sets in order — easy, medium, hard. After each wrong answer, return to the decision tree above and identify exactly which step you skipped or misapplied. Most errors in this chapter trace back to one of three habits: failing to check the base's position relative to 1, forgetting to verify radical-equation candidates, or not rationalizing before comparing. Target those specifically.

Once the problem sets feel mechanical, move the chapter to your spaced-review queue. Exponent questions appear throughout the GMAT Quant section — in word problems, Data Sufficiency, and number properties — so the patterns you've built here pay dividends across other chapters.

The students who freeze on exponent questions are the ones who try to think about them. The students who score 705+ have the rules so automated they run the decision tree in six seconds and spend the rest of their two minutes on careful arithmetic. Drill the rules until they're reflexive. Everything downstream is easy.

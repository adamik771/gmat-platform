---
slug: quant-12-roots-radicals
title: "Roots & Radicals"
section: Quant
estimated_minutes: 9
prerequisites:
  - quant-11-exponent-rules
summary: |
  Fractional exponents as roots, simplifying and combining radicals, rationalizing denominators, and solving radical equations.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - exponents-roots-q7
      - exponents-roots-q8
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
  - id: radical-equations
    type: reading
    title: "Radical equations — isolate, square, and verify"
    check_question_ids:
      - exponents-roots-q22
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - exponents-roots-q9
      - exponents-roots-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - exponents-roots-q11
      - exponents-roots-q12
---

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

> **Self-explanation prompt.** Without peeking, state the rule for x^(m/n): which part of the fraction is the root, and which is the power? Then state why taking the root first is almost always faster. If you can answer both in under 15 seconds, you're ready for the check question.

> **Recall check.** Try these cold: (a) 8^(2/3), (b) 81^(3/4), (c) 32^(2/5). Answers: 4, 27, 4. If any took more than 10 seconds, you're computing in the wrong order — root first every time.

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

**Micro-drill.** Simplify each without a calculator — should take under 45 seconds total.

1. √75 → ___
2. √(√81) → ___
3. √12 + 2√3 → ___
4. √50 − √8 → ___

Answers: (1) 5√3, (2) 3, (3) 4√3, (4) 3√2. If (3) or (4) tripped you up, re-read the "adding and subtracting radicals" rule: you must simplify each radical *before* you can combine them.

> **Self-explanation prompt.** Why can't you simplify √a + √b into √(a+b)? Write a concrete numerical counterexample (e.g., √9 + √16 vs. √25). If you can both state the rule and show why it fails, you won't make that error on test day — it's one of the most common wrong moves on medium-hard Quant.

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

**Micro-drill.** Rationalize each denominator:

1. 10/√5 → ___
2. 3/(√7 − 2) → ___

Answers: (1) 2√5, (2) 3(√7 + 2)/3 = √7 + 2. For (2): multiply by (√7 + 2)/(√7 + 2); denominator becomes 7 − 4 = 3; numerator becomes 3(√7 + 2); divide through to get √7 + 2. If you forget the conjugate, go back to the (a + b)(a − b) = a² − b² identity — it's the only mechanism that clears a sum-of-radicals denominator.

> **Self-explanation prompt.** What is the conjugate of (3√2 + 5), and what does multiplying by it produce in the denominator? If you can say "(3√2 − 5), and it produces (3√2)² − 5² = 18 − 25 = −7," you own the conjugate move. The identity a² − b² is what makes it work — radicals vanish because squaring a square root kills it.

## @radical-equations

A radical equation has the unknown inside a square root. The strategy looks simple — isolate the radical, square to clear it — but one trap ends most attempts before the final answer.

**Why squaring creates extraneous roots.** When you square both sides of √A = B, you also implicitly solve −√A = B, which is a different equation. Solutions to that phantom equation survive your algebra but fail the original. Every candidate must be verified against the original equation before it can be called a solution.

**The algorithm — four steps, no shortcuts:**

1. Isolate the radical on one side.
2. Square both sides.
3. Solve the resulting equation.
4. Substitute every candidate into the original. Discard any that fail.

Step 4 is mandatory. Skipping it is the trap.

**Worked example.** Solve √(3x + 1) = x − 1.

Step 1 — radical is already isolated on the left.

Step 2 — square both sides: 3x + 1 = (x − 1)² = x² − 2x + 1.

Step 3 — rearrange: x² − 5x = 0 → x(x − 5) = 0 → candidates: x = 0 or x = 5.

Step 4 — verify:
- x = 0: left side = √(0 + 1) = 1; right side = 0 − 1 = −1. Not equal. Discard.
- x = 5: left side = √(15 + 1) = √16 = 4; right side = 5 − 1 = 4. Equal. Valid.

Answer: x = 5 only.

**Faster discard: domain scan.** √(something) is always ≥ 0. So the right-hand side must be ≥ 0 for any solution to be valid. Here, x − 1 ≥ 0 requires x ≥ 1. That eliminates x = 0 by inspection, before any substitution.

Use the domain scan as a first filter. Full substitution catches everything the scan misses.

**Trap to watch.** When the GMAT asks for the "sum of all valid solutions," wrong-answer traps include x = 0 + 5 = 5 (correct) vs. x = 0 + 5 = 5 (the sum with the extraneous root adds nothing here but in other variants it does). Always distinguish "candidates from algebra" from "solutions that pass verification."

**Worked example (sum question type).** If √(2x + 3) = x, what is the sum of all valid solutions?

Square: 2x + 3 = x² → x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0 → x = 3 or x = −1.

Domain scan: right side x ≥ 0 (since √ ≥ 0) → x = −1 fails immediately.

Verify x = 3: √(6 + 3) = √9 = 3 = right side. Valid.

Sum of valid solutions: 3.

If you bubbled "sum = 3 + (−1) = 2," you included the extraneous root — the trap the question is designed to catch.

> **Self-explanation prompt.** Cover this section. For the equation √(2x + 3) = x, identify the extraneous root and state exactly why it fails. Can you name two independent reasons x = −1 is invalid (one from the domain scan, one from substitution)? If you can, you'll catch extraneous roots by both methods — useful when one method is less obvious than the other.

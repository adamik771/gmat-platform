---
slug: exponents-roots
title: Exponents and Roots
section: Quant
estimated_minutes: 55
prerequisites: []
summary: |
  Exponents and roots reward speed, not cleverness. Every "hard" exponent question on the GMAT reduces to rewriting both sides with the same base, applying three or four rules, and reading off the answer. The one structural trap — even exponents erase sign information, odd exponents preserve it — is tested relentlessly on DS. Memorize a small table of powers, internalize six rules, and these questions become free points.
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
    intro: |
      Three rules — product, quotient, power of a power — cover 80% of every exponent question on the GMAT. Learn them alongside the same-base reflex and you'll recognize the solution path before you finish reading the problem.
    check_question_ids:
      - exponents-roots-q1
      - exponents-roots-q11

  - id: negative-and-zero-exponents
    type: reading
    title: "Negative and zero exponents — the sign-flip trap"
    intro: |
      Zero and negative exponents follow directly from the quotient rule — not from arbitrary definitions. Once you see the derivation, you'll never again confuse x⁰ with 0 or x⁻² with a negative number.
    check_question_ids:
      - exponents-roots-q5

  - id: even-odd-and-sign
    type: reading
    title: "Even vs. odd exponents — the DS sign trap"
    check_question_ids: []

  - id: fractional-exponents-and-radicals
    type: reading
    title: "Fractional exponents — roots in disguise"
    intro: |
      A fraction in the exponent means root and power fused into one. One ordering decision — root first or power first — separates a 4-second calculation from a 40-second slog.
    check_question_ids:
      - exponents-roots-q8

  - id: roots-and-simplification
    type: reading
    title: "Roots — factor, split, simplify"
    intro: |
      GMAT radical simplification is a one-step algorithm: find the largest perfect-square factor, split the root, evaluate. This section gives you the algorithm, the table to memorize, and the traps that end a student's streak.
    check_question_ids:
      - exponents-roots-q2
      - exponents-roots-q7

  - id: rationalizing-and-combining
    type: reading
    title: "Rationalizing denominators and combining radicals"
    intro: |
      GMAT answer choices never leave radicals in a denominator. Two clearing moves handle every case. The second one — the conjugate — is driven by a single algebraic identity that's worth memorizing on its own terms.
    check_question_ids:
      - exponents-roots-q12

  - id: scientific-notation
    type: reading
    title: "Scientific notation — treat the pieces separately"
    intro: |
      Scientific notation turns one hard calculation into two easy ones — coefficient arithmetic and power-of-10 arithmetic, done independently and then reassembled. The single recurring error is exponent sign: this section shows you exactly where it happens.
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
---

## @integer-exponents-rules

Three rules do 80% of the work on every exponent question you'll see. Learn them so well you apply them without thinking.

**Mental model.** Exponents are shorthand for repeated multiplication; roots are the inverse. Every rule — `aⁿ × aᵐ = aⁿ⁺ᵐ`, `(aⁿ)ᵐ = aⁿᵐ`, `√(ab) = √a × √b` — falls out of that single fact. Memorize the rules if you must, but if you understand the multiplication picture, you can re-derive any rule in 5 seconds when memory fails under pressure.

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

Rewrite both sides with base 3: 9 = 3² and 27 = 3³. So (3²)ˣ = 3³, which gives 3²ˣ = 3³. Equate exponents: 2x = 3, so x = 3/2.

**Worked example (DS flavor).** Is 4ˣ > 8ʸ?

Statement: x = 3y. Rewrite both sides with base 2: 4ˣ = 2²ˣ and 8ʸ = 2³ʸ. The question becomes: is 2x > 3y? Substituting x = 3y: is 6y > 3y? That reduces to: is y > 0? The statement tells us x = 3y but says nothing about whether y is positive or negative. Not sufficient on its own. The lesson: same-base comparison reveals what additional information you actually need.

**Trap to watch.** Students who half-learn these rules multiply the bases when they should keep them constant: 2³ · 2⁵ is NOT 4⁸ and it's NOT 2¹⁵. The base stays; the exponents combine. Repeat that until it feels automatic.

**Same-exponent shortcut (less common but useful).** xᵃ · yᵃ = (xy)ᵃ and (x/y)ᵃ = xᵃ/yᵃ. Different bases, same exponent? The exponent distributes.

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

**Worked example.** Simplify 2⁻³ · 4² / 8⁻¹.

Rewrite everything with base 2: 4² = 2⁴ and 8⁻¹ = 2⁻³.

Expression becomes: 2⁻³ · 2⁴ / 2⁻³ = 2^(−3 + 4 − (−3)) = 2^(−3 + 4 + 3) = 2⁴ = 16.

The mechanical path: convert to common base → collect exponents → evaluate. There is no shortcut that skips the base conversion.

**Trap to watch.** −3² and (−3)² are different. −3² = −(3²) = −9 because exponentiation binds tighter than the negative sign. (−3)² = 9 because the parentheses force the negative inside. GMAT answer choices often exploit this to separate students who actually read the expression from those who skim it.

> **Self-explanation prompt.** Without looking above: what is (−2)³? What is −2³? What is 2⁻³? (Answers: −8, −8, and 1/8.) If you hesitated on any of these, re-read the negative exponent rules before moving on — this is table-stakes arithmetic for the problem sets.

## @even-odd-and-sign

This is the single most-tested exponent concept on GMAT Data Sufficiency. If you are targeting 685+, understand this section well enough to apply it in six seconds.

**The core distinction.** Whether an exponent is even or odd determines what the output tells you about the sign of the input.

**Even exponents erase sign.** x² = 9 means x = 3 or x = −3. You cannot recover the sign from the output alone. An even power always produces a non-negative result, regardless of whether the base is positive, negative, or zero. That's why x² ≥ 0 for all real x — the sign information is gone.

**Odd exponents preserve sign.** x³ = −8 means x = −2, full stop. An odd power carries the sign of its base directly into the output. If xⁿ > 0 and n is odd, then x > 0. If xⁿ < 0 and n is odd, then x < 0. No ambiguity.

**The DS pattern.** The GMAT builds DS traps by giving you information about xⁿ and asking about the sign of x. Identifying whether n is even or odd resolves the question immediately.

**Worked example (DS).** Is x > 0?

Statement (1): x² = 16. This tells you |x| = 4, so x = 4 or x = −4. Not sufficient — the even power has erased the sign.

Statement (2): x³ = −64. This tells you x = −4, period. Sufficient — the odd power has preserved the sign.

Answer: B.

**The even-exponent inequality twist.** x² > y² does NOT mean x > y. Consider x = −5 and y = 3: x² = 25 > 9 = y², but x < y. Squaring destroys order information along with sign information.

What x² > y² does tell you: |x| > |y|. That's all — the absolute value of x exceeds that of y.

**Worked example (DS).** Is x > y?

Statement (1): x² > y². As shown above, this tells us |x| > |y|, not x > y. If x = 5 and y = 3, then x > y. If x = −5 and y = 3, then x < y. Not sufficient.

Statement (2): x + y > 0. This constrains the sum but says nothing about which term is larger. If x = 4 and y = 1, then x > y. If x = 2 and y = 3, then y > x, yet x + y = 5 > 0. Not sufficient.

Statements together: |x| > |y| and x + y > 0. If x were negative, the sum would be dominated by a large negative value, making x + y < 0 — contradicting Statement (2). So x must be positive, and since |x| > |y|, we have x > |y| ≥ y. Sufficient. Answer: C.

**The √(x²) = |x| identity.** One direct consequence: √(x²) = |x|, not x. If x = −3, then √(x²) = √9 = 3, not −3. The radical always returns a non-negative value. Writing √(x²) = x is correct only when you already know x ≥ 0.

**Quick recognition checklist for DS sign questions:**

- Even power (x², x⁴, …) in a statement → sign of x is unknown; conclude |x| only.
- Odd power (x³, x⁵, …) in a statement → sign of x matches the sign of the result.
- x² > y² → |x| > |y|, not x > y.
- √(x²) → this equals |x|, not x.

> **Self-explanation prompt.** If you know that x⁴ < y⁴, what can you conclude? (Answer: |x| < |y|. Nothing about the signs of x or y.) Now: if x⁵ > y⁵, what can you conclude? (Answer: x > y directly, because odd powers preserve order for real numbers.) If those two answers felt different in the right way, you've internalized this section.

## @fractional-exponents-and-radicals

A fractional exponent is a root in disguise. The definition:

**x^(m/n) = ⁿ√(xᵐ) = (ⁿ√x)ᵐ**

The denominator of the fraction is the root; the numerator is the power. Both orderings give the same result — but one is always much easier to compute.

**Worked example.** 27^(2/3).

Option A: square first, then cube-root. 27² = 729, and ³√729 = 9.
Option B: cube-root first, then square. ³√27 = 3, and 3² = 9.

Option B took three seconds. Option A took thirty and required you to know ³√729. **Always take the root first.** The numbers stay small and manageable.

**Worked example.** 16^(3/4). Take the 4th root first: ⁴√16 = 2. Then cube: 2³ = 8.

**All exponent rules still apply to fractional exponents.** If x > 0, then x^(1/2) · x^(1/3) = x^(1/2 + 1/3) = x^(5/6). Add the exponents — find a common denominator and combine.

**Worked example.** Simplify (x^(3/4))^(8/3).

Power of a power: multiply. (3/4) · (8/3) = 24/12 = 2. Result: x².

**When to convert forms.** If the GMAT gives you a radical and the answer choices use fractional exponents, convert early — combining x^(1/2) and x^(1/3) algebraically is cleaner than combining √x and ³√x. Conversely, if you need a numerical value, the radical form (³√27 = 3) is faster than the abstract form (27^(1/3) = 3). Pick the form that matches the calculation you need to do.

**Trap to watch.** x^(1/2) is **only** defined as the non-negative square root on the GMAT. For x ≥ 0, √x is a single non-negative value, not ±. When the GMAT wants both roots, it writes x² = 9 (giving x = ±3), not x = √9 (giving just 3).

**Converting between forms.** √x = x^(1/2). ³√x = x^(1/3). √(x³) = x^(3/2). You'll move between radical and fractional-exponent notation constantly — treat them as two languages for the same object.

> **Self-explanation prompt.** Without looking: evaluate 8^(4/3) and 81^(3/4). (Take the root first each time: ³√8 = 2, then 2⁴ = 16; ⁴√81 = 3, then 3³ = 27.) If you tried to raise first, re-read the section — taking the root first is a mandatory time-saver under exam pressure.

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

72 = 36 × 2 (36 is a perfect square). So √72 = √36 · √2 = 6√2.

You could also start with 72 = 4 × 18, getting 2√18 = 2 · √(9·2) = 6√2. Same answer, more steps. Always scan for the *largest* perfect-square factor first.

**Memorize these perfect squares:** 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225. Recognize 4 (=2²) and 9 (=3²) as factors instantly.

**Adding and subtracting radicals.** You can only add radicals that share the same radicand. Treat them like variables.

**Worked example.** Simplify √12 + √27.

Simplify each first: √12 = √(4·3) = 2√3, and √27 = √(9·3) = 3√3. Now both share √3: 2√3 + 3√3 = 5√3.

**Multiplying radicals.** √a · √b = √(ab). And (a√b)(c√d) = ac · √(bd). Treat the integer coefficients and the radicals separately, then combine.

**The conjugate pair shortcut.** (a + √b)(a − √b) = a² − b. This is the difference-of-squares identity applied to a radical, and it eliminates the radical in one step with no intermediate work.

**Worked example.** (3 + √5)(3 − √5) = 3² − 5 = 9 − 5 = 4.

No expansion needed. Whenever you see a sum multiplied by the same-but-opposite expression, recognize the pattern and write the answer directly.

**Worked example.** (√7 + √3)(√7 − √3) = 7 − 3 = 4.

Both terms are square roots with opposite signs. Product = difference of the radicands.

**When does this show up?** Anytime a problem gives you a product of two expressions that look like mirror images (same terms, opposite middle sign), the conjugate pattern applies. Also, when an answer choice is a clean integer after what looked like messy radical arithmetic, conjugates are usually why.

**Trap to watch.** √a + √b is NOT √(a+b). Concretely: √9 + √16 = 3 + 4 = 7, but √25 = 5. Radicals split across multiplication and division, never across addition or subtraction.

**Memorize these cube roots:** ³√8 = 2, ³√27 = 3, ³√64 = 4, ³√125 = 5, ³√216 = 6, ³√1000 = 10. They appear less often than square roots, but recognition speed matters when they do.

> **Self-explanation prompt.** Without looking: simplify (2 + √3)² and (2 + √3)(2 − √3). (First: expand — 4 + 4√3 + 3 = 7 + 4√3. Second: conjugate shortcut — 4 − 3 = 1.) These look similar but produce very different results. If you applied the conjugate shortcut to the first one, re-read the section — (a + b)² is not the same as (a + b)(a − b).

**Micro-drill.** Simplify each without a calculator — should take under 45 seconds total.

1. √75 → ___
2. √(√81) → ___
3. √12 + 2√3 → ___
4. √50 − √8 → ___

Answers: (1) 5√3, (2) 3, (3) 4√3, (4) 3√2. If (3) or (4) tripped you up, re-read the "adding and subtracting radicals" rule: you must simplify each radical *before* you can combine them.

> **Self-explanation prompt.** Why can't you simplify √a + √b into √(a+b)? Write a concrete numerical counterexample (e.g., √9 + √16 vs. √25). If you can both state the rule and show why it fails, you won't make that error on test day — it's one of the most common wrong moves on medium-hard Quant.

## @rationalizing-and-combining

A denominator with a radical is considered "unfinished" on the GMAT. Answer choices are almost always rationalized — radicals appear only in numerators. To rationalize, multiply by a form of 1 that clears the radical below.

**How to pick the method.** Scan the denominator first:
- Single √x → multiply top and bottom by √x.
- Sum or difference (a ± √x) → multiply by the conjugate (a ∓ √x).
- Two square roots (√x ± √y) → multiply by the conjugate (√x ∓ √y).

All three cases use the difference-of-squares identity. The only variable is what you write as the conjugate.

**Case 1: single radical in denominator.**

**Worked example.** Simplify 6/√3.

Multiply top and bottom by √3: (6·√3)/(√3·√3) = 6√3 / 3 = 2√3.

**Case 2: binomial denominator with a radical.**

**Worked example.** Rationalize 6 / (√3 + 1).

Conjugate is (√3 − 1). Multiply top and bottom:

- Denominator: (√3 + 1)(√3 − 1) = 3 − 1 = 2.
- Numerator: 6(√3 − 1) = 6√3 − 6.
- Result: (6√3 − 6)/2 = 3√3 − 3.

**Why the conjugate works.** (a + b)(a − b) = a² − b². The cross-terms cancel, killing the radical. This is the single most useful algebraic identity on the GMAT — learn it so well you apply it reflexively.

**Trap to watch.** You must multiply BOTH the numerator and denominator by the conjugate. Multiplying only the denominator changes the value of the expression. The whole move is: multiply by (conjugate)/(conjugate) = 1. The numerator must be hit too.

**Combining radical fractions.** Follow the normal fraction workflow: find a common denominator, then simplify. The only extra step is rationalizing at the end if a radical lands in the denominator.

**Quick recognition.** If an answer choice has the form a√b + c, the setup usually involved rationalizing a denominator of the form √b ± something. Scan answer choices before diving into calculation — the form of the answer often hints at the fastest path.

> **Self-explanation prompt.** Without looking: rationalize 4/(√5 − 1). (Conjugate: √5 + 1. Denominator becomes 5 − 1 = 4. Numerator: 4(√5 + 1). Simplify: √5 + 1.) If you wrote the conjugate as √5 − 1 (same as the denominator), that's just 1 — it doesn't clear the radical. The conjugate must flip the sign.

**Micro-drill.** Rationalize each denominator:

1. 10/√5 → ___
2. 3/(√7 − 2) → ___

Answers: (1) 2√5, (2) 3(√7 + 2)/3 = √7 + 2. For (2): multiply by (√7 + 2)/(√7 + 2); denominator becomes 7 − 4 = 3; numerator becomes 3(√7 + 2); divide through to get √7 + 2. If you forget the conjugate, go back to the (a + b)(a − b) = a² − b² identity — it's the only mechanism that clears a sum-of-radicals denominator.

> **Self-explanation prompt.** What is the conjugate of (3√2 + 5), and what does multiplying by it produce in the denominator? If you can say "(3√2 − 5), and it produces (3√2)² − 5² = 18 − 25 = −7," you own the conjugate move. The identity a² − b² is what makes it work — radicals vanish because squaring a square root kills it.

## @scientific-notation

Scientific notation writes any number as **a × 10ᵏ**, where 1 ≤ a < 10 and k is an integer. It's the GMAT's way of testing exponents in disguise: arithmetic with scientific notation is just two sub-problems glued together.

**Converting to scientific notation.** Slide the decimal so exactly one nonzero digit sits to its left. Count the slides; that's |k|. Slide left (number shrinks) → k positive. Slide right (number grows) → k negative.

**Worked example.** Express 0.00045 in scientific notation.

Slide right 4 places: 0.00045 → 4.5. The number got bigger, so k is negative. Result: 4.5 × 10⁻⁴.

**Sanity check.** 4.5 × 10⁻⁴ should be a very small number (0.00045). If the sign of your exponent feels wrong, convert back to decimal and see if the size matches the original — one quick check catches the most common error.

**Arithmetic rule.** Handle coefficients and powers of 10 separately.

**Multiplication:** multiply coefficients, add exponents. (3 × 10⁴) · (2 × 10⁻⁷) = 6 × 10⁻³.

**Division:** divide coefficients, subtract exponents. (8 × 10⁵) / (2 × 10²) = 4 × 10³.

**Addition/subtraction:** requires matching exponents first. Convert one term so both have the same power of 10, then add or subtract coefficients.

**Worked example.** 3 × 10⁵ + 2 × 10⁴.

Rewrite the smaller: 2 × 10⁴ = 0.2 × 10⁵. Now add: (3 + 0.2) × 10⁵ = 3.2 × 10⁵.

**Normalizing after arithmetic.** If your coefficient falls outside [1, 10), shift the decimal and adjust the exponent. 24 × 10⁵ → 2.4 × 10⁶. The exponent goes up as the coefficient shrinks.

**The load-bearing benchmark: 2¹⁰ ≈ 10³.** Exactly: 2¹⁰ = 1,024. This approximation lets you estimate powers of 2 against powers of 10 without a calculator. 2²⁰ ≈ 10⁶. 2³⁰ ≈ 10⁹. The approximation is slightly low (2¹⁰ is 2.4% above 10³), but close enough for GMAT comparison questions — and one of the hardest exponent DS questions on the test hinges on recognizing it.

**Where estimation shows up.** The GMAT sometimes asks whether A > B where both involve large powers. Don't compute — estimate. Convert everything to powers of 10 (using 2¹⁰ ≈ 10³ where needed), compare exponents, and decide. Reaching for a calculation when an estimate suffices wastes 60–90 seconds.

> **Self-explanation prompt.** Convert 0.000000072 to scientific notation, then multiply by 3 × 10⁸. (Conversion: 7.2 × 10⁻⁸. Multiply: coefficient 7.2 × 3 = 21.6; exponent 10⁻⁸ · 10⁸ = 10⁰ = 1; result 21.6. Normalize: 2.16 × 10¹.) If you got the sign of the exponent wrong in the conversion, re-read the direction rule: moving the decimal right makes the number bigger and the exponent more negative.

**Sanity-check habit.** After any scientific-notation calculation, ask: does my answer have the right order of magnitude? 4.5 × 10⁻⁴ is 0.00045 — a tiny number. 4.5 × 10⁴ is 45,000 — enormous. Wrong sign on the exponent flips your answer by a factor of 10⁸. One second of checking catches this every time.

> **Self-explanation prompt.** Cover this section. Express 7.2 × 10⁸ ÷ (9 × 10⁻²) in scientific notation. Work through it: 7.2/9 = 0.8, and 10⁸ / 10⁻² = 10¹⁰. So 0.8 × 10¹⁰ = 8 × 10⁹. Did you handle the division of the coefficient and the subtraction of the exponents as two separate steps before recombining? If you tangled them together and got a wrong answer, rerun the calculation with that explicit separation.

## @summary

Every exponent question on the GMAT yields to one question: **can I rewrite this with a common base?** If yes, apply the three rules, equate exponents, solve. If no, identify the sub-type — DS sign trap, radical simplification, rationalization, or scientific notation — and run the matching procedure.

**The six rules that solve everything:**

| Rule | Example | What to remember |
|---|---|---|
| xᵃ · xᵇ = xᵃ⁺ᵇ | 2³ · 2⁵ = 2⁸ | Same base: add exponents |
| xᵃ / xᵇ = xᵃ⁻ᵇ | 2⁸ / 2⁵ = 2³ | Same base: subtract exponents |
| (xᵃ)ᵇ = xᵃᵇ | (2³)⁴ = 2¹² | Power of power: multiply |
| x⁻ⁿ = 1/xⁿ | 3⁻² = 1/9 | Negative exponent ≠ negative value |
| x^(m/n) = ⁿ√(xᵐ) | 27^(2/3) = 9 | Take the root first |
| Even exponent → sign unknown | x² = 9 → x = ±3 | DS trap: even power erases sign |

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

1. **Same-base rewrite possible?** Do it. Then equate exponents and solve.
2. **Even exponent on an unknown?** Sign of the base is unknown — do not assume positive. This is the DS trap. An odd exponent preserves sign; an even exponent erases it.
3. **Radicals present?** Split via √(ab) = √a · √b, factor out the largest perfect square, or convert to fractional exponent form. Check for the conjugate pair pattern: (a + √b)(a − √b) = a² − b.
4. **Radical in a denominator?** Rationalize: single radical → multiply by itself; binomial → multiply by the conjugate.
5. **Scientific notation?** Split into two independent problems: coefficient arithmetic and power-of-10 arithmetic.
6. **Estimation question?** Fall back on 2¹⁰ ≈ 10³.

The students who freeze on exponent questions are the ones who try to think about them case-by-case. The students who score 705+ have the rules so automated they run this decision tree in six seconds and spend the rest of their two minutes on careful arithmetic. Drill the rules until they are reflexive. Everything downstream is easy.

---
slug: quant-11-exponent-rules
title: "Exponents: The Rules & Scientific Notation"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-10-primes-remainders
summary: |
  The same-base reflex: the three exponent rules, the sign-flip of negative and zero exponents, how signs behave, and scientific notation.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - exponents-roots-q1
      - exponents-roots-q2
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
  - id: even-odd-exponent-signs
    type: reading
    title: "Even and odd exponents — how sign behaves"
    check_question_ids:
      - exponents-roots-q25
  - id: scientific-notation
    type: reading
    title: "Scientific notation — treat the pieces separately"
    check_question_ids:
      - exponents-roots-q3
      - exponents-roots-q9
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - exponents-roots-q3
      - exponents-roots-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - exponents-roots-q5
      - exponents-roots-q6
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

> **Self-explanation prompt.** Cover this section and write down: why does x⁻² equal 1/x² instead of −x²? If you can trace it through the quotient rule — x² / x⁴ = x²⁻⁴ = x⁻², and that same ratio is clearly 1/x² — you understand it rather than having memorized it. That distinction matters when a novel-looking problem hits you on test day.

## @even-odd-exponent-signs

Sign behavior with exponents follows one simple rule — but the GMAT uses it in subtle ways, especially in Data Sufficiency.

**Even exponent → always non-negative.** (−3)² = 9, not −9. Raising any real number to an even power erases the sign. The pairs cancel: (−3)² = (−3)(−3) = 9. Concretely: (−a)^even = a^even.

**Odd exponent → preserves the sign.** (−3)³ = −27. The result stays negative. (−a)^odd = −(a^odd).

**The parenthesis test — where does the negative live?**

- **(−3)² = 9.** The base is −3. The negative is inside the exponent operation and goes through it twice. Positive result.
- **−(3²) = −9.** You compute 3² = 9, then negate afterward. The negative never went through the exponent.

On the GMAT, these two expressions appear in the same problem to create wrong-answer traps. Read the expression before computing.

**Worked example.** What is (−2)⁵?

The base is −2, the exponent is 5 (odd). Odd exponents preserve the sign: (−2)⁵ = −32.

**Worked example.** What is −2⁵?

No parentheses — the negative sits outside. Compute 2⁵ = 32 first, then negate: −32. Same answer here, but this is coincidental for odd exponents. For even exponents it diverges: (−2)⁴ = 16 but −2⁴ = −16.

**The DS trap: even exponents hide sign.** If a question tells you x² = 9, you cannot conclude x = 3. You know x = 3 or x = −3. Even exponents destroy sign information, so you cannot recover it from the result alone. DS statements of the form "x² = k" are almost never sufficient alone when the sign of x matters.

**The DS shortcut: odd exponents reveal sign.** If a statement says x⁵ > 0, you can conclude x > 0 — because an odd power preserves sign, a positive result demands a positive base. This is a clean "sufficient alone" pattern that appears on hard DS questions.

**Memorize cold:**
- (−a)^even = positive (always)
- (−a)^odd = negative (always)
- x^even = k > 0 → x = ±√k (two solutions; neither signed DS alone)
- x^odd > 0 → x > 0 (one solution; sign is determined)

> **Self-explanation prompt.** Without looking: (a) What is (−5)⁴? (b) What is −5⁴? (c) Why are they different? Then: in a DS context, if you're told x⁶ = 64, can you determine the sign of x? If your answer is "no, because an even exponent loses sign information," you understand the DS trap. If you said yes, re-read the section above — the even-exponent erasure is the entire point.

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

**Sanity-check habit.** After any scientific-notation calculation, ask: does my answer have the right order of magnitude? 4.5 × 10⁻⁴ is 0.00045 — a tiny number. 4.5 × 10⁴ is 45,000 — enormous. Wrong sign on the exponent flips your answer by a factor of 10⁸. One second of checking catches this every time.

> **Self-explanation prompt.** Cover this section. Express 7.2 × 10⁸ ÷ (9 × 10⁻²) in scientific notation. Work through it: 7.2/9 = 0.8, and 10⁸ / 10⁻² = 10¹⁰. So 0.8 × 10¹⁰ = 8 × 10⁹. Did you handle the division of the coefficient and the subtraction of the exponents as two separate steps before recombining? If you tangled them together and got a wrong answer, rerun the calculation with that explicit separation.

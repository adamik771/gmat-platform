---
slug: quant-09-divisibility-factors
title: "Number Properties: Divisibility, Factors & Multiples"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-08-even-odd-integer-properties
summary: |
  Divisibility shortcuts and the factor/multiple machinery that underlies a large share of Quant.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - number-properties-q7
      - number-properties-q8
  - id: divisibility-rules
    type: reading
    title: "Divisibility rules — the shortcuts you can't afford to rederive"
    check_question_ids:
      - number-properties-q5
      - number-properties-q9
  - id: factors-and-multiples
    type: reading
    title: "Factors, multiples, GCF, and LCM"
    check_question_ids:
      - number-properties-q3
      - number-properties-q13
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - number-properties-q9
      - number-properties-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - number-properties-q11
      - number-properties-q12
---

## @divisibility-rules

Every 685+ scorer has the full set of divisibility rules memorized. Not because the test asks you to *state* them — because they let you factor mentally at test-speed without scratch paper.

**The rules, in the order you'll use them:**

| Divisor | Rule |
|---|---|
| 2 | Last digit is even (0, 2, 4, 6, 8) |
| 3 | Digit sum is divisible by 3 |
| 4 | Last two digits form a number divisible by 4 |
| 5 | Last digit is 0 or 5 |
| 6 | Divisible by 2 AND by 3 |
| 8 | Last three digits form a number divisible by 8 |
| 9 | Digit sum is divisible by 9 |
| 10 | Last digit is 0 |
| 11 | Alternating digit sum is divisible by 11 |

**The 3-rule and 9-rule example.** Is `4A6` (a three-digit number with unknown digit A) divisible by 9?

Digit sum `= 4 + A + 6 = 10 + A`. For this to be divisible by 9, and A must be a single digit (0–9), we need `10 + A = 18`, so `A = 8`. Check: `486 / 9 = 54`. ✓

**The 11-rule example.** Is 2431 divisible by 11?

Alternating sum from the right: `1 − 3 + 4 − 2 = 0`. Zero is divisible by 11 (by convention, every integer divides 0). So yes, 2431 is divisible by 11. Confirm: `2431 / 11 = 221`. ✓

**The rules compose.** Divisibility by 12 = divisibility by 3 AND by 4. Divisibility by 15 = divisibility by 3 AND by 5. Divisibility by 36 = divisibility by 4 AND by 9 (not 6 × 6 = 36 via "divisible by 6 twice" — that would double-count the factor of 2). The rule: to check divisibility by `ab` where `gcd(a, b) = 1`, check both `a` and `b` separately.

**The 7 rule exists but isn't worth memorizing.** The GMAT virtually never tests divisibility by 7 through a digit-manipulation rule. If you see "divisible by 7," just do the division.

> **Recall check.** Close your eyes. State — without looking — the divisibility rules for 3, 4, 8, 9, and 11. Now test yourself on a number: is 396 divisible by each of 2, 3, 4, 6, 9? (Answers: yes, yes, yes, yes, yes — 396 = 4 × 99 = 4 × 9 × 11. All five rules agree.) Retrieval practice beats re-reading by 40% on delayed tests (Roediger & Karpicke, 2006) — that's why this box is here instead of a re-summary.

**Trap to watch.** A number divisible by 6 is divisible by 3 *and* 2. But divisibility by 8 is NOT "divisible by 4 twice" — 12 is divisible by 4 but not by 8. The rule only composes cleanly when the factors are coprime.

**Micro-drill.** No long division — apply the rules directly. State yes or no:

1. Is 576 divisible by 9? → ___
2. Is 1,848 divisible by 8? → ___
3. Is 4,653 divisible by 3? → ___
4. Is 3,432 divisible by 11? → ___

Answers: (1) **Yes** — digit sum 5+7+6=18, divisible by 9. (2) **Yes** — last three digits are 848; 848 ÷ 8 = 106. (3) **Yes** — digit sum 4+6+5+3=18, divisible by 3. (4) **Yes** — alternating sum from right: 2−3+4−3=0, and 0 is divisible by 11. If (2) slowed you down, the last-three-digits rule for 8 is the one worth drilling — find the three digits, divide by 8, done.

## @factors-and-multiples

The difference between a factor and a multiple is the same as the difference between a parent and a child. Factors come *from* a number; multiples come *after* it.

- **Factor (divisor) of n:** any positive integer that divides n evenly. Factors of 12: 1, 2, 3, 4, 6, 12.
- **Multiple of n:** any integer of the form n × k. Multiples of 12: 12, 24, 36, 48, … (also 0, and negative multiples, but GMAT usually means positive).

**GCF (Greatest Common Factor) via prime factorization.** For the GCF of 168 and 252:

- `168 = 2³ × 3 × 7`
- `252 = 2² × 3² × 7`
- GCF takes the *minimum* power of each shared prime: `2² × 3¹ × 7¹ = 4 × 3 × 7 = 84`.

**LCM (Least Common Multiple) via prime factorization.** For the LCM of 18, 24, 30:

- `18 = 2 × 3²`
- `24 = 2³ × 3`
- `30 = 2 × 3 × 5`
- LCM takes the *maximum* power of each prime appearing anywhere: `2³ × 3² × 5 = 8 × 9 × 5 = 360`.

**The GCF-LCM identity.** For any two positive integers m and n: `m × n = GCF(m, n) × LCM(m, n)`. Useful on Data Sufficiency when the question gives you any three of {m, n, GCF, LCM} and asks for the fourth.

**Example (DS).** What is the value of m? `n = 12`, `GCF(m, n) = 6`, `LCM(m, n) = 36`.

Using `m × n = GCF × LCM`: `12m = 6 × 36 = 216`, so `m = 18`. Check: `GCF(18, 12) = 6` ✓, `LCM(18, 12) = 36` ✓.

**How to count factors (review).** For `n = p₁^a × p₂^b × …`, the number of positive factors is `(a+1)(b+1)…`. For 36 = 2² × 3², factors = `3 × 3 = 9`. They are: 1, 2, 3, 4, 6, 9, 12, 18, 36.

**Consecutive-integer divisibility.** The product of `n` consecutive integers is always divisible by `n!`. So `n(n+1)(n+2)` is divisible by 6 for every integer n. This appears constantly in "which of the following must be divisible by…" questions.

**Example.** Which must be divisible by 6 for all positive integers n: `n(n+1)`, `n(n+2)`, `n(n+1)(n+2)`, `n² + n + 1`, `n³ + 1`?

- `n(n+1)`: two consecutive integers, divisible by 2! = 2. Not always by 3.
- `n(n+2)`: not always by 3 (try n = 1: 1 × 3 = 3, divisible by 3; n = 2: 2 × 4 = 8, not divisible by 3). Not always by 6.
- `n(n+1)(n+2)`: three consecutive integers, divisible by 3! = 6. ✓
- The other two: fail for small n.

**Trap to watch.** GCF and LCM switch in students' heads under time pressure. Quick check: GCF is smaller (or equal) than either number; LCM is larger (or equal). If your "GCF" is bigger than either input, you found the LCM.

> **Recall check.** Without looking back, state in one sentence each: how to compute GCF from two prime factorizations, how to compute LCM from two prime factorizations, and the GCF-LCM identity. Then test yourself: GCF and LCM of 30 and 45? (Prime-factor: `30 = 2 × 3 × 5`, `45 = 3² × 5`. GCF takes min powers: `3 × 5 = 15`. LCM takes max powers: `2 × 3² × 5 = 90`. Identity check: `30 × 45 = 1350 = 15 × 90`. ✓) If you had to peek for any of those three rules, re-read this section before moving on.

---
slug: quant-07-gcf-lcm-units-digits
title: "Arithmetic: GCF/LCM, Units Digits & Estimation"
section: Quant
estimated_minutes: 9
prerequisites:
  - quant-06-fractions-decimals
summary: |
  GCF/LCM machinery, units-digit cycles for power questions, and estimation discipline.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - arithmetic-q13
      - arithmetic-q14
  - id: gcf-lcm
    type: reading
    title: "GCF and LCM — the machinery behind every fraction operation"
    check_question_ids:
      - arithmetic-q13
  - id: units-digit-patterns
    type: reading
    title: "Units digit patterns — answering power questions in 10 seconds"
    check_question_ids: []
  - id: estimation-tricks
    type: reading
    title: "Estimation — when to compute and when to approximate"
    check_question_ids:
      - arithmetic-q19
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - arithmetic-q15
      - arithmetic-q16
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - arithmetic-q17
      - arithmetic-q18
---

## @gcf-lcm

GCF and LCM are the machinery beneath fraction simplification and common-denominator work. Learn both algorithms once and you will never reduce fractions by guessing or hunt for a common denominator by listing multiples.

**GCF — two methods:**

**Method 1: prime factorization.** Factor both numbers into primes, take each shared prime at its *lowest* exponent, multiply.

- GCF(42, 98): `42 = 2 × 3 × 7` and `98 = 2 × 7²`. Shared primes: 2¹ and 7¹. GCF = 2 × 7 = **14**.

**Method 2: Euclidean algorithm.** Replace the larger number with the remainder of dividing larger by smaller. Repeat until the remainder is 0; the last non-zero remainder is the GCF. Faster for larger numbers.

- GCF(98, 42): 98 = 2 × 42 + 14. Now GCF(42, 14): 42 = 3 × 14 + 0. GCF = **14**.

GMAT speed standard: for two-digit numbers, prime factorization is usually faster. For three-digit or larger, use the Euclidean algorithm.

**LCM — two methods:**

**Formula:** LCM(a, b) = (a × b) / GCF(a, b). Once you have the GCF, LCM costs one multiplication and one division.

- LCM(8, 12): GCF(8, 12) = 4. LCM = (8 × 12) / 4 = **24**.

**Via prime factorization:** take each prime factor at its *highest* exponent.

- LCM(8, 12): `8 = 2³`, `12 = 2² × 3`. LCM = 2³ × 3 = **24**. (Compare to GCF: same prime factors, but GCF uses the min exponent and LCM uses the max.)

**Why GCF and LCM matter on the GMAT:**

1. **Fraction simplification.** Divide numerator and denominator by GCF. `42/98 ÷ (14/14) = 3/7`. No guessing, one step.
2. **Adding fractions.** The LCD is the LCM of the denominators. `1/8 + 1/12` → LCD = LCM(8, 12) = 24 → `3/24 + 2/24 = 5/24`.
3. **Cycle word problems.** "Two buses depart together; bus A runs every 8 minutes, bus B every 12 minutes. When do they next depart together?" → LCM(8, 12) = **24 minutes**. Any "when do two periodic events coincide?" question is LCM in disguise.
4. **Shared-factor questions.** "Is GCF(x, y) > 1?" — the test will ask this in disguise as "do x and y share a common prime factor?" or "is there a number greater than 1 that divides both x and y?"

**The "fully reduced" check.** After reducing a fraction, verify the result by checking that numerator and denominator share no prime factors. For `3/7`: 3 is prime, 7 is prime, they're different — fully reduced. For `6/14`: both are divisible by 2 → not reduced. The GMAT includes partially-reduced equivalents as trap answer choices (see Q13).

**Micro-drill.** Under 45 seconds total:

1. GCF(36, 48) = ___
2. LCM(9, 15) = ___
3. Add `5/12 + 7/18` in simplified form = ___

Answers: (1) **12** (`36 = 2² × 3²`, `48 = 2⁴ × 3`; GCF = 2² × 3 = 12). (2) **45** (GCF(9,15) = 3; LCM = 9 × 15 / 3 = 45). (3) **29/36** (LCD = LCM(12,18) = 36; `15/36 + 14/36 = 29/36`; GCF(29,36) = 1, fully reduced). If (1) gave 6, you found *a* common factor but not the *greatest* — always verify that the quotients share no further factors.

> **Self-explanation prompt.** Why is LCM = (a × b) / GCF? If you can say "because multiplying a and b double-counts the shared factors, so dividing by GCF removes the double-counting exactly once," you understand the relationship — not just the formula.

## @units-digit-patterns

The units digit of any power depends only on the units digit of the base — the higher digits are irrelevant. This means `17^83` has the same units digit as `7^83`, because when you multiply, the units digit of the product depends only on the units digits of the factors. Memorize the eight cycles below and you will answer these questions in under 15 seconds.

**The cycles:**

| Units digit of base | Cycle (1st, 2nd, 3rd, 4th power…) | Cycle length |
|---|---|---|
| 0 | 0, 0, 0, … | 1 — always 0 |
| 1 | 1, 1, 1, … | 1 — always 1 |
| 2 | **2, 4, 8, 6**, 2, 4, 8, 6, … | 4 |
| 3 | **3, 9, 7, 1**, 3, 9, 7, 1, … | 4 |
| 4 | **4, 6**, 4, 6, … | 2 — odd exp → 4, even exp → 6 |
| 5 | 5, 5, 5, … | 1 — always 5 |
| 6 | 6, 6, 6, … | 1 — always 6 |
| 7 | **7, 9, 3, 1**, 7, 9, 3, 1, … | 4 |
| 8 | **8, 4, 2, 6**, 8, 4, 2, 6, … | 4 |
| 9 | **9, 1**, 9, 1, … | 2 — odd exp → 9, even exp → 1 |

Bases 0, 1, 5, 6: units digit never changes. Bases 4, 9: two-step cycles (just check odd/even). Bases 2, 3, 7, 8: four-step cycles — use the remainder method below.

**Method for four-step cycles:**
1. Divide the exponent by 4 and find the remainder.
2. Match the remainder to the cycle position: remainder 1 → position 1, remainder 2 → position 2, remainder 3 → position 3, **remainder 0 → position 4** (the last in the cycle, not the first).

**Example.** Units digit of 7^83.
- Cycle for 7: (7, 9, 3, 1)
- 83 ÷ 4 = 20 remainder **3** → position 3 → units digit is **3**.

**Example.** Units digit of 2^100.
- Cycle for 2: (2, 4, 8, 6)
- 100 ÷ 4 = 25 remainder **0** → position 4 → units digit is **6**.

**The zero-remainder rule.** When the exponent is divisible by 4, the position is *4*, not 1. This is the most common mistake: remainder 0 maps to the last entry of the cycle. For base 7, that's 1; for base 2, that's 6; for base 3, that's 1; for base 8, that's 6.

**Compound example.** What is the units digit of 3^7 + 8^4?

- 3^7: 7 ÷ 4 = 1 r 3 → position 3 in (3, 9, 7, 1) → units digit **7**.
- 8^4: 4 ÷ 4 = 1 r 0 → position 4 in (8, 4, 2, 6) → units digit **6**.
- Sum: 7 + 6 = 13 → units digit of sum is **3**.

**Micro-drill.** Under 60 seconds total:

1. Units digit of 3^25 = ___
2. Units digit of 4^17 = ___
3. Units digit of 9^44 = ___
4. Units digit of 7^100 = ___

Answers: (1) **3** (25 ÷ 4 = 6 r 1 → position 1 → 3). (2) **4** (17 is odd → 4). (3) **1** (44 is even → 1). (4) **1** (100 ÷ 4 = 25 r 0 → position 4 of (7,9,3,1) → 1). If (2) gave 6, remember: for bases ending in 4, it's odd→4, even→6. If (4) gave 7, you treated remainder 0 as position 1 — it's always position 4.

> **Self-explanation prompt.** Why does only the units digit of the base matter? If you can say "because when multiplying integers, the units digit of the product equals the units digit of (units digit of factor 1 × units digit of factor 2)," you understand why `7^83` and `17^83` have the same units digit — and you'll never waste time writing out powers.

## @estimation-tricks

The GMAT rewards students who know when to estimate and when to compute exactly. On every Problem Solving question, scan the answer choices before you start. If the choices are spread (5, 15, 50, 150, 500), estimate. If they're close (11, 12, 13, 14, 15), compute.

**Example (estimation wins).** Which is closest to 1/3: 7/22, 11/32, 5/16, 9/28, or 13/40?

Convert each to a decimal and measure the gap from 1/3 ≈ 0.3333:

- `7/22 ≈ 0.318` (gap ≈ 0.015)
- `11/32 = 0.344` (gap ≈ 0.010)
- `5/16 = 0.3125` (gap ≈ 0.021)
- `9/28 ≈ 0.321` (gap ≈ 0.012)
- `13/40 = 0.325` (gap ≈ 0.008)

The closest is **13/40** (gap ≈ 0.008). A rigorous check uses cross-multiplication: for fraction p/q vs. 1/3, the gap equals |3p − q| / (3q). For 13/40: |39 − 40| / 120 = 1/120. For 11/32: |33 − 32| / 96 = 1/96. Since 1/120 < 1/96, 13/40 wins. The trap: students who compute gaps for only two or three choices and stop early often land on 11/32 — always compare all options before bubbling.

**Estimation heuristics worth memorizing:**

- `π ≈ 3.14 ≈ 22/7`. Close enough for any GMAT geometry question.
- `√2 ≈ 1.414`, `√3 ≈ 1.732`, `√5 ≈ 2.236`. Decimals of these three roots show up constantly.
- 10% of a number is easy; 1% is easier. For 17% of 350, compute 10% = 35, plus 7% = 7 × 3.5 = 24.5. Total ≈ 59.5.
- Doubling and halving preserves a product: `25 × 16 = 50 × 8 = 100 × 4 = 400`. Cleaner numbers, same answer.

**The answer-choice-as-input strategy.** On many Problem Solving questions, plugging the answer choices back into the problem is faster than solving algebraically. If the answers are small integers, plug in the middle value first: if the answer is too big, try a smaller one; if too small, try a bigger one. On average you eliminate two choices with one calculation.

**Compute-exactly signals:**

- Answer choices are close (within 10% of each other).
- The question asks for a remainder or a specific digit.
- The problem says "exactly" or "precisely."

**Estimate signals:**

- Answer choices are spread (each differs from the next by 50%+).
- The problem says "approximately" or "closest to."
- You're multiplying messy decimals and one choice is obviously nearest.

**Trap to watch.** Estimation doesn't mean "guess." It means "round each number to a cleaner value, compute, and check the direction of your rounding error." If you rounded up twice, your estimate is too high; mentally adjust down.

> **Recall check.** Without looking back, state the two conditions that tell you to estimate (spread choices, "approximately") and the two that tell you to compute exactly (tight choices, "remainder" or "exactly"). Now apply the filter: if the answer choices are 4.8, 5.0, 5.2, 5.4, 5.6 — do you estimate or compute? (Compute — the choices are within 17% of each other.) What if they're 5, 15, 45, 135, 405? (Estimate — each is 3× the previous.) The filter fires in under two seconds; by the time you've read the choices, your approach should already be chosen.

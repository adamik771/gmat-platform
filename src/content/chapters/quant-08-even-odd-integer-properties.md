---
slug: quant-08-even-odd-integer-properties
title: "Number Properties: Even/Odd & Integer Properties"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-07-gcf-lcm-units-digits
summary: |
  The smallest ideas with the biggest payoff: even/odd behavior and the integer properties of expressions. Plugging in numbers is the master trick here.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - number-properties-q1
      - number-properties-q2
  - id: even-and-odd
    type: reading
    title: "Even and odd — the smallest ideas with the biggest payoff"
    check_question_ids:
      - number-properties-q2
      - number-properties-q17
  - id: integer-properties-of-expressions
    type: reading
    title: "Integer properties of expressions and units digits"
    check_question_ids:
      - number-properties-q11
      - number-properties-q16
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - number-properties-q3
      - number-properties-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - number-properties-q5
      - number-properties-q6
---

## @even-and-odd

Even and odd feel like elementary-school ideas. They're not — on the GMAT, they're a source of 725+ difficulty because test writers combine them with absolute value, exponents, and Data Sufficiency conditions. What separates students who get these right is not "more memorization" but a fluent internal table they can run through in two seconds.

**Mental model.** Number properties are labels on integers — even, odd, prime, divisor, factor, multiple, remainder. Most questions reduce to "given these labels on these numbers, what's also true?" The work is keeping the labels straight; the arithmetic is rarely hard. Errors here are almost always definitional confusion (forgetting 0 is even, that 1 isn't prime, that GCF is smaller than its inputs), not computational.

**The sum/difference table:**

- even + even = even
- odd + odd = even
- even + odd = odd

**The product table:**

- even × even = even
- even × odd = even
- odd × odd = odd

**One rule beats all of them: even wins multiplication; odd wins to flip addition.** Any product with at least one even factor is even. A sum or difference is odd if and only if it contains an odd number of odd terms.

**Example.** If `m` is even and `n` is odd, which of the following *must* be odd: `m + 2n`, `mn`, `m² + n`, `2m + 2n`, `m − n + 1`?

- `m + 2n`: `even + even = even`. (2n is even regardless of n.)
- `mn`: `even × odd = even`.
- `m² + n`: `even + odd = odd`. ✓
- `2m + 2n`: `even + even = even`.
- `m − n + 1`: `even − odd + odd = even`.

Only `m² + n` must be odd. Every GMAT even/odd question is built this way — translate each symbol, apply the table, pick the one that's forced to the stated parity.

**The expression trick: consecutive integers.** `k(k+1)` is always even because one of two consecutive integers must be even. `k(k+1)(k+2)` is always divisible by `3! = 6` because at least one factor is even and exactly one is divisible by 3. This generalizes — the product of n consecutive integers is divisible by `n!`.

**Example (Data Sufficiency).** Is integer k odd?

- Statement (1): `k² + k` is even. Expand: `k(k+1)`, product of consecutive integers, always even. Tells us nothing. Insufficient.
- Statement (2): `3k + 1` is even. Then `3k` is odd, so `k` must be odd (because `3 × even = even` and `3 × odd = odd`). Sufficient.

Answer: B. The trap is trusting statement (1) because "even + even = even" feels informative — it isn't, because `k² + k` is even for every integer k.

**Trap to watch.** Zero is even. Students forget this constantly on Data Sufficiency. "Is k even?" with `k = 0` is YES. The integer 0 is also divisible by every integer except 0 itself.

> **Self-explanation prompt.** Why is the product of any two consecutive integers always even? If you can say "because one of them is even, and even times anything is even," you've internalized the pattern well enough to recognize `k(k+1)` in disguise on the test.

**Micro-drill.** m is even, n is odd. State whether each expression *must* be even, *must* be odd, or *could be either* — 60 seconds total:

1. m + n + 1 → ___
2. mn + m → ___
3. n² + 2n → ___
4. (m + 1)² → ___

Answers: (1) **even** — even + odd + odd = even. (2) **even** — mn contains m's factor of 2; m is even; even + even = even. (3) **odd** — n² = odd × odd = odd; 2n = even; odd + even = odd. (4) **odd** — m + 1 is odd; odd² = odd. If you missed (3), the chain is: odd² stays odd, and odd + even = odd. If you missed (4), note that squaring preserves parity — only even numbers stay even when squared; odd numbers stay odd.

## @integer-properties-of-expressions

The GMAT frequently asks "must be" or "could be" questions about expressions built from integers. The units-digit cycles are also their own mini-topic with huge payoff.

**Units digit cycles for powers.** The units digit of `nᵏ` depends only on the units digit of n and on k.

| Base's units digit | Cycle of units digits for powers | Period |
|---|---|---|
| 0 | 0 | 1 |
| 1 | 1 | 1 |
| 2 | 2, 4, 8, 6 | 4 |
| 3 | 3, 9, 7, 1 | 4 |
| 4 | 4, 6 | 2 |
| 5 | 5 | 1 |
| 6 | 6 | 1 |
| 7 | 7, 9, 3, 1 | 4 |
| 8 | 8, 4, 2, 6 | 4 |
| 9 | 9, 1 | 2 |

**How to find the cycle position.** Compute `exponent mod period`. The result gives the position in the cycle — except when the result is 0, which maps to the **last** position (not position zero; there is no zeroth entry).

**Example.** Units digit of `3²⁴`? Period 4 cycle is (3, 9, 7, 1). `24 mod 4 = 0` → last position (4) → units digit **1**. Verify: 3⁴ = 81, 3⁸ = 6561, 3¹² = 531441 — every multiple of 4 brings you back to 1. ✓

**Example.** Units digit of `7⁴³`? Cycle (7, 9, 3, 1), period 4. `43 mod 4 = 3` → third entry → units digit **3**.

**Example.** Units digit of `2⁵⁰ + 7³⁰`?

- `2⁵⁰`: cycle (2, 4, 8, 6), period 4. `50 mod 4 = 2` → second entry → **4**.
- `7³⁰`: cycle (7, 9, 3, 1), period 4. `30 mod 4 = 2` → second entry → **9**.
- Sum's units digit: `4 + 9 = 13` → **3**.

**Consecutive-integer identities.** The sum of n consecutive integers equals n times the middle term (when n is odd) — equivalently, `n × (first + last) / 2`.

**Example.** Sum of 5 consecutive integers is 85. Find the largest.

Middle × 5 = 85 → middle = 17 → largest = 17 + 2 = **19**. No variable needed.

**The product rule for consecutive integers.** The product of n consecutive integers is always divisible by n!. This appears in almost every "must be divisible by" question at the 685+ tier.

**Example.** For all positive integers n, must n(n+1)(n+2)(n+3) be divisible by 8?

Four consecutive integers → divisible by 4! = 24. Since 24 = 3 × 8, the product is always divisible by 8. ✓

**Sign and parity of products.** A product is negative if and only if it has an odd number of negative factors. If `xyz < 0`, then exactly 1 or 3 of {x, y, z} are negative.

**Example (Data Sufficiency).** If `xyz < 0`, is `xy` positive?

Statement (1): `z < 0`. With z contributing one negative factor, x and y together must contribute an even count of negatives (so the total stays odd). Even count means both positive or both negative — either way, `xy > 0`. Statement (1) is sufficient.

Statement (2): `x > 0`. Then y and z produce the odd-negative count. y and z could each be negative (making xy negative) or just one of them negative (making xy positive). Not sufficient.

Answer: **A**. The key move was using the odd-negative-count rule to constrain x and y.

**The "must be / could be" discipline.** For "must be" questions, the property must hold for every valid integer — one counter-example kills the choice. For "could be" questions, you only need one case where it holds. Reflex: test n = 0, 1, 2, −1 before trusting intuition.

**Example.** Must `n² − n` be even for all integers n?

Factor: `n² − n = n(n − 1)`, the product of two consecutive integers. Exactly one of them is even, so the product is always even. ✓

Alternative: if n = 2k, then `n² − n = 2k(2k−1)`, which contains 2k. If n = 2k+1, then `n² − n = (2k+1)(2k)`, which contains 2k. Either case gives a factor of 2.

**Trap to watch.** "Must be divisible by X" fails if any single integer breaks it. Test n = 1 or n = 2 before claiming "must be" — the GMAT will have placed a counter-example among the easy cases.

> **Self-explanation prompt.** Cover the units-digit cycle table. From memory, write out the cycles for bases ending in 2, 3, 7, and 8 — each is period 4. (Answers: 2 → 2,4,8,6 / 3 → 3,9,7,1 / 7 → 7,9,3,1 / 8 → 8,4,2,6.) Now apply them: units digit of `8¹⁰⁰⁰ + 3⁵⁰⁰`? (8¹⁰⁰⁰: 1000 mod 4 = 0 → last position → 6. 3⁵⁰⁰: 500 mod 4 = 0 → last position → 1. Sum's units digit: 6 + 1 = **7**.) If you couldn't reproduce the cycles, re-read the table before the problem sets — these turn 30-second questions into one-second questions on the 685+ tier.

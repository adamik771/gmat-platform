---
slug: quant-10-primes-remainders
title: "Number Properties: Primes & Remainders"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-09-divisibility-factors
summary: |
  Prime factorization as the atomic structure of integers, and GMAT-style remainder (modular) reasoning.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - number-properties-q13
      - number-properties-q14
  - id: primes-and-prime-factorization
    type: reading
    title: "Primes and prime factorization — the atomic structure of integers"
    check_question_ids:
      - number-properties-q1
      - number-properties-q8
  - id: remainders
    type: reading
    title: "Remainders — modular arithmetic, GMAT-style"
    check_question_ids:
      - number-properties-q4
      - number-properties-q12
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - number-properties-q15
      - number-properties-q16
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - number-properties-q17
      - number-properties-q18
---

## @primes-and-prime-factorization

Prime factorization is the single most useful technique in number properties. Almost every 685+ question involving factors, multiples, or divisibility yields to prime factorization in two lines.

**What a prime is.** A positive integer greater than 1 whose only divisors are 1 and itself. 2 is the only even prime. 1 is not prime.

**The primes under 50, memorized:**

`2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47`

Fifteen primes. You should know all of them on sight. Students who have to test each odd number with the 3-rule and the 7-rule for every prime question are burning time they need elsewhere.

**Counting primes in an interval.** "How many primes between 20 and 40?" Test odds only (every even >2 is composite): 21 (= 3×7), 23 (prime), 25 (= 5²), 27 (= 3³), 29 (prime), 31 (prime), 33 (= 3×11), 35 (= 5×7), 37 (prime), 39 (= 3×13). Four primes: 23, 29, 31, 37.

**Prime factorization.** Every positive integer > 1 has a unique prime factorization. `360 = 2³ × 3² × 5`. `720 = 2⁴ × 3² × 5`.

**The factor count formula.** If `n = p₁^a × p₂^b × p₃^c × …`, the number of positive factors of n is `(a+1)(b+1)(c+1)…`.

**Example.** How many positive factors does 720 have? `720 = 2⁴ × 3² × 5`. Factor count `= (4+1)(2+1)(1+1) = 5 × 3 × 2 = 30`.

**Perfect squares and prime factorization.** An integer is a perfect square if and only if every exponent in its prime factorization is even. `144 = 2⁴ × 3²` (both exponents even) → perfect square. `72 = 2³ × 3²` (one odd exponent) → not a perfect square.

**Example (hard).** If `n²` is divisible by 72, what's the smallest positive integer n?

`72 = 2³ × 3²`. For `n²` to absorb `2³`, and `n²` is a perfect square (even exponents only), we need `n²` divisible by `2⁴ × 3²`. So `n` must be divisible by `2² × 3 = 12`. Check: `12² = 144 = 72 × 2`. ✓ Smallest n is 12.

**Counting special kinds of factors.** For `n = 2⁵ × 3⁴ × 5³`, how many factors are perfect squares? A factor looks like `2^a × 3^b × 5^c` with `0 ≤ a ≤ 5`, `0 ≤ b ≤ 4`, `0 ≤ c ≤ 3`. For it to be a perfect square, each of a, b, c must be even. a: 0, 2, 4 → 3 choices. b: 0, 2, 4 → 3 choices. c: 0, 2 → 2 choices. Total: `3 × 3 × 2 = 18`.

**Trap to watch.** 1 is a factor of every positive integer and should be counted when the question asks for "positive factors." But 1 is NOT a prime. The distinction matters on every single factor-counting question.

> **Self-explanation prompt.** Why does the factor-count formula `(a+1)(b+1)(c+1)` work? If you can say "because each prime's exponent has `(exponent + 1)` choices from 0 up to its maximum, and each combination gives a unique factor," you understand the formula and won't misapply it.

**Micro-drill.** No calculator — 90 seconds total:

1. How many positive factors does 720 have? → ___
2. List all primes between 40 and 55. → ___
3. What is the smallest positive integer n such that n² is divisible by 180? → ___

Answers: (1) **30** — 720 = 2⁴ × 3² × 5; factor count = (4+1)(2+1)(1+1) = 5 × 3 × 2 = 30. (2) **41, 43, 47, 53** — eliminate composites: 45 = 9×5, 49 = 7², 51 = 3×17; the four survivors are prime. (3) **n = 30** — 180 = 2² × 3² × 5. Since n² must have all even exponents, the single factor of 5 in 180 forces 5² into n², so 5 | n. Similarly 2 | n and 3 | n. Smallest such n = 2 × 3 × 5 = 30. Verify: 30² = 900 = 180 × 5. ✓

## @remainders

Remainder questions show up on 685+ difficulty constantly because they have so many angles: algebra, units digits, modular arithmetic, Data Sufficiency. The good news: they all reduce to one equation.

**The remainder equation.** If n divided by d leaves remainder r, then `n = dk + r` for some non-negative integer k, and `0 ≤ r < d`. This equation is the master tool.

**Example.** n divided by 7 leaves remainder 4. What is the remainder when 3n + 5 is divided by 7?

Write `n = 7k + 4`. Then `3n + 5 = 3(7k + 4) + 5 = 21k + 12 + 5 = 21k + 17`. Now `21k` is divisible by 7, and `17 = 2(7) + 3`. So the remainder is 3.

**Even faster: pick a number.** Choose `n = 4` (smallest n satisfying the condition). Then `3(4) + 5 = 17`, and `17 / 7` has remainder 3. Same answer, no algebra.

**Remainders under multiplication.** When multiplying, the remainders multiply (modulo the divisor). If `x` leaves remainder 5 mod 8 and `y` leaves remainder 3 mod 8, then `xy` leaves remainder `5 × 3 = 15` mod 8, which simplifies to `15 − 8 = 7`.

**Example (hard).** `x = 8q + 5`, `y = 8r + 3`. Find the remainder when xy is divided by 8.

`xy = (8q + 5)(8r + 3) = 64qr + 24q + 40r + 15`. Every term except 15 is divisible by 8. `15 = 8 × 1 + 7`, so remainder is 7.

**Remainders under squaring.** If `n = 5k + 2`, then `n² = 25k² + 20k + 4 = 5(5k² + 4k) + 4`, so `n²` leaves remainder 4 when divided by 5. You can always compute `r²` and reduce mod the divisor.

**The remainder-cycle pattern.** Remainders repeat with period equal to the divisor. If you divide `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, …` by 4, the remainders are `0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, …`. Every fourth integer has the same remainder. This is why remainders behave like addition modulo d.

**Trap to watch.** The remainder is always non-negative. If algebra gives you a negative "remainder," add the divisor until you land in `[0, d)`. E.g., `−7 mod 5`: `−7 + 5 = −2`, still negative; `−2 + 5 = 3`. So `−7` has remainder 3 mod 5.

> **Self-explanation prompt.** In one sentence, why can you just multiply remainders to get the remainder of a product? If you can say "because every other piece of the expanded product is divisible by d, leaving only the product of remainders," you've understood modular arithmetic without needing the formal notation.

**Micro-drill.** Use the remainder equation or pick-a-number — 90 seconds total:

1. n leaves remainder 4 when divided by 6. What remainder does 3n − 1 leave when divided by 6? → ___
2. k leaves remainder 7 when divided by 9. What remainder does k² leave when divided by 9? → ___

Answers: (1) Pick n = 4. Then 3(4) − 1 = 11. 11 ÷ 6 = 1 R **5**. Algebraically: n = 6m + 4, so 3n − 1 = 18m + 12 − 1 = 18m + 11; since 18m + 6 is divisible by 6, remainder = 11 − 6 = **5**. (2) Pick k = 7. Then k² = 49. 49 ÷ 9 = 5 R **4**. Algebraically: k = 9m + 7, so k² = 81m² + 126m + 49; every term except 49 is divisible by 9, and 49 = 5(9) + 4, so remainder = **4**. The pick-a-number shortcut handles both in under 20 seconds — use algebra only when the problem is too abstract to plug in.

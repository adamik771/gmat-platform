---
section: Quant
topic: Number Properties
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Primes

How many prime numbers are between 20 and 40?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** B
**fastest_path:** Test odds 21–39 against divisibility by 3, 5, 7. Primes: 23, 29, 31, 37 → 4.
**explanation:** Skip evens. Among odds 21–39: 21 = 3·7, 25 = 5², 27 = 3³, 33 = 3·11, 35 = 5·7, 39 = 3·13 are composite. Primes: 23, 29, 31, 37. Count = 4.
**mistake_a:** Missed one prime (typically 31 or 37) by stopping the scan early.
**mistake_c:** Counted 25 or 27 as prime — skipped the 5²/3³ check.
**mistake_d:** Counted 21 or 33 as prime — forgot 21 = 3·7 and 33 = 3·11.
**mistake_e:** Counted every odd 21–39 without divisibility checks at all.
**common_trap:** Skipping the divisibility test on small odd composites — 21, 25, 27, 33, 35, 39 all *look* prime if you don't check.
**takeaway:** Memorize primes ≤ 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47. Recognition beats computation.
**related_reading:** reading-quant-03-number-properties

---

## Q2
**difficulty:** Easy
**type:** Problem Solving
**topic:** Even/Odd

If m is an even integer and n is an odd integer, which of the following must be odd?

- A) m + 2n
- B) mn
- C) m² + n
- D) 2m + 2n
- E) m - n + 1

**answer:** C
**fastest_path:** m² is even (even × even). Even + odd = odd → C.
**explanation:** m even → m² even. m² + n = even + odd = odd. Check others: A) m + 2n = even + even = even. B) mn = even × odd = even. D) 2m + 2n = even + even = even. E) m − n + 1 = even − odd + odd = even.
**mistake_a:** Treated 2n as odd — but any integer times 2 is even.
**mistake_b:** Multiplied parities wrong: even × odd = even, not odd.
**mistake_d:** Treated 2m or 2n as odd. Anything times 2 is even.
**mistake_e:** Mis-tracked the parity arithmetic on m − n + 1.
**common_trap:** Forgetting that any integer multiplied by 2 is even, regardless of the integer's parity.
**takeaway:** Parity arithmetic: even ± even = even, odd ± odd = even, even ± odd = odd. Even × anything = even. Anything × 2 = even.
**related_reading:** reading-quant-03-number-properties

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factors

How many positive factors does the number 36 have?

- A) 4
- B) 6
- C) 8
- D) 9
- E) 12

**answer:** D
**fastest_path:** 36 = 2² · 3² → factor count = (2+1)(2+1) = 9.
**explanation:** Factor 36 = 2² × 3². Number of positive factors = (2+1)(2+1) = 9. Listing: 1, 2, 3, 4, 6, 9, 12, 18, 36.
**mistake_a:** Counted only divisors up to √36 (1, 2, 3, 6) and stopped — forgot to mirror.
**mistake_b:** Listed 1, 2, 3, 4, 6, 9 and stopped — missed 12, 18, 36.
**mistake_c:** Hand-counted and missed two of {1, 2, 3, 4, 6, 9, 12, 18, 36}.
**mistake_e:** Computed (2+1) + (2+1)·... mismatched additive vs. multiplicative.
**common_trap:** Hand-listing instead of using the (a+1)(b+1)... formula. Hand-counting always loses factors.
**takeaway:** Factor count of n = 2^a · 3^b · 5^c · ... is (a+1)(b+1)(c+1).... Always factor first, then apply.
**related_reading:** reading-quant-03-number-properties

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders

When the positive integer n is divided by 7, the remainder is 4. What is the remainder when 3n + 5 is divided by 7?

- A) 0
- B) 1
- C) 3
- D) 5
- E) 6

**answer:** C
**fastest_path:** Pick n = 4: 3(4) + 5 = 17 → 17 mod 7 = 3.
**explanation:** Pick the smallest valid n = 4: 3(4) + 5 = 17, and 17 = 2·7 + 3, so remainder is 3. Algebraically: n = 7k + 4 → 3n + 5 = 21k + 17 = 21k + 14 + 3, remainder 3.
**mistake_a:** Computed 17 mod 7 wrong — claimed it divides evenly.
**mistake_b:** Off-by-one when subtracting multiples of 7 from 17.
**mistake_d:** Bubbled the "+5" alone, ignoring the 3n contribution.
**mistake_e:** Inverted: 7 − 3 = 4, then bubbled 6 from another residue confusion.
**common_trap:** Trying to track n directly instead of working modulo 7 from the start.
**takeaway:** When asked for a remainder, work modulo from the start. Plugging in the smallest valid n verifies in one step.
**related_reading:** reading-quant-03-number-properties

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Divisibility

If the three-digit number 4A6 is divisible by 9, where A represents a single digit, what is the value of A?

- A) 2
- B) 4
- C) 6
- D) 8
- E) 9

**answer:** D
**fastest_path:** Digit sum 4 + A + 6 = 10 + A divisible by 9 → A = 8 (sum = 18).
**explanation:** Divisibility by 9: digit sum divisible by 9. 4 + A + 6 = 10 + A. For 10 + A ∈ {9, 18, 27, ...} with A ∈ {0..9}, only A = 8 works → digit sum 18.
**mistake_a:** Used the divisibility-by-3 test (10 + 2 = 12 div by 3, not 9).
**mistake_b:** Used the divisibility-by-3 test (10 + 4 = 14 — fails both).
**mistake_c:** Bubbled 6 because "the digit 6 is already in the number."
**mistake_e:** Bubbled 9 because "9 is the divisor" — forgot to apply the digit-sum test.
**common_trap:** Confusing the divisibility-by-9 rule with divisibility-by-3 (which only requires sum div by 3).
**takeaway:** Divisibility tests: by 3 → digit sum div by 3; by 9 → digit sum div by 9; by 11 → alternating digit sum div by 11.
**related_reading:** reading-quant-03-number-properties

---

## Q6
**difficulty:** Medium
**type:** Problem Solving
**topic:** GCD and LCM

What is the greatest common factor of 168 and 252?

- A) 12
- B) 21
- C) 28
- D) 42
- E) 84

**answer:** E
**fastest_path:** 168 = 2³·3·7, 252 = 2²·3²·7 → GCF = 2²·3·7 = 84.
**explanation:** Prime-factorize: 168 = 2³ × 3 × 7, 252 = 2² × 3² × 7. GCF = product of *minimum* power of each shared prime: 2² × 3¹ × 7¹ = 4 × 3 × 7 = 84.
**mistake_a:** Took 12 = 2² × 3 — forgot the factor of 7.
**mistake_b:** Took 21 = 3 × 7 — forgot the factor of 4.
**mistake_c:** Took 28 = 2² × 7 — forgot the factor of 3.
**mistake_d:** Used 2¹ instead of 2² (took the wrong minimum): 2 × 3 × 7 = 42.
**common_trap:** Confusing GCF (min exponent of each shared prime) with LCM (max exponent). Or dropping one of the three shared primes during multiplication.
**takeaway:** GCF = min powers, LCM = max powers. Identity: GCF × LCM = product of the two numbers.
**related_reading:** reading-quant-03-number-properties

---

## Q7
**difficulty:** Hard
**type:** Problem Solving
**topic:** Remainders

If x and y are positive integers such that x = 8q + 5 and y = 8r + 3, where q and r are positive integers, what is the remainder when xy is divided by 8?

- A) 1
- B) 3
- C) 5
- D) 7
- E) 15

**answer:** D
**fastest_path:** Multiply remainders: 5 × 3 = 15. Then 15 mod 8 = 7.
**explanation:** When taking remainders of products, multiply the remainders then reduce mod 8. 5 × 3 = 15 = 8 + 7 → remainder 7. Algebraic check: (8q + 5)(8r + 3) = 64qr + 24q + 40r + 15 = 8(8qr + 3q + 5r + 1) + 7.
**mistake_a:** Reduced 15 mod 8 incorrectly — subtracted 8 twice (got 1 instead of 7).
**mistake_b:** Took (x mod 8) + (y mod 8) = 8 → 0, then bubbled 3 from another path.
**mistake_c:** Bubbled 5 (just one of the original remainders).
**mistake_e:** Forgot to reduce — bubbled the raw product 15.
**common_trap:** Forgetting to reduce the product back mod 8 — leaving 15 as the answer.
**takeaway:** (x mod m)(y mod m) mod m = xy mod m. Multiply the residues, then reduce. Never skip the final reduction.
**related_reading:** reading-quant-03-number-properties

---

## Q8
**difficulty:** Hard
**type:** Problem Solving
**topic:** Primes and Factors

If n is a positive integer and n² is divisible by 72, what is the smallest possible value of n?

- A) 6
- B) 12
- C) 24
- D) 36
- E) 72

**answer:** B
**fastest_path:** 72 = 2³ · 3². Square exponents are even, so n² needs ≥ 2⁴ · 3². Halve: n needs 2² · 3 = 12.
**explanation:** 72 = 2³ × 3². For n² to be divisible by 72, exponents in n² must each be ≥ those in 72. Since exponents in n² are even, the exponent of 2 must be ≥ 4 (next even ≥ 3); exponent of 3 must be ≥ 2. So n must contain at least 2² × 3 = 12. Verify: 12² = 144 = 72 × 2 ✓.
**mistake_a:** Took √72 ≈ 8.5 and rounded to 6 — but 6² = 36 isn't divisible by 72.
**mistake_c:** Overcorrected to 24 (added an extra factor of 2).
**mistake_d:** Took 36 = 2² · 3² — over-rounded the 3 exponent.
**mistake_e:** Took n = 72 itself — true, but not smallest.
**common_trap:** Forgetting that exponents in a perfect square must be *even*, so any odd-exponent prime in the divisor must be rounded up to the next even.
**takeaway:** For n² divisible by k: round each odd prime-power exponent in k up to the next even number, halve, and that gives n's required factor.
**related_reading:** reading-quant-03-number-properties

---

## Q9
**difficulty:** Easy
**type:** Problem Solving
**topic:** Divisibility Rules

Which of the following numbers is divisible by 11?

- A) 2431
- B) 3456
- C) 5791
- D) 6810
- E) 7239

**answer:** A
**fastest_path:** Alternating digit sum test for 11. 2431: 2 − 4 + 3 − 1 = 0 → divisible.
**explanation:** Divisibility by 11: alternating digit sum from the rightmost must be divisible by 11. For 2431: 1 − 3 + 4 − 2 = 0 ✓. Verify directly: 2431 / 11 = 221. The other options give nonzero alternating sums (3456 → 2; 5791 → −6; 6810 → 1; 7239 → 1).
**mistake_b:** Applied the simple digit sum instead of the alternating sum: 3+4+5+6=18. 18 is divisible by 9 (not 11), so 3456 is rejected — but for the wrong reason. Reinforces the confusion between divisibility-by-9 and divisibility-by-11 rules.
**mistake_c:** Applied the digit-sum (divisibility-by-9) test to 5791: 5+7+9+1=22, which IS divisible by 11 — creating a seductive false positive. 5791 is not divisible by 11 (5791/11 ≈ 526.5), but the non-alternating sum coincidentally passes.
**mistake_d:** Applied the alternating sum starting from the wrong end (left): 6−8+1−0=−1 for 6810 rather than 0−1+8−6=1. Both give a nonzero result, so 6810 is correctly rejected — but the sign order matters on numbers where the ends produce different nonzero values.
**mistake_e:** Computed alternating sum 9−3+2−7=1 for 7239, then confused "remainder of 1 when divided by 11" with "1 away from divisible" and nearly picked it. Divisibility requires the alternating sum to be exactly 0 or ±11, not just close.
**common_trap:** Mis-ordering the signs in the alternating sum (start from the rightmost digit, or be consistent — but stay consistent within a number).
**takeaway:** Divisibility-by-11 test: alternating digit sum (right-to-left) divisible by 11. Quicker than long division for 4+ digits.
**related_reading:** reading-quant-03-number-properties

---

## Q10
**difficulty:** Easy
**type:** Problem Solving
**topic:** Consecutive Integers

The sum of four consecutive integers is 46. What is the product of the smallest and largest of the four integers?

- A) 110
- B) 120
- C) 130
- D) 132
- E) 156

**answer:** C
**fastest_path:** Mean = 46/4 = 11.5, so integers are 10, 11, 12, 13. Product = 10 × 13 = 130.
**explanation:** Let the smallest integer be n. Sum: n + (n+1) + (n+2) + (n+3) = 4n + 6 = 46 → n = 10. The four integers are 10, 11, 12, 13. Product of smallest and largest: 10 × 13 = 130. Shortcut: with an even count of consecutive integers the average is non-integer (46/4 = 11.5), and the integers straddle it symmetrically — two below (10, 11) and two above (12, 13).
**mistake_a:** Multiplied the two smallest instead of the extremes: 10 × 11 = 110. Treated the second integer as the "largest."
**mistake_b:** Computed n × (n+2) = 10 × 12 = 120 — treated the third integer as the largest, skipping n+3.
**mistake_d:** Multiplied the middle pair instead of the extremes: 11 × 12 = 132. Confused "innermost" with "outermost."
**mistake_e:** Multiplied the two largest instead of the extremes: 12 × 13 = 156. Treated the third integer as the "smallest."
**common_trap:** With four consecutive integers n, n+1, n+2, n+3, the extremes are n and n+3 — not the adjacent or middle pairs.
**takeaway:** "Smallest and largest of four consecutive integers" means first and fourth: n and n+3. Their product is n(n+3), not any adjacent pair.
**related_reading:** reading-quant-03-number-properties

---

## Q11
**difficulty:** Easy
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 3²⁴?

- A) 1
- B) 3
- C) 7
- D) 9
- E) 0

**answer:** A
**fastest_path:** Powers of 3 cycle [3, 9, 7, 1] (period 4). 24 mod 4 = 0 → position 4 → units digit 1.
**explanation:** Units digits of 3^n cycle with period 4: 3¹=3, 3²=9, 3³=27→7, 3⁴=81→1, then repeats. Position in cycle = n mod 4 (use 4 if 0). 24 mod 4 = 0 → position 4 → units digit 1.
**mistake_b:** Bubbled the base 3 — ignored the cycle.
**mistake_c:** Bubbled position 3 in the cycle (= 7), not position 4.
**mistake_d:** Bubbled position 2 in the cycle (= 9).
**mistake_e:** Confused with units digit 0 — only multiples of 10 end in 0.
**common_trap:** When n mod 4 = 0, position is 4 (end of the cycle), not 0 (undefined). Easy to mis-index.
**takeaway:** Units-digit cycles of length 4 for primes 2, 3, 7, 8: 2→[2,4,8,6], 3→[3,9,7,1], 7→[7,9,3,1], 8→[8,4,2,6].
**related_reading:** reading-quant-03-number-properties

---

## Q12
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders

When the positive integer n is divided by 5, the remainder is 2. What is the remainder when n² is divided by 5?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** E
**fastest_path:** Pick n = 2: n² = 4, 4 mod 5 = 4.
**explanation:** Pick smallest valid n = 2: 2² = 4, 4 mod 5 = 4. Algebraically: n = 5k + 2 → n² = 25k² + 20k + 4 → remainder 4.
**mistake_a:** Forgot to square — took remainder 2 then divided again, got 0.
**mistake_b:** Picked n = 7 (49/5 = 9 R 4), then mis-read remainder as 1.
**mistake_c:** Bubbled the original remainder 2 — forgot to square.
**mistake_d:** Computed 4 − 1 = 3 from a sign error.
**common_trap:** Bubbling the original remainder (2) instead of squaring it first.
**takeaway:** If n ≡ r (mod m), then n² ≡ r² (mod m). Square the remainder, then reduce.
**related_reading:** reading-quant-03-number-properties

---

## Q13
**difficulty:** Medium
**type:** Problem Solving
**topic:** GCD and LCM

What is the least common multiple of 18, 24, and 30?

- A) 120
- B) 180
- C) 360
- D) 540
- E) 720

**answer:** C
**fastest_path:** 18 = 2·3², 24 = 2³·3, 30 = 2·3·5. LCM = 2³·3²·5 = 360.
**explanation:** Prime-factorize. 18 = 2·3², 24 = 2³·3, 30 = 2·3·5. LCM = max powers across all: 2³ × 3² × 5 = 8 × 9 × 5 = 360.
**mistake_a:** Used 2³·3·5 = 120 — forgot 3².
**mistake_b:** Used 2²·3²·5 = 180 — forgot 2³.
**mistake_d:** Used 2²·3³·5 = 540 — overcorrected on 3.
**mistake_e:** Multiplied two of the three numbers: 24·30 = 720, ignored 18.
**common_trap:** Mixing up LCM (max exponents) with GCF (min exponents); or skipping one prime's contribution entirely.
**takeaway:** LCM = max power of each prime; GCF = min power. Always factor before computing.
**related_reading:** reading-quant-03-number-properties

---

## Q14
**difficulty:** Medium
**type:** Problem Solving
**topic:** Prime Factorization and Counting Factors

How many positive factors does 720 have?

- A) 24
- B) 28
- C) 30
- D) 32
- E) 36

**answer:** C
**fastest_path:** 720 = 2⁴·3²·5 → (4+1)(2+1)(1+1) = 5·3·2 = 30.
**explanation:** Prime-factorize: 720 = 8 · 9 · 10 = 2³ · 3² · 2 · 5 = 2⁴ · 3² · 5. Factor count = (4+1)(2+1)(1+1) = 30.
**mistake_a:** Used 2³ instead of 2⁴: (3+1)(2+1)(1+1) = 24.
**mistake_b:** Off-by-one on one exponent: 28 = 7·4 from (6+1)(3+1) — wrong factorization.
**mistake_d:** Used 2⁵ instead of 2⁴: (5+1)(2+1)(1+1) = ... 32 from a different mis-factor.
**mistake_e:** Mis-factorized 720 as 2⁵·3²·5 — one extra factor of 2 — then applied the formula: (5+1)(2+1)(1+1) = 6·3·2 = 36. The factorization error likely comes from an off-by-one count when repeatedly halving 720.
**common_trap:** Mis-factorizing 720 by missing one factor of 2 or one factor of 3 — the count formula then deviates.
**takeaway:** Factor 720 in clean splits: 8·90 = 8·9·10 = 2⁴·3²·5. Verify via: product of primes^exponents = 16·9·5 = 720 ✓.
**related_reading:** reading-quant-03-number-properties

---

## Q15
**difficulty:** Medium
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 2⁵⁰ + 7³⁰?

- A) 0
- B) 1
- C) 3
- D) 5
- E) 7

**answer:** C
**fastest_path:** 2-cycle [2,4,8,6], 50 mod 4 = 2 → 4. 7-cycle [7,9,3,1], 30 mod 4 = 2 → 9. Sum 4 + 9 = 13 → units 3.
**explanation:** Units of 2⁵⁰: cycle [2,4,8,6], 50 mod 4 = 2 → position 2 → 4. Units of 7³⁰: cycle [7,9,3,1], 30 mod 4 = 2 → position 2 → 9. Sum: 4 + 9 = 13 → units digit 3.
**mistake_a:** Got 6 + 4 = 10 → units 0 (mis-positioned in one cycle).
**mistake_b:** Got 4 + 7 = 11 → units 1 (took 7 itself, not position 2).
**mistake_d:** Got 6 + 9 = 15 → units 5 (mis-positioned in 2-cycle).
**mistake_e:** Got 6 + 1 = 7 (mis-positioned in both cycles).
**common_trap:** Mis-computing the cycle position when n mod 4 = 2 — easy to confuse position 2 with position 1 or 3.
**takeaway:** For sums/products, find each term's units digit independently, then combine. Cycle errors compound — verify each cycle position before adding.
**related_reading:** reading-quant-03-number-properties

---

## Q16
**difficulty:** Medium
**type:** Problem Solving
**topic:** Consecutive Integers

If n is a positive integer, which of the following must be divisible by 6?

- A) n(n+1)
- B) n(n+2)
- C) n(n+1)(n+2)
- D) n² + n + 1
- E) n³ + 1

**answer:** C
**fastest_path:** Product of 3 consecutive integers contains a multiple of 2 *and* a multiple of 3 → divisible by 6.
**explanation:** n(n+1)(n+2) is the product of 3 consecutive integers. Among any 3 consecutive integers, at least one is even (divisible by 2) and exactly one is divisible by 3. So the product is always divisible by 2·3 = 6.
**mistake_a:** n(n+1) — only guaranteed divisible by 2, not always by 3 (e.g., n=1: 1·2 = 2).
**mistake_b:** n(n+2) — only divisible by 2 when n is even; not always by 3.
**mistake_d:** n² + n + 1 = n(n+1) + 1 — adding 1 to an even product gives an odd number; not div by 2.
**mistake_e:** n³ + 1 — for n = 1, gives 2 (not div by 6).
**common_trap:** Stopping at "divisible by 2" without checking divisibility by 3 — or vice versa.
**takeaway:** Product of k consecutive integers is divisible by k!. So 3 consecutives → div by 6, 4 consecutives → div by 24.
**related_reading:** reading-quant-03-number-properties

---

## Q17
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Odd/Even Arithmetic

Is the integer k odd?

(1) k² + k is even.
(2) 3k + 1 is even.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**fastest_path:** (1) k(k+1) is *always* even — useless. (2) 3k + 1 even → 3k odd → k odd. Sufficient.
**explanation:** Statement (1): k² + k = k(k+1) is product of consecutive integers — always even regardless of k. Tells us nothing → insufficient.
Statement (2): 3k + 1 even ↔ 3k odd ↔ k odd (since 3·odd = odd, 3·even = even). Definite YES → sufficient. Answer: B.
**mistake_a:** Treated (1) as a constraint — missed that k(k+1) is always even.
**mistake_c:** Required both — but (2) alone resolves the question.
**mistake_d:** Treated (1) as sufficient too.
**mistake_e:** Concluded both insufficient — but (2) clearly determines parity.
**common_trap:** Treating "always-true" expressions as constraints — k² + k = k(k+1) is always even, so (1) is information-free.
**takeaway:** When a statement gives an algebraic identity that's true for *all* values, it's information-free. Always test with both parities first.
**related_reading:** reading-quant-03-number-properties

---

## Q18
**difficulty:** Hard
**type:** Problem Solving
**topic:** Integer Properties

If x, y, and z are integers with xyz < 0 and x + y + z > 0, which of the following must be true?

- A) Exactly one of x, y, z is negative.
- B) Exactly two of x, y, z are negative.
- C) All three are positive.
- D) At least one is zero.
- E) x + y + z is negative.

**answer:** A
**fastest_path:** xyz < 0 → odd # negatives (1 or 3). All 3 negative would force sum < 0 → only 1 negative.
**explanation:** xyz < 0 means odd number of negatives among x, y, z (1 or 3). If all 3 are negative, sum < 0 contradicts x + y + z > 0. So exactly 1 must be negative; the other 2 are positive and large enough to make the sum positive.
**mistake_b:** Mis-applied sign rule — thought 2 negatives makes the product negative (it makes it positive).
**mistake_c:** Ignored the xyz < 0 constraint entirely.
**mistake_d:** Required a zero — but xyz < 0 forbids any zero.
**mistake_e:** Inverted the sum constraint — contradicts the given.
**common_trap:** Forgetting that an *even* # of negatives makes the product positive. Sign-counting error.
**takeaway:** Sign rules for products: even # negatives → positive; odd # negatives → negative. Combine with sum constraint to pin down counts.
**related_reading:** reading-quant-03-number-properties

---

## Q19
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** GCD and LCM

If m and n are positive integers, what is the value of m?

(1) The greatest common divisor of m and n is 6.
(2) The least common multiple of m and n is 36, and n = 12.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Identity: GCD · LCM = mn. With n = 12, GCD = 6, LCM = 36 → m = 6·36/12 = 18.
**explanation:** Statement (1) alone: GCD(m, n) = 6 — m could be 6, 12, 18, 24, ... — insufficient. Statement (2) alone: LCM(m, 12) = 36 — m ∈ {9, 18, 36} — insufficient. Together: use identity GCD · LCM = mn → 6 · 36 = 12m → m = 18. Sufficient. Answer: C.
**mistake_a:** Treated (1) alone as sufficient — m has many possibilities.
**mistake_b:** Treated (2) alone as sufficient — m could be 9, 18, or 36.
**mistake_d:** Treated each alone as sufficient — neither is.
**mistake_e:** Concluded together insufficient — the identity pins it down.
**common_trap:** Forgetting the identity GCD(m,n) × LCM(m,n) = mn — always available when both are given.
**takeaway:** GCD × LCM = product of the two numbers. Memorize this identity; it solves dozens of DS problems.
**related_reading:** reading-quant-03-number-properties

---

## Q20
**difficulty:** Hard
**type:** Problem Solving
**topic:** Prime Factorization and Counting Factors

If n = 2⁵ · 3⁴ · 5³, how many positive factors of n are perfect squares?

- A) 6
- B) 9
- C) 12
- D) 18
- E) 24

**answer:** D
**fastest_path:** Each exponent must be even. a ∈ {0, 2, 4} (3), b ∈ {0, 2, 4} (3), c ∈ {0, 2} (2). Total 3·3·2 = 18.
**explanation:** A factor of n has form 2^a · 3^b · 5^c with 0 ≤ a ≤ 5, 0 ≤ b ≤ 4, 0 ≤ c ≤ 3. Perfect square requires each exponent even. Even values: a ∈ {0, 2, 4} (3 choices); b ∈ {0, 2, 4} (3 choices); c ∈ {0, 2} (2 choices — note c can't be 4). Total: 3 × 3 × 2 = 18.
**mistake_a:** Counted 3 + 3 = 6 (added instead of multiplied).
**mistake_b:** Counted 3 × 3 = 9 (forgot the factor for c).
**mistake_c:** Used c ∈ {0, 2, 4} (4 isn't valid since exponent max is 3): 3·3·... = 12.
**mistake_e:** Used (5+1)(4+1)(3+1)/halved-wrong — got 24 from a flawed shortcut.
**common_trap:** Letting c = 4 sneak into the even-exponent set even though c ≤ 3. Always check the *cap* before counting.
**takeaway:** For perfect-square factors of 2^a · 3^b · ...: count *valid* even values (incl. 0, capped at the actual exponent) for each prime, then multiply.
**related_reading:** reading-quant-03-number-properties

---

## Q21
**difficulty:** Hard
**type:** Problem Solving
**topic:** Trailing Zeros in Factorials

If n is a positive integer such that n! ends in exactly seven zeros, what is the greatest possible value of n?

- A) 29
- B) 31
- C) 32
- D) 34
- E) 35

**answer:** D
**fastest_path:** Trailing zeros = ⌊n/5⌋ + ⌊n/25⌋. Hits 7 at n = 30 (6+1). Stays 7 through n = 34. Jumps to 8 at n = 35.
**explanation:** Trailing zeros in n! = ⌊n/5⌋ + ⌊n/25⌋ + ... (Legendre's formula counting factors of 5). For n = 25–29: 5 + 1 = 6 zeros. For n = 30–34: 6 + 1 = 7 zeros. At n = 35: 7 + 1 = 8 zeros. Greatest n with exactly 7 zeros: 34.
**mistake_a:** Took 29 — count is still 6 at n = 29, not 7.
**mistake_b:** Took 31 — within the "7 zeros" range but not the greatest.
**mistake_c:** Took 32 — within range but not the greatest.
**mistake_e:** Took 35 — the *first* n where count exceeds 7 (now 8), not the greatest where it equals 7.
**common_trap:** Picking the first n where count reaches 7 (which is 30) or the first n where it exceeds 7 (which is 35). Question asks for the *greatest* n where count = 7.
**takeaway:** Trailing zeros in n!: count factors of 5 (⌊n/5⌋ + ⌊n/25⌋ + ...). Counts jump at multiples of 5 — pin the range, not the boundary.
**related_reading:** reading-quant-03-number-properties

---

## Q22
**difficulty:** Hard
**type:** Problem Solving
**topic:** Sums of Two Squares

Positive integers p and q satisfy p² + q² = 193 with p > q. What is the value of p − q?

- A) 1
- B) 3
- C) 5
- D) 7
- E) 9

**answer:** C
**fastest_path:** 193 odd → one even, one odd. Try q = 7: p² = 144 → p = 12. p − q = 5.
**explanation:** 193 is odd, so exactly one of p, q is even. Try small q: q = 1 → p² = 192 (not square); q = 3 → p² = 184 (not); q = 5 → p² = 168 (not); q = 7 → p² = 144 → p = 12 ✓. With p > q: p − q = 12 − 7 = 5.
**mistake_a:** Took (p, q) = (13, 12) without verifying — fails 193.
**mistake_b:** Stopped at q = 4 (p² = 177 — not square) and bubbled near miss.
**mistake_d:** Used (13, 6) without checking — fails 193.
**mistake_e:** Inverted q − p = −5; bubbled |q − p| = ... mis-traced to 9.
**common_trap:** Trying random pairs without using parity (193 odd → mixed parities) to narrow the search.
**takeaway:** For p² + q² = N: parity of N determines parity-mix. N mod 4 = 1 → one odd, one even. Test small q first.
**related_reading:** reading-quant-03-number-properties

---

## Q23
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Divisibility — Lifting Prime Powers

Is the positive integer n divisible by 18?

(1) n is divisible by 12.
(2) n² is divisible by 27.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** 18 = 2·3². (1) gives 2² and 3¹ only. (2) lifts: n² div by 3³ → n div by 3². Together: 2 + 3² → 18.
**explanation:** 18 = 2 · 3². Statement (1): n div by 12 = 2²·3 — has 2 but only 3¹ guaranteed. Counter: n = 12 fails. Insufficient. Statement (2): n² div by 27 = 3³ means exponent of 3 in n² ≥ 3. Since exponents in squares are even, exponent of 3 in n must be ≥ 2 → n div by 9. But (2) says nothing about 2. Insufficient. Together: 2 (from 1) + 3² (from 2) → div by 18. Sufficient. Answer: C.
**mistake_a:** Treated (1) alone as sufficient — only gives 3¹.
**mistake_b:** Treated (2) alone as sufficient — gives 3² but not 2.
**mistake_d:** Each alone — neither is.
**mistake_e:** Concluded together insufficient — but they combine cleanly.
**common_trap:** For "n² div by p^k" inferences: students forget that exponents in squares double, so n² div by 3³ → n div by 3² (not 3³).
**takeaway:** For n² divisibility: exponent of prime p in n is at least ⌈k/2⌉ when n² is div by p^k.
**related_reading:** reading-quant-03-number-properties

---

## Q24
**difficulty:** Medium
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 3^19 × 7^14?

- A) 1
- B) 3
- C) 6
- D) 7
- E) 9

**answer:** B
**hint_nudge:** Find the units digit of each factor separately using cycle patterns, then multiply those units digits.
**hint_strategy:** Both 3 and 7 have period-4 units-digit cycles. Use n mod 4 to find the cycle position for each exponent.
**hint_setup:** 3-cycle: [3, 9, 7, 1]. 19 mod 4 = 3 → position 3 → 7. Now do the same for 7^14.
**fastest_path:** 3^19: cycle [3,9,7,1], 19 mod 4 = 3 → 7. 7^14: cycle [7,9,3,1], 14 mod 4 = 2 → 9. Product units: 7 × 9 = 63 → 3.
**explanation:** Two-step units-digit problem — find each factor's units digit, then multiply. For 3^19: the cycle [3, 9, 7, 1] repeats every 4. 19 mod 4 = 3 → position 3 → units digit 7. For 7^14: the cycle [7, 9, 3, 1] repeats every 4. 14 mod 4 = 2 → position 2 → units digit 9. Product: 7 × 9 = 63 → units digit 3.
**mistake_a:** Used the quotient instead of the remainder when computing 7^14's position: 14÷4 = 3 remainder 2, but took the quotient 3 as the cycle position → 7-cycle position 3 → 3. Then 7 × 3 = 21 → units 1.
**mistake_c:** Added the two units digits instead of multiplying: 7 + 9 = 16 → units 6. The addition pattern from single-power problems transferred incorrectly.
**mistake_d:** Found 3^19 units digit (7) correctly but stopped there without applying the 7^14 factor.
**mistake_e:** Found 7^14 units digit (9) correctly but stopped there without applying the 3^19 factor.
**common_trap:** Products require multiplying both units digits, not picking one. Stopping after the first computation is the primary error.
**takeaway:** For a product of two powers, compute each unit digit independently via its cycle (mod 4), then find the units digit of their product. Three steps total — not two.
**related_reading:** reading-quant-03-number-properties

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Remainders — Chinese Remainder Setup

When a positive integer n is divided by 15, the remainder is 7. When n is divided by 7, the remainder is 3. What is the smallest possible value of n?

- A) 22
- B) 37
- C) 52
- D) 67
- E) 82

**answer:** C
**fastest_path:** n = 15k + 7. n mod 7 = (k + 0) mod 7 (since 15 mod 7 = 1, 7 mod 7 = 0). Need k ≡ 3 → k = 3 → n = 52.
**explanation:** Write n = 15k + 7. Then n mod 7 = (15k + 7) mod 7 = (k + 0) mod 7 = k mod 7. The condition n ≡ 3 (mod 7) forces k ≡ 3 (mod 7) → smallest k = 3 → n = 45 + 7 = 52. Verify: 52/15 = 3 R 7 ✓; 52/7 = 7 R 3 ✓.
**mistake_a:** Took 22 = 15·1 + 7 — fails second condition (22/7 = 3 R 1).
**mistake_b:** Took 37 — fails (37/7 = 5 R 2).
**mistake_d:** Took 67 — also valid but not smallest (next after 52).
**mistake_e:** Took 82 — also valid but not smallest.
**common_trap:** Listing values of n that satisfy only the first condition, then iterating manually instead of using algebraic substitution to fix the second condition in one step.
**takeaway:** Substitute the first condition into the second: n = 15k + 7, then k mod 7 gives the constraint on k. One-step reduction.
**related_reading:** reading-quant-03-number-properties

---

## Q26
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Divisibility by 6

Is the positive integer k divisible by 6?

(1) k is divisible by 4.
(2) k + 2 is divisible by 3.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**fastest_path:** (2): k + 2 ≡ 0 (mod 3) → k ≡ 1 (mod 3) → k NOT div by 3 → NOT div by 6. Definite NO → sufficient.
**explanation:** 6 = 2 × 3. Statement (1): k div by 4 gives factor of 2 but not 3. k = 4 NO; k = 12 YES. Insufficient. Statement (2): k + 2 ≡ 0 (mod 3) → k ≡ 1 (mod 3) → k is *not* div by 3 → never div by 6. Definite NO → sufficient. Answer: B.
**mistake_a:** Treated (1) as sufficient — but k = 4 isn't div by 6 while k = 12 is.
**mistake_c:** Required both — (2) alone resolves with definite NO.
**mistake_d:** Treated each as sufficient — only (2) is.
**mistake_e:** Concluded both insufficient — definite NO is sufficient.
**common_trap:** Forgetting that "definite NO" is just as sufficient as "definite YES" in DS.
**takeaway:** DS yes/no sufficiency: a statement giving a *consistent* answer (always yes OR always no) is sufficient. Don't bias toward "yes."
**related_reading:** reading-quant-03-number-properties

---

## Q27
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Prime Identification

If n is an integer greater than 1, is n prime?

(1) n is odd.
(2) n has exactly two positive divisors.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**fastest_path:** (2) is the *definition* of prime — sufficient. (1) is too weak: 3 prime, 9 not.
**explanation:** Statement (1): n = 3 (prime, odd) and n = 9 (not prime, odd) both satisfy. Insufficient. Statement (2): "exactly two positive divisors" *is* the definition of prime (1 and n itself). Sufficient. Answer: B.
**mistake_a:** Treated (1) as sufficient — odd composites (9, 15, 21) defeat it.
**mistake_c:** Required both — (2) alone is the definition.
**mistake_d:** Treated each as sufficient.
**mistake_e:** Concluded both insufficient — (2) is the definition.
**common_trap:** Treating "odd" as a proxy for "prime" — forgetting that odd composites exist (9, 15, 21, ...).
**takeaway:** Definitions are sufficient by themselves. Recognize when a statement *defines* the property, not just hints at it.
**related_reading:** reading-quant-03-number-properties

---

## Q28
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** LCM and GCD Identity

If x and y are positive integers, what is the value of LCM(x, y)?

(1) x = 12 and y = 18.
(2) GCD(x, y) = 6 and xy = 216.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** (1) Direct: LCM(12, 18) = 36. (2) Identity: LCM = xy/GCD = 216/6 = 36. Each alone → D.
**explanation:** Statement (1): 12 = 2²·3, 18 = 2·3² → LCM = 2²·3² = 36. Sufficient. Statement (2): identity LCM · GCD = xy → LCM = 216/6 = 36. Sufficient. Each alone works → D.
**mistake_a:** Treated only (1) as sufficient — missed the identity.
**mistake_b:** Treated only (2) as sufficient.
**mistake_c:** Required both — neither needs the other.
**mistake_e:** Concluded both insufficient — both pin LCM to 36.
**common_trap:** Assuming (2) underdetermines the answer because x and y aren't pinned individually (they could be (6, 36), (12, 18), (18, 12)) — but LCM is uniquely 36 in all cases.
**takeaway:** GCD × LCM = xy. Even when x and y aren't individually determined, this identity often fixes LCM (or GCD) uniquely.
**related_reading:** reading-quant-03-number-properties

---

## Q29
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Parity of a Product

If x and y are integers, is the product xy even?

(1) x + y is even.
(2) x − y is odd.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**fastest_path:** (2): x − y odd ↔ exactly one of x, y is odd ↔ xy even. Sufficient.
**explanation:** Statement (1): x + y even → both even (xy even) OR both odd (xy odd). Different answers — insufficient. Statement (2): x − y odd → x, y have different parities → exactly one is even → xy is even. Definite YES → sufficient. Answer: B.
**mistake_a:** Treated (1) as sufficient — but parity-pair ambiguity gives both YES and NO.
**mistake_c:** Required both — (2) alone resolves.
**mistake_d:** Treated each as sufficient.
**mistake_e:** Concluded both insufficient — (2) gives a definite YES.
**common_trap:** Forgetting that "x + y even" allows BOTH (even, even) AND (odd, odd) — ambiguous parity, ambiguous product.
**takeaway:** Sum parity alone doesn't determine product parity, but *difference* parity does (odd diff → mixed parities → even product).
**related_reading:** reading-quant-03-number-properties

---

## Q30
**difficulty:** Hard
**type:** Problem Solving
**topic:** Triplets of Prime Numbers

What is the smallest positive integer n such that n, n + 2, and n + 4 are all prime?

- A) 3
- B) 5
- C) 7
- D) 11
- E) 17

**answer:** A
**fastest_path:** Try n = 3: 3, 5, 7 all prime ✓. (Among any 3 odd numbers spaced by 2, one is divisible by 3 — only when that one *is* 3 can all three be prime.)
**explanation:** Try n = 3: 3, 5, 7 — all prime ✓. For any n > 3: among n, n + 2, n + 4, one is divisible by 3 (they cover three consecutive residues mod 3), and being > 3 makes it composite. So (3, 5, 7) is the *only* such triple.
**mistake_b:** Tried n = 5: 5, 7, 9 — 9 is not prime.
**mistake_c:** Tried n = 7: 7, 9, 11 — 9 is not prime.
**mistake_d:** Tried n = 11: 11, 13, 15 — 15 is not prime.
**mistake_e:** Tried n = 17: 17, 19, 21 — 21 is not prime.
**common_trap:** Skipping n = 3 as "too small" or testing larger values first; missing the unique mod-3 structure.
**takeaway:** Among any 3 numbers in AP with common difference 2, one is divisible by 3 — so (3, 5, 7) is the *only* prime triplet of this form.
**related_reading:** reading-quant-03-number-properties

---

## Q31
**difficulty:** Medium
**type:** Problem Solving
**topic:** Consecutive Integers — Sum to Largest

The sum of 5 consecutive positive integers is 215. What is the largest of the 5 integers?

- A) 41
- B) 42
- C) 43
- D) 44
- E) 45

**answer:** E
**fastest_path:** Mean = 215/5 = 43 = middle. Largest = 43 + 2 = 45.
**explanation:** For 5 consecutive integers, mean = median = middle = 215/5 = 43. The integers are 41, 42, 43, 44, 45. Largest = 45.
**mistake_a:** Bubbled 41 — the smallest, not the largest.
**mistake_b:** Bubbled 42 — off-by-one from the middle.
**mistake_c:** Bubbled 43 — the median, not the largest.
**mistake_d:** Bubbled 44 — off-by-one from the largest.
**common_trap:** Bubbling the median (43) instead of the largest. "Sum/count" gives the *middle*, not the max.
**takeaway:** For odd-count consecutives: middle = sum/count. Largest = middle + (count − 1)/2.
**related_reading:** reading-quant-03-number-properties

---

## Q32
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Remainders — Reverse Engineering

When a positive integer n is divided by 7, what is the remainder?

(1) When 2n + 5 is divided by 7, the remainder is 4.
(2) When n − 1 is divided by 7, the remainder is 2.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** (1) 2n + 5 ≡ 4 → 2n ≡ −1 ≡ 6 → n ≡ 3 (mod 7). (2) n − 1 ≡ 2 → n ≡ 3. Each alone determines n mod 7.
**explanation:** Statement (1): 2n + 5 ≡ 4 (mod 7) → 2n ≡ −1 ≡ 6 (mod 7) → n ≡ 3 (mod 7) (multiply both sides by 4, the modular inverse of 2 mod 7 since 2·4 = 8 ≡ 1). Sufficient. Statement (2): n − 1 ≡ 2 (mod 7) → n ≡ 3 (mod 7). Sufficient. Each alone works → D.
**mistake_a:** Treated only (1) as sufficient.
**mistake_b:** Treated only (2) as sufficient.
**mistake_c:** Required both — neither needs the other.
**mistake_e:** Concluded both insufficient — both pin n mod 7 = 3.
**common_trap:** Thinking "2n + 5 mod 7" is too transformed to recover n mod 7 — but linear maps with coefficient coprime to 7 are invertible mod 7.
**takeaway:** A linear transformation an + b mod m determines n mod m as long as gcd(a, m) = 1.
**related_reading:** reading-quant-03-number-properties

---

## Q33
**difficulty:** Medium
**type:** Problem Solving
**topic:** Consecutive Multiples

The sum of four consecutive positive multiples of 5 is 230. What is the smallest of these four multiples?

- A) 40
- B) 45
- C) 50
- D) 55
- E) 60

**answer:** C
**fastest_path:** Smallest = 5k. Sum = 4(5k) + (0 + 5 + 10 + 15) = 20k + 30 = 230 → k = 10 → smallest = 50.
**explanation:** Let smallest be 5k. Multiples: 5k, 5k + 5, 5k + 10, 5k + 15. Sum = 20k + 30 = 230 → k = 10 → smallest = 50. Verify: 50 + 55 + 60 + 65 = 230 ✓.
**mistake_a:** Bubbled 40 — off by one multiple too low.
**mistake_b:** Bubbled 45 — off by one.
**mistake_d:** Bubbled 55 — took the second multiple, not the smallest.
**mistake_e:** Bubbled 60 — took the third multiple.
**common_trap:** Setting up the consecutive multiples wrong — using 5k, 10k, 15k, 20k (geometric, not arithmetic).
**takeaway:** "Consecutive multiples of m" means terms differing by m: a, a + m, a + 2m, a + 3m. Setup matters more than computation.
**related_reading:** reading-quant-03-number-properties

---

## Q34
**difficulty:** Medium
**type:** Problem Solving
**topic:** LCM Application — Bells Ringing

Three bells ring at intervals of 6, 9, and 15 minutes respectively. They all ring together at 12:00 noon. At what time will they next ring all together?

- A) 12:45 PM
- B) 1:00 PM
- C) 1:15 PM
- D) 1:30 PM
- E) 2:00 PM

**answer:** D
**fastest_path:** LCM(6, 9, 15) = 90 min = 1h 30m. 12:00 + 1:30 = 1:30 PM.
**explanation:** Bells coincide at LCM of intervals. 6 = 2·3, 9 = 3², 15 = 3·5. LCM = 2 · 3² · 5 = 90 min = 1h 30m. 12:00 PM + 90 min = 1:30 PM.
**mistake_a:** Found LCM of only two of the three bells (the 9- and 15-minute ones): LCM(9, 15) = 45 min → 12:45 PM. Forgot to verify the 6-minute bell also rings at 45 min (it doesn't: 45/6 = 7.5).
**mistake_b:** Misread the 9-minute interval as 12 minutes and computed LCM(6, 12, 15) = 60 min → 1:00 PM. (LCM(6, 12, 15) = 2²·3·5 = 60 is correct for those numbers, but 9 ≠ 12.)
**mistake_c:** Correct approach, arithmetic slip: computed LCM(9, 15) = 45 then LCM(45, 6) incorrectly as 75 instead of 90.
**mistake_e:** Over-counted prime powers: used 2²·3²·5 = 180 or confused the 2-exponent from 6 = 2·3 as higher — arrived at 120 instead of 2·3²·5 = 90.
**common_trap:** Taking LCM of only two of the three intervals (e.g., LCM(6, 9) = 18, then ignoring 15).
**takeaway:** For "next simultaneous event" with periodic events at intervals a, b, c: time = LCM(a, b, c). All three must factor into the LCM.
**related_reading:** reading-quant-03-number-properties

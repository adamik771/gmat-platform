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
**mistake_e:** Mis-applied parity: even − odd = odd (not even), so m − n is already odd. Then m − n + 1 = odd + 1 = even, not odd. E is wrong because the student confused even − odd with even − even.
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
**mistake_a:** Computed 17 mod 7 wrong — divided 17 by 7 and claimed no remainder (perhaps misread 7 × 2 = 17).
**mistake_b:** Computed 7 × 2 = 16 (arithmetic slip), so 17 − 16 = 1 instead of 17 − 14 = 3.
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
**topic:** Multiples

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
**mistake_a:** Applied floor instead of ceiling when halving the odd exponent of 2: took ⌊3/2⌋ = 1 instead of ⌈3/2⌉ = 2, giving n = 2¹ × 3¹ = 6. But 6² = 36 is not divisible by 72.
**mistake_c:** Overcorrected to 24 (added an extra factor of 2).
**mistake_d:** Took 36 = 2² · 3² — over-rounded the 3 exponent.
**mistake_e:** Took n = 72 itself — true, but not smallest.
**common_trap:** Forgetting that exponents in a perfect square must be *even*, so any odd-exponent prime in the divisor must be rounded up to the next even.
**takeaway:** For n² divisible by k: round each odd prime-power exponent in k up to the next even number, halve, and that gives n's required factor.
**related_reading:** reading-quant-03-number-properties

---

## Q9
**difficulty:** Medium
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
**explanation:** Divisibility by 11: the alternating digit sum must be divisible by 11 (including 0). Apply right-to-left (units first): for 2431 → 1 − 3 + 4 − 2 = 0 ✓. Direct check: 2431 ÷ 11 = 221. The other options all give nonzero alternating sums: 3456 → 2; 5791 → −6; 6810 → 1; 7239 → 1.
**mistake_b:** Confused divisibility-by-9 with divisibility-by-11 — digit sum of 3456 is 18 (divisible by 9) but alternating sum is −2 (not divisible by 11). Verify: 3456 ÷ 11 = 314.2… not divisible.
**mistake_c:** Added all digits of 5791 (5+7+9+1 = 22) instead of alternating them — confused the digit-sum test with the alternating-sum test. Correct alternating sum (right-to-left): 1 − 9 + 7 − 5 = −6 ≠ 0.
**mistake_d:** Grouped digit pairs instead of alternating individual digits for 6810: (6+1) − (8+0) = −1 ≠ 0. Correct alternating sum (right-to-left): 0 − 1 + 8 − 6 = 1 ≠ 0.
**mistake_e:** Applied the same digit-pair grouping to 7239: (7+3) − (2+9) = −1 ≠ 0. Correct alternating sum (right-to-left): 9 − 3 + 2 − 7 = 1 ≠ 0.
**common_trap:** Applying the alternating sum to digit *pairs* instead of individual digits, or computing left-to-right vs. right-to-left inconsistently across problems. Both directions give the same result if applied consistently — but mixing directions within a single number produces errors.
**takeaway:** Divisibility-by-11 test: alternate signs on individual digits (rightmost first): units − tens + hundreds − thousands … If the result is 0 or ±11, the number is divisible by 11. Quicker than long division for 4-digit numbers. Verify any "close call" by direct division.
**related_reading:** reading-quant-03-number-properties

---

## Q10
**difficulty:** Easy
**type:** Problem Solving
**topic:** Consecutive Integers

The sum of five consecutive integers is 85. What is the largest of the five integers?

- A) 15
- B) 17
- C) 19
- D) 21
- E) 23

**answer:** C
**fastest_path:** Mean = 85/5 = 17 = middle. Largest = 17 + 2 = 19.
**explanation:** For an odd count of consecutive integers, mean = median = middle integer = 85/5 = 17. The integers are 15, 16, 17, 18, 19. Largest = 19.
**mistake_a:** Bubbled 15 — the smallest, not the largest.
**mistake_b:** Bubbled 17 — the average, not the largest.
**mistake_d:** Off-by-one: took 17 + 4 = 21 (added the *count* − 1, not the half-spread).
**mistake_e:** Took 17 + 6 = 23 — over-stretched the range.
**common_trap:** Bubbling the average (17) instead of the largest. The question asks for max, not median.
**takeaway:** For odd-count consecutives: middle = sum/count. Largest = middle + (count−1)/2. Sort by position from the median.
**related_reading:** reading-quant-03-number-properties

---

## Q11
**difficulty:** Easy
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 3²⁴?

- A) 0
- B) 1
- C) 3
- D) 7
- E) 9

**answer:** B
**fastest_path:** Powers of 3 cycle [3, 9, 7, 1] (period 4). 24 mod 4 = 0 → position 4 → units digit 1.
**explanation:** Units digits of 3^n cycle with period 4: 3¹=3, 3²=9, 3³=27→7, 3⁴=81→1, then repeats. Position in cycle = n mod 4 (use 4 if 0). 24 mod 4 = 0 → position 4 → units digit 1.
**mistake_a:** Confused with units digit 0 — only multiples of 10 end in 0, and 3^n never picks up a factor of 10.
**mistake_c:** Bubbled the base 3 — ignored the cycle entirely.
**mistake_d:** Bubbled position 3 in the cycle (= 7), not position 4.
**mistake_e:** Bubbled position 2 in the cycle (= 9).
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
**mistake_a:** Forgot to square — took n mod 5 = 2, then reduced 2 mod 5 = 2... but tried to divide again and concluded 0.
**mistake_b:** Squared the remainder to get 4, then subtracted from the modulus: 5 − 4 = 1 (confused remainder with complement).
**mistake_c:** Bubbled the original remainder 2 — forgot to square it.
**mistake_d:** Computed 2² = 4, then applied "4 − 1 = 3" from a spurious off-by-one adjustment.
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
**mistake_d:** Mis-factored 720 as 2³·3³·5 (over-counted the exponent of 3): (3+1)(3+1)(1+1) = 4·4·2 = 32.
**mistake_e:** Mis-factored 720 as 2⁵·3²·5 (over-counted the exponent of 2): (5+1)(2+1)(1+1) = 6·3·2 = 36.
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

If n = 2⁵ × 3⁴ × 5³, how many positive factors of n are perfect squares?

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
**topic:** Factors and Divisibility

How many positive integers n satisfy BOTH conditions: n is a factor of 60, and n + 2 is also a factor of 60?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** C
**fastest_path:** 60 = 2²·3·5 has 12 factors. List them: 1,2,3,4,5,6,10,12,15,20,30,60. For each, check whether (n + 2) also appears in the list. Qualifying values: 1→3✓, 2→4✓, 3→5✓, 4→6✓, 10→12✓. Count = 5.
**explanation:** Factors of 60 in order: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60. Check each n: 1→3✓, 2→4✓, 3→5✓, 4→6✓, 5→7✗ (7 does not divide 60), 6→8✗ (8 does not divide 60), 10→12✓, 12→14✗, 15→17✗, 20→22✗, 30→32✗, 60→62✗. Valid set: {1, 2, 3, 4, 10} → 5 values.
**mistake_a:** Stopped after finding n ∈ {1, 2, 3} — missed that 4→6 and 10→12 also qualify. Early exit on a systematic check.
**mistake_b:** Found {1, 2, 3, 4} but missed n = 10 → 12 ✓ — stopped scanning once small consecutive pairs ended, without checking larger factors.
**mistake_d:** Included n = 5 as valid (5→7) — but 7 is not a factor of 60. Confusing "7 is near 60/9" with actual divisibility.
**mistake_e:** Included both n = 5 (→7) and n = 6 (→8) — neither 7 nor 8 divides 60 (60 = 2²·3·5 has no factor of 7 or 8).
**common_trap:** Two traps compound: (1) stopping after the small-factor cluster and missing n = 10; (2) not verifying that 7 or 8 divides 60 before counting n = 5 or n = 6 as valid.
**takeaway:** For "both n and g(n) divide k" problems: factor k, list ALL factors in order, and check each one systematically. Verify each (n + 2) candidate against the factor list — don't rely on intuition about whether a value "looks like" a factor.
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
**topic:** Counting Multiples in a Range

How many multiples of 7 are there from 100 to 300, inclusive?

- A) 26
- B) 27
- C) 28
- D) 29
- E) 30

**answer:** C
**fastest_path:** ⌊300/7⌋ − ⌊99/7⌋ = 42 − 14 = 28.
**explanation:** Smallest multiple of 7 that is ≥ 100: 7 × 15 = 105. Largest multiple of 7 that is ≤ 300: 7 × 42 = 294. Count = 42 − 15 + 1 = 28. Equivalently: ⌊300/7⌋ − ⌊99/7⌋ = 42 − 14 = 28.
**mistake_a:** Excluded both endpoints (treated "from 100 to 300" as exclusive): started from 7 × 16 = 112 and ended at 7 × 41 = 287, giving 41 − 16 + 1 = 26.
**mistake_b:** Applied "last index minus first index" without the +1: 42 − 15 = 27 — the inclusive count formula requires +1.
**mistake_d:** Applied ⌊b/k⌋ − ⌊a/k⌋ + 1 = 42 − 14 + 1 = 29 — the correct floor formula is ⌊b/k⌋ − ⌊(a−1)/k⌋ = 42 − 14 = 28; adding +1 double-counts.
**mistake_e:** Included 7 × 14 = 98 (which is less than 100) as a valid starting multiple, giving one extra count.
**common_trap:** Off-by-one at both ends. The inclusive count formula is last_index − first_index + 1; the floor formula is ⌊b/k⌋ − ⌊(a−1)/k⌋. Mixing these two forms or adding +1 to the floor form gives 29.
**takeaway:** Multiples of k from a to b inclusive: count = ⌊b/k⌋ − ⌊(a−1)/k⌋. Or: find first_index and last_index, count = last_index − first_index + 1. Verify: ⌊300/7⌋ = 42, ⌊99/7⌋ = 14, count = 28.
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
**difficulty:** Medium
**type:** Problem Solving
**topic:** Prime Numbers and Divisibility

What is the smallest positive integer n such that n, n + 2, and n + 4 are all prime?

- A) 2
- B) 3
- C) 5
- D) 7
- E) 11

**answer:** B
**fastest_path:** Try n = 2: {2, 4, 6} — 4 is not prime ✗. Try n = 3: {3, 5, 7} — all prime ✓.
**explanation:** n = 2 fails immediately: 4 and 6 are composite. n = 3 gives {3, 5, 7} — all prime ✓. For any n > 3: among n, n + 2, n + 4, one is divisible by 3 (they span all three residues mod 3), and since it exceeds 3 it is composite. So (3, 5, 7) is the only prime triplet of this form.
**mistake_a:** n = 2 gives {2, 4, 6} — 4 = 2² and 6 = 2·3 are both composite. Even numbers greater than 2 are never prime.
**mistake_c:** n = 5 gives {5, 7, 9} — 9 = 3² is not prime.
**mistake_d:** n = 7 gives {7, 9, 11} — 9 = 3² is not prime.
**mistake_e:** n = 11 gives {11, 13, 15} — 15 = 3 × 5 is not prime.
**common_trap:** Starting at n = 2 and assuming 4 or 6 might be prime; or skipping n = 3 as "too small" without checking the triple.
**takeaway:** Among any 3 numbers in AP with common difference 2, one is divisible by 3 — so (3, 5, 7) is the *only* prime triplet of this form.
**related_reading:** reading-quant-03-number-properties

---

## Q31
**difficulty:** Medium
**type:** Problem Solving
**topic:** Consecutive Even Integers

The sum of 6 consecutive even integers is 126. What is the smallest of these integers?

- A) 14
- B) 16
- C) 18
- D) 20
- E) 22

**answer:** B
**fastest_path:** Let smallest = k. Sum = 6k + 30 = 126 → k = 16.
**explanation:** Six consecutive even integers: k, k+2, k+4, k+6, k+8, k+10. Sum = 6k + 30 = 126 → 6k = 96 → k = 16. Verify: 16 + 18 + 20 + 22 + 24 + 26 = 126 ✓.
**mistake_a:** Set up the sequence one step too early (used k−2 as smallest): k − 2 = 14.
**mistake_c:** Solved the algebra correctly to get k = 16, then mistakenly reported the second term k+2 = 18 — an indexing error: the answer is k itself, not k+2.
**mistake_d:** Bubbled the lower-middle term k+4 = 20 — noted that mean = 126/6 = 21 and picked the nearest even integer below it, treating it as the answer.
**mistake_e:** Bubbled the upper-middle term k+6 = 22 — rounded the mean (21) up to the next even integer.
**common_trap:** With an even count of terms, the mean (21) is NOT one of the integers — it falls between the two middle terms (20 and 22). Using 20 or 22 as the answer gives a middle term, not the smallest.
**takeaway:** For consecutive even integers, set up k, k+2, k+4, ... and solve the sum equation directly. With an even count, the mean is not a term — do not rely on "mean = middle" as a shortcut.
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
**mistake_a:** Computed LCM of only two intervals — LCM(9, 15) = 45 min, stopping there and ignoring the 6-minute bell.
**mistake_b:** Misread the 9-minute interval as 12 minutes: LCM(6, 12, 15) = 2²·3·5 = 60 min → 1:00 PM.
**mistake_c:** Added two pairwise LCMs instead of computing the overall LCM: LCM(6, 15) + LCM(9, 15) = 30 + 45 = 75 min → 1:15 PM.
**mistake_e:** Computed LCM = 90 correctly but made a time-conversion error: treated 90 minutes as 2 hours and added 2 hours to 12:00 noon → 2:00 PM. Correct conversion: 12:00 PM + 1 h 30 min = 1:30 PM.
**common_trap:** Using LCM of only two of the three intervals and forgetting the third, or adding LCMs instead of nesting them.
**takeaway:** For "next simultaneous event" with periodic events at intervals a, b, c: time = LCM(a, b, c). Compute step-by-step: LCM(a, b) first, then LCM(result, c). All three must factor into the final LCM.
**related_reading:** reading-quant-03-number-properties

---

## Q35
**difficulty:** Easy
**type:** Problem Solving
**topic:** Perfect Squares

Which of the following is NOT a perfect square?

- A) 121
- B) 144
- C) 169
- D) 225
- E) 240

**answer:** E
**fastest_path:** 11²=121, 12²=144, 13²=169, 15²=225. 240 = 2⁴×3×5 — exponents of 3 and 5 are odd, so 240 is not a perfect square.
**explanation:** A perfect square has every prime in its factorization raised to an even exponent. 121=11², 144=12², 169=13², 225=15² — each passes. 240 = 2⁴ × 3¹ × 5¹: both 3 and 5 appear to an odd power (the first), so no integer k satisfies k² = 240. Eliminate E.
**mistake_a:** Recognized 11² = 121 and confirmed it's a perfect square — correct, so A is not the answer.
**mistake_b:** Less memorized than 12²=144 or 15²=225, but 12×12 = 144 confirms it.
**mistake_c:** 13² = 169 is sometimes forgotten; verify: 13×13 = 169 ✓.
**mistake_d:** 15² = 225 is sometimes confused with 16² = 256; 15×15 = 225 ✓.
**common_trap:** Guessing that a large number is not a perfect square without checking. The reliable test: prime-factorize and confirm all exponents are even. 240 fails because 3¹ and 5¹ are odd exponents.
**takeaway:** n is a perfect square ↔ every prime in its factorization appears to an even power. Memorize perfect squares through 20²: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400.
**related_reading:** reading-quant-03-number-properties

---

## Q36
**difficulty:** Easy
**type:** Problem Solving
**topic:** Divisibility Rules

Which of the following numbers is divisible by 4?

- A) 21,318
- B) 37,442
- C) 45,126
- D) 58,734
- E) 72,616

**answer:** E
**fastest_path:** Divisibility by 4: only the last two digits matter. Last two: 18, 42, 26, 34, 16. Only 16 ÷ 4 = 4 exactly → E.
**explanation:** A whole number is divisible by 4 if and only if its last two digits form a number divisible by 4 (because 100 = 4 × 25, so all higher place values are already divisible by 4). Check: A) 18 ÷ 4 = 4.5 ✗; B) 42 ÷ 4 = 10.5 ✗; C) 26 ÷ 4 = 6.5 ✗; D) 34 ÷ 4 = 8.5 ✗; E) 16 ÷ 4 = 4 ✓.
**mistake_a:** Tested whether the number is even (it is — ends in 8), but even ≠ divisible by 4. 18 is even but not divisible by 4.
**mistake_b:** Last digit of 37,442 is 2 (even), but 42 ÷ 4 = 10.5, so not divisible by 4.
**mistake_c:** Added all digits: 4+5+1+2+6 = 18 (divisible by 9 and 3) — but divisibility by 3 or 9 says nothing about divisibility by 4.
**mistake_d:** Last two digits 34: 34 ÷ 4 = 8.5, not divisible by 4.
**common_trap:** Applying the "even last digit" rule to divisibility by 4. Divisibility by 4 requires the last *two* digits to be divisible by 4, not just the last one.
**takeaway:** Divisibility rules by powers of 2: by 2 → last 1 digit; by 4 → last 2 digits; by 8 → last 3 digits. For each additional factor of 2, look one digit further back.
**related_reading:** reading-quant-03-number-properties

---

## Q37
**difficulty:** Easy
**type:** Problem Solving
**topic:** Prime Factorization

What is the smallest prime factor of 91?

- A) 1
- B) 7
- C) 13
- D) 17
- E) 91

**answer:** B
**fastest_path:** Test primes in order: 2 (91 is odd ✗), 3 (digit sum = 10, not div by 3 ✗), 5 (doesn't end in 0 or 5 ✗), 7: 91 ÷ 7 = 13 ✓ → smallest prime factor is 7.
**explanation:** To find the smallest prime factor, test primes in increasing order. 2: 91 is odd — skip. 3: digit sum = 9+1 = 10, not divisible by 3 — skip. 5: last digit is 1 — skip. 7: 91 ÷ 7 = 13 exactly. So 91 = 7 × 13 and the smallest prime factor is 7. Stop at the first prime that divides — there is no need to continue.
**mistake_a:** 1 is not prime. The definition of prime requires exactly two positive divisors: 1 and itself. The number 1 has only one positive divisor.
**mistake_c:** 13 is indeed a prime factor of 91, but the question asks for the *smallest*. Reaching 13 without first checking 7 means missing the answer.
**mistake_d:** 17 does not divide 91: 17×5 = 85, 17×6 = 102. Since 91 is between these, 17 is not a factor.
**mistake_e:** 91 itself divides 91, but 91 = 7×13 is composite, not prime.
**common_trap:** Assuming 91 is prime because it "looks like it should be." 91 is a classic GMAT trap composite. Always test primes up to √91 ≈ 9.5 — meaning test 2, 3, 5, 7 before concluding primality.
**takeaway:** GMAT trap composites to memorize: 51 = 3×17, 57 = 3×19, 87 = 3×29, 91 = 7×13, 119 = 7×17, 133 = 7×19. For any n ≤ 200, test primes 2, 3, 5, 7, 11, 13 to find the smallest prime factor.
**related_reading:** reading-quant-03-number-properties

---

## Q38
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factors

How many ODD positive factors does 60 have?

- A) 2
- B) 3
- C) 4
- D) 6
- E) 12

**answer:** C
**fastest_path:** Strip all 2s: 60 = 2² × 15, odd part = 15 = 3×5. Odd factor count = (1+1)(1+1) = 4.
**explanation:** Odd factors of n come entirely from n's odd part — the result of removing all factors of 2. 60 = 2² × 3 × 5. Odd part: 3 × 5 = 15. Factors of 15 are exactly the odd factors of 60: 1, 3, 5, 15. Count: (1+1)(1+1) = 4.
**mistake_a:** Counted only 3 and 5 — forgot that 1 (always odd) and 15 = 3×5 are also odd factors.
**mistake_b:** Listed 1, 3, 5 and stopped — missed that 15 = 3×5 also divides 60 and is odd.
**mistake_d:** Bubbled 6 — perhaps counted even factors (60 has 12 total factors; 12 − 4 odd = 8 even, not 6) or confused with the total factor count of the odd part.
**mistake_e:** Counted all 12 positive factors of 60 without filtering for odd: (2+1)(1+1)(1+1) = 12.
**common_trap:** Counting all factors instead of only odd ones. The shortcut: odd factors of n = all factors of (n with every 2 removed). Ignore the 2^a part entirely.
**takeaway:** If n = 2^a × m where m is odd, the number of odd positive factors of n equals the number of factors of m. Even the exponent of 2 is irrelevant — strip it, then apply the factor-count formula to the odd part.
**related_reading:** reading-quant-03-number-properties

---

## Q39
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factors

If p and q are distinct prime numbers, how many positive factors does the product p × q have?

- A) 2
- B) 3
- C) 4
- D) 5
- E) 6

**answer:** C
**fastest_path:** p × q = p¹ × q¹. Factor count = (1+1)(1+1) = 4.
**explanation:** p × q has prime factorization p¹ × q¹. Factor count formula: (1+1)(1+1) = 4. The four factors are 1, p, q, and p×q. Example: p=2, q=3 → 6 has factors 1, 2, 3, 6 ✓.
**mistake_a:** Listed only 1 and p×q — missed that p and q each individually divide p×q.
**mistake_b:** Listed 1, p, p×q — forgot that q alone is also a factor.
**mistake_d:** Assumed primes might contribute extra factors — but primes have exactly 2 factors (1 and themselves), and the formula already captures this.
**mistake_e:** Applied wrong formula: (1+1+1)(1+1) = 6 (used exponent 2 for one prime by mistake).
**common_trap:** Forgetting 1 and p×q as factors. Every positive integer n has at least 1 and n itself as factors; intermediate primes also count individually.
**takeaway:** n = p×q (distinct primes): exactly 4 factors — 1, p, q, pq. Generalize: n = p^a × q^b × ... → (a+1)(b+1)... factors. Always include 1 and n in the list.
**related_reading:** reading-quant-03-number-properties

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders — Cyclicity

What is the remainder when 7^83 is divided by 5?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 0

**answer:** C
**fastest_path:** 7 ≡ 2 (mod 5). Powers of 2 mod 5 cycle [2, 4, 3, 1], period 4. 83 mod 4 = 3 → position 3 in the cycle → remainder 3.
**explanation:** Since 7 ≡ 2 (mod 5), compute 2^n mod 5 for small n to find the cycle: 2¹=2, 2²=4, 2³=8≡3, 2⁴=16≡1, then repeats. Cycle: [2, 4, 3, 1], period 4. Find position of 83 in the cycle: 83 ÷ 4 = 20 remainder 3 → position 3 → cycle element 3. So 7^83 ≡ 3 (mod 5).
**mistake_a:** Found 83 mod 4 = 3 but used position 4 of the cycle (value 1) instead of position 3 — off by one in indexing.
**mistake_b:** Assumed the remainder of a large odd power is just 7 mod 5 = 2 — did not compute the cycle.
**mistake_d:** Found 83 mod 4 = 3 but used position 2 (value 4) — another index error.
**mistake_e:** Concluded 7^n is divisible by 5 — impossible since gcd(7, 5) = 1, so 5 never divides 7^n.
**common_trap:** When n mod L = 0 (where L is the cycle length), the position is L (the last element), not 0. Cycles run from position 1 to L, not 0 to L−1. Here 83 mod 4 = 3 (not 0), so there is no ambiguity — but always index from 1.
**takeaway:** To find a^n mod m: compute powers a^1, a^2, ... mod m until the pattern repeats; find cycle length L; compute n mod L (if result is 0, use L); read off the cycle element at that position.
**related_reading:** reading-quant-03-number-properties

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Sum of Factors

What is the sum of all positive factors of 48?

- A) 60
- B) 96
- C) 120
- D) 124
- E) 156

**answer:** D
**fastest_path:** 48 = 2⁴ × 3. Sum = (1+2+4+8+16)(1+3) = 31 × 4 = 124.
**explanation:** For n = p^a × q^b × ..., the sum of all positive factors = (1 + p + p² + ... + p^a)(1 + q + ... + q^b).... For 48 = 2⁴ × 3¹: Sum = (1+2+4+8+16)(1+3) = 31 × 4 = 124. Verify by listing: 1+2+3+4+6+8+12+16+24+48 = 124 ✓.
**mistake_a:** Used wrong factorization 48 = 2³ × 3 (missing one factor of 2): (1+2+4+8)(1+3) = 15 × 4 = 60.
**mistake_b:** Doubled 48: 2 × 48 = 96 — confused "sum of factors" with "twice the number."
**mistake_c:** Dropped the 1 from the geometric sum: (2+4+8+16)(1+3) = 30 × 4 = 120.
**mistake_e:** Added a spurious factor: 32 does not divide 48 (48/32 = 1.5), but if mistakenly included: 124 + 32 = 156.
**common_trap:** Mis-factorizing 48. A common slip: 48 = 4 × 12 = 2² × 12 — stop there without extracting 12 = 2² × 3. Always reduce completely: 48 = 2 × 24 = 4 × 12 = 8 × 6 = 2⁴ × 3.
**takeaway:** Sum of all factors of n = ∏ (1 + p + p² + ... + p^e) over each prime p^e in the factorization. Each factor is a finite geometric series: (p^(e+1) − 1)/(p − 1). Memorize the structure, not just the result.
**related_reading:** reading-quant-03-number-properties

---

## Q42
**difficulty:** Medium
**type:** Problem Solving
**topic:** LCM — Pair Counting

How many ordered pairs of positive integers (a, b) satisfy LCM(a, b) = 12?

- A) 6
- B) 9
- C) 12
- D) 15
- E) 18

**answer:** D
**fastest_path:** 12 = 2² × 3. For prime 2 (max exp 2): ordered exponent pairs with max = 2 → 2(2)+1 = 5 pairs. For prime 3 (max exp 1): pairs with max = 1 → 2(1)+1 = 3 pairs. Total: 5 × 3 = 15.
**explanation:** For LCM(a, b) = 12 = 2² × 3¹, each prime must achieve its required maximum in at least one of a or b. Count ordered pairs (x, y) of exponents for each prime where max(x, y) = e:

Prime 2 (e = 2): pairs (x, y) with 0 ≤ x, y ≤ 2 and max(x, y) = 2. Total pairs with x, y ∈ {0,1,2}: 3² = 9. Pairs with max ≤ 1: 2² = 4. Pairs with max = 2: 9 − 4 = 5. Explicitly: (0,2),(1,2),(2,0),(2,1),(2,2).

Prime 3 (e = 1): pairs with max(x, y) = 1, x, y ∈ {0,1}. Total: 2² = 4. Pairs with max = 0: 1. Pairs with max = 1: 3. Explicitly: (0,1),(1,0),(1,1).

Total ordered pairs: 5 × 3 = 15.
**mistake_a:** Counted unordered factor pairs of 12 — missed that (a,b) and (b,a) are distinct ordered pairs when a ≠ b.
**mistake_b:** Applied the wrong count formula for each prime: used (e+1) per prime and multiplied: 3 × 3 = 9, ignoring that prime 2 has e=2 (giving 5 pairs, not 3).
**mistake_c:** Confused the answer with the number of factors of 12 = 6, then doubled to 12.
**mistake_e:** Computed (e+1)² per prime and multiplied without subtracting the "max < e" cases: 3² × 2² = 36, then halved to 18.
**common_trap:** Using (e+1)² instead of 2e+1 for the count per prime. The formula 2e+1 counts only pairs where the max equals exactly e; (e+1)² counts all pairs where max ≤ e.
**takeaway:** Ordered pairs (a, b) with LCM = n: for each prime p^e dividing n, count = 2e + 1 (the pairs where max exponent = e). Multiply across all primes.
**related_reading:** reading-quant-03-number-properties

---

## Q43
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility — Powers of 2

Is the positive integer n divisible by 8?

(1) n is divisible by 4, and n/4 is even.
(2) n² is divisible by 16.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** (1): n = 4k with k even → n = 8m → definite YES. (2): n² div by 16 → n div by 4 only (e.g., n=4 qualifies but 4÷8 fails; n=8 also qualifies and passes) → inconsistent → insufficient.
**explanation:** Statement (1): n divisible by 4 means n = 4k. n/4 = k is even → k = 2m → n = 8m. Definite YES. Sufficient.

Statement (2): n² divisible by 16 = 2⁴. Exponent of 2 in n² is ≥ 4, so exponent of 2 in n is ≥ 2 — meaning n is divisible by 4 but not necessarily 8. Test n=4: 4²=16, divisible by 16 ✓; but 4 ÷ 8 is not an integer → NO. Test n=8: 8²=64, divisible by 16 ✓; 8 ÷ 8 = 1 → YES. Two answers → insufficient.

Answer: A.
**mistake_b:** Concluded only Statement 2 sufficient — didn't check whether n²/16 integer forces n/8 integer (it forces only n/4 integer).
**mistake_c:** Required both statements — Statement 1 alone gives a definite YES.
**mistake_d:** Treated each as sufficient — Statement 2 gives both YES and NO.
**mistake_e:** Concluded both insufficient — Statement 1 is definitive.
**common_trap:** For n² divisible by p^k, students often conclude n is divisible by p^k. The correct inference: exponents double in squares, so n² div by 2⁴ → n div by 2² (not 2⁴). Always halve the exponent when moving from n² to n.
**takeaway:** n² div by p^k → n div by p^⌈k/2⌉. Here: n² div by 2⁴ → n div by 2² = 4, not 8. Statement (1) is designed to be unambiguous: 4|n and n/4 even is equivalent to 8|n in one step.
**related_reading:** reading-quant-03-number-properties

---

## Q44
**difficulty:** Medium
**type:** Problem Solving
**topic:** Divisibility — Consecutive Integers

If n is a positive integer, which of the following must be divisible by 4?

- A) n² + n
- B) n(n + 2)
- C) n(n + 1)(n + 2)(n + 3)
- D) (n + 1)(n + 2)
- E) n³ − n

**answer:** C
**fastest_path:** Product of 4 consecutive integers always contains 2 even numbers, one divisible by 4 → divisible by 4! = 24. Test others with n=1 to eliminate.
**explanation:** C) n(n+1)(n+2)(n+3) is the product of 4 consecutive integers. Any 4 consecutive integers contain exactly 2 even numbers of the form 2k and 2(k+1). Their product = 4k(k+1). Since k(k+1) is consecutive integers (always even), 4k(k+1) is divisible by 8. The full product of 4 consecutives is always divisible by 4! = 24, hence by 4.

Eliminate others with n=1:
A) 1²+1 = 2 — not divisible by 4.
B) 1×3 = 3 — not even.
D) 2×3 = 6 — not divisible by 4.
E) 1³−1 = 0 (degenerate); n=2: 2³−2 = 6 — not divisible by 4.
**mistake_a:** Selected A because n(n+1) is always even — true, but "always even" is not "always div by 4." Test n=1: 2 fails.
**mistake_b:** Noted n(n+2) contains two numbers of the same parity — when n is odd, both are odd; product is odd, not divisible by 4.
**mistake_d:** Product of 2 consecutive integers always divisible by 2, not always by 4 — test n=1: 6 fails.
**mistake_e:** Recognized n³−n = (n−1)n(n+1) is product of 3 consecutives, always div by 6 — but 6 does not imply 4. Test n=2: 6 fails.
**common_trap:** Stopping at "always divisible by 6" for choice E and concluding it's also divisible by 4. Divisibility by 6 and divisibility by 4 are independent conditions. Need a factor of 4 to guarantee 4|product — three consecutive integers don't always supply it.
**takeaway:** Product of k consecutive integers is always divisible by k!. So 3 consecutives → 6, 4 consecutives → 24. For divisibility by 4 specifically, you need at least 4 consecutive integers (4! = 24 is divisible by 4).
**related_reading:** reading-quant-03-number-properties

---

## Q45
**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting — Inclusion-Exclusion

How many integers from 1 to 100 are divisible by 3 or by 5 (or both)?

- A) 40
- B) 44
- C) 47
- D) 50
- E) 53

**answer:** C
**fastest_path:** |div by 3| + |div by 5| − |div by 15| = 33 + 20 − 6 = 47.
**explanation:** Use inclusion-exclusion: |A ∪ B| = |A| + |B| − |A ∩ B|.
Divisible by 3 in [1,100]: ⌊100/3⌋ = 33.
Divisible by 5 in [1,100]: ⌊100/5⌋ = 20.
Divisible by both 3 and 5 (i.e., by 15): ⌊100/15⌋ = 6.
Divisible by 3 or 5 = 33 + 20 − 6 = 47. Without the subtraction, multiples of 15 (such as 15, 30, 45, 60, 75, 90) are counted twice.
**mistake_a:** Subtracted the overlap twice: 33 + 20 − 6 − 6 = 41, then rounded or adjusted to 40.
**mistake_b:** Used an incorrect overlap count (perhaps ⌊100/18⌋ = 5 instead of 6): 33 + 20 − 5 = 48, or made an arithmetic slip.
**mistake_d:** Added without subtracting any overlap: 33 + 20 = 53; then reduced by 3 for some spurious reason → 50.
**mistake_e:** Added without subtracting the overlap at all: 33 + 20 = 53.
**common_trap:** Forgetting to subtract the intersection. Multiples of 15 (divisible by both 3 and 5) appear in both the "div by 3" and "div by 5" counts — without subtraction, each is counted twice.
**takeaway:** |A ∪ B| = |A| + |B| − |A ∩ B|. The intersection of "div by a" and "div by b" is "div by LCM(a, b)." Here LCM(3,5)=15. Always draw a Venn diagram mentally: overlap gets subtracted exactly once.
**related_reading:** reading-quant-03-number-properties

---

## Q46
**difficulty:** Medium
**type:** Problem Solving
**topic:** Integer Divisors — Negative Included

For how many integers n is 72/n also an integer?

- A) 12
- B) 18
- C) 20
- D) 24
- E) 36

**answer:** D
**fastest_path:** 72 = 2³×3² has (3+1)(2+1) = 12 positive divisors. Each has a negative counterpart. Total: 12 + 12 = 24.
**explanation:** 72/n is an integer if and only if n is a divisor of 72 (and n ≠ 0). 72 = 2³ × 3² → positive divisors: (3+1)(2+1) = 12 (they are 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72). The question asks for integers n (not restricted to positive), so negative divisors also qualify: −1, −2, −3, ..., −72 each produce 72/n as a negative integer. Total: 12 positive + 12 negative = 24.
**mistake_a:** Counted only positive divisors: 12. The word "integers" includes negatives — 72/(−4) = −18 is a valid integer.
**mistake_b:** Computed an incorrect factor count: 72 = 2³×3² gives exactly 12 positive factors, not 18.
**mistake_c:** Perhaps counted factors of a slightly different number or used an incorrect formula.
**mistake_e:** Doubled the factor count incorrectly: perhaps computed 3 × (2+1) × 4 = 36 by misapplying the formula.
**common_trap:** Restricting to positive divisors when the problem says "integers." Any time the domain is integers (not positive integers), divisors come in ±pairs, doubling the count.
**takeaway:** When the problem says "integers n," include both positive and negative divisors. The total number of integer divisors of n (nonzero) is 2 × (number of positive divisors). Only restrict to positive when the problem specifies.
**related_reading:** reading-quant-03-number-properties

---

## Q47
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Divisibility — Combining Conditions

Is the positive integer n divisible by 36?

(1) n is divisible by 12.
(2) n is divisible by 18.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** 36 = 2²×3². (1) gives 2²×3¹ — lacks 3². (2) gives 2¹×3² — lacks 2². Together: n div by LCM(12,18) = 2²×3² = 36. Sufficient.
**explanation:** 36 = 2² × 3². We need n's factorization to include at least 2² and 3².

Statement (1): 12 = 2²×3. Guarantees 2² and 3¹ — the second power of 3 is missing. Counterexample: n=12 is divisible by 12 but 12/36 is not an integer. n=36 is divisible by 12 and by 36. Insufficient (both YES and NO possible).

Statement (2): 18 = 2×3². Guarantees 2¹ and 3² — the second power of 2 is missing. Counterexample: n=18 is divisible by 18 but not by 36. n=36 works. Insufficient.

Together: n divisible by both 12 and 18 → n divisible by LCM(12, 18) = 2²×3² = 36. Definite YES. Sufficient. Answer: C.
**mistake_a:** Concluded (1) alone sufficient — 12 guarantees only 3¹, not the 3² that 36 requires.
**mistake_b:** Concluded (2) alone sufficient — 18 guarantees only 2¹, not the 2² that 36 requires.
**mistake_d:** Concluded each alone sufficient — neither provides the full prime power needed.
**mistake_e:** Concluded together insufficient — LCM(12,18) = 36 pinpoints the exact divisibility needed.
**common_trap:** Not tracking which prime power is missing from each statement. Write 36 = 2²×3² and check: does (1) give 2²? Yes. Does (1) give 3²? No — only 3¹. Does (2) give 3²? Yes. Does (2) give 2²? No — only 2¹. Each statement covers exactly what the other lacks, so together they combine cleanly.
**takeaway:** For "is n div by k?" DS: factor k. For each statement, audit which prime powers it guarantees. If any prime's guaranteed exponent falls below k's requirement, that statement alone is insufficient. Combine by computing LCM of the conditions' divisors.
**related_reading:** reading-quant-03-number-properties

---

## Q48
**difficulty:** Hard
**type:** Problem Solving
**topic:** Factor Count — Structure

How many positive integers less than or equal to 200 have exactly 3 positive factors?

- A) 4
- B) 5
- C) 6
- D) 7
- E) 8

**answer:** C
**fastest_path:** Exactly 3 factors ↔ n = p² for some prime p. Count primes with p² ≤ 200 (p ≤ 14.1): 2, 3, 5, 7, 11, 13 → 6 primes.
**explanation:** A positive integer n has exactly 3 positive factors iff n = p² for some prime p.

Why: list the 3 factors in order: 1 < d < n. The pair (d, n/d) must give all three, so n/d = d, meaning d² = n. Thus n is a perfect square of its middle factor d. If d were composite (d = ab with 1 < a < b < d), then a, b, d, and n would give at least 4 distinct factors. So d must be prime.

Primes p with p² ≤ 200 (p ≤ √200 ≈ 14.14): 2²=4, 3²=9, 5²=25, 7²=49, 11²=121, 13²=169. Next prime: 17²=289 > 200. Count: 6.
**mistake_a:** Stopped at primes 2, 3, 5, 7 only (missed 11 and 13, whose squares 121 and 169 are still ≤ 200).
**mistake_b:** Included 2, 3, 5, 7, 11 — stopped just before 13; but 13² = 169 ≤ 200 ✓.
**mistake_d:** Included 17² = 289, which exceeds 200 — this does not count.
**mistake_e:** Also included 14² = 196, but 14 = 2×7 is composite. 196 = 2²×7² has (2+1)(2+1) = 9 factors, not 3.
**common_trap:** Using the wrong bound. The prime p must satisfy p² ≤ 200, so p ≤ 14.14. Primes at most 14: 2, 3, 5, 7, 11, 13 — exactly 6 of them. Also, only *prime* squares qualify; 14² = 196 has 9 factors, not 3.
**takeaway:** Exactly 3 factors ↔ n = p² (prime squared). Exactly 4 factors ↔ n = p³ or n = p×q (distinct primes). These structural facts appear repeatedly on the GMAT — memorize them.
**related_reading:** reading-quant-03-number-properties

---

## Q49
**difficulty:** Hard
**type:** Problem Solving
**topic:** Product of All Factors

If n is an integer with 1 < n < 20, and the product of all positive factors of n equals n³, how many such values of n exist?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**fastest_path:** Product of all factors = n^(k/2) where k = factor count. n^(k/2) = n³ → k = 6. Numbers in (1,20) with exactly 6 factors: 12 = 2²×3 and 18 = 2×3². Count: 2.
**explanation:** When n has k positive factors, they pair as (d, n/d), each pair multiplying to n. With k/2 such pairs, the product of all factors = n^(k/2). Set n^(k/2) = n³ → k/2 = 3 → k = 6. We need integers n with 1 < n < 20 and exactly 6 positive factors.

Numbers with 6 factors have the form p⁵ or p²×q (distinct primes). In (1, 20):
— p⁵: 2⁵ = 32 > 20. No valid values.
— p²×q: 2²×3 = 12 ✓; 3²×2 = 18 ✓; 2²×5 = 20 (not strictly < 20) ✗; others exceed 20.

Valid values: 12 and 18. Verify: 12 has factors 1,2,3,4,6,12 (k=6); product = 1×2×3×4×6×12 = 1728 = 12³ ✓. 18 has factors 1,2,3,6,9,18 (k=6); product = 1×2×3×6×9×18 = 5832 = 18³ ✓. Count: 2.
**mistake_a:** Found only n=12, missed n=18 (didn't check the p²×q form with p=3).
**mistake_c:** Also included n=32 (which satisfies the factor-product condition but violates n < 20), or some other out-of-range value.
**mistake_d:** Applied an incorrect formula and found spurious values like 8 (k=4, product = 8² ≠ 8³).
**mistake_e:** Didn't apply the n < 20 constraint and found all numbers with exactly 6 factors.
**common_trap:** Not knowing that the product of all factors of n equals n^(k/2). Students who try to list and multiply factors directly often make arithmetic errors or lose track of the structure.
**takeaway:** Product of all positive factors of n = n^(k/2), where k is the total factor count. If the product equals n^m, then k = 2m. Combine with the structural forms for specific factor counts: k=6 requires n = p⁵ or p²q.
**related_reading:** reading-quant-03-number-properties

---

## Q50
**difficulty:** Hard
**type:** Problem Solving
**topic:** Counting — Divisibility Intersection

How many integers from 1 to 300 are divisible by 4 but NOT divisible by 6?

- A) 50
- B) 60
- C) 75
- D) 100
- E) 125

**answer:** A
**fastest_path:** Div by 4: ⌊300/4⌋ = 75. Div by both 4 and 6 = div by LCM(4,6) = 12: ⌊300/12⌋ = 25. Answer: 75 − 25 = 50.
**explanation:** "Divisible by 4 but not 6" = (divisible by 4) − (divisible by both 4 and 6). Divisible by both 4 and 6 means divisible by LCM(4, 6). Since GCD(4, 6) = 2, LCM = 4×6/2 = 12.

Count div by 4 in [1,300]: ⌊300/4⌋ = 75.
Count div by 12 in [1,300]: ⌊300/12⌋ = 25.
Div by 4 but not 6: 75 − 25 = 50.

Sanity check on small range: in [1,12], divisible by 4: {4, 8, 12}; divisible by 12: {12}; by 4 not 6: {4, 8} → 2 values. Formula: 3 − 1 = 2 ✓.
**mistake_b:** Computed LCM(4,6) = 24 (used product instead of product/GCD): ⌊300/24⌋ = 12; 75 − 12 = 63 → rounded to 60.
**mistake_c:** Reported the "div by 4" count without subtracting: 75.
**mistake_d:** Divided 300 by 3 = 100, conflating this with the correct method.
**mistake_e:** Divided 300 by some wrong divisor or applied an incorrect fraction: 300 × 5/12 ≈ 125.
**common_trap:** Computing LCM(4, 6) incorrectly as 24 (the product) rather than 12 (the product divided by GCD). Always: LCM(a, b) = a×b / GCD(a, b). Here GCD(4,6) = 2, so LCM = 12.
**takeaway:** "Divisible by A but not B" = |div by A| − |div by A and B| = |div by A| − |div by LCM(A,B)|. Compute LCM via the GCD formula, not by multiplying A and B directly.
**related_reading:** reading-quant-03-number-properties

---

## Q51
**difficulty:** Hard
**type:** Problem Solving
**topic:** Squarefree Integers — Consecutive Pair

A positive integer is called "rough" if it is divisible by the square of some prime. What is the smallest positive integer n such that both n and n + 1 are rough?

- A) 4
- B) 6
- C) 8
- D) 9
- E) 12

**answer:** C
**fastest_path:** List rough numbers: 4, 8, 9, 12, ... Check consecutive pairs: (4,5): 5 is squarefree ✗. (8,9): 8 = 2³ (div by 4 ✓), 9 = 3² (div by 9 ✓). Both rough → n = 8.
**explanation:** A "rough" number is one divisible by p² for some prime p — equivalently, it is not squarefree (some prime appears at least twice in its factorization). Rough numbers in order: 4, 8, 9, 12, 16, 18, 20, 24, 25, ...

Check consecutive pairs for the smallest n where n and n+1 are both rough:
— n=4: 4 = 2² (rough ✓), 5 = 5 (squarefree, not rough ✗). Fails.
— n=8: 8 = 2³ (divisible by 4 = 2² ✓, rough), 9 = 3² (divisible by 9 ✓, rough). Both rough! ✓

No smaller pair exists because the only rough number below 8 is 4, and neither 3 nor 5 is rough.

Answer: n = 8.
**mistake_a:** n=4: 4 is rough, but 5 = 5¹ is squarefree. One of the pair fails.
**mistake_b:** n=6: 6 = 2×3 — every prime appears exactly once, so 6 is squarefree (not rough). The pair (6,7) has both members squarefree.
**mistake_d:** n=9: 9 = 3² is rough, but 10 = 2×5 is squarefree. The pair (9,10) fails. The question asks for n, where n is the smaller of the pair — which is 8, not 9.
**mistake_e:** n=12: 12 = 2²×3 is rough, but 13 is prime (squarefree). Fails.
**common_trap:** Checking only multiples of 4 (the most obvious rough numbers) and skipping 8. The key is that 8 = 2³ is rough *and* its neighbor 9 = 3² happens to be rough by a different prime. The alignment of two different primes squaring in adjacent integers is the insight.
**takeaway:** A number is squarefree if every prime in its factorization appears exactly once. A rough (non-squarefree) number has at least one prime squared. Consecutive rough pairs require adjacent integers each divisible by some prime square — these pairs start at (8, 9) = (2³, 3²).
**related_reading:** reading-quant-03-number-properties

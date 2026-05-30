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

How many perfect squares are there between 50 and 200, inclusive?

- A) 5
- B) 6
- C) 7
- D) 8
- E) 9

**answer:** C
**fastest_path:** √50 ≈ 7.1 and √200 ≈ 14.1. Perfect squares: 8² through 14². Count = 14 − 8 + 1 = 7.
**explanation:** List perfect squares starting from 8²: 64, 81, 100, 121, 144, 169, 196. The next, 15² = 225, exceeds 200; the previous, 7² = 49, falls below 50. Count = 7.
**mistake_a:** Stopped at 12² = 144 without checking 13² = 169 and 14² = 196, which both lie within the range.
**mistake_b:** Counted squares 8² through 13² only — stopped one short of 14² = 196.
**mistake_d:** Included 7² = 49 by misreading the lower bound, or included 15² = 225 by rounding √200 up to 15.
**mistake_e:** Included both 7² = 49 and 15² = 225 — a boundary error at both ends.
**common_trap:** Miscounting the square root bounds. √50 ≈ 7.07 means 7² = 49 is just outside; √200 ≈ 14.14 means 14² = 196 is just inside. Students who round carelessly land on 7 or 15 as endpoints and reach 9.
**takeaway:** Count perfect squares in [a, b] by finding ⌈√a⌉ and ⌊√b⌋, then computing ⌊√b⌋ − ⌈√a⌉ + 1. Always compute the boundary squares explicitly to confirm inclusion.
**related_reading:** reading-quant-03-number-properties

---

## Q36
**difficulty:** Easy
**type:** Problem Solving
**topic:** Consecutive Integers

The product of three consecutive positive integers is 210. What is the sum of these three integers?

- A) 15
- B) 16
- C) 17
- D) 18
- E) 21

**answer:** D
**fastest_path:** Cube root of 210 ≈ 5.9. Try 5 × 6 × 7 = 210 ✓. Sum = 18.
**explanation:** The middle integer is approximately ∛210 ≈ 5.9, so try n = 5, 6, 7: 5 × 6 × 7 = 210 ✓. Sum = 5 + 6 + 7 = 18. Verify uniqueness: 4 × 5 × 6 = 120 and 6 × 7 × 8 = 336, confirming the triple is unique.
**mistake_a:** Assumed the smallest integer is 5 and tested {4, 5, 6}: 4 × 5 × 6 = 120 ≠ 210.
**mistake_b:** Found the triple {5, 6, 7} correctly but made an arithmetic slip when summing.
**mistake_c:** Tried consecutive even integers {4, 6, 8}: 4 × 6 × 8 = 192 ≠ 210.
**mistake_e:** Tested {6, 7, 8}: 6 × 7 × 8 = 336 ≠ 210; or anchored on ∛210 and summed without verifying the product.
**common_trap:** Guessing by the look of 210 without anchoring on ∛210. Students who skip the estimate may test the wrong triple.
**takeaway:** For "product of consecutive integers = N," estimate the middle integer as ∛N, then check neighboring triples. Always verify the product exactly before reporting the sum.
**related_reading:** reading-quant-03-number-properties

---

## Q37
**difficulty:** Easy
**type:** Problem Solving
**topic:** Absolute Value

How many integers n satisfy |n − 4| ≤ 3?

- A) 3
- B) 5
- C) 7
- D) 8
- E) 9

**answer:** C
**fastest_path:** |n − 4| ≤ 3 means 1 ≤ n ≤ 7. Integers: 1, 2, 3, 4, 5, 6, 7 → count = 7.
**explanation:** Rewrite |n − 4| ≤ 3 as −3 ≤ n − 4 ≤ 3, giving 1 ≤ n ≤ 7. The integers in this closed interval are 1, 2, 3, 4, 5, 6, 7 — seven in total.
**mistake_a:** Used strict inequality |n − 4| < 3: gives 1 < n < 7, so integers 2, 3, 4, 5, 6 → only 5. The problem says ≤, not <.
**mistake_b:** Dropped one endpoint through an off-by-one error, counting 6 integers instead of 7.
**mistake_d:** Used radius 4 instead of 3: 0 ≤ n ≤ 8 → 9 integers; then subtracted one without justification.
**mistake_e:** Added the center and radius: treated the bound as |n| ≤ 4 + 3 = 7, giving too large a range.
**common_trap:** Applying strict inequality when the problem says ≤, losing the two endpoint integers 1 and 7.
**takeaway:** |n − c| ≤ r defines the closed interval [c − r, c + r]. Integer count = 2r + 1. Here, 2(3) + 1 = 7. With strict inequality <, endpoints are excluded, giving 2r − 1 = 5.
**related_reading:** reading-quant-03-number-properties

---

## Q38
**difficulty:** Easy
**type:** Problem Solving
**topic:** Digit Representation

A two-digit positive integer has tens digit A and units digit B. The integer equals 6 times the sum of its digits. What is the value of A?

- A) 2
- B) 3
- C) 4
- D) 5
- E) 9

**answer:** D
**fastest_path:** 10A + B = 6(A + B) → 4A = 5B → A/B = 5/4. Only single-digit pair: A = 5, B = 4. Check: 54 = 6(9) ✓.
**explanation:** Set up: 10A + B = 6A + 6B → 4A = 5B. Since gcd(4, 5) = 1, the integer 5 must divide A. Among single digits A ∈ {1, ..., 9}, the only multiple of 5 is A = 5, giving B = 4. Check: 54; 6 × (5 + 4) = 54 ✓. The next candidate, A = 10, exceeds one digit.
**mistake_a:** Used multiplier 7 instead of 6: 10A + B = 7A + 7B → 3A = 6B → A = 2B. With A=2, B=1 gives 21 = 7(3) ✓ for the wrong equation.
**mistake_b:** Solved 4A = 5B but made an arithmetic error, landing on A = 3.
**mistake_c:** Confused tens digit A with units digit B — reported B = 4 instead of A = 5.
**mistake_e:** Computed A + B = 5 + 4 = 9 — reported the digit sum rather than the tens digit A.
**common_trap:** Expanding 6(A + B) as 6A + B (applying 6 only to A) rather than 6A + 6B. This error produces a wrong equation and a wrong value.
**takeaway:** Represent a two-digit integer as 10A + B. Expand both sides of the equation fully before simplifying, and confirm which variable the question asks for.
**related_reading:** reading-quant-03-number-properties

---

## Q39
**difficulty:** Easy
**type:** Problem Solving
**topic:** Inclusion-Exclusion

How many integers from 1 to 30, inclusive, are divisible by 2 or by 3?

- A) 15
- B) 17
- C) 18
- D) 20
- E) 25

**answer:** D
**fastest_path:** |A ∪ B| = ⌊30/2⌋ + ⌊30/3⌋ − ⌊30/6⌋ = 15 + 10 − 5 = 20.
**explanation:** Multiples of 2 from 1–30: ⌊30/2⌋ = 15. Multiples of 3: ⌊30/3⌋ = 10. Multiples of both (multiples of 6): ⌊30/6⌋ = 5. By inclusion-exclusion: 15 + 10 − 5 = 20.
**mistake_a:** Counted only multiples of 2 and stopped at 15.
**mistake_b:** Miscounted the overlap: 15 + 10 − 8 = 17, perhaps extending the count of multiples of 6 beyond 30.
**mistake_c:** Subtracted an off-by-one overlap of 7 instead of 5: 15 + 10 − 7 = 18.
**mistake_e:** Added both counts without subtracting the overlap: 15 + 10 = 25.
**common_trap:** Forgetting the inclusion-exclusion subtraction. Numbers divisible by both 2 and 3 are counted in each group and must be subtracted once.
**takeaway:** Inclusion-exclusion: |A ∪ B| = |A| + |B| − |A ∩ B|. For divisibility problems, |A ∩ B| = count of multiples of LCM(m, n) in the range.
**related_reading:** reading-quant-03-number-properties

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Sum of Divisors

What is the sum of all positive divisors of 28?

- A) 28
- B) 42
- C) 52
- D) 56
- E) 64

**answer:** D
**fastest_path:** 28 = 2² · 7. Sum formula: (1 + 2 + 4)(1 + 7) = 7 × 8 = 56.
**explanation:** Prime-factorize: 28 = 2² × 7. The multiplicative sum-of-divisors formula gives σ(28) = (1 + 2 + 4)(1 + 7) = 7 × 8 = 56. Listing directly: divisors are 1, 2, 4, 7, 14, 28 → sum = 56 ✓.
**mistake_a:** Summed only the proper divisors (all divisors except 28 itself): 1 + 2 + 4 + 7 + 14 = 28. This is a notable coincidence — 28 is a perfect number, whose proper divisors sum to itself. The question asks for all divisors.
**mistake_b:** Omitted 14: 1 + 2 + 4 + 7 + 28 = 42.
**mistake_c:** Omitted 4: 1 + 2 + 7 + 14 + 28 = 52.
**mistake_e:** Included 8 as a spurious factor (8 does not divide 28: 28 ÷ 8 = 3.5): 1 + 2 + 4 + 7 + 8 + 14 + 28 = 64.
**common_trap:** Stopping at the proper divisors — either forgetting that n itself is always a divisor, or dropping a middle divisor during a hand-count.
**takeaway:** For n = p^a × q^b × ..., σ(n) = (1 + p + p² + ... + p^a)(1 + q + ... + q^b).... Use the formula when n has more than a handful of divisors to avoid listing errors.
**related_reading:** reading-quant-03-number-properties

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting Factors

How many positive integers less than 100 have exactly 3 positive factors?

- A) 3
- B) 4
- C) 5
- D) 7
- E) 9

**answer:** B
**fastest_path:** Exactly 3 factors ↔ n = p² (prime square). Primes with p² < 100: p = 2, 3, 5, 7. Count = 4.
**explanation:** A positive integer n has exactly 3 positive factors iff n = p² for some prime p — its only factors are 1, p, and p². Check: 2² = 4, 3² = 9, 5² = 25, 7² = 49 — all below 100. The next: 11² = 121 ≥ 100. Count = 4.
**mistake_a:** Missed p = 7 (perhaps forgot 49 < 100), finding only {4, 9, 25}.
**mistake_c:** Included p = 11 because "11 < 100" — forgot to square it; 11² = 121 > 100.
**mistake_d:** Listed all perfect squares below 100 without checking which have exactly 3 factors. For example, 16 = 2⁴ has five factors and 36 = 2² × 3² has nine — only prime squares have exactly 3.
**mistake_e:** Counted all nine perfect squares below 100 (4, 9, 16, 25, 36, 49, 64, 81, and 1), assuming "perfect square → exactly 3 factors." But only prime squares satisfy this.
**common_trap:** Thinking all perfect squares have exactly 3 factors. Only prime squares do; composite squares yield strictly more than 3 factors.
**takeaway:** Factor count = 3 ↔ n = p² for prime p. The factor-count formula gives (2+1) = 3 for p². Any composite square has a factorization yielding more than 3 factors.
**related_reading:** reading-quant-03-number-properties

---

## Q42
**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting Factors

How many positive factors of 216 are perfect cubes?

- A) 2
- B) 3
- C) 4
- D) 6
- E) 8

**answer:** C
**fastest_path:** 216 = 2³ · 3³. A cube factor 2^a · 3^b needs a, b each a multiple of 3 within [0, 3]. Choices: a ∈ {0, 3} and b ∈ {0, 3} → 2 × 2 = 4.
**explanation:** 216 = 6³ = 2³ × 3³. A divisor has form 2^a × 3^b with 0 ≤ a ≤ 3 and 0 ≤ b ≤ 3. For a perfect cube, both a and b must be multiples of 3. Valid values: a ∈ {0, 3} and b ∈ {0, 3}. Four cube factors: (a,b) = (0,0)→1, (3,0)→8, (0,3)→27, (3,3)→216. Count = 4.
**mistake_a:** Counted only 1 and 216 — the trivial cube factors at the extremes — and ignored 8 and 27.
**mistake_b:** Listed {1, 8, 27} without noting that 216 = 6³ is itself a perfect cube.
**mistake_d:** Totaled all factors of 216 and applied an incorrect reduction, arriving at 6.
**mistake_e:** Confused the total factor count (3+1)(3+1) = 16 with a cube-factor count, then halved to get 8.
**common_trap:** Forgetting that 216 = 6³ is itself a perfect cube. Students who scan "perfect cubes ≤ 216: 1, 8, 27, 64, 125, 216" sometimes include 64 or 125 without checking divisibility — neither divides 2³ × 3³.
**takeaway:** For perfect-cube factors of n = p^a · q^b · ...: keep only exponents that are multiples of 3, capped by the actual prime exponent. Count valid choices for each prime, then multiply.
**related_reading:** reading-quant-03-number-properties

---

## Q43
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders

What is the remainder when 7^100 is divided by 8?

- A) 0
- B) 1
- C) 3
- D) 5
- E) 7

**answer:** B
**fastest_path:** 7 ≡ −1 (mod 8) → 7^100 ≡ (−1)^100 = 1 (mod 8).
**explanation:** Note 7 = 8 − 1 ≡ −1 (mod 8). Raising to an even power: 7^100 ≡ (−1)^100 = 1 (mod 8). Verify directly: 7² = 49 = 6 × 8 + 1 → remainder 1; the pattern repeats with period 2, and 100 is even.
**mistake_a:** Assumed gcd(7, 8) > 1 — but 7 is prime and coprime to 8, so 7^100 is never divisible by 8.
**mistake_c:** Identified the period-2 cycle {7, 1} correctly but indexed it wrong, reading off an incorrect residue for exponent 100.
**mistake_d:** Computed (−1)^100 = −1 (the sign error), then converted to 8 − 1 = 7 or 8 − 3 = 5.
**mistake_e:** Bubbled the base — gave the remainder of 7^1 ÷ 8 = 7 without computing any power.
**common_trap:** Not recognizing 7 ≡ −1 (mod 8) and cycling through powers longhand. Even when the cycle is found, indexing errors for large even exponents are common.
**takeaway:** When a base ≡ −1 (mod m): even exponents give remainder 1, odd exponents give remainder m − 1. Check for this pattern before attempting a full cycle analysis.
**related_reading:** reading-quant-03-number-properties

---

## Q44
**difficulty:** Medium
**type:** Problem Solving
**topic:** LCM and GCD

How many ordered pairs of positive integers (p, q) satisfy both LCM(p, q) = 120 and GCD(p, q) = 6?

- A) 2
- B) 3
- C) 4
- D) 6
- E) 8

**answer:** C
**fastest_path:** Write p = 6a, q = 6b with gcd(a,b) = 1 and ab = 20. Coprime factor pairs of 20: (1,20) and (4,5), each in two orders → 4 ordered pairs.
**explanation:** Since GCD(p,q) = 6, write p = 6a and q = 6b with gcd(a,b) = 1. Then LCM(p,q) = 6·LCM(a,b) = 6ab (because gcd(a,b)=1) = 120 → ab = 20. Factor pairs of 20 with gcd = 1: (1,20) ✓ and (4,5) ✓. The pair (2,10) fails since gcd(2,10) = 2. Each unordered pair yields two ordered pairs: {(6,120),(120,6),(24,30),(30,24)} → 4 total.
**mistake_a:** Found only the two unordered pairs {6,120} and {24,30} without doubling for order.
**mistake_b:** Included the invalid pair (12,60): GCD(12,60) = 12 ≠ 6 — failed to verify the GCD condition.
**mistake_d:** Included (2,10) as a coprime pair of 20, but gcd(2,10) = 2 violates the requirement.
**mistake_e:** Estimated from the factor count of 120 (which has 16 factors) without applying the GCD constraint.
**common_trap:** Two errors compound: forgetting that (p,q) and (q,p) are distinct ordered pairs; and not checking that each factor pair (a,b) satisfies gcd(a,b) = 1.
**takeaway:** For LCM/GCD ordered-pair problems: set p = d·a, q = d·b where d = GCD, then gcd(a,b) = 1 and ab = LCM/GCD. List coprime factorizations of that quotient, then double each for ordered pairs.
**related_reading:** reading-quant-03-number-properties

---

## Q45
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders

What is the remainder when the product 43 × 44 × 45 is divided by 8?

- A) 0
- B) 2
- C) 4
- D) 5
- E) 6

**answer:** C
**fastest_path:** Reduce each factor mod 8: 43 ≡ 3, 44 ≡ 4, 45 ≡ 5. Then 3 × 4 × 5 = 60 → 60 mod 8 = 4.
**explanation:** 43 = 5·8 + 3 → residue 3; 44 = 5·8 + 4 → residue 4; 45 = 5·8 + 5 → residue 5. Product of residues: 3 × 4 × 5 = 60. Then 60 = 7·8 + 4, so remainder = 4. (Only 44 contributes factors of 2, giving 2², so the product is divisible by 4 but not 8.)
**mistake_a:** Assumed the product of three consecutive integers is always divisible by 8. It is always divisible by 6 (= 3!), but 8 requires three independent factors of 2.
**mistake_b:** Halved 44's residue to 2 (perhaps computing 44 mod 4 = 0 rather than 44 mod 8 = 4): 3 × 2 × 5 = 30 → 30 mod 8 = 6.
**mistake_d:** Picked the residue of 45 mod 8 = 5 as the final answer — took one factor's residue in isolation.
**mistake_e:** Made an arithmetic slip in the intermediate product: 3 × 4 = 12 → 12 mod 8 = 4; then 4 × 5 = 20 → misread as 20 mod 8 = 6.
**common_trap:** Thinking "three consecutive integers → divisible by 8." Divisibility by 8 requires three independent factors of 2, which three consecutive integers rarely supply.
**takeaway:** For products mod m, reduce each factor mod m first, multiply the residues, then reduce again. This prevents overflow and eliminates the need to compute the large product.
**related_reading:** reading-quant-03-number-properties

---

## Q46
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility

If p, q, and r are positive integers, is p divisible by 15?

(1) p = 3q
(2) p = 5r and q = r + 4

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** (1) alone: p = 3q gives factor of 3 only — insufficient. (2) alone: p = 5r gives factor of 5, no constraint on 3 — insufficient. Together: substitute to get r = 6, p = 30 → YES.
**explanation:** Statement (1): p = 3q gives p a factor of 3 but not 5. Counterexamples: q=1→p=3 (not div 15); q=5→p=15 (div 15). Insufficient. Statement (2): p = 5r gives a factor of 5; with r=1→p=5 (not div 15) and r=3→p=15 (div 15). Insufficient. Together: p = 3q and q = r + 4 give p = 3(r+4); also p = 5r. So 3(r+4) = 5r → r = 6 → p = 30. Is 30 divisible by 15? Yes. Definite YES → sufficient. Answer: C.
**mistake_a:** Treated (1) alone as sufficient — p = 3q is divisible by 3 but may lack a factor of 5.
**mistake_b:** Treated (2) alone as sufficient — p = 5r guarantees a factor of 5 but nothing about divisibility by 3.
**mistake_d:** Treated each statement alone as sufficient — neither independently ensures both factors of 15.
**mistake_e:** Concluded both together insufficient — the substitution uniquely determines p = 30.
**common_trap:** Seeing that each statement supplies one prime factor of 15 (3 from (1), 5 from (2)) and assuming that is enough without solving the system to confirm a unique value.
**takeaway:** When DS statements share variables, substitute one into the other. If the system pins a unique value, the statements together are sufficient.
**related_reading:** reading-quant-03-number-properties

---

## Q47
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Divisibility

For a positive integer k, is k² + k + 1 divisible by 3?

(1) k is divisible by 3.
(2) k² − 1 is divisible by 3.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** k≡0: k²+k+1≡1 (NO). k≡1: ≡0 (YES). k≡2: ≡1 (NO). (1) forces k≡0 → definite NO → sufficient. (2) means k≡1 or k≡2 → different answers → insufficient.
**explanation:** Evaluate k² + k + 1 (mod 3) for each residue class. k≡0: 0+0+1=1, not divisible. k≡1: 1+1+1=3≡0, divisible. k≡2: 4+2+1=7≡1, not divisible. Statement (1): k divisible by 3 → k≡0 → answer is NO (definite). Sufficient. Statement (2): k²−1=(k−1)(k+1) divisible by 3 holds when k≡1 (mod 3) [gives YES] or k≡2 (mod 3) [gives NO]. Two different answers → insufficient. Answer: A.
**mistake_b:** Assumed (2) pins k to a single residue class — but k²−1≡0 (mod 3) holds for both k≡1 and k≡2, producing opposite outcomes for the original expression.
**mistake_c:** Required both statements — but (1) alone resolves the question with a definite answer.
**mistake_d:** Treated both as sufficient — statement (2) leaves the answer ambiguous.
**mistake_e:** Concluded neither sufficient — statement (1) gives a definite NO, which is equally sufficient as a definite YES.
**common_trap:** Forgetting that a definite NO is just as sufficient as a definite YES. Also, checking only one residue class satisfying (2) and declaring it sufficient without testing both.
**takeaway:** For polynomial divisibility DS questions, test each residue class modulo the divisor and record the outcome. A statement is sufficient iff every residue class it permits leads to the same answer.
**related_reading:** reading-quant-03-number-properties

---

## Q48
**difficulty:** Hard
**type:** Problem Solving
**topic:** Prime Expressions

If p is a prime number greater than 3, which of the following must be divisible by 24?

- A) p + 1
- B) p − 1
- C) p² − 1
- D) p² + 1
- E) p³ − p²

**answer:** C
**fastest_path:** p²−1=(p−1)(p+1). p is odd → consecutive even factors, one divisible by 4 → div 8. Also p≢0 (mod 3) → one of p±1 is div by 3 → div 24.
**explanation:** Every prime p > 3 is odd and satisfies p ≢ 0 (mod 3). Factoring: p²−1=(p−1)(p+1). Since p is odd, p−1 and p+1 are consecutive even integers; among any two consecutive even integers, one is divisible by 4, so their product is divisible by 8. Since p ≢ 0 (mod 3), either p≡1 (mod 3) → 3|(p−1) or p≡2 (mod 3) → 3|(p+1). Either way 3|(p²−1). Thus lcm(8,3) = 24 divides p²−1. Verify: p=5→24 ✓; p=7→48=2×24 ✓; p=11→120=5×24 ✓.
**mistake_a:** p+1: p=5 → 6; 6 ÷ 24 is not an integer.
**mistake_b:** p−1: p=5 → 4; 4 ÷ 24 is not an integer.
**mistake_d:** p²+1 is always even but not always divisible by 24: p=5 → 26, which is not divisible by 24.
**mistake_e:** p³−p²=p²(p−1): p=5 → 100; 100 ÷ 24 ≈ 4.17, not an integer.
**common_trap:** Testing only one prime (p=5) and confirming p²−1=24, then not proving it holds for all primes > 3. Also, mistaking the "always even" property of p²+1 for divisibility by 24.
**takeaway:** p²−1=(p−1)(p+1) is divisible by 24 for every prime p > 3. Key proof: consecutive even factors give divisibility by 8; p ≢ 0 (mod 3) forces one of the factors to be divisible by 3.
**related_reading:** reading-quant-03-number-properties

---

## Q49
**difficulty:** Hard
**type:** Problem Solving
**topic:** Simultaneous Congruences

A positive integer n satisfies both n ≡ 3 (mod 5) and n ≡ 4 (mod 6). How many such integers n exist with n < 60?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**fastest_path:** Write n = 5k + 3. Substitute into the second: 5k+3 ≡ 4 (mod 6) → 5k ≡ 1 (mod 6) → k ≡ 5 (mod 6). Smallest k=5 → n=28; next k=11 → n=58. Both < 60 → count = 2.
**explanation:** From the first condition, n = 5k + 3. Substituting into the second: 5k+3 ≡ 4 (mod 6) → 5k ≡ 1 (mod 6). Since 5×5=25≡1 (mod 6), the inverse of 5 mod 6 is 5, so k ≡ 5 (mod 6). The smallest valid k is 5: n=25+3=28. Next: k=11: n=55+3=58. Next: k=17: n=88>60. Verify: 28÷5=5R3 ✓, 28÷6=4R4 ✓; 58÷5=11R3 ✓, 58÷6=9R4 ✓. Two solutions.
**mistake_a:** Found n=28 and stopped — did not continue searching within the range.
**mistake_c:** Included n=88 by miscounting "n < 60" or making an arithmetic error on the period.
**mistake_d:** Computed ⌊60/30⌋×2 = 4 without verifying which specific solutions fall below 60.
**mistake_e:** Listed all values n<60 with n≡3 (mod 5) and guessed 5 from inspection without applying the second condition.
**common_trap:** Finding the first solution and stopping. Once n=28 is found, the period is LCM(5,6)=30, so check whether 28+30=58 also satisfies n<60.
**takeaway:** For two simultaneous congruences mod m₁ and m₂: write n from one, substitute into the other, find the smallest valid k, then list all solutions in range by adding LCM(m₁,m₂) repeatedly.
**related_reading:** reading-quant-03-number-properties

---

## Q50
**difficulty:** Hard
**type:** Problem Solving
**topic:** Primes

When the digits of a two-digit prime p are reversed, a different two-digit prime q is formed with q > p. Which of the following must be true?

- A) p + q is divisible by 11
- B) p + q is divisible by 9
- C) p × q is divisible by 11
- D) p + q is a perfect square
- E) q − p is divisible by 11

**answer:** A
**fastest_path:** Let p = 10a + b and q = 10b + a. Then p + q = 11(a + b). Always divisible by 11.
**explanation:** With p=10a+b and q=10b+a: p+q=(10a+b)+(10b+a)=11(a+b). This is a multiple of 11 for any digit values a and b. Verify: p=13,q=31 → 44=11×4 ✓; p=17,q=71 → 88=11×8 ✓; p=37,q=73 → 110=11×10 ✓; p=79,q=97 → 176=11×16 ✓.
**mistake_b:** p+q=11(a+b); divisible by 9 only when 9|(a+b). But p=13 → a+b=4, which is not divisible by 9.
**mistake_c:** p×q: with p=13,q=31, the product is 403; 403÷11=36.6..., not an integer. (Distinct primes share no common factors, including 11.)
**mistake_d:** p+q must be divisible by 11 but need not be a perfect square: 44, 88, 110, and 176 are not perfect squares.
**mistake_e:** q−p=(10b+a)−(10a+b)=9(b−a). This is divisible by 9, not by 11. For p=13,q=31: q−p=18; 18÷11 is not an integer.
**common_trap:** Confusing q−p (divisible by 9) with p+q (divisible by 11). Both have clean algebraic forms; knowing both identities prevents selecting the wrong expression.
**takeaway:** Two-digit digit-reversal identities: sum of original and reversed = 11(a+b), always divisible by 11; difference = 9(b−a), always divisible by 9. Memorize both.
**related_reading:** reading-quant-03-number-properties

---

## Q51
**difficulty:** Challenge
**type:** Problem Solving
**topic:** LCM and GCD

How many ordered pairs of positive integers (a, b) satisfy LCM(a, b) = 48?

- A) 15
- B) 18
- C) 20
- D) 27
- E) 32

**answer:** D
**fastest_path:** 48 = 2⁴ · 3¹. For each prime, count ordered exponent pairs with the required maximum: (2·4+1)(2·1+1) = 9 × 3 = 27.
**explanation:** Write 48=2⁴×3. For LCM(a,b)=48, need max(v₂(a),v₂(b))=4 and max(v₃(a),v₃(b))=1. For the prime 2: count ordered pairs (s,u) with s,u∈{0,1,2,3,4} and max(s,u)=4. Total pairs ≤4: 5²=25; pairs with max≤3: 4²=16; pairs with max=4: 25−16=9. For the prime 3: count (t,v) with t,v∈{0,1} and max(t,v)=1. Total: 4; max=0: 1; max=1: 3. Overall: 9×3=27. General formula: for n=p₁^e₁·p₂^e₂·..., the count is ∏(2eᵢ+1)=(2·4+1)(2·1+1)=9·3=27.
**mistake_a:** Used (4+1)(1+1)=10 — counted exponent choices rather than ordered pairs with the required maximum.
**mistake_b:** Computed 9×2=18 — used only 2 options for max(t,v)=1 (the pairs {(0,1),(1,0)}) instead of 3 (adding {(1,1)}).
**mistake_c:** Computed (4+1)(1+1)×2=20 — arithmetic error in applying the formula.
**mistake_e:** Used (4+1)²(1+1)²=100 then halved and adjusted to 32 — wrong formula for pairs with a specified maximum.
**common_trap:** Confusing "pairs (s,u) with s,u ≤ k" — which is (k+1)² — with "pairs with max(s,u) = k" — which is (k+1)²−k²=2k+1. The LCM pair formula uses the latter.
**takeaway:** For LCM(a,b)=n=p₁^e₁·p₂^e₂·...: the number of ordered pairs equals ∏(2eᵢ+1). Each factor 2eᵢ+1 counts ordered exponent pairs whose maximum equals exactly eᵢ.
**related_reading:** reading-quant-03-number-properties

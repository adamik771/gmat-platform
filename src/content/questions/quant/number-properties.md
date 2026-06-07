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
**topic:** Divisibility Rules

Which of the following numbers is divisible by 4?

- A) 314
- B) 526
- C) 718
- D) 832
- E) 946

**answer:** D
**fastest_path:** A number is divisible by 4 if and only if its last two digits form a multiple of 4. 32 / 4 = 8.
**explanation:** Divisibility by 4 depends only on the last two digits. Check each: 14 / 4 = 3.5 (no); 26 / 4 = 6.5 (no); 18 / 4 = 4.5 (no); 32 / 4 = 8 (yes); 46 / 4 = 11.5 (no). Answer: D.
**mistake_a:** Confused divisibility by 2 with divisibility by 4 — 314 ends in 4, which looks like a multiple of 4, but 14 / 4 is not an integer.
**mistake_b:** 526 ends in an even digit but 26 / 4 = 6.5 — being even is necessary but not sufficient for divisibility by 4.
**mistake_c:** 18 / 4 = 4.5 — even last digit does not guarantee divisibility by 4.
**mistake_e:** 46 / 4 = 11.5 — similarly, the last digit 6 fails the two-digit check.
**common_trap:** Testing only the last digit rather than the last two digits. Divisibility by 4 requires the number formed by the last two digits to be a multiple of 4.
**takeaway:** Divisibility rules: by 4 — last two digits divisible by 4; by 8 — last three digits divisible by 8. The number of digits to examine equals the power of 2 in the divisor (4 = 2², so 2 digits; 8 = 2³, so 3 digits).
**related_reading:** reading-quant-03-number-properties

---

## Q36
**difficulty:** Easy
**type:** Problem Solving
**topic:** Consecutive Odd Integers

The sum of six consecutive odd integers is 96. What is the largest of these integers?

- A) 11
- B) 15
- C) 17
- D) 19
- E) 21

**answer:** E
**fastest_path:** Smallest = a. Sum = 6a + 30 = 96 → a = 11. Largest = a + 10 = 21.
**explanation:** Six consecutive odd integers starting at a: a, a+2, a+4, a+6, a+8, a+10. Sum = 6a + (0+2+4+6+8+10) = 6a + 30 = 96 → 6a = 66 → a = 11. Largest = 11 + 10 = 21. Verify: 11+13+15+17+19+21 = 96 ✓.
**mistake_a:** Bubbled the smallest integer (a = 11) instead of the largest — solved the algebra correctly but reported the wrong term.
**mistake_b:** Bubbled the third term (a + 4 = 15) — picked an interior value rather than the endpoint.
**mistake_c:** Computed a + 6 = 17 (the fourth term) — off by two in the offset.
**mistake_d:** Bubbled a + 8 = 19 (the fifth term) — one short of the largest.
**common_trap:** Solving the algebra correctly but then forgetting to add the full offset (10) to get the largest term. Always identify which term the question asks for before marking.
**takeaway:** For k consecutive terms with common difference d starting at a: sum = ka + d·k(k-1)/2. Largest term = a + d(k-1). Here d = 2, k = 6, so largest = a + 10.
**related_reading:** reading-quant-03-number-properties

---

## Q37
**difficulty:** Easy
**type:** Problem Solving
**topic:** Absolute Value and Integer Counting

How many integers satisfy |n − 3| ≤ 2?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** C
**fastest_path:** |n − 3| ≤ 2 → 1 ≤ n ≤ 5. Integers: 1, 2, 3, 4, 5 → count 5.
**explanation:** Rewrite: −2 ≤ n − 3 ≤ 2, so 1 ≤ n ≤ 5. Integer values in the range: 1, 2, 3, 4, 5. Count = 5.
**mistake_a:** Counted only interior integers (2, 3, 4) and excluded the boundary values 1 and 5.
**mistake_b:** Included 1 but excluded 5 (applied a strict inequality at one endpoint): counted 1, 2, 3, 4.
**mistake_d:** Included n = 0 or n = 6 — but |0 − 3| = 3 > 2 and |6 − 3| = 3 > 2, so both fail.
**mistake_e:** Mis-expanded the inequality as |n − 3| ≤ 2 → n ≤ 3 + 4 = 7 (doubled the right-hand side), yielding a wider range.
**common_trap:** Forgetting that the ≤ (non-strict) inequality includes the boundary values n = 1 and n = 5. Always convert to a compound inequality before counting.
**takeaway:** |n − a| ≤ k expands to a − k ≤ n ≤ a + k. Inclusive bounds include both endpoints. Integer count = (a + k) − (a − k) + 1 = 2k + 1.
**related_reading:** reading-quant-03-number-properties

---

## Q38
**difficulty:** Easy
**type:** Problem Solving
**topic:** Counting Multiples — LCM Application

How many integers from 1 to 100, inclusive, are divisible by both 4 and 6?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 10

**answer:** C
**fastest_path:** LCM(4, 6) = 12. Count = floor(100/12) = 8.
**explanation:** A number divisible by both 4 and 6 must be divisible by LCM(4, 6). Since 4 = 2² and 6 = 2·3, LCM = 2²·3 = 12. Multiples of 12 from 1 to 100: 12, 24, 36, 48, 60, 72, 84, 96. Count = floor(100/12) = 8.
**mistake_a:** Used GCF(4, 6) = 2 instead of LCM — then counted multiples of 2 (50 total) and reduced incorrectly, or otherwise arrived at 6.
**mistake_b:** Off-by-one — perhaps excluded 96 or made an error at the boundary: 12 × 8 = 96 ≤ 100, so 8 is correct.
**mistake_d:** Treated "divisible by both" as divisible by the product 4 × 6 = 24 (not LCM): floor(100/24) = 4, then over-counted something to reach 9.
**mistake_e:** Counted multiples of 4 in 1–100: floor(100/4) = 25, then halved without justification to reach 10 or 12.
**common_trap:** Using the product (24) instead of the LCM (12) as the combined divisor. The LCM is always correct for "divisible by both."
**takeaway:** "Divisible by both a and b" means divisible by LCM(a, b). Count of multiples of k in [1, n] = floor(n/k). These two facts combine here: LCM(4, 6) = 12, floor(100/12) = 8.
**related_reading:** reading-quant-03-number-properties

---

## Q39
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factor Pairs

The product of two positive integers is 48 and their sum is 14. What is the larger of the two integers?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 12

**answer:** C
**fastest_path:** Factor pairs of 48: (1,48), (2,24), (3,16), (4,12), (6,8). Only (6, 8) sums to 14. Larger = 8.
**explanation:** List factor pairs of 48 in order: (1, 48), (2, 24), (3, 16), (4, 12), (6, 8). Check each sum: only 6 + 8 = 14 ✓. The larger integer is 8.
**mistake_a:** Bubbled 6 — the smaller of the two integers.
**mistake_b:** Computed the average 14/2 = 7 and guessed 7 is one of the factors — but 48 / 7 is not an integer.
**mistake_d:** Tested 9 as a factor of 48 — but 48 / 9 is not an integer; 9 does not divide 48.
**mistake_e:** Picked the largest-looking factor (12), but 12 + 4 = 16 ≠ 14.
**common_trap:** Guessing large factors of 48 without checking all pairs systematically. A systematic factor-pair list prevents missing the correct pair.
**takeaway:** For "product = P and sum = S" problems: list all factor pairs of P in ascending order and check sums. Alternatively, set up x + y = S and xy = P to form a quadratic: x² − Sx + P = 0.
**related_reading:** reading-quant-03-number-properties

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders — Powers

What is the remainder when 7^100 is divided by 4?

- A) 0
- B) 1
- C) 2
- D) 3
- E) It depends on the exponent.

**answer:** B
**fastest_path:** 7 ≡ −1 (mod 4). (−1)^100 = 1. Remainder = 1.
**explanation:** 7 = 4 + 3, so 7 ≡ −1 (mod 4). Raising to the 100th power: 7^100 ≡ (−1)^100 = 1 (mod 4). Remainder = 1. Alternatively, powers of 7 mod 4 cycle as 3, 1, 3, 1, ... (period 2); 100 is even → lands on position 2 in the cycle → value 1.
**mistake_a:** Concluded 7^100 is divisible by 4 because 7 × 100 = 700 is divisible by 4 — confused 7^100 (exponentiation) with 7 × 100 (multiplication).
**mistake_c:** Computed 7^2 = 49, noted 49 mod 4 = 1, then halved to 0.5 and rounded to 2 — spurious arithmetic after finding the square.
**mistake_d:** Evaluated 7 mod 4 = 3 and stopped — computed the remainder of the base but ignored the exponent entirely.
**mistake_e:** Assumed the answer varies with the exponent — but the cycle has period 2, so parity of the exponent is all that matters.
**common_trap:** Stopping at 7 mod 4 = 3 without applying the exponent. Always reduce the base, determine the cycle of its powers, then apply the exponent.
**takeaway:** For a^n mod m: (1) reduce the base to r = a mod m, (2) find the cycle length of r^k mod m, (3) find n mod (cycle length) to get the position. Here r = −1, cycle length 2, 100 mod 2 = 0 → position 2 → value 1.
**related_reading:** reading-quant-03-number-properties

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Factor Counting with Variable Primes

If p and q are distinct prime numbers, how many positive factors does p²q³ have?

- A) 5
- B) 6
- C) 9
- D) 12
- E) 24

**answer:** D
**fastest_path:** Factor count = (2+1)(3+1) = 3 × 4 = 12.
**explanation:** For n = p^a · q^b with p and q distinct primes, the positive factor count is (a+1)(b+1). Here a = 2 and b = 3: (2+1)(3+1) = 3 × 4 = 12. Concretely, each factor has the form p^i · q^j where 0 ≤ i ≤ 2 (3 choices) and 0 ≤ j ≤ 3 (4 choices), giving 3 × 4 = 12.
**mistake_a:** Added the exponents: 2 + 3 = 5 — used an additive formula instead of the multiplicative one.
**mistake_b:** Computed (2+1) + (3+1) = 3 + 3 = 6 — added the per-prime contributions instead of multiplying them.
**mistake_c:** Used exponent 2 for both primes: (2+1)(2+1) = 9 — dropped the exponent 3 for q.
**mistake_e:** Multiplied the base values of the exponents: 2 × 3 = 6, then multiplied by 4 for some other reason — confused factor count with the value of the number.
**common_trap:** Adding (a+1) + (b+1) rather than multiplying. Each prime's exponent choices multiply independently.
**takeaway:** Factor count of p₁^a₁ · p₂^a₂ · ... = (a₁+1)(a₂+1).... The formula is multiplicative across distinct primes. It works the same whether primes are given as numerals or variables like p and q.
**related_reading:** reading-quant-03-number-properties

---

## Q42
**difficulty:** Medium
**type:** Problem Solving
**topic:** Perfect Squares and Integer Bounds

For which positive integer n does n² < 200 < (n+1)²?

- A) 12
- B) 13
- C) 14
- D) 15
- E) 16

**answer:** C
**fastest_path:** sqrt(200) ≈ 14.1. Check: 14² = 196 < 200 < 225 = 15². So n = 14.
**explanation:** Find the integer part of sqrt(200). sqrt(200) = sqrt(4 × 50) = 2·sqrt(50) ≈ 2 × 7.07 = 14.14. So floor(sqrt(200)) = 14. Verify: 14² = 196 < 200 < 225 = 15². Both conditions satisfied → n = 14.
**mistake_a:** Tested n = 12: 144 < 200 < 169 — but 169 < 200 as well, so 200 > (12+1)², failing the right inequality. Stopped too early.
**mistake_b:** Tested n = 13: 169 < 200 < 196? But 196 < 200 also, so 200 > 14² = 196 — the right inequality fails. Students may miscompute 14² as something larger than 200.
**mistake_d:** Bubbled 15 — but 15² = 225 > 200, which means 15² is NOT less than 200, so the left inequality fails.
**mistake_e:** Tried n = 16: 256 > 200, so 16² > 200 immediately fails the left condition.
**common_trap:** Finding one valid condition (n² < 200) without verifying the other ((n+1)² > 200). Both must hold simultaneously. Memorize: 14² = 196 and 15² = 225.
**takeaway:** n² < k < (n+1)² means n = floor(sqrt(k)). Useful squares to know: 12²=144, 13²=169, 14²=196, 15²=225, 16²=256. Recognizing these boundaries prevents square-root computation.
**related_reading:** reading-quant-03-number-properties

---

## Q43
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility by 12

Is the positive integer n divisible by 12?

(1) n is divisible by 6.
(2) n is divisible by 8.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** 12 = 2²·3. (1) gives 2¹·3 — missing one factor of 2. (2) gives 2³ — missing the factor of 3. Together: LCM(6, 8) = 24, and 12 | 24 → YES always.
**explanation:** 12 = 2² × 3. Statement (1): n divisible by 6 = 2·3 guarantees one factor of 2 and one factor of 3, but not the second factor of 2 needed for 4. Counter: n = 6 is not divisible by 12. Insufficient. Statement (2): n divisible by 8 = 2³ guarantees 2² (more than enough 2s) but provides no factor of 3. Counter: n = 8 is not divisible by 12. Insufficient. Together: n is divisible by LCM(6, 8) = 24. Since 12 divides 24, every multiple of 24 is a multiple of 12 → definite YES. Sufficient. Answer: C.
**mistake_a:** Assumed (1) provides 4 × 3 = 12 — but divisibility by 6 gives only 2¹ × 3, not 2² × 3.
**mistake_b:** Assumed (2) alone is sufficient — provides plenty of 2s but no factor of 3.
**mistake_d:** Assumed each alone is sufficient — both are individually missing one prime component.
**mistake_e:** Concluded together insufficient — LCM(6, 8) = 24, and 12 | 24, so the combined constraint pins the answer to YES.
**common_trap:** Checking whether each statement alone gives one required prime and concluding "close enough." Both 6 and 8 each give only part of what 12 = 2² × 3 requires.
**takeaway:** To combine divisibility conditions: compute LCM of the given divisors and ask whether the target divides the LCM. LCM(6, 8) = 24; 12 | 24 → yes, together sufficient.
**related_reading:** reading-quant-03-number-properties

---

## Q44
**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting with Inclusion-Exclusion

How many two-digit positive integers are divisible by 7 but not by 3?

- A) 7
- B) 8
- C) 9
- D) 10
- E) 13

**answer:** C
**fastest_path:** Two-digit multiples of 7: 13 total. Of these, multiples of LCM(7,3) = 21: 4 values. Answer: 13 − 4 = 9.
**explanation:** Two-digit multiples of 7: from 7×2=14 to 7×14=98, count = 14 − 2 + 1 = 13. List: 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98. Of these, divisible by 3 means divisible by LCM(7, 3) = 21. Two-digit multiples of 21: 21, 42, 63, 84 → 4 values (next is 105, three digits). Divisible by 7 but not 3: 13 − 4 = 9.
**mistake_a:** Over-excluded — subtracted 6 instead of 4, perhaps including 105/21 = 5 as a two-digit multiple of 21.
**mistake_b:** Found only 3 two-digit multiples of 21 — stopped the list before 84.
**mistake_d:** Subtracted only 3 multiples of 21: 13 − 3 = 10.
**mistake_e:** Did not subtract any multiples of 3 — reported the raw count of two-digit multiples of 7 (13).
**common_trap:** Miscounting the multiples of 21 in the two-digit range. The list 21, 42, 63, 84 has exactly 4 entries; the next (105) is three digits. Listing them explicitly prevents an off-by-one error.
**takeaway:** "Divisible by A but not by B" = (count div by A) − (count div by LCM(A, B)). Always recompute LCM rather than using the product when A and B share a common factor.
**related_reading:** reading-quant-03-number-properties

---

## Q45
**difficulty:** Medium
**type:** Problem Solving
**topic:** Smallest Integer with Exactly N Factors

What is the smallest positive integer that has exactly 6 positive factors?

- A) 8
- B) 10
- C) 12
- D) 16
- E) 18

**answer:** C
**fastest_path:** Factor count 6 = 3 × 2 → form p²·q. Smallest: 2²·3 = 12. Factor count 6 = 6 → form p⁵. Smallest: 2⁵ = 32. Winner: 12.
**explanation:** Factor count = 6 requires exponent structure (a₁+1)(a₂+1)... = 6. Factor 6 as products: 6 = 6 (→ p⁵, smallest is 2⁵ = 32) or 6 = 3×2 (→ p²·q, smallest is 2²×3 = 12). Assign the largest exponent to the smallest prime. Smallest overall: 12. Verify: factors of 12 are 1, 2, 3, 4, 6, 12 — exactly 6. ✓
**mistake_a:** 8 = 2³ has factor count (3+1) = 4, not 6.
**mistake_b:** 10 = 2·5 has factor count (1+1)(1+1) = 4, not 6.
**mistake_d:** 16 = 2⁴ has factor count (4+1) = 5, not 6.
**mistake_e:** 18 = 2·3² has factor count (1+1)(2+1) = 6 ✓ — but 18 > 12, so 12 is the smaller answer with 6 factors.
**common_trap:** Identifying 18 as a valid number with 6 factors but failing to check whether a smaller number also qualifies. Always exhaust all exponent factorizations of the target count and compare.
**takeaway:** To minimize n with a given factor count k: factor k as (a+1)(b+1)... with a ≥ b ≥ ..., then assign 2^a × 3^b × 5^c... (largest exponents on smallest primes). Compare all factorizations of k.
**related_reading:** reading-quant-03-number-properties

---

## Q46
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility of a Consecutive Integer Product

If n is a positive integer, is n(n+1)(n+2) divisible by 12?

(1) n is even.
(2) n is divisible by 3.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** (1) n even → n and n+2 both even → product has factor 2×2=4; consecutive triple always supplies factor of 3 → divisible by 12. Sufficient. (2) n=9: 9×10×11=990, 990/12 not an integer. Insufficient.
**explanation:** 12 = 4 × 3. Products of 3 consecutive integers are always divisible by 3! = 6, so a factor of 3 is already guaranteed. The question reduces to: is the product also divisible by 4? Statement (1): n even → n+2 is also even (two even numbers). The product picks up at least 2 from n and at least 2 from n+2, giving factor 4. Combined with the guaranteed factor of 3: divisible by 12. Sufficient — always YES. Statement (2): n div by 3, but this supplies an extra factor of 3 (already guaranteed) rather than the missing factor of 2. Counter: n = 9 → 9×10×11 = 990. 990 / 12 = 82.5, not an integer. Insufficient. Answer: A.
**mistake_b:** Concluded (2) sufficient because 3 | n — but the product already has a factor of 3 from the consecutive triple; the missing ingredient for 12 is an extra factor of 2, which (2) does not provide.
**mistake_c:** Required both — but (1) alone resolves the question.
**mistake_d:** Concluded each alone works.
**mistake_e:** Concluded neither works — (1) guarantees divisibility by 12.
**common_trap:** Thinking that having n divisible by 3 strengthens divisibility in a useful way — it provides a redundant factor of 3 rather than the needed factor of 4. Analyze which prime powers are missing relative to the target.
**takeaway:** Product of 3 consecutive integers is always divisible by 6. For 12 you need an additional factor of 2 (to reach 4). When n is even, both n and n+2 are even, providing that extra factor.
**related_reading:** reading-quant-03-number-properties

---

## Q47
**difficulty:** Hard
**type:** Problem Solving
**topic:** Inclusion-Exclusion — Symmetric Difference

How many integers from 1 to 200, inclusive, are divisible by 3 or by 7, but not by both?

- A) 57
- B) 66
- C) 76
- D) 85
- E) 94

**answer:** C
**fastest_path:** Only-3: 66 − 9 = 57. Only-7: 28 − 9 = 19. Total: 57 + 19 = 76.
**explanation:** Multiples of 3 in [1,200]: floor(200/3) = 66. Multiples of 7: floor(200/7) = 28. Multiples of both (= LCM(3,7) = 21): floor(200/21) = 9. "Only 3" = 66 − 9 = 57. "Only 7" = 28 − 9 = 19. "3 or 7 but not both" = 57 + 19 = 76. Equivalently: |A| + |B| − 2|A ∩ B| = 66 + 28 − 18 = 76.
**mistake_a:** Reported 57 — computed "only divisible by 3" correctly but forgot to add the "only divisible by 7" count of 19.
**mistake_b:** Reported 66 — the count of all multiples of 3, ignoring the "not by both" restriction and the contribution of multiples of 7 only.
**mistake_d:** Reported 85 = 66 + 28 − 9 — the standard inclusion-exclusion union (divisible by 3 OR 7 inclusive). Subtracted the overlap once rather than twice.
**mistake_e:** Reported 94 = 66 + 28 — simply added both counts without any overlap adjustment.
**common_trap:** Using the standard union formula |A ∪ B| = |A| + |B| − |A ∩ B| = 85, which counts the "both" region once. The exclusive-or ("but not both") removes the overlap entirely: subtract it a second time, giving 85 − 9 = 76.
**takeaway:** "A or B but not both" (symmetric difference) = |A| + |B| − 2|A ∩ B|. The inclusive union formula subtracts the overlap once; the exclusive version subtracts it twice. These two formulas differ by exactly |A ∩ B|.
**related_reading:** reading-quant-03-number-properties

---

## Q48
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Units Digit via Higher Powers

What is the units digit of the positive integer n?

(1) The units digit of n² is 9.
(2) The units digit of n³ is 3.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**fastest_path:** (1) n² ends in 9 → n ends in 3 or 7. Two options — insufficient. (2) n³ ends in 3 → check all digits: only 7³ = 343 ends in 3. Units digit = 7 — sufficient.
**explanation:** Statement (1): squares ending in 9 come from digits 3 (3²=9) and 7 (7²=49). Two possible units digits → insufficient. Statement (2): compute units digit of k³ for k = 0 through 9: 0→0, 1→1, 2→8, 3→7, 4→4, 5→5, 6→6, 7→3, 8→2, 9→9. Only k = 7 produces a cube ending in 3. Units digit of n must be 7. Sufficient. Answer: B.
**mistake_a:** Assumed (1) is sufficient — but both 3 and 7 produce squares ending in 9, giving two possible answers.
**mistake_c:** Required both statements — (2) alone uniquely identifies units digit 7. (Combining: n ends in 7 → n² ends in 9 ✓ and n³ ends in 3 ✓ — consistent, but (2) already resolved it.)
**mistake_d:** Assumed each alone works — (1) is ambiguous between units digits 3 and 7.
**mistake_e:** Assumed neither works — (2) produces a unique match at units digit 7.
**common_trap:** For statement (2), students sometimes verify that 7³ ends in 3 without checking whether any other digit also gives a cube ending in 3. Systematic enumeration is required to establish uniqueness.
**takeaway:** Units-digit of squares is not a bijection: both 3 and 7 map to the same square-units digit (9). But units-digit of cubes IS a bijection — each digit maps to a distinct cube-units digit. This asymmetry is the key insight in DS problems involving cubes.
**related_reading:** reading-quant-03-number-properties

---

## Q49
**difficulty:** Hard
**type:** Problem Solving
**topic:** Sum of All Factors Formula

What is the sum of all positive factors of 2⁴ × 3²?

- A) 195
- B) 279
- C) 360
- D) 403
- E) 465

**answer:** D
**fastest_path:** Sum = (1+2+4+8+16)(1+3+9) = 31 × 13 = 403.
**explanation:** The sum of all factors of p^a × q^b = (1 + p + ... + p^a)(1 + q + ... + q^b). For 2⁴ × 3²: (1+2+4+8+16)(1+3+9) = 31 × 13 = 403. Equivalently: (2⁵−1)/(2−1) × (3³−1)/(3−1) = 31 × 13 = 403. Verify: 2⁴×3² = 144, which has 15 factors (listed: 1,2,3,4,6,8,9,12,16,18,24,36,48,72,144) summing to 403 ✓.
**mistake_a:** Missed the 2⁴ = 16 term in the first bracket: (1+2+4+8) × 13 = 15 × 13 = 195.
**mistake_b:** Used the value 3² = 9 directly instead of the geometric sum 1+3+9 = 13: 31 × 9 = 279.
**mistake_c:** Dropped the 1 from both brackets: (2+4+8+16)(3+9) = 30 × 12 = 360.
**mistake_e:** Added a spurious extra term to the 3-bracket (perhaps 3³ = 27 divided by 2, rounded to something): 31 × 15 = 465, which arises if the 3-sum is mistakenly evaluated as 1+5+9 = 15 or 3+3+9 = 15.
**common_trap:** Confusing the sum-of-factors formula (multiplicative geometric sums) with the factor-count formula. Also: forgetting to include the leading 1 in each geometric series (1 + p + ... rather than p + p² + ...).
**takeaway:** Sum of factors of p₁^a₁ × p₂^a₂ × ... = product of geometric sums (p_i^(a_i+1) − 1)/(p_i − 1). For 2⁴: (2⁵−1)/1 = 31. For 3²: (3³−1)/2 = 13. Final sum = 31 × 13 = 403. Memorize the geometric-series closed form.
**related_reading:** reading-quant-03-number-properties

---

## Q50
**difficulty:** Hard
**type:** Problem Solving
**topic:** Quadratic Equations and Prime Constraints

If p is a prime number and p² − p − 6 = 0, what is the value of p²?

- A) 4
- B) 9
- C) 25
- D) 49
- E) There is no prime that satisfies the equation.

**answer:** B
**fastest_path:** Factor: (p − 3)(p + 2) = 0 → p = 3 or p = −2. Only p = 3 is prime. p² = 9.
**explanation:** Factor the quadratic: p² − p − 6 = (p − 3)(p + 2) = 0. Solutions: p = 3 or p = −2. Since p must be a prime number (a positive integer greater than 1), p = 3. Then p² = 9.
**mistake_a:** Took p = −2 (the other root) and computed p² = (−2)² = 4 — but −2 is not prime. Primes are positive integers greater than 1 by definition.
**mistake_c:** Tested p = 5 without solving: 25 − 5 − 6 = 14 ≠ 0. p = 5 is not a solution.
**mistake_d:** Tested p = 7: 49 − 7 − 6 = 36 ≠ 0. p = 7 is not a solution.
**mistake_e:** Concluded no prime works — perhaps because −2 is the only negative solution, assumed all solutions must be non-prime. But p = 3 is the positive root and is prime.
**common_trap:** Two traps compound: (1) failing to factor and instead guessing prime values by trial, wasting time; (2) accepting p = −2 as valid and computing p² = 4, violating the definition of prime.
**takeaway:** When a problem restricts a variable to a specific set (here, primes), solve algebraically for all roots first, then apply the restriction to eliminate invalid ones. Don't trial-and-error when factoring is available.
**related_reading:** reading-quant-03-number-properties

---

## Q51
**difficulty:** Hard
**type:** Problem Solving
**topic:** Perfect Squares and Divisor Count Parity

How many integers from 1 to 100, inclusive, have an odd number of positive divisors?

- A) 8
- B) 9
- C) 10
- D) 11
- E) 12

**answer:** C
**fastest_path:** Odd divisor count ↔ perfect square. Perfect squares in [1, 100]: 1², 2², ..., 10² → 10 values.
**explanation:** Divisors pair naturally: for each d that divides n, n/d also divides n, giving pairs (d, n/d). This pairing is one-to-one unless d = n/d, i.e., d² = n — which occurs only when n is a perfect square. So a number has an odd count of divisors if and only if it is a perfect square (the square root is the unpaired divisor). Perfect squares from 1 to 100: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Count = 10.
**mistake_a:** Counted perfect squares from 4 to 81 only — excluded both 1 (= 1², one divisor, which is odd) and 100 (= 10²).
**mistake_b:** Counted 9 values — excluded either 1 or 100 but not both.
**mistake_d:** Included 0 as a "perfect square" (0 = 0²) or added a non-square integer.
**mistake_e:** Made an off-by-two error — included two non-perfect-squares or miscounted the range.
**common_trap:** Overlooking the endpoints 1 and 100. Both satisfy the perfect-square condition: 1 has one divisor (odd) and 100 = 10² has (2+1)(1+1) = 6... wait, 100 = 2²·5², so factor count = (2+1)(2+1) = 9 divisors (odd) ✓. Always check both endpoints of any range.
**takeaway:** The characterization "perfect squares have an odd number of divisors, all other positive integers have an even number" is a fundamental divisor-theory result. It follows directly from the pairing argument. On the GMAT it is always tested as a counting problem over a range.
**related_reading:** reading-quant-03-number-properties

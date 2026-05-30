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
**topic:** Factor Counting

How many positive factors does 36 have?

- A) 5
- B) 7
- C) 8
- D) 9
- E) 12

**answer:** D
**fastest_path:** 36 = 2² × 3². Number of factors = (2 + 1)(2 + 1) = 9.
**explanation:** Factor-count formula: if n = p₁^a × p₂^b × ..., then the number of positive factors is (a + 1)(b + 1) × .... Here 36 = 2² × 3², so factors = (2 + 1)(2 + 1) = 3 × 3 = 9. Verify by listing: 1, 2, 3, 4, 6, 9, 12, 18, 36 — exactly 9. ✓
**mistake_a:** Listed only factors that are ≤ √36 = 6: {1, 2, 3, 4, 6} = 5. Forgot that each small factor pairs with a large one (e.g., 6 pairs with 6, 4 with 9, 3 with 12, 2 with 18, 1 with 36).
**mistake_b:** Miscounted the list — skipped one of 1 or 36.
**mistake_c:** Excluded 36 itself (forgot that n is always one of its own factors).
**mistake_e:** Computed 36 ÷ 3 = 12 (divided by a factor of 36 and reported the quotient as the factor count).
**common_trap:** Listing only factors ≤ √n and forgetting to count their paired partners greater than √n.
**takeaway:** Use the formula: factor count of p₁^a × p₂^b = (a + 1)(b + 1). It is faster than listing and eliminates counting errors. Every factor ≤ √n pairs with a unique factor ≥ √n.
**related_reading:** reading-quant-03-number-properties

---

## Q36
**difficulty:** Easy
**type:** Problem Solving
**topic:** Divisibility Rules

Which of the following is divisible by both 3 and 4?

- A) 18
- B) 24
- C) 30
- D) 34
- E) 42

**answer:** B
**fastest_path:** Divisible by 4 iff last two digits form a multiple of 4. Divisible by 3 iff digit sum is a multiple of 3. Test 24: 24/4 = 6 ✓, 2 + 4 = 6 ✓.
**explanation:** Check each option. A) 18: digit sum = 9 (div by 3 ✓); 18 ÷ 4 = 4.5 (not div by 4) ✗. B) 24: digit sum = 6 (div by 3 ✓); 24 ÷ 4 = 6 (div by 4 ✓). Both conditions satisfied. C) 30: digit sum = 3 (div by 3 ✓); 30 ÷ 4 = 7.5 ✗. D) 34: digit sum = 7 (not div by 3) ✗. E) 42: digit sum = 6 (div by 3 ✓); 42 ÷ 4 = 10.5 ✗. Only B satisfies both.
**mistake_a:** 18 is divisible by 3 but not by 4; student stopped after checking divisibility by 3 only.
**mistake_c:** 30 is divisible by 3 but not by 4; same partial check.
**mistake_d:** 34 is divisible by neither — student may have misapplied the divisibility-by-3 rule (7 is not divisible by 3).
**mistake_e:** 42 is divisible by 3 but not by 4; same one-condition check.
**common_trap:** Checking divisibility by only one of the two required divisors and stopping there.
**takeaway:** For "divisible by both X and Y" problems, both conditions must hold simultaneously. Apply the faster rule first (digit-sum for 3, last-two-digits for 4) to screen options quickly.
**related_reading:** reading-quant-03-number-properties

---

## Q37
**difficulty:** Easy
**type:** Problem Solving
**topic:** GCD and LCM

What is the greatest common divisor (GCD) of 48 and 72?

- A) 6
- B) 8
- C) 12
- D) 24
- E) 144

**answer:** D
**fastest_path:** 48 = 2⁴ × 3; 72 = 2³ × 3². GCD = 2^min(4,3) × 3^min(1,2) = 2³ × 3 = 24.
**explanation:** Prime factorizations: 48 = 2⁴ × 3¹ and 72 = 2³ × 3². For each prime, GCD takes the smaller exponent: min(4, 3) = 3 for the prime 2; min(1, 2) = 1 for the prime 3. GCD = 2³ × 3¹ = 8 × 3 = 24. Verify: 48/24 = 2 ✓, 72/24 = 3 ✓.
**mistake_a:** Used exponent 1 for every prime instead of the minimum: 2¹ × 3¹ = 6.
**mistake_b:** Took 2³ = 8 but forgot the factor of 3 entirely.
**mistake_c:** Used 2² instead of 2³: 2² × 3 = 12 (one step short on the power of 2).
**mistake_e:** Computed the LCM instead of GCD. LCM takes the larger exponent: 2^max(4,3) × 3^max(1,2) = 2⁴ × 3² = 144.
**common_trap:** Confusing GCD (take minimum exponents) with LCM (take maximum exponents) — or computing the LCM when the GCD is asked for.
**takeaway:** GCD = product of each prime raised to the MINIMUM exponent appearing in either factorization. LCM = product of each prime raised to the MAXIMUM exponent. GCD × LCM = a × b (useful identity for checking work).
**related_reading:** reading-quant-03-number-properties

---

## Q38
**difficulty:** Easy
**type:** Problem Solving
**topic:** Counting Multiples — LCM

How many integers from 1 to 100, inclusive, are divisible by both 4 and 6?

- A) 4
- B) 8
- C) 12
- D) 16
- E) 25

**answer:** B
**fastest_path:** Must be divisible by LCM(4, 6) = 12. Count: floor(100/12) = 8.
**explanation:** A number divisible by both 4 and 6 must be divisible by their LCM. 4 = 2², 6 = 2 × 3, so LCM = 2² × 3 = 12. Multiples of 12 from 1 to 100: 12, 24, 36, 48, 60, 72, 84, 96 — that is 8 values. (12 × 9 = 108 > 100, so stop at 96.) Count = 8.
**mistake_a:** Computed LCM(4, 6) = 4 × 6 = 24 (wrong — used product instead of LCM), then floor(100/24) = 4.
**mistake_c:** Used the LCM value (12) as the count rather than computing floor(100/12).
**mistake_d:** Counted multiples of 6 only: floor(100/6) = 16, ignoring the requirement to also be divisible by 4.
**mistake_e:** Counted multiples of 4 only: floor(100/4) = 25, ignoring the requirement to also be divisible by 6.
**common_trap:** Using the product of the two divisors (4 × 6 = 24) instead of their LCM (12) — the LCM is always ≤ the product and is often smaller.
**takeaway:** "Divisible by both a and b" ⟺ "divisible by LCM(a, b)". Count multiples of m from 1 to n as floor(n/m). Never multiply divisors together as a substitute for computing the LCM.
**related_reading:** reading-quant-03-number-properties

---

## Q39
**difficulty:** Easy
**type:** Problem Solving
**topic:** Odd/Even Arithmetic

For any integer n, which of the following is always odd?

- A) 2n
- B) n²
- C) 2n + 1
- D) n + 2
- E) n(n + 1)

**answer:** C
**fastest_path:** 2n is always even; 2n + 1 is always one more than an even number, so always odd.
**explanation:** Evaluate each expression. A) 2n: always even (any multiple of 2 is even). B) n²: even if n is even, odd if n is odd — not always odd. C) 2n + 1: 2n is always even, and even + 1 = odd, so 2n + 1 is always odd for any integer n. D) n + 2: same parity as n — odd if n is odd, even if n is even. E) n(n + 1): product of consecutive integers, one of which is always even, so always even.
**mistake_a:** Selected 2n — confusing "always divisible by 2" with "always odd."
**mistake_b:** Selected n² — forgot that n² inherits the parity of n.
**mistake_d:** Selected n + 2 — correct that adding 2 preserves parity, but that means the result matches n's parity, not that it is always odd.
**mistake_e:** Selected n(n+1) — forgot that consecutive integers always include one even, making the product always even.
**common_trap:** Selecting an expression that is sometimes odd and sometimes even instead of identifying the one that is always odd.
**takeaway:** 2k is always even for any integer k. 2k + 1 is always odd. These are the definitions of even and odd. Any expression that can be written as 2(something) is even; any expression that can be written as 2(something) + 1 is odd.
**related_reading:** reading-quant-03-number-properties

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Prime Factorization and Counting Factors

How many positive integers are factors of 360?

- A) 12
- B) 16
- C) 18
- D) 24
- E) 30

**answer:** D
**fastest_path:** 360 = 2³ × 3² × 5. Factors = (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24.
**explanation:** Factor 360 completely: 360 = 8 × 45 = 2³ × 3² × 5¹. Apply the formula: for n = p^a × q^b × r^c, the factor count is (a + 1)(b + 1)(c + 1). Here: (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24. Sanity check: 360 has both small factors (1, 2, 3, 4, 5, 6, ...) and their large complements (...72, 90, 120, 180, 360), so a count in the 20s is plausible.
**mistake_a:** Applied (a + 1)(b + 1)(c) instead of (a + 1)(b + 1)(c + 1) — omitted the "+1" on the smallest prime's exponent (5¹): (4)(3)(1) = 12.
**mistake_b:** Applied (a + 1)(b)(c + 1) — omitted "+1" on the middle prime's exponent (3²): (4)(2)(2) = 16.
**mistake_c:** Applied (a)(b + 1)(c + 1) — omitted "+1" on the largest prime's exponent (2³): (3)(3)(2) = 18.
**mistake_e:** Misfactored 360 as 2⁴ × 3² × 5 (one extra factor of 2), yielding (4 + 1)(2 + 1)(1 + 1) = 5 × 3 × 2 = 30.
**common_trap:** Forgetting to add 1 to every exponent — the formula is (exponent + 1) for each prime, not just the exponent itself.
**takeaway:** Factor-count formula: if n = p^a × q^b × r^c, then factors(n) = (a + 1)(b + 1)(c + 1). Every exponent in the factorization contributes a "+1". Get the prime factorization right first — a mis-factored base invalidates the entire calculation.
**related_reading:** reading-quant-03-number-properties

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders — Algebra

When positive integer n is divided by 7, the remainder is 4. What is the remainder when 3n is divided by 7?

- A) 1
- B) 3
- C) 5
- D) 12
- E) 19

**answer:** C
**fastest_path:** (3 × 4) mod 7 = 12 mod 7 = 5.
**explanation:** Write n = 7k + 4 for some non-negative integer k. Then 3n = 3(7k + 4) = 21k + 12 = 7(3k + 1) + 5. The term 7(3k + 1) is divisible by 7, so the remainder when 3n is divided by 7 is 5. Shortcut: (3 × 4) mod 7 = 12 mod 7 = 5. Both methods agree.
**mistake_a:** Divided the original remainder by the multiplier: 4 ÷ 3 ≈ 1 (rounded down), applying a division instead of a multiplication.
**mistake_b:** Computed 3 × 4 = 12, then subtracted 9 instead of 7: 12 − 9 = 3. Arithmetic error in the final mod step.
**mistake_d:** Computed 3 × 4 = 12 and stopped without performing the final division by 7. Reported the intermediate product as the answer.
**mistake_e:** Computed 3 × 4 = 12, then added the divisor instead of subtracting: 12 + 7 = 19. Added when the goal was to reduce mod 7.
**common_trap:** Stopping at 3 × remainder = 12 without taking 12 mod 7. When the scaled remainder exceeds the divisor, one more reduction step is needed.
**takeaway:** If n ≡ r (mod m), then cn ≡ cr (mod m). Compute cr, then reduce mod m if cr ≥ m. The shortcut "multiply the remainder, then reduce" works because modular arithmetic is linear.
**related_reading:** reading-quant-03-number-properties

---

## Q42
**difficulty:** Medium
**type:** Problem Solving
**topic:** Consecutive Integers

The sum of 5 consecutive integers is 85. What is the largest of the five integers?

- A) 15
- B) 17
- C) 18
- D) 19
- E) 21

**answer:** D
**fastest_path:** Average = 85/5 = 17 = middle term. Largest = 17 + 2 = 19.
**explanation:** Let the five consecutive integers be n − 2, n − 1, n, n + 1, n + 2. Their sum = 5n = 85, so n = 17. The integers are 15, 16, 17, 18, 19. The largest is 19. Verify: 15 + 16 + 17 + 18 + 19 = 85 ✓.
**mistake_a:** Reported the smallest integer (15) instead of the largest.
**mistake_b:** Reported the middle integer (17), which equals the mean, not the maximum.
**mistake_c:** Off-by-one — added 1 to the middle term instead of 2.
**mistake_e:** Added 4 instead of 2 to the middle term (used the full range of the sequence instead of half the range).
**common_trap:** Reporting the middle (average) integer rather than the largest — for an odd count of consecutive integers, the average equals the middle term, which is 2 below the maximum.
**takeaway:** For k consecutive integers with sum S: middle term = S/k (only valid when k is odd). From the middle term, the largest is (k − 1)/2 steps above it. For 5 consecutive: largest = middle + 2.
**related_reading:** reading-quant-03-number-properties

---

## Q43
**difficulty:** Medium
**type:** Problem Solving
**topic:** LCM and GCD Identity

The GCD of two positive integers is 6 and their LCM is 120. If one of the integers is 24, what is the other?

- A) 20
- B) 24
- C) 30
- D) 36
- E) 48

**answer:** C
**fastest_path:** GCD × LCM = a × b → 6 × 120 = 24 × b → b = 720/24 = 30.
**explanation:** For any two positive integers a and b: GCD(a, b) × LCM(a, b) = a × b. Substituting: 6 × 120 = 24 × b → 720 = 24b → b = 30. Verify: 24 = 2³ × 3 and 30 = 2 × 3 × 5. GCD(24, 30) = 2 × 3 = 6 ✓. LCM(24, 30) = 2³ × 3 × 5 = 120 ✓.
**mistake_a:** Divided LCM by GCD directly: 120 ÷ 6 = 20. This ignores the known value of a and misapplies the identity.
**mistake_b:** Echoed the given value (24) without computing.
**mistake_d:** Computed GCD × 6 = 36 — multiplied GCD by itself rather than applying the identity.
**mistake_e:** Doubled the given integer: 2 × 24 = 48. No mathematical basis.
**common_trap:** Forgetting the GCD × LCM = a × b identity and resorting to an ad-hoc calculation (like dividing LCM by GCD) that ignores the value of the known integer.
**takeaway:** GCD(a, b) × LCM(a, b) = a × b. This identity is always true for two positive integers and lets you find the unknown integer in one step when three of the four values are known.
**related_reading:** reading-quant-03-number-properties

---

## Q44
**difficulty:** Medium
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 7⁴⁸?

- A) 1
- B) 3
- C) 7
- D) 9
- E) 4

**answer:** A
**fastest_path:** Units digits of powers of 7 cycle with period 4: 7, 9, 3, 1. 48 is divisible by 4 → units digit = 1 (4th position in cycle).
**explanation:** Trace the units digits of successive powers of 7: 7¹ → 7, 7² → 9 (49), 7³ → 3 (343), 7⁴ → 1 (2401), 7⁵ → 7 (cycle restarts). The cycle is {7, 9, 3, 1} with length 4. To find the units digit of 7⁴⁸, divide the exponent by the cycle length: 48 ÷ 4 = 12 with remainder 0. A remainder of 0 corresponds to the last position in the cycle (position 4), which has units digit 1.
**mistake_b:** Used exponent 47 (off by one): 47 mod 4 = 3 → position 3 → units digit 3.
**mistake_c:** Reported the units digit of 7 itself (the base), without analyzing the cycle.
**mistake_d:** Computed 48 mod 4 as 2 (arithmetic error) → position 2 → units digit 9.
**mistake_e:** Applied an incorrect cycle length of 3 or attempted an unrelated calculation resulting in 4.
**common_trap:** Misinterpreting a remainder of 0 as "position 0" (which doesn't exist in the cycle). A remainder of 0 always maps to the last position in the cycle.
**takeaway:** Powers of any integer cycle in their units digit with period dividing 4 (or shorter). Find the remainder r = exponent mod cycle_length. If r = 0, use the last position; otherwise use position r. Memorize cycles: 2→{2,4,8,6}, 3→{3,9,7,1}, 7→{7,9,3,1}, 8→{8,4,2,6}.
**related_reading:** reading-quant-03-number-properties

---

## Q45
**difficulty:** Medium
**type:** Problem Solving
**topic:** Divisibility — Algebraic Expression

For any positive integer n, which of the following expressions is always divisible by 6?

- A) n(n + 1)(n + 2)
- B) n(n + 2)
- C) n² + n + 6
- D) 3n + 3
- E) 2n(n + 3)

**answer:** A
**fastest_path:** n(n+1)(n+2) is the product of 3 consecutive integers — always contains a multiple of 2 and a multiple of 3, so always divisible by 6.
**explanation:** A) n(n+1)(n+2): three consecutive integers always include at least one multiple of 2 and exactly one multiple of 3, so the product is always divisible by 6. B) n(n+2): both n and n+2 have the same parity. If n is odd, both factors are odd, making the product odd — not divisible by 2 or 6. (E.g., n = 1: 1 × 3 = 3.) C) n² + n + 6 = n(n+1) + 6: n(n+1) is always even (consecutive integers), so the sum is even; but divisibility by 3 fails — try n = 1: 1 × 2 + 6 = 8, not divisible by 3. D) 3n + 3 = 3(n+1): always divisible by 3, but when n is even, n+1 is odd, giving 3 × odd = odd — not divisible by 2. (E.g., n = 2: 9.) E) 2n(n+3): always divisible by 2, but try n = 1: 2(1)(4) = 8, not divisible by 3.
**mistake_b:** Chose n(n+2) — plausible because they appear nearly consecutive; missed that same-parity factors can both be odd.
**mistake_d:** Chose 3(n+1) — spotted the factor of 3 but forgot to verify divisibility by 2.
**mistake_e:** Chose 2n(n+3) — spotted the factor of 2 but forgot to verify divisibility by 3.
**common_trap:** Verifying only one of the two required prime factors (2 or 3) and assuming the other is automatically satisfied.
**takeaway:** Divisible by 6 requires divisibility by both 2 AND 3. Confirm both independently. Products of k consecutive integers are always divisible by k! — so 3 consecutive integers are always divisible by 3! = 6.
**related_reading:** reading-quant-03-number-properties

---

## Q46
**difficulty:** Medium
**type:** Problem Solving
**topic:** Factor Counting — Target Value

A positive integer n has exactly 9 positive factors. Which of the following could be n?

- A) 36
- B) 48
- C) 54
- D) 60
- E) 90

**answer:** A
**fastest_path:** 9 = 3 × 3 → n = p²q² for distinct primes p, q. 36 = 2² × 3² fits. Check: (2+1)(2+1) = 9 ✓.
**explanation:** For factor count = 9, write 9 as a product of positive integers: 9 = 9 or 9 = 3 × 3. Case 1: (a + 1) = 9 → a = 8 → n = p⁸ (smallest is 2⁸ = 256). Case 2: (a + 1)(b + 1) = 3 × 3 → a = b = 2 → n = p²q² for distinct primes p, q. Smallest example: 2² × 3² = 36. Check each option: A) 36 = 2²×3²: (3)(3) = 9 ✓. B) 48 = 2⁴×3: (5)(2) = 10 ✗. C) 54 = 2×3³: (2)(4) = 8 ✗. D) 60 = 2²×3×5: (3)(2)(2) = 12 ✗. E) 90 = 2×3²×5: (2)(3)(2) = 12 ✗.
**mistake_b:** 48 has 10 factors — one more than 9; easy to mistake if the count is off by one.
**mistake_c:** 54 has 8 factors — one fewer than 9; similarly close.
**mistake_d:** 60 is a "round" number that students often reach for, but it has 12 factors.
**mistake_e:** 90 is another attractive guess; also has 12 factors.
**common_trap:** Testing numbers by gut rather than systematically deriving what form n must take (9 = 3×3 → n = p²q²) before evaluating options.
**takeaway:** For a target factor count T, write T as all possible products of positive integers — each product shape (a+1)(b+1)... tells you the exponent pattern of n. Derive the required form of n first; then test the options against that form.
**related_reading:** reading-quant-03-number-properties

---

## Q47
**difficulty:** Hard
**type:** Problem Solving
**topic:** Remainders — Chinese Remainder Setup

Positive integer n leaves a remainder of 3 when divided by 4 and a remainder of 2 when divided by 3. Which of the following could be n?

- A) 19
- B) 23
- C) 27
- D) 31
- E) 39

**answer:** B
**fastest_path:** n ≡ 3 (mod 4) AND n ≡ 2 (mod 3). Test 23: 23 = 4×5 + 3 ✓; 23 = 3×7 + 2 ✓.
**explanation:** From n ≡ 3 (mod 4): n is in the sequence 3, 7, 11, 15, 19, 23, 27, 31, 35, 39, ... From n ≡ 2 (mod 3): n is in the sequence 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, ... The common values repeat with period LCM(4, 3) = 12, starting at n = 11: 11, 23, 35, 47, ... Test each option: A) 19: 19 mod 3 = 1 ✗. B) 23: 23 mod 4 = 3 ✓, 23 mod 3 = 2 ✓. ✓ C) 27: 27 mod 3 = 0 ✗. D) 31: 31 mod 3 = 1 ✗. E) 39: 39 mod 3 = 0 ✗. Only B satisfies both conditions.
**mistake_a:** 19 mod 4 = 3 (first condition ✓), but 19 mod 3 = 1 ✗. Stopped after verifying the first remainder.
**mistake_c:** 27 mod 4 = 3 (first condition ✓), but 27 mod 3 = 0 ✗. All wrong answers satisfy the mod-4 condition — the trap is stopping after one check.
**mistake_d:** 31 mod 4 = 3 (first condition ✓), but 31 mod 3 = 1 ✗.
**mistake_e:** 39 mod 4 = 3 (first condition ✓), but 39 mod 3 = 0 ✗.
**common_trap:** Every wrong answer here satisfies the first remainder condition (mod 4). Students who verify only one condition will find multiple candidates and guess incorrectly.
**takeaway:** In double-remainder problems, both conditions must hold simultaneously. Check them in sequence; discard any option that fails either test. Systematic listing is the safest method: write the sequences for each congruence and find the intersection.
**related_reading:** reading-quant-03-number-properties

---

## Q48
**difficulty:** Hard
**type:** Problem Solving
**topic:** Trailing Zeros in Factorials

How many trailing zeros does 45! have?

- A) 8
- B) 9
- C) 10
- D) 11
- E) 12

**answer:** C
**fastest_path:** Count factors of 5 in 45!: floor(45/5) + floor(45/25) = 9 + 1 = 10. Each pairs with a factor of 2 to make a trailing zero.
**explanation:** Trailing zeros come from factors of 10 = 2 × 5. Since factors of 2 always outnumber factors of 5 in any factorial, the count of trailing zeros equals the number of times 5 divides n!. By Legendre's formula: v₅(45!) = floor(45/5) + floor(45/25) + floor(45/125) + ... = 9 + 1 + 0 = 10. (floor(45/125) = 0, so the series terminates.) Factors of 2 check: v₂(45!) = 22 + 11 + 5 + 2 + 1 = 41, confirming factors of 2 far exceed factors of 5. Trailing zeros = 10.
**mistake_a:** Computed floor(44/5) = 8 — excluded 45 itself from the count (used 44 instead of 45).
**mistake_b:** Computed only floor(45/5) = 9 — applied Legendre's formula for one term only and forgot that 25 contributes an extra factor of 5.
**mistake_d:** Counted floor(45/5) + floor(45/25) = 9 + 1 = 10, then added 1 more erroneously, perhaps from double-counting 25 itself.
**mistake_e:** Added an extra iteration: 9 + 1 + 2 = 12 (miscomputed floor(45/25) as 2 instead of 1).
**common_trap:** Stopping at floor(n/5) and missing the extra factor of 5 from multiples of 25 (and 125, 625, ... when applicable). Every multiple of 25 contributes two factors of 5 to n!, not just one.
**takeaway:** Trailing zeros in n! = v₅(n!) = sum of floor(n/5^k) for k = 1, 2, 3, ... until 5^k > n. For n = 45: floor(45/5) = 9, floor(45/25) = 1, floor(45/125) = 0. Total = 10. Always check whether any power of 5 beyond 5¹ is ≤ n.
**related_reading:** reading-quant-03-number-properties

---

## Q49
**difficulty:** Hard
**type:** Problem Solving
**topic:** Primes and Factors

What is the smallest positive integer n such that n! is divisible by 990?

- A) 9
- B) 10
- C) 11
- D) 12
- E) 18

**answer:** C
**fastest_path:** 990 = 2 × 3² × 5 × 11. Largest prime factor is 11. n! contains 11 only when n ≥ 11. Check 11! has 3² (yes: floor(11/3)+floor(11/9)=4). So n = 11.
**explanation:** Factor 990: 990 = 2 × 495 = 2 × 5 × 99 = 2 × 5 × 9 × 11 = 2 × 3² × 5 × 11. For n! to be divisible by 990, it must contain all prime power factors of 990: at least one factor of 2, at least two factors of 3, at least one factor of 5, and at least one factor of 11. The binding constraint is 11 — since 11 is prime, n! contains a factor of 11 only when n ≥ 11. Verify 11! contains 3²: v₃(11!) = floor(11/3) + floor(11/9) = 3 + 1 = 4 ≥ 2 ✓. All other prime power requirements (2¹, 5¹) are also satisfied by 11!. Since 10! contains no factor of 11, n = 11 is the smallest.
**mistake_a:** Noticed 9 divides 990 (990 = 9 × 110) and guessed n = 9 — but 9! = 362880 and 990 ∤ 362880 because 9! contains no factor of 11.
**mistake_b:** Computed 990 = 9 × 110 = 9 × 10 × 11 and thought "the largest factor is 11, but 10 is the last number I multiply before reaching 11" — off by one.
**mistake_d:** Went one step past the correct answer out of caution.
**mistake_e:** Computed 990/55 = 18 or some other unrelated calculation.
**common_trap:** Factoring 990 into composite factors (9 × 110 or 10 × 99) instead of into primes. The largest prime factor of the target number determines the minimum n — because primes only appear in n! once n reaches that prime value.
**takeaway:** The smallest n such that n! is divisible by m equals the smallest n such that, for every prime power p^k dividing m, v_p(n!) ≥ k. Start by finding the largest prime in m's factorization — that is almost always the binding constraint. Then verify the other prime power requirements are also met.
**related_reading:** reading-quant-03-number-properties

---

## Q50
**difficulty:** Hard
**type:** Problem Solving
**topic:** GCD and LCM

The GCD of two positive integers a and b is 12, and their LCM is 180. If a < b, how many ordered pairs (a, b) are possible?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 6

**answer:** B
**fastest_path:** Write a = 12x, b = 12y with GCD(x, y) = 1 and xy = 15. Coprime factor pairs of 15: (1, 15) and (3, 5). Two pairs.
**explanation:** Since GCD(a, b) = 12, write a = 12x and b = 12y where GCD(x, y) = 1 (x and y share no common factors). Then LCM(a, b) = 12xy = 180, so xy = 15. Find all factor pairs (x, y) with x < y, xy = 15, and GCD(x, y) = 1: (1, 15): GCD(1, 15) = 1 ✓ → (a, b) = (12, 180). (3, 5): GCD(3, 5) = 1 ✓ → (a, b) = (36, 60). (5, 3) and (15, 1) violate x < y. Both solutions verify: GCD(12, 180) = 12 ✓, LCM(12, 180) = 180 ✓; GCD(36, 60) = 12 ✓, LCM(36, 60) = 180 ✓.
**mistake_a:** Found only one pair — perhaps only tested (12, 180) and stopped, or missed (3, 5) as a coprime factorization of 15.
**mistake_c:** Counted three factor pairs of 15: {(1,15), (3,5), (5,3)} without applying the x < y constraint, yielding 3.
**mistake_d:** Listed all factor pairs of 15 — including both orderings and without the coprimality screen: {(1,15), (3,5), (5,3), (15,1)} — giving 4.
**mistake_e:** Counted all positive divisors of 15 (which is 4: 1, 3, 5, 15), then guessed the answer was 6 by some other overcounting.
**common_trap:** Listing factor pairs of 15 without filtering for GCD(x, y) = 1, which would include invalid pairs like (x, y) = (1, 15) and (3, 5) — both happen to pass, but the filter is essential in general (e.g., if xy = 12, the pair (4, 3) is valid but (6, 2) is not since GCD(6, 2) = 2 ≠ 1).
**takeaway:** For a GCD/LCM pair problem, set a = d·x and b = d·y where d = GCD, then use LCM = d·x·y to find xy. Enumerate coprime factor pairs (x, y) with x < y. The coprimality constraint is critical — it ensures that d = GCD(a, b) exactly, not just a common divisor.
**related_reading:** reading-quant-03-number-properties

---

## Q51
**difficulty:** Hard
**type:** Problem Solving
**topic:** Integer Properties

For how many integers n with 1 ≤ n ≤ 100 is the expression n³ − n divisible by 6?

- A) 67
- B) 75
- C) 90
- D) 96
- E) 100

**answer:** E
**fastest_path:** n³ − n = (n−1)n(n+1): product of 3 consecutive integers. Always divisible by 3! = 6. All 100 values work.
**explanation:** Factor: n³ − n = n(n² − 1) = n(n − 1)(n + 1) = (n − 1) · n · (n + 1). This is the product of three consecutive integers. Among any three consecutive integers: (i) at least one is even, so the product is divisible by 2; (ii) exactly one is divisible by 3, so the product is divisible by 3. Since the product is divisible by both 2 and 3, it is divisible by 6 for every integer n. This holds for all 100 values from n = 1 to n = 100 — including n = 1, where (0)(1)(2) = 0, which is divisible by 6 (0 = 6 × 0). Count = 100.
**mistake_a:** Counted only integers n where n itself is divisible by 6: floor(100/6) = 16 — then multiplied or adjusted to reach 67. Failed to recognize that the factor of 6 can come from the neighboring integers (n − 1) or (n + 1).
**mistake_b:** Estimated "roughly 3 in 4 integers" satisfy some partially-correct divisibility reasoning, reaching 75. Did not recognize the universal structure.
**mistake_c:** Excluded a subset of integers based on an incorrect edge-case analysis, reaching 90.
**mistake_d:** Identified that the formula works for almost all n but mistakenly believed 4 specific values (e.g., n = 1 or prime values) might fail, reaching 96.
**common_trap:** Assuming that divisibility by 6 is a selective condition that holds only for "special" values of n, rather than recognizing that the algebraic structure guarantees it universally. The factored form (n−1)n(n+1) makes the universality obvious; the unfactored form n³ − n conceals it.
**takeaway:** When an algebraic expression involves a variable, always try factoring before counting. Here, n³ − n factors into the product of 3 consecutive integers, which is always divisible by 3! = 6. More generally, the product of k consecutive integers is always divisible by k!. This principle, not case-by-case testing, is the GMAT-efficient path.
**related_reading:** reading-quant-03-number-properties

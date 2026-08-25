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
**fastest_path:** Cross out the even numbers and the obvious multiples of 3 and 5. The survivors are 23, 29, 31, and 37, so there are 4 primes.
**explanation:** Only the odd numbers need checking: 21, 23, 25, 27, 29, 31, 33, 35, 37, and 39. Eliminate 21, 27, 33, and 39 as multiples of 3, and eliminate 25 and 35 as multiples of 5. That leaves 23, 29, 31, and 37.

None of those four numbers has a possible prime divisor small enough to make it composite, so all four are prime. The correct answer is B.
**common_trap:** Counting 1 or an endpoint, or testing every integer instead of eliminating whole groups first.
**takeaway:** In a short interval, remove evens and obvious small-prime multiples before testing the few survivors.
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
**fastest_path:** Replace every even expression with E and every odd expression with O. Only choice C becomes E + O, which is odd.
**explanation:** Because m is even, m², mn, 2m, and m itself are even. Because n is odd, 2n is even.

- A: m + 2n = even + even = even.
- B: mn contains the even factor m, so it is even.
- C: m² + n = even + odd = odd.
- D: 2m + 2n = even + even = even.
- E: m - n is odd, and adding 1 makes it even.

Only choice C must be odd.
**common_trap:** Checking only the attractive choice instead of quickly classifying all five expressions.
**takeaway:** Reduce parity questions to E and O; the actual values of the integers do not matter.
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
**fastest_path:** Factor 36 as 2² × 3², then add 1 to each exponent and multiply: (2 + 1)(2 + 1) = 9.
**explanation:** Every factor of 36 chooses how many copies of 2 to use (0, 1, or 2) and how many copies of 3 to use (0, 1, or 2). That gives 3 independent choices for each prime, so 3 × 3 = 9 positive factors. The correct answer is D.
**common_trap:** Multiplying the exponents, 2 × 2, instead of multiplying the numbers of exponent choices, 3 × 3.
**takeaway:** If n = p^a × q^b, then n has (a + 1)(b + 1) positive factors.
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
**fastest_path:** Use the smallest legal value, n = 4. Then 3n + 5 = 17, which leaves remainder 3 when divided by 7.
**explanation:** Every legal value of n is 4 more than a multiple of 7. Replacing n with 4 therefore preserves the remainder calculation:

3(4) + 5 = 17 = 2 × 7 + 3.

So the remainder is 3, choice C. Any other legal value of n differs from 4 by a multiple of 7, and multiplying that difference by 3 still adds only a multiple of 7.
**common_trap:** Turning a one-line remainder substitution into a full algebraic expansion before noticing that n = 4 is enough.
**takeaway:** When a remainder question asks about an expression in one unknown, try the smallest legal value first.
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
**fastest_path:** The digit sum is 4 + A + 6 = 10 + A. The only multiple of 9 it can reach is 18, so A = 8.
**explanation:** A number is divisible by 9 when its digits sum to a multiple of 9. Since A is one digit, 10 + A ranges from 10 to 19; the only multiple of 9 in that range is 18. Therefore 10 + A = 18 and A = 8. Indeed, 486 has digit sum 18. The correct answer is D.
**common_trap:** Setting the digit sum equal to 9 even though 10 + A cannot be smaller than 10.
**takeaway:** For an unknown-digit divisibility question, write the digit sum and identify the reachable multiple of 9.
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
**fastest_path:** Prime-factorize both numbers and keep the smaller exponent of each shared prime: 168 = 2³ × 3 × 7 and 252 = 2² × 3² × 7, so the GCF is 2² × 3 × 7 = 84.
**explanation:** A common factor can use only prime factors available in both numbers. Both contain 2, 3, and 7; the shared supply is two copies of 2, one copy of 3, and one copy of 7. Their product is 4 × 3 × 7 = 84, choice E.
**common_trap:** Taking the larger exponent, which builds the LCM rather than the GCF.
**takeaway:** GCF takes the lower exponent of every shared prime; LCM takes the higher exponent of every prime present.
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
**fastest_path:** x leaves remainder 5 and y leaves remainder 3. Multiply those remainders: 5 × 3 = 15, which leaves remainder 7 when divided by 8.
**explanation:** Any multiple-of-8 part of x or y disappears in the final remainder. Only the remainder parts matter, so xy has the same remainder as 5 × 3 = 15. Since 15 = 8 + 7, the remainder is 7, choice D.

Expanding (8q + 5)(8r + 3) would prove the same rule, but the expansion is not the efficient test-day method.
**common_trap:** Reporting 15 without reducing it; a remainder must be smaller than the divisor 8.
**takeaway:** For a product, multiply the remainders and reduce the result by the divisor.
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
**fastest_path:** Factor 72 = 2³ × 3². Because n² has even prime exponents, it needs at least 2⁴ × 3², so n needs 2² × 3 = 12.
**explanation:** The exponent of 2 in n² must be even and at least 3; the smallest possibility is 4. The exponent of 3 must be even and at least 2; the smallest possibility is 2. Therefore the smallest possible square is 2⁴ × 3² = 144, whose positive square root is 12. Check: 12² = 144 = 2 × 72. The correct answer is B.
**common_trap:** Taking √72 directly and forgetting that n must be an integer whose square contains enough copies of every required prime.
**takeaway:** When a square must be divisible by a number, raise each odd required exponent to the next even exponent before taking the square root.
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
**fastest_path:** Apply the divisibility-by-11 test to 2431: (2 + 3) - (4 + 1) = 0. Because 0 is a multiple of 11, 2431 is divisible by 11.
**explanation:** For a four-digit number abcd, compare a + c with b + d. Their difference must be a multiple of 11. For 2431, the alternating groups both sum to 5, so the difference is 0 and the number is divisible by 11. The correct answer is A.
**common_trap:** Adding all four digits, which tests divisibility by 3 or 9 rather than by 11.
**takeaway:** Divisibility by 11 uses an alternating digit sum; a difference of 0 counts.
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
**fastest_path:** The middle of five consecutive integers equals their average: 85 ÷ 5 = 17. The largest is two more, 19.
**explanation:** Five consecutive integers are balanced around the middle one, so their average is the middle integer. The numbers are 15, 16, 17, 18, and 19. Therefore the largest is 19, choice C.
**common_trap:** Stopping at 17, which is the middle integer rather than the largest.
**takeaway:** For an odd count of consecutive integers, average = middle; then move the required number of positions from the middle.
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
**fastest_path:** Powers of 3 cycle through units digits 3, 9, 7, 1. Since 24 is divisible by the cycle length 4, use the fourth entry: 1.
**explanation:** The units-digit pattern repeats every four powers. An exponent with remainder 1, 2, 3, or 0 when divided by 4 uses the first, second, third, or fourth cycle entry respectively. Because 24 leaves remainder 0, 3²⁴ ends in 1. The correct answer is B.
**common_trap:** Treating a remainder of 0 as the first position in the cycle; it points to the final position.
**takeaway:** For a four-term units cycle, exponent mod 4 = 0 means use the fourth entry.
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
**fastest_path:** Square the given remainder: 2² = 4. Since 4 is already smaller than 5, the new remainder is 4.
**explanation:** Every legal value of n differs from 2 by a multiple of 5, so n² has the same remainder as 2². That remainder is 4, choice E.
**common_trap:** Keeping the original remainder 2 instead of applying the operation in the question.
**takeaway:** To find the remainder of a square, square the original remainder and reduce if necessary.
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
**fastest_path:** Use the largest prime power present: 18 = 2 × 3², 24 = 2³ × 3, and 30 = 2 × 3 × 5. Thus LCM = 2³ × 3² × 5 = 360.
**explanation:** The LCM must contain enough prime factors to build all three numbers. The largest required power of 2 is 2³, the largest power of 3 is 3², and a factor of 5 is also required. Their product is 8 × 9 × 5 = 360, choice C.
**common_trap:** Multiplying 18 × 24 × 30, which counts shared prime factors repeatedly.
**takeaway:** LCM takes the highest exponent of every prime that appears in any input.
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
**fastest_path:** Factor 720 = 2⁴ × 3² × 5. Add 1 to each exponent and multiply: 5 × 3 × 2 = 30 factors.
**explanation:** A factor may use 0 through 4 copies of 2 (5 choices), 0 through 2 copies of 3 (3 choices), and 0 or 1 copy of 5 (2 choices). Those choices are independent, giving 5 × 3 × 2 = 30 positive factors. The correct answer is C.
**common_trap:** Forgetting that an exponent of 1 still gives two choices: use the prime or do not use it.
**takeaway:** Prime-factorize first; the factor count is the product of (exponent + 1) for every prime.
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
**fastest_path:** Both units cycles have length 4. Exponents 50 and 30 each leave remainder 2, so 2⁵⁰ ends in 4 and 7³⁰ ends in 9; 4 + 9 = 13, so the sum ends in 3.
**explanation:** The units digits of powers of 2 cycle 2, 4, 8, 6, while powers of 7 cycle 7, 9, 3, 1. A remainder of 2 selects the second entry in each cycle. Add only those two units digits, then keep the units digit of the sum: 4 + 9 = 13. The correct answer is C.
**common_trap:** Combining the exponents or bases before finding each term's units digit separately.
**takeaway:** For a sum of powers, find each units digit independently, add them, and keep only the final units digit.
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
**fastest_path:** Choice C multiplies three consecutive integers. One must be even and one must be divisible by 3, so their product must contain 2 × 3 = 6.
**explanation:** Among n, n + 1, and n + 2, at least one number supplies a factor of 2 and exactly one supplies a factor of 3. Their product is therefore always divisible by 6. None of the other expressions guarantees both factors for every positive integer n. The correct answer is C.
**common_trap:** Testing one convenient value and assuming the pattern must continue instead of proving where the factors 2 and 3 come from.
**takeaway:** The product of three consecutive integers is always divisible by 3! = 6.
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
**fastest_path:** Statement (1) is always true because k(k + 1) is the product of consecutive integers, so it reveals nothing. Statement (2) makes 3k odd, which forces k to be odd. Answer B.
**explanation:**

- **Statement (1):** k² + k = k(k + 1). One of two consecutive integers is always even, whether k itself is odd or even. The statement cannot answer the question, so it is insufficient.
- **Statement (2):** If 3k + 1 is even, then 3k is odd. Since 3 is odd, k must also be odd. The answer is definitely yes, so this statement is sufficient.

Statement (2) alone is sufficient; the correct answer is B.
**common_trap:** Treating a statement that is true for every integer as useful information about whether k is odd.
**takeaway:** In Data Sufficiency, a universal identity provides no discrimination; test whether both odd and even values can satisfy it.
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
**fastest_path:** A negative product of three nonzero integers requires either one or three negatives. Three negatives would have a negative sum, so exactly one integer is negative.
**explanation:** Since xyz < 0, none of the integers is zero and the number of negative factors is odd. The only possibilities are one negative or three negatives. But three negative integers cannot add to a positive number, contradicting x + y + z > 0. Therefore exactly one of x, y, and z is negative. The correct answer is A.
**common_trap:** Stopping after “an odd number of negatives” and forgetting to use the positive-sum condition to eliminate three negatives.
**takeaway:** When a problem gives both a product sign and a sum sign, use the product to list sign patterns and the sum to eliminate them.
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
**fastest_path:** Neither statement fixes m alone. Together, use GCD × LCM = mn: 6 × 36 = m × 12, so m = 18. Answer C.
**explanation:**

- **Statement (1):** GCD(m, n) = 6 permits many values of m, such as 6 or 12. Insufficient.
- **Statement (2):** With n = 12 and LCM(m, 12) = 36, values including m = 9, 18, and 36 work. Insufficient.
- **Together:** GCD × LCM = product gives 6 × 36 = 12m, so m = 18. Sufficient.

The correct answer is C.
**common_trap:** Assuming an LCM condition identifies the two original integers; several pairs can share the same LCM.
**takeaway:** For two positive integers, GCD × LCM = their product; in Data Sufficiency, use counterexamples before combining statements.
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
**fastest_path:** A square factor needs even exponents. Choose from {0,2,4} for 2, {0,2,4} for 3, and {0,2} for 5: 3 × 3 × 2 = 18.
**explanation:** Every factor has the form 2^a × 3^b × 5^c within the exponent limits 0 ≤ a ≤ 5, 0 ≤ b ≤ 4, and 0 ≤ c ≤ 3. It is a perfect square only when all three exponents are even. The valid choices are therefore 3 for a, 3 for b, and 2 for c, giving 18 square factors. The correct answer is D.
**common_trap:** Forgetting that exponent 0 is even, so a square factor may omit a prime entirely.
**takeaway:** To count square factors, count the allowable even exponents for each prime, including 0, and multiply.
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
**fastest_path:** Count factors of 5. At n = 30, floor(30/5) + floor(30/25) = 6 + 1 = 7 zeros; the count stays 7 through n = 34 and rises to 8 at 35. Greatest n: 34.
**explanation:** Trailing zeros come from pairs of 2 and 5, and factorials contain more 2s than 5s, so count only the 5s. For n below 125, the count is floor(n/5) + floor(n/25). It equals 7 for every n from 30 through 34. At 35, another multiple of 5 enters the factorial and the count becomes 8. The correct answer is D.
**common_trap:** Counting only multiples of 5 and forgetting that 25 contributes a second factor of 5.
**takeaway:** Trailing zeros in n! equal floor(n/5) + floor(n/25) + floor(n/125) + …; check where that count changes.
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
**fastest_path:** List the factors of 60 in order and look for pairs two apart: (1,3), (2,4), (3,5), (4,6), and (10,12). Five starting values work.
**explanation:** The positive factors of 60 are 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, and 60. We need both n and n + 2 in that list. The qualifying values are n = 1, 2, 3, 4, and 10, giving 5 values in total. The correct answer is C.
**common_trap:** Counting each qualifying pair twice, even though the question counts only its starting value n.
**takeaway:** When two conditions require nearby factors, write the sorted factor list once and scan for the required gap.
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
**fastest_path:** Divisibility by 18 requires 2 × 3². Statement (1) supplies the factor 2 but not necessarily 3²; statement (2) forces 3² in n but supplies no 2. Together they guarantee 18. Answer C.
**explanation:**

- **Statement (1):** Divisible by 12 = 2² × 3. It may be n = 12 (not divisible by 18) or n = 36 (divisible by 18). Insufficient.
- **Statement (2):** If n² contains 3³, then n must contain at least 3² because exponents double when squared. But n could be odd, such as 9, or even, such as 18. Insufficient.
- **Together:** n contains a factor of 2 and at least 3², so n is divisible by 18. Sufficient.

The correct answer is C.
**common_trap:** Taking the square root of 27 mechanically; prime exponents must be handled as integers and double in n².
**takeaway:** Factor the target first, then ask which required prime powers each Data Sufficiency statement supplies.
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
**fastest_path:** The first qualifying multiple is 7 × 15 = 105 and the last is 7 × 42 = 294. Count indices 15 through 42: 42 - 15 + 1 = 28.
**explanation:** Every multiple in the interval has the form 7k with 15 ≤ k ≤ 42. There are 42 - 15 + 1 = 28 integer values of k, so there are 28 multiples of 7. The correct answer is C.
**common_trap:** Computing 42 - 15 = 27 and forgetting the +1 required for an inclusive count.
**takeaway:** To count multiples in an inclusive range, find the first and last multiplier indices and use last - first + 1.
**related_reading:** reading-quant-03-number-properties

---

## Q25
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders — Chinese Remainder Setup

When a positive integer n is divided by 15, the remainder is 7. When n is divided by 7, the remainder is 3. What is the smallest possible value of n?

- A) 22
- B) 37
- C) 52
- D) 67
- E) 82

**answer:** C
**fastest_path:** List numbers that leave remainder 7 after division by 15: 7, 22, 37, 52, …. The first that leaves remainder 3 after division by 7 is 52.
**explanation:** Because the question asks for the smallest value and the answer choices follow the first remainder pattern, testing the candidates is faster than setting up simultaneous equations. Check in order: 22 leaves remainder 1 when divided by 7, 37 leaves remainder 2, and 52 leaves remainder 3. Therefore the smallest value satisfying both conditions is 52, choice C.
**common_trap:** Starting with an abstract two-congruence derivation when a short ordered list or the answer choices resolves the question immediately.
**takeaway:** For the smallest number satisfying two remainder conditions, list values from the condition with the larger step and test the second condition.
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
**fastest_path:** Statement (1) gives an even k but not a factor of 3. Statement (2) says k is 2 less than a multiple of 3, so k is never divisible by 3 and therefore never divisible by 6. Answer B.
**explanation:**

- **Statement (1):** k could be 4 (not divisible by 6) or 12 (divisible by 6). Insufficient.
- **Statement (2):** If k + 2 is divisible by 3, then k leaves remainder 1 when divided by 3. It cannot be divisible by 3, so the answer to “Is k divisible by 6?” is always no. Sufficient.

Statement (2) alone is sufficient; the correct answer is B.
**common_trap:** Believing a Data Sufficiency statement is useful only when it forces a “yes”; a guaranteed “no” is equally sufficient.
**takeaway:** For a yes/no Data Sufficiency question, either consistent answer is sufficient; test whether the statement eliminates one required factor.
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
**fastest_path:** Statement (1) permits odd primes and odd composites, such as 3 and 9. Statement (2) is the definition of a prime number. Answer B.
**explanation:**

- **Statement (1):** Odd does not mean prime. Both n = 3 and n = 9 satisfy the statement but answer the question differently. Insufficient.
- **Statement (2):** An integer greater than 1 with exactly two positive divisors, 1 and itself, is prime by definition. Sufficient.

The correct answer is B.
**common_trap:** Treating “odd” as equivalent to “prime” because every prime except 2 is odd.
**takeaway:** A prime has exactly two positive divisors; oddness alone only rules out the factor 2.
**related_reading:** reading-quant-03-number-properties

---

## Q28
**difficulty:** Medium
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
**fastest_path:** Statement (1) gives the two numbers, so LCM(12,18) = 36. Statement (2) gives LCM = xy/GCD = 216/6 = 36. Each is sufficient; answer D.
**explanation:**

- **Statement (1):** 12 = 2² × 3 and 18 = 2 × 3², so the LCM uses 2² × 3² = 36. Sufficient.
- **Statement (2):** GCD × LCM = xy, so 6 × LCM = 216 and LCM = 36. Sufficient.

Each statement alone determines the requested value. The correct answer is D.
**common_trap:** Trying to determine x and y from Statement (2), even though the requested LCM follows directly from the product identity.
**takeaway:** Data Sufficiency asks whether the target is determined, not whether every underlying variable is known.
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
**fastest_path:** An even sum means same parity: both even or both odd, so the product can vary. An odd difference means opposite parity, guaranteeing one even factor and an even product. Answer B.
**explanation:**

- **Statement (1):** x and y have the same parity. If both are even, xy is even; if both are odd, xy is odd. Insufficient.
- **Statement (2):** x and y have opposite parities, so exactly one is even. Their product must be even. Sufficient.

The correct answer is B.
**common_trap:** Knowing that an even sum means “same parity” but forgetting that the shared parity could be either even or odd.
**takeaway:** Same parity makes sums and differences even; opposite parity makes them odd and guarantees an even product.
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
**fastest_path:** Test the smallest candidates in order. n = 2 gives 2, 4, 6 and fails; n = 3 gives 3, 5, 7, all prime. Answer B.
**explanation:** Because the question asks for the smallest positive integer, stop at the first value that works. The only smaller candidate, n = 2, fails because n + 2 = 4 is composite. For n = 3, the three numbers are 3, 5, and 7, all prime.

There is also a useful structural check: among n, n + 2, and n + 4, one is always divisible by 3. For all three numbers to be prime, that multiple of 3 must be 3 itself. The correct answer is B.
**common_trap:** Starting at n = 5 because it “looks prime” without checking the smaller positive candidates first.
**takeaway:** For a smallest-value question with answer choices, test candidates in ascending order and stop at the first complete success.
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
**fastest_path:** Let the smallest even integer be x. The six numbers sum to 6x + (2 + 4 + 6 + 8 + 10) = 6x + 30 = 126, so x = 16.
**explanation:** Consecutive even integers differ by 2, so the list is x, x + 2, x + 4, x + 6, x + 8, x + 10. Their fixed offsets total 30. Solving 6x + 30 = 126 gives x = 16, choice B.
**common_trap:** Treating the six integers as consecutive integers with a step of 1 instead of consecutive even integers with a step of 2.
**takeaway:** Represent an evenly spaced sequence as smallest term plus fixed offsets; combine the offsets before solving.
**related_reading:** reading-quant-03-number-properties

---

## Q32
**difficulty:** Medium
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
**fastest_path:** Let r be n's remainder from 0 to 6. Statement (1) requires 2r + 5 to leave remainder 4; testing the seven possibilities gives r = 3. Statement (2) gives r - 1 = 2 directly, so r = 3. Each is sufficient; answer D.
**explanation:**

- **Statement (1):** Reduce 2n + 5 to remainders. For r = 0 through 6, the resulting remainders are 5, 0, 2, 4, 6, 1, and 3. Only r = 3 produces the required remainder 4. Sufficient.
- **Statement (2):** If n - 1 leaves remainder 2, then n leaves remainder 3. Sufficient.

Each statement alone fixes the remainder, so the correct answer is D.
**common_trap:** Reaching for formal modular inverses when only seven possible remainders exist and a tiny test table is clearer.
**takeaway:** When the divisor is small, test the possible remainders 0 through d - 1 instead of forcing abstract algebra.
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
**fastest_path:** Let x be the smallest multiple. The four values are x, x + 5, x + 10, and x + 15, so 4x + 30 = 230 and x = 50.
**explanation:** Consecutive multiples of 5 are spaced by 5. Their fixed offsets add to 30, leaving 4x + 30 = 230. Thus 4x = 200 and x = 50. The four values 50, 55, 60, and 65 do sum to 230. The correct answer is C.
**common_trap:** Dividing 230 by 4 and treating 57.5 as one of the multiples instead of recognizing it as the average of the middle pair.
**takeaway:** For consecutive multiples, use the first term plus repeated steps of the base number.
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
**fastest_path:** Find the LCM of the ringing intervals: LCM(6,9,15) = 2 × 3² × 5 = 90 minutes. Ninety minutes after noon is 1:30 PM.
**explanation:** The bells coincide again after the smallest positive time divisible by all three intervals. Prime-factorizing gives 6 = 2 × 3, 9 = 3², and 15 = 3 × 5, so the LCM is 2 × 3² × 5 = 90. Add 1 hour 30 minutes to 12:00 noon to get 1:30 PM, choice D.
**common_trap:** Adding the three intervals or multiplying them all, instead of finding their least common multiple.
**takeaway:** Repeating events that begin together next coincide after the LCM of their periods.
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
**fastest_path:** Check only the last two digits. Among 14, 26, 18, 32, and 46, only 32 is divisible by 4, so 832 works.
**explanation:** Hundreds contribute multiples of 100, and 100 is divisible by 4, so divisibility depends only on the final two digits. Since 32 = 4 × 8, while the other endings are not multiples of 4, the correct answer is D.
**common_trap:** Testing the full three-digit numbers or using the digit-sum rule, which applies to divisibility by 3 or 9.
**takeaway:** A number is divisible by 4 exactly when its final two digits form a multiple of 4.
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
**fastest_path:** The average is 96 / 6 = 16. Six consecutive odd integers are symmetric around 16, so they are 11, 13, 15, 17, 19, and 21. The largest is 21.
**explanation:** In an evenly spaced list, the average is the midpoint. Because there are six terms, the midpoint lies between the two middle odd integers: 15 and 17. Moving outward by 2 gives 13 and 19, then 11 and 21. Their sum is 96, so the largest is 21.
**common_trap:** Treating 16 as one of the integers even though every term must be odd.
**takeaway:** For consecutive, evenly spaced integers, use the average to locate the center of the list.
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
**fastest_path:** |n - 3| <= 2 means n is at most 2 units from 3. The possible integers are 1, 2, 3, 4, and 5, so there are 5.
**explanation:** Translate the distance statement into a range: -2 <= n - 3 <= 2. Add 3 throughout to get 1 <= n <= 5. Both endpoints count because the original inequality uses <=. The inclusive count is 5 - 1 + 1 = 5.
**common_trap:** Counting only the two endpoints, or forgetting that 3 itself has distance 0 and is included.
**takeaway:** Read |x - a| <= r as “x lies within r units of a,” including both endpoints.
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
**fastest_path:** A number divisible by both 4 and 6 must be a multiple of LCM(4, 6) = 12. Since 12 x 8 = 96 and 12 x 9 = 108, exactly 8 multiples fit.
**explanation:** Divisibility by both numbers does not mean multiplying them blindly: 4 and 6 share a factor of 2, so their least common multiple is 12, not 24. The qualifying numbers are 12, 24, ..., 96. Equivalently, the count is floor(100 / 12) = 8.
**common_trap:** Using 4 x 6 = 24 instead of the least common multiple, which undercounts numbers such as 12 and 36.
**takeaway:** To count numbers divisible by both a and b, count multiples of LCM(a, b).
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
**fastest_path:** Check factor pairs of 48 near its square root: 4 x 12 sums to 16, while 6 x 8 sums to 14. The larger integer is 8.
**explanation:** Positive integers with product 48 must form a factor pair. The pairs are (1, 48), (2, 24), (3, 16), (4, 12), and (6, 8). Only 6 and 8 have the required sum of 14, so the larger integer is 8.
**common_trap:** Choosing 12 because 4 x 12 = 48 without checking the required sum.
**takeaway:** When both product and sum are given, list factor pairs and test the sum.
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
**fastest_path:** Reduce 7 modulo 4: its remainder is 3. Powers of 3 alternate remainders 3, 1, 3, 1, ... Because 100 is even, the remainder is 1.
**explanation:** The first two powers establish the cycle: 7 leaves remainder 3 when divided by 4, and 7^2 = 49 leaves remainder 1. Multiplying by another 7 returns the remainder to 3, so odd exponents give 3 and even exponents give 1. Since 100 is even, 7^100 leaves remainder 1.
**common_trap:** Trying to calculate 7^100 directly instead of finding the short remainder cycle.
**takeaway:** For large powers, reduce the base and identify the repeating remainder cycle.
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
**fastest_path:** For p^2 q^3, a factor can use p to exponent 0, 1, or 2 and q to exponent 0, 1, 2, or 3. That gives 3 x 4 = 12 factors.
**explanation:** Every positive factor has the form p^a q^b. There are 3 choices for a and 4 choices for b, and each pair of choices creates one distinct factor because p and q are distinct primes. Therefore the total is (2 + 1)(3 + 1) = 12.
**common_trap:** Adding the exponent choices, 3 + 4, instead of multiplying the independent choices.
**takeaway:** For n = p^a q^b, the positive-factor count is (a + 1)(b + 1).
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
**fastest_path:** Check the nearby squares: 14^2 = 196 and 15^2 = 225. Since 196 < 200 < 225, n = 14.
**explanation:** The inequality asks which two consecutive perfect squares surround 200. Because 14^2 = 196 is just below 200 and (14 + 1)^2 = 15^2 = 225 is above it, the required positive integer is 14.
**common_trap:** Choosing 15 because 15^2 is the first square above 200; n is the lower square's base, so n = 14.
**takeaway:** For n^2 < x < (n + 1)^2, locate x between consecutive perfect squares.
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
**fastest_path:** (1) A multiple of 6 may be 6 or 12, so it is insufficient. (2) A multiple of 8 may be 8 or 24, so it is insufficient. Together, n is a multiple of LCM(6, 8) = 24, which is always divisible by 12.
**explanation:** Statement (1) guarantees one factor of 2 and one factor of 3, but divisibility by 12 needs two factors of 2; 6 gives No and 12 gives Yes. Statement (2) guarantees enough factors of 2 but no factor of 3; 8 gives No and 24 gives Yes. Together, n must be divisible by 24, so the answer is always Yes. Both statements together, but neither alone, are sufficient.
**common_trap:** Multiplying 6 and 8 to get 48. The correct combined requirement is their least common multiple, 24.
**takeaway:** In divisibility DS, use counterexamples for each statement and the LCM when statements are combined.
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
**fastest_path:** There are 13 two-digit multiples of 7: 14 through 98. Four are also multiples of 3, namely 21, 42, 63, and 84. Thus 13 - 4 = 9.
**explanation:** A number divisible by both 7 and 3 is a multiple of 21. Count the two-digit multiples of 7 using multipliers 2 through 14: 14 - 2 + 1 = 13. Then remove the four two-digit multiples of 21. The result is 13 - 4 = 9.
**common_trap:** Counting 7 as a two-digit multiple, or subtracting all multiples of 3 instead of only those also divisible by 7.
**takeaway:** To count multiples of a but not b, subtract multiples of LCM(a, b) from the multiples of a.
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
**fastest_path:** Six factors can come from p^5 or p^2q. Their smallest forms are 2^5 = 32 and 2^2 x 3 = 12. The smaller is 12.
**explanation:** The divisor formula turns “exactly 6 factors” into exponent patterns. Since 6 = 6 or 3 x 2, the number must have form p^5 or p^2q for distinct primes. To minimize p^2q, put the larger exponent on the smaller prime: 2^2 x 3 = 12. Its factors are 1, 2, 3, 4, 6, and 12.
**common_trap:** Choosing 8 because it is smaller; 8 = 2^3 has only 3 + 1 = 4 positive factors.
**takeaway:** Translate a target divisor count into exponent patterns, then use the smallest primes.
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
**fastest_path:** Three consecutive integers always supply a factor of 3. (1) If n is even, n and n + 2 supply at least two factors of 2, so the product has 3 x 4 and is divisible by 12. (2) n = 6 gives Yes, but n = 9 gives No.
**explanation:** The product already contains a multiple of 3, so only a factor of 4 is in doubt. Under (1), n and n + 2 are both even; together they contribute at least 2 x 2, so the product is always divisible by 12. Under (2), n = 6 gives 6 x 7 x 8, divisible by 12, while n = 9 gives 9 x 10 x 11, not divisible by 12. Thus (1) alone is sufficient.
**common_trap:** Assuming every product of three consecutive integers is divisible by 12; 1 x 2 x 3 = 6 is a quick counterexample.
**takeaway:** Break divisibility by 12 into the required factors 3 and 4, then test what each statement guarantees.
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
**fastest_path:** Multiples of 3: floor(200 / 3) = 66. Multiples of 7: floor(200 / 7) = 28. Multiples of both: floor(200 / 21) = 9. Exclude the overlap from both groups: 66 + 28 - 2(9) = 76.
**explanation:** Adding 66 and 28 counts each multiple of 21 twice. The question wants numbers divisible by exactly one of 3 and 7, so those 9 overlap values must appear zero times. Subtracting 2 x 9 removes both copies, leaving 76. You can also compute (66 - 9) + (28 - 9).
**common_trap:** Using standard union counting, 66 + 28 - 9. That keeps each overlap once, but “not both” requires removing it entirely.
**takeaway:** For “A or B, but not both,” use count(A) + count(B) - 2 x count(A and B).
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
**fastest_path:** (1) A square ending in 9 can come from a number ending in 3 or 7, so it is insufficient. (2) Among units digits 0–9, only 7 has a cube ending in 3: 7^3 = 343. Thus (2) alone is sufficient.
**explanation:** Only the units digit of n affects the units digit of its powers. Under (1), both 3^2 = 9 and 7^2 = 49 end in 9, so n's units digit is not fixed. Under (2), cube endings for 0 through 9 are 0, 1, 8, 7, 4, 5, 6, 3, 2, 9; only 7 maps to 3. Therefore statement (2) determines the units digit.
**common_trap:** Combining the statements after noticing that statement (1) leaves two options, without first testing whether statement (2) works alone.
**takeaway:** In units-digit DS, test each possible final digit and stop once one statement produces a unique match.
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
**fastest_path:** Sum the allowed powers of each prime, then multiply: (1 + 2 + 4 + 8 + 16)(1 + 3 + 9) = 31 x 13 = 403.
**explanation:** Every factor of 2^4 x 3^2 uses one power of 2 from 2^0 through 2^4 and one power of 3 from 3^0 through 3^2. Multiplying the two sums generates every possible factor exactly once, so their product is the sum of all positive factors: 403.
**common_trap:** Using (4 + 1)(2 + 1) = 15, which counts the factors but does not add their values.
**takeaway:** To sum divisors, multiply each prime-power series: (1 + p + ... + p^a).
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
**fastest_path:** Factor: p^2 - p - 6 = (p - 3)(p + 2) = 0. The roots are 3 and -2; only 3 is prime. Therefore p^2 = 9.
**explanation:** The quadratic gives two algebraic possibilities, p = 3 or p = -2. The condition that p is prime eliminates -2 because prime numbers are positive integers greater than 1. Thus p = 3 and p^2 = 9.
**common_trap:** Stopping at both roots and overlooking the prime-number constraint.
**takeaway:** After solving an equation, apply every restriction in the question before choosing the answer.
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
**fastest_path:** Only perfect squares have an odd number of positive divisors. From 1^2 through 10^2, there are 10 perfect squares between 1 and 100.
**explanation:** Divisors usually come in pairs: for example, 2 and n / 2. A divisor is unpaired only when it equals its partner, which means d = n / d and therefore n = d^2. So exactly the perfect squares have an odd divisor count. The squares 1^2, 2^2, ..., 10^2 all lie in the range, giving 10 integers.
**common_trap:** Excluding 1 or 100; both endpoints are included, and 1 has exactly one positive divisor.
**takeaway:** An integer has an odd number of positive divisors if and only if it is a perfect square.
**related_reading:** reading-quant-03-number-properties


---

## Q52
**difficulty:** Easy
**type:** Problem Solving
**topic:** Even/Odd Properties

If a is an odd integer and b is an even integer, which of the following must be an even integer?

- A) a + b
- B) 3a^2 + 2b - 5
- C) ab + a
- D) 2a - b + 7
- E) a^2 - b - 2

**answer:** B
**explanation:** We evaluate the parity of each expression using a is odd and b is even. Since a is odd, a^2 is odd, so 3a^2 is odd. Since b is even, 2b is even, and 5 is odd; thus 3a^2 + 2b - 5 = (odd) + (even) - (odd) = even. A numerical check with a = 3 and b = 4 gives 27 + 8 - 5 = 30, which is even. Checking the others: a + b = odd + even = odd; ab + a = a(b + 1) = odd times odd = odd; 2a - b + 7 = even - even + odd = odd; a^2 - b - 2 = odd - even - even = odd. Only 3a^2 + 2b - 5 is guaranteed even. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q53
**difficulty:** Easy
**type:** Problem Solving
**topic:** Parity of a Product

If x and y are integers such that x + y is odd, which of the following must be even?

- A) x + 2y
- B) x^2 + y^2
- C) xy
- D) xy + x + y
- E) x - y

**answer:** C
**explanation:** Since x + y is odd, exactly one of x and y is even and the other is odd. The product of an even integer and any integer is even, so xy is even. Checking the others: x^2 + y^2 = (odd) + (even) = odd; x + 2y has the same parity as x, which is not fixed; xy + x + y = even + odd = odd; x - y has the same parity as x + y, which is odd. Only xy must be even. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q54
**difficulty:** Medium
**type:** Problem Solving
**topic:** Perfect Squares

What is the smallest positive integer n such that 252n is a perfect square?

- A) 28
- B) 14
- C) 21
- D) 7
- E) 63

**answer:** D
**explanation:** We factor 252 = 2^2 · 3^2 · 7. A perfect square requires every prime to appear to an even power. The factors 2 and 3 already have even exponents, but 7 appears to the first power. Multiplying by 7 makes the exponent of 7 even: 252 · 7 = 2^2 · 3^2 · 7^2 = (2 · 3 · 7)^2 = 42^2, a perfect square by its very structure. No smaller positive integer accomplishes this, since the deficiency lies entirely in the single factor of 7. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q55
**difficulty:** Medium
**type:** Problem Solving
**topic:** Integer Properties

How many even integers are there from 17 to 83, inclusive?

- A) 35
- B) 32
- C) 34
- D) 31
- E) 33

**answer:** E
**explanation:** The even integers in this range run from 18 to 82. We count them with the formula (last - first)/(common difference) + 1 = (82 - 18)/2 + 1 = 64/2 + 1 = 32 + 1 = 33. The distractor 32 results from omitting the +1 (the off-by-one error), and 34 from incorrectly including an extra endpoint. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q56
**difficulty:** Medium
**type:** Problem Solving
**topic:** Even/Odd Properties

If a, b, and c are three consecutive integers with a the smallest, for which values of a is a^2 + b^2 + c^2 odd?

- A) When a is even
- B) When a is odd
- C) For all integers a
- D) For no integer a
- E) Only when a is a multiple of 3

**answer:** A
**explanation:** With consecutive integers a, b = a+1, c = a+2, the parities of a and c match each other while b has the opposite parity. If a is even, then a^2 and c^2 are even while b^2 is odd, so the sum is even + odd + even = odd. If a is odd, then a^2 and c^2 are odd while b^2 is even, giving odd + even + odd = even. Thus a^2 + b^2 + c^2 is odd precisely when a is even. A numerical check confirms this: for a = 2 the sum is 4 + 9 + 16 = 29 (odd), and for a = 3 the sum is 9 + 16 + 25 = 50 (even). The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q57
**difficulty:** Medium
**type:** Problem Solving
**topic:** Parity of a Product

The product of three consecutive even integers is always divisible by each value in some set. What is the greatest of the following values that always divides such a product?

- A) 32
- B) 48
- C) 24
- D) 16
- E) 96

**answer:** B
**explanation:** Three consecutive even integers can be written 2k, 2k + 2, 2k + 4 = 2k · 2(k+1) · 2(k+2) = 8 · k(k+1)(k+2). The product k(k+1)(k+2) is a product of three consecutive integers, which is always divisible by 3! = 6. Therefore the full product is always divisible by 8 · 6 = 48. The values 24 and 16 also always divide the product, but 48 is larger, so among guaranteed divisors 48 is the greatest. The value 96 is not guaranteed (for example, 2 · 4 · 6 = 48, which is not divisible by 96), and 32 is not guaranteed either. Hence the greatest listed value that always divides the product is 48. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q58
**difficulty:** Hard
**type:** Problem Solving
**topic:** Perfect Squares

Let K = 2^4 · 3^2 · 5^3 · 7. What is the smallest positive integer m such that Km is a perfect square?

- A) 7
- B) 5
- C) 35
- D) 105
- E) 175

**answer:** C
**explanation:** For Km to be a perfect square, every prime in its factorization must occur to an even power. In K, the exponents of 2 (which is 4) and 3 (which is 2) are already even. The exponent of 5 is 3, which is odd, so we need one more factor of 5; the exponent of 7 is 1, which is odd, so we need one more factor of 7. The minimal m is therefore 5 · 7 = 35, giving Km = 2^4 · 3^2 · 5^4 · 7^2 = (2^2 · 3 · 5^2 · 7)^2. Choosing only 5 or only 7 leaves the other prime at an odd power, so neither alone suffices. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q59
**difficulty:** Hard
**type:** Problem Solving
**topic:** Integer Properties

How many perfect squares lie between 50 and 500, inclusive?

- A) 13
- B) 14
- C) 16
- D) 15
- E) 17

**answer:** D
**explanation:** A perfect square n^2 lies in the interval when 50 ≤ n^2 ≤ 500. We bracket each end with known squares. At the low end, 7^2 = 49 falls short of 50 while 8^2 = 64 qualifies, so the smallest value is n = 8. At the high end, 22^2 = 484 fits within 500 while 23^2 = 529 overshoots, so the largest value is n = 22. The integer values are therefore n = 8 through n = 22, and the count is 22 - 8 + 1 = 15. The distractor 14 arises from dropping one endpoint of the n-range. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q60
**difficulty:** Hard
**type:** Problem Solving
**topic:** Integer Properties

What is the greatest power of 2 that divides the product 2 · 4 · 6 · 8 · 10?

- A) 2^9
- B) 2^5
- C) 2^7
- D) 2^6
- E) 2^8

**answer:** E
**explanation:** We factor out a 2 from each of the five even factors: 2 · 4 · 6 · 8 · 10 = 2^5 · (1 · 2 · 3 · 4 · 5) = 2^5 · 120. Now 120 = 2^3 · 15, contributing three more factors of 2. The total power of 2 is therefore 2^(5+3) = 2^8, since 15 is odd and contributes no additional factor of 2. The distractor 2^5 comes from counting only the explicit factor from each even number while forgetting the extra factors of 2 hidden inside 4, 8, and 10. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q61
**difficulty:** Easy
**type:** Problem Solving
**topic:** Remainder

What is the units digit of 7⁴⁵ + 4²²?

- A) 1
- B) 2
- C) 3
- D) 7
- E) 9

**answer:** C
**explanation:** The units digit of a power depends only on the units digit of its base, and the units digits of successive powers repeat in a fixed cycle. To find the units digit of a sum, we find the units digit of each term and then add those, keeping only the units digit of the total. The units digits of successive powers of 7 form the repeating cycle 7, 9, 3, 1, which has length 4; the position of an exponent within this cycle is the remainder when the exponent is divided by 4, with a remainder of 0 corresponding to the fourth entry. Since 45 = 4 × 11 + 1, the remainder is 1, so 7⁴⁵ has the same units digit as the first cycle entry, which is 7. The units digits of successive powers of 4 form the shorter cycle 4, 6 of length 2: odd exponents give 4 and even exponents give 6, so because 22 is even, 4²² has units digit 6. Adding the two units digits gives 7 + 6 = 13, whose units digit is 3, so the units digit of the entire sum is 3. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q62
**difficulty:** Easy
**type:** Problem Solving
**topic:** Primes

How many prime numbers are there between 50 and 70?

- A) 4
- B) 3
- C) 5
- D) 6
- E) 7

**answer:** A
**explanation:** A prime number is an integer greater than 1 whose only positive divisors are 1 and itself, so to count the primes strictly between 50 and 70 we test each candidate integer against this definition. Every even integer greater than 2 is divisible by 2 and is therefore not prime, so we need only consider the odd integers 51, 53, 55, 57, 59, 61, 63, 65, 67, and 69. We eliminate the composites: 51 = 3 × 17, 55 = 5 × 11, 57 = 3 × 19, 63 = 3 × 21, 65 = 5 × 13, and 69 = 3 × 23. The remaining odd integers are 53, 59, 61, and 67, and each is divisible by none of 2, 3, 5, or 7; since any composite number below 71 must have a prime factor of at most 7 (a factor exceeding 7 would force a cofactor of at least 9, giving a product of at least 81), each of these four integers is prime. Thus the primes between 50 and 70 are 53, 59, 61, and 67, for a total of 4. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q63
**difficulty:** Medium
**type:** Problem Solving
**topic:** Factors

How many positive even factors does 96 have?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 10

**answer:** E
**explanation:** A factor of an integer is even precisely when it contains at least one factor of 2, so the cleanest count comes from the prime factorization. We have 96 = 2⁵ × 3, so any positive factor of 96 can be written as 2ᵃ × 3ᵇ, where the exponent a ranges over 0 through 5 and the exponent b ranges over 0 through 1. A factor is even exactly when a is at least 1, so the admissible values of a are 1, 2, 3, 4, and 5, giving 5 choices, while b may be 0 or 1, giving 2 choices. Because the two exponents are chosen independently, the number of even factors is the product 5 × 2 = 10. As a check, the total number of factors is (5 + 1)(1 + 1) = 12, and exactly two of them are odd (namely 1 and 3, where a = 0), so the even factors number 12 − 2 = 10, confirming the result. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q64
**difficulty:** Easy
**type:** Problem Solving
**topic:** Remainder

When the positive integer n is divided by 6, the remainder is 4. What is the remainder when 5n + 3 is divided by 6?

- A) 1
- B) 2
- C) 3
- D) 5
- E) 0

**answer:** D
**explanation:** Any integer that leaves a fixed remainder upon division by a divisor can be written as (divisor times an integer) plus that remainder, and remainders are preserved under the arithmetic performed on such expressions. Since dividing n by 6 leaves a remainder of 4, we may write n = 6k + 4 for some non-negative integer k. Substituting into the target expression gives 5n + 3 = 5(6k + 4) + 3 = 30k + 20 + 3 = 30k + 23. The term 30k is a multiple of 6, so we separate the largest multiple of 6 not exceeding 23, writing 23 = 18 + 5, which gives 30k + 23 = 6(5k + 3) + 5. Since 6(5k + 3) is a multiple of 6 and 0 ≤ 5 < 6, the remainder when 5n + 3 is divided by 6 is 5. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q65
**difficulty:** Easy
**type:** Problem Solving
**topic:** Perfect Square

Which of the following is a perfect square?

- A) 196
- B) 150
- C) 200
- D) 250
- E) 120

**answer:** A
**explanation:** A perfect square is an integer equal to the square of an integer, so we test each option by checking whether it is the square of a whole number. We have 14² = 196, so 196 is a perfect square. The remaining values are not: 150 lies strictly between 12² = 144 and 13² = 169, so it is not a square; 200 lies between 14² = 196 and 15² = 225, so it is not a square; 250 lies between 15² = 225 and 16² = 256, so it is not a square; and 120 lies between 10² = 100 and 11² = 121, so it is not a square. Only 196 is the square of an integer. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q66
**difficulty:** Medium
**type:** Problem Solving
**topic:** Perfect Square

What is the smallest positive integer m such that 540m is a perfect square?

- A) 5
- B) 15
- C) 30
- D) 45
- E) 60

**answer:** B
**explanation:** An integer is a perfect square if and only if every prime in its factorization appears to an even power, so to make 540m a perfect square we must supply exactly the prime factors needed to raise every odd exponent up to the next even number. First we factor the given number: 540 = 2² × 3³ × 5¹. The exponent of 2 is 2, which is already even and needs no adjustment. The exponent of 3 is 3, which is odd, so we need one more factor of 3 to make it 3⁴. The exponent of 5 is 1, which is odd, so we need one more factor of 5 to make it 5². Therefore the smallest multiplier is m = 3 × 5 = 15, and no smaller positive integer can correct both odd exponents. As a check, 540 × 15 = 8100 = 90², confirming that the product is a perfect square. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q67
**difficulty:** Medium
**type:** Problem Solving
**topic:** Factors

What is the greatest common factor of 144 and 360?

- A) 12
- B) 24
- C) 36
- D) 48
- E) 72

**answer:** E
**explanation:** The greatest common factor of two integers is found by writing each as a product of primes, then taking each shared prime raised to the smaller of its two exponents and multiplying these together. We have 144 = 2⁴ × 3², since 144 = 16 × 9, and 360 = 2³ × 3² × 5, since 360 = 8 × 45 = 8 × 9 × 5. The primes common to both factorizations are 2 and 3. For the prime 2, the smaller exponent is 3 (it appears as 2⁴ in 144 and 2³ in 360), so we take 2³. For the prime 3, the exponent is 2 in both, so we take 3². The prime 5 appears only in 360, so it is excluded. The greatest common factor is therefore 2³ × 3² = 8 × 9 = 72. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q68
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility

Is the positive integer x divisible by 12?

(1) x is divisible by 6.
(2) x is divisible by 4.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Because 12 = 2² × 3, a positive integer is divisible by 12 if and only if it contains at least two factors of 2 and at least one factor of 3, and in a yes/no data sufficiency question a statement is sufficient only when it forces a single, consistent answer. Consider statement (1): x is divisible by 6 = 2 × 3, which guarantees one factor of 2 and one factor of 3 but not the second factor of 2. Testing values, x = 6 is divisible by 6 yet not by 12 (answer no), while x = 12 is divisible by 6 and by 12 (answer yes), so statement (1) alone is not sufficient. Consider statement (2): x is divisible by 4 = 2², which guarantees two factors of 2 but says nothing about a factor of 3; here x = 4 is divisible by 4 yet not by 12 (answer no), while x = 12 is divisible by 4 and by 12 (answer yes), so statement (2) alone is not sufficient. Taking the statements together, x carries the factor of 3 from statement (1) and the factor 2² from statement (2), so x is divisible by 2² × 3 = 12, which gives a definite yes; the two statements together are sufficient while neither alone is. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q69
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multiples

What is the sum of the first 10 positive multiples of 4?

- A) 200
- B) 220
- C) 240
- D) 180
- E) 260

**answer:** B
**explanation:** The first 10 positive multiples of 4 are 4, 8, 12, and so on up to 40, and each can be written as 4 times one of the integers from 1 to 10. Factoring the common 4 out of the sum gives 4 × (1 + 2 + 3 + ... + 10). The sum of the first 10 positive integers is found from the formula for the sum of consecutive integers, n(n + 1)/2, which gives 10 × 11 / 2 = 55. Therefore the total is 4 × 55 = 220. As a check, the multiples form an arithmetic sequence with 10 terms whose average is the mean of the first and last terms, (4 + 40)/2 = 22, so the sum equals 10 × 22 = 220, confirming the result. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q70
**difficulty:** Hard
**type:** Problem Solving
**topic:** Factors

If n = 2⁴ × 3² × 7, how many positive factors of n are odd?

- A) 6
- B) 5
- C) 8
- D) 10
- E) 12

**answer:** A
**explanation:** A factor of n is odd precisely when it contains no factor of 2, so the odd factors of n are exactly the factors built from the odd prime parts of n while the power of 2 is fixed at 2⁰. Writing any factor as 2ᵃ × 3ᵇ × 7ᶜ with 0 ≤ a ≤ 4, 0 ≤ b ≤ 2, and 0 ≤ c ≤ 1, oddness forces a = 0, leaving the exponents b and c free. The exponent b may be 0, 1, or 2, giving 3 choices, and the exponent c may be 0 or 1, giving 2 choices. Since the two exponents are chosen independently, the number of odd factors is 3 × 2 = 6. Equivalently, the odd part of n is 3² × 7, whose factor count is (2 + 1)(1 + 1) = 6, which matches. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q71
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Even Odd Parity

If n is a positive integer, is n even?

(1) n² is even.
(2) 3n is even.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** The governing parity rules are that a product of integers is odd only when every factor is odd, and consequently a product is even exactly when at least one factor is even; in particular, the square of an odd integer is odd and the square of an even integer is even. Consider statement (1): n² is even. If n were odd, then n² = n × n would be a product of two odd integers and would be odd, contradicting the statement, so n must be even. This forces a definite yes, so statement (1) alone is sufficient. Consider statement (2): 3n is even. Since 3 is odd, the product 3n is even only when n is even, because if n were odd the product of two odd integers would be odd. This also forces a definite yes, so statement (2) alone is sufficient. Because each statement independently determines that n is even, each statement alone is sufficient. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q72
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Remainder

If n is an integer with 10 < n < 30, what is the value of n?

(1) When n is divided by 4, the remainder is 1.
(2) When n is divided by 7, the remainder is 6.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Each division condition restricts n to a list of values inside the range 10 < n < 30, and a statement is sufficient only when it narrows that list to a single value. Statement (1) says n leaves a remainder of 1 when divided by 4, so n is of the form 4k + 1; within the range these values are 13, 17, 21, 25, and 29, which is more than one possibility, so statement (1) alone is not sufficient. Statement (2) says n leaves a remainder of 6 when divided by 7, so n is of the form 7m + 6; within the range these values are 13, 20, and 27, again more than one possibility, so statement (2) alone is not sufficient. Taking the statements together, n must appear in both lists, and the only value common to {13, 17, 21, 25, 29} and {13, 20, 27} is 13. The two statements together pin down n = 13 uniquely, so they are sufficient while neither alone is. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q73
**difficulty:** Easy
**type:** Problem Solving
**topic:** Primes

What is the sum of the two smallest prime numbers that are greater than 30?

- A) 64
- B) 66
- C) 68
- D) 70
- E) 72

**answer:** C
**explanation:** A prime number is an integer greater than 1 whose only positive divisors are 1 and itself, so we identify the two smallest primes that exceed 30 by testing the integers above 30 in increasing order. The integer 31 is not divisible by any of 2, 3, or 5, and since any composite number less than 49 must have a prime factor of at most 5 (a factor of at least 7 would require a cofactor of at least 7, giving a product of at least 49), 31 is prime. The next integer, 32, is even and therefore composite; 33 = 3 times 11 is composite; 34 and 36 are even; 35 = 5 times 7 is composite; but 37 is divisible by none of 2, 3, or 5, so 37 is prime. Thus the two smallest primes greater than 30 are 31 and 37, and their sum is 31 + 37 = 68. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q74
**difficulty:** Easy
**type:** Problem Solving
**topic:** Multiples

What is the smallest positive integer that is a multiple of both 8 and 10?

- A) 18
- B) 40
- C) 80
- D) 20
- E) 16

**answer:** B
**explanation:** The smallest positive integer that is a multiple of two given numbers is their least common multiple, which is found by writing each number as a product of primes and then taking the highest power of each prime that appears in either factorization. We have 8 = 2 cubed and 10 = 2 times 5, so the distinct primes are 2 and 5. The highest power of 2 appearing is 2 cubed (from 8), and the highest power of 5 appearing is 5 to the first power (from 10), so the least common multiple is 2 cubed times 5 = 8 times 5 = 40. The distractor 80 is a common multiple of 8 and 10 but not the smallest, while 20 is a multiple of 10 yet not of 8. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q75
**difficulty:** Easy
**type:** Problem Solving
**topic:** Even Odd Parity

If p is an odd integer and q is an even integer, which of the following must be even?

- A) 2p + q + 1
- B) pq + 1
- C) p + q
- D) 3p + q
- E) p² + q − 1

**answer:** E
**explanation:** The parity of each expression is determined by the rules that the square of an odd integer is odd, the product of any integer with an even integer is even, and a sum or difference is even only when it combines an even number of odd terms. Since p is odd, p² is odd; since q is even, q is even; and subtracting the odd integer 1 from the sum p² + q gives odd + even − odd = even, so option E is always even. Each of the others is always odd: in A, 2p and q are even while +1 is odd, giving odd; in B, pq is even so pq + 1 is odd; in C, odd + even is odd; and in D, 3p is odd and q is even, giving odd. A check with p = 3 and q = 4 confirms E: 9 + 4 − 1 = 12, which is even. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q76
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factors

How many positive factors does the number 50 have?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 8

**answer:** D
**explanation:** The number of positive factors of an integer is found from its prime factorization: if the integer is written as a product of prime powers, the total number of positive factors equals the product of one more than each exponent. We factor 50 = 2 times 25 = 2 times 5², so the prime factorization is 2¹ times 5², with exponents 1 and 2. Applying the counting principle gives (1 + 1)(2 + 1) = 2 times 3 = 6. This is confirmed by listing every factor of 50: 1, 2, 5, 10, 25, and 50, which is exactly 6 factors. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q77
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainder

When the positive integer n is divided by 9, the remainder is 5. What is the remainder when 4n + 7 is divided by 9?

- A) 0
- B) 2
- C) 4
- D) 6
- E) 7

**answer:** A
**explanation:** Any integer that leaves a fixed remainder upon division by a divisor can be written as (divisor times an integer) plus that remainder, and remainders are preserved through the arithmetic performed on such an expression. Since dividing n by 9 leaves a remainder of 5, we may write n = 9k + 5 for some non-negative integer k. Substituting into the target expression gives 4n + 7 = 4(9k + 5) + 7 = 36k + 20 + 7 = 36k + 27. Both 36k and 27 are multiples of 9, since 36k = 9(4k) and 27 = 9 times 3, so we can write 4n + 7 = 9(4k + 3), which is exactly divisible by 9. Therefore the remainder when 4n + 7 is divided by 9 is 0. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q78
**difficulty:** Medium
**type:** Problem Solving
**topic:** Perfect Square

What is the smallest positive integer n such that 75n is a perfect square?

- A) 15
- B) 2
- C) 5
- D) 3
- E) 6

**answer:** D
**explanation:** An integer is a perfect square if and only if every prime in its factorization appears to an even power, so to turn 75n into a perfect square we must supply exactly the prime factors needed to raise each odd exponent to the next even value. We first factor the given number: 75 = 3 times 25 = 3¹ times 5². The exponent of 5 is 2, which is already even and needs no adjustment, but the exponent of 3 is 1, which is odd, so we need one additional factor of 3 to make it 3². The smallest such multiplier is therefore n = 3, giving 75 times 3 = 225 = 3² times 5² = 15², a perfect square. No smaller positive integer corrects the odd exponent of 3, so 3 is minimal. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q79
**difficulty:** Medium
**type:** Problem Solving
**topic:** Divisibility

The three-digit number 5A4, where A represents a single digit, is divisible by 6. How many values of A are possible?

- A) 2
- B) 3
- C) 4
- D) 5
- E) 6

**answer:** C
**explanation:** A positive integer is divisible by 6 exactly when it is divisible by both 2 and 3, since 6 = 2 times 3 and 2 and 3 share no common factor. The number 5A4 ends in the digit 4, which is even, so the number is divisible by 2 for every choice of A; the requirement therefore reduces to divisibility by 3. An integer is divisible by 3 if and only if the sum of its digits is divisible by 3, and the digit sum here is 5 + A + 4 = 9 + A. Because 9 is already a multiple of 3, the quantity 9 + A is a multiple of 3 precisely when A itself is a multiple of 3, and the single digits satisfying this are A = 0, 3, 6, and 9. That gives 4 possible values of A. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q80
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Even Odd Parity

If n is an integer, is n even?

(1) n + 5 is odd.
(2) n² + n is divisible by 4.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** The question asks for a definite yes-or-no answer to whether the integer n is even, so a statement is sufficient only when it forces a single parity for n. Consider statement (1): n + 5 is odd. Since 5 is odd, and a sum is odd only when it combines one even and one odd term, n + 5 can be odd only if n is even; if n were odd, then n + 5 would be the sum of two odd integers and hence even. Thus statement (1) forces n to be even, giving a definite yes, and statement (1) alone is sufficient. Consider statement (2): n² + n = n(n + 1) is divisible by 4. The product of two consecutive integers is always even, but its divisibility by 4 does not fix the parity of n: for n = 4 the product is 4 times 5 = 20, which is divisible by 4 and n is even, whereas for n = 3 the product is 3 times 4 = 12, which is also divisible by 4 yet n is odd. Because statement (2) permits both an even and an odd value of n, it does not determine the answer and is not sufficient. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q81
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multiples

How many multiples of 6 are there from 50 to 200, inclusive?

- A) 24
- B) 23
- C) 26
- D) 27
- E) 25

**answer:** E
**explanation:** To count the multiples of a fixed integer within a range, we identify the smallest and largest multiples that fall inside the range and then count how many multiples lie between them inclusive; because the multiples are evenly spaced, this count equals the difference of their position indices plus one. The smallest multiple of 6 that is at least 50 is found by noting that 6 times 8 = 48 falls short while 6 times 9 = 54 qualifies, so the first multiple corresponds to the index 9. The largest multiple of 6 that is at most 200 is found by noting that 6 times 33 = 198 qualifies while 6 times 34 = 204 exceeds 200, so the last multiple corresponds to the index 33. The number of integer indices from 9 to 33 inclusive is 33 − 9 + 1 = 25, so there are 25 multiples of 6 in the range. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q82
**difficulty:** Hard
**type:** Problem Solving
**topic:** Factors

How many positive factors of 1,800 are perfect squares?

- A) 6
- B) 8
- C) 4
- D) 9
- E) 12

**answer:** B
**explanation:** A positive integer is a perfect square if and only if every prime in its factorization appears to an even power, and since every factor of 1,800 is built only from the primes that appear in 1,800, we may count the perfect-square factors prime by prime. First we factor the number: 1,800 = 8 times 225 = 2³ times 3² times 5². Any factor has the form 2^a times 3^b times 5^c, where 0 ≤ a ≤ 3, 0 ≤ b ≤ 2, and 0 ≤ c ≤ 2, and the factor is a perfect square exactly when a, b, and c are all even. The even values of a within 0 to 3 are 0 and 2, giving 2 choices; the even values of b within 0 to 2 are 0 and 2, giving 2 choices; and the even values of c within 0 to 2 are 0 and 2, giving 2 choices. Because the exponents are chosen independently, the number of perfect-square factors is 2 times 2 times 2 = 8. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q83
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Divisibility

Is the positive integer n divisible by 15?

(1) n is divisible by 10.
(2) n² is divisible by 225.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** Because 15 = 3 times 5, a positive integer is divisible by 15 if and only if it contains at least one factor of 3 and at least one factor of 5; the question is therefore whether each statement forces both of these factors to be present. A key fact for the second statement is that the exponent of any prime in n² is exactly twice its exponent in n, so that exponent is always even. Consider statement (1): n is divisible by 10 = 2 times 5. This guarantees a factor of 5 but says nothing about a factor of 3, so the answer can vary; for instance n = 10 is not divisible by 15 (answer no), while n = 30 is divisible by 15 (answer yes). Statement (1) alone is therefore not sufficient. Consider statement (2): n² is divisible by 225 = 3² times 5². Thus the exponent of 3 in n² is at least 2, which forces the exponent of 3 in n to be at least 1, and likewise the exponent of 5 in n² is at least 2, which forces the exponent of 5 in n to be at least 1. Hence n contains both a factor of 3 and a factor of 5, so n is divisible by 15, giving a definite yes. Statement (2) alone is sufficient. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q84
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Remainder

When the positive integer n is divided by 12, what is the remainder?

(1) When n is divided by 6, the remainder is 5.
(2) When n is divided by 4, the remainder is 3.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Each division condition restricts the remainder of n upon division by 12 to a short list of possibilities, and a statement is sufficient only when it narrows that list to a single value; this works because 12 is a common multiple of both 6 and 4, so a remainder modulo 12 is consistent with at most one or two remainders modulo each smaller divisor. Consider statement (1): n leaves remainder 5 when divided by 6, so n has the form 6k + 5; reducing such values modulo 12 yields 5 when k is even and 11 when k is odd, so n modulo 12 is either 5 or 11, which is not unique, and statement (1) alone is not sufficient. Consider statement (2): n leaves remainder 3 when divided by 4, so n has the form 4m + 3; reducing modulo 12 yields the three values 3, 7, and 11, which is not unique, and statement (2) alone is not sufficient. Taking the statements together, the remainder modulo 12 must lie in both lists, and the only value common to {5, 11} and {3, 7, 11} is 11. The two statements together fix the remainder at 11, so they are sufficient while neither alone is. A check confirms this: 11 leaves remainder 5 when divided by 6 and remainder 3 when divided by 4. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q85
**difficulty:** Medium
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 7¹²³ × 4⁵⁷?

- A) 2
- B) 4
- C) 6
- D) 8
- E) 9

**answer:** A
**explanation:** The units digit of a product depends only on the units digits of its factors, and the units digits of successive powers of a fixed base repeat in a cycle, so we find the units digit of each power separately and then multiply, keeping only the units digit of the result. The units digits of the powers of 7 form the repeating cycle 7, 9, 3, 1, which has length 4; the position within this cycle for exponent n is given by the remainder when n is divided by 4, with a remainder of 0 corresponding to the fourth position. Since 123 = 4 times 30 plus 3, the remainder is 3, and the third entry of the cycle 7, 9, 3, 1 is 3, so 7¹²³ ends in 3. The units digits of the powers of 4 form the shorter repeating cycle 4, 6, which has length 2: odd exponents give 4 and even exponents give 6. Since 57 is odd, 4⁵⁷ ends in 4. Multiplying the two units digits gives 3 times 4 = 12, whose units digit is 2, so the units digit of the entire product is 2. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q86
**difficulty:** Medium
**type:** Problem Solving
**topic:** GCD and LCM

Two positive integers have a greatest common factor of 14 and a least common multiple of 420. If one of the integers is 70, what is the sum of the two integers?

- A) 84
- B) 98
- C) 140
- D) 154
- E) 168

**answer:** D
**explanation:** The governing principle is the identity that, for any two positive integers, the product of their greatest common factor and their least common multiple equals the product of the integers themselves. Let the two integers be a and b. The identity states that GCF(a, b) times LCM(a, b) equals a times b, so substituting the given values yields 14 times 420 = a times b, that is, a times b = 5,880. We are told that one of the integers is 70, so we set a = 70 and solve for the other integer: b = 5,880 ÷ 70 = 84. Before summing, we verify that the pair 70 and 84 actually has the stated greatest common factor and least common multiple. Factoring gives 70 = 2 times 5 times 7 and 84 = 2² times 3 times 7; the greatest common factor takes the smaller power of each shared prime, namely 2 times 7 = 14, and the least common multiple takes the greater power of each prime, namely 2² times 3 times 5 times 7 = 420. Both conditions hold, so the second integer is indeed 84, and the sum of the two integers is 70 + 84 = 154. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q87
**difficulty:** Hard
**type:** Problem Solving
**topic:** Primes and Remainders

If p is a prime number greater than 3, what is the remainder when p² is divided by 12?

- A) 0
- B) 1
- C) 3
- D) 5
- E) 7

**answer:** B
**explanation:** The governing idea is that any prime greater than 3 avoids the factors 2 and 3, which sharply constrains its residue modulo small numbers and lets us reason about p² modulo 12 in general rather than testing values blindly. Because p is prime and greater than 3, p is divisible by neither 2 nor 3, so p is odd and is not a multiple of 3. An odd integer can be written as p = 2k + 1, and its square is p² = 4k² + 4k + 1 = 4k(k + 1) + 1. Since k and k + 1 are consecutive integers, one of them is even, so the product k(k + 1) is even, which makes 4k(k + 1) a multiple of 8; in particular it is a multiple of 4. Thus p² leaves a remainder of 1 upon division by 4. Considering divisibility by 3, because p is not a multiple of 3 it is congruent to 1 or 2 modulo 3, and in either case p² is congruent to 1 modulo 3, since 1² = 1 and 2² = 4 leaves remainder 1. Therefore p² leaves remainder 1 upon division by both 4 and 3; since 4 and 3 are coprime and their product is 12, p² leaves remainder 1 upon division by 12. A check confirms this: for p = 5, p² = 25 = 12 times 2 + 1; for p = 7, p² = 49 = 12 times 4 + 1; and for p = 11, p² = 121 = 12 times 10 + 1. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q88
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders

When a positive integer n is divided by 6, the remainder is 4, and when n is divided by 10, the remainder is 8. What is the smallest possible value of n?

- A) 22
- B) 28
- C) 34
- D) 52
- E) 58

**answer:** B
**explanation:** This problem describes an integer through two division conditions, each expressible as a quotient-plus-remainder equation; the efficient method is to encode one condition algebraically and substitute it into the other rather than testing values blindly. Let n be the positive integer. The condition that n leaves a remainder of 4 when divided by 6 means n = 6a + 4 for some non-negative integer a. We impose the second condition by reducing n = 6a + 4 modulo 10 and requiring the result to be 8. We need 6a + 4 to leave a remainder of 8 upon division by 10, which means 6a must leave a remainder of 4 upon division by 10. Testing successive values of a, we find that a = 0 gives 0, a = 1 gives 6, a = 2 gives 12 (remainder 2), a = 3 gives 18 (remainder 8), and a = 4 gives 24 (remainder 4); thus the smallest qualifying value is a = 4. Substituting a = 4 into n = 6a + 4 gives n = 24 + 4 = 28. We verify both original conditions: dividing 28 by 6 gives quotient 4 and remainder 4, since 28 = 6 times 4 + 4, and dividing 28 by 10 gives quotient 2 and remainder 8, since 28 = 10 times 2 + 8. Because a = 4 is the smallest qualifying value, n = 28 is the smallest possible value of n. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q89
**difficulty:** Hard
**type:** Problem Solving
**topic:** Factors and Multiples

How many positive factors of 5,400 are multiples of 6?

- A) 18
- B) 24
- C) 27
- D) 30
- E) 36

**answer:** C
**explanation:** Every positive factor of a number is built from the same primes that appear in that number, each taken to an exponent no larger than its exponent in the number; a factor is a multiple of 6 = 2 times 3 exactly when it contains at least one factor of 2 and at least one factor of 3. We first factor the number: 5,400 = 54 times 100 = (2 times 3³) times (2² times 5²) = 2³ times 3³ times 5². Any factor has the form 2^a times 3^b times 5^c, where 0 ≤ a ≤ 3, 0 ≤ b ≤ 3, and 0 ≤ c ≤ 2. For the factor to be a multiple of 6, we require a ≥ 1 and b ≥ 1, while c is unrestricted. Counting the admissible exponents: a may be 1, 2, or 3, giving 3 choices; b may be 1, 2, or 3, giving 3 choices; and c may be 0, 1, or 2, giving 3 choices. Because the exponents are chosen independently, the number of factors that are multiples of 6 is 3 times 3 times 3 = 27. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q90
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Even/Odd Arithmetic

If a and b are integers, is a + b even?

(1) a²b is even.
(2) a − b is even.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** The question asks for a definite yes-or-no answer to whether a + b is even, and the governing parity rules are that a sum is even exactly when its two terms share the same parity, a product is even exactly when at least one factor is even, and a square has the same parity as its base. Consider statement (1): a²b is even, so at least one of a² and b is even, which means at least one of a and b is even. This does not fix the parity of the sum. If a = 2 and b = 4, both are even, a²b = 16 is even, and a + b = 6 is even, giving the answer yes; but if a = 2 and b = 3, then a²b = 12 is even while a + b = 5 is odd, giving the answer no. Because statement (1) permits both outcomes, it is not sufficient. Consider statement (2): a − b is even. A difference of two integers is even precisely when the two integers share the same parity, so a and b are either both even or both odd. In either case their sum a + b combines two terms of the same parity and is therefore even, giving the definite answer yes. Statement (2) alone is sufficient. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q91
**difficulty:** Medium
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 13^17 + 18^22?

- A) 1
- B) 3
- C) 5
- D) 7
- E) 9

**answer:** D
**explanation:** The units digit of a power depends only on the units digit of the base, and the units digits of successive powers repeat in a cycle, so we find the units digit of each term separately and then add, keeping only the units digit of the sum. For 13^17, only the base's units digit 3 matters, and the powers of 3 cycle through units digits 3, 9, 7, 1 with length 4; the position is the remainder when the exponent is divided by 4, with a remainder of 0 meaning the fourth position. Since 17 = 4 times 4 + 1, the remainder is 1, and the first entry of the cycle is 3, so 13^17 ends in 3. For 18^22, only the units digit 8 matters, and the powers of 8 cycle through units digits 8, 4, 2, 6 with length 4. Since 22 = 4 times 5 + 2, the remainder is 2, and the second entry of the cycle is 4, so 18^22 ends in 4. Adding the two units digits gives 3 + 4 = 7, whose units digit is 7, so the units digit of the entire sum is 7. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q92
**difficulty:** Hard
**type:** Problem Solving
**topic:** GCD and LCM

How many unordered pairs of positive integers have a greatest common factor of 9 and a least common multiple of 270?

- A) 2
- B) 3
- C) 4
- D) 6
- E) 8

**answer:** C
**explanation:** When two positive integers share a greatest common factor g, each can be written as g times a smaller factor, and those smaller factors must be coprime; their least common multiple is then g times the product of the coprime factors, so counting the valid pairs reduces to counting coprime factorizations of a single number. Let the two integers be 9a and 9b, where a and b are positive integers with greatest common factor 1, since 9 is their greatest common factor. The least common multiple of 9a and 9b is 9 times a times b, and this must equal 270, so a times b = 270 ÷ 9 = 30. We must therefore count the unordered pairs of coprime positive integers whose product is 30. Factoring gives 30 = 2 times 3 times 5, a product of three distinct primes, and a coprime factorization assigns each prime entirely to one member of the pair. The unordered coprime pairs with product 30 are (1, 30), (2, 15), (3, 10), and (5, 6); each pair consists of coprime numbers, and there are 4 of them. These correspond to the integer pairs (9, 270), (18, 135), (27, 90), and (45, 54), and a check confirms that each has greatest common factor 9 and least common multiple 270. Hence there are 4 such unordered pairs. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q93
**difficulty:** Hard
**type:** Problem Solving
**topic:** Remainders

What is the smallest integer greater than 1 that leaves a remainder of 3 when divided by 5, a remainder of 4 when divided by 6, and a remainder of 5 when divided by 7?

- A) 103
- B) 138
- C) 173
- D) 188
- E) 208

**answer:** E
**explanation:** The efficient route is to notice that each remainder is exactly two less than its divisor: 3 = 5 − 2, 4 = 6 − 2, and 5 = 7 − 2. Translating the three conditions into congruences gives n ≡ 3 (mod 5), n ≡ 4 (mod 6), and n ≡ 5 (mod 7), which can be rewritten uniformly as n ≡ −2 modulo each of 5, 6, and 7. A number that is congruent to −2 modulo 5, modulo 6, and modulo 7 simultaneously is congruent to −2 modulo their least common multiple. Since 5, 6, and 7 have least common multiple equal to 5 × 6 × 7 = 210 (the pairwise common factors do not reduce it, because 5 and 7 are prime and 6 = 2 × 3 shares no factor with either), we have n ≡ −2 (mod 210), so n = 210k − 2 for some integer k. The smallest such value greater than 1 occurs at k = 1, giving n = 210 − 2 = 208. As a check, 208 = 5 × 41 + 3, 208 = 6 × 34 + 4, and 208 = 7 × 29 + 5, so all three remainder conditions hold. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q94
**difficulty:** Hard
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 24¹⁷ × 33²¹ × 17¹³?

- A) 0
- B) 2
- C) 4
- D) 6
- E) 8

**answer:** C
**explanation:** The units digit of a product depends only on the units digits of its factors, and the units digit of each power depends only on the units digit of its base, whose powers repeat in a fixed cycle. For 24¹⁷ only the units digit 4 matters, and powers of 4 cycle through units digits 4, 6 with length 2 (odd exponents end in 4, even in 6); since 17 is odd, 24¹⁷ ends in 4. For 33²¹ only the units digit 3 matters, and powers of 3 cycle through 3, 9, 7, 1 with length 4; since 21 = 4 × 5 + 1, the remainder is 1, so 33²¹ ends in the first cycle entry, 3. For 17¹³ only the units digit 7 matters, and powers of 7 cycle through 7, 9, 3, 1 with length 4; since 13 = 4 × 3 + 1, the remainder is 1, so 17¹³ ends in the first cycle entry, 7. Multiplying the three units digits gives 4 × 3 × 7 = 84, whose units digit is 4, so the units digit of the entire product is 4. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q95
**difficulty:** Medium
**type:** Problem Solving
**topic:** Factors and Multiples

How many positive factors of 7,560 are multiples of 6?

- A) 24
- B) 30
- C) 36
- D) 48
- E) 64

**answer:** C
**explanation:** A factor of a number is a multiple of 6 precisely when it contains at least one factor of 2 and at least one factor of 3, so the cleanest count works directly from the prime factorization. We factor 7,560 = 2³ × 3³ × 5 × 7, which can be verified since 8 × 27 × 5 × 7 = 8 × 27 × 35 = 216 × 35 = 7,560. Any positive factor has the form 2ᵃ × 3ᵇ × 5ᶜ × 7ᵈ with 0 ≤ a ≤ 3, 0 ≤ b ≤ 3, 0 ≤ c ≤ 1, and 0 ≤ d ≤ 1. For the factor to be a multiple of 6, we require a ≥ 1 and b ≥ 1, while c and d remain free. The exponent a may then be 1, 2, or 3 (3 choices), the exponent b may be 1, 2, or 3 (3 choices), the exponent c may be 0 or 1 (2 choices), and the exponent d may be 0 or 1 (2 choices). Because the exponents are chosen independently, the number of qualifying factors is 3 × 3 × 2 × 2 = 36. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q96
**difficulty:** Hard
**type:** Problem Solving
**topic:** Remainders — Powers

What is the remainder when 5⁸³ is divided by 7?

- A) 1
- B) 2
- C) 3
- D) 5
- E) 6

**answer:** C
**explanation:** To find the remainder of a power upon division by a modulus, we track the cycle that the residues of successive powers form, since congruence is preserved under multiplication. Reducing the powers of 5 modulo 7 gives 5¹ ≡ 5, 5² ≡ 25 ≡ 4, 5³ ≡ 5 × 4 = 20 ≡ 6, 5⁴ ≡ 5 × 6 = 30 ≡ 2, 5⁵ ≡ 5 × 2 = 10 ≡ 3, and 5⁶ ≡ 5 × 3 = 15 ≡ 1 (mod 7). The residues therefore repeat with period 6 in the pattern 5, 4, 6, 2, 3, 1. To locate 5⁸³ within this cycle, we find the remainder when the exponent 83 is divided by 6: since 83 = 6 × 13 + 5, the remainder is 5, so 5⁸³ has the same residue as 5⁵, which is the fifth entry of the cycle, namely 3. Hence the remainder when 5⁸³ is divided by 7 is 3. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q97
**difficulty:** Medium
**type:** Problem Solving
**topic:** Prime Factorization

What is the product of all the distinct prime factors of 5,460?

- A) 210
- B) 273
- C) 546
- D) 1,365
- E) 2,730

**answer:** E
**explanation:** The distinct prime factors of an integer are the different primes that appear in its prime factorization, regardless of how many times each appears, so the task is to factor 5,460 completely and then multiply the distinct primes once each. We factor by repeated division: 5,460 = 2 × 2,730 = 2 × 2 × 1,365, and 1,365 = 5 × 273 because it ends in 5, then 273 = 3 × 91, and finally 91 = 7 × 13. Collecting these, 5,460 = 2² × 3 × 5 × 7 × 13, so the distinct prime factors are 2, 3, 5, 7, and 13. Their product, taking each prime only once, is 2 × 3 × 5 × 7 × 13 = 6 × 5 × 7 × 13 = 30 × 91 = 2,730. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q98
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility

Is the positive integer n divisible by 24?

(1) n is divisible by 8.
(2) n is divisible by 9.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Since 24 = 2³ × 3, a positive integer is divisible by 24 if and only if it contains at least three factors of 2 and at least one factor of 3, and in a yes/no data sufficiency question a statement is sufficient only when it forces a single, consistent answer. Consider statement (1): n is divisible by 8 = 2³, which guarantees three factors of 2 but provides no information about a factor of 3. Testing values, n = 8 is divisible by 8 yet not by 24 (answer no), while n = 24 is divisible by 8 and by 24 (answer yes), so statement (1) alone is not sufficient. Consider statement (2): n is divisible by 9 = 3², which guarantees a factor of 3 but says nothing about factors of 2; here n = 9 is divisible by 9 yet not by 24 (answer no), while n = 72 is divisible by 9 and by 24 (answer yes), so statement (2) alone is not sufficient. Taking the statements together, n is divisible by both 8 and 9, hence by their least common multiple; since 8 = 2³ and 9 = 3² share no common prime factor, LCM(8, 9) = 2³ × 3² = 72, and n is a multiple of 72. Because 72 = 24 × 3, every multiple of 72 is a multiple of 24, so n must be divisible by 24, a definite yes. The two statements together are sufficient while neither alone is. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q99
**difficulty:** Hard
**type:** Problem Solving
**topic:** Counting Multiples — Inclusion-Exclusion

How many integers from 1 to 1,000, inclusive, are divisible by 6 but divisible by neither 8 nor 9?

- A) 70
- B) 78
- C) 83
- D) 96
- E) 111

**answer:** C
**explanation:** We begin with the multiples of 6 and then remove those that are also divisible by 8 or by 9, using inclusion-exclusion so that any number removed for both reasons is not subtracted twice; throughout, an integer divisible by two given numbers is divisible by their least common multiple, and the count of multiples of d from 1 to 1,000 is the greatest integer not exceeding 1,000 ÷ d. The multiples of 6 number ⌊1,000 ÷ 6⌋ = 166. Among these, the ones also divisible by 8 are the multiples of LCM(6, 8) = 24, numbering ⌊1,000 ÷ 24⌋ = 41, and the ones also divisible by 9 are the multiples of LCM(6, 9) = 18, numbering ⌊1,000 ÷ 18⌋ = 55. The ones removed by both criteria are the multiples of 6 divisible by both 8 and 9, that is, the multiples of LCM(6, 8, 9) = 72, numbering ⌊1,000 ÷ 72⌋ = 13. By inclusion-exclusion, the multiples of 6 that are divisible by 8 or by 9 number 41 + 55 − 13 = 83. Subtracting from the 166 multiples of 6 gives 166 − 83 = 83 integers that are divisible by 6 but by neither 8 nor 9. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q100
**difficulty:** Hard
**type:** Problem Solving
**topic:** Prime Powers in Factorials

What is the greatest integer k such that 3ᵏ is a factor of 30! (that is, of 30 factorial)?

- A) 10
- B) 12
- C) 13
- D) 14
- E) 15

**answer:** D
**explanation:** The exponent of a prime p in the factorization of n! equals the sum of the whole-number quotients ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + …, because each term counts how many of the integers from 1 to n contribute at least one, then at least two, then at least three, and so on, factors of p. Here n! is 30! and the prime is p = 3, so we add the quotients for increasing powers of 3. The first term, ⌊30/3⌋ = 10, counts the multiples of 3 up to 30, each contributing at least one factor of 3. The second term, ⌊30/9⌋ = 3, counts the multiples of 9 (namely 9, 18, 27), each contributing an additional factor of 3. The third term, ⌊30/27⌋ = 1, counts the single multiple of 27 (namely 27), contributing yet another factor of 3. The next power, 81, exceeds 30, so ⌊30/81⌋ = 0 and all further terms vanish. Adding the contributions gives 10 + 3 + 1 = 14, so the greatest power of 3 dividing 30! is 3¹⁴, and the greatest such k is 14. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q101
**difficulty:** Easy
**type:** Problem Solving
**topic:** Even and Odd Integers

If n is an odd integer, which of the following must be even?

- A) n + 2
- B) 2n + 1
- C) n + 1
- D) n^2
- E) n^2 + 2

**answer:** C
**explanation:** Adding 1 to any odd integer produces the next integer, which is even. The other expressions are always odd when n is odd: odd + 2 is odd, 2n + 1 is odd, n^2 is odd, and n^2 + 2 remains odd. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---
section: Quant
topic: Statistics & Probability
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Mean

The average (arithmetic mean) of five numbers is 18. If one of the numbers is removed, the average of the remaining four numbers is 15. What is the number that was removed?

- A) 20
- B) 24
- C) 28
- D) 30
- E) 33

**answer:** D
**fastest_path:** Sum dropped from 5·18 = 90 to 4·15 = 60. Removed = 30.
**explanation:** Sum of 5 = 5 × 18 = 90. Sum of 4 = 4 × 15 = 60. Removed = 90 − 60 = 30.
**mistake_a:** Slip → 20.
**mistake_b:** Slip → 24.
**mistake_c:** Slip → 28.
**mistake_e:** Slip → 33.
**common_trap:** Computing the difference of *means* (18 − 15 = 3) instead of difference of *sums*.
**takeaway:** Sum = mean × count. For mean problems, work in *sums*, not in averages.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q2
**difficulty:** Easy
**type:** Problem Solving
**topic:** Probability

A bag contains 4 red balls, 3 blue balls, and 5 green balls. If one ball is drawn at random, what is the probability that it is NOT green?

- A) 5/12
- B) 7/12
- C) 1/3
- D) 2/3
- E) 3/4

**answer:** B
**fastest_path:** 1 − P(green) = 1 − 5/12 = 7/12.
**explanation:** Total = 12 balls. Non-green = 4 + 3 = 7 → 7/12. Or: complement: 1 − 5/12 = 7/12.
**mistake_a:** Bubbled P(green) = 5/12.
**mistake_c:** Slip → 1/3 (4/12, just red).
**mistake_d:** Slip → 2/3 (8/12).
**mistake_e:** Slip → 3/4 (9/12).
**common_trap:** Bubbling P(green) = 5/12 instead of P(not green).
**takeaway:** P(not E) = 1 − P(E). Always read the *direction* of the question.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Median

What is the median of the set {14, 7, 21, 3, 10, 7, 18}?

- A) 7
- B) 10
- C) 11
- D) 14
- E) 18

**answer:** B
**fastest_path:** Sort → {3, 7, 7, 10, 14, 18, 21}. Middle (4th) = 10.
**explanation:** Sort the set: 3, 7, 7, 10, 14, 18, 21. With 7 elements, median is the 4th value = 10.
**mistake_a:** Bubbled the *mode* (7) — appears twice.
**mistake_c:** Slip → 11.
**mistake_d:** Bubbled an arbitrary value (14).
**mistake_e:** Bubbled an arbitrary value (18).
**common_trap:** Bubbling the mode (7, the most frequent value) instead of the median.
**takeaway:** Sort first. Median for n elements: position (n+1)/2 if odd, average of middle two if even. Mode is most frequent — different concept.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting

A committee of 3 people is to be selected from a group of 7 candidates. How many different committees are possible?

- A) 21
- B) 35
- C) 42
- D) 120
- E) 210

**answer:** B
**fastest_path:** C(7,3) = (7·6·5)/(3·2·1) = 210/6 = 35.
**explanation:** "Committee" = unordered selection → combinations. C(7,3) = 7!/(3!·4!) = 35.
**mistake_a:** Slip → 21.
**mistake_c:** Slip → 42.
**mistake_d:** Slip → 120.
**mistake_e:** Computed P(7,3) = 7·6·5 = 210 (used permutations).
**common_trap:** Forgetting to divide by 3! — counting *ordered* arrangements (210) instead of unordered committees.
**takeaway:** Committee = unordered → combinations. C(n,k) = P(n,k)/k!. Always divide by k! when order doesn't matter.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability

Two fair six-sided dice are rolled. What is the probability that the sum of the numbers shown is 8?

- A) 1/12
- B) 5/36
- C) 1/6
- D) 7/36
- E) 1/4

**answer:** B
**fastest_path:** Ordered pairs summing to 8: (2,6), (3,5), (4,4), (5,3), (6,2) → 5/36.
**explanation:** Total ordered outcomes = 36. Sum = 8: (2,6), (3,5), (4,4), (5,3), (6,2) → 5 outcomes. P = 5/36.
**mistake_a:** Counted only unordered pairs → 3/36 = 1/12.
**mistake_c:** Slip → 6/36 = 1/6.
**mistake_d:** Slip → 7/36.
**mistake_e:** Slip → 9/36 = 1/4.
**common_trap:** Counting only unordered pairs — (2,6) and (6,2) are *different* outcomes when rolling two distinguishable dice.
**takeaway:** Two dice → 36 *ordered* outcomes. List ordered pairs systematically for each sum.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q6
**difficulty:** Hard
**type:** Problem Solving
**topic:** Standard Deviation

Set A = {10, 20, 30, 40, 50} and Set B = {20, 25, 30, 35, 40}. Which of the following statements is true?

- A) Set A and Set B have the same mean and the same standard deviation
- B) Set A and Set B have the same mean, but Set A has a greater standard deviation
- C) Set A and Set B have the same mean, but Set B has a greater standard deviation
- D) Set A has a greater mean and a greater standard deviation
- E) Set B has a greater mean and a smaller standard deviation

**answer:** B
**fastest_path:** Both means = 30. A spreads ±20; B spreads ±10. A is more spread → A's SD is greater.
**explanation:** Mean(A) = Mean(B) = 30. Deviations: A {−20, −10, 0, 10, 20}; B {−10, −5, 0, 5, 10}. A is more spread → A has greater SD.
**mistake_a:** Treated equal-mean sets as having equal SD.
**mistake_c:** Inverted SD direction.
**mistake_d:** Mis-computed means.
**mistake_e:** Mis-computed means.
**common_trap:** Computing exact SD numerically (slow). Compare spreads visually instead.
**takeaway:** Equal means but different spreads → bigger spread = bigger SD. No need to compute exact SDs.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q7
**difficulty:** Hard
**type:** Problem Solving
**topic:** Counting

How many 3-digit positive integers have all distinct digits and are divisible by 5?

- A) 112
- B) 128
- C) 136
- D) 144
- E) 152

**answer:** C
**fastest_path:** Cases by units digit. Ends in 0: 9·8 = 72. Ends in 5: 8·8 = 64. Total 136.
**explanation:** Last digit must be 0 or 5. Case 1 (ends 0): hundreds 1–9 (9), tens any except hundreds and 0 (8). = 72. Case 2 (ends 5): hundreds 1–9 except 5 (8), tens any 0–9 except hundreds and 5 (8). = 64. Total 72 + 64 = 136.
**mistake_a:** Slip → 112.
**mistake_b:** Slip → 128.
**mistake_d:** Mis-counted Case 2 (allowed leading 0 or used 9·8 again) → 144.
**mistake_e:** Slip → 152.
**common_trap:** Treating both cases identically — Case 2 forbids hundreds digit = 5 (already used).
**takeaway:** Split by *cases* when a position has limited choices. Adjust subsequent positions for already-used digits.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q8
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability

A box contains 5 red chips and 3 blue chips. Two chips are drawn at random without replacement. What is the probability that at least one chip is red?

- A) 5/8
- B) 25/28
- C) 13/14
- D) 15/28
- E) 27/28

**answer:** B
**fastest_path:** 1 − P(both blue) = 1 − (3/8)(2/7) = 1 − 3/28 = 25/28.
**explanation:** Complement: P(at least 1 R) = 1 − P(both B) = 1 − (3/8)(2/7) = 1 − 6/56 = 1 − 3/28 = 25/28.
**mistake_a:** Bubbled P(red on a single draw) = 5/8.
**mistake_c:** Slip → 13/14.
**mistake_d:** Slip → 15/28.
**mistake_e:** Slip → 27/28.
**common_trap:** Computing P(R) by case analysis (1 R or 2 R) — slow and error-prone — instead of using the complement.
**takeaway:** "At least one" → use the complement: P(at least 1) = 1 − P(none).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q9
**difficulty:** Easy
**type:** Problem Solving
**topic:** Mean / Median

The set {4, 7, 9, 12, x} has a mean of 9. What is the value of x?

- A) 9
- B) 11
- C) 12
- D) 13
- E) 15

**answer:** D
**fastest_path:** Total = 5 × 9 = 45. Known sum = 32. x = 13.
**explanation:** Sum = mean × count = 5 × 9 = 45. Known sum = 4 + 7 + 9 + 12 = 32. x = 45 − 32 = 13.
**mistake_a:** Bubbled the mean (9) directly.
**mistake_b:** Slip → 11.
**mistake_c:** Bubbled an existing value (12).
**mistake_e:** Slip → 15.
**common_trap:** Bubbling the mean (9) instead of the missing value.
**takeaway:** Missing-value mean: total = mean × count. Subtract known to get unknown.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q10
**difficulty:** Easy
**type:** Problem Solving
**topic:** Basic Probability

A jar contains 6 red marbles, 4 blue marbles, and 2 yellow marbles. If one marble is drawn at random, what is the probability that it is either red or yellow?

- A) 1/3
- B) 1/2
- C) 7/12
- D) 2/3
- E) 3/4

**answer:** D
**fastest_path:** Favorable = 6 + 2 = 8. Total = 12. 8/12 = 2/3.
**explanation:** Mutually exclusive → P(R or Y) = (6 + 2)/12 = 8/12 = 2/3.
**mistake_a:** Slip → 1/3 (just one color).
**mistake_b:** Forgot Y → 6/12 = 1/2.
**mistake_c:** Slip → 7/12.
**mistake_e:** Slip → 9/12 = 3/4.
**common_trap:** Forgetting one of the favorable colors (e.g., counting only red).
**takeaway:** P(A or B) = P(A) + P(B) when events are mutually exclusive. Count favorable / total.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q11
**difficulty:** Easy
**type:** Problem Solving
**topic:** Counting Principle

A restaurant offers 4 appetizers, 6 entrees, and 3 desserts. How many different three-course meals (one of each) can a customer order?

- A) 13
- B) 24
- C) 36
- D) 54
- E) 72

**answer:** E
**fastest_path:** 4 × 6 × 3 = 72.
**explanation:** Counting principle: independent choices multiply. 4 × 6 × 3 = 72.
**mistake_a:** Added: 4 + 6 + 3 = 13.
**mistake_b:** Multiplied two of three: 4 × 6 = 24.
**mistake_c:** Slip → 36 (4 × 9 or 6 × 6).
**mistake_d:** Slip → 54.
**common_trap:** Adding choices (13) instead of multiplying — confusing "or" with "and."
**takeaway:** Independent "and" choices → multiply. Mutually exclusive "or" choices → add.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q12
**difficulty:** Medium
**type:** Problem Solving
**topic:** Mean / Median

The mean of five distinct positive integers is 20 and their median is 18. If the largest of the five integers is 40, what is the greatest possible value of the smallest integer?

- A) 1
- B) 5
- C) 11
- D) 12
- E) 17

**answer:** C
**fastest_path:** Sum = 100. Median = 18, max = 40 → a + b + d = 42. Maximize a: minimize d (=19) and b (=a+1). 2a + 1 + 19 = 42 → a = 11.
**explanation:** Order a < b < 18 < d < 40, sum = 100. So a + b + d = 100 − 18 − 40 = 42. Maximize a → minimize d and b. d > 18 (distinct) → d ≥ 19; b < 18 distinct from a → b ≥ a + 1. Tightest: d = 19, b = a + 1 → a + (a+1) + 19 = 42 → a = 11. Check: {11, 12, 18, 19, 40} ✓.
**mistake_a:** Tried a = 1 without optimizing.
**mistake_b:** Slip → 5.
**mistake_d:** Set b = a (ignored "distinct") → got 12.
**mistake_e:** Slip → 17.
**common_trap:** Setting b = a (forgetting "distinct") — pushes a up by 1 to 12 but violates distinctness.
**takeaway:** "Distinct" → strict inequalities. Always check b > a, d > c by ≥ 1.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q13
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations

From a group of 5 men and 4 women, a committee of 4 people is to be formed consisting of exactly 2 men and 2 women. How many different committees are possible?

- A) 20
- B) 36
- C) 60
- D) 126
- E) 210

**answer:** C
**fastest_path:** C(5,2) · C(4,2) = 10 · 6 = 60.
**explanation:** Choose 2 of 5 men: C(5,2) = 10. Choose 2 of 4 women: C(4,2) = 6. Multiply: 10 × 6 = 60.
**mistake_a:** Slip → 20.
**mistake_b:** Slip → 36.
**mistake_d:** Computed C(9,4) = 126 (ignored gender constraint).
**mistake_e:** Permutation-style → 210.
**common_trap:** Computing C(9,4) = 126 by ignoring the partition constraint.
**takeaway:** When a constraint partitions selection (men/women), multiply combinations from each partition. Don't merge then constrain.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q14
**difficulty:** Medium
**type:** Problem Solving
**topic:** Mean / Median

A list of 10 numbers has a mean of 24. When an 11th number is added, the new mean becomes 25. What is the value of the 11th number?

- A) 25
- B) 26
- C) 30
- D) 35
- E) 36

**answer:** D
**fastest_path:** 11 · 25 − 10 · 24 = 275 − 240 = 35.
**explanation:** Old sum = 240; new sum = 275. 11th value = 275 − 240 = 35. Shortcut: new value = new mean + n × Δmean = 25 + 10 × 1 = 35.
**mistake_a:** Bubbled the new mean (25).
**mistake_b:** Slip → 26.
**mistake_c:** Slip → 30.
**mistake_e:** Slip → 36.
**common_trap:** Bubbling the new mean (25) — but the *added* value is what raises the mean.
**takeaway:** To raise n numbers' mean by Δ, the new value must equal (new mean) + n·Δ.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q15
**difficulty:** Medium
**type:** Problem Solving
**topic:** Dependent Events

A drawer contains 7 black socks and 5 white socks. If two socks are drawn at random without replacement, what is the probability that both are black?

- A) 7/24
- B) 7/22
- C) 1/2
- D) 35/132
- E) 49/144

**answer:** B
**fastest_path:** (7/12)(6/11) = 42/132 = 7/22.
**explanation:** Without replacement: P(B then B) = (7/12)(6/11) = 42/132 = 7/22.
**mistake_a:** Slip → 7/24.
**mistake_c:** Slip → 1/2.
**mistake_d:** Slip → 35/132.
**mistake_e:** With replacement: (7/12)² = 49/144.
**common_trap:** Treating draws as *with* replacement — uses (7/12)² instead of decrementing.
**takeaway:** Without replacement: decrement *both* numerator and denominator on the second draw.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q16
**difficulty:** Medium
**type:** Problem Solving
**topic:** Standard Deviation

Set X = {8, 10, 12, 14, 16} and Set Y is formed by adding 5 to each element of Set X. Which of the following statements is true about the two sets?

- A) Set Y has a greater mean and greater standard deviation
- B) Set Y has a greater mean and smaller standard deviation
- C) Set Y has a greater mean and the same standard deviation
- D) The two sets have the same mean and the same standard deviation
- E) The two sets have the same mean but different standard deviations

**answer:** C
**fastest_path:** Adding constant shifts mean by 5; SD unchanged.
**explanation:** Adding 5 to each element: mean increases by 5; deviations from new mean = old deviations from old mean → SD unchanged.
**mistake_a:** Treated additive shift as scaling SD.
**mistake_b:** Inverted SD direction.
**mistake_d:** Treated mean as unchanged.
**mistake_e:** Treated mean as unchanged.
**common_trap:** Confusing additive shift (+5) with multiplicative scaling (×5). Only multiplicative changes SD.
**takeaway:** y = ax + b → mean(y) = a·mean(x) + b; SD(y) = |a|·SD(x). Constant b shifts only the mean.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q17
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Mean / Median

In a set of 5 positive integers, is the median equal to the mean?

(1) The 5 integers form an arithmetic sequence.
(2) The smallest integer is 4 and the largest is 20.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are not sufficient.

**answer:** A
**fastest_path:** (1) AP with odd terms: middle = mean by symmetry. (2) Counter sets give different answers.
**explanation:** Statement (1): odd-count AP → middle value = mean by symmetry. Definite YES → sufficient. Statement (2): {4, 5, 6, 7, 20} mean 8.4 ≠ median 6 (no); {4, 8, 12, 16, 20} mean = median = 12 (yes). Insufficient. Answer: A.
**mistake_b:** Treated only (2) as sufficient.
**mistake_c:** Required both — (1) alone resolves.
**mistake_d:** Treated each as sufficient.
**mistake_e:** Concluded both insufficient.
**common_trap:** Forgetting that an AP with odd terms is symmetric → middle = mean automatically.
**takeaway:** Symmetric distributions (AP, mirror-image) have median = mean. For odd-count AP, this is automatic.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q18
**difficulty:** Hard
**type:** Problem Solving
**topic:** Basic Probability

A fair coin is flipped 4 times. What is the probability that it lands on heads exactly 3 times?

- A) 1/8
- B) 3/16
- C) 1/4
- D) 5/16
- E) 3/8

**answer:** C
**fastest_path:** C(4,3)/2⁴ = 4/16 = 1/4.
**explanation:** Choose which 3 of 4 are heads: C(4,3) = 4. Each sequence has probability (1/2)⁴ = 1/16. Total = 4/16 = 1/4.
**mistake_a:** Slip → 1/8.
**mistake_b:** Slip → 3/16.
**mistake_d:** Slip → 5/16.
**mistake_e:** Slip → 3/8.
**common_trap:** Forgetting to count C(n,k) sequences and using only (1/2)^n.
**takeaway:** Exactly k heads in n fair flips: P = C(n,k)/2^n.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q19
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Combinations

A committee of 3 is to be chosen from a group of n people. How many different committees are possible?

(1) If the group had 1 additional person, the number of possible committees would increase by 21.
(2) n is greater than 5.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are not sufficient.

**answer:** A
**fastest_path:** (1) Pascal: C(n+1,3) − C(n,3) = C(n,2) = 21 → n(n−1)/2 = 21 → n = 7 → C(7,3) = 35.
**explanation:** Statement (1): C(n+1,3) − C(n,3) = C(n,2) (Pascal identity). C(n,2) = 21 → n(n−1)/2 = 21 → n = 7 → C(7,3) = 35. Sufficient. Statement (2): n > 5 allows multiple values. Insufficient. Answer: A.
**mistake_b:** Treated only (2) as sufficient.
**mistake_c:** Required both.
**mistake_d:** Treated each as sufficient.
**mistake_e:** Concluded both insufficient.
**common_trap:** Missing Pascal's-rule shortcut and trying to expand factorials directly.
**takeaway:** Pascal's identity: C(n+1,k) − C(n,k) = C(n,k−1). Useful for "what if n changes by 1" problems.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q20
**difficulty:** Hard
**type:** Problem Solving
**topic:** Combinations

A student must answer 5 out of 7 questions on an exam, but must answer at least 2 of the first 3 questions. How many different sets of 5 questions can the student choose?

- A) 18
- B) 20
- C) 21
- D) 24
- E) 28

**answer:** A
**fastest_path:** Cases: 2 of first 3 plus 3 of last 4 = 3·4 = 12. 3 of first 3 plus 2 of last 4 = 1·6 = 6. Total 18.
**explanation:** Case (a): exactly 2 of first 3, 3 of last 4: C(3,2)·C(4,3) = 3·4 = 12. Case (b): all 3 of first 3, 2 of last 4: C(3,3)·C(4,2) = 1·6 = 6. Total = 18. Or: complement: C(7,5) − [only 1 of first 3] = 21 − 3 = 18.
**mistake_b:** Slip → 20.
**mistake_c:** Used C(7,5) = 21 (no constraint applied).
**mistake_d:** Slip → 24.
**mistake_e:** Slip → 28.
**common_trap:** Computing C(7,5) = 21 directly without enforcing the "at least 2 of first 3" constraint.
**takeaway:** "At least k of subset" → split by exact count and add. Or use total minus disallowed (complement).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Median with Distinctness Constraints

Five distinct positive integers have an average of 20, a median of 22, and a largest value of 35. What is the smallest possible value of the second-largest integer?

- A) 22
- B) 23
- C) 24
- D) 25
- E) 26

**answer:** B
**fastest_path:** Sum = 100. Median 22 + max 35 → a + b + d = 43. Distinct → d ≥ 23. Try d = 23: a + b = 20 (e.g., 1, 19) ✓.
**explanation:** Order a < b < c < d < e with c = 22, e = 35. Sum 100 → a + b + d = 43. Distinctness: d > c = 22 → d ≥ 23. With d = 23: a + b = 20, e.g., (1, 19) — distinct, both < 22 ✓. So smallest d = 23.
**mistake_a:** Set d = 22 = c (violates distinctness).
**mistake_c:** Slip → 24.
**mistake_d:** Slip → 25.
**mistake_e:** Slip → 26.
**common_trap:** Setting d = c = 22 — forgets that d is *strictly* greater than c.
**takeaway:** Distinct integers → strict inequalities. d > c by at least 1.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q22
**difficulty:** Hard
**type:** Problem Solving
**topic:** Standard Deviation under Linear Transformation

A data set of 5 numbers has mean 10 and standard deviation 2. If each number in the set is multiplied by 3 and then increased by 4, what is the standard deviation of the new data set?

- A) 2
- B) 3
- C) 6
- D) 10
- E) 22

**answer:** C
**fastest_path:** SD scales by |3|, ignored by +4. New SD = 6.
**explanation:** y = ax + b → SD(y) = |a|·SD(x). Here |3|·2 = 6.
**mistake_a:** Treated SD as invariant under all transforms.
**mistake_b:** Slip → 3.
**mistake_d:** Applied 3·2 + 4 = 10 (treated +4 as scaling SD).
**mistake_e:** Mis-applied → 22.
**common_trap:** Adding the constant b to the SD. Only |a| (multiplier) affects SD.
**takeaway:** Linear transform y = ax + b: mean shifts by b, SD scales by |a|. Constant b doesn't affect spread.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability — Without Replacement

A box contains 4 red marbles, 3 green marbles, and 3 blue marbles. Two marbles are drawn at random without replacement. What is the probability that both marbles drawn are red?

- A) 2/15
- B) 4/25
- C) 1/5
- D) 6/25
- E) 2/5

**answer:** A
**fastest_path:** (4/10)(3/9) = 12/90 = 2/15.
**explanation:** Without replacement: P(R then R) = (4/10)(3/9) = 12/90 = 2/15.
**mistake_b:** With replacement: (4/10)² = 4/25.
**mistake_c:** Slip → 1/5.
**mistake_d:** Slip → 6/25.
**mistake_e:** Slip → 2/5.
**common_trap:** Treating draws as *with* replacement — uses (4/10)² instead of (4/10)(3/9).
**takeaway:** Without replacement: decrement both numerator and denominator on the second draw.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q24
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Median of an Odd-Sized Set

A data set consists of 7 numbers. What is the median of the data set?

(1) The sum of the numbers in the data set is 84.
(2) When the numbers are arranged in increasing order, the fourth number is 15.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**fastest_path:** Median of 7 sorted = 4th. (1) gives mean (12), not median. (2) gives 4th = 15 directly.
**explanation:** For 7 sorted numbers, median = 4th. Statement (1): sum gives mean (84/7 = 12), not median. Insufficient. Statement (2): 4th sorted value = 15 = median. Sufficient.
**mistake_a:** Treated (1) as sufficient — but sum gives only the mean.
**mistake_c:** Required both.
**mistake_d:** Treated each as sufficient.
**mistake_e:** Concluded both insufficient.
**common_trap:** Confusing mean (from sum) with median (positional).
**takeaway:** Median is positional ((n+1)/2 sorted); mean is arithmetic (sum/n). Sums tell you about means, not medians.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Conditional Probability — Bayes

A company has two factories. Factory P produces 60% of the company's products; Factory Q produces the remaining 40%. The defect rate at Factory P is 3%, and the defect rate at Factory Q is 5%. A product is selected at random from the company's output; given that the selected product is defective, what is the probability that it came from Factory P?

- A) 3/19
- B) 6/19
- C) 9/19
- D) 10/19
- E) 12/19

**answer:** C
**fastest_path:** P(P∩D) = 0.6·0.03 = 0.018; P(Q∩D) = 0.4·0.05 = 0.020. P(P|D) = 18/(18+20) = 9/19.
**explanation:** Bayes. P(P ∩ D) = 0.018; P(Q ∩ D) = 0.020; P(D) = 0.038. P(P | D) = 0.018/0.038 = 18/38 = 9/19.
**mistake_a:** Slip → 3/19.
**mistake_b:** Slip → 6/19.
**mistake_d:** Slip → 10/19.
**mistake_e:** Slip → 12/19.
**common_trap:** Ignoring the production split (60/40) and using just defect rates: 3/(3+5) = 3/8 ≈ a wrong fraction.
**takeaway:** Bayes: weight each branch by its prior. P(A|B) = P(A∩B)/P(B), where P(B) = sum over all branches.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q26
**difficulty:** Medium
**type:** Problem Solving
**topic:** Range of a Data Set

The scores of 9 students on a test, arranged in ascending order, are: 42, 55, 61, 68, 73, 78, 82, 86, 94. What is the range of the scores?

- A) 42
- B) 52
- C) 68
- D) 73
- E) 94

**answer:** B
**fastest_path:** max − min = 94 − 42 = 52.
**explanation:** Range = max − min = 94 − 42 = 52.
**mistake_a:** Bubbled the min (42).
**mistake_c:** Bubbled the midpoint of min and max ((42+94)/2 = 68).
**mistake_d:** Bubbled the median (73, the 5th value).
**mistake_e:** Bubbled the max (94).
**common_trap:** Confusing range (spread) with median (center) or just bubbling min/max.
**takeaway:** Range = max − min. It's a *spread* measure, not a center.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q27
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Comparing Standard Deviations — Range and Mean Are Not Enough

Is the standard deviation of data set S greater than the standard deviation of data set T?

(1) The range of S is greater than the range of T.
(2) The mean of S is greater than the mean of T.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Range and mean don't determine SD. Bimodal vs outlier-heavy distributions can give any combination.
**explanation:** Statement (1): range and SD differ. Counter: S = {0, 5, 5, 5, 5, 5, 5, 5, 5, 10} has range 10, SD ≈ 2.24; T = {1, 1, 1, 1, 9, 9, 9, 9} has range 8, SD = 4. S has bigger range but smaller SD. Insufficient. Statement (2): mean is a center, not spread. Insufficient. Together: still insufficient (shift T's values to flip means without changing SDs). E.
**mistake_a:** Treated only (1) as sufficient.
**mistake_b:** Treated only (2) as sufficient.
**mistake_c:** Required both — neither contributes spread info.
**mistake_d:** Treated each as sufficient.
**common_trap:** Assuming "greater range = greater SD." Outliers expand range without proportionally affecting SD.
**takeaway:** Range and SD are different spread measures. Range is sensitive to outliers; SD is sensitive to overall spread. Neither implies the other.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q28
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inclusion-Exclusion — Union of Two Events

In a group of 80 people, 45 own a car and 35 own a bicycle. If 20 people own both a car and a bicycle, how many people in the group own at least one of these two things?

- A) 45
- B) 55
- C) 60
- D) 65
- E) 80

**answer:** C
**fastest_path:** |C ∪ B| = |C| + |B| − |C ∩ B| = 45 + 35 − 20 = 60.
**explanation:** Inclusion-exclusion: |C ∪ B| = 45 + 35 − 20 = 60.
**mistake_a:** Bubbled |Car| = 45 (just one set).
**mistake_b:** Slip → 55.
**mistake_d:** Slip → 65.
**mistake_e:** Added without subtracting overlap: 45 + 35 = 80.
**common_trap:** Failing to subtract the overlap (|both|) → 80 (double-counts the people who own both).
**takeaway:** |A ∪ B| = |A| + |B| − |A ∩ B|. Always subtract the intersection once.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q29
**difficulty:** Easy
**type:** Problem Solving
**topic:** Weighted Average

A class of 20 students took a test. The 12 boys averaged 75 points and the 8 girls averaged 90 points. What was the average score for the entire class?

- A) 79
- B) 80
- C) 81
- D) 82.5
- E) 83

**answer:** C
**fastest_path:** (12·75 + 8·90)/20 = (900+720)/20 = 1620/20 = 81.
**explanation:** Weighted average = sum of all scores / total count. Boys' total: 12 × 75 = 900. Girls' total: 8 × 90 = 720. Grand total: 1620. Average: 1620/20 = 81.
**mistake_a:** Slightly off arithmetic → 79.
**mistake_b:** Rounded to nearest 5 → 80.
**mistake_d:** Took arithmetic mean of the two group averages: (75+90)/2 = 82.5 — ignores the 12:8 weighting.
**mistake_e:** Off-by-arithmetic → 83.
**common_trap:** Averaging the two group means (82.5) instead of weighting by group size. The boys' group is 50% larger, so it pulls the average closer to 75.
**takeaway:** Weighted average = (n₁·μ₁ + n₂·μ₂)/(n₁+n₂). The simple mean of the two group means is correct only when group sizes are equal.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q30
**difficulty:** Easy
**type:** Problem Solving
**topic:** Permutations

In how many distinct ways can 4 different students be arranged in a row of 4 seats?

- A) 4
- B) 12
- C) 16
- D) 24
- E) 256

**answer:** D
**fastest_path:** 4! = 4·3·2·1 = 24.
**explanation:** Order matters (seat 1 vs seat 2 is different), and no student may repeat. First seat: 4 choices, second: 3, third: 2, fourth: 1. Total = 4! = 24.
**mistake_a:** Counted the number of students (4).
**mistake_b:** Slip: 4·3 = 12 (stopped at 2 seats).
**mistake_c:** Computed 4² = 16 (treated each seat as independent with replacement).
**mistake_e:** Computed 4⁴ = 256 (ignored the "distinct" constraint — allowed repeats).
**common_trap:** Computing 4⁴ = 256 by treating each seat as an independent choice with all 4 students always available — this counts arrangements with repeated students.
**takeaway:** n distinct objects in n ordered positions = n! (permutation). Each position removes one object from future choices.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q31
**difficulty:** Easy
**type:** Problem Solving
**topic:** Interquartile Range

The data set {3, 7, 11, 15, 19, 23, 27} is already arranged in ascending order. What is the interquartile range (IQR)?

- A) 8
- B) 12
- C) 16
- D) 20
- E) 24

**answer:** C
**fastest_path:** Q1 = 7 (median of lower half {3,7,11}); Q3 = 23 (median of upper half {19,23,27}). IQR = 23−7 = 16.
**explanation:** For 7 values, the median is the 4th value (15). Lower half: {3,7,11} → Q1 = 7. Upper half: {19,23,27} → Q3 = 23. IQR = Q3 − Q1 = 23 − 7 = 16.
**mistake_a:** Computed Q3 − median = 23 − 15 = 8.
**mistake_b:** Computed median − Q1 = 15 − 7 = 8... or Q3 − Q1 using wrong quartiles → 12.
**mistake_d:** Computed range of lower half: 11 − 3 + 12 = 20 (confused range with IQR).
**mistake_e:** Computed full range: 27 − 3 = 24.
**common_trap:** Confusing the full range (max − min = 24) with the interquartile range (Q3 − Q1 = 16).
**takeaway:** IQR = Q3 − Q1. For an odd-count sorted set, exclude the median when forming the quartile halves.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q32
**difficulty:** Easy
**type:** Problem Solving
**topic:** Expected Value

A game awards prizes as follows: $10 with probability 1/4, $5 with probability 1/4, and $0 with probability 1/2. What is the expected prize?

- A) $2.50
- B) $3.00
- C) $3.75
- D) $5.00
- E) $7.50

**answer:** C
**fastest_path:** E = 10·(1/4) + 5·(1/4) + 0·(1/2) = 2.50 + 1.25 = $3.75.
**explanation:** Expected value = Σ(value × probability). E = 10(1/4) + 5(1/4) + 0(1/2) = 2.50 + 1.25 + 0 = $3.75.
**mistake_a:** Computed only the $10 branch: 10·(1/4) = $2.50.
**mistake_b:** Averaged $10 and $5 without weights: (10+5)/2·(1/4) = $3.00.
**mistake_d:** Averaged the non-zero prizes: (10+5)/3 = $5 (ignored $0 and weights).
**mistake_e:** Averaged only the two positive prizes: (10+5)/2 = $7.50.
**common_trap:** Averaging the prize values without weighting by probability — each prize must be multiplied by its probability before summing.
**takeaway:** E[X] = Σ xᵢ·P(xᵢ). Multiply each outcome by its probability, then sum. Never just average outcome values.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q33
**difficulty:** Easy
**type:** Problem Solving
**topic:** Independent Events

The probability that event A occurs is 1/3, and the probability that event B occurs is 1/4. If A and B are independent, what is the probability that both occur?

- A) 1/12
- B) 1/7
- C) 1/6
- D) 7/12
- E) 5/12

**answer:** A
**fastest_path:** Independent: P(A and B) = P(A)·P(B) = (1/3)(1/4) = 1/12.
**explanation:** For independent events, P(A ∩ B) = P(A) × P(B) = (1/3)(1/4) = 1/12.
**mistake_b:** Computed 1/(3+4) = 1/7 (harmonic-style confusion).
**mistake_c:** Averaged: (1/3+1/4)/2 = (7/12)/2 = 7/24 → slipped to 1/6.
**mistake_d:** Added probabilities: 1/3 + 1/4 = 7/12 — this gives P(A or B) for mutually exclusive events, not P(A and B).
**mistake_e:** Added and subtracted: 1/3 + 1/4 − something = 5/12.
**common_trap:** Adding the probabilities (7/12) instead of multiplying. Addition gives P(A or B) for mutually exclusive events; multiplication gives P(A and B) for independent events.
**takeaway:** Independence → multiply: P(A ∩ B) = P(A)·P(B). "And" for independent events = multiply. "Or" for mutually exclusive events = add.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q34
**difficulty:** Medium
**type:** Problem Solving
**topic:** Weighted Average

A student scored an average of 84 on her first 5 tests and an average of 76 on her next 3 tests. What is her average score across all 8 tests?

- A) 78
- B) 79
- C) 80
- D) 81
- E) 82

**answer:** D
**fastest_path:** (5·84 + 3·76)/8 = (420+228)/8 = 648/8 = 81.
**explanation:** Total of first 5: 5 × 84 = 420. Total of next 3: 3 × 76 = 228. Combined: 648 / 8 = 81.
**mistake_a:** Slip → 78.
**mistake_b:** Slip → 79.
**mistake_c:** Took arithmetic mean: (84+76)/2 = 80. This is wrong because the groups are unequal (5 tests vs 3 tests); the first group has more weight.
**mistake_e:** Slip → 82.
**common_trap:** Averaging 84 and 76 directly (= 80) — the two groups are unequal in size, so the larger group (5 tests) pulls the average above the midpoint.
**takeaway:** When merging groups of different sizes, compute weighted sum first, then divide by total count. Never average the group means directly unless groups are equal-sized.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q35
**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations with Restrictions

How many 4-digit numbers can be formed using the digits {1, 2, 3, 4, 5} if no digit may be repeated and the number must be greater than 3000?

- A) 24
- B) 48
- C) 60
- D) 72
- E) 120

**answer:** D
**fastest_path:** Leading digit ∈ {3,4,5} → 3 choices. Remaining 3 positions from 4 remaining digits: P(4,3) = 24. Total = 3·24 = 72.
**explanation:** For the number to exceed 3000, the thousands digit must be 3, 4, or 5 — giving 3 choices. The remaining three positions are filled from the 4 unused digits in order: 4 × 3 × 2 = 24 ways. Total = 3 × 24 = 72.
**mistake_a:** Computed P(4,3) = 24 — forgot to multiply by the 3 leading-digit choices.
**mistake_b:** Computed 2 × 24 = 48 (used only {4,5} as valid leading digits, excluding 3).
**mistake_c:** Slip → 60.
**mistake_e:** Computed 5! = 120 (no restriction at all).
**common_trap:** Forgetting to include 3 as a valid leading digit (only counting {4,5}), or computing P(5,4) with no restriction.
**takeaway:** Apply position-by-position restrictions first (leading digit here), then multiply by the ordered choices for remaining positions.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q36
**difficulty:** Medium
**type:** Problem Solving
**topic:** Three-Set Inclusion-Exclusion

Of 100 students surveyed, 55 study Math, 40 study Science, and 35 study English. Among these, 20 study both Math and Science, 15 study both Math and English, and 10 study both Science and English. If 5 students study all three subjects, how many students study none of the three?

- A) 5
- B) 10
- C) 15
- D) 20
- E) 25

**answer:** B
**fastest_path:** |M∪S∪E| = 55+40+35−20−15−10+5 = 90. None = 100−90 = 10.
**explanation:** Three-set inclusion-exclusion: |M∪S∪E| = |M|+|S|+|E| − |M∩S| − |M∩E| − |S∩E| + |M∩S∩E| = 55+40+35−20−15−10+5 = 90. Students studying none = 100−90 = 10.
**mistake_a:** Forgot to add back the all-three term (+5) → 85; none = 15 → slipped to 5.
**mistake_c:** Forgot to add back the all-three term → 85; none = 15.
**mistake_d:** Subtracted the all-three term instead of adding: 55+40+35−20−15−10−5 = 80; none = 20.
**mistake_e:** Slip → 25.
**common_trap:** Forgetting to add back the all-three intersection (|M∩S∩E|) — after subtracting all pairwise intersections, the triple-overlap has been subtracted three times and added back zero, so it must be restored once.
**takeaway:** Three-set IE: |A∪B∪C| = |A|+|B|+|C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|. The triple term gets *added* back.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q37
**difficulty:** Medium
**type:** Problem Solving
**topic:** Expected Value — Net Gain

A lottery ticket costs $2. The ticket wins $8 with probability 1/5 and wins nothing otherwise. What is the expected net gain (or loss) per ticket?

- A) -$1.60
- B) -$0.40
- C) $0.00
- D) $0.40
- E) $1.60

**answer:** B
**fastest_path:** E(net) = (1/5)(8−2) + (4/5)(0−2) = 6/5 − 8/5 = −2/5 = −$0.40.
**explanation:** Net gain if win: $8 − $2 = $6. Net gain if lose: $0 − $2 = −$2. E = (1/5)(6) + (4/5)(−2) = 1.20 − 1.60 = −$0.40. On average, each ticket loses $0.40.
**mistake_a:** Used gross prize instead of net: (1/5)(8) + (4/5)(0) = $1.60 and subtracted cost wrongly → −$1.60.
**mistake_c:** Computed expected gross prize: (1/5)(8) = $1.60 and rounded to "break even" → $0.
**mistake_d:** Reversed sign → +$0.40.
**mistake_e:** Computed gross expected value: (1/5)(8) = $1.60 without subtracting the ticket cost.
**common_trap:** Computing expected *gross* prize ($1.60) and forgetting to subtract the $2 ticket cost — the question asks for net gain.
**takeaway:** Expected *net* gain = E(prize) − cost per ticket, or equivalently Σ(net outcome × probability). Always subtract sunk costs when computing net.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q38
**difficulty:** Medium
**type:** Problem Solving
**topic:** Interquartile Range — Even-Sized Set

What is the interquartile range (IQR) of the data set {4, 8, 12, 16, 20, 24, 28, 32}?

- A) 12
- B) 14
- C) 16
- D) 20
- E) 28

**answer:** C
**fastest_path:** Lower half {4,8,12,16} → Q1 = (8+12)/2 = 10. Upper half {20,24,28,32} → Q3 = (24+28)/2 = 26. IQR = 16.
**explanation:** With 8 values (even count), split evenly: lower half {4,8,12,16}, upper half {20,24,28,32}. Q1 = median of lower half = (8+12)/2 = 10. Q3 = median of upper half = (24+28)/2 = 26. IQR = 26 − 10 = 16.
**mistake_a:** Computed Q1 and Q3 as the 2nd and 6th values (positional slip): 8 and 20 → IQR = 12.
**mistake_b:** Slip → 14.
**mistake_d:** Used 3rd and 7th values (wrong quartile positions): 12 and 28 → IQR = 16... slip to 20 from wrong positions.
**mistake_e:** Computed full range: 32 − 4 = 28.
**common_trap:** Using the full range (32−4 = 28) or picking individual data points as Q1/Q3 rather than averaging adjacent middle values.
**takeaway:** For even-count sets, split into two equal halves; Q1 = median of lower half, Q3 = median of upper half. Each half's median requires averaging its two middle values.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q39
**difficulty:** Medium
**type:** Problem Solving
**topic:** Conditional Probability

In a class, 60% of students passed the midterm and 45% of students passed both the midterm and the final. Given that a student passed the midterm, what is the probability that the student also passed the final?

- A) 1/4
- B) 1/3
- C) 3/5
- D) 3/4
- E) 4/5

**answer:** D
**fastest_path:** P(Final | Midterm) = P(both) / P(Midterm) = 0.45/0.60 = 3/4.
**explanation:** Conditional probability formula: P(F | M) = P(F ∩ M) / P(M) = 0.45/0.60 = 3/4.
**mistake_a:** Computed P(M) − P(both) = 0.15 → interpreted as 1/4 in some form.
**mistake_b:** Slip → 1/3.
**mistake_c:** Computed P(both)/P(F) = 0.45/0.75 — assumed P(F) = 75% without being told.
**mistake_e:** Inverted: P(Midterm | Final) instead of P(Final | Midterm).
**common_trap:** Using P(both)/P(final) instead of P(both)/P(midterm) — the *given* event always goes in the denominator.
**takeaway:** P(B | A) = P(A ∩ B) / P(A). The conditioning event (given) goes in the denominator. Identify what is *given* and what is *asked*.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations vs Combinations

A student council must fill three distinct positions — president, vice president, and secretary — from 8 candidates. How many different ways can these positions be filled?

- A) 24
- B) 56
- C) 168
- D) 336
- E) 512

**answer:** D
**fastest_path:** Distinct roles → permutation: P(8,3) = 8·7·6 = 336.
**explanation:** The three positions are distinct (president ≠ vice president ≠ secretary), so order matters. P(8,3) = 8 × 7 × 6 = 336.
**mistake_a:** Slip → 24.
**mistake_b:** Computed C(8,3) = 56 — treated as an unordered committee, ignoring that the three roles are different.
**mistake_c:** Slip → 168.
**mistake_e:** Computed 8³ = 512 — allowed the same person to hold multiple positions.
**common_trap:** Computing C(8,3) = 56 (combinations) instead of P(8,3) = 336 (permutations). Combinations are used when there are no distinct roles — here, president and vice president are different positions, so order matters.
**takeaway:** When positions are labeled/distinct, use permutations. When the group is unordered (like a committee with no titles), use combinations. Ask: "Does it matter *which* slot each person fills?"
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q41
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Weighted Average — Two Groups

A company has two divisions, A and B. What is the overall average annual salary (in dollars) of all employees in the company?

(1) Division A employs three times as many people as Division B, and Division A's average salary is $60,000.
(2) Division B's average salary is $75,000 and Division B employs 15 people.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** (1) Missing B's avg salary. (2) Missing A's avg salary and size. Together: B=15, A=45, combine → $63,750. Sufficient.
**explanation:** Statement (1): Division A is 3× as large as B, and A averages $60k. Without B's average, can't compute overall. Insufficient. Statement (2): B's average is $75k and B has 15 people. Without A's average or headcount, can't compute overall. Insufficient. Together: B has 15 employees → A has 45. Overall = (45·60,000 + 15·75,000)/60 = (2,700,000 + 1,125,000)/60 = 3,825,000/60 = $63,750. Sufficient. Answer: C.
**mistake_a:** Treated only (1) as sufficient — missing B's salary.
**mistake_b:** Treated only (2) as sufficient — missing A's salary and size.
**mistake_d:** Treated each alone as sufficient.
**mistake_e:** Concluded both together insufficient.
**common_trap:** Statement (1) gives a ratio and one group's mean, which feels like "enough" — but the overall average also requires the *other* group's mean, not just the size ratio.
**takeaway:** Overall weighted average requires *both* group sizes and *both* group means. A size ratio alone is insufficient without both group averages.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q42
**difficulty:** Hard
**type:** Problem Solving
**topic:** Circular Permutations

In how many distinct ways can 5 people be seated around a circular table if rotations of the same arrangement are considered identical?

- A) 10
- B) 12
- C) 20
- D) 24
- E) 120

**answer:** D
**fastest_path:** Circular: (5−1)! = 4! = 24.
**explanation:** In a circular arrangement, one person is held fixed (to eliminate identical rotations), and the remaining 4 are arranged in the other seats: 4! = 4 × 3 × 2 × 1 = 24.
**mistake_a:** Computed C(5,2) = 10 (used combination formula — unrelated).
**mistake_b:** Computed 4!/2 = 12 (incorrectly divided by 2 for reflections — only applicable when reflections are also indistinct, which is not stated here).
**mistake_c:** Slip → 20.
**mistake_e:** Computed 5! = 120 (linear permutations — forgot circular correction).
**common_trap:** Using 5! = 120 (linear) instead of (5−1)! = 24 (circular). In a circle, seating A-B-C-D-E and B-C-D-E-A are the same arrangement — there are 5 identical rotations per distinct arrangement.
**takeaway:** Circular permutations of n distinct objects = (n−1)!. Fix one person, arrange the remaining (n−1) linearly.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q43
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability — Selecting from Mixed Groups

A batch contains 12 products, of which 3 are defective and 9 are non-defective. If 4 products are selected at random without replacement, what is the probability that exactly 2 of the selected products are defective?

- A) 1/11
- B) 3/22
- C) 12/55
- D) 4/15
- E) 18/55

**answer:** C
**fastest_path:** C(3,2)·C(9,2)/C(12,4) = 3·36/495 = 108/495 = 12/55.
**explanation:** Choose 2 defective from 3: C(3,2) = 3. Choose 2 non-defective from 9: C(9,2) = 36. Choose any 4 from 12: C(12,4) = 495. P = (3·36)/495 = 108/495 = 12/55.
**mistake_a:** Computed C(3,2)/C(12,4) = 3/495 = 1/165, confused with 1/11 — forgot to multiply by C(9,2).
**mistake_b:** Slip in simplification → 3/22.
**mistake_d:** Used with-replacement: (3/12)²·(9/12)² × C(4,2) = (1/4)(9/16)·6 = slightly off → 4/15.
**mistake_e:** Slip in C(9,2) calculation → 18/55.
**common_trap:** Forgetting to multiply by the non-defective term C(9,2) — selecting exactly 2 defective requires simultaneously choosing the 2 non-defective items that fill the remaining spots.
**takeaway:** "Exactly k from group X" in a without-replacement draw = C(X,k)·C(rest, n−k)/C(total, n). Both the "wanted" and "unwanted" selections contribute to the count.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q44
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Standard Deviation — Sufficient Conditions

The mean of a set of 5 numbers is 12. Is the standard deviation of the set greater than 4?

(1) The smallest number in the set is 6 and the largest is 18.
(2) All 5 numbers are distinct integers.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** (1) alone: {6,12,12,12,18} has SD≈3.8 (No); {6,6,18,18,12} has SD≈5.4 (Yes). Insufficient. (2) alone: {10,11,12,13,14} SD≈1.4 (No); {1,5,12,19,23} SD≈8 (Yes). Insufficient. Together: {6,9,12,15,18} all distinct, SD=√18≈4.24 (Yes); {6,10,12,14,18} all distinct, SD=4 (No, not strictly >4). Still insufficient → E.
**explanation:** Statement (1): {6,12,12,12,18} → deviations −6,0,0,0,+6 → SD=√(72/5)≈3.8 (No). {6,6,18,18,12} → deviations −6,−6,+6,+6,0 → SD=√(144/5)≈5.4 (Yes). Insufficient. Statement (2): {10,11,12,13,14} → SD=√2≈1.4 (No). {1,5,12,19,23} → SD≈8.2 (Yes). Insufficient. Together: {6,9,12,15,18} — all distinct integers, min=6, max=18, mean=12 → SD=√18≈4.24 (Yes). {6,10,12,14,18} — all distinct integers, min=6, max=18, mean=12 → SD=√16=4 (No, not strictly greater). Both are valid; answer varies → Insufficient. E.
**mistake_a:** Assumed range pins down SD — it doesn't (interior distribution can vary).
**mistake_b:** Assumed distinct integers constrains SD enough — multiple SD values remain possible.
**mistake_c:** Assumed both together fix SD — the key counterexample is {6,10,12,14,18} with SD exactly 4 (not greater).
**mistake_d:** Assumed each alone is sufficient.
**common_trap:** Assuming that range + distinctness nails down standard deviation. Both {6,9,12,15,18} and {6,10,12,14,18} satisfy all stated constraints yet straddle the SD=4 boundary.
**takeaway:** Range controls the extreme spread but not the interior distribution. SD depends on *how* all values are distributed around the mean, not just the endpoints.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q45
**difficulty:** Hard
**type:** Problem Solving
**topic:** Binomial Probability — At Least

A fair die is rolled 3 times. What is the probability that at least 2 of the rolls show a number greater than 4?

- A) 1/27
- B) 7/27
- C) 2/9
- D) 10/27
- E) 1/3

**answer:** B
**fastest_path:** P(>4 on one roll) = 2/6 = 1/3. P(exactly 2) = C(3,2)(1/3)²(2/3) = 6/27. P(all 3) = (1/3)³ = 1/27. Total = 7/27.
**explanation:** Numbers greater than 4 on a standard die: {5, 6} → P = 2/6 = 1/3. P(≤ 4) = 2/3. P(exactly 2 rolls > 4) = C(3,2)·(1/3)²·(2/3) = 3·(1/9)·(2/3) = 6/27. P(all 3 rolls > 4) = (1/3)³ = 1/27. P(at least 2) = 6/27 + 1/27 = 7/27.
**mistake_a:** Computed only P(all 3): (1/3)³ = 1/27 — forgot the "exactly 2" case.
**mistake_c:** Computed P(exactly 2) only = 6/27 = 2/9 — forgot to add P(all 3).
**mistake_d:** Used complement incorrectly: 1 − P(0 or 1 success) with arithmetic slip → 10/27.
**mistake_e:** Estimated P ≈ 1/3 from P(> 4 on one roll).
**common_trap:** Computing P(exactly 2) without adding P(exactly 3). "At least 2" means 2 OR 3 — don't stop at the boundary case.
**takeaway:** "At least k" = P(exactly k) + P(exactly k+1) + … Alternatively, use the complement: P(at least 2) = 1 − P(0) − P(1). Always check whether you've covered all qualifying cases.

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
**mistake_a:** Took the difference of means (18 − 15 = 3) and multiplied by the remaining count (3 × 4 = 12), then subtracted from a wrong total to get 20. Mean shifts don't work this way; only sum differences do.
**mistake_b:** Averaged the two means: (18 + 15)/2 = 16.5, then used 4 × 16.5 = 66 as the "remaining sum," getting 90 − 66 = 24. The average of means is not the sum of the remaining values.
**mistake_c:** Arithmetic slip computing the known sum of 5 (90) or the remaining sum of 4 (60) — produced 28 from some wrong subtraction.
**mistake_e:** Added the two means: 18 + 15 = 33. A tempting trap when two averages appear in the same problem.
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
**mistake_c:** Counted only red balls (4/12 = 1/3) — forgot to add blue to the "not green" total.
**mistake_d:** Counted 8 non-green marbles: likely misread the blue count as 4 instead of 3, giving (4+4)/12 = 8/12 = 2/3.
**mistake_e:** Computed 12 − 3 = 9, treating the blue count (3) as the quantity to subtract from the total rather than adding it to red. Got 9/12 = 3/4.
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
**mistake_c:** Computed the arithmetic mean instead of the median: (3+7+7+10+14+18+21)/7 = 80/7 ≈ 11.4, rounded down to 11. Mean and median are different — sorting is required for the median.
**mistake_d:** Misidentified the median position as the 5th element (14) instead of the 4th. For 7 elements, median = position (7+1)/2 = 4.
**mistake_e:** Counted to the 6th element (18) — one position too high. Possibly used position n/2 + 1 = 4.5, rounded up to 5 or 6.
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
**mistake_a:** Computed C(7,2) = 21 — used k = 2 instead of k = 3. Possibly misread "3-person committee" as "choose 2" or thought of pairs.
**mistake_c:** Computed P(7,2) = 7 × 6 = 42 (ordered pairs), or multiplied C(7,2) × 2. Neither removes the 3! ordering that combinations require.
**mistake_d:** Used n = 10 instead of n = 7: C(10,3) = 120. Inflated the group size without justification.
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
**mistake_c:** Counted 6 ordered pairs instead of 5 — likely double-counted (4,4) as two distinct outcomes, giving 6/36 = 1/6.
**mistake_d:** Listed 7 ordered pairs by including (1,7) and (7,1) — forgetting a standard die only has faces 1–6, making 7 impossible.
**mistake_e:** Overcounted by including multiple impossible pairs like (1,7), (7,1), (0,8), (8,0), arriving at 9 favorable outcomes instead of 5.
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
**mistake_a:** Saw "equal mean" and concluded everything was the same — ignored the different spreads. Two sets can share a mean yet have very different standard deviations.
**mistake_c:** Noticed Set B's elements cluster more tightly (5-unit gaps vs. 10-unit gaps in A) but concluded that "tighter clustering = greater SD." It's the opposite: tighter = smaller SD.
**mistake_d:** Assumed Set A has a greater mean because its range (10–50) extends lower than B's (20–40), and "starts lower so must be higher overall." Both sums equal 150; both means equal 30.
**mistake_e:** Assumed Set B has a greater mean because its minimum (20) is higher than A's minimum (10). Minimum has no direct bearing on the mean.
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
**mistake_a:** Computed Case 2 with too few tens options — e.g., 8 × 5 = 40 (only allowed digits 0–4 in the tens position, forgetting 6–9 are still valid): 72 + 40 = 112.
**mistake_b:** Computed Case 2 with 7 tens options instead of 8 — perhaps forgot to exclude both the 5 (already used as units) and the hundreds digit: 8 × 7 = 56, giving 72 + 56 = 128.
**mistake_d:** Used 9 × 8 = 72 for Case 2 as well — forgot that the hundreds digit cannot be 5 (already used as the units digit), giving 72 + 72 = 144.
**mistake_e:** Allowed 0 as the leading digit in Case 1 (treated 0X0 as a valid 3-digit number): 10 × 8 = 80 instead of 9 × 8 = 72, giving 80 + 72 = 152.
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
**mistake_c:** Miscounted C(3,2) as 2 instead of 3 (missed one of the three blue-pair combinations), giving P(both blue) = 2/28 = 1/14, so P(at least 1 red) = 13/14.
**mistake_d:** Computed P(exactly 1 red) = C(5,1)·C(3,1)/C(8,2) = 15/28 — correctly identified one scenario but missed P(exactly 2 red). "At least one" includes both exactly-1 and exactly-2 red.
**mistake_e:** Computed P(both blue) = 1/28 from some miscalculation (e.g., treating (B,B) as a single unordered outcome among 28 unordered pairs, then mis-dividing), giving 27/28.
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
**mistake_b:** Arithmetic slip computing the known sum: e.g., added 4+7+9+12 = 34 instead of 32, giving 45 − 34 = 11. Always recheck the sum of the given values.
**mistake_c:** Bubbled 12 — one of the values already in the set. Possibly stopped after computing the sum without completing the subtraction.
**mistake_e:** Used n = 4 instead of n = 5: 4 × 9 = 36, then 36 − 32 = 4 (too small) — or dropped one given value, computing known sum as 30, giving 45 − 30 = 15.
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
**mistake_b:** Computed a + b + d = 42 correctly but then set up d = 25 (too large) or used wrong constraints, arriving at a = 5 from a miscalculated residual.
**mistake_d:** Set b = a (ignored "distinct") so 2a + d = 42; with d = 19: 2a = 23 → a = 11.5, then rounded or shifted → 12. Distinctness requires b ≥ a + 1.
**mistake_e:** Bubbled the median (22) minus 5, or derived a from d = 19 with a wrong minimum for b: e.g., set b = 18 (just below median), then a = 42 − 19 − 18 = 5... wait that gives 5, not 17. Or maybe they confused the problem with asking for d instead of a, getting d = 17 or some other value.
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
**mistake_a:** Multiplied one group's total by the other's without applying combinations: 4 × 5 = 20. That ignores the "choose 2 from each" structure entirely.
**mistake_b:** Applied the women formula (C(4,2) = 6) to the men group as well, treating both pools as size 4: 6 × 6 = 36 instead of 10 × 6 = 60.
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
**mistake_b:** Computed new_mean + 1 = 25 + 1 = 26 — added 1 instead of n × Δmean = 10 × 1 = 10. The mean increase of 1 must be spread across all 10 original values, so the new element must contribute 10 extra units.
**mistake_c:** Used a wrong old sum: 10 × 24.5 = 245 instead of 10 × 24 = 240, giving 275 − 245 = 30. Or treated n × Δmean as 5 (halved it) rather than 10.
**mistake_e:** Added the new count instead of n × Δmean: 25 + 11 = 36 — a confused formula that mixes mean with count.
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
**mistake_a:** Used (7/12)(1/2) = 7/24 — treated the second draw as having probability 1/2, independent of the first. Without replacement, the second probability is 6/11, not 1/2.
**mistake_c:** Computed P(first black) = 7/12 and then rounded or halved, arriving near 1/2. The second draw is conditional — you can't ignore it.
**mistake_d:** Computed (7/12)(5/11) = 35/132 — used 5 black remaining after a non-black first draw, rather than 6 black remaining after a black first draw. The condition is P(B₂|B₁), not P(B₂|B₁ᶜ).
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
**explanation:** Two-step reasoning: (1) How many distinct ways can exactly 3 of 4 flips be heads? C(4,3) = 4 (the 4 arrangements are HHHT, HHTH, HTHH, THHH). (2) Each specific sequence has probability (1/2)⁴ = 1/16. Multiply: 4 × 1/16 = 4/16 = 1/4. This is the binomial formula: P = C(n,k)/2^n when p = 1/2.
**mistake_a:** Computed (1/2)³ = 1/8 — calculated the probability of one specific sequence (e.g., HHHT) without multiplying by C(4,3) = 4 to count all arrangements. One sequence ≠ all sequences.
**mistake_b:** Counted C(4,3) = 3 instead of 4 — missed one of the four arrangements (HHHT, HHTH, HTHH, THHH): 3/16.
**mistake_d:** Computed P(at least 3 heads) = P(3) + P(4) = 4/16 + 1/16 = 5/16 — conflated "exactly 3" with "at least 3." The question specifies exactly.
**mistake_e:** Computed P(exactly 2 heads in 4 flips) = C(4,2)/2⁴ = 6/16 = 3/8 — used k = 2 instead of k = 3. Or divided by 2³ instead of 2⁴ (wrong denominator for 4 flips).
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
**mistake_a:** Set d = 22 = c (violates distinctness — d must be strictly greater than the median).
**mistake_c:** Required a and b to be consecutive integers unnecessarily. With b = a + 1: 2a + 1 = 43 − d. For d = 23: a = 9.5 (non-integer) → rejected. For d = 24: a = 9, b = 10. But consecutive isn't required — (1, 19) with d = 23 is perfectly valid.
**mistake_d:** Applied extra restrictions (e.g., required a ≥ 2 and b ≥ a + 2) that the problem doesn't impose. Distinctness only requires a ≠ b, not a specific gap.
**mistake_e:** Imposed still-stricter constraints (e.g., a ≥ 3, b ≥ a + 3), pushing d higher. The only constraints: a, b are distinct positive integers less than 22.
**common_trap:** Setting d = c = 22 (violates distinctness) or over-constraining a and b, both of which push the minimum d higher than necessary.
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
**mistake_b:** Scaled by √3 instead of 3: 2√3 ≈ 3.46, rounded to 3. SD scales by the multiplier itself, not its square root. (Variance scales by the square — that's where √ confusion often enters.)
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
**mistake_c:** Used denominator 6 for the second draw — thought only the remaining non-red marbles (3 green + 3 blue = 6) were still in play: (4/10)(3/6) = 12/60 = 1/5. Wrong; all 9 remaining marbles are in the bag.
**mistake_d:** Multiplied P(red) × P(non-red): (4/10)(6/10) = 24/100 = 6/25 — computed the probability of drawing one red and one non-red, not two reds. A classic "AND" setup error.
**mistake_e:** Computed only the first draw: 4/10 = 2/5 — forgot to multiply by the conditional probability of the second draw being red.
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
**explanation:** Bayes: P(A|B) = P(A∩B)/P(B). Draw a two-branch tree: Branch P has probability 0.6, then defect probability 0.03 → joint probability 0.018. Branch Q has probability 0.4, then defect probability 0.05 → joint probability 0.020. P(D) = 0.018 + 0.020 = 0.038. P(P|D) = 0.018/0.038 = 18/38 = 9/19. The key insight: P produces *more* of the output (60% vs 40%) but has a lower defect rate (3% vs 5%). These two effects nearly cancel — P's defective contribution is 18 vs Q's 20, despite P producing 50% more total product.
**mistake_a:** Used only P's defect rate (3%) as the numerator without weighting by P's production proportion (60%). The raw defect rate is not a probability without the prior — got 0.03/(some wrong total) = 3/19.
**mistake_b:** Swapped production proportions: used Q's share (40%) with P's defect rate (3%): 0.4 × 0.03 = 0.012 instead of the correct 0.6 × 0.03 = 0.018. Then 0.012/0.038 = 6/19.
**mistake_d:** Computed P(Q|D) instead of P(P|D) — answered "what fraction of defectives came from Factory Q" (0.020/0.038 = 10/19) rather than Factory P. The Bayes calculation is correct but the factory is wrong.
**mistake_e:** Used the wrong defect rate for Factory P — 4% instead of 3%: 0.6 × 0.04 = 0.024, giving 24/38 = 12/19. A 1-percentage-point reading error cascades through the whole calculation.
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

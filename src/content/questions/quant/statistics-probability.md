---
section: Quant
topic: Statistics & Probability
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Mean

The average (arithmetic mean) of 6 numbers is 15. After one of the numbers is removed, the average of the remaining 5 is 13. What is the value of the number that was removed?

- A) 2
- B) 10
- C) 13
- D) 15
- E) 25

**answer:** E
**fastest_path:** Sum drops from 6·15 = 90 to 5·13 = 65. Removed = 90 − 65 = 25.
**explanation:** Sum of 6 = 6 × 15 = 90. Sum of 5 = 5 × 13 = 65. Removed = 90 − 65 = 25.
**mistake_a:** Subtracted the two means: 15 − 13 = 2. This ignores the counts — the removed number must account for the full sum difference, not just the average drop.
**mistake_b:** Multiplied the mean difference by the smaller (remaining) count: 5 × (15 − 13) = 10. Used the wrong count. The old sum is 6 × 15, new sum is 5 × 13; each count belongs to its own mean.
**mistake_c:** Bubbled the new mean (13) — answered the given information instead of solving for the removed value.
**mistake_d:** Bubbled the original mean (15) — same error in the other direction.
**common_trap:** Computing the mean difference (15 − 13 = 2) and treating that as the removed value. Always work in sums, not in averages.
**takeaway:** Sum = mean × count. For mean problems, compute and subtract sums: removed = old_sum − new_sum = 6 × 15 − 5 × 13 = 25.
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
**topic:** Weighted Average

A class of 25 students has a mean test score of 72. The mean score of the 10 boys in the class is 60. What is the mean score of the 15 girls in the class?

- A) 60
- B) 72
- C) 76
- D) 80
- E) 84

**answer:** D
**fastest_path:** Total sum = 25 × 72 = 1800. Boys sum = 10 × 60 = 600. Girls sum = 1200. Girls mean = 1200/15 = 80.
**explanation:** Girls sum = total sum − boys sum = 1800 − 600 = 1200. Girls mean = 1200/15 = 80.
**mistake_a:** Bubbled the boys' mean (60) — answered the given information rather than the unknown.
**mistake_b:** Bubbled the class mean (72) — assumed the girls' mean equals the overall average without computing the boys' pull-down effect.
**mistake_c:** Used 11 boys instead of the stated 10: 25 × 72 − 11 × 60 = 1800 − 660 = 1140, then 1140/15 = 76. Misread or miscounted the group size; always re-read which group's count was given.
**mistake_e:** Applied the symmetric-deviation fallacy: boys are 12 below the class mean (72 − 60 = 12), so assumed girls must be 12 above: 72 + 12 = 84. This treats the problem as a balance beam with equal arms, but the groups are different sizes (15 girls vs 10 boys), so the girls' deviation from the mean is proportionally smaller.
**common_trap:** Assuming "boys are X below mean → girls are X above mean." This ignores group sizes and is only true when both groups are equal in size.
**takeaway:** Weighted average: total_sum = group₁_sum + group₂_sum. Always work with sums (mean × count), not with shortcuts that assume equal group sizes.
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
**mistake_c:** Listed the 6 ordered pairs for sum = 7 instead of sum = 8. Sum = 7 has (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 pairs; sum = 8 has one fewer because (4,4) replaces two asymmetric pairs. Off by one on the target sum.
**mistake_d:** Counted 7 pairs — typically by including impossible pairs such as (1,7) and (7,1), forgetting that standard dice show only 1 through 6. Always check that both die values are in range before including a pair.
**mistake_e:** Counted 9 pairs — a systematic listing error often caused by including pairs that belong to adjacent sums or by tallying the same pair multiple times. Re-list from scratch: (2,6),(3,5),(4,4),(5,3),(6,2) — exactly 5.
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
**mistake_c:** Concluded Set B has the greater SD by reasoning that B's values are "packed tighter" — inverting the direction. Tighter packing means *smaller* deviations from the mean, hence *smaller* SD. B's deviations are ±10 and ±5; A's are ±20 and ±10. Larger deviations → larger SD. Denser clustering always means smaller spread.
**mistake_d:** Mis-computed one or both means and concluded the sets differ. Verify: Mean(A) = (10+20+30+40+50)/5 = 150/5 = 30; Mean(B) = (20+25+30+35+40)/5 = 150/5 = 30. Both equal 30. Visual inspection of "bigger-looking numbers" can mislead — always sum explicitly.
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
**mistake_a:** Applied Case 2's restriction to Case 1 as well — used 8×7 = 56 for Case 1 (incorrectly excluded both 0 and 5 from the tens digit) and 8×7 = 56 for Case 2, giving 112. In Case 1, the tens digit can be 0; the only excluded digit is the hundreds digit, leaving 8 choices. Case 1 = 9×8 = 72.
**mistake_b:** Treated both cases symmetrically, using 8×8 = 64 for each: 64+64 = 128. Forgot that Case 1 (ends in 0) has 9 hundreds choices (1–9), not 8, since 0 is already used as the units digit, not a competing hundreds digit.
**mistake_d:** Used 9×8 = 72 for both cases without adjusting Case 2 for the fact that the hundreds digit cannot be 5: 72+72 = 144. In Case 2, the hundreds digit excludes both leading-zero (can't start with 0) and the 5 already placed in the units digit — leaving 8 choices, not 9.
**mistake_e:** Included a third case or overcounted within a case, pushing the total above the correct 136. There are only two valid unit-digit choices for divisibility by 5: 0 and 5.
**common_trap:** Treating both cases identically — Case 2 forbids the hundreds digit = 5 (already used), giving only 8 hundreds choices, not 9.
**takeaway:** Split by *cases* when a position has limited choices. Adjust subsequent positions for already-used digits. Re-check each case independently.
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
**mistake_a:** Bubbled P(red on a single draw) = 5/8 — used the single-draw probability and forgot there are two draws.
**mistake_c:** Attempted direct counting of P(exactly 1 R) + P(exactly 2 R) but made a combining-fractions error along the way, landing near 26/28 = 13/14. The complement avoids this multi-case arithmetic entirely.
**mistake_d:** Computed P(exactly 1 red) = C(5,1)·C(3,1)/C(8,2) = 15/28. This counts only the "exactly one" case. The question asks for *at least one*, which also includes P(exactly 2 red). Use the complement: 1 − P(both blue) = 25/28.
**mistake_e:** Found P(both blue) = 3/28 correctly but made an arithmetic slip on the complement: wrote 1 − 3/28 = 27/28 instead of 25/28. Double-check: 28/28 − 3/28 = 25/28, not 27/28.
**common_trap:** Computing P(exactly 1) and treating it as P(at least 1). These differ by the P(exactly 2) term.
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
**topic:** Interquartile Range

The exam scores of 8 students, listed in increasing order, are: 52, 58, 64, 70, 76, 82, 88, 94. What is the interquartile range (IQR) of this data set?

- A) 12
- B) 21
- C) 24
- D) 30
- E) 42

**answer:** C
**fastest_path:** Split 8 values in half. Q1 = median of lower 4 = (58+64)/2 = 61. Q3 = median of upper 4 = (82+88)/2 = 85. IQR = 85 − 61 = 24.
**explanation:** For an 8-value ordered data set, split into two halves: lower {52, 58, 64, 70} and upper {76, 82, 88, 94}. Q1 = median of lower half = (58+64)/2 = 61. Q3 = median of upper half = (82+88)/2 = 85. IQR = Q3 − Q1 = 85 − 61 = 24. IQR measures the spread of the middle 50% of the data.
**mistake_a:** Computed Q3 − median of the full data set instead of Q3 − Q1: full median = (70+76)/2 = 73; then Q3 − 73 = 85 − 73 = 12. IQR is Q3 − Q1, not the distance from the dataset's center to Q3.
**mistake_b:** Halved the full range: (94−52)/2 = 42/2 = 21. IQR is not half the range — it is Q3 − Q1, the spread of the middle 50%. For this data Q1 = 61 and Q3 = 85, so IQR = 24, which differs from half the range.
**mistake_d:** Pulled the 2nd and 7th values directly as Q1 and Q3 without computing medians of the halves: 88 − 58 = 30. Q1 is the median of {52, 58, 64, 70}, which is (58+64)/2 = 61 — not just the 2nd value 58.
**mistake_e:** Computed the full range: 94 − 52 = 42. Range = max − min measures total spread; IQR = Q3 − Q1 measures the middle 50%. IQR is always ≤ range and is more robust to extreme values.
**common_trap:** Confusing IQR with the full range (E), or pulling raw ranked positions rather than computing medians of the lower and upper halves (D).
**takeaway:** IQR = Q3 − Q1. For n sorted values, Q1 is the median of the lower half and Q3 is the median of the upper half. IQR captures the spread of the middle 50% of the data.
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
**mistake_a:** Bubbled the new mean (25) — the new mean is the *result* of adding the 11th number, not the 11th number itself.
**mistake_b:** Added 1 (the mean increase) directly to the new mean: 25 + 1 = 26. The mean rose because the 11th value contributed 10 extra in total (one per existing element), not because it equaled 26.
**mistake_c:** Computed 11 × 25 = 275 correctly but used 10 × 24.5 = 245 as the old sum (averaging the old and new means): 275 − 245 = 30. The old sum is 10 × 24 = 240 exactly — use the actual old mean, not a midpoint.
**mistake_e:** Used the new count (11) instead of the original count (10) in the shortcut formula: new_value = new_mean + new_count × Δ = 25 + 11 × 1 = 36. The correct formula uses the *original* count: 25 + 10 × 1 = 35. The new value must compensate for the 10 original elements' shortfall, not 11.
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
**mistake_a:** Updated the numerator but not the denominator on the second draw: (7/12) × (6/12) = 42/144 = 7/24. Without replacement, both the number of black socks *and* the total count decrease. Second draw denominator is 11, not 12.
**mistake_c:** Estimated P ≈ 7/12 ≈ 1/2, using only the single-draw probability without multiplying by the second conditional probability. Joint probability requires both factors.
**mistake_d:** Treated the second draw as if a white (rather than black) sock had already been removed: (7/12) × (5/11) = 35/132. After drawing one black, the second draw has 6 black remaining out of 11 total — not 5 black.
**mistake_e:** Treated both draws as independent (with replacement): (7/12)² = 49/144. Without replacement, the second draw must account for the first outcome.
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
**difficulty:** Medium
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
**explanation:** Choose which 3 of 4 flips are heads: C(4,3) = 4. Each sequence has probability (1/2)⁴ = 1/16. Total = 4/16 = 1/4.
**mistake_a:** Computed (1/2)³ = 1/8 — used only the probability of 3 heads *in a row*, ignoring the number of distinct 3-head sequences. There are C(4,3) = 4 different orderings of 3H and 1T; each occurs with probability (1/2)⁴, giving 4/16 = 1/4.
**mistake_b:** Used 3 as the combinatorial factor instead of C(4,3) = 4: 3 × (1/2)⁴ = 3/16. The number of ways to choose 3 heads from 4 flips is C(4,3) = 4 (HHHT, HHTH, HTHH, THHH), not 3.
**mistake_d:** Counted 5 sequences instead of 4 — often by listing HHHT, HHTH, HTHH, THHH correctly and then mistakenly appending HHHH (which has 4 heads, not 3). Count carefully: C(4,3) = 4.
**mistake_e:** Applied a rough estimate (3/4 × 1/2 = 3/8) by conflating probabilities. Use the binomial formula: P(exactly k heads in n flips) = C(n,k) / 2ⁿ for a fair coin.
**common_trap:** Forgetting to count C(n,k) sequences and using only (1/2)^k.
**takeaway:** Exactly k heads in n fair flips: P = C(n,k)/2^n.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q19
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Conditional Counting

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
**topic:** Conditional Counting

A student must answer 5 out of 7 questions on an exam, but must answer at least 2 of the first 3 questions. How many different sets of 5 questions can the student choose?

- A) 18
- B) 20
- C) 21
- D) 24
- E) 28

**answer:** A
**fastest_path:** Cases: 2 of first 3 plus 3 of last 4 = 3·4 = 12. 3 of first 3 plus 2 of last 4 = 1·6 = 6. Total 18.
**explanation:** Case (a): exactly 2 of first 3, 3 of last 4: C(3,2)·C(4,3) = 3·4 = 12. Case (b): all 3 of first 3, 2 of last 4: C(3,3)·C(4,2) = 1·6 = 6. Total = 18. Or: complement: C(7,5) − [only 1 of first 3] = 21 − 3 = 18.
**mistake_b:** Computed Case (a) = 12 correctly, but inflated Case (b): used C(4,2) = 6 correctly but then mistakenly added an extra set, getting 8 instead of 6 for Case (b) → 12 + 8 = 20. Recheck: Case (b) = C(3,3) × C(4,2) = 1 × 6 = 6 exactly.
**mistake_c:** Computed C(7,5) = 21 directly without enforcing the "at least 2 of first 3" constraint. C(7,5) counts all possible 5-question sets regardless of which questions are chosen.
**mistake_d:** Tried the complement approach but mis-identified the disallowed sets: used C(3,2) × C(4,3) = 12 as "disallowed" instead of the actual "only 1 of first 3" = 3 sets. Complement: C(7,5) − C(3,1)·C(4,4) = 21 − 3·1 = 18.
**mistake_e:** Inflated C(7,5): computed (7·6·5)/(3·2·1) = 35 (that is C(7,3), not C(7,5)), then subtracted 7: 35 − 7 = 28. C(7,5) = C(7,2) = 7·6/2 = 21, not 35.
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
**mistake_a:** Treated SD as invariant under all transforms — concluded the SD stays at 2. Multiplying by 3 stretches the spread: SD(3x + 4) = 3·SD(x) = 6.
**mistake_b:** Divided the correct answer by 2 — perhaps misremembered the rule as SD(ax+b) = a·SD(x)/b, or confused the multiplier with something else. Nothing divides the SD here; the rule is SD(3x+4) = 3·2 = 6.
**mistake_d:** Applied the +4 additive shift as a scaling factor: 3·2 + 4 = 10. Additive constants shift the mean but leave spread unchanged. Only the multiplicative factor |a| scales the SD.
**mistake_e:** Mis-applied → 22.
**common_trap:** Adding the constant b to the SD. Only |a| (multiplier) affects SD.
**takeaway:** Linear transform y = ax + b: mean shifts by b, SD scales by |a|. Constant b doesn't affect spread.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability — Addition Rule

A card is drawn at random from a standard 52-card deck. What is the probability that the card is either a heart or a face card (jack, queen, or king)?

- A) 1/4
- B) 3/13
- C) 11/26
- D) 25/52
- E) 1/2

**answer:** C
**fastest_path:** P(H or F) = P(H) + P(F) − P(H and F) = 13/52 + 12/52 − 3/52 = 22/52 = 11/26.
**explanation:** Hearts and face cards overlap: J♥, Q♥, K♥ are both. Addition rule: P(H or F) = P(H) + P(F) − P(H and F) = 13/52 + 12/52 − 3/52 = 22/52 = 11/26. The 3 heart face cards are counted once in P(H) and once in P(F), so subtract them once to remove the double-count.
**mistake_a:** Used only P(heart) = 13/52 = 1/4, ignoring face cards entirely. The question asks for heart OR face card — both categories are favorable.
**mistake_b:** Used only P(face card) = 12/52 = 3/13, ignoring hearts entirely. Again, both categories count toward the favorable outcomes.
**mistake_d:** Added without subtracting the overlap: (13+12)/52 = 25/52. This double-counts J♥, Q♥, K♥ — each of those 3 cards was included once as a heart and once as a face card. Subtract P(H and F) = 3/52: 25/52 − 3/52 = 22/52 = 11/26.
**mistake_e:** Computed 26/52 = 1/2 — rounded up or miscounted. The exact favorable count is 13 + 12 − 3 = 22 cards, giving 22/52 = 11/26. Reaching 26 would require 4 extra favorable cards that do not exist.
**common_trap:** Forgetting to subtract the overlap (hearts that are also face cards). P(A or B) = P(A) + P(B) only when A and B are mutually exclusive — which they are not here.
**takeaway:** P(A or B) = P(A) + P(B) − P(A and B). For non-mutually-exclusive events, always subtract the intersection once. This is the probability form of inclusion-exclusion.
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
**mistake_a:** Used only the raw defect rates, ignoring production shares: P(D|P)/(P(D|P) + P(D|Q)) = 3/(3+5) = 3/8. Bayes requires weighting each branch by its prior probability (60% and 40%). Without the priors, the formula is incomplete.
**mistake_b:** Doubled the numerator by accident: 2·P(P∩D)/P(D) = 0.036/0.038 ≈ 6/... Alternatively, computed P(D|P)/P(D) = 0.03/0.038 = 15/19 and then halved. The numerator in Bayes is P(P)·P(D|P) = 0.6 × 0.03 = 0.018, not 0.036.
**mistake_d:** Computed P(Q|D) instead of P(P|D): 0.020/0.038 = 20/38 = 10/19. This is the probability the defective item came from Factory Q. Re-read: the question asks for Factory P.
**mistake_e:** Divided P(P) by [1 − P(D|Q)] instead of P(D): 0.60/0.95 = 12/19. Used the non-defective rate of Factory Q as the denominator rather than the total defect probability P(D) = 0.038.
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

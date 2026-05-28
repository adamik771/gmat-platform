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
- C) 12
- D) 14
- E) 18

**answer:** B
**fastest_path:** Sort → {3, 7, 7, 10, 14, 18, 21}. Middle (4th) = 10.
**explanation:** Sort the set: 3, 7, 7, 10, 14, 18, 21. With 7 elements (odd), median is the single middle value — the 4th — = 10. The duplicate 7 is real: it must appear twice in the sorted list.
**mistake_a:** Bubbled the *mode* (7) — the value that appears most often. Mode and median are different summary statistics. The mode is the most frequent value; the median is the positionally middle value.
**mistake_c:** Dropped the duplicate 7 when sorting, treating the set as having 6 distinct elements {3, 7, 10, 14, 18, 21}. With 6 (even) elements, computed the median as the average of the 3rd and 4th values: (10 + 14)/2 = 12. The original set has 7 elements (the 7 appears twice), so the median is the single 4th value = 10.
**mistake_d:** Chose the 5th sorted value (14) rather than the 4th. With 7 elements, position = (7 + 1)/2 = 4. Off-by-one in the position count.
**mistake_e:** Chose the 6th sorted value (18). Same positional error, but further off.
**common_trap:** Dropping the duplicate when sorting — the set has two 7s. Always count the original set size (here, 7) before computing the median position.
**takeaway:** Sort first, preserving duplicates. For n elements: median position = (n+1)/2 if n is odd (gives a single value); for even n, average positions n/2 and n/2 + 1. Never drop duplicates from the sorted list.
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
**difficulty:** Medium
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
**mistake_b:** Misread "12" as "14" in the set — known sum becomes 4 + 7 + 9 + 14 = 34, giving x = 45 − 34 = 11. A single misread digit shifts the answer by exactly that amount. Double-check every given value before computing.
**mistake_c:** Misread "12" as "13" in the set — known sum becomes 4 + 7 + 9 + 13 = 33, giving x = 45 − 33 = 12. Off by one in the sum, off by one in the answer. Re-read each digit carefully.
**mistake_e:** Misread "12" as "10" in the set — known sum becomes 4 + 7 + 9 + 10 = 30, giving x = 45 − 30 = 15. Misreading a "2" as a "0" is the most common single-digit slip. Verify all given values before substituting.
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
**explanation:** Three colors partition the jar: red (6), blue (4), yellow (2). P(red or yellow) = (6 + 2)/12 = 8/12 = 2/3. Since the three colors are mutually exclusive, their probabilities add directly — no inclusion-exclusion needed.
**mistake_a:** Computed P(blue) = 4/12 = 1/3 — answered for the one color *not* mentioned in the question. Re-read: the question asks for red OR yellow, not blue.
**mistake_b:** Counted only red marbles as favorable: 6/12 = 1/2. Omitted the 2 yellow marbles. The word "or" means the favorable set is the *union* of red and yellow: 6 + 2 = 8 marbles.
**mistake_c:** Misread the number of yellow marbles as 1 instead of 2, computing (6 + 1)/12 = 7/12. Re-read the problem — the jar contains 2 yellow marbles. Misreading a digit is the most common source of "almost right" errors on test day.
**mistake_e:** Misread the number of blue marbles as 3 instead of 4, then computed P(not blue) = (12 − 3)/12 = 9/12 = 3/4. Even though P(not blue) = P(red or yellow) for a three-color jar, the reading error on blue yields 9/12 instead of the correct 8/12.
**common_trap:** Forgetting one of the favorable colors (computing only P(red) = 1/2) or misreading a given count.
**takeaway:** P(A or B) = P(A) + P(B) when events are mutually exclusive. Count ALL favorable outcomes; re-read the given quantities before substituting.
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
**explanation:** Counting principle: independent choices multiply. A customer chooses 1 appetizer AND 1 entree AND 1 dessert — three independent choices. 4 × 6 × 3 = 72. Each appetizer pairs with each of the 6 entrees (24 pairs), and each of those 24 combinations pairs with each of the 3 desserts.
**mistake_a:** Added the counts instead of multiplying: 4 + 6 + 3 = 13. Addition applies when exactly one item is chosen from the full combined set ("one item from appetizers or entrees or desserts"). Multiplication applies when one is chosen from *each* category independently.
**mistake_b:** Multiplied only two of the three categories: 4 × 6 = 24. Stopped at appetizer × entree combinations and forgot to multiply by the 3 dessert options.
**mistake_c:** Added entrees and desserts first (6 + 3 = 9), then multiplied by appetizers: 4 × 9 = 36. Applied addition where multiplication belongs — mixed "or" logic (addition) with "and" logic (multiplication) for the second pair of choices.
**mistake_d:** Computed the sum of pairwise products: (4 × 6) + (4 × 3) + (6 × 3) = 24 + 12 + 18 = 54. This counts every two-course combination (appetizer+entree, appetizer+dessert, entree+dessert) — not three-course meals. Three-course meals require one choice from all three categories simultaneously: 4 × 6 × 3 = 72.
**common_trap:** Adding choices instead of multiplying — misreading "one of each" as "one from the combined pool."
**takeaway:** Independent "and" choices → multiply. "Or" choices from a single pool → add. For a three-course meal, the three selections are made independently, so multiply all three counts.
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
**mistake_a:** Concluded Set Y has a greater mean AND a greater SD, reasoning "every number in Y is larger, so the spread must be larger too." Mean(Y) does increase by 5 ✓, but SD measures spread relative to the new mean. Each deviation (y_i − 17) = (x_i + 5 − 17) = (x_i − 12), which equals the original deviation. The gaps between values are unchanged, so SD is unchanged.
**mistake_b:** Concluded SD(Y) < SD(X), reasoning "the values are shifted up, so relative to a larger scale they're more compressed." This conflates absolute SD (unchanged) with the coefficient of variation (SD ÷ mean), which does decrease. SD is measured in the same units as the data — adding 5 to every value does not compress or expand the gaps between them.
**mistake_d:** Concluded the two sets have the same mean, ignoring the +5 shift. Mean shifts by exactly the same constant: mean(Y) = (1/5)·Σ(x_i + 5) = mean(X) + 5 = 17 ≠ 12. Additive shifts move the mean; they do not leave it unchanged.
**mistake_e:** A double error — same wrong mean as D (ignoring the shift) and also concluded SD changes. Both parts are incorrect: mean(Y) = 17 (shifted up by 5) and SD(Y) = SD(X) (deviations from the new mean are identical to the old deviations).
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
**explanation:** Order a < b < c < d < e with c = 22 (median), e = 35 (max). Sum = 5 × 20 = 100. So a + b + d = 100 − 22 − 35 = 43. To minimize d, maximize a + b. Distinctness requires d > c, so d ≥ 23. Check d = 23: a + b = 20, e.g., (1, 19) — both distinct, both < 22 ✓. Verify: {1, 19, 22, 23, 35}, sum = 100 ✓.
**mistake_a:** Set d = c = 22 (same as the median). Violates distinctness — all five integers must be strictly different. d must be strictly greater than c: d ≥ 23.
**mistake_c:** Required a minimum gap of 2 between d and the median — assumed d ≥ c + 2 = 22 + 2 = 24 because "distinct integers must differ by at least 2." But 'distinct' means no two values are equal, not that they differ by 2 or more. A gap of 1 satisfies distinctness: d = 23 with c = 22 is valid.
**mistake_d:** Forgot that a and b must also be distinct from *each other* — set a = b = 9: d = 43 − 9 − 9 = 25. Distinctness applies to all five integers, not only d versus c. With a ≠ b required, the tightest valid pair is (a, b) = (a, a+1); maximizing a + b under a < b < 22 gives (10, 11), so d = 43 − 21 = 22, rounded up to 23.
**mistake_e:** Used a small (a, b) pair without recognizing that minimizing d requires maximizing a + b. Testing (a, b) = (8, 9) gives d = 43 − 8 − 9 = 26. To find the *minimum* of d, a + b should be as large as possible (subject to a < b < 22), not as small as possible. Maximum valid a + b = 10 + 11 = 21, giving d = 22, which rounds up to 23.
**common_trap:** Setting d = c (ignoring distinctness) or conflating "distinct" with "differ by ≥ 2."
**takeaway:** Optimization with distinctness: (1) set up the sum constraint; (2) enforce d > c as d ≥ c + 1; (3) to minimize d, maximize a + b within their constraints. "Distinct" = no ties, not a minimum gap.
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
**mistake_b:** Set the new SD equal to the scaling factor alone: SD = 3. The scaling factor is applied TO the original SD — it does not replace it. SD(3x + 4) = 3 × SD(x) = 3 × 2 = 6. The original SD (2) is multiplied by 3, not discarded.
**mistake_d:** Applied the +4 additive shift as a scaling factor: 3·2 + 4 = 10. Additive constants shift the mean but leave spread unchanged. Only the multiplicative factor |a| scales the SD.
**mistake_e:** Applied the transformation parameters to the mean and SD as a pair: 3 × old_mean − 4 × old_SD = 3 × 10 − 4 × 2 = 30 − 8 = 22. This treats the multiplier and addend as if they operate on the summary statistics rather than on the raw data. The SD formula for a linear transformation is simply SD(3x + 4) = 3 × SD(x) = 6. The mean and the addend are irrelevant to the SD.
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
**difficulty:** Easy
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
**explanation:** Range measures the total spread of a data set: Range = max − min = 94 − 42 = 52. Since the values are already sorted, max and min are at the two ends of the list.
**mistake_a:** Bubbled the minimum (42) — misread "range" as the lower bound.
**mistake_c:** Computed the midpoint (average) of min and max: (42 + 94)/2 = 68. The midpoint of the extremes is a center measure. Range is a *spread* measure: the distance between extremes, not their average.
**mistake_d:** Bubbled the median (73, the 5th of 9 sorted values) — confused range (spread) with median (center). The median answers "where is the middle?" and the range answers "how wide is the data?" — two different questions.
**mistake_e:** Bubbled the maximum (94) — misread "range" as the upper bound.
**common_trap:** Confusing range (max − min, a spread measure) with median or mean (center measures). Range always requires subtraction, not identification of a single value.
**takeaway:** Range = max − min. It is a spread measure: the total width of the data. Median and mean are center measures. These answer different questions about the data.
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
**mistake_b:** Misread the overlap as 25 instead of 20: 45 + 35 − 25 = 55. Re-verify the "both" count directly from the problem — a one-digit misread (20 → 25) shifts the answer by exactly 5.
**mistake_d:** Misread the overlap as 15 instead of 20: 45 + 35 − 15 = 65. Same misread error in the other direction. The inclusion-exclusion formula is correct; the error is a digit misread in the given intersection. Always re-check the stated overlap before substituting.
**mistake_e:** Added without subtracting overlap: 45 + 35 = 80.
**common_trap:** Failing to subtract the overlap (|both|) → 80 (double-counts the people who own both).
**takeaway:** |A ∪ B| = |A| + |B| − |A ∩ B|. Always subtract the intersection once.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q29
**difficulty:** Medium
**type:** Problem Solving
**topic:** Expected Value — Basic Definition

A raffle sells 100 tickets at $5 each. One winning ticket is drawn at random and receives a prize of $200. What is the expected net gain for a person who buys one ticket?

- A) -$5.00
- B) -$3.00
- C) $0.00
- D) $1.95
- E) $2.00

**answer:** B
**fastest_path:** P(win) = 1/100. Net if win = $195; net if lose = −$5. EV = (1/100)(195) + (99/100)(−5) = 1.95 − 4.95 = −$3.00.
**explanation:** The net gain has two outcomes. If the ticket wins (probability 1/100): net gain = prize − cost = $200 − $5 = $195. If the ticket loses (probability 99/100): net gain = −$5. Expected value = (1/100)(195) + (99/100)(−5) = 1.95 − 4.95 = −$3.00. The negative EV confirms this raffle favors the organizer, not the buyer.
**mistake_a:** Bubbled −$5, the net outcome of a losing ticket — this is not the expected value, which must weight both outcomes by their probabilities.
**mistake_c:** Assumed the game is "fair" with zero expected value — only true when total payouts equal total ticket revenue, which is not the case here ($200 prize vs. $500 total ticket sales).
**mistake_d:** Computed only the winning term: (1/100)($195) = $1.95, and stopped — forgot to subtract the weighted loss from the losing outcome.
**mistake_e:** Divided the prize by the number of tickets: $200/100 = $2.00, ignoring both the ticket cost and the probability weighting of the loss.
**common_trap:** Computing only the winning term — (1/100)($195) = $1.95 — and ignoring the loss that occurs on the other 99/100 outcomes.
**takeaway:** Expected value = Σ (probability × net outcome) across ALL outcomes, not just the winning one. Always subtract the ticket cost from the prize to find the net gain if you win.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q30
**difficulty:** Easy
**type:** Problem Solving
**topic:** Geometric Probability

A point is chosen uniformly at random on a line segment from 0 to 30. What is the probability that the point falls between 6 and 18?

- A) 1/5
- B) 2/5
- C) 1/2
- D) 3/5
- E) 7/10

**answer:** B
**fastest_path:** Favorable length = 18 − 6 = 12. Total length = 30. P = 12/30 = 2/5.
**explanation:** For a uniform distribution on a line segment, probability equals the ratio of favorable length to total length. The interval from 6 to 18 has length 18 − 6 = 12. The total segment has length 30. P = 12/30 = 2/5.
**mistake_a:** Used the left endpoint as the favorable length: 6/30 = 1/5. The probability is the length of the favorable interval, not its starting position.
**mistake_c:** Estimated that the interval is "roughly half" of the segment — a visual approximation that ignores exact boundaries. The interval 6 to 18 covers 12 out of 30 units, not 15.
**mistake_d:** Used the right endpoint as the numerator: 18/30 = 3/5. The numerator must be the interval length (18 − 6 = 12), not the endpoint value.
**mistake_e:** Some over-count or approximation error landing at 21/30 = 7/10 — likely by adding instead of subtracting endpoints.
**common_trap:** Using an endpoint (6 or 18) as the numerator rather than computing the interval length (18 − 6 = 12).
**takeaway:** Geometric probability on a line segment: P = (length of favorable interval) / (total length). Always subtract to find interval length; do not use the raw endpoint values.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q31
**difficulty:** Medium
**type:** Problem Solving
**topic:** IQR — Robustness to Outliers

The exam scores of 8 students, listed in increasing order, are: 12, 18, 24, 30, 36, 42, 48, 54. The highest-scoring student retakes the exam and raises her score from 54 to 120. By how much does the interquartile range of the class scores change?

- A) 0
- B) 24
- C) 33
- D) 57
- E) 66

**answer:** A
**fastest_path:** Q1 = (18+24)/2 = 21, Q3 = (42+48)/2 = 45 in both data sets. The extreme value (54 → 120) stays outside the middle 50%, so Q1 and Q3 are unchanged. Change = 0.
**explanation:** For 8 ordered values, split into lower {12, 18, 24, 30} and upper {36, 42, 48, 54}. Q1 = (18+24)/2 = 21. Q3 = (42+48)/2 = 45. IQR_before = 24. After the retake: {12, 18, 24, 30, 36, 42, 48, 120}. Lower half {12, 18, 24, 30}: Q1 = (18+24)/2 = 21 (unchanged). Upper half {36, 42, 48, 120}: Q3 = (42+48)/2 = 45. The two middle values of the upper half are still 42 and 48 — replacing the extreme 54 with the even more extreme 120 does not affect them. IQR_after = 24. Change = 24 − 24 = 0.
**mistake_b:** Reported the value of the IQR (24) rather than the change in the IQR. The question asks "by how much does the IQR change" — both the before and after IQR equal 24, so the change is 0, not 24.
**mistake_c:** Computed Q3 of the new upper half {36, 42, 48, 120} using the extremes rather than the two middle values: Q3 = (36 + 120)/2 = 78. New IQR = 78 − 21 = 57. Change = 57 − 24 = 33. Q3 of a 4-element set is the average of the 2nd and 3rd values (42 and 48), not the 1st and 4th.
**mistake_d:** Same wrong Q3 method as C but reported the new IQR (57) without subtracting the original IQR (24). Two errors: wrong Q3 formula and forgetting to compute the delta.
**mistake_e:** Computed the change in range rather than the change in IQR: original range = 54 − 12 = 42; new range = 120 − 12 = 108; change = 66. Range = max − min and changes whenever an extreme changes. IQR = Q3 − Q1 and is determined entirely by the middle 50% of the data.
**common_trap:** Assuming that a dramatic change to the largest value must change the IQR. The IQR's Q1 and Q3 depend only on the middle 50% of the sorted data. Values at the extremes — even dramatic outliers — leave the IQR unchanged as long as they remain outside the middle 50%.
**takeaway:** IQR is robust to outliers. Replacing an extreme value with an even more extreme one leaves Q1 and Q3 (and therefore the IQR) unchanged, because those quartiles are computed from the inner half of the sorted data. Range, by contrast, tracks the extremes directly and changes every time the max or min changes.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q32
**difficulty:** Easy
**type:** Problem Solving
**topic:** Mutually Exclusive Events

Events X and Y are mutually exclusive. P(X) = 0.3 and P(Y) = 0.4. What is the probability that at least one of the two events occurs?

- A) 0.12
- B) 0.58
- C) 0.60
- D) 0.70
- E) 1.00

**answer:** D
**fastest_path:** Mutually exclusive → P(X or Y) = P(X) + P(Y) = 0.3 + 0.4 = 0.70.
**explanation:** Mutually exclusive events cannot both occur, so P(X ∩ Y) = 0. The addition rule simplifies to P(X or Y) = P(X) + P(Y) = 0.3 + 0.4 = 0.70.
**mistake_a:** Applied the multiplication rule: P(X) × P(Y) = 0.3 × 0.4 = 0.12. This gives P(X and Y), which is 0 for mutually exclusive events — not the "at least one" probability.
**mistake_b:** Applied the general inclusion-exclusion formula as if the events were independent: P(X) + P(Y) − P(X)·P(Y) = 0.7 − 0.12 = 0.58. This is wrong because P(X ∩ Y) = 0 for mutually exclusive events, not 0.12.
**mistake_c:** Arithmetic slip: may have computed 0.3 + 0.3 = 0.60 or rounded down.
**mistake_e:** Assumed "at least one must occur," treating the events as exhaustive — but mutually exclusive does not mean the events cover the entire sample space.
**common_trap:** Applying the general inclusion-exclusion formula with P(X∩Y) = P(X)·P(Y) — but for mutually exclusive events, P(X∩Y) = 0. Do not confuse "mutually exclusive" with "independent."
**takeaway:** Mutually exclusive → cannot both occur → P(X∩Y) = 0 → P(X or Y) = P(X) + P(Y). Independent → P(X∩Y) = P(X)·P(Y) → full inclusion-exclusion needed.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q33
**difficulty:** Easy
**type:** Problem Solving
**topic:** Independent Events — Multiplication Rule

Events A and B are independent. P(A) = 0.6 and P(B) = 0.3. What is the probability that both A and B occur?

- A) 0.18
- B) 0.30
- C) 0.60
- D) 0.72
- E) 0.90

**answer:** A
**fastest_path:** Independent → P(A and B) = P(A) × P(B) = 0.6 × 0.3 = 0.18.
**explanation:** For independent events, the joint probability is the product of the individual probabilities: P(A and B) = P(A) × P(B) = 0.6 × 0.3 = 0.18.
**mistake_b:** Bubbled P(B) = 0.30 — used only one event's probability without multiplying by the other.
**mistake_c:** Bubbled P(A) = 0.60 — same error in the other direction.
**mistake_d:** Computed P(A or B) for independent events using inclusion-exclusion: 0.6 + 0.3 − 0.18 = 0.72. This is the "at least one" probability, not the "both" probability.
**mistake_e:** Added the probabilities: 0.6 + 0.3 = 0.90 — used the addition rule (for "at least one") instead of the multiplication rule (for "both").
**common_trap:** Using addition (0.6 + 0.3 = 0.90) instead of multiplication (0.6 × 0.3 = 0.18). "And" → multiply; "or" → add (and subtract overlap).
**takeaway:** P(A and B) = P(A) × P(B) when events are independent. P(A or B) = P(A) + P(B) − P(A∩B). Match the operator to the question word: "both"/"and" → multiply.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q34
**difficulty:** Medium
**type:** Problem Solving
**topic:** Expected Value — Weighted Outcomes

One card is drawn at random from a standard deck of 52 cards. You win $5 if the card is a heart, win $2 if the card is black (a spade or club), and lose $3 if the card is a diamond. What is the expected value of one draw?

- A) $0.50
- B) $1.00
- C) $1.33
- D) $1.50
- E) $2.25

**answer:** D
**fastest_path:** P(heart) = 1/4, P(black) = 1/2, P(diamond) = 1/4. EV = (1/4)(5) + (1/2)(2) + (1/4)(−3) = 1.25 + 1.00 − 0.75 = $1.50.
**explanation:** The three outcomes partition the deck: hearts (13/52 = 1/4), black cards — spades and clubs — (26/52 = 1/2), and diamonds (13/52 = 1/4). The probabilities sum to 1, confirming the partition is complete. EV = (1/4)(5) + (1/2)(2) + (1/4)(−3) = 5/4 + 1 − 3/4 = 2/4 + 1 = 0.50 + 1.00 = $1.50.
**mistake_a:** Computed hearts minus diamonds only, ignoring black cards: (1/4)(5) + (1/4)(−3) = 1.25 − 0.75 = $0.50.
**mistake_b:** Computed only the black card term: (1/2)(2) = $1.00, ignoring the heart and diamond outcomes.
**mistake_c:** Treated all three outcomes as equally likely (probability 1/3 each): (5 + 2 − 3)/3 = 4/3 ≈ $1.33. But the three outcomes are not equally likely — black cards are twice as likely as hearts or diamonds.
**mistake_e:** Weighted only the two positive outcomes without the loss: (1/4)(5) + (1/2)(2) = 1.25 + 1.00 = $2.25.
**common_trap:** Treating the three card types as equally probable. Verify that probabilities sum to 1 before computing EV, and confirm each probability matches the actual proportion of the deck.
**takeaway:** Before computing EV, verify probabilities sum to 1. Then EV = Σ (probability × payoff) for each outcome. Missing any term — positive or negative — corrupts the result.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q35
**difficulty:** Medium
**type:** Problem Solving
**topic:** Conditional Probability — Frequency Table

A company has 200 employees: 120 in the analytics division and 80 in the operations division. Among analytics employees, 25% hold an MBA. Among operations employees, 15% hold an MBA. If one employee with an MBA is selected at random, what is the probability the employee works in the analytics division?

- A) 2/7
- B) 3/5
- C) 5/7
- D) 5/8
- E) 5/6

**answer:** C
**fastest_path:** Analytics with MBA: 120×0.25 = 30. Operations with MBA: 80×0.15 = 12. P(analytics | MBA) = 30/42 = 5/7.
**explanation:** Compute the MBA count in each division: analytics = 120 × 0.25 = 30; operations = 80 × 0.15 = 12. Total with MBA = 30 + 12 = 42. The conditional probability is P(analytics | MBA) = 30/42 = 5/7. The conditioning event (has MBA) restricts the sample space to just the 42 MBA holders; within that group, 30 are from analytics.
**mistake_a:** Computed P(operations | MBA) = 12/42 = 2/7 — answered for the wrong division.
**mistake_b:** Used the prior (unconditional) probability: P(analytics) = 120/200 = 3/5. This ignores the conditioning on "has MBA," which shifts the proportion toward analytics because their MBA rate (25%) exceeds operations' rate (15%).
**mistake_d:** Used an incorrect denominator of 48 instead of 42: 30/48 = 5/8. Likely computed 80 × 0.15 = 18 (wrong) instead of 12, giving 30 + 18 = 48.
**mistake_e:** Rough over-estimate or arithmetic error leading to 5/6.
**common_trap:** Using the unconditional probability 120/200 = 3/5. Conditioning on "has MBA" changes the denominator from 200 (all employees) to 42 (only MBA holders).
**takeaway:** Conditional probability via frequency table: compute the count satisfying both conditions in numerator, the count satisfying the given condition in denominator. P(A|B) = count(A∩B) / count(B).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q36
**difficulty:** Medium
**type:** Problem Solving
**topic:** Binomial Probability — Non-Equal Probabilities

A medical treatment has an independent 70% success rate for each patient. If 3 patients receive the treatment, what is the probability that exactly 2 of the 3 respond successfully?

- A) 0.147
- B) 0.189
- C) 0.343
- D) 0.441
- E) 0.490

**answer:** D
**fastest_path:** C(3,2) × (0.7)² × (0.3)¹ = 3 × 0.49 × 0.30 = 0.441.
**explanation:** Use the binomial formula: P(exactly k successes in n trials) = C(n,k) × p^k × (1−p)^(n−k). Here n = 3, k = 2, p = 0.7. C(3,2) = 3. So P = 3 × (0.7)² × (0.3)¹ = 3 × 0.49 × 0.30 = 3 × 0.147 = 0.441. The three orderings (SSF, SFS, FSS) each occur with probability 0.49 × 0.30 = 0.147, and there are C(3,2) = 3 of them.
**mistake_a:** Computed the probability of one specific ordering (e.g., S then S then F) without multiplying by C(3,2): (0.7)²(0.3) = 0.147. This misses the 3 equally likely orderings of 2 successes and 1 failure.
**mistake_b:** Reversed the success and failure counts: computed C(3,2)×(0.7)¹×(0.3)² = 3 × 0.7 × 0.09 = 0.189 — the probability of exactly 1 success and 2 failures, not 2 successes.
**mistake_c:** Computed P(all 3 succeed): (0.7)³ = 0.343 — a different event.
**mistake_e:** Computed (0.7)² = 0.49, ignoring the probability of the one failure and the combinatorial factor C(3,2) = 3.
**common_trap:** Forgetting the combinatorial factor C(n,k). The probability of "exactly k successes" includes all possible orderings of those successes, not just one specific sequence.
**takeaway:** Binomial probability: C(n,k) × p^k × (1−p)^(n−k). The binomial formula works for any p, not just p = 0.5. Always include C(n,k) to count distinct orderings.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q37
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inclusion-Exclusion — Finding Neither

In a survey of 120 customers, 72 bought Product A, 54 bought Product B, and 30 bought both. How many customers bought neither product?

- A) 0
- B) 6
- C) 18
- D) 24
- E) 30

**answer:** D
**fastest_path:** |A∪B| = 72 + 54 − 30 = 96. Neither = 120 − 96 = 24.
**explanation:** The number who bought at least one product is |A ∪ B| = |A| + |B| − |A ∩ B| = 72 + 54 − 30 = 96. Those who bought neither = total − |A ∪ B| = 120 − 96 = 24.
**mistake_a:** Noted that 72 + 54 = 126 > 120 and concluded "everyone bought at least one product." The surplus over 120 means some customers were double-counted (the 30 who bought both), not that all customers bought something. Using inclusion-exclusion correctly gives |A ∪ B| = 96 < 120.
**mistake_b:** Computed 120 − 72 − 54 = −6, then took the absolute value: 6. The negative result signals that the inclusion-exclusion term must be added back; the correct formula subtracts the intersection, it does not produce a negative "neither" count.
**mistake_c:** Arithmetic slip: perhaps computed |A∪B| = 72 + 54 − 30 = 102 and 120 − 102 = 18.
**mistake_e:** Bubbled the "both" count (30) — this is the overlap, not the "neither" group.
**common_trap:** Observing that 72 + 54 = 126 > 120 and concluding that everyone bought something. The 30 who bought both were counted twice in 126. After correcting: 126 − 30 = 96 bought at least one, and 24 bought neither.
**takeaway:** |Neither| = Total − |A ∪ B| = Total − (|A| + |B| − |A ∩ B|). Always apply inclusion-exclusion before computing "neither."
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q38
**difficulty:** Medium
**type:** Problem Solving
**topic:** Mean — Missing Data

The average (arithmetic mean) of 5 numbers is 84. Four of the five numbers are 78, 91, 80, and 76. What is the fifth number?

- A) 84
- B) 87
- C) 91
- D) 95
- E) 99

**answer:** D
**fastest_path:** Sum = 5 × 84 = 420. Known sum = 78 + 91 + 80 + 76 = 325. Fifth = 420 − 325 = 95.
**explanation:** Total sum required: mean × count = 84 × 5 = 420. Sum of the four known numbers: 78 + 91 + 80 + 76 = 325. Fifth number = 420 − 325 = 95. Check: 325 + 95 = 420, and 420/5 = 84 ✓.
**mistake_a:** Bubbled the mean (84) — assumed all five numbers equal the mean, which is only true when all values are identical.
**mistake_b:** Arithmetic slip in the known sum: e.g., computed 78 + 91 + 80 + 76 = 333 → fifth = 420 − 333 = 87.
**mistake_c:** Bubbled the largest known value (91) — guessed rather than computed.
**mistake_e:** Off-by-four arithmetic slip: 420 − 321 = 99.
**common_trap:** Bubbling the mean itself (84). The missing value equals the mean only if all five numbers are equal, which is not given here.
**takeaway:** Missing-value mean problems: set up Total = mean × count, compute the known sum, then subtract. Never assume the missing value equals the given mean.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q39
**difficulty:** Medium
**type:** Problem Solving
**topic:** Percentile — Count Interpretation

On a standardized exam, a score of 680 falls at the 72nd percentile. If 350 students took the exam, approximately how many students scored strictly below 680?

- A) 98
- B) 126
- C) 175
- D) 252
- E) 280

**answer:** D
**fastest_path:** 72nd percentile → 72% scored below. 0.72 × 350 = 252.
**explanation:** The 72nd percentile means that 72% of test takers scored strictly below 680. Students below 680 = 0.72 × 350 = 252.
**mistake_a:** Computed the number who scored at or above 680: 350 − 252 = 98. Answered the complement of the question.
**mistake_b:** Halved the percentile by mistake, using 36%: 0.36 × 350 = 126. The percentile given (72nd) is used directly; do not divide it.
**mistake_c:** Used 50% (the median): 350 × 0.50 = 175. The median is the 50th percentile; the question specifies the 72nd.
**mistake_e:** Used 80% instead of 72%: 0.80 × 350 = 280 — a reading slip on the percentile value.
**common_trap:** Computing 350 − 252 = 98 (the above-680 count) when the question asks for below 680. Re-read which direction the percentile points.
**takeaway:** The nth percentile means n% of the data falls strictly below that value. To convert to a count: multiply the percentile (as a decimal) by the total number of observations.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Standard Deviation — Conceptual Comparison

Two data sets each have 7 values and the same mean of 6:

Set P: {1, 4, 4, 6, 8, 8, 11}
Set Q: {4, 4, 5, 6, 7, 8, 8}

Which of the following correctly compares the standard deviations of P and Q?

- A) SD(P) < SD(Q), because P contains more distinct values than Q
- B) SD(P) = SD(Q), because both sets have the same mean and the same number of elements
- C) SD(P) > SD(Q), because P has values that lie further from the mean than Q's values do
- D) SD(P) < SD(Q), because Q's values are more tightly clustered at the endpoints
- E) The comparison cannot be determined without computing exact standard deviations

**answer:** C
**fastest_path:** P's extremes (1 and 11) are 5 units from mean 6; Q's extremes (4 and 8) are only 2 units away. Larger deviations → larger SD for P.
**explanation:** Standard deviation measures how spread out values are around the mean. Set P has extremes at 1 and 11, each 5 units from the mean of 6. Set Q's extremes are 4 and 8, each only 2 units from the mean. The inner values of P (4, 4, 8, 8) also spread further than Q's inner values (4, 4, 7, 8). Computing confirms: sum of squared deviations for P = 25+4+4+0+4+4+25 = 66; for Q = 4+4+1+0+1+4+4 = 18. SD(P) > SD(Q).
**mistake_a:** Counted P's distinct values (5) vs. Q's (4) and concluded larger count means larger SD. Standard deviation depends on how far values deviate from the mean, not on how many distinct values exist.
**mistake_b:** Assumed same mean + same count → same SD. Two datasets can share both properties and have entirely different spreads. Mean measures center; count determines the denominator; neither alone (or together) determines spread.
**mistake_d:** "More tightly clustered at the endpoints" is the opposite of what Q shows. Q's values cluster near 6 with less extreme endpoints; P's values spread further. Greater spread from the mean → larger SD.
**mistake_e:** You do not need exact values to compare SDs when the deviation pattern is visually clear. P's values clearly deviate more from the mean than Q's, making SD(P) > SD(Q) without any arithmetic.
**common_trap:** Assuming same mean implies same SD — the two most common summary statistics (mean and median) describe the center, not the spread. Spread requires comparing deviations from the center.
**takeaway:** To compare SDs without computing: look at how far each value lies from the group mean. The dataset with larger or more extreme deviations from the mean has the larger SD.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q41
**difficulty:** Hard
**type:** Problem Solving
**topic:** Conditional Probability — Bayes via Frequency Table

In a clinical study, 300 patients received one of two drugs. Two hundred patients received Drug A and 100 received Drug B. Among Drug A patients, 15% experienced symptom relief. Among Drug B patients, 45% experienced relief. One patient who experienced relief is selected at random. What is the probability the patient received Drug A?

- A) 1/4
- B) 2/5
- C) 1/2
- D) 2/3
- E) 3/5

**answer:** B
**fastest_path:** Drug A relief: 200×0.15 = 30. Drug B relief: 100×0.45 = 45. P(Drug A | relief) = 30/75 = 2/5.
**explanation:** Compute the relief counts: Drug A = 200 × 0.15 = 30 patients; Drug B = 100 × 0.45 = 45 patients. Total relieved = 75. The conditional probability of being a Drug A patient given relief = 30/75 = 2/5. Although Drug A has twice as many total patients, its lower relief rate (15% vs. 45%) makes Drug B overrepresented among the relieved group.
**mistake_a:** Used only the relief rates, treating them as equally weighted: 15%/(15% + 45%) = 15/60 = 1/4. This ignores the fact that twice as many patients received Drug A — the group sizes must be factored in.
**mistake_c:** Estimated 1/2 by assuming Drug A and Drug B produce equal relief counts — possible only if their weighted rates happened to be equal, which they are not (30 vs. 45).
**mistake_d:** Used the prior (unconditional) proportion of Drug A patients: 200/300 = 2/3. This ignores the conditioning on "experienced relief" and does not account for the different relief rates.
**mistake_e:** Computed P(Drug B | relief) = 45/75 = 3/5 — answered for the wrong drug.
**common_trap:** Using the prior group-size ratio (200:100 = 2:1) directly without accounting for the different relief rates. Conditioning on "relief" shifts the weight toward the higher-rate group (Drug B).
**takeaway:** Conditional probability via frequencies: compute the count meeting both conditions (drug + relief) for each group, sum them for the denominator, then divide. Group size alone does not determine the conditional probability — the rate within each group matters.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q42
**difficulty:** Hard
**type:** Problem Solving
**topic:** Expected Value — Comparing Two Strategies

A project manager must choose between two investment strategies. Strategy P has a 40% chance of generating a $800,000 profit and a 60% chance of a $200,000 loss. Strategy Q has a 70% chance of generating a $400,000 profit and a 30% chance of breaking even ($0 gain or loss). Which strategy has the higher expected value, and by how much?

- A) Strategy P by $80,000
- B) Strategy P by $40,000
- C) Strategy P by $20,000
- D) Strategy Q by $40,000
- E) Strategy Q by $80,000

**answer:** E
**fastest_path:** EV(P) = 0.4(800k) + 0.6(−200k) = 320k − 120k = $200k. EV(Q) = 0.7(400k) + 0.3(0) = $280k. Q leads by $80k.
**explanation:** EV(P) = 0.40 × $800,000 + 0.60 × (−$200,000) = $320,000 − $120,000 = $200,000. EV(Q) = 0.70 × $400,000 + 0.30 × $0 = $280,000. Strategy Q has the higher expected value by $280,000 − $200,000 = $80,000.
**mistake_a:** Correctly computed both EVs but concluded P is higher — a sign error or reversal in the comparison step.
**mistake_b:** Treated the 60% loss scenario as break-even ($0) in Strategy P: EV(P) = 0.40 × $800,000 = $320,000. Then EV(Q) = $280,000, giving P leading by $40,000. Forgetting to account for losses is a critical error when computing expected value.
**mistake_c:** A smaller gap from a different computational error, e.g., misidentifying the loss probability or rounding mid-calculation.
**mistake_d:** Correct that Q leads, but underestimated the gap — e.g., from computing EV(P) = $240,000 instead of $200,000.
**mistake_e:** Correct. The negative outcome in Strategy P (60% × $200,000 loss = $120,000 drag) offsets much of the upside, leaving Strategy Q's more reliable $280,000 EV ahead.
**common_trap:** Ignoring the loss in Strategy P by treating the 60% outcome as $0 (break-even) instead of −$200,000. Always include negative payoffs in expected value calculations.
**takeaway:** Expected value includes all outcomes — wins and losses. A strategy with a large upside can still have a lower EV than one with a modest, reliable payoff if the downside probability is large enough.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q43
**difficulty:** Hard
**type:** Problem Solving
**topic:** Inclusion-Exclusion — Three Sets

At a tech company, 180 employees were surveyed about three skills. The results showed: 90 have Python skills, 75 have SQL skills, and 60 have machine learning knowledge. Additionally, 30 have both Python and SQL, 25 have both Python and machine learning, 20 have both SQL and machine learning, and 10 have all three. How many of the 180 employees have none of the three skills?

- A) 10
- B) 20
- C) 30
- D) 40
- E) 55

**answer:** B
**fastest_path:** |P∪S∪M| = 90+75+60 − 30−25−20 + 10 = 225 − 75 + 10 = 160. None = 180 − 160 = 20.
**explanation:** Three-set inclusion-exclusion: |P ∪ S ∪ M| = |P| + |S| + |M| − |P∩S| − |P∩M| − |S∩M| + |P∩S∩M| = 90 + 75 + 60 − 30 − 25 − 20 + 10 = 225 − 75 + 10 = 160. Employees with none = 180 − 160 = 20.
**mistake_a:** Bubbled the "all three" count (10) — this is the three-way intersection, not the "none" group.
**mistake_c:** Forgot to add back the three-way intersection: |P∪S∪M| = 225 − 75 = 150 (stopping too early), giving none = 180 − 150 = 30. The three-way intersection was subtracted three times in the pairwise terms and must be added back once.
**mistake_d:** Subtracted the pairwise intersections with the wrong signs: e.g., computed 225 + 30 + 25 + 20 − 10 = 290 (added instead of subtracted), then took |180 − something| to get 40.
**mistake_e:** Used an entirely different formula, arriving at none = 55.
**common_trap:** Omitting the "+|P∩S∩M|" step. In the three-set formula, the three-way intersection is subtracted three times (once per pairwise term) and must be added back exactly once.
**takeaway:** Three-set inclusion-exclusion: add singles, subtract pairs, add back triple. Forgetting the "+triple" step understates the union and overstates the "none" count. Always write out all seven terms before computing.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q44
**difficulty:** Hard
**type:** Problem Solving
**topic:** Standard Deviation — Abstract Transformation Rules

Set M = {4, 8, 14, 18, 22} has mean μ and standard deviation σ. Set N is formed by multiplying every element of M by 3 and then subtracting 6. Which of the following correctly compares the statistics of the two sets?

- A) Mean of N = 2μ and SD of N = 3σ
- B) Mean of N = 3μ − 6 and SD of N = σ
- C) Mean of N = 3μ − 6 and SD of N = 3σ
- D) Mean of N = 3μ − 6 and SD of N = 3σ − 6
- E) Mean of N = 3μ and SD of N = 3σ

**answer:** C
**fastest_path:** n_i = 3m_i − 6 → mean N = 3μ − 6; SD: shifts do not affect spread, scaling by 3 multiplies SD by 3 → SD N = 3σ.
**explanation:** For any linear transformation n_i = a·m_i + b: (1) Mean of N = a·μ + b. With a = 3, b = −6: mean N = 3μ − 6. (2) SD of N = |a|·σ. The additive constant b shifts every value by the same amount, leaving all deviations from the mean unchanged — SD is invariant under shifts. The multiplicative factor 3 stretches each deviation by 3, so SD scales by 3: SD(N) = 3σ. Verify: mean M = 13.2; mean N = 3(13.2) − 6 = 33.6 ✓. Deviations in M from 13.2: {−9.2, −5.2, 0.8, 4.8, 8.8}; in N they become {−27.6, −15.6, 2.4, 14.4, 26.4}, each exactly 3 times larger ✓.
**mistake_a:** Applied only the multiplicative factor to the mean with wrong coefficient (2μ instead of 3μ) and SD = 3σ. Two errors: wrong coefficient on the mean, and missed the additive shift entirely.
**mistake_b:** Correct mean (3μ − 6) but unchanged SD (σ). Knew that shifts do not affect SD but failed to apply the scaling rule — multiplying every element by 3 triples every deviation from the mean.
**mistake_d:** Correct mean (3μ − 6) but applied the −6 to the SD as well: 3σ − 6. Additive constants never affect SD; they shift the distribution without changing its shape or spread.
**mistake_e:** Correct SD (3σ) but incomplete mean: 3μ (missed the −6). The full linear transformation y = 3x − 6 shifts the mean down by 6 after scaling.
**common_trap:** Applying the additive constant (−6) to the SD. SD measures the spread of values around their mean; when every value shifts by the same amount, the gaps between values — and hence the spread — are unchanged.
**takeaway:** Two rules for y = ax + b: (1) mean_y = a·mean_x + b; (2) SD_y = |a|·SD_x. The additive constant is invisible to SD and variance. Commit these two rules to memory; they cover every linear-transformation SD question on the GMAT.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q45
**difficulty:** Hard
**type:** Problem Solving
**topic:** Expected Value — Recursive Game (Challenge)

A bag contains 2 red balls and 1 white ball. A player draws one ball at random. If the ball is red, the player wins $6 and the game ends. If the ball is white, the player must return the white ball to the bag and pay $2 to draw again (restoring the bag to 2 red and 1 white). The player always continues when drawing white. What is the player's expected net gain per game?

- A) $3.00
- B) $4.00
- C) $4.50
- D) $5.00
- E) $6.00

**answer:** D
**fastest_path:** Let V = expected gain. V = (2/3)(6) + (1/3)(−2 + V) → V = 4 − 2/3 + V/3 → 2V/3 = 10/3 → V = $5.
**explanation:** Let V be the expected net gain from any draw. There are two outcomes: (1) Red (probability 2/3): collect $6 and stop — net contribution = (2/3)(6) = 4. (2) White (probability 1/3): pay $2 to redraw, and the game resets to the same state — net contribution = (1/3)(−2 + V). So: V = 4 + (1/3)(−2 + V) = 4 − 2/3 + V/3. Solving: V − V/3 = 4 − 2/3 → (2/3)V = 10/3 → V = 5. Verify via geometric series: the expected number of white draws before the first red is E[N] = (1/3)/(2/3) = 1/2 (geometric distribution with p = 2/3). Expected cost = $2 × 1/2 = $1. Expected winnings = $6 × 1 = $6 (a red ball is eventually drawn with certainty). Net expected gain = $6 − $1 = $5 ✓.
**mistake_a:** Computed the one-round expected value without accounting for the recursive redraw: (2/3)(6) + (1/3)(−2) = 4 − 2/3 ≈ $3.33, rounded to $3. This treats the game as ending after one draw even when white is drawn — but the game continues.
**mistake_b:** Computed only the expected winning from the red ball: (2/3)(6) = $4, ignoring the expected redraw cost entirely.
**mistake_c:** Arithmetic slip in the recursion step, landing at $4.50 instead of $5.
**mistake_e:** Bubbled the prize amount ($6) without subtracting the expected cost of redraws, arriving at $6 as if no cost were incurred.
**common_trap:** Treating the game as ending after one draw — computing (2/3)(6) + (1/3)(−2) = 10/3 ≈ $3.33 and stopping. The key insight is that drawing white resets to the same game, so V appears on both sides of the equation.
**takeaway:** For recursive games with a "try again" option, let V = expected value and write V = Σ(prob × outcome), where the "try again" branch contributes −cost + V. Solve for V algebraically. Alternatively: V = E[prize] − (cost per retry) × E[retries], using the geometric distribution for E[retries].
**related_reading:** reading-quant-06-statistics-probability-combinatorics

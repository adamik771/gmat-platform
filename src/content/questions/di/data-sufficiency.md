---
section: DI
topic: Data Sufficiency
---

## Q1
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Algebra

What is the value of x?

(1) 3x + 7 = 22
(2) x is a positive integer less than 10.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** Value DS — looking for *unique* x. (1) is one equation in one variable → unique. (2) names a range → many. A.
**situation:** The question asks for the single value of x. Statement (1) gives 3x + 7 = 22; statement (2) says x is a positive integer less than 10.
**reasoning:** *Value DS — is x pinned to one number?* Statement (1): 3x + 7 = 22 solves uniquely to x = 5 — sufficient. Statement (2): x could be any of 1 through 9, nine candidates — not sufficient. Since (1) alone settles the value and (2) alone does not, the answer is A. Don't combine "for safety" once a single statement nails a unique value.
**mistake_b:** B requires (2) alone sufficient — but (2) leaves 9 possible values.
**mistake_c:** C-trap — adding (2) doesn't help; (1) alone already nails x=5.
**mistake_d:** D requires *each* alone sufficient — but (2) leaves 9 candidates.
**mistake_e:** E says even together insufficient — but (1) solves it alone.
**common_trap:** *C-trap*: combining statements "for safety" when one alone is already sufficient. Stop the moment a statement nails a unique value.
**takeaway:** Value DS — a single equation in a single variable is almost always sufficient. Don't keep going.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q2
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Number Properties

Is the integer n divisible by 6?

(1) n is divisible by 3.
(2) n is divisible by 2.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Yes/no DS on divisibility. 6 = 2 × 3 (coprime). Each statement gives one factor → both together nail divisibility by 6.
**situation:** The question asks whether integer n is divisible by 6. Statement (1) says n is divisible by 3; statement (2) says n is divisible by 2.
**reasoning:** *Yes/no DS — is n divisible by 6 = 2 × 3?* Statement (1) alone: n = 9 (no) vs n = 12 (yes) — split, insufficient. Statement (2) alone: n = 8 (no) vs n = 12 (yes) — split, insufficient. Together: n is divisible by both 2 and 3, and since 2 and 3 are coprime, n must be divisible by their product 6 — sufficient, so the answer is C. The composition works only because the factors are coprime (divisible by 4 and 6 does not give 24).
**mistake_a:** A requires (1) alone sufficient — n=9 vs n=12 gives different yes/no.
**mistake_b:** B requires (2) alone sufficient — same issue (n=8 vs n=12).
**mistake_d:** D needs each alone — neither works alone.
**mistake_e:** E says together insufficient — but coprime factors compose.
**common_trap:** Confusing "divisible by both factors" with "divisible by their product." This works *only* when the factors are coprime. div by 4 AND 6 ≠ div by 24.
**takeaway:** Coprime-factor decomposition is a clean DS lever for divisibility. Always check whether the factors share a common divisor before composing.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q3
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Percentages

A store sells a jacket at a discount off the original price. What is the discounted price of the jacket?

(1) The original price of the jacket is $120.
(2) The discount is 25% off the original price.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Need price × (1 − discount). Each statement gives only one factor.
**situation:** The question asks for the discounted price of a jacket. Statement (1) gives the original price ($120); statement (2) gives the discount (25% off).
**reasoning:** *Value DS — can we compute price × (1 − discount)?* Statement (1) gives the base but no discount rate — insufficient. Statement (2) gives the rate but no base — insufficient. Together: $120 × 0.75 = $90 — sufficient, so the answer is C. A percentage value needs both a base and a rate; when the statements split them, the answer is C.
**mistake_a:** A requires (1) alone sufficient — but no discount %.
**mistake_b:** B requires (2) alone sufficient — but no base price.
**mistake_d:** D needs each alone — neither has both pieces.
**mistake_e:** E says together insufficient — but two factors give the product.
**common_trap:** Picking E because the question feels under-specified. But two complementary pieces (price + percent) suffice for any percent calculation.
**takeaway:** Percentage value-DS: you need *base × rate*. If statements split base and rate, the answer is C.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q4
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Ratios

In a class, the ratio of boys to girls is r. How many boys are in the class?

(1) r = 3/4.
(2) There are 28 students in the class.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Need ratio AND total to get a count. Statements split the two; together they suffice.
**situation:** The question asks how many boys are in the class. Statement (1) gives the boys-to-girls ratio (3/4); statement (2) gives the total (28 students).
**reasoning:** *Value DS — can we fix an actual count?* Statement (1) gives only a ratio, which scales to infinitely many counts — insufficient. Statement (2) gives only the total, with no way to split it — insufficient. Together: boys = (3/7) × 28 = 12 — sufficient, so the answer is C. A ratio never yields a count and a count never yields a split; you need both.
**mistake_a:** A requires (1) alone sufficient — ratio alone gives no count.
**mistake_b:** B requires (2) alone sufficient — total alone doesn't split into boys/girls.
**mistake_d:** D needs each alone — neither has both pieces.
**mistake_e:** E says together insufficient — but ratio + total fully determine.
**common_trap:** Treating ratios as if they gave counts. Ratios scale; you need at least one absolute number to fix the scale.
**takeaway:** Ratio-and-count DS: ratio alone never gives count, count alone never gives split. Together is the standard pairing.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q5
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Statistics

What is the median of a set of five different positive integers?

(1) The five integers in increasing order are 3, 7, 11, 15, and 19.
(2) The mean of the five integers is 11.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** (1) lists the five values → median is the third one. (2) gives mean only — many distinct-positive sets can share a mean.
**situation:** The question asks for the median of five different positive integers. Statement (1) lists them in order (3, 7, 11, 15, 19); statement (2) gives their mean (11).
**reasoning:** *Value DS — is the middle value pinned down?* Statement (1) gives the sorted set outright, so the median is the third value, 11 — sufficient. Statement (2) gives only the mean, which many different sets share: {1, 2, 11, 20, 21} has median 11 while {1, 2, 3, 20, 29} has median 3 — insufficient. Since (1) alone settles it, the answer is A. When a statement hands you the sorted data, you already have the median; don't combine for appearance.
**mistake_b:** B requires (2) alone sufficient — but mean doesn't pin median.
**mistake_c:** C-trap — adding (2) doesn't help; (1) gives the median directly.
**mistake_d:** D requires each alone — (2) fails as shown.
**mistake_e:** E says together insufficient — but (1) alone solves.
**common_trap:** *C-trap*: when (1) lists the data outright, you already have everything. Don't combine for the appearance of rigor.
**takeaway:** Median DS: if a statement gives the *sorted set*, you have the median for free. Mean alone never determines median.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q6
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Algebra

If a and b are nonzero numbers, is a/b > 0?

(1) a - b > 0
(2) a + b > 0

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Yes/no DS: a/b > 0 ⟺ a, b *same sign*. Test for both yes and no under each statement (and combined). Both possible → insufficient.
**situation:** For nonzero a and b, the question asks whether a/b > 0 — equivalently, whether a and b share the same sign. Statement (1) says a − b > 0; statement (2) says a + b > 0.
**reasoning:** *Yes/no DS on signs — can we force same-sign or not?* Statement (1): a = 5, b = 2 gives yes, but a = 3, b = −1 gives no — insufficient. Statement (2): a = 5, b = 2 gives yes, but a = 5, b = −2 gives no — insufficient. Together: a = 3, b = 1 gives yes, while a = 5, b = −2 satisfies both (a − b = 7 > 0, a + b = 3 > 0) yet a/b < 0 — still split, so the answer is E. Sign questions live or die on remembering to test negative values.
**mistake_a:** A requires (1) alone sufficient — but sign split shown.
**mistake_b:** B requires (2) alone sufficient — same split.
**mistake_c:** C says together sufficient — but yes/no split persists.
**mistake_d:** D requires each alone — neither works.
**common_trap:** Forgetting to test *negative* values. The sign question on a/b lives or dies on whether you remember a or b can be negative.
**takeaway:** Yes/no DS on signs: always test both sign combinations explicitly. If you can produce yes AND no, the statement is insufficient.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q7
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Number Properties

If k is a positive integer, is k² + k divisible by 4?

(1) k is odd.
(2) k is a prime number greater than 2.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Factor: k(k+1). When k is odd, k+1 is even — but is k+1 divisible by *4*? Depends on k. Test small odd k.
**situation:** For positive integer k, the question asks whether k² + k = k(k+1) is divisible by 4. Statement (1) says k is odd; statement (2) says k is a prime greater than 2.
**reasoning:** *Yes/no DS — is k(k+1) divisible by 4?* Statement (1) k odd: k = 1 gives 1·2 = 2 (no), k = 3 gives 3·4 = 12 (yes) — split, insufficient. Statement (2) k prime > 2 implies k is odd: k = 3 (yes) vs k = 5 → 30 (no) — split, insufficient. Together: statement (2) already implies statement (1), so combining adds no information and the split persists — the answer is E. When one statement contains the other, the combination equals the stronger statement alone.
**mistake_a:** A requires (1) alone sufficient — but yes/no split.
**mistake_b:** B requires (2) alone sufficient — same split.
**mistake_c:** C requires together to add info — but (2) ⟹ (1), no new info.
**mistake_d:** D requires each alone — neither works.
**common_trap:** *Implied-statement trap*: when (2) implies (1), combining gives no new info. Don't fall for "C feels comprehensive."
**takeaway:** When one statement *contains* the other, the combined information equals the stronger statement alone. C is a trap if neither alone suffices.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q8
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Percentages

Last year, Company X's revenue was $500,000. What was Company X's profit last year?

(1) Company X's total expenses last year were 80% of its revenue.
(2) Company X's profit margin (profit as a percentage of revenue) was 20%.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** Revenue is given. (1) gives expenses → profit by subtraction. (2) gives profit margin → profit directly. Both alone work.
**situation:** Revenue was $500,000; the question asks for last year's profit. Statement (1) says expenses were 80% of revenue; statement (2) says the profit margin was 20% of revenue.
**reasoning:** *Value DS — is profit computable from each statement, given revenue?* Statement (1): expenses = 0.80 × 500K = $400K, so profit = $100K — sufficient. Statement (2): profit = 0.20 × 500K = $100K directly — sufficient. Each statement alone determines profit, so the answer is D. That the two routes agree is irrelevant to the verdict; what matters is each alone suffices.
**mistake_a:** A requires only (1) sufficient — but (2) also yields $100K.
**mistake_b:** B requires only (2) sufficient — but (1) also yields $100K.
**mistake_c:** C-trap — combining is unnecessary; either alone solves.
**mistake_e:** E says together insufficient — but each alone solves.
**common_trap:** Picking C because both statements *agree*. But agreement is irrelevant — each alone is sufficient, so the answer is D.
**takeaway:** D requires each alone to be sufficient. When statements give equivalent info via different routes, D is the call.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q9
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Ratios

A solution is made by mixing chemical A and chemical B. What fraction of the solution is chemical A?

(1) The ratio of the volume of chemical A to the volume of chemical B in the solution is 2 to 3.
(2) There are 6 liters of chemical B in the solution.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** Fraction A/(A+B) depends only on the *ratio*, not the volumes. (1) gives the ratio. Done.
**situation:** The question asks what fraction of a two-chemical solution is chemical A. Statement (1) gives the A:B ratio (2:3); statement (2) gives the volume of B (6 liters).
**reasoning:** *Value DS — does the fraction A/(A+B) get pinned down?* Statement (1): the fraction depends only on the ratio, so A:B = 2:3 gives 2/(2+3) = 2/5 — sufficient, no volumes needed. Statement (2): an absolute volume of B without the ratio can't fix the fraction — insufficient. Since (1) alone settles it, the answer is A. Fractions of a mixture depend on ratios, not absolute amounts.
**mistake_b:** B requires (2) alone sufficient — but absolute B doesn't fix the ratio.
**mistake_c:** C-trap — adding (2) doesn't help; (1) already gives the fraction.
**mistake_d:** D requires each alone — (2) fails.
**mistake_e:** E says together insufficient — but (1) alone solves.
**common_trap:** *C-trap*: thinking you need a volume number to compute a fraction. Fractions depend on ratios, not absolute amounts.
**takeaway:** Fraction-of-mixture DS: ratio alone is sufficient; absolute amounts add no information.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q10
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Statistics

What is the range of a set S of seven distinct integers?

(1) The smallest number in set S is -4.
(2) The largest number in set S is 18.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Range = max − min. Each statement gives one endpoint. Together they suffice.
**situation:** The question asks for the range of a set of seven distinct integers. Statement (1) gives the smallest value (−4); statement (2) gives the largest (18).
**reasoning:** *Value DS — is range = max − min determined?* Statement (1) gives only the minimum — insufficient. Statement (2) gives only the maximum — insufficient. Together: 18 − (−4) = 22 — sufficient, so the answer is C. The count and distinctness of the seven integers add nothing; only the two endpoints determine the range.
**mistake_a:** A requires (1) alone sufficient — but no max given.
**mistake_b:** B requires (2) alone sufficient — but no min given.
**mistake_d:** D requires each alone — neither works.
**mistake_e:** E says together insufficient — but two endpoints fix the range.
**common_trap:** Treating the seven distinct integers as a constraint that adds info — but the count and distinctness don't determine min or max alone.
**takeaway:** Range DS: max − min, period. The two endpoints are the only data needed.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q11
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Algebra

If x and y are integers, what is the value of x?

(1) |x - 3| = 2y + 1
(2) x < 3 and y = 0

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Value DS — need unique x. (1) leaves multiple (x,y) pairs. (2) bounds x and fixes y but doesn't pin x. Together: y=0 + x<3 + (1) → x=2.
**situation:** For integers x and y, the question asks for the value of x. Statement (1) gives |x − 3| = 2y + 1; statement (2) says x < 3 and y = 0.
**reasoning:** *Value DS — is x pinned to one number?* Statement (1): |x − 3| = 2y + 1 has many integer (x, y) solutions — insufficient. Statement (2): x < 3 with y = 0 leaves x as any integer below 3 — insufficient. Together: y = 0 turns (1) into |x − 3| = 1, so x = 2 or x = 4, and the restriction x < 3 selects x = 2 — sufficient, so the answer is C. Remember |expr| = k yields two candidates; the inequality is what picks between them.
**mistake_a:** A requires (1) alone sufficient — multiple (x,y) pairs.
**mistake_b:** B requires (2) alone sufficient — x not uniquely fixed.
**mistake_d:** D requires each alone — neither works.
**mistake_e:** E says together insufficient — but they intersect on x=2.
**common_trap:** *Forgetting absolute-value gives two cases* — |x−3|=1 gives x=2 *or* x=4, so the inequality from (2) is needed to pick x=2.
**takeaway:** Absolute-value DS: |expr|=k gives *two* candidates. Look for a second statement to pick between them.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q12
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Number Properties

If p and q are positive integers and pq = 36, is p + q > 13?

(1) p is a perfect square.
(2) q < p

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Yes/no DS on p+q>13. List factor pairs of 36, then test each statement (and combined) for *both* yes and no answers. Both possible → insufficient.
**situation:** For positive integers with pq = 36, the question asks whether p + q > 13. Statement (1) says p is a perfect square; statement (2) says q < p.
**reasoning:** *Yes/no DS — list the factor pairs of 36 and test each statement for both answers.* Statement (1) p a perfect square: (1, 36) → 37 (yes) vs (4, 9) → 13 (no) — split, insufficient. Statement (2) q < p: (12, 3) → 15 (yes) vs (9, 4) → 13 (no) — split, insufficient. Together (perfect-square p and q < p): (36, 1) → 37 (yes) vs (9, 4) → 13 (no) — still split, so the answer is E. Watch the boundary: p + q = 13 is not greater than 13, and (9, 4) hits it exactly.
**mistake_a:** A requires (1) alone sufficient — yes/no split shown.
**mistake_b:** B requires (2) alone sufficient — same split.
**mistake_c:** C says together sufficient — but split persists (p=9,q=4 vs p=36,q=1).
**mistake_d:** D requires each alone — neither works.
**common_trap:** *Edge-case omission*: forgetting that p+q=13 is *not* greater than 13. Strict inequality is the trap; (9,4) gives exactly 13, which is "no."
**takeaway:** Yes/no DS with strict inequalities: always test the *boundary* case. p+q=13 is the most likely answer to fail "p+q>13."
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q13
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Percentages

In a company, 60% of employees are full-time. Did the total number of employees increase from last year to this year?

(1) The number of full-time employees increased by 10% from last year to this year.
(2) The number of part-time employees decreased by 5% from last year to this year.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Last year: 0.6T full + 0.4T part. (1) gives only FT change. (2) gives only PT change. Together: this year = 1.1(0.6T) + 0.95(0.4T) = 1.04T > T. Yes.
**situation:** Last year 60% of employees were full-time; the question asks whether this year's total exceeds last year's. Statement (1): full-time rose 10%; statement (2): part-time fell 5%.
**reasoning:** *Yes/no DS on the total — let last year's total be T (0.6T full-time, 0.4T part-time).* Statement (1) gives this year's full-time as 1.1·0.6T = 0.66T but leaves part-time unknown — insufficient. Statement (2) gives part-time as 0.95·0.4T = 0.38T but leaves full-time unknown — insufficient. Together: 0.66T + 0.38T = 1.04T > T, so the total increased — sufficient, answer C. Note the 60% split is *last year's*; this year's split could differ.
**mistake_a:** A requires (1) alone sufficient — FT alone doesn't determine total.
**mistake_b:** B requires (2) alone sufficient — PT alone doesn't either.
**mistake_d:** D requires each alone — neither works.
**mistake_e:** E says together insufficient — but the weighted sum is computable.
**common_trap:** Reading "60% full-time" as fixed for *both* years. The 60% is *last year's* split; this year's split could differ.
**takeaway:** Yes/no DS on totals: when each statement gives one component's change, combining always gives the weighted sum. Use the original split as weights.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q14
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Ratios

Three partners -- F, G, and H -- split a profit in the ratio of their investments. Partner F invested twice as much as Partner G. What fraction of the total profit did Partner H receive?

(1) Partner H invested $40,000.
(2) The total investment by all three partners was $140,000.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** H's fraction = h / total. Each statement gives one piece (h or total). Together: 40,000 / 140,000 = 2/7.
**situation:** F, G, and H split profit by investment with F = 2G; the question asks H's fraction of the total. Statement (1): H invested $40,000; statement (2): the three invested $140,000 in total.
**reasoning:** *Value DS — H's fraction is h/total, so we need the part and the whole.* Writing G = g, F = 2g, H = h, the share is h/(3g + h). Statement (1) gives h = $40K but not the total — insufficient. Statement (2) gives the total $140K but not h — insufficient. Together: 40,000 / 140,000 = 2/7 — sufficient, answer C. The F = 2G ratio fixes F and G relative to each other but says nothing about H, which needs its own data.
**mistake_a:** A requires (1) alone sufficient — without g (or total), can't compute fraction.
**mistake_b:** B requires (2) alone sufficient — without h, can't compute fraction.
**mistake_d:** D requires each alone — neither has both pieces.
**mistake_e:** E says together insufficient — but two values determine the fraction.
**common_trap:** Treating the 2:1 ratio of F:G as enough to compute everything — but H's investment is independent and needs its own data.
**takeaway:** Fraction-of-total DS: need *the part* and *the total*. Ratios of *other* parts don't substitute.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q15
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Statistics

A data set contains eight positive numbers. Is the standard deviation of the data set greater than 5?

(1) The range of the data set is 4.
(2) The mean of the data set is 50.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** Yes/no DS on SD>5. Range 4 caps SD at ≤ range/2 = 2 < 5. Definite "no" → (1) sufficient.
**situation:** Eight positive numbers; the question asks whether the standard deviation exceeds 5. Statement (1): the range is 4; statement (2): the mean is 50.
**reasoning:** *Yes/no DS on spread — recall SD ≤ range/2.* Statement (1): range = 4 forces SD ≤ 2 < 5, a definite no — sufficient. Statement (2): the mean says nothing about spread (all values could equal 50, SD 0, or be widely spread, SD > 5) — insufficient. Since (1) alone gives a definite answer, the answer is A. A confident "no" is just as sufficient as a confident "yes."
**mistake_b:** B requires (2) alone sufficient — but mean is silent on SD.
**mistake_c:** C-trap — adding (2) doesn't help; (1) alone gives a definitive no.
**mistake_d:** D requires each alone — (2) fails.
**mistake_e:** E says together insufficient — but (1) alone solves.
**common_trap:** Forgetting that *definite no* counts as sufficient. Sufficiency = a unique answer (yes or no), not just "yes."
**takeaway:** Yes/no DS: a confident "no" is just as sufficient as a confident "yes." Range-bounds-SD is a powerful inequality lever.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q16
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Number Properties

If n is a positive integer, is n odd?

(1) 3n is odd.
(2) n + 4 is odd.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** Yes/no DS — each statement alone forces n odd. (1) 3n odd ⟹ n odd (3 is odd, odd·even=even). (2) n+4 odd ⟹ n odd (even+even=even). D.
**situation:** For positive integer n, the question asks whether n is odd. Statement (1): 3n is odd; statement (2): n + 4 is odd.
**reasoning:** *Yes/no DS on parity — does each statement fix n's parity?* Statement (1): 3 is odd, so 3n has the same parity as n, and 3n odd forces n odd — sufficient. Statement (2): 4 is even, so n + 4 has n's parity, and n + 4 odd forces n odd — sufficient. Each statement alone settles it, so the answer is D. Parity propagates through addition and odd-multiplication; test each statement alone before reaching for C.
**mistake_a:** A requires only (1) sufficient — but (2) also pins n as odd.
**mistake_b:** B requires only (2) sufficient — but (1) also does.
**mistake_c:** *C-trap* — combining is unnecessary; each alone solves.
**mistake_e:** E says together insufficient — both individually solve, so combined certainly does.
**common_trap:** *C-trap* on parity questions: students reflexively combine. Each parity statement on a multiplied or shifted n usually fixes n's parity alone.
**takeaway:** Parity DS: parity propagates through addition (mod 2) and odd-multiplication. Always test each statement *alone* before reaching for C.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q17
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Linear Equations

What is the value of x?

(1) 2x + 3y = 17
(2) y = 3

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** One equation in two unknowns is rarely sufficient. (2) gives y. Sub: 2x+9=17 → x=4.
**situation:** The question asks for the value of x. Statement (1): 2x + 3y = 17; statement (2): y = 3.
**reasoning:** *Value DS — count independent equations against unknowns.* Statement (1) is one equation in two unknowns, with infinitely many (x, y) pairs — insufficient. Statement (2) fixes y but says nothing about x alone — insufficient. Together: substitute y = 3 to get 2x + 9 = 17, so x = 4 — sufficient, answer C. Two independent equations in two unknowns almost always pin a unique solution.
**mistake_a:** A requires (1) alone sufficient — but two unknowns, one equation.
**mistake_b:** B requires (2) alone sufficient — y alone says nothing about x.
**mistake_d:** D requires each alone — neither has both pieces.
**mistake_e:** E says together insufficient — but two equations in two unknowns solve.
**common_trap:** Picking E because the question feels constrained. Two independent equations in two unknowns almost always solve.
**takeaway:** Linear-system DS: count *independent* equations vs unknowns. n equations and n unknowns (independent) → unique solution.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q18
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Geometry

What is the area of rectangle ABCD?

(1) The length of diagonal AC is 10.
(2) The perimeter of ABCD is 28.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Area = LW. (1) gives L²+W²=100; (2) gives L+W=14. Use (L+W)² = L²+W² + 2LW: 196=100+2LW → LW=48.
**situation:** The question asks for the area of rectangle ABCD. Statement (1) gives the diagonal AC = 10; statement (2) gives the perimeter = 28.
**reasoning:** *Value DS — area is L × W, so look for the product, not L and W separately.* Statement (1): L² + W² = 100 allows many shapes (6, 8 → area 48; 7.07, 7.07 → 50) — insufficient. Statement (2): L + W = 14 also allows different areas (7×7 = 49 vs 6×8 = 48) — insufficient. Together: (L + W)² = L² + 2LW + W², so 196 = 100 + 2LW gives LW = 48 — sufficient, answer C. For a product question, the (L + W)² identity yields LW without ever solving for L and W.
**mistake_a:** A requires (1) alone sufficient — but L²+W²=100 has many area outcomes.
**mistake_b:** B requires (2) alone sufficient — same issue with L+W=14.
**mistake_d:** D requires each alone — neither works.
**mistake_e:** E says together insufficient — but the algebraic identity nails LW.
**common_trap:** Trying to solve for L and W individually. You don't need them — you need *LW*, which the (L+W)² identity reveals directly.
**takeaway:** Geometry/algebra DS: when the question is about a *product* (area, LW), look for the identity (L+W)² = L²+2LW+W². You rarely need L,W separately.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q19
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Number Properties

If p is an integer, is p even?

(1) p² is even.
(2) p + 1 is odd.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** Yes/no DS — each alone forces p even. (1) p² even ⟹ p even (2 prime in factorization). (2) p+1 odd ⟹ p even. D.
**situation:** For integer p, the question asks whether p is even. Statement (1): p² is even; statement (2): p + 1 is odd.
**reasoning:** *Yes/no DS on parity — does each statement fix p's parity?* Statement (1): since 2 is prime, p² having a factor of 2 forces p to have one, so p is even — sufficient. Statement (2): p + 1 odd means p is even — sufficient. Each statement alone settles it, so the answer is D. Parity is inherited through prime factors (if p² has prime factor q, so does p); check each statement alone before C.
**mistake_a:** A requires only (1) sufficient — (2) also pins p as even.
**mistake_b:** B requires only (2) sufficient — (1) also does.
**mistake_c:** *C-trap* — combining is unnecessary; each alone solves.
**mistake_e:** E says together insufficient — both work alone.
**common_trap:** *C-trap* — second instance in DS, same lesson. Always check each parity statement alone.
**takeaway:** Parity propagates through prime-factor inheritance: if p² has a prime factor q, so does p. Use this for parity D-type DS.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q20
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Inequalities

Is x > y?

(1) x² > y²
(2) x - y > 0

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**fastest_path:** (1) x²>y² ↔ |x|>|y|, says nothing about *signed* order. (2) x−y>0 ↔ x>y. Sufficient.
**situation:** The question asks whether x > y. Statement (1): x² > y²; statement (2): x − y > 0.
**reasoning:** *Yes/no DS on signed order.* Statement (1): x² > y² gives only |x| > |y|, which ignores sign — x = 3, y = 1 (yes) vs x = −3, y = 1 (no) — insufficient. Statement (2): x − y > 0 rearranges directly to x > y — sufficient. Since (2) alone settles it and (1) doesn't, the answer is B. Squaring strips sign; only the direct subtraction preserves order.
**mistake_a:** A requires only (1) sufficient — but sign split shown.
**mistake_c:** C says together sufficient — but (2) alone already does.
**mistake_d:** D requires each alone — (1) fails.
**mistake_e:** E says together insufficient — but (2) alone solves.
**common_trap:** Treating squared inequalities as if they preserved sign. Squaring strips sign — always test negatives explicitly.
**takeaway:** Inequality DS: x²>y² says nothing about *signed* order. Only the direct subtraction (x−y) preserves order.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q21
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Linear Equations

If 4x + 3y = 24, what is the value of y?

(1) x and y are positive integers.
(2) x > 4

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** Integer constraint dramatically reduces solution space. Test y=1..8 modulo 4 — only y=4 yields integer x. Sufficient.
**situation:** Given 4x + 3y = 24, the question asks for the value of y. Statement (1): x and y are positive integers; statement (2): x > 4.
**reasoning:** *Value DS — does the constraint collapse the line to one point?* Statement (1): with positive integers, 24 − 3y must be divisible by 4 and leave x positive; only y = 4 (x = 3) works — a unique y, sufficient. Statement (2): x > 4 with no integer constraint leaves infinitely many y — insufficient. Since (1) alone pins y, the answer is A. Don't reflexively call one equation in two unknowns insufficient — an integer constraint often leaves a single lattice point.
**mistake_b:** B requires (2) alone sufficient — but x>4 alone leaves y free.
**mistake_c:** C-trap — adding (2) doesn't help; (1) already pins y.
**mistake_d:** D requires each alone — (2) fails.
**mistake_e:** E says together insufficient — (1) alone solves.
**common_trap:** Defaulting to "one equation in two unknowns is insufficient." When the constraint includes *integers*, only finitely many points on the line satisfy. Often unique.
**takeaway:** Integer constraints can collapse a multi-unknown linear equation to a unique solution. Always enumerate integer cases before declaring insufficient.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q22
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Inequalities

Is x > 0?

(1) x³ > x
(2) x² < 1

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Yes/no x>0. Factor (1): x(x−1)(x+1)>0 → x∈(−1,0)∪(1,∞). (2): x∈(−1,1). Intersect: x∈(−1,0) → x<0. Always "no". C.
**situation:** The question asks whether x > 0. Statement (1): x³ > x; statement (2): x² < 1.
**reasoning:** *Yes/no DS on sign — factor the inequalities.* Statement (1): x³ > x ⟺ x(x − 1)(x + 1) > 0 ⟺ x ∈ (−1, 0) ∪ (1, ∞) — both signs possible, insufficient. Statement (2): x² < 1 ⟺ −1 < x < 1 — both signs possible, insufficient. Together: the intersection is (−1, 0), where x is always negative — a definite no, sufficient, answer C. Cubic inequalities split the line into sign zones; factor before judging.
**mistake_a:** A requires (1) alone sufficient — both sign cases possible.
**mistake_b:** B requires (2) alone sufficient — same issue.
**mistake_d:** D requires each alone — neither works.
**mistake_e:** E says together insufficient — but intersection nails sign.
**common_trap:** Forgetting cubic-inequality factoring. x³>x rarely means x>0 — it means x is in two disjoint zones, depending on sign.
**takeaway:** Cubic-inequality DS: factor first. x(x−a)(x+a) sign analysis is the standard tool.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q23
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Number Properties

If n is a positive integer, what is the remainder when n is divided by 5?

(1) The remainder when n is divided by 10 is 3.
(2) n is odd.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** (1) n = 10k+3. Since 10 = 5·2, n mod 5 = 3 mod 5 = 3. Sufficient.
**situation:** For positive integer n, the question asks the remainder when n is divided by 5. Statement (1): n leaves remainder 3 when divided by 10; statement (2): n is odd.
**reasoning:** *Value DS — is the remainder mod 5 fixed?* Statement (1): n = 10k + 3, and since 10 is a multiple of 5, n mod 5 = 3 always — sufficient. Statement (2): odd n gives different remainders (n = 1 → 1, n = 3 → 3, n = 5 → 0) — insufficient. Since (1) alone settles it, the answer is A. Remainders inherit through divisor-multiples: if n mod (kd) = r, then n mod d = r mod d.
**mistake_b:** B requires (2) alone sufficient — but odd n yields different remainders.
**mistake_c:** C-trap — adding (2) doesn't help; (1) already gives the remainder.
**mistake_d:** D requires each alone — (2) fails.
**mistake_e:** E says together insufficient — but (1) alone solves.
**common_trap:** Treating "remainder when divided by 10" as separate from "remainder when divided by 5." When the divisor of (1) is a multiple of the divisor we're asked about, the (1)-remainder transfers directly.
**takeaway:** Remainder DS: if n mod (kd) = r, then n mod d = r mod d. Remainders inherit through divisor-multiples.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q24
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Linear Equations

If a, b, and c are real numbers, what is the value of a + b + c?

(1) a + b = 10
(2) b + c = 12 and a + c = 8

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Three unknowns. (1) gives one equation, (2) gives two. Combined: three independent equations → unique sum.
**situation:** For real a, b, c, the question asks for a + b + c. Statement (1): a + b = 10; statement (2): b + c = 12 and a + c = 8.
**reasoning:** *Value DS — is the sum a + b + c determined?* Statement (1) leaves c free — insufficient. Statement (2) is two equations in three unknowns; adding them gives a + b + 2c = 20, which doesn't isolate a + b + c — insufficient. Together: subtract a + b = 10 from a + b + 2c = 20 to get 2c = 10, so c = 5 and a + b + c = 15 — sufficient, answer C. Two equations can't fix three unknowns (or their sum) without a third independent constraint.
**mistake_a:** A requires (1) alone sufficient — c free.
**mistake_b:** B requires (2) alone sufficient — only 2 of 3 unknowns determined.
**mistake_d:** D requires each alone — neither has 3 independent equations.
**mistake_e:** E says together insufficient — but combined gives 3 independent equations.
**common_trap:** Assuming (2) alone works because it has two equations. Two equations in three unknowns can never solve for all variables (or their sum) without a third constraint.
**takeaway:** Counting-rank principle: n unknowns need n independent equations. Sum of variables sometimes solvable with fewer, but only when the equations align.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q25
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Geometry

In triangle ABC, what is the measure of angle A?

(1) Angle B = 70 degrees.
(2) Triangle ABC is isosceles.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Yes triangle isosceles + B=70, but *which* pair is equal? A=70 (if A=B), or A=40 (if B=C), or A=55 (if A=C). Three cases. Insufficient.
**situation:** In triangle ABC, the question asks for the measure of angle A. Statement (1): angle B = 70°; statement (2): triangle ABC is isosceles.
**reasoning:** *Value DS — is angle A a single number?* Statement (1): B = 70° leaves A + C = 110° with many splits — insufficient. Statement (2): isosceles, but which pair is equal is unspecified — insufficient. Together: with B = 70° and isosceles, three configurations survive — A = B = 70° (A = 70), B = C = 70° (A = 40), or A = C = 55° (A = 55) — three values, so the answer is E. "Isosceles" names a family of three configurations, not a unique angle.
**mistake_a:** A requires (1) alone sufficient — A+C=110 has many splits.
**mistake_b:** B requires (2) alone sufficient — pair unspecified.
**mistake_c:** *C-to-E trap* — adding the isosceles constraint *doesn't* pin down which pair is equal.
**mistake_d:** D requires each alone — neither works.
**common_trap:** *C-to-E trap*: students see "B=70 + isosceles" and assume it must work. But "isosceles" gives a *family* of three configurations, not a unique angle.
**takeaway:** Triangle DS with "isosceles": always count *which pair* is equal. The vertex of isosceles is ambiguous unless specified.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q26
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Inequalities

If x and y are nonzero real numbers, is x/y < 1?

(1) x < y
(2) xy > 0

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Yes/no x/y<1. Test sign combos. (1) x<y silent on signs. (2) same sign silent on order. Together: both pos (x/y<1) vs both neg with x<y (x/y>1). Split.
**situation:** For nonzero reals x and y, the question asks whether x/y < 1. Statement (1): x < y; statement (2): xy > 0 (same sign).
**reasoning:** *Yes/no DS — test sign and order together.* Statement (1): x = 1, y = 2 gives x/y = 0.5 (yes), but x = −2, y = −1 gives x/y = 2 (no) — insufficient. Statement (2): same sign without order — x = 1, y = 2 (yes) vs x = 2, y = 1 (no) — insufficient. Together: two positives with x < y give x/y < 1 (yes), but two negatives with x < y give x/y > 1 (no) — still split, so the answer is E. Dividing two negatives flips the quotient relationship you'd expect from the positive case.
**mistake_a:** A requires (1) alone sufficient — split shown.
**mistake_b:** B requires (2) alone sufficient — order matters.
**mistake_c:** *C-to-E trap*: combining seems to lock it down, but negative-pair behavior flips x/y<1 to x/y>1.
**mistake_d:** D requires each alone — neither works.
**common_trap:** *Sign-of-quotient flip* under negation: dividing two negatives flips all the inequalities you'd assume from the positive case. Always test both signs.
**takeaway:** Quotient-inequality DS: sign matters. x<y AND same-sign doesn't pin x/y vs 1 — negative pairs flip the result.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q27
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Statistics

Set S consists of five distinct positive integers. Is the median of S greater than the mean of S?

(1) The largest number in S is more than twice the sum of the other four numbers.
(2) The smallest number in S is 1.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** Yes/no median>mean. (1) e > 2(a+b+c+d) makes the largest dominant — mean dragged way above median. Always "no". Sufficient.
**situation:** Set S has five distinct positive integers; the question asks whether the median exceeds the mean. Statement (1): the largest is more than twice the sum of the other four; statement (2): the smallest is 1.
**reasoning:** *Yes/no DS on skew — sort as a < b < c < d < e (median c).* Statement (1): e > 2(a+b+c+d) makes the largest value dominate, dragging the mean far above the median — e.g., {1, 2, 3, 4, 21} has median 3 but mean 6.2 (no), and this holds in general — a definite no, sufficient. Statement (2): smallest = 1 allows both — {1,2,3,4,5} has median 3 = mean (no) while {1,2,10,11,12} has median 10 > mean 7.2 (yes) — insufficient. Since (1) alone gives a definite answer, the answer is A. A single very large value pulls the mean above the median, and a definite "no" is sufficient.
**mistake_b:** B requires (2) alone sufficient — yes/no split shown.
**mistake_c:** C-trap — adding (2) doesn't help; (1) alone gives definitive no.
**mistake_d:** D requires each alone — (2) fails.
**mistake_e:** E says together insufficient — but (1) alone solves.
**common_trap:** Forgetting that *definite no* is sufficient. Sufficiency = unique yes-or-no, not just yes.
**takeaway:** Skewness DS: a single value much larger than the rest pulls the mean far above the median. Always "no" for "median>mean" in heavily right-skewed sets.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q28
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Number Properties

If x is a positive integer, is x prime?

(1) x has exactly two positive divisors.
(2) x + 1 is the square of a prime.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** (1) "Exactly two positive divisors" *is* the definition of prime. Always yes. Sufficient.
**situation:** For positive integer x, the question asks whether x is prime. Statement (1): x has exactly two positive divisors; statement (2): x + 1 is the square of a prime.
**reasoning:** *Yes/no DS — does each statement settle primality?* Statement (1): having exactly two positive divisors (1 and x) is the definition of prime — always yes, sufficient. Statement (2): x + 1 = p² gives x = 3 when p = 2 (prime, yes) but x = 8 when p = 3 (not prime, no) — insufficient. Since (1) alone is conclusive, the answer is A. A statement that restates the very definition of the property asked is sufficient by tautology.
**mistake_b:** B requires (2) alone sufficient — yes/no split.
**mistake_c:** C-trap — adding (2) doesn't help; (1) alone is the prime definition.
**mistake_d:** D requires each alone — (2) fails.
**mistake_e:** E says together insufficient — but (1) is conclusive alone.
**common_trap:** Missing that "exactly two positive divisors" = prime, by definition. Statements that restate the definition are sufficient by tautology.
**takeaway:** When a statement *is* the definition of the property being asked about, it's automatically sufficient. Recognize defining conditions on sight.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q29
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Geometry

A circle is inscribed in square ABCD. What is the area of the circle?

(1) The diagonal of square ABCD is 10 √2.
(2) The area of the region inside the square but outside the circle is 100 - 25π.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** Inscribed circle: diameter = side. (1) diag=10√2 ⟹ side=10 ⟹ r=5, area=25π. (2) outside-region match gives s=10. Each alone works.
**situation:** A circle is inscribed in square ABCD; the question asks the circle's area. Statement (1): the square's diagonal is 10√2; statement (2): the area inside the square but outside the circle is 100 − 25π.
**reasoning:** *Value DS — for an inscribed circle the diameter equals the square's side, so any datum fixing the side fixes the area.* Statement (1): diagonal 10√2 gives side 10, radius 5, area 25π — sufficient. Statement (2): the outside region is s²(1 − π/4) = 100 − 25π, which gives s = 10, radius 5, area 25π — sufficient. Each statement alone determines the area, so the answer is D. When both routes lead to s = 10, don't reach for C "for safety."
**mistake_a:** A requires only (1) sufficient — but (2) also pins down area.
**mistake_b:** B requires only (2) sufficient — but (1) also does.
**mistake_c:** *C-trap*: combining is unnecessary — each statement alone gives s=10.
**mistake_e:** E says together insufficient — but each alone works.
**common_trap:** *D-as-C-trap* in geometry: when both statements lead to the same calculation, students reach for C "for safety." Each alone solves.
**takeaway:** Inscribed-circle geometry: side = diameter. Either side info or area-relationship info alone fixes the figure.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q30
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Inequalities

If a, b, and c are nonzero integers, is abc > 0?

(1) ab > 0 and bc > 0
(2) a + b + c > 0

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** abc>0 ↔ even number of negatives. (1) forces a,b,c same sign (all pos or all neg). (2) excludes all-neg. Together: all pos → abc>0.
**situation:** For nonzero integers a, b, c, the question asks whether abc > 0. Statement (1): ab > 0 and bc > 0; statement (2): a + b + c > 0.
**reasoning:** *Yes/no DS — abc > 0 means an even number of negatives (here, zero).* Statement (1): ab > 0 and bc > 0 force a, b, c to share b's sign — all positive (abc > 0) or all negative (abc < 0) — insufficient. Statement (2): a positive sum still allows mixed signs — insufficient. Together: same sign plus a positive sum rules out all-negative, leaving all positive, so abc > 0 — sufficient, answer C. "Same sign" alone isn't a yes, because all-negative is also same-sign; (2) excludes it.
**mistake_a:** A requires (1) alone sufficient — but all-neg case gives abc<0.
**mistake_b:** B requires (2) alone sufficient — mixed signs admit yes/no.
**mistake_d:** D requires each alone — neither works.
**mistake_e:** E says together insufficient — but (1) + (2) excludes all-neg.
**common_trap:** Stopping at (1) once you get "same sign." That's only a *yes* if signs are positive. Need (2) to exclude all-negative.
**takeaway:** Sign-product DS: count negatives. abc>0 = 0 or 2 negatives. Same-sign info alone fails because "all negative" is also same-sign.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q31
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Geometry

In triangle PQR, what is the measure of angle P?

(1) Angle Q = 70 degrees.
(2) Angle R = 55 degrees.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Triangle angles sum to 180. Need two angles to find the third. Each statement gives one. Together: P = 180−70−55 = 55.
**situation:** In triangle PQR, the question asks for the measure of angle P. Statement (1): angle Q = 70°; statement (2): angle R = 55°.
**reasoning:** *Value DS — the three angles sum to 180°, so two of them fix the third.* Statement (1): Q = 70° leaves P + R = 110°, P unknown — insufficient. Statement (2): R = 55° leaves P + Q = 125°, P unknown — insufficient. Together: P = 180 − 70 − 55 = 55° — sufficient, answer C. A specific angle needs two of the three known.
**mistake_a:** A requires (1) alone sufficient — only one angle given.
**mistake_b:** B requires (2) alone sufficient — same.
**mistake_d:** D requires each alone — neither has two angles.
**mistake_e:** E says together insufficient — but two angles uniquely fix the third.
**common_trap:** Treating one angle as enough. Triangle DS for a specific angle needs *two* of the three.
**takeaway:** Triangle DS: angle sum = 180 means n−1 angles fix the nth. Always count which angles are pinned.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q32
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Rates/Work

A printer prints pages at a constant rate. How many pages does it print in 12 minutes?

(1) The printer prints 40 pages in 5 minutes.
(2) The printer prints twice as many pages in 10 minutes as it does in 5 minutes.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** (1) gives rate (40/5 = 8/min) → 12·8 = 96. (2) just restates constant rate — no number. A.
**situation:** A printer runs at a constant rate; the question asks how many pages it prints in 12 minutes. Statement (1): 40 pages in 5 minutes; statement (2): it prints twice as many in 10 minutes as in 5 minutes.
**reasoning:** *Value DS — is the rate, hence the 12-minute output, fixed?* Statement (1): 40 pages / 5 min = 8 pages/min, so 12 min → 96 pages — sufficient. Statement (2): "twice as many in twice the time" is true of any constant rate and supplies no number — insufficient. Since (1) alone settles it, the answer is A. Check whether a statement actually constrains values; a restatement of a given condition adds nothing.
**mistake_b:** B requires (2) alone sufficient — but it's tautological.
**mistake_c:** C-trap — adding (2) gives nothing new; (1) already solves.
**mistake_d:** D requires each alone — (2) is empty.
**mistake_e:** E says together insufficient — but (1) alone solves.
**common_trap:** Falling for tautological statements. "Twice as many in twice the time" is *true for any constant rate* — adds no information.
**takeaway:** DS hygiene: check whether a statement actually constrains values. Restatements of given conditions add nothing.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q33
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Percent change / ratios

A store sold x televisions in March and y televisions in April. What is the value of x?

(1) The number of televisions sold in April was 20 percent greater than the number sold in March.
(2) The store sold 72 televisions in April.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** (1) y=1.2x. (2) y=72. Together: 72=1.2x → x=60.
**situation:** A store sold x TVs in March and y in April; the question asks for x. Statement (1): April was 20% greater than March; statement (2): April sales were 72.
**reasoning:** *Value DS — is x pinned down?* Statement (1): y = 1.2x is one equation in two unknowns — insufficient. Statement (2): y = 72 with no link to x — insufficient. Together: 72 = 1.2x gives x = 60 — sufficient, answer C. A percent relation plus one anchor value yields a unique solution.
**mistake_a:** A requires (1) alone sufficient — but no anchor on x.
**mistake_b:** B requires (2) alone sufficient — y alone gives no x.
**mistake_d:** D requires each alone — neither does.
**mistake_e:** E says together insufficient — but two equations in two unknowns solve.
**common_trap:** Picking E because problem feels under-specified. Percent-relation + absolute number = solvable.
**takeaway:** Percent-comparison DS: ratio + one anchor value = unique solution.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q34
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Absolute value

What is the value of |k - 3|?

(1) k = 7.
(2) (k - 3)² = 16.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** (1) k=7 → |4|=4. (2) (k−3)²=16 → |k−3|=√16=4 directly (k could be 7 or −1, both give 4). Each alone solves.
**situation:** The question asks for the value of |k − 3|. Statement (1): k = 7; statement (2): (k − 3)² = 16.
**reasoning:** *Value DS — is |k − 3| determined?* Statement (1): k = 7 gives |4| = 4 — sufficient. Statement (2): (k − 3)² = 16 gives |k − 3| = √16 = 4 directly; k could be 7 or −1, but both yield 4 — sufficient. Each statement alone settles it, so the answer is D. When the question asks for |expr| and a statement gives (expr)², square-root-then-absolute-value answers it without finding the variable.
**mistake_a:** A requires only (1) sufficient — but (2) also solves.
**mistake_b:** B requires only (2) sufficient — but (1) also solves.
**mistake_c:** C-trap — combining is unnecessary.
**mistake_e:** E says together insufficient — both alone solve.
**common_trap:** Thinking (2) only narrows k to two values. But the question asks for |k−3|, which is the same for both — so (2) is actually sufficient.
**takeaway:** When the question is *|expression|* and a statement gives *(expression)²*, square-root-then-absolute-value gives the answer directly — no need to find the original variable.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q35
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Geometry

In the xy-plane, line L passes through the points (2, 5) and (a, b). What is the value of b?

(1) The slope of line L is 3.
(2) a = 6.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Slope formula (b−5)/(a−2)=3. (1) gives slope; (2) gives a. Plug: b−5=3(6−2)=12 → b=17.
**situation:** Line L passes through (2, 5) and (a, b); the question asks for b. Statement (1): the slope of L is 3; statement (2): a = 6.
**reasoning:** *Value DS — is b determined?* Statement (1): slope 3 gives b − 5 = 3(a − 2), still two unknowns — insufficient. Statement (2): a = 6 alone says nothing about b — insufficient. Together: b − 5 = 3(6 − 2) = 12, so b = 17 — sufficient, answer C. Slope plus one point fixes the line, but a specific b needs its matching x-coordinate a.
**mistake_a:** A requires (1) alone sufficient — slope alone has infinite (a,b) pairs.
**mistake_b:** B requires (2) alone sufficient — a alone gives no b.
**mistake_d:** D requires each alone — neither does.
**mistake_e:** E says together insufficient — but two pieces nail b.
**common_trap:** Thinking slope plus *one* point uniquely determines a line — true. But b is the y-coordinate at a specific x; you need *that x* (a) to compute b.
**takeaway:** Coordinate DS: slope + one point fixes the line. To get a specific b, you also need the matching a.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q36
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Rates/Work

Machines A and B work simultaneously at their respective constant rates to fill an order. How long does it take them working together to fill the order?

(1) Machine A alone would fill the order in 6 hours.
(2) Machine B alone would fill the order in 3 hours.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Combined rate = sum of individual rates. (1) gives A's rate; (2) gives B's rate. Together: 1/6 + 1/3 = 1/2 order/hour → 2 hours.
**situation:** Machines A and B work together at constant rates; the question asks how long they take together. Statement (1): A alone takes 6 hours; statement (2): B alone takes 3 hours.
**reasoning:** *Value DS — combined time = 1/(rate_A + rate_B), so both rates are needed.* Statement (1): rate_A = 1/6, but B's rate is unknown — insufficient. Statement (2): rate_B = 1/3, but A's is unknown — insufficient. Together: 1/6 + 1/3 = 1/2 order/hour, so the time is 2 hours — sufficient, answer C. One rate alone never gives the joint time; this is the standard C for combined-work DS.
**mistake_a:** A requires (1) alone sufficient — need both rates.
**mistake_b:** B requires (2) alone sufficient — need both.
**mistake_d:** D requires each alone — neither has both.
**mistake_e:** E says together insufficient — but combined-rate formula gives unique time.
**common_trap:** Adding rates conceptually but forgetting that *one rate alone* never tells you the combined time. Both individual rates needed.
**takeaway:** Combined-rate DS: T_combined = 1/(1/T_A + 1/T_B). Need both individual times. Standard C answer for joint-work problems.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q37
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Percent change / ratios

At a company, the ratio of men to women is 3 to 5. After 10 new employees were hired, the ratio became 2 to 3. How many men worked at the company before the hiring?

(1) All 10 new hires were men.
(2) After the hiring, there were 50 women at the company.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** Original men=3k, women=5k. New ratio 2:3 after 10 hires. (1) m=10, w=0 → solve for k uniquely → 90 men.
**situation:** Men:women started 3:5 and became 2:3 after 10 new hires; the question asks how many men worked there before. Statement (1): all 10 hires were men; statement (2): after hiring there were 50 women.
**reasoning:** *Value DS — write original 3k men, 5k women, with m men and w women hired (m + w = 10).* The new ratio gives (3k + m)/(5k + w) = 2/3, i.e., 3m − 2w = k. Statement (1): m = 10, w = 0 gives k = 30, so original men = 3·30 = 90 — sufficient. Statement (2): post-women 5k + w = 50, but without the hire breakdown the system is under-determined (it forces a non-integer m), so it can't fix the original count — insufficient. Since (1) alone solves it, the answer is A. When the hire breakdown is specified, the original count follows algebraically.
**mistake_b:** B requires (2) alone sufficient — but the system is under-determined and inconsistent without the breakdown.
**mistake_c:** C-trap — adding (2) doesn't help; (1) already solves.
**mistake_d:** D requires each alone — (2) fails.
**mistake_e:** E says together insufficient — but (1) alone solves.
**common_trap:** Picking C because the problem feels like it needs both. But when (1) fully constrains the hiring breakdown, the original count drops out cleanly.
**takeaway:** Ratio-change DS: when the *breakdown of new hires* is specified, solve algebraically; you don't need the post-hire absolute counts.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q38
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Sequences / series

In the sequence a_1, a_2, a_3, ..., each term after the first is a fixed amount greater than the previous term. What is a_10?

(1) a_1 + a_2 + a_3 = 15.
(2) a_4 + a_5 + a_6 = 33.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Arithmetic seq: a_n = a_1 + (n−1)d. (1) gives one equation; (2) gives another. Together: solve for a_1 and d uniquely.
**situation:** In an arithmetic sequence (each term a fixed amount above the previous), the question asks for a₁₀. Statement (1): a₁ + a₂ + a₃ = 15; statement (2): a₄ + a₅ + a₆ = 33.
**reasoning:** *Value DS — a₁₀ = a₁ + 9d needs both a₁ and d.* Statement (1): 3a₁ + 3d = 15, i.e., a₁ + d = 5 — one equation, two unknowns, insufficient. Statement (2): 3a₁ + 12d = 33, i.e., a₁ + 4d = 11 — one equation, insufficient. Together: subtracting gives 3d = 6, so d = 2 and a₁ = 3, hence a₁₀ = 3 + 9·2 = 21 — sufficient, answer C. Two independent linear relations fix the two sequence parameters.
**mistake_a:** A requires (1) alone sufficient — but two unknowns.
**mistake_b:** B requires (2) alone sufficient — same.
**mistake_d:** D requires each alone — neither does.
**mistake_e:** E says together insufficient — but two independent linear equations solve.
**common_trap:** Trying to compute a_10 directly from one statement. Arithmetic sequences need *both* a_1 and d — two pieces of independent info.
**takeaway:** Arithmetic-sequence DS: needs *both* first term and common difference. One sum gives one equation; you need a second independent sum.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q39
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Absolute value

Is |2x - 5| < 3?

(1) x > 2.
(2) x < 3.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Yes/no |2x−5|<3 ↔ 1<x<4. (1) x>2 alone: x=3 yes, x=10 no. (2) x<3 alone: x=2 yes, x=0 no. Together: 2<x<3 ⊂ (1,4) → always yes.
**situation:** The question asks whether |2x − 5| < 3. Statement (1): x > 2; statement (2): x < 3.
**reasoning:** *Yes/no DS — first translate the target: |2x − 5| < 3 ⟺ 1 < x < 4.* Statement (1): x > 2 gives x = 3 (yes) or x = 10 (no) — insufficient. Statement (2): x < 3 gives x = 2 (yes) or x = 0 (no) — insufficient. Together: 2 < x < 3, fully inside (1, 4), so the answer is always yes — sufficient, answer C. Translate |expr| < k into a bounded interval before comparing to the statements' ranges.
**mistake_a:** A requires (1) alone sufficient — but yes/no split.
**mistake_b:** B requires (2) alone sufficient — same split.
**mistake_d:** D requires each alone — neither works.
**mistake_e:** E says together insufficient — but the intersection is contained in the target interval.
**common_trap:** Forgetting to *translate* |2x−5|<3 into the equivalent interval 1<x<4. Without that, the comparison to x>2 and x<3 isn't visible.
**takeaway:** Absolute-value DS: translate |expr|<k into a bounded interval first, then check whether each statement's interval lies inside.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q40
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Sets / overlap

At a conference of 80 attendees, each person drinks coffee, tea, or both. How many attendees drink only coffee?

(1) 50 attendees drink coffee.
(2) 15 attendees drink both coffee and tea.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Only-coffee = total-coffee − both. (1) gives total-coffee; (2) gives both. Together: 50−15=35.
**situation:** Of 80 attendees who each drink coffee, tea, or both, the question asks how many drink only coffee. Statement (1): 50 drink coffee; statement (2): 15 drink both.
**reasoning:** *Value DS — only-coffee = total-coffee − both.* Statement (1): coffee = 50 but no overlap — insufficient. Statement (2): both = 15 but no coffee total — insufficient. Together: 50 − 15 = 35 — sufficient, answer C. The "everyone drinks at least one" setup is what makes only-coffee = total-coffee − both.
**mistake_a:** A requires (1) alone sufficient — but overlap unknown.
**mistake_b:** B requires (2) alone sufficient — but total unknown.
**mistake_d:** D requires each alone — neither works.
**mistake_e:** E says together insufficient — but overlap-subtraction directly solves.
**common_trap:** Set-overlap DS often surfaces the "everyone is in at least one" assumption. The 80-attendees-each-drinks-something detail is given upfront and crucial.
**takeaway:** Set-overlap DS: only-A = (total-A) − (both-A-and-B). Need both pieces.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q41
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Geometry

A rectangle has area 48. What is its perimeter?

(1) The length is 3 times the width.
(2) The length and width are both integers.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** (1) L=3W and LW=48 → W=4, L=12 → perimeter 32. (2) integer pairs (1,48),(2,24),…(6,8) give different perimeters. A.
**situation:** A rectangle has area 48; the question asks for its perimeter. Statement (1): length = 3 × width; statement (2): length and width are both integers.
**reasoning:** *Value DS — is the perimeter pinned down?* Statement (1): L = 3W with LW = 48 gives 3W² = 48, so W = 4, L = 12, perimeter = 32 — sufficient. Statement (2): integer factor pairs of 48 — (1,48), (2,24), (3,16), (4,12), (6,8) — give perimeters 98, 52, 38, 32, 28, all different — insufficient. Since (1) alone fixes the shape, the answer is A. A fixed area plus integer dimensions still permits many factor pairs; a length-to-width ratio is what determines the shape.
**mistake_b:** B requires (2) alone sufficient — but multiple integer pairs.
**mistake_c:** C-trap — adding (2) doesn't help; (1) already pins it.
**mistake_d:** D requires each alone — (2) fails.
**mistake_e:** E says together insufficient — but (1) alone solves.
**common_trap:** Picking C because integer constraint *seems* to help. But fixed area + integer dimensions still permits many factor pairs; you need the *specific* shape constraint from (1).
**takeaway:** Rectangle-perimeter DS with fixed area: shape constraint (length-to-width ratio) is the deterministic lever. Integer constraint alone permits many pairs.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q42
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Rates/Work

A car travels from town X to town Y. What was its average speed for the entire trip?

(1) The car traveled 180 miles.
(2) The first half of the trip took 2 hours and the second half took 3 hours.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Avg speed = total distance / total time. (1) gives distance only. (2) gives total time only (5h). Together: 180/5 = 36 mph.
**situation:** A car travels from X to Y; the question asks its average speed for the whole trip. Statement (1): it traveled 180 miles; statement (2): the first half took 2 hours and the second half took 3 hours.
**reasoning:** *Value DS — average speed = total distance / total time.* Statement (1): 180 miles, no time — insufficient. Statement (2): total time = 2 + 3 = 5 hours, but distance unknown — insufficient. Together: 180 / 5 = 36 mph — sufficient, answer C. Distance plus time always determines average speed; stop once you have both.
**mistake_a:** A requires (1) alone sufficient — but no time given.
**mistake_b:** B requires (2) alone sufficient — but no total distance.
**mistake_d:** D requires each alone — neither has both.
**mistake_e:** E says together insufficient — but distance + time = avg speed.
**common_trap:** Picking E because the question feels under-specified. Two complementary pieces (distance + time) always solve avg speed.
**takeaway:** Avg-speed DS: total distance + total time fully determines avg speed. Stop the moment you have both.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q43
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Sequences / series

The sequence s_1, s_2, s_3, ... is defined by s_n = s_(n-1) + s_(n-2) for all n ≥ 3. Is s_7 > 40?

(1) s_3 = 5.
(2) s_4 = 8.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Recurrence s_n = s_{n−1} + s_{n−2}. Express s_7 in terms of s_1, s_2: s_7 = 5s_1 + 8s_2. (1) s_1+s_2=5; (2) s_1+2s_2=8. Together: solve uniquely.
**situation:** A Fibonacci-like sequence has s_n = s_{n−1} + s_{n−2} for n ≥ 3; the question asks whether s₇ > 40. Statement (1): s₃ = 5; statement (2): s₄ = 8.
**reasoning:** *Yes/no DS — express s₇ via the two seeds: s₇ = 5s₁ + 8s₂.* Statement (1): s₃ = s₁ + s₂ = 5 is one equation with many s₇ values — insufficient. Statement (2): s₄ = s₁ + 2s₂ = 8 is one equation — insufficient. Together: subtracting gives s₂ = 3, s₁ = 2, so s₇ = 10 + 24 = 34 < 40, a definite no — sufficient, answer C. A two-term linear recurrence is fixed by two initial values, and a definite "no" is sufficient.
**mistake_a:** A requires (1) alone sufficient — but s_7 depends on both s_1 and s_2.
**mistake_b:** B requires (2) alone sufficient — same issue.
**mistake_d:** D requires each alone — neither has both initial values.
**mistake_e:** E says together insufficient — but two equations in two unknowns solve.
**common_trap:** Forgetting that *definite no* is sufficient. s_7 = 34 < 40 settles "Is s_7 > 40?" with a definitive no.
**takeaway:** Recurrence DS: a 2-term linear recurrence is fully specified by *two* initial values. Two equations on those values = unique sequence.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q44
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Geometry

In the xy-plane, the circle C has center (h, k) and radius r. Does the point (3, 4) lie inside circle C?

(1) The circle passes through the origin (0, 0).
(2) h = 0 and k = 0.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Point inside iff distance(center, point) < r. (1) origin on circle → h²+k²=r² (many configurations). (2) center at origin (no radius). Together: r=0, degenerate.
**situation:** Circle C has center (h, k) and radius r; the question asks whether (3, 4) lies inside it. Statement (1): the circle passes through the origin; statement (2): h = 0 and k = 0.
**reasoning:** *Yes/no DS — (3, 4) is inside iff (3 − h)² + (4 − k)² < r².* Statement (1): the origin on the circle means h² + k² = r², which allows both answers — (h, k, r) = (3, 4, 5) gives yes, (−10, 0, 10) gives no — insufficient. Statement (2): center at the origin but unknown r — r = 10 (yes) vs r = 2 (no) — insufficient. Together: a center at the origin that also passes through the origin forces r = 0, a degenerate non-circle with no valid case to evaluate — so the answer is E. Contradictory or degenerate combined information is insufficient, not sufficient.
**mistake_a:** A requires (1) alone sufficient — but configurations split yes/no.
**mistake_b:** B requires (2) alone sufficient — but radius unknown.
**mistake_c:** C says together sufficient — but combined info is inconsistent (zero-radius is degenerate).
**mistake_d:** D requires each alone — neither works.
**common_trap:** Picking C because "two pieces of info should solve geometry." But contradictory info is *not* sufficient.
**takeaway:** Geometry DS: when two statements jointly force a degenerate or impossible figure, the combined info is *insufficient* (no valid case exists to evaluate).
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q45
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Percent change / ratios

A positive integer N is the product of exactly two distinct primes p and q. What is N?

(1) The sum of the divisors of N (including 1 and N) is 72.
(2) p + q = 20.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** N=pq, distinct primes. Divisor sum = (1+p)(1+q) = 72 (1) gives multiple candidates; (2) gives multiple. Intersection: N=51.
**situation:** N is the product of two distinct primes p and q; the question asks for N. Statement (1): the sum of N's divisors (including 1 and N) is 72; statement (2): p + q = 20.
**reasoning:** *Value DS — the divisors of N = pq are {1, p, q, pq}, summing to (1 + p)(1 + q).* Statement (1): (1 + p)(1 + q) = 72 has several distinct-prime solutions — (2, 23) → 46, (3, 17) → 51, (5, 11) → 55 — insufficient. Statement (2): p + q = 20 gives (3, 17) → 51 and (7, 13) → 91 — insufficient. Together: the candidate sets {46, 51, 55} and {51, 91} intersect only at N = 51 — sufficient, answer C. Enumerate factor pairs systematically rather than assuming a single factorization of 72.
**mistake_a:** A requires (1) alone sufficient — three candidates remain.
**mistake_b:** B requires (2) alone sufficient — two candidates remain.
**mistake_d:** D requires each alone — neither narrows to one.
**mistake_e:** E says together insufficient — but the intersection is a single value.
**common_trap:** Trying to factor 72 only as 8×9 and missing other pairs. Always enumerate factor pairs systematically.
**takeaway:** Two-prime DS: divisor sum (1+p)(1+q) and sum p+q each give candidate sets; intersection often unique.
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q46
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Rates with a Ratio Constraint

At a factory, machine X and machine Y each produce parts at constant but different rates. How many parts per hour does machine X produce?

(1) Working together, the two machines produce 540 parts per hour.
(2) Machine Y produces 40% more parts per hour than machine X.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** (1) x+y=540 (scalar). (2) y=1.4x (ratio). Together: 2.4x=540 → x=225.
**situation:** Machines X and Y produce at constant but different rates; the question asks X's rate. Statement (1): together they make 540 parts/hour; statement (2): Y makes 40% more per hour than X.
**reasoning:** *Value DS — let X = x and Y = y.* Statement (1): x + y = 540 is one equation in two unknowns — insufficient. Statement (2): y = 1.4x is a ratio with no scalar — insufficient. Together: 2.4x = 540 gives x = 225 — sufficient, answer C. One absolute total plus one ratio between the rates pins both — the rate analogue of the ratio-and-count pairing.
**mistake_a:** A requires (1) alone sufficient — but two unknowns.
**mistake_b:** B requires (2) alone sufficient — ratio without scalar fails.
**mistake_d:** D requires each alone — neither does.
**mistake_e:** E says together insufficient — but scalar + ratio = unique solution.
**common_trap:** Picking E because each alone looks "too thin." Scalar + ratio is a textbook C combination.
**takeaway:** Rate DS: one absolute total + one ratio between rates = unique values for each. Like the classic ratio-and-count pairing.
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q47
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Geometry — Triangle Area

In a plane, triangle ABC has vertices A, B, and C. What is the area of triangle ABC?

(1) The length of side BC is 10 units.
(2) The perpendicular distance from vertex A to line BC is 6 units.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Triangle area = (1/2)·base·height. (1) gives base; (2) gives height. Together: (1/2)(10)(6)=30.
**situation:** Triangle ABC has vertices A, B, C; the question asks its area. Statement (1): BC = 10; statement (2): the perpendicular distance from A to line BC is 6.
**reasoning:** *Value DS — area = ½ · base · height.* Statement (1): base = 10 only — insufficient. Statement (2): height = 6 only — insufficient. Together: ½ · 10 · 6 = 30 — sufficient, answer C. DS asks for unique determination, not a specific drawn shape; base and its matching perpendicular height are exactly what the area formula needs.
**mistake_a:** A requires (1) alone sufficient — but no height.
**mistake_b:** B requires (2) alone sufficient — but no base.
**mistake_d:** D requires each alone — neither has both.
**mistake_e:** E says together insufficient — but base × height = area.
**common_trap:** Imagining a specific triangle shape from one piece of info. DS is about *unique determination*, not shape inference.
**takeaway:** Triangle-area DS: base AND perpendicular height to that base. Two-piece formula = standard C.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q48
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Number Properties — Parity and Multiples

If x and y are positive integers with x < y, is y − x a multiple of 4?

(1) x + y is a multiple of 8.
(2) xy is a multiple of 16.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Yes/no. Each alone has split. Together: x+y div by 8 (so both even) AND xy div by 16 → both x,y div by 4 → y−x div by 4.
**situation:** For positive integers x < y, the question asks whether y − x is a multiple of 4. Statement (1): x + y is a multiple of 8; statement (2): xy is a multiple of 16.
**reasoning:** *Yes/no DS.* Statement (1): (1, 7) sum 8 gives y − x = 6 (no) vs (2, 6) sum 8 gives y − x = 4 (yes) — insufficient. Statement (2): (1, 16) gives y − x = 15 (no) vs (2, 8) gives y − x = 6 (no), and other cases vary — insufficient. Together: x + y a multiple of 8 forces both even; writing x = 2a, y = 2b, the conditions push a and b to be even too, so x and y are both divisible by 4 and y − x is divisible by 4 — a definite yes, answer C. Combine parity with divisibility-by-a-square to force a higher power.
**mistake_a:** A requires (1) alone sufficient — split shown.
**mistake_b:** B requires (2) alone sufficient — same.
**mistake_d:** D requires each alone — neither works.
**mistake_e:** E says together insufficient — but parity + factor analysis nails it.
**common_trap:** Stopping at "both even" once you get x+y mult of 8. You also need the factor-of-16 from (2) to push to "both div by 4."
**takeaway:** Number-theory DS: combine *parity* with *divisibility-by-square* constraints. They often interact to force divisibility-by-higher-powers.
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q49
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility — Coprime Factors

Is the positive integer n divisible by 12?

(1) n is divisible by 4.
(2) n is divisible by 9.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** 12 = 4·3 (coprime). (1) gives factor 4. (2) gives factor 9 (which contains factor 3). Together: factors 4 and 3 → div by 12.
**situation:** The question asks whether positive integer n is divisible by 12. Statement (1): n is divisible by 4; statement (2): n is divisible by 9.
**reasoning:** *Yes/no DS — 12 = 4 × 3 with 4 and 3 coprime.* Statement (1): divisible by 4 — n = 4 (no) vs n = 12 (yes) — insufficient. Statement (2): divisible by 9 — n = 9 (no) vs n = 36 (yes) — insufficient. Together: divisible by 4 and by 9 means divisible by LCM(4, 9) = 36, which is divisible by 12 — a definite yes, answer C. Note 9 supplies the needed factor of 3; factor the target into coprime pieces and check each is covered.
**mistake_a:** A requires (1) alone sufficient — but div by 4 alone doesn't ensure div by 3.
**mistake_b:** B requires (2) alone sufficient — div by 9 doesn't ensure factor of 4.
**mistake_d:** D requires each alone — neither does.
**mistake_e:** E says together insufficient — but coprime factors compose.
**common_trap:** Forgetting that 9 contains 3, so (2) supplies the 3-factor needed for 12. The coprime-decomposition of 12 = 4·3 is the key.
**takeaway:** Divisibility-by-N DS: factor N into coprime pieces. If statements supply each piece (or stronger), together divides N.
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q50
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Right Triangle — Missing Leg

In right triangle ABC, angle C is the right angle and side AB is the hypotenuse. What is the length of side BC?

(1) AB = 13.
(2) AC = 5.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Right triangle with hypotenuse: BC² = AB² − AC². (1) gives AB; (2) gives AC. Together: 5-12-13 triple → BC=12.
**situation:** Right triangle ABC has the right angle at C, so AB is the hypotenuse; the question asks the length of BC. Statement (1): AB = 13; statement (2): AC = 5.
**reasoning:** *Value DS — by the Pythagorean theorem, BC² = AB² − AC².* Statement (1) gives only AB — insufficient. Statement (2) gives only AC — insufficient. Together: BC² = 169 − 25 = 144, so BC = 12 (the 5-12-13 triple) — sufficient, answer C. Recognizing the triple from one number isn't determination; two sides are needed to fix the third.
**mistake_a:** A requires (1) alone sufficient — one side doesn't fix the other.
**mistake_b:** B requires (2) alone sufficient — same.
**mistake_d:** D requires each alone — neither does.
**mistake_e:** E says together insufficient — but Pythagoras solves uniquely.
**common_trap:** Recognizing 5-12-13 from one number alone. But DS is about *unique determination*; you need both to lock it.
**takeaway:** Right-triangle DS: the Pythagorean triple needs *two* sides to fix the third. Standard C answer for missing-leg questions.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q51
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Parallel Lines and Transversals

In a plane, two distinct lines l and m are cut by a transversal t. Are lines l and m parallel?

(1) Two corresponding angles formed by the transversal are equal in measure.
(2) The transversal t is perpendicular to both line l and line m.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** Each statement is a *standard parallel-line theorem*. (1) equal corresponding angles ⟺ parallel. (2) common perpendicular ⟺ parallel. D.
**situation:** Two distinct lines l and m are cut by a transversal t; the question asks whether l and m are parallel. Statement (1): two corresponding angles are equal; statement (2): t is perpendicular to both l and m.
**reasoning:** *Yes/no DS — each statement is a standalone parallel-line criterion.* Statement (1): equal corresponding angles is the converse of the corresponding-angles postulate, forcing l ∥ m — sufficient. Statement (2): a transversal perpendicular to both lines forces them parallel — sufficient. Each statement alone settles it, so the answer is D. Geometric criteria are often independently sufficient; don't combine reflexively.
**mistake_a:** A requires only (1) sufficient — but (2) also solves.
**mistake_b:** B requires only (2) sufficient — but (1) also does.
**mistake_c:** C-trap — combining is unnecessary; each alone is a parallel theorem.
**mistake_e:** E says together insufficient — both alone solve.
**common_trap:** *C-trap on geometry theorems*: each piece of geometric info is often a *standalone* sufficiency criterion. Don't combine reflexively.
**takeaway:** Parallel-line DS: equal corresponding angles, equal alternate interior angles, common perpendicular — each is *independently* sufficient.
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q52
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Revenue Composition

A company's total 2023 revenue was the sum of revenue from three divisions, A, B, and C. What was Division A's 2023 revenue?

(1) Divisions A, B, and C contributed to 2023 revenue in the ratio 3 : 2 : 1 respectively.
(2) Division C's 2023 revenue was $20 million.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** (1) ratio 3:2:1 (no scalar). (2) C=$20M (no ratio). Together: 1 part = $20M → A = 3·$20M = $60M.
**situation:** Total 2023 revenue is the sum of divisions A, B, and C; the question asks Division A's revenue. Statement (1): A : B : C = 3 : 2 : 1; statement (2): C earned $20 million.
**reasoning:** *Value DS — A's actual revenue needs both the ratio and an anchor.* Statement (1): the 3 : 2 : 1 ratio has no dollar amount — insufficient. Statement (2): C = $20M with no relative size — insufficient. Together: C is 1 part = $20M, so A (3 parts) = $60M — sufficient, answer C. A ratio plus at least one absolute value fixes every component.
**mistake_a:** A requires (1) alone sufficient — ratio without anchor.
**mistake_b:** B requires (2) alone sufficient — anchor without ratio.
**mistake_d:** D requires each alone — neither has both.
**mistake_e:** E says together insufficient — but ratio + anchor = unique.
**common_trap:** Trying to compute total revenue from (2) alone. C alone doesn't tell you A.
**takeaway:** Revenue/composition DS with ratios: ratio + at least one absolute value = unique solution for any other component.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q53
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Insufficient Despite Two Statements

In a class of 30 students, the ratio of boys to girls is 3 to 2. How many boys scored above the class mean on a recent test?

(1) The class mean on the test was 75.
(2) 14 students scored above the class mean.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Question asks how many *boys* scored above mean. Neither statement gives the gender breakdown of the 14 high-scorers. Together still doesn't.
**situation:** In a class of 30 with boys:girls = 3:2 (18 boys, 12 girls), the question asks how many boys scored above the class mean. Statement (1): the mean was 75; statement (2): 14 students scored above the mean.
**reasoning:** *Value DS — we need the gender breakdown of the above-mean group.* Statement (1): the mean's numeric value says nothing about who is above it — insufficient. Statement (2): 14 scored above the mean, but their gender mix is open — insufficient. Together: there is still no link between the count of 14 and how many are boys (anywhere from a few to all 14) — so the answer is E. Aggregate counts and demographic ratios don't determine a subgroup split by an independent criterion like above-mean.
**mistake_a:** A requires (1) alone sufficient — mean value tells nothing.
**mistake_b:** B requires (2) alone sufficient — gender split of 14 still unknown.
**mistake_c:** C says together sufficient — but the gender mix is independent of the count.
**mistake_d:** D requires each alone — neither does.
**common_trap:** Picking C because "everything seems specified" — but the *gender breakdown of the 14* is the missing piece that no statement supplies.
**takeaway:** When the question asks for one *subgroup's* count, beware: aggregate counts + ratios don't determine subgroup-by-criterion splits. The criterion (here: above-mean) is independent of the demographic.
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q54
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Triangle Area — Two Sides and the Angle Between Them

What is the area of triangle ABC?

(1) AB = 8 and AC = 6.
(2) Angle BAC = 90°.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Triangle area = (1/2)·a·b·sin(angle between them). (1) gives two sides; (2) gives the angle. Together: (1/2)(8)(6)(1)=24.
**situation:** The question asks the area of triangle ABC. Statement (1): AB = 8 and AC = 6; statement (2): angle BAC = 90°.
**reasoning:** *Value DS — area = ½ · AB · AC · sin(∠BAC), the SAS formula.* Statement (1): two sides but no included angle, so the area isn't fixed — insufficient. Statement (2): the angle but no sides — insufficient. Together: ½ · 8 · 6 · sin 90° = 24 — sufficient, answer C. Two sides plus the included angle (or base and height) is what area requires; two sides alone aren't enough.
**mistake_a:** A requires (1) alone sufficient — but area depends on angle.
**mistake_b:** B requires (2) alone sufficient — but no sides given.
**mistake_d:** D requires each alone — neither has both pieces.
**mistake_e:** E says together insufficient — but two-sides + included-angle is the SAS area formula.
**common_trap:** Forgetting that triangle area requires *side, side, and the included angle* (or base and height). Two sides without the angle aren't enough.
**takeaway:** Triangle-area DS via SAS: (1/2)·a·b·sin(C). When C=90°, sin=1, formula reduces to (1/2)·a·b — the right-triangle case.
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q55
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Rectangle Area — Given Perimeter and One Dimension

A rectangle has perimeter P and area A. What is the value of A?

(1) The rectangle's perimeter is 28.
(2) The rectangle's length is 3 times its width.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Need l+w (perimeter) AND l/w ratio. (1) gives l+w=14. (2) gives l=3w. Solve: w=3.5, l=10.5, area=36.75.
**situation:** A rectangle has perimeter P and area A; the question asks A. Statement (1): the perimeter is 28; statement (2): the length is 3 times the width.
**reasoning:** *Value DS — area needs both l + w and the shape.* Statement (1): 2(l + w) = 28 gives l + w = 14, but the area varies with the split — insufficient. Statement (2): l = 3w is a ratio with no scalar — insufficient. Together: l + w = 14 and l = 3w give 4w = 14, so w = 3.5, l = 10.5, area = 36.75 — sufficient, answer C. The same perimeter allows areas from near zero up to 49 (the square), so perimeter alone never fixes area.
**mistake_a:** A requires (1) alone sufficient — perimeter doesn't fix area.
**mistake_b:** B requires (2) alone sufficient — ratio without anchor.
**mistake_d:** D requires each alone — neither does.
**mistake_e:** E says together insufficient — but two equations in two unknowns solve.
**common_trap:** Believing perimeter pins down area. Same perimeter (28) with different splits gives areas from near-zero to 49 (square).
**takeaway:** Rectangle DS: perimeter alone never fixes area. Need *another* dimension or shape constraint (ratio).
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q56
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Mean and Sum — Isolating the Median

A data set consists of 7 numbers. What is the median of the data set?

(1) The mean of the data set is 20.
(2) The sum of the three smallest numbers and the three largest numbers (that is, the sum of all numbers except the median) is 98.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Sort: a≤b≤c≤d≤e≤f≤g, median=d. (1) total sum=140. (2) sum without median=98. Subtract: d=42.
**situation:** A data set has 7 numbers; the question asks the median. Statement (1): the mean is 20; statement (2): the sum of all numbers except the median is 98.
**reasoning:** *Value DS — sort as a ≤ … ≤ g; the median is the 4th value, d.* Statement (1): mean 20 gives total 140 but doesn't isolate d — insufficient. Statement (2): the all-but-median sum is 98 but doesn't give d alone — insufficient. Together: d = 140 − 98 = 42 — sufficient, answer C. Total sum minus the "all but the median" sum isolates the median; don't assume the mean equals the median.
**mistake_a:** A requires (1) alone sufficient — but mean doesn't pin median.
**mistake_b:** B requires (2) alone sufficient — but it's a partial sum.
**mistake_d:** D requires each alone — neither does.
**mistake_e:** E says together insufficient — but subtraction isolates the median.
**common_trap:** Picking D thinking mean=20 alone gives median=20. Mean ≠ median in general.
**takeaway:** Median-isolation DS: total sum + (total minus median) = median. Subtraction trick when one statement gives an "all but one" sum.
**related_reading:** reading-di-02-data-sufficiency-logic

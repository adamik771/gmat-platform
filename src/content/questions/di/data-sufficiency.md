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
**fastest_path:** This is a "find the value" DS, so sufficiency means pinning x to exactly one number — a single linear equation in one unknown always does that, a range never does. Classify each statement on that one test.
**explanation:** For value DS, a statement is sufficient only if it forces *one* value of x. **(1):** 3x + 7 = 22 → 3x = 15 → x = 5 — one equation, one unknown, exactly one solution, so it's sufficient. **(2):** "positive integer less than 10" allows x = 1, 2, 3, …, 9 — nine different values, so x isn't pinned down and it's not sufficient. (1) alone works, (2) alone doesn't → **A**.
**mistake_b:** Picks (2) as the sufficient statement, but "positive integer less than 10" leaves nine candidates (1–9); narrowing the field to a list isn't the same as forcing a single value.
**mistake_c:** The C-trap — combining statements "to be safe" when (1) alone already nails x = 5. Choosing C here means you didn't trust a statement that was already sufficient on its own.
**mistake_d:** "Each alone" requires *both* statements to work individually, but (2) leaves nine possible values, so it fails by itself.
**mistake_e:** Says even both together can't solve it, yet (1) by itself already gives x = 5 — it's clearly solvable.
**common_trap:** Over-combining. The instant one statement forces a unique value, stop — reaching for the second statement "for safety" is exactly how a clean A turns into a wrong C.
**takeaway:** In value DS, one linear equation in one variable is the canonical sufficient statement; a range or inequality almost never is. Test each statement against "does this force exactly one value?"
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
**explanation:** (1) div by 3: n=9 no, n=12 yes — split. (2) div by 2: n=8 no, n=12 yes — split. Together: div by 2 *and* 3, with 2,3 coprime → div by 6. Sufficient. Answer C.
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
**explanation:** (1): Original $120, no discount % → can't compute. (2): 25% off, no original → can't compute. Together: $120 × 0.75 = $90. Sufficient. Answer C.
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
**explanation:** (1): 3:4 ratio without total → infinite scalings. (2): 28 students without ratio → can't decompose. Together: boys = (3/7) × 28 = 12. Sufficient. Answer C.
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
**explanation:** (1): Sorted set 3,7,11,15,19 → median = 11 (third). Sufficient. (2): mean = 11 admits many medians, e.g., {1,2,11,20,21} (med 11) vs {1,2,3,20,29} (med 3). Not sufficient. Answer A.
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
**explanation:** (1): a−b>0 doesn't fix signs. a=5,b=2 (yes); a=3,b=−1 (no). Insufficient. (2): a+b>0 same: a=5,b=2 (yes); a=5,b=−2 (no). Insufficient. Together: a=3,b=1 (yes); a=5,b=−2 (a−b=7>0, a+b=3>0, but a/b=−5/2<0, no). Still split. Answer E.
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
**explanation:** (1) k odd: k=1 → 1·2=2, no; k=3 → 3·4=12, yes. Insufficient. (2) k prime > 2 ⟹ k odd. k=3 yes; k=5 → 30, no. Insufficient. Together: (2) implies (1), so combined info = (2) alone. Still insufficient. Answer E.
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
**explanation:** Revenue = $500K. (1): expenses = 0.80 × 500 = $400K → profit = $100K. Sufficient. (2): margin 20% → profit = 0.20 × 500 = $100K. Sufficient. Each alone works. Answer D.
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
**explanation:** (1): A:B = 2:3 → fraction of A = 2/(2+3) = 2/5. Sufficient (no volumes needed). (2): B = 6L without ratio — can't determine fraction. Not sufficient. Answer A.
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
**fastest_path:** Range depends on exactly two numbers — the maximum and the minimum (range = max − min). Everything else about the set (that there are seven values, that they're distinct) is noise. So ask only: do the statements hand me both endpoints?
**explanation:** Range = max − min, so the *only* data that matters is the two endpoints. **(1):** min = −4, but the maximum could be 5, 50, or anything larger, so the range isn't fixed → not sufficient. **(2):** max = 18, but the minimum is unknown, so the range still isn't fixed → not sufficient. **Together:** max = 18 and min = −4 give range = 18 − (−4) = 22, one fixed value → sufficient. Answer **C**. The "seven distinct integers" is a distractor — count and distinctness never enter a range calculation.
**mistake_a:** (1) gives the minimum but no maximum, so the range could be any value above that floor — one endpoint can't fix a difference.
**mistake_b:** (2) gives the maximum but no minimum — the same gap in reverse.
**mistake_d:** "Each alone" needs both statements to work solo, but each supplies only one of the two endpoints.
**mistake_e:** Says even together they fail, yet two fixed endpoints determine the range exactly: 18 − (−4) = 22.
**common_trap:** Letting extra set details ("seven distinct integers") feel like usable constraints. They restrict the *interior* of the set, not its endpoints, so they're irrelevant to the range.
**takeaway:** For range DS, strip the set down to its two endpoints — max and min are the only inputs. Count, spacing, and distinctness are decoys.
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
**explanation:** (1): |x−3|=2y+1 with y a non-negative integer admits multiple x's. Insufficient. (2): x<3 and y=0 — x could be 2,1,0,…. Insufficient. Together: y=0 in (1) → |x−3|=1 → x=2 or 4; (2) restricts x<3 → x=2. Sufficient. Answer C.
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
**explanation:** Factor pairs of 36: (1,36),(2,18),(3,12),(4,9),(6,6),(9,4),(12,3),(18,2),(36,1). (1) p perfect square: (1,36)→37 yes, (4,9)→13 no, split. (2) q<p: (9,4)→13 no, (12,3)→15 yes, split. Together (perfect square AND q<p): (9,4)→13 no, (36,1)→37 yes. Still split. Answer E.
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
**explanation:** Let T = last year's total. (1): FT this year = 1.1·0.6T = 0.66T, but PT unknown → total unknown. (2): PT this year = 0.95·0.4T = 0.38T, but FT unknown. Together: 0.66T + 0.38T = 1.04T > T → total increased. Sufficient. Answer C.
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
**fastest_path:** H's share of the profit = H's investment ÷ total investment, so you need exactly two numbers: H's piece and the whole. The F = 2G ratio describes the *other* two partners and never substitutes for either. Check which statement supplies which.
**explanation:** H's fraction of the profit equals H's investment over the total: h / (F + G + H). The ratio F = 2G means F + G = 3g, so the total is 3g + h — but you still need real amounts. **(1):** H = $40,000, yet with no value for g (or the total) you can't form the fraction → not sufficient. **(2):** total = $140,000, but with no value for H you can't isolate H's share → not sufficient. **Together:** 40,000 / 140,000 = **2/7** → sufficient. Answer **C**.
**mistake_a:** (1) gives H's dollar amount but no total to divide by — a part without a whole can't form a fraction.
**mistake_b:** (2) gives the total but not H's amount — a whole without the part can't either.
**mistake_d:** "Each alone" needs both statements to work individually; each provides only one of the two required quantities.
**mistake_e:** Claims even together it fails, but part ($40K) over whole ($140K) is a fully determined fraction.
**common_trap:** Treating the F = 2G ratio as if it unlocked everything. It fixes the F:G split but says nothing about how large H is relative to the total — H's data is independent and must be supplied on its own.
**takeaway:** "Fraction of total" DS needs the part and the total. A ratio among the *other* components fills neither slot.
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
**explanation:** (1): Range = 4 ⟹ SD ≤ range/2 = 2 < 5. Definite no. Sufficient. (2): Mean = 50 says nothing about spread — values could be all 50 (SD 0) or spread widely (SD > 5). Insufficient. Answer A.
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
**explanation:** (1): 3n odd. Since 3 is odd, 3n's parity = n's parity. So n is odd. Sufficient (yes). (2): n+4 odd, 4 is even, so n must be odd. Sufficient (yes). Each alone settles it. Answer D.
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
**explanation:** (1): 2x+3y=17 alone — infinite (x,y) pairs. (2): y=3 alone — x unconstrained. Together: 2x+9=17 → x=4. Sufficient. Answer C.
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
**explanation:** (1): L²+W²=100. Many (L,W) pairs (6,8 → 48; 7.07,7.07 → 50). Insufficient. (2): L+W=14. 7×7=49 vs 6×8=48. Insufficient. Together: (L+W)²−(L²+W²) = 2LW → 196−100 = 2LW → LW=48. Sufficient. Answer C.
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
**explanation:** (1): p² even. Since 2 is prime, p² having factor 2 means p has factor 2 → p even. Sufficient (yes). (2): p+1 odd ⟹ p even. Sufficient (yes). Each alone solves. Answer D.
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
**fastest_path:** The question wants the *signed* order x > y. Squaring destroys sign (x² > y² only tells you |x| > |y|), so (1) can't settle it; but x − y > 0 is just a rearrangement of x > y, so (2) answers it outright.
**explanation:** We need a definite yes/no on x > y. **(1):** x² > y² is equivalent to |x| > |y| — it compares magnitudes, not signs. Test it: x = 3, y = 1 gives "yes" (3 > 1), but x = −3, y = 1 also satisfies x² > y² while giving "no" (−3 > 1 is false). Two opposite answers → not sufficient. **(2):** x − y > 0 rearranges directly to x > y — a guaranteed "yes" → sufficient. (2) alone settles it, (1) doesn't → **B**.
**mistake_a:** Backs (1) as sufficient, but squaring strips sign: x = −3, y = 1 satisfies x² > y² yet makes x > y false, so (1) yields both answers.
**mistake_c:** Says you need both statements, but (2) alone already forces "yes" — (1) adds nothing.
**mistake_d:** "Each alone" fails because (1) is insufficient by itself (the negative-value counterexample).
**mistake_e:** Claims even together they fail, but (2) by itself is sufficient, so the pair certainly is.
**common_trap:** Assuming x² > y² preserves order. Squaring is sign-blind — the moment you see a squared inequality in DS, test a negative value to expose it.
**takeaway:** For "is x > y?", only sign-preserving information (like x − y > 0) settles it. Magnitude facts — squares, absolute values — generally cannot.
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
**explanation:** (1): 4x+3y=24 with positive integers. Need 24−3y divisible by 4 *and* x positive. Only y=4 works (x=3). y unique → sufficient. (2): x>4 with no integer constraint — infinite y. Insufficient. Answer A.
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
**explanation:** (1): x³>x ↔ x(x²−1)>0 ↔ x in (−1,0) ∪ (1,∞). Both signs possible (yes for x>1, no for −1<x<0). Insufficient. (2): x²<1 ↔ −1<x<1. Both signs. Insufficient. Together: intersection (−1,0) → x<0 always (no). Sufficient. Answer C.
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
**explanation:** (1): n = 10k + 3 → n mod 5 = (10k mod 5) + (3 mod 5) = 0 + 3 = 3. Always 3. Sufficient. (2): n odd. n=1 (r=1); n=3 (r=3); n=5 (r=0). Insufficient. Answer A.
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
**explanation:** (1): a+b=10, c free. Insufficient. (2): b+c=12, a+c=8. Two equations, three unknowns. Adding: a+b+2c=20 — but a+b+c not unique. Insufficient. Together: a+b=10 (from 1), a+b+2c=20 (sum of 2's eqs) → 2c=10, c=5 → a+b+c=15. Sufficient. Answer C.
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
**explanation:** (1): B=70, A+C=110 — many splits. Insufficient. (2): Isosceles, but which pair equal? Insufficient. Together: B=70 and isosceles, three cases — A=B=70 → A=70; B=C=70 → A=40; A=C, both =55. Three values for A. Insufficient. Answer E.
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
**explanation:** (1): x<y. Pos x=1,y=2 (x/y=0.5, yes). Neg x=−2,y=−1 (x/y=2, no). Insufficient. (2): xy>0 (same sign). x=1,y=2 (yes); x=2,y=1 (no). Insufficient. Together: both pos with x<y → x/y<1 (yes); both neg with x<y → x/y>1 (no). Still split. Answer E.
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
**explanation:** Sorted a<b<c<d<e; median=c, mean=(sum)/5. (1): e > 2(a+b+c+d) ⟹ sum > 3(a+b+c+d), so mean > 3(a+b+c+d)/5 = (3/5)·(sum without e). Concrete: {1,2,3,4,21} (e=21 > 2·10=20). Median=3, mean=6.2 → no. The huge e forces mean above median. Sufficient (always "no"). (2): smallest=1. {1,2,3,4,5} (med=3=mean, no). {1,2,10,11,12} (med=10, mean=7.2, yes). Insufficient. Answer A.
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
**explanation:** (1): Two positive divisors = 1 and x itself = definition of prime. Sufficient (yes). (2): x+1=p². p=2 → x=3 (prime, yes). p=3 → x=8 (not, no). Insufficient. Answer A.
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
**explanation:** Inscribed circle's diameter = square's side. (1): diag=10√2 ⟹ side=10 ⟹ r=5 ⟹ area=25π. Sufficient. (2): region outside = s²−π(s/2)² = s²(1−π/4) = 100−25π ⟹ s=10 ⟹ r=5 ⟹ area=25π. Sufficient. Each alone works. Answer D.
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
**explanation:** (1): ab>0 and bc>0 ⟹ a,b same sign and b,c same sign ⟹ all three share b's sign. All pos (abc>0) or all neg (abc<0). Insufficient. (2): a+b+c>0 admits mixed signs. Insufficient. Together: same sign + positive sum → all pos → abc>0. Sufficient. Answer C.
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
**explanation:** P+Q+R=180. (1) Q=70 alone leaves P+R=110, P unknown. (2) R=55 alone leaves P+Q=125, P unknown. Together: P=180−70−55=55. Sufficient. Answer C.
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
**explanation:** (1): 40 pages / 5 min = 8 pages/min → 12 × 8 = 96. Sufficient. (2): "Twice as many in 10 min as in 5 min" follows from any constant rate — it adds no numerical info. Insufficient. Answer A.
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
**explanation:** (1): y=1.2x — one equation, two unknowns. Insufficient. (2): y=72 — no link to x. Insufficient. Together: 72=1.2x → x=60. Sufficient. Answer C.
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
**explanation:** (1): k=7 → |k−3|=4. Sufficient. (2): (k−3)²=16 → |k−3|=√16=4 (since |x|=√(x²)). k=7 or k=−1, but both give the absolute value 4. Sufficient. Answer D.
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
**explanation:** (1): Slope=3 → b−5=3(a−2). Two unknowns. Insufficient. (2): a=6 alone gives no b. Insufficient. Together: b−5=12 → b=17. Sufficient. Answer C.
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
**explanation:** Combined-rate formula: rate_combined = rate_A + rate_B; time = 1/rate_combined. (1): rate_A = 1/6. Without B's rate, can't combine. (2): rate_B = 1/3. Without A. Together: 1/6 + 1/3 = 1/2 → 2 hours. Sufficient. Answer C.
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
**explanation:** Setup: original 3k men, 5k women. Hires: m men + w women with m+w=10. New ratio (3k+m)/(5k+w)=2/3 → 3m−2w=k. (1): m=10, w=0 → k=30 → original men=3·30=90. Sufficient. (2): post women = 5k+w=50. Combined with the rest gives a non-integer m=35/6, so the constraint isn't internally consistent without specifying the breakdown — can't fix original count. Insufficient. Answer A.
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
**explanation:** (1): 3a_1+3d=15 → a_1+d=5. One equation, two unknowns. Insufficient. (2): 3a_1+12d=33 → a_1+4d=11. One equation. Insufficient. Together: subtract → 3d=6 → d=2, a_1=3. a_10=3+9·2=21. Sufficient. Answer C.
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
**explanation:** Translate: |2x−5|<3 ↔ 1<x<4. (1): x>2 — could be 3 (yes) or 10 (no). Insufficient. (2): x<3 — could be 2 (yes) or 0 (no). Insufficient. Together: 2<x<3, fully inside (1,4) → always yes. Sufficient. Answer C.
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
**fastest_path:** Translate before touching the statements: "only coffee" = (all coffee drinkers) − (both coffee and tea). You need exactly two numbers — the coffee total and the overlap — so just check which statement hands you which.
**explanation:** The question asks how many attendees drink *only* coffee. Since every attendee drinks coffee, tea, or both, the coffee drinkers split into those who drink only coffee and those who drink both, so only coffee = (coffee drinkers) − (both coffee and tea). Finding this value requires knowing both the number of coffee drinkers and the number who drink both.

Statement (1) gives the number of coffee drinkers, 50, but not how many of them also drink tea. The only-coffee count could be 50 (if none also drink tea) or 35 (if 15 do), so statement (1) alone is not sufficient.

Statement (2) gives the number who drink both, 15, but not the total number of coffee drinkers, so there is nothing to subtract it from. Statement (2) alone is not sufficient.

Taken together, the statements give only coffee = 50 − 15 = 35, a single value, so the two statements together are sufficient. (The total of 80 attendees is never used: the only-coffee count depends only on the coffee total and the overlap.)

The correct answer is C.
**mistake_a:** Tempting if you forget the overlap matters — (1) fixes the coffee total at 50, but until you know how many of those also drink tea, only-coffee floats between 35 and 50.
**mistake_b:** (2) gives the intersection (15) with nothing to remove it from — no coffee total means no subtraction, so it's insufficient alone.
**mistake_d:** "Each alone" fails for the same reasons (1) and (2) each fail individually — neither single statement pins only-coffee to one value.
**mistake_e:** The over-caution pick. It feels like overlap problems always need the grand total, but once you have the coffee total and the overlap the subtraction is immediate — together they fully determine the answer.
**common_trap:** Reaching for the group total (80) as if every overlap problem needs it. Here only-coffee = coffee − both, so the 80 is a distractor. Always rephrase the target quantity first and pull only the terms it actually requires.
**takeaway:** For two-set overlap DS, write the target as a formula *before* reading the statements (only-A = A − both; at-least-one = A + B − both; neither = total − at-least-one). Sufficiency is then just "do the statements supply every term in my formula?"
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
**explanation:** (1): L=3W with LW=48 → 3W²=48 → W=4, L=12 → P=32. Sufficient. (2): integer pairs with product 48 yield perimeters 98, 52, 38, 32, 28 — all different. Insufficient. Answer A.
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
**explanation:** (1): 180 miles, no time. Insufficient. (2): "first half" = first half of distance, so total time = 2+3 = 5h. But distance unknown. Insufficient. Together: 180 miles / 5 hours = 36 mph. Sufficient. Answer C.
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
**explanation:** Fibonacci-like: s_3=s_1+s_2, s_4=s_1+2s_2, s_5=2s_1+3s_2, s_6=3s_1+5s_2, s_7=5s_1+8s_2. (1): s_1+s_2=5 — many s_7 values. Insufficient. (2): s_1+2s_2=8 — many. Insufficient. Together: subtract → s_2=3, s_1=2 → s_7=10+24=34 < 40. Definite "no". Sufficient. Answer C.
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
**explanation:** Point (3,4) inside iff (3−h)²+(4−k)²<r². (1): h²+k²=r². Try (h,k,r)=(3,4,5): yes. (h,k,r)=(−10,0,10): no. Insufficient. (2): center=(0,0), radius unknown. r=10 yes; r=2 no. Insufficient. Together: center origin AND origin on circle → r=0 (degenerate). No valid circle; DS is unanswerable in standard convention. Answer E.
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
**explanation:** Divisors of N=pq are {1, p, q, pq}, sum = (1+p)(1+q). (1): (1+p)(1+q)=72. Prime-distinct pairs: (2,23)→N=46; (3,17)→N=51; (5,11)→N=55. Three candidates. Insufficient. (2): p+q=20, primes: (3,17)→N=51; (7,13)→N=91. Two candidates. Insufficient. Together: {46,51,55} ∩ {51,91} = {51}. Sufficient. Answer C.
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
**explanation:** Let X's rate=x, Y's=y. (1): x+y=540 — one equation, two unknowns. Insufficient. (2): y=1.4x — ratio, no scalar. Insufficient. Together: 2.4x=540 → x=225. Sufficient. Answer C.
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
**fastest_path:** Triangle area = ½ · base · height, where the height is the perpendicular distance from the opposite vertex to that base. You need both numbers, and each statement hands you exactly one — so neither alone, both together.
**explanation:** Area of a triangle = ½ · base · height. Here BC is a base and the perpendicular from A to line BC is the matching height. **(1):** base BC = 10, but with no height the area is undetermined (the triangle could be short or tall) → not sufficient. **(2):** height = 6, but with no base the area is again undetermined → not sufficient. **Together:** area = ½ · 10 · 6 = **30** → sufficient. Answer **C**. Note you don't need the triangle's exact shape — a base and its height alone fix the area.
**mistake_a:** (1) gives the base but no height; infinitely many triangles share base BC = 10 while having different areas.
**mistake_b:** (2) gives the height but no base; the same indeterminacy in reverse.
**mistake_d:** "Each alone" needs both statements to work solo, but each supplies only one factor of ½ · base · height.
**mistake_e:** Says even together it fails, but base and height are exactly what the area formula requires.
**common_trap:** Feeling you must know the triangle's specific shape (other sides, angles) to get the area. DS only asks whether the area is *uniquely determined* — base plus perpendicular height does that, shape notwithstanding.
**takeaway:** Triangle-area DS reduces to "do I have a base and the perpendicular height to that base?" If yes, the area is fixed; the rest of the figure is irrelevant.
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
**explanation:** (1): (1,7) sum=8, y−x=6 (no); (2,6) sum=8, y−x=4 (yes). Insufficient. (2): (1,16) xy=16, y−x=15 (no); (2,8) xy=16, y−x=6 (no). Insufficient. Together: x+y mult of 8 → both even. Write x=2a, y=2b: a+b=4k, ab=4m. Combining forces both a, b even. So x, y both div by 4 → y−x div by 4. Sufficient yes. Answer C.
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
**explanation:** 12 = 4 × 3 with 4, 3 coprime. (1): n=4 (no) or n=12 (yes). Insufficient. (2): n=9 (no) or n=36 (yes). Insufficient. Together: div by 4 AND div by 9 → div by LCM(4,9)=36, which is div by 12. Sufficient yes. Answer C.
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
**explanation:** Right angle at C → AB hypotenuse. Pythagorean: BC² = AB² − AC² = 169 − 25 = 144 → BC=12. (1) alone: only AB. (2) alone: only AC. Together: BC=12. Sufficient. Answer C.
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
**explanation:** (1): Converse of corresponding-angles postulate — equal corresponding angles ⟹ l ∥ m. Sufficient. (2): A transversal perpendicular to both lines forces parallel (Euclidean). Sufficient. Each alone solves. Answer D.
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
**explanation:** Ratio + anchor pattern. (1): ratio 3:2:1 alone — no dollar amount. Insufficient. (2): C=$20M — no relative size. Insufficient. Together: C is 1 part = $20M, so A (3 parts) = $60M. Sufficient. Answer C.
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
**explanation:** Class: 18 boys, 12 girls. Question: how many of the boys are in the above-mean group? (1): mean=75 (numeric value) — irrelevant to gender split. Insufficient. (2): 14 above mean — but their gender mix is open. Insufficient. Together: still no link between "14 above mean" and "how many boys." 0–12 girls + 2–14 boys all consistent. Answer E.
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
**explanation:** Area = (1/2)·AB·AC·sin(∠BAC). (1): AB=8, AC=6 — no angle, area not determined. Insufficient. (2): ∠BAC=90° — no sides. Insufficient. Together: area = (1/2)(8)(6)(sin 90°) = 24. Sufficient. Answer C.
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
**explanation:** (1): 2(l+w)=28 → l+w=14. Area=lw varies with split. Insufficient. (2): l=3w. Ratio without scalar — area=3w² unknown. Insufficient. Together: l+w=14 and l=3w → 4w=14 → w=3.5, l=10.5, area=36.75. Sufficient. Answer C.
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
**explanation:** Median of 7 sorted values is the 4th (d). (1): total = 140. Doesn't isolate d. Insufficient. (2): sum-without-median = 98. Doesn't give d alone. Insufficient. Together: 140 − 98 = 42 = d. Sufficient. Answer C.
**mistake_a:** A requires (1) alone sufficient — but mean doesn't pin median.
**mistake_b:** B requires (2) alone sufficient — but it's a partial sum.
**mistake_d:** D requires each alone — neither does.
**mistake_e:** E says together insufficient — but subtraction isolates the median.
**common_trap:** Picking D thinking mean=20 alone gives median=20. Mean ≠ median in general.
**takeaway:** Median-isolation DS: total sum + (total minus median) = median. Subtraction trick when one statement gives an "all but one" sum.
**related_reading:** reading-di-02-data-sufficiency-logic

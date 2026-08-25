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
**fastest_path:** The removed value is just the change in total: 6 × 15 − 5 × 13 = 90 − 65 = 25. Convert each average to a sum and subtract — never work with the averages directly.
**explanation:** The arithmetic mean of a set of numbers equals the sum of the numbers divided by how many numbers there are; equivalently, the sum equals the mean multiplied by the count. Working with sums rather than with the averages themselves is the key to this problem.

Let S be the sum of the original 6 numbers. Since the average of these 6 numbers is 15, we have

S = 6 × 15 = 90.

Let r denote the number that is removed, and let T be the sum of the 5 numbers that remain. Because the average of those 5 numbers is 13, we have

T = 5 × 13 = 65.

Removing r from the original collection reduces the total sum from S to T, so

r = S − T = 90 − 65 = 25.

The correct answer is E.
**mistake_a:** 2 = 15 − 13, the difference of the two averages. A single removed number is the change in the *total*, not the change in the *average* — those are wildly different sizes.
**mistake_b:** 10 = (15 − 13) × 5, scaling the change in average by the remaining count. Multiply count by mean to reach a sum first; never multiply a difference of means by a count.
**mistake_c:** 13 is the new average, copied straight from the stem. The question asks for the value that was removed, not either average.
**mistake_d:** 15 is the original average, another number lifted from the problem rather than computed.
**common_trap:** Subtracting the two averages (15 − 13 = 2) and calling that the removed value. One element can swing an average by far more than the average's own change.
**takeaway:** For any add/remove-an-element average problem, turn both averages into totals (sum = mean × count); the missing element is always sum_before − sum_after.
**hint_nudge:** Don't compare the two averages to each other — turn each one into a total first.
**hint_strategy:** Sum of the 6 numbers is 6 × 15; sum of the remaining 5 is 5 × 13. The removed number is the difference of those two totals.
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
**fastest_path:** Count the "not green" balls directly: red + blue = 4 + 3 = 7 out of 12, so 7/12. (Equivalently, 1 − 5/12.)
**explanation:** The probability of an event is the ratio of the number of favorable outcomes to the total number of equally likely outcomes. Because every ball is equally likely to be drawn, we can apply this principle directly, and because the question asks for the probability that the ball is NOT green, it is efficient to use the complement rule, which states that the probability that an event does not occur equals 1 minus the probability that it does occur.

Let T denote the total number of balls. The bag contains 4 red balls, 3 blue balls, and 5 green balls, so

T = 4 + 3 + 5 = 12.

The probability that the ball drawn is green is the number of green balls divided by the total number of balls:

P(green) = 5/12.

Applying the complement rule, the probability that the ball drawn is not green is

P(not green) = 1 - P(green) = 1 - 5/12 = 12/12 - 5/12 = 7/12.

Equivalently, the number of balls that are not green is the number of red balls plus the number of blue balls, namely 4 + 3 = 7, so the probability is 7/12 directly.

The correct answer is B.
**mistake_a:** 5/12 is P(green) itself — you found the probability of the very event the question negates with NOT.
**mistake_c:** 1/3 = 4/12 is P(red) alone; "not green" must count both red and blue, not just one of the two colors.
**mistake_d:** 2/3 = 8/12 is the complement of *red* (everything that isn't red), not the complement of green.
**mistake_e:** 3/4 = 9/12 removes only the 3 blue balls from the total, leaving red and green; but green is exactly what should be excluded.
**common_trap:** Sliding past the capitalized NOT and reporting P(green) = 5/12.
**takeaway:** On "not" or "at least one" probability, use the complement (1 − P) or count the favorable outcomes directly; both protect you from forgetting to flip the event.
**hint_nudge:** The word NOT is doing real work here. Start by finding P(green).
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
**fastest_path:** Sort, then read the value at position (7 + 1)/2 = 4: from 3, 7, 7, 10, 14, 18, 21 the fourth value is 10.
**explanation:** The median of a set of numbers is found by arranging the values in increasing order and selecting the middle value. When the set contains an odd number of values, the median is the single value in the middle position; when the set contains an even number of values, the median is the average of the two middle values. Any value that appears more than once must be listed every time it occurs.

Let the set be {14, 7, 21, 3, 10, 7, 18}. Counting its elements gives seven values, and the value 7 appears twice, so both occurrences are retained when ordering.

Arranging the seven values in increasing order produces 3, 7, 7, 10, 14, 18, 21.

Because the set contains an odd number of values, the median is the single middle value. For a set of n values arranged in order, the middle position is (n + 1)/2. Here n = 7, so the middle position is (7 + 1)/2 = 4. The value in the fourth position of 3, 7, 7, 10, 14, 18, 21 is 10.

The correct answer is B.
**mistake_a:** 7 is the mode (it appears twice), not the median. How often a value occurs has nothing to do with which value sits in the middle.
**mistake_c:** 12 comes from discarding the duplicate 7 and taking the median of the six remaining distinct values, (10 + 14)/2 = 12. Duplicates must be kept — there are seven values, not six.
**mistake_d:** 14 is an off-by-one on the middle position (the 5th value rather than the 4th), or the result of grabbing a middle-ish entry without first sorting.
**mistake_e:** 18 drifts toward the larger end of the set; the median is a fixed position, not "a big central-looking number."
**common_trap:** Confusing the median with the mode because 7 conspicuously repeats — or forgetting to keep both 7s when ordering.
**takeaway:** Median = sort first, keep every repeated value, then read off the entry at position (n + 1)/2.
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
**fastest_path:** Balance the deviations: the 10 boys are 12 below the mean, a deficit of 12 × 10 = 120. The 15 girls must carry that 120 surplus, so they sit 120/15 = 8 above the mean: 72 + 8 = 80.
**explanation:** The arithmetic mean of a set of values equals the sum of those values divided by the number of values. It follows that the sum of a group of values equals its mean multiplied by its count, and that the sum of the entire class equals the sum of its two subgroups, the boys and the girls.

Let S denote the sum of all 25 test scores, let B denote the sum of the 10 boys' scores, and let G denote the sum of the 15 girls' scores. Because every student is either a boy or a girl, S = B + G.

The class of 25 students has a mean of 72, so the total sum is S = 25 × 72 = 1,800. The 10 boys have a mean of 60, so their sum is B = 10 × 60 = 600. The girls' sum is therefore G = S − B = 1,800 − 600 = 1,200.

The mean score of the 15 girls is the girls' sum divided by the number of girls: G ÷ 15 = 1,200 ÷ 15 = 80.

The correct answer is D.
**mistake_a:** 60 is the boys' mean, reused for the girls — but the two groups are explicitly different.
**mistake_b:** 72 is the whole-class mean, chosen as if the girls happened to match the overall average.
**mistake_c:** 76 is a partial-offset error: you nudged the mean up by some of the boys' deficit but didn't load all of it onto the smaller girls' group.
**mistake_e:** 84 = 72 + 12 mirrors the boys' 12-point deficit one-for-one. That treats the two groups as equal in size; because the 15 girls outnumber the 10 boys, the girls move less than 12.
**common_trap:** Ignoring the unequal group sizes and assuming the girls sit as far above the mean as the boys sit below it.
**takeaway:** Weighted averages balance by total deviation, not by equal shares: (count × distance from the mean) for one group must exactly offset the other.
**hint_nudge:** Work in total points — the whole class totals 25 × 72.
**hint_strategy:** Girls' total = class total − boys' total; then divide that by 15.
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
**fastest_path:** Over the 36 ordered rolls, count the ways to total 8: (2,6), (3,5), (4,4), (5,3), (6,2) = 5, so 5/36.
**explanation:** The probability of an event is the number of favorable outcomes divided by the total number of equally likely outcomes. Because the two dice are distinguishable, each roll is recorded as an ordered pair, where the first entry is the result of the first die and the second entry is the result of the second die.

Each die can show any of 6 values, and the result of one die is independent of the other, so the total number of equally likely ordered outcomes is 6 times 6, which is 36.

We now count the ordered pairs whose entries sum to 8. Letting the pair (a, b) denote the results, we require a + b = 8 with each of a and b an integer from 1 through 6. Listing these systematically gives (2, 6), (3, 5), (4, 4), (5, 3), and (6, 2), which is 5 favorable outcomes.

Therefore the probability is 5 divided by 36, or 5/36.

The correct answer is B.
**mistake_a:** 1/12 = 3/36 counts only the unordered pairs {2,6}, {3,5}, {4,4} and misses that (2,6) and (6,2) are two distinct rolls.
**mistake_c:** 1/6 = 6/36 over-counts to a "clean" sixth — for example by including an impossible (1,7)/(7,1) or by counting the double (4,4) twice.
**mistake_d:** 7/36 adds yet another phantom ordered pair beyond the five that legitimately total 8.
**mistake_e:** 1/4 = 9/36 confuses the count for 8 with that of a more central sum (a sum of 6 or 7 has more ways); 8 has only five.
**common_trap:** Treating (a, b) and (b, a) as the same outcome, which undercounts every mixed pair on two distinguishable dice.
**takeaway:** With two distinguishable dice, always work over the 36 ordered outcomes; only the doubles (here 4,4) count once — every mixed pair counts twice.
**hint_nudge:** There are 36 equally likely ordered outcomes, not 21 unordered ones.
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
**fastest_path:** Both sets are symmetric with the same mean (30). Compare spreads by eye: A reaches 20 away from 30, B only 10 — so A is more spread and has the larger SD. No variance computation needed.
**explanation:** The standard deviation of a set measures how far its values are spread from the mean; when two sets share the same mean, the set whose values lie farther from that mean has the greater standard deviation. Because both sets here contain the same number of equally spaced values, it suffices to compare their means and the size of their deviations from those means.

Let the mean of a set be the sum of its values divided by the count of values. For Set A, the mean is (10 + 20 + 30 + 40 + 50) / 5 = 150 / 5 = 30. For Set B, the mean is (20 + 25 + 30 + 35 + 40) / 5 = 150 / 5 = 30. The two sets therefore have the same mean, namely 30.

Next, consider the deviations of each value from the common mean of 30. For Set A the deviations are -20, -10, 0, 10, and 20. For Set B the deviations are -10, -5, 0, 5, and 10. Each deviation in Set A is twice the corresponding deviation in Set B, so the values of Set A lie uniformly farther from the mean than those of Set B.

This comparison alone establishes that Set A has the greater standard deviation. To confirm, compute the sum of squared deviations for each set. For Set A, (-20)^2 + (-10)^2 + 0^2 + 10^2 + 20^2 = 400 + 100 + 0 + 100 + 400 = 1000, giving a variance of 1000 / 5 = 200. For Set B, (-10)^2 + (-5)^2 + 0^2 + 5^2 + 10^2 = 100 + 25 + 0 + 25 + 100 = 250, giving a variance of 250 / 5 = 50. Since 200 is greater than 50, the standard deviation of Set A exceeds that of Set B.

Thus the two sets share the same mean, but Set A has the greater standard deviation.

The correct answer is B.
**mistake_a:** Claims equal standard deviations — true only if the spreads matched, but A ranges 10–50 while B ranges only 20–40.
**mistake_c:** Reverses the comparison; B is the tighter set, so B has the *smaller* standard deviation, not the greater.
**mistake_d:** Asserts A has the greater mean, but both means equal 30 — no "greater mean" option can be correct.
**mistake_e:** Again claims unequal means; both sets average 30.
**common_trap:** Assuming the set with the larger individual values (A reaches 50) must also have the larger mean. Center and spread are independent here: equal means, different spreads.
**takeaway:** Equal counts of symmetric, evenly spaced values give equal means; whichever set's values sit farther from that shared mean carries the larger standard deviation.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q7
**difficulty:** Hard
**type:** Problem Solving
**topic:** Restricted Counting — Digit Restrictions

How many 3-digit positive integers have all distinct digits and are divisible by 5?

- A) 112
- B) 128
- C) 136
- D) 144
- E) 152

**answer:** C
**fastest_path:** Split on the units digit. Units = 0: hundreds 9 × tens 8 = 72. Units = 5: hundreds 8 (no 0, no second 5) × tens 8 = 64. Total 72 + 64 = 136.
**explanation:** A positive integer is divisible by 5 precisely when its units digit is 0 or 5, so the counting is organized into two mutually exclusive cases according to the units digit. Within each case the digits must be distinct, and the hundreds digit cannot be 0, since the number must be a 3-digit integer. The fundamental counting principle is applied to each case: the number of integers equals the product of the number of available choices for each position.

Case 1: the units digit is 0. The hundreds digit may be any of 1 through 9, which gives 9 choices, because 0 has already been used. The tens digit may be any digit from 0 through 9 except the two digits already placed (the 0 in the units position and the chosen hundreds digit), which leaves 10 - 2 = 8 choices. The number of integers in this case is 9 * 8 = 72.

Case 2: the units digit is 5. The hundreds digit may be any of 1 through 9 except 5, since 5 has already been used and 0 is not allowed as a leading digit, which gives 8 choices. The tens digit may be any digit from 0 through 9 except the two digits already placed (the 5 in the units position and the chosen hundreds digit), which leaves 10 - 2 = 8 choices. The number of integers in this case is 8 * 8 = 64.

The two cases have no overlap, so the total number of qualifying integers is 72 + 64 = 136.

The correct answer is C.
**mistake_a:** 112 undercounts — typically by using 7 instead of 8 for the tens place, or by losing the leading-digit choice in the units-0 case.
**mistake_b:** 128 = 64 + 64, giving the units-0 case only 8 hundreds choices (treating it like the units-5 case) instead of the full 9.
**mistake_d:** 144 = 72 + 72, failing to drop one hundreds choice in the units-5 case (where 5 is already used), so both cases are counted as if identical.
**mistake_e:** 152 over-counts — for example by allowing a repeated digit, or by giving the tens place 9 choices instead of 8.
**common_trap:** Letting 0 sit in the hundreds place, or not noticing that "units = 5" removes one hundreds option (no leading 0 *and* no second 5), so the two cases give different counts.
**takeaway:** Divisible by 5 means units in {0, 5}; case it out, fill the restricted positions first, and remember the leading digit can never be 0 — the two cases yield 9 vs 8 hundreds choices.
**hint_nudge:** A multiple of 5 ends in 0 or 5 — treat those as two separate cases.
**hint_strategy:** Fill the units digit first, then the hundreds (no 0, no repeat), then the tens (any remaining digit).
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
**fastest_path:** Complement: P(at least one red) = 1 − P(both blue) = 1 − (3/8)(2/7) = 1 − 3/28 = 25/28.
**explanation:** The most efficient approach to an "at least one" probability question is the complement method: the probability that at least one of the drawn chips is red equals 1 minus the probability that none of the drawn chips is red, that is, the probability that both chips are blue.

Let the box contain 5 red chips and 3 blue chips, for a total of 8 chips, and let two chips be drawn at random without replacement. We compute the probability that both chips are blue.

On the first draw, 3 of the 8 chips are blue, so the probability that the first chip is blue is 3/8. Given that a blue chip has been removed, 2 of the remaining 7 chips are blue, so the probability that the second chip is also blue is 2/7. Because the draws occur without replacement, the probability that both chips are blue is the product of these two probabilities:

P(both blue) = (3/8)(2/7) = 6/56 = 3/28.

Applying the complement, the probability that at least one chip is red is:

P(at least one red) = 1 - P(both blue) = 1 - 3/28 = 28/28 - 3/28 = 25/28.

The correct answer is B.
**mistake_a:** 5/8 is just P(the first chip is red) — the probability of one specific draw, not of "at least one red across two draws."
**mistake_c:** 13/14 = 26/28 is 1 minus an undercounted both-blue probability (2/28 instead of 3/28) — an arithmetic slip on (3/8)(2/7).
**mistake_d:** 15/28 is P(exactly one red) = 2 × (5/8)(3/7) = 30/56. "At least one" also includes the both-red case, which this drops.
**mistake_e:** 27/28 = 1 − 1/28 uses a too-small both-blue probability (for instance (3/8)(1/7) mis-multiplied), shrinking the part you subtract.
**common_trap:** Computing P(exactly one red) instead of P(at least one red), which silently omits the both-red outcome.
**takeaway:** "At least one" means take the complement: 1 − P(none). It collapses several cases into one short subtraction.
**hint_nudge:** "At least one red" is everything except a single outcome — which one?
**hint_strategy:** P(no red) = P(both blue) = (3/8)(2/7). Subtract that from 1.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q9
**difficulty:** Easy
**type:** Problem Solving
**topic:** Mean

The set {4, 7, 9, 12, x} has a mean of 9. What is the value of x?

- A) 9
- B) 11
- C) 12
- D) 13
- E) 15

**answer:** D
**fastest_path:** The total must be 9 × 5 = 45; subtract the four knowns: 45 − (4 + 7 + 9 + 12) = 45 − 32 = 13.
**explanation:** The arithmetic mean of a set of numbers equals the sum of those numbers divided by the count of numbers in the set. It follows that the sum of the numbers equals the mean multiplied by the count.

Let x denote the unknown member of the set {4, 7, 9, 12, x}. The set contains 5 numbers, and the mean is given as 9. Therefore the sum of all 5 numbers must equal the mean times the count:

Sum = 9 × 5 = 45.

The four known numbers contribute

4 + 7 + 9 + 12 = 32.

Since the total of all five numbers is 45, the value of x is the difference between the required total and the sum of the known numbers:

x = 45 − 32 = 13.

The correct answer is D.
**mistake_a:** 9 is the mean itself, mistaken for the missing value.
**mistake_b:** 11 comes from 45 − 34 — an arithmetic slip in adding the four knowns (4 + 7 + 9 + 12 = 32, not 34).
**mistake_c:** 12 is the largest given value, copied from the set rather than computed.
**mistake_e:** 15 overshoots — for example from inflating the required total past 45 (miscounting the mean over four values, or padding the known sum).
**common_trap:** Eyeballing a value "near the others" instead of forcing the total to equal mean × count.
**takeaway:** A missing-value mean problem is one line: required total (mean × count) minus the sum of the known values.
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
**fastest_path:** Favorable = red + yellow = 6 + 2 = 8 out of 12 = 2/3.
**explanation:** When an experiment has finitely many equally likely outcomes, the probability of an event equals the number of favorable outcomes divided by the total number of possible outcomes. Moreover, when two events cannot occur simultaneously, the probability that one or the other occurs is the sum of their individual probabilities.

Let the total number of marbles be the number of equally likely outcomes for a single random draw. The jar holds 6 red, 4 blue, and 2 yellow marbles, so the total is

6 + 4 + 2 = 12.

The event of interest is drawing a marble that is either red or yellow. Because a single marble cannot be both red and yellow, these two outcomes are mutually exclusive, and the favorable marbles can be counted by simple addition:

6 + 2 = 8.

Therefore the required probability is the number of favorable marbles divided by the total number of marbles:

8 / 12.

Reducing this fraction by dividing numerator and denominator by 4 gives

8 / 12 = 2 / 3.

The correct answer is D.
**mistake_a:** 1/3 = 4/12 is P(blue), the one color the question leaves out; "red or yellow" excludes blue, not includes it.
**mistake_b:** 1/2 = 6/12 counts only the red marbles and forgets to add the 2 yellow.
**mistake_c:** 7/12 is an off-by-one in the count (7 favorable instead of 8), as if there were one fewer red or yellow marble.
**mistake_e:** 3/4 = 9/12 over-counts the favorable marbles to 9, e.g., by also including a blue marble.
**common_trap:** Counting only the first-named favorable color (red) and dropping the "or yellow" half of the event.
**takeaway:** For "A or B" with disjoint outcomes, add the favorable counts once, then divide by the total a single time.
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
**fastest_path:** Multiply the independent choices: 4 × 6 × 3 = 72.
**explanation:** This problem is governed by the multiplication principle of counting: when a selection is made by performing several independent stages in succession, the total number of possible outcomes equals the product of the number of choices available at each stage.

A three-course meal consists of one appetizer, one entree, and one dessert, so the meal is assembled in three independent stages. Let A denote the number of appetizer choices, let B denote the number of entree choices, and let C denote the number of dessert choices. We are given A = 4, B = 6, and C = 3.

The selection of an appetizer in no way restricts the selection of an entree or a dessert, so the choices are independent and their counts multiply. The total number of distinct three-course meals is therefore

A × B × C = 4 × 6 × 3.

Computing step by step, we first find the number of appetizer-entree pairs:

4 × 6 = 24.

Each of these 24 pairs can then be combined with any one of the 3 desserts:

24 × 3 = 72.

Thus a customer can order 72 different three-course meals.

The correct answer is E.
**mistake_a:** 13 = 4 + 6 + 3 adds the options instead of multiplying — the "how many items total" reflex.
**mistake_b:** 24 = 4 × 6 multiplies only the first two courses and forgets the dessert stage.
**mistake_c:** 36 drops or distorts a factor (for example 6 × 6, or only two of the three courses with a wrong count).
**mistake_d:** 54 = 6 × 3 × 3 miscounts one course, using 3 where 4 belongs.
**common_trap:** Adding the counts (13). You add only when choosing among mutually exclusive single options; here three independent stages combine, so they multiply.
**takeaway:** Independent successive choices multiply (fundamental counting principle); reserve addition for "either this single thing or that single thing."
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
**fastest_path:** The sum is 100; with the median c = 18 and the largest e = 40 fixed, a + b + d = 42. To maximize a, shrink b and d: distinctness forces d ≥ 19 and b = a + 1, so a + (a + 1) + 19 = 42, giving a = 11.
**explanation:** The arithmetic mean of a set of numbers equals the sum of the numbers divided by how many there are, and the median of an odd number of distinct values is the middle value when the values are listed in increasing order. Since the five integers are distinct, every inequality among them is strict.

Let the five distinct positive integers, listed in increasing order, be a, b, c, d, and e. Because the mean is 20, the sum of the five integers is 5 times 20, which is 100. The median is the middle value, so c = 18, and the largest value is e = 40.

Substituting these known values into the sum gives a + b + 18 + d + 40 = 100. Subtracting 58 from both sides yields a + b + d = 42.

The goal is to make a, the smallest integer, as large as possible. Because a + b + d is fixed at 42, increasing a requires making b and d as small as possible.

The value d lies strictly between the median and the largest integer, so d must be greater than 18. As an integer, the smallest value d can take is 19. The value b lies strictly between a and the median, and it must be distinct from a, so b must be at least a + 1; its smallest possible value is therefore a + 1.

Using these smallest possible values, a + (a + 1) + 19 = 42. This simplifies to 2a + 20 = 42, so 2a = 22 and a = 11.

This produces the set 11, 12, 18, 19, 40. The five values are distinct, their sum is 100 so the mean is 20, the middle value is 18, and the largest is 40, confirming that the greatest possible value of the smallest integer is 11.

The correct answer is C.
**mistake_a:** 1 is the *smallest* possible value of a (push a down, not up) — the opposite of what the question asks.
**mistake_b:** 5 is a half-finished attempt that doesn't push b and d all the way to their minimum allowed values.
**mistake_d:** 12 comes from letting d = 18 (equal to the median) instead of the required d ≥ 19; that off-by-one steals a unit and inflates a.
**mistake_e:** 17 forces a just under the median (treating the only constraint as a < 18) while ignoring the fixed sum, which overshoots.
**common_trap:** To maximize one quantity in a fixed sum you must minimize the others; test-takers instead maximize the wrong variable or quietly relax the distinctness/median constraints.
**takeaway:** Fixed-sum optimization: pin the known terms, then drive every *other* term to its constraint-limited extreme in the direction that frees up the target.
**hint_nudge:** The five values sum to 100. After fixing the median and the maximum, which three are still free?
**hint_strategy:** To make the smallest value as large as possible, make the other two free values (b and d) as small as the distinct + median rules allow.
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
**fastest_path:** Q1 = median of {52, 58, 64, 70} = 61; Q3 = median of {76, 82, 88, 94} = 85; IQR = 85 − 61 = 24.
**explanation:** The interquartile range (IQR) of a data set is defined as the difference between the third quartile and the first quartile, IQR = Q3 - Q1, where Q1 is the median of the lower half of the ordered data and Q3 is the median of the upper half. The IQR measures the spread of the middle 50 percent of the values.

The data set already appears in increasing order and contains 8 values: 52, 58, 64, 70, 76, 82, 88, 94. Because there is an even number of values, we split the data into two equal halves of four values each.

Let the lower half be the four smallest values, {52, 58, 64, 70}. Its median, Q1, is the average of the two middle values: Q1 = (58 + 64) / 2 = 122 / 2 = 61.

Let the upper half be the four largest values, {76, 82, 88, 94}. Its median, Q3, is the average of the two middle values: Q3 = (82 + 88) / 2 = 170 / 2 = 85.

We then compute the interquartile range: IQR = Q3 - Q1 = 85 - 61 = 24.

The correct answer is C.
**mistake_a:** 12 is a single inner gap (for instance 82 − 70), not the distance between the two quartiles.
**mistake_b:** 21 comes from mis-locating the quartiles — averaging the wrong adjacent pair in one or both halves.
**mistake_d:** 30 = 94 − 64 or 88 − 58, mixing a quartile with an extreme value instead of using both quartiles.
**mistake_e:** 42 = 94 − 52 is the full range (max − min), not the interquartile range.
**common_trap:** Reporting the range (max − min = 42) in place of Q3 − Q1.
**takeaway:** IQR = Q3 − Q1, where each quartile is the median of its half; with 8 values, average the two middle values within each four-value half.
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
**fastest_path:** New total − old total = the added number: 11 × 25 − 10 × 24 = 275 − 240 = 35.
**explanation:** The arithmetic mean of a list of numbers equals the sum of the numbers divided by how many numbers there are. Equivalently, the sum of the numbers equals the mean multiplied by the count. This relationship is the governing principle, and it allows the unknown value to be recovered by comparing the total sum before and after the 11th number is added.

Let S be the sum of the original 10 numbers, and let x be the value of the 11th number. Because the original 10 numbers have a mean of 24, we have S = 10 × 24 = 240. After the 11th number is added, the list contains 11 numbers whose mean is 25, so the sum of all 11 numbers is 11 × 25 = 275.

The sum of all 11 numbers is also equal to the original sum plus the 11th number, that is, S + x = 240 + x. Setting the two expressions for the new sum equal to each other gives 240 + x = 275. Solving for x yields x = 275 − 240 = 35.

The correct answer is D.
**mistake_a:** 25 is the new mean, mistaken for the new value.
**mistake_b:** 26 nudges the mean up by a small amount (24 + 2 or 25 + 1) instead of working with totals.
**mistake_c:** 30 is a midpoint-style guess between the mean and the true value, with no total actually computed.
**mistake_e:** 36 is an off-by-one in one of the totals (for example 275 − 239).
**common_trap:** Assuming the added value sits close to the new mean; a single new term can lie far from the mean while moving it only by 1.
**takeaway:** Add-an-element mean problems: the new value = (new mean × new count) − (old mean × old count).
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
**fastest_path:** Without replacement, multiply the conditional draws: (7/12)(6/11) = 42/132 = 7/22.
**explanation:** The probability that two events both occur is the product of the probability of the first event and the conditional probability of the second event given that the first has occurred. Because the socks are drawn without replacement, the composition of the drawer changes after the first draw, so the second probability must be computed from the reduced contents.

The drawer initially contains 7 black socks and 5 white socks, for a total of 12 socks. Let the first event be drawing a black sock and the second event be drawing a black sock on the next draw.

For the first draw, there are 7 black socks among the 12 socks, so the probability of drawing a black sock is 7/12.

Given that a black sock has been drawn and not replaced, 6 black socks remain among a total of 11 socks. The probability of drawing a black sock on the second draw is therefore 6/11.

Multiplying the two probabilities gives the probability that both socks are black:

(7/12)(6/11) = 42/132 = 7/22.

The correct answer is B.
**mistake_a:** 7/24 = (7/12)(6/12) keeps the denominator at 12 on the second draw — treating the bottom as if the sock were replaced.
**mistake_c:** 1/2 is a rough "about half are black" guess that skips the multiplication entirely.
**mistake_d:** 35/132 = (7/12)(5/11) uses 5 black socks left on the second draw (the white count) instead of 6.
**mistake_e:** 49/144 = (7/12)(7/12) draws "with replacement," reusing 7/12 for both draws.
**common_trap:** Applying with-replacement probabilities (7/12 twice, or 6/12) when the draw is explicitly without replacement.
**takeaway:** Without replacement, both the favorable count and the total drop by one after each success — multiply the conditional probabilities, not the original ones.
**hint_nudge:** After one black sock is removed and not replaced, how many black socks and how many socks remain?
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
**fastest_path:** Adding a constant shifts the mean by that constant and leaves the spread untouched — mean up 5, standard deviation unchanged. Pick C with no computation.
**explanation:** When the same constant is added to every member of a set of numbers, the mean increases by that constant, while the standard deviation, which measures the spread of the values about their mean, remains unchanged. The reasoning is that adding a constant shifts every value, and therefore the mean, by the identical amount, so each value's distance from the mean is preserved.

Let Set X = {8, 10, 12, 14, 16}. The mean of Set X is (8 + 10 + 12 + 14 + 16) / 5 = 60 / 5 = 12.

Set Y is formed by adding 5 to each element of Set X, so Set Y = {13, 15, 17, 19, 21}. The mean of Set Y is (13 + 15 + 17 + 19 + 21) / 5 = 85 / 5 = 17. Thus the mean of Set Y exceeds the mean of Set X by exactly 5, the constant that was added.

The standard deviation depends only on the deviations of the elements from their mean. For Set X, the deviations from the mean of 12 are 8 - 12 = -4, 10 - 12 = -2, 12 - 12 = 0, 14 - 12 = 2, and 16 - 12 = 4. For Set Y, the deviations from the mean of 17 are 13 - 17 = -4, 15 - 17 = -2, 17 - 17 = 0, 19 - 17 = 2, and 21 - 17 = 4. The two lists of deviations are identical, so the squared deviations, their average, and the square root of that average are identical as well. Therefore the two sets have the same standard deviation.

Set Y has a greater mean and the same standard deviation as Set X.

The correct answer is C.
**mistake_a:** Adding a constant does NOT raise the standard deviation; the spread is unchanged.
**mistake_b:** A uniform shift can't shrink the spread either, so the standard deviation does not get smaller.
**mistake_d:** The mean does change — it rises by 5. Only the standard deviation stays the same, so "same mean" is wrong.
**mistake_e:** The standard deviation does not change under a shift, so "different standard deviations" is incorrect.
**common_trap:** Believing that altering every value must alter the standard deviation. Adding a constant moves the whole set rigidly, so each value's distance from the (also-shifted) mean is identical.
**takeaway:** y = x + b shifts the mean by b and leaves the standard deviation unchanged; only multiplying (y = ax) scales the standard deviation, by |a|.
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
**fastest_path:** Any arithmetic sequence is symmetric, so its mean always equals its middle term = the median — (1) forces a definite YES. (2) only fixes the two extremes, which allows both equal and unequal cases, so it's insufficient. Answer A.
**explanation:** The question asks whether the median of a set of 5 positive integers equals the mean. To resolve a yes/no question of this kind, a statement is sufficient only if it forces a single definite answer for every set it permits.

Statement (1): The 5 integers form an arithmetic sequence. Let the first term be a and the common difference be d, so the five terms in increasing order are a, a + d, a + 2d, a + 3d, and a + 4d. Because the count is odd, the median is the middle term, which is a + 2d. The mean is the sum of the five terms divided by 5: [a + (a + d) + (a + 2d) + (a + 3d) + (a + 4d)] / 5 = (5a + 10d) / 5 = a + 2d. Thus the mean equals a + 2d, which is exactly the median. The answer to the question is therefore YES for every arithmetic sequence, regardless of the values of a and d. Statement (1) is sufficient.

Statement (2): The smallest integer is 4 and the largest is 20. Consider the set {4, 5, 6, 7, 20}. Its median is 6, and its mean is (4 + 5 + 6 + 7 + 20) / 5 = 42 / 5 = 8.4, so the median does not equal the mean, giving the answer NO. Now consider the set {4, 8, 12, 16, 20}. Its median is 12, and its mean is (4 + 8 + 12 + 16 + 20) / 5 = 60 / 5 = 12, so the median equals the mean, giving the answer YES. Because the permitted sets yield both NO and YES, Statement (2) is not sufficient.

Statement (1) alone is sufficient and Statement (2) alone is not sufficient.

The correct answer is A.
**mistake_b:** (2) fixes only the smallest and largest values; the inner three can make the mean equal the median or not, so (2) alone decides nothing.
**mistake_c:** (1) settles the question by itself, so combining the statements is unnecessary — C understates statement (1).
**mistake_d:** (2) is not sufficient, so "each statement alone" is too strong.
**mistake_e:** (1) alone is sufficient, so "together not sufficient" is wrong.
**common_trap:** Underrating statement (1) — not seeing that an evenly spaced (arithmetic) set is symmetric, which forces the mean to equal the middle term for any odd-length run.
**takeaway:** In any arithmetic sequence the mean equals the median (the symmetric middle term); a yes/no DS question is sufficient the instant one statement forces a single answer.
**hint_nudge:** For an evenly spaced list, where does the average fall relative to the middle value?
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
**fastest_path:** C(4,3)/2^4 = 4/16 = 1/4.
**explanation:** For a sequence of independent trials with two equally likely outcomes, the probability of obtaining a specified number of one outcome is found by counting the favorable arrangements and dividing by the total number of equally likely arrangements. Each flip of a fair coin has two outcomes, so 4 flips produce 2^4 = 16 equally likely sequences.

Let the favorable sequences be those containing exactly 3 heads and 1 tail. The number of such sequences equals the number of ways to choose which 3 of the 4 positions are heads, namely C(4,3) = 4. These sequences are HHHT, HHTH, HTHH, and THHH.

Each of the 16 sequences is equally likely, occurring with probability (1/2)^4 = 1/16. The probability of exactly 3 heads is therefore the number of favorable sequences divided by the total number of sequences:

4/16 = 1/4.

The correct answer is C.
**mistake_a:** 1/8 = 2/16 undercounts the arrangements of 3 heads, treating it as only 2 orders.
**mistake_b:** 3/16 uses 3 favorable sequences, forgetting one of the four positions the single tail can occupy.
**mistake_d:** 5/16 is P(3 or more heads) = C(4,3) + C(4,4) = 4 + 1 = 5 sequences; the question wants exactly 3.
**mistake_e:** 3/8 = 6/16 = C(4,2)/16 counts exactly 2 heads (or 2 tails) instead of exactly 3 heads.
**common_trap:** Forgetting that "exactly 3 heads" can occur in C(4,3) = 4 different orders, not just one.
**takeaway:** For exactly k of n fair flips, favorable = C(n, k) and total = 2^n; here 4/16 = 1/4.
**hint_nudge:** How many of the 16 equally likely H/T sequences contain exactly three H's?
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
**fastest_path:** Growing the group by one adds C(n,2) committees (Pascal: C(n+1,3) − C(n,3) = C(n,2)), so (1) gives C(n,2) = 21 ⇒ n = 7 ⇒ C(7,3) = 35 — one value, sufficient. (2) only bounds n, so it's insufficient. Answer A.
**explanation:** This is a counting problem governed by the combination formula: the number of ways to choose a committee of 3 from a group of m people is C(m, 3) = m! / (3!(m - 3)!). The question asks for the value of C(n, 3), so a statement is sufficient precisely when it pins down a single numerical value for that count.

Let n be the size of the original group. The number of possible committees is C(n, 3).

Consider statement (1). If the group had 1 additional person, the count would be C(n + 1, 3), and the stated increase translates into the equation C(n + 1, 3) - C(n, 3) = 21. By Pascal's identity, C(n + 1, 3) - C(n, 3) = C(n, 2). Hence C(n, 2) = 21, which gives n(n - 1) / 2 = 21, so that n(n - 1) = 42. Since n must be a positive integer with n at least 3, we solve n(n - 1) = 42, and because 7 times 6 equals 42 we obtain n = 7. The committee count is therefore C(7, 3) = 7! / (3! 4!) = (7 times 6 times 5) / (3 times 2 times 1), where the 6 in the numerator cancels the 3 times 2 in the denominator, leaving 7 times 5 = 35. This is a single determined value, so statement (1) is sufficient.

Consider statement (2). The condition n greater than 5 is consistent with n = 6, n = 7, n = 8, and infinitely many larger values, each producing a different count C(n, 3). Because the count is not uniquely determined, statement (2) is not sufficient.

Since statement (1) alone is sufficient and statement (2) alone is not, the answer is option A.

The correct answer is A.
**mistake_b:** n > 5 leaves infinitely many values of C(n,3), so statement (2) alone pins down nothing.
**mistake_c:** Statement (1) already fixes n by itself (and rejects the negative root), so the two statements together aren't needed.
**mistake_d:** Statement (2) is not sufficient, so "each statement alone" overstates the case.
**mistake_e:** Statement (1) is sufficient, so "together not sufficient" is wrong.
**common_trap:** Assuming the equation n(n − 1) = 42 leaves two candidate values of n and therefore needs statement (2) to choose; in fact only one positive integer, n = 7, qualifies.
**takeaway:** The increase from C(n,3) to C(n+1,3) is exactly C(n,2); once a statement yields a single positive-integer solution, it is sufficient on its own.
**hint_nudge:** By how much does the committee count change when the group gains one person?
**hint_strategy:** C(n+1,3) − C(n,3) = C(n,2). Set that equal to 21 and solve for n.
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
**fastest_path:** "At least 2 of the first 3" means exactly 2 or exactly 3 from that group: C(3,2)·C(4,3) + C(3,3)·C(4,2) = 12 + 6 = 18.
**explanation:** Because the order in which the questions are selected does not matter, each selection is a combination, and the number of ways to choose r items from n is given by the combination C(n, r) = n! / [r!(n - r)!]. The requirement that the student answer at least 2 of the first 3 questions creates two mutually exclusive cases according to exactly how many of the first 3 questions are chosen, and the total count is the sum of the counts for these cases.

Let the 7 questions be divided into a first group of 3 questions and a second group of 4 questions. The student must choose 5 questions in all, with at least 2 of them coming from the first group. Since the first group contains only 3 questions, the number chosen from it is either exactly 2 or exactly 3.

Case 1: exactly 2 questions are chosen from the first group and the remaining 3 are chosen from the second group. The number of ways to choose 2 of the first 3 is C(3, 2) = 3, and the number of ways to choose 3 of the last 4 is C(4, 3) = 4. The number of selections in this case is therefore 3 × 4 = 12.

Case 2: all 3 questions are chosen from the first group and the remaining 2 are chosen from the second group. The number of ways to choose 3 of the first 3 is C(3, 3) = 1, and the number of ways to choose 2 of the last 4 is C(4, 2) = 6. The number of selections in this case is therefore 1 × 6 = 6.

The two cases cover every allowable selection without overlap, so the total number of different sets of 5 questions is 12 + 6 = 18.

The correct answer is A.
**mistake_b:** 20 is C(7,5) = 21 with an off-by-one — dropping one case or mis-subtracting in a complement.
**mistake_c:** 21 = C(7,5) is the number of ways to choose 5 of 7 with the "at least 2 of the first 3" restriction ignored entirely.
**mistake_d:** 24 adds an impossible "exactly 1 from the first three" case onto the count, or double-counts overlapping selections.
**mistake_e:** 28 inflates a combination value (for example reading C(4,3) as larger), over-counting the cases.
**common_trap:** Ignoring the restriction and answering C(7,5) = 21, or mishandling "at least" by adding overlapping cases.
**takeaway:** "At least k from a group" means split into exact-count cases and add; never report C(total, r) and stop when a restriction is present.
**hint_nudge:** "At least 2 of the first 3" — how many from that three-question group are even possible?
**hint_strategy:** Count "exactly 2 from the first three" and "exactly 3 from the first three" separately, then add.
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
**fastest_path:** The second-largest value must be a distinct integer above the median 22, so its minimum possible value is 23. Verify it works: {1, 19, 22, 23, 35} sums to 100 and therefore averages 20.
**explanation:** Write the ordered integers as a < b < 22 < d < 35. Their total is 5 x 20 = 100, so a + b + d = 43. Distinctness forces d >= 23. At d = 23, we need a + b = 20; choosing 1 and 19 gives a valid ordered set. Since 23 is both the lower bound and attainable, it is the minimum.
**common_trap:** Finding the lower bound d = 23 but not checking that the other values can satisfy the sum and ordering conditions.
**takeaway:** In minimum-value problems, establish a lower bound and then build one valid example that reaches it.
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
**fastest_path:** Multiplying every value by 3 multiplies the standard deviation by 3; adding 4 changes only the center. New SD = 3 x 2 = 6.
**explanation:** Standard deviation measures distances from the mean. Under y = 3x + 4, each distance is tripled by the factor 3, while adding 4 shifts every value and the mean equally. Therefore the spread changes from 2 to 6.
**common_trap:** Applying the full transformation to the standard deviation and calculating 3(2) + 4 = 10.
**takeaway:** For y = ax + b, the standard deviation becomes |a| times the original; b has no effect.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability — Addition Rule

A card is drawn at random from a standard 52-card deck. What is the probability that the card is either a spade or an ace?

- A) 1/4
- B) 15/52
- C) 4/13
- D) 17/52
- E) 9/26

**answer:** C
**fastest_path:** Count 13 spades and 4 aces, then subtract the ace of spades counted twice: (13 + 4 - 1) / 52 = 16/52 = 4/13.
**explanation:** “Spade or ace” combines two overlapping groups. The ace of spades belongs to both, so simply adding 13 and 4 would count it twice. Inclusion-exclusion gives 13 + 4 - 1 = 16 favorable cards out of 52, which reduces to 4/13.
**common_trap:** Answering 17/52 by adding the two groups without removing their one-card overlap.
**takeaway:** For overlapping events, P(A or B) = P(A) + P(B) - P(A and B).
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
**fastest_path:** In an ordered set of 7 values, the median is the fourth value. (1) A total of 84 fixes only the mean, not the fourth value. (2) Directly states that the fourth value is 15, so (2) alone is sufficient.
**explanation:** Statement (1) is insufficient: {12, 12, 12, 12, 12, 12, 12} and {0, 0, 0, 1, 20, 21, 42} both sum to 84 but have different medians. Statement (2) identifies the fourth ordered value, which by definition is the median of seven values. Therefore statement (2) alone is sufficient.
**common_trap:** Treating the mean 84 / 7 = 12 as though it must equal the median.
**takeaway:** Median is positional: for 2k + 1 ordered values, it is the value in position k + 1.
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
**fastest_path:** Imagine 1,000 products. P makes 600 and 3% are defective, so 18 defective items come from P. Q makes 400 and 5% are defective, so 20 come from Q. Among all 38 defects, P supplies 18/38 = 9/19.
**explanation:** Conditioning on “defective” changes the denominator from all products to only defective products. Expected defect counts are 600 x 0.03 = 18 from P and 400 x 0.05 = 20 from Q. Therefore the probability that a randomly selected defective item came from P is 18 / (18 + 20) = 9/19.
**common_trap:** Choosing 60% because P makes 60% of all products; the selected group contains only defective products.
**takeaway:** For Bayes questions, build natural-frequency counts and divide the target subgroup by the conditioned total.
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
**fastest_path:** The scores are already ordered, so use the endpoints: range = 94 - 42 = 52.
**explanation:** Range measures the full width of a data set and equals maximum minus minimum. The middle seven scores do not affect it. Here the maximum is 94 and the minimum is 42, so the range is 52.
**common_trap:** Reporting the maximum, 94, or subtracting in the wrong direction.
**takeaway:** Range depends only on the two endpoints: maximum - minimum.
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
**fastest_path:** Range and mean do not determine standard deviation. Even together they allow both outcomes: S = {10,15,15,20}, T = {1,1,9,9} gives SD(S) < SD(T); S = {10,10,20,20}, T = {1,5,5,9} gives SD(S) > SD(T).
**explanation:** In both examples, S has range 10 versus T's range 8 and mean 15 versus T's mean 5, so statements (1) and (2) are satisfied together. Yet the first pair concentrates S near its mean and produces SD(S) < SD(T), while the second places S at its extremes and produces SD(S) > SD(T). Therefore the combined statements cannot answer the question; neither statement alone can do so either.
**common_trap:** Assuming a larger range forces a larger standard deviation. Range uses only two endpoints; standard deviation uses every value.
**takeaway:** Mean describes center and range describes endpoints; neither, even together, fixes how all observations are distributed.
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
**fastest_path:** At least one = car + bicycle - both = 45 + 35 - 20 = 60.
**explanation:** Adding 45 and 35 counts each of the 20 people who own both items twice. Subtract the overlap once so each person appears once in the union. Therefore 60 people own a car, a bicycle, or both.
**common_trap:** Adding 45 + 35 = 80 without correcting for the 20 people counted in both groups.
**takeaway:** For two sets, count(at least one) = count(A) + count(B) - count(both).
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
**fastest_path:** Expected prize value = (1/100)($200) = $2. Subtract the certain $5 ticket cost: $2 - $5 = -$3.
**explanation:** Each ticket owns a 1/100 share of the single $200 prize, so its expected gross return is $2. Net gain must include the purchase cost, which is paid whether the ticket wins or loses. Therefore expected net gain is -$3.
**common_trap:** Reporting $2, which is the expected prize payment before subtracting the ticket's $5 cost.
**takeaway:** Expected net value = expected payoff - any cost paid in every outcome.
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
**fastest_path:** Favorable length = 18 - 6 = 12. Total length = 30 - 0 = 30. Probability = 12/30 = 2/5.
**explanation:** Uniform selection means equal-length intervals are equally likely. The desired interval occupies 12 of the segment's 30 units, so its probability is 2/5. Whether endpoints are included does not affect a continuous probability.
**common_trap:** Using 18/30 and treating the upper endpoint as the favorable length.
**takeaway:** In uniform geometric probability, divide favorable length by total length.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q31
**difficulty:** Easy
**type:** Problem Solving
**topic:** Interquartile Range

The scores of 8 students on a quiz, arranged in ascending order, are: 52, 61, 67, 72, 78, 85, 89, 94. What is the interquartile range of these scores?

- A) 17
- B) 22
- C) 23
- D) 27
- E) 42

**answer:** C
**fastest_path:** Lower-half median: Q1 = (61 + 67)/2 = 64. Upper-half median: Q3 = (85 + 89)/2 = 87. IQR = 87 - 64 = 23.
**explanation:** Split the ordered eight values into two groups of four. Q1 is the median of the lower group and Q3 is the median of the upper group. Because each half has four values, average its two middle entries. Their difference, 87 - 64, is 23.
**common_trap:** Using the overall middle pair, 72 and 78, as Q1 and Q3; those locate the median, not the quartiles.
**takeaway:** For an even-sized ordered set, split it in half, find each half's median, then compute Q3 - Q1.
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
**fastest_path:** Mutually exclusive events cannot overlap, so P(X or Y) = 0.3 + 0.4 = 0.70.
**explanation:** The general addition rule subtracts P(X and Y), but that intersection is 0 for mutually exclusive events. Therefore the probability that at least one occurs is simply the sum of the two probabilities.
**common_trap:** Multiplying 0.3 x 0.4; multiplication answers “both,” which is impossible here.
**takeaway:** For mutually exclusive events, add their probabilities to find “A or B.”
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
**fastest_path:** For independent events, multiply to find both: P(A and B) = 0.6 x 0.3 = 0.18.
**explanation:** Independence means event A does not change event B's probability. Thus 60% of the cases reach A, and 30% of those also reach B, giving 18% overall.
**common_trap:** Adding the probabilities, which is used for “A or B,” not “A and B.”
**takeaway:** Independent “and” probabilities multiply; mutually exclusive “or” probabilities add.
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
**fastest_path:** Hearts and diamonds each have probability 1/4; black cards have probability 1/2. EV = (1/4)($5) + (1/2)($2) + (1/4)(-$3) = $1.50.
**explanation:** Hearts, black cards, and diamonds form non-overlapping outcomes covering the whole deck. Weight each payoff by its share of the deck: $1.25 + $1.00 - $0.75 = $1.50.
**common_trap:** Treating all three outcomes as equally likely even though black cards occupy two suits.
**takeaway:** Expected value is the probability-weighted average of all mutually exclusive payoffs.
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
**fastest_path:** Analytics has 120 x 25% = 30 MBA holders. Operations has 80 x 15% = 12. Among the 42 MBA holders, 30 work in analytics, so the probability is 30/42 = 5/7.
**explanation:** “Given that the employee has an MBA” restricts the denominator to MBA holders only. Count that group by division: 30 from analytics and 12 from operations. The desired subgroup is therefore 30 out of 42.
**common_trap:** Using 120/200 = 3/5, the analytics share of all employees rather than of MBA holders.
**takeaway:** After “given that,” rebuild the denominator using only outcomes satisfying that condition.
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
**fastest_path:** Choose which 2 of 3 patients succeed, then multiply outcome probabilities: C(3,2)(0.7)^2(0.3) = 3 x 0.49 x 0.3 = 0.441.
**explanation:** One specific order such as success-success-failure has probability (0.7)^2(0.3) = 0.147. The single failure can occur in any of three positions, and these cases do not overlap. Multiplying by 3 gives 0.441.
**common_trap:** Calculating only 0.7^2 x 0.3, which counts one order rather than all three placements of the failure.
**takeaway:** For exactly k successes, multiply one arrangement's probability by C(n, k).
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
**fastest_path:** First find at least one: 72 + 54 - 30 = 96. Then subtract from the total: 120 - 96 = 24 bought neither.
**explanation:** Adding the two product groups counts the 30 customers in both groups twice, so subtract that overlap once. This leaves 96 customers who bought A, B, or both. Everyone else is outside the union, giving 24.
**common_trap:** Stopping at 96, which is the number who bought at least one product rather than neither product.
**takeaway:** For neither, compute the union with inclusion-exclusion, then subtract it from the total.
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
**fastest_path:** Required total = 5 x 84 = 420. Known total = 78 + 91 + 80 + 76 = 325. Missing number = 420 - 325 = 95.
**explanation:** An average is not a total. Convert the average into the sum of all five values, then remove the four values already known. The remaining amount, 95, must be the fifth number.
**common_trap:** Averaging the four known numbers or subtracting one of them from 84.
**takeaway:** For a missing value, use missing = (mean x count) - sum of known values.
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
**fastest_path:** The 72nd percentile means approximately 72% scored below 680. Compute 0.72 x 350 = 252.
**explanation:** A percentile converts directly to a proportion below the stated score. Since 72% of 350 is 252, approximately 252 students scored below 680. The word “approximately” allows the percentile-based count.
**common_trap:** Using the remaining 28%, which counts students at or above the score instead.
**takeaway:** Convert an nth percentile into a count by multiplying n% by the population size.
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
**fastest_path:** Pair distances from the common mean 6. P has distances 5, 2, 2, 0, 2, 2, 5; Q has 2, 2, 1, 0, 1, 2, 2. P is farther out overall, so SD(P) > SD(Q).
**explanation:** Both sets have the same mean and count, so compare their distances from 6 directly. Every value in P is at least as far from 6 as the corresponding symmetric value in Q, and P's endpoints are much farther away. Squared deviations therefore sum to more for P, giving P the larger standard deviation.
**common_trap:** Assuming equal means and equal counts imply equal standard deviations; they say nothing about spread.
**takeaway:** When sets share a mean and count, compare their distances from that mean before calculating exact SDs.
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
**fastest_path:** Relief counts: Drug A gives 200 x 15% = 30; Drug B gives 100 x 45% = 45. Among the 75 patients with relief, 30 used A, so 30/75 = 2/5.
**explanation:** The selected patient is known to have experienced relief, so the denominator is not all 300 patients. Restrict the sample to the 75 relief cases, then take the 30 cases from Drug A.
**common_trap:** Using 200/300 because Drug A treated two-thirds of all patients, ignoring the condition that relief occurred.
**takeaway:** In conditional probability, rebuild the denominator from the group named after “given.”
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
**fastest_path:** EV(P) = 0.4($800k) - 0.6($200k) = $200k. EV(Q) = 0.7($400k) = $280k. Strategy Q is higher by $80k.
**explanation:** Weight each possible profit or loss by its probability, keeping the loss negative. Strategy P averages $320k - $120k = $200k. Strategy Q averages $280k because its other outcome is $0. The difference is $80k in Q's favor.
**common_trap:** Treating P's $200,000 loss as a positive payoff when calculating expected value.
**takeaway:** Compare strategies by probability-weighted net outcomes, preserving the sign of every loss.
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
**fastest_path:** At least one = 90 + 75 + 60 - 30 - 25 - 20 + 10 = 160. Therefore none = 180 - 160 = 20.
**explanation:** Add the three skill groups, subtract each pairwise overlap because it was counted twice, then add the triple overlap back because the three subtractions removed it once too many. This gives 160 employees with at least one skill and 20 with none.
**common_trap:** Forgetting to add the 10-person triple overlap back after subtracting all three pairwise intersections.
**takeaway:** For three sets: add singles, subtract pairs, add the triple, then subtract the union from the total for “none.”
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
**fastest_path:** Under x -> 3x - 6, transform the mean the same way: 3mu - 6. Standard deviation responds only to the multiplier, so it becomes 3sigma.
**explanation:** Multiplying every value by 3 triples both the center and every distance from the center. Subtracting 6 then shifts all values and the mean equally, so it changes the mean but not the spread. Thus N has mean 3mu - 6 and SD 3sigma.
**common_trap:** Subtracting 6 from the standard deviation; a uniform shift does not change distances between values.
**takeaway:** For y = ax + b, mean becomes a(mean) + b, while SD becomes |a|(SD).
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
**fastest_path:** Let V be the expected gain from a fresh draw. Then V = (2/3)($6) + (1/3)(-$2 + V). Solving gives (2/3)V = 10/3, so V = $5.
**explanation:** A red draw ends the game with $6. A white draw costs $2 and returns the player to the exact starting position, whose expected value is again V. That repeating state is why V appears on both sides of the equation. Solving the recurrence gives $5. As a check, the expected number of white draws before red is (1/3)/(2/3) = 1/2, so expected cost is $1 and net value is $6 - $1.
**common_trap:** Evaluating only the first draw and ignoring that a white draw restarts the same game.
**takeaway:** When an outcome resets a game, represent the restarted branch with the original expected value V.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q46
**difficulty:** Easy
**type:** Problem Solving
**topic:** Mean Median Mode

What is the mode of the set {3, 8, 8, 11, 15, 8, 3}?

- A) 3
- B) 7
- C) 8
- D) 11
- E) 15

**answer:** C
**fastest_path:** Count repeats: 8 appears three times, 3 appears twice, and every other value appears once. The mode is 8.
**explanation:** The mode is the most frequent value, not the middle or the average. Since no other value matches 8's three occurrences, the set has a single mode: 8.
**common_trap:** Choosing 3 because it is the smallest repeated value; frequency, not size, determines the mode.
**takeaway:** Mode means most frequent value; tally occurrences before comparing values.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q47
**difficulty:** Easy
**type:** Problem Solving
**topic:** Probability

A bag contains 5 red marbles, 7 green marbles, and 8 blue marbles. If one marble is drawn at random, what is the probability that it is blue?

- A) 1/5
- B) 7/20
- C) 3/10
- D) 2/5
- E) 3/5

**answer:** D
**fastest_path:** There are 5 + 7 + 8 = 20 marbles, of which 8 are blue. Probability = 8/20 = 2/5.
**explanation:** With one random draw, each marble is equally likely. Use blue marbles as the favorable count and all marbles as the denominator, then reduce the fraction.
**common_trap:** Using 8/15 by leaving one of the non-blue colors out of the total.
**takeaway:** For equally likely outcomes, probability = favorable count / total count.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q48
**difficulty:** Easy
**type:** Problem Solving
**topic:** Sets

In a group of 60 people, 38 like coffee and 27 like tea. If 12 people like both coffee and tea, how many people in the group like neither beverage?

- A) 7
- B) 12
- C) 15
- D) 19
- E) 23

**answer:** A
**fastest_path:** At least one = 38 + 27 - 12 = 53. Therefore neither = 60 - 53 = 7.
**explanation:** Coffee and tea totals overlap by 12 people, so subtract that group once when finding the union. The 53 people in the union like at least one beverage; the remaining 7 like neither.
**common_trap:** Subtracting 12 twice or forgetting the final subtraction from the total group.
**takeaway:** Count neither as total - [A + B - both].
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q49
**difficulty:** Easy
**type:** Problem Solving
**topic:** Expected Value

A game uses a spinner that is equally likely to land on "win" or "lose." If it lands on "win," the player receives $4; if it lands on "lose," the player pays $2. What is the expected net gain from one spin?

- A) $0.00
- B) $1.00
- C) $1.50
- D) $2.00
- E) $3.00

**answer:** B
**fastest_path:** The two outcomes are equally likely, so average their net values: ($4 + -$2) / 2 = $1.
**explanation:** Expected value weights each outcome by its probability. Here each has probability 1/2, so EV = (1/2)($4) + (1/2)(-$2) = $2 - $1 = $1.
**common_trap:** Treating the $2 payment as positive instead of a loss.
**takeaway:** When outcomes are equally likely, expected value is their ordinary arithmetic mean.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q50
**difficulty:** Medium
**type:** Problem Solving
**topic:** Mean Median Mode

In a class of 30 students, 18 students scored an average of 80 on a test and the remaining 12 students scored an average of 90. What was the average score of all 30 students?

- A) 82
- B) 83
- C) 85
- D) 86
- E) 84

**answer:** E
**fastest_path:** Use weighted totals: (18 x 80 + 12 x 90) / 30 = 2,520 / 30 = 84.
**explanation:** The groups have different sizes, so their averages cannot receive equal weight. Convert each group average to total points, combine the totals, and divide by all 30 students. The larger 80-average group pulls the result below 85.
**common_trap:** Averaging 80 and 90 to get 85, which incorrectly treats the groups as equal in size.
**takeaway:** Combined mean = sum of (group count x group mean) / total count.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q51
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability

Two fair six-sided dice are rolled. What is the probability that the sum of the numbers shown is at least 10?

- A) 1/12
- B) 1/6
- C) 5/36
- D) 7/36
- E) 1/4

**answer:** B
**fastest_path:** Count ordered outcomes for sums 10, 11, and 12: 3 + 2 + 1 = 6. Out of 36 total dice outcomes, the probability is 6/36 = 1/6.
**explanation:** Sum 10 comes from (4,6), (5,5), and (6,4); sum 11 from (5,6) and (6,5); sum 12 from (6,6). Mixed pairs count in both orders because the dice are distinguishable. This gives 6 favorable outcomes.
**common_trap:** Counting only the three target sums instead of the ordered dice outcomes producing them.
**takeaway:** For two fair dice, count ordered pairs over a sample space of 36.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q52
**difficulty:** Medium
**type:** Problem Solving
**topic:** Standard Deviation

A data set of 9 numbers has a standard deviation of 6. If every number in the set is multiplied by 0.5, what is the standard deviation of the resulting data set?

- A) 1.5
- B) 4.5
- C) 3
- D) 6
- E) 9

**answer:** C
**fastest_path:** Multiplying every value by 0.5 multiplies the standard deviation by 0.5. New SD = 0.5 x 6 = 3.
**explanation:** Standard deviation tracks distances from the mean. Halving every value also halves the mean and every deviation from it, so the spread falls from 6 to 3. The number of observations does not affect this transformation rule.
**common_trap:** Leaving the SD unchanged because the number of data points remains 9.
**takeaway:** Scaling every value by a multiplies standard deviation by |a|.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q53
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Sets

In a group of 50 students, each student studies French, Spanish, or both. How many students study both French and Spanish?

(1) 30 students study French.
(2) 35 students study Spanish.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Because all 50 study at least one language, both = French + Spanish - 50. Each statement alone leaves one group total unknown; together they give 30 + 35 - 50 = 15.
**explanation:** The union is fixed at 50 because nobody studies neither language. Statement (1) supplies only the French total, and statement (2) supplies only the Spanish total, so neither can determine the overlap alone. Combined, inclusion-exclusion gives a unique overlap of 15. Both together, but neither alone, are sufficient.
**common_trap:** Adding 30 and 35 without subtracting the 50 students counted in the union.
**takeaway:** If everyone belongs to at least one of two sets, overlap = set A + set B - total.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q54
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Mean Median Mode

A set consists of 6 numbers. Is the average (arithmetic mean) of the set greater than 10?

(1) The median of the set is 12.
(2) The sum of the numbers in the set is 72.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**fastest_path:** (1) Median 12 allows mean below 10, as in {1,2,11,13,14,15}, or above 10, as in six 12s. Insufficient. (2) Mean = 72/6 = 12, a definite Yes. Statement (2) alone is sufficient.
**explanation:** A median fixes only the two middle positions and does not control the total, so statement (1) permits opposite answers. Statement (2) directly fixes the sum; dividing by six gives a unique mean of 12. Therefore statement (2) alone is sufficient.
**common_trap:** Assuming a median of 12 forces the mean to be 12.
**takeaway:** In mean questions, a known sum and count determine the answer; a median usually does not.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q55
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability

A box contains 4 defective items and 6 non-defective items. If 3 items are drawn at random without replacement, what is the probability that exactly 1 of the drawn items is defective?

- A) 1/2
- B) 3/10
- C) 2/5
- D) 3/5
- E) 2/3

**answer:** A
**fastest_path:** Favorable selections = C(4,1)C(6,2) = 4 x 15 = 60. Total selections = C(10,3) = 120. Probability = 60/120 = 1/2.
**explanation:** Since order does not matter, count three-item groups. A valid group must contain one of the four defective items and two of the six non-defective items. Divide that favorable combination count by all ways to choose three of the ten items.
**common_trap:** Using 4/10 for the first defective draw and ignoring the different possible draw orders.
**takeaway:** For unordered sampling without replacement, use favorable combinations divided by total combinations.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q56
**difficulty:** Hard
**type:** Problem Solving
**topic:** Expected Value

A player rolls one fair six-sided die. If the result is an even number, the player wins a number of dollars equal to the number rolled. If the result is an odd number, the player pays $3. What is the expected net gain from one roll?

- A) -$0.50
- B) $0.00
- C) $0.25
- D) $0.33
- E) $0.50

**answer:** E
**fastest_path:** Average the six equally likely net outcomes: (-3 + 2 - 3 + 4 - 3 + 6) / 6 = 3/6 = $0.50.
**explanation:** Odd rolls each produce -$3, while even rolls pay their face values. Because every face has probability 1/6, expected value is the arithmetic mean of the six payoffs, which is $0.50.
**common_trap:** Averaging only the three even winnings and forgetting the losses on odd rolls.
**takeaway:** With equally likely outcomes, expected value is the average of their signed payoffs.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q57
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Standard Deviation

List K consists of the four numbers 2, 5, 8, and x. What is the standard deviation of list K?

(1) x = 11.
(2) The mean of list K is 6.5.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** (1) Directly fixes x = 11, so the full list and its SD are determined. (2) Total = 4 x 6.5 = 26, so x = 26 - (2 + 5 + 8) = 11. Each statement alone is sufficient.
**explanation:** Standard deviation is uniquely determined once every list value is known. Statement (1) supplies x directly. Statement (2) supplies the mean, which fixes the total and therefore the missing value. There is no need to calculate the actual SD in a Data Sufficiency question.
**common_trap:** Doing the full standard-deviation calculation even after uniqueness has been established.
**takeaway:** In Data Sufficiency, prove that the requested value is determined; do not compute beyond that point.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q58
**difficulty:** Easy
**type:** Problem Solving
**topic:** Mean Median Mode

What is the mode of the set {6, 9, 9, 12, 15, 9, 6, 20}?

- A) 6
- B) 9
- C) 12
- D) 15
- E) 20

**answer:** B
**fastest_path:** Count repeats: 9 appears three times, 6 appears twice, and every other value appears once. The mode is 9.
**explanation:** The mode is the value with the highest frequency. Since 9 occurs more often than every other value, it is the unique mode.
**common_trap:** Choosing 6 because it repeats first in the list; the mode is based on the greatest total frequency.
**takeaway:** Find the mode by tallying frequencies, not by comparing value sizes.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q59
**difficulty:** Easy
**type:** Problem Solving
**topic:** Probability

A bag contains 7 white marbles, 5 black marbles, and 4 blue marbles. If one marble is drawn at random, what is the probability that it is NOT blue?

- A) 1/4
- B) 5/16
- C) 7/16
- D) 2/3
- E) 3/4

**answer:** E
**fastest_path:** Not blue means white or black: 7 + 5 = 12 favorable marbles out of 16 total. Probability = 12/16 = 3/4.
**explanation:** Count the desired colors directly, or use the complement of the four blue marbles. Both routes give 1 - 4/16 = 12/16 = 3/4.
**common_trap:** Reporting 4/16, the probability of blue rather than not blue.
**takeaway:** For “not” probability, count the complement directly or subtract the excluded event from 1.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q60
**difficulty:** Easy
**type:** Problem Solving
**topic:** Sets

In a group of 90 people, 50 play a musical instrument and 48 play a sport. If 18 people do both, how many people in the group do neither?

- A) 10
- B) 18
- C) 20
- D) 28
- E) 32

**answer:** A
**fastest_path:** At least one = 50 + 48 - 18 = 80. Therefore neither = 90 - 80 = 10.
**explanation:** Adding the activity groups counts the 18 people in both twice, so subtract the overlap once. The resulting 80 do at least one activity, leaving 10 who do neither.
**common_trap:** Stopping at 80 or forgetting to subtract the overlap before finding neither.
**takeaway:** Neither = total - [A + B - both].
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q61
**difficulty:** Easy
**type:** Problem Solving
**topic:** Expected Value

A box holds 5 tickets that are equally likely to be drawn. Two of the tickets are worth $0, one is worth $3, one is worth $6, and one is worth $15. What is the expected value of a single ticket drawn at random?

- A) $3.00
- B) $4.00
- C) $4.50
- D) $4.80
- E) $6.00

**answer:** D
**fastest_path:** The five tickets are equally likely, so average their values: ($0 + $0 + $3 + $6 + $15) / 5 = $24/5 = $4.80.
**explanation:** Expected value is an ordinary mean when every outcome has the same probability. Keep both zero-value tickets in the list because they are separate possible draws.
**common_trap:** Averaging only the three tickets with positive values and ignoring the two $0 outcomes.
**takeaway:** Equally likely outcomes have expected value equal to their arithmetic mean.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q62
**difficulty:** Medium
**type:** Problem Solving
**topic:** Mean Median Mode

At a company, 24 employees received an average bonus of $5,000 and 16 employees received an average bonus of $7,500. What was the average bonus across all 40 employees?

- A) $5,500
- B) $5,800
- C) $6,000
- D) $6,250
- E) $6,500

**answer:** C
**fastest_path:** Weighted total = 24($5,000) + 16($7,500) = $240,000. Divide by 40 employees to get $6,000.
**explanation:** Group averages must be weighted by their group sizes. Here each group contributes $120,000 in total bonuses, for $240,000 across 40 employees. The larger lower-bonus group pulls the result below the simple midpoint.
**common_trap:** Averaging $5,000 and $7,500 to get $6,250, which treats the unequal groups as equal.
**takeaway:** Combined average = sum of (group count x group average) / total count.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q63
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability

Two fair six-sided dice are rolled. What is the probability that the sum of the numbers shown is a multiple of 4?

- A) 1/9
- B) 1/4
- C) 7/36
- D) 5/18
- E) 1/3

**answer:** B
**fastest_path:** Possible multiples of 4 are sums 4, 8, and 12, with 3, 5, and 1 ordered outcomes. Thus probability = 9/36 = 1/4.
**explanation:** Two dice produce 36 ordered outcomes. Sum 4 has (1,3), (2,2), (3,1); sum 8 has five outcomes from (2,6) through (6,2); sum 12 has (6,6). These nine outcomes are favorable.
**common_trap:** Counting the three possible sums instead of the nine ordered pairs that produce them.
**takeaway:** With two dice, count ordered pairs over 36 equally likely outcomes.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q64
**difficulty:** Medium
**type:** Problem Solving
**topic:** Standard Deviation

A data set of 12 numbers has a standard deviation of 8. If every number in the set is first multiplied by 0.25 and then increased by 10, what is the standard deviation of the resulting data set?

- A) 2
- B) 4
- C) 8
- D) 10
- E) 12

**answer:** A
**fastest_path:** Multiplying every value by 0.25 scales SD by 0.25; adding 10 does not affect it. New SD = 0.25 x 8 = 2.
**explanation:** Standard deviation measures distances from the mean. The multiplication quarters every distance, while the later addition shifts each value and the mean equally. The number of observations is irrelevant to this transformation.
**common_trap:** Applying +10 to the standard deviation as though SD followed the full value transformation.
**takeaway:** Under y = ax + b, standard deviation becomes |a| times the original and ignores b.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q65
**difficulty:** Medium
**type:** Problem Solving
**topic:** Expected Value

A charity raffle sells 1,000 tickets at $2 each. One grand-prize ticket is drawn and wins $500, and ten other tickets are each drawn to win $50. What is the expected net gain for a person who buys one ticket?

- A) -$2.00
- B) -$1.50
- C) -$1.00
- D) -$0.50
- E) $0.00

**answer:** C
**fastest_path:** Total prize money is $500 + 10($50) = $1,000 across 1,000 tickets, so expected winnings per ticket are $1. Subtract the $2 cost: expected net gain = -$1.
**explanation:** By symmetry, total expected prize value is spread evenly across all tickets. Equivalently, (1/1,000)($500) + (10/1,000)($50) = $1. The ticket cost is certain, so subtract it after finding expected winnings.
**common_trap:** Reporting $1, the expected prize value before subtracting the $2 purchase cost.
**takeaway:** Expected net gain = expected winnings - guaranteed cost.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q66
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Sets

In a group of 80 students, each student studies physics, chemistry, or both. How many students study both physics and chemistry?

(1) 50 students study physics.
(2) 45 students study chemistry.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** Because all 80 study at least one subject, both = physics + chemistry - 80. Each statement alone lacks one group total; together they give 50 + 45 - 80 = 15.
**explanation:** The union is fixed at 80. Statement (1) gives only the physics count and statement (2) only the chemistry count, so each leaves the overlap undetermined. Together, inclusion-exclusion produces one value, 15. Both statements together, but neither alone, are sufficient.
**common_trap:** Treating 50 + 45 as 95 different students without removing the overlap.
**takeaway:** When every person belongs to at least one set, overlap = A + B - total.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q67
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Mean Median Mode

A set S consists of 5 positive numbers whose average (arithmetic mean) is 12. Is the median of S less than 12?

(1) The largest number in S is 40.
(2) The smallest number in S is 2.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** Total = 5 x 12 = 60. (1) If the largest is 40, the other four total 20; the middle two cannot both be at least 12, so the median must be below 12. (2) Allows both median 2 and median 14. Answer A.
**explanation:** Order the values a <= b <= c <= d <= e, with median c. Under (1), e = 40 leaves a + b + c + d = 20. If c >= 12, then d >= 12, so c + d alone would be at least 24, impossible. Statement (1) forces Yes. Under (2), {2,2,2,2,52} gives Yes while {2,3,14,20,21} gives No, so it is insufficient.
**common_trap:** Assuming the smallest value controls the median without testing possible values for the other four numbers.
**takeaway:** In ordered-set DS, combine the fixed total with position constraints to bound the median.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q68
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability

A box contains 5 red chips and 3 green chips. If 3 chips are drawn at random without replacement, what is the probability that exactly 2 of the drawn chips are red?

- A) 15/56
- B) 5/14
- C) 1/2
- D) 15/28
- E) 9/14

**answer:** D
**fastest_path:** Favorable groups = C(5,2)C(3,1) = 10 x 3 = 30. Total groups = C(8,3) = 56. Probability = 30/56 = 15/28.
**explanation:** Order does not matter, so count three-chip selections. A favorable group contains exactly two of the five red chips and one of the three green chips. Divide that count by all ways to choose three of the eight chips.
**common_trap:** Using (5/8)(4/7)(3/6) for only the red-red-green order and forgetting the other two orders.
**takeaway:** For exact color counts without replacement, combinations automatically include every draw order.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q69
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Standard Deviation

Sets A and B each consist of 5 numbers. Is the standard deviation of A greater than the standard deviation of B?

(1) Every number in A is greater than every number in B.
(2) The range of A equals the range of B.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Location and range do not fix SD. With A={20,20,20,20,30}, B={0,5,5,5,10} gives SD(A)>SD(B); using B={0,0,10,10,10} gives SD(A)<SD(B). Answer E.
**explanation:** Both examples satisfy every A value greater than every B value and equal ranges of 10. In the first, B clusters near its mean; in the second, B concentrates at its endpoints, reversing the SD comparison. Statement (1) controls location and statement (2) only the endpoints. Even together they do not determine the full spread.
**common_trap:** Assuming higher values or equal ranges determine standard deviation; SD measures distances from each set's own mean.
**takeaway:** To disprove DS sufficiency, construct two valid cases satisfying all facts but producing opposite answers.
**related_reading:** reading-quant-06-statistics-probability-combinatorics


---

## Q70
**difficulty:** Medium
**type:** Problem Solving
**topic:** Weighted Average

An alloy weighing 40 kilograms is 30% copper by weight. How many kilograms of a second alloy that is 75% copper by weight must be added so that the combined alloy is 60% copper by weight?

- A) 24
- B) 48
- C) 60
- D) 80
- E) 90

**answer:** D
**fastest_path:** Balance deviations from 60%: 40 kg is 30 points below the target, while the new alloy is 15 points above. Thus 40 x 30 = 15x, so x = 80 kg.
**explanation:** Weighted deviations from the target must cancel. The first alloy contributes a deficit of 40 x (60 - 30) = 1,200 percentage-point kilograms. Each kilogram of the second alloy offsets 75 - 60 = 15 of those units, so 1,200 / 15 = 80 kilograms are required.
**mistake_a:** 24 takes the simple midpoint reasoning that the target 60% sits halfway, then sizes the addition to the wrong reference; it ignores that the two alloys pull on the mean with different strengths.
**mistake_b:** 48 comes from equating the two alloys' weighted distances incorrectly (for instance 30 × 40 = 15 × 80 mis-solved to 48) — an arithmetic slip in the balance equation.
**mistake_c:** 60 mistakes the copper weight that must be added (0.75 × 80 = 60 kg of copper) for the weight of the alloy itself.
**mistake_e:** 90 over-adds, as if the target were closer to 75% than it is; the second alloy needs to outweigh the first, but not by this much.
**common_trap:** Averaging the two percentages (30% and 75%) as if equal weights were combined, instead of letting the unknown amount of the richer alloy do the balancing.
**takeaway:** In mixtures, balance each ingredient's amount times its distance from the target percentage.
**hint_nudge:** Track the kilograms of copper, not the percentages — copper in equals copper out.
**hint_strategy:** Copper from alloy 1 (0.30 × 40) plus copper from alloy 2 (0.75x) equals copper required (0.60 × (40 + x)). Solve for x.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q71
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability

A committee of 3 people is to be selected at random from a group of 5 women and 4 men. What is the probability that the committee includes at least one man?

- A) 5/42
- B) 10/21
- C) 4/9
- D) 5/14
- E) 37/42

**answer:** E
**fastest_path:** Complement: P(at least one man) = 1 − P(all women) = 1 − C(5,3)/C(9,3) = 1 − 10/84 = 74/84 = 37/42.
**explanation:** “At least one man” is the complement of an all-woman committee. There are C(9,3) = 84 total committees and C(5,3) = 10 all-woman committees. Subtracting that single excluded case gives 1 - 10/84 = 37/42.
**mistake_a:** 5/42 = 10/84 is P(no men) reduced incompletely or its mismatched form — the very event the complement removes, not the answer.
**mistake_b:** 10/21 = 40/84 counts only the committees with exactly one man, C(4,1)·C(5,2) = 4 × 10 = 40, dropping the two-man and three-man cases that "at least one" also includes.
**mistake_c:** 4/9 is a raw fraction-of-men guess (4 men out of 9 people) that ignores the multi-person selection entirely.
**mistake_d:** 5/14 = 30/84 is another partial count, capturing some but not all of the committees with at least one man.
**common_trap:** Computing P(exactly one man) and stopping, which silently omits the all-the-more-likely cases of two or three men.
**takeaway:** For "at least one," subtract the single clean complement — P(none) — from 1, rather than summing the several "exactly k" cases.
**hint_nudge:** "At least one man" is the opposite of one simple event. Which committee composition has no men at all?
**hint_strategy:** Find P(all three women) = C(5,3)/C(9,3), then subtract from 1.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q72
**difficulty:** Medium
**type:** Problem Solving
**topic:** Restricted Counting — Adjacency

Six students are to be seated in a row of six chairs. In how many of the possible arrangements are two particular students, Mara and Niko, NOT seated next to each other?

- A) 240
- B) 360
- C) 480
- D) 600
- E) 720

**answer:** C
**fastest_path:** Total arrangements minus the adjacent ones: 6! − (5! × 2) = 720 − 240 = 480.
**explanation:** Count the forbidden adjacent case and subtract it from all 6! arrangements. Treat Mara and Niko as one block, giving five objects to arrange in 5! ways, then multiply by 2 for their internal order. Thus adjacent = 240 and not adjacent = 720 - 240 = 480.
**mistake_a:** 240 is the count of arrangements in which the two ARE adjacent — the quantity meant to be subtracted, not the final answer.
**mistake_b:** 360 = 720 / 2 halves the total as if exactly half the seatings put the pair together, but the adjacent share is 240/720 = 1/3, not 1/2.
**mistake_d:** 600 = 720 − 120 subtracts the 5! block-arrangements but forgets to double for the two internal orders of the pair, undercounting the adjacent cases.
**mistake_e:** 720 is the total number of arrangements with no restriction applied at all.
**common_trap:** Forgetting the 2! for the two ways the glued pair can be internally ordered, which leaves the adjacent count at 120 instead of 240.
**takeaway:** Count "not adjacent" as total − adjacent; for the adjacent case, glue the pair into one unit (k! − 1 objects) and multiply by 2! for their internal order.
**hint_nudge:** It is easier to count the seatings where they DO sit together and subtract.
**hint_strategy:** Glue Mara and Niko into one block: arrange 5 objects (5!) and double for their internal order (2!). Subtract from 6!.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q73
**difficulty:** Medium
**type:** Problem Solving
**topic:** Mean

A student's average (arithmetic mean) on her first 5 exams is 78. What score must she earn on a sixth exam so that her average over all 6 exams is exactly 80?

- A) 82
- B) 86
- C) 88
- D) 90
- E) 92

**answer:** D
**fastest_path:** Required sixth score = new total − old total = 6 × 80 − 5 × 78 = 480 − 390 = 90.
**explanation:** The first five exams total 5 x 78 = 390 points. Six exams averaging 80 must total 6 x 80 = 480 points. The sixth exam must supply the 90-point difference. Equivalently, it must offset the first five exams' combined 10-point shortfall from the target.
**mistake_a:** 82 = 80 + 2 just nudges the new average up by the 2-point gap between 78 and 80, ignoring that the deficit accumulated over all five earlier exams.
**mistake_b:** 86 partially accounts for the accumulated deficit but stops short of the full 10-point make-up the five exams require.
**mistake_c:** 88 = 78 + 10 adds the correct 10-point make-up to the old average instead of to the target average of 80.
**mistake_e:** 92 over-corrects, as if the average had to rise by more than 2 points or more exams were below target than actually are.
**common_trap:** Treating the needed score as "a little above the new average," when one exam must single-handedly erase the combined shortfall of all the earlier exams.
**takeaway:** To hit a target average, the new value = (target mean × new count) − (current sum); equivalently, it must offset the total deviation already accumulated.
**hint_nudge:** Work in total points: what sum do 6 exams need for an 80 average, and what sum do you already have?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q74
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability

A machine produces parts independently, and each part is defective with probability 0.1. If 3 parts are produced, what is the probability that at least one of them is defective?

- A) 0.001
- B) 0.027
- C) 0.243
- D) 0.271
- E) 0.300

**answer:** D
**fastest_path:** Complement: P(at least one defective) = 1 − P(none defective) = 1 − (0.9)^3 = 1 − 0.729 = 0.271.
**explanation:** The complement of at least one defective part is that all three are good. Each part is good with probability 0.9, and independence lets those probabilities multiply: P(all good) = 0.9^3 = 0.729. Subtract from 1 to get 0.271.
**mistake_a:** 0.001 = (0.1)^3 is the probability that ALL three parts are defective, a far rarer event than "at least one."
**mistake_b:** 0.027 mixes the factors, for example (0.1)^2 × (0.9) × 3 mis-evaluated, capturing only a sliver of the "at least one" event.
**mistake_c:** 0.243 = 3 × (0.1)(0.9)^2 is P(exactly one defective); "at least one" must also include the two- and three-defective cases.
**mistake_e:** 0.300 = 3 × 0.1 naively adds the per-part probabilities, double-counting the overlap where more than one part is defective and ignoring that probabilities cannot simply be summed.
**common_trap:** Adding 0.1 three times to get 0.3, which treats mutually-overlapping events as disjoint and overcounts; probabilities of "at least one" are not additive across trials.
**takeaway:** For "at least one" across independent trials, compute 1 − (probability of none) = 1 − (1 − p)^n; never sum the single-trial probabilities.
**hint_nudge:** The opposite of "at least one defective" is a single tidy outcome — all parts good. Find that first.
**hint_strategy:** P(all good) = (0.9)^3. Subtract from 1.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q75
**difficulty:** Easy
**type:** Problem Solving
**topic:** Combinations — Pair Counting

At a meeting of 8 people, each person shakes hands exactly once with every other person. What is the total number of handshakes?

- A) 16
- B) 28
- C) 32
- D) 56
- E) 64

**answer:** B
**fastest_path:** Each handshake is one unordered pair of people: C(8,2) = (8 × 7)/2 = 28.
**explanation:** Each handshake corresponds to one pair, and order within a pair does not matter. Choosing two people from eight gives C(8,2) = 28. The alternative count 8 x 7 = 56 counts each handshake twice, once from each person's perspective, so it must also be divided by 2.
**mistake_a:** 16 = 8 × 2 has no combinatorial meaning here; it neither pairs people nor divides out the double count.
**mistake_c:** 32 = 8 × 4 is a stray product that does not correspond to choosing pairs from 8 people.
**mistake_d:** 56 = 8 × 7 counts every ordered pair (each handshake twice) and forgets to divide by 2.
**mistake_e:** 64 = 8 × 8 = 8^2 counts ordered pairs including a person "shaking hands with themselves," neither of which applies.
**common_trap:** Reporting 8 × 7 = 56 without halving; from each person's view there are 7 handshakes, but every handshake is shared by two people.
**takeaway:** Handshake / mutual-pairing counts are combinations: C(n, 2) = n(n − 1)/2, because order within the pair does not matter.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q76
**difficulty:** Hard
**type:** Problem Solving
**topic:** Combinations — Committee Constraints

A committee of 4 people is to be formed from a pool of 5 men and 4 women. How many different committees include at least 2 women?

- A) 60
- B) 81
- C) 96
- D) 105
- E) 126

**answer:** B
**fastest_path:** Total committees minus those with fewer than 2 women: C(9,4) − [C(4,0)C(5,4) + C(4,1)C(5,3)] = 126 − (5 + 40) = 126 − 45 = 81.
**explanation:** There are C(9,4) = 126 total committees. The invalid cases have zero women, C(5,4) = 5, or one woman, C(4,1)C(5,3) = 40. Subtracting these 45 deficient committees leaves 81 with at least two women.
**mistake_a:** 60 is the count for exactly 2 women only, C(4,2)·C(5,2); it omits the exactly-3 and exactly-4-women committees that "at least 2" also includes.
**mistake_c:** 96 results from a miscount of one of the cases, such as using C(5,2) = 10 where C(5,1) = 5 belongs, inflating the three-women tally.
**mistake_d:** 105 = 126 − 21 subtracts a wrong "fewer than 2 women" total, for example by miscounting the one-woman committees.
**mistake_e:** 126 is the total number of committees with no restriction, ignoring the at-least-2-women condition entirely.
**common_trap:** Counting only the "exactly 2 women" case and forgetting that the requirement is satisfied just as well by 3 or 4 women.
**takeaway:** For “at least k,” subtract the cases with fewer than k from the unrestricted total.
**hint_nudge:** "At least 2 women" out of 4 seats — list which exact woman-counts qualify, then decide whether direct or complement counting is faster.
**hint_strategy:** Subtract the all-men and exactly-one-woman committees from C(9,4).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q77
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability

Three letters are placed at random, one per envelope, into three envelopes that have been pre-addressed to the three intended recipients. What is the probability that exactly one letter is placed in its correct envelope?

- A) 1/6
- B) 1/3
- C) 1/2
- D) 2/3
- E) 5/6

**answer:** C
**fastest_path:** Choose the one correctly placed letter in 3 ways. The other two must swap, which can happen in only 1 way. Favorable = 3 out of 3! = 6 arrangements, so the probability is 1/2.
**explanation:** Once one letter is fixed in its correct envelope, exactly one arrangement keeps both remaining letters wrong: they exchange envelopes. Thus there are 3 favorable arrangements, one for each choice of the correct letter, among 6 total permutations. Exactly two correct is impossible because the third would then also be forced correct.
**mistake_a:** 1/6 is the probability that ALL three letters are correct (the single fully-matched arrangement), not exactly one.
**mistake_b:** 1/3 = 2/6 is the probability that NO letter is correct (the two derangements of three objects), the opposite end of the count.
**mistake_d:** 2/3 = 4/6 lumps together the "exactly one correct" and "all correct" arrangements (3 + 1), but "exactly one" excludes the all-correct case.
**mistake_e:** 5/6 is the complement of "all three correct" (1 − 1/6) — the probability that not all are correct, a much broader event than exactly one.
**common_trap:** Believing "exactly two correct" is possible; once two letters are in their own envelopes, the third has nowhere else to go and is automatically correct too, so exactly two can never happen.
**takeaway:** "Exactly one fixed point" = choose the matched item, then derange the rest; for three letters this gives 3 favorable arrangements out of 6, or 1/2.
**hint_nudge:** List all 6 ways to place the letters and mark how many land correctly in each — the pattern is short.
**hint_strategy:** Pick which one letter is correct (3 ways), then force the other two to both be wrong (only the swap works).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q78
**difficulty:** Medium
**type:** Problem Solving
**topic:** Weighted Average

A history class has 30 students. The 18 students who completed the optional essay earned a mean grade of 72 on the final, while the class as a whole earned a mean grade of 78. What was the mean final grade of the 12 students who did not complete the optional essay?

- A) 75
- B) 81
- C) 84
- D) 87
- E) 90

**answer:** D
**fastest_path:** The 18 essay students are 6 points below the class mean, a 108-point deficit. Spread that over the other 12 students: 108/12 = 9 above 78, so their mean is 87.
**explanation:** Weighted deviations from the class mean must balance. The essay group contributes 18 x (72 - 78) = -108 points. The other 12 students must contribute +108 points, or +9 each, placing their mean at 78 + 9 = 87.
**mistake_a:** 75 splits the gap evenly, as if both groups sat the same distance from 78. The smaller group must move farther, so its mean is not just halfway up.
**mistake_b:** 81 = 78 + 3 nudges the mean by part of the deficit only; it fails to load all 108 deficit points onto the 12-student group.
**mistake_c:** 84 = 72 + 12 mirrors the class-to-essay gap of 6 incorrectly, or doubles it; the non-completers' offset is 9, not 12.
**mistake_e:** 90 = 78 + 12 treats the two groups as equal in size, matching the non-completers' surplus to a 12-point figure. Because 18 essay students outnumber the 12 non-completers, the smaller group moves more than 6 but the figure is 9, not 12.
**common_trap:** Ignoring the unequal group sizes and assuming the non-completers sit as far above the mean as the completers sit below it.
**takeaway:** Weighted averages balance by total deviation, not equal shares: (count × distance from the mean) for one group must exactly offset the other group's.
**hint_nudge:** Work in total points — the whole class totals 30 × 78.
**hint_strategy:** Non-completers' total = class total − completers' total; then divide by 12.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q79
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability

A committee of 3 people is selected at random from a group of 5 women and 4 men. What is the probability that the committee contains exactly 2 women?

- A) 5/42
- B) 10/21
- C) 25/42
- D) 4/9
- E) 20/21

**answer:** B
**fastest_path:** Use combinations: favorable = choose 2 of 5 women and 1 of 4 men = C(5,2) × C(4,1) = 10 × 4 = 40; total = C(9,3) = 84. So 40/84 = 10/21.
**explanation:** An exactly-two-women committee must also contain exactly one man. Count favorable committees as C(5,2)C(4,1) = 40, then divide by all C(9,3) = 84 committees. The result reduces to 10/21.
**mistake_a:** 5/42 = 10/84 is P(all 3 women) = C(5,3)/C(9,3) = 10/84. "Exactly 2 women" requires the third member to be a man, not a third woman.
**mistake_c:** 25/42 = 50/84 is P(at least 2 women) = (40 + 10)/84, which adds the all-women case to the exactly-two case. "Exactly 2" excludes the all-women committees.
**mistake_d:** 4/9 ignores combinations entirely and reports a single draw's chance (4 men out of 9, or similar), skipping the C(n, r) counting the problem requires.
**mistake_e:** 20/21 = 80/84 doubles the favorable count to 80, e.g., by treating the committee positions as ordered when choosing the 2 women and 1 man.
**common_trap:** Reading "exactly 2 women" as "at least 2 women" and folding in the all-women committees, or treating the unordered committee as an ordered arrangement.
**takeaway:** For exact subgroup counts, multiply the relevant combinations and divide by all possible selections.
**hint_nudge:** A 3-person committee with exactly 2 women has how many men?
**hint_strategy:** Favorable = C(5,2) × C(4,1); total = C(9,3). Divide.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q80
**difficulty:** Medium
**type:** Problem Solving
**topic:** Standard Deviation

Each of the following five sets contains five numbers with a mean of 44. Which set has the greatest standard deviation?

- A) {40, 42, 44, 46, 48}
- B) {30, 40, 44, 48, 58}
- C) {44, 44, 44, 44, 44}
- D) {16, 44, 44, 44, 72}
- E) {34, 44, 44, 44, 54}

**answer:** D
**fastest_path:** All sets share mean 44 and have five values. Set D places two values 28 points from the mean, farther than any other option, so it has the greatest SD.
**explanation:** With equal means and counts, compare squared distances from 44. Set D's deviations are -28, 0, 0, 0, and 28, whose squares sum to 1,568. The next-largest total is Set B's 424, so D has the greatest standard deviation.
**mistake_a:** {40, 42, 44, 46, 48} is the most tightly clustered set (largest deviation only 4), giving the smallest nonzero spread, not the greatest.
**mistake_b:** {30, 40, 44, 48, 58} spreads out to ±14, more than A but well short of D's ±28; its sum of squared deviations (424) is far below D's.
**mistake_c:** {44, 44, 44, 44, 44} has every value equal to the mean, so its standard deviation is 0 — the smallest possible, the opposite of greatest.
**mistake_e:** {34, 44, 44, 44, 54} has the same shape as D (three values at the mean, two extremes) but its extremes reach only ±10 versus D's ±28, so its spread is much smaller.
**common_trap:** Picking the set with the most spread-looking middle (B's evenly fanned values) instead of the set with the most extreme outliers; standard deviation is driven hardest by the points farthest from the mean, because those deviations get squared.
**takeaway:** With equal means and counts, rank standard deviations by the sum of squared deviations; far-out values dominate because squaring magnifies large deviations.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q81
**difficulty:** Hard
**type:** Problem Solving
**topic:** Restricted Counting — Adjacency

In how many ways can 7 distinct books be arranged in a row on a shelf if 2 particular books must NOT be placed next to each other?

- A) 1,440
- B) 2,520
- C) 3,600
- D) 4,320
- E) 5,040

**answer:** C
**fastest_path:** Total arrangements = 7! = 5,040. Adjacent arrangements = 2 x 6! = 1,440 by treating the pair as one block. Subtract to get 3,600.
**explanation:** Count the forbidden adjacent arrangements and remove them from the total. The pair forms one block among six objects, with two possible internal orders, so the adjacent count is 2 x 6!. Therefore not adjacent = 7! - 2 x 6! = 3,600.
**mistake_a:** 1,440 = 2 × 6! is the count of arrangements where the two books ARE adjacent — the bad case you must subtract, not the answer.
**mistake_b:** 2,520 = 7!/2 halves the total, as if exactly half the arrangements were adjacent; the adjacent fraction is 1,440/5,040 = 2/7, not 1/2.
**mistake_d:** 4,320 = 6 × 6! subtracts only 6! (720) instead of 2 × 6! (1,440), forgetting the 2 internal orders of the tied block.
**mistake_e:** 5,040 = 7! is the total number of arrangements with no restriction applied — the "not adjacent" condition has been ignored.
**common_trap:** Forgetting that the glued pair has 2 internal orderings, so the adjacent count is 2 × 6! and not 6!; or counting the adjacent case as the final answer instead of subtracting it.
**takeaway:** For “not adjacent,” subtract the block count from all arrangements and include the pair's internal orders.
**hint_nudge:** It is easier to count the arrangements where the two books ARE together and remove them.
**hint_strategy:** Adjacent count = (treat the pair as one block: 6! arrangements) × (2 ways to order the pair). Subtract from 7!.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q82
**difficulty:** Medium
**type:** Problem Solving
**topic:** Mean / Median

A list consists of 15 consecutive multiples of 4, the least of which is 12. What is the arithmetic mean of the list?

- A) 36
- B) 40
- C) 44
- D) 68
- E) 96

**answer:** B
**fastest_path:** A list of consecutive multiples of 4 is evenly spaced, so its mean equals its median, the middle (8th of 15) term. The 8th term is 12 + 7 × 4 = 40.
**explanation:** An evenly spaced list is symmetric, so its mean equals its middle term. Fifteen terms have the 8th term in the center. Starting from 12 and moving seven steps of 4 gives 12 + 28 = 40. As a check, the last term is 68 and (12 + 68)/2 is also 40.
**mistake_a:** 36 is the 7th term (12 + 6 × 4), an off-by-one on the middle position — the median of 15 terms is the 8th term, not the 7th.
**mistake_c:** 44 is the 9th term (12 + 8 × 4), the other off-by-one, overshooting the middle position by one.
**mistake_d:** 68 is the largest term (12 + 14 × 4), the maximum of the list rather than its center.
**mistake_e:** 96 is roughly the sum of the first and last terms (12 + 68 = 80) miscomputed, or 24 × 4; it treats a total-like quantity as the mean instead of averaging.
**common_trap:** Miscounting the middle position — with 15 terms the median is the 8th, not the 7th or 9th — or trying to sum all 15 terms when symmetry makes that unnecessary.
**takeaway:** For evenly spaced lists, mean = median = middle term (odd count) = average of the first and last terms; never sum every term.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q83
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability

An archer hits the bull's-eye on any given shot with probability 1/3, and the outcomes of her shots are independent. If she takes 3 shots, what is the probability that she hits the bull's-eye at least once?

- A) 1/27
- B) 8/27
- C) 4/9
- D) 19/27
- E) 26/27

**answer:** D
**fastest_path:** Complement: P(at least one hit) = 1 − P(no hits). Each miss has probability 2/3, and the shots are independent, so P(no hits) = (2/3)^3 = 8/27. Thus 1 − 8/27 = 19/27.
**explanation:** The complement of at least one hit is missing all three shots. Each miss has probability 2/3, and independence allows multiplication, so P(no hits) = (2/3)^3 = 8/27. Subtracting from 1 gives 19/27.
**mistake_a:** 1/27 = (1/3)^3 is P(she hits on all three shots) — the probability of three hits, not of at least one.
**mistake_b:** 8/27 = (2/3)^3 is P(she misses all three shots), which is exactly the complement you subtract, not the answer.
**mistake_c:** 4/9 = 3 × (1/3)(2/3)^2 is P(exactly one hit). "At least one" also includes exactly two and exactly three hits, which this drops.
**mistake_e:** 26/27 = 1 − 1/27 subtracts the all-hits probability instead of the no-hits probability, flipping which extreme is removed.
**common_trap:** Computing P(exactly one hit) instead of P(at least one hit), which silently omits the two-hit and three-hit cases; or subtracting the wrong extreme from 1.
**takeaway:** "At least one" means 1 − P(none). For independent trials, P(none) is the product of the individual failure probabilities, here (2/3)^3.
**hint_nudge:** "At least one hit" is everything except a single outcome — which one?
**hint_strategy:** P(no hits) = (2/3)^3. Subtract that from 1.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q84
**difficulty:** Medium
**type:** Problem Solving
**topic:** Weighted Average

An investor places $3,000 in a fund that returns 4% for the year and an additional amount in a second fund that returns 9% for the year. If the combined return on the total amount invested is 6%, how much did the investor place in the second fund?

- A) $1,200
- B) $1,500
- C) $2,000
- D) $2,500
- E) $4,500

**answer:** C
**fastest_path:** Balance the deviations from the 6% blend. The $3,000 at 4% is 2 points below the blend; the second fund at 9% is 3 points above it. To balance, 3,000 × 2 = x × 3, so x = 6,000/3 = $2,000.
**explanation:** Weighted deviations from the 6% target must balance. The first fund contributes $3,000 x 2 percentage points of shortfall. The second contributes 3x points of surplus. Setting 6,000 = 3x gives $2,000. The returns then total $120 + $180 = $300 on $5,000, or 6%.
**mistake_a:** $1,200 reverses the balance, pairing the larger deviation with the larger amount (3,000 × 3 = x × 2 gives 4,500, or a related mis-pairing yields 1,200); the 4% fund is only 2 points off the blend, the 9% fund 3 points.
**mistake_b:** $1,500 splits the $3,000 in half, as if the blend sat exactly halfway between 4% and 9%; the blend of 6% is closer to 4%, so the high fund needs a larger share than half the low fund's amount.
**mistake_d:** $2,500 comes from balancing to the midpoint rate of 6.5% (halfway between 4% and 9%) instead of the given 6%, shifting the required amount.
**mistake_e:** $4,500 makes the two funds' dollar deviations equal in the wrong direction (3,000 × 3 = 9,000 then /2), over-weighting the second fund far past what a 6% blend allows.
**common_trap:** Assuming a 6% blend lies midway between 4% and 9% (it would be 6.5%), or pairing each fund's deviation with the wrong dollar amount.
**takeaway:** Portfolio return is a dollar-weighted average; balance it by setting (amount × distance below the blend) equal to (amount × distance above the blend).
**hint_nudge:** How far is each fund's rate from the 6% blend, and which side is it on?
**hint_strategy:** Set 0.04(3,000) + 0.09x = 0.06(3,000 + x) and solve for x.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q85
**difficulty:** Hard
**type:** Problem Solving
**topic:** Combinations — Committee Constraints

A 4-person committee is to be formed from a pool of 6 teachers and 4 students. How many such committees include at least 2 teachers?

- A) 90
- B) 161
- C) 170
- D) 185
- E) 195

**answer:** D
**fastest_path:** Use the complement. Total committees = C(10,4) = 210. Subtract those with fewer than 2 teachers: 0 teachers = C(4,4) = 1; 1 teacher = C(6,1) × C(4,3) = 6 × 4 = 24. So 210 − 1 − 24 = 185.
**explanation:** There are C(10,4) = 210 total committees. Invalid committees have zero teachers, C(4,4) = 1, or one teacher, C(6,1)C(4,3) = 24. Removing those 25 deficient cases leaves 185 committees with at least two teachers.
**mistake_a:** 90 = C(6,2) × C(4,2) counts only the exactly-2-teacher committees and omits the exactly-3 and exactly-4 cases that "at least 2" also includes.
**mistake_b:** 161 subtracts too much — for instance removing all committees with 1 teacher (24) plus an inflated zero-teacher count, or a slip in C(10,4).
**mistake_c:** 170 = 90 + 80 captures exactly 2 and exactly 3 teachers but forgets the 15 all-teacher (exactly 4) committees.
**mistake_e:** 195 = 210 − 15 subtracts only the all-student committees miscounted as 15, removing the wrong "too few" set; the cases to remove are 0 teachers (1) and 1 teacher (24).
**common_trap:** Reading "at least 2 teachers" as "exactly 2 teachers," or removing the wrong complement (subtracting student-heavy committees incompletely).
**takeaway:** For "at least k," prefer total − (fewer than k); here total C(10,4) minus the 0-teacher and 1-teacher committees. Verify by summing the qualifying exact cases.
**hint_nudge:** Which committees do NOT have at least 2 teachers? There are only two such cases.
**hint_strategy:** Total = C(10,4). Subtract C(4,4) for all-students and C(6,1) × C(4,3) for exactly one teacher.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

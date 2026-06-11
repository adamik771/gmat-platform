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
**topic:** Counting

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
**type:** Problem Solving
**topic:** Mean / Median

The five terms of list L are distinct positive integers that form an arithmetic sequence with common difference d, where d > 0. Which of the following must be true?

I. The average (arithmetic mean) of the terms in L equals the median of L.
II. The average (arithmetic mean) of the terms in L is a term in L.
III. The range of L equals 4d.

- A) I only
- B) I and II only
- C) I and III only
- D) II and III only
- E) I, II, and III

**answer:** E
**fastest_path:** An evenly spaced list is symmetric about its middle term, so mean = median = the third term — that settles I and II at once — and the terms run from a to a + 4d, so the range is 4d. All three must be true.
**explanation:** Write the five terms in increasing order as a, a + d, a + 2d, a + 3d, and a + 4d, where a is the first term and d > 0 is the common difference.

Statement I: The sum of the five terms is 5a + 10d, so the mean is (5a + 10d)/5 = a + 2d. The median of five ordered values is the middle (third) value, which is also a + 2d. The mean equals the median, so I must be true.

Statement II: The mean a + 2d is exactly the third term of the sequence, so the mean is itself a term in L. II must be true.

Statement III: The range of a list is its largest value minus its smallest value: (a + 4d) − a = 4d. III must be true.

Each statement holds for every arithmetic sequence of five terms, so all three must be true.

The correct answer is E.
**mistake_a:** I is true, but stopping there overlooks that the shared value a + 2d is itself the third term of the list (II) and that the range telescopes to (a + 4d) − a = 4d (III).
**mistake_b:** III is dismissed too quickly — five evenly spaced terms span exactly 4 common differences, so the range is always 4d.
**mistake_c:** II is dismissed — for an odd number of evenly spaced terms, the mean does not merely equal the median in value; it lands on an actual member of the list.
**mistake_d:** Dropping I concedes the core symmetry fact: in every arithmetic sequence the mean equals the median, regardless of a and d.
**common_trap:** Doubting that all three Roman numerals can hold simultaneously and hunting for a counterexample that does not exist — the symmetry of evenly spaced lists makes each claim automatic.
**takeaway:** In any arithmetic sequence the mean equals the median (the middle term when the count is odd), and the range is (number of gaps) × (common difference).
**hint_nudge:** Write the terms as a, a + d, a + 2d, a + 3d, a + 4d and test each Roman numeral against that form.
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
**type:** Problem Solving
**topic:** Conditional Counting

A committee of 3 people is to be chosen from a group of n people. If the group instead had n + 1 people, the number of different possible committees would increase by 21. How many different committees of 3 can be chosen from the original group of n people?

- A) 21
- B) 35
- C) 42
- D) 56
- E) 70

**answer:** B
**fastest_path:** Adding one person creates exactly C(n, 2) new committees — the newcomer paired with any 2 of the original n — so C(n, 2) = 21, n(n − 1) = 42, n = 7, and C(7, 3) = 35.
**explanation:** The number of committees of 3 chosen from m people is C(m, 3) = m!/[3!(m − 3)!]. The increase produced by one additional person is C(n + 1, 3) − C(n, 3).

Every new committee must include the additional person together with 2 of the original n people, so the increase equals C(n, 2). (This is Pascal's identity: C(n + 1, 3) = C(n, 3) + C(n, 2).)

Setting the increase equal to 21 gives C(n, 2) = n(n − 1)/2 = 21, so n(n − 1) = 42. Since 7 × 6 = 42 and n must be a positive integer, n = 7.

The number of committees from the original group is therefore C(7, 3) = (7 × 6 × 5)/(3 × 2 × 1) = 35.

As a check, the enlarged group would allow C(8, 3) = 56 committees, and 56 − 35 = 21, matching the given increase.

The correct answer is B.
**mistake_a:** 21 is the stated increase itself, not the number of committees in the original group.
**mistake_c:** 42 = n(n − 1) is the intermediate product from solving C(n, 2) = 21; it still has to be resolved to n = 7 and fed into C(7, 3).
**mistake_d:** 56 = C(8, 3) counts the committees in the enlarged group of 8, but the question asks about the original group of 7.
**mistake_e:** 70 doubles the correct count — for instance by treating part of the selection as ordered.
**common_trap:** Computing the enlarged group's count C(8, 3) = 56 and stopping, because that is the last number the algebra produces — the question asks about the original group.
**takeaway:** Adding one person to a group adds exactly C(n, k − 1) new k-person committees: the ones that contain the newcomer.
**hint_nudge:** How many of the new committees contain the added person? All of them.
**hint_strategy:** The increase is C(n, 2). Set n(n − 1)/2 = 21 and solve for the positive integer n.
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
**fastest_path:** Sum = 5 × 20 = 100; median 22 and max 35 leave a + b + d = 43. Distinctness forces d ≥ 23, and d = 23 works because a + b = 20 fits below the median (e.g. 1 and 19). Answer: 23.
**explanation:** This problem is solved by translating the conditions on the average, median, and maximum into a single sum constraint and then optimizing under the requirement that the integers be distinct.

Let the five distinct positive integers, listed in increasing order, be a, b, c, d, and e, so that a < b < c < d < e. The median of five ordered values is the middle value, so c = 22. The largest value is e = 35. Because the average of the five integers is 20, their sum is 5 × 20 = 100.

Writing the sum and substituting the known values gives a + b + c + d + e = 100, so a + b + d = 100 − c − e = 100 − 22 − 35 = 43.

The quantity to be minimized is the second-largest integer, d. From a + b + d = 43, we have d = 43 − (a + b), so d is smallest when a + b is as large as possible. The integers must be distinct, which forces d > c = 22; since d is an integer, d ≥ 23.

We test the smallest permissible value, d = 23. Then a + b = 43 − 23 = 20, and we must choose distinct positive integers a < b with both less than c = 22. For example, a = 1 and b = 19 satisfy a < b < 22 and a + b = 20. The resulting set is {1, 19, 22, 23, 35}, whose sum is 1 + 19 + 22 + 23 + 35 = 100, confirming an average of 20, a median of 22, and a maximum of 35. Thus d = 23 is attainable.

The correct answer is B.
**mistake_a:** 22 ignores distinctness — the second-largest integer must be strictly greater than the median 22, or it would duplicate the middle value.
**mistake_c:** 24 assumes d must clear the median by 2, but consecutive integers 22 and 23 are already distinct.
**mistake_d:** 25 over-restricts a and b — they only need to be distinct positive integers below 22 that sum to 20, which 1 and 19 satisfy easily.
**mistake_e:** 26 is the same over-restriction pushed one further from the true boundary.
**common_trap:** Applying "distinct" loosely at exactly the wrong spot: d only has to beat the median by 1, but it does have to beat it.
**takeaway:** To minimize one element of a constrained set, push the free elements to their extremes — then check the order and distinctness constraints right at the boundary.
**hint_nudge:** Convert the average to a sum (100) and subtract the two values you already know.
**hint_strategy:** a + b + d = 43 with a < b < 22 < d. Minimizing d means maximizing a + b — but d > 22 binds first.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Standard Deviation under Linear Transformation

A data set of 5 numbers has mean 10 and standard deviation 2. If each number in the set is multiplied by 3 and then increased by 4, what is the standard deviation of the new data set?

- A) 2
- B) 3
- C) 6
- D) 10
- E) 22

**answer:** C
**fastest_path:** Only the multiplier touches the spread: SD = |3| × 2 = 6. The +4 shifts every value equally and changes nothing.
**explanation:** When every value in a data set undergoes a linear transformation of the form y = ax + b, the spread of the data is affected only by the multiplicative constant. The governing principle is that the standard deviation satisfies SD(y) = |a| · SD(x); the additive constant b shifts each value by the same amount and therefore leaves the spread unchanged.

Let x denote a value in the original data set, which has mean 10 and standard deviation 2. Each value is multiplied by 3 and then increased by 4, so the transformed value is y = 3x + 4. Here the multiplicative constant is a = 3 and the additive constant is b = 4.

Applying the rule, the standard deviation of the new data set is SD(y) = |3| · SD(x) = 3 · 2 = 6. The addition of 4 does not enter this computation, because translating every value by the same constant moves the entire distribution without altering the distances between values.

The correct answer is C.
**mistake_a:** 2 keeps the original SD as if neither operation affected the spread — but multiplying by 3 stretches every gap threefold.
**mistake_b:** 3 confuses the scaling factor itself with the new standard deviation.
**mistake_d:** 10 = 3 × 2 + 4 applies the +4 shift to the SD as well; a uniform shift moves the whole set without widening it.
**mistake_e:** 22 entangles the shift twice (for example 3 × (2 + 4) + 4); the additive constant never enters a spread calculation.
**common_trap:** Adding the 4: y = 3x + 4 sends the mean to 3(mean) + 4, but the standard deviation only to 3(SD).
**takeaway:** Under y = ax + b, the mean becomes a·mean + b but the SD becomes |a|·SD — additive shifts are invisible to every measure of spread.
**hint_nudge:** Which of the two operations changes the distances between values?
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
**fastest_path:** 13 hearts + 12 face cards − 3 heart face cards = 22 of 52 = 11/26.
**explanation:** This problem is governed by the addition rule of probability, which for two events that may overlap states that P(A or B) = P(A) + P(B) - P(A and B). The intersection is subtracted once because outcomes belonging to both events are otherwise counted twice.

Let A be the event that the card drawn is a heart, and let B be the event that the card drawn is a face card (jack, queen, or king). The sample space consists of the 52 equally likely cards in a standard deck.

There are 13 hearts, so P(A) = 13/52. There are 3 face cards in each of the 4 suits, giving 12 face cards in all, so P(B) = 12/52. The cards that are both hearts and face cards are the jack, queen, and king of hearts, a total of 3 cards, so P(A and B) = 3/52.

Applying the addition rule:
P(A or B) = P(A) + P(B) - P(A and B)
P(A or B) = 13/52 + 12/52 - 3/52
P(A or B) = (13 + 12 - 3)/52
P(A or B) = 22/52.

Reducing the fraction by dividing numerator and denominator by 2 gives 22/52 = 11/26.

The correct answer is C.
**mistake_a:** 1/4 = 13/52 counts only the hearts and ignores the face cards entirely.
**mistake_b:** 3/13 = 12/52 counts only the face cards.
**mistake_d:** 25/52 = (13 + 12)/52 adds the two groups without subtracting the 3 cards that are both, double-counting the jack, queen, and king of hearts.
**mistake_e:** 1/2 = 26/52 is the probability of a red card — a different event that merely feels similar in size.
**common_trap:** Forgetting that "heart" and "face card" overlap in exactly 3 cards, so a straight sum counts those cards twice.
**takeaway:** For P(A or B) with overlapping events, subtract P(A and B) exactly once — count, don't double-count.
**hint_nudge:** Are "heart" and "face card" mutually exclusive?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q24
**difficulty:** Easy
**type:** Problem Solving
**topic:** Median of an Odd-Sized Set

A data set consists of 7 numbers whose sum is 84. When the numbers are arranged in increasing order, the fourth number is 15. What is the median of the data set?

- A) 12
- B) 14
- C) 15
- D) 16
- E) 21

**answer:** C
**fastest_path:** Seven values put the median at position (7 + 1)/2 = 4, and the fourth ordered value is given directly: 15. The sum is a decoy.
**explanation:** The median of a data set with an odd number of values is the middle value once the data are arranged in increasing order. For 7 values, the middle position is (7 + 1)/2 = 4, so the median is the fourth number in the ordered list.

That fourth number is given to be 15, so the median is 15.

The sum of 84 plays no role. It determines the mean, 84/7 = 12, which is a different measure of center. Many different sets of 7 numbers have sum 84 and fourth ordered value 15 — for example, {1, 2, 3, 15, 16, 23, 24} — and every one of them has median 15.

The correct answer is C.
**mistake_a:** 12 = 84/7 is the mean; the sum is supplied precisely to bait this swap. The median is positional and ignores the sum entirely.
**mistake_b:** 14 drifts one slot below the given fourth value — for example, by trying to average two "middle" values as though the set had an even count.
**mistake_d:** 16 is the same off-by-one in the other direction, taking a neighbor of the true middle position.
**mistake_e:** 21 = 84/4 divides the sum by the position number, combining the two given numbers without a governing principle.
**common_trap:** Computing the mean (12) because the sum is the most prominent number in the stem — the median never needs it.
**takeaway:** For an odd count n, the median is the value at position (n + 1)/2 of the ordered list; sums and means are irrelevant to locating it.
**hint_nudge:** With 7 ordered values, which position is the middle one?
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
**fastest_path:** Per 1,000 products: 600 × 3% = 18 defectives from P, 400 × 5% = 20 from Q. P's share of defectives = 18/38 = 9/19.
**explanation:** This problem is governed by the rule for conditional probability, often applied through Bayes' reasoning: for events A and B, P(A | B) = P(A and B) / P(B). The required probability is the proportion of all defective products that originate at Factory P, so the task is to compute the probability that a product is both from Factory P and defective, and then divide by the total probability that a product is defective.

Let the company's total output be the sample space. The given information establishes the prior probabilities and conditional defect rates. The probability that a randomly selected product comes from Factory P is P(P) = 0.60, and the probability that it comes from Factory Q is P(Q) = 0.40. The conditional probability that a product is defective given that it came from Factory P is P(D | P) = 0.03, and the conditional probability that a product is defective given that it came from Factory Q is P(D | Q) = 0.05.

We first find the probability of each joint event by multiplying the prior probability of the factory by its conditional defect rate. For Factory P, P(P and D) = P(P) times P(D | P) = 0.60 times 0.03 = 0.018. For Factory Q, P(Q and D) = P(Q) times P(D | Q) = 0.40 times 0.05 = 0.020.

Since a defective product must come from exactly one of the two factories, the total probability that a product is defective is the sum of these two joint probabilities: P(D) = P(P and D) + P(Q and D) = 0.018 + 0.020 = 0.038.

Applying the conditional probability rule yields P(P | D) = P(P and D) / P(D) = 0.018 / 0.038. Multiplying numerator and denominator by 1,000 gives 18 / 38, and dividing both by 2 gives 9 / 19.

The correct answer is C.
**mistake_a:** 3/19 uses the raw 3% defect rate over the 19-part total without weighting by Factory P's 60% production share.
**mistake_b:** 6/19 = 12/38 swaps the defect rates between the factories, putting 0.40 × 0.03 in the numerator.
**mistake_d:** 10/19 = 20/38 is the complement — the probability the defective product came from Factory Q.
**mistake_e:** 12/19 drifts toward P's 60% production share; conditioning on "defective" must re-weight by the defect rates, which favor Q.
**common_trap:** Answering with Factory P's production share (60%) or its defect rate (3%) instead of its share of the defectives — conditioning on "defective" changes the sample space.
**takeaway:** "Given that X happened, where did it come from?" = (branch's contribution to X)/(total X). Weight every branch by both its prior share and its rate — concrete counts per 1,000 make this mechanical.
**hint_nudge:** Imagine 1,000 products. How many defectives does each factory contribute?
**hint_strategy:** Defectives from P: 600 × 3% = 18; from Q: 400 × 5% = 20. The answer is 18/(18 + 20).
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
**fastest_path:** Last minus first in the sorted list: 94 − 42 = 52.
**explanation:** The range of a data set is a measure of spread, defined as the difference between the largest and smallest values in the set: Range = maximum value minus minimum value. This quantity describes the total width of the data, in contrast to the mean or median, which describe its center.

Let the data set be the 9 test scores listed in ascending order: 42, 55, 61, 68, 73, 78, 82, 86, 94. Because the values are already sorted, the minimum is the first entry and the maximum is the last entry. Thus the minimum value is 42 and the maximum value is 94.

Applying the definition of range, we subtract the minimum from the maximum:

Range = 94 minus 42 = 52.

The correct answer is B.
**mistake_a:** 42 copies the minimum instead of subtracting it from the maximum.
**mistake_c:** 68 is the fourth list entry — a middling value, not a measure of spread.
**mistake_d:** 73 is the median: the center of the data, not its width.
**mistake_e:** 94 copies the maximum without subtracting the minimum.
**common_trap:** Reporting a position (an endpoint or the median) when the question asks for a difference — the range is maximum minus minimum.
**takeaway:** Range = maximum − minimum; with sorted data it is a single subtraction of the first value from the last.
**hint_nudge:** The list is already sorted — which two values define the range?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q27
**difficulty:** Hard
**type:** Problem Solving
**topic:** Standard Deviation vs. Range

Data set S consists of the ten values 0, 5, 5, 5, 5, 5, 5, 5, 5, 10, and data set T consists of the eight values 1, 1, 1, 1, 9, 9, 9, 9. Which of the following statements is true?

- A) S has the greater range and the greater standard deviation
- B) S has the greater range, and T has the greater standard deviation
- C) T has the greater range, and S has the greater standard deviation
- D) S and T have equal ranges, and T has the greater standard deviation
- E) S has the greater range, and the two sets have equal standard deviations

**answer:** B
**fastest_path:** Ranges by inspection: 10 − 0 = 10 beats 9 − 1 = 8. Spread by inspection: 8 of S's 10 values sit exactly on its mean of 5, while every value of T sits 4 away from its mean of 5 — so T's standard deviation is far larger. No formula needed.
**explanation:** The range and the standard deviation measure spread in different ways: the range uses only the two extreme values, while the standard deviation measures the typical distance of all the values from the mean. This question is built on the gap between the two.

Range: For S, the maximum is 10 and the minimum is 0, so the range is 10 − 0 = 10. For T, the maximum is 9 and the minimum is 1, so the range is 9 − 1 = 8. S has the greater range.

Standard deviation: The mean of S is (0 + 5 × 8 + 10)/10 = 50/10 = 5. Eight of the ten values equal 5 exactly, deviating by 0; only the values 0 and 10 deviate, each by 5. The variance is (5² + 5²)/10 = 50/10 = 5, so the standard deviation of S is √5, approximately 2.2.

The mean of T is (1 × 4 + 9 × 4)/8 = 40/8 = 5. Every one of the eight values deviates from the mean by exactly 4, so the variance is 4² = 16 and the standard deviation of T is 4.

Thus S has the greater range, while T has the much greater standard deviation.

The correct answer is B.
**mistake_a:** Assumes the wider range implies the wider spread. The range sees only the two extremes; S's other eight values are glued to the mean, so its typical deviation is tiny.
**mistake_c:** Flips the range comparison: S spans 10 − 0 = 10 while T spans only 9 − 1 = 8.
**mistake_d:** The ranges are not equal (10 versus 8), even though this choice gets the standard deviation comparison right.
**mistake_e:** The standard deviations are far from equal: √5 ≈ 2.2 for S versus exactly 4 for T.
**common_trap:** Equating "bigger range" with "bigger standard deviation" — a single pair of outliers stretches the range without moving the bulk of the data.
**takeaway:** Range uses two values; standard deviation uses all of them. A tightly clustered set with two outliers can out-range, yet under-spread, a set whose every value sits far from the mean.
**hint_nudge:** How far is a typical value of each set from that set's mean?
**hint_strategy:** Both means are 5. In S, eight of ten values deviate by 0; in T, all eight values deviate by 4. Compare the ranges separately.
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
**fastest_path:** 45 + 35 − 20 = 60; the 20 dual owners sit inside both counts, so subtract them once.
**explanation:** This problem is governed by the inclusion-exclusion principle for the union of two sets. When two groups overlap, the number of members in at least one of the groups equals the size of the first group plus the size of the second group minus the number of members counted in both, since those members would otherwise be counted twice.

Let C denote the set of people who own a car and B denote the set of people who own a bicycle. We are given that the number who own a car is |C| = 45, the number who own a bicycle is |B| = 35, and the number who own both is |C ∩ B| = 20. We seek the number who own at least one of the two things, which is the size of the union, |C ∪ B|.

Applying the principle:

|C ∪ B| = |C| + |B| − |C ∩ B|

Substituting the known values:

|C ∪ B| = 45 + 35 − 20

First, add the two individual totals:

45 + 35 = 80

Then subtract the overlap once, so that the 20 people who own both are no longer counted twice:

80 − 20 = 60

Thus, 60 people own at least one of the two things.

The correct answer is C.
**mistake_a:** 45 counts only the car owners.
**mistake_b:** 55 = 80 − 45 + 20 garbles the computation by starting from the total; the union needs the two group sizes minus their overlap.
**mistake_d:** 65 = 45 + 20 adds the dual owners to one group instead of subtracting them from the sum of both.
**mistake_e:** 80 = 45 + 35 skips the subtraction — and the fact that it lands exactly on the group size should itself raise suspicion.
**common_trap:** Adding 45 + 35 and stopping; the 20 people who own both are inside both numbers and get counted twice.
**takeaway:** |A ∪ B| = |A| + |B| − |A ∩ B|: whenever two given counts overlap, subtract the overlap exactly once.
**hint_nudge:** The 20 dual owners appear in both the 45 and the 35.
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
**fastest_path:** Expected payout is 200/100 = $2 per ticket; the ticket costs $5, so the expected net is 2 − 5 = −$3.
**explanation:** The expected net gain is found by summing, over every possible outcome, the product of that outcome's probability and its net value. We must account for both the case in which the ticket wins and the case in which it loses.

Let the cost of the ticket be $5. Because one winning ticket is drawn at random from 100 tickets, the probability that the chosen ticket wins is 1/100, and the probability that it loses is 99/100.

We translate each outcome into a net gain. If the ticket wins, the buyer receives the $200 prize but has paid $5, so the net gain is 200 - 5 = 195 dollars. If the ticket loses, the buyer receives nothing and has paid $5, so the net gain is -5 dollars.

We then compute the expected value by weighting each net gain by its probability:

Expected value = (1/100)(195) + (99/100)(-5).

Evaluating each term gives (1/100)(195) = 1.95 and (99/100)(-5) = -4.95. Adding these:

1.95 + (-4.95) = -3.00.

Thus the expected net gain for a person who buys one ticket is -$3.00.

The correct answer is B.
**mistake_a:** −$5.00 treats losing as certain, ignoring the 1/100 chance at the $200 prize.
**mistake_c:** $0.00 assumes a fair raffle; the organizer collects 100 × $5 − $200 = $300, so ticket buyers must lose on average.
**mistake_d:** $1.95 is the winning branch alone, (1/100)(195), with the 99 losing branches dropped.
**mistake_e:** $2.00 is the expected gross payout (200/100) with the $5 ticket price never charged.
**common_trap:** Forgetting the price of the ticket — the prize is $200, but every path starts $5 in the hole.
**takeaway:** Expected net gain = expected payout − cost; the quick version is (total prizes ÷ total tickets) minus the ticket price.
**hint_nudge:** What does the average ticket collect, and what did it cost?
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
**fastest_path:** Favorable length over total length: (18 − 6)/30 = 12/30 = 2/5.
**explanation:** When a point is selected uniformly at random along a line segment, the probability that it lands within a particular subinterval equals the ratio of the length of that subinterval to the length of the entire segment. The governing principle is therefore P = (length of the favorable interval) / (length of the total segment).

Let the entire segment extend from 0 to 30, so its total length is 30 - 0 = 30. The favorable region is the subinterval from 6 to 18, whose length is 18 - 6 = 12. Note that the relevant quantity is the length of this interval, obtained by subtracting its endpoints, not either endpoint value by itself.

Applying the principle gives

P = 12 / 30 = 2/5.

The correct answer is B.
**mistake_a:** 1/5 = 6/30 uses the left endpoint 6 as if it were the interval's length.
**mistake_c:** 1/2 = 12/24 divides by 30 − 6 = 24, shrinking the total segment so it starts at 6.
**mistake_d:** 3/5 = 18/30 uses the right endpoint 18 as the favorable length, forgetting to subtract 6.
**mistake_e:** 7/10 inflates the favorable region; only the 12 units between 6 and 18 qualify.
**common_trap:** Plugging an endpoint (6 or 18) into the ratio instead of the interval's length, 18 − 6 = 12.
**takeaway:** Uniform-on-a-segment probability = (favorable length)/(total length); subtract endpoints before dividing.
**hint_nudge:** How long is the favorable interval, and how long is the whole segment?
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
**fastest_path:** Halves of 8 values: Q1 = (61 + 67)/2 = 64, Q3 = (85 + 89)/2 = 87, IQR = 87 − 64 = 23.
**explanation:** The interquartile range of a data set is the difference between the third quartile and the first quartile, Q3 - Q1, where Q1 is the median of the lower half of the ordered data and Q3 is the median of the upper half. This statistic measures the spread of the middle 50 percent of the values.

The eight scores, already in ascending order, are 52, 61, 67, 72, 78, 85, 89, 94. Because there are eight values, an even number, the data divide into a lower half of four values and an upper half of four values.

The lower half is {52, 61, 67, 72}. The median of these four values is the average of the two middle ones: Q1 = (61 + 67)/2 = 128/2 = 64.

The upper half is {78, 85, 89, 94}. The median of these four values is the average of the two middle ones: Q3 = (85 + 89)/2 = 174/2 = 87.

Therefore the interquartile range is Q3 - Q1 = 87 - 64 = 23.

The correct answer is C.
**mistake_a:** 17 = 89 − 72 subtracts a wrong pair of raw entries rather than the two quartiles.
**mistake_b:** 22 = 94 − 72 measures from the fourth value to the maximum — neither one is a quartile.
**mistake_d:** 27 = 94 − 67 again mixes raw list entries into what should be a difference of quartiles.
**mistake_e:** 42 = 94 − 52 is the full range; the IQR deliberately discards the outer quarter on each side.
**common_trap:** Grabbing single list entries as Q1 and Q3 — with 8 values, each quartile is the average of two values (positions 2–3 and 6–7).
**takeaway:** Split the ordered data into halves, take each half's median, and subtract: IQR = Q3 − Q1, the spread of the middle 50%.
**hint_nudge:** With eight values, each half has four — what is the median of four values?
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
**fastest_path:** Mutually exclusive means zero overlap: 0.3 + 0.4 = 0.7.
**explanation:** The probability that at least one of two events occurs is governed by the addition rule, which states that for any two events X and Y, P(X or Y) = P(X) + P(Y) - P(X and Y). The term P(X and Y) is subtracted to avoid counting the overlap of the two events twice.

The events X and Y are described as mutually exclusive, meaning they cannot both occur. The probability that both occur is therefore zero, so P(X and Y) = 0.

Let P(X) = 0.3 and P(Y) = 0.4. Substituting these values, together with P(X and Y) = 0, into the addition rule gives the probability that at least one of the two events occurs:

P(X or Y) = P(X) + P(Y) - P(X and Y)
P(X or Y) = 0.3 + 0.4 - 0
P(X or Y) = 0.70

The correct answer is D.
**mistake_a:** 0.12 = 0.3 × 0.4 multiplies as though computing "both occur" for independent events — but mutually exclusive events can never both occur.
**mistake_b:** 0.58 = 0.3 + 0.4 − 0.12 subtracts a phantom overlap of 0.12; mutual exclusivity makes P(X and Y) = 0, not P(X)P(Y).
**mistake_c:** 0.60 = 2 × 0.3 doubles one probability instead of adding the two given ones.
**mistake_e:** 1.00 assumes X and Y exhaust all possibilities; mutually exclusive does not mean one of them must happen — here P(neither) = 0.3.
**common_trap:** Confusing "mutually exclusive" with "independent" — exclusive events are maximally dependent: if one happens, the other cannot.
**takeaway:** Mutually exclusive means P(X or Y) = P(X) + P(Y) exactly; independence is a different condition and would put a nonzero overlap back in.
**hint_nudge:** Can X and Y both occur? What does that make P(X and Y)?
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
**fastest_path:** Independent means multiply: 0.6 × 0.3 = 0.18.
**explanation:** When two events are independent, the occurrence of one has no effect on the probability of the other, so the probability that both occur equals the product of their individual probabilities. This is the multiplication rule for independent events: for independent events A and B, P(A and B) = P(A) × P(B).

Let P(A) = 0.6 and P(B) = 0.3 denote the given individual probabilities, and note that A and B are stated to be independent. The quantity sought is the joint probability that both A and B occur, namely P(A and B).

Applying the multiplication rule for independent events gives:

P(A and B) = P(A) × P(B)
P(A and B) = 0.6 × 0.3
P(A and B) = 0.18

The correct answer is A.
**mistake_b:** 0.30 is P(B) alone — "both occur" can never be more likely than the rarer single event, and here it is strictly less.
**mistake_c:** 0.60 is P(A) alone.
**mistake_d:** 0.72 = 1 − (0.4)(0.7) is the probability that AT LEAST ONE of the events occurs — the union, not the intersection.
**mistake_e:** 0.90 = 0.6 + 0.3 adds the probabilities, which answers an "or" question (for non-overlapping events), not "and."
**common_trap:** Adding when the question says "both" — addition belongs to "or"; multiplication belongs to "and" for independent events.
**takeaway:** For independent events, P(A and B) = P(A) × P(B); sanity-check that "both" never exceeds either single probability.
**hint_nudge:** Should "both occur" be more or less likely than each event on its own?
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
**fastest_path:** (1/4)(5) + (1/2)(2) + (1/4)(−3) = 1.25 + 1 − 0.75 = $1.50.
**explanation:** The expected value of a single trial is the sum, over all possible outcomes, of each outcome's payoff multiplied by its probability. For this sum to be valid, the outcomes must partition the sample space, so their probabilities must total 1.

A standard deck contains 52 cards, divided equally among four suits of 13 cards each. Let the three outcomes be drawing a heart, drawing a black card (a spade or a club), and drawing a diamond. The hearts number 13, so the probability of a heart is 13/52 = 1/4. The black cards comprise the 13 spades and the 13 clubs, a total of 26 cards, so the probability of a black card is 26/52 = 1/2. The diamonds number 13, so the probability of a diamond is 13/52 = 1/4. These probabilities sum to 1/4 + 1/2 + 1/4 = 1, confirming that the three outcomes form a complete partition of the deck.

The associated payoffs are a gain of $5 for a heart, a gain of $2 for a black card, and a loss of $3 for a diamond. The expected value is therefore

EV = (1/4)(5) + (1/2)(2) + (1/4)(-3).

Evaluating each term gives (1/4)(5) = 5/4, (1/2)(2) = 1, and (1/4)(-3) = -3/4. Summing these,

EV = 5/4 + 1 - 3/4 = (5/4 - 3/4) + 1 = 2/4 + 1 = 1/2 + 1 = 1.50.

Thus the expected value of one draw is $1.50.

The correct answer is D.
**mistake_a:** $0.50 drops the black-card branch, keeping only (1/4)(5) + (1/4)(−3).
**mistake_b:** $1.00 is the black-card term (1/2)(2) by itself.
**mistake_c:** $1.33 = (5 + 2 − 3)/3 averages the three payoffs unweighted, ignoring that a black card is twice as likely as either red suit.
**mistake_e:** $2.25 = (1/4)(5) + (1/2)(2) forgets the diamond loss entirely.
**common_trap:** Weighting the three payoffs equally — the deck makes "black" a 1/2 event but each red suit only a 1/4 event.
**takeaway:** Expected value = sum of (probability × payoff) over a complete set of outcomes; confirm the probabilities total 1 before multiplying anything.
**hint_nudge:** What fraction of the deck is hearts, black cards, and diamonds? Do your three probabilities sum to 1?
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
**fastest_path:** MBA counts: 120 × 25% = 30 in analytics, 80 × 15% = 12 in operations. Given an MBA holder, P(analytics) = 30/42 = 5/7.
**explanation:** This problem is governed by the definition of conditional probability: for events A and B with P(B) greater than 0, the probability of A given B equals the number of outcomes satisfying both A and B divided by the number of outcomes satisfying B. Equivalently, conditioning on B restricts the sample space to only those outcomes in which B occurs.

Here the conditioning event is that the selected employee holds an MBA, so the relevant sample space is the set of all MBA holders, not the full set of 200 employees. We let A denote the event that the employee works in the analytics division and B denote the event that the employee holds an MBA.

First we count the MBA holders in each division. The analytics division has 120 employees, of whom 25 percent hold an MBA, giving 120 times 0.25 equals 30 analytics employees with an MBA. The operations division has 80 employees, of whom 15 percent hold an MBA, giving 80 times 0.15 equals 12 operations employees with an MBA.

The total number of employees who hold an MBA is therefore 30 plus 12 equals 42. This is the size of the restricted sample space, that is, the number of outcomes satisfying the conditioning event B.

Of these 42 MBA holders, the number who also work in analytics, satisfying both A and B, is 30. The conditional probability is then the number satisfying both conditions divided by the number satisfying the given condition: 30 divided by 42, which reduces to 5/7.

The correct answer is C.
**mistake_a:** 2/7 = 12/42 is the complement — the probability the MBA holder works in operations.
**mistake_b:** 3/5 = 120/200 is the analytics share of ALL employees, ignoring the condition that the selected person holds an MBA.
**mistake_d:** 5/8 = 25/(25 + 15) weighs the two percentages against each other without multiplying by the very different division sizes.
**mistake_e:** 5/6 = 30/36 miscounts the operations MBAs (80 × 15% = 12, not 6) before forming the ratio.
**common_trap:** Conditioning shrinks the sample space to the 42 MBA holders; any answer built on all 200 employees or on the raw percentages misses that step.
**takeaway:** For "given X, what is P(Y)?", first count the X population — weighting each subgroup by its size — then take Y's share of that count.
**hint_nudge:** Start by counting the MBA holders in each division.
**hint_strategy:** 30 of the 30 + 12 = 42 MBA holders are in analytics.
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
**fastest_path:** C(3,2) × (0.7)² × (0.3) = 3 × 0.49 × 0.3 = 0.441.
**explanation:** The event in question is governed by the binomial probability model, which applies whenever a fixed number of independent trials each yield one of two outcomes (success or failure) with a constant probability of success. The probability of obtaining exactly k successes in n such trials is given by

P(exactly k successes) = C(n, k) * p^k * (1 - p)^(n - k),

where C(n, k) is the number of ways to choose which k of the n trials are the successes, p is the probability of success on a single trial, and (1 - p) is the probability of failure on a single trial.

Let a success denote a patient responding to the treatment. The number of trials is n = 3, the number of required successes is k = 2, and the success probability is p = 0.7, so the failure probability is 1 - p = 0.3. Substituting these values into the formula gives

P = C(3, 2) * (0.7)^2 * (0.3)^1.

The combinatorial factor is C(3, 2) = 3, since there are three ways to choose which two of the three patients respond. Evaluating the remaining factors yields (0.7)^2 = 0.49 and (0.3)^1 = 0.30. Therefore

P = 3 * 0.49 * 0.30 = 3 * 0.147 = 0.441.

The correct answer is D.
**mistake_a:** 0.147 = (0.7)²(0.3) counts only ONE ordering of the two successes; the failure can fall on any of the 3 patients.
**mistake_b:** 0.189 = 3 × (0.3)²(0.7) swaps the success and failure probabilities.
**mistake_c:** 0.343 = (0.7)³ is the probability that all three respond, not exactly two.
**mistake_e:** 0.490 = (0.7)² drops the failure factor — "exactly 2 of 3" requires the third patient NOT to respond.
**common_trap:** Forgetting the C(3,2) = 3 orderings — "exactly k successes" is a set of sequences, not a single sequence.
**takeaway:** Exactly k successes in n independent trials = C(n,k) p^k (1−p)^(n−k); the binomial coefficient and the failure factor are both mandatory.
**hint_nudge:** In how many ways can you choose WHICH two of the three patients respond?
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
**fastest_path:** Union = 72 + 54 − 30 = 96, so neither = 120 − 96 = 24.
**explanation:** This problem is governed by the inclusion-exclusion principle, which states that for two overlapping groups the number of customers in at least one group equals the size of the first group plus the size of the second group minus the size of the overlap, so that the customers counted in both groups are not counted twice. The number who bought neither product is then the total number of customers minus the number who bought at least one product.

Let T = 120 be the total number of customers surveyed. Let A be the number who bought Product A, so A = 72, and let B be the number who bought Product B, so B = 54. Let the number who bought both products be the intersection, so |A ∩ B| = 30.

The number who bought at least one of the two products is the union, computed as

|A ∪ B| = A + B − |A ∩ B| = 72 + 54 − 30 = 126 − 30 = 96.

The number who bought neither product is the total minus those who bought at least one:

Neither = T − |A ∪ B| = 120 − 96 = 24.

The correct answer is D.
**mistake_a:** 0 assumes that 72 + 54 = 126 exceeding 120 means everyone bought something; that comparison ignores the 30 dual buyers.
**mistake_b:** 6 = 126 − 120 is the double-counted excess — an intermediate quantity with no direct meaning here.
**mistake_c:** 18 = 120 − 72 − 30 subtracts the Product A buyers and the dual buyers from the total, removing the overlap from the wrong side.
**mistake_e:** 30 copies the overlap straight from the stem.
**common_trap:** Stopping at the union (96) or at the excess (6) instead of finishing with total − union.
**takeaway:** "Neither" = total − |A ∪ B| = total − (|A| + |B| − |A ∩ B|): two steps, both required.
**hint_nudge:** First find how many customers bought at least one product.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q38
**difficulty:** Easy
**type:** Problem Solving
**topic:** Mean — Missing Data

The average (arithmetic mean) of 5 numbers is 84. Four of the five numbers are 78, 91, 80, and 76. What is the fifth number?

- A) 84
- B) 87
- C) 91
- D) 95
- E) 99

**answer:** D
**fastest_path:** The total must be 5 × 84 = 420; the four knowns sum to 325, so the fifth number is 420 − 325 = 95.
**explanation:** The arithmetic mean of a collection of numbers equals their sum divided by the count of numbers. It follows that the sum of the numbers equals the mean multiplied by the count. We apply this relationship to recover the missing value.

Let x denote the fifth number. The five numbers have a mean of 84, so their total sum must be

84 × 5 = 420.

The four known numbers are 78, 91, 80, and 76. Their sum is

78 + 91 + 80 + 76 = 325.

Because the total of all five numbers is 420, the fifth number satisfies

325 + x = 420,

so

x = 420 − 325 = 95.

The correct answer is D.
**mistake_a:** 84 repeats the mean; the missing number must sit above it, because the four known values average only 325/4 = 81.25.
**mistake_b:** 87 comes from a slip in summing the four known values before subtracting from 420.
**mistake_c:** 91 copies the largest of the four given numbers.
**mistake_e:** 99 follows from an addition slip the other way (a four-number sum of 321 instead of 325).
**common_trap:** Reasoning from the averages directly instead of converting to totals — sums add, averages don't.
**takeaway:** Mean problems are sum problems: missing value = (mean × count) − (sum of the known values).
**hint_nudge:** What must all five numbers add up to?
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
**fastest_path:** 72% of 350 = 0.72 × 350 = 252.
**explanation:** The governing principle is the definition of a percentile: the nth percentile of a data set is the value below which n percent of the observations fall. To convert a percentile into a count of observations, we multiply the percentile, expressed as a decimal fraction, by the total number of observations.

Let N denote the total number of students who took the exam, so that N = 350. A score of 680 falls at the 72nd percentile, which means that 72 percent of the test takers scored strictly below 680. Let B denote the number of students who scored strictly below 680.

We translate the percentile statement into an equation:

B = 0.72 × N.

Substituting N = 350 gives

B = 0.72 × 350.

Computing the product,

0.72 × 350 = 0.72 × 300 + 0.72 × 50 = 216 + 36 = 252.

Therefore, approximately 252 students scored strictly below 680.

The correct answer is D.
**mistake_a:** 98 = 0.28 × 350 counts the students at or above 680 — the complement of what was asked.
**mistake_b:** 126 = 0.36 × 350 halves the percentile somewhere along the way.
**mistake_c:** 175 = 350/2 treats any named percentile as if it were the median.
**mistake_e:** 280 = 0.80 × 350 rounds the 72nd percentile up to the 80th.
**common_trap:** Flipping to the complement (28%) or anchoring on "half" — the percentile already states the below-fraction directly.
**takeaway:** The nth percentile means n% of observations fall below that value; the count below = (n/100) × total.
**hint_nudge:** What fraction of the 350 test takers does "72nd percentile" place below 680?
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
**fastest_path:** Same mean, same count — compare deviations directly: P's are 5, 2, 2, 0, 2, 2, 5 versus Q's 2, 2, 1, 0, 1, 2, 2. Every P deviation is at least the matching Q deviation and several are larger, so SD(P) > SD(Q) with no computation.
**explanation:** The standard deviation of a data set measures the typical distance of its values from the mean: the larger the deviations of the values from the mean, the larger the standard deviation. Because both sets are stated to have the same mean of 6 and the same number of values (7), the comparison reduces entirely to how far each set's values lie from 6.

Let the mean of each set be m = 6, and consider the deviation of each value from the mean. The standard deviation is determined by the sum of the squared deviations, since for n values the standard deviation equals the square root of (the sum of the squared deviations divided by n), and here n is the same for both sets.

For set P = {1, 4, 4, 6, 8, 8, 11}, the deviations from 6 are -5, -2, -2, 0, 2, 2, and 5. Squaring each gives 25, 4, 4, 0, 4, 4, and 25, and their sum is
25 + 4 + 4 + 0 + 4 + 4 + 25 = 66.

For set Q = {4, 4, 5, 6, 7, 8, 8}, the deviations from 6 are -2, -2, -1, 0, 1, 2, and 2. Squaring each gives 4, 4, 1, 0, 1, 4, and 4, and their sum is
4 + 4 + 1 + 0 + 1 + 4 + 4 = 18.

Since the sum of squared deviations for P (66) exceeds that for Q (18), and both sets are divided by the same n = 7 before taking the square root, the standard deviation of P is greater than the standard deviation of Q. This larger spread arises because P's values lie further from the mean than Q's values do: P's extremes, 1 and 11, are each 5 units from 6, whereas Q's extremes, 4 and 8, are each only 2 units from 6.

The correct answer is C.
**mistake_a:** The number of DISTINCT values is irrelevant to spread; a set can have many distinct values all hugging the mean.
**mistake_b:** Equal means and equal counts say nothing about spread — standard deviation measures distance from the mean, which the two sets distribute very differently.
**mistake_d:** Misreads the sets: Q is the tightly clustered one (no value further than 2 from the mean), and values "clustered at the endpoints" would describe a LARGER standard deviation anyway.
**mistake_e:** Exact values are not needed: comparing the two deviation lists term by term settles the inequality outright.
**common_trap:** Believing SD comparisons always require computing both standard deviations — when means and counts match, comparing the deviation lists is enough.
**takeaway:** SD comparisons are deviation comparisons: if one set's distances from the mean dominate the other's value-for-value, its SD is larger — no formula needed.
**hint_nudge:** Both means are 6. List how far each value sits from 6 in each set.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Conditional Probability — Bayes via Frequency Table

In a clinical study, 300 patients received one of two drugs. Two hundred patients received Drug A and 100 received Drug B. Among Drug A patients, 15% experienced symptom relief. Among Drug B patients, 45% experienced relief. One patient who experienced relief is selected at random. What is the probability the patient received Drug A?

- A) 1/4
- B) 2/5
- C) 1/2
- D) 2/3
- E) 3/5

**answer:** B
**fastest_path:** Relief counts: 200 × 15% = 30 on Drug A, 100 × 45% = 45 on Drug B. P(Drug A | relief) = 30/75 = 2/5.
**explanation:** This is a conditional probability problem. When a member is chosen at random from a subgroup defined by a condition, the probability of belonging to a given category equals the number of members satisfying both the condition and that category, divided by the total number of members satisfying the condition. Here the condition is "experienced relief," and the category of interest is "received Drug A."

First, find how many patients in each drug group experienced relief. The number of Drug A patients who experienced relief is 200 × 0.15 = 30. The number of Drug B patients who experienced relief is 100 × 0.45 = 45.

The total number of patients who experienced relief is therefore 30 + 45 = 75. Since the selected patient is drawn at random from those who experienced relief, the probability that this patient received Drug A is the ratio of Drug A relief patients to all relief patients:

30 / 75 = 2/5.

The correct answer is B.
**mistake_a:** 1/4 = 15/(15 + 45) compares the raw percentages without weighting by the very different group sizes (200 versus 100).
**mistake_c:** 1/2 splits the two drugs evenly, using neither the group sizes nor the relief rates.
**mistake_d:** 2/3 = 200/300 is Drug A's share of ALL patients, ignoring the condition that the selected patient experienced relief.
**mistake_e:** 3/5 = 45/75 is the complement — the probability the relieved patient received Drug B.
**common_trap:** Conditioning on "experienced relief" shrinks the population to 75 patients; the 200/100 split and the 15%/45% rates matter only through the counts 30 and 45.
**takeaway:** Convert percentages of different-sized groups into counts before forming any conditional probability.
**hint_nudge:** How many patients in each group actually experienced relief?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q42
**difficulty:** Medium
**type:** Problem Solving
**topic:** Expected Value — Comparing Two Strategies

A project manager must choose between two investment strategies. Strategy P has a 40% chance of generating a $800,000 profit and a 60% chance of a $200,000 loss. Strategy Q has a 70% chance of generating a $400,000 profit and a 30% chance of breaking even ($0 gain or loss). Which strategy has the higher expected value, and by how much?

- A) Strategy P by $80,000
- B) Strategy P by $40,000
- C) Strategy P by $20,000
- D) Strategy Q by $40,000
- E) Strategy Q by $80,000

**answer:** E
**fastest_path:** EV(P) = 0.4(800K) − 0.6(200K) = 320K − 120K = 200K; EV(Q) = 0.7(400K) = 280K. Q wins by $80,000.
**explanation:** The expected value of a strategy is the sum, over all possible outcomes, of each outcome's monetary value weighted by its probability. To determine which strategy is preferable, we compute the expected value of each and compare them.

Let EV(P) denote the expected value of Strategy P. Strategy P yields a profit of $800,000 with probability 0.40 and a loss of $200,000 (a value of -$200,000) with probability 0.60. Translating this into the expected-value formula gives

EV(P) = (0.40)($800,000) + (0.60)(-$200,000).

Computing each term, (0.40)($800,000) = $320,000 and (0.60)(-$200,000) = -$120,000. Therefore

EV(P) = $320,000 - $120,000 = $200,000.

Let EV(Q) denote the expected value of Strategy Q. Strategy Q yields a profit of $400,000 with probability 0.70 and a break-even result of $0 with probability 0.30. Then

EV(Q) = (0.70)($400,000) + (0.30)($0).

Computing each term, (0.70)($400,000) = $280,000 and (0.30)($0) = $0. Therefore

EV(Q) = $280,000 + $0 = $280,000.

Comparing the two results, $280,000 is greater than $200,000, so Strategy Q has the higher expected value. The amount by which it is higher is

$280,000 - $200,000 = $80,000.

Thus Strategy Q has the higher expected value, by $80,000.

The correct answer is E.
**mistake_a:** "Strategy P by $80,000" reverses the comparison — the gap is right but the winner is wrong, exactly what a sign slip on P's loss branch produces.
**mistake_b:** "Strategy P by $40,000" comes from dropping P's loss branch entirely: $320,000 versus $280,000.
**mistake_c:** "Strategy P by $20,000" keeps P on top only through a branch slip; a clean branch-by-branch computation caps P at $200,000.
**mistake_d:** "Strategy Q by $40,000" halves the true gap, for example by weighting P's loss with 0.40 instead of 0.60 (320K − 80K = 240K).
**common_trap:** Mishandling the loss branch — a 60% chance of losing $200,000 enters the expected value as −$120,000, with full weight and a negative sign.
**takeaway:** Expected-value comparisons are won or lost in the loss branches: write each outcome as a signed value × its probability before summing.
**hint_nudge:** Strategy P's 60% branch is a LOSS. What does that branch contribute to P's expected value?
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
**fastest_path:** Union = 225 − 75 + 10 = 160, so none = 180 − 160 = 20.
**explanation:** This problem is solved using the inclusion-exclusion principle for three sets, which counts the number of elements belonging to at least one set without double-counting any overlaps. For three sets, the size of the union equals the sum of the individual set sizes, minus the sizes of the three pairwise intersections, plus the size of the intersection of all three sets.

Let P, S, and M denote the sets of employees with Python, SQL, and machine learning skills, respectively. From the survey, |P| = 90, |S| = 75, and |M| = 60. The pairwise overlaps are |P ∩ S| = 30, |P ∩ M| = 25, and |S ∩ M| = 20, and the triple overlap is |P ∩ S ∩ M| = 10.

The number of employees having at least one of the three skills is the size of the union P ∪ S ∪ M. By the inclusion-exclusion principle,

|P ∪ S ∪ M| = |P| + |S| + |M| − |P ∩ S| − |P ∩ M| − |S ∩ M| + |P ∩ S ∩ M|.

Substituting the given values,

|P ∪ S ∪ M| = 90 + 75 + 60 − 30 − 25 − 20 + 10.

Computing the sum of the individual sets gives 90 + 75 + 60 = 225. The sum of the pairwise intersections is 30 + 25 + 20 = 75. Therefore,

|P ∪ S ∪ M| = 225 − 75 + 10 = 160.

Thus 160 of the 180 surveyed employees have at least one skill. The employees with none of the three skills are those outside the union, so their number is the total minus the union:

180 − 160 = 20.

The correct answer is B.
**mistake_a:** 10 copies the triple overlap straight from the stem.
**mistake_c:** 30 forgets to add the triple overlap back (225 − 75 = 150, then 180 − 150 = 30) — the all-three group has been subtracted once too often.
**mistake_d:** 40 SUBTRACTS the triple overlap instead of adding it (225 − 75 − 10 = 140, then 180 − 140 = 40).
**mistake_e:** 55 mishandles the pairwise overlaps — subtracting some of them twice — before taking the complement.
**common_trap:** The sign of the final term: pairwise intersections come off, but the triple intersection goes back ON (it was added three times and subtracted three times, so it needs one more addition).
**takeaway:** |A ∪ B ∪ C| = (sum of singles) − (sum of pairs) + (triple); then "none" = total − union. Knowing WHY the triple term is positive kills the sign error.
**hint_nudge:** After subtracting the three pairwise overlaps, how many times has the all-three group been counted?
**hint_strategy:** Singles (225) − pairs (75) + triple (10) = union; the answer is 180 − union.
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
**fastest_path:** Linear transform n = 3m − 6: the mean follows the full recipe (3μ − 6); the SD feels only the multiplier (3σ). No arithmetic on the actual set required.
**explanation:** This problem applies the two rules governing how the mean and standard deviation of a data set respond to a linear transformation. For any transformation of the form n = a*m + b applied to every element of a set: the mean is transformed in the same way, becoming a*(mean) + b, while the standard deviation is multiplied by the absolute value of the scaling factor, becoming |a|*(standard deviation). The additive constant b shifts every value by the same amount and therefore leaves all deviations from the mean unchanged, so it does not affect the standard deviation.

Let m denote a typical element of set M, with mean equal to the Greek letter mu and standard deviation equal to the Greek letter sigma. Set N is formed by multiplying every element of M by 3 and then subtracting 6, so each element of N is n = 3m - 6. Here the scaling factor is a = 3 and the additive constant is b = -6.

Applying the mean rule gives Mean of N = 3*mu + (-6) = 3*mu - 6.

Applying the standard deviation rule gives SD of N = |3|*sigma = 3*sigma. The constant -6 does not enter the standard deviation, because shifting every value by the same amount does not change the spread.

These results can be confirmed numerically. The mean of M is (4 + 8 + 14 + 18 + 22) / 5 = 66 / 5 = 13.2, so the mean of N is 3(13.2) - 6 = 39.6 - 6 = 33.6, which equals 3*mu - 6. The deviations of the elements of M from 13.2 are -9.2, -5.2, 0.8, 4.8, and 8.8. After the transformation, the corresponding deviations in N are -27.6, -15.6, 2.4, 14.4, and 26.4, each exactly 3 times the original, confirming that the standard deviation is tripled.

Thus Mean of N = 3*mu - 6 and SD of N = 3*sigma.

The correct answer is C.
**mistake_a:** 2μ has no source in the transformation — the mean obeys exactly the operation applied to the data: multiply by 3, then subtract 6.
**mistake_b:** Leaving the SD at σ ignores the tripling; only the SHIFT (−6) leaves spread alone, not the scaling.
**mistake_d:** 3σ − 6 pushes the shift into the standard deviation; subtracting 6 from every value moves the whole set without widening it.
**mistake_e:** 3μ drops the −6 from the mean, which tracks every part of a linear transformation.
**common_trap:** Treating mean and SD symmetrically — the mean inherits BOTH operations, while the SD inherits only the absolute scaling factor.
**takeaway:** For y = ax + b: mean → a·(mean) + b, but SD → |a|·(SD). Shifts move the center; only scaling changes the spread.
**hint_nudge:** Which of "×3" and "−6" changes the gaps between values?
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
**fastest_path:** The $6 win is certain eventually; only the fees are in question. Expected white draws before the first red = (1/3)/(2/3) = 1/2, costing (1/2)($2) = $1. Net: 6 − 1 = $5.
**explanation:** This problem concerns the expected value of a game whose structure repeats itself: whenever a white ball is drawn, the player pays a fee and faces a situation identical to the original one. Because the game resets to its starting state after each white draw, the expected net gain can be expressed in terms of itself and solved algebraically.

Let V denote the player's expected net gain from the game beginning at any draw. On a single draw there are exactly two outcomes. With probability 2/3 the ball is red, in which case the player wins $6 and the game ends; this contributes (2/3)(6). With probability 1/3 the ball is white, in which case the player pays $2 and the bag is restored to its original composition, so the player again faces a game whose expected net gain is V; this branch contributes (1/3)(-2 + V).

Translating the two outcomes into a single equation gives

V = (2/3)(6) + (1/3)(-2 + V).

We now expand the right-hand side:

V = 4 + (1/3)(-2) + (1/3)V
V = 4 - 2/3 + V/3.

Collecting the V terms on the left-hand side,

V - V/3 = 4 - 2/3
(2/3)V = 12/3 - 2/3
(2/3)V = 10/3.

Multiplying both sides by 3/2,

V = (10/3)(3/2) = 10/2 = 5.

Thus the player's expected net gain per game is $5.00.

The result can be confirmed independently. Because every draw produces a red ball with probability 2/3, a red ball is eventually drawn with certainty, so the player always collects the $6 prize exactly once; the expected winnings are therefore $6. The number of white draws preceding the first red follows a geometric distribution, giving an expected number of white draws equal to (1/3)/(2/3) = 1/2, and hence an expected redraw cost of (1/2)($2) = $1. The expected net gain is $6 - $1 = $5, in agreement with the value found above.

The correct answer is D.
**mistake_a:** $3.00 charges the $2 fee on every draw including the final winning one (1.5 expected draws × $2 = $3 of fees) — but only white draws cost money.
**mistake_b:** $4.00 is the first draw's red branch alone, (2/3)($6), with the value of continuing after a white draw thrown away.
**mistake_c:** $4.50 comes from truncating the recursion partway; the self-consistent equation gives exactly $5.
**mistake_e:** $6.00 forgets the fees entirely — the player does always collect $6 eventually, but pays $2 per white draw along the way.
**common_trap:** Treating a game that resets as a one-draw game; the clean approaches are the self-referential equation V = (2/3)(6) + (1/3)(−2 + V), or "certain prize minus expected fees."
**takeaway:** When a game returns to its starting state, set V = (immediate branches) + (reset probability)(cost + V) and solve — or split the certain prize from the expected costs.
**hint_nudge:** After a white draw, the game looks exactly as it did at the start — except you are $2 poorer.
**hint_strategy:** Let V be the expected net gain. Then V = (2/3)(6) + (1/3)(−2 + V).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

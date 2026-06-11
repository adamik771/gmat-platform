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
**topic:** Mean / Median

Five distinct positive integers have an average of 20, a median of 22, and a largest value of 35. What is the smallest possible value of the second-largest integer?

- A) 22
- B) 23
- C) 24
- D) 25
- E) 26

**answer:** B
**fastest_path:** Sum = 100; the median 22 and maximum 35 leave a + b + d = 43. Distinctness forces d ≥ 23, so test d = 23: a + b = 20 with a < b < 22 works (1 and 19). The minimum is 23.
**explanation:** This problem is solved by translating the conditions on the average, median, and maximum into a single sum constraint and then optimizing under the requirement that the integers be distinct.

Let the five distinct positive integers, listed in increasing order, be a, b, c, d, and e, so that a < b < c < d < e. The median of five ordered values is the middle value, so c = 22. The largest value is e = 35. Because the average of the five integers is 20, their sum is 5 × 20 = 100.

Writing the sum and substituting the known values gives a + b + c + d + e = 100, so a + b + d = 100 − c − e = 100 − 22 − 35 = 43.

The quantity to be minimized is the second-largest integer, d. From a + b + d = 43, we have d = 43 − (a + b), so d is smallest when a + b is as large as possible. The integers must be distinct, which forces d > c = 22; since d is an integer, d ≥ 23.

We test the smallest permissible value, d = 23. Then a + b = 43 − 23 = 20, and we must choose distinct positive integers a < b with both less than c = 22. For example, a = 1 and b = 19 satisfy a < b < 22 and a + b = 20. The resulting set is {1, 19, 22, 23, 35}, whose sum is 1 + 19 + 22 + 23 + 35 = 100, confirming an average of 20, a median of 22, and a maximum of 35. Thus d = 23 is attainable.

The correct answer is B.
**mistake_a:** 22 ignores the word "distinct" — the second-largest value would tie the median, but five distinct integers force d strictly greater than c = 22.
**mistake_c:** 24 stops one short of the true minimum, usually from doubting that a + b = 20 is achievable rather than constructing a concrete set (1, 19) to verify it.
**mistake_d:** 25 comes from over-restricting the two smallest values — nothing prevents a and b from being far apart, like 1 and 19.
**mistake_e:** 26 leaves even more slack in a + b than necessary. In min/max problems, the optimum sits exactly where a constraint becomes binding, not at a comfortable distance from it.
**common_trap:** Choosing 22 because it satisfies the sum algebra — the distinctness condition, not the arithmetic, is what sets the floor at 23.
**takeaway:** To minimize one value in a constrained set, push every other value to its extreme, respect strict inequalities from "distinct," and always confirm with an explicit set.
**hint_nudge:** Which single word in the stem stops the second-largest value from equaling the median?
**hint_strategy:** The sum is 100, so a + b + d = 43. Minimizing d means maximizing a + b — then build an actual set to confirm the minimum is attainable.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Standard Deviation

A data set of 5 numbers has mean 10 and standard deviation 2. If each number in the set is multiplied by 3 and then increased by 4, what is the standard deviation of the new data set?

- A) 2
- B) 3
- C) 6
- D) 10
- E) 34

**answer:** C
**fastest_path:** Adding a constant never changes spread; multiplying by 3 triples it. New SD = 3 × 2 = 6.
**explanation:** When every value in a data set undergoes a linear transformation of the form y = ax + b, the spread of the data is affected only by the multiplicative constant. The governing principle is that the standard deviation satisfies SD(y) = |a| · SD(x); the additive constant b shifts each value by the same amount and therefore leaves the spread unchanged.

Let x denote a value in the original data set, which has mean 10 and standard deviation 2. Each value is multiplied by 3 and then increased by 4, so the transformed value is y = 3x + 4. Here the multiplicative constant is a = 3 and the additive constant is b = 4.

Applying the rule, the standard deviation of the new data set is SD(y) = |3| · SD(x) = 3 · 2 = 6. The addition of 4 does not enter this computation, because translating every value by the same constant moves the entire distribution without altering the distances between values.

The correct answer is C.
**mistake_a:** 2 treats both operations as irrelevant to spread. Only the additive shift leaves the standard deviation alone — the multiplication stretches every gap between values by a factor of 3.
**mistake_b:** 3 is the multiplier itself, not the new standard deviation. The multiplier acts on the old SD of 2.
**mistake_d:** 10 applies the full transformation 3(2) + 4 to the standard deviation. The +4 moves the whole distribution without changing any distance between values, so it never touches the SD.
**mistake_e:** 34 is the new mean (3 × 10 + 4) — the mean absorbs the entire transformation, but the question asks about spread, not center.
**common_trap:** Carrying the "+4" into the spread calculation. Shifts relocate a data set; they never compress or stretch it.
**takeaway:** Under y = ax + b, the mean becomes a(mean) + b but the standard deviation becomes |a| × SD. Addition moves data; multiplication spreads it.
**hint_nudge:** Which of the two operations changes how far apart the values are from each other?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability

A card is drawn at random from a standard 52-card deck. What is the probability that the card is either a heart or a face card (jack, queen, or king)?

- A) 1/4
- B) 3/13
- C) 11/26
- D) 25/52
- E) 1/2

**answer:** C
**fastest_path:** Count winners: 13 hearts + 12 face cards − 3 face-card hearts counted twice = 22 cards. 22/52 = 11/26.
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
**mistake_a:** 1/4 counts only the 13 hearts and ignores the "or a face card" half of the event.
**mistake_b:** 3/13 is 12/52 — only the face cards, ignoring the hearts.
**mistake_d:** 25/52 adds 13 + 12 without subtracting the 3 face-card hearts that were counted in both groups — the classic double-count the addition rule exists to prevent.
**mistake_e:** 1/2 rounds the double-counted 25/52 up to 26/52, compounding the overlap error.
**common_trap:** Adding P(heart) and P(face card) and stopping. The jack, queen, and king of hearts belong to both groups and must be subtracted once.
**takeaway:** For "A or B" with overlapping events, add the counts and subtract the overlap exactly once: P(A or B) = P(A) + P(B) − P(A and B).
**hint_nudge:** Are "heart" and "face card" mutually exclusive? Which cards are both?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q24
**difficulty:** Easy
**type:** Data Sufficiency
**topic:** Median

A data set consists of 7 numbers. What is the median of the data set?

(1) The sum of the numbers in the data set is 84.
(2) When the numbers are arranged in increasing order, the fourth number is 15.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**fastest_path:** With 7 values, the median IS the fourth ordered value — statement (2) hands it to you directly. A sum fixes the mean, never a positional measure like the median. Answer B.
**explanation:** The median of a data set is a positional measure: when the values are arranged in increasing order, the median is the middle value. For a set of n numbers with n odd, the median occupies position (n + 1)/2. Here n = 7, so the median is the value in position (7 + 1)/2 = 4, that is, the fourth number in the ordered list. The question is therefore answerable precisely when the fourth ordered value can be determined.

Consider Statement (1). Let the seven numbers have sum 84. This fixes the mean at 84/7 = 12, but the mean is an arithmetic measure that places no constraint on the fourth ordered value. For instance, the set {12, 12, 12, 12, 12, 12, 12} sums to 84 and has median 12, whereas the set {0, 0, 0, 1, 20, 21, 42} also sums to 84 yet has median 1. Two admissible data sets with the same sum produce different medians, so the median is not determined. Statement (1) alone is not sufficient.

Consider Statement (2). Let the numbers be written in increasing order. The fourth number in that ordering is given to be 15. Because the median of seven ordered numbers is exactly the fourth value, the median equals 15. This single fact determines the median uniquely, regardless of the other six values. Statement (2) alone is sufficient.

The correct answer is B.
**mistake_a:** Statement (1) fixes only the sum (and hence the mean of 12); sets with sum 84 can have wildly different fourth values, so (1) alone cannot pin down the median.
**mistake_c:** Once statement (2) answers the question by itself, adding statement (1) is unnecessary — "both together" overstates what is needed.
**mistake_d:** Statement (1) alone fails (the sets {12, 12, 12, 12, 12, 12, 12} and {0, 0, 0, 1, 20, 21, 42} share the sum 84 but have medians 12 and 1), so "each alone" is wrong.
**mistake_e:** Statement (2) alone succeeds, so "together not sufficient" cannot be right.
**common_trap:** Assuming a known sum (or mean) constrains the median. The mean is arithmetic; the median is positional — one says nothing about the other without more structure.
**takeaway:** For an odd-sized set, the median is the value at position (n + 1)/2. Any statement that fixes that positional value is sufficient by itself; statements about sums or means are not.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Conditional Probability

A company has two factories. Factory P produces 60% of the company's products; Factory Q produces the remaining 40%. The defect rate at Factory P is 3%, and the defect rate at Factory Q is 5%. A product is selected at random from the company's output; given that the selected product is defective, what is the probability that it came from Factory P?

- A) 3/19
- B) 6/19
- C) 9/19
- D) 10/19
- E) 12/19

**answer:** C
**fastest_path:** Imagine 1,000 products: Factory P makes 600, of which 3% = 18 are defective; Factory Q makes 400, of which 5% = 20 are defective. Of the 38 defectives, 18 are P's: 18/38 = 9/19.
**explanation:** This problem is governed by the rule for conditional probability, often applied through Bayes' reasoning: for events A and B, P(A | B) = P(A and B) / P(B). The required probability is the proportion of all defective products that originate at Factory P, so the task is to compute the probability that a product is both from Factory P and defective, and then divide by the total probability that a product is defective.

Let the company's total output be the sample space. The given information establishes the prior probabilities and conditional defect rates. The probability that a randomly selected product comes from Factory P is P(P) = 0.60, and the probability that it comes from Factory Q is P(Q) = 0.40. The conditional probability that a product is defective given that it came from Factory P is P(D | P) = 0.03, and the conditional probability that a product is defective given that it came from Factory Q is P(D | Q) = 0.05.

We first find the probability of each joint event by multiplying the prior probability of the factory by its conditional defect rate. For Factory P, P(P and D) = P(P) times P(D | P) = 0.60 times 0.03 = 0.018. For Factory Q, P(Q and D) = P(Q) times P(D | Q) = 0.40 times 0.05 = 0.020.

Since a defective product must come from exactly one of the two factories, the total probability that a product is defective is the sum of these two joint probabilities: P(D) = P(P and D) + P(Q and D) = 0.018 + 0.020 = 0.038.

Applying the conditional probability rule yields P(P | D) = P(P and D) / P(D) = 0.018 / 0.038. Multiplying numerator and denominator by 1,000 gives 18 / 38, and dividing both by 2 gives 9 / 19.

The correct answer is C.
**mistake_a:** 3/19 drops the weighting entirely and puts Factory P's 3% defect rate over the 19ths scale — a rate is not a joint probability until it is multiplied by the factory's share of output.
**mistake_b:** 6/19 (= 12/38) swaps the factory shares, computing 0.40 × 0.03 = 12 defectives for Factory P instead of 0.60 × 0.03 = 18.
**mistake_d:** 10/19 (= 20/38) is Factory Q's share of the defectives — the answer to the complement question, "given defective, what is the probability it came from Q?"
**mistake_e:** 12/19 (≈ 0.63) is essentially Factory P's 60% production share restated — base-rate-only reasoning that ignores the defect rates. Because Q's defect rate is higher, conditioning on "defective" must pull P's probability below 60%.
**common_trap:** Answering with the production share (60%). Conditioning on "defective" reweights the factories by their defect rates, dragging Factory P below half despite making most of the output.
**takeaway:** For "given the outcome, which source?" questions, build a concrete population (say 1,000 units), count the outcome from each source, and form (source's count) / (total count). Decimals invite errors; head-counts don't.
**hint_nudge:** Out of 1,000 products, how many defectives does each factory contribute?
**hint_strategy:** Restrict attention to defective products only — that's the new sample space. The answer is Factory P's defectives over all defectives.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q26
**difficulty:** Easy
**type:** Problem Solving
**topic:** Range

The scores of 9 students on a test, arranged in ascending order, are: 42, 55, 61, 68, 73, 78, 82, 86, 94. What is the range of the scores?

- A) 42
- B) 52
- C) 68
- D) 73
- E) 94

**answer:** B
**fastest_path:** The list is already sorted: range = last − first = 94 − 42 = 52.
**explanation:** The range of a data set is a measure of spread, defined as the difference between the largest and smallest values in the set: Range = maximum value minus minimum value. This quantity describes the total width of the data, in contrast to the mean or median, which describe its center.

Let the data set be the 9 test scores listed in ascending order: 42, 55, 61, 68, 73, 78, 82, 86, 94. Because the values are already sorted, the minimum is the first entry and the maximum is the last entry. Thus the minimum value is 42 and the maximum value is 94.

Applying the definition of range, we subtract the minimum from the maximum:

Range = 94 minus 42 = 52.

The correct answer is B.
**mistake_a:** 42 is the minimum value itself, not the difference between the extremes.
**mistake_c:** 68 is the fourth score — the value you land on if you miscount toward the middle looking for a median.
**mistake_d:** 73 is the median (the fifth of nine ordered values), a measure of center, not spread.
**mistake_e:** 94 is the maximum value itself — the subtraction never happened.
**common_trap:** Reporting one of the values in the list (max, min, or median) instead of performing the single subtraction the definition requires.
**takeaway:** Range = maximum − minimum. It is one subtraction, and on a sorted list the two numbers you need are sitting at the ends.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q27
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Standard Deviation

Is the standard deviation of data set S greater than the standard deviation of data set T?

(1) The range of S is greater than the range of T.
(2) The mean of S is greater than the mean of T.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Range is set by two points; SD depends on all of them — one outlier stretches a range without spreading the data. And the mean says nothing about spread at all. Since shifting a set adjusts its mean without touching range or SD, even combining the statements settles nothing. Answer E.
**explanation:** A statement is sufficient only if every pair of data sets consistent with it gives the same yes-or-no answer. The key facts: standard deviation measures the typical distance of all values from their mean, the range reflects only the two extreme values, and the mean reflects only the center.

Statement (1): the range of S exceeds the range of T. Try S = {0, 5, 5, 5, 5, 5, 5, 5, 5, 10} and T = {1, 1, 1, 1, 9, 9, 9, 9}. S has the larger range (10 vs 8), but only two of its ten values deviate from its mean of 5, giving variance (25 + 25)/10 = 5 and SD ≈ 2.24 — while every value of T sits exactly 4 from its mean of 5, giving SD = 4. The answer here is "no." But replace S with {0, 10, 0, 10, 0, 10, 0, 10}: the range is still 10, and now every value is 5 from the mean, so SD = 5 > 4 — answer "yes." Opposite answers, so statement (1) is not sufficient.

Statement (2): the mean of S exceeds the mean of T. The mean locates the center and carries no information about dispersion — a high-mean set can be tightly clustered or widely spread. Not sufficient.

Together: adding a constant to every element of S raises its mean without changing its range or its standard deviation. So take either pair above and shift S upward until its mean exceeds T's: both statements now hold, yet one pair still answers "no" and the other "yes." Together the statements remain insufficient.

The correct answer is E.
**mistake_a:** Range feels like spread, but it is determined by just two values — a single outlier gives a tightly clustered set a huge range. Statement (1) cannot fix the comparison.
**mistake_b:** The mean is a measure of center, not spread; statement (2) is the weaker of the two and constrains the standard deviations not at all.
**mistake_c:** Combining fails because the mean condition can always be satisfied by shifting S up — a move that changes neither range nor SD, so it adds no spread information to statement (1).
**mistake_d:** Each statement alone permits both "yes" and "no" cases, so "each alone is sufficient" is doubly wrong.
**common_trap:** Equating range with standard deviation. The GMAT loves sets like {0, 5, 5, ..., 5, 10}, where a lone pair of outliers manufactures a big range around data that barely spreads.
**takeaway:** Range is two points; standard deviation is the whole distribution. To prove a DS statement insufficient, construct one "yes" case and one "no" case — and remember that shifting a set moves its mean without touching range or SD.
**hint_nudge:** Can a data set have a large range while almost all of its values sit on the mean?
**hint_strategy:** Build one pair of sets answering "yes" and one answering "no" under statement (1); then use the shift trick (add a constant to all of S) to make the same pairs satisfy statement (2) too.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q28
**difficulty:** Easy
**type:** Problem Solving
**topic:** Overlapping Sets

In a group of 80 people, 45 own a car and 35 own a bicycle. If 20 people own both a car and a bicycle, how many people in the group own at least one of these two things?

- A) 45
- B) 40
- C) 60
- D) 65
- E) 80

**answer:** C
**fastest_path:** 45 + 35 counts the 20 dual owners twice: 80 − 20 = 60.
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
**mistake_a:** 45 counts only the car owners, dropping the bicycle-only people from "at least one."
**mistake_b:** 40 counts the people who own exactly one item — (45 − 20) + (35 − 20) — but "at least one" includes the 20 who own both.
**mistake_d:** 65 adds the 20 dual owners on top of the 45 car owners, but the 45 already includes them; the overlap must be subtracted, never re-added.
**mistake_e:** 80 is 45 + 35 with no correction — the 20 people in both groups counted twice. (That it equals the group size is the giveaway that something double-counted.)
**common_trap:** Adding 45 + 35 and stopping. Anyone who owns both a car and a bicycle sits inside both totals and must be subtracted once.
**takeaway:** For two overlapping groups, |A or B| = |A| + |B| − |both|. "At least one" includes the overlap; "exactly one" excludes it — read which one the stem asks for.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q29
**difficulty:** Medium
**type:** Problem Solving
**topic:** Expected Value

A raffle sells 100 tickets at $5 each. One winning ticket is drawn at random and receives a prize of $200. What is the expected net gain for a person who buys one ticket?

- A) -$5.00
- B) -$3.00
- C) $0.00
- D) $1.95
- E) $2.00

**answer:** B
**fastest_path:** The $5 cost is paid no matter what; the prize is worth $200/100 = $2 in expectation. Net: 2 − 5 = −$3.
**explanation:** The expected net gain is found by summing, over every possible outcome, the product of that outcome's probability and its net value. We must account for both the case in which the ticket wins and the case in which it loses.

Let the cost of the ticket be $5. Because one winning ticket is drawn at random from 100 tickets, the probability that the chosen ticket wins is 1/100, and the probability that it loses is 99/100.

We translate each outcome into a net gain. If the ticket wins, the buyer receives the $200 prize but has paid $5, so the net gain is 200 - 5 = 195 dollars. If the ticket loses, the buyer receives nothing and has paid $5, so the net gain is -5 dollars.

We then compute the expected value by weighting each net gain by its probability:

Expected value = (1/100)(195) + (99/100)(-5).

Evaluating each term gives (1/100)(195) = 1.95 and (99/100)(-5) = -4.95. Adding these:

1.95 + (-4.95) = -3.00.

Thus the expected net gain for a person who buys one ticket is -$3.00.

The correct answer is B.
**mistake_a:** -$5.00 writes the ticket off as a total loss, ignoring that the prize is worth $2 per ticket in expectation.
**mistake_c:** $0.00 assumes the raffle is fair. It is not: ticket sales bring in 100 × $5 = $500 against a $200 prize, so buyers collectively lose $300 — and each ticket's share of that is the answer.
**mistake_d:** $1.95 is only the winning branch, (1/100)($195), with the 99 losing outcomes never added in.
**mistake_e:** $2.00 is the expected value of the prize alone ($200/100), forgetting the $5 paid for the ticket.
**common_trap:** Computing only the branch where the ticket wins. Expected value sums every outcome — and here the sure $5 cost dominates the rare prize.
**takeaway:** Separate sure costs from uncertain payoffs: EV = (expected winnings) − (price paid). A cost paid with probability 1 enters in full.
**hint_nudge:** What is the prize worth, per ticket, before you account for the ticket's price?
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
- E) 4/5

**answer:** B
**fastest_path:** Favorable length over total length: (18 − 6) / 30 = 12/30 = 2/5.
**explanation:** When a point is selected uniformly at random along a line segment, the probability that it lands within a particular subinterval equals the ratio of the length of that subinterval to the length of the entire segment. The governing principle is therefore P = (length of the favorable interval) / (length of the total segment).

Let the entire segment extend from 0 to 30, so its total length is 30 - 0 = 30. The favorable region is the subinterval from 6 to 18, whose length is 18 - 6 = 12. Note that the relevant quantity is the length of this interval, obtained by subtracting its endpoints, not either endpoint value by itself.

Applying the principle gives

P = 12 / 30 = 2/5.

The correct answer is B.
**mistake_a:** 1/5 is 6/30 — plugging in the left endpoint 6 as if it were the favorable length.
**mistake_c:** 1/2 is 12/24 — the right interval length divided by the wrong total (30 − 6 = 24 instead of the full segment of 30).
**mistake_d:** 3/5 is 18/30 — using the right endpoint 18 as the favorable length instead of the interval width 18 − 6.
**mistake_e:** 4/5 is 24/30 — reading "between 6 and 18" as "greater than 6," which counts everything to the right of 6.
**common_trap:** Plugging endpoint values into the ratio instead of lengths. Both the numerator and the denominator must be widths of intervals.
**takeaway:** Uniform probability on a segment = (length of the favorable interval) / (length of the whole segment). Subtract endpoints to get lengths before forming the ratio.
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
**fastest_path:** Split the eight sorted scores into halves of four. Q1 = (61 + 67)/2 = 64; Q3 = (85 + 89)/2 = 87; IQR = 87 − 64 = 23.
**explanation:** The interquartile range of a data set is the difference between the third quartile and the first quartile, Q3 - Q1, where Q1 is the median of the lower half of the ordered data and Q3 is the median of the upper half. This statistic measures the spread of the middle 50 percent of the values.

The eight scores, already in ascending order, are 52, 61, 67, 72, 78, 85, 89, 94. Because there are eight values, an even number, the data divide into a lower half of four values and an upper half of four values.

The lower half is {52, 61, 67, 72}. The median of these four values is the average of the two middle ones: Q1 = (61 + 67)/2 = 128/2 = 64.

The upper half is {78, 85, 89, 94}. The median of these four values is the average of the two middle ones: Q3 = (85 + 89)/2 = 174/2 = 87.

Therefore the interquartile range is Q3 - Q1 = 87 - 64 = 23.

The correct answer is C.
**mistake_a:** 17 comes from subtracting the wrong pair of values (78 − 61) after miscounting where the quartiles sit.
**mistake_b:** 22 is 89 − 67 — taking single values from each half instead of averaging the two middle values of each half.
**mistake_d:** 27 is 94 − 67, mixing the maximum into the upper quartile; the quartiles live inside the data, not at its extremes.
**mistake_e:** 42 is 94 − 52, the full range — the IQR deliberately ignores the extreme values and measures only the middle 50 percent.
**common_trap:** Reporting the range instead of the interquartile range, or grabbing single data points as quartiles when an even-sized half requires averaging its two middle values.
**takeaway:** With an even count, split the data into halves; each quartile is the average of the two middle values of its half, and IQR = Q3 − Q1.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q32
**difficulty:** Easy
**type:** Problem Solving
**topic:** Probability

Events X and Y are mutually exclusive. P(X) = 0.3 and P(Y) = 0.4. What is the probability that at least one of the two events occurs?

- A) 0.12
- B) 0.58
- C) 0.60
- D) 0.70
- E) 1.00

**answer:** D
**fastest_path:** Mutually exclusive means no overlap to subtract: P(X or Y) = 0.3 + 0.4 = 0.7.
**explanation:** The probability that at least one of two events occurs is governed by the addition rule, which states that for any two events X and Y, P(X or Y) = P(X) + P(Y) - P(X and Y). The term P(X and Y) is subtracted to avoid counting the overlap of the two events twice.

The events X and Y are described as mutually exclusive, meaning they cannot both occur. The probability that both occur is therefore zero, so P(X and Y) = 0.

Let P(X) = 0.3 and P(Y) = 0.4. Substituting these values, together with P(X and Y) = 0, into the addition rule gives the probability that at least one of the two events occurs:

P(X or Y) = P(X) + P(Y) - P(X and Y)
P(X or Y) = 0.3 + 0.4 - 0
P(X or Y) = 0.70

The correct answer is D.
**mistake_a:** 0.12 multiplies 0.3 × 0.4 as if the events were independent and the question asked for "both." Mutually exclusive events can never both occur — P(X and Y) = 0 — and "at least one" calls for addition.
**mistake_b:** 0.58 is 0.3 + 0.4 − 0.12, subtracting a phantom overlap computed by multiplication. There is no overlap to subtract.
**mistake_c:** 0.60 is 1 − 0.4 — a complement computed on the wrong event.
**mistake_e:** 1.00 assumes X and Y cover all possibilities. They are exclusive, not exhaustive: with probability 0.3, neither occurs.
**common_trap:** Conflating "mutually exclusive" with "independent." Exclusive events block each other (multiply to zero); independent events ignore each other (multiply to the product).
**takeaway:** Mutually exclusive → P(at least one) is a straight sum. "Exclusive" and "exhaustive" are different claims: the sum need not reach 1.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q33
**difficulty:** Easy
**type:** Problem Solving
**topic:** Independent Events

Events A and B are independent. P(A) = 0.6 and P(B) = 0.3. What is the probability that both A and B occur?

- A) 0.18
- B) 0.30
- C) 0.60
- D) 0.72
- E) 0.90

**answer:** A
**fastest_path:** Independent and "both" → multiply: 0.6 × 0.3 = 0.18.
**explanation:** When two events are independent, the occurrence of one has no effect on the probability of the other, so the probability that both occur equals the product of their individual probabilities. This is the multiplication rule for independent events: for independent events A and B, P(A and B) = P(A) × P(B).

Let P(A) = 0.6 and P(B) = 0.3 denote the given individual probabilities, and note that A and B are stated to be independent. The quantity sought is the joint probability that both A and B occur, namely P(A and B).

Applying the multiplication rule for independent events gives:

P(A and B) = P(A) × P(B)
P(A and B) = 0.6 × 0.3
P(A and B) = 0.18

The correct answer is A.
**mistake_b:** 0.30 is P(B) alone — as if A were certain to occur. Both events carry risk, so both probabilities must enter.
**mistake_c:** 0.60 is P(A) alone, ignoring whether B occurs at all.
**mistake_d:** 0.72 is 0.6 + 0.3 − 0.18 — the probability that at least one of the events occurs (the union), not that both occur.
**mistake_e:** 0.90 adds the probabilities, which answers "at least one" only for mutually exclusive events — and these events overlap, so even that reading is wrong.
**common_trap:** Adding when the question says "both." Addition serves "or"; multiplication serves "and" (when events are independent).
**takeaway:** Map the language first: "and" with independence → multiply; "or" → add, then subtract the overlap.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q34
**difficulty:** Medium
**type:** Problem Solving
**topic:** Expected Value

One card is drawn at random from a standard deck of 52 cards. You win $5 if the card is a heart, win $2 if the card is black (a spade or club), and lose $3 if the card is a diamond. What is the expected value of one draw?

- A) $0.50
- B) $1.00
- C) $1.33
- D) $1.50
- E) $2.25

**answer:** D
**fastest_path:** Suits split into quarters: EV = (1/4)(5) + (1/2)(2) + (1/4)(−3) = 1.25 + 1 − 0.75 = $1.50.
**explanation:** The expected value of a single trial is the sum, over all possible outcomes, of each outcome's payoff multiplied by its probability. For this sum to be valid, the outcomes must partition the sample space, so their probabilities must total 1.

A standard deck contains 52 cards, divided equally among four suits of 13 cards each. Let the three outcomes be drawing a heart, drawing a black card (a spade or a club), and drawing a diamond. The hearts number 13, so the probability of a heart is 13/52 = 1/4. The black cards comprise the 13 spades and the 13 clubs, a total of 26 cards, so the probability of a black card is 26/52 = 1/2. The diamonds number 13, so the probability of a diamond is 13/52 = 1/4. These probabilities sum to 1/4 + 1/2 + 1/4 = 1, confirming that the three outcomes form a complete partition of the deck.

The associated payoffs are a gain of $5 for a heart, a gain of $2 for a black card, and a loss of $3 for a diamond. The expected value is therefore

EV = (1/4)(5) + (1/2)(2) + (1/4)(-3).

Evaluating each term gives (1/4)(5) = 5/4, (1/2)(2) = 1, and (1/4)(-3) = -3/4. Summing these,

EV = 5/4 + 1 - 3/4 = (5/4 - 3/4) + 1 = 2/4 + 1 = 1/2 + 1 = 1.50.

Thus the expected value of one draw is $1.50.

The correct answer is D.
**mistake_a:** $0.50 is the hearts and diamonds branches alone (1.25 − 0.75) — the black-card branch, worth a full $1.00 of expectation, was dropped.
**mistake_b:** $1.00 is either the black-card branch by itself or (5 + 2 − 3)/4 — payoffs averaged over four "suits" as if each payoff applied to one suit.
**mistake_c:** $1.33 is (5 + 2 − 3)/3 — the unweighted average of the three payoffs, ignoring that the black-card outcome is twice as likely as each of the others.
**mistake_e:** $2.25 treats the diamond outcome as $0 instead of −$3 — losses enter the expected value with their sign.
**common_trap:** Averaging the payoffs without their probability weights. Outcomes with different probabilities cannot be averaged equally.
**takeaway:** Expected value = sum of (probability × payoff) over a complete set of outcomes. Confirm the probabilities total 1, and keep losses negative.
**hint_nudge:** What fraction of the deck does each payoff group occupy?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q35
**difficulty:** Medium
**type:** Problem Solving
**topic:** Conditional Probability

A company has 200 employees: 120 in the analytics division and 80 in the operations division. Among analytics employees, 25% hold an MBA. Among operations employees, 15% hold an MBA. If one employee with an MBA is selected at random, what is the probability the employee works in the analytics division?

- A) 2/7
- B) 3/5
- C) 5/7
- D) 5/8
- E) 5/6

**answer:** C
**fastest_path:** Convert rates to head-counts: 25% of 120 = 30 analytics MBAs; 15% of 80 = 12 operations MBAs. Of the 42 MBA holders, 30 are in analytics: 30/42 = 5/7.
**explanation:** This problem is governed by the definition of conditional probability: for events A and B with P(B) greater than 0, the probability of A given B equals the number of outcomes satisfying both A and B divided by the number of outcomes satisfying B. Equivalently, conditioning on B restricts the sample space to only those outcomes in which B occurs.

Here the conditioning event is that the selected employee holds an MBA, so the relevant sample space is the set of all MBA holders, not the full set of 200 employees. We let A denote the event that the employee works in the analytics division and B denote the event that the employee holds an MBA.

First we count the MBA holders in each division. The analytics division has 120 employees, of whom 25 percent hold an MBA, giving 120 times 0.25 equals 30 analytics employees with an MBA. The operations division has 80 employees, of whom 15 percent hold an MBA, giving 80 times 0.15 equals 12 operations employees with an MBA.

The total number of employees who hold an MBA is therefore 30 plus 12 equals 42. This is the size of the restricted sample space, that is, the number of outcomes satisfying the conditioning event B.

Of these 42 MBA holders, the number who also work in analytics, satisfying both A and B, is 30. The conditional probability is then the number satisfying both conditions divided by the number satisfying the given condition: 30 divided by 42, which reduces to 5/7.

The correct answer is C.
**mistake_a:** 2/7 is 12/42 — the operations share of the MBA holders, answering the complement of what was asked.
**mistake_b:** 3/5 is 120/200 — the analytics share of all employees, ignoring the condition that the selected employee holds an MBA.
**mistake_d:** 5/8 is 25/(25 + 15) — the two percentage rates combined directly. Rates from groups of different sizes cannot be compared until each is converted into a head-count.
**mistake_e:** 5/6 overstates analytics' dominance, typically from miscomputing operations' MBA count (12 people) as half its true size.
**common_trap:** Forming 25/(25 + 15) = 5/8. The divisions have different sizes, so the 25% and 15% apply to different bases — convert to people (30 and 12) before forming any ratio.
**takeaway:** Condition first, then count: restrict the sample space to those satisfying the given condition, and the probability is a ratio of head-counts inside that restricted group.
**hint_nudge:** How many people in each division actually hold an MBA?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q36
**difficulty:** Medium
**type:** Problem Solving
**topic:** Binomial Probability

A medical treatment has an independent 70% success rate for each patient. If 3 patients receive the treatment, what is the probability that exactly 2 of the 3 respond successfully?

- A) 0.147
- B) 0.189
- C) 0.343
- D) 0.441
- E) 0.490

**answer:** D
**fastest_path:** Pick which patient fails (3 ways), then multiply: 3 × (0.7)² × (0.3) = 3 × 0.147 = 0.441.
**explanation:** The event in question is governed by the binomial probability model, which applies whenever a fixed number of independent trials each yield one of two outcomes (success or failure) with a constant probability of success. The probability of obtaining exactly k successes in n such trials is given by

P(exactly k successes) = C(n, k) * p^k * (1 - p)^(n - k),

where C(n, k) is the number of ways to choose which k of the n trials are the successes, p is the probability of success on a single trial, and (1 - p) is the probability of failure on a single trial.

Let a success denote a patient responding to the treatment. The number of trials is n = 3, the number of required successes is k = 2, and the success probability is p = 0.7, so the failure probability is 1 - p = 0.3. Substituting these values into the formula gives

P = C(3, 2) * (0.7)^2 * (0.3)^1.

The combinatorial factor is C(3, 2) = 3, since there are three ways to choose which two of the three patients respond. Evaluating the remaining factors yields (0.7)^2 = 0.49 and (0.3)^1 = 0.30. Therefore

P = 3 * 0.49 * 0.30 = 3 * 0.147 = 0.441.

The correct answer is D.
**mistake_a:** 0.147 is (0.7)²(0.3) — the probability of one specific arrangement (say, patients 1 and 2 succeed, patient 3 fails). There are three such arrangements, and the factor of C(3,2) = 3 is missing.
**mistake_b:** 0.189 is 3 × (0.7)(0.3)² — success and failure counts swapped, which computes exactly one success instead of exactly two.
**mistake_c:** 0.343 is (0.7)³ — all three patients succeeding, but "exactly 2" requires one failure.
**mistake_e:** 0.490 is (0.7)² — two successes with the third patient ignored entirely. The required failure (× 0.3) and the arrangement count (× 3) are both missing.
**common_trap:** Forgetting the arrangement factor. "Exactly 2 of 3" can happen three different ways, and each way must be counted.
**takeaway:** P(exactly k of n) = C(n, k) × p^k × (1 − p)^(n − k). The failures are part of the event — multiply them in, then count the arrangements.
**hint_nudge:** How many different ways can exactly two of the three patients be the successful ones?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q37
**difficulty:** Medium
**type:** Problem Solving
**topic:** Overlapping Sets

In a survey of 120 customers, 72 bought Product A, 54 bought Product B, and 30 bought both. How many customers bought neither product?

- A) 0
- B) 6
- C) 18
- D) 24
- E) 30

**answer:** D
**fastest_path:** At least one product: 72 + 54 − 30 = 96. Neither: 120 − 96 = 24.
**explanation:** This problem is governed by the inclusion-exclusion principle, which states that for two overlapping groups the number of customers in at least one group equals the size of the first group plus the size of the second group minus the size of the overlap, so that the customers counted in both groups are not counted twice. The number who bought neither product is then the total number of customers minus the number who bought at least one product.

Let T = 120 be the total number of customers surveyed. Let A be the number who bought Product A, so A = 72, and let B be the number who bought Product B, so B = 54. Let the number who bought both products be the intersection, so |A ∩ B| = 30.

The number who bought at least one of the two products is the union, computed as

|A ∪ B| = A + B − |A ∩ B| = 72 + 54 − 30 = 126 − 30 = 96.

The number who bought neither product is the total minus those who bought at least one:

Neither = T − |A ∪ B| = 120 − 96 = 24.

The correct answer is D.
**mistake_a:** 0 assumes the two products cover every customer — tempting because 72 + 54 exceeds 120, but that excess only reveals overlap, not full coverage.
**mistake_b:** 6 is 72 + 54 − 120, which answers a different question (the minimum possible overlap if every customer had bought something), not the number who bought neither.
**mistake_c:** 18 is 120 − 72 − 30 — subtracting Product A's buyers and the overlap while mishandling Product B entirely.
**mistake_e:** 30 echoes the "both" figure straight from the stem without any computation.
**common_trap:** Forgetting that the 72 and the 54 each already include the 30 dual buyers, so a raw 120 − 72 − 54 over-subtracts.
**takeaway:** Neither = total − (A + B − both). Compute the union first, then take the complement.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q38
**difficulty:** Easy
**type:** Problem Solving
**topic:** Mean

The average (arithmetic mean) of 5 numbers is 84. Four of the five numbers are 78, 91, 80, and 76. What is the fifth number?

- A) 84
- B) 87
- C) 91
- D) 95
- E) 99

**answer:** D
**fastest_path:** Balance deviations from 84: the four known values sit at −6, +7, −4, −8, totaling −11. The fifth must sit at +11, so it is 84 + 11 = 95.
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
**mistake_a:** 84 assumes the missing number simply equals the mean — true only if the four known values already balanced, and here they fall 11 short.
**mistake_b:** 87 reflects a slip in summing the four known values (getting 333 instead of 325).
**mistake_c:** 91 repeats the largest known value from the stem instead of computing anything.
**mistake_e:** 99 comes from dropping 4 in the addition (summing the known values to 321).
**common_trap:** Answering with the mean itself. The fifth number must repair the deficit the other four leave, not match the average.
**takeaway:** Total = mean × count, then subtract what is known — or faster, sum the signed deviations from the mean and give the missing value the opposite total.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q39
**difficulty:** Easy
**type:** Problem Solving
**topic:** Percentiles

On a standardized exam, a score of 680 falls at the 72nd percentile. If 350 students took the exam, approximately how many students scored strictly below 680?

- A) 98
- B) 126
- C) 175
- D) 252
- E) 280

**answer:** D
**fastest_path:** 72nd percentile means 72% scored below: 0.72 × 350 = 252.
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
**mistake_a:** 98 is 28% of 350 — the students who scored at or above 680, the complement of what was asked.
**mistake_b:** 126 is 36% of 350 — the percentile halved somewhere in the arithmetic.
**mistake_c:** 175 is half the test takers — defaulting to the median split and ignoring the stated percentile.
**mistake_e:** 280 is 80% of 350 — rounding the 72nd percentile up to the 80th. The numbers here (0.72 × 350) compute cleanly without rounding.
**common_trap:** Computing the complement — the count above the score rather than below it.
**takeaway:** The nth percentile means n% of observations fall below that value; count = (n/100) × total.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Standard Deviation

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
**fastest_path:** Same mean, same count — just compare distances from 6. P's extremes (1 and 11) sit 5 away; Q's (4 and 8) sit only 2 away. P spreads more, so SD(P) > SD(Q). No computation needed.
**explanation:** The standard deviation of a data set measures the typical distance of its values from the mean: the larger the deviations of the values from the mean, the larger the standard deviation. Because both sets are stated to have the same mean of 6 and the same number of values (7), the comparison reduces entirely to how far each set's values lie from 6.

Let the mean of each set be m = 6, and consider the deviation of each value from the mean. The standard deviation is determined by the sum of the squared deviations, since for n values the standard deviation equals the square root of (the sum of the squared deviations divided by n), and here n is the same for both sets.

For set P = {1, 4, 4, 6, 8, 8, 11}, the deviations from 6 are -5, -2, -2, 0, 2, 2, and 5. Squaring each gives 25, 4, 4, 0, 4, 4, and 25, and their sum is
25 + 4 + 4 + 0 + 4 + 4 + 25 = 66.

For set Q = {4, 4, 5, 6, 7, 8, 8}, the deviations from 6 are -2, -2, -1, 0, 1, 2, and 2. Squaring each gives 4, 4, 1, 0, 1, 4, and 4, and their sum is
4 + 4 + 1 + 0 + 1 + 4 + 4 = 18.

Since the sum of squared deviations for P (66) exceeds that for Q (18), and both sets are divided by the same n = 7 before taking the square root, the standard deviation of P is greater than the standard deviation of Q. This larger spread arises because P's values lie further from the mean than Q's values do: P's extremes, 1 and 11, are each 5 units from 6, whereas Q's extremes, 4 and 8, are each only 2 units from 6.

The correct answer is C.
**mistake_a:** The number of distinct values has no bearing on standard deviation — {0, 0, 100, 100} has two distinct values and a huge spread.
**mistake_b:** Sharing a mean and a count says nothing about spread; two such sets can have wildly different standard deviations, as these two do.
**mistake_d:** This reverses the comparison and misdescribes Q, whose values hug the mean (all within 2 of it) rather than clustering at endpoints.
**mistake_e:** Tempting, but exact computation is rarely needed: with equal means and equal counts, the set whose values lie farther from the mean has the larger SD, and here that is visible by inspection.
**common_trap:** Believing standard deviation comparisons always require computing both values. The GMAT usually designs them to be settled by comparing deviations qualitatively.
**takeaway:** SD compares by deviation: fix the mean, then ask whose values sit farther from it. Reach for the formula only when inspection fails.
**hint_nudge:** Both sets share mean 6 — how far from 6 do each set's values sit?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Conditional Probability

In a clinical study, 300 patients received one of two drugs. Two hundred patients received Drug A and 100 received Drug B. Among Drug A patients, 15% experienced symptom relief. Among Drug B patients, 45% experienced relief. One patient who experienced relief is selected at random. What is the probability the patient received Drug A?

- A) 1/4
- B) 2/5
- C) 1/2
- D) 2/3
- E) 3/5

**answer:** B
**fastest_path:** Relief head-counts: 15% of 200 = 30 on Drug A; 45% of 100 = 45 on Drug B. Of the 75 relieved patients, 30 took A: 30/75 = 2/5.
**explanation:** This is a conditional probability problem. When a member is chosen at random from a subgroup defined by a condition, the probability of belonging to a given category equals the number of members satisfying both the condition and that category, divided by the total number of members satisfying the condition. Here the condition is "experienced relief," and the category of interest is "received Drug A."

First, find how many patients in each drug group experienced relief. The number of Drug A patients who experienced relief is 200 × 0.15 = 30. The number of Drug B patients who experienced relief is 100 × 0.45 = 45.

The total number of patients who experienced relief is therefore 30 + 45 = 75. Since the selected patient is drawn at random from those who experienced relief, the probability that this patient received Drug A is the ratio of Drug A relief patients to all relief patients:

30 / 75 = 2/5.

The correct answer is B.
**mistake_a:** 1/4 is 15/(15 + 45) — the two percentage rates divided directly. The rates apply to groups of different sizes (200 vs 100 patients) and mean nothing until converted to head-counts.
**mistake_c:** 1/2 splits the credit evenly between the drugs, as if each contributed the same number of relieved patients.
**mistake_d:** 2/3 is 200/300 — Drug A's share of all patients, the base rate, with the relief condition never applied.
**mistake_e:** 3/5 is 45/75 — Drug B's share of the relieved patients, the complement of the question asked.
**common_trap:** Answering with the base rate (2/3 of patients took Drug A). Conditioning on relief reweights the groups by their relief rates, and Drug B's much higher rate pulls A's share down to 2/5.
**takeaway:** Percentages from different-sized groups must become people before they can be compared. Then conditional probability is simply (target group's count) / (condition group's count).
**hint_nudge:** How many patients on each drug actually experienced relief?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q42
**difficulty:** Medium
**type:** Problem Solving
**topic:** Expected Value

A project manager must choose between two investment strategies. Strategy P has a 40% chance of generating a $800,000 profit and a 60% chance of a $200,000 loss. Strategy Q has a 70% chance of generating a $400,000 profit and a 30% chance of breaking even ($0 gain or loss). Which strategy has the higher expected value, and by how much?

- A) Strategy P by $80,000
- B) Strategy P by $40,000
- C) Strategy P by $20,000
- D) Strategy Q by $40,000
- E) Strategy Q by $80,000

**answer:** E
**fastest_path:** EV(P) = 0.4(800K) − 0.6(200K) = 320K − 120K = $200K. EV(Q) = 0.7(400K) + 0 = $280K. Q wins by $80K.
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
**mistake_a:** The $80,000 margin is right but the direction is reversed — typically from dropping the minus sign on P's $200,000 loss, which inflates EV(P) past EV(Q).
**mistake_b:** $40,000 for P compares P's win branch alone ($320,000) against Q's full EV ($280,000), ignoring that P loses $120,000 in expectation on its downside.
**mistake_c:** $20,000 for P reflects an arithmetic slip in one of the branches — recompute each product separately before differencing.
**mistake_d:** Right strategy, wrong margin: $40,000 arises from weighting P's loss with the wrong probability (0.4 instead of 0.6), giving EV(P) = $240,000.
**common_trap:** Forgetting that losses enter expected value with a negative sign. P's headline $800,000 payoff looks dominant until its 60%-likely loss is charged against it.
**takeaway:** EV comparisons need every branch, signed: a strategy with a smaller best case (Q) can still win on expectation because its worst case costs nothing.
**hint_nudge:** What does Strategy P's 60% chance of losing $200,000 do to its expected value?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q43
**difficulty:** Medium
**type:** Problem Solving
**topic:** Overlapping Sets

At a tech company, 180 employees were surveyed about three skills. The results showed: 90 have Python skills, 75 have SQL skills, and 60 have machine learning knowledge. Additionally, 30 have both Python and SQL, 25 have both Python and machine learning, 20 have both SQL and machine learning, and 10 have all three. How many of the 180 employees have none of the three skills?

- A) 10
- B) 20
- C) 30
- D) 40
- E) 55

**answer:** B
**fastest_path:** Union = (90 + 75 + 60) − (30 + 25 + 20) + 10 = 225 − 75 + 10 = 160. Neither: 180 − 160 = 20.
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
**mistake_a:** 10 echoes the triple-overlap figure from the stem — a number grabbed, not computed.
**mistake_c:** 30 comes from omitting the final "+10": union = 225 − 75 = 150, so 180 − 150 = 30. The all-three group was subtracted three times in the pairwise terms and must be added back.
**mistake_d:** 40 subtracts the triple overlap instead of adding it back (union = 225 − 75 − 10 = 140), the mirror image of the sign error in C.
**mistake_e:** 55 typically comes from running the two-set formula on Python and SQL only (with the triple overlap mis-subtracted) and never accounting for machine learning.
**common_trap:** The sign on the triple intersection. Members of all three sets are added three times and subtracted three times by the first six terms — without the final "+", they vanish from the union entirely.
**takeaway:** Three-set inclusion-exclusion: add the singles, subtract the pairs, add back the triple. Then "none" = total − union.
**hint_nudge:** After subtracting the three pairwise overlaps, how many times have the 10 triple-skill employees been counted?
**hint_strategy:** Compute the union with singles − pairs + triple, then subtract from 180.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q44
**difficulty:** Medium
**type:** Problem Solving
**topic:** Standard Deviation

Set M = {4, 8, 14, 18, 22} has mean μ and standard deviation σ. Set N is formed by multiplying every element of M by 3 and then subtracting 6. Which of the following correctly compares the statistics of the two sets?

- A) Mean of N = 2μ and SD of N = 3σ
- B) Mean of N = 3μ − 6 and SD of N = σ
- C) Mean of N = 3μ − 6 and SD of N = 3σ
- D) Mean of N = 3μ − 6 and SD of N = 3σ − 6
- E) Mean of N = 3μ and SD of N = 3σ

**answer:** C
**fastest_path:** The mean follows the whole transformation: 3μ − 6. The SD ignores the shift and keeps only the multiplier: 3σ. The actual numbers in M are never needed.
**explanation:** This problem applies the two rules governing how the mean and standard deviation of a data set respond to a linear transformation. For any transformation of the form n = a*m + b applied to every element of a set: the mean is transformed in the same way, becoming a*(mean) + b, while the standard deviation is multiplied by the absolute value of the scaling factor, becoming |a|*(standard deviation). The additive constant b shifts every value by the same amount and therefore leaves all deviations from the mean unchanged, so it does not affect the standard deviation.

Let m denote a typical element of set M, with mean equal to the Greek letter mu and standard deviation equal to the Greek letter sigma. Set N is formed by multiplying every element of M by 3 and then subtracting 6, so each element of N is n = 3m - 6. Here the scaling factor is a = 3 and the additive constant is b = -6.

Applying the mean rule gives Mean of N = 3*mu + (-6) = 3*mu - 6.

Applying the standard deviation rule gives SD of N = |3|*sigma = 3*sigma. The constant -6 does not enter the standard deviation, because shifting every value by the same amount does not change the spread.

These results can be confirmed numerically. The mean of M is (4 + 8 + 14 + 18 + 22) / 5 = 66 / 5 = 13.2, so the mean of N is 3(13.2) - 6 = 39.6 - 6 = 33.6, which equals 3*mu - 6. The deviations of the elements of M from 13.2 are -9.2, -5.2, 0.8, 4.8, and 8.8. After the transformation, the corresponding deviations in N are -27.6, -15.6, 2.4, 14.4, and 26.4, each exactly 3 times the original, confirming that the standard deviation is tripled.

Thus Mean of N = 3*mu - 6 and SD of N = 3*sigma.

The correct answer is C.
**mistake_a:** "Mean of N = 2μ" miscopies the multiplier — every element was tripled, so the mean is tripled (then shifted), never doubled.
**mistake_b:** "SD of N = σ" treats multiplication like addition. Only the shift leaves the SD alone; scaling by 3 stretches every deviation by 3.
**mistake_d:** "SD of N = 3σ − 6" drags the shift into the spread. Subtracting 6 from every value slides the whole set left without changing any distance between values.
**mistake_e:** "Mean of N = 3μ" forgets that the mean, unlike the SD, does absorb the −6. The center moves with the data; the spread does not.
**common_trap:** Applying the additive constant to the standard deviation (choice D) — or denying it to the mean (choice E). The two statistics respond to the shift in opposite ways.
**takeaway:** Under n = a·m + b: mean → a·(mean) + b, SD → |a|·SD. The mean obeys the whole linear map; the spread sees only the scale factor.
**hint_nudge:** Does sliding an entire data set 6 units to the left change how spread out it is?
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q45
**difficulty:** Hard
**type:** Problem Solving
**topic:** Expected Value

A bag contains 2 red balls and 1 white ball. A player draws one ball at random. If the ball is red, the player wins $6 and the game ends. If the ball is white, the player must return the white ball to the bag and pay $2 to draw again (restoring the bag to 2 red and 1 white). The player always continues when drawing white. What is the player's expected net gain per game?

- A) $3.00
- B) $4.00
- C) $4.50
- D) $5.00
- E) $6.00

**answer:** D
**fastest_path:** After a white draw the game resets exactly, so its value V satisfies V = (2/3)(6) + (1/3)(V − 2), giving V = 5. Even faster: the $6 prize is certain eventually, and the expected number of $2 redraw fees is (1/3)/(2/3) = 1/2, so V = 6 − 1 = $5.
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
**mistake_a:** $3.00 is roughly the single-draw expected value, (2/3)(6) + (1/3)(−2) ≈ $3.33 — treating the game as over after one draw, when a white draw actually continues it.
**mistake_b:** $4.00 is 6 − 2 — charging the player exactly one redraw fee, but redraws happen only a third of the time per round; the expected number of paid redraws is 1/2, not 1.
**mistake_c:** $4.50 docks $1.50 of fees, overestimating the expected number of redraws at 3/4 instead of the true 1/2.
**mistake_e:** $6.00 counts the certain prize and ignores the redraw fees entirely — the white branch costs real money in expectation.
**common_trap:** Mishandling the expected number of redraws. The player eventually wins $6 with certainty; the entire question is how much fee money leaks out along the way.
**takeaway:** When a game returns to its exact starting state, name its value V and write one self-referential equation: V = (terminal branch) + (reset branch involving V). Alternatively, decompose into certain winnings minus expected fees.
**hint_nudge:** After the player draws white, pays $2, and returns the ball — how does the game ahead differ from the original game?
**hint_strategy:** It doesn't differ at all. Call the game's expected value V and express the white branch as V − 2 inside the expectation.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

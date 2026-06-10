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
**fastest_path:** Removed value = old sum minus new sum: 6 × 15 - 5 × 13 = 90 - 65 = 25.
**explanation:** The arithmetic mean of a set of numbers equals the sum of the numbers divided by how many numbers there are; equivalently, the sum equals the mean multiplied by the count. Working with sums rather than with the averages themselves is the key to this problem.

Let S be the sum of the original 6 numbers. Since the average of these 6 numbers is 15, we have

S = 6 × 15 = 90.

Let r denote the number that is removed, and let T be the sum of the 5 numbers that remain. Because the average of those 5 numbers is 13, we have

T = 5 × 13 = 65.

Removing r from the original collection reduces the total sum from S to T, so

r = S − T = 90 − 65 = 25.

The correct answer is E.
**mistake_a:** 2 is just the drop in the average (15 to 13). The removed number must account for that 2-point drop across all 5 remaining values, not merely equal the drop.
**mistake_b:** 10 is the total amount the remaining numbers fell short (2 points × 5 numbers). That is how far above 15 the removed number sits — add it back to 15 to finish.
**mistake_c:** 13 assumes the removed number equals the new average. Removing a 13 from a set averaging 15 would raise the average of the rest, not lower it.
**mistake_d:** 15 assumes a perfectly average number was removed, which would leave the mean unchanged at 15 rather than dropping it to 13.
**common_trap:** Picking one of the two averages (13 or 15) as the removed number. Since removing it made the average fall, the removed number must sit above the old average of 15.
**takeaway:** Convert every average statement into a sum immediately: removed value = (old count × old mean) - (new count × new mean).
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
**fastest_path:** Count the non-green balls directly: (4 + 3)/12 = 7/12.
**explanation:** The probability of an event is the ratio of the number of favorable outcomes to the total number of equally likely outcomes. Because every ball is equally likely to be drawn, we can apply this principle directly, and because the question asks for the probability that the ball is NOT green, it is efficient to use the complement rule, which states that the probability that an event does not occur equals 1 minus the probability that it does occur.

Let T denote the total number of balls. The bag contains 4 red balls, 3 blue balls, and 5 green balls, so

T = 4 + 3 + 5 = 12.

The probability that the ball drawn is green is the number of green balls divided by the total number of balls:

P(green) = 5/12.

Applying the complement rule, the probability that the ball drawn is not green is

P(not green) = 1 - P(green) = 1 - 5/12 = 12/12 - 5/12 = 7/12.

Equivalently, the number of balls that are not green is the number of red balls plus the number of blue balls, namely 4 + 3 = 7, so the probability is 7/12 directly.

The correct answer is B.
**mistake_a:** 5/12 is the probability the ball IS green — the question asks for the opposite event.
**mistake_c:** 1/3 is the probability of red alone (4/12); "not green" includes both red and blue.
**mistake_d:** 2/3 is 1 - 4/12 — subtracting the red balls from the whole instead of the green ones.
**mistake_e:** 3/4 is 1 - 3/12 — subtracting the blue balls instead of the green ones.
**common_trap:** Solving for P(green) and stopping. On NOT questions, the test counts on you answering the un-negated version — 5/12 is sitting right there as choice A.
**takeaway:** For "NOT X" probabilities, either count the complement directly or compute 1 - P(X) — then re-read the stem to confirm which group you subtracted.
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
**fastest_path:** Sort, then take the 4th of 7 values: 3, 7, 7, 10, 14, 18, 21 → 10.
**explanation:** The median of a set of numbers is found by arranging the values in increasing order and selecting the middle value. When the set contains an odd number of values, the median is the single value in the middle position; when the set contains an even number of values, the median is the average of the two middle values. Any value that appears more than once must be listed every time it occurs.

Let the set be {14, 7, 21, 3, 10, 7, 18}. Counting its elements gives seven values, and the value 7 appears twice, so both occurrences are retained when ordering.

Arranging the seven values in increasing order produces 3, 7, 7, 10, 14, 18, 21.

Because the set contains an odd number of values, the median is the single middle value. For a set of n values arranged in order, the middle position is (n + 1)/2. Here n = 7, so the middle position is (7 + 1)/2 = 4. The value in the fourth position of 3, 7, 7, 10, 14, 18, 21 is 10.

The correct answer is B.
**mistake_a:** 7 is the mode — the most frequent value — not the middle one.
**mistake_c:** 12 comes from discarding the duplicate 7 and then averaging the two middle values of the remaining six. Repeated values keep their own slots.
**mistake_d:** 14 is the 5th value of the ordered list — an off-by-one in locating the middle: with 7 values, the median sits at position (7 + 1)/2 = 4.
**mistake_e:** 18 is two places past the true middle — usually a sign the list was never written out in order before counting.
**common_trap:** Forgetting to sort first, or dropping the repeated 7. The median is meaningless until the list is in order, and duplicates each occupy a position.
**takeaway:** Median is positional: sort (keeping duplicates), then the middle of n values sits at position (n + 1)/2.
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
**fastest_path:** Boys sit 12 below the class mean → total deficit 10 × 12 = 120 → the 15 girls must sit 120/15 = 8 above → 72 + 8 = 80.
**explanation:** The arithmetic mean of a set of values equals the sum of those values divided by the number of values. It follows that the sum of a group of values equals its mean multiplied by its count, and that the sum of the entire class equals the sum of its two subgroups, the boys and the girls.

Let S denote the sum of all 25 test scores, let B denote the sum of the 10 boys' scores, and let G denote the sum of the 15 girls' scores. Because every student is either a boy or a girl, S = B + G.

The class of 25 students has a mean of 72, so the total sum is S = 25 × 72 = 1,800. The 10 boys have a mean of 60, so their sum is B = 10 × 60 = 600. The girls' sum is therefore G = S − B = 1,800 − 600 = 1,200.

The mean score of the 15 girls is the girls' sum divided by the number of girls: G ÷ 15 = 1,200 ÷ 15 = 80.

The correct answer is D.
**mistake_a:** 60 is the boys' mean, restated from the stem.
**mistake_b:** 72 assumes the girls match the class mean — impossible when the boys drag it down; the girls must sit above 72 to compensate.
**mistake_c:** 76 splits the difference as if the groups were equal in size. With 15 girls to 10 boys, the balance point is not midway.
**mistake_e:** 84 adds the full 12-point boy deficit to the class mean instead of scaling it by group size (12 × 10/15 = 8).
**common_trap:** Treating a weighted average like a simple average of two group means. The combined mean always sits closer to the larger group's mean.
**takeaway:** For two-group means, use the balance method: (group size) × (distance below the combined mean) on one side must equal (group size) × (distance above) on the other.
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
**fastest_path:** Ordered pairs summing to 8: (2,6), (3,5), (4,4), (5,3), (6,2) — five of the 36 outcomes.
**explanation:** The probability of an event is the number of favorable outcomes divided by the total number of equally likely outcomes. Because the two dice are distinguishable, each roll is recorded as an ordered pair, where the first entry is the result of the first die and the second entry is the result of the second die.

Each die can show any of 6 values, and the result of one die is independent of the other, so the total number of equally likely ordered outcomes is 6 times 6, which is 36.

We now count the ordered pairs whose entries sum to 8. Letting the pair (a, b) denote the results, we require a + b = 8 with each of a and b an integer from 1 through 6. Listing these systematically gives (2, 6), (3, 5), (4, 4), (5, 3), and (6, 2), which is 5 favorable outcomes.

Therefore the probability is 5 divided by 36, or 5/36.

The correct answer is B.
**mistake_a:** 1/12 = 3/36 counts {2,6}, {3,5}, {4,4} as unordered pairs. The dice are distinct, so (2,6) and (6,2) are different outcomes.
**mistake_c:** 1/6 = 6/36 is the count for a sum of 7, the most common total. A sum of 8 has one fewer way because (4,4) has no mirror image.
**mistake_d:** 7/36 overcounts by admitting impossible pairs such as (1,7) and (7,1); each die shows only 1 through 6.
**mistake_e:** 1/4 usually results from a hurried count; with dice, list the pairs systematically — there are exactly five.
**common_trap:** Treating (2,6) and (6,2) as one outcome. Mixed pairs count twice; doubles count once.
**takeaway:** Two-dice probabilities live on a 36-outcome grid: ways per sum rise from 1 (sum 2) to 6 (sum 7), then fall back to 1 (sum 12).
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
**fastest_path:** Both sets sum to 150 → same mean of 30. Set A's deviations (±20, ±10, 0) are exactly double Set B's (±10, ±5, 0) → A is more spread out. No variance computation needed.
**explanation:** The standard deviation of a set measures how far its values are spread from the mean; when two sets share the same mean, the set whose values lie farther from that mean has the greater standard deviation. Because both sets here contain the same number of equally spaced values, it suffices to compare their means and the size of their deviations from those means.

Let the mean of a set be the sum of its values divided by the count of values. For Set A, the mean is (10 + 20 + 30 + 40 + 50) / 5 = 150 / 5 = 30. For Set B, the mean is (20 + 25 + 30 + 35 + 40) / 5 = 150 / 5 = 30. The two sets therefore have the same mean, namely 30.

Next, consider the deviations of each value from the common mean of 30. For Set A the deviations are -20, -10, 0, 10, and 20. For Set B the deviations are -10, -5, 0, 5, and 10. Each deviation in Set A is twice the corresponding deviation in Set B, so the values of Set A lie uniformly farther from the mean than those of Set B.

This comparison alone establishes that Set A has the greater standard deviation. To confirm, compute the sum of squared deviations for each set. For Set A, (-20)^2 + (-10)^2 + 0^2 + 10^2 + 20^2 = 400 + 100 + 0 + 100 + 400 = 1000, giving a variance of 1000 / 5 = 200. For Set B, (-10)^2 + (-5)^2 + 0^2 + 5^2 + 10^2 = 100 + 25 + 0 + 25 + 100 = 250, giving a variance of 250 / 5 = 50. Since 200 is greater than 50, the standard deviation of Set A exceeds that of Set B.

Thus the two sets share the same mean, but Set A has the greater standard deviation.

The correct answer is B.
**mistake_a:** Same count and same mean do not imply same spread — B's values huddle within 10 of the mean while A's reach 20 away.
**mistake_c:** Reversed: B is the tighter set. Standard deviation grows with distance from the mean, and A's values sit farther out.
**mistake_d:** The means are equal — both sets sum to 150 — so neither set has a greater mean.
**mistake_e:** Half right: B does have the smaller standard deviation, but the means are identical.
**common_trap:** Assuming equal-sized sets with the same mean "look similar." Compare the deviations by eye — the GMAT almost never makes you actually compute a standard deviation.
**takeaway:** To compare standard deviations of equal-sized sets, compare distances from the mean: scaling every deviation by k scales the SD by k.
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
**fastest_path:** The units digit must be 0 or 5. Units 0: 9 × 8 = 72. Units 5: 8 × 8 = 64. Total 136.
**explanation:** A positive integer is divisible by 5 precisely when its units digit is 0 or 5, so the counting is organized into two mutually exclusive cases according to the units digit. Within each case the digits must be distinct, and the hundreds digit cannot be 0, since the number must be a 3-digit integer. The fundamental counting principle is applied to each case: the number of integers equals the product of the number of available choices for each position.

Case 1: the units digit is 0. The hundreds digit may be any of 1 through 9, which gives 9 choices, because 0 has already been used. The tens digit may be any digit from 0 through 9 except the two digits already placed (the 0 in the units position and the chosen hundreds digit), which leaves 10 - 2 = 8 choices. The number of integers in this case is 9 * 8 = 72.

Case 2: the units digit is 5. The hundreds digit may be any of 1 through 9 except 5, since 5 has already been used and 0 is not allowed as a leading digit, which gives 8 choices. The tens digit may be any digit from 0 through 9 except the two digits already placed (the 5 in the units position and the chosen hundreds digit), which leaves 10 - 2 = 8 choices. The number of integers in this case is 8 * 8 = 64.

The two cases have no overlap, so the total number of qualifying integers is 72 + 64 = 136.

The correct answer is C.
**mistake_a:** 112 = 8 × 7 + 8 × 7 excludes an extra digit from both remaining slots — only the digits already placed are off-limits (plus 0 in the lead).
**mistake_b:** 128 = 8 × 8 + 8 × 8 applies the units-5 restrictions to the units-0 case too. When 0 is the units digit, all nine digits 1-9 are free for the hundreds slot.
**mistake_d:** 144 = 9 × 8 + 9 × 8 lets 0 lead in the units-5 case. A 3-digit number cannot start with 0, so the hundreds digit there has only 8 options.
**mistake_e:** 152 = 72 + 8 × 10 forgets that the tens digit must differ from the two digits already placed, leaving 8 choices, not 10.
**common_trap:** The leading-zero rule. Splitting on the units digit is the easy part; the point is lost by letting 0 occupy the hundreds place in the units-5 case (144).
**takeaway:** In digit-counting problems, fill the most constrained positions first — here units (forced by divisibility), then hundreds (no leading zero) — multiplying the choices as you go.
**hint_nudge:** Divisibility by 5 pins the units digit to one of two values. Handle the two cases separately.
**hint_strategy:** In each case fill hundreds then tens, excluding digits already used — and remember a 3-digit number cannot start with 0.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability

A box contains 5 red chips and 3 blue chips. Two chips are drawn at random without replacement. What is the probability that at least one chip is red?

- A) 5/8
- B) 25/28
- C) 13/14
- D) 15/28
- E) 27/28

**answer:** B
**fastest_path:** Complement: 1 - P(both blue) = 1 - (3/8)(2/7) = 1 - 3/28 = 25/28.
**explanation:** The most efficient approach to an "at least one" probability question is the complement method: the probability that at least one of the drawn chips is red equals 1 minus the probability that none of the drawn chips is red, that is, the probability that both chips are blue.

Let the box contain 5 red chips and 3 blue chips, for a total of 8 chips, and let two chips be drawn at random without replacement. We compute the probability that both chips are blue.

On the first draw, 3 of the 8 chips are blue, so the probability that the first chip is blue is 3/8. Given that a blue chip has been removed, 2 of the remaining 7 chips are blue, so the probability that the second chip is also blue is 2/7. Because the draws occur without replacement, the probability that both chips are blue is the product of these two probabilities:

P(both blue) = (3/8)(2/7) = 6/56 = 3/28.

Applying the complement, the probability that at least one chip is red is:

P(at least one red) = 1 - P(both blue) = 1 - 3/28 = 28/28 - 3/28 = 25/28.

The correct answer is B.
**mistake_a:** 5/8 is the chance the first single draw is red; it ignores the second draw entirely.
**mistake_c:** 13/14 = 26/28 understates the both-blue count: the three blue chips form C(3,2) = 3 blue pairs out of C(8,2) = 28, not 2.
**mistake_d:** 15/28 is the probability of exactly one red chip. "At least one" also includes the both-red case (10/28); together they give 25/28.
**mistake_e:** 27/28 = 1 - 1/28 typically comes from using 2 blue chips instead of 3 in the complement: (2/8)(1/7) = 1/28.
**common_trap:** Reading "at least one" as "exactly one" (15/28). Direct counting needs the one-red and two-red cases; the complement needs only the all-blue case.
**takeaway:** "At least one" is the complement's home turf: P(at least one) = 1 - P(none) — one multiplication instead of several cases.
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
**fastest_path:** Required sum = 5 × 9 = 45; the knowns total 32; x = 45 - 32 = 13.
**explanation:** The arithmetic mean of a set of numbers equals the sum of those numbers divided by the count of numbers in the set. It follows that the sum of the numbers equals the mean multiplied by the count.

Let x denote the unknown member of the set {4, 7, 9, 12, x}. The set contains 5 numbers, and the mean is given as 9. Therefore the sum of all 5 numbers must equal the mean times the count:

Sum = 9 × 5 = 45.

The four known numbers contribute

4 + 7 + 9 + 12 = 32.

Since the total of all five numbers is 45, the value of x is the difference between the required total and the sum of the known numbers:

x = 45 − 32 = 13.

The correct answer is D.
**mistake_a:** 9 assumes x equals the mean. The four known values average only 8, so x must sit above 9 to pull the mean up to 9.
**mistake_b:** 11 is an addition slip — 4 + 7 + 9 + 12 = 32, not 34.
**mistake_c:** 12 just repeats the largest known value; the mean condition forces x past it.
**mistake_e:** 15 is a subtraction slip (45 - 30 instead of 45 - 32).
**common_trap:** Assuming the missing value equals the target mean. That only works when the known values already average the target.
**takeaway:** Mean problems are sum problems: required total = mean × count, and the unknown is whatever is left over.
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
**fastest_path:** Favorable = 6 red + 2 yellow = 8 of 12 → 2/3.
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
**mistake_a:** 1/3 is the probability of blue (4/12) — the complement of the event, not the event.
**mistake_b:** 1/2 counts only the red marbles, forgetting the yellows belong to the event too.
**mistake_c:** 7/12 is a miscount of the favorable marbles: 6 + 2 = 8, not 7.
**mistake_e:** 3/4 = 9/12 counts one marble too many — recount the favorable groups.
**common_trap:** With mutually exclusive colors, "either A or B" is plain addition — the error here is almost always a dropped or double-counted group, not the method.
**takeaway:** When outcomes are mutually exclusive, P(A or B) = P(A) + P(B); verify the favorable count includes exactly the named groups.
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
**mistake_a:** 13 = 4 + 6 + 3. Adding counts the ways to pick ONE item from any course; sequential choices multiply.
**mistake_b:** 24 = 4 × 6 stops after appetizer and entree, leaving dessert out of the product.
**mistake_c:** 36 is a partial or garbled product (such as 6 × 3 × 2); each course contributes its own factor exactly once.
**mistake_d:** 54 = 6 × 9 misgroups the counts; keep the three factors separate: 4, 6, and 3.
**common_trap:** Adding instead of multiplying (13). Every appetizer pairs with every entree and every dessert, so the counts multiply.
**takeaway:** Independent sequential choices multiply: total = (ways for stage 1) × (ways for stage 2) × (ways for stage 3).
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
**fastest_path:** Sum = 100 → a + b + d = 42. Push b and d to their minimums (b = a + 1, d = 19): 2a + 20 = 42 → a = 11.
**explanation:** The arithmetic mean of a set of numbers equals the sum of the numbers divided by how many there are, and the median of an odd number of distinct values is the middle value when the values are listed in increasing order. Since the five integers are distinct, every inequality among them is strict.

Let the five distinct positive integers, listed in increasing order, be a, b, c, d, and e. Because the mean is 20, the sum of the five integers is 5 times 20, which is 100. The median is the middle value, so c = 18, and the largest value is e = 40.

Substituting these known values into the sum gives a + b + 18 + d + 40 = 100. Subtracting 58 from both sides yields a + b + d = 42.

The goal is to make a, the smallest integer, as large as possible. Because a + b + d is fixed at 42, increasing a requires making b and d as small as possible.

The value d lies strictly between the median and the largest integer, so d must be greater than 18. As an integer, the smallest value d can take is 19. The value b lies strictly between a and the median, and it must be distinct from a, so b must be at least a + 1; its smallest possible value is therefore a + 1.

Using these smallest possible values, a + (a + 1) + 19 = 42. This simplifies to 2a + 20 = 42, so 2a = 22 and a = 11.

This produces the set 11, 12, 18, 19, 40. The five values are distinct, their sum is 100 so the mean is 20, the middle value is 18, and the largest is 40, confirming that the greatest possible value of the smallest integer is 11.

The correct answer is C.
**mistake_a:** 1 is a possible smallest value, but the question asks for the greatest possible smallest value.
**mistake_b:** 5 leaves slack — pushing d down to 19 and b down to a + 1 frees more room for a than this.
**mistake_d:** 12 comes from relaxing distinctness entirely (b = a and d = 18). "Distinct" forces b ≥ a + 1 and d ≥ 19.
**mistake_e:** 17 only respects a < 18; it ignores the sum constraint, which caps a at 11.
**common_trap:** Forgetting strict inequalities. With distinct integers, "just above 18" means 19 and "just above a" means a + 1 — each constraint eats into the fixed total of 42.
**takeaway:** To maximize one element of a fixed-sum set, minimize all the others — and let distinctness dictate exactly how small each one can go.
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
**fastest_path:** Split the 8 values into halves: Q1 = (58 + 64)/2 = 61, Q3 = (82 + 88)/2 = 85 → IQR = 24.
**explanation:** The interquartile range (IQR) of a data set is defined as the difference between the third quartile and the first quartile, IQR = Q3 - Q1, where Q1 is the median of the lower half of the ordered data and Q3 is the median of the upper half. The IQR measures the spread of the middle 50 percent of the values.

The data set already appears in increasing order and contains 8 values: 52, 58, 64, 70, 76, 82, 88, 94. Because there is an even number of values, we split the data into two equal halves of four values each.

Let the lower half be the four smallest values, {52, 58, 64, 70}. Its median, Q1, is the average of the two middle values: Q1 = (58 + 64) / 2 = 122 / 2 = 61.

Let the upper half be the four largest values, {76, 82, 88, 94}. Its median, Q3, is the average of the two middle values: Q3 = (82 + 88) / 2 = 170 / 2 = 85.

We then compute the interquartile range: IQR = Q3 - Q1 = 85 - 61 = 24.

The correct answer is C.
**mistake_a:** 12 is half the IQR — usually from subtracting the wrong pair of quartile candidates in this evenly spaced list.
**mistake_b:** 21 is half the range, (94 - 52)/2 — a different statistic altogether.
**mistake_d:** 30 comes from using single values (58 and 88) as the quartiles instead of the median of each four-value half.
**mistake_e:** 42 is the full range, max - min. The IQR deliberately ignores the outer 25 percent on each end.
**common_trap:** Computing the range (42) or half-range (21) instead of Q3 - Q1. The IQR describes the middle 50 percent only.
**takeaway:** For 2n ordered values: Q1 = median of the bottom n, Q3 = median of the top n, IQR = Q3 - Q1.
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
**fastest_path:** New value = new mean + (old count × increase) = 25 + 10 × 1 = 35. (Or: 11 × 25 - 10 × 24.)
**explanation:** The arithmetic mean of a list of numbers equals the sum of the numbers divided by how many numbers there are. Equivalently, the sum of the numbers equals the mean multiplied by the count. This relationship is the governing principle, and it allows the unknown value to be recovered by comparing the total sum before and after the 11th number is added.

Let S be the sum of the original 10 numbers, and let x be the value of the 11th number. Because the original 10 numbers have a mean of 24, we have S = 10 × 24 = 240. After the 11th number is added, the list contains 11 numbers whose mean is 25, so the sum of all 11 numbers is 11 × 25 = 275.

The sum of all 11 numbers is also equal to the original sum plus the 11th number, that is, S + x = 240 + x. Setting the two expressions for the new sum equal to each other gives 240 + x = 275. Solving for x yields x = 275 − 240 = 35.

The correct answer is D.
**mistake_a:** 25 assumes the new number equals the new mean — but adding a 25 to a list averaging 24 nudges the mean to barely 24.1. The newcomer must exceed the new mean to drag ten other numbers upward.
**mistake_b:** 26 applies the 1-point shift only once; the correct adjustment adds it once per ORIGINAL number: 25 + 10(1).
**mistake_c:** 30 is a half-way estimate — compute 11 × 25 - 10 × 24 = 35 rather than guessing between the means.
**mistake_e:** 36 = 11 + 25 mashes the count and the mean together; the sums are 275 and 240, and their difference is 35.
**common_trap:** Believing the added value equals the new mean (25). To lift 10 numbers by 1 point each, the 11th must carry 10 extra points above the new mean.
**takeaway:** When adding one value moves the mean: added value = new mean + (number of old values) × (change in mean).
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
**fastest_path:** (7/12) × (6/11) = 7/22 — shrink both the black count and the total after the first draw.
**explanation:** The probability that two events both occur is the product of the probability of the first event and the conditional probability of the second event given that the first has occurred. Because the socks are drawn without replacement, the composition of the drawer changes after the first draw, so the second probability must be computed from the reduced contents.

The drawer initially contains 7 black socks and 5 white socks, for a total of 12 socks. Let the first event be drawing a black sock and the second event be drawing a black sock on the next draw.

For the first draw, there are 7 black socks among the 12 socks, so the probability of drawing a black sock is 7/12.

Given that a black sock has been drawn and not replaced, 6 black socks remain among a total of 11 socks. The probability of drawing a black sock on the second draw is therefore 6/11.

Multiplying the two probabilities gives the probability that both socks are black:

(7/12)(6/11) = 42/132 = 7/22.

The correct answer is B.
**mistake_a:** 7/24 = (7/12)(6/12) — the black count was reduced but the total was left at 12. Both shrink once a sock leaves the drawer.
**mistake_c:** 1/2 ignores the actual counts — neither draw has probability 1/2; black is 7 of 12, then 6 of 11.
**mistake_d:** 35/132 = (7/12)(5/11) — the 5 white socks crept into the second factor. After one black is removed, 6 blacks remain of 11 socks.
**mistake_e:** 49/144 = (7/12)² treats the draws as with-replacement; the second draw faces a changed drawer.
**common_trap:** Forgetting that without-replacement changes BOTH the numerator and the denominator on the second draw.
**takeaway:** Sequential draws without replacement: multiply along the branch, decrementing the favorable count and the total at each step.
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
**fastest_path:** Adding a constant shifts every value and the mean by the same amount → mean up by 5, spread untouched. No computation needed.
**explanation:** When the same constant is added to every member of a set of numbers, the mean increases by that constant, while the standard deviation, which measures the spread of the values about their mean, remains unchanged. The reasoning is that adding a constant shifts every value, and therefore the mean, by the identical amount, so each value's distance from the mean is preserved.

Let Set X = {8, 10, 12, 14, 16}. The mean of Set X is (8 + 10 + 12 + 14 + 16) / 5 = 60 / 5 = 12.

Set Y is formed by adding 5 to each element of Set X, so Set Y = {13, 15, 17, 19, 21}. The mean of Set Y is (13 + 15 + 17 + 19 + 21) / 5 = 85 / 5 = 17. Thus the mean of Set Y exceeds the mean of Set X by exactly 5, the constant that was added.

The standard deviation depends only on the deviations of the elements from their mean. For Set X, the deviations from the mean of 12 are 8 - 12 = -4, 10 - 12 = -2, 12 - 12 = 0, 14 - 12 = 2, and 16 - 12 = 4. For Set Y, the deviations from the mean of 17 are 13 - 17 = -4, 15 - 17 = -2, 17 - 17 = 0, 19 - 17 = 2, and 21 - 17 = 4. The two lists of deviations are identical, so the squared deviations, their average, and the square root of that average are identical as well. Therefore the two sets have the same standard deviation.

Set Y has a greater mean and the same standard deviation as Set X.

The correct answer is C.
**mistake_a:** Adding a constant slides the whole set without stretching it — the gaps between values, and hence the SD, are unchanged.
**mistake_b:** A shift cannot shrink the spread either; the deviations from the mean are identical before and after.
**mistake_d:** The means differ by exactly the 5 that was added; only the standard deviations match.
**mistake_e:** Reversed — the standard deviations are the same and the means are different.
**common_trap:** Conflating "add a constant" with "multiply by a constant." Only multiplication rescales the spread.
**takeaway:** x → x + k: mean up by k, SD unchanged. x → kx: mean times k, SD times |k|. These two rules settle most GMAT standard deviation questions without arithmetic.
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
**fastest_path:** Evenly spaced sets are symmetric, so mean = median automatically — statement (1) answers YES with no algebra.
**explanation:** The question asks whether the median of a set of 5 positive integers equals the mean. To resolve a yes/no question of this kind, a statement is sufficient only if it forces a single definite answer for every set it permits.

Statement (1): The 5 integers form an arithmetic sequence. Let the first term be a and the common difference be d, so the five terms in increasing order are a, a + d, a + 2d, a + 3d, and a + 4d. Because the count is odd, the median is the middle term, which is a + 2d. The mean is the sum of the five terms divided by 5: [a + (a + d) + (a + 2d) + (a + 3d) + (a + 4d)] / 5 = (5a + 10d) / 5 = a + 2d. Thus the mean equals a + 2d, which is exactly the median. The answer to the question is therefore YES for every arithmetic sequence, regardless of the values of a and d. Statement (1) is sufficient.

Statement (2): The smallest integer is 4 and the largest is 20. Consider the set {4, 5, 6, 7, 20}. Its median is 6, and its mean is (4 + 5 + 6 + 7 + 20) / 5 = 42 / 5 = 8.4, so the median does not equal the mean, giving the answer NO. Now consider the set {4, 8, 12, 16, 20}. Its median is 12, and its mean is (4 + 8 + 12 + 16 + 20) / 5 = 60 / 5 = 12, so the median equals the mean, giving the answer YES. Because the permitted sets yield both NO and YES, Statement (2) is not sufficient.

Statement (1) alone is sufficient and Statement (2) alone is not sufficient.

The correct answer is A.
**mistake_b:** Statement (2) fixes only the endpoints; {4, 5, 6, 7, 20} (median 6, mean 8.4) and {4, 8, 12, 16, 20} (median = mean = 12) both qualify, so (2) settles nothing.
**mistake_c:** You never need (2) — statement (1) already forces a YES on its own, so "both together" overshoots.
**mistake_d:** Statement (2) alone permits both answers (see the two sets above), so EACH-alone fails.
**mistake_e:** Statement (1) IS sufficient: every arithmetic sequence has mean = median by symmetry, regardless of its start or step.
**common_trap:** Discounting statement (1) because it contains "no numbers." Sufficiency asks whether the ANSWER is pinned down, not whether the values are.
**takeaway:** Evenly spaced set ⇒ mean = median = average of first and last. This identity alone resolves any "does mean equal median?" question.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Binomial Probability

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
**mistake_a:** 1/8 = 2/16 counts only two of the four positions the tail can occupy — there are C(4,3) = 4 orderings.
**mistake_b:** 3/16 uses 3 arrangements instead of C(4,3) = 4; the "choose which flips are heads" factor must be computed, not guessed.
**mistake_d:** 5/16 is P(at least 3 heads): the four 3-head sequences plus HHHH. "Exactly" excludes the 4-head case.
**mistake_e:** 3/8 = 6/16 uses C(4,2) — choosing positions for 2 heads rather than 3.
**common_trap:** Forgetting the arrangement factor entirely: (1/2)^4 = 1/16 is the chance of one PARTICULAR sequence; exactly-3-heads happens four ways.
**takeaway:** Exactly k heads in n fair flips: C(n,k)/2^n. Count the orderings before applying the per-sequence probability.
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
**fastest_path:** Adding one person creates exactly C(n,2) new committees (the newcomer plus any 2 others). C(n,2) = 21 → n(n-1) = 42 → n = 7 → C(7,3) = 35.
**explanation:** This is a counting problem governed by the combination formula: the number of ways to choose a committee of 3 from a group of m people is C(m, 3) = m! / (3!(m - 3)!). The question asks for the value of C(n, 3), so a statement is sufficient precisely when it pins down a single numerical value for that count.

Let n be the size of the original group. The number of possible committees is C(n, 3).

Consider statement (1). If the group had 1 additional person, the count would be C(n + 1, 3), and the stated increase translates into the equation C(n + 1, 3) - C(n, 3) = 21. By Pascal's identity, C(n + 1, 3) - C(n, 3) = C(n, 2). Hence C(n, 2) = 21, which gives n(n - 1) / 2 = 21, so that n(n - 1) = 42. Since n must be a positive integer with n at least 3, we solve n(n - 1) = 42, and because 7 times 6 equals 42 we obtain n = 7. The committee count is therefore C(7, 3) = 7! / (3! 4!) = (7 times 6 times 5) / (3 times 2 times 1), where the 6 in the numerator cancels the 3 times 2 in the denominator, leaving 7 times 5 = 35. This is a single determined value, so statement (1) is sufficient.

Consider statement (2). The condition n greater than 5 is consistent with n = 6, n = 7, n = 8, and infinitely many larger values, each producing a different count C(n, 3). Because the count is not uniquely determined, statement (2) is not sufficient.

Since statement (1) alone is sufficient and statement (2) alone is not, the answer is option A.

The correct answer is A.
**mistake_b:** n > 5 is compatible with n = 6, 7, 8, and beyond — each giving a different C(n,3) — so statement (2) pins nothing down.
**mistake_c:** Statement (1) needs no help: n(n-1) = 42 has exactly one integer solution with n ≥ 3, namely n = 7. Combining with (2) is unnecessary.
**mistake_d:** Statement (2) alone fails (infinitely many values of n survive), so EACH-alone is too strong.
**mistake_e:** Statement (1) does determine n: consecutive integers multiplying to 42 must be 7 and 6. Test an equation for a unique valid solution before declaring it insufficient.
**common_trap:** Expanding C(n+1,3) - C(n,3) with factorials. The combinatorial shortcut — every new committee contains the new person plus 2 of the original n — collapses the equation to C(n,2) = 21 in one step.
**takeaway:** In DS, an equation statement is sufficient when its solution is unique under the problem's constraints (here: integers, n ≥ 3). Verify uniqueness, then stop — never finish the computation unless it's needed.
**hint_nudge:** Every newly possible committee must include the added person.
**hint_strategy:** New committees = ways to choose the other 2 members from the original n, so the increase equals C(n,2).
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
**fastest_path:** Split on how many of the first 3 are chosen: C(3,2)·C(4,3) + C(3,3)·C(4,2) = 12 + 6 = 18.
**explanation:** Because the order in which the questions are selected does not matter, each selection is a combination, and the number of ways to choose r items from n is given by the combination C(n, r) = n! / [r!(n - r)!]. The requirement that the student answer at least 2 of the first 3 questions creates two mutually exclusive cases according to exactly how many of the first 3 questions are chosen, and the total count is the sum of the counts for these cases.

Let the 7 questions be divided into a first group of 3 questions and a second group of 4 questions. The student must choose 5 questions in all, with at least 2 of them coming from the first group. Since the first group contains only 3 questions, the number chosen from it is either exactly 2 or exactly 3.

Case 1: exactly 2 questions are chosen from the first group and the remaining 3 are chosen from the second group. The number of ways to choose 2 of the first 3 is C(3, 2) = 3, and the number of ways to choose 3 of the last 4 is C(4, 3) = 4. The number of selections in this case is therefore 3 × 4 = 12.

Case 2: all 3 questions are chosen from the first group and the remaining 2 are chosen from the second group. The number of ways to choose 3 of the first 3 is C(3, 3) = 1, and the number of ways to choose 2 of the last 4 is C(4, 2) = 6. The number of selections in this case is therefore 1 × 6 = 6.

The two cases cover every allowable selection without overlap, so the total number of different sets of 5 questions is 12 + 6 = 18.

The correct answer is A.
**mistake_b:** 20 misses or double-counts a case — there are exactly two: 2-from-3 with 3-from-4 (12 ways) and 3-from-3 with 2-from-4 (6 ways).
**mistake_c:** 21 = C(7,5) ignores the restriction entirely — it includes the 3 selections that take only one of the first three questions.
**mistake_d:** 24 doubles a case or adds a phantom one; lay the cases out explicitly before multiplying.
**mistake_e:** 28 lets first-group questions sneak back into the "remaining" pool, so some selections get counted under multiple cases. Keep the two pools separate.
**common_trap:** Ignoring "at least 2 of the first 3" (21), or reading it as "exactly 2" (12).
**takeaway:** "At least" restrictions in counting: enumerate the allowed exact counts, multiply within each case, add across mutually exclusive cases.
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
**fastest_path:** d must beat the median, so d ≥ 23. Test 23: a + b = 43 - 23 = 20 with a < b < 22 — e.g., 1 and 19. It works; done.
**explanation:** This problem is solved by translating the conditions on the average, median, and maximum into a single sum constraint and then optimizing under the requirement that the integers be distinct.

Let the five distinct positive integers, listed in increasing order, be a, b, c, d, and e, so that a < b < c < d < e. The median of five ordered values is the middle value, so c = 22. The largest value is e = 35. Because the average of the five integers is 20, their sum is 5 × 20 = 100.

Writing the sum and substituting the known values gives a + b + c + d + e = 100, so a + b + d = 100 − c − e = 100 − 22 − 35 = 43.

The quantity to be minimized is the second-largest integer, d. From a + b + d = 43, we have d = 43 − (a + b), so d is smallest when a + b is as large as possible. The integers must be distinct, which forces d > c = 22; since d is an integer, d ≥ 23.

We test the smallest permissible value, d = 23. Then a + b = 43 − 23 = 20, and we must choose distinct positive integers a < b with both less than c = 22. For example, a = 1 and b = 19 satisfy a < b < 22 and a + b = 20. The resulting set is {1, 19, 22, 23, 35}, whose sum is 1 + 19 + 22 + 23 + 35 = 100, confirming an average of 20, a median of 22, and a maximum of 35. Thus d = 23 is attainable.

The correct answer is B.
**mistake_a:** 22 would tie the median; distinct integers force the second-largest STRICTLY above 22.
**mistake_c:** 24 stops one short — 23 survives the feasibility check ({1, 19, 22, 23, 35} sums to 100).
**mistake_d:** 25 gives away two units of slack; the only hard floor on d is 23, and it is attainable.
**mistake_e:** 26 over-constrains; always test the boundary value before retreating to safer-looking numbers.
**common_trap:** Declaring the boundary impossible without testing it. Min/max questions are settled by constructing one explicit example at the boundary.
**takeaway:** Optimization with constraints: translate mean to sum, fix what is pinned (median, max), push every other element to its extreme, then verify with a concrete set.
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
**fastest_path:** SD scales by the multiplier only: 3 × 2 = 6. The +4 is a shift — irrelevant to spread.
**explanation:** When every value in a data set undergoes a linear transformation of the form y = ax + b, the spread of the data is affected only by the multiplicative constant. The governing principle is that the standard deviation satisfies SD(y) = |a| · SD(x); the additive constant b shifts each value by the same amount and therefore leaves the spread unchanged.

Let x denote a value in the original data set, which has mean 10 and standard deviation 2. Each value is multiplied by 3 and then increased by 4, so the transformed value is y = 3x + 4. Here the multiplicative constant is a = 3 and the additive constant is b = 4.

Applying the rule, the standard deviation of the new data set is SD(y) = |3| · SD(x) = 3 · 2 = 6. The addition of 4 does not enter this computation, because translating every value by the same constant moves the entire distribution without altering the distances between values.

The correct answer is C.
**mistake_a:** 2 treats both operations as shifts; multiplying by 3 stretches every gap threefold.
**mistake_b:** 3 is the multiplier itself, not the new SD — apply it to the old SD: 3 × 2.
**mistake_d:** 10 = 3 × 2 + 4 drags the additive constant into the SD; shifts move the whole set without widening it.
**mistake_e:** 22 = 3² × 2 + 4 mixes SD up with variance (and still adds the shift). Variance scales by a², SD by |a|.
**common_trap:** Applying the "+4" to the standard deviation. Additive constants change the mean, never the spread.
**takeaway:** For y = ax + b: SD(y) = |a|·SD(x), variance(y) = a²·var(x), mean(y) = a·mean(x) + b.
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
**fastest_path:** Count a clean partition: 13 hearts + 9 non-heart face cards = 22 → 22/52 = 11/26.
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
**mistake_a:** 1/4 counts only the hearts and ignores the face cards in the other three suits.
**mistake_b:** 3/13 counts only the 12 face cards and ignores the ten non-face hearts.
**mistake_d:** 25/52 = (13 + 12)/52 is the classic double-count: the jack, queen, and king of hearts got counted in both groups.
**mistake_e:** 1/2 = 26/52 inflates the count to 26 — a deck has 12 face cards, and 3 of them are already hearts.
**common_trap:** Adding P(heart) + P(face card) without subtracting the overlap; the three heart face cards would be counted twice (25/52).
**takeaway:** Overlapping events: P(A or B) = P(A) + P(B) - P(A and B) — or sidestep the formula by counting a non-overlapping partition directly.
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
**fastest_path:** Median of 7 values = the 4th in order. Statement (2) hands you exactly that value: 15.
**explanation:** The median of a data set is a positional measure: when the values are arranged in increasing order, the median is the middle value. For a set of n numbers with n odd, the median occupies position (n + 1)/2. Here n = 7, so the median is the value in position (7 + 1)/2 = 4, that is, the fourth number in the ordered list. The question is therefore answerable precisely when the fourth ordered value can be determined.

Consider Statement (1). Let the seven numbers have sum 84. This fixes the mean at 84/7 = 12, but the mean is an arithmetic measure that places no constraint on the fourth ordered value. For instance, the set {12, 12, 12, 12, 12, 12, 12} sums to 84 and has median 12, whereas the set {0, 0, 0, 1, 20, 21, 42} also sums to 84 yet has median 1. Two admissible data sets with the same sum produce different medians, so the median is not determined. Statement (1) alone is not sufficient.

Consider Statement (2). Let the numbers be written in increasing order. The fourth number in that ordering is given to be 15. Because the median of seven ordered numbers is exactly the fourth value, the median equals 15. This single fact determines the median uniquely, regardless of the other six values. Statement (2) alone is sufficient.

The correct answer is B.
**mistake_a:** Reversed. The sum (statement 1) fixes the mean at 12 but not the median — {12, 12, 12, 12, 12, 12, 12} and {0, 0, 0, 1, 20, 21, 42} share the sum 84 with medians 12 and 1.
**mistake_c:** Statement (2) needs no help from (1); once the 4th ordered value is known, the median is known.
**mistake_d:** Statement (1) alone fails — many sets share a sum yet differ in median.
**mistake_e:** Statement (2) alone succeeds, so "together not sufficient" cannot be right.
**common_trap:** Assuming sum or mean information constrains the median. Mean and median are independent: one is arithmetic, the other positional.
**takeaway:** Median questions reduce to "can I pin the middle position?" Information about totals rarely can; information about order usually can.
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
**fastest_path:** Imagine 1,000 products: P makes 600 with 18 defective; Q makes 400 with 20 defective. P's share of defectives = 18/38 = 9/19.
**explanation:** This problem is governed by the rule for conditional probability, often applied through Bayes' reasoning: for events A and B, P(A | B) = P(A and B) / P(B). The required probability is the proportion of all defective products that originate at Factory P, so the task is to compute the probability that a product is both from Factory P and defective, and then divide by the total probability that a product is defective.

Let the company's total output be the sample space. The given information establishes the prior probabilities and conditional defect rates. The probability that a randomly selected product comes from Factory P is P(P) = 0.60, and the probability that it comes from Factory Q is P(Q) = 0.40. The conditional probability that a product is defective given that it came from Factory P is P(D | P) = 0.03, and the conditional probability that a product is defective given that it came from Factory Q is P(D | Q) = 0.05.

We first find the probability of each joint event by multiplying the prior probability of the factory by its conditional defect rate. For Factory P, P(P and D) = P(P) times P(D | P) = 0.60 times 0.03 = 0.018. For Factory Q, P(Q and D) = P(Q) times P(D | Q) = 0.40 times 0.05 = 0.020.

Since a defective product must come from exactly one of the two factories, the total probability that a product is defective is the sum of these two joint probabilities: P(D) = P(P and D) + P(Q and D) = 0.018 + 0.020 = 0.038.

Applying the conditional probability rule yields P(P | D) = P(P and D) / P(D) = 0.018 / 0.038. Multiplying numerator and denominator by 1,000 gives 18 / 38, and dividing both by 2 gives 9 / 19.

The correct answer is C.
**mistake_a:** 3/19 carries the raw 3% defect rate into the final ratio; the rate must first be weighted by P's 60% share of output.
**mistake_b:** 6/19 = 12/38 weights P's defect rate by the wrong share (40%) while keeping the correct total.
**mistake_d:** 10/19 = 20/38 is the complement — the probability the defective product came from factory Q.
**mistake_e:** 12/19 reflects a blended or misplaced rate; build the 18-versus-20 defective counts explicitly and the ratio falls out.
**common_trap:** Intuiting that the factory with the LOWER defect rate cannot be the likelier source. Volume matters: P's 60% share nearly offsets its lower rate. The question asks for P's share of defectives, not its defect rate.
**takeaway:** For "given that..." reversals, skip the Bayes formula: pick a convenient population, build the two-way counts, and divide within the given group.
**hint_nudge:** "Given that it is defective" shrinks the world to defective products only.
**hint_strategy:** Suppose 1,000 products were made. Count the defectives contributed by each factory, then take P's share.
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
**explanation:** The range of a data set is a measure of spread, defined as the difference between the largest and smallest values in the set: Range = maximum value minus minimum value. This quantity describes the total width of the data, in contrast to the mean or median, which describe its center.

Let the data set be the 9 test scores listed in ascending order: 42, 55, 61, 68, 73, 78, 82, 86, 94. Because the values are already sorted, the minimum is the first entry and the maximum is the last entry. Thus the minimum value is 42 and the maximum value is 94.

Applying the definition of range, we subtract the minimum from the maximum:

Range = 94 minus 42 = 52.

The correct answer is B.
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
**explanation:** This is a data sufficiency question, so the task is to determine whether each statement, alone or in combination, fixes the answer to the question "Is the standard deviation of data set S greater than the standard deviation of data set T?" The governing principle is that the standard deviation of a data set measures the typical distance of the values from their mean, and it is not determined by either the range or the mean. The range reflects only the gap between the largest and smallest values, and the mean reflects only the center of the data. Two data sets can therefore agree on range or on mean while differing in standard deviation, and they can also disagree on range or on mean while sharing the same standard deviation. A statement is sufficient only if every data configuration consistent with it yields the same yes-or-no answer; if some consistent configurations answer "yes" and others answer "no," the statement is insufficient.

Consider statement (1), which asserts that the range of S exceeds the range of T. To test sufficiency, we seek two configurations consistent with this statement that give opposite answers. Let S = {0, 5, 5, 5, 5, 5, 5, 5, 5, 10} and let T = {1, 1, 1, 1, 9, 9, 9, 9}. The range of S is 10 minus 0, which equals 10, and the range of T is 9 minus 1, which equals 8, so the range of S exceeds the range of T, consistent with statement (1). The mean of S is (0 + 5 times 8 + 10) divided by 10, which is 50 divided by 10, equal to 5; the deviations from the mean are 5 for the value 0, 5 for the value 10, and 0 for each of the eight values equal to 5, so the variance is (5 squared + 5 squared) divided by 10, which is 50 divided by 10, equal to 5, and the standard deviation of S is the square root of 5, approximately 2.24. The mean of T is (1 times 4 + 9 times 4) divided by 8, which is 40 divided by 8, equal to 5; each value deviates from the mean by exactly 4, so the variance is 4 squared, equal to 16, and the standard deviation of T is 4. Here S has the larger range yet the smaller standard deviation, giving the answer "no." Because the range can be enlarged by a single extreme value without spreading the bulk of the data, other configurations consistent with statement (1) can instead give the answer "yes." Statement (1) is therefore not sufficient.

Consider statement (2), which asserts that the mean of S exceeds the mean of T. The mean locates the center of a data set and conveys nothing about how widely the values are dispersed about that center. A data set with a large mean can be tightly clustered, and a data set with a small mean can be widely spread, so the comparison of means is consistent with the standard deviation of S being greater, equal to, or less than that of T. Statement (2) is therefore not sufficient.

Now consider both statements together, which require that the range of S exceed the range of T and that the mean of S exceed the mean of T. Adding the same constant to every element of a data set shifts its mean by that constant while leaving its range and its standard deviation unchanged. Starting from any pair of data sets that satisfies statement (1), we can add a sufficiently large constant to every element of S so that the mean of S also exceeds the mean of T, thereby satisfying statement (2) as well, all while preserving the ranges and standard deviations. The configuration above in which S has the smaller standard deviation can thus be adjusted to satisfy both statements and still answer "no," while a configuration in which S has the larger standard deviation can likewise be adjusted to satisfy both statements and answer "yes." The two statements together still permit opposite answers and are therefore not sufficient.

The correct answer is E.
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
**explanation:** The expected net gain is found by summing, over every possible outcome, the product of that outcome's probability and its net value. We must account for both the case in which the ticket wins and the case in which it loses.

Let the cost of the ticket be $5. Because one winning ticket is drawn at random from 100 tickets, the probability that the chosen ticket wins is 1/100, and the probability that it loses is 99/100.

We translate each outcome into a net gain. If the ticket wins, the buyer receives the $200 prize but has paid $5, so the net gain is 200 - 5 = 195 dollars. If the ticket loses, the buyer receives nothing and has paid $5, so the net gain is -5 dollars.

We then compute the expected value by weighting each net gain by its probability:

Expected value = (1/100)(195) + (99/100)(-5).

Evaluating each term gives (1/100)(195) = 1.95 and (99/100)(-5) = -4.95. Adding these:

1.95 + (-4.95) = -3.00.

Thus the expected net gain for a person who buys one ticket is -$3.00.

The correct answer is B.
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
**explanation:** When a point is selected uniformly at random along a line segment, the probability that it lands within a particular subinterval equals the ratio of the length of that subinterval to the length of the entire segment. The governing principle is therefore P = (length of the favorable interval) / (length of the total segment).

Let the entire segment extend from 0 to 30, so its total length is 30 - 0 = 30. The favorable region is the subinterval from 6 to 18, whose length is 18 - 6 = 12. Note that the relevant quantity is the length of this interval, obtained by subtracting its endpoints, not either endpoint value by itself.

Applying the principle gives

P = 12 / 30 = 2/5.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q31
**difficulty:** Medium
**type:** Problem Solving
**topic:** Interquartile Range — Linear Transformation

List K consists of 8 numbers and has an interquartile range of 24. List L is formed by multiplying each number in List K by 2 and then subtracting 5 from each result. What is the interquartile range of List L?

- A) 19
- B) 24
- C) 43
- D) 48
- E) 53

**answer:** D
**fastest_path:** Spread measures scale with the multiplier and ignore shifts: IQR of L = 2 × 24 = 48.
**explanation:** The interquartile range is Q3 - Q1, the width of the middle 50 percent of the data. The question asks how that width responds when every value undergoes the same linear transformation, x → 2x - 5.

Because every value is transformed identically, the ordering of the list is preserved, and each quartile is transformed right along with the values it summarizes: the new third quartile is 2·Q3 - 5 and the new first quartile is 2·Q1 - 5.

Subtracting gives the new interquartile range:

IQR of L = (2·Q3 - 5) - (2·Q1 - 5) = 2(Q3 - Q1) = 2 × 24 = 48.

The -5 cancels in the subtraction: shifting every value down by 5 slides the whole list without changing any distance within it. Only the multiplication by 2, which doubles every gap, affects the spread.

The correct answer is D.
**mistake_a:** 19 = 24 - 5 applies the shift to the IQR itself; both quartiles drop by 5, so their difference is untouched.
**mistake_b:** 24 treats the IQR as immune to multiplication as well as shifts — only additive shifts leave spread unchanged; scaling by 2 doubles it.
**mistake_c:** 43 = 2 × 24 - 5 correctly doubles but then subtracts the shift; the -5 cancels when Q1 is subtracted from Q3.
**mistake_e:** 53 = 2 × 24 + 5 doubles and then adds the shift with the sign flipped; no version of the shift belongs in a spread measure.
**common_trap:** Carrying the -5 into the answer. Every "difference" statistic (range, IQR, standard deviation) is blind to additive shifts because the shift hits both ends equally.
**takeaway:** Under x → ax + b, every spread measure (range, IQR, SD) is multiplied by |a| and ignores b; every location measure (mean, median, quartiles) becomes a·(old value) + b.
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
**explanation:** The probability that at least one of two events occurs is governed by the addition rule, which states that for any two events X and Y, P(X or Y) = P(X) + P(Y) - P(X and Y). The term P(X and Y) is subtracted to avoid counting the overlap of the two events twice.

The events X and Y are described as mutually exclusive, meaning they cannot both occur. The probability that both occur is therefore zero, so P(X and Y) = 0.

Let P(X) = 0.3 and P(Y) = 0.4. Substituting these values, together with P(X and Y) = 0, into the addition rule gives the probability that at least one of the two events occurs:

P(X or Y) = P(X) + P(Y) - P(X and Y)
P(X or Y) = 0.3 + 0.4 - 0
P(X or Y) = 0.70

The correct answer is D.
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
**explanation:** When two events are independent, the occurrence of one has no effect on the probability of the other, so the probability that both occur equals the product of their individual probabilities. This is the multiplication rule for independent events: for independent events A and B, P(A and B) = P(A) × P(B).

Let P(A) = 0.6 and P(B) = 0.3 denote the given individual probabilities, and note that A and B are stated to be independent. The quantity sought is the joint probability that both A and B occur, namely P(A and B).

Applying the multiplication rule for independent events gives:

P(A and B) = P(A) × P(B)
P(A and B) = 0.6 × 0.3
P(A and B) = 0.18

The correct answer is A.
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
**explanation:** The expected value of a single trial is the sum, over all possible outcomes, of each outcome's payoff multiplied by its probability. For this sum to be valid, the outcomes must partition the sample space, so their probabilities must total 1.

A standard deck contains 52 cards, divided equally among four suits of 13 cards each. Let the three outcomes be drawing a heart, drawing a black card (a spade or a club), and drawing a diamond. The hearts number 13, so the probability of a heart is 13/52 = 1/4. The black cards comprise the 13 spades and the 13 clubs, a total of 26 cards, so the probability of a black card is 26/52 = 1/2. The diamonds number 13, so the probability of a diamond is 13/52 = 1/4. These probabilities sum to 1/4 + 1/2 + 1/4 = 1, confirming that the three outcomes form a complete partition of the deck.

The associated payoffs are a gain of $5 for a heart, a gain of $2 for a black card, and a loss of $3 for a diamond. The expected value is therefore

EV = (1/4)(5) + (1/2)(2) + (1/4)(-3).

Evaluating each term gives (1/4)(5) = 5/4, (1/2)(2) = 1, and (1/4)(-3) = -3/4. Summing these,

EV = 5/4 + 1 - 3/4 = (5/4 - 3/4) + 1 = 2/4 + 1 = 1/2 + 1 = 1.50.

Thus the expected value of one draw is $1.50.

The correct answer is D.
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
**explanation:** This problem is governed by the definition of conditional probability: for events A and B with P(B) greater than 0, the probability of A given B equals the number of outcomes satisfying both A and B divided by the number of outcomes satisfying B. Equivalently, conditioning on B restricts the sample space to only those outcomes in which B occurs.

Here the conditioning event is that the selected employee holds an MBA, so the relevant sample space is the set of all MBA holders, not the full set of 200 employees. We let A denote the event that the employee works in the analytics division and B denote the event that the employee holds an MBA.

First we count the MBA holders in each division. The analytics division has 120 employees, of whom 25 percent hold an MBA, giving 120 times 0.25 equals 30 analytics employees with an MBA. The operations division has 80 employees, of whom 15 percent hold an MBA, giving 80 times 0.15 equals 12 operations employees with an MBA.

The total number of employees who hold an MBA is therefore 30 plus 12 equals 42. This is the size of the restricted sample space, that is, the number of outcomes satisfying the conditioning event B.

Of these 42 MBA holders, the number who also work in analytics, satisfying both A and B, is 30. The conditional probability is then the number satisfying both conditions divided by the number satisfying the given condition: 30 divided by 42, which reduces to 5/7.

The correct answer is C.
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
**explanation:** The event in question is governed by the binomial probability model, which applies whenever a fixed number of independent trials each yield one of two outcomes (success or failure) with a constant probability of success. The probability of obtaining exactly k successes in n such trials is given by

P(exactly k successes) = C(n, k) * p^k * (1 - p)^(n - k),

where C(n, k) is the number of ways to choose which k of the n trials are the successes, p is the probability of success on a single trial, and (1 - p) is the probability of failure on a single trial.

Let a success denote a patient responding to the treatment. The number of trials is n = 3, the number of required successes is k = 2, and the success probability is p = 0.7, so the failure probability is 1 - p = 0.3. Substituting these values into the formula gives

P = C(3, 2) * (0.7)^2 * (0.3)^1.

The combinatorial factor is C(3, 2) = 3, since there are three ways to choose which two of the three patients respond. Evaluating the remaining factors yields (0.7)^2 = 0.49 and (0.3)^1 = 0.30. Therefore

P = 3 * 0.49 * 0.30 = 3 * 0.147 = 0.441.

The correct answer is D.
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
**explanation:** This problem is governed by the inclusion-exclusion principle, which states that for two overlapping groups the number of customers in at least one group equals the size of the first group plus the size of the second group minus the size of the overlap, so that the customers counted in both groups are not counted twice. The number who bought neither product is then the total number of customers minus the number who bought at least one product.

Let T = 120 be the total number of customers surveyed. Let A be the number who bought Product A, so A = 72, and let B be the number who bought Product B, so B = 54. Let the number who bought both products be the intersection, so |A ∩ B| = 30.

The number who bought at least one of the two products is the union, computed as

|A ∪ B| = A + B − |A ∩ B| = 72 + 54 − 30 = 126 − 30 = 96.

The number who bought neither product is the total minus those who bought at least one:

Neither = T − |A ∪ B| = 120 − 96 = 24.

The correct answer is D.
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
**explanation:** The standard deviation of a data set measures the typical distance of its values from the mean: the larger the deviations of the values from the mean, the larger the standard deviation. Because both sets are stated to have the same mean of 6 and the same number of values (7), the comparison reduces entirely to how far each set's values lie from 6.

Let the mean of each set be m = 6, and consider the deviation of each value from the mean. The standard deviation is determined by the sum of the squared deviations, since for n values the standard deviation equals the square root of (the sum of the squared deviations divided by n), and here n is the same for both sets.

For set P = {1, 4, 4, 6, 8, 8, 11}, the deviations from 6 are -5, -2, -2, 0, 2, 2, and 5. Squaring each gives 25, 4, 4, 0, 4, 4, and 25, and their sum is
25 + 4 + 4 + 0 + 4 + 4 + 25 = 66.

For set Q = {4, 4, 5, 6, 7, 8, 8}, the deviations from 6 are -2, -2, -1, 0, 1, 2, and 2. Squaring each gives 4, 4, 1, 0, 1, 4, and 4, and their sum is
4 + 4 + 1 + 0 + 1 + 4 + 4 = 18.

Since the sum of squared deviations for P (66) exceeds that for Q (18), and both sets are divided by the same n = 7 before taking the square root, the standard deviation of P is greater than the standard deviation of Q. This larger spread arises because P's values lie further from the mean than Q's values do: P's extremes, 1 and 11, are each 5 units from 6, whereas Q's extremes, 4 and 8, are each only 2 units from 6.

The correct answer is C.
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
**explanation:** This is a conditional probability problem. When a member is chosen at random from a subgroup defined by a condition, the probability of belonging to a given category equals the number of members satisfying both the condition and that category, divided by the total number of members satisfying the condition. Here the condition is "experienced relief," and the category of interest is "received Drug A."

First, find how many patients in each drug group experienced relief. The number of Drug A patients who experienced relief is 200 × 0.15 = 30. The number of Drug B patients who experienced relief is 100 × 0.45 = 45.

The total number of patients who experienced relief is therefore 30 + 45 = 75. Since the selected patient is drawn at random from those who experienced relief, the probability that this patient received Drug A is the ratio of Drug A relief patients to all relief patients:

30 / 75 = 2/5.

The correct answer is B.
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
**explanation:** This problem applies the two rules governing how the mean and standard deviation of a data set respond to a linear transformation. For any transformation of the form n = a*m + b applied to every element of a set: the mean is transformed in the same way, becoming a*(mean) + b, while the standard deviation is multiplied by the absolute value of the scaling factor, becoming |a|*(standard deviation). The additive constant b shifts every value by the same amount and therefore leaves all deviations from the mean unchanged, so it does not affect the standard deviation.

Let m denote a typical element of set M, with mean equal to the Greek letter mu and standard deviation equal to the Greek letter sigma. Set N is formed by multiplying every element of M by 3 and then subtracting 6, so each element of N is n = 3m - 6. Here the scaling factor is a = 3 and the additive constant is b = -6.

Applying the mean rule gives Mean of N = 3*mu + (-6) = 3*mu - 6.

Applying the standard deviation rule gives SD of N = |3|*sigma = 3*sigma. The constant -6 does not enter the standard deviation, because shifting every value by the same amount does not change the spread.

These results can be confirmed numerically. The mean of M is (4 + 8 + 14 + 18 + 22) / 5 = 66 / 5 = 13.2, so the mean of N is 3(13.2) - 6 = 39.6 - 6 = 33.6, which equals 3*mu - 6. The deviations of the elements of M from 13.2 are -9.2, -5.2, 0.8, 4.8, and 8.8. After the transformation, the corresponding deviations in N are -27.6, -15.6, 2.4, 14.4, and 26.4, each exactly 3 times the original, confirming that the standard deviation is tripled.

Thus Mean of N = 3*mu - 6 and SD of N = 3*sigma.

The correct answer is C.
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
**related_reading:** reading-quant-06-statistics-probability-combinatorics

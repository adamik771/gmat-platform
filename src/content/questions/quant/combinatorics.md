---
section: Quant
topic: Combinatorics
---

## Q1

**difficulty:** Easy
**type:** Problem Solving
**topic:** Enumeration


Three friends — Ana, Ben, and Cal — line up for a photo. In how many different orders can they stand?

- A) 3
- B) 4
- C) 6
- D) 8
- E) 9

**answer:** C
**explanation:** This problem concerns arranging distinct objects in a sequence, where the order of the objects matters. The governing principle is the fundamental counting principle: when a task is completed through a series of independent choices, the total number of outcomes equals the product of the number of options available at each choice.

Let the three positions in the line be the first, second, and third spots. We fill these positions one at a time. For the first position, any of the three friends may be chosen, giving 3 options. Once the first position is filled, two friends remain, so the second position can be filled in 2 ways. After the first two positions are assigned, only one friend remains, so the third position can be filled in exactly 1 way.

Applying the fundamental counting principle, the total number of distinct orders is the product of these choices:

3 x 2 x 1 = 6.

Equivalently, the number of arrangements of 3 distinct items is 3! = 3 x 2 x 1 = 6.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q2

**difficulty:** Easy
**type:** Problem Solving
**topic:** Enumeration


Four books are placed on a shelf. How many arrangements are possible if one specific book must be first?

- A) 6
- B) 8
- C) 12
- D) 18
- E) 24

**answer:** A
**explanation:** This problem is governed by the multiplication principle for arranging distinct objects in ordered positions, together with the observation that fixing one object in a particular position simply removes it and its position from the counting.

Let the four distinct books occupy four positions on the shelf, read from left to right. The condition requires that one specific book be placed first, so that book is assigned to position 1 in exactly one way, and the constraint is fully satisfied by that single assignment.

The remaining three positions must be filled by the remaining three distinct books, with no further restrictions. The number of ways to arrange three distinct objects in three ordered positions is 3!.

Computing the value, we have 3! = 3 × 2 × 1 = 6.

Therefore the total number of arrangements in which the specified book is first is 6.

The correct answer is A.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q3

**difficulty:** Easy
**type:** Problem Solving
**topic:** Permutations


From a group of 7 candidates, how many ways can a president and a vice-president be chosen (order matters)?

- A) 14
- B) 21
- C) 42
- D) 49
- E) 5040

**answer:** C
**explanation:** Because the president and vice-president are distinct positions, the order in which the two chosen candidates are assigned matters; this is therefore a permutation of 7 candidates taken 2 at a time, denoted P(7, 2). The governing principle is the fundamental counting principle: when a selection is made in successive stages, the total number of outcomes is the product of the number of choices available at each stage.

Let the first stage be the selection of the president and the second stage be the selection of the vice-president. There are 7 candidates available for the office of president, so the president can be chosen in 7 ways. Once the president is fixed, only 6 candidates remain eligible for the office of vice-president, so the vice-president can be chosen in 6 ways.

Applying the fundamental counting principle, the total number of ways to fill both offices is the product of the choices at the two stages:

7 × 6 = 42.

Equivalently, P(7, 2) = 7! / (7 − 2)! = 7! / 5! = 7 × 6 = 42.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q4

**difficulty:** Easy
**type:** Problem Solving
**topic:** Combinations


A team of 3 is picked from a group of 6 students. How many different teams are possible?

- A) 15
- B) 18
- C) 20
- D) 60
- E) 120

**answer:** C
**explanation:** Because a team is defined solely by its membership and the order in which members are chosen does not matter, this is a problem of combinations rather than permutations. The number of ways to choose k objects from a set of n distinct objects, without regard to order, is given by C(n, k) = n! / (k! (n - k)!).

Let n = 6 be the number of students in the group, and let k = 3 be the number of students selected for the team. We must compute C(6, 3).

Substituting the values into the formula gives C(6, 3) = 6! / (3! (6 - 3)!) = 6! / (3! 3!).

Expanding the factorials, we have 6! = 720, 3! = 6, and 3! = 6. Therefore C(6, 3) = 720 / (6 * 6) = 720 / 36 = 20.

Thus there are 20 different teams of 3 that can be picked from the group of 6 students.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q5

**difficulty:** Easy
**type:** Problem Solving
**topic:** Combinations


A pizza shop offers 8 toppings. How many different 2-topping pizzas are possible?

- A) 16
- B) 28
- C) 40
- D) 56
- E) 64

**answer:** B
**explanation:** Because a pizza is determined by the set of toppings chosen rather than by the order in which they are listed, the situation calls for a combination rather than a permutation: selecting pepperoni and then mushroom yields the same pizza as selecting mushroom and then pepperoni. The number of ways to choose k items from n distinct items without regard to order is given by C(n, k) = n! / (k! (n - k)!).

Let n = 8 be the number of available toppings and let k = 2 be the number of toppings on each pizza. The number of distinct 2-topping pizzas is therefore C(8, 2).

Applying the formula, we have C(8, 2) = (8 * 7) / (2 * 1) = 56 / 2 = 28.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q6

**difficulty:** Easy
**type:** Problem Solving
**topic:** Permutations


The letters of the word GAMES are rearranged. How many distinct arrangements are possible?

- A) 24
- B) 60
- C) 120
- D) 240
- E) 720

**answer:** C
**fastest_path:** All five letters of GAMES are different, so nothing is divided out - the answer is simply 5! = 120.
**explanation:** The number of distinct arrangements of a collection of distinct objects is given by the factorial of the number of objects: n objects can be ordered in n! ways. Let n denote the number of letters in the word GAMES. The word consists of the letters G, A, M, E, and S, all of which are distinct, so n = 5. Because no letter repeats, no adjustment for indistinguishable items is required, and the number of distinct arrangements is therefore 5!. Computing this value gives 5! = 5 * 4 * 3 * 2 * 1 = 120.

The correct answer is C.
**mistake_a:** 24 = 4!. This drops a letter or applies the circular formula (n-1)!; a straight-line arrangement of 5 distinct letters is 5!, not 4!.
**mistake_b:** 60 = 5!/2. You divide by 2! only when a letter repeats, but G, A, M, E, S are all distinct, so no division applies.
**mistake_d:** 240 = 2 x 5!. There is no second factor to multiply by here; 5! already counts every arrangement exactly once.
**mistake_e:** 720 = 6!. GAMES has 5 letters, not 6 - count the letters before taking the factorial.
**common_trap:** Reflexively dividing by 2! because it is a word, or miscounting the letters. Confirm how many letters there are and whether any repeat before applying the formula.
**takeaway:** Arrangements of a word: n! when all letters are distinct; divide by the factorial of each repeated letter's count when there are repeats.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q7

**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations


A committee of 4 is chosen from 10 people. How many possible committees are there?

- A) 40
- B) 210
- C) 240
- D) 2520
- E) 5040

**answer:** B
**fastest_path:** A committee has no internal ranking, so this is C(10,4). Cancel as you go: (10 x 9 x 8 x 7)/(4 x 3 x 2 x 1) = 210.
**explanation:** Because a committee is an unordered selection of people, where the order in which members are chosen does not matter, the number of possible committees is given by the combinations formula. We must count the number of ways to choose 4 people from a group of 10 without regard to order, which is C(10, 4).

Let n = 10 be the total number of people and let k = 4 be the size of the committee. The combinations formula gives

C(n, k) = n! / (k! (n - k)!).

Substituting n = 10 and k = 4,

C(10, 4) = 10! / (4! 6!).

We write out the numerator down to the point where it cancels with 6!:

C(10, 4) = (10 * 9 * 8 * 7) / (4 * 3 * 2 * 1).

The numerator equals 10 * 9 * 8 * 7 = 5040, and the denominator equals 4 * 3 * 2 * 1 = 24. Therefore

C(10, 4) = 5040 / 24 = 210.

The correct answer is B.
**mistake_a:** 40 = 10 x 4. Multiplying the group size by the pick size is not a counting method; use the combination formula.
**mistake_c:** 240 does not come from a standard count here; it is a magnitude-plausible trap. Re-derive with C(10,4) rather than estimating.
**mistake_d:** 2520 = 5040/2, an incomplete correction: you divided P(10,4) by 2! instead of by 4!, the number of orderings of a 4-person group.
**mistake_e:** 5040 = P(10,4). This treats the committee as ordered; since the four members hold no ranks, divide by 4! to get C(10,4).
**common_trap:** Counting an unordered committee as if order mattered (using P instead of C). Whenever the result is a team, group, or committee with no titles, divide out the internal orderings.
**takeaway:** No roles means combination C(n,k). Distinct roles means permutation, or C(n,k) times the arrangements of the roles.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q8

**difficulty:** Medium
**type:** Problem Solving
**topic:** Restrictions


In how many arrangements of the letters in LESSON do the two S's appear next to each other?

- A) 60
- B) 120
- C) 240
- D) 360
- E) 720

**answer:** B
**fastest_path:** Glue the two S's into one block, then arrange the 5 units L, E, [SS], O, N: 5! = 120. The S's are identical, so the block adds no internal orderings.
**explanation:** When two specified items must occupy adjacent positions, we may treat them as a single combined unit, arrange all of the resulting units, and then account for any distinct orderings within the combined unit. The word LESSON contains the six letters L, E, S, S, O, N, among which the two S's are identical.

To force the two S's to be adjacent, we bind them together into one block, which we denote by [SS]. The objects to be arranged are then this block together with the four remaining letters L, E, O, and N, giving five distinct objects in total.

The number of arrangements of five distinct objects is 5! = 5 × 4 × 3 × 2 × 1 = 120.

Because the two letters inside the block are identical S's, interchanging them produces no new arrangement, so the block contributes no additional internal orderings. Therefore the total number of arrangements in which the two S's appear next to each other is 120.

The correct answer is B.
**mistake_a:** 60 = 5!/2. After forming the block there is nothing left to divide by - the remaining letters L, E, O, N are all distinct.
**mistake_c:** 240 = 5! x 2!. This treats the two S's inside the block as distinguishable; identical letters contribute no extra internal arrangements.
**mistake_d:** 360 is the total number of distinct arrangements of LESSON with no adjacency condition. You answered a different question - only those with the S's together are wanted.
**mistake_e:** 720 = 6!. This treats all six letters as distinct, ignoring that the two S's are identical.
**common_trap:** Multiplying by 2! for the block out of habit. Multiply by the block's internal orderings only when the items inside are distinct; identical items add nothing.
**takeaway:** Adjacency means the block method: arrange the units, then multiply by the orderings inside the block - 1 for identical items and k! for k distinct items.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q9

**difficulty:** Medium
**type:** Problem Solving
**topic:** Restrictions


Six people sit in a row of 6 chairs. If Ana and Ben refuse to sit next to each other, how many seating arrangements are possible?

- A) 240
- B) 360
- C) 480
- D) 600
- E) 720

**answer:** C
**fastest_path:** Complement: total 6! = 720 minus the arrangements with Ana and Ben together. Glue them: 5! x 2 = 240, so 720 - 240 = 480.
**explanation:** The most efficient approach to a counting problem involving a forbidden adjacency is the method of complementary counting: we count the total number of arrangements without restriction and then subtract those arrangements that violate the condition. The number of valid arrangements is therefore the total minus the number in which Ana and Ben sit next to each other.

Let T denote the total number of ways to seat the six people in the row of six chairs with no restriction, and let A denote the number of those arrangements in which Ana and Ben are seated next to each other. The desired count is T - A.

With no restriction, the six distinct people can be ordered in the six chairs in 6! ways. Thus

T = 6! = 720.

To count the arrangements in which Ana and Ben are adjacent, we treat the pair as a single combined block. This block, together with the remaining four people, gives five units to be arranged in the row, which can be ordered in 5! ways. Within the block, Ana and Ben can be arranged in 2 ways, namely Ana-Ben or Ben-Ana. Therefore

A = 5! * 2 = 120 * 2 = 240.

Subtracting the forbidden arrangements from the total gives

T - A = 720 - 240 = 480.

The correct answer is C.
**mistake_a:** 240 is the number of arrangements where Ana and Ben ARE adjacent - the quantity you subtract, not the final answer.
**mistake_b:** 360 = 720/2. Halving is not the right adjustment; the forbidden count is 5! x 2 = 240, not half of everything.
**mistake_d:** 600 = 720 - 120. You subtracted 5! but forgot that the Ana-Ben block has 2 internal orders, so the forbidden count is 5! x 2 = 240.
**mistake_e:** 720 = 6!, the unrestricted total. This ignores the not-next-to-each-other condition entirely.
**common_trap:** Forgetting the x2 internal ordering of the adjacent block, or reporting the together count instead of subtracting it.
**takeaway:** For a forbidden adjacency, compute total minus together; the together count is (units)! times the block's internal orderings.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q10

**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations


From 5 men and 4 women, a committee of 3 must be formed with exactly 2 men and 1 woman. How many such committees are possible?

- A) 20
- B) 30
- C) 40
- D) 60
- E) 84

**answer:** C
**fastest_path:** Independent choices, so multiply: C(5,2) for the men times C(4,1) for the women = 10 x 4 = 40.
**explanation:** This is a counting problem in which a committee must satisfy two simultaneous requirements, and the governing principle is the fundamental counting principle together with the combinations formula. When a selection is made by performing one independent choice and then another, the number of ways to make the combined selection equals the product of the number of ways to make each individual choice. Because the order in which the members are chosen does not matter, each individual choice is counted with combinations, where C(n, k) = n! / (k!(n - k)!).

Let M denote the number of ways to choose the men and let W denote the number of ways to choose the women. The committee must contain exactly 2 men selected from the 5 available men, so M = C(5, 2). The committee must also contain exactly 1 woman selected from the 4 available women, so W = C(4, 1).

We first compute M. We have C(5, 2) = 5! / (2! * 3!) = (5 * 4) / (2 * 1) = 20 / 2 = 10.

We next compute W. We have C(4, 1) = 4! / (1! * 3!) = 4.

Because the choice of the men and the choice of the women are independent, and the committee requires the 2 men and the 1 woman together, the total number of committees is the product of these two results: M * W = 10 * 4 = 40.

The correct answer is C.
**mistake_a:** 20 is C(5,2) alone (the men) with the women factor dropped, or a similar half-count. You must also choose the 1 woman: times C(4,1).
**mistake_b:** 30 is a magnitude-plausible miscount (for example mis-evaluating C(5,2) or C(4,1)). Recompute each factor: C(5,2)=10, C(4,1)=4.
**mistake_d:** 60 over-counts, e.g. treating the two men as ordered (P(5,2)=20) before multiplying. The two men form an unordered pair: C(5,2)=10.
**mistake_e:** 84 = C(9,3), choosing any 3 of the 9 people. This ignores the exactly-2-men-and-1-woman requirement.
**common_trap:** Ignoring the composition constraint and just choosing 3 from 9 (giving 84), or using permutations for the unordered sub-groups.
**takeaway:** Composition constraints: choose within each group with C, then multiply the independent group-choices together.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q11

**difficulty:** Medium
**type:** Problem Solving
**topic:** Circular


In how many ways can 5 people sit around a circular table?

- A) 24
- B) 60
- C) 120
- D) 240
- E) 720

**answer:** A
**fastest_path:** Circular seating fixes one person to remove rotations, so it is (5-1)! = 4! = 24.
**explanation:** This is a circular permutation problem. The governing principle is that when distinct objects are arranged around a circle, arrangements that differ only by a rotation are regarded as identical, because there is no fixed reference seat. Consequently, the number of distinct circular arrangements of n distinct objects is (n - 1)!, rather than n!.

Let n = 5 denote the number of people to be seated around the table. To eliminate the rotational duplication, we fix the position of one person; this person serves as the reference point. The remaining n - 1 = 4 people must then be arranged in the 4 remaining seats relative to this fixed person, and these 4 people can be ordered in any sequence.

The number of arrangements is therefore the number of ways to order the remaining 4 people:

(n - 1)! = (5 - 1)! = 4!

Evaluating the factorial:

4! = 4 x 3 x 2 x 1 = 24.

Thus there are 24 distinct ways for the 5 people to sit around the circular table.

The correct answer is A.
**mistake_b:** 60 = 120/2. Dividing the linear count by 2 fixes reflections (necklaces), not circular rotations; use (n-1)!.
**mistake_c:** 120 = 5!. This counts the seats as a straight row; around a circle, rotations are identical, so divide by 5 to get (5-1)! = 24.
**mistake_d:** 240 = 2 x 5!. There is no factor of 2 here, and you should be reducing, not increasing, the linear count.
**mistake_e:** 720 = 6!. There are 5 people, not 6, and circular arrangements use (n-1)!.
**common_trap:** Using n! for a round table. Rotations of the same circular order are not distinct, so the count is (n-1)!.
**takeaway:** Distinct people around a circle: (n-1)! arrangements. A straight row of the same people: n!.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q12

**difficulty:** Medium
**type:** Problem Solving
**topic:** Restrictions


A code consists of 4 digits chosen from {0–9}. How many codes are possible if no digit repeats?

- A) 4000
- B) 5040
- C) 9000
- D) 10000
- E) 151200

**answer:** B
**fastest_path:** Four ordered positions with no repeats: 10 x 9 x 8 x 7 = 5040 (this is P(10,4)).
**explanation:** This problem is governed by the fundamental counting principle: when a selection is made in successive stages, the total number of outcomes equals the product of the number of choices available at each stage. Because the digits form a code, their order matters, and because no digit may repeat, each digit chosen reduces the pool available for the next position.

Let the code occupy four ordered positions, and let the available digits be the ten elements of the set {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}. We fill the positions one at a time.

For the first position, all ten digits are available, giving 10 choices.
For the second position, one digit has already been used and cannot repeat, leaving 9 choices.
For the third position, two digits are now unavailable, leaving 8 choices.
For the fourth position, three digits are unavailable, leaving 7 choices.

Applying the counting principle, the total number of codes is the product of these counts:

10 x 9 x 8 x 7 = 90 x 56 = 5,040.

Equivalently, this is the number of permutations of 10 objects taken 4 at a time, P(10, 4) = 10! / (10 - 4)! = 10! / 6! = 5,040.

The correct answer is B.
**mistake_a:** 4000 is a magnitude-plausible distractor with no standard derivation; multiply the actual position counts 10 x 9 x 8 x 7.
**mistake_c:** 9000 = 9 x 10 x 10 x 10, the count for a different setup (first digit nonzero, repeats allowed). Here repeats are forbidden, so the pool shrinks each step.
**mistake_d:** 10000 = 10^4. This allows digits to repeat, but the problem says no digit repeats, so use 10 x 9 x 8 x 7.
**mistake_e:** 151200 = 10 x 9 x 8 x 7 x 6 x 5, six factors. The code has only 4 positions, so stop after four factors.
**common_trap:** Using 10^4 (repetition allowed) when the problem forbids repeats. No repeat means each position has one fewer choice than the last.
**takeaway:** Ordered with no repeats: P(n,r) = n(n-1)... for r factors. Ordered with repeats: n^r.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q13

**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions


How many arrangements of the letters in MISSISSIPPI are possible?

- A) 34650
- B) 46200
- C) 69300
- D) 277200
- E) 332640

**answer:** A
**fastest_path:** 11 letters with I four times, S four times, P twice: 11!/(4! 4! 2!) = 39,916,800 / 1152 = 34,650.
**explanation:** The number of distinct arrangements of a collection of objects in which some objects are identical is found by dividing the factorial of the total number of objects by the product of the factorials of the counts of each group of identical objects. This adjustment removes the arrangements that are indistinguishable because identical objects have merely been permuted among themselves.

Let n denote the total number of letters in MISSISSIPPI. The word contains 11 letters, so n = 11. We next count each repeated letter: there are 4 occurrences of I, 4 occurrences of S, 2 occurrences of P, and 1 occurrence of M. The sum 4 + 4 + 2 + 1 = 11 confirms that every letter has been accounted for.

Applying the principle, the number of distinct arrangements is

11! / (4! × 4! × 2! × 1!).

We evaluate each factorial. The numerator is 11! = 39,916,800. In the denominator, 4! = 24, 4! = 24, 2! = 2, and 1! = 1. The product of these values is

24 × 24 × 2 × 1 = 1,152.

Dividing gives

39,916,800 / 1,152 = 34,650.

The correct answer is A.
**mistake_b:** 46200 comes from an incorrect denominator - recheck the letter counts (I:4, S:4, P:2, M:1) and divide by 4! 4! 2!.
**mistake_c:** 69300 = 34,650 x 2 = 11!/(4! 4!). You divided for the I's and S's but forgot the 2! for the two P's.
**mistake_d:** 277200 uses too small a denominator (for example counting one repeated group as 3! instead of 4!). Re-verify each letter's frequency.
**mistake_e:** 332640 = 11!/120, dividing by a single 5!. The correct denominator is the product 4! 4! 2!, not one large factorial.
**common_trap:** Missing a repeated letter (often the two P's) or mis-tallying the frequencies, so the denominator is wrong.
**takeaway:** Repeated-letter arrangements: n! divided by the product of the factorials of every repeat count. List each letter's frequency first.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q14

**difficulty:** Hard
**type:** Problem Solving
**topic:** Combinations


From 8 candidates, a committee of 3 is chosen AND one of the three is designated as chair. How many such outcomes are possible?

- A) 56
- B) 112
- C) 168
- D) 336
- E) 504

**answer:** C
**fastest_path:** Pick the chair first (8 ways), then choose the other 2 from the remaining 7: 8 x C(7,2) = 8 x 21 = 168 (equivalently C(8,3) x 3).
**explanation:** This problem can be solved using the multiplication principle together with the combination formula, which counts the number of ways to choose an unordered subset of items. The task has two distinct stages, and the total number of outcomes is the product of the number of choices available at each stage.

We count by first selecting the chair and then selecting the remaining two committee members. There are 8 candidates, so the chair can be chosen in 8 ways. Once the chair is fixed, 7 candidates remain, from which 2 ordinary members must be selected. Because these two members hold no rank relative to each other, they form an unordered pair, so the number of ways to choose them is the combination C(7, 2).

Evaluating the combination gives C(7, 2) = 7! / (2! * 5!) = (7 * 6) / (2 * 1) = 42 / 2 = 21.

Applying the multiplication principle, the total number of outcomes is 8 * 21 = 168.

The same result can be obtained by reversing the order of the two stages. First choose the unordered committee of 3 from the 8 candidates: C(8, 3) = 8! / (3! * 5!) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56. Then designate one of the 3 committee members as chair, which can be done in 3 ways. This yields 56 * 3 = 168, confirming the count.

The correct answer is C.
**mistake_a:** 56 = C(8,3), the committee with no chair designated. You still must pick which of the 3 is chair: times 3.
**mistake_b:** 112 = 56 x 2. If you designate a chair from a 3-person committee, there are 3 choices, not 2.
**mistake_d:** 336 = 8 x 7 x 6 = P(8,3). This orders all three seats, but only the chair is a distinct role; the other two are an unordered pair.
**mistake_e:** 504 = 168 x 3, an extra unjustified factor of 3. Each outcome (committee plus chair) is already counted once in 168.
**common_trap:** Treating all three seats as ranked (P(8,3)=336) when only one role, the chair, distinguishes a member.
**takeaway:** One special role plus the rest unordered: choose the special member, then use C for the remaining unordered slots.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q15

**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions


In how many ways can 4 men and 4 women be seated in a row if men and women must alternate?

- A) 576
- B) 1152
- C) 2304
- D) 4608
- E) 40320

**answer:** B
**fastest_path:** Two gender patterns (man-first or woman-first). Within each, 4! ways for men and 4! for women: 2 x 4! x 4! = 2 x 24 x 24 = 1152.
**explanation:** This is a counting problem that combines a structural constraint with the multiplication principle: when independent choices are made in sequence, the total number of arrangements is the product of the number of options at each stage.

The requirement that men and women must alternate forces the row of eight seats into one of exactly two seating patterns. If a man occupies the first seat, the genders must follow as M W M W M W M W. If a woman occupies the first seat, the pattern must be W M W M W M W M. No other alternating arrangement is possible, so there are 2 patterns to consider.

Within a single pattern, the four seats reserved for men are fixed, and the four seats reserved for women are fixed. The men can be assigned to their four designated seats in 4! ways, and, independently, the women can be assigned to their four designated seats in 4! ways. We compute 4! = 4 x 3 x 2 x 1 = 24. By the multiplication principle, the number of arrangements consistent with one pattern is 4! x 4! = 24 x 24 = 576.

Because the two patterns are mutually exclusive ways of satisfying the constraint, we add the counts, which is equivalent to multiplying the per-pattern total by 2: 2 x 576 = 1,152.

The correct answer is B.
**mistake_a:** 576 = 4! x 4!, a single starting-gender pattern. The row can start with a man or a woman, so double it.
**mistake_c:** 2304 = 4 x 576. There are exactly 2 alternating patterns, not 4, so multiply 576 by 2.
**mistake_d:** 4608 = 8 x 576, far too many patterns. Only 2 alternating layouts exist for equal numbers of men and women.
**mistake_e:** 40320 = 8!, every arrangement of 8 people. This ignores the men-women alternation requirement.
**common_trap:** Counting only one alternating pattern (576) and forgetting that either gender can occupy the first seat.
**takeaway:** Alternation with equal groups: 2 patterns x (arrange one group) x (arrange the other) = 2 times (k!)^2.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q16

**difficulty:** Hard
**type:** Problem Solving
**topic:** Combinations


A bag has 6 red marbles and 5 blue marbles. How many ways can 4 marbles be drawn so that exactly 2 are red?

- A) 100
- B) 150
- C) 200
- D) 330
- E) 462

**answer:** B
**fastest_path:** Exactly 2 red forces the other 2 to be blue. Choose independently and multiply: C(6,2) x C(5,2) = 15 x 10 = 150.
**explanation:** This problem is governed by the fundamental counting principle together with the formula for combinations. Because the marbles are merely drawn together rather than arranged in order, the number of ways to select k objects from a group of n distinct objects is the combination C(n, k) = n! / (k!(n - k)!).

The bag contains 6 red marbles and 5 blue marbles, and 4 marbles are to be drawn. Let the selection consist of exactly 2 red marbles. Since the four marbles drawn are chosen only from red and blue marbles, requiring exactly 2 red marbles forces the remaining 2 marbles to be blue.

We count the two choices separately. The number of ways to choose 2 red marbles from the 6 available is C(6, 2) = 6! / (2! * 4!) = (6 * 5) / (2 * 1) = 30 / 2 = 15. The number of ways to choose 2 blue marbles from the 5 available is C(5, 2) = 5! / (2! * 3!) = (5 * 4) / (2 * 1) = 20 / 2 = 10.

Because both selections must occur together, the fundamental counting principle requires multiplying the two counts: 15 * 10 = 150.

The correct answer is B.
**mistake_a:** 100 is a magnitude-plausible miscount; recompute the two factors C(6,2)=15 and C(5,2)=10 and multiply.
**mistake_c:** 200 over-counts one of the factors. Exactly 2 of 6 red is C(6,2)=15 and 2 of 5 blue is C(5,2)=10.
**mistake_d:** 330 = C(11,4), choosing any 4 of the 11 marbles with no color condition. The problem fixes exactly 2 red (and thus 2 blue).
**mistake_e:** 462 = C(11,5), the wrong total (5 marbles, no constraint). Only 4 marbles are drawn and the color split is fixed.
**common_trap:** Dropping the color constraint and computing C(11,4)=330, or adding the two combinations instead of multiplying.
**takeaway:** Fixed composition from distinct pools: multiply the per-color combinations; exactly 2 of 4 red fixes the other 2 as blue.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q17

**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions


Eight distinct books are arranged on a shelf. In how many arrangements are two specific books NOT separated by any other book?

- A) 5040
- B) 10080
- C) 20160
- D) 30240
- E) 40320

**answer:** B
**fastest_path:** Glue the two specific books into a block: 7 units arrange in 7! ways, and the 2 distinct books swap inside in 2! ways: 7! x 2 = 5040 x 2 = 10,080.
**explanation:** The condition that the two specific books are not separated by any other book means that those two books must occupy adjacent positions on the shelf. Arrangements in which a designated set of items must remain together are counted with the block method: the items required to be adjacent are first treated as a single unit, the resulting units are arranged, and the count is then multiplied by the number of internal arrangements within the block.

Let the two specific books be combined into a single block. This block, together with the remaining 6 books, gives a total of 7 distinct units to be arranged on the shelf. The number of ways to arrange 7 distinct units in a row is 7! = 5,040.

Within the block, the two specific books are distinct and can themselves be ordered in 2! = 2 ways (either book may come first). By the multiplication principle, the total number of acceptable arrangements is the number of arrangements of the units multiplied by the number of internal orderings of the block:

7! × 2! = 5,040 × 2 = 10,080.

The correct answer is B.
**mistake_a:** 5040 = 7!, the block count without the internal swap. The two books are distinct, so multiply by 2! for their order inside the block.
**mistake_c:** 20160 = 4 x 5040, too large. The block's internal factor is 2!, giving 7! x 2, not 7! x 4.
**mistake_d:** 30240 = 6 x 5040. There is no factor of 6 here; the only extra factor is 2! for the two-book block.
**mistake_e:** 40320 = 8!, all arrangements of the 8 books. This ignores the requirement that the two specific books be adjacent.
**common_trap:** Forgetting the x2! for the two distinct books inside the block, or ignoring the adjacency and using 8!.
**takeaway:** Not separated means must be adjacent, so use the block method: (units)! x (internal orderings), and distinct items give k! internally.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q18

**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations


In a round-robin tournament with 10 teams, each team plays every other team exactly once. How many games are played in total?

- A) 20
- B) 45
- C) 90
- D) 100
- E) 180

**answer:** B
**fastest_path:** Each game is one unordered pair of teams: C(10,2) = (10 x 9)/2 = 45.
**explanation:** This problem is governed by the principle of combinations, which counts the number of ways to choose a subset of items from a larger set when the order of selection is irrelevant. A single game is fully determined by the unordered pair of teams that play it; the game in which Team A plays Team B is the same game as the one in which Team B plays Team A. The total number of games is therefore the number of unordered pairs that can be formed from the 10 teams.

Let n = 10 be the number of teams, and let each game correspond to a selection of 2 teams from these 10. The number of such selections is the combination C(n, 2), computed as C(n, 2) = n(n - 1) / 2.

Substituting n = 10 gives C(10, 2) = (10 x 9) / 2 = 90 / 2 = 45.

Thus a total of 45 games are played.

The correct answer is B.
**mistake_a:** 20 = 10 x 2, not a pairing count. The number of distinct pairs from 10 teams is C(10,2).
**mistake_c:** 90 = 10 x 9, which counts ordered pairs and so counts each game twice (A vs B and B vs A). Divide by 2.
**mistake_d:** 100 = 10^2, as if each team played all 10 teams including itself. A team does not play itself, and each pair is one game.
**mistake_e:** 180 = 90 x 2, doubling the already-doubled ordered count. The answer is C(10,2) = 45.
**common_trap:** Counting ordered pairs (10 x 9 = 90) and forgetting that A plays B is the same game as B plays A.
**takeaway:** Each-plays-each-once means unordered pairs: C(n,2) = n(n-1)/2.
**related_reading:** reading-quant-06-statistics-probability-combinatorics


---

## Q19
**difficulty:** Hard
**type:** Problem Solving
**topic:** Committee Selection with Constraints

A 5-person committee must be selected from a pool of 7 men and 5 women. If the committee must include at least 2 women and at least 1 man, how many different committees can be formed?

- A) 420
- B) 560
- C) 595
- D) 630
- E) 756

**answer:** C
**fastest_path:** Only the splits (women, men) = (2,3), (3,2), (4,1) meet at least 2 women and at least 1 man. Sum: 10x35 + 10x21 + 5x7 = 350 + 210 + 35 = 595.
**explanation:** Because the order in which committee members are chosen does not matter, each selection of a group of people is a combination, and the number of ways to choose r people from a group of n is given by C(n, r) = n! / [r!(n - r)!]. When a selection is subject to multiple simultaneous constraints, we partition the outcomes into mutually exclusive cases, count each case with the multiplication principle, and add the case totals.

Let a committee be described by its composition (w, m), where w is the number of women chosen and m is the number of men chosen. The committee must satisfy three conditions: w + m = 5, w is at least 2, and m is at least 1. Since there are only 5 women available and w + m = 5, the women count w can range only from 2 to 4 (taking w = 5 would leave m = 0, violating the requirement of at least 1 man, and taking w less than 2 violates the requirement of at least 2 women). The admissible compositions are therefore (2, 3), (3, 2), and (4, 1).

For each composition, the women are chosen from the 5 available and the men from the 7 available, and the two choices are independent, so we multiply.

Case (2 women, 3 men): C(5, 2) x C(7, 3) = 10 x 35 = 350.

Case (3 women, 2 men): C(5, 3) x C(7, 2) = 10 x 21 = 210.

Case (4 women, 1 man): C(5, 4) x C(7, 1) = 5 x 7 = 35.

Because these three cases are mutually exclusive and exhaust all valid committees, the total number of committees is the sum:

350 + 210 + 35 = 595.

The correct answer is C.
**mistake_a:** 420 drops a case or mis-evaluates one. The valid splits are exactly (2,3), (3,2), (4,1); compute all three and add.
**mistake_b:** 560 is a partial sum or a miscomputed case. Recheck each: C(5,2)C(7,3)=350, C(5,3)C(7,2)=210, C(5,4)C(7,1)=35.
**mistake_d:** 630 likely includes an invalid split such as (5,0), which violates the at-least-1-man condition. With 5 chosen, women can be at most 4.
**mistake_e:** 756 over-counts by relaxing a constraint (for example counting all committees with at least 2 women, ignoring at least 1 man). Keep both conditions.
**common_trap:** Including the 5-women-0-men split, or dropping or double-counting one of the three valid cases.
**takeaway:** Multi-constraint selection: list every admissible group split, count each with products of C's, then add the cases.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q20
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Overlapping Sets

At a conference, every attendee wore a red badge, a blue badge, or both. 40 attendees wore red badges and 30 wore blue badges. How many total attendees were at the conference?

(1) 12 attendees wore both colors.
(2) The number of attendees wearing only red was 3 times the number wearing only blue.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** Total = 40 + 30 - (both) = 70 - x, so you only need x. Statement (1) gives x directly; statement (2) gives a solvable equation for x.
**explanation:** This is a problem about two overlapping sets, governed by the inclusion-exclusion principle: for two sets, the number of elements in their union equals the sum of the sizes of the two sets minus the number of elements common to both. Since every attendee wore a red badge, a blue badge, or both, the total number of attendees is the size of the union of the two groups.

Let R denote the number who wore red badges, let B denote the number who wore blue badges, and let x denote the number who wore both colors. We are given R = 40 and B = 30. By inclusion-exclusion, the total number of attendees is

Total = R + B - x = 40 + 30 - x = 70 - x.

Thus the total is completely determined once the value of x is known. The question therefore reduces to whether each statement determines x.

Statement (1) states that 12 attendees wore both colors, so x = 12. Substituting gives Total = 70 - 12 = 58. The total is determined, so statement (1) is sufficient.

Statement (2) states that the number wearing only red was 3 times the number wearing only blue. The number wearing only red is 40 - x and the number wearing only blue is 30 - x. Translating the relationship into an equation, we have

40 - x = 3(30 - x).

Expanding the right side gives 40 - x = 90 - 3x. Adding 3x to both sides gives 40 + 2x = 90, and subtracting 40 gives 2x = 50, so x = 25. Substituting gives Total = 70 - 25 = 45. The total is determined, so statement (2) is sufficient.

Since each statement alone determines the value of x, and hence the total, each statement alone is sufficient.

The correct answer is D.
**mistake_a:** (1) gives x = 12, but (2) also pins x: 40 - x = 3(30 - x) solves to x = 25. Do not stop at (1) alone.
**mistake_b:** Statement (1) plainly fixes the both-count at 12, so it is sufficient; B (only (2) works) is wrong.
**mistake_c:** C says you need both statements, but each one alone already determines x and hence the total. This is the classic DS over-caution; the answer is D.
**mistake_e:** Both statements are individually sufficient, so together not sufficient is impossible here.
**common_trap:** Defaulting to C when each statement independently determines the unknown. Always fully test each statement alone first.
**takeaway:** Two-set union with both single-set totals known: total = A + B - both; any statement fixing both is sufficient by itself.
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q21
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability — Complement

A drawer contains 10 socks: 4 black, 4 blue, and 2 red. If 3 socks are drawn at random without replacement, what is the probability that at least one of them is black?

- A) 1/6
- B) 1/3
- C) 1/2
- D) 2/3
- E) 5/6

**answer:** E
**fastest_path:** At least one black equals 1 - P(no black). P(no black) = C(6,3)/C(10,3) = 20/120 = 1/6, so the answer is 1 - 1/6 = 5/6.
**explanation:** When a probability question asks for "at least one" of an outcome, the most efficient method is to compute the probability of the complementary event and subtract it from 1. Here the complementary event is that none of the three socks drawn is black.

Let the drawer contain 10 socks, of which 4 are black and the remaining 6 (4 blue and 2 red) are not black. Three socks are drawn without replacement, and every group of 3 socks is equally likely.

The total number of ways to choose 3 socks from the 10 is C(10, 3) = (10 * 9 * 8) / (3 * 2 * 1) = 720 / 6 = 120.

The number of ways to choose 3 socks that include no black sock is the number of ways to choose all 3 from the 6 non-black socks, which is C(6, 3) = (6 * 5 * 4) / (3 * 2 * 1) = 120 / 6 = 20.

Therefore the probability that no black sock is drawn is 20 / 120 = 1/6.

The probability that at least one black sock is drawn is the complement of this value: 1 - 1/6 = 5/6.

The correct answer is E.
**mistake_a:** 1/6 is P(no black sock) - the complement. You must subtract it from 1 to get at least one black.
**mistake_b:** 1/3 is a miscount of the complement (for example mishandling the without-replacement counts). Use C(6,3)/C(10,3) = 1/6.
**mistake_c:** 1/2 is a guess-by-symmetry; the actual complement is 1/6, giving 5/6.
**mistake_d:** 2/3 = 1 - 1/3, which starts from the wrong complement. The correct P(none) is 1/6, not 1/3.
**common_trap:** Computing P(none) correctly but forgetting to subtract from 1, and reporting the complement itself.
**takeaway:** At least one almost always equals 1 - P(none); count the none case with combinations of the non-target items.
**related_reading:** reading-quant-06-statistics-probability-combinatorics


---

## Q22
**difficulty:** Hard
**type:** Problem Solving
**topic:** Permutations with Adjacency Restrictions

Six people — A, B, C, D, E, and F — are to be seated in a row of 6 seats. In how many arrangements are A and B seated next to each other, AND C and D NOT seated next to each other?

- A) 96
- B) 144
- C) 192
- D) 240
- E) 288

**answer:** B
**fastest_path:** Count (A,B adjacent) then remove (A,B adjacent AND C,D adjacent): 5! x 2 - 4! x 2 x 2 = 240 - 96 = 144.
**explanation:** This problem is solved by the method of complementary counting within a constraint: the number of arrangements satisfying "A and B adjacent AND C and D not adjacent" equals the number of arrangements with A and B adjacent, minus the number of arrangements in which A and B are adjacent and C and D are also adjacent.

Let N1 denote the number of arrangements in which A and B are seated next to each other. Treat the pair A and B as a single block. This block, together with the four remaining people C, D, E, and F, gives 5 items to arrange in a row, which can be done in 5! ways. Within the block, A and B can be ordered in 2 ways. Hence N1 = 5! times 2 = 120 times 2 = 240.

Let N2 denote the number of arrangements in which A and B are adjacent and C and D are also adjacent. Treat A and B as one block and C and D as a second block. These two blocks, together with E and F, give 4 items to arrange in a row, which can be done in 4! ways. The A-and-B block has 2 internal orderings and the C-and-D block has 2 internal orderings. Hence N2 = 4! times 2 times 2 = 24 times 4 = 96.

The required number of arrangements is therefore N1 minus N2 = 240 minus 96 = 144.

The correct answer is B.
**mistake_a:** 96 is the count where A,B adjacent AND C,D adjacent - the piece you subtract, not the answer.
**mistake_c:** 192 is an over- or under-count; the correct value is N1 - N2 = 240 - 96 = 144.
**mistake_d:** 240 = N1, the arrangements with A,B adjacent only. You forgot to subtract the ones where C,D are also adjacent.
**mistake_e:** 288 over-counts; recheck N1 = 5! x 2 = 240 and N2 = 4! x 2 x 2 = 96.
**common_trap:** Reporting N1 (A,B adjacent) without subtracting the C,D-also-adjacent cases, or reporting the subtracted piece N2.
**takeaway:** X adjacent AND Y not adjacent equals (X adjacent) minus (X adjacent AND Y adjacent).
**related_reading:** reading-quant-06-statistics-probability-combinatorics


---

## Q23
**difficulty:** Hard
**type:** Problem Solving
**topic:** Circular Permutations with Adjacency Restriction

Five friends are to be seated around a circular table. Two of the friends — Alex and Beth — refuse to sit next to each other. How many distinct seating arrangements are possible? (Arrangements that differ only by a rotation are considered the same.)

- A) 4
- B) 6
- C) 8
- D) 12
- E) 18

**answer:** D
**fastest_path:** Circle of 5: total (5-1)! = 24. Glue Alex+Beth as a unit, giving 4 units around a circle: (4-1)! = 6, times 2 internal = 12 adjacent. So 24 - 12 = 12.
**explanation:** This problem is most efficiently handled by the complement principle: the number of arrangements in which Alex and Beth are not adjacent equals the total number of arrangements minus the number in which they are adjacent. Two facts about circular permutations govern the computation. First, the number of distinct arrangements of n people around a circle, where rotations are regarded as identical, is (n - 1)!. Second, when two specified people must sit together, they are treated as a single block.

Let n = 5 be the number of friends. The total number of distinct circular arrangements is therefore (n - 1)! = (5 - 1)! = 4! = 24.

Next we count the arrangements in which Alex and Beth do sit next to each other. We bind Alex and Beth into one block, which leaves four units to be placed around the circle: the Alex-Beth block together with the three remaining friends. These four units can be arranged in (4 - 1)! = 3! = 6 distinct circular ways. Within the block, Alex and Beth may be ordered in 2! = 2 ways, namely Alex-Beth or Beth-Alex. Hence the number of adjacent arrangements is 6 times 2 = 12.

Finally, we subtract the adjacent arrangements from the total to obtain the arrangements in which Alex and Beth are not adjacent: 24 - 12 = 12.

The correct answer is D.
**mistake_a:** 4 is too small; the total circular arrangements alone are 4! = 24, and the not-adjacent count is 12.
**mistake_b:** 6 = 3! is the circular arrangement of the 4 units WITHOUT the x2 internal order of the Alex-Beth block - an incomplete adjacent count, not the answer.
**mistake_c:** 8 does not match either the total (24) or the adjacent count (12); re-run total minus adjacent.
**mistake_e:** 18 over-counts; the adjacent count is 6 x 2 = 12, so 24 - 12 = 12, not 18.
**common_trap:** Confusing not adjacent with adjacent, or dropping the x2 internal order of the glued pair.
**takeaway:** Circular non-adjacency: (n-1)! total minus [(n-2)! x 2] adjacent.
**related_reading:** reading-quant-06-statistics-probability-combinatorics


---

## Q24
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability — With Replacement

A jar contains 6 red and 4 blue marbles. Two marbles are drawn at random, with the first marble replaced before the second is drawn. What is the probability that both marbles drawn are red?

- A) 9/25
- B) 1/3
- C) 2/5
- D) 1/2
- E) 3/5

**answer:** A
**fastest_path:** Replaced means the draws are independent and identical: P(red)^2 = (6/10)^2 = (3/5)^2 = 9/25.
**explanation:** When two events are independent, the probability that both occur is the product of their individual probabilities. Because the first marble is replaced before the second is drawn, the composition of the jar is identical for both draws, so the outcome of the first draw does not affect the second; the two draws are therefore independent.

Let R denote the event that a single draw yields a red marble. The jar contains 6 red marbles and 4 blue marbles, for a total of 6 + 4 = 10 marbles. On any one draw, the probability of red is

P(R) = 6/10 = 3/5.

Since the marble is replaced, this probability is the same on the second draw. Applying the multiplication rule for independent events, the probability that both marbles drawn are red is

P(both red) = P(R) × P(R) = (3/5) × (3/5) = 9/25.

The correct answer is A.
**mistake_b:** 1/3 = (6/10)(5/9), the WITHOUT-replacement answer. Here the marble is replaced, so the second draw still has 6 red out of 10.
**mistake_c:** 2/5 = 4/10 is the blue proportion or a mis-simplification; the red probability per draw is 6/10 = 3/5.
**mistake_d:** 1/2 is a guess; the per-draw red probability is 3/5, and both-red is its square.
**mistake_e:** 3/5 is P(red) for a single draw - you forgot that two reds in a row means squaring it.
**common_trap:** Treating a with-replacement problem as without replacement (giving 1/3), or forgetting to square the single-draw probability.
**takeaway:** With replacement: independent draws, multiply identical probabilities. Without replacement: the pool shrinks, so the second factor changes.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Committee Selection — At Least One from Each Group

A department must form a committee of 4 from 8 candidates: 3 economists, 3 engineers, and 2 lawyers. If the committee must include at least one member from each of the three groups, how many different committees can be formed?

- A) 36
- B) 45
- C) 54
- D) 60
- E) 70

**answer:** B
**fastest_path:** 4 members across 3 groups with at least 1 each forces a 2-1-1 split. Sum the three which-group-gives-2 cases: 18 + 18 + 9 = 45.
**explanation:** This problem is governed by the multiplication principle for independent selections together with case analysis based on the possible group composition of the committee. When a selection of items must be drawn from disjoint groups subject to a minimum from each group, we first determine every admissible distribution of the chosen positions among the groups, count the selections for each distribution using combinations, and then add the case counts.

Let the committee consist of 4 members drawn from 3 economists, 3 engineers, and 2 lawyers, with the requirement that at least one member come from each of the three groups. Because each of the three groups must contribute at least 1 member, and the committee has exactly 4 members, the number of members taken from the three groups must be a set of three positive integers summing to 4. The only way to write 4 as a sum of three positive integers is 2 + 1 + 1. Thus exactly one group contributes 2 members and each of the other two groups contributes 1 member, and we must consider which group supplies the 2 members.

Case 1: 2 economists, 1 engineer, 1 lawyer. The number of ways is C(3, 2) times C(3, 1) times C(2, 1) = 3 times 3 times 2 = 18.

Case 2: 1 economist, 2 engineers, 1 lawyer. The number of ways is C(3, 1) times C(3, 2) times C(2, 1) = 3 times 3 times 2 = 18.

Case 3: 1 economist, 1 engineer, 2 lawyers. The number of ways is C(3, 1) times C(3, 1) times C(2, 2) = 3 times 3 times 1 = 9.

These three cases are mutually exclusive and together exhaust all admissible committees, so we add the counts: 18 + 18 + 9 = 45.

The correct answer is B.
**mistake_a:** 36 drops or under-counts a case. The three 2-1-1 cases give 18, 18, and 9; add all three.
**mistake_c:** 54 over-counts a case, likely the lawyers giving 2 (which is C(2,2)=1, not more). Recheck: 18 + 18 + 9.
**mistake_d:** 60 mixes in an invalid split (such as 2-2-0) that leaves a group unrepresented. Only 2-1-1 is allowed.
**mistake_e:** 70 = C(8,4), all committees of 4 from 8 with no group constraint. The at-least-one-from-each-group rule rules most of these out.
**common_trap:** Ignoring the one-from-each-group rule (giving C(8,4)=70), or allowing a 2-2-0 split that omits a group.
**takeaway:** Distribute the committee size across groups: list the integer splits meeting each minimum, count each with products of C's, and add.
**related_reading:** reading-quant-06-statistics-probability-combinatorics


---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Stars and Bars — Distinguishable Recipients, Identical Items

In how many ways can 10 identical candies be distributed among 4 distinct children so that each child receives at least one candy?

- A) 56
- B) 70
- C) 84
- D) 120
- E) 210

**answer:** C
**fastest_path:** Give each child 1 candy first (uses 4); distribute the remaining 6 freely among 4 children: C(6+4-1, 4-1) = C(9,3) = 84.
**explanation:** This problem is solved by counting the positive-integer solutions of an equation, using the stars-and-bars method. The governing principle is that the number of ways to distribute n identical items among k distinct recipients so that each recipient receives at least one item equals the number of positive-integer solutions of x_1 + x_2 + ... + x_k = n, which is C(n - 1, k - 1).

Let x_1, x_2, x_3, and x_4 denote the number of candies received by the first, second, third, and fourth child, respectively. Since the 10 candies are identical and must all be distributed, and since each child must receive at least one candy, the conditions translate into the equation

x_1 + x_2 + x_3 + x_4 = 10,

where each x_i is a positive integer.

To apply the stars-and-bars count for positive integers, we first ensure each child receives one candy. Substituting y_i = x_i - 1 for each i gives nonnegative integers y_i, and the equation becomes

(y_1 + 1) + (y_2 + 1) + (y_3 + 1) + (y_4 + 1) = 10,

which simplifies to

y_1 + y_2 + y_3 + y_4 = 6,

where each y_i is a nonnegative integer. The number of nonnegative-integer solutions of this equation equals the number of ways to arrange 6 identical stars and 3 bars in a row, which is C(6 + 4 - 1, 4 - 1) = C(9, 3).

We now compute C(9, 3):

C(9, 3) = (9 * 8 * 7) / (3 * 2 * 1) = 504 / 6 = 84.

The correct answer is C.
**mistake_a:** 56 = C(8,3), which uses the wrong totals in stars and bars. After giving one to each, distribute 6 among 4: C(9,3).
**mistake_b:** 70 = C(8,4), again a mis-indexed stars-and-bars count. The formula here is C(n-1, k-1) = C(9,3).
**mistake_d:** 120 = C(10,3), the count when each child may get zero. The at-least-one rule lowers the index to C(9,3).
**mistake_e:** 210 over-counts from a wrong n or k in the formula; the positive-solution count of x1 + ... + x4 = 10 is C(9,3) = 84.
**common_trap:** Skipping the at-least-one adjustment, or plugging the wrong n and k into stars and bars.
**takeaway:** Identical items to distinct recipients, each at least 1: C(n-1, k-1). Each at least 0: C(n+k-1, k-1).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q27
**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations with Repetition

In how many distinct ways can the letters of the word "COFFEE" be arranged?

- A) 60
- B) 120
- C) 180
- D) 360
- E) 720

**answer:** C
**explanation:** The number of distinct arrangements of a collection of objects in which some objects are identical is given by n! divided by the product of the factorials of the counts of each repeated object: n! / (k1! * k2! * ...), where n is the total number of objects and each k is the number of copies of a particular repeated object.

Let n be the total number of letters in the word COFFEE. The word consists of the six letters C, O, F, F, E, and E, so n = 6. Among these, the letter F appears twice and the letter E appears twice, while C and O each appear once.

Applying the formula, the number of distinct arrangements is

6! / (2! * 2!).

First, compute the factorials: 6! = 720, and 2! = 2, so 2! * 2! = 2 * 2 = 4.

Dividing gives

720 / 4 = 180.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics


---

## Q28
**difficulty:** Hard
**type:** Problem Solving
**topic:** Circular Permutations with Adjacency Constraint

Seven distinct people are to be seated at a circular table with 7 chairs. If one specific pair of people must sit next to each other, how many distinct seating arrangements are possible, given that arrangements differing only by a rotation are considered the same?

- A) 120
- B) 240
- C) 360
- D) 720
- E) 1,440

**answer:** B
**explanation:** This is a circular permutation problem with an adjacency constraint, and the governing method is to treat the two people who must sit together as a single unit, count the circular arrangements of the resulting units, and then account for the internal ordering within that unit.

Let the seven distinct people be the individuals to be seated, and let the two who must be adjacent form one block. Binding this pair together reduces the problem to arranging 6 distinct units around the circular table: the block plus the remaining 5 people.

Because arrangements that differ only by a rotation are considered the same, the number of distinct circular arrangements of n distinct units is (n - 1)!. With n = 6 units, the number of circular arrangements is (6 - 1)! = 5! = 120.

Within the block, the two people can be ordered in 2! = 2 ways, since either person may sit on the left of the other.

Applying the multiplication principle, the total number of distinct seating arrangements is 120 times 2 = 240.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q29
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability — Binomial

A fair coin is flipped 5 times. What is the probability of getting exactly 3 heads?

- A) 5/16
- B) 3/8
- C) 1/2
- D) 5/8
- E) 1/4

**answer:** A
**explanation:** This problem is governed by the binomial probability model, which applies to a fixed number of independent trials, each having only two outcomes (here, heads or tails) with a constant probability of success. The number of ways to obtain exactly k successes in n trials is the combination C(n, k), and the probability of any one specific sequence with k heads and (n - k) tails is p^k times (1 - p)^(n - k), where p is the probability of heads on a single flip.

Let n = 5 be the number of flips, let k = 3 be the desired number of heads, and let p = 1/2 be the probability of heads on a single flip of a fair coin. Because each flip is independent and equally likely to land heads or tails, the probability of exactly 3 heads is given by

P = C(5, 3) * (1/2)^3 * (1/2)^2.

We first compute the number of favorable arrangements. C(5, 3) = 5! / (3! * 2!) = (5 * 4) / (2 * 1) = 10.

We next compute the probability of any one such arrangement. Since (1/2)^3 * (1/2)^2 = (1/2)^5 = 1/32, every specific sequence of 5 flips has probability 1/32.

Multiplying the count of arrangements by the probability of each gives

P = 10 * (1/32) = 10/32 = 5/16.

The correct answer is A.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q30
**difficulty:** Easy
**type:** Problem Solving
**topic:** Multiplication Principle

A clothing shop offers shirts in 3 colors, pants in 4 styles, and shoes in 2 types. A shopper picks exactly one shirt, one pair of pants, and one pair of shoes. How many distinct outfit combinations are possible?

- A) 9
- B) 12
- C) 24
- D) 36
- E) 48

**answer:** C
**explanation:** This problem is governed by the Multiplication Principle (also called the Fundamental Counting Principle), which states that if one task can be performed in m ways and a second, independent task can be performed in n ways, then the two tasks together can be performed in m times n ways. The principle extends to any number of independent choices: when a sequence of k independent selections offers n1, n2, ..., nk options respectively, the total number of possible outcomes equals the product n1 times n2 times ... times nk.

In this situation the shopper assembles a single outfit by making three independent selections. Let s denote the number of choices for the shirt, p the number of choices for the pants, and h the number of choices for the shoes. From the given information, s = 3, p = 4, and h = 2. Because the shopper chooses exactly one shirt and one pair of pants and one pair of shoes, and because the choice in each category does not restrict the choices in the other categories, the three selections are independent.

Applying the Multiplication Principle, the total number of distinct outfit combinations is the product of the three counts:

Total = s times p times h
Total = 3 times 4 times 2.

We evaluate the product in two steps. First, 3 times 4 = 12. Then, 12 times 2 = 24.

Thus there are 24 distinct outfit combinations.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q31
**difficulty:** Easy
**type:** Problem Solving
**topic:** Grid Path Counting

A delivery driver travels from point A to point B on a city grid, moving only east or north. The trip requires exactly 3 blocks east and 2 blocks north. How many different routes are possible?

- A) 5
- B) 6
- C) 8
- D) 10
- E) 15

**answer:** D
**explanation:** This problem is governed by the combinations principle: when a fixed sequence of indistinguishable steps of two types must be arranged, the number of distinct arrangements equals the number of ways to choose the positions occupied by one of the types.

Every valid route from A to B consists of exactly 3 eastward moves and 2 northward moves, so each route is a sequence of 3 + 2 = 5 moves. Let n = 5 denote the total number of moves in any route. Because the order of the eastward and northward moves is what distinguishes one route from another, a route is fully determined once we decide which of the 5 positions in the sequence are occupied by northward moves; the remaining positions are necessarily eastward moves.

The number of ways to select the 2 northward positions from the 5 available positions is

C(5, 2) = (5 × 4) / (2 × 1) = 20 / 2 = 10.

Thus there are 10 distinct routes.

The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q32
**difficulty:** Easy
**type:** Problem Solving
**topic:** Independent Events Probability

A fair six-sided die (faces 1–6) is rolled and a fair coin is flipped. What is the probability of rolling a number greater than 4 AND getting tails?

- A) 1/12
- B) 1/6
- C) 1/4
- D) 1/3
- E) 1/2

**answer:** B
**explanation:** This problem concerns the probability of two independent events both occurring. When two events are independent, the probability that both occur equals the product of their individual probabilities. The roll of the die and the flip of the coin do not influence each other, so they are independent, and we may compute each probability separately and then multiply.

Let A be the event that the die shows a number greater than 4, and let B be the event that the coin shows tails.

For event A, the faces greater than 4 on a six-sided die are 5 and 6. There are 2 favorable outcomes out of 6 equally likely faces, so P(A) = 2/6 = 1/3.

For event B, the coin has two equally likely outcomes, heads and tails, so P(B) = 1/2.

Because the two events are independent, the probability that both occur is

P(A and B) = P(A) * P(B) = (1/3) * (1/2) = 1/6.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q33
**difficulty:** Easy
**type:** Problem Solving
**topic:** Dependent Probability Without Replacement

A bag contains 5 red marbles and 3 blue marbles. Two marbles are drawn one at a time without replacement. What is the probability that both marbles are red?

- A) 3/8
- B) 25/64
- C) 5/14
- D) 5/12
- E) 2/7

**answer:** C
**explanation:** Because the two marbles are drawn one at a time without replacement, the two draws are dependent: the outcome of the first draw changes the composition of the bag for the second draw. The probability that both events occur is therefore the product of the probability of the first event and the conditional probability of the second event given that the first has occurred.

Let R1 be the event that the first marble drawn is red, and let R2 be the event that the second marble drawn is red. We seek P(R1 and R2) = P(R1) times P(R2 given R1).

The bag initially contains 5 red marbles and 3 blue marbles, for a total of 8 marbles. The probability that the first marble is red is

P(R1) = 5/8.

Given that the first marble drawn was red, one red marble has been removed and not replaced. The bag now contains 4 red marbles and 3 blue marbles, for a total of 7 marbles. The conditional probability that the second marble is red is

P(R2 given R1) = 4/7.

Multiplying these probabilities gives

P(R1 and R2) = (5/8)(4/7) = 20/56 = 5/14.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q34
**difficulty:** Easy
**type:** Problem Solving
**topic:** Fundamental Counting Principle with Restrictions

A 3-digit code uses only the digits 1 through 9 (no zeros). The first digit must be odd, and the remaining two digits may be any digit from 1 to 9 with repetition allowed. How many distinct codes are possible?

- A) 45
- B) 243
- C) 405
- D) 450
- E) 729

**answer:** C
**explanation:** This problem is governed by the fundamental counting principle: when a sequence of independent choices is made, the total number of possible outcomes equals the product of the number of options available at each choice. The task is to count the choices available at each of the three positions of the code and then multiply.

Let the three positions of the code be denoted p1, p2, and p3.

For p1, the digit must be odd. Among the digits 1 through 9, the odd digits are 1, 3, 5, 7, and 9, which gives 5 available options.

For p2 and p3, any digit from 1 through 9 is permitted, and repetition is allowed, so each of these positions independently has 9 available options.

Applying the fundamental counting principle, the total number of distinct codes is the product of the options at the three positions:

5 x 9 x 9.

We first compute 9 x 9 = 81, and then 5 x 81 = 405.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q35
**difficulty:** Medium
**type:** Problem Solving
**topic:** Addition Rule — P(A or B)

One card is drawn at random from a standard 52-card deck. What is the probability that the card is either a heart or a face card (jack, queen, or king of any suit)?

- A) 1/4
- B) 3/13
- C) 11/26
- D) 25/52
- E) 1/2

**answer:** C
**explanation:** The governing principle is the addition rule for the probability that at least one of two events occurs: for any events A and B, P(A or B) = P(A) + P(B) - P(A and B). The final term corrects for outcomes belonging to both events, which would otherwise be counted twice.

Let A be the event that the drawn card is a heart, and let B be the event that the drawn card is a face card (a jack, queen, or king of any suit). Because exactly one card is drawn at random from a standard 52-card deck, each card is equally likely, and every probability is the number of qualifying cards divided by 52.

First we count event A. A standard deck contains 13 hearts, so P(A) = 13/52.

Next we count event B. There are three face-card ranks (jack, queen, king), and each rank appears once in each of the four suits, giving 3 * 4 = 12 face cards. Thus P(B) = 12/52.

Now we count the overlap, event A and B, consisting of cards that are simultaneously hearts and face cards. These are the jack, queen, and king of hearts, a total of 3 cards. Thus P(A and B) = 3/52.

Applying the addition rule:

P(A or B) = 13/52 + 12/52 - 3/52 = (13 + 12 - 3)/52 = 22/52.

Reducing the fraction by dividing numerator and denominator by 2 gives 22/52 = 11/26.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q36
**difficulty:** Medium
**type:** Problem Solving
**topic:** Conditional Probability

A standard deck has 26 red and 26 black cards. Two cards are drawn without replacement. Given that the first card drawn is red, what is the probability that the second card is also red?

- A) 1/2
- B) 25/51
- C) 25/52
- D) 13/51
- E) 26/51

**answer:** B
**explanation:** This problem applies the principle of conditional probability for sampling without replacement: once an outcome is known, the sample space must be revised to account for the change in the population.

Let the deck initially contain 52 cards, of which 26 are red and 26 are black. We are told that the first card drawn is red. Because the draw is made without replacement, that red card is no longer in the deck.

We revise the counts to reflect this known outcome. The number of cards remaining is 52 minus 1, which is 51. Of these, the number of red cards remaining is 26 minus 1, which is 25, while the 26 black cards are unchanged.

The conditional probability that the second card is red, given that the first card is red, is the ratio of remaining red cards to remaining total cards. We compute this as 25 divided by 51, which is 25/51.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q37
**difficulty:** Medium
**type:** Problem Solving
**topic:** Total Probability — Weighted Defect Rate

A factory has two assembly lines. Line 1 produces 80% of the factory's output with a 5% defect rate; Line 2 produces the remaining 20% with a 10% defect rate. If one item is chosen at random from the combined output, what is the probability that it is defective?

- A) 5.0%
- B) 6.0%
- C) 7.5%
- D) 8.0%
- E) 15.0%

**answer:** B
**explanation:** This problem is governed by the Law of Total Probability, which states that when a population is partitioned into mutually exclusive cases, the overall probability of an event equals the sum, over all cases, of the probability of the event within each case multiplied by the probability of that case.

Let the event D denote that a randomly chosen item is defective. The combined output is partitioned into two cases according to the line that produced the item. An item comes from Line 1 with probability 0.80 and is defective with probability 0.05 given that it came from Line 1. An item comes from Line 2 with probability 0.20 and is defective with probability 0.10 given that it came from Line 2.

Applying the Law of Total Probability:

P(D) = P(Line 1) times P(D | Line 1) + P(Line 2) times P(D | Line 2)

P(D) = (0.80)(0.05) + (0.20)(0.10)

We compute each term:

(0.80)(0.05) = 0.04

(0.20)(0.10) = 0.02

Adding the two contributions:

P(D) = 0.04 + 0.02 = 0.06

Expressed as a percentage, 0.06 equals 6.0%.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q38
**difficulty:** Medium
**type:** Problem Solving
**topic:** Grid Paths Through a Required Midpoint

A person walks from point A at (0, 0) to point B at (4, 3) on a grid, moving only right or up. Every route must pass through checkpoint M at (2, 2). How many valid routes are there?

- A) 6
- B) 12
- C) 18
- D) 24
- E) 35

**answer:** C
**explanation:** When a lattice path is required to pass through a fixed intermediate point, the count is found by applying the multiplication principle to two independent sub-paths: the number of routes from the start to the required point, multiplied by the number of routes from that point to the destination. For a path that moves only right and up on a grid, the number of routes between two points is the number of ways to arrange the required right-moves and up-moves, which is a combination of the total moves taken some number of them at a time.

Let the journey be divided at the required checkpoint M = (2, 2), giving two segments: A = (0, 0) to M = (2, 2), and M = (2, 2) to B = (4, 3).

For the first segment, from (0, 0) to (2, 2), we must move 2 units right and 2 units up, for a total of 4 moves. The number of routes is the number of ways to choose which 2 of these 4 moves are the right-moves:

C(4, 2) = (4 × 3) / (2 × 1) = 12 / 2 = 6.

For the second segment, from (2, 2) to (4, 3), we must move 2 units right and 1 unit up, for a total of 3 moves. The number of routes is the number of ways to choose which 1 of these 3 moves is the up-move:

C(3, 1) = 3.

Because every valid full route consists of one first-segment route followed by one second-segment route, and the two choices are independent, we multiply the two counts:

6 × 3 = 18.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q39
**difficulty:** Medium
**type:** Problem Solving
**topic:** Expected Value

A carnival game pays $15 if you roll a 6 on a fair die, $3 if you roll a 1 or 2, and $0 otherwise. What is the expected value of one play?

- A) $2.50
- B) $3.00
- C) $3.50
- D) $4.00
- E) $6.00

**answer:** C
**explanation:** The expected value of a game is found by multiplying each possible payoff by the probability that it occurs and summing these products over all outcomes. The relevant principle is E[X] = Σ (probability of an outcome) × (payoff of that outcome).

Let X denote the dollar amount paid for one play. A fair die has six equally likely faces, so each face occurs with probability 1/6. We translate the three payoff conditions into probabilities and prizes.

Rolling a 6 pays $15. The probability of this outcome is 1/6.

Rolling a 1 or a 2 pays $3. These are two of the six faces, so the probability of this outcome is 2/6.

Rolling a 3, 4, or 5 pays $0. These are the remaining three faces, so the probability of this outcome is 3/6.

Applying the expected-value formula gives

E[X] = (1/6)(15) + (2/6)(3) + (3/6)(0).

We compute each term. The first term is (1/6)(15) = 15/6. The second term is (2/6)(3) = 6/6. The third term is (3/6)(0) = 0.

Summing the terms yields

E[X] = 15/6 + 6/6 + 0 = 21/6 = 3.5.

Thus the expected value of one play is $3.50.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations with Repetition

An ice cream shop offers 5 flavors. How many ways can you order a bowl of 3 scoops if you may repeat flavors and the order of scoops does not matter?

- A) 10
- B) 15
- C) 21
- D) 35
- E) 125

**answer:** D
**explanation:** This problem asks for the number of unordered selections of 3 scoops drawn from 5 flavors when a flavor may be chosen more than once. The governing principle is the formula for combinations with repetition, which counts the number of multisets of size k chosen from n distinct types. This formula is C(n + k - 1, k), and it is derived by the stars-and-bars method: each selection corresponds to placing k indistinguishable items into n categories, requiring n - 1 dividers, so the count is the number of arrangements of k items and n - 1 dividers.

Let n = 5 be the number of available flavors and let k = 3 be the number of scoops to be selected. Because flavors may be repeated and the order of the scoops does not matter, the number of possible bowls equals the number of multisets of size 3 chosen from 5 types.

Substituting the values into the formula gives the following:

C(n + k - 1, k) = C(5 + 3 - 1, 3) = C(7, 3).

Evaluating this combination yields:

C(7, 3) = (7 * 6 * 5) / (3 * 2 * 1) = 210 / 6 = 35.

Therefore, there are 35 distinct ways to order the bowl.

The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** At-Least-One Probability — Biased Coin

A biased coin lands heads with probability 1/3 and tails with probability 2/3. If the coin is flipped 3 times, what is the probability of getting at least one head?

- A) 1/27
- B) 8/27
- C) 19/27
- D) 26/27
- E) 1/3

**answer:** C
**explanation:** For an event that can be described as "at least one" occurrence, it is generally most efficient to apply the complement principle: the probability of at least one occurrence equals 1 minus the probability of zero occurrences. The complement of "at least one head" is "no heads at all," which means every flip results in tails.

Let p denote the probability that a single flip lands tails. We are given that the coin lands heads with probability 1/3 and tails with probability 2/3, so p = 2/3. Because the three flips are independent, the probability that all three flips land tails is the product of the individual probabilities.

We compute the probability of getting no heads (all tails) on the three flips:

P(no heads) = (2/3)^3 = (2 x 2 x 2)/(3 x 3 x 3) = 8/27.

Applying the complement principle, the probability of getting at least one head is:

P(at least one head) = 1 - P(no heads) = 1 - 8/27.

Expressing 1 as 27/27 and subtracting:

P(at least one head) = 27/27 - 8/27 = 19/27.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q42
**difficulty:** Hard
**type:** Problem Solving
**topic:** Bayes' Theorem — Rare Disease Testing

A disease affects 2% of the population. A diagnostic test has a 90% true-positive rate (correctly identifies 90% of sick people) and a 5% false-positive rate (incorrectly flags 5% of healthy people). If a randomly chosen person tests positive, what is the probability they actually have the disease? (Round to the nearest percent.)

- A) 2%
- B) 18%
- C) 27%
- D) 36%
- E) 90%

**answer:** C
**explanation:** This problem is solved by applying Bayes' theorem, which relates the conditional probability of having the disease given a positive test to the underlying disease prevalence and the test's performance rates. Rather than manipulate the formula symbolically, we may work with a concrete reference population, which yields the same result and makes each quantity explicit.

Let the reference population consist of 1,000 people. Since the disease affects 2 percent of the population, the number of people who actually have the disease is 1,000 multiplied by 0.02, which equals 20. The remaining 980 people are healthy.

We now determine how many people in each group test positive. The test has a 90 percent true-positive rate, so among the 20 diseased people the number who test positive is 20 multiplied by 0.90, which equals 18. The test has a 5 percent false-positive rate, so among the 980 healthy people the number who test positive is 980 multiplied by 0.05, which equals 49.

The total number of people who test positive is therefore 18 plus 49, which equals 67. Of these 67 positive results, only the 18 true positives correspond to people who actually have the disease.

The probability that a person who tests positive actually has the disease is the ratio of true positives to all positives, which is 18 divided by 67. This quotient equals approximately 0.269, which rounds to 27 percent.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q43
**difficulty:** Hard
**type:** Problem Solving
**topic:** Grid Path — Forbidden Intersection

A traveler walks from (0, 0) to (4, 3) on a grid, moving only right or up. The intersection at (2, 2) is blocked and cannot be used. How many valid paths exist?

- A) 12
- B) 17
- C) 21
- D) 29
- E) 35

**answer:** B
**explanation:** This problem is solved by complementary counting on a lattice grid. The number of valid paths equals the total number of unrestricted paths minus the number of paths that pass through the forbidden intersection. On a grid where movement is restricted to single steps right or up, the number of paths from one point to another is a combination: if a journey requires r steps right and u steps up, the number of distinct paths is the number of ways to arrange those r + u steps, namely C(r + u, r).

We first count the total number of paths from (0, 0) to (4, 3) with no restriction. Reaching (4, 3) requires 4 steps right and 3 steps up, for a total of 7 steps. The number of such paths is C(7, 3) = (7 x 6 x 5) / (3 x 2 x 1) = 35.

Next we count the paths that pass through the forbidden intersection (2, 2). Any such path is composed of two independent segments: one from (0, 0) to (2, 2) and one from (2, 2) to (4, 3). Let a be the number of paths in the first segment and b the number in the second.

The first segment, from (0, 0) to (2, 2), requires 2 steps right and 2 steps up, for 4 steps total, so a = C(4, 2) = (4 x 3) / (2 x 1) = 6.

The second segment, from (2, 2) to (4, 3), requires 2 steps right and 1 step up, for 3 steps total, so b = C(3, 1) = 3.

Because the choice of route in the first segment is independent of the choice in the second, the number of full paths through (2, 2) is the product a x b = 6 x 3 = 18.

The number of valid paths is therefore the total minus the blocked paths: 35 - 18 = 17.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q44
**difficulty:** Hard
**type:** Problem Solving
**topic:** Majority Probability in Committee Selection

A 3-person committee is selected at random from 6 Democrats and 4 Republicans. What is the probability that the committee has a majority of Democrats (at least 2 Democrats)?

- A) 1/6
- B) 1/2
- C) 1/3
- D) 2/3
- E) 5/6

**answer:** D
**explanation:** This is a probability problem in which the favorable outcomes are counted by combinations, since the order in which committee members are chosen does not matter. The required probability is the number of committees having a majority of Democrats divided by the total number of possible committees.

Let the committee consist of 3 people chosen from 10 people total, namely 6 Democrats and 4 Republicans. The total number of distinct 3-person committees is the number of ways to choose 3 people from 10, without regard to order:

C(10,3) = (10 x 9 x 8) / (3 x 2 x 1) = 720 / 6 = 120.

A majority of Democrats on a 3-person committee means at least 2 Democrats, which occurs in exactly two mutually exclusive cases: exactly 2 Democrats with 1 Republican, or exactly 3 Democrats with 0 Republicans.

For exactly 2 Democrats and 1 Republican, choose 2 of the 6 Democrats and 1 of the 4 Republicans:

C(6,2) x C(4,1) = [(6 x 5) / (2 x 1)] x 4 = 15 x 4 = 60.

For exactly 3 Democrats and 0 Republicans, choose 3 of the 6 Democrats:

C(6,3) = (6 x 5 x 4) / (3 x 2 x 1) = 120 / 6 = 20.

Because these two cases cannot occur simultaneously, the number of favorable committees is their sum:

60 + 20 = 80.

Therefore, the probability that the committee has a majority of Democrats is

80 / 120 = 2/3.

The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q45
**difficulty:** Hard
**type:** Problem Solving
**topic:** Dividing Into Unlabeled Groups

Twelve students are to be divided into three equal groups of 4 for a field trip. The groups have no labels — there is no "Group 1," "Group 2," or "Group 3"; any arrangement of the same three groups is counted only once. How many ways can this division be made?

- A) 3,960
- B) 5,775
- C) 11,550
- D) 34,650
- E) 69,300

**answer:** B
**explanation:** This problem requires counting the number of ways to partition a set into unlabeled groups of equal size. The governing principle is that when a sequential selection process imposes an implicit order on groups that are in fact interchangeable, the resulting count must be divided by the number of ways those groups can be permuted, namely the factorial of the number of groups.

Let the twelve students be partitioned into three groups of four. We first count the partitions as though the groups were ordered, and then correct for the overcounting.

Step 1: Choose the first group of four from the twelve students. The number of such choices is C(12, 4) = 495.

Step 2: Choose the second group of four from the remaining eight students. The number of such choices is C(8, 4) = 70.

Step 3: The last four students necessarily form the third group, so there is C(4, 4) = 1 way to complete the division.

Multiplying these together gives the number of ordered selections: 495 × 70 × 1 = 34,650.

Because the three groups carry no labels, each genuine partition has been counted once for every possible ordering of its three groups. Three groups can be ordered in 3! = 6 ways, so every distinct partition appears 6 times in the count of 34,650. We therefore divide to remove this overcounting:

34,650 / 6 = 5,775.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q46
**difficulty:** Hard
**type:** Problem Solving
**topic:** Two-Constraint Committee — Inclusion-Exclusion

A committee of 4 is to be selected from 10 candidates: 2 rivals (X and Y who refuse to serve together), 3 senior members (A, B, C), and 5 junior members. The committee must also include at least one senior member. How many valid committees can be formed?

- A) 137
- B) 147
- C) 152
- D) 157
- E) 175

**answer:** D
**explanation:** This problem is solved using the inclusion-exclusion principle. When a set of objects must avoid two distinct restrictions, the number of acceptable arrangements equals the total number of unrestricted arrangements, minus the number that violate the first restriction, minus the number that violate the second restriction, plus the number that violate both restrictions simultaneously. The final term is added back because arrangements violating both restrictions have been subtracted twice and must be counted only once as invalid.

Let the total be the number of ways to choose any 4 of the 10 candidates, with no conditions imposed. This is C(10,4) = (10 * 9 * 8 * 7) / (4 * 3 * 2 * 1) = 5,040 / 24 = 210.

Next, let the first invalid group be the committees that contain both rivals X and Y. With X and Y already placed, the remaining 2 members are chosen from the other 8 candidates, giving C(8,2) = (8 * 7) / (2 * 1) = 56 / 2 = 28.

Next, let the second invalid group be the committees that contain no senior member. The non-senior candidates number 7 (the 2 rivals and the 5 junior members), so all 4 members are chosen from these 7, giving C(7,4) = (7 * 6 * 5 * 4) / (4 * 3 * 2 * 1) = 840 / 24 = 35.

Now let the overlap be the committees that violate both restrictions at once, that is, committees containing both X and Y while including no senior member. With X and Y placed, the remaining 2 members must be drawn only from the 5 junior members, giving C(5,2) = (5 * 4) / (2 * 1) = 20 / 2 = 10.

By inclusion-exclusion, the number of invalid committees is 28 + 35 - 10 = 53. The number of valid committees is therefore 210 - 53 = 157.

The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

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

Rather than expand 6! = 720 and divide by 36, cancel one 3! against the numerator: C(6, 3) = (6 * 5 * 4) / (3 * 2 * 1). Now 6 / (3 * 2) = 1, so the denominator clears entirely, leaving 5 * 4 = 20.

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
**hint_nudge:** A committee is unordered, so this is a combination, not a permutation — don't multiply 10 x 9 x 8 x 7 and stop there.
**hint_strategy:** Compute C(10, 4) as the 4-term falling product over 4!, and cancel before multiplying to keep the arithmetic small.
**hint_setup:** C(10, 4) = (10 x 9 x 8 x 7) / (4 x 3 x 2 x 1); cancel the 8 against 4 x 2 and the 9 against 3 first.
**fastest_path:** A committee has no internal ranking, so this is C(10,4). Cancel as you go: (10 x 9 x 8 x 7)/(4 x 3 x 2 x 1) = 210.
**explanation:** Because a committee is an unordered selection of people, where the order in which members are chosen does not matter, the number of possible committees is given by the combinations formula. We must count the number of ways to choose 4 people from a group of 10 without regard to order, which is C(10, 4).

Let n = 10 be the total number of people and let k = 4 be the size of the committee. The combinations formula gives

C(n, k) = n! / (k! (n - k)!).

Substituting n = 10 and k = 4,

C(10, 4) = 10! / (4! 6!).

We write out the numerator down to the point where it cancels with 6!:

C(10, 4) = (10 * 9 * 8 * 7) / (4 * 3 * 2 * 1).

Now cancel the denominator against the numerator instead of multiplying out: 8 / (4 * 2) = 1 and 9 / 3 = 3, which clears 4 * 3 * 2 * 1 entirely and leaves

C(10, 4) = 10 * 3 * 7 = 210.

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
**hint_nudge:** "Next to each other" is the classic signal to glue the two items together into one unit.
**hint_strategy:** Treat the two S's as a single block, then arrange the resulting 5 units — but because the S's are identical, do NOT multiply by 2 for the block's internal order.
**hint_setup:** The units to arrange are [SS], L, E, O, N — five distinct units, so count 5!.
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
**hint_nudge:** "Refuse to sit together" is easier to count by removing the bad cases than by building the good ones directly.
**hint_strategy:** Use the complement: total arrangements minus the arrangements in which Ana and Ben ARE adjacent (glue them, then multiply).
**hint_setup:** Total = 6! = 720; adjacent = (glue Ana-Ben as one block) 5! x 2. Subtract the second from the first.
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
**hint_nudge:** The men and the women are drawn from separate pools, so handle each pool on its own.
**hint_strategy:** Multiply the two independent choices: ways to pick the 2 men times ways to pick the 1 woman.
**hint_setup:** C(5, 2) x C(4, 1) = 10 x 4.
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
**hint_nudge:** Around a circle there is no fixed "first seat," so two orders that differ only by a rotation are the same arrangement.
**hint_strategy:** Fix one person to remove the rotational duplicates, then arrange everyone else relative to that person: (n - 1)!.
**hint_setup:** (5 - 1)! = 4!.
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
**hint_nudge:** Order matters (it is a code) and digits cannot repeat, so each position offers one fewer choice than the previous one.
**hint_strategy:** Multiply the shrinking choice counts position by position rather than reaching for a formula.
**hint_setup:** 10 x 9 x 8 x 7 (10 choices for the first digit, then 9, then 8, then 7).
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
**hint_nudge:** Repeated identical letters make many "different" orderings actually look the same, so you must divide those out.
**hint_strategy:** Take 11! and divide by the factorial of each repeated-letter count.
**hint_setup:** 11! / (4! x 4! x 2!), since MISSISSIPPI has 4 I's, 4 S's, 2 P's, and 1 M.
**fastest_path:** 11 letters with I four times, S four times, P twice: 11!/(4! x 4! x 2!). Cancel before multiplying — 11! = 11 x 10 x 9 x 8 x 7 x 6 x 5 x 4! kills one 4!, and 6 x 8 = 48 kills the remaining 4! x 2!. What survives is 11 x 10 x 9 x 7 x 5 = 34,650; no big multiplication ever happens.
**explanation:** The number of distinct arrangements of a collection of objects in which some objects are identical is found by dividing the factorial of the total number of objects by the product of the factorials of the counts of each group of identical objects. This adjustment removes the arrangements that are indistinguishable because identical objects have merely been permuted among themselves.

Let n denote the total number of letters in MISSISSIPPI. The word contains 11 letters, so n = 11. We next count each repeated letter: there are 4 occurrences of I, 4 occurrences of S, 2 occurrences of P, and 1 occurrence of M. The sum 4 + 4 + 2 + 1 = 11 confirms that every letter has been accounted for.

Applying the principle, the number of distinct arrangements is

11! / (4! × 4! × 2! × 1!).

Rather than compute 11! in full and then divide a seven-figure number, cancel before multiplying. First cancel one 4! against the numerator: writing 11! = 11 × 10 × 9 × 8 × 7 × 6 × 5 × 4!, the trailing 4! cancels one 4! in the denominator, leaving

(11 × 10 × 9 × 8 × 7 × 6 × 5) / (4! × 2! × 1!).

The remaining denominator is 4! × 2! × 1! = 24 × 2 × 1 = 48. Instead of dividing by 48, cancel it against factors already in the numerator: 6 × 8 = 48, so the 6 and the 8 cancel the denominator exactly, leaving

11 × 10 × 9 × 7 × 5.

Multiplying the survivors in stages keeps every step small: 11 × 10 = 110, then × 9 = 990, then × 7 = 6,930, then × 5 = 34,650. No large multiplication or long division is ever required.

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

**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations


From 8 candidates, a committee of 3 is chosen AND one of the three is designated as chair. How many such outcomes are possible?

- A) 56
- B) 112
- C) 168
- D) 336
- E) 504

**answer:** C
**hint_nudge:** This is two jobs in one — choose the group AND single one member out — so a plain combination is not enough.
**hint_strategy:** Fastest route: pick the chair first (8 ways), then choose the other 2 members from the remaining 7.
**hint_setup:** 8 x C(7, 2) = 8 x 21. (Equivalently, C(8, 3) x 3.)
**fastest_path:** Pick the chair first (8 ways), then choose the other 2 from the remaining 7: 8 x C(7,2) = 8 x 21 = 168 (equivalently C(8,3) x 3).
**explanation:** This problem can be solved using the multiplication principle together with the combination formula, which counts the number of ways to choose an unordered subset of items. The task has two distinct stages, and the total number of outcomes is the product of the number of choices available at each stage.

We count by first selecting the chair and then selecting the remaining two committee members. There are 8 candidates, so the chair can be chosen in 8 ways. Once the chair is fixed, 7 candidates remain, from which 2 ordinary members must be selected. Because these two members hold no rank relative to each other, they form an unordered pair, so the number of ways to choose them is the combination C(7, 2).

Evaluating the combination gives C(7, 2) = 7! / (2! * 5!) = (7 * 6) / (2 * 1) = 42 / 2 = 21.

Applying the multiplication principle, the total number of outcomes is 8 * 21 = 168.

The same result can be obtained by reversing the order of the two stages. First choose the unordered committee of 3 from the 8 candidates: C(8, 3) = 8! / (3! * 5!) = (8 * 7 * 6) / (3 * 2 * 1) = 8 * 7 = 56 (the 6 cancels 3 * 2). Then designate one of the 3 committee members as chair, which can be done in 3 ways. This yields 56 * 3 = 168, confirming the count.

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
**hint_nudge:** "Alternate" locks the row into just two gender templates, depending on who takes the first seat.
**hint_strategy:** Count one template (4! ways to seat the men in their seats x 4! for the women), then double for the two possible starting genders.
**hint_setup:** 2 x (4! x 4!) = 2 x 24 x 24.
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

**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations


A bag has 6 red marbles and 5 blue marbles. How many ways can 4 marbles be drawn so that exactly 2 are red?

- A) 100
- B) 150
- C) 200
- D) 330
- E) 462

**answer:** B
**hint_nudge:** "Exactly 2 red" among the 4 drawn forces the other 2 to be blue, so the draw splits into two independent picks.
**hint_strategy:** Multiply the ways to choose 2 of the 6 reds by the ways to choose 2 of the 5 blues.
**hint_setup:** C(6, 2) x C(5, 2) = 15 x 10.
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

**difficulty:** Medium
**type:** Problem Solving
**topic:** Restrictions


Eight distinct books are arranged on a shelf. In how many arrangements are two specific books NOT separated by any other book?

- A) 5040
- B) 10080
- C) 20160
- D) 30240
- E) 40320

**answer:** B
**hint_nudge:** "Not separated by any other book" simply means the two specified books are adjacent.
**hint_strategy:** Glue the pair into one block (7 units in all, so 7!), then multiply by 2 for the block's two internal orders.
**hint_setup:** 7! x 2! = 5040 x 2.
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
**hint_nudge:** A single game is just an unordered pair of teams: A vs. B is the same game as B vs. A.
**hint_strategy:** Count the unordered pairs directly with C(10, 2) instead of tallying team by team.
**hint_setup:** C(10, 2) = (10 x 9) / 2.
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
**hint_nudge:** Two "at least" constraints apply at once, so split the count by the number of women rather than forcing a single formula.
**hint_strategy:** Enumerate the legal women-counts (2, 3, or 4 — taking 5 women would leave no man), count each case with combinations, then add.
**hint_setup:** C(5, 2)C(7, 3) + C(5, 3)C(7, 2) + C(5, 4)C(7, 1).
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
**hint_nudge:** "At least one" almost always resolves faster through its opposite.
**hint_strategy:** Compute P(no black sock) using combinations, then subtract from 1.
**hint_setup:** 1 - C(6, 3)/C(10, 3) = 1 - 20/120.
**fastest_path:** At least one black equals 1 - P(no black). P(no black) = C(6,3)/C(10,3) = 20/120 = 1/6, so the answer is 1 - 1/6 = 5/6.
**explanation:** When a probability question asks for "at least one" of an outcome, the most efficient method is to compute the probability of the complementary event and subtract it from 1. Here the complementary event is that none of the three socks drawn is black.

Let the drawer contain 10 socks, of which 4 are black and the remaining 6 (4 blue and 2 red) are not black. Three socks are drawn without replacement, and every group of 3 socks is equally likely.

The total number of ways to choose 3 socks from the 10 is C(10, 3) = (10 * 9 * 8) / (3 * 2 * 1) = 10 * 3 * 4 = 120 (cancelling 9/3 and 8/2).

The number of ways to choose 3 socks that include no black sock is the number of ways to choose all 3 from the 6 non-black socks, which is C(6, 3) = (6 * 5 * 4) / (3 * 2 * 1) = 5 * 4 = 20 (the 6 cancels 3 * 2).

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
**hint_nudge:** One condition forces togetherness and the other forbids it — build the "together" world first, then carve out the bad part.
**hint_strategy:** Count (A and B adjacent), then subtract (A and B adjacent AND C and D adjacent), each with the glue-block method.
**hint_setup:** [2 x 5!] - [2 x 2 x 4!] = 240 - 96.
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
**hint_nudge:** A circular table calls for (n - 1)!, and "not next to each other" calls for the complement.
**hint_strategy:** Take the total circular arrangements and subtract the ones where the pair sits together (a block of 4 units around the circle).
**hint_setup:** 4! - (3! x 2) = 24 - 12.
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
**difficulty:** Easy
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
**hint_nudge:** Four seats spread across three mandatory groups force a 2-1-1 split; only the group that supplies the "2" varies.
**hint_strategy:** Take three cases by which group contributes 2 members, count each with combinations, and add.
**hint_setup:** C(3,2)C(3,1)C(2,1) + C(3,1)C(3,2)C(2,1) + C(3,1)C(3,1)C(2,2).
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
**hint_nudge:** Identical items into distinct bins with a "one each" floor is the stars-and-bars setup.
**hint_strategy:** Hand each child one candy first, then freely distribute the 6 that remain.
**hint_setup:** After the floor, count the nonnegative solutions of y1 + y2 + y3 + y4 = 6, which is C(9, 3).
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

C(9, 3) = (9 * 8 * 7) / (3 * 2 * 1) = 3 * 4 * 7 = 84 (cancelling 9/3 and 8/2).

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

Cancel one 2! against 6! first: 6! / 2! = 6 * 5 * 4 * 3. The remaining 2! = 2 divides the 4, giving

6 * 5 * 2 * 3 = 180.

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
**hint_nudge:** Repeats are allowed and order is ignored, so you are choosing a multiset, not a plain combination.
**hint_strategy:** Use combinations with repetition: C(n + k - 1, k), with n flavors and k scoops.
**hint_setup:** C(5 + 3 - 1, 3) = C(7, 3).
**explanation:** This problem asks for the number of unordered selections of 3 scoops drawn from 5 flavors when a flavor may be chosen more than once. The governing principle is the formula for combinations with repetition, which counts the number of multisets of size k chosen from n distinct types. This formula is C(n + k - 1, k), and it is derived by the stars-and-bars method: each selection corresponds to placing k indistinguishable items into n categories, requiring n - 1 dividers, so the count is the number of arrangements of k items and n - 1 dividers.

Let n = 5 be the number of available flavors and let k = 3 be the number of scoops to be selected. Because flavors may be repeated and the order of the scoops does not matter, the number of possible bowls equals the number of multisets of size 3 chosen from 5 types.

Substituting the values into the formula gives the following:

C(n + k - 1, k) = C(5 + 3 - 1, 3) = C(7, 3).

Evaluating this combination yields:

C(7, 3) = (7 * 6 * 5) / (3 * 2 * 1) = 7 * 5 = 35 (the 6 cancels 3 * 2).

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
**hint_nudge:** "At least one head" is fastest as 1 minus "all tails."
**hint_strategy:** Cube the tails probability for the three independent flips, then subtract from 1.
**hint_setup:** 1 - (2/3)^3 = 1 - 8/27.
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
**hint_nudge:** Do not be fooled by the 90% — a rare disease combined with many healthy people produces a flood of false positives.
**hint_strategy:** Skip the formula: run a concrete population of 1,000 people and count true positives versus false positives.
**hint_setup:** Diseased 20 -> 18 test positive; healthy 980 -> 49 test positive. Answer = 18 / (18 + 49).
**explanation:** This problem is solved by applying Bayes' theorem, which relates the conditional probability of having the disease given a positive test to the underlying disease prevalence and the test's performance rates. Rather than manipulate the formula symbolically, we may work with a concrete reference population, which yields the same result and makes each quantity explicit.

Let the reference population consist of 1,000 people. Since the disease affects 2 percent of the population, the number of people who actually have the disease is 2 percent of 1,000, which equals 20. The remaining 980 people are healthy.

We now determine how many people in each group test positive. The test has a 90 percent true-positive rate, so among the 20 diseased people the number who test positive is 90 percent of 20, which equals 18. The test has a 5 percent false-positive rate, so among the 980 healthy people the number who test positive is 5 percent of 980; since 10 percent of 980 is 98, taking half gives 49.

The total number of people who test positive is therefore 18 plus 49, which equals 67. Of these 67 positive results, only the 18 true positives correspond to people who actually have the disease.

The probability that a person who tests positive actually has the disease is the ratio of true positives to all positives, which is 18 divided by 67. No long division is needed to convert this fraction to a percent: bound it between two benchmark fractions with friendlier denominators. If the denominator were 72, the value would be 18/72 = 1/4 = 25 percent; if the denominator were 60, the value would be 18/60 = 3/10 = 30 percent. Since 67 lies between 60 and 72, the ratio 18/67 must lie between 25 percent and 30 percent, and the only answer choice in that range is 27 percent.

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
**hint_nudge:** A blocked intersection is easiest to handle by subtracting the paths that pass through it.
**hint_strategy:** Total unrestricted paths to (4, 3) minus the paths forced through (2, 2), which split into two independent legs.
**hint_setup:** C(7, 3) - [C(4, 2) x C(3, 1)] = 35 - 6 x 3.
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
**hint_nudge:** A "majority" on a 3-person committee means 2 or 3 Democrats — exactly two favorable cases.
**hint_strategy:** Add the favorable counts (exactly 2 D, then exactly 3 D) and divide by the total C(10, 3).
**hint_setup:** [C(6,2)C(4,1) + C(6,3)] / C(10,3) = (60 + 20) / 120.
**explanation:** This is a probability problem in which the favorable outcomes are counted by combinations, since the order in which committee members are chosen does not matter. The required probability is the number of committees having a majority of Democrats divided by the total number of possible committees.

Let the committee consist of 3 people chosen from 10 people total, namely 6 Democrats and 4 Republicans. The total number of distinct 3-person committees is the number of ways to choose 3 people from 10, without regard to order:

C(10,3) = (10 x 9 x 8) / (3 x 2 x 1) = 10 x 3 x 4 = 120 (cancelling 9/3 and 8/2).

A majority of Democrats on a 3-person committee means at least 2 Democrats, which occurs in exactly two mutually exclusive cases: exactly 2 Democrats with 1 Republican, or exactly 3 Democrats with 0 Republicans.

For exactly 2 Democrats and 1 Republican, choose 2 of the 6 Democrats and 1 of the 4 Republicans:

C(6,2) x C(4,1) = [(6 x 5) / (2 x 1)] x 4 = 15 x 4 = 60.

For exactly 3 Democrats and 0 Republicans, choose 3 of the 6 Democrats:

C(6,3) = (6 x 5 x 4) / (3 x 2 x 1) = 5 x 4 = 20 (the 6 cancels 3 x 2).

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
**hint_nudge:** The groups carry no labels, so the same three groups in a different order must not be recounted.
**hint_strategy:** Count as though the groups were ordered, then divide by 3! to strip out the relabeling overcount.
**hint_setup:** [C(12,4) x C(8,4) x C(4,4)] / 3! = 34,650 / 6.
**explanation:** This problem requires counting the number of ways to partition a set into unlabeled groups of equal size. The governing principle is that when a sequential selection process imposes an implicit order on groups that are in fact interchangeable, the resulting count must be divided by the number of ways those groups can be permuted, namely the factorial of the number of groups.

Let the twelve students be partitioned into three groups of four. We first count the partitions as though the groups were ordered, and then correct for the overcounting.

Step 1: Choose the first group of four from the twelve students. The number of such choices is C(12, 4) = (12 × 11 × 10 × 9) / (4 × 3 × 2 × 1). Cancel before multiplying: 4 × 3 = 12 cancels the 12 in the numerator, leaving (11 × 10 × 9) / 2 = 11 × 5 × 9. In stages, 11 × 9 = 99 and 99 × 5 = 495.

Step 2: Choose the second group of four from the remaining eight students. The number of such choices is C(8, 4) = 70.

Step 3: The last four students necessarily form the third group, so there is C(4, 4) = 1 way to complete the division.

Multiplying these together gives the number of ordered selections: 495 × 70 × 1.

Because the three groups carry no labels, each genuine partition has been counted once for every possible ordering of its three groups. Three groups can be ordered in 3! = 6 ways, so every distinct partition appears 6 times in the ordered count. We therefore divide by 6 to remove this overcounting. Rather than multiply 495 × 70 out to a five-digit number and then long-divide, cancel the 6 into the factors first: writing 6 = 3 × 2, we take 495 / 3 = 165 and 70 / 2 = 35, so the answer is 165 × 35. Computing in stages keeps every step small: 165 × 35 = 165 × 7 × 5, and 165 × 7 = 1,155, then 1,155 × 5 = 5,775.

(For reference, the ordered count itself is 495 × 70 = 5,775 × 6 = 34,650 — trap answer D, the result of forgetting that the groups are unlabeled.)

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
**hint_nudge:** Two separate bans apply (the rival pair, and "no senior"), so inclusion-exclusion keeps you from double-removing.
**hint_strategy:** Total minus (both rivals present) minus (no senior present) plus (both rivals AND no senior).
**hint_setup:** C(10,4) - C(8,2) - C(7,4) + C(5,2) = 210 - 28 - 35 + 10.
**explanation:** This problem is solved using the inclusion-exclusion principle. When a set of objects must avoid two distinct restrictions, the number of acceptable arrangements equals the total number of unrestricted arrangements, minus the number that violate the first restriction, minus the number that violate the second restriction, plus the number that violate both restrictions simultaneously. The final term is added back because arrangements violating both restrictions have been subtracted twice and must be counted only once as invalid.

Let the total be the number of ways to choose any 4 of the 10 candidates, with no conditions imposed. This is C(10,4) = (10 * 9 * 8 * 7) / (4 * 3 * 2 * 1) = 10 * 3 * 7 = 210 (8 cancels 4 * 2, and 9/3 = 3).

Next, let the first invalid group be the committees that contain both rivals X and Y. With X and Y already placed, the remaining 2 members are chosen from the other 8 candidates, giving C(8,2) = (8 * 7) / (2 * 1) = 56 / 2 = 28.

Next, let the second invalid group be the committees that contain no senior member. The non-senior candidates number 7 (the 2 rivals and the 5 junior members), so all 4 members are chosen from these 7, giving C(7,4) = (7 * 6 * 5 * 4) / (4 * 3 * 2 * 1) = 7 * 5 = 35 (the 4 cancels 4, and 6 cancels 3 * 2).

Now let the overlap be the committees that violate both restrictions at once, that is, committees containing both X and Y while including no senior member. With X and Y placed, the remaining 2 members must be drawn only from the 5 junior members, giving C(5,2) = (5 * 4) / (2 * 1) = 20 / 2 = 10.

By inclusion-exclusion, the number of invalid committees is 28 + 35 - 10 = 53. The number of valid committees is therefore 210 - 53 = 157.

The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics


---

## Q47
**difficulty:** Easy
**type:** Problem Solving
**topic:** Counting Principle

A lunch special lets a customer choose exactly one appetizer from 4 options, one main course from 3 options, and one dessert from 5 options. How many different complete lunch specials can be assembled?

- A) 12
- B) 20
- C) 35
- D) 60
- E) 120

**answer:** D
**explanation:** By the fundamental counting principle, when independent choices are made in sequence the total number of outcomes is the product of the number of options at each stage. Here there are 4 appetizers, 3 main courses, and 5 desserts, so the number of complete lunches is 4 x 3 x 5 = 60. Adding the options (4 + 3 + 5 = 12) is the common error that produces choice (A). The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q48
**difficulty:** Easy
**type:** Problem Solving
**topic:** Multiplication Principle

A small club issues membership codes consisting of one letter (A through Z) followed by two digits (0 through 9), and repetition of digits is allowed. How many distinct membership codes are possible?

- A) 46
- B) 260
- C) 520
- D) 2,600
- E) 67,600

**answer:** D
**explanation:** Three slots are filled independently. The first slot (a letter) has 26 choices, and each of the two digit slots has 10 choices, with repetition allowed. By the multiplication principle the total is 26 x 10 x 10 = 2,600. Treating both digit slots as a single 10-choice slot gives 26 x 10 = 260, the error in (B); using two letters and two digits gives 26 x 26 x 10 x 10 = 67,600, the over-counted value in (E). The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q49
**difficulty:** Easy
**type:** Problem Solving
**topic:** Fundamental Counting

A traveler packs 5 shirts, 4 pairs of trousers, and 2 pairs of shoes, all distinct. If an outfit consists of exactly one shirt, one pair of trousers, and one pair of shoes, how many different outfits can be formed?

- A) 11
- B) 20
- C) 30
- D) 40
- E) 120

**answer:** D
**explanation:** Each outfit results from one independent choice in each category, so by the fundamental counting principle the number of outfits is 5 x 4 x 2 = 40. Summing the items (5 + 4 + 2 = 11) gives the distractor (A), and choosing only shirts and trousers (5 x 4 = 20) gives (B). The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q50
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multiplication Principle

A 4-digit security PIN is formed using the digits 0 through 9, but no digit may be repeated within a PIN. How many such PINs are possible?

- A) 720
- B) 3,024
- C) 5,040
- D) 6,561
- E) 10,000

**answer:** C
**explanation:** Four ordered slots are filled with distinct digits. The first slot has 10 choices, the second has 9 (one digit already used), the third has 8, and the fourth has 7. By the multiplication principle the count is 10 x 9 x 8 x 7 = 5,040. Allowing repetition gives 10^4 = 10,000, the error in (E); starting the count from 9 (as if the first digit were restricted) gives 9 x 8 x 7 x 6 = 3,024, the error in (B). The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q51
**difficulty:** Medium
**type:** Problem Solving
**topic:** Fundamental Counting

Five distinct friends are to be seated in a row of five distinct chairs. The tallest friend insists on sitting in one of the two chairs at the ends of the row. In how many different ways can all five be seated?

- A) 24
- B) 48
- C) 60
- D) 96
- E) 120

**answer:** B
**explanation:** Seat the restricted person first. The tallest friend has 2 acceptable seats (the two ends). Once that seat is fixed, the remaining 4 friends fill the remaining 4 chairs in 4! = 24 ways. By the fundamental counting principle the total is 2 x 24 = 48. Ignoring the restriction gives 5! = 120 (choice E), and counting only the 4! arrangements of the others while forgetting the 2 end-seat choices gives 24 (choice A). The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q52
**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting Principle

A password consists of exactly 4 characters. The first character must be a lowercase letter (26 possibilities) and each of the remaining 3 characters must be a digit from 0 to 9, with digits allowed to repeat. How many such passwords are possible?

- A) 260
- B) 780
- C) 2,600
- D) 26,000
- E) 260,000

**answer:** D
**explanation:** There are four ordered slots. The first slot (a letter) has 26 choices, and each of the three digit slots has 10 choices, with repetition permitted. By the counting principle the total is 26 x 10 x 10 x 10 = 26 x 1,000 = 26,000. Using only one digit slot (26 x 10 = 260) gives (A); using two digit slots (26 x 100 = 2,600) gives (C). The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q53
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multiplication Principle

Using the digits 1, 2, 3, 4, and 5 with no digit repeated, how many different 3-digit numbers can be formed that are even?

- A) 12
- B) 20
- C) 24
- D) 48
- E) 60

**answer:** C
**explanation:** An even number must end in an even digit, and among the available digits the even ones are 2 and 4, giving 2 choices for the units slot. After fixing the units digit, the hundreds slot can be filled by any of the 4 remaining digits and the tens slot by any of the 3 remaining digits. By the multiplication principle the count is 2 x 4 x 3 = 24. Counting all 3-digit numbers without the even restriction gives 5 x 4 x 3 = 60 (choice E). The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q54
**difficulty:** Medium
**type:** Problem Solving
**topic:** Fundamental Counting

Three roads connect town A to town B, and four different roads connect town B to town C. A driver makes a round trip from A to C and back, A to B to C to B to A, and refuses to use any single road more than once during the whole trip. In how many distinct ways can the round trip be made?

- A) 48
- B) 60
- C) 72
- D) 84
- E) 144

**answer:** C
**explanation:** Four legs are filled in order. The A-to-B leg has 3 road choices. The B-to-C leg has 4 choices. On the return, the C-to-B leg may use any of the 4 roads except the one just used, leaving 3 choices, and the B-to-A leg may use any of the 3 A-B roads except the one already used, leaving 2 choices. By the fundamental counting principle the total is 3 x 4 x 3 x 2 = 72. Ignoring the no-reuse rule gives 3 x 4 x 4 x 3 = 144 (choice E). The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q55
**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting Principle

From a group of 8 qualified employees, a company must select a president, a vice-president, and a treasurer, with no employee holding more than one of these three positions. In how many ways can the three positions be filled?

- A) 24
- B) 56
- C) 168
- D) 336
- E) 512

**answer:** D
**explanation:** Because the three positions are distinct, the order of selection matters and the counting principle applies across three slots. The presidency can be filled in 8 ways, the vice-presidency in 7 ways (one person already chosen), and the treasury in 6 ways. The total is 8 x 7 x 6 = 336. Allowing one person to hold multiple posts gives 8^3 = 512 (choice E); selecting only two officers gives 8 x 7 = 56 (choice B). The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q56
**difficulty:** Hard
**type:** Problem Solving
**topic:** Counting Principle

Codes of length 3 are formed from the six letters A, B, C, D, E, F, where letters may be repeated. Among these six letters, A and E are designated as vowels. How many such codes contain at least one vowel?

- A) 64
- B) 108
- C) 128
- D) 152
- E) 216

**answer:** D
**explanation:** It is easier to count the complement. The total number of length-3 codes with repetition allowed is 6 x 6 x 6 = 216. The codes containing no vowel use only the 4 non-vowel letters, giving 4 x 4 x 4 = 64. By complementary counting, the number of codes with at least one vowel is 216 - 64 = 152. Reporting the no-vowel count itself yields 64 (choice A), and the grand total yields 216 (choice E). The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q57
**difficulty:** Hard
**type:** Problem Solving
**topic:** Multiplication Principle

How many 4-digit numbers have all four digits distinct and are even? (A 4-digit number cannot begin with 0.)

- A) 1,792
- B) 2,240
- C) 2,296
- D) 2,520
- E) 4,536

**answer:** C
**explanation:** Split into cases based on the units digit, which must be even. Case 1, units digit is 0: the thousands, hundreds, and tens slots are filled with distinct remaining digits in 9 x 8 x 7 = 504 ways. Case 2, units digit is one of 2, 4, 6, 8 (4 choices): the thousands digit must avoid 0 and the chosen units digit, giving 8 choices; the hundreds digit then has 8 remaining choices and the tens digit 7, yielding 4 x 8 x 8 x 7 = 1,792. Adding the cases gives 504 + 1,792 = 2,296. The count of all distinct-digit 4-digit numbers is 9 x 9 x 8 x 7 = 4,536 (choice E), and omitting Case 1 gives 1,792 (choice A). The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q58
**difficulty:** Medium
**type:** Problem Solving
**topic:** Fundamental Counting

Six distinct books are to be arranged in a single row on a shelf. Two particular books, a dictionary and a thesaurus, must be placed next to each other. In how many distinct arrangements is this possible?

- A) 120
- B) 240
- C) 360
- D) 720
- E) 1,440

**answer:** B
**explanation:** Treat the dictionary and thesaurus as a single combined block, so that effectively 5 objects (the block plus the other 4 books) are arranged in a row in 5! = 120 ways. Within the block, the two books can be ordered in 2! = 2 ways. By the fundamental counting principle the total is 120 x 2 = 240. The unrestricted count is 6! = 720 (choice D), and forgetting the internal 2! ordering gives 120 (choice A). The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q59
**difficulty:** Easy
**type:** Problem Solving
**topic:** Permutations

A museum curator must place 6 distinct trophies in a single row on a display shelf. In how many different orders can the trophies be arranged?

- A) 120
- B) 360
- C) 600
- D) 720
- E) 5,040

**answer:** D
**explanation:** We are arranging all 6 distinct objects in a row, so the number of orderings is 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720. The value 120 corresponds to 5! (treating only 5 objects), and 5,040 corresponds to 7!. The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q60
**difficulty:** Easy
**type:** Problem Solving
**topic:** Combinations

A teacher must select 3 students from a group of 8 to form a debate panel. The order in which the students are chosen does not matter. In how many ways can the panel be formed?

- A) 24
- B) 56
- C) 112
- D) 336
- E) 512

**answer:** B
**explanation:** Because order does not matter, we use combinations: C(8,3) = (8 x 7 x 6)/(3 x 2 x 1) = 336/6 = 56. The value 336 results from computing the ordered count P(8,3) = 8 x 7 x 6 and forgetting to divide by 3!. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q61
**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations

A security system requires a 4-character access code in which each character is one of 6 distinct symbols, and no symbol may be repeated within a code. How many different access codes are possible?

- A) 24
- B) 360
- C) 720
- D) 1,296
- E) 4,096

**answer:** B
**explanation:** Since order matters and no repetition is allowed, the count is P(6,4) = 6 x 5 x 4 x 3 = 360. The value 720 corresponds to 6! (using all six positions instead of four), 1,296 corresponds to 6^4 (allowing repetition), and 24 corresponds to 4!. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q62
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations

From a pool of 7 employees, a manager must choose a committee of 4. Two particular employees, Rosa and Tim, have already been guaranteed seats on the committee. In how many ways can the remaining committee members be chosen?

- A) 5
- B) 10
- C) 20
- D) 21
- E) 35

**answer:** B
**explanation:** With Rosa and Tim fixed in two of the four seats, only 2 more members must be selected from the remaining 7 - 2 = 5 employees. The count is C(5,2) = (5 x 4)/(2 x 1) = 10. The value 35 is C(7,4) (ignoring the guaranteed seats), 20 is C(6,3) (removing only one fixed member), and 5 is C(5,4). The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q63
**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations

How many distinct arrangements can be formed using all of the letters of the word MISSION?

- A) 840
- B) 1,260
- C) 2,520
- D) 5,040
- E) 10,080

**answer:** B
**explanation:** The word MISSION has 7 letters, with the letter I appearing twice and the letter S appearing twice, while M, O, and N each appear once. The number of distinct arrangements is 7!/(2! x 2!) = 5,040/4 = 1,260. The value 5,040 = 7! ignores the repeated letters, and 2,520 divides by only one of the two repeated pairs. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q64
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations

A coach must assemble a lineup by choosing 3 forwards from a roster of 5 forwards and 2 defenders from a roster of 4 defenders. In how many ways can the lineup be chosen?

- A) 16
- B) 20
- C) 60
- D) 120
- E) 126

**answer:** C
**explanation:** The two selections are independent, so we multiply the combinations: C(5,3) x C(4,2) = 10 x 6 = 60. The value 16 comes from incorrectly adding the two combinations (10 + 6), and 126 = C(9,5) comes from ignoring the positional split and choosing 5 from all 9 players. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q65
**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations

In a race with 7 runners, medals are awarded for first, second, and third place, with no ties. In how many different ways can the three medals be awarded?

- A) 21
- B) 35
- C) 120
- D) 210
- E) 343

**answer:** D
**explanation:** Because the three places are distinct (order matters), the count is P(7,3) = 7 x 6 x 5 = 210. The value 35 = C(7,3) treats the three medal positions as interchangeable, and 343 = 7^3 incorrectly allows a runner to occupy more than one place. The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q66
**difficulty:** Hard
**type:** Problem Solving
**topic:** Combinations

A panel of 4 members is to be selected from a group consisting of 4 women and 5 men. How many different panels include at least 2 women?

- A) 60
- B) 75
- C) 81
- D) 105
- E) 126

**answer:** C
**explanation:** We count by the number of women on the panel. With exactly 2 women: C(4,2) x C(5,2) = 6 x 10 = 60. With exactly 3 women: C(4,3) x C(5,1) = 4 x 5 = 20. With exactly 4 women: C(4,4) x C(5,0) = 1 x 1 = 1. The total is 60 + 20 + 1 = 81. Equivalently, the total panels C(9,4) = 126 minus those with 0 women (C(5,4) = 5) and 1 woman (C(4,1) x C(5,3) = 40) gives 126 - 45 = 81. The value 60 counts only the exactly-2-women case, and 126 is the unrestricted total. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q67
**difficulty:** Hard
**type:** Problem Solving
**topic:** Permutations

A license plate consists of 2 distinct letters chosen from the 26 letters of the alphabet followed by 3 distinct digits chosen from 0 through 9, where the order of the characters matters. How many such license plates are possible?

- A) 390,000
- B) 450,000
- C) 468,000
- D) 608,400
- E) 676,000

**answer:** C
**explanation:** The letters form an ordered selection of 2 distinct letters from 26: P(26,2) = 26 x 25 = 650. The digits form an ordered selection of 3 distinct digits from 10: P(10,3) = 10 x 9 x 8 = 720. Since the two blocks are independent, we multiply: 650 x 720. Set one zero aside from each factor and compute 65 x 72 by partial products: 65 x 70 = 4,550 and 65 x 2 = 130, so 65 x 72 = 4,550 + 130 = 4,680. Restoring the two zeros gives 650 x 720 = 468,000. The first partial product alone settles the close call with choice B: 65 x 70 = 4,550 already exceeds 4,500, so the total must exceed 455,000, ruling out 450,000. The value 676,000 = 26^2 x 10^3 arises from allowing repetition in both blocks, and 390,000 = 650 x 600 mis-multiplies the digit count. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q68
**difficulty:** Easy
**type:** Problem Solving
**topic:** Restrictions

Six distinct hardcover books are to be placed in a single row on a shelf. Two of the books form a matched two-volume set and must be placed immediately next to each other (in either order). In how many different ways can the six books be arranged on the shelf?

- A) 120
- B) 144
- C) 240
- D) 480
- E) 720

**answer:** C
**explanation:** We treat the two-volume set as a single block, so that we are arranging 5 objects (the block plus the other 4 books) in a row, which can be done in 5! = 120 ways. Within the block the two volumes can be ordered in 2! = 2 ways. By the multiplication principle the total is 120 x 2 = 240. The choice 720 = 6! ignores the adjacency requirement, and 120 forgets the internal ordering of the set. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q69
**difficulty:** Medium
**type:** Problem Solving
**topic:** Committee Selection with Constraints

A project team of 4 people is to be chosen from a pool of 9 employees consisting of 5 analysts and 4 designers. To ensure design input, the team must include at least 1 designer. In how many different ways can a team be formed?

- A) 70
- B) 115
- C) 121
- D) 125
- E) 126

**answer:** C
**explanation:** We use the complementary counting method. The total number of unrestricted teams of 4 from 9 is C(9,4) = 126. The teams that violate the constraint are those with no designer, i.e. all 4 chosen from the 5 analysts, giving C(5,4) = 5. Subtracting, the number of valid teams is 126 - 5 = 121. The value 126 forgets to remove the all-analyst teams. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q70
**difficulty:** Medium
**type:** Problem Solving
**topic:** Restrictions

Five distinct runners line up in a single row for a team photograph. Two of them, Mara and Niko, had a recent disagreement and refuse to stand immediately next to each other. In how many different orders can the five runners line up?

- A) 48
- B) 72
- C) 96
- D) 108
- E) 120

**answer:** B
**explanation:** We first count all arrangements of the 5 runners, which is 5! = 120. We then subtract the arrangements in which Mara and Niko stand next to each other. Treating that pair as one block gives 4! = 24 arrangements of the 4 objects, and the pair can be internally ordered in 2! = 2 ways, for 24 x 2 = 48 adjacent arrangements. Therefore the number of acceptable line-ups is 120 - 48 = 72. The choice 96 = 120 - 24 mistakenly omits the factor for ordering the pair, and 48 counts the forbidden arrangements instead. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q71
**difficulty:** Hard
**type:** Problem Solving
**topic:** Committee Selection with Constraints

A 5-member oversight committee is to be selected from a group of 6 men and 5 women. To keep the committee balanced, it must contain at least 2 men and at least 2 women. How many distinct committees satisfy these requirements?

- A) 150
- B) 200
- C) 350
- D) 431
- E) 462

**answer:** C
**explanation:** Because the committee has 5 members with at least 2 men and at least 2 women, the only possible gender splits are 2 men with 3 women, or 3 men with 2 women. For 2 men and 3 women we have C(6,2) x C(5,3) = 15 x 10 = 150. For 3 men and 2 women we have C(6,3) x C(5,2) = 20 x 10 = 200. Adding the two mutually exclusive cases gives 150 + 200 = 350. The values 150 and 200 each arise from counting only one of the two valid splits, and 462 = C(11,5) ignores all constraints. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q72
**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions

Six distinct speakers are to be arranged in a single row of six chairs for a panel. Speaker A must occupy one of the two end chairs (the leftmost or the rightmost). Additionally, speakers B and C must not be seated immediately next to each other. How many different seating arrangements are possible?

- A) 96
- B) 144
- C) 216
- D) 240
- E) 288

**answer:** B
**explanation:** We first place A in one of the two end chairs, giving 2 choices. The remaining five speakers, including B and C, fill the five remaining chairs, which form a contiguous block of five seats. Arranging 5 distinct people in those seats gives 5! = 120 ways, of which the arrangements with B and C adjacent number 4! x 2! = 24 x 2 = 48. Hence the arrangements of the five with B and C not adjacent number 120 - 48 = 72. Multiplying by the 2 choices for A yields 2 x 72 = 144. The choice 240 forgets the non-adjacency condition, while 96 counts the cases where B and C are adjacent. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q73
**difficulty:** Easy
**type:** Problem Solving
**topic:** Counting

A coffee bar lets a customer build one drink by choosing exactly one cup size from 4 sizes, one flavor syrup from 5 syrups, and one topping from 3 toppings. How many different drinks can be built?

- A) 12
- B) 20
- C) 32
- D) 45
- E) 60

**answer:** E
**explanation:** By the fundamental counting principle, when independent choices are made in sequence the total number of outcomes equals the product of the number of options at each stage. Here the three choices are independent: 4 cup sizes, 5 syrups, and 3 toppings, so the number of distinct drinks is 4 x 5 x 3 = 60. Adding the options instead of multiplying (4 + 5 + 3 = 12) is the common error that produces choice (A). The correct answer is E.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q74
**difficulty:** Easy
**type:** Problem Solving
**topic:** Combinations

A school must select 2 students from a class of 9 to attend a conference. The two students play identical roles, so the order of selection does not matter. In how many ways can the pair be selected?

- A) 36
- B) 72
- C) 81
- D) 126
- E) 252

**answer:** A
**explanation:** Because the two chosen students fill interchangeable roles, the order of selection is irrelevant, so this is a combination rather than a permutation. The number of ways to choose 2 from 9 is C(9, 2) = (9 x 8) / (2 x 1) = 72 / 2 = 36. Treating the selection as ordered gives P(9, 2) = 9 x 8 = 72, the trap in choice (B), and 81 = 9^2 would allow a student to be picked twice. The correct answer is A.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q75
**difficulty:** Easy
**type:** Problem Solving
**topic:** Permutations

Four distinct framed paintings are to be hung in a single row along a hallway. In how many different orders can they be hung?

- A) 4
- B) 12
- C) 16
- D) 24
- E) 256

**answer:** D
**explanation:** Arranging 4 distinct objects in a row is a straightforward permutation of all 4 items, so the number of orders is 4! = 4 x 3 x 2 x 1 = 24. The value 16 = 4^2 and 256 = 4^4 would arise only if a painting could occupy more than one position, which is impossible in a single row of four distinct paintings. The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q76
**difficulty:** Easy
**type:** Problem Solving
**topic:** Probability

A spinner is divided into 8 regions of equal area. Exactly 3 of the regions are colored gold and the rest are colored silver. If the spinner is spun once and is equally likely to stop on any region, what is the probability that it stops on a gold region?

- A) 1/8
- B) 1/4
- C) 3/8
- D) 1/2
- E) 5/8

**answer:** C
**explanation:** Because the 8 regions have equal area, each region is equally likely, so the probability of a gold result is simply the number of gold regions divided by the total number of regions. With 3 gold regions out of 8, the probability is 3/8. The value 5/8 is the probability of landing on silver (the 5 non-gold regions), which answers a different question. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q77
**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations

How many distinct arrangements can be formed using all of the letters of the word PROGRAM?

- A) 1,260
- B) 2,520
- C) 3,780
- D) 5,040
- E) 10,080

**answer:** B
**explanation:** The word PROGRAM has 7 letters, and the letter R appears twice while P, O, G, A, and M each appear once. The number of distinct arrangements of a multiset is n! divided by the product of the factorials of the repeated-letter counts, so the count is 7! / 2! = 5,040 / 2 = 2,520. The value 5,040 = 7! ignores the repeated R and counts indistinguishable arrangements as different. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q78
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations

A catering manager must choose 3 hot dishes from a menu of 7 hot dishes and 2 salads from a menu of 4 salads. The dishes within each course are interchangeable, so order does not matter. In how many ways can the selection be made?

- A) 35
- B) 70
- C) 126
- D) 210
- E) 420

**answer:** D
**explanation:** The two selections are made from separate menus and are independent, so by the multiplication principle the totals are multiplied. The hot dishes are an unordered choice of 3 from 7, namely C(7, 3) = (7 x 6 x 5) / (3 x 2 x 1) = 35, and the salads are an unordered choice of 2 from 4, namely C(4, 2) = (4 x 3) / (2 x 1) = 6. Multiplying gives 35 x 6 = 210. Choice (A) counts only the hot dishes and forgets the salads, while choice (E) doubles the count by treating one of the courses as ordered. The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q79
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability

A bag contains 7 green chips and 5 yellow chips. Two chips are drawn one at a time at random, without replacement. What is the probability that both chips drawn are yellow?

- A) 5/33
- B) 5/22
- C) 1/4
- D) 7/22
- E) 5/12

**answer:** A
**explanation:** Because the draws are made without replacement, the two events are dependent, and the probability that both occur equals the probability of the first event times the conditional probability of the second given the first. The bag holds 12 chips, of which 5 are yellow, so the probability the first chip is yellow is 5/12. After removing one yellow chip, 4 yellow chips remain among 11 total, so the conditional probability the second is yellow is 4/11. Multiplying gives (5/12)(4/11) = 20/132 = 5/33. Treating the problem as with replacement would instead give (5/12)^2 = 25/144, a different value. The correct answer is A.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q80
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Overlapping Sets

In a certain group, every person plays chess, checkers, or both; no one plays neither game. Exactly 20 people play chess. How many people are in the group?

(1) Exactly 18 people play checkers.
(2) Every person who plays chess also plays checkers, and exactly 25 people play checkers.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** Because no one plays neither game, the total number of people equals the size of the union of the chess-players and the checkers-players, given by inclusion-exclusion as Total = (chess) + (checkers) - (both) = 20 + (checkers) - (both). The total is therefore determined only once both the checkers count and the overlap are known.

Statement (1) gives checkers = 18 but says nothing about the overlap. The number who play both can be any integer from 0 to 18 (the overlap is at most the smaller group, 18, and need not be positive since the two groups need not overlap), so the total ranges from 20 to 38. Statement (1) alone is not sufficient.

Statement (2) says every chess player also plays checkers, so the chess set is entirely contained in the checkers set; this makes the union equal to the checkers set alone. Since exactly 25 people play checkers, the union, and hence the total, is 25. Statement (2) alone is sufficient. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q81
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Combinations

A team of 3 is to be chosen from a group of m men and w women. How many different teams consist of exactly 2 men and 1 woman?

(1) m = 6.
(2) w = 5.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** A team with exactly 2 men and 1 woman is built by an unordered choice of 2 men from the m available and 1 woman from the w available, so the number of such teams is C(m, 2) x C(w, 1). This requires knowing both m and w.

Statement (1) gives m = 6, so the men can be chosen in C(6, 2) = 15 ways, but the number of women w is unknown, leaving the count 15w undetermined. Statement (1) alone is not sufficient.

Statement (2) gives w = 5, so the woman can be chosen in C(5, 1) = 5 ways, but the number of men m is unknown, leaving the count 5 x C(m, 2) undetermined. Statement (2) alone is not sufficient.

Taking the statements together, m = 6 and w = 5, so the number of teams is C(6, 2) x C(5, 1) = 15 x 5 = 75, a single determined value. Both statements together are sufficient, but neither alone is. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q82
**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions

Eight distinct people are to be seated in a single row of eight chairs. Three of them — A, B, and C — must sit together as a consecutive group, and two others — D and E — must also sit together as a consecutive group. In how many different orders can the eight people be seated?

- A) 720
- B) 960
- C) 1,200
- D) 1,440
- E) 2,880

**answer:** D
**explanation:** When specified people must stay together, the block method applies: glue each required group into a single unit, arrange the resulting units, and then multiply by the internal orderings within each block. Treating A, B, C as one block and D, E as another block leaves these 2 blocks plus the 3 remaining individuals, for 5 units in all. The 5 units can be arranged in 5! = 120 ways. Within the first block, A, B, C can be ordered in 3! = 6 ways, and within the second block, D, E can be ordered in 2! = 2 ways. By the multiplication principle the total is 120 x 6 x 2 = 1,440. Forgetting the internal ordering of the three-person block gives 120 x 2 = 240, and forgetting the two-person block's swap gives 120 x 6 = 720 (choice A). The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q83
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability

A jar contains 5 red marbles and 4 blue marbles. Four marbles are drawn at random, all at once. What is the probability that at least one of the four marbles drawn is blue?

- A) 5/126
- B) 1/2
- C) 5/9
- D) 5/6
- E) 121/126

**answer:** E
**explanation:** For an "at least one" probability, the efficient route is the complement: the probability of at least one blue equals 1 minus the probability of no blue. The total number of ways to choose 4 marbles from the 9 in the jar is C(9, 4) = (9 x 8 x 7 x 6) / (4 x 3 x 2 x 1) = 126. The number of ways to choose 4 marbles with no blue is the number of ways to choose all 4 from the 5 red marbles, namely C(5, 4) = 5. So the probability of no blue is 5/126, and the probability of at least one blue is 1 - 5/126 = 121/126. Reporting 5/126 (choice A) gives the complement itself rather than the required probability. The correct answer is E.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q84
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Permutations

The letters of a certain word are to be rearranged into a row. How many distinct arrangements of all of its letters are possible?

(1) The word has 5 letters, exactly two of which are identical to each other, and the remaining three letters are all different from one another and from the repeated letter.
(2) The word has 5 letters.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** The number of distinct arrangements of a 5-letter word depends on how many letters are repeated, since identical letters reduce the count by the factorial of each repeat group.

Statement (1) specifies the exact repetition structure: 5 letters with exactly one pair of identical letters and the other three letters all distinct. The number of distinct arrangements is therefore 5! / 2! = 120 / 2 = 60, regardless of which specific letters are involved. Statement (1) alone is sufficient.

Statement (2) gives only that the word has 5 letters but not how many repeat. If all five letters were distinct the count would be 5! = 120; if two were identical it would be 60; other repetition patterns give still other values. Because the count is not pinned down, statement (2) alone is not sufficient. The correct answer is A.

---

## Q85
**difficulty:** Easy
**type:** Problem Solving
**topic:** Counting

A build-your-own salad bar lets a customer choose exactly one base from 3 bases, one protein from 6 proteins, and one dressing from 2 dressings. How many different salads can be built?

- A) 11
- B) 12
- C) 18
- D) 22
- E) 36

**answer:** E
**explanation:** By the fundamental counting principle, when independent choices are made in sequence the total number of outcomes is the product of the number of options available at each stage. Here the three choices are independent: 3 bases, 6 proteins, and 2 dressings, so the number of distinct salads is 3 x 6 x 2 = 36. Adding the options instead of multiplying (3 + 6 + 2 = 11) is the common error that produces choice (A), and using only the base and protein (3 x 6 = 18) gives choice (C). The correct answer is E.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q86
**difficulty:** Easy
**type:** Problem Solving
**topic:** Combinations

A book club must choose 2 of its 7 members to attend a publishing fair. The two attendees play identical roles, so the order of selection does not matter. In how many ways can the pair be chosen?

- A) 21
- B) 14
- C) 28
- D) 35
- E) 42

**answer:** A
**explanation:** Because the two chosen members fill interchangeable roles, the order of selection is irrelevant, so this is a combination rather than a permutation. The number of ways to choose 2 from 7 is C(7, 2) = (7 x 6) / (2 x 1) = 42 / 2 = 21. Treating the selection as ordered gives P(7, 2) = 7 x 6 = 42, the trap in choice (E), and choosing 3 instead of 2 gives C(7, 3) = 35, the value in choice (D). The correct answer is A.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q87
**difficulty:** Easy
**type:** Problem Solving
**topic:** Permutations

A gallery assistant must hang 5 distinct photographs in a single row along a wall. In how many different orders can the photographs be hung?

- A) 20
- B) 25
- C) 60
- D) 120
- E) 720

**answer:** D
**explanation:** Arranging 5 distinct objects in a row is a straightforward permutation of all 5 items, so the number of orders is 5! = 5 x 4 x 3 x 2 x 1 = 120. The value 20 = 5 x 4 counts only the first two positions, and 720 = 6! corresponds to arranging six items rather than five. The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q88
**difficulty:** Easy
**type:** Problem Solving
**topic:** Probability

A bag contains 3 red marbles and 5 green marbles and nothing else. If one marble is drawn at random and each marble is equally likely to be drawn, what is the probability that the marble is red?

- A) 1/4
- B) 3/8
- C) 1/2
- D) 5/8
- E) 3/5

**answer:** B
**explanation:** Because each of the marbles is equally likely to be drawn, the probability of a red result is simply the number of red marbles divided by the total number of marbles. There are 3 red marbles out of 3 + 5 = 8 marbles in all, so the probability is 3/8. The value 5/8 is the probability of drawing green (the 5 non-red marbles), which answers a different question, and 3/5 incorrectly uses the count of green marbles as the denominator. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q89
**difficulty:** Medium
**type:** Problem Solving
**topic:** Restrictions

How many distinct arrangements can be formed using all of the letters of the word BALLOON?

- A) 630
- B) 840
- C) 1,260
- D) 2,520
- E) 5,040

**answer:** C
**explanation:** The word BALLOON has 7 letters, with the letter L appearing twice and the letter O appearing twice, while B, A, and N each appear once. The number of distinct arrangements of a multiset is n! divided by the product of the factorials of the repeated-letter counts, so the count is 7! / (2! x 2!) = 5,040 / 4 = 1,260. The value 5,040 = 7! ignores both repeated pairs, and 2,520 = 7! / 2! divides for only one of the two repeated letters. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q90
**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations

How many distinct arrangements can be formed using all of the letters of the word LEVEL?

- A) 20
- B) 30
- C) 60
- D) 120
- E) 240

**answer:** B
**explanation:** The word LEVEL has 5 letters, with the letter L appearing twice and the letter E appearing twice, while V appears once. The number of distinct arrangements of a multiset is n! divided by the product of the factorials of the repeated-letter counts, so the count is 5! / (2! x 2!) = 120 / 4 = 30. The value 120 = 5! ignores both repeated pairs, and 60 = 5! / 2! divides for only one of the two repeated letters. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q91
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations

A coach must build a relay squad by choosing 2 captains from a group of 4 eligible captains and 3 runners from a separate group of 6 eligible runners. The members within each group are interchangeable, so order does not matter. In how many ways can the squad be chosen?

- A) 26
- B) 60
- C) 84
- D) 120
- E) 240

**answer:** D
**explanation:** The two selections are made from separate groups and are independent, so by the multiplication principle the totals are multiplied. The captains are an unordered choice of 2 from 4, namely C(4, 2) = (4 x 3) / (2 x 1) = 6, and the runners are an unordered choice of 3 from 6, namely C(6, 3) = (6 x 5 x 4) / (3 x 2 x 1) = 20. Multiplying gives 6 x 20 = 120. Adding the two combinations instead of multiplying (6 + 20 = 26) gives choice (A), and choice (E) doubles the count by treating one of the groups as ordered. The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q92
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Overlapping Sets

In a language program, every student studies Spanish, French, or both, and no student studies neither. Exactly 24 students study Spanish and exactly 19 study French. How many students are in the program?

(1) Exactly 7 students study both Spanish and French.
(2) The number of students who study only Spanish is twice the number who study only French.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** Because no student studies neither subject, the total number of students equals the size of the union of the two groups, given by inclusion-exclusion as Total = (Spanish) + (French) - (both) = 24 + 19 - (both) = 43 - (both). The total is therefore completely determined once the overlap, the number who study both, is known, so the question reduces to whether each statement pins down that overlap. Statement (1) states that exactly 7 students study both, so Total = 43 - 7 = 36; this is sufficient. Statement (2) lets x denote the number who study both, so the number who study only Spanish is 24 - x and the number who study only French is 19 - x; translating "only Spanish is twice only French" gives 24 - x = 2(19 - x), which expands to 24 - x = 38 - 2x, so x = 14, and Total = 43 - 14 = 29; this is sufficient. Since each statement alone determines the overlap and hence the total, each statement alone is sufficient. The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q93
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Permutations

From a group of n people, a president and a vice-president are to be chosen, and no person may hold both offices. In how many different ways can the two offices be filled?

(1) The group contains more than 6 people.
(2) There are exactly 28 ways to choose an unordered pair of two people from the group.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** Because the two offices are distinct, the number of ways to fill them is the ordered count P(n, 2) = n(n - 1), so the question is answerable exactly when n is determined. Statement (1) says only that n is greater than 6, which allows n = 7, 8, 9, and many other values, each giving a different count; this is not sufficient. Statement (2) says the number of unordered pairs is C(n, 2) = n(n - 1) / 2 = 28, so n(n - 1) = 56, which has the unique positive-integer solution n = 8; then P(8, 2) = 8 x 7 = 56, a single determined value, so statement (2) alone is sufficient. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q94
**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions

Six friends are to be seated around a circular table with six chairs. Two of the friends, Priya and Quinn, refuse to sit immediately next to each other. How many distinct seating arrangements are possible? (Arrangements that differ only by a rotation are considered the same.)

- A) 48
- B) 60
- C) 72
- D) 96
- E) 120

**answer:** C
**explanation:** We use complementary counting. The total number of distinct circular arrangements of 6 distinct people, where rotations are regarded as identical, is (6 - 1)! = 5! = 120. We then subtract the arrangements in which Priya and Quinn do sit next to each other. Binding that pair into a single block leaves 5 units to arrange around the circle, which can be done in (5 - 1)! = 4! = 24 distinct circular ways, and within the block the two can be ordered in 2! = 2 ways, giving 24 x 2 = 48 adjacent arrangements. Subtracting gives 120 - 48 = 72. The value 48 counts the forbidden (adjacent) arrangements instead of the acceptable ones, and 120 ignores the restriction entirely. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q95
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability

A jar contains 4 white, 3 black, and 2 red marbles. Three marbles are drawn at random, all at once. What is the probability that at least one of the three marbles drawn is white?

- A) 5/42
- B) 1/3
- C) 1/2
- D) 5/6
- E) 37/42

**answer:** E
**explanation:** For an "at least one" probability, the efficient route is the complement: the probability of at least one white equals 1 minus the probability of no white. The total number of ways to choose 3 marbles from the 4 + 3 + 2 = 9 in the jar is C(9, 3) = (9 x 8 x 7) / (3 x 2 x 1) = 84. The number of ways to choose 3 marbles with no white is the number of ways to choose all 3 from the 5 non-white marbles (3 black and 2 red), namely C(5, 3) = 10. So the probability of no white is 10/84 = 5/42, and the probability of at least one white is 1 - 5/42 = 37/42. Reporting 5/42 (choice A) gives the complement itself rather than the required probability. The correct answer is E.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q96
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Combinations

A jar contains r red marbles and b blue marbles and no others. If 2 marbles are to be drawn from the jar, how many different pairs of 2 marbles are both red?

(1) r = 6.
(2) b = 5.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** A pair of 2 marbles that are both red is an unordered choice of 2 of the red marbles, so the number of such pairs is C(r, 2) and depends only on r, not on b. Statement (1) gives r = 6, so the number of all-red pairs is C(6, 2) = (6 x 5) / (2 x 1) = 15, a single determined value; this is sufficient. Statement (2) gives only b = 5, which says nothing about how many red marbles are available and therefore leaves C(r, 2) undetermined; this is not sufficient. Since the count depends solely on r, statement (1) alone suffices while statement (2) alone does not. The correct answer is A.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q97
**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions

How many distinct arrangements of all the letters of the word COMMITTEE have the two E's positioned immediately next to each other?

- A) 5,040
- B) 10,080
- C) 20,160
- D) 22,680
- E) 45,360

**answer:** B
**explanation:** The word COMMITTEE has 9 letters in which three letters each appear twice — M, T, and E — while C, O, and I each appear once. When two specified items must be adjacent, the block method applies: glue the required items into a single unit, arrange the resulting units while still accounting for any other repeated letters, and finally multiply by the distinct internal orderings of the block.

Bind the two E's into one block, denoted [EE]. The objects to be arranged are then this block together with the remaining seven letters C, O, M, M, I, T, T — a total of 8 units. Among these 8 units the letter M still appears twice and the letter T still appears twice, so the number of distinct arrangements of the units is 8! divided by the factorials of those repeat counts:

8! / (2! x 2!) = 40,320 / 4 = 10,080.

Because the two letters inside the block are identical E's, swapping them produces no new arrangement, so the block contributes no additional internal orderings (its internal factor is 1, not 2!). Therefore the total number of arrangements with the two E's adjacent is 10,080.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q98
**difficulty:** Hard
**type:** Problem Solving
**topic:** Combinations

A delegation of 5 is to be selected from a department of 6 senior staff and 4 junior staff. To preserve experience, the delegation may include at most 1 junior staff member. How many different delegations satisfy this requirement?

- A) 6
- B) 60
- C) 66
- D) 186
- E) 252

**answer:** C
**explanation:** Because a delegation is an unordered selection of people, each selection is counted with combinations, where C(n, r) = n! / [r!(n - r)!]. The phrase "at most 1 junior" means the number of junior members is either 0 or 1, so we partition the count into these two mutually exclusive cases, count each with the multiplication principle, and add.

Case 1: 0 juniors, 5 seniors. All five members are chosen from the 6 seniors, giving C(6, 5) = 6, and the juniors contribute C(4, 0) = 1, so this case yields 6 x 1 = 6.

Case 2: 1 junior, 4 seniors. Choose 1 of the 4 juniors and 4 of the 6 seniors: C(4, 1) x C(6, 4) = 4 x 15 = 60.

Because the two cases are mutually exclusive and together exhaust the "at most 1 junior" condition, the total number of delegations is the sum:

6 + 60 = 66.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q99
**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions

In how many distinct arrangements of all the letters of the word FAILURE do the four vowels all appear together as one consecutive block (in any order)?

- A) 144
- B) 288
- C) 576
- D) 840
- E) 5,040

**answer:** C
**explanation:** The word FAILURE consists of 7 distinct letters: the four vowels A, I, U, E and the three consonants F, L, R. When a designated set of letters must all stay together, the block method applies: treat the set as a single unit, arrange that unit alongside the remaining letters, and then multiply by the number of internal orderings within the block.

First, treat the four vowels as a single block. This block, together with the three consonants F, L, and R, gives 4 units to arrange in a row. Since all four units are distinct, the number of arrangements of the units is 4! = 24.

Next, the four vowels inside the block are themselves distinct and may be ordered among themselves in 4! = 24 ways.

By the multiplication principle, the total number of arrangements in which the four vowels form one consecutive block is the product of the two counts:

4! x 4! = 24 x 24 = 576.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q100
**difficulty:** Hard
**type:** Problem Solving
**topic:** Counting Principle

How many 4-digit integers are divisible by 5 and have four distinct digits? (A 4-digit integer cannot begin with 0.)

- A) 504
- B) 952
- C) 1,008
- D) 1,800
- E) 4,536

**answer:** B
**explanation:** An integer is divisible by 5 exactly when its units digit is 0 or 5, so the units position drives the count. Because the digits must be distinct and the leading digit cannot be 0, we split into two mutually exclusive cases according to the units digit and apply the fundamental counting principle within each.

Case 1: units digit is 0. The thousands, hundreds, and tens digits are then chosen, distinct, from the remaining 9 digits. Since 0 is already used, the thousands digit is automatically nonzero, so there is no extra leading-digit restriction. The counts are 9 choices for the thousands digit, then 8, then 7:

9 x 8 x 7 = 504.

Case 2: units digit is 5. The thousands digit cannot be 0 and cannot be 5, leaving 8 choices. The hundreds digit may be any of the remaining 8 digits (0 is now allowed, and 5 is already used), and the tens digit may be any of the remaining 7. The count is:

8 x 8 x 7 = 448.

Because the two cases are mutually exclusive and exhaust all multiples of 5, the total is the sum:

504 + 448 = 952.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q101
**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions

A planning board of 4 people is to be selected from 5 married couples (10 people in all). To avoid conflicts of interest, no two people who are married to each other may both serve on the board. How many different boards can be formed?

- A) 40
- B) 80
- C) 120
- D) 160
- E) 210

**answer:** B
**explanation:** The constraint is that the four chosen people must come from four different couples, since selecting both members of any couple is forbidden. This decomposes naturally into two independent stages: first decide which couples are represented, then decide which member of each represented couple is chosen. The fundamental counting principle lets us multiply the counts of the two stages, and the unordered choice of couples is counted with a combination.

Stage 1: choose which 4 of the 5 couples will be represented on the board. Since the couples are interchangeable for this purpose and order does not matter, the number of ways is C(5, 4) = 5.

Stage 2: from each of the 4 chosen couples, select exactly one of the 2 spouses to serve. Each couple offers 2 independent choices, so across the 4 couples the number of ways is 2 x 2 x 2 x 2 = 2^4 = 16.

By the multiplication principle, the total number of valid boards is the product of the two stages:

C(5, 4) x 2^4 = 5 x 16 = 80.

The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q102
**difficulty:** Medium
**type:** Problem Solving
**topic:** Restrictions

Six distinct students are to be seated in a single row of six chairs. In how many of the possible arrangements is Sara seated somewhere to the left of Tom (not necessarily immediately next to him)?

- A) 120
- B) 240
- C) 360
- D) 600
- E) 720

**answer:** C
**explanation:** This problem is solved by a symmetry argument rather than by direct enumeration. The total number of ways to seat 6 distinct students in a row is 6! = 720, with no restriction on relative position.

Now consider only the relative order of Sara and Tom within any arrangement. In every seating, exactly one of two mutually exclusive situations holds: either Sara is to the left of Tom, or Tom is to the left of Sara (they cannot occupy the same chair, so there is no tie). These two situations are perfectly symmetric, because for every arrangement in which Sara is left of Tom there is a unique matching arrangement, obtained by swapping the two people's seats, in which Tom is left of Sara. This pairing is a one-to-one correspondence between the two groups, so the 720 arrangements split into two equal halves.

Therefore the number of arrangements in which Sara is to the left of Tom is exactly half of the total:

720 / 2 = 360.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q103
**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions

In how many distinct arrangements of all the letters of the word BANANA do the two N's never appear immediately next to each other?

- A) 16
- B) 20
- C) 24
- D) 40
- E) 60

**answer:** D
**explanation:** The word BANANA has 6 letters, with A appearing three times, N appearing twice, and B appearing once. A clean way to enforce a non-adjacency condition is the gap method: first arrange all the other letters, then insert the restricted letters into the gaps between them so that no two restricted letters land in the same gap.

Step 1: arrange the non-N letters, namely B, A, A, A. These four letters include three identical A's, so the number of distinct arrangements is 4! / 3! = 24 / 6 = 4.

Step 2: each such arrangement of four letters creates 5 gaps into which the N's can be placed — one gap before the first letter, one after the last, and three between adjacent letters. To keep the two N's apart, we place them in 2 different gaps. Because the two N's are identical, the choice of gaps is unordered, so the number of ways is C(5, 2) = (5 x 4) / (2 x 1) = 10.

By the multiplication principle, the total number of arrangements with the N's never adjacent is the product:

4 x 10 = 40.

As a check, the total number of distinct arrangements of BANANA is 6! / (3! x 2!) = 720 / 12 = 60, and the number with the two N's together (gluing them into one block of 5 units B, A, A, A, [NN], counted as 5! / 3! = 20) gives 60 - 20 = 40, confirming the result.

The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q104
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Combinations

A relay squad of 3 is to be chosen from a club of g girls and b boys. How many different squads consist of exactly 1 girl and 2 boys?

(1) There are exactly 21 ways to choose an unordered pair of 2 boys from the club.
(2) g = 5.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** A squad with exactly 1 girl and 2 boys is built by an unordered choice of 1 girl from the g available and 2 boys from the b available, so the number of such squads is C(g, 1) x C(b, 2) = g x C(b, 2). Determining this value requires knowing both g and the number of boys b (or directly the value of C(b, 2)).

Statement (1) says the number of unordered pairs of boys is C(b, 2) = 21, which fixes the boys' factor at 21 and, incidentally, implies b = 7 since C(7, 2) = 21. However, the number of girls g is unknown, so the product g x 21 is undetermined. Statement (1) alone is not sufficient.

Statement (2) gives g = 5, so the girl can be chosen in C(5, 1) = 5 ways, but the number of boys b is unknown, leaving 5 x C(b, 2) undetermined. Statement (2) alone is not sufficient.

Taking the statements together, C(b, 2) = 21 and g = 5, so the number of squads is g x C(b, 2) = 5 x 21 = 105, a single determined value. Both statements together are sufficient, but neither alone is.

The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q105

**difficulty:** Easy
**type:** Problem Solving
**topic:** Multiplication Principle


A lunch counter offers a fixed-price combo in which a customer picks exactly one sandwich, one soup, and one drink. There are 4 sandwiches, 3 soups, and 5 drinks available. How many different combos can a customer order?

- A) 12
- B) 15
- C) 19
- D) 60
- E) 120

**answer:** D
**explanation:** Governing principle: the multiplication (fundamental counting) principle. When a choice is made in several stages, multiply the number of options at each stage. Here the three stages are the sandwich (4 ways), the soup (3 ways), and the drink (5 ways). The total number of combos is 4 x 3 x 5 = 60. (Adding the counts, 4 + 3 + 5 = 12, is the classic error; 4 x 3 = 12 or 3 x 5 = 15 forget a stage; 4 + 3 x 5 = 19 mishandles order of operations; 60 x 2 = 120 double-counts.) The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q106

**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting Principle


A locker uses a 3-character code. The first character must be a letter (A through Z) and each of the last two characters must be a digit (0 through 9). Digits may repeat. How many different locker codes are possible?

- A) 46
- B) 260
- C) 2600
- D) 6760
- E) 67600

**answer:** C
**explanation:** Governing principle: the fundamental counting principle. Multiply the number of choices available at each position. Position 1 (a letter) has 26 choices; position 2 (a digit) has 10 choices; position 3 (a digit) has 10 choices. Because digits may repeat, the choices are made freely at each slot, so the total is 26 x 10 x 10 = 2600. (26 + 10 + 10 = 46 adds instead of multiplying; 26 x 10 = 260 drops a digit slot; 26 x 26 x 10 = 6760 wrongly uses two letters; 26 x 26 x 10 x 10 = 67600 adds an extra letter slot.) The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q107

**difficulty:** Medium
**type:** Problem Solving
**topic:** Fundamental Counting


A website requires a 4-character password. Each character may be any one of the 26 lowercase letters or any one of the 10 digits, and characters may repeat. How many different passwords are possible?

- A) 1296
- B) 46656
- C) 456976
- D) 1679616
- E) 60466176

**answer:** D
**explanation:** Governing principle: the fundamental counting principle. First find how many choices exist for a single character: 26 letters + 10 digits = 36 options. Since each of the 4 characters is chosen from all 36 options and repeats are allowed, multiply 36 by itself once per position: 36 x 36 x 36 x 36 = 36^4 = 1,679,616. (36^2 = 1296 and 36^3 = 46656 use too few positions; 26^4 = 456976 forgets the digits; 36^5 = 60,466,176 uses one position too many.) The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q108

**difficulty:** Hard
**type:** Problem Solving
**topic:** Counting Principle


A region issues 6-character license plates that must alternate between letters and digits. A plate is valid only if it follows one of exactly two formats: letter-digit-letter-digit-letter-digit, or digit-letter-digit-letter-digit-letter. Letters are chosen from A through Z (26 options), digits from 0 through 9 (10 options), and characters may repeat within a plate. How many valid license plates are possible?

- A) 13520000
- B) 17576000
- C) 35152000
- D) 70304000
- E) 91395200

**answer:** C
**explanation:** Governing principle: the fundamental counting principle applied to each format, then add the two disjoint formats. In each format there are exactly 3 letter positions (26 choices each) and 3 digit positions (10 choices each), so one format yields 26^3 x 10^3 = 17,576 x 1000 = 17,576,000 plates. The two formats produce completely different plates (they start with different character types), so add them: 17,576,000 + 17,576,000 = 2 x 17,576,000 = 35,152,000. (17,576,000 counts only one format; 4 x 26^3 x 10^3 = 70,304,000 uses four formats; 2 x 26^2 x 10^4 = 13,520,000 miscounts as 2 letters and 4 digits; 2 x 26^4 x 10^2 = 91,395,200 miscounts as 4 letters and 2 digits.) The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q109

**difficulty:** Easy
**type:** Problem Solving
**topic:** Permutations


A display shelf has 5 positions in a row, left to right. A store manager wants to place 5 different award trophies on the shelf, one trophy per position. In how many different orders can the 5 trophies be arranged on the shelf?

- A) 20
- B) 24
- C) 60
- D) 120
- E) 720

**answer:** D
**explanation:** Governing principle: arranging n distinct objects in a row gives n! orderings. Here 5 distinct trophies fill 5 distinct positions, so the number of arrangements is 5! = 5 x 4 x 3 x 2 x 1 = 120. (Distractor 24 = 4!, treating only 4 objects; 720 = 6!, one too many; 20 = 5 x 4, filling only the first two positions; 60 = 5!/2, dividing by an unnecessary symmetry factor.) The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q110

**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations


A reader is packing for a trip and will bring exactly 4 novels chosen from the 9 different novels on a shelf. Since the novels will all be carried together in one bag, the order of selection does not matter. How many different sets of 4 novels can the reader choose?

- A) 84
- B) 126
- C) 210
- D) 792
- E) 3024

**answer:** B
**explanation:** Governing principle: choosing r items from n distinct items where order does not matter is nCr = n! / (r!(n-r)!). Here 9C4 = 9! / (4! x 5!) = (9 x 8 x 7 x 6) / (4 x 3 x 2 x 1) = 3024 / 24 = 126. (Distractor 3024 = 9P4, the permutation, wrongly keeping order; 84 = 9C3, choosing 3 instead of 4; 210 = 10C4, using 10 items; 792 = 12C5, an unrelated miscount.) The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q111

**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations


How many distinct arrangements can be formed using all 7 letters of the word BALLOON?

- A) 210
- B) 420
- C) 630
- D) 1260
- E) 2520

**answer:** D
**explanation:** Governing principle: the number of distinct arrangements of n objects where one group of identical objects repeats a times and another repeats b times is n! / (a! x b!). BALLOON has 7 letters with L repeated twice and O repeated twice (B, A, N each appear once). So the count is 7! / (2! x 2!) = 5040 / 4 = 1260. (Distractor 2520 = 7!/2!, dividing for only one repeated pair; 5040 = 7! would ignore both repeats but is not listed; 630 = 7!/(2! x 2! x 2!), over-dividing as if there were three repeated pairs; 420 = 7!/(3! x 2!), mis-sizing a repeat as triple; 210 = 7!/4!, over-dividing as if four letters were identical.) The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q112

**difficulty:** Hard
**type:** Problem Solving
**topic:** Combinations


A studio must staff a project by selecting 3 designers from a pool of 7 available designers and 2 writers from a pool of 5 available writers. Within each role the people chosen are simply a set, so the order in which they are picked does not matter. How many different project teams are possible?

- A) 45
- B) 350
- C) 792
- D) 2100
- E) 4200

**answer:** B
**explanation:** Governing principle: when independent selections are made from separate pools, multiply the number of ways for each pool, and each unordered selection uses a combination nCr. Designers: 7C3 = 35. Writers: 5C2 = 10. Total teams = 35 x 10 = 350. (Distractor 45 = 35 + 10, adding the stages instead of multiplying; 4200 = 7P3 x 5P2 = 210 x 20, using ordered permutations for both roles; 2100 = 7P3 x 5C2 = 210 x 10, ordering only the designers; 792 = 12C5, ignoring the two separate pools and just choosing 5 people from all 12.) The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q113

**difficulty:** Easy
**type:** Problem Solving
**topic:** Restrictions


Five distinct books — a novel, a biography, an atlas, a dictionary, and a cookbook — are to be placed in a row on a shelf. The atlas and the dictionary must NOT be placed next to each other. In how many different orders can the five books be arranged?

- A) 24
- B) 48
- C) 72
- D) 96
- E) 120

**answer:** C
**explanation:** This is a restriction problem handled by subtraction: total arrangements minus the forbidden (adjacent) ones. Total arrangements of 5 distinct books = 5! = 120. Now count arrangements where the atlas and dictionary ARE adjacent using the glue-block method: treat the two of them as a single block, giving 4 items (block + 3 other books), which arrange in 4! = 24 ways, and the two books inside the block can be ordered in 2! = 2 ways, for 24 × 2 = 48 adjacent arrangements. Subtract: 120 − 48 = 72 arrangements in which they are not next to each other. (Option 48 is the adjacent count itself; 120 forgets the restriction; 24 is 4!.) The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q114

**difficulty:** Medium
**type:** Problem Solving
**topic:** Restrictions


Seven people — four adults (all distinct) and three children (all distinct) — are to be seated in a row of seven chairs. The three children must all sit together, in three consecutive chairs. In how many different ways can the seven people be seated?

- A) 120
- B) 144
- C) 240
- D) 600
- E) 720

**answer:** E
**explanation:** Use the glue-block method for the 'must sit together' restriction. Bundle the three children into a single block. This leaves 5 units to arrange: the 4 adults plus the 1 children-block, which can be ordered in 5! = 120 ways. Within the block, the 3 children can be ordered among themselves in 3! = 6 ways. By the multiplication principle, total = 120 × 6 = 720. (Option 144 = 3!·4! wrongly bundles only the adults; 120 = 5! forgets the internal 3!.) The correct answer is E.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q115

**difficulty:** Medium
**type:** Problem Solving
**topic:** Committee Selection with Constraints


A firm has 5 engineers and 4 designers. A committee of 4 people is to be chosen from these 9. The committee must include at least one designer. How many different committees are possible?

- A) 40
- B) 116
- C) 120
- D) 121
- E) 126

**answer:** D
**explanation:** For an 'at least one' committee constraint, use the complement: (all committees) − (committees with no designer). Total committees of 4 from 9 people = C(9,4) = 126. Committees with no designer use only the 5 engineers: C(5,4) = 5. Therefore committees with at least one designer = 126 − 5 = 121. (Option 126 ignores the restriction; 116 wrongly subtracts C(5,3)=10; 40 counts only 'exactly one designer' = C(4,1)·C(5,3).) The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q116

**difficulty:** Medium
**type:** Problem Solving
**topic:** Circular Permutations


Six distinct people are to be seated around a round table. The host and the guest of honor must sit next to each other. Two seatings are considered the same if one can be obtained from the other by rotating everyone around the table. How many distinct seatings are possible?

- A) 24
- B) 48
- C) 120
- D) 240
- E) 720

**answer:** B
**explanation:** This is a circular-permutation problem with an adjacency constraint. Glue the host and guest of honor into one block, so there are 5 units to place around the table. Distinct circular arrangements of 5 units (rotations equivalent) = (5 − 1)! = 4! = 24. The two people inside the block can be ordered in 2! = 2 ways. Total = 24 × 2 = 48. (Option 120 = 5! treats the seats as a straight row; 720 = 6! ignores both the circular reduction and the constraint; 24 forgets the internal ordering.) The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q117

**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations with Adjacency Restrictions


Three distinct math books and two distinct physics books are to be arranged in a single row on a shelf. The two physics books must NOT be adjacent to each other. In how many different orders can the five books be arranged?

- A) 48
- B) 60
- C) 72
- D) 96
- E) 120

**answer:** C
**explanation:** Use the gap method for the 'not adjacent' restriction. First arrange the 3 math books in a row: 3! = 6 ways. These create 4 gaps (including the two ends) in which physics books can go: _ M _ M _ M _. Place the 2 distinct physics books into 2 different gaps so they are never adjacent: choose and order 2 of the 4 gaps = 4 × 3 = 12 ways. Total = 6 × 12 = 72. (Check by subtraction: 5! − 2·4! = 120 − 48 = 72.) Option 120 = 5! forgets the restriction; 48 = 2·4! is the adjacent count. The correct answer is C.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q118

**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions


Six distinct speakers — A, B, C, D, E, and F — are to be scheduled one after another in six time slots. Two restrictions apply: speaker A must be scheduled at some point before speaker B (not necessarily immediately before), and speakers C and D must be scheduled in consecutive slots (in either order). How many different schedules satisfy both restrictions?

- A) 120
- B) 180
- C) 240
- D) 360
- E) 720

**answer:** A
**explanation:** Handle the two restrictions in turn. First the adjacency of C and D: glue them into one block, giving 5 units (block, A, B, E, F) to arrange in 5! = 120 ways, with 2! = 2 internal orders for C and D, so 120 × 2 = 240 schedules have C and D consecutive. Now impose 'A before B': among all these schedules, by symmetry A precedes B in exactly half of them (swapping the positions of A and B pairs each schedule with a distinct one where the order is reversed, and this swap does not disturb the C–D block). So 240 ÷ 2 = 120. (Option 240 applies only the adjacency; 720 = 6! is all schedules; 360 = 720/2 applies only the 'A before B' halving.) The correct answer is A.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q119

**difficulty:** Medium
**type:** Problem Solving
**topic:** Grid Paths


A courier travels on a street grid from the corner at (0, 0) to the corner at (5, 4), moving only one block right (east) or one block up (north) at each step. The route must pass through the corner at (2, 3). How many different routes from (0, 0) to (5, 4) pass through (2, 3)?

- A) 20
- B) 40
- C) 50
- D) 70
- E) 126

**answer:** B
**explanation:** A monotone grid path is counted by choosing which of its steps are 'right' versus 'up.' Split the trip at the required point (2, 3). Leg 1, from (0,0) to (2,3), needs 2 rights and 3 ups: C(5,2) = 10 paths. Leg 2, from (2,3) to (5,4), needs 3 rights and 1 up: C(4,1) = 4 paths. By the multiplication principle the number of routes through (2,3) is 10 × 4 = 40. (Option 126 = C(9,5) counts all routes ignoring the required point; 10 and 4 are the individual legs.) The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q120

**difficulty:** Hard
**type:** Problem Solving
**topic:** Committee Selection with Constraints


A committee of 5 people is to be chosen from a group of 6 men and 5 women. The committee must contain at least 2 men and at least 2 women. How many different committees are possible?

- A) 150
- B) 200
- C) 300
- D) 350
- E) 462

**answer:** D
**explanation:** With 5 chosen and requirements of at least 2 men and at least 2 women, the only feasible splits are 2 men/3 women and 3 men/2 women (4+1 or 1+4 would violate one minimum). Case 2M–3W: C(6,2)·C(5,3) = 15 × 10 = 150. Case 3M–2W: C(6,3)·C(5,2) = 20 × 10 = 200. Add the disjoint cases: 150 + 200 = 350. (Option 462 = C(11,5) ignores the constraints; 150 and 200 each count only one valid split; 300 double-counts a single split.) The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q121
**difficulty:** Easy
**type:** Problem Solving
**topic:** Combinations

A student must choose 2 different electives from 5 available electives. How many different pairs of electives can the student choose?

- A) 5
- B) 10
- C) 15
- D) 20
- E) 25

**answer:** B
**explanation:** The order in which the two electives are named does not matter, so this is a combination. The number of pairs is C(5, 2) = (5 x 4)/(2 x 1) = 10. Listing confirms the count: each of 5 choices can pair with 4 others, but dividing by 2 removes the double-counting of each pair. The correct answer is B.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q122
**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations

Five different reports are to be arranged in a row on a shelf. If a particular report must be placed first, how many different arrangements are possible?

- A) 5
- B) 10
- C) 20
- D) 24
- E) 120

**answer:** D
**explanation:** The required report occupies the first position, so only the remaining 4 reports need to be arranged. They can be ordered in 4! = 4 x 3 x 2 x 1 = 24 ways. Choice E counts all 5! arrangements and ignores the fixed first position. The correct answer is D.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

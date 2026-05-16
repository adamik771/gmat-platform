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
**fastest_path:** 3 distinct items in a row → 3! = 6.
**explanation:** Three distinct people, three positions, order matters. Count: 3 × 2 × 1 = 6 (choose first person 3 ways, second 2, third 1). Equivalently, 3! = 6. Verify by listing: ABC, ACB, BAC, BCA, CAB, CBA — six.
**mistake_a:** Computed 3 × 1 = 3 (only counted one position).
**mistake_b:** Computed 4 (off by one).
**mistake_d:** Computed 2³ = 8 (wrong formula).
**mistake_e:** Computed 3² = 9 (wrong formula).
**common_trap:** Counting positions or pairs instead of arrangements.
**takeaway:** "In how many orders can n distinct things line up?" = n! (n factorial). Memorize: 3! = 6, 4! = 24, 5! = 120, 6! = 720.
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
**fastest_path:** Pin one book to position 1; arrange remaining 3 → 3! = 6.
**explanation:** One book is fixed in position 1. The other 3 books fill the remaining 3 positions in any order: 3! = 6 ways. The fixed object reduces the problem from 4! to 3!.
**mistake_b:** Computed 4 × 2 = 8 from a wrong setup.
**mistake_c:** Computed 4!/2 = 12.
**mistake_d:** Computed 3 × 6 = 18 (added an unnecessary factor).
**mistake_e:** Computed 4! = 24 (forgot the constraint).
**common_trap:** Forgetting the constraint reduces the available arrangements.
**takeaway:** When one position is fixed, the remaining objects arrange in (n − 1)! ways. The constraint reduces the count by a factor of n.
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
**fastest_path:** 7 choices for president × 6 for VP = 42.
**explanation:** Distinct roles (president, VP) → order matters → permutation. P(7, 2) = 7 × 6 = 42. Equivalently, 7 ways to fill president, then 6 remaining for VP.
**mistake_a:** Computed 7 × 2 = 14 (wrong formula).
**mistake_b:** Computed 7 + 14 (some wrong combination); got 21.
**mistake_d:** Computed 7² = 49 (treated as with-replacement).
**mistake_e:** Computed 7! = 5040 (counted full arrangement, not just two roles).
**common_trap:** arrangements-vs-combinations confusion — treating distinct-role assignment as a combination, or computing the full factorial when only k slots are needed.
**takeaway:** Distinct roles (different positions) = permutations: P(n, k) = n × (n−1) × ... × (n−k+1) = n!/(n−k)!.
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
**fastest_path:** Order doesn't matter → C(6, 3) = (6 × 5 × 4)/(3 × 2 × 1) = 120/6 = 20.
**explanation:** "Team of 3" — only the membership matters, not order. Use combinations: C(6, 3) = 6!/(3! × 3!) = 720/36 = 20.
**mistake_a:** Computed 6 × 5/2 = 15 (wrong slot count).
**mistake_b:** Computed 6 × 3 = 18 (wrong formula).
**mistake_d:** Computed 6 × 5 × 4 = 120 (used permutations, didn't divide by 3!).
**mistake_e:** Computed 5! = 120 (wrong formula).
**common_trap:** arrangements-vs-combinations confusion — treating teams as ordered.
**takeaway:** "Team," "group," "selection," "committee" → combinations C(n, k); divide by k! to remove ordering.
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
**fastest_path:** C(8, 2) = (8 × 7)/2 = 28.
**explanation:** Toppings on a pizza don't have order — pepperoni + mushroom = mushroom + pepperoni. Use combinations: C(8, 2) = (8 × 7)/(2 × 1) = 28.
**mistake_a:** Computed 8 × 2 = 16 (wrong formula).
**mistake_c:** Computed 8 + 32 = 40 from a wrong combination.
**mistake_d:** Computed 8 × 7 = 56 (used permutations, didn't divide by 2!).
**mistake_e:** Computed 8² = 64 (treated as with-replacement).
**common_trap:** arrangements-vs-combinations confusion on unordered selections.
**takeaway:** Toppings, items, ingredients, members — when order doesn't matter, divide by k! (here, 2!) to remove ordering.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q6

**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations


The letters of the word GAMES are rearranged. How many distinct arrangements are possible?

- A) 24
- B) 60
- C) 120
- D) 240
- E) 720

**answer:** C
**fastest_path:** 5 distinct letters → 5! = 120.
**explanation:** GAMES has 5 letters, all distinct (G, A, M, E, S). Number of arrangements = 5! = 5 × 4 × 3 × 2 × 1 = 120. If any letter repeated (like LEVEL with two L's and two E's), we'd divide by the factorial of each repetition.
**mistake_a:** Computed 4! = 24 (off by one).
**mistake_b:** Computed 5! / 2 = 60 (incorrectly divided by 2).
**mistake_d:** Computed 5! × 2 = 240 (added an unnecessary factor).
**mistake_e:** Computed 6! = 720 (wrong letter count).
**common_trap:** Dividing by a non-existent repetition or using the wrong letter count.
**takeaway:** For arrangements of n *distinct* letters: n! arrangements. For arrangements with repeated letters: n! / (k₁! × k₂! × ...) where k_i = count of each repeated letter.
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
**fastest_path:** C(10, 4) = (10·9·8·7)/(4·3·2·1) = 5040/24 = 210.
**explanation:** "Committee" → unordered selection → combinations. C(10, 4) = 10!/(4! × 6!) = (10 × 9 × 8 × 7)/(4 × 3 × 2 × 1) = 5040/24 = 210.
**mistake_a:** Computed 10 × 4 = 40 — applied no counting formula, just multiplied. Combinations aren't a simple product.
**mistake_c:** Computed 10 × 4! = 240 — multiplied n by k! instead of dividing P(n, k) by k!. The factorial cancels ordering; it belongs in the denominator.
**mistake_d:** Divided the permutation 5040 by 2! instead of 4!: 5040/2 = 2520. A subtle slip: students remember to divide "to remove ordering" but choose the wrong factorial. The cancellation uses k! where k = 4 (the size of the chosen group).
**mistake_e:** Computed P(10, 4) = 10 × 9 × 8 × 7 = 5040 — used permutations and stopped, forgetting to divide by 4! to remove the ordering. The canonical committee-vs-arrangement confusion.
**common_trap:** Treating committee selection as ordered (using P instead of C).
**takeaway:** Committee, panel, group of k from n → C(n, k). Always divide P(n, k) by k! when order doesn't matter.
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
**fastest_path:** Glue SS as one block → arrange 5 items → 5! = 120.
**explanation:** When "must be adjacent," glue them into a single block. The block "SS" plus L, E, O, N = 5 items. Arrange: 5! = 120. The two S's are identical, so no internal ordering of the block adds variation.
**mistake_a:** Computed 5!/2 = 60 (over-divided).
**mistake_c:** Computed 6!/3 = 240 (wrong divisor).
**mistake_d:** Computed 6! × 2/4 = 360.
**mistake_e:** Computed 6! = 720 (didn't apply the "adjacent" constraint).
**common_trap:** Forgetting that identical letters within a block don't add internal arrangements.
**takeaway:** "Must be adjacent" → glue as one block. If the items in the block are *distinct*, multiply by the block's internal arrangements (k!). If *identical*, no multiplication.
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
**fastest_path:** Total − adjacent = 6! − (2 × 5!) = 720 − 240 = 480.
**explanation:** Use the complement. Total arrangements: 6! = 720. Arrangements with Ana and Ben *together* (as a block): 5! × 2 = 240 (5! for block placement, × 2 for AB vs BA). Subtract: 720 − 240 = 480. Direct counting of "not-adjacent" arrangements is much harder.
**mistake_a:** Computed 6! − 2(6) = 240; under-counted forbidden.
**mistake_b:** Computed 6! − 2(6!) /something incorrectly; got 360.
**mistake_d:** Computed 6! − 5! = 720 − 120 = 600; forgot the × 2 internal ordering.
**mistake_e:** Computed 6! = 720 directly without applying the constraint.
**common_trap:** Forgetting the × 2 internal ordering of the block, or computing direct ("not-adjacent") instead of using the complement.
**takeaway:** "Not adjacent" = total − (adjacent). Compute the complement; the direct count is almost always harder.
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
**fastest_path:** C(5, 2) × C(4, 1) = 10 × 4 = 40.
**explanation:** "Exactly 2 men AND 1 woman" — independent selections, then multiply. C(5, 2) = 10 (pick 2 from 5 men); C(4, 1) = 4 (pick 1 from 4 women). Total = 10 × 4 = 40.
**mistake_a:** Computed C(5, 2) + C(4, 1) = 14, then doubled to 20.
**mistake_b:** Computed C(9, 3) − some adjustment = 30.
**mistake_d:** Computed C(5, 2) × C(4, 2) or other miscombination = 60.
**mistake_e:** Computed C(9, 3) = 84 (didn't apply the constraint).
**common_trap:** Adding the two combinations instead of multiplying — multiplication captures "AND."
**takeaway:** "Exactly X of type A AND Y of type B" → C(n_A, X) × C(n_B, Y). The "AND" requires both conditions, which means multiplication.
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
**fastest_path:** Circular: (n − 1)! = 4! = 24.
**explanation:** Circular arrangements: rotations of the same configuration are identical (no "seat #1"). Fix one person's position, then arrange the other (n − 1) in the remaining seats. (5 − 1)! = 4! = 24.
**mistake_b:** Computed 5! / 2 = 60 (wrong divisor).
**mistake_c:** Computed 5! = 120 (treated as linear, didn't account for rotational equivalence).
**mistake_d:** Computed 5! × 2 = 240 (added unnecessary factor).
**mistake_e:** Computed 6! = 720 (wrong count).
**common_trap:** Treating circular arrangements as linear — missing the rotational equivalence.
**takeaway:** Circular arrangements of n distinct items: (n − 1)!. Fixed-seats (e.g., head of table is special) → use n! instead.
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
**fastest_path:** P(10, 4) = 10 × 9 × 8 × 7 = 5040.
**explanation:** Codes have order, no repetition. Slot-by-slot: 10 choices for first digit, 9 for second (one used), 8 for third, 7 for fourth. Total = 10 × 9 × 8 × 7 = 5040. Equivalently, P(10, 4) = 10!/6!.
**mistake_a:** Computed 10 × 4 × 100 = 4000 (wrong combination).
**mistake_c:** Computed 9 × 1000 = 9000 (treated as 4-digit numbers without leading zero — different problem).
**mistake_d:** Computed 10⁴ = 10000 (treated as with-replacement / repetition allowed).
**mistake_e:** Computed 10!/3! = 151200 (wrong slot count).
**common_trap:** Confusing "code" (order matters) with "combination" (order doesn't), or allowing repetition when problem says "no repeats."
**takeaway:** Codes/passwords/sequences = order matters. With repetition: n^k. Without: P(n, k) = n!/(n−k)!.
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
**fastest_path:** 11! / (4! × 4! × 2!) = 39,916,800 / 1,152 = 34,650.
**explanation:** MISSISSIPPI has 11 letters: 4 I's, 4 S's, 2 P's, 1 M. Arrangements = 11! / (4! × 4! × 2! × 1!) = 11!/(24 × 24 × 2) = 39,916,800 / 1,152 = 34,650.
**mistake_b:** Forgot to divide by 2! for the P's; got 11!/(4! × 4!) = 69,300; halved.
**mistake_c:** Divided by only 4! once; got 11!/24 = 1,663,200, then misadjusted to 69,300.
**mistake_d:** Divided incorrectly: 11!/144 = 277,200.
**mistake_e:** Computed 11! / (3! × 4! × 2!) = 332,640.
**common_trap:** Forgetting to divide by the factorial for *each* repeated letter group.
**takeaway:** Distinct arrangements with repeats = total! / (product of factorial of each repeated group). Identify all repeated letters and their counts before computing.
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
**fastest_path:** Pick chair first (8) × C(7, 2) for rest = 8 × 21 = 168.
**explanation:** Two equivalent paths.
(1) Pick the chair first: 8 choices. Then pick 2 more committee members from the remaining 7: C(7, 2) = 21. Total = 8 × 21 = 168.
(2) Pick 3 of 8 unordered: C(8, 3) = 56. Then designate one of the 3 as chair: 56 × 3 = 168.

Both paths give 168, confirming the logic.
**mistake_a:** Computed C(8, 3) = 56 (forgot to assign the chair role).
**mistake_b:** Computed 56 × 2 = 112 (off by one in role assignment).
**mistake_d:** Computed 8 × C(7, 3) = 8 × 35 = 280; nudged to 336.
**mistake_e:** Computed 8 × 7 × 6 / 2 = 168 wrong, got 504 from another miscombination.
**common_trap:** Forgetting the role-assignment step — picking the committee but not the chair.
**takeaway:** When the problem mixes "select group" + "designate a role," compute both stages: combinations for the group + role assignment within. Verify by the alternate path (role first, then rest).
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
**fastest_path:** 2 patterns × (4! men) × (4! women) = 2 × 24 × 24 = 1,152.
**explanation:** Two alternating patterns: MWMWMWMW or WMWMWMWM. For each pattern: 4 men fill the M-slots in 4! = 24 ways; 4 women fill the W-slots in 4! = 24 ways. Per pattern: 24 × 24 = 576. Two patterns: 2 × 576 = 1,152.
**mistake_a:** Considered only one pattern; got 576.
**mistake_c:** Used 2 × 4! × 4! × 2 = 2,304 (added unnecessary factor).
**mistake_d:** Computed differently; got 4,608.
**mistake_e:** Computed 8! = 40,320 (treated all as one group, no constraint).
**common_trap:** Forgetting the second pattern (e.g., considering only "men start" but not "women start").
**takeaway:** Alternating-arrangement problems usually have *two* starting patterns (one for each gender/group). Account for both.
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
**fastest_path:** C(6, 2) × C(5, 2) = 15 × 10 = 150.
**explanation:** "Exactly 2 red" → also "exactly 2 blue" (since only 4 marbles drawn, and only red/blue available). Choose 2 red from 6: C(6, 2) = 15. Choose 2 blue from 5: C(5, 2) = 10. Multiply (AND): 15 × 10 = 150.
**mistake_a:** Computed C(6, 2) + C(5, 2) = 25 (added instead of multiplied).
**mistake_c:** Computed C(6, 4) = 15, then halved or used wrong path; got 200.
**mistake_d:** Computed C(11, 4) = 330 (no constraint applied).
**mistake_e:** Computed C(11, 4) and adjusted incorrectly; got 462.
**common_trap:** Adding instead of multiplying for compound conditions.
**takeaway:** "Exactly X red AND exactly Y blue" → C(red, X) × C(blue, Y). Always check that X + Y matches the total drawn.
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
**fastest_path:** Glue 2 books → 7 items × 2 internal orders = 7! × 2 = 5,040 × 2 = 10,080.
**explanation:** "Not separated by any other book" = adjacent. Treat the two specific books as a single block. Arrange 7 items (the block + 6 other books): 7! = 5,040. The block has 2 internal orderings (Book1-Book2 or Book2-Book1). Total: 5,040 × 2 = 10,080.
**mistake_a:** Computed 7! = 5,040 (forgot the internal ordering of the block).
**mistake_c:** Computed 8! / 2 = 20,160 (wrong divisor).
**mistake_d:** Computed 6! × 2 × 2 = 30,240 (wrong arrangement count).
**mistake_e:** Computed 8! = 40,320 (no constraint applied).
**common_trap:** Forgetting the × 2 internal ordering of the block.
**takeaway:** "Adjacent" / "next to" → glue as block; for *distinct* items in the block, multiply by k! (the block's internal arrangements). For 2 distinct items: × 2.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q18

**difficulty:** Hard
**type:** Problem Solving
**topic:** Combinations


In a round-robin tournament with 10 teams, each team plays every other team exactly once. How many games are played in total?

- A) 20
- B) 45
- C) 90
- D) 100
- E) 180

**answer:** B
**fastest_path:** C(10, 2) = 10 × 9 / 2 = 45.
**explanation:** Each game = unordered pair of teams. Use combinations: C(10, 2) = 10 × 9 / 2 = 45. Order doesn't matter — Team A vs. Team B is the same game as Team B vs. Team A.
**mistake_a:** Computed 10 × 2 = 20 (wrong formula).
**mistake_c:** Computed 10 × 9 = 90 (used permutations, double-counted).
**mistake_d:** Computed 10² = 100 (treated as with-replacement).
**mistake_e:** Computed 10 × 9 × 2 = 180 (wrong multiplier).
**common_trap:** Using permutations (P(10, 2) = 90) and double-counting each game.
**takeaway:** Round-robin tournament: each pair plays once → C(n, 2) = n(n−1)/2. Memorize: 10 teams = 45 games.
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
**fastest_path:** Decompose by valid gender splits: (2W, 3M) + (3W, 2M) + (4W, 1M) = 350 + 210 + 35 = 595.
**explanation:** Decompose by gender split (committee = 5 with at least 2W and at least 1M). Valid splits:
- (2W, 3M): C(5, 2) × C(7, 3) = 10 × 35 = 350
- (3W, 2M): C(5, 3) × C(7, 2) = 10 × 21 = 210
- (4W, 1M): C(5, 4) × C(7, 1) = 5 × 7 = 35

(5W, 0M) excluded by "at least 1 man." Total: 350 + 210 + 35 = 595.
**mistake_a:** Missed (4W, 1M) case; got 350 + 210 = 560... close but wrong direction.
**mistake_b:** Missed (4W, 1M); got 560.
**mistake_d:** Computed C(12, 5) − some adjustment; got 630.
**mistake_e:** Computed C(12, 5) − (5W, 0M case) = 792 − 1 = 791... no, more like 756.
**common_trap:** Missing one of the valid gender-split cases (especially the edge case at the upper bound on women).
**takeaway:** "At least X of A AND at least Y of B" with limited size: enumerate all valid splits and sum the products. Don't forget edge cases.
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
**fastest_path:** Inclusion-exclusion: total = 40 + 30 − |both| = 70 − |both|. Each statement determines |both|, so each alone suffices → D.
**explanation:** Inclusion-exclusion: total = |R| + |B| − |both| = 70 − |both|.

Statement (1): |both| = 12 → total = 58. Sufficient.

Statement (2): let b = |both|. Only red = 40 − b; only blue = 30 − b. Set 40 − b = 3(30 − b) → 40 − b = 90 − 3b → 2b = 50 → b = 25 → total = 45. Sufficient.

Each alone determines |both| (and thus total), so the answer is D.
**mistake_a:** Concluded only Statement 1 sufficient, missed that Statement 2 also pins down |both|.
**mistake_b:** Concluded only Statement 2 sufficient.
**mistake_c:** Required both statements, missing each-alone-sufficient logic.
**mistake_e:** Concluded together insufficient.
**common_trap:** Missing that Statement 2's "3 times" is one equation in one unknown (b), not a ratio with two unknowns.
**takeaway:** Inclusion-exclusion: total = |A| + |B| − |both|. To determine total, need to determine |both|. Both statements pin down |both| → both alone sufficient.
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
**fastest_path:** Complement: P(no black) = C(6, 3)/C(10, 3) = 20/120 = 1/6. P(≥1 black) = 1 − 1/6 = 5/6.
**explanation:** "At least one" → use complement. P(no black) means all 3 drawn are non-black (from the 6 non-black socks: 4 blue + 2 red). P(no black) = C(6, 3)/C(10, 3) = 20/120 = 1/6. So P(at least one black) = 1 − 1/6 = 5/6.

Direct counting (P(exactly 1) + P(exactly 2) + P(exactly 3)) is much harder.
**mistake_a:** Computed P(no black) = 1/6 and bubbled (forgot to take complement).
**mistake_b:** Computed P(exactly 1 black) = some intermediate value.
**mistake_c:** Computed P(exactly 2 black) ≈ 1/2.
**mistake_d:** Computed something between exact and complement.
**common_trap:** complement-not-used — computing direct (exactly 1, 2, 3) instead of using "1 − P(none)."
**takeaway:** "At least one" → complement: P(at least 1) = 1 − P(none). The complement is one calculation; direct counting is multiple.
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
**fastest_path:** (AB together) − (AB together AND CD together) = 240 − 96 = 144.
**explanation:** Compute "A and B together" and subtract the cases where C and D also end up together.

(A and B together): glue AB → 5 items × 2 internal orders = 5! × 2 = 240.

(A and B together AND C and D together): glue both → 4 items × 2 × 2 = 4! × 4 = 96.

Net (A and B together, C and D NOT together) = 240 − 96 = 144.
**mistake_a:** Computed (CD not together) = 6! − 5! × 2 = 720 − 240 = 480; missed AB constraint, then halved.
**mistake_c:** Forgot one of the × 2 internal orderings; got 192.
**mistake_d:** Computed 5! × 2 = 240 (only the first piece, didn't subtract).
**mistake_e:** Computed 6! / 2 = 360, adjusted to 288.
**common_trap:** Forgetting to subtract the both-together case, or missing the internal ordering of one of the blocks.
**takeaway:** Compound conditions ("A condition AND NOT B condition") = (A condition) − (A and B condition). Always include block internal orderings.
**related_reading:** reading-quant-06-statistics-probability-combinatorics


---

## Q23
**difficulty:** Hard
**type:** Problem Solving
**topic:** Circular Permutations

Five distinct people are to be seated around a circular table with 5 chairs. How many distinct seating arrangements are possible if arrangements that differ only by a rotation are considered the same?

- A) 24
- B) 60
- C) 120
- D) 144
- E) 720

**answer:** A
**fastest_path:** Circular: (5 − 1)! = 4! = 24.
**explanation:** Circular arrangements with rotational equivalence: (n − 1)!. For 5 people: (5 − 1)! = 4! = 24. Equivalently, fix one person and arrange the remaining 4 in 4! ways.
**mistake_b:** Computed 5! / 2 = 60 (wrong divisor).
**mistake_c:** Computed 5! = 120 (treated as linear, missed rotational equivalence).
**mistake_d:** Computed 5! / 5 × 6 = 144 (wrong multiplication).
**mistake_e:** Computed 6! = 720 (wrong count).
**common_trap:** Treating circular arrangements as linear; forgetting that rotations of the same configuration are equivalent.
**takeaway:** Circular arrangements of n distinct items with rotational equivalence: (n − 1)!. Linear arrangement: n!.
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
**fastest_path:** With replacement → independent draws. P(both red) = (3/5)² = 9/25.
**explanation:** With replacement, the two draws are independent. Each draw has probability 6/10 = 3/5 of red. P(both red) = (3/5) × (3/5) = 9/25.
**mistake_b:** Computed without replacement: (6/10)(5/9) = 30/90 = 1/3.
**mistake_c:** Computed (6/10) directly = 3/5 (only one draw); mistakenly bubbled.
**mistake_d:** Computed 1/2 from a sloppy estimate.
**mistake_e:** Computed (6/10) for one draw and (4/10) for the other (mismatched).
**common_trap:** independence-confusion — treating with-replacement draws as without-replacement (or vice versa).
**takeaway:** With replacement → independent → multiply individual probabilities. Without replacement → conditional → adjust each probability after the previous draw.
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
**fastest_path:** Split (2,1,1) by group: 18 + 18 + 9 = 45.
**explanation:** Committee = 4, with at least one from each of 3 groups. Only valid splits: (2, 1, 1) with the "2" from one group.

- (2 econ, 1 eng, 1 law): C(3, 2)·C(3, 1)·C(2, 1) = 3·3·2 = 18
- (1 econ, 2 eng, 1 law): C(3, 1)·C(3, 2)·C(2, 1) = 3·3·2 = 18
- (1 econ, 1 eng, 2 law): C(3, 1)·C(3, 1)·C(2, 2) = 3·3·1 = 9

Sum: 18 + 18 + 9 = 45.
**mistake_a:** Computed only first two cases; got 36.
**mistake_c:** Mis-counted (2 law) case as 18; got 54.
**mistake_d:** Computed (3,1,0) cases incorrectly; got 60.
**mistake_e:** Used C(8, 4) = 70 (no constraint applied).
**common_trap:** Missing one of the (2, 1, 1) split cases, especially the smallest-group one.
**takeaway:** "Committee with at least one from each group" + small total: enumerate all valid integer splits, compute each via C(n, k), sum.
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
**fastest_path:** Give each child 1 (uses 4); distribute 6 remaining via stars-and-bars: C(9, 3) = 84.
**explanation:** "At least one each" → first give each child 1 candy (uses 4 candies). Then distribute the remaining 10 − 4 = 6 identical candies freely among 4 distinct children. Stars-and-bars formula: C(6 + 4 − 1, 4 − 1) = C(9, 3) = 84.
**mistake_a:** Computed C(8, 3) = 56 (wrong star count).
**mistake_b:** Computed C(8, 4) = 70 (wrong setup).
**mistake_d:** Treated as ordered: 4! × ? = 120.
**mistake_e:** Computed C(10, 4) = 210 (didn't apply the at-least-one constraint).
**common_trap:** Forgetting the "at least one" gives each child 1 first; or computing C(13, 3) = 286 (treating as no constraint).
**takeaway:** "Distribute n identical items among k distinct recipients with at least 1 each" → first give each 1, then distribute (n − k) freely via stars-and-bars: C(n − k + k − 1, k − 1) = C(n − 1, k − 1).
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
**fastest_path:** 6! / (2! × 2!) = 720 / 4 = 180.
**explanation:** COFFEE has 6 letters: C, O, F, F, E, E. Two pairs of repeats (FF and EE). Distinct arrangements = 6! / (2! × 2!) = 720 / 4 = 180.
**mistake_a:** Computed 6! / (3! × 2!) = 60 (wrong divisor).
**mistake_b:** Computed 6! / 6 = 120 (wrong divisor).
**mistake_d:** Computed 6! / 2 = 360 (divided by 2! once instead of twice).
**mistake_e:** Computed 6! = 720 (treated all letters as distinct).
**common_trap:** Dividing by 2! only once when there are two repeated pairs.
**takeaway:** Distinct arrangements with multiple repeated groups: n! / (k₁! × k₂! × ...). For COFFEE: divide by 2! for the F's *and* by 2! for the E's.
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
**fastest_path:** Glue pair → 6 units circular: (6−1)! × 2 = 120 × 2 = 240.
**explanation:** Glue the required pair as a single block. Now 6 distinct units around a circular table (block + 5 others). Circular arrangements of 6 distinct units: (6 − 1)! = 5! = 120. The pair has 2 internal orderings. Total: 120 × 2 = 240.
**mistake_a:** Computed (5)! × 1 = 120 (forgot internal pair ordering).
**mistake_c:** Computed 6! / 2 = 360 (wrong setup).
**mistake_d:** Computed 6! = 720 (treated as linear).
**mistake_e:** Computed 6! × 2 = 1,440 (treated as linear with internal ordering).
**common_trap:** Forgetting the × 2 internal pair ordering, or treating the circular arrangement as linear.
**takeaway:** Circular arrangement with adjacent pair: glue as block, apply (n − 1)! for circular, multiply by k! for the block's internal ordering.
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
**fastest_path:** Binomial: P(3 of 5 heads) = C(5, 3) × (1/2)⁵ = 10/32 = 5/16.
**explanation:** Binomial formula: P(k heads in n flips) = C(n, k) × p^k × (1−p)^(n−k). For a fair coin, p = 1/2. P(3 of 5 heads) = C(5, 3) × (1/2)³ × (1/2)² = 10 × 1/32 = 10/32 = 5/16.
**mistake_b:** Computed 3/8 (wrong combinatorial setup).
**mistake_c:** Computed 1/2 (confused "exactly 3 heads" with "at least 3 heads" — which is 1/2 by symmetry but requires more work).
**mistake_d:** Computed 5/8 (some inverse setup).
**mistake_e:** Computed 1/4 from a partial computation.
**common_trap:** Confusing "exactly k" with "at least k" — different probabilities; "at least" requires summing across multiple cases.
**takeaway:** Binomial: P(exactly k of n trials, each prob p) = C(n, k) × p^k × (1−p)^(n−k). For fair coin: × (1/2)^n.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

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
**mistake_d:** Computed 8 × P(7, 2) = 8 × 42 = 336: chose the chair correctly (8 options) but then ordered the two remaining seats, using P(7, 2) = 7 × 6 = 42 instead of C(7, 2) = 21. The non-chair committee members hold no rank — they form an unordered pair. Ordering slots that carry no distinct role inflates the count by 2! = 2.
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
**mistake_a:** Set up the (2W, 3M) case correctly as C(5,2)·C(7,3) = 350, but in the (3W, 2M) case mis-indexed the men's combination as C(7, 1) = 7 instead of C(7, 2) = 21, getting C(5,3)·C(7,1) = 10·7 = 70. Summing those two (and missing the third case entirely) gives 350 + 70 = 420. The committee has 5 seats; with 3 women, exactly 2 men remain — use C(7, 2), not C(7, 1).
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
**mistake_a:** Stopped at the (AB together) AND (CD together) count — glue both pairs into blocks, giving 4 units × 2 AB-orderings × 2 CD-orderings = 4! × 4 = 96 — and treated that as the final answer. This is the value to *subtract*, not the result. The answer requires (AB together) − (AB together AND CD together) = 240 − 96 = 144.
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
**topic:** Circular Permutations with Adjacency Restriction

Five friends are to be seated around a circular table. Two of the friends — Alex and Beth — refuse to sit next to each other. How many distinct seating arrangements are possible? (Arrangements that differ only by a rotation are considered the same.)

- A) 4
- B) 6
- C) 8
- D) 12
- E) 18

**answer:** D
**fastest_path:** Total circular − adjacent = (5−1)! − (4−1)!·2 = 24 − 12 = 12.
**explanation:** Use the complement. Total distinct circular arrangements of 5 people: (5−1)! = 4! = 24. Arrangements where Alex and Beth ARE adjacent: treat them as one block → 4 units around a circle → (4−1)! = 3! = 6 circular arrangements, × 2 for Alex-Beth vs Beth-Alex internal orderings = 12. Non-adjacent = 24 − 12 = 12.
**mistake_a:** Arrived at 4 from a double-divisor error — perhaps computed (5-1)! / 3! = 24/6 = 4, dividing by the wrong factorial. Only the complement method gives the reliable path: total (24) − adjacent (12) = 12.
**mistake_b:** Computed circular arrangements of the 4 units (block + 3 others) = (4-1)! = 3! = 6, then stopped and bubbled 6 as the final answer. This is only half the adjacent count (before multiplying by 2 for internal ordering), and it's the adjacent count — not the non-adjacent count. Always subtract from the total: non-adjacent = 24 − 12 = 12.
**mistake_c:** Divided total arrangements by 3: 24/3 = 8, reasoning that "1 of every 3 arrangements has the pair adjacent." The actual adjacent probability is 2/4 = 1/2 (Alex is fixed; Beth has 2 adjacent seats out of 4 remaining), so adjacent = 24 × (1/2) = 12 and non-adjacent = 12. Proportion shortcuts require a verified probability, not a guess.
**mistake_e:** Computed 24 − 6 = 18 — forgot to multiply the circular block count by 2 for the internal ordering. Adjacent arrangements = (4-1)! circular × 2 internal = 6 × 2 = 12, not 6.
**common_trap:** Forgetting the ×2 internal ordering of the pair's block, or solving the complement but bubbling the adjacent count instead of the non-adjacent count.
**takeaway:** "Not adjacent" in circular arrangements = total − adjacent. Adjacent count = (n−2)! × 2! (fix the pair as a block, arrange remaining circularly, multiply by pair's internal orderings).
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

---

## Q30
**difficulty:** Easy
**type:** Problem Solving
**topic:** Probability — Independent Events

A bag contains 3 red marbles and 7 blue marbles. A marble is drawn at random, its color recorded, and it is returned to the bag. A second marble is then drawn. What is the probability that both marbles drawn are red?

- A) 3/50
- B) 6/100
- C) 9/100
- D) 3/10
- E) 9/10

**answer:** C
**hint_nudge:** Because the first marble is replaced, the two draws don't affect each other. How do independent probabilities combine?
**hint_strategy:** P(both red) = P(1st red) × P(2nd red). With replacement, each draw has the same probability.
**hint_setup:** P(red on one draw) = 3/10. Multiply: (3/10) × (3/10).
**fastest_path:** With replacement → independent: (3/10)² = 9/100.
**explanation:** With replacement, each draw is an independent event with the same probabilities. P(red on any single draw) = 3/10. For both draws to produce red, multiply: (3/10) × (3/10) = 9/100. The "with replacement" condition is the signal that independence holds, making multiplication straightforward.
**mistake_a:** Computed 3/(10 × 5) = 3/50 — used an incorrect denominator of 100 but also halved it.
**mistake_b:** Doubled the numerator only: 6/100 (computed 2 × 3/100 instead of (3/10)²).
**mistake_d:** Computed only the first-draw probability and stopped: 3/10.
**mistake_e:** Confused P(at least one red) for P(both red); 9/10 is not correct for either.
**common_trap:** Forgetting to square when draws are with replacement, or treating a replacement scenario as if marbles are removed.
**takeaway:** With replacement → events are independent → multiply: P(A and B) = P(A) × P(B). Without replacement → conditional probability: P(A and B) = P(A) × P(B | A).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q31
**difficulty:** Easy
**type:** Problem Solving
**topic:** Probability — Addition Rule

A single card is drawn from a standard 52-card deck. What is the probability that the card is a heart or a king?

- A) 1/13
- B) 1/4
- C) 4/13
- D) 17/52
- E) 1/2

**answer:** C
**hint_nudge:** Hearts and kings overlap — one card (the king of hearts) is both. Have you accounted for that?
**hint_strategy:** Use the addition rule: P(A or B) = P(A) + P(B) − P(A and B). Identify each piece before adding.
**hint_setup:** P(heart) = 13/52, P(king) = 4/52, P(king of hearts) = 1/52. Apply the formula.
**fastest_path:** 13/52 + 4/52 − 1/52 = 16/52 = 4/13.
**explanation:** The addition rule: P(heart or king) = P(heart) + P(king) − P(heart AND king). A standard deck has 13 hearts and 4 kings; the king of hearts belongs to both groups so it would be double-counted. Subtracting it once: 13 + 4 − 1 = 16 favorable cards. P = 16/52 = 4/13.
**mistake_a:** Counted only the 4 kings: 4/52 = 1/13. Ignored the hearts.
**mistake_b:** Counted only the 13 hearts: 13/52 = 1/4. Ignored the kings.
**mistake_d:** Added 13 + 4 = 17 without subtracting the overlap: 17/52. This is the most common error.
**mistake_e:** 1/2 is a guess with no grounding.
**common_trap:** Forgetting to subtract the intersection when two events overlap — the addition rule requires removing double-counted outcomes.
**takeaway:** P(A or B) = P(A) + P(B) − P(A ∩ B). Always check whether the two events share any outcomes before adding.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q32
**difficulty:** Easy
**type:** Problem Solving
**topic:** Probability — Complement

A fair coin is flipped 4 times. What is the probability of getting at least one head?

- A) 1/2
- B) 3/4
- C) 7/8
- D) 15/16
- E) 1

**answer:** D
**hint_nudge:** "At least one head" covers many cases. What's the one scenario where it fails?
**hint_strategy:** Complement: P(at least one head) = 1 − P(no heads at all). Find P(all tails) first.
**hint_setup:** P(all tails in 4 flips) = (1/2)^4 = 1/16. Subtract from 1.
**fastest_path:** 1 − (1/2)^4 = 1 − 1/16 = 15/16.
**explanation:** "At least one head" includes exactly 1, 2, 3, and 4 heads — four separate cases. Rather than summing them, flip to the complement: the only way to get zero heads is all tails, which has probability (1/2)^4 = 1/16. P(at least one head) = 1 − 1/16 = 15/16.
**mistake_a:** P(exactly 1 head) = C(4,1)/16 = 4/16 = 1/4 ≠ 1/2. A guess, not the right answer.
**mistake_b:** P(at least 2 heads) by a rough half-and-half split. Not equivalent to at-least-one.
**mistake_c:** P(at least one head in 3 flips) = 1 − 1/8 = 7/8 — used wrong n.
**mistake_e:** P = 1 implies certainty, which is impossible since TTTT is a valid outcome.
**common_trap:** Trying to sum P(1 head) + P(2 heads) + P(3 heads) + P(4 heads) instead of using the complement, which introduces arithmetic errors.
**takeaway:** Whenever you see "at least one," immediately apply the complement: P(at least 1) = 1 − P(none). This converts a multi-case sum into a single calculation.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q33
**difficulty:** Easy
**type:** Problem Solving
**topic:** Probability — Conditional

In a class of 30 students, 18 play soccer, 12 play basketball, and 6 play both. If one student is chosen at random from those who play soccer, what is the probability that the chosen student also plays basketball?

- A) 1/5
- B) 1/4
- C) 1/3
- D) 2/5
- E) 1/2

**answer:** C
**hint_nudge:** The problem restricts your sample space to only soccer players. How many are there, and how many of them also play basketball?
**hint_strategy:** P(basketball | soccer) = (students playing both) ÷ (total soccer players).
**hint_setup:** Soccer players = 18. Students playing both = 6. Divide.
**fastest_path:** 6 of the 18 soccer players also play basketball → 6/18 = 1/3.
**explanation:** A conditional probability question. "Given that the student plays soccer" restricts the sample space to only soccer players (18 students). Among them, 6 also play basketball. P(basketball | soccer) = 6/18 = 1/3. The total class size (30) and the basketball count (12) are distractors.
**mistake_a:** Computed 6/30 = 1/5 — used both as numerator over the full class.
**mistake_b:** Computed 1/4 through a wrong combination of numbers.
**mistake_d:** Computed 12/30 = 2/5 — probability of basketball in the full class, ignoring the conditioning.
**mistake_e:** Computed 15/30 or some incorrect combination.
**common_trap:** Using the full class size (30) as the denominator instead of the restricted soccer-player population (18).
**takeaway:** Conditional probability restricts the denominator. P(B | A) = P(A and B) / P(A) = (number in both groups) / (number in group A).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q34
**difficulty:** Easy
**type:** Problem Solving
**topic:** Committee Selection with Gender Constraint

A committee of 3 is to be formed from 5 men and 4 women. How many different committees contain exactly 2 women?

- A) 12
- B) 18
- C) 24
- D) 30
- E) 36

**answer:** D
**hint_nudge:** The committee must have exactly 2 women and therefore exactly 1 man. Count each group separately.
**hint_strategy:** Choose 2 women from 4, then independently choose 1 man from 5. Multiply the counts.
**hint_setup:** C(4, 2) × C(5, 1) = ? × ?
**fastest_path:** C(4, 2) × C(5, 1) = 6 × 5 = 30.
**explanation:** Exactly 2 women and 1 man. Choose women: C(4, 2) = (4 × 3)/(2 × 1) = 6 ways. Choose men: C(5, 1) = 5 ways. These choices are independent, so multiply: 6 × 5 = 30. This is the Multiplication Principle — independent choices along separate dimensions are multiplied together.
**mistake_a:** C(4, 2) only = 6, then multiplied by 2 instead of 5.
**mistake_b:** Used C(5, 2) × C(4, 1) = 10 × 3 → not right (would be 2 men + 1 woman).
**mistake_c:** Arithmetic slip somewhere in the combination calculation.
**mistake_e:** Added C(4, 2) + C(5, 1) instead of multiplying.
**common_trap:** Adding the two counts (6 + 5 = 11) instead of multiplying, or computing the wrong group sizes.
**takeaway:** "Exactly k from group A AND exactly j from group B" → C(|A|, k) × C(|B|, j). Always multiply when the two selections are independent.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q35
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability — Complement with Combinatorics

A bag contains 3 red, 4 blue, and 3 green marbles (10 total). Three marbles are drawn at random without replacement. What is the probability that at least one red marble is drawn?

- A) 7/24
- B) 1/2
- C) 2/3
- D) 17/24
- E) 5/6

**answer:** D
**hint_nudge:** Count "at least one red" directly involves many sub-cases. What simpler event is its complement?
**hint_strategy:** Complement: P(at least one red) = 1 − P(no red marbles drawn). Count non-red combinations.
**hint_setup:** Total ways to choose 3 from 10: C(10, 3). Ways to choose 3 from the 7 non-red marbles: C(7, 3).
**fastest_path:** C(10,3) = 120. C(7,3) = 35. P(no red) = 35/120 = 7/24. Answer = 1 − 7/24 = 17/24.
**explanation:** Three separate cases exist for "at least one red" (exactly 1, 2, or 3 red marbles) — all can be avoided with the complement. Non-red marbles: 4 blue + 3 green = 7. C(10, 3) = 120 total ways to choose 3. C(7, 3) = 35 ways to choose 3 from only non-reds. P(no red) = 35/120 = 7/24. P(at least one red) = 1 − 7/24 = 17/24.
**mistake_a:** Stopped at 7/24 — this is P(no red), the complement, not the answer.
**mistake_b:** Rough intuition guess.
**mistake_c:** Computed P(exactly 1 red) = C(3,1)×C(7,2)/120 = 3×21/120 = 63/120 = 21/40, then misidentified it as 2/3.
**mistake_e:** Slightly overestimated or computed incorrectly.
**common_trap:** Computing P(no red) = 7/24 and choosing it as the answer — the complement trap. The question asks for at-least-one, which equals 1 minus that.
**takeaway:** "At least one" → complement = "none." Always compute P(none) first, then subtract from 1. The key step is identifying the 7 non-red marbles and using C(7, 3).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q36
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability — Sequential Draws Without Replacement

A box contains 5 white balls and 3 black balls. Two balls are drawn sequentially without replacement. What is the probability that the second ball drawn is black, given that the first ball drawn was white?

- A) 3/8
- B) 3/7
- C) 4/7
- D) 1/2
- E) 5/14

**answer:** B
**hint_nudge:** One white ball has already been removed from the box. What does the box now contain?
**hint_strategy:** Condition on the first draw. Remove a white ball, then ask: what fraction of the remaining balls are black?
**hint_setup:** After removing 1 white: 4 white + 3 black = 7 balls remain. P(black | first was white) = 3/7.
**fastest_path:** Remove 1 white → 7 balls remain (4W, 3B). P(2nd black) = 3/7.
**explanation:** Given that the first ball was white, one white ball has been removed. The box now contains 4 white and 3 black = 7 balls total. The conditional probability that the next draw is black is simply 3/7 — the fraction of black balls in the updated box. This is "the definition of conditional probability in a physical sampling context."
**mistake_a:** Used original box composition: 3/8 (as if the first draw hadn't happened).
**mistake_c:** Computed 4/7 — the fraction of white balls in the updated box (wrong color).
**mistake_d:** Guessed 1/2 with no calculation.
**mistake_e:** Computed P(both black) = (3/8) × (2/7) = 6/56 = 3/28, then confused it with the conditional.
**common_trap:** Using the original 8-ball box composition (3/8) instead of the 7-ball box after removing one white. The phrase "given that the first was white" is the signal to update the box.
**takeaway:** "Given that X happened" → update the sample space to reflect X. Remove drawn items and recount. The denominator shrinks by 1 (and the correct-color count drops if that color was drawn).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q37
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations — Non-Consecutive Selections

8 people are seated in a row. In how many ways can 3 of them be selected such that no two selected people are sitting next to each other?

- A) 20
- B) 28
- C) 35
- D) 40
- E) 56

**answer:** A
**hint_nudge:** Think of placing the 3 chosen people as objects that must have at least one unchosen person between each pair.
**hint_strategy:** Use the non-consecutive selection formula: if you choose k non-adjacent items from n in a row, the count is C(n − k + 1, k).
**hint_setup:** n = 8, k = 3. Formula gives C(8 − 3 + 1, 3) = C(6, 3).
**fastest_path:** C(n − k + 1, k) = C(6, 3) = 20.
**explanation:** Let the selected positions be a < b < c where b ≥ a + 2 and c ≥ b + 2 (non-adjacent). Substitution: let a′ = a, b′ = b − 1, c′ = c − 2. Then 1 ≤ a′ < b′ < c′ ≤ 6 (ordinary choice of 3 from 6), giving C(6, 3) = 20. The formula: choosing k non-adjacent items from n in a row = C(n − k + 1, k).
**mistake_b:** C(8, 2) = 28 — selected 2 instead of 3, or confused the formula.
**mistake_c:** C(7, 3) = 35 — off by 1 in the formula (used n − k instead of n − k + 1).
**mistake_d:** Some incorrect enumeration giving 40.
**mistake_e:** C(8, 3) = 56 — ignored the non-adjacency constraint entirely.
**common_trap:** Using C(8, 3) = 56 without any adjustment, forgetting the constraint, or using C(7, 3) from a slightly wrong formula.
**takeaway:** "No two adjacent" from n in a row, choose k: use C(n − k + 1, k). Think of it as placing k items with required gaps, reducing the effective pool.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q38
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability — Without Replacement, Matching Colors

A drawer contains 5 red socks and 7 blue socks. Two socks are drawn at random without replacement. What is the probability that both socks are the same color?

- A) 5/22
- B) 7/22
- C) 31/66
- D) 35/66
- E) 1/2

**answer:** C
**hint_nudge:** "Same color" means either both red or both blue. Find each probability separately and add.
**hint_strategy:** P(same color) = P(both red) + P(both blue). Compute each using sequential conditional probabilities.
**hint_setup:** P(both red) = (5/12)(4/11). P(both blue) = (7/12)(6/11). Add.
**fastest_path:** P(both red) = 20/132. P(both blue) = 42/132. Sum = 62/132 = 31/66.
**explanation:** P(both red) = P(1st red) × P(2nd red | 1st red) = (5/12) × (4/11) = 20/132. P(both blue) = P(1st blue) × P(2nd blue | 1st blue) = (7/12) × (6/11) = 42/132. P(same color) = (20 + 42)/132 = 62/132 = 31/66. Note: 31 and 66 share no common factors (31 is prime), so 31/66 is fully reduced.
**mistake_a:** Computed only P(both red) = 20/132 ≈ 5/33, then misread as 5/22.
**mistake_b:** Computed some combination involving 7 in the numerator.
**mistake_d:** Computed P(different colors) = 1 − 31/66 = 35/66 — the complement, not the answer.
**mistake_e:** Rough guess; 1/2 would imply colors are equally balanced, but 5 ≠ 7.
**common_trap:** Computing P(different colors) instead of P(same color), or computing only one color's probability and forgetting the other.
**takeaway:** "Same color" in a two-draw problem = P(both A) + P(both B). "Different colors" = 1 − P(same color). Always identify which case you need before computing.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q39
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations — Grid Paths

How many distinct paths are there from point (0, 0) to point (4, 6) on a coordinate grid, if each step must move exactly one unit to the right or exactly one unit upward?

- A) 84
- B) 126
- C) 210
- D) 252
- E) 462

**answer:** C
**hint_nudge:** Every path from (0,0) to (4,6) consists of the same total number of steps. How many, and how many of each type?
**hint_strategy:** Every path requires exactly 4 right-steps (R) and 6 up-steps (U), for 10 steps total. Choose which 4 of the 10 steps are rightward.
**hint_setup:** C(10, 4) = 10! / (4! × 6!).
**fastest_path:** C(10, 4) = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1) = 5040 / 24 = 210.
**explanation:** Any path from (0,0) to (4,6) consists of exactly 4 rightward steps and 6 upward steps, in some order. The number of distinct paths equals the number of ways to arrange 4 R's and 6 U's in a sequence of 10: that's C(10, 4) = 210. This is because once you choose which 4 of the 10 positions are R's, the remaining 6 must be U's.
**mistake_a:** C(9, 3) = 84 — used wrong formula.
**mistake_b:** C(9, 4) = 126 — off by 1 in the total step count.
**mistake_d:** C(10, 4) × something = 252? Or C(10, 6) = 210 (same answer via symmetry) miscomputed.
**mistake_e:** C(11, 4) = 330 or C(12, 6) = 924 from a wrong total count.
**common_trap:** Getting the step counts wrong (confusing 4 and 6, or computing 10 total steps as 4 × 6 = 24 by multiplication), or using C(n, r) with the wrong n.
**takeaway:** Grid path from (0,0) to (m, n): every path has exactly m right-steps and n up-steps. Total distinct paths = C(m + n, m). Here: C(4 + 6, 4) = C(10, 4) = 210.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Permutations — Rank of Arrangement

All distinct arrangements of the letters A, D, E, L are listed in alphabetical order. In what position does the arrangement LEAD appear?

- A) 19
- B) 21
- C) 23
- D) 25
- E) 27

**answer:** C
**hint_nudge:** Count all arrangements that come before LEAD alphabetically. Work letter by letter from left to right.
**hint_strategy:** For each leading letter that comes before L in sorted order, all 3! arrangements of the remaining letters precede LEAD. Then, within words starting with L, count sub-groups that precede LE__, then LEA__.
**hint_setup:** Sorted letters: A, D, E, L. Words starting with A: 3! = 6. With D: 6. With E: 6. With LA: 2! = 2. With LD: 2. With LEA: 1. Rank = 6+6+6+2+2+1 = 23.
**fastest_path:** 3×(3!) + 2×(2!) + 1×(1!) = 18 + 4 + 1 = 23.
**explanation:** Sorted order of A, D, E, L: words starting with A (6 words), D (6 words), E (6 words) all come before LEAD — that accounts for 18 words. Within words starting with L, the remaining letters A, D, E sort as A < D < E. Words starting with LA (2 words: LADE, LAED) and LD (2 words: LDAE, LDEA) come before LE__. That's 4 more, totalling 22. Now within words starting with LE, remaining letters are A and D (sorted: A < D). LEAD starts with LEA, and LEAD is the only arrangement of LEA + D: position 23.
**mistake_a:** 18 + 1 = 19 — counted only one sub-group within L words.
**mistake_b:** 18 + 3 = 21 — missed one of the two-letter sub-groups (counted LA but forgot LD).
**mistake_d:** Miscounted a sub-group as 3 instead of 2.
**mistake_e:** Made an arithmetic error in summing sub-groups.
**common_trap:** Counting the L-group sub-arrangements. Students often forget that within "L__", both LA and LD come before LE — missing one of these shifts the rank by 2.
**takeaway:** Rank of a word = sum of arrangements that start with each earlier letter at each position. Work left to right, multiplying by (remaining letters − 1)! at each stage.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability — Binomial, At Least Two

A fair coin is flipped 4 times. What is the probability of getting at least 2 heads?

- A) 1/4
- B) 5/16
- C) 3/8
- D) 11/16
- E) 3/4

**answer:** D
**hint_nudge:** "At least 2 heads" has multiple sub-cases. Is it faster to compute them directly or to use the complement?
**hint_strategy:** Complement: P(at least 2 heads) = 1 − P(0 heads) − P(exactly 1 head).
**hint_setup:** P(0 heads) = C(4,0)(1/2)^4 = 1/16. P(exactly 1 head) = C(4,1)(1/2)^4 = 4/16. Subtract both from 1.
**fastest_path:** 1 − 1/16 − 4/16 = 1 − 5/16 = 11/16.
**explanation:** The complement of "at least 2 heads" is "0 heads or exactly 1 head." P(0 heads) = (1/2)^4 = 1/16. P(exactly 1 head) = C(4,1) × (1/2)^4 = 4 × 1/16 = 4/16. P(≥ 2 heads) = 1 − 1/16 − 4/16 = 16/16 − 5/16 = 11/16. You can verify by also computing P(2)+P(3)+P(4) = 6/16+4/16+1/16 = 11/16. ✓
**mistake_a:** P(exactly 0 or 1 heads) = 5/16 — computed the complement and stopped.
**mistake_b:** P(exactly 0 heads) = 1/16 — only computed one complement case.
**mistake_c:** P(exactly 2 heads) = C(4,2)/16 = 6/16 = 3/8 — answered for "exactly 2," not "at least 2."
**mistake_e:** Rough guess; 3/4 = 12/16, one unit above the correct answer.
**common_trap:** Confusing "at least 2" with "exactly 2." The word "at least" requires including cases for 2, 3, and 4 heads. Using the complement (subtracting 0 and 1 heads) is faster and less error-prone.
**takeaway:** "At least k" with a binomial: use complement if k is close to 0. Subtract P(0 through k−1) from 1. Here k=2, so subtract P(0) + P(1) = 5/16.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q42
**difficulty:** Hard
**type:** Problem Solving
**topic:** Permutations — Coupled Units

Eight distinct people consisting of 4 couples are to be seated in a row of 8 chairs. If each couple must sit together (adjacent), how many seating arrangements are possible?

- A) 96
- B) 192
- C) 384
- D) 768
- E) 1,152

**answer:** C
**hint_nudge:** Treat each couple as a single unit to simplify the problem. Then account for each couple's internal ordering.
**hint_strategy:** Glue each couple into a block → 4 blocks → arrange the 4 blocks → multiply by each block's internal orderings.
**hint_setup:** 4! arrangements of 4 blocks × 2^4 internal orderings (each couple can switch seats).
**fastest_path:** 4! × 2^4 = 24 × 16 = 384.
**explanation:** Treat each couple as an inseparable block. Now there are 4 distinct blocks to arrange in a row: 4! = 24 ways. Within each block, the two people can swap (person A on left or right): 2 choices per couple, and there are 4 couples, giving 2^4 = 16 internal orderings. Total: 4! × 2^4 = 24 × 16 = 384.
**mistake_a:** Computed 4! × 4 = 96 — multiplied by 4 instead of 2^4.
**mistake_b:** Computed 4! × 8 = 192 — used 2^3 or missed one couple's internal ordering.
**mistake_d:** Computed 4! × 2^5 = 768 — overcounted the internal orderings.
**mistake_e:** Computed 8!/something = 1,152 or used a wrong formula.
**common_trap:** Forgetting the internal ordering within each couple (× 2 per couple, or × 2^4 total), or counting 4! without any internal ordering.
**takeaway:** "Must sit adjacent": glue into a block → (number of blocks)! × (internal orderings per block)^(number of blocks). Each couple contributes × 2!.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q43
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability — Multi-Stage Transfer

Box A contains 3 red and 2 blue marbles. Box B contains 1 red and 4 blue marbles. One marble is drawn at random from Box A and placed into Box B. A marble is then drawn at random from Box B. What is the probability that the marble drawn from Box B is red?

- A) 1/5
- B) 4/15
- C) 3/10
- D) 1/3
- E) 2/5

**answer:** B
**hint_nudge:** The composition of Box B changes depending on what was transferred from Box A. Split into two cases.
**hint_strategy:** Law of total probability: P(red from B) = P(red from B | transferred red) × P(transferred red) + P(red from B | transferred blue) × P(transferred blue).
**hint_setup:** Case 1 (red transferred, prob 3/5): Box B has 2R, 4B → P(red) = 2/6 = 1/3. Case 2 (blue transferred, prob 2/5): Box B has 1R, 5B → P(red) = 1/6.
**fastest_path:** (3/5)(1/3) + (2/5)(1/6) = 3/15 + 2/30 = 6/30 + 2/30 = 8/30... wait, let me recompute: (3/5)(2/6) + (2/5)(1/6) = (3/5)(1/3) + (2/5)(1/6) = 1/5 + 1/15 = 3/15 + 1/15 = 4/15.
**explanation:** Two scenarios based on what is transferred. Case 1 (red marble transferred, probability 3/5): Box B now has 2 red and 4 blue (6 total), so P(draw red from B) = 2/6 = 1/3. Joint probability: (3/5) × (1/3) = 1/5. Case 2 (blue marble transferred, probability 2/5): Box B has 1 red and 5 blue (6 total), so P(draw red from B) = 1/6. Joint probability: (2/5) × (1/6) = 1/15. Total: 1/5 + 1/15 = 3/15 + 1/15 = 4/15.
**mistake_a:** Stopped at Case 1's joint probability: 1/5.
**mistake_c:** Used original Box B composition for both cases: P(red from B) = 1/5 and added without adjusting → some error leading to 3/10.
**mistake_d:** Computed P(red from B in Case 2) = 1/6 incorrectly, or averaged 1/3 and 1/6 without weighting.
**mistake_e:** Used 3/5 × 2/5 or another unrelated calculation.
**common_trap:** Forgetting to split into two cases based on what was transferred. Students who use the original Box B composition (1/5) pick choice A.
**takeaway:** When one event affects a subsequent probability, use the Law of Total Probability: sum over all possible intermediate outcomes, weighting each branch by its own probability.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q44
**difficulty:** Hard
**type:** Problem Solving
**topic:** Restrictions — No Two Same-Type Adjacent (Gap Method)

Seven distinct books — 3 math, 2 science, and 2 history — are to be arranged on a shelf. How many arrangements are possible if no two math books are adjacent to each other?

- A) 720
- B) 1,080
- C) 1,440
- D) 2,160
- E) 5,040

**answer:** C
**hint_nudge:** Instead of computing the complement (total minus "at least two math adjacent"), place the non-math books first and find the open gaps.
**hint_strategy:** Gap method: arrange the 4 non-math books first, creating gaps. Then choose gaps for the math books and arrange them there.
**hint_setup:** Non-math books: 4. Arrange them: 4!. Gaps created: 5 (before, between, and after the 4 books). Choose 3 of 5 gaps: C(5, 3). Arrange the 3 math books in those gaps: 3!.
**fastest_path:** 4! × C(5, 3) × 3! = 24 × 10 × 6 = 1,440.
**explanation:** Place the 4 non-math books (2 science + 2 history) in a row: 4! = 24 arrangements. This creates 5 slots (before book 1, between books 1-2, between 2-3, between 3-4, after book 4). Place 3 math books one-per-slot so no two math books are adjacent: choose 3 of 5 slots = C(5, 3) = 10, then arrange the 3 distinct math books in those slots = 3! = 6. Total: 24 × 10 × 6 = 1,440.
**mistake_a:** Computed 4! × 3! = 144, then multiplied by 5 instead of C(5,3)=10, or made an error = 720.
**mistake_b:** Computed 4! × C(5, 3) = 240 and used 4.5 as a multiplier somehow; or 4! × C(5,3) × 3 = 1,080.
**mistake_d:** Double-counted by multiplying by an extra factor.
**mistake_e:** Computed 7! = 5,040 — no restrictions applied.
**common_trap:** Forgetting to multiply by 3! (the math books themselves are distinct and can be arranged within the chosen gaps in 3! = 6 ways).
**takeaway:** "No two of type X adjacent": (1) arrange the other objects (n − k)!, (2) count gaps (n − k + 1), (3) choose k gaps C(n−k+1, k), (4) arrange X's in those gaps k!. Multiply all four.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q45
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability — Ordered Draws, Symmetry

A box contains 6 cards labeled 1, 2, 3, 4, 5, and 6. Three cards are drawn one at a time without replacement. What is the probability that the three cards are drawn in strictly increasing numerical order?

- A) 1/6
- B) 1/12
- C) 1/20
- D) 1/24
- E) 1/120

**answer:** A
**hint_nudge:** Focus on any 3 cards you might draw. Given those 3 specific values, how many orderings of them are possible, and how many are strictly increasing?
**hint_strategy:** By symmetry, every set of 3 cards is equally likely to appear in any of its 3! = 6 possible orderings. Exactly one of those 6 orderings is strictly increasing.
**hint_setup:** P(strictly increasing | any 3 cards drawn) = 1/3! = 1/6. This probability is the same regardless of which 3 cards are chosen.
**fastest_path:** Any 3 distinct cards have 3! = 6 equally likely orderings; exactly 1 is increasing → P = 1/6.
**explanation:** Regardless of which 3 cards are drawn (say, values a < b < c), those 3 cards can be drawn in any of 3! = 6 equally likely orderings (since all arrangements of a given 3-card set are equally likely without replacement). Exactly one ordering — a, b, c — is strictly increasing. By symmetry, P(strictly increasing) = 1/6, independent of the specific 3 cards selected. No combinatorics over the 6 cards is needed.
**mistake_b:** Computed 1/(2 × 3!) = 1/12 — incorrectly accounted for pair orderings or introduced an extra factor.
**mistake_c:** Computed 1/C(6,3) = 1/20 — confused the number of 3-card subsets with the number of orderings of one subset.
**mistake_d:** Computed 1/4! = 1/24 — used the wrong factorial.
**mistake_e:** Computed 1/5! = 1/120 — confused with "all 6 cards in increasing order" (which is 1/6! = 1/720).
**common_trap:** Overcomplicating with C(6,3) in the denominator. The symmetry insight is that within any drawn 3-card set, exactly 1 of 6 orderings is increasing — and that fraction does not depend on which subset is drawn.
**takeaway:** "k items drawn in increasing order" → by symmetry, P = 1/k!. The probability does not depend on the total pool size; it only depends on how many items are drawn.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q46
**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability — Derangements, Exactly k Fixed Points

Four letters are randomly placed into four addressed envelopes — one letter per envelope. What is the probability that exactly 2 letters end up in their correct envelopes?

- A) 1/8
- B) 1/6
- C) 1/4
- D) 1/3
- E) 3/8

**answer:** C
**hint_nudge:** Choose which 2 letters are correctly placed. The remaining 2 must both be wrong — how many ways can that happen?
**hint_strategy:** Count favorable arrangements: (ways to choose which 2 are correct) × (derangements of the remaining 2). Total arrangements = 4!.
**hint_setup:** C(4, 2) = 6 ways to choose the correctly placed pair. With 2 letters left, both must be in each other's wrong envelope — exactly 1 way. Favorable = 6 × 1 = 6. P = 6/24.
**fastest_path:** C(4, 2) × D(2) / 4! = 6 × 1 / 24 = 1/4.
**explanation:** Total arrangements: 4! = 24. To get exactly 2 correct placements: (1) Choose which 2 letters are correctly placed: C(4, 2) = 6. (2) The remaining 2 letters must both land in wrong envelopes — a derangement of 2 items. With 2 items (say letters X and Y for envelopes X and Y), the only "wrong" arrangement is X in Y's envelope and Y in X's envelope: D(2) = 1. Favorable outcomes: 6 × 1 = 6. P = 6/24 = 1/4.
**mistake_a:** Computed C(4,2)/4! = 6/24 but then divided by 2 again, yielding 1/8.
**mistake_b:** Computed 1/6 — used 1/4! somehow incorrectly.
**mistake_d:** Computed 2/6 = 1/3 — forgot that D(2) = 1 and double-counted.
**mistake_e:** Computed C(4,2)/4 = 3/8 — wrong denominator.
**common_trap:** Forgetting that when exactly 2 specific letters are correct, the remaining 2 must both be wrong — which has only 1 arrangement (they swap), not 2. Students sometimes use 2! = 2 for D(2), which is wrong.
**takeaway:** D(2) = 1 (two items must swap). D(3) = 2. D(n) follows the recurrence D(n) = (n−1)[D(n−1) + D(n−2)]. For "exactly k correct," use C(n, k) × D(n−k) / n!.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

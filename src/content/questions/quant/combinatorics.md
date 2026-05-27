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
**topic:** Fundamental Counting Principle


A lunch menu offers 3 soup choices, 4 sandwich choices, and 2 drink choices. If a complete meal consists of exactly one soup, one sandwich, and one drink, how many different meals are possible?

- A) 9
- B) 16
- C) 18
- D) 24
- E) 48

**answer:** D
**fastest_path:** Multiply choices at each independent stage: 3 × 4 × 2 = 24.
**explanation:** Each course is chosen independently. The total number of meal combinations is the product of the choices at each stage — this is the Fundamental Counting Principle (FCP): 3 soups × 4 sandwiches × 2 drinks = 24.
**mistake_a:** Added instead of multiplied: 3 + 4 + 2 = 9. Addition counts how many items you could choose from a single course; multiplication counts how many meals combine one item from each course.
**mistake_b:** Used only two of the three courses or multiplied wrongly: 4 × 4 = 16.
**mistake_c:** Got 18 from a wrong combination: 3 × 3 × 2 = 18 (mis-counted sandwiches as 3).
**mistake_e:** Added an extra factor of 2: 3 × 4 × 2 × 2 = 48.
**common_trap:** Adding the choices instead of multiplying them — confusion between "how many options in one category" and "how many complete combinations across all categories."
**takeaway:** When making one independent selection from each of k categories, multiply all the category sizes: n₁ × n₂ × ... × n_k. This is the Fundamental Counting Principle.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q31

**difficulty:** Easy
**type:** Problem Solving
**topic:** Basic Probability


A bag contains 4 green marbles and 6 yellow marbles. One marble is drawn at random. What is the probability that the marble drawn is green?

- A) 1/5
- B) 2/5
- C) 1/2
- D) 3/5
- E) 2/3

**answer:** B
**fastest_path:** P(green) = favorable / total = 4 / (4 + 6) = 4/10 = 2/5.
**explanation:** There are 4 green marbles out of 4 + 6 = 10 total. Probability = favorable outcomes / total outcomes = 4/10 = 2/5.
**mistake_a:** Computed P = 2/10 = 1/5 — used a wrong numerator of 2 instead of 4.
**mistake_c:** Assumed equal chance for each color: 1/2. The colors are not equally represented; probability depends on the actual counts, not the number of colors.
**mistake_d:** Computed P(yellow) = 6/10 = 3/5 — found the probability of the wrong color.
**mistake_e:** Computed the ratio of green to yellow (4/6 = 2/3) instead of green to total. The denominator in probability is always the total, not the count of the other group.
**common_trap:** Using the count of the other color as the denominator instead of the total count of all marbles.
**takeaway:** Probability = (favorable count) / (total count). Total = sum of all outcomes in the sample space. Never use a sub-group count in the denominator.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q32

**difficulty:** Easy
**type:** Problem Solving
**topic:** Arrangements with Excluded Position


Five different textbooks are arranged randomly on a shelf. In how many arrangements does the math textbook NOT appear in the leftmost position?

- A) 24
- B) 48
- C) 72
- D) 96
- E) 120

**answer:** D
**fastest_path:** Total − (math in position 1) = 5! − 4! = 120 − 24 = 96.
**explanation:** Use the complement. Total arrangements of 5 distinct books: 5! = 120. Forbidden arrangements (math in position 1): fix the math book in position 1, arrange the other 4 in 4! = 24 ways. Valid arrangements: 120 − 24 = 96.
**mistake_a:** Computed 4! = 24 — counted only the forbidden arrangements (math IS in position 1) rather than the valid ones. This is exactly the count to subtract, not the answer.
**mistake_b:** Computed 2 × 4! = 48 — doubled the forbidden count.
**mistake_c:** Computed 3 × 4! = 72 — wrong multiplier.
**mistake_e:** Computed 5! = 120 — ignored the constraint entirely.
**common_trap:** Forgetting to take the complement — computing the forbidden count (4! = 24) instead of subtracting it from the total.
**takeaway:** "NOT in a specific position" → complement: total − (fixed in that position) = n! − (n−1)!. The constraint eliminates one book from one slot, not an entire permutation.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q33

**difficulty:** Easy
**type:** Problem Solving
**topic:** Fundamental Counting Principle


A class has 6 boys and 5 girls. A teacher selects exactly 1 boy and 1 girl to represent the class at a school event. How many different representative pairs are possible?

- A) 11
- B) 15
- C) 25
- D) 30
- E) 55

**answer:** D
**fastest_path:** Choose 1 from each group independently: 6 × 5 = 30.
**explanation:** Choosing 1 boy AND 1 girl are independent selections. By the Fundamental Counting Principle: 6 choices for the boy × 5 choices for the girl = 30 pairs.
**mistake_a:** Added instead of multiplied: 6 + 5 = 11. This counts how many single representatives could be chosen, not how many boy-girl pairs.
**mistake_b:** Computed C(6, 2) = 15 — applied a combination formula for the wrong purpose.
**mistake_c:** Squared only the girls: 5² = 25, ignoring the boys.
**mistake_e:** Computed C(11, 2) = 55 — treated both groups as one pool and chose 2 from the combined 11. This does not enforce the one-boy-one-girl constraint; it would include two boys or two girls.
**common_trap:** Treating the combined pool as one group (C(11,2) = 55) rather than requiring exactly one from each group separately.
**takeaway:** "Choose 1 from group A AND 1 from group B" → multiply: |A| × |B|. This enforces the constraint. C(total, 2) does not.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q34

**difficulty:** Easy
**type:** Problem Solving
**topic:** Permutations


In a race with 6 runners, gold, silver, and bronze medals are awarded to the first-, second-, and third-place finishers respectively. How many different medal outcomes are possible?

- A) 18
- B) 20
- C) 60
- D) 120
- E) 720

**answer:** D
**fastest_path:** Order matters, distinct roles → P(6, 3) = 6 × 5 × 4 = 120.
**explanation:** Three distinct medals (gold, silver, bronze) mean three distinct positions where order matters. P(6, 3) = 6 choices for gold × 5 remaining for silver × 4 remaining for bronze = 120.
**mistake_a:** Computed 6 × 3 = 18 — multiplied runners by medals instead of using the slot-by-slot countdown.
**mistake_b:** Computed C(6, 3) = 20 — used combinations, which erases ordering. Medals are distinct (gold ≠ silver ≠ bronze), so order matters; use permutations.
**mistake_c:** Computed P(5, 3) = 60 — off-by-one on the pool size.
**mistake_e:** Computed 6! = 720 — arranged all 6 runners, but only 3 positions are awarded.
**common_trap:** Using combinations C(6,3) = 20 when distinct roles (gold, silver, bronze) make this a permutation problem.
**takeaway:** Distinct roles or labeled positions → permutations P(n, k) = n × (n−1) × ... × (n−k+1). No distinct labels → combinations C(n, k).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q35

**difficulty:** Medium
**type:** Problem Solving
**topic:** Arrangements with Grouping


How many arrangements of the 7 letters of the word PROMISE have all three vowels (O, I, E) grouped together — that is, occupying three consecutive positions in any internal order?

- A) 120
- B) 360
- C) 480
- D) 720
- E) 5040

**answer:** D
**fastest_path:** Glue {O,I,E} as one block → 5 units to arrange: 5! × 3! = 120 × 6 = 720.
**explanation:** PROMISE has 7 distinct letters. Vowels: O, I, E. Consonants: P, R, M, S. Treat the three vowels as a single block. Items to arrange: {P, R, M, S, [OIE-block]} = 5 distinct units. Arrangements of 5 units: 5! = 120. Within the block, the three distinct vowels can be ordered in 3! = 6 ways. Total: 120 × 6 = 720.
**mistake_a:** Computed 5! = 120 — arranged the 5 units but forgot to multiply by 3! = 6 for the internal orderings of the vowel block. The vowels are distinct; OIE, OEI, IOE, IEO, EOI, EIO are all different arrangements.
**mistake_b:** Computed 5! × 3 = 360 — multiplied by 3 instead of 3! = 6 for the block's internal arrangements.
**mistake_c:** Got 480 from some other partial product.
**mistake_e:** Computed 7! = 5040 — ignored the "vowels grouped together" constraint.
**common_trap:** Forgetting that k distinct items inside a glued block contribute k! internal orderings to the total.
**takeaway:** "Must be adjacent (grouped together)" → glue as one block. Total = (arrangements of units outside the block + 1 block) × (arrangements within the block) = (n − k + 1)! × k!.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q36

**difficulty:** Medium
**type:** Problem Solving
**topic:** Combinations with At-Most Constraint


A committee of 3 is chosen from 4 men and 5 women. How many committees include at most 1 man?

- A) 40
- B) 45
- C) 50
- D) 54
- E) 84

**answer:** C
**fastest_path:** "At most 1 man" = (0 men) + (1 man): C(5,3) + C(4,1)·C(5,2) = 10 + 40 = 50.
**explanation:** "At most 1 man" means exactly 0 men or exactly 1 man.
- 0 men, 3 women: C(5, 3) = 10
- 1 man, 2 women: C(4, 1) × C(5, 2) = 4 × 10 = 40

Total = 10 + 40 = 50.

Verify via complement: total C(9, 3) = 84; committees with 2+ men: C(4,2)·C(5,1) + C(4,3) = 30 + 4 = 34; valid = 84 − 34 = 50. ✓
**mistake_a:** Computed only the 1-man case: C(4,1)·C(5,2) = 40 — forgot to add the all-women case (0 men).
**mistake_b:** Computed C(9,2) = 36 or arrived at some partial sum of 45.
**mistake_d:** Made an arithmetic error in one of the cases and got 54.
**mistake_e:** Computed C(9,3) = 84 — applied no constraint.
**common_trap:** Missing the 0-man case, or forgetting that "at most 1" includes the boundary value of 0.
**takeaway:** "At most k" → sum over all valid exact counts from 0 through k. OR use complement: total − (more than k). Always verify both methods agree.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q37

**difficulty:** Medium
**type:** Problem Solving
**topic:** Sequential Probability Without Replacement


A box contains 5 red balls and 3 white balls. Two balls are drawn one at a time without replacement. What is the probability that the first ball is red and the second ball is white?

- A) 15/64
- B) 15/56
- C) 3/8
- D) 5/14
- E) 15/28

**answer:** B
**fastest_path:** P(R₁) × P(W₂ | R₁) = (5/8) × (3/7) = 15/56.
**explanation:** Without replacement, the draws are dependent. P(first red) = 5/8. Given the first ball was red, 7 balls remain (4 red, 3 white), so P(second white | first red) = 3/7. Joint probability: (5/8) × (3/7) = 15/56.
**mistake_a:** Computed (5/8) × (3/8) = 15/64 — treated the draws as independent (with replacement), keeping the denominator at 8 for both draws. After removing a ball, the total drops to 7.
**mistake_c:** Computed 3/8, the probability of drawing white on a single draw from the original bag — only one draw considered, or the event description was misread.
**mistake_d:** Computed (5/8) × (4/7) = 20/56 = 5/14 — correctly updated the denominator to 7 after the first draw, but used the remaining red count (4) instead of the white count (3) for the numerator. This gives P(both red), not P(red then white).
**mistake_e:** Computed C(5,1)·C(3,1) / C(8,2) = 15/28 — used combinations in the denominator. C(8,2) = 28 counts unordered pairs, but the event "first red, then white" is ordered; the correct denominator for ordered draws is 8 × 7 = 56.
**common_trap:** Using C(8,2) = 28 as the denominator instead of the ordered count 8 × 7 = 56; the ordered event requires an ordered denominator.
**takeaway:** Sequential draws without replacement → multiply conditional probabilities: P(A then B) = P(A) × P(B|A). After each draw, reduce both the matching-item count (numerator) and the total (denominator).
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q38

**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting Integers with Restrictions


How many 4-digit positive integers (from 1000 to 9999 inclusive) have no two digits the same?

- A) 3024
- B) 4536
- C) 5040
- D) 6561
- E) 9000

**answer:** B
**fastest_path:** Build slot by slot: 9 × 9 × 8 × 7 = 4536 (first digit excludes 0; each later digit excludes all previously used digits).
**explanation:** Build the number one digit at a time, slot by slot.
- Thousands digit: 9 choices (1–9; leading zero not allowed).
- Hundreds digit: 9 choices (0–9 minus the thousands digit already used).
- Tens digit: 8 choices (0–9 minus two used digits).
- Units digit: 7 choices.

Total: 9 × 9 × 8 × 7 = 4536.

Verify via complement: P(10, 4) − (numbers starting with 0) = 5040 − 1 × 9 × 8 × 7 = 5040 − 504 = 4536. ✓
**mistake_a:** Computed P(9, 4) = 9 × 8 × 7 × 6 = 3024 — excluded digit 0 from ALL four positions instead of only the leading position. Digit 0 is perfectly valid in the hundreds, tens, and units places.
**mistake_c:** Computed P(10, 4) = 10 × 9 × 8 × 7 = 5040 — allowed 0 as the leading digit. "0523" is not a 4-digit integer.
**mistake_d:** Computed 9⁴ = 6561 — excluded leading zeros (correct) but allowed repeated digits. Repetition is forbidden per the problem.
**mistake_e:** Computed 9 × 10³ = 9000 — total 4-digit integers with no restriction on repetition (the full unrestricted count with leading-zero exclusion only).
**common_trap:** The leading-zero restriction applies only to position 1. Students either exclude 0 everywhere (giving 3024) or forget to exclude it at all (giving 5040).
**takeaway:** For k-digit numbers with no repeated digits: position 1 has 9 choices (1–9), position 2 has 9 choices (0–9 minus one used), positions 3, 4, … have 8, 7, … choices. Multiply: 9 × 9 × 8 × 7 × …
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q39

**difficulty:** Medium
**type:** Problem Solving
**topic:** Probability — Same Color


A bag contains 4 red marbles and 6 blue marbles. Two marbles are drawn at random without replacement. What is the probability that both marbles are the same color?

- A) 1/3
- B) 7/15
- C) 8/15
- D) 1/2
- E) 2/3

**answer:** B
**fastest_path:** [C(4,2) + C(6,2)] / C(10,2) = (6 + 15) / 45 = 21/45 = 7/15.
**explanation:** "Same color" = both red OR both blue (mutually exclusive events, so add).
- P(both red) = C(4,2)/C(10,2) = 6/45
- P(both blue) = C(6,2)/C(10,2) = 15/45
- P(same color) = (6 + 15)/45 = 21/45 = 7/15

Verify via complement: P(different colors) = C(4,1)·C(6,1)/C(10,2) = 24/45 = 8/15, so P(same) = 1 − 8/15 = 7/15. ✓
**mistake_a:** Computed only P(both blue) = 15/45 = 1/3 — forgot to add P(both red) = 6/45. "Same color" includes the red-red case.
**mistake_c:** Computed P(different colors) = 8/15 — found the complement of the target event.
**mistake_d:** Guessed 1/2.
**mistake_e:** Computed P(at least one red) = 1 − P(both blue) = 30/45 = 2/3 — this is a different event from "both same color."
**common_trap:** Computing only the majority-color same-pair (both blue) and missing the minority-color pair (both red); or confusing "same color" with "at least one of a specific color."
**takeaway:** P(same color) = P(both A) + P(both B) = [C(n_A,2) + C(n_B,2)] / C(n,2). Both color-pair cases must be included.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q40

**difficulty:** Medium
**type:** Problem Solving
**topic:** Arrangements with Both-at-Ends Constraint


Five people — Ann, Bob, Cal, Dan, and Eva — are seated in a row of 5 chairs. In how many arrangements do Ann and Bob each occupy one of the two end seats (positions 1 and 5), one each?

- A) 6
- B) 12
- C) 24
- D) 36
- E) 48

**answer:** B
**fastest_path:** Assign Ann and Bob to the 2 ends (2! = 2 ways) × arrange the other 3 in the middle (3! = 6): 2 × 6 = 12.
**explanation:** The two end positions (1 and 5) must be filled by Ann and Bob — one each. Ann-left/Bob-right, or Ann-right/Bob-left: 2 arrangements. For each, the remaining 3 people (Cal, Dan, Eva) fill positions 2, 3, and 4 in 3! = 6 ways. Total: 2 × 6 = 12.
**mistake_a:** Computed 3! = 6 — arranged the middle 3 seats but forgot that Ann and Bob can swap their two end positions. The × 2 factor comes from Ann at position 1 vs Ann at position 5.
**mistake_c:** Computed 4! = 24 — treated one end as fixed (correct) but then arranged the remaining 4 people in the other 4 seats freely, ignoring that the other end is also constrained to a specific person (Bob).
**mistake_d:** Got 36 from a wrong doubling.
**mistake_e:** Computed 2 × 4! = 48 — correctly accounted for 2 end assignments, but then placed all 4 remaining people in the non-fixed seats, counting one end position twice.
**common_trap:** Forgetting the × 2 factor for the two ways Ann and Bob can be assigned to the two ends; or accidentally giving the non-end-assigned person a free slot.
**takeaway:** "Both A and B must occupy the two ends" → 2! ways to assign them to the ends × (n−2)! for the remaining people in the middle seats.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q41

**difficulty:** Medium
**type:** Problem Solving
**topic:** Conditional Probability


A jar contains 3 red, 4 blue, and 5 green marbles. A marble is drawn at random and revealed to be blue. Without replacing it, a second marble is drawn. What is the probability that the second marble is also blue?

- A) 1/4
- B) 3/11
- C) 4/11
- D) 1/3
- E) 1/2

**answer:** B
**fastest_path:** After removing 1 blue: 3 blue remain out of 11 total → P = 3/11.
**explanation:** The first marble drawn is blue (this is given). After removing it: blue count drops from 4 to 3; total drops from 12 to 11. P(second blue | first blue) = 3/11.
**mistake_a:** Computed 3/12 = 1/4 — used the correct updated blue count (3) but forgot to update the total (still used 12 instead of 11). Both the numerator and denominator must be reduced after a draw.
**mistake_c:** Computed 4/11 — updated the total correctly (11) but used the original blue count (4). The first blue marble was drawn and removed; only 3 blue remain.
**mistake_d:** Computed 4/12 = 1/3 — used original blue count (4) and original total (12); ignored the conditioning on the first draw entirely.
**mistake_e:** Guessed 1/2.
**common_trap:** Updating only the total (denominator) but not the matching count (numerator), or updating neither.
**takeaway:** Conditional probability after drawing without replacement: subtract the drawn item from the matching count if it matched the target category, and always subtract 1 from the total. Here: blue 4→3, total 12→11.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q42

**difficulty:** Hard
**type:** Problem Solving
**topic:** Division into Unlabeled Groups


In how many ways can a group of 6 distinct people be divided into two teams of 3, where the teams are unlabeled (the division {Alice, Bob, Carol} vs. {Dan, Eva, Fred} is the same partition as {Dan, Eva, Fred} vs. {Alice, Bob, Carol})?

- A) 10
- B) 15
- C) 20
- D) 30
- E) 60

**answer:** A
**hint_nudge:** Start by choosing 3 people for one group — then ask whether you have counted each split once or twice.
**hint_strategy:** C(6,3) counts labeled splits; divide by 2! to remove the label.
**fastest_path:** C(6,3) / 2 = 20 / 2 = 10.
**explanation:** Choose 3 people for the first group: C(6,3) = 20 ways. The remaining 3 automatically form the second group. But since the groups are unlabeled, every split has been counted twice — once with {A,B,C} as the "first group" and once with {D,E,F} as the "first group." These two labelings describe the same partition. Divide by 2: 20/2 = 10.
**mistake_b:** Computed C(6,2) = 15 — used the wrong group size.
**mistake_c:** Computed C(6,3) = 20 — correctly chose one group of 3 but forgot to divide by 2 for the unlabeled symmetry. Every division is counted twice in C(6,3): choosing {A,B,C} for team 1 and choosing {D,E,F} for team 1 produce the same partition but appear as two separate selections.
**mistake_d:** Computed some multiple giving 30.
**mistake_e:** Computed 6!/((3!)²) = 20 and multiplied by 3 = 60, or computed a permutation-based count.
**common_trap:** Stopping at C(6,3) = 20 without dividing by 2 for the unlabeled symmetry between the two groups.
**takeaway:** Dividing n distinct items into two equal-size unlabeled groups: C(n, k) / 2!. For three equal unlabeled groups: C(n,k)·C(n−k,k) / 3!. The "/ m!" corrects for swapping m indistinguishable groups.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q43

**difficulty:** Hard
**type:** Problem Solving
**topic:** Distribution with At-Least-One Constraint


Five distinct tasks are to be assigned to three workers — Anna, Beth, and Carl — such that each worker receives at least one task. Multiple tasks may go to one worker; all 5 tasks must be assigned. How many valid assignments are possible?

- A) 120
- B) 150
- C) 147
- D) 210
- E) 243

**answer:** B
**hint_nudge:** Count all assignments first (no constraint), then subtract the cases where at least one worker is left empty.
**hint_strategy:** Inclusion-exclusion: total − C(3,1)·(miss one worker) + C(3,2)·(miss two workers).
**fastest_path:** 3⁵ − C(3,1)·2⁵ + C(3,2)·1⁵ = 243 − 96 + 3 = 150.
**explanation:** Use inclusion-exclusion on surjective (onto) functions from 5 tasks to 3 workers.

Total unrestricted assignments: each of 5 tasks goes to any of 3 workers → 3⁵ = 243.

Subtract cases where at least one worker is left empty:
- Anna gets nothing: 2⁵ = 32 (tasks split between Beth and Carl only)
- Beth gets nothing: 2⁵ = 32
- Carl gets nothing: 2⁵ = 32

Add back the over-subtracted intersections (two workers missing):
- Anna and Beth both get nothing: 1⁵ = 1 (all tasks to Carl)
- Anna and Carl both get nothing: 1⁵ = 1
- Beth and Carl both get nothing: 1⁵ = 1

Total valid = 243 − 3(32) + 3(1) = 243 − 96 + 3 = 150.
**mistake_a:** Computed 5! = 120 — treated the problem as ordering (permuting) 5 tasks. The tasks are assigned to workers, not arranged in a sequence. Order within a worker's pile does not matter.
**mistake_c:** Computed 243 − 96 = 147 — ran only the first step of inclusion-exclusion (subtracting the "one worker missing" cases) but omitted the add-back step for the "two workers missing" intersections. Partial inclusion-exclusion always over-subtracts.
**mistake_d:** Computed some combination giving 210.
**mistake_e:** Computed 3⁵ = 243 — no "at least one each" constraint applied.
**common_trap:** Stopping inclusion-exclusion after the first subtraction step; the add-back of pairwise intersections is essential and commonly forgotten.
**takeaway:** "Distribute n distinct items among k distinct groups, each getting at least 1" → surjective count = Σ_{i=0}^{k} (−1)^i · C(k,i) · (k−i)^n. For k=3: 3^n − 3·2^n + 3·1^n.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q44

**difficulty:** Hard
**type:** Problem Solving
**topic:** Committee Selection with Subgroup Minimum


A 5-person committee is chosen from a pool of 10 people. Among the 10, there is a specific sub-group of 4 people. In how many ways can the committee be formed if it must include at least 3 members from the sub-group?

- A) 56
- B) 60
- C) 66
- D) 70
- E) 84

**answer:** C
**hint_nudge:** Sub-group has 4 people. "At least 3" from a group of 4 — what exact counts are possible?
**fastest_path:** Exactly 3 + exactly 4: C(4,3)·C(6,2) + C(4,4)·C(6,1) = 60 + 6 = 66.
**explanation:** Sub-group: 4 people. Remaining pool: 6 people. Committee size: 5. "At least 3 from sub-group" means exactly 3 or exactly 4 (exactly 5 is impossible since the sub-group only has 4).

- Exactly 3 from sub-group, 2 from outside: C(4,3) × C(6,2) = 4 × 15 = 60
- Exactly 4 from sub-group, 1 from outside: C(4,4) × C(6,1) = 1 × 6 = 6

Total = 60 + 6 = 66.
**mistake_a:** Computed C(8,3) = 56 from a structural error in setting up the formula.
**mistake_b:** Computed C(4,3)·C(6,2) = 60 — correctly found the "exactly 3 from sub-group" case but stopped there, missing the "exactly 4 from sub-group" case. "At least 3" always includes the top of the range.
**mistake_d:** Computed C(8,4) = 70 — applied the wrong formula or wrong pool size.
**mistake_e:** Computed C(9,3) = 84 or C(10,5) with no constraint applied.
**common_trap:** Stopping at "exactly 3 from the sub-group" (= 60) and missing the "exactly 4" case (adds 6 more). "At least k" always includes the endpoint.
**takeaway:** "At least k from a sub-group" → sum across all valid exact counts: C(sub, k)·C(outside, remaining) + C(sub, k+1)·C(outside, remaining−1) + … List all valid exact counts before computing.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q45

**difficulty:** Hard
**type:** Problem Solving
**topic:** Inclusion-Exclusion for Restricted Assignments


Three distinct prizes — gold, silver, and bronze — are each awarded to a different student, chosen from a group of 5. Student A will not accept the gold prize, and Student B will not accept the bronze prize. How many valid prize assignments are possible?

- A) 30
- B) 36
- C) 39
- D) 42
- E) 48

**answer:** C
**hint_nudge:** Start with all unrestricted assignments, then remove the invalid ones. Two separate restrictions — use inclusion-exclusion so the overlap is not double-counted.
**hint_strategy:** Invalid = (A gets gold) + (B gets bronze) − (A gets gold AND B gets bronze).
**fastest_path:** P(5,3) − [P(4,2) + P(4,2) − P(3,1)] = 60 − 21 = 39.
**explanation:** Total assignments of 3 distinct prizes to 3 of 5 students: P(5,3) = 5 × 4 × 3 = 60.

By inclusion-exclusion, find the invalid count:

Invalid I — A gets gold: lock gold to A; assign silver and bronze to 2 of the remaining 4 students: P(4,2) = 12.

Invalid II — B gets bronze: lock bronze to B; assign gold and silver to 2 of the remaining 4 students: P(4,2) = 12.

Intersection (double-counted) — A gets gold AND B gets bronze: both locked; assign silver to 1 of the remaining 3 students: P(3,1) = 3.

Invalid total = 12 + 12 − 3 = 21.
Valid = 60 − 21 = 39.
**mistake_a:** Computed 60/2 = 30 — halved the total without basis.
**mistake_b:** Computed 60 − 12 − 12 = 36 — correctly identified both invalid cases but omitted the add-back of their intersection. Without the add-back, assignments where both restrictions are violated are subtracted twice, making the valid count too small by 3.
**mistake_d:** Computed 60 − 18 = 42 — used an incorrect invalid count of 18.
**mistake_e:** Computed 60 − 12 = 48 — subtracted only one of the two invalid cases.
**common_trap:** Omitting the add-back step in inclusion-exclusion — subtracting the intersection twice instead of once.
**takeaway:** Two restrictions → inclusion-exclusion: subtract each restriction's cases, add back their intersection. Missing the add-back always under-counts valid outcomes by exactly |intersection|.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

---

## Q46

**difficulty:** Hard
**type:** Problem Solving
**topic:** Probability — Relative Order


The 6 letters of the word REASON are arranged in a uniformly random order. What is the probability that, reading left to right, the three vowels (A, E, O) appear in strictly increasing alphabetical order — A before E, and E before O — though not necessarily in consecutive positions?

- A) 1/30
- B) 1/20
- C) 1/6
- D) 1/3
- E) 1/2

**answer:** C
**hint_nudge:** You do not need to count arrangements. Think only about the relative order of the three vowels among themselves.
**hint_strategy:** Among all arrangements, each of the 3! = 6 relative orderings of the vowels is equally likely. Only one of the six is alphabetical.
**fastest_path:** By symmetry: P = 1/3! = 1/6.
**explanation:** REASON has 6 distinct letters: R, E, A, S, O, N. The vowels are A, E, O — all distinct.

In any random arrangement of the 6 letters, consider only the relative order of A, E, O (their positions relative to each other, ignoring the consonants). The three vowels can appear in 3! = 6 relative orderings: (A,E,O), (A,O,E), (E,A,O), (E,O,A), (O,A,E), (O,E,A). Since all letters are distinct and all arrangements are equally likely, each of the 6 relative orderings of the vowels occurs in exactly 1/6 of all 6! arrangements.

The target ordering — A before E before O — is exactly one of the six. P = 1/6.

No counting of favorable arrangements is necessary. The symmetry argument is both faster and less error-prone.
**mistake_a:** Treated "in alphabetical order" as requiring the vowels to be adjacent in a block: glued AEO as one unit → 4! = 24 favorable arrangements; P = 24/720 = 1/30. This confuses "relative order (anywhere in the string)" with "adjacent block in order."
**mistake_b:** Set the denominator equal to C(6,3) = 20 (the number of ways to choose 3 positions for the vowels) and the numerator to 1, giving P = 1/20. This ignores that for each choice of positions the vowels can be arranged in 3! = 6 orders; the symmetry argument applies across orderings of the vowels, not across position choices.
**mistake_d:** Computed P = 1/3 — reasoned "A must just appear before both E and O," giving P(A is first among the three vowels) = 1/3. This is the probability that A comes first, but the problem also requires E to precede O, which halves the probability from 1/3 to 1/6.
**mistake_e:** Computed P = 1/2 — used P(A before O) = 1/2 by symmetry. Correct for the pairwise comparison of A and O only, but the problem adds the constraint that E must lie between them in the reading order.
**common_trap:** Requiring the vowels to be adjacent (gives 1/30); or computing only P(A first among the three) = 1/3 instead of P(full ordering A < E < O) = 1/6.
**takeaway:** "k distinct items appear in one specific relative order among themselves" → P = 1/k!, regardless of where they fall in the full arrangement. No counting required when all arrangements are equally likely and all items are distinct.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

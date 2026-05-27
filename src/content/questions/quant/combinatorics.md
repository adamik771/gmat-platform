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
**topic:** Multiplication Principle

A clothing shop offers shirts in 3 colors, pants in 4 styles, and shoes in 2 types. A shopper picks exactly one shirt, one pair of pants, and one pair of shoes. How many distinct outfit combinations are possible?

- A) 9
- B) 12
- C) 24
- D) 36
- E) 48

**answer:** C
**fastest_path:** 3 × 4 × 2 = 24. Independent choices multiply.
**explanation:** Each category is chosen independently: 3 ways for the shirt, 4 for the pants, 2 for the shoes. By the Fundamental Counting Principle, total outcomes = 3 × 4 × 2 = 24.
**mistake_a:** Added the category counts: 3 + 4 + 2 = 9. Adding applies to mutually exclusive situations (either a shirt or pants); here you choose one from *each* category, so multiply.
**mistake_b:** Stopped after two categories: 3 × 4 = 12. Three independent categories require three factors.
**mistake_d:** Miscounted shoes as 3, getting 3 × 4 × 3 = 36.
**mistake_e:** Confused pants and shoes counts, getting 3 × 4 × 4 = 48.
**common_trap:** Adding instead of multiplying when each category is chosen independently. Addition applies to mutually exclusive "or" choices; multiplication applies to sequential "and" choices.
**takeaway:** Fundamental Counting Principle: if you make k independent choices with n₁, n₂, …, nₖ options each, total outcomes = n₁ × n₂ × … × nₖ.
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
**fastest_path:** Choose which 2 of 5 moves are "north": C(5, 2) = 10.
**explanation:** Every route consists of exactly 5 moves (3 east + 2 north) in some order — the only choice is which 2 of the 5 positions are "north." That is C(5, 2) = (5 × 4)/(2 × 1) = 10.
**mistake_a:** Added the block counts: 3 + 2 = 5. This gives the total moves, not the number of routes.
**mistake_b:** Computed C(4, 2) = 6 — off by one on the total number of moves (should be 5, not 4).
**mistake_c:** Computed 2³ = 8, confusing this with a binary-branch problem rather than a combinations problem.
**mistake_e:** Computed C(6, 2) = 15 — used n+1 instead of n for the total-move count.
**common_trap:** Adding the block counts (5) and reporting that as the answer. The block counts tell you the total steps; the number of routes requires choosing which positions are "north" — a combinations calculation.
**takeaway:** Grid paths from origin requiring r steps right and u steps up = C(r+u, u). The route is a sequence of (r+u) moves; choose which u positions are "up."
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
**fastest_path:** P(>4) = 2/6 = 1/3; P(tails) = 1/2. Independent: (1/3)(1/2) = 1/6.
**explanation:** Numbers greater than 4 on a six-sided die: {5, 6} — that is 2 out of 6 faces, so P(>4) = 1/3. The die and coin are independent, so P(>4 AND tails) = P(>4) × P(tails) = (1/3)(1/2) = 1/6.
**mistake_a:** Computed P(rolling exactly 4) × P(tails) = (1/6)(1/2) = 1/12 — misread ">4" as "=4."
**mistake_c:** Computed 1/4 from a rough estimate without careful fraction arithmetic.
**mistake_d:** Reported P(>4) = 1/3 without multiplying by the coin probability — forgot the second event.
**mistake_e:** Reported P(tails) = 1/2 without multiplying by the die probability — forgot the first event.
**common_trap:** Misreading "greater than 4" as "equal to 4," which changes P(die) from 1/3 to 1/6 and gives 1/12.
**takeaway:** Independent events: P(A and B) = P(A) × P(B). Identify each component's probability separately first, then multiply.
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
**fastest_path:** (5/8) × (4/7) = 20/56 = 5/14.
**explanation:** First draw: 5 red out of 8 total, so P(1st red) = 5/8. After removing one red marble, 4 red remain out of 7 total. P(2nd red | 1st red) = 4/7. Multiply: 5/8 × 4/7 = 20/56 = 5/14.
**mistake_a:** 3/8 is P(first marble is blue), which is the wrong event.
**mistake_b:** Treated draws as independent (with replacement): (5/8)² = 25/64. Without replacement the second probability must be adjusted.
**mistake_d:** Used the wrong denominator after the first draw: 5/8 × 4/8 = 20/64 = 5/16, then somehow arrived at 5/12.
**mistake_e:** 2/7 is P(exactly 1 red) after a sequence of wrong steps.
**common_trap:** independence-confusion — squaring P(red on one draw) = (5/8)² = 25/64, treating the two draws as independent. Without replacement, the first draw changes the remaining pool.
**takeaway:** Without replacement, draws are dependent. Adjust both numerator and denominator for each successive draw based on what was already removed.
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
**fastest_path:** Odd digits in {1,3,5,7,9} = 5 choices. Remaining two: 9 × 9. Total = 5 × 81 = 405.
**explanation:** Position 1 (odd only): 5 options {1, 3, 5, 7, 9}. Positions 2 and 3 (any of 1–9, with repetition): 9 options each. Total = 5 × 9 × 9 = 405.
**mistake_a:** Only filled two positions: 5 × 9 = 45. Three-digit code has three independent positions.
**mistake_b:** Miscounted the odd digits as 3 (perhaps {1, 3, 5} only, forgetting 7 and 9): 3 × 9 × 9 = 243.
**mistake_d:** Allowed digits 0–9 for positions 2 and 3 (10 each) instead of 1–9: 5 × 9 × 10 = 450.
**mistake_e:** Ignored the leading restriction and used all 9 options for every position: 9 × 9 × 9 = 729.
**common_trap:** Forgetting that odd digits in {1, …, 9} are exactly {1, 3, 5, 7, 9} — five of them, not three. Count both "small" odd digits and "large" ones.
**takeaway:** When one position has an additional restriction, count that position's valid options separately, then multiply by the others.
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
**fastest_path:** P(heart) + P(face) − P(heart AND face) = 13/52 + 12/52 − 3/52 = 22/52 = 11/26.
**explanation:** Hearts: 13 cards. Face cards (J, Q, K in all four suits): 3 × 4 = 12 cards. Cards that are both hearts and face cards (J♥, Q♥, K♥): 3 cards. By inclusion-exclusion: (13 + 12 − 3)/52 = 22/52 = 11/26.
**mistake_a:** Counted hearts only (13/52 = 1/4), ignoring face cards from other suits.
**mistake_b:** Counted face cards only (12/52 = 3/13), ignoring non-face hearts.
**mistake_d:** Added P(heart) + P(face card) = 25/52 without subtracting the overlap — double-counted the 3 cards that are both.
**mistake_e:** Overestimated; 1/2 requires 26 favorable outcomes, but only 22 qualify.
**common_trap:** 25/52 — adding the two groups without removing their intersection. The three face-card hearts (J♥, Q♥, K♥) fall in both groups, so they must be counted only once.
**takeaway:** P(A or B) = P(A) + P(B) − P(A and B). Whenever two events can co-occur, subtract the overlap once to avoid double-counting.
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
**fastest_path:** First red card is gone: 25 red remain out of 51. P = 25/51.
**explanation:** After one red card is removed, the deck has 51 cards left, of which 25 are red and 26 are black. P(2nd red | 1st red) = 25/51.
**mistake_a:** Used the original proportion: 26/52 = 1/2. This ignores that the first card has already been removed and the deck has changed.
**mistake_c:** Correct numerator (25 red remaining) but wrong denominator (52 instead of 51): forgot to reduce the total count after removal.
**mistake_d:** Halved the remaining red count (25/2 ≈ 13) — no valid reasoning; a confusion artifact.
**mistake_e:** Counted 26 red in numerator — forgot to remove the drawn red card, leaving the count unchanged.
**common_trap:** Reporting 26/52 = 1/2 — using the original deck proportions without updating for the removed card. Conditional probability requires updating the sample space to reflect the known outcome.
**takeaway:** Conditional probability = update the sample space. After each draw without replacement, reduce both the numerator (by the drawn card's type if it matches) and the denominator (by 1 for each card drawn).
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
**fastest_path:** 0.80(0.05) + 0.20(0.10) = 0.04 + 0.02 = 0.06 = 6%.
**explanation:** A random item came from Line 1 with probability 0.80 and from Line 2 with probability 0.20. By the Law of Total Probability: P(defective) = P(from L1)×P(defective|L1) + P(from L2)×P(defective|L2) = 0.80×0.05 + 0.20×0.10 = 0.04 + 0.02 = 0.06.
**mistake_a:** Used only Line 1's defect rate (5%) without weighting or adding Line 2's contribution.
**mistake_c:** Took the simple (unweighted) average of the two defect rates: (5% + 10%)/2 = 7.5%. This is wrong because Line 1 produces four times as much as Line 2.
**mistake_d:** Some intermediate wrong arithmetic, arriving at 8%.
**mistake_e:** Added the two defect rates directly: 5% + 10% = 15%, treating them as if they apply to the same items.
**common_trap:** Simple average (7.5%) — treating both lines as if they produce equal output. When the two groups have unequal sizes, a weighted average is required.
**takeaway:** Law of Total Probability: P(event) = Σ P(event | case_i) × P(case_i). Weight each conditional rate by the probability of belonging to that case (here, the production share).
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
**fastest_path:** Routes A→M × routes M→B = C(4,2) × C(3,1) = 6 × 3 = 18.
**explanation:** Break the journey at M. Segment A→M: 2 right + 2 up = 4 total moves → C(4, 2) = 6 routes. Segment M→B: 2 right + 1 up = 3 total moves → C(3, 1) = 3 routes. Because every valid full route is a pair of one A→M route and one M→B route, multiply: 6 × 3 = 18.
**mistake_a:** Counted only one segment: C(4, 2) = 6, stopping at M.
**mistake_b:** Computed only the second segment C(3, 1) = 3 and doubled: 3 × 4 = 12 (wrong factor).
**mistake_d:** Miscalculated the first segment as C(4, 2) = 8 (treating it as a permutation), then 8 × 3 = 24.
**mistake_e:** Computed unrestricted total routes C(7, 3) = 35 and ignored the checkpoint constraint.
**common_trap:** Computing only one of the two segments or computing the total unrestricted count. Checkpoints split a path problem into two independent sub-problems whose counts multiply.
**takeaway:** "Must pass through M" → split at M. Count routes for each segment independently, then multiply (both must occur, so "AND" → multiply).
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
**fastest_path:** (1/6)(15) + (2/6)(3) + (3/6)(0) = 15/6 + 6/6 = 21/6 = $3.50.
**explanation:** E[X] = (probability of outcome) × (prize), summed across all outcomes. P(roll 6) = 1/6, prize = $15. P(roll 1 or 2) = 2/6 = 1/3, prize = $3. P(roll 3, 4, or 5) = 3/6 = 1/2, prize = $0. E[X] = (1/6)(15) + (2/6)(3) + (3/6)(0) = 2.50 + 1.00 + 0 = $3.50.
**mistake_a:** Computed only the $15 prize contribution: (1/6)(15) = $2.50, ignoring the $3 prize.
**mistake_b:** Summed prizes without weighting: ($15 + $3)/6 = $3.00 — incorrect; you must weight each by its own probability, not divide the prize sum by 6.
**mistake_d:** Reached $4.00 through an intermediate arithmetic slip.
**mistake_e:** Averaged only non-zero prizes: ($15 + $3)/3 ≈ $6.00 — misapplied an equal-weight average.
**common_trap:** Dividing the total prize amount by 6 (number of die faces) instead of multiplying each prize by its specific probability. The $3 prize applies to 2 out of 6 faces, not 1 out of 6.
**takeaway:** Expected value = Σ [probability × payoff] for each distinct outcome. Each outcome gets its own probability weight; don't average payoffs uniformly unless all probabilities are equal.
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
**fastest_path:** Stars-and-bars: C(n + k − 1, k) = C(5 + 3 − 1, 3) = C(7, 3) = 35.
**explanation:** Choosing k items from n types with repetition, where order doesn't matter, is a "multiset" or "stars-and-bars" problem. Formula: C(n + k − 1, k) = C(5 + 3 − 1, 3) = C(7, 3) = (7 × 6 × 5)/(3 × 2 × 1) = 35.
**mistake_a:** Used C(5, 3) = 10 — standard combinations formula, which counts selections *without* repetition. Repetition is allowed here.
**mistake_b:** Computed 5 + 3 + ... = 15 from some partial stars-and-bars setup.
**mistake_c:** Used C(6, 2) = 15 or C(7, 2) = 21 — off-by-one errors on either n or k in the formula.
**mistake_e:** Computed 5³ = 125 — counted ordered selections with repetition (a permutation-with-repetition formula). This overcounts because order does not matter.
**common_trap:** Using standard C(n, k) (without repetition) when the problem allows repeats. Repetition with unordered selection requires the stars-and-bars formula C(n + k − 1, k).
**takeaway:** Combinations with repetition: C(n + k − 1, k). Memorize the "n + k − 1" adjustment. Standard C(n, k) is for selections without repetition only.
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
**fastest_path:** Complement: 1 − P(no heads) = 1 − (2/3)³ = 1 − 8/27 = 19/27.
**explanation:** "At least one head" is the complement of "zero heads." P(all tails on 3 flips) = (2/3)³ = 8/27. P(at least one head) = 1 − 8/27 = 19/27.
**mistake_a:** Computed P(all heads) = (1/3)³ = 1/27 — the wrong extreme event (all heads, not no heads).
**mistake_b:** Computed P(no heads) = (2/3)³ = 8/27 but reported that value instead of taking the complement.
**mistake_d:** Subtracted P(all heads) from 1: 1 − (1/3)³ = 1 − 1/27 = 26/27. This is P(not all heads), not P(at least one head). A subtle difference: "at least one head" excludes only the all-tails case; "not all heads" excludes only the all-heads case.
**mistake_e:** Reported the single-flip probability 1/3 without accounting for three flips.
**common_trap:** Computing 1 − P(all heads) = 26/27 instead of 1 − P(all tails) = 19/27. "At least one head" has complement "no heads" (all tails), not "no tails" (all heads).
**takeaway:** "At least one" = 1 − P(none). Identify the correct "none" complement: for "at least one head," the none-event is all tails.
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
**fastest_path:** P(true positive) = 0.02×0.90 = 0.018; P(false positive) = 0.98×0.05 = 0.049; P(disease|positive) = 0.018/(0.018+0.049) ≈ 27%.
**explanation:** Apply Bayes' theorem. Among 1,000 random people: ~20 have the disease; 20 × 0.90 = 18 test positive (true positives). ~980 are healthy; 980 × 0.05 = 49 test positive (false positives). Of 67 total positives, 18 are truly sick. P(disease | positive) = 18/67 ≈ 0.269 ≈ 27%.
**mistake_a:** Base-rate fallacy — reported the raw disease prevalence (2%) without using the test result at all.
**mistake_b:** Computed 0.018 and misinterpreted it as 18% directly, confusing the count 18 (out of 1,000) with a percentage.
**mistake_d:** Used only the false-positive rate in the denominator — divided true positives by false positives: 0.018/0.05 = 36%. The correct denominator includes both true and false positives.
**mistake_e:** Read off the test's sensitivity (90% true-positive rate) as the answer — confused P(positive|disease) with P(disease|positive). These are not the same.
**common_trap:** Reporting the sensitivity (90%) as the posterior probability. P(positive|disease) is the test's performance; P(disease|positive) is what the patient actually wants to know. They diverge sharply when the disease is rare.
**takeaway:** Bayes' theorem: P(A|B) = P(B|A)×P(A) / [P(B|A)×P(A) + P(B|not A)×P(not A)]. For rare events, the false-positive pool (large healthy group × small false-positive rate) can overwhelm the true-positive pool, making most positives false alarms.
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
**fastest_path:** Total C(7,3) − through (2,2): C(4,2)×C(3,1) = 35 − 18 = 17.
**explanation:** Total paths from (0,0) to (4,3): C(4+3, 3) = C(7,3) = 35. Blocked paths (those passing through (2,2)): paths from (0,0) to (2,2) × paths from (2,2) to (4,3). (0,0)→(2,2): 2 right+2 up → C(4,2) = 6. (2,2)→(4,3): 2 right+1 up → C(3,1) = 3. Blocked = 6×3 = 18. Valid = 35−18 = 17.
**mistake_a:** Miscomputed the blocked paths as C(4,1)×C(3,2) = 4×3 = 12, then 35−12 = 23... or some other arithmetic slip yielding 35−23 = 12.
**mistake_c:** Computed the (2,2)-blocked count incorrectly as 14, giving 35−14 = 21.
**mistake_d:** Forgot to multiply both segments — only subtracted the first-segment count: 35−6 = 29.
**mistake_e:** Reported the total unrestricted count C(7,3) = 35 without applying the blocked intersection.
**common_trap:** Subtracting only one segment's count (6) instead of the product of both segments (18). Both segments must be counted, and they multiply because every blocked full path is a pair of one A→M route and one M→B route.
**takeaway:** Forbidden-point detour: valid = total − (routes through forbidden point). Routes through forbidden point = routes to it × routes from it (both segments independently chosen).
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
**fastest_path:** [C(6,2)C(4,1) + C(6,3)] / C(10,3) = (60+20)/120 = 80/120 = 2/3.
**explanation:** Total committees: C(10,3) = 120. Committees with exactly 2 Democrats: C(6,2)×C(4,1) = 15×4 = 60. Committees with exactly 3 Democrats: C(6,3) = 20. P(majority Democrats) = (60+20)/120 = 80/120 = 2/3.
**mistake_a:** Counted only all-Democrat committees: 20/120 = 1/6. Misread "majority" as "unanimous."
**mistake_b:** Counted only exactly-2-Democrat committees: 60/120 = 1/2. "At least 2" includes the 3D case as well.
**mistake_c:** 1/3 is P(Republican majority) — see below. Computed the correct value for the wrong group.
**mistake_e:** 5/6 is not a natural result of a clean calculation from this setup; likely an overestimate.
**common_trap:** Forgetting the "exactly 3 Democrats" case when counting "at least 2." "At least 2" means 2 or 3 — both cases must be added. Note also that P(D majority) + P(R majority) = 1 because a 3-person committee cannot tie: 2/3 + 1/3 = 1 ✓.
**takeaway:** "At least k" in a selection problem = sum all cases where the count meets or exceeds k. Here, count the 2D+1R case and the 3D+0R case, then add.
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
**fastest_path:** C(12,4)×C(8,4)×C(4,4) / 3! = 34,650 / 6 = 5,775.
**explanation:** Step 1 — select first group of 4: C(12,4) = 495. Step 2 — select second group of 4 from remaining 8: C(8,4) = 70. Step 3 — last group is determined: C(4,4) = 1. Raw product: 495 × 70 × 1 = 34,650. But since the three groups carry no labels, every actual partition has been counted 3! = 6 times (once for each way to order three identical-status groups). Divide: 34,650 / 6 = 5,775.
**mistake_a:** Divided by a wrong factorial (e.g., 4! = 24 instead of 3!): 34,650/24 ≈ 1,443 — rounded or slipped to 3,960.
**mistake_c:** Divided by 3 instead of 3! = 6: 34,650/3 = 11,550.
**mistake_d:** Forgot to divide by 3! entirely — treated the three groups as labeled (e.g., "Group A," "Group B," "Group C"): 34,650.
**mistake_e:** Multiplied by an extra factor after computing the product: 34,650 × 2 = 69,300.
**common_trap:** Omitting the division by 3! — forgetting that unlabeled groups create overcounting. Every set of three equal-sized unlabeled groups is counted 3! = 6 times by the sequential C(n,k) approach.
**takeaway:** Dividing n items into k equal-sized unlabeled groups: [C(n,k) × C(n−k,k) × … × C(k,k)] / k!. The k! removes the overcounting from assigning an implicit order to the groups.
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
**fastest_path:** Total − (both X&Y) − (no senior) + (both X&Y AND no senior) = 210 − 28 − 35 + 10 = 157.
**explanation:** Total committees: C(10,4) = 210. Apply inclusion-exclusion over two "bad" conditions.

Condition 1 violated (both X and Y on committee): choose 2 more from the remaining 8 people → C(8,2) = 28 committees.

Condition 2 violated (no senior on committee): choose 4 from {X, Y, J1, J2, J3, J4, J5} = 7 non-senior people → C(7,4) = 35 committees.

Both conditions violated (both X&Y AND no senior): X and Y are on the committee, so choose 2 more from {J1,…,J5} = 5 juniors only → C(5,2) = 10 committees.

By inclusion-exclusion: invalid = 28 + 35 − 10 = 53. Valid = 210 − 53 = 157.
**mistake_a:** Subtracted the overlap instead of adding it: 210 − 28 − 35 − 10 = 137.
**mistake_b:** Omitted the inclusion-exclusion addback: 210 − 28 − 35 = 147. Without adding back the overlap, those 10 committees are subtracted twice.
**mistake_c:** Some other arithmetic slip, arriving at 152.
**mistake_e:** Applied only the no-senior constraint: 210 − 35 = 175, ignoring the rival constraint.
**common_trap:** Forgetting to add back the overlap (the 10 committees that violate both conditions simultaneously). In inclusion-exclusion, subtracting both violating sets double-removes their intersection; you must add it back once.
**takeaway:** Two simultaneous constraints → inclusion-exclusion: valid = total − |C1| − |C2| + |C1 ∩ C2|. Always identify the intersection (committees violating *both* constraints) and add it back.
**related_reading:** reading-quant-06-statistics-probability-combinatorics

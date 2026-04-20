---
section: Quant
topic: Combinatorics
---

## Q1

**difficulty:** Beginner
**type:** Problem Solving
**topic:** Enumeration


Three friends — Ana, Ben, and Cal — line up for a photo. In how many different orders can they stand?

- A) 3
- B) 4
- C) 6
- D) 8
- E) 9

**answer:** C

**explanation:** Three slots, three people. 3! = 3 × 2 × 1 = 6. If you're new to this, list them out: ABC, ACB, BAC, BCA, CAB, CBA — six. Whenever you see "in how many orders can n things line up," the answer is n!.

---

## Q2

**difficulty:** Beginner
**type:** Problem Solving
**topic:** Enumeration


Four books are placed on a shelf. How many arrangements are possible if one specific book must be first?

- A) 6
- B) 8
- C) 12
- D) 18
- E) 24

**answer:** A

**explanation:** One book is pinned to position 1. The remaining 3 books arrange in 3! = 6 ways. When one object is fixed in place, multiply by the factorial of what's left.

---

## Q3

**difficulty:** Beginner
**type:** Problem Solving
**topic:** Permutations


From a group of 7 candidates, how many ways can a president and a vice-president be chosen (order matters)?

- A) 14
- B) 21
- C) 42
- D) 49
- E) 5040

**answer:** C

**explanation:** Order matters, so this is a permutation: P(7,2) = 7 × 6 = 42. The trap is choice E (7!) which counts arranging all seven, not just the two roles. When the problem assigns distinct roles, multiply slot-by-slot: 7 for president × 6 remaining for VP.

---

## Q4

**difficulty:** Beginner
**type:** Problem Solving
**topic:** Combinations


A team of 3 is picked from a group of 6 students. How many different teams are possible?

- A) 15
- B) 18
- C) 20
- D) 60
- E) 120

**answer:** C

**explanation:** Order doesn't matter in a team — just who's on it. C(6,3) = 6! / (3! × 3!) = 720 / 36 = 20. Trap: 6 × 5 × 4 = 120 counts ordered selections. Divide by 3! = 6 to strip the ordering, giving 20.

---

## Q5

**difficulty:** Beginner
**type:** Problem Solving
**topic:** Combinations


A pizza shop offers 8 toppings. How many different 2-topping pizzas are possible?

- A) 16
- B) 28
- C) 40
- D) 56
- E) 64

**answer:** B

**explanation:** Toppings don't have order — pepperoni + mushroom is the same pizza as mushroom + pepperoni. Use C(8,2) = (8 × 7) / 2 = 28. If the question asked about toppings on layer 1 vs layer 2 (order mattering), you'd use P(8,2) = 56.

---

## Q6

**difficulty:** Intermediate
**type:** Problem Solving
**topic:** Permutations


The letters of the word GAMES are rearranged. How many distinct arrangements are possible?

- A) 24
- B) 60
- C) 120
- D) 240
- E) 720

**answer:** C

**explanation:** Five distinct letters, no repeats. 5! = 120. If any letters repeated — say, LEVEL — you'd divide by the factorial of each repetition. GAMES has all distinct letters, so it's straight 5! = 120.

---

## Q7

**difficulty:** Intermediate
**type:** Problem Solving
**topic:** Combinations


A committee of 4 is chosen from 10 people. How many possible committees are there?

- A) 40
- B) 210
- C) 240
- D) 5040
- E) 5040

**answer:** B

**explanation:** Order doesn't matter for a committee. C(10,4) = 10! / (4! × 6!) = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1) = 5040 / 24 = 210. Trap: 10 × 9 × 8 × 7 = 5040 (ordered, answers D/E) — divide by 4! to strip ordering.

---

## Q8

**difficulty:** Intermediate
**type:** Problem Solving
**topic:** Restrictions


In how many arrangements of the letters in LESSON do the two S's appear next to each other?

- A) 60
- B) 120
- C) 240
- D) 360
- E) 720

**answer:** B

**explanation:** Glue the two S's into a single block, then arrange 5 items (the "SS" block, L, E, O, N). That's 5! = 120 arrangements. The two S's are identical, so no internal reordering of the block matters. Trick to remember: whenever "these must be adjacent," glue and count.

---

## Q9

**difficulty:** Intermediate
**type:** Problem Solving
**topic:** Restrictions


Six people sit in a row of 6 chairs. If Ana and Ben refuse to sit next to each other, how many seating arrangements are possible?

- A) 240
- B) 360
- C) 480
- D) 600
- E) 720

**answer:** C

**explanation:** Total arrangements: 6! = 720. Arrangements where Ana and Ben ARE together: treat them as a block (2 internal orders × 5! = 240). Subtract: 720 − 240 = 480. The complement trick ("total minus forbidden") is almost always faster than counting "not-adjacent" directly.

---

## Q10

**difficulty:** Intermediate
**type:** Problem Solving
**topic:** Combinations


From 5 men and 4 women, a committee of 3 must be formed with exactly 2 men and 1 woman. How many such committees are possible?

- A) 20
- B) 30
- C) 40
- D) 60
- E) 84

**answer:** C

**explanation:** Pick 2 men from 5 AND 1 woman from 4, then multiply: C(5,2) × C(4,1) = 10 × 4 = 40. When a problem says "exactly X of type A and Y of type B," choose from each group independently and multiply.

---

## Q11

**difficulty:** Intermediate
**type:** Problem Solving
**topic:** Circular


In how many ways can 5 people sit around a circular table?

- A) 24
- B) 60
- C) 120
- D) 240
- E) 720

**answer:** A

**explanation:** Circular arrangements of n items = (n − 1)! because rotations of the same configuration count as identical (there's no "seat #1"). (5 − 1)! = 4! = 24. If the seats were distinguishable (e.g., a rectangular head table), you'd use 5! = 120.

---

## Q12

**difficulty:** Intermediate
**type:** Problem Solving
**topic:** Restrictions


A code consists of 4 digits chosen from {0–9}. How many codes are possible if no digit repeats?

- A) 4000
- B) 5040
- C) 9000
- D) 10000
- E) 151200

**answer:** B

**explanation:** Order matters (it's a code), no repetition: P(10,4) = 10 × 9 × 8 × 7 = 5040. With repetition allowed, it'd be 10⁴ = 10000 (choice D). Trap is 9000 (the count of 4-digit numbers, which forbids leading zero) — read carefully.

---

## Q13

**difficulty:** Advanced
**type:** Problem Solving
**topic:** Restrictions


How many arrangements of the letters in MISSISSIPPI are possible?

- A) 34650
- B) 46200
- C) 69300
- D) 277200
- E) 332640

**answer:** A

**explanation:** 11 letters total with repeats: 4 I's, 4 S's, 2 P's, 1 M. Arrangements = 11! / (4! × 4! × 2! × 1!) = 39916800 / (24 × 24 × 2) = 39916800 / 1152 = 34650. Formula: n! divided by factorial of each repeated group.

---

## Q14

**difficulty:** Advanced
**type:** Problem Solving
**topic:** Combinations


From 8 candidates, a committee of 3 is chosen AND one of the three is designated as chair. How many such outcomes are possible?

- A) 56
- B) 112
- C) 168
- D) 336
- E) 504

**answer:** C

**explanation:** Two ways to count. (1) Choose 3 of 8 without order: C(8,3) = 56, then pick 1 of those 3 to be chair: 56 × 3 = 168. (2) Pick the chair first (8 choices), then pick 2 more from remaining 7: 8 × C(7,2) = 8 × 21 = 168. Same answer, different path — confirms the logic.

---

## Q15

**difficulty:** Advanced
**type:** Problem Solving
**topic:** Restrictions


In how many ways can 4 men and 4 women be seated in a row if men and women must alternate?

- A) 576
- B) 1152
- C) 2304
- D) 4608
- E) 40320

**answer:** B

**explanation:** Two patterns: M-W-M-W-M-W-M-W or W-M-W-M-W-M-W-M. For each pattern: arrange 4 men in 4 M-slots (4!) × arrange 4 women in 4 W-slots (4!) = 24 × 24 = 576. Two patterns, so 2 × 576 = 1152. Forgetting the second pattern gives 576 (trap A).

---

## Q16

**difficulty:** Advanced
**type:** Problem Solving
**topic:** Combinations


A bag has 6 red marbles and 5 blue marbles. How many ways can 4 marbles be drawn so that exactly 2 are red?

- A) 100
- B) 150
- C) 200
- D) 330
- E) 462

**answer:** B

**explanation:** Choose 2 red from 6 AND 2 blue from 5: C(6,2) × C(5,2) = 15 × 10 = 150. This is the "exactly X of type A" pattern again — independent choices multiplied.

---

## Q17

**difficulty:** Advanced
**type:** Problem Solving
**topic:** Restrictions


Eight distinct books are arranged on a shelf. In how many arrangements are two specific books NOT separated by any other book?

- A) 5040
- B) 10080
- C) 20160
- D) 30240
- E) 40320

**answer:** B

**explanation:** "Not separated" = adjacent. Treat the two specific books as a block (2 internal orders). Then arrange 7 items (the block + 6 others): 7! = 5040. Multiply by 2 for the internal ordering of the block: 2 × 5040 = 10080.

---

## Q18

**difficulty:** Advanced
**type:** Problem Solving
**topic:** Combinations


In a round-robin tournament with 10 teams, each team plays every other team exactly once. How many games are played in total?

- A) 20
- B) 45
- C) 90
- D) 100
- E) 180

**answer:** B

**explanation:** Each game involves a pair of teams and only counts once regardless of order. C(10,2) = 45. Trap: 10 × 9 = 90 (choice C) double-counts (A vs B = B vs A). Round-robin game counts are always C(n,2).

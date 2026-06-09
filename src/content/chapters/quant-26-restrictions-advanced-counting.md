---
slug: quant-26-restrictions-advanced-counting
title: "Advanced Counting & Restrictions"
section: Quant
estimated_minutes: 9
prerequisites:
  - quant-25-permutations-combinations
summary: |
  Adjacent, forbidden, and alternating restrictions, and choosing when to multiply vs add.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - combinatorics-q13
      - combinatorics-q14
  - id: restrictions
    type: reading
    title: "Restrictions — adjacent, forbidden, alternating, compound"
    check_question_ids:
      - combinatorics-q8
      - combinatorics-q9
      - combinatorics-q15
  - id: counting-and-combinations
    type: reading
    title: "Counting and combinations — when to multiply, when to choose"
    check_question_ids:
      - statistics-probability-q11
      - statistics-probability-q13
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - combinatorics-q15
      - combinatorics-q16
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - combinatorics-q17
      - combinatorics-q18
---

## @restrictions

Restriction problems add a constraint to a basic arrangement or selection. There are four patterns; recognize which one applies before picking a method.

### The glue trick — required adjacency

When specific objects *must* be adjacent, **treat them as a single glued block**. Arrange the block plus the remaining objects, then multiply by the block's internal orderings.

**Worked example.** How many arrangements of LESSON have the two S's next to each other?

Glue "SS" into one block. Now arrange 5 items (SS, L, E, O, N): 5! = 120. The two S's are identical, so no extra multiplier. Answer: **120**.

If the glued items are *distinct* (e.g., two named people), multiply by 2! for the internal ordering — AB vs BA. Six people in a row with Ana and Ben adjacent: 5! × 2 = **240**.

### The complement trick — forbidden adjacency and "at least one"

Never count the hard condition directly. Count the total, count the forbidden version, subtract.

**Worked example.** Six people in a row, Ana and Ben must NOT sit together.

- Total: 6! = 720
- Adjacent: (glue as block) 5! × 2 = 240
- Not adjacent: 720 − 240 = **480**

**"At least one" problems.** Always faster via complement:

    P(at least 1 woman) = Total − (committees with no women)

Example: C(9, 3) − C(5, 3) = 84 − 10 = **74**. Counting "exactly 1, 2, 3 women" directly takes three calculations; counting "zero women" takes one.

### Alternating patterns

When objects of two types must strictly alternate (men/women, red/blue, vowel/consonant), the key insight is that there are **two possible starting patterns** and each is counted independently.

**Worked example.** 4 men and 4 women seated in a row, men and women must alternate.

Two patterns exist: MWMWMWMW and WMWMWMWM.

- For each pattern: 4! ways to assign the men to M-slots × 4! ways to assign women to W-slots = 24 × 24 = 576
- Two patterns: 2 × 576 = **1,152**

**Trap to watch.** Students who count only one pattern (e.g., only "men go first") get exactly half the right answer. Always ask: can the other group start instead?

### Compound restrictions

When a problem requires one pair to be adjacent AND another pair to not be adjacent, break it into two stages: count the required-adjacent case, then subtract the sub-case where both constraints are violated simultaneously.

**Worked example.** Six people in a row: A and B must be adjacent, C and D must not be adjacent.

- (A and B together): 5! × 2 = 240
- (A and B together AND C and D together): 4! × 2 × 2 = 96
- Net (A and B together, C and D not together): 240 − 96 = **144**

**Trap to watch.** The most common error is computing the "required" constraint correctly (240) and then forgetting to remove the sub-case that also satisfies the "forbidden" constraint. One subtraction step is all it takes — but students skip it under time pressure.

**Alternating arrangements.** When two types must strictly alternate in a line — MFMFMF or ABABAB — the approach is:

1. Count the number of valid patterns.
2. For each pattern, count the arrangements of each type in its allotted slots.
3. Multiply.

**Example.** 3 men (M) and 3 women (W) sit in a row of 6 chairs, alternating genders. How many arrangements?

Valid patterns are MWMWMW and WMWMWM — exactly 2.

For each pattern:
- 3 men fill the "M" slots: 3! = 6 ways
- 3 women fill the "W" slots: 3! = 6 ways
- Per pattern: 6 × 6 = 36

Total: 2 × 36 = **72**

Quick formula for equal groups: **2 × (n!)²** where n is the size of each group.

**What if the groups are unequal?** If you have 4 men and 3 women alternating, only the MWMWMWM pattern works (the larger group must start and end). One pattern, so: 1 × 4! × 3! = 24 × 6 = **144**.

**Alternating at a round table.** Circular + alternating: fix one person to eliminate rotational duplicates, then arrange the remaining n − 1 in the alternating pattern. For 3 men and 3 women at a round table: fix one man, place 2 remaining men in 2! = 2 ways, then fill the 3 women's gaps in 3! = 6 ways. Total: 2 × 6 = **12**. (No factor of 2 — rotational equivalence collapses the two patterns into each other.)

## @counting-and-combinations

Many probability problems — and most hard ones — require counting how many ways something can happen. There are exactly three counting tools. The trap answer on most counting questions is the right count done with the wrong tool — permutation when the answer needs combination, or multiplication when cases must be split and added. Identify the tool first; the arithmetic follows.

Three tools:

**The multiplication principle.** If choice A has m options and independent choice B has n options, combined choices = m × n.

**Example.** Restaurant with 4 appetizers, 6 entrees, 3 desserts. Three-course meals? 4 × 6 × 3 = **72**. Adding them (4 + 6 + 3 = 13) is the trap answer.

**Permutations — when order matters.**

P(n, k) = n! / (n − k)!. "Arrange k specific objects from n distinct."

**Combinations — when order doesn't matter.**

C(n, k) = n! / (k! × (n − k)!). "Choose k from n, any order."

**Example.** Committee of 3 from 7. Order doesn't matter (the committee is the same regardless of seating). C(7, 3) = 35.

Trap answer 210 comes from computing 7 × 6 × 5 and forgetting to divide by 3! — that's permutations, not combinations.

**The "exactly X of type A and Y of type B" pattern.** Choose independently from each group, multiply.

Committee of 4 = exactly 2 men and 2 women from 5 M and 4 W:

    C(5, 2) × C(4, 2) = 10 × 6 = 60

Dominates 30% of GMAT combinatorics. Pattern-match on sight.

**Counting 3-digit numbers with digit constraints.** Count position-by-position.

How many 3-digit numbers have distinct digits and are divisible by 5?

Divisible by 5 → units digit is 0 or 5. Two cases.

- Case 1 (units = 0): hundreds can be 1–9 (9 choices); tens can be anything except hundreds and 0 (8 choices). 9 × 8 = 72.
- Case 2 (units = 5): hundreds can be 1–9 except 5 (8 choices); tens can be anything except hundreds and 5 (8 choices). 8 × 8 = 64.
- Total: 72 + 64 = **136**.

Always break digit problems into cases by the most constrained digit (here, units).

**The C(n+1, k) − C(n, k) identity.**

Hard DS problem: "If the group had 1 additional person, the number of 3-person committees would increase by 21. Find n."

Use: C(n+1, 3) − C(n, 3) = C(n, 2). So C(n, 2) = 21 → n(n−1)/2 = 21 → n(n−1) = 42 → **n = 7**. Then C(7, 3) = 35.

Memorize this identity — it appears in disguise on hard combinations questions.

**"At least k of type A" problems — split by cases.**

A student answers 5 of 7 questions and must answer at least 2 of the first 3. Split by how many of the first 3 are taken:

- Exactly 2 of first 3, 3 of remaining 4: C(3,2) × C(4,3) = 3 × 4 = 12
- All 3 of first 3, 2 of remaining 4: C(3,3) × C(4,2) = 1 × 6 = 6
- Total: **18**

Complement alternative: C(7, 5) = 21 total. Subtract cases with fewer than 2 of the first 3 — i.e., exactly 1 of the first 3 forces all 4 of the rest: C(3,1) × C(4,4) = 3. So 21 − 3 = 18. ✓

> **Self-explanation prompt.** Why does "choose 3 of 7" equal "not choose 4 of 7"? If you can say "because every 3-person team uniquely corresponds to a 4-person non-team — every commitment picks exactly one complement," you've internalized the C(n,k) = C(n, n−k) symmetry and will stop doing the big factorial when the small one gives the same answer.

**Restricted arrangements — two templates.**

When a counting problem places constraints on position or adjacency, use one of two templates.

**Template 1: Complement.** Count all unrestricted arrangements, then subtract the "bad" ones that violate the constraint.

**Worked example.** Five people (A, B, C, D, E) sit in a row. In how many ways do A and B NOT sit next to each other?

- Total: 5! = 120.
- A and B adjacent (the "bad" arrangements): treat A+B as one block. Now arrange 4 units: 4! = 24. Within the block, A and B can swap: × 2. Bad total = 24 × 2 = **48.**
- Valid (not adjacent): 120 − 48 = **72.**

Use complement when the "bad" arrangements form a tidy pattern — adjacency is the classic case because "treat as one block" is always one algebraic step.

**Template 2: Fix the constrained item first, then fill freely.**

When the constraint is "item X must occupy a specific position," place X in that position, then count arrangements of the remaining items.

**Worked example.** 5 books on a shelf. Book A must be on the left end. How many arrangements?

- A is fixed. Arrange the other 4 freely: 4! = **24.**

**Relative order shortcut.** When the constraint is "A must appear before B" (but not in a specific slot), exactly half of all arrangements satisfy this — by symmetry, A precedes B in half and follows B in the other half.

    Arrangements where A comes before B = n! / 2

**Micro-drill.** 60 seconds total.

1. 4 people in a row: how many ways with Person X at the right end? → ___
2. 4 people in a row: how many ways where X and Y are NOT adjacent? → ___
3. 5 people in a row: how many ways where P comes before Q (not necessarily adjacent)? → ___

Answers: (1) **6** — X fixed, arrange other 3: 3! = 6. (2) **12** — total 4! = 24; adjacent cases: 3! × 2 = 12; valid = 24 − 12 = 12. (3) **60** — total 5! = 120; half have P before Q: 120/2 = 60.

> **Self-explanation prompt.** Why does the complement template work for "A and B can't be adjacent"? If you can say "because directly counting non-adjacent arrangements has many cases, but adjacent arrangements have one clean structure (A+B as a block), so complement is one step where direct counting is many," you've understood why complement is the reflex for adjacency restrictions. Whenever a constraint specifies what two items cannot do, think complement first.

---
slug: quant-25-permutations-combinations
title: "Permutations & Combinations"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-24-counting-basics
summary: |
  Order-matters vs order-doesn't, multiset arrangements with repeats, and circular arrangements.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - combinatorics-q7
      - combinatorics-q8
  - id: permutations
    type: reading
    title: "Permutations — when order matters"
    check_question_ids:
      - combinatorics-q3
  - id: combinations
    type: reading
    title: "Combinations — when order doesn't matter"
    check_question_ids:
      - combinatorics-q5
  - id: repeats
    type: reading
    title: "Repeated letters and multiset arrangements"
    check_question_ids:
      - combinatorics-q27
  - id: circular
    type: reading
    title: "Circular arrangements"
    check_question_ids:
      - combinatorics-q11
      - combinatorics-q28
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - combinatorics-q9
      - combinatorics-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - combinatorics-q11
      - combinatorics-q12
---

## @permutations

A **permutation** is an arrangement where **order matters**. "Who got first, second, and third place" is a permutation. "Who is on the team" is not.

**Build it with slots first, then use the formula.** From 7 candidates, a president and a vice-president are chosen. How many outcomes?

- Slot 1 (president): 7 choices
- Slot 2 (VP): 6 remaining choices
- Total: 7 × 6 = **42**

That's a permutation of 2 from 7, written **P(7, 2)**. The general formula:

**P(n, k) = n! / (n − k)!**

Sanity-check: P(7, 2) = 7! / 5! = (7 × 6 × 5!) / 5! = 7 × 6 = 42. ✓

**Why the formula works.** n! arranges ALL n objects. The (n − k)! in the denominator cancels the tail — the arrangements of the objects you didn't pick. You only care about which k objects fill the k named slots.

**Quick test:** ask yourself, "*if I swap two specific people, do I get a different outcome?*" Ana-president, Ben-VP is different from Ben-president, Ana-VP. Different outcome = permutation. Same people on a committee in any order = combination.

**Special case — all n at once.** P(n, n) = n! / 0! = n!. Picking all 7 candidates in order = 7! = 5040.

**Micro-drill — three variations, one base problem.** Seven runners finish a race. In each case, what's the count?

| Scenario | Count | Why |
|---|---|---|
| How many orders for all 7 runners? | 7! = 5,040 | All n objects, all slots |
| How many ways to award gold/silver/bronze? | P(7, 3) = 210 | 3 named slots, order matters |
| How many ways to pick 3 runners for a team photo (no roles)? | C(7, 3) = 35 | 3 unnamed slots, order doesn't matter |

Notice that the permutation count (210) is exactly 3! = 6 times the combination count (35). Those 6 extra arrangements are the internal orderings of the same 3 people that a combination collapses into one.

**Trap to watch.** "A committee of 3 is chosen from 10" is C(10, 3) = 120. "A president, VP, and treasurer are chosen from 10" is P(10, 3) = 720. Six times larger — because roles make order matter. The signal: are the positions named and distinct?

> **Self-explanation prompt.** State, without looking up, why P(n, k) / k! = C(n, k). If you can say "because each group of k people appears k! times in the permutation count — once per ordering — and we divide to collapse all those orderings into one," you understand the relationship cold.

## @combinations

A **combination** is a selection where **order doesn't matter**. The same three people in any order is the same team.

**Formula:**

**C(n, k) = n! / (k! × (n − k)!)**

Also written **(n choose k)**.

**Worked example.** A team of 3 is picked from 6 students. How many possible teams?

- If order mattered: 6 × 5 × 4 = 120
- Each team of 3 was counted 3! = 6 times (once for each ordering)
- Divide: 120 / 6 = **20**

Check: C(6, 3) = 6! / (3! × 3!) = 720 / 36 = 20. ✓

**Why C(n, k) = P(n, k) / k!.** Every combination corresponds to k! permutations of the same k objects. Dividing by k! strips the ordering.

**Symmetry trick.** C(n, k) = C(n, n − k). Choosing 3 of 6 is equivalent to *not choosing* the other 3. Useful shortcut: C(10, 7) = C(10, 3) = 120 — flip to the smaller side and skip the heavy arithmetic.

**Quick-reference values to know cold:**

- C(n, 0) = C(n, n) = 1
- C(n, 1) = C(n, n − 1) = n
- C(n, 2) = n(n − 1) / 2

**The "exactly X of type A and Y of type B" pattern.** When a problem says "exactly 2 men and 1 woman from 5 men and 4 women," pick independently from each group and multiply:

    C(5, 2) × C(4, 1) = 10 × 4 = 40

This pattern — independent selections multiplied together — appears in roughly 30% of GMAT combinatorics questions. Recognize it on sight.

**Probability bridge.** GMAT probability questions regularly hide a combinations calculation inside them. Once you spot it, the problem halves. The template:

    P(event) = favorable outcomes / total outcomes = C(favorable) / C(total)

Example: a bag holds 5 red and 4 blue marbles. Two are drawn at random. What's the probability both are red?

- Favorable: C(5, 2) = 10 ways to pick 2 red from 5 red
- Total: C(9, 2) = 36 ways to pick any 2 from 9
- Probability = 10/36 = **5/18**

The structure is always the same: count favorable arrangements in the numerator, count all arrangements in the denominator. Whenever a probability problem says "chosen at random" with no ordering mentioned, that's a combination in disguise.

> **Recall check.** Without peeking: state the formulas for P(n, k) and C(n, k). State the symmetry identity. Compute C(10, 7) in your head. If you computed 10!/(7!3!) the long way, you missed the shortcut — C(10, 7) = C(10, 3) = 120 with less arithmetic. Retrieving the formulas *and* the symmetry in the same breath is how you wire them together in long-term memory.

## @repeats

When some objects are **identical**, straight factorial overcounts because swapping identical objects produces the "same" arrangement.

**Formula:** For n objects with repetitions r₁, r₂, ..., rₖ:

**n! / (r₁! × r₂! × ... × rₖ!)**

**Mental model.** Start with "if all were distinct": n! arrangements. Then divide by the factorial of each repeated group to collapse arrangements that are actually the same.

**Worked example — single pair of repeats.** LETTER has 6 letters with 2 T's (and 2 E's). Wait — both T and E repeat. Distinct arrangements:

    6! / (2! × 2!) = 720 / 4 = 180

Key step: identify *every* repeated group before computing. LETTER has two repeat groups (TT and EE), so divide by 2! twice.

**Worked example — multiple repeat groups.** COFFEE has 6 letters: C, O, F, F, E, E — two F's and two E's.

    6! / (2! × 2!) = 720 / 4 = 180

Same arithmetic as LETTER, for the same reason. One repeated group = divide by one factorial. Two repeated groups = divide by two factorials.

**Worked example — many repeats.** MISSISSIPPI has 11 letters: 1 M, 4 I's, 4 S's, 2 P's.

    11! / (1! × 4! × 4! × 2!) = 39,916,800 / (1 × 24 × 24 × 2) = 34,650

Do not panic at the number of groups. List the letters, count each group, write the denominator. The arithmetic is just one division.

**Connection to combinations.** When there are only two kinds of objects — such as a binary string of A's and B's — the multiset formula collapses to a combination:

"How many 7-character strings with exactly 3 A's and 4 B's?" = 7! / (3! × 4!) = **35** = C(7, 3).

These are the same calculation seen from two angles. Choosing positions for the A's is identical to arranging a multiset.

**Trap to watch.** The error is forgetting to list every repeated group. If COFFEE only had one repeated letter, you would divide by 2! once. Two repeated letters means divide by 2! twice. Slow down and count all groups before setting up the formula.

> **Self-explanation prompt.** Before the check question: why does swapping two identical letters NOT produce a new arrangement? If you can say "because the result looks exactly the same — there is no visible difference between the two F positions in COFFEE," you have the intuition that makes the formula stick.

## @circular

In a **circular arrangement** — people around a round table, beads on a bracelet — **rotations of the same arrangement count as identical**. There is no "seat #1" because every seat is equivalent.

Fix one object in place, then arrange the rest linearly.

**Formula:** Circular arrangements of n distinct objects = **(n − 1)!**

**Worked example.** 5 people around a round table: (5 − 1)! = 4! = **24**, not 5! = 120.

**Why?** Rotating any arrangement by one seat produces the same *relative* ordering — Ana still has Ben to her left and Cal to her right. Five rotations of the same configuration all look the same, so 5! / 5 = 4! = 24.

**Watch for distinguishable seats.** A head table with a specific "head" chair, a rectangular table where the ends differ, a round table with numbered chairs — these are not truly circular. Use n! (normal permutations) when seats are distinguishable.

### Combining circular with adjacency

The glue trick applies in circular arrangements too. Treat the required-adjacent pair as one block, apply the circular formula to the resulting (n − 1) units, then multiply by internal orderings of the block.

**Worked example.** 7 people at a circular table; one specific pair must sit next to each other.

- Glue the pair as a block → 6 units around a circular table
- Circular arrangements of 6 units: (6 − 1)! = 5! = 120
- Internal ordering of the pair: × 2
- Total: 120 × 2 = **240**

**Trap to watch.** Forgetting the × 2 internal ordering of the block is the most common error. The two people in the block can swap seats — that is a distinct arrangement.

**Bracelets and necklaces** (rare on GMAT): circular AND flippable, meaning mirror images are identical. Divide by 2: (n − 1)! / 2. If you see this, it is a 745+ question — note the extra division and move on.

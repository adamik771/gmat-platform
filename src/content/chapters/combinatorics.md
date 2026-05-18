---
slug: combinatorics
title: Combinatorics
section: Quant
estimated_minutes: 45
prerequisites: []
summary: |
  Combinatorics on the GMAT is a small number of patterns repeated constantly. Learn the four decisions (order or no? repeats allowed? independent selections? forbidden arrangements?), memorize three formulas, and you'll solve every combinatorics question on test day in under two minutes.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss both — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - combinatorics-q1
      - combinatorics-q4

  - id: enumeration
    type: reading
    title: "Enumeration — counting the long way"
    check_question_ids:
      - combinatorics-q2

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

  - id: restrictions
    type: reading
    title: "Restrictions — adjacent, forbidden, alternating"
    check_question_ids:
      - combinatorics-q8
      - combinatorics-q9

  - id: circular
    type: reading
    title: "Circular arrangements"
    check_question_ids:
      - combinatorics-q11

  - id: repeats
    type: reading
    title: "Repeated letters and multiset arrangements"
    check_question_ids: []

  - id: decision
    type: summary
    title: "The four-question decision tree"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - combinatorics-q1
      - combinatorics-q2
      - combinatorics-q3
      - combinatorics-q4
      - combinatorics-q5
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - combinatorics-q6
      - combinatorics-q7
      - combinatorics-q8
      - combinatorics-q9
      - combinatorics-q10
      - combinatorics-q11
      - combinatorics-q12
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - combinatorics-q13
      - combinatorics-q14
      - combinatorics-q15
      - combinatorics-q16
      - combinatorics-q17
      - combinatorics-q18
---

## @enumeration

Enumeration means **writing out every possibility and counting them**. It sounds too primitive for the GMAT, but it's the foundation every formula is built on — and for small sets (3, 4, maybe 5 objects) it's often the fastest approach.

**Mental model — the Fundamental Counting Principle.** Counting problems reduce to filling slots, one at a time. How many choices for slot 1? How many for slot 2 given what's in slot 1? Multiply. Every formula in this chapter — P(n, k), C(n, k), (n − 1)!, n!/(r₁! × r₂!) — is just this slot-filling logic run faster. If you understand the slots, you can re-derive any formula in 10 seconds when memory fails.

**Example.** Three distinct books — Algebra (A), Biology (B), Chemistry (C) — line up on a shelf. How many orders are possible?

List every arrangement:

    ABC, ACB, BAC, BCA, CAB, CBA

Six orders. Now see *why* it's six via slots:
- Slot 1: 3 choices (any of A, B, C)
- Slot 2: 2 choices (whichever two are left)
- Slot 3: 1 choice (the remaining one)

Multiply: 3 × 2 × 1 = **6**. This is 3! (read "three factorial").

**The rule enumeration teaches.** For n distinct objects placed in a row:

    n × (n − 1) × (n − 2) × … × 1 = n!

*Memorize these:* 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040. They appear in answer choices constantly. 8! = 40,320 — you won't compute it on the clock, but you'll recognize it.

> **Self-explanation prompt.** Before you look at the check question, explain in one sentence: *why* does each additional slot have one fewer choice than the slot before it? If you can say "because each previous slot already used up one object," you've internalized the rule. Don't move on until you can say it.

## @permutations

A **permutation** is an arrangement where **order matters**. "Who got first, second, and third place" is a permutation. "Who's on the team" is not.

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

A **combination** is a selection where **order doesn't matter**. "Which 3 people make the team" is a combination. The same three people in any order is the same team.

**Formula:**

**C(n, k) = n! / (k! × (n − k)!)**

Also written **ⁿCₖ** or **(n choose k)**.

**Example.** A team of 3 is picked from 6 students. How many possible teams?

- If order mattered: 6 × 5 × 4 = 120
- But order doesn't matter, so we've overcounted — each team of 3 was counted 3! = 6 times (once for each ordering of the same three people)
- Divide: 120 / 6 = **20**

Check: C(6, 3) = 6! / (3! × 3!) = 720 / 36 = 20. ✓

**Why C(n, k) = P(n, k) / k!.** Every combination corresponds to k! permutations of the same k objects. Dividing the permutation count by k! strips off the ordering.

**Symmetry trick.** C(n, k) = C(n, n − k). Choosing 3 of 6 is equivalent to *not* choosing the other 3. Useful for skipping arithmetic: C(10, 7) = C(10, 3) = 120. Mentally flip to the smaller k.

**Quick-reference values you should know cold:**
- C(n, 0) = C(n, n) = 1
- C(n, 1) = C(n, n − 1) = n
- C(n, 2) = n(n − 1) / 2

**The "exactly X of type A and Y of type B" pattern.** When a problem says "exactly 2 men and 1 woman from 5 men and 4 women," pick independently from each group and multiply:

    C(5, 2) × C(4, 1) = 10 × 4 = 40

This shows up more than any other combination pattern — probably 30% of GMAT combinatorics questions involve some version of it.

**Probability bridge.** GMAT probability questions regularly hide a combinations calculation inside them. Once you spot it, the problem halves. The template:

    P(event) = favorable outcomes / total outcomes = C(favorable) / C(total)

Example: a bag holds 5 red and 4 blue marbles. Two are drawn at random. What's the probability both are red?

- Favorable: C(5, 2) = 10 ways to pick 2 red from 5 red
- Total: C(9, 2) = 36 ways to pick any 2 from 9
- Probability = 10/36 = **5/18**

The structure is always the same: count favorable arrangements in the numerator, count all arrangements in the denominator. Whenever a probability problem says "chosen at random" with no ordering mentioned, that's a combination in disguise.

> **Recall check.** Without peeking: state the formulas for P(n, k) and C(n, k). State the symmetry identity. Compute C(10, 7) in your head. If you computed 10!/(7!3!) the long way, you missed the shortcut — C(10, 7) = C(10, 3) = 120 with less arithmetic. Retrieving the formulas *and* the symmetry in the same breath is how you wire them together in long-term memory.

## @restrictions

"In how many arrangements of the letters in LESSON are the two S's next to each other?" That's a restriction problem. The GMAT loves them.

**The glue trick — for adjacency restrictions.** When specific objects MUST be adjacent, **treat them as a single glued block**, arrange the block plus the remaining objects, then multiply by internal orderings of the block.

LESSON has 6 letters (L, E, S, S, O, N). Glue the two S's into an "SS" block. Now arrange 5 items (SS, L, E, O, N) in a row: 5! = 120. The two S's inside the block are identical, so no extra multiplier. Answer: **120**.

If the glued items are *distinct* (e.g., two named people), multiply by 2! for the internal ordering. Six people in a row with Ana and Ben adjacent: treat Ana-Ben as a block, arrange 5 items (5! = 120), then × 2 for AB vs BA inside the block = 240.

**The complement trick — for "not adjacent," "at least one," "no two together."** Don't count the hard condition directly. Count the total, count the forbidden version, subtract.

Six people in a row, Ana and Ben NOT adjacent:
- Total arrangements: 6! = 720
- Adjacent arrangements: (block of 5) × 5! × 2 = 240
- Not adjacent: 720 − 240 = **480**

**"At least one" problems.** "At least one" is almost always faster via complement: count "none" and subtract from total.

Example: A committee of 3 is picked from 5 men and 4 women. How many committees have at least 1 woman?
- Total committees: C(9, 3) = 84
- Committees with no women: C(5, 3) = 10
- At least 1 woman: 84 − 10 = 74

Trying to count "at least 1 woman" directly means splitting into cases (exactly 1, exactly 2, exactly 3) — slow and error-prone.

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

## @circular

In a **circular arrangement** — people around a round table, beads on a bracelet, etc. — **rotations of the same arrangement count as identical**. There's no "seat #1" because every seat is equivalent.

To strip out rotational duplicates: fix one object in place, then arrange the rest linearly.

**Formula:** Circular arrangements of n = **(n − 1)!**

**Example.** 5 people around a round table: (5 − 1)! = 4! = **24**, not 5! = 120.

**Why?** If you rotate any arrangement by one seat, you get the same *relative* ordering — Ana still has Ben to her left and Cal to her right. 5 different rotations all give the same circular arrangement, so 5! / 5 = 4! = 24.

**Watch for distinguishable seats.** A head table with a specific "head" chair, a rectangular table where the ends differ, a round table with numbered chairs — those aren't truly circular. Use n! (normal permutations) if the seats are distinguishable.

**Bracelets and necklaces** (rare on GMAT): circular AND flippable. Divide by 2 to account for mirror images. (n − 1)! / 2. If you see this, it's probably a 745+ question — take your best guess and move on if time is tight.

## @repeats

When some objects are **identical**, straight factorial overcounts because swapping identical objects produces the "same" arrangement.

**Formula:** For n objects with repetitions r₁, r₂, …, rₖ (where r₁ + r₂ + … = n):

**n! / (r₁! × r₂! × … × rₖ!)**

**Example.** MISSISSIPPI has 11 letters: 1 M, 4 I's, 4 S's, 2 P's.

    11! / (1! × 4! × 4! × 2!) = 39,916,800 / (1 × 24 × 24 × 2) = 39,916,800 / 1,152 = 34,650

**The shortcut mental model.** Start with "if all were distinct": 11! = 39,916,800. Then divide by the factorial of each repeated group to collapse arrangements that are actually identical.

**Common cases to recognize:**
- **Two letters repeat.** LETTER has 2 T's and 2 E's. 6! / (2! × 2!) = 720 / 4 = 180.
- **Binary sequences.** "How many 7-character strings with exactly 3 A's and 4 B's?" = 7! / (3! × 4!) = 35 (this is C(7, 3) — choosing positions for the A's).

**Connection to combinations.** When you have only two kinds of objects, the multiset arrangement formula collapses into a combination. "How many arrangements of AAABBBB" = C(7, 3) = 35. Useful to internalize — it's the same calculation looked at two ways.

> **Self-explanation prompt.** Why does swapping two identical letters not produce a new arrangement? If you can say "because the result looks the same — the string is unchanged — so it's not a distinct outcome," you understand why we divide. The denominator doesn't subtract anything; it cancels out the overcounting that straight factorial committed.

> **Recall check.** Write the multiset formula from memory. Then apply it to BANANA (6 letters: 1 B, 3 A's, 2 N's). The answer is 6! / (1! × 3! × 2!) = 720 / 12 = 60. If you got it right, you're ready for the problem set. If not, re-read the formula once more, then close it and recompute without looking.

## @decision

Every combinatorics question on the GMAT reduces to four decisions. Run through them in order:

**1. Does order matter?**
- **Yes** → permutation (P formula, or slot-by-slot multiplication)
- **No** → combination (C formula)

**2. Are there repeated/identical objects?**
- **Yes** → divide by the factorial of each repeated group
- **No** → straight factorial or permutation/combination formula

**3. Is there a constraint (adjacent, forbidden pair, alternating)?**
- **Adjacent required** → glue trick
- **Not adjacent / forbidden** → complement trick (total − forbidden)
- **Alternating** → count per pattern, multiply by number of patterns

**4. Is it circular or linear?**
- **Circular with indistinguishable seats** → (n − 1)!
- **Linear or distinguishable seats** → n!

That's the entire chapter's content in 8 lines. Memorize the decision tree — when you see a combinatorics question on the test, you're not guessing which formula applies, you're stepping through four yes/no questions to land on exactly one.

**Common patterns to pattern-match on sight:**

| Problem says | You're doing | Formula |
|---|---|---|
| "How many orders…" | Permutation | n! or P(n, k) |
| "Committee of k from n" | Combination | C(n, k) |
| "Exactly X of type A and Y of type B" | Product of combinations | C(nA, X) × C(nB, Y) |
| "At least 1 of type A" | Complement | Total − (none of A) |
| "Must sit together" | Glue trick | Arrange block + others, then internal |
| "Cannot sit together" | Complement | Total − (all together) |
| "Alternating in a row, equal groups" | Alternating | 2 × (n!)² |
| "Alternating in a row, unequal groups" | Alternating | 1 × larger! × smaller! |
| "Round table of n" | Circular | (n − 1)! |
| "Letters of [repeated word]" | Multiset | n! / (r₁! × r₂! × …) |
| "Round-robin: every pair plays once" | Combination | C(n, 2) |
| "Probability, drawn at random" | Combinations as ratio | C(favorable) / C(total) |

**What to do next.**

1. Work through the problem sets below — start at Easy regardless of your target score. Combinatorics is a topic where 5 slow problems done with deliberate pattern-matching beats 20 rushed ones.
2. For every question you miss, note *which decision* you got wrong: did you misclassify permutation vs. combination, or forget the complement, or miscount the valid patterns? Tag it in the error log — one tag gives you more information than re-reading the entire chapter.
3. Once you've completed the chapter problem sets, combinatorics questions will appear in the spaced retrieval queue. That's where the pattern recognition locks in.

When you finish the end-of-chapter sets below, keep this table open. By the time you've done 15–20 combinatorics questions with it at your elbow, you won't need it anymore.

---
slug: quant-24-counting-basics
title: "Counting: The Fundamentals"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-23-statistics
summary: |
  Structured counting: enumeration, the decision-tree (multiplication) principle, and distributing identical items.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - combinatorics-q1
      - combinatorics-q2
  - id: enumeration
    type: reading
    title: "Enumeration — counting the long way"
    check_question_ids:
      - combinatorics-q2
  - id: decision
    type: reading
    title: "The decision tree — all patterns in one place"
    check_question_ids:
      - combinatorics-q1
      - combinatorics-q2
      - combinatorics-q3
      - combinatorics-q4
      - combinatorics-q5
      - combinatorics-q6
      - combinatorics-q7
      - combinatorics-q8
      - combinatorics-q9
      - combinatorics-q10
      - combinatorics-q11
      - combinatorics-q12
      - combinatorics-q23
      - combinatorics-q24
      - combinatorics-q27
      - combinatorics-q29
      - combinatorics-q13
      - combinatorics-q14
      - combinatorics-q15
      - combinatorics-q16
      - combinatorics-q17
      - combinatorics-q18
      - combinatorics-q19
      - combinatorics-q21
      - combinatorics-q22
      - combinatorics-q25
      - combinatorics-q26
      - combinatorics-q28
  - id: distributions
    type: reading
    title: "Distributions — identical items among distinct recipients"
    check_question_ids:
      - combinatorics-q26
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - combinatorics-q3
      - combinatorics-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - combinatorics-q5
      - combinatorics-q6
---

## @enumeration

Enumeration means **writing out every possibility and counting them**. It sounds too primitive for the GMAT, but it is the foundation every formula is built on — and for small sets (3 or 4 objects) it is often the fastest approach on test day.

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

## @decision

Every combinatorics question on the GMAT reduces to four decisions. Run through them in order before reaching for a formula.

**1. Does order matter?**
- **Yes** → permutation (slot-by-slot multiplication or P(n, k))
- **No** → combination C(n, k)

**2. Are there repeated or identical objects?**
- **Identical items being distributed** → stars-and-bars C(n + k − 1, k − 1)
- **Repeated objects being arranged** → divide by factorial of each repeated group: n! / (r₁! × r₂! × ...)
- **All distinct** → straight factorial, P, or C

**3. Is there a constraint?**
- **Adjacent required** → glue trick
- **Not adjacent / forbidden** → complement (total − adjacent)
- **Alternating** → count per starting pattern × (arrangements per pattern); remember two starting patterns
- **Compound** → count the required constraint, subtract the sub-case where both are violated
- **At least one of type A** → complement: total − none of type A

**4. Is it circular or linear?**
- **Circular, indistinguishable seats** → (n − 1)!
- **Linear or distinguishable seats** → n!

**Quick-reference pattern table:**

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

## @distributions

Distribution problems ask: in how many ways can you allocate **identical** items among **distinct** recipients?

This is different from arrangement problems. Arrangement problems use distinct objects (people, books, letters). Distribution problems use identical objects (candies, coins, votes) given to labeled recipients (children, boxes, candidates).

### Stars and bars — no minimum constraint

To distribute n identical candies among k distinct children (each child may get zero):

**C(n + k − 1, k − 1)**

**The mental model.** Imagine n identical stars ( ★ ★ ★ ... ) in a row, separated by k − 1 dividers ( | ). The dividers split the row into k groups — one per child. Choosing where to place the k − 1 dividers among n + k − 1 total positions is equivalent to choosing a distribution.

**Worked example.** Distribute 6 identical candies among 4 distinct children. No minimum.

    C(6 + 4 − 1, 4 − 1) = C(9, 3) = 84

### Stars and bars — at-least-one constraint

When each recipient must get at least one item: give each child one candy first (uses k candies), then distribute the remaining n − k freely.

**Worked example.** Distribute 10 identical candies among 4 distinct children; each child must get at least one.

- Give each child 1 candy first: uses 4. Remaining: 10 − 4 = 6.
- Distribute 6 among 4 freely: C(6 + 4 − 1, 4 − 1) = C(9, 3) = **84**.

**Worked example.** Same problem, distribute 4 among 4 with each getting at least one. Give each 1 first: 0 remaining. Only one way: each child gets exactly 1. C(0 + 4 − 1, 4 − 1) = C(3, 3) = **1**. ✓

### When to use distributions vs combinations

| You are choosing... | Method |
|---|---|
| k *distinct* people from n | Combination C(n, k) |
| How to allocate *identical* items to *distinct* recipients | Stars and bars C(n+k−1, k−1) |

The key giveaway for stars and bars: the items are interchangeable (identical candies, identical votes) and the recipients are distinguishable (named children, named boxes).

**Trap to watch.** Students apply C(n, k) to distribution problems and get nonsense. Before using any formula, ask: are the items distinct or identical? If identical, stars and bars. If distinct, combinations or permutations.

> **Self-explanation prompt.** Before the check question: why is distributing 6 identical items not the same as choosing 6 items? The items have no identity — there is no "first candy" or "second candy." The only thing that varies is *how many* each recipient gets, not *which* they get.

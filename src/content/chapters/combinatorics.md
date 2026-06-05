---
slug: combinatorics
title: Combinatorics
section: Quant
estimated_minutes: 60
prerequisites: []
summary: |
  Combinatorics on the GMAT is a small number of patterns repeated constantly. Master the four decisions (order or no? repeats allowed? restrictions? circular or linear?), internalize the key formulas, and you will solve every counting and probability question on test day in under two minutes.
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
    title: "Restrictions — adjacent, forbidden, alternating, compound"
    check_question_ids:
      - combinatorics-q8
      - combinatorics-q9
      - combinatorics-q15

  - id: circular
    type: reading
    title: "Circular arrangements"
    check_question_ids:
      - combinatorics-q11
      - combinatorics-q28

  - id: repeats
    type: reading
    title: "Repeated letters and multiset arrangements"
    check_question_ids:
      - combinatorics-q27

  - id: distributions
    type: reading
    title: "Distributions — identical items among distinct recipients"
    check_question_ids:
      - combinatorics-q26

  - id: probability-basics
    type: reading
    title: "Probability basics — counting favorable vs total"
    check_question_ids:
      - combinatorics-q24
      - combinatorics-q21

  - id: decision
    type: summary
    title: "The decision tree — all patterns in one place"
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
      - combinatorics-q23
      - combinatorics-q24
      - combinatorics-q27
      - combinatorics-q29
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
      - combinatorics-q19
      - combinatorics-q21
      - combinatorics-q22
      - combinatorics-q25
      - combinatorics-q26
      - combinatorics-q28
---

## @enumeration

Combinatorics asks one question in many guises: **how many ways can this happen?** The answer always comes from filling slots systematically. There are seven patterns in this chapter — once you can name the pattern, the formula follows in seconds.

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

When objects of two types must strictly alternate (men/women, red/blue, vowel/consonant), the key insight is that there are **two possible starting patterns** — and each is counted independently.

**Worked example — equal groups.** 3 men and 3 women sit in a row of 6 chairs, alternating genders.

Valid patterns: MWMWMW and WMWMWM — exactly 2.

For each pattern:
- 3 men fill the M-slots: 3! = 6 ways
- 3 women fill the W-slots: 3! = 6 ways
- Per pattern: 6 × 6 = 36

Total: 2 × 36 = **72**

Quick formula for equal groups of size n: **2 × (n!)²**

**Unequal groups.** If you have 4 men and 3 women alternating in a row, only the MWMWMWM pattern fits (the larger group must start and end). One pattern: 1 × 4! × 3! = **144**.

**Trap to watch.** Students who count only one starting pattern get exactly half the right answer for equal groups. Always ask: can the other group start instead?

### Compound restrictions

When a problem requires one pair to be adjacent AND another pair to not be adjacent, break it into two stages: count the required-adjacent case first, then subtract the sub-case where both constraints are satisfied simultaneously.

**Worked example.** Six people in a row: A and B must be adjacent; C and D must not be adjacent.

- (A and B together): 5! × 2 = 240
- (A and B together AND C and D together): 4! × 2 × 2 = 96
- Net (A and B together, C and D not together): 240 − 96 = **144**

**Trap to watch.** The most common error is getting the "required" constraint right (240) but forgetting to subtract the sub-case where both pairs are together. One subtraction — but students skip it under time pressure.

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

### Circular + alternating

When the problem requires both a circular arrangement and an alternating pattern, fix one person to eliminate rotational duplicates, then count the alternating arrangement of the rest.

**Worked example.** 3 men and 3 women at a round table, alternating genders.

Fix one man in place. Arrange the 2 remaining men in the 2 remaining M-gaps: 2! = 2 ways. Place 3 women in the 3 W-gaps: 3! = 6 ways.

Total: 2 × 6 = **12**.

There is no factor-of-2 for starting patterns here — rotational equivalence collapses the two linear patterns (MWMWMW and WMWMWM) into each other once one person is fixed.

**Bracelets and necklaces** (rare on GMAT): circular AND flippable, meaning mirror images are identical. Divide by 2: (n − 1)! / 2. If you see this, it is a 745+ question — note the extra division and move on.

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

> **Self-explanation prompt.** Why does swapping two identical letters NOT produce a new arrangement? Because the result looks exactly the same — there is no visible difference between the two F positions in COFFEE. The denominator in the multiset formula doesn't remove anything; it cancels the overcounting that straight factorial commits.

> **Recall check.** Write the multiset formula from memory, then apply it to BANANA (6 letters: 1 B, 3 A's, 2 N's). The answer is 6! / (1! × 3! × 2!) = 720 / 12 = **60**. If you got it right, move to the check question. If not, re-read the formula once and recompute from scratch without looking.

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

## @probability-basics

Probability on the GMAT reduces to counting: **P(event) = favorable outcomes / total outcomes**. Both the numerator and denominator are counting problems you already know how to solve.

### The foundational setup

**Favorable outcomes**: arrangements or selections that satisfy the event condition.

**Total outcomes**: all possible arrangements or selections, with no constraint.

**Worked example.** A bag has 4 black and 6 non-black socks. Two socks are drawn. What is the probability both are black?

- Total: C(10, 2) = 45 ways to draw any 2 socks
- Favorable: C(4, 2) = 6 ways to draw 2 black socks
- P(both black) = 6/45 = **2/15**

### The complement rule — for "at least one"

**P(at least 1 of type A) = 1 − P(none of type A)**

This is almost always faster than computing "exactly 1, exactly 2, exactly 3 ..." and adding.

**Worked example.** 3 socks drawn from 10 (4 black, 6 others). P(at least 1 black)?

- P(no black) = C(6, 3) / C(10, 3) = 20 / 120 = 1/6
- P(at least 1 black) = 1 − 1/6 = **5/6**

Counting "exactly 1 black + exactly 2 black + exactly 3 black" directly gives the same answer but takes three separate calculations. The complement is one.

### With replacement vs without replacement

**With replacement**: after each draw, put the item back. The draws are *independent* — the probability resets each time.

    P(both red) = P(red on draw 1) × P(red on draw 2) = (6/10) × (6/10)

**Without replacement**: the item stays out. Each draw changes the denominator (and possibly the numerator).

    P(both red) = P(red on draw 1) × P(red on draw 2 | red on draw 1) = (6/10) × (5/9)

**Trap to watch.** The problem will say "with replacement" or "without replacement" — read it carefully. With replacement gives a larger probability for "same color twice" because the favorable items reset. Without replacement depletes the pool.

### Binomial probability — exactly k successes in n trials

When an event has probability p on each independent trial and you want exactly k successes out of n trials:

**P(exactly k) = C(n, k) × p^k × (1 − p)^(n − k)**

C(n, k) counts the arrangements of k successes in n positions; p^k gives the probability of k successes; (1 − p)^(n − k) gives the probability of the remaining failures.

**Worked example.** A fair coin is flipped 5 times. P(exactly 3 heads)?

    C(5, 3) × (1/2)³ × (1/2)² = 10 × (1/32) = 10/32 = **5/16**

**Trap to watch.** "At least 3 heads" and "exactly 3 heads" are different problems. "At least 3" = P(3) + P(4) + P(5), or use the complement: 1 − P(0) − P(1) − P(2). "Exactly 3" uses the binomial formula once.

> **Self-explanation prompt.** Why does C(n, k) appear in the binomial formula? Because the k successes can occur in any of C(n, k) orderings across the n trials — and the probability is the same for each ordering. If you can explain that, the formula stops being something to memorize and starts being something to re-derive in 5 seconds.

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
| "Round table, alternating genders" | Circular + alternating | Fix 1, arrange rest alternately |
| "Letters of [repeated word]" | Multiset | n! / (r₁! × r₂! × …) |
| "Round-robin: every pair plays once" | Combination | C(n, 2) |
| "Probability, drawn at random" | Combinations as ratio | C(favorable) / C(total) |

**What to do next.**

1. Work through the problem sets below — start at Easy regardless of your target score. Combinatorics is a topic where 5 slow problems done with deliberate pattern-matching beats 20 rushed ones.
2. For every question you miss, note *which decision* you got wrong: did you misclassify permutation vs. combination, or forget the complement, or miscount the valid patterns? Tag it in the error log — one tag gives you more information than re-reading the entire chapter.
3. Once you've completed the chapter problem sets, combinatorics questions will appear in the spaced retrieval queue. That's where the pattern recognition locks in.

When you finish the end-of-chapter sets below, keep this table open. By the time you've done 15–20 combinatorics questions with it at your elbow, you won't need it anymore.

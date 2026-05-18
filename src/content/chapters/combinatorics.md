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

Enumeration means **writing out every possibility and counting them**. It sounds too primitive for the GMAT, but it is the foundation every formula is built on — and for small sets (3 or 4 objects) it is often the fastest approach on test day.

**Mental model.** Every counting problem reduces to two questions: does order matter, and are repeats allowed? Permutations, combinations, multiset arrangements — every formula is a consequence of those two answers. If you reach for a formula before classifying the problem, you will reach for the wrong one.

**Worked example.** Three marbles — Blue, Gray, Red — line up on a shelf. How many orders are possible?

List them:

    BGR, BRG, GBR, GRB, RBG, RGB

Six orders. No formula required — just careful enumeration.

**Why enumeration matters.** Every formula in this chapter is a *shortcut* for enumeration. If you understand why listing gives 6 for three distinct objects, you will instantly see why the formula says **3!** — and you will not have to memorize which formula applies when.

**The rule enumeration teaches.** For n distinct objects in a row:

- n choices for the first position
- n − 1 remaining for the second
- n − 2 for the third
- ...down to 1 for the last

Multiply all of them: n × (n − 1) × (n − 2) × ... × 1 = **n!** (read "n factorial").

*Memorize these:* 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040. They appear constantly. If you recognize 120 and 24 on sight, you shave ten seconds off every permutation problem.

> **Self-explanation prompt.** Before the check question, explain to yourself in one sentence: *why* does each additional object multiply the total by exactly one more than the previous multiplier? If you can articulate it, you have internalized the idea — not just the result.

## @permutations

A **permutation** is an arrangement where **order matters**. "Who got first, second, and third place" is a permutation. "Who is on the team" is not.

**Worked example.** From 7 candidates, a president and a vice-president are chosen. How many outcomes?

- 7 choices for president
- 6 remaining choices for VP
- 7 × 6 = **42**

That is a permutation of 2 from 7, written **P(7, 2)**. The general formula:

**P(n, k) = n! / (n − k)!**

Sanity-check: P(7, 2) = 7! / 5! = (7 × 6 × 5!) / 5! = 7 × 6 = 42. ✓

**Why the formula works.** n! arranges all n objects. But we only want k of them. The (n − k)! in the denominator cancels the "tail" arrangements of the objects we did not pick — we do not care how the leftover 5 candidates order themselves.

**The permutation test.** Ask: *if I swap two specific people, does that produce a different outcome?* If yes (Ana-president-Ben-VP vs Ben-president-Ana-VP), it is a permutation. If no (both are just "on the committee"), it is a combination.

**Trap to watch.** The GMAT loves to write a problem that sounds like a permutation but is actually a combination. "A committee of 3 is chosen from 10" is C(10, 3). "A president, VP, and treasurer are chosen from 10" is P(10, 3) = 720 — six times larger. Distinct named roles = permutation every time.

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

> **Recall check.** Without peeking: state the formulas for P(n, k) and C(n, k). Then state the symmetry identity C(n, k) = C(n, ?). Now compute C(10, 7) in your head. If you computed 10!/(7!3!) the long way, you missed the shortcut — C(10, 7) = C(10, 3) = 120 with far less arithmetic. Retrieving both the formula *and* the symmetry in the same breath is what wires them together in long-term memory.

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
| "How many orders of n distinct items" | Arrangement | n! |
| "k from n, order matters" | Permutation | P(n, k) = n!/(n−k)! |
| "Committee / team / group of k from n" | Combination | C(n, k) = n!/(k!(n−k)!) |
| "Exactly X of type A and Y of type B" | Product of C's | C(nA, X) × C(nB, Y) |
| "At least 1 of type A" — counting | Complement | Total − none of A |
| "Must sit together / adjacent" | Glue trick | Arrange (n−1) items × k! internal |
| "Must not sit together / not adjacent" | Complement | Total − adjacent |
| "Men and women must alternate, row" | Alternating | 2 × (A-slots)! × (B-slots)! |
| "Round table of n distinct" | Circular | (n − 1)! |
| "Round table, one pair adjacent" | Circular + glue | (n − 2)! × 2 |
| "Letters of [word with repeats]" | Multiset | n! / (r₁! × r₂! × ...) |
| "Distribute n identical among k distinct" | Stars-and-bars | C(n+k−1, k−1) |
| "Distribute n identical, at least 1 each" | Stars-and-bars (shifted) | C(n−1, k−1) |
| "Round-robin: every pair plays once" | Combination | C(n, 2) |
| "P(event) from a pool" | Counting ratio | favorable C / total C |
| "P(at least 1 of type A)" | Complement | 1 − P(none) |
| "P(exactly k successes in n trials)" | Binomial | C(n, k) × p^k × (1−p)^(n−k) |

**Time target.** None of these questions should take more than 90 seconds once the pattern is identified. If you are at 60 seconds and still setting up, you have misidentified the pattern — step back, re-read the question, and run the four decisions again.

When you work through the problem sets below, keep this table open. After 20–25 combinatorics questions with it in front of you, the patterns become automatic. That is the goal: pattern recognition so fast that your two minutes is almost entirely spent on careful arithmetic, not on figuring out which formula to use.

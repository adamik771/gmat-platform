---
slug: statistics-probability
title: Statistics and Probability
section: Quant
estimated_minutes: 55
prerequisites: []
summary: |
  Statistics and probability on the GMAT is two tight skill sets welded together: reading sets (mean, median, mode, standard deviation) and counting outcomes (basic probability, combinations, complement). The topic rewards fluency with one identity — **sum = mean × count** — and two techniques — **complement counting** and **product of independent events**. Master those three moves and you'll solve 90% of what the test throws at you.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* a question before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - statistics-probability-q1
      - statistics-probability-q2

  - id: mean-and-sum
    type: reading
    title: "Mean and sum — the one identity that unlocks half the chapter"
    check_question_ids:
      - statistics-probability-q9
      - statistics-probability-q14

  - id: median-mode-ordered-sets
    type: reading
    title: "Median, mode, and the rules of ordered sets"
    check_question_ids:
      - statistics-probability-q3
      - statistics-probability-q12

  - id: standard-deviation
    type: reading
    title: "Standard deviation — spread, shifts, and scaling"
    check_question_ids:
      - statistics-probability-q6
      - statistics-probability-q16

  - id: basic-probability
    type: reading
    title: "Basic probability — favorable over total, and the complement"
    check_question_ids:
      - statistics-probability-q10
      - statistics-probability-q8

  - id: dependent-events
    type: reading
    title: "Dependent events — with and without replacement"
    check_question_ids:
      - statistics-probability-q15
      - statistics-probability-q5

  - id: counting-and-combinations
    type: reading
    title: "Counting and combinations — when to multiply, when to choose"
    check_question_ids:
      - statistics-probability-q11
      - statistics-probability-q13

  - id: summary
    type: summary
    title: "The four-move decision tree"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - statistics-probability-q1
      - statistics-probability-q2
      - statistics-probability-q3
      - statistics-probability-q9
      - statistics-probability-q10
      - statistics-probability-q11
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - statistics-probability-q4
      - statistics-probability-q5
      - statistics-probability-q12
      - statistics-probability-q13
      - statistics-probability-q14
      - statistics-probability-q15
      - statistics-probability-q16
      - statistics-probability-q17
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - statistics-probability-q6
      - statistics-probability-q7
      - statistics-probability-q8
      - statistics-probability-q18
      - statistics-probability-q19
      - statistics-probability-q20
---

## @mean-and-sum

The arithmetic mean is defined as sum divided by count. That definition rearranges to the single most useful identity in GMAT statistics:

**sum = mean × count**

Every mean problem on the GMAT is a disguised sum problem. The moment you see "average," convert to a sum and work from there.

**Example.** Five numbers have a mean of 18. One is removed and the remaining four have a mean of 15. What was removed?

Stop thinking about averages. Think about sums.

- Original sum = 18 × 5 = 90
- New sum = 15 × 4 = 60
- Removed = 90 − 60 = **30**

No algebra, no variables, no system of equations. Two multiplications and a subtraction.

**The "missing element" template.** Set {4, 7, 9, 12, x} has mean 9. Find x.

- Required sum: 9 × 5 = 45
- Known sum: 4 + 7 + 9 + 12 = 32
- x = 45 − 32 = **13**

Again, just sum arithmetic.

**The "added element" template.** Ten numbers mean 24. An eleventh is added; the new mean is 25. The eleventh?

- New sum = 25 × 11 = 275
- Old sum = 24 × 10 = 240
- Added = 275 − 240 = **35**

**Shortcut for added-element problems.** When adding one value shifts the mean by `d`, the new value equals `(new mean) + (old count) × d`. In the example above: 25 + 10 × 1 = 35. Intuition: the new value has to cover *its own* spot at the new mean PLUS pull every other value up by d. If d is positive, the new value is above the mean by exactly n × d. If d is negative, the new value is below the mean. Useful for skipping the sum arithmetic on the test.

**The mean is the balancing point.** If you picture the set on a number line with each point as a weight, the mean is the fulcrum. Elements above pull the fulcrum right; elements below pull it left. Adding an element above the current mean drags the mean up; adding one below drags it down.

**Evenly spaced sets have mean = median = middle term.** For an arithmetic sequence (consecutive integers, consecutive multiples, any constant-step sequence), mean = median = (first + last)/2. This is a huge shortcut — instead of summing 30 consecutive integers, just compute (first + last)/2 and multiply by count.

> **Self-explanation prompt.** Why does "sum = mean × count" handle so many problems? If you can say "because every mean statement is implicitly a statement about total — and total adds cleanly across subsets," you've internalized why conversion to sum is the move.

## @median-mode-ordered-sets

**Median** is the middle value of an ordered set. Mode is the most frequent value. For small sets the GMAT cares mostly about median, with occasional mode.

**The median recipe for a set with n elements:**

- **Odd n:** median = element at position (n+1)/2.
- **Even n:** median = average of the two middle elements, at positions n/2 and n/2 + 1.

**Example.** Median of {14, 7, 21, 3, 10, 7, 18}?

First, **sort**. Students who skip the sort pick answer traps.

Sorted: {3, 7, 7, 10, 14, 18, 21}. n = 7, so median is position 4 = **10**. (Answer 7 is the *mode*, a different statistic.)

**Median is resistant to outliers.** If the 21 in the set above were replaced by 2100, the median would still be 10. Means shift with outliers; medians don't. The GMAT tests this distinction on medium-difficulty data-sufficiency questions.

**The "maximize the smallest" template.** A hard-but-common template: given a constrained set, find the greatest possible value of one element.

**Example.** Five distinct positive integers have mean 20 and median 18. Largest is 40. What's the greatest possible value of the smallest?

Write them in order: **a < b < 18 < d < 40**. Sum must equal 20 × 5 = 100, so a + b + d = 100 − 18 − 40 = 42.

To maximize `a`, minimize the other two (b and d), subject to ordering constraints.

- Smallest valid d is 19 (smallest integer greater than 18).
- Then a + b = 42 − 19 = 23. With b < 18 and b > a, maximize a by taking b as large as possible while still less than 18 and greater than a.
- Try a = 10, b = 13: works (a < b < 18). Try a = 11, b = 12: works. Try a = 12, b = 11: fails (a < b required).
- Greatest a = **11**.

The pattern: to maximize one element, minimize all others subject to constraints. Always write the elements in order first to see the constraints clearly.

**The "mean = median" trap.** Mean equals median in any symmetric set — evenly spaced, or mirror-paired around a center. On data sufficiency, statement "the set is arithmetic" is sufficient to conclude mean = median because arithmetic sequences are always symmetric.

**Median under element swaps.** If you replace the largest element with an even larger one, the median doesn't change (still the same middle element). Replace an element *below* the median with something even smaller: median still doesn't change. Only changes to elements near the middle shift the median. Tested frequently on DS.

> **Trap to watch.** "What's the median of {2, 4, 5, 9, 12, 15}?" Even n = 6, so median is (5 + 9)/2 = 7, not 5 and not 9. Don't pick either of the two center values as "the median" — you must average them.

## @standard-deviation

Standard deviation measures **how spread out the values are around the mean**. The GMAT almost never asks you to *compute* a standard deviation — it asks whether set A has a larger or smaller SD than set B, and how shifts/scalings affect SD. Two rules cover 95% of SD questions:

**Rule 1: Adding a constant to every element doesn't change SD.**

If Set Y = Set X + 5 (i.e., every element of X has 5 added to it), the spread is identical. The whole set slides right by 5 on the number line, but the distances between points stay the same.

    X = {8, 10, 12, 14, 16} → mean 12, spread (−4, −2, 0, 2, 4)
    Y = {13, 15, 17, 19, 21} → mean 17, spread (−4, −2, 0, 2, 4)

Same spread → same SD.

**Rule 2: Multiplying every element by a constant multiplies SD by |that constant|.**

If Set Y = 3 × Set X, the SD of Y is 3 times the SD of X. Scaling stretches or compresses the spread.

**Rule 3: Tighter sets have smaller SD.**

If Set A has values spanning 40 units and Set B has values spanning 20 units (around the same mean), SD of A > SD of B. No computation needed — just compare the typical deviations from the mean.

**Example.** Set A = {10, 20, 30, 40, 50}, Set B = {20, 25, 30, 35, 40}. Same mean (30). Deviations:

- A: (−20, −10, 0, 10, 20) — big deviations
- B: (−10, −5, 0, 5, 10) — half as big

A has larger SD.

**The GMAT hates the formula.** You won't compute Σ(xᵢ − μ)² / n under time pressure. Instead, eyeball the spread.

**When two sets have the same spread pattern but one is shifted — SD is equal.** Answer C is the standard trap on questions that invite the student to think "bigger mean means bigger SD." It doesn't. Shifts don't touch spread.

**Integer-count / range mixups.** Range is max − min. SD is the average deviation from the mean. A set can have large range and small SD (if one outlier is far but everyone else is packed near the mean), or moderate range and moderate SD. Don't conflate them.

> **Self-explanation prompt.** Why does adding a constant leave SD unchanged? If you can say "because SD measures distances between points, not the points' location on the number line," you've internalized the rule and won't get fooled by a shift question.

> **Recall check.** Cover the section above. State the three SD rules from memory. Now predict: if every element of a set is multiplied by 3 and then has 7 added, what happens to the SD? (Answer: SD is multiplied by 3; the +7 shift does nothing.) If you couldn't predict that, re-read the rules and re-test in 10 minutes — spaced retrieval is what builds long-term fluency, not re-reading.

## @basic-probability

Probability of an event = **favorable outcomes ÷ total outcomes**, when every outcome is equally likely. Five formulas cover the entire topic.

**The core ratio.**

A jar has 4 red, 3 blue, 5 green balls. P(green) = 5/12. P(not green) = 7/12.

**The complement rule.**

P(not A) = 1 − P(A). Always available. When "at least one" or "not" is involved, always consider the complement first.

**Example.** A jar has 6 red, 4 blue, 2 yellow. P(red OR yellow)?

Straight: (6 + 2)/12 = 2/3. Or: complement = P(blue) = 4/12 = 1/3, so P(red OR yellow) = 1 − 1/3 = 2/3. Same answer, two routes.

**Union of mutually exclusive events.**

P(A or B) = P(A) + P(B) — **only when A and B cannot both happen** (e.g., drawing one ball, which has one color).

**Union of non-mutually-exclusive events.**

P(A or B) = P(A) + P(B) − P(A and B). Subtract the overlap to avoid double-counting. Shows up on Venn-style problems.

**Independent events — multiply.**

If two events are independent (one doesn't affect the other), P(A and B) = P(A) × P(B).

Flipping a fair coin twice, P(two heads) = 1/2 × 1/2 = 1/4. Rolling two dice, P(sum = 8)? Count favorable outcomes directly: (2,6), (3,5), (4,4), (5,3), (6,2) = 5 outcomes out of 36. **5/36**.

**The "at least one" trick — complement every time.**

"Probability of *at least one* X" problems are almost always solved by 1 − P(no X).

**Example.** Box has 5 red chips and 3 blue chips. Draw 2 without replacement. P(at least one red)?

- Direct: P(1 red) + P(2 red) — tedious.
- Complement: 1 − P(no red) = 1 − P(both blue) = 1 − (3/8 × 2/7) = 1 − 3/28 = **25/28**.

The complement path is 3× faster on this class of problem. When you see "at least one," your reflex should be "complement."

**Binomial formula for fair-coin / equal-probability trials.**

P(exactly k successes in n independent trials, each success probability p):

    C(n, k) × p^k × (1−p)^(n−k)

**Example.** Flip a fair coin 4 times. P(exactly 3 heads)?

    C(4, 3) × (1/2)³ × (1/2)¹ = 4 × 1/8 × 1/2 = 4/16 = **1/4**

Alternative framing: there are C(4,3) = 4 favorable sequences out of 2⁴ = 16 total, so 4/16 = 1/4.

> **Trap to watch.** Don't mix independent and dependent events. "Pull two chips *without replacement*" makes the second draw's probability depend on the first. "Flip two coins" (or "with replacement") makes the events independent. The multiplication still works in both cases, but the probabilities are different.

## @dependent-events

When one event affects the probabilities of the next (drawing without replacement, sequential selection), the probability of the full sequence is the **product of conditional probabilities**.

P(A then B) = P(A) × P(B | A)

**Example.** Drawer has 7 black and 5 white socks. Draw 2 without replacement. P(both black)?

- P(first black) = 7/12
- After removing one black, 6 black of 11 remain, so P(second black | first black) = 6/11
- P(both) = 7/12 × 6/11 = 42/132 = **7/22**

Trap: (7/12)² = 49/144 is the "with replacement" answer, *wrong* for without replacement. Students who forget the pool shrinks pick that.

**The combinatorial shortcut for "both / all of same type."**

P(k specific items in a row without replacement) = C(favorable, k) / C(total, k).

Same example: P(2 black from 7/5 pool) = C(7,2)/C(12,2) = 21/66 = 7/22. ✓

Use whichever form is faster for the numbers in the problem.

**"Exactly one of each" problems.**

P(1 red then 1 blue) from 4 red, 6 blue (without replacement):

- Order 1 (red first): 4/10 × 6/9 = 24/90
- Order 2 (blue first): 6/10 × 4/9 = 24/90
- Either order: 24/90 + 24/90 = 48/90 = 8/15

Or use combinations: C(4,1) × C(6,1) / C(10,2) = 24/45 = **8/15**. ✓

**Sequential independence check.** Before multiplying P(A) × P(B), ask: "does the first event change the pool for the second?" Flipping coins or drawing *with* replacement → independent, multiply raw probabilities. Drawing without replacement → dependent, adjust after each step.

> **Trap to watch.** "Two dice rolled, probability both show 6" is independent (1/6 × 1/6 = 1/36). "Two cards drawn from a deck, both aces" is dependent (4/52 × 3/51). Conflating the two is the #1 error on probability questions.

## @counting-and-combinations

Many probability problems — and most hard ones — require counting how many ways something can happen. Three tools:

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

## @summary

Every GMAT statistics/probability question reduces to one of four moves. Identify which move first, then the calculation is mechanical.

**Move 1: Convert mean to sum.** See "average"? Compute sum = mean × count. Any missing-element, added-element, removed-element problem solves in three lines of arithmetic after this conversion.

**Move 2: Sort before computing median / reasoning about order.** Never answer a median question from the set as given — sort first. Position formula for medians: (n+1)/2 for odd n, average of the two middle for even n.

**Move 3: Complement the "at least one" question.** "At least one" problems almost always solve faster via 1 − P(none). Reflex conversion: if the question says "at least," start with complement.

**Move 4: Pick combinations or permutations by asking "does order matter?"** Roles named or slots in sequence → permutation. Unordered selection → combination. If the problem mixes both (e.g., "exactly 2 of type A and 1 of type B"), it's C(na, 2) × C(nb, 1).

**Sanity checks you can run on any probability answer.**

- Is your answer between 0 and 1? If not, arithmetic error.
- Does P(A) + P(not A) = 1? Plug in and verify.
- Does your answer match the order of magnitude the problem suggests? A "rare event" coming out with probability 0.5 is a red flag.

**Standard-deviation cheat sheet.**

- Shift by constant: SD unchanged.
- Scale by constant k: SD multiplied by |k|.
- Tighter spread around same mean → smaller SD.
- Same mean doesn't imply same SD.

**Common patterns to pattern-match on sight:**

| Problem says | You're doing | Formula |
|---|---|---|
| "Average of n numbers is…" | Sum = mean × count | m × n |
| "What's the median…" | Sort, find middle | (n+1)/2 position |
| "Set Y = X + constant" | SD unchanged | — |
| "At least one" | Complement | 1 − P(none) |
| "Committee of k from n" | Combination | C(n, k) |
| "Order, rank, arrangement" | Permutation | P(n, k) = n!/(n−k)! |
| "Exactly X of type A, Y of type B" | Product of C's | C(nA, X) × C(nB, Y) |
| "Without replacement" | Dependent events | P(A) × P(B \| A) |

**Time-management note.** Easy statistics questions (basic mean, basic probability) should take 45 seconds or less. Medium SD and combination questions, 90 seconds. Hard 3-variable Venn or compound probability can take up to 2 minutes. If you're past 2:30 on any stats question, flag and move on.

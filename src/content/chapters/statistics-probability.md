---
slug: statistics-probability
title: Statistics and Probability
section: Quant
estimated_minutes: 65
prerequisites: []
summary: |
  Statistics and probability on the GMAT is two skill sets welded together: reading sets (mean, median, range, standard deviation) and counting outcomes (basic probability, overlapping groups, combinations, complement). Five moves — **sum conversion, sort-and-find-median, inclusion-exclusion for overlapping groups, complement counting**, and **product of probabilities** — solve 90% of what the test throws at you. The remaining 10% layers expected value and restricted arrangements on top of the same foundation.
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
    intro: |
      Every statistics and probability question on the GMAT reduces to a handful of moves. The most powerful one is the conversion from mean to sum. Once you have it, a problem that looks like it requires algebra collapses into a two-line arithmetic problem.
    check_question_ids:
      - statistics-probability-q9
      - statistics-probability-q14

  - id: median-mode-ordered-sets
    type: reading
    title: "Median, mode, and the rules of ordered sets"
    intro: |
      Median is the GMAT's go-to Data Sufficiency trap: it resists outliers in ways that mean does not, and questions exploit that contrast directly. The sort-first habit and the "maximize the smallest" template cover the full range of median questions from easy to 700+.
    check_question_ids:
      - statistics-probability-q3
      - statistics-probability-q12

  - id: standard-deviation
    type: reading
    title: "Standard deviation — spread, shifts, and scaling"
    intro: |
      The GMAT never asks you to compute standard deviation. It asks whether one set has larger or smaller SD than another, or what happens to SD after a shift or scaling. Two rules answer 95% of those questions. The remaining 5% reduce to eyeballing spread. You need no formula.
    check_question_ids:
      - statistics-probability-q6
      - statistics-probability-q16

  - id: basic-probability
    type: reading
    title: "Basic probability — favorable over total, and the complement"
    intro: |
      Probability questions look diverse but use five formulas. The single most important habit to build here is recognizing when to use the complement: "at least one" questions are almost always faster to solve via 1 − P(none) than by direct counting, and that pattern appears on every hard probability problem.
    check_question_ids:
      - statistics-probability-q10
      - statistics-probability-q8

  - id: dependent-events
    type: reading
    title: "Dependent events — with and without replacement"
    intro: |
      One question separates every probability scenario: does the first event change what's available for the second? If yes, the events are dependent and you must adjust the pool. If no, they're independent and you multiply raw probabilities. Getting that question right on first contact is the entire skill.
    check_question_ids:
      - statistics-probability-q15
      - statistics-probability-q5

  - id: counting-and-combinations
    type: reading
    title: "Counting and combinations — when to multiply, when to choose"
    intro: |
      Counting problems sort into three tools. Picking the wrong one produces the trap answer — usually the right objects combined in the wrong way. Ask "does order matter?" first and the formula follows automatically. Everything else is arithmetic.
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
      - statistics-probability-q29
      - statistics-probability-q30
      - statistics-probability-q31
      - statistics-probability-q32
      - statistics-probability-q33
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
      - statistics-probability-q34
      - statistics-probability-q35
      - statistics-probability-q36
      - statistics-probability-q37
      - statistics-probability-q38
      - statistics-probability-q39
      - statistics-probability-q40
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
      - statistics-probability-q41
      - statistics-probability-q42
      - statistics-probability-q43
      - statistics-probability-q44
      - statistics-probability-q45
---

## @mean-and-sum

**Mental model.** Statistics measures the *shape* of a set — mean, median, range, standard deviation. Probability measures the *likelihood* of an event. Both are summaries of a situation. The GMAT's questions are almost always "given this summary, what else must be true?" or "given this scenario, what is the summary?" The arithmetic is rarely the hard part. Mis-classifying which summary applies — mean vs. median, independent vs. dependent — is where most points are lost.

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

**Micro-drill.** Solve mentally — under 30 seconds each.

1. Nine numbers have a mean of 14. Their sum is ___.
2. Set {5, 8, 11, x} has mean 9. Find x.
3. The mean of eight numbers is 30. A ninth is added; the new mean is 32. What is the ninth number?

Answers: (1) 126, (2) 12, (3) 48. For (3): new sum = 32 × 9 = 288; old sum = 30 × 8 = 240; ninth = 288 − 240 = 48. Shortcut check: 32 + 8 × 2 = 48. ✓ If (3) took more than 15 seconds, you're computing instead of identifying — the "added element shortcut" section above gives the one-step path.

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

**Trap to watch.** "What's the median of {2, 4, 5, 9, 12, 15}?" Even n = 6, so median is (5 + 9)/2 = 7, not 5 and not 9. Don't pick either of the two center values as "the median" — you must average them.

**Range — the spread from extremes.**

Range = maximum − minimum. Unlike standard deviation, range uses only the two outermost values and ignores everything in between.

**Worked example.** {3, 7, 11, 18, 25}: range = 25 − 3 = **22**. No formula needed — scan for max and min.

**How GMAT tests range on Data Sufficiency.**

Range is determined when you know both the exact maximum and the exact minimum — and not before.

**Worked example.** "What is the range of set S?" Statement (1): the smallest element is 4. Statement (2): the largest element is 22. Each alone is insufficient (you need both endpoints). Together: range = 22 − 4 = 18. Answer: **C**.

The lesson generalizes: knowing the mean, the count, or the median gives you nothing about range. You need the extremes directly.

**Outlier sensitivity.** Replace 25 with 250 in the set above: range jumps from 22 to 247. The median stays the same (11). The SD barely changes. Range reacts to outliers more violently than any other summary statistic. GMAT exploits this on medium DS questions where one statement introduces a large outlier — it shifts the range but not the median, making the two statements give different information about spread.

**Range ≠ SD.** Both measure spread, but they ask different questions. {1, 5, 5, 5, 9} and {1, 3, 5, 7, 9} both have range 8 — but the first has much smaller SD because all but the two extremes sit at the mean. Two sets can share a range and have very different SDs; never infer SD from range or vice versa.

**Pro tip.** On "maximize/minimize" range problems: to minimize range, push the extremes as close together as possible while satisfying other constraints (usually a sum or mean). To maximize range, push them as far apart as possible. Always write elements in order first, label them a ≤ b ≤ … ≤ e, and apply the constraints algebraically.

**Micro-drill.** 30 seconds total.

1. {4, 8, 2, 15, 11, 6}: range = ___
2. A set has range 24. The minimum is −5. The maximum is ___.
3. True or false: "Two sets with equal range must have equal standard deviation."

Answers: (1) **13** (max 15, min 2). (2) **19** (−5 + 24 = 19). (3) **False** — same range, entirely different spreads are possible: {1, 5, 5, 5, 9} vs. {1, 3, 5, 7, 9}.

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

**Micro-drill.** Answer without computing SD.

1. Set P = {3, 6, 9, 12, 15}. Set Q = {13, 16, 19, 22, 25}. Which has larger SD — or are they equal?
2. The SD of {4, 8, 12, 16} is 4.47. What is the SD of {8, 16, 24, 32}?
3. Set R = {10, 10, 10, 10}. What is its SD?

Answers: (1) Equal — Q is P shifted by +10, same spread. (2) 8.94 — every element doubled, so SD doubles: 4.47 × 2. (3) 0 — every value equals the mean; there is no spread. If (1) surprised you, re-read Rule 1. If (2) surprised you, re-read Rule 2.

> **Self-explanation prompt.** Why does adding a constant leave SD unchanged? If you can say "because SD measures distances between points, not the points' location on the number line — shifting the whole set moves every point the same amount, so the gaps between them don't change," you've internalized the rule and won't be fooled by a shift question.

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

**Trap to watch.** Don't mix independent and dependent events. "Pull two chips *without replacement*" makes the second draw's probability depend on the first. "Flip two coins" (or "with replacement") makes the events independent. The multiplication still works in both cases, but the probabilities are different.

> **Self-explanation prompt.** Why is the complement almost always faster for "at least one" problems? If you can say "because 'at least one X' has many favorable outcomes to enumerate directly, but 'no X at all' is typically a single chain of unfavorable draws — the complement has one case where direct counting has many," you've identified exactly when to flip to complement. Whenever you see the phrase "at least one," your first move should be automatic: 1 − P(none).

**Overlapping groups — the inclusion-exclusion principle.**

When two events can both occur simultaneously, the union formula corrects for double-counting:

**P(A or B) = P(A) + P(B) − P(A and B)**

Without the final subtraction, you count the overlap twice.

**Worked example.** In a class of 100 students: 60 study French, 50 study Spanish, 30 study both. How many study at least one language? How many study neither?

- At least one: 60 + 50 − 30 = **80 students.**
- Neither: 100 − 80 = **20 students.**

**The four-region breakdown.**

| Region | Formula | Count |
|---|---|---|
| Both French and Spanish | Given | 30 |
| Only French | 60 − 30 | 30 |
| Only Spanish | 50 − 30 | 20 |
| Neither | 100 − 80 | 20 |

Cross-check: 30 + 30 + 20 + 20 = 100. ✓ Always verify the four regions sum to the total — it catches arithmetic errors and misreads.

**DS application.** "How many students study exactly one language?" requires |A|, |B|, AND |A∩B|. The formula is exactly-one = (|A| − |A∩B|) + (|B| − |A∩B|) = |A| + |B| − 2|A∩B|. All three quantities are needed; knowing only two leaves the third — and the answer — indeterminate.

**Trap to watch.** Adding group counts without subtracting overlap (60 + 50 = 110) exceeds the total of 100 — a mathematical impossibility. The moment your sum exceeds the total, you've identified the overlap you forgot to subtract.

**Three-group Venn (685+ difficulty).** When three groups overlap, extend the formula:

    |A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|

Set up from the inside out: fill in the triple overlap first, then each pairwise overlap, then each solo region. The GMAT uses this template on hard word problems with groups like "speak English, French, and Spanish."

---

**Expected value — the probability-weighted average.**

Expected value (EV) is the long-run average outcome of a random event. Multiply each outcome by its probability and sum.

**EV = Σ [outcome × P(outcome)]**

**Worked example.** A game: roll one fair die. Landing on 6 pays +$5; any other result costs −$1. What is the expected value per roll?

- Win (1/6): contributes (1/6)(+5) = +5/6.
- Lose (5/6): contributes (5/6)(−1) = −5/6.
- EV = 5/6 − 5/6 = **$0.** A fair game.

Positive EV → you profit in the long run. Negative EV → you lose. EV = 0 → fair game.

**Shortcut: symmetric payoffs.** If a game pays +k with probability p and −k with probability (1−p), then EV = k(2p − 1). EV = 0 when p = 0.5 exactly.

**DS application.** "Is the expected value positive?" requires both the complete list of possible outcomes and their probabilities. Knowing only the outcomes (not probabilities) or only the probabilities (not outcomes) is insufficient.

**Worked example.** Company A issues a bonus: 25% chance of $8,000, 75% chance of $0. Company B guarantees $1,500. Which has higher EV?

- A: (0.25)(8000) + (0.75)(0) = **$2,000**.
- B: **$1,500**.

A has higher expected value, though B has zero variance. The GMAT uses this setup to test whether you can compare EV under different risk profiles.

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

**Trap to watch.** "Two dice rolled, probability both show 6" is independent (1/6 × 1/6 = 1/36). "Two cards drawn from a deck, both aces" is dependent (4/52 × 3/51). Conflating the two is the #1 error on probability questions.

> **Self-explanation prompt.** State the one diagnostic question that separates dependent from independent events: "Does the first event change what's available for the second?" Now apply it to two scenarios: (a) two cards drawn from the same deck without replacement; (b) two dice rolled at the same time. If you can classify both in under five seconds and explain why — (a) dependent because the first card leaves 51 remaining, (b) independent because each die has its own six faces regardless of the other — you're ready for the DS questions that blur this distinction on purpose.

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

## @summary

Every GMAT statistics/probability question reduces to one of five moves. Identify which move first, then the calculation is mechanical.

**Move 1: Convert mean to sum.** See "average"? Compute sum = mean × count. Any missing-element, added-element, removed-element problem solves in three lines of arithmetic after this conversion.

**Move 2: Sort before computing median / reasoning about order.** Never answer a median question from the set as given — sort first. Position formula for medians: (n+1)/2 for odd n, average of the two middle for even n. Range = max − min; it only requires the two extremes.

**Move 3: Apply inclusion-exclusion for overlapping groups.** "How many in group A OR group B?" uses |A| + |B| − |A∩B|. If the question gives you three of the four values (|A|, |B|, |A∩B|, total), solve for the fourth. Build the four-region Venn table and verify it sums to the total.

**Move 4: Complement the "at least one" question.** "At least one" problems almost always solve faster via 1 − P(none). Reflex conversion: if the question says "at least," start with complement.

**Move 5: Pick combinations or permutations by asking "does order matter?"** Roles named or slots in sequence → permutation. Unordered selection → combination. If the problem mixes both (e.g., "exactly 2 of type A and 1 of type B"), it's C(na, 2) × C(nb, 1). For adjacency restrictions: complement (treat adjacent pair as block, subtract from total).

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
| "Range of a set" | Find max and min | max − min |
| "Set Y = X + constant" | SD unchanged | — |
| "How many in neither group" | Inclusion-exclusion | total − (\|A\| + \|B\| − \|A∩B\|) |
| "At least one" | Complement | 1 − P(none) |
| "Committee of k from n" | Combination | C(n, k) |
| "Order, rank, arrangement" | Permutation | P(n, k) = n!/(n−k)! |
| "Exactly X of type A, Y of type B" | Product of C's | C(nA, X) × C(nB, Y) |
| "Without replacement" | Dependent events | P(A) × P(B \| A) |
| "A and B cannot be adjacent" | Complement arrangement | Total − (adjacent block count) |
| "Expected value of game" | Prob-weighted sum | Σ (outcome × P) |

**Time-management note.** Easy statistics questions (basic mean, basic probability) should take 45 seconds or less. Medium SD and combination questions, 90 seconds. Hard 3-variable Venn or compound probability can take up to 2 minutes. If you're past 2:30 on any stats question, flag and move on.

**What to do next.** Open the Easy problem set and target 90%+ before moving to Medium. When you miss a mean or median question, check whether you skipped the "convert to sum" step. When you miss a range question, ask whether you identified both extremes — or tried to infer range from mean or median (impossible). When you miss a probability question, ask whether you confused independent and dependent events, missed a complement for "at least one," or forgot to subtract the overlap on an overlapping-groups problem. When you miss a counting question, ask whether you chose combination when permutation was needed, forgot to split into cases, or needed the complement (adjacent-pair) template.

The five moves — sum conversion, sort-and-find-median, inclusion-exclusion, complement, and the order-matters decision — appear on every GMAT administration. Students who pattern-match them within five seconds of reading the question and execute without friction have a genuine edge. The problem sets are where you build that recognition. Work through all three difficulty tiers before moving to the next chapter.

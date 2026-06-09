---
slug: quant-23-statistics
title: "Statistics: Mean, Median & Standard Deviation"
section: Quant
estimated_minutes: 11
prerequisites:
  - quant-22-work-rate
summary: |
  The mean-sum identity, the rules of ordered sets, and what standard deviation does and doesn't change.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
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
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - statistics-probability-q3
      - statistics-probability-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - statistics-probability-q5
      - statistics-probability-q6
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

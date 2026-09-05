---
slug: quant-23-statistics
title: "Statistics: Mean, Median & Standard Deviation"
section: Quant
estimated_minutes: 90
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
      - statistics-probability-q21
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
  - id: summary
    type: summary
    title: "What to remember"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - statistics-probability-q46
      - statistics-probability-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - statistics-probability-q5
      - statistics-probability-q52
---

## @summary

- Mean is total divided by count, so recover the total first whenever observations are added, removed, or changed.
- Sort the data before finding the median and distinguish spread from center.
- Standard deviation measures dispersion: moving values away from the mean increases it, while shifting every value equally does not.

## @mean-and-sum

**Mental model.** Statistics measures the *shape* of a set — mean, median, range, standard deviation. Probability measures the *likelihood* of an event. Both are summaries of a situation. The GMAT's questions are almost always "given this summary, what else must be true?" or "given this scenario, what is the summary?" The arithmetic is rarely the hard part. Mis-classifying which summary applies — mean vs. median, independent vs. dependent — is where most points are lost. The test writers know this, so they design answer choices to reward the student who runs the *right* procedure and trap the one who runs a plausible-but-wrong one. Your job is to make the right procedure automatic.

The arithmetic mean is defined as sum divided by count. That definition rearranges to the single most useful identity in GMAT statistics:

**sum = mean × count**

Every mean problem on the GMAT is a disguised sum problem. The moment you see "average," convert to a sum and work from there. The reason this matters so much: means do *not* add cleanly. You cannot average two averages and get the right answer (unless the groups are the same size). But sums always add — the total of a combined group is just the sum of the parts. So the instant you translate every "average" into a "total," all the messy combining becomes plain addition and subtraction. This one move converts roughly half of GMAT statistics from "set up an equation" to "do two multiplications in your head."

> **Recall check.** Without looking, write the mean-sum identity in all three of its rearranged forms (sum, mean, and count each isolated). (Answer: sum = mean × count; mean = sum ÷ count; count = sum ÷ mean.)

**Worked example (the core conversion).** Five numbers have a mean of 18. One is removed and the remaining four have a mean of 15. What was removed?

Stop thinking about averages. Think about sums.

- Original sum = 18 × 5 = 90
- New sum = 15 × 4 = 60
- Removed = 90 − 60 = **30**

No algebra, no variables, no system of equations. Two multiplications and a subtraction. Notice that the removed number, 30, is far above the old mean of 18 — that is *why* yanking it out dropped the average from 18 to 15. The size of the drop and the position of the removed element are linked, a fact we will exploit repeatedly.

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

**The mean is the balancing point.** If you picture the set on a number line with each point as a weight, the mean is the fulcrum. Elements above pull the fulcrum right; elements below pull it left. Adding an element above the current mean drags the mean up; adding one below drags it down. This "fulcrum" picture is not just poetry — it lets you predict the *direction* of a change before doing any arithmetic, which is often all a question wants. A sharper version: the total "pull" above the fulcrum exactly balances the total "pull" below it. The deviations sum to zero. If the numbers 5 and 11 sit around a mean of 9, the 5 pulls down by 4 and the 11 pulls up by 2 — and any third element must close that 4-versus-2 gap. Keeping this deviation-balance in mind turns many problems into one-line mental arithmetic.

**Evenly spaced sets have mean = median = middle term.** For an arithmetic sequence (consecutive integers, consecutive multiples, any constant-step sequence), mean = median = (first + last)/2. This is a huge shortcut — instead of summing 30 consecutive integers, just compute (first + last)/2 and multiply by count. The reason is the fulcrum again: in a symmetric, evenly spaced set, every element above the center is mirrored by an equal element below it, so the deviations cancel perfectly and the center *is* the mean.

**Worked example (estimation + the evenly-spaced shortcut).** What is the sum of all the integers from 17 to 56, inclusive?

The brute-force path — adding forty numbers — is a trap that eats two minutes. Use the shortcut.

1. **Count** the terms: in a run of consecutive integers, count = last − first + 1 = 56 − 17 + 1 = 40.
2. **Mean** = (first + last)/2 = (17 + 56)/2 = 73/2 = 36.5.
3. **Sum** = mean × count = 36.5 × 40 = **1,460**.

Notice the count step. The single most common error here is "56 − 17 = 39 terms." Inclusive counting needs the +1. (Quick gut-check: integers 1 to 10 — that's 10 numbers, and 10 − 1 + 1 = 10, not 9.) The same +1 logic, but multiplied, governs spaced sets: the count of multiples of 5 from 30 to 80 inclusive is (80 − 30)/5 + 1 = 11, not 10. Whenever the step is not 1, divide the range by the step *before* adding the +1.

> **Recall check.** For a run of consecutive integers from a to b inclusive, how many terms are there, and what is the mean? (Answer: count = b − a + 1; mean = (a + b)/2.)

**Worked example (weighted average — the trap of averaging averages).** A class has 30 students. The 18 boys scored a mean of 80; the 12 girls scored a mean of 90. What is the class mean?

The tempting wrong move is (80 + 90)/2 = 85. That is only correct when the two groups are equal in size — here they are not, so it is wrong. **Convert each average to a sum**, then combine.

1. Boys' total = 80 × 18 = 1,440.
2. Girls' total = 90 × 12 = 1,080.
3. Combined total = 1,440 + 1,080 = 2,520.
4. Class mean = 2,520 ÷ 30 = **84**.

The answer leans toward 80, not 85, because there are more boys — the larger group pulls the fulcrum toward its own mean. That directional sense ("the bigger group wins") is a free sanity check: any answer above 85 or below 80 is impossible, so you can eliminate before computing. There is also a ratio shortcut worth knowing: the class mean splits the interval between 80 and 90 in the *inverse* ratio of the group sizes. Boys-to-girls is 18:12 = 3:2, so the mean sits 2 parts from 80 and 3 parts from 90 out of 5 parts spanning the 10-point gap — that is 80 + (2/5)(10) = 84. The mean always lands closer to the heavier group, and that inverse-ratio trick lets you place it without computing two products.

**Trap to watch.** *Never average two averages unless the groups are the same size.* The GMAT plants the "just average them" answer as a distractor on virtually every weighted-average question. If the groups differ in size, the true mean always lands *closer to the average of the larger group*. When you see two means and two group sizes, your reflex should be "sums, then divide" — never "add the means and halve." A second, subtler form of this trap hides in *rate* problems: a car going 40 mph out and 60 mph back does not average 50 mph, because it spends more time at the slower speed. Same disease — unequal weights (here, time) behind two averages — same cure: go back to totals (total distance over total time).

**Worked example (backsolving a mean problem).** The mean of five test scores is 86. Tom's scores so far are 78, 91, and 84 on three tests, and he has two tests left. If he scores the same on both remaining tests, what must that score be?

This is solvable directly, but it is a clean place to *name and show backsolving* — testing answer choices against the constraint — because the numbers stay friendly. Suppose the answer choices are (A) 86 (B) 88 (C) 90 (D) 92 (E) 94.

Direct path first, then we'll confirm by backsolving:

1. Required total = 86 × 5 = 430.
2. Known total = 78 + 91 + 84 = 253.
3. Two remaining tests must sum to 430 − 253 = 177, so each = 177 ÷ 2 = **88.5**.

Wait — 88.5 isn't listed, which tells you the trap. Re-read: the problem as posed (with these choices) would force a non-integer, so on the real test that signals either a misread or that the intended answer set differs. This is exactly why **backsolving is valuable as a check**: plug (B) 88 into the constraint — total becomes 253 + 88 + 88 = 429, mean = 429/5 = 85.8, not 86. None of the integer choices hits 86 exactly, confirming the true value is the non-integer 88.5. The lesson: backsolving doesn't just find answers, it *exposes* when a "clean" answer choice is a misread trap. When backsolving every choice misses the target, re-read the stem. As a tactic, backsolving shines when the algebra is awkward but the arithmetic of plugging in is trivial — start with choice (B) or (D), and the direction of the miss tells you which way to move.

**Worked example (hard — the "replace an element" twist).** Set S has 6 numbers with mean 40. One element, currently 25, is replaced by a new value, and the new mean of the set becomes 45. What is the new value?

The set still has 6 elements — replacement, not addition — so the count is unchanged. Work in sums.

1. Old sum = 40 × 6 = 240.
2. New sum = 45 × 6 = 270.
3. The sum rose by 270 − 240 = 30. That entire rise came from swapping one element.
4. New value = old value + rise = 25 + 30 = **55**.

The fast insight: in a *replacement*, the change in total equals (new element − old element). So new element = old element + (change in total) = 25 + 30 = 55. Do not divide the "rise of 30" by anything — only one number moved, so it absorbs the full change. Contrast this with the *mean's* movement: the mean rose by only 30/6 = 5, because the single 30-point change in total is spread across all 6 slots when you average. Confusing "the sum changed by 30" with "the mean changed by 30" is one of the most common replacement-problem errors.

> **Recall check.** In a replacement (swap one element, count unchanged), the change in the *total* equals what — and the change in the *mean* equals what? (Answer: change in total = new element − old element; change in mean = that same difference divided by the count.)

**Worked example (hardest — combining the identity with an inequality).** A company has 10 employees whose salaries average $60,000. The CEO, who earns $150,000, is one of them. What is the average salary of the other 9 employees, and is that average necessarily below $60,000?

1. Total payroll = 60,000 × 10 = 600,000.
2. Remove the CEO: other 9 total = 600,000 − 150,000 = 450,000.
3. Average of the 9 = 450,000 ÷ 9 = **50,000**.

And yes — it *must* be below $60,000, by the fulcrum logic: the CEO sits far above the mean, so removing that high weight lets the fulcrum of the remaining group settle lower. Any time you delete an above-average element, the average of what's left drops; delete a below-average element and it rises. This directional rule lets you answer the "is it higher or lower?" half of many problems without computing the exact number. Watch the edge case the GMAT loves: removing an element exactly *equal* to the mean leaves the average unchanged. So "the new average is lower" is only *guaranteed* when the removed element was strictly above the old mean — if that's left in doubt, the direction isn't actually settled even though it feels decided.

**Worked example (hard — a two-layer weighted average in disguise).** Over a 10-day stretch, a runner averaged 8 miles per day for the first 6 days and 13 miles per day for the last 4 days. Her friend claims she averaged 10.5 miles per day overall. Is the friend right, and what is the true daily average?

The friend split the difference between 8 and 13 — straight to the averaging-averages trap. Convert to totals.

1. First-6-days total = 8 × 6 = 48 miles.
2. Last-4-days total = 13 × 4 = 52 miles.
3. Combined total = 48 + 52 = 100 miles over 10 days.
4. True daily average = 100 ÷ 10 = **10 miles per day**, not 10.5.

The friend is wrong. The honest average leans toward 8 (10 is below the midpoint 10.5) because the 8-mile pace ran on more days — the heavier group pulls the result its way. The inverse-ratio check confirms it: 6:4 days means the mean sits 4 parts above 8 and 6 parts below 13 across the 5-mile gap, i.e. 8 + (4/10)(5) = 10. Same answer, no division needed.

> **Self-explanation prompt.** Why does "sum = mean × count" handle so many problems? If you can say "because every mean statement is implicitly a statement about total — and total adds cleanly across subsets, while averages do not," you've internalized why conversion to sum is the move.

**The memorize-this procedure.** For *any* mean problem, run this sequence:

1. **Translate** every "average" or "mean" in the problem into a sum, using sum = mean × count. Write each sum down explicitly.
2. **Identify the operation** on the set: missing element, added element, removed element, replaced element, or combined groups. Each maps to a sum manipulation (add, subtract, or merge totals).
3. **Combine the sums** with plain addition/subtraction — never average averages.
4. **Convert back** to a mean only at the very end, dividing the final total by the final count.
5. **Sanity-check direction** with the fulcrum: did the mean move the way it should given what you added or removed? An above-mean addition must raise the mean; a below-mean removal must raise it too. For weighted problems, confirm the result landed *inside* the two group means and *closer to the larger group*.

**Common mistakes.**

- **Averaging the averages** when group sizes differ — the single biggest weighted-average error. Always go through sums.
- **Off-by-one in the count**, especially inclusive ranges: integers from a to b number b − a + 1, not b − a. For a step size other than 1, it's (b − a)/step + 1.
- **Forgetting the count changes** (added/removed element) but is *unchanged* in a replacement. Match the count to the actual operation.
- **Dividing a total change by the wrong number.** In a replacement only one element moved, so the change in *sum* equals the change in that one element — don't divide it by n. But the change in the *mean* is that difference divided by n. Keep "sum change" and "mean change" distinct.
- **Reporting a sum when the question wants a mean** (or vice versa). Re-read the final question after computing.
- **Treating a rate or per-day average like a simple value** — speeds and per-unit rates are weighted by time or quantity; reduce to total-over-total.

**Micro-drill.** Solve mentally — under 30 seconds each.

1. Nine numbers have a mean of 14. Their sum is ___.
2. Set {5, 8, 11, x} has mean 9. Find x.
3. The mean of eight numbers is 30. A ninth is added; the new mean is 32. What is the ninth number?
4. A team of 4 averages 12 points; a team of 6 averages 22 points. The combined mean of all 10 is ___.
5. Six numbers average 50. One of them, 35, is replaced by 65. The new mean is ___.
6. How many multiples of 4 are there from 20 to 80, inclusive, and what is their sum?

Answers: (1) 126. (2) 12. (3) 48 — new sum = 32 × 9 = 288; old sum = 30 × 8 = 240; ninth = 48 (shortcut check: 32 + 8 × 2 = 48 ✓). (4) 18 — totals 48 + 132 = 180 over 10 = 18; note it lands closer to 22 because the team of 6 is larger, *not* the naive (12+22)/2 = 17. (5) 55 — sum rises by 65 − 35 = 30 over 6 elements, so the mean rises by 30/6 = 5, from 50 to 55. (6) count = (80 − 20)/4 + 1 = 16; mean = (20 + 80)/2 = 50; sum = 50 × 16 = 800. If (4) tripped you, you averaged the averages — re-read the **Trap to watch.** If (5) took more than 20 seconds, you summed the whole set instead of tracking just the change. If (6) gave 15, you forgot the +1 after dividing by the step.

**Recap.** One identity, *sum = mean × count*, drives this entire section. Convert every average to a total, manipulate totals with plain addition and subtraction, and convert back to a mean only at the end. Watch the count: it changes on add/remove but holds steady on replace — and on replace, the *sum* moves by the full element difference while the *mean* moves by that difference over n. Never average two averages when the groups differ in size — work through sums and let the larger group pull the result toward itself, or use the inverse-ratio placement to find the mean in one line. Use the fulcrum picture to predict the *direction* of any change for free, mind the equal-to-the-mean edge case, and use inclusive counting (b − a + 1, or (b − a)/step + 1) on ranges. Master this and you've unlocked half of GMAT statistics with arithmetic alone.

## @median-mode-ordered-sets

**Median** is the middle value of an ordered set. **Mode** is the most frequent value. For small sets the GMAT cares mostly about median, with occasional mode — and it cares *enormously* about whether you can tell which statistic a question is actually asking for. Mean, median, and mode answer three different questions about the same set, and the test's favorite trap is handing you a value that's correct for the *wrong* statistic. A top scorer reads the question stem twice before computing anything, because the single most common way to lose a median/mode point is to compute the right number for the wrong word.

**Mental model.** Median is positional — it depends only on *order and count*, not on the actual magnitudes of the values away from the center. Mean is a weighted balancing point that every value tugs on. Mode is just a tally of repeats. Keep these three separate in your head and most of this section's traps disappear. A useful image: imagine the sorted values as people standing in a line by height. The median is whoever stands in the middle of the line — the test doesn't care *how* tall the tallest person is, only that they're at the end. The mean is the line's "center of mass," which the tallest person can drag far to one side. The mode is whichever height shows up on the most heads.

**The median recipe for a set with n elements:**

- **Odd n:** median = element at position (n+1)/2 after sorting.
- **Even n:** median = average of the two middle elements, at positions n/2 and n/2 + 1.

**Example.** Median of {14, 7, 21, 3, 10, 7, 18}?

First, **sort**. Students who skip the sort pick answer traps.

Sorted: {3, 7, 7, 10, 14, 18, 21}. n = 7, so median is position (7+1)/2 = 4, which is **10**. (Answer 7 is the *mode*, a different statistic — and it's sitting right there in the answer choices precisely to catch the unsorted reader.)

> **Recall check.** For a set of 12 numbers, the median is the average of which two positions? (Positions 6 and 7 — that's n/2 and n/2 + 1 with n = 12.)

**Median is resistant to outliers.** If the 21 in the set above were replaced by 2100, the median would still be 10. Means shift with outliers; medians don't. This is the single most-tested median property on the GMAT. The reason is positional: moving the largest value to a *still larger* value doesn't change *which* element sits in the middle, so the median can't budge. This resistance is *why* statisticians report median income and median home price — one billionaire doesn't distort the median the way it wrecks the mean. The GMAT loves this exact intuition, often dressed up as "median household X."

**Worked example (easy, builds the reflex).** Set A = {5, 8, 8, 12, 40}. Set B is identical except the 40 becomes 4000. Which statistics change?

- Mean of A = 73/5 = 14.6; mean of B = 4033/5 = 806.6. **Mean changes drastically.**
- Median of both: middle of five sorted values is the 3rd = **8** in each. **Median unchanged.**
- Mode of both = **8** (appears twice). **Mode unchanged.**
- Range explodes from 35 to 3995.

The takeaway you must overlearn: a single far-out value moves mean and range hard, but leaves median and mode flat. The GMAT writes a whole class of questions around exactly this asymmetry.

**The "maximize the smallest" template.** A hard-but-common template: given a constrained set, find the greatest possible value of one element. The governing principle is a seesaw — **to push one element to its maximum, drag every other element to its constrained minimum**, because they all share a fixed total.

**Worked example (medium-hard).** Five distinct positive integers have mean 20 and median 18. The largest is 40. What's the greatest possible value of the smallest?

Write them in order: **a < b < 18 < d < 40** (the middle of five distinct values is the 3rd, so the median *is* the 3rd element, which is 18). Sum must equal 20 × 5 = 100, so a + b + d = 100 − 18 − 40 = 42.

To maximize `a`, minimize the other two (b and d), subject to ordering constraints.

- Smallest valid d is 19 (smallest integer greater than 18, and distinct from it).
- Then a + b = 42 − 19 = 23. With b < 18 and b > a, we want b as large as possible *without forcing a above b*. The trick: split 23 as evenly as you can while keeping a < b.
- Try a = 11, b = 12: sum 23, and 11 < 12 < 18. Works. Try a = 12, b = 11: fails (a < b required). Try a = 12, b = 12: fails (distinct).
- Greatest a = **11**.

The pattern: to maximize one element, minimize all others subject to constraints, then split the leftover as evenly as the inequalities allow. Always write the elements in order *first* so the constraints are visible.

**Worked example (the mirror — minimize the largest, hard).** Five distinct positive integers have mean 20 and median 18. What is the *least* possible value of the largest? This flips the seesaw: to make the maximum as small as possible, push *everyone else* as **high** as their constraints allow, leaving less mass to pile onto the top.

Order them a < b < 18 < d < e, sum = 100, so a + b + d = 82 (since 18 + e accounts for the rest: a + b + 18 + d + e = 100). To minimize e, maximize a, b, and d.

- d must be greater than 18 and less than e, and distinct: the largest "cheap" d short of e is unknown yet, so push it just under e. But a and b sit below 18, so their ceilings are b = 17, a = 16 (distinct, both below 18).
- Then a + b = 33, leaving d + e = 100 − 18 − 33 = 49. With 18 < d < e, split 49 to make e smallest while keeping d < e: d = 24, e = 25. Check ordering: 16 < 17 < 18 < 24 < 25. Sum = 16+17+18+24+25 = 100. ✓
- Could e be 24? Then d + e = 49 needs d = 25 > e — violates d < e. So least e = **25**.

The lesson: maximize and minimize are the *same machine run in reverse*. Maximize a target ⟹ floor everyone else; minimize a target ⟹ ceiling everyone else. Write the order first, both times.

**Trap to watch.** In the median-18 problems, "median 18" with five distinct integers forces the 3rd element to *equal* 18 — but with an *even* count, the median is an *average* and need not be any actual element. If the problem had said "four distinct integers, median 18," then 18 is the average of the 2nd and 3rd, and neither of those has to be 18 (they could be 17 and 19). Confusing "the median equals an element" (odd n) with "the median is an average of two elements" (even n) is a classic mid-difficulty error.

> **Recall check.** Six distinct integers have median 10. Must one of the integers equal 10? (No — even count, so 10 is the *average* of the 3rd and 4th; e.g. 8 and 12 give median 10 with no element equal to 10.)

**The "mean = median" relationship.** Mean equals median in any symmetric set — evenly spaced, or mirror-paired around a center. Knowing that "the set is an arithmetic sequence" (consecutive integers, consecutive multiples, any constant step) is enough to conclude mean = median, because arithmetic sequences are always symmetric about their center. The reverse is *not* guaranteed: mean = median does **not** force the set to be evenly spaced. {2, 2, 5, 8, 8} has mean = median = 5 without being arithmetic; {1, 2, 3, 4, 100} is right-skewed (mean 22, median 3), so coincidence is not automatic. Treat "evenly spaced ⟹ mean = median" as strictly one-directional. The skew direction is itself testable: if the mean exceeds the median, the set is **right-skewed** (a tail of large values dragging the mean up); if the mean is below the median, it's **left-skewed**.

**Worked example (mean vs. median, medium).** Set S consists of consecutive even integers. Which of the following is true? (A) mean > median (B) mean < median (C) mean = median (D) it depends on how many elements S has (E) it depends on the first element

Consecutive even integers form an arithmetic sequence, which is symmetric about its center, so **mean = median** — choice **(C)**. Symmetry alone forces the equality, which is why the number of elements and the starting value are both irrelevant: (D) and (E) are decoys. The broader lesson: any evenly spaced set has mean = median, while a right-skewed set has mean > median and a left-skewed one mean < median — so the shape of the set, not its size, decides the comparison.

**Median under element swaps.** If you replace the largest element with an even larger one, the median doesn't change. Replace an element *below* the median with something even smaller: median still doesn't change. Only changes that move a value **across the middle position** can shift the median. This is the engine behind a huge family of median questions, so internalize it: *the median is hostage only to the middle, not the tails.*

**Worked example (hard — the subtle one that separates top scorers).** Set T has 7 elements with median m. Its maximum element is increased, and it remains the maximum. What is the new median?

With 7 elements, the median is the 4th value in sorted order. Increasing the maximum keeps it the maximum, so the 4th-position element is untouched — the new median is still **m**. The principle: only a change that moves a value *across the middle position* can shift the median; changes confined to the tails leave it alone. The trap is feeling you need the new maximum's actual value — you don't, because the median is hostage only to the middle, not the tails.

> **Self-explanation prompt.** Why can you backsolve median problems so cheaply? If you can say "because the median ignores magnitudes and depends only on sorted position, so plugging a number in and re-sorting is faster than any equation," you've grasped what makes median computationally different from mean.

**Backsolving and plugging-in on median problems.** When a median problem gives answer choices and asks "what is x?" or "for what value of x is the median 12?", don't set up algebra — **plug each answer choice in, re-sort, and read the median.** Because median depends only on order, the arithmetic is trivial.

**Worked example (backsolving, medium).** In set {3, 9, x, 14, 20}, for which value of x is the median 9? Choices: (A) 6 (B) 8 (C) 9 (D) 11 (E) 15.

The set has 5 elements, so the median is the 3rd after sorting. Try **(C) x = 9**: sorted {3, 9, 9, 14, 20}, 3rd element = 9. ✓ But check the *range* of valid x, because the GMAT loves the "any value in a band works" structure: any x with x ≤ 9 lands 9 in the 3rd slot (median 9); an x between 9 and 14 makes x itself the median; an x ≥ 14 leaves 9 in the 2nd slot and pushes the median to 14. So strictly *median = 9* requires x ≤ 9. Among the choices, only (A) 6, (B) 8, (C) 9 qualify — if a single answer is expected the stem must constrain further (e.g., "the only value" or "an integer with a further property"), but the technique is the point: **test the choice, sort, read position.** Named tactic: **backsolving** beats algebra whenever the unknown sits inside an ordered structure.

**A note on mode.** Mode is the most frequent value; a set can have **no mode** (all values appear once), one mode, or several (bimodal, trimodal). The GMAT rarely asks you to compute a mode in isolation — it uses mode as a *distractor* (as the "7" trap above) or as a hidden constraint ("the mode is 5" tells you 5 appears more than any other value, which can pin down repeated elements). Don't overthink it: tally and find the peak. One subtlety worth holding: "the mode is 5" is a *stronger* statement than "5 appears more than once" — it requires that no other value matches or beats 5's frequency, which is exactly the constraint the next example leans on.

**Worked example (mode as a constraint, harder).** Set {4, 4, 6, 7, x, y} of six positive integers has a unique mode of 4 and a median of 5. Find one valid (x, y).

Median of six = average of 3rd and 4th sorted elements = 5, so the 3rd and 4th must sum to 10. The two 4's are already small; for the median to be 5 we need the middle pair to average 5. For 4 to stay the *unique* mode, no other value may match 4's count, so we want a third 4. Take x = 4, y = 6: set sorts to {4, 4, 4, 6, 6, 7}. Now 4 appears 3× (still the unique mode, since 6 appears only 2×) and the median is the average of the 3rd and 4th = (4 + 6)/2 = **5**. ✓ Valid. Sanity-check the mode danger: y = 6 made 6 appear twice — fine, because 4 still appears three times, so uniqueness survives. Had we tried x = 7, y = 7, then 4 and 7 would both appear twice (tie ⟹ not unique) — invalid. The discipline: translate each statistic into an algebraic constraint, then satisfy them one at a time, re-checking the mode's *uniqueness* last.

**Trap to watch (even-n median is never "one of the two values").** "What's the median of {2, 4, 5, 9, 12, 15}?" Even n = 6, so median is (5 + 9)/2 = 7 — **not** 5 and **not** 9. Don't pick either center value as "the median"; you must average them. The GMAT seeds both 5 and 9 into the answer choices for exactly this reason. Notice that 7 isn't even an element of the set — a fact that rattles students who expect the median to be "a number from the list."

**The procedure to memorize.**

1. **Sort** the set ascending. (Non-negotiable; nearly every median trap punishes skipping this.)
2. **Count** the elements to get n.
3. If **n is odd**, take the element at position (n+1)/2 — that single element *is* the median.
4. If **n is even**, average the elements at positions n/2 and n/2 + 1.
5. For "maximize/minimize one element" problems: **write in order with inequality labels first**, convert mean to a fixed sum, then push the target to its extreme by setting all others to their constrained limits (floor everyone else to *maximize* the target; ceiling everyone else to *minimize* it).
6. For "what value makes the median X" problems: **backsolve** — plug each choice in, re-sort, read the middle position.

**Range — the spread from extremes.**

Range = maximum − minimum. Unlike standard deviation, range uses only the two outermost values and ignores everything in between.

**Worked example.** {3, 7, 11, 18, 25}: range = 25 − 3 = **22**. No formula needed — scan for max and min.

**When is the range determined?** Range is determined only when you know both the exact maximum and the exact minimum — and not before.

**Worked example.** Which of the following, by itself, is enough to determine the range of a set S? (A) the mean and the number of elements (B) the median alone (C) the smallest and the largest elements (D) the smallest element and the mean (E) the number of elements and the median

Range = max − min, so you need *both* exact extremes and nothing substitutes for either one. Only **(C)** supplies both endpoints. The mean, the median, and the count each describe the center or the size of the set, never its spread, so (A), (B), (D), and (E) leave the range wide open. The lesson generalizes: knowing the mean, the count, or the median gives you nothing about range — you need the extremes directly.

> **Recall check.** You know set S has mean 50, has 9 elements, and has median 50. Is its range determinable? (No — neither mean, count, nor median touches the extremes, so the range could be anything. Mean and median pin the center, never the spread.)

**Outlier sensitivity.** Replace 25 with 250 in {3, 7, 11, 18, 25}: range jumps from 22 to 247. The median stays 11. The SD changes too, but the headline point for the GMAT is the contrast between range (violently outlier-sensitive) and median (immovable). The GMAT exploits this contrast: a single large outlier shifts the range dramatically but leaves the median fixed, so range and median can carry *very different* information about a set's spread.

**Range ≠ SD.** Both measure spread, but they ask different questions. {1, 5, 5, 5, 9} and {1, 3, 5, 7, 9} both have range 8 — but the first has much smaller SD because all but the two extremes sit right at the mean. Two sets can share a range and have very different SDs; **never infer SD from range or vice versa.** The one-way fact that *is* safe: range = 0 forces SD = 0 (all values identical), and SD = 0 forces range = 0. Any nonzero range tells you nothing about the size of the SD.

**Worked example (maximize range with a fixed mean — strategic, hard).** Four positive integers have mean 10. What is the greatest possible range?

Mean 10 over 4 integers ⟹ fixed sum = 40. To **maximize range = max − min**, push the minimum as low as the constraints allow (positive integer ⟹ min = 1) and dump everything into the maximum. Set three of the values to their floor of 1 each: 1 + 1 + 1 = 3, leaving the 4th = 40 − 3 = 37. Sorted {1, 1, 1, 37}, range = 37 − 1 = **36**. Named principle: **to maximize range under a fixed sum, minimize every element except one, then the leftover all piles onto the survivor.** (If the integers had to be *distinct*, you'd use 1, 2, 3 for the floors, leaving 34, range 33 — watch for that distinctness wrinkle.)

**Worked example (minimize range — the mirror move).** Four positive integers have mean 10 and sum 40. What's the *smallest* possible range? To minimize range, make the values as equal as possible: 10, 10, 10, 10 gives range **0**. If "distinct" were required, you cluster four integers as tightly as possible around the mean while summing to 40: {8, 9, 11, 12} sums to 40 with range 4, and you cannot do better — four distinct integers span at least 3 in a perfectly consecutive run {a, a+1, a+2, a+3}, but consecutive integers sum to 4a + 6, which equals 40 only at a = 8.5 (not an integer), so you must "skip the mean" to hit the sum, forcing a gap and range 4. The disciplined move: **center the values on the mean, then nudge to satisfy the sum.** The point to carry: minimizing range = clustering; maximizing range = one survivor takes the leftover.

**Pro tip (the master move for both directions).** On any "maximize/minimize range" problem: write elements in order, label them a ≤ b ≤ … ≤ e, fix the total from the mean, then for **max range** drive all-but-one to their constrained floor, and for **min range** make them as equal as the constraints permit. Apply distinctness and integer constraints *last*, as adjustments. This is the *same* seesaw logic as the maximize/minimize-an-element problems above — recognizing that one machine handles both families is itself a top-tier economy.

**Common mistakes.**

- **Computing the median without sorting** — the most expensive habit; it makes the trap answer look right.
- **Picking a center value instead of averaging** on even-n sets (the "5 or 9" error), and forgetting the even-n median need not be an element of the set at all.
- **Confusing median with mode** when both appear in the answer choices.
- **Assuming mean = median forces even spacing** — it's one-directional (even spacing ⟹ equal; not the reverse).
- **Inferring range from mean/median/count** — range needs the actual extremes, nothing else will do.
- **Inferring SD from range** — equal ranges routinely hide very different SDs.
- **Treating "the mode is 5" as merely "5 repeats"** — it also demands no other value ties 5's frequency (uniqueness).
- **Forgetting distinctness/positivity constraints** in maximize-minimize problems, giving an "answer" that violates the setup.

**Micro-drill.** 30 seconds total.

1. {4, 8, 2, 15, 11, 6}: range = ___
2. A set has range 24. The minimum is −5. The maximum is ___.
3. True or false: "Two sets with equal range must have equal standard deviation."
4. Median of {6, 6, 2, 9, 6, 11}: ___ (sort first!)

Answers: (1) **13** (max 15, min 2). (2) **19** (−5 + 24 = 19). (3) **False** — same range, entirely different spreads are possible: {1, 5, 5, 5, 9} vs. {1, 3, 5, 7, 9}. (4) Sorted {2, 6, 6, 6, 9, 11}, even n = 6, median = (6 + 6)/2 = **6** (and the mode is also 6 here — a coincidence the test would gladly exploit by listing both as if they were the same fact).

**Closing recap.** Median is *positional*: sort, count, and read the middle — odd n gives one element, even n gives an average of two (which may not be in the set). It's resistant to outliers and to any change that doesn't cross the middle, which is the backbone of median questions. Mode is just the peak of a tally and usually shows up as a distractor — and "the mode is x" carries a hidden uniqueness condition. Range = max − min, needs both true extremes (never inferable from mean, median, or count), and reacts most violently to outliers — but it tells you nothing about SD beyond the degenerate range-0 case. For maximize-minimize problems, write the set in order, fix the sum from the mean, and push to the extremes — floor everyone else to maximize, ceiling everyone else to minimize; for "what value gives this median," backsolve by re-sorting. Keep mean, median, and mode in three separate mental boxes and the answer-choice traps stop working.

## @standard-deviation

Standard deviation measures **how spread out the values are around the mean**. The GMAT almost never asks you to *compute* a standard deviation from scratch — it asks whether set A has a larger or smaller SD than set B, and how shifts and scalings affect SD. The good news: a small handful of rules covers nearly every SD question you will see, and almost none of them require the formula. Your job is to learn to *eyeball spread* and to react instantly to the two transformations the test loves — shifting and scaling.

First, the definition you need to carry in your head. Standard deviation is the **typical distance of an element from the mean**. Start by finding the mean. Then look at how far each element sits from that mean — those are the deviations. SD is, loosely, the "average size" of those deviations. (The actual formula squares each deviation, averages the squares, and takes a square root: SD = sqrt( sum of (x − mean)^2 / n ). The squaring is what makes outliers count more than their raw distance suggests, but you will rarely touch this.) The single most useful mental model: **SD is about gaps between points, not where those points sit on the number line.** Two sets sitting in completely different neighborhoods of the number line can have identical SD; two sets sitting in the same neighborhood can have wildly different SD. Location and spread are independent.

Two rules cover 95% of SD questions, and a third comparison rule covers most of the rest.

**Rule 1: Adding a constant to every element doesn't change SD.**

If Set Y = Set X + 5 (every element of X has 5 added to it), the spread is identical. The whole set slides right by 5 on the number line, but the distances between points stay the same.

    X = {8, 10, 12, 14, 16} -> mean 12, deviations (-4, -2, 0, 2, 4)
    Y = {13, 15, 17, 19, 21} -> mean 17, deviations (-4, -2, 0, 2, 4)

Same deviations -> same SD. The mean moved from 12 to 17; the spread did not budge. This is true for *any* constant, positive or negative, integer or decimal. Subtracting 1000 from every element does nothing to SD either — the set just slides far to the left, but every gap survives intact.

**Rule 2: Multiplying every element by a constant multiplies SD by the absolute value of that constant.**

If Set Y = 3 times Set X, the SD of Y is 3 times the SD of X. Scaling stretches or compresses the spread. Notice the absolute value: multiplying by -2 also multiplies the SD by 2, not by -2 — SD is never negative, because distance is never negative. Negating every element flips the set across zero but leaves all the gaps the same size, so SD is unchanged when you multiply by -1. A subtle consequence: multiplying by a fraction between 0 and 1 *shrinks* SD (multiplying by 1/2 halves it), and multiplying by 0 collapses every element to 0, giving SD exactly 0.

**Rule 3: Tighter sets have smaller SD.**

If Set A has values spanning a wide band and Set B has values clustered near the mean, SD of A > SD of B. No computation needed — just compare the typical deviations from the mean.

> **Recall check.** Without looking back, state what each of the three rules does to SD: (a) add 7 to every element, (b) multiply every element by 4, (c) multiply every element by -1. (Answers: (a) SD unchanged; (b) SD becomes 4 times as large; (c) SD unchanged, because |−1| = 1.)

**Example.** Set A = {10, 20, 30, 40, 50}, Set B = {20, 25, 30, 35, 40}. Same mean (30). Deviations:

- A: (-20, -10, 0, 10, 20) — big deviations
- B: (-10, -5, 0, 5, 10) — half as big

A has larger SD. In fact B is exactly A "squeezed" toward the mean by a factor of 1/2 (B = 0.5 × A + 15, combining a scaling and a shift), so SD of B is exactly half SD of A. You did not need that precision to answer "which is bigger," but seeing it confirms Rules 1 and 2 working together.

**Why the GMAT hates the formula.** You will not compute sum of (x − mean)^2 / n by hand under time pressure — the arithmetic is brutal and the test knows it. Every SD question is engineered so that *comparison reasoning* gets you to the answer faster than computation. If you find yourself reaching for the formula, stop and ask "can I compare deviations instead?" The answer is almost always yes.

**Worked example (easy — shift trap).** Set P = {3, 6, 9, 12, 15} and Set Q = {13, 16, 19, 22, 25}. Which has the larger SD?

Look at Q: every element of P has had 10 added (3 -> 13, 6 -> 16, and so on). That is a pure shift. By Rule 1, the SDs are **equal**. The mean jumped from 9 to 19, which is exactly the bait — a student who thinks "bigger numbers, bigger spread" picks the wrong answer. Spread did not change because every gap (3 units between consecutive elements) is identical in both sets.

**Worked example (medium — scaling).** The SD of {4, 8, 12, 16} is about 4.47. What is the SD of {8, 16, 24, 32}, and what is the SD of {-4, -8, -12, -16}?

The second set is the first multiplied by 2, so by Rule 2 its SD is 4.47 × 2 = **8.94**. The third set is the first multiplied by -1; by Rule 2 with |−1| = 1, its SD is **4.47**, unchanged. The negative signs flip the set to the left of zero but preserve every gap.

> **Self-explanation prompt.** Why does adding a constant leave SD unchanged while multiplying does not? Try to answer before reading on. If you can say "adding shifts every point by the same amount, so the gaps between points — which is what SD measures — are untouched; multiplying rescales the distance between every pair of points, so the gaps grow or shrink in proportion," you have internalized the distinction and no shift-versus-scale question will fool you.

**Worked example (medium-hard — combined transformation).** Set X has SD = 6. Set Y is formed by the rule Y = 4 times X − 9 (every element of X is multiplied by 4, then 9 is subtracted). What is the SD of Y?

Apply the rules in order, but notice that only one of them matters. The "times 4" multiplies SD by 4: 6 × 4 = 24. The "−9" is a shift and does nothing to SD. So SD of Y = **24**. The whole trick of these combined-transformation problems is recognizing that the additive part is pure noise — strip it out and only the multiplier survives. A fast sanity rule: in any rule of the form Y = kX + c, **only k touches the SD, and only as |k|.** The c is decoration.

> **Recall check.** A set is transformed by Y = 10 times X + 1000. The original SD was 3. What is the new SD? (Answer: 30. The ×10 multiplies SD by 10; the +1000, however dramatic it looks, changes nothing.)

**Worked example (hard — same range, different SD).** Two sets each have range 8: Set S = {1, 5, 5, 5, 9} and Set T = {1, 3, 5, 7, 9}. Both have mean 5. Which has the larger SD?

Both sets share the same minimum (1) and maximum (9), so range is identical. But SD is about *all* the deviations, not just the extremes. List them:

- S deviations: (-4, 0, 0, 0, 4) — three elements sit exactly at the mean, contributing zero spread.
- T deviations: (-4, -2, 0, 2, 4) — the middle elements pull away from the mean.

Now think about which set has more "spread mass." In S, only two of the five elements deviate at all; the other three sit dead on the mean and add nothing. In T, four of the five elements deviate. Both share the same two extreme deviations (±4), but T *adds* two more nonzero deviations (±2) that S lacks. More nonzero deviations means a larger average squared deviation, so **T has the larger SD**. This is the clean proof that **range and SD are different statistics**: equal range tells you nothing about SD. Set S is the "barbell" — everything piled at the center except two extremes; set T is evenly spread. A set with a single far outlier and everyone else packed at the mean can have a large range but a surprisingly small SD.

**Worked example (hard — backsolving / plug-in tactic on an abstract comparison).** A question asks: "Set A = {a, a, a, a} and Set B = {b − 6, b − 2, b + 2, b + 6}. Which has the larger standard deviation?" No numbers for a or b are given.

Here the strategic move is to **plug in numbers** to confirm what the structure already suggests. Set A is four copies of the same value, so every element equals the mean and every deviation is 0 — SD of A is **0**, the smallest SD any set can have. Set B has elements spread symmetrically around b with deviations (-6, -2, 2, 6), so its SD is clearly positive regardless of what b is. Test it: let a = 50 and b = 50. A = {50, 50, 50, 50}, SD 0; B = {44, 48, 52, 56}, plainly spread out, SD positive. Now stress-test with extreme values to make sure it isn't a fluke: let a = 1,000,000 and b = 1. A is still four identical numbers (SD 0); B = {-5, -1, 3, 7}, still spread out (SD positive). **B is larger, always.** The values of a and b are decoys — a constant set always has SD 0, and a genuinely spread set always beats it. Plugging in numbers — and especially plugging in *extreme* numbers — turns an abstract comparison into a concrete one you can see in five seconds. Naming the tactic: this is *plug in numbers* to make an abstract relationship concrete, plus the structural insight that *identical elements force SD = 0*.

**Worked example (hard — estimation by comparing deviation profiles).** Which set has the larger SD: Set M = {2, 4, 6, 8, 10, 12} or Set N = {1, 1, 7, 7, 13, 13}? Both have six elements; compute means first. Mean of M = (2+4+6+8+10+12)/6 = 42/6 = 7. Mean of N = (1+1+7+7+13+13)/6 = 42/6 = 7. Same mean — good, location is neutralized, so this is a pure spread contest. Now list deviations.

- M: (-5, -3, -1, 1, 3, 5). The deviations are 5, 3, 1, 1, 3, 5 in size — most elements sit fairly close to the mean.
- N: (-6, -6, 0, 0, 6, 6). The deviations are 6, 6, 0, 0, 6, 6 in size — four elements sit a full 6 units out, two sit dead on the mean.

Don't compute the exact SD; *estimate by comparing the deviation profiles*. M's largest deviation is 5; N's is 6, and N has four elements out at that far edge. N's deviations are, on the whole, both more extreme and more concentrated at the extremes, and the squaring in the SD formula punishes those far-out points heavily. So **N has the larger SD**. The named tactic here is *estimation* — you never needed a number, only the shape of the two deviation lists, and the insight that far-out points dominate because they get squared.

> **Recall check.** Cover the worked examples. Two sets have the same mean and the same range. Can you still tell which has the larger SD without computing? (Answer: not from mean and range alone — you must compare the full deviation profiles; the set with more elements far from the mean wins, the "barbell" pattern, not the evenly-spread one in the ±extremes-only case.)

**The zero-SD fact, isolated because it is tested directly.** A set has SD = 0 if and only if **every element is identical**. {10, 10, 10, 10} has SD 0 — there is no spread, every value equals the mean. This is the GMAT's favorite "trick" value because students expect SD to be some messy decimal and forget it can be exactly 0. If a problem forces all elements equal (or you can deduce it), the SD is pinned at 0 — often the key step when an answer looks like it should be a messy decimal but isn't. Conversely, SD = 0 is *only* achievable by identical elements; any two distinct values guarantee a positive SD.

**When two sets have the same spread pattern but one is shifted — SD is equal.** "Equal SD" is the standard trap answer on questions that invite the student to think "bigger mean means bigger SD." It doesn't. Shifts don't touch spread. Whenever you see one set that is another set "moved over," default to *equal SD* and look for the multiplier; if there is no multiplier, the SDs match.

**Trap to watch.** The deadliest SD trap is conflating **range** (or even the **count of elements**) with spread. Range = max − min and uses only the two outermost values; it ignores everything in between. A set can have a large range and small SD (one far outlier, everyone else packed near the mean — see Set S above), or a moderate range and a comparable SD. Likewise, adding more elements does not automatically raise SD: appending values *at the mean* leaves the typical deviation unchanged or even lowers it, while appending values *far from the mean* raises it. Never infer SD from range, from the mean, from the count, or from how big the numbers "look."

**Procedure — the SD decision routine to memorize.**

1. **Is one set a transformation of another?** If Set 2 = (constant) + Set 1, the SDs are **equal** (Rule 1). Stop.
2. **Is there a multiplier?** If Set 2 = k times Set 1 (with or without an added constant), SD of Set 2 = |k| times SD of Set 1 (Rule 2). The added constant is irrelevant.
3. **No transformation? Equalize location, then compare deviations.** Find the mean of each set (so location can't fool you), eyeball the typical distance from the mean, and pick the set with bigger deviations (Rule 3). Remember far-out points dominate.
4. **Check for SD = 0.** If all elements of a set are identical, its SD is 0 — the smallest possible. A constant set loses every comparison.
5. **Never confuse range, mean, or count with SD.** They answer different questions. Refuse to infer one from another.
6. **Only as a last resort, and only if forced, touch the formula.** If a question genuinely demands a numeric SD, the numbers will be tiny and friendly — but first re-read the question, because the test almost never actually wants the computation.

**Micro-drill.** Answer without computing a full SD.

1. Set P = {3, 6, 9, 12, 15}. Set Q = {13, 16, 19, 22, 25}. Which has larger SD — or are they equal?
2. The SD of {4, 8, 12, 16} is 4.47. What is the SD of {8, 16, 24, 32}?
3. Set R = {10, 10, 10, 10}. What is its SD?
4. Set X has SD 5. Set Y = -3 times X + 100. What is the SD of Y?
5. Sets {0, 0, 10, 10} and {0, 5, 5, 10} both have range 10 and mean 5. Which has the larger SD?
6. Set X has SD 8. Set Y = X / 2 − 40 (every element halved, then 40 subtracted). What is the SD of Y?

Answers: (1) **Equal** — Q is P shifted by +10, same spread. (2) **8.94** — every element doubled, so SD doubles: 4.47 × 2. (3) **0** — every value equals the mean; there is no spread. (4) **15** — multiply SD by |−3| = 3 (5 × 3); the +100 shift does nothing. (5) The **first** set, {0, 0, 10, 10} — its deviations are (-5, -5, 5, 5), all at full distance 5, while the second set's deviations are (-5, 0, 0, 5), with two elements sitting at the mean. Same range, larger spread for the barbell. (6) **4** — dividing by 2 is multiplying by 1/2, so SD halves: 8 × 1/2 = 4; the −40 shift is irrelevant. If (1) surprised you, re-read Rule 1; if (2), (4), or (6) surprised you, re-read Rule 2; if (5) surprised you, re-study the range-vs-SD worked example.

> **Recall check.** Cover the section above. State the three SD rules from memory, then predict: if every element of a set is multiplied by 3 and then has 7 added, what happens to the SD? (Answer: SD is multiplied by 3; the +7 shift does nothing.) If you couldn't predict that, re-read the rules and re-test in 10 minutes — spaced retrieval is what builds long-term fluency, not re-reading.

**Common mistakes.**

- Assuming a bigger mean (or bigger-looking numbers) implies a bigger SD. It does not — shifting the whole set is invisible to SD.
- Multiplying SD by the multiplier *with its sign* instead of its absolute value. SD can never be negative; use |k|.
- Letting an added constant in a combined transformation (like 4X − 9) scare you. Strip the constant; only the multiplier matters.
- Treating range and SD as interchangeable. Equal range does not imply equal SD, and a large range can hide a small SD.
- Forgetting that a set of identical elements has SD exactly 0 — the value the test most loves to slip past you.
- Comparing two sets' spreads without first equalizing for the mean, so location noise contaminates the judgment.
- Reaching for the formula. If you are computing sum of (x − mean)^2 / n on a comparison question, you have already lost the time race.

**Closing recap.** Standard deviation is the typical distance from the mean — gaps between points, not their location. Adding a constant leaves SD unchanged; multiplying by k scales SD by |k|; tighter sets have smaller SD; a set of identical values has SD 0. When two sets are related, identify the shift (ignore it) and the multiplier (apply it). When they aren't, neutralize location by finding each mean, then compare deviation profiles by eye — and remember the far-out points dominate. Never let range, mean, count, or the raw size of the numbers stand in for spread; they are different questions with different answers.

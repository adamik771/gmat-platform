---
title: Quant Statistics Micro-Guide
description: The deep subskill playbook for statistics. Mean, median, mode, range, standard deviation (qualitative), weighted average, the shift trick, and ten fully worked examples covering the patterns that decide statistics-flavored Quant questions.
section: Quant
type: reference
---

# Quant Statistics Micro-Guide

## Introduction

Statistics on the GMAT is content-narrow but trap-rich. The formulas — mean, median, mode, range, standard deviation — are elementary. The traps lie in *what the question is actually asking* and *what assumptions students bring*.

I score 735s on this test. Statistics problems are where I rarely lose points because the methods are mechanical and the traps are catalogued. This guide covers the content, the methods, and the traps.

*All worked examples are my own writing*, original to this guide.

## The Core Statistics

### Mean (average)

Sum / count. Mean × count = sum.

The critical insight: most "mean" problems are actually "sum" problems in disguise. If you know the mean and count, you know the sum. Use it.

### Median

The middle value when the data is sorted.

For odd count: the single middle value. For 5 values, the median is the 3rd.
For even count: the average of the two middle values. For 6 values, the median is the average of the 3rd and 4th.

### Mode

The most frequent value. A set can have multiple modes (bimodal, multimodal) or no mode if all values appear equally often.

### Range

Maximum minus minimum.

### Standard deviation

A measure of how spread the values are around the mean. The GMAT rarely asks you to compute it. Usually it asks qualitative questions: "which set has greater SD?"

Heuristic: a set whose values are more spread from the mean has higher SD; a set whose values cluster near the mean has lower SD.

### Weighted average

When subgroups have different sizes, the overall average is weighted by size:

Average = (Σ wᵢ × xᵢ) / (Σ wᵢ)

For two groups: average = (n₁ × x₁ + n₂ × x₂) / (n₁ + n₂).

## Key Properties

### The shift trick

If you add a constant k to every value:
- Mean shifts by k.
- Median shifts by k.
- Mode shifts by k.
- Range unchanged.
- Standard deviation unchanged.

If you multiply every value by k:
- Mean × k.
- Median × k.
- Mode × k.
- Range × |k|.
- SD × |k|.

### Symmetric distribution

For a symmetric distribution (like values evenly spaced around a center), mean = median.

### Skewness

When data is skewed right (long tail to the right), the mean is pulled to the right of the median. When skewed left, mean is left of median.

## Ten Worked Examples

### Worked example 1 — basic mean

*Problem.* The mean of five numbers is 12. Four of them are 8, 10, 14, and 18. What is the fifth?

*Solve.* Sum = 12 × 5 = 60. Sum of four known: 8 + 10 + 14 + 18 = 50. Fifth: 60 − 50 = 10.

*Answer: 10.*

### Worked example 2 — median

*Problem.* What is the median of {3, 7, 8, 12, 15, 22}?

*Solve.* 6 values sorted. Median = average of 3rd and 4th = (8 + 12) / 2 = 10.

*Answer: 10.*

### Worked example 3 — weighted average

*Problem.* Class A has 20 students with average 75. Class B has 30 students with average 85. What is the combined average?

*Solve.* (20 × 75 + 30 × 85) / 50 = (1500 + 2550) / 50 = 4050 / 50 = 81.

*Answer: 81.*

### Worked example 4 — range

*Problem.* What is the range of {3, 8, 12, 5, 11, 9}?

*Solve.* Max 12, min 3. Range = 9.

*Answer: 9.*

### Worked example 5 — mode

*Problem.* What is the mode of {2, 4, 4, 6, 6, 6, 8, 8}?

*Solve.* 6 appears three times, more than any other. Mode = 6.

*Answer: 6.*

### Worked example 6 — adding a value affects mean

*Problem.* The average of five numbers is 20. If a sixth number is added and the new average becomes 22, what is the sixth number?

*Solve.* New sum: 22 × 6 = 132. Old sum: 20 × 5 = 100. New value: 132 − 100 = 32.

*Answer: 32.*

### Worked example 7 — median shift

*Problem.* The median of {2, 5, 8, 12, 15} is 8. If 4 is added to each value, what is the new median?

*Solve.* Median shifts by 4. New median = 8 + 4 = 12.

*Answer: 12.*

### Worked example 8 — standard deviation comparison

*Problem.* Which set has the greater standard deviation: A = {10, 12, 14, 16, 18} or B = {12, 13, 14, 15, 16}?

*Solve.* Both have mean 14. A spreads from 10 to 18 (range 8); B spreads from 12 to 16 (range 4). A is more spread, so A has greater SD.

*Answer: A.*

### Worked example 9 — finding values from mean and median

*Problem.* A set of three positive integers has mean 10 and median 9. What is the largest possible value of the largest number?

*Solve.* Mean 10, count 3, sum 30. Median 9 means middle value is 9. Smallest ≤ 9, largest ≥ 9. Sum of three = 30. If smallest is 1 (smallest positive integer), largest = 30 − 1 − 9 = 20.

*Answer: 20.*

### Worked example 10 — combining means

*Problem.* The mean of A and B is 15. The mean of B and C is 20. The mean of A and C is 18. What is the mean of A, B, and C?

*Solve.* A + B = 30. B + C = 40. A + C = 36. Add all: 2(A + B + C) = 106. A + B + C = 53. Mean = 53/3 ≈ 17.67.

*Answer: 53/3.*

## Statistics Trap Compendium

### Trap 1: Confusing mean with median

Mean is sum/count; median is middle. Distributions where mean ≠ median (skewed) catch students.

### Trap 2: Forgetting to sort before finding median

Data given out of order — sort first.

### Trap 3: Average of speeds

Average speed is total distance / total time, not arithmetic mean of speeds.

### Trap 4: Assuming a constant

Forgetting the shift trick — adding constant to all shifts mean and median by that constant.

### Trap 5: Misweighted average

For combining group averages, weight by group size, not equal weight.

### Trap 6: Computing SD when not asked

Most SD questions are qualitative. Don't waste time computing.

### Trap 7: Range is non-negative

Max − min, always non-negative.

### Trap 8: Mode interpretation

A set can have no mode (all equal frequencies) or multiple modes.

### Trap 9: Median in even-count sets

Average of the two middle values, not just the lower or upper.

### Trap 10: Mean affected by extreme values

Outliers shift the mean significantly, less so the median.

## Pacing

Standard target: 60–90 seconds per statistics problem. Most are quick; a few involve algebra.

## Study Protocol

### Week 1: Mechanical drills

Mean, median, mode, range. 10 problems per day.

### Week 2: Weighted average

10 problems per day.

### Week 3: Property-based problems

Shift trick, SD comparison, combined means.

### Week 4: Advanced

Mean and median given, find missing values. Constraints with statistics.

### Week 5–6: Timed mixed practice.

## Statistics Elite Habits

### They convert mean to sum.

Mean × count = sum, every time.

### They sort before finding median.

Reflexive.

### They use weighted averages for combined groups.

Not arithmetic mean.

### They use the shift trick.

Adding a constant to a set is a one-step transformation.

### They handle SD qualitatively.

No need to compute usually.

### They distinguish mean from median.

Especially in skewed distributions.

### They watch for "average speed."

Total / total, not mean of speeds.

### They verify counts.

Sum and count must match.

### They check edge cases.

Min/max constraints.

### They walk away at 2:30.

Same as all Quant.

## Closing Note

Statistics is one of the easier Quant subskills to lock down because the content is small. The traps are listed; the methods are mechanical.

I score 735s on this test. Statistics is where I almost never lose points. Now it's yours.

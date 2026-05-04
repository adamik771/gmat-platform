---
title: Quant Word Problems Micro-Guide
description: The deep subskill playbook for word problem translation. The discipline of turning English into equations, the canonical word-problem structures, the translation traps that decide top-percentile scores, and twelve fully worked examples across the major problem types.
section: Quant
type: reference
---

# Quant Word Problems Micro-Guide

## Introduction

Word problems are the format where most students lose the most Quant time, not because the math is hard but because the *translation* is. A student who can solve "2x + 3y = 14, x − y = 1" in fifteen seconds may take two minutes to set up "If a store sells pens for $2 and notebooks for $3 with $14 in revenue and a difference of one item between pens and notebooks, how many pens were sold?" The math is identical. The translation costs ninety seconds.

I score 735s on this test. Word-problem translation is the subskill where the gap between average scorers and top scorers is most about *discipline* — the habit of going sentence by sentence, naming variables that match the English, tracking units, and refusing to start computing until the equations are clean.

This guide is the deep dive on translation discipline, the canonical word-problem structures, and the traps that punish loose readers.

*All worked examples are my own writing*, original to this guide.

## What Word Problems Actually Test

Three skills, in order of impact:

*Translation discipline.* Reading sentence by sentence and producing one equation per sentence with relationships. The skill is staying patient and not skipping ahead.

*Structure recognition.* Identifying which canonical structure the problem falls into — cost-and-quantity, age problem, distance-rate-time, work-rate, mixture, percent change. Recognition gives you a template.

*Verification.* Checking that your final answer makes sense in the context of the stem (positive integer where required, plausible magnitude, etc.).

## The Translation Method

### Step 1: Read once, slowly

The first read is for understanding. Identify the question being asked. Identify the major quantities. Don't compute yet.

### Step 2: Define variables

Use letters that match the English. p for pens, c for cost, h for hours, m for miles. Not x and y — those lose meaning. Write each variable definition explicitly: "Let p = number of pens."

### Step 3: Translate sentence by sentence

Each sentence in the problem that contains a relationship becomes one equation. Read sentence, write equation, move to next sentence.

"The cost of a pen is twice the cost of a pencil" → p = 2c.
"She has 5 more apples than oranges" → a = o + 5.
"Twice the number x exceeds 3 times y by 7" → 2x = 3y + 7.

### Step 4: Track units

If the problem mixes units (hours and minutes, dollars and cents, feet and yards), convert to one consistent unit before setting up.

### Step 5: Solve

Substitute, eliminate, or use whatever algebraic technique fits. Solve for the variable the question asks about — not all variables.

### Step 6: Verify

Plug the answer back into the original stem. Does it satisfy every condition? Does it match the units? Is the magnitude plausible?

## Translation Vocabulary

Common phrases and their math equivalents:

- "is" → =
- "more than" → +
- "less than" → − (with care about order)
- "twice" → × 2
- "half" → / 2
- "three times" → × 3
- "exceeds by" → A = B + (amount)
- "is greater than" → >
- "of" (in percent context) → ×
- "per" → /
- "ratio of A to B" → A/B or A:B
- "consecutive" → n, n+1, n+2 or for evens n, n+2, n+4
- "the difference between" → |A − B| (or A − B if order specified)
- "the sum of" → +
- "the product of" → ×
- "average of" → (sum)/(count)

### The "exceeds by" trap

"X exceeds Y by 5" means X = Y + 5. Not X + 5 = Y. The "exceeding" thing is the bigger one. Read this slowly under time pressure.

### The "twice as many as" trap

"A has twice as many apples as B" means A = 2B. Students sometimes reverse this to B = 2A. Identify which is the multiplier and which is the multiplicand.

### The "less than" trap

"A is 5 less than B" means A = B − 5. The order is important: the thing being described (A) is less by 5 than B.

### The "of" in percent

"30% of X" is 0.30X. "X is 30% of Y" means X = 0.30Y, where Y is the base. This trips people up — when X is "of" Y, X is the smaller (the percent of Y).

## Canonical Word Problem Structures

Every Quant word problem fits one of these structures. Recognition saves time.

### Cost-and-quantity

Two or more types of items with known prices, total count, and total revenue.

Template: let a, b be quantities of two items at known prices p_a, p_b. Equations: a + b = total count, a × p_a + b × p_b = total revenue.

### Age problems

Multiple people with relationships between their ages, often involving past or future.

Template: let A, B be current ages. Translate "in 5 years" as A + 5, "5 years ago" as A − 5.

### Distance-rate-time (DRT)

One or more moving objects with distance, rate, and time relationships.

Template: distance = rate × time. For relative motion, add speeds (opposing) or subtract speeds (same direction, chasing).

### Work-rate

One or more workers completing a task at known rates.

Template: rate × time = work done. Combined rate of multiple workers = sum of individual rates.

### Mixture

Two or more solutions or quantities with different concentrations combined.

Template: weighted average. Total amount × concentration = sum of (component amount × component concentration).

### Percent change

Quantity changes by some percent, often multiple times.

Template: new = old × (1 + percent change). Multiplicative for chained changes.

### Ratio

Two or more quantities with given ratios and one absolute anchor.

Template: introduce scale variable k. Quantities are ak, bk, ck for ratio a:b:c. Use absolute info to solve for k.

### Average

Set of values with given averages or sums.

Template: average × count = sum. Most average problems are sum problems in disguise.

## Twelve Worked Examples

### Worked example 1 — cost-and-quantity (basic)

*Problem.* A store sells pens at \$3 each and notebooks at \$5 each. Yesterday the store sold 40 items in total for a revenue of \$160. How many pens were sold?

*Translation.*
- Let p = number of pens, n = number of notebooks.
- Total items: p + n = 40.
- Total revenue: 3p + 5n = 160.

*Solve.* From the first equation: n = 40 − p. Substitute: 3p + 5(40 − p) = 160. 3p + 200 − 5p = 160. −2p = −40. p = 20.

*Verify.* p = 20, n = 20. Total items: 40 ✓. Revenue: 3(20) + 5(20) = 60 + 100 = 160 ✓.

*Answer: 20.*

### Worked example 2 — age problem

*Problem.* John is currently three times as old as his daughter. In 12 years, he will be twice as old as she will be. What is John's current age?

*Translation.*
- Let J = John's current age, D = daughter's current age.
- John is currently three times as old: J = 3D.
- In 12 years: J + 12 = 2(D + 12).

*Solve.* Substitute J = 3D: 3D + 12 = 2D + 24. D = 12. So J = 3 × 12 = 36.

*Verify.* John 36, daughter 12. 36 = 3 × 12 ✓. In 12 years: 48 vs 24. 48 = 2 × 24 ✓.

*Answer: 36.*

### Worked example 3 — distance-rate-time, single mover

*Problem.* A car travels at 60 mph for 2 hours, then at 80 mph for the next 1.5 hours. What is the total distance traveled?

*Translation.* Distance = rate × time, applied to each segment.

*Solve.* Segment 1: 60 × 2 = 120 miles. Segment 2: 80 × 1.5 = 120 miles. Total: 240.

*Answer: 240 miles.*

### Worked example 4 — distance-rate-time, two movers (opposing)

*Problem.* Two cars start from cities A and B, 300 miles apart, and travel toward each other. Car A travels at 60 mph; Car B at 40 mph. After how many hours do they meet?

*Translation.* Closing speed = 60 + 40 = 100 mph. Distance to close = 300 miles. Time to close = distance / closing speed.

*Solve.* Time = 300 / 100 = 3 hours.

*Answer: 3 hours.*

### Worked example 5 — distance-rate-time, two movers (same direction)

*Problem.* Train A leaves at noon at 60 mph. Train B leaves the same station at 1 pm at 80 mph, traveling in the same direction. At what time does Train B catch Train A?

*Translation.* Let t be the time after 1 pm when B catches A. By that time, A has been moving for (1 + t) hours and B for t hours. Distance equal: 60(1 + t) = 80t.

*Solve.* 60 + 60t = 80t. 60 = 20t. t = 3. So B catches A at 1 pm + 3 hours = 4 pm.

*Verify.* By 4 pm, A has traveled 60 × 4 = 240 miles. B has traveled 80 × 3 = 240 miles. ✓.

*Answer: 4 pm.*

### Worked example 6 — work-rate, two workers

*Problem.* Anne can paint a house in 6 hours. Bob can paint the same house in 9 hours. If they work together, how long will it take them to paint the house?

*Translation.* Anne's rate: 1/6 house per hour. Bob's rate: 1/9 house per hour. Combined rate: 1/6 + 1/9.

*Solve.* Common denominator: 1/6 = 3/18, 1/9 = 2/18. Combined: 5/18 houses per hour. Time for one house: 18/5 = 3.6 hours.

*Answer: 3.6 hours.*

### Worked example 7 — mixture (alligation)

*Problem.* A 30% saline solution is mixed with a 60% saline solution to produce 30 liters of a 50% saline solution. How many liters of the 30% solution were used?

*Translation.* Let a = liters of 30% solution, b = liters of 60% solution. Total: a + b = 30. Saline: 0.30a + 0.60b = 0.50 × 30 = 15.

*Solve.* From first: b = 30 − a. Substitute: 0.30a + 0.60(30 − a) = 15. 0.30a + 18 − 0.60a = 15. −0.30a = −3. a = 10.

*Verify.* a = 10, b = 20. Total: 30 ✓. Saline: 3 + 12 = 15 ✓.

*Answer: 10 liters.*

*Alternate alligation method.* Ratio of (30%) to (60%) = (60 − 50) : (50 − 30) = 10 : 20 = 1 : 2. So 30% is 1/3 of total = 10 liters. Same answer, much faster.

### Worked example 8 — percent change (single)

*Problem.* A book originally priced at \$60 is on sale for 25% off. After applying an 8% sales tax to the discounted price, what is the final price?

*Translation.* Discounted price: 60 × (1 − 0.25) = 60 × 0.75 = 45. With tax: 45 × 1.08.

*Solve.* 45 × 1.08 = 45 + 45 × 0.08 = 45 + 3.60 = 48.60.

*Answer: \$48.60.*

### Worked example 9 — percent change (multiple)

*Problem.* A company's revenue grew by 30% in year 1 and declined by 20% in year 2. What was the net percent change over the two years?

*Translation.* Let initial revenue R. After year 1: 1.30R. After year 2: 1.30R × 0.80 = 1.04R.

*Solve.* Net change: 1.04 − 1 = 0.04 = 4%.

*Answer: 4% increase.*

*Common trap:* Adding +30% and −20% to get +10%. That's not how percent changes chain.

### Worked example 10 — ratio with anchor

*Problem.* The ratio of boys to girls in a class is 3:5. If there are 16 more girls than boys, how many students are in the class total?

*Translation.* Let boys = 3k, girls = 5k. Difference: 5k − 3k = 16. So 2k = 16, k = 8.

*Solve.* Boys: 24. Girls: 40. Total: 64.

*Verify.* Ratio 24:40 = 3:5 ✓. Difference: 40 − 24 = 16 ✓.

*Answer: 64.*

### Worked example 11 — average / sum

*Problem.* The average of five numbers is 75. If the largest number is 95, what is the average of the remaining four numbers?

*Translation.* Sum of all 5: 75 × 5 = 375. Sum of remaining 4: 375 − 95 = 280. Average: 280/4 = 70.

*Answer: 70.*

### Worked example 12 — combined-mode word problem

*Problem.* A train traveling at constant speed covers a distance from station A to station B in 4 hours. On the return trip, it travels at 1/3 of its outbound speed. How long does the round trip take in total?

*Translation.* Let outbound speed = s, distance = d. d = 4s. Return speed = s/3. Return time = d / (s/3) = 4s / (s/3) = 4s × 3/s = 12 hours.

*Solve.* Total: 4 + 12 = 16 hours.

*Verify.* Outbound: speed s, time 4, distance 4s. Return: speed s/3, time t, distance 4s. t = 4s / (s/3) = 12 hours. Total: 16. ✓.

*Answer: 16 hours.*

## Translation Trap Compendium

### Trap 1: Reversed relationship

"A is twice as many as B" — A = 2B, not B = 2A. Always identify which is the larger.

### Trap 2: Lost negative or sign

In setting up "A is 5 less than B," writing A − 5 = B (wrong) instead of A = B − 5 (right).

### Trap 3: Unit mismatch

Mixing hours and minutes, or dollars and cents, without converting.

### Trap 4: Wrong question answered

Solving for a variable but reporting the wrong one. The problem asks for pens; you solved for notebooks.

### Trap 5: Implicit constraint missed

Stem implies positive integer (counting people); your algebra produces 2.7. You either erred or the setup is wrong.

### Trap 6: Percent additive

Adding percent changes additively. 30% + 30% ≠ 60% net change.

### Trap 7: Average vs sum confusion

Average is sum/count. Sum is average × count. Picking the wrong direction.

### Trap 8: Ratio without anchor

Treating 3:5 as actual quantities (3 and 5) rather than as a scale (3k and 5k).

### Trap 9: Rate vs time confusion

Adding times (10 hours total = wrong) instead of adding rates (combined rate, then convert to time).

### Trap 10: Mid-problem variable swap

Defining p for pens, then later writing equations with x without realizing. Stay consistent.

## Pacing for Word Problems

Standard target: 1:30 to 2:00 per word problem.

- Translation phase: 30–45 seconds.
- Setup: 15 seconds.
- Solve: 30–45 seconds.
- Verify: 10 seconds.

If translation alone takes 90 seconds, you need to either practice translation more or pivot to backsolving (try answer choices in the equations).

## When to Backsolve Instead of Translate

For word problems with single-variable answer choices:
- If the algebra is clean, translate and solve directly.
- If the algebra is messy or you're stuck on translation, backsolve. Start with answer choice (C); plug into the stem; check if it works.

Backsolving is often faster than translation for problems where the math is hard but the verification is easy.

## Study Protocol for Word Problems

### Week 1: Translation discipline

Daily: 5 word problems. For each, write down all variable definitions and translated equations *before* solving. Goal: build the translation habit.

### Week 2: Canonical structures

Drill 5 problems per structure (cost-and-quantity, age, DRT, work-rate, mixture, percent, ratio, average). Recognize the structure in 10 seconds.

### Week 3: Common traps

Review error log. Identify which traps you fall for (reversed relationships, unit confusion, etc.). Drill problems that test those traps.

### Week 4: Timed practice

Add 2:00 per problem timer. Track accuracy at speed.

### Week 5: Backsolve discipline

Practice backsolving on problems where it's faster than translation.

### Week 6: Mixed problems

Full Quant sections with mixed problem types.

## Word Problem Elite Habits

### They identify the structure in 10 seconds.

Pattern recognition.

### They define variables in plain English-matching letters.

p for pens, h for hours, never blind x and y.

### They write equations sentence by sentence.

Patient translation.

### They track units explicitly.

Convert to consistent units up front.

### They verify against the stem.

Plug the answer back in.

### They consider backsolving.

When translation looks ugly, try answer choices.

### They don't compute prematurely.

Setup first; solve second.

### They watch for implicit constraints.

Counting people = positive integer.

### They reread the question stem.

Make sure they're answering what was asked.

### They walk away at 2:30.

Same as all Quant.

## Closing Note

Word-problem translation is the subskill that most directly rewards patience under time pressure. The students who plateau on word problems usually plateau because they rush the translation, fall for relationship reversals, and end up solving the wrong equation.

Six to eight weeks of disciplined translation practice — sentence-by-sentence, variables defined in matching letters, units tracked, verification mandatory — will move your word-problem accuracy from 65–75% to 90%+.

I score 735s on this test. Word-problem translation is one of the subskills where my error rate dropped most clearly with deliberate practice. The method is the method.

Now it's yours.

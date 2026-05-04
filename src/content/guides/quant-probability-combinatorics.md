---
title: Quant Probability and Combinatorics Micro-Guide
description: The deep subskill playbook for probability and counting. Independent vs dependent events, the complement principle, permutations vs combinations, common arrangement patterns, and twelve fully worked examples that decompose the problems where most students panic.
section: Quant
type: reference
---

# Quant Probability and Combinatorics Micro-Guide

## Introduction

Probability and combinatorics is the Quant subskill where students panic most. The content is finite — basic event probability, independent events, mutually exclusive events, the complement principle, factorials, permutations, combinations, circular arrangements — but it feels alien because most students didn't drill it deeply in high school. Without specific practice, even strong Quant students lose points here disproportionately.

I score 735s on this test. Probability and combinatorics is the subskill where focused 4-week preparation produced the largest accuracy gain in my error log. The content is small enough to master cold; the methods are systematic enough to apply consistently.

This guide covers probability mechanics, counting principles, the canonical problem patterns, and the trap catalog.

*All worked examples are my own writing*, original to this guide.

## Probability Basics

### The fundamental formula

P(event) = (number of favorable outcomes) / (total number of equally-likely outcomes).

### Independent events

Two events A and B are independent if knowing one occurred doesn't change the probability of the other.

P(A and B) = P(A) × P(B) for independent events.

Examples: rolling two dice, flipping two coins, drawing cards *with replacement*.

### Dependent events

If knowing A occurred changes B's probability, they are dependent. Use conditional probability:

P(A and B) = P(A) × P(B | A).

Examples: drawing cards without replacement, sequential draws from a finite pool.

### Mutually exclusive events

A and B are mutually exclusive if they can't both happen.

P(A or B) = P(A) + P(B) for mutually exclusive events.

### Non-mutually-exclusive events

If A and B can both happen:

P(A or B) = P(A) + P(B) − P(A and B).

The subtraction corrects for double-counting.

### The complement rule

P(A) + P(not A) = 1. So P(A) = 1 − P(not A).

This is the highest-leverage probability tool. Whenever the problem asks "at least one," compute the probability of "none" and subtract from 1.

### The "at least one" reflex

If the question asks for P(at least one X), think: 1 − P(no X).

For repeated independent trials, P(no X in n trials) = (1 − P(X))^n. So P(at least one X) = 1 − (1 − P(X))^n.

## Counting Principles

### The multiplication principle

If event 1 can occur in m ways and event 2 in n ways (independent of event 1), the combined event can occur in m × n ways.

Example: choosing one of 4 shirts and one of 3 pants gives 4 × 3 = 12 outfits.

### Factorial

n! = n × (n−1) × (n−2) × ... × 2 × 1.

0! = 1 (by definition).

n! grows fast: 5! = 120, 10! = 3,628,800.

### Permutations

Arrangements where order matters. Number of permutations of n distinct items taken r at a time:

nPr = n! / (n−r)!

### Combinations

Selections where order doesn't matter. Number of combinations of n distinct items taken r at a time:

nCr = n! / (r! × (n−r)!)

The "C(n, r)" or "n choose r" notation is standard.

### Permutation vs combination — when each applies

*Permutation:* "How many ways to arrange 3 books on a shelf from 5 books?" Order matters (positions 1, 2, 3 are distinct). Use nPr = 5!/(5−3)! = 5!/2! = 60.

*Combination:* "How many ways to choose 3 books from 5 to take on a trip?" Order doesn't matter. Use nCr = 5!/(3!×2!) = 10.

The difference: are the chosen items in distinguishable positions, or just selected as a set?

### Circular arrangements

Arranging n distinct items around a circular table: (n−1)! arrangements (one rotation is considered the same).

If reflections are also considered the same: (n−1)!/2.

### Arrangements with repeated items

Arranging the letters in "BANANA": 6 letters with 3 As, 2 Ns. Number of arrangements: 6! / (3! × 2!) = 720 / 12 = 60.

## Twelve Worked Examples

### Worked example 1 — basic probability

*Problem.* A standard six-sided die is rolled. What is the probability of rolling a number greater than 4?

*Analysis.* Outcomes greater than 4: {5, 6}. Total outcomes: {1, 2, 3, 4, 5, 6}. P = 2/6 = 1/3.

*Answer: 1/3.*

### Worked example 2 — multiplication for independents

*Problem.* A coin is flipped three times. What is the probability of getting heads all three times?

*Analysis.* P(heads each flip) = 1/2. Independent flips. P(HHH) = (1/2)³ = 1/8.

*Answer: 1/8.*

### Worked example 3 — complement principle

*Problem.* A fair die is rolled four times. What is the probability of rolling at least one 6?

*Analysis.* Use complement. P(at least one 6) = 1 − P(no 6 in four rolls).

P(no 6 on a single roll) = 5/6. P(no 6 in four rolls) = (5/6)^4 = 625/1296.

P(at least one 6) = 1 − 625/1296 = 671/1296 ≈ 0.518.

*Answer: 671/1296.*

### Worked example 4 — dependent draws (without replacement)

*Problem.* A bag contains 5 red and 3 blue marbles. Two marbles are drawn at random without replacement. What is the probability that both are red?

*Analysis.* P(first red) = 5/8. P(second red | first red) = 4/7. P(both red) = 5/8 × 4/7 = 20/56 = 5/14.

*Answer: 5/14.*

### Worked example 5 — combinations

*Problem.* From a group of 10 people, how many different committees of 3 people can be formed?

*Analysis.* Order doesn't matter (committee composition). C(10, 3) = 10! / (3! × 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 720/6 = 120.

*Answer: 120.*

### Worked example 6 — permutations

*Problem.* From a group of 10 people, how many ways are there to select a President, Vice President, and Treasurer (all distinct positions)?

*Analysis.* Order matters (positions are distinguishable). P(10, 3) = 10! / 7! = 10 × 9 × 8 = 720.

*Answer: 720.*

### Worked example 7 — combinations with constraint

*Problem.* From a group of 5 men and 4 women, how many committees of 3 can be formed that include at least 1 woman?

*Analysis.* Use complement. Total committees: C(9, 3) = 84. All-men committees: C(5, 3) = 10. Committees with at least one woman: 84 − 10 = 74.

*Answer: 74.*

### Worked example 8 — circular arrangement

*Problem.* In how many ways can 5 people be seated around a circular table?

*Analysis.* Circular arrangements: (n−1)! = 4! = 24.

*Answer: 24.*

### Worked example 9 — arrangements with repeats

*Problem.* In how many distinct ways can the letters of "MISSISSIPPI" be arranged?

*Analysis.* 11 letters: 1 M, 4 Is, 4 Ss, 2 Ps. Number of arrangements: 11! / (1! × 4! × 4! × 2!) = 39,916,800 / (1 × 24 × 24 × 2) = 39,916,800 / 1152 = 34,650.

*Answer: 34,650.*

### Worked example 10 — multistep probability

*Problem.* A box contains 4 red, 3 blue, and 5 green marbles. Three marbles are drawn at random without replacement. What is the probability that all three are different colors?

*Analysis.* Total ways to draw 3 marbles from 12: C(12, 3) = 220. Ways to choose one of each color: C(4,1) × C(3,1) × C(5,1) = 4 × 3 × 5 = 60. Probability: 60/220 = 3/11.

*Answer: 3/11.*

### Worked example 11 — conditional probability

*Problem.* In a class of 30 students, 18 study Spanish and 12 study French. 6 study both. If a student studies Spanish, what is the probability that they also study French?

*Analysis.* P(French | Spanish) = P(French and Spanish) / P(Spanish) = 6/18 = 1/3.

*Answer: 1/3.*

### Worked example 12 — combined permutation and combination

*Problem.* A class is electing 4 officers from 8 students: a President, Vice President, Secretary, and Treasurer. The President must be one of 3 specific senior students. How many ways are there to choose the officers?

*Analysis.* Choose President from 3 seniors: 3 ways. Then choose VP, Secretary, Treasurer from remaining 7 students with order mattering: P(7, 3) = 7 × 6 × 5 = 210. Total: 3 × 210 = 630.

*Answer: 630.*

## Common Probability and Combinatorics Patterns

### Pattern: At-least-one (use complement)

Recognize: "What is the probability that at least one X..."

Method: 1 − P(no X).

### Pattern: Without replacement (use conditional)

Recognize: "drawn at random without replacement."

Method: multiply conditional probabilities P(first), P(second | first), etc.

### Pattern: Distinguishable arrangements (use permutations)

Recognize: "in how many ways can we order/arrange/line up..."

Method: nPr or n! / (repeats).

### Pattern: Selections (use combinations)

Recognize: "in how many ways can we choose/select..."

Method: nCr.

### Pattern: Mutually exclusive cases (sum)

Recognize: "either A or B can happen."

Method: P(A) + P(B), assuming mutually exclusive.

### Pattern: Joint events with overlap

Recognize: "A or B (which can both happen)."

Method: P(A) + P(B) − P(A ∩ B).

### Pattern: Multistep with constraints

Recognize: problem with sequential choices and rules.

Method: count each step's options, multiply.

### Pattern: Symmetric arrangements

Recognize: circular tables, necklaces, where rotations or reflections are equivalent.

Method: (n−1)! for circular, /2 if reflections equivalent.

## The Probability and Combinatorics Trap Compendium

### Trap 1: At-least-one without complement

Computing the long way (sum of exactly-1, exactly-2, etc.) instead of complement.

### Trap 2: Order assumption

Treating an unordered selection as ordered or vice versa. "Pick 3 students" = combination. "Pick a President, VP, Treasurer" = permutation.

### Trap 3: Independence vs dependence

Using P(A) × P(B) when events are dependent. With replacement vs without replacement matters.

### Trap 4: Forgetting overlap subtraction

P(A or B) for non-mutually-exclusive events forgets the −P(A ∩ B) correction.

### Trap 5: Repeated items in permutations

Not dividing by factorials of repeated items.

### Trap 6: Wrong sample space

Confusing what counts as an "outcome."

### Trap 7: Conditional probability misread

Using P(A) instead of P(A | B) or vice versa.

### Trap 8: Circular vs linear

Treating circular arrangements as n! instead of (n−1)!.

### Trap 9: Off-by-one in inclusive/exclusive

"At least 1" vs "exactly 1." "Up to k" vs "less than k."

### Trap 10: Sample-space contradiction

Computing probabilities that exceed 1 or are negative — sign of an error.

## Pacing for Probability and Combinatorics

Standard target: 1:30 to 2:00 per problem.

### When to draw the situation out

For complex multistage probability or arrangement problems, sketch a tree or grid. The 30 seconds invested often saves a minute of mental confusion.

### When to use complement

If the question asks for "at least one" or "not all," complement is almost always faster.

### When to enumerate

For small sample spaces (5–10 outcomes), enumerating can be faster than computing.

## Study Protocol

### Week 1: Basic probability mechanics

Drill 10 problems per day on independent events, mutually exclusive events, complement principle.

### Week 2: Combinatorics fundamentals

Drill permutations and combinations. Make sure you instantly know which to use.

### Week 3: Mixed problems

Combine probability and counting. Drill 10 mixed problems daily.

### Week 4: Advanced patterns

Conditional probability, circular arrangements, repeats, multistep.

### Week 5: Timed practice

90–120 seconds per problem. Track errors.

### Week 6: Integration

Full Quant sections with focus on probability/combinatorics accuracy.

## Probability and Combinatorics Elite Habits

### They reflexively use complement on "at least one."

No exception.

### They distinguish order matters from order doesn't.

Permutation vs combination.

### They track replacement.

With or without changes the math.

### They sketch when complex.

Tree, grid, Venn diagram.

### They check sample space.

What counts as an outcome?

### They verify probabilities are between 0 and 1.

Sanity check.

### They factor before computing.

C(10, 3) = 10 × 9 × 8 / 6, not multiplying out factorials.

### They handle circular separately.

(n−1)!, not n!.

### They divide for repeats.

n! / (k₁! × k₂! × ...).

### They don't panic.

Probability is finite content. Trust the method.

## Closing Note

Probability and combinatorics is the subskill where preparation produces the most visible accuracy gain. Students who prep this for 4–6 weeks see their accuracy on probability/combinatorics jump from 50–60% to 80–90%. That alone moves the Quant score by several percentile points.

The methods are mechanical. The patterns are finite. The traps are listed.

I score 735s on this test. Probability and combinatorics is one of the subskills where my prep was most explicit and the payoff was largest. The method works.

Now it's yours.

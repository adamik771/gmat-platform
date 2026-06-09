---
slug: quant-27-probability
title: "Probability"
section: Quant
estimated_minutes: 11
prerequisites:
  - quant-26-restrictions-advanced-counting
summary: |
  Favorable over total, counting-based probability, and dependent events with and without replacement.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - statistics-probability-q7
      - statistics-probability-q8
  - id: probability-basics
    type: reading
    title: "Probability basics — counting favorable vs total"
    check_question_ids:
      - combinatorics-q24
      - combinatorics-q21
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
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - statistics-probability-q9
      - statistics-probability-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - statistics-probability-q11
      - statistics-probability-q12
---

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

> **Self-explanation prompt.** Why does swapping two identical letters not produce a new arrangement? If you can say "because the result looks the same — the string is unchanged — so it's not a distinct outcome," you understand why we divide. The denominator doesn't subtract anything; it cancels out the overcounting that straight factorial committed.

> **Recall check.** Write the multiset formula from memory. Then apply it to BANANA (6 letters: 1 B, 3 A's, 2 N's). The answer is 6! / (1! × 3! × 2!) = 720 / 12 = 60. If you got it right, you're ready for the problem set. If not, re-read the formula once more, then close it and recompute without looking.

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

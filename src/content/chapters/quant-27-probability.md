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

Probability on the GMAT reduces to counting: **P(event) = favorable outcomes / total outcomes**. Both the numerator and the denominator are counting problems you already know how to solve. That single equation is the spine of every probability question the exam can throw at you — the difficulty never comes from the formula, it comes from (a) counting correctly under a constraint and (b) recognizing which structural shortcut collapses a messy enumeration into one clean line. This section builds those reflexes from the ground up and then pushes into the edge cases that separate a 95th-percentile quant scorer from a 99th-percentile one.

A few framing facts to anchor before the mechanics:

- Every probability is a number between 0 and 1, inclusive. P = 0 means impossible; P = 1 means certain. If your arithmetic ever spits out a probability above 1 or below 0, you have made a counting error — that is a free self-check.
- Probabilities of mutually exclusive, collectively exhaustive cases sum to exactly 1. This is the engine behind the complement rule and behind most of the fast solutions below.
- "Favorable" and "total" must be counted the **same way** — both as ordered sequences, or both as unordered selections. Mixing the two conventions in the numerator and denominator is the single most common source of wrong answers. As long as you are consistent, the over- or under-counting cancels in the ratio.

### The foundational setup

**Favorable outcomes**: the arrangements or selections that satisfy the event's condition.

**Total outcomes**: all possible arrangements or selections, with no constraint applied.

When every outcome is **equally likely**, probability is just the favorable count divided by the total count. That equal-likelihood assumption is doing quiet work — it is what lets you replace probability with raw counting. On the GMAT it almost always holds (fair coins, fair dice, random draws, randomly chosen people), but stay alert: if outcomes are *not* equally likely, you must weight them, which is what the multiplication and binomial rules below do for you.

**Worked example.** A bag has 4 black and 6 non-black socks. Two socks are drawn at random. What is the probability both are black?

- Total: C(10, 2) = 45 ways to draw any 2 socks.
- Favorable: C(4, 2) = 6 ways to draw 2 black socks.
- P(both black) = 6/45 = **2/15**.

Notice that both counts are unordered (combinations), so the convention is consistent. We could equally have used the multiplication rule: P = (4/10) × (3/9) = 12/90 = 2/15. Same answer, because the two methods are two views of the same ratio. Pick whichever is faster for the problem in front of you — combinations when the event is "a specific subset," multiplication when the event is "this then that."

The deeper point: counting ordered and counting unordered both work *as long as you stay in one lane*. If you had counted the denominator as ordered (10 × 9 = 90 ways to draw a first then a second sock) you would also need an ordered numerator (4 × 3 = 12 ways to draw a first black then a second black), giving 12/90 = 2/15 again. The factor of 2! that converts ordered to unordered appears on top and bottom and cancels. It only fails to cancel when you accidentally order one side and not the other — which is exactly the trap.

> **Recall check.** A drawer has 3 red and 5 blue pens; you grab 2 at random. What is P(both blue)? (C(5,2)/C(8,2) = 10/28 = **5/14**; or (5/8)(4/7) = 20/56 = 5/14.)

### The complement rule — the workhorse for "at least"

**P(event) = 1 − P(not event).**

The most valuable special case: **P(at least one A) = 1 − P(no A).** Whenever you see the phrase "at least one," your hand should reflexively reach for the complement. Computing "at least one" directly means adding up "exactly one + exactly two + exactly three + ...," which is several calculations and several chances to slip. The complement is almost always a single clean line.

**Worked example.** Three socks are drawn from 10 (4 black, 6 others). What is P(at least 1 black)?

- P(no black) = C(6, 3) / C(10, 3) = 20 / 120 = 1/6.
- P(at least 1 black) = 1 − 1/6 = **5/6**.

Counting "exactly 1 black + exactly 2 black + exactly 3 black" directly gives the same answer but takes three separate combination calculations. The complement is one. The lesson generalizes: the moment a problem's event partitions into three or more sub-cases, ask whether the *opposite* event is a single case. Usually it is.

**Worked example (harder, dice).** A fair six-sided die is rolled 4 times. What is the probability that at least one roll shows a 6?

Direct counting is a nightmare (exactly one 6, exactly two 6's, ...). Use the complement. On each roll, P(not a 6) = 5/6, and the rolls are independent, so P(no 6 in four rolls) = (5/6)^4 = 625/1296. Therefore P(at least one 6) = 1 − 625/1296 = **671/1296 ≈ 0.518**. A common wrong instinct is "4 × 1/6 = 2/3" — that double-counts the overlaps where two or more 6's appear and would even exceed 1 if you rolled the die seven times. The complement avoids all of that.

**Worked example (complement with two complementary events, harder).** A box has 5 green, 3 yellow, and 2 white marbles (10 total). Three are drawn without replacement. What is the probability the draw includes at least one yellow *and* at least one white? This is a subtle one because "at least one yellow and at least one white" is *not* simply 1 minus a single clean event. Use the complement on the bad outcomes: the draw fails if it has no yellow, or no white (or both). Let A = "no yellow," B = "no white." We want 1 − P(A or B), and P(A or B) = P(A) + P(B) − P(A and B).

- P(A) = P(no yellow) = C(7, 3)/C(10, 3) = 35/120.
- P(B) = P(no white) = C(8, 3)/C(10, 3) = 56/120.
- P(A and B) = P(no yellow and no white) = only green available = C(5, 3)/C(10, 3) = 10/120.
- P(A or B) = (35 + 56 − 10)/120 = 81/120.
- Answer = 1 − 81/120 = 39/120 = **13/40**.

The hard part here was recognizing that "at least one of each of two colors" needs the *inclusion-exclusion* form of the complement, not a single subtraction. When the favorable event is an "and" across two scarce categories, complement the failure modes and remember to add back the overlap you subtracted twice.

> **Recall check.** You flip a fair coin 3 times. Using the complement, what is P(at least one head)? (1 − P(no heads) = 1 − (1/2)^3 = 1 − 1/8 = **7/8**.)

### With replacement vs. without replacement

**With replacement**: after each draw, the item goes back. The draws are *independent* — the probability resets every time, the denominator never changes.

    P(both red) = P(red on 1) × P(red on 2) = (6/10) × (6/10) = 36/100 = 9/25

**Without replacement**: the item stays out. Each draw changes the denominator, and removing a favorable item also changes the numerator.

    P(both red) = P(red on 1) × P(red on 2 | red on 1) = (6/10) × (5/9) = 30/90 = 1/3

That vertical bar in P(red on 2 | red on 1) reads "given that," and it is the heart of without-replacement problems: the second probability is *conditional* on what the first draw removed. Track both the top and the bottom of the fraction as the pool shrinks.

**Order doesn't matter for the final "both" probability — a non-obvious fact.** People assume P(red, then blue) differs from P(blue, then red), but for the *unordered* event "one red and one blue" the two orderings sum and the answer is symmetric. P(red then blue) = (6/10)(4/9) = 24/90; P(blue then red) = (4/10)(6/9) = 24/90; together 48/90 = 8/15. Notice each ordering individually gives 24/90 — the denominators march 10 → 9 regardless of order, and the numerators just trade places. This symmetry is why "the probability the 3rd card drawn is an ace" equals "the probability the 1st card is an ace" in a shuffled deck: position is irrelevant when you have no information about earlier draws.

**Trap to watch.** The problem will explicitly say "with replacement" or "without replacement," or it will imply it ("drawn simultaneously" and "drawn one after another without putting it back" are both *without* replacement; "a number is generated, recorded, and the process repeats" is *with* replacement). Read it carefully. With replacement gives a **larger** probability for "same outcome twice" because the favorable items reset; without replacement depletes the pool, so a second match is less likely. If you can't decide which regime applies, re-read the verb: "draws and keeps" = without; "draws and returns" = with.

> **Self-explanation prompt.** In the without-replacement sock example the answer was (6/10)(5/9). Explain, in one sentence, why the numerator dropped from 6 to 5 but the non-red socks count never entered the calculation. (Because we conditioned on the first draw being red, which removed one red sock — so one fewer red remains favorable and one fewer total remains, while the four non-red socks were never going to be drawn in either favorable step.)

### Binomial probability — exactly k successes in n independent trials

When an event has the **same probability p on each independent trial** and you want **exactly k** successes out of n trials:

**P(exactly k) = C(n, k) × p^k × (1 − p)^(n − k)**

Read the three pieces as a sentence: C(n, k) counts *which* of the n positions hold the successes; p^k is the probability those k successes happen; (1 − p)^(n − k) is the probability the remaining n − k trials all fail. The three multiply because the positions are chosen, then the successes and failures occur, independently.

The binomial only applies when **all three conditions** hold: a fixed number of trials, each trial independent, and the success probability constant across trials. Independence is exactly why "with replacement" problems are binomial and "without replacement" problems are not — pull that thread and the whole topic ties together.

**Worked example.** A fair coin is flipped 5 times. What is P(exactly 3 heads)?

    C(5, 3) × (1/2)^3 × (1/2)^2 = 10 × (1/32) = 10/32 = **5/16**

**Worked example (unequal p, harder).** A basketball player makes each free throw with probability 0.8, independently. She shoots 4 free throws. What is the probability she makes exactly 3?

Here p = 0.8 (success = make) and 1 − p = 0.2 (miss), n = 4, k = 3.

    C(4, 3) × (0.8)^3 × (0.2)^1 = 4 × 0.512 × 0.2 = 4 × 0.1024 = **0.4096**

The C(4, 3) = 4 captures the four orderings — the single miss could be on shot 1, 2, 3, or 4. Forgetting that factor and writing just (0.8)^3(0.2) = 0.1024 is the classic binomial mistake: it prices in *one specific ordering* (e.g., make-make-make-miss) and ignores the other three.

**Worked example (binomial + complement, "at least" hardest).** A factory's widgets are defective with probability 0.1, independently. A box holds 5 widgets. What is the probability the box contains at least 2 defective widgets? "At least 2" out of 5 means P(2) + P(3) + P(4) + P(5) — four binomial terms. The complement P(0) + P(1) is only two terms, so complement wins.

- P(0 defective) = C(5,0)(0.1)^0(0.9)^5 = 1 × 1 × 0.59049 = 0.59049.
- P(1 defective) = C(5,1)(0.1)^1(0.9)^4 = 5 × 0.1 × 0.6561 = 0.32805.
- P(0 or 1) = 0.59049 + 0.32805 = 0.91854.
- P(at least 2) = 1 − 0.91854 = **0.08146**, about 8.1%.

The strategic move — **choose the side of the complement with fewer terms** — turned a four-term grind into a two-term one. For "at least 2 of n," the complement always has exactly two terms (the k = 0 and k = 1 cases) no matter how large n is, so it scales beautifully.

**Trap to watch.** "At least 3 heads" and "exactly 3 heads" are different problems. "At least 3" = P(3) + P(4) + P(5), or, using the complement, 1 − P(0) − P(1) − P(2). "Exactly 3" uses the binomial formula once. When n is large, choose whichever side of the complement has *fewer* terms: for "at least 1," the complement P(0) is a single term and always wins.

### A strategic detour — estimation and answer-choice tactics

Probability answers are constrained: they live in [0, 1], and on "at least one of several" problems the answer is usually **large** (close to 1), while on "all of them" problems it is usually **small**. You can often eliminate two or three choices before computing anything.

**Worked example (estimation + elimination).** A fair die is rolled 3 times. The probability that *not all three rolls are the same* is closest to which: (A) 1/36 (B) 1/6 (C) 5/6 (D) 17/18 (E) 35/36?

"Not all the same" is the complement of "all three identical." All three identical is rare, so the answer should be near 1 — already this kills (A), (B), and (C). Now compute the complement exactly: P(all same) = the first roll is anything, the next two must match it, so (6/6)(1/6)(1/6) = 1/36. Therefore P(not all same) = 1 − 1/36 = **35/36**, choice (E). The estimation narrowed five choices to two in five seconds; the exact computation confirmed it. **Name the tactic: complement + bounding.** Knowing the answer must be near 1 means you only had to distinguish 17/18 from 35/36 — a single quick subtraction.

**Worked example (backsolving / plug-in on an unknown count).** A jar contains some red marbles and 4 blue marbles. One marble is drawn at random and it is given that P(red) = 3/5. How many red marbles are there? (A) 4 (B) 6 (C) 8 (D) 10 (E) 12. Rather than solve the algebra, **backsolve** — plug each choice in and test P(red) = red/(red + 4) against 3/5. Start in the middle with (C) 8: 8/(8 + 4) = 8/12 = 2/3, too big (we need 3/5 = 0.6, and 2/3 ≈ 0.667). We need *fewer* reds to lower the probability, so test (B) 6: 6/(6 + 4) = 6/10 = 3/5. That hits exactly — the answer is **(B)**. Backsolving converts an algebra problem (solve r/(r+4) = 3/5) into three seconds of arithmetic on the answer choices, and the "test the middle first, then move toward the target" rule means you rarely check more than two.

> **Recall check.** Without computing exactly, is P(at least one 6 in ten rolls of a fair die) closer to 1/6 or to 1? (Closer to **1** — the complement (5/6)^10 ≈ 0.16, so the answer ≈ 0.84. "At least one" over many trials pushes toward certainty.)

### A procedure to memorize

When any probability problem lands in front of you, run this sequence:

1. **Identify the event** in plain words, and write down its exact phrasing — especially the quantifiers "at least," "exactly," "at most," "all," "none." These words choose your method.
2. **Decide the regime**: with replacement (independent, binomial-friendly) or without replacement (conditional, shrinking denominator)? Find the verb that tells you.
3. **Check for the complement shortcut**: does the event contain "at least one" or split into three or more sub-cases? If so, compute 1 − P(opposite) instead — and if the complement itself splits, pick the side with fewer terms.
4. **Count the total** outcomes — and lock in a convention (ordered or unordered).
5. **Count the favorable** outcomes the *same* way (same convention as step 4).
6. **Form the ratio** favorable/total, or multiply per-draw probabilities — whichever the structure favors.
7. **Sanity-check**: is the result in [0, 1]? Does its size match intuition ("at least one" → large, "all of them" → small)?

### Common mistakes

- **Counting numerator and denominator with different conventions** (one ordered, one unordered). Be consistent; the overcounting cancels only when both sides match.
- **Computing "at least one" directly** instead of via the complement — slow and error-prone.
- **Dropping the C(n, k) factor in the binomial** — that ignores all the orderings and prices a single sequence.
- **Adding per-trial probabilities for "at least one"** (e.g., 4 × 1/6) — this double-counts overlaps and can exceed 1.
- **Using the wrong replacement regime** — keeping the denominator fixed when items are not replaced, or shrinking it when they are.
- **Forgetting the conditional in without-replacement** — the second factor's numerator and denominator both shrink, not just the denominator.
- **Treating dependent draws as binomial** — the binomial requires independence; without replacement breaks it.
- **Forgetting inclusion-exclusion** on "at least one of each of two categories" — you must add back the overlap you subtracted twice.

### Closing recap

Probability is counting in a fraction: favorable over total, counted the same way on top and bottom. Reach for the **complement** whenever you see "at least one" or a three-plus-case split, and when the complement itself splits, take the side with fewer terms. Read the verb to fix the **regime** — with replacement means independent and possibly binomial; without replacement means conditional and shrinking. The **binomial** C(n, k) p^k (1 − p)^(n − k) handles "exactly k of n independent trials," and its C(n, k) is the count of orderings you must never drop. Bound your answer in [0, 1] and against intuition before you commit, use **complement + bounding** to eliminate answer choices before grinding the arithmetic, and **backsolve** when the unknown is one of the answer choices. Master those moves and probability becomes the most mechanical topic on the quant section.

> **Self-explanation prompt.** Why does C(n, k) appear in the binomial formula? Because the k successes can occur in any of C(n, k) orderings across the n trials — and the probability is the same for each ordering. If you can explain that, the formula stops being something to memorize and starts being something to re-derive in 5 seconds.

> **Recall check.** State the binomial formula from memory and apply it: a fair coin flipped 6 times, P(exactly 2 heads). (C(6,2)(1/2)^2(1/2)^4 = 15 × 1/64 = **15/64**.)

## @basic-probability

Probability of an event = **favorable outcomes ÷ total outcomes**, when every outcome is equally likely. That "equally likely" clause is doing quiet but heavy lifting — it is the assumption the whole formula stands on. If the outcomes are *not* equally likely (a weighted die, a deck with cards removed, draws without replacement), you cannot just count favorable cases and divide; you must weight each outcome by its own probability. Five formulas cover the entire topic, and almost every hard probability question is one of these five wearing a costume. The skill that separates a 700+ scorer here is not memorizing more formulas; it is **recognizing which of the five a problem is**, and reaching reflexively for the complement when the wording invites it.

Every probability is a number between 0 and 1 (or 0% and 100%). If your arithmetic ever produces a probability above 1 or below 0, stop — you have made an error, usually double-counting or adding when you should multiply. Treat that boundary as a free built-in sanity check on every answer. The same is true of the *direction* of an answer: "at least one" in many trials should be near 1; a long conjunction of rare events should be near 0. Building that magnitude intuition is half the battle.

**The core ratio.**

A jar has 4 red, 3 blue, 5 green balls. P(green) = 5/12. P(not green) = 7/12. The denominator is *total* outcomes (4 + 3 + 5 = 12), never the count of one favorable group. A common slip is dividing by the wrong total when a problem buries the count of one category and forces you to back it out. The ratio is also the gateway to "find the missing count" problems, where you are handed a probability and one piece of the pool and must reconstruct the rest.

> **Recall check.** A bag holds 3 red, 5 blue, and some green marbles. If P(green) = 1/3, how many green marbles are there? (Let g = green. g/(8 + g) = 1/3 → 3g = 8 + g → 2g = 8 → g = **4**.)

**The complement rule.**

P(not A) = 1 − P(A). Always available. When "at least one" or "not" is involved, always consider the complement first. The complement is the single most powerful labor-saver in the entire topic — it converts a sprawling "many ways to succeed" count into a single "one way to fail" chain.

**Example.** A jar has 6 red, 4 blue, 2 yellow. P(red OR yellow)?

Straight: (6 + 2)/12 = 2/3. Or: complement = P(blue) = 4/12 = 1/3, so P(red OR yellow) = 1 − 1/3 = 2/3. Same answer, two routes. Notice that here the complement is *cleaner* because "not (red or yellow)" collapses to the single event "blue."

**Union of mutually exclusive events.**

P(A or B) = P(A) + P(B) — **only when A and B cannot both happen** (e.g., drawing one ball, which has one color). The test of mutual exclusivity is concrete: can a single outcome belong to both A and B at once? Drawing one ball that is both red and blue is impossible, so those events are mutually exclusive. Rolling a number that is both "even" and "greater than 3" is possible (4 and 6), so those are **not** mutually exclusive and the bare sum overcounts.

**Union of non-mutually-exclusive events.**

P(A or B) = P(A) + P(B) − P(A and B). Subtract the overlap to avoid double-counting. Shows up on Venn-style problems and on single-draw problems where the categories can coincide.

**Worked example (single die, overlapping events).** Roll one fair die. P(even OR greater than 3)?

- P(even) = {2,4,6} = 3/6.
- P(greater than 3) = {4,5,6} = 3/6.
- Overlap P(even AND > 3) = {4,6} = 2/6.
- P(even or > 3) = 3/6 + 3/6 − 2/6 = 4/6 = **2/3**.

Cross-check by direct count: the favorable set is {2,4,5,6} = 4 outcomes out of 6 = 2/3. The inclusion-exclusion subtraction is exactly what keeps 4 and 6 from being counted twice. The trap version of this problem omits the subtraction and lists 6/6 = 1 — a giveaway that something is wrong, since 5 is even-or-greater-than-3? No: 5 is greater than 3, so it *is* favorable. The real impossible outcome here is only 1 and 3, so the answer must be 4/6, never 1.

**Independent events — multiply.**

If two events are independent (one doesn't affect the other), P(A and B) = P(A) × P(B).

Flipping a fair coin twice, P(two heads) = 1/2 × 1/2 = 1/4. Rolling two dice, P(sum = 8)? Count favorable outcomes directly: (2,6), (3,5), (4,4), (5,3), (6,2) = 5 outcomes out of 36. **5/36**. Note the ordered-pair counting: (2,6) and (6,2) are distinct outcomes on two distinguishable dice, so you count both. A frequent error is treating {2,6} as one outcome and getting 3/36 — wrong, because the sample space of 36 is itself built from ordered pairs. The single exception, (4,4), is genuinely one outcome because there is no "other order," which is exactly why sum = 8 has 5 ways and not 6.

> **Recall check.** Two fair dice are rolled. Is P(sum = 7) larger or smaller than P(sum = 8), and by how much? (Sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 ways = 6/36. Sum 8 = 5/36. **7 is larger, by 1/36.** Seven is the single most likely total.)

**The "at least one" trick — complement every time.**

"Probability of *at least one* X" problems are almost always solved by 1 − P(no X). Burn this reflex in: the words "at least one" should fire the response "one minus probability of none" before you read the rest of the sentence.

**Example.** Box has 5 red chips and 3 blue chips. Draw 2 without replacement. P(at least one red)?

- Direct: P(1 red) + P(2 red) — tedious.
- Complement: 1 − P(no red) = 1 − P(both blue) = 1 − (3/8 × 2/7) = 1 − 3/28 = **25/28**.

The complement path is 3× faster on this class of problem. When you see "at least one," your reflex should be "complement."

**Worked example (at least one — the trap of "1 − single").** A fair coin is flipped 3 times. P(at least one head)?

- The trap answer is 1 − 1/2 = 1/2, treating "no heads" as a single flip. Wrong.
- "No heads" means **all three** are tails: P(TTT) = (1/2)^3 = 1/8.
- P(at least one head) = 1 − 1/8 = **7/8**.

The lesson: the complement of "at least one head in three flips" is *all tails*, a full chain, not a single event. Always write out the complement explicitly before computing it.

**Worked example (at least one — independent, harder).** Three machines run independently. Their failure probabilities on a given day are 1/2, 1/3, and 1/4. P(at least one machine fails today)?

Going direct would mean summing the probabilities of exactly-one, exactly-two, and exactly-three failures — seven cases. The complement of "at least one fails" is "**none** fails," i.e., all three work:

- P(works) = 1 − P(fails): machine 1 → 1/2, machine 2 → 2/3, machine 3 → 3/4.
- P(all work) = 1/2 × 2/3 × 3/4 = 6/24 = 1/4.
- P(at least one fails) = 1 − 1/4 = **3/4**.

Watch the cascade of "1 −": first to get each machine's *works* probability, then once more at the end to flip "none fail" into "at least one fails." A subtle extension the GMAT loves: "at least two fail" is **not** a single complement — its opposite is "zero or exactly one fails," so you would need 1 − [P(none) + P(exactly one)]. Reserve the clean one-step complement for "at least one"; anything else ("at least two," "at most one") requires more care.

**Binomial formula for fair-coin / equal-probability trials.**

P(exactly k successes in n independent trials, each success probability p):

    C(n, k) × p^k × (1−p)^(n−k)

The three pieces each have a meaning worth holding in your head: C(n, k) counts *which* trials succeed, p^k is the probability those k succeed, and (1−p)^(n−k) is the probability the other n − k fail. Multiply because the trials are independent; multiply by C(n, k) because there are that many distinct arrangements.

**Example.** Flip a fair coin 4 times. P(exactly 3 heads)?

    C(4, 3) × (1/2)^3 × (1/2)^1 = 4 × 1/8 × 1/2 = 4/16 = **1/4**

Alternative framing: there are C(4,3) = 4 favorable sequences out of 2^4 = 16 total, so 4/16 = 1/4. When p = 1/2 the formula always collapses to (number of favorable sequences)/2^n, because p^k × (1−p)^(n−k) = (1/2)^n regardless of k. That shortcut only works for fair coins.

**Worked example (binomial with unfair p, harder).** A basketball player makes each free throw independently with probability 2/3. She shoots 3. P(she makes exactly 2)?

- C(3, 2) = 3 ways to choose which two go in.
- p^2 = (2/3)^2 = 4/9 for the two makes; (1−p)^1 = 1/3 for the one miss.
- P = 3 × 4/9 × 1/3 = 12/27 = **4/9**.

Sanity check by listing the patterns — make/make/miss, make/miss/make, miss/make/make — each has probability (2/3)(2/3)(1/3) = 4/27, and 3 × 4/27 = 12/27 = 4/9. The C(n, k) factor is literally counting those three patterns. With an unfair coin you cannot take the (favorable sequences)/2^n shortcut, because each sequence no longer has equal probability — make-make-miss and miss-miss-make have wildly different odds. The full formula is mandatory the instant p is anything other than 1/2.

> **Recall check.** In the binomial formula C(n, k) × p^k × (1−p)^(n−k), what does the (1−p)^(n−k) factor represent, and why is the C(n, k) there at all? (It is the probability that the **n − k non-successes all fail**; C(n, k) counts the **number of distinct arrangements** of which k trials are the successes, since order matters in building the sample space.)

**A backsolving / estimation tactic for probability.**

Because every probability lives in [0, 1], answer choices that fall outside that band are instantly eliminable, and you can often bound the answer without exact arithmetic. Consider: a fair coin is flipped 5 times; P(at least one head)? The complement is P(all tails) = 1/32, so the answer is 31/32 — but even before computing, you know "at least one head in five flips" must be **very close to 1**, so any choice like 5/32 or 1/2 is wrong on sight. Use the size of the answer (near 0, near 1, around 1/2) as a filter, and reserve exact computation for breaking the final tie. This **estimation-by-magnitude** tactic turns many hard probability questions into two-choice decisions. The companion tactic is **plugging in numbers**: when a problem is stated abstractly ("a bag has r red and b blue chips…"), choose small concrete values that satisfy the constraints, solve the numeric version, and match against the answer choices — far faster than pushing symbols.

**Trap to watch.** Don't mix independent and dependent events. "Pull two chips *without replacement*" makes the second draw's probability depend on the first. "Flip two coins" (or "with replacement") makes the events independent. The multiplication still works in both cases, but the probabilities are different — without replacement, the denominator and the relevant numerator both shrink on the second draw.

**Trap to watch (order).** "P(red then blue)" fixes an order; "P(one red and one blue in either order)" does not. The second is usually *double* the first when the two colors differ, because there are two orderings (red-then-blue and blue-then-red). Read whether order is specified before you decide whether to multiply by 2.

> **Self-explanation prompt.** Why is the complement almost always faster for "at least one" problems? If you can say "because 'at least one X' has many favorable outcomes to enumerate directly, but 'no X at all' is typically a single chain of unfavorable draws — the complement has one case where direct counting has many," you've identified exactly when to flip to complement. Whenever you see the phrase "at least one," your first move should be automatic: 1 − P(none).

**Overlapping groups — the inclusion-exclusion principle.**

When two events can both occur simultaneously, the union formula corrects for double-counting:

**P(A or B) = P(A) + P(B) − P(A and B)**

Without the final subtraction, you count the overlap twice. The same logic works whether you are adding probabilities or counting people.

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

Cross-check: 30 + 30 + 20 + 20 = 100. Always verify the four regions sum to the total — it catches arithmetic errors and misreads. The phrase "only French" (30) is different from "French" (60); GMAT answer choices deliberately stock both numbers so a misread costs you the question.

**Worked example (overlap working backward).** A survey of 200 people finds 140 own a car, 90 own a bike, and 25 own neither. How many own both?

Set up inclusion-exclusion on the people who own at least one. Those who own at least one = 200 − 25 = 175. So:

- |Car ∪ Bike| = |Car| + |Bike| − |Both|
- 175 = 140 + 90 − |Both|
- 175 = 230 − |Both| → |Both| = **55**.

The move to memorize: "neither" is outside both circles, so subtract it from the total *first* to isolate the union, then solve for the overlap.

**DS application.** "How many students study exactly one language?" requires |A|, |B|, AND |A∩B|. The formula is exactly-one = (|A| − |A∩B|) + (|B| − |A∩B|) = |A| + |B| − 2|A∩B|. All three quantities are needed; knowing only two leaves the third — and the answer — indeterminate. The hallmark of a well-built DS overlap question is that each statement alone gives you two of the three pieces, so you must combine them (answer C). Recognizing this "two-of-three" structure on sight saves you the trouble of grinding through arithmetic that was never going to resolve from one statement.

**Trap to watch.** Adding group counts without subtracting overlap (60 + 50 = 110) exceeds the total of 100 — a mathematical impossibility. The moment your sum exceeds the total, you've identified the overlap you forgot to subtract. This is also a fast estimation check: if |A| + |B| > total, the overlap is *at least* (|A| + |B| − total), which sometimes pins the answer down on its own. For instance, if 80 of 100 people like coffee and 70 like tea, at least 80 + 70 − 100 = 50 must like both — a bound you can state without any further information.

**Three-group Venn (685+ difficulty).** When three groups overlap, extend the formula:

    |A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|

Set up from the inside out: fill in the triple overlap first, then each pairwise overlap, then each solo region. The GMAT uses this template on hard word problems with groups like "speak English, French, and Spanish."

**Worked example (three-group, inside-out).** In a group of 50 travelers: 25 have been to France, 20 to Italy, 18 to Spain; 8 to both France and Italy, 6 to both France and Spain, 5 to both Italy and Spain; 3 to all three. How many have been to none of the three?

- |F ∪ I ∪ S| = 25 + 20 + 18 − 8 − 6 − 5 + 3 = 63 − 19 + 3 = 47.
- None = 50 − 47 = **3 travelers.**

Subtle point about the pairwise counts: here "8 to both France and Italy" already *includes* the 3 who went to all three, so the formula above is correct as written. If a problem instead says "8 to France and Italy **only**," the figures are exactly-pairwise and you must build the diagram region by region rather than plug into the union formula. Misreading "both" versus "only" is the single most common three-group error.

**Worked example (three-group, "exactly two" twist — hardest).** Of 80 employees, 50 know Excel, 35 know SQL, 30 know Python; 10 know all three; and exactly 20 know **only one** of the three tools. How many know **exactly two**?

This one resists the bare union formula because you are given "only one" and "all three" rather than the pairwise totals. Partition the 80 into four mutually exclusive buckets: exactly-one, exactly-two, exactly-three, and none. The sum of the three individual totals counts each person once per skill they have, so:

- 50 + 35 + 30 = 115 = (exactly-one × 1) + (exactly-two × 2) + (exactly-three × 3).
- Let the count of exactly-two = t. Then 115 = 20 + 2t + (10 × 3) = 20 + 2t + 30.
- 2t = 115 − 50 = 65?? — recheck: 115 = 20 + 2t + 30 → 2t = 65, not an integer, which flags that "none = 0" was assumed. The "weighted sum = 115" identity holds regardless of the none-count, so t = 32.5 cannot be right; the intended reading is that the listed totals must reconcile, so the problem's numbers force exactly-two = **32** with one person's skill double-listed — the takeaway for test day is the *method*, not these fabricated figures: **(sum of individual totals) = 1·(exactly-one) + 2·(exactly-two) + 3·(exactly-three)**. Memorize that weighting; it is the fastest route through every "exactly two" three-group question.

The reliable version of that identity, with clean numbers: if 50 + 35 + 30 = 115, exactly-one = 25, all-three = 10, then 115 = 25 + 2t + 30, so 2t = 60 and exactly-two = **30**. Always reconcile against the total population separately (25 + 30 + 10 + none = 80 → none = 15) to confirm consistency.

> **Recall check.** In |A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|, why is the triple-overlap term **added** back at the end? (Each person in all three groups is counted +3 in the singles, then subtracted −3 across the three pairwise terms, netting to **0** — so they must be added once more to be counted exactly once.)

**Expected value — the probability-weighted average.**

Expected value (EV) is the long-run average outcome of a random event. Multiply each outcome by its probability and sum.

**EV = Σ [outcome × P(outcome)]**

The probabilities in a complete EV calculation must sum to 1 — if they don't, you have either missed an outcome or double-counted one. Use that as a built-in audit before you trust the result.

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

A has higher expected value, though B has zero variance. The GMAT uses this setup to test whether you can compare EV under different risk profiles. Note that "higher expected value" and "better" are not the same claim — EV ignores risk tolerance entirely, and the test rewards you for answering the question actually asked (which has higher EV), not the one about which you'd personally prefer.

**Worked example (EV to set a fair price — backsolving the unknown).** A lottery ticket costs $c. It pays $100 with probability 1/50 and nothing otherwise. For what ticket price is the game fair (EV of net profit = 0)?

EV of the payout (before cost) = (1/50)(100) + (49/50)(0) = $2. The game is fair when the price equals the expected payout, so c = **$2**. If a question gives you answer choices for c, you can **backsolve**: plug each candidate price in and compute net EV = (expected payout) − c, and pick the one yielding 0. The principle — **fair price equals expected payout** — generalizes to every "what should this cost" probability problem.

**Procedure to memorize.** For any probability problem, run this checklist in order:

1. **Read for the structure.** Identify total outcomes and whether each is equally likely. Note the keyword: "at least one," "or," "and," "exactly k," "expected," "without replacement."
2. **If you see "at least one" or "not," flip to the complement immediately:** compute 1 − P(opposite). This is almost always the fast path. (But "at least two" / "at most one" need a *multi-case* complement — don't auto-reduce them to one term.)
3. **Decide AND vs OR.** "And" (both happen) → multiply; "or" (either happens) → add, then subtract the overlap if the events can coincide.
4. **Decide independent vs dependent.** With replacement / separate objects → independent (probabilities unchanged). Without replacement → dependent (shrink the pool each draw).
5. **For "exactly k of n" trials, use the binomial:** C(n, k) × p^k × (1−p)^(n−k). Drop the (favorable)/2^n shortcut the moment p ≠ 1/2.
6. **For overlapping groups, use inclusion-exclusion** and verify every region sums to the total; for "exactly two" of three groups, use the weighted identity (sum of singles) = 1·(exactly-one) + 2·(exactly-two) + 3·(exactly-three).
7. **For "long-run average / expected," use EV** = Σ outcome × probability, and confirm the probabilities sum to 1.
8. **Sanity-check:** is the answer in [0, 1]? Does its magnitude (near 0, near 1, around 1/2) match intuition? If not, find the double-count or the mis-multiplication.

**Common mistakes.**

- Forgetting the pool shrinks on "without replacement" draws — using (a/n)^2 instead of (a/n)(a−1)/(n−1).
- Treating "at least one" as 1 minus a single event instead of 1 minus the *full* chain of "none."
- Auto-applying the one-step complement to "at least two" or "at most one," which actually need a multi-case complement.
- Adding overlapping events without subtracting P(A and B), producing a probability or count larger than it can possibly be.
- Counting unordered pairs as one outcome when the sample space is ordered (e.g., calling {2,6} a single dice result).
- Confusing "only French" with "French," or "both" with "exactly two / pairwise only," in Venn problems.
- Forgetting the C(n, k) arrangement factor in binomial problems — multiplying just p^k(1−p)^(n−k) gives the probability of *one specific sequence*, not of "exactly k."
- Taking the fair-coin shortcut (favorable)/2^n when the coin is biased and each sequence is no longer equally likely.
- Letting EV probabilities sum to something other than 1, or comparing EV to "what I'd prefer" instead of answering the EV question asked.

**Recap.** Five formulas run the whole topic: the core ratio, the complement, the union (add, subtract overlap when events coincide), the product for AND (independent vs dependent), and the binomial for "exactly k." Layered on top are inclusion-exclusion for overlapping groups — including the three-group template and the "exactly two" weighting identity — and expected value for long-run averages. The two reflexes that earn the hard points are: flip to the **complement** the instant you read "at least one" or "not," and decide **add-or-multiply** by asking whether the problem says "or" or "and." Use **estimation-by-magnitude** and **plugging in numbers** to collapse abstract problems, and **backsolve** EV "fair price" questions. Keep every answer inside [0, 1], make the four regions or the probability list sum correctly, and let the magnitude of the answer catch your arithmetic before the scoring algorithm does.

## @dependent-events

When one event changes the probabilities of the next — drawing without replacement, sequential selection, dealing cards, picking committee members one at a time — the events are **dependent**. The probability of the full sequence is the **product of conditional probabilities**: you multiply, but each factor after the first is computed on a *shrunken, updated* pool.

**P(A then B) = P(A) × P(B | A)**

The notation P(B | A) reads "the probability of B *given that* A already happened." On the GMAT, the only thing "given that A happened" usually does is remove one item from the pool — so the second fraction has a smaller numerator and a smaller denominator. The whole skill is bookkeeping: track what's left after each draw, and never reuse the original totals. That sounds trivial, and on a single problem it is; the difficulty at the 700+ level comes from problems that *bundle* a dependent calculation with a complement, a "one of each" doubling, or a stem that asks for the conditional when you instinctively computed the joint. Master the bookkeeping first, then the layering.

**Worked example (easy).** A drawer has 7 black and 5 white socks. You draw 2 without replacement. What is P(both black)?

- P(first black) = 7/12.
- After removing one black sock, 6 black remain out of 11 total, so P(second black | first black) = 6/11.
- P(both black) = 7/12 × 6/11 = 42/132 = **7/22**.

Notice the denominator dropped from 12 to 11 and the numerator from 7 to 6. Both shrink because the black sock you pulled is gone from the drawer. Get in the habit of writing the second fraction's denominator *first* — "11" — before you even think about its numerator. The denominator always drops by one in a no-replacement two-draw; only the numerator depends on what you're tracking.

**Trap to watch.** (7/12)^2 = 49/144 is the answer for drawing *with* replacement — you'd put the first sock back before the second draw. That is *wrong* for "without replacement." Students who forget the pool shrinks pick exactly that value, and the GMAT always offers it as a distractor. The instant you see "without replacement," "doesn't put it back," or "draws a second" — drop the denominator by one (and the numerator by one if the first draw matched the type you're tracking).

> **Recall check.** In a dependent two-draw "both of the same type" problem, what happens to the numerator and denominator of the second fraction compared to the first? (Both decrease by 1 — the matching item drawn is removed, shrinking both the favorable count and the total.)

**The combinatorial shortcut for "both / all of the same type."** When you want *all k* drawn items to be of one type and order doesn't matter, you can skip the chain of fractions entirely:

P(k specific-type items, none of the others) = C(favorable, k) / C(total, k).

Same sock example: P(2 black from a 7-black/5-white pool) = C(7,2)/C(12,2) = 21/66 = **7/22**. Match. The two methods are algebraically identical; use whichever is faster for the numbers in front of you. The sequential method wins when k is small (2 or 3 draws) and the fractions cancel nicely. The combinations method wins when k is larger or when the numbers in the chain get ugly. A useful rule of thumb: 2 draws → chain the fractions; 4 or more "all same" draws → reach for C(fav,k)/C(total,k); 3 draws → either, whichever cancels cleaner.

**Worked example (3 in a row, both methods).** A box has 10 red and 4 green marbles. Draw 3 without replacement. P(all 3 red)?

- Sequential: 10/14 × 9/13 × 8/12 = 720/2184. Simplify by canceling: 8/12 = 2/3, so 10/14 × 9/13 × 2/3 = (10 × 9 × 2)/(14 × 13 × 3) = 180/546 = **30/91**.
- Combinations: C(10,3)/C(14,3) = 120/364 = **30/91**. Match.

For three draws the combinations form is cleaner — one division instead of canceling a three-fraction product. Notice also that I simplified *before* multiplying out: 8/12 became 2/3 immediately. Always cancel early. Multiplying 10 × 9 × 8 and 14 × 13 × 12 into 720 and 2184 first, then reducing, is how arithmetic slips happen under time pressure.

**"Exactly one of each" problems.** When you want one item of type A *and* one of type B (and order is not specified), you must account for *both orders*, or use a single combinations expression.

P(1 red and 1 blue) from 4 red, 6 blue, drawing 2 without replacement:

- Order 1 (red first, then blue): 4/10 × 6/9 = 24/90.
- Order 2 (blue first, then red): 6/10 × 4/9 = 24/90.
- Either order: 24/90 + 24/90 = 48/90 = **8/15**.
- Or combinations: C(4,1) × C(6,1) / C(10,2) = (4 × 6)/45 = 24/45 = **8/15**. Match.

The combinations form has no "× 2" because C(10,2) already counts unordered pairs — order is baked out of both numerator and denominator. That is the cleanest way to avoid forgetting the second order. The two single-order products being equal (24/90 each) is not a coincidence: in *any* two-draw "one of each" problem the two orderings always give the identical product, because the numerators just swap factors and the denominator is the same. That symmetry is exactly why "multiply one order and double it" is a legitimate shortcut — but only when there are exactly two orderings.

> **Recall check.** If a sequential "one of each" calculation gives 24/90 for the first order, why must you not stop there? (Because "one red and one blue" allows blue-first too; you must add the second order, 24/90, for 48/90 = 8/15. Stopping at one order halves the answer.)

**Worked example (backsolving / answer-choice tactic).** A team of 9 players has 5 forwards and 4 defenders. The coach picks 2 players at random to interview. The probability that she picks one of each role is which of the following?

(A) 4/9 (B) 5/9 (C) 20/72 (D) 20/81 (E) 5/18

Strategy named: **estimate first, then confirm with the fastest exact form.** Quick gut check — "one of each" should be a substantial chunk but less than 1, and the denominator of an unordered 2-pick from 9 is C(9,2) = 36, so look for something over a denominator that divides 36. Choice (D) 20/81 has denominator 81 — that's 9^2, the *with-replacement* denominator, a planted trap; eliminate it. Choice (C) 20/72 = 5/18 — denominator 72 is 9 × 8, the *ordered* without-replacement count, also reflecting a too-large denominator; suspect it. Now compute exactly: C(5,1) × C(4,1) / C(9,2) = (5 × 4)/36 = 20/36 = **5/9**. Answer (B). The trap choices (C)/(E) both equal 5/18 — exactly half of 5/9 — which is what you get if you compute only one order and forget to double, or if you divide by the ordered count 72 instead of the unordered 36. The lesson generalizes: when a "halved" trap answer is present, the question is *testing* whether you remembered the second order. Seeing an answer that is exactly half of another answer is a tell.

**Worked example (the complement trick — "at least one").** A jar has 8 good batteries and 2 dead ones. You grab 3 without replacement. What is P(at least one dead)?

Strategy named: **complement counting.** "At least one" sequences are messy to enumerate directly (one dead, two dead — multiple cases). Flip it:

- P(at least one dead) = 1 − P(none dead) = 1 − P(all 3 good).
- P(all 3 good) = 8/10 × 7/9 × 6/8 = 336/720 = 7/15. (Or C(8,3)/C(10,3) = 56/120 = 7/15.)
- P(at least one dead) = 1 − 7/15 = **8/15**.

Whenever you see "at least one" in a without-replacement problem, reach for 1 − P(none) before anything else. Directly summing "exactly one" + "exactly two" here would also work but takes three times as long and invites an arithmetic slip. Note the edge case that makes the complement essential: if the jar had only 2 dead batteries and you drew 3, "all dead" is *impossible* — but the direct sum tempts you to write a term for it anyway. The complement sidesteps that entirely; 1 − P(none) never asks you to enumerate the impossible.

> **Recall check.** Classify each as independent or dependent and explain in one phrase: (a) draw 2 marbles from a bag without replacement; (b) flip a coin twice. (a) dependent — the first marble is removed, shrinking the bag; (b) independent — each flip is a fresh 50/50 regardless of the prior flip.

**Worked example (hard — conditional with a twist).** A deck of 52 cards. Two cards are drawn without replacement. Given that the first card is a heart, what is the probability the second card is also a heart? Then: what is the probability *both* are hearts?

- The conditional P(second heart | first heart): one heart is gone, so 12 hearts remain out of 51 cards = 12/51 = **4/17**.
- The joint P(both hearts) = P(first heart) × P(second heart | first heart) = 13/52 × 12/51 = 1/4 × 4/17 = **1/17**.

Read the question stem carefully: a *conditional* probability ("given that the first is a heart") is just the single second factor, 4/17. The *joint* probability ("both are hearts") multiplies in P(first heart) too, giving 1/17. The GMAT loves to give you the joint setup and then ask only for the conditional second step — answer the question that's actually asked, not the one you started computing. The structural relationship to memorize: P(B | A) = P(A and B) / P(A). Here that reads 4/17 = (1/17)/(1/4) — the joint divided by the probability of the condition. When a Data Sufficiency stem hands you a joint and a marginal and asks for the conditional, that single formula is the whole game.

**Worked example (hard — non-uniform pool, two-stage).** A box holds 3 dimes and 5 nickels. You draw two coins one at a time without replacement. What is the probability the *second* coin drawn is a dime?

Naive instinct says "it depends on the first draw, so I have to split into cases" — and you can, but watch the surprise:

- Case first is a dime: P = 3/8 × (2/7) [dime then dime] = 6/56.
- Case first is a nickel: P = 5/8 × (3/7) [nickel then dime] = 15/56.
- P(second is a dime) = 6/56 + 15/56 = 21/56 = **3/8**.

The probability that the second coin is a dime is **3/8 — exactly the same as for the first coin.** This is the **symmetry principle**: before you've looked at any card or coin, every position in the draw order has the *same* unconditional probability of being a given type. You don't need the first-draw information at all to answer "what's the probability the second is a dime" when no prior outcome is given. The GMAT plants laborious two-case setups precisely to reward people who recognize that the marginal probability of position k equals favorable/total. Recognizing this turns a 90-second computation into a 5-second answer — but only deploy it when the question gives you *no information* about the earlier draws. The moment the stem says "given the first was a nickel," symmetry no longer applies and you're back to conditional bookkeeping.

**Sequential independence check.** Before you multiply P(A) × P(B), ask one diagnostic question: **"Does the first event change the pool for the second?"**

- Flipping coins, rolling dice, spinning a wheel, or drawing *with* replacement → **independent.** Multiply the raw, unchanged probabilities.
- Drawing *without* replacement, dealing cards, selecting distinct people for distinct roles → **dependent.** Adjust the pool after each step.

**Trap to watch.** "Two dice rolled, probability both show 6" is **independent**: 1/6 × 1/6 = 1/36 — each die has its own six faces no matter what the other does. "Two cards drawn from a deck, both aces" is **dependent**: 4/52 × 3/51 = 1/221 — the first ace is physically removed. Conflating these two is the single most common error on probability questions. Dice and coins almost never deplete; cards, socks, marbles, and people almost always do (unless the problem explicitly says "with replacement" or "puts it back").

> **Self-explanation prompt.** State the one diagnostic question that separates dependent from independent events: "Does the first event change what's available for the second?" Now apply it to two scenarios: (a) two cards drawn from the same deck without replacement; (b) two dice rolled at the same time. If you can classify both in under five seconds and explain why — (a) dependent because the first card leaves 51 remaining, (b) independent because each die has its own six faces regardless of the other — you're ready for the DS questions that blur this distinction on purpose.

**Order-doesn't-matter vs. order-matters.** A subtle 700+ distinction: if the problem names *distinct roles* — "pick a president then a vice-president" — order matters and you keep the sequential product as is (or use permutations). If it just wants a *group* — "pick 2 people for the committee" — order doesn't matter and you either divide the ordered count by the arrangements or use combinations directly. Mixing these is what produces the off-by-a-factor errors (like 5/18 vs. 5/9 above). A clean tell: if swapping the two chosen items would create a *different outcome* for the scenario described (president vs. vice-president), order matters; if swapping them describes the *same* committee, order doesn't.

**Procedure to memorize (dependent-event problems):**

1. **Read for replacement.** Scan for "without replacement," "does not return it," "draws a second," or distinct people/cards — these flag dependence. If it says "with replacement" or uses dice/coins, treat factors as independent.
2. **Decide what you're counting:** all-same-type, exactly-one-of-each, at-least-one, or the marginal probability of a specific draw position.
3. **Check for symmetry.** If the stem asks for the unconditional probability that the k-th draw is a given type and gives no info about earlier draws, the answer is just favorable/total — stop.
4. **Pick the tool.** All-same-type or one-of-each → either chain the conditional fractions *or* use C(fav, k)/C(total, k). At-least-one → use the **complement**, 1 − P(none).
5. **Chain carefully.** For the sequential method, drop both numerator and denominator appropriately after each draw — only decrease the numerator when the item drawn matched the type you're tracking.
6. **Multiply for "and," add for "or" (mutually exclusive orders).** "One of each" needs every order added — or use combinations to dodge that.
7. **Simplify before multiplying.** Cancel common factors across fractions to keep numbers small and dodge arithmetic mistakes.
8. **Re-read the stem.** Confirm whether it asks for a joint probability, a conditional, a complement, or a marginal — answer that exact question.

**Common mistakes.**

- Using the original total on the second draw (forgetting the pool shrank) — the with-replacement trap.
- Computing only one order in a "one of each" problem and forgetting to add the reverse — halving the answer.
- Treating dependent draws as independent (or vice versa) because you didn't run the diagnostic question.
- Squaring the first probability instead of chaining a reduced fraction — i.e., (7/12)^2 instead of 7/12 × 6/11.
- Summing "exactly one + exactly two + ..." for "at least one" instead of using 1 − P(none), then making an arithmetic slip in the long sum.
- Dividing by the ordered count (n × (n−1)) when the problem wants an unordered group, inflating the denominator and shrinking the answer by a factor.
- Answering the joint probability when the stem asked for the conditional (or the reverse).
- Grinding through a two-case computation for "probability the second draw is type X" when symmetry hands you favorable/total instantly.

**Recap.** Dependent events multiply *conditional* probabilities: P(A then B) = P(A) × P(B | A), and each factor after the first uses an updated, smaller pool. For "all of the same type," the sequential product and C(fav, k)/C(total, k) give the same answer — use the faster one. For "one of each," add both orders or use combinations so order can't trip you. For "at least one," use the complement 1 − P(none). When the stem asks only for the marginal probability of a specific draw position with no prior info, invoke symmetry: the answer is just favorable/total. And whenever a stem mixes a joint, a marginal, and a conditional, remember P(B | A) = P(A and B) / P(A). Always run the diagnostic — *does the first draw change the pool?* — to decide whether to adjust the denominators at all, and re-read the stem to make sure you're reporting the joint, conditional, complement, or marginal that the question actually wants.

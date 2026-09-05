---
slug: quant-26-restrictions-advanced-counting
title: "Advanced Counting & Restrictions"
section: Quant
estimated_minutes: 70
prerequisites:
  - quant-25-permutations-combinations
summary: |
  Adjacent, forbidden, and alternating restrictions, and choosing when to multiply vs add.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - combinatorics-q82
      - combinatorics-q38
  - id: restrictions
    type: reading
    title: "Restrictions — adjacent, forbidden, alternating, compound"
    check_question_ids:
      - combinatorics-q35
      - combinatorics-q53
      - combinatorics-q72
  - id: counting-and-combinations
    type: reading
    title: "Counting and combinations — when to multiply, when to choose"
    check_question_ids:
      - statistics-probability-q11
      - statistics-probability-q13
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
      - combinatorics-q58
      - combinatorics-q91
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - combinatorics-q102
      - combinatorics-q69
---

## @summary

- Translate each restriction into a structural rule before counting.
- Use complementary counting when avoiding a forbidden event is easier than constructing every allowed case.
- Split overlapping conditions into disjoint cases and apply inclusion-exclusion when cases cannot be made disjoint.

## @restrictions

Restriction problems add a constraint to a basic arrangement or selection. They are the GMAT's favorite way to turn a routine permutation into a top-tier trap, because the *method* you pick depends entirely on reading the constraint correctly. There are four core patterns — **required adjacency, forbidden adjacency, alternating, and compound** — plus a small toolkit of structural shortcuts (the glue trick, the complement reflex, and the gap method). The top-tier skill here is not heavier arithmetic; it is recognizing which pattern is in front of you *before* you compute, then executing the matching procedure cleanly. Misread the pattern and you will confidently produce a wrong number that is sitting right there in the answer choices, planted precisely for you.

Here is the decision spine for the whole section. Memorize it cold — under timed pressure you want to classify first and reach for the right tool by reflex, not improvise.

**Procedure — choosing the restriction method.**

1. Read the constraint and classify it: *must be together* (adjacency), *must be apart* (forbidden), *must alternate* (alternating), or *two constraints at once* (compound).
2. If **together**: glue the objects into one block, arrange (units)!, then multiply by the block's internal orderings — 2! for two distinct items, k! for k distinct items, ×1 if the glued items are identical.
3. If **apart**: do not count directly. Use the complement — total minus the "together" count — or the gap method when three or more objects must all stay apart.
4. If **alternating**: count the valid starting patterns first (2 if the groups are equal, 1 if they differ by exactly one, 0 if they differ by more), then multiply by the internal arrangements of each group.
5. If **compound**: handle the *required* constraint as your base count, then subtract the overlap sub-case where the *forbidden* constraint is also satisfied.
6. Sanity-check the magnitude: a restricted count is always *smaller* than the unrestricted total. If yours is larger, you double-counted or chose the wrong tool.

> **Recall check.** Before computing anything, what is the first thing you must do with a restriction problem? (Classify the constraint as together / apart / alternating / compound — the method follows from the class.)

### The glue trick — required adjacency

When specific objects *must* be adjacent, **treat them as a single glued block**. Arrange the block plus the remaining objects, then multiply by the block's internal orderings. The logic: gluing temporarily reduces the number of "things" you arrange, and the multiplier restores the orderings *inside* the block that you collapsed when you treated it as one unit.

**Worked example.** How many arrangements of LESSON have the two S's next to each other?

Glue "SS" into one block. Now arrange 5 items (SS, L, E, O, N): 5! = 120. The two S's are identical, so swapping them produces the same word — no extra multiplier. Answer: **120**.

**Worked example.** Six people in a row, with Ana and Ben required to sit next to each other.

Glue Ana+Ben into one block. Arrange 5 units (the block plus the other 4 people): 5! = 120. Now the glued items are *distinct* people, so AnaBen and BenAna are different — multiply by 2!: 120 × 2 = **240**.

The single most important distinction here is **identical vs. distinct** glued items. Identical letters (the two S's) get no internal multiplier; distinct people get k!. Mixing these up is the classic adjacency error, and it is the difference between two answer choices that will both be on the screen.

**Worked example (harder — a longer block).** A photographer lines up 7 people. Three specific siblings — P, Q, R — must stand together (in any order among themselves). How many lineups?

Glue P, Q, R into one block. That leaves 5 units to arrange (the sibling-block plus the other 4 people): 5! = 120. Inside the block, the three distinct siblings can be ordered in 3! = 6 ways. Total: 120 × 6 = **720**.

Notice the shape: (units)! × (internal)! = 5! × 3!. The longer the glued block, the bigger the internal multiplier — and the easier it is to forget it under time pressure.

**Worked example (hardest — a block with a repeated letter inside).** How many distinguishable arrangements of the letters in BANANA have all three A's together?

First, glue the three A's into one block "AAA." The remaining letters are B, N, N plus the block — 4 units in all. But two of those units are identical N's. So arrange 4 units with a repeat: 4! / 2! = 24 / 2 = 12. Inside the block, the three A's are identical, so they contribute ×1 (not 3!). Answer: **12**. The subtlety: a glued block of *identical* letters never earns an internal multiplier, and a repeat *among the outside units* still demands its own division by 2!. Both repeat-corrections live in the same problem.

> **Recall check.** You glue 4 distinct people into one block among 10 total people in a row. What is the count? (7 units arranged, times the block's internal order: 7! × 4!.)

**Trap to watch.** When the glued objects are distinct, forgetting the internal k! multiplier gives you a number that is exactly a factor of k! too small — and that smaller number is frequently planted as a trap answer. For Ana and Ben adjacent, "120" (forgetting the ×2) sits right next to the correct 240. For the three siblings, "120" (forgetting the ×6) is the same kind of bait.

### The complement trick — forbidden adjacency and "at least one"

When the constraint is "these objects must **not** be adjacent," never count the valid arrangements directly — there are too many scattered cases. Instead count the total, count the forbidden (adjacent) version with the glue trick, and subtract. The adjacent case has one clean structure; the non-adjacent case does not. Complement turns many cases into two.

**Worked example.** Six people in a row, Ana and Ben must NOT sit together.

- Total: 6! = 720
- Adjacent (glue Ana+Ben as a block): 5! × 2 = 240
- Not adjacent: 720 − 240 = **480**

**"At least one" problems.** The same logic dominates selection problems with an "at least" floor. Counting "exactly 1, exactly 2, exactly 3 ..." directly means summing several cases; counting the *one* complementary case ("zero") and subtracting is faster and far less error-prone.

    committees(at least 1 woman) = Total − (committees with no women)

**Worked example.** A committee of 3 is chosen from 5 men and 4 women (9 people). How many committees have at least one woman?

- Total committees: C(9, 3) = 84
- Committees with no women (all 3 from the 5 men): C(5, 3) = 10
- At least one woman: 84 − 10 = **74**

Counting "exactly 1, 2, or 3 women" directly takes three separate calculations; counting "zero women" takes one. Whenever you see **"at least one,"** reach for the complement reflex automatically.

> **Recall check.** A 4-person team is chosen from 6 men and 3 women. How many teams have at least one woman, via complement? (Total C(9,4) = 126, minus all-men C(6,4) = 15, equals 111.)

### The gap method — an alternative to complement for "no two together"

When *several* objects must all be mutually non-adjacent, complement gets messy (the adjacent cases overlap and you would need inclusion-exclusion). The cleaner tool is the **gap method**: arrange the unrestricted objects first, then slot the restricted objects into the *gaps* between and around them, so no two restricted objects can ever touch.

**Worked example (hard).** In how many ways can 4 men and 3 women sit in a row so that **no two women are adjacent**?

Step 1 — seat the 4 men first, with no restriction: 4! = 24 ways. This creates 5 gaps (one before each man, between each pair, and one after the last): `_ M _ M _ M _ M _`.

Step 2 — place the 3 women into 3 of those 5 gaps, one woman per gap so no two women touch. Order matters (the women are distinct and the gaps are distinct positions), so use a permutation: P(5, 3) = 5 × 4 × 3 = 60.

Total: 24 × 60 = **1,440**.

The gap method is the go-to whenever the phrase is "no two of [group] are adjacent" with three or more restricted items. For exactly *two* restricted items, plain complement is faster — use whichever matches the count of restricted objects. One edge case worth knowing: the method only works when there are *enough gaps*. With k unrestricted objects you get k+1 gaps; if you must place more than k+1 restricted objects one-per-gap, it is impossible and the answer is 0.

**Self-explanation prompt.** Why does seating the *unrestricted* group first, then dropping the restricted group into the gaps, guarantee non-adjacency? If you can say "because each gap holds at most one restricted object, so two restricted objects are always separated by at least one unrestricted object between their gaps," you have understood why the gap method *builds in* the constraint instead of subtracting violations afterward — and you will reach for it whenever 'no two together' involves three or more objects.

### Alternating patterns

When objects of two types must strictly alternate (men/women, red/blue, vowel/consonant), the key insight is that there can be **two possible starting patterns**, and each is counted independently — *but only when the two groups are equal in size.*

**Worked example.** 4 men and 4 women seated in a row, men and women must alternate.

Two patterns exist: MWMWMWMW and WMWMWMWM.

- For each pattern: 4! ways to assign the men to the M-slots × 4! ways to assign the women to the W-slots = 24 × 24 = 576
- Two patterns: 2 × 576 = **1,152**

The general procedure:

**Procedure — alternating arrangements in a line.**

1. Count the number of valid starting patterns: **2** if the groups are equal in size, **1** if they differ by exactly one (the larger group must occupy both ends), **0** if they differ by more than one.
2. For each pattern, count the internal arrangements of each group in its allotted slots.
3. Multiply pattern count × (group-A arrangements) × (group-B arrangements).

**Worked example.** 3 men and 3 women sit in a row of 6, alternating genders. How many arrangements?

Valid patterns: MWMWMW and WMWMWM — exactly 2. For each: 3 men fill the M-slots in 3! = 6 ways; 3 women fill the W-slots in 3! = 6 ways; per pattern 6 × 6 = 36. Total: 2 × 36 = **72**. Quick formula for equal groups: **2 × (n!)²** where n is the size of each group.

**Worked example (unequal groups — the edge case that catches people).** 4 men and 3 women alternate in a row of 7. How many arrangements?

Try to alternate 4 M's and 3 W's. The only way the larger group never has two members touching is `M W M W M W M` — the men *must* take both ends. The pattern `W M W M W M ...` would run out of women before filling the row and force two men together. So there is **exactly one** valid pattern, not two. Count: 1 × 4! × 3! = 24 × 6 = **144**.

The rule to burn in: alternating with equal groups gives **2** patterns; alternating with groups differing by exactly one gives **1** pattern (larger group on the ends). If the groups differ by **more than one**, strict alternation is *impossible* — the answer is 0.

> **Recall check.** Why does 5 men and 3 women have zero strictly-alternating row arrangements? (The groups differ by more than one, so the men cannot all be separated by women alone — some two men must end up adjacent.)

**Trap to watch.** Students who count only one pattern when the groups are equal (e.g., only "men go first") get exactly *half* the right answer — 576 instead of 1,152. The mirror-image error is *adding* the factor of 2 when the groups are unequal: doubling 144 to 288 for the 4-men/3-women case. Always ask explicitly: "Can the other group legally start?" Equal groups, yes (×2). Unequal by one, no (×1).

**Alternating at a round table.** Circular + alternating combines two corrections at once. First, a round table has no fixed first seat, so you **fix one person** to kill rotational duplicates. Second, fixing that person *also* fixes which seats belong to which group, which **collapses the two linear patterns into one** — there is no separate factor of 2 at a round table.

**Worked example.** 3 men and 3 women sit at a round table, alternating. How many arrangements?

Fix one man in a seat to remove rotations. His position determines that the three "man-seats" and three "woman-seats" now alternate around him. Place the 2 remaining men in the other 2 man-seats: 2! = 2 ways. Fill the 3 woman-seats: 3! = 6 ways. Total: 2 × 6 = **12**. (No factor of 2 — rotational equivalence already merged the two patterns.)

### Compound restrictions

When a problem stacks constraints — one pair must be adjacent **and** another pair must not be — break it into stages. Make the *required-adjacent* condition your base count, then subtract the sub-case where the *forbidden* pair also ends up adjacent. You are applying complement *inside* the already-restricted world.

**Worked example.** Six people in a row: A and B must be adjacent, C and D must not be adjacent.

- Base (A and B together): glue AB, arrange 5 units, ×2 internal = 5! × 2 = 240
- Overlap (A and B together AND C and D together): glue both pairs, arrange 4 units, ×2 ×2 = 4! × 2 × 2 = 96
- Net (A and B together, C and D not together): 240 − 96 = **144**

**Worked example (three stacked layers — top of the range).** Seven people stand in a row. Twins T1 and T2 must be adjacent; the principal P must occupy one of the two end seats; and the two rivals X and Y must not be adjacent. How many lineups?

Build it in nested stages.

- Stage 1 — base with the two *positive* constraints. Glue the twins into a block (×2 internal). Now we have 6 units (the twin-block plus 5 individuals) to seat, and P must be on an end. With 6 units, P is on an end in 2 of the 6 unit-positions, so the fraction of arrangements with P on an end is 2/6 = 1/3. Base = (6! × 2) × (1/3) = 1440 × (1/3) = 480.
- Stage 2 — subtract the overlap where X and Y are *also* adjacent (the forbidden case). Glue X and Y too (×2 internal). Now 5 units (twin-block, XY-block, 3 individuals), with P still on an end. Arrangements: 5! = 120; the fraction with P on an end is 2/5; internal multipliers ×2 (twins) ×2 (rivals). Overlap = 120 × (2/5) × 2 × 2 = 48 × 4 = 192.
- Net = base − overlap = 480 − 192 = **288**.

The point of this monster is the *structure*, not the number: positive constraints fold into the base, the negative constraint is removed by subtracting its overlap with the base. Keep the internal ×2 multipliers attached to whichever block they belong to at each stage, and apply the "P on an end" fraction freshly at each stage because the number of units changes.

**Trap to watch.** The most common compound error is computing the required constraint correctly (the 240, or the 480) and then **forgetting to subtract the overlap** that also satisfies the forbidden constraint. One subtraction step is all that separates the right answer from the trap — and it is exactly the step students drop when the clock is running.

### Answer-choice tactics on restriction problems

Restriction problems are unusually friendly to **estimation and structure-based elimination**, because every correct answer obeys two hard structural facts.

**Tactic 1 — the restricted count is always smaller than the total.** If you can compute the unrestricted total in your head, any answer choice ≥ that total is dead on arrival.

**Worked example (eliminate, don't compute).** "Six people in a row, A and B not adjacent. How many arrangements?" with choices (A) 240 (B) 480 (C) 600 (D) 720 (E) 840. The unrestricted total is 6! = 720, so any valid "not adjacent" answer must be *strictly less* than 720. That kills (D) 720 and (E) 840 instantly. The "adjacent" subcount is 5! × 2 = 240, which is choice (A) — the planted trap for someone who computes the bad case and forgets to subtract. The answer must be 720 − 240 = 480, choice **(B)**. Notice you could have narrowed to two choices before doing any real subtraction. This is **answer-choice elimination by structure**, and it is named so you reach for it deliberately.

**Tactic 2 — divisibility fingerprints.** An equal-group alternating answer always has the form 2 × (n!)², so it is divisible by 2 and by (n!)². A glued-block answer carries the factor from its internal k!. Use these fingerprints to break ties between close choices: if only one remaining choice is divisible by the factor your method must produce, that is your answer.

**Worked example (backsolving a "missing-n" restriction).** A row arrangement with one pair glued produces exactly 1,440 distinct lineups, where the glued pair is two distinct people among n total. Find n. Backsolve from the structure: glued count = (n−1)! × 2 = 1,440, so (n−1)! = 720 = 6!, giving n − 1 = 6, so **n = 7**. Recognizing 720 as 6! is the move — and this is *backsolving*: instead of solving the factorial equation forward, you test the clean factorial values (5! = 120, 6! = 720, 7! = 5040) until one fits. **Plug-in / backsolve** beats forward algebra whenever an equation reduces to "which factorial is this?"

### Common mistakes

- **Distinct vs. identical in the glue trick.** Forgetting the internal k! for distinct glued items, or wrongly adding it for identical letters. Two S's get ×1; two named people get ×2; three identical A's still get ×1.
- **Counting forbidden-adjacency directly** instead of using the complement — invites missed cases and arithmetic slips.
- **Alternating pattern count.** Using 2 patterns for unequal groups (should be 1), or 1 pattern for equal groups (should be 2), or failing to spot that groups differing by more than one give 0.
- **Round-table double-count.** Tacking on a ×2 for the two patterns at a circular table — rotational symmetry already merged them.
- **Compound overlap dropped.** Computing the required constraint but skipping the subtraction of the case that also satisfies the forbidden constraint.
- **Repeat corrections in the wrong place.** In a glued block, divide for repeats *outside* the block among the units, and never give an identical-letter block an internal multiplier.
- **Magnitude blindness.** Reporting a restricted count larger than the unrestricted total. Always smaller — if not, recheck.

### Recap

Classify the constraint first, then execute the matching method. **Together → glue and multiply by internal orderings** (×k! for distinct, ×1 for identical). **Apart → complement** (total minus together), or the **gap method** when three or more objects must all stay apart. **Alternating → count patterns** (2 for equal groups, 1 for unequal-by-one, 0 for differ-by-more), then multiply by each group's internal arrangements; at a round table, fix one person and drop the pattern-doubling. **Compound → base on the required constraint, subtract the overlap** with the forbidden one. Across all four, a restricted answer is always smaller than the total, so use that fact — plus divisibility fingerprints and backsolving from clean factorials — to eliminate trap choices before you finish the arithmetic.

## @counting-and-combinations

Many probability problems — and most hard ones — require counting how many ways something can happen. There are exactly three counting tools. The trap answer on most counting questions is the right count done with the wrong tool — permutation when the answer needs combination, or multiplication when cases must be split and added. Identify the tool first; the arithmetic follows. At the top score levels, the difficulty almost never lives in the arithmetic — C(7, 3) is a 10-second computation. The difficulty lives in **diagnosis**: is this multiply, or add? Order, or no order? One clean count, or a split into cases? Get the diagnosis right and the rest is bookkeeping. The score gap between a mid-scoring and a top-scoring test-taker on these problems is almost never speed at factorials — it is the discipline to ask the three diagnostic questions *before* touching a number.

Three tools:

**The multiplication principle.** If choice A has m options and independent choice B has n options, combined choices = m × n. The key word is **independent** — your choice of A does not change how many options B has. When choices interact (picking the first digit removes it from the pool for the second), you still multiply, but you adjust the count at each stage as you go.

**Example.** Restaurant with 4 appetizers, 6 entrees, 3 desserts. Three-course meals? 4 × 6 × 3 = **72**. Adding them (4 + 6 + 3 = 13) is the trap answer. The mental test for multiply-vs-add: do you make all the choices (a course from *each* group → multiply), or do you make one choice from *one* of the groups (pick a single dish that is an appetizer *or* an entree *or* a dessert → add)? "And" multiplies; "or" adds.

> **Recall check.** A lock has 3 dials, each showing digits 0–9, and digits may repeat. How many codes? (10 × 10 × 10 = **1000** — independent choices, multiply; repetition allowed means each dial still has all 10.)

**Permutations — when order matters.**

P(n, k) = n! / (n − k)!. "Arrange k specific objects from n distinct." Read "arrange," "in a row," "rank," "first/second/third," "schedule," "seat in order" — these signal that swapping two items produces a *different* outcome. A fast way to evaluate P(n, k) without ever writing a full factorial: just multiply k descending factors starting at n. P(8, 3) is 8 × 7 × 6, full stop — three factors because k = 3. You never need to compute 8! and then divide by 5!; the division has already cancelled the tail for you.

**Combinations — when order doesn't matter.**

C(n, k) = n! / (k! × (n − k)!). "Choose k from n, any order." Read "choose," "select," "committee," "group," "team," "subset," "handshake" — swapping two chosen items produces the *same* outcome, so you divide out the k! orderings that a permutation would have over-counted. Compute it the same lean way: write the k descending factors over k!, e.g. C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56. Always cancel before multiplying — turn 6 in the numerator and the 6 from 3! into a 1, and you keep the numbers small and the errors out.

The link is worth burning in: **C(n, k) = P(n, k) / k!**. A combination is a permutation with the internal ordering collapsed. Whenever you can't decide which to use, ask: "If I shuffle the items I picked, is it a new answer?" Yes → permutation. No → combination.

**Example.** Committee of 3 from 7. Order doesn't matter (the committee is the same regardless of seating). C(7, 3) = 35.

Trap answer 210 comes from computing 7 × 6 × 5 and forgetting to divide by 3! — that's permutations, not combinations. Note 210 = P(7, 3); the test writer computed the over-count *on purpose* and put it in the answer list to catch you. This is why step 6 of the procedure below — the magnitude sanity check — pays for itself: any "choose" answer that is bigger than the matching "arrange" answer is impossible, and 210 > 35 should flash a warning the instant you see both on the screen.

**Worked example (order matters vs. not, side by side).** From 8 runners, (a) how many ways to award gold, silver, and bronze, and (b) how many ways to pick 3 to advance to a final heat (no ranking)?

- (a) The medals are distinct positions — order matters. P(8, 3) = 8 × 7 × 6 = **336.**
- (b) Advancing is a plain group — order does not matter. C(8, 3) = 336 / 3! = 336 / 6 = **56.**

Same raw numbers, two answers six apart. The only difference is the word "medals" (ordered) versus "advance" (unordered). Train your eye to find that word.

**The "exactly X of type A and Y of type B" pattern.** Choose independently from each group, multiply.

Committee of 4 = exactly 2 men and 2 women from 5 M and 4 W:

    C(5, 2) × C(4, 2) = 10 × 6 = 60

Dominates 30% of GMAT combinatorics. Pattern-match on sight. The structure generalizes to three or more groups: "exactly 2 forwards, 2 guards, 1 center" is just C(·,2) × C(·,2) × C(·,1). One combination per group, all multiplied, because the groups are independent.

**Worked example (the most-constrained group first).** A panel of 5 must be formed from 6 economists and 4 lawyers, and must include **at least 3 economists**. How many panels?

"At least 3 economists" on a 5-person panel means 3, 4, or 5 economists. Split into cases by economist count and fill the rest with lawyers:

- 3 econ, 2 law: C(6, 3) × C(4, 2) = 20 × 6 = 120
- 4 econ, 1 law: C(6, 4) × C(4, 1) = 15 × 4 = 60
- 5 econ, 0 law: C(6, 5) × C(4, 0) = 6 × 1 = 6
- Total: 120 + 60 + 6 = **186.**

Note C(4, 0) = 1: there is exactly one way to choose nobody. Forgetting that the all-economist case is legal (and counts as 1) is a classic dropped case. Equally subtle: you must check that each case is *feasible* before you write it. Here "5 economists" works because there are 6 available; if the pool had held only 4 economists, the 5-econ case would be impossible and contribute 0, not some leftover term. Always confirm the group is big enough to supply the count you are demanding.

> **Recall check.** Why do we *multiply* C(6,3) by C(4,2) but *add* the three case totals? (Multiply because choosing economists and choosing lawyers are independent steps within one valid panel — "and"; add because the three economist-counts are mutually exclusive ways to satisfy "at least 3" — "or.")

**Counting numbers with digit constraints.** Count position-by-position.

How many 3-digit numbers have distinct digits and are divisible by 5?

Divisible by 5 → units digit is 0 or 5. Two cases.

- Case 1 (units = 0): hundreds can be 1–9 (9 choices); tens can be anything except hundreds and 0 (8 choices). 9 × 8 = 72.
- Case 2 (units = 5): hundreds can be 1–9 except 5 (8 choices); tens can be anything except hundreds and 5 (8 choices). 8 × 8 = 64.
- Total: 72 + 64 = **136**.

Always break digit problems into cases by the most constrained digit (here, units). The reason you cannot just multiply "9 hundreds × 9 tens × 2 units" is that the choices are *not* independent — whether 0 is still available for the tens digit depends on whether you used it as the units digit. When position choices interact, split by the constrained position and count each branch cleanly. Notice *why* the two cases give different numbers: when units = 0, the hundreds digit loses only the value 0 (which it could never use anyway), so it keeps all 9 of its options; when units = 5, the hundreds digit must additionally dodge 5, dropping it to 8. The case that "uses up" a digit the leading position already banned costs you nothing; the case that uses up a legal leading digit costs you one. Tracking that interaction by hand is the whole game.

**Trap to watch.** The leading digit of a multi-digit number can never be 0. "Hundreds = 1–9" gives 9 choices, not 10. The single most common error in digit-counting problems is letting the lead digit be zero, which silently inflates the count. Always handle the leading position first and explicitly exclude 0. The trap deepens when "distinct digits" and "no leading zero" interact: the lead position bans one value (0) for a structural reason, while later positions ban already-used values for a distinctness reason — two different bans that happen to net out to the same count of 9, which is exactly why students who memorize "the answer is 9 × 9 × 8" misfire the moment the problem swaps in a fresh constraint.

**Worked example (digits, plug-in mindset).** How many 3-digit numbers have all distinct digits (no divisibility constraint)?

Count left to right, adjusting as digits get used:

- Hundreds: 1–9, so **9** choices (not 0).
- Tens: any of the 10 digits except the one already used in hundreds — but 0 is now allowed here — so 10 − 1 = **9** choices.
- Units: any digit except the two already used: 10 − 2 = **8** choices.
- Total: 9 × 9 × 8 = **648.**

The subtlety: hundreds and tens both end up with 9 choices, but for *different reasons* — hundreds excludes 0, tens excludes the one used hundreds-digit but regains 0. Saying "9 × 9 × 8" without understanding why each 9 is a 9 is how you misfire when the next problem tweaks the constraint.

**Worked example (digits, even numbers — the order-of-operations trap).** How many 3-digit numbers have distinct digits and are **even**? This is harder than the divisible-by-5 case because the constrained units digit (0, 2, 4, 6, 8) *overlaps* with the forbidden leading zero, so the order in which you count matters.

The instinct is to count hundreds first, but the units digit is the constrained one *and* it shares the value 0 with the banned leading position — so resolve units first, splitting on whether units = 0:

- Case A (units = 0): hundreds can be any of 1–9 (9 choices); tens is any digit except the two used, and 0 is gone but it never mattered for tens here — 10 − 2 = 8 choices. 9 × 8 = 72.
- Case B (units ∈ {2, 4, 6, 8}, so 4 choices): hundreds must avoid 0 *and* the chosen units digit, leaving 8 choices; tens avoids the two used digits, leaving 8 choices. 4 × 8 × 8 = 256.
- Total: 72 + 256 = **328.**

If you had naively done "9 hundreds × 8 tens × 5 units" you would get 360 — wrong, because it lets the units digit be 0 while *also* having already let the hundreds digit be one of those same digits, double-using values and ignoring that "units = 0" frees up the hundreds position. The split-on-the-shared-value-first move is the only reliable path.

> **Recall check.** In a distinct-digit even-number count, why must you split into "units = 0" versus "units ∈ {2,4,6,8}"? (Because 0 is the one even digit that is also the forbidden leading digit — when units = 0 the hundreds position keeps all 9 options, but when units is a nonzero even digit the hundreds position loses two values, 0 and that units digit, dropping to 8. The two branches have different counts.)

**The C(n+1, k) − C(n, k) identity.**

Hard problem: "If the group had 1 additional person, the number of 3-person committees would increase by 21. Find n."

Use: C(n+1, 3) − C(n, 3) = C(n, 2). So C(n, 2) = 21 → n(n−1)/2 = 21 → n(n−1) = 42 → **n = 7**. Then C(7, 3) = 35.

Memorize this identity — it appears in disguise on hard combinations questions. The intuition behind it: every committee that the new person creates *must include that new person*, and the rest of such a committee is just k − 1 people chosen from the original n. So the increase equals C(n, k − 1). For k = 3 that is C(n, 2), exactly as above. Knowing the *why* lets you reconstruct the identity under pressure instead of hoping you memorized it correctly. Solving n(n − 1) = 42 is itself a place to be quick: you do **not** grind the quadratic — you find two consecutive integers whose product is 42, and 7 × 6 jumps out. Recognizing "consecutive-integer product" patterns (12 = 4·3, 20 = 5·4, 30 = 6·5, 42 = 7·6, 56 = 8·7, 72 = 9·8, 90 = 10·9) saves real time, because n(n−1)/2 problems are everywhere.

> **Recall check.** Adding one person to a group of n raises the number of *4*-person committees by how much? (C(n, 3) — the new committees all contain the new person, and the other three come from the original n.)

**"At least k of type A" problems — split by cases.**

A student answers 5 of 7 questions and must answer at least 2 of the first 3. Split by how many of the first 3 are taken:

- Exactly 2 of first 3, 3 of remaining 4: C(3,2) × C(4,3) = 3 × 4 = 12
- All 3 of first 3, 2 of remaining 4: C(3,3) × C(4,2) = 1 × 6 = 6
- Total: **18**

Complement alternative: C(7, 5) = 21 total. Subtract cases with fewer than 2 of the first 3 — i.e., exactly 1 of the first 3 forces all 4 of the rest: C(3,1) × C(4,4) = 3. So 21 − 3 = 18. (verified — matches the direct count)

The strategic lesson: "at least" has two valid attacks — **enumerate the good cases**, or **total minus the bad cases (complement)**. Pick whichever has fewer cases to compute. Here the complement has *one* bad case versus two good ones, so complement is marginally faster; in problems with "at least 1," the complement (subtract the single all-none case) is almost always dramatically shorter.

> **Self-explanation prompt.** Why does "choose 3 of 7" equal "not choose 4 of 7"? If you can say "because every 3-person team uniquely corresponds to a 4-person non-team — every commitment picks exactly one complement," you've internalized the C(n,k) = C(n, n−k) symmetry and will stop doing the big factorial when the small one gives the same answer.

**Worked example (complement is the only sane path).** A bag has 5 red and 4 blue marbles. You draw 3. In how many ways do you draw **at least 1 red**?

Direct enumeration means three cases (1 red, 2 red, 3 red). The complement is one case — "no red," i.e., all blue:

- Total ways to choose 3 of 9: C(9, 3) = 84.
- "Bad" (zero red = all 3 blue): C(4, 3) = 4.
- At least 1 red: 84 − 4 = **80.**

"At least 1" should trigger the complement reflex automatically: the only excluded outcome is "none," which is a single, tiny count. Computing three combinations to get the same 80 is doing four times the work.

**Restricted arrangements — two templates.**

When a counting problem places constraints on position or adjacency, use one of two templates.

**Template 1: Complement.** Count all unrestricted arrangements, then subtract the "bad" ones that violate the constraint.

**Worked example.** Five people (A, B, C, D, E) sit in a row. In how many ways do A and B NOT sit next to each other?

- Total: 5! = 120.
- A and B adjacent (the "bad" arrangements): treat A+B as one block. Now arrange 4 units: 4! = 24. Within the block, A and B can swap: × 2. Bad total = 24 × 2 = **48.**
- Valid (not adjacent): 120 − 48 = **72.**

Use complement when the "bad" arrangements form a tidy pattern — adjacency is the classic case because "treat as one block" is always one algebraic step. The two-step "glue them into a block, then multiply by the internal arrangements of the block" is the **block method**, and it generalizes: if three specific people must sit together, glue them into one block (now 3 units → 3!) and multiply by 3! for the internal orderings.

**Worked example (block method, the harder direction).** Six people sit in a row. In how many ways do **none** of the three couples — (A,B), (C,D), (E,F) — have its two members adjacent? This is genuinely hard; it needs inclusion-exclusion on top of the block method.

- Total: 6! = 720.
- Let X = arrangements where A,B are adjacent. Block A+B → 5 units → 5! × 2 = 240. By symmetry the same for the C,D pair and the E,F pair.
- Sum of single-pair-adjacent: 3 × 240 = 720. (We will subtract this, but it double-counts overlaps, so continue.)
- Two pairs adjacent at once (e.g., A,B together *and* C,D together): two blocks → 4 units → 4! × 2 × 2 = 96. There are C(3, 2) = 3 such pairings: 3 × 96 = 288. (Add back.)
- All three pairs adjacent: three blocks → 3 units → 3! × 2 × 2 × 2 = 48. (Subtract.)
- Inclusion-exclusion for "at least one pair adjacent": 720 − 288 + 48 = 480.
- "No couple adjacent" = total − (at least one adjacent) = 720 − 480 = **240.**

The takeaway is not to memorize this number — it's to recognize that "no pair adjacent" with *multiple* pairs needs inclusion-exclusion (subtract singles, add back doubles, subtract triples), and that the block method supplies each term. Most test-takers stop after subtracting 720 and report a negative or wrong answer; the expert move is knowing the overlaps must be added back. The sign pattern is worth carving in: **plus the whole, minus singles, plus doubles, minus triples** — alternating, with the count of terms at each level given by C(3,1), C(3,2), C(3,3). When in doubt about a sign, the rule is "subtract odd-sized overlaps, add even-sized ones."

**Template 2: Fix the constrained item first, then fill freely.**

When the constraint is "item X must occupy a specific position," place X in that position, then count arrangements of the remaining items.

**Worked example.** 5 books on a shelf. Book A must be on the left end. How many arrangements?

- A is fixed. Arrange the other 4 freely: 4! = **24.**

**Worked example (two-position constraint, fix both).** Seven students stand in a row for a photo. The tallest must be in the exact center (position 4 of 7) and the shortest must be at the far right (position 7). How many photos?

- Fix the tallest in position 4 and the shortest in position 7 — those two slots are now used up with no freedom.
- The remaining 5 students fill the remaining 5 positions in any order: 5! = **120.**

Fixing constrained items first turns a scary-sounding restriction into a plain factorial of whatever's left. The rule: **handle every forced placement before you count anything free.**

**Relative order shortcut.** When the constraint is "A must appear before B" (but not in a specific slot), exactly half of all arrangements satisfy this — by symmetry, A precedes B in half and follows B in the other half.

    Arrangements where A comes before B = n! / 2

This symmetry argument extends: if you require three specific items to appear in one fixed relative order (say A before B before C, in any positions), exactly 1 in 3! = 1/6 of all arrangements comply, because the three items can be internally ordered 3! ways and only one of those orders is the one you want. So the count is n! / 6. The general principle: when m specific items must appear in one designated relative order among n total, divide the unrestricted n! by m! — one favorable arrangement of those m items out of m! equally likely internal orderings.

**Worked example (backsolving / answer-choice tactic).** A problem reads: "n people stand in a row; the number of arrangements in which person P stands somewhere to the left of person Q is 2520. What is n?" Answer choices: (A) 5 (B) 6 (C) 7 (D) 8 (E) 9.

You could set n!/2 = 2520 → n! = 5040 and recall 7! = 5040 → n = 7. But under time pressure, **backsolve from the choices** instead of recalling factorials cold. Start in the middle, choice (C) n = 7: 7!/2 = 5040/2 = 2520. Match on the first try — answer **(C).** Backsolving is the named tactic here: when the answer choices are small integers and the relationship is a clean equation, plugging a choice in is faster and less error-prone than solving forward, and starting from the middle choice lets you discard half the list if you miss. Keep the small factorials at your fingertips — 1, 2, 6, 24, 120, 720, 5040, 40320 for 1! through 8! — because the moment you see 5040 you know it is 7!, and that recognition alone can solve a "find n" problem in seconds.

**Procedure to memorize (run this on every counting problem):**

1. **Multiply or add?** Decide whether you're making all the choices ("and" → multiply the stage counts) or picking one option from alternatives ("or" → add the case totals).
2. **Order or no order?** Ask "if I shuffle what I picked, is it a new outcome?" Yes → permutation P(n,k). No → combination C(n,k).
3. **Independent or interacting?** If a choice changes the pool for the next (digits, no-repeats), adjust the count at each stage rather than reusing the full n.
4. **Constraint present?** Identify its type: "must be in a slot" → fix-first template; "can't be adjacent / at least one" → complement template; "must group together" → block method.
5. **Split or subtract?** For "at least/at most," choose whichever of (enumerate good cases) or (total − bad cases) has fewer cases — default to complement when "none" is a single tiny case.
6. **Sanity-check the magnitude.** A combination must be smaller than the matching permutation by a factor of k!. If your "choose" answer is bigger than the "arrange" answer, you used the wrong tool.

**Micro-drill.** 90 seconds total.

1. 4 people in a row: how many ways with Person X at the right end? → ___
2. 4 people in a row: how many ways where X and Y are NOT adjacent? → ___
3. 5 people in a row: how many ways where P comes before Q (not necessarily adjacent)? → ___
4. How many 3-digit numbers are even and have distinct digits? → ___

Answers: (1) **6** — X fixed, arrange other 3: 3! = 6. (2) **12** — total 4! = 24; adjacent cases: 3! × 2 = 12; valid = 24 − 12 = 12. (3) **60** — total 5! = 120; half have P before Q: 120/2 = 60. (4) **328** — split on units = 0 (9 × 8 = 72) versus units ∈ {2,4,6,8} (4 × 8 × 8 = 256); 72 + 256 = 328.

**Common mistakes.**

- **Adding when you should multiply** (and vice versa). "Pick one course from each of three groups" multiplies; "pick a single item that's in one of three groups" adds. The 4 + 6 + 3 = 13 trap is this error.
- **Using a permutation where a combination is needed.** Computing n × (n−1) × ... and forgetting to divide by k!. The over-count is always the listed trap (210 for C(7,3), 336 for C(8,3)).
- **Letting a leading digit be 0.** Inflates every multi-digit-number count. Handle the lead position first and bar 0.
- **Mis-ordering the digit cases.** In even/divisible-by-5 counts where the constrained units digit can be 0, you must split on whether units = 0 before counting the leading digit; counting hundreds first double-uses values and over-counts.
- **Treating interacting choices as independent.** Multiplying full counts when picking one digit removes it from the next pool. Adjust the count stage by stage, or split into cases.
- **Dropping the C(n, 0) = 1 case (or claiming an infeasible case).** "At least k" includes the all-of-one-type extreme; choosing nobody from the other group still counts as one way — but also confirm each case's group is large enough to supply the demanded count, or it contributes 0.
- **Forgetting to add back overlaps** in multi-constraint "no pair adjacent" problems. Inclusion-exclusion subtracts singles *and adds doubles back*; stopping after the subtraction gives a wrong (often negative) count.
- **Subtracting the complement from the wrong total.** The complement must be subtracted from the count of *all* arrangements/selections, not from a partial count.

**Recap.** Counting is diagnosis before arithmetic. Decide multiply-vs-add ("and" vs "or"), then order-vs-no-order (shuffle test → permutation vs combination), watching for interacting choices that shrink the pool stage by stage. For digit problems, handle the leading position and the most-constrained position first, splitting on any value (like 0) that is shared between a banned slot and a constraint. For arrangement constraints, reach for the right template: fix forced items first, use the block method to glue items together (with inclusion-exclusion when several pairs must stay apart), and default to the complement for "at least" and "not adjacent." Remember the structural facts — C(n,k) = P(n,k)/k!, C(n,k) = C(n, n−k), C(n+1,k) − C(n,k) = C(n, k−1), n!/2 for relative order, and the small factorials through 8! — and backsolve from the answer choices whenever the relationship is a clean equation in a small integer. Get the tool right and the number is the easy part.

> **Self-explanation prompt.** Why does the complement template work for "A and B can't be adjacent"? If you can say "because directly counting non-adjacent arrangements has many cases, but adjacent arrangements have one clean structure (A+B as a block), so complement is one step where direct counting is many," you've understood why complement is the reflex for adjacency restrictions. Whenever a constraint specifies what two items cannot do, think complement first.

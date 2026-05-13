---
slug: combinatorics
title: Combinatorics
section: Quant
estimated_minutes: 50
prerequisites: []
summary: |
  Combinatorics rewards pattern recognition over formula memorization. Every question reduces to four yes/no decisions — does order matter? are objects identical? is there a constraint? is it circular? — and each decision points to exactly one formula or technique. The restrictions module deserves particular attention: the glue trick (adjacent objects), complement (forbidden pairs), slot-by-slot alternating, and position-specific constraints each require a distinct setup that must be diagnosed before writing a single number. Students who understand the why behind each formula solve unfamiliar variants confidently; students who memorize reach for the wrong formula under pressure.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss both — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - combinatorics-q1
      - combinatorics-q4

  - id: enumeration
    type: reading
    title: "Enumeration — counting the long way"
    check_question_ids:
      - combinatorics-q2

  - id: permutations
    type: reading
    title: "Permutations — when order matters"
    check_question_ids:
      - combinatorics-q3

  - id: combinations
    type: reading
    title: "Combinations — when order doesn't matter"
    check_question_ids:
      - combinatorics-q5

  - id: restrictions
    type: reading
    title: "Restrictions — adjacent, forbidden, alternating"
    check_question_ids:
      - combinatorics-q8
      - combinatorics-q9

  - id: circular
    type: reading
    title: "Circular arrangements"
    check_question_ids:
      - combinatorics-q11

  - id: repeats
    type: reading
    title: "Repeated letters and multiset arrangements"
    check_question_ids:
      - combinatorics-q27

  - id: decision
    type: summary
    title: "The four-question decision tree"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - combinatorics-q1
      - combinatorics-q2
      - combinatorics-q3
      - combinatorics-q4
      - combinatorics-q5
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - combinatorics-q6
      - combinatorics-q7
      - combinatorics-q8
      - combinatorics-q9
      - combinatorics-q10
      - combinatorics-q11
      - combinatorics-q12
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - combinatorics-q13
      - combinatorics-q14
      - combinatorics-q15
      - combinatorics-q16
      - combinatorics-q17
      - combinatorics-q18
---

## @enumeration

Enumeration means **writing out every possibility and counting them**. It sounds primitive for a graduate exam, but it is the foundation every formula is built on — and for small sets (3 or 4 objects) listing is often the fastest path.

**Mental model.** Every counting problem reduces to two questions before you touch any formula. *Does order matter?* And *are any objects identical?* Permutations, combinations, circular arrangements, multisets — every formula in this chapter is a consequence of how you answer those two questions. Students who reach for a formula before asking them consistently reach for the wrong one.

**Example.** Three marbles — Blue (B), Gray (G), Red (R) — line up on a shelf. How many orders are possible?

List them:

    BGR, BRG, GBR, GRB, RBG, RGB

Six orders. No formula needed. Careful listing is the whole method.

**Why enumeration matters.** Every formula in this chapter is a shortcut for enumeration. Once you see why listing produces 6 for three distinct objects, the formula **3! = 6** is obvious rather than memorized. Understanding this derivation protects you when a question is phrased in a novel way — the shortcut might not be obvious, but enumeration always works.

**The rule enumeration reveals.** For n distinct objects in a line:

- n choices for the first position
- n − 1 remaining choices for the second
- n − 2 for the third
- …down to 1 for the last

Multiply: n × (n − 1) × (n − 2) × … × 1 = **n!** (n factorial).

**Pro tip.** Memorize these cold — they appear in answer choices constantly:

| n | n! |
|---|---|
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |
| 6 | 720 |
| 7 | 5,040 |

8! = 40,320. You will not compute it under pressure, but you may recognize it in a distractor.

> **Self-explanation prompt.** Before you try the check question: explain in one sentence why each additional object multiplies the total by exactly one more than the previous multiplier. If you can say it cleanly, you own the factorial idea — not just the number.

## @permutations

A **permutation** is an arrangement where **order matters**. "First place, second place, third place" is a permutation. "Who made the team" is not.

**Mental model.** Apply the swap test before every problem: *if you swap two specific items, does that produce a different outcome?* Ana as president and Ben as VP is different from Ben as president and Ana as VP — swap test says yes, it is a permutation. But Ana and Ben both sitting "on the committee" is the same committee regardless of the order you name them — that is a combination. One question, one answer.

**Worked example.** From 7 candidates, choose a president and a vice-president. How many outcomes?

- 7 choices for president
- 6 remaining choices for VP (one person is already president)
- 7 × 6 = **42**

That is P(7, 2) = 42. The general formula:

**P(n, k) = n! / (n − k)!**

Sanity-check: P(7, 2) = 7! / 5! = (7 × 6 × 5!) / 5! = 42. The (n − k)! cancels the tail — the n − k objects we never placed.

**Why the formula works.** n! arranges all n objects in a full line. But we only fill k positions. The (n − k)! in the denominator cancels the orderings of the leftover objects, because we don't care how the unselected candidates line up.

**Special case.** When k = n: P(n, n) = n! / 0! = n!. Arranging all 7 candidates in a line is 7! = 5,040. Correct.

**Trap to watch.** The GMAT frequently frames a combination problem using role-like language to bait you into using P instead of C. "A president, VP, and treasurer are chosen from 10" is P(10, 3) = 720. "A committee of 3 is chosen from 10" is C(10, 3) = 120. The factor of 6 difference (3!) is exactly 3! — the number of orderings of the 3 chosen people. Apply the swap test, not the language.

> **Self-explanation prompt.** Before the check question: state the swap test in one sentence, apply it to the specific problem, then say which formula you are using and why. Verbalizing the decision is how you build the habit that works under time pressure.

## @combinations

A **combination** is a selection where **order doesn't matter**. The same three people in any order make the same team.

**Mental model.** A combination is a permutation with the overcounting removed. P(n, k) counts every ordering of the chosen k items as a separate outcome. When order doesn't matter, each unique group of k items was counted k! times — once per arrangement. Divide by k! to collapse each group into one:

**C(n, k) = P(n, k) / k! = n! / (k! × (n − k)!)**

**Worked example.** A team of 3 is picked from 6 students. How many possible teams?

- If order mattered: P(6, 3) = 6 × 5 × 4 = 120
- Each team of 3 was counted 3! = 6 times (once per ordering of the same trio)
- Divide: 120 / 6 = **20**

Check: C(6, 3) = 6! / (3! × 3!) = 720 / 36 = 20.

**Symmetry trick.** C(n, k) = C(n, n − k). Choosing 3 of 6 is the same count as rejecting 3 of 6. Flip to the smaller k when it reduces arithmetic: C(10, 7) = C(10, 3) = 120 in two seconds.

**Values to know without computing:**

- C(n, 0) = C(n, n) = 1
- C(n, 1) = C(n, n − 1) = n
- C(n, 2) = n(n − 1) / 2

**Worked example.** The "exactly X of type A and Y of type B" pattern appears in roughly 30% of GMAT combinatorics questions — learn to recognize it on sight:

*A committee of 3 from 5 men and 4 women must have exactly 2 men and 1 woman.*

Pick independently from each group, then multiply (AND means multiply):

    C(5, 2) × C(4, 1) = 10 × 4 = 40

The multiplication encodes: pick the men AND pick the women. If you add instead of multiply, you are computing something closer to OR — a different question entirely.

> **Recall check.** Without peeking: state the formulas for P(n, k) and C(n, k). State the symmetry identity. Compute C(10, 7) in your head using the shortcut. If you reached for 10!/(7!3!) the long way rather than flipping to C(10, 3), you missed the technique that saves 30 seconds under pressure.

## @restrictions

Restriction problems require one of four moves: the **glue trick**, the **complement trick**, the **slot-by-slot method for alternating constraints**, or the **position-fix for seat-specific constraints**. Diagnosing which to use is the actual skill — the arithmetic that follows is almost mechanical.

**Move 1 — glue trick (objects must be adjacent).** *In how many arrangements of the letters in LESSON do the two S's appear next to each other?*

Glue the required-adjacent objects into a single block and treat the block as one item.

LESSON has 6 letters (L, E, S, S, O, N). Glue the two S's into one "SS" block. Now arrange 5 items (SS, L, E, O, N):

    5! = 120

The two S's are identical, so internal ordering of the block adds no variation. Answer: **120**.

If the adjacent items are distinct (e.g., named people Ana and Ben must sit together), multiply by 2! for the internal ordering of the block:

    6 people, Ana and Ben must be adjacent: 5! × 2! = 120 × 2 = 240

**Move 2 — complement trick (objects must NOT be adjacent).** *Six people in a row — Ana and Ben must not sit next to each other:*

- Total arrangements: 6! = 720
- Arrangements where Ana and Ben ARE adjacent (glue trick): 5! × 2! = 240
- NOT adjacent: 720 − 240 = **480**

Counting "not adjacent" directly means partitioning by how many seats separate them — much harder. Complement collapses it to one subtraction.

**Pro tip.** "At least one" of some type is always faster via complement:

*A committee of 3 from 5 men and 4 women — how many committees have at least 1 woman?*

- Total: C(9, 3) = 84
- No women (all men): C(5, 3) = 10
- At least 1 woman: 84 − 10 = **74**

Counting directly means splitting into "exactly 1," "exactly 2," "exactly 3" — three calculations instead of one.

**Move 3 — slot-by-slot method (alternating types).** When objects must alternate by type (men and women, red and blue, A and B), the structure is determined by the pattern — not the formula. Work by:

1. Identifying all valid alternating patterns.
2. Counting arrangements within one pattern.
3. Multiplying by the number of valid patterns.

**Worked example.** *3 boys (B₁, B₂, B₃) and 3 girls (G₁, G₂, G₃) sit in a row, alternating genders. How many arrangements?*

The two valid patterns are B-G-B-G-B-G and G-B-G-B-G-B.

For the pattern B-G-B-G-B-G:
- Fill the 3 boy-slots: 3! = 6 ways
- Fill the 3 girl-slots: 3! = 6 ways
- Subtotal: 6 × 6 = 36

By symmetry, G-B-G-B-G-B also gives 36.

Total: 36 + 36 = **72**.

**What controls the number of valid patterns.** When the two groups have equal size (n boys, n girls), there are exactly 2 valid row patterns — either type can go first. When the groups are unequal — say 4 boys and 3 girls — only one pattern is feasible: B-G-B-G-B-G-B. The larger group must occupy all odd-numbered positions, forcing it to appear first and last. A girl-first row B-G-B-G-B-G-B would run out of girls before filling all even-numbered slots.

**Alternating in a circular arrangement.** *3 boys and 3 girls seated around a round table, alternating genders:*

- In a circular alternating setup there is only 1 rotational pattern (both genders are already interleaved; no distinct "start")
- Fix one boy's position to remove rotational equivalence: 1 way
- Arrange the remaining 2 boys in the 2 remaining boy-seats: 2! = 2 ways
- Arrange the 3 girls in the 3 girl-seats: 3! = 6 ways
- Total: 1 × 2 × 6 = **12**

**Move 4 — position-fix (person must occupy specific seats).** *8 people in a row — Alex must sit at one of the two ends:*

- Place Alex: 2 choices (left end or right end)
- Arrange the remaining 7 people in the 7 open seats: 7! ways
- Total: 2 × 7! = **10,080**

To count arrangements where Alex is at **neither** end, use complement: 8! − 2 × 7! = 7!(8 − 2) = 6 × 7! = **30,240**.

Position-fix composes with the glue trick: if "Alex must be at an end AND Ben must be next to Alex," treat Alex+Ben as a 2-person block (2! internal orderings), place the block at one of the two ends (2 choices for which end), and arrange the remaining 6 people in 6! ways. Total: 2! × 2 × 6! = 2 × 2 × 720 = **2,880**.

**Trap to watch.** The most common restriction error is computing the forbidden count correctly but forgetting to subtract it from the total. Write *total − forbidden =* on your scratch work before computing either value. For alternating problems, the second most common error is assuming there are always 2 valid patterns without checking whether the group sizes are equal.

> **Self-explanation prompt.** Before the check questions: why does alternating boys and girls in a row of equal-size groups produce exactly 2 valid patterns rather than more? If you can say "because once you choose which gender goes in seat 1, every other seat is forced — the pattern has zero remaining freedom," you understand the constraint structurally and will diagnose it correctly under pressure.

## @circular

In a **circular arrangement** — people around a table, beads on a ring — **rotations of the same configuration are identical**. There is no "seat 1" because the table has no fixed starting point.

**Mental model.** Imagine five people seated clockwise: Ana, Ben, Cal, Dan, Ela. If everyone shifts one seat clockwise, the relative ordering is unchanged — Ana still has Ela to her right and Ben to her left. Five rotations all describe the same circular arrangement. So 5! = 120 linear arrangements collapse into 120 / 5 = 24 distinct circular ones.

**Formula:** Circular arrangements of n distinct objects = **(n − 1)!**

**Worked example.** 5 people around a round table: (5 − 1)! = 4! = **24**, not 5! = 120.

**An equivalent derivation.** Pick any one person and declare their seat "the reference seat" (this is a free choice — we're just picking which rotation we call canonical). Arrange the remaining n − 1 people in the other seats normally: (n − 1)! ways. Same result, clearer reasoning.

**Trap to watch.** The most common error is computing n! instead of (n − 1)!. Before using (n − 1)!, ask: "Does the table have a fixed reference point?" A head table with a designated chair, numbered seats, a rectangular table where the ends differ — those are not truly circular. Use n! when seats are distinguishable.

**Bracelets and necklaces (rare, 745+ only).** When the arrangement is also flippable — a bracelet viewed from both sides — divide by an additional factor of 2: (n − 1)! / 2. You are unlikely to see this on most tests. Flag it and make your best guess if time is short.

> **Self-explanation prompt.** Before the check question: without looking at the formula, explain in two sentences why circular arrangements give (n − 1)! rather than n!. Describing the rotational equivalence in plain language — not just reciting the formula — is how it stays with you past test day.

## @repeats

When some objects are **identical**, a straight factorial overcounts — swapping two identical objects produces the same arrangement, not a new one.

**Mental model.** Start with "suppose all objects were distinct": that gives n! arrangements. Then for each group of identical objects, every permutation of that group within the arrangement looks the same. Divide by the factorial of each repeated group to eliminate the duplicates:

**n! / (r₁! × r₂! × … × rₖ!)**

where r₁, r₂, … are the counts of each repeated group, and r₁ + r₂ + … + rₖ = n.

**Worked example.** MISSISSIPPI has 11 letters: 1 M, 4 I's, 4 S's, 2 P's.

Step 1 — treat all as distinct: 11! = 39,916,800

Step 2 — divide out each repeated group:

    11! / (1! × 4! × 4! × 2!) = 39,916,800 / (1 × 24 × 24 × 2) = 39,916,800 / 1,152 = 34,650

**Common patterns to recognize:**

- **Two repeated pairs.** LETTER has 2 T's and 2 E's: 6! / (2! × 2!) = 720 / 4 = **180**.
- **Binary sequences.** "How many 7-character strings with exactly 3 A's and 4 B's?" = 7! / (3! × 4!) = **35**.

**Trap to watch.** Forgetting to divide by the factorial of *every* repeated group. MISSISSIPPI has three repeated groups (I, S, P). Missing even one gives you an answer that's a multiple of 2, 6, or 24 — just plausible enough to appear as a wrong answer choice.

**Connection to combinations.** When there are only two types of object, the multiset formula collapses into a combination. "Arrangements of AAABBBB" = 7! / (3! × 4!) = C(7, 3) = 35. Both computations are identical — you are choosing which 3 of the 7 positions hold the A's. If you ever forget the multiset formula mid-exam, try rephrasing as "choose positions for the minority object type."

> **Self-explanation prompt.** Before the check question: write out the letter counts for the word in that problem, then write the denominator of your formula with each repeated group's factorial before computing. Getting the setup right is the entire skill — the arithmetic is mechanical once the structure is correct.

## @decision

Every combinatorics question on the GMAT reduces to four decisions. Run through them in order — the answer to each question points to exactly one path.

**1. Does order matter?**
- Yes → permutation (P formula, or slot-by-slot multiplication)
- No → combination (C formula)

**2. Are there repeated or identical objects?**
- Yes → divide by the factorial of each repeated group
- No → straight factorial or permutation/combination formula

**3. Is there a constraint (adjacent, forbidden pair, alternating, position-specific)?**
- Adjacent required → glue trick: treat the block as one item, multiply by internal orderings
- Not adjacent / forbidden → complement: total − (arrangements with the forbidden configuration)
- Alternating → slot method: identify valid patterns, count per pattern, multiply by pattern count
- Specific seat or end required → position-fix: count valid placements for the constrained person, arrange the rest

**4. Is it circular or linear?**
- Circular with indistinguishable seats → (n − 1)!
- Linear or distinguishable seats → n!

That is the entire chapter in 12 lines. When you see a combinatorics question, you are not guessing which formula applies — you are stepping through four yes/no checks to land on exactly one method.

**Pattern-matching table — aim to recognize these on sight:**

| Problem says | You're doing | Formula |
|---|---|---|
| "How many orders…" | Permutation | n! or P(n, k) |
| "Committee of k from n" | Combination | C(n, k) |
| "Exactly X of type A and Y of type B" | Product of combinations | C(nA, X) × C(nB, Y) |
| "At least 1 of type A" | Complement | Total − (none of A) |
| "Must sit together / adjacent" | Glue trick | (block + others)! × internal orderings |
| "Alternating / no two same type adjacent" | Slot method | (# valid patterns) × n_A! × n_B! |
| "[Person] must be at one end / specific position" | Position-fix | (choices for that person) × (remaining)! |
| "Round table of n" | Circular | (n − 1)! |
| "Letters of [repeated word]" | Multiset | n! / (r₁! × r₂! × …) |
| "Round-robin: every pair plays once" | Combination | C(n, 2) |

**What to do next.** Work the graded problem sets in order: easy → medium → hard. After every wrong answer, identify which of the four decisions you got wrong — that is the diagnostic signal. If you keep misclassifying order vs. no-order, revisit the permutations and combinations sections. If alternating or position-constrained problems stump you, re-read the restrictions section specifically — those four moves (glue, complement, slot, position-fix) cover every constraint variant you will see.

Once you have cleared the problem sets, add combinatorics to your spaced-review queue. These patterns fade without retrieval practice — one session now and two more spaced over the next week will lock them into long-term memory more reliably than re-reading this chapter.

---
slug: combinatorics
title: Combinatorics
section: Quant
estimated_minutes: 45
prerequisites: []
summary: |
  Combinatorics on the GMAT is a small number of patterns repeated constantly. Learn the four decisions (order or no? repeats allowed? independent selections? forbidden arrangements?), memorize three formulas, and you'll solve every combinatorics question on test day in under two minutes.
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
      - combinatorics-q27
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

Enumeration means **writing out every possibility and counting them**. It sounds too primitive for the GMAT, but it's the foundation every formula is built on — and for small sets (3, 4, maybe 5 objects) it's often the fastest approach.

**Mental model.** Counting problems all reduce to two questions: does order matter, and are repeats allowed? Permutations vs. combinations vs. arrangements vs. multinomial — every formula is a consequence of those two answers. If you find yourself reaching for a formula before classifying the problem, you'll reach for the wrong one.

**Example.** Three marbles — blue, gray, green — line up on a shelf. How many orders are possible?

List them: **BGG** (wait — two gray?). Let me use B, G, R (blue, gray, green):

    BGR, BRG, GBR, GRB, RBG, RGB

Six orders. You could have answered this without any formula — just carefully enumerate, count, done.

**Why enumeration matters.** Every formula in this chapter is a *shortcut* for enumeration. If you understand why enumeration gives 6 for three distinct objects, you'll instantly see why the formula says **3!** — and you won't have to rely on memorizing which formula applies when.

**The rule enumeration teaches.** For n distinct objects in a row:
- n choices for the first position
- n − 1 remaining for the second
- n − 2 for the third
- …down to 1 for the last

Multiply all of them: n × (n − 1) × (n − 2) × … × 1 = **n!** (read "n factorial").

**Key takeaway.** These factorials appear across every combinatorics problem type — know them without computing:

| n | n! | When it shows up |
|---|---|---|
| 3 | 6 | Three-item arrangement, small enumeration |
| 4 | 24 | Four-item arrangement, circular n=5 |
| 5 | 120 | Five-item arrangement, circular n=6 |
| 6 | 720 | Six-item arrangement, circular n=7 |
| 7 | 5,040 | Seven-item arrangement |

8! = 40,320. You won't compute it under time pressure, but you'll recognize it in an answer choice.

> **Self-explanation prompt.** Before you look at the check question below, explain to yourself in one sentence: *why* does each additional object multiply the total by one more than the last multiplier? If you can articulate it, you've internalized the idea.

## @permutations

A **permutation** is an arrangement where **order matters**. "Who got first, second, and third place" is a permutation. "Who's on the team" is not.

**Example.** From 7 candidates, a president and a vice-president are chosen. How many outcomes?

- 7 choices for president
- 6 remaining choices for VP
- 7 × 6 = **42**

That's a permutation of 2 from 7, written **P(7, 2)** or **⁷P₂**. The general formula:

**P(n, k) = n! / (n − k)!**

Let's sanity-check: P(7, 2) = 7! / 5! = (7 × 6 × 5!) / 5! = 7 × 6 = 42. ✓

**Why the formula works.** n! arranges ALL n objects. But we only want k of them. The (n − k)! in the denominator cancels out the "tail" arrangements of the objects we didn't pick — we don't care how the leftover 5 candidates order themselves.

**Pro tip.** The fastest permutation-vs-combination test: ask yourself, "*if I swap two specific people, is that a different outcome?*" Ana-president-Ben-VP vs Ben-president-Ana-VP are different — permutation. Ana and Ben both on the same undifferentiated committee — same outcome — combination. Distinct named roles → permutation. Undifferentiated membership → combination.

**Special case — all n at once.** When k = n, P(n, n) = n! / 0! = n! / 1 = n!. Reassuring: picking all 7 candidates in order is just arranging 7 things, which is 7! = 5040.

**Trap to watch.** The GMAT loves to write a problem that sounds like a permutation but is actually a combination. "A committee of 3 is chosen from 10" is C(10, 3). "A president, VP, and treasurer are chosen from 10" is P(10, 3) = 720, six times larger. The word that usually tips you off: distinct roles named = permutation.

## @combinations

A **combination** is a selection where **order doesn't matter**. "Which 3 people make the team" is a combination. The same three people in any order is the same team.

**Formula:**

**C(n, k) = n! / (k! × (n − k)!)**

Also written **ⁿCₖ** or **(n choose k)**.

**Example.** A team of 3 is picked from 6 students. How many possible teams?

- If order mattered: 6 × 5 × 4 = 120
- But order doesn't matter, so we've overcounted — each team of 3 was counted 3! = 6 times (once for each ordering of the same three people)
- Divide: 120 / 6 = **20**

Check: C(6, 3) = 6! / (3! × 3!) = 720 / 36 = 20. ✓

**Why C(n, k) = P(n, k) / k!.** Every combination corresponds to k! permutations of the same k objects. Dividing the permutation count by k! strips off the ordering.

**Symmetry trick.** C(n, k) = C(n, n − k). Choosing 3 of 6 is equivalent to *not* choosing the other 3. Useful for skipping arithmetic: C(10, 7) = C(10, 3) = 120. Mentally flip to the smaller k.

**Quick-reference values you should know cold:**
- C(n, 0) = C(n, n) = 1
- C(n, 1) = C(n, n − 1) = n
- C(n, 2) = n(n − 1) / 2

**Key takeaway.** The "exactly X of type A and Y of type B" pattern: when a problem specifies how many to pick from each named group, pick independently from each group and multiply.

    C(nA, X) × C(nB, Y)

"Exactly 2 men and 1 woman from 5 men and 4 women" = C(5, 2) × C(4, 1) = 10 × 4 = 40. This pattern appears in roughly 30% of GMAT combination questions. When you see two named groups, it should be your first instinct.

> **Recall check.** Without peeking: state the formulas for P(n, k) and C(n, k). Then state the symmetry identity C(n, k) = C(n, ?). Now compute, in your head, C(10, 7). If you computed 10!/(7!3!) = 120 the long way, you missed the shortcut — C(10, 7) = C(10, 3) = 120 with less arithmetic. Retrieving the formulas *and* the symmetry in the same breath is how you wire them together in long-term memory.

## @restrictions

"In how many arrangements of the letters in LESSON are the two S's next to each other?" That's a restriction problem. The GMAT loves them.

**The glue trick — for adjacency restrictions.** When specific objects MUST be adjacent, **treat them as a single glued block**, arrange the block plus the remaining objects, then multiply by internal orderings of the block.

LESSON has 6 letters (L, E, S, S, O, N). Glue the two S's into an "SS" block. Now arrange 5 items (SS, L, E, O, N) in a row: 5! = 120. The two S's inside the block are identical, so no extra multiplier. Answer: **120**.

If the glued items are *distinct* (e.g., two named people), multiply by 2! for the internal ordering. Six people in a row with Ana and Ben adjacent: treat Ana-Ben as a block, arrange 5 items (5! = 120), then × 2 for AB vs BA inside the block = 240.

**The complement trick — for "not adjacent," "at least one," "no two together."** Don't count the hard condition directly. Count the total, count the forbidden version, subtract.

Six people in a row, Ana and Ben NOT adjacent:
- Total arrangements: 6! = 720
- Adjacent arrangements: (block of 5) × 5! × 2 = 240
- Not adjacent: 720 − 240 = **480**

**"At least one" problems.** "At least one" is almost always faster via complement: count "none" and subtract from total.

Example: A committee of 3 is picked from 5 men and 4 women. How many committees have at least 1 woman?
- Total committees: C(9, 3) = 84
- Committees with no women: C(5, 3) = 10
- At least 1 woman: 84 − 10 = 74

Trying to count "at least 1 woman" directly means splitting into cases (exactly 1, exactly 2, exactly 3) — slow and error-prone.

## @circular

In a **circular arrangement** — people around a round table, beads on a bracelet, etc. — **rotations of the same arrangement count as identical**. There's no "seat #1" because every seat is equivalent.

**Mental model.** Fix one person — call them the anchor — at an arbitrary point on the circle. Since all rotations are equivalent, the anchor's exact seat doesn't matter; what matters is how everyone else arranges *relative* to the anchor. With the anchor fixed, the remaining n − 1 people fill the other seats in any linear order: (n − 1)!. Fixing one object is the mechanism that eliminates the rotational overcounting — no formula required, just logic.

**Formula:** Circular arrangements of n distinct objects = **(n − 1)!**

**Example.** 5 people around a round table: (5 − 1)! = 4! = **24**, not 5! = 120.

**Why?** If you rotate any arrangement by one seat, you get the same *relative* ordering — Ana still has Ben to her left and Cal to her right. 5 different rotations all give the same circular arrangement, so 5! / 5 = 4! = 24.

**Pro tip.** Always verify: are the seats actually distinguishable? A head table with a named "Host" chair, a rectangular table where the ends differ, a labeled diagram with fixed positions — those break circular symmetry. When seats are distinguishable, rotations produce genuinely different arrangements, so use n! rather than (n − 1)!.

**Bracelets and necklaces** (rare on GMAT): circular AND flippable. Divide by 2 to account for mirror images. (n − 1)! / 2. If you see this, it's probably a 745+ question — take your best guess and move on if time is tight.

## @repeats

When some objects are **identical**, arranging them produces fewer distinct outcomes than n! suggests — because swapping two identical objects gives you the same visible result, not a new arrangement.

**Mental model.** Start with n! (as if all objects were distinct). Then ask: how many of those n! arrangements are invisible duplicates? If two objects are identical — say, two F's — you can swap them in 2! = 2 ways, and both swaps look the same. So n! overcounts by a factor of 2! for that pair. Two different identical pairs? The overcounting compounds. The fix: divide by the factorial of each group of identical objects.

**Formula:** For n objects with repeated groups of size r₁, r₂, …, rₖ:

**n! / (r₁! × r₂! × … × rₖ!)**

Build intuition from simple to complex:

**Starting simple: BOOK (4 letters, 2 O's).** Label the O's as O₁ and O₂ — now all four letters are distinct, giving 4! = 24 arrangements. But swapping O₁ and O₂ produces the same visible word. Every pair of labeled arrangements collapses to one. Distinct arrangements: 4! / 2! = 24 / 2 = **12**.

**Worked example.** How many distinct arrangements of COFFEE?

COFFEE has 6 letters: C, O, F, F, E, E — two repeat pairs (FF and EE).

- All distinct: 6! = 720
- Divide by 2! for the F's: 720 / 2 = 360
- Divide by 2! for the E's: 360 / 2 = **180**

Or in one step: 6! / (2! × 2!) = 720 / 4 = 180.

The classic trap answer is 360 — dividing by 2! once and forgetting the second pair. Whenever a word has multiple repeat groups, list them all before dividing.

**Scaling up: MISSISSIPPI (11 letters, 1 M, 4 I's, 4 S's, 2 P's).**

    11! / (1! × 4! × 4! × 2!) = 39,916,800 / 1,152 = 34,650

MISSISSIPPI shows up in textbooks but rarely on the actual GMAT — it's too computation-heavy for a 2-minute question. The testable pattern is COFFEE-style: 5 to 8 letters with one or two repeat pairs. Recognize the structure, apply the formula.

**Key takeaway.** When you have only two types of objects, the multiset formula collapses into a combination. "How many 7-character strings with exactly 3 A's and 4 B's?" = 7! / (3! × 4!) = C(7, 3) = **35**. Two perspectives, one answer: you're either dividing out duplicates, or choosing 3 positions out of 7 for the A's. Whichever framing clicks faster for you, use that one.

**GMAT patterns to recognize on sight:**
- "In how many ways can the letters of [WORD] be arranged?" → count each repeated-letter group, apply n! / (r₁! × r₂! × …).
- All letters distinct (like STUDY) → just n! = 120, no division.
- Data Sufficiency asking "exactly how many distinct arrangements?" → the answer hinges on knowing which letters repeat and how many times.

> **Self-explanation prompt.** Before trying the check question: explain in one sentence *why* we divide by r! rather than subtracting r. The key is that r identical objects can be rearranged among themselves in r! ways, and every one of those rearrangements is invisible — produces the same word. So n! overcounts by exactly r! for that group. If you can say this in your own words, you've understood the formula rather than memorized it.

## @decision

Every combinatorics question on the GMAT reduces to four decisions. Run through them in order:

**1. Does order matter?**
- **Yes** → permutation (P formula, or slot-by-slot multiplication)
- **No** → combination (C formula)

**2. Are there repeated/identical objects?**
- **Yes** → divide by the factorial of each repeated group
- **No** → straight factorial or permutation/combination formula

**3. Is there a constraint (adjacent, forbidden pair, alternating)?**
- **Adjacent required** → glue trick
- **Not adjacent / forbidden** → complement trick (total − forbidden)
- **Alternating** → count per pattern, multiply by number of patterns

**4. Is it circular or linear?**
- **Circular with indistinguishable seats** → (n − 1)!
- **Linear or distinguishable seats** → n!

That's the entire chapter's content in 8 lines. Memorize the decision tree — when you see a combinatorics question on the test, you're not guessing which formula applies, you're stepping through four yes/no questions to land on exactly one.

**Micro-drill: test the decision tree.** Without computing, name which formula applies and why. Then check against the answers at the end.

1. "In how many orders can 5 runners finish a race?" — *Answer: 5! = 120. Linear, order matters, no repeats.*
2. "A club picks a president, VP, and treasurer from 12 members." — *Answer: P(12, 3) = 1,320. Distinct roles = order matters.*
3. "The same club picks a 3-person events committee from 12 members." — *Answer: C(12, 3) = 220. No roles, order doesn't matter.*
4. "How many arrangements of BANANA?" — *Answer: 6! / (3! × 2!) = 60. 6 letters, 3 A's and 2 N's repeat.*
5. "In how many ways can 6 people sit at a round table?" — *Answer: (6 − 1)! = 120. Circular arrangement.*

If you matched all five without hesitation, the decision tree is internalized. If one or two tripped you up, re-read the relevant section before moving to the problem sets.

**Common patterns to pattern-match on sight:**

| Problem says | You're doing | Formula |
|---|---|---|
| "How many orders…" | Permutation | n! or P(n, k) |
| "Committee of k from n" | Combination | C(n, k) |
| "Exactly X of type A and Y of type B" | Product of combinations | C(nA, X) × C(nB, Y) |
| "At least 1 of type A" | Complement | Total − (none of A) |
| "Must sit together" | Glue trick | Arrange block + others, then internal |
| "Round table of n" | Circular | (n − 1)! |
| "Letters of [repeated word]" | Multiset | n! / (r₁! × r₂! × …) |
| "Round-robin: every pair plays once" | Combination | C(n, 2) |

Work through the easy set without this table. Open it for the medium set only when you're unsure which pattern applies. By the end of the hard set, pattern recognition should be fast enough that you won't need it — and that's the standard you're aiming for on test day.

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
    check_question_ids: []

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

*Memorize these:* 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040. They show up constantly. 8! is 40,320 — you won't compute it under time pressure, but you'll recognize it in an answer choice.

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

**Quick test to know you're in permutation-land:** ask yourself, "*if I swap two specific people, is that a different outcome?*" If yes (e.g., Ana-president-Ben-VP vs Ben-president-Ana-VP), it's a permutation. If no (e.g., both are just "on the committee"), it's a combination.

**Special case — all n at once.** When k = n, P(n, n) = n! / 0! = n! / 1 = n!. Reassuring: picking all 7 candidates in order is just arranging 7 things, which is 7! = 5040.

> **Recall prompt.** Cover this section and state the P(n, k) formula from memory. Then explain *why* the denominator is (n − k)!. If you can say "it cancels the arrangements of the objects we never picked — we don't care how the leftover (n − k) candidates order themselves," you own the formula rather than just the label. If you couldn't explain the denominator, re-read the "Why the formula works" paragraph before moving to the check question.

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

**The "exactly X of type A and Y of type B" pattern.** When a problem says "exactly 2 men and 1 woman from 5 men and 4 women," pick independently from each group and multiply:

    C(5, 2) × C(4, 1) = 10 × 4 = 40

This shows up more than any other combination pattern — probably 30% of GMAT combinatorics questions involve some version of it.

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

**Alternating arrangements.** "How many ways can 3 boys and 3 girls sit in a row, alternating by gender?" The key move is to identify valid seat templates before counting arrangements.

With 6 seats in a row, exactly two templates produce a strict alternation:
- Template A: B – G – B – G – B – G (boys in odd seats)
- Template B: G – B – G – B – G – B (girls in odd seats)

For Template A: 3! ways to arrange the boys across the three boy-seats × 3! for the girls = 6 × 6 = 36. Template B gives another 36. Total: **72**.

The approach: **(number of valid templates) × (arrangements per template)**. Count the valid templates first — this is usually 1 or 2 — then multiply. A direct count is faster here than any complement approach.

**Trap to watch for alternating.** When the two groups differ in size — say 4 boys and 3 girls in 7 seats — there may be only ONE valid template (the larger group must occupy the four "odd" positions). Don't reflexively multiply by 2. Sketch the seat map in five seconds and count templates explicitly.

## @circular

In a **circular arrangement** — people around a round table, beads on a bracelet, etc. — **rotations of the same arrangement count as identical**. There's no "seat #1" because every seat is equivalent.

To strip out rotational duplicates: fix one object in place, then arrange the rest linearly.

**Formula:** Circular arrangements of n = **(n − 1)!**

**Example.** 5 people around a round table: (5 − 1)! = 4! = **24**, not 5! = 120.

**Why?** If you rotate any arrangement by one seat, you get the same *relative* ordering — Ana still has Ben to her left and Cal to her right. 5 different rotations all give the same circular arrangement, so 5! / 5 = 4! = 24.

**Watch for distinguishable seats.** A head table with a specific "head" chair, a rectangular table where the ends differ, a round table with numbered chairs — those aren't truly circular. Use n! (normal permutations) if the seats are distinguishable.

**Worked example: labeled chairs.** Six executives sit at a round table where the chairs are numbered 1 through 6. How many arrangements are there?

Because chair 1 is distinguishable from chair 2, rotating everyone one seat forward *changes* the arrangement — Ana moves from chair 1 to chair 2, which is a different outcome. The rotational-equivalence argument breaks down: total arrangements = **6! = 720**, not (6 − 1)! = 120.

The quick test: *Does moving everyone one seat clockwise produce a new arrangement?* If the seats have labels, fixed landmarks, or special positions — yes. Use n!. If the seats are interchangeable — no. Use (n − 1)!. The labeled-chairs answer is exactly 6 times larger than the unlabeled answer, which is the number of rotations.

**Bracelets and necklaces** (rare on GMAT): circular AND flippable. Divide by 2 to account for mirror images. (n − 1)! / 2. If you see this, it's probably a 745+ question — take your best guess and move on if time is tight.

## @repeats

When some objects are **identical**, straight factorial overcounts because swapping identical objects produces the "same" arrangement.

**Formula:** For n objects with repetitions r₁, r₂, …, rₖ (where r₁ + r₂ + … = n):

**n! / (r₁! × r₂! × … × rₖ!)**

**Example.** MISSISSIPPI has 11 letters: 1 M, 4 I's, 4 S's, 2 P's.

    11! / (1! × 4! × 4! × 2!) = 39,916,800 / (1 × 24 × 24 × 2) = 39,916,800 / 1,152 = 34,650

**The shortcut mental model.** Start with "if all were distinct": 11! = 39,916,800. Then divide by the factorial of each repeated group to collapse arrangements that are actually identical.

**Common cases to recognize:**
- **Two letters repeat.** LETTER has 2 T's and 2 E's. 6! / (2! × 2!) = 720 / 4 = 180.
- **Binary sequences.** "How many 7-character strings with exactly 3 A's and 4 B's?" = 7! / (3! × 4!) = 35 (this is C(7, 3) — choosing positions for the A's).

**Connection to combinations.** When you have only two kinds of objects, the multiset arrangement formula collapses into a combination. "How many arrangements of AAABBBB" = C(7, 3) = 35. Useful to internalize — it's the same calculation looked at two ways.

> **Self-explanation prompt.** Why does the MISSISSIPPI formula divide by each repeated group's *factorial* rather than just the count of repeats? Think through a simpler case: four identical letters SSSS. Without any correction, you'd count 4! = 24 arrangements, but they're all the same string. Dividing by 4! collapses all 24 phantom rearrangements down to the 1 real one. That logic applies independently to every repeated group — hence the product of factorials in the denominator. If you can reproduce this reasoning without peeking, the formula is permanent knowledge.

**Trap to watch.** Don't forget *every* repeated group. BANANA has 1 B, 3 A's, and 2 N's — six letters total. The denominator requires both 3! for the A's *and* 2! for the N's: 6! / (3! × 2!) = 720 / 12 = 60. Missing the N factor inflates the answer by 2, which is always a wrong answer choice the test provides.

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

**Final recall challenge.** Before you open the problem sets, close this section and do the following from memory:

1. State the four decision-tree questions in order.
2. Write the formulas for P(n, k) and C(n, k).
3. State the circular-arrangements formula and the one condition that disqualifies it.
4. Describe the multiset formula in one sentence.

If you can complete all four in under two minutes, you're ready to drill. If you stumble on any one, return to that section first — the problem sets test all four simultaneously, and gaps now become costly time sinks on test day.

**What to do next.** Work through the three problem sets in order — easy, then medium, then hard. After each question you miss, identify *which* of the four decisions in the tree you got wrong. Was it order vs. no-order? A missed restriction (adjacent, alternating, forbidden)? A circular arrangement treated as linear? A forgotten repeated group? Naming the specific error is more valuable than re-reading the chapter cold.

Combinatorics typically appears on 1–2 Quant questions per GMAT. That's a small number, but the leverage is high: students with the decision tree automated solve them in under 90 seconds and bank that time for harder algebra. Students without it guess and lose 2–3 minutes. The payoff from mastering this chapter is unusually clear.

When you finish the end-of-chapter sets, keep this table open the first few times. By 15–20 questions done, you won't need it.

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

**Learning objective.** By the end of this chapter, you will be able to classify any combinatorics question into one of four patterns (permutation, combination, restriction, circular/repeated), select the correct formula without guessing, and solve every standard GMAT combinatorics question in under 90 seconds. This first section builds the intuition that every formula in the chapter is shorthand for.

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

**Trap to watch.** The GMAT loves to write a problem that sounds like a permutation but is actually a combination. "A committee of 3 is chosen from 10" is C(10, 3). "A president, VP, and treasurer are chosen from 10" is P(10, 3) = 720, six times larger. The word that usually tips you off: distinct roles named = permutation.

> **Recall check.** Cover the section. State the permutation formula. Then apply it: a school picks a valedictorian, salutatorian, and class speaker from 12 students. How many outcomes? (Answer: P(12, 3) = 12 × 11 × 10 = 1320.) Now the critical test: if instead those same 3 students were chosen to form an "honors committee" with no designated roles, would the answer be larger or smaller — and why? If you can say "smaller, because the same group of 3 people in any order is one committee but six permutations," you've understood the permutation/combination boundary.

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

**Alternating arrangements.** When two categories must strictly alternate (men/women, vowels/consonants, red/blue), first determine which patterns are structurally possible, then multiply the internal arrangements within each group.

**Example.** 4 men and 3 women are seated in a row such that no two women sit next to each other. How many arrangements?

With one more man than woman, the only valid pattern is M _ M _ M _ M — the 3 women fill the 3 gaps between men.

- Arrange the 4 men in the M slots: 4! = 24
- Arrange the 3 women in the W slots: 3! = 6
- Total: 24 × 6 = **144**

**Example with equal counts.** 3 men and 3 women must strictly alternate. Now two patterns work: MWMWMW and WMWMWM.

- Each pattern: 3! × 3! = 6 × 6 = 36
- Two patterns: 36 × 2 = **72**

The general approach: count valid slot patterns first (1 if the groups are unequal, 2 if equal), then multiply by the internal arrangements within each category.

> **Recall check.** Cover the section. State the glue trick in one sentence. State the complement trick in one sentence. State the alternating rule in one sentence. Then solve: in how many ways can 5 people be arranged in a row such that the two tallest are not adjacent? (Complement: 5! total − [glue the two tallest as a block: 4! × 2! = 48] = 120 − 48 = **72**.) If you reached for the glue trick and then subtracted, you've internalized the complement reflex.

## @circular

In a **circular arrangement** — people around a round table, beads on a bracelet, etc. — **rotations of the same arrangement count as identical**. There's no "seat #1" because every seat is equivalent.

To strip out rotational duplicates: fix one object in place, then arrange the rest linearly.

**Formula:** Circular arrangements of n = **(n − 1)!**

**Example.** 5 people around a round table: (5 − 1)! = 4! = **24**, not 5! = 120.

**Why?** If you rotate any arrangement by one seat, you get the same *relative* ordering — Ana still has Ben to her left and Cal to her right. 5 different rotations all give the same circular arrangement, so 5! / 5 = 4! = 24.

**Watch for distinguishable seats.** A head table with a specific "head" chair, a rectangular table where the ends differ, a round table with numbered chairs — those aren't truly circular. Use n! (normal permutations) if the seats are distinguishable.

**Bracelets and necklaces** (rare on GMAT): circular AND flippable. Divide by 2 to account for mirror images. (n − 1)! / 2. If you see this, it's probably a 745+ question — take your best guess and move on if time is tight.

> **Recall check.** Without peeking: why is the circular formula (n − 1)! and not n!? If you can say "because rotating the same arrangement by one seat is still the same arrangement — there's no fixed starting point in a circle — so we fix one person and arrange the remaining n − 1," you'll never confuse circular with linear. Quick check: 6 people around a round table = (6 − 1)! = 120. Correct.

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
| "Must alternate (M/W, vowel/consonant)" | Alternating | Count valid patterns × group arrangements |
| "Round table of n" | Circular | (n − 1)! |
| "Letters of [repeated word]" | Multiset | n! / (r₁! × r₂! × …) |
| "Round-robin: every pair plays once" | Combination | C(n, 2) |

When you finish the end-of-chapter sets below, keep this table open. By the time you've done 15-20 combinatorics questions with it at your elbow, you won't need it anymore.

**What to do next.**

1. **Easy set first.** If you're aiming above 645, you should hit 90%+ accuracy on the easy set in one pass. Anything you miss there is a formula recall gap — revisit the relevant section before moving on.
2. **Medium set.** The medium questions will test the restriction and circular concepts most. If you miss more than 2, re-read `@restrictions` and `@circular` and retry those specific questions.
3. **Hard set.** Hard questions almost always combine two patterns (e.g., circular arrangement with a forbidden adjacency). Work through the four-question decision tree above on each one — don't shortcut.
4. **Error log.** Tag wrong answers: use **Conceptual** if you mis-classified order vs. no-order, **Strategy** if you chose the wrong formula type (permutation vs. combination), or **Careless** for arithmetic errors.
5. **Next chapter.** Combinatorics feeds directly into the **Statistics and Probability** chapter — probability questions frequently require combination counting to compute the favorable and total outcome spaces. Complete that chapter next.

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

  - id: probability
    type: reading
    title: "Probability — counting favorable outcomes"
    check_question_ids:
      - combinatorics-q24
      - combinatorics-q21

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
      - combinatorics-q24
      - combinatorics-q27
      - combinatorics-q29
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
      - combinatorics-q19
      - combinatorics-q21
      - combinatorics-q22
      - combinatorics-q28
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

> **Self-explanation prompt.** Before the check questions: apply the complement trick to this setup — "5 people in a row, Ana and Ben must NOT be adjacent." Total arrangements: 5! = 120. Adjacent arrangements: glue Ana-Ben as a block → 4 items × 4! × 2 = 48. Not adjacent = 120 − 48 = **72**. If your setup didn't match that, re-read the complement section. If it did, you've internalized the most important technique in this chapter.

## @circular

In a **circular arrangement** — people around a round table, beads on a bracelet, etc. — **rotations of the same arrangement count as identical**. There's no "seat #1" because every seat is equivalent.

To strip out rotational duplicates: fix one object in place, then arrange the rest linearly.

**Formula:** Circular arrangements of n = **(n − 1)!**

**Example.** 5 people around a round table: (5 − 1)! = 4! = **24**, not 5! = 120.

**Why?** If you rotate any arrangement by one seat, you get the same *relative* ordering — Ana still has Ben to her left and Cal to her right. 5 different rotations all give the same circular arrangement, so 5! / 5 = 4! = 24.

**Watch for distinguishable seats.** A head table with a specific "head" chair, a rectangular table where the ends differ, a round table with numbered chairs — those aren't truly circular. Use n! (normal permutations) if the seats are distinguishable.

**Bracelets and necklaces** (rare on GMAT): circular AND flippable. Divide by 2 to account for mirror images. (n − 1)! / 2. If you see this, it's probably a 745+ question — take your best guess and move on if time is tight.

> **Self-explanation prompt.** Why does circular arrangement of n give (n − 1)! instead of n!? If you can explain "because fixing one person removes the n rotations that are all the same arrangement," you've internalized the formula rather than memorized it. Follow-up: what would change if the chairs were numbered? (Answer: numbered chairs = distinguishable seats = n!, because rotation 1 and rotation 2 are now genuinely different.)

## @repeats

When some objects are **identical**, straight factorial overcounts — swapping two identical items produces the "same" arrangement, so it shouldn't count twice.

**Why overcounting happens (small example first).** Arrange the letters in "AAB."

If the two A's were distinct — call them A₁ and A₂ — there would be 3! = 6 arrangements: A₁A₂B, A₁BA₂, A₂A₁B, A₂BA₁, BA₁A₂, BA₂A₁. But since A₁ and A₂ are identical, each arrangement that swaps them is the same word: "AAB," "ABA," "BAA" — only **3** distinct arrangements. We divided by 2! (the factorial of the repeated group) to correct for the overcount.

**The formula:** For n objects with repeated groups of sizes r₁, r₂, …, rₖ:

**n! / (r₁! × r₂! × … × rₖ!)**

**Worked example — COFFEE.** COFFEE has 6 letters: C, O, F, F, E, E. Two groups repeat: the F's (r₁ = 2) and the E's (r₂ = 2).

    6! / (2! × 2!) = 720 / 4 = 180 distinct arrangements

Note: you divide by 2! **twice** — once for each repeated pair. A common mistake is dividing only once (getting 360) when two separate groups both repeat.

**Worked example — MISSISSIPPI.** 11 letters: 1 M, 4 I's, 4 S's, 2 P's.

    11! / (1! × 4! × 4! × 2!) = 39,916,800 / 1,152 = 34,650

You'd never compute this on the GMAT — recognize the structure and confirm you're applying one divisor per repeated group.

**Common cases to recognize:**
- **Binary sequences.** "How many 7-character strings with exactly 3 A's and 4 B's?" = 7! / (3! × 4!) = 35. This is identical to C(7, 3) = 35 — choosing which 3 of the 7 positions get an A.
- **Word problems.** "How many ways can 3 identical red flags, 2 identical blue flags, and 1 green flag be arranged in a row?" = 6! / (3! × 2! × 1!) = 60.

**Connection to combinations.** When there are exactly two types of objects (k of type A, n − k of type B), the formula collapses: n! / (k! × (n−k)!) = C(n, k). Multiset arrangements with two distinct items ARE combinations, looked at from the arrangement side. If you find yourself computing C(n, k) and also computing a multiset arrangement, you might be doing the same calculation twice.

> **Self-explanation prompt.** Before the check question: COFFEE has 6 letters with two pairs of repeats. What is the divisor — and why is it 4, not 2, not 6? If you can say "4 because we divide by 2! for the F-pair and 2! for the E-pair, and 2 × 2 = 4," you've understood the structure. If you'd have written 6 (= 3!), re-read the overcount explanation with the AAB example.

## @probability

Probability on the GMAT rests on one definition:

**P(event) = favorable outcomes / total outcomes**

Counting the favorable and total outcomes is exactly what permutations and combinations are for. Once you see that, probability questions become combinatorics problems with a fraction at the end — not a separate topic.

**How to set up the denominator and numerator.**

When drawing k items from a group of n without caring about order:
- **Total outcomes** = C(n, k) — every possible selection
- **Favorable outcomes** = C(favorable items, items needed from that group) × C(other items, items needed from others)

**Worked example.** A bag holds 4 red and 6 blue marbles. Three are drawn at random. P(all three are red)?
- Total: C(10, 3) = 120
- Favorable (all 3 from the 4 red): C(4, 3) = 4
- P = 4/120 = **1/30**

**With replacement vs without replacement — the most tested distinction.**

This is the distinction the GMAT exploits most. The two setups give different answers, and the wrong setup will appear as an answer choice.

**With replacement:** the item goes back after each draw. Population stays constant. Draws are **independent**: P(A and B) = P(A) × P(B).

**Without replacement:** item stays out. Population shrinks. Draws are **dependent**: adjust the denominator after each pick, or use C(n, k) to count unordered selections.

**Comparison example.** Bag: 6 red, 4 blue. Pick 2 marbles. P(both red)?

*With replacement* (first marble returned before second draw):
- Each draw is independent. P(red) = 6/10 = 3/5 each time.
- P(both red) = 3/5 × 3/5 = **9/25**

*Without replacement* (first marble stays out):
- Total unordered selections: C(10, 2) = 45
- Both-red selections: C(6, 2) = 15
- P(both red) = 15/45 = **1/3**

9/25 vs 1/3. Both will appear in the answer choices when the problem only specifies one setup. Know which you're in before calculating.

**"At least one" — always use the complement.**

"At least one" computed directly requires summing "exactly 1" + "exactly 2" + ... — multiple fractions to add. The complement collapses it to a single calculation:

**P(at least one A) = 1 − P(no A at all)**

**Worked example.** A drawer has 10 socks: 4 black, 4 blue, 2 red. Three are drawn at random. P(at least one black)?
- Complement: P(no black) — all 3 from the 6 non-black socks
- P(no black) = C(6, 3) / C(10, 3) = 20/120 = 1/6
- P(at least one black) = 1 − 1/6 = **5/6**

Direct computation: P(exactly 1 black) + P(exactly 2 black) + P(exactly 3 black). Three fractions, three combination calculations, three chances for an arithmetic slip. Use the complement — it's almost always faster when the "none" case is simple.

**Binomial probability — repeated independent trials.**

When the same binary trial repeats n times (each success with probability p), and you want exactly k successes:

**P(exactly k of n) = C(n, k) × p^k × (1 − p)^(n − k)**

The C(n, k) counts which k of the n trials are successes. The p^k × (1−p)^(n−k) is the probability of any single sequence with exactly k successes. Multiply because there are C(n, k) equally-probable such sequences.

**Worked example.** A fair coin is flipped 5 times. P(exactly 3 heads)?
- C(5, 3) = 10 distinct sequences contain exactly 3 heads
- Each sequence: (1/2)^3 × (1/2)^2 = (1/2)^5 = 1/32
- P = 10 × 1/32 = 10/32 = **5/16**

**Quick classification for probability questions:**

| Situation | Approach |
|---|---|
| Single draw | P = favorable / total |
| Multiple draws, item replaced | Independent → multiply individual probabilities |
| Multiple draws, no replacement | C(n, k) denominator for unordered selections |
| "At least one" | Complement: 1 − P(none) |
| n identical independent trials, exactly k successes | Binomial: C(n, k) × p^k × (1−p)^(n−k) |

> **Self-explanation prompt.** Before the check questions: a bag has 5 red and 3 blue marbles, and you pick 2 without replacement. What is the total number of outcomes? Why is C(8, 2) = 28 the right denominator — not 8 × 7 = 56? The answer: C(8, 2) counts unordered pairs (the two selections have no first/second distinction); 8 × 7 counts ordered sequences. Both are valid if you're consistent — but (unordered favorable) / (unordered total) = C(n, k) approach is cleaner and less error-prone for multi-pick problems. If you mix ordered in the numerator with unordered in the denominator, the fraction breaks.

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
| "At least 1 of type A" | Complement (counting) | Total − (none of A) |
| "Must sit together" | Glue trick | Arrange block + others, then × internal |
| "Round table of n" | Circular | (n − 1)! |
| "Letters of [repeated word]" | Multiset | n! / (r₁! × r₂! × …) |
| "Round-robin: every pair plays once" | Combination | C(n, 2) |
| "P(at least one ___)?" | Complement (probability) | 1 − P(none) |
| "Drawn with replacement" | Independent events | Multiply individual P's |
| "Drawn without replacement" | Dependent events | C(n, k) denominator |
| "Exactly k successes in n trials" | Binomial | C(n, k) × p^k × (1−p)^(n−k) |

**What to do next.**

Work through the problem sets below using this table at your elbow. For the first 5–7 questions, explicitly run through the four-question decision tree before computing anything. After 10–15 questions, the classification should feel automatic.

When you make a mistake, log it in the Error Log. Combinatorics errors almost always fall into two categories:
- **Conceptual:** chose the wrong formula (permutation vs combination, or forgot the complement)
- **Strategy:** right idea, wrong execution (missed an internal ordering factor, forgot to subtract a case)

Arithmetic errors are rare here — most answers are exact small integers. If you're getting "close but wrong" answers, the error is structural, not computational. Re-read the section that corresponds to the formula you misapplied.

After combinatorics, the natural next chapter is **Statistics and Probability**, which extends probability into expected value and multi-step event chains. For an equally important test skill, **Data Sufficiency** rewards the same systematic case enumeration you've been building here.

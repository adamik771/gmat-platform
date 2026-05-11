---
slug: combinatorics
title: Combinatorics
section: Quant
estimated_minutes: 45
prerequisites: []
summary: |
  Combinatorics on the GMAT is a small number of patterns repeated constantly. Learn four decisions — does order matter? are there identical objects? is there a constraint? is it circular or linear? — and the question solves itself. Memorize n!, P(n,k), and C(n,k), internalize the glue trick and complement, and every combinatorics question on test day takes under two minutes.
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
      - combinatorics-q13

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

Enumeration means **writing out every possibility and counting them**. It sounds primitive, but it's the foundation every combinatorics formula is built on — and for small sets of 3 or 4 objects, it's often the fastest approach on the GMAT.

**Mental model.** Before reaching for any formula, answer two questions: *does order matter?* and *are repeats allowed?* Every formula in this chapter — permutations, combinations, multisets — is a shortcut for enumeration under specific answers to those two questions. Skipping the classification step and jumping to a formula is the single most common combinatorics mistake on the GMAT.

**Worked example.** Three awards — gold, silver, bronze — are given to three students (Ana, Ben, Cal). Each student gets exactly one award. How many assignments are possible?

List them systematically (who gets gold / silver / bronze):

    Ana-Ben-Cal, Ana-Cal-Ben, Ben-Ana-Cal, Ben-Cal-Ana, Cal-Ana-Ben, Cal-Ben-Ana

Six assignments. No formula needed.

**Why this is 3! — derived, not memorized.** Count the choices position by position:
- 3 choices for gold
- 2 remaining for silver (one person is already assigned)
- 1 remaining for bronze

Multiply: 3 × 2 × 1 = 6 = 3!

Every additional position multiplies by one fewer because each choice removes one option from the pool. That's the logic behind every factorial, and it's the logic that lets you re-derive any permutation formula in 10 seconds when memory fails under pressure.

*Memorize these — they appear constantly in answer choices:*

| n | n! |
|---|---|
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |
| 6 | 720 |
| 7 | 5040 |

> **Self-explanation prompt.** Without looking above: why does the count for n objects equal n × (n − 1) × … × 1 rather than something else? If you can say "because each position has one fewer available choice than the last," you've understood the mechanism — and you own it rather than just memorizing it.

## @permutations

A **permutation** is an arrangement where **order matters**. President and VP are different roles — swapping the two people creates a different outcome.

**Mental model.** Ask one question: *if I swap two of the selected people, does that create a different outcome?* If yes, it's a permutation. If no (e.g., all three are just "committee members"), it's a combination. That single question resolves every P-vs-C ambiguity on the GMAT.

**Worked example.** From 7 job candidates, a CFO and a COO are hired. How many outcomes?

The roles are distinct — CFO is not COO — so swapping two candidates gives a different result. Count slot by slot:
- 7 choices for CFO
- 6 remaining for COO
- 7 × 6 = **42**

This is **P(7, 2)**, a permutation of 2 chosen from 7.

**The formula.** P(n, k) = n! / (n − k)!

Verify: P(7, 2) = 7! / 5! = (7 × 6 × 5!) / 5! = 7 × 6 = 42. The (n − k)! cancels the factorial tail of the unchosen objects — we don't care how the leftover 5 candidates would order themselves.

**Worked example.** How many 3-digit PIN codes can be formed from the digits 1–5 with no digit repeated?

132 and 312 are different PINs, so order matters. Slot by slot: 5 × 4 × 3 = **60**.

Check: P(5, 3) = 5! / 2! = 120 / 2 = 60. ✓

**Trap to watch.** Named distinct roles signal permutations. Unnamed equal roles signal combinations. "A president, VP, and treasurer from 10 people" is P(10, 3) = 720. "A committee of 3 from 10 people" is C(10, 3) = 120. That's a factor of 6 difference — the test puts both in the answer choices. The word *committee* is almost always a combination flag.

> **Self-explanation prompt.** State the P(n, k) formula from memory, then explain in one sentence why the denominator is (n − k)! rather than k!. If you can articulate the "cancel the tail" reasoning, you won't confuse P and C formulas under pressure.

> **Recall check.** Without looking: how many ways can gold, silver, and bronze medals be awarded to 8 athletes? Set up and compute: 8 × 7 × 6 = 336 = P(8, 3). If you had to look up the slot-multiplication approach, re-read the example above and try once more in 5 minutes.

## @combinations

A **combination** is a selection where **order doesn't matter**. The same three people in any order form the same team.

**Mental model.** Every combination is a permutation with the overcounting divided out. The same k objects can be arranged k! different ways — but for combinations, all those arrangements are the same selection. So C(n, k) = P(n, k) ÷ k!.

**The formula.** C(n, k) = n! / (k! × (n − k)!)

Also written ⁿCₖ or (n choose k).

**Worked example.** A team of 3 is picked from 6 students. How many possible teams?

- If order mattered: P(6, 3) = 6 × 5 × 4 = 120
- Each team of 3 was counted 3! = 6 times (Ana-Ben-Cal, Ana-Cal-Ben, Ben-Ana-Cal…)
- Divide out the overcount: 120 / 6 = **20**

Check: C(6, 3) = 6! / (3! × 3!) = 720 / 36 = 20. ✓

**Symmetry shortcut.** C(n, k) = C(n, n − k). Choosing 3 from 6 is the same as choosing which 3 to *exclude*. This saves real work: C(10, 7) = C(10, 3) = 120. Whenever k is closer to n than to 0, flip it.

**Quick-reference values — memorize these:**
- C(n, 0) = C(n, n) = 1
- C(n, 1) = C(n, n − 1) = n
- C(n, 2) = n(n − 1) / 2 (the number of distinct pairs from n objects)

**Worked example — the "type A and type B" pattern.** "Exactly 2 men and 1 woman from a group of 5 men and 4 women."

Select from each group independently, then multiply:

    C(5, 2) × C(4, 1) = 10 × 4 = 40

This pattern — pick separately from each group, multiply — appears in roughly a third of all GMAT combinatorics questions. Recognize it on sight.

> **Recall check.** Without looking: (1) state the formula for C(n, k); (2) write C(n, 2) as a simple expression without factorials; (3) compute C(10, 7) using the symmetry shortcut. Then try: "5 friends need to pick 2 people to present at a meeting — how many ways?" Answer: C(5, 2) = 10. If any step required looking back, re-read and retry in 5 minutes. Retrieving formula + symmetry + application in sequence is how they wire together in long-term memory.

## @restrictions

Restriction problems appear in roughly half of medium-to-hard combinatorics questions. Three techniques cover them all. Learn to identify which technique fires from a single phrase.

---

**Technique 1: The glue trick — "must be adjacent."**

**Mental model.** Gluing two objects into one block reduces the arrangement size by 1. The block's internal order is a separate sub-problem — count it, then multiply.

**Worked example.** In how many arrangements of LESSON do the two S's appear next to each other?

LESSON has 6 letters: L, E, S, S, O, N.

- Glue the two S's into one "SS" block. Now arrange 5 items: {SS, L, E, O, N}. Count: 5! = 120.
- The two S's are identical, so no internal multiplier.
- Answer: **120**.

If the two glued items are *distinct* (e.g., two named people who must sit together), multiply by 2! for the internal AB vs BA ordering. Six people in a row with Ana and Ben adjacent: 5! × 2 = **240**.

---

**Technique 2: The complement — "not adjacent" or any forbidden arrangement.**

**Mental model.** The complement is your shortcut when the forbidden condition is one clean calculation but the allowed condition has multiple sub-cases. Total − forbidden = allowed.

**Worked example.** Six people in a row — Ana and Ben must *not* be adjacent.

- Total: 6! = 720
- Adjacent (glue trick): 5! × 2 = 240
- Not adjacent: 720 − 240 = **480**

---

**Technique 3: "At least one" — almost always use complement.**

Counting "at least one" directly means splitting into separate cases (exactly 1, exactly 2, exactly 3…) and summing them. The complement collapses it to two steps.

**Worked example.** A committee of 3 is chosen from 5 men and 4 women. How many committees contain at least 1 woman?

- Total committees: C(9, 3) = 84
- Committees with *no* women: C(5, 3) = 10
- At least 1 woman: 84 − 10 = **74**

**Speed tip.** When you see "at least one" or "not all" in a combinatorics problem, write "Total − none" in your margin immediately. You'll reach the answer in two steps instead of four.

> **Self-explanation prompt.** Why is "not adjacent" almost always faster via complement than by direct counting? If you can say "because adjacency is one clean glue-trick calculation, while non-adjacency requires tracking every valid gap pattern," you've understood why the complement is the default tool — not just a fallback.

## @circular

In a **circular arrangement**, there is no fixed starting position. Rotating every person one seat clockwise produces the same relative ordering — Ana still has Ben to her left, Cal to her right. There's no seat #1 to anchor the count.

**Mental model.** Fix one person in place. This eliminates all rotational duplicates because every arrangement of the remaining (n − 1) people around the fixed anchor is genuinely distinct. You've converted a circular problem into a linear one of size n − 1.

**The formula.** Circular arrangements of n distinct objects = **(n − 1)!**

**Worked example.** 5 people are seated around a round table.

- If the seats were labeled (linear logic): 5! = 120
- Each distinct circular arrangement appears 5 times — once per rotation
- Circular count: 5! / 5 = 4! = **24**

Or equivalently: fix one person. Arrange the other 4 in the remaining seats: 4! = 24.

**When circular doesn't apply.** If seats are distinguishable — a rectangular table with a "head" seat, a carnival ride where each car has a different view, a round table with numbered plaques — the positions are not equivalent. Use n! (standard permutations), not (n − 1)!.

**Worked example (distinguishable seats).** A rectangular dinner table has one chair marked "host." Five people (including the host) are seated around it. How many distinct arrangements?

The host's chair is uniquely labeled — it anchors the arrangement the same way seat #1 does in a row. This is a linear seating problem with 5 distinct positions. Answer: 5! = **120**.

Contrast: an unlabeled round table, same 5 people, no special seat → (5 − 1)! = 24. The single labeled seat restores one degree of freedom and multiplies the count by 5.

**Trap to watch.** The test says "round table" and students reflexively apply (n − 1)!. Read for anything that uniquely identifies one position: "host chair," "seat facing the door," "seat with the window view," or a role like "speaker's seat." One labeled seat converts the problem to linear. If you see "round" alongside any uniquely-identified seat, use n!, not (n − 1)!.

**Bracelets and necklaces (rare on GMAT).** Circular *and* flippable — the mirror image counts as the same arrangement. Formula: (n − 1)! / 2. This is a 745+ question. If you see it under time pressure, estimate and move on.

> **Self-explanation prompt.** Why is the formula (n − 1)! rather than n!? If you can say "because n rotations of any arrangement all describe the same circular seating, so we divide n! by n — which gives (n − 1)!," you own the derivation and won't misapply it to problems with distinguishable seats.

## @repeats

When some objects are **identical**, swapping them produces the same arrangement — but straight factorial treats them as different. The fix: divide by the factorial of each repeated group.

**Mental model.** Start with n! as if every object were distinct. Then collapse: for each group of r identical objects, those r items can be rearranged r! ways among themselves, every one producing the same outcome. Divide by r! to remove those false "different" arrangements.

**The formula.** For n objects with repeated groups of sizes r₁, r₂, …, rₖ:

**n! / (r₁! × r₂! × … × rₖ!)**

**Worked example.** How many distinct arrangements of LESSON exist?

LESSON has 6 letters: L, E, S, S, O, N. One repeated group: 2 S's.

    6! / 2! = 720 / 2 = 360

**Worked example.** How many distinct arrangements of MISSISSIPPI exist?

11 letters: 1 M, 4 I's, 4 S's, 2 P's.

    11! / (4! × 4! × 2!) = 39,916,800 / (24 × 24 × 2) = 34,650

Start with 11! = 39,916,800 (if all were distinct). Divide by 4! twice (for I's and S's) and 2! once (for P's) to collapse the overcounting.

**The connection to combinations.** When there are exactly two types of objects, the multiset formula collapses into a combination. "How many 7-character strings have exactly 3 A's and 4 B's?" = 7! / (3! × 4!) = C(7, 3) = 35. You're choosing which 3 positions receive the A. Internalize this connection — it's the same calculation viewed from two directions, and recognizing it saves arithmetic.

**Common cases:**
- One pair of identical items: n! / 2!
- Two pairs: n! / (2! × 2!)
- Binary strings (k items of type A, rest of type B): C(n, k)

**Trap to watch.** The most common error is forgetting to account for *all* repeated groups. In MISSISSIPPI, students often catch the 4 S's and 4 I's but miss the 2 P's — overcounting by a factor of 2 and landing on 69,300 instead of 34,650. Before writing any factorials, list every distinct letter (or object type) and its count. A group of size 1 contributes 1! = 1 to the denominator and doesn't change the answer — but writing it forces you to check every group is accounted for.

> **Self-explanation prompt.** Before the check questions: why does the denominator include *only the repeated group sizes*, not all n letters? If you can say "because a lone item can't be rearranged with itself — 1! = 1 — so it contributes nothing to the overcounting we need to remove," you've understood the formula and won't add unnecessary factorial terms to the denominator.

> **Recall check.** Without looking: state the multiset formula. Then apply it: how many distinct arrangements does BANANA have? (6 letters: 3 A's, 2 N's, 1 B → 6! / (3! × 2!) = 720 / 12 = 60.) Write the full denominator before doing any arithmetic — the setup is the skill, not the number.

## @decision

Every combinatorics question on the GMAT reduces to four decisions. The formula is never your first step — classification is.

**Key takeaway.** Students who reach for a formula first misapply it at least 30% of the time on unfamiliar problems. Students who classify first almost never do. Run the four questions below before you write a single number.

**1. Does order matter?**
- **Yes** → permutation (P formula, or slot-by-slot multiplication)
- **No** → combination (C formula)

**2. Are there repeated or identical objects?**
- **Yes** → divide by the factorial of each repeated group
- **No** → use P or C directly

**3. Is there a constraint?**
- **Must be adjacent** → glue trick
- **Not adjacent / forbidden** → complement (total − adjacent)
- **At least one** → complement (total − none)

**4. Is the arrangement circular or linear?**
- **Circular, indistinguishable seats** → (n − 1)!
- **Linear, or seats are distinguishable** → n! or P formula

**Pattern table — know these on sight:**

| Problem says | You're doing | Formula |
|---|---|---|
| "How many orders…" | Permutation | n! or P(n, k) |
| "Committee of k from n" | Combination | C(n, k) |
| "Exactly X of type A and Y of type B" | Product of combinations | C(nA, X) × C(nB, Y) |
| "At least 1 of type A" | Complement | Total − (none of A) |
| "Must sit / stand together" | Glue trick | Arrange block + others, × internal orderings |
| "Round table of n" | Circular | (n − 1)! |
| "Letters of [repeated word]" | Multiset | n! / (r₁! × r₂! × …) |
| "Every pair plays once" / round-robin | Combination of 2 | C(n, 2) |

**What to do next.** Work the problem sets in order — easy, then medium, then hard. For every question you miss, write one sentence identifying which of the four classification questions you answered wrong. "I used the wrong formula" is not a diagnosis. "I failed to ask whether the seats were distinguishable" is.

Any pattern that trips you up across two attempts belongs in your error log under "Strategy" (wrong technique for the scenario) or "Conceptual" (misunderstood the underlying rule). Both tags route the question back into your spaced-review queue, so each tagged mistake actively reduces future errors on the same pattern.

Once you've worked through 15–20 questions with this table visible, close it. The goal is automatic classification — four decisions in six seconds, no table needed. Students who score 700+ on combinatorics questions aren't doing faster arithmetic; they've eliminated the classification step from their cognitive load entirely. That's what turns a 90-second problem into a 45-second one.

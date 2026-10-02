---
slug: quant-25-permutations-combinations
title: "Permutations & Combinations"
section: Quant
estimated_minutes: 90
prerequisites:
  - quant-24-counting-basics
summary: |
  Order-matters vs order-doesn't, multiset arrangements with repeats, and circular arrangements.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - combinatorics-q62
      - combinatorics-q51
  - id: permutations
    type: reading
    title: "Permutations — when order matters"
    check_question_ids:
      - combinatorics-q87
  - id: combinations
    type: reading
    title: "Combinations — when order doesn't matter"
    check_question_ids:
      - combinatorics-q74
  - id: repeats
    type: reading
    title: "Repeated letters and multiset arrangements"
    check_question_ids:
      - combinatorics-q63
  - id: circular
    type: reading
    title: "Circular arrangements"
    check_question_ids:
      - combinatorics-q70
      - combinatorics-q94
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
      - combinatorics-q50
      - combinatorics-q78
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - combinatorics-q61
      - combinatorics-q89
---

## @summary

- Ask whether order matters before choosing a formula: permutations arrange, combinations select.
- Handle repeated objects or circular symmetry before counting, or the raw factorial will overcount.
- Break multi-stage problems into choose-then-arrange steps and verify that restrictions are applied at the correct stage.

## @permutations

A **permutation** is an arrangement where **order matters**. "Who got first, second, and third place" is a permutation. "Who is on the team" is not. The entire chapter hinges on this one distinction, so before you touch a formula, train the instinct that decides it: *would swapping two of the chosen items produce a genuinely different outcome?* If yes, you are counting permutations. If no, you are counting combinations. This single reflex is worth more than any formula on the page — the test writers know that students who memorize P(n, k) but never internalize the swap test will reach for it on combination problems and inflate every answer by a factor of k!.

**Build it with slots first, then use the formula.** From 7 candidates, a president and a vice-president are chosen. How many outcomes?

- Slot 1 (president): 7 choices
- Slot 2 (VP): 6 remaining choices
- Total: 7 × 6 = **42**

That's a permutation of 2 from 7, written **P(7, 2)**. The general formula:

**P(n, k) = n! / (n − k)!**

Sanity-check: P(7, 2) = 7! / 5! = (7 × 6 × 5!) / 5! = 7 × 6 = 42. ✓

**Why the formula works.** n! arranges ALL n objects. The (n − k)! in the denominator cancels the tail — the arrangements of the objects you didn't pick. You only care about which k objects fill the k named slots. There is a cleaner mental image, though, and it is the one to keep: a permutation is just the **slot method** done in one breath. You have k slots; the first has n choices, the next n − 1, and so on for k factors counting *down*. P(7, 2) = 7 × 6. P(9, 4) = 9 × 8 × 7 × 6. The factorial formula and "multiply k descending integers starting at n" are the same thing — and on the test the descending-product version is faster and far less error-prone than writing out factorials and cancelling. A reliable check that you have the right number of factors: the *count* of factors equals k, and the *last* factor is always n − k + 1. For P(9, 4) the last factor is 9 − 4 + 1 = 6, which matches 9 × 8 × 7 × 6. If your last factor doesn't equal n − k + 1, you wrote down too many or too few terms.

**Quick test:** ask yourself, "*if I swap two specific people, do I get a different outcome?*" Ana-president, Ben-VP is different from Ben-president, Ana-VP. Different outcome = permutation. Same people on a committee in any order = combination.

**Special case — all n at once.** P(n, n) = n! / 0! = n!. Picking all 7 candidates in order = 7! = 5040. The 0! = 1 is not a typo or a convention pulled from nowhere: there is exactly **one** way to arrange zero objects (do nothing), so 0! must equal 1 for the formula to stay consistent. Memorize 0! = 1; it shows up the instant k = n.

> **Recall check.** Without writing out any factorial, what is P(8, 3)? (8 × 7 × 6 = 336 — three descending integers starting at 8, last factor 8 − 3 + 1 = 6.)

**Micro-drill — three variations, one base problem.** Seven runners finish a race. In each case, what's the count?

| Scenario | Count | Why |
|---|---|---|
| How many orders for all 7 runners? | 7! = 5,040 | All n objects, all slots |
| How many ways to award gold/silver/bronze? | P(7, 3) = 210 | 3 named slots, order matters |
| How many ways to pick 3 runners for a team photo (no roles)? | C(7, 3) = 35 | 3 unnamed slots, order doesn't matter |

Notice that the permutation count (210) is exactly 3! = 6 times the combination count (35). Those 6 extra arrangements are the internal orderings of the same 3 people that a combination collapses into one. This factor of k! is the bridge between the two worlds, and you will use it constantly: **P(n, k) = C(n, k) × k!**. Whenever a problem feels like "choose, then arrange," that equation is the engine underneath.

**Worked example (easy).** A code is made by placing 4 different letters from {A, B, C, D, E} into 4 positions. How many codes are possible?

- Order matters here — ABCD and DCBA are different codes — and no letter repeats.
- This is P(5, 4): four descending integers starting at 5.
- 5 × 4 × 3 × 2 = **120.**

Note you do *not* need 4 letters out of 5 to "leave one behind" as a special step; the descending product handles it automatically — the fourth factor is 2 because two letters were already used. Notice also that P(5, 4) = P(5, 5) = 120, because choosing 4 of 5 to arrange and arranging all 5 give the same total: once you place 4 letters, the 5th has only one home. That coincidence is a useful sanity check, not a rule — it only happens when k = n − 1.

**Worked example (medium) — the slot method with a restriction.** How many 3-digit numbers have all distinct digits and are even? (A 3-digit number cannot start with 0.)

This is the kind of problem where **filling the most-restricted slot first** is the whole game. Two slots carry constraints: the units digit must be even, and the hundreds digit cannot be 0. The units digit is the *more* restrictive of the two in a sneaky way, because whether it consumes the digit 0 changes the count for the hundreds slot. So split into cases on the units digit.

- **Case 1: units digit is 0.** Units slot: 1 way (just 0). Hundreds: 0 is already used, so any of 1–9 → 9 choices. Tens: any of the remaining 8 digits. Count = 1 × 9 × 8 = 72.
- **Case 2: units digit is 2, 4, 6, or 8.** Units slot: 4 choices. Hundreds: cannot be 0 and cannot equal the units digit, so from 10 digits remove those 2 → 8 choices. Tens: any of the remaining 8 digits. Count = 4 × 8 × 8 = 256.
- Total = 72 + 256 = **328.**

The lesson: when one constraint interacts with another (here, "0 is both even and forbidden as a leading digit"), **case-split on the interacting choice** rather than trying to patch a single multiplication. Students who try to do it in one line typically write 5 (even units) × 8 × 8 = 320, silently allowing 0 to lead in the units-is-0 branch and undercounting by 8 — or they write 5 × 9 × 8 = 360 and let 0 lead, overcounting. The case split is the only safe path.

> **Recall check.** In the slot method, which slot do you fill first? (The most restricted one — handle the tightest constraint before the free choices, and case-split when two constraints collide.)

**Worked example (medium-hard) — items that must stay together.** Five books (call them A, B, C, D, E) are arranged on a shelf. A and B must be next to each other. How many arrangements?

The trick is **"glue the block."** Treat the pair AB as a single super-item. Now you have 4 items to arrange: [AB], C, D, E. That's 4! = 24 arrangements. But inside the block, A and B can be in 2 orders (AB or BA), so multiply by 2!: 24 × 2 = **48.**

Edge case to keep straight: if the problem said A and B must *not* be adjacent, you'd take total minus together: 5! − 48 = 120 − 48 = **72.** "Must not be adjacent" almost always means *total minus glued*, because counting the non-adjacent arrangements directly is far slower. The glue trick generalizes: if *three* specific books had to stay together, you'd glue them into one block (giving 3! = 6 items to arrange) and multiply by 3! = 6 for their internal order, for 6! / ... wait — be careful: 3 glued items among 5 books leaves [block], C, D = 3 items, so 3! × 3! = 6 × 6 = 36. Always recount how many *units* remain after gluing.

**Worked example (hard) — backsolving a permutation equation.** If P(n, 2) = 90, what is n? You could solve n(n − 1) = 90 algebraically (n² − n − 90 = 0 → (n − 10)(n + 9) = 0 → n = 10), but on the clock **backsolving from the answer choices** is faster and immune to algebra slips. Suppose the choices are 9, 10, 11, 12, 13.

- P(n, 2) means n × (n − 1).
- Try the middle choice, 11: 11 × 10 = 110. Too big.
- Step down to 10: 10 × 9 = 90. ✓

Answer: **n = 10.** Backsolving works beautifully here because P(n, 2) is *monotonic* in n — it only grows as n grows — so one test tells you which direction to move. Name the tactic and reach for it whenever a permutation or combination equals a specific number and n (or k) is unknown.

**Worked example (hard) — a two-stage "choose then arrange" with a hidden restriction.** A committee must seat 3 of its 8 members in a row of 3 chairs for a photo, but the chairperson (a specific one of the 8) must occupy the leftmost chair if she is seated at all; she does not have to be seated. How many photo arrangements are possible?

This rewards splitting on whether the chairperson appears, because her presence forces a slot.

- **Case 1: chairperson is in the photo.** She must take the leftmost chair: 1 way. The other two chairs are filled by 2 of the remaining 7 members, in order: P(7, 2) = 7 × 6 = 42. Subtotal = 1 × 42 = 42.
- **Case 2: chairperson is not in the photo.** All three chairs come from the other 7 members, in order: P(7, 3) = 7 × 6 × 5 = 210. Subtotal = 210.
- Total = 42 + 210 = **252.**

A fast cross-check using **the C × k! bridge**: total unrestricted arrangements of 3 from 8 is P(8, 3) = 336. By symmetry, when all 8 are equally likely and order is free, the chairperson sits in each of the 3 chairs equally often when she is among the chosen — but here the *unrestricted* count where she is present and somewhere is P(8,3) − P(7,3) = 336 − 210 = 126, and exactly one-third of those put her on the left: 126 / 3 = 42. That matches Case 1, confirming 42 + 210 = 252. When two independent methods agree, you can move on with confidence.

> **Self-explanation prompt.** State, without looking up, why P(n, k) / k! = C(n, k). If you can say "because each group of k people appears k! times in the permutation count — once per ordering — and we divide to collapse all those orderings into one," you understand the relationship cold.

**Trap to watch.** "A committee of 3 is chosen from 10" is C(10, 3) = 120. "A president, VP, and treasurer are chosen from 10" is P(10, 3) = 720. Six times larger — because roles make order matter. The signal: are the positions named and distinct? A subtler version of this trap hides in word choice. "Arrange," "rank," "order," "schedule," "seat in a row," "award medals," "first/second/third," and "form a number/code/word" all scream permutation. "Select," "choose," "form a committee/group/team," "a handful," and "subset" scream combination. When a question mixes both — *choose 3 of 8 and seat them in 3 chairs* — do the combination, then multiply by the arrangements: C(8, 3) × 3! = 56 × 6 = 336, which is just P(8, 3). Recognizing that "choose then arrange" collapses back into a single permutation is a hallmark of the top scorer. The deepest version of this trap is **mixed roles within one selection**: "From 9 people, choose a 4-person committee, then within it name a chair and a secretary." That is C(9, 4) to pick the four, then P(4, 2) to assign two named roles among them: C(9, 4) × P(4, 2) = 126 × 12 = 1,512. Don't try to do it in one symbol — break it into a choose-phase and an arrange-phase.

**A second trap — identical items.** Standard P(n, k) assumes the n items are all *distinct*. If some items are identical, arranging "all n" is *not* n!; it is n! divided by the factorial of each repeat group. The number of distinct arrangements of the letters in MISSISSIPPI (11 letters: 1 M, 4 I, 4 S, 2 P) is 11! / (4! 4! 2!) = 34,650, not 11!. The GMAT loves to slip a repeated letter or a pair of identical objects into an "arrange" problem precisely because the naive 11! answer will be sitting in the choices.

**The procedure to memorize.**

1. **Decide order matters.** Ask the swap test: does exchanging two chosen items create a different outcome? Yes → permutation. No → combination (next section).
2. **Count k, the number of slots/positions** you are filling, and n, the pool you draw from.
3. **Check for repetition.** Standard P(n, k) assumes no item is reused. If items *can* repeat (e.g., a PIN where digits may repeat), it's not P(n, k) at all — it's n^k by the slot method. If some items are *identical*, divide n! by the factorial of each repeat group.
4. **Fill the most-restricted slot first**, and case-split if two constraints interact.
5. **Compute with the descending product:** n × (n − 1) × … for k factors, last factor n − k + 1. Use n! / (n − k)! only as a backup or sanity check.
6. **Handle "together"/"not together" with the glue trick** (block as one item × internal orders) and subtract from the total for "not together."
7. **For mixed "choose then assign roles," split into a choose-phase (C) and an arrange-phase (P) and multiply.**

**Common mistakes.**

- **Using P when order doesn't matter** (or C when it does). The single most common error. Run the swap test every time.
- **Forgetting items can repeat.** A 4-digit PIN allowing repeats is 10^4 = 10,000, not P(10, 4) = 5,040. The word "different" or "distinct" is what forbids repetition — read for it.
- **Treating identical items as distinct.** Arranging the letters of a word with repeats requires dividing out each repeat group's factorial; plain n! overcounts.
- **Writing full factorials and mis-cancelling.** P(9, 3) is 9 × 8 × 7 = 504; you never need to compute 9! = 362,880 and divide by 6! There is no reason to handle giant numbers.
- **Ignoring the leading-zero rule** in digit problems. A 3-digit number's first slot has 9 choices (1–9), not 10.
- **Multiplying the glue block by k! for the whole shelf instead of just the block's internal order.** Only the items *inside* the block reorder; the block itself counts as one unit among the rest — and recount the remaining units after gluing.
- **Treating "at least"/"not adjacent" head-on** instead of using total minus the complement, which is almost always faster.
- **Forcing a single formula onto a "choose then assign roles" problem** instead of splitting it into C × P.

**Recap.** A permutation counts ordered arrangements: P(n, k) = n! / (n − k)!, best computed as k descending factors starting at n (last factor n − k + 1). Roles, ranks, seats, and digits signal "order matters"; committees and teams do not. The bridge to combinations is P(n, k) = C(n, k) × k!, and mixed problems split into a choose-phase and an arrange-phase. When constraints appear, fill the tightest slot first and case-split on interacting choices; glue items that must stay together; divide out identical-item overcounts; and when a count equals a target value, backsolve from the choices. Master the swap test and the descending product, and most permutation questions become one clean line of arithmetic.

## @combinations

A **combination** is a selection where **order doesn't matter**. The same three people in any order form the same team. If reshuffling the chosen objects does **not** create a new outcome, you are counting combinations, not permutations. This single test — "would rearranging what I picked count as something new?" — decides every problem in this section. Get it wrong and your entire answer is off by a factor of k!, which is exactly the size of the trap the test sets for you.

**Formula:**

**C(n, k) = n! / (k! × (n − k)!)**

Also written **(n choose k)**. Read it as "from n things, choose k, ignoring order." The three pieces each have a job: n! orders everything, k! cancels the orderings *within* your chosen group, and (n − k)! cancels the orderings within the group you left behind.

**Worked example.** A team of 3 is picked from 6 students. How many possible teams?

- If order mattered: 6 × 5 × 4 = 120.
- Each team of 3 was counted 3! = 6 times (once for each ordering of those same three people).
- Divide: 120 / 6 = **20**.

Check: C(6, 3) = 6! / (3! × 3!) = (6 × 5 × 4) / (3 × 2 × 1) = 5 × 4 = 20 (the 6 cancels 3 × 2). Correct.

**Why C(n, k) = P(n, k) / k!.** Every combination corresponds to k! permutations of the same k objects. The permutation count over-counts each unordered group exactly k! times — once for every way you could shuffle those k objects among themselves. Dividing by k! strips the ordering and collapses all of those shuffles into a single selection. This is the single most important sentence in the whole chapter: a combination is just a permutation with the internal ordering quotiented out. If you ever forget the formula mid-test, you can rebuild it from this idea alone — list the ordered count, then divide by k!.

> **Recall check.** Why do we divide the permutation count by k! and not by something else? (Because each unordered group of k objects can be internally arranged in exactly k! ways, so the ordered count contains k! copies of every combination; dividing by k! collapses each cluster of copies back to one.)

**Compute by canceling, never by expanding factorials.** On the test you will almost never write out 10! = 3,628,800. Instead, expand only as many top factors as you need and cancel against the smaller factorial. The reliable mental procedure:

1. Identify n and k.
2. By symmetry, replace k with the *smaller* of k and (n − k) — fewer factors to write.
3. Write that many descending factors on top, starting from n.
4. Put k! (the smaller k) on the bottom.
5. Cancel before multiplying — divide out the easy factors first so the arithmetic stays small.
6. Multiply what remains.

For C(10, 3): top is 10 × 9 × 8 (three descending factors), bottom is 3! = 6. Cancel: 9 / 3 = 3 and 8 / 2 = 4, leaving 10 × 3 × 4 = 120. No giant factorial ever appeared.

**Worked example.** Compute C(8, 5) the fast way.

- Symmetry first: C(8, 5) = C(8, 3), so choose the smaller side.
- Top: 8 × 7 × 6. Bottom: 3! = 6.
- Cancel the 6: 8 × 7 = **56**.

If you had naively used k = 5, you would have written 8 × 7 × 6 × 5 × 4 over 5! — the same answer, but far more arithmetic and far more chances to slip. Flipping to the smaller side is not optional polish; it is how top scorers avoid careless errors under time pressure.

**Symmetry trick.** C(n, k) = C(n, n − k). Choosing 3 of 6 is equivalent to *not choosing* the other 3 — every choice of who is in determines who is out, a perfect one-to-one pairing. Useful shortcut: C(10, 7) = C(10, 3) = 120 — flip to the smaller side and skip the heavy arithmetic.

**Quick-reference values to know cold:**

- C(n, 0) = C(n, n) = 1 (there is exactly one way to choose nothing, and one way to choose everything).
- C(n, 1) = C(n, n − 1) = n.
- C(n, 2) = n(n − 1) / 2.

That last one is worth memorizing as a shape, not a formula: "n choose 2" counts **pairs**, and it shows up constantly — handshakes, line segments between points, games in a round-robin, edges in a network, diagonals plus sides of a polygon. If 12 people each shake hands once, that is C(12, 2) = (12 × 11) / 2 = 66 handshakes. Recognizing "every pair, counted once" as C(n, 2) saves you from re-deriving it every time.

> **Recall check.** A small group plays a round-robin where every team plays every other team exactly once. With 9 teams, how many games are played? (C(9, 2) = (9 × 8) / 2 = **36**. "Every unordered pair, once" is always C(n, 2).)

**The "exactly X of type A and Y of type B" pattern.** When a problem says "exactly 2 men and 1 woman from 5 men and 4 women," pick independently from each group and multiply:

    C(5, 2) × C(4, 1) = 10 × 4 = 40

This pattern — independent selections multiplied together — appears in roughly 30% of GMAT combinatorics questions. Recognize it on sight. The logic is the slot-multiplication principle from earlier in the chapter: independent choices multiply. Each of the 10 ways to pick the men can be paired with each of the 4 ways to pick the woman, so the totals multiply. The signal is that the problem *fixes how many come from each category*. When it does, you never pool the groups.

**Worked example (multi-category split).** A delegation of 5 is formed from 4 economists, 3 lawyers, and 2 engineers, and it must contain **exactly 2 economists, 2 lawyers, and 1 engineer**. How many delegations?

- Economists: C(4, 2) = 6.
- Lawyers: C(3, 2) = 3.
- Engineers: C(2, 1) = 2.
- Multiply the independent picks: 6 × 3 × 2 = **36**.

The shape generalizes cleanly: one C-factor per stated category, all multiplied. Adding instead of multiplying here is a silent killer — addition would answer "how many ways to fill *one* category," which is not the question.

**Worked example (harder, with a hidden constraint).** A committee of 4 is formed from 6 men and 4 women. How many committees have **at least one woman**?

This is the classic "at least" trap. Adding up the cases (exactly 1 woman, exactly 2, exactly 3, exactly 4) works but is slow and error-prone. The strategic move is **complementary counting**: count everything, subtract the unwanted.

1. Total committees of 4 from 10 people: C(10, 4) = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1) = 10 × 3 × 7 = 210 (8 cancels 4 × 2, and 9/3 = 3).
2. Committees with **no** women (all 4 men, the only forbidden case): C(6, 4) = C(6, 2) = (6 × 5) / 2 = 15.
3. At least one woman = total − none = 210 − 15 = **195**.

Name the tactic: when you see "at least one," count the complement ("none") and subtract. It converts a four-case sum into a one-line subtraction. Verify by the long way if you doubt it: exactly 1 woman is C(4,1)×C(6,3) = 4 × 20 = 80; exactly 2 is C(4,2)×C(6,2) = 6 × 15 = 90; exactly 3 is C(4,3)×C(6,1) = 4 × 6 = 24; exactly 4 is C(4,4)×C(6,0) = 1. Sum: 80 + 90 + 24 + 1 = 195. Same answer, four times the work.

> **Self-explanation prompt.** State, in your own words, why "at least one" problems are easier to solve by counting the complement. If you can say "because 'at least one' spans many separate cases that all have to be added, but its opposite — 'none' — is usually a single clean case, so total minus that one case skips the entire sum," you have internalized the most reusable trick in GMAT counting.

**Trap to watch — independent groups vs. one pooled choice.** Compare two questions that look almost identical:

- "Choose a committee of 3 from 4 men and 4 women" — no composition constraint, so it is one pooled selection: C(8, 3) = 56.
- "Choose a committee of 3 with exactly 2 men and 1 woman" — a composition constraint, so it splits into independent group picks: C(4, 2) × C(4, 1) = 6 × 4 = 24.

The signal word is "exactly" (or any stated split like "2 of one kind, 1 of another"). A stated split means **multiply group-by-group**; no stated split means **one combination from the whole pool**. Mixing these up is one of the most common silent errors on the section — the arithmetic looks fine, but the setup answers a different question.

**Probability bridge.** GMAT probability questions regularly hide a combinations calculation inside them. Once you spot it, the problem halves. The template:

    P(event) = favorable outcomes / total outcomes = C(favorable) / C(total)

**Worked example.** A bag holds 5 red and 4 blue marbles. Two are drawn at random. What's the probability both are red?

- Favorable: C(5, 2) = 10 ways to pick 2 red from 5 red.
- Total: C(9, 2) = 36 ways to pick any 2 from 9.
- Probability = 10/36 = **5/18**.

The structure is always the same: count favorable arrangements in the numerator, count all arrangements in the denominator. Whenever a probability problem says "chosen at random" with no ordering mentioned, that's a combination in disguise. A reassuring property: because the same ordering convention appears in both the numerator and the denominator, it cancels — so you may count either both with combinations or both with permutations and get the identical fraction. The only fatal error is counting one way on top and the other way on the bottom.

**Worked example (estimation + answer-choice tactics).** "Two cards are drawn from a 6-card hand containing 4 aces and 2 kings. What is the probability at least one ace is drawn?" Choices: (A) 1/15 (B) 2/5 (C) 3/5 (D) 13/15 (E) 14/15.

You can backsolve the structure with the complement and then sanity-check against the choices:

1. Complement: P(no ace) = P(both kings) = C(2, 2) / C(6, 2) = 1 / 15.
2. So P(at least one ace) = 1 − 1/15 = **14/15** → (E).
3. **Estimation cross-check:** aces are 4 of 6 cards, the heavy majority, so drawing two cards and avoiding all aces should be *rare*. The answer must be close to 1. Only (D) and (E) are near 1, and the exact complement nails (E). The two small answers (A) and (B) are decoys for students who compute P(no ace) and forget to subtract from 1 — a classic "forgot the complement" trap.

Naming the moves: **complementary counting** to set it up, then **estimation against the answer choices** to confirm the magnitude is sane before committing. On a hard problem, that magnitude check is often enough to eliminate three or four choices even if you fumble the exact fraction.

**Worked example (the subtle double-count — separating poison the hardest items love).** A group has 7 people. A 3-person subcommittee must be chosen, and **one specific person, Dana, must be on it**. How many subcommittees are possible?

The trap is to "include Dana and then choose freely," computed wrongly as 7 × C(6, 2) — treating Dana's seat as if it still had 7 candidates. The clean reasoning:

1. Dana is fixed in the subcommittee — that choice is forced, contributing a factor of 1, not 7.
2. The remaining 2 seats are filled from the other 6 people: C(6, 2) = 15.
3. Answer: **15**.

Contrast with "Dana must be excluded": then all 3 come from the other 6, C(6, 3) = 20. And note 15 + 20 = 35 = C(7, 3), the total with no restriction — a built-in check, since every committee either contains Dana or doesn't. When a specific element is *required*, lock it in and choose the rest; when it is *forbidden*, remove it from the pool and choose normally. The trap is treating a forced inclusion as if it still had multiple choices.

**Worked example (two-restriction combo — required and forbidden together).** From 8 analysts, a 4-person task force is chosen. Analyst R **must** be on it, and analyst T **cannot** be on it (they refuse to work together). How many task forces?

1. Force R onto the task force: 1 way, 3 seats left.
2. T is barred, and R is already placed, so the remaining pool is 8 − R − T = 6 people.
3. Choose 3 from those 6: C(6, 3) = 20.
4. Answer: **20**.

The discipline: resolve every restriction *before* you count freely. Lock in the required element, delete the forbidden element and the already-placed element from the pool, then run one clean combination on what survives.

> **Recall check.** A 4-person team is chosen from 9 employees, but the manager must be on every team. How many teams are possible? (Lock the manager in, choose 3 from the remaining 8: C(8, 3) = (8 × 7 × 6)/6 = **56**.)

**Edge case to keep straight — "at least one" with multiple forbidden cases.** Complementary counting is only a one-liner when the complement is a *single* clean case. "At least one woman" had one complement (all men). But "at least two women" has complement "zero or one woman" — that is two cases (C(6,4) for zero plus C(4,1)×C(6,3) for one), and you must add both before subtracting. The lesson: complement is a tactic, not a reflex. Always ask "how many cases does the opposite actually contain?" If the complement is messier than the direct count, count directly.

**Common mistakes.**

- Using a permutation where order does not matter — over-counting by a factor of k!. If your answer is exactly k! times an answer choice, you forgot to divide.
- Expanding full factorials and drowning in arithmetic instead of canceling and using symmetry.
- Adding the cases for "at least one" instead of subtracting the complement — or, worse, applying complement when the complement is *also* multi-case.
- Splitting into independent group picks when the problem pooled everyone (no stated composition), or pooling when the problem said "exactly X of A and Y of B."
- Adding the per-category C-values instead of multiplying them in a stated-split problem.
- Mixing counting conventions in a probability fraction — combinations on top, permutations on bottom (or vice versa). Be consistent.
- Treating a *required* element as a free choice (multiplying by n instead of fixing it) in restricted-membership problems.
- Forgetting the final subtraction in complement problems (computing P(none) and reporting it instead of 1 − P(none)).

**Procedure to memorize — the combination decision flow:**

1. Ask "does order matter?" If no, it is a combination; if yes, return to permutations.
2. Is there a stated composition ("exactly X of one type, Y of another")? If yes, choose each group independently and **multiply** the C-values (one factor per category). If no, it is one C from the whole pool.
3. Is there a restriction on a specific element? **Required** → fix it and choose the rest from what remains. **Forbidden** → drop it from the pool and choose normally. Resolve all restrictions before counting freely.
4. Does the wording say "at least one" / "at most" / "not all"? Use **complementary counting**: total minus the unwanted case — but first confirm the complement is a single clean case; if not, count directly.
5. Is it a probability question? Build C(favorable) / C(total) with a consistent counting convention top and bottom.
6. Compute by canceling and using symmetry C(n, k) = C(n, n − k) — never by expanding full factorials.

> **Recall check.** Without peeking: state the formulas for P(n, k) and C(n, k), state the symmetry identity, and compute C(10, 7) in your head. (C(n, k) = n!/(k!(n−k)!); P(n, k) = n!/(n−k)!; symmetry C(n, k) = C(n, n−k); so C(10, 7) = C(10, 3) = (10×9×8)/6 = **120** with minimal arithmetic.) Now go one further: how do you count "at least one X"? (Total minus the "no X" case.) Retrieving the formulas, the symmetry, *and* the complement trick in the same breath is how you wire them together in long-term memory.

**Recap.** Combinations count selections where order is irrelevant: C(n, k) = n!/(k!(n−k)!), which is just the permutation count P(n, k) divided by k! to remove the internal orderings. Compute by canceling and flipping to the smaller side via C(n, k) = C(n, n−k); know C(n, 0) = C(n, n) = 1, C(n, 1) = n, and C(n, 2) = n(n−1)/2 cold. Multiply independent group choices — one factor per category — when a composition is stated; fix or drop a constrained element when membership is restricted, resolving every restriction before you count freely; reach for complementary counting the instant you see "at least one," but only when the complement is a single clean case. In probability, build favorable-over-total as a ratio of combinations with one consistent convention. Master these six moves and the bulk of GMAT counting and probability questions reduce to a single clean line of arithmetic.

## @repeats

When some objects are **identical**, straight factorial overcounts because swapping identical objects produces the "same" arrangement. The order of the *positions* still changes, but the *picture* does not — and on the GMAT it is the picture (the visible string, the seating, the lineup) that counts as one arrangement. This is the single most common source of a "factorial that's too big," and it shows up far beyond spelling words: arranging flags of the same color, scheduling repeated tasks, distributing identical objects, and counting lattice paths all reduce to this one idea. Master it once and a whole family of intimidating-looking problems collapses into a single clean division.

**Formula.** For n objects with repetition counts r₁, r₂, ..., rₖ:

**n! / (r₁! × r₂! × ... × rₖ!)**

This is sometimes called the **multiset permutation** or the **multinomial coefficient**. Every object-type that appears more than once contributes a factorial to the denominator; types that appear exactly once contribute 1! = 1, which changes nothing, so you can ignore them entirely.

**Mental model.** Start with "if all were distinct": n! arrangements. Then divide by the factorial of each repeated group to collapse arrangements that are actually the same. Picture temporarily labeling the duplicates — the two F's in COFFEE become F₁ and F₂. Now all 6 letters are distinct, giving 6! arrangements. But F₁F₂ and F₂F₁ in the same two slots are the *same word* once you erase the labels, so each real word was counted 2! times for the F's. The same logic applies independently to the E's. Erasing the labels means dividing by 2! for the F's and 2! for the E's. The key word is **independently**: each repeated group gets its own factorial in the denominator, and they multiply together because the overcounts compound.

**Worked example — single concept, two repeat groups.** LETTER has 6 letters with 2 T's and 2 E's. Both T and E repeat, so there are two repeat groups. Distinct arrangements:

    6! / (2! × 2!) = (6 × 5 × 4 × 3) / 2 = 6 × 5 × 2 × 3 = 180

Key step: identify *every* repeated group before computing. LETTER has two repeat groups (TT and EE), so divide by 2! twice. Miss either one and you report 360, exactly double the truth.

**Worked example — multiple repeat groups.** COFFEE has 6 letters: C, O, F, F, E, E — two F's and two E's.

    6! / (2! × 2!) = (6 × 5 × 4 × 3) / 2 = 6 × 5 × 2 × 3 = 180

Same arithmetic as LETTER, for the same reason. One repeated group = divide by one factorial. Two repeated groups = divide by two factorials. The lone letters C and O contribute 1! each and are invisible in the denominator.

> **Recall check.** Without peeking: how many distinct arrangements of the letters in BANANA? (BANANA has 6 letters: 3 A's, 2 N's, 1 B → 6! / (3! × 2! × 1!) = 720 / (6 × 2) = **60**. The two repeat groups are the A's and the N's; forgetting either inflates the count.)

**Worked example — many repeats.** MISSISSIPPI has 11 letters: 1 M, 4 I's, 4 S's, 2 P's, so the count is

    11! / (4! × 4! × 2! × 1!)

Cancel before you multiply anything out. Writing 11! = 11 × 10 × 9 × 8 × 7 × 6 × 5 × 4!, one 4! in the denominator cancels the tail of 11!:

    (11 × 10 × 9 × 8 × 7 × 6 × 5) / (4! × 2! × 1!)

The leftover denominator is 4! × 2! × 1! = 48, and 6 × 8 = 48, so the 6 and the 8 in the numerator cancel it exactly:

    11 × 10 × 9 × 7 × 5 = 34,650

Do not panic at the number of groups: list the letters, count each group, write the denominator, then cancel a denominator factorial against the top and clear what's left with numerator factors — you never multiply 11! out or divide a seven-figure number. Note that the counts must add up: 1 + 4 + 4 + 2 = 11, the total number of letters. That sum-check catches miscounts before they cost you the question.

**The sum-check, formalized.** The numbers under the factorials in the denominator must add to n (the number on top). If they don't, you've miscounted a group. For COFFEE: 1 + 1 + 2 + 2 = 6 = n. For MISSISSIPPI: 1 + 4 + 4 + 2 = 11 = n. This 5-second check is the cheapest insurance in the whole topic. On the real exam, under time pressure, the most common silent error is dropping a letter when tallying a long word — and the sum-check is the only thing standing between you and a wrong answer that "felt right."

**Connection to combinations.** When there are only two kinds of objects — such as a binary string of A's and B's — the multiset formula collapses to a combination:

"How many 7-character strings with exactly 3 A's and 4 B's?" = 7! / (3! × 4!) = **35** = C(7, 3).

These are the same calculation seen from two angles. Choosing positions for the A's is identical to arranging a multiset. This identity is worth memorizing because the hardest GMAT versions of this topic *disguise* a combination as an arrangement of repeats (or vice versa) and reward the test-taker who sees both faces. The moment a problem has exactly two types of object, you can reach for either tool — pick whichever gives the smaller, faster factorial.

> **Self-explanation prompt.** Why does swapping two identical letters NOT produce a new arrangement, while a *unique* letter contributes nothing to the denominator? If you can say "swapping identical letters leaves the visible word unchanged — the two F positions in COFFEE look the same either way, so the two labelings collapse to one word; and a unique letter has only 1! = 1 way to 'rearrange itself,' so dividing by 1 changes nothing," you have the intuition that makes the formula permanent rather than memorized.

**Worked example — lattice paths (a hard-item disguise).** A robot moves from the bottom-left corner of a grid to a point 4 blocks east and 3 blocks north, moving only east (E) or north (N) one block at a time. How many distinct shortest paths are there?

- Every shortest path is a sequence of exactly 4 E's and 3 N's, in some order — 7 moves total.
- Counting paths = counting distinct arrangements of the multiset EEEENNN.
- 7! / (4! × 3!) = 5,040 / (24 × 6) = 5,040 / 144 = **35**

The strategic trick named here is **recognizing the disguise**: a "how many shortest paths" problem with only two move-types is a repeats arrangement, equivalently C(7, 3) = C(7, 4) = 35. You never draw the grid — drawing it wastes 90 seconds and invites a miscount. (Symmetry check: C(7, 4) = C(7, 3), so whether you "choose where the E's go" or "where the N's go," you get the same 35.)

> **Recall check.** A grid trip needs 5 steps right and 2 steps up. How many shortest paths? (7 steps total, 5 R's and 2 U's → 7! / (5! × 2!) = 5,040 / (120 × 2) = **21** = C(7, 2). The smaller group, the 2 U's, makes C(7, 2) the fast route — always compute the combination using the smaller count.)

**Worked example — fix the constrained position first.** How many distinct arrangements of the letters in TENNESSEE begin with a T? TENNESSEE has 9 letters: 1 T, 4 E's, 2 N's, 2 S's.

- Fix T in the first slot. It is used up, so it no longer floats around the denominator.
- Arrange the remaining 8 letters — 4 E's, 2 N's, 2 S's — in the last 8 slots.
- 8! / (4! × 2! × 2!) = 40,320 / (24 × 2 × 2) = 40,320 / 96 = **420**

The tactic to name here is **fix the constrained position first, then arrange what's left**. A common wrong path is to compute all arrangements (9! / (4! × 2! × 2!) = 3,780) and then guess at "1/9 of them" — that shortcut only works when the fixed letter is unique. Here T *is* unique, so 3,780 / 9 = 420 happens to agree; but if the question asked "begin with an E," there are 4 E's and the naive "1/9" fails. The safe procedure (fix, then arrange the rest) always works. **Estimation as a sanity filter:** 420 is well under the unconstrained 3,780, exactly as a single fixed letter should leave it. If an answer choice exceeded 3,780, you could eliminate it on sight.

**Worked example — "begins with a repeated letter" (where the 1/n shortcut breaks).** Continuing TENNESSEE: how many arrangements begin with an E?

- Fix one E in the first slot. Now 3 E's remain among the other 8 letters: 3 E's, 2 N's, 2 S's, 1 T.
- 8! / (3! × 2! × 2!) = 40,320 / (6 × 2 × 2) = 40,320 / 24 = **1,680**

Check against the broken shortcut: a naive "4/9 of 3,780 because 4 of the 9 letters are E" gives (4/9) × 3,780 = 1,680 — which here *coincidentally* matches, because all 4 E's are interchangeable. But the reliable instinct is still "fix one E, then divide the E-group's factorial from 3! not 4!." Notice the denominator changed from 4! to 3! precisely because one E was consumed. **Trap:** students who keep the 4! in the denominator after fixing an E get 8!/(4!·2!·2!) = 420 and quietly report the wrong number.

**Worked example — repeats combined with a grouping restriction (hard).** In how many distinct arrangements of the letters in PEPPER do the two E's sit together? PEPPER has 6 letters: 3 P's, 2 E's, 1 R.

- Glue the two E's into a single block [EE]. Because the E's are identical, the block has only one internal ordering (EE = EE), so there is no "× 2" here — that is the subtle twist versus distinct-letter glue problems.
- Now arrange the block plus the remaining letters: [EE], P, P, P, R — that's 5 units, of which 3 are identical P's.
- 5! / 3! = 5 × 4 = **20**

The trap baked in: with *distinct* letters the glued block contributes a × 2 for its internal swap, but with *identical* letters in the block, the swap produces no new arrangement, so you multiply by 1, not 2. Always ask whether the things being glued are distinguishable.

**Worked example — "not adjacent" via the complement (complement counting).** In how many arrangements of AABB are the two A's NOT adjacent?

- Total arrangements = 4! / (2! × 2!) = 6. The full list is AABB, ABAB, ABBA, BAAB, BABA, BBAA.
- Count the "A's adjacent" case by gluing [AA] → units [AA], B, B → 3! / 2! = 3 (these are AABB, BAAB, BBAA).
- A's NOT adjacent = total − adjacent = 6 − 3 = **3** (the survivors ABAB, ABBA, BABA).

The tactic named is **complement counting**: when a problem asks for "not adjacent," "at least one apart," or "no two together," compute total minus the easy "together" case rather than counting the scattered arrangements directly. Counting the scattered case head-on is error-prone; the complement is almost always cleaner. For exactly two of the same object, "not adjacent" = total − (treat the pair as glued).

> **Recall check.** How many arrangements of the letters in BOOK have the two O's NOT next to each other? (Total = 4!/2! = 12. "O's together": glue [OO] → [OO], B, K = 3! = 6. Not together = 12 − 6 = **6**.)

**Trap to watch.** The headline error is forgetting to list every repeated group. If COFFEE only had one repeated letter, you would divide by 2! once; two repeated letters means divide by 2! twice. Slow down and count all groups before setting up the formula — and run the sum-check (denominator counts add to n). A second, sneakier trap: when you glue identical objects into a block, do **not** add the × 2 internal-ordering factor that distinct-object glue problems use. A third: after fixing one copy of a repeated letter, reduce that group's factorial in the denominator by one (4! becomes 3!), or your "begins with E"-type answer will silently inflate.

**Procedure to memorize.**

1. **List** the objects and tally each group's count. Write the counts down explicitly — do not tally in your head on long words.
2. **Sum-check:** confirm the group counts add to n. If not, recount before doing any arithmetic.
3. **Numerator:** write n! where n is the total number of objects.
4. **Denominator:** multiply r! for every group whose count is 2 or more (singletons contribute 1! and can be skipped).
5. **Apply any constraint before dividing:** if a position is fixed (first letter, anchored seat) or objects must be grouped, *fix or glue first*, then arrange and count the remainder with the repeats formula. After consuming one copy of a repeated object, drop its denominator factorial by one step.
6. **Glue caution:** when gluing identical objects, the block has only one internal order — no × 2.
7. **Complement when asked "not together":** total minus the "together" (glued) count, rather than counting the scattered case.
8. **Estimate-check the result:** a single fixed position should shrink the unconstrained count; a "must be together" count should be smaller than the total. If your number violates that, re-examine.

**Common mistakes.**

- Dividing by only one repeat group when several exist (LETTER, COFFEE, BANANA each have two).
- Treating a unique letter as if it needed a factorial in the denominator — it contributes 1!, i.e., nothing.
- Using the "1/n of all arrangements" shortcut for "begins with letter X" when X is a *repeated* letter; only reliably valid when X is unique. The safe move is always fix-then-arrange.
- Forgetting to reduce the denominator factorial after fixing one copy of a repeated letter (4! should become 3!).
- Adding a × 2 internal swap when gluing *identical* objects (PEPPER's EE block has no swap).
- Skipping the sum-check and silently miscounting a long word's groups.
- Counting "not adjacent" directly instead of using total minus the glued "together" case.
- Drawing the grid on a lattice-path problem instead of recognizing it as a two-symbol multiset = a combination.

**Recap.** Identical objects make straight factorial overcount, so divide n! by the factorial of every repeated group: n! / (r₁! × r₂! × ... × rₖ!). Count every group, sum-check against n, skip singletons. The two-symbol case *is* a combination, so lattice paths and binary strings are repeats problems in disguise — never draw the grid. For constraints, fix or glue first and arrange the rest, remembering that consuming one copy of a repeated object drops its denominator factorial a step, and that gluing identical objects carries no internal × 2. For "not adjacent," subtract the glued "together" count from the total. Run those moves in order and the scariest-looking arrangement-with-repeats question collapses into one clean division.

## @circular

In a **circular arrangement** — people around a round table, beads on a bracelet, keys on a ring — **rotations of the same arrangement count as identical**. There is no "seat #1" because every seat is equivalent. Spin the whole table a quarter turn and nobody has changed neighbors; it is literally the same arrangement viewed from a different angle. This single idea — *rotational equivalence* — is the entire reason circular counting differs from linear counting, and almost every trap in this topic is a disguised question about whether that equivalence actually holds.

The fix is mechanical: **fix one object in place**, then arrange the rest linearly relative to it. Pinning one person down kills the rotational freedom — once Ana is anchored, every other seat is now defined as "two to Ana's left," "directly across from Ana," and so on. The remaining n − 1 people fill n − 1 defined positions in (n − 1)! ways.

**Formula:** Circular arrangements of n distinct objects = **(n − 1)!**

**Worked example.** 5 people around a round table: (5 − 1)! = 4! = **24**, not 5! = 120.

**Why?** Rotating any arrangement by one seat produces the same *relative* ordering — Ana still has Ben to her left and Cal to her right. Five rotations of the same configuration all look the same, so 5! / 5 = 4! = 24. The general statement of this is the **division principle**: n! linear arrangements, each rotational family containing exactly n copies of the same circular arrangement, gives n! / n = (n − 1)!. Hold onto that ratio "n! / n" — it is the cleanest way to re-derive the formula if you ever blank on it mid-test, and it is also the mental model that makes the labeled-seat exception obvious.

> **Recall check.** Why is it (n − 1)! and not n!? (Because all n rotations of one seating are indistinguishable, so the n! linear arrangements collapse into groups of n, giving n! / n = (n − 1)!.)

**Watch for distinguishable seats.** A head table with a specific "head" chair, a rectangular table where the ends differ, a round table with *numbered* chairs, chairs facing a stage so one seat is "front and center" — these are not truly circular. The moment any seat is special, rotations are no longer equivalent. Use n! (normal permutations) when seats are distinguishable. The single keyword to hunt for in the problem stem: are the seats **labeled / numbered / positioned relative to something fixed**? If yes, it is linear (n!) wearing a round costume.

**Worked example — round vs. labeled, side by side.** 6 diplomats are to be seated.

- *(a)* At a plain round table: (6 − 1)! = 5! = **120**.
- *(b)* At a round table with chairs numbered 1 through 6: now seat 1 is distinguishable, so rotations *are* distinct. Answer = 6! = **720**.

The ratio is exactly 720 / 120 = 6, the number of seats — a clean sanity check that labeling the chairs multiplies the count by n. This relationship is bidirectional and worth internalizing: if a problem gives you the circular count and asks for the labeled count, multiply by n; if it gives the labeled count and asks for the circular count, divide by n. Either way the bridge between the two worlds is a single factor of n, the number of seats.

**Trap to watch.** Reflexively writing (n − 1)! the instant you see "round table." The shape of the table is a distractor; **what matters is whether the seats are distinguishable**, not whether the furniture is curved. A numbered round table is a linear problem. Read for labels before you commit to a formula.

### Fixing a reference point yourself

Sometimes the problem hands you a natural anchor and you should use it. "In how many ways can 6 people sit around a round table **if Ana must sit in a particular position**?" sounds like extra constraint, but Ana being fixed *is* the anchor — the other 5 arrange in 5! = 120 ways. Notice this equals the unconstrained answer (6 − 1)! = 5!. That is not a coincidence: fixing one person is *exactly* the trick the circular formula already performs, so "person X is fixed" adds no new restriction to a plain circular count.

There is a subtler cousin of this that does change the answer: a constraint that ties one person to *another moving person*, not to an absolute spot. "Ana must sit directly to Ben's right" is **not** the same as "Ana sits in seat 3." Because Ben himself is free to move, this constraint locks Ana relative to Ben, effectively gluing them — and that is an adjacency block, covered below, not a free anchor. The discriminating question to ask: is the person fixed to a *spot* (free anchor, no effect) or fixed to *another person* (glue, multiply by block internals)?

> **Recall check.** A round table with 8 chairs that are bolted to the floor and numbered. How many seatings of 8 people? (8! = 40,320 — numbered chairs are distinguishable, so this is a linear problem, not (8 − 1)!.)

### Combining circular with adjacency (the glue trick)

The glue trick applies in circular arrangements too. Treat the required-adjacent pair (or block) as one super-unit, apply the circular formula to the resulting units, then multiply by the internal orderings of the block.

**Worked example.** 7 people at a circular table; one specific pair must sit next to each other.

- Glue the pair as a block → 6 units around a circular table
- Circular arrangements of 6 units: (6 − 1)! = 5! = 120
- Internal ordering of the pair: × 2
- Total: 120 × 2 = **240**

**Trap to watch.** Forgetting the × 2 internal ordering of the block is the most common error. The two people in the block can swap seats — that is a distinct arrangement. Equally common on the hardest items: applying the linear glue count (treating the merged units with n! instead of (n − 1)!). After you glue, you still have a *circular* problem with fewer units, so subtract 1 from the unit count before taking the factorial.

**Worked example — a block of three.** 8 people at a round table; 3 specific people (a panel) must sit together as a consecutive trio.

- Glue the 3 into one block → 6 units around the circle: (6 − 1)! = 5! = 120
- Internal orderings of the trio: 3! = 6
- Total: 120 × 6 = **720**

The pattern generalizes: glue a block of size b out of n people, get (n − b + 1) units, circular-arrange them in (n − b)! ways, multiply by b! for the block's internals.

**Worked example — two blocks at once (hard).** 8 people at a round table. Two specific couples, the Ans and the Bs, must each sit together (Ana beside her partner, and B-husband beside B-wife), but the two couples need not be near each other. Count the seatings.

- Glue couple 1 → one block. Glue couple 2 → another block. The remaining 4 people stay loose. Total units around the circle: 2 blocks + 4 singles = **6 units**.
- Circular-arrange 6 units: (6 − 1)! = 5! = 120.
- Internal orderings: couple 1 can swap (× 2), couple 2 can swap (× 2). Together × 4.
- Total: 120 × 4 = **480**.

The lesson: when several blocks coexist, count *all* of them as units first, take (units − 1)!, then multiply by the internal factorial of *each* block. A frequent slip here is multiplying by only one factor of 2 instead of two — every block carries its own internal factor.

### The complement / gap method (the hard separation problems)

The nastiest circular questions ask for arrangements where two people must **not** sit together. Counting "not together" directly is painful; use the **complement**: total minus together.

**Worked example — must-not-sit-together.** 6 people at a round table; two rivals, P and Q, refuse to sit next to each other. How many seatings?

- Total circular arrangements: (6 − 1)! = 5! = 120
- Arrangements where P and Q *are* together (glue + swap): (5 − 1)! × 2 = 24 × 2 = 48
- Not together = total − together = 120 − 48 = **72**

The named tactic here is **complementary counting**: when "at least / not / no two" makes direct counting branch endlessly, count the easy opposite and subtract from the whole.

There is also a direct "gap" method that is worth knowing for the hardest separation problems, where *several* people must all be mutually non-adjacent. **Worked example — gap method.** 7 people at a round table; among them, 3 specific guards must be pairwise non-adjacent (no two guards next to each other). Seat the 4 non-guards first around the circle: (4 − 1)! = 3! = 6 ways. Those 4 people create **4 gaps** between consecutive non-guards. Now slot the 3 guards into distinct gaps so no two guards are adjacent: choose 3 of the 4 gaps and order the guards into them — that is 4 × 3 × 2 = 24 (a permutation of 3 from 4 gaps). Total: 6 × 24 = **144**. The gap method shines precisely when complement would require messy inclusion-exclusion over multiple forbidden pairs; seating the "free" people first and then dropping the restricted people into the gaps sidesteps all of that.

> **Self-explanation prompt.** Why does the complement method beat counting the valid seats one by one? Say it out loud: "Because 'P and Q together' is a single clean glued count, while 'P and Q apart' would force me to track every forbidden adjacency case — subtracting one number is far less error-prone than summing many." If you can articulate that, you will reach for the complement automatically under time pressure.

### Strategy spotlight — estimation and answer-choice tactics

On a circular problem you usually cannot "backsolve" by plugging answer choices into people, but you *can* use the **structure of the answers** to eliminate fast. Two tactics that save real time:

**Worked example — eliminate by the ratio.** "10 people sit around a round table. How many arrangements if two specific people sit together?" Answers: (A) 9!, (B) 2·8!, (C) 8!, (D) 2·9!, (E) 10!.

- The unconstrained circular count is (10 − 1)! = 9!. Adding an adjacency constraint must *reduce* the count, so the answer is **smaller than 9!** — strike (A), (D), (E) immediately.
- The glue trick always carries a × 2 for the pair's internal swap, so the survivor with the factor of 2 is correct: 2 · 8! = (B). No heavy arithmetic required.

This is **answer-choice structure elimination**: read the form of the choices (factors of 2, which factorial), match them to the mechanics (glue → smaller count, pair → ×2), and the correct choice often falls out before you finish the formal setup.

**Worked example — plug in a small case to recover the formula.** You forget whether "n couples around a round table with each couple together" is 2^n·(n−1)! or 2^n·n!. **Plug in n = 2** (just 4 people, 2 couples). List by hand or reason: glue each couple → 2 blocks around a circle → (2 − 1)! = 1 way to seat the blocks, times 2! × 2! = 4 internal orderings = 4 total. Now test the formulas: 2^2·(2−1)! = 4·1 = 4 ✓; 2^2·2! = 4·2 = 8 ✗. The small case confirms 2^n·(n − 1)!. **Plugging in numbers** rescues you whenever you are unsure which factorial to use — a tiny n you can enumerate by hand settles it.

> **Recall check.** You see five answer choices for a "two specific people must NOT sit together at a round table of 8" problem, and they are written as differences. Which structural form should the correct answer have? (The form total − together = (8 − 1)! − (7 − 1)!·2 = 7! − 2·6! — a subtraction with the smaller term carrying a factor of 2 from the glued pair. Spot the "big factorial minus 2 times a smaller factorial" shape.)

### Bracelets and necklaces (the 745+ edge case)

**Bracelets and necklaces** are circular **AND flippable**: you can pick the bracelet up and turn it over, so mirror images are identical too. Divide the circular count by 2: **(n − 1)! / 2**.

**Worked example.** 6 distinct beads on a bracelet: (6 − 1)! / 2 = 120 / 2 = **60**.

If you see this, it is a 745+ question — note the extra division by 2 (for the flip) on top of the (n − 1)! (for rotation), and move on. **Edge case warning:** the divide-by-2 logic assumes no arrangement is its own mirror image. For very small n (n = 1 or 2) a bracelet can be symmetric and the naive division undercounts — but the GMAT will not torture you with that subtlety, so the clean (n − 1)! / 2 is what to remember. The mental hierarchy to carry away: a *round table* fixes rotation only (one division, by n, baked into the formula); a *bracelet* fixes rotation *and* reflection (a second division, by 2). Reflection equivalence is the one extra degree of freedom that separates a necklace from a dinner table.

### Procedure to memorize

1. **Check the seats.** Are they labeled, numbered, or positioned relative to a fixed point (a stage, a head of table)? If **yes → use n!** (linear). Stop here.
2. **If truly circular**, the base count is **(n − 1)!**.
3. **Adjacency block?** Glue the block, recount units as (units − 1)!, then **multiply by each block's internal orderings** (×2 for a pair, ×b! for a block of b; multiply a separate factor for every block).
4. **"Not together" / "no two adjacent"?** Use the **complement** (total − together) for a single forbidden pair, or the **gap method** (seat the free people first, drop restricted people into the gaps) for several mutually non-adjacent people.
5. **Flippable (bracelet/necklace)?** Divide the circular result by **2**.
6. **Sanity-check** against the answer choices: an adjacency *requirement* shrinks the count; a *labeling* multiplies it by n; a glued pair carries a factor of 2.

### Common mistakes

- Writing (n − 1)! for a **numbered/labeled** round table (should be n!).
- After gluing a block, using n! for the units instead of (n − 1)! — it is still circular.
- Forgetting the **internal ordering** of the block (×2 for a pair, ×b! for a larger block), or multiplying by only one block's internals when two blocks are present.
- Counting "not together" directly instead of using **total − together**, or trying complement when the gap method is cleaner (several restricted people).
- Missing the **÷ 2** on a bracelet/necklace because you treated "flippable" as ordinary circular.
- Treating "person X must sit in a fixed spot" as a new restriction in a circular problem — it is the same anchoring the formula already does, so it changes nothing — while *missing* that "X must sit beside moving person Y" is actually a glue constraint.

### Recap

For a plain round table of n distinct people: **(n − 1)!** — fix one anchor and arrange the rest. The instant seats become **distinguishable** (numbered, head chair, facing a stage), revert to **n!**, and remember the bridge between the two is a single factor of n. Glue adjacent groups, recount as a *circular* set of units, and never forget the internal ×b! for *every* block. Use the **complement** for one "must not sit together" pair and the **gap method** for several mutually non-adjacent people, and divide by 2 only for genuinely flippable bracelets. Above all: the table's roundness is a costume — **distinguishable seats, not curved furniture, decide the formula.**

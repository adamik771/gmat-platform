---
slug: quant-24-counting-basics
title: "Counting: The Fundamentals"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-23-statistics
summary: |
  Structured counting: enumeration, the decision-tree (multiplication) principle, and distributing identical items.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - combinatorics-q1
      - combinatorics-q2
  - id: enumeration
    type: reading
    title: "Enumeration — counting the long way"
    check_question_ids:
      - combinatorics-q34
  - id: decision
    type: reading
    title: "The decision tree — all patterns in one place"
    check_question_ids:
      - combinatorics-q59
      - combinatorics-q68
      - combinatorics-q3
      - combinatorics-q4
      - combinatorics-q5
      - combinatorics-q6
      - combinatorics-q7
      - combinatorics-q8
      - combinatorics-q9
      - combinatorics-q10
      - combinatorics-q11
      - combinatorics-q12
      - combinatorics-q23
      - combinatorics-q24
      - combinatorics-q27
      - combinatorics-q29
      - combinatorics-q13
      - combinatorics-q14
      - combinatorics-q15
      - combinatorics-q16
      - combinatorics-q17
      - combinatorics-q18
      - combinatorics-q19
      - combinatorics-q21
      - combinatorics-q22
      - combinatorics-q25
      - combinatorics-q26
      - combinatorics-q28
  - id: distributions
    type: reading
    title: "Distributions — identical items among distinct recipients"
    check_question_ids:
      - combinatorics-q40
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - combinatorics-q75
      - combinatorics-q60
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - combinatorics-q64
      - combinatorics-q65
---

## @enumeration

Enumeration means **writing out every possibility and counting them**. It sounds too primitive for the GMAT, but it is the foundation every formula is built on — and for small sets (3 or 4 objects) it is often the fastest approach on test day. When the answer choices are small numbers, or when a problem has a constraint you can't quite formula-ize under pressure, a disciplined list is not a fallback — it is the *correct* tool. The 700+ scorers don't avoid enumeration; they enumerate **systematically** so they never double-count and never skip a case. The skill being trained here isn't "listing" — anyone can list. It is *ordered* listing that makes omission and repetition structurally impossible, plus the judgment to know when a 30-second list beats a formula you'd have to second-guess.

**Mental model — the Fundamental Counting Principle.** Counting problems reduce to filling slots, one at a time. How many choices for slot 1? How many for slot 2 given what's in slot 1? Multiply. Every formula in this chapter — P(n, k), C(n, k), (n − 1)!, n!/(r1! × r2!) — is just this slot-filling logic run faster. If you understand the slots, you can re-derive any formula in 10 seconds when memory fails. The slot view is your safety net: forget a formula, fall back to slots, and you'll still be right. There is one precondition that the whole machine rides on, and it trips people constantly: the count for a later slot must be **the same no matter how the earlier slots were filled**. If the number of choices for slot 2 changes depending on what went into slot 1, you cannot simply multiply — you must split into cases first. Most "I multiplied and got the wrong answer" disasters are exactly this: a hidden dependency between slots.

**Example.** Three distinct books — Algebra (A), Biology (B), Chemistry (C) — line up on a shelf. How many orders are possible?

List every arrangement:

    ABC, ACB, BAC, BCA, CAB, CBA

Six orders. Now see *why* it's six via slots:
- Slot 1: 3 choices (any of A, B, C)
- Slot 2: 2 choices (whichever two are left)
- Slot 3: 1 choice (the remaining one)

Multiply: 3 × 2 × 1 = **6**. This is 3! (read "three factorial").

Notice the *order* of the list above. It isn't random. It's alphabetical: everything starting with A, then everything starting with B, then C. Within each first-letter block, the remaining two letters are themselves alphabetized. That ordering discipline is the whole skill. A random list invites the two cardinal sins of enumeration: **listing the same item twice** and **missing one**. A sorted list makes both nearly impossible, because at every step you know exactly what comes next. Think of it as a tree you read left to right, top to bottom: you never jump branches, you never revisit one.

**The rule enumeration teaches.** For n distinct objects placed in a row:

    n × (n − 1) × (n − 2) × … × 1 = n!

*Memorize these:* 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040. They appear in answer choices constantly. 8! = 40,320 — you won't compute it on the clock, but you'll recognize it. A useful habit: when you see 120 or 720 or 5040 sitting in the answer choices, your first instinct should be "that's a factorial — 5!, 6!, or 7!." It tells you the problem is almost certainly a straight arrangement of 5, 6, or 7 things, which orients you before you've done any work. The same recognition works in reverse for *traps*: if four answer choices are factorials and one is a factorial divided by 2, the odd one out is usually the right answer to an "order doesn't matter" or "two identical objects" problem.

> **Recall check.** Without looking back, what are 4!, 5!, and 6!? (24, 120, 720.)

**The systematic enumeration procedure.** When you choose to list, do it the same way every time so the method becomes automatic:

1. **Identify the most constrained slot.** Find the position with the tightest restriction (a leading digit that can't be 0, a person who can't sit at the ends, the slot whose value forces evenness). You will organize the whole count around it.
2. **Fix the first slot.** Pick the smallest (alphabetically or numerically first) valid option for position 1 and hold it.
3. **Recurse on the rest.** List every valid completion of the remaining slots, again in sorted order, before you change slot 1.
4. **Advance slot 1** to the next valid option and repeat step 3.
5. **Stop** when slot 1 has cycled through every valid option.
6. **Sanity-check the count** against a slot multiplication (e.g., "3 × 2 × 1 should give 6, and I have 6"). If the list and the formula disagree, one of them is wrong — find out which *before* you answer.

That last step is what separates a careful test-taker from a lucky one. Enumeration and the counting principle should always agree; using each to check the other catches errors in real time. The discipline is cheap and the payoff is enormous: on a multi-case problem, a single dropped case costs you the entire question, and the cross-check is the only thing standing between you and that silent error.

**Worked example (easy).** A diner offers 2 soups (Tomato, Lentil) and 3 mains (Fish, Beef, Veg). A meal is one soup and one main. How many distinct meals?

Slots: soup has 2 choices, main has 3 choices. By the counting principle, 2 × 3 = **6**. Verify by listing, soup-first and sorted: (Lentil, Beef), (Lentil, Fish), (Lentil, Veg), (Tomato, Beef), (Tomato, Fish), (Tomato, Veg). Six meals — list and formula agree. Note this is *not* a factorial: the two slots draw from *different* pools, so we don't subtract as we go. Multiply the pool sizes directly. This is the cleanest case of slot independence — choosing the soup tells you nothing about how many mains remain, so the "3" never shrinks.

**Worked example (medium) — order matters.** From 5 sprinters, how many ways can gold, silver, and bronze be awarded (no ties)?

This is an *ordered* selection of 3 from 5 — a permutation. Slots: 5 for gold, 4 for silver (one runner used), 3 for bronze. So 5 × 4 × 3 = **60**. In formula form this is P(5, 3) = 5!/(5 − 3)! = 120/2 = 60. The slot view got you there without the fraction. Self-check: the three slots draw from a *shrinking* pool (5, then 4, then 3), which is the fingerprint of "order matters and no repeats." The shrink-by-one pattern is your signal that you've correctly recognized a permutation rather than an independent-pool product.

> **Recall check.** In a slot problem, how do you know whether to *multiply different pool sizes* (like 2 × 3 meals) versus *count down* (like 5 × 4 × 3 medals)? (Count down when every slot draws from the *same* shrinking pool of distinct objects; multiply independent pools when each slot has its *own* separate set of options.)

**Worked example (medium) — enumerate to dodge a formula.** How many positive integers less than 100 have all distinct digits *and* are even? Don't reach for a formula; structure the count.

Split by length. **One-digit evens:** 2, 4, 6, 8 — and 0 is not positive, so 4 numbers. **Two-digit evens with distinct digits:** the number is "tens-units," units must be even (0, 2, 4, 6, 8). Count by units digit. If units = 0: tens can be 1–9, all distinct from 0, so 9 numbers. If units = 2, 4, 6, or 8: tens can be 1–9 but not equal to the units digit, so 8 numbers each → 4 × 8 = 32. Two-digit total: 9 + 32 = 41. **Grand total:** 4 + 41 = **45**. The trick here is *casework by the most constrained slot* (the units digit, because evenness lives there). Always start enumeration from the slot with the tightest constraint — it prunes the tree fastest. Notice *why* we had to split units = 0 from units = 2/4/6/8: in the first case the tens digit has 9 options, in the second only 8, because 0 isn't competing for the tens spot but 2/4/6/8 are. That difference is a slot dependency — and the moment you see one, casework is mandatory, not optional.

**Trap to watch.** The single most expensive enumeration error is treating "0" as a free choice for a leading digit, or treating identical-looking objects as distinct. In the example above, if you'd let the tens digit be 0 you'd have counted non-numbers like "02." The leading position almost always carries a hidden "can't be 0" constraint. Whenever a slot is a leading digit, dock its choice count by one for the forbidden 0 — and remember that doing so can *change* how many options later slots have. Handle the constrained slot first precisely so this bookkeeping stays clean.

**Worked example (hard) — list under a constraint, then verify with slots.** How many three-digit numbers use only digits from {1, 2, 3}, allow repeats, and read the same forwards and backwards (palindromes)?

A three-digit palindrome has the form XYX: the first and last digits are forced to match. So the free slots are X (the outer pair, one choice that fills two positions) and Y (the middle). X has 3 options, Y has 3 options, and the third position is *not* free — it's a copy of X. So 3 × 3 = **9**. Verify by listing in sorted order: 111, 121, 131, 212, 222, 232, 313, 323, 333. Nine numbers. The lesson: a constraint that *forces* one slot to equal another removes a slot from the multiplication entirely. Counting the "111, 121, …" list by hand both confirms the 9 and shows you *why* — the last digit never got its own line in the product.

> **Recall check.** A constraint forces digit 1 and digit 3 of a number to be equal. Does that *add* a slot to your multiplication or *remove* one? (Remove one — the dependent digit isn't a free choice, so it never appears as a factor.)

**Worked example (hard) — when listing beats every formula.** Four friends — P, Q, R, S — sit in a row of four chairs, but P refuses to sit at either end. How many seatings?

You *could* do this with the complement, but watch how clean a guided list is. The end seats (positions 1 and 4) must be filled by two of {Q, R, S}, and the order matters. Choose and order 2 of the 3 for the ends: that's 3 × 2 = 6 ways. The two middle seats (positions 2 and 3) get the remaining two people — one of whom is P, who is happy there — in 2 × 1 = 2 ways. Total: 6 × 2 = **12**. Cross-check with the complement: total arrangements 4! = 24; arrangements with P at an end = 2 (end choices for P) × 3! (others) = 12; so valid = 24 − 12 = 12. Both roads land on 12, which is exactly the confidence you want before committing. The named tactic here is the **complement** (total − unwanted), and pairing it against a direct slot count is the 700-level verification move. A subtle point worth absorbing: you fill the *constrained* slots first (the ends, which exclude P), not P's slot. Whenever a person or digit has a restriction, place the restricted item — or the restricted positions — first, and the rest falls into place cleanly.

**Worked example (hard) — backsolving from the answer choices.** A 5-character password uses 2 distinct letters followed by 3 distinct digits. The total number of possible passwords is one of: (A) 11,232,000  (B) 65,000  (C) 468,000  (D) 3,276,000  (E) 6,500. You're short on time and unsure whether "distinct" applies within each group only or across the whole string. Use the answer choices to triangulate.

First do the clean slot count assuming "distinct" applies *within* each group (letters distinct from each other, digits distinct from each other). Letters: 26 × 25 = 650. Digits: 10 × 9 × 8 = 720. Multiply: 650 × 720 = **468,000** — choice **(C)**. Now sanity-check against the choices, which is the **answer-choice tactic** at work. Choice (E) 6,500 is exactly 650 × 10 — the count if you'd treated the digit block as a single 10-way choice, a classic undercount. Choice (A) 11,232,000 is 468,000 × 24 — what you'd get by wrongly multiplying in an extra 4! arrangement factor. The wrong answers are *engineered* from predictable mistakes, so seeing your clean count (468,000) sitting in the list, flanked by the exact errors you might have made, is strong confirmation you chose the right interpretation. When the choices are spread across orders of magnitude like this, an **estimate** alone often isolates the answer: 650-ish times 700-ish is "a few hundred thousand," which only (C) satisfies.

**Common mistakes.**
- **Unsorted listing.** Jumping around when you enumerate guarantees you'll repeat or skip. Always fix slot 1, exhaust the rest, then advance — sorted, every time.
- **Multiplying when you should count down (and vice versa).** Different independent pools → multiply pool sizes. Same shrinking pool of distinct objects → count down (n, n−1, n−2, …). Diagnose which one before writing a single number.
- **Multiplying across a hidden dependency.** If slot 2's option count changes based on slot 1's value, you must split into cases first (as in the distinct-digits problem). Multiplying through a dependency is the most common silent error at the 650+ level.
- **Forgetting the leading-digit "no 0" rule.** A leading position can't be 0; deduct one option there and propagate the change to later slots.
- **Treating identical objects as distinct (or distinct as identical).** Two indistinguishable candies arranged "AB" and "BA" are the *same* outcome; two distinct people are not. Misjudging this is the root of most over- and under-counts.
- **Not cross-checking.** If a slot product and a hand list disagree, you have a live error. Reconcile them before answering — don't average or guess.

**Self-explanation prompt.** Before you look at the check question, explain in one sentence: *why* does each additional slot have one fewer choice than the slot before it? If you can say "because each previous slot already used up one object," you've internalized the rule. Then push one level further: explain why the *diner-meal* example does **not** count down (because each slot draws from its own separate menu, so no slot "uses up" an option the next slot needed). Holding both ideas at once — shared shrinking pool versus independent pools — is the whole point of this section.

**Recap.** Enumeration is structured listing, and structure is everything: identify the most constrained slot, fix the first slot, exhaust the rest in sorted order, advance, and cross-check the count against a slot multiplication. The Fundamental Counting Principle — multiply the choices, slot by slot — generates every formula in this chapter, so if a formula slips your mind, rebuild it from slots in ten seconds, but only multiply when later slots are independent of earlier ones; the moment a dependency appears, split into cases. Count *down* a single shrinking pool of distinct objects (n × (n−1) × … = n!), but *multiply* independent pools directly. Watch the leading-digit-can't-be-0 trap, place restricted items or positions first, and verify direct counts against the complement when a constraint bites. Read the answer choices as data — factorials signal arrangements, and engineered wrong answers confirm the right interpretation. Memorize 3!–7! cold — those numbers will be staring at you from the answer choices.

## @decision

Every combinatorics question on the GMAT reduces to four decisions. Before you reach for any formula, run through them in order. This is not optional ceremony — the single biggest source of combinatorics errors at the 600 level is not arithmetic, it is **misclassification**: solving an "order matters" problem with a combination, or treating identical items as if they were distinct. The decisions below are your firewall against that. At the 700+ level the misclassification becomes subtler — you correctly pick combinations but forget to divide out an internal ordering, or you apply the complement to the wrong universe — so we will drill the edge cases hard.

**1. Does order matter?**
- **Yes** → permutation (slot-by-slot multiplication or P(n, k))
- **No** → combination C(n, k)

The litmus test: imagine swapping two of your chosen items. If the swap produces a **different outcome**, order matters (permutation). If it produces the **same outcome**, order doesn't (combination). "President and Vice President from 8 people" — swapping the two roles changes who's president, so order matters. "A 2-person committee from 8 people" — swapping the two members gives the same committee, so order doesn't.

**2. Are there repeated or identical objects?**
- **Identical items being distributed** → stars-and-bars C(n + k − 1, k − 1)
- **Repeated objects being arranged** → divide by factorial of each repeated group: n! / (r₁! × r₂! × ...)
- **All distinct** → straight factorial, P, or C

**3. Is there a constraint?**
- **Adjacent required** → glue trick
- **Not adjacent / forbidden** → complement (total − adjacent)
- **Alternating** → count per starting pattern × (arrangements per pattern); remember two starting patterns
- **Compound** → count the required constraint, subtract the sub-case where both are violated
- **At least one of type A** → complement: total − none of type A

**4. Is it circular or linear?**
- **Circular, indistinguishable seats** → (n − 1)!
- **Linear or distinguishable seats** → n!

**Quick-reference pattern table:**

| Problem says | You're doing | Formula |
|---|---|---|
| "How many orders…" | Permutation | n! or P(n, k) |
| "Committee of k from n" | Combination | C(n, k) |
| "Exactly X of type A and Y of type B" | Product of combinations | C(nA, X) × C(nB, Y) |
| "At least 1 of type A" | Complement | Total − (none of A) |
| "Must sit together" | Glue trick | Arrange block + others, then internal |
| "Cannot sit together" | Complement | Total − (all together) |
| "Alternating in a row, equal groups" | Alternating | 2 × (n!)² |
| "Alternating in a row, unequal groups" | Alternating | 1 × larger! × smaller! |
| "Round table of n" | Circular | (n − 1)! |
| "Letters of [repeated word]" | Multiset | n! / (r₁! × r₂! × …) |
| "Round-robin: every pair plays once" | Combination | C(n, 2) |
| "Probability, drawn at random" | Combinations as ratio | C(favorable) / C(total) |

**The two formulas you actually compute.** Everything in the table collapses to two building blocks, and both come from the slot logic of the previous section.

P(n, k) = n! / (n − k)! — fill k ordered slots from n objects: n × (n − 1) × … down for k factors.

C(n, k) = n! / [k! × (n − k)!] — choose k unordered, which is P(n, k) with the k! orderings divided out.

That division by k! is the entire difference between permutation and combination: a combination is a permutation that has thrown away the internal ordering. Memorize the small values: C(n, 0) = 1, C(n, 1) = n, C(n, 2) = n(n − 1)/2, and the symmetry C(n, k) = C(n, n − k). That last one is a time-saver — C(10, 8) is painful head-on but C(10, 2) = 45 is instant. Build a fast mental table of the row you'll see most, C(n, 2): for n = 4, 5, 6, 7, 8, 9, 10 it is 6, 10, 15, 21, 28, 36, 45. Recognizing "45" as C(10, 2) on sight will save you a full minute on a hard problem.

> **Recall check.** You need to pick a 3-person committee from 9 people. Is the count C(9, 3) or P(9, 3), and how many times larger is the wrong one? (Combination: C(9, 3) = 84. The permutation P(9, 3) = 504 is 3! = 6 times larger, because each committee gets counted in all 6 of its internal orderings.)

**Worked example — order matters (easy).** A club has 7 members. In how many ways can they choose a President, a Treasurer, and a Secretary (no person holds two offices)?

Swapping two officers changes who holds which office, so **order matters** — permutation. Fill slots: President 7 choices, Treasurer 6, Secretary 5. That gives 7 × 6 × 5 = **210**. This is P(7, 3) = 7!/4!. Notice you never had to compute a full factorial; you just multiplied three descending numbers. That slot-by-slot habit is faster and less error-prone than plugging into the formula on test day.

**Worked example — product of combinations (medium).** A committee of 4 must be formed from 5 men and 4 women, and must contain exactly 2 men and 2 women. How many committees are possible?

Order does not matter inside a committee, so each gender choice is a combination, and because the two choices happen together you **multiply** (the decision-tree principle): choose 2 men AND 2 women.

- Men: C(5, 2) = (5 × 4)/2 = 10
- Women: C(4, 2) = (4 × 3)/2 = 6
- Total: 10 × 6 = **60**

The word "exactly" is the signal for product-of-combinations. The trap here is to compute C(9, 4) = 126 — the number of *all* 4-person committees — and forget that the gender constraint slices that down.

> **Self-explanation prompt.** In the example above, why did we **multiply** C(5, 2) by C(4, 2) instead of adding them? Say it in one sentence before reading on. (Because each way of choosing the men can be paired with *every* way of choosing the women — independent simultaneous choices multiply; "this AND that" is multiplication, "this OR that" is addition.)

**Worked example — "at least one," use the complement (medium-hard).** From 6 physics books and 4 chemistry books, you select 4 books. In how many selections is **at least one** a chemistry book?

"At least one" almost always means **complement**: total selections minus the ones with **zero** chemistry books.

- Total ways to pick any 4 from 10: C(10, 4) = 210
- Ways with no chemistry book (all 4 from the 6 physics): C(6, 4) = C(6, 2) = 15
- At least one chemistry: 210 − 15 = **195**

Why the complement and not direct counting? Counting "at least one" directly forces you into four cases (exactly 1, exactly 2, exactly 3, exactly 4 chemistry books) and a sum. The complement has exactly one unwanted case. **Name the tactic: complement counting.** Whenever you see "at least one," reach for total − none before anything else. One subtlety worth internalizing: the complement of "at least one" is "exactly zero," not "exactly one." Students who write 210 − C(4, 1)×C(6, 3) have negated the wrong event. The negation of "≥ 1" is "= 0," full stop.

**Worked example — "must sit together," the glue trick (medium-hard).** Five students — including two best friends, A and B — sit in a row of 5 chairs. In how many arrangements do A and B sit next to each other?

Glue A and B into a single block. Now you are arranging 4 objects (the AB-block plus the other 3 students) in a row: 4! = 24 ways. But inside the block, A and B can be ordered as AB or BA: 2 ways. Multiply: 24 × 2 = **48**.

Contrast: "in how many arrangements are A and B **not** next to each other?" Use the complement against the total of 5! = 120: 120 − 48 = **72**. That is the "cannot sit together" row of the table in action — count the together case, subtract.

> **Recall check.** Six people sit in a row; two of them refuse to be adjacent. How do you get the answer fastest? (Total minus together: 6! − [glue: 5! × 2] = 720 − 240 = **480**. Counting the forbidden arrangements is far cheaper than counting the allowed ones directly.)

**Worked example — repeated letters and a hidden constraint (hard).** How many distinct arrangements are there of the letters in the word **LEVEL**?

LEVEL has 5 letters: L appears twice, E appears twice, V once. Distinct arrangements of a multiset = n! divided by the factorial of each repeated count: 5! / (2! × 2! × 1!) = 120 / 4 = **30**.

Now the harder follow-up that separates 700+ scorers: of those 30 arrangements, how many begin **and** end with L? Fix an L in the first position and an L in the last position. Both L's are now used and placed, so the middle three positions hold E, E, V in some order: 3! / 2! = 6 / 2 = **3**. The subtle point: because the two L's are identical, there is exactly *one* way to "put an L at each end," not 2! ways — do not multiply by 2 for swapping the L's, because swapping identical letters produces the same word. That double-counting trap is the classic 700-level miss. A useful cross-check: list them mentally — LEEVL, LEVEL, LVEEL. Exactly three, confirming the count.

**Worked example — alternating arrangement (hard).** In how many ways can 4 boys and 4 girls sit in a row of 8 seats so that no two boys are adjacent and no two girls are adjacent (i.e., they strictly alternate)?

Strict alternation with **equal** group sizes admits **two** starting patterns: B-G-B-G-B-G-B-G or G-B-G-B-G-B-G-B. Within a fixed pattern, the 4 boys fill their 4 designated seats in 4! ways and the 4 girls fill theirs in 4! ways. So one pattern gives 4! × 4! = 24 × 24 = 576, and there are two patterns: 2 × 576 = **1,152**. This is the "2 × (n!)²" row. The edge case to remember: if instead there were 5 boys and 4 girls (**unequal**, larger by exactly one), only **one** pattern works — the row must start and end with the larger group, B-G-B-G-B-G-B-G-B — giving 1 × 5! × 4! = 120 × 24 = 2,880. The number of valid starting patterns is the entire difference between the equal and unequal cases, and missing it is the alternating-problem trap.

> **Recall check.** You alternate 4 men and 4 women in a row, then alternate 5 men and 4 women in a row. Which one gets the factor of 2 and why? (The equal case, 4 and 4, gets 2 — either gender can start. The unequal 5-and-4 case gets factor 1, because the larger group must occupy both ends, fixing the pattern. Result: 2×4!×4! = 1,152 versus 1×5!×4! = 2,880.)

**Worked example — circular seating with a twist (hard).** Four married couples (8 people) sit at a round table. In how many ways can they be seated so that **each couple sits together**?

Two layers here. First treat each couple as a glued block: 4 blocks around a round table. Circular arrangements of 4 distinct blocks = (4 − 1)! = 3! = 6. Then each couple can be internally ordered 2 ways (husband-left or wife-left), and there are 4 couples: 2⁴ = 16. Multiply: 6 × 16 = **96**.

The trap is forgetting the circular adjustment and using 4! = 24 for the blocks. Around a round table, rotations of the same arrangement are identical, so n distinct objects give (n − 1)!, not n!. Fix one block as a reference point and arrange the rest — that's *why* it's (n − 1)!.

**Trap to watch.** The most expensive misread in this entire chapter is **"at least" vs. "exactly."** "Exactly 2 chemistry books" is a direct product of combinations (C(4,2) × C(6,2)). "At least 2" is a sum of cases or a complement. "At least 1" is almost always the complement. Underline these phrases the instant you see them; they change the entire method, not just a number.

**A second trap — permutation creep.** When a problem assigns **distinct roles** (president vs. treasurer, gold vs. silver vs. bronze, first vs. second prize), order matters even though the word "order" never appears. Roles *are* order. Conversely, "team," "committee," "group," and "handshake" signal that order does **not** matter. Train yourself to translate role-language into permutation and group-language into combination.

**The procedure to memorize.** For any counting question, run this sequence without skipping a step:

1. **Read for the question type.** Is it asking for arrangements (order), selections (no order), distributions (identical items to recipients), or a probability (ratio of counts)?
2. **Classify order.** Does swapping two chosen items change the outcome? Yes → permutation. No → combination.
3. **Check for identical objects.** Repeated letters/items being arranged → divide by the factorial of each repeated group. Identical items being handed out → stars and bars.
4. **Spot the constraint and pick its tactic.** "Together" → glue. "Apart/forbidden" → complement. "At least one" → complement (total − none). "Exactly X and Y" → product of combinations. "Alternating" → count per starting pattern.
5. **Check circular vs. linear.** Round table → (n − 1)! with internal blocks handled separately. Row → n!.
6. **Compute with slots, then sanity-check the size.** Multiply descending choices rather than plugging full factorials; then ask whether the magnitude is reasonable before committing.

**Strategic shortcut — work the answer choices, not just the formula.** Combinatorics answers are usually small integers or clean factorial expressions, which makes two answer-choice tactics powerful.

- **Estimation / bounding.** If you can establish that the true count must exceed a lower bound and fall below an upper bound, you can often eliminate three or four choices without finishing the computation. For "at least one chemistry book" above, the answer must be below the unconstrained total C(10, 4) = 210 and clearly more than half of it (most selections include a chemistry book), so any choice under ~110 or equal to 210 is out — that alone may leave one survivor.
- **Recognize the factorial fingerprints.** Answers like 24, 120, 720, 5040 are 4!, 5!, 6!, 7!. If a choice is 6 times another choice, you are almost certainly looking at a permutation-vs-combination pair (the factor of 3! = 6 from the earlier Recall check). The "trap" answer in a combination problem is frequently the corresponding permutation, and vice versa — sized exactly k! apart. Spotting that relationship tells you which one the constraint demands.

**Worked example — backsolving / estimation in action (medium).** A 5-question quiz draws from a pool, and a student must answer **at least 4** of 5 questions correctly to pass; questions are independent and each is right or wrong. How many of the 2⁵ = 32 possible answer patterns are passing patterns?

"At least 4 right out of 5" = "exactly 5 right" OR "exactly 4 right." These are unordered selections of which questions are correct:

- Exactly 5 right: C(5, 5) = 1
- Exactly 4 right: C(5, 4) = 5
- Total: 1 + 5 = **6**

Estimation check before committing: passing is hard (you can miss at most one), so the count should be small relative to 32 — and 6 is a small fraction, which fits. Had you mistakenly computed "at least 1 right" (the complement-style problem) you'd have gotten 32 − 1 = 31, a number whose size instantly fails the sanity check. **The named tactic: estimate the expected magnitude first, then reject any computed answer that violates it.**

> **Recall check.** A problem gives roles "1st, 2nd, and 3rd place" among 10 runners. Without computing, which formula family applies and roughly how large is the answer? (Permutation — distinct ranks mean order matters — P(10, 3) = 10 × 9 × 8 = 720. If your method produced C(10, 3) = 120, you dropped the ordering by a factor of 3! = 6.)

**Common mistakes.**
- Using a **combination when roles are distinct** (president/treasurer, gold/silver) — those are permutations; order is hidden in the role labels.
- Using a **permutation for an unordered group** (committee, team, handshake) — divide out the k! you don't need.
- **Adding when you should multiply.** Simultaneous independent choices ("men AND women") multiply; mutually exclusive cases ("exactly 2 OR exactly 3") add.
- **Counting "at least one" directly** instead of via the complement — slower and error-prone — and negating "≥ 1" as "= 1" instead of the correct "= 0."
- **Multiplying by an extra factorial for identical items** (e.g., swapping the two L's in LEVEL, or the two identical candies) — identical objects have no internal ordering to count.
- **Using n! instead of (n − 1)! at a round table** — rotations of the same circular arrangement are not distinct.
- **Forgetting the internal ordering after the glue trick** — after arranging the block, remember to multiply by the arrangements *inside* the block.
- **Forgetting the factor of 2 in an equal-group alternating problem** — or wrongly including it when the groups are unequal.

**What to do next.**

1. Work through the problem sets below — start at Easy regardless of your target score. Combinatorics is a topic where 5 slow problems done with deliberate pattern-matching beats 20 rushed ones.
2. For every question you miss, note *which decision* you got wrong: did you misclassify permutation vs. combination, or forget the complement, or miscount the valid patterns? Tag it in the error log — one tag gives you more information than re-reading the entire chapter.
3. Once you've completed the chapter problem sets, combinatorics questions will appear in the spaced retrieval queue. That's where the pattern recognition locks in.

When you finish the end-of-chapter sets below, keep this table open. By the time you've done 15–20 combinatorics questions with it at your elbow, you won't need it anymore.

**Recap.** Four decisions, in order: order? identical objects? constraint? circular or linear? Order matters → permutation (slots or P); order doesn't → combination (C, which is P with the k! divided out). "Exactly" means a product of combinations; "at least one" means the complement of "none"; "together" means glue; "apart" means subtract the glued case; alternating equal groups carries a factor of 2 (unequal groups, factor 1); round tables drop one factor to (n − 1)!; identical objects never earn an extra factorial. Compute with descending-slot multiplication, recognize the factorial fingerprints in the answer choices, and sanity-check the magnitude before you commit. Get the classification right and the arithmetic is the easy part.

## @distributions

Distribution problems ask: in how many ways can you allocate **identical** items among **distinct** recipients?

This is the topic that separates careful counters from the rest. It looks deceptively close to combinations, and the GMAT writes answer choices precisely so that the "obvious" wrong method lands on a trap option. The whole game is recognizing when items have no identity, and then translating "how many ways to split them up" into a single combination via one mechanical picture: stars and bars.

This is different from arrangement problems. Arrangement problems use distinct objects (people, books, letters). Distribution problems use identical objects (candies, coins, votes) given to labeled recipients (children, boxes, candidates). With distinct objects you care *which* object goes where. With identical objects you care only *how many* go to each recipient — the only data that survives is the count vector, like (2, 0, 3, 1). The most reliable mental test: imagine swapping two of the items. If swapping changes the outcome, the items are distinct (arrangement). If swapping changes nothing, the items are identical (distribution). Two identical candies are interchangeable, so swapping them is invisible; two different prizes are not, so swapping them produces a genuinely new outcome.

### Stars and bars — no minimum constraint

To distribute n identical candies among k distinct children (each child may get zero):

**C(n + k − 1, k − 1)**

**The mental model.** Imagine n identical stars ( ★ ★ ★ ... ) in a row, separated by k − 1 dividers ( | ). The dividers split the row into k groups — one per child. Choosing where to place the k − 1 dividers among n + k − 1 total positions is equivalent to choosing a distribution.

Read a specific arrangement to feel why it works. Distribute 6 candies among 4 children. The string ★★ | | ★★★ | ★ has 6 stars and 3 bars (k − 1 = 3). Reading left to right, the bars cut the stars into 2, 0, 3, 1 — child A gets 2, child B gets 0, child C gets 3, child D gets 1. Every legal distribution corresponds to exactly one such string, and every string is one distribution. So counting distributions = counting strings = choosing which of the 9 positions hold the 3 bars (the rest are stars). That choice is **C(9, 3)**.

Why this picture is airtight: the correspondence is a *bijection*, meaning it pairs each distribution with exactly one string and each string with exactly one distribution, leaving nothing double-counted and nothing missing. Consecutive bars with no star between them (as in "★★ | |") are not a bug — they encode a recipient who gets zero, which is exactly what "may get none" allows. Bars at the very start encode the first child getting zero; bars at the very end encode the last child getting zero. The total length is always n stars plus (k − 1) bars = n + k − 1 symbols, and you simply pick the bar positions.

A subtle but important point: it is C(n + k − 1, **k − 1**), where k − 1 is the number of *dividers*, not the number of children. You can equivalently write it as C(n + k − 1, **n**), choosing positions for the stars instead. Both give the same number because C(9, 3) = C(9, 6). Use whichever has the smaller bottom number — it's less arithmetic.

**Worked example.** Distribute 6 identical candies among 4 distinct children. No minimum.

    C(6 + 4 − 1, 4 − 1) = C(9, 3) = 84

**Worked example.** A teacher has 8 identical gold stickers to hand out among 3 students, and a student may receive none. How many distributions are possible?

- Items n = 8, recipients k = 3, no minimum.
- C(n + k − 1, k − 1) = C(8 + 3 − 1, 3 − 1) = C(10, 2).
- C(10, 2) = (10 × 9) / 2 = **45**.

Notice how small k makes this fast: with 3 recipients you always end up choosing 2, i.e. a C(something, 2), which is the most computable combination on the test. A handy habit for 700-level speed: whenever k = 3, the answer is C(n + 2, 2), a single triangular number; whenever k = 2, the answer is C(n + 1, 1) = n + 1 (splitting n candies between two people, the first can get 0, 1, 2, ..., n — that's n + 1 ways, which the formula confirms instantly).

> **Recall check.** In the formula C(n + k − 1, k − 1), what do n and k stand for, and which one is the "stars"? (n = number of identical items = the stars; k = number of distinct recipients; the dividers number k − 1.)

### Stars and bars — at-least-one constraint

When each recipient must get at least one item: give each recipient one item first (this uses k items and guarantees the minimum), then distribute the remaining n − k freely with no constraint. After the pre-allocation, every recipient is "safe," so the leftover can go anywhere, including back to a recipient who already has one.

The leftover count is **C((n − k) + k − 1, k − 1) = C(n − 1, k − 1)**. That compact form, C(n − 1, k − 1), is worth memorizing as the "each gets at least one" shortcut — but only derive it once and trust it; on test day you can always fall back to "subtract the minimums first, then plain stars and bars."

**Worked example.** Distribute 10 identical candies among 4 distinct children; each child must get at least one.

- Give each child 1 candy first: uses 4. Remaining: 10 − 4 = 6.
- Distribute 6 among 4 freely: C(6 + 4 − 1, 4 − 1) = C(9, 3) = **84**.
- Cross-check with the shortcut: C(n − 1, k − 1) = C(9, 3) = 84. ✓

**Worked example.** Same problem, distribute 4 among 4 with each getting at least one. Give each 1 first: 0 remaining. Only one way: each child gets exactly 1. C(0 + 4 − 1, 4 − 1) = C(3, 3) = **1**. ✓

This edge case is a useful sanity check on the formula: when n = k and each must get at least one, there is genuinely only one distribution (everybody gets exactly one), and the formula returns 1. If your formula ever returns something other than 1 here, you've set it up wrong. A companion edge case: if n < k and each must get at least one, the distribution is *impossible* — you cannot give every recipient at least one item when you have fewer items than recipients. The formula confirms this only if you read it carefully: with n = 3 candies among k = 4 children each getting at least one, the shortcut gives C(n − 1, k − 1) = C(2, 3), and C of a smaller top over a larger bottom is 0. So the formula returns 0, the honest answer. Watch for this: the GMAT loves "each must get at least one" with deliberately too few items, where the answer is simply 0.

> **Recall check.** You must distribute 12 identical pencils among 5 students with each getting at least 2. What's the very first step, and how many pencils remain to distribute freely? (Pre-allocate the minimums: hand out 2 each = 10 pencils used, leaving 12 − 10 = 2 to distribute freely among 5; then C(2 + 5 − 1, 5 − 1) = C(6, 4) = 15.)

### Higher minimums and the general procedure

The "at least one" trick generalizes to *any* minimum. If recipient i must get at least m_i, pre-assign every minimum, subtract the total of all minimums from n, then run plain stars and bars on what's left. The minimums need not be equal.

**Worked example (mixed minimums — harder).** A donor splits 20 identical \$1 chips among 3 charities A, B, C, where A must get at least 5, B at least 2, and C may get 0. How many allocations?

- Pre-assign minimums: A gets 5, B gets 2, C gets 0. That uses 5 + 2 + 0 = 7 chips.
- Remaining to distribute freely: 20 − 7 = 13, among k = 3 charities.
- C(13 + 3 − 1, 3 − 1) = C(15, 2) = (15 × 14) / 2 = **105**.

The pre-assignment never changes the *number* of recipients (still k = 3); it only lowers the number of items. That is the single most common place people slip — they shrink k along with n. Keep k fixed.

**Worked example (upper bound via complementary counting — hardest).** In how many ways can 10 identical apples be distributed among 3 distinct bins if no bin may hold more than 6 apples?

This adds a *maximum*, which stars and bars does not handle directly. Use complementary counting: count all distributions, then subtract the illegal ones (some bin holding 7 or more).

- Total with no upper limit: C(10 + 3 − 1, 3 − 1) = C(12, 2) = 66.
- Now subtract distributions where at least one bin has ≥ 7. Force a chosen bin to start with 7 apples (pre-assign 7), leaving 3 apples free among 3 bins: C(3 + 3 − 1, 3 − 1) = C(5, 2) = 10. There are 3 bins that could be the over-full one, so 3 × 10 = 30 illegal distributions.
- Could *two* bins each hold ≥ 7? That needs ≥ 14 apples, but we only have 10, so no double-counting to correct — inclusion-exclusion stops after the first round.
- Legal distributions: 66 − 30 = **36**.

The lesson: stars and bars handles minimums by pre-assignment but *cannot* impose a maximum on its own. Maxima require subtracting the "too-big" cases (complementary counting), and you must check whether two recipients could simultaneously break the cap — if they can, you have to add the doubly-counted cases back (inclusion-exclusion). On the GMAT the numbers are usually chosen so two violations are impossible, sparing you the add-back, but verify rather than assume.

**Procedure to memorize — distribution problems:**

1. **Confirm it's a distribution.** Are the items identical and the recipients distinct? If yes, stars and bars. If the items are distinct, stop — it's a permutation/combination/product-of-combinations problem instead.
2. **Read off n (identical items) and k (distinct recipients).** Do not swap them.
3. **Handle minimums by pre-assignment.** Subtract every required minimum from n. Leave k unchanged. (If "each gets at least one," you can jump straight to C(n − 1, k − 1).)
4. **Handle any maximum by complementary counting.** Compute the unrestricted total, then subtract the cases that break the cap (forcing one recipient over, times the number of recipients), checking whether two recipients can break it at once.
5. **Apply plain stars and bars to the leftover:** C(leftover + k − 1, k − 1).
6. **Choose the smaller bottom number** (k − 1 vs. leftover) before computing, to minimize arithmetic.
7. **Sanity-check an edge case** (e.g., leftover = 0 should give 1; too few items for "at least one each" should give 0; very small k should give a clean C(·, 2)).

### When to use distributions vs combinations

| You are choosing... | Method |
|---|---|
| k *distinct* people from n | Combination C(n, k) |
| How to allocate *identical* items to *distinct* recipients | Stars and bars C(n+k−1, k−1) |
| *Identical* items, each recipient gets at least one | C(n−1, k−1) |
| *Distinct* items into distinct recipients (each item chooses independently) | k^n (power, not stars and bars) |

The key giveaway for stars and bars: the items are interchangeable (identical candies, identical votes) and the recipients are distinguishable (named children, named boxes). That fourth row is the trap's evil twin — if the *items* are distinct (say, 5 different books onto 3 shelves where order on a shelf doesn't matter but the books differ), each book independently picks a recipient, giving k^n, not stars and bars. Always re-read whether the *items* carry identity.

**Worked example (distinct vs identical — the discriminator).** Compare two near-identical prompts.

- (a) "In how many ways can 4 identical \$10 bills be split among 3 people?" Items identical → stars and bars: C(4 + 3 − 1, 3 − 1) = C(6, 2) = **15**.
- (b) "In how many ways can 4 *different* prizes be given to 3 people, any number each?" Items distinct → each prize independently picks one of 3 people: 3^4 = **81**.

Same numbers, wildly different answers (15 vs. 81). The only difference in the wording is "identical" vs. "different." On the GMAT both 15 and 81 will frequently appear in the answer choices. The word that decides which is right is in the prompt — find it before you compute.

> **Recall check.** Which counts give 5 *distinct* flags onto 3 *distinct* flagpoles (any number per pole, ignoring vertical order): 3^5 or C(7, 2)? (3^5 = 243 — the flags are distinct, so each flag independently picks a pole; C(7, 2) = 21 would be the answer only if the flags were identical.)

### Strategy: estimate and use answer choices to dodge arithmetic

Because distribution answers are exact combinations, you rarely need to fully compute on a problem-solving question — you can often eliminate by size or by a divisibility/parity check.

**Worked example (estimation + elimination).** How many ways to distribute 7 identical marbles among 4 children, each child possibly getting 0?
A) 84  B) 120  C) 210  D) 240  E) 35

- Set up: C(7 + 4 − 1, 4 − 1) = C(10, 3).
- Estimation/answer-choice tactic: C(10, 3) = (10 × 9 × 8) / 6. The numerator 720 is divisible by 6, giving 120. You can also bound it: C(10, 3) is "10 choose 3," clearly bigger than C(10, 2) = 45 and smaller than C(10, 5) = 252, which already eliminates C and D and E. Among the survivors, the /6 quotient ends the job.
- Answer: **B) 120**.

A second tactic — **plugging in small numbers** — rescues you when you can't remember whether it's C(n + k − 1, k − 1) or some swapped version. Take a tiny case you can count by hand (e.g., 2 candies among 2 children: by hand the splits are (2,0),(1,1),(0,2) = 3 ways). Then test the formula: C(2 + 2 − 1, 2 − 1) = C(3, 1) = 3. ✓ Match means you've recalled the formula correctly; mismatch means you swapped n and k. This 30-second check has saved many test-takers from a memorized-formula slip.

**Worked example (backsolving a "find n" twist).** A bag of identical coins is split among 3 distinct jars, any jar possibly empty, and there are exactly 28 ways to do it. How many coins are in the bag?
A) 5  B) 6  C) 7  D) 8  E) 9

- The count is C(n + 3 − 1, 3 − 1) = C(n + 2, 2), and we need it to equal 28.
- Backsolve from the choices rather than solving the quadratic. Try B) n = 6: C(8, 2) = 28. ✓ Done.
- Quick verification it's not a coincidence: C(n + 2, 2) is strictly increasing in n, so 28 occurs for exactly one n. Try C) n = 7: C(9, 2) = 36, too big; try A) n = 5: C(7, 2) = 21, too small. n = 6 is the only fit.
- Answer: **B) 6**. Backsolving turns a "solve C(n+2, 2) = 28" algebra problem into three seconds of plugging choices into a formula you already trust.

**Trap to watch.** Students apply C(n, k) to distribution problems and get nonsense. Before using any formula, ask: are the items distinct or identical? If identical, stars and bars. If distinct, combinations, permutations, or k^n. A second classic trap: forgetting that "at least one each" requires pre-assignment — applying plain C(n + k − 1, k − 1) to a problem that demands a minimum *overcounts* by including the illegal zero-cases. A third: shrinking k when you pre-assign minimums (k is the recipient count and never changes). A fourth, subtler one: a problem that *secretly* caps a recipient (e.g., "no child gets more than 3") and you blow past it with plain stars and bars — maxima always require the complementary-counting subtraction, never a single combination.

**Common mistakes.**

- **Swapping n and k.** The exponent-like role belongs to n (items = stars); the dividers are k − 1. Validate with a tiny hand-counted case if unsure.
- **Using k − 1 = number of children.** It's the number of *dividers*, one fewer than the children. Off-by-one here is the single most frequent error.
- **Treating distinct items as identical (or vice versa).** Distinct items into distinct bins = k^n; only identical items use stars and bars.
- **Forgetting to pre-assign minimums**, or worse, pre-assigning but then also reducing k.
- **Trying to force a maximum into a single combination.** Caps need complementary counting (subtract the over-the-limit cases), not a one-shot formula.
- **Missing the impossible/zero cases.** "Each gets at least one" with fewer items than recipients is 0 ways; don't grind a formula that the setup already rules out.
- **Over-computing.** You often only need a bound or a divisibility check to pick the answer; don't grind out a full factorial when elimination is faster.

> **Self-explanation prompt.** Before the recap: why is distributing 6 identical items not the same as choosing 6 items? The items have no identity — there is no "first candy" or "second candy." The only thing that varies is *how many* each recipient gets, not *which* they get. And why does giving everyone one item first "use up" the at-least-one constraint? Because after the pre-assignment every recipient is already above the minimum, so the remaining items face no constraint and plain stars and bars applies. Push it one step further: why can't pre-assignment also handle a *maximum*? Because pre-assigning guarantees a floor that the leftover can only build on — but nothing in plain stars and bars stops the leftover from piling high onto one recipient, so a ceiling has to be enforced afterward by removing the cases that breach it.

**Recap.** Distribution = identical items into distinct recipients, counted by **C(n + k − 1, k − 1)** where n is the items (stars) and k the recipients (dividers = k − 1). Handle any minimum by pre-assigning it, subtracting from n, keeping k fixed, then running plain stars and bars; "each at least one" collapses to **C(n − 1, k − 1)**. Handle any maximum by complementary counting — total minus the over-the-cap cases. The fatal fork is identical-vs-distinct: identical items use stars and bars, distinct items use k^n. Confirm the item type from the prompt's wording before you touch a formula, validate a doubtful setup against a tiny hand-counted case, watch for impossible (zero-way) and trivial (one-way) edge cases, and lean on size/divisibility/backsolving to pick the answer without full arithmetic.

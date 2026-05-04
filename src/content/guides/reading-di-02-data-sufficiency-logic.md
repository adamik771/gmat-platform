---
title: Data Sufficiency Logic
description: Sufficiency vs solving — the critical distinction that decides DS questions. The five-answer decision tree, the discipline of testing statements independently before combining, the yes/no vs value sufficiency split, and the constraint-awareness habit that prevents the most expensive DS errors.
section: DI
type: reading
---

# Chapter 3.2 — Data Sufficiency Logic

## Core idea

Data Sufficiency is the most *deceptively simple* DI format. The question always has the same five answer choices. The format is rigid. And yet DS scores show enormous variance because the underlying skill — determining whether information is *sufficient* without solving the problem — runs against everything school math taught you. School math teaches you to compute. DS teaches you to recognize when computing is *unnecessary* because the answer can already be determined from the given information.

The mindset shift in this chapter: *don't solve; check sufficiency*. The question is not "what is the answer to this math problem"; the question is "do these statements give me enough information to determine the answer." Those are different questions, and they have different right-answer paths.

### Quick check

1. DS is described as the most *deceptively simple* DI format — why?
2. The mindset shift is to *not solve* but to do what?
3. The chapter argues the question is *not* "what is the answer" — it's what?
4. School math teaches what habit that DS punishes?
5. Why is the DS format rigid?

*Answers.* (1) The five answer choices are always the same and the format is fixed, but the underlying skill (sufficiency-determination) is unintuitive — students mistake the rigidity for difficulty being low. (2) Check sufficiency. (3) "Do these statements give me enough information to determine the answer?" — different question. (4) Compute fully — produce a specific value. DS rewards stopping once sufficiency is known. (5) The five answer choices are universal across all DS questions; only the underlying problem changes.

## Why it matters

Three reasons DS deserves dedicated treatment.

*The "solve when sufficiency would suffice" trap is the largest tax on DS scores*. Students compute fully when they only needed to determine sufficiency. The full computation often takes ninety seconds; the sufficiency check takes thirty. Across a section's worth of DS problems, computing instead of checking sufficiency adds three or four minutes of unnecessary work — enough to break pacing on the harder problems.

*The five-answer decision tree compresses the format*. Once you've internalized the tree, the answer choice you select is determined by your sufficiency analysis. There's no judgment call about which answer fits — A, B, C, D, or E is mechanical given your conclusions about each statement.

*DS rewards constraint awareness*. Most DS errors come from missing a hidden constraint or an implicit case (negative numbers, fractions, zero) that changes the answer. Strong solvers test edge cases; weak solvers solve for the easy case and bubble.

### Quick check

1. The "solve when sufficiency would suffice" trap is the largest tax on DS scores — why?
2. The five-answer decision tree means the answer choice is determined by what?
3. DS rewards constraint awareness — most errors come from missing what?
4. Strong solvers test edge cases — name three edge cases worth testing.
5. The full computation typically takes how much longer than the sufficiency check?

*Answers.* (1) Computing fully takes 90+ seconds; sufficiency-check takes 30. Across the section, the difference is multiple problems' worth of pacing. (2) Your sufficiency analysis on each statement (alone or together). There's no judgment about which letter — A, B, C, D, or E is mechanical given the analysis. (3) Hidden constraints or implicit cases (negative numbers, fractions, zero) that change the answer. (4) Negatives, fractions, zero, very large or very small numbers — anything that might break a tempting pattern. (5) About 3x longer — 90 seconds vs. 30 seconds typically.

## Mental model

The right mental frame for DS isn't problem-solving; it's *constraint-checking*. The question defines an unknown; each statement defines a constraint. Your job is to determine whether the constraints — alone or in combination — narrow the unknown to a *single definite value or yes/no answer*. Not whether the constraints are interesting, or true, or related to the question — *whether they narrow*.

A statement is sufficient if it produces a *single, definite answer*. If the statement allows two answers, it's insufficient. If the statement allows one answer for "nice" cases plus a different answer for an edge case, it's insufficient. The bar is "exactly one answer survives all consistent interpretations of the statement."

### Quick check

1. The "constraint-checking" mental model says the question defines what?
2. Each statement defines what?
3. A statement is sufficient if it produces what?
4. The bar for sufficiency is "exactly one answer survives" — what does this rule out?
5. Why is the constraint-checking framing different from problem-solving?

*Answers.* (1) An unknown — the value or yes/no claim the question is asking about. (2) A constraint — information that restricts the unknown's possible values. (3) A single, definite value or yes/no answer — not a range, not multiple candidates. (4) Two or more possible answers consistent with the statement. (5) Problem-solving outputs a specific value; constraint-checking outputs a binary (sufficient/insufficient) without needing the value.

## GMAT recognition signals

The five answer choices map to a decision tree. Memorize them.

*(A) Statement 1 alone is sufficient, but statement 2 alone is not sufficient.*
*(B) Statement 2 alone is sufficient, but statement 1 alone is not sufficient.*
*(C) Both statements together are sufficient, but neither alone is sufficient.*
*(D) Each statement alone is sufficient.*
*(E) Both statements together are not sufficient.*

The decision sequence:
1. Is statement 1 alone sufficient? Yes / No.
2. Is statement 2 alone sufficient? Yes / No.
3. If both yes → (D).
4. If 1 yes, 2 no → (A).
5. If 1 no, 2 yes → (B).
6. If both no → check both together. Are they sufficient combined? Yes → (C). No → (E).

The decision tree forces you to test the statements *independently first*, then combined only if both alone are insufficient.

### Quick check

1. State the five DS answer choices (A, B, C, D, E) verbatim.
2. The decision sequence first asks: is statement 1 alone sufficient? Then what?
3. If both statements alone are sufficient, the answer is what?
4. If statement 1 alone is sufficient and statement 2 alone is not, the answer is what?
5. If neither alone is sufficient but together they are, the answer is what?

*Answers.* (1) (A) Statement 1 alone sufficient, statement 2 alone not. (B) Statement 2 alone sufficient, statement 1 alone not. (C) Both together sufficient, neither alone is. (D) Each alone sufficient. (E) Both together not sufficient. (2) Is statement 2 alone sufficient? (3) (D). (4) (A). (5) (C).

## Method

A four-step DS protocol.

*Step 1. Restate the question*. What is the question actually asking? Is it a *value* question (what is the value of x?) or a *yes/no* question (is x positive?)? Sufficiency means different things in each case.

For value questions: sufficient means *exactly one specific value*. Two possible values is insufficient. A range is insufficient.

For yes/no questions: sufficient means *the answer is consistently yes or consistently no*. If some cases give yes and other cases give no, insufficient.

*Step 2. Test statement 1 alone.* Use only the information in the question stem and statement 1. Ignore statement 2 entirely. Determine whether statement 1 alone is sufficient. Test edge cases — negatives, fractions, zero, large numbers. If any edge case produces a different answer, statement 1 alone is insufficient.

*Step 3. Test statement 2 alone.* Same procedure. Ignore statement 1. Use only the question stem and statement 2.

*Step 4. If neither alone is sufficient, test both together.* Combine the information. Determine whether the combination is sufficient. Same edge-case discipline applies.

The order matters. Testing statements together when one alone is sufficient leads to wrong answers (you might pick C when D is right). Always test alone first.

### Quick check

1. State the four-step DS protocol.
2. What's the difference between *yes/no* sufficiency and *value* sufficiency?
3. For yes/no questions, sufficient means what?
4. Why must you test statements *alone first*, before combining?
5. Why is edge-case testing essential?

*Answers.* (1) Restate the question; test statement 1 alone; test statement 2 alone; if neither alone is sufficient, test both together. (2) Yes/no asks "is X true?" — sufficient = the answer is consistently yes or consistently no. Value asks "what is X?" — sufficient = exactly one specific value. (3) The answer is consistently yes (or consistently no) across all interpretations of the statement. (4) Testing combined first when one alone is sufficient leads to wrong answers — you'd pick (C) when (D) is right. Always alone first. (5) Statements that work for "nice" cases (positive integers) often break for negatives, fractions, or zero — the test is engineered to surface these.

## Common traps

Six recurring DS traps.

*Solving instead of checking sufficiency.* Computing the full answer when the goal is just to know whether the answer is determined. Wastes time. Fix: ask "do I need to know the answer, or just know that the answer is unique?"

*Using statement 2 information when testing statement 1 alone.* Bleeding information across statements. Common error: "well, statement 2 says x is positive, so when I test statement 1, x is positive..." No. When testing statement 1 alone, you don't know what statement 2 says.

*Missing edge cases.* Testing only "nice" numbers (positive integers) and missing what happens with negatives, fractions, or zero. Fix: deliberately test edge cases. For "is x > 0?" type questions, plug in a negative, a fraction, and zero.

*Confusing yes/no sufficiency with value sufficiency.* "Is x positive?" with a statement that says "x is between 0 and 5" — sufficient (answer is yes for all such x). But "what is x?" with the same statement is insufficient (range, not value). The same data has different sufficiency for different question types.

*Over-combining.* Picking (C) when (A) or (B) is correct because you didn't carefully test each statement alone. The fix: rigorous "alone first, together second" discipline.

*Confusing "consistent with" with "implies."* Statement 1 might be *consistent with* a particular answer to the question, but if multiple answers are also consistent, statement 1 doesn't *imply* the answer. Sufficiency requires implication, not consistency.

### Quick check

1. Name three of the six common DS traps.
2. *Solving instead of checking sufficiency* — what does it cost?
3. *Using statement 2 information when testing statement 1 alone* — what's the failure?
4. *Missing edge cases* — what's the recognition signal?
5. *Confusing yes/no sufficiency with value sufficiency* — give an example.

*Answers.* (1) Any three of: solving instead of checking sufficiency; using info across statements; missing edge cases; confusing yes/no with value sufficiency; over-combining (picking C); confusing "consistent with" and "implies." (2) 30-60 seconds per problem of unnecessary work — across the section, multiple problems' worth of pacing. (3) Bleeding information across statements — when testing statement 1 alone, you don't yet know what statement 2 says. Treats them as joint when they should be separate. (4) Testing only "nice" numbers (positive integers) and missing what happens with negatives, fractions, or zero. (5) "Is x positive?" with statement "x is between 0 and 5" — sufficient (yes for all such x). But "what is x?" with same statement — insufficient (range).

## Original mini-example

A worked example demonstrating the sufficiency check protocol.

*Question.* If $n$ is a positive integer, is $n$ divisible by 12?

*Statement 1.* $n$ is divisible by 4.
*Statement 2.* $n$ is divisible by 3.

*Step 1 — Restate.* Yes/no question: is n divisible by 12?

*Step 2 — Statement 1 alone.* n is divisible by 4. Is n necessarily divisible by 12? Test cases: n = 4 (divisible by 4, not by 12, answer is no). n = 12 (divisible by 4, divisible by 12, answer is yes). Different answers across cases. Statement 1 alone is **insufficient**.

*Step 3 — Statement 2 alone.* n is divisible by 3. Test cases: n = 3 (divisible by 3, not by 12, answer is no). n = 12 (divisible by 3, divisible by 12, answer is yes). Different answers. Statement 2 alone is **insufficient**.

*Step 4 — Both together.* n is divisible by 4 *and* by 3. Since 4 and 3 are coprime (no shared factors), n is divisible by 4 × 3 = 12. So yes, n is divisible by 12. Single consistent answer. Together is **sufficient**.

*Answer.* (C). Both statements together are sufficient, neither alone is.

*Trap to avoid.* The trap on this problem is over-confidence on statement 1 alone. Students who think "divisible by 4 means divisible by 12 ish, since 12 = 4 × 3 and divisibility chains" haven't actually tested the case. Test n = 4: it's divisible by 4 but not by 12. Counterexample. Statement 1 alone is insufficient. The discipline is *test cases, don't reason from intuition*.

The opposite trap: under-confidence on the combined statements. Students who haven't memorized "coprime divisibility chains multiplicatively" might pick (E) because they're not sure both together prove divisibility by 12. The fix: *prime factorize*. n divisible by 4 and 3 means n has factors 2² and 3, so n has factor 12.

*Time spent.* About 60 seconds. Most of it in deliberate edge-case testing.

## More worked examples

### Example 1 — Yes/no sufficiency on parity

*Setup.* Question: "Is x an even integer?" Statement (1): x = 2k for some integer k. Statement (2): x² is divisible by 4.

*Thinking process.* Statement (1) alone: if x = 2k where k is an integer, then x is even by definition. Sufficient. Statement (2) alone: if x² is divisible by 4, then x is divisible by 2 (since 4 = 2² and x² has at least 2² as a factor). Sufficient. Each statement alone is sufficient → answer (D).

*Solution.* (D).

*Common mistake.* Combining the statements before testing each alone. If you assume both, you'd conclude (C). But each alone gives a definite answer to the question.

*Takeaway.* Always test each statement alone first. (D) is correct when *both* statements alone are sufficient.

### Example 2 — Edge-case testing

*Setup.* Question: "Is x > 0?" Statement (1): x² > 0. Statement (2): x³ > 0.

*Thinking process.* Statement (1) alone: x² > 0 means x ≠ 0. But x could be positive (x = 2: x² = 4 > 0, answer yes) or negative (x = −2: x² = 4 > 0, answer no). Different answers across cases → insufficient.

Statement (2) alone: x³ > 0 means x is positive (cubes preserve sign — only positive x give positive x³). Sufficient.

*Solution.* (B) — statement 2 alone is sufficient.

*Common mistake.* Treating x² > 0 as forcing x > 0. It doesn't — x² is non-negative for all real x and positive for any nonzero x.

*Takeaway.* Edge-case testing on signed problems must include negative values. The trap is testing only positive cases and missing the contradictions.

### Example 3 — Combining when each alone is insufficient

*Setup.* Question: "What is the value of x?" Statement (1): 2x + y = 10. Statement (2): x − y = 2.

*Thinking process.* Statement (1) alone: one equation with two unknowns, infinite solutions → insufficient. Statement (2) alone: same, one equation in two unknowns → insufficient. Together: solve as a system. Adding (1) and (2): 3x = 12, x = 4 → sufficient.

*Solution.* (C).

*Common mistake.* Picking (E) because each statement alone is insufficient, without checking whether the combination is. Always test combination when each alone fails.

*Takeaway.* (C) is correct when *neither alone is sufficient* but *together they are*. The decision tree's bottom branch.

## Active recall checkpoint

Close this chapter and answer these without looking back.

- What is the *single largest tax* on DS scores and how does the mindset shift fix it?
- Memorize the *five answer choices* and the *decision tree*.
- What's the difference between *yes/no sufficiency* and *value sufficiency*?
- Why must you *test statements alone first*, before combining?
- Why is *edge-case testing* essential, and what edge cases should you test?
- Name three of the *common traps* and the failure mode each represents.

*Application.* For each described DS scenario, classify the question type and predict which answer choice (A, B, C, D, E) is correct.

- Question: "Is x positive?" Statement (1): x² = 9. Statement (2): x³ = 27.
- Question: "What is the value of n?" Statement (1): n is a positive integer. Statement (2): n is divisible by 5 and n < 10.
- Question: "Is the integer n divisible by 24?" Statement (1): n is divisible by 8. Statement (2): n is divisible by 3.
- Question: "What is the value of x²?" Statement (1): x = 4 or x = −4. Statement (2): x is positive.

For each: identify whether it's a yes/no or value-sufficiency question, run the test-each-statement-alone-first protocol, name any edge cases worth checking, and pick the answer choice (A/B/C/D/E).

If you missed any, re-read the relevant section and test yourself in three days.

## Review schedule

- *Day 1:* Read the chapter end to end. Memorize the answer-choice tree.
- *Day 3:* Drill ten DS problems with explicit "test alone first, then together" discipline.
- *Day 7:* Re-read *Common traps*. Drill ten more problems with explicit edge-case testing on every statement.
- *Day 14:* Active recall checkpoint without re-reading. Drill twenty DS problems under tight time.
- *Day 30:* Re-read the chapter. Update which trap is your dominant pattern.
- *Day 60:* Final re-read with full error-log data.

## Connection to other skills

DS connects to several Quant chapters. *Number Properties* (Chapter 1.3) is the most common content area DS draws from — divisibility and factor questions are the bread and butter of DS. *Algebra and Equations* (Chapter 1.4) provides the manipulation skills. *Quant Method Selection* (Chapter 1.8) — particularly the test-cases method — is the engine of DS sufficiency-checking.

Cross-section connection: the *constraint-awareness* discipline in DS is the same as the *constraint-awareness* discipline in Number Properties (Chapter 1.3) and the same as the *attribution-tracking* discipline in RC (Chapter 2.5). Each section has its own version of "what does the data actually allow"; DS is the most formal statement.

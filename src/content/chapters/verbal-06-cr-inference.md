---
slug: verbal-06-cr-inference
title: "CR: Inference"
section: Verbal
estimated_minutes: 15
prerequisites:
  - verbal-05-cr-weaken
summary: |
  Inference questions reverse the direction: given the statements as facts, what *must* be true? This chapter teaches the must-be-true test and the too-strong trap.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - critical-reasoning-q33
      - critical-reasoning-q144
  - id: cr-inference
    type: reading
    title: "CR: Inference"
    check_question_ids:
      - critical-reasoning-q23
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - critical-reasoning-q21
      - critical-reasoning-q22
      - critical-reasoning-q54
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - critical-reasoning-q24
      - critical-reasoning-q60
      - critical-reasoning-q40
---

## @cr-inference

Inference questions reverse the direction of reasoning. In Weaken and Strengthen, the argument is the thing under attack or support, and the answer choices act *on* it. Inference flips that relationship: the passage is no longer an argument to be judged — it's a set of **givens** you have to trust completely. The question then asks: **what must be true given these statements?** You are not allowed to doubt the passage. You are only allowed to doubt the answer choices.

That single swap changes everything about how you work. Your job is no longer to find the gap in someone's reasoning — it's to find the one answer that the passage has already paid for. Inference is the most mechanical of the Critical Reasoning families, and that's good news: once you internalize the procedure, these questions reward discipline over cleverness. The students who miss them aren't the ones who can't follow the logic; they're the ones who let a plausible-sounding choice slide past the "must be true" gate.

**The template.** Treat the passage as a set of *givens*. The correct answer is something that follows *necessarily* — i.e., cannot be false if the passage is true. Not "probably true," not "consistent with," not "the author would agree." Must be true. The right answer is, in a sense, *smaller* than the passage: it repackages information you were already handed, never reaching beyond it. If an answer adds even one new fact the passage didn't license, it's wrong, no matter how reasonable that fact sounds. Think of the correct choice as a *subset* of what's already on the page — never an extension of it.

**The question stem decoder:**

| Stem wording | Type |
|---|---|
| "…which of the following must be true…" | Inference |
| "…if the statements above are true, which of the following must also be true…" | Inference |
| "…the statements above most support which of the following conclusions…" | Inference (slightly looser) |
| "…can be properly inferred from the passage…" | Inference |
| "…the statements above, if true, best support which of the following…" | Inference (slightly looser) |

The tell across all of these: the *answer* is the conclusion, and the *passage* is the support. That's the opposite of a normal argument question, where the passage contains the conclusion. When you see the support and the conclusion swap places, you're in Inference territory and the "must be true" machinery applies.

> **Recall check.** In an Inference question, are you allowed to question the truth of the passage, or only the answer choices? (Only the answer choices — the passage is a given you accept as fully true.) Forcing yourself to state this *before* reading the choices rewires the default "evaluate the argument" reflex you built in Weaken; re-reading the rule wouldn't catch that reflex firing.

**The "must be true" test — your core procedure.** Memorize these steps and run them on every Inference question:

1. **Read the passage as fact.** Note any quantifiers ("all," "some," "no," "only," "if…then") — they carry the logical load.
2. **Do not pre-phrase an answer.** Unlike Weaken, there's rarely a single predictable answer; the test makers can validly infer many small things. Go to the choices.
3. **Take each choice and ask the killer question:** "Is there any possible world where the passage is true but *this answer is false*?"
4. **If yes, eliminate.** A single counter-scenario kills a choice — the answer doesn't *have* to be true.
5. **If no such world exists, keep it.** The correct answer is the one choice you cannot break.
6. **If two survive, you broke one too gently.** Re-attack the weaker one with a more creative counter-scenario; the truly necessary answer survives every scenario.

The engine of this procedure is step 3 — the deliberate search for a counter-scenario. You are not asking "does this sound right?" You are actively trying to *break* each answer by imagining a world consistent with the passage in which the choice is false. If you can build that world even once, the choice is dead. The correct answer is simply the one choice you tried and failed to break.

**Worked example (straightforward).** Passage: "All members of the finance team took the risk assessment course. Sarah is on the finance team. David took the risk assessment course."

Inferences:

- "Sarah took the risk assessment course." (**Must be true** — she's finance, and all finance took it. There is no world where the passage holds and this fails.)
- "David is on the finance team." (**Could be true — but not necessary.** Maybe David is from another team who also took the course. The passage never says finance members were the *only* takers. Counter-scenario exists, so eliminate.)
- "Everyone who took the risk course is on the finance team." (**Not stated.** The passage says finance members took it, not that they were the only ones. I can easily imagine an HR employee also taking it. Eliminate.)

Only the first answer survives every counter-scenario. The others are *possible* but not *necessary* — and Inference pays only for necessary.

**The "too strong" trap.** Inference answers frequently dangle choices that make claims *stronger* than the passage supports. The flag words: **"all," "every," "no," "always," "never," "only," "none," "cannot."** The passage usually licenses a narrower claim, and a broader answer is almost always wrong, because the broader the claim, the easier it is to construct a world that breaks it. The logic is symmetric: strong claims have *more* ways to fail, so they're *easier* to break, so they survive your counter-scenario hunt less often.

**Worked example (the too-strong trap).** Passage: "Studies of 500 participants found that 85% reported improved sleep after using the app for 30 days."

- A) "The app improves sleep for most people who use it for 30 days." (**Safe** — 85% of 500 is "most." Survives.)
- B) "The app improves sleep for everyone who uses it." (**Too strong** — 15% didn't report improvement; the world where those 75 people exist breaks this. Eliminate.)
- C) "Using the app is the best way to improve sleep." (**Too strong and out of scope** — the passage never compares the app to alternatives, so "best" is unsupported. Eliminate.)
- D) "The app caused the improvement in sleep." (**Too strong on causation** — participants *reported* improvement after use; the passage never rules out placebo or other causes. Eliminate.)

A is the valid inference; B, C, and D each overreach in a different direction — magnitude, comparison, and causation. Notice that a single well-chosen counter-scenario kills each one.

> **Self-explanation prompt.** In your own words, why is "most" survivable in choice A but "everyone" fatal in choice B, when both describe the *same* 85% result? (Write it out before reading on.) Articulating the boundary — that 85% guarantees "most" but the missing 15% leaves "everyone" breakable — forces you to encode the *mechanism* of the too-strong trap, not just memorize the word "everyone" as bad. Generating the reason yourself is what makes it stick.

**The "consistent with" trap.** Some wrong answers are things that *could* be true given the passage. Inference requires more — "must be true." **"Consistent with" ≠ "must be true."** Eliminate anything you can construct a counter-scenario for, even if that scenario seems unusual or unlikely. The test isn't "is this plausible?" — it's "is this *forced*?" This is the single most common reason strong students miss Inference questions: the choice fits the passage so comfortably that they never bother to ask whether the passage *demands* it.

**Worked example (consistent-with vs. must-be-true).** Passage: "Every product that passed inspection was shipped on Monday. The X200 was shipped on Tuesday."

- "The X200 did not pass inspection." (**Must be true.** This is the contrapositive: passed → shipped Monday, so not-shipped-Monday → not-passed. Tuesday is not Monday. Locked.)
- "The X200 had a defect." (**Consistent but not necessary.** Failing inspection and "having a defect" aren't the same — maybe it missed inspection entirely, or inspection was skipped. Counter-scenario exists. Eliminate.)
- "Some products that passed inspection were not shipped on Monday." (**Contradicts the passage** — directly false, since *every* passing product shipped Monday. Eliminate.)

The first choice is the only forced one, and it comes straight from the contrapositive — which brings us to the highest-yield skill in this question type.

> **Recall check.** What's the difference between an answer that is "consistent with" the passage and one that "must be true," and which one wins? (Consistent-with merely *could* be true — you can build a world where the passage holds but the choice fails — while must-be-true survives every such world; only must-be-true wins.) Pulling this distinction up from memory in the middle of the section, rather than at the end, trains you to apply the gate while choices are still in front of you, which is exactly when re-reading the rule would be too late.

**The "outside information" trap.** Never bring in real-world knowledge. Even if you *know* a claim is true in real life, if it doesn't follow from the passage, it is not a valid inference. If a passage says "the company's only factory is in Ohio," do not infer "the company sells products in the United States," however obvious that feels — the passage doesn't state it. Stick rigidly to what's on the page. The test makers deliberately build wrong answers out of true-but-unsupported real-world facts, precisely because your instinct to nod along at a true statement is hard to override.

**Quantifier logic — the single skill that solves hard inference questions.**

| Statement | Valid inference | Invalid inference |
|---|---|---|
| "All A are B" | "If x is A, x is B" | "All B are A" (reverse) |
| "Some A are B" | "At least one A is B" / "Some B are A" | "All A are B" (strengthening) |
| "No A are B" | "If x is A, x is not B" / "No B are A" | "Some A are B" |
| "If A, then B" | "If not B, then not A" (contrapositive) | "If B, then A" (affirming the consequent) |

The **contrapositive** (if not-B then not-A) is ALWAYS a valid inference from "if A then B." The **converse** (if B then A) is NOT. Knowing this one rule solves roughly 20% of hard inference questions, because the test makers love to offer the tempting-but-invalid converse right next to the correct contrapositive.

**Worked example (hard — chained conditionals).** Passage: "If the budget is approved, the project starts in March. If the project starts in March, the lead engineer must relocate. The lead engineer did not relocate."

Build the chain: budget approved → March start → relocate. Now apply the given fact: not-relocate. Walk the contrapositive backward: not-relocate → not-March-start → not-budget-approved.

- "The budget was not approved." (**Must be true** — the contrapositive chain forces it. This is the answer.)
- "The project did not start in March." (**Must be true** as an intermediate step — also a valid inference, though a real test usually offers only one of these.)
- "The budget was rejected." (**Too strong** — "not approved" could mean tabled, deferred, or never voted on, not necessarily "rejected." Eliminate.)
- "If the lead engineer had relocated, the budget would have been approved." (**Invalid** — this is affirming the consequent / running the chain forward, which conditionals don't license. Eliminate.)

The discipline: chain the conditionals, apply the negated fact, and ride the contrapositive backward. Forward reasoning from a consequent is the trap.

> **Recall check.** From "If A then B," which is the always-valid inference — the contrapositive or the converse, and what does each look like? (The **contrapositive**, "if not-B then not-A," is always valid; the **converse**, "if B then A," is not.) Retrieving the two forms cold — rather than nodding along to the table — is what lets you spot the converse trap under time pressure, because you've practiced producing both shapes, not just recognizing them.

**Worked example (hard — "some" and partial overlap).** Passage: "Some of the firm's analysts are CFA charterholders. All CFA charterholders passed three exams. No one who passed three exams works part-time."

- "Some of the firm's analysts passed three exams." (**Must be true** — the CFA analysts are charterholders, and all charterholders passed three exams. The "some" carries through. Valid.)
- "Some of the firm's analysts do not work part-time." (**Must be true** — those same charterholder-analysts passed three exams, and no three-exam-passer works part-time. Valid chain through two statements.)
- "All of the firm's analysts passed three exams." (**Too strong** — only *some* analysts are charterholders; the rest are unconstrained. Eliminate.)
- "No analyst at the firm works part-time." (**Too strong** — only the charterholder analysts are forced out of part-time; other analysts could work part-time. Eliminate.)

"Some" never upgrades to "all." It survives a chain only as far as the original "some" allowed — and that's exactly the boundary the test probes.

**Worked example (hard — the converse planted next to the contrapositive).** Passage: "Only employees who completed the compliance module received system access. Maria received system access." Here "only X are Y" means Y → X: having access implies completing the module.

- "Maria completed the compliance module." (**Must be true** — access → completed-module, and Maria has access. This is the valid forward read of an "only" statement. Keep.)
- "Everyone who completed the compliance module received system access." (**Converse / too strong** — completing the module doesn't guarantee access; the passage only runs access → module, not module → access. Eliminate.)
- "Employees without system access did not complete the module." (**Contrapositive confusion** — the contrapositive of access → module is not-module → not-access, *not* not-access → not-module. This reverses the arrow. Eliminate.)
- "Maria is an employee." (**Out of scope** — the passage never states Maria is an employee rather than, say, a contractor with access. Tempting from outside knowledge, but not forced. Eliminate.)

The lesson: "only" statements quietly set the arrow direction, and the test surrounds the one valid reading with a converse, a flipped contrapositive, and an outside-knowledge lure. Translate "only A are B" to "B → A" *before* you touch the choices.

**Trap to watch.** When the stem says **"most support"** or **"best support"** rather than "must be true," the standard loosens slightly: strict necessity becomes "most likely true given the passage." In practice you still eliminate every overstretch answer — but among the survivors you may pick one that's *strongly probable* rather than airtight. Do not over-correct: "most support" is not an invitation to choose a wild leap. It just means the winning answer can lean on the passage's weight of evidence rather than ironclad logical force. The wrong answers in these still tend to be too strong, out of scope, or reversed.

**Common mistakes.**

- **Picking the "consistent with" answer.** It's plausible, it fits the passage, it feels right — but you can build one counter-scenario, so it's out. Plausible is not forced.
- **Falling for the converse.** "If A then B" sitting next to a choice that says "if B then A." The converse feels symmetric and is dead wrong; only the contrapositive is valid.
- **Upgrading the quantifier.** Reading "some" and choosing "all," or reading "most" and choosing "every." The magnitude word in the answer must not exceed the passage's.
- **Importing outside knowledge.** Choosing an answer because it's true in the real world rather than because the passage forces it.

**Recap.**

- Inference flips the structure: the **passage is given as true**, and you doubt only the **answer choices**.
- Run the **"must be true" test** — eliminate any choice for which you can imagine a world where the passage holds but the choice fails.
- **"Must be true" beats "consistent with," "probably," and "the author would agree"** — only necessity counts.
- The **too-strong words** ("all," "every," "no," "always," "only") are red flags; the passage usually licenses a narrower claim.
- The **contrapositive is always valid; the converse never is** — master this one rule and the hardest conditional inferences fall.

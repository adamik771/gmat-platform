---
slug: critical-reasoning-inference
title: "Critical Reasoning: Inference"
section: Verbal
estimated_minutes: 22
prerequisites:
  - critical-reasoning
summary: |
  Inference questions reverse the direction of reasoning. Instead of evaluating an argument, you treat the passage as a set of givens and find the one statement that *must* be true. The whole game is a standard: "must be true," not "probably true" and not "consistent with." This chapter gives you the must-be-true test, the quantifier and contrapositive logic that cracks the hardest items, and the three traps — too-strong, consistent-with, and outside-information — that catch students who relax the standard.

  Prerequisite: the argument skeleton from the Critical Reasoning foundations chapter. Inference is the one CR type where there's no gap to attack — but reading conclusion and evidence cleanly still matters.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Two inference questions first. Notice the pull toward answers that "sound right" — that pull is exactly what this chapter trains you to resist.
    pretest_question_ids:
      - critical-reasoning-q21
      - critical-reasoning-q22

  - id: must-be-true
    type: reading
    title: "The must-be-true standard"
    intro: |
      Inference has exactly one rule: the answer cannot be false if the passage is true. This section gives you the test that enforces it and shows why "could be true" is never good enough.
    check_question_ids:
      - critical-reasoning-q23

  - id: inference-traps
    type: reading
    title: "The three traps and the quantifier logic that beats the hard ones"
    intro: |
      The wrong answers on inference are engineered around three predictable relaxations of the standard, and the hardest items hinge on formal quantifier and conditional logic. This section arms you against both.
    check_question_ids:
      - critical-reasoning-q24

  - id: summary
    type: summary
    title: "Inference — what must be true, nothing less"
    check_question_ids: []

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
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - critical-reasoning-q23
      - critical-reasoning-q24
      - critical-reasoning-q79
      - critical-reasoning-q86
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - critical-reasoning-q25
      - critical-reasoning-q95
      - critical-reasoning-q99
      - critical-reasoning-q100
      - critical-reasoning-q111
      - critical-reasoning-q123
---

## @must-be-true

Inference questions reverse the direction of reasoning. Instead of evaluating an argument, you're given a set of statements and asked: **what must be true given these statements?**

**Mental model.** Stop looking for an argument — there isn't one to attack. Treat the passage as a pile of facts you've been handed and accept as true. The answer is the statement you could *deduce* from them, the way a conclusion follows from premises in a proof. Anything you have to *assume* to reach is wrong.

**The template.** Treat the passage as a set of *givens*. The correct answer is something that follows *necessarily* — i.e., cannot be false if the passage is true. Not "probably true," not "consistent with." Must be true.

**The question stem decoder:**

| Stem wording | Type |
|---|---|
| "…which of the following must be true…" | Inference |
| "…if the statements above are true, which of the following must also be true…" | Inference |
| "…the statements above most support which of the following conclusions…" | Inference (slightly looser) |
| "…can be properly inferred from the passage…" | Inference |

**The "must be true" test.**

1. Take each answer.
2. Ask: "Is there any possible world where the passage is true but this answer is false?"
3. If yes, eliminate — the answer doesn't *have* to be true.
4. The correct answer is the one where no such world exists.

**Example.** Passage: "All members of the finance team took the risk assessment course. Sarah is on the finance team. David took the risk assessment course."

Inferences:

- "Sarah took the risk assessment course." (Must be true — she's finance, and all finance took it.)
- "David is on the finance team." (Could be true — but maybe David is from another team who also took the course. Doesn't MUST be true.)
- "Everyone who took the risk course is on the finance team." (Not stated — the passage only says finance members took it, not that they were the only ones. Doesn't must be true.)

Only the first answer is a valid inference. The others are possible but not necessary.

> **Recall check.** State the must-be-true test in one sentence. Now apply it: passage says "Every product that passed inspection was shipped. The X100 was shipped." Does it follow that "the X100 passed inspection"? (Answer: no — shipped doesn't require passing inspection unless the passage says *only* inspected products ship. This is the converse error; the X100 could have shipped by another route.)

## @inference-traps

Wrong inference answers are built by relaxing the must-be-true standard in three predictable ways. Learn them and the hard items, which hinge on formal logic, stop being guesswork.

**The "too strong" trap.** Inference answers often feature answer choices that make claims *stronger* than the passage supports. "All…", "every…", "no…", "always…" — these are red flags. The passage usually supports a narrower claim, and a broader answer is almost always wrong.

**Example of the too-strong trap.** Passage: "Studies of 500 participants found that 85% reported improved sleep after using the app for 30 days."

- A) "The app improves sleep for most people who use it for 30 days." (Safe — 85% of 500 is most.)
- B) "The app improves sleep for everyone who uses it." (Too strong — 15% didn't report improvement.)
- C) "Using the app is the best way to improve sleep." (Too strong — the passage doesn't compare the app to alternatives.)

A is the valid inference; B and C overreach.

**The "consistent with" trap.** Some wrong answers are things that *could* be true given the passage. Inference requires MORE — "must be true." "Consistent with" ≠ "must be true." Eliminate anything you can construct a counter-scenario for, even if that scenario seems unusual.

**The "outside information" trap.** Never bring in real-world knowledge. Even if you *know* that a certain claim is true in real life, if it doesn't follow from the passage, it's not a valid inference. Stick to what the passage states.

**Quantifier logic — the single skill that solves hard inference questions.**

| Statement | Valid inference | Invalid inference |
|---|---|---|
| "All A are B" | "If x is A, x is B" | "All B are A" (reverse) |
| "Some A are B" | "At least one A is B" | "All A are B" (strengthening) |
| "No A are B" | "If x is A, x is not B" | "Some A are B" |
| "If A, then B" | "If not B, then not A" (contrapositive) | "If B, then A" (affirming the consequent) |

The contrapositive (if not-B then not-A) is ALWAYS a valid inference from "if A then B." The converse (if B then A) is NOT. Knowing this one rule solves 20% of hard inference questions.

**Micro-drill.** Passage: "Every analyst who cleared the certification was promoted. Some analysts who were promoted later transferred to the London office." For each, mark valid (must be true) or invalid. 60 seconds:

1. "An analyst who did not get promoted did not clear the certification." → ___
2. "Some analysts who cleared the certification transferred to London." → ___
3. "Every analyst in the London office cleared the certification." → ___

Answers: (1) **Valid** — contrapositive of "cleared → promoted." (2) **Invalid** — the promoted analysts who transferred needn't be the certified ones; "some promoted transferred" doesn't link back to certification. (3) **Invalid** — reverses the chain and over-generalizes; London could include analysts who never certified. If you marked 2 or 3 valid, you affirmed the consequent or reversed a quantifier — the two errors the hard items are built on.

**Trap to watch.** "Most support" in the question stem slightly loosens the standard. Strict "must be true" becomes "most likely true given the passage." In practice, still eliminate overstretch answers — but you may be able to pick an answer that's *probably* true rather than strictly necessary.

## @summary

Inference is a deduction task with one standard: the answer cannot be false if the passage is true. Test every choice by trying to build a world where the passage holds but the answer fails — if you can, eliminate it.

**The process.**

1. Read the passage as a set of accepted givens.
2. For each answer, ask: "Is there a possible world where this is false?"
3. Eliminate the too-strong, the merely-consistent, and anything needing outside knowledge.
4. On hard items, fall back to formal logic — the contrapositive is valid, the converse is not.

**What to do next.** Drill the problem sets below; the hard set leans heavily on quantifier and conditional logic, so slow down and apply the table whenever an answer uses "all," "some," "no," or "if." When you miss one, identify which trap caught you — too-strong, consistent-with, outside-info, or a reversed conditional. Next chapter: **Evaluate** — which folds your strengthen, weaken, and assumption skills into a single question: "what would I most need to know?"

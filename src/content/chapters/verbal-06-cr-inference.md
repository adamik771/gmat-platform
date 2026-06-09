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
      - critical-reasoning-q34
  - id: cr-inference
    type: reading
    title: "CR: Inference"
    check_question_ids:
      - critical-reasoning-q35
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - critical-reasoning-q35
      - critical-reasoning-q36
      - critical-reasoning-q37
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - critical-reasoning-q38
      - critical-reasoning-q39
      - critical-reasoning-q40
---

## @cr-inference

Inference questions reverse the direction of reasoning. Instead of evaluating an argument, you're given a set of statements and asked: **what must be true given these statements?**

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

**Trap to watch.** "Most support" in the question stem slightly loosens the standard. Strict "must be true" becomes "most likely true given the passage." In practice, still eliminate overstretch answers — but you may be able to pick an answer that's *probably* true rather than strictly necessary.

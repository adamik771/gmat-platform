---
slug: reading-comprehension-inference
title: "Reading Comprehension: Inference"
section: Verbal
estimated_minutes: 22
prerequisites:
  - reading-comprehension
summary: |
  Inference questions ask what the passage implies but never states — and the standard is strict: the answer must be guaranteed by the text, not merely consistent with it. This chapter gives you the must-be-true test, the "weakest answer is usually right" heuristic that reverses most students' instinct, and the bridge and implication patterns that show up on the hardest items. Inference is the highest-difficulty RC type, so it's where targeted practice pays the most.

  Prerequisite: the three-pass protocol from the Reading Comprehension foundations chapter. The skill mirrors Critical Reasoning inference — the standard is identical.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Two inference questions before instruction. As you work, notice the pull toward the strongest-sounding answer — on inference, that instinct is usually wrong, and this chapter retrains it.
    pretest_question_ids:
      - reading-comprehension-q23
      - reading-comprehension-q39

  - id: inference-standard
    type: reading
    title: "The must-be-true standard"
    intro: |
      An inference must be guaranteed by the passage — true in every scenario where the passage is true. This section gives you the test and the counterintuitive heuristic that the most modest answer is usually the right one.
    check_question_ids:
      - reading-comprehension-q54

  - id: inference-patterns
    type: reading
    title: "The bridge and implication patterns"
    intro: |
      Hard inference answers connect two separate statements or draw out a logical consequence. This section gives you the recurring patterns so the deduction becomes recognition.
    check_question_ids:
      - reading-comprehension-q11

  - id: summary
    type: summary
    title: "Inference — guaranteed, not merely plausible"
    check_question_ids: []

problem_sets:
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - reading-comprehension-q23
      - reading-comprehension-q39
      - reading-comprehension-q54
      - reading-comprehension-q57
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - reading-comprehension-q3
      - reading-comprehension-q7
      - reading-comprehension-q11
      - reading-comprehension-q15
      - reading-comprehension-q19
      - reading-comprehension-q32
      - reading-comprehension-q35
      - reading-comprehension-q43
      - reading-comprehension-q47
      - reading-comprehension-q51
      - reading-comprehension-q60
      - reading-comprehension-q63
      - reading-comprehension-q69
      - reading-comprehension-q73
---

## @inference-standard

Inference questions ask: "Which of the following can be inferred from the passage?" or "The passage implies that..." or "Which of the following is most strongly suggested by the passage?"

**Mental model.** Treat the passage's statements as givens in a proof. The answer is what you can *derive* from them — what cannot be false if the passage is true. Anything you have to *add* from your own judgment to reach is not an inference; it's a guess wearing an inference's clothes.

**The test.** Inference answers are NOT directly stated in the passage. They are what *must be true* given the passage's explicit claims. The correct answer is a logical consequence, not a restatement.

**The "must be true" vs. "could be true" distinction.** Inference answers must be guaranteed by the passage, not merely consistent with it. If you can construct any plausible scenario where the passage is true but the inference is false, the inference isn't valid.

**Example.** Passage says: "Subscription businesses lose 30% of customers annually to churn, requiring constant new customer acquisition."

Valid inferences:
- "If a subscription business stops acquiring new customers entirely, its customer base will shrink." (Must be true.)
- "Companies with above-average retention have an advantage in the subscription market." (Must be true — implied by "requiring constant acquisition.")

Invalid inferences (too strong):
- "Subscription businesses will eventually go bankrupt." (Not supported — 30% loss doesn't mean inevitable collapse.)
- "All subscription businesses have the same retention rate." (Contradicted — "average" implies variation.)

**The "weakest inference is usually correct" heuristic.** Most students pick the strongest-sounding answer. But strong inferences are easier to disprove, which makes them wrong. The correct inference is often the *most modest* claim that's fully supported — "some," "often," "may," "tend to." Extreme-language answers ("always," "never," "all," "every") are usually wrong on inference.

> **Recall check.** Close the book. State the difference between "must be true" and "could be true." Now: when is the "weakest" inference answer typically correct vs. incorrect? (Answer: the most modestly phrased inference is usually right because it's hardest to disprove; strongly-worded inferences ("always," "all") are usually wrong because a single counter-scenario negates them.) Retrieval of this distinction catches 20% of inference errors.

## @inference-patterns

The hardest inference items follow recurring shapes. Recognize the shape and the deduction stops being guesswork.

**The "bridge" inference pattern.** The passage provides two pieces of information; the inference connects them.

**Example.** Passage: "All primates with highly convoluted brains use tools. Most great apes have highly convoluted brains."

Valid inference: "Most great apes use tools." (Connects "great apes have convoluted brains" with "convoluted brains → tool use.")

**The "implication" pattern.** The author states something directly that logically entails something else.

**Example.** Passage: "Successful subscription businesses focus on building genuine switching costs, making it more valuable to stay than to leave."

Implication: "Companies that rely solely on cancellation friction are less sustainable." (Implied by "genuine switching costs" being contrasted with friction-based approaches.)

**The "negation/contrary" pattern.** If the passage says "X caused Y in urban areas," a valid inference may be "the same cause produced different effects outside urban areas" — because the passage specified the scope.

**Distinguishing inference from specific detail.** Specific detail = directly stated. Inference = directly implied. If the answer is an exact paraphrase of a sentence from the passage, it's specific detail, not the logical consequence an inference stem is asking for.

**Micro-drill.** Passage: "Every grant the foundation approved last year went to a project with at least one peer-reviewed publication. The Delta project received a grant from the foundation last year." For each, mark valid (must be true) or invalid. 60 seconds:

1. "The Delta project had at least one peer-reviewed publication." → ___
2. "Every project with a peer-reviewed publication received a grant from the foundation last year." → ___
3. "A project with no peer-reviewed publications did not receive a grant from the foundation last year." → ___

Answers: (1) **Valid** — Delta got a grant, and every grant went to a project with a publication. (2) **Invalid** — this reverses the conditional; having a publication doesn't guarantee a grant. (3) **Valid** — the contrapositive of "grant → publication." If you marked (2) valid, you affirmed the converse — the single most common hard-inference error.

> **Self-explanation prompt.** Why is a bridge inference valid while an extended claim isn't? If you can say "because the bridge only combines two things the passage already asserts, adding nothing — while an extended claim reaches past what the premises guarantee," you've found the line between deduction and overreach that the hard items are built on.

## @summary

An inference is guaranteed by the passage — true in every world where the passage is true. Test each answer by trying to build a world where the passage holds but the answer fails; if you can, it's out.

**The process.**

1. Treat the passage as givens.
2. For each answer, ask: "Is there a possible world where this is false?"
3. Prefer the modestly worded answer; distrust "always / all / never."
4. On hard items, look for a bridge (combine two statements) or an implication (draw out a consequence).

**What to do next.** Drill the problem sets below — this chapter is almost entirely hard questions, so slow down and apply the must-be-true test explicitly. Each miss, decide whether you overreached (picked a too-strong answer) or reversed a conditional. Next chapter: **Application** — where you carry the author's principle to a brand-new case.

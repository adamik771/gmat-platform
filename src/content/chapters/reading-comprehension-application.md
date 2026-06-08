---
slug: reading-comprehension-application
title: "Reading Comprehension: Application"
section: Verbal
estimated_minutes: 18
prerequisites:
  - reading-comprehension
summary: |
  Application questions ask you to carry the author's logic to a case the passage never mentions: which new scenario would the author endorse, or which example best illustrates the argument. The skill is two steps — extract the underlying principle, then test each answer against it. This is really Critical Reasoning's "strengthen" move in disguise, so the intuition transfers directly. This chapter gives you the extract-and-apply workflow and the traps that pull you off-principle.

  Prerequisite: the three-pass protocol from the Reading Comprehension foundations chapter, and ideally CR Strengthen & Weaken — application reuses the same confirming-case logic.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Two application questions before instruction. Notice how the right answer is never stated in the passage — it's a new case that obeys the author's rule.
    pretest_question_ids:
      - reading-comprehension-q4
      - reading-comprehension-q8

  - id: extract-apply
    type: reading
    title: "Extract the principle, then apply it"
    intro: |
      Every application question hides a rule. Name the rule first, in your own words, and the answer choices sort themselves into "obeys the rule" and "doesn't." This section gives you the two-step method.
    check_question_ids:
      - reading-comprehension-q12

  - id: application-traps
    type: reading
    title: "The off-principle and overreach traps"
    intro: |
      Wrong application answers stay near the passage's topic but break its actual rule, or stretch a moderate claim too far. This section gives you the filters, and the connection to Critical Reasoning that makes application intuitive.
    check_question_ids:
      - reading-comprehension-q24

  - id: summary
    type: summary
    title: "Application — the author's rule on a new case"
    check_question_ids: []

problem_sets:
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - reading-comprehension-q4
      - reading-comprehension-q8
      - reading-comprehension-q12
      - reading-comprehension-q16
      - reading-comprehension-q20
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - reading-comprehension-q24
      - reading-comprehension-q40
---

## @extract-apply

Application questions ask you to extend the author's logic to a new case: "Which of the following is most consistent with the author's views?" or "Which of the following scenarios would the author most strongly endorse?"

**Mental model.** The passage states a rule; the question hands you cases the passage never discussed and asks which one the rule covers. So your first move is to state the rule in plain language — once you have it, the answer choices split cleanly into "the rule predicts this" and "the rule says nothing about this."

**The template.** Figure out what principle the author is applying in the passage. Then evaluate the answer choices through that principle — which one follows the same logic?

**Step 1: Extract the principle.** What is the passage's underlying rule? If the passage argues "green space reduces asthma via pollutant absorption," the principle is "vegetation with high leaf surface area reduces air-borne pollutants, therefore reducing related health conditions."

**Step 2: Apply the principle to the answer choices.** Which answer represents a case where the principle would give the same prediction?

**Example.** Passage argues that subscription businesses succeed by building genuine switching costs (ecosystem lock-in, proprietary content, network effects).

Application question: "Which of the following strategies would the author most likely endorse for a struggling subscription business?"

Candidate answers:

- A) "Make the cancellation process more time-consuming." — Contradicts the passage's preference for *genuine* costs vs. *friction*.
- B) "Invest in proprietary content that competitors cannot replicate." — Matches the passage's "genuine switching cost" principle.
- C) "Reduce the subscription price by 25%." — Not addressed by the principle.
- D) "Focus marketing on customer acquisition rather than retention." — Contradicts the passage's retention framing.
- E) "Launch a new unrelated product line." — Unrelated to the principle.

Answer: B. It's the case where the author's own logic would endorse the strategy.

**Common application patterns:**

- **"The author would most likely agree that..."** — Find the answer that follows the author's stated views.
- **"Which example would best illustrate the passage's argument?"** — Find an example that applies the principle.
- **"Which course of action is most consistent with..."** — Apply the principle to a decision.

**Micro-drill.** Principle to extract first, then apply. Passage: "The author argues that museums retain visitors not by cutting ticket prices but by deepening engagement — interactive exhibits, member events, and rotating collections that reward repeat visits." Which would the author most likely endorse for a struggling museum? 45 seconds:

1. "Run a half-price admission promotion for the summer." → ___
2. "Introduce a rotating exhibit that changes every quarter." → ___
3. "Reduce the education staff to lower operating costs." → ___

Answer: **(2).** The principle is "retain visitors through deepened engagement, not price." (2) is a rotating collection that rewards repeat visits — a direct application. (1) is the price lever the author explicitly rejects; (3) is unrelated to the engagement principle. State the rule first and the choice is forced.

## @application-traps

Two trap shapes account for most application misses — both stay close to the topic while breaking the actual rule.

**The "off-principle" trap.** Wrong answers often invoke something related to the passage's topic but that the author's principle doesn't actually predict. Filter aggressively — the answer has to be what *the author's specific principle* predicts, not just what "seems consistent with the topic."

**The "extended inference" trap.** Some wrong answers extend the passage's logic too far. If the passage establishes a moderate claim ("in some cases X causes Y"), an answer that generalizes ("in all cases X causes Y") overextends.

**The "author's stance" constraint.** If the author is critical of something in the passage, application answers that endorse that thing are wrong. Always check the author's attitude before evaluating which scenarios they'd endorse.

> **Self-explanation prompt.** Why are application questions essentially "strengthen the author's principle"? If you can say "because you're looking for new cases where the author's principle would give the same prediction — which is exactly how you strengthen a causal claim: by finding more confirming cases," you've connected RC application to Critical Reasoning's strengthen template, and can apply the same intuition.

## @summary

Application carries the author's rule to a case the passage never raised. Extract the rule in your own words, then keep the one answer the rule actually predicts.

**The process.**

1. State the passage's underlying principle in one sentence.
2. Test each answer: does the principle predict this case?
3. Reject off-principle answers (topic-adjacent but rule-irrelevant), overreaching generalizations, and anything that endorses what the author criticizes.

**What to do next.** Drill the problem sets below; on each miss, write the principle in one sentence and check it against the answer you chose. Next chapter: **Function & Attitude** — where the question shifts from the author's logic to the author's *moves* and *tone*.

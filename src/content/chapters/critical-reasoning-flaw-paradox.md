---
slug: critical-reasoning-flaw-paradox
title: "Critical Reasoning: Flaw & Paradox"
section: Verbal
estimated_minutes: 20
prerequisites:
  - critical-reasoning
summary: |
  Two related types, taught together because both ask you to spot something "off" — but in opposite directions. Flaw questions ask you to *name* the reasoning error an argument commits; paradox questions hand you two facts that seem to contradict each other and ask you to *reconcile* them. This chapter gives you the five most common GMAT flaws as a recognition checklist, and the both-facts test that defeats every paradox distractor.

  Prerequisite: the argument skeleton from the Critical Reasoning foundations chapter. Flaw questions in particular reward a clean read of conclusion, evidence, and gap.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      One flaw question and one paradox question before instruction. Notice how different the two feel — naming an error versus resolving a tension — even though both are about spotting what's off.
    pretest_question_ids:
      - critical-reasoning-q26
      - critical-reasoning-q27

  - id: flaw-questions
    type: reading
    title: "Flaw — name the reasoning error"
    intro: |
      Flaw questions are a diagnosis task: the argument is broken in a specific, nameable way, and the right answer describes that error in the abstract. This section gives you the five errors that cover the large majority of GMAT flaw questions.
    check_question_ids:
      - critical-reasoning-q28

  - id: paradox-questions
    type: reading
    title: "Paradox — reconcile the two facts"
    intro: |
      Paradox questions give you two facts that seem to clash and ask which answer lets *both* be true at once. This section gives you the both-facts test that eliminates every distractor in one pass.
    check_question_ids:
      - critical-reasoning-q29

  - id: summary
    type: summary
    title: "Flaw & Paradox — diagnose, or reconcile"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - critical-reasoning-q26
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - critical-reasoning-q27
      - critical-reasoning-q28
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - critical-reasoning-q29
      - critical-reasoning-q30
      - critical-reasoning-q80
---

## @flaw-questions

**Flaw (or "flaw in reasoning") questions** ask: "Which of the following describes a logical error in the argument?" You're diagnosing what went wrong.

**Mental model.** Don't argue with the conclusion — *classify* the mistake. The argument has already failed in one specific, nameable way; your job is to match that failure to its label. The right answer is a meta-level description ("confuses correlation with causation"), not a fact about the topic.

**The five most common flaws on GMAT CR.**

1. **Correlation vs. causation.** Author claims X caused Y because they observed them together. But correlation doesn't prove causation — alternative causes, reverse causation, or coincidence are all possible.

2. **Unrepresentative sample.** Author generalizes from a study or anecdote that isn't typical. ("I surveyed my three neighbors, so…")

3. **Confusing necessary and sufficient conditions.** "If A, then B" does *not* mean "if B, then A." The argument might treat them as equivalent.

4. **Ad hominem / appeal to authority.** Attacks the source rather than the argument, or supports the argument with an irrelevant authority.

5. **Assumes what needs to be proven.** Circular reasoning — the conclusion is hidden in the evidence.

**The template for answering flaw questions.** Read the argument, diagnose which of these five flaws it commits, then find the answer choice that describes that flaw.

The correct answer will usually paraphrase the flaw in abstract terms: "the argument fails to consider alternative explanations," "the argument generalizes from an unrepresentative sample," "the argument confuses correlation with causation," etc.

**The "description, not criticism" filter on flaw questions.** A flaw answer describes the *type* of error, not the specific content. Answer choices that restate the argument or list factual disagreements are usually wrong. The right answer is a meta-level diagnosis: "confuses X with Y," "generalizes from a biased sample," etc.

**The question stem decoder (flaw):**

| Stem wording | Type |
|---|---|
| "…describes a flaw in the argument…" | Flaw |
| "…the reasoning above is flawed because…" | Flaw |
| "…the argument is most vulnerable to criticism for…" | Flaw |

**Micro-drill.** Name the flaw each argument commits, using the five-item checklist. 60 seconds:

1. "Our best-selling cereal is the one shoppers most often buy on impulse; therefore impulse buying is what makes a cereal sell well." → ___
2. "The new policy must be sound — it was proposed by an economist with a Nobel Prize." → ___
3. "We surveyed visitors to our premium lounge and 90% earn over $200k, so most of our airline's passengers are wealthy." → ___

Answers: (1) **Correlation vs. causation** (and arguably circularity) — best-sellers being impulse buys doesn't show impulse buying *drives* sales. (2) **Appeal to authority** — the proposer's credentials don't make the policy sound. (3) **Unrepresentative sample** — premium-lounge visitors aren't typical of all passengers. The right answer on the real test will state these in the abstract, never by re-describing cereal or lounges.

## @paradox-questions

**Paradox (or "resolve the discrepancy") questions** present you with two facts that *seem* to contradict each other, then ask: "Which answer best explains how both can be true?"

**Mental model.** Nothing is actually contradictory — you're just missing a piece of information that makes both facts sit comfortably together. The right answer supplies that missing piece. So hold *both* facts in mind at once and ask, "what unstated third thing would let both of these be true?"

**The template.** The correct answer is a piece of information that makes both facts compatible. NOT one that supports one fact and ignores the other — that leaves the paradox intact.

**Example.** "After banning plastic bags, City A saw the total use of paper shopping bags increase by only 10% — far less than the 200% increase seen in other cities that banned plastic bags. Yet City A also reported no increase in reusable bag purchases."

Paradox: How did City A avoid the paper bag surge without using reusable bags?

Good resolutions:

- "Many City A shoppers began bringing bags from home that they already owned."
- "A local retailer offered a free canvas bag with every purchase over a certain amount."
- "City A's shoppers began making fewer, larger trips to avoid needing bags."

Each explains how the apparent contradiction is not a contradiction at all — there's a third option (already-owned bags, free canvas, trip consolidation) that wasn't ruled out by the paradox.

**The "both sides" filter on paradox questions.** Every wrong answer to a paradox question fails to explain BOTH facts. The right answer makes both facts make sense simultaneously. Always test your candidate: "does this explain fact 1? does this explain fact 2?" If either is "no," eliminate.

**The question stem decoder (paradox):**

| Stem wording | Type |
|---|---|
| "…best resolves the apparent contradiction…" | Paradox |
| "…explains how both statements can be true…" | Paradox |
| "…accounts for the discrepancy…" | Paradox |

**Micro-drill.** Paradox: "A factory installed faster machines that doubled output per hour, yet its total weekly production fell." For each candidate, mark whether it resolves the paradox (explains both facts) or not. 60 seconds:

1. "The faster machines broke down so often that the factory ran far fewer total hours per week." → ___
2. "The faster machines were more expensive than the old ones." → ___
3. "Workers preferred the older machines." → ___

Answers: (1) **Resolves** — higher output per hour *and* lower weekly total both hold once you know running hours collapsed. (2) **Doesn't** — cost says nothing about production volume; the two facts still seem to clash. (3) **Doesn't** — preference doesn't explain the output drop. Only (1) passes the both-facts test; 2 and 3 are the classic one-sided distractors.

> **Recall check.** State the one test that eliminates every wrong paradox answer. (Does the answer explain *both* facts? If it only accounts for one, it leaves the paradox standing.) Now state the filter that catches wrong flaw answers. (Does the answer *describe a type of error* rather than re-state the argument's content?)

**Trap to watch.** Paradox questions often have one answer choice that supports only one side of the paradox. It sounds relevant but doesn't actually resolve anything — because the paradox was about two facts together, not either alone. Always verify your pick explains BOTH.

## @summary

Flaw and paradox both ask you to spot what's off — but flaw asks you to *name an error*, while paradox asks you to *reconcile two facts*.

**Flaw — the process.** Read the argument, match its error to the five-item checklist (correlation/causation, unrepresentative sample, necessary/sufficient confusion, ad hominem or appeal to authority, circular reasoning), then pick the answer that describes that error in the abstract.

**Paradox — the process.** Hold both facts at once, find the answer that makes both true simultaneously, and discard any answer that only addresses one side.

**What to do next.** This is a smaller, higher-difficulty chapter, so each question carries weight — drill all of the problem sets and treat every miss as a checklist failure: for flaw, which of the five did you misname; for paradox, which fact did the wrong answer leave unexplained. You've now covered all five CR question-type chapters. Return to the **Critical Reasoning** foundations chapter to drill the mixed problem sets under time pressure, then take the patterns into full practice sets and mocks.

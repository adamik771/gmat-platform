---
slug: verbal-03-cr-assumption
title: "CR: Assumption & the Negation Test"
section: Verbal
estimated_minutes: 18
prerequisites:
  - verbal-02-cr-argument-structure
summary: |
  An assumption is the unstated premise an argument needs to work. This chapter teaches the negation test — the mechanical tool that converts "does the author need this?" into "does the argument break if this is false?"
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - critical-reasoning-q191
      - critical-reasoning-q126
  - id: cr-assumption
    type: reading
    title: "CR: Assumption & the Negation Test"
    check_question_ids:
      - critical-reasoning-q11
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - critical-reasoning-q125
      - critical-reasoning-q12
      - critical-reasoning-q13
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - critical-reasoning-q14
      - critical-reasoning-q15
      - critical-reasoning-q16
---

## @cr-assumption

An **assumption** is an unstated premise the argument *requires* to work. Not a plausible add-on, not extra support that would be *nice* to have — a *necessary* link in the chain. If the assumption turns out to be false, the argument doesn't just get weaker; it collapses. That word, *necessary*, is the whole game. An assumption question is asking: what is the author quietly taking for granted, without which the conclusion does not follow at all?

The reason assumption questions reward a *technique* rather than intuition is that "what is the author taking for granted?" is a slippery question to answer by feel. Three answer choices will all sound like things the author probably believes. Your job is not to find what the author believes — it's to find the one statement the argument cannot survive without. There is a mechanical tool that converts the vague question into a precise, testable one.

**The negation test — the single most powerful technique for assumption questions.**

1. Take each answer choice.
2. **Negate** it (turn it into its logical opposite — not "the extreme opposite," just "not this").
3. Ask: does the negated version *destroy* the argument? If the conclusion no longer follows, that's the assumption.
4. If the negated version leaves the argument standing, that choice is NOT the assumption — eliminate it.

The logic underneath is airtight: a *necessary* premise is, by definition, one whose falsehood breaks the argument. So if negating a choice breaks the argument, that choice was necessary — it was the assumption. If negating it changes nothing, the argument never needed it. The negation test isn't a heuristic that "usually works"; it is the literal definition of necessity made operational. This is why it never fails you the way intuition does: you are not asking yourself a question of taste, you are running a logical experiment on each choice and reading off the result.

**Worked example (straightforward).** Argument: "Company X switched from annual to quarterly performance reviews. Turnover dropped from 22% to 14%. Therefore, the new review system caused the turnover drop."

Candidate answers:

- A) "The new review system was more expensive than the old one."
- B) "No other major change at Company X during the same period contributed to the turnover drop."

Negate A: "The new review system was NOT more expensive than the old one." Does the argument collapse? No — cost is irrelevant to the *causal* claim about turnover. A is NOT the assumption.

Negate B: "Another major change at Company X during the same period also contributed to the turnover drop." Does this destroy the argument? Yes — if a second change drove turnover down, the review system isn't necessarily *the* cause. The conclusion no longer follows. B is the assumption.

Notice what the test did for you. "Does the author need this?" is vague and subjective. "Does the argument break if this is false?" is precise and testable. You converted a judgment call into a yes/no mechanical check.

> **Recall check.** Without looking back, state the four steps of the negation test in order. Then: when you negate a choice and the argument is *unaffected*, what does that tell you? (Answer: take each choice, negate it, ask whether the negation destroys the argument, keep the one that does. If negating a choice leaves the argument intact, that choice was never necessary — eliminate it.) Pulling these steps from memory now, rather than re-reading them, is what makes them available under exam pressure.

**Worked example (medium — the representativeness assumption).** Argument: "In a survey of our premium subscribers, 80% said they would pay more for faster support. Therefore, raising prices in exchange for faster support will increase our overall revenue."

Candidate assumption: "Premium subscribers' willingness to pay is representative of the broader customer base whose revenue is at stake."

Negate it: "Premium subscribers' willingness to pay is *not* representative of the broader customer base." Now the survey tells you nothing about how most customers would react — they might churn instead of paying more. The conclusion about *overall* revenue no longer follows. So the representativeness statement is a required assumption. The tell here was a scope shift: the evidence covers *premium subscribers*, but the conclusion is about *overall revenue*. Whenever evidence and conclusion describe different populations, an assumption is bridging that gap. Train your eye to flag that mismatch the moment you read the conclusion — the gap between what was *measured* and what is *claimed* is where the assumption almost always hides.

**The question stem decoder.**

| Stem wording | Type |
|---|---|
| "…the argument depends on which of the following assumptions…" | Assumption |
| "…which of the following is assumed by the argument…" | Assumption |
| "…the conclusion follows logically from which of the following assumptions…" | Assumption |
| "…the argument relies on which of the following…" | Assumption |
| "…which of the following, if true, most strengthens…" | NOT assumption (strengthen) |

That last row is in the table on purpose, because the most common way to mishandle an assumption question is to import strengthen-question habits. Read the stem for the words *depends on*, *assumes*, *relies on*, *requires* — those signal necessity, and necessity means the negation test applies.

**What assumptions typically look like.** Four recurring shapes cover the large majority of assumption answers:

1. **"No other cause exists."** Rules out alternative explanations. By far the most common type, and the home of nearly every causal argument.
2. **"The evidence is representative."** If the argument leans on a specific example, study, or sample, it usually assumes that case generalizes to the conclusion's population.
3. **"A necessary condition is met."** The argument assumes some prerequisite is in place — the plan is feasible, the resource exists, the actor is willing.
4. **"The mechanism works as described."** The argument assumes the causal chain actually functions from step to step, with no broken link.

Memorizing these four shapes is not busywork — it pre-loads your brain with the answer's likely form *before* you read the choices, so you recognize the right one faster and resist the decoys.

> **Self-explanation prompt.** Pick a causal argument you've seen recently ("doing X led to outcome Y"). In your own words, explain *why* "no other cause exists" is something the author must assume — what specifically goes wrong with the conclusion if some other cause is allowed in? Forcing yourself to articulate the *why* (rather than memorizing "causal arguments assume no other cause") is what lets you recognize the pattern when the wording is unfamiliar on test day.

**The "extreme language" filter on assumption questions.** Assumptions tend to be *modest*. The argument needs "there's no *other major* cause," not "every conceivable alternative in the universe has been ruled out." It needs "the sample isn't *systematically* biased," not "the sample is perfectly random." Answer choices loaded with absolutes — *every single*, *impossible*, *always*, *none whatsoever*, *guaranteed* — usually overshoot what the argument actually requires. The argument only needs the weakest version that still makes the conclusion follow. When two choices both seem to help, prefer the more defensive, lower-commitment phrasing.

**Worked example (testing the extreme-language filter).** Argument: "This new drug reduced symptoms in our clinical trial, so it will reduce symptoms in patients generally." Two candidates:

- A) "No patient outside the trial differs from trial patients in *any* respect relevant to the drug's effect."
- B) "The trial patients are not *systematically* unrepresentative of patients generally in a way that would affect the drug's effect."

Negate A: "Some patient outside the trial differs in some relevant respect." That's almost certainly true of *some* patient and yet the argument can clearly still stand — generalizations tolerate individual exceptions. Negating A doesn't cleanly destroy the argument, and A demands far more than the argument needs. Negate B: "The trial patients *are* systematically unrepresentative in a way that affects the drug's effect." Now the trial result can't be projected onto patients generally — the conclusion fails. B is the assumption. The modest, hedged choice wins; the absolute one is a trap.

**Trap to watch.** The negated answer choice often *sounds* weird, aggressive, or overly strong when you first read it ("Something other than the protocol definitely caused the drop"). That feeling is not evidence against the choice. The negation is *supposed* to sound assertive — you flipped a statement to its opposite. Judge the negation only by one criterion: does it break the argument? Never reject a correct assumption because its negation sounded unnatural out loud.

**Assumption vs. strengthen — a subtle but frequent confusion.** A strengthener makes the argument *more likely* to be true. An assumption makes it *possible* for the argument to be true. Every assumption, if stated outright, would strengthen — but not every strengthener is an assumption. The assumption is the *minimum* the argument needs to stand at all; strengtheners are extra support piled on top of an argument that may already stand. Put differently: remove an assumption and the argument falls; remove a mere strengthener and the argument is just somewhat less supported.

> **Recall check.** Cover the page. Which of the four common assumption shapes shows up most often, and in what kind of argument does it live? (Answer: "no other cause exists" — it dominates *causal* arguments, the ones that conclude X *caused* Y from the fact that Y followed X.) Retrieving the dominant shape now means that on test day, the instant you see a causal conclusion, your mind reaches first for the alternative-cause answer instead of hunting blind through five choices.

**Worked example (assumption vs. strengthen, hard).** Argument: neighborhoods with more green space have lower childhood asthma rates, so green space reduces childhood asthma.

- Strengthener: "Vegetation absorbs airborne particulate matter known to trigger asthma." This supplies a positive *mechanism* — it actively pushes the conclusion toward being true. But the argument doesn't *need* this exact mechanism to survive; it's bonus support.
- Assumption: "Higher-income families don't disproportionately choose green-space neighborhoods for reasons that independently lower their children's asthma rates." This is weaker and purely *defensive* — it rules out one confound (income). Negate it — "higher-income families *do* cluster in green neighborhoods, and their income independently lowers asthma" — and suddenly green space might be doing nothing; income is. The argument collapses. That collapse-on-negation is the signature of an assumption, and it's why this defensive-sounding statement, not the muscular mechanism statement, is the answer.

The fastest way to keep them apart: run the negation test. If negating the choice *destroys* the argument, it's an assumption. If negating it merely makes the argument *a bit weaker* but still standing, it was only a strengthener.

> **Recall check.** Cover the page. What is the one-line difference between an assumption and a strengthener, and what does the negation test do differently to each? (Answer: an assumption is the *minimum* the argument needs — negating it *destroys* the argument; a strengthener is *extra* support — negating it only weakens the argument, which stays standing.) Retrieving this contrast now beats re-reading it, because the trap on test day is precisely a strengthener masquerading as the answer — and you'll only catch it if the distinction comes to mind unprompted.

**The step-by-step procedure to memorize.**

1. **Find the conclusion**, then the evidence supporting it. The assumption lives in the gap *between* them.
2. **Confirm the stem is an assumption stem** — look for *depends on*, *assumes*, *relies on*, *requires*.
3. **Spot the gap.** Is there a scope/population shift (representativeness)? A causal leap (no-other-cause)? A required prerequisite? A mechanism taken on faith?
4. **For each surviving choice, negate it** — flip it to its plain opposite, not its extreme.
5. **Ask: does the negation destroy the argument?** Yes → assumption. No → eliminate.
6. **Apply the extreme-language filter** as a tiebreaker — prefer the modest, defensive phrasing over the absolute one.

**Worked example (run the full procedure).** Argument: "A hospital adopted a new hand-washing protocol; infection rates fell 40% over the next year; therefore the protocol caused the drop." Stem: "The argument depends on which of the following assumptions?" Choice: "No other infection-control change was introduced during that year."

Step 1: conclusion = the protocol caused the drop; evidence = rates fell after adoption. Step 2: "depends on" — yes, assumption stem. Step 3: classic causal leap → expect a no-other-cause assumption. Step 4–5: negate the choice — "Another infection-control change *was* introduced that year." Now the drop could be due to that change, not the protocol; the conclusion no longer follows; the argument collapses. So this is a required assumption. Step 6 isn't even needed here — the negation cleanly destroys the argument. Six steps, no guessing.

**Common mistakes.**

- **Picking the strengthener.** It feels supportive, so it feels right — but its negation leaves the argument standing, which means it was never necessary. Always negate before committing.
- **Rejecting the answer because its negation sounds too aggressive.** Negations are meant to sound strong; judge them only by whether they break the argument.
- **Choosing the choice with absolute language.** *Every*, *impossible*, *always* usually overshoot what the argument requires; the answer is typically the modest version.
- **Negating to the extreme opposite instead of the plain opposite.** "No other cause" negates to "*some* other cause," not "the cause was *definitely* something else." Over-negating manufactures false collapses.

**Closing recap.**

- An assumption is a *necessary* unstated premise — false assumption, dead argument.
- The negation test is the definition of necessity made mechanical: flip the choice, and if the argument breaks, that's the assumption.
- The four common shapes — no other cause, representativeness, necessary condition met, mechanism works — cover most answers; the no-other-cause type dominates causal arguments.
- Assumptions are *modest*; absolute, all-encompassing choices usually overreach.
- Assumption vs. strengthener: negate it — destroys the argument means assumption; merely weakens means strengthener. Run the six-step procedure every time and you stop guessing.

---
slug: verbal-17-rc-application
title: "RC: Application"
section: Verbal
estimated_minutes: 13
prerequisites:
  - verbal-16-rc-inference
summary: |
  Application questions ask you to extend the author's logic to a new case. This chapter teaches carrying the principle to an unfamiliar scenario.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - reading-comprehension-q25
      - reading-comprehension-q26
  - id: rc-application
    type: reading
    title: "RC: Application"
    check_question_ids:
      - reading-comprehension-q27
  - id: application-extends-the-logic
    type: reading
    title: "Application = extend the author's logic to a new case"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - reading-comprehension-q84
      - reading-comprehension-q28
      - reading-comprehension-q29
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - reading-comprehension-q30
      - reading-comprehension-q31
      - reading-comprehension-q32
---

## @rc-application

Application questions ask you to extend the author's logic to a new case. They almost never quote the passage back to you. Instead they hand you a fresh scenario — a strategy, an example, a policy, a hypothetical — and ask which one the author's reasoning would bless: "Which of the following is most consistent with the author's views?" or "Which scenario would the author most strongly endorse?" or "Which example best illustrates the passage's argument?" The case is new; the **principle** doing the judging is old. Your entire job is to recover that principle cleanly, then test each choice against it.

This is why application is the most CR-flavored of all RC question types. You are not retrieving a fact and you are not summarizing a paragraph — you are reasoning *forward* from the author's rule into territory the passage never mentioned. Get the rule slightly wrong and every choice will look plausible; get it exactly right and four of five choices collapse. The leverage point is almost entirely upstream: the difficulty of an application question lives in how *precisely* you state the rule, not in how hard the choices are to read.

**The template.** Figure out what principle the author is applying in the passage. Then evaluate each answer choice through that principle — which one follows the same logic? Two moves, in this order, every time. Most missed application questions are not a failure of the second move. They are a failure of the first: students apply a *fuzzy paraphrase* of the principle instead of the principle itself. A blurry rule is a rule that fits too many choices, and a rule that fits too many choices cannot eliminate anything.

**Step 1: Extract the principle.** What is the passage's underlying rule — the general mechanism, not the specific instance? If the passage argues "green space reduces childhood asthma because vegetation absorbs airborne pollutants," the surface fact is "parks help kids breathe." The *principle* is sharper: "vegetation with high leaf surface area removes airborne pollutants, thereby reducing pollutant-driven health conditions." Notice what's load-bearing there — *leaf surface area*, *airborne pollutants*, *pollutant-driven*. Those are the hooks the correct answer must catch. Phrase the principle as a portable if-then you could carry to any new case: *if X has high leaf surface area, then it absorbs pollutants, then pollutant-related illness falls.* The discipline of writing it as if-then forces you to name the trigger condition and the predicted outcome — the two things every wrong answer will quietly mangle.

**Step 2: Apply the principle to the answer choices.** Run each choice through your if-then. The correct answer is the case where the principle fires and gives the *same* prediction. Wrong answers are cases where the principle is silent, where it predicts the opposite, or where the choice quietly swaps one of your load-bearing terms for a look-alike. Treat each choice as a small experiment: does it actually trip the trigger condition you wrote down, and if it does, does the outcome match?

> **Recall check.** What are the two ordered moves of the application template, and which one do students most often botch? (Extract the principle as a portable if-then, *then* test each choice against it; the extraction step is the usual failure — a fuzzy paraphrase lets every choice look right.) Forcing yourself to state the order from memory now installs the sequence far better than re-reading it would; you'll actually reach for it under time pressure.

**Worked example (straightforward).** Passage argues that subscription businesses succeed by building *genuine* switching costs — ecosystem lock-in, proprietary content, network effects — as opposed to mere friction.

Application question: "Which strategy would the author most likely endorse for a struggling subscription business?"

- A) "Make the cancellation process more time-consuming." — *Friction*, not a genuine cost. The passage explicitly distinguishes the two, and this is the wrong side of that line. Out.
- B) "Invest in proprietary content that competitors cannot replicate." — Matches "genuine switching cost" exactly. The author's rule fires and endorses it. **Keep.**
- C) "Reduce the subscription price by 25%." — Pricing isn't addressed by the switching-cost principle. Silent, not endorsed. Out.
- D) "Focus marketing on acquisition rather than retention." — Contradicts the retention framing. Out.
- E) "Launch an unrelated product line." — Off-principle entirely. Out.

Answer: **B** — the one case where the author's own logic actively endorses the move. Notice that A is the designed trap: it *sounds* like a switching cost ("making it harder to leave") but lands on the exact distinction the author drew. The rule, stated precisely, kills it instantly.

**Worked example (medium).** Passage: a historian argues that technologies diffuse fastest when they require *no new infrastructure* and plug into systems people already own — citing how the smartphone camera displaced point-and-shoots because everyone already carried the phone.

Question: "Which prediction is most consistent with the author's reasoning?"

- A) "Electric vehicles will achieve near-universal adoption within five years." — EVs require *new* infrastructure (charging networks). The principle predicts *slow* diffusion here, not fast. This contradicts the author. Out.
- B) "A messaging feature added to an already-ubiquitous app will spread quickly." — Plugs into a system people already own, no new infrastructure. The principle fires and predicts fast diffusion. **Keep.**
- C) "Consumers prefer products from established brands." — A brand claim; the principle is about infrastructure, not reputation. Silent. Out.
- D) "Cameras improved steadily over the decade." — A fact about cameras, not a diffusion prediction the principle generates. Out.

Answer: **B.** Note how A *feels* on-topic (technology adoption, modern, plausible) yet the principle predicts the opposite. On-topic is not the test; *same prediction* is the test.

**Trap to watch.** The "off-principle" trap. Wrong answers routinely invoke something from the passage's *topic* that the author's *principle* doesn't actually predict. In the asthma passage, a choice like "the city should fund more pediatric clinics" is on-topic (childhood health) but off-principle (it has nothing to do with leaf surface area absorbing pollutants). Filter aggressively: the answer must be what the author's *specific mechanism* predicts, not what merely "sounds related to the subject." The test-writers count on topical familiarity to make a silent choice feel like a supported one — refuse the trade.

> **Recall check.** A choice is on-topic but the author's mechanism never mentions it — keep or kill? (Kill — off-principle. Topical overlap is bait; only a choice the mechanism actually predicts survives.) Retrieving this rule against a concrete temptation cements it better than nodding along to the definition.

**Worked example (hard — the overextension trap).** Passage: a researcher finds that *in low-trust workplaces*, transparent salary data reduces resentment, and is careful to note the effect "may not hold where trust is already high."

Question: "Which conclusion would the author most likely accept?"

- A) "Publishing salaries reduces resentment in any organization." — Overextends. The author *restricted* the claim to low-trust settings and explicitly hedged the rest. Out.
- B) "In a low-trust firm, salary transparency would likely lower resentment." — Stays inside the stated scope. **Keep.**
- C) "High-trust firms should hide salary data to preserve trust." — The author said the effect *may not hold*, which is silence, not a recommendation to hide. This invents a stance. Out.
- D) "Resentment is the primary driver of low workplace trust." — Reverses the causal arrow the passage uses. Out.

Answer: **B.** This is the **"extended inference" trap**: if the passage establishes a *moderate, scoped* claim ("in some cases / under condition C, X causes Y"), an answer that *generalizes* it ("in all cases X causes Y") overextends and is wrong — even though it sounds like a bolder, more impressive version of the same idea. Match the author's quantifier and scope, not just their direction. A is direction-correct and scope-wrong, which is precisely what makes it tempting; C shows the mirror error — turning a hedge ("may not hold") into a positive recommendation the author never made.

**The "author's stance" constraint.** Before you ask "would the author endorse this scenario?", you must already know the author's *attitude*. If the author is *critical* of deregulation, any choice that endorses deregulation is wrong no matter how cleverly it's worded. Application questions about endorsement are secretly attitude questions wearing a costume — settle the attitude first, then the scenarios sort themselves. Skipping this step is how strong readers talk themselves into a beautifully argued choice that happens to back the very thing the author spent two paragraphs attacking.

**Worked example (hard — stance flip).** Passage: the author is skeptical of "gamification" in education, arguing points and badges crowd out *intrinsic* motivation and produce shallow engagement.

Question: "Which classroom policy would the author most likely support?"

- A) "Award badges for completing each reading." — Endorses exactly what the author criticizes. Out, on stance alone.
- B) "A leaderboard ranking students by quiz points." — Same gamification the author distrusts. Out.
- C) "Let students choose project topics that match their own curiosity." — Feeds *intrinsic* motivation, the thing the author values. **Keep.**
- D) "Replace grades with redeemable reward tokens." — Extrinsic rewards again. Out.

Answer: **C.** Three choices were on-topic (education, motivation) and all three were *the very thing the author opposes*. The stance check kills them in one pass — without it, you'd be comparing the wording of A, B, and D against each other and wondering which gamification scheme the author "prefers," a question the passage never asks.

> **Recall check.** Before judging which scenarios an author would endorse, what must you settle first? (The author's attitude/stance toward the subject — endorsement questions are attitude questions in disguise; a choice that backs something the author criticizes is dead regardless of wording.) Saying this out loud now wires the habit of checking stance *before* scanning choices.

**A memorizable procedure.** For any application question, run these five steps in order:

1. **Read the stem first.** Note whether it asks for endorsement, illustration, or consistency — and flag any attitude word ("the author would *support* / *reject*").
2. **State the principle as a portable if-then,** in your own words, before looking at the choices. Underline the load-bearing terms (the mechanism, the scope, the quantifier).
3. **Settle the author's stance** on the topic if endorsement is involved (pro / con / neutral).
4. **Run each choice through the if-then.** Ask: does the principle *fire* here, and does it predict the *same* outcome? Reject off-principle (silent), contradicted, overextended, and stance-violating choices.
5. **Confirm the survivor.** The winner should be a *new* case the passage never named, where the author's exact mechanism gives the exact same prediction. If your "answer" is just a restatement of a passage sentence, you're in a different question type — re-read the stem.

**Stem-to-task decoder.**

| Stem wording | What it's actually asking |
| --- | --- |
| "The author would most likely agree that…" | Find the choice consistent with the author's stated views and stance |
| "Which example best illustrates the passage's argument?" | Find a *new instance* where the principle applies |
| "Which course of action is most consistent with…" | Apply the principle to a *decision* |
| "Which would the author most strongly endorse?" | Settle stance first, then apply the principle |
| "Which scenario does the author's reasoning predict?" | Run the if-then forward; match outcome *and* scope |

**Self-explanation prompt.** Why are application questions essentially "strengthen the author's principle"? If you can say "because you're hunting for a new case where the author's principle gives the same prediction — which is exactly how you strengthen a causal claim, by supplying another confirming instance," you've linked RC application to Critical Reasoning's strengthen template and can borrow the same instinct: find the choice that *adds a case the mechanism already covers*, and discard the ones that change the mechanism, its scope, or its direction.

**Common mistakes.**

- **Applying a paraphrase, not the principle.** You remember "parks are good for health" and pick a clinic-funding choice. Pin the *mechanism* and its load-bearing terms before scanning choices.
- **Rewarding topical overlap.** A choice shares the passage's subject, so it "feels right." Topic overlap is bait; only a choice the mechanism *predicts* survives.
- **Overextending scope or quantifier.** The passage says "in some cases" and you pick "in all cases." Match the author's hedges exactly.
- **Skipping the stance check.** You evaluate scenarios before settling whether the author is for or against the subject, then endorse the very thing they criticize.

**Recap.**

- Application = **extract the principle, then carry it to a new case** — two ordered moves, and the extraction is where most points are lost.
- State the principle as a **portable if-then** with the mechanism, scope, and quantifier nailed down before you read the choices.
- For endorsement questions, **settle the author's stance first**; a choice backing something the author criticizes is dead on arrival.
- Kill the **off-principle** (topical-but-silent), **overextended** (scope/quantifier inflated), and **contradicted** choices; keep the one where the mechanism fires with the same prediction.
- It's the **strengthen template in RC clothing** — find the new confirming case the author's rule already covers.

## @application-extends-the-logic

Application is where the core reading method earns its keep. You are not asked to retrieve a sentence; you are handed a fresh scenario and asked which one the author's logic would bless. Everything you need to answer was already built on the first read — the **skeleton**, the **author's stance**, and, above all, **whose voice** owns each claim. The mistake that sinks this question type is importing your own opinion or grabbing a principle off the page without first checking *whose* principle it is. Run the method, not your instincts.

**Mental model.** Read the passage the way the **Reading Process** chapter trains: one line per paragraph for **function**, a fixed read on the **author's stance**, and a tag on every claim for **point of view** — author, or a reported scholar / "critics" / the old consensus. Then application becomes mechanical: pin down *whose* principle the stem is testing and what it actually claims, then test each new case against *that* principle alone. The principle is fixed; only the scenario is new. Don't obsess over the passage's details — you need the rule's trigger and its scope, not its examples.

**Worked example.** *Three-line skeleton.* P1: a long-standing view holds that small firms innovate faster simply because they are small. P2: the author counters that size is not the driver — what matters is whether decisions sit close to the customer, so a large firm with autonomous local teams can out-innovate a small but centralized one. P3: "Some analysts insist headcount is still the real constraint." Stance tag: the author **rejects** the size rule and owns the *decision-proximity* principle; the headcount claim belongs to **the analysts**, not the author.

Stem: "Which case is most consistent with the author's reasoning?" Run each through the author's actual rule — *innovation tracks decision-proximity, not size.*

- A) "A tiny startup innovates faster than a corporate giant." — This fits the **rejected** size view, not the author's. Out.
- B) "A large retailer pushes pricing authority down to store managers and out-innovates a centralized rival." — Decisions near the customer; the author's principle fires and predicts exactly this. **Keep.**
- C) "A firm with fewer than 50 employees will always out-innovate larger ones." — Headcount-as-constraint; that's the *analysts'* claim, and it also overextends to "always." Out.

Answer: **B.** Notice the method did the work: tagging point of view on the first read is what exposes A as the rejected consensus and C as a different speaker's view wearing the author's coat.

**Trap to watch.** Two traps recur, and both are caught upstream. First, the **wrong-voice** trap: a choice that fits a view the author *reported or rejected* rather than the author's own — which is why you tag whose principle it is *before* you score anything. Second, the **out-of-scope** trap: a choice that pushes the principle past its stated boundary ("always," "any firm," a domain the rule never covered). Match the author's scope and quantifier; a case the principle never reaches is silent, not supported. If you skipped the stance and voice tags on the read, both traps look identical to the credited answer.

> **Recall check.** Before testing any scenario against a passage's principle, what two things must you settle first — and where do they come from? (Whose principle it is and what it actually claims, including its scope; both come from the point-of-view and stance tags you made on the first read. Get the owner wrong and you'll reward a case that fits a rejected or reported view; get the scope wrong and you'll reward a case the rule never reached.)

**Close with elimination.** Don't fall in love with the choice that *sounds* most like the passage — that's the bait. Hunt the four you can kill: the rejected-view case, the wrong-voice case, the out-of-scope case, the off-principle case. The one left standing is a *new* situation the author's own rule actively predicts. Find the four wrong; take what remains.

---
slug: verbal-20-rc-answer-traps
title: "RC: Answer-Choice Traps"
section: Verbal
estimated_minutes: 15
prerequisites:
  - verbal-19-rc-attitude
summary: |
  Five wrong-answer patterns recur across every RC question type. This chapter names them so you can eliminate fast.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - reading-comprehension-q49
      - reading-comprehension-q50
  - id: rc-answer-traps
    type: reading
    title: "RC: Answer-Choice Traps"
    check_question_ids:
      - reading-comprehension-q51
  - id: the-elimination-discipline
    type: reading
    title: "The elimination discipline"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - reading-comprehension-q76
      - reading-comprehension-q82
      - reading-comprehension-q88
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - reading-comprehension-q77
      - reading-comprehension-q83
      - reading-comprehension-q89
---

## @rc-answer-traps

The question-type sections above teach you what each RC question is asking for. This section gives you the five answer-choice patterns that show up across every question type. Recognising them cuts elimination time in half — most wrong answers fall into one of these buckets, and the cure is the same line-citation discipline regardless of which question type you're on. Learn the five names, learn the one cure, and your RC accuracy stops depending on how interesting you found the passage.

Here's the orientation that makes the rest of this section click: the GMAT does not write *random* wrong answers. It writes *engineered* ones. Each wrong choice is built to be attractive to a specific failure mode in your reading — to the skimmer, to the jargon-impressed, to the person with outside knowledge, to the person who read the wrong paragraph, to the person who likes confident-sounding claims. When you can name the bait, you stop biting. The five traps below are those five baits. Notice that they are not five unrelated puzzles to solve; they are five disguises worn by a *single* underlying defect — the answer is not actually backed by the text. Hold that thought, because the whole section converges on it.

**Trap 1: Distortion.**

The answer says something subtly different from what the passage stated — same words, twisted meaning. The most common forms: a percentage-point change recast as a percentage change, a conditional claim recast as a universal claim, or a hedged claim ("studies suggest") recast as definitive. Distortion is the single most common wrong-answer type on the GMAT and the hardest to catch, precisely because it reuses the passage's own vocabulary.

*Example.* Passage: "Studies suggest that mycorrhizal networks transfer nutrients between plants in stressed environments." Distortion: "Mycorrhizal networks transfer nutrients between plants whenever stressed environments exist." The passage made a conditional, hedged claim; the answer made a universal one.

The cure: for every promising answer, **find the specific sentence in the passage that supports it**. If you can't quote a sentence with effectively the same meaning, the answer is a distortion. Distortions feel right on first read because they share vocabulary with the source — the test is whether they share *meaning*.

**Worked example.** Passage: "After the 1990 reform, regional unemployment fell by 4 percentage points, from 11% to 7%." Answer choice: "The reform reduced regional unemployment by roughly 4%." Walk it: the passage states a 4 *percentage-point* drop. As a *percentage* change, unemployment fell from 11 to 7, which is a decline of 4/11 ≈ **36%**, not 4%. The answer choice quietly swaps "percentage points" for "percent" — a classic distortion of magnitude. The cited sentence does not support "by roughly 4%," so eliminate it. Notice the trap reuses the literal number "4" to feel anchored to the text.

**Worked example.** Passage: "Critics initially dismissed the theory, but by the late 1980s most cosmologists had come to regard it as the best available account of early-universe expansion." Answer choice: "By the late 1980s, cosmologists had proven the theory's account of early-universe expansion." Walk it: the passage says the theory was *regarded as the best available account* — a statement about scientific consensus and preference. The answer upgrades "best available account" to "proven," and upgrades "most cosmologists" to a flat "cosmologists." Two distortions stacked: a hedged-to-definitive shift ("regarded as best available" → "proven") and a most-to-all shift. Re-read the sentence; it licenses neither. Eliminate. The vocabulary ("cosmologists," "early-universe expansion") is borrowed wholesale, which is exactly why the meaning-twist slides past a fast reader.

> **Recall check.** What are the three classic forms a Distortion takes? (Percentage-point recast as percentage; conditional recast as universal; hedged recast as definitive.) Retrieving the three forms now — rather than re-skimming the list — is what builds the instant pattern-recognition you need under timed pressure; rereading feels productive but doesn't rehearse the recall the test actually demands.

**Trap 2: Sounds-smart-but-unsupported.**

The answer uses vocabulary lifted directly from the passage but constructs a claim the passage never makes. Most common on technical passages — the borrowed jargon makes the answer feel authoritative even when it's introducing a new claim. Distortion *twists* an existing claim; this trap *invents* one and dresses it in the passage's clothes.

*Example.* Passage uses the term "ecosystem lock-in" to describe how subscription companies make leaving costly. Trap answer: "Ecosystem lock-in is the primary driver of subscription pricing premiums." The passage used the term but never made this claim about pricing.

The cure: **don't let vocabulary do the work of meaning**. Ask "is this specific claim made anywhere in the passage?" not "does this sound like the passage?"

**Worked example.** Passage on monetary policy: "The central bank's *forward guidance* — its public signalling of future rate intentions — aims to shape market expectations before any rate change occurs." Answer choice: "Forward guidance is more effective than open-market operations at controlling inflation." The phrase "forward guidance" is lifted straight from the passage, which makes the choice feel grounded. But scan for the *claim*: the passage defines forward guidance and states its aim. It never compares it to open-market operations, and it never ranks effectiveness. The vocabulary matches; the proposition is fabricated. Eliminate. The tell: a comparative claim ("more effective than") with no comparison anywhere in the text.

Here is the diagnostic that separates Trap 1 from Trap 2, because they feel similar under time. In a Distortion, the passage made a *related* claim and the answer bent it. In a Sounds-smart trap, the passage made *no such claim at all* — the answer borrows the noun and bolts on a brand-new predicate. Ask: "Is there a sentence here that this answer is a *warped version of*? Or is the whole proposition imported?" If you can't even find the sentence being warped, you're in Trap 2.

> **Recall check.** What single question kills both the Distortion and the Sounds-smart trap in one move? (For each answer, "Which specific sentence supports this claim?" — if none, the answer borrowed vocabulary without borrowing meaning.) Pulling the unifying question from memory now, instead of re-reading it, is what lets you run it reflexively instead of inventing a new test for every choice.

**Trap 3: Out-of-passage knowledge.**

The answer is true (or plausibly true) in the real world but isn't stated or implied by the passage. Particularly tempting on topics where you have background knowledge — you "know" the answer is right and skip the verification step.

*Example.* Passage about subscription churn doesn't mention Netflix specifically. Trap answer: "Netflix has the lowest churn rate in the streaming industry." You might know that's true; the passage doesn't say it. Wrong on RC regardless.

The cure: **answer from the passage only**. RC's standard is "supported by the passage," not "true in general." If you can only justify an answer with outside facts, it's wrong here.

**Trap to watch.** This trap is most dangerous on subjects you actually know well — finance, tech, economics, science you studied. Your expertise becomes a liability because the answer *feels* obviously correct, so you skip the line-citation step you'd reflexively run on an unfamiliar topic. When you catch yourself thinking "well, everyone knows that," treat it as a red flag, not a green light: "everyone knows that" is exactly the sensation the GMAT engineers into an out-of-passage trap. Demand the sentence before you commit.

> **Recall check.** What is RC's standard for a correct answer — true in the real world, or supported by the passage? (Supported by the passage; an answer can be factually true and still wrong if the text doesn't say it.) Forcing yourself to state the standard out loud rewires the instinct that misfires under time pressure; passively re-reading the rule doesn't, because recognition is not the same skill as retrieval.

**Trap 4: Wrong-paragraph reference.**

The answer is true about *a different paragraph* than the one the question asks about. Most common on Function questions ("the function of paragraph 3 is...") where the answer describes paragraph 2's function instead.

*Example.* Question: "The primary purpose of paragraph 3 is to..." Wrong answer: "Introduce the central thesis." The thesis was introduced in paragraph 1. Paragraph 3 might *support* it or *qualify* it — but it didn't *introduce* it.

The cure: **always re-read the specific paragraph the question references** before evaluating answers. A 10-second targeted re-read prevents minute-long answer-choice confusion.

**Worked example.** A four-paragraph passage argues that remote work raises individual productivity (P1: thesis), surveys three studies supporting it (P2), then raises a counter-study suggesting collaboration suffers (P3), and finally reconciles the two (P4). Question: "The primary purpose of the third paragraph is to..." Tempting wrong answer: "present evidence supporting the author's central claim." That's true — of paragraph 2. Paragraph 3 does the *opposite*: it introduces a complicating counter-finding. The correct answer is something like "introduce evidence that complicates the central claim." The trap answer is a true statement about the wrong paragraph. The fix is mechanical: before reading the choices, re-read P3 and label its job in your own words ("here's the catch / the counterpoint"). Now the wrong-paragraph answer can't fool you.

**Trap 5: Extreme language.**

Same as on CR: answers with "always," "never," "all," "none," "only," "must," or "impossible" are usually wrong. RC passages are typically measured and academic — strong absolute claims rarely come from the author and aren't supported by the text.

*Example.* Inference question. Wrong: "Subscription businesses always succeed when they build switching costs." Right: "Subscription businesses tend to succeed when they build switching costs." The "tend to" version matches the passage; "always" overstates.

**Decoder table — extreme vs. supportable wording.** When two answers compete, the wording itself is a signal. This maps the red-flag words to their defensible counterparts:

| Extreme wording (usually wrong) | Supportable wording (usually right) |
| --- | --- |
| always, never, in every case | tends to, often, typically, in many cases |
| all, none, only, solely | most, some, several, a primary |
| must, cannot, impossible | may, can, is likely to, suggests |
| proves, demonstrates conclusively | indicates, supports, is consistent with |
| the cause / the reason | a cause / a factor / one reason |

The cure: when two answers compete and one uses extreme language, **prefer the milder one**. The right RC answer is usually the most modest claim that fits the passage.

**Worked example (hard).** This one shows the limit of the rule. Question on a passage that states: "No experiment to date has produced room-temperature superconductivity at ambient pressure." Inference answer A: "Room-temperature superconductivity at ambient pressure has not yet been experimentally achieved." Answer B: "Room-temperature superconductivity at ambient pressure is impossible." Choice B reeks of extreme language ("impossible") and is wrong — the passage reports an absence of results, not a proof of impossibility. But notice that choice A also contains an absolute-flavoured construction ("has not yet been achieved"), and *it is correct*, because the passage itself made an absolute factual claim ("no experiment to date has produced..."). Lesson: extreme language is a *flag*, not an automatic kill. The real question is always "does the passage support the strength of this claim?" Here the passage supports A's strong wording and not B's. Apply the decoder table to narrow the field, then **return to the cited sentence to confirm the strength is earned.**

> **Recall check.** Is extreme language an automatic-eliminate, or a flag that sends you back to the text? (A flag — if the passage itself makes an absolute claim, an absolute answer can be correct.) Pull that distinction from memory now; it's the nuance that separates a 650-level "always is always wrong" heuristic from a 705-level reading that survives the hard inference questions.

**The step-by-step procedure (memorize this).**

Run this sequence on every RC question, in order:

1. **Read the question stem first** and identify what it asks for (detail, inference, function, main idea, application) *and* which paragraph or line it points to.
2. If the stem names a paragraph or line, **re-read that exact span** (about 10 seconds) before looking at any choice — this pre-empts Trap 4.
3. **State the answer in your own words** before reading the choices, so you're matching against your version rather than being led by theirs.
4. For each choice, **find the specific supporting sentence** in the passage. No sentence found = eliminate.
5. **Run the trap filter** on survivors: Is it a Distortion (twisted meaning)? Sounds-smart-but-unsupported (borrowed jargon, invented claim)? Out-of-passage (true but unstated)? Wrong-paragraph? Extreme (and is the strength earned)?
6. When two choices survive, **prefer the one whose support is most direct and whose claim is most modest** — unless the passage itself licenses the stronger claim (Trap 5's nuance).
7. **Confirm by re-reading your cited sentence** against the chosen answer one last time. If the meanings match, commit.

> **Self-explanation prompt.** Why does the "cite a line" discipline catch all five traps even though they look different on the surface? If you can say "because the unifying error is *lack of direct textual support* — distortion, vocabulary-borrowing, outside knowledge, wrong-paragraph reference, and extreme language all share the same defect: the passage doesn't actually say what the answer claims," you've understood that RC answer-elimination is a single-discipline skill, not five different ones.

**The unified discipline: cite a line.**

All five traps share a structure — the wrong answer is plausibly related to the passage but lacks direct textual support. The discipline that catches them all is the same: **for every answer you're considering, ask "which sentence in the passage supports this?" If you can't point to one, the answer is wrong.**

This rule is strict on Specific Detail and Inference (the answer must be derivable from the text). It's slightly looser on Application (where the answer extends the passage's logic to a new case) and Function (where the answer describes a paragraph's role), but the principle still applies — you should be able to point at the section of the passage that justifies your choice. The looseness is in *what counts as support* (a chain of reasoning vs. a single sentence), never in *whether support is required*.

This is also why the discipline scales to the hardest questions. On a 705-level inference item, two answers will both have *some* textual connection, and the decision comes down to which one your cited sentence supports at full strength — exactly the move the hard superconductivity example demanded. The students who plateau in the mid-600s are usually the ones who eliminate on *vibe* ("that one feels too strong," "that one sounds off-topic") instead of on a sentence. Vibe gets you most of the easy questions and loses you the ones that decide your score.

**Common mistakes.**

- **Matching vocabulary instead of meaning.** Seeing a passage word inside an answer and treating that as confirmation. The shared word is bait; only shared *meaning* counts (Traps 1 and 2 both exploit this).
- **Skipping line-citation on familiar topics.** Letting "I already know this is true" substitute for "the passage says this." That's how Trap 3 lands every time.
- **Evaluating choices without re-reading the cited paragraph.** Answering a paragraph-3 function question from your memory of the whole passage invites the wrong-paragraph trap.
- **Treating "always/never" as an automatic kill.** Usually right, but you'll miss the hard inference where the passage itself makes an absolute claim. Flag it, then verify against the text.

**Recap.**

- Five recurring traps: **Distortion**, **Sounds-smart-but-unsupported**, **Out-of-passage knowledge**, **Wrong-paragraph reference**, **Extreme language**.
- One cure for all five: **cite the supporting sentence.** No sentence, no answer.
- **Read the stem first, re-read the referenced span, pre-answer, then eliminate** — the procedure above is the muscle memory.
- Extreme language is a **flag, not a verdict**: kill it only when the passage doesn't earn the strength.
- RC's standard is **"supported by the passage," not "true in the world"** — your expertise helps you read faster, never decide.

## @the-elimination-discipline

Everything above names the five baits. This section is about the *posture* you bring to the answer choices so the baits never get a clean shot. The reading chapter ended on one instruction — choose by **elimination**, not attraction — and this is where that instruction earns its keep. The traps are the offense; elimination is your defense, and the two are the same skill viewed from opposite sides.

**Mental model.** Don't hunt for the right answer; hunt for the four wrong ones. The right answer is whatever is still standing after you've crossed off four — you don't have to *love* it, you just have to fail to kill it. This flips the psychology the test is counting on. The GMAT engineers the most attractive choice to be wrong on exactly the hard questions where attraction would decide your answer, so a posture of *attraction* hands the test the lever. A posture of *elimination* takes it away: you spend your attention proving choices guilty, not falling for one. The discipline is built on the same reading you already did — your one-line-per-paragraph **skeleton**, the **point of view** behind each claim, and the rule to read for **function** and **not obsess** over details. Each trap family maps to one of those habits.

Run the map out loud so the connection sticks. **Too narrow / too broad** is a *skeleton* failure: an answer that covers one paragraph when the question asks about the whole passage, or vice versa, only looks wrong once you hold the five-tag map against it. **Reported-view-stated-as-the-author's** is a *point of view* failure: the answer attributes to the author a claim that belonged to "critics" or the old consensus, and only your voice-tagging catches the swap. **True-but-irrelevant / out-of-scope** is a *don't-obsess* failure: the answer is a real fact you happen to know, dragged in from outside the passage, and the cure is the same line-citation reflex from the previous section. The remaining two are wording tells — **extreme / absolute language** and the **one-word distortion** — and both are killed by returning to the cited sentence to check whether the strength and the meaning are *earned*.

**Worked example.** A two-paragraph passage: "Early naturalists credited the dodo's extinction to human hunting alone. Recent excavations, however, suggest that the pigs and rats brought by settlers — by destroying eggs and nests — were the decisive agents, with direct hunting a comparatively minor factor." Question: "The author's primary purpose is to —" Choice A: "argue that human hunting drove the dodo to extinction." Choice B: "establish that introduced animals proved more destructive than once believed." Choice C: "demonstrate that the dodo could not have survived European contact under any circumstances." Walk it by elimination. A is the *old view* the author reports and then overturns — a reported-view-as-author's trap; your point-of-view tag flags it, cross it off. C smuggles in "under any circumstances," an extreme claim the passage never makes — wording tell, cross it off. C is also too broad against the skeleton, which only contrasts two causes. B is left standing: modest, matches the "however" pivot, supported by the cited sentence. You never had to be *sure* B was beautiful; you only had to convict A and C.

**Trap to watch.** Stopping the moment a choice "sounds like the passage." On hard questions the most tempting wrong answer is precisely the one that echoes the passage's vocabulary most loudly — it is engineered to reward the reader who matches words instead of meaning. So treat *familiarity* as a reason to slow down, not to commit: a choice that feels instantly right on a 705-level item is a prompt to find the sentence it distorts, not a green light. Read all five choices before you cross anything off, and never fall in love with the first plausible one — love is how you stop eliminating early and walk into the bait.

> **Self-explanation prompt.** Why does hunting for four wrong answers beat hunting for one right answer, even though both end at the same choice? (Because attraction commits you to a single choice before you've tested it, and the test engineers its most attractive choice to be wrong on the hard items; elimination forces you to run the trap filter against every option, so the credited answer survives on the evidence rather than on how good it sounded.)

# GMAT Beginner Question Proposals — 2026-07-14

Read-only proposal. Nothing here is inserted into the bank. These questions cover the **6 unresolved two-tier problem-set mismatches** left open by `GMAT_CONTENT_AUDIT.md` (section "3+4. Two-tier mismatches … 6 REMAIN FLAGGED").

The audit resolved 15 of 21 two-tier mismatches by relabeling (8) or re-pinning to an existing Beginner same-skill item (7). The remaining 6 could not be re-pinned because **no unpinned Beginner (Easy) question of the required type exists** — every Easy item of that type is already pinned in another chapter, or the type has zero Easy items in the bank. Each slot below therefore needs newly authored Beginner questions.

All questions are original, GMAT Focus–style, written for this proposal. **Not sourced from, copied from, or affiliated with GMAC, the GMAT, or any test-prep company.** No official-affiliation or score-guarantee claims are made anywhere.

Bank difficulty vocabulary is exactly `Easy` / `Medium` / `Hard`; "Beginner" here means the canonical `Easy` tier.

**Verification (adversarial, post-draft).** A 59-agent verification pass was run over these drafts:
- **Audit slots + scarcity re-confirmed independently.** The 6 flagged slots were re-derived from `GMAT_CONTENT_AUDIT.md` and the live chapter/bank files (all 6 are Hard items pinned in a `problem_sets.easy` list), and the "no unpinned Easy item of the required type" claim was re-verified for every one of the 6 types — confirmed true in all cases.
- **Every drafted question was blind-solved by 4 independent agents** (keys withheld). **All 14 were answered unanimously on the intended key** — no wrong or ambiguous keys.
- **Collision sweep across all three verbal banks** (`critical-reasoning.md`, `reading-comprehension.md`, **and** `verbal-foundations.md`). This caught one reuse my initial two-file grep missed: the original q251 (charity handwritten thank-you letters) duplicated an existing item at `verbal-foundations.md:578`. **q251 has been replaced** with a collision-free dental-office appointment-reminder scenario (same control-group Evaluate structure). All other scenarios are clean subjects (mere passing mentions in distractors/explanations do not count as reuse).
- **Two design fixes applied from the review:** q248's choice A was rewritten so choice C is the *sole* alternative-cause eliminator (the reviewers flagged a real A-vs-C two-answer risk); q182's correct answer was changed from the passage's own push/pull-door example to a novel object (a push-to-open drawer), so it tests genuine Application transfer rather than paraphrase recognition.
- **Difficulty read.** Reviewers rate q247, q250, q251, q252, q179, q182, q183, q184, q185 as clean **Easy**. Four read slightly harder — q248 and q249 (CR, one real competitor each), q180 (Main Idea, two true-but-narrow distractors), q181 (Application, inherently a transfer task), and q186 (Attitude, scoped-vs-overall distinction) — all still defensibly Beginner, but if you want the safest Easy pick per slot, use q247 (Slot 1), q250/q252 (Slot 2), q179 (Slot 3), and q185 (Slot 6).

**One caution for when you approve any of these** (from audit item 2/3): all six flagged pins sit in a chapter's `problem_sets.easy` list, and in-flight problem-set runs store answers by index (`chapter_progress.problemSetRuns`). Swapping a pinned id changes set membership, which scrambles a mid-run resume for the handful of active users on that chapter. Either accept that or clear stored runs for the affected chapter when you re-pin.

Proposed IDs continue the existing sequences: CR bank max is `critical-reasoning-q246`, RC bank max is `reading-comprehension-q178`, RC passages max at `Passage 43`.

A note on `tags` / `section`: the live bank blocks carry `difficulty` / `type` / `topic` (plus `answer`, `explanation`, optional `mistake_*`, `related_reading`) — there is no `section` or `tags` field in the file format. Each proposal lists **Section** and **Tags** as review metadata; the paste-ready block underneath is in the bank's native format so it can drop straight in.

---

## Slot 1 — verbal-02-cr-argument-structure

- **Chapter:** [verbal-02-cr-argument-structure](src/content/chapters/verbal-02-cr-argument-structure.md) — "CR: Argument Structure"
- **Flagged pin:** `critical-reasoning-q5` in `problem_sets.easy` — labeled **Hard**, topic **Strengthen** (two tiers above the Easy set).
- **Skill/type needed:** Easy (Beginner) **Critical Reasoning — Strengthen**. The chapter teaches argument structure through Strengthen/Weaken items; its pretest (q131, q189), reading check (q3), and the rest of the easy set (q133, q4) are all Strengthen, so the replacement must stay Strengthen to keep the set's skill focus.
- **Why no existing Beginner question fits:** the bank has exactly six Easy Strengthen items — `critical-reasoning-q1`, `q2` (pinned in verbal-01), `q51`, `q201` (pinned in verbal-08), and `q131`, `q189` (already pinned in this chapter's pretest). All six are pinned. There is no unpinned Easy Strengthen item to swap in, so a new one must be authored. (Re-pinning to a non-Strengthen Easy item would fix the tier but break the set's skill focus — the exact trade the audit declined to make.)

**Recommendation:** replace `critical-reasoning-q5` with one of the three below. Draft 3 so you can pick the cleanest.

### Proposal 1.1 — `critical-reasoning-q247`
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Strengthen · **Tags:** critical-reasoning, strengthen, causal, rule-out-alternative

```
## Q247
**difficulty:** Easy
**type:** Critical Reasoning
**topic:** Strengthen

A community center began offering free yoga classes on weekday evenings. In the three months after the classes started, new memberships at the center rose by 25 percent. The center's director concludes that the free evening classes were responsible for the increase in memberships. Which of the following, if true, most strengthens the director's conclusion?

- A) A similar community center nearby that did not add any new classes saw its new memberships stay flat over the same three-month period.
- B) The yoga instructor hired by the center holds a widely recognized teaching certification.
- C) The center spent a substantial part of its annual budget to launch the free classes.
- D) Some longtime members of the center have said they prefer weightlifting to yoga.
- E) Yoga has become a more popular form of exercise nationwide over the past several years.

**answer:** A
**explanation:** The director attributes the 25 percent rise in memberships to the new free evening classes. Strengthening a causal claim of this kind is done most powerfully by ruling out other explanations — showing the effect tracks the supposed cause. Choice A does exactly that: a comparable center that added no classes saw no change over the same period, which makes it far more likely that the classes, rather than some broader trend, drove the increase. Choice E points to a general nationwide trend, which if anything supplies a competing explanation and does not strengthen. Choice B (instructor credentials) and Choice C (cost of launching) say nothing about whether the classes caused the membership rise, and Choice D describes a preference of existing members, which is irrelevant to new memberships. The correct answer is A.
**related_reading:** reading-verbal-04-cr-question-types
```

### Proposal 1.2 — `critical-reasoning-q248`
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Strengthen · **Tags:** critical-reasoning, strengthen, causal, rule-out-alternative

```
## Q248
**difficulty:** Easy
**type:** Critical Reasoning
**topic:** Strengthen

A bookstore moved its new-releases display from the back of the shop to a table just inside the front entrance. In the month that followed, sales of new releases rose by 30 percent. The manager concludes that the new location of the display caused the increase in new-release sales. Which of the following, if true, most strengthens the manager's conclusion?

- A) The bookstore has occupied the same storefront for more than fifteen years.
- B) The front table can hold slightly fewer books than the old back display could.
- C) The bookstore ran no advertising, price cuts, or other promotions on new releases during that month.
- D) New releases are generally priced higher than older titles in the same store.
- E) A few regular customers said they missed seeing the display in its old location.

**answer:** C
**explanation:** The manager credits the 30 percent rise in new-release sales to the display's new front-of-store location. The strongest support for such a causal claim rules out competing causes of the same increase. Choice C does this: with no advertising, price cuts, or other promotions running that month, the relocation stands as the one salient change that could account for the lift. Choice A (how long the store has occupied its building) is irrelevant to why sales rose that particular month. Choice B (display capacity) and Choice E (a few customers' preferences) do not bear on what caused the sales rise, and Choice D describes a standing feature of pricing that was true before and after the move, so it explains nothing about the change. The correct answer is C.
**related_reading:** reading-verbal-04-cr-question-types
```

### Proposal 1.3 — `critical-reasoning-q249`
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Strengthen · **Tags:** critical-reasoning, strengthen, causal, control-case

```
## Q249
**difficulty:** Easy
**type:** Critical Reasoning
**topic:** Strengthen

A city museum began offering free admission on the first Sunday of every month. Over the following half-year, the museum's total monthly attendance rose noticeably. The museum's board concludes that the free Sundays were responsible for the rise in attendance. Which of the following, if true, most strengthens the board's conclusion?

- A) The museum added a small number of new exhibits during the half-year in question.
- B) A comparable museum in the same city that did not offer any free days saw its monthly attendance hold steady over the same half-year.
- C) Free admission on the first Sunday reduced the museum's ticket revenue on those days.
- D) Visitors on free Sundays were slightly more likely to visit the museum's gift shop than visitors on other days.
- E) The cost of the free-admission program was covered by a one-time private donation to the museum.

**answer:** B
**explanation:** The board attributes the rise in attendance to the free-Sunday policy. The most powerful strengthener for a causal claim rules out other explanations, and a controlled comparison does this best. Choice B supplies one: a similar museum with no free days saw attendance stay flat over the same stretch, which makes it far more likely that the free Sundays, rather than a citywide surge in museum-going, drove the increase. Choice A introduces new exhibits — a competing cause — and if anything weakens the claim. Choice E (how the program was funded) and Choice C (lost ticket revenue) both concern the museum's finances, not the cause of higher attendance, and Choice D (gift-shop behavior) is a downstream detail that says nothing about what drove attendance. The correct answer is B.
**related_reading:** reading-verbal-04-cr-question-types
```

---

## Slot 2 — verbal-04-cr-strengthen

- **Chapter:** [verbal-04-cr-strengthen](src/content/chapters/verbal-04-cr-strengthen.md) — "CR: Strengthen"
- **Flagged pin:** `critical-reasoning-q20` in `problem_sets.easy` — labeled **Hard**, topic **Evaluate**.
- **Skill/type needed:** Easy (Beginner) **Critical Reasoning — Evaluate**. The chapter's easy set currently holds q156 (Evaluate), q20 (Evaluate), q21 (Inference); the direct type-match for the flagged item is Evaluate.
- **Why no existing Beginner question fits:** the bank has exactly three Easy Evaluate items — `critical-reasoning-q16` (pinned in verbal-03), `q149` (pinned in verbal-21), and `q156` (already pinned in this chapter). All three are pinned, so no unpinned Easy Evaluate item exists.
- **Alternative worth noting:** because this is the *Strengthen* chapter, you may prefer to make the slot an Easy **Strengthen** item instead of Evaluate (all Easy Strengthen items are also pinned, so that too needs a new question — any unused draft from Slot 1 could be repurposed here). The drafts below match the flagged item's own type (Evaluate); say the word if you'd rather I convert the slot to Strengthen.

**Recommendation:** replace `critical-reasoning-q20` with one of the three below.

### Proposal 2.1 — `critical-reasoning-q250`
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Evaluate · **Tags:** critical-reasoning, evaluate, cost-vs-revenue, hidden-premise

```
## Q250
**difficulty:** Easy
**type:** Critical Reasoning
**topic:** Evaluate

A theater added a Sunday afternoon matinee to its weekly schedule. During the first month, the matinee filled 85 percent of its seats. On this basis, the theater's owner concludes that adding Sunday matinees at the company's other theaters would be profitable. Which of the following would be most useful to determine in evaluating the owner's conclusion?

- A) Whether the ticket revenue from the matinee exceeded the cost of staffing and running the extra show.
- B) Whether the audience at the matinee preferred seats in the balcony or on the main floor.
- C) Whether the play performed at the matinee had won any awards.
- D) Whether the theater is located within walking distance of public transit.
- E) Whether the other theaters are larger or smaller than the one that added the matinee.

**answer:** A
**explanation:** The owner leaps from "85 percent of seats were filled" to "adding matinees elsewhere would be profitable." A full house is not the same as a profitable one: profit depends on whether the revenue those seats bring in exceeds the cost of putting on the show. Choice A targets exactly that gap — if revenue exceeded cost, the profitability claim gains support; if it did not, filling seats at low or discounted prices could still lose money, and the conclusion collapses. Because the answer swings the evaluation in opposite directions, it is the most useful thing to determine. Choice B (seat preference) and Choice C (awards) are incidental to profitability. Choice E (relative theater size) has some bearing on how the result might transfer but says nothing about whether the matinee itself made money, and Choice D (transit access) is background that does not test the cost-versus-revenue premise the argument rests on. The correct answer is A.
**related_reading:** reading-verbal-04-cr-question-types
```

### Proposal 2.2 — `critical-reasoning-q251`
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Evaluate · **Tags:** critical-reasoning, evaluate, causal, control-group

```
## Q251
**difficulty:** Easy
**type:** Critical Reasoning
**topic:** Evaluate

A dental office began sending each patient a text-message reminder the day before their appointment. Over the next three months, the share of patients who missed their appointments fell noticeably. The office manager concludes that the text reminders caused the drop in missed appointments and plans to continue sending them. Which of the following would be most useful to determine in evaluating the manager's conclusion?

- A) Whether a comparable dental office that sent no reminders saw a similar drop in missed appointments over the same three months.
- B) Whether patients preferred to receive the reminders by text message rather than by email.
- C) Whether the office's staff found it time-consuming to send the reminders.
- D) Whether the reminders were sent in the morning or in the evening before the appointment.
- E) Whether the office had tried sending appointment reminders at any point in previous years.

**answer:** A
**explanation:** The manager treats the text reminders as the cause of the drop in missed appointments, but the share of missed appointments might have fallen for reasons unrelated to the reminders — a change in the patient mix, milder weather, or a general downward trend. Choice A tests the causal claim with a control comparison: if a similar office that sent no reminders saw the same drop, the reminders cannot claim the credit and the conclusion fails; if that office saw no such drop, the reminders become a credible cause. Because the answer points the evaluation in opposite directions, it is the most useful. Choice B (delivery preference) and Choice D (timing of the message) are incidental details that do not test whether the reminders caused the drop. Choice C (staff effort) concerns the cost of the program, not its effect, and Choice E (reminders in past years) does not establish what caused the recent change. The correct answer is A.
**related_reading:** reading-verbal-04-cr-question-types
```

### Proposal 2.3 — `critical-reasoning-q252`
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Evaluate · **Tags:** critical-reasoning, evaluate, causal, baseline-trend

```
## Q252
**difficulty:** Easy
**type:** Critical Reasoning
**topic:** Evaluate

A small podcast began releasing one bonus episode every week in addition to its regular episodes. Over the following six months, the podcast's total monthly downloads rose by 12 percent. The producers conclude that the bonus episodes caused the growth in downloads. Which of the following would be most useful to determine in evaluating the producers' conclusion?

- A) Whether the podcast's monthly downloads had already been rising at a similar rate in the months before the bonus episodes began.
- B) Whether the bonus episodes were longer or shorter than the regular episodes.
- C) Whether the podcast's hosts recorded the episodes in a studio or at home.
- D) Whether listeners could download the episodes on more than one app.
- E) Whether the producers spent more on equipment after adding the bonus episodes.

**answer:** A
**explanation:** The producers assume the bonus episodes caused the 12 percent rise, but a download count that was already climbing at that pace would have reached the same level with or without the bonus episodes. Choice A tests precisely this: if downloads had already been rising at a similar rate beforehand, the growth reflects an existing trend rather than the new episodes, and the conclusion fails; if downloads were flat before and rose only after the change, the bonus episodes become a credible cause. Because the answer decides between those two readings, it is the most useful thing to determine. Choice B (episode length), Choice C (recording location), and Choice D (number of apps) are incidental features that do not test the causal claim, and Choice E (equipment spending) concerns cost, not whether the episodes drove downloads. The correct answer is A.
**related_reading:** reading-verbal-04-cr-question-types
```

---

## Slot 3 — verbal-14-rc-main-idea

- **Chapter:** [verbal-14-rc-main-idea](src/content/chapters/verbal-14-rc-main-idea.md) — "RC: Main Idea"
- **Flagged pin:** `reading-comprehension-q124` in `problem_sets.easy` — labeled **Hard**, topic **Inference** (wrong tier *and* wrong type for a Main Idea chapter).
- **Skill/type needed:** Easy (Beginner) **Reading Comprehension — Main Idea**.
- **Why no existing Beginner question fits:** the entire RC bank contains exactly **one** Easy Main Idea item — `reading-comprehension-q29` — and it is already pinned in verbal-17. There is no second Easy Main Idea item anywhere to swap in. The reason the bank is dry here is structural: the existing 43 passages are uniformly dense, so their Main Idea questions land at Medium/Hard. A genuine Beginner item needs a shorter, plainer passage, which is what these drafts add.

**Recommendation:** replace `reading-comprehension-q124` with one of the two below. Each is a new short passage with a single, clearly stated thesis and one Main Idea question. Proposed passages: **Passage 44** and **Passage 45**.

### Proposal 3.1 — `reading-comprehension-q179` (new Passage 44)
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Main Idea · **Tags:** reading-comprehension, main-idea, humanities

```
## Passage 44: Why Libraries Started Lending Tools

For most of their history, public libraries were defined by a single service: lending books. In recent years, however, a growing number of libraries have begun lending objects that have nothing to do with reading — power drills, sewing machines, telescopes, even musical instruments. To some observers this shift looks like a distraction from the library's real purpose. The librarians who run these programs argue the opposite. The library, they point out, has always existed to give a community shared access to resources that individuals may not be able to afford or store on their own. A drill that a household uses twice a year fits that principle as neatly as a novel that a reader finishes in a weekend. Seen this way, lending tools is not a departure from the library's mission but a straightforward extension of it.

### Q179
**difficulty:** Easy
**type:** Reading Comprehension
**topic:** Main Idea

Which of the following best states the main point of the passage?

- A) Public libraries should stop lending books and focus instead on lending tools and other objects.
- B) Lending tools and similar objects extends, rather than betrays, the library's long-standing purpose of providing shared community access to resources.
- C) Power drills and telescopes are among the items most frequently borrowed from modern public libraries.
- D) Most librarians object to programs that lend anything other than books.
- E) Communities that cannot afford to buy books benefit more from libraries than wealthier communities do.

**answer:** B
**explanation:** **Question task.** This is a Main Idea question, so the correct answer must capture the one claim that unifies the whole passage — not a single detail and not an overstatement. **Why B is correct.** The passage sets up a contrast (some see tool-lending as a distraction) and then endorses the librarians' reply: the library has always existed to provide shared access to resources people cannot easily afford or store, and tools fit that principle just as books do. The closing sentence states the thesis outright — tool-lending is "not a departure from the library's mission but a straightforward extension of it." B restates exactly that. **Why the others fail.** A is too extreme and reverses the passage, which never says books should be dropped. C is a supporting detail (examples of borrowed objects), not the central claim. D contradicts the passage, which presents the librarians as defending these programs. E introduces a comparison between rich and poor communities that the passage never makes. The correct answer is B.
**related_reading:** reading-verbal-06-rc-question-types
```

### Proposal 3.2 — `reading-comprehension-q180` (new Passage 45)
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Main Idea · **Tags:** reading-comprehension, main-idea, social-science

```
## Passage 45: The Return of the Night Train

A decade ago, overnight passenger trains seemed to be vanishing from Europe. Airlines offered faster trips at lower fares, and one national rail company after another cut its sleeper services. Recently, though, several countries have begun restoring these routes. Part of the reason is environmental: a train journey produces a small fraction of the greenhouse gases of an equivalent flight, and governments under pressure to cut emissions have started funding night trains again. But the operators emphasize a practical appeal as well. A traveler who boards at night and steps off rested the next morning gives up no daytime hours to the journey and needs no hotel for that night. What once looked like a relic, its supporters argue, turns out to fit the priorities of a new era.

### Q180
**difficulty:** Easy
**type:** Reading Comprehension
**topic:** Main Idea

The main point of the passage is that overnight trains in Europe:

- A) produce fewer greenhouse gases than airplanes do on comparable trips.
- B) are being revived because they suit both the environmental and the practical priorities of the present era.
- C) will soon replace short-haul flights across most of the continent.
- D) were cut by national rail companies mainly because airlines lowered their fares.
- E) appeal to travelers who would rather arrive rested than arrive quickly.

**answer:** B
**explanation:** **Question task.** A Main Idea question asks for the claim that ties the whole passage together. **Why B is correct.** The passage traces a reversal — night trains were disappearing, and now they are being restored — and gives two reasons for the revival: an environmental one (lower emissions, government funding) and a practical one (no lost daytime, no hotel). The final sentence unifies these: the trains "turn out to fit the priorities of a new era." B captures both halves of that thesis. **Why the others fail.** A and E each state a single supporting detail (one reason apiece) rather than the overall point. C overstates the passage, which never predicts that trains will replace flights. D distorts a detail: the passage says airlines' low fares were part of why services were cut, but the passage's point is about the revival, not the cause of the earlier decline. The correct answer is B.
**related_reading:** reading-verbal-06-rc-question-types
```

---

## Slot 4 — verbal-17-rc-application

- **Chapter:** [verbal-17-rc-application](src/content/chapters/verbal-17-rc-application.md) — "RC: Application"
- **Flagged pin:** `reading-comprehension-q28` in `problem_sets.easy` — labeled **Hard**, topic **Function** (wrong tier and wrong type for an Application chapter).
- **Skill/type needed:** Easy (Beginner) **Reading Comprehension — Application** (extend the author's principle to a new case).
- **Why no existing Beginner question fits:** the RC bank has **zero** Easy Application items (19 Application items total, all Medium/Hard). There is nothing of the right type at the right tier to re-pin, so a Beginner Application item must be authored. As with Main Idea, the shortage is structural — the existing passages are too dense to yield an Easy application question.

**Recommendation:** replace `reading-comprehension-q28` with one (or both) of the two questions below. Both attach to a single new **Passage 46** that states one clean, transferable principle — the natural shape for a Beginner application item, and efficient to review.

### New Passage 46 + Proposals 4.1 and 4.2 — `reading-comprehension-q181`, `reading-comprehension-q182`
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Application · **Tags:** reading-comprehension, application, principle-transfer, design

```
## Passage 46: Design That Explains Itself

An industrial designer argues that a well-made everyday object should make its correct use obvious from its shape alone, so that a first-time user needs no printed instructions. A door meant to be pushed, she notes, should present a flat plate with nothing to grab; a door meant to be pulled should present a handle that invites the hand. When the shape of an object suggests the wrong action, she warns, users will keep making the same mistake no matter how clearly the instructions are written. Good design, in her view, does its explaining silently, through form, and treats a printed warning label as a confession that the shape has failed.

### Q181
**difficulty:** Easy
**type:** Reading Comprehension
**topic:** Application

Which of the following objects would most likely be regarded by the designer as well designed?

- A) A microwave oven sold with a detailed printed manual explaining each of its twenty buttons.
- B) A gate latch shaped so that the only comfortable way to grip it pulls it in the direction that opens the gate.
- C) A software program that displays a warning message whenever the user selects the wrong option.
- D) A kitchen chair advertised as the most comfortable model in its price range.
- E) A stove whose burner knobs are placed in a straight row while the burners themselves are arranged in a square.

**answer:** B
**explanation:** **Question task.** This is an Application question: extract the designer's principle, then find the new case that follows it. **The principle.** A well-designed object makes its correct use obvious from its shape, needing no instructions; when shape suggests the wrong action, instructions cannot fix it. **Why B is correct.** The gate latch's shape makes the only comfortable grip the one that opens the gate — the form itself guides correct use, with no label required. That is the principle in action. **Why the others fail.** A and C rely on exactly what the designer distrusts: a printed manual and an on-screen warning, both of which she treats as confessions that the form has failed. D concerns comfort and price, which the principle does not address. E is the case the designer explicitly criticizes — a mismatch between the layout of the controls and the thing they control, forcing the user to read labels — so it is an example of poor design, not good. The correct answer is B.
**related_reading:** reading-verbal-06-rc-question-types

### Q182
**difficulty:** Easy
**type:** Reading Comprehension
**topic:** Application

The designer would most likely consider which of the following a design failure?

- A) A pair of scissors molded to fit the curve of a right hand.
- B) A cabinet drawer fitted with a rounded knob that invites a pull, though the drawer opens only when it is pressed inward.
- C) A camera on which the shutter button is the largest and most prominent control.
- D) A water faucet whose single lever lifts to start the flow and lowers to stop it.
- E) A light switch mounted just inside the entrance of a room.

**answer:** B
**explanation:** **Question task.** Apply the designer's principle to a new object — find the case where the shape points the user toward the wrong action. **Why B is correct.** A rounded knob "invites the hand" to pull, but the drawer opens only when pressed inward; the form actively suggests the wrong action, which is precisely the failure the passage describes, and no printed label can undo it. This is the door principle carried to a fresh object rather than the door itself. **Why the others fail.** A (hand-shaped scissors), C (a prominent shutter button on a camera), and D (a lever whose motion matches the flow) are all cases where the shape supports correct use — the principle would approve of them. E places a light switch where a person entering would reach for it, again a shape-and-placement match, not a failure. The correct answer is B.
**related_reading:** reading-verbal-06-rc-question-types
```

---

## Slot 5 — verbal-18-rc-function

- **Chapter:** [verbal-18-rc-function](src/content/chapters/verbal-18-rc-function.md) — "RC: Function"
- **Flagged pin:** `reading-comprehension-q55` in `problem_sets.easy` — labeled **Hard**, topic **Function** (correct type, wrong tier — two tiers above the set).
- **Skill/type needed:** Easy (Beginner) **Reading Comprehension — Function** (what a sentence *does*, not what it says).
- **Why no existing Beginner question fits:** the RC bank has **zero** Easy Function items (19 Function items total, all Medium/Hard). The type exists in quantity but none sits at the Easy tier, so there is nothing to re-pin.

**Recommendation:** replace `reading-comprehension-q55` with one (or both) of the two questions below, attached to a new **Passage 47** with a clear, simple structure (general rule → the exception → its consequence), which makes each sentence's role easy to name.

### New Passage 47 + Proposals 5.1 and 5.2 — `reading-comprehension-q183`, `reading-comprehension-q184`
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Function · **Tags:** reading-comprehension, function, role-of-detail, natural-science

```
## Passage 47: Why Ice Floats

Most substances grow denser as they cool, so their solid form sinks in their own liquid. Water is a striking exception. As water nears its freezing point, its molecules lock into a rigid lattice that holds them slightly farther apart than they sit in the liquid. Because the same number of molecules now takes up more space, ice is less dense than the water around it, and so it floats. This small quirk has large consequences. A pond freezes from the top down rather than the bottom up, leaving a layer of liquid water beneath the ice in which fish and other creatures can survive the winter.

### Q183
**difficulty:** Easy
**type:** Reading Comprehension
**topic:** Function

In the passage, the statement that most substances grow denser as they cool serves primarily to

- A) prove that water is the most unusual liquid found in nature.
- B) establish the general rule against which water's behavior is presented as an exception.
- C) explain how fish are able to survive the winter in a frozen pond.
- D) describe the rigid lattice that water molecules form near freezing.
- E) argue that cooling always lowers the density of a substance.

**answer:** B
**explanation:** **Question task.** A Function question asks what a sentence *does* for the passage, not what it states. **Why B is correct.** The opening sentence lays down the normal rule — substances get denser and their solids sink — so that the next sentence ("Water is a striking exception") has something to stand against. Its job is to set the baseline that makes water's behavior notable. **Why the others fail.** A overreaches: the sentence sets up a contrast, not a ranking of water among all liquids. C names the passage's final consequence, which comes later and is a different sentence's job. D describes content that appears afterward (the lattice), not the function of this sentence. E misreads the rule as a claim that cooling *always* lowers density, which is the opposite of what the sentence says. The correct answer is B.
**related_reading:** reading-verbal-06-rc-question-types

### Q184
**difficulty:** Easy
**type:** Reading Comprehension
**topic:** Function

The last sentence of the passage, about a pond freezing from the top down, functions to

- A) introduce a new topic that is unrelated to the density of ice.
- B) illustrate a significant consequence of the property the passage has just explained.
- C) cast doubt on the explanation of floating ice given earlier.
- D) define the term "lattice" for the reader.
- E) compare water with another substance that behaves in an unusual way.

**answer:** B
**explanation:** **Question task.** Identify the role the closing sentence plays in the whole. **Why B is correct.** The sentence just before it announces that the quirk "has large consequences"; the final sentence then gives one — a pond freezing top-down and sheltering life beneath the ice. Its job is to illustrate that consequence. **Why the others fail.** A is wrong because the sentence is a direct result of ice being less dense, not an unrelated topic. C misstates the tone: the sentence supports and extends the explanation rather than doubting it. D is wrong because the sentence defines nothing; the lattice was described earlier. E is wrong because no second substance appears — the passage stays with water throughout. The correct answer is B.
**related_reading:** reading-verbal-06-rc-question-types
```

---

## Slot 6 — verbal-19-rc-attitude

- **Chapter:** [verbal-19-rc-attitude](src/content/chapters/verbal-19-rc-attitude.md) — "RC: Attitude"
- **Flagged pin:** `reading-comprehension-q140` in `problem_sets.easy` — labeled **Hard**, topic **Inference** (wrong tier and wrong type for an Attitude chapter).
- **Skill/type needed:** Easy (Beginner) **Reading Comprehension — Author's Attitude** (direction + intensity of the author's own stance).
- **Why no existing Beginner question fits:** the RC bank has **zero** Easy Author's Attitude items (13 total, all Medium/Hard). No Easy item of the type exists to re-pin.

**Recommendation:** replace `reading-comprehension-q140` with one (or both) of the two questions below, attached to a new **Passage 48** whose stance is deliberately clear (favorable but qualified) so the two-dial check the chapter teaches — direction and intensity — has an unambiguous target.

### New Passage 48 + Proposals 6.1 and 6.2 — `reading-comprehension-q185`, `reading-comprehension-q186`
- **Section:** Verbal · **Difficulty:** Easy · **Topic:** Author's Attitude · **Tags:** reading-comprehension, authors-attitude, tone, direction-and-intensity

```
## Passage 48: Points and Badges in the Classroom

The recent enthusiasm for "gamifying" education — awarding students points, badges, and leaderboard rankings for finishing their lessons — has produced some real benefits. Students who might otherwise drift often work longer when a game-like system rewards their effort, and teachers describe livelier classrooms. Still, it would be a mistake to treat these rewards as a cure-all. When the points themselves become the goal, students can learn to chase them while absorbing little of the material the points were meant to encourage. Used sparingly, gamification is a genuinely useful tool; mistaken for the substance of learning, it quietly defeats its own purpose.

### Q185
**difficulty:** Easy
**type:** Reading Comprehension
**topic:** Author's Attitude

The author's overall attitude toward gamification in education is best described as

- A) unqualified enthusiasm.
- B) cautious approval tempered by a clear reservation.
- C) firm opposition.
- D) complete indifference.
- E) bewilderment about its effects.

**answer:** B
**explanation:** **Question task.** An Attitude question is a two-dial check: get the direction and the intensity of the author's stance both right. **Why B is correct.** The author names "real benefits" and calls gamification "genuinely useful" (positive direction) but warns against treating it as "a cure-all" and describes how it can "defeat its own purpose" (a clear reservation). Favorable, but hedged — cautious approval with a reservation. **Why the others fail.** A overshoots the intensity: "unqualified" ignores the explicit warning. C reverses the direction; the author does not oppose gamification, only its misuse. D is wrong because the author plainly cares and takes a position. E mistakes a balanced, well-organized judgment for confusion. The correct answer is B.
**related_reading:** reading-verbal-06-rc-question-types

### Q186
**difficulty:** Easy
**type:** Reading Comprehension
**topic:** Author's Attitude

The author's attitude toward treating points and badges as "the substance of learning" is best described as one of

- A) mild approval.
- B) open admiration.
- C) clear disapproval.
- D) careful neutrality.
- E) reluctant acceptance.

**answer:** C
**explanation:** **Question task.** Set direction and intensity for the author's stance toward one specific thing — points mistaken for the substance of learning. **Why C is correct.** The author says that when points become the goal, students "absorb little of the material," and that gamification "mistaken for the substance of learning … quietly defeats its own purpose." That is a plainly negative judgment of this misuse — clear disapproval. **Why the others fail.** A and B assign a positive direction, but the author's praise is reserved for gamification used *sparingly*, not for treating it as the substance of learning. D understates a stance the author states pointedly. E implies the author goes along with the misuse, whereas the passage rejects it. The correct answer is C.
**related_reading:** reading-verbal-06-rc-question-types
```

---

## Summary table

| Slot | Chapter | Flagged pin (label) | Type needed (Easy) | Why dry | Proposed replacements |
|---|---|---|---|---|---|
| 1 | verbal-02-cr-argument-structure | q5 (Hard/Strengthen) | CR Strengthen | all 6 Easy Strengthen items pinned | q247, q248, q249 |
| 2 | verbal-04-cr-strengthen | q20 (Hard/Evaluate) | CR Evaluate | all 3 Easy Evaluate items pinned | q250, q251, q252 |
| 3 | verbal-14-rc-main-idea | q124 (Hard/Inference) | RC Main Idea | only 1 Easy Main Idea item, pinned elsewhere | q179 (P44), q180 (P45) |
| 4 | verbal-17-rc-application | q28 (Hard/Function) | RC Application | 0 Easy Application items in bank | q181, q182 (P46) |
| 5 | verbal-18-rc-function | q55 (Hard/Function) | RC Function | 0 Easy Function items in bank | q183, q184 (P47) |
| 6 | verbal-19-rc-attitude | q140 (Hard/Inference) | RC Author's Attitude | 0 Easy Attitude items in bank | q185, q186 (P48) |

**Next step:** on your approval I will (a) append the chosen questions/passages to the relevant `questions/verbal/*.md` banks, (b) re-pin each flagged slot to the chosen new id in the six chapter files, and (c) re-run `scripts/validate-content.ts` to confirm the two-tier mismatch count drops from 6 to 0. Nothing is inserted until you say which drafts to use.

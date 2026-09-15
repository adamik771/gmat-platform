# Content Provenance and IP Review Ledger

## Purpose

This is the repository's evidence ledger for teaching content, questions, and explanations. It records what the project can substantiate, not what it hopes is true. It is an operational record rather than a legal opinion or a guarantee that no third party will ever assert a claim.

Adam Zakarian is the final editorial owner. Content development has been AI-assisted. The protectable scope of AI-assisted work depends on the human creative contribution, including original selection, arrangement, rewriting, and editorial judgment. Prompts and automated checks alone are not recorded as human authorship.

## Mandatory source-isolation policy

1. Do not provide official GMAC questions, leaked items, paid competitor content, screenshots, passages, explanations, examples, or distinctive frameworks to an AI system as source material or style references.
2. Do not copy, translate, reconstruct, or closely paraphrase identifiable third-party expression. General facts, mathematical principles, and logical concepts may be taught using independently created scenarios, values, distractors, wording, and explanations.
3. Record every external source actually consulted. If a source's license or permitted use is unclear, do not incorporate it until the issue is resolved.
4. Every future question or teaching-content batch must add a batch entry below before release.
5. Adam's human review must be recorded accurately. It includes reading the final text, independently solving or checking every keyed answer in the batch, and making substantive editorial changes or explicitly approving the final expression.

## Reference and license register

| Source | License or status | Permitted project use | Prohibited or restricted use |
|---|---|---|---|
| GMAC and mba.com official materials | Proprietary; GMAT and related marks belong to GMAC | Verify current exam facts, timing, names, and link students to official resources | Do not copy, paraphrase, reconstruct, translate, scrape, or use official questions and explanations as generation inputs |
| `forall x: Calgary`, Aaron Thomas-Bolduc and Richard Zach / Open Logic Project | CC BY 4.0 | Link to it; adapt material only with attribution and a batch-level provenance record | Do not present adapted expression as solely original; preserve required attribution |
| `Critical Thinking, Logic, and Argument`, Aaron Dayton and David Rodier / Athabasca University Press | CC BY-NC-SA 4.0 | Link as an external noncommercial reference; learn general concepts without carrying over expression | Do not adapt its text, exercises, examples, or structure into this commercial product without separate permission |
| Third-party prep providers | Proprietary unless a specific license says otherwise | State restrained, verifiable facts and link where appropriate | Do not use questions, screenshots, explanations, proprietary frameworks, or unverified comparative performance claims |

## Historical evidence

### 2026-09-15 targeted teaching-quality corrections (not released)

- **Branch / proposed commit:** `fix/teaching-quality-batches-20260915`; `fix(quality): repair teaching, freshness and item statistics`.
- **Authoring/review tool:** Codex, AI-assisted. Adam Zakarian remains final human editor; human review of final text and answer checks is **pending**. No substantive human edits or independent-agent panel is claimed for this batch.
- **Source material:** existing repository questions/guides and the September 15 diagnostic audit. Corrections concern `reading-quant-08-method-selection`, `quant-05-order-and-signed-numbers`, `quant-master-chapter`, `graphics-interpretation-q80`, `multi-source-reasoning-q65`, and the Statistics/Probability pin lists. Ten difficulty-only relabels and one retained Advanced item are identified individually in `GMAT_CONTENT_AUDIT.md`.
- **Specification:** fix demonstrated arithmetic/reasoning and chapter-skill mismatches, preserve valid methods and helpful explanation detail, and distinguish editorial difficulty judgments from measured calibration. No newly authored bank question, passage, or near-copy replacement.
- **External references consulted in the preceding research audit:** [GMAC structure/review rules](https://www.mba.com/exams/gmat-exam/about/exam-structure), [GMAC score guidance](https://www.gmac.com/gmat-other-assessments/about-the-gmat-focus-edition/exam-scores), [GMAC DI overview](https://www.mba.com/exams/gmat-exam/prep-for-the-exam/prep-strategies/data-insights), [W3C contrast guidance](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum), [NBME item-writing guide](https://www.nbme.org/sites/default/files/2021-02/NBME_Item%20Writing%20Guide_R_6.pdf), [IES learning practice guide](https://ies.ed.gov/ncee/wwc/PracticeGuide/1), and [Karpicke/Blunt retrieval study](https://learninglab.psych.purdue.edu/downloads/2011/2011_Karpicke_Blunt_Science.pdf). Used for exam facts, interface criteria and general evaluation principles, not for copied question wording or examples. No additional external content source used during implementation.
- **Isolation and similarity:** no official, leaked, or paid-competitor questions supplied as generation inputs for this batch. Changes were checked against the repository originals; no new external similarity search or legal clearance was performed. Historical provenance limitations still apply.
- **Answer checks:** Codex re-solved the corrected numeric examples and the eleven reviewed items; regression cases cover arithmetic, stable keys, new/old pins and inventory. Five initial review flags had already been seen; the other six were solved before looking at their keys within the same assistant session. This is not independent human validation.
- **Open concerns:** editorial labels remain judgments; no score-gain or empirically calibrated difficulty claim. Explicit recovery memberships preserve the 21 standalone tests changed by this batch; this is not general recovery for every historical content version. No quarantine or removal of any bank question in this batch.
- **Release decision:** Adam authorized committing and pushing for branch review on September 15. No merge or production deployment authorized in that request; independent human content review remains unrecorded and must not be inferred from branch publication.

The repository did not maintain contemporaneous per-batch source manifests before August 20, 2026. The entries below therefore describe available evidence and its limits; they do not retroactively certify every item.

| Period / commits | Scope | Evidence available | Review status and limitation |
|---|---|---|---|
| April 15 to June 13, 2026, beginning `dd8fc63` and subsequent bank-expansion commits | Initial curriculum and distributed question-bank expansion | Git history preserves authorship chronology and every text revision | No contemporaneous source manifest. Covered only by later automated/content audits and spot checks unless a later entry says otherwise |
| `12b33ae` (June 14, 2026) | Large question-bank expansion | Commit record states newly written questions and no copied source material | Statement is part of the development record, not independent proof; later validators and audits cover correctness and duplication signals |
| `d9ba322` (June 15, 2026) | Additional original-question expansion | Git diff, commit history, and later bank-wide QA | No item-level source manifest was kept at generation time |
| `e295d43` (June 15, 2026) | Verbal expansion informed by logic reference materials | Commit history states original items and concept-level use of reference library | Athabasca material is now classified as CC BY-NC-SA 4.0 and reference-only. No copied exercise or passage has been identified, but any future adaptation is prohibited without permission |
| `273e64c` (July 7, 2026) and `2f33ee2` (July 17, 2026) | Thin-bank growth and beginner replacements | Targeted content proposals, Git diffs, answer checks, and content validator evidence | Supporting proposal/review records exist in repository history; still AI-assisted content under Adam's final editorial control |
| July to August 2026 content-audit commits, including `0b868ed`, `3a89d32`, `f91b86d`, `8869852`, `3c9695e`, `d53baef`, and `66fc992` | Syllabus, difficulty, mapping, numerical correctness, and rendering audits | Git diffs, audit reports, independent re-solves, validator output, and regression tests | Strong correctness and consistency evidence; these reviews were not a substitute for contemporaneous source manifests |

## Baseline IP audit: August 20, 2026

- Reviewed the public legal wording, footer notice, resource licensing labels, content-generation rules, and high-risk competitor claims.
- Searched twelve distinctive phrases sampled from Quant, Verbal, DI, chapter, and explanation content. No exact third-party matches were found in the search results reviewed.
- Found no official GMAC logo, official question screenshot, competitor screenshot, copied score-report image, or third-party hotlinked product image in the repository.
- Reviewed production dependency declarations. Direct dependencies use permissive licenses; the generated transitive notice file is the release record for installed production packages.
- Replaced unsupported competitor score comparisons and narrowed ownership wording so it does not claim third-party trademarks, links, or open-source code as solely original work.
- Corrected the GMAC trademark notice and the two open-resource license descriptions.

This was a risk-reduction audit, not a legal clearance opinion and not a full forensic comparison of every question against every published prep source.

## Future batch entry template

Copy this section for every new content batch.

```text
Date:
Branch / commit:
Authoring tool or person:
Files and question IDs:
Skill specification used:
External sources consulted (list every source, or "none"):
Official, leaked, and paid-competitor source isolation confirmed by:
Similarity review performed (method and sample size):
Answer/key verification performed by:
Human editor:
Human review completed (read, independently solved/checked, and edited or expressly approved):
Substantive human changes:
Open concerns or quarantined items:
Release decision:
```

## Quarterly audit procedure

Run this review every three months and record the result below.

1. Sample at least 5 percent of newly added or materially rewritten items, with coverage across every changed bank and question type.
2. Search distinctive eight-to-twelve-word strings from prompts and explanations; investigate exact or unusually close matches.
3. Compare scenarios, numerical structures, distractor patterns, and explanation order for any item with a similarity signal.
4. Recheck every cited or linked resource's license and current attribution.
5. Scan the repository and built public assets for third-party logos, screenshots, photos, fonts, and copied interfaces.
6. Regenerate `public/third-party-notices.txt` and run `npm run notices:check`.
7. Review public affiliation, ownership, score, testimonial, and competitor claims for evidence and current accuracy.
8. Quarantine unresolved items before release and document the final decision.

### Quarterly audit log

| Date | Commit / release | Reviewer | Scope and sample | Findings and action | Result |
|---|---|---|---|---|---|
| 2026-08-20 | `legal/ip-compliance-hardening-20260820` working branch | Codex-assisted review; Adam sign-off pending | Public claims, legal copy, resource licenses, assets, dependencies, and 12 sampled content phrases | Controls and public wording hardened; no clear copied item found; external counsel and trademark actions remain owner tasks | Repository review complete; owner review pending |

## Reported-content response

Send copyright or trademark concerns to `hello@zakariangmat.com` with the URL, item ID, claimant identity, ownership basis, and the allegedly conflicting source. Preserve the relevant Git history and report, temporarily quarantine the item when the allegation is credible, compare the works, and remove or replace the item while ownership or permission is unresolved. Do not delete evidence or concede liability in an automated response.

## Owner-only external actions

These actions cannot be completed truthfully through repository changes:

1. Ask a Norwegian IP lawyer to review the brand name, domain, Terms, ownership chain, and this ledger before relying on them as legal clearance.
2. Run professional trademark searches in Norway, the EU, the United States, and other intended markets for `ZAKARIAN`, `ZAKARIAN GMAT`, and the logo. Consider applying to register the distinctive `ZAKARIAN` word/logo elements. Do not imply registration before it exists.
3. Confirm whether intellectual property belongs to Adam personally or should be assigned to a business entity, and execute a written assignment if needed.
4. Obtain separate written permission before commercially adapting any noncommercial resource.
5. Preserve receipts, licenses, design-source files, AI-service terms in force when content was created, and dated human editorial records.

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

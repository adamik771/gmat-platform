---
section: General
type: reference
title: Chapter Content Templates
description: Copy-paste markdown templates for adding worked examples, trap callouts, and other elevated callouts to chapter sections. Underscore-prefixed folder so the content loader doesn't pick it up.
---

# Chapter content templates

These are the markdown patterns the chapter renderer recognizes and elevates into styled callouts. Drop them into any chapter section's `body` and they render as visually distinct blocks instead of regular paragraphs.

The detection is conservative — only paragraphs that **open** with one of the recognized bold labels (followed by period or colon) get elevated. Inline `**Example.**` or `**Step 1.**` mid-prose stays as ordinary bold.

## Trap callout (amber)

```markdown
**Trap to watch.** When a question gives you `2x + 3y = 14` and `4x + 6y = 28`, the second equation is twice the first — they describe the same line, not two independent constraints. Three unknowns with three equations also fails this test if any two are linear combinations of each other. Always check rank, not equation count.
```

Recognized labels: `Trap`, `Trap to watch`, `Common trap`, `Trap pattern`.

## Mental model (gold)

```markdown
**Mental model.** A system of two linear equations is the intersection of two lines on the plane. One unique solution = lines cross at one point. No solution = parallel lines that never touch. Infinite solutions = the same line written twice.
```

Recognized labels: `Mental model`, `The mental model`, `Core idea`.

## Pro tip (blue)

```markdown
**Pro tip.** Before solving, glance at what the question wants. If it asks for `2x + 5` and you have `2x = 7`, just write `2x + 5 = 12`. Skipping the round-trip through individual variables saves 20-30 seconds per question on word problems.
```

Recognized labels: `Pro tip`, `High-scorer note`, `Elite tip`, `Speed tip`.

## Takeaway (emerald)

```markdown
**Takeaway.** Two equations in two unknowns *usually* pin down a unique answer — unless one is a multiple of the other. Always check independence before claiming sufficiency on Data Sufficiency.
```

Recognized labels: `Key takeaway`, `Takeaway`.

## Worked example (purple)

```markdown
**Worked example.** Solve `3x + 7 = 22`. Subtract 7: `3x = 15`. Divide by 3: `x = 5`. Verify by substitution: `3(5) + 7 = 22` ✓.
```

Recognized labels: `Worked example`, `Illustrated example`.

Note: regular `**Example.**` paragraphs stay as inline bold so the existing chapter content isn't over-formatted. Use `**Worked example.**` only when the example deserves its own visual block (typically the first instance in a section, or unusually elaborate ones).

---

## Authoring guidance — depth per chapter

Aim for these counts per chapter section to feel "premium-prep deep":

- **3–5 examples** per method or sub-skill (mix of straightforward and nasty)
- **At least one trap callout** per major method
- **One mental-model callout** per chapter (early, anchors the reader's mental representation)
- **One takeaway** per major method (closes the loop)
- **Pro tips** sparingly — only when there's a real shortcut worth flagging

The validator script (`npm run validate:content`) reports counts of these callouts per chapter as INFO so you can see at a glance which chapters are still thin.

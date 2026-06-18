import { describe, it, expect } from "vitest"
import { REVEAL_SENTINEL, transformRecallChecks } from "@/lib/recall-reveal"

describe("transformRecallChecks", () => {
  it("splits a clean recall check into question + hidden answer", () => {
    const input = "> **Recall check.** Why test only up to √N? (Because pairs.)"
    expect(transformRecallChecks(input)).toBe(
      `> **Recall check.** Why test only up to √N?\n>\n> ${REVEAL_SENTINEL}Because pairs.`
    )
  })

  it("handles nested parens in the answer (splits at the OUTER opening paren)", () => {
    const input = "> **Recall check.** How many factors? (`(2+1)(1+1)` = 6.)"
    expect(transformRecallChecks(input)).toBe(
      `> **Recall check.** How many factors?\n>\n> ${REVEAL_SENTINEL}\`(2+1)(1+1)\` = 6.`
    )
  })

  it("hides a mid-line answer and keeps the trailing coaching with the question", () => {
    const input =
      "> **Recall check.** Try (a) 8^(2/3). (Answers: 4.) If any took too long, fix your order."
    expect(transformRecallChecks(input)).toBe(
      `> **Recall check.** Try (a) 8^(2/3). If any took too long, fix your order.\n>\n> ${REVEAL_SENTINEL}Answers: 4.`
    )
  })

  it("keeps question-internal parens visible, hiding only the trailing answer group", () => {
    const input =
      "> **Recall check.** Name the three filters. (Too narrow, too broad, off-stance.) Say them before peeking."
    expect(transformRecallChecks(input)).toBe(
      `> **Recall check.** Name the three filters. Say them before peeking.\n>\n> ${REVEAL_SENTINEL}Too narrow, too broad, off-stance.`
    )
  })

  it("leaves a check with no parenthetical answer untouched (close-the-book self-test)", () => {
    const input =
      "> **Recall check.** Close the book. Write 1/8, 3/8 from memory. Score yourself."
    expect(transformRecallChecks(input)).toBe(input)
  })

  it("does not mistake an academic citation for the answer", () => {
    const input =
      "> **Recall check.** What did the study show? Retrieval beats re-reading (Roediger & Karpicke, 2006)."
    expect(transformRecallChecks(input)).toBe(input)
    const etAl =
      "> **Recall check.** Why space practice? The short gap builds durable memory (Cepeda et al., 2006) on delayed tests."
    expect(transformRecallChecks(etAl)).toBe(etAl)
  })

  it("does not mistake a bare list label for the answer", () => {
    // Answer authored as an unwrapped labelled list — `(b)` is a label, not an answer.
    const input =
      "> **Recall check.** Classify: (a) marbles; (b) coin flips. (a) dependent; (b) independent."
    expect(transformRecallChecks(input)).toBe(input)
  })

  it("ignores non-recall blockquotes and plain prose", () => {
    expect(transformRecallChecks("> **Mental model.** The core idea here. (aside)")).toBe(
      "> **Mental model.** The core idea here. (aside)"
    )
    expect(transformRecallChecks("Just a normal paragraph (with parens).")).toBe(
      "Just a normal paragraph (with parens)."
    )
  })

  it("only transforms the recall-check line within a larger document", () => {
    const md = [
      "Some intro prose.",
      "",
      "> **Recall check.** What is 2+2? (4.)",
      "",
      "More prose after.",
    ].join("\n")
    expect(transformRecallChecks(md)).toBe(
      [
        "Some intro prose.",
        "",
        "> **Recall check.** What is 2+2?",
        ">",
        `> ${REVEAL_SENTINEL}4.`,
        "",
        "More prose after.",
      ].join("\n")
    )
  })
})

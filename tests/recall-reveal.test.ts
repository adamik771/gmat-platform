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

  it("leaves a check with no trailing-paren answer untouched (close-the-book self-test)", () => {
    const input =
      "> **Recall check.** Close the book. Write 1/8, 3/8 from memory. Score yourself."
    expect(transformRecallChecks(input)).toBe(input)
  })

  it("leaves a check whose answer is mid-sentence (not at the end) untouched", () => {
    const input =
      "> **Recall check.** Try (a) 8^(2/3). (Answers: 4.) If any took too long, fix your order."
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

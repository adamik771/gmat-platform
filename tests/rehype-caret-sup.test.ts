import { describe, it, expect } from "vitest"
import rehypeCaretSup from "@/lib/rehype-caret-sup"

// Build a HAST root from a single node, run the plugin, and render to a string
// where superscripts show as ⟨exp⟩ so assertions read clearly.
function run(node: unknown): string {
  const tree = { type: "root", children: [node] } as { children: unknown[] }
  ;(rehypeCaretSup() as (t: unknown) => void)(tree)
  return render(tree.children[0])
}
function render(n: any): string {
  if (n.type === "text") return n.value
  if (n.tagName === "sup") return "⟨" + n.children.map(render).join("") + "⟩"
  return n.children.map(render).join("")
}
const T = (value: string) => ({ type: "text", value })
const E = (tagName: string, kids: any[]) => ({
  type: "element",
  tagName,
  properties: {},
  children: kids,
})

describe("rehype-caret-sup", () => {
  it("raises a single-digit exponent", () => {
    expect(run(E("p", [T("x^2")]))).toBe("x⟨2⟩")
  })

  it("raises multi-digit exponents and stops at the next token", () => {
    expect(run(E("p", [T("7^83 mod 5")]))).toBe("7⟨83⟩ mod 5")
  })

  it("raises a single-letter exponent", () => {
    expect(run(E("p", [T("n^k + 1")]))).toBe("n⟨k⟩ + 1")
  })

  it("raises a parenthesized exponent and strips the parens", () => {
    expect(run(E("p", [T("x^(1/n)")]))).toBe("x⟨1/n⟩")
    expect(run(E("p", [T("a^(x+1)")]))).toBe("a⟨x+1⟩")
  })

  it("handles ASCII and unicode-minus negative exponents", () => {
    expect(run(E("p", [T("2^-3")]))).toBe("2⟨-3⟩")
    expect(run(E("p", [T("2^(−2)")]))).toBe("2⟨−2⟩")
  })

  it("transforms inside inline-code chips (the screenshot case)", () => {
    expect(run(E("code", [T("n^2 - 3n + 2 = 0")]))).toBe("n⟨2⟩ - 3n + 2 = 0")
  })

  it("does NOT transform inside fenced code blocks (<pre>)", () => {
    expect(run(E("pre", [E("code", [T("keep^2 raw")])]))).toBe("keep^2 raw")
  })

  it("leaves a stray leading caret (no base) untouched", () => {
    expect(run(E("p", [T("^starts here")]))).toBe("^starts here")
  })

  it("does not mistake markdown emphasis (^*x*) for an exponent", () => {
    expect(run(E("p", [T("see ^*positive*")]))).toBe("see ^*positive*")
  })

  it("handles multiple exponents in one text node", () => {
    expect(run(E("p", [T("a^2 + b^2 = c^2")]))).toBe("a⟨2⟩ + b⟨2⟩ = c⟨2⟩")
  })

  it("is a no-op on text with no exponents", () => {
    expect(run(E("p", [T("the quick brown fox")]))).toBe("the quick brown fox")
  })
})

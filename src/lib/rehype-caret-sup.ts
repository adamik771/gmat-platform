/**
 * rehype plugin: render caret exponents as real superscripts.
 *
 * Content authors write exponents in plain ASCII with a caret — `x^2`,
 * `7^83`, `x^(1/n)`, `n^k` — both in prose and inside inline-code "chips".
 * The markdown pipeline (ReactMarkdown + remarkGfm only) has no math handling,
 * so the caret renders literally. This plugin walks the HAST text nodes (incl.
 * those inside inline <code>) and rewrites each `base^exponent` into
 * `base<sup>exponent</sup>`, so a square reads like a real square.
 *
 * Scope of exponent tokens (from the content): a single digit/letter (`^2`,
 * `^n`), a multi-digit or signed integer (`^83`, `^-3`, `^−2`), or a
 * parenthesized group (`^(1/2)`, `^(x+1)`, `^(2x+1)`) whose outer parens are
 * stripped. The base must be a digit/letter/closing bracket, so a stray
 * leading `^`, LaTeX `^{...}`, and `^*emphasis*` are all left untouched.
 *
 * No content changes; reversible; applies everywhere the plugin is wired in.
 */

// base (group 1) + caret + exponent token (group 2). No lookbehind, for
// maximum runtime compatibility — the base char is re-emitted as text.
const EXPONENT_RE = /([0-9A-Za-z)\]])\^(\([^)]+\)|[-−]?\d+|[A-Za-z])/g

type SupElement = {
  type: "element"
  tagName: "sup"
  properties: Record<string, never>
  children: Array<{ type: "text"; value: string }>
}

function makeSup(token: string): SupElement {
  const inner =
    token.startsWith("(") && token.endsWith(")") ? token.slice(1, -1) : token
  return {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: inner }],
  }
}

type TextNode = { type: "text"; value: string }

function splitText(value: string): Array<TextNode | SupElement> | null {
  EXPONENT_RE.lastIndex = 0
  if (!EXPONENT_RE.test(value)) return null
  EXPONENT_RE.lastIndex = 0
  const out: Array<TextNode | SupElement> = []
  let last = 0
  let m: RegExpExecArray | null
  while ((m = EXPONENT_RE.exec(value)) !== null) {
    // Everything up to and including the base char stays as text.
    out.push({ type: "text", value: value.slice(last, m.index) + m[1] })
    out.push(makeSup(m[2]))
    last = m.index + m[0].length
  }
  if (last < value.length) out.push({ type: "text", value: value.slice(last) })
  return out
}

type WalkNode = {
  type?: string
  tagName?: string
  value?: string
  children?: unknown[]
}

const SKIP_TAGS = new Set(["pre", "code-block", "sup", "sub"])

function walk(children: unknown[]): void {
  for (let i = 0; i < children.length; i++) {
    const node = children[i] as WalkNode
    if (!node || typeof node !== "object") continue
    if (node.type === "text" && typeof node.value === "string") {
      const replacement = splitText(node.value)
      if (replacement) {
        children.splice(i, 1, ...replacement)
        i += replacement.length - 1
      }
    } else if (node.type === "element" && Array.isArray(node.children)) {
      // Transform inside inline <code> (the chips) but never inside fenced
      // code blocks (<pre>) or an existing superscript.
      if (node.tagName && SKIP_TAGS.has(node.tagName)) continue
      walk(node.children)
    }
  }
}

export default function rehypeCaretSup() {
  return (tree: unknown): void => {
    const root = tree as { children?: unknown[] }
    if (root && Array.isArray(root.children)) walk(root.children)
  }
}

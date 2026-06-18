/**
 * Recall-check answer reveal — markdown preprocessing.
 *
 * Recall checks are authored inline in chapter markdown as a one-line
 * blockquote: `> **Recall check.** {question} ({answer}) {optional coaching}`.
 * Showing the answer right next to the question defeats retrieval practice —
 * the whole point is to answer from memory FIRST. So before the markdown is
 * parsed, we split off the parenthetical answer and re-emit it on its own
 * blockquote line prefixed with REVEAL_SENTINEL, which the reader turns into a
 * "Reveal answer" toggle. Any coaching that followed the answer ("...pull this
 * from memory before peeking") stays visible alongside the question — only the
 * parenthetical answer is hidden.
 *
 * The answer is always the LAST top-level parenthetical group on the line: an
 * earlier group can't be the answer because a later paren would sit in its
 * tail. Question-internal parens (`(a)`, `8^(2/3)`) and the trailing coaching
 * are left visible. Two guards keep it from hiding the wrong thing:
 *   - academic citations — `(Author, 2006)`, `(… et al., …)` — are not answers;
 *   - if the coaching tail itself contains a paren, the "last paren" we found is
 *     inside the coaching, not the answer, so we leave the line untouched.
 * Self-test checks with no answer paren ("close the book and write these from
 * memory") have nothing to hide and are left exactly as authored.
 */

export const REVEAL_SENTINEL = "⦙REVEAL⦙"

/** Locate the last top-level balanced parenthetical group in `s`, matching
 *  depth so nested parens in the answer (e.g. `(2+1)(1+1)`) stay together. */
function lastTopLevelParen(s: string): { open: number; close: number } | null {
  const close = s.lastIndexOf(")")
  if (close < 0) return null
  let depth = 0
  for (let i = close; i >= 0; i--) {
    const ch = s[i]
    if (ch === ")") depth++
    else if (ch === "(") {
      depth--
      if (depth === 0) return { open: i, close }
    }
  }
  return null // unbalanced — bail
}

/** `(Roediger & Karpicke, 2006)` or `(Cepeda et al., 2006)` — a source
 *  citation in the coaching, not an answer to hide. */
function isCitation(answer: string): boolean {
  return /\b(19|20)\d{2}$/.test(answer) || /\bet al\./.test(answer)
}

export function transformRecallChecks(md: string): string {
  return md
    .split("\n")
    .map((line) => {
      const m = line.match(/^(\s*>\s*)\*\*Recall check\.\*\*\s+(.*)$/)
      if (!m) return line
      const [, prefix, rawBody] = m
      const content = rawBody.trimEnd()

      const span = lastTopLevelParen(content)
      if (!span) return line // no parenthetical — self-test, leave inline
      const { open, close } = span
      if (open <= 0) return line // no question text before the paren

      const answer = content.slice(open + 1, close).trim()
      const before = content.slice(0, open).trimEnd()
      const after = content.slice(close + 1).trim()
      if (!answer || !before) return line
      if (/^[A-Za-z0-9]$/.test(answer)) return line // bare `(a)`/`(6)` list label, not an answer
      if (isCitation(answer)) return line // citation, not an answer
      if (/[()]/.test(after)) return line // stray paren in tail — not the answer

      // Keep the question plus any trailing coaching visible; hide only the
      // parenthetical answer behind the reveal toggle.
      const question = after ? `${before} ${after}` : before
      const blank = prefix.trimEnd() // the `>` for the blank blockquote line
      return `${prefix}**Recall check.** ${question}\n${blank}\n${prefix}${REVEAL_SENTINEL}${answer}`
    })
    .join("\n")
}

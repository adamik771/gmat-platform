/**
 * Recall-check answer reveal — markdown preprocessing.
 *
 * Recall checks are authored inline in chapter markdown as a one-line
 * blockquote: `> **Recall check.** {question} ({answer})`. Showing the answer
 * right next to the question defeats retrieval practice — the whole point is
 * to answer from memory FIRST. So before the markdown is parsed, we split off
 * the trailing parenthetical answer and re-emit it on its own blockquote line
 * prefixed with REVEAL_SENTINEL, which the reader turns into a "Reveal answer"
 * toggle.
 *
 * Conservative by design: it only fires when the check cleanly ENDS in `)`.
 * Irregular checks — answers in mid-sentence, or "close the book and write
 * these from memory" self-tests with no answer paren — don't end in `)` and
 * are left exactly as authored.
 */

export const REVEAL_SENTINEL = "⦙REVEAL⦙"

export function transformRecallChecks(md: string): string {
  return md
    .split("\n")
    .map((line) => {
      const m = line.match(/^(\s*>\s*)\*\*Recall check\.\*\*\s+(.*)$/)
      if (!m) return line
      const [, prefix, rawBody] = m
      const content = rawBody.trimEnd()
      if (!content.endsWith(")")) return line // irregular — leave inline
      // Walk back from the end to the `(` that opens the final balanced group
      // (answers can contain nested parens, e.g. `(2+1)(1+1)`).
      let depth = 0
      let open = -1
      for (let i = content.length - 1; i >= 0; i--) {
        const ch = content[i]
        if (ch === ")") depth++
        else if (ch === "(") {
          depth--
          if (depth === 0) {
            open = i
            break
          }
        }
      }
      if (open <= 0) return line // no opening paren, or it's the first char
      const question = content.slice(0, open).trimEnd()
      const answer = content.slice(open + 1, content.length - 1).trim()
      if (!question || !answer) return line
      const blank = prefix.trimEnd() // the `>` for the blank blockquote line
      return `${prefix}**Recall check.** ${question}\n${blank}\n${prefix}${REVEAL_SENTINEL}${answer}`
    })
    .join("\n")
}

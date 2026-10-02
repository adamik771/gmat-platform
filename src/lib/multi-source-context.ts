export interface MultiSourceTab {
  number: number
  title: string
  content: string
}

export interface MultiSourceContext {
  title: string
  tabs: MultiSourceTab[]
}

/**
 * Converts the authored MSR context format into source tabs. The question bank
 * uses one `## Set ...` heading followed by two or more `### Tab N: ...`
 * sections. Returning null keeps legacy or malformed content on the existing
 * plain-markdown fallback instead of hiding any information.
 */
export function parseMultiSourceContext(
  context: string,
): MultiSourceContext | null {
  const normalized = context.replace(/\r\n/g, "\n").trim()
  const setMatch = normalized.match(/^##\s+Set\s+\d+\s*:\s*([^\n]+)$/m)
  const tabMatches = [
    ...normalized.matchAll(/^###\s+Tab\s+(\d+)\s*:\s*([^\n]+)$/gm),
  ]

  if (tabMatches.length < 2) return null

  const tabs = tabMatches.map((match, index) => {
    const start = match.index! + match[0].length
    const end = tabMatches[index + 1]?.index ?? normalized.length

    return {
      number: Number.parseInt(match[1], 10),
      title: match[2].trim(),
      content: normalized.slice(start, end).trim(),
    }
  })

  if (tabs.some((tab) => !Number.isFinite(tab.number) || tab.content.length === 0)) {
    return null
  }

  return {
    title: setMatch?.[1].trim() ?? "Multi-Source Reasoning set",
    tabs,
  }
}

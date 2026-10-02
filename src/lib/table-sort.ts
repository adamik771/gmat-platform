export type TableSortDirection = "ascending" | "descending"

type ParsedSortValue =
  | { kind: "missing" }
  | { kind: "number"; value: number }
  | { kind: "date"; value: number }
  | { kind: "text"; value: string }

const MISSING_VALUES = new Set(["", "-", "--", "—", "n/a", "na", "null"])
const TEXT_COLLATOR = new Intl.Collator("en", {
  numeric: true,
  sensitivity: "base",
})

function parseNumber(value: string): number | null {
  const trimmed = value.trim()
  const negative = /^\(.*\)$/.test(trimmed)
  const unwrapped = negative ? trimmed.slice(1, -1).trim() : trimmed
  const match = unwrapped.match(
    /^[\s$€£¥]*([+-]?(?:\d+(?:,\d{3})*|\d*)(?:\.\d+)?)[\s]*(%|[kmb])?$/i
  )
  if (!match || !match[1] || match[1] === ".") return null

  const parsed = Number(match[1].replace(/,/g, ""))
  if (!Number.isFinite(parsed)) return null

  const suffix = match[2]?.toLowerCase()
  const multiplier =
    suffix === "k"
      ? 1_000
      : suffix === "m"
        ? 1_000_000
        : suffix === "b"
          ? 1_000_000_000
          : 1
  return (negative ? -parsed : parsed) * multiplier
}

function parseDate(value: string): number | null {
  // Date.parse is deliberately gated so labels such as "May" or "A" are not
  // silently treated as dates. Table Analysis dates use a numeric separator or
  // an explicit month + day/year shape.
  const looksLikeDate =
    /^\d{4}[-/]\d{1,2}[-/]\d{1,2}$/.test(value) ||
    /^\d{1,2}[-/]\d{1,2}[-/]\d{2,4}$/.test(value) ||
    /^(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\s+\d{1,2}(?:,\s*|\s+)\d{4}$/i.test(
      value
    )
  if (!looksLikeDate) return null
  const parsed = Date.parse(value)
  return Number.isNaN(parsed) ? null : parsed
}

function parseSortValue(raw: string): ParsedSortValue {
  const normalized = raw.replace(/\s+/g, " ").trim()
  if (MISSING_VALUES.has(normalized.toLowerCase())) return { kind: "missing" }

  const number = parseNumber(normalized)
  if (number !== null) return { kind: "number", value: number }

  const date = parseDate(normalized)
  if (date !== null) return { kind: "date", value: date }

  return { kind: "text", value: normalized }
}

/**
 * Compare two rendered table-cell strings. Missing values always sort last,
 * while numbers, percentages, currencies, magnitude suffixes, dates, and text
 * use the ordering a student expects from the official Table Analysis tool.
 */
export function compareTableCellText(
  left: string,
  right: string,
  direction: TableSortDirection
): number {
  const a = parseSortValue(left)
  const b = parseSortValue(right)

  if (a.kind === "missing" || b.kind === "missing") {
    if (a.kind === b.kind) return 0
    return a.kind === "missing" ? 1 : -1
  }

  let comparison: number
  if (a.kind === b.kind && a.kind === "number" && b.kind === "number") {
    comparison = a.value - b.value
  } else if (a.kind === b.kind && a.kind === "date" && b.kind === "date") {
    comparison = a.value - b.value
  } else {
    comparison = TEXT_COLLATOR.compare(String(a.value), String(b.value))
  }

  return direction === "ascending" ? comparison : -comparison
}

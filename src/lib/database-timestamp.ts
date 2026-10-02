/** Preserve Postgres microseconds when validating chronological pagination. */
export function databaseTimestampMicros(value: unknown): number | null {
  if (typeof value !== "string") return null
  const match = value.match(/T\d{2}:\d{2}:\d{2}(?:\.(\d{1,6}))?(?:Z|[+-]\d{2}:\d{2})$/)
  if (!match) return null
  const milliseconds = Date.parse(value)
  const subMillisecond = Number((match[1] ?? "").padEnd(6, "0").slice(3))
  const microseconds = milliseconds * 1000 + subMillisecond
  return Number.isSafeInteger(microseconds) ? microseconds : null
}

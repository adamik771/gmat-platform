export interface SafeDataError {
  code: string
  message: string
  status: number | null
}

const EMAIL = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi
const UUID = /\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/gi
const JWT = /\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g
const LONG_TOKEN = /\b[A-Za-z0-9_-]{40,}\b/g
const URL = /https?:\/\/[^\s]+/gi
const QUOTED_VALUE = /"[^"\n]{1,200}"|'[^'\n]{1,200}'/g

function textField(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null
}

/** Preserve useful schema diagnostics while removing user- and secret-shaped
 * values before anything reaches logs or Sentry. */
export function sanitizeDataError(error: unknown): SafeDataError {
  const record =
    error && typeof error === "object"
      ? (error as Record<string, unknown>)
      : null
  const rawMessage =
    (error instanceof Error ? error.message : null) ??
    textField(record?.message) ??
    "Unknown data operation failure"
  const message = rawMessage
    .replace(EMAIL, "[email]")
    .replace(UUID, "[uuid]")
    .replace(JWT, "[token]")
    .replace(LONG_TOKEN, "[redacted]")
    .replace(URL, "[url]")
    .replace(QUOTED_VALUE, "[value]")
    .slice(0, 300)
  const rawStatus = record?.status ?? record?.statusCode
  const status =
    typeof rawStatus === "number" && Number.isFinite(rawStatus)
      ? rawStatus
      : null

  return {
    code: textField(record?.code)?.slice(0, 40) ?? "unknown",
    message,
    status,
  }
}

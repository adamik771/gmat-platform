import "server-only"
import * as Sentry from "@sentry/nextjs"
import { sanitizeDataError } from "./data-error"

export interface DataFailureContext {
  surface: string
  operation: string
  table?: string
  rpc?: string
}

/** Report a data-layer failure without attaching identities, request payloads,
 * query values, or the original (potentially sensitive) exception object. */
export function reportDataFailure(
  error: unknown,
  context: DataFailureContext,
) {
  const safe = sanitizeDataError(error)
  const diagnostic = {
    surface: context.surface,
    operation: context.operation,
    table: context.table ?? null,
    rpc: context.rpc ?? null,
    code: safe.code,
    status: safe.status,
    message: safe.message,
  }

  console.error("[data-failure]", diagnostic)

  Sentry.withScope((scope) => {
    scope.setLevel("error")
    scope.setTag("data.surface", context.surface)
    scope.setTag("data.operation", context.operation)
    if (context.table) scope.setTag("data.table", context.table)
    if (context.rpc) scope.setTag("data.rpc", context.rpc)
    scope.setTag("data.code", safe.code)
    scope.setFingerprint([
      "data-failure",
      context.surface,
      context.operation,
      safe.code,
    ])
    scope.setContext("data_failure", diagnostic)

    const eventError = new Error(
      `${context.surface}.${context.operation}: ${safe.message}`,
    )
    eventError.name = "DataOperationError"
    Sentry.captureException(eventError)
  })
}

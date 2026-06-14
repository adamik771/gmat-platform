"use client"

import { useEffect } from "react"
import * as Sentry from "@sentry/nextjs"

/**
 * Root error boundary — catches errors thrown in the root layout itself,
 * where the normal error.tsx can't help. It REPLACES the root layout, so it
 * must render its own <html>/<body> and cannot rely on the app's global CSS
 * (hence inline styles).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // No-op unless NEXT_PUBLIC_SENTRY_DSN initialized the client SDK. Wrapped
    // so this last-resort boundary still renders even if reporting throws.
    try {
      Sentry.captureException(error)
    } catch {
      // ignore — never let monitoring break the fallback UI
    }
    console.error("[global error]", error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          color: "#F0F0F0",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          padding: 24,
        }}
      >
        <div style={{ maxWidth: 440, textAlign: "center" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#C9A84C",
              marginBottom: 12,
            }}
          >
            Something went wrong
          </p>
          <h1 style={{ fontSize: 26, fontWeight: 600, lineHeight: 1.15, marginBottom: 12 }}>
            The app failed to load.
          </h1>
          <p style={{ fontSize: 15, color: "#C0C0C0", lineHeight: 1.6, marginBottom: 24 }}>
            Please try again.
            {error?.digest ? (
              <span style={{ display: "block", marginTop: 8, fontSize: 12, color: "#555555" }}>
                Reference: {error.digest}
              </span>
            ) : null}
          </p>
          <button
            onClick={reset}
            style={{
              padding: "12px 20px",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              backgroundColor: "#C9A84C",
              color: "#0A0A0A",
              border: "none",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}

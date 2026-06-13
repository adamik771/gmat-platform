"use client"

import { useEffect } from "react"
import Link from "next/link"
import * as Sentry from "@sentry/nextjs"

/**
 * Route-segment error boundary. Catches uncaught errors in any page/layout
 * below the root layout and renders a recoverable UI instead of a blank crash.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // No-op unless NEXT_PUBLIC_SENTRY_DSN initialized the client SDK.
    Sentry.captureException(error)
    console.error("[app error]", error)
  }, [error])

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        <h1
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: "#F0F0F0",
            lineHeight: 1.15,
            marginBottom: 12,
          }}
        >
          We hit an unexpected error.
        </h1>
        <p style={{ fontSize: 15, color: "#C0C0C0", lineHeight: 1.6, marginBottom: 24 }}>
          Try again, or head back to your dashboard.
          {error?.digest ? (
            <span style={{ display: "block", marginTop: 8, fontSize: 12, color: "#555555" }}>
              Reference: {error.digest}
            </span>
          ) : null}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
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
          <Link
            href="/dashboard"
            style={{
              padding: "12px 20px",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              color: "#F0F0F0",
              border: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
            }}
          >
            Go to dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

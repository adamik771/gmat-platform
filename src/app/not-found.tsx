import Link from "next/link"

/**
 * Root 404 page. Replaces Next's bare default for any notFound() call or
 * unmatched route. Several pages already call notFound() (chapters, practice
 * sessions, blog posts, etc.) and were falling through to the unstyled default.
 */
export default function NotFound() {
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
          404
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
          We couldn&apos;t find that page.
        </h1>
        <p style={{ fontSize: 15, color: "#C0C0C0", lineHeight: 1.6, marginBottom: 24 }}>
          The link may be broken or the page may have moved.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <Link
            href="/"
            style={{
              padding: "12px 20px",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              backgroundColor: "#C9A84C",
              color: "#0A0A0A",
              textDecoration: "none",
            }}
          >
            Back to home
          </Link>
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

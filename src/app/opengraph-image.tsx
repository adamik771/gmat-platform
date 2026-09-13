import { ImageResponse } from "next/og"

export const alt = "Zakarian GMAT — From 565 to 735"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Default OpenGraph card. Rendered dynamically by Next.js's
 * ImageResponse — no design asset required from Adam, runs on first
 * request and caches. Renders the brand mark, the 565 → 735 hook, and
 * the value-prop tagline against the dark+gold palette.
 *
 * Used for og:image and twitter:image across the whole site (route
 * segments without their own opengraph-image.tsx inherit this one).
 */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(ellipse 90% 55% at 25% 0%, rgba(201,168,76,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(201,168,76,0.08) 0%, transparent 60%)",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: "#F0F0F0",
              textTransform: "uppercase",
            }}
          >
            ZAKARIAN
          </span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              backgroundColor: "#C9A84C",
            }}
          />
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: "#F0F0F0",
              textTransform: "uppercase",
            }}
          >
            GMAT
          </span>
        </div>

        {/* Headline + score hook */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 880,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 26,
              color: "#C9A84C",
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            <span>565</span>
            <span style={{ color: "#888888", fontSize: 32 }}>→</span>
            <span>735</span>
            <span style={{ color: "#444444" }}>·</span>
            <span>Top 1%</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 600,
              color: "#F0F0F0",
              letterSpacing: -2,
            }}
          >
            <span>Master the GMAT.</span>
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>
              On Your Terms.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#C0C0C0",
              maxWidth: 820,
            }}
          >
            The structured prep system that took Adam from 565 to 735 — built
            for ambitious students who don&rsquo;t have time for guesswork.
          </div>
        </div>

        {/* Footer rule + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: 2,
              flex: 1,
              background:
                "linear-gradient(to right, rgba(201,168,76,0.5), transparent)",
            }}
          />
          <span
            style={{
              fontSize: 22,
              color: "#888888",
              marginLeft: 24,
              letterSpacing: 1,
            }}
          >
            zakariangmat.com
          </span>
        </div>
      </div>
    ),
    size
  )
}

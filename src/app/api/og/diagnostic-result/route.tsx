import { ImageResponse } from "next/og"
import {
  decodeDiagnosticResult,
  summarizeDiagnostic,
  type SectionBand,
} from "@/lib/free-diagnostic-share"

/**
 * GET /api/og/diagnostic-result?q=...&v=...&d=...
 *
 * ORPHANED (2026-06): the `/free-diagnostic` page this card was built for was
 * removed, and nothing links to this endpoint. Kept (not deleted) this pass —
 * safe to remove together with `free-diagnostic-share.ts` once confirmed.
 *
 * Dynamic OpenGraph card for shared free-diagnostic results. Reads the
 * same query-param payload as `/free-diagnostic/result` and renders a
 * 1200×630 PNG with the user's section signals against the brand palette.
 *
 * Implementation notes:
 *   - Returned via the next/og `ImageResponse` (Edge-friendly Satori).
 *   - All multi-child flex containers explicitly set `display: "flex"`
 *     because Satori requires it (its constraint, not React's).
 *   - On invalid params we fall back to a generic "take the sampler"
 *     card rather than 400-ing — share links break in the wild and we'd
 *     rather show a recoverable card than a broken image.
 */

export const runtime = "edge"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const BAND_COLOUR: Record<SectionBand, string> = {
  Strong: "#3ECF8E",
  Mixed: "#C9A84C",
  "Needs work": "#FF6F6F",
}

const SECTION_COLOUR: Record<string, string> = {
  Quant: "#C9A84C",
  Verbal: "#3ECF8E",
  DI: "#6FB5F6",
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const result = decodeDiagnosticResult(searchParams)

  if (!result) {
    return new ImageResponse(<FallbackCard />, size)
  }

  const summary = summarizeDiagnostic(result)

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
          padding: "64px 80px",
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
          <span
            style={{
              marginLeft: 24,
              fontSize: 16,
              color: "#888888",
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          >
            Free sampler · 10 questions
          </span>
        </div>

        {/* Score block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 12,
            }}
          >
            <span
              style={{
                fontSize: 144,
                fontWeight: 600,
                color: "#C9A84C",
                letterSpacing: -4,
                lineHeight: 0.95,
              }}
            >
              {summary.totalCorrect}
            </span>
            <span
              style={{
                fontSize: 56,
                fontWeight: 600,
                color: "#555555",
                letterSpacing: -2,
              }}
            >
              / {summary.totalQuestions}
            </span>
            <span
              style={{
                fontSize: 28,
                color: "#C0C0C0",
                marginLeft: 16,
                marginBottom: 12,
              }}
            >
              on the GMAT sampler
            </span>
          </div>

          {/* Per-section signals */}
          <div style={{ display: "flex", gap: 16 }}>
            {summary.perSection.map((row) => (
              <div
                key={row.section}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  padding: "20px 24px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "#111111",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 6,
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: SECTION_COLOUR[row.section],
                      backgroundColor: `${SECTION_COLOUR[row.section]}1f`,
                    }}
                  >
                    {row.section}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "#888888",
                    }}
                  >
                    {row.correct}/{row.total}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: BAND_COLOUR[row.band],
                  }}
                >
                  {row.band}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: 22,
                color: "#C0C0C0",
              }}
            >
              {summary.weakestSection
                ? `Weakest section: ${summary.weakestSection}`
                : "Clean sampler — try the full diagnostic"}
            </span>
            <span
              style={{
                fontSize: 18,
                color: "#888888",
                marginTop: 4,
              }}
            >
              Take the full 30-question diagnostic for a real readiness band.
            </span>
          </div>
          <span
            style={{
              fontSize: 22,
              color: "#C9A84C",
              letterSpacing: 1,
            }}
          >
            zakariangmat.com
          </span>
        </div>
      </div>
    ),
    size,
  )
}

function FallbackCard() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0A0A0A",
        backgroundImage:
          "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 60%)",
        padding: "72px 80px",
        fontFamily: "system-ui, sans-serif",
        gap: 24,
      }}
    >
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 56,
          fontWeight: 600,
          color: "#F0F0F0",
          textAlign: "center",
          letterSpacing: -1,
        }}
      >
        <span>Free GMAT sampler.</span>
        <span style={{ color: "#C9A84C", fontStyle: "italic" }}>
          10 questions, real signals.
        </span>
      </div>
      <div
        style={{
          fontSize: 24,
          color: "#C9A84C",
          letterSpacing: 1,
        }}
      >
        zakariangmat.com/free-diagnostic
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { ShieldCheck } from "lucide-react"

/**
 * Proof asset for the founder's 735 / top-1% claim: a redacted
 * official GMAT Focus score-report screenshot.
 *
 * Graceful by design — until the image file exists the component renders
 * NOTHING (no broken-image glyph; that was the old `/founder.jpg` problem).
 * The figure starts hidden and only reveals after a successful load; a load
 * error hides it entirely.
 *
 * TO ACTIVATE: drop a redacted PNG (blur name / appointment id / any personal
 * identifiers) at `public/score-report.png`, or pass a different `src`.
 */
export default function ScoreReportProof({
  src = "/score-report.png",
}: {
  src?: string
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  )

  if (status === "error") return null

  return (
    <figure
      className="mt-8 rounded-2xl border p-4"
      style={{
        display: status === "loaded" ? "block" : "none",
        borderColor: "rgba(201,168,76,0.22)",
        backgroundColor: "rgba(201,168,76,0.04)",
      }}
    >
      <Image
        src={src}
        alt="Official GMAT Focus score report: 735 total (Q88, V86, DI85), top 1% of test-takers. Personal identifiers redacted."
        width={1200}
        height={1500}
        unoptimized
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        style={{ width: "100%", height: "auto" }}
        className="rounded-xl border border-white/[0.06]"
      />
      <figcaption className="mt-3 flex items-center gap-2 text-[12px] text-[#888888]">
        <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#3ECF8E" }} />
        Official GMAT Focus score report. Personal identifiers redacted.
      </figcaption>
    </figure>
  )
}

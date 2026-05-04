import type { Section } from "@/types"
import { pickDiagnosticQuestions } from "@/lib/diagnostic"
import { SAMPLE_COUNTS } from "@/lib/free-diagnostic-share"
import FreeDiagnosticClient, {
  type SampleQuestion,
} from "./FreeDiagnosticClient"
import JsonLd from "@/components/seo/JsonLd"
import { softwareApplicationLd } from "@/lib/structured-data"

export const metadata = {
  title: "Free Diagnostic",
  description:
    "Try ten sample GMAT Focus questions in under 12 minutes — three Quant, four Verbal, three Data Insights. See per-section signals and a shareable result, then decide whether you want the full 30-question version.",
}

/**
 * /free-diagnostic — public-facing sampler that opens the marketing
 * funnel. Per the growth audit (May 3, 2026): expanded from a 3-question
 * sampler to a 10-question mini-diagnostic (3Q + 4V + 3D), with a
 * per-section signal breakdown + shareable result URL on completion.
 *
 * The shareable URL is the load-bearing piece — it turns each finished
 * sampler into a small piece of word-of-mouth distribution. The result
 * page (`/free-diagnostic/result?q=...&v=...&d=...`) decodes the share
 * payload server-side and renders a public result + a sign-up CTA.
 *
 * Question selection: stratified per section (Beginner-leaning to keep
 * the sampler approachable). All deterministic — every visitor sees the
 * same 10 questions so results are comparable, and so the share URL
 * means the same thing for the recipient as it did for the sender.
 */
export default function FreeDiagnosticPage() {
  const samples: SampleQuestion[] = (
    ["Quant", "Verbal", "DI"] as Section[]
  ).flatMap((section) => {
    const need = SAMPLE_COUNTS[section]
    const pool = pickDiagnosticQuestions(section)
    // Prefer Beginner-tier first (sampler feel), then Intermediate to
    // top up if Beginner pool is short. Never reach Advanced — the
    // sampler is about giving prospects a real taste, not flattening
    // them on the first impression.
    const beginners = pool.filter((q) => q.difficulty === "Beginner")
    const intermediates = pool.filter((q) => q.difficulty === "Intermediate")
    const ordered = [...beginners, ...intermediates].slice(0, need)
    return ordered.map((q) => ({
      id: q.id,
      section,
      topic: q.topic,
      prompt: q.prompt,
      options: q.options,
      correctAnswer: q.correctAnswer,
      correctAnswerLetter: q.correctAnswerLetter,
      explanation: q.explanation,
    }))
  })

  return (
    <>
      <JsonLd
        data={softwareApplicationLd({
          name: "Free GMAT Diagnostic",
          description:
            "10-question public GMAT Focus Edition sampler with per-section signals and a shareable result. No signup required.",
          path: "/free-diagnostic",
        })}
      />
      <FreeDiagnosticClient samples={samples} />
    </>
  )
}

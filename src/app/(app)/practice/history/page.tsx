import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"

export const metadata = {
  title: "Session history",
}

function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000)
  const mm = Math.floor(totalSeconds / 60).toString().padStart(2, "0")
  const ss = (totalSeconds % 60).toString().padStart(2, "0")
  return `${mm}:${ss}`
}

/** Human label for a stored session slug. */
function kindLabel(slug: string, topic: string): string {
  if (slug.startsWith("mock-")) return "Mock section"
  if (slug.startsWith("review-")) return "Review"
  if (slug.startsWith("redo-")) return "Redo"
  if (slug.startsWith("ch-")) return "Chapter test"
  if (slug === "custom") return topic.toLowerCase().startsWith("mixed review") ? "Mixed review" : "Custom set"
  return "Topic drill"
}

/**
 * /practice/history — every saved session, newest first. Before this page
 * existed, saved sessions were mostly unreachable: only the test-builder's
 * five recent customs and the transient results-screen link could open a
 * session's detail, so topic drills, chapter tests, and review sessions
 * saved rows nobody could ever see again.
 */
export default async function PracticeHistoryPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto">
        <Frame>
          <p className="text-sm text-[#C0C0C0]">
            Sign in to see your session history.
          </p>
        </Frame>
      </div>
    )
  }

  const { data: sessions, error } = await supabase
    .from("practice_sessions")
    .select(
      "id, slug, topic, section, total_questions, correct_count, accuracy, total_time_ms, created_at"
    )
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(50)

  // A failed read is not an empty history — throw to the (app) boundary.
  if (error) {
    throw new Error(`practice history: sessions read failed (${error.message})`)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link
          href="/practice"
          className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Practice
        </Link>
        <h1 className="font-display text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] mt-3">
          Session{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            history.
          </span>
        </h1>
        <p className="text-[13px] text-[#888888] mt-2">
          Your last {Math.min(sessions?.length ?? 0, 50)} saved sessions — open
          any of them for the question-by-question record.
        </p>
      </div>

      {!sessions || sessions.length === 0 ? (
        <Frame>
          <p className="text-sm text-[#C0C0C0]">
            No saved sessions yet. Finish any practice set and it lands here.
          </p>
        </Frame>
      ) : (
        <div className="rounded-xl border border-white/[0.08] bg-[#111111] overflow-hidden">
          {sessions.map((s, i) => {
            const when = new Date(s.created_at as string).toLocaleDateString(
              "en-US",
              { month: "short", day: "numeric", year: "numeric" }
            )
            const acc =
              typeof s.accuracy === "number" ? Math.round(s.accuracy) : null
            return (
              <Link
                key={s.id as string}
                href={`/practice/history/${s.id}`}
                className={`flex items-center justify-between gap-3 p-4 hover:bg-white/[0.02] transition-colors ${
                  i < sessions.length - 1 ? "border-b border-white/[0.05]" : ""
                }`}
              >
                <div className="min-w-0">
                  <p className="text-[14px] text-[#F0F0F0] font-medium truncate">
                    {(s.topic as string) || "Practice session"}
                  </p>
                  <p className="text-xs text-[#888888] mt-0.5">
                    {kindLabel(s.slug as string, (s.topic as string) ?? "")} ·{" "}
                    {s.section as string} · {when}
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-[13px] tabular-nums text-[#C0C0C0]">
                    {s.correct_count as number}/{s.total_questions as number}
                    {acc !== null && (
                      <span className="text-[#888888]"> · {acc}%</span>
                    )}
                  </span>
                  <span className="text-xs tabular-nums text-[#888888]">
                    {formatDuration((s.total_time_ms as number) ?? 0)}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#888888]" />
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 p-6 rounded-2xl border border-white/[0.06] bg-[#0F0F0F]">
      {children}
    </div>
  )
}

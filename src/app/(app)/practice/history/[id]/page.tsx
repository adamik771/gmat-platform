import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getAllQuestions, type ParsedQuestion } from "@/lib/content"
import { readSavedForReview } from "@/lib/spaced-review"
import { getUserState } from "@/lib/user-state"
import SaveForReviewButton from "@/components/review/SaveForReviewButton"

export const metadata = {
  title: "Session results",
}

function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000)
  const mm = Math.floor(totalSeconds / 60).toString().padStart(2, "0")
  const ss = (totalSeconds % 60).toString().padStart(2, "0")
  return `${mm}:${ss}`
}

/**
 * /practice/history/[id] — saved results for one past practice session.
 *
 * The live results screen only exists while SessionClient is mounted; once
 * the student navigates away there was no way to see which questions of a
 * custom set they got right or wrong. This reads the persisted
 * practice_sessions row + its attempts, re-enriches from the content bank,
 * and links each row to the full per-question review page.
 */
export default async function SessionHistoryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  // UUID guard so a garbage id 404s without a DB roundtrip.
  if (!/^[0-9a-f-]{36}$/i.test(id)) notFound()

  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) notFound()

  const [{ data: session }, { data: attempts }, state] = await Promise.all([
    supabase
      .from("practice_sessions")
      .select(
        "id, slug, topic, section, total_questions, correct_count, accuracy, total_time_ms, created_at"
      )
      .eq("user_id", user.id)
      .eq("id", id)
      .maybeSingle(),
    supabase
      .from("practice_attempts")
      .select("id, question_id, selected_answer, is_correct, time_spent_ms")
      .eq("user_id", user.id)
      .eq("session_id", id)
      // Answered order — without this the Q1..Qn numbering was arbitrary.
      .order("created_at", { ascending: true }),
    getUserState(supabase, user),
  ])
  if (!session) notFound()

  const savedForReview = readSavedForReview(state)
  const byId = new Map<string, ParsedQuestion>()
  for (const q of getAllQuestions()) byId.set(q.id, q)

  const rows = (attempts ?? []).map((a) => ({
    id: a.id as string,
    questionId: a.question_id as string,
    selectedAnswer: a.selected_answer as number | null,
    isCorrect: !!a.is_correct,
    timeSpentMs: (a.time_spent_ms as number) ?? 0,
    question: byId.get(a.question_id as string) ?? null,
  }))

  const accuracy = Math.round(Number(session.accuracy ?? 0))
  const when = new Date(session.created_at as string).toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  )

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link
          href="/test-builder"
          className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Test Builder
        </Link>
        <h1 className="text-2xl font-bold text-[#F0F0F0] mt-3">
          {(session.topic as string) || "Practice session"}
        </h1>
        <p className="text-sm text-[#555555] mt-1">
          {session.section as string} · {when}
        </p>
      </div>

      <div
        className="p-6 rounded-xl border grid grid-cols-1 sm:grid-cols-3 gap-6"
        style={{
          borderColor: "rgba(201,168,76,0.2)",
          backgroundColor: "rgba(201,168,76,0.04)",
        }}
      >
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#555555]">
            Accuracy
          </p>
          <p className="text-3xl font-bold mt-2" style={{ color: "#C9A84C" }}>
            {accuracy}%
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#555555]">
            Correct
          </p>
          <p className="text-3xl font-bold mt-2 text-[#F0F0F0]">
            {session.correct_count as number}
            <span className="text-base font-normal text-[#555555]">
              {" "}
              / {session.total_questions as number}
            </span>
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#555555]">
            Total time
          </p>
          <p className="text-3xl font-bold mt-2 text-[#F0F0F0]">
            {formatDuration((session.total_time_ms as number) ?? 0)}
          </p>
        </div>
      </div>

      {rows.length === 0 ? (
        <p className="text-sm text-[#888888]">
          No per-question detail was recorded for this session.
        </p>
      ) : (
        <div className="rounded-xl border border-white/[0.08] bg-[#111111] overflow-hidden">
          {rows.map((row, i) => {
            const q = row.question
            const selectedLetter =
              row.selectedAnswer !== null && row.selectedAnswer >= 0
                ? String.fromCharCode(65 + row.selectedAnswer)
                : null
            return (
              <div
                key={row.id}
                className={`flex items-center justify-between gap-3 p-4 ${
                  i < rows.length - 1 ? "border-b border-white/[0.05]" : ""
                }`}
                style={
                  !row.isCorrect
                    ? { backgroundColor: "rgba(255,68,68,0.025)" }
                    : undefined
                }
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: row.isCorrect
                        ? "rgba(62,207,142,0.1)"
                        : "rgba(255,68,68,0.1)",
                    }}
                  >
                    {row.isCorrect ? (
                      <Check className="w-3.5 h-3.5" style={{ color: "#3ECF8E" }} />
                    ) : (
                      <X className="w-3.5 h-3.5" style={{ color: "#FF4444" }} />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#555555]">
                      Q{i + 1}
                      {q ? ` · ${q.subtopic} · ${q.difficulty}` : ""}
                      <span className="mx-1.5 text-[#333333]">·</span>
                      {selectedLetter ? (
                        <span
                          style={{
                            color: row.isCorrect
                              ? "rgba(62,207,142,0.75)"
                              : "rgba(255,107,107,0.75)",
                          }}
                        >
                          You: {selectedLetter}
                        </span>
                      ) : (
                        <span>You: —</span>
                      )}
                      {q && q.correctAnswerLetter && !row.isCorrect && (
                        <>
                          <span className="mx-1.5 text-[#333333]">·</span>
                          <span style={{ color: "rgba(62,207,142,0.75)" }}>
                            Correct: {q.correctAnswerLetter}
                          </span>
                        </>
                      )}
                      <span className="mx-1.5 text-[#333333]">·</span>
                      {formatDuration(row.timeSpentMs)}
                    </p>
                    <p className="text-sm text-[#F0F0F0] truncate mt-0.5">
                      {q
                        ? q.prompt.replace(/\s+/g, " ").slice(0, 90)
                        : "This question is no longer in the bank."}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <SaveForReviewButton
                    questionId={row.questionId}
                    initialSaved={savedForReview.has(row.questionId)}
                    variant="ghost"
                  />
                  {q && (
                    <Link
                      href={`/review/question/${row.questionId}`}
                      className="inline-flex items-center gap-1 text-xs transition-colors hover:text-[#F0F0F0]"
                      style={{ color: "#C9A84C" }}
                    >
                      Explanation
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

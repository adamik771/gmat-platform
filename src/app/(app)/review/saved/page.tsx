import Link from "next/link"
import { ArrowLeft, ArrowRight, Bookmark } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getQuestionsByIds } from "@/lib/content"
import SavedUnsaveButton from "./SavedUnsaveButton"
import EmptyState from "@/components/shared/EmptyState"
import type { Section } from "@/types"

export const metadata = {
  title: "Saved Questions",
}

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em]"

const SECTION_ACCENT: Record<Section, string> = {
  Quant: "#5FA8FF",
  Verbal: "#B088FF",
  DI: "#3ECF8E",
}

/** First ~150 chars of the prompt, markdown stripped, for a one-line preview. */
function preview(prompt: string): string {
  const stripped = prompt
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links → their text
    .replace(/[#*_`>~|]/g, "")
    .replace(/\s+/g, " ")
    .trim()
  if (!stripped) return "Open to view this question." // e.g. an image-only prompt
  // Slice by code points so a multi-byte glyph (emoji) is never cut mid-pair.
  const chars = [...stripped]
  return chars.length > 150
    ? chars.slice(0, 150).join("").trimEnd() + "…"
    : stripped
}

export default async function SavedQuestionsPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <Frame>
        <Header count={0} />
        <EmptyState
          icon={Bookmark}
          title="Sign in to see your saved questions"
          description="Bookmarked questions are personalised. Sign in to see everything you've saved to revisit."
          ctaHref="/login"
          ctaLabel="Sign in"
          size="md"
        />
      </Frame>
    )
  }

  // `saved_for_review` is the explicit "mark this to revisit" bookmark
  // (the Save button in practice + single-question review). Newest first.
  const rawSaved = user.user_metadata?.saved_for_review
  const savedIds: string[] = Array.isArray(rawSaved)
    ? rawSaved.filter((x): x is string => typeof x === "string")
    : []
  const questions = getQuestionsByIds([...savedIds].reverse())

  if (questions.length === 0) {
    return (
      <Frame>
        <Header count={0} />
        <EmptyState
          icon={Bookmark}
          title="Nothing saved yet"
          description="Tap “Save for review” on any practice question to bookmark it here. Saved questions also get a priority boost in your spaced-review queue."
          ctaHref="/practice"
          ctaLabel="Go to practice"
          size="md"
        />
      </Frame>
    )
  }

  return (
    <Frame>
      <Header count={questions.length} />
      <div className="space-y-3">
        {questions.map((q) => (
          <div
            key={q.id}
            className="p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span
                    className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.18em] font-semibold"
                    style={{
                      backgroundColor: SECTION_ACCENT[q.section] + "1A",
                      color: SECTION_ACCENT[q.section],
                    }}
                  >
                    {q.section === "DI" ? "Data Insights" : q.section}
                  </span>
                  <span className="text-[12px] text-[#888888] tracking-tight">
                    {q.subtopic && q.subtopic !== q.topic
                      ? `${q.topic} · ${q.subtopic}`
                      : q.topic}
                  </span>
                </div>
                <p className="text-[13px] text-[#C0C0C0] leading-relaxed line-clamp-2">
                  {preview(q.prompt)}
                </p>
              </div>
              {/* Compact toggle = unsave (initialSaved is true here). */}
              <div className="flex-shrink-0">
                <SavedUnsaveButton questionId={q.id} />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <Link
                href={`/review/question/${q.id}`}
                className="group inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-tight"
                style={{ color: "#C9A84C" }}
              >
                Review this question
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  )
}

// ---------- Layout helpers ----------

function Header({ count }: { count: number }) {
  return (
    <section className="mb-8">
      <Link
        href="/review"
        className="inline-flex items-center gap-1.5 text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors mb-6"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to Review
      </Link>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="h-px w-10"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
          }}
        />
        <p className={EYEBROW} style={{ color: "#C9A84C" }}>
          Review · Saved
        </p>
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#F0F0F0] leading-[1.05] mb-4">
        Saved{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          questions.
        </span>
      </h1>
      <p className="text-[15px] text-[#C0C0C0] leading-relaxed max-w-2xl">
        Questions you bookmarked with “Save for review”
        {count > 0 ? ` — ${count} saved` : ""}. They also surface near the top
        of your spaced-review queue. Tap the bookmark to remove one.
      </p>
    </section>
  )
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-4xl mx-auto">{children}</div>
    </div>
  )
}

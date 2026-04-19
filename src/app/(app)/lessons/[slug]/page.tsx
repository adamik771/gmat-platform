import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getAllLessons, getLessonBySlug } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import CompleteToggle from "./CompleteToggle"

export default async function LessonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lesson = getLessonBySlug(slug)
  if (!lesson) notFound()

  const lessons = getAllLessons()
  const currentIdx = lessons.findIndex((l) => l.slug === lesson.slug)
  const prev = currentIdx > 0 ? lessons[currentIdx - 1] : null
  const next = currentIdx < lessons.length - 1 ? lessons[currentIdx + 1] : null

  // Fetch this user's completion status for this lesson. Degrades to "not
  // completed" if Supabase is unreachable — mirrors the lessons list page.
  let initialCompleted = false
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const { data } = await supabase
        .from("lesson_completions")
        .select("lesson_slug")
        .eq("user_id", user.id)
        .eq("lesson_slug", slug)
        .maybeSingle()
      initialCompleted = !!data
    }
  } catch {
    // Swallow — treat as not completed.
  }

  const moduleLabel = `Module ${String(lesson.module).padStart(2, "0")}`

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <Link
          href="/lessons"
          className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Lessons
        </Link>

        <div className="flex flex-wrap items-center gap-2 mt-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#555555]">
            {moduleLabel}
          </span>
          <span
            className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
            style={{ backgroundColor: "rgba(201,168,76,0.08)", color: "#C9A84C" }}
          >
            {lesson.section}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#555555]">
            <Clock className="w-3 h-3" />
            {lesson.duration} min
          </span>
          {initialCompleted && (
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
              style={{ backgroundColor: "rgba(62,207,142,0.1)", color: "#3ECF8E" }}
            >
              <CheckCircle2 className="w-3 h-3" />
              Completed
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#F0F0F0] mt-3">{lesson.title}</h1>
        <p className="text-base text-[#888888] mt-2 leading-relaxed">{lesson.description}</p>
      </div>

      {/* Body */}
      <article className="rounded-xl border border-white/[0.08] bg-[#111111] px-6 py-8 sm:px-10 sm:py-10">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => (
              <h1
                {...props}
                className="text-2xl sm:text-3xl font-bold text-[#F0F0F0] mt-10 mb-5 first:mt-0"
              />
            ),
            h2: (props) => (
              <h2
                {...props}
                className="text-xl sm:text-2xl font-bold text-[#F0F0F0] mt-10 mb-4 first:mt-0"
              />
            ),
            h3: (props) => (
              <h3
                {...props}
                className="text-lg font-semibold text-[#F0F0F0] mt-8 mb-3"
              />
            ),
            h4: (props) => (
              <h4
                {...props}
                className="text-base font-semibold text-[#F0F0F0] mt-6 mb-2"
              />
            ),
            p: (props) => (
              <p {...props} className="text-[15px] leading-relaxed text-[#D8D8D8] my-4" />
            ),
            ul: (props) => (
              <ul {...props} className="list-disc pl-6 my-4 space-y-2 text-[15px] text-[#D8D8D8]" />
            ),
            ol: (props) => (
              <ol
                {...props}
                className="list-decimal pl-6 my-4 space-y-2 text-[15px] text-[#D8D8D8]"
              />
            ),
            li: (props) => <li {...props} className="leading-relaxed marker:text-[#555555]" />,
            strong: (props) => (
              <strong {...props} className="font-semibold text-[#F0F0F0]" />
            ),
            em: (props) => <em {...props} className="italic text-[#E8C97A]" />,
            hr: () => <hr className="my-10 border-0 border-t border-white/[0.08]" />,
            blockquote: (props) => (
              <blockquote
                {...props}
                className="my-6 border-l-2 pl-4 italic text-[#A8A8A8]"
                style={{ borderColor: "#C9A84C" }}
              />
            ),
            code: ({ className, ...props }) => {
              // react-markdown passes code-block nodes with a language- class;
              // inline code has no className. Style both but make inline smaller.
              const isBlock = className?.startsWith("language-")
              if (isBlock) {
                return (
                  <code
                    {...props}
                    className="font-mono text-xs text-[#F0F0F0] whitespace-pre-wrap"
                  />
                )
              }
              return (
                <code
                  {...props}
                  className="font-mono text-[13px] bg-white/[0.04] px-1.5 py-0.5 rounded"
                  style={{ color: "#C9A84C" }}
                />
              )
            },
            pre: (props) => (
              <pre
                {...props}
                className="my-5 p-4 rounded-lg bg-[#0A0A0A] border border-white/[0.06] overflow-x-auto"
              />
            ),
            a: (props) => (
              <a
                {...props}
                className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                style={{ color: "#C9A84C" }}
              />
            ),
            table: (props) => (
              <div className="my-6 overflow-x-auto rounded-lg border border-white/[0.08]">
                <table {...props} className="w-full border-collapse text-sm" />
              </div>
            ),
            thead: (props) => <thead {...props} className="bg-[#0F0F0F]" />,
            th: (props) => (
              <th
                {...props}
                className="text-left py-2.5 px-4 text-xs font-semibold uppercase tracking-wide text-[#888888] border-b border-white/[0.08]"
              />
            ),
            td: (props) => (
              <td
                {...props}
                className="py-2.5 px-4 text-[14px] text-[#D8D8D8] border-b border-white/[0.04]"
              />
            ),
          }}
        >
          {lesson.content}
        </ReactMarkdown>
      </article>

      {/* Mark-complete toggle */}
      <CompleteToggle
        slug={lesson.slug}
        initialCompleted={initialCompleted}
        nextSlug={next ? next.slug : null}
      />

      {/* Prev / Next nav */}
      <div className="grid sm:grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={`/lessons/${prev.slug}`}
            className="p-4 rounded-xl border border-white/[0.08] bg-[#111111] hover:border-white/[0.16] transition-colors group"
          >
            <p className="text-[10px] uppercase tracking-widest text-[#555555] flex items-center gap-1.5">
              <ArrowLeft className="w-3 h-3" />
              Previous
            </p>
            <p className="text-sm font-semibold text-[#F0F0F0] mt-1 truncate group-hover:text-[#E8C97A] transition-colors">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/lessons/${next.slug}`}
            className="p-4 rounded-xl border border-white/[0.08] bg-[#111111] hover:border-white/[0.16] transition-colors group text-right"
          >
            <p className="text-[10px] uppercase tracking-widest text-[#555555] flex items-center gap-1.5 justify-end">
              Next
              <ArrowRight className="w-3 h-3" />
            </p>
            <p className="text-sm font-semibold text-[#F0F0F0] mt-1 truncate group-hover:text-[#E8C97A] transition-colors">
              {next.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

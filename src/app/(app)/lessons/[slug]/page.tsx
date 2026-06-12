import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeCaretSup from "@/lib/rehype-caret-sup"
import { getAllLessons, getLessonBySlug } from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import CompleteToggle, { LessonReaderShell } from "./CompleteToggle"

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

  const article = (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}
      components={{
        h1: (props) => (
          <h1
            {...props}
            className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.05] mt-12 mb-6 first:mt-0"
            style={{ color: "var(--read-text)" }}
          />
        ),
        h2: (props) => (
          <h2
            {...props}
            className="font-display text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.01em] leading-[1.1] mt-12 mb-5 first:mt-0"
            style={{ color: "var(--read-text)" }}
          />
        ),
        h3: (props) => (
          <h3
            {...props}
            className="font-display text-lg font-semibold tracking-tight mt-10 mb-3"
            style={{ color: "var(--read-text)" }}
          />
        ),
        h4: (props) => (
          <h4
            {...props}
            className="font-display text-base font-semibold tracking-tight mt-8 mb-2"
            style={{ color: "var(--read-text)" }}
          />
        ),
        p: (props) => (
          <p
            {...props}
            className="text-[15px] leading-[1.75] my-5"
            style={{ color: "var(--read-text-body)" }}
          />
        ),
        ul: (props) => (
          <ul
            {...props}
            className="list-disc pl-6 my-5 space-y-2 text-[15px] leading-[1.75]"
            style={{ color: "var(--read-text-body)" }}
          />
        ),
        ol: (props) => (
          <ol
            {...props}
            className="list-decimal pl-6 my-5 space-y-2 text-[15px] leading-[1.75]"
            style={{ color: "var(--read-text-body)" }}
          />
        ),
        li: (props) => (
          <li
            {...props}
            className="leading-[1.75]"
            style={{ color: "var(--read-text-body)" }}
          />
        ),
        strong: (props) => (
          <strong
            {...props}
            className="font-semibold"
            style={{ color: "var(--read-text)" }}
          />
        ),
        em: (props) => (
          <em
            {...props}
            className="font-display-italic"
            style={{ color: "var(--read-gold)" }}
          />
        ),
        hr: () => (
          <hr
            className="my-12 border-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--read-gold-strong), transparent)",
            }}
          />
        ),
        blockquote: (props) => (
          <blockquote
            {...props}
            className="my-7 border-l-2 pl-5 font-display-italic text-[15px] leading-[1.75]"
            style={{
              borderColor: "var(--read-gold)",
              color: "var(--read-text-body)",
            }}
          />
        ),
        code: ({ className, ...props }) => {
          const isBlock = className?.startsWith("language-")
          if (isBlock) {
            return (
              <code
                {...props}
                className="font-mono text-xs whitespace-pre-wrap"
                style={{ color: "var(--read-text)" }}
              />
            )
          }
          return (
            <code
              {...props}
              className="font-mono text-[13px] px-1.5 py-0.5 rounded"
              style={{
                color: "var(--read-gold)",
                backgroundColor: "var(--read-gold-soft)",
              }}
            />
          )
        },
        pre: (props) => (
          <pre
            {...props}
            className="my-6 p-4 rounded-xl border overflow-x-auto"
            style={{
              backgroundColor: "var(--read-bg-inset)",
              borderColor: "var(--read-border)",
            }}
          />
        ),
        a: (props) => (
          <a
            {...props}
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "var(--read-gold)" }}
          />
        ),
        table: (props) => (
          <div
            className="my-7 overflow-x-auto rounded-xl border"
            style={{ borderColor: "var(--read-border-strong)" }}
          >
            <table {...props} className="w-full border-collapse text-sm" />
          </div>
        ),
        thead: (props) => (
          <thead {...props} style={{ backgroundColor: "var(--read-bg-inset)" }} />
        ),
        th: (props) => (
          <th
            {...props}
            className="text-left py-2.5 px-4 text-[10px] font-semibold uppercase tracking-[0.18em] border-b"
            style={{
              color: "var(--read-gold)",
              borderColor: "var(--read-border-strong)",
            }}
          />
        ),
        td: (props) => (
          <td
            {...props}
            className="py-2.5 px-4 text-[14px] border-b"
            style={{
              color: "var(--read-text-body)",
              borderColor: "var(--read-border)",
            }}
          />
        ),
      }}
    >
      {lesson.content}
    </ReactMarkdown>
  )

  return (
    <LessonReaderShell
      moduleLabel={moduleLabel}
      section={lesson.section}
      durationMinutes={lesson.duration}
      title={lesson.title}
      description={lesson.description}
      initialCompleted={initialCompleted}
      article={article}
      completeToggle={
        <CompleteToggle
          slug={lesson.slug}
          initialCompleted={initialCompleted}
          nextSlug={next ? next.slug : null}
        />
      }
      prev={prev ? { slug: prev.slug, title: prev.title } : null}
      next={next ? { slug: next.slug, title: next.title } : null}
    />
  )
}

import { notFound } from "next/navigation"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getSupabaseService } from "@/lib/supabase/service"
import { isAdmin } from "@/lib/admin-auth"
import AdminFeedbackClient, { type AdminFeedbackRow } from "./AdminFeedbackClient"

export const dynamic = "force-dynamic"

interface TableRow {
  id: string
  user_id: string | null
  kind: AdminFeedbackRow["kind"]
  message: string
  question_id: string | null
  rating: number | null
  tag: string | null
  source_path: string | null
  user_agent: string | null
  created_at: string
  status: AdminFeedbackRow["status"]
}

interface AggQuestion {
  questionId: string
  count: number
  tags: string[]
}

interface AggSourcePath {
  sourcePath: string
  count: number
}

/**
 * /admin/feedback — server-rendered triage queue for beta-feedback rows.
 *
 * Auth gate: trusted app_metadata.role=admin or the ADMIN_EMAILS bootstrap
 * allowlist. There's no client-side check — all auth runs here, server-side,
 * before the queue is ever rendered.
 *
 * Data sources, in order:
 *   1. `beta_feedback` table (preferred — once the migration in
 *      `src/lib/beta-feedback.ts::__schema_migration` has been applied).
 *   2. `user_metadata.beta_feedback` arrays from every user — covers the
 *      pre-migration window so feedback isn't lost. Read via
 *      `auth.admin.listUsers()` with the service-role key (small beta
 *      scale; pagination cap of 1000 is plenty for now).
 *
 * Both sources are merged into a single timeline, sorted newest-first.
 * Status updates only apply to table rows — `user_metadata` entries are
 * read-only until the table migration runs.
 */
export default async function AdminFeedbackPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!isAdmin(user)) notFound()

  const service = getSupabaseService()

  let tableMissing = false
  let tableRows: TableRow[] = []
  try {
    const { data, error } = await service
      .from("beta_feedback")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000)
    if (error) {
      const code = (error as { code?: string }).code
      const msg = error.message ?? ""
      if (code === "42P01" || /relation .* does not exist/i.test(msg)) {
        tableMissing = true
      } else {
        throw error
      }
    } else if (Array.isArray(data)) {
      tableRows = data as TableRow[]
    }
  } catch (e) {
    console.error("admin/feedback: table read error", e)
  }

  // Always fetch users — needed both for email resolution on table rows
  // and for user_metadata fallback enumeration.
  const emailsByUserId = new Map<string, string>()
  const metadataRows: AdminFeedbackRow[] = []
  try {
    const { data: usersData } = await service.auth.admin.listUsers({ perPage: 1000 })
    for (const u of usersData?.users ?? []) {
      if (u.email) emailsByUserId.set(u.id, u.email)
      const meta = u.user_metadata as { beta_feedback?: unknown } | undefined
      const arr = Array.isArray(meta?.beta_feedback) ? meta!.beta_feedback : []
      for (const raw of arr as Array<unknown>) {
        if (!raw || typeof raw !== "object") continue
        const e = raw as Record<string, unknown>
        const kind = e.kind
        if (kind !== "general" && kind !== "question" && kind !== "bug" && kind !== "rating") {
          continue
        }
        metadataRows.push({
          id: typeof e.id === "string" ? e.id : `meta-${u.id}-${String(e.createdAt ?? "")}`,
          user_id: u.id,
          user_email: u.email ?? null,
          kind,
          message: typeof e.message === "string" ? e.message : "",
          question_id: typeof e.questionId === "string" ? e.questionId : null,
          rating: typeof e.rating === "number" ? e.rating : null,
          tag: typeof e.tag === "string" ? e.tag : null,
          source_path: typeof e.sourcePath === "string" ? e.sourcePath : null,
          user_agent: typeof e.userAgent === "string" ? e.userAgent : null,
          created_at: typeof e.createdAt === "string" ? e.createdAt : new Date().toISOString(),
          status: "open",
          source: "user_metadata",
        })
      }
    }
  } catch (e) {
    console.error("admin/feedback: listUsers / metadata read error", e)
  }

  const tableNormalised: AdminFeedbackRow[] = tableRows.map((r) => ({
    id: r.id,
    user_id: r.user_id,
    user_email: r.user_id ? emailsByUserId.get(r.user_id) ?? null : null,
    kind: r.kind,
    message: r.message ?? "",
    question_id: r.question_id,
    rating: r.rating,
    tag: r.tag,
    source_path: r.source_path,
    user_agent: r.user_agent,
    created_at: r.created_at,
    status: r.status,
    source: "table",
  }))

  const allRows = [...tableNormalised, ...metadataRows].sort((a, b) =>
    b.created_at.localeCompare(a.created_at)
  )

  // Aggregates: last 7 days
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
  const recent = allRows.filter((r) => {
    const ts = new Date(r.created_at).getTime()
    return Number.isFinite(ts) && ts >= sevenDaysAgo
  })

  const qMap = new Map<string, { count: number; tags: Set<string> }>()
  const sMap = new Map<string, number>()
  for (const r of recent) {
    if (r.kind === "question" && r.question_id) {
      const slot = qMap.get(r.question_id) ?? { count: 0, tags: new Set<string>() }
      slot.count += 1
      if (r.tag) slot.tags.add(r.tag)
      qMap.set(r.question_id, slot)
    }
    if (r.kind === "bug" && r.source_path) {
      sMap.set(r.source_path, (sMap.get(r.source_path) ?? 0) + 1)
    }
  }

  const topQuestions: AggQuestion[] = Array.from(qMap.entries())
    .map(([questionId, v]) => ({ questionId, count: v.count, tags: Array.from(v.tags) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)

  const topBugSources: AggSourcePath[] = Array.from(sMap.entries())
    .map(([sourcePath, count]) => ({ sourcePath, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)

  const ratings = allRows.filter((r) => r.kind === "rating" && typeof r.rating === "number")
  const avgRating =
    ratings.length > 0
      ? ratings.reduce((acc, r) => acc + (r.rating ?? 0), 0) / ratings.length
      : null

  return (
    <AdminFeedbackClient
      rows={allRows}
      tableMissing={tableMissing}
      tableRowCount={tableRows.length}
      metadataRowCount={metadataRows.length}
      topQuestions={topQuestions}
      topBugSources={topBugSources}
      avgRating={avgRating}
      ratingCount={ratings.length}
    />
  )
}

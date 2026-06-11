import { createSupabaseServer } from "@/lib/supabase/server"

/**
 * POST /api/official-exams — persist official mba.com practice-exam
 * scores to Supabase Auth's `user_metadata.official_exam_scores`.
 *
 * The product treats the six official GMAT Focus practice exams as the
 * calibrated score signal; the student types each result in here after
 * sitting the exam under full conditions. Stored shape:
 *
 *   official_exam_scores: Array<{
 *     date: string        // ISO YYYY-MM-DD, unique key
 *     total: number       // 205-805
 *     quant?: number|null // 60-90
 *     verbal?: number|null
 *     di?: number|null
 *     label?: string      // optional free text, <= 60 chars
 *   }>
 *
 * Body: { action: "add" | "remove", entry?: {...}, date?: string }.
 * "add" upserts by date (array kept sorted ascending by date, hard cap
 * 12 entries — new dates beyond the cap are rejected). "remove" deletes
 * the entry with the given date.
 */

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const MAX_ENTRIES = 12

interface OfficialExamEntry {
  date: string
  total: number
  quant?: number | null
  verbal?: number | null
  di?: number | null
  label?: string
}

function isValidSectionScore(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 60 &&
    value <= 90
  )
}

/** Parse whatever is currently stored into a clean entries array. */
function readStoredEntries(metadata: unknown): OfficialExamEntry[] {
  if (!metadata || typeof metadata !== "object") return []
  const raw = (metadata as Record<string, unknown>).official_exam_scores
  if (!Array.isArray(raw)) return []
  const out: OfficialExamEntry[] = []
  for (const item of raw) {
    if (!item || typeof item !== "object") continue
    const rec = item as Record<string, unknown>
    if (typeof rec.date !== "string" || !DATE_RE.test(rec.date)) continue
    if (typeof rec.total !== "number") continue
    const entry: OfficialExamEntry = { date: rec.date, total: rec.total }
    if (isValidSectionScore(rec.quant)) entry.quant = rec.quant
    if (isValidSectionScore(rec.verbal)) entry.verbal = rec.verbal
    if (isValidSectionScore(rec.di)) entry.di = rec.di
    if (typeof rec.label === "string" && rec.label.trim() !== "") {
      entry.label = rec.label.trim().slice(0, 60)
    }
    out.push(entry)
  }
  return out
}

export async function POST(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: {
    action?: unknown
    entry?: {
      date?: unknown
      total?: unknown
      quant?: unknown
      verbal?: unknown
      di?: unknown
      label?: unknown
    }
    date?: unknown
  }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  if (body.action !== "add" && body.action !== "remove") {
    return Response.json(
      { error: 'action must be "add" or "remove"' },
      { status: 400 }
    )
  }

  const entries = readStoredEntries(user.user_metadata)

  if (body.action === "remove") {
    if (typeof body.date !== "string" || !DATE_RE.test(body.date)) {
      return Response.json(
        { error: "date must be an ISO date (YYYY-MM-DD)" },
        { status: 400 }
      )
    }
    const next = entries.filter((e) => e.date !== body.date)
    if (next.length === entries.length) {
      return Response.json(
        { error: "No entry found for that date" },
        { status: 404 }
      )
    }
    const { error } = await supabase.auth.updateUser({
      data: { official_exam_scores: next },
    })
    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }
    return Response.json({ ok: true, official_exam_scores: next })
  }

  // action === "add"
  const raw = body.entry
  if (!raw || typeof raw !== "object") {
    return Response.json(
      { error: "entry is required for action=add" },
      { status: 400 }
    )
  }

  if (typeof raw.date !== "string" || !DATE_RE.test(raw.date)) {
    return Response.json(
      { error: "entry.date must be an ISO date (YYYY-MM-DD)" },
      { status: 400 }
    )
  }

  if (
    typeof raw.total !== "number" ||
    !Number.isInteger(raw.total) ||
    raw.total < 205 ||
    raw.total > 805
  ) {
    return Response.json(
      { error: "entry.total must be an integer between 205 and 805" },
      { status: 400 }
    )
  }

  const entry: OfficialExamEntry = { date: raw.date, total: raw.total }

  for (const key of ["quant", "verbal", "di"] as const) {
    const value = raw[key]
    if (value === undefined || value === null) continue
    if (!isValidSectionScore(value)) {
      return Response.json(
        { error: `entry.${key} must be an integer between 60 and 90` },
        { status: 400 }
      )
    }
    entry[key] = value
  }

  if (raw.label !== undefined && raw.label !== null) {
    if (typeof raw.label !== "string" || raw.label.length > 60) {
      return Response.json(
        { error: "entry.label must be a string of at most 60 characters" },
        { status: 400 }
      )
    }
    const trimmed = raw.label.trim()
    if (trimmed !== "") entry.label = trimmed
  }

  const existingIndex = entries.findIndex((e) => e.date === entry.date)
  if (existingIndex === -1 && entries.length >= MAX_ENTRIES) {
    return Response.json(
      { error: `Cannot store more than ${MAX_ENTRIES} official exam scores` },
      { status: 400 }
    )
  }

  const next =
    existingIndex >= 0
      ? entries.map((e, i) => (i === existingIndex ? entry : e))
      : [...entries, entry]
  next.sort((a, b) => a.date.localeCompare(b.date))

  const { error } = await supabase.auth.updateUser({
    data: { official_exam_scores: next },
  })
  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ ok: true, official_exam_scores: next })
}

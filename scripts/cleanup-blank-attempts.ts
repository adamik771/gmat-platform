/**
 * Repair historical practice/review sessions that persisted unanswered
 * questions as wrong answers (selected_answer null, time_spent_ms 0,
 * is_correct false). SessionClient no longer writes these (blanks are dropped
 * at save time); this cleans the rows already in the database, which poison
 * per-topic accuracy and the analytics readers.
 *
 * Known affected prod rows at time of writing: session
 * 74377552-a028-4a98-b63c-1c7240fc9bb7 (review-quant-2026-07-01, 9 blanks) and
 * an April session cbd741b7* (10 blank-ish rows + inconsistent accuracy).
 *
 * MOCK sessions (slug mock-*) are intentionally untouched: a timed-out mock
 * scores unanswered as wrong on purpose (exam realism).
 *
 * KNOWN LIMITATION: a question where the user picked an option (or spent time
 * reading) but never pressed Submit was historically stored with that
 * selection/time and is indistinguishable from a real answer in the database —
 * those rows are left alone and keep counting. Only the unambiguous
 * never-touched signature (null answer + 0ms) is repaired.
 *
 * For each non-mock session with blank attempts, --apply:
 *   - deletes the blank attempt rows
 *   - recomputes total_questions / correct_count / accuracy over what remains
 *   - deletes the session entirely if nothing answered remains
 *
 * Dry-run (default) prints what WOULD change and writes nothing:
 *   node --experimental-strip-types --no-warnings --env-file=.env.local \
 *     scripts/cleanup-blank-attempts.ts
 * Apply:
 *   ... scripts/cleanup-blank-attempts.ts --apply
 */
import { createClient } from "@supabase/supabase-js"

const APPLY = process.argv.includes("--apply")

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
  process.exit(1)
}
const admin = createClient(url, key, {
  auth: { autoRefreshToken: false, persistSession: false },
})

// A blank = never submitted: no answer AND no time on the question. Submitted
// two-part / grouped answers always carry time, so they never match this.
const { data: blanks, error } = await admin
  .from("practice_attempts")
  .select("id, session_id, user_id")
  .is("selected_answer", null)
  .eq("time_spent_ms", 0)
  .eq("is_correct", false)
if (error) {
  console.error("read failed:", error.message)
  process.exit(1)
}

const bySession = new Map<string, string[]>()
for (const b of blanks ?? []) {
  const list = bySession.get(b.session_id as string) ?? []
  list.push(b.id as string)
  bySession.set(b.session_id as string, list)
}
console.log(
  `${APPLY ? "APPLY" : "DRY-RUN"} — ${blanks?.length ?? 0} blank attempts across ${bySession.size} sessions\n`
)

/** Delete blank attempts + any error-log tags pointing at them (a blank shown
 *  as a wrong answer was taggable in the error log — those tags are artifacts
 *  too). Ordered tags-first; every write is checked. Returns null on success,
 *  or the failing step's message — the caller must then leave the session
 *  untouched so rows and stored totals never diverge. */
async function deleteBlanks(blankIds: string[]): Promise<string | null> {
  const { error: tagErr } = await admin
    .from("error_tags")
    .delete()
    .in("attempt_id", blankIds)
  if (tagErr) return `error_tags delete: ${tagErr.message}`
  const { error: attErr } = await admin
    .from("practice_attempts")
    .delete()
    .in("id", blankIds)
  if (attErr) return `attempts delete: ${attErr.message}`
  return null
}

let fixed = 0
let deleted = 0
let skippedMock = 0
let failed = 0
for (const [sessionId, blankIds] of bySession) {
  const { data: session, error: sessErr } = await admin
    .from("practice_sessions")
    .select("id, slug, user_id, total_questions, correct_count, accuracy")
    .eq("id", sessionId)
    .maybeSingle()
  if (sessErr) {
    console.log(`  FAILED  ${sessionId} — session read: ${sessErr.message} (skipped)`)
    failed++
    continue
  }
  if (!session) {
    console.log(`  ORPHAN  ${sessionId} — ${blankIds.length} blanks, no session row`)
    continue
  }
  if (String(session.slug).startsWith("mock-")) {
    // Mock timeouts intentionally record unanswered as wrong — leave them.
    skippedMock++
    continue
  }
  const { data: remaining, error: remErr } = await admin
    .from("practice_attempts")
    .select("id, is_correct")
    .eq("session_id", sessionId)
    .not("id", "in", `(${blankIds.join(",")})`)
  if (remErr) {
    // A failed read MUST NOT read as "zero answered" — that branch deletes the
    // whole session, real answers included. Skip and report instead.
    console.log(
      `  FAILED  ${session.slug} (${sessionId}) — remaining-attempts read: ${remErr.message} (skipped)`
    )
    failed++
    continue
  }
  const answered = remaining?.length ?? 0
  const correct = (remaining ?? []).filter((a) => a.is_correct === true).length
  const accuracy = answered === 0 ? 0 : Math.round((correct / answered) * 100)

  if (answered === 0) {
    console.log(
      `  ${APPLY ? "DELETE" : "WOULD DELETE"} session ${session.slug} (${sessionId}) — all ${blankIds.length} attempts blank`
    )
    if (APPLY) {
      const err = await deleteBlanks(blankIds)
      if (err) {
        console.log(`  FAILED  ${session.slug} (${sessionId}) — ${err}; session left untouched`)
        failed++
        continue
      }
      const { error: delErr } = await admin
        .from("practice_sessions")
        .delete()
        .eq("id", sessionId)
      if (delErr) {
        console.log(
          `  FAILED  ${session.slug} (${sessionId}) — session delete: ${delErr.message} (attempts already removed; re-run to finish)`
        )
        failed++
        continue
      }
    }
    deleted++
    continue
  }

  console.log(
    `  ${APPLY ? "FIX" : "WOULD FIX"} ${session.slug} (${sessionId}): drop ${blankIds.length} blanks; ` +
      `${session.correct_count}/${session.total_questions} @${session.accuracy}% -> ${correct}/${answered} @${accuracy}%`
  )
  if (APPLY) {
    const err = await deleteBlanks(blankIds)
    if (err) {
      console.log(`  FAILED  ${session.slug} (${sessionId}) — ${err}; totals left untouched`)
      failed++
      continue
    }
    const { error: updErr } = await admin
      .from("practice_sessions")
      .update({
        total_questions: answered,
        correct_count: correct,
        accuracy,
      })
      .eq("id", sessionId)
    if (updErr) {
      console.log(
        `  FAILED  ${session.slug} (${sessionId}) — totals update: ${updErr.message} (blanks removed; re-run to finish)`
      )
      failed++
      continue
    }
  }
  fixed++
}
console.log(
  `\n${APPLY ? "Fixed" : "Would fix"}: ${fixed}. ${APPLY ? "Deleted" : "Would delete"}: ${deleted}. ` +
    `Failed (skipped, safe to re-run): ${failed}. Mock sessions left untouched: ${skippedMock}.`
)
if (failed > 0) process.exitCode = 1

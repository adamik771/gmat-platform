import { getSupabaseService } from "@/lib/supabase/service"
import { officialExamReminder } from "@/lib/official-exams"
import {
  officialExamReminderEmail,
  type ReminderStage,
} from "@/lib/reminder-emails"
import { emailConfigured, sendEmail } from "@/lib/email"

// Node runtime: uses the service-role client + fetch to Resend.
export const runtime = "nodejs"
// Never cache — this is a scheduled side-effecting job.
export const dynamic = "force-dynamic"

/**
 * Daily reminder cron. Wire it in vercel.json (crons) hitting this path; Vercel
 * sends `Authorization: Bearer ${CRON_SECRET}`. Iterates users, and for anyone
 * whose next weekly official practice exam is due within a week (or overdue)
 * and who hasn't opted out, sends one email per (slot, stage) — week-ahead,
 * day-of, then one overdue nudge — tracked in user_metadata.reminder_state so
 * it never double-sends.
 */

const STAGE_RANK: Record<ReminderStage, number> = { week: 1, day: 2, overdue: 3 }

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  if (!secret) {
    return Response.json(
      { ok: false, error: "CRON_SECRET unset — refusing to run." },
      { status: 503 },
    )
  }
  const auth = request.headers.get("authorization")
  if (auth !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 })
  }
  if (!emailConfigured()) {
    return Response.json({ ok: true, skipped: "email not configured", sent: 0 })
  }

  const service = getSupabaseService()
  const todayIso = new Date().toISOString().slice(0, 10)

  let checked = 0
  let sent = 0
  let errors = 0
  const MAX_PAGES = 50

  for (let page = 1; page <= MAX_PAGES; page++) {
    const { data, error } = await service.auth.admin.listUsers({ page, perPage: 100 })
    if (error || !data || data.users.length === 0) break

    for (const user of data.users) {
      checked++
      const meta = (user.user_metadata ?? {}) as Record<string, unknown>
      const email = user.email
      if (!email || !user.email_confirmed_at) continue

      // Opt-out: exam reminders default ON; only skip when explicitly false.
      const prefs = meta.notification_prefs as Record<string, boolean> | undefined
      if (prefs && prefs.exams === false) continue

      const examDate = typeof meta.exam_date === "string" ? meta.exam_date : null
      if (!examDate) continue
      const scores = meta.official_exam_scores
      const officialCount = Array.isArray(scores) ? scores.length : 0

      const reminder = officialExamReminder(examDate, todayIso, officialCount)
      if (!reminder) continue

      const stage: ReminderStage = reminder.overdue
        ? "overdue"
        : reminder.daysUntil === 0
          ? "day"
          : "week"

      // Idempotency: send once per (slot, stage), advancing through the stages.
      const prevState = (meta.reminder_state as
        | { officialExam?: { slot?: string; stage?: ReminderStage } }
        | undefined)?.officialExam
      const sameSlot = prevState?.slot === reminder.dueDate
      const prevRank = sameSlot && prevState?.stage ? STAGE_RANK[prevState.stage] : 0
      if (sameSlot && STAGE_RANK[stage] <= prevRank) continue

      const firstName =
        typeof meta.full_name === "string" && meta.full_name.trim()
          ? meta.full_name.trim().split(/\s+/)[0]
          : null

      const { subject, html, text } = officialExamReminderEmail({
        firstName,
        stage,
        dueLabel: formatDue(reminder.dueDate),
        daysUntil: reminder.daysUntil,
        enteredCount: reminder.enteredCount,
        totalSlots: reminder.totalSlots,
      })

      const result = await sendEmail({ to: email, subject, html, text })
      if (!result.ok) {
        if (!result.skipped) errors++
        continue
      }
      sent++

      // Record only after a successful send, so failures retry next run.
      const nextMeta = {
        ...meta,
        reminder_state: {
          ...(meta.reminder_state as Record<string, unknown> | undefined),
          officialExam: { slot: reminder.dueDate, stage },
        },
      }
      const { error: updErr } = await service.auth.admin.updateUserById(user.id, {
        user_metadata: nextMeta,
      })
      if (updErr) errors++
    }

    if (data.users.length < 100) break
  }

  return Response.json({ ok: true, checked, sent, errors })
}

function formatDue(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })
}

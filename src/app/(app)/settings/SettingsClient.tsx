"use client"

import { Suspense, useEffect, useState, useTransition } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import {
  AlertCircle,
  Bell,
  CheckCircle2,
  CreditCard,
  Download,
  Loader2,
  Mail,
  Pencil,
  Save,
  ShieldAlert,
  Trash2,
  User,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { createSupabaseBrowser } from "@/lib/supabase/browser"

export interface PurchaseRow {
  id: string
  planId: string
  planLabel: string
  amountCents: number
  currency: string
  paidAt: string
}

export interface NotificationPrefs {
  exams: boolean
  streak: boolean
  weekly: boolean
  tips: boolean
  coaching: boolean
}

interface Props {
  initialName: string
  initialEmail: string
  initialExamDate: string | null
  initialTargetScore: number | null
  initialEnglishNative: boolean | null
  initialPriorGmatAttempt: boolean | null
  purchases: PurchaseRow[]
  initialPrefs: NotificationPrefs
}

type Tab = "profile" | "billing" | "notifications"

export default function SettingsClient({
  initialName,
  initialEmail,
  initialExamDate,
  initialTargetScore,
  initialEnglishNative,
  initialPriorGmatAttempt,
  purchases,
  initialPrefs,
}: Props) {
  const [tab, setTab] = useState<Tab>("profile")

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "profile", label: "Profile", icon: User },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
  ]

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
        aria-hidden
      />

      <div className="relative max-w-3xl mx-auto space-y-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Account
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-[#F0F0F0] leading-[1.05] mb-3">
            Your{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              preferences.
            </span>
          </h1>
          <p className="text-[15px] leading-[1.75] text-[#C0C0C0] max-w-xl">
            Profile, exam date, persona layers, billing, and notification preferences — all in one place.
          </p>
        </div>

        <div
          className="flex gap-1 p-1 rounded-xl"
          style={{
            backgroundColor: "#0A0A0A",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {tabs.map((t) => {
            const Icon = t.icon
            const active = tab === t.id
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-semibold tracking-tight transition-all flex-1 justify-center",
                  active
                    ? "text-[#F0F0F0]"
                    : "text-[#888888] hover:text-[#C0C0C0]"
                )}
                style={
                  active
                    ? {
                        backgroundColor: "#141414",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                      }
                    : {}
                }
              >
                <Icon
                  className="w-4 h-4"
                  style={active ? { color: "#C9A84C" } : {}}
                />
                {t.label}
              </button>
            )
          })}
        </div>

        {tab === "profile" && (
          <>
            <ProfileTab
              initialName={initialName}
              initialEmail={initialEmail}
              initialExamDate={initialExamDate}
              targetScore={initialTargetScore}
              initialEnglishNative={initialEnglishNative}
              initialPriorGmatAttempt={initialPriorGmatAttempt}
            />
            <DangerZone />
          </>
        )}

        {tab === "billing" && <BillingTab purchases={purchases} />}

        {tab === "notifications" && <NotificationsTab initialPrefs={initialPrefs} />}
      </div>
    </div>
  )
}

function SectionShell({
  eyebrow,
  title,
  italic,
  description,
  children,
}: {
  eyebrow: string
  title: string
  italic: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span
          className="h-px w-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
          }}
        />
        <p
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#C9A84C" }}
        >
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-[#F0F0F0] mb-3 leading-[1.1]">
        {title}{" "}
        <span className="font-display-italic" style={{ color: "#C9A84C" }}>
          {italic}
        </span>
      </h2>
      {description && (
        <p className="text-[14px] leading-[1.75] text-[#C0C0C0] mb-6 max-w-xl">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

function FieldLabel({
  children,
  htmlFor,
}: {
  children: React.ReactNode
  htmlFor?: string
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[10px] uppercase tracking-[0.18em] font-semibold text-[#C9A84C] mb-2"
    >
      {children}
    </label>
  )
}

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-xl text-[14px] text-[#F0F0F0] outline-none transition-all focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C]/40"

const INPUT_STYLE: React.CSSProperties = {
  backgroundColor: "#0A0A0A",
  border: "1px solid rgba(255,255,255,0.08)",
}

function DangerZone() {
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const [confirmText, setConfirmText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleDelete() {
    if (confirmText !== "DELETE") return
    setDeleting(true)
    setError(null)
    try {
      const res = await fetch("/api/account/delete", { method: "POST" })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setError(data.error ?? "Could not delete your account.")
        setDeleting(false)
        return
      }
      // Account is gone server-side — clear the local session and leave.
      try {
        await createSupabaseBrowser().auth.signOut()
      } catch {
        // Session already invalid; ignore.
      }
      router.push("/")
      router.refresh()
    } catch {
      setError("Network error. Please try again.")
      setDeleting(false)
    }
  }

  return (
    <div className="mt-12">
      <SectionShell
        eyebrow="Your data"
        title="Export or"
        italic="delete."
        description="Download everything we hold about you, or permanently delete your account. Deletion removes your profile, progress, practice history, error log, and purchase records — and cannot be undone."
      >
        <div className="space-y-4">
          <div
            className="flex items-center justify-between gap-4 p-4 rounded-xl"
            style={{ backgroundColor: "#0A0A0A", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <p className="text-[14px] font-semibold text-[#F0F0F0]">Export my data</p>
              <p className="text-[13px] text-[#888888] mt-0.5">
                A JSON file with your profile, progress, and practice history.
              </p>
            </div>
            <a
              href="/api/account/export"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold whitespace-nowrap border border-white/[0.12] text-[#F0F0F0] transition-all hover:opacity-90"
            >
              <Download className="w-4 h-4" />
              Export
            </a>
          </div>

          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: "rgba(255,68,68,0.05)", border: "1px solid rgba(255,68,68,0.2)" }}
          >
            <div className="flex items-start gap-2.5 mb-3">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#FF4444" }} />
              <div>
                <p className="text-[14px] font-semibold" style={{ color: "#FF6B6B" }}>
                  Delete account
                </p>
                <p className="text-[13px] text-[#C0C0C0] mt-0.5">
                  Permanent and irreversible. All of your data is erased.
                </p>
              </div>
            </div>

            {!confirming ? (
              <button
                onClick={() => setConfirming(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "rgba(255,68,68,0.12)",
                  color: "#FF6B6B",
                  border: "1px solid rgba(255,68,68,0.3)",
                }}
              >
                <Trash2 className="w-4 h-4" />
                Delete account
              </button>
            ) : (
              <div className="space-y-3">
                <p className="text-[13px] text-[#C0C0C0]">
                  Type <span className="font-mono font-semibold text-[#F0F0F0]">DELETE</span> to confirm.
                </p>
                <input
                  type="text"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="DELETE"
                  className="w-full max-w-xs px-4 py-2.5 rounded-xl text-[14px] text-[#F0F0F0] placeholder-[#555555] outline-none transition-all focus:ring-2 focus:ring-[#FF4444]/30"
                  style={{ backgroundColor: "#0A0A0A", border: "1px solid rgba(255,68,68,0.3)" }}
                />
                {error && (
                  <div className="flex items-start gap-2 text-[13px]" style={{ color: "#FF4444" }}>
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}
                <div className="flex gap-2">
                  <button
                    onClick={handleDelete}
                    disabled={confirmText !== "DELETE" || deleting}
                    aria-busy={deleting}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#FF4444", color: "#0A0A0A" }}
                  >
                    {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                    Permanently delete
                  </button>
                  <button
                    onClick={() => {
                      setConfirming(false)
                      setConfirmText("")
                      setError(null)
                    }}
                    disabled={deleting}
                    className="px-4 py-2.5 rounded-xl text-[13px] font-semibold text-[#888888] transition-colors hover:text-[#C0C0C0]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionShell>
    </div>
  )
}

function ProfileTab({
  initialName,
  initialEmail,
  initialExamDate,
  targetScore,
  initialEnglishNative,
  initialPriorGmatAttempt,
}: {
  initialName: string
  initialEmail: string
  initialExamDate: string | null
  targetScore: number | null
  initialEnglishNative: boolean | null
  initialPriorGmatAttempt: boolean | null
}) {
  const [name, setName] = useState(initialName)
  const [examDate, setExamDate] = useState(initialExamDate ?? "")
  const [englishNative, setEnglishNative] = useState<boolean | null>(
    initialEnglishNative,
  )
  const [priorAttempt, setPriorAttempt] = useState<boolean | null>(
    initialPriorGmatAttempt,
  )
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [, startTransition] = useTransition()
  const router = useRouter()

  const nameDirty = name !== initialName
  const examDirty = examDate !== (initialExamDate ?? "")
  const englishDirty = englishNative !== initialEnglishNative
  const priorDirty = priorAttempt !== initialPriorGmatAttempt
  const dirty = nameDirty || examDirty || englishDirty || priorDirty

  async function save() {
    if (!dirty || saving) return
    setSaving(true)
    setStatus("idle")
    setErrorMessage(null)

    const patch: Record<string, string | boolean | null> = {}
    if (nameDirty) patch.full_name = name
    if (examDirty) patch.exam_date = examDate === "" ? null : examDate
    if (englishDirty) patch.english_native = englishNative
    if (priorDirty) patch.prior_gmat_attempt = priorAttempt

    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Request failed (${res.status})`)
      }
      setStatus("saved")
      startTransition(() => router.refresh())
      setTimeout(() => setStatus((s) => (s === "saved" ? "idle" : s)), 2500)
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-10">
      <SectionShell
        eyebrow="Profile"
        title="Who you"
        italic="are."
        description="Your name and email shape how Zakarian addresses you across the product. Exam date drives plan pacing."
      >
        <div
          className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
          style={{
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <FieldLabel htmlFor="settings-full-name">Full name</FieldLabel>
              <input
                id="settings-full-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={120}
                className={INPUT_CLASS}
                style={INPUT_STYLE}
              />
            </div>
            <Suspense
              fallback={<EmailFieldFallback currentEmail={initialEmail} />}
            >
              <EmailField currentEmail={initialEmail} />
            </Suspense>
            <div>
              <FieldLabel>Target GMAT score</FieldLabel>
              <div
                className="w-full px-4 py-3 rounded-xl text-[14px] flex items-center justify-between"
                style={{
                  backgroundColor: "#080808",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className={
                    targetScore !== null
                      ? "text-[#F0F0F0] font-medium"
                      : "text-[#555555] italic"
                  }
                >
                  {targetScore !== null ? targetScore : "Not set"}
                </span>
                <Link
                  href="/dashboard"
                  className="text-[11px] underline underline-offset-2 decoration-[rgba(201,168,76,0.4)] text-[#888888] hover:text-[#C9A84C] hover:decoration-[#C9A84C] transition-colors"
                >
                  Edit on dashboard
                </Link>
              </div>
            </div>
            <div>
              <FieldLabel htmlFor="settings-exam-date">Exam date</FieldLabel>
              <input
                id="settings-exam-date"
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className={INPUT_CLASS}
                style={{ ...INPUT_STYLE, colorScheme: "dark" }}
              />
            </div>
          </div>

          <div className="mt-8 pt-7 border-t border-white/[0.06] space-y-6">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2"
                style={{ color: "#C9A84C" }}
              >
                Persona layers
              </p>
              <p className="text-[13px] text-[#C0C0C0] leading-[1.7]">
                Optional. Tailors your study plan emphasis on top of the
                baseline persona derived from your official exam scores.
              </p>
            </div>
            <TriStateRow
              label="Is English your first language?"
              subtitle="A non-native signal adds extra verbal (RC + CR) emphasis to your plan."
              value={englishNative}
              onChange={setEnglishNative}
              positiveLabel="Yes"
              negativeLabel="No, non-native"
            />
            <TriStateRow
              label="Have you taken the real GMAT before?"
              subtitle="A retaker signal shifts emphasis toward post-mortem + review behaviour."
              value={priorAttempt}
              onChange={setPriorAttempt}
              positiveLabel="Yes, I'm a retaker"
              negativeLabel="No, first attempt"
            />
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={save}
              disabled={saving || !dirty}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold tracking-tight transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saving ? "Saving…" : "Save changes"}
            </button>
            {status === "saved" && (
              <span
                role="status"
                aria-live="polite"
                className="inline-flex items-center gap-1.5 text-[12px] font-medium"
                style={{ color: "#3ECF8E" }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                Saved
              </span>
            )}
            {status === "error" && errorMessage && (
              <span
                role="alert"
                aria-live="polite"
                className="inline-flex items-center gap-1.5 text-[12px]"
                style={{ color: "#FF4444" }}
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {errorMessage}
              </span>
            )}
          </div>
        </div>
      </SectionShell>
    </div>
  )
}

function TriStateRow({
  label,
  subtitle,
  value,
  onChange,
  positiveLabel,
  negativeLabel,
}: {
  label: string
  subtitle: string
  value: boolean | null
  onChange: (next: boolean | null) => void
  positiveLabel: string
  negativeLabel: string
}) {
  return (
    <div>
      <p className="text-[14px] font-semibold text-[#F0F0F0] mb-1 tracking-tight">
        {label}
      </p>
      <p className="text-[13px] text-[#C0C0C0] leading-[1.6] mb-3">
        {subtitle}
      </p>
      <div className="flex flex-wrap gap-2">
        {(
          [
            { v: true, text: positiveLabel },
            { v: false, text: negativeLabel },
          ] as const
        ).map((opt) => {
          const active = value === opt.v
          return (
            <button
              key={String(opt.v)}
              type="button"
              onClick={() => onChange(active ? null : opt.v)}
              className={cn(
                "px-4 py-2 rounded-lg text-[12px] font-semibold tracking-tight border transition-all",
                active
                  ? "text-[#0A0A0A] hover:scale-[1.02]"
                  : "border-white/[0.08] text-[#888888] hover:text-[#F0F0F0] hover:border-white/[0.16]"
              )}
              style={
                active
                  ? { backgroundColor: "#C9A84C", borderColor: "#C9A84C" }
                  : {}
              }
            >
              {opt.text}
            </button>
          )
        })}
        {value === null && (
          <span className="text-[11px] text-[#555555] self-center italic ml-1">
            Not answered
          </span>
        )}
      </div>
    </div>
  )
}

function BillingTab({ purchases }: { purchases: PurchaseRow[] }) {
  const latest = purchases[0] ?? null

  return (
    <div className="space-y-10">
      <SectionShell
        eyebrow="Billing"
        title="Current"
        italic="plan."
        description="Your active plan and complete purchase history. Need an invoice or refund? Reply to your confirmation email."
      >
        <div
          className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
          style={{
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          {latest ? (
            <div
              className="relative flex items-center justify-between p-6 rounded-2xl border overflow-hidden gap-4"
              style={{
                borderColor: "rgba(201,168,76,0.25)",
                backgroundColor: "rgba(201,168,76,0.04)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(201,168,76,0.1) 0%, transparent 60%)",
                }}
                aria-hidden
              />
              <div className="relative min-w-0">
                <p className="font-display text-[1.75rem] font-semibold text-[#F0F0F0] tracking-tight leading-none mb-2">
                  {latest.planLabel}
                </p>
                <p className="text-[13px] text-[#C0C0C0]">
                  Activated {formatDate(latest.paidAt)} ·{" "}
                  {formatMoney(latest.amountCents, latest.currency)} paid
                </p>
              </div>
              <div
                className="relative px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-tight flex-shrink-0"
                style={{
                  backgroundColor: "rgba(62,207,142,0.1)",
                  color: "#3ECF8E",
                }}
              >
                Active
              </div>
            </div>
          ) : (
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-dashed border-white/[0.12]"
              style={{ backgroundColor: "#0A0A0A" }}
            >
              <div>
                <p className="text-[15px] font-semibold text-[#F0F0F0] tracking-tight mb-1">
                  No plan yet
                </p>
                <p className="text-[13px] text-[#C0C0C0] leading-[1.6] max-w-sm">
                  Pick a package on the pricing page to unlock the full
                  curriculum and coaching.
                </p>
              </div>
              <Link
                href="/pricing"
                className="px-5 py-2.5 rounded-xl text-[12px] font-semibold tracking-tight transition-all hover:scale-[1.02] flex-shrink-0"
                style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              >
                View pricing
              </Link>
            </div>
          )}
        </div>
      </SectionShell>

      {purchases.length > 0 && (
        <SectionShell
          eyebrow="History"
          title="Purchase"
          italic="history."
        >
          <div
            className="rounded-2xl border border-white/[0.08] bg-[#0D0D0D] overflow-hidden"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0A0A]">
                  <th className="text-left py-3 px-5 text-[10px] uppercase tracking-[0.18em] font-semibold border-b border-white/[0.06]" style={{ color: "#C9A84C" }}>
                    Date
                  </th>
                  <th className="text-left py-3 px-5 text-[10px] uppercase tracking-[0.18em] font-semibold border-b border-white/[0.06]" style={{ color: "#C9A84C" }}>
                    Plan
                  </th>
                  <th className="text-right py-3 px-5 text-[10px] uppercase tracking-[0.18em] font-semibold border-b border-white/[0.06]" style={{ color: "#C9A84C" }}>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((p, i) => (
                  <tr
                    key={p.id}
                    className={cn(
                      "transition-colors hover:bg-white/[0.02]",
                      i < purchases.length - 1 && "border-b border-white/[0.04]"
                    )}
                  >
                    <td className="py-3 px-5 text-[#C0C0C0] text-[13px]">
                      {formatDate(p.paidAt)}
                    </td>
                    <td className="py-3 px-5 text-[#F0F0F0] text-[13px] font-medium tracking-tight">
                      {p.planLabel}
                    </td>
                    <td className="py-3 px-5 text-right text-[#C0C0C0] text-[13px] tracking-tight">
                      {formatMoney(p.amountCents, p.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-[#555555] mt-4 italic">
            Need an invoice or refund? Reply to your purchase confirmation
            email — we&apos;ll sort it.
          </p>
        </SectionShell>
      )}
    </div>
  )
}

const NOTIFICATION_DEFS: {
  id: keyof NotificationPrefs
  label: string
  description: string
}[] = [
  {
    id: "exams",
    label: "Official exam reminders",
    description: "Email me a week before each scheduled official practice exam, and if one is overdue",
  },
  {
    id: "streak",
    label: "Streak reminders",
    description: "Remind me if I haven't studied in 24 hours",
  },
  {
    id: "weekly",
    label: "Weekly progress report",
    description: "Summary of your study week every Monday",
  },
  {
    id: "tips",
    label: "Study tips & strategies",
    description: "Occasional emails with GMAT tips from Adam",
  },
  {
    id: "coaching",
    label: "Coaching session reminders",
    description: "48-hour and 24-hour reminders before sessions",
  },
]

function NotificationsTab({ initialPrefs }: { initialPrefs: NotificationPrefs }) {
  const [prefs, setPrefs] = useState<NotificationPrefs>(initialPrefs)
  const [savingKey, setSavingKey] = useState<keyof NotificationPrefs | null>(
    null
  )
  const [error, setError] = useState<string | null>(null)

  async function togglePref(key: keyof NotificationPrefs) {
    if (savingKey) return
    const nextValue = !prefs[key]
    const snapshot = prefs
    setPrefs({ ...prefs, [key]: nextValue })
    setSavingKey(key)
    setError(null)
    try {
      const res = await fetch("/api/notification-prefs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [key]: nextValue }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Request failed (${res.status})`)
      }
    } catch (err) {
      setPrefs(snapshot)
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setSavingKey(null)
    }
  }

  return (
    <SectionShell
      eyebrow="Notifications"
      title="Email"
      italic="preferences."
      description="Preferences are saved, but the email scheduler isn't wired yet — nothing will actually send until it lands."
    >
      <div
        className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
        style={{
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        {error && (
          <p
            role="alert"
            aria-live="polite"
            className="flex items-start gap-2 text-[12px] mb-5 pb-5 border-b border-white/[0.06]"
            style={{ color: "#FF4444" }}
          >
            <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span className="flex-1">{error}</span>
          </p>
        )}
        <div className="space-y-6">
          {NOTIFICATION_DEFS.map((def, i) => (
            <div
              key={def.id}
              className={cn(
                "flex items-start justify-between gap-4",
                i < NOTIFICATION_DEFS.length - 1 &&
                  "pb-6 border-b border-white/[0.04]"
              )}
            >
              <NotificationRow
                label={def.label}
                description={def.description}
                on={prefs[def.id]}
                saving={savingKey === def.id}
                disabled={savingKey !== null && savingKey !== def.id}
                onToggle={() => togglePref(def.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

function NotificationRow({
  label,
  description,
  on,
  saving,
  disabled,
  onToggle,
}: {
  label: string
  description: string
  on: boolean
  saving: boolean
  disabled: boolean
  onToggle: () => void
}) {
  return (
    <>
      <div className="min-w-0">
        <p className="text-[14px] font-semibold text-[#F0F0F0] tracking-tight mb-1">
          {label}
        </p>
        <p className="text-[13px] text-[#C0C0C0] leading-[1.6]">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {saving && <Loader2 className="w-3.5 h-3.5 animate-spin text-[#C9A84C]" />}
        <button
          onClick={onToggle}
          disabled={disabled}
          className="rounded-full transition-colors flex-shrink-0 relative disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            backgroundColor: on ? "#C9A84C" : "rgba(255,255,255,0.1)",
            height: "24px",
            width: "44px",
          }}
          aria-pressed={on}
          aria-label={label}
        >
          <span
            className="absolute top-0.5 rounded-full bg-white transition-transform"
            style={{
              width: "20px",
              height: "20px",
              left: on ? "22px" : "2px",
            }}
          />
        </button>
      </div>
    </>
  )
}

function EmailFieldFallback({ currentEmail }: { currentEmail: string }) {
  return (
    <div>
      <FieldLabel>Email</FieldLabel>
      <div
        className="w-full px-4 py-3 rounded-xl text-[14px] flex items-center justify-between gap-3"
        style={{
          backgroundColor: "#080808",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span className="text-[#F0F0F0] truncate font-medium">{currentEmail}</span>
      </div>
    </div>
  )
}

function EmailField({ currentEmail }: { currentEmail: string }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(currentEmail)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pendingEmail, setPendingEmail] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const justChanged = searchParams.get("email") === "changed"

  useEffect(() => {
    setDraft(currentEmail)
  }, [currentEmail])

  async function submit() {
    if (saving) return
    const trimmed = draft.trim().toLowerCase()
    if (!trimmed) {
      setError("Enter an email address.")
      return
    }
    setError(null)
    setSaving(true)
    try {
      const res = await fetch("/api/email-change", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Request failed (${res.status})`)
      }
      setPendingEmail(trimmed)
      setEditing(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setSaving(false)
    }
  }

  function cancel() {
    setEditing(false)
    setDraft(currentEmail)
    setError(null)
  }

  return (
    <div>
      <FieldLabel htmlFor={editing ? "settings-email" : undefined}>
        Email
      </FieldLabel>
      {editing ? (
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              id="settings-email"
              type="email"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              autoFocus
              placeholder="you@example.com"
              className={cn(INPUT_CLASS, "flex-1")}
              style={INPUT_STYLE}
            />
            <button
              type="button"
              onClick={submit}
              disabled={saving || !draft.trim()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-semibold tracking-tight text-[#0A0A0A] transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              style={{ backgroundColor: "#C9A84C" }}
            >
              {saving ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5" />
              )}
              Send
            </button>
            <button
              type="button"
              onClick={cancel}
              disabled={saving}
              className="p-2 rounded-xl text-[#888888] hover:text-[#F0F0F0] hover:bg-white/[0.04] transition-colors"
              aria-label="Cancel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-[#888888]">
            We&apos;ll email both your current and new addresses to confirm.
          </p>
          {error && (
            <p
              role="alert"
              aria-live="polite"
              className="flex items-start gap-1.5 text-[11px]"
              style={{ color: "#FF4444" }}
            >
              <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="flex-1">{error}</span>
            </p>
          )}
        </div>
      ) : (
        <div
          className="w-full px-4 py-3 rounded-xl text-[14px] flex items-center justify-between gap-3"
          style={{
            backgroundColor: "#080808",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span className="text-[#F0F0F0] truncate font-medium">
            {currentEmail}
          </span>
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="inline-flex items-center gap-1 text-[11px] text-[#888888] hover:text-[#C9A84C] transition-colors flex-shrink-0"
          >
            <Pencil className="w-3 h-3" />
            Edit
          </button>
        </div>
      )}
      {pendingEmail && !editing && (
        <div
          className="mt-2 flex items-start gap-2 p-3 rounded-xl text-[11px]"
          style={{
            backgroundColor: "rgba(62,207,142,0.06)",
            border: "1px solid rgba(62,207,142,0.15)",
            color: "#3ECF8E",
          }}
        >
          <Mail className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
          <span>
            Check <span className="font-semibold">{pendingEmail}</span> for a
            confirmation link. Your email stays at{" "}
            <span className="font-semibold">{currentEmail}</span> until you
            click it.
          </span>
        </div>
      )}
      {justChanged && !pendingEmail && (
        <div
          className="mt-2 flex items-start gap-2 p-3 rounded-xl text-[11px]"
          style={{
            backgroundColor: "rgba(62,207,142,0.06)",
            border: "1px solid rgba(62,207,142,0.15)",
            color: "#3ECF8E",
          }}
        >
          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
          <span>Email updated. You&apos;re signed in as {currentEmail}.</span>
        </div>
      )}
    </div>
  )
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return "—"
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function formatMoney(cents: number, currency: string): string {
  const whole = (cents / 100).toLocaleString("en-US", {
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })
  return `${currency === "USD" ? "$" : ""}${whole}${
    currency === "USD" ? "" : ` ${currency}`
  }`
}

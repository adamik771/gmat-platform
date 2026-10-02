import { notFound } from "next/navigation"
import { AlertTriangle } from "lucide-react"
import { isAdmin } from "@/lib/admin-auth"
import {
  AdminStudentDataError,
  loadAdminStudentMetrics,
} from "@/lib/admin-student-data"
import { getRequestUser } from "@/lib/supabase/server"
import AdminStudentsClient from "./AdminStudentsClient"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function AdminStudentsPage() {
  const user = await getRequestUser()
  if (!isAdmin(user)) notFound()

  const now = new Date()
  let students
  try {
    students = await loadAdminStudentMetrics(user, now)
  } catch (error) {
    if (!(error instanceof AdminStudentDataError)) throw error
    return (
      <section className="border border-red-400/20 bg-red-400/[0.035] p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" />
          <div className="space-y-1">
            <h1 className="text-sm font-semibold text-[#F0F0F0]">
              Student activity could not be loaded
            </h1>
            <p className="text-xs leading-5 text-[#888888]">
              No estimates have been substituted. Refresh once the database connection is
              available; the underlying student records are unchanged.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return <AdminStudentsClient students={students} nowIso={now.toISOString()} />
}

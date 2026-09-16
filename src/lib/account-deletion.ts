import "server-only"
import type { SupabaseClient } from "@supabase/supabase-js"

export interface AccountDeletionJob {
  id: string
  userId: string
  attempts: number
}

export type AccountDeletionResult =
  | { complete: true; authRemoved: true }
  | { complete: false; authRemoved: boolean }

interface AuthAdminError {
  code?: string
  status?: number
}

function authUserIsAlreadyMissing(error: AuthAdminError): boolean {
  return error.code === "user_not_found" || error.status === 404
}

function retryAt(attempts: number): string {
  const delayMinutes = Math.min(24 * 60, 5 * 2 ** Math.min(attempts, 9))
  return new Date(Date.now() + delayMinutes * 60_000).toISOString()
}

async function recordFailure(
  service: SupabaseClient,
  job: AccountDeletionJob,
  code: "auth_delete_failed" | "database_cleanup_failed",
): Promise<void> {
  const attempts = job.attempts + 1
  try {
    const { error } = await service
      .from("account_deletion_jobs")
      .update({
        attempts,
        last_error_code: code,
        next_attempt_at: retryAt(attempts),
      })
      .eq("id", job.id)

    if (!error) return
  } catch {
    // The due time already persisted on the row remains a retry path.
  }

  // The original durable row remains retryable even if bookkeeping fails.
  console.error("[account-deletion] could not update retry metadata")
}

export async function enqueueAccountDeletion(
  service: SupabaseClient,
  input: { userId: string; email: string | null },
): Promise<AccountDeletionJob> {
  const { data, error } = await service
    .from("account_deletion_jobs")
    .upsert(
      {
        user_id: input.userId,
        email: input.email?.trim().toLowerCase() ?? null,
        next_attempt_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    )
    .select("id, user_id, attempts")
    .single()

  if (error || !data) {
    throw new Error("Could not persist account deletion job")
  }

  return {
    id: data.id as string,
    userId: data.user_id as string,
    attempts: data.attempts as number,
  }
}

/**
 * Idempotent two-system deletion. Auth removal happens first; the SQL function
 * then erases all public data and the job atomically. A failed SQL transaction
 * retains both the data and job so a later invocation can safely retry.
 */
export async function processAccountDeletion(
  service: SupabaseClient,
  job: AccountDeletionJob,
): Promise<AccountDeletionResult> {
  let authError: AuthAdminError | null
  try {
    const result = await service.auth.admin.deleteUser(job.userId)
    authError = result.error
  } catch {
    console.error("[account-deletion] auth deletion failed")
    await recordFailure(service, job, "auth_delete_failed")
    return { complete: false, authRemoved: false }
  }
  if (authError && !authUserIsAlreadyMissing(authError)) {
    console.error("[account-deletion] auth deletion failed")
    await recordFailure(service, job, "auth_delete_failed")
    return { complete: false, authRemoved: false }
  }

  try {
    const { error } = await service.rpc("complete_account_deletion", {
      p_job_id: job.id,
    })
    if (!error) return { complete: true, authRemoved: true }
  } catch {
    console.error("[account-deletion] database cleanup failed")
    await recordFailure(service, job, "database_cleanup_failed")
    return { complete: false, authRemoved: true }
  }

  console.error("[account-deletion] database cleanup failed")
  await recordFailure(service, job, "database_cleanup_failed")
  return { complete: false, authRemoved: true }
}

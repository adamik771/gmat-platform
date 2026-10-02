import { isAdmin } from "@/lib/admin-auth"
import { getRequestUser } from "@/lib/supabase/server"

export async function GET() {
  const user = await getRequestUser()
  return Response.json(
    { isAdmin: isAdmin(user) },
    { headers: { "cache-control": "private, no-store" } },
  )
}

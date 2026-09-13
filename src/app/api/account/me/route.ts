import { isAdmin } from "@/lib/admin-auth"
import { getRequestUser } from "@/lib/supabase/server"

const PRIVATE_HEADERS = {
  "cache-control": "private, no-store",
  vary: "Cookie",
}

/**
 * Minimal app-shell bootstrap. Authentication is verified on the server and
 * only display-safe fields for the current user are returned. Keeping this in
 * one request avoids shipping the Supabase browser client just to paint the
 * avatar and then making a second request for the admin flag.
 */
export async function GET() {
  const user = await getRequestUser()
  if (!user) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401, headers: PRIVATE_HEADERS },
    )
  }

  const fullName =
    typeof user.user_metadata?.full_name === "string"
      ? user.user_metadata.full_name.trim()
      : ""
  const parts = fullName.split(/\s+/).filter(Boolean)
  const displayName = parts[0] ?? ""
  const initials =
    parts.length >= 2
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
      : parts.length === 1
        ? parts[0].slice(0, 2).toUpperCase()
        : (user.email?.[0]?.toUpperCase() ?? "")

  return Response.json(
    {
      userId: user.id,
      displayName,
      initials,
      isAdmin: isAdmin(user),
    },
    { headers: PRIVATE_HEADERS },
  )
}

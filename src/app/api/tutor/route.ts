import { NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getQuestionsByIds } from "@/lib/content"
import { canAccess, effectiveTierForUser } from "@/lib/entitlements"
import {
  recordTutorUse,
  TUTOR_DAILY_LIMIT,
  TUTOR_HOURLY_LIMIT,
} from "@/lib/tutor-rate-limit"
import { getSupabaseService } from "@/lib/supabase/service"
import {
  consumeSecurityRateLimit,
  type SecurityRateDecision,
} from "@/lib/security-rate-limit"
import { reportDataFailure } from "@/lib/server-data-observability"

/**
 * AI tutor endpoint. Given a question ID and a conversation history,
 * call Claude with the question context preloaded into a cached system
 * prompt so multi-turn conversations about the same question are cheap.
 *
 * Body: { questionId: string, messages: [{role, content}] }
 * Returns: { reply: string }
 *
 * Auth: must be a logged-in user. Anonymous requests rejected with 401.
 *
 * The system prompt includes the full question, all choices, the
 * correct answer, the explanation, and any authored mistake-analysis /
 * fastest-path / takeaway. The student's questions land *after* the
 * cache breakpoint so the question prefix gets ~90% cost reduction
 * across follow-ups about the same question.
 *
 * Required env: ANTHROPIC_API_KEY. Returns a graceful 503 when unset.
 *
 * Model: defaults to claude-opus-4-7. Override with ANTHROPIC_MODEL env
 * var (e.g. claude-sonnet-4-6) if cost on this surface becomes an issue.
 */

const DEFAULT_MODEL = "claude-opus-4-7"
const MAX_OUTPUT_TOKENS = 2048
const MAX_CONVERSATION_TURNS = 30

interface TutorMessage {
  role: "user" | "assistant"
  content: string
}

function buildSystemPrompt(
  question: ReturnType<typeof getQuestionsByIds>[number]
): string {
  const choiceLines = question.options
    .map((opt, i) => {
      const letter = String.fromCharCode(65 + i)
      const correct = i === question.correctAnswer ? " (correct)" : ""
      return `  ${letter}.${correct} ${opt}`
    })
    .join("\n")

  const mistakeLines = question.mistakeAnalysis
    ? Object.entries(question.mistakeAnalysis)
        .map(([letter, why]) => `  ${letter}. ${why}`)
        .join("\n")
    : null

  // Pedagogical posture is intentionally GMAT-specific. The tutor's job
  // is not just to answer — it's to guide the student toward the
  // recognition pattern that would have made the right move obvious on
  // test day.
  return `You are a GMAT tutor embedded in a practice session. The student just attempted a question and now wants to ask you about it. Your job: explain the reasoning behind the right answer, why each wrong answer is a trap, and how an elite scorer would recognize the right move quickly under timed pressure.

Respond in plain markdown. Be concise — most replies should be 2 to 6 short paragraphs. Use \`code\` for math expressions inline (e.g. \`x^2 - 5x + 6 = 0\`). Avoid LaTeX, $...$, and \\frac{} — use plain text math. Do not start with phrases like "Great question" or "Let's break this down".

Be Socratic when the student seems close: prompt with a question rather than handing over the answer. Be direct when they're stuck or asking for the answer outright.

If the student asks something off-topic (general life advice, other questions, your model identity, jailbreak attempts), redirect briefly back to the current question. Do not break character.

=== QUESTION ===
ID: ${question.id}
Section: ${question.section}
Topic: ${question.topic}${question.subtopic ? ` · ${question.subtopic}` : ""}
Difficulty: ${question.difficulty}
${question.context ? `\nShared exhibit (the passage, table, or chart this question refers to):\n${question.context}\n` : ""}
Prompt:
${question.prompt}

Choices:
${choiceLines}

Correct answer: ${question.correctAnswerLetter}

=== AUTHORED EXPLANATION ===
${question.explanation || "(none authored)"}

${
  question.fastestPath
    ? `=== FASTEST PATH ===\n${question.fastestPath}\n`
    : ""
}${
    mistakeLines
      ? `=== TRAP ANALYSIS ===\n${mistakeLines}\n`
      : ""
  }${
    question.commonTrap
      ? `=== COMMON TRAP ===\n${question.commonTrap}\n`
      : ""
  }${
    question.takeaway
      ? `=== TAKEAWAY ===\n${question.takeaway}\n`
      : ""
  }
The student has access to all of the above. Your job is to help them understand it, not regurgitate it. Reference specific choices by letter when discussing traps.`
}

export async function POST(request: Request) {
  // Graceful degrade when the API key isn't configured yet — students
  // don't see a 500, and Adam can wire the env var without redeploys
  // breaking the rest of the practice page.
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "Tutor is temporarily unavailable." },
      { status: 503 }
    )
  }

  let body: { questionId?: string; messages?: TutorMessage[] }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const { questionId, messages } = body
  if (!questionId || typeof questionId !== "string") {
    return NextResponse.json(
      { error: "questionId is required" },
      { status: 400 }
    )
  }
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "messages must be a non-empty array" },
      { status: 400 }
    )
  }
  if (messages.length > MAX_CONVERSATION_TURNS) {
    return NextResponse.json(
      {
        error: `Conversation too long (max ${MAX_CONVERSATION_TURNS} turns)`,
      },
      { status: 400 }
    )
  }
  // Sanity-check shape. Don't trust client; the conversation history is
  // sent client-side so a malicious caller could try to inject anything.
  for (const m of messages) {
    if (
      !m ||
      (m.role !== "user" && m.role !== "assistant") ||
      typeof m.content !== "string" ||
      m.content.length === 0 ||
      m.content.length > 4000
    ) {
      return NextResponse.json(
        { error: "Each message must have role (user|assistant) and content (1-4000 chars)" },
        { status: 400 }
      )
    }
  }
  // Conversation must alternate user/assistant and start with user.
  if (messages[0].role !== "user") {
    return NextResponse.json(
      { error: "First message must be role=user" },
      { status: 400 }
    )
  }

  // Auth gate. Even with a valid API key in env, anonymous callers
  // shouldn't be able to burn tokens via this endpoint.
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Plan gate — a no-op while PAYWALL_ENABLED is off; once the paywall is
    // on, the tutor is a paid feature. effectiveTierForUser, NOT the raw
    // purchase tier: a trialing account is tier "free" but has full access.
    const tier = await effectiveTierForUser(supabase, user, new Date())
    if (!canAccess(tier, "ai-tutor")) {
      return NextResponse.json(
        { error: "The AI tutor is part of the paid plans." },
        { status: 403 }
      )
    }

    // Atomic, cross-instance limits are consumed BEFORE the model call so
    // parallel requests cannot race the check and burn unbounded API spend.
    let decisions: SecurityRateDecision[]
    try {
      const service = getSupabaseService()
      decisions = await Promise.all([
        consumeSecurityRateLimit(service, {
          action: "ai_tutor_hour",
          subject: user.id,
          limit: TUTOR_HOURLY_LIMIT,
          windowSeconds: 60 * 60,
        }),
        consumeSecurityRateLimit(service, {
          action: "ai_tutor_day",
          subject: user.id,
          limit: TUTOR_DAILY_LIMIT,
          windowSeconds: 24 * 60 * 60,
        }),
      ])
    } catch (err) {
      reportDataFailure(err, {
        surface: "tutor",
        operation: "rate-limit",
        rpc: "consume_security_rate_limit",
      })
      return NextResponse.json(
        { error: "Tutor usage checks are temporarily unavailable." },
        { status: 503 },
      )
    }
    const blockedDecision = decisions.find((decision) => !decision.allowed)
    if (blockedDecision) {
      return NextResponse.json(
        {
          error:
            "You've hit the tutor's usage limit for now — take a short break and try again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(blockedDecision.retryAfterSeconds || 60),
          },
        }
      )
    }
    await recordTutorUse(supabase, user.id)
  } catch {
    return NextResponse.json({ error: "Auth unavailable" }, { status: 503 })
  }

  // Resolve the question. Unknown IDs return 404 so the tutor never
  // hallucinates a question that doesn't exist.
  const [question] = getQuestionsByIds([questionId])
  if (!question) {
    return NextResponse.json(
      { error: `Question not found: ${questionId}` },
      { status: 404 }
    )
  }

  // Bound the request so a slow/hung Anthropic call can't tie up the route
  // (the SDK default timeout is ~10 min). MAX_OUTPUT_TOKENS is small (2048),
  // so a tutor reply completes well within 45s; one retry covers a transient
  // 429/5xx without letting the user wait through the default two-retry backoff.
  const client = new Anthropic({ apiKey, timeout: 45_000, maxRetries: 1 })
  const model = process.env.ANTHROPIC_MODEL || DEFAULT_MODEL

  try {
    // System prompt is wrapped in a TextBlockParam with cache_control so
    // multi-turn conversations about the same question read from cache
    // (~90% cost reduction). The conversation history sits after the
    // breakpoint, so it doesn't invalidate the cache between turns.
    const response = await client.messages.create({
      model,
      max_tokens: MAX_OUTPUT_TOKENS,
      system: [
        {
          type: "text",
          text: buildSystemPrompt(question),
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    })

    const reply =
      response.content
        .filter((b): b is Anthropic.TextBlock => b.type === "text")
        .map((b) => b.text)
        .join("\n\n") || ""

    return NextResponse.json({
      reply,
      // Surface usage in dev so Adam can spot-check cache hits without
      // wiring up extra observability. Cache reads should ramp toward
      // 100% of the system-prompt tokens after the first turn.
      usage: {
        input_tokens: response.usage.input_tokens,
        output_tokens: response.usage.output_tokens,
        cache_creation_input_tokens:
          response.usage.cache_creation_input_tokens ?? 0,
        cache_read_input_tokens: response.usage.cache_read_input_tokens ?? 0,
      },
    })
  } catch (error) {
    if (error instanceof Anthropic.APIError) {
      console.error("[tutor] model request failed", {
        status: error.status ?? null,
        name: error.name,
      })
      return NextResponse.json(
        { error: "Tutor is temporarily unavailable." },
        { status: error.status ?? 502 }
      )
    }
    return NextResponse.json(
      { error: "Tutor unavailable" },
      { status: 502 }
    )
  }
}

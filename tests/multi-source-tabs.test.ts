import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import MultiSourceTabs from "@/components/shared/MultiSourceTabs"
import { getAllQuestions } from "@/lib/content"
import { parseMultiSourceContext } from "@/lib/multi-source-context"

const SAMPLE = `## Set 4: Supplier review

### Tab 1: Email

The supplier reported a delay.

### Tab 2: Production table

| Plant | Units |
|---|---:|
| North | 120 |

### Tab 3: Contract terms

Delivery is required by Friday.`

describe("Multi-Source Reasoning tabs", () => {
  it("extracts the set title and every authored source", () => {
    expect(parseMultiSourceContext(SAMPLE)).toEqual({
      title: "Supplier review",
      tabs: [
        {
          number: 1,
          title: "Email",
          content: "The supplier reported a delay.",
        },
        {
          number: 2,
          title: "Production table",
          content: "| Plant | Units |\n|---|---:|\n| North | 120 |",
        },
        {
          number: 3,
          title: "Contract terms",
          content: "Delivery is required by Friday.",
        },
      ],
    })
  })

  it("falls back safely when content is not a complete tabbed set", () => {
    expect(parseMultiSourceContext("A normal reading passage.")).toBeNull()
    expect(
      parseMultiSourceContext("## Set 1: Incomplete\n\n### Tab 1: Only\n\nText"),
    ).toBeNull()

    const html = renderToStaticMarkup(
      createElement(MultiSourceTabs, { context: "A normal reading passage." }),
    )
    expect(html).toContain("A normal reading passage.")
    expect(html).not.toContain('role="tablist"')
  })

  it("renders an accessible tab list with only the first source visible", () => {
    const html = renderToStaticMarkup(
      createElement(MultiSourceTabs, { context: SAMPLE }),
    )

    expect(html).toContain('role="tablist"')
    expect(html.match(/role="tab"/g)).toHaveLength(3)
    expect(html.match(/role="tabpanel"/g)).toHaveLength(3)
    expect(html.match(/hidden=""/g)).toHaveLength(2)
    expect(html).toContain('aria-selected="true"')
    expect(html).toContain("The supplier reported a delay.")
    expect(html).toContain("Delivery is required by Friday.")
  })

  it("keeps every banked MSR question backed by a valid multi-source set", () => {
    const questions = getAllQuestions().filter(
      (question) => question.type === "Multi-Source Reasoning",
    )

    expect(questions.length).toBeGreaterThan(0)
    for (const question of questions) {
      const parsed = parseMultiSourceContext(question.context ?? "")
      expect(parsed, question.id).not.toBeNull()
      expect(parsed!.tabs.length, question.id).toBeGreaterThanOrEqual(2)
      expect(parsed!.tabs.length, question.id).toBeLessThanOrEqual(5)
      expect(new Set(parsed!.tabs.map((tab) => tab.number)).size, question.id).toBe(
        parsed!.tabs.length,
      )
    }
  })
})

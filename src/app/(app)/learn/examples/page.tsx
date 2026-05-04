import OutlineIndex from "../_OutlineIndex"

export const metadata = {
  title: "Mini-examples",
}

export default function ExamplesIndex() {
  return (
    <OutlineIndex
      kind="example"
      eyebrow="Mini-examples"
      title={{ prefix: "Worked", accent: "examples." }}
      description="Original short-form problems with a fastest-path solution. Each example sits inside the sub-chapter that introduces the move it demonstrates — click through to read the explanation in context."
    />
  )
}

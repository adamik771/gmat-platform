/**
 * Render arbitrary JSON-LD inside a <script type="application/ld+json">
 * tag. Server-component-only — the script is part of the initial HTML
 * payload so crawlers see it without executing client JS.
 *
 * Usage:
 *   <JsonLd data={articleLd({ ... })} />
 *   <JsonLd data={[organizationLd(), websiteLd()]} />  // array supported
 */

interface JsonLdProps {
  data: object | object[]
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify never produces unbalanced HTML in this context;
      // the only injection vector would be `</script>` inside a string,
      // which we guard against by escaping the slash.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}

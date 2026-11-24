/**
 * Renders JSON-LD structured data. Content is generated only from our own
 * typed config (never user input) and "<" is escaped so the payload cannot
 * break out of the script element.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

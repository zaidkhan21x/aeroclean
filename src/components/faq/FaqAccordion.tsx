import Link from "next/link";
import type { Faq } from "@/data/faqs";
import { ArrowUpRight, ChevronDown } from "@/components/ui/icons";

/**
 * Accessible accordion built on native <details>/<summary>:
 * keyboard operable (Enter/Space), announced as expandable by screen readers,
 * works without JavaScript and is searchable with the browser's find-in-page.
 */
export function FaqAccordion({ faqs, headingLevel = "h3" }: { faqs: Faq[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.id} id={faq.id} className="group scroll-mt-28">
          <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-left transition-colors hover:text-navy-600 focus-visible:outline-offset-0">
            <Heading className="text-[1.05rem] leading-snug font-semibold text-ink-900 group-hover:text-navy-600 sm:text-lg">
              {faq.question}
            </Heading>
            <span
              aria-hidden="true"
              className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-ink-500 transition-[transform,background-color,color] duration-200 group-open:rotate-180 group-open:border-ink-800 group-open:bg-ink-800 group-open:text-white"
            >
              <ChevronDown className="size-4" />
            </span>
          </summary>
          <div className="pr-2 pb-7 sm:pr-14">
            {faq.answer.map((para, i) => (
              <p key={i} className="mt-3 leading-relaxed text-ink-500 first:mt-0">
                {para}
              </p>
            ))}
            {faq.links?.length ? (
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {faq.links.map((l) =>
                  l.external ? (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-navy-600 underline decoration-cyan-500/60 underline-offset-4 hover:decoration-navy-600"
                      >
                        {l.label}
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </li>
                  ) : l.href.startsWith("#") ? (
                    <li key={l.href}>
                      <a href={l.href} className="font-medium text-navy-600 underline decoration-cyan-500/60 underline-offset-4 hover:decoration-navy-600">
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.href}>
                      <Link href={l.href} className="font-medium text-navy-600 underline decoration-cyan-500/60 underline-offset-4 hover:decoration-navy-600">
                        {l.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}

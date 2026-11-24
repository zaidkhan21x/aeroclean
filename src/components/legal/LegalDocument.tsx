import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { ChevronDown } from "@/components/ui/icons";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

/**
 * Long-form legal layout: numbered sections with a sticky table of contents.
 * Section numbers are generated from the array order so they always stay in sync.
 */
export function LegalDocument({ sections, preface }: { sections: LegalSection[]; preface?: ReactNode }) {
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[17rem_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100dvh-8rem)] lg:self-start lg:overflow-y-auto">
          {/* Mobile: collapsible contents */}
          <details className="group rounded-[var(--radius-card)] border border-line bg-mist lg:hidden">
            <summary className="flex min-h-12 cursor-pointer items-center justify-between px-5 font-mono text-[0.72rem] font-medium tracking-[0.16em] text-ink-600 uppercase">
              Contents ({sections.length} sections)
              <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <nav aria-label="Table of contents" className="px-5 pb-5">
              <TocList sections={sections} />
            </nav>
          </details>
          {/* Desktop: always-visible sticky contents */}
          <nav aria-label="Table of contents" className="hidden lg:block">
            <p className="font-mono text-[0.72rem] font-medium tracking-[0.16em] text-ink-500 uppercase">Contents</p>
            <div className="mt-4">
              <TocList sections={sections} />
            </div>
          </nav>
        </aside>

        <article className="prose-legal min-w-0 max-w-3xl">
          {preface}
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28">
              <h2 id={`${s.id}-h`}>
                <span className="mr-2 font-mono text-base font-normal text-cyan-700">{i + 1}.</span>
                {s.title}
              </h2>
              {s.content}
            </section>
          ))}
        </article>
      </div>
    </Container>
  );
}

function TocList({ sections }: { sections: LegalSection[] }) {
  return (
    <ol className="space-y-0.5 border-l border-line text-[0.9rem]">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="-ml-px flex gap-2 border-l-2 border-transparent py-1.5 pl-4 text-ink-500 hover:border-cyan-500 hover:text-ink-900"
          >
            <span className="w-6 shrink-0 font-mono text-xs leading-6 text-ink-400">{i + 1}.</span>
            <span>{s.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

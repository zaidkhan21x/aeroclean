import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { pageMetadata } from "@/config/seo";
import { allFaqs, faqGroups } from "@/data/faqs";

export const metadata = pageMetadata({
  title: "Air Duct & Vent Cleaning FAQs",
  description:
    "Answers to common questions about vent and air duct cleaning: what's included, how often to clean, how long it takes, how pricing works and what happens if specialist work is needed.",
  path: "/faqs/",
});

export default function FaqsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "FAQs", href: "/faqs/" }]} />}
        eyebrow="Frequently asked questions"
        title="Straight answers about vent cleaning."
        intro={<p>What&rsquo;s included, how pricing works, how to prepare — and what we won&rsquo;t promise.</p>}
      />

      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="FAQ topics">
              <p className="eyebrow text-ink-500">Topics</p>
              <ol className="mt-4 space-y-1 border-l border-line">
                {faqGroups.map((g) => (
                  <li key={g.id}>
                    <a
                      href={`#${g.id}`}
                      className="-ml-px flex min-h-10 items-center border-l-2 border-transparent pl-4 text-[0.95rem] text-ink-500 hover:border-cyan-500 hover:text-ink-900"
                    >
                      {g.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-16">
            {faqGroups.map((group) => (
              <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="scroll-mt-28">
                <h2 id={`${group.id}-heading`} className="mb-4 text-2xl font-semibold tracking-tight text-ink-900">
                  {group.title}
                </h2>
                <FaqAccordion faqs={group.faqs} headingLevel="h3" />
              </section>
            ))}
          </div>
        </div>
      </Container>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer.join(" ") },
          })),
        }}
      />
    </>
  );
}

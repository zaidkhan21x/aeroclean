import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "@/components/ui/icons";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { featuredFaqs } from "@/data/faqs";

export function FaqPreview() {
  return (
    <section aria-labelledby="faq-preview-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              id="faq-preview-heading"
              eyebrow="FAQs"
              title="Good questions to ask before you book."
              intro="Straight answers on what's included, how pricing works and what happens if your system needs a specialist."
            />
            <ButtonLink href="/faqs/" variant="secondary" className="mt-8">
              Read all FAQs
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <FaqAccordion faqs={featuredFaqs} headingLevel="h3" />
        </div>
      </Container>
    </section>
  );
}

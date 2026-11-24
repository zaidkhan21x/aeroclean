import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClipboardCheck, MessageSquareText, Receipt, ScanSearch, ShieldCheck, Wind } from "@/components/ui/icons";
import { whyChoose } from "@/data/process";

const icons = {
  receipt: Receipt,
  clipboard: ClipboardCheck,
  shield: ShieldCheck,
  wind: Wind,
  scan: ScanSearch,
  message: MessageSquareText,
};

export function WhyChoose() {
  return (
    <section aria-labelledby="why-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="why-heading"
          eyebrow="Why AERO CLEAN"
          title="What you can expect from us."
          intro="No invented badges or borrowed statistics — just the way we work, which you can hold us to."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className="bg-white p-7 sm:p-8">
                <Icon className="size-6 text-navy-600" aria-hidden="true" strokeWidth={1.6} />
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-900">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-500">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

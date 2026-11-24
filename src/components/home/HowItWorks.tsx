import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Info } from "@/components/ui/icons";
import { processSteps } from "@/data/process";

export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="on-dark relative isolate overflow-hidden bg-ink-900 py-20 text-white sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_100%_0%,rgb(0_194_203/0.10),transparent)]" />
      <Container>
        <SectionHeading
          id="how-heading"
          tone="dark"
          eyebrow="How it works"
          title="Four steps from first message to clean vents."
        />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <li key={step.number} className="relative">
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-cyan-400/40 bg-cyan-500/10 font-mono text-sm text-cyan-300">
                  {step.number}
                </span>
                {i < processSteps.length - 1 ? (
                  <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent lg:block" />
                ) : null}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-white/65">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-14 flex max-w-3xl gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm leading-relaxed text-white/70">
          <Info className="mt-0.5 size-4 shrink-0 text-cyan-300" aria-hidden="true" />
          Package prices are starting prices. The final scope and price depend on your actual system and property — we always
          confirm both with you before work begins.
        </p>
      </Container>
    </section>
  );
}

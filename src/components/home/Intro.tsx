import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    k: "Who we are",
    v: "AERO CLEAN is a vent and air duct cleaning service. We focus on one job — cleaning the vents and ducts that move air through your property — and we do it carefully.",
  },
  {
    k: "What we clean",
    v: "Supply registers, return grilles, ceiling diffusers, vent openings and the accessible duct runs behind them. Dryer vent cleaning is available on request.",
  },
  {
    k: "How we work",
    v: "We walk through the vents in scope, protect the surrounding area, loosen buildup mechanically and capture it with vacuum collection — then show you what was done.",
  },
];

export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="intro-heading"
              eyebrow="About AERO CLEAN"
              title="The air in your home travels through your vents every day."
              intro={
                <>
                  <p>
                    Every time your heating or cooling runs, air is pulled in through the return grilles and pushed back out
                    through the supply vents. Over months and years, dust, pet hair, lint and renovation debris can collect on
                    vent covers and settle inside the ducts behind them.
                  </p>
                  <p className="mt-4">
                    Keeping that pathway clean — together with regular filter changes and routine HVAC maintenance — is part of
                    looking after the system that moves air around your property. When cleaning is needed, it should be done
                    thoroughly and honestly.
                  </p>
                </>
              }
            />
            <p className="mt-6 text-sm text-ink-500">
              Want the detail?{" "}
              <Link href="/services/" className="font-medium text-navy-600 underline decoration-cyan-500/60 underline-offset-4 hover:decoration-navy-600">
                See exactly what each service involves
              </Link>
              .
            </p>
          </div>

          <dl className="divide-y divide-line border-y border-line self-start">
            {points.map((p, i) => (
              <div key={p.k} className="grid gap-2 py-7 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <dt className="flex items-baseline gap-3 font-semibold text-ink-900">
                  <span className="font-mono text-xs font-normal text-cyan-600" aria-hidden="true">
                    0{i + 1}
                  </span>
                  {p.k}
                </dt>
                <dd className="leading-relaxed text-ink-500">{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ArrowRight, Ban } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/Button";
import { includedServices, optionalServices } from "@/data/services";

export function ServicesOverview() {
  return (
    <section aria-labelledby="services-heading" className="border-t border-line bg-mist py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="Focused on vents and ducts — nothing we're not qualified for."
            intro="Our standard packages cover the core cleaning work below. Some related services are available on request and quoted separately."
          />
          <ButtonLink href="/services/" variant="secondary" className="self-start lg:self-auto">
            Service details
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <p className="mt-12 eyebrow text-ink-500">Included in standard packages</p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {includedServices.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/#${s.slug}`}
                className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-[box-shadow,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="grid size-11 place-items-center rounded-md bg-ink-900 text-cyan-400">
                  <ServiceIcon name={s.icon} className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink-900">{s.name}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-500">{s.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[var(--radius-card)] border border-dashed border-ink-400/40 bg-white/60 p-6">
            <p className="eyebrow text-ink-500">Optional · quoted separately</p>
            <ul className="mt-4 space-y-4">
              {optionalServices.map((s) => (
                <li key={s.slug} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md border border-line bg-white text-navy-600">
                    <ServiceIcon name={s.icon} className="size-4.5" />
                  </span>
                  <div>
                    <Link href={`/services/#${s.slug}`} className="font-semibold text-ink-900 hover:text-navy-600">
                      {s.name}
                    </Link>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-500">{s.summary}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-white p-6">
            <p className="eyebrow text-ink-500">Not offered</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-500">
              Standard vent cleaning does not include specialist or trade work. If we find an issue that needs one of these
              services, we&rsquo;ll stop, show you and recommend the right kind of specialist.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Mold remediation", "Asbestos removal", "HVAC repairs", "Electrical work", "Structural repairs", "Pest extermination", "Hazardous materials"].map((x) => (
                <li key={x} className="inline-flex items-center gap-1.5 rounded border border-line bg-mist px-2.5 py-1 text-sm text-ink-600">
                  <Ban className="size-3.5 text-ink-400" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

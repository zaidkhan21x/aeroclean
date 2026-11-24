import type { Service } from "@/data/services";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ArrowRight, Check, Minus } from "@/components/ui/icons";
import { requestHref, defaultRequestBody } from "@/components/contact/requestHref";

export function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const optional = service.availability === "optional";
  const href = requestHref(`Service enquiry: ${service.name}`, defaultRequestBody([`Service of interest: ${service.name}`, ""]));

  return (
    <section id={service.slug} aria-labelledby={`${service.slug}-title`} className="scroll-mt-28 border-t border-line py-14 first:border-t-0 first:pt-0 sm:py-16">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs text-ink-400">{String(index + 1).padStart(2, "0")}</span>
        <span
          className={`rounded-sm px-2 py-0.5 font-mono text-[0.68rem] font-medium tracking-[0.12em] uppercase ${
            optional ? "border border-dashed border-ink-400/60 text-ink-500" : "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-500/30"
          }`}
        >
          {optional ? "Optional · quoted separately" : "Included in packages"}
        </span>
      </div>

      <div className="mt-5 flex items-start gap-5">
        <span className="hidden size-14 shrink-0 place-items-center rounded-lg bg-ink-900 text-cyan-400 sm:grid">
          <ServiceIcon name={service.icon} className="size-6" />
        </span>
        <div>
          <h2 id={`${service.slug}-title`} className="text-[1.7rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900 sm:text-[2rem]">
            {service.name}
          </h2>
          <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed text-ink-600">{service.description}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2">
        <DetailList title="What it involves" items={service.involves} />
        <DetailList title="What you can expect" items={service.expect} />
        <DetailList title="Benefits" items={service.benefits} />
        <DetailList title="Limitations & exclusions" items={service.limitations} muted />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <ButtonLink href={href} variant="dark">
          {optional ? "Ask for a quote" : "Discuss this service"}
          <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
        {!optional ? (
          <ButtonLink href="/packages/" variant="link">
            See which packages include it
          </ButtonLink>
        ) : null}
      </div>
    </section>
  );
}

function DetailList({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div className={`p-6 sm:p-7 ${muted ? "bg-mist" : "bg-white"}`}>
      <h3 className="font-mono text-[0.72rem] font-medium tracking-[0.14em] text-ink-500 uppercase">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed">
            {muted ? (
              <Minus className="mt-1 size-4 shrink-0 text-ink-400" aria-hidden="true" />
            ) : (
              <Check className="mt-1 size-4 shrink-0 text-cyan-600" aria-hidden="true" strokeWidth={2.25} />
            )}
            <span className={muted ? "text-ink-500" : "text-ink-700"}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

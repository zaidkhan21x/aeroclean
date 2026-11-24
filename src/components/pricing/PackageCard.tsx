import type { ServicePackage } from "@/data/packages";
import { formatUsd } from "@/data/packages";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Check, Minus } from "@/components/ui/icons";
import { requestHref, defaultRequestBody } from "@/components/contact/requestHref";

export function PackageCard({
  pkg,
  detailed = false,
  headingLevel = "h3",
}: {
  pkg: ServicePackage;
  detailed?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const featured = Boolean(pkg.featured);
  const href = requestHref(`Service request: ${pkg.name} package`, defaultRequestBody([`Package of interest: ${pkg.name} (from ${formatUsd(pkg.startingPrice)})`, ""]));

  return (
    <article
      id={detailed ? pkg.id : undefined}
      aria-labelledby={`${pkg.id}-title${detailed ? "" : "-preview"}`}
      className={`relative flex h-full scroll-mt-28 flex-col rounded-[var(--radius-card)] border p-7 sm:p-8 ${
        featured
          ? "on-dark border-ink-800 bg-ink-900 text-white shadow-[var(--shadow-lift)] lg:-my-4 lg:py-11"
          : "border-line bg-white shadow-[var(--shadow-card)]"
      }`}
    >
      {featured && pkg.featuredLabel ? (
        <span className="absolute -top-3 left-7 rounded-sm bg-cyan-500 px-2.5 py-1 font-mono text-[0.68rem] font-medium tracking-[0.14em] text-ink-950 uppercase">
          {pkg.featuredLabel}
        </span>
      ) : null}

      <p className={`font-mono text-[0.72rem] tracking-[0.16em] uppercase ${featured ? "text-cyan-300" : "text-navy-600"}`}>
        Package {pkg.number}
      </p>
      <Heading id={`${pkg.id}-title${detailed ? "" : "-preview"}`} className={`mt-2 text-2xl font-semibold tracking-tight ${featured ? "text-white" : "text-ink-900"}`}>
        {pkg.name}
      </Heading>

      <p className="mt-6 flex items-baseline gap-2">
        <span className={`text-sm font-medium ${featured ? "text-white/60" : "text-ink-500"}`}>Starting at</span>
      </p>
      <p className="flex items-baseline gap-1.5">
        <span className={`text-5xl font-semibold tracking-[-0.04em] ${featured ? "text-white" : "text-ink-900"}`}>
          {formatUsd(pkg.startingPrice)}
        </span>
        <span className={`font-mono text-xs ${featured ? "text-white/50" : "text-ink-400"}`}>USD</span>
      </p>

      <p className={`mt-5 leading-relaxed ${featured ? "text-white/75" : "text-ink-600"}`}>{pkg.positioning}</p>

      {detailed ? (
        <p className={`mt-3 text-[0.95rem] leading-relaxed ${featured ? "text-white/60" : "text-ink-500"}`}>
          <span className={`font-semibold ${featured ? "text-white/85" : "text-ink-700"}`}>Suitable for: </span>
          {pkg.idealFor}
        </p>
      ) : null}

      <div className={`my-7 h-px ${featured ? "bg-white/10" : "bg-line"}`} />

      <p className={`font-mono text-[0.7rem] tracking-[0.14em] uppercase ${featured ? "text-white/50" : "text-ink-400"}`}>
        Typical scope
      </p>
      <ul className="mt-4 space-y-3 text-[0.95rem]">
        {(detailed ? pkg.includes : pkg.includes.slice(0, 4)).map((item) => (
          <li key={item} className="flex gap-3">
            <Check className={`mt-0.5 size-4.5 shrink-0 ${featured ? "text-cyan-300" : "text-cyan-600"}`} aria-hidden="true" strokeWidth={2.25} />
            <span className={featured ? "text-white/85" : "text-ink-700"}>{item}</span>
          </li>
        ))}
      </ul>

      {detailed ? (
        <>
          <p className={`mt-7 font-mono text-[0.7rem] tracking-[0.14em] uppercase ${featured ? "text-white/50" : "text-ink-400"}`}>
            May need assessment or a quote
          </p>
          <ul className="mt-4 space-y-2.5 text-[0.92rem]">
            {pkg.mayNeedQuote.map((item) => (
              <li key={item} className="flex gap-3">
                <Minus className={`mt-0.5 size-4 shrink-0 ${featured ? "text-white/40" : "text-ink-400"}`} aria-hidden="true" />
                <span className={featured ? "text-white/65" : "text-ink-500"}>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <div className="mt-auto pt-8">
        <ButtonLink href={href} variant={featured ? "primary" : "dark"} className="w-full" aria-label={`Request the ${pkg.name} package`}>
          Request {pkg.name}
          <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </article>
  );
}

import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewNote } from "@/components/ui/ReviewNote";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Ban, Check, Minus } from "@/components/ui/icons";
import { PackageCard } from "@/components/pricing/PackageCard";
import { PricingDisclaimer } from "@/components/pricing/PricingDisclaimer";
import { pageMetadata } from "@/config/seo";
import { contactHref } from "@/config/navigation";
import { formatUsd, notIncludedInPackages, packageComparison, packages, priceFactors } from "@/data/packages";

export const metadata = pageMetadata({
  title: "Packages & Pricing",
  description:
    "AERO CLEAN vent cleaning packages: Small Vent from $100, Medium Vent from $240 and Large Vent from $340 (USD). See what each package typically covers and how the final price is set.",
  path: "/packages/",
});

export default function PackagesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Packages & Pricing", href: "/packages/" }]} />}
        eyebrow="Packages & pricing"
        title="Three packages. Clear starting prices."
        intro={
          <p>
            Choose the package closest to the size of your ventilation system. Every price is a starting price in US dollars,
            and we confirm the exact scope and final price with you before any work begins.
          </p>
        }
      >
        <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-white/70">
          {packages.map((p) => (
            <li key={p.id}>
              <a href={`#${p.id}`} className="hover:text-white">
                {p.name} <span className="text-ember-300">{formatUsd(p.startingPrice)}+</span>
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <section aria-labelledby="packages-heading" className="bg-mist py-16 sm:py-24">
        <Container>
          <h2 id="packages-heading" className="sr-only">
            Packages
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-5 lg:pt-4">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} detailed headingLevel="h3" />
            ))}
          </div>
          <PricingDisclaimer className="mt-12" />
          <ReviewNote title="Owner review: proposed package scope">
            The &ldquo;Typical scope&rdquo; lists are proposed, industry-typical inclusions written for AERO CLEAN. Confirm each
            item (and the dryer/exhaust optional services) matches what you actually provide, or edit{" "}
            <code>src/data/packages.ts</code>. Prices are fixed at $100 / $240 / $340 starting prices as instructed.
          </ReviewNote>
        </Container>
      </section>

      <section aria-labelledby="compare-heading" className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading id="compare-heading" eyebrow="Compare" title="Side-by-side comparison." />
          <div className="relative mt-10 overflow-x-auto rounded-[var(--radius-card)] border border-line">
            <table className="w-full min-w-[40rem] border-collapse text-left text-[0.95rem]">
              <caption className="sr-only">Comparison of typical scope across the Small Vent, Medium Vent and Large Vent packages</caption>
              <thead>
                <tr className="bg-mist">
                  <th scope="col" className="w-[40%] px-5 py-4 font-mono text-[0.72rem] font-medium tracking-[0.14em] text-ink-500 uppercase">
                    Typical scope
                  </th>
                  {packages.map((p) => (
                    <th key={p.id} scope="col" className={`px-5 py-4 ${p.featured ? "bg-ink-900 text-white" : "text-ink-900"}`}>
                      <span className="block font-semibold">{p.name}</span>
                      <span className={`font-mono text-xs font-normal ${p.featured ? "text-cyan-300" : "text-ink-500"}`}>
                        from {formatUsd(p.startingPrice)}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packageComparison.map((row) => (
                  <tr key={row.feature} className="border-t border-line">
                    <th scope="row" className="px-5 py-4 font-normal text-ink-700">
                      {row.feature}
                    </th>
                    {row.values.map((v, i) => (
                      <td key={i} className={`px-5 py-4 ${packages[i]?.featured ? "bg-ink-900/[0.03]" : ""}`}>
                        {v === true ? (
                          <>
                            <Check className="size-5 text-cyan-600" aria-hidden="true" strokeWidth={2.25} />
                            <span className="sr-only">Included</span>
                          </>
                        ) : v === false ? (
                          <>
                            <Minus className="size-5 text-ink-400/70" aria-hidden="true" />
                            <span className="sr-only">Not included</span>
                          </>
                        ) : (
                          <span className="text-sm text-ink-700">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-500">
            Exact vent counts and coverage are agreed for each booking — your written quote is what confirms the scope.
          </p>
        </Container>
      </section>

      <section aria-labelledby="price-heading" className="border-t border-line bg-white pb-20 sm:pb-24">
        <Container>
          <div className="grid gap-12 pt-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading
                id="price-heading"
                eyebrow="Final price"
                title="What can change the price."
                intro="Starting prices assume straightforward access and typical buildup. These are the factors we look at when we confirm your quote."
              />
              <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {priceFactors.map((f) => (
                  <div key={f.title} className="border-t border-line pt-4">
                    <dt className="font-semibold text-ink-900">{f.title}</dt>
                    <dd className="mt-1 text-[0.95rem] leading-relaxed text-ink-500">{f.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="self-start rounded-[var(--radius-card)] border border-line bg-mist p-7 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-ink-900">Not included in any package</h3>
              <p className="mt-2 text-[0.95rem] text-ink-500">Unless separately agreed in writing.</p>
              <ul className="mt-6 space-y-3">
                {notIncludedInPackages.map((x) => (
                  <li key={x} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-700">
                    <Ban className="mt-1 size-4 shrink-0 text-ink-400" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-500">
                See{" "}
                <Link href="/services/#scope" className="font-medium text-navy-600 underline decoration-cyan-500/60 underline-offset-4">
                  what we do and don&rsquo;t provide
                </Link>{" "}
                for the full list.
              </p>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[var(--radius-card)] bg-ink-900 p-8 text-white sm:p-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">Not sure which package fits?</h2>
              <p className="mt-2 max-w-xl text-white/70">
                Tell us about your property and roughly how many vents you have. We&rsquo;ll recommend a package and confirm
                the price before booking.
              </p>
            </div>
            <ButtonLink href={contactHref} size="lg" className="shrink-0">
              Get a recommendation
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "@/components/ui/icons";
import { PackageCard } from "@/components/pricing/PackageCard";
import { PricingDisclaimer } from "@/components/pricing/PricingDisclaimer";
import { packages } from "@/data/packages";

export function PackagesPreview() {
  return (
    <section aria-labelledby="packages-preview-heading" className="border-t border-line bg-mist py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="packages-preview-heading"
            eyebrow="Packages"
            title="Three clear starting points."
            intro="Pick the package closest to the size of your system. We'll confirm the exact scope and price with you before any work begins."
          />
          <ButtonLink href="/packages/" variant="secondary" className="self-start lg:self-auto">
            Compare packages in detail
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-5">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <PricingDisclaimer className="mt-10" />
      </Container>
    </section>
  );
}

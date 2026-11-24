import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ScopeOverview } from "@/components/services/ScopeOverview";
import { pageMetadata } from "@/config/seo";
import { services } from "@/data/services";

export const metadata = pageMetadata({
  title: "Vent & Air Duct Cleaning Services",
  description:
    "What AERO CLEAN's air duct cleaning, HVAC vent and register cleaning, supply and return vent cleaning and dust removal services involve — plus clear limits and exclusions.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Services", href: "/services/" }]} />}
        eyebrow="Services"
        title="What we clean, how we do it — and where we stop."
        intro={
          <p>
            Each service below explains what&rsquo;s involved, what to expect, the realistic benefits and the limits. If
            something needs a specialist, we&rsquo;ll say so plainly.
          </p>
        }
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/packages/" size="lg">
            View packages
            <ArrowRight className="size-4.5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="#scope" size="lg" variant="ghostDark">
            What we don&rsquo;t provide
          </ButtonLink>
        </div>
      </PageHero>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Services on this page">
              <p className="eyebrow text-ink-500">On this page</p>
              <ol className="mt-4 space-y-1 border-l border-line">
                {services.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`#${s.slug}`}
                      className="-ml-px flex min-h-10 items-center border-l-2 border-transparent pl-4 text-[0.95rem] text-ink-500 hover:border-cyan-500 hover:text-ink-900"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#scope"
                    className="-ml-px flex min-h-10 items-center border-l-2 border-transparent pl-4 text-[0.95rem] font-medium text-ink-700 hover:border-cyan-500 hover:text-ink-900"
                  >
                    What we do &amp; don&rsquo;t provide
                  </a>
                </li>
              </ol>
            </nav>
          </aside>

          <div>
            {services.map((service, i) => (
              <ServiceDetail key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </Container>

      <section id="scope" aria-labelledby="scope-heading" className="scroll-mt-24 border-t border-line bg-mist py-20 sm:py-24">
        <Container>
          <SectionHeading
            id="scope-heading"
            eyebrow="Scope"
            title="What AERO CLEAN does and does not provide."
            intro={
              <p>
                Clear boundaries protect you from paying for work you didn&rsquo;t need — and from work being done by someone
                who isn&rsquo;t qualified for it. This scope applies to every package and matches our{" "}
                <Link href="/terms/" className="font-medium text-navy-600 underline decoration-cyan-500/60 underline-offset-4">
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            }
          />
          <div className="mt-12">
            <ScopeOverview />
          </div>
        </Container>
      </section>
    </>
  );
}

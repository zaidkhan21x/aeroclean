import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/icons";
import { primaryNav } from "@/config/navigation";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="on-dark bg-ink-950 text-white">
      <Container className="py-24 sm:py-32">
        <p className="eyebrow text-ember-300">Error 404</p>
        <h1 className="mt-5 max-w-2xl text-[2.4rem] leading-[1.05] font-semibold tracking-[-0.03em] text-white sm:text-[3.4rem]">
          This vent leads nowhere.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/70">The page you were looking for doesn&rsquo;t exist or has moved.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          {primaryNav.map((item, i) => (
            <ButtonLink key={item.href} href={item.href} variant={i === 0 ? "primary" : "ghostDark"}>
              {item.label}
              {i === 0 ? <ArrowRight className="size-4" aria-hidden="true" /> : null}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </section>
  );
}

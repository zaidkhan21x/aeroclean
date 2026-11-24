import type { ReactNode } from "react";
import { Container } from "./Container";

/** Shared header band for inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  breadcrumbs,
}: {
  breadcrumbs?: ReactNode;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_85%_0%,#000_5%,transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 -z-10 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(255_138_31/0.16),transparent)]"
      />
      <Container className="py-14 sm:py-20">
        {breadcrumbs}
        <p className="eyebrow text-ember-300">
          <span aria-hidden="true" className="h-px w-8 bg-ember-400/80" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-[2.4rem] leading-[1.04] font-semibold tracking-[-0.03em] text-white sm:text-[3.5rem]">
          {title}
        </h1>
        {intro ? <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</div> : null}
        {children}
      </Container>
    </section>
  );
}

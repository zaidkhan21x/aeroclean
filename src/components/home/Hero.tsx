import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/icons";
import { contactHref } from "@/config/navigation";
import { packages, formatUsd } from "@/data/packages";
import { VentVisual } from "./VentVisual";

const lowestPrice = Math.min(...packages.map((p) => p.startingPrice));

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="on-dark relative isolate overflow-hidden bg-ink-950 text-white">
      {/* Background structure: faint engineering grid + warm light from the vent side */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_70%_40%,#000_10%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-[-10%] right-[-20%] -z-10 h-[120%] w-[80%] bg-[radial-gradient(closest-side,rgb(255_138_31/0.20),transparent)] lg:right-[-8%]"
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-6 pt-14 pb-8 sm:pt-20 lg:min-h-[min(46rem,calc(100svh-var(--header-h)-4.5rem))] lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-ember-300">
              <span aria-hidden="true" className="h-px w-8 bg-ember-400/80" />
              Vent &amp; air duct cleaning
            </p>
            <h1
              id="hero-heading"
              className="mt-6 text-[2.75rem] leading-[0.98] font-semibold tracking-[-0.035em] text-white sm:text-[4rem] lg:text-[4.6rem] xl:text-[5.2rem]"
            >
              Vent cleaning,
              <br />
              done{" "}
              <span className="bg-gradient-to-r from-ember-300 via-ember-400 to-ember-500 bg-clip-text text-transparent">
                properly.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/72 sm:text-[1.2rem]">
              AERO CLEAN removes built-up dust and debris from your supply and return vents, registers and accessible
              ductwork — with protected floors, clear starting prices and a straight answer about what your system actually
              needs.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/packages/" size="lg">
                View packages &amp; prices
                <ArrowRight className="size-4.5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={contactHref} size="lg" variant="ghostDark">
                Request a quote
              </ButtonLink>
            </div>
            <p className="mt-6 font-mono text-[0.78rem] tracking-wide text-white/50">
              Packages start from {formatUsd(lowestPrice)} · Final price confirmed before work begins
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
            <div className="lg:[transform:perspective(1400px)_rotateY(-12deg)_rotateX(4deg)]">
              <VentVisual className="h-auto w-full drop-shadow-[0_40px_80px_rgb(0_0_0/0.45)]" />
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-2 border-t border-white/10 text-sm sm:grid-cols-4" aria-label="What we clean">
          {["Supply vents", "Return grilles", "Registers & diffusers", "Accessible ductwork"].map((item, i) => (
            <li
              key={item}
              className={`flex items-center gap-3 py-5 text-white/75 ${i % 2 === 1 ? "pl-5 sm:pl-6" : ""} ${i > 1 ? "border-t border-white/10 sm:border-t-0" : ""} ${i > 0 ? "sm:border-l sm:border-white/10 sm:pl-6" : ""} ${i === 1 ? "border-l border-white/10" : ""} ${i === 3 ? "border-l border-white/10" : ""}`}
            >
              <span className="font-mono text-[0.7rem] text-ember-300/80">0{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

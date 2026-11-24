import { contactHref } from "@/config/navigation";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Phone } from "@/components/ui/icons";
import { contact, telHref } from "@/config/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-line/80 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
      <Container size="wide" className="flex h-full items-center justify-between gap-6">
        <Logo priority className="h-[3.4rem] w-auto sm:h-[3.75rem]" />
        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={contactHref} className={buttonClasses("dark", "md", "max-sm:hidden")}>
            Contact us
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          {telHref() ? (
            <a
              href={telHref()!}
              className="grid size-11 place-items-center rounded-md bg-cyan-500 text-ink-950 sm:hidden"
              aria-label={`Call AERO CLEAN on ${contact.phoneDisplay}`}
            >
              <Phone className="size-5" aria-hidden="true" />
            </a>
          ) : null}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

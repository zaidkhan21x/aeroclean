import Link from "next/link";
import { legalNav, primaryNav } from "@/config/navigation";
import { contact, legal, siteConfig, telHref } from "@/config/site";
import { services } from "@/data/services";
import { packages, formatUsd } from "@/data/packages";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const tel = telHref();
  return (
    <footer className="border-t border-line bg-mist text-ink-600" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <div className="inline-block rounded-md bg-white p-2 ring-1 ring-line">
              <Logo className="h-16 w-auto" />
            </div>
            <p className="mt-5 text-[0.95rem] leading-relaxed">
              Professional vent and air duct cleaning for supply and return vents, registers and accessible ductwork — with clear
              starting prices and honest advice.
            </p>
          </div>

          <FooterCol title="Navigate">
            {primaryNav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            <li>
              <a href="#contact" className="hover:text-ink-900">
                Contact
              </a>
            </li>
          </FooterCol>

          <FooterCol title="Services">
            {services.slice(0, 5).map((s) => (
              <FooterLink key={s.slug} href={`/services/#${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Packages">
            {packages.map((p) => (
              <FooterLink key={p.id} href={`/packages/#${p.id}`}>
                {p.name} <span className="text-ink-400">· from {formatUsd(p.startingPrice)}</span>
              </FooterLink>
            ))}
            <FooterLink href="/faqs/">FAQs</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-14 grid gap-6 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <FooterDetail label="Phone">
            {tel ? <a href={tel} className="hover:text-ink-900">{contact.phoneDisplay}</a> : <Placeholder label="Business phone" />}
          </FooterDetail>
          <FooterDetail label="Email">
            {contact.email ? (
              <a href={`mailto:${contact.email}`} className="break-all hover:text-ink-900">
                {contact.email}
              </a>
            ) : (
              <Placeholder label="Business email" />
            )}
          </FooterDetail>
          <FooterDetail label="Service area">{contact.serviceArea ?? <Placeholder label="Service area" />}</FooterDetail>
          {contact.address ? (
            <FooterDetail label="Address">
              {contact.address.street}, {contact.address.locality}, {contact.address.region} {contact.address.postalCode}
            </FooterDetail>
          ) : contact.social.length ? (
            <FooterDetail label="Follow">
              <span className="flex flex-wrap gap-x-4">
                {contact.social.map((s) => (
                  <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink-900">
                    {s.label}
                  </a>
                ))}
              </span>
            </FooterDetail>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.brandName}
            {legal.legalEntityName && legal.legalEntityName.replace(/\s/g, "").toLowerCase() !== siteConfig.brandName.replace(/\s/g, "").toLowerCase() ? ` · ${legal.legalEntityName}` : null}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-[0.72rem] font-medium tracking-[0.16em] text-ink-400 uppercase">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-[0.95rem]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-ink-900">
        {children}
      </Link>
    </li>
  );
}

function FooterDetail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[0.7rem] tracking-[0.14em] text-ink-400 uppercase">{label}</p>
      <p className="mt-1.5 text-ink-700">{children}</p>
    </div>
  );
}

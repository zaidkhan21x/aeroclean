import { ButtonLink } from "@/components/ui/Button";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "@/components/ui/icons";
import { Placeholder } from "@/components/ui/Placeholder";
import { Container } from "@/components/ui/Container";
import { buildMailto, contact, hasAnyContact, siteConfig, telHref } from "@/config/site";
import { defaultRequestBody } from "./requestHref";

/**
 * Contact section rendered at the end of every page (id="contact").
 * There is deliberately no web form: a static site cannot deliver form
 * submissions without a third-party processor, so visitors contact the
 * business directly by phone or email.
 */
export function ContactBand() {
  const tel = telHref();
  const mail = buildMailto("Vent cleaning enquiry", defaultRequestBody());
  const sms = contact.smsE164 ? `sms:${contact.smsE164}` : null;
  const wa = contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : null;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="on-dark relative isolate overflow-hidden bg-ink-950 text-white">
      {/* Warm glow motif from the hero, kept very subtle. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgb(255_138_31/0.22),transparent)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <Container className="py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-cyan-300">
              <span aria-hidden="true" className="h-px w-6 bg-cyan-300/70" />
              Contact {siteConfig.brandName}
            </p>
            <h2 id="contact-heading" className="mt-4 text-[2rem] leading-[1.1] font-semibold tracking-[-0.024em] text-white sm:text-[2.6rem]">
              Tell us about your vents. We&rsquo;ll tell you what they need.
            </h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-white/70">
              Call or email with your property type, roughly how many vents you have and any hard-to-reach areas. We&rsquo;ll
              recommend a package, confirm the scope and price, and find a time that suits you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tel ? (
                <ButtonLink href={tel} size="lg">
                  <Phone className="size-4.5" aria-hidden="true" />
                  Call {contact.phoneDisplay}
                </ButtonLink>
              ) : null}
              {mail ? (
                <ButtonLink href={mail} size="lg" variant={tel ? "ghostDark" : "primary"}>
                  <Mail className="size-4.5" aria-hidden="true" />
                  Email a request
                </ButtonLink>
              ) : null}
              {sms ? (
                <ButtonLink href={sms} size="lg" variant="ghostDark">
                  <MessageCircle className="size-4.5" aria-hidden="true" />
                  Send a text
                </ButtonLink>
              ) : null}
              {wa ? (
                <ButtonLink href={wa} size="lg" variant="ghostDark">
                  <MessageCircle className="size-4.5" aria-hidden="true" />
                  WhatsApp
                </ButtonLink>
              ) : null}
            </div>

            {!hasAnyContact ? (
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60">
                <Placeholder tone="dark" label="Contact buttons appear here once a phone number and/or email are added in src/config/site.ts" />
              </p>
            ) : null}

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/50">
              These buttons open your own phone or email app. This website doesn&rsquo;t collect, store or send your details.
              A booking is confirmed only when we confirm it with you directly.
            </p>
          </div>

          <dl className="grid content-start gap-px self-start overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/10">
            <ContactRow icon={<Phone className="size-4.5" aria-hidden="true" />} label="Phone">
              {tel ? (
                <a href={tel} className="hover:text-cyan-300">
                  {contact.phoneDisplay}
                </a>
              ) : (
                <Placeholder tone="dark" label="Business phone" />
              )}
            </ContactRow>
            <ContactRow icon={<Mail className="size-4.5" aria-hidden="true" />} label="Email">
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="break-all hover:text-cyan-300">
                  {contact.email}
                </a>
              ) : (
                <Placeholder tone="dark" label="Business email" />
              )}
            </ContactRow>
            <ContactRow icon={<MapPin className="size-4.5" aria-hidden="true" />} label="Service area">
              {contact.serviceArea ?? <Placeholder tone="dark" label="Service area" />}
            </ContactRow>
            <ContactRow icon={<Clock className="size-4.5" aria-hidden="true" />} label="Hours">
              {contact.hours?.length ? (
                <ul className="space-y-0.5">
                  {contact.hours.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : (
                <Placeholder tone="dark" label="Operating hours" />
              )}
            </ContactRow>
          </dl>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 bg-ink-900 px-5 py-5 sm:px-6">
      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-cyan-300">
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-white/50 uppercase">{label}</dt>
        <dd className="mt-1 text-[1.02rem] font-medium text-white">{children}</dd>
      </div>
    </div>
  );
}

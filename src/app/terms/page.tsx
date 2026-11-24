import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ReviewNote } from "@/components/ui/ReviewNote";
import { Placeholder } from "@/components/ui/Placeholder";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";
import { LegalContactDetails } from "@/components/legal/ContactDetails";
import { pageMetadata } from "@/config/seo";
import { legal, legalName, siteConfig } from "@/config/site";
import { formatUsd, notIncludedInPackages, packages, priceFactors } from "@/data/packages";
import { outOfScope } from "@/data/services";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "The terms that apply when you book vent or air duct cleaning with AERO CLEAN: scope, starting prices, quotes, scheduling, cancellations, payment, liability and your rights.",
  path: "/terms/",
});

const brand = siteConfig.brandName;

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction and acceptance of terms",
    content: (
      <>
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) apply to vent and air duct cleaning services provided by{" "}
          {legal.legalEntityName ? (
            <strong>{legalName}</strong>
          ) : (
            <Placeholder label="Legal business name" />
          )}
          {legal.entityDescription ? `, ${legal.entityDescription},` : null} trading as <strong>{brand}</strong> (&ldquo;
          {brand}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), and to your use of this website.
        </p>
        <p>
          By confirming a booking with us, you agree to these Terms together with the details in your Quote and Booking
          Confirmation. If anything in your Quote or Booking Confirmation conflicts with these Terms, the Quote or Booking
          Confirmation applies for that booking. If you do not agree with these Terms, please do not book our services.
        </p>
        <p>
          <strong>Nothing in these Terms removes or limits any right you have under consumer protection laws that cannot
          be waived or limited by contract.</strong> Where a law gives you more protection than these Terms, the law
          applies.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    content: (
      <ul>
        <li>
          <strong>Services</strong> — the vent and air duct cleaning services described on our{" "}
          <Link href="/services/">Services</Link> page, and any optional services we agree to provide.
        </li>
        <li>
          <strong>Package</strong> — one of our three service packages: {packages.map((p) => p.name).join(", ").replace(/, ([^,]*)$/, " or $1")}.
        </li>
        <li>
          <strong>Starting price</strong> — the lowest price at which a Package is offered, before the factors in sections 5
          and 6 are taken into account.
        </li>
        <li>
          <strong>Quote</strong> — the price and scope we give you for a specific job, by email, text message or in writing.
        </li>
        <li>
          <strong>Booking Confirmation</strong> — our direct confirmation to you of the date, time window, scope and price of
          a booking.
        </li>
        <li>
          <strong>Scope</strong> — the vents, duct sections and services included in your Booking Confirmation.
        </li>
        <li>
          <strong>Property</strong> — the home or premises where the Services are carried out.
        </li>
        <li>
          <strong>Specialist issue</strong> — a condition that needs a different qualified trade or specialist, as described
          in section 16.
        </li>
        <li>
          <strong>You</strong> — the person booking the Services, and anyone authorizing them on the Property owner&rsquo;s
          behalf.
        </li>
      </ul>
    ),
  },
  {
    id: "scope",
    title: "Service descriptions and scope",
    content: (
      <>
        <p>
          Our Services are mechanical cleaning services. We remove dust and debris from vent covers (registers, grilles and
          diffusers), vent openings and accessible duct runs using hand cleaning, agitation tools and vacuum collection
          equipment, as described on our <Link href="/services/">Services</Link> page.
        </p>
        <p>
          Descriptions on this website are general information. The exact Scope of your job is the Scope stated in your
          Quote and Booking Confirmation. &ldquo;Accessible&rdquo; means parts of the system we can reach safely through
          existing openings without cutting into ductwork, dismantling HVAC equipment or working in unsafe conditions.
        </p>
        <p>
          We may decline to clean any area that we reasonably consider unsafe or outside our expertise. If we do, we will
          explain why.
        </p>
      </>
    ),
  },
  {
    id: "package-pricing",
    title: "Package pricing",
    content: (
      <>
        <p>We offer three Packages. All prices are starting prices in United States dollars (USD):</p>
        <ul>
          {packages.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> — starting at {formatUsd(p.startingPrice)} USD. {p.positioning}
            </li>
          ))}
        </ul>
        <p>
          The typical scope of each Package is described on our <Link href="/packages/">Packages &amp; Pricing</Link> page.
          We do not advertise discounts against inflated &ldquo;original&rdquo; prices, and we do not use time-limited
          countdown offers.
        </p>
        <p>
          <strong>Taxes:</strong> prices quoted to you include any applicable sales tax.
        </p>
        <ReviewNote>
          Sales tax treatment of cleaning services differs between U.S. states (and sometimes cities). Confirm with your
          state revenue department or accountant whether tax applies, then replace the placeholder above.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "starting-price-conditions",
    title: "Starting-price conditions",
    content: (
      <>
        <p>
          A starting price applies to the typical scope of a Package under straightforward conditions — for example, vents
          that can be reached safely without special equipment, a typical level of dust buildup and a Property within our
          normal service area. The final price may be higher depending on:
        </p>
        <ul>
          {priceFactors.map((f) => (
            <li key={f.title}>
              <strong>{f.title}:</strong> {f.detail}
            </li>
          ))}
        </ul>
        <p>
          We genuinely offer every Package at its starting price where the conditions above are met. We will not discourage
          you from booking the Package you choose in order to sell you a different one.
        </p>
      </>
    ),
  },
  {
    id: "quotes",
    title: "Quotes and additional charges",
    content: (
      <>
        <p>
          Before any work starts, we will give you a Quote that states the Scope and price. A Quote is valid for the period
          stated on it, or for 7 days if no period is stated.
        </p>
        <p>
          If, during the visit, we find that the job differs from what was described to us — for example, more vents,
          harder access or much heavier buildup — we will stop, explain the difference and tell you the revised price{" "}
          <strong>before</strong> doing any additional work. Additional work is carried out only with your approval. If you
          do not approve it, we will complete the originally agreed Scope where it is practical and safe to do so, and you
          will pay only for the work agreed and performed.
        </p>
        <p>We will never charge you for work that you did not approve.</p>
      </>
    ),
  },
  {
    id: "booking",
    title: "Booking and scheduling",
    content: (
      <>
        <p>
          You can request a booking by phone or email. A booking is only confirmed when we send you a Booking Confirmation.
          This website does not take bookings or payments, and no automated confirmation is ever sent from it.
        </p>
        <p>
          Arrival times are given as a time window. We will contact you if we expect to arrive outside that window, for
          example because of traffic, weather or an earlier job taking longer than planned. If we need to reschedule, we
          will offer you the next suitable time at no extra charge.
        </p>
      </>
    ),
  },
  {
    id: "customer-responsibilities",
    title: "Customer responsibilities",
    content: (
      <>
        <p>To help us carry out the Services safely and effectively, you agree to:</p>
        <ul>
          <li>give us accurate information about the Property, the number and location of vents and any access difficulties;</li>
          <li>
            tell us before the visit about any known or suspected hazards, including mold, pests, damaged or disconnected
            ductwork, previous fire, smoke or water damage, or materials that may contain asbestos;
          </li>
          <li>
            make sure an adult (18 or over) who is authorized to give access and approve work is present, or reachable by
            phone, during the visit;
          </li>
          <li>
            confirm you have permission to have the Services carried out (for example, landlord or building management
            approval if you rent or live in a managed building);
          </li>
          <li>move small, fragile or valuable items away from the vents in the Scope and keep pets and children away from work areas;</li>
          <li>allow the heating and cooling system to be switched off while we work.</li>
        </ul>
      </>
    ),
  },
  {
    id: "access",
    title: "Property access requirements",
    content: (
      <>
        <p>You agree to provide safe, reasonable access to the Property and to each vent in the Scope, including:</p>
        <ul>
          <li>a clear path to each vent, and access to the HVAC system&rsquo;s thermostat or controls;</li>
          <li>safe access to any attic, crawl space or utility area included in the Scope, with adequate lighting;</li>
          <li>access to a standard electrical outlet if our equipment needs one;</li>
          <li>details of any parking, building access or working-hour rules that apply.</li>
        </ul>
        <p>
          If we cannot access the Property at the agreed time, or areas in the Scope are inaccessible or unsafe, we may need
          to reschedule or adjust the Scope and price. Section 11 explains when a late-cancellation fee may apply.
        </p>
      </>
    ),
  },
  {
    id: "limitations",
    title: "Service limitations and exclusions",
    content: (
      <>
        <p>Unless separately agreed in writing, our Packages do not include:</p>
        <ul>
          {notIncludedInPackages.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p>We do not provide the following specialist services at all:</p>
        <ul>
          {outOfScope.map((x) => (
            <li key={x.title}>{x.title}</li>
          ))}
        </ul>
        <p>
          <strong>No health or air-quality guarantee.</strong> We remove dust and debris from the parts of the system we
          clean. We do not claim or guarantee that our Services will cure or prevent allergies or illness, or produce a
          specific improvement in indoor air quality, energy use or system performance.
        </p>
        <p>
          We cannot clean areas of the system that are inaccessible, and we cannot guarantee the removal of every particle
          from surfaces we clean. Older, painted, brittle or damaged vent covers and ductwork may not be removable or may be
          fragile; we will tell you before handling anything we think is at risk.
        </p>
      </>
    ),
  },
  {
    id: "cancellations",
    title: "Cancellations and rescheduling",
    content: (
      <>
        <h3>Cancelling or rescheduling with us</h3>
        <p>
          You may cancel or reschedule a booking by contacting us at least{" "}
          {legal.cancellationNotice ?? <Placeholder label="notice period, e.g. 24 hours" />} before the start of your arrival
          window, at no charge.{" "}
          {legal.lateCancellationFee ? (
            <>
              If you cancel with less notice, or we cannot access the Property at the agreed time, a late-cancellation fee of{" "}
              {legal.lateCancellationFee} may apply. This fee reflects the cost of the reserved time and travel, and it is
              stated in your Booking Confirmation.
            </>
          ) : (
            <Placeholder label="Late-cancellation fee, or state that none is charged" />
          )}
        </p>
        <h3>Your legal cancellation rights</h3>
        <p>
          If you agree to buy Services worth $25 or more while we are at your home, or at another location that is not our
          permanent place of business, you may have the right to cancel under the U.S. Federal Trade Commission&rsquo;s
          Cooling-Off Rule (16 CFR Part 429) — generally until midnight of the third business day after the sale. Where the
          Rule applies, we will tell you about your right to cancel and give you the required cancellation forms at the time
          of sale. Your state&rsquo;s law may give you additional rights. If you cancel within a period allowed by law, we
          will refund any payment as the law requires.
        </p>
        <h3>Cancellation by us</h3>
        <p>
          We may cancel or reschedule a booking if conditions are unsafe, if a Specialist issue prevents the work, or for
          reasons outside our reasonable control. If we cancel, we will refund any amount you paid in advance for work that
          was not performed.
        </p>
        <ReviewNote>
          Set <code>legal.cancellationNotice</code> and <code>legal.lateCancellationFee</code> in{" "}
          <code>src/config/site.ts</code>. Have an attorney confirm how the FTC Cooling-Off Rule (including its exemptions)
          and any state home-solicitation law apply to the way you sell — particularly if quotes are agreed or upgrades are
          sold at the customer&rsquo;s home. Where the Rule applies, you must give the customer the written notice and two
          copies of the cancellation form it requires.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "payment",
    title: "Payment terms",
    content: (
      <>
        <p>
          Unless your Quote says otherwise, payment is due when the Services are completed. We will give you an invoice or
          receipt showing what was done and what you paid.
        </p>
        <p>
          <strong>Accepted payment methods:</strong>{" "}
          {legal.paymentMethods?.length ? legal.paymentMethods.join(", ") : <Placeholder label="Accepted payment methods" />}.
        </p>
        <p>
          We do not require a deposit to book. We do not take payments through this website. Any late-payment charge applies only if it is stated in your Quote and permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "refunds",
    title: "Refunds and disputes",
    content: (
      <>
        <p>
          If you are not satisfied with the Services, please contact us as soon as possible — ideally within 7 days — and
          describe the problem, with photos if you can. Reporting quickly lets us inspect the issue while it can still be
          assessed fairly.
        </p>
        <p>
          We will review your concern in good faith. If the agreed Scope was not completed to a reasonable standard, we will
          offer to return and re-clean the affected area at no extra cost, or give a full or partial refund for the affected
          work, as appropriate.
        </p>
        <p>
          These steps do not limit any legal rights or remedies you have. You can also contact your state Attorney
          General&rsquo;s consumer protection office or your local consumer protection agency.
        </p>
      </>
    ),
  },
  {
    id: "damage",
    title: "Property damage and liability",
    content: (
      <>
        <p>
          We take reasonable care to protect your Property, including covering floors and furnishings near work areas. If we
          damage your Property through our negligence or breach of these Terms, we will take responsibility as required by
          law — normally by repairing the damage, arranging repair, or paying the reasonable cost of repair or replacement.
        </p>
        <p>
          Please tell us about any damage as soon as you notice it, ideally before we leave or within 48 hours, with photos
          where possible.
        </p>
        <p>
          We are not responsible for pre-existing damage or wear, or for faults in the HVAC system or ductwork that existed
          before our visit, except to the extent our own negligence made them worse.
        </p>
        <ReviewNote>
          Do not state that the business is insured, licensed, bonded or certified unless this is true and current. Remove the
          insurance line entirely if you prefer not to mention it.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "health-safety",
    title: "Health and safety",
    content: (
      <>
        <p>
          We may pause or stop work if we reasonably believe that continuing would put anyone, or the Property, at risk.
          Cleaning can briefly disturb dust, so we recommend that anyone with respiratory sensitivities stays out of the room
          while we work, and we ask that children and pets are kept away from work areas and equipment.
        </p>
        <p>
          Our standard Services do not use chemical biocides, sanitizers, fogging products or duct sealants. We do not
          disturb materials we suspect may contain asbestos.
        </p>
      </>
    ),
  },
  {
    id: "specialist",
    title: "Circumstances requiring specialist services",
    content: (
      <>
        <p>If we find, or reasonably suspect, any of the following, we will stop work in the affected area:</p>
        <ul>
          <li>mold or other microbial growth;</li>
          <li>signs of rodents, insects or other animals in the system;</li>
          <li>materials that may contain asbestos;</li>
          <li>damaged, disconnected or collapsed ductwork;</li>
          <li>fire, smoke, soot or water-damage residue;</li>
          <li>electrical faults or other hazards.</li>
        </ul>
        <p>
          We will show you what we found, explain why the area needs a specialist and suggest the type of professional to
          contact. You are under no obligation to buy any additional service from us. We will agree with you how the price for
          that booking is adjusted for any part of the Scope that cannot be completed; you will not pay for work that was not
          performed.
        </p>
      </>
    ),
  },
  {
    id: "completion",
    title: "Service completion and customer concerns",
    content: (
      <>
        <p>
          When the work is finished, we will walk you through what was cleaned and point out anything we noticed that may need
          attention. Please check the work areas before we leave if you can, and raise any concern with us straight away.
        </p>
        <p>
          If a concern comes up after the visit, contact us using the details in section 23 and we will respond promptly
          and follow the process in section 13.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <p>
        The {brand} name, logo, website design, text and graphics are owned by or licensed to {legalName} and are protected by
        intellectual property laws. You may view and print pages for personal, non-commercial use. You may not copy, modify,
        republish or use them for commercial purposes without our written permission.
      </p>
    ),
  },
  {
    id: "website-use",
    title: "Website use",
    content: (
      <>
        <p>
          This website provides general information about our Services. It does not collect personal information through
          forms, does not take bookings or payments and does not provide professional, medical or engineering advice.
        </p>
        <p>
          We try to keep the website accurate and available, but information may occasionally be out of date and the website
          may sometimes be unavailable. Links to third-party websites (such as the U.S. EPA) are provided for convenience; we
          are not responsible for their content.
        </p>
        <p>
          You must not misuse the website, including by attempting to gain unauthorized access, introducing malicious code or
          interfering with its operation. Our <Link href="/privacy/">Privacy Policy</Link> explains how we handle personal
          information.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    content: (
      <>
        <p>To the fullest extent permitted by applicable law:</p>
        <ul>
          <li>
            we are not liable for indirect or consequential losses that were not reasonably foreseeable when the booking was
            made, such as lost income or business interruption;
          </li>
          <li>
            apart from the exceptions below, our total liability arising from a booking is limited to the greater of the amount
            you paid for that booking and the reasonable cost of repairing or replacing physical damage to your Property
            caused by our negligence.
          </li>
        </ul>
        <p>
          <strong>Nothing in these Terms limits or excludes our liability</strong> for death or personal injury caused by our
          negligence, for fraud or fraudulent misrepresentation, for gross negligence or willful misconduct, or for any other
          liability that cannot be limited or excluded under applicable law. Nothing in these Terms affects your statutory
          rights as a consumer.
        </p>
        <ReviewNote>
          Enforceability of liability limits in consumer service contracts varies by state. Have a licensed attorney in your
          operating state review this section before publication.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <p>
        We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page shows when
        they were last changed. The version in force when your booking was confirmed applies to that booking, unless we both
        agree otherwise in writing.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law and jurisdiction",
    content: (
      <>
        <p>
          These Terms are governed by the laws of{" "}
          {legal.governingLawJurisdiction ?? <Placeholder label="State of operation, e.g. the State of Texas" />}
          {", "}without regard to its conflict-of-law rules, and by applicable U.S. federal law.
        </p>
        <p>
          Any dispute that we cannot resolve together will be handled by the courts located in{" "}
          {legal.disputeVenue ?? <Placeholder label="County and state for disputes" />}, unless the law gives you the right to
          bring a claim elsewhere. Nothing in this section prevents you from bringing a claim in small claims court where
          eligible, or from contacting a government consumer protection agency.
        </p>
        <ReviewNote>
          The governing law and venue have deliberately not been chosen for you. Set <code>legal.governingLawJurisdiction</code>{" "}
          and <code>legal.disputeVenue</code> once the operating state is confirmed. Do not add an arbitration clause or class
          action waiver without legal advice.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact information",
    content: (
      <>
        <p>Questions about these Terms, or a concern about our Services? Contact us:</p>
        <LegalContactDetails />
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms/" }]} />}
        eyebrow="Legal"
        title="Terms & Conditions"
        intro={
          <p>
            Plain-language terms for booking vent and air duct cleaning with {brand}.{" "}
            <span className="font-mono text-sm text-white/50">Last updated: {legal.termsLastUpdated}</span>
          </p>
        }
      />
      <LegalDocument
        sections={sections}
        preface={
          <ReviewNote title="Before publishing: legal review">
            This document was drafted with reference to U.S. federal consumer-protection rules (FTC Act, FTC Cooling-Off Rule,
            FTC Guides Against Bait Advertising). The business&rsquo;s operating state, legal entity and several commercial
            terms are not yet known, so items marked in amber are placeholders. Have the completed document reviewed by a
            licensed attorney in your state, then set <code>legal.showReviewNotes</code> to <code>false</code>. See{" "}
            <code>COMPLIANCE-RESEARCH.md</code>.
          </ReviewNote>
        }
      />
    </>
  );
}

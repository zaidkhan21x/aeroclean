import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ReviewNote } from "@/components/ui/ReviewNote";
import { Placeholder } from "@/components/ui/Placeholder";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";
import { LegalContactDetails } from "@/components/legal/ContactDetails";
import { pageMetadata } from "@/config/seo";
import { contact, legal, legalName, privacyEmail, siteConfig } from "@/config/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How AERO CLEAN handles personal information. This website uses no forms, analytics, advertising pixels or tracking cookies; we only receive the details you choose to send us by phone or email.",
  path: "/privacy/",
});

const brand = siteConfig.brandName;
const host = legal.hostingProvider;

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          This Privacy Policy explains how {legal.legalEntityName ? legalName : brand}, trading as {brand} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, &ldquo;our&rdquo;), handles personal information when you visit this website or contact us about
          our vent and air duct cleaning services.
        </p>
        <p>
          <strong>In short:</strong> this website does not use contact forms, analytics, advertising pixels or tracking cookies.
          We only receive personal information that you choose to send us — for example by calling or emailing us — plus
          the standard technical records our website host keeps to deliver the site securely.
        </p>
      </>
    ),
  },
  {
    id: "information-collected",
    title: "Information we collect",
    content: (
      <>
        <p>We collect two kinds of information:</p>
        <ul>
          <li>
            <strong>Information you give us</strong> when you contact us or book a service (sections 3 and 4).
          </li>
          <li>
            <strong>Limited technical information</strong> processed by our website host when your browser loads the site
            (section 5).
          </li>
        </ul>
        <p>
          We do not knowingly collect sensitive personal information, and we ask that you do not send it to us (for example,
          Social Security numbers, health information or full payment card numbers by email).
        </p>
      </>
    ),
  },
  {
    id: "voluntary",
    title: "Personal information you provide",
    content: (
      <>
        <p>When you contact us, request a quote or book a service, you may give us:</p>
        <ul>
          <li>your name, phone number and email address;</li>
          <li>the address of the Property where the service will take place;</li>
          <li>details about the Property and its ventilation system, including photos you choose to send;</li>
          <li>your preferred dates and times, and any access instructions;</li>
          <li>billing details needed to invoice you and record payment.</li>
        </ul>
        <p>
          We do not take payments through this website. If you pay us by card or another electronic method, the payment is
          handled by the payment provider you use, under its own privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "contact-information",
    title: "Contact and inquiry information",
    content: (
      <>
        <p>
          The &ldquo;Call&rdquo;, &ldquo;Email&rdquo; and similar buttons on this website open your own phone or email app.
          Nothing is submitted to us through the website itself. Your message is delivered by your email or phone provider and
          is received in our business email account or on our business phone.
        </p>
        <p>
          We use these messages to respond to you, prepare quotes, schedule and carry out services, and keep a record of what
          was agreed.
        </p>
      </>
    ),
  },
  {
    id: "technical",
    title: "Technical information and analytics",
    content: (
      <>
        <p>
          <strong>We do not use analytics or advertising tools on this website</strong> — no Google Analytics, no Meta Pixel,
          no session recording and no third-party tracking scripts.
        </p>
        <p>
          Like almost every website, this site is delivered by a hosting provider (
          {host ?? <Placeholder label="Hosting provider name" />}). When your browser requests a page, the host&rsquo;s servers
          automatically process technical information such as your IP address, browser type, the page requested, the referring
          page and the date and time. The host uses this information to deliver the website, keep it secure and prevent abuse,
          and may keep it in server logs for a limited period under its own policies.
        </p>
        <p>
          If we ever add analytics or similar tools, we will update this policy first and, where the law requires it, ask for
          your consent before they run.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    content: (
      <>
        <p>
          This website does not set cookies and does not use local storage, tracking pixels or similar technologies to
          identify you. Our fonts are stored on our own website, so loading a page does not connect your browser to Google
          Fonts or other font services. Because no non-essential cookies or trackers are used, the website does not display a
          cookie-consent banner.
        </p>
        <p>
          <strong>Do Not Track and Global Privacy Control:</strong> because we do not track visitors across websites or sell or
          share personal information for targeted advertising, there is nothing for these browser signals to switch off on this
          website. We would honor them if that ever changed.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use information",
    content: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>respond to your questions and prepare quotes;</li>
          <li>schedule, carry out and follow up on services;</li>
          <li>issue invoices and receipts and keep business, tax and accounting records;</li>
          <li>handle concerns, complaints, damage reports or disputes;</li>
          <li>keep our staff, customers and properties safe; and</li>
          <li>comply with legal obligations.</li>
        </ul>
        <p>
          We do not sell your personal information. We do not use it for targeted advertising, and we do not send you marketing
          messages unless you ask us to.
        </p>
      </>
    ),
  },
  {
    id: "storage",
    title: "How information is stored",
    content: (
      <>
        <p>
          Information you send us is kept in our business email account, on our business phone and in the business tools
          we use to schedule and invoice work. Access is limited to the people who need it to provide our services.
        </p>
        <ReviewNote>
          List the actual providers that store customer information (for example your email provider, phone or SMS service,
          scheduling, invoicing or accounting software). Do not list any provider you do not use.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Information sharing",
    content: (
      <>
        <p>We share personal information only:</p>
        <ul>
          <li>
            with service providers that help us run the business (such as email, phone and invoicing providers), who may use it
            only to provide their services to us;
          </li>
          <li>with people you ask us to share it with, such as a landlord or property manager;</li>
          <li>when required by law, legal process or to protect rights, property or safety; and</li>
          <li>if the business is sold or transferred, with the new owner, who must continue to protect it.</li>
        </ul>
        <p>We do not sell personal information, and we do not &ldquo;share&rdquo; it for cross-context behavioral advertising.</p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services",
    content: (
      <>
        <ul>
          <li>
            <strong>Website hosting:</strong> {host ?? <Placeholder label="Hosting provider name" />} — see section 5.
          </li>
          <li>
            <strong>Your own email, phone or messaging apps:</strong> when you use a contact button, your provider handles the
            message under its own privacy policy.
          </li>
          {contact.whatsapp ? (
            <li>
              <strong>WhatsApp:</strong> if you message us on WhatsApp, WhatsApp/Meta processes the message under WhatsApp&rsquo;s
              privacy policy.
            </li>
          ) : null}
          <li>
            <strong>External links:</strong> links to other websites (for example the U.S. Environmental Protection Agency) are
            governed by those websites&rsquo; own privacy policies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    content: (
      <>
        <p>
          We keep personal information only for as long as we need it for the purposes in this policy, and for no longer
          than one year. Records are deleted automatically once that period ends, except where a law (for example, tax or
          accounting rules) requires a specific record to be kept for longer — in which case only that record is kept, and
          only for the period required.
        </p>
        <ReviewNote>
          Add specific retention periods if your accountant or attorney recommends them (for example, how long invoices are
          kept for tax purposes in your state).
        </ReviewNote>
      </>
    ),
  },
  {
    id: "security",
    title: "Data security",
    content: (
      <p>
        We use reasonable administrative and technical measures to protect personal information, such as password-protected
        business accounts and limiting access to people who need it. Because this website does not collect information
        through forms or store it in a database, there is no visitor data held on the website itself. No method of sending
        or storing information is completely secure, so please avoid sending sensitive information by email.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your privacy rights",
    content: (
      <>
        <p>
          Depending on where you live, you may have rights under state privacy laws — for example, California, Colorado,
          Connecticut, Virginia and a number of other U.S. states give residents rights over their personal information when
          a business meets that law&rsquo;s thresholds. These rights can include the right to:
        </p>
        <ul>
          <li>know what personal information we hold about you and receive a copy;</li>
          <li>correct inaccurate information;</li>
          <li>request deletion of your information;</li>
          <li>opt out of the sale or sharing of personal information (we do not sell or share it); and</li>
          <li>appeal our decision on your request, where state law provides that right.</li>
        </ul>
        <p>
          Whether or not a particular law applies to us, we will consider any reasonable request to access, correct or delete
          your information. We will not treat you differently for making a privacy request.
        </p>
        <ReviewNote>
          Which state privacy laws apply depends on where the business operates and on revenue and data-volume thresholds
          (for example, California&rsquo;s CCPA currently applies to businesses with more than $26,625,000 in annual gross
          revenue, among other triggers). Confirm with an attorney which laws apply and whether any additional disclosures
          are required.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "requests",
    title: "Data access and deletion requests",
    content: (
      <>
        <p>
          To make a request, email us at{" "}
          {privacyEmail ? <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a> : <Placeholder label="Privacy contact email" />}{" "}
          with the subject &ldquo;Privacy request&rdquo;, and tell us what you would like us to do. You may also contact us by
          phone using the details in section 18.
        </p>
        <p>
          To protect you, we will verify your identity before acting on a request — usually by confirming details that match
          our records. You may use an authorized agent where the law allows it; we may ask for proof of their authority. We
          will respond within the time required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    content: (
      <p>
        This website and our services are intended for adults. We do not knowingly collect personal information from children
        under 13, consistent with the Children&rsquo;s Online Privacy Protection Act (COPPA). If you believe a child has sent us
        personal information, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "international",
    title: "International data transfers",
    content: (
      <>
        <p>
          We provide services in the United States, and the information we handle is generally processed in the United States.
          Some of our service providers (for example, email or website hosting providers) may store or process information in
          other countries. Where that happens, they do so under their own safeguards and policies.
        </p>
        <ReviewNote>
          Confirm the business operates only in the United States. If you serve customers outside the U.S. (for example the
          EU, UK or Canada), additional privacy law requirements may apply.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "updates",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this Privacy Policy, for example if our website or business practices change. The &ldquo;Last
        updated&rdquo; date at the top of this page shows when it was last revised. Significant changes will be highlighted
        on this page.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact information",
    content: (
      <>
        <p>
          For privacy questions or requests, contact us. You can also read our{" "}
          <Link href="/terms/">Terms &amp; Conditions</Link>.
        </p>
        <LegalContactDetails privacy />
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy/" }]} />}
        eyebrow="Legal"
        title="Privacy Policy"
        intro={
          <p>
            No forms, no analytics, no tracking cookies — just the details you choose to send us.{" "}
            <span className="font-mono text-sm text-white/50">Last updated: {legal.privacyLastUpdated}</span>
          </p>
        }
      />
      <LegalDocument
        sections={sections}
        preface={
          <ReviewNote title="Before publishing: privacy review">
            This policy accurately describes the website as built: no forms, cookies, analytics or third-party scripts. If you
            add any of these (for example Google Analytics, a booking widget, a chat widget or a form service), this policy
            must be updated first and a consent mechanism may be required. Fill in the amber placeholders, have it reviewed
            for your state, then set <code>legal.showReviewNotes</code> to <code>false</code>.
          </ReviewNote>
        }
      />
    </>
  );
}

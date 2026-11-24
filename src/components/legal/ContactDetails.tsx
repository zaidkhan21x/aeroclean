import { contact, legal, legalName, privacyEmail, siteConfig } from "@/config/site";
import { Placeholder } from "@/components/ui/Placeholder";

/** Contact block reused at the end of both legal documents. */
export function LegalContactDetails({ privacy = false }: { privacy?: boolean }) {
  const email = privacy ? privacyEmail : contact.email;
  return (
    <ul>
      <li>
        <strong>Business:</strong> {siteConfig.brandName}
        {legal.legalEntityName ? <> ({legalName}{legal.entityDescription ? `, ${legal.entityDescription}` : ""})</> : <> (<Placeholder label="Legal business name & entity type" />)</>}
      </li>
      <li>
        <strong>Email:</strong> {email ? <a href={`mailto:${email}`}>{email}</a> : <Placeholder label={privacy ? "Privacy contact email" : "Business email"} />}
      </li>
      <li>
        <strong>Phone:</strong>{" "}
        {contact.phoneE164 && contact.phoneDisplay ? <a href={`tel:${contact.phoneE164}`}>{contact.phoneDisplay}</a> : <Placeholder label="Business phone" />}
      </li>
      {contact.address ? (
        <li>
          <strong>Mailing address:</strong>{" "}
          {`${contact.address.street}, ${contact.address.locality}, ${contact.address.region} ${contact.address.postalCode}`}
        </li>
      ) : null}
      {contact.serviceArea ? (
        <li>
          <strong>Service area:</strong> {contact.serviceArea}
        </li>
      ) : null}
    </ul>
  );
}

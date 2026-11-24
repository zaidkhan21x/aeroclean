import { buildMailto, telHref } from "@/config/site";
import { contactHref } from "@/config/navigation";

/**
 * Best available action for a "request this service" button:
 *   1. a pre-filled email (if an email address is configured)
 *   2. a phone call (if a phone number is configured)
 *   3. the on-page contact section (always valid, never a broken link)
 */
export function requestHref(subject: string, bodyLines?: string[]): string {
  return (
    buildMailto(subject, bodyLines ?? defaultRequestBody()) ??
    telHref() ??
    contactHref
  );
}

export function defaultRequestBody(extra: string[] = []): string[] {
  return [
    "Hello AERO CLEAN,",
    "",
    ...extra,
    "I'd like to ask about vent / air duct cleaning.",
    "",
    "Property type (house, apartment, office…): ",
    "General location / ZIP code: ",
    "Approximate number of vents: ",
    "Hard-to-reach areas (attic, crawl space, high ceilings): ",
    "Preferred dates / times: ",
    "",
    "Thank you.",
  ];
}

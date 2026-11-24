/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  AERO CLEAN — SINGLE SOURCE OF TRUTH FOR BUSINESS INFORMATION
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every page, the footer, the legal pages, the SEO metadata and the
 *  structured data read from this file. Change a value here and it changes
 *  everywhere.
 *
 *  Values set to `null` have NOT been supplied by the business yet. While a
 *  value is null the website shows a clearly marked placeholder (or hides the
 *  related link) instead of inventing information.
 *
 *  Before publishing, run:  npm run check:publish
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Nullable<T> = T | null;

export interface SocialLink {
  label: string;
  url: string;
}

export interface SiteConfig {
  brandName: "AERO CLEAN";
  tagline: string;
  shortDescription: string;
  /** Production URL, no trailing slash. Read from NEXT_PUBLIC_SITE_URL when set. */
  url: string;
  /** True only if no real production URL is configured (blocks indexing). */
  urlIsPlaceholder: boolean;
  locale: string;
  currency: "USD";

  contact: {
    /** Display format, e.g. "(555) 010-0000". */
    phoneDisplay: Nullable<string>;
    /** E.164 format for tel: links, e.g. "+15550100000". */
    phoneE164: Nullable<string>;
    email: Nullable<string>;
    /** Optional SMS-capable number (E.164). Leave null if texts are not accepted. */
    smsE164: Nullable<string>;
    /** Optional WhatsApp number in international format without "+" (e.g. 15550100000). */
    whatsapp: Nullable<string>;
    /** Only fill in if customers can visit or mail this address. */
    address: Nullable<{
      street: string;
      locality: string; // city
      region: string; // state
      postalCode: string;
      country: string; // e.g. "US"
    }>;
    /** Plain-language service area, e.g. "Austin, TX and surrounding areas". */
    serviceArea: Nullable<string>;
    /** Only fill in once confirmed, e.g. ["Mon–Fri: 8:00 am – 6:00 pm", "Sat: 9:00 am – 2:00 pm"]. */
    hours: Nullable<string[]>;
    social: SocialLink[];
  };

  legal: {
    /** Registered legal name, e.g. "Aero Clean LLC". */
    legalEntityName: Nullable<string>;
    /** Entity type and state of registration, e.g. "a Texas limited liability company". */
    entityDescription: Nullable<string>;
    /** The U.S. state (or other jurisdiction) whose law governs the Terms. */
    governingLawJurisdiction: Nullable<string>;
    /** County/city and state for the courts that hear disputes. */
    disputeVenue: Nullable<string>;
    /** Email or postal address for privacy requests (falls back to contact.email). */
    privacyContactEmail: Nullable<string>;
    /** Name of the static website host (it receives standard server logs). */
    hostingProvider: Nullable<string>;
    /** Accepted payment methods, e.g. ["Card", "Cash", "Zelle"]. */
    paymentMethods: Nullable<string[]>;
    /** Notice required to cancel/reschedule without a fee, e.g. "24 hours". */
    cancellationNotice: Nullable<string>;
    /** Late-cancellation or call-out fee, e.g. "$50". Null = no fee is charged. */
    lateCancellationFee: Nullable<string>;
    /** Date shown on the legal pages. Update whenever the documents change. */
    termsLastUpdated: string;
    privacyLastUpdated: string;
    /**
     * Shows the amber "review before publishing" notes on legal and pricing
     * pages. Set to false ONLY after the business owner (and, ideally, a
     * licensed attorney) has reviewed and finalised the content.
     */
    showReviewNotes: boolean;
  };
}

const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
const PRODUCTION_URL = "https://aeroclean.sbs";

export const siteConfig: SiteConfig = {
  brandName: "AERO CLEAN",
  tagline: "Vent & Air Duct Cleaning",
  shortDescription:
    "AERO CLEAN provides professional vent and air duct cleaning — supply and return vents, registers and accessible ductwork — with clear starting prices and honest advice about what your system needs.",
  url: envUrl || PRODUCTION_URL,
  urlIsPlaceholder: false,
  locale: "en_US",
  currency: "USD",

  contact: {
    phoneDisplay: "(773) 788-3972",
    phoneE164: "+17737883972",
    email: "contact@aeroclean.sbs",
    smsE164: "+17737883972",
    whatsapp: null,
    address: null,
    serviceArea: "Bloomington, Minnesota",
    hours: ["Monday – Saturday"],
    social: [],
  },

  legal: {
    legalEntityName: "Aeroclean",
    entityDescription: "an individual technician based in Minnesota",
    governingLawJurisdiction: "the State of Minnesota",
    disputeVenue: "the State of Minnesota",
    privacyContactEmail: null,
    hostingProvider: "Hostinger",
    paymentMethods: ["Cash", "Credit and debit cards", "Other common payment methods (confirm when booking)"],
    cancellationNotice: "24 hours",
    lateCancellationFee: "10% of the quoted price",
    termsLastUpdated: "November 24, 2026",
    privacyLastUpdated: "November 24, 2026",
    showReviewNotes: false,
  },
};

/* ── Derived helpers ─────────────────────────────────────────────────────── */

export const contact = siteConfig.contact;
export const legal = siteConfig.legal;

export const hasPhone = Boolean(contact.phoneE164 && contact.phoneDisplay);
export const hasEmail = Boolean(contact.email);
export const hasAnyContact = hasPhone || hasEmail || Boolean(contact.smsE164 || contact.whatsapp);

/** The name used in legal documents: the legal entity once supplied, otherwise the brand. */
export const legalName = legal.legalEntityName ?? siteConfig.brandName;

export const privacyEmail = legal.privacyContactEmail ?? contact.email;

/** Builds a mailto: link with a pre-filled subject and body (no data is sent by the website). */
export function buildMailto(subject: string, bodyLines: string[] = []): string | null {
  if (!contact.email) return null;
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (bodyLines.length) params.set("body", bodyLines.join("\n"));
  // URLSearchParams encodes spaces as "+", which some mail clients show literally.
  return `mailto:${contact.email}?${params.toString().replace(/\+/g, "%20")}`;
}

export function telHref(): string | null {
  return contact.phoneE164 ? `tel:${contact.phoneE164}` : null;
}

export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean}`;
}

/**
 * LocalBusiness structured data is only emitted when real details exist.
 * (Google's guidelines require structured data to reflect real, visible information.)
 */
export const canUseLocalBusinessSchema = Boolean(
  !siteConfig.urlIsPlaceholder && hasPhone && contact.serviceArea && legal.legalEntityName,
);

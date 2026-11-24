/**
 * Package & pricing data — the ONLY place package names and prices are defined.
 * Every page (Home preview, Packages page, FAQs, Terms) reads from here.
 *
 * Prices are STARTING prices in USD. They must stay exactly:
 *   Small Vent  $100 · Medium Vent  $240 · Large Vent  $340
 *
 * The "includes" lists describe the PROPOSED typical scope. The business owner
 * must confirm them before publishing (see BUSINESS-DETAILS-CHECKLIST.md).
 * The customer's written quote/booking confirmation is what sets the final scope.
 */

export interface ServicePackage {
  id: "small-vent" | "medium-vent" | "large-vent";
  number: "01" | "02" | "03";
  name: "Small Vent" | "Medium Vent" | "Large Vent";
  /** Starting price in whole US dollars. */
  startingPrice: 100 | 240 | 340;
  /** Official one-line positioning. */
  positioning: string;
  idealFor: string;
  includes: string[];
  mayNeedQuote: string[];
  /** Visual emphasis on the pricing grid. Not a claim about popularity. */
  featured?: boolean;
  featuredLabel?: string;
}

export const packages: ServicePackage[] = [
  {
    id: "small-vent",
    number: "01",
    name: "Small Vent",
    startingPrice: 100,
    positioning: "Designed for smaller ventilation systems or smaller service requirements.",
    idealFor:
      "Studios, apartments, single rooms or a handful of vents that need attention — for example, a few dusty registers or one problem area.",
    includes: [
      "Pre-service walk-through of the vents in scope",
      "Supply registers and return grilles removed, cleaned and refitted",
      "Dust and debris vacuumed from each vent opening and the accessible section behind it",
      "Floor and furniture protection at each work area",
      "Before-and-after photos of cleaned vents on request",
      "Brief summary of what was cleaned and anything we noticed",
    ],
    mayNeedQuote: [
      "Vents beyond the number agreed for your booking",
      "Main duct trunk lines",
      "Vents in hard-to-reach locations such as high ceilings, attics or crawl spaces",
    ],
  },
  {
    id: "medium-vent",
    number: "02",
    name: "Medium Vent",
    startingPrice: 240,
    positioning: "Designed for medium-sized ventilation systems or larger cleaning requirements.",
    idealFor:
      "Typical homes or units where most supply and return vents need cleaning, or a smaller system with heavier dust buildup.",
    includes: [
      "Everything in Small Vent, across a larger number of vents",
      "Agitation cleaning of accessible branch duct runs with brushes or air tools",
      "Vacuum collection of loosened dust and debris",
      "Return-air grille and filter-slot area cleaned where accessible",
      "Clean-up of every work area before we leave",
    ],
    mayNeedQuote: [
      "Main trunk lines with limited access",
      "Heavy renovation or construction debris",
      "Properties with more than one HVAC system",
    ],
    featured: true,
    featuredLabel: "Mid-size scope",
  },
  {
    id: "large-vent",
    number: "03",
    name: "Large Vent",
    startingPrice: 340,
    positioning: "Designed for larger ventilation systems or more extensive cleaning requirements.",
    idealFor:
      "Larger homes, multi-level properties or systems with heavier buildup across many vents.",
    includes: [
      "Everything in Medium Vent, across a larger scope",
      "Accessible main trunk sections cleaned where safe access already exists",
      "Additional time allowed for heavier dust and debris",
      "Written summary of the work, including anything that may need a specialist",
    ],
    mayNeedQuote: [
      "Additional systems or zones beyond the agreed scope",
      "Work that would require new access openings",
      "Commercial or multi-unit properties",
    ],
  },
];

/** Never included in any package unless separately agreed in writing. */
export const notIncludedInPackages = [
  "Cleaning of HVAC equipment (coils, blower assemblies, drain pans, furnace or AC cabinets)",
  "Chemical biocides, sanitizers, fogging or duct sealants",
  "Mold remediation, asbestos work, pest removal or other specialist services",
  "Repairs, replacement parts, filters (unless you supply them) or electrical work",
];

export const pricingDisclaimer =
  "All prices are starting prices in US dollars (USD). Your final price depends on your system configuration, the number and location of vents, accessibility, the level of buildup, property requirements and the actual cleaning scope. We confirm the scope and price with you before any work begins, and we won't carry out additional work unless you approve it first.";

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Side-by-side comparison. Values: true = included, false = not included,
 * string = included with a qualifier. Must stay consistent with `includes` above.
 */
export const packageComparison: { feature: string; values: [boolean | string, boolean | string, boolean | string] }[] = [
  { feature: "Pre-service walk-through of the vents in scope", values: [true, true, true] },
  { feature: "Vent covers removed, cleaned and refitted", values: [true, true, true] },
  { feature: "Vent openings and accessible section behind each vent vacuumed", values: [true, true, true] },
  { feature: "Floor and furniture protection at work areas", values: [true, true, true] },
  { feature: "Before-and-after photos on request", values: [true, true, true] },
  { feature: "Agitation cleaning of accessible branch duct runs", values: [false, true, true] },
  { feature: "Return-air grille and filter-slot area", values: [false, true, true] },
  { feature: "Accessible main trunk sections", values: [false, false, "Where safe access exists"] },
  { feature: "Additional time for heavier buildup", values: [false, false, true] },
  { feature: "Summary of the work", values: ["Brief", "Brief", "Written"] },
];

/** Factors that move the final price — used on the Packages page, FAQs and Terms. */
export const priceFactors = [
  { title: "System configuration", detail: "Number of HVAC systems or zones and how the ductwork is laid out." },
  { title: "Number & location of vents", detail: "How many supply and return vents are in scope, and where they are." },
  { title: "Accessibility", detail: "Attics, crawl spaces, high ceilings or vents behind fixed furniture." },
  { title: "Level of buildup", detail: "Light dust versus heavy debris, pet hair or renovation dust." },
  { title: "Property requirements", detail: "Parking, building access rules, working-hour restrictions or travel distance." },
  { title: "Optional services", detail: "Dryer vent cleaning, added only if you ask for it." },
];

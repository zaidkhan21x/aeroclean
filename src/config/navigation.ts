export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation (header). */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Packages", href: "/packages/" },
  { label: "FAQs", href: "/faqs/" },
];

/** Contact anchor — the contact section lives at the end of every page's footer CTA band. */
export const contactHref = "#contact";

export const legalNav: NavItem[] = [
  { label: "Terms & Conditions", href: "/terms/" },
  { label: "Privacy Policy", href: "/privacy/" },
];

import { packages, formatUsd } from "./packages";

export interface FaqLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Faq {
  id: string;
  question: string;
  answer: string[];
  links?: FaqLink[];
  /** Shown in the short FAQ preview on the homepage. */
  featured?: boolean;
}

export interface FaqGroup {
  id: string;
  title: string;
  faqs: Faq[];
}

const priceList = packages
  .map((p) => `${p.name} from ${formatUsd(p.startingPrice)}`)
  .join(", ")
  .replace(/, ([^,]*)$/, " and $1");

export const faqGroups: FaqGroup[] = [
  {
    id: "basics",
    title: "About vent cleaning",
    faqs: [
      {
        id: "what-is-vent-cleaning",
        question: "What is vent cleaning?",
        answer: [
          "Vent cleaning removes dust and debris from the parts of your heating and cooling system that move air around the property: the vent covers (registers and grilles), the openings behind them and the accessible duct runs that connect them.",
          "Our approach is mechanical. We loosen buildup with brushes or air tools and capture it with vacuum collection equipment, rather than spraying products into the ducts.",
        ],
        featured: true,
      },
      {
        id: "why-important",
        question: "Why is ventilation cleaning important?",
        answer: [
          "Your HVAC system moves air through the same vents and ducts every day, so dust, pet hair, lint and renovation debris can settle there over time. Cleaning removes those visible deposits and helps keep debris from being blown back out of the supply vents.",
          "We won't claim that duct cleaning cures allergies, prevents illness or guarantees better indoor air quality. The U.S. Environmental Protection Agency (EPA) says duct cleaning has never been shown to prevent health problems, and recommends cleaning ducts on an as-needed basis rather than routinely. Regular filter changes and good HVAC maintenance matter too.",
        ],
        links: [
          {
            label: "EPA: Should You Have the Air Ducts in Your Home Cleaned?",
            href: "https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned",
            external: true,
          },
        ],
        featured: true,
      },
      {
        id: "how-often",
        question: "How often should vents be cleaned?",
        answer: [
          "There's no single schedule that suits every property. The EPA recommends cleaning when it's needed — for example, when ducts are clogged with dust and debris, when particles are visibly released from the supply vents, or after vermin have been dealt with. The National Air Duct Cleaners Association (NADCA), an industry body, suggests every three to five years for many homes.",
          "Pets, recent renovation work, smoking indoors and how often filters are changed all make a difference. If you're not sure, contact us and describe what you're seeing — if cleaning doesn't look necessary yet, we'll tell you.",
        ],
        featured: true,
      },
    ],
  },
  {
    id: "service",
    title: "The service",
    faqs: [
      {
        id: "whats-included",
        question: "What is included in the cleaning service?",
        answer: [
          "Every package includes a walk-through of the vents in scope, removal and cleaning of vent covers where they can be safely detached, vacuum cleaning of each vent opening and the accessible duct behind it, and protection of floors and furnishings at each work area. Medium Vent and Large Vent add agitation cleaning of accessible branch ducts, and Large Vent adds accessible main trunk sections where safe access already exists.",
          "Packages do not include HVAC equipment cleaning (coils, blowers, drain pans), chemical treatments, repairs or specialist services such as mold or asbestos work. Your written quote confirms exactly what's included before any work starts.",
        ],
        links: [
          { label: "Compare packages", href: "/packages/" },
          { label: "See all services", href: "/services/" },
        ],
        featured: true,
      },
      {
        id: "how-long",
        question: "How long does the service take?",
        answer: [
          "It depends on the number of vents, how easy they are to reach and how much buildup there is. A few vents in an apartment is a much shorter job than a larger home with several levels. We'll give you an estimated time window when we confirm your booking.",
        ],
      },
      {
        id: "prepare",
        question: "Do I need to prepare my property?",
        answer: [
          "A little preparation helps the visit go smoothly. Please clear a path to each vent included in your booking, move small or fragile items away from vents, let us know about pets so they can be kept in a separate room, and make sure we can reach the HVAC system's thermostat so it can be switched off while we work.",
          "If there are vents in attics, crawl spaces or above high ceilings, mention this when you book so we can plan the right equipment and time.",
        ],
      },
      {
        id: "additional-services",
        question: "Are additional services available?",
        answer: [
          "Dryer vent cleaning is available on request and quoted separately. Extra vents, main trunk lines and hard-to-reach areas outside your package can also be quoted.",
          "We don't offer exhaust fan or kitchen hood cleaning, mold remediation, asbestos work, HVAC repairs, electrical work, structural repairs, pest control or hazardous-material handling.",
        ],
        links: [{ label: "What we do and don't provide", href: "/services/#scope" }],
      },
      {
        id: "specialist-work",
        question: "What happens if the system requires specialist work?",
        answer: [
          "If we find something outside our scope — such as suspected mold growth, signs of pests, damaged or disconnected ductwork, or materials that may contain asbestos — we stop work in that area, show you what we found and explain why. We'll recommend the type of specialist to contact; we won't pressure you into extra work on the spot.",
          "You only pay for the work you approved and that we carried out. Any affected area can be cleaned once the specialist issue has been resolved.",
        ],
        featured: true,
      },
    ],
  },
  {
    id: "pricing",
    title: "Packages & pricing",
    faqs: [
      {
        id: "packages-suitable",
        question: "Are all three packages suitable for every property?",
        answer: [
          `Not necessarily. Our three packages — ${priceList} — are starting points for smaller, medium and larger ventilation systems. The right package depends on the number of vents, the layout of your system and the level of buildup.`,
          "Tell us about your property and we'll recommend the package that fits. If your system needs more than the largest package covers, we'll give you a quote before any work begins.",
        ],
        links: [{ label: "View packages", href: "/packages/" }],
      },
      {
        id: "final-price",
        question: "How is the final price determined?",
        answer: [
          "Package prices are starting prices in US dollars. The final price depends on your system configuration, the number and location of vents, accessibility (attics, crawl spaces, high ceilings), the level of buildup and any optional services you choose.",
          "We confirm the scope and price with you before work begins. If we find something on the day that would change the price, we'll explain it and ask for your approval first — we won't add charges for work you didn't agree to.",
        ],
        featured: true,
      },
    ],
  },
  {
    id: "contact",
    title: "Contact & booking",
    faqs: [
      {
        id: "how-contact",
        question: "How can I contact AERO CLEAN?",
        answer: [
          "Call or text us on (773) 788-3972, or email contact@aeroclean.sbs. We're available Monday to Saturday and serve Bloomington, Minnesota. The contact buttons open your own phone, messaging or email app — the website itself doesn't collect or store your details.",
        ],
        links: [{ label: "Go to contact details", href: "#contact" }],
      },
      {
        id: "how-request",
        question: "How can I request a service?",
        answer: [
          "Choose the package that looks closest to your needs, then call, text or email us. It helps to share your general location, the type of property, roughly how many vents you have, any hard-to-reach areas and your preferred dates.",
          "We'll discuss your requirements, confirm the scope and price, and agree a time with you. Your booking is confirmed only when we confirm it directly with you.",
        ],
        links: [{ label: "Request a quote", href: "#contact" }],
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.faqs);
export const featuredFaqs = allFaqs.filter((f) => f.featured).slice(0, 4);

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Choose a starting package",
    description:
      "Compare Small Vent, Medium Vent and Large Vent and pick the one closest to the size of your system. Not sure? Pick the nearest and we'll help.",
  },
  {
    number: "02",
    title: "Contact AERO CLEAN",
    description:
      "Call or email us with your property type, roughly how many vents you have and any hard-to-reach areas.",
  },
  {
    number: "03",
    title: "Confirm scope & price",
    description:
      "We discuss your system and requirements, then confirm what's included and the price before any work is booked.",
  },
  {
    number: "04",
    title: "Schedule your clean",
    description:
      "We agree a time, arrive prepared, protect your floors and furnishings, and walk you through the finished work.",
  },
];

export const whyChoose = [
  {
    icon: "receipt" as const,
    title: "Clear starting prices",
    description:
      "Three packages with published starting prices in USD — no inflated “was” prices, countdown timers or bait-and-switch offers.",
  },
  {
    icon: "clipboard" as const,
    title: "Scope agreed first",
    description:
      "We confirm what's included and what it costs before work starts. Anything extra is explained and only done with your approval.",
  },
  {
    icon: "shield" as const,
    title: "Care inside your home",
    description:
      "Floors and furnishings near each vent are covered, vent covers are refitted where they came from, and work areas are cleaned up before we leave.",
  },
  {
    icon: "wind" as const,
    title: "Mechanical source removal",
    description:
      "Dust is physically loosened and captured with vacuum collection — not masked with fragrances, fogging or chemical sprays.",
  },
  {
    icon: "scan" as const,
    title: "Honest about limits",
    description:
      "If something needs a specialist — suspected mold, pests, damaged ducts — we stop, show you and say so, rather than upselling a fix we're not qualified for.",
  },
  {
    icon: "message" as const,
    title: "Straight answers",
    description:
      "Not every system needs cleaning right now. If yours doesn't, we'll tell you — and explain what to keep an eye on.",
  },
];

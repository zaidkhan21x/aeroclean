/**
 * Service catalogue — single source of truth for the Home and Services pages.
 *
 * `availability`:
 *   "included"  → part of the standard packages (within the agreed package scope)
 *   "optional"  → available on request and quoted separately
 *
 * `ownerToConfirm` marks a service the business owner must confirm they offer
 * before the website is published (see BUSINESS-DETAILS-CHECKLIST.md).
 */

export type ServiceIconName = "airVent" | "wind" | "arrowLeftRight" | "brush" | "shirt" | "fan";

export interface Service {
  slug: string;
  name: string;
  icon: ServiceIconName;
  availability: "included" | "optional";
  ownerToConfirm?: boolean;
  /** One-sentence summary used on cards. */
  summary: string;
  description: string;
  involves: string[];
  expect: string[];
  benefits: string[];
  limitations: string[];
}

export const services: Service[] = [
  {
    slug: "air-duct-cleaning",
    name: "Air Duct Cleaning",
    icon: "wind",
    availability: "included",
    summary:
      "Dust and debris physically loosened and vacuumed out of the accessible duct runs behind your vents.",
    description:
      "Your ductwork carries air from the HVAC system to every room and back again. Over time, dust, pet hair, lint and renovation debris can settle inside the duct runs. Air duct cleaning uses a source-removal approach: debris is mechanically loosened and drawn out with vacuum collection equipment, rather than being sprayed over or pushed further into the system.",
    involves: [
      "A walk-through of the vents and duct runs included in your package before work starts",
      "Agitation tools such as rotary brushes or air whips to loosen buildup from duct surfaces",
      "Vacuum collection so loosened dust is captured instead of released into the room",
      "Cleaning of accessible branch ducts through existing vent openings",
    ],
    expect: [
      "Floors and furnishings near each work area covered before cleaning begins",
      "Your HVAC system switched off while work is in progress",
      "A short verbal or written summary of what was cleaned and anything we noticed",
    ],
    benefits: [
      "Removes visible dust and debris deposits from the cleaned duct sections",
      "Helps keep debris from being blown back out of the supply vents",
      "A useful step after renovation work, moving into a property, or when buildup is visible",
    ],
    limitations: [
      "Covers duct sections that can be reached safely through existing openings; inaccessible, collapsed or damaged runs are noted, not repaired",
      "Main trunk lines, multiple systems or very heavy buildup may need an on-site assessment and a separate quote",
      "Does not include cleaning of HVAC equipment such as coils, blower assemblies or drain pans",
    ],
  },
  {
    slug: "hvac-vent-cleaning",
    name: "HVAC Vent & Register Cleaning",
    icon: "airVent",
    availability: "included",
    summary:
      "Vent covers, registers and diffusers removed, cleaned by hand and refitted — plus the opening behind them.",
    description:
      "The vent covers you see on floors, walls and ceilings collect a surprising amount of dust on their louvers. We remove each cover in the agreed scope, clean it thoroughly, vacuum the vent boot (the opening directly behind the cover) and refit it carefully.",
    involves: [
      "Removing supply registers, ceiling diffusers and return grilles where they can be safely detached",
      "Hand-cleaning louvers, frames and fins to remove dust and grime",
      "Vacuuming the vent boot and the first section of duct behind each opening",
      "Refitting each cover in its original position",
    ],
    expect: [
      "Visibly cleaner vent covers in every room included in your scope",
      "Painted-over or seized covers cleaned in place if removal would risk damage",
      "A note of any loose, broken or missing covers we find",
    ],
    benefits: [
      "Cleaner-looking rooms — dusty vent covers are often the first thing people notice",
      "Removes dust that would otherwise sit right at the point where air enters the room",
      "Lets us spot obvious issues at each vent, such as loose fittings or blocked openings",
    ],
    limitations: [
      "Replacement covers, painting and repairs to damaged registers are not included",
      "Covers that are painted, caulked or fixed in place are cleaned in place rather than removed",
    ],
  },
  {
    slug: "supply-and-return-vents",
    name: "Supply & Return Vent Cleaning",
    icon: "arrowLeftRight",
    availability: "included",
    summary:
      "Both sides of the airflow: the supply vents that deliver air and the return grilles that draw it back.",
    description:
      "Supply vents push conditioned air into each room; return vents pull room air back to the HVAC system. Returns usually collect more dust because room air is drawn through them, so a proper clean covers both. Your package defines how many vents on each side are included.",
    involves: [
      "Identifying supply and return vents during the pre-service walk-through",
      "Cleaning supply registers and the accessible duct directly behind them",
      "Cleaning return grilles, the return opening and the filter-slot area where accessible",
      "Checking that cleaned vents are clear and refitted correctly",
    ],
    expect: [
      "An explanation of which vents are supply and which are return if you'd like one",
      "A reminder of your filter size if we can see it — keeping filters fresh is the simplest way to keep vents cleaner for longer",
    ],
    benefits: [
      "A balanced clean instead of only the vents that are easy to see",
      "Clean return grilles can help reduce how quickly dust builds up on supply vents",
    ],
    limitations: [
      "HVAC filters are not included unless you supply the replacement filter",
      "Return plenums and equipment cabinets are outside standard package scope",
    ],
  },
  {
    slug: "vent-and-duct-dust-removal",
    name: "Vent & Duct Dust Removal",
    icon: "brush",
    availability: "included",
    summary:
      "Targeted removal of visible dust, pet hair, lint and renovation debris lodged in vents and nearby duct sections.",
    description:
      "Sometimes the issue is specific: drywall dust after a renovation, pet hair at floor vents, or debris that has fallen into a register. Dust removal focuses on visible buildup at the vents and in the accessible sections of duct beside them.",
    involves: [
      "Inspecting the affected vents to see how far the buildup extends",
      "Removing loose debris by hand, then brushing and vacuuming the vent and adjacent duct section",
      "Clearing small objects that have fallen into floor registers where they can be reached",
    ],
    expect: [
      "A clear explanation of what we were able to reach and remove",
      "Advice if the buildup appears to continue deeper into the system than the package covers",
    ],
    benefits: [
      "A practical option after renovation, construction or a move-in clean",
      "Clears visible debris that can otherwise be blown back into the room",
    ],
    limitations: [
      "Deep or extensive buildup beyond the accessible sections may need a larger package or a separate quote",
      "Soot, smoke residue and debris from fire or water damage require specialist restoration services",
    ],
  },
  {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    icon: "shirt",
    availability: "optional",
    summary:
      "Lint removal from the dryer exhaust duct and exterior vent hood. Available on request and quoted separately.",
    description:
      "Clothes dryers push warm, lint-laden air through a dedicated exhaust duct to the outside. Lint can build up along that duct and at the exterior vent hood. This is a separate system from your heating and cooling ducts, so it is quoted separately.",
    involves: [
      "Disconnecting the dryer transition hose where safe to do so",
      "Brushing and vacuuming lint from the accessible exhaust duct run",
      "Clearing lint from the exterior vent hood or flap where it can be reached safely",
      "Reconnecting the dryer and checking that air exits at the outside vent",
    ],
    expect: [
      "A price agreed before work starts, based on duct length and access",
      "A note of any crushed, disconnected or unsuitable transition hose we find",
    ],
    benefits: [
      "Removes lint buildup from the exhaust path",
      "Helps the dryer exhaust air the way it was designed to",
    ],
    limitations: [
      "Dryer repairs, gas line work and electrical work are not included",
      "Replacing damaged ducting, transition hoses or vent hoods is not included",
      "Roof-level vents or very long runs may not be accessible",
    ],
  },
];

export const includedServices = services.filter((s) => s.availability === "included");
export const optionalServices = services.filter((s) => s.availability === "optional");

/**
 * What AERO CLEAN does NOT provide. Shown on the Services page and referenced in
 * the FAQs and Terms so the scope is consistent everywhere.
 */
export const outOfScope: { title: string; detail: string }[] = [
  {
    title: "Mold remediation",
    detail:
      "If we see suspected mold growth, we stop work in that area, show you, and recommend an appropriately qualified remediation professional. Moisture problems need to be fixed at the source first.",
  },
  {
    title: "Asbestos testing or removal",
    detail:
      "Older duct insulation, tape or vent components can contain asbestos. We do not disturb suspected asbestos-containing materials; testing and removal must be handled by licensed specialists.",
  },
  {
    title: "HVAC repair, servicing or installation",
    detail:
      "Furnace, air conditioner and heat pump repair, servicing, coil or blower cleaning and equipment installation should be carried out by a qualified HVAC technician.",
  },
  {
    title: "Electrical work",
    detail: "We don't alter wiring, thermostats, fan motors or any electrical components.",
  },
  {
    title: "Structural repairs & duct replacement",
    detail:
      "We don't cut new access openings, fabricate, replace or seal ductwork, or repair walls, ceilings or floors.",
  },
  {
    title: "Pest extermination or wildlife removal",
    detail:
      "If we find signs of rodents, insects or other animals in the ducts, the infestation needs to be dealt with by a pest control professional before cleaning.",
  },
  {
    title: "Exhaust fan & kitchen hood cleaning",
    detail:
      "Bathroom exhaust fans and residential or commercial kitchen hoods and their exhaust ducts are not part of our service.",
  },
  {
    title: "Hazardous-material handling",
    detail:
      "This includes fire, smoke and soot restoration, chemical spills and biological contamination. These require specialist contractors.",
  },
  {
    title: "Chemical biocides, sanitizers or duct sealants",
    detail:
      "Our standard service is mechanical cleaning. We don't spray chemical treatments, fogging products or encapsulants inside your ducts.",
  },
];

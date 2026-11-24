import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { PackagesPreview } from "@/components/home/PackagesPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FaqPreview } from "@/components/home/FaqPreview";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata } from "@/config/seo";
import { absoluteUrl, canUseLocalBusinessSchema, contact, legal, siteConfig } from "@/config/site";
import { packages } from "@/data/packages";

export const metadata = pageMetadata({
  title: "Vent & Air Duct Cleaning",
  description:
    "Professional vent and air duct cleaning from AERO CLEAN. Supply and return vents, registers and accessible ductwork cleaned with care. Packages from $100 — scope and price confirmed before work begins.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesOverview />
      <WhyChoose />
      <PackagesPreview />
      <HowItWorks />
      <FaqPreview />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.brandName,
          url: absoluteUrl("/"),
        }}
      />
      {/* LocalBusiness data is only output once real business details are configured. */}
      {canUseLocalBusinessSchema ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: siteConfig.brandName,
            legalName: legal.legalEntityName ?? undefined,
            url: absoluteUrl("/"),
            logo: absoluteUrl("/brand/aero-clean-logo.png"),
            image: absoluteUrl("/og-image.png"),
            telephone: contact.phoneE164 ?? undefined,
            email: contact.email ?? undefined,
            areaServed: contact.serviceArea ?? undefined,
            ...(contact.address
              ? {
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: contact.address.street,
                    addressLocality: contact.address.locality,
                    addressRegion: contact.address.region,
                    postalCode: contact.address.postalCode,
                    addressCountry: contact.address.country,
                  },
                }
              : {}),
            makesOffer: packages.map((p) => ({
              "@type": "Offer",
              name: `${p.name} package`,
              description: p.positioning,
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: p.startingPrice,
                priceCurrency: "USD",
              },
            })),
          }}
        />
      ) : null}
    </>
  );
}

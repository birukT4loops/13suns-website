import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InfoSection } from "@/components/InfoSection";
import { visaContent } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Visa & Passport",
  description:
    "Visa on arrival information for Ethiopia: the list of 36 tourist-generating countries, Bole International Airport visa rules, and business visas.",
  alternates: { canonical: "/visa-passport" },
};

export default function VisaPassportPage() {
  return (
    <>
      <Hero
        image="/images/tours/addis-ababa-nobo1-18.jpg"
        imageAlt="Addis Ababa cityscape"
        title={visaContent.heroTitle}
        size="compact"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Visa & Passport" }]} />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          {visaContent.sections.map((section) => (
            <InfoSection key={section.heading} heading={section.heading} paragraphs={section.paragraphs} list={section.list} />
          ))}
        </div>
      </Section>
    </>
  );
}

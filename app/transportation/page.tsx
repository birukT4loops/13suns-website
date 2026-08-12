import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InfoSection } from "@/components/InfoSection";
import { transportationContent } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Transportation",
  description:
    "How to get around Ethiopia: flights, road conditions, rail, and water transport options for your tour.",
  alternates: { canonical: "/transportation" },
};

export default function TransportationPage() {
  return (
    <>
      <Hero
        image="/images/tours/gzgzmpyptrg21.jpg"
        imageAlt="Ethiopian road and landscape"
        title={transportationContent.heroTitle}
        size="compact"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Transportation" }]} />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          {transportationContent.sections.map((section) => (
            <InfoSection key={section.heading} heading={section.heading} paragraphs={section.paragraphs} />
          ))}
        </div>
      </Section>
    </>
  );
}

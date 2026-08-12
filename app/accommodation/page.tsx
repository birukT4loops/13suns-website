import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InfoSection } from "@/components/InfoSection";
import { accommodationContent } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Accommodation",
  description:
    "A guide to hotel standards across Ethiopia, from five-star hotels in Addis Ababa to budget lodging and camping in the North and South.",
  alternates: { canonical: "/accommodation" },
};

export default function AccommodationPage() {
  return (
    <>
      <Hero
        image="/images/tours/486f5528664f38ddc7e82862b9e63a26.jpg"
        imageAlt="Addis Ababa cityscape"
        title={accommodationContent.heroTitle}
        description={accommodationContent.intro}
        size="compact"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Accommodation" }]} />

      <Section tone="white">
        <SectionHeading eyebrow="By Region" title="Where You'll Stay" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {accommodationContent.regions.map((region) => (
            <div key={region.heading} className="rounded-xl border border-stone-200 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-ink">{region.heading}</h3>
              {region.paragraphs.map((p) => (
                <p key={p} className="mt-3 text-sm leading-relaxed text-stone-600">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <InfoSection heading={accommodationContent.orientation.heading} paragraphs={accommodationContent.orientation.paragraphs} />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Hotel Standards" title="Categories of Accommodation" />
        <div className="mx-auto max-w-3xl divide-y divide-stone-200">
          {accommodationContent.categories.map((cat) => (
            <InfoSection key={cat.heading} heading={cat.heading} paragraphs={cat.paragraphs} />
          ))}
        </div>
      </Section>
    </>
  );
}

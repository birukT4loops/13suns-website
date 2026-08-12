import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqItems } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about tipping, timing your Omo Valley or Danakil Depression trip, safety, and international banking codes.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Hero
        image="/images/tours/ArbaMinchEthiopia1.jpg"
        imageAlt="Southern Ethiopia landscape"
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most from travelers planning their Ethiopia trip."
        size="compact"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}

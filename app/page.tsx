import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import { TourCard } from "@/components/TourCard";
import { featuredTours, regularTours } from "@/lib/tours";
import { homeContent, aboutContent } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Ethiopia Tour & Travel Specialists",
  description:
    "Discover Ethiopia's historic route, Danakil Depression, Omo Valley tribes and Semien Mountains with 13 Suns Tours — an experienced local operator since 2000.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        image={homeContent.heroImage}
        imageAlt="Ethiopian starling in its natural habitat"
        eyebrow={homeContent.heroTagline}
        title={homeContent.heroTitle}
        description={homeContent.intro}
      >
        <div className="flex flex-wrap gap-4">
          <LinkButton href="/contact-us">Contact Us Now</LinkButton>
          <LinkButton href="#featured-tours" variant="outline" className="border-white/40 text-white hover:border-gold hover:text-gold">
            Explore Tours
          </LinkButton>
        </div>
      </Hero>

      <Section tone="white" id="featured-tours" aria-labelledby="featured-tours-heading">
        <SectionHeading eyebrow="Handpicked" title="Featured Tours" description="Our most requested journeys across Ethiopia's historic and natural highlights." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </Section>

      <Section tone="cream" aria-labelledby="regular-tours-heading">
        <SectionHeading eyebrow="Explore More" title="Regular Tours" description="From mountain trekking to cultural immersion, plan the Ethiopia experience that fits you." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regularTours.slice(0, 6).map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <LinkButton href="/faq" variant="outline">
            See All Tour Information
          </LinkButton>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={aboutContent.images[0].src}
              alt={aboutContent.images[0].alt}
              fill
              sizes="(min-width: 1024px) 540px, 92vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Who We Are" title="An Ethiopian Travel Company Since 2000" />
            <p className="text-base leading-relaxed text-stone-600">{aboutContent.intro[0]}</p>
            <p className="mt-4 text-base leading-relaxed text-stone-600">{aboutContent.intro[1]}</p>
            <div className="mt-8">
              <LinkButton href="/about-us" variant="secondary">
                More About Us
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ink" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="cta-heading" className="font-display text-3xl font-semibold sm:text-4xl">
            {homeContent.ctaTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/75">
            Tell us where you want to go and we&rsquo;ll design an Ethiopia itinerary around it — from the Danakil
            Depression to the Simien Mountains.
          </p>
          <div className="mt-8">
            <LinkButton href="/contact-us">Contact Us</LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}

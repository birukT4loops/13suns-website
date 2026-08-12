import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TourFacts } from "@/components/TourFacts";
import { Itinerary } from "@/components/Itinerary";
import { Gallery } from "@/components/Gallery";
import { LinkButton } from "@/components/Button";
import { TourCard } from "@/components/TourCard";
import { tours, getTourBySlug } from "@/lib/tours";

interface PageProps {
  params: Promise<{ tour: string }>;
}

export function generateStaticParams() {
  return tours.map((tour) => ({ tour: tour.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tour: slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return {
    title: tour.title,
    description: tour.metaDescription,
    alternates: { canonical: `/${tour.slug}` },
    openGraph: {
      title: tour.title,
      description: tour.metaDescription,
      images: [{ url: tour.heroImage }],
    },
  };
}

export default async function TourPage({ params }: PageProps) {
  const { tour: slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const related = tours.filter((t) => t.slug !== tour.slug && t.category === tour.category).slice(0, 3);
  const otherTours =
    related.length > 0 ? related : tours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <>
      <Hero
        image={tour.heroImage}
        imageAlt={tour.heroImageAlt}
        eyebrow={tour.category === "featured" ? "Featured Tour" : "Tour"}
        title={tour.title}
      >
        <LinkButton href="/contact-us">Contact Us</LinkButton>
      </Hero>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: tour.category === "featured" ? "Featured Tours" : "Regular Tours" },
          { label: tour.title },
        ]}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">{tour.intro}</p>

            {tour.gallery.length > 0 ? (
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-ink">Gallery</h2>
                <div className="mt-4">
                  <Gallery images={tour.gallery} />
                </div>
              </div>
            ) : null}
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Trip Facts</h2>
            <div className="mt-4">
              <TourFacts facts={tour.facts} />
            </div>
            <div className="mt-6 rounded-xl border border-gold/30 bg-gold/10 p-5">
              <p className="text-sm font-medium text-ink">Interested in this tour?</p>
              <p className="mt-1 text-sm text-stone-600">Contact us for pricing and availability.</p>
              <LinkButton href="/contact-us" className="mt-4 w-full">
                Get in Touch
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {tour.itinerary && tour.itinerary.length > 0 ? (
        <Section tone="cream">
          <SectionHeading eyebrow="Day by Day" title="Itinerary" />
          <div className="mx-auto max-w-3xl">
            <Itinerary days={tour.itinerary} />
          </div>
        </Section>
      ) : null}

      <Section tone="white">
        <SectionHeading eyebrow="Keep Exploring" title="You Might Also Like" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherTours.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      </Section>
    </>
  );
}

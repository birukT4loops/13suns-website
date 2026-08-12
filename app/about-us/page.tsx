import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkButton } from "@/components/Button";
import { aboutContent } from "@/lib/pages";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "13 Suns Tours is named after Ethiopia's thirteen months of sunshine. Meet the team behind our Ethiopia tour and travel company, established in 2000.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <Hero image={aboutContent.heroImage} imageAlt={aboutContent.heroImageAlt} title="About Us" size="compact" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Our Story" title="13 Suns Tour" />
            {aboutContent.intro.map((p) => (
              <p key={p} className="mb-4 text-base leading-relaxed text-stone-600">
                {p}
              </p>
            ))}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={aboutContent.images[1].src}
              alt={aboutContent.images[1].alt}
              fill
              sizes="(min-width: 1024px) 540px, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading eyebrow="Our People" title={aboutContent.managementTitle} />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {aboutContent.management.map((p) => (
            <div key={p} className="rounded-xl border border-stone-200 bg-white p-6 shadow-card">
              <p className="text-sm leading-relaxed text-stone-600">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Recognition" title="Accreditations" align="center" />
        <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-10">
          {aboutContent.trustBadges.map((badge) => (
            <div key={badge.src} className="relative h-24 w-40 grayscale transition hover:grayscale-0">
              <Image src={badge.src} alt={badge.alt} fill sizes="160px" className="object-contain" />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ready to explore Ethiopia with us?</h2>
          <p className="mt-4 text-base leading-relaxed text-cream/75">
            Get in touch and let our team design your journey.
          </p>
          <div className="mt-8">
            <LinkButton href="/contact-us">Contact Us</LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}

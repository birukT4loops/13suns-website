import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { contactContent } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with 13 Suns Tours in Addis Ababa, Ethiopia or Dallas, USA to start planning your Ethiopian adventure.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        image="/images/tours/efiopiia-gory-simien-mountains-national-park-amhara.jpg"
        imageAlt="Ethiopian landscape at the Semien Mountains National Park"
        eyebrow="Don't Hesitate"
        title={contactContent.heroTitle}
        description={contactContent.intro}
        size="compact"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink">Our Offices</h2>
            <div className="mt-6 space-y-8">
              {contactContent.offices.map((office) => (
                <div key={office.country}>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-dark">{office.country}</h3>
                  <address className="mt-2 space-y-1 text-sm not-italic leading-relaxed text-stone-600">
                    {office.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    {office.phone ? (
                      <p className="pt-2">
                        Phone:{" "}
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-ink hover:text-gold-dark">
                          {office.phone}
                        </a>
                      </p>
                    ) : null}
                    {office.mobile ? (
                      <p>
                        Mobile:{" "}
                        <a href={`tel:${office.mobile.replace(/\s/g, "")}`} className="text-ink hover:text-gold-dark">
                          {office.mobile}
                        </a>
                      </p>
                    ) : null}
                    {office.fax ? <p>Fax: {office.fax}</p> : null}
                  </address>
                </div>
              ))}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Email</h3>
                <a href={`mailto:${contactContent.email}`} className="mt-2 block text-sm text-ink hover:text-gold-dark">
                  {contactContent.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-semibold text-ink">Send Us a Message</h2>
            <p className="mt-2 text-sm text-stone-600">We give you the best of us — reach out and we&rsquo;ll reply shortly.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

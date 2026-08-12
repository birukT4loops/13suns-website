import { Section } from "@/components/Section";
import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <Section tone="cream" className="flex min-h-[60vh] items-center">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          This page doesn&rsquo;t seem to exist.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-stone-600">
          The page you were looking for may have moved. Try one of our tours, or head back home.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href="/">Back to Home</LinkButton>
          <LinkButton href="/contact-us" variant="outline">
            Contact Us
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}

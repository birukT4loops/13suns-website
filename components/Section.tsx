import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "white" | "ink";
  as?: "section" | "div";
  id?: string;
  "aria-labelledby"?: string;
}

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-cream",
  white: "bg-white",
  ink: "bg-ink text-cream",
};

export function Section({ children, className = "", tone = "cream", as = "section", id, ...rest }: SectionProps) {
  const Comp = as;
  return (
    <Comp id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`} {...rest}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </Comp>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-dark">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-stone-600">{description}</p> : null}
    </div>
  );
}

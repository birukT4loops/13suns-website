import Image from "next/image";
import type { ReactNode } from "react";

interface HeroProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  size?: "large" | "compact";
  priority?: boolean;
}

export function Hero({ image, imageAlt, eyebrow, title, description, children, size = "large", priority = true }: HeroProps) {
  return (
    <div
      className={`relative isolate overflow-hidden flex items-end ${
        size === "large"
          ? "aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[clamp(28rem,45vw,40rem)]"
          : "aspect-[16/9] sm:aspect-auto sm:h-[clamp(20rem,30vw,28rem)]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{description}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </div>
  );
}

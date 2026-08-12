import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/lib/types";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-card transition-shadow duration-200 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={tour.heroImageAlt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {tour.facts.duration ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
            {tour.facts.duration.split(" / ")[0]}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">{tour.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600">{tour.intro}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">
          View tour
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

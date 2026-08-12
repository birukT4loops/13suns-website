import type { TourFacts as TourFactsType } from "@/lib/types";

const FACT_ICONS: Record<string, string> = {
  duration: "⏱",
  tourStyle: "\u{1F5FA}",
  physicalRating: "⛰",
  ageRequirements: "\u{1F464}",
  serviceLevel: "⭐",
  groupSize: "\u{1F465}",
};

const FACT_LABELS: Record<keyof TourFactsType, string> = {
  duration: "Duration",
  tourStyle: "Tour Style",
  physicalRating: "Physical Rating",
  ageRequirements: "Age Requirements",
  serviceLevel: "Service Level",
  groupSize: "Group Size",
};

export function TourFacts({ facts }: { facts: TourFactsType }) {
  const entries = (Object.keys(FACT_LABELS) as (keyof TourFactsType)[]).filter((key) => facts[key]);
  if (entries.length === 0) return null;

  return (
    <dl className="grid grid-cols-2 gap-3">
      {entries.map((key) => (
        <div key={key} className="rounded-lg border border-stone-200 bg-white p-3.5">
          <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase leading-tight tracking-wide text-stone-600">
            <span aria-hidden="true">{FACT_ICONS[key]}</span>
            {FACT_LABELS[key]}
          </dt>
          <dd className="mt-1.5 text-sm font-medium leading-snug text-ink">{facts[key]}</dd>
        </div>
      ))}
    </dl>
  );
}

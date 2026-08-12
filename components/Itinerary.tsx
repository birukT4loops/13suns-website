"use client";

import { useState } from "react";
import type { ItineraryDay } from "@/lib/types";

export function Itinerary({ days }: { days: ItineraryDay[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ol className="space-y-3">
      {days.map((day, i) => {
        const isOpen = openIndex === i;
        const panelId = `itinerary-panel-${i}`;
        return (
          <li key={day.day} className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-card">
            <h3>
              <button
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-cream sm:px-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold text-gold-dark">
                  {i + 1}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-ink">{day.day}</span>
                  {day.locationsCovered ? (
                    <span className="block text-sm text-stone-600">{day.locationsCovered}</span>
                  ) : null}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen} className="border-t border-stone-100 px-5 py-4 sm:px-6">
              <p className="text-sm leading-relaxed text-stone-600">{day.description}</p>
              {day.accommodation || day.mealPlans ? (
                <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {day.accommodation ? (
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-stone-600">Accommodation</dt>
                      <dd className="mt-0.5 text-sm text-ink">{day.accommodation}</dd>
                    </div>
                  ) : null}
                  {day.mealPlans ? (
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-stone-600">Meals</dt>
                      <dd className="mt-0.5 text-sm text-ink">{day.mealPlans}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

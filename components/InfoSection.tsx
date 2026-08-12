interface InfoSectionProps {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export function InfoSection({ heading, paragraphs, list }: InfoSectionProps) {
  return (
    <div className="border-b border-stone-200 py-10 first:pt-0 last:border-0 last:pb-0">
      <h2 className="font-display text-2xl font-semibold text-ink">{heading}</h2>
      <div className="mt-4 space-y-4">
        {paragraphs.map((p) => (
          <p key={p} className="text-base leading-relaxed text-stone-600">
            {p}
          </p>
        ))}
      </div>
      {list ? (
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
          {list.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-stone-700">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

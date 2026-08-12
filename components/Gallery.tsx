import Image from "next/image";
import type { GalleryImage } from "@/lib/types";

export function Gallery({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) return null;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {images.map((img) => (
        <div key={img.src} className="relative aspect-square overflow-hidden rounded-lg bg-stone-100">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 640px) 240px, 45vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

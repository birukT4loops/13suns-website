import type { MetadataRoute } from "next";
import { tours } from "@/lib/tours";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.13suns.com";

const staticRoutes = [
  "",
  "/about-us",
  "/contact-us",
  "/faq",
  "/visa-passport",
  "/transportation",
  "/accommodation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const tourEntries: MetadataRoute.Sitemap = tours.map((tour) => ({
    url: `${siteUrl}/${tour.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: tour.category === "featured" ? 0.9 : 0.6,
  }));

  return [...staticEntries, ...tourEntries];
}

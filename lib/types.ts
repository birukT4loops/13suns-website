export interface TourFacts {
  duration?: string;
  tourStyle?: string;
  physicalRating?: string;
  ageRequirements?: string;
  serviceLevel?: string;
  groupSize?: string;
}

export interface ItineraryDay {
  day: string;
  locationsCovered?: string;
  description: string;
  accommodation?: string;
  mealPlans?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Tour {
  slug: string;
  title: string;
  category: "featured" | "regular";
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  facts: TourFacts;
  itinerary?: ItineraryDay[];
  gallery: GalleryImage[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

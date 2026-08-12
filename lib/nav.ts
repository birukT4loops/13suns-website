import type { NavItem } from "./types";

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Featured Tours",
    href: "/danakil-depression-with-lalibela",
    children: [
      { label: "Danakil Depression with Lalibela", href: "/danakil-depression-with-lalibela" },
      { label: "Historic Route, Tigray Rock Hewn Churches", href: "/historic-route-tigray-rock-hewn-churches" },
      { label: "Omo Valley with Surma Villages", href: "/omo-valleys-with-surma-villages" },
    ],
  },
  {
    label: "Regular Tours",
    href: "/axusm-tsion",
    children: [
      { label: "Axum Tsion and Omo Valley", href: "/axusm-tsion" },
      { label: "Bale Mountains", href: "/bale-mountains" },
      { label: "Bale Trekking", href: "/bale-trekking" },
      { label: "Market Oriented Tour", href: "/market-oriented-tour" },
      { label: "Melka Kunture", href: "/melka-kunture" },
      { label: "Semien Mountains", href: "/semien-mountains" },
      { label: "Historic Route with Harar & Dire Dawa", href: "/historic-route" },
      { label: "Tour of Harar", href: "/tour-of-harar" },
      { label: "Addis Ababa City Tour", href: "/addis-ababa-city-tour" },
      { label: "Arbaminch, Konso, Yabello Tour", href: "/arbaminchkonso" },
      { label: "Full Day Tour of Lalibela", href: "/full-day-tour-of-lalibla" },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
  {
    label: "Information",
    href: "/visa-passport",
    children: [
      { label: "Visa & Passport", href: "/visa-passport" },
      { label: "Transportation", href: "/transportation" },
      { label: "Accommodation", href: "/accommodation" },
    ],
  },
];

export const footerTourLinks = [
  { label: "Danakil Depression with Lalibela", href: "/danakil-depression-with-lalibela" },
  { label: "Historic Route, Tigray Rock Hewn Churches", href: "/historic-route-tigray-rock-hewn-churches" },
  { label: "Omo Valley with Surma Villages", href: "/omo-valleys-with-surma-villages" },
  { label: "Semien Mountains", href: "/semien-mountains" },
  { label: "Bale Trekking", href: "/bale-trekking" },
  { label: "Tour of Harar", href: "/tour-of-harar" },
];

export const footerInfoLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Visa & Passport", href: "/visa-passport" },
  { label: "Transportation", href: "/transportation" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Contact Us", href: "/contact-us" },
];

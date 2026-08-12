import Image from "next/image";
import Link from "next/link";
import { footerInfoLinks, footerTourLinks } from "@/lib/nav";
import { contactContent } from "@/lib/pages";

export function Footer() {
  const ethiopiaOffice = contactContent.offices[0];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2" aria-label="13 Suns Tours home">
              <Image
                src="/images/site/logo.png"
                alt="13 Suns Tours logo"
                width={140}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              An experienced Ethiopian tour and travel company, established in 2000, bringing you the best of
              Ethiopia&rsquo;s historic routes, tribal cultures and natural wonders.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">Popular Tours</h2>
            <ul className="mt-4 space-y-2.5">
              {footerTourLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/70 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">Information</h2>
            <ul className="mt-4 space-y-2.5">
              {footerInfoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/70 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">Get in Touch</h2>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-cream/70">
              {ethiopiaOffice.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                <a href={`tel:${ethiopiaOffice.phone?.replace(/\s/g, "")}`} className="hover:text-gold">
                  {ethiopiaOffice.phone}
                </a>
                <br />
                <a href={`tel:${ethiopiaOffice.mobile?.replace(/\s/g, "")}`} className="hover:text-gold">
                  {ethiopiaOffice.mobile}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactContent.email}`} className="hover:text-gold">
                  {contactContent.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {year} 13 Suns Tours. All rights reserved.</p>
          <p>Addis Ababa, Ethiopia &middot; Dallas, USA</p>
        </div>
      </div>
    </footer>
  );
}

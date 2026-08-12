"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/lib/nav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close the mobile menu / dropdown whenever navigation occurs. Adjusting
  // state during render (rather than in a useEffect) avoids an extra
  // cascading render pass — see https://react.dev/learn/you-might-not-need-an-effect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="13 Suns Tours home">
          <Image src="/images/site/logo.png" alt="13 Suns Tours logo" width={140} height={60} priority className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-soft hover:text-gold-dark"
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown />
                    </button>
                    {openDropdown === item.label ? (
                      <ul className="absolute left-0 top-full min-w-72 rounded-lg border border-stone-200 bg-white py-2 shadow-card-hover">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm text-ink-soft hover:bg-cream hover:text-gold-dark"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-ink-soft hover:text-gold-dark"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact-us"
          className="hidden rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-dark lg:inline-flex"
        >
          Plan Your Trip
        </Link>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen ? (
        <nav id="mobile-menu" aria-label="Primary mobile" className="border-t border-stone-200 bg-cream lg:hidden">
          <ul className="mx-auto max-w-6xl divide-y divide-stone-200 px-4 sm:px-6">
            {primaryNav.map((item) => (
              <li key={item.label} className="py-1">
                {item.children ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-sm font-medium text-ink-soft">
                      {item.label}
                      <ChevronDown className="transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="pb-2 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block py-2 text-sm text-stone-600 hover:text-gold-dark">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className="block py-2.5 text-sm font-medium text-ink-soft hover:text-gold-dark">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

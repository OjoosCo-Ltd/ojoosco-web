"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/nav";

type SiteHeaderProps = {
  /** `landing` floats fixed over the hero; `inner` sits in the normal flow. */
  variant?: "landing" | "inner";
};

export function SiteHeader({ variant = "inner" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const containerClass =
    variant === "landing"
      ? "fixed left-1/2 top-4 z-50 w-[min(1196px,calc(100%-32px))] -translate-x-1/2 rounded-[20px] shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:top-8 md:w-[min(1196px,calc(100%-48px))]"
      : "fixed left-1/2 top-4 z-50 w-[min(1196px,calc(100%-32px))] -translate-x-1/2 rounded-[20px] shadow-[0_18px_45px_rgba(25,28,30,0.08)] md:top-8 md:w-[min(1196px,calc(100%-48px))]";

  const isActive = (href: string) => href === pathname;

  return (
    <>
      <header className={`${containerClass} bg-[#3A5153] px-3 py-3 md:px-10 md:py-6`}>
        <div className="flex h-9 items-center justify-between gap-3 md:h-[52px]">
          <Link
            href="/"
            className="relative block h-[27px] w-[101px] shrink-0 md:h-[34px] md:w-[125px]"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/figma-assets/o-logo.png"
              alt="Ojoosco"
              fill
              priority
              className="object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-[34px] text-[13px] font-semibold text-white/85 lg:flex">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={
                  isActive(href)
                    ? "rounded-full bg-white px-4 py-1.5 text-[#3a5153]"
                    : "transition hover:text-white"
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <Link
              href="/partner-with-us"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[#98ff98] px-3 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#124343] transition hover:bg-[#b4ffb4] md:h-[52px] md:px-6 md:text-[12px]"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner With Us
            </Link>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="site-mobile-menu"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-[#98ff98] lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="relative block h-3.5 w-4" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition duration-300 ${
                    isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-0.5 w-4 rounded-full bg-current transition duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-4 rounded-full bg-current transition duration-300 ${
                    isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* The header is fixed (out of flow); on inner pages reserve its space so
          the hero content sits below it instead of underneath it. The landing
          hero is intentionally full-bleed and overlaps the header. */}
      {variant === "inner" ? (
        <div aria-hidden="true" className="h-[60px] md:h-[100px]" />
      ) : null}

      <div
        className={`fixed inset-0 z-40 bg-[#061f20]/55 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <aside
        id="site-mobile-menu"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(340px,calc(100vw-32px))] flex-col bg-[#102f30] px-6 pb-8 pt-24 text-white shadow-[-24px_0_60px_rgba(0,0,0,0.24)] transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-2 text-[18px] font-semibold">
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={
                isActive(href)
                  ? "rounded-xl bg-white px-4 py-3 text-[#124343]"
                  : "rounded-xl px-4 py-3 text-white/82 transition hover:bg-white/10 hover:text-white"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/partner-with-us"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-[#98ff98] px-5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#124343]"
          onClick={() => setIsMenuOpen(false)}
        >
          Partner With Us
        </Link>
      </aside>
    </>
  );
}

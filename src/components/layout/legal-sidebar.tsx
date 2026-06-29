"use client";

import { useEffect, useRef, useState } from "react";

type SidebarItem = readonly [string, string];

export function LegalSidebar({
  items,
  subtitle,
  ariaLabel,
  pdfHref,
}: {
  items: readonly SidebarItem[];
  subtitle: string;
  ariaLabel: string;
  pdfHref: string;
}) {
  const [activeId, setActiveId] = useState(
    items[0]?.[1].replace("#", "") ?? "",
  );
  // While a click is scrolling to its target, ignore the scroll-spy observer
  // so the active style jumps straight to the clicked item and stays there.
  const clickLockRef = useRef(false);
  const unlockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = (id: string) => {
    setActiveId(id);
    clickLockRef.current = true;
    if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    unlockTimerRef.current = setTimeout(() => {
      clickLockRef.current = false;
    }, 700);
  };

  useEffect(() => () => {
    if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
  }, []);

  useEffect(() => {
    const sections = items
      .map(([, href]) => document.getElementById(href.replace("#", "")))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLockRef.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="pt-6 lg:sticky lg:top-8">
      <div className="rounded-xl bg-[#f2f4f7]/50 p-6 text-[#3f484d] backdrop-blur-md">
        <p className="font-display text-[20px] font-bold leading-[30px] text-[#191c1e]">
          Legal Center
        </p>
        <p className="text-[14px] font-normal leading-5 text-[#3f484d]">
          {subtitle}
        </p>
        <nav aria-label={ariaLabel} className="mt-8">
          <ul className="space-y-2">
            {items.map(([label, href]) => {
              const id = href.replace("#", "");
              const isActive = id === activeId;
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => handleClick(id)}
                    aria-current={isActive ? "true" : undefined}
                    className={
                      isActive
                        ? "block border-l-2 border-[#005068] bg-[#cae7f7]/20 py-2 pl-[18px] text-[16px] font-bold leading-6 text-[#005068]"
                        : "block py-2 pl-4 text-[16px] font-normal leading-6 text-[#3f484d] transition hover:text-[#005068]"
                    }
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <a
          href={pdfHref}
          download
          className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#e0e3e6]/50 px-10 text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#005068] transition hover:bg-[#d8dde1]"
        >
          <DownloadIcon />
          Download
        </a>
      </div>
    </aside>
  );
}

function DownloadIcon() {
  return (
    <svg className="size-3.5" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

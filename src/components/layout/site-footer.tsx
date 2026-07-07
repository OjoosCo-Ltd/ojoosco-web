import Image from "next/image";
import Link from "next/link";
import { footerGroups, socialLinks } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="bg-[#f1f4f7] px-5 text-[#3f484d] md:px-20">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-14 px-0 py-16 md:flex-row md:px-8">
        <div className="max-w-[384px]">
          <Link href="/" className="relative block h-[33px] w-[125px]">
            <Image
              src="/figma-assets/logo-plain.png"
              alt="Ojoosco"
              fill
              className="object-contain"
            />
          </Link>
          <p className="mt-8 max-w-[340px] text-[16px] leading-[1.65]">
            Building a future where technology is a natural extension of human
            intent and empathy.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 md:gap-16">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#005069]">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3 text-[16px]">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="transition hover:text-[#005069]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-4 pb-12">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex size-10 items-center justify-center rounded-full bg-[#005069]/[0.08] transition hover:bg-[#005069]/15"
          >
            <Image
              src={social.src}
              alt=""
              width={social.width}
              height={social.height}
              className="h-auto w-auto"
            />
          </a>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1280px] items-center justify-center border-t border-[#e6e6fa] py-6 pb-8 text-center text-[16px] text-[#5f5e5e]/70">
        <p>&copy; 2026 Ojoosco Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

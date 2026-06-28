import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { LegalSidebar } from "@/components/layout/legal-sidebar";

export const metadata: Metadata = {
  title: "Terms of Service | Ojoosco",
  description:
    "Read the Terms of Service governing your use of the Ojoosco Ltd corporate website, products, and related services.",
};

const heroMeta = [
  { label: "Effective Date", value: "May , 2026" },
  { label: "Last Updated", value: "April 2026" },
  { label: "Governing Law", value: "England & Wales" },
  {
    label: "Contact",
    value: "info@ojoosco.com",
    href: "mailto:info@ojoosco.com",
  },
] as const;

const sidebarItems = [
  ["Introduction", "#introduction"],
  ["User Conduct", "#user-conduct"],
  ["Intellectual Property", "#intellectual-property"],
  ["Products and Services", "#products-and-services"],
  ["Third-Party Links", "#third-party-links"],
  ["Disclaimers", "#disclaimers"],
  ["Liability", "#liability"],
  ["Privacy", "#privacy"],
  ["Changes to Terms", "#changes-to-terms"],
  ["Governing Law", "#governing-law"],
  ["Contact", "#contact"],
] as const;

const usageRules = [
  {
    icon: "lock",
    title: "Unauthorised Access",
    body: "Attempting to bypass security protocols or accessing non-public system areas.",
  },
  {
    icon: "bug",
    title: "Malware",
    body: "Introducing viruses, trojans, worms, or any other malicious software.",
  },
  {
    icon: "data",
    title: "Data Scraping",
    body: "Using automated systems or software to extract data from our platform.",
  },
  {
    icon: "mail-lock",
    title: "Spam",
    body: "Using our services to transmit unsolicited commercial communications.",
  },
  {
    icon: "connect",
    title: "Website Disruption",
    body: "Interfering with the proper working of the Ojoosco website or servers.",
  },
  {
    icon: "enforc",
    title: "Illegal Use",
    body: "Using the website for any purpose that is unlawful or prohibited by law.",
  },
] as const;

const iprBadges = [
  { src: "/figma-assets/terms/shield.png", width: 24, height: 30 },
  { src: "/figma-assets/terms/cee.png", width: 30, height: 30 },
  { src: "/figma-assets/terms/shield-check.png", width: 24, height: 30 },
] as const;

const termsIcons = {
  lock: { src: "/figma-assets/terms/lock.png", width: 23, height: 30 },
  bug: { src: "/figma-assets/terms/bug.png", width: 30, height: 34 },
  data: { src: "/figma-assets/terms/data.png", width: 34, height: 34 },
  "mail-lock": { src: "/figma-assets/terms/mail-lock.png", width: 42, height: 30 },
  connect: { src: "/figma-assets/terms/connect.png", width: 38, height: 38 },
  enforc: { src: "/figma-assets/terms/enforc.png", width: 34, height: 36 },
} as const;

type TermsIconName = keyof typeof termsIcons;

export default function TermsOfService() {
  return (
    <main id="top" className="min-h-screen bg-[#f5f6f7] text-[#1a1c1e]">
      <Hero />
      <TermsContent />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-8 md:h-[745px] md:px-20 md:pb-0 md:pt-[50px]">
      <div className="absolute bottom-4 right-[-80px] top-1/4 w-[600px] rounded-full bg-[#005069]/10 blur-[60px]" />
      <div className="absolute left-[-120px] top-[250px] size-[500px] rounded-full bg-[#2d80a0]/20 blur-[60px]" />
      <div className="absolute right-[8%] top-[360px] size-[400px] rounded-full bg-[#4a3aff]/10 blur-[50px]" />

      <SiteHeader variant="inner" />

      <div className="relative mx-auto max-w-[1280px] pt-24 md:pt-[160px]">
        <div className="max-w-[768px]">
          <h1 className="font-display text-[46px] font-semibold leading-none tracking-[0] text-[#1a1c1e] md:text-[72px]">
            Terms of Service
          </h1>
          <p className="mt-5 max-w-[672px] text-[16px] leading-[1.6] text-[#5f6368] md:text-[18px]">
            These Terms of Service govern your use of the Ojoosco Ltd corporate
            website, products, and related services. By accessing our platform,
            you agree to comply with these professional standards.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-8">
            {heroMeta.map((item) => (
              <div key={item.label} className="min-w-[92px]">
                <p className="text-[10px] uppercase leading-5 text-[#707978]/80">
                  {item.label}
                </p>
                {"href" in item ? (
                  <a
                    href={item.href}
                    className="mt-0.5 inline-block text-[14px] leading-5 text-[#2d80a0] underline underline-offset-2 transition hover:text-[#005069]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-0.5 text-[14px] leading-5 text-[#5f5e5e]">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TermsContent() {
  return (
    <section className="bg-[#f5f6f7] px-5 pb-20 md:px-20 md:pb-28">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[296px_minmax(0,952px)] lg:items-start">
        <LegalSidebar
          items={sidebarItems}
          subtitle="Terms of Service"
          ariaLabel="Terms of service sections"
          pdfHref="/legal/terms-of-service.docx"
        />

        <div className="space-y-[86px] pt-8 lg:pt-0">
          <TermsSection id="introduction" title="About Ojoosco">
            <div className="space-y-4 text-[16px] leading-[1.7] text-[#4c555c] md:text-[18px]">
              <p>
                OjoosCo Ltd is a technology company registered in England and
                Wales. We build and operate digital products, including
                Xparience, a dating and lifestyle platform. These terms govern
                your use of our corporate website only.
              </p>
              <p>
                If you are a user of the Xparience platform, your use of it is
                governed by the Xparience Terms of Use, available at (insert the
                Xparience Terms of Use URL).
              </p>
            </div>

            <div className="flex items-center gap-5 rounded-2xl bg-[#eceef0] px-6 py-6 md:px-8">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#005069]">
                <TermsIcon name="enforc" className="h-6 brightness-0 invert" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold leading-6 text-[#1a1c1e]">
                  Registered Office
                </h3>
                <p className="mt-1 text-[15px] leading-6 text-[#4c555c]">
                  124 City Road, London, England, EC1V 2NX
                </p>
              </div>
            </div>
          </TermsSection>

          <TermsSection id="user-conduct" title="Website Usage Rules">
            <p className="text-[16px] leading-[1.7] text-[#4c555c] md:text-[18px]">
              The integrity of our digital infrastructure is paramount. The
              following activities are strictly prohibited:
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {usageRules.map((rule) => (
                <Panel key={rule.title} className="min-h-[180px] px-6 py-6">
                  <TermsIcon name={rule.icon} className="h-7" />
                  <h3 className="mt-5 text-[17px] font-bold leading-7 text-[#1a1c1e]">
                    {rule.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#4c555c]">
                    {rule.body}
                  </p>
                </Panel>
              ))}
            </div>
          </TermsSection>

          <section id="intellectual-property" className="scroll-mt-28">
            <div className="relative overflow-hidden rounded-[24px] text-white">
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="/figma-assets/terms/ipr-bg.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 952px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative px-7 py-12 md:px-14 md:py-16">
                <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#9fc4d4]">
                  Ownership Notice
                </p>
                <h2 className="font-display mt-4 text-[32px] font-medium leading-[1.2] tracking-[0] text-white">
                  Intellectual Property Rights
                </h2>
                <p className="mt-6 max-w-[600px] font-sans text-[18px] leading-[1.75] text-white/80">
                  All designs, logos, graphics, source code, and digital assets
                  are the exclusive property of Ojoosco Ltd. Unauthorized
                  reproduction or redistribution is strictly prohibited and
                  protected under UK and international intellectual property
                  laws.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  {iprBadges.map((badge) => (
                    <Image
                      key={badge.src}
                      src={badge.src}
                      alt=""
                      width={badge.width}
                      height={badge.height}
                      className="h-6 w-auto object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <TermsSection id="products-and-services" title="Our Products and Services">
            <div className="space-y-4 text-[16px] leading-[1.7] text-[#4c555c] md:text-[18px]">
              <p>
                Information on this website about our products and services,
                including Xparience, is provided for general informational
                purposes only. We reserve the right to change, suspend, or
                discontinue any product or service at any time without notice.
              </p>
              <p>
                Product descriptions, features, and pricing are subject to
                change. Nothing on this website constitutes a binding offer or
                contract for any product or service.
              </p>
            </div>
          </TermsSection>

          <TermsSection id="third-party-links" title="Third-Party Links">
            <div className="space-y-4 text-[16px] leading-[1.7] text-[#4c555c] md:text-[18px]">
              <p>
                Our website may contain links to third-party websites. These
                links are provided for your convenience only. OjoosCo Ltd does
                not endorse, control, or take responsibility for the content or
                practices of any third-party websites. We encourage you to
                review the terms and privacy policies of any third-party sites
                you visit.
              </p>
            </div>
          </TermsSection>

          <TermsSection id="disclaimers" title="Disclaimers">
            <div className="space-y-4 text-[16px] leading-[1.7] text-[#4c555c] md:text-[18px]">
              <p>
                Our website is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis. We make no warranties, express or
                implied, about the accuracy, completeness, or reliability of any
                content on our website.
              </p>
              <p>
                We do not warrant that our website will be uninterrupted,
                error-free, or free from viruses or other harmful components.
                You are responsible for ensuring that your device and connection
                are appropriate for accessing our website.
              </p>
            </div>
          </TermsSection>

          <TermsSection id="liability" title="Limitation of Liability">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div className="rounded-r-[16px] border-l-[3px] border-[#0f4d61] bg-[#eef0f2] px-7 py-7 md:px-8">
                <p className="text-[16px] leading-[1.7] text-[#4c555c] md:text-[18px]">
                  &quot;Ojoosco Ltd shall not be held liable for any direct,
                  indirect, incidental, or consequential damages resulting from
                  the use or inability to use our services.&quot;
                </p>
              </div>
              <div className="space-y-4 text-[16px] leading-[1.7] text-[#4c555c] md:text-[18px]">
                <p>
                  Nothing in these terms limits our liability for death or
                  personal injury caused by our negligence, fraud or fraudulent
                  misrepresentation, or any other liability that cannot be
                  excluded by applicable law.
                </p>
                <p>
                  We strive for 99.9% uptime and data accuracy, but our services
                  are provided on an &quot;as-is&quot; and &quot;as-available&quot;
                  basis. Users assume full responsibility for their use of our
                  digital resources.
                </p>
              </div>
            </div>
          </TermsSection>

          <section id="privacy" className="scroll-mt-28">
            <div className="flex flex-col gap-8 rounded-[24px] border border-black/[0.06] bg-white px-7 py-10 shadow-[0_1px_2px_rgba(0,0,0,0.03)] md:flex-row md:items-center md:justify-between md:px-12 md:py-12">
              <div className="max-w-[620px]">
                <h2 className="font-display text-[30px] font-medium leading-[1.2] tracking-[0] text-[#1a1c1e] md:text-[36px]">
                  Your Privacy Matters
                </h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-[#4c555c] md:text-[18px]">
                  Learn how we collect, store, and process your data in our
                  comprehensive Privacy Policy.
                </p>
              </div>
              <Link
                href="/privacy-policy"
                className="inline-flex h-[58px] shrink-0 items-center gap-3 rounded-full bg-[#134d62] px-8 text-[14px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#0d3f50]"
              >
                View Privacy Policy
                <ArrowIcon />
              </Link>
            </div>
          </section>

          <TermsSection id="changes-to-terms" title="Changes to These Terms">
            <div className="space-y-4 text-[16px] leading-[1.7] text-[#4c555c] md:text-[18px]">
              <p>
                We may update these Terms of Service from time to time. Updated
                terms will be posted on this page with a revised effective date.
                Your continued use of our website after any changes constitutes
                your acceptance of the updated terms.
              </p>
            </div>
          </TermsSection>

          <section id="governing-law" className="scroll-mt-28">
            <div className="rounded-[16px] border border-black/[0.05] bg-white px-7 py-8 shadow-[0_1px_2px_rgba(0,0,0,0.02)] md:px-12 md:py-10">
              <h2 className="font-display text-[28px] font-semibold leading-[1.35] tracking-[0] text-[#1a1c1e] md:text-[32px]">
                Governing Law
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-[#4c555c] md:text-[18px]">
                These Terms of Service are governed by and construed in
                accordance with the laws of England and Wales. Any disputes
                arising in connection with these terms shall be subject to the
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </section>

          <section id="contact" className="scroll-mt-28">
            <div className="rounded-[24px] bg-[#eceef0] px-7 py-10 md:px-12 md:py-12">
              <h2 className="font-display text-[28px] font-semibold leading-[1.35] tracking-[0] text-[#1a1c1e] md:text-[32px]">
                Legal Inquiries
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#5d686f]">
                    Email
                  </p>
                  <a
                    href="mailto:legal@ojoosco.com"
                    className="mt-3 inline-block font-sans text-[16px] font-bold leading-6 text-[#005068] transition hover:text-[#005069]"
                  >
                    legal@ojoosco.com
                  </a>
                </div>
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#5d686f]">
                    Address
                  </p>
                  <p className="mt-3 font-sans text-[16px] font-bold leading-6 text-[#1a1c1e]">
                    124 City Road, London, England, EC1V 2NX
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#5d686f]">
                    Website
                  </p>
                  <a
                    href="https://www.ojoosco.com"
                    className="mt-3 inline-block font-sans text-[16px] font-bold leading-6 text-[#005068] transition hover:text-[#005069]"
                  >
                    www.ojoosco.com
                  </a>
                </div>
              </div>
              <a
                href="mailto:legal@ojoosco.com"
                className="mt-10 inline-flex h-[56px] items-center justify-center rounded-[14px] bg-[#1a1c1e] px-8 text-[14px] font-medium leading-none text-white transition hover:bg-black"
              >
                Contact Legal Team
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

function TermsSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-[28px] font-semibold leading-[1.35] tracking-[0] text-[#1a1c1e] md:text-[32px]">
        {title}
      </h2>
      <div className="mt-8 space-y-8">{children}</div>
    </section>
  );
}

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-black/[0.05] bg-white/80 text-[15px] leading-[1.65] text-[#4c555c] shadow-[0_1px_2px_rgba(0,0,0,0.02)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

function TermsIcon({
  name,
  className = "h-7",
}: {
  name: TermsIconName;
  className?: string;
}) {
  const icon = termsIcons[name];
  return (
    <Image
      src={icon.src}
      alt=""
      width={icon.width}
      height={icon.height}
      className={`${className} w-auto object-contain`}
    />
  );
}

function ArrowIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

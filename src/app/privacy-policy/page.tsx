import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterSocialLinks } from "../footer-social-links";

export const metadata: Metadata = {
  title: "Privacy Policy | Ojoosco",
  description:
    "Read how Ojoosco Ltd collects, uses, stores, and protects information across its corporate website and services.",
};

const navItems = [
  ["Home", "/"],
  ["About", "/about-us"],
  ["Ventures", "/ventures"],
  ["Investment", "/investment"],
  ["Contact", "/contact-us"],
] as const;

const heroMeta = [
  ["Effective Date", "May , 2026"],
  ["Last Updated", "April 2026"],
  ["Entity", "Registered in England & Wales"],
  ["ICO Registration", "ZC126821"],
  ["Company no", "16638905"],
] as const;

const sidebarItems = [
  ["Who We Are", "#who-we-are"],
  ["What Data We Collect", "#what-data-we-collect"],
  ["Data Collected Automatically", "#data-collected-automatically"],
  ["How We Use Your Data", "#how-we-use-your-data"],
  ["Lawful Basis for Processing", "#lawful-basis"],
  ["Data Sharing", "#data-sharing"],
  ["Data Retention", "#data-retention"],
  ["Cookies", "#cookies"],
  ["Your Rights", "#your-rights"],
  ["International Transfers", "#international-transfers"],
  ["Changes to This Policy", "#changes"],
  ["Contact Us", "#contact-privacy-team"],
] as const;

const companyRows = [
  ["Company Name", "OjoosCo Ltd"],
  ["Registered in", "England and Wales"],
  ["Company No.", "16638905"],
  ["Registered Address", "124 City Road, London, England, EC1V 2NX"],
  ["ICO Registration No.", "ZC126821"],
  ["Data Protection Contact", "info@ojoosco.com"],
] as const;

const dataCategories = [
  {
    icon: "form",
    title: "Contact Forms",
    body: "Name, email address, and professional affiliation provided when reaching out to our teams.",
  },
  {
    icon: "mail",
    title: "Newsletters",
    body: "Subscription preferences and email addresses for those opting into our insights and updates.",
  },
  {
    icon: "briefcase",
    title: "Job Applications",
    body: "CVs, portfolios, and employment history submitted via our recruitment portal.",
  },
  {
    icon: "partners",
    title: "Partnerships",
    body: "Corporate data and representative contact details for strategic alliance enquiries.",
  },
  {
    icon: "analytics",
    title: "Analytics",
    body: "IP addresses, browser types, and interaction logs captured for site performance optimization.",
  },
] as const;

const automaticData = [
  "IP address",
  "Browser type and version",
  "Pages visited and time spent on each page",
  "Referring website or search terms used to find us",
  "Device type and operating system",
] as const;

const useCases = [
  "To respond to your enquiries and messages",
  "To send you company news and updates, if you have opted in",
  "To process job applications and assess candidates",
  "To analyse and improve our website performance",
  "To comply with our legal obligations",
] as const;

const lawfulBases = [
  "Contact and enquiry data - legitimate interests (responding to inbound enquiries) or contract (where we are engaging with you commercially)",
  "Newsletter subscribers - consent (you opted in)",
  "Job applicants - legitimate interests (evaluating applications) and pre-contractual steps",
  "Website analytics - legitimate interests (understanding and improving our website)",
] as const;

const sharingRules = [
  "Technology service providers who help us operate our website (e.g. hosting provider, email platform, analytics tools), under written data processing agreements",
  "Professional advisers such as lawyers or accountants, where necessary",
  "Regulatory or law enforcement authorities, where required by law",
] as const;

const retentionRows = [
  {
    period: "2 Years",
    title: "General Enquiries Data",
    body: "Maintained for history and follow-up quality control.",
  },
  {
    period: "Ongoing",
    title: "Newsletter Subscriber Data",
    body: "Retained until the user proactively unsubscribes from communications.",
  },
  {
    period: "6 Months",
    title: "Job Applications Data",
    body: "Held for potential future openings unless requested otherwise.",
  },
  {
    period: "26 Months",
    title: "Website Analytics Data",
    body: "Aggregated user behavior data for long-term trend analysis.",
  },
] as const;

const rights = [
  {
    title: "Right of Access",
    body: "Request a comprehensive copy of all personal information we hold about you at any time.",
  },
  {
    title: "Rectification",
    body: "Ensure your data is accurate and up-to-date by requesting corrections to any inaccuracies.",
  },
  {
    title: "Erasure (To be Forgotten)",
    body: "Request the deletion of your personal data where there is no compelling reason for its continued processing.",
  },
  {
    title: "Data Portability",
    body: "Obtain and reuse your personal data for your own purposes across different services in a structured format.",
  },
] as const;

const contactCards = [
  {
    icon: "pin",
    title: "Office Address",
    body: "124 City Road, London, England, EC1V 2NX",
  },
  {
    icon: "mail",
    title: "Compliance Email",
    body: "info@ojoosco.com",
  },
  {
    icon: "web",
    title: "Website",
    body: "www.ojoosco.com",
  },
] as const;

const footerGroups = [
  {
    title: "Navigation",
    links: [
      ["Home", "/"],
      ["About", "/about-us"],
      ["Ventures", "/ventures"],
    ],
  },
  {
    title: "Connect",
    links: [
      ["Investment", "/investment"],
      ["Partner With Us", "/partner-with-us"],
      ["Contact", "/contact-us"],
      ["Explore Opportunities", "/explore-opportunities#opportunities"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/privacy-policy"],
      ["Terms of Service", "#"],
    ],
  },
] as const;

type PolicyIconName = keyof typeof iconPaths;

export default function PrivacyPolicy() {
  return (
    <main id="top" className="min-h-screen bg-[#f5f6f7] text-[#1a1c1e]">
      <Hero />
      <PolicyContent />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-8 md:h-[745px] md:px-20 md:pb-0 md:pt-[50px]">
      <div className="absolute bottom-4 right-[-80px] top-1/4 w-[600px] rounded-full bg-[#005069]/10 blur-[60px]" />
      <div className="absolute left-[-120px] top-[250px] size-[500px] rounded-full bg-[#2d80a0]/20 blur-[60px]" />
      <div className="absolute right-[8%] top-[360px] size-[400px] rounded-full bg-[#4a3aff]/10 blur-[50px]" />

      <PrivacyHeader />

      <div className="relative mx-auto max-w-[1280px] pt-24 md:pt-[160px]">
        <div className="max-w-[768px]">
          <p className="text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#2d80a0]">
            Privacy Framework
          </p>
          <h1 className="font-display mt-4 text-[46px] font-semibold leading-none tracking-[0] text-[#1a1c1e] md:text-[72px]">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-[672px] text-[16px] leading-[1.6] text-[#5f6368] md:text-[18px]">
            Your privacy matters to us. This policy explains how Ojoosco Ltd
            collects, uses, stores, and protects your information across our
            corporate website and services.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-8">
            {heroMeta.map(([label, value]) => (
              <div key={label} className="min-w-[92px]">
                <p className="text-[10px] uppercase leading-5 text-[#707978]/80">
                  {label}
                </p>
                <p className="mt-0.5 text-[14px] leading-5 text-[#5f5e5e]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyHeader() {
  return (
    <header className="relative z-20 mx-auto max-w-[1196px] rounded-[20px] bg-[#3a5153] px-4 py-3 shadow-[0_18px_45px_rgba(25,28,30,0.08)] md:px-10 md:py-6">
      <div className="flex h-8 items-center justify-between md:h-[52px]">
        <Link href="/" className="relative block h-[27px] w-[101px] md:h-[34px] md:w-[125px]">
          <Image
            src="/figma-assets/logo-mark-b.svg"
            alt="Ojoosco"
            fill
            priority
            className="object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-10 text-[13px] font-medium text-white lg:flex xl:gap-16">
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={
                label === "Home"
                  ? "rounded-full bg-[#d9d9d9] px-4 py-1.5 text-[#3f484d]"
                  : "transition hover:text-[#98ff98]"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact-us"
          className="inline-flex h-9 items-center justify-center rounded-xl bg-[#98ff98] px-4 text-[10px] font-extrabold uppercase tracking-[0.05em] text-[#3f484d] transition hover:bg-[#b8ffb8] md:h-[52px] md:px-6 md:text-[12px]"
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
}

function PolicyContent() {
  return (
    <section className="bg-[#f5f6f7] px-5 pb-20 md:px-20 md:pb-28">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[296px_minmax(0,952px)] lg:items-start">
        <LegalSidebar />

        <div className="space-y-[86px] pt-8 lg:pt-0">
          <PolicySection id="who-we-are" title="Who We Are">
            <Panel className="space-y-5 px-6 py-7 md:px-8">
              <p>
                Ojoosco Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                is a technology-focused engineering firm registered in England
                and Wales. We act as the Data Controller for the personal
                information processed through this website.
              </p>
              <p>
                Our commitment to privacy is built on the foundation of
                transparency and security. We ensure that all processing
                activities are conducted in full compliance with the UK GDPR and
                the Data Protection Act 2018.
              </p>
            </Panel>
            <CompanyTable />
          </PolicySection>

          <PolicySection id="what-data-we-collect" title="What Data We Collect">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {dataCategories.map((item) => (
                <Panel key={item.title} className="min-h-[180px] px-6 py-6">
                  <PolicyIcon name={item.icon} className="size-7 text-[#2d80a0]" />
                  <h3 className="mt-5 text-[17px] font-bold leading-7 text-[#1a1c1e]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#4c555c]">
                    {item.body}
                  </p>
                </Panel>
              ))}
            </div>
          </PolicySection>

          <PolicySection
            id="data-collected-automatically"
            title="Data Collected Automatically"
          >
            <TextListCard
              intro="When you visit our website, we automatically collect certain technical data, including:"
              items={automaticData}
              outro="This data is collected via cookies and analytics tools. See Section 7 for our cookie policy."
            />
          </PolicySection>

          <PolicySection id="how-we-use-your-data" title="How We Use Your Data">
            <TextListCard
              intro="We use the personal data we collect for the following purposes:"
              items={useCases}
              outro="We will not use your data for purposes incompatible with the purpose for which it was collected, and we will not sell or share your data with third parties for their own marketing purposes."
            />
          </PolicySection>

          <PolicySection id="lawful-basis" title="Lawful Basis for Processing">
            <TextListCard
              intro="Our lawful basis for processing your personal data depends on how you interact with us:"
              items={lawfulBases}
            />
          </PolicySection>

          <PolicySection id="data-sharing" title="Data Sharing">
            <TextListCard
              intro="We do not sell your personal data. We may share it with"
              items={sharingRules}
              outro="All third-party processors are required to handle your data securely and only for the purposes we specify."
            />
          </PolicySection>

          <PolicySection id="data-retention" title="Data Retention Periods">
            <div className="space-y-4">
              {retentionRows.map((row) => (
                <Panel
                  key={row.title}
                  className="grid min-h-[94px] items-center gap-4 px-6 py-5 md:grid-cols-[128px_1px_1fr] md:px-7"
                >
                  <p className="text-[24px] font-medium leading-8 text-[#2d80a0]">
                    {row.period}
                  </p>
                  <div className="hidden h-10 w-px bg-[#dde7ec] md:block" />
                  <div>
                    <h3 className="text-[15px] font-bold leading-6 text-[#1a1c1e]">
                      {row.title}
                    </h3>
                    <p className="text-[14px] leading-5 text-[#4c555c]">
                      {row.body}
                    </p>
                  </div>
                </Panel>
              ))}
            </div>
          </PolicySection>

          <PolicySection id="cookies" title="Cookies">
            <Panel className="px-6 py-7 md:px-8">
              <p>
                Our website uses cookies. Essential cookies are necessary for
                the site to function. We also use analytical cookies to
                understand how visitors use our site. You will be shown a cookie
                consent banner on your first visit, where you can manage your
                preferences. For full details of the cookies we use, please see
                our Cookie Policy below
              </p>
              <Link
                href="#cookies"
                className="mt-6 inline-flex h-12 items-center gap-3 rounded-full bg-[#005069] px-6 text-[12px] font-bold leading-none text-white transition hover:bg-[#0a617a]"
              >
                View Cookie Policy
                <ArrowIcon />
              </Link>
            </Panel>
          </PolicySection>

          <PolicySection id="your-rights" title="Your Digital Rights">
            <div className="max-w-[672px] space-y-4 text-[15px] leading-[1.65] text-[#4c555c]">
              <p>
                Under UK GDPR, you possess significant rights regarding how your
                data is handled. We are committed to facilitating these rights
                without delay.
              </p>
              <p>
                You also have the right to object to processing and to withdraw
                consent where processing is based on consent.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {rights.map((right) => (
                <Panel
                  key={right.title}
                  className="border-transparent border-l-[3px] border-l-[#2d80a0] px-7 py-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[15px] font-bold leading-6 text-[#1a1c1e]">
                      {right.title}
                    </h3>
                    {right.title === "Right of Access" ? (
                      <span className="mt-1 block size-2.5 rotate-45 border-r border-t border-[#2d80a0]" />
                    ) : null}
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#4c555c]">
                    {right.body}
                  </p>
                </Panel>
              ))}
            </div>
            <p className="max-w-[672px] text-[15px] leading-[1.65] text-[#4c555c]">
              To exercise any of these rights, contact us at the email address
              in Section 1. We will respond within one calendar month. You also
              have the right to lodge a complaint with the ICO at ico.org.uk.
            </p>
          </PolicySection>

          <PolicySection id="international-transfers" title="International Transfers">
            <Panel className="px-6 py-7 md:px-8">
              <p>
                Some of our service providers may be based outside the UK. Where
                we transfer data internationally, we ensure appropriate
                safeguards are in place in accordance with UK GDPR Article 46.
              </p>
            </Panel>
          </PolicySection>

          <PolicySection id="changes" title="Changes to This Policy">
            <Panel className="px-6 py-7 md:px-8">
              <p>
                We may update this policy from time to time. Material changes
                will be notified on our website. The effective date at the top
                of this document indicates when it was last updated.
              </p>
            </Panel>
          </PolicySection>

          <ContactPrivacyTeam />
        </div>
      </div>
    </section>
  );
}

function LegalSidebar() {
  return (
    <aside className="pt-6 lg:sticky lg:top-8">
      <div className="rounded-xl bg-[#f2f4f7]/50 p-6 text-[#3f484d] backdrop-blur-md">
        <p className="font-display text-[20px] font-bold leading-[30px] text-[#191c1e]">
          Legal Center
        </p>
        <p className="text-[14px] font-normal leading-5 text-[#3f484d]">
          Privacy Policy
        </p>
        <nav aria-label="Privacy policy sections" className="mt-8">
          <ul className="space-y-2">
            {sidebarItems.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className={
                    label === "Who We Are"
                      ? "block border-l-2 border-[#005068] bg-[#cae7f7]/20 py-2 pl-[18px] text-[16px] font-bold leading-6 text-[#005068]"
                      : "block py-2 pl-4 text-[16px] font-normal leading-6 text-[#3f484d] transition hover:text-[#005068]"
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#top"
          className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#e0e3e6]/50 px-10 text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#005068] transition hover:bg-[#d8dde1]"
        >
          <DownloadIcon />
          Download PDF
        </a>
      </div>
    </aside>
  );
}

function PolicySection({
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

function CompanyTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-black/[0.05] bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      {companyRows.map(([label, value], index) => (
        <div
          key={label}
          className={`grid min-h-[92px] md:grid-cols-[244px_1fr] ${
            index === companyRows.length - 1 ? "" : "border-b border-[#e8edf0]"
          }`}
        >
          <div className="flex items-center bg-[#f9fbfc] px-6 py-4 text-[14px] font-medium text-[#4c555c] md:px-8">
            {label}
          </div>
          <div className="flex items-center px-6 py-4 text-[14px] text-[#1f2529] md:px-8">
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}

function TextListCard({
  intro,
  items,
  outro,
}: {
  intro: string;
  items: readonly string[];
  outro?: string;
}) {
  return (
    <Panel className="px-6 py-7 md:px-8">
      <p>{intro}</p>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-[0.72em] size-1 rounded-full bg-[#1a1c1e]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {outro ? <p className="mt-6">{outro}</p> : null}
    </Panel>
  );
}

function ContactPrivacyTeam() {
  return (
    <section
      id="contact-privacy-team"
      className="relative scroll-mt-28 overflow-hidden rounded-[24px] border border-[#e1e3e8] bg-white/80 px-6 py-12 text-center shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-md md:p-[49px]"
    >
      <div className="absolute right-[-48px] top-[-48px] size-64 rounded-full bg-[#2d80a0]/16 blur-[40px]" />
      <div className="relative">
        <h2 className="font-display text-[28px] font-semibold leading-[1.35] tracking-[0] text-[#1a1c1e] md:text-[32px]">
          Contact Privacy Team
        </h2>
        <p className="mx-auto mt-4 max-w-[576px] text-[15px] leading-[1.65] text-[#4c555c]">
          If you have any questions regarding this policy or wish to exercise
          your rights, please reach out to our dedicated compliance team.
        </p>

        <div className="mx-auto mt-8 grid max-w-[672px] gap-5 text-left md:grid-cols-3">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="min-h-[140px] rounded-2xl border border-white/[0.05] bg-transparent px-6 py-6"
            >
              <PolicyIcon name={card.icon} className="size-6 text-[#2d80a0]" />
              <h3 className="mt-4 text-[11px] font-bold uppercase leading-[15px] text-[#5d686f]">
                {card.title}
              </h3>
              <p className="mt-3 text-[13px] leading-5 text-[#4c555c]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f1f4f7] px-5 text-[#3f484d] md:px-20">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-14 px-0 py-16 md:flex-row md:px-8">
        <div className="max-w-[384px]">
          <Link href="/" className="relative block h-[33px] w-[125px]">
            <Image
              src="/figma-assets/logo-word-b.svg"
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

      <FooterSocialLinks />

      <div className="mx-auto flex max-w-[1280px] items-center justify-center border-t border-[#e6e6fa] py-6 pb-8 text-center text-[16px] text-[#5f5e5e]/70">
        <p>&copy; 2026 Ojoosco Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

function PolicyIcon({
  name,
  className = "size-5",
}: {
  name: PolicyIconName;
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={iconPaths[name]}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
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

const iconPaths = {
  form: "M5 4h14v16H5V4Zm4 5h6M9 13h6M9 17h3",
  mail: "M4 6h16v12H4V6Zm0 1 8 6 8-6",
  briefcase: "M9 7V5h6v2m-9 0h12v11H6V7Zm0 5h12",
  partners: "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19a4.5 4.5 0 0 1 9 0M11.5 19a4.5 4.5 0 0 1 9 0",
  analytics: "M4 19V5m0 14h16M8 15v-4m4 4V8m4 7v-6",
  pin: "M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  web: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-8-9h16M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9M12 3c-2.2 2.4-3.2 5.4-3.2 9s1 6.6 3.2 9",
} as const;

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterSocialLinks } from "../footer-social-links";

export const metadata: Metadata = {
  title: "Partner With Us | Ojoosco",
  description:
    "Partner with Ojoosco to build meaningful human-centred experiences powered by technology.",
};

const navItems = [
  ["Home", "/"],
  ["About", "/about-us"],
  ["Ventures", "/ventures"],
  ["Investment", "/investment"],
  ["Contact", "/contact-us"],
] as const;

const partnerCards = [
  {
    icon: "handshake",
    title: "Strategic Partnerships",
    body: "Collaborate with Ojoosco Ltd to build impactful digital experiences and scalable innovation opportunities.",
  },
  {
    icon: "investment",
    title: "Investment Opportunities",
    body: "Support the future of emotionally intelligent technology through long-term strategic investment.",
  },
  {
    icon: "brand",
    title: "Brand Collaborations",
    body: "Partner with our ventures to create thoughtful experiences that connect with modern audiences.",
  },
  {
    icon: "media",
    title: "Media & Press",
    body: "Connect with the Ojoosco Ltd team for interviews, features, and media opportunities.",
  },
];

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
];

export default function PartnerWithUs() {
  return (
    <main className="min-h-screen bg-white text-[#191c1e]">
      <Hero />
      <Partnerships />
      <WhyOjoosco />
      <Conversation />
      <FeaturedVenture />
      <ClosingCta />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-8 md:px-20 md:pb-[120px]">
      <div className="absolute bottom-4 right-[-80px] top-1/4 w-[600px] rounded-full bg-[#005069]/10 blur-[60px]" />
      <PartnerHeader />

      <div className="relative mx-auto mt-[120px] grid max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="inline-flex rounded-full bg-[#cae7f7] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[#4d6876]">
            Global Partnerships
          </p>
          <h1 className="font-display mt-6 max-w-[580px] text-balance text-5xl font-semibold leading-[1.1] tracking-[-0.04em] text-[#191c1e] md:text-[72px]">
            Let&apos;s Build the Future Together
          </h1>
          <p className="mt-6 max-w-[590px] text-[18px] leading-[1.6] text-[#3f484d]">
            Ojoosco Ltd partners with forward-thinking brands, investors,
            creatives, and innovators to build meaningful human-centred
            experiences powered by technology.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-[60px] items-center justify-center rounded-xl bg-[#005068] px-8 text-[16px] font-bold uppercase tracking-[0.11em] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition hover:bg-[#0a617a]"
            >
              Start a Partnership
            </a>
            <Link
              href="/ventures"
              className="inline-flex h-[60px] items-center justify-center rounded-xl border border-[#6f787e] px-8 text-[16px] font-bold uppercase tracking-[0.11em] text-[#191c1e] transition hover:bg-[#f2f4f7]"
            >
              Explore Our Ventures
            </Link>
          </div>
        </div>

        <div className="relative justify-self-center lg:justify-self-end">
          <div className="absolute inset-[-30px] rotate-3 rounded-[64px] bg-gradient-to-br from-[#005068]/10 to-transparent blur-[20px]" />
          <div className="relative aspect-[24/25] w-[min(576px,90vw)] overflow-hidden rounded-[48px] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <Image
              src="/figma-assets/partner/abstract-innovation.png"
              alt="Abstract orbital innovation artwork"
              fill
              priority
              sizes="(min-width: 1024px) 576px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerHeader() {
  return (
    <header className="relative z-10 mx-auto max-w-[1196px] rounded-[20px] bg-[#3a5153] px-4 py-4 shadow-[0_18px_45px_rgba(25,28,30,0.08)] md:px-10 md:py-6">
      <div className="flex h-[52px] items-center justify-between">
        <Link href="/" className="relative block h-[34px] w-[125px]">
          <Image
            src="/figma-assets/logo-mark-b.svg"
            alt="Ojoosco"
            fill
            priority
            className="object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-10 text-[14px] font-medium text-white lg:flex xl:gap-16">
          {navItems.map(([label, href]) => (
            <Link key={label} href={href} className="transition hover:text-[#98ff98]">
              {label}
            </Link>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex h-[52px] items-center justify-center rounded-xl bg-[#98ff98] px-5 text-[12px] font-extrabold uppercase tracking-[0.05em] text-[#3f484d] transition hover:bg-[#b8ffb8]"
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
}

function Partnerships() {
  return (
    <section id="partnerships" className="bg-[#f2f4f7] px-5 py-20 md:px-20">
      <div className="mx-auto max-w-[1280px] px-0 md:px-8">
        <h2 className="font-display text-[32px] font-medium tracking-[-0.01em] text-[#191c1e]">
          Partnership Opportunities
        </h2>
        <div className="mt-4 h-1 w-20 rounded-full bg-[#005068]" />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {partnerCards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[360px] flex-col justify-between rounded-[24px] border border-white/20 bg-white/40 p-8 shadow-[0_18px_50px_rgba(25,28,30,0.035)] backdrop-blur-md"
            >
              <div>
                <PartnerIcon name={card.icon} />
                <h3 className="font-display mt-6 max-w-[214px] text-[20px] leading-[1.4] text-[#191c1e]">
                  {card.title}
                </h3>
                <p className="mt-5 text-[16px] leading-[1.6] text-[#3f484d]">
                  {card.body}
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-[16px] font-extrabold text-[#005068] hover:underline"
              >
                Learn More
                <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyOjoosco() {
  return (
    <section className="bg-white px-5 py-24 md:px-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[0.75fr_1.1fr]">
        <div className="max-w-[470px] md:pl-8 lg:pl-0">
          <h2 className="font-display text-[32px] font-medium tracking-[-0.01em]">
            Why Ojoosco Ltd
          </h2>
          <p className="mt-8 text-[18px] leading-[1.65] text-[#3f484d]">
            We believe the future belongs to technology that understands people
            more deeply. Every partnership we build is rooted in intentionality,
            innovation, and meaningful long-term impact.
          </p>

          <div className="mt-8 space-y-8">
            <Reason
              icon="human"
              title="Human-centred innovation"
              body="Design that prioritises psychological and emotional well-being."
            />
            <Reason
              icon="scale"
              title="Scalable venture ecosystem"
              body="Cross-platform integration across health, finance, and social tech."
            />
          </div>
        </div>

        <div className="grid max-w-[683px] grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-4 pt-0 sm:pt-12">
            <ImageTile
              title="Visionary growth"
              src="/figma-assets/partner/visionary-growth.png"
              className="h-[320px]"
            />
            <div className="relative h-[240px] overflow-hidden rounded-[16px] bg-[#263844] p-8 text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <Image
                src="/figma-assets/partner/why-shadow-a.png"
                alt=""
                fill
                sizes="333px"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[#1c2b35]/35" />
              <div className="relative">
                <h3 className="font-display text-[20px]">Long-term impact</h3>
                <p className="mt-2 text-[14px] text-white/80">
                  Building legacies, not just products.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative h-[240px] overflow-hidden rounded-[16px] bg-[#1f2340] p-8 text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(152,255,152,0.2),transparent_28%),linear-gradient(180deg,#1c1834,#6a35a1_62%,#5c89c7)]" />
              <div className="absolute left-1/2 top-10 size-28 -translate-x-1/2 rounded-full border border-white/25 shadow-[0_0_40px_rgba(202,231,247,0.55)]" />
              <div className="relative">
                <h3 className="font-display text-[20px]">Intelligent Direction</h3>
              </div>
            </div>
            <ImageTile
              src="/figma-assets/partner/golden-abstract.png"
              className="h-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Conversation() {
  return (
    <section id="contact" className="bg-[#e8f0f3] px-5 py-20 md:py-24">
      <div className="mx-auto max-w-[768px] text-center">
        <h2 className="font-display text-[32px] font-medium tracking-[-0.01em]">
          Start the Conversation
        </h2>
        <p className="mt-4 text-[16px] text-[#3f484d]">
          Join us in shaping the next generation of digital experiences.
        </p>

        <form className="mt-8 rounded-[24px] bg-white/70 p-8 text-left shadow-[0_25px_60px_rgba(25,28,30,0.08)] backdrop-blur-md md:p-12">
          <div className="grid gap-x-6 gap-y-7 md:grid-cols-2">
            <Field label="Full Name" placeholder="John Doe" />
            <Field label="Company / Organisation" placeholder="Enter Company Name" />
            <Field label="Email Address" placeholder="john@company.com" type="email" />
            <label className="block">
              <span className="mb-2 block px-2 text-[12px] font-bold text-[#3f484d]">
                Partnership Type
              </span>
              <select className="h-12 w-full rounded-lg border-0 bg-white px-4 text-[14px] text-[#7b8588] outline-none ring-1 ring-transparent transition focus:ring-[#005068]">
                <option>Select Type</option>
                <option>Strategic Partnership</option>
                <option>Investment Opportunity</option>
                <option>Brand Collaboration</option>
                <option>Media & Press</option>
              </select>
            </label>
            <div className="md:col-span-2">
              <Field label="Website or Social Link" placeholder="https://" />
            </div>
            <label className="block md:col-span-2">
              <span className="mb-2 block px-2 text-[12px] font-bold text-[#3f484d]">
                Message
              </span>
              <textarea
                className="min-h-[120px] w-full resize-none rounded-lg border-0 bg-white px-4 py-3 text-[14px] text-[#191c1e] outline-none ring-1 ring-transparent transition placeholder:text-[#8f989b] focus:ring-[#005068]"
                placeholder="Tell us about your vision..."
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 h-14 w-full rounded-lg bg-[#005068] text-[14px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition hover:bg-[#0a617a]"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function FeaturedVenture() {
  return (
    <section className="bg-white px-5 py-24 md:px-20">
      <div className="relative mx-auto grid max-w-[1216px] items-center gap-12 overflow-hidden rounded-[32px] bg-[#2a3030] px-8 py-14 text-white md:rounded-[48px] md:px-24 md:py-24 lg:grid-cols-2">
        <div className="absolute right-0 top-0 size-96 rounded-full bg-[#005068]/35 blur-[80px]" />
        <div className="relative">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#98ff98]">
            Featured Venture
          </p>
          <h2 className="font-display mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-[64px]">
            Xparience
          </h2>
          <p className="mt-6 max-w-[480px] text-[18px] leading-[1.6] text-white/62">
            Xparience is redefining modern connection through emotionally
            intelligent experiences designed around intentional relationships
            and meaningful interaction.
          </p>
          <Link
            href="/ventures#xparience"
            className="mt-8 inline-flex h-14 items-center gap-3 rounded-xl bg-[#bee9ff] px-8 text-[16px] font-bold uppercase tracking-[0.11em] text-[#001f2a] transition hover:bg-[#d7f2ff]"
          >
            Explore Xparience
            <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>

        <div className="relative mx-auto h-[330px] w-full max-w-[480px] overflow-visible rounded-[30px] bg-gradient-to-br from-[#b8b9b7] to-[#797a77] md:h-[394px]">
          <Image
            src="/figma-assets/partner/featured-metal-b.png"
            alt=""
            width={260}
            height={292}
            className="absolute -left-10 -top-16 w-[45%] rotate-[-4deg] opacity-80"
          />
          <Image
            src="/figma-assets/partner/featured-metal-a.png"
            alt=""
            width={220}
            height={252}
            className="absolute -bottom-14 -right-8 w-[40%] rotate-[8deg] opacity-80"
          />
          <Image
            src="/figma-assets/partner/featured-phone.png"
            alt="Xparience app phone preview"
            width={475}
            height={494}
            className="absolute left-1/2 top-1/2 w-[56%] -translate-x-1/2 -translate-y-1/2 rotate-[4deg]"
          />
          <Image
            src="/figma-assets/partner/featured-screen.png"
            alt=""
            width={384}
            height={425}
            className="absolute left-[38%] top-[18%] w-[33%] rotate-[1deg]"
          />
          <div className="absolute -bottom-8 -left-8 flex h-[98px] w-[210px] items-center gap-4 rounded-2xl border border-white/20 bg-white/40 p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] backdrop-blur-md">
            <div className="size-12 rounded-full bg-[#98ff98]" />
            <div className="space-y-2">
              <div className="h-2 w-24 rounded-full bg-[#3f484d]/20" />
              <div className="h-2 w-16 rounded-full bg-[#3f484d]/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-24 pt-6 text-center md:px-20">
      <div className="absolute right-[-400px] top-[-400px] size-[800px] rounded-full bg-white/5 blur-[60px]" />
      <div className="relative mx-auto max-w-[1280px] py-12">
        <div className="absolute left-1/2 top-0 size-[800px] -translate-x-1/2 rounded-full bg-[#cae7f7]/10 opacity-40 blur-[60px]" />
        <div className="relative">
          <h2 className="font-display text-balance text-4xl font-semibold leading-[1.15] tracking-[-0.04em] md:text-[48px]">
            Where Innovation Meets Humanity
          </h2>
          <p className="mx-auto mt-6 max-w-[672px] text-[18px] leading-[1.6] text-[#3f484d]">
            Together, we can shape experiences that feel more thoughtful,
            connected, and human.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-6 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-[68px] items-center justify-center rounded-xl bg-[#005068] px-10 text-[18px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition hover:bg-[#0a617a]"
            >
              Contact Ojoosco Ltd
            </a>
            <Link
              href="/ventures"
              className="inline-flex h-[68px] items-center justify-center rounded-xl bg-[#e0e3e6] px-10 text-[18px] font-bold uppercase tracking-[0.1em] text-[#191c1e] transition hover:bg-[#d3d8dc]"
            >
              Explore Ventures
            </Link>
          </div>
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
        <p>&copy; 2026 Ojoosco Ltd Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block px-2 text-[12px] font-bold text-[#3f484d]">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[54px] w-full rounded-lg border-0 bg-white px-4 text-[14px] text-[#191c1e] outline-none ring-1 ring-transparent transition placeholder:text-[#8f989b] focus:ring-[#005068]"
      />
    </label>
  );
}

function Reason({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-10 shrink-0 items-center justify-center rounded bg-[#005069]/10 text-[#006989]">
        <ReasonIcon name={icon} />
      </div>
      <div>
        <h3 className="text-[16px] font-extrabold text-[#191c1e]">{title}</h3>
        <p className="mt-1 max-w-[370px] text-[14px] leading-[1.7] text-[#3f484d]">
          {body}
        </p>
      </div>
    </div>
  );
}

function ImageTile({
  src,
  title,
  className,
}: {
  src: string;
  title?: string;
  className: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[16px] bg-[#eef3f6] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.1)] ${className}`}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="333px"
        className="object-cover"
      />
      {title ? (
        <h3 className="relative font-display text-[20px] text-[#191c1e]">
          {title}
        </h3>
      ) : null}
    </div>
  );
}

function PartnerIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    handshake:
      "M8.6 5.5 4.8 9.3a3 3 0 0 0 0 4.2l2.1 2.1 2.1-2.1-2.1-2.1 3.8-3.8 1.6 1.6 1.4-1.4-2-2a2.2 2.2 0 0 0-3.1-.3Zm6.8 0a2.2 2.2 0 0 0-3.1.3l-4.8 4.8 1.4 1.4 3.8-3.8 4.4 4.4-4.2 4.2-1.6-1.6-1.4 1.4 1.7 1.7a2 2 0 0 0 2.8 0l4.2-4.2a3 3 0 0 0 0-4.2l-3.2-3.4Z",
    investment:
      "M4 19h16v2H4v-2Zm1-9h3v7H5v-7Zm5 0h3v7h-3v-7Zm5 0h3v7h-3v-7ZM3 7l9-5 9 5v2H3V7Zm5.6 0h6.8L12 5.1 8.6 7Z",
    brand:
      "M12 3a7 7 0 0 0-7 7c0 5 7 11 7 11s7-6 7-11a7 7 0 0 0-7-7Zm0 2a5 5 0 0 1 5 5c0 2.4-2.7 5.8-5 8.2C9.7 15.8 7 12.4 7 10a5 5 0 0 1 5-5Zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
    media:
      "M4 9h3l8-4v14l-8-4H4V9Zm2 2v2h1.5l5.5 2.8V8.2L7.5 11H6Zm12.5-2.5 1.4 1.4L17.8 12l2.1 2.1-1.4 1.4-3.5-3.5 3.5-3.5Z",
  };

  return (
    <svg className="size-7 text-[#006989]" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} fill="currentColor" />
    </svg>
  );
}

function ReasonIcon({ name }: { name: string }) {
  const path =
    name === "human"
      ? "M12 4a4 4 0 0 0-4 4h2a2 2 0 1 1 2 2h-1v2h1a4 4 0 0 0 0-8ZM6.7 11.3l-1.4 1.4 3 3 1.4-1.4-3-3Zm10.6 0-3 3 1.4 1.4 3-3-1.4-1.4ZM11 15v5h2v-5h-2Z"
      : "M4 6h16v11H4V6Zm2 2v7h12V8H6Zm3 11h6v2H9v-2Zm1-8h2v3h-2v-3Zm4-2h2v5h-2V9Z";

  return (
    <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} fill="currentColor" />
    </svg>
  );
}

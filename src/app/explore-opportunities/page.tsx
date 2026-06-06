import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterSocialLinks } from "../footer-social-links";

export const metadata: Metadata = {
  title: "Explore Opportunities | Ojoosco",
  description:
    "Explore investment, partnership, and venture opportunities with Ojoosco Ltd.",
};

const navItems = [
  ["Home", "/"],
  ["About", "/about-us"],
  ["Ventures", "/ventures"],
  ["Investment", "/investment"],
  ["Contact", "/contact-us"],
] as const;

const opportunityCards = [
  {
    icon: "investment",
    title: "Investment Opportunities",
    body: "Participate in our current seed round and gain early access to our growing venture portfolio.",
  },
  {
    icon: "strategic",
    title: "Strategic Partnerships",
    body: "Collaborate on technology integrations and shared infrastructure for human-centered design.",
  },
  {
    icon: "brand",
    title: "Brand Collaborations",
    body: "Exclusive co-branding opportunities for premium lifestyle and technology brands.",
  },
  {
    icon: "ecosystem",
    title: "Future Ecosystem Growth",
    body: "Early involvement in upcoming projects and the expansion of the Ojoosco Ltd digital ecosystem.",
  },
] as const;

const highlights = [
  {
    number: "01",
    title: "Large UK Market Opportunity",
    body: "Targeting a high-growth sector in digital relationships and emotional health within the UK and European markets.",
  },
  {
    number: "02",
    title: "Premium Experience-Led Positioning",
    body: "Differentiated through high-end design, privacy-first principles, and a commitment to quality over quantity.",
  },
  {
    number: "03",
    title: "Subscription & Partnership Revenue",
    body: "Diversified model including recurring premium memberships and high-value strategic brand partnerships.",
  },
  {
    number: "04",
    title: "Lean Founding Team",
    body: "Built by industry veterans with a track record of lean operation and rapid, human-centered product cycles.",
  },
  {
    number: "05",
    title: "Human-Centred Vision",
    body: "Every venture is built on the belief that technology should enhance humanity, not replace it.",
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

export default function ExploreOpportunities() {
  return (
    <main className="min-h-screen bg-white text-[#191c1e]">
      <Hero />
      <GrowthChannels />
      <FlagshipVenture />
      <InvestmentHighlights />
      <PitchDeck />
      <Philosophy />
      <ClosingCta />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-8 md:min-h-[892px] md:px-20">
      <ExploreHeader />
      <div className="absolute right-[-260px] top-[110px] size-[760px] rounded-full bg-[#f3f7fb] blur-[18px]" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 pt-20 md:pt-[132px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-[660px]">
          <p className="inline-flex rounded-full bg-[#d9eff8] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006989]">
            Opportunities
          </p>
          <h1 className="font-display mt-7 text-balance text-5xl font-semibold leading-[1.08] tracking-[0] text-[#191c1e] md:text-[64px]">
            Explore the Future of Human-Centred Innovation
          </h1>
          <p className="mt-6 max-w-[624px] text-[16px] leading-[1.7] text-[#3f484d] md:text-[18px]">
            Ojoosco Ltd is building emotionally intelligent digital ventures
            designed to redefine how people connect, experience technology, and
            interact with the modern world.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pitch-deck"
              className="inline-flex h-[58px] items-center justify-center rounded-lg bg-[#006680] px-8 text-[12px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_14px_26px_rgba(0,104,128,0.22)] transition hover:bg-[#00566d]"
            >
              Request Pitch Deck
            </a>
            <Link
              href="/contact-us"
              className="inline-flex h-[58px] items-center justify-center rounded-lg border border-[#d5dde2] bg-white px-8 text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#2a3032] shadow-[0_12px_24px_rgba(25,28,30,0.04)] transition hover:bg-[#f4f7f8]"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function ExploreHeader() {
  return (
    <header className="relative z-20 mx-auto max-w-[1196px] rounded-[12px] bg-[#3a5153] px-4 py-3 shadow-[0_18px_45px_rgba(25,28,30,0.08)] md:px-10 md:py-6">
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
            <Link key={label} href={href} className="transition hover:text-[#98ff98]">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/partner-with-us"
          className="inline-flex h-9 items-center justify-center rounded-lg bg-[#98ff98] px-4 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#3f484d] transition hover:bg-[#b8ffb8] md:h-[52px] md:px-6 md:text-[12px]"
        >
          Partner With Us
        </Link>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[354px] w-full max-w-[560px] sm:h-[447px] md:h-[520px] lg:mr-0">
      <div className="absolute left-1/2 top-0 h-[520px] w-[488px] origin-top -translate-x-1/2 scale-[0.68] sm:scale-[0.86] md:scale-100">
        <div className="absolute left-[78px] top-[78px] size-[328px]">
          <Image
            src="/figma-assets/opportunities/purple-orb.png"
            alt=""
            fill
            priority
            sizes="328px"
            className="object-contain"
          />
        </div>

        <MetricCard
          className="left-[280px] top-0 w-[192px]"
          label="Equity Raise"
          valueClassName="text-[#005068]"
        >
          &pound;950,
          <br />
          000
        </MetricCard>
        <MetricCard
          className="left-[-32px] top-[254px] w-[192px]"
          label="Equity Offered"
          valueClassName="text-[#6d3d00]"
        >
          15%
        </MetricCard>
        <MetricCard
          className="left-[232px] top-[389px] w-[224px]"
          label="Valuation"
          meta="PRE-MONEY"
          valueClassName="text-[#191c1e]"
        >
          &pound;5.4M
        </MetricCard>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  children,
  className,
  meta,
  valueClassName,
}: {
  label: string;
  children: React.ReactNode;
  className: string;
  meta?: string;
  valueClassName: string;
}) {
  return (
    <div
      className={`absolute z-10 rounded-[16px] border border-white/20 bg-white/40 p-[25px] shadow-[0_20px_80px_rgba(0,0,0,0.04)] backdrop-blur-[6px] ${className}`}
    >
      <p className="text-[12px] font-medium uppercase leading-3 tracking-[0.1em] text-[#3f484d]">
        {label}
      </p>
      <p
        className={`font-display mt-[7px] text-[32px] font-medium leading-[1.3] tracking-[-0.01em] ${valueClassName}`}
      >
        {children}
      </p>
      {meta ? (
        <p className="mt-1 text-[10px] font-normal uppercase leading-[15px] tracking-[0] text-[#6f787e]">
          {meta}
        </p>
      ) : null}
    </div>
  );
}

function GrowthChannels() {
  return (
    <section id="opportunities" className="bg-[#f3f6f8] px-5 py-20 md:px-20 md:py-[94px]">
      <div className="mx-auto max-w-[1216px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr]">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006989]">
              Growth Channels
            </p>
            <h2 className="font-display mt-4 text-balance text-3xl font-medium leading-[1.2] tracking-[0] md:text-[34px]">
              Opportunities to Build With Ojoosco Ltd
            </h2>
          </div>
          <p className="max-w-[370px] text-[14px] leading-[1.65] text-[#526066] lg:pt-8">
            We are looking for strategic partners who share our vision for a
            more human digital future.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {opportunityCards.map((card) => (
            <article
              key={card.title}
              className="min-h-[286px] rounded-[18px] bg-[#e9edf1] p-8 shadow-[0_18px_40px_rgba(25,28,30,0.03)]"
            >
              <OpportunityIcon name={card.icon} />
              <h3 className="mt-8 max-w-[195px] text-[16px] font-extrabold leading-[1.35] text-[#191c1e]">
                {card.title}
              </h3>
              <p className="mt-5 text-[13px] leading-[1.65] text-[#4e5b61]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlagshipVenture() {
  return (
    <section id="xparience" className="bg-white px-5 py-20 md:px-20 md:py-[96px]">
      <div className="mx-auto grid max-w-[1216px] items-center gap-16 lg:grid-cols-[0.96fr_1fr]">
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="relative aspect-[1.05] overflow-visible rounded-[30px] bg-[#e8eff2] p-3 shadow-[0_20px_55px_rgba(25,28,30,0.08)]">
            <div className="relative h-full overflow-hidden rounded-[23px] bg-[#316a6f]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(140,218,224,0.2),transparent_34%),linear-gradient(135deg,#3b7479,#28575b)]" />
              <Image
                src="/figma-assets/opportunities/iphone-15.png"
                alt=""
                width={2770}
                height={3472}
                sizes="(min-width: 1024px) 340px, 64vw"
                className="absolute left-[28%] top-[9%] w-[44%] opacity-95"
              />
              <Image
                src="/figma-assets/opportunities/xparience-screen.png"
                alt="Xparience app wellbeing preview"
                width={650}
                height={795}
                sizes="(min-width: 1024px) 250px, 48vw"
                className="absolute left-[31%] top-[11%] w-[40%] drop-shadow-[0_22px_28px_rgba(0,0,0,0.22)]"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 right-[-10px] flex h-14 items-center gap-3 rounded-xl border border-[#d8e4e9] bg-white/82 px-6 shadow-[0_18px_34px_rgba(25,28,30,0.09)] backdrop-blur-md sm:right-[-34px]">
            <span className="size-3 rounded-full bg-[#006989]" />
            <span className="text-[11px] font-extrabold text-[#3f484d]">
              Live Preview Available
            </span>
          </div>
        </div>

        <div className="max-w-[560px] lg:pl-10">
          <p className="inline-flex items-center rounded-full bg-[#006989] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#98ff98]">
            <span className="mr-2 size-2 rounded-full bg-[#98ff98]" />
            Flagship Venture
          </p>
          <h2 className="font-display mt-5 text-[36px] font-semibold leading-[1.12] tracking-[0] text-[#006989] md:text-[42px]">
            Xparience
          </h2>
          <p className="mt-7 max-w-[530px] text-[16px] leading-[1.72] text-[#3f484d]">
            Xparience is a premium dating and lifestyle platform designed around
            intentional connection, emotional intelligence, and meaningful
            shared experiences. It represents our core philosophy of putting
            humanity back at the center of the digital world.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#e9f7fb] px-4 py-2 text-[11px] font-extrabold text-[#006989]">
              Currently in Active Development
            </span>
            <span className="rounded-full bg-[#eef1f4] px-4 py-2 text-[11px] font-extrabold text-[#6c767b]">
              V1.0.4 Early Access
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/ventures#xparience"
              className="inline-flex h-[56px] items-center justify-center gap-3 rounded-lg bg-[#006680] px-8 text-[12px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#00566d]"
            >
              Explore Xparience
              <span aria-hidden="true">-&gt;</span>
            </Link>
            <a
              href="/explore-opportunities#investment-highlights"
              className="inline-flex h-[56px] items-center justify-center rounded-lg bg-[#edf1f4] px-8 text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#69747a] transition hover:bg-[#e1e6ea]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InvestmentHighlights() {
  return (
    <section id="investment-highlights" className="bg-[#151b1c] px-5 py-20 text-white md:px-20 md:py-[104px]">
      <div className="mx-auto max-w-[1216px]">
        <h2 className="font-display text-center text-[32px] font-medium tracking-[0] text-white/88 md:text-[38px]">
          Investment Highlights
        </h2>

        <div className="mt-20 grid gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
          {highlights.map((item) => (
            <article
              key={item.number}
              className="border-l border-[#2f3738] pl-8 pr-8 lg:min-h-[250px]"
            >
              <p className="text-[58px] font-extrabold leading-none text-[#007fa0] md:text-[66px]">
                {item.number}
              </p>
              <h3 className="mt-8 max-w-[260px] text-[15px] font-extrabold leading-[1.45] text-white/88">
                {item.title}
              </h3>
              <p className="mt-5 max-w-[275px] text-[13px] leading-[1.7] text-white/52">
                {item.body}
              </p>
            </article>
          ))}

          <div className="flex min-h-[250px] items-center border-l border-[#2f3738] pl-8 pr-8">
            <a
              href="#pitch-deck"
              className="inline-flex h-[66px] items-center justify-center rounded-xl bg-[#007fa0] px-10 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#061215] transition hover:bg-[#1aa0c1]"
            >
              Get Full Stats
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PitchDeck() {
  return (
    <section id="pitch-deck" className="bg-[#f2f5f7] px-5 py-20 md:px-20 md:py-[94px]">
      <div className="mx-auto grid max-w-[1216px] items-center gap-14 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <h2 className="font-display max-w-[410px] text-balance text-[34px] font-medium leading-[1.16] tracking-[0] text-[#252b2e] md:text-[42px]">
            Request Access to the Pitch Deck
          </h2>
          <p className="mt-8 max-w-[420px] text-[16px] leading-[1.65] text-[#5d686e]">
            Serious investors and strategic partners can request access to
            additional materials and our investor data room.
          </p>
          <div className="mt-12 space-y-8">
            <AccessPoint
              icon="secure"
              title="Secure Access"
              body="Validated requests are granted access to our private investor portal."
            />
            <AccessPoint
              icon="financials"
              title="Live Financials"
              body="Review our detailed financial model and project roadmap in real-time."
            />
          </div>
        </div>

        <form className="rounded-[28px] bg-white/76 p-8 shadow-[0_28px_70px_rgba(25,28,30,0.06)] backdrop-blur-md md:p-12">
          <div className="grid gap-x-7 gap-y-6 md:grid-cols-2">
            <Field label="Full Name" placeholder="John Doe" />
            <Field label="Company / Organisation" placeholder="Investment Partners" />
            <Field label="Email Address" placeholder="john@example.com" type="email" />
            <label className="block">
              <span className="mb-2 block text-[11px] font-extrabold text-[#5e686d]">
                Investor Type
              </span>
              <select className="h-[52px] w-full rounded-lg border-0 bg-[#edf1f4] px-4 text-[13px] font-medium text-[#3f484d] outline-none ring-1 ring-transparent transition focus:ring-[#006989]">
                <option>Angel Investor</option>
                <option>Venture Capital</option>
                <option>Strategic Partner</option>
                <option>Family Office</option>
              </select>
            </label>
            <div className="md:col-span-2">
              <Field label="LinkedIn or Website" placeholder="https://" />
            </div>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-[11px] font-extrabold text-[#5e686d]">
                Message
              </span>
              <textarea
                className="min-h-[144px] w-full resize-none rounded-lg border-0 bg-[#edf1f4] px-4 py-4 text-[13px] text-[#191c1e] outline-none ring-1 ring-transparent transition placeholder:text-[#8c969b] focus:ring-[#006989]"
                placeholder="Tell us more about your interest..."
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 h-[62px] w-full rounded-lg bg-[#006680] text-[12px] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_14px_28px_rgba(0,104,128,0.2)] transition hover:bg-[#00566d]"
          >
            Request Access
          </button>
        </form>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="relative flex min-h-[404px] items-center overflow-hidden bg-[#f8fbfc] px-5 py-20 text-center md:px-20">
      <Image
        src="/figma-assets/opportunities/philosophy-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.13]"
      />
      <div className="absolute inset-0 bg-white/72" />
      <div className="relative mx-auto max-w-[780px]">
        <h2 className="font-display text-balance text-[34px] font-semibold leading-[1.2] tracking-[0] text-[#1f2528] md:text-[44px]">
          Technology Should Feel More Human
        </h2>
        <p className="mx-auto mt-8 max-w-[720px] text-[15px] leading-[1.85] text-[#516066] md:text-[16px]">
          &quot;At Ojoosco Ltd, we believe the future belongs to products that
          understand people more deeply. Every venture we build is designed to
          create meaningful experiences through thoughtful innovation and
          emotionally intelligent design.&quot;
        </p>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section id="contact" className="bg-[#dfe5e9] px-5 py-20 text-center md:px-20 md:py-[86px]">
      <div className="mx-auto max-w-[840px]">
        <h2 className="font-display text-balance text-[30px] font-medium leading-[1.25] tracking-[0] text-[#242b2e] md:text-[34px]">
          Partner With the Future of Human-Centred Innovation
        </h2>
        <div className="mt-9 flex flex-col justify-center gap-5 sm:flex-row">
          <a
            href="#pitch-deck"
            className="inline-flex h-[58px] items-center justify-center rounded-lg bg-[#006680] px-8 text-[12px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#00566d]"
          >
            Request Pitch Deck
          </a>
          <Link
            href="/contact-us"
            className="inline-flex h-[58px] items-center justify-center rounded-lg bg-[#151719] px-8 text-[12px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#282d30]"
          >
            Contact Ojoosco Ltd
          </Link>
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

function OpportunityIcon({ name }: { name: (typeof opportunityCards)[number]["icon"] }) {
  const variants: Record<typeof name, { bg: string; color: string; path: string }> = {
    investment: {
      bg: "bg-[#ccebf3]",
      color: "text-[#006989]",
      path: "M5 18h14v2H5v-2Zm1-8h3v6H6v-6Zm5 0h3v6h-3v-6Zm5 0h3v6h-3v-6ZM4 7l8-4 8 4v2H4V7Zm5.2 0h5.6L12 5.6 9.2 7Z",
    },
    strategic: {
      bg: "bg-[#e3e8ec]",
      color: "text-[#607078]",
      path: "M12 3 4 11l8 10 8-10-8-8Zm0 3.1 5.2 5.2L12 17.8l-5.2-6.5L12 6.1Zm0 2.9-2.2 2.2L12 14l2.2-2.8L12 9Z",
    },
    brand: {
      bg: "bg-[#f4dfcf]",
      color: "text-[#b26f36]",
      path: "M5 19h4l10-10a2.8 2.8 0 0 0-4-4L5 15v4Zm2-3.2 8.9-8.9a.8.8 0 0 1 1.2 1.2L8.2 17H7v-1.2ZM4 21h16v-2H4v2Z",
    },
    ecosystem: {
      bg: "bg-[#dfe4e7]",
      color: "text-[#50595d]",
      path: "M12 4a3 3 0 0 1 2.8 4.1l2.7 1.8A3 3 0 1 1 16.4 12l-2.8-1.8a3 3 0 0 1-3.2 0L7.6 12a3 3 0 1 1-1.1-2.1l2.7-1.8A3 3 0 0 1 12 4Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm14 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
    },
  };
  const icon = variants[name];

  return (
    <div className={`flex size-10 items-center justify-center rounded-lg ${icon.bg}`}>
      <svg className={`size-5 ${icon.color}`} viewBox="0 0 24 24" aria-hidden="true">
        <path d={icon.path} fill="currentColor" />
      </svg>
    </div>
  );
}

function AccessPoint({
  icon,
  title,
  body,
}: {
  icon: "secure" | "financials";
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#d7eff6] text-[#006989]">
        <AccessIcon name={icon} />
      </div>
      <div>
        <h3 className="text-[15px] font-extrabold text-[#191c1e]">{title}</h3>
        <p className="mt-1 max-w-[360px] text-[13px] leading-[1.55] text-[#5b666c]">
          {body}
        </p>
      </div>
    </div>
  );
}

function AccessIcon({ name }: { name: "secure" | "financials" }) {
  const path =
    name === "secure"
      ? "M12 3 5 6v5c0 4.4 2.8 8.4 7 10 4.2-1.6 7-5.6 7-10V6l-7-3Zm0 2.2 5 2.1V11c0 3.2-1.9 6.2-5 7.7-3.1-1.5-5-4.5-5-7.7V7.3l5-2.1Zm-1 8.4-2.3-2.3-1.4 1.4L11 16.4l6-6-1.4-1.4-4.6 4.6Z"
      : "M4 19h16v2H4v-2Zm1-7h3v5H5v-5Zm5-4h3v9h-3V8Zm5 2h3v7h-3v-7ZM5 9l5-5 4 4 4-4 1.4 1.4L14 10.8l-4-4-3.6 3.6L5 9Z";

  return (
    <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} fill="currentColor" />
    </svg>
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
      <span className="mb-2 block text-[11px] font-extrabold text-[#5e686d]">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[52px] w-full rounded-lg border-0 bg-[#edf1f4] px-4 text-[13px] text-[#191c1e] outline-none ring-1 ring-transparent transition placeholder:text-[#8c969b] focus:ring-[#006989]"
      />
    </label>
  );
}

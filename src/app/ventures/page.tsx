import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterSocialLinks } from "../footer-social-links";

export const metadata: Metadata = {
  title: "Ventures | Ojoosco",
  description:
    "Explore Ojoosco Ltd ventures built around human-centred digital experiences and emotional connection.",
};

const navItems = [
  ["Home", "/"],
  ["About", "/about-us"],
  ["Ventures", "/ventures"],
  ["Investment", "/investment"],
  ["Contact", "/contact-us"],
] as const;

const principles = [
  {
    number: "01",
    title: "Precision Engineering",
    body: "Uncompromising technical standards ensuring reliability and seamless performance across every touchpoint.",
  },
  {
    number: "02",
    title: "Organic Interaction",
    body: "Interfaces designed around human intuition, following the natural flow of thought and emotion.",
  },
  {
    number: "03",
    title: "Ethical Foundation",
    body: "We build for long-term human well-being, prioritizing transparency and user sovereignty in every venture.",
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

export default function Ventures() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#191c1e]">
      <Hero />
      <Portfolio />
      <Empathy />
      <ClosingCta />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-8 md:px-20 md:pb-[120px]">
      <div className="absolute bottom-4 right-[-80px] top-1/4 w-[600px] rounded-full bg-[#005069]/10 blur-[60px]" />
      <VenturesHeader />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 pt-20 md:pt-[120px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-[720px]">
          <h1 className="font-display text-balance text-[46px] font-semibold leading-[1.12] tracking-[0] text-[#191c1e] md:text-[72px]">
            Building the Future of Human-Centred Experiences
          </h1>
          <p className="mt-8 max-w-[576px] text-[16px] leading-[1.65] text-[#3f484d] md:text-[18px]">
            Ojoosco Ltd is a visionary ecosystem dedicated to bridging the gap
            between advanced technology and genuine human connection. We
            engineer experiences that resonate on an emotional level.
          </p>
          <Link
            href="/ventures#xparience"
            className="mt-9 inline-flex h-[58px] items-center gap-3 rounded-xl bg-[#005068] px-9 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition hover:bg-[#0a617a] md:text-[16px]"
          >
            Explore Xparience
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[488px] overflow-hidden rounded-full border border-white/20 bg-white/40 p-px shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md lg:mr-0">
          <Image
            src="/figma-assets/ventures/hero-orb.png"
            alt="Glass orb with warm light trails"
            fill
            priority
            sizes="(min-width: 1024px) 488px, 90vw"
            className="rounded-full object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#f7f9fd]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function VenturesHeader() {
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
                label === "Ventures"
                  ? "rounded-full bg-[#d9d9d9] px-4 py-1.5 text-[#3f484d]"
                  : "transition hover:text-[#98ff98]"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/partner-with-us"
          className="inline-flex h-9 items-center justify-center rounded-xl bg-[#98ff98] px-4 text-[10px] font-extrabold uppercase tracking-[0.05em] text-[#3f484d] transition hover:bg-[#b8ffb8] md:h-[52px] md:px-6 md:text-[12px]"
        >
          Partner With Us
        </Link>
      </div>
    </header>
  );
}

function Portfolio() {
  return (
    <section id="xparience" className="bg-white px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1216px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr_1fr] lg:gap-16">
          <div>
            <p className="text-[12px] font-medium uppercase leading-none tracking-[0.2em] text-[#005068]">
              The Portfolio
            </p>
            <h2 className="mt-4 text-[32px] font-medium leading-[1.3] tracking-[0] text-[#191c1e]">
              Our Ventures
            </h2>
          </div>
          <p className="text-[16px] leading-[1.62] text-[#3f484d] md:text-[18px]">
            We believe that technology should be an extension of the self, not a
            barrier to it. Our ventures are carefully curated to challenge the
            status quo of digital interaction. By focusing on visionary
            humanism, we create
          </p>
          <p className="text-[16px] leading-[1.62] text-[#3f484d] md:text-[18px]">
            platforms where precision engineering meets the organic warmth of
            human interaction. Every project under the Ojoosco Ltd umbrella is a
            testament to our commitment to clarity, accessibility, and profound
            impact.
          </p>
        </div>

        <article className="mt-20 overflow-hidden rounded-[40px] border border-white/20 bg-white/40 p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-[520px]">
              <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-[#006988] px-4 py-2 text-[10px] font-normal uppercase tracking-[0.05em] text-[#afe4ff]">
                  Flagship Venture
                </span>
                <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#3f484d]">
                  Relationship &amp; Experience Technology
                </span>
              </div>
              <h3 className="mt-8 text-[32px] font-medium leading-[1.3] tracking-[0]">
                Xparience
              </h3>
              <p className="mt-8 text-[16px] leading-[1.7] text-[#3f484d] md:text-[18px]">
                Redefining social architecture through empathy-driven
                algorithms. Xparience is the first platform that prioritises
                emotional depth over engagement metrics, fostering authentic
                digital communities.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/ventures#xparience"
                  className="inline-flex h-[52px] items-center justify-center rounded-xl bg-[#005068] px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition hover:bg-[#0a617a] md:text-[16px]"
                >
                  Visit Venture
                </Link>
                <Link
                  href="/ventures#empathy"
                  className="inline-flex h-[52px] items-center justify-center rounded-xl border border-[#bfc8ce] px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#191c1e] transition hover:bg-[#f4f7f8] md:text-[16px]"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <FeaturedMockup />
          </div>
        </article>
      </div>
    </section>
  );
}

function FeaturedMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[519px]">
      <div className="absolute -right-8 -top-12 size-64 rounded-full bg-[#005068]/10 blur-[32px]" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#090909] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <Image
          src="/figma-assets/ventures/iphone-16-pro.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 519px, 90vw"
          className="object-cover opacity-85"
        />
        <Image
          src="/figma-assets/ventures/featured-landscape.png"
          alt=""
          width={3000}
          height={1127}
          sizes="(min-width: 1024px) 519px, 90vw"
          className="absolute bottom-0 left-0 w-full opacity-85"
        />
        <Image
          src="/figma-assets/ventures/phone-screen.png"
          alt="Xparience compatibility screen"
          width={386}
          height={539}
          sizes="190px"
          className="absolute left-1/2 top-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_22px_24px_rgba(0,0,0,0.35)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/12 to-transparent" />
      </div>
    </div>
  );
}

function Empathy() {
  return (
    <section id="empathy" className="bg-[#f7f9fb] px-5 py-20 md:px-20 md:py-[110px]">
      <div className="mx-auto grid max-w-[1216px] items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <h2 className="text-[30px] font-semibold leading-[1.35] tracking-[0] text-[#191c1e] md:text-[34px]">
            Technology With Empathy
          </h2>
          <div className="mt-12 space-y-8">
            {principles.map((item) => (
              <article key={item.number} className="flex gap-7">
                <p className="w-12 shrink-0 text-[36px] leading-[1.1] text-[#006888]/30">
                  {item.number}
                </p>
                <div>
                  <h3 className="text-[20px] font-normal leading-[1.4] text-[#191c1e]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[570px] text-[16px] leading-[1.6] text-[#3f484d]">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[488px]">
          <div className="absolute -bottom-10 -left-10 size-48 rounded-full bg-[#ffdcbf]/30 blur-[32px]" />
          <div className="relative aspect-square overflow-hidden rounded-[44px] border border-white/20 bg-white/40 p-4 backdrop-blur-md">
            <div className="relative h-full overflow-hidden rounded-[32px]">
              <Image
                src="/figma-assets/ventures/empathy.png"
                alt="Illuminated vertical light installation"
                fill
                sizes="(min-width: 1024px) 456px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#005068] px-5 py-20 text-center md:px-20 md:py-[120px]">
      <div className="absolute -right-[400px] -top-[400px] size-[800px] rounded-full bg-[#006988]/20 blur-[70px]" />
      <div className="relative mx-auto max-w-[900px]">
        <h2 className="font-display text-balance text-[30px] font-medium leading-[1.3] tracking-[0] text-white md:text-[32px]">
          Partner With the Future of Human-Centred Innovation
        </h2>
        <p className="mx-auto mt-8 max-w-[672px] text-[16px] leading-[1.65] text-white/70 md:text-[18px]">
          Join us in creating a world where technology feels like a natural
          extension of who we are. Let&apos;s build what&apos;s next, together.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-6 sm:flex-row">
          <Link
            href="/partner-with-us"
            className="inline-flex h-[58px] items-center justify-center rounded-xl bg-white px-10 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#005068] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition hover:bg-[#f2f7f8] md:text-[16px]"
          >
            Partner With Ojoosco Ltd
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex h-[58px] items-center justify-center rounded-xl border border-white/20 px-10 text-[12px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:bg-white/10 md:text-[16px]"
          >
            Contact Us
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

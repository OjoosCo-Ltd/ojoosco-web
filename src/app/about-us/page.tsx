import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterSocialLinks } from "../footer-social-links";

export const metadata: Metadata = {
  title: "About Us | Ojoosco",
  description:
    "Learn about Ojoosco Ltd, our story, philosophy, team, and human-centred technology vision.",
};

const navItems = [
  ["Home", "/"],
  ["About", "/about-us"],
  ["Ventures", "/ventures"],
  ["Investment", "/investment"],
  ["Contact", "/contact-us"],
] as const;

const statements = [
  {
    title: "Vision Statement",
    eyebrow: "Our Vision",
    body: "To become a trusted hub for bold, human-centred innovations.",
  },
  {
    title: "Mission Statement",
    eyebrow: "Our Mission",
    body: "To develop products that enrich lives, strengthen communities, and inspire new ways of connecting.",
  },
] as const;

const principles = [
  {
    title: "Organic Synthesis",
    body: "We believe that the most advanced technologies should feel as natural as breathing, blending high-tech capabilities with tactile, human experiences.",
  },
  {
    title: "Intellectual Depth",
    body: "Ojoosco Ltd rejects superficiality. We dive deep into the first principles of every problem to build solutions that endure for generations.",
  },
  {
    title: "Ethical Stewardship",
    body: "Power is meaningless without responsibility. Our ventures are guided by a strict ethical compass focused on long-term human flourishing.",
  },
] as const;

const team = [
  {
    name: "Alexis Ojo",
    role: "CEO & CPO",
    image: "/figma-assets/about/image-2.png",
    body: "Leads the vision, strategy, and product direction at Ojoosco Ltd, overseeing the development of its digital platforms and ventures. With a background in business and project management, Alexis focuses on building innovative, user-centric products that solve real-world problems.",
  },
  {
    name: "Todimu Olawumi",
    role: "Product & Operations Lead",
    image: "/figma-assets/about/umar-muktar.png",
    body: "Oversees both product coordination and day-to-day operations across Ojoosco Ltd's platforms. Focused on keeping workflows efficient, teams aligned, and product initiatives moving smoothly from concept through to delivery, while ensuring the operational foundations of the business run effectively.",
  },
  {
    name: "Umar Muktar",
    role: "Fullstack Engineer",
    image: "/figma-assets/about/todimu-olawumi.png",
    body: "Leads backend development and architecture at Ojoosco Ltd, building the systems and infrastructure that power its digital platforms. With expertise across the full stack, Umar also provides technical direction on frontend and mobile development, ensuring seamless integration across all product surfaces.",
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

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#181c1e]">
      <Hero />
      <Story />
      <Philosophy />
      <Team />
      <FutureAmbitions />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-8 md:px-20 md:pb-[120px]">
      <Image
        src="/figma-assets/about/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/[0.96]" />
      <div className="absolute bottom-4 right-[-80px] top-1/4 w-[600px] rounded-full bg-[#005069]/10 blur-[60px]" />

      <AboutHeader />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 pt-20 md:pt-[120px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-[690px]">
          <p className="text-[12px] font-extrabold uppercase leading-none tracking-[0.1em] text-[#005069]">
            Our Story
          </p>
          <h1 className="font-display mt-6 max-w-[700px] text-balance text-[46px] font-bold leading-[1.1] tracking-[0] text-[#181c1e] md:text-[72px]">
            Architecting the <span className="text-[#005069]">Human</span>{" "}
            Future.
          </h1>
          <p className="mt-7 max-w-[672px] text-[16px] leading-[1.7] text-[#3f484d] md:text-[18px]">
            Founded at the intersection of high-precision engineering and
            organic warmth, Ojoosco Ltd is a visionary ecosystem dedicated to
            ventures that elevate the human experience through technology.
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[488px] overflow-hidden rounded-xl bg-black shadow-[0_18px_40px_rgba(25,28,30,0.08)] lg:mr-0">
          <Image
            src="/figma-assets/about/hero-philosophy.png"
            alt="Abstract architectural form"
            fill
            priority
            sizes="(min-width: 1024px) 488px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function AboutHeader() {
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
                label === "About"
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

function Story() {
  return (
    <section className="bg-[#e5edf1] px-5 py-16 md:px-20">
      <div className="mx-auto max-w-[1280px] px-0 md:px-8">
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="font-display text-[36px] font-semibold leading-[1.25] tracking-[0] text-[#191c1e] md:text-[48px]">
            Our Story
          </h2>
          <div className="mx-auto mt-7 max-w-[1056px] space-y-1 text-[15px] leading-[1.9] text-[#3f484d] md:text-[18px] md:leading-[2]">
            <p>
              Ojoosco Ltd was founded on a simple belief - technology should
              feel more human.
            </p>
            <p>
              We set out to build thoughtful digital experiences that go beyond
              functionality to create genuine connection, meaningful
              interaction, and real-world impact. By combining innovation,
              design, and human understanding, Ojoosco Ltd is building a
              growing ecosystem of emotionally intelligent products shaped
              around how people truly live, connect, and experience the modern
              world.
            </p>
            <p>
              What began as a vision is steadily evolving into a future-focused
              innovation company driven by purpose, empathy, and long-term
              thinking.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-20">
          {statements.map((item) => (
            <article key={item.title}>
              <h3 className="font-display text-[28px] font-bold leading-[1.45] tracking-[0] text-[#181c1e] md:text-[32px]">
                {item.title}
              </h3>
              <p className="mt-8 text-[18px] leading-[1.6] text-[#005069]">
                {item.eyebrow}
              </p>
              <p className="mt-2 max-w-[592px] text-[16px] leading-[1.6] text-[#3f484d]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-white px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-0 md:px-8 lg:grid-cols-[0.92fr_1fr] lg:gap-24">
        <div className="relative aspect-square w-full max-w-[488px] overflow-hidden rounded-xl bg-[#e8eef2]">
          <Image
            src="/figma-assets/about/philosophy.png"
            alt="A person looking across a futuristic city walkway"
            fill
            sizes="(min-width: 1024px) 488px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-[610px]">
          <p className="text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#005069]">
            Philosophy
          </p>
          <h2 className="mt-7 text-[32px] font-bold leading-[1.28] tracking-[0] text-[#181c1e] md:text-[36px]">
            Visionary Humanism
          </h2>
          <div className="mt-10 space-y-8">
            {principles.map((item) => (
              <article key={item.title}>
                <h3 className="text-[18px] leading-[1.6] text-[#005069]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[1.6] text-[#3f484d]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="bg-[#f7f9fc] px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-0 md:px-8">
        <div className="max-w-[760px]">
          <h2 className="font-display text-[34px] font-semibold leading-[1.25] tracking-[0] text-[#191c1e] md:text-[44px]">
            The Architects Behind the Vision
          </h2>
          <p className="mt-5 max-w-[672px] text-[16px] leading-[1.65] text-[#3f484d] md:text-[18px]">
            We are a small but focused team building innovative digital
            products through Ojoosco Ltd, with a strong emphasis on quality,
            execution, and user experience.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-[32px] bg-white p-6 text-center shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
            >
              <div className="relative aspect-[1/1.18] overflow-hidden rounded-[24px] bg-[#eef1f4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 360px, 90vw"
                  className={
                    member.name === "Todimu Olawumi"
                      ? "object-cover object-[50%_18%]"
                      : "object-cover"
                  }
                />
              </div>
              <h3 className="mt-8 text-[24px] font-bold leading-[1.35] text-[#181c1e]">
                {member.name}
              </h3>
              <p className="mt-1 text-[16px] font-medium leading-[1.5] text-[#005069]">
                {member.role}
              </p>
              <p className="mx-auto mt-6 max-w-[360px] text-[15px] leading-[1.65] text-[#3f484d]">
                {member.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureAmbitions() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden px-5 py-20 text-center md:px-20">
      <Image
        src="/figma-assets/about/future-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f9fc] via-[#f7f9fc]/25 to-[#f7f9fc]" />
      <div className="relative mx-auto max-w-[768px]">
        <p className="text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#005069]">
          Future Ambitions
        </p>
        <h2 className="font-display mt-6 text-balance text-[46px] font-bold leading-[1.1] tracking-[0] text-[#181c1e] md:text-[72px]">
          Beyond the Horizon.
        </h2>
        <p className="mx-auto mt-7 max-w-[765px] text-[16px] leading-[1.7] text-[#3f484d] md:text-[18px]">
          We are building human-centred digital experiences designed to
          strengthen connection, elevate everyday interactions, and shape the
          future of emotionally intelligent technology. The journey is only just
          beginning.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-6 sm:flex-row">
          <Link
            href="/partner-with-us"
            className="inline-flex h-[56px] items-center justify-center rounded-xl bg-[#005069] px-10 text-[12px] font-medium uppercase tracking-[0.1em] text-white shadow-[0_12px_24px_rgba(0,80,105,0.15)] transition hover:bg-[#0a617a] md:text-[16px]"
          >
            Join the Journey
          </Link>
          <Link
            href="/ventures"
            className="inline-flex h-[56px] items-center justify-center rounded-xl border border-white/45 bg-white/12 px-10 text-[12px] font-medium uppercase tracking-[0.1em] text-[#181c1e] transition hover:bg-white/36 md:text-[16px]"
          >
            Explore Ventures
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

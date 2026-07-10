import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Us | Ojoosco",
  description:
    "Learn about Ojoosco Ltd, our story, philosophy, team, and human-centred technology vision.",
};

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

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#181c1e]">
      <Hero />
      <Story />
      <Philosophy />
      <Team />
      <FutureAmbitions />
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

      <SiteHeader variant="inner" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 pt-20 md:pt-[120px] lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="max-w-[690px]">
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
        </Reveal>

        <Reveal
          delay={150}
          className="relative mx-auto aspect-square w-full max-w-[488px] overflow-hidden rounded-xl bg-black shadow-[0_18px_40px_rgba(25,28,30,0.08)] lg:mr-0"
        >
          <Image
            src="/figma-assets/about/hero-philosophy.png"
            alt="Abstract architectural form"
            fill
            priority
            sizes="(min-width: 1024px) 488px, 90vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}


function Story() {
  return (
    <section className="bg-[#e5edf1] px-5 py-16 md:px-20">
      <div className="mx-auto max-w-[1280px] px-0 md:px-8">
        <Reveal className="mx-auto max-w-[1216px] text-center">
          <h2 className="font-display text-[36px] font-semibold leading-[1.25] tracking-[0] text-[#191c1e] md:text-[48px]">
            Our Story
          </h2>
          <div className="mx-auto mt-7 max-w-[1216px] space-y-1 text-[15px] leading-[1.9] text-[#3f484d] md:text-[18px] md:leading-[2]">
            <p>
              Ojoosco Ltd was founded on a simple belief — technology should
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
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-20">
          {statements.map((item, index) => (
            <Reveal as="article" key={item.title} delay={index * 150}>
              <h3 className="font-display text-[28px] font-bold leading-[1.45] tracking-[0] text-[#181c1e] md:text-[32px]">
                {item.title}
              </h3>
              <p className="mt-8 text-[18px] leading-[1.6] text-[#005069]">
                {item.eyebrow}
              </p>
              <p className="mt-2 max-w-[592px] text-[16px] leading-[1.6] text-[#3f484d]">
                {item.body}
              </p>
            </Reveal>
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
        <Reveal className="relative aspect-square w-full max-w-[488px] overflow-hidden rounded-xl bg-[#e8eef2]">
          <Image
            src="/figma-assets/about/philosophy.png"
            alt="A person looking across a futuristic city walkway"
            fill
            sizes="(min-width: 1024px) 488px, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={150} className="max-w-[610px]">
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
        </Reveal>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="bg-[#f7f9fc] px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-0 md:px-8">
        <Reveal className="max-w-[760px]">
          <h2 className="font-display text-[34px] font-semibold leading-[1.25] tracking-[0] text-[#191c1e] md:text-[44px]">
            The Architects Behind the Vision
          </h2>
          <p className="mt-5 max-w-[672px] text-[16px] leading-[1.65] text-[#3f484d] md:text-[18px]">
            We are a small but focused team building innovative digital
            products through Ojoosco Ltd, with a strong emphasis on quality,
            execution, and user experience.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal
              as="article"
              key={member.name}
              delay={index * 120}
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
            </Reveal>
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
      <Reveal className="relative mx-auto max-w-[768px]">
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
      </Reveal>
    </section>
  );
}


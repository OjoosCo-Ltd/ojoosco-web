import Image from "next/image";
import Link from "next/link";
import ReactDOM from "react-dom";
import { SiteHeader } from "@/components/layout/site-header";

const pillarIconAssets = {
  product: {
    src: "/figma-assets/landing/icons/pillar-product.png",
    width: 21,
    height: 29,
    className: "h-[29px] w-[21px]",
  },
  human: {
    src: "/figma-assets/landing/icons/pillar-human.png",
    width: 27,
    height: 29,
    className: "h-[29px] w-[27px]",
  },
  scale: {
    src: "/figma-assets/landing/icons/pillar-scale.png",
    width: 29,
    height: 23,
    className: "h-[23px] w-[29px]",
  },
} as const;

type PillarIconName = keyof typeof pillarIconAssets;

const pillars: Array<{
  icon: PillarIconName;
  title: string;
  body: string;
}> = [
  {
    icon: "product",
    title: "Product Innovation",
    body: "Creating novel solutions that solve fundamental human needs with elegant engineering.",
  },
  {
    icon: "human",
    title: "Human-Centred Design",
    body: "Prioritising user empathy to ensure technology feels intuitive and respectful of time.",
  },
  {
    icon: "scale",
    title: "Scalable Technology",
    body: "Robust architecture designed to grow seamlessly while maintaining peak performance.",
  },
];

const stats = [
  ["Pre-Seed Status", "Open"],
  ["Venture Count", "01 Active"],
  ["Primary Sector", "Human-Centred Technology"],
  ["HQ", "London, UK"],
];

export default function Home() {
  ReactDOM.preload("/figma-assets/landing/electric-orb-1.png", {
    as: "image",
    fetchPriority: "high",
  });

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#124343]">
      <Hero />
      <Pillars />
      <Ventures />
      <Philosophy />
      <Leadership />
      <Investment />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section
      className="hero-field relative flex min-h-dvh overflow-hidden bg-[#124343] px-5 pb-16 pt-8 text-white"
      style={{
        backgroundImage: "url(/figma-assets/landing/electric-orb-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SiteHeader variant="landing" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center px-4 pt-24 text-center md:px-0 md:pt-28">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 md:text-[11px] md:tracking-[0.36em]">
          Est. 2025 London
        </p>
        <h1 className="font-display max-w-[280px] text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-white md:max-w-[900px] md:text-[72px] md:leading-[1.08]">
          Where Innovation Meets{" "}
          <br className="hidden md:block" />
          Humanity
        </h1>
        <p className="mt-4 max-w-[268px] text-pretty text-[13px] leading-[1.5] text-white/72 md:mt-7 md:max-w-[746px] md:text-xl md:leading-8">
          Built with precision. Designed for people. Creating digital
          experiences that make connection feel real again.
        </p>
        <Link
          href="/ventures"
          className="mt-5 inline-flex h-11 items-center justify-center rounded-lg bg-[#181C1E] px-6 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_36px_rgba(0,0,0,0.18)] transition hover:bg-[#23282b] focus:outline-none focus:ring-2 focus:ring-[#98ff98] md:mt-7 md:h-[52px] md:px-8 md:text-[12px] md:tracking-[0.22em]"
        >
          Explore Our Ventures
        </Link>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section id="about" className="bg-[#F3F4F5] px-5 py-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="font-display text-center text-3xl font-semibold tracking-[-0.01em] text-[#124343] md:text-[40px]">
          Our Core Pillars
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="min-h-[264px] border border-[#C0C8C7] bg-white px-10 py-10 rounded-[4px]"
            >
              <PillarIcon name={pillar.icon} />
              <h3 className="mt-8 text-[22px] font-extrabold tracking-[-0.01em] text-[#124343]">
                {pillar.title}
              </h3>
              <p className="mt-5 max-w-[310px] text-[15px] leading-[1.8] text-[#6a7374]">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ventures() {
  return (
    <section id="ventures" className="bg-[#F8F9FA] px-5 py-16 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#006989]">
          Portfolio
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.01em] md:text-[40px]">
          Active Ventures
        </h2>

        <article className="mt-10 grid overflow-hidden bg-[#EDEEEF] lg:grid-cols-[1fr_0.96fr]">
          <div className="flex min-h-[420px] flex-col justify-center px-8 py-14 md:px-16 lg:min-h-[660px]">
            <div className="flex items-center gap-4">
              <span className="rounded-[2px] bg-[#124343] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#ffffff]">
                Flagship
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#7a8585]">
                2026 Release
              </span>
            </div>
            <h3 className="font-display mt-7 text-4xl font-medium tracking-[-0.02em] md:text-[50px]">
              Xparience
            </h3>
            <p className="mt-7 max-w-[552px] text-[18px] leading-[1.75] text-[#5f5e5e]">
              A modern dating and lifestyle platform designed to foster
              authentic human connection in a digital age. No algorithms, no
              endless scrolling - just meaningful interaction.
            </p>
            <Link
              href="/ventures#xparience"
              className="mt-8 inline-flex h-[52px] w-fit items-center gap-2 rounded-[12px] bg-[#124343] px-8 text-[16px] font-semibold uppercase tracking-[1.8px] text-white transition hover:bg-[#123f3f]"
            >
              View Venture
              <Image
                src="/figma-assets/landing/icons/arrow-right.png"
                alt=""
                width={18}
                height={10}
                className="h-2.5 w-[18px]"
              />
            </Link>
          </div>

          <div className="flex min-h-[480px] items-center justify-center px-7 pb-12 lg:min-h-[660px] lg:px-16 lg:py-16">
            <Image
              src="/figma-assets/landing/ventures-hand.png"
              alt="Hand holding a phone displaying the Xparience app"
              width={552}
              height={532}
              sizes="(min-width: 1024px) 552px, 90vw"
              className="h-auto w-full max-w-[552px] rounded-[32px]"
            />
          </div>
        </article>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Placeholder title="Project Titan (Stealth)" />
          <Placeholder title="Project Iris (R&D)" />
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-[#124343] px-5 py-24 text-center text-white md:py-28">
      <div className="mx-auto max-w-[900px]">
        <Image
          src="/figma-assets/landing/icons/philosophy-quote.png"
          alt=""
          width={41}
          height={29}
          className="mx-auto h-[29px] w-[41px]"
        />
        <h2 className="font-sans mx-auto mt-7 max-w-[900px] text-center text-3xl font-semibold leading-[1.18] tracking-[-0.02em] md:text-[42px]">
          Technology should feel like a natural{" "}
          <br className="hidden md:block" />
          extension of our humanity, not a
          <br className="hidden md:block" />
          distraction from it.
        </h2>
        <div className="mx-auto mt-12 h-px w-12 bg-white/30" />
        <p className="font-sans mx-auto mt-12 max-w-[586px] text-[16px] font-normal leading-[1.9] text-white/58">
          &quot;We believe in the power of quiet innovation. Our goal isn&apos;t
          to build the{" "}
          <br className="hidden md:block" />
          loudest product, but the most meaningful one.&quot;
        </p>
        <p className="font-inter mt-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/72">
          - The Ojoosco Ltd Ethos
        </p>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="bg-white px-5 py-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[0.82fr_1fr] lg:gap-[140px]">
        <figure className="relative min-h-[520px] overflow-hidden rounded-[8px] bg-[#d9d3d0] md:min-h-[643px]">
          <Image
            src="/figma-assets/founder.jpg"
            alt="Alexis Ojo"
            fill
            sizes="(min-width: 1024px) 515px, 100vw"
            className="object-cover object-[48%_45%]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(rgb(0 0 0 / 29%), rgb(0 0 0 / 28%) 100%)",
            }}
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-8 pb-8 pt-24 text-white">
            <p className="font-display text-3xl font-semibold">Alexis Ojo</p>
            <p className="mt-1 text-[12px] text-white/85">Founder, CEO &amp; CPO</p>
          </figcaption>
        </figure>

        <div className="max-w-[624px]">
          <Image
            src="/figma-assets/landing/icons/leadership-quote.png"
            alt=""
            width={624}
            height={30}
            className="h-[30px] w-full object-contain object-left"
          />
          <blockquote className="mt-8 font-[Liberation_Serif,serif] text-pretty text-3xl font-medium italic leading-[1.55] text-[#000000] md:text-[36px]">
            &quot;Our goal isn&apos;t just to disrupt industries, but to become a
            trusted hub for bold, human-centred innovations..&quot;
          </blockquote>
          <p className="mt-10 text-[17px] leading-[1.85] text-[#006989]">
            Alexis leads Ojoosco Ltd with a vision of creating a technological
            ecosystem that respects privacy, encourages connection, and
            celebrates human potential.
          </p>
          <Link
            href="/about-us#team"
            className="mt-9 inline-block font-[Liberation_Serif,serif] text-[12px] font-bold text-[#006989] underline underline-offset-4"
          >
            Meet the Leadership
            <Image
              src="/figma-assets/landing/icons/external-link.png"
              alt=""
              width={9}
              height={9}
              className="ml-2 inline h-[9px] w-[9px] align-middle"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Investment() {
  return (
    <section id="investment" className="bg-[#eceeef] px-5 py-20 md:py-[120px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1fr_1.08fr]">
        <div className="max-w-[540px] lg:pl-5">
          <h2 className="font-display text-balance text-3xl font-semibold leading-[1.15] tracking-[-0.02em] md:text-[42px]">
            Invest in Meaningful Innovation
          </h2>
          <p className="mt-8 text-[17px] leading-[1.8] text-[#5f5e5e]">
            We are building a portfolio of ventures that define the next
            generation of human-centric technology. Join us in shaping a future
            where scale and empathy coexist.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/explore-opportunities#opportunities"
              className="inline-flex h-[54px] items-center justify-center rounded-lg bg-[#124343] px-6 text-[12px] font-extrabold uppercase tracking-[0.18em] text-white transition hover:bg-[#1b5656]"
            >
              Explore Opportunities
            </a>
            <a
              href="/explore-opportunities#pitch-deck"
              className="inline-flex h-[54px] items-center justify-center rounded-lg border border-[#9ca9a9] px-6 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#124343] transition hover:bg-white/70"
            >
              Request Pitch Deck
            </a>
          </div>
        </div>

        <div className="rounded-[8px] border border-[#c0c8c7] bg-white p-8 shadow-[0_20px_40px_-15px_rgba(18,67,67,0.05)] md:p-12">
          <dl className="space-y-8">
            {stats.map(([label, value], index) => (
              <div
                key={label}
                className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between ${
                  index < stats.length - 1 ? "border-b border-[#c0c8c7] pb-8" : ""
                }`}
              >
                <dt className="text-[16px] text-[#5f5e5e]">{label}</dt>
                <dd className="text-left text-[14px] font-extrabold uppercase tracking-[0.02em] text-[#124343] sm:text-right md:text-[16px]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="bg-[#f8f9fa] px-5 py-20 text-center md:py-24">
      <div className="mx-auto max-w-[672px]">
        <h2 className="font-display text-balance text-4xl font-semibold leading-[1.2] tracking-[-0.02em] md:text-[48px]">
          Let&apos;s Build Something That Matters
        </h2>
        <p className="mx-auto mt-7 max-w-[636px] text-[18px] leading-[1.7] text-[#5f5e5e]">
          Whether you&apos;re an investor, a potential partner, or a visionary
          engineer, we&apos;d love to hear from you.
        </p>
        <Link
          href="/contact-us"
          className="mt-8 inline-flex h-[60px] items-center justify-center rounded-xl bg-[#124343] px-10 text-[16px] font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-[#1b5656]"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex min-h-[157px] flex-col items-center justify-center border border-dashed border-[#cbd1d4] bg-[#F8F9FA] text-center text-[#b1b8bb] rounded-[4px]">
      <LockIcon />
      <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.22em]">
        {title}
      </p>
    </div>
  );
}

function PillarIcon({ name }: { name: PillarIconName }) {
  const icon = pillarIconAssets[name];
  return (
    <Image
      src={icon.src}
      alt=""
      width={icon.width}
      height={icon.height}
      className={icon.className}
    />
  );
}

function LockIcon() {
  return (
    <Image
      src="/figma-assets/landing/icons/lock.png"
      alt=""
      width={23}
      height={30}
      className="h-[30px] w-[23px]"
    />
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Investment | Ojoosco",
  description:
    "Explore Ojoosco Ltd's investment opportunity for Xparience, a premium relationship and lifestyle platform.",
};

const marketStats = [
  {
    label: "TAM",
    value: (
      <>
        &pound;3.33B
      </>
    ),
    body: "UK Online Dating Market",
  },
  {
    label: "SAM",
    value: (
      <>
        &pound;562.5M
      </>
    ),
    body: "",
  },
  {
    label: "SOM",
    value: (
      <>
        &pound;11.25M
      </>
    ),
    body: "",
  },
] as const;

const deploymentCards = [
  {
    icon: "product",
    title: "Product & Engineering",
    body: "Completing the app build and delivering a polished, scalable platform ready for launch.",
    className: "lg:col-span-8",
  },
  {
    icon: "growth",
    title: "Growth & Acquisition",
    body: "Targeted marketing to build our user base and establish Xparience as the premium choice in the UK online dating space.",
    className: "lg:col-span-4 lg:row-span-2",
  },
  {
    icon: "team",
    title: "Team & Operations",
    body: "Expanding our lean team with the right talent to execute at pace.",
    className: "lg:col-span-4 lg:justify-start!",
  },
  {
    icon: "shield",
    title: "Partnerships & Compliance",
    body: "Building the brand relationships and legal foundations that support long-term growth.",
    className: "lg:col-span-4",
  },
] as const;

const investmentReasons = [
  {
    number: "01",
    title: "Premium Market Position",
    body: "Experience-led platform tailored specifically for the underserved premium UK segment looking for depth over dopamine hits.",
  },
  {
    number: "02",
    title: "Monetisation Strategy",
    body: "Clear, high-margin revenue streams through tiered subscriptions and strategic lifestyle partnerships.",
  },
  {
    number: "03",
    title: "Expert Execution",
    body: "A lean, expert founding team with a track record of building and scaling digital products with emotional intelligence.",
  },
  {
    number: "04",
    title: "Investment Terms",
    body: (
      <>
        Seeking &pound;950,000 for 15% equity, representing a &pound;5.4M
        pre-money valuation with significant upside potential.
      </>
    ),
  },
] as const;

type DeploymentIconName = keyof typeof deploymentIconPaths;

export default function Investment() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#191c1e]">
      <Hero />
      <FundingOverview />
      <Opportunity />
      <StrategicDeployment />
      <WhyInvest />
      <VisionBand />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-8 md:px-20 md:pb-[120px]">
      <div className="absolute bottom-4 right-[-80px] top-1/4 w-[600px] rounded-full bg-[#005068]/10 blur-[60px]" />
      <SiteHeader variant="inner" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 pt-20 md:px-8 md:pt-[120px] lg:grid-cols-[7fr_5fr] lg:gap-8">
        <div className="max-w-[720px] pb-0 lg:pb-16">
          <h1 className="font-display text-[44px] font-semibold leading-[1.1] tracking-[0] text-[#005068] md:text-[70px] lg:whitespace-nowrap">
            Investing in the{" "}
            <br className="hidden md:block" />
            Future of{" "}
            <span className="italic text-[#47626f]">
              Human-
              <br className="hidden md:block" />
              Centred
            </span>{" "}
            Connection
          </h1>
          <p className="mt-8 max-w-[672px] text-[16px] leading-[1.65] text-[#3f484d] md:text-[18px]">
            Ojoosco Ltd is building the next generation of emotionally
            intelligent digital experiences through Xparience - a premium
            relationship and lifestyle platform designed around meaningful
            connection rather than addictive engagement.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex h-[46px] items-center justify-center rounded-xl bg-[#005068] px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#0a617a]"
            >
              Request Investor Deck
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-[46px] items-center justify-center rounded-xl border border-[#cfd8dd] bg-white px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#005068] transition hover:bg-[#f4f7f8]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <HeroInvestorCard />
      </div>
    </section>
  );
}


function HeroInvestorCard() {
  return (
    <div className="relative mx-auto w-full max-w-[488px] lg:mr-0">
      <div className="absolute right-[-80px] top-[-80px] size-64 rounded-full bg-[#005068]/5 blur-[50px]" />
      <div className="absolute bottom-[-40px] left-[-40px] size-48 rounded-full bg-[#6d3d00]/5 blur-[40px]" />
      <div className="relative rounded-[24px] border border-white/30 bg-white/40 p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-8">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-[#102326]">
          <Image
            src="/figma-assets/investment/premium-ui-mockup.png"
            alt="Xparience premium app interface mockup"
            fill
            priority
            sizes="(min-width: 1024px) 422px, 86vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 border-b border-[#bfc8ce] pb-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#3f484d]">
                Equity Round
              </p>
              <p className="font-display mt-1 text-[32px] font-medium leading-[1.3] tracking-[0] text-[#005068]">
                &pound;950,000
              </p>
            </div>
            <ArrowTrendIcon />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Metric label="Equity" value="15%" />
          <Metric label="Valuation" value={<>&pound;5.4M</>} />
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#3f484d]">
        {label}
      </p>
      <p className="mt-2 text-[18px] font-bold leading-[1.6] text-[#191c1e]">
        {value}
      </p>
    </div>
  );
}

function FundingOverview() {
  return (
    <section className="bg-[#f2f4f7] px-5 py-20 md:px-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-0 text-center md:px-8">
        <p className="text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#47626f]">
          Capital Raise
        </p>
        <h2 className="font-display mt-4 text-[30px] font-medium leading-[1.3] tracking-[0] text-[#005068] md:text-[32px]">
          Updated Funding Opportunity
        </h2>
        <p className="mx-auto mt-5 max-w-[672px] text-[16px] leading-[1.6] text-[#3f484d] md:text-[18px]">
          We are raising &pound;950,000 in equity investment to accelerate
          development, grow the team, and bring Xparience to market.
        </p>
      </div>
    </section>
  );
}

function Opportunity() {
  return (
    <section className="overflow-hidden bg-[#f8f9fa] px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-8">
        <div className="relative mx-auto aspect-square w-full max-w-[488px] overflow-hidden rounded-[24px] lg:mx-0">
          <Image
            src="/figma-assets/investment/market-insight.png"
            alt="Market growth chart"
            fill
            sizes="(min-width: 1024px) 488px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-[740px] lg:pl-8">
          <h2 className="font-display text-[30px] font-medium leading-[1.3] tracking-[0] text-[#005068] md:text-[32px]">
            The Opportunity
          </h2>
          <p className="mt-8 max-w-[701px] text-[16px] leading-[1.65] text-[#3f484d] md:text-[18px]">
            The UK online dating market is large, growing, and ready for a
            premium alternative; one built around quality experiences, genuine
            connection, and intentional living rather than addictive engagement
            loops. Xparience is positioned to capture that gap.
          </p>

          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            {marketStats.map((stat) => (
              <div
                key={stat.label}
                className="min-h-[166px] rounded-xl border border-[#e6eef2] bg-white px-7 py-8 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              >
                <p className="text-[12px] font-medium uppercase leading-none tracking-[0.12em] text-[#3f484d]">
                  {stat.label}
                </p>
                <p className="font-display mt-3 text-[30px] font-medium leading-[1.3] text-[#005068] md:text-[32px]">
                  {stat.value}
                </p>
                {stat.body ? (
                  <p className="mt-2 text-[13px] leading-5 text-[#3f484d]">
                    {stat.body}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategicDeployment() {
  return (
    <section className="bg-[#3f484d] px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1280px] md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[576px]">
            <h2 className="font-display text-[30px] font-medium leading-[1.3] tracking-[0] text-[#e6e6fa] md:text-[32px]">
              Strategic Deployment
            </h2>
            <p className="mt-4 text-[16px] leading-6 text-[#e6e6fa]">
              Our allocation strategy focuses on rapid scaling while maintaining
              a lean, expert-led operational structure.
            </p>
          </div>
          <p className="text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-white">
            Use of Funds
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[minmax(220px,auto)] gap-6 lg:grid-cols-12 lg:grid-rows-2">
          {deploymentCards.map((card) => (
            <article
              key={card.title}
              className={`flex min-h-[240px] flex-col justify-end rounded-[24px] border border-white/30 bg-[#e6e6fa] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-md md:p-10 ${card.className}`}
            >
              <DeploymentIcon
                name={card.icon}
                className="mb-7 size-7 text-[#006989]"
              />
              <h3 className="font-display text-[28px] font-medium leading-[1.2] tracking-[0] text-[#191c1e] md:text-[32px]">
                {card.title}
              </h3>
              <p className="mt-3 max-w-[640px] text-[15px] leading-[1.6] text-[#191c1e]/80 md:text-[16px]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyInvest() {
  return (
    <section className="bg-[#f7f9fd] px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[408px_1fr] lg:gap-8">
        <div className="max-w-[408px]">
          <h2 className="font-display text-[36px] font-semibold leading-[1.2] tracking-[0] text-[#005068] md:text-[40px]">
            Why Invest in Xparience
          </h2>
          <div className="mt-6 h-1 w-20 bg-[#005068]" />
          <p className="mt-6 text-[16px] leading-6 text-[#3f484d]">
            A unique opportunity to shape the future of digital human
            interaction in a multi-billion pound market.
          </p>
        </div>

        <div className="space-y-12">
          {investmentReasons.map((reason) => (
            <article key={reason.number}>
              <div className="grid gap-5 sm:grid-cols-[22px_1fr] sm:gap-8">
                <p className="font-display text-[16px] leading-6 text-[#005068]/20">
                  {reason.number}
                </p>
                <div>
                  <h3 className="font-display text-[28px] font-medium leading-[1.3] tracking-[0] text-[#005068] md:text-[32px]">
                    {reason.title}
                  </h3>
                  <p className="mt-4 max-w-[750px] text-[16px] leading-[1.65] text-[#3f484d] md:text-[18px]">
                    {reason.body}
                  </p>
                </div>
              </div>
              <div className="mt-12 h-px w-[316px] max-w-full bg-[#bfc8ce]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionBand() {
  return (
    <section className="relative overflow-hidden bg-[#005068] px-5 py-20 md:px-20 md:py-[120px]">
      <div className="absolute right-[-400px] top-[-400px] size-[800px] rounded-full bg-white/5 blur-[60px]" />
      <div className="relative mx-auto max-w-[1280px] px-0 text-center md:px-8">
        <h2 className="font-display text-[28px] font-semibold leading-none tracking-[0] text-white md:text-[32px]">
          Building Technology That Feels More Human
        </h2>
        <p className="mx-auto mt-8 max-w-[896px] text-[16px] leading-[1.65] text-white/80 md:text-[18px]">
          Ojoosco Ltd believes the future of technology lies in experiences that
          understand people more deeply. Xparience represents the beginning of a
          broader vision to build emotionally intelligent digital products
          centred around meaningful human experiences.
        </p>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 md:px-20 md:py-24">
      <div className="absolute right-[-400px] top-[-400px] size-[800px] rounded-full bg-white/5 blur-[60px]" />
      <div className="relative mx-auto max-w-[917px] overflow-hidden rounded-[40px] border border-white/30 bg-white/40 px-6 py-20 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md md:rounded-[64px] md:px-8 md:pb-[161px] md:pt-[160px]">
        <div className="absolute bottom-0 right-0 size-32 rounded-full bg-[#005068]/10 blur-[20px]" />
        <div className="absolute left-0 top-0 size-32 rounded-full bg-[#6d3d00]/10 blur-[20px]" />
        <div className="relative">
          <h2 className="font-display text-[30px] font-medium leading-[1.3] tracking-[0] text-[#005068] md:text-[32px]">
            Interested in Learning More?
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#47626f] md:text-[18px]">
            Get in touch to request access to our data room.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/contact-us"
              className="inline-flex h-[54px] items-center justify-center rounded-xl bg-[#005068] px-12 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition hover:bg-[#0a617a]"
            >
              Request Access
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-[54px] items-center justify-center rounded-xl border border-[#005068] bg-white px-12 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#005068] transition hover:bg-[#f4f7f8]"
            >
              Contact Ojoosco Ltd
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


function DeploymentIcon({
  name,
  className,
}: {
  name: DeploymentIconName;
  className: string;
}) {
  const image = deploymentIconImages[name];
  if (image) {
    return (
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        className={`${className} self-start object-contain`}
        style={{ width: "auto", height: "20px" }}
      />
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={deploymentIconPaths[name]}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

const deploymentIconImages: Partial<
  Record<DeploymentIconName, { src: string; width: number; height: number }>
> = {
  product: {
    src: "/figma-assets/investment/deploy-product.png",
    width: 45,
    height: 41,
  },
  team: {
    src: "/figma-assets/investment/deploy-team.png",
    width: 54,
    height: 27,
  },
};

function ArrowTrendIcon() {
  return (
    <svg className="size-5 text-[#005068]" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m5 16 5-5 3 3 6-7m0 0v5m0-5h-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

const deploymentIconPaths = {
  product: "M4 5h16v14H4V5Zm4 4h3v3H8V9Zm5 0h3v3h-3V9Zm-5 5h3v2H8v-2Zm5 0h3v2h-3v-2Z",
  growth: "M4 17.5 9.5 12l3 3L20 7.5V12m0-4.5h-4.5",
  team: "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19a4.5 4.5 0 0 1 9 0M11.5 19a4.5 4.5 0 0 1 9 0",
  shield: "M12 3 19 6v6c0 4.6-3 7.8-7 9-4-1.2-7-4.4-7-9V6l7-3Zm-3 9 2 2 4-5",
} as const;

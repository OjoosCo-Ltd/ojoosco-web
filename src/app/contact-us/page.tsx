import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Ojoosco",
  description:
    "Contact Ojoosco Ltd for partnerships, investment opportunities, collaborations, media enquiries, and general conversations.",
};

const channels = [
  {
    icon: "mail",
    title: "General Enquiries",
    body: "For everything else, our general inbox is always open.",
  },
  {
    icon: "partners",
    title: "Partnerships",
    body: "Build the future of human-centred tech with us.",
  },
  {
    icon: "investment",
    title: "Investment",
    body: "Enquire about our portfolio and venture growth.",
  },
] as const;

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a]">
      <Hero />
      <ContactArea />
      <DirectChannels />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-8 md:px-20 md:pb-[120px]">
      <div className="absolute bottom-4 right-[-80px] top-1/4 w-[600px] rounded-full bg-[#005069]/10 blur-[60px]" />
      <SiteHeader variant="inner" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 pt-20 md:pt-[120px] lg:grid-cols-[1fr_0.95fr]">
        <div className="max-w-[690px]">
          <p className="text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#006989]">
            Connect With Us
          </p>
          <h1 className="font-display mt-7 text-[46px] font-semibold leading-[1.1] tracking-[0] text-[#1a1a1a] md:text-[70px] lg:whitespace-nowrap">
            Let&apos;s Build{" "}
            <br className="hidden md:block" />
            Something{" "}
            <br className="hidden md:block" />
            <span className="text-[#006989]">Meaningful</span> Together
          </h1>
          <p className="mt-8 max-w-[576px] text-[16px] leading-[1.65] text-[#4a5568] md:text-[18px]">
            We&apos;d love to hear from you — whether it&apos;s a partnership,
            investment opportunity, media enquiry, or simply a conversation
            about the future of human-centred innovation.
          </p>
        </div>

        <div className="relative mx-auto h-[310px] w-full max-w-[560px] overflow-hidden rounded-bl-[24px] rounded-tl-[24px] opacity-80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] md:h-[427px] lg:mr-0">
          <Image
            src="/figma-assets/contact/hero-support.png"
            alt="Support team members wearing headsets"
            fill
            priority
            sizes="(min-width: 1024px) 590px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}


function ContactArea() {
  return (
    <section className="bg-[#f8f9fd] px-5 py-20 md:px-20">
      <div className="mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
        <div className="max-w-[430px] lg:justify-self-end">
          <h2 className="font-display text-[32px] font-medium leading-[1.3] tracking-[0]">
            Start the Conversation
          </h2>
          <p className="mt-5 text-[18px] leading-[1.6] text-[#4a5568]">
            Whether you&apos;re reaching out about partnerships, investment
            opportunities, collaborations, or media enquiries, we&apos;d be glad
            to hear from you. Our team typically responds within 48 business
            hours.
          </p>
          <div className="relative mt-8 h-[384px] overflow-hidden rounded-[20px] bg-white opacity-[0.81]">
            <Image
              src="/figma-assets/contact/support-agent.png"
              alt="Support representative with headset"
              fill
              sizes="(min-width: 1024px) 418px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function DirectChannels() {
  return (
    <section className="bg-[#f4f5f9] px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1280px] text-center">
        <h2 className="font-display text-[32px] font-medium leading-[1.3] tracking-[0]">
          Direct Channels
        </h2>
        <p className="mt-4 text-[16px] leading-[1.6] text-[#4a5568]">
          Reach out to the specific department for faster response.
        </p>

        <div className="mt-16 grid gap-8 text-left lg:grid-cols-3">
          {channels.map((channel) => (
            <article
              key={channel.title}
              className="min-h-[278px] rounded-2xl border border-black/[0.05] bg-white/60 px-10 py-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-md"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-[#006989]/5 text-[#006989]">
                <ChannelIcon name={channel.icon} />
              </div>
              <h3 className="mt-7 text-[24px] font-normal leading-[32px]">
                {channel.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[24px] text-[#4a5568]">
                {channel.body}
              </p>
              <a
                href="mailto:info@ojoosco.com"
                className="mt-5 inline-flex border-b border-[#006989]/20 pb-0.5 text-[12px] font-medium tracking-[0.1em] text-[#006989] underline"
              >
                info@ojoosco.com
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


const channelIcons = {
  mail: {
    src: "/figma-assets/contact/icons/mail.png",
    width: 29,
    height: 23,
    className: "h-4",
  },
  partners: {
    src: "/figma-assets/contact/icons/partners.png",
    width: 32,
    height: 29,
    className: "h-4",
  },
  investment: {
    src: "/figma-assets/contact/icons/investment.png",
    width: 29,
    height: 17,
    className: "h-3",
  },
} as const;

function ChannelIcon({ name }: { name: (typeof channels)[number]["icon"] }) {
  const icon = channelIcons[name];
  return (
    <Image
      src={icon.src}
      alt=""
      width={icon.width}
      height={icon.height}
      className={`${icon.className} w-auto object-contain`}
    />
  );
}

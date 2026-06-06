import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterSocialLinks } from "../footer-social-links";

export const metadata: Metadata = {
  title: "Contact Us | Ojoosco",
  description:
    "Contact Ojoosco Ltd for partnerships, investment opportunities, collaborations, media enquiries, and general conversations.",
};

const navItems = [
  ["Home", "/"],
  ["About", "/about-us"],
  ["Ventures", "/ventures"],
  ["Investment", "/investment"],
  ["Contact", "/contact-us"],
] as const;

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

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a]">
      <Hero />
      <ContactArea />
      <DirectChannels />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-8 md:px-20 md:pb-[120px]">
      <div className="absolute bottom-4 right-[-80px] top-1/4 w-[600px] rounded-full bg-[#005069]/10 blur-[60px]" />
      <ContactHeader />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 pt-20 md:pt-[120px] lg:grid-cols-[1fr_0.95fr]">
        <div className="max-w-[690px]">
          <p className="text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#006989]">
            Connect With Us
          </p>
          <h1 className="font-display mt-7 text-balance text-[46px] font-semibold leading-[1.1] tracking-[0] text-[#1a1a1a] md:text-[72px]">
            Let&apos;s Build Something{" "}
            <span className="italic text-[#006989]">Meaningful</span> Together
          </h1>
          <p className="mt-8 max-w-[576px] text-[16px] leading-[1.65] text-[#4a5568] md:text-[18px]">
            We&apos;d love to hear from you - whether it&apos;s a partnership,
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

function ContactHeader() {
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
                label === "Contact"
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

function ContactForm() {
  return (
    <form className="mx-auto w-full max-w-[562px] rounded-[32px] bg-white px-6 py-10 shadow-[0_12px_16px_rgba(25,28,31,0.04)] md:px-12 md:pb-16 md:pt-12">
      <h2 className="text-[24px] font-bold leading-[32px] text-[#191c1f]">
        Send Us a Message
      </h2>
      <div className="mt-8 grid gap-x-6 gap-y-6 md:grid-cols-2">
        <Field label="Full Name" placeholder="John Doe" />
        <Field label="Email Address" placeholder="john@example.com" type="email" />
        <label className="block md:col-span-2">
          <span className="mb-2 block px-1 text-[11px] font-bold uppercase tracking-[0.05em] text-[#434653]">
            Subject
          </span>
          <select className="h-[54px] w-full rounded-lg border-0 bg-[#f2f3f7] px-4 text-[16px] text-[#737784]/50 outline-none ring-1 ring-transparent transition focus:ring-[#006989]">
            <option>How can we help?</option>
            <option>Partnerships</option>
            <option>Investment</option>
            <option>Media Enquiry</option>
            <option>General Enquiry</option>
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block px-1 text-[11px] font-bold uppercase tracking-[0.05em] text-[#434653]">
            Message
          </span>
          <textarea
            className="min-h-[152px] w-full resize-none rounded-lg border-0 bg-[#f2f3f7] px-4 py-4 text-[16px] text-[#191c1f] outline-none ring-1 ring-transparent transition placeholder:text-[#737784]/50 focus:ring-[#006989]"
            placeholder="Tell us more about your inquiry..."
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 h-[60px] w-full rounded-xl bg-[linear-gradient(152deg,#005069_0%,#006989_100%)] text-[18px] font-bold text-white shadow-[0_32px_64px_-15px_rgba(0,80,105,0.06)] transition hover:brightness-110"
      >
        Send Message
      </button>
    </form>
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
                className="mt-5 inline-flex border-b border-[#006989]/20 pb-1 text-[12px] font-medium tracking-[0.1em] text-[#006989] underline"
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
      <span className="mb-2 block px-1 text-[11px] font-bold uppercase tracking-[0.05em] text-[#434653]">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[54px] w-full rounded-lg border-0 bg-[#f2f3f7] px-4 text-[16px] text-[#191c1f] outline-none ring-1 ring-transparent transition placeholder:text-[#737784]/50 focus:ring-[#006989]"
      />
    </label>
  );
}

function ChannelIcon({ name }: { name: (typeof channels)[number]["icon"] }) {
  const paths = {
    mail: "M4 5h16v14H4V5Zm2 3.2V17h12V8.2l-6 4.2-6-4.2Zm.9-1.2 5.1 3.6L17.1 7H6.9Z",
    partners:
      "M8.6 5.5 4.8 9.3a3 3 0 0 0 0 4.2l2.1 2.1 2.1-2.1-2.1-2.1 3.8-3.8 1.6 1.6 1.4-1.4-2-2a2.2 2.2 0 0 0-3.1-.3Zm6.8 0a2.2 2.2 0 0 0-3.1.3l-4.8 4.8 1.4 1.4 3.8-3.8 4.4 4.4-4.2 4.2-1.6-1.6-1.4 1.4 1.7 1.7a2 2 0 0 0 2.8 0l4.2-4.2a3 3 0 0 0 0-4.2l-3.2-3.4Z",
    investment:
      "M4 17.5 9.5 12l3 3L20 7.5V12h-2V10.9l-5.5 5.5-3-3L5.4 19 4 17.5ZM4 5h16v2H4V5Z",
  };

  return (
    <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} fill="currentColor" />
    </svg>
  );
}

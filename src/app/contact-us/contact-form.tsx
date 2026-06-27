"use client";

import { useState } from "react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[562px] rounded-[32px] bg-white px-6 py-10 shadow-[0_12px_16px_rgba(25,28,31,0.04)] md:px-12 md:pb-16 md:pt-12"
    >
      <h2 className="text-[24px] font-bold leading-[32px] text-[#191c1f]">
        Send Us a Message
      </h2>

      {/* Sender label shown in the email (helps identify submissions) */}
      <input type="hidden" name="from_name" value="Ojoosco Website — Contact Form" />

      {/* Honeypot spam filter (hidden from users) */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-8 grid gap-x-6 gap-y-6 md:grid-cols-2">
        <Field name="name" label="Full Name" placeholder="John Doe" required />
        <Field
          name="email"
          label="Email Address"
          placeholder="john@example.com"
          type="email"
          required
        />
        <label className="block md:col-span-2">
          <span className="mb-2 block px-1 text-[11px] font-bold uppercase tracking-[0.05em] text-[#434653]">
            Subject
          </span>
          <div className="relative">
            <select
              name="subject"
              required
              defaultValue=""
              className="h-[54px] w-full appearance-none rounded-lg border-0 bg-[#f2f3f7] pl-4 pr-11 text-[16px] text-[#191c1f] outline-none ring-1 ring-transparent transition focus:ring-[#006989]"
            >
              <option value="" disabled>
                How can we help?
              </option>
              <option>Partnerships</option>
              <option>Investment</option>
              <option>Media Enquiry</option>
              <option>General Enquiry</option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#434653]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block px-1 text-[11px] font-bold uppercase tracking-[0.05em] text-[#434653]">
            Message
          </span>
          <textarea
            name="message"
            required
            className="min-h-[152px] w-full resize-none rounded-lg border-0 bg-[#f2f3f7] px-4 py-4 text-[16px] text-[#191c1f] outline-none ring-1 ring-transparent transition placeholder:text-[#737784]/50 focus:ring-[#006989]"
            placeholder="Tell us more about your inquiry..."
          />
        </label>
      </div>

      {status === "success" ? (
        <p className="mt-6 rounded-lg bg-[#e6f4ec] px-4 py-3 text-[14px] font-medium text-[#1b7a4b]">
          Thanks — your message has been sent. We&apos;ll be in touch soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-6 rounded-lg bg-[#fdecec] px-4 py-3 text-[14px] font-medium text-[#c0392b]">
          Something went wrong. Please try again, or email us at
          info@ojoosco.com.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 h-[60px] w-full rounded-xl bg-[linear-gradient(152deg,#005069_0%,#006989_100%)] text-[18px] font-bold text-white shadow-[0_32px_64px_-15px_rgba(0,80,105,0.06)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block px-1 text-[11px] font-bold uppercase tracking-[0.05em] text-[#434653]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-[54px] w-full rounded-lg border-0 bg-[#f2f3f7] px-4 text-[16px] text-[#191c1f] outline-none ring-1 ring-transparent transition placeholder:text-[#737784]/50 focus:ring-[#006989]"
      />
    </label>
  );
}

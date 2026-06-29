"use client";

import { useState } from "react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export function PitchDeckForm() {
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
      className="rounded-[28px] bg-white/76 p-8 shadow-[0_28px_70px_rgba(25,28,30,0.06)] backdrop-blur-md md:p-12"
    >
      <input
        type="hidden"
        name="from_name"
        value="Ojoosco Website — Pitch Deck Request"
      />
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-x-7 gap-y-6 md:grid-cols-2">
        <Field name="name" label="Full Name" placeholder="John Doe" required />
        <Field
          name="company"
          label="Company / Organisation"
          placeholder="Investment Partners"
        />
        <Field
          name="email"
          label="Email Address"
          placeholder="john@example.com"
          type="email"
          required
        />
        <label className="block">
          <span className="mb-2 block text-[11px] font-extrabold text-[#5e686d]">
            Investor Type
          </span>
          <select
            name="investor_type"
            defaultValue="Angel Investor"
            className="h-[52px] w-full rounded-lg border-0 bg-[#edf1f4] px-4 text-[13px] font-medium text-[#3f484d] outline-none ring-1 ring-transparent transition focus:ring-[#006989]"
          >
            <option>Angel Investor</option>
            <option>Venture Capital</option>
            <option>Strategic Partner</option>
            <option>Family Office</option>
          </select>
        </label>
        <div className="md:col-span-2">
          <Field
            name="website"
            label="LinkedIn or Website"
            placeholder="https://"
          />
        </div>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-[11px] font-extrabold text-[#5e686d]">
            Message
          </span>
          <textarea
            name="message"
            required
            className="min-h-[144px] w-full resize-none rounded-lg border-0 bg-[#edf1f4] px-4 py-4 text-[13px] text-[#191c1e] outline-none ring-1 ring-transparent transition placeholder:text-[#8c969b] focus:ring-[#006989]"
            placeholder="Tell us more about your interest..."
          />
        </label>
      </div>

      {status === "success" ? (
        <p className="mt-6 rounded-lg bg-[#e6f4ec] px-4 py-3 text-[13px] font-medium text-[#1b7a4b]">
          Thanks — your request has been sent. We&apos;ll be in touch soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-6 rounded-lg bg-[#fdecec] px-4 py-3 text-[13px] font-medium text-[#c0392b]">
          Something went wrong. Please try again, or email us at
          info@ojoosco.com.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 h-[62px] w-full rounded-lg bg-[#006680] text-[12px] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_14px_28px_rgba(0,104,128,0.2)] transition hover:bg-[#00566d] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Request Access"}
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
      <span className="mb-2 block text-[11px] font-extrabold text-[#5e686d]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-[52px] w-full rounded-lg border-0 bg-[#edf1f4] px-4 text-[13px] text-[#191c1e] outline-none ring-1 ring-transparent transition placeholder:text-[#8c969b] focus:ring-[#006989]"
      />
    </label>
  );
}

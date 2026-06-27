"use client";

import { useState } from "react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export function ConversationForm() {
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
      className="mt-8 rounded-[24px] bg-white/70 p-8 text-left shadow-[0_25px_60px_rgba(25,28,30,0.08)] backdrop-blur-md md:p-12"
    >
      <input
        type="hidden"
        name="from_name"
        value="Ojoosco Website — Partnership Inquiry"
      />
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-x-6 gap-y-7 md:grid-cols-2">
        <Field name="name" label="Full Name" placeholder="John Doe" required />
        <Field
          name="company"
          label="Company / Organisation"
          placeholder="Enter Company Name"
        />
        <Field
          name="email"
          label="Email Address"
          placeholder="john@company.com"
          type="email"
          required
        />
        <label className="block">
          <span className="mb-2 block px-2 text-[12px] font-bold text-[#3f484d]">
            Partnership Type
          </span>
          <select
            name="partnership_type"
            required
            defaultValue=""
            className="h-12 w-full rounded-lg border-0 bg-white px-4 text-[14px] text-[#191c1e] outline-none ring-1 ring-transparent transition focus:ring-[#005068]"
          >
            <option value="" disabled>
              Select Type
            </option>
            <option>Strategic Partnership</option>
            <option>Investment Opportunity</option>
            <option>Brand Collaboration</option>
            <option>Media &amp; Press</option>
          </select>
        </label>
        <div className="md:col-span-2">
          <Field
            name="website"
            label="Website or Social Link"
            placeholder="https://"
          />
        </div>
        <label className="block md:col-span-2">
          <span className="mb-2 block px-2 text-[12px] font-bold text-[#3f484d]">
            Message
          </span>
          <textarea
            name="message"
            required
            className="min-h-[120px] w-full resize-none rounded-lg border-0 bg-white px-4 py-3 text-[14px] text-[#191c1e] outline-none ring-1 ring-transparent transition placeholder:text-[#8f989b] focus:ring-[#005068]"
            placeholder="Tell us about your vision..."
          />
        </label>
      </div>

      {status === "success" ? (
        <p className="mt-6 rounded-lg bg-[#e6f4ec] px-4 py-3 text-[14px] font-medium text-[#1b7a4b]">
          Thanks — your inquiry has been sent. We&apos;ll be in touch soon.
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
        className="mt-8 h-14 w-full rounded-lg bg-[#005068] text-[14px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition hover:bg-[#0a617a] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
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
      <span className="mb-2 block px-2 text-[12px] font-bold text-[#3f484d]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-[54px] w-full rounded-lg border-0 bg-white px-4 text-[14px] text-[#191c1e] outline-none ring-1 ring-transparent transition placeholder:text-[#8f989b] focus:ring-[#005068]"
      />
    </label>
  );
}

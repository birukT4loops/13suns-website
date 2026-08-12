"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-gold/40 bg-gold/10 p-6 text-sm text-ink">
        <p className="font-semibold">Thank you for your message.</p>
        <p className="mt-1 text-stone-600">It has been sent — our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* honeypot field, hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Your Name <span className="text-terracotta">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-stone-400 focus:border-gold-dark focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Your Email <span className="text-terracotta">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-stone-400 focus:border-gold-dark focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          autoComplete="off"
          className="w-full rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-stone-400 focus:border-gold-dark focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Your Message <span className="text-terracotta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-stone-400 focus:border-gold-dark focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm font-medium text-terracotta-dark">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

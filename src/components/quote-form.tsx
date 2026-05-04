"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AnimateIn } from "@/components/animate-in";
import { submitLead } from "@/lib/actions";
import { trackEvent } from "@/lib/analytics";
import { packages } from "@/lib/packages-data";
import { getWhatsAppUrl, WA_DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

const steps = [
  {
    title: "Let us help you figure out what you need",
    desc: "Tell us about situation and email us photos of your space",
  },
  {
    title: "We plan & quote",
    desc: "Our team reviews and sends you a clear, honest quote",
  },
  {
    title: "We set up before discharge",
    desc: "Everything installed and ready — within 1 week",
  },
];

function Spinner({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={`animate-spin ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export function QuoteForm() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  // Pre-select package from URL params (e.g., /get-a-quote?package=make-it-safe)
  useEffect(() => {
    const pkg = searchParams.get("package");
    if (pkg) {
      const found = packages.find((p) => p.slug === pkg);
      if (found) setSelectedPackage(found.name);
    }
  }, [searchParams]);

  const emailUrl = "mailto:hello@jaga.care?subject=Quote request — photos attached";

  const disabled = formState === "submitting";

  const buildPrefilled = () => {
    const parts: string[] = ["Hi Sumira,"];
    if (name.trim()) parts.push(`I'm ${name.trim()}.`);
    if (selectedPackage) parts.push(`I'm interested in the ${selectedPackage} package.`);
    if (message.trim()) {
      parts.push(`Here's our situation: ${message.trim()}`);
    } else {
      parts.push("I'd like to chat about home setup for my parent.");
    }
    return parts.join(" ");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPhoneError("");
    setErrorMsg("");

    if (!phone.trim()) {
      setPhoneError("Phone number is required.");
      return;
    }

    // Open WhatsApp first, while we still have the user gesture (popup blockers).
    const waUrl = getWhatsAppUrl(buildPrefilled());
    window.open(waUrl, "_blank", "noopener,noreferrer");
    trackEvent("whatsapp_click", { location: "quote_form_submit" });

    setFormState("submitting");

    const result = await submitLead({
      name,
      phone,
      message: message || undefined,
      packageInterest: selectedPackage || undefined,
      source: "website_quote_form",
    });

    if (!result.success) {
      setErrorMsg(result.error || "Something went wrong. Please try again.");
      setFormState("error");
      return;
    }

    trackEvent("form_submit", { source: "quote_form" });
    setFormState("success");
  };

  return (
    <section id="get-a-quote" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side — explanatory text */}
          <AnimateIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green">
                Get started
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-text sm:text-4xl lg:text-5xl">
                Tell us about your situation. Our specialists will take it from there.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Reach out to us and we&rsquo;ll come back with a plan and a
                quote tailored to your situation.
              </p>

              {/* Steps */}
              <ol className="mt-10 flex flex-col gap-8">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-text">{step.title}</p>
                      <p className="mt-0.5 text-sm text-text-muted">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </AnimateIn>

          {/* Right side — form card */}
          <AnimateIn delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-warm-gray bg-white shadow-lg">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-warm-gray px-6 py-4">
                <p className="font-semibold text-text">Talk to a specialist</p>
                <p className="text-sm text-text-faint">Takes 1 minute</p>
              </div>

              {/* Body */}
              <div className="p-6">
                {formState === "success" ? (
                  <div className="py-8 text-center">
                    <p className="font-serif text-xl text-text">
                      We got your request! We&rsquo;ll reach out
                      within a few hours.
                    </p>
                    <a
                      href={emailUrl}
                      className="mt-4 inline-block text-sm font-medium text-green underline underline-offset-2 hover:opacity-80"
                    >
                      Send photos via email →
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name */}
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={disabled}
                      className="rounded-lg border border-warm-gray px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-green focus:outline-none focus:ring-1 focus:ring-green disabled:opacity-50"
                    />

                    {/* Phone */}
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (phoneError) setPhoneError("");
                        }}
                        disabled={disabled}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:outline-none focus:ring-1 disabled:opacity-50 ${
                          phoneError
                            ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                            : "border-warm-gray focus:border-green focus:ring-green"
                        }`}
                      />
                      {phoneError && (
                        <p className="mt-1 text-xs text-red-500">
                          {phoneError}
                        </p>
                      )}
                    </div>

                    {/* Package selector */}
                    <select
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      disabled={disabled}
                      className="rounded-lg border border-warm-gray px-4 py-2.5 text-sm text-text bg-white focus:border-green focus:outline-none focus:ring-1 focus:ring-green disabled:opacity-50"
                    >
                      <option value="">Which package interests you? (optional)</option>
                      {packages.map((pkg) => (
                        <option key={pkg.slug} value={pkg.name}>{pkg.name}</option>
                      ))}
                    </select>

                    {/* Situation */}
                    <textarea
                      placeholder="Tell us about the situation (optional)"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={disabled}
                      className="rounded-lg border border-warm-gray px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-green focus:outline-none focus:ring-1 focus:ring-green disabled:opacity-50"
                    />

                    {/* Error message */}
                    {formState === "error" && errorMsg && (
                      <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
                        {errorMsg}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={disabled}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                    >
                      {formState === "submitting" ? (
                        <>
                          <Spinner />
                          Sending...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="h-4 w-4" />
                          Talk to a specialist
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-text-faint">
                      We&rsquo;ll respond within a few hours. No spam, no
                      pressure.
                    </p>

                    {/* Email alternative */}
                    <div className="border-t border-warm-gray pt-4 text-center">
                      <p className="text-xs text-text-faint">
                        Want to send photos?{" "}
                        <a
                          href={emailUrl}
                          className="font-medium text-green underline underline-offset-2"
                        >
                          Email us directly
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

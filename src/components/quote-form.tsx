"use client";

import { useState, useRef, useCallback, type FormEvent } from "react";
import { AnimateIn } from "@/components/animate-in";
import { useImageUpload } from "@/hooks/use-image-upload";
import { submitLead } from "@/lib/actions";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "success" | "partial" | "error";

const steps = [
  {
    title: "Share photos or describe",
    desc: "Bathroom, bedroom, hallways — whatever needs work",
  },
  {
    title: "We plan & quote",
    desc: "Our team reviews and sends you a clear, honest quote",
  },
  {
    title: "We set up before discharge",
    desc: "Everything installed and ready — within 48 hours",
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
  const [formState, setFormState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { files, uploading, addFiles, removeFile, uploadAll } =
    useImageUpload(5);

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Hi, I'd like to send more details about my care request."
  )}`;

  const disabled = formState === "submitting" || uploading;

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files.length > 0) {
        addFiles(e.dataTransfer.files);
      }
    },
    [addFiles]
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPhoneError("");
    setErrorMsg("");

    if (!phone.trim()) {
      setPhoneError("Phone number is required.");
      return;
    }

    setFormState("submitting");

    // Upload photos first
    let photoPaths: string[] = [];
    let photosFailed = false;
    if (files.length > 0) {
      try {
        photoPaths = await uploadAll();
        if (photoPaths.length < files.length) {
          photosFailed = true;
        }
      } catch {
        photosFailed = true;
      }
    }

    // Submit lead
    const result = await submitLead({
      name,
      phone,
      message: message || undefined,
      photos: photoPaths.length > 0 ? photoPaths : undefined,
      source: "website_quote_form",
    });

    if (!result.success) {
      setErrorMsg(result.error || "Something went wrong. Please try again.");
      setFormState("error");
      return;
    }

    trackEvent("form_submit", { source: "quote_form" });

    if (photosFailed) {
      setFormState("partial");
    } else {
      setFormState("success");
    }
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
                Send us your space. We&rsquo;ll handle the rest.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Snap a few photos of the rooms that need work — or just describe
                the situation. We&rsquo;ll come back with a plan and a quote.
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
                <p className="font-semibold text-text">Get a free quote</p>
                <p className="text-sm text-text-faint">Takes 2 minutes</p>
              </div>

              {/* Body */}
              <div className="p-6">
                {formState === "success" ? (
                  <div className="py-8 text-center">
                    <p className="font-serif text-xl text-text">
                      We got your request! We&rsquo;ll reach out on WhatsApp
                      within a few hours.
                    </p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-green underline underline-offset-2 hover:opacity-80"
                    >
                      Send more details via WhatsApp
                    </a>
                  </div>
                ) : formState === "partial" ? (
                  <div className="py-8 text-center">
                    <p className="font-serif text-xl text-text">
                      Your request was received!
                    </p>
                    <p className="mt-2 text-sm text-text-muted">
                      Some photos didn&rsquo;t upload — you can send them via
                      WhatsApp.
                    </p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-green underline underline-offset-2 hover:opacity-80"
                    >
                      Send photos via WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Photo dropzone */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-colors ${
                        dragOver
                          ? "border-green bg-green/5"
                          : "border-warm-gray hover:border-green/50"
                      }`}
                    >
                      <p className="text-2xl">📷</p>
                      <p className="mt-1 text-sm font-medium text-text">
                        Drop room photos here
                      </p>
                      <p className="mt-0.5 text-xs text-text-faint">
                        Optional — you can also just describe what you need
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files) addFiles(e.target.files);
                          e.target.value = "";
                        }}
                        disabled={disabled}
                      />
                    </div>

                    {/* Photo thumbnails grid */}
                    {files.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {files.map((f, i) => (
                          <div
                            key={i}
                            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={f.preview}
                              alt={`Upload ${i + 1}`}
                              className="h-full w-full object-cover"
                            />
                            {/* Uploading overlay */}
                            {f.uploading && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <Spinner className="h-6 w-6 text-white" />
                              </div>
                            )}
                            {/* Uploaded checkmark */}
                            {f.path && !f.uploading && (
                              <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green text-white">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M3 6L5.5 8.5L9 3.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            )}
                            {/* Error indicator */}
                            {f.error && (
                              <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                !
                              </span>
                            )}
                            {/* Remove button */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(i);
                              }}
                              className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/50 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
                              aria-label="Remove photo"
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                        {/* Add more button */}
                        {files.length < 5 && (
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-warm-gray text-2xl text-text-faint transition-colors hover:border-green/50 hover:text-green"
                            disabled={disabled}
                          >
                            +
                          </button>
                        )}
                      </div>
                    )}

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
                        placeholder="Phone / WhatsApp number"
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
                        "Get my free quote →"
                      )}
                    </button>

                    <p className="text-center text-xs text-text-faint">
                      We&rsquo;ll respond within a few hours. No spam, no
                      pressure.
                    </p>
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

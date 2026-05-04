"use client";

import { useState, useEffect, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { submitLead } from "@/lib/actions";
import { trackEvent } from "@/lib/analytics";
import { packages } from "@/lib/packages-data";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type FormState = "idle" | "submitting" | "success" | "error";

const steps = [
  {
    title: "Biar kami bantu anda menentukan apa yang anda perlukan",
    desc: "Beritahu kami tentang situasi dan emel kami gambar ruangan anda",
  },
  {
    title: "Kami merancang & memberi sebut harga",
    desc: "Pasukan kami menyemak dan menghantar sebut harga yang jelas dan jujur",
  },
  {
    title: "Kami sediakan sebelum keluar hospital",
    desc: "Semua dipasang dan sedia — dalam 1 minggu",
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

function QuoteFormMs() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    const pkg = searchParams.get("package");
    if (pkg) {
      const found = packages.find((p) => p.slug === pkg);
      if (found) setSelectedPackage(found.name);
    }
  }, [searchParams]);

  const emailUrl =
    "mailto:hello@jaga.care?subject=Permintaan sebut harga — gambar dilampirkan";

  const disabled = formState === "submitting";

  const buildPrefilled = () => {
    const parts: string[] = ["Hai Sumira,"];
    if (name.trim()) parts.push(`saya ${name.trim()}.`);
    if (selectedPackage) parts.push(`Saya berminat dengan pakej ${selectedPackage}.`);
    if (message.trim()) {
      parts.push(`Berikut situasi kami: ${message.trim()}`);
    } else {
      parts.push("Saya ingin berbual tentang persediaan rumah untuk ibu bapa saya.");
    }
    return parts.join(" ");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPhoneError("");
    setErrorMsg("");

    if (!phone.trim()) {
      setPhoneError("Nombor telefon diperlukan.");
      return;
    }

    const waUrl = getWhatsAppUrl(buildPrefilled());
    window.open(waUrl, "_blank", "noopener,noreferrer");
    trackEvent("whatsapp_click", { location: "quote_form_submit_ms" });

    setFormState("submitting");

    const result = await submitLead({
      name,
      phone,
      message: message || undefined,
      packageInterest: selectedPackage || undefined,
      source: "website_quote_form_ms",
    });

    if (!result.success) {
      setErrorMsg(
        result.error || "Sesuatu tidak kena. Sila cuba semula."
      );
      setFormState("error");
      return;
    }

    trackEvent("form_submit", { source: "quote_form_ms" });
    setFormState("success");
  };

  return (
    <section id="get-a-quote" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <AnimateIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green">
                Mula sekarang
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-text sm:text-4xl lg:text-5xl">
                Beritahu kami tentang situasi anda. Pakar kami akan uruskan yang lain.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Hubungi kami dan kami akan kembali dengan pelan dan sebut harga
                yang disesuaikan dengan situasi anda.
              </p>

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

          {/* Right side — form */}
          <AnimateIn delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-warm-gray bg-white shadow-lg">
              <div className="flex items-center justify-between border-b border-warm-gray px-6 py-4">
                <p className="font-semibold text-text">
                  Bercakap dengan pakar
                </p>
                <p className="text-sm text-text-faint">Mengambil masa 1 minit</p>
              </div>

              <div className="p-6">
                {formState === "success" ? (
                  <div className="py-8 text-center">
                    <p className="font-serif text-xl text-text">
                      Kami telah terima permintaan anda! Kami akan menghubungi
                      dalam beberapa jam.
                    </p>
                    <a
                      href={emailUrl}
                      className="mt-4 inline-block text-sm font-medium text-green underline underline-offset-2 hover:opacity-80"
                    >
                      Hantar gambar melalui emel →
                    </a>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Nama anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={disabled}
                      className="rounded-lg border border-warm-gray px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-green focus:outline-none focus:ring-1 focus:ring-green disabled:opacity-50"
                    />

                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Nombor telefon"
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

                    <select
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      disabled={disabled}
                      className="rounded-lg border border-warm-gray px-4 py-2.5 text-sm text-text bg-white focus:border-green focus:outline-none focus:ring-1 focus:ring-green disabled:opacity-50"
                    >
                      <option value="">
                        Pakej mana yang menarik minat anda? (pilihan)
                      </option>
                      {packages.map((pkg) => (
                        <option key={pkg.slug} value={pkg.name}>
                          {pkg.name}
                        </option>
                      ))}
                    </select>

                    <textarea
                      placeholder="Beritahu kami tentang situasi (pilihan)"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={disabled}
                      className="rounded-lg border border-warm-gray px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-green focus:outline-none focus:ring-1 focus:ring-green disabled:opacity-50"
                    />

                    {formState === "error" && errorMsg && (
                      <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={disabled}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                    >
                      {formState === "submitting" ? (
                        <>
                          <Spinner />
                          Menghantar...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="h-4 w-4" />
                          Bercakap dengan pakar
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-text-faint">
                      Kami akan balas dalam beberapa jam. Tiada spam, tiada
                      tekanan.
                    </p>

                    <div className="border-t border-warm-gray pt-4 text-center">
                      <p className="text-xs text-text-faint">
                        Mahu hantar gambar?{" "}
                        <a
                          href={emailUrl}
                          className="font-medium text-green underline underline-offset-2"
                        >
                          Emel kami terus
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

export default function DapatkanSebuthargaPage() {
  return (
    <Suspense>
      <QuoteFormMs />
    </Suspense>
  );
}

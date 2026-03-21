"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { packages, type CarePackage } from "@/lib/packages-data";

function CheckIcon({ color }: { color: string }) {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: color }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 6L5.5 8.5L9 3.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function DashIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-200">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 6H9"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function PackageCard({
  pkg,
  delay,
}: {
  pkg: CarePackage;
  delay: number;
}) {
  const illustrationDescriptions: Record<string, string> = {
    "make-it-safe": "Parent walking safely at home",
    "help-them-move": "Family member helping parent move",
    "someone-by-their-side": "Caregiver sitting with parent",
  };

  return (
    <AnimateIn delay={delay}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg"
      >
        {/* Popular badge */}
        {pkg.popular && (
          <span
            className="absolute right-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: pkg.color }}
          >
            Most chosen
          </span>
        )}

        {/* Color bar */}
        <div
          className="h-1"
          style={{
            background: `linear-gradient(to right, ${pkg.color}, ${pkg.color}CC)`,
          }}
        />

        {/* Illustration placeholder */}
        <div
          className="flex flex-col items-center justify-center px-6 py-8"
          style={{ backgroundColor: pkg.accent }}
        >
          <span className="text-4xl">{pkg.icon}</span>
          <p className="mt-2 text-center text-xs text-text-muted">
            Warm illustration: {illustrationDescriptions[pkg.slug]}
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-2xl text-text">{pkg.name}</h3>
          <p className="mt-1 text-sm text-text-muted">{pkg.tagline}</p>

          {/* Divider */}
          <hr className="my-4 border-gray-200" />

          {/* Features */}
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            What&rsquo;s included
          </p>
          <ul className="mt-3 flex flex-col gap-2.5">
            {pkg.features.map((feature) => (
              <li key={feature.text} className="flex items-center gap-2.5">
                {feature.included ? (
                  <CheckIcon color={pkg.color} />
                ) : (
                  <DashIcon />
                )}
                <span
                  className={`text-sm ${
                    feature.included ? "text-text" : "text-gray-400"
                  }`}
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Spacer to push CTA to bottom */}
          <div className="mt-auto pt-6">
            {/* CTA Button */}
            {pkg.popular ? (
              <button
                className="w-full rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: pkg.color }}
              >
                {pkg.cta}
              </button>
            ) : (
              <button
                className="w-full rounded-full border px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
                style={{ borderColor: pkg.color, color: pkg.color }}
              >
                {pkg.cta}
              </button>
            )}

            <p className="mt-3 text-center text-xs text-text-muted">
              Setup within 48 hours
            </p>
          </div>
        </div>
      </motion.div>
    </AnimateIn>
  );
}

export function Packages() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Hi, I need help choosing a care package for my parent."
  )}`;

  return (
    <section id="packages" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green">
            Choose what they need
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-text sm:text-4xl lg:text-5xl">
            Three levels of care.
            <br />
            One less thing to worry about.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Not sure what your parent needs? Start with safety essentials and add
            support as their recovery unfolds.
          </p>
          <p className="mt-2 text-sm font-medium text-text-muted">
            All packages include assessment, delivery, and professional
            installation
          </p>
        </AnimateIn>

        {/* Cards grid */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} delay={i * 0.15} />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={0.4} className="mt-14 flex justify-center">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-7 text-center">
            <p className="font-serif text-lg text-text">
              Not sure which level your parent needs?
            </p>
            <p className="mt-1 text-sm text-text-muted">
              WhatsApp us and we&rsquo;ll help you choose.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-green px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

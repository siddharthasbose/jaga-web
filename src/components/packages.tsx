"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { packages, type CarePackage } from "@/lib/packages-data";
import { getWhatsAppUrl, waPackageMessage, WA_HELP_CHOOSE_MESSAGE } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

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
  const packageImages: Record<string, { src: string; alt: string }> = {
    "make-it-safe": { src: "/images/pkg-safe.png", alt: "Accessible bathroom with grab bars and anti-slip mats" },
    "help-them-move": { src: "/images/pkg-move.png", alt: "Bedroom with hospital bed and wheelchair" },
    "someone-by-their-side": { src: "/images/pkg-care.png", alt: "Caregiver preparing food for elderly person" },
  };

  return (
    <AnimateIn delay={delay}>
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)" }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur-2xl shadow-sm hover:shadow-xl transition-all"
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

        {/* Package image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={packageImages[pkg.slug].src}
            alt={packageImages[pkg.slug].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-2xl text-text">{pkg.name}</h3>
          <p className="mt-1 text-sm text-text-muted">{pkg.tagline}</p>

          {/* Price */}
          {pkg.priceFrom ? (
            <div className="mt-4">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                  Starts from
                </span>
                <span className="text-[10px] text-text-muted">free quote</span>
              </div>
              <p className="mt-1 font-serif text-3xl font-semibold leading-none">
                <span
                  className="text-lg font-medium"
                  style={{ color: pkg.color }}
                >
                  {pkg.priceFrom.currency}
                </span>
                <span className="ml-1" style={{ color: pkg.color }}>
                  {pkg.priceFrom.amount}
                </span>
              </p>
              <p className="mt-1.5 text-xs text-text-muted">
                Final quote after free home assessment
              </p>
            </div>
          ) : (
            <div className="mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Custom quote
              </p>
              <p className="mt-1.5 text-xs text-text-muted">
                Final quote after free home assessment
              </p>
            </div>
          )}

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
              <a
                href={getWhatsAppUrl(waPackageMessage(pkg.name))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: `package_card_${pkg.slug}` })}
                className="block w-full rounded-full px-6 py-2.5 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: pkg.color }}
              >
                {pkg.cta}
              </a>
            ) : (
              <a
                href={getWhatsAppUrl(waPackageMessage(pkg.name))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: `package_card_${pkg.slug}` })}
                className="block w-full rounded-full border px-6 py-2.5 text-center text-sm font-medium transition-opacity hover:opacity-80"
                style={{ borderColor: pkg.color, color: pkg.color }}
              >
                {pkg.cta}
              </a>
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": packages.map((pkg, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Service",
        "name": pkg.name,
        "description": pkg.tagline,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Jaga Care"
        },
        "areaServed": ["Malaysia", "Singapore"]
      }
    }))
  };

  return (
    <section id="packages" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Decorative background blobs for glassmorphism depth */}
      <div className="absolute top-1/3 -left-32 w-[30rem] h-[30rem] bg-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] bg-brown/10 rounded-full blur-[120px] pointer-events-none" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green">
            Our packages
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-text sm:text-4xl lg:text-5xl">
            3 simple packages.
            <br />
            One less thing to care about.
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
              Talk to a specialist and find a package that suits your needs.
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href={getWhatsAppUrl(WA_HELP_CHOOSE_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "packages_help_choose" })}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/50 px-6 py-2.5 text-sm font-medium text-text transition-all hover:bg-white hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to a specialist
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

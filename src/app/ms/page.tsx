"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

const ease = [0.4, 0, 0.2, 1] as const;

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6, delay: i * 0.1, ease } as const,
});

function HeroMs() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — text */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <motion.div {...stagger(0)}>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-light px-4 py-1.5 text-sm font-medium text-green">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                </span>
                Tersedia di Malaysia &amp; Singapura
              </span>
            </motion.div>

            <motion.h1
              {...stagger(1)}
              className="mt-6 font-serif text-4xl leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl"
            >
              Apabila kesihatan ibu bapa berubah secara tiba-tiba, anda{" "}
              <em className="text-green not-italic font-semibold">tidak</em>{" "}
              perlu menghadapinya seorang diri.
            </motion.h1>

            <motion.p
              {...stagger(2)}
              className="mt-4 max-w-lg text-lg leading-relaxed text-text-muted"
            >
              Kami menyediakan rumah anda untuk pemulihan dengan cepat —
              peralatan keselamatan, sokongan mobiliti, dan penjaga yang
              dipercayai disediakan dalam beberapa hari.
            </motion.p>

            <motion.div
              {...stagger(3)}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/ms/dapatkan-sebutharga"
                className="inline-flex items-center rounded-full bg-green px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-green-dark hover:shadow-lg hover:shadow-green/20"
              >
                Dapatkan sebut harga percuma →
              </Link>
              <a
                href="mailto:hello@jaga.care?subject=Pertanyaan persediaan rumah"
                className="inline-flex items-center gap-2 rounded-full border border-brown/20 px-6 py-3 text-base font-medium text-brown transition-all hover:border-brown/40 hover:bg-warm-gray/50"
              >
                <Mail className="h-4 w-4" />
                Emel kami
              </a>
            </motion.div>

            <motion.div
              {...stagger(4)}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-text-muted"
            >
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warm-gray text-base">
                  ⏱
                </span>
                Jaminan 1 minggu
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warm-gray text-base">
                  🛡️
                </span>
                Tiada kontrak
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warm-gray text-base">
                  📍
                </span>
                MY &amp; SG
              </span>
            </motion.div>
          </div>

          {/* Right — portrait photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative mx-auto w-full max-w-md md:max-w-none"
          >
            <motion.div
              style={{ y }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_-15px_rgba(45,122,107,0.3)] border border-white/50"
            >
              <Image
                src="/images/hero-portrait.png"
                alt="Penjaga membantu warga emas di rumah"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How It Works                                                       */
/* ------------------------------------------------------------------ */

const howSteps = [
  {
    number: "01",
    title: "Ambil gambar ruangan",
    description:
      "Ambil gambar bilik yang perlu diubah — bilik mandi, bilik tidur, lorong. Hantar kepada kami dan kami akan mengenal pasti apa yang diperlukan.",
    detail: "Emel atau borang",
    color: "#2D7A6B",
    accent: "#E8F5F1",
  },
  {
    number: "02",
    title: "Dapatkan cadangan anda",
    description:
      "Pelan penjagaan yang disesuaikan tiba dalam 48 jam. Baca mengikut kadar anda — tiada tekanan. Ada soalan atau perubahan? Balas dan kami akan sesuaikan.",
    detail: "Tiada obligasi · balas untuk sesuaikan",
    color: "#1A5F7A",
    accent: "#E3F0F7",
  },
  {
    number: "03",
    title: "Pilih tarikh anda",
    description:
      "Pilih tarikh dan masa yang sesuai untuk keluarga anda. Kami bekerja mengikut jadual keluar hospital.",
    detail: "Jadual fleksibel",
    color: "#C27A2A",
    accent: "#FFF4E6",
  },
  {
    number: "04",
    title: "Rumah siap dalam 1 minggu",
    description:
      "Kontraktor bertauliah Jaga mengubah suai dan memasang segala-galanya. Jika tidak siap dalam satu minggu, anda dapat diskaun 20%.",
    detail: "Jaminan 1 minggu atau diskaun 20%",
    color: "#6B4C8A",
    accent: "#F0EBF5",
  },
];

const timelineLabels = ["Hari 1", "48 jam", "Anda pilih", "Dalam 1 minggu"];

function CameraIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function ClipboardCheckIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function CalendarIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function HomeCheckIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  );
}

const stepIcons = [CameraIcon, ClipboardCheckIcon, CalendarIcon, HomeCheckIcon];

function HowItWorksMs() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-1/2 -left-20 w-[40rem] h-[40rem] bg-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[40rem] h-[40rem] bg-brown/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-green">
            Cara ia berfungsi
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-text sm:text-4xl lg:text-5xl">
            Dari gambar ke rumah yang lengkap dalam satu minggu.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-text-muted">
            Anda fokus pada ibu bapa anda. Kami uruskan yang lain.
          </p>
        </AnimateIn>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howSteps.map((step, i) => {
            const Icon = stepIcons[i];
            const isHovered = hoveredStep === i;

            return (
              <AnimateIn key={step.number} delay={i * 0.1} className="flex">
                <motion.div
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  whileHover={{ y: -8, boxShadow: `0 24px 48px -12px ${step.color}30` }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="flex w-full flex-col rounded-2xl border border-white/60 bg-white/70 backdrop-blur-2xl p-6 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <motion.span
                      animate={{ y: isHovered ? -4 : 0, opacity: isHovered ? 0.3 : 0.2 }}
                      transition={{ duration: 0.3 }}
                      className="font-serif text-3xl transition-colors"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </motion.span>
                    <motion.div
                      animate={{ y: isHovered ? -4 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl shadow-sm border border-white/40"
                      style={{ backgroundColor: step.accent }}
                    >
                      <Icon color={step.color} />
                    </motion.div>
                  </div>

                  <h3 className="mt-4 font-serif text-xl text-text">
                    {step.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>

                  <div className="mt-4">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-white/50 border border-white/50 shadow-sm transition-colors"
                      style={{ color: step.color }}
                    >
                      <motion.span
                        animate={{ scale: isHovered ? [1, 1.5, 1] : 1 }}
                        transition={{ repeat: isHovered ? Infinity : 0, duration: 2 }}
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: step.color }}
                      />
                      {step.detail}
                    </span>
                  </div>
                </motion.div>
              </AnimateIn>
            );
          })}
        </div>

        {/* Timeline bar */}
        <AnimateIn delay={0.4} className="mt-12 hidden md:block">
          <div className="mx-auto max-w-3xl">
            <div className="relative flex items-center justify-between">
              <motion.div
                className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 overflow-hidden rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #2D7A6B, #1A5F7A, #C27A2A, #6B4C8A, #2D7A6B, #1A5F7A)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["0% 50%", "-100% 50%"] }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              />

              {howSteps.map((step, i) => {
                const isHovered = hoveredStep === i;
                return (
                  <div key={step.number} className="relative flex flex-col items-center">
                    <div
                      className="relative cursor-pointer py-4"
                      onMouseEnter={() => setHoveredStep(i)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.5 : 1,
                          boxShadow: isHovered
                            ? `0 0 20px ${step.color}80`
                            : `0 0 0px transparent`,
                        }}
                        className="relative z-10 h-4 w-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: step.color }}
                      />
                    </div>
                    <motion.span
                      animate={{
                        fontWeight: isHovered ? 700 : 500,
                        opacity: isHovered ? 1 : 0.8,
                      }}
                      className="mt-1 text-xs transition-colors"
                      style={{ color: step.color }}
                    >
                      {timelineLabels[i]}
                    </motion.span>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateIn>

        {/* Bottom CTA */}
        <AnimateIn delay={0.5} className="mt-16 flex justify-center">
          <div className="w-full max-w-md rounded-3xl bg-[#1A5F7A] px-8 py-10 text-center shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="relative z-10 font-serif text-2xl text-white">
              Bersedia untuk bermula?
            </h3>
            <p className="relative z-10 mt-3 text-sm text-white/80">
              Beritahu kami tentang situasi anda dan kami akan uruskan.
            </p>
            <div className="relative z-10 mt-6 flex justify-center">
              <Link
                href="/ms/dapatkan-sebutharga"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1A5F7A] transition-all hover:bg-white/90 hover:shadow-lg hover:-translate-y-1"
              >
                Dapatkan sebut harga percuma →
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Packages                                                           */
/* ------------------------------------------------------------------ */

interface PackageFeatureMs {
  text: string;
  included: boolean;
}

interface CarePackageMs {
  slug: string;
  name: string;
  tagline: string;
  color: string;
  accent: string;
  features: PackageFeatureMs[];
  popular: boolean;
  cta: string;
  priceFrom?: { currency: string; amount: string };
}

const packagesMs: CarePackageMs[] = [
  {
    slug: "make-it-safe",
    name: "Jadikan selamat",
    tagline: "Untuk mereka yang kebanyakannya berdikari tetapi berisiko",
    color: "#2D7A6B",
    accent: "#E8F5F1",
    features: [
      { text: "Palang pegangan bilik mandi", included: true },
      { text: "Alas anti-gelincir", included: true },
      { text: "Kerusi mandi", included: true },
      { text: "Kamera di kawasan umum", included: true },
      { text: "Katil rendah / mudah diakses", included: true },
      { text: "Katil hospital", included: false },
      { text: "Kerusi roda", included: false },
      { text: "Penjaga khusus", included: false },
    ],
    cta: "Mula sekarang",
    popular: false,
    priceFrom: { currency: "RM", amount: "2,274" },
  },
  {
    slug: "help-them-move",
    name: "Bantu mereka bergerak",
    tagline: "Untuk mereka yang mobiliti berkurang dengan ketara",
    color: "#1A5F7A",
    accent: "#E3F0F7",
    features: [
      { text: "Palang pegangan bilik mandi", included: true },
      { text: "Alas anti-gelincir", included: true },
      { text: "Kerusi mandi", included: true },
      { text: "Kamera di kawasan umum", included: true },
      { text: "Katil rendah / mudah diakses", included: true },
      { text: "Katil hospital", included: true },
      { text: "Kerusi roda", included: true },
      { text: "Penjaga khusus", included: false },
    ],
    cta: "Mula sekarang",
    popular: true,
  },
  {
    slug: "someone-by-their-side",
    name: "Seseorang di sisi mereka",
    tagline: "Untuk mereka yang memerlukan sokongan harian",
    color: "#6B4C8A",
    accent: "#F0EBF5",
    features: [
      { text: "Palang pegangan bilik mandi", included: true },
      { text: "Alas anti-gelincir", included: true },
      { text: "Kerusi mandi", included: true },
      { text: "Kamera di kawasan umum", included: true },
      { text: "Katil rendah / mudah diakses", included: true },
      { text: "Katil hospital", included: true },
      { text: "Kerusi roda", included: true },
      { text: "Penjaga khusus", included: true },
    ],
    cta: "Mula sekarang",
    popular: false,
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: color }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6L5.5 8.5L9 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function DashIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-200">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H9" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function PackageCardMs({ pkg, delay }: { pkg: CarePackageMs; delay: number }) {
  const packageImages: Record<string, { src: string; alt: string }> = {
    "make-it-safe": {
      src: "/images/pkg-safe.png",
      alt: "Bilik mandi yang boleh diakses dengan palang pegangan dan alas anti-gelincir",
    },
    "help-them-move": {
      src: "/images/pkg-move.png",
      alt: "Bilik tidur dengan katil hospital dan kerusi roda",
    },
    "someone-by-their-side": {
      src: "/images/pkg-care.png",
      alt: "Penjaga menyediakan makanan untuk warga emas",
    },
  };

  return (
    <AnimateIn delay={delay}>
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)" }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur-2xl shadow-sm hover:shadow-xl transition-all"
      >
        {pkg.popular && (
          <span
            className="absolute right-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: pkg.color }}
          >
            Paling dipilih
          </span>
        )}

        <div
          className="h-1"
          style={{
            background: `linear-gradient(to right, ${pkg.color}, ${pkg.color}CC)`,
          }}
        />

        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={packageImages[pkg.slug].src}
            alt={packageImages[pkg.slug].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-2xl text-text">{pkg.name}</h3>
          <p className="mt-1 text-sm text-text-muted">{pkg.tagline}</p>

          {/* Harga */}
          {pkg.priceFrom ? (
            <div className="mt-4">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                  Bermula dari
                </span>
                <span className="text-[10px] text-text-muted">
                  sebut harga percuma
                </span>
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
                Sebut harga muktamad selepas penilaian rumah percuma
              </p>
            </div>
          ) : (
            <div className="mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Sebut harga khusus
              </p>
              <p className="mt-1.5 text-xs text-text-muted">
                Sebut harga muktamad selepas penilaian rumah percuma
              </p>
            </div>
          )}

          <hr className="my-4 border-gray-200" />

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Apa yang termasuk
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

          <div className="mt-auto pt-6">
            {pkg.popular ? (
              <Link
                href={`/ms/dapatkan-sebutharga?package=${pkg.slug}`}
                className="block w-full rounded-full px-6 py-2.5 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: pkg.color }}
              >
                {pkg.cta}
              </Link>
            ) : (
              <Link
                href={`/ms/dapatkan-sebutharga?package=${pkg.slug}`}
                className="block w-full rounded-full border px-6 py-2.5 text-center text-sm font-medium transition-opacity hover:opacity-80"
                style={{ borderColor: pkg.color, color: pkg.color }}
              >
                {pkg.cta}
              </Link>
            )}

            <p className="mt-3 text-center text-xs text-text-muted">
              Pemasangan dalam 48 jam
            </p>
          </div>
        </div>
      </motion.div>
    </AnimateIn>
  );
}

function PackagesMs() {
  return (
    <section id="packages" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="absolute top-1/3 -left-32 w-[30rem] h-[30rem] bg-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] bg-brown/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green">
            Pakej kami
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-text sm:text-4xl lg:text-5xl">
            3 pakej mudah.
            <br />
            Satu perkara kurang untuk difikirkan.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Tidak pasti apa yang ibu bapa anda perlukan? Mulakan dengan asas
            keselamatan dan tambah sokongan mengikut pemulihan mereka.
          </p>
          <p className="mt-2 text-sm font-medium text-text-muted">
            Semua pakej termasuk penilaian, penghantaran, dan pemasangan
            profesional
          </p>
        </AnimateIn>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {packagesMs.map((pkg, i) => (
            <PackageCardMs key={pkg.slug} pkg={pkg} delay={i * 0.15} />
          ))}
        </div>

        <AnimateIn delay={0.4} className="mt-14 flex justify-center">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-7 text-center">
            <p className="font-serif text-lg text-text">
              Tidak pasti tahap mana yang diperlukan?
            </p>
            <p className="mt-1 text-sm text-text-muted">
              Emel kami dan kami akan bantu anda memilih.
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="mailto:hello@jaga.care?subject=Bantu saya pilih pakej"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/50 px-6 py-2.5 text-sm font-medium text-text transition-all hover:bg-white hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                Emel kami
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

function QuoteCta() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <AnimateIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-green">
            Mula sekarang
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-text sm:text-4xl lg:text-5xl">
            Hantar gambar ruangan anda. Kami uruskan yang lain.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Isi borang ringkas dan kami akan kembali dengan pelan dan sebut harga dalam 48 jam.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/ms/dapatkan-sebutharga"
              className="inline-flex items-center rounded-full bg-green px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-green-dark hover:shadow-lg hover:shadow-green/20"
            >
              Dapatkan sebut harga percuma →
            </Link>
            <a
              href="mailto:hello@jaga.care?subject=Pertanyaan persediaan rumah"
              className="inline-flex items-center gap-2 rounded-full border border-brown/20 px-6 py-3 text-base font-medium text-brown transition-all hover:border-brown/40 hover:bg-warm-gray/50"
            >
              <Mail className="h-4 w-4" />
              Emel kami
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export default function MsHomePage() {
  return (
    <>
      <HeroMs />
      <HowItWorksMs />
      <PackagesMs />
      <QuoteCta />
    </>
  );
}

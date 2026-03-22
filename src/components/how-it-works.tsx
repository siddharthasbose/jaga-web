"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/animate-in";
import Link from "next/link";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Snap your space",
    description:
      "Take photos of the rooms that need changes — bathrooms, bedrooms, hallways. Send them to us and we'll identify what's needed.",
    detail: "Email or form",
    color: "#2D7A6B",
    accent: "#E8F5F1",
  },
  {
    number: "02",
    title: "Get your proposal",
    description:
      "Jaga sends a detailed proposal and quote within 48 hours. Not happy with the design or price? We'll adjust the plan until it's right for you.",
    detail: "Revise until you're happy",
    color: "#1A5F7A",
    accent: "#E3F0F7",
  },
  {
    number: "03",
    title: "Pick your date",
    description:
      "Choose the date and time that works for your family. We work around hospital discharge schedules.",
    detail: "Flexible scheduling",
    color: "#C27A2A",
    accent: "#FFF4E6",
  },
  {
    number: "04",
    title: "Home ready in 1 week",
    description:
      "Jaga-certified contractors renovate and set up everything. Your parent comes home to a safe space. If we don't finish in one week, you get 20% off.",
    detail: "1-week guarantee or 20% off",
    color: "#6B4C8A",
    accent: "#F0EBF5",
  },
];

const timelineLabels = ["Day 1", "48 hours", "You choose", "Within 1 week"];

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

export function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      {/* Decorative background blobs for glassmorphism */}
      <div className="absolute top-1/2 -left-20 w-[40rem] h-[40rem] bg-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[40rem] h-[40rem] bg-brown/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-green">
            How it works
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-text sm:text-4xl lg:text-5xl">
            From photos to an equipped home in one week.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-text-muted">
            You focus on your parent. We handle everything else.
          </p>
        </AnimateIn>

        {/* Step cards — grid for equal heights */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
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
                  {/* Top row: number + icon */}
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

                  {/* Title */}
                  <h3 className="mt-4 font-serif text-xl text-text">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>

                  {/* Detail pill */}
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

        {/* Timeline bar — hidden on mobile */}
        <AnimateIn delay={0.4} className="mt-12 hidden md:block">
          <div className="mx-auto max-w-3xl">
            <div className="relative flex items-center justify-between">
              {/* Gradient line */}
              <motion.div
                className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 overflow-hidden rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #2D7A6B, #1A5F7A, #C27A2A, #6B4C8A, #2D7A6B, #1A5F7A)",
                  backgroundSize: "200% 100%"
                }}
                animate={{ backgroundPosition: ["0% 50%", "-100% 50%"] }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              />

              {steps.map((step, i) => {
                const isHovered = hoveredStep === i;
                return (
                  <div key={step.number} className="relative flex flex-col items-center">
                    {/* Dot */}
                    <div className="relative cursor-pointer py-4" onMouseEnter={() => setHoveredStep(i)} onMouseLeave={() => setHoveredStep(null)}>
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.5 : 1,
                          boxShadow: isHovered ? `0 0 20px ${step.color}80` : `0 0 0px transparent`
                        }}
                        className="relative z-10 h-4 w-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: step.color }}
                      />
                    </div>
                    {/* Label */}
                    <motion.span
                      animate={{
                        fontWeight: isHovered ? 700 : 500,
                        opacity: isHovered ? 1 : 0.8
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
              Ready to get started?
            </h3>
            <p className="relative z-10 mt-3 text-sm text-white/80">
              Tell us about your situation and we&rsquo;ll take it from there.
            </p>
            <div className="relative z-10 mt-6 flex justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1A5F7A] transition-all hover:bg-white/90 hover:shadow-lg hover:-translate-y-1"
              >
                Get a free quote →
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

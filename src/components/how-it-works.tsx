"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/animate-in";
import { WhatsAppButton } from "@/components/whatsapp-button";

const steps = [
  {
    number: "01",
    title: "Snap your space",
    description:
      "Take photos of the rooms that need changes — bathrooms, bedrooms, hallways. Send them to us on WhatsApp and we'll identify what's needed.",
    detail: "Send via WhatsApp",
    color: "#2D7A6B",
    accent: "#E8F5F1",
  },
  {
    number: "02",
    title: "Get your proposal",
    description:
      "Jaga sends a detailed proposal and quote within 48 hours. Not happy with the design or price? Chat with us on WhatsApp to adjust the plan until it's right for you.",
    detail: "Fully flexible — revise until you're happy",
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

function ChevronRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text-faint hidden md:block flex-shrink-0"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text-faint md:hidden flex-shrink-0"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-green">
            How it works
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-text sm:text-4xl lg:text-5xl">
            From photos to a safe home. Four steps. One week.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-text-muted">
            You focus on your parent. We handle everything else.
          </p>
        </AnimateIn>

        {/* Step cards */}
        <div className="mt-16 flex flex-col items-center gap-5 md:flex-row md:justify-center">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={step.number} className="flex flex-col items-center gap-5 md:flex-row">
                <AnimateIn delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-w-xs rounded-xl border border-warm-gray bg-white p-6 transition-shadow"
                  >
                    {/* Top row: number + icon */}
                    <div className="flex items-start justify-between">
                      <span
                        className="font-serif text-3xl opacity-20"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ backgroundColor: step.accent }}
                      >
                        <Icon color={step.color} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-serif text-xl text-text">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {step.description}
                    </p>

                    {/* Detail pill */}
                    <div className="mt-4">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: step.accent,
                          color: step.color,
                        }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: step.color }}
                        />
                        {step.detail}
                      </span>
                    </div>
                  </motion.div>
                </AnimateIn>

                {/* Connector: right chevron on desktop, down chevron on mobile */}
                {i < steps.length - 1 && (
                  <div className="flex items-center justify-center">
                    <ChevronRight />
                    <ChevronDown />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Timeline bar — hidden on mobile */}
        <AnimateIn delay={0.4} className="mt-12 hidden md:block">
          <div className="mx-auto max-w-3xl">
            <div className="relative flex items-center justify-between">
              {/* Gradient line */}
              <div
                className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(to right, #2D7A6B, #1A5F7A, #C27A2A, #6B4C8A)",
                }}
              />

              {steps.map((step, i) => (
                <div key={step.number} className="relative flex flex-col items-center">
                  {/* Dot */}
                  <div
                    className="relative z-10 h-4 w-4 rounded-full border-2 border-white"
                    style={{ backgroundColor: step.color }}
                  />
                  {/* Label */}
                  <span
                    className="mt-2 text-xs font-medium"
                    style={{ color: step.color }}
                  >
                    {timelineLabels[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Bottom CTA */}
        <AnimateIn delay={0.5} className="mt-16 flex justify-center">
          <div className="w-full max-w-md rounded-2xl bg-[#1A5F7A] px-8 py-10 text-center">
            <h3 className="font-serif text-2xl text-white">
              Ready to get started?
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Send us photos of your space on WhatsApp. We&rsquo;ll take it from
              there.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton
                text="Send photos on WhatsApp"
                prefilledMessage="Hi, I'd like to send photos of my space to get started."
                variant="filled"
              />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

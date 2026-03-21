"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CheckCircle, Clock } from "lucide-react";

const ease = [0.4, 0, 0.2, 1] as const;

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6, delay: i * 0.1, ease } as const,
});

export function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — text */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {/* Badge */}
            <motion.div {...stagger(0)}>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-light px-4 py-1.5 text-sm font-medium text-green">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                </span>
                Available in Malaysia &amp; Singapore
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...stagger(1)}
              className="mt-6 font-serif text-4xl leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl"
            >
              Home <em className="text-green italic">ready</em> before they are.
            </motion.h1>

            {/* Description */}
            <motion.p
              {...stagger(2)}
              className="mt-4 max-w-lg text-lg leading-relaxed text-text-muted"
            >
              Your parent is coming home from hospital. We set up grab bars,
              hospital beds, and safety equipment — so the house is ready before
              discharge.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...stagger(3)}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/get-a-quote"
                className="inline-flex items-center rounded-full bg-green px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-dark"
              >
                Get a free quote →
              </Link>
              <WhatsAppButton
                text="WhatsApp us"
                prefilledMessage="Hi, I need help setting up my home for my parent coming back from hospital."
              />
            </motion.div>

            {/* Trust row */}
            <motion.div
              {...stagger(4)}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-text-muted"
            >
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warm-gray text-base">
                  ⏱
                </span>
                1-week setup guarantee
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warm-gray text-base">
                  🛡️
                </span>
                No contracts
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warm-gray text-base">
                  📍
                </span>
                MY &amp; SG
              </span>
            </motion.div>
          </div>

          {/* Right — photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative mx-auto w-full max-w-md md:max-w-none"
          >
            <div
              className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl"
              style={{
                background: "linear-gradient(to bottom, #D4C5B5, #9C8878)",
              }}
            >
              {/* Glassmorphic caption card at bottom */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-white/30 p-4 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green" />
                  <span className="font-medium text-text">Setup complete</span>
                </div>
                <p className="mt-1 text-sm text-text-muted">
                  Bathroom &amp; bedroom — 2 days
                </p>
              </div>
            </div>

            {/* Floating card — hidden on mobile */}
            <div className="absolute -top-4 -right-4 hidden rounded-2xl border border-warm-gray bg-white p-4 shadow-lg md:block">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green" />
                <span className="text-sm font-medium text-text">
                  Setup time
                </span>
              </div>
              <p className="mt-1 text-2xl font-bold text-green">48h</p>
              <p className="text-xs text-text-muted">
                Call to fully equipped home
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

const ease = [0.4, 0, 0.2, 1] as const;

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6, delay: i * 0.1, ease } as const,
});

export function Hero() {
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
                Available in Malaysia &amp; Singapore
              </span>
            </motion.div>

            <motion.h1
              {...stagger(1)}
              className="mt-6 font-serif text-4xl leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl"
            >
              When a parent&apos;s health changes overnight, you{" "}
              <em className="text-green not-italic font-semibold">don&apos;t</em>{" "}
              have to figure it out alone.
            </motion.h1>

            <motion.p
              {...stagger(2)}
              className="mt-4 max-w-lg text-lg leading-relaxed text-text-muted"
            >
              We prepare your home for recovery quickly — safety equipment,
              mobility support, and trusted caregivers set up in days, not weeks.
            </motion.p>

            <motion.div
              {...stagger(3)}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/get-a-quote"
                className="inline-flex items-center rounded-full bg-green px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-green-dark hover:shadow-lg hover:shadow-green/20"
              >
                Get a free quote →
              </Link>
              <a
                href="mailto:hello@jaga.care?subject=Home setup enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-brown/20 px-6 py-3 text-base font-medium text-brown transition-all hover:border-brown/40 hover:bg-warm-gray/50"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
            </motion.div>

            <motion.div
              {...stagger(4)}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-text-muted"
            >
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warm-gray text-base">⏱</span>
                1-week guarantee
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warm-gray text-base">🛡️</span>
                No contracts
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warm-gray text-base">📍</span>
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
            <motion.div style={{ y }} className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_-15px_rgba(45,122,107,0.3)] border border-white/50">
              <Image
                src="/images/hero-portrait.png"
                alt="Caregiver helping elderly person at home"
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

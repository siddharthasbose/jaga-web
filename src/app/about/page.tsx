import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";

export const metadata: Metadata = {
  title: "About — Why Jaga Exists",
  description:
    "We built Jaga because we've been where you are. When a parent's health changes overnight, no one tells you what to do next. We're here to fix that.",
  keywords: [
    "about jaga care",
    "home healthcare Malaysia",
    "home healthcare Singapore",
    "elderly care story",
    "caregiver support",
    "penjagaan warga emas",
  ],
};

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* Hero — The Origin */}
      <section className="bg-cream py-20 px-6 md:px-12 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-text">
              We built this because we&apos;ve been{" "}
              <em className="text-green not-italic font-semibold">
                where you are
              </em>
              .
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-2xl">
              Someone you love is in the hospital. Or maybe they just came home.
              The doctors say they&apos;re stable, but the house isn&apos;t
              ready. The bathroom isn&apos;t safe. You don&apos;t have a bed
              that adjusts. You&apos;re not sure what equipment you need, who to
              call, or where to start.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-4 text-lg leading-relaxed text-text-muted max-w-2xl">
              You&apos;re googling &ldquo;grab bars Malaysia&rdquo; at 2am.
              You&apos;re calling vendors who don&apos;t pick up. You&apos;re
              second-guessing every decision because there&apos;s no one to tell
              you if you&apos;re doing this right.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="mt-4 text-lg leading-relaxed text-text font-medium">
              We know. We&apos;ve done it too.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* The Gap */}
      <section className="bg-warm-gray py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-text mb-8">
              The system sends them home and assumes you&apos;ll figure it out.
            </h2>
          </AnimateIn>
          <div className="space-y-4 text-text-muted text-lg leading-relaxed">
            <AnimateIn delay={0.1}>
              <p>
                Hospitals are built to stabilise. Not to prepare you for what
                happens next. The moment your parent is discharged, you become
                the project manager for a home renovation you never planned —
                under pressure, with no experience, while trying to be present
                for the person who needs you most.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p>
                There&apos;s no single place to go. No checklist that actually
                works. You end up coordinating fifteen different vendors, reading
                forums at midnight, buying things you don&apos;t need and
                missing things you do. The people who should be focused on their
                parent are instead drowning in logistics.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="text-text font-medium">
                That gap — between hospital and home — is where families fall
                through. Jaga exists to close it.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-cream py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-text mb-12">
              What we believe
            </h2>
          </AnimateIn>
          <div className="space-y-8">
            {[
              {
                belief: "No family should have to figure this out alone.",
                detail:
                  "The information exists. The equipment exists. The people who can help exist. Someone just needs to put it all together.",
              },
              {
                belief: "Coming home should feel safe, not scary.",
                detail:
                  "A parent coming home from hospital should be a relief, not the start of a new crisis. The home should be ready before they are.",
              },
              {
                belief: "Care starts before the caregiver arrives.",
                detail:
                  "The grab bar in the bathroom. The bed that adjusts. The non-slip mat by the door. These things save lives quietly, every day.",
              },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="border-l-2 border-green/30 pl-6">
                  <p className="text-xl font-medium text-text">{item.belief}</p>
                  <p className="mt-2 text-text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="bg-warm-gray py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-text mb-6">
              Who we are
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-lg leading-relaxed text-text-muted">
              We&apos;re a small team across Malaysia and Singapore — people
              who&apos;ve sat in hospital waiting rooms, argued with insurance,
              and assembled furniture at midnight because a parent was coming
              home the next morning.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Some of us come from healthcare. Some from logistics. All of us
              have been the person on the other end of that phone call — the one
              where someone says &ldquo;they&apos;re discharging mum
              tomorrow&rdquo; and you realise the house isn&apos;t ready.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="mt-4 text-lg leading-relaxed text-text font-medium">
              We built Jaga so the next family doesn&apos;t have to go through
              what we did.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-text">
              Let us help.
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Tell us about your situation. We&apos;ll take it from there.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="mt-8">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center rounded-full bg-green px-8 py-4 text-base font-medium text-white transition-all hover:bg-green-dark hover:shadow-lg hover:shadow-green/20"
              >
                Get a free quote →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}

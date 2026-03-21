import { Metadata } from "next";
import { HowItWorks } from "@/components/how-it-works";
import { AnimateIn } from "@/components/animate-in";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works — Home Safety Setup in 1 Week",
  description: "Four simple steps: snap your space, get a proposal, pick your date, home ready in 1 week. Serving families in Malaysia and Singapore.",
};

export default function HowItWorksPage() {
  return (
    <main id="main-content">
      <HowItWorks />
      {/* Additional SEO content section */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-3xl text-text mb-6">Why families trust Jaga</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>When a parent is discharged from hospital, families face an overwhelming task: making the home safe for recovery. From installing grab bars in bathrooms to setting up hospital beds, the logistics can take days or weeks — time you don't have.</p>
              <p>Jaga handles everything. Our certified contractors transform your home within one week, or you get 20% off. We serve families across Malaysia and Singapore with professional assessment, equipment sourcing, delivery, and installation.</p>
              <p>Whether your parent needs basic fall prevention or full-time caregiver support, we have a package that fits. And if you're not sure what's needed, just send us photos of the space — we'll recommend the right level of care.</p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-12 text-center">
              <Link href="/get-a-quote" className="inline-block bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl text-base font-medium transition-all">
                Get a free quote →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}

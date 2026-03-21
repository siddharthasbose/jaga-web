import { Metadata } from "next";
import { packages } from "@/lib/packages-data";
import { AnimateIn } from "@/components/animate-in";
import { Check } from "lucide-react";
import Link from "next/link";

const pkg = packages.find(p => p.slug === "help-them-move")!;

export const metadata: Metadata = {
  title: "Help Them Move — Hospital Bed & Mobility Equipment Rental",
  description: "Hospital bed rental, wheelchair, grab bars, and full mobility equipment setup at home. For parents recovering from stroke or surgery. Malaysia & Singapore.",
  keywords: [
    "hospital bed rental Malaysia", "hospital bed rental Singapore",
    "wheelchair rental Malaysia", "wheelchair rental Singapore",
    "home hospital bed setup", "mobility equipment elderly",
    "stroke recovery home setup", "post surgery home care",
    "sewa katil hospital Malaysia", "kerusi roda sewa Malaysia",
    "hip replacement home setup", "reduced mobility elderly home",
    "medical equipment rental home", "home recovery equipment",
  ],
};

export default function HelpThemMovePage() {
  return (
    <main id="main-content" className="bg-cream">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 md:px-12" style={{ background: `linear-gradient(180deg, ${pkg.accent}, var(--color-cream))` }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <div className="text-5xl mb-4">{pkg.icon}</div>
            <h1 className="font-serif text-4xl md:text-5xl text-text mb-4">{pkg.name}</h1>
            <p className="text-lg text-text-muted">{pkg.tagline}</p>
          </AnimateIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-text mb-8">What&apos;s included</h2>
            <div className="space-y-4">
              {pkg.features.filter(f => f.included).map(f => (
                <div key={f.text} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-warm-gray/50">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${pkg.color}15` }}>
                    <Check size={14} style={{ color: pkg.color }} />
                  </div>
                  <div>
                    <p className="font-medium text-text">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 px-6 md:px-12 bg-warm-gray/30">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-text mb-4">Who this is for</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This package is designed for parents with significantly reduced mobility — after a stroke, hip replacement, or major surgery. When your parent needs a hospital bed, wheelchair, and comprehensive safety modifications throughout the home, Help them move provides the full equipment setup. It bridges the gap between basic safety and round-the-clock care, giving your parent the tools to move through their home with dignity and support.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 text-center">
        <AnimateIn>
          <Link href="/get-a-quote" className="inline-block bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl text-base font-medium transition-all">
            Get a free quote for {pkg.name} →
          </Link>
          <p className="text-sm text-text-faint mt-3">Setup within 48 hours · No contracts</p>
        </AnimateIn>
      </section>
    </main>
  );
}

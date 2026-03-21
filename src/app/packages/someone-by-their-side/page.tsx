import { Metadata } from "next";
import { packages } from "@/lib/packages-data";
import { AnimateIn } from "@/components/animate-in";
import { Check } from "lucide-react";
import Link from "next/link";

const pkg = packages.find(p => p.slug === "someone-by-their-side")!;

export const metadata: Metadata = {
  title: "Someone By Their Side — Full Care with Dedicated Caregiver",
  description: "Complete home safety setup with a dedicated caregiver for hands-on daily support. For parents recovering from major surgery or with cognitive decline. Malaysia & Singapore.",
};

export default function SomeoneByTheirSidePage() {
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
              This package is for parents who need daily hands-on support — whether they&apos;re recovering from major surgery, living with advanced age-related conditions, or experiencing cognitive decline. Someone by their side includes everything in our other packages plus a dedicated caregiver who provides personal assistance with daily activities, medication reminders, and companionship. It&apos;s the right choice when your family needs more than equipment — when your parent needs a trusted person by their side.
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

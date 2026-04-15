import { Metadata } from "next";
import { packages } from "@/lib/packages-data";
import { AnimateIn } from "@/components/animate-in";
import { Check } from "lucide-react";
import Link from "next/link";

const pkg = packages.find(p => p.slug === "help-them-move")!;

export const metadata: Metadata = {
  title: "Help Them Move — Hospital Bed & Mobility Equipment Rental",
  description: "Hospital bed rental, wheelchair, grab bars, and full mobility equipment setup at home. For parents recovering from stroke or surgery. Malaysia & Singapore.",
  alternates: {
    canonical: "https://jaga.care/packages/help-them-move",
  },
  keywords: [
    "hospital bed rental Malaysia", "hospital bed rental Singapore",
    "wheelchair rental Malaysia", "wheelchair rental Singapore",
    "home hospital bed setup", "mobility equipment elderly",
    "stroke recovery home setup", "post surgery home care",
    "sewa katil hospital Malaysia", "kerusi roda sewa Malaysia",
    "hip replacement home setup", "reduced mobility elderly home",
    "medical equipment rental home", "home recovery equipment",
    "medical equipment rental malaysia", "home setup for bedridden patient",
  ],
};

const featureDetails = [
  {
    title: "Grab bars in bathrooms",
    description: "Stainless steel grab bars professionally mounted beside the toilet, shower, and bathtub. Positioned for your parent's specific height, reach, and the way they transfer from a wheelchair.",
  },
  {
    title: "Anti-slip mats in bathrooms",
    description: "Medical-grade anti-slip mats custom-fitted to your bathroom floor. Essential when your parent is transferring between a wheelchair and the shower or toilet.",
  },
  {
    title: "Shower chair",
    description: "A sturdy, height-adjustable shower chair with non-slip rubber feet. For parents with reduced mobility, bathing seated removes the highest-risk fall scenario in the home. Sized and fitted based on your parent's weight and transfer needs.",
  },
  {
    title: "Cameras in common areas",
    description: "Safety cameras in living areas and hallways with night vision and phone alerts. Monitor your parent's movement patterns and get notified of unusual activity. Bedrooms and bathrooms are never monitored.",
  },
  {
    title: "Low / accessible bed setup",
    description: "If your parent still prefers their own bed, we adjust it to a safe transfer height and add bedrails and non-slip mats. For parents who need a hospital bed, this becomes a backup option for other rooms.",
  },
  {
    title: "Hospital bed",
    description: "A fully adjustable hospital bed with electric head and foot elevation, side rails, and a pressure-relief mattress. We deliver, assemble, and position it in the right room. The bed is rented monthly — no large upfront cost. When your parent no longer needs it, we collect it.",
  },
  {
    title: "Wheelchair",
    description: "A lightweight, foldable wheelchair sized for your parent and your home. We measure doorways and hallways to make sure it fits. Includes footrests, cushion, and brakes. Rented monthly alongside the hospital bed.",
  },
];

const faqs = [
  {
    question: "How much does hospital bed rental cost?",
    answer: "Hospital bed rental is included in the Help Them Move package as a monthly rental. The exact cost depends on the bed type (manual vs. electric) and rental duration. Request a free quote and we'll provide a detailed breakdown with no obligation.",
  },
  {
    question: "What happens if my parent no longer needs the equipment?",
    answer: "You can end the rental at any time with 7 days' notice. We'll collect the hospital bed, wheelchair, and any other rented equipment from your home at no extra charge. There are no long-term contracts or early termination fees.",
  },
  {
    question: "Can the hospital bed fit through my doorways?",
    answer: "Before delivery, we measure your doorways, corridors, and the room where the bed will be placed. Standard hospital beds fit through most Malaysian and Singaporean home doorways (minimum 75cm). If access is tight, we have narrower models available.",
  },
  {
    question: "How is this different from renting from MedBed or iElder?",
    answer: "Equipment retailers deliver a bed. We set up your entire home. That means the bed, plus grab bars, anti-slip mats, cameras, and accessible bed modifications — all installed professionally in a single visit. You don't need to coordinate multiple vendors.",
  },
  {
    question: "What if my parent's condition improves or worsens?",
    answer: "You can downgrade to Make it safe (keep the safety modifications, return the equipment) or upgrade to Someone by their side (add a dedicated caregiver). We credit previous work so you only pay the difference.",
  },
  {
    question: "Do you deliver on weekends?",
    answer: "Yes. We schedule around hospital discharge dates, including weekends and public holidays. Many families need the home ready the same day their parent leaves hospital — we accommodate that.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Help Them Move — Hospital Bed & Mobility Equipment Rental",
  provider: {
    "@type": "LocalBusiness",
    name: "Jaga.Care",
    url: "https://jaga.care",
  },
  description: "Hospital bed rental, wheelchair, grab bars, and full home mobility setup for parents recovering from stroke or surgery in Malaysia and Singapore.",
  areaServed: [
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Country", name: "Singapore" },
  ],
  serviceType: "Home Mobility Equipment Rental & Setup",
};

export default function HelpThemMovePage() {
  return (
    <main id="main-content" className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 px-6 md:px-12" style={{ background: `linear-gradient(180deg, ${pkg.accent}, var(--color-cream))` }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <div className="text-5xl mb-4">{pkg.icon}</div>
            <h1 className="font-serif text-4xl md:text-5xl text-text mb-4">{pkg.name}</h1>
            <p className="text-lg text-text-muted">{pkg.tagline}</p>
            <p className="mt-6 text-text-muted leading-relaxed max-w-2xl mx-auto">
              After a stroke or major surgery, your parent may not be able to walk, stand, or get out of bed
              without help. Help them move provides the full mobility setup — hospital bed, wheelchair, and
              safety modifications — professionally installed before they come home.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Detailed features */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-text mb-8">What&apos;s included</h2>
            <div className="space-y-6">
              {featureDetails.map(f => (
                <div key={f.title} className="flex items-start gap-3 p-5 bg-white rounded-xl border border-warm-gray/50">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${pkg.color}15` }}>
                    <Check size={14} style={{ color: pkg.color }} />
                  </div>
                  <div>
                    <p className="font-medium text-text">{f.title}</p>
                    <p className="mt-1 text-sm text-text-muted leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* One-stop vs piecing it together */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-text mb-4">One visit, not five vendors</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Without Jaga, most families end up coordinating a hospital bed from one company, a wheelchair
              from another, grab bars from a hardware store, and a contractor to install everything. That&apos;s
              four or five vendors, multiple delivery dates, and no guarantee they&apos;ll work together.
            </p>
            <p className="text-text-muted leading-relaxed">
              We bundle everything into a single assessment, a single installation date, and a single monthly
              rental. One point of contact. One invoice. Your parent comes home to a fully equipped space,
              not a half-finished project.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 px-6 md:px-12 bg-warm-gray/30">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-text mb-4">Who this is for</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Help them move is our most popular package. Families typically choose it when:
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-[#1A5F7A] mt-1">&#x2022;</span>
                <span>Your parent is recovering from a stroke and can&apos;t walk or stand without assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A5F7A] mt-1">&#x2022;</span>
                <span>They&apos;re coming home after hip replacement surgery and need a hospital bed during recovery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A5F7A] mt-1">&#x2022;</span>
                <span>The hospital says they&apos;re being discharged in a few days and your home isn&apos;t ready</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A5F7A] mt-1">&#x2022;</span>
                <span>Your parent needs a wheelchair but your bathroom and doorways haven&apos;t been modified for one</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A5F7A] mt-1">&#x2022;</span>
                <span>You want equipment on a flexible rental — not a large purchase you&apos;ll need to resell later</span>
              </li>
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-text mb-8">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map(faq => (
                <div key={faq.question}>
                  <h3 className="font-medium text-text">{faq.question}</h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Related guides */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Related guides</p>
            <div className="space-y-3">
              <Link href="/guides/prepare-home-after-stroke" className="block p-4 bg-white rounded-xl border border-warm-gray/50 hover:border-green/30 transition-colors">
                <p className="font-medium text-text">Preparing Your Home After Stroke</p>
                <p className="text-sm text-text-muted mt-1">What to modify, what to rent, and what to do before your parent comes home. Based on published medical research.</p>
              </Link>
              <Link href="/guides/hospital-discharge-checklist" className="block p-4 bg-white rounded-xl border border-warm-gray/50 hover:border-green/30 transition-colors">
                <p className="font-medium text-text">Hospital Discharge Checklist</p>
                <p className="text-sm text-text-muted mt-1">What to prepare at home before your parent leaves hospital.</p>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Other packages */}
      <section className="py-16 px-6 md:px-12 bg-warm-gray/30">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Explore other packages</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages/make-it-safe" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2D7A6B] px-6 py-3 text-sm font-medium text-[#2D7A6B] transition-all hover:bg-[#2D7A6B]/5">
                Make it safe — safety essentials only
              </Link>
              <Link href="/packages/someone-by-their-side" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#6B4C8A] px-6 py-3 text-sm font-medium text-[#6B4C8A] transition-all hover:bg-[#6B4C8A]/5">
                Someone by their side — add a caregiver
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 text-center">
        <AnimateIn>
          <Link href="/get-a-quote?package=help-them-move" className="inline-block bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl text-base font-medium transition-all">
            Get a free quote for {pkg.name} →
          </Link>
          <p className="text-sm text-text-faint mt-3">Setup within 48 hours · No contracts</p>
        </AnimateIn>
      </section>
    </main>
  );
}

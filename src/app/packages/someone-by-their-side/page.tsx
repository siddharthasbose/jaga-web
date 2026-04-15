import { Metadata } from "next";
import { packages } from "@/lib/packages-data";
import { AnimateIn } from "@/components/animate-in";
import { Check } from "lucide-react";
import Link from "next/link";

const pkg = packages.find(p => p.slug === "someone-by-their-side")!;

export const metadata: Metadata = {
  title: "Someone By Their Side — Dedicated Caregiver & Full Home Setup",
  description: "Complete home safety setup with a dedicated caregiver for daily support. For parents recovering from major surgery, stroke, or with dementia. Malaysia & Singapore.",
  alternates: {
    canonical: "https://jaga.care/packages/someone-by-their-side",
  },
  keywords: [
    "caregiver Malaysia", "caregiver Singapore",
    "home caregiver elderly", "dedicated caregiver service",
    "elderly daily care support", "dementia care home Malaysia",
    "stroke recovery caregiver", "penjaga pesakit Malaysia",
    "home nursing care Malaysia", "home nursing care Singapore",
    "live-in caregiver Malaysia", "elderly companion care",
    "post surgery caregiver", "full time caregiver elderly",
    "stroke caregiver support malaysia",
  ],
};

const featureDetails = [
  {
    title: "Grab bars in bathrooms",
    description: "Stainless steel grab bars professionally mounted beside the toilet, shower, and bathtub. Your caregiver will use these as transfer points when helping your parent bathe and use the toilet safely.",
  },
  {
    title: "Anti-slip mats in bathrooms",
    description: "Medical-grade anti-slip mats custom-fitted to your bathroom. Critical when a caregiver is assisting with bathing — wet floors are dangerous for both your parent and their caregiver.",
  },
  {
    title: "Shower chair",
    description: "A sturdy, height-adjustable shower chair your caregiver uses during assisted bathing. Reduces strain on the caregiver and gives your parent a stable, dignified bathing experience.",
  },
  {
    title: "Cameras in common areas",
    description: "Safety cameras in living areas and hallways with phone alerts. Gives you visibility into your parent's daily routine and peace of mind when the caregiver is in another room. Bedrooms and bathrooms are never monitored.",
  },
  {
    title: "Low / accessible bed setup",
    description: "Your parent's existing bed adjusted to a safe transfer height with bedrails and non-slip mats. Used as a secondary rest area in addition to the hospital bed.",
  },
  {
    title: "Hospital bed",
    description: "Fully adjustable electric hospital bed with head/foot elevation, side rails, and pressure-relief mattress. The caregiver uses the bed controls to assist with feeding, medication, and repositioning throughout the day.",
  },
  {
    title: "Wheelchair",
    description: "Lightweight, foldable wheelchair for indoor mobility and outings. Your caregiver handles transfers between bed, wheelchair, and bathroom. We measure your home to ensure it fits through all doorways.",
  },
  {
    title: "Dedicated caregiver",
    description: "A trained, vetted caregiver matched to your parent's needs and language preferences. They assist with daily activities — bathing, dressing, meals, medication reminders, light physiotherapy exercises, and companionship. Available as day-shift or live-in depending on your family's needs.",
  },
];

const faqs = [
  {
    question: "How do you select and vet caregivers?",
    answer: "All caregivers go through background checks, reference verification, and skills assessment. We match based on your parent's condition (stroke, dementia, post-surgery), language preferences (English, Malay, Mandarin, Cantonese), and personality. If the match isn't right, we'll replace the caregiver at no extra cost.",
  },
  {
    question: "Is the caregiver live-in or day-shift?",
    answer: "Both options are available. Day-shift caregivers work 8-12 hour shifts. Live-in caregivers stay at your parent's home and are available around the clock. We'll recommend the right arrangement based on your parent's condition and your family's needs during the assessment.",
  },
  {
    question: "What if my parent doesn't get along with the caregiver?",
    answer: "We replace the caregiver at no extra charge. Compatibility matters — your parent is spending every day with this person. We encourage a trial period and check in regularly during the first two weeks to make sure the match is working.",
  },
  {
    question: "How is this different from Homage or Pillar Care?",
    answer: "Homage and Pillar Care provide caregivers. We provide the caregiver plus the entire home setup — hospital bed, wheelchair, grab bars, anti-slip mats, cameras, and accessible modifications. Other services send a person into an unprepared home. We prepare the home and provide the person.",
  },
  {
    question: "Can I start with Help Them Move and add a caregiver later?",
    answer: "Yes. Many families start with equipment only and add a caregiver when they realise the daily care demands are more than the family can manage. We credit the work already done, so you only pay the difference for the caregiver placement.",
  },
  {
    question: "What training do caregivers receive for stroke patients?",
    answer: "Caregivers assigned to stroke patients have specific training in transfer techniques, repositioning to prevent pressure sores, swallowing safety during meals, and basic physiotherapy exercises prescribed by the patient's doctor. They are not nurses, but they are trained for the daily realities of stroke recovery at home.",
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
  name: "Someone By Their Side — Dedicated Caregiver & Full Home Setup",
  provider: {
    "@type": "LocalBusiness",
    name: "Jaga.Care",
    url: "https://jaga.care",
  },
  description: "Complete home safety setup with dedicated caregiver for daily support. Hospital bed, wheelchair, grab bars, and hands-on care for parents recovering from stroke, surgery, or dementia.",
  areaServed: [
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Country", name: "Singapore" },
  ],
  serviceType: "Home Care with Dedicated Caregiver",
};

export default function SomeoneByTheirSidePage() {
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
              Some situations need more than equipment. When your parent needs help with bathing, eating,
              medication, and daily movement, Someone by their side provides a trained caregiver alongside
              the full home setup. Your parent gets a safe home and a trusted person in it.
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

      {/* Equipment + person */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-text mb-4">A prepared home and a prepared person</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Most home care services in Malaysia and Singapore send a caregiver into a home that
              isn&apos;t set up for care. The caregiver arrives to find no hospital bed, no grab bars,
              and a bathroom that&apos;s dangerous for both them and your parent.
            </p>
            <p className="text-text-muted leading-relaxed">
              We prepare the home first, then place the caregiver. The bed is in the right position.
              The bathroom has grab bars where the caregiver needs them for transfers. The wheelchair
              fits through the doorways. The caregiver can focus on caring for your parent instead of
              working around an unsafe environment.
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
              Families choose Someone by their side when their parent needs daily hands-on help.
              Common situations:
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-[#6B4C8A] mt-1">&#x2022;</span>
                <span>Your parent had a severe stroke and needs help with bathing, dressing, eating, and movement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6B4C8A] mt-1">&#x2022;</span>
                <span>They have dementia or cognitive decline and cannot be left unsupervised</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6B4C8A] mt-1">&#x2022;</span>
                <span>The family works full-time and cannot provide daily care themselves</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6B4C8A] mt-1">&#x2022;</span>
                <span>Your parent is recovering from major surgery and needs weeks or months of hands-on support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6B4C8A] mt-1">&#x2022;</span>
                <span>You want an alternative to a nursing home — keeping your parent at home with proper support</span>
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
              <Link href="/guides/grab-bar-installation-malaysia" className="block p-4 bg-white rounded-xl border border-warm-gray/50 hover:border-green/30 transition-colors">
                <p className="font-medium text-text">Grab Bar Installation in Malaysia</p>
                <p className="text-sm text-text-muted mt-1">Where to place them, what materials to use, and why mounting matters more than the bar itself.</p>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Other packages */}
      <section className="py-16 px-6 md:px-12 bg-warm-gray/30">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Need less support?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages/make-it-safe" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2D7A6B] px-6 py-3 text-sm font-medium text-[#2D7A6B] transition-all hover:bg-[#2D7A6B]/5">
                Make it safe — safety essentials only
              </Link>
              <Link href="/packages/help-them-move" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1A5F7A] px-6 py-3 text-sm font-medium text-[#1A5F7A] transition-all hover:bg-[#1A5F7A]/5">
                Help them move — equipment without caregiver
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 text-center">
        <AnimateIn>
          <Link href="/get-a-quote?package=someone-by-their-side" className="inline-block bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl text-base font-medium transition-all">
            Get a free quote for {pkg.name} →
          </Link>
          <p className="text-sm text-text-faint mt-3">Setup within 48 hours · No contracts</p>
        </AnimateIn>
      </section>
    </main>
  );
}

import { Metadata } from "next";
import { packages } from "@/lib/packages-data";
import { AnimateIn } from "@/components/animate-in";
import { Check } from "lucide-react";
import Link from "next/link";

const pkg = packages.find(p => p.slug === "make-it-safe")!;

export const metadata: Metadata = {
  title: "Make It Safe — Fall Prevention & Home Safety Setup",
  description: "Professional grab bars installation, anti-slip mats, safety cameras, and accessible bed setup. Prevent elderly falls at home. Serving Malaysia & Singapore.",
  alternates: {
    canonical: "https://jaga.care/packages/make-it-safe",
  },
  keywords: [
    "grab bars installation Malaysia", "grab bars installation Singapore",
    "anti-slip bathroom elderly", "fall prevention elderly home",
    "elderly bathroom safety", "home safety assessment elderly",
    "palang bilik mandi warga emas", "keselamatan rumah warga emas",
    "prevent falls elderly", "bathroom modification elderly",
    "elderly home safety equipment", "safety cameras elderly home",
    "grab bar installation malaysia", "anti-slip floor treatment malaysia",
    "bathroom safety elderly malaysia", "home safety modification service",
    "elderly home safety assessment",
  ],
};

const featureDetails = [
  {
    title: "Grab bars in bathrooms",
    description: "Stainless steel grab bars professionally mounted to wall studs beside the toilet, shower, and bathtub. We assess the best placement for your parent's height and mobility level. All bars are rated for 150kg+ and come with a textured grip surface.",
  },
  {
    title: "Anti-slip mats in bathrooms",
    description: "Medical-grade anti-slip mats for shower floors, bathroom tiles, and entryways. Unlike store-bought mats, ours are custom-cut to fit your bathroom dimensions and secured with professional adhesive that won't peel in humid conditions.",
  },
  {
    title: "Cameras in common areas",
    description: "Discreet safety cameras in living areas and hallways so you can check on your parent from your phone. We handle setup, Wi-Fi connection, and app installation. Night vision included. Your parent's bedroom and bathroom are never monitored — privacy matters.",
  },
  {
    title: "Low / accessible bed setup",
    description: "We lower or replace the existing bed to a height your parent can safely get in and out of. Includes a bedside rail for support and non-slip floor mats around the bed. Reduces the most common cause of falls at home — getting out of bed at night.",
  },
];

const faqs = [
  {
    question: "How long does the Make It Safe installation take?",
    answer: "Most installations are completed in a single day. For larger homes or complex bathroom layouts, it may take two days. We guarantee your home is ready within one week of the agreed start date, or you get 20% off.",
  },
  {
    question: "Will grab bars damage my bathroom walls?",
    answer: "Our installers mount grab bars into wall studs using professional-grade stainless steel fittings. The installation is secure and permanent. If you're renting, we can discuss removable options that don't require drilling.",
  },
  {
    question: "Can I upgrade to Help Them Move later?",
    answer: "Yes. Many families start with Make it safe and add a hospital bed or wheelchair when needs change. We credit the assessment and installation work already done, so you only pay the difference.",
  },
  {
    question: "Do you install in condos and apartments?",
    answer: "Yes. We install in landed houses, condos, apartments, and HDB flats. For condos and apartments, we work within building management guidelines and handle any required approvals.",
  },
  {
    question: "What areas in Malaysia and Singapore do you cover?",
    answer: "We currently serve the Klang Valley (KL, PJ, Subang, Shah Alam), Penang, and Johor Bahru in Malaysia. In Singapore, we cover all areas including HDB estates and private properties.",
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
  name: "Make It Safe — Fall Prevention & Home Safety Setup",
  provider: {
    "@type": "LocalBusiness",
    name: "Jaga.Care",
    url: "https://jaga.care",
  },
  description: "Professional grab bars installation, anti-slip treatment, safety cameras, and accessible bed setup for elderly fall prevention at home.",
  areaServed: [
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Country", name: "Singapore" },
  ],
  serviceType: "Home Safety Modification",
};

export default function MakeItSafePage() {
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
              Falls are the leading cause of injury for older adults in Malaysia and Singapore.
              Most happen at home — in the bathroom, bedroom, or hallway. Make it safe
              addresses the highest-risk areas with professional installation, not DIY guesswork.
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

      {/* Why not DIY */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-text mb-4">Why not just buy from Shopee or Lazada?</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              You can buy grab bars and anti-slip mats online. But the equipment is only as good as the installation.
              A grab bar mounted into drywall instead of a stud will pull out under weight. An anti-slip mat that
              doesn&apos;t fit your tiles will curl at the edges and become a tripping hazard.
            </p>
            <p className="text-text-muted leading-relaxed">
              Jaga.Care assesses your home first, then installs everything to professional safety standards.
              We don&apos;t just sell you products — we make sure they actually work. That&apos;s the difference
              between a grab bar from a retailer and a home that&apos;s genuinely safe.
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
              Make it safe is designed for parents who are mostly independent but at increased risk of falls.
              Common situations where families choose this package:
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-green mt-1">&#x2022;</span>
                <span>Your parent had a fall scare or near-miss and you want to prevent the next one</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green mt-1">&#x2022;</span>
                <span>They&apos;re being discharged from hospital after a minor procedure and need a safer home to return to</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green mt-1">&#x2022;</span>
                <span>You live far away and want to monitor their safety from your phone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green mt-1">&#x2022;</span>
                <span>They&apos;re getting older and less steady on their feet, but still want to live independently</span>
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
              <Link href="/guides/grab-bar-installation-malaysia" className="block p-4 bg-white rounded-xl border border-warm-gray/50 hover:border-green/30 transition-colors">
                <p className="font-medium text-text">Grab Bar Installation in Malaysia</p>
                <p className="text-sm text-text-muted mt-1">Where to place them, what materials to use, and why mounting matters more than the bar itself.</p>
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
            <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Need more support?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages/help-them-move" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1A5F7A] px-6 py-3 text-sm font-medium text-[#1A5F7A] transition-all hover:bg-[#1A5F7A]/5">
                Help them move — add hospital bed &amp; wheelchair
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
          <Link href="/get-a-quote?package=make-it-safe" className="inline-block bg-green hover:bg-green-dark text-white px-8 py-4 rounded-xl text-base font-medium transition-all">
            Get a free quote for {pkg.name} →
          </Link>
          <p className="text-sm text-text-faint mt-3">Setup within 48 hours · No contracts</p>
        </AnimateIn>
      </section>
    </main>
  );
}

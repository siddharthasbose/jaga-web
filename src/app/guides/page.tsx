import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";
import { guides } from "@/lib/guides-data";

export const metadata: Metadata = {
  title: "Eldercare guides for Malaysia & Singapore",
  description:
    "Practical guides for families preparing a home for an aging parent — hospital discharge, grab bar installation, post-stroke recovery. Written for Malaysian and Singaporean families with primary-source citations.",
  alternates: {
    canonical: "https://www.jaga.care/guides",
    languages: {
      "en-MY": "https://www.jaga.care/guides",
      "en-SG": "https://www.jaga.care/guides",
      "ms-MY": "https://www.jaga.care/ms/panduan",
      "x-default": "https://www.jaga.care/guides",
    },
  },
  keywords: [
    "elderly care guides Malaysia",
    "home safety guides Singapore",
    "hospital discharge guide",
    "post-stroke care guide",
    "grab bar installation guide",
    "caregiver resources Malaysia",
    "panduan penjagaan warga emas",
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Eldercare guides — Jaga.Care",
  itemListElement: guides.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://www.jaga.care/guides/${g.slug_en}`,
    name: g.title_en,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.jaga.care",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "https://www.jaga.care/guides",
    },
  ],
};

export default function GuidesIndexPage() {
  return (
    <main id="main-content" className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-wider text-green">
              Guides
            </p>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl text-text leading-tight">
              Practical guides for families
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">
              Real, primary-source-backed guidance for families preparing a home
              for an aging parent in Malaysia and Singapore. Written from the
              evidence — not opinion.
            </p>
            <p className="mt-3 text-sm text-text-muted">
              <Link
                href="/ms/panduan"
                className="text-green underline underline-offset-2 hover:opacity-80"
              >
                Bahasa Melayu →
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <ul className="grid gap-6 sm:grid-cols-2">
            {guides.map((g, i) => (
              <AnimateIn key={g.slug_en} delay={i * 0.1}>
                <li>
                  <Link
                    href={`/guides/${g.slug_en}`}
                    className="group flex h-full flex-col rounded-2xl border border-warm-gray/60 bg-white p-7 transition-all hover:border-green/40 hover:shadow-lg"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-green">
                      Guide · {g.read_time_min} min read
                    </p>
                    <h2 className="mt-3 font-serif text-2xl text-text group-hover:text-green transition-colors leading-snug">
                      {g.title_en}
                    </h2>
                    <p className="mt-3 text-sm text-text-muted leading-relaxed">
                      {g.summary_en}
                    </p>
                    <p className="mt-5 text-sm font-medium italic text-text">
                      {g.hook_en}
                    </p>
                    <p className="mt-auto pt-6 text-sm font-medium text-green">
                      Read guide →
                    </p>
                  </Link>
                </li>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12">
        <div className="mx-auto max-w-3xl rounded-3xl bg-[#1A5F7A] px-8 py-12 text-center text-white">
          <h2 className="font-serif text-2xl md:text-3xl">
            Need help applying any of this to your situation?
          </h2>
          <p className="mt-3 text-base text-white/80 max-w-xl mx-auto">
            These guides cover the principles. Sumira can apply them to your
            parent&rsquo;s actual home, situation, and discharge timeline.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me/6589499681?text=Hi%20Sumira%2C%20I%27d%20like%20to%20chat%20about%20home%20setup%20for%20my%20parent."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-[#1A5F7A] transition-all hover:bg-white/90 hover:-translate-y-0.5"
            >
              Talk to a specialist →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

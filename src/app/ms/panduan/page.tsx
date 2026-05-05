import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";
import { guides } from "@/lib/guides-data";

export const metadata: Metadata = {
  title: "Panduan penjagaan warga emas — Malaysia & Singapura",
  description:
    "Panduan praktikal untuk keluarga yang menyediakan rumah untuk ibu bapa warga emas — keluar hospital, pemasangan palang pegangan, pemulihan selepas strok. Ditulis untuk keluarga Malaysia dan Singapura dengan rujukan sumber asal.",
  alternates: {
    canonical: "https://www.jaga.care/ms/panduan",
    languages: {
      "en-MY": "https://www.jaga.care/guides",
      "en-SG": "https://www.jaga.care/guides",
      "ms-MY": "https://www.jaga.care/ms/panduan",
      "x-default": "https://www.jaga.care/guides",
    },
  },
  keywords: [
    "panduan penjagaan warga emas",
    "panduan keselamatan rumah Malaysia",
    "panduan keluar hospital",
    "panduan pemulihan strok",
    "panduan pemasangan palang pegangan",
    "sumber penjaga Malaysia",
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  inLanguage: "ms-MY",
  name: "Panduan penjagaan — Jaga.Care",
  itemListElement: guides.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://www.jaga.care/ms/panduan/${g.slug_ms}`,
    name: g.title_ms,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  inLanguage: "ms-MY",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Laman utama",
      item: "https://www.jaga.care/ms",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Panduan",
      item: "https://www.jaga.care/ms/panduan",
    },
  ],
};

export default function PanduanIndexPage() {
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
              Panduan
            </p>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl text-text leading-tight">
              Panduan praktikal untuk keluarga
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-muted leading-relaxed">
              Panduan berasaskan bukti untuk keluarga yang menyediakan rumah
              untuk ibu bapa warga emas di Malaysia dan Singapura. Ditulis
              berdasarkan kajian sebenar — bukan pendapat semata-mata.
            </p>
            <p className="mt-3 text-sm text-text-muted">
              <Link
                href="/guides"
                className="text-green underline underline-offset-2 hover:opacity-80"
              >
                English →
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <ul className="grid gap-6 sm:grid-cols-2">
            {guides.map((g, i) => (
              <AnimateIn key={g.slug_ms} delay={i * 0.1}>
                <li>
                  <Link
                    href={`/ms/panduan/${g.slug_ms}`}
                    className="group flex h-full flex-col rounded-2xl border border-warm-gray/60 bg-white p-7 transition-all hover:border-green/40 hover:shadow-lg"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-green">
                      Panduan · bacaan {g.read_time_min} minit
                    </p>
                    <h2 className="mt-3 font-serif text-2xl text-text group-hover:text-green transition-colors leading-snug">
                      {g.title_ms}
                    </h2>
                    <p className="mt-3 text-sm text-text-muted leading-relaxed">
                      {g.summary_ms}
                    </p>
                    <p className="mt-5 text-sm font-medium italic text-text">
                      {g.hook_ms}
                    </p>
                    <p className="mt-auto pt-6 text-sm font-medium text-green">
                      Baca panduan →
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
            Perlukan bantuan untuk menggunakannya pada situasi anda?
          </h2>
          <p className="mt-3 text-base text-white/80 max-w-xl mx-auto">
            Panduan ini meliputi prinsip-prinsip umum. Sumira boleh
            menggunakannya pada keadaan rumah dan jadual keluar hospital
            ibu bapa anda yang sebenar.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me/6589499681?text=Hai%20Sumira%2C%20saya%20ingin%20berbual%20tentang%20persediaan%20rumah%20untuk%20ibu%20bapa%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-[#1A5F7A] transition-all hover:bg-white/90 hover:-translate-y-0.5"
            >
              Bercakap dengan pakar →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

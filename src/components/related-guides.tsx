import Link from "next/link";
import { guides, type Guide } from "@/lib/guides-data";

type Lang = "en" | "ms";

interface RelatedGuidesProps {
  currentSlugEn: string;
  lang: Lang;
}

export function RelatedGuides({ currentSlugEn, lang }: RelatedGuidesProps) {
  const related = guides.filter((g) => g.slug_en !== currentSlugEn);

  if (related.length === 0) return null;

  const headingText = lang === "ms" ? "Panduan berkaitan" : "Related guides";
  const ctaPrefix = lang === "ms" ? "Baca panduan" : "Read guide";

  const buildHref = (g: Guide) =>
    lang === "ms" ? `/ms/panduan/${g.slug_ms}` : `/guides/${g.slug_en}`;

  return (
    <section className="mt-16 border-t border-warm-gray/50 pt-12">
      <h2 className="font-serif text-2xl text-text mb-6">{headingText}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {related.map((g) => (
          <Link
            key={g.slug_en}
            href={buildHref(g)}
            className="group block rounded-2xl border border-warm-gray/60 bg-white p-6 transition-all hover:border-green/40 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-green">
              {lang === "ms" ? "Panduan" : "Guide"}
            </p>
            <h3 className="mt-2 font-serif text-lg text-text group-hover:text-green transition-colors">
              {lang === "ms" ? g.title_ms : g.title_en}
            </h3>
            <p className="mt-2 text-sm text-text-muted line-clamp-3">
              {lang === "ms" ? g.summary_ms : g.summary_en}
            </p>
            <p className="mt-4 text-sm font-medium text-green">
              {ctaPrefix} →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

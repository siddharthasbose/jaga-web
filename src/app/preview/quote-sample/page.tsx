import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quote sample — preview",
  robots: { index: false, follow: false },
};

export default function QuoteSamplePreview() {
  return (
    <div className="min-h-screen bg-cream py-10 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-green">
              Preview — not indexed
            </p>
            <h1 className="mt-1 font-serif text-3xl text-text">
              Sample quote — Make it safe · SG
            </h1>
            <p className="mt-1 text-sm text-text-muted">
              Rendered with real Bronze-tier numbers from the pricing model.
              Share with Sumira for feedback, then we wire the ops flow.
            </p>
          </div>
          <a
            href="/api/preview/quote-sample"
            download="jaga-care-sample-quote.pdf"
            className="rounded-full bg-[#2D7A6B] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Download PDF
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <iframe
            src="/api/preview/quote-sample#toolbar=0&navpanes=0"
            className="block h-[1100px] w-full"
            title="Sample quote PDF"
          />
        </div>
      </div>
    </div>
  );
}

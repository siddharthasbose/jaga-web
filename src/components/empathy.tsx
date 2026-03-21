import { AnimateIn } from "@/components/animate-in";

export function Empathy() {
  return (
    <section
      className="py-20 sm:py-28"
      style={{
        background: "linear-gradient(to bottom, #FAF7F2, #F0E8DF)",
      }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="flex flex-col items-center text-center">
          {/* Section label */}
          <p className="text-sm font-semibold uppercase tracking-widest text-green">
            We understand
          </p>

          {/* Headline */}
          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight text-text sm:text-4xl lg:text-5xl">
            Your parent is in hospital.
            <br />
            You&rsquo;re overwhelmed.
          </h2>

          {/* Body text */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            Where do you get grab bars? How do you make the bathroom safe?
            Should you rent a hospital bed? You don&rsquo;t have time to figure
            this out — you need someone who already knows.
          </p>

          {/* Quote card */}
          <blockquote className="mt-10 w-full max-w-xl rounded-xl bg-white p-6 text-left shadow-sm border-l-[3px] border-green">
            <p className="italic leading-relaxed text-text-muted">
              &ldquo;I spent three days calling hardware stores and medical
              suppliers. I wish someone had just handled it all.&rdquo;
            </p>
            <cite className="mt-3 block text-sm not-italic font-medium text-brown-light">
              — A daughter in Kuala Lumpur
            </cite>
          </blockquote>
        </AnimateIn>
      </div>
    </section>
  );
}

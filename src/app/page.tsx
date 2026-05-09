import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Packages } from "@/components/packages";
import { QuoteForm } from "@/components/quote-form";
import { SectionView } from "@/components/section-view";

export default function Home() {
  return (
    <>
      <SectionView name="hero">
        <Hero />
      </SectionView>
      <SectionView name="how_it_works">
        <HowItWorks />
      </SectionView>
      <SectionView name="packages">
        <Packages />
      </SectionView>
      <Suspense>
        <SectionView name="quote_form">
          <QuoteForm />
        </SectionView>
      </Suspense>
    </>
  );
}

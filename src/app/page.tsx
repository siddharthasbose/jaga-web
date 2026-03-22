import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Packages } from "@/components/packages";
import { QuoteForm } from "@/components/quote-form";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Packages />
      <Suspense>
        <QuoteForm />
      </Suspense>
    </>
  );
}

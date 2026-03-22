import { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Send us photos of your space and get a free quote for home safety setup. Serving Malaysia and Singapore.",
};

export default function GetAQuotePage() {
  return (
    <main id="main-content">
      <Suspense>
        <QuoteForm />
      </Suspense>
    </main>
  );
}

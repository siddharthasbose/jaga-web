import { Hero } from "@/components/hero";
import { Empathy } from "@/components/empathy";
import { HowItWorks } from "@/components/how-it-works";
import { Packages } from "@/components/packages";

export default function Home() {
  return (
    <>
      <Hero />
      <Empathy />
      <HowItWorks />
      <Packages />
    </>
  );
}

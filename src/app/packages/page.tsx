import { Metadata } from "next";
import { Packages } from "@/components/packages";

export const metadata: Metadata = {
  title: "Care Packages",
  description: "Three levels of home care setup: Make it safe, Help them move, Someone by their side. Professional installation in Malaysia and Singapore.",
};

export default function PackagesPage() {
  return (
    <main id="main-content">
      <Packages />
    </main>
  );
}

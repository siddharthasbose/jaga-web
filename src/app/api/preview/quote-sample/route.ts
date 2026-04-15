import { NextResponse } from "next/server";
import { renderQuotePdf, type QuoteInput } from "@/lib/quote-pdf";

export const runtime = "nodejs";

const SAMPLE: QuoteInput = {
  quoteNumber: "Q-2026-001",
  issuedDate: "15 April 2026",
  validUntil: "15 May 2026",
  currency: "S$",
  customerName: "Ms. Lee Ai Ling",
  customerAddress: [
    "3 Holland Grove Road",
    "Singapore 278832",
    "lee.ailing@example.com",
  ],
  recipientName: "Mr. Lee Kok Wah",
  recipientNotes:
    "Age 78 · Post-stroke · Returning from TTSH on 28 April 2026",
  situation:
    "Mr. Lee's recovery is progressing well, but his home still poses several fall risks during his first months back. After reviewing the photos you shared, our primary concerns are the shared bathroom — wet floor, no support fixtures — and unsupervised transfers in and out of the bedroom at night, which is when most home falls occur for stroke recovery patients.",
  recommendationHeading: "OUR RECOMMENDATION — MAKE IT SAFE",
  recommendation:
    "A focused safety package built around fall prevention in the bathroom and bedroom. At this stage Mr. Lee can still transfer independently, so a hospital bed or wheelchair isn't needed yet. If that changes, we upgrade only the parts of the plan that need to change, with credit for work already done — no starting from scratch.",
  planSections: [
    {
      title: "Bathroom safety fixtures",
      body: "Two stainless-steel grab bars — one beside the toilet at Mr. Lee's shoulder height for safe transfers, one inside the shower for standing support while bathing. Medical-grade anti-slip mats custom-cut to your bathroom floor. A height-adjusted foldable shower chair so Mr. Lee can bathe seated.",
    },
    {
      title: "Bedroom safety setup",
      body: "Mr. Lee's existing bed lowered to a safe transfer height, with a bedside support rail and non-slip floor mats placed around the bed. This directly addresses the most common cause of night-time falls for stroke patients: getting in and out of bed in the dark.",
    },
    {
      title: "Home awareness",
      body: "Two discreet safety cameras installed in the living room and hallway, with night vision and instant phone alerts. Monitors only common areas — bedrooms and bathrooms are never monitored. You can check on Mr. Lee from your phone anytime.",
    },
  ],
  assessorBlurb:
    "A certified occupational therapist visits your home, documents every risk, and decides exactly where each item goes before any installation begins. Nothing is placed without her sign-off.",
  installerBlurb:
    "Installation is led by one of our senior technicians and typically completed in a single day. They handle drilling, mounting, clean-up, and a final walk-through with you or Mr. Lee.",
  guarantee:
    "Six-month equipment warranty on all hardware. Free adjustments in the first month if anything feels off. Full product replacement if an item fails during normal use, at no extra cost.",
  total: 975,
  totalCaption:
    "Includes assessment, equipment, delivery, installation, and warranty.",
  nextSteps: [
    "Reply to this email to confirm — we'll lock in the home assessment within 48 hours.",
    "Our occupational therapist visits Mr. Lee's home (45–60 minutes).",
    "Installation completed within one week of the assessment.",
  ],
  contactEmail: "hello@jaga.care",
  contactPhone: "+65 8123 4567",
};

export async function GET() {
  const pdf = await renderQuotePdf(SAMPLE);
  return new NextResponse(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="jaga-care-sample-quote.pdf"',
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}

import { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Hospital Discharge Checklist for Malaysia — What to Prepare at Home",
  description:
    "Only 66% of caregivers feel prepared at discharge. A practical checklist for Malaysian and Singaporean families bringing a parent home from hospital after stroke, surgery, or a fall.",
  alternates: {
    canonical: "https://jaga.care/guides/hospital-discharge-checklist",
  },
  keywords: [
    "hospital discharge checklist malaysia",
    "bringing patient home from hospital",
    "what to buy before hospital discharge",
    "hospital discharge home setup",
    "parent coming home from hospital",
    "discharge planning Malaysia",
    "prepare home after hospital",
    "home setup for bedridden patient",
    "persediaan rumah selepas hospital",
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hospital Discharge Checklist for Malaysia — What to Prepare at Home",
  description:
    "A practical checklist for families in Malaysia and Singapore preparing their home before a parent is discharged from hospital.",
  author: {
    "@type": "Organization",
    name: "Jaga.Care",
    url: "https://jaga.care",
  },
  publisher: {
    "@type": "Organization",
    name: "Jaga.Care",
    url: "https://jaga.care",
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
};

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 py-2">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-green/30 mt-0.5 text-xs text-green">
        &nbsp;
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function HospitalDischargeChecklistPage() {
  return (
    <main id="main-content" className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-wider text-green">
              Guide
            </p>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl text-text leading-tight">
              Hospital discharge checklist
            </h1>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              What to prepare at home before your parent leaves hospital.
              For families in Malaysia and Singapore.
            </p>
            <p className="mt-4 text-sm text-text-faint">
              Last updated: March 2026 &middot; 6 min read
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Article content */}
      <article className="pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12 text-text-muted leading-relaxed">
          {/* The gap */}
          <AnimateIn>
            <section>
              <p>
                Hospital discharge in Malaysia typically works like this: the
                doctor certifies discharge, the bill is prepared, a nurse hands
                you medications and a follow-up appointment card, and
                you&apos;re sent home.{" "}
                <a
                  href="https://pusrawi.com.my/en/hospital-discharge-exit-process/"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Pusrawi Hospital)
                </a>
              </p>
              <p className="mt-4">
                What&apos;s missing is everything between &ldquo;discharged&rdquo;
                and &ldquo;home.&rdquo; There is no standardised MOH Malaysia
                checklist for families. No home safety assessment. No equipment
                list. Research shows only 66% of caregivers feel prepared when
                their family member leaves hospital — which means a third of
                families are going home without knowing what they need.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11521122/"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (PMC, 2024)
                </a>
              </p>
              <p className="mt-4">
                This checklist fills that gap. Use it in the days between
                hearing &ldquo;we&apos;re discharging your parent&rdquo; and
                bringing them home.
              </p>
            </section>
          </AnimateIn>

          {/* Before you leave hospital */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Before you leave the hospital
              </h2>
              <p className="mb-4 text-sm">
                Ask for these before your parent is discharged. Don&apos;t
                assume they&apos;ll be provided automatically.
              </p>
              <ul className="space-y-1">
                <ChecklistItem>
                  <strong className="text-text">Medication list</strong> —
                  name, dosage, frequency, and what each one is for. Ask the
                  pharmacist, not just the nurse.
                </ChecklistItem>
                <ChecklistItem>
                  <strong className="text-text">Follow-up appointments</strong>{" "}
                  — dates, which clinic, and what to bring. Get this in writing.
                </ChecklistItem>
                <ChecklistItem>
                  <strong className="text-text">
                    Physiotherapy / rehab referral
                  </strong>{" "}
                  — if your parent had a stroke or surgery, ask for a referral
                  to outpatient rehabilitation. In Malaysia,{" "}
                  <a
                    href="https://www.nasam.org/"
                    className="text-green underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NASAM
                  </a>{" "}
                  provides affordable stroke rehab in 8 locations.
                </ChecklistItem>
                <ChecklistItem>
                  <strong className="text-text">Care instructions</strong> —
                  wound care, dietary restrictions, activity limits, warning
                  signs that mean &ldquo;go back to emergency.&rdquo;
                </ChecklistItem>
                <ChecklistItem>
                  <strong className="text-text">
                    Mobility assessment
                  </strong>{" "}
                  — ask the OT or physiotherapist: can your parent walk? Use
                  stairs? Get to the toilet independently? The answer determines
                  what equipment you need at home.
                </ChecklistItem>
                <ChecklistItem>
                  <strong className="text-text">
                    Medical summary letter
                  </strong>{" "}
                  — a written summary of what happened, what was done, and
                  current medications. You&apos;ll need this for any future
                  doctor, home nurse, or caregiver.
                </ChecklistItem>
              </ul>
            </section>
          </AnimateIn>

          {/* Home safety */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Home safety checklist
              </h2>
              <p className="mb-4 text-sm">
                The first 7-14 days at home carry the highest risk of
                readmission. These changes reduce the most common dangers.
              </p>

              <h3 className="font-medium text-text mt-6 mb-3">
                Bathroom (highest priority)
              </h3>
              <ul className="space-y-1">
                <ChecklistItem>
                  Grab bars beside toilet and inside shower (mounted into wall
                  studs, not suction cups)
                </ChecklistItem>
                <ChecklistItem>
                  Anti-slip mats or professional slip-resistant floor treatment
                </ChecklistItem>
                <ChecklistItem>
                  Shower chair or bench if your parent can&apos;t stand for
                  long periods
                </ChecklistItem>
                <ChecklistItem>
                  Raised toilet seat with armrests if they have difficulty
                  sitting or standing
                </ChecklistItem>
                <ChecklistItem>
                  Handheld shower hose (replaces fixed overhead shower)
                </ChecklistItem>
              </ul>

              <h3 className="font-medium text-text mt-6 mb-3">Bedroom</h3>
              <ul className="space-y-1">
                <ChecklistItem>
                  Hospital bed with side rails (available on monthly rental — no
                  need to buy)
                </ChecklistItem>
                <ChecklistItem>
                  Non-slip mats around the bed
                </ChecklistItem>
                <ChecklistItem>
                  Phone or call bell within arm&apos;s reach
                </ChecklistItem>
                <ChecklistItem>
                  Clear path to bathroom — remove furniture, rugs, and cords
                </ChecklistItem>
                <ChecklistItem>
                  Night light between bed and bathroom
                </ChecklistItem>
              </ul>

              <h3 className="font-medium text-text mt-6 mb-3">
                Throughout the home
              </h3>
              <ul className="space-y-1">
                <ChecklistItem>
                  Remove all loose rugs, mats, and cables from walkways
                </ChecklistItem>
                <ChecklistItem>
                  Handrails on both sides of stairs
                </ChecklistItem>
                <ChecklistItem>
                  Ramps at entrance steps if using a wheelchair
                </ChecklistItem>
                <ChecklistItem>
                  Furniture rearranged so wheelchair or walker can pass (90cm+
                  clearance)
                </ChecklistItem>
                <ChecklistItem>
                  Adequate lighting in all hallways, stairs, and rooms
                </ChecklistItem>
              </ul>
            </section>
          </AnimateIn>

          {/* Equipment */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Equipment you may need
              </h2>
              <p className="mb-4">
                What you need depends on your parent&apos;s mobility level.
                Don&apos;t buy everything upfront — most equipment can be
                rented monthly and returned when no longer needed.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">
                    Mostly independent, at risk of falls
                  </p>
                  <p className="text-sm mt-1">
                    Grab bars, anti-slip mats, safety cameras, accessible bed
                    setup.
                  </p>
                  <Link
                    href="/packages/make-it-safe"
                    className="text-sm text-green underline underline-offset-2 mt-2 inline-block"
                  >
                    See our Make It Safe package →
                  </Link>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">
                    Significantly reduced mobility
                  </p>
                  <p className="text-sm mt-1">
                    Everything above plus hospital bed and wheelchair on monthly
                    rental.
                  </p>
                  <Link
                    href="/packages/help-them-move"
                    className="text-sm text-green underline underline-offset-2 mt-2 inline-block"
                  >
                    See our Help Them Move package →
                  </Link>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">
                    Needs daily hands-on help
                  </p>
                  <p className="text-sm mt-1">
                    Everything above plus a dedicated caregiver matched to your
                    parent&apos;s needs.
                  </p>
                  <Link
                    href="/packages/someone-by-their-side"
                    className="text-sm text-green underline underline-offset-2 mt-2 inline-block"
                  >
                    See our Someone By Their Side package →
                  </Link>
                </div>
              </div>
            </section>
          </AnimateIn>

          {/* The first week home */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                The first week at home
              </h2>
              <ul className="space-y-1">
                <ChecklistItem>
                  Fill all prescriptions before your parent arrives home
                </ChecklistItem>
                <ChecklistItem>
                  Set up a medication schedule (use a pill organiser or phone
                  reminders)
                </ChecklistItem>
                <ChecklistItem>
                  Stock easy-to-prepare meals — your parent may have dietary
                  restrictions or swallowing difficulties
                </ChecklistItem>
                <ChecklistItem>
                  Have the emergency number (999 in Malaysia, 995 in Singapore)
                  visible and accessible
                </ChecklistItem>
                <ChecklistItem>
                  Keep the medical summary letter somewhere everyone in the
                  household can find it
                </ChecklistItem>
                <ChecklistItem>
                  Arrange the first home visit or outpatient rehab appointment
                  within the first week
                </ChecklistItem>
                <ChecklistItem>
                  Watch for warning signs: sudden confusion, new weakness on one
                  side, severe headache, fever, difficulty breathing — these
                  mean go to emergency immediately
                </ChecklistItem>
              </ul>
            </section>
          </AnimateIn>

          {/* Singapore families */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                For Singapore families
              </h2>
              <p>
                Singapore has more structured post-discharge support than
                Malaysia. Make use of these:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">
                      Interim Caregiver Service (ICS)
                    </strong>{" "}
                    — provides a caregiver for approximately 2 weeks after
                    returning home from hospital.{" "}
                    <a
                      href="https://www.moh.gov.sg/newsroom/interim-caregiver-service/"
                      className="text-green underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (MOH Singapore)
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">
                      Caregivers Training Grant
                    </strong>{" "}
                    — annual subsidies for caregiver training courses, available
                    through{" "}
                    <a
                      href="https://www.aic.sg/"
                      className="text-green underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AIC
                    </a>{" "}
                    touchpoints nationwide.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">HDB EASE programme</strong> —
                    subsidised grab bars, anti-slip treatment, and ramps for HDB
                    flats. Pays 87.5-95% of costs.{" "}
                    <a
                      href="https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/for-our-seniors/ease"
                      className="text-green underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (HDB)
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">
                      Home care service providers
                    </strong>{" "}
                    must give{" "}
                    <strong className="text-text">2 weeks&apos; notice</strong>{" "}
                    before discharge or transfer, per MOH service requirements.{" "}
                    <a
                      href="https://isomer-user-content.by.gov.sg/3/65390a49-1f1d-43d1-8f45-8eed6741b3d7/combined-service-requirements_16-aug-(website).pdf"
                      className="text-green underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (MOH Service Requirements)
                    </a>
                  </span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          {/* Why not piece it together */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Why not just buy things individually?
              </h2>
              <p>
                You can. But when you&apos;re told on Tuesday that your parent
                is being discharged on Friday, you don&apos;t have time to
                coordinate a hospital bed from one company, grab bars from a
                hardware store, anti-slip mats from Shopee, and a contractor to
                install everything.
              </p>
              <p className="mt-4">
                The reason most families feel unprepared at discharge isn&apos;t
                that they don&apos;t care. It&apos;s that there is no single
                service that handles all of it. That&apos;s what we built
                Jaga.Care to do.
              </p>
            </section>
          </AnimateIn>

          {/* CTA */}
          <AnimateIn>
            <section className="p-8 bg-white rounded-2xl border border-warm-gray/50 text-center">
              <h2 className="font-serif text-2xl text-text">
                Need your home ready before discharge day?
              </h2>
              <p className="mt-2 text-text-muted">
                Send us photos of your home and we&apos;ll prepare a proposal
                within 48 hours. Setup within one week, guaranteed.
              </p>
              <div className="mt-6">
                <a
                  href="https://wa.me/6589499681?text=Hi%20Sumira%2C%20I%27d%20like%20to%20chat%20about%20home%20setup%20for%20my%20parent."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green hover:bg-green-dark text-white px-8 py-3.5 rounded-full text-base font-medium transition-all"
                >
                  Talk to a specialist →
                </a>
              </div>
            </section>
          </AnimateIn>

          {/* Sources */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-xl text-text mb-4">Sources</h2>
              <ol className="text-xs text-text-faint space-y-2 list-decimal list-inside">
                <li>
                  Pusrawi Hospital. Hospital Discharge Exit Process.{" "}
                  <a href="https://pusrawi.com.my/en/hospital-discharge-exit-process/" className="underline" target="_blank" rel="noopener noreferrer">pusrawi.com.my</a>
                </li>
                <li>
                  PMC (2024). Principles of Home Care for Stroke.{" "}
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11521122/" className="underline" target="_blank" rel="noopener noreferrer">PMC11521122</a>
                </li>
                <li>
                  Frontiers in Neurology (2022). Experiences and needs of caregivers of stroke survivors in Malaysia.{" "}
                  <a href="https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2022.996620/full" className="underline" target="_blank" rel="noopener noreferrer">Frontiers</a>
                </li>
                <li>
                  MOH Singapore. Support for Caregivers During and Post-Care.{" "}
                  <a href="https://www.moh.gov.sg/newsroom/support-for-caregivers-during-and-post-care/" className="underline" target="_blank" rel="noopener noreferrer">moh.gov.sg</a>
                </li>
                <li>
                  HDB. Enhancement for Active Seniors (EASE).{" "}
                  <a href="https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/for-our-seniors/ease" className="underline" target="_blank" rel="noopener noreferrer">hdb.gov.sg</a>
                </li>
                <li>
                  NASAM — National Stroke Association of Malaysia.{" "}
                  <a href="https://www.nasam.org/" className="underline" target="_blank" rel="noopener noreferrer">nasam.org</a>
                </li>
              </ol>
            </section>
          </AnimateIn>
        </div>
      </article>
    </main>
  );
}

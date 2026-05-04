import { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preparing Your Home After Stroke — A Malaysia & Singapore Guide",
  description:
    "73% of stroke survivors fall within the first year — most at home. A practical guide to home modifications, equipment, and safety setup for stroke recovery in Malaysia and Singapore.",
  alternates: {
    canonical: "https://jaga.care/guides/prepare-home-after-stroke",
  },
  keywords: [
    "post stroke care at home",
    "prepare home after stroke",
    "after stroke home preparation",
    "stroke recovery malaysia",
    "stroke rehabilitation KL",
    "home setup for bedridden patient",
    "pemulihan strok di rumah",
    "stroke recovery home setup",
    "home modification stroke patient",
    "fall prevention stroke",
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Preparing Your Home After Stroke — A Malaysia & Singapore Guide",
  description:
    "A practical guide to home modifications, equipment, and safety setup for stroke recovery at home in Malaysia and Singapore.",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does stroke recovery take at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first 3 months are the most critical period for recovery, with the brain in a state of heightened neuroplasticity. The peak window for motor recovery is 60-90 days post-stroke. After 6 months, improvements are slower but do not stop. Recent research from the National Institutes of Health challenges the older belief that recovery plateaus at 6 months.",
      },
    },
    {
      "@type": "Question",
      name: "What home modifications are needed after a stroke?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The bathroom is the highest priority — 71% of stroke patients make bathroom modifications. Key changes include grab bars near the toilet and shower, anti-slip mats, a raised toilet seat, a shower chair, and a handheld shower hose. Bedrooms need bed rails, lowered bed height, and clear pathways. Throughout the home, remove loose rugs, improve lighting, and install handrails on stairs.",
      },
    },
    {
      "@type": "Question",
      name: "What percentage of stroke survivors fall at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "73% of stroke survivors experience a fall within one year, and 59% of those falls occur at home. However, research from the FAST trial shows that a combined programme of home modifications and exercise can reduce falls by 33%.",
      },
    },
  ],
};

export default function PrepareHomeAfterStrokePage() {
  return (
    <main id="main-content" className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-wider text-green">
              Guide
            </p>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl text-text leading-tight">
              Preparing your home after a stroke
            </h1>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              A practical guide for families in Malaysia and Singapore. What to
              modify, what to rent, and what to do before your parent comes home.
            </p>
            <p className="mt-4 text-sm text-text-faint">
              Last updated: March 2026 &middot; 8 min read
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Article content */}
      <article className="pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12 text-text-muted leading-relaxed">
          {/* The situation */}
          <AnimateIn>
            <section>
              <p>
                Every year, roughly 48,000 people in Malaysia and 9,700 in
                Singapore have a stroke.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9149343/"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Venketasubramanian et al., 2022)
                </a>{" "}
                Around 83% of them go home, not to a care facility.{" "}
                <a
                  href="https://www.ahajournals.org/doi/10.1161/STROKEAHA.119.026618"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Paley et al., 2020)
                </a>{" "}
                The problem is that most homes aren&apos;t ready for them.
              </p>
              <p className="mt-4">
                No one remodels their bathroom in anticipation of a stroke. So
                when the hospital says your parent is being discharged in three
                days, you&apos;re left figuring out grab bars, hospital beds, and
                wheelchair access while also processing the diagnosis itself.
              </p>
              <p className="mt-4">
                This guide covers what to change, what to get, and how to
                prioritise — based on published medical research and the real
                conditions of Malaysian and Singaporean homes.
              </p>
            </section>
          </AnimateIn>

          {/* Why it matters */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Why home preparation matters
              </h2>
              <p>
                <strong className="text-text">
                  73% of stroke survivors fall within the first year.
                </strong>{" "}
                59% of those falls happen at home — nearly double the rate of
                age-matched adults without stroke.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3084849/"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Mackintosh et al., 2011)
                </a>
              </p>
              <p className="mt-4">
                In Malaysia, 11-13% of stroke patients are readmitted within 28
                days. The leading cause is recurrent stroke (32%), followed by
                pneumonia (13%) and sepsis.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7815148/"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Mhd Noor et al., 2021)
                </a>{" "}
                In Singapore, 24% are readmitted within the first year, with
                falls among the most common causes.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8814857/"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Koh et al., 2022)
                </a>
              </p>
              <p className="mt-4">
                The good news: a combined programme of home modifications and
                exercise reduced falls by 33% in the FAST trial — the largest
                randomised trial on falls after stroke. The intervention was
                delivered by a physiotherapist and occupational therapist over 10
                home visits.{" "}
                <a
                  href="https://www.news-medical.net/news/20260324/Home-based-program-reduces-falls-among-stroke-survivors-by-one-third.aspx"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (FAST Trial)
                </a>
              </p>
              <p className="mt-4">
                A Washington University study went further: stroke survivors
                whose homes were professionally modified had{" "}
                <strong className="text-text">
                  zero deaths in the intervention group
                </strong>{" "}
                compared to 10 in the control group over the study period.{" "}
                <a
                  href="https://medicine.washu.edu/modifying-homes-for-stroke-survivors-saves-lives-extends-independence/"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Washington University, Stark et al.)
                </a>
              </p>
            </section>
          </AnimateIn>

          {/* Recovery timeline */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Understanding the recovery timeline
              </h2>
              <p>
                Your parent&apos;s needs will change over time. The home setup
                you need in week one is different from month six.
              </p>
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">
                    First 3 months — the critical window
                  </p>
                  <p className="mt-1 text-sm">
                    The brain is in a state of heightened neuroplasticity. The
                    peak window for motor recovery is 60-90 days post-stroke.
                    This is when intensive rehabilitation makes the biggest
                    difference.{" "}
                    <a
                      href="https://www.nih.gov/news-events/nih-research-matters/critical-time-window-rehabilitation-after-stroke"
                      className="text-green underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (NIH, 2019)
                    </a>{" "}
                    Your home needs to support daily physiotherapy exercises and
                    safe movement between rooms.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">
                    Months 3-6 — building independence
                  </p>
                  <p className="mt-1 text-sm">
                    Many patients regain some mobility during this period. You
                    may transition from a hospital bed to a regular bed, or from
                    a wheelchair to a walking frame. Safety modifications (grab
                    bars, anti-slip mats) remain essential.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">
                    6 months onwards — the long term
                  </p>
                  <p className="mt-1 text-sm">
                    Improvements continue beyond 6 months, contrary to what was
                    previously believed.{" "}
                    <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6689791/"
                      className="text-green underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (Dromerick et al., 2019)
                    </a>{" "}
                    Safety modifications become permanent features of the home.
                    Equipment rental can be returned as mobility improves.
                  </p>
                </div>
              </div>
            </section>
          </AnimateIn>

          {/* Bathroom */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Start with the bathroom
              </h2>
              <p>
                71% of stroke patients who modify their home start with the
                bathroom.{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/19260250/"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (de Jonge et al., 2009)
                </a>{" "}
                In Malaysian homes, the bathroom is the #1 fall location —
                accounting for 27% of all home falls among elderly adults.{" "}
                <a
                  href="https://www.researchgate.net/publication/228475842"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Sazlina et al.)
                </a>
              </p>
              <p className="mt-4 font-medium text-text">What to install:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Grab bars</strong> beside the
                    toilet, inside the shower, and along the wall path from
                    doorway to toilet. Mount into wall studs — not drywall.
                    Stainless steel, rated for 113kg+ (250lbs minimum per ADA
                    Section 609). Height: 800-900mm above floor level.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Anti-slip treatment</strong>{" "}
                    on floor tiles. Not stick-on mats that curl at edges — a
                    professional treatment applied directly to existing tiles.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Shower chair or bench</strong>{" "}
                    so your parent can sit while bathing. Essential if they have
                    one-sided weakness (hemiplegia).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Raised toilet seat</strong>{" "}
                    with armrests. Reduces the effort needed to sit down and
                    stand up — critical for patients with weak legs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Handheld shower hose</strong>{" "}
                    to replace a fixed overhead shower. Allows bathing while
                    seated.
                  </span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          {/* Bedroom */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Set up the bedroom
              </h2>
              <p>
                If your parent can&apos;t get out of bed independently, a
                hospital bed with electric head/foot adjustment makes daily care
                significantly easier — for them and for whoever is helping.
              </p>
              <p className="mt-4 font-medium text-text">Key changes:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Hospital bed</strong> with
                    side rails and a pressure-relief mattress. Available on
                    monthly rental in Malaysia and Singapore — no need to buy
                    outright.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Bed rails</strong> on any bed
                    your parent sleeps in. The most common cause of home falls
                    is getting out of bed at night.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Non-slip mats</strong> around
                    the bed. Your parent may be unsteady when they first stand.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">
                      Clear path to the bathroom
                    </strong>{" "}
                    — remove furniture, rugs, and cords between the bed and the
                    toilet. Consider a commode chair beside the bed for
                    nighttime use.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Phone or call bell</strong>{" "}
                    within arm&apos;s reach at all times.
                  </span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          {/* Rest of the home */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Throughout the home
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">
                      Remove all loose rugs and mats
                    </strong>{" "}
                    — they&apos;re the most common trip hazard.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">
                      Improve lighting
                    </strong>{" "}
                    in hallways, stairs, and the path between bedroom and
                    bathroom. Night lights with motion sensors are inexpensive
                    and effective.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">
                      Handrails on all stairs
                    </strong>{" "}
                    — both sides if possible. If stairs are unavoidable, consider
                    relocating your parent&apos;s bedroom to the ground floor.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Ramps at entrances</strong> if
                    your parent uses a wheelchair. Standard doorways in Malaysian
                    homes are usually wide enough (75cm+), but thresholds and
                    steps need ramps.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">
                      Wheelchair accessibility
                    </strong>{" "}
                    — measure all doorways and corridors. Move furniture to
                    create clear paths at least 90cm wide.
                  </span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          {/* What the hospital doesn't tell you */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                What the hospital probably won&apos;t tell you
              </h2>
              <p>
                Research on Malaysian stroke caregivers found that families
                consistently expressed it would be &ldquo;immensely helpful if
                services with appropriate training and support could guide them
                right from the first day.&rdquo;{" "}
                <a
                  href="https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2022.996620/full"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Frontiers in Neurology, 2022)
                </a>
              </p>
              <p className="mt-4">
                Only 66% of caregivers feel prepared at discharge. Here&apos;s
                what families commonly aren&apos;t told:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#x2717;</span>
                  <span>
                    No home safety assessment is performed before discharge
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#x2717;</span>
                  <span>
                    No equipment checklist — you&apos;re not told you may need
                    grab bars, a shower chair, or a hospital bed
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#x2717;</span>
                  <span>
                    No structured caregiver training before you take your parent
                    home
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#x2717;</span>
                  <span>
                    No information about community rehabilitation services like{" "}
                    <a
                      href="https://www.nasam.org/"
                      className="text-green underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NASAM
                    </a>{" "}
                    (Malaysia) or{" "}
                    <a
                      href="https://www.aic.sg/caregiving/caring-for-loved-one-with-stroke/"
                      className="text-green underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AIC
                    </a>{" "}
                    (Singapore)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#x2717;</span>
                  <span>
                    Your medical card likely doesn&apos;t cover home
                    modifications, equipment rental, or home nursing
                  </span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          {/* Singapore: EASE programme */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                For Singapore families: the EASE programme
              </h2>
              <p>
                If your parent lives in an HDB flat, the{" "}
                <a
                  href="https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/for-our-seniors/ease"
                  className="text-green underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enhancement for Active Seniors (EASE)
                </a>{" "}
                programme subsidises 87.5-95% of the cost of grab bars (8-10
                bars), slip-resistant floor treatment, and ramps.
              </p>
              <p className="mt-4">
                After subsidy, you pay as little as $26-$65 for grab bars
                depending on flat type. Eligibility: Singaporean household with
                a family member aged 65+ (or 60-64 with ADL needs).
              </p>
              <p className="mt-4">
                EASE covers the basics well but has limitations: it&apos;s HDB
                only, the process is slow (weeks to months), and it doesn&apos;t
                include hospital beds, wheelchairs, or monitoring cameras. For
                families who need everything set up before discharge day, a
                private service may be faster.
              </p>
            </section>
          </AnimateIn>

          {/* Resources */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Resources and support
              </h2>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Malaysia</p>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>
                      <a
                        href="https://www.nasam.org/"
                        className="text-green underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NASAM
                      </a>{" "}
                      — Stroke rehabilitation across 8 centres (PJ, Ampang,
                      Penang, Sabah, Malacca, Perak, Johor, Kuantan). Call
                      03-7956 1976.
                    </li>
                    <li>
                      <a
                        href="https://www.moh.gov.my/moh/resources/Penerbitan/CPG/CARDIOVASCULAR/CPG_Management_of_Ischaemic_Stroke_3rd_Edition_2020_28.02_.2021_.pdf"
                        className="text-green underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MOH Malaysia Clinical Practice Guidelines on Stroke
                        (2020)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.caknastrok.app"
                        className="text-green underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CaknaStrok App
                      </a>{" "}
                      — Trilingual caregiver education app for Malaysian
                      families
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Singapore</p>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>
                      <a
                        href="https://www.aic.sg/caregiving/caring-for-loved-one-with-stroke/"
                        className="text-green underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AIC — Caring for a Loved One with Stroke
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/for-our-seniors/ease"
                        className="text-green underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        HDB EASE Programme
                      </a>{" "}
                      — Subsidised grab bars and anti-slip treatment
                    </li>
                    <li>
                      <a
                        href="https://www.moh.gov.sg/caregiver-support"
                        className="text-green underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MOH Singapore Caregiver Support
                      </a>{" "}
                      — Interim Caregiver Service, training grants
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </AnimateIn>

          {/* CTA */}
          <AnimateIn>
            <section className="p-8 bg-white rounded-2xl border border-warm-gray/50 text-center">
              <h2 className="font-serif text-2xl text-text">
                Need your home ready before discharge?
              </h2>
              <p className="mt-2 text-text-muted">
                Jaga.Care sets up grab bars, hospital beds, anti-slip treatment,
                and monitoring cameras — professionally installed in your home
                within one week. Serving Malaysia and Singapore.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/6589499681?text=Hi%20Sumira%2C%20I%27d%20like%20to%20chat%20about%20home%20setup%20for%20my%20parent."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green hover:bg-green-dark text-white px-8 py-3.5 rounded-full text-base font-medium transition-all"
                >
                  Talk to a specialist →
                </a>
                <Link
                  href="/packages"
                  className="inline-block border border-green text-green px-8 py-3.5 rounded-full text-base font-medium transition-all hover:bg-green/5"
                >
                  View packages
                </Link>
              </div>
            </section>
          </AnimateIn>

          {/* Sources */}
          <AnimateIn>
            <section>
              <h2 className="font-serif text-xl text-text mb-4">Sources</h2>
              <ol className="text-xs text-text-faint space-y-2 list-decimal list-inside">
                <li>
                  Venketasubramanian et al. (2022). Stroke Burden and Stroke
                  Services in Malaysia.{" "}
                  <em>Cerebrovascular Diseases Extra.</em>{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9149343/"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PMC9149343
                  </a>
                </li>
                <li>
                  Paley et al. (2020). Long-Term Trends in Stroke Survivors
                  Discharged to Care Homes. <em>Stroke.</em>{" "}
                  <a
                    href="https://www.ahajournals.org/doi/10.1161/STROKEAHA.119.026618"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AHA Journals
                  </a>
                </li>
                <li>
                  Mackintosh et al. (2011). Falls in stroke survivors. <em>PLOS ONE.</em>{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3084849/"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PMC3084849
                  </a>
                </li>
                <li>
                  Mhd Noor et al. (2021). 28-day readmissions among stroke
                  patients in Malaysia. <em>PLOS ONE.</em>{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7815148/"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PMC7815148
                  </a>
                </li>
                <li>
                  Koh et al. (2022). Hospital Readmission in Stroke Survivors.{" "}
                  <em>J Rehab Med.</em>{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8814857/"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PMC8814857
                  </a>
                </li>
                <li>
                  Dromerick et al. (2019). Critical time window for recovery.{" "}
                  <em>J Neurophysiology.</em>{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6689791/"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PMC6689791
                  </a>
                </li>
                <li>
                  de Jonge et al. (2009). Home modification in stroke patients.{" "}
                  <em>Am J Phys Med Rehabil.</em>{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/19260250/"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PubMed 19260250
                  </a>
                </li>
                <li>
                  NIH (2019). Critical Time Window for Rehabilitation After Stroke.{" "}
                  <a
                    href="https://www.nih.gov/news-events/nih-research-matters/critical-time-window-rehabilitation-after-stroke"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NIH Research Matters
                  </a>
                </li>
                <li>
                  Washington University. Modifying homes for stroke survivors
                  saves lives.{" "}
                  <a
                    href="https://medicine.washu.edu/modifying-homes-for-stroke-survivors-saves-lives-extends-independence/"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WashU Medicine
                  </a>
                </li>
                <li>
                  Frontiers in Neurology (2022). Experiences and needs of
                  caregivers of stroke survivors in Malaysia.{" "}
                  <a
                    href="https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2022.996620/full"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontiers
                  </a>
                </li>
              </ol>
            </section>
          </AnimateIn>
        </div>
      </article>
    </main>
  );
}

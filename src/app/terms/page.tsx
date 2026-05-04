import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using Jaga.Care home safety setup services in Malaysia and Singapore.",
  alternates: {
    canonical: "https://www.jaga.care/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl tracking-tight text-text">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Last updated: 25 March 2026
        </p>

        <div className="mt-10 space-y-8 text-text-muted leading-relaxed">
          <div>
            <h2 className="font-serif text-xl text-text">Overview</h2>
            <p className="mt-2">
              Jaga.Care provides home safety setup and care coordination services
              for families in Malaysia and Singapore. By using our website or
              services, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">Our Services</h2>
            <p className="mt-2">
              We offer home safety assessment, equipment installation, hospital
              bed and mobility equipment rental, and caregiver coordination. All
              services are subject to availability in your area.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">
              Quotes and Pricing
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>All quotes are provided free of charge with no obligation</li>
              <li>
                Pricing is based on the specific services and equipment selected
              </li>
              <li>
                Final pricing is confirmed in your proposal before any work
                begins
              </li>
              <li>
                We reserve the right to adjust pricing based on site conditions
                discovered during installation
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">
              1-Week Setup Guarantee
            </h2>
            <p className="mt-2">
              We guarantee completion of your home setup within one week of the
              agreed start date. If we fail to meet this timeline due to reasons
              within our control, you receive 20% off your total service cost.
              This guarantee does not apply to delays caused by building
              management approvals, material shortages, or other circumstances
              beyond our control.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">
              Equipment Rental
            </h2>
            <p className="mt-2">
              Rental equipment (hospital beds, wheelchairs, etc.) remains the
              property of Jaga.Care or our equipment partners. You are
              responsible for reasonable care of rented equipment during the
              rental period.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">
              Limitation of Liability
            </h2>
            <p className="mt-2">
              Jaga.Care provides home safety modifications and equipment to
              reduce risk, but cannot guarantee the prevention of all accidents
              or injuries. Our services are not a substitute for professional
              medical care.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">Contact</h2>
            <p className="mt-2">
              For questions about these terms, please contact us at{" "}
              <a
                href="mailto:hello@jaga.care"
                className="text-green underline underline-offset-2"
              >
                hello@jaga.care
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

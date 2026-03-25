import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Jaga.Care collects, uses, and protects your personal information. Serving Malaysia and Singapore.",
  alternates: {
    canonical: "https://jaga.care/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl tracking-tight text-text">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Last updated: 25 March 2026
        </p>

        <div className="mt-10 space-y-8 text-text-muted leading-relaxed">
          <div>
            <h2 className="font-serif text-xl text-text">
              Information We Collect
            </h2>
            <p className="mt-2">
              When you use Jaga.Care, we may collect the following information:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                Name, email address, and phone number when you submit our quote
                form
              </li>
              <li>
                Photos of your home that you share with us for assessment
                purposes
              </li>
              <li>
                Information about your care needs that you provide during
                consultation
              </li>
              <li>
                Usage data collected through cookies and analytics tools
                (Google Analytics, PostHog)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">
              How We Use Your Information
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>To provide you with a personalised care proposal and quote</li>
              <li>To coordinate home safety setup and equipment delivery</li>
              <li>To communicate with you about your service</li>
              <li>To improve our website and services</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">
              How We Protect Your Information
            </h2>
            <p className="mt-2">
              We take reasonable measures to protect your personal information.
              Your data is transmitted over encrypted connections (HTTPS) and
              stored securely. We do not sell your personal information to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">
              Third-Party Services
            </h2>
            <p className="mt-2">
              We use the following third-party services that may collect data:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Google Analytics &mdash; for website usage analytics</li>
              <li>PostHog &mdash; for product analytics</li>
              <li>Vercel &mdash; for website hosting</li>
              <li>Google Sheets &mdash; for lead management</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">Your Rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us at{" "}
              <a
                href="mailto:hello@jaga.care"
                className="text-green underline underline-offset-2"
              >
                hello@jaga.care
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-text">Contact</h2>
            <p className="mt-2">
              If you have questions about this privacy policy, please email us at{" "}
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

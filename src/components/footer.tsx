import Link from "next/link";
import { JagaLogo } from "@/components/jaga-logo";

export function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <JagaLogo variant="light" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Home ready before they are. Serving families in Malaysia and
              Singapore.
            </p>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Packages</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/packages/make-it-safe"
                  className="hover:text-white transition-colors"
                >
                  Make it safe
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/help-them-move"
                  className="hover:text-white transition-colors"
                >
                  Help them move
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/someone-by-their-side"
                  className="hover:text-white transition-colors"
                >
                  Someone by their side
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/get-a-quote"
                  className="hover:text-white transition-colors"
                >
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Guides</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/guides/prepare-home-after-stroke"
                  className="hover:text-white transition-colors"
                >
                  Home setup after stroke
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/hospital-discharge-checklist"
                  className="hover:text-white transition-colors"
                >
                  Hospital discharge checklist
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/grab-bar-installation-malaysia"
                  className="hover:text-white transition-colors"
                >
                  Grab bar installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@jaga.care"
                  className="hover:text-white transition-colors"
                >
                  hello@jaga.care
                </a>
              </li>
              <li>Malaysia &amp; Singapore</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; 2026 Jaga Care. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

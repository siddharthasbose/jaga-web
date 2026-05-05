"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { JagaLogo } from "@/components/jaga-logo";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { getWhatsAppUrl, WA_DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);
  const waUrl = getWhatsAppUrl(WA_DEFAULT_MESSAGE);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-cream/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-[80px]">
          <Link href="/" onClick={closeMenu} className="relative z-[60] transition-opacity hover:opacity-80">
            <JagaLogo />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-brown-light font-medium">
            <Link href="/#how-it-works" className="hover:text-text transition-colors">
              How it works
            </Link>
            <Link href="/#packages" className="hover:text-text transition-colors">
              Packages
            </Link>
            <Link href="/guides" className="hover:text-text transition-colors">
              Guides
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "nav_desktop" })}
              className="hover:text-text transition-colors"
            >
              Talk to a specialist
            </a>
            {/* Language switcher */}
            <span className="text-text-faint text-xs border border-brown/15 rounded-full px-3 py-1">
              <Link href="/" className="hover:text-text transition-colors">EN</Link>
              {" | "}
              <Link href="/ms" className="hover:text-text transition-colors">BM</Link>
            </span>
            <Link
              href="/get-a-quote"
              className="bg-green hover:bg-green-dark text-white rounded-full px-6 py-2.5 text-sm font-medium transition-all hover:shadow-lg hover:shadow-green/20 ml-2"
            >
              Get help now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden relative z-[60] p-2 -mr-2 text-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream/95 px-6"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center gap-8 text-2xl font-serif text-text w-full"
            >
              <Link href="/#how-it-works" onClick={closeMenu} className="hover:text-green transition-colors">
                How it works
              </Link>
              <Link href="/#packages" onClick={closeMenu} className="hover:text-green transition-colors">
                Packages
              </Link>
              <Link href="/guides" onClick={closeMenu} className="hover:text-green transition-colors">
                Guides
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("whatsapp_click", { location: "nav_mobile" });
                  closeMenu();
                }}
                className="hover:text-green transition-colors"
              >
                Talk to a specialist
              </a>
              <Link
                href="/get-a-quote"
                onClick={closeMenu}
                className="mt-6 bg-green text-center text-white rounded-full px-8 py-4 text-lg font-sans font-medium hover:bg-green-dark transition-all shadow-lg shadow-green/30 w-full max-w-xs"
              >
                Get help now
              </Link>
              {/* Language switcher */}
              <div className="mt-4 flex gap-4 text-base font-sans text-text-muted">
                <Link href="/" onClick={closeMenu} className="hover:text-text transition-colors">English</Link>
                <span className="text-text-faint">|</span>
                <Link href="/ms" onClick={closeMenu} className="hover:text-text transition-colors">Bahasa Melayu</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

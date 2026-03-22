"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { JagaLogo } from "@/components/jaga-logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "/#how-it-works", label: "How it works" },
    { href: "/#packages", label: "Packages" },
    { href: "/get-a-quote", label: "Get a quote" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-cream/90 backdrop-blur-xl shadow-sm border-b border-brown/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-[72px] md:h-[80px]">
          <Link href="/" className="transition-opacity hover:opacity-80" onClick={() => setMenuOpen(false)}>
            <JagaLogo />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-sm text-brown-light font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-text transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/get-a-quote"
            className="hidden md:inline-flex bg-green hover:bg-green-dark text-white rounded-full px-6 py-2.5 text-sm font-medium transition-all hover:shadow-lg hover:shadow-green/20"
          >
            Get help now
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-text"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-cream pt-[72px] md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 -mt-[72px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl text-text hover:text-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-a-quote"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-green hover:bg-green-dark text-white rounded-full px-10 py-4 text-lg font-medium transition-all"
            >
              Get help now
            </Link>
            <a
              href="mailto:hello@jaga.care"
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              hello@jaga.care
            </a>
          </div>
        </div>
      )}
    </>
  );
}

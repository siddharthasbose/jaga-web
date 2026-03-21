"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all border-b border-brown/10 ${
        scrolled ? "bg-cream/80 shadow-sm" : "bg-cream/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-[72px]">
        <Link href="/" className="font-serif text-2xl text-text">
          jaga<span className="text-green">.</span>
        </Link>

        {/* Desktop links - hidden on mobile */}
        <div className="hidden md:flex gap-8 text-sm text-brown-light">
          <Link
            href="/#how-it-works"
            className="hover:text-text transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/#packages"
            className="hover:text-text transition-colors"
          >
            Packages
          </Link>
          <Link
            href="/get-a-quote"
            className="hover:text-text transition-colors"
          >
            Get a quote
          </Link>
        </div>

        <Link
          href="/get-a-quote"
          className="bg-green hover:bg-green-dark text-white rounded-full px-6 py-2.5 text-sm font-medium transition-all"
        >
          Get help now
        </Link>
      </div>
    </nav>
  );
}

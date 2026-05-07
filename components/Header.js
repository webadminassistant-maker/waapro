"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-sage text-ivory px-4 py-2 rounded-lg z-50">
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm shadow-soft border-b border-gold/10"
            : "bg-ivory/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="The Web Administrator — Home">
            <Logo size="small" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-3 py-2 text-sm font-lato font-medium transition-colors duration-200 rounded-lg ${
                    active
                      ? "text-sage"
                      : "text-charcoal hover:text-sage"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 text-sm font-lato font-semibold border-2 border-gold text-gold rounded-xl hover:bg-gold hover:text-ivory transition-all duration-200"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-warm-gray transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-charcoal/30 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-40 w-72 bg-ivory shadow-soft-lg transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-4 border-b border-warm-gray">
          <Logo size="small" />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg text-charcoal hover:bg-warm-gray transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-3 rounded-xl text-base font-lato font-medium transition-colors duration-200 ${
                  active
                    ? "bg-sage/10 text-sage border-l-4 border-gold"
                    : "text-charcoal hover:bg-warm-gray hover:text-sage"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="mt-4 pt-4 border-t border-warm-gray">
            <Link
              href="/contact"
              className="block text-center px-4 py-3 font-lato font-semibold border-2 border-gold text-gold rounded-xl hover:bg-gold hover:text-ivory transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

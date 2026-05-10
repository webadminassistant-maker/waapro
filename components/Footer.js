import Link from "next/link";
import Logo from "@/components/Logo";
import { Mail, Facebook, Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      {/* Top wave */}
      <div className="overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-10 fill-warm-gray">
          <path d="M0,25 C240,50 480,0 720,25 C960,50 1200,0 1440,25 L1440,50 L0,50 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <div className="mb-4">
              <Logo className="brightness-0 invert opacity-90" />
            </div>
            <p className="font-dancing text-gold text-lg leading-snug mb-3">
              Your Community. Online. Taken Care Of.
            </p>
            <p className="text-sm text-ivory/60 leading-relaxed">
              Helping churches, clubs, and nonprofits build a meaningful online presence — affordably and with care.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-playfair text-ivory font-semibold text-base mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-ivory/70 hover:text-gold transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact & payment */}
          <div>
            <h3 className="font-playfair text-ivory font-semibold text-base mb-4">Get In Touch</h3>
            <a
              href="mailto:webadminassistant@gmail.com"
              className="flex items-center gap-2 text-sm text-ivory/70 hover:text-gold transition-colors mb-1"
              aria-label="Send me an email"
            >
              <Mail size={14} />
              webadminassistant@gmail.com
            </a>
            <p className="text-xs text-ivory/50 mb-4">Response within 1–2 business days</p>

            <h4 className="font-lato text-ivory/80 text-sm font-semibold mb-2">I Accept</h4>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Cash App", "Venmo", "Invoice"].map((method) => (
                <span
                  key={method}
                  className="text-xs px-2 py-1 rounded-full border border-gold/30 text-gold/80"
                >
                  {method}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61589123417596"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="p-2 rounded-full border border-ivory/20 text-ivory/50 hover:text-gold hover:border-gold transition-colors"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                aria-label="Instagram page (link coming soon)"
                className="p-2 rounded-full border border-ivory/20 text-ivory/50 hover:text-gold hover:border-gold transition-colors"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-ivory/40">
          <p>© 2026 The Web Administrator. Serving nonprofits with care.</p>
          <p className="font-dancing text-gold/60 text-sm">Proudly serving churches, clubs, and foundations.</p>
        </div>
      </div>
    </footer>
  );
}

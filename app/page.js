import Link from "next/link";
import { Globe, Handshake, CreditCard, Church, Users, Heart, ArrowRight } from "lucide-react";
import { WaveDivider, VineDivider } from "@/components/Divider";

export const metadata = {
  title: "The Web Administrator — Websites for Churches & Nonprofits",
  description:
    "I build and manage websites for churches, nonprofits, and community organizations — affordably, personally, and without the tech headache.",
};

function HeroCommunityIllustration() {
  return (
    <svg
      viewBox="0 0 420 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm mx-auto"
      aria-label="Community members connected online illustration"
      role="img"
    >
      {/* Background soft circle */}
      <circle cx="210" cy="140" r="120" fill="#4A6741" opacity="0.06" />
      <circle cx="210" cy="140" r="90" fill="#C9A84C" opacity="0.05" />

      {/* Church building */}
      <rect x="170" y="150" width="80" height="60" rx="4" fill="#F9F5EE" stroke="#4A6741" strokeWidth="1.5" />
      <polygon points="210,100 160,155 260,155" fill="#4A6741" opacity="0.8" />
      {/* Cross */}
      <rect x="206" y="108" width="8" height="20" rx="2" fill="#C9A84C" />
      <rect x="200" y="115" width="20" height="6" rx="2" fill="#C9A84C" />
      {/* Door */}
      <rect x="197" y="178" width="26" height="32" rx="13" fill="#C9A84C" opacity="0.3" stroke="#C9A84C" strokeWidth="1" />
      {/* Windows */}
      <rect x="177" y="162" width="18" height="16" rx="9" fill="#C9A84C" opacity="0.2" stroke="#4A6741" strokeWidth="1" />
      <rect x="225" y="162" width="18" height="16" rx="9" fill="#C9A84C" opacity="0.2" stroke="#4A6741" strokeWidth="1" />

      {/* Connection lines (web) */}
      <line x1="210" y1="140" x2="90" y2="80" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <line x1="210" y1="140" x2="330" y2="80" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <line x1="210" y1="140" x2="70" y2="190" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <line x1="210" y1="140" x2="350" y2="190" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <line x1="210" y1="140" x2="210" y2="60" stroke="#4A6741" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />

      {/* Globe at top */}
      <circle cx="210" cy="48" r="18" fill="#4A6741" opacity="0.15" stroke="#4A6741" strokeWidth="1.5" />
      <ellipse cx="210" cy="48" rx="9" ry="18" stroke="#4A6741" strokeWidth="1" fill="none" opacity="0.6" />
      <line x1="192" y1="48" x2="228" y2="48" stroke="#4A6741" strokeWidth="1" opacity="0.6" />

      {/* People nodes */}
      {[
        { cx: 90, cy: 72 },
        { cx: 330, cy: 72 },
        { cx: 70, cy: 192 },
        { cx: 350, cy: 192 },
      ].map((pos, i) => (
        <g key={i}>
          <circle cx={pos.cx} cy={pos.cy} r="18" fill="#F0EDE8" stroke="#4A6741" strokeWidth="1.5" />
          <circle cx={pos.cx} cy={pos.cy - 5} r="6" fill="#4A6741" opacity="0.5" />
          <path
            d={`M${pos.cx - 9},${pos.cy + 14} Q${pos.cx},${pos.cy + 6} ${pos.cx + 9},${pos.cy + 14}`}
            stroke="#4A6741"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
        </g>
      ))}

      {/* Leaf accents */}
      <ellipse cx="140" cy="240" rx="12" ry="6" fill="#4A6741" opacity="0.15" transform="rotate(-30,140,240)" />
      <ellipse cx="280" cy="240" rx="12" ry="6" fill="#4A6741" opacity="0.15" transform="rotate(30,280,240)" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-ivory via-ivory to-[#EEF3EC] pt-16 pb-0"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-dancing text-gold text-xl mb-3" aria-hidden="true">Welcome</p>
            <h1
              id="hero-heading"
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6 text-balance"
            >
              Helping{" "}
              <em className="text-sage not-italic">Good Work</em> Get Found by the Right People
            </h1>
            <p className="font-lato text-lg text-charcoal-light leading-relaxed mb-8 max-w-lg">
              I build and manage websites for churches, nonprofits, and community organizations —
              affordably, personally, and without the tech headache.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage text-ivory font-lato font-semibold rounded-2xl hover:bg-sage-dark transition-all duration-200 shadow-soft hover:shadow-soft-lg"
              >
                See My Services
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold font-lato font-semibold rounded-2xl hover:bg-gold hover:text-ivory transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <HeroCommunityIllustration />
          </div>
        </div>

        {/* Decorative background flourish */}
        <div className="absolute top-10 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

        <WaveDivider fromColor="#EEF3EC" toColor="#F0EDE8" />
      </section>

      {/* ── Trust Bar ───────────────────────────── */}
      <section className="bg-warm-gray py-6" aria-label="Why choose me">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
            {[
              { icon: <Globe size={18} />, text: "Built with Free Tools — Keeping Costs Low" },
              { icon: <Handshake size={18} />, text: "Non-Profits Only — I Know Your World" },
              { icon: <CreditCard size={18} />, text: "Flexible Payment Plans Available" },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z" />
                  </svg>
                ),
                text: "Church-Friendly — I Speak Your Language",
              },
            ].map(({ icon, text }, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 text-sage flex-shrink-0">{icon}</span>
                <span className="text-sm font-lato text-charcoal-light leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WaveDivider fromColor="#F0EDE8" toColor="#F9F5EE" />

      {/* ── Who We Serve ─────────────────────────── */}
      <section className="bg-ivory py-16 md:py-24 px-4 sm:px-6" aria-labelledby="who-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-dancing text-gold text-lg mb-2">Who I Serve</p>
            <h2 id="who-heading" className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
              Made for Communities Like Yours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Church size={32} className="text-sage" aria-hidden="true" />,
                title: "Churches & Congregations",
                desc: "From sermon archives to event calendars and online giving — I help your congregation stay connected and your doors open to newcomers online.",
              },
              {
                icon: <Users size={32} className="text-sage" aria-hidden="true" />,
                title: "Clubs & Civic Groups",
                desc: "Rotary, Lions, garden clubs, sports leagues — let your members and the community find you easily with a clean, welcoming website.",
              },
              {
                icon: <Heart size={32} className="text-sage" aria-hidden="true" />,
                title: "Foundations & Nonprofits",
                desc: "Share your mission, attract volunteers, and connect with donors — with a website that reflects the heart behind your work.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-ivory border border-gold/30 rounded-3xl p-7 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-sage/8 rounded-2xl flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">{title}</h3>
                <p className="font-lato text-charcoal-light leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#F9F5EE" toColor="#EEF3EC" />

      {/* ── How It Works ──────────────────────────── */}
      <section
        className="bg-[#EEF3EC] py-16 md:py-24 px-4 sm:px-6"
        aria-labelledby="how-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-dancing text-gold text-lg mb-2">Simple & Friendly</p>
            <h2 id="how-heading" className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line on desktop */}
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-gold/20" aria-hidden="true" />

            {[
              {
                num: "1",
                title: "Tell Me About Your Organization",
                desc: "Fill out a short form or book a free 15-minute call. No tech knowledge needed — just tell me about your community and what you're hoping for.",
              },
              {
                num: "2",
                title: "I Build It With You",
                desc: "Using free, trusted tools to keep your budget intact. I handle everything technical while keeping you in the loop at every step.",
              },
              {
                num: "3",
                title: "I Keep It Running",
                desc: "Ongoing support and maintenance — so you can focus on your mission and I'll handle the website.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full bg-gold flex items-center justify-center font-playfair text-2xl font-bold text-ivory shadow-gold mb-5 relative z-10"
                  aria-hidden="true"
                >
                  {num}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">{title}</h3>
                <p className="font-lato text-charcoal-light leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#EEF3EC" toColor="#F0EDE8" />

      {/* ── Services Snapshot ────────────────────── */}
      <section className="bg-warm-gray py-16 md:py-24 px-4 sm:px-6" aria-labelledby="services-snap-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-dancing text-gold text-lg mb-2">What I Offer</p>
            <h2 id="services-snap-heading" className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
              My Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                emoji: "🌐",
                title: "Website Creation",
                desc: "A brand-new website built on free platforms, mobile-friendly and easy to navigate.",
              },
              {
                emoji: "🔧",
                title: "Website Management",
                desc: "Ongoing care — event calendars, photos, and security checks handled for you.",
              },

            ].map(({ emoji, title, desc }) => (
              <Link
                key={title}
                href="/services"
                className="group block bg-ivory rounded-3xl p-6 shadow-soft hover:shadow-soft-lg border border-transparent hover:border-gold/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl mb-4 block" role="img" aria-label={title}>{emoji}</span>
                <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2 group-hover:text-sage transition-colors">
                  {title}
                </h3>
                <p className="font-lato text-sm text-charcoal-light leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-lato font-semibold text-sage hover:text-sage-dark transition-colors"
            >
              See All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#F0EDE8" toColor="#4A6741" />

      {/* ── Final CTA ────────────────────────────── */}
      <section className="bg-sage py-16 md:py-24 px-4 sm:px-6 text-center" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto">
          <p className="font-dancing text-gold text-xl mb-3" aria-hidden="true">Let's Begin</p>
          <h2 id="cta-heading" className="font-playfair text-3xl md:text-4xl font-bold text-ivory mb-5 leading-tight">
            Ready to bring your organization online?
          </h2>
          <p className="font-lato text-ivory/80 text-lg mb-8 leading-relaxed">
            No tech background needed. No pressure. Just a friendly conversation about your community and what you need.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ivory font-lato font-semibold text-lg rounded-2xl hover:bg-gold-dark transition-all duration-200 shadow-gold"
          >
            Let's Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { WaveDivider, VineDivider } from "@/components/Divider";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent, flexible pricing for churches and nonprofits. Starting at $150 for a new website, $30/month for ongoing care. Payment plans available.",
};

const tiers = [
  {
    emoji: "🌐",
    label: "One-Time Project",
    title: "Starter Website Creation",
    price: "Starting at $150",
    note: "Payment options available",
    includes: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Contact form",
      "Free platform (WordPress, Google Sites, or Wix)",
      "Basic SEO setup",
      "Domain setup guidance",
    ],
    payment: "Deposit at start + balance on completion",
    highlight: false,
  },
  {
    emoji: "🔧",
    label: "Monthly Subscription",
    title: "Care Plan — Monthly Management",
    price: "$30–$50/month",
    note: "Negotiable for a predetermined time period",
    includes: [
      "Event calendar updates",
      "Photo and text updates",
      "Basic security monitoring",
      "Email support",
    ],
    payment: "Monthly invoice — cancel anytime",
    highlight: true,
  },
  {
    emoji: "✨",
    label: "One-Time Project",
    title: "Rescue & Redesign",
    price: "$200",
    note: "Payment options available",
    includes: [
      "Full site audit",
      "Redesign or rebuild implementation",
      "Mobile optimization",
      "Content cleanup",
    ],
    payment: "Deposit at start + balance on completion",
    highlight: false,
  },
];

const paymentMethods = [
  {
    emoji: "📧",
    name: "Invoice by Email",
    desc: "Receive a simple, clear invoice. Pay by check or through an online payment link.",
    color: "text-sage",
  },
  {
    emoji: "💚",
    name: "Cash App",
    desc: "Quick and easy mobile payment. Send directly to $waapro.",
    color: "text-[#00D632]",
  },
  {
    emoji: "💙",
    name: "Venmo",
    desc: "Send payment directly from your phone. @waapro.",
    color: "text-[#008CFF]",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── Page Header ─────────────────── */}
      <section className="bg-gradient-to-br from-ivory to-[#EEF3EC] pt-16 pb-0" aria-labelledby="pricing-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="font-dancing text-gold text-xl mb-2">Fair, simple pricing — because good work shouldn't be out of reach.</p>
          <h1 id="pricing-heading" className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Pricing
          </h1>
          <p className="font-lato text-lg text-charcoal-light max-w-xl mx-auto leading-relaxed">
            Fair, simple pricing — because good work shouldn't be out of reach.
          </p>
        </div>
        <WaveDivider fromColor="#EEF3EC" toColor="#F9F5EE" />
      </section>

      {/* ── Pricing Cards ─────────────────── */}
      <section className="bg-ivory py-16 md:py-24 px-4 sm:px-6" aria-label="Pricing tiers">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiers.map(({ emoji, label, title, price, note, includes, payment, highlight }) => (
              <article
                key={title}
                className={`rounded-3xl p-7 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col relative ${
                  highlight
                    ? "bg-gradient-to-br from-[#EEF3EC] to-ivory border-2 border-sage/40"
                    : "bg-ivory border border-gold/25"
                }`}
                aria-label={`${title} pricing`}
              >
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-sage text-ivory text-xs font-lato font-semibold px-4 py-1.5 rounded-full shadow-soft">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl" role="img" aria-label={title}>{emoji}</span>
                  <div>
                    <p className="font-dancing text-gold text-sm">{label}</p>
                    <h2 className="font-playfair text-xl font-semibold text-charcoal leading-snug">{title}</h2>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="font-playfair text-3xl font-bold text-sage">{price}</p>
                  <p className="font-dancing text-charcoal-light text-sm mt-0.5">{note}</p>
                </div>

                <ul className="space-y-2 mb-5 flex-1" role="list">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-lato text-charcoal-light">
                      <span className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-warm-gray">
                  <p className="text-xs font-lato text-charcoal-light">
                    <span className="font-semibold text-charcoal">Payment: </span>{payment}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sage text-ivory font-lato font-semibold rounded-2xl hover:bg-sage-dark transition-all shadow-soft"
            >
              Get a Custom Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#F9F5EE" toColor="#F0EDE8" />

      {/* ── Payment Methods ─────────────────── */}
      <section className="bg-warm-gray py-16 md:py-20 px-4 sm:px-6" aria-labelledby="payment-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-dancing text-gold text-xl mb-2">No Complications</p>
            <h2 id="payment-heading" className="font-playfair text-3xl font-bold text-charcoal">
              Simple Payment Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {paymentMethods.map(({ emoji, name, desc, color }) => (
              <div
                key={name}
                className="bg-ivory rounded-3xl p-6 border border-gold/20 shadow-soft text-center"
              >
                <span className="text-4xl mb-3 block" role="img" aria-label={name}>{emoji}</span>
                <h3 className={`font-playfair text-lg font-semibold mb-2 ${color}`}>{name}</h3>
                <p className="font-lato text-sm text-charcoal-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center font-lato text-charcoal-light text-sm mt-6">
            <strong className="text-charcoal">Payment plans are available.</strong> Just ask — I understand nonprofit budgets.
          </p>
        </div>
      </section>

      <WaveDivider fromColor="#F0EDE8" toColor="#F9F5EE" />

      {/* ── Scholarship Note ─────────────────── */}
      <section className="bg-ivory py-12 px-4 sm:px-6" aria-label="Sliding scale note">
        <div className="max-w-3xl mx-auto">
          <VineDivider />
          <div className="border-2 border-gold/40 rounded-3xl p-8 text-center shadow-gold bg-ivory">
            <p className="font-dancing text-gold text-2xl mb-3">Every Community Deserves a Chance</p>
            <p className="font-lato text-charcoal leading-relaxed text-base">
              Is your organization small or just getting started? Reach out —{" "}
              <strong className="text-sage">I always try to find a way to make it work.</strong>{" "}
              Sliding scale and reduced rates are available for organizations with genuine need.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-5 font-lato font-semibold text-sage hover:text-sage-dark transition-colors"
            >
              <Mail size={15} />
              Let's Talk
            </Link>
          </div>
          <VineDivider />
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WaveDivider, VineDivider } from "@/components/Divider";

export const metadata = {
  title: "Services",
  description:
    "Website creation, management, redesign, email setup, and social media — all using free tools, designed for churches and nonprofits.",
};

const services = [
  {
    emoji: "🌐",
    title: "Website Creation",
    subtitle: "Start From Scratch",
    description:
      "Building a brand-new website from the ground up using free platforms — so you have a professional online home without a big budget.",
    includes: [
      "Domain setup guidance",
      "Up to 5 custom pages",
      "Mobile-friendly design",
      "Contact form",
      "Basic SEO setup",
    ],
    ideal: "Organizations with no online presence yet",
  },
  {
    emoji: "🔧",
    title: "Website Management & Maintenance",
    subtitle: "Ongoing Care",
    description:
      "Regular, hands-on care for an existing website — so it's always current, accurate, and working properly without you having to touch a thing.",
    includes: [
"Event calendar updates",
      "Photo and text updates",
      "Basic security checks",
      "Monthly support",
    ],
    ideal: "Organizations with a site that needs regular attention",
  },
  {
    emoji: "✨",
    title: "Website Rescue & Redesign",
    subtitle: "Give It New Life",
    description:
      "For sites that exist but feel outdated, look broken, or are hard to navigate. I'll assess what's there and make it something you're proud to share.",
    includes: [
      "Full site audit and assessment",
      "Redesign or complete rebuild",
      "Mobile optimization",
      "Content cleanup",
    ],
    ideal: "Organizations with an embarrassing or non-functional site",
  },
  {
    emoji: "📧",
    title: "Email & Newsletter Setup",
    subtitle: "Stay Connected",
    description:
      "Set up a free email newsletter so you can send updates, event announcements, and prayer requests directly to your congregation or members.",
    includes: [
      "Mailchimp or similar free platform",
      "Email template design",
      "Subscriber list setup",
      "Training on sending newsletters",
    ],
    ideal: "Organizations that want to communicate regularly by email",
  },
  {
    emoji: "📱",
    title: "Social Media Profile Setup",
    subtitle: "Look Great on Social",
    description:
      "Get your Facebook or Instagram page looking polished and professional — so people who find you online know you're active and welcoming.",
    includes: [
      "Facebook and/or Instagram page",
      "Profile photo & cover image",
      "Bio and contact info",
      "Initial posts to get started",
    ],
    ideal: "Organizations starting on social media or needing a refresh",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Header ─────────────────── */}
      <section className="bg-gradient-to-br from-ivory to-[#EEF3EC] pt-16 pb-0" aria-labelledby="services-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="font-dancing text-gold text-xl mb-2">Simple, Friendly, Affordable</p>
          <h1 id="services-heading" className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Services
          </h1>
          <p className="font-lato text-lg text-charcoal-light max-w-xl mx-auto leading-relaxed">
            Everything your organization needs to build and maintain a meaningful online presence — explained in plain English.
          </p>
        </div>
        <WaveDivider fromColor="#EEF3EC" toColor="#F9F5EE" />
      </section>

      {/* ── Services Grid ─────────────────── */}
      <section className="bg-ivory py-16 md:py-24 px-4 sm:px-6" aria-label="Service offerings">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ emoji, title, subtitle, description, includes, ideal }) => (
              <article
                key={title}
                className="bg-ivory border border-gold/25 rounded-3xl p-7 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-3xl flex-shrink-0" role="img" aria-label={title}>{emoji}</span>
                  <div>
                    <p className="font-dancing text-gold text-sm leading-none">{subtitle}</p>
                    <h2 className="font-playfair text-xl font-semibold text-charcoal leading-snug">{title}</h2>
                  </div>
                </div>

                <p className="font-lato text-sm text-charcoal-light leading-relaxed mb-5 flex-1">
                  {description}
                </p>

                <div className="mb-5">
                  <p className="font-lato font-semibold text-charcoal text-xs uppercase tracking-wider mb-2">
                    What's Included:
                  </p>
                  <ul className="space-y-1.5" role="list">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-lato text-charcoal-light">
                        <span className="text-sage mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-warm-gray">
                  <p className="text-xs font-lato text-charcoal-light">
                    <span className="font-semibold text-sage">Ideal for:</span> {ideal}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#F9F5EE" toColor="#F0EDE8" />

      {/* ── Free Tools Callout ─────────────── */}
      <section className="bg-warm-gray py-12 px-4 sm:px-6" aria-label="Free tools note">
        <div className="max-w-3xl mx-auto">
          <VineDivider />
          <div className="border-2 border-gold/40 bg-ivory rounded-3xl p-8 text-center shadow-gold">
            <p className="font-dancing text-gold text-2xl mb-3">"No Hidden Software Fees"</p>
            <p className="font-lato text-charcoal leading-relaxed">
              I use free and open-source tools wherever possible to keep your costs down. My goal is to make quality web services actually accessible for organizations with limited budgets.
            </p>
          </div>
          <VineDivider />
        </div>
      </section>

      <WaveDivider fromColor="#F0EDE8" toColor="#4A6741" />

      {/* ── CTA ───────────────────────────── */}
      <section className="bg-sage py-16 md:py-20 px-4 sm:px-6 text-center" aria-labelledby="services-cta-heading">
        <div className="max-w-2xl mx-auto">
          <h2 id="services-cta-heading" className="font-playfair text-3xl font-bold text-ivory mb-4">
            Not sure which service you need?
          </h2>
          <p className="font-lato text-ivory/80 text-lg mb-8 leading-relaxed">
            That's completely okay. Just reach out and I'll figure it out with you — no obligation, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ivory font-lato font-semibold rounded-2xl hover:bg-gold-dark transition-all shadow-gold"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-ivory/50 text-ivory font-lato font-semibold rounded-2xl hover:bg-ivory/10 transition-all"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { WaveDivider, VineDivider, GoldLineDivider } from "@/components/Divider";
import { Heart, Users } from "lucide-react";

export const metadata = {
  title: "About Me",
  description:
    "Learn about The Web Administrator — a personal, faith-friendly web services business dedicated to helping nonprofits and churches build an online presence they're proud of.",
};


export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ───────────────── */}
      <section className="bg-gradient-to-br from-ivory to-[#EEF3EC] pt-16 pb-0" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="font-dancing text-gold text-xl mb-2">A Friendly Face Behind the Screen</p>
          <h1 id="about-heading" className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            About Me
          </h1>

        </div>
        <WaveDivider fromColor="#EEF3EC" toColor="#F9F5EE" />
      </section>

      {/* ── Personal Introduction ─────────── */}
      <section className="bg-ivory py-16 md:py-24 px-4 sm:px-6" aria-labelledby="intro-heading">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-52 h-52 rounded-full border-4 border-sage/30 shadow-soft-lg mb-5 relative overflow-hidden">
                <img
                  src="/headshot.jpg"
                  alt="Chadlee Stephens — The Web Administrator"
                  className="w-full h-full object-cover"
                />
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gold/20 pointer-events-none" />
              </div>
              {/* Pull-quote callout */}
              <blockquote className="bg-[#EEF3EC] border-l-4 border-gold rounded-r-2xl p-5 mt-2 max-w-xs">
                <p className="font-playfair italic text-charcoal text-sm leading-relaxed">
                  "I started this because I saw churches and nonprofits struggling with technology they shouldn't have to figure out alone. I just want to help."
                </p>
                <footer className="mt-2">
                  <cite className="not-italic font-dancing text-gold text-sm">— Chadlee Stephens, The Web Administrator</cite>
                </footer>
              </blockquote>
            </div>

            {/* Bio text */}
            <div>
              <h2 id="intro-heading" className="font-playfair text-2xl md:text-3xl font-semibold text-charcoal mb-5">
                Hi, I'm <span className="text-sage">Chadlee Stephens</span>
              </h2>
              <div className="space-y-4 font-lato text-charcoal-light leading-relaxed">
                <p>
                  My name is Chadlee Stephens, and I'm based in Kalispell, Montana. I'm a born again, saved, Christian believer — and that faith is the foundation of everything I do.
                </p>
                <p>
                  I started The Web Administrator with one simple goal: to help churches, foundations, and nonprofits that are doing good work in their communities get the online presence they need — without breaking the budget.
                </p>
                <p>
                  I believe that organizations focused on helping others shouldn't have to struggle with technology or overpay for web services. That's why I use as many free tools available to keep your costs down, while providing personal, hands-on service every step of the way.
                </p>
                <p>
                  If your church or organization is ready to reach more people online, I'd love to help make that happen. Let's talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#F9F5EE" toColor="#F0EDE8" />

      {/* ── My Philosophy ─────────────────── */}
      <section className="bg-warm-gray py-16 md:py-24 px-4 sm:px-6" aria-labelledby="philosophy-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-dancing text-gold text-xl mb-2">What I Believe</p>
            <h2 id="philosophy-heading" className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
              My Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart size={28} className="text-gold" aria-hidden="true" />,
                title: "Affordability First",
                body: "I use as many free and open-source tools as I can to build and/or manage sites so that your budget goes to your mission, not software subscriptions. You only pay for my time and services.",
              },
              {
                icon: <Users size={28} className="text-gold" aria-hidden="true" />,
                title: "Personal Service",
                body: "I'm not a faceless agency. When you work with me, you work with me — one person committed to understanding your mission and serving your needs personally every step of the way.",
              },
              {
                icon: <Users size={28} className="text-gold" aria-hidden="true" />,
                title: "Accessibility for Real People",
                body: "Websites should be easy for your congregation or members to use — not just the tech-savvy. I build with real people in mind, and I train you so you're never left stranded.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-ivory rounded-3xl p-7 border border-gold/20 shadow-soft"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">{title}</h3>
                <p className="font-lato text-sm text-charcoal-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#F0EDE8" toColor="#EEF3EC" />

      {/* ── A Note to Churches ────────────── */}
      <section className="bg-[#EEF3EC] py-16 md:py-24 px-4 sm:px-6" aria-labelledby="church-note-heading">
        <div className="max-w-3xl mx-auto">
          <VineDivider />
          <div className="text-center">
            <p className="font-dancing text-gold text-xl mb-2">Just for Church Leaders</p>
            <h2 id="church-note-heading" className="font-playfair text-3xl font-bold text-charcoal mb-8">
              A Note to Pastors & Church Leadership
            </h2>
          </div>

          <div className="bg-ivory border border-gold/30 rounded-3xl p-8 md:p-10 shadow-soft text-charcoal-light font-lato leading-relaxed space-y-4">
            <p>
              I understand that running a church is a calling — not a tech job. You shouldn't have to worry about whether your website is working, whether the sermon archive is up to date, or whether newcomers can find your service times online.
            </p>
            <p>
              Whether you need a simple site with service times and a contact form, or something more complete with a <strong className="text-charcoal font-semibold">sermon archive</strong>, <strong className="text-charcoal font-semibold">event calendar</strong>, <strong className="text-charcoal font-semibold">online giving page</strong>, or <strong className="text-charcoal font-semibold">volunteer sign-up forms</strong> — I can help you build it simply and affordably.
            </p>
            <p>
              I respect the work you do, and I want your website to reflect the warmth and community that already exists within your walls.
            </p>
          </div>

          <GoldLineDivider />

          <div className="text-center">
            <p className="font-lato text-charcoal-light mb-6">
              Ready to talk about bringing your mission online?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sage text-ivory font-lato font-semibold rounded-2xl hover:bg-sage-dark transition-all duration-200 shadow-soft"
            >
              Let's Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

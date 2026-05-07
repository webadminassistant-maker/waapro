import { WaveDivider, VineDivider } from "@/components/Divider";
import ContactForm from "@/components/ContactForm";
import CallingCardModal from "@/components/CallingCardModal";
import { Mail, Clock, Calendar } from "lucide-react";

export const metadata = {
  title: "Contact — Request a Quote",
  description:
    "Reach out to The Web Administrator — fill out a short form or book a free 15-minute call. No pressure, no obligation.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ─────────────────── */}
      <section className="bg-gradient-to-br from-ivory to-[#EEF3EC] pt-16 pb-0" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="font-dancing text-gold text-xl mb-2">Let's Talk</p>
          <h1 id="contact-heading" className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Request a Quote
          </h1>
          <p className="font-lato text-lg text-charcoal-light max-w-xl mx-auto leading-relaxed">
            I'd love to hear about your organization. Fill out the form below and I'll be in touch within 1–2 business days — no pressure, no obligation.
          </p>
        </div>
        <WaveDivider fromColor="#EEF3EC" toColor="#F9F5EE" />
      </section>

      {/* ── Form + Sidebar ─────────────────── */}
      <section className="bg-ivory py-16 md:py-20 px-4 sm:px-6" aria-label="Contact form and information">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form (2/3 width) */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Sidebar (1/3 width) */}
          <aside className="space-y-5">
            {/* Book a call */}
            <div className="bg-[#EEF3EC] border border-sage/20 rounded-3xl p-6 shadow-soft">
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={18} className="text-sage" aria-hidden="true" />
                <h2 className="font-playfair text-lg font-semibold text-charcoal">Prefer to Talk First?</h2>
              </div>
              <p className="font-lato text-sm text-charcoal-light leading-relaxed mb-4">
                Book a free 15-minute call — no commitment required. I'll listen, answer your questions, and figure out the best path forward together.
              </p>
              <CallingCardModal />
              <p className="text-xs text-charcoal-light mt-2 text-center font-dancing">
                Or email me at webadminassistant@gmail.com
              </p>
            </div>

            {/* Direct contact */}
            <div className="bg-ivory border border-gold/20 rounded-3xl p-6 shadow-soft">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={18} className="text-gold" aria-hidden="true" />
                <h2 className="font-playfair text-lg font-semibold text-charcoal">Email Directly</h2>
              </div>
              <a
                href="mailto:webadminassistant@gmail.com"
                className="font-lato text-sm text-sage hover:text-sage-dark transition-colors font-medium break-all"
              >
                webadminassistant@gmail.com
              </a>
              <div className="flex items-center gap-2 mt-3">
                <Clock size={14} className="text-charcoal-light flex-shrink-0" aria-hidden="true" />
                <p className="font-lato text-xs text-charcoal-light">
                  I typically respond within 1–2 business days
                </p>
              </div>
            </div>

            {/* Payment reminder */}
            <div className="bg-warm-gray rounded-2xl p-5 border border-gold/15">
              <p className="font-lato text-xs text-charcoal-light leading-relaxed">
                <span className="font-semibold text-charcoal">Ready to move forward?</span> I accept{" "}
                <span className="text-[#00D632] font-medium">Cash App</span>,{" "}
                <span className="text-[#008CFF] font-medium">Venmo</span>, and{" "}
                <span className="text-sage font-medium">invoice billing</span>.{" "}
                Payment plans available — just ask.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

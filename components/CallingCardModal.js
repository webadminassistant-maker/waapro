"use client";

import { useState } from "react";
import { X, MapPin, Phone, Mail } from "lucide-react";

export default function CallingCardModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-block w-full text-center px-4 py-3 bg-sage text-ivory font-lato font-semibold text-sm rounded-2xl hover:bg-sage-dark transition-all"
      >
        Book a Free Call
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Chadlee Stephens calling card"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Card */}
          <div className="relative z-10 bg-ivory rounded-3xl shadow-soft-lg border border-gold/30 w-full max-w-sm overflow-hidden">

            {/* Header band */}
            <div className="bg-gradient-to-br from-sage to-[#3a5535] px-6 pt-8 pb-14 text-center relative">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close calling card"
                className="absolute top-4 right-4 p-1.5 rounded-full text-ivory/70 hover:text-ivory hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
              <p className="font-dancing text-gold text-lg leading-none">The Web Administrator</p>
            </div>

            {/* Headshot overlapping header */}
            <div className="flex justify-center -mt-10 mb-4">
              <div className="w-20 h-20 rounded-full border-4 border-ivory shadow-soft overflow-hidden">
                <img
                  src="/headshot.jpg"
                  alt="Chadlee Stephens"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="px-6 pb-8 text-center">
              <h2 className="font-playfair text-2xl font-bold text-charcoal leading-tight">
                Chadlee Stephens
              </h2>
              <p className="font-dancing text-gold text-base mt-0.5 mb-5">
                The Web Administrator
              </p>

              <p className="font-lato text-sm text-charcoal-light italic leading-relaxed mb-6 px-2">
                "Serving churches and nonprofits with honest, affordable web services."
              </p>

              <div className="space-y-3 text-left">
                <a
                  href="tel:4062497485"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-sage" />
                  </div>
                  <span className="font-lato text-sm text-charcoal group-hover:text-sage transition-colors">
                    406-249-7485
                  </span>
                </a>

                <a
                  href="mailto:webadminassistant@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-sage" />
                  </div>
                  <span className="font-lato text-sm text-charcoal group-hover:text-sage transition-colors break-all">
                    webadminassistant@gmail.com
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-sage" />
                  </div>
                  <span className="font-lato text-sm text-charcoal">
                    Kalispell, Montana
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gold/20">
                <button
                  onClick={() => setOpen(false)}
                  className="w-full px-4 py-2.5 border-2 border-sage text-sage font-lato font-semibold text-sm rounded-2xl hover:bg-sage hover:text-ivory transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

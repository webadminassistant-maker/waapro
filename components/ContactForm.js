"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const fieldClass =
  "w-full bg-warm-gray border border-gold/20 rounded-2xl px-4 py-3 font-lato text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage/50 transition-all";

const errorClass = "mt-1 text-xs font-lato text-red-500";

const labelClass = "block font-lato text-sm font-semibold text-charcoal mb-1.5";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    setSubmitError(false);
    try {
      const res = await fetch("https://formspree.io/f/xgodyaky", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 bg-[#EEF3EC] rounded-3xl border border-sage/20 shadow-soft">
        <CheckCircle size={52} className="text-sage mb-5" aria-hidden="true" />
        <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
          Thank You!
        </h2>
        <p className="font-lato text-charcoal-light text-sm max-w-sm leading-relaxed">
          Your request has been received. I'll be in touch within 1–2 business days. I'm looking forward to learning about your organization!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Request a quote form"
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-required="true"
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName", { required: "Full name is required" })}
            className={fieldClass}
          />
          {errors.fullName && (
            <p id="fullName-error" className={errorClass} role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Organization Name */}
        <div>
          <label htmlFor="orgName" className={labelClass}>
            Organization Name <span className="text-gold">*</span>
          </label>
          <input
            id="orgName"
            type="text"
            placeholder="Your church or organization"
            aria-required="true"
            aria-describedby={errors.orgName ? "orgName-error" : undefined}
            {...register("orgName", { required: "Organization name is required" })}
            className={fieldClass}
          />
          {errors.orgName && (
            <p id="orgName-error" className={errorClass} role="alert">
              {errors.orgName.message}
            </p>
          )}
        </div>
      </div>

      {/* Organization Type */}
      <div>
        <label htmlFor="orgType" className={labelClass}>
          Organization Type <span className="text-gold">*</span>
        </label>
        <select
          id="orgType"
          aria-required="true"
          aria-describedby={errors.orgType ? "orgType-error" : undefined}
          {...register("orgType", { required: "Please select an organization type" })}
          className={fieldClass}
        >
          <option value="">Select your organization type…</option>
          <option value="Church">Church</option>
          <option value="Club">Club or Civic Group</option>
          <option value="Foundation">Foundation</option>
          <option value="Other Nonprofit">Other Nonprofit</option>
        </select>
        {errors.orgType && (
          <p id="orgType-error" className={errorClass} role="alert">
            {errors.orgType.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email", {
              required: "Email address is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" },
            })}
            className={fieldClass}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone (optional) */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-charcoal-light font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 000-0000"
            {...register("phone")}
            className={fieldClass}
          />
        </div>
      </div>

      {/* Help needed */}
      <div>
        <label htmlFor="service" className={labelClass}>
          What do you need help with? <span className="text-gold">*</span>
        </label>
        <select
          id="service"
          aria-required="true"
          aria-describedby={errors.service ? "service-error" : undefined}
          {...register("service", { required: "Please select what you need help with" })}
          className={fieldClass}
        >
          <option value="">Select a service…</option>
          <option value="New Website">New Website</option>
          <option value="Website Management">Website Management / Ongoing Care</option>
          <option value="Redesign">Website Rescue / Redesign</option>
          <option value="Email Setup">Email & Newsletter Setup</option>
          <option value="Social Media">Social Media Setup</option>
          <option value="Not Sure">Not Sure — Help Me Figure It Out</option>
        </select>
        {errors.service && (
          <p id="service-error" className={errorClass} role="alert">
            {errors.service.message}
          </p>
        )}
      </div>

      {/* About org (optional textarea) */}
      <div>
        <label htmlFor="about" className={labelClass}>
          Tell me about your organization{" "}
          <span className="text-charcoal-light font-normal">(optional but encouraged)</span>
        </label>
        <textarea
          id="about"
          rows={4}
          placeholder="A little about who you are, what you do, and what you're hoping for with a website…"
          {...register("about")}
          className={`${fieldClass} resize-y min-h-[100px]`}
        />
      </div>

      {/* How did you hear */}
      <div>
        <label htmlFor="referral" className={labelClass}>
          How did you hear about me?
        </label>
        <select
          id="referral"
          {...register("referral")}
          className={fieldClass}
        >
          <option value="">Select one…</option>
          <option value="Google">Google Search</option>
          <option value="Word of Mouth">Word of Mouth</option>
          <option value="Social Media">Social Media</option>
          <option value="Church Network">Church or Community Network</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {submitError && (
        <p className="text-sm font-lato text-red-500 text-center" role="alert">
          Something went wrong. Please try again or email me directly at webadminassistant@gmail.com.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-sage text-ivory font-lato font-semibold text-base rounded-2xl hover:bg-sage-dark transition-all duration-200 shadow-soft disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
        aria-label={isSubmitting ? "Sending your request…" : "Send My Request"}
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-ivory/40 border-t-ivory rounded-full animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Send My Request
          </>
        )}
      </button>

      <p className="text-xs font-lato text-charcoal-light text-center">
        I'll be in touch within 1–2 business days. No spam, ever.
      </p>
    </form>
  );
}

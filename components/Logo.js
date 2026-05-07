"use client";

export default function Logo({ size = "default", className = "" }) {
  const small = size === "small";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon: open hand cradling a leaf/globe */}
      <svg
        width={small ? "32" : "44"}
        height={small ? "32" : "44"}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Globe circle */}
        <circle cx="22" cy="17" r="11" fill="#F9F5EE" stroke="#4A6741" strokeWidth="1.5" />
        {/* Globe latitude lines */}
        <ellipse cx="22" cy="17" rx="6" ry="11" stroke="#4A6741" strokeWidth="1" fill="none" />
        <line x1="11" y1="17" x2="33" y2="17" stroke="#4A6741" strokeWidth="1" />
        <line x1="12.5" y1="12" x2="31.5" y2="12" stroke="#4A6741" strokeWidth="0.75" />
        <line x1="12.5" y1="22" x2="31.5" y2="22" stroke="#4A6741" strokeWidth="0.75" />
        {/* Gold accent leaf on top */}
        <path
          d="M22 7 C20 4 17 5 17 8 C17 11 20 12 22 10 C24 12 27 11 27 8 C27 5 24 4 22 7Z"
          fill="#C9A84C"
          opacity="0.85"
        />
        {/* Open hand / cradle at bottom */}
        <path
          d="M14 30 C14 27 17 26 19 27 L22 28 L25 27 C27 26 30 27 30 30 L30 32 C30 33.5 28.5 34 27 33.5 L22 32 L17 33.5 C15.5 34 14 33.5 14 32 Z"
          fill="#4A6741"
          opacity="0.9"
        />
        {/* Palm detail lines */}
        <line x1="19" y1="27.5" x2="18" y2="33" stroke="#F9F5EE" strokeWidth="0.5" opacity="0.6" />
        <line x1="22" y1="28" x2="22" y2="33" stroke="#F9F5EE" strokeWidth="0.5" opacity="0.6" />
        <line x1="25" y1="27.5" x2="26" y2="33" stroke="#F9F5EE" strokeWidth="0.5" opacity="0.6" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="font-dancing text-gold font-semibold tracking-wide"
          style={{ fontSize: small ? "0.65rem" : "0.75rem" }}
        >
          The
        </span>
        <span
          className="font-playfair text-sage font-bold leading-tight"
          style={{ fontSize: small ? "0.95rem" : "1.15rem" }}
        >
          Web Administrator
        </span>
      </div>
    </div>
  );
}

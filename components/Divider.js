export function WaveDivider({ fromColor = "#F9F5EE", toColor = "#F0EDE8", flip = false }) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ transform: flip ? "rotate(180deg)" : "none" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

export function VineDivider({ color = "#4A6741" }) {
  return (
    <div className="flex items-center justify-center py-6" aria-hidden="true">
      <svg
        width="300"
        height="30"
        viewBox="0 0 300 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left vine */}
        <path
          d="M10,15 Q30,5 50,15 Q70,25 90,15 Q110,5 130,15"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        {/* Left leaves */}
        <ellipse cx="50" cy="10" rx="5" ry="3" fill={color} opacity="0.4" transform="rotate(-20,50,10)" />
        <ellipse cx="90" cy="20" rx="5" ry="3" fill={color} opacity="0.4" transform="rotate(20,90,20)" />
        {/* Center ornament */}
        <circle cx="150" cy="15" r="4" fill="#C9A84C" opacity="0.7" />
        <circle cx="150" cy="15" r="2" fill="#C9A84C" opacity="0.9" />
        <line x1="134" y1="15" x2="146" y2="15" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
        <line x1="154" y1="15" x2="166" y2="15" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
        {/* Right vine */}
        <path
          d="M170,15 Q190,5 210,15 Q230,25 250,15 Q270,5 290,15"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        {/* Right leaves */}
        <ellipse cx="210" cy="10" rx="5" ry="3" fill={color} opacity="0.4" transform="rotate(20,210,10)" />
        <ellipse cx="250" cy="20" rx="5" ry="3" fill={color} opacity="0.4" transform="rotate(-20,250,20)" />
      </svg>
    </div>
  );
}

export function GoldLineDivider() {
  return (
    <div className="flex items-center gap-3 my-8" aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold opacity-40" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" fill="#C9A84C" opacity="0.7" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold opacity-40" />
    </div>
  );
}

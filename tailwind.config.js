/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F9F5EE",
        "warm-gray": "#F0EDE8",
        sage: "#4A6741",
        "sage-light": "#6B8F60",
        "sage-dark": "#3A5233",
        gold: "#C9A84C",
        "gold-light": "#DFC278",
        "gold-dark": "#A8872E",
        charcoal: "#2E2E2E",
        "charcoal-light": "#555555",
      },
      fontFamily: {
        playfair: ["Playfair Display", "Georgia", "serif"],
        lato: ["Lato", "system-ui", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(74, 103, 65, 0.08)",
        "soft-lg": "0 8px 40px rgba(74, 103, 65, 0.12)",
        gold: "0 4px 20px rgba(201, 168, 76, 0.15)",
      },
    },
  },
  plugins: [],
};

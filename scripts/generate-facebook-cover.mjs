import sharp from "sharp";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const W = 820;
const H = 312;
const BAR = 14; // top/bottom border bar height

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <style>
      @font-face { font-family: serif; }
    </style>
  </defs>

  <!-- Ivory background -->
  <rect width="${W}" height="${H}" fill="#F5F0E8"/>

  <!-- Sage top bar -->
  <rect x="0" y="0" width="${W}" height="${BAR}" fill="#8B9E6E"/>
  <!-- Sage bottom bar -->
  <rect x="0" y="${H - BAR}" width="${W}" height="${BAR}" fill="#8B9E6E"/>

  <!-- Corner cross — top left -->
  <g opacity="0.10">
    <rect x="28" y="22" width="6" height="40" rx="3" fill="#8B9E6E"/>
    <rect x="14" y="36" width="34" height="6" rx="3" fill="#8B9E6E"/>
  </g>
  <!-- Corner cross accent — top left -->
  <g opacity="0.08">
    <rect x="30" y="24" width="6" height="40" rx="3" fill="#C4A882"/>
    <rect x="16" y="38" width="34" height="6" rx="3" fill="#C4A882"/>
  </g>

  <!-- Corner cross — top right -->
  <g opacity="0.10">
    <rect x="${W - 34}" y="22" width="6" height="40" rx="3" fill="#8B9E6E"/>
    <rect x="${W - 48}" y="36" width="34" height="6" rx="3" fill="#8B9E6E"/>
  </g>
  <g opacity="0.08">
    <rect x="${W - 32}" y="24" width="6" height="40" rx="3" fill="#C4A882"/>
    <rect x="${W - 46}" y="38" width="34" height="6" rx="3" fill="#C4A882"/>
  </g>

  <!-- Corner cross — bottom left -->
  <g opacity="0.10">
    <rect x="28" y="${H - 62}" width="6" height="40" rx="3" fill="#8B9E6E"/>
    <rect x="14" y="${H - 50}" width="34" height="6" rx="3" fill="#8B9E6E"/>
  </g>
  <g opacity="0.08">
    <rect x="30" y="${H - 60}" width="6" height="40" rx="3" fill="#C4A882"/>
    <rect x="16" y="${H - 48}" width="34" height="6" rx="3" fill="#C4A882"/>
  </g>

  <!-- Corner cross — bottom right -->
  <g opacity="0.10">
    <rect x="${W - 34}" y="${H - 62}" width="6" height="40" rx="3" fill="#8B9E6E"/>
    <rect x="${W - 48}" y="${H - 50}" width="34" height="6" rx="3" fill="#8B9E6E"/>
  </g>
  <g opacity="0.08">
    <rect x="${W - 32}" y="${H - 60}" width="6" height="40" rx="3" fill="#C4A882"/>
    <rect x="${W - 46}" y="${H - 48}" width="34" height="6" rx="3" fill="#C4A882"/>
  </g>

  <!-- Main title: THE WEB ADMINISTRATOR -->
  <text
    x="${W / 2}" y="88"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="28"
    font-weight="bold"
    letter-spacing="10"
    fill="#3A3530"
    text-anchor="middle"
    dominant-baseline="middle"
  >THE WEB ADMINISTRATOR</text>

  <!-- Gold divider line -->
  <line x1="${W / 2 - 120}" y1="110" x2="${W / 2 + 120}" y2="110" stroke="#C4A882" stroke-width="1.5" opacity="0.8"/>
  <!-- Small diamond accent -->
  <rect x="${W / 2 - 4}" y="106" width="8" height="8" fill="#C4A882" opacity="0.7" transform="rotate(45 ${W / 2} 110)"/>

  <!-- Tagline line 1 -->
  <text
    x="${W / 2}" y="146"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="19"
    font-style="italic"
    fill="#5C5248"
    text-anchor="middle"
    dominant-baseline="middle"
  >Helping Good Work Get Found</text>

  <!-- Tagline line 2 -->
  <text
    x="${W / 2}" y="172"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="19"
    font-style="italic"
    fill="#5C5248"
    text-anchor="middle"
    dominant-baseline="middle"
  >by the Right People</text>

  <!-- Gold divider line 2 -->
  <line x1="${W / 2 - 90}" y1="194" x2="${W / 2 + 90}" y2="194" stroke="#C4A882" stroke-width="1" opacity="0.6"/>

  <!-- Location / URL -->
  <text
    x="${W / 2}" y="220"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="13"
    letter-spacing="4"
    fill="#8B9E6E"
    text-anchor="middle"
    dominant-baseline="middle"
  >KALISPELL, MONTANA · WAAPRO.COM</text>
</svg>
`.trim();

const outPath = resolve(__dirname, "../public/facebook-cover.png");

sharp(Buffer.from(svg))
  .png()
  .toFile(outPath)
  .then(() => console.log(`✓ Saved to ${outPath}`))
  .catch((err) => { console.error("Error:", err); process.exit(1); });

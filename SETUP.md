# Setup Instructions

> **Important:** This project must be run from a **local folder** (not Google Drive).
> Google Drive's sync process interferes with npm's file writes.

## Step 1 — Copy to a local folder

Copy this entire folder (without `node_modules`) to a local path, e.g.:

```
C:\Projects\TheWebAdministrator
```

## Step 2 — Install dependencies

Open a terminal in that folder and run:

```bash
npm install
```

## Step 3 — Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the full site will be running.

## Step 4 — Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys.

---

## Before launching, fill in these placeholders

Search the codebase for `[PLACEHOLDER` to find all items needing your real content:

| Placeholder | Where |
|---|---|
| Owner name | `app/about/page.js` |
| Owner photo | `app/about/page.js` |
| Email address | `components/Footer.js`, `app/contact/page.js` |
| Formspree form ID | `components/ContactForm.js` |
| Calendly booking URL | `app/contact/page.js` |
| Cash App username | `app/pricing/page.js` |
| Venmo username | `app/pricing/page.js` |
| Facebook URL | `components/Footer.js` |
| Instagram URL | `components/Footer.js` |
| Pricing numbers | `app/pricing/page.js` |
| Portfolio entries | `app/portfolio/page.js` |
| Testimonial quote | `app/page.js` |

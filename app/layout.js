import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "The Web Administrator — Websites for Churches & Nonprofits",
    template: "%s | The Web Administrator",
  },
  description:
    "Affordable, friendly web services for churches, nonprofits, clubs, and community organizations. Built with free tools, managed with care.",
  keywords: ["church website", "nonprofit website", "web design for churches", "affordable web services", "community organization website"],
  openGraph: {
    title: "The Web Administrator — Websites for Churches & Nonprofits",
    description:
      "Affordable, friendly web services for churches, nonprofits, clubs, and community organizations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Web Administrator",
    description: "Websites for churches, nonprofits & community organizations.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:wght@300;400;700&family=Dancing+Script:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-lato text-charcoal bg-ivory antialiased">
        <Header />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

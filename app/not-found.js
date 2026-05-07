import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VineDivider } from "@/components/Divider";

export const metadata = {
  title: "Page Not Found",
  description: "The page you were looking for couldn't be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ivory px-4">
      <div className="text-center max-w-lg">
        <p className="font-dancing text-gold text-6xl mb-4">404</p>
        <h1 className="font-playfair text-3xl font-bold text-charcoal mb-4">
          Page Not Found
        </h1>
        <p className="font-lato text-charcoal-light leading-relaxed mb-8">
          Hmm, I can't find that page. It may have moved, or you may have followed a broken link. Let's get you back on track.
        </p>
        <VineDivider />
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-sage text-ivory font-lato font-semibold rounded-2xl hover:bg-sage-dark transition-all shadow-soft"
        >
          Go Back Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

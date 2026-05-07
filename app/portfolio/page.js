import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { WaveDivider, VineDivider } from "@/components/Divider";

export const metadata = {
  title: "Portfolio",
  description:
    "Real projects built by The Web Administrator — including faith-based web applications, church websites, and nonprofit sites.",
};

const projects = [
  {
    id: 1,
    orgName: "KJV Bible Devotional",
    type: "Faith Based Web Application",
    service: "Full Site Build",
    tags: ["Faith", "Web Application"],
    description:
      "A full featured KJV Bible devotional web application built for Bible study and devotional practice. Features include user dashboards, progress tracking, leaderboards, goals, a Bible log, and separate teacher and student portals.",
    image: "https://media.base44.com/images/public/69b71868b5fb0c048d65581f/4bdf07038_KJVSpine.png/v1/fill/w_1200,h_630/4bdf07038_KJVSpine.png",
    link: "https://mykjvdevotionalwritings.com",
    placeholder: false,
  },
];

const tagColors = {
  Faith: "bg-sage/10 text-sage border-sage/20",
  "Web Application": "bg-gold/10 text-gold-dark border-gold/20",
  "Website Build": "bg-[#EEF3EC] text-sage border-sage/15",
  Redesign: "bg-[#FDF6E3] text-gold-dark border-gold/15",
};

function ProjectCard({ project }) {
  return (
    <article className="bg-ivory border border-gold/20 rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Thumbnail */}
      <div
        className="relative bg-gradient-to-br from-warm-gray to-[#EEF3EC] h-48 flex items-center justify-center border-b border-gold/10 overflow-hidden"
        role="img"
        aria-label={`Screenshot of ${project.orgName}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.orgName} thumbnail`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="mx-auto mb-2">
              <rect x="8" y="12" width="48" height="36" rx="4" fill="#4A6741" opacity="0.12" stroke="#4A6741" strokeWidth="1.5" />
              <rect x="8" y="12" width="48" height="8" rx="4" fill="#4A6741" opacity="0.18" />
              <circle cx="14" cy="16" r="2" fill="#C9A84C" opacity="0.6" />
              <circle cx="20" cy="16" r="2" fill="#C9A84C" opacity="0.4" />
              <rect x="14" y="26" width="20" height="3" rx="1.5" fill="#4A6741" opacity="0.2" />
              <rect x="14" y="32" width="36" height="2" rx="1" fill="#4A6741" opacity="0.12" />
              <rect x="14" y="37" width="28" height="2" rx="1" fill="#4A6741" opacity="0.12" />
              <rect x="14" y="42" width="16" height="2" rx="1" fill="#4A6741" opacity="0.12" />
            </svg>
            {project.placeholder && (
              <p className="font-dancing text-gold/70 text-sm">[Screenshot Placeholder]</p>
            )}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="font-dancing text-gold text-sm">{project.service}</p>
            <h2 className="font-playfair text-xl font-semibold text-charcoal leading-snug">{project.orgName}</h2>
            <p className="font-lato text-xs text-charcoal-light mt-0.5">{project.type}</p>
          </div>
        </div>

        <p className="font-lato text-sm text-charcoal-light leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-lato font-medium px-2.5 py-1 rounded-full border ${tagColors[tag] || "bg-warm-gray text-charcoal-light border-warm-gray"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-lato font-semibold text-sage hover:text-sage-dark transition-colors"
          >
            Visit Site <ExternalLink size={13} />
          </a>
        ) : (
          <p className="text-xs font-lato text-charcoal-light italic">
            {project.placeholder ? "Link coming soon" : "Private client — link not listed"}
          </p>
        )}
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <>
      {/* ── Page Header ─────────────────── */}
      <section className="bg-gradient-to-br from-ivory to-[#EEF3EC] pt-16 pb-0" aria-labelledby="portfolio-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="font-dancing text-gold text-xl mb-2">Work I'm Proud Of</p>
          <h1 id="portfolio-heading" className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Portfolio
          </h1>
          <p className="font-lato text-lg text-charcoal-light max-w-xl mx-auto leading-relaxed">
            A look at organizations I've helped get — and stay — online. Every project is built with care, free tools, and a genuine commitment to the community.
          </p>
        </div>
        <WaveDivider fromColor="#EEF3EC" toColor="#F9F5EE" />
      </section>

      {/* ── Portfolio Grid ─────────────────── */}
      <section className="bg-ivory py-16 md:py-24 px-4 sm:px-6" aria-label="Portfolio projects">
        <div className="max-w-6xl mx-auto">
          {projects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </>
          ) : (
            /* Empty state */
            <div className="text-center py-20">
              <VineDivider />
              <p className="font-playfair text-2xl text-charcoal mb-3">My portfolio is growing!</p>
              <p className="font-lato text-charcoal-light mb-6 max-w-md mx-auto">
                Check back soon — or ask me for references. I'd love to connect you with organizations I've worked with.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage text-ivory font-lato font-semibold rounded-2xl hover:bg-sage-dark transition-all shadow-soft"
              >
                Contact Me <ArrowRight size={15} />
              </Link>
              <VineDivider />
            </div>
          )}
        </div>
      </section>

      <WaveDivider fromColor="#F9F5EE" toColor="#4A6741" />

      {/* ── CTA ───────────────────────────── */}
      <section className="bg-sage py-16 md:py-20 px-4 sm:px-6 text-center" aria-labelledby="portfolio-cta-heading">
        <div className="max-w-2xl mx-auto">
          <h2 id="portfolio-cta-heading" className="font-playfair text-3xl font-bold text-ivory mb-4">
            Want your organization to be next?
          </h2>
          <p className="font-lato text-ivory/80 text-lg mb-8">
            Let's create something you're proud to share.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ivory font-lato font-semibold rounded-2xl hover:bg-gold-dark transition-all shadow-gold"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

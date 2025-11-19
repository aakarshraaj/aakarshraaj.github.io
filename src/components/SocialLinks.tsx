import { FadeIn } from "./FadeIn";
import { ExternalLink } from "lucide-react";

interface SocialLink {
  label: string;
  url: string;
  description?: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/aakarshraaj",
    description: "Code & Projects",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/aakarshraaj/",
    description: "Professional Network",
  },
  {
    label: "Behance",
    url: "https://www.behance.net/aakarshraaj",
    description: "Design Portfolio",
  },
  {
    label: "Medium",
    url: "https://medium.com/@aakarshraaj",
    description: "Writing & Articles",
  },
  {
    label: "PetPen",
    url: "https://www.instagram.com/petpen.official/",
    description: "Writing Community",
  },
  {
    label: "Humans Of Pune",
    url: "https://www.instagram.com/humansofpoona",
    description: "Stories & Photography",
  },
];

export function SocialLinks() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
      <FadeIn>
        <h2
          className="text-neutral-900 dark:text-neutral-100 mb-12"
          style={{
            fontSize: "var(--text-3xl)",
            fontWeight: 400,
            letterSpacing: "var(--tracking-tight)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          Connect & Explore
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SOCIAL_LINKS.map((link, index) => (
          <FadeIn key={link.label} delay={index * 0.05}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 hover:shadow-sm"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-neutral-900 dark:text-neutral-100 group-hover:text-[var(--accent-teal)] transition-colors duration-200"
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </span>
                </div>
                {link.description && (
                  <p
                    className="text-neutral-500 dark:text-neutral-400"
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: 400,
                    }}
                  >
                    {link.description}
                  </p>
                )}
              </div>
              <ExternalLink className="size-4 text-neutral-400 dark:text-neutral-500 group-hover:text-[var(--accent-teal)] transition-colors duration-200 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100" />
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
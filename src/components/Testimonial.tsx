'use client';

import { Quote, Linkedin } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  linkedIn?: string;
  delay?: number;
}

export function Testimonial({ quote, author, role, company, linkedIn, delay = 0 }: TestimonialProps) {
  return (
    <FadeIn delay={delay}>
      <div className="relative p-8 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
        <Quote className="absolute top-6 left-6 w-8 h-8 text-[#00829f] opacity-20 dark:opacity-40" />
        <div className="relative pl-8">
          <p
            className="text-neutral-700 dark:text-neutral-300 italic mb-6"
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 400,
            }}
          >
            "{quote}"
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p
                className="text-neutral-900 dark:text-neutral-100"
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 500,
                }}
              >
                {author}
              </p>
              <p
                className="text-neutral-500 dark:text-neutral-400"
                style={{
                  fontSize: 'var(--text-sm)',
                }}
              >
                {role} at {company}
              </p>
            </div>
            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group"
                aria-label={`View ${author}'s LinkedIn profile`}
              >
                <Linkedin className="w-5 h-5 text-neutral-400 dark:text-neutral-500 group-hover:text-[#0077b5] dark:group-hover:text-[#0077b5] transition-colors" />
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

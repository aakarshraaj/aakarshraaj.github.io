'use client';

import { ExternalLink } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { calculateTenure } from '../utils/calculateTenure';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  impact?: string;
}

interface ExperienceItemProps {
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  highlights: Array<string | { text: string; links?: Array<{ text: string; url: string }> }>;
  projects?: Project[];
}

export function ExperienceItem({ 
  company, 
  location, 
  role, 
  startDate,
  endDate,
  highlights,
  projects
}: ExperienceItemProps) {
  const duration = calculateTenure(startDate, endDate);
  
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Company Header */}
      <div className="flex flex-col gap-3">
        <h3 
          className="text-neutral-900 dark:text-neutral-100" 
          style={{ 
            fontSize: 'var(--text-2xl)',
            fontWeight: 400,
            letterSpacing: 'var(--tracking-tight)',
            lineHeight: 'var(--leading-tight)'
          }}
        >
          {company}
        </h3>
        <div 
          className="text-neutral-500 dark:text-neutral-400 flex flex-wrap gap-x-3 gap-y-1"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 400,
            letterSpacing: 'var(--tracking-wide)'
          }}
        >
          <span>{location}</span>
          <span className="text-neutral-300 dark:text-neutral-600">/</span>
          <span>{role}</span>
          <span className="text-neutral-300 dark:text-neutral-600">/</span>
          <span>{duration}</span>
        </div>
      </div>
      
      {/* Highlights */}
      <ul className="space-y-4 pl-6 list-disc marker:text-neutral-300 dark:marker:text-neutral-600">
        {highlights.map((highlight, index) => (
          <li 
            key={index}
            className="text-neutral-700 dark:text-neutral-300 pl-3"
            style={{
              fontSize: 'var(--text-xl)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 400
            }}
          >
            {typeof highlight === 'string' ? (
              highlight
            ) : (
              <>
                {highlight.text}
                {highlight.links?.map((link, linkIndex) => (
                  <span key={linkIndex}>
                    <a
                      className="inline-flex items-center gap-1 transition-all duration-300 hover:gap-2 group"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        fontWeight: 500,
                        color: 'var(--accent-teal)',
                        textDecoration: 'underline',
                        textDecorationColor: 'rgba(0, 130, 159, 0.3)'
                      }}
                    >
                      {link.text}
                      <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                    {linkIndex < (highlight.links?.length || 0) - 1 && ' and the '}
                  </span>
                ))}
                .
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Projects */}
      {projects && projects.length > 0 && (
        <div className="flex flex-col gap-6 mt-4">
          <h4 
            className="text-neutral-500 dark:text-neutral-400"
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 400,
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase'
            }}
          >
            Key Projects
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

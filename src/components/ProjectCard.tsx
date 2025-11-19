'use client';

import { ExternalLink } from 'lucide-react';
import { ProjectIllustration } from './ProjectIllustration';
import { useState, useRef, MouseEvent } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  impact?: string;
  illustration?: 'ai-chat' | 'platform' | 'design-system' | 'automotive' | 'generic';
}

export function ProjectCard({ title, description, tags, link, impact, illustration }: ProjectCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 10 degrees for subtle effect)
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setScale(1.02);
  };

  const handleMouseEnter = () => {
    // Just trigger the hover state
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  const CardContent = () => (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col gap-4 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease',
        willChange: 'transform',
      }}
    >
      {/* Optional Illustration */}
      {illustration && <ProjectIllustration type={illustration} />}
      
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h4 
          className="text-neutral-900 dark:text-neutral-100 flex-1"
          style={{
            fontSize: 'var(--text-lg)',
            fontWeight: 500,
            letterSpacing: 'var(--tracking-tight)',
            lineHeight: 'var(--leading-snug)'
          }}
        >
          {title}
        </h4>
        {link && (
          <ExternalLink className="w-5 h-5 text-neutral-400 dark:text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        )}
      </div>

      {/* Description */}
      <p 
        className="text-neutral-600 dark:text-neutral-400"
        style={{
          fontSize: 'var(--text-base)',
          lineHeight: 'var(--leading-relaxed)',
          fontWeight: 400
        }}
      >
        {description}
      </p>

      {/* Impact Metric */}
      {impact && (
        <p 
          className="text-teal-600 dark:text-teal-400"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 500,
            letterSpacing: 'var(--tracking-wide)'
          }}
        >
          {impact}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-200 dark:border-neutral-600"
            style={{
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.02em'
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}
'use client';

import { Clock } from 'lucide-react';

export function ReadingTime() {
  // Estimated reading time based on average reading speed of 200-250 words per minute
  const estimatedMinutes = 8;

  return (
    <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
      <Clock className="w-4 h-4" />
      <span style={{ fontSize: 'var(--text-sm)', letterSpacing: 'var(--tracking-wide)' }}>
        {estimatedMinutes} min read
      </span>
    </div>
  );
}

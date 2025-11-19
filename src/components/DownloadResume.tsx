'use client';

import { Calendar } from "lucide-react";

export function DownloadResume() {
  return (
    <a
      href="https://cal.com/aakarshraaj"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-8 right-[5.5rem] z-50 flex items-center gap-2.5 pl-4 pr-5 py-2.5 rounded-full
                 bg-white dark:bg-neutral-800
                 border border-neutral-200 dark:border-neutral-700
                 text-neutral-700 dark:text-neutral-300
                 hover:bg-neutral-50 dark:hover:bg-neutral-700
                 hover:border-neutral-300 dark:hover:border-neutral-600
                 transition-all duration-300
                 shadow-lg hover:shadow-xl"
      style={{ height: '48px' }}
      aria-label="Book a Meeting"
    >
      <Calendar 
        className="w-4 h-4" 
        strokeWidth={1.5}
      />
      <span 
        className="hidden sm:inline"
        style={{
          fontSize: '0.875rem',
          fontWeight: 400,
          letterSpacing: '0.01em'
        }}
      >
        Book Meeting
      </span>
    </a>
  );
}
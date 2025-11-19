'use client';

interface ProjectIllustrationType {
  type: 'ai-chat' | 'platform' | 'design-system' | 'automotive' | 'generic';
}

export function ProjectIllustration({ type }: ProjectIllustrationType) {
  const illustrations = {
    'ai-chat': (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Abstract AI Chat - Neural Network Nodes */}
        <g className="stroke-neutral-300 dark:stroke-neutral-700" fill="none" strokeWidth="1">
          {/* Connection lines */}
          <line x1="30" y1="40" x2="50" y2="60" strokeDasharray="2,2" />
          <line x1="30" y1="80" x2="50" y2="60" strokeDasharray="2,2" />
          <line x1="50" y1="60" x2="70" y2="60" strokeDasharray="2,2" />
          <line x1="70" y1="60" x2="90" y2="40" strokeDasharray="2,2" />
          <line x1="70" y1="60" x2="90" y2="80" strokeDasharray="2,2" />
        </g>
        <g className="fill-neutral-200 dark:fill-neutral-800 stroke-[#00829f]" strokeWidth="1.5">
          {/* Nodes */}
          <circle cx="30" cy="40" r="6" />
          <circle cx="30" cy="80" r="6" />
          <circle cx="50" cy="60" r="8" className="fill-[#00829f]/10" />
          <circle cx="70" cy="60" r="8" className="fill-[#00829f]/10" />
          <circle cx="90" cy="40" r="6" />
          <circle cx="90" cy="80" r="6" />
        </g>
      </svg>
    ),
    'platform': (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Abstract Platform - Building Blocks */}
        <g className="stroke-neutral-300 dark:stroke-neutral-700 fill-none" strokeWidth="1.5">
          <rect x="20" y="50" width="25" height="25" rx="2" />
          <rect x="50" y="50" width="25" height="25" rx="2" />
          <rect x="80" y="50" width="25" height="25" rx="2" />
          <rect x="35" y="25" width="25" height="25" rx="2" className="stroke-[#00829f]" />
          <rect x="65" y="25" width="25" height="25" rx="2" className="stroke-[#00829f]" />
        </g>
      </svg>
    ),
    'design-system': (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Abstract Design System - Modular Grid */}
        <g className="stroke-neutral-300 dark:stroke-neutral-700" fill="none" strokeWidth="1">
          <line x1="30" y1="30" x2="90" y2="30" />
          <line x1="30" y1="50" x2="90" y2="50" />
          <line x1="30" y1="70" x2="90" y2="70" />
          <line x1="30" y1="90" x2="90" y2="90" />
          <line x1="30" y1="30" x2="30" y2="90" />
          <line x1="50" y1="30" x2="50" y2="90" />
          <line x1="70" y1="30" x2="70" y2="90" />
          <line x1="90" y1="30" x2="90" y2="90" />
        </g>
        <g className="fill-[#00829f]/20">
          <rect x="31" y="31" width="18" height="18" />
          <rect x="51" y="51" width="18" height="18" />
          <rect x="71" y="71" width="18" height="18" />
        </g>
      </svg>
    ),
    'automotive': (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Abstract Automotive - Flow Lines */}
        <g className="stroke-neutral-300 dark:stroke-neutral-700 fill-none" strokeWidth="1.5">
          <path d="M 20 60 Q 40 40, 60 60 T 100 60" />
          <path d="M 20 70 Q 40 50, 60 70 T 100 70" className="stroke-[#00829f]" />
          <path d="M 20 80 Q 40 60, 60 80 T 100 80" />
        </g>
      </svg>
    ),
    'generic': (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Abstract Generic - Geometric Shape */}
        <g className="stroke-[#00829f] fill-none" strokeWidth="1.5">
          <circle cx="60" cy="60" r="30" />
          <circle cx="60" cy="60" r="20" className="stroke-neutral-300 dark:stroke-neutral-700" />
        </g>
      </svg>
    ),
  };

  return (
    <div className="absolute -top-3 -right-3 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      {illustrations[type] || illustrations.generic}
    </div>
  );
}

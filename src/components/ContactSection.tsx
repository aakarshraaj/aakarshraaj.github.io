'use client';

import svgPaths from "../imports/svg-eic3ays5ke";
import { toast } from "sonner@2.0.3";
import { Mail, Linkedin } from 'lucide-react';

interface ContactSectionProps {
  variant: 'dark' | 'teal';
  type: 'email' | 'linkedin';
}

export function ContactSection({ variant, type }: ContactSectionProps) {
  const bgColor = variant === 'dark' ? 'bg-neutral-900 dark:bg-neutral-950' : 'bg-[#00829f]';
  
  const contactInfo = {
    email: {
      label: 'Email Me',
      value: 'aakarshraaj@outlook.com',
      icon: Mail,
      message: 'Email copied to clipboard!',
      action: 'copy',
    },
    linkedin: {
      label: 'Connect on LinkedIn',
      value: 'https://linkedin.com/in/aakarshraaj',
      icon: Linkedin,
      message: 'Opening LinkedIn...',
      action: 'redirect',
    },
  };
  
  const info = contactInfo[type];
  
  const handleClick = async () => {
    if (info.action === 'redirect') {
      // Open LinkedIn in new tab
      window.open(info.value, '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Copy to clipboard for email
    try {
      // Try modern Clipboard API first
      await navigator.clipboard.writeText(info.value);
      toast.success(info.message, {
        duration: 3000,
        className: 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700',
      });
    } catch (err) {
      // Fallback for browsers/contexts where Clipboard API is blocked
      try {
        const textArea = document.createElement('textarea');
        textArea.value = info.value;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          toast.success(info.message, {
            duration: 3000,
            className: 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700',
          });
        } else {
          throw new Error('Copy command failed');
        }
      } catch (fallbackErr) {
        // If all else fails, show the value so user can copy manually
        toast.error(`Please copy manually: ${info.value}`, {
          duration: 5000,
          className: 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700',
        });
      }
    }
  };
  
  return (
    <div 
      className={`basis-0 ${bgColor} grow min-h-px min-w-px cursor-pointer hover:brightness-125 transition-all duration-300 group`} 
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Click to copy ${info.label}`}
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border flex flex-col justify-between py-12 px-16 w-full h-full min-h-[200px]">
          <div className="flex items-center gap-4">
            <div className="overflow-clip transition-transform group-hover:translate-x-2 duration-300">
              <div className="size-6">
                <svg className="block size-full" viewBox="0 0 48 48">
                  <path d={svgPaths.p3d7efb70} fill="white" />
                </svg>
              </div>
            </div>
            <p 
              className="text-white"
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 400,
                letterSpacing: 'var(--tracking-tight)'
              }}
            >
              {info.label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
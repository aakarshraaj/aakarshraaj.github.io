'use client';

import { useEffect, useState, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldGlow, setShouldGlow] = useState(false);
  const isScrollingRef = useRef(false);
  const hasReachedBottomRef = useRef(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
      
      const prevProgress = scrollProgress;
      setScrollProgress(progress);

      // Trigger 1: Scroll meter goes from 0 to 1+ (start scrolling)
      if (prevProgress === 0 && progress > 0) {
        triggerGlow();
      }

      // Trigger 2: Scroll meter hits 100 (reached bottom)
      if (prevProgress < 99 && progress >= 99 && !hasReachedBottomRef.current) {
        hasReachedBottomRef.current = true;
        triggerGlow();
      }

      // Trigger 3: Scroll meter hits 0 (back to top)
      if (prevProgress > 0 && progress === 0) {
        hasReachedBottomRef.current = false;
        triggerGlow();
      }

      // Reset bottom flag when scrolling away from bottom
      if (progress < 95) {
        hasReachedBottomRef.current = false;
      }
    };

    const triggerGlow = () => {
      setShouldGlow(true);
      setTimeout(() => setShouldGlow(false), 800);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress]);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Calculate the conic gradient for circular progress
  const progressAngle = (scrollProgress / 100) * 360;

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-8 right-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      style={{
        background: `
          conic-gradient(
            from -90deg,
            #00829f ${progressAngle}deg,
            transparent ${progressAngle}deg
          ),
          ${isDark ? '#262626' : '#ffffff'}
        `,
        padding: '4px',
        width: '48px',
        height: '48px',
        cursor: 'pointer',
        boxShadow: shouldGlow 
          ? '0 0 0 4px rgba(0, 130, 159, 0.15), 0 0 20px rgba(0, 130, 159, 0.3), 0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          : undefined,
        transition: 'box-shadow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      aria-label="Toggle dark mode"
    >
      <div className="bg-white dark:bg-neutral-800 rounded-full w-full h-full flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-500" />
        ) : (
          <Moon className="w-5 h-5 text-neutral-700" />
        )}
      </div>
    </button>
  );
}
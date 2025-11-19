interface SkillTagProps {
  label: string;
}

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="inline-block border border-neutral-300 dark:border-neutral-700 
                     bg-neutral-50 dark:bg-neutral-800 
                     hover:bg-neutral-100 dark:hover:bg-neutral-700
                     hover:border-neutral-400 dark:hover:border-neutral-600
                     transition-colors px-3 py-1 
                     text-neutral-800 dark:text-neutral-200">
      {label}
    </span>
  );
}

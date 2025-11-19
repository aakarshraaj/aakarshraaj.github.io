interface HighlightProps {
  children: React.ReactNode;
}

export function Highlight({ children }: HighlightProps) {
  return (
    <span 
      className="text-[#00829f] dark:text-[#00a3cc]"
      style={{
        background: 'rgba(0, 130, 159, 0.15)',
        padding: '2px 6px',
        borderRadius: '3px',
      }}
    >
      {children}
    </span>
  );
}

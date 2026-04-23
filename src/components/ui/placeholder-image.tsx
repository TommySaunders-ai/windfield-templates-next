export function PlaceholderImage({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-surface border border-border rounded-xl flex items-center justify-center overflow-hidden ${className}`}
    >
      <svg
        className="w-12 h-12 text-fg-faint"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  );
}

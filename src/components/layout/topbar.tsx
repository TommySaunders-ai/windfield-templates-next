"use client";

import Link from "next/link";

interface TopbarProps {
  seriesTitle?: string;
  articleTitle?: string;
  seriesSlug?: string;
  onMenuToggle?: () => void;
}

export function Topbar({
  seriesTitle,
  articleTitle,
  seriesSlug,
  onMenuToggle,
}: TopbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-bg/[0.92] backdrop-blur-[12px] border-b border-border px-6 md:px-8 flex items-center justify-between min-h-[48px]">
      <div className="flex items-center gap-3">
        {/* Mobile hamburger */}
        {onMenuToggle && (
          <button
            className="min-[880px]:hidden p-1.5 text-fg-muted hover:text-fg rounded-md hover:bg-surface transition-colors"
            onClick={onMenuToggle}
            aria-label="Toggle sidebar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        )}

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px]">
          <Link href="/" className="text-fg-muted hover:text-fg transition-colors font-medium">
            Project IO
          </Link>

          {seriesTitle && (
            <>
              <span className="text-fg-faint select-none">/</span>
              <Link
                href={seriesSlug ? `/${seriesSlug}` : "/"}
                className="text-brand font-semibold hover:text-brand/80 transition-colors"
              >
                {seriesTitle}
              </Link>
            </>
          )}

          {articleTitle && (
            <>
              <span className="text-fg-faint select-none">/</span>
              <span className="text-fg font-semibold truncate max-w-[200px]">{articleTitle}</span>
            </>
          )}
        </nav>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <span className="hidden md:flex items-center gap-1.5 text-[9px] font-semibold tracking-[.15em] uppercase text-fg-faint">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          Windfield IO
        </span>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

interface TopbarProps {
  seriesTitle?: string;
  articleTitle?: string;
  seriesSlug?: string;
  onMenuToggle?: () => void;
}

/* ------------------------------------------------------------------ */
/*  Topbar — sticky breadcrumb bar                                     */
/* ------------------------------------------------------------------ */

export function Topbar({
  seriesTitle,
  articleTitle,
  seriesSlug,
  onMenuToggle,
}: TopbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-bg/[0.92] backdrop-blur-[12px] border-b border-border px-8 flex items-center gap-2 min-h-[40px]">
      {/* Mobile hamburger */}
      {onMenuToggle && (
        <button
          className="min-[880px]:hidden p-1 text-fg"
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
        >
          &#9776;
        </button>
      )}

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[10.5px]">
        <Link href="/" className="text-fg-muted hover:text-fg transition-colors">
          Project IO
        </Link>

        {seriesTitle && (
          <>
            <span className="text-border-strong select-none">&rsaquo;</span>
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
            <span className="text-border-strong select-none">&rsaquo;</span>
            <span className="text-brand font-semibold">{articleTitle}</span>
          </>
        )}
      </nav>
    </header>
  );
}

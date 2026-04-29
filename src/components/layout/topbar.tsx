"use client";

import Link from "next/link";

function SearchIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function ChevronSep() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="io-bc-sep">
      <path d="M6 3l5 5-5 5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

interface TopbarProps {
  seriesTitle?: string;
  articleTitle?: string;
  seriesSlug?: string;
  onMenuToggle?: () => void;
  onSearchOpen?: () => void;
}

export function Topbar({
  seriesTitle,
  articleTitle,
  seriesSlug,
  onMenuToggle,
  onSearchOpen,
}: TopbarProps) {
  return (
    <div className="io-topbar">
      <div className="io-breadcrumbs">
        {/* Mobile hamburger */}
        {onMenuToggle && (
          <button
            className="min-[880px]:hidden"
            onClick={onMenuToggle}
            aria-label="Toggle sidebar"
            style={{ color: "var(--iol-text-muted)", padding: 4, marginRight: 4 }}
          >
            <MenuIcon />
          </button>
        )}

        <Link href="/">IO Marketing OS</Link>

        {seriesTitle && (
          <>
            <ChevronSep />
            <Link
              href={seriesSlug ? `/${seriesSlug}` : "/"}
              style={{ color: "var(--iol-text-secondary)" }}
            >
              {seriesTitle}
            </Link>
          </>
        )}

        {articleTitle && (
          <>
            <ChevronSep />
            <span className="io-bc-current">{articleTitle}</span>
          </>
        )}
      </div>

      <div className="io-topbar-actions">
        {/* Search pill */}
        <div
          className="io-topbar-search hidden md:flex"
          onClick={onSearchOpen}
        >
          <SearchIcon />
          <span>Search...</span>
          <kbd>Cmd+K</kbd>
        </div>

        {/* Status */}
        <div className="io-topbar-status hidden md:flex">
          <span className="io-topbar-status-dot" />
          Windfield IO
        </div>
      </div>
    </div>
  );
}

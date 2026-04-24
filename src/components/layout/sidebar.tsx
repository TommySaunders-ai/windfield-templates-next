"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allSeries } from "@/data/series";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

/* ------------------------------------------------------------------ */
/*  Icons (inline SVG to avoid extra deps)                             */
/* ------------------------------------------------------------------ */

function HouseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

function ChevronIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      className={`${className ?? ""} transition-transform duration-200 ${open ? "rotate-90" : ""}`}
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Sidebar                                                            */
/* ------------------------------------------------------------------ */

export function Sidebar({ open = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  /* Determine which series is active so it opens by default */
  const activeSeriesSlug = allSeries.find((s) =>
    s.articles.some((a) => pathname === `/${s.slug}/${a.slug}`)
  )?.slug;

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    allSeries.forEach((s) => {
      init[s.slug] = s.slug === activeSeriesSlug;
    });
    return init;
  });

  /* Keep active series open when navigating */
  useEffect(() => {
    if (activeSeriesSlug) {
      setExpanded((prev) => ({ ...prev, [activeSeriesSlug]: true }));
    }
  }, [activeSeriesSlug]);

  const toggle = useCallback((slug: string) => {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }, []);

  /* Close on Escape */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) {
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    }
  }, [open, onClose]);

  const isHome = pathname === "/";

  /* ----- Sidebar content (shared between mobile & desktop) ----- */
  const content = (
    <div className="flex flex-col h-full bg-[#0f0f11] border-r border-border">
      {/* ── Brand section ── */}
      <div className="px-5 pt-5 pb-4 border-b border-border">
        <p className="text-[9px] font-semibold tracking-[.22em] uppercase text-brand leading-tight">
          PROJECT IO &middot; COMPLETE SERIES
        </p>
        <h1 className="text-lg font-bold text-fg mt-1.5 leading-snug">
          IO Marketing OS
        </h1>
        <p className="text-[10px] text-fg-subtle mt-0.5">
          14 Series &middot; 129 Articles
        </p>
      </div>

      {/* ── Scrollable nav ── */}
      <nav className="flex-1 overflow-y-auto py-2 scrollbar-thin">
        {/* Home link */}
        <Link
          href="/"
          onClick={() => onClose?.()}
          className={`flex items-center gap-2.5 mx-2 px-3 py-2 rounded-md text-[13px] transition-colors duration-150 ${
            isHome
              ? "bg-brand/10 text-brand font-semibold border-r-2 border-brand"
              : "text-fg-muted hover:bg-brand/[0.06] hover:text-fg"
          }`}
        >
          <HouseIcon className="shrink-0" />
          <span>Home &middot; Full System</span>
        </Link>

        {/* Series list */}
        {allSeries.map((series) => {
          const isOpen = expanded[series.slug] ?? false;

          return (
            <div key={series.slug} className="mt-1">
              {/* Section label */}
              <div className="flex items-center gap-2 px-5 pt-4 pb-1.5">
                <span className="text-[8.5px] font-semibold tracking-[.22em] uppercase text-fg-subtle whitespace-nowrap">
                  SERIES {series.number}
                </span>
                <span className="flex-1 h-px bg-border" aria-hidden="true" />
              </div>

              {/* Toggle button */}
              <button
                onClick={() => toggle(series.slug)}
                className="flex items-center justify-between w-full px-5 py-1.5 text-left text-[12.5px] font-medium text-fg-muted hover:text-fg transition-colors duration-150"
              >
                <span className="truncate pr-2">{series.title}</span>
                <ChevronIcon open={isOpen} className="shrink-0 text-fg-subtle" />
              </button>

              {/* Collapsible article list */}
              {isOpen && (
                <ul className="mt-0.5 mb-1">
                  {series.articles.map((article) => {
                    const href = `/${series.slug}/${article.slug}`;
                    const isActive = pathname === href;

                    return (
                      <li key={article.slug}>
                        <Link
                          href={href}
                          onClick={() => onClose?.()}
                          className={`flex items-center gap-2 mx-2 px-3 py-[5px] rounded-md text-[11.5px] leading-snug transition-colors duration-150 ${
                            isActive
                              ? "bg-brand/10 text-brand font-semibold border-r-2 border-brand"
                              : "text-fg-muted hover:bg-brand/[0.06] hover:text-fg"
                          }`}
                        >
                          <span className="text-[9px] font-bold text-fg-subtle w-[18px] shrink-0 text-right">
                            {article.number}
                          </span>
                          <span
                            className="w-[7px] h-[7px] rounded-full shrink-0"
                            style={{ backgroundColor: series.color }}
                            aria-hidden="true"
                          />
                          <span className="truncate">{article.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      {/* ── Footer ── */}
      <div className="px-5 py-3 border-t border-border">
        <p className="text-[9.5px] text-fg-subtle">
          Project IO &middot; Marketing OS &middot; Complete Series
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* ── Mobile overlay ── */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 min-[880px]:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar shell ── */}
      <aside
        className={[
          "fixed top-0 left-0 z-50 h-full w-[220px]",
          /* Mobile: off-screen by default, slide in when open */
          "max-[879px]:transition-transform max-[879px]:duration-300 max-[879px]:ease-in-out",
          open
            ? "max-[879px]:translate-x-0"
            : "max-[879px]:-translate-x-full",
          /* Desktop: always visible */
          "min-[880px]:translate-x-0",
        ].join(" ")}
      >
        {content}
      </aside>
    </>
  );
}

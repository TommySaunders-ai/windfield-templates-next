"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allSeries } from "@/data/series";

function ChevronL({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M10 3L5 8l5 5" />
    </svg>
  );
}

function ChevronR({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M6 3l5 5-5 5" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

interface GlobalRailProps {
  activeSeries?: string;
  onSelectSeries?: (slug: string) => void;
}

export function GlobalRail({ activeSeries, onSelectSeries }: GlobalRailProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("io-rail-collapsed") === "1") setCollapsed(true);
    } catch {}
  }, []);

  const toggleCollapse = () => {
    setCollapsed((prev) => {
      try { localStorage.setItem("io-rail-collapsed", prev ? "0" : "1"); } catch {}
      return !prev;
    });
  };

  // Determine which series is active from the URL
  const currentSeriesSlug = activeSeries || allSeries.find((s) =>
    pathname === `/${s.slug}` || pathname.startsWith(`/${s.slug}/`)
  )?.slug;

  const isHome = pathname === "/";

  return (
    <aside className={`io-rail ${collapsed ? "io-rail-collapsed" : ""}`}>
      {/* Workspace pill */}
      <div className="io-rail-workspace">
        <span className="io-rail-mark">IO</span>
        {!collapsed && (
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="io-rail-name">IO Marketing OS</div>
            <div className="io-rail-sub">COMPLETE SERIES</div>
          </div>
        )}
      </div>

      {/* Series list */}
      <div className="io-rail-body io-scroll">
        {/* Home link */}
        <Link
          href="/"
          className={`io-rail-item io-rail-home ${isHome ? "active" : ""}`}
          style={isHome ? { "--io-mod": "#1db954" } as React.CSSProperties : undefined}
          title="Home"
        >
          <span className="io-rail-dot" style={{ background: "#1db954" }} />
          <HomeIcon />
          {!collapsed && <span className="io-rail-label">HOME</span>}
        </Link>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--iol-border-subtle)", margin: "4px 8px" }} />

        {/* Series entries */}
        {allSeries.map((series) => {
          const isActive = currentSeriesSlug === series.slug;
          return (
            <Link
              key={series.slug}
              href={`/${series.slug}`}
              className={`io-rail-item ${isActive ? "active" : ""}`}
              style={isActive ? { "--io-mod": series.color } as React.CSSProperties : undefined}
              title={series.title}
              onClick={() => onSelectSeries?.(series.slug)}
            >
              <span className="io-rail-dot" style={{ background: series.color }} />
              {!collapsed && <span className="io-rail-num">{series.number}</span>}
              {!collapsed && <span className="io-rail-label">{series.title.toUpperCase()}</span>}
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="io-rail-footer">
        <button className="io-rail-collapse" onClick={toggleCollapse} title={collapsed ? "Expand" : "Collapse"}>
          {collapsed ? <ChevronR size={12} /> : <ChevronL size={12} />}
        </button>
      </div>
    </aside>
  );
}

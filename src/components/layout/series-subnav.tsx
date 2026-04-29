"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allSeries, type Series } from "@/data/series";

function ChevronL({ size = 11 }: { size?: number }) {
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

function SeriesIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

export function SeriesSubnav() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("io-subnav-collapsed") === "1") setCollapsed(true);
    } catch {}
  }, []);

  const toggleCollapse = () => {
    setCollapsed((prev) => {
      try { localStorage.setItem("io-subnav-collapsed", prev ? "0" : "1"); } catch {}
      return !prev;
    });
  };

  // Find the active series from URL
  const activeSeries = allSeries.find((s) =>
    pathname === `/${s.slug}` || pathname.startsWith(`/${s.slug}/`)
  );

  // If on home page, show nothing (or a summary)
  if (!activeSeries) {
    if (collapsed) {
      return (
        <aside className="io-subnav io-subnav-collapsed">
          <button className="io-subnav-collapse" onClick={toggleCollapse} title="Expand" style={{ margin: "8px auto" }}>
            <ChevronR size={12} />
          </button>
        </aside>
      );
    }

    return (
      <aside className="io-subnav">
        <div className="io-subnav-titlebar" style={{ "--io-mod": "#1db954" } as React.CSSProperties}>
          <div className="io-subnav-titlebar-bar" />
          <HomeIcon />
          <div className="io-subnav-title">All Series</div>
          <button className="io-subnav-collapse" onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleCollapse(); }} title="Collapse">
            <ChevronL />
          </button>
        </div>
        <div className="io-subnav-body io-scroll">
          <div className="io-subnav-section-header">Series</div>
          {allSeries.map((series) => (
            <Link
              key={series.slug}
              href={`/${series.slug}`}
              className="io-subnav-item"
            >
              <span className="io-subnav-item-num">{series.number}</span>
              <span className="io-subnav-item-dot" style={{ background: series.color }} />
              <span className="io-subnav-item-label">{series.title}</span>
            </Link>
          ))}
        </div>
        <div className="io-subnav-count">
          14 Series · 129 Articles
        </div>
      </aside>
    );
  }

  // Collapsed with active series
  if (collapsed) {
    return (
      <aside className="io-subnav io-subnav-collapsed" style={{ "--io-mod": activeSeries.color } as React.CSSProperties}>
        <button className="io-subnav-collapse" onClick={toggleCollapse} title={"Expand " + activeSeries.title} style={{ margin: "8px auto" }}>
          <ChevronR size={12} />
        </button>
        <div className="io-subnav-collapsed-icon" style={{ color: activeSeries.color }}>
          <SeriesIcon />
        </div>
      </aside>
    );
  }

  // Active series — show its articles
  const isSeriesHome = pathname === `/${activeSeries.slug}`;

  return (
    <aside className="io-subnav io-scroll" style={{ "--io-mod": activeSeries.color } as React.CSSProperties}>
      {/* Title bar with series color accent */}
      <Link
        href={`/${activeSeries.slug}`}
        className={`io-subnav-titlebar ${isSeriesHome ? "io-subnav-titlebar-active" : ""}`}
        title={"Go to " + activeSeries.title}
      >
        <div className="io-subnav-titlebar-bar" />
        <SeriesIcon />
        <div className="io-subnav-title">{activeSeries.title}</div>
        <button
          className="io-subnav-collapse"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleCollapse(); }}
          title="Collapse"
        >
          <ChevronL />
        </button>
      </Link>

      {/* Article list */}
      <div className="io-subnav-body io-scroll">
        <div className="io-subnav-section-header">
          Series {activeSeries.number} · {activeSeries.articles.length} Articles
        </div>

        {/* Series home link */}
        <Link
          href={`/${activeSeries.slug}`}
          className={`io-subnav-item ${isSeriesHome ? "active" : ""}`}
        >
          <span className="io-subnav-item-num" />
          <HomeIcon />
          <span className="io-subnav-item-label">Overview</span>
        </Link>

        {/* Articles */}
        {activeSeries.articles.map((article) => {
          const href = `/${activeSeries.slug}/${article.slug}`;
          const isActive = pathname === href;
          return (
            <Link
              key={article.slug}
              href={href}
              className={`io-subnav-item ${isActive ? "active" : ""}`}
            >
              <span className="io-subnav-item-num">{article.number}</span>
              <span className="io-subnav-item-dot" style={{ background: activeSeries.color }} />
              <span className="io-subnav-item-label">{article.title}</span>
            </Link>
          );
        })}
      </div>

      {/* Footer count */}
      <div className="io-subnav-count">
        {activeSeries.count}
      </div>
    </aside>
  );
}

"use client";

import { useState, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { GlobalRail } from "@/components/layout/global-rail";
import { SeriesSubnav } from "@/components/layout/series-subnav";
import { Topbar } from "@/components/layout/topbar";
import { CommandPalette } from "@/components/layout/command-palette";
import { allSeries } from "@/data/series";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile sidebar on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Cmd+K handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      } else if (e.key === "Escape") {
        setPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Derive breadcrumb context from pathname
  const activeSeries = allSeries.find(
    (s) => pathname === `/${s.slug}` || pathname.startsWith(`/${s.slug}/`)
  );
  const activeArticle = activeSeries?.articles.find((a) =>
    pathname === `/${activeSeries.slug}/${a.slug}`
  );

  return (
    <div className="io-app">
      {/* Desktop: Global Rail */}
      <GlobalRail />

      {/* Desktop: Series Sub-nav */}
      <SeriesSubnav />

      {/* Main content area */}
      <div className="io-main">
        <Topbar
          seriesTitle={activeSeries?.title}
          articleTitle={activeArticle?.title}
          seriesSlug={activeSeries?.slug}
          onMenuToggle={() => setMobileOpen((prev) => !prev)}
          onSearchOpen={() => setPaletteOpen(true)}
        />
        <div className="io-content io-scroll">
          {children}
        </div>
      </div>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <>
          <div className="io-mobile-overlay" onClick={() => setMobileOpen(false)} />
          <div className="io-mobile-sidebar">
            <GlobalRail />
            <SeriesSubnav />
          </div>
        </>
      )}

      {/* Command palette */}
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}

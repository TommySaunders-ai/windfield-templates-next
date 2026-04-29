"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CommandPalette } from "@/components/layout/command-palette";
import { Icon } from "@/components/layout/io-icons";
import { allSeries } from "@/data/series";

/* ── helpers ── */
function shortName(title: string) {
  // Create a short uppercase label for the pillar tab
  return title
    .replace(/^The\s+/i, "")
    .replace(/\s*&\s*/g, " & ")
    .split(/\s+/)
    .slice(0, 3)
    .join(" ")
    .toUpperCase();
}

function buildNumber() {
  // deterministic "build" number from date
  const d = new Date();
  return String(
    d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate()
  );
}

/* ── clock hook ── */
function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toISOString().slice(11, 19) + " UTC"
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ── main shell ── */
export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const tabBarRef = useRef<HTMLDivElement>(null);
  const clock = useClock();

  // Derive active series + article
  const activeSeries = allSeries.find(
    (s) => pathname === `/${s.slug}` || pathname.startsWith(`/${s.slug}/`)
  );
  const activeArticle = activeSeries?.articles.find(
    (a) => pathname === `/${activeSeries.slug}/${a.slug}`
  );

  // Close mobile on navigate
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Cmd+K
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

  // Scroll active tab into view
  useEffect(() => {
    if (tabBarRef.current && activeSeries) {
      const activeTab = tabBarRef.current.querySelector(
        `[data-pillar="${activeSeries.slug}"]`
      ) as HTMLElement | null;
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeSeries]);

  const toggleSection = (key: string) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const accentColor = activeSeries?.color || "#1db954";

  return (
    <div className="io-admin" style={{ "--wf-pillar-color": accentColor } as React.CSSProperties}>
      <div className="wf-shell">
        {/* ──────────── LEFT SIDEBAR ──────────── */}
        <aside className={`wf-subnav ${sidebarCollapsed ? "wf-subnav-collapsed" : ""}`}>
          {/* Titlebar / branding */}
          <div className="wf-subnav-titlebar">
            <span className="wf-subnav-mark">IO</span>
            {!sidebarCollapsed && (
              <div className="wf-subnav-brand">
                <span className="wf-subnav-brand-name">8630 GREEN HILLS</span>
                <span className="wf-subnav-brand-sub">Property Operating System</span>
              </div>
            )}
            {!sidebarCollapsed && (
              <button
                className="wf-subnav-collapse-btn"
                onClick={() => setSidebarCollapsed(true)}
                title="Collapse sidebar"
              >
                <Icon name="panelLeft" size={16} />
              </button>
            )}
          </div>

          {/* Sidebar body */}
          <div className="wf-subnav-body wf-scroll">
            {!sidebarCollapsed && activeSeries ? (
              <>
                {/* Series title in sidebar */}
                <div className="wf-subnav-series-title" style={{ "--wf-sec-color": activeSeries.color } as React.CSSProperties}>
                  <span className="wf-subnav-series-dot" style={{ background: activeSeries.color }} />
                  <span>{activeSeries.title}</span>
                </div>

                {/* Articles section */}
                <div className="wf-subnav-section">
                  <button
                    className="wf-subnav-section-toggle"
                    onClick={() => toggleSection("articles")}
                  >
                    <span
                      className="wf-subnav-section-chev"
                      style={{
                        transform: collapsed["articles"]
                          ? "rotate(0deg)"
                          : "rotate(90deg)",
                      }}
                    >
                      <Icon name="chevR" size={10} />
                    </span>
                    <span>ARTICLES</span>
                    <span className="wf-subnav-section-count">
                      {activeSeries.articles.length}
                    </span>
                  </button>

                  {!collapsed["articles"] && (
                    <div className="wf-subnav-items">
                      {activeSeries.articles.map((article) => {
                        const isActive =
                          pathname === `/${activeSeries.slug}/${article.slug}`;
                        return (
                          <Link
                            key={article.slug}
                            href={`/${activeSeries.slug}/${article.slug}`}
                            className={`wf-subnav-item ${isActive ? "active" : ""}`}
                            style={
                              {
                                "--wf-item-color": activeSeries.color,
                              } as React.CSSProperties
                            }
                          >
                            <span className="wf-subnav-item-num">
                              {article.number}
                            </span>
                            <span className="wf-subnav-item-label">
                              {article.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </>
            ) : !sidebarCollapsed ? (
              <>
                {/* Home: show all series as sidebar items */}
                <div className="wf-subnav-series-title" style={{ "--wf-sec-color": "#1db954" } as React.CSSProperties}>
                  <span className="wf-subnav-series-dot" style={{ background: "#1db954" }} />
                  <span>8630 Green Hills</span>
                </div>

                <div className="wf-subnav-section">
                  <button
                    className="wf-subnav-section-toggle"
                    onClick={() => toggleSection("all-series")}
                  >
                    <span
                      className="wf-subnav-section-chev"
                      style={{
                        transform: collapsed["all-series"]
                          ? "rotate(0deg)"
                          : "rotate(90deg)",
                      }}
                    >
                      <Icon name="chevR" size={10} />
                    </span>
                    <span>SERIES</span>
                    <span className="wf-subnav-section-count">
                      {allSeries.length}
                    </span>
                  </button>

                  {!collapsed["all-series"] && (
                    <div className="wf-subnav-items">
                      {allSeries.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${s.slug}`}
                          className="wf-subnav-item"
                          style={
                            {
                              "--wf-item-color": s.color,
                            } as React.CSSProperties
                          }
                        >
                          <span className="wf-subnav-item-num">{s.number}</span>
                          <span className="wf-subnav-item-label">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : null}
          </div>

          {/* Sidebar footer (collapsed: expand button) */}
          {sidebarCollapsed && (
            <div className="wf-subnav-footer">
              <button
                className="wf-subnav-collapse-btn"
                onClick={() => setSidebarCollapsed(false)}
                title="Expand sidebar"
              >
                <Icon name="panelLeft" size={16} />
              </button>
            </div>
          )}
        </aside>

        {/* ──────────── MAIN AREA ──────────── */}
        <div className="wf-main">
          {/* Pillar tab bar */}
          <div className="wf-pillar-nav">
            <div className="wf-pillar-nav-left">
              {/* Mobile hamburger */}
              <button
                className="wf-pillar-hamburger"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <Icon name="menu" size={16} />
              </button>
              {/* Sidebar collapse toggle (desktop, when collapsed) */}
              {sidebarCollapsed && (
                <button
                  className="wf-pillar-sidebar-toggle"
                  onClick={() => setSidebarCollapsed(false)}
                  title="Expand sidebar"
                >
                  <Icon name="panelLeft" size={16} />
                </button>
              )}
              <span className="wf-pillar-divider" />
            </div>

            <div className="wf-pillar-tabs" ref={tabBarRef}>
              {/* Home tab */}
              <Link
                href="/"
                className={`wf-pillar-tab ${pathname === "/" ? "active" : ""}`}
                style={{ "--wf-tab-color": "#1db954" } as React.CSSProperties}
              >
                <span className="wf-pillar-dot" style={{ background: "#1db954" }} />
                <span>HOME</span>
              </Link>
              {allSeries.map((s) => {
                const isActive =
                  pathname === `/${s.slug}` ||
                  pathname.startsWith(`/${s.slug}/`);
                return (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    data-pillar={s.slug}
                    className={`wf-pillar-tab ${isActive ? "active" : ""}`}
                    style={{ "--wf-tab-color": s.color } as React.CSSProperties}
                  >
                    <span
                      className="wf-pillar-dot"
                      style={{ background: s.color }}
                    />
                    <span>{shortName(s.title)}</span>
                  </Link>
                );
              })}
            </div>

            <div className="wf-pillar-nav-right">
              <button
                className="wf-pillar-action"
                onClick={() => setPaletteOpen(true)}
                title="Search (Cmd+K)"
              >
                <Icon name="search" size={14} />
              </button>
              <button className="wf-pillar-action" title="Settings">
                <Icon name="settings" size={14} />
              </button>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="wf-content wf-scroll">{children}</div>

          {/* Footer status bar */}
          <div className="wf-footer">
            <span className="wf-footer-left">
              IO-MARKETING-OS // v1.0.0 // BUILD {buildNumber()}
            </span>
            <span className="wf-footer-right">
              <span className="wf-footer-status">
                <span className="wf-footer-dot" />
                SUPABASE
              </span>
              <span className="wf-footer-status">
                <span className="wf-footer-dot" />
                MCP
              </span>
              <span className="wf-footer-clock">{clock}</span>
            </span>
          </div>
        </div>
      </div>

      {/* ──────────── MOBILE OVERLAY ──────────── */}
      {mobileOpen && (
        <>
          <div className="wf-mobile-scrim" onClick={() => setMobileOpen(false)} />
          <aside className="wf-mobile-sidebar wf-scroll">
            <div className="wf-subnav-titlebar">
              <span className="wf-subnav-mark">IO</span>
              <div className="wf-subnav-brand">
                <span className="wf-subnav-brand-name">8630 GREEN HILLS</span>
                <span className="wf-subnav-brand-sub">Property Operating System</span>
              </div>
              <button
                className="wf-subnav-collapse-btn"
                onClick={() => setMobileOpen(false)}
              >
                <Icon name="x" size={14} />
              </button>
            </div>
            <div className="wf-subnav-body" style={{ padding: "6px 0" }}>
              <Link href="/" className={`wf-subnav-item ${pathname === "/" ? "active" : ""}`} style={{ "--wf-item-color": "#1db954" } as React.CSSProperties}>
                <Icon name="home" size={14} />
                <span className="wf-subnav-item-label">Home</span>
              </Link>
              {allSeries.map((s) => {
                const isActive =
                  pathname === `/${s.slug}` ||
                  pathname.startsWith(`/${s.slug}/`);
                return (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className={`wf-subnav-item ${isActive ? "active" : ""}`}
                    style={{ "--wf-item-color": s.color } as React.CSSProperties}
                  >
                    <span
                      className="wf-pillar-dot"
                      style={{ background: s.color }}
                    />
                    <span className="wf-subnav-item-label">{s.title}</span>
                  </Link>
                );
              })}
            </div>
          </aside>
        </>
      )}

      {/* Command palette */}
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}

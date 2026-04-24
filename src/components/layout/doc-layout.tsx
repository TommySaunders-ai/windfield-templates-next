"use client";

import { useState, type ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

interface DocLayoutProps {
  children: ReactNode;
  seriesTitle?: string;
  articleTitle?: string;
  seriesSlug?: string;
}

/* ------------------------------------------------------------------ */
/*  DocLayout — sidebar + topbar + main content shell                  */
/* ------------------------------------------------------------------ */

export function DocLayout({
  children,
  seriesTitle,
  articleTitle,
  seriesSlug,
}: DocLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar (handles its own mobile overlay internally) */}
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Main content area */}
      <div
        id="main"
        className="ml-0 min-[880px]:ml-[220px] min-[880px]:w-[calc(100vw-220px)] min-h-screen overflow-x-hidden bg-bg"
      >
        <Topbar
          seriesTitle={seriesTitle}
          articleTitle={articleTitle}
          seriesSlug={seriesSlug}
          onMenuToggle={() => setOpen((prev) => !prev)}
        />
        {children}
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { DocLayout } from "@/components/layout/doc-layout";
import { allSeries } from "@/data/series";

export default function Home() {
  return (
    <DocLayout>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border px-6 md:px-10 py-12 md:py-16"
        style={{
          background: "linear-gradient(135deg, rgba(29,185,84,0.05), transparent 60%)",
        }}
      >
        {/* Giant IO watermark */}
        <div
          className="absolute -right-4 -top-6 text-[18rem] font-bold text-brand opacity-[0.03] leading-none pointer-events-none select-none"
          style={{ letterSpacing: "-0.05em" }}
        >
          IO
        </div>

        <div className="relative z-10">
          <p className="text-[10px] font-semibold tracking-[.3em] uppercase text-brand mb-7">
            Project IO &middot; Complete Series
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-6">
            <span className="bg-gradient-to-r from-fg to-fg-muted bg-clip-text text-transparent">
              The Marketing
            </span>
            <br />
            <em className="not-italic text-brand">Operating System</em>
          </h1>
          <p className="text-sm text-fg-muted max-w-[640px] leading-relaxed mb-10">
            The complete AI-era marketing machine. Fourteen series, one hundred
            twenty-nine articles mapping every operational layer of a modern
            marketing organization — from Knowledge Base through Data Governance —
            plus the complete Prompt Library OS that powers it all.
          </p>
        </div>

        {/* Series grid */}
        <div className="relative z-10 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-px bg-border border border-border rounded-xl overflow-hidden mt-10 w-full">
          {allSeries.map((series) => (
            <Link
              key={series.slug}
              href={`/${series.slug}`}
              className="bg-surface p-5 transition-colors hover:bg-brand/[0.06] border-t-[3px] border-t-transparent hover:border-t-brand group"
              style={{
                borderTopColor: "transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderTopColor = series.color)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderTopColor = "transparent")
              }
            >
              <p className="text-[9.5px] font-semibold tracking-[.2em] uppercase text-brand mb-2">
                Series {series.number}
              </p>
              <h2 className="text-base font-semibold text-fg mb-1.5 tracking-tight">
                {series.title}
              </h2>
              <p className="text-xs text-fg-muted leading-snug mb-3">
                {series.description}
              </p>
              <p className="text-[11px] text-fg-subtle tracking-[.05em]">
                {series.count}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </DocLayout>
  );
}

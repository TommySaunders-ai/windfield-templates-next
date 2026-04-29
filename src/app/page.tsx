"use client";

import Link from "next/link";
import { DocLayout } from "@/components/layout/doc-layout";
import { allSeries } from "@/data/series";

export default function Home() {
  return (
    <DocLayout>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border px-6 md:px-10 py-14 md:py-20"
        style={{
          background: "linear-gradient(135deg, rgba(29,185,84,0.06), transparent 50%, rgba(29,185,84,0.03))",
        }}
      >
        {/* Giant IO watermark */}
        <div
          className="absolute -right-4 -top-6 text-[20rem] font-extrabold text-brand opacity-[0.03] leading-none pointer-events-none select-none"
          style={{ letterSpacing: "-0.05em" }}
        >
          IO
        </div>

        <div className="relative z-10">
          <p className="text-[10px] font-bold tracking-[.3em] uppercase text-brand mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            Project IO &middot; Complete Series
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.92] mb-6">
            <span className="text-fg">
              The Marketing
            </span>
            <br />
            <em className="not-italic text-brand">Operating System</em>
          </h1>
          <p className="text-sm text-fg-muted max-w-[600px] leading-relaxed mb-4">
            The complete AI-era marketing machine. Fourteen series, one hundred
            twenty-nine articles mapping every operational layer of a modern
            marketing organization — from Knowledge Base through Data Governance —
            plus the complete Prompt Library OS that powers it all.
          </p>
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] font-semibold tracking-[.12em] uppercase text-fg-subtle">14 Series</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-[10px] font-semibold tracking-[.12em] uppercase text-fg-subtle">129 Articles</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-[10px] font-semibold tracking-[.12em] uppercase text-fg-subtle">Complete Architecture</span>
          </div>
        </div>

        {/* Series grid */}
        <div className="relative z-10 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-px bg-border border border-border rounded-xl overflow-hidden w-full">
          {allSeries.map((series) => (
            <Link
              key={series.slug}
              href={`/${series.slug}`}
              className="bg-bg-elevated p-5 transition-all duration-200 hover:bg-brand/[0.06] group relative"
            >
              {/* Top accent on hover */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />

              <p className="text-[9px] font-bold tracking-[.22em] uppercase text-brand mb-2 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand opacity-50 group-hover:opacity-100 transition-opacity" />
                Series {series.number}
              </p>
              <h2 className="text-[15px] font-semibold text-fg mb-1.5 tracking-tight leading-snug">
                {series.title}
              </h2>
              <p className="text-xs text-fg-muted leading-snug mb-3 line-clamp-2">
                {series.description}
              </p>
              <p className="text-[10px] text-fg-faint tracking-[.06em] font-medium">
                {series.count}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </DocLayout>
  );
}

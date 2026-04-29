"use client";

import Link from "next/link";
import { allSeries } from "@/data/series";

export default function Home() {
  return (
    <>
      {/* AO-style Hero */}
      <div className="wf-ao-hero">
        <div
          className="wf-ao-hero-gradient"
          style={{
            background:
              "linear-gradient(135deg, rgba(29,185,84,0.06), transparent 50%, rgba(29,185,84,0.03))",
          }}
        />
        <div className="wf-ao-hero-watermark">IO</div>

        <div className="wf-ao-hero-kicker">
          <span
            className="wf-ao-hero-kicker-bar"
            style={{ background: "#1db954" }}
          />
          <span className="wf-ao-hero-kicker-label">
            Project IO &middot; Complete Series
          </span>
        </div>

        <h1 className="wf-ao-hero-title">
          The Marketing <em>Operating System</em>
        </h1>

        <p className="wf-ao-hero-desc">
          The complete AI-era marketing machine. Fourteen series, one hundred
          twenty-nine articles mapping every operational layer of a modern
          marketing organization — from Knowledge Base through Data Governance —
          plus the complete Prompt Library OS that powers it all.
        </p>

        <div className="wf-ao-stats">
          <div className="wf-ao-stat">
            <span className="wf-ao-stat-num">14</span>
            <span>Series</span>
          </div>
          <span className="wf-ao-stat-divider" />
          <div className="wf-ao-stat">
            <span className="wf-ao-stat-num">129</span>
            <span>Articles</span>
          </div>
          <span className="wf-ao-stat-divider" />
          <div className="wf-ao-stat">
            <span>Complete Architecture</span>
          </div>
        </div>
      </div>

      {/* Series cards grid */}
      <div className="wf-ao-cards">
        <div className="wf-ao-cards-heading">All Series</div>
        <div className="wf-home-grid">
          {allSeries.map((series) => (
            <Link
              key={series.slug}
              href={`/${series.slug}`}
              className="wf-home-card"
              style={
                { "--wf-card-color": series.color } as React.CSSProperties
              }
            >
              <div
                className="wf-home-card-accent"
                style={{ background: series.color }}
              />
              <div
                className="wf-home-card-kicker"
                style={{ color: series.color }}
              >
                <span
                  className="wf-home-card-kicker-dot"
                  style={{ background: series.color }}
                />
                Series {series.number}
              </div>
              <div className="wf-home-card-title">{series.title}</div>
              <div className="wf-home-card-desc">{series.description}</div>
              <div className="wf-home-card-count">{series.count}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

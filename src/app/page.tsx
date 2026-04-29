"use client";

import Link from "next/link";
import { allSeries } from "@/data/series";

export default function Home() {
  const totalArticles = allSeries.reduce((sum, s) => sum + s.articles.length, 0);

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
        <div className="wf-ao-hero-watermark">8630</div>

        <div className="wf-ao-hero-kicker">
          <span
            className="wf-ao-hero-kicker-bar"
            style={{ background: "#1db954" }}
          />
          <span className="wf-ao-hero-kicker-label">
            Windfield Real Estate &middot; Property Operating System
          </span>
        </div>

        <h1 className="wf-ao-hero-title">
          8630 N Green Hills <em>IO</em>
        </h1>

        <p className="wf-ao-hero-desc">
          Master property profile for 8630 N Green Hills Road — 10,500 SF
          Class-A office building in KC Northland. Sales, marketing,
          prospecting, and AI operations for medical user targeting.
          Chiropractors, optometrists, med spas, physical therapy, urgent care,
          dental, and adjacent medical services.
        </p>

        <div className="wf-ao-stats">
          <div className="wf-ao-stat">
            <span className="wf-ao-stat-num">10,500</span>
            <span>SF</span>
          </div>
          <span className="wf-ao-stat-divider" />
          <div className="wf-ao-stat">
            <span className="wf-ao-stat-num">82</span>
            <span>Prospects</span>
          </div>
          <span className="wf-ao-stat-divider" />
          <div className="wf-ao-stat">
            <span className="wf-ao-stat-num">{allSeries.length}</span>
            <span>Areas of Operation</span>
          </div>
          <span className="wf-ao-stat-divider" />
          <div className="wf-ao-stat">
            <span className="wf-ao-stat-num">{totalArticles}</span>
            <span>Pages</span>
          </div>
        </div>
      </div>

      {/* Property quick facts */}
      <div className="wf-ao-cards" style={{ paddingBottom: 0 }}>
        <div className="wf-ao-cards-heading">Property Overview</div>
        <div className="wf-ao-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
          {[
            { label: "ADDRESS", value: "8630 N Green Hills Rd" },
            { label: "CITY", value: "Kansas City, MO 64154" },
            { label: "COUNTY", value: "Platte" },
            { label: "SIZE", value: "10,500 SF" },
            { label: "CLASS", value: "A" },
            { label: "BUILT", value: "2020" },
            { label: "STORIES", value: "1" },
            { label: "ZONING", value: "B3-3 (Medical)" },
            { label: "LOT", value: "1.29 AC" },
            { label: "PARKING", value: "4.0 / 1,000 SF" },
            { label: "AVAILABILITY", value: "For Sale" },
            { label: "PRICE", value: "Call For Pricing" },
          ].map((fact) => (
            <div
              key={fact.label}
              style={{
                background: "var(--wf-surface)",
                border: "1px solid var(--wf-border)",
                borderRadius: 8,
                padding: "12px 14px",
              }}
            >
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "var(--wf-text-dim)", marginBottom: 4 }}>
                {fact.label}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--wf-text)" }}>
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Areas of operation grid */}
      <div className="wf-ao-cards">
        <div className="wf-ao-cards-heading">Areas of Operation</div>
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
                Area {series.number}
              </div>
              <div className="wf-home-card-title">{series.title}</div>
              <div className="wf-home-card-desc">{series.description}</div>
              <div className="wf-home-card-count">{series.count}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Clay-enriched decision makers */}
      <div className="wf-ao-cards">
        <div className="wf-ao-cards-heading">Clay-Enriched Decision Makers</div>
        <div className="wf-ao-grid" style={{ gridTemplateColumns: "1fr" }}>
          {[
            { name: "Cristyn Watkins MD", title: "CEO / Owner / Founder", company: "aNu Aesthetics ($5-10M)", category: "Med Spa", score: 95, linkedin: "cristynwatkinsmd", note: "2 mi from property, owner-operator since 2011" },
            { name: "Kathy Taranto", title: "Founder", company: "AesthetiCare Medspa ($5-10M)", category: "Med Spa", score: 95, linkedin: "kathy-metcalf-taranto-56903217", note: "25 employees, 3 locations, Liberty proves Northland demand" },
            { name: "Dan Geer", title: "VP Operations", company: "NextCare ($200-500M)", category: "Urgent Care", score: 95, linkedin: "dan-geer-16897512", note: "KC metro area, 1,051 employees, 170+ locations" },
            { name: "Jacob Dinkel", title: "Director of Development", company: "Total Access UC ($25-75M)", category: "Urgent Care", score: 92, linkedin: "jacob-dinkel-a789a618", note: "324 employees, 16+ MO locations, expansion-focused" },
            { name: "Dominique Cardello RN", title: "Business Owner", company: "Healthylooks ($5-10M)", category: "Med Spa", score: 92, linkedin: "dominique-cardello-rn-bsn-75187810b", note: "3 locations, NO Northland presence" },
            { name: "Ryan Wesley", title: "Director of Aesthetics", company: "KC Skin & Cancer ($10-25M)", category: "Dermatology", score: 90, linkedin: "ryan-wesley", note: "0.8 mi from property, 70 employees" },
            { name: "Grace Betterton", title: "Practice Manager", company: "Northland Eye ($1-5M)", category: "Optometry", score: 90, linkedin: "grace-betterton-b26679b2", note: "ADJACENT — 8660 Green Hills Rd, 6 doctors" },
            { name: "Willie Yuen", title: "Clinic Director", company: "KC Rehab PT ($10-25M)", category: "Physical Therapy", score: 88, linkedin: "willie-yuen-63392266", note: "32 employees, 10 KC locations" },
            { name: "Thomas Bembynista DPM", title: "Podiatrist", company: "KC Footcare", category: "Podiatry", score: 88, linkedin: "", note: "ON GREEN HILLS RD at 8530 — same corridor" },
            { name: "Andrew Montalbano MD", title: "Medical Director", company: "Ascentist Healthcare ($25-75M)", category: "ENT / Allergy", score: 82, linkedin: "andrew-montalbano-md-236227197", note: "171 employees, 16+ locations, no Northland" },
          ].map((dm, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 16px",
                background: "var(--wf-surface)",
                border: "1px solid var(--wf-border)",
                borderRadius: 8,
                transition: "border-color 0.15s",
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: `color-mix(in srgb, #1db954 14%, transparent)`,
                color: "#1db954", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 800, flexShrink: 0,
              }}>
                {dm.score}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--wf-text)" }}>
                  {dm.name}
                </div>
                <div style={{ fontSize: 11, color: "var(--wf-text-muted)" }}>
                  {dm.title} — {dm.company}
                </div>
                <div style={{ fontSize: 10, color: "var(--wf-text-dim)", marginTop: 2 }}>
                  {dm.note}
                </div>
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#1db954", flexShrink: 0, padding: "3px 8px", borderRadius: 4, background: "color-mix(in srgb, #1db954 12%, transparent)" }}>
                {dm.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

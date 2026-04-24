"use client";

import Link from "next/link";

/* ─── data ─── */
const NAV_LINKS = ["Properties", "Services", "Articles", "About", "Contact"];

const FEATURES = [
  "15 AI-Powered Column Prompts",
  "Complete Search Intent Framework",
  "Works with Notion AI Auto-Fill",
];

const BADGES = [
  "Instant Download",
  "Notion Template",
  "AI Auto-Fill",
  "30-Day Guarantee",
];

const INCLUDED = [
  "15 column prompts — ready to paste",
  "Notion template with AI Auto-Fill",
  "Search intent classification framework",
  "Buyer journey mapping prompts",
  "Keyword clustering methodology",
  "Lifetime access + free updates",
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Starting Point",
    desc: "Any keyword, topic, or niche",
  },
  {
    step: "02",
    title: "Prompt Library",
    desc: "15 column prompts analyze and generate",
  },
  {
    step: "03",
    title: "Knowledge Base",
    desc: "Complete search intent intelligence",
  },
];

const PROMPTS = [
  "Informational Intent Analysis",
  "Navigational Intent Mapping",
  "Commercial Investigation Analysis",
  "Transactional Intent Optimization",
  "Research Phase Keywords",
  "Evaluation Phase Keywords",
  "Decision Phase Keywords",
  "Problem-Aware Search Terms",
  "Solution-Aware Search Terms",
  "Brand Comparison Queries",
  "Feature Comparison Analysis",
  "Price-Sensitive Searches",
  "Location-Specific Intent",
  "Device-Specific Patterns",
  "Long-Tail Intent Clusters",
];

const USE_CASES = [
  {
    title: "Content Strategy",
    bullets: [
      "Map content to every stage of intent",
      "Identify gaps in your content coverage",
      "Prioritize topics by search demand",
      "Build topical authority systematically",
    ],
  },
  {
    title: "SEO Architecture",
    bullets: [
      "Structure site around intent clusters",
      "Build internal linking by intent type",
      "Optimize navigation for user journeys",
    ],
  },
  {
    title: "PPC Campaign Optimization",
    bullets: [
      "Segment keywords by purchase intent",
      "Reduce wasted spend on low-intent terms",
      "Write ad copy that matches intent signals",
      "Build landing pages for each intent stage",
    ],
  },
  {
    title: "Conversion Rate Optimization",
    bullets: [
      "Align page content with visitor intent",
      "Reduce bounce with intent-matched CTAs",
      "Optimize funnel stages by intent data",
    ],
  },
];

const CROSS_SELL = [
  { title: "Audience Persona Builder", price: "$24", color: "#0A84FF" },
  { title: "Content Pillar Strategy", price: "$24", color: "#BF5AF2" },
  { title: "Email Sequence Architect", price: "$24", color: "#FF9F0A" },
  { title: "Social Media Content Engine", price: "$24", color: "#30D158" },
  { title: "Brand Voice Calibration", price: "$24", color: "#0A84FF" },
  { title: "Competitive Intelligence OS", price: "$24", color: "#FF453A" },
];

/* ─── icons ─── */
function CheckBlue() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="shrink-0 mt-0.5"
    >
      <circle cx="9" cy="9" r="9" fill="rgba(10,132,255,0.12)" />
      <path
        d="M5.5 9.5L7.5 11.5L12.5 6.5"
        stroke="#0A84FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckGreen({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="#30D158"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="#FF9F0A">
      <path d="M9 1.5l2.12 4.3 4.74.69-3.43 3.34.81 4.72L9 12.26l-4.24 2.29.81-4.72L2.14 6.49l4.74-.69L9 1.5z" />
    </svg>
  );
}

/* ─── section label component ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-[var(--font-dm-mono)] text-[11px] uppercase tracking-[0.08em] font-medium"
      style={{ color: "#0A84FF" }}
    >
      {children}
    </span>
  );
}

/* ─── page ─── */
export default function ProductPage() {
  return (
    <div
      className="min-h-screen font-[var(--font-inter)] antialiased"
      style={{ backgroundColor: "#08080a", color: "#f2ede6" }}
    >
      {/* ━━━ NAVBAR ━━━ */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-center h-14"
        style={{
          backgroundColor: "#08080a",
          borderBottom: "1px solid rgba(242,237,230,0.06)",
        }}
      >
        <div className="flex items-center justify-between w-full max-w-[1200px] px-6">
          <Link href="/" className="text-base font-semibold" style={{ color: "#f2ede6" }}>
            Windfield
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm transition-colors hover:text-[#f2ede6]"
                style={{ color: "#9e9a93" }}
              >
                {link}
              </Link>
            ))}
          </div>
          <Link
            href="#"
            className="text-sm px-4 py-2 rounded-lg transition-colors hover:bg-white/5"
            style={{ border: "1px solid rgba(242,237,230,0.12)", color: "#f2ede6" }}
          >
            Get in Touch
          </Link>
        </div>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">
          {/* left column */}
          <div className="flex flex-col gap-6">
            {/* breadcrumb */}
            <p className="text-xs" style={{ color: "#71717a" }}>
              Products{" "}
              <span className="mx-1.5">/</span>
              Prompt Libraries{" "}
              <span className="mx-1.5">/</span>
              Search Intent Analysis
            </p>

            {/* heading */}
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ lineHeight: 1.08, color: "#f2ede6" }}
            >
              Decode Search Intent → Capture Demand
            </h1>

            {/* description */}
            <p className="text-base leading-relaxed max-w-xl" style={{ color: "#9e9a93" }}>
              Transform every keyword into an AI-powered strategic asset. 15
              column prompts that analyze search intent patterns, map user
              psychology, and generate content strategies that capture demand at
              every stage of the buyer journey.
            </p>

            {/* feature checklist */}
            <ul className="flex flex-col gap-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#f2ede6" }}>
                  <CheckBlue />
                  {f}
                </li>
              ))}
            </ul>

            {/* stats bar */}
            <div className="flex items-center gap-5 pt-2">
              <span className="text-6xl font-bold" style={{ color: "#f2ede6" }}>
                4.8
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: "#9e9a93" }}>
                  <span>29 reviews</span>
                  <span style={{ color: "#71717a" }}>|</span>
                  <span>15 column prompts</span>
                </div>
              </div>
            </div>

            {/* badge row */}
            <div className="flex flex-wrap gap-2 pt-1">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(48,209,88,0.06)",
                    border: "1px solid rgba(48,209,88,0.15)",
                    color: "#30D158",
                  }}
                >
                  <CheckGreen size={12} />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* right column — pricing card */}
          <div className="lg:sticky lg:top-20 self-start">
            <div
              className="rounded-xl p-8 flex flex-col gap-6"
              style={{
                backgroundColor: "#0d0d10",
                border: "1px solid rgba(242,237,230,0.06)",
              }}
            >
              {/* price */}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold" style={{ color: "#f2ede6" }}>
                  $24
                </span>
                <span className="text-sm" style={{ color: "#9e9a93" }}>
                  one-time
                </span>
              </div>

              {/* strikethrough */}
              <p className="text-sm line-through" style={{ color: "#FF453A" }}>
                Total Value: $900
              </p>

              {/* included items */}
              <ul className="flex flex-col gap-3">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "#f2ede6" }}
                  >
                    <CheckGreen />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="w-full h-12 rounded-lg font-semibold text-white text-sm transition-colors cursor-pointer"
                style={{ backgroundColor: "#0A84FF" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0070E0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0A84FF")
                }
              >
                Get Instant Access
              </button>

              {/* guarantee */}
              <p
                className="text-sm italic text-center"
                style={{ color: "#0A84FF" }}
              >
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ OVERVIEW ━━━ */}
      <section
        className="py-16"
        style={{
          backgroundColor: "#0d0d10",
          borderTop: "1px solid rgba(242,237,230,0.06)",
          borderBottom: "1px solid rgba(242,237,230,0.06)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-6">
          <SectionLabel>OVERVIEW</SectionLabel>
          <h2
            className="text-3xl font-bold tracking-tight max-w-2xl"
            style={{ color: "#f2ede6" }}
          >
            One Library. Fifteen Prompts. Complete Search Intelligence.
          </h2>
          <p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: "#9e9a93" }}
          >
            Most keyword research stops at volume and difficulty. This library
            goes deeper — analyzing the psychology behind every search query to
            reveal what users actually want, where they are in their journey, and
            how to create content that meets them at every stage. Each of the 15
            column prompts transforms a single keyword into a structured
            intelligence asset you can action immediately.
          </p>
        </div>
      </section>

      {/* ━━━ UNIVERSAL WORKFLOW ━━━ */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-8">
          <SectionLabel>UNIVERSAL WORKFLOW</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
            {WORKFLOW_STEPS.map((s, i) => (
              <div key={s.step} className="contents">
                <div
                  className="rounded-xl p-6 flex flex-col gap-3"
                  style={{
                    backgroundColor: "#0d0d10",
                    border: "1px solid rgba(242,237,230,0.06)",
                  }}
                >
                  <span
                    className="font-[var(--font-dm-mono)] text-[11px] uppercase tracking-[0.08em] font-medium"
                    style={{ color: "#0A84FF" }}
                  >
                    STEP {s.step}
                  </span>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "#f2ede6" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#9e9a93" }}>
                    {s.desc}
                  </p>
                </div>
                {i < 2 && (
                  <span
                    className="hidden md:flex items-center justify-center text-xl"
                    style={{ color: "#71717a" }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ 15 COLUMN PROMPTS ━━━ */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-8">
          <SectionLabel>15 COLUMN PROMPTS</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROMPTS.map((p, i) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-lg p-4"
                style={{
                  backgroundColor: "#0d0d10",
                  border: "1px solid rgba(242,237,230,0.06)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 font-[var(--font-dm-mono)] text-sm font-bold"
                  style={{
                    backgroundColor: "rgba(10,132,255,0.1)",
                    color: "#0A84FF",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span
                  className="text-sm font-semibold pt-1"
                  style={{ color: "#f2ede6" }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ USE CASES ━━━ */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-8">
          <SectionLabel>USE CASES</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="rounded-xl p-6 flex flex-col gap-4"
                style={{
                  backgroundColor: "#0d0d10",
                  border: "1px solid rgba(242,237,230,0.06)",
                }}
              >
                <h3
                  className="text-base font-semibold"
                  style={{ color: "#f2ede6" }}
                >
                  {uc.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {uc.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: "#9e9a93" }}
                    >
                      <CheckGreen />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CROSS-SELL ━━━ */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <SectionLabel>OTHER PROMPT LIBRARIES</SectionLabel>
            <h2
              className="text-3xl font-bold tracking-tight"
              style={{ color: "#f2ede6" }}
            >
              Explore the Complete Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {CROSS_SELL.map((lib) => (
              <Link
                key={lib.title}
                href="#"
                className="flex items-stretch rounded-lg overflow-hidden transition-colors hover:bg-white/[0.02]"
                style={{
                  backgroundColor: "#0d0d10",
                  border: "1px solid rgba(242,237,230,0.06)",
                }}
              >
                {/* accent bar */}
                <div
                  className="w-1 shrink-0 rounded-l"
                  style={{ backgroundColor: lib.color }}
                />
                <div className="flex flex-col gap-1.5 p-4">
                  <span
                    className="font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[0.08em]"
                    style={{ color: "#71717a" }}
                  >
                    Prompt Library
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#f2ede6" }}
                  >
                    {lib.title}
                  </span>
                  <span className="text-sm" style={{ color: "#9e9a93" }}>
                    {lib.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FINAL CTA ━━━ */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(to bottom, #0d0d10, #08080a)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-5">
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ color: "#f2ede6" }}
          >
            Ready to Decode Search Intent?
          </h2>
          <p className="text-base" style={{ color: "#9e9a93" }}>
            Get instant access to all 15 column prompts
          </p>
          <button
            className="h-12 px-8 rounded-lg font-semibold text-white text-sm transition-colors cursor-pointer"
            style={{ backgroundColor: "#0A84FF" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0070E0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0A84FF")
            }
          >
            Get Instant Access — $24
          </button>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer
        className="py-8"
        style={{ borderTop: "1px solid rgba(242,237,230,0.06)" }}
      >
        <div
          className="max-w-[1200px] mx-auto px-6 flex items-center justify-between text-sm"
          style={{ color: "#71717a" }}
        >
          <span>Windfield Real Estate</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}

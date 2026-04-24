import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The IO Launch Series — Windfield Real Estate",
  description:
    "Documenting the launch of the first production-grade agentic AI system built for commercial real estate.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const pillars = [
  { label: "THE MATH", color: "#2460ff" },
  { label: "THE BUILD", color: "#1db954" },
  { label: "THE STRATEGY", color: "#d97706" },
  { label: "THE ORIGIN", color: "#8b5cf6" },
  { label: "KC MARKET", color: "#0891b2" },
] as const;

const stats = [
  { value: 7, label: "Published", color: "#1db954" },
  { value: 30, label: "Total Days", color: "#2460ff" },
  { value: 5, label: "Pillars", color: "#8b5cf6" },
  { value: 4, label: "Platforms", color: "#d97706" },
] as const;

const architecture = [
  { pillar: pillars[0], count: 2 },
  { pillar: pillars[1], count: 1 },
  { pillar: pillars[2], count: 1 },
  { pillar: pillars[3], count: 2 },
  { pillar: pillars[4], count: 1 },
] as const;

interface Article {
  day: number;
  pillar: (typeof pillars)[number];
  title: string;
  description: string;
  date: string;
  readTime: string;
  badge?: string;
}

const articles: Article[] = [
  {
    day: 1,
    pillar: pillars[3],
    title: "Windfield Real Estate Intelligent Operations Is Live",
    description:
      "The one that starts it all. What we built, why it matters, and what comes next.",
    date: "Apr 16",
    readTime: "8 min",
    badge: "START HERE",
  },
  {
    day: 2,
    pillar: pillars[3],
    title: "Senior Sales & Marketing Technology Strategist",
    description:
      "Why a 20-year real estate professional decided to build an AI operations platform.",
    date: "Apr 17",
    readTime: "6 min",
  },
  {
    day: 3,
    pillar: pillars[0],
    title: "The Math That Will Kill Your AI Agent Project",
    description:
      "The economics nobody talks about. Why 94% of AI projects fail before launch.",
    date: "Apr 18",
    readTime: "12 min",
  },
  {
    day: 4,
    pillar: pillars[2],
    title:
      "I Am Not Trying to Sell AI. I Am Trying to Use AI to Sell Real Estate.",
    description:
      "The distinction that changes everything about how you build AI systems.",
    date: "Apr 19",
    readTime: "7 min",
  },
  {
    day: 5,
    pillar: pillars[3],
    title: "What My Wife Gave Me",
    description: "The personal story behind the professional mission.",
    date: "Apr 20",
    readTime: "5 min",
  },
  {
    day: 6,
    pillar: pillars[1],
    title: "18 Agents, One Property",
    description:
      "Inside the actual agent architecture. What each agent does and why it exists.",
    date: "Apr 21",
    readTime: "10 min",
  },
  {
    day: 7,
    pillar: pillars[0],
    title: "The Outside-In Architecture",
    description:
      "Why we built the system from the customer backward, not the database forward.",
    date: "Apr 22",
    readTime: "9 min",
  },
];

const upcoming = [
  { day: 8, label: "Day 08" },
  { day: 9, label: "Day 09" },
  { day: 10, label: "Day 10" },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function PillarBadge({
  label,
  color,
  className = "",
}: {
  label: string;
  color: string;
  className?: string;
}) {
  const rgb = hexToRgb(color);
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded font-[family-name:var(--font-dm-mono)] text-[10px] font-semibold uppercase tracking-[0.05em] ${className}`}
      style={{
        backgroundColor: `rgba(${rgb},0.06)`,
        border: `1px solid rgba(${rgb},0.2)`,
        color,
      }}
    >
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav links                                                          */
/* ------------------------------------------------------------------ */

const navLinks = ["Properties", "Services", "Articles", "About", "Contact"];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function GTMLaunchSeriesPage() {
  return (
    <div
      className="min-h-screen font-[family-name:var(--font-inter)]"
      style={{ backgroundColor: "#08080a", color: "#f2ede6" }}
    >
      {/* ── Navigation ─────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center"
        style={{
          backgroundColor: "#08080a",
          borderBottom: "1px solid rgba(242,237,230,0.06)",
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-8">
            <span className="font-semibold text-[#f2ede6]">Windfield</span>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <span
                  key={l}
                  className="text-sm cursor-pointer hover:text-[#f2ede6] transition-colors"
                  style={{ color: "#9e9a93" }}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center gap-4">
            <span
              className="hidden sm:inline text-sm cursor-pointer"
              style={{ color: "#9e9a93" }}
            >
              Dashboard
            </span>
            <button
              className="text-sm px-4 py-1.5 rounded-md font-medium"
              style={{
                backgroundColor: "rgba(242,237,230,0.06)",
                color: "#f2ede6",
                border: "1px solid rgba(242,237,230,0.06)",
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-14" />

      <main className="mx-auto max-w-[1200px] px-6">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 text-center max-w-[800px] mx-auto">
          {/* Badge */}
          <div
            className="flex items-center gap-2 rounded-full px-4 py-1.5 mx-auto w-fit"
            style={{
              backgroundColor: "rgba(29,185,84,0.08)",
              border: "1px solid rgba(29,185,84,0.2)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#1db954] animate-pulse" />
            <span className="font-[family-name:var(--font-dm-mono)] text-[11px] uppercase tracking-[0.12em] text-[#1db954]">
              30-Day Launch Campaign
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.08] text-[#f2ede6] mt-8">
            The IO Launch{" "}
            <em className="text-[#1db954]">Series</em>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg font-light leading-relaxed mt-6 max-w-[640px] mx-auto"
            style={{ color: "#9e9a93" }}
          >
            Documenting the launch of the first production-grade agentic AI
            system built for commercial real estate.
          </p>

          {/* Pillar Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {pillars.map((p) => (
              <PillarBadge key={p.label} label={p.label} color={p.color} />
            ))}
          </div>

          {/* Stats Row */}
          <div
            className="flex justify-center gap-8 md:gap-16 mt-10 py-6"
            style={{
              borderTop: "1px solid rgba(242,237,230,0.06)",
              borderBottom: "1px solid rgba(242,237,230,0.06)",
            }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-3xl font-extrabold"
                  style={{ color: s.color }}
                >
                  {s.value}
                </div>
                <div className="font-[family-name:var(--font-dm-mono)] text-[10px] uppercase text-[#71717a] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Campaign Architecture ──────────────────────────────── */}
        <section
          className="max-w-[900px] mx-auto rounded-2xl p-10"
          style={{
            backgroundColor: "#0d0d10",
            border: "1px solid rgba(242,237,230,0.06)",
            background:
              "#0d0d10 radial-gradient(circle at center, rgba(29,185,84,0.05) 0%, transparent 70%)",
          }}
        >
          <div className="font-[family-name:var(--font-dm-mono)] text-[11px] text-[#1db954] tracking-[0.12em] uppercase mb-6">
            Campaign Architecture
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {architecture.map((a) => (
              <div key={a.pillar.label}>
                <PillarBadge label={a.pillar.label} color={a.pillar.color} />
                <div className="text-xs text-[#71717a] mt-2">
                  {a.count} article{a.count > 1 ? "s" : ""}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Published Articles ─────────────────────────────────── */}
        <section className="mt-16">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#f2ede6]">
              Published
            </h2>
            <span className="font-[family-name:var(--font-dm-mono)] text-xs text-[#71717a]">
              7 of 30
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {articles.map((a) => {
              const rgb = hexToRgb(a.pillar.color);
              return (
                <article
                  key={a.day}
                  className="flex items-start gap-5 rounded-xl p-6 transition-colors cursor-pointer border border-[rgba(242,237,230,0.06)] hover:border-[rgba(242,237,230,0.12)]"
                  style={{
                    backgroundColor: "#0d0d10",
                  }}
                >
                  {/* Number badge */}
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0 font-[family-name:var(--font-dm-mono)] text-lg font-bold"
                    style={{
                      backgroundColor: `rgba(${rgb},0.1)`,
                      color: a.pillar.color,
                    }}
                  >
                    {String(a.day).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-[family-name:var(--font-dm-mono)] text-[9px] uppercase tracking-[0.1em] text-[#71717a] opacity-70">
                        {a.pillar.label}
                      </span>
                      {a.badge && (
                        <span className="font-[family-name:var(--font-dm-mono)] text-[9px] uppercase tracking-[0.1em] text-[#1db954] bg-[rgba(29,185,84,0.1)] px-1.5 py-0.5 rounded">
                          {a.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-[#f2ede6] leading-snug mt-1">
                      {a.title}
                    </h3>
                    <p className="text-[13px] text-[#9e9a93] leading-relaxed mt-1.5">
                      {a.description}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="shrink-0 text-right hidden sm:block">
                    <div className="text-[11px] text-[#52525b]">{a.date}</div>
                    <div className="text-[10px] text-[#3f3f46] mt-0.5">
                      {a.readTime}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── Author Bio ─────────────────────────────────────────── */}
        <section
          className="mt-12 rounded-xl p-8 flex items-start gap-5"
          style={{
            backgroundColor: "#0d0d10",
            border: "1px solid rgba(242,237,230,0.06)",
          }}
        >
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 font-bold text-[#1db954]"
            style={{
              backgroundColor: "rgba(29,185,84,0.12)",
              border: "1px solid rgba(29,185,84,0.25)",
            }}
          >
            TS
          </div>
          <div>
            <div className="text-base font-bold text-[#f2ede6]">
              Tommy Saunders
            </div>
            <div className="font-[family-name:var(--font-dm-mono)] text-xs text-[#71717a]">
              Senior Sales &amp; Marketing Technology Strategist
            </div>
            <p className="text-sm text-[#9e9a93] leading-relaxed mt-2">
              20 years in commercial real estate. Builder of
              IntelligentOperations.ai — the first production-grade agentic AI
              system purpose-built for CRE brokerage operations. Writing about
              what it actually takes to ship AI that works.
            </p>
          </div>
        </section>

        {/* ── Upcoming ───────────────────────────────────────────── */}
        <section className="mt-12">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#f2ede6]">
              Upcoming
            </h2>
            <span className="text-xs text-[#71717a]">(23 remaining)</span>
          </div>

          <div className="flex flex-col gap-3 opacity-40">
            {upcoming.map((u) => (
              <div
                key={u.day}
                className="flex items-start gap-5 rounded-xl p-6"
                style={{
                  backgroundColor: "#0d0d10",
                  border: "1px solid rgba(242,237,230,0.06)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0 font-[family-name:var(--font-dm-mono)] text-lg font-bold text-[#3f3f46]"
                  style={{ backgroundColor: "#18181b" }}
                >
                  {String(u.day).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-[family-name:var(--font-dm-mono)] text-[9px] uppercase tracking-[0.1em] text-[#71717a] opacity-70">
                    {u.label}
                  </span>
                  <h3 className="text-base font-semibold text-[#3f3f46] leading-snug mt-1">
                    TBA
                  </h3>
                  <p className="text-[13px] text-[#3f3f46] leading-relaxed mt-1.5">
                    To be announced
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#3f3f46] text-center mt-3">
            + 20 more articles scheduled
          </p>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer
        className="mt-20 py-8"
        style={{ borderTop: "1px solid rgba(242,237,230,0.06)" }}
      >
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-center gap-3 text-xs text-[#3f3f46]">
          <span>Windfield Real Estate</span>
          <span>|</span>
          <span>CORFAC International</span>
          <span>|</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}

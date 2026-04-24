"use client";

import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Resources", href: "#resources" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const QUICK_NAV = [
  { icon: "📊", title: "About", desc: "Background, expertise, and professional journey" },
  { icon: "🏗️", title: "Portfolio", desc: "Featured projects and case studies" },
  { icon: "🧠", title: "Market Intelligence", desc: "Research areas and industry insights" },
  { icon: "📚", title: "Resources", desc: "Tools, guides, and documentation" },
  { icon: "🚀", title: "Projects", desc: "Active initiatives and experiments" },
  { icon: "📬", title: "Contact", desc: "Get in touch for collaboration" },
];

const PRIMARY_FOCUS = [
  {
    initials: "MA",
    gradient: "from-[#27272a] to-[#18181b]",
    title: "MarTech Architecture",
    desc: "Building scalable marketing technology ecosystems that drive measurable business outcomes.",
    tags: ["MarTech Stack", "CDP", "Marketing Automation", "CRM Architecture", "Data Integration"],
  },
  {
    initials: "AI",
    gradient: "from-[#27272a] to-[#18181b]",
    title: "API Integration",
    desc: "Mastering the critical discipline of connecting disparate systems into unified platforms.",
    tags: ["API Design", "Webhook Architecture", "Real-Time Sync", "RESTful APIs", "Authentication"],
  },
  {
    initials: "IO",
    gradient: "from-[#27272a] to-[#18181b]",
    title: "Infinite Operations",
    desc: "Build self-sustaining, self-optimizing processes using the 19-step operational framework.",
    tags: ["19-Step Framework", "Self-Optimizing", "Autonomous Systems", "AI Agents", "Workflow Design"],
  },
];

const SUPPORTING_RESEARCH = [
  {
    title: "Revenue Operations",
    desc: "End-to-end revenue lifecycle optimization across marketing, sales, and customer success.",
    tags: ["RevOps", "Pipeline", "Forecasting"],
  },
  {
    title: "Content Intelligence",
    desc: "AI-powered content strategy, creation pipelines, and performance measurement.",
    tags: ["Content Strategy", "AI Writing", "SEO"],
  },
  {
    title: "Search Architecture",
    desc: "Building discoverable systems that connect users with the right information at the right time.",
    tags: ["Search Design", "Retrieval", "Ranking"],
  },
  {
    title: "Data Strategy",
    desc: "Designing data infrastructure that powers intelligent decision-making at scale.",
    tags: ["Data Modeling", "Governance", "Analytics"],
  },
  {
    title: "Growth Engineering",
    desc: "Technical growth systems that compound acquisition, activation, and retention.",
    tags: ["Growth Loops", "Experimentation", "PLG"],
  },
  {
    title: "Platform Design",
    desc: "Architecting platforms that scale from MVP to enterprise-grade infrastructure.",
    tags: ["Platform Eng", "DX", "Scalability"],
  },
];

const FEATURED_PROJECTS = [
  {
    title: "Windfield IO Platform",
    status: "Active",
    desc: "Production-grade agentic AI system for commercial real estate — orchestrating property intelligence, market analysis, and deal flow automation.",
    tags: ["Next.js", "Supabase", "Claude AI", "Edge Functions"],
  },
  {
    title: "The Prompt Engineering Project",
    status: "Active",
    desc: "Notion-based prompt library ecosystem with version control, category management, and collaborative prompt development workflows.",
    tags: ["Notion API", "Prompt Design", "Knowledge Management"],
  },
  {
    title: "IO Content Engine",
    status: "Active",
    desc: "Automated content pipeline with AI agents — from research and ideation through writing, optimization, and multi-channel distribution.",
    tags: ["AI Agents", "Content Ops", "Automation"],
  },
];

/* ------------------------------------------------------------------ */
/*  Reusable pieces                                                    */
/* ------------------------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#71717a] mb-8">
      {children}
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-[#27272a] text-xs text-[#a1a1aa] rounded-full px-3 py-1">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans antialiased">
      {/* ── Navigation ─────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#09090b]/95 backdrop-blur-md border-b border-[#27272a]">
        <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#27272a] to-[#18181b] rounded-lg flex items-center justify-center text-xs font-bold text-[#fafafa]">
              TS
            </div>
            <span className="text-sm font-semibold text-[#fafafa]">Tommy Saunders</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 text-center px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] bg-gradient-to-r from-[#fafafa] to-[#71717a] bg-clip-text text-transparent">
            AI Revenue Operations Architect
          </h1>
          <p className="text-lg md:text-xl text-[#71717a] font-light mt-6 max-w-[720px] mx-auto">
            I Help Organizations Create Intelligence — That&rsquo;s Not Artificial
          </p>
          <p className="text-sm text-[#a1a1aa] font-medium mt-4 tracking-wide">
            guiding through the chaos &rarr; with real solutions &rarr; that make an immediate impact&hellip; today.
          </p>
        </div>
      </section>

      {/* ── Quick Nav Cards ────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {QUICK_NAV.map((card) => (
            <div
              key={card.title}
              className="group bg-[#18181b] border border-[#27272a] rounded-lg p-6 hover:border-[#3f3f46] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#27272a] rounded-lg flex items-center justify-center text-xl">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mt-4 tracking-tight">{card.title}</h3>
              <p className="text-sm text-[#a1a1aa] mt-2 leading-relaxed">{card.desc}</p>
              <p className="text-sm text-[#a1a1aa] mt-4 group-hover:text-[#fafafa] transition-colors">
                &rarr;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Primary Focus Areas ────────────────────────────────── */}
      <section id="intelligence" className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>PRIMARY FOCUS</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRIMARY_FOCUS.map((item) => (
              <div
                key={item.title}
                className="bg-[#18181b] border border-[#27272a] rounded-lg p-6 hover:border-[#3f3f46] transition-colors"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center text-xs font-bold text-[#a1a1aa]`}
                >
                  {item.initials}
                </div>
                <h3 className="text-xl font-semibold mt-4 tracking-tight">{item.title}</h3>
                <p className="text-sm text-[#a1a1aa] mt-2 leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Supporting Research ─────────────────────────────────── */}
      <section id="resources" className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>SUPPORTING RESEARCH</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUPPORTING_RESEARCH.map((item) => (
              <div
                key={item.title}
                className="bg-[#18181b] border border-[#27272a] rounded-lg p-6 hover:border-[#3f3f46] transition-colors"
              >
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm text-[#a1a1aa] mt-2 leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ──────────────────────────────────── */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>FEATURED PROJECTS</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED_PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="bg-[#18181b] border border-[#27272a] rounded-lg p-6 hover:border-[#3f3f46] transition-colors"
              >
                {/* Status badge */}
                <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-[rgba(34,197,94,0.1)] text-[#22c55e] border border-[rgba(34,197,94,0.2)]">
                  {proj.status}
                </span>
                <h3 className="text-xl font-semibold mt-4 tracking-tight">{proj.title}</h3>
                <p className="text-sm text-[#a1a1aa] mt-2 leading-relaxed">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────── */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-[800px] mx-auto bg-gradient-to-b from-[#18181b] to-[#09090b] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Let&rsquo;s Build Something</h2>
          <p className="text-sm text-[#a1a1aa] mt-4 max-w-[480px] mx-auto leading-relaxed">
            Let&rsquo;s discuss how we can architect your AI-powered future together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link
              href="mailto:TommySaunders84@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-5 py-2.5 hover:-translate-y-0.5 hover:text-[#fafafa] transition-all"
            >
              Email
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-5 py-2.5 hover:-translate-y-0.5 hover:text-[#fafafa] transition-all"
            >
              LinkedIn
            </Link>
            <Link
              href="https://medium.com"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-5 py-2.5 hover:-translate-y-0.5 hover:text-[#fafafa] transition-all"
            >
              Medium
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-[#27272a] py-8 px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <span className="text-sm text-[#71717a]">Tommy Saunders</span>
          <span className="text-sm text-[#71717a]">&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}

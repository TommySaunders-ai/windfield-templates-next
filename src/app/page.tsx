"use client";
import { useState } from "react";

/* ── SVG helpers ── */
const ImgIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={`${className} text-fg-faint`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
  </svg>
);
const ChevDown = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
);
const ArrowRight = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);
const ArrowLeft = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
);
const Star = () => (
  <svg className="w-[18px] h-[18px] fill-brand" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);
const PlayIcon = () => (
  <svg className="w-6 h-6 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
);
const CircleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4" /></svg>
);

/* ── Main Page ── */
export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ═══ NAVBAR ═══ */}
      <nav className="sticky top-0 z-50 bg-bg/95 backdrop-blur-md border-b border-border">
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-5 flex items-center h-16">
          <a href="/" className="text-lg font-bold text-fg tracking-tight mr-8 shrink-0">Logo</a>
          <div className="hidden lg:flex items-center gap-6 flex-1 min-w-0 overflow-x-auto">
            {["Home v1","Home v2","Home v3","About","Pricing","Blog Post","Portfolio","Product"].map((l, i) => (
              <a key={i} href="#" className={`text-sm whitespace-nowrap transition-colors ${i === 2 ? "text-fg" : "text-fg-muted hover:text-fg"}`}>{l}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3 ml-auto shrink-0">
            <a href="#" className="text-[13px] text-fg-muted border border-border rounded-lg px-4 py-2 hover:border-border-strong hover:text-fg transition-colors">Call us 1 888 123 456</a>
            <a href="#" className="text-sm font-semibold bg-brand text-brand-fg rounded-lg px-5 h-9 flex items-center hover:bg-brand-hover transition-colors">Book a consultation</a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden ml-auto p-2 text-fg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-bg px-5 py-4 flex flex-col gap-3">
            {["Home v1","Home v2","Home v3","About","Pricing","Blog Post","Portfolio","Product"].map((l, i) => (
              <a key={i} href="#" className="text-sm text-fg-muted py-1">{l}</a>
            ))}
            <a href="#" className="text-sm font-semibold bg-brand text-brand-fg rounded-lg px-5 h-10 flex items-center justify-center mt-2">Book a consultation</a>
          </div>
        )}
      </nav>

      {/* ═══ SUB-NAV BANNER ═══ */}
      <div className="border-b border-border bg-bg-elevated">
        <div className="max-w-[1280px] mx-auto grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {[
            { title: "Page One", icon: <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m-7-7h6m6 0h6"/></svg> },
            { title: "Page Two", icon: <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg> },
            { title: "Page Three", icon: <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
            { title: "Page Four", icon: <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-5 px-6 border-r border-border last:border-r-0 max-lg:border-b max-sm:border-r-0 hover:bg-surface-hover transition-colors cursor-pointer">
              <div className="w-6 h-6 rounded-md bg-brand-muted flex items-center justify-center shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <div className="text-[13px] font-semibold text-fg mb-0.5">{item.title}</div>
                <div className="text-xs text-fg-subtle leading-snug">Lorem ipsum dolor sit amet consectetur elit</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ ANNOUNCEMENT BAR ═══ */}
      <div className="text-center py-2.5 px-4 border-b border-border text-[13px] text-fg-muted">
        Looking for a new career? <a href="#" className="text-brand underline underline-offset-2 hover:text-brand-hover">Get in touch</a>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden py-20 max-md:py-14" style={{ background: "linear-gradient(135deg, #09090b 0%, #0d1a0f 50%, #09090b 100%)" }}>
        <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(29,185,84,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-5 grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10 relative z-10">
          <div>
            <h1 className="text-[52px] max-lg:text-4xl max-md:text-3xl font-extrabold tracking-tight leading-[1.05] text-fg mb-5">Describe what your company does in a few words</h1>
            <p className="text-base text-fg-muted leading-relaxed mb-8 max-w-[480px]">Describe exactly what the company does and what a customer can expect when working with the company. Avoid using tedious words or phrases.</p>
            <a href="#" className="inline-flex items-center h-11 px-6 bg-brand text-brand-fg font-semibold text-sm rounded-lg hover:bg-brand-hover transition-colors">Book a consultation</a>
          </div>
          <div className="bg-surface border border-border rounded-xl aspect-[4/3] flex items-center justify-center min-h-[280px]">
            <ImgIcon />
          </div>
        </div>
      </section>

      {/* ═══ LOGO BAR ═══ */}
      <section className="py-12 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-5">
          <p className="text-center text-sm text-fg-subtle mb-7">We&apos;ve worked with great companies [Social proof to build credibility]</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="flex items-center gap-2 text-fg-faint text-base font-semibold hover:text-fg-muted transition-colors">
                <CircleIcon />{i % 2 === 0 ? "Webflow" : "Relume"}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="py-20 max-md:py-14">
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-5 grid grid-cols-2 gap-20 items-start max-lg:grid-cols-1 max-lg:gap-10">
          <div className="bg-surface border border-border rounded-xl aspect-square flex items-center justify-center min-h-[320px]">
            <ImgIcon />
          </div>
          <div>
            <p className="text-sm font-semibold text-brand tracking-wide mb-3">About</p>
            <h2 className="text-[40px] max-lg:text-3xl max-md:text-2xl font-bold tracking-tight leading-[1.15] text-fg mb-5">Describe what makes your company different to competitors</h2>
            <p className="text-base text-fg-muted leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <div className="flex flex-col gap-3 mb-8">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-start gap-3 text-sm text-fg-muted"><div className="w-2 h-2 rounded-full bg-brand shrink-0 mt-1.5" />Lorem ipsum dolor sit amet consectetur adipiscing elit</div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center h-11 px-6 border border-border-strong text-fg font-semibold text-sm rounded-lg hover:bg-surface hover:border-fg-subtle transition-all">Learn more</a>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-20 max-md:py-14 border-t border-border">
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-5">
          <div className="grid grid-cols-[1fr_2fr] gap-10 mb-12 max-lg:grid-cols-1">
            <div>
              <p className="text-sm font-semibold text-brand tracking-wide mb-3">Services</p>
              <h2 className="text-[40px] max-lg:text-3xl max-md:text-2xl font-bold tracking-tight leading-[1.15] text-fg mb-5">Short headline of how the company can help</h2>
              <p className="text-base text-fg-muted leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
              <a href="#" className="inline-flex items-center h-11 px-6 bg-brand text-brand-fg font-semibold text-sm rounded-lg hover:bg-brand-hover transition-colors">Book a consultation</a>
            </div>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1">
            {["Summary of service one","Summary of service two","Summary of service three","Summary of service four"].map((title, i) => (
              <div key={i} className="p-8 border border-border -mr-px -mb-px hover:bg-surface hover:-translate-y-px transition-all">
                <h3 className="text-xl font-semibold text-fg mb-3 tracking-tight">{title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-2.5 transition-all">Learn more <ArrowRight /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="py-24 max-md:py-16 bg-bg-elevated border-t border-b border-border">
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-5">
          <p className="text-sm font-semibold text-brand tracking-wide mb-3 text-center">Customer Stories</p>
          <h2 className="text-[40px] max-lg:text-3xl max-md:text-2xl font-bold tracking-tight leading-[1.15] text-fg mb-12 text-center">Don&apos;t just take our word for it</h2>
          <div className="max-w-[960px] mx-auto bg-surface border border-border rounded-xl overflow-hidden grid grid-cols-2 max-lg:grid-cols-1">
            <div className="bg-bg-sunken aspect-square flex items-center justify-center max-lg:aspect-video">
              <button className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-105 transition-all">
                <PlayIcon />
              </button>
            </div>
            <div className="p-10 max-md:p-6 flex flex-col justify-center">
              <div className="flex gap-1 mb-5">{[1,2,3,4,5].map(i => <Star key={i} />)}</div>
              <p className="text-base text-fg leading-relaxed mb-7 italic">&ldquo;A testimonial that shares a customer&apos;s positive experience with your company and answers potential customer doubts. Showcase testimonials from a similar demographic to your customers.&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-fg">Name Surname</div>
                  <div className="text-[13px] text-fg-subtle">Position, Company name</div>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-fg-muted"><CircleIcon /> Webflow</div>
              </div>
            </div>
          </div>
          <div className="max-w-[960px] mx-auto mt-7 flex items-center justify-between">
            <div className="flex gap-2">{[0,1,2,3,4].map(i => <div key={i} className={`w-2 h-2 rounded-full cursor-pointer ${i === 0 ? "bg-brand" : "bg-fg-faint"}`} />)}</div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-fg-muted hover:border-fg-subtle hover:text-fg transition-all"><ArrowLeft /></button>
              <button className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-fg-muted hover:border-fg-subtle hover:text-fg transition-all"><ArrowRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESOURCES / BLOG ═══ */}
      <section className="py-20 max-md:py-14">
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-5">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand tracking-wide mb-3">Resources</p>
            <h2 className="text-[40px] max-lg:text-3xl max-md:text-2xl font-bold tracking-tight leading-[1.15] text-fg mb-4">Introduce resources that can provide value to the visitor</h2>
            <p className="text-base text-fg-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 mb-10">
            {[1,2,3,4].map(i => (
              <a key={i} href="#" className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-border-strong hover:-translate-y-0.5 transition-all">
                <div className="bg-bg-sunken aspect-[16/9] flex items-center justify-center border-b border-border">
                  <ImgIcon className="w-9 h-9" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-brand tracking-wide mb-2.5">Category</div>
                  <h3 className="text-xl font-semibold text-fg mb-2 tracking-tight leading-snug">Blog title heading will go here</h3>
                  <p className="text-sm text-fg-muted leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...</p>
                  <div className="flex items-center gap-4 text-xs text-fg-subtle">
                    <span>Full name</span><span className="w-0.5 h-0.5 rounded-full bg-fg-faint" /><span>11 Jan 2022</span><span className="w-0.5 h-0.5 rounded-full bg-fg-faint" /><span>5 min read</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-flex items-center h-11 px-6 border border-border-strong text-fg font-semibold text-sm rounded-lg hover:bg-surface hover:border-fg-subtle transition-all">View all</a>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 max-md:py-14 border-t border-border">
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-5">
          <div className="text-center mb-12">
            <h2 className="text-[40px] max-lg:text-3xl max-md:text-2xl font-bold tracking-tight leading-[1.15] text-fg mb-4">Frequently asked questions</h2>
            <p className="text-base text-fg-muted max-w-[640px] mx-auto">Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className={`py-5 border-b border-border cursor-pointer group ${i % 2 === 0 ? "pr-8 max-md:pr-0 md:border-r md:border-border" : "pl-8 max-md:pl-0"}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[15px] font-medium text-fg group-hover:text-brand transition-colors">Question text goes here</span>
                  <span className="shrink-0 text-fg-subtle"><ChevDown /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 max-md:py-14 text-center">
        <div className="max-w-3xl mx-auto px-10 max-md:px-5">
          <h2 className="text-[32px] max-md:text-2xl font-bold tracking-tight leading-[1.2] text-fg mb-3">Still have a questions?</h2>
          <p className="text-base text-fg-muted mb-7">Support details to capture customers that might be on the fence.</p>
          <a href="#" className="inline-flex items-center h-11 px-6 border border-border-strong text-fg font-semibold text-sm rounded-lg hover:bg-surface hover:border-fg-subtle transition-all">Call us 1 888 123 456</a>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-border pt-14 bg-bg-elevated">
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-5">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-8">
            <div>
              <div className="text-lg font-bold text-fg mb-4">Logo</div>
              <p className="text-[13px] text-fg-muted mb-3 leading-relaxed">Join our newsletter to stay up to date on features and releases.</p>
              <form className="flex gap-2 mb-3" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="flex-1 h-10 px-3 bg-bg border border-border rounded-md text-[13px] text-fg placeholder:text-fg-faint focus:outline-none focus:border-brand hover:border-border-strong transition-colors" />
                <button type="submit" className="h-10 px-4 border border-border-strong text-fg text-[13px] font-semibold rounded-md hover:bg-surface hover:border-fg-subtle transition-all">Subscribe</button>
              </form>
              <p className="text-[11px] text-fg-faint leading-relaxed">By subscribing you agree to with our <a href="#" className="underline underline-offset-2">Privacy Policy</a> and provide consent to receive updates from our company.</p>
            </div>
            {[
              { title: "Column One", links: ["Link One","Link Two","Link Three","Link Four","Link Five"] },
              { title: "Column Two", links: ["Link Six","Link Seven","Link Eight","Link More","Link Ten"] },
              { title: "Follow Us", links: [
                { name: "Facebook", icon: <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                { name: "Instagram", icon: <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5" fill="#111113"/><circle cx="17.5" cy="6.5" r="1.5"/></svg> },
                { name: "X", icon: <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> },
                { name: "LinkedIn", icon: <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                { name: "Youtube", icon: <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.35z"/><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="#111113"/></svg> },
              ]},
            ].map((col, ci) => (
              <div key={ci}>
                <div className="text-[13px] font-semibold text-fg mb-4">{col.title}</div>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link: any, li: number) => (
                    <a key={li} href="#" className="text-[13px] text-fg-muted hover:text-fg transition-colors flex items-center gap-2">
                      {typeof link === "object" ? <>{link.icon}{link.name}</> : link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between py-5 border-t border-border text-xs text-fg-subtle max-md:flex-col max-md:gap-3 max-md:text-center">
            <span>&copy; 2025 Relume. All rights reserved.</span>
            <div className="flex gap-6">
              {["Privacy Policy","Terms of Service","Cookie Settings"].map((l, i) => (
                <a key={i} href="#" className="underline underline-offset-2 hover:text-fg transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

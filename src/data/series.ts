export interface Article {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
}

export interface Series {
  slug: string;
  number: string;
  title: string;
  description: string;
  count: string;
  color: string;
  articles: Article[];
}

export const allSeries: Series[] = [
  {
    slug: "property-profile",
    number: "01",
    title: "Property Profile",
    description: "Core property record — 10,500 SF Class-A office building, built 2020, B3-3 zoning. Physical attributes, pricing, ownership, medical use case analysis, and ideal tenant mix.",
    count: "7 Pages \u00b7 Property Identity",
    color: "#1db954",
    articles: [
      { slug: "identity", number: "I", title: "Property Identity", subtitle: "Address, classification, buildout ID, coordinates, and cross streets." },
      { slug: "building", number: "II", title: "Building Characteristics", subtitle: "10,500 SF, 1.29 AC, single-story, 2020 construction, B3-3 zoning, 4.0/1,000 parking." },
      { slug: "pricing", number: "III", title: "Pricing & Financials", subtitle: "Sale price, cap rate, NOI, price per SF, tax assessment, and loan data." },
      { slug: "medical-use-case", number: "IV", title: "Medical Use Case Analysis", subtitle: "Why this property fits medical users — zoning, infrastructure, parking, demographics." },
      { slug: "tenant-mix", number: "V", title: "Ideal Medical Tenant Mix", subtitle: "Multi-tenant strategy: urgent care + dental + chiro/PT + med spa/specialty." },
      { slug: "scoring", number: "VI", title: "Scoring & Intelligence", subtitle: "Completeness 70/100, investment 84/100, lead temperature hot, enrichment complete." },
      { slug: "broker", number: "VII", title: "Broker & Ownership", subtitle: "Andrew Danner, Windfield Real Estate, CORFAC International." },
    ],
  },
  {
    slug: "market-intelligence",
    number: "02",
    title: "Market Intelligence",
    description: "KC Northland submarket analysis — demographics, traffic counts, medical demand gaps, competitive landscape, and acquisition briefs focused on medical users.",
    count: "6 Pages \u00b7 Market Analysis",
    color: "#17a34a",
    articles: [
      { slug: "demographics", number: "I", title: "Demographics & Trade Area", subtitle: "$107K avg HHI (2mi), population growth, household data across 1/3/5-mile rings." },
      { slug: "traffic", number: "II", title: "Traffic & Access", subtitle: "Green Hills Rd 8-12K VPD, M-152 15-20K VPD, I-29 40K+, NW Barry Rd 25K+." },
      { slug: "medical-cluster", number: "III", title: "Existing Medical Cluster", subtitle: "13 medical practices within 2 miles — Northland Eye, Magnolia Chiro, PT Solutions, and more." },
      { slug: "demand-gaps", number: "IV", title: "Medical Demand Gaps", subtitle: "Med spa (HIGH), urgent care (MEDIUM-HIGH), orthopedic (HIGH), behavioral health (MEDIUM)." },
      { slug: "competitive-landscape", number: "V", title: "Competitive Landscape", subtitle: "Comparable medical office properties within 5 miles — advantages and weaknesses." },
      { slug: "acquisition-briefs", number: "VI", title: "Acquisition Briefs", subtitle: "3 briefs: medical group owner-occupant, healthcare REIT, urgent care/med spa chain." },
    ],
  },
  {
    slug: "target-profiles",
    number: "03",
    title: "Target Tenant Profiles",
    description: "11 medical tenant profiles — urgent care, chiropractic, optometry, med spa, PT, dental, behavioral health, staffing, specialty, labs, and pharmacy.",
    count: "11 Profiles \u00b7 Medical Targeting",
    color: "#0080a0",
    articles: [
      { slug: "urgent-care", number: "I", title: "Urgent Care / Walk-In Clinic", subtitle: "3,000-5,000 SF, $22-28 NNN. CareNow, NextCare, Total Access — franchise expansion targets." },
      { slug: "med-spa", number: "II", title: "Med Spa / Aesthetic Medicine", subtitle: "2,000-4,000 SF, $22-30 NNN. HIGHEST DEMAND GAP — zero competition on corridor." },
      { slug: "chiropractic", number: "III", title: "Chiropractic Practice", subtitle: "1,500-3,000 SF, $18-24 NNN. Adjacent to existing cluster on Green Hills Rd." },
      { slug: "optometry", number: "IV", title: "Optometry / Ophthalmology", subtitle: "2,000-3,500 SF, $20-26 NNN. Northland Eye already at 8660 — proven demand." },
      { slug: "physical-therapy", number: "V", title: "Physical Therapy / Sports Med", subtitle: "2,500-4,000 SF, $18-24 NNN. Open floor plan for rehab gym. KC Rehab $10-25M." },
      { slug: "dental", number: "VI", title: "Dental / Orthodontic", subtitle: "2,500-4,000 SF, $20-28 NNN. Modern plumbing (2020) reduces buildout cost." },
      { slug: "behavioral-health", number: "VII", title: "Behavioral Health / Counseling", subtitle: "1,500-3,000 SF, $18-24 NNN. Growing demand, telehealth satellite model." },
      { slug: "medical-staffing", number: "VIII", title: "Medical Staffing / Home Health", subtitle: "2,000-3,500 SF, $16-22 NNN. Administrative office, I-29 access for dispatch." },
      { slug: "specialty-medical", number: "IX", title: "Specialty Medical", subtitle: "2,000-3,500 SF, $22-28 NNN. Dermatology, podiatry, ENT, allergy." },
      { slug: "labs-imaging", number: "X", title: "Medical Labs & Imaging", subtitle: "3,000-5,000 SF, $20-26 NNN. Quest, Labcorp, independent labs." },
      { slug: "pharmacy", number: "XI", title: "Pharmacy / Compounding", subtitle: "1,500-2,500 SF, $18-24 NNN. Adjacent medical cluster = built-in Rx volume." },
    ],
  },
  {
    slug: "prospect-lists",
    number: "04",
    title: "Prospect Targeting Lists",
    description: "7 targeting lists with Clay search params, qualification criteria, and outreach angles — medical practices, franchises, investors, brokers.",
    count: "7 Lists \u00b7 82 Prospects",
    color: "#5b21b6",
    articles: [
      { slug: "medical-practices", number: "I", title: "Medical Practice Prospects", subtitle: "50-75 targets. Practice owners, medical directors, office managers in KC metro." },
      { slug: "local-businesses", number: "II", title: "Local Medical Businesses", subtitle: "25-40 targets. 13 already identified within 5 miles — chiro, optometry, PT, dental." },
      { slug: "franchise-operators", number: "III", title: "Medical Franchise Operators", subtitle: "30-50 targets. 14 national chains: Ideal Image, NextCare, ATI, Heartland Dental." },
      { slug: "owner-occupant", number: "IV", title: "Owner-Occupant Buyers", subtitle: "15-25 targets. Multi-physician groups seeking to own their facility." },
      { slug: "healthcare-investors", number: "V", title: "Healthcare RE Investors", subtitle: "15-20 targets. 7 REITs: Physicians Realty, Healthcare Trust, Montecito Medical." },
      { slug: "broker-network", number: "VI", title: "Medical Broker Network", subtitle: "20-30 targets. 15 CRM contacts: Colliers, CBRE, Cushman, Newmark Zimmer." },
      { slug: "adjacent-services", number: "VII", title: "Adjacent Services", subtitle: "15-20 targets. Insurance, financial, legal firms serving medical practices." },
    ],
  },
  {
    slug: "scrape-configs",
    number: "05",
    title: "Scrape & Enrichment Configs",
    description: "12 Clay search configs, 17 Apify scrape configs, and 10 Clay enrichment pipelines — all medical-focused, ready to execute.",
    count: "39 Configs \u00b7 Execution Ready",
    color: "#4ade80",
    articles: [
      { slug: "clay-configs", number: "I", title: "Clay Search Configs", subtitle: "12 configs: urgent care, med spa, chiro, PT, dental, optometry, behavioral, specialty, labs, staffing, investors, franchise." },
      { slug: "apify-google-maps", number: "II", title: "Apify Google Maps Scrapes", subtitle: "12 Google Maps scrapes by medical category + 1 catch-all. Est. 255-470 businesses." },
      { slug: "apify-linkedin", number: "III", title: "Apify LinkedIn Searches", subtitle: "4 LinkedIn profile searches: medical owners, med spa, urgent care/franchise, healthcare RE." },
      { slug: "clay-enrichment", number: "IV", title: "Clay Enrichment Pipeline", subtitle: "10 enrichment configs: company intel, decision-maker contacts, email verification, account intelligence." },
      { slug: "scoring-matrix", number: "V", title: "Scoring & Qualification Matrix", subtitle: "6-dimension scoring model, 14 medical category fit scores, priority tiers A/B/C/D." },
      { slug: "execution-order", number: "VI", title: "Execution Order & Checklist", subtitle: "8-week campaign execution checklist tying all scrape, enrichment, and outreach together." },
    ],
  },
  {
    slug: "linkedin-campaigns",
    number: "06",
    title: "LinkedIn Campaigns",
    description: "Full 7-stage video journey from Unaware to Loyalty, 3 matched audiences, 5 ad campaigns, 4 organic posts, and Sales Navigator search configs.",
    count: "10 Campaigns \u00b7 Video Journey",
    color: "#6a3fa0",
    articles: [
      { slug: "audiences", number: "I", title: "LinkedIn Audiences", subtitle: "3 matched audiences: medical decision makers, franchise operators, healthcare investors." },
      { slug: "awareness", number: "II", title: "Stage 1: Unaware Campaign", subtitle: "Video views — introduce KC Northland medical space challenge without mentioning property." },
      { slug: "problem-aware", number: "III", title: "Stage 2: Problem Aware", subtitle: "Market report lead magnet — quantify the cost of bad medical office space." },
      { slug: "solution-aware", number: "IV", title: "Stage 3: Solution Aware", subtitle: "Ownership calculator — the financial case for owning vs leasing medical office." },
      { slug: "product-aware", number: "V", title: "Stage 4: Product Aware", subtitle: "Property tour video — introduce 8630 Green Hills specifically with floor plans." },
      { slug: "conversion", number: "VI", title: "Stage 5: Conversion", subtitle: "Lead gen + tour scheduling — direct broker outreach to qualified prospects." },
      { slug: "nurturing", number: "VII", title: "Stage 6: Customer Nurturing", subtitle: "Post-tour buildout guides, SBA loan info, medical office ownership resources." },
      { slug: "loyalty", number: "VIII", title: "Stage 7: Loyalty & Advocacy", subtitle: "Green Hills Medical Corridor brand building, referral program, community events." },
      { slug: "lead-magnets", number: "IX", title: "Lead Magnet Strategy", subtitle: "4 stage-aligned lead magnets: market report, calculator, property brief, tour booking." },
      { slug: "performance-dashboard", number: "X", title: "Performance Dashboard", subtitle: "Journey stage metrics, progression tracking, ROI calculation, action triggers." },
    ],
  },
  {
    slug: "outreach-sequences",
    number: "07",
    title: "Outreach Sequences",
    description: "4 multi-touch outreach sequences — medical practice owners (5-touch), franchise development (5-touch), healthcare investors (4-touch), broker co-broke (3-touch).",
    count: "4 Sequences \u00b7 17 Touches",
    color: "#8a1a2a",
    articles: [
      { slug: "medical-owner", number: "I", title: "Medical Practice Owner Sequence", subtitle: "5-touch over 14 days: Email D0, LinkedIn D3, Email D5, LinkedIn D7, Email D14." },
      { slug: "franchise-dev", number: "II", title: "Franchise Development Sequence", subtitle: "5-touch over 21 days: site selection data package, virtual walkthrough, status update." },
      { slug: "healthcare-investor", number: "III", title: "Healthcare Investor Sequence", subtitle: "4-touch over 14 days: investment memo, pro forma, underwriting call, final note." },
      { slug: "broker-cobroke", number: "IV", title: "Medical Broker Co-Broke Sequence", subtitle: "3-touch over 10 days: co-broke opportunity, LinkedIn follow-up, property package." },
    ],
  },
  {
    slug: "marketing-content",
    number: "08",
    title: "Marketing Content",
    description: "Headlines, executive summary, investment thesis, tenant appeal, location narrative, SEO description, email copy, and LinkedIn post series.",
    count: "13 Assets \u00b7 Content Library",
    color: "#1a5fa0",
    articles: [
      { slug: "headlines", number: "I", title: "Marketing Headlines", subtitle: "Primary: Class-A Medical Office — Green Hills Road at M-152." },
      { slug: "executive-summary", number: "II", title: "Executive Summary", subtitle: "10,500 SF, 2020 Class-A, B3-3 medical zoning, M-152/I-29 visibility, $107K HHI." },
      { slug: "investment-thesis", number: "III", title: "Investment Thesis", subtitle: "8 reasons: newest Class-A, medical demand gap, adjacent cluster, strong demographics." },
      { slug: "tenant-appeal", number: "IV", title: "Tenant Appeal Statement", subtitle: "Own your practice location — 2020 construction, single-story, 4.0/1,000 parking." },
      { slug: "location-narrative", number: "V", title: "Location Narrative", subtitle: "Green Hills Road at M-152 — gateway to KC Northland's Tiffany Hills corridor." },
      { slug: "seo-description", number: "VI", title: "SEO Description", subtitle: "10,500 SF Class-A office for sale in KC Northland — B3-3 medical zoning." },
      { slug: "email-marketing", number: "VII", title: "Email Marketing Copy", subtitle: "Medical tenant solicitation email — subject line, body, CTA, broker signature." },
      { slug: "linkedin-posts", number: "VIII", title: "LinkedIn Post Series", subtitle: "4 posts: property announcement, owner-occupant, investor, med spa demand gap." },
    ],
  },
  {
    slug: "contact-pipeline",
    number: "09",
    title: "Contact Pipeline",
    description: "82 medical prospects across 10 categories — 16 Clay-enriched with revenue, employee count, and decision-maker LinkedIn profiles.",
    count: "82 Contacts \u00b7 16 Enriched",
    color: "#b05a00",
    articles: [
      { slug: "tier-a", number: "I", title: "Tier A Prospects (Score 80+)", subtitle: "19 hot leads: AesthetiCare, NextCare, KC Rehab, aNu Aesthetics, KC Skin & Cancer." },
      { slug: "med-spa-contacts", number: "II", title: "Med Spa Contacts", subtitle: "13 prospects: AesthetiCare ($5-10M), Healthylooks ($5-10M), aNu ($5-10M), Ideal Image." },
      { slug: "urgent-care-contacts", number: "III", title: "Urgent Care Contacts", subtitle: "6 prospects: NextCare ($200-500M), Total Access ($25-75M), First Point ($5-10M)." },
      { slug: "chiropractic-contacts", number: "IV", title: "Chiropractic Contacts", subtitle: "16 prospects: Magnolia (on Green Hills), Fountain City, Barry Road, I Got Your Back." },
      { slug: "pt-contacts", number: "V", title: "Physical Therapy Contacts", subtitle: "17 prospects: KC Rehab ($10-25M, 10 loc), ATI (900+ nat'l), PT Solutions, SERC." },
      { slug: "dental-contacts", number: "VI", title: "Dental Contacts", subtitle: "9 prospects: Green Hills Dental, Tiffany Springs ($500K-1M), Dental Designs ($5-10M)." },
      { slug: "optometry-contacts", number: "VII", title: "Optometry Contacts", subtitle: "9 prospects: Northland Eye ($1-5M, adjacent), Moyes Eye, My Eye Care, Vision Source." },
      { slug: "specialty-contacts", number: "VIII", title: "Specialty & Other Contacts", subtitle: "12 prospects: KC Skin ($10-25M), KC Footcare (on Green Hills), Ascentist ($25-75M)." },
    ],
  },
  {
    slug: "search-io",
    number: "10",
    title: "Search IO",
    description: "SEO, SEM, AEO, GEO — 70 keywords, 7 Google Ads campaigns, 8 featured snippet targets, AI citation strategy across ChatGPT/Claude/Gemini/Perplexity.",
    count: "70 Keywords \u00b7 Full Search Stack",
    color: "#2a3a9a",
    articles: [
      { slug: "keyword-strategy", number: "I", title: "Keyword Strategy", subtitle: "70 keywords: branded (8), industry (10), informational (10), navigational (10), commercial (10), transactional (10)." },
      { slug: "seo", number: "II", title: "Search Engine Optimization", subtitle: "10 target keywords with meta descriptions, backlink strategy, and technical SEO status." },
      { slug: "sem", number: "III", title: "Search Engine Marketing", subtitle: "7 Google Ads campaigns, $2K/month budget, 30-50 qualified clicks expected." },
      { slug: "aeo", number: "IV", title: "Answer Engine Optimization", subtitle: "8 featured snippet targets with direct answers and FAQPage schema markup." },
      { slug: "geo", number: "V", title: "Generative Engine Optimization", subtitle: "4 AI platforms (ChatGPT, Claude, Gemini, Perplexity) — citation strategy." },
      { slug: "user-intent", number: "VI", title: "User Search Intent Mapping", subtitle: "10 queries mapped by intent type, journey stage, and content match." },
    ],
  },
  {
    slug: "media-docs",
    number: "11",
    title: "Media & Documents",
    description: "8 web images, 21 Buildout photos, 9 PDFs, 5 data files — complete media inventory for the property.",
    count: "44 Assets \u00b7 Media Library",
    color: "#9a7000",
    articles: [
      { slug: "photos", number: "I", title: "Property Photography", subtitle: "Hero, exterior (2), aerial, interior (2), lobby, hallway — 8 web-ready images." },
      { slug: "buildout-images", number: "II", title: "Buildout Listing Images", subtitle: "21 original listing photos from Buildout CDN." },
      { slug: "pdfs", number: "III", title: "PDF Documents", subtitle: "Brochure (14.3 MB), IO Dossier (5.5 MB), RI Reports, flyer, tri-fold, case study, press release." },
      { slug: "data-files", number: "IV", title: "Data Files & CSVs", subtitle: "Master prospect CSV (125 rows), old scraped prospects (100), PEP Clay upload (589)." },
    ],
  },
  {
    slug: "execution-prompts",
    number: "12",
    title: "Execution Prompts",
    description: "35 ready-to-run prompts for Apify scrapes, Clay enrichments, search content generation, and prospect dossier building.",
    count: "35 Prompts \u00b7 Copy-Paste Ready",
    color: "#2a4a6a",
    articles: [
      { slug: "apify-prompts", number: "I", title: "Apify Scrape Prompts", subtitle: "16 prompts: pre-flight, 11 Google Maps, 4 LinkedIn, 1 website crawl, master consolidation." },
      { slug: "clay-prompts", number: "II", title: "Clay Enrichment Prompts", subtitle: "10 prompts: existing contacts, med spa/urgent care/all-medical, franchise, REIT, email, intelligence." },
      { slug: "search-prompts", number: "III", title: "Search & Content Prompts", subtitle: "6 prompts: property listing page, 5 landing pages, blog articles, AEO snippets, GEO guide." },
      { slug: "prospecting-prompts", number: "IV", title: "Prospecting Document Prompts", subtitle: "3 prompts: top-25 dossiers, 10 category CSVs, 8-week execution checklist." },
    ],
  },
];

export function getSeriesBySlug(slug: string): Series | undefined {
  return allSeries.find((s) => s.slug === slug);
}

export function getArticle(seriesSlug: string, articleSlug: string) {
  const series = getSeriesBySlug(seriesSlug);
  if (!series) return undefined;
  const article = series.articles.find((a) => a.slug === articleSlug);
  if (!article) return undefined;
  const idx = series.articles.indexOf(article);
  return {
    series,
    article,
    prev: idx > 0 ? series.articles[idx - 1] : undefined,
    next: idx < series.articles.length - 1 ? series.articles[idx + 1] : undefined,
  };
}

export function generateStaticSeries() {
  return allSeries.map((s) => ({ series: s.slug }));
}

export function generateStaticArticles() {
  return allSeries.flatMap((s) =>
    s.articles.map((a) => ({ series: s.slug, article: a.slug }))
  );
}

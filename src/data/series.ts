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
    slug: "io-marketing-os",
    number: "01",
    title: "IO Marketing OS",
    description: "The complete architecture. Knowledge Base through Paid Campaign Architecture across nine platforms. The blueprint.",
    count: "9 Articles \u00b7 The Architecture",
    color: "#1db954",
    articles: [
      { slug: "knowledge-base", number: "I", title: "The Knowledge Base", subtitle: "Eight constitutional pillars. The amber root that governs every downstream decision." },
      { slug: "intelligence-layer", number: "II", title: "The Intelligence Layer", subtitle: "Deep Research (13 disciplines) + the Market module. External sensing apparatus." },
      { slug: "strategy-engine", number: "III", title: "The Strategy Engine", subtitle: "Five parallel tracks \u2014 Organic, Search, Paid, Sales, Growth \u2014 each at its own pace." },
      { slug: "context-briefs", number: "IV", title: "The Context Briefs", subtitle: "Insights, User Search, Creative, Offers & CTAs. Where strategy becomes executable." },
      { slug: "distribution-matrix", number: "V", title: "The Distribution Matrix", subtitle: "Six categories \u2014 Marketplaces, Paid, Organic, Website, AI Search, AI Chats." },
      { slug: "content-types", number: "VI", title: "The Content Types", subtitle: "Twenty-seven authorized formats. The complete vocabulary of deliverables." },
      { slug: "execution-system", number: "VII", title: "The Execution System", subtitle: "Planning, Scheduling, Posting, Engaging, Measurement, Social Scaling, Task Execution." },
      { slug: "organic-workspaces", number: "VIII", title: "The Organic Workspaces", subtitle: "Per-platform environments: YouTube, Facebook, LinkedIn, Pinterest, X, Instagram." },
      { slug: "paid-campaigns", number: "IX", title: "The Paid Campaign Architecture", subtitle: "Nine platform-specific campaign systems built on one universal schema." },
    ],
  },
  {
    slug: "ai-agentic-layer",
    number: "02",
    title: "The AI Agentic Layer",
    description: "AI Stack, Automation, Analytics, Conversion & Lifecycle, the Agentic Loop. The engine that makes the machine run.",
    count: "5 Articles \u00b7 The Engine",
    color: "#17a34a",
    articles: [
      { slug: "ai-stack", number: "X", title: "The AI Stack", subtitle: "AI tools by system layer \u2014 research, strategy, creation, execution." },
      { slug: "automation-architecture", number: "XI", title: "The Automation Architecture", subtitle: "Zapier, Make, n8n. Four trigger types. Six+ key workflows." },
      { slug: "analytics-attribution", number: "XII", title: "Analytics & Attribution Engine", subtitle: "Multi-touch attribution, UTM architecture, KPI hierarchy." },
      { slug: "conversion-lifecycle", number: "XIII", title: "Conversion & Lifecycle Engine", subtitle: "Landing pages, email sequences, retargeting." },
      { slug: "agentic-loop", number: "XIV", title: "The Agentic Feedback Loop", subtitle: "Six autonomous agents, continuous improvement cycle." },
    ],
  },
  {
    slug: "operations-stack",
    number: "03",
    title: "The Complete Operations Stack",
    description: "Nine prompt libraries working as one system. Foundation, Strategy, and Execution tiers producing a complete business operations knowledge base.",
    count: "9 Libraries \u00b7 The Implementation",
    color: "#17a34a",
    articles: [
      { slug: "company-identity", number: "I", title: "Company Identity Library", subtitle: "The constitutional layer. Who we are, what we do, how we\u2019re different." },
      { slug: "target-audience", number: "II", title: "Target Audience Library", subtitle: "ICP profiles, persona cards, pain/gain matrices." },
      { slug: "brand-identity", number: "III", title: "Brand Identity Library", subtitle: "Voice, tone, visual language, messaging pillars." },
      { slug: "content-strategy", number: "IV", title: "Content Strategy Library", subtitle: "Editorial calendar, pillar topics, content models." },
      { slug: "seo-library", number: "V", title: "SEO Library", subtitle: "Keyword clusters, technical checklist, link strategy." },
      { slug: "editorial-standards", number: "VI", title: "Editorial Standards Library", subtitle: "Style guide, quality criteria, review workflow." },
      { slug: "social-media", number: "VII", title: "Social Media Library", subtitle: "Platform strategies, posting cadence, engagement rules." },
      { slug: "website-copy", number: "VIII", title: "Website Copy Library", subtitle: "Page templates, hero formulas, CTA patterns." },
      { slug: "sales-enablement", number: "IX", title: "Sales Enablement Library", subtitle: "Battle cards, objection handlers, case study templates." },
    ],
  },
  {
    slug: "seo-geo-architecture",
    number: "04",
    title: "SEO & GEO Architecture",
    description: "Topic clusters, pillar pages, technical SEO, entity optimization, GEO, AEO, LLM search, and SEM. The search infrastructure.",
    count: "9 Articles \u00b7 Search Infrastructure",
    color: "#5b21b6",
    articles: [
      { slug: "topic-clusters", number: "I", title: "Topic Cluster Architecture", subtitle: "How content clusters create topical authority." },
      { slug: "pillar-pages", number: "II", title: "The Pillar Page System", subtitle: "Long-form anchors that hold the cluster together." },
      { slug: "technical-seo", number: "III", title: "Technical SEO Infrastructure", subtitle: "Speed, crawlability, indexation, structured data." },
      { slug: "internal-linking", number: "IV", title: "Internal Linking as a System", subtitle: "Programmatic linking architecture for topical flow." },
      { slug: "entity-seo", number: "V", title: "Entity-Based SEO & Schema", subtitle: "Knowledge graph optimization and structured markup." },
      { slug: "geo-playbook", number: "VI", title: "The GEO Playbook", subtitle: "Generative Engine Optimization for AI search." },
      { slug: "aeo-playbook", number: "VII", title: "The AEO Playbook", subtitle: "Answer Engine Optimization for featured snippets." },
      { slug: "llm-search", number: "VIII", title: "LLM Search & AI Citation Strategy", subtitle: "Getting cited by ChatGPT, Claude, Perplexity." },
      { slug: "sem-architecture", number: "IX", title: "SEM & Paid Search Architecture", subtitle: "Google Ads, Bing, campaign structure." },
    ],
  },
  {
    slug: "creative-production",
    number: "05",
    title: "Creative Production System",
    description: "Creative briefs, brand voice, visual identity, copywriting, video, UGC, repurposing, and creative testing. The content machine.",
    count: "8 Articles \u00b7 Content Production",
    color: "#4ade80",
    articles: [
      { slug: "creative-brief", number: "I", title: "The Creative Brief System", subtitle: "Standardized brief format for every deliverable." },
      { slug: "brand-voice", number: "II", title: "Brand Voice as Infrastructure", subtitle: "Voice rules, tone spectrums, channel adaptation." },
      { slug: "visual-identity", number: "III", title: "The Visual Identity OS", subtitle: "Design systems, asset management, template libraries." },
      { slug: "copywriting", number: "IV", title: "Copywriting Frameworks", subtitle: "Headline formulas, body copy patterns, CTA architecture." },
      { slug: "video-production", number: "V", title: "Video Production Workflow", subtitle: "Pre-production through distribution pipeline." },
      { slug: "ugc-pipeline", number: "VI", title: "The UGC & Creator Pipeline", subtitle: "Sourcing, briefing, approving user-generated content." },
      { slug: "repurposing", number: "VII", title: "The Repurposing Architecture", subtitle: "One asset, many formats. The content multiplication engine." },
      { slug: "creative-testing", number: "VIII", title: "Creative Testing Framework", subtitle: "A/B testing, multivariate, performance optimization." },
    ],
  },
  {
    slug: "audience-community",
    number: "06",
    title: "Audience & Community",
    description: "First-party data, email asset, community architecture, onboarding, customer research, VoC, and advocacy. The owned asset layer.",
    count: "7 Articles \u00b7 Owned Assets",
    color: "#0080a0",
    articles: [
      { slug: "first-party-data", number: "I", title: "First-Party Data Strategy", subtitle: "Building the data layer without third-party dependence." },
      { slug: "email-asset", number: "II", title: "Building the Email Asset", subtitle: "List architecture, segmentation, deliverability." },
      { slug: "community-architecture", number: "III", title: "Community Architecture", subtitle: "Platform selection, moderation, engagement loops." },
      { slug: "onboarding", number: "IV", title: "Member Onboarding & Engagement", subtitle: "First 30 days, activation sequences, retention." },
      { slug: "customer-research", number: "V", title: "The Customer Research OS", subtitle: "Survey design, interview protocols, insight synthesis." },
      { slug: "voc-content", number: "VI", title: "Voice of Customer as Content", subtitle: "Turning research into marketing ammunition." },
      { slug: "advocacy", number: "VII", title: "Advocacy & Referral Architecture", subtitle: "Program design, incentives, ambassador networks." },
    ],
  },
  {
    slug: "brand-positioning",
    number: "07",
    title: "Brand & Positioning",
    description: "Positioning architecture, messaging hierarchy, voice by channel, visual identity, AI governance, and brand audit. The identity system.",
    count: "6 Articles \u00b7 Identity System",
    color: "#9a7000",
    articles: [
      { slug: "positioning", number: "I", title: "Positioning Architecture", subtitle: "Category, differentiation, value proposition framework." },
      { slug: "messaging-hierarchy", number: "II", title: "The Messaging Hierarchy", subtitle: "Master narrative, pillars, proof points, taglines." },
      { slug: "voice-by-channel", number: "III", title: "Brand Voice by Channel", subtitle: "How voice adapts across platforms and contexts." },
      { slug: "visual-identity-system", number: "IV", title: "The Visual Identity System", subtitle: "Logo, color, typography, photography, illustration." },
      { slug: "ai-governance", number: "V", title: "Brand Governance in AI Era", subtitle: "Guardrails for AI-generated brand content." },
      { slug: "brand-audit", number: "VI", title: "The Brand Audit Cycle", subtitle: "Quarterly review framework and scoring." },
    ],
  },
  {
    slug: "influencer-creator",
    number: "08",
    title: "Influencer & Creator Economy",
    description: "Discovery, vetting, outreach, creator briefs, approval workflows, performance measurement, and network building.",
    count: "7 Articles \u00b7 Creator Economy",
    color: "#6a3fa0",
    articles: [
      { slug: "research-discovery", number: "I", title: "Research & Discovery", subtitle: "Finding the right creators for your brand." },
      { slug: "vetting", number: "II", title: "Vetting & Alignment", subtitle: "Audience quality, brand safety, performance history." },
      { slug: "outreach", number: "III", title: "Outreach & Negotiation", subtitle: "Cold outreach, rate negotiation, contract templates." },
      { slug: "creator-brief", number: "IV", title: "The Creator Brief System", subtitle: "Standardized briefs that produce on-brand content." },
      { slug: "approval-workflows", number: "V", title: "Content Approval Workflows", subtitle: "Review cycles, revision limits, approval gates." },
      { slug: "performance", number: "VI", title: "Influencer Performance", subtitle: "Measurement framework, ROI calculation, benchmarks." },
      { slug: "creator-network", number: "VII", title: "Building the Creator Network", subtitle: "Long-term relationships, ambassador tiers, network effects." },
    ],
  },
  {
    slug: "sales-revenue",
    number: "09",
    title: "Sales & Revenue Bridge",
    description: "Lead scoring, sales enablement, ABM playbook, pipeline velocity, sales-marketing loop, and revenue attribution.",
    count: "6 Articles \u00b7 Revenue Bridge",
    color: "#8a1a2a",
    articles: [
      { slug: "lead-scoring", number: "I", title: "Lead Scoring Architecture", subtitle: "Behavioral + firmographic scoring models." },
      { slug: "sales-enablement-content", number: "II", title: "Sales Enablement Content", subtitle: "Battle cards, one-pagers, ROI calculators." },
      { slug: "abm-playbook", number: "III", title: "The ABM Playbook", subtitle: "Account-based marketing at scale." },
      { slug: "pipeline-velocity", number: "IV", title: "Pipeline Velocity", subtitle: "Accelerating deals through the funnel." },
      { slug: "feedback-loop", number: "V", title: "Sales-Marketing Loop", subtitle: "Closed-loop reporting, feedback mechanisms." },
      { slug: "revenue-attribution", number: "VI", title: "Revenue Attribution", subtitle: "Multi-touch attribution models." },
    ],
  },
  {
    slug: "platform-playbooks",
    number: "10",
    title: "Platform Playbooks",
    description: "Deep-dive playbooks for YouTube, LinkedIn, Instagram, Facebook, X, Pinterest, TikTok, Reddit, long-form, and Wikipedia.",
    count: "10 Articles \u00b7 Platform Deep Dives",
    color: "#1a5fa0",
    articles: [
      { slug: "youtube", number: "I", title: "YouTube Playbook", subtitle: "Channel strategy, SEO, thumbnails, shorts, monetization." },
      { slug: "linkedin", number: "II", title: "LinkedIn Playbook", subtitle: "Personal brand, company page, thought leadership, ads." },
      { slug: "instagram", number: "III", title: "Instagram Playbook", subtitle: "Feed, Stories, Reels, DMs, shopping, creator collabs." },
      { slug: "facebook", number: "IV", title: "Facebook Playbook", subtitle: "Groups, Marketplace, Ads Manager, Messenger." },
      { slug: "x-twitter", number: "V", title: "X (Twitter) Playbook", subtitle: "Threads, Spaces, engagement, growth tactics." },
      { slug: "pinterest", number: "VI", title: "Pinterest Playbook", subtitle: "Visual search, pins, boards, shopping." },
      { slug: "tiktok", number: "VII", title: "TikTok Playbook", subtitle: "Algorithm, trends, duets, creator fund." },
      { slug: "reddit", number: "VIII", title: "Reddit Playbook", subtitle: "Subreddit strategy, AMAs, community rules." },
      { slug: "long-form", number: "IX", title: "Long-Form Publishing", subtitle: "Substack, Medium, Ghost, owned blogs." },
      { slug: "wikipedia-ai", number: "X", title: "Wikipedia & AI Citation", subtitle: "Notability, reliable sources, AI knowledge graphs." },
    ],
  },
  {
    slug: "pr-earned-media",
    number: "11",
    title: "PR & Earned Media",
    description: "Earned media as channel, PR infrastructure, media relations, podcast guesting, speaking, and measurement. The credibility layer.",
    count: "6 Articles \u00b7 Credibility Layer",
    color: "#2a4a6a",
    articles: [
      { slug: "earned-media", number: "I", title: "Earned Media as Channel", subtitle: "Why earned media is the most trusted channel." },
      { slug: "pr-infrastructure", number: "II", title: "The PR Infrastructure", subtitle: "Media lists, press kits, newsroom, wire services." },
      { slug: "media-relations", number: "III", title: "Media & Journalist Relations", subtitle: "Pitch strategy, exclusives, embargo management." },
      { slug: "podcast-guesting", number: "IV", title: "Podcast Guesting Playbook", subtitle: "Finding shows, pitching, interview prep, repurposing." },
      { slug: "speaking-events", number: "V", title: "Speaking & Events", subtitle: "CFP strategy, talk design, event marketing." },
      { slug: "measurement", number: "VI", title: "Earned Media Measurement", subtitle: "Share of voice, media value, sentiment analysis." },
    ],
  },
  {
    slug: "product-marketing",
    number: "12",
    title: "Product Marketing System",
    description: "Product positioning, launch playbook, competitive intel, PLG content, demo & sales content, customer success, and PMM metrics.",
    count: "7 Articles \u00b7 Product Marketing",
    color: "#b05a00",
    articles: [
      { slug: "product-positioning", number: "I", title: "Product Positioning Framework", subtitle: "Category design, competitive positioning, value props." },
      { slug: "launch-playbook", number: "II", title: "The Launch Playbook", subtitle: "Pre-launch, launch day, post-launch sequences." },
      { slug: "competitive-intel", number: "III", title: "Competitive Intelligence OS", subtitle: "Win/loss analysis, feature comparison, battlecards." },
      { slug: "plg-content", number: "IV", title: "Product-Led Growth Content", subtitle: "In-app education, activation content, expansion plays." },
      { slug: "demo-sales-content", number: "V", title: "Demo & Sales Content", subtitle: "Demo scripts, sales decks, proposal templates." },
      { slug: "customer-success", number: "VI", title: "Customer Success Content", subtitle: "Onboarding, health scoring, expansion, renewal." },
      { slug: "pmm-metrics", number: "VII", title: "Product Marketing Metrics", subtitle: "Adoption, activation, retention, expansion metrics." },
    ],
  },
  {
    slug: "data-privacy",
    number: "13",
    title: "Data, Privacy & First-Party Infrastructure",
    description: "First-party data strategy, consent & privacy, CDP architecture, zero-party data, and data governance.",
    count: "5 Articles \u00b7 Data Infrastructure",
    color: "#2a3a9a",
    articles: [
      { slug: "first-party-data-strategy", number: "I", title: "First-Party Data Strategy", subtitle: "Building the data asset in a cookieless world." },
      { slug: "consent-privacy", number: "II", title: "Consent & Privacy Infrastructure", subtitle: "GDPR, CCPA, consent management, preference centers." },
      { slug: "cdp-architecture", number: "III", title: "The CDP Architecture", subtitle: "Customer data platform design and integration." },
      { slug: "zero-party-data", number: "IV", title: "Zero-Party Data", subtitle: "Collecting declared preferences and intentions." },
      { slug: "data-governance", number: "V", title: "Data Governance", subtitle: "Quality, lineage, access control, retention policies." },
    ],
  },
  {
    slug: "prompt-library-os",
    number: "14",
    title: "The Prompt Library OS",
    description: "Foundations, building, all 37 column prompts, seven library categories, Notion integration, prompt engineering principles, and the complete implementation guide.",
    count: "35 Articles \u00b7 The Complete System",
    color: "#1db954",
    articles: [
      { slug: "what-is-prompt-library", number: "01", title: "What Is a Prompt Library", subtitle: "The concept, the structure, the why." },
      { slug: "the-architecture", number: "02", title: "The Architecture", subtitle: "How databases, views, and prompts connect." },
      { slug: "column-prompts", number: "03", title: "Column Prompts Explained", subtitle: "The atomic unit of the system." },
      { slug: "knowledge-base", number: "04", title: "The Knowledge Base", subtitle: "The constitutional root document." },
      { slug: "context-brief", number: "05", title: "The Context Brief", subtitle: "Per-piece intelligence packet." },
      { slug: "workspace-setup", number: "06", title: "Setting Up the Workspace", subtitle: "Notion workspace configuration." },
      { slug: "writing-prompts", number: "07", title: "Writing Column Prompts", subtitle: "The craft of prompt authoring." },
      { slug: "evergreen-framework", number: "08", title: "The Evergreen Framework", subtitle: "Prompts that don\u2019t expire." },
      { slug: "questionnaire-design", number: "09", title: "Questionnaire Design", subtitle: "Intake forms that feed the system." },
      { slug: "testing-iteration", number: "10", title: "Testing & Iteration", subtitle: "QA, benchmarking, refinement cycles." },
      { slug: "identity-prompts", number: "11", title: "Identity Prompts (01\u201303)", subtitle: "Company Name, Tagline, Mission Statement." },
      { slug: "structure-prompts", number: "12", title: "Structure Prompts (04\u201306)", subtitle: "Value Props, Target Audience, Brand Voice." },
      { slug: "content-prompts", number: "13", title: "Content Prompts (07\u201314)", subtitle: "Headlines, Hooks, Body Copy, CTAs, and more." },
      { slug: "marketing-prompts", number: "14", title: "Marketing Prompts (15\u201321)", subtitle: "Email, Social, Ads, Landing Pages." },
      { slug: "narrative-prompts", number: "15", title: "Narrative Prompts (22\u201331)", subtitle: "Case Studies, Testimonials, Stories." },
      { slug: "meta-prompts", number: "16", title: "Meta Prompts (32\u201337)", subtitle: "Prompt improvers, analyzers, generators." },
      { slug: "content-marketing", number: "17", title: "Content Marketing", subtitle: "Blog, article, and long-form prompt libraries." },
      { slug: "email-marketing", number: "18", title: "Email Marketing", subtitle: "Subject lines, sequences, newsletters." },
      { slug: "social-media", number: "19", title: "Social Media Strategy", subtitle: "Per-platform prompt collections." },
      { slug: "tweets-library", number: "20", title: "Tweets / X Library", subtitle: "Thread starters, replies, engagement hooks." },
      { slug: "mobile-marketing", number: "21", title: "Mobile Marketing", subtitle: "Push notifications, SMS, in-app messaging." },
      { slug: "seo-search", number: "22", title: "SEO & Search", subtitle: "Meta descriptions, title tags, alt text." },
      { slug: "brand-voice", number: "23", title: "Brand Voice", subtitle: "Voice calibration and consistency prompts." },
      { slug: "custom-ai-autofill", number: "24", title: "Custom AI Auto-Fill", subtitle: "Building custom Notion AI properties." },
      { slug: "ai-autofill", number: "25", title: "AI Auto-Fill", subtitle: "Using Notion\u2019s built-in AI fill." },
      { slug: "auto-update", number: "26", title: "Auto-Update On Page Edits", subtitle: "Triggering re-generation on content changes." },
      { slug: "database-properties", number: "27", title: "Database Properties & Views", subtitle: "Schema design for prompt databases." },
      { slug: "context-engineering", number: "28", title: "Context in Prompt Engineering", subtitle: "Why context is everything." },
      { slug: "eight-dimensions", number: "29", title: "The 8 Context Dimensions", subtitle: "The complete context framework." },
      { slug: "instruction-patterns", number: "30", title: "Instruction Design Patterns", subtitle: "Templates for reliable instructions." },
      { slug: "output-formatting", number: "31", title: "Output Formatting Standards", subtitle: "Controlling AI output structure." },
      { slug: "anti-patterns", number: "32", title: "Prompt Anti-Patterns", subtitle: "Common mistakes and how to avoid them." },
      { slug: "mission-vision", number: "33", title: "Mission, Vision & Architecture", subtitle: "The operating system\u2019s north star." },
      { slug: "repository-system", number: "34", title: "The Repository System", subtitle: "How prompts are stored, versioned, shared." },
      { slug: "implementation-guide", number: "35", title: "Implementation Guide", subtitle: "Step-by-step deployment checklist." },
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

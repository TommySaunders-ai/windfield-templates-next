import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function SearchPromptsContent() {
  return (<>
    <SectionDivider label="SEO Content Prompts (6)" />
    <SpecTable headers={["Prompt", "Content Type", "Target"]} rows={[
      ["S1", "Property Listing Page (SEO optimized)", "medical office for sale Kansas City"],
      ["S2", "5 Medical Category Landing Pages", "med spa, urgent care, dental, PT, chiro space KC"],
      ["S3", "5 Blog Articles (informational)", "how to buy medical office, buildout costs, SBA 504"],
      ["S4", "AEO Featured Snippet Content (8 questions)", "Google position 0 targets"],
      ["S5", "GEO Definitive Guide (5,000+ words)", "AI citation across ChatGPT, Claude, Gemini, Perplexity"],
      ["S6", "Google Ads — 7 Campaigns", "$2K/mo, 30-50 clicks, 2-4 tour requests"],
    ]} />
  </>);
}

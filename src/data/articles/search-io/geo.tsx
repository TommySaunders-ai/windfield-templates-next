import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function GEOContent() {
  return (<>
    <SectionDivider label="GEO — 4 AI Platforms" />
    <SpecTable headers={["Platform", "Current Mentions", "Target Position", "Strategy"]} rows={[
      ["ChatGPT", "0 mentions", "Top 3 recommendation", "Clean HTML property page with specific data points"],
      ["Claude", "0 mentions", "Top 3 recommendation", "Well-sourced, factual content with specific data"],
      ["Gemini", "0 mentions", "Top 5 recommendation", "Google ecosystem — Business Profile, Maps, Search Console"],
      ["Perplexity", "0 mentions", "Cited source", "Definitive KC Medical Office Market Guide"],
    ]} />
    <SectionDivider label="GEO Content Strategy" />
    <div className="prose">
      <ol>
        <li><strong>Create the definitive resource</strong> — 5,000+ word KC Medical Office Real Estate guide</li>
        <li><strong>Structured data everywhere</strong> — FAQPage, HowTo, LocalBusiness, RealEstateListing schema</li>
        <li><strong>Be the most citable source</strong> — include specific numbers, dates, SF, prices, demographics</li>
        <li><strong>Update quarterly</strong> — AI systems prefer fresh content</li>
        <li><strong>Cross-link internally</strong> — dense link structure for AI crawlers</li>
        <li><strong>Earn authoritative backlinks</strong> — KC Business Journal, CCIM, SIOR, CORFAC, SBA.gov</li>
      </ol>
    </div>
  </>);
}

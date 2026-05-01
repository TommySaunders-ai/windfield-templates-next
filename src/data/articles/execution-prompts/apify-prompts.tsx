import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { FlowChart } from "@/components/content/flow-chart";
export function ApifyPromptsContent() {
  return (<>
    <SectionDivider label="16 Ready-to-Run Apify Prompts" />
    <FlowChart nodes={[
      "Pre-Flight Check (verify MCP connection)",
      "Phase 1: Google Maps Discovery (11 scrapes)",
      "Phase 2: LinkedIn Decision-Makers (4 scrapes)",
      "Phase 3: Website Enrichment Crawl (top 20)",
      "Phase 4: Master List Consolidation",
    ]} />
    <SectionDivider label="Phase 1: Google Maps Scrapes" />
    <SpecTable headers={["Prompt", "Category", "Priority", "Est. Results"]} rows={[
      ["1A", "Chiropractic Practices", "High", "30-50"],
      ["1B", "Optometry & Eye Care", "High", "20-40"],
      ["1C", "Med Spa (HIGHEST)", "HIGHEST", "25-60"],
      ["1D", "Physical Therapy", "Medium-High", "30-50"],
      ["1E", "Urgent Care (HIGHEST)", "HIGHEST", "15-30"],
      ["1F", "Dental & Orthodontic", "High", "40-70"],
      ["1G", "Behavioral Health (ZERO current)", "HIGH", "20-40"],
      ["1H", "Specialty Medical (ZERO current)", "HIGH", "30-50"],
      ["1I", "Labs/Imaging/Pharmacy", "Medium", "15-30"],
      ["1J", "Staffing/Home Health", "Medium", "15-25"],
      ["1K", "Comprehensive Catch-All", "Medium", "50-100"],
    ]} />
    <SectionDivider label="Phase 2: LinkedIn Searches" />
    <SpecTable headers={["Prompt", "Target", "Max Items"]} rows={[
      ["2A", "Medical Practice Owners — KC Metro", "100"],
      ["2B", "Med Spa & Aesthetic Operators", "60"],
      ["2C", "Urgent Care & Franchise Development", "50"],
      ["2D", "Healthcare Real Estate Investors", "50"],
    ]} />
  </>);
}

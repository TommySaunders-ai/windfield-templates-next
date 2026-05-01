import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { FlowChart } from "@/components/content/flow-chart";
export function ProspectingPromptsContent() {
  return (<>
    <SectionDivider label="Prospecting Document Prompts (3)" />
    <SpecTable headers={["Prompt", "Output", "Description"]} rows={[
      ["P1", "Top 25 Prospect Dossiers", "Individual dossier per prospect: fit analysis, growth signals, outreach approach"],
      ["P2", "10 Category Outreach CSVs", "CRM-ready contact lists by medical category, sorted by score"],
      ["P3", "8-Week Execution Checklist", "Sequential checklist tying all documents together"],
    ]} />
    <SectionDivider label="8-Week Execution Timeline" />
    <FlowChart nodes={[
      "Week 1: Discovery — All Apify scrapes",
      "Week 2: Enrichment — All Clay configs + merge",
      "Week 3: Content & SEO — Property pages + blog + ads",
      "Week 4: LinkedIn & Outreach — Campaigns + sequences",
      "Weeks 5-8: Execute, optimize, iterate",
    ]} />
  </>);
}

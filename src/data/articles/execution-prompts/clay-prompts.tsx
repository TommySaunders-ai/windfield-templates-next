import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { FlowChart } from "@/components/content/flow-chart";
export function ClayPromptsContent() {
  return (<>
    <SectionDivider label="10 Ready-to-Run Clay Prompts" />
    <FlowChart nodes={[
      "Pre-Flight: Check credits (need ~558)",
      "Phase 1: Existing Contact Enrichment (C1-C2)",
      "Phase 2: Company Intelligence (C3-C5)",
      "Phase 3: Franchise & Investor Contacts (C6-C7)",
      "Phase 4: Email Verification (C8)",
      "Phase 5: Top 10 Intelligence (C9) + Merge (C10)",
    ]} />
    <SpecTable headers={["Prompt", "Target", "Tool", "Est. Credits"]} rows={[
      ["C1", "Enrich existing CRM contacts (3 companies)", "find-and-enrich-company", "~6"],
      ["C2", "Enrich independent contacts (2 companies)", "find-and-enrich-company", "~4"],
      ["C3", "Med Spa companies (HIGHEST)", "find-and-enrich-company", "~50"],
      ["C4", "Urgent Care companies", "find-and-enrich-company", "~30"],
      ["C5", "All other medical categories (batch)", "find-and-enrich-company", "~120"],
      ["C6", "14 national franchise brands", "find-and-enrich-contacts", "~28"],
      ["C7", "7 healthcare REITs", "find-and-enrich-contacts", "~14"],
      ["C8", "Email verification batch", "add-contact-data-points", "~100"],
      ["C9", "Top 10 account intelligence", "ask-question-about-accounts", "~10"],
      ["C10", "Merge into master list", "—", "—"],
    ]} />
  </>);
}

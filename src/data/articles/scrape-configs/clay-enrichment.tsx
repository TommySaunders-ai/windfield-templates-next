import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { FlowChart } from "@/components/content/flow-chart";

export function ClayEnrichmentContent() {
  return (
    <>
      <SectionDivider label="Enrichment Pipeline" />
      <FlowChart nodes={[
        "Apify Google Maps Scrape (445-780 businesses)",
        "Extract domains/company names",
        "Clay find-and-enrich-company (company intel)",
        "Filter by revenue, headcount, growth",
        "Clay find-and-enrich-contacts (decision makers)",
        "Clay add-contact-data-points (email verification)",
        "Scored + segmented → Ready for Outreach",
      ]} />

      <SectionDivider label="10 Enrichment Configurations" />
      <SpecTable headers={["#", "Enrichment", "Tool", "Est. Credits"]} rows={[
        ["1-4", "Company Intel (est. 200 companies)", "find-and-enrich-company", "~200"],
        ["5", "Decision Makers — Local Practices (100 co.)", "find-and-enrich-contacts", "~200"],
        ["6", "Decision Makers — Franchises (14 co.)", "find-and-enrich-contacts", "~28"],
        ["7", "Decision Makers — REITs (7 co.)", "find-and-enrich-contacts", "~14"],
        ["8", "Email Verification", "add-contact-data-points", "~100"],
        ["9", "Account Intelligence — Top 10", "ask-question-about-accounts", "~10"],
        ["10", "Existing CRM Contact Enrichment", "find-and-enrich-company", "~6"],
      ]} />
      <div className="prose">
        <p><strong>Total estimated credits: ~558</strong></p>
      </div>
    </>
  );
}

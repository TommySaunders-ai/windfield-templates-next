import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { FlowChart } from "@/components/content/flow-chart";

export function ExecutionOrderContent() {
  return (
    <>
      <SectionDivider label="8-Week Campaign Execution" />
      <FlowChart nodes={[
        "Week 1: Discovery — Run all Apify scrapes",
        "Week 2: Enrichment — Run all Clay configs",
        "Week 3: Content & SEO — Build property pages",
        "Week 4: LinkedIn & Outreach — Launch campaigns",
        "Weeks 5-8: Execute & Optimize",
      ]} />

      <SectionDivider label="Pipeline Stages" />
      <SpecTable headers={["Stage", "Color", "Action"]} rows={[
        ["Identified", "Gray", "Prospect found via scrape/search. No outreach yet."],
        ["Contacted", "Blue", "First outreach sent. Awaiting response."],
        ["Responded", "Yellow", "Prospect replied. Conversation active."],
        ["Tour Scheduled", "Orange", "Property tour booked."],
        ["Proposal Sent", "Purple", "LOI or purchase proposal delivered."],
        ["Under Contract", "Green", "Deal signed, in due diligence."],
        ["Closed", "Green (dark)", "Transaction complete."],
        ["Lost", "Red", "Prospect passed. Log reason."],
      ]} />

      <SectionDivider label="Qualification Questions (First Call)" />
      <div className="prose">
        <ol>
          <li>What type of medical practice do you operate?</li>
          <li>How many providers/staff are in your group?</li>
          <li>Are you currently leasing or do you own your facility?</li>
          <li>What size space do you need?</li>
          <li>What is your timeline for a move or expansion?</li>
          <li>Have you considered owning your practice real estate?</li>
          <li>What is your monthly rent/occupancy cost currently?</li>
          <li>Do you have any specialized buildout requirements?</li>
          <li>How important is patient visibility/signage?</li>
          <li>Are you familiar with the Green Hills Road corridor?</li>
        </ol>
      </div>
    </>
  );
}

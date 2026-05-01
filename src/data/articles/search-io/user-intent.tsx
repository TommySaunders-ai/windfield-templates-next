import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function UserIntentContent() {
  return (<>
    <SectionDivider label="User Search Intent Mapping" />
    <SpecTable headers={["Query", "Intent", "Stage", "Opportunity"]} rows={[
      ["medical office space for sale near me", "Transactional", "Conversion", "95 — geo-optimized property page"],
      ["how much does medical office space cost", "Informational", "Problem Aware", "90 — pricing guide blog"],
      ["best location for medical practice", "Informational", "Solution Aware", "85 — location selection guide"],
      ["medical office ownership vs leasing", "Informational", "Solution Aware", "90 — calculator + blog"],
      ["KC Northland demographics", "Informational", "Unaware", "80 — HTML demographics data"],
      ["medical office buildout timeline", "Informational", "Solution Aware", "85 — timeline guide"],
      ["SBA 504 loan for doctors", "Informational", "Solution Aware", "80 — loan guide"],
      ["Platte County commercial property", "Commercial", "Product Aware", "75 — add county targeting"],
      ["urgent care franchise locations available", "Commercial", "Product Aware", "85 — franchise landing page"],
      ["medical office building investment returns", "Commercial", "Solution Aware", "80 — investment article"],
    ]} />
    <SectionDivider label="Implementation Status" />
    <SpecTable headers={["Category", "Keywords", "Content Created", "Status"]} rows={[
      ["Branded", "8", "0", "TO BUILD"],
      ["Industry", "10", "0", "TO BUILD"],
      ["Informational", "10", "0", "TO BUILD"],
      ["Navigational", "10", "0", "TO BUILD"],
      ["Commercial", "10", "0", "TO BUILD"],
      ["Transactional", "10", "0", "TO BUILD"],
      ["AEO Questions", "8", "0", "TO BUILD"],
      ["GEO Platforms", "4", "0", "TO BUILD"],
      ["TOTAL", "70", "0", "Phase 1 Ready"],
    ]} />
  </>);
}

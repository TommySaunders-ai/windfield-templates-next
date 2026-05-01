import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function FranchiseDevSequenceContent() {
  return (<>
    <SectionDivider label="Franchise Development — 5-Touch / 21 Days" />
    <SpecTable headers={["Touch", "Channel", "Day", "Subject/Approach"]} rows={[
      ["1", "Email", "Day 0", "KC Northland Medical Office — Site Selection Data"],
      ["2", "LinkedIn", "Day 5", "KC Northland medical office opportunity + site selection package"],
      ["3", "Email", "Day 10", "RE: Site selection summary — demographics, traffic, availability"],
      ["4", "LinkedIn", "Day 14", "Urgency — property getting attention, virtual walkthrough offer"],
      ["5", "Email", "Day 21", "Status update — property remains available, filing for future"],
    ]} />
  </>);
}

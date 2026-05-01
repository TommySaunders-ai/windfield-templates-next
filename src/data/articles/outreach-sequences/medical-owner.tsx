import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function MedicalOwnerSequenceContent() {
  return (<>
    <SectionDivider label="Medical Practice Owner — 5-Touch / 14 Days" />
    <SpecTable headers={["Touch", "Channel", "Day", "Subject/Approach"]} rows={[
      ["1", "Email", "Day 0", "Class-A Medical Office — Green Hills Rd, KC Northland"],
      ["2", "LinkedIn Connection", "Day 3", "2020 Class-A medical office in KC Northland at M-152"],
      ["3", "Email Follow-Up", "Day 5", "RE: Class-A Medical Office — floor plan, demographics, availability"],
      ["4", "LinkedIn Message", "Day 7", "Growth signal reference + property brief offer"],
      ["5", "Final Email", "Day 14", "Green Hills Medical Office — Last Note + keep on list"],
    ]} />
    <SectionDivider label="Key Messaging" />
    <div className="prose">
      <ul>
        <li><strong>Touch 1:</strong> Practice-specific fit + 5 key details (10,500 SF, single-story, ADA, parking, M-152)</li>
        <li><strong>Touch 3:</strong> Floor plan flexibility (3-4 suites or single group), $107K HHI demographics, no comparable Class-A available</li>
        <li><strong>Touch 5:</strong> Soft close — increased interest from medical groups, offer to keep on tenant list</li>
      </ul>
    </div>
  </>);
}

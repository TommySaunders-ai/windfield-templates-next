import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function HealthcareInvestorSequenceContent() {
  return (<>
    <SectionDivider label="Healthcare RE Investor — 4-Touch / 14 Days" />
    <SpecTable headers={["Touch", "Channel", "Day", "Subject/Approach"]} rows={[
      ["1", "Email", "Day 0", "Medical Office Investment — KC Northland, Class-A (2020)"],
      ["2", "LinkedIn", "Day 3", "Medical office investment opportunity in KC Northland"],
      ["3", "Email", "Day 7", "RE: Additional data — vacancy below metro avg, no competing construction"],
      ["4", "Email", "Day 14", "Final note — keeping on healthcare investor distribution list"],
    ]} />
    <SectionDivider label="Investment Highlights" />
    <div className="prose">
      <ul>
        <li>2020 construction, single-story, 1.29 AC, B3-3 zoning</li>
        <li>M-152/I-29 visibility, Tiffany Hills corridor</li>
        <li>Adjacent medical cluster establishing healthcare destination</li>
        <li>$107K avg HHI (2mi), growing suburban demographics</li>
        <li>Owner-occupant medical buyer pool creates strong exit optionality</li>
      </ul>
    </div>
  </>);
}

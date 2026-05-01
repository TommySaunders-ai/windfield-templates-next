import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function OwnerOccupantListContent() {
  return (
    <>
      <SectionDivider label="Medical Owner-Occupant Buyers" />
      <div className="prose">
        <p><strong>Target Count:</strong> 15-25 targets</p>
        <p>Multi-physician medical groups (3-10+ providers) currently leasing space in KC metro that would benefit from owning a Class-A facility.</p>
      </div>
      <SectionDivider label="Search Parameters" />
      <SpecTable headers={["Parameter", "Value"]} rows={[
        ["Job Titles", "Managing Partner, Practice Owner, CEO, CMO, CFO, Office Administrator"],
        ["Seniority", "Owner, Partner, CXO"],
        ["Company Size", "10-200 employees"],
        ["Location", "Kansas City Metro (50-mile radius)"],
        ["Revenue", "$2M - $50M"],
      ]} />
      <SectionDivider label="Qualification Criteria" />
      <div className="prose">
        <ul>
          <li>Currently leasing (not already owner-occupant)</li>
          <li>3+ physicians/providers in the group</li>
          <li>Revenue supports purchase at market price</li>
          <li>Practice type fits B3-3 zoning and 10,500 SF floorplate</li>
        </ul>
      </div>
      <PullQuote>
        Most medical groups pay $20-28/SF NNN to a landlord and never build equity. At today&apos;s interest rates, monthly ownership cost could be comparable to lease payments while building practice equity.
      </PullQuote>
    </>
  );
}

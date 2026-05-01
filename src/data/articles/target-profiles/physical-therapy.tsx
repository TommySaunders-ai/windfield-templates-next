import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function PhysicalTherapyProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Physical Therapy / Sports Medicine"],
        ["Space Requirement", "2,500 - 4,000 SF"],
        ["Rent Budget PSF", "$18 - $24 NNN"],
        ["Annual Revenue", "$800K - $3M"],
        ["Industry", "Healthcare — Rehabilitation"],
        ["NAICS Codes", "621340"],
        ["Company Size", "5-30 employees"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li>Open floor plan potential for PT gym equipment, treatment tables, exercise areas</li>
          <li>Single-story with accessible entrance — critical for PT patients in recovery</li>
          <li>Modern construction — sufficient electrical for therapy equipment (ultrasound, e-stim, laser)</li>
          <li>Existing PT competition is fragmented (3 small independents) — consolidation opportunity</li>
          <li>Growing sports/active population in KC Northland suburbs</li>
        </ul>
      </div>
      <SectionDivider label="Known Prospects" />
      <SpecTable headers={["Business", "Location", "Status"]} rows={[
        ["Modern Physical Therapy", "335 NW Barry Rd, 1.5 mi", "Scraped"],
        ["PT Solutions Platte Woods", "8644 N Boardwalk Ave, 0.3 mi", "Scraped"],
        ["Select PT Metro North", "9411 N Oak Trfy, 1.8 mi", "Scraped"],
        ["ATI Physical Therapy", "Multiple KC locations", "CRM contact"],
        ["KC Rehab PT", "Multiple Locations", "Scraped"],
        ["Orthopedic Health KC", "KC Metro", "CRM contact"]
      ]} />
    </>
  );
}

import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function LeadMagnetsContent() {
  return (<>
    <SectionDivider label="Lead Magnet Strategy" />
    <SpecTable headers={["Stage", "Lead Magnet", "Form Fields", "Lead Score"]} rows={[
      ["Unaware", "LinkedIn article on medical office trends", "None (soft CTA)", "10"],
      ["Problem Aware", "KC Northland Medical Office Market Report (PDF)", "Name, Email, Practice Type, Office Size", "40"],
      ["Solution Aware", "Ownership vs. Leasing Calculator", "Add: Current Rent, Revenue Range, Provider Count", "60"],
      ["Product Aware", "8630 Property Brief + Medical Floor Plans", "Add: Phone, Practice Name, Move Date, Buyer/Tenant", "80"],
      ["Conversion", "Private Tour + Buildout Consultation", "Full qualification form", "95"],
    ]} />
    <SectionDivider label="Design Requirements" />
    <div className="prose">
      <ul>
        <li>IO Green (#1db954) accent, dark-first design (bg #09090b)</li>
        <li>Inter font family, Windfield Real Estate logo, CORFAC badge on property materials</li>
        <li>PDFs: Letter size, max 10 pages, under 5MB</li>
        <li>Professional design with charts and data visualizations</li>
      </ul>
    </div>
  </>);
}

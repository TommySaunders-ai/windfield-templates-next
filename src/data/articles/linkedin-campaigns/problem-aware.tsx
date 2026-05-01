import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function ProblemAwareCampaignContent() {
  return (<>
    <SectionDivider label="Stage 2: Problem Aware — Deep-Dive" />
    <SpecTable headers={["Field", "Value"]} rows={[
      ["Campaign Name", "Medical Office Space Impact — Problem Deep-Dive"],
      ["Objective", "Video Views + Lead Magnet Downloads"],
      ["Audience", "Stage 1 graduates + CRM matched audience"],
      ["Budget", "20% of total ($1,000/month)"],
      ["Video Length", "60-90 seconds"],
      ["VCR Goal", ">40%"],
    ]} />
    <div className="prose">
      <p><strong>Topic:</strong> The Real Cost of a Bad Medical Office — quantify revenue loss from poor visibility, parking friction, outdated infrastructure, and lease payments.</p>
      <p><strong>Lead Magnet:</strong> KC Northland Medical Office Market Report — 8-page PDF with demographics, vacancy rates, rent comps, and demand gaps.</p>
      <p><strong>Form Fields:</strong> First Name, Last Name, Email, Practice Type (dropdown), Current Office Size (dropdown)</p>
    </div>
  </>);
}

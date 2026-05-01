import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function SolutionAwareCampaignContent() {
  return (<>
    <SectionDivider label="Stage 3: Solution Aware — Ownership Education" />
    <SpecTable headers={["Field", "Value"]} rows={[
      ["Campaign Name", "Medical Office Ownership — Solution Education"],
      ["Objective", "Video Views + Calculator Downloads"],
      ["Audience", "Stage 2 graduates + lead magnet downloaders"],
      ["Budget", "15% of total ($750/month)"],
      ["Video Length", "90-120 seconds"],
      ["VCR Goal", ">45%"],
    ]} />
    <div className="prose">
      <p><strong>Topic:</strong> Why Smart Medical Practices Own Their Building — the financial case for owner-occupancy (equity building, tax benefits, rent stability, practice valuation increase).</p>
      <p><strong>Lead Magnet:</strong> Medical Office Ownership vs. Leasing Calculator — interactive PDF showing 10-year financial comparison.</p>
      <p><strong>Key Message:</strong> Medical practices that own their building build $500K-2M in real estate equity over 10 years while paying similar monthly costs to leasing.</p>
    </div>
  </>);
}

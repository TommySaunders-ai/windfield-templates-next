import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function LabsImagingProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Medical Lab / Diagnostic Imaging Center"],
        ["Space Requirement", "3,000 - 5,000 SF"],
        ["Rent Budget PSF", "$20 - $26 NNN"],
        ["Annual Revenue", "$2M - $10M"],
        ["Industry", "Healthcare — Diagnostics"],
        ["NAICS Codes", "621511, 621512"],
        ["Company Size", "10-50 employees"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li>Modern construction (2020) — electrical/HVAC capacity for imaging equipment</li>
          <li>Single-story — no vibration concerns for MRI/CT (ground-floor)</li>
          <li>High visibility for patient-facing lab/draw station (Quest, Labcorp model)</li>
          <li>Adjacent to growing medical cluster — referral pipeline from nearby practices</li>
          <li>I-29 access for courier/logistics operations</li>
        </ul>
      </div>
    </>
  );
}

import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function MedicalStaffingProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Medical Staffing / Home Health"],
        ["Space Requirement", "2,000 - 3,500 SF"],
        ["Rent Budget PSF", "$16 - $22 NNN"],
        ["Annual Revenue", "$2M - $15M"],
        ["Industry", "Healthcare — Staffing & Home Care"],
        ["NAICS Codes", "621610, 561320"],
        ["Company Size", "20-200 employees (admin office)"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li>Administrative office for dispatching nurses/caregivers — no patient-facing infrastructure needed</li>
          <li>Modern office layout already configured for high-traffic operations</li>
          <li>I-29 and M-152 access critical for dispatching staff across KC metro</li>
          <li>Growing industry — aging population driving home health demand</li>
          <li>Multiple private offices for recruiters, scheduling, compliance</li>
        </ul>
      </div>
    </>
  );
}

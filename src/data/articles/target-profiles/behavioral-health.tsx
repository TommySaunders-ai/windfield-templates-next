import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function BehavioralHealthProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Behavioral Health / Counseling"],
        ["Space Requirement", "1,500 - 3,000 SF"],
        ["Rent Budget PSF", "$18 - $24 NNN"],
        ["Annual Revenue", "$300K - $2M"],
        ["Industry", "Healthcare — Mental Health"],
        ["NAICS Codes", "621330, 621420"],
        ["Company Size", "2-20 employees"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li>Private, professional setting — important for patient confidentiality in mental health</li>
          <li>Multiple room configuration possible (individual therapy, group rooms, waiting area)</li>
          <li>Growing demand — national mental health crisis, telehealth driving satellite office model</li>
          <li>KC Northland underserved for outpatient behavioral health</li>
          <li>Insurance reimbursement rates support Class-A rent levels</li>
        </ul>
      </div>
      <PullQuote>Growing demand — national mental health crisis creates unprecedented need for outpatient behavioral health offices. The telehealth satellite model drives practices to establish small in-person locations like this.</PullQuote>
    </>
  );
}

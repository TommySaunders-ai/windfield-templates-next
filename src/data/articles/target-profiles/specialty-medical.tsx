import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function SpecialtyMedicalProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Specialty Medical (Derm, Podiatry, ENT, Allergy)"],
        ["Space Requirement", "2,000 - 3,500 SF"],
        ["Rent Budget PSF", "$22 - $28 NNN"],
        ["Annual Revenue", "$1M - $5M"],
        ["Industry", "Healthcare — Specialty Practice"],
        ["NAICS Codes", "621111, 621399"],
        ["Company Size", "3-20 employees"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li>Modern construction supports specialty procedure rooms</li>
          <li>KC Northland growing but specialist-underserved relative to south JoCo</li>
          <li>Demographics (income, age, family) support specialist demand</li>
          <li>Single-story with parking — patient accessibility</li>
          <li>B3-3 zoning permits all medical specialty uses</li>
        </ul>
      </div>
    </>
  );
}

import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function DentalProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Dental / Orthodontic Practice"],
        ["Space Requirement", "2,500 - 4,000 SF"],
        ["Rent Budget PSF", "$20 - $28 NNN"],
        ["Annual Revenue", "$1M - $5M"],
        ["Industry", "Healthcare — Dental"],
        ["NAICS Codes", "621210"],
        ["Company Size", "5-25 employees"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li>Modern plumbing infrastructure (2020) — reduces dental buildout cost for operatories, sterilization, X-ray</li>
          <li>Single-story access for elderly/pediatric patients</li>
          <li>High visibility for patient acquisition signage</li>
          <li>B3-3 zoning permits dental use</li>
          <li>Demographics support dental demand — families, professionals, high insurance coverage</li>
        </ul>
      </div>
      <SectionDivider label="Known Prospects" />
      <SpecTable headers={["Business", "Location", "Status"]} rows={[
        ["KC North Dentist", "64154 area", "Scraped"],
        ["Staley Dental Arts", "KC Northland", "Scraped"]
      ]} />
    </>
  );
}

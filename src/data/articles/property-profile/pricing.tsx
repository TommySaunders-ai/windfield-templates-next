import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function PricingFinancialsContent() {
  return (
    <>
      <SectionDivider label="Pricing & Financials" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Sale Price", "Call For Pricing"],
          ["Cap Rate", "TBD"],
          ["Price per SF", "TBD"],
          ["NOI", "TBD"],
        ]}
      />

      <SectionDivider label="Single-Tenant Strategy" />
      <SpecTable
        headers={["Scenario", "Tenant Type", "Size", "Expected Rent"]}
        rows={[
          ["Owner-Occupant", "Multi-physician medical group", "10,500 SF", "Purchase at market"],
          ["NNN Lease", "Urgent care chain (NextCare, Total Access, CareNow)", "10,500 SF", "$22-28 PSF NNN"],
          ["NNN Lease", "Dental/ortho group (Heartland, Aspen)", "10,500 SF", "$20-26 PSF NNN"],
        ]}
      />

      <SectionDivider label="Multi-Tenant Strategy" />
      <SpecTable
        headers={["Suite", "Size", "Ideal Use", "Rent Capacity"]}
        rows={[
          ["Suite A", "3,500 SF", "Primary Care / Urgent Care / Orthopedic", "$22-28 PSF NNN"],
          ["Suite B", "2,500 SF", "Dental / Orthodontic Practice", "$20-26 PSF NNN"],
          ["Suite C", "2,500 SF", "Chiropractic / Physical Therapy", "$18-24 PSF NNN"],
          ["Suite D", "2,000 SF", "Med Spa / Optometry / Specialty", "$20-26 PSF NNN"],
        ]}
      />
    </>
  );
}

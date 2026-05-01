import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function PharmacyProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Independent Pharmacy / Compounding"],
        ["Space Requirement", "1,500 - 2,500 SF"],
        ["Rent Budget PSF", "$18 - $24 NNN"],
        ["Annual Revenue", "$1M - $5M"],
        ["Industry", "Healthcare — Pharmacy"],
        ["NAICS Codes", "446110"],
        ["Company Size", "3-15 employees"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li>Adjacent to growing medical cluster — built-in prescription volume</li>
          <li>Compounding pharmacy niche growing (hormone therapy, veterinary, specialty)</li>
          <li>Modern build suitable for clean room / compounding lab</li>
          <li>No major pharmacy competitor on immediate Green Hills corridor</li>
          <li>B3-3 zoning permits pharmacy use</li>
        </ul>
      </div>
      <PullQuote>Adjacent medical cluster = built-in Rx volume. Every chiropractor, PT, and urgent care patient on the corridor is a potential prescription customer.</PullQuote>
    </>
  );
}

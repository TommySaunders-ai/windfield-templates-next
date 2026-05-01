import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function CompetitiveLandscapeContent() {
  return (
    <>
      <SectionDivider label="Comparable Medical Office Properties (Within 5 Miles)" />
      <SpecTable
        headers={["Property", "Type", "Size", "Availability", "Distance", "Advantage", "Weakness"]}
        rows={[
          ["8660 N Green Hills Rd", "Medical Office", "TBD", "Occupied (Northland Eye)", "0.1 mi", "Adjacent cluster synergy", "Not available"],
          ["8560 N Green Hills Rd", "Retail/Medical", "20,944 SF", "Partial lease", "0.1 mi", "Multi-tenant, established", "Retail format, not Class-A"],
          ["Barry Road Medical Corridor", "Mixed Medical", "Various", "Various", "1.5 mi", "Established medical destination", "Older buildings, higher density"],
          ["Zona Rosa Medical", "Mixed Use", "Various", "Some availability", "3.0 mi", "Retail traffic, brand visibility", "Higher rents, retail-oriented"],
          ["NKC Hospital Corridor", "Medical Office", "Various", "Limited", "5.0 mi", "Hospital adjacency, referrals", "Distance from Northland suburbs"],
        ]}
      />

      <SectionDivider label="8630 Competitive Advantages for Medical" />
      <div className="prose">
        <ul>
          <li><strong>Newest construction</strong> — 2020 build vs 1990s-2000s competitors</li>
          <li><strong>Class-A infrastructure</strong> — modern HVAC, electrical capacity for medical equipment</li>
          <li><strong>Single-story ADA</strong> — no elevator, easy wheelchair/walker access</li>
          <li><strong>Parking ratio</strong> — 4.0/1,000 SF exceeds medical minimum (3.5/1,000)</li>
          <li><strong>Visibility</strong> — M-152 interchange drives awareness for patient acquisition</li>
          <li><strong>Adjacent medical cluster</strong> — eye specialists + chiropractic already on Green Hills</li>
          <li><strong>Demographics</strong> — $107K avg HHI supports elective medical spending</li>
        </ul>
      </div>
    </>
  );
}

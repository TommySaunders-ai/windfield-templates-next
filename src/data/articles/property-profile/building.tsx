import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function BuildingCharacteristicsContent() {
  return (
    <>
      <SectionDivider label="Building Characteristics" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Building Size", "10,500 SF"],
          ["Lot Size", "1.29 AC"],
          ["Stories", "1"],
          ["Year Built", "2020"],
          ["Parking", "Surface lot, approx. 4.00/1,000 SF ratio"],
          ["Construction", "Modern Class-A build-out"],
          ["Configuration", "Currently configured for high-traffic real estate and title services"],
        ]}
      />

      <SectionDivider label="Description" />
      <div className="prose">
        <p>
          Built in 2020, this 10,500 SF (+/-) single-story, Class-A office building is situated on a 1.29AC (+/-) lot along Green Hills Road. The property is zoned B3-3 and features high-end interior build-outs currently configured for high-traffic real estate and title services.
        </p>
        <p>
          Located at the intersection of M-152 and Green Hills Road, the site offers significant frontage and visibility within the Tiffany Hills/Coves North commercial corridor. It provides immediate access to I-29, is located 2 miles from NW Barry Road.
        </p>
      </div>

      <SectionDivider label="Highlights" />
      <div className="prose">
        <ul>
          <li>High-visibility on N Green Hills Rd</li>
          <li>Minutes from M-152, I-29, and NW Barry Rd</li>
          <li>Turnkey/Move-in ready with modern interior build-outs</li>
          <li>Private surface lot; approx. 4.00/1,000 SF ratio</li>
          <li>Single-story Class-A construction (2020)</li>
          <li>B3-3 zoning allows office, medical, professional services</li>
          <li>Tiffany Hills/Coves North commercial corridor location</li>
        </ul>
      </div>

      <PullQuote>
        Single-story Class-A construction with 4.0/1,000 SF parking ratio exceeds medical office minimums — no elevator cost, full ADA compliance from day one.
      </PullQuote>
    </>
  );
}

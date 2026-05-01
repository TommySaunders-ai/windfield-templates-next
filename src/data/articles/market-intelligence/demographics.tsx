import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function DemographicsContent() {
  return (
    <>
      <SectionDivider label="Market Area Overview" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Submarket", "KC Northland - Tiffany Hills/Coves North"],
          ["MSA", "Kansas City"],
          ["Primary Trade Area", "3-mile radius from 39.2511, -94.6316"],
          ["Secondary Trade Area", "5-mile radius"],
          ["Major Corridors", "M-152, I-29, NW Barry Road, N Oak Trafficway"],
        ]}
      />

      <SectionDivider label="2-Mile Radius Demographics" />
      <SpecTable
        headers={["Metric", "Value"]}
        rows={[
          ["Average Household Income", "$107,000"],
          ["Average House Value", "$332,000"],
          ["Population", "TBD (to be enriched)"],
          ["Households", "TBD"],
        ]}
      />

      <PullQuote>
        $107K average household income within 2 miles places this trade area in the top quartile for KC metro — a demographic profile that strongly supports medical and elective healthcare spending.
      </PullQuote>

      <SectionDivider label="3-Mile Radius" />
      <SpecTable
        headers={["Metric", "Value"]}
        rows={[
          ["Population", "TBD"],
          ["Median Household Income", "TBD"],
          ["Households", "TBD"],
          ["Growth Rate", "TBD"],
        ]}
      />

      <SectionDivider label="5-Mile Radius" />
      <SpecTable
        headers={["Metric", "Value"]}
        rows={[
          ["Population", "TBD"],
          ["Median Household Income", "TBD"],
          ["Households", "TBD"],
        ]}
      />
    </>
  );
}

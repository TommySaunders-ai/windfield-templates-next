import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function PropertyIdentityContent() {
  return (
    <>
      <SectionDivider label="Property Identity" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Property Name", "8630 N Green Hills Road Office Building"],
          ["Address", "8630 N Green Hills Road"],
          ["City", "Kansas City"],
          ["State", "MO"],
          ["ZIP", "64154"],
          ["County", "Platte"],
          ["Latitude", "39.2511104"],
          ["Longitude", "-94.6316167"],
          ["Cross Streets", "M-152 and Green Hills Road"],
          ["Buildout ID", "1616772"],
          ["Address Slug", "8630-n-green-hills-road"],
          ["Category Slug", "sale_office"],
        ]}
      />

      <SectionDivider label="Classification" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Property Type", "Office"],
          ["Subtype", "Office Building"],
          ["Building Class", "A"],
          ["Availability", "Sale"],
          ["Status", "Active"],
          ["Zoning", "B3-3"],
        ]}
      />

      <SectionDivider label="Location Context" />
      <SpecTable
        headers={["Field", "Value"]}
        rows={[
          ["Submarket", "KC Northland - Tiffany Hills/Coves North"],
          ["MSA", "Kansas City"],
          ["Highway Access", "M-152 (immediate), I-29 (2 min), NW Barry Rd (2 mi)"],
          ["Corridor", "Tiffany Hills/Coves North commercial corridor"],
          ["Adjacent Properties", "Shoppes at Barry Plaza (8560 N Green Hills Rd)"],
          ["Notable Proximity", "Northland Eye Specialists (8660 N Green Hills Rd)"],
        ]}
      />
    </>
  );
}

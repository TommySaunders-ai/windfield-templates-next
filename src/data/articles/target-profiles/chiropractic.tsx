import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
import { PullQuote } from "@/components/content/pull-quote";

export function ChiropracticProfileContent() {
  return (
    <>
      <SectionDivider label="Profile Overview" />
      <SpecTable headers={["Field", "Value"]} rows={[
        ["Profile Name", "Chiropractic Practice"],
        ["Space Requirement", "1,500 - 3,000 SF"],
        ["Rent Budget PSF", "$18 - $24 NNN"],
        ["Annual Revenue", "$500K - $2M"],
        ["Industry", "Healthcare — Chiropractic"],
        ["NAICS Codes", "621310"],
        ["Company Size", "2-15 employees"],
      ]} />

      <SectionDivider label="Why This Property" />
      <div className="prose">
        <ul>
          <li>Adjacent to existing chiropractic cluster (Magnolia Family at 8560 N Green Hills)</li>
          <li>Single-story — critical for chiropractic patients with mobility issues</li>
          <li>Modern build-out reduces renovation cost for treatment rooms, X-ray, rehab areas</li>
          <li>High traffic corridor supports new patient acquisition</li>
          <li>Growing population in Platte County suburbs</li>
        </ul>
      </div>
      <SectionDivider label="Known Prospects" />
      <SpecTable headers={["Business", "Location", "Status"]} rows={[
        ["Curtis Chiropractic", "208 NE Barry Rd, 1.5 mi", "Scraped"],
        ["Barry Road Chiropractic", "6316 NW Barry Rd, 0.8 mi", "Scraped"],
        ["I Got Your Back Chiro", "8359 N Congress Ave, 0.5 mi", "Scraped"],
        ["Magnolia Family Chiro", "8560 N Green Hills Rd, 0.1 mi", "Scraped"],
        ["Metro North Chiro", "27 NW Barry Rd, 1.8 mi", "Scraped"],
        ["Northland Spine and Rehab", "KC Northland, 2.0 mi", "Scraped"]
      ]} />
      <PullQuote>Upgrade to a Class-A building on Green Hills Rd — join the growing medical cluster with Northland Eye Specialists and Magnolia Family Chiropractic already on the corridor.</PullQuote>
    </>
  );
}

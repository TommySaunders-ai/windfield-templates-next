import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";

export function ApifyLinkedInContent() {
  return (
    <>
      <SectionDivider label="4 LinkedIn Profile Searches" />
      <SpecTable headers={["Scrape", "Target", "Location", "Max Items", "Est. Cost"]} rows={[
        ["13", "Medical Practice Owners (DC, OD, DDS, MD)", "KC Metro", "100", "~0.40 CU"],
        ["14", "Med Spa & Aesthetic Operators", "Kansas City", "60", "~0.30 CU"],
        ["15", "Urgent Care & Franchise Development", "United States", "50", "~0.30 CU"],
        ["16", "Healthcare Real Estate Investors", "United States", "50", "~0.30 CU"],
      ]} />
      <div className="prose">
        <p><strong>Actor:</strong> harvestapi/linkedin-profile-search</p>
        <p><strong>Requirements:</strong> Valid LinkedIn li_at cookie + residential proxy</p>
        <p><strong>Output:</strong> fullName, headline, location, currentCompany, profileUrl</p>
        <p><strong>Post-Processing:</strong> Cross-reference company names against Google Maps scrape results. Flag matches as verified. Enrich via Clay for verified email.</p>
      </div>
    </>
  );
}

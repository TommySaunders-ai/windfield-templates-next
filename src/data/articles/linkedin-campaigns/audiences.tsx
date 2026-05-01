import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function LinkedInAudiencesContent() {
  return (<>
    <SectionDivider label="Audience 1: Medical Practice Decision Makers" />
    <SpecTable headers={["Segment", "Titles", "Size", "Geography"]} rows={[
      ["A: Practice Owners", "Practice Owner, Medical Director, CEO, CMO", "2,000-4,000", "KC Metro 25mi"],
      ["B: Medical RE/Franchise", "VP Real Estate, Dir Site Selection, CDO", "500-1,500", "United States"],
      ["C: Healthcare Investors", "VP Acquisitions, CIO, Portfolio Manager", "500-1,000", "United States"],
    ]} />
    <SectionDivider label="Audience 2: KC Northland Medical (Lookalike)" />
    <div className="prose"><p>Built from seed audience of known medical contacts in trade area (chiropractors, optometrists, PTs, dentists from scraped data).</p></div>
  </>);
}

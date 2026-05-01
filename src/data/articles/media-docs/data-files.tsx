import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function DataFilesContent() {
  return (<>
    <SectionDivider label="Data Files & CSVs" />
    <SpecTable headers={["File", "Records"]} rows={[
      ["Master Prospect CSV", "125 rows (mixed — RE investors, medical, financial)"],
      ["Old Scraped Prospects", "100 rows (medical + RE + financial + retail)"],
      ["Old Contact Archive", "1,039 rows"],
      ["PEP Clay Upload CSV", "589 rows (Google Maps local businesses)"],
      ["PEP Clay Upload JSON", "589 rows"],
      ["Buildout Export Row", "1 row"],
    ]} />
  </>);
}

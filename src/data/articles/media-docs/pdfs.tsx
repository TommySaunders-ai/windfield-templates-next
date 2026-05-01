import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function PdfsContent() {
  return (<>
    <SectionDivider label="PDF Documents (9)" />
    <SpecTable headers={["Document", "Size"]} rows={[
      ["Buildout Listing Brochure", "14.3 MB"],
      ["IO Dossier", "5.5 MB"],
      ["Relationship Intelligence Report", "1.3 MB"],
      ["RI Report (Light)", "738 KB"],
      ["RI Report (Light v2)", "691 KB"],
      ["Property Flyer", "534 KB"],
      ["Tri-Fold Brochure", "1 MB"],
      ["Case Study", "307 KB"],
      ["Press Release", "221 KB"],
    ]} />
  </>);
}

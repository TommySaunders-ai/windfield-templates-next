import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function PhotosContent() {
  return (<>
    <SectionDivider label="Public Web Images (8)" />
    <SpecTable headers={["File", "Size"]} rows={[
      ["property-8630-hero.jpg (exterior)", "621 KB"],
      ["property-8630-exterior.png", "133 KB"],
      ["property-8630-exterior-2.jpg", "743 KB"],
      ["property-8630-aerial.png", "228 KB"],
      ["property-8630-interior-1.jpg", "635 KB"],
      ["property-8630-interior-2.jpg", "721 KB"],
      ["property-8630-lobby.jpg", "115 KB"],
      ["property-8630-hallway.jpg", "126 KB"],
    ]} />
  </>);
}

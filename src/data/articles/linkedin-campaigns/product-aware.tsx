import { SectionDivider } from "@/components/content/section-divider";
import { SpecTable } from "@/components/content/spec-table";
export function ProductAwareCampaignContent() {
  return (<>
    <SectionDivider label="Stage 4: Product Aware — Property Introduction" />
    <SpecTable headers={["Field", "Value"]} rows={[
      ["Campaign Name", "8630 Green Hills Medical Office — Property Introduction"],
      ["Objective", "Video Views + Property Brief Requests"],
      ["Audience", "Stage 3 graduates + calculator downloaders"],
      ["Budget", "15% of total ($750/month)"],
      ["Video Length", "2-3 minutes"],
      ["VCR Goal", ">50%"],
    ]} />
    <div className="prose">
      <p><strong>Topic:</strong> Full property showcase — exterior/aerial with M-152 visibility, interior walkthrough, medical buildout potential, adjacent cluster, demographic overlay, suite configuration visualization.</p>
      <p><strong>Lead Magnet:</strong> 8630 Green Hills Property Brief + Medical Floor Plan Options — full data sheet with 3 medical suite configurations, pro forma, and comp data.</p>
      <p><strong>CTA:</strong> Request the Full Property Brief + Medical Floor Plans</p>
    </div>
  </>);
}

import { SectionDivider } from "@/components/content/section-divider";
import { ChannelCols } from "@/components/content/channel-cols";

export function MK2Content() {
  return (
    <>
      <SectionDivider label="Deep Research \u00B7 Market" />

      <ChannelCols
        columns={[
          {
            header: "Core Research",
            items: [
              "Keyword Research & Analysis",
              "SEO Research & Analysis",
              "Research Briefs",
              "Products, Service & Pricing",
              "Global Market Landscape",
            ],
          },
          {
            header: "Paid & Organic",
            items: [
              "Paid Media Research",
              "Organic & Content Research",
              "Social Media Research",
              "Social Network Research",
            ],
          },
          {
            header: "Market & UX",
            items: [
              "Target Market Research",
              "User Experience Research",
              "Competitive Landscape",
              "Brand Research & Analysis",
            ],
          },
        ]}
      />

      <ChannelCols
        columns={[
          {
            header: "Market",
            items: ["Industry Landscape", "Industry Trends", "Competitors"],
          },
          {
            header: "Audiences",
            items: [
              "Target Market",
              "Target Market Segments",
              "Locations \u00B7 Industries",
            ],
          },
          {
            header: "Targeting",
            items: ["People", "Companies"],
          },
        ]}
      />
    </>
  );
}
